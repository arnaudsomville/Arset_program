# Introduction to Air Quality Forecasting, Part 1/3

`https://www.youtube.com/watch?v=IJh13kRCFqA` · id 58 · 1:52:32 · module 30 — Introduction and Access to Global Air Quality Forecasting Data and Tools

[00:01] hello everyone welcome to webinar series on introduction and access to global air quality quality forecasting data and tools
[00:11] this is a three part webinar series today is the first session where we will discuss the basics of air quality
[00:18] forecasting forecasting in the second and third session we'll go over nasa's geos model and ecmw scams model roller
[00:28] quality forecast respectively i am pawan gupta senior scientist of usra at nasa marshall space flight center will be presenting the today's
[00:42] session my colleague dr melanie foley cook contributed to this presentation as well well we also have brock salvin and jonathan behind the
[00:52] scene to support these diversities in many different ways we have following learning objective for today's session uh by the end of this training session
[01:04] uh we expect attendees will understand science behind their quality forecasting and how it parallel drawn to the weather
[01:13] forecasting forecasting various methods to forecast air quality some of the model components such as emissions initializations and use of the satellite data and
[01:26] regional air quality models for online and offline use will be discussed as well air pollution is contamination of the
[01:39] atmosphere by gaseous liquid solid or mixture mixture by breathing these pollutants they have serious effects on human
[01:49] health and entire biosphere they reduce the visibility damage the materials and affects the weather and climate of
[01:58] the planet the major pollutants monitored by the environmental agencies includes ozone particulate matters in different size range
[02:11] range lead carbon monoxide nitrogen dioxide sulfur dioxide and toxic compounds this slide shows three key component of
[02:22] air quality monitoring and forecasting traditionally air quality monitoring has been done using instruments on the ground ground these monitors are usually very accurate
[02:33] but the map near the top shows the location of ground monitors a pm 2.5 around the globe and you can see the
[02:41] large gaps in coverage even in countries with lot of monitors there are gaps satellite data help fill in these gaps
[02:50] in coverage and provide information where there is no information from the ground ground atmospheric models are needed to predict
[02:59] future air quality together these three component can comprehensively observes and predict air quality in this webinar series our focus will be
[03:12] modeling so why air quality forecasting needed air quality forecast provides public the public public with air quality information
[03:25] which they can make daily lifestyle decisions to protect their health this information allows people to take precautionary measures
[03:35] to avoid or limit their exposure to unhealthy level of air quality in addition many communities use forecast for initiating
[03:45] air quality action or awareness days which seek voluntary participation from public to reduce the pollution and improve the local air quality
[03:59] now let's see what are the factors which controls the concentration of pollutants both in the atmosphere and
[04:08] at the surface so number one is emissions it can be both natural and anthropogenic second is atmospheric processes
[04:19] and and it includes physical and chemical processes to produce and remove pollution from the air and the third is the metrology or the
[04:30] weather condition which can affect both emissions emissions atmospheric processes as well as the concentration directly therefore information and understanding
[04:42] of these three component is necessary to determine determine and forecast pollution concentration at surface now let's understand
[04:54] some more details about particle pollution pollution or particulate matter in next few slides particulate matter unlike ozone is not a
[05:07] specific chemical entity but it is a mixture of particle of different sizes shapes composition and chemical physical and thermodynamic properties
[05:20] if the particles are directly emitted and stays in the chemical composition in the atmosphere typically called primary particles
[05:31] whereas the secondary particles are formed in the atmosphere through chemical reactions here are some examples of typical
[05:41] primary and secondary uh particles which uh present in the air as polluted in this slide we'll learn about some of
[05:53] the mechanism through particles forms in the atmosphere and their respective size distribution so the chemical processes can either
[06:03] form new particles or add layers on existing particles this depends on the concentration of precursors precursors which required to create new particles
[06:18] incoming solar radiation temperature temperature amount of water vapor or relative humidity humidity and other mediums in the atmosphere
[06:30] some of the particles which forms in chemical through chemical process in the atmospheres atmospheres includes nox nitrate sulphates
[06:43] and some of the organic compound if you look the chart here you will see there are three distinct peaks
[06:51] of volume size distribution the first one is corresponding to the nucleation mode which which means they represent ultrafine particles
[07:02] typically produced through nucleation from the gases then the accumulation mode which is uh some micron particles less than one
[07:12] micron micron typically they produced either through coagulation or condensation of vapor on existing particles and the third one is the coarse mode
[07:25] which are larger than one micron particles and this is typically generated through the mechanical processes processes on the ground such as
[07:34] wind-blown dust or sea salt or ocean now now if we want to look the particle distribution in the atmosphere
[07:48] then they can be looked into three different ways by numbers by their surface area or by the
[07:55] volume or by mass so so the size of pm ranges from about tens of nanometer which is typically on the left
[08:03] side of this scales which are corresponds to the molecular aggregates and to the tens of micron which corresponds to the mechanically
[08:12] generated particles the smallest particles are generally more numerous and the number distribution of particles generally peaks below 0.1 micron
[08:26] the size range below 0.1 micron is also referred as ultrafine range the largest particles which are from 0.1 to 10 micron
[08:38] are smaller in number but contain most of the pm volume or mass mass the peak of pm surface area
[08:46] distributions is always between the number number and the volume peaks pa in the size range of 0.1 to 2.5
[09:00] micron micron has the longest residence time days to week week because it's neither settle nor coagulate quickly particle in the size
[09:11] range are the most efficient and penetrating deep into the lung in addition the light scattering efficiency per pm mass is highest at about
[09:26] 0.5 nanometer therefore pm 2.5 is very important to investigate for their impact on human health visibility and climate the chart
[09:38] on the right shows the their comparison relative comparison with some of the common objects such as human ears and sand
[09:48] which relates to the size of pm2 npm to 0.5 historically pm 2.5 is measured using filter-based filter-based sampler and averaged for 24 hour or
[10:05] longer longer us epa has devised a federal reference method in this method pm2 pm2 or pm is collected on a 47 millimeter
[10:18] teflon filter which is later weighted for mass deployment of the continuous pm 2.5 monitoring network began in 1999 here in the u.s using
[10:34] federal equivalent method is and is producing a more detailed understanding of pm 2.5 mass characteristics characteristics two continuous mass measurement
[10:45] instrument that is bam beta attenuation method and teom which is tapered element oscillating micro balance are typically used
[10:56] both can be operated with a either pm10 or pm 2.5 inlet chemical composition is still largely measured by filter-based
[11:08] instrument in recent time low-cost sensor technologies are emerging emerging these locus sensors both present new opportunities opportunities and challenges with respect to the data
[11:23] quality and accuracies so okay let's now move on to the weather conditions which can affect pollution concentration or the meteorological
[11:35] conditions conditions which have significant impact on the air quality at the ground weather or meteorological pattern influence the air quality
[11:47] even under constant emission conditions therefore weather related measurements can be critical in modeling of air quality here is an example
[11:57] how a ridge of high pressure can influence poor air quality through three different pathways the shrinking motion
[12:12] will create surface high creating calm veins or light beams leading to stagnation and poor air quality it can also produce
[12:25] clear skies which can enhance the photochemistry and leading to poor air quality and temperature inversion can reduce the vertical mixing
[12:39] trapping pollution in lower atmospheric layer layer also leads to poor air quality similarly drop of low pressure can lead
[12:51] to good air quality through multiple pathways rising motions create surface low moderate to strong winds which allow
[13:01] horizontal dispersion and that results into good air quality similarly the cool moisture and it de stabilize the atmosphere it create
[13:13] cloudy skies which can reduce the photochemistry but sometime it can also enhance the pm 2.5 chemistry inside the cloud
[13:23] and it can lead to good or bad air quality under the under the rising motions there is less
[13:33] chance of temperature inversion which enhance the vertical mixing and that can lead to good air quality so now let's look at the wind wind can
[13:44] also affect the pollution concentration in different ways emission from sources such as dust from dry soil and sea salt over oceans are
[13:55] highly dependent on winter speed and their transport by both speed and direction direction concentration of precursors are critical
[14:06] in generating the secondary particles strong winds can disperse them and make less favorable condition for chemical reaction
[14:18] similarly strong winds quickly disperse particles particles and lower the concentration and calm winds can help accumulation and increasing pollution
[14:29] transporter pollution from source to different places depends on on both wind speed and direction therefore it is critical to know the
[14:38] wind condition in different layers of the atmosphere to account for the transport pollution in forecasting models temperature temperatures are associated
[14:51] with increased evo pressure biogenic and power plant emission which act to increase both pm 2.5 and ozone
[15:02] so many emissions can be enhanced or suppressed under different temperature conditions conditions chemistry low temperature inversion can
[15:12] reduce the vertical mixing increasing the concentration of precursors precursors and then that can lead to more production of secondary pollution
[15:26] temperature can also directly affect the concentrations the cold temperature typically produce the inversion lower the mixing layer height it can it leads
[15:36] to the accumulation of particles and then it leads to higher concentration of particles within the surface layer
[15:43] high temperature on the other hand which is shown on the top figure can have a either inversion break or inversion is
[15:52] up in the high in the atmospheres higher the mixing layer height and which disperse the particles into bigger portion bigger volume of air
[16:03] and decrease the concentration at the surface layer so temperature also play critical role in in regulating air quality at the surface
[16:14] and then there are other factors which have have critical role like rain one of the removal processes for both pm 2.5 pms
[16:26] and its precursor can also suppress certain emissions such as dust cloudy condition can reduce formation of secondary particles which is reduced
[16:37] available of sunlight or photochemistry but but some chemical reaction inside or on the cloud particles can be enhanced in the
[16:46] presence of clouds moisture so higher the soil moisture can suppress emissions such as dust the atmospheric moisture on the other
[16:57] hand or the water vapor can enhance the production of part secondary particles so each of these meteorological or weather conditions
[17:07] have a very specific impact on how their quality will change at surface so now so far we learnt about the particles
[17:19] their formations whether conditions which may directly or indirectly affect the concentration in atmosphere and near the surface
[17:28] now we'll learn about forecasting of these particle concentration using various methods so the success of an air quality
[17:38] forecasting program depends not only on accurate prediction but also meeting the needs and objective forecasting forecasting recipients who are going to use the
[17:50] forecast forecast the major purpose includes public health notification notification episodic control programs such as action days days and scheduling specialized air quality
[18:04] monitoring program each of these purpose have a specific forecasting needs which may vary in accuracy accuracy special and temporal scales
[18:17] so our quality forecast thing can include air quality index or aqi aqi and the concentration forecasting aqi are nothing but range pollutant
[18:30] concentration concentration and divided into several categories such as good moderate and so on each category has a associated health
[18:40] advisory such as to avoid prolonged exposure by the kids during orange day corresponding to an unhealthy for sensitive group air
[18:52] quality category air quality index can be defined for single pollutants or they can be multi-pollutant air quality index
[19:04] as it is obvious that forecasting aqr forecasting of aqi is relatively a simple problem because here you are
[19:13] dealing with the range of particle concentration then the predicting accurate the accurate mass concentration of particle itself
[19:27] so so air quality forecasting can be done using many many different ways here i will go over some of the traditional methods
[19:40] used within the community some of them are very simple to use and some of them required lot more
[19:47] understanding and resources to implement so let's get started on that so the first method is persistent means
[19:59] tomorrow's concentration will be same as today's or yesterdays persistent forecasting works because atmospheric variables including pm 2.5 ozone
[20:11] exhibit a positive statistical association with their own past or future values in other words large values of
[20:23] a variable tend to be succeeded by large values similarly similarly a small values of variable tend to be
[20:33] succeeded by small values so for example if today's 24 hour pm 2.5 mass concentration was about 10 microgram per cubic meter it is
[20:46] likely that tomorrow's 24 hour pm 2.5 concentration will also be relatively low unless some specific air quality
[20:56] happens or some kind of transport happens so persistent forecast value can be modified based on the change in weather condition also
[21:08] so this particular method works well in areas with less pollution variability works in areas with persistent weather
[21:17] conditions conditions for several days uh definitely it has a high uncertainties another limitation a persistent method that it cannot
[21:31] predict the beginning and end of an air quality when it can only give you a more longer term
[21:37] average average conditions of air quality it only required data from measurement minimum software and expert is required
[21:47] to do this but most importantly it is very limited on a point locations and based on the ground measurement
[21:54] itself the second method is climatology it uses an average or extreme condition on a given locations air quality is highly depends on weather
[22:13] pattern as we saw earlier and when they repeat air quality patterns do repeats as well this particular methodology required
[22:22] data from multiple years data quality controls and change in emission emission should be known the climatical values
[22:33] can act as a bound and guide to the air quality forecast forecast it cannot be often used as a standalone
[22:42] method but it can serve as a supporting methods to to inform other forecasting methods does not require a lot of expertise or
[22:54] software software uh some of the example for the climatological uh values which can be used for air quality
[23:01] forecasting um like all time maximum for month and side you can also derive climatologies for how how how long certain aqi values will remain
[23:15] in a given month on a given month or by week you can also calculate number of days when aqi will
[23:24] be high um we can also derive the climatology by day of the week so uh weekend versus weekdays
[23:32] climatological values can be used uh to forecast air quality similarly it can be done for holidays and non-holiday seasons
[23:42] uh traffic areas which is urban versus rural areas so climatology can be used in many different ways so
[23:52] for example uh air quality forecasting predict a value of aqi of 150 but climatology says that this never happened at that
[24:02] location so forecast can be revised based on the climatology to more probable value of 130 or 120
[24:15] so so change in emission can result in the same weather condition producing the lower pollution concentration so we we
[24:22] have to be careful when we start using the climatology as one of the method to forecast tomorrow's air
[24:30] quality or future air quality conditions the next air quality forecasting method is called criteria it's also called rule
[24:39] of thumb it uses a threshold value of either pollutant concentration or one of the weather parameter or both
[24:50] this method is based on the fact that a specific value of certain weather parameter and air quality
[24:59] variables are associated with high pollutant concentration for example high pollutants constitution are often associated with hot temperature and those temperature can be
[25:11] used as one of the predictor for pollutant concentration in this particular example here shows a boundary layer often associated with pm
[25:22] 2.5 concentration it's a good method to forecast an accidents accidents non-accidents or pollution in a particular aqi category range rather
[25:35] than the exact concentration need need in order to do apply this method we need knowledge of physical and chemical
[25:43] processes processes that can influence the pollution concentration concentration it can be used as a primary forecasting method but also be with other method
[25:55] easy to use and relatively simpler to develop it can also be revised easily as more data becomes available
[26:04] in the figure one example is shown here is that on x axis you have a maximum temperature on y-axis you have a
[26:13] daily maximum eight hours ozone concentration concentration and what this plot shows that if we put put a thresholds on maximum surface
[26:25] temperature of 28 degree then it does shows that eight hour ozone concentration only going to go above
[26:37] 80 ppv if the temperature is beyond 28 degree centigrade so most of these points only occurs occurs except few of them here when the
[26:48] temperature is higher so this can be a criteria for high ozone day when the temperature is going beyond
[26:57] 28 degrees so this is one of the example for criteria methods the next method is classification and
[27:08] regression tree or card method is a card is a statistical procedure designed to classify data into distance or dissimilar groups
[27:22] for air quality forecasting card enables a forecaster to develop a decision tree to predict pollutant concentration based on the value of
[27:33] predictor predictor variables that are well correlated with the pollutant concentration the splitting of data sets into groups
[27:43] and tree development continues until the data in each group are sufficiently uniform so therefore it is a
[27:51] iterative process predictor variable used in card typically includes meteorological data but may also include air quality data or
[28:02] other data such as the day or the week or the length of the day etc typically cart is used
[28:16] to create by a software and it required multiple years of the data data card is very sensitive
[28:24] for uncertainties in the input variables and can have larger impact on output of pm 2.5 the next method is a regression
[28:38] equations equations or or which can also be extended using artificial intelligence neural network or machine learning methods
[28:48] it's a statistical method it is based on the relationship between input which can be typically metallogical parameters
[28:57] or other pollutants in the output which is pm 2.5 in this case here is an example of a typical
[29:04] regression equation where y is the dependent variables the variable which we want to predict that is pm 2.5
[29:14] uh uh and then x is a independent variable for which we have measurements available and then the beta0 and beta ones are
[29:23] regression coefficients intercept and the slope of the equation so this is a very simple regression equation equation a two variable regression equation which
[29:34] can be used the regression equations can be a multi-variable also where you have more than one independent data sets like x1 x2 and xn
[29:50] these are often forecasted values of weathers for example temperature vanes relative humidity in order to apply and design regression
[30:03] equation the understanding of physical chemical process and association between independent and dependent variables is required typically it is done using a
[30:15] statistical software package which can fit regression equations you can use an excel spreadsheet as the simplest simplest software to build these models
[30:29] uh often whenever you develop a regression equations equations an independent model verification required means you need to use the data
[30:37] sets sets independently which have not used to build your regression equation to verify the model and the accuracy associated
[30:46] with it often this kind of regression equations are have a overfitting problem uh they are more appropriate to predict the mean better
[31:02] than the extreme values so it always regression equations always have trouble in predicting very high or low value of the
[31:12] distribution distribution uh uh most of most often regression equation will will likely under predict the high concentration and over predict the low
[31:24] concentration concentration in last five to ten year machine learning and neural networks algorithms algorithms have become more popular and have kind
[31:36] of taken a place and replaced the regression equation approach using these more sophisticated ways where these algorithms can train or learn the
[31:51] patterns patterns between the input and output and they can be they can learn the pattern which is not
[31:59] linear and more non-linear and complex in nature now now the the most important air quality methods are deterministic air quality
[32:14] modeling these are mathematically represented the process that affects their quality so these are more physical methods of air quality forecasting
[32:28] it often involve a system model that works together to simulate the emissions transport diffusion transformation from one component to
[32:38] another and removal of air pollution from air historically historically these physical models are used to simulate simulate future scenarios of air pollution for
[32:51] change in emission scenario or change in climate conditions these models can be simple 1d model or 3d models 1d models mean only
[33:02] providing surface level concentration or 3d models means in addition to horizontal grid and time resolution it can also have a vertical
[33:13] resolution providing the concentration in different layer of the atmosphere these methods required years of development and in-depth expertise on
[33:24] air quality processes and access to emission data sets with high-end computing resources the meteorological models forecast the meteorological condition
[33:38] that determine transport and mixing influence the chemistry emissions and deposition so here is some more on deterministic
[33:53] air quality modeling uh prognostic meteorological models solve fundamental equations to simulate massive behavior and as we discussed there are three
[34:04] different models which works together here the meteorological model these models forecast meteorological condition that determine transport and mixing and
[34:15] influence chemistry emissions and deposition deposition and then there are emission models these models simulate the temporal and spatial
[34:25] and chemical distribution of emission of pollutants in question and are precursors from both anthropogenic and natural sources
[34:36] in the air quality models these model uses the forecast from meteorological and emission models to simulate the
[34:44] transport diffusion transformation by chemical reaction and removal of air pollution three-dimensional air quality models are classified being either lagrangian or
[35:00] uralian depending on method used to simulate simulate time-varying distribution of pollution concentration concentration some of the example of
[35:12] meteorological models are are mm5 mm5 rams rams and warf now let's look a little bit more on the
[35:24] emissions emissions there are many sources of emissions on the ground both natural and anthropogenic these these emission datasets should include the
[35:36] amount of emissions by each source and each chemical compound for each horizontal and temporal grids as defined
[35:48] by the model setup some examples of emission include dust dust suit suit nitrate and sulfate biogenic biogenic sea salt
[36:02] volcanic eruptions etc etc so so now the lagrangian or in other words trajectory models uh typically follow the individual air
[36:16] parcel over time and using the meteorological data transport and diffuse the pollutant ah they also sometimes include chemical
[36:27] transformation so they typically follow individual air partial from one place to another in different layer of the atmosphere
[36:36] this approach is computationally efficient efficient when treating a limited number of emissions also it works best when you
[36:44] have only one or two source of emissions however however it is difficult to properly characterize the interaction of large
[36:53] number of individual sources when non-linear chemistry is involved and these models have limited usefulness in forecasting secondary pollutants
[37:04] these are good for only primary pollutants and for tracking the partial over time one of the example
[37:12] for lagrangian model is high split cam which is a very popular model out of end car now the
[37:25] second type of deterministic air quality models are eulerian eulerian models the typical illerinian air quality model is
[37:36] is bounded on the bottom by ground and on top at the specified height and some distance on all four
[37:47] side depending on the size of meteorological modeling domain and the area of interest the volume of modeling domain is divided into grid
[37:58] cell cell these each hillary and model use a grid of cells which is vertical and horizontal uh where chemical transformation
[38:11] equations are solved in each cell and pollutants are exchanged between cells so so all the atmospheric processes equations are
[38:22] solved for each grid cell whereas whereas in lagrangian method you are tracking the partial from one place to another
[38:33] place using the methodology whereas here you are solving the processes equation or the concentration equation in each grid cell
[38:44] this model can produce three-dimensional concentration field for several pollutants pollutants but required significant computational power so so typically
[39:00] typically the smaller grid represent higher spatial resolution of the model which means you need more computational powers
[39:11] powers and often leads to higher accuracies some of the example of ellerian model which you might be
[39:17] familiar are cmag warfcam geos ecmwm these are all regional or global models which falls into this category
[39:31] now what are the strength of these 3d air quality models or the one which we just talked about
[39:39] physical models or deterministic model right so 3d recorded models are phenomenological based means the simulating the physics and chemical
[39:50] process that results in formation of particles and destruction of air pollutants it can actually forecast for larger area
[40:01] is irrespective of the ground measurement so some of the method which we saw earlier depends on the ability of the ground
[40:08] measurement but these models have no impact of ground measurement except we use the ground measurement for either
[40:17] assimilating them into the model or validating the model the spatial and template pattern can be analyzed by mapping the outputs such as
[40:28] one you are seeing here from the geos model model which is actually mapping the forecast of of pm 2.5
[40:37] during a fire events or smoke transport over north america during the recent fires these models are more suitable for
[40:50] operational regional and global air quality forecasting and alerting public in parallel to the weather forecasting they can also be used to assess the
[41:02] importance of local emissions sources and long-range transport some of the limitations of these models includes includes the air quality forecasting accuracies
[41:15] depends on the ability of meteorological models to forecast condition with sufficient accuracy so as we discussed earlier
[41:25] these models are system of model which include meteorological model emission model air quality model so so their accuracies are also affected by
[41:35] capabilities of each individual component similarly similarly out of date or course resolution uncertain uncertain emission inventories can also lead to
[41:49] be a source of uncertainty in air quality forecast the special scale of model forecast uh also becomes important when you are
[41:58] comparing comparing and assessing the forecast using the ground observation so if your resolution is very coarse it will be very difficult to compare
[42:08] with the ground measurement because it represent area averaged versus a point location so it will become challenging
[42:15] to assess the actual accuracy of model forecast uh definitely it require expertise in both development and running the
[42:27] model for operational air forecasting and and as a result it involve handling large amount of data sets
[42:37] both both as input and output so so we need to understand uh we so far we looked like various methods
[42:50] to uh forecast air quality uh which include very simple criteria or persistent tech methods regression including some machine
[43:02] learning methods and then physical methods such as war for cmec tech modeling so depending on the forecasting need
[43:15] different methods can be used so it is very very critical that we understand the forecasting needs so
[43:23] we we probably ask several question when we ask about the needs who will be who will be your end user for the
[43:29] forecast or who will eventually use this forecast forecast what should be the length and frequency of these forecasts we
[43:37] when the forecast should be initiated then it should be beginning of the day middle of the day
[43:43] multiple times of the day and how frequently you want to revise the forecast means we can initiate forecast today and forecast for
[43:53] next five days should we wait for another five days to initiate another forecast or should we revise that and after six hours when we
[44:02] have more knowledge about the state of atmosphere or should we revise every day typically typically depending on the which model different
[44:11] models models revise their forecast every 6 hours 12 hours or 24 hours and then the accuracy requirement or the
[44:21] level of tolerance so so we need to know whether whether you need to forecast the air quality
[44:30] index or quality categories or you need to forecast the concentration with certain certain level of accuracies so all these
[44:40] forecasting needs must be understood before we choose what kind of model or method we want to use to forecast air quality
[44:51] now now how do we assess the forecasting [Music] [Music] accuracies or the assessing the forecast itself itself so there are
[45:03] many different ways many statistical methods methods or the parameters which can be calculated to assess one of them is definitely accuracies
[45:14] which is a mean [Music] [Music] closeness between the forecast and the observed value so let's say you made a forecast today the
[45:25] tomorrow's pm 2.5 will be 50 microgram per cubic meter 24 hour average now tomorrow when tomorrow day passes you will have
[45:35] an observed value from the ground as well so if you compare those two so the 50 microgram per cubic meter will be
[45:43] your forecast and let's say you observed 45 microgram per cubic meter instead of 50 tomorrow so the difference between
[45:52] the two and the number of points [Music] [Music] you can do this over time and calculate the average accuracy of your observation
[46:01] you can calculate for every day you can calculate for over a time series so that n is the
[46:06] number of it can be number of grades it can be number of ground station it can be number of time
[46:12] stamp the another quantity uh and as you can see we have we are trying to take the absolute value here so it basically
[46:20] gives you the accuracy absolute accuracy uh another term is the bias it indicates whether your bias is
[46:29] very similar to your accuracy but it is not absolute so the negative value of bias typically typically demonstrate that
[46:41] your your forecast was underestimated and the positive value of bias will show that it is overestimated similarly correlation is an important
[46:52] quantity typically calculated here is an example it basically shows the relationship between observed and forecast values sometime
[47:02] sometime there may not be high accuracy but the forecast is highly correlated to the observed value so just to give you an
[47:09] example here there are four different uh uh plot on excess you have observed value on y axis you have four custard
[47:17] values and in first case the correlation is excellent almost close to one to one line right so all the points so it means
[47:24] observed value perfectly matches with the forecast values in in in case b you actually have a negative correlation
[47:33] means as your observed value increasing your forecast values are decreasing so it means this is completely forecast is
[47:42] giving you completely opposite results although they are correlated up to some extent but they are in different
[47:49] direction direction c has a more realistic view of typically what it looks like you have a high degree of
[48:00] correlation but there is a scattered on both side of the one to one line and then d is uh
[48:07] basically showing um a really bad correlation between opposite and forecasted value now now when you're trying to forecast
[48:18] categories or air quality index which is like good moderate then these numerical calculations instead of numerical calculation we rely
[48:30] on more on accuracies something called we we call it confusion matrix where you actually compare each category how they are
[48:40] performing against the observed category so for example in this on a vertical line you have observed on um
[48:49] horizontal line you have forecast so you take say you will say okay uh there were total k
[48:59] k amount of uh observed number of days good quality was observed and then out of those k how many were
[49:11] observed as good how moderate unhealthy or uh uh unhealthy for sensitive group in the forecasted so you divide that so let's
[49:21] assume you have 24 custard 20 observed value as a good out of those 20 observed value forecasted says 15 were forecasted
[49:31] were also able to uh forecast them as good 15 times remaining five there were three in the moderate categories
[49:42] there were two in this unhealthy to sensitive group and one in another so you can say that out of 20
[49:51] 15 which is about 75 percent uh uh forecasting model was able to predict correct air quality category and then the remaining 25
[50:03] percent it was either moderate or other specific similarly you can calculate this confusion matrix for each of the forecasted category and we
[50:12] will look that into a little bit more while we do the exercise now one thing which we have not talked
[50:20] so far our role of satellite data in this entire air quality forecasting how satellite did a play role
[50:28] in entire air quality forecasting exercise so uh satellite data have been uh used in air quality modeling
[50:39] for many different uh perspective or applications one of the use of satellite data are emission estimates and currently uh
[50:51] biomass burning missions dust emissions volcanic emission and certain anthropogenic emissions are actually actually calculated based on the satellite
[51:03] observation or satellite measurements of these different components and once they are the advantage of using satellite data is that
[51:12] they are globally available and uh up to some extent very high special resolution and you can actually
[51:23] update them into more with more real-time data sets satellite data are also used to provide the boundary conditions so for
[51:32] example you're running a air quality model over u.s you want to know what is coming out within the u.s from
[51:41] outside the u.s boundary so you can use for that satellite data as a boundary condition which can fit to the model and
[51:49] that will help you understand how that thing will transport within the us data simulation is most common another way
[51:57] where satellite data are heavily used and we will learn about this data simulation aspect how it has
[52:04] been used in nasa's model and in cams model model for making air quality forecasting more and more
[52:13] accuracy accuracy and then of course since models on run on a certain specific special grids you need to have a
[52:25] high density of ground measurements or special distribution of pollutants to compare or validate models so satellite data have been heavily used to
[52:38] actually actually assess the special and temporal patterns of pollutants which are either forecasted or simulated by the models
[52:50] and it has been done by many many different agencies all around the world uh here are some of the examples uh this
[52:59] is taken from one of our previous webinar series which you can find the link on our site website
[53:06] but this gives you some of the example of biomass burning fire emission database which were created using uh one form or another
[53:16] form of satellite observation and there are a number of them you know are available they have varying special and temple resolutions
[53:24] um in each of that reference are given for more details and now finally i just like to give you
[53:31] a couple of example of the models original models which have been very popular in the air quality community and have been used
[53:42] by many many people all around the world and one of them is called community multiscale air quality modeling system
[53:49] in other words cmac it is a open source hillarian model by by developed by u.s epa used by wide range of researchers all
[54:01] around the world including agencies such as epa national weather service cdc cmac uses coupled mathematical representation of actual and physical
[54:14] process process chemical and physical process to simulate air quality so it's the same as eulerian model properties which we
[54:22] discussed again originally like i said developed by sema epa but it's a open source so larger community contributed in
[54:32] development of this model here is the website you can find all the details you can download this model and
[54:40] install locally there are database associated with the model uh which have been run over the time which also can be
[54:48] downloaded from this website and it can give you a really good idea how the model works uh and
[54:56] very good uh resource for people for students and new professionals who wants to learn how a an air quality model can be run or
[55:06] modified modified another popular model is uh weather research and forecasting that is warf model model coupled with the chemistry so it calls
[55:16] warf game it's a noah loved up and led by noah but larger community can contribute to the model development significantly
[55:27] it can also be used for regional scale air quality field campaign analysis or the interaction between clouds and
[55:35] chemistry and menu so this is just an example showing the smoke forecast using this model um in the u.s and you can get some more
[55:45] details and forecast from the link provided below and finally uh just want to highlight that a lot of the material
[55:55] presented in this uh today's session was actually taken from this guideline by developing an air quality and
[56:06] and a forecasting program from epa this is an old document eps put together and i will highly recommend anybody who likes
[56:15] to learn about basics of air quality forecasting to go through that in addition several books which people have
[56:27] which i have referred throughout the presentation presentation including seinfeld and pandas ballas and halves halves there really provides more
[56:38] in-depth in-depth on the meteorological modeling as well as atmospheric chemistry modeling okay so since we have gone through
[56:52] the presentation and we reviewed reviewed some of the meteorological uh factors which can affect the air quality and those are required to
[57:05] understand understand or to make air quality forecast and then we also reviewed some of the traditional methods which people
[57:15] have been using to produce their quality forecast a lot of those methods which are such as the cart or
[57:25] regressions or climatology or criteria based method they have been used extensively more more on individual city like
[57:36] levels or local levels where they have to produce forecast just for one location one point location um
[57:45] whereas the deterministic air quality models uh which includes war cmac and then the global model like geos or
[57:56] ecmwf ecmwf they they are more grid-based model means they can produce the forecast on a given domain or region or globally
[58:07] with certain special and temporal resolution resolution some of them also have a vertical resolution so so what i'm going to talk now uh is
[58:17] we'll go through an exercise there is a file to download if you click on the today's material there is an excel
[58:28] click on the handout and you will find a a good session one exe dot xls this is a
[58:36] basically a a excel spreadsheet with some of the data pre-populated pre-populated and we'll go through some of the
[58:47] exercise or calculating some of the statistical parameter on how to assess the air quality forecast or how to quantify the accuracies or
[59:00] uncertainties or the pattern in these forecast forecast so i'll give a minute for people to download if you don't have if you want
[59:09] to walk through with me on the exercise these some of the things which i'm going to talk are very very simple so you may
[59:18] already be aware of those and some of them may not be but i think this is a good exercise uh
[59:26] before we get into more details analysis of this uh this type of analysis and in part two
[59:35] and then part three so let's take one minute time everybody is ready then i'll start uh on the exercise
[59:46] so you should be able to open this on your computer if you don't have uh microsoft excel it should be
[59:53] able to open in mac or google documents or any of that i just want to uh mention that the
[1:00:04] excel file is in the handout section here in go to webinar that will download for you if you're having trouble
[1:00:12] downloading it from the web page itself the training web page i found that if you right click and then click save as
[1:00:20] you'll be able to download it so right click and click save as alternatively you can download it
[1:00:33] straight through go to webinar on this on your browser tab where you're watching this right now so just go to
[1:00:39] the handout section open it up you'll see the part one aq forecasting pdf and you'll also find goop to session one exe
[1:00:47] and that can be downloaded through go to webinar okay everyone has this file now so let's begin um sorry
[1:01:01] i won't be able to help uh individuals uh because we have about four or 500 people so i'll try to go slow
[1:01:12] so when you open this uh excel spreadsheet you will see on the bottom left there are two sheets
[1:01:19] one is called data eqi uh i will not open that for now that is for your reference and later on the
[1:01:27] second one is called data so the data has some pre-populated data i created this is just from random uh one of the model
[1:01:40] which we often use [Music] [Music] okay so this uh this is a just simple data uh this uh
[1:01:49] this is the whole idea of this data sets is to give you an example how we can do certain analysis
[1:01:56] so so it does have a the first column is a station index you can consider them as a
[1:02:02] station id or station name or whatever you can call them but basically different number represent they are coming from different ground
[1:02:12] monitor stations so these can be basically basically your air quality monitoring station this second column is called
[1:02:20] initialization date this is the date when the model is initialized so remember when you are talking about
[1:02:28] the forecasting especially the physical models they are initialized at certain time right they will start their forecast at 0 z or 12z or
[1:02:41] 18c and with certain frequency this particular model in this case was initialized on february 22 la 20
[1:02:50] uh year 2020 at 7 00 a.m time time and this one the next column c is called
[1:02:58] pm 2.5 measured this is a measured pm 2.5 quantity which is from those ground station uh this is the time at the most of the
[1:03:09] measurement so you can see this is measured at uh on the same date but on different time
[1:03:15] for uh and as the stations changes you will see the time and date might be changing so this is not very relevant
[1:03:24] here for this particular exercise but i just want to make sure you understand what these data points are
[1:03:31] pm 2.5 forecast uh this is the forecasted value by the model so remember now and these are
[1:03:40] initialized or forecasted by model at that particular time so this is initialization time it is going to be
[1:03:46] same throughout the data sets because the model is just forecasted one time and it forecasted for several
[1:03:54] hours in the future so you will see that it is forecasted for 8 17 some station 23 hours so for the entire day depending
[1:04:02] on the station the time might change and then the forecast time so this is the time for which this forecast is
[1:04:10] valid so although it was initialized at 7 00 a.m but this forecast is valid for 17 30 um pm or 5 30 pm
[1:04:21] and this is the value now one thing you will notice between the pm 2.5 which is measured and pm 2.5 which is forecast is
[1:04:29] that pm 2.5 measured is only whole number right there's no decimal here and this is uh think about why this
[1:04:38] is a whole number versus pm 2.5 is forecasted as a decimal value so just think about we'll
[1:04:45] get back to you on that little bit later okay now we want to see how good the
[1:04:56] the typically you don't get the data uh in the same file from measured and the forecasted values so
[1:05:03] before before doing this exercise one of the thing you will have to do is that you will have to we call it spatial
[1:05:11] temporal collocation means we want to match the model at the ground station location using their latitude and longitude so
[1:05:20] that you will have to do independently and then the temporal collocation means we have to match the time of the ground
[1:05:27] measurement which is this here versus the time of the forecasted not the initialization time but the time
[1:05:35] of the forecasted when the forecast is valid now you will see there is a difference the the ground stations are making
[1:05:43] measurement at whole hours right 8 17 14 13 minutes every hour's type of measurements whereas the forecasted
[1:05:53] values are or typically they for this particular model they are three hour intervals but the time you will notice that it's 8 30 17
[1:06:02] 30 it is so it's 30 minute difference between ground measurement and the forecast so this is not
[1:06:13] not since the ground measurements are not available at sub hourly skills so unfortunately we cannot do much about this to make both
[1:06:22] synchronous but we are assuming that this this forecast is valid for 23 hours also and then that's how we will compare them so
[1:06:31] now you will notice that they are kind of temporarily collocated as much as we can do okay
[1:06:40] okay now now the first thing if we go back to our presentation we looked at we calculated the different
[1:06:48] accuracies right and to calculate the accuracies we basically calculated uh what is forecasted minus observed for each value so to do that this is my four
[1:07:01] custard values and this is my observed values right so i calculate this using simple formula if i drag this all the way down
[1:07:17] then it will calculate that value for entire entire column column similarly similarly to calculate so to calculate the bias we need this to
[1:07:27] calculate the accuracy we need absolute value of this difference so we'll just take absolute value sorry we'll just take
[1:07:37] absolute value of forecasted minus observation observation and basically you don't have to do much you just take absolute value of this
[1:07:49] again you drag it all the way down and then calculate now if you look the formula then
[1:07:57] the mean bias is nothing but the mean of this value so you just calculate average arithmetic average
[1:08:08] of this column which is g and the row number is start from g2 to g176 once you do that you will be able to
[1:08:23] calculate you can copy this and paste it to the next column it will calculate the same quantity for this so
[1:08:30] this is nothing but your mean bias that is what we mean by us and and the since the accuracy is nothing but an
[1:08:41] absolute value of the difference between forecast and observed observed that is your accuracy so that is in unit
[1:08:48] of microgram per cubic meter mean bias close to negative it's first of all it's negative it means overall
[1:08:56] the model is underestimating okay okay that's what it is saying overall mean on a mean sense and the accuracy is about 4
[1:09:06] microgram per cubic meter so that is you can say in other words the mean difference absolute mean difference
[1:09:13] between between observation and forecast is about 4 microgram per cubic meter you can calculate other parameter as well
[1:09:22] but these are the very simplest two parameter which you can easily calculate now let's look uh try to
[1:09:30] do a scatter plot so to do a scatter plot we'll column c always make sure that you plot the
[1:09:37] measured value on the x axis so you select that c and e and then click on the insert
[1:09:45] and under the insert there is a scatter plot now i'm going to move this scatter plot to a
[1:09:54] separate sheet so that we can actually keep it there and analyze in more better way okay i'm
[1:10:04] going to also change all the font size so that everybody can see them okay this is odd
[1:10:21] it's not letting me change it okay good here now you can see this is observed value on x-axis uh if you want you can
[1:10:37] go to the chart design and you can provide the titles primary horizontal is your observed observed pm 2.5
[1:10:49] and then your primary secondary axis is here forecasted values now now just looking this chart you can see that they are really very
[1:11:09] well correlated and that kind of supports supports the numbers which we calculated for the mean bias and accuracies now i can do a
[1:11:19] quickly quickly [Applause] plot a regression line or a called trend line and there are many different options i'm just going to choose the
[1:11:33] linear one and then display the equation on the chart and display the r square value also so
[1:11:40] so you can see this linear equation linear line is plotted here the regression coefficient has 0.94 which is less than 1 which suggests
[1:11:52] overall underestimation of the in terms of the mean r square is 0.87 which basically tells us that
[1:12:00] forecasts are able to uh uh explain about 87 variability in the observed data so it may not be 100 but
[1:12:11] this looks very very good uh for a given forecast forecast again you may not see this all the time
[1:12:18] you may see work correlation but that's uh uh depending on which model you are using and where you are using it
[1:12:26] okay so this is one way to look for the to understand the performance of the model and
[1:12:34] now now let's also look another quantitative way in which we can actually actually plot the data as a time series now when
[1:12:44] you are plotting the data as a time series remember uh these data represent for different uh stations so you will have to plot them
[1:12:54] individually for different stations so to to to make it easier what we are going to do is
[1:13:00] we will just select all the data and filter them once the data are filtered you you select the date
[1:13:16] column and and we also select the forecast column and then go to insert and under the chart we'll select this
[1:13:28] particular options and then i'm going to move this chart to a different call it time series and let me see if i can hold on change
[1:13:46] the chart type okay so the axes have con changed here so so select the data that's the best way to
[1:14:10] go go and then the first one is observed observed and x value should be go to the data should be the
[1:14:21] date date so i'll just select this date column all the way down and then the value should be
[1:14:30] y value should be the p n 2.5 for that particular column now i'm going to add another time
[1:14:43] series which is forecasted again your x should be the same date and the y is going to be a for customer which is
[1:15:02] this one and then click ok and now you will see a really messy plot and this is happening
[1:15:15] because because we have selected all the station together so we can filter it now since we applied the filter we'll go to the
[1:15:23] filter click on that arrow and then basically select any station we want to display so i selected the station 10 we
[1:15:31] have about four values for that and if you go to the time series it shows nicely the value
[1:15:40] on those four on x-axis you have the date and time and on y-axis is the pn 2.5 again
[1:15:48] red is forecasted observed so you can see that easily we can change this to any station we want
[1:15:56] please drop 10 we can go to 8 and the cancels will change accordingly and both are actually model and
[1:16:05] observed while you are tracking the pollution in very nice way so this is how we do the quantitative
[1:16:13] evaluation quickly uh in addition to that you can also do special and special analysis where you can actually
[1:16:23] go a little bit more into mapping the data on a map correlation bias you can also compare this with the
[1:16:32] satellite data to look for the spatial pattern pattern to assess how the spatial patterns from forecast are matching with the satellite observed
[1:16:42] values of that same quantity now quickly let me go to this data aqi to actually demonstrate another
[1:16:50] important aspect uh which is called categorical or the classification type of assessment right so one is when we were trying to look at
[1:17:03] the assessing the air quality forecast one is the concentration itself which is what we looked so far using the time
[1:17:09] series scatter plot or accuracy calculation the second one is uh categorical categorical uh uh how each air quality is forecasted
[1:17:20] correctly uh category is forecasted correctly by the model so as we know uh based on the range of pm 2.5 there are
[1:17:29] good categories which is represented by green color there is a moderate which is represented by yellow orange unhealthy
[1:17:37] for sensitive group and then the red and other colors comes into pictures as the mass concentrations increases and these
[1:17:44] air quality categories can be calculated for one pollutant concentration or multiple together there are different formulas to do the
[1:17:53] multiple concentration as well also typically these categories are calculated for 24 hour mean average values but you can also do for
[1:18:04] individual hourly data as well so that is what we did so what i did is the first thing which i don't have time to
[1:18:10] do it here for everyone but what you can do is you can kill based on the value
[1:18:17] of pm 2.5 you can go to here filter and then say greater than i know greater than 55 to 150 is the red
[1:18:28] color so i'll select this or then all the data which are in that range will be selected and represented here so
[1:18:38] i can color them all select everything and color them and select and read so this is going to be red
[1:18:44] similarly i did this for every all the categories and i can display them here so now you
[1:18:53] can see this is yellow means moderate unhealthy for sensitive group unhealthy unhealthy there are only three categories in this
[1:19:03] data sets and these same thing you re repeat the step for the forecasting now how we how do we assess the accuracies
[1:19:13] of this air quality one is you can just look one to one and see where they are
[1:19:17] matching where they are not mismatching here they are matching here they are matching here they are not
[1:19:23] matching mismatches so how do we calculate calculate the accuracies for this kind of classifier classifier so we
[1:19:31] to do that we calculate something called confusion matrix and the confusion matrix is nothing but a accuracy assessment table
[1:19:40] where you actually calculate or count the number of categories in each bin so you have yellow this is for
[1:19:54] forecasted and then you have same three categories yellow orange red from the observed so on the x-axis is
[1:20:02] forecasted on the y-axis observed values now now i calculated using using this table that there are total
[1:20:17] 45 forecasted orange values uh yellow values out of which uh sorry there are 45 total observed yellow values out of
[1:20:27] that 41s were correctly forecasted by um by forecasting model out of 45 four of them actually forecasted orange instead of yellow and
[1:20:39] none was forecasted as yellow red and you can see that easily by selecting the only values which are
[1:20:50] less than 35.5 35.5 micron micron so these are the all the yellow categories now you can see
[1:21:00] all the 45s are displays here and there are one two three and four of them are came into the so i calculated that in
[1:21:08] the same manner i calculated for orange i calculated for red red and we will notice that when you total
[1:21:17] them them the total will be 175 either in vertical axis or on the horizon so this is how
[1:21:23] you calculate the confusion matrix now you can calculate the percentage time time when yellow categories is correctly
[1:21:32] forecasted so you just basically divide this uh number with the total number when it was focused so 41 divided by 45
[1:21:41] multiply 100 so 91 time model was correctly able to forecast the yellow categories 73 time the model was correctly able to
[1:21:52] forecast orange categories and 65 times model was correctly able to forecast the red categories so you can
[1:22:00] see that as the concentration is increasing your accuracy of the model is decreasing you can also calculate the
[1:22:08] overall accuracies including for all the classes for that what you do is basically basically add these numbers which are correctly
[1:22:17] forecasted so 41 plus 72 in orange plus plus 21 in the red categories and once you do
[1:22:28] that that you divide that by total number of categories 175 so you will see and then multiply by 100 that 76 percent
[1:22:37] your model is accurately able to forecast forecast certain air quality category whereas the 23 25 or 23
[1:22:49] is it is misclassified so you can calculate the misclassification by just subtracting this number 100 minus minus this number and you will get this same
[1:23:03] number as this this is also calculated using misclassified numbers so you add all the numbers which are misconstrued 4
[1:23:11] plus 0 plus 20 plus 6 plus plus 11 plus 0 and then you will get the same
[1:23:19] number so this is called error rate or misclassification misclassification accuracy misclassification rate rate so you can calculate these accuracies
[1:23:32] and confusion metrics to assess the quality of the forecast further so i'll just leave it up to here i mean there
[1:23:39] are more ways to do more sophisticated analysis on this but these are the simplest one which can actually help you
[1:23:47] understand understand the quality of forecast in your region in your study region or location where you live
[1:24:01] the next session uh we will um um talk about nasa's geos model and how to access the data my colleague dr melanie
[1:24:11] falet cook will lead this session and and with that thank you everyone for attending attending and i'll close it here and then we'll go
[1:24:21] to the question answer next if you have not typed your question you can type in the questions section and
[1:24:36] brock brock will be able to put that question here in the document and you should be seeing
[1:24:43] a google doc which we will actually post later on the website but that's where we are going to take
[1:24:51] the question and address them one by one the first question is where can we download data for average daily values
[1:24:59] of aqi in popular cities is it available for india in every country so one of the website which does provide
[1:25:09] global data sets on air quality including india is called openaq.org it's a non-profit organization which actually collect the
[1:25:22] data from all the regulatory monitors which are available in public domain domain and providing nice format and that can
[1:25:31] be downloaded from there the second question is land cover also a factor that contribute to air quality
[1:25:40] specifically if surface cover is a sink or absorbs or pollutants yes yes land cover land use and topography
[1:25:51] all can directly or indirectly affects their quality in many different ways they can also be source of
[1:25:58] emissions emissions uh they can also be the pollution can also be deposited on them depending on their own property
[1:26:09] so if there is a high topography or much more variability of topography that will affect how the pollution actually settle
[1:26:18] on the ground but they are more effective likely going to affect the emission than the removal process itself
[1:26:33] okay so the next question would it be correct to say that the effect of meteorological factors on pm concentration cannot be inferred
[1:26:44] from one country to another okay i'm not sure if i understand the question question completely correctly but uh
[1:26:55] meteorological conditions more or less affect pollution in the same way but can vary by environmental factors such as emissions source topography land
[1:27:06] use and other factors and that those can vary from one country to another country so i would say yes
[1:27:18] the answer is yes and no depending on how you want to how much detail you want to infer
[1:27:30] okay is the persistent method is based on transitional probability i'm not familiar with this transitional probability theory but the
[1:27:42] persistent method is based on the idea that the best predictor of tomorrow weather is the weather today so basically uh
[1:27:54] the word persistence here means that if things are persistent from day to day if if if weather is going to be persistent
[1:28:03] as tomorrow as it was today then i can forecast it up to some extent what will happen to it tomorrow based on what is
[1:28:11] happening today the same applies to air quality okay question five if low pressure means good air quality then if a cyclone hits
[1:28:26] and and low pressure is formed can this create good air quality yeah yeah so it is interesting question
[1:28:37] under cyclonic conditions definitely definitely there are many things which happens not just the low pressure but rain winds
[1:28:46] which really significantly impact the pollutions pollutions most often is wash out the pollution but it can also circulated one in one
[1:28:54] smaller region uh so depending on what's happening there it can have different effect effect uh there are actually more interesting
[1:29:02] research research people are conducting on how the pollution actually impact the formation of the cyclones and hurricane
[1:29:13] or atlantic ocean or in other another indian ocean and other parts of the so those are more interesting
[1:29:21] research question i'm not expert of that so i think i'll just leave my answer at that point
[1:29:34] okay next question is there any relationship between chemical elements which are considered as pollutant with other natural pollutants from the
[1:29:41] emissions clouds yes all kind of particles and gases does interact with each other in the atmosphere atmosphere and the interaction will depends on
[1:29:54] their chemical properties optical properties properties and environmental conditions so this happens happens irrespective of their natural or anthropogenic
[1:30:05] origin origin and most particles which are actually either whether the image from anthropogenic activities or natural activities are
[1:30:17] considered pollutants some of them are called criteria pollutants which are known to be more harmful to human health and those are
[1:30:26] the monitored by the environmental agencies but there are other many types of components in the atmosphere or pollutant in the
[1:30:34] atmosphere which may not be regularly monitored monitored but they are still polluted okay question seven in using satellite
[1:30:51] data for research is it acceptable to use purely remote sensing data without an in-situ group how can we prove the accuracy of these
[1:30:58] satellite data yeah this is very good question so it really depends on the purpose and application of what research
[1:31:12] you are doing most often you need some kind of ground observations to ground truth satellite data or to assess the accuracies of the
[1:31:23] satellite data but some of the satellite data data probably probably may not have similar measurement from the ground and
[1:31:33] which may not be that may not be able to assess their accuracy using the ground measurement alone
[1:31:39] alone uh sometime you can also inter compare the satellites and that will give you a consistency check
[1:31:47] check on how one satellite is performing distance distance against another the model to satellite comparisons is another way to
[1:31:57] get some insight on the accuracies and the performance of the satellite data question number eight can satellite data
[1:32:10] for air quality forecasting we visualize in google earth engine through coding so so i'm not sure if google earth engine has
[1:32:22] any any air quality forecasted data as of now now there are efforts ongoing where nasa and other agencies are trying to
[1:32:36] feed the air quality data to google earth engine for everyone to access and visualize and do other kind of analysis
[1:32:46] within the engine but as of now i don't think there are any forecasting data available but but you can actually take the forecasting
[1:32:56] data yourself and upload to the google earth engine and then you can visualize or analyze the data in the in
[1:33:05] that manner question nine can i access c mac warf and other models interactively to download data where can i download model
[1:33:20] data for a city or town cmake website and the link is provided in the presentation does have some
[1:33:30] data generated which can be downloaded downloadable and is available to the public public some of the warf data are also available
[1:33:41] to download and and in session 2 and season 3 we will actually actually learn learn how to download the
[1:33:50] global forecast data from nasa's geos and cams ecmwf model during session 20. so stay tuned for downloading the data in session two and
[1:34:03] three okay okay question 10 how about the capability of satellite data of air pollution in local scale
[1:34:18] analysis okay i'm not the question is pretty open end but satellite data have been heavily used to
[1:34:28] actually address many local air quality scenarios for for example looking the air quality among different neighborhood skills
[1:34:41] using satellite data but these are very limited analysis and required in-depth understanding of the satellite data as
[1:34:49] well as skills to to modify the data in different ways there are the current satellite data which are
[1:35:00] available from the satellites are of about one kilometer special resolution skill skill uh there are not many data which are
[1:35:10] available lower than that in terms of the temporal skills we have hourly data available now at least for
[1:35:18] the us and and some part of asia as well but but we we are improving actually both on a
[1:35:29] special and temporal scales uh in terms of getting information from different satellites okay the question number eleven while
[1:35:44] the high resolution one kilometer observation like mcd-19a2 mayak for aod is retrieved at time of the satellite pass orbit-wise
[1:35:54] data in the model like wireframe output in a fixed time space okay how should we come correlate these two variables if we're
[1:36:04] interested in air quotient modeling at r1 scale yes so this is a very good question and it brings back to our
[1:36:11] special temporal co-location aspect so one is uh you will have to there are two ways you can do is one is
[1:36:21] you can choose the nearest hour of the satellite overpass time to the model time to match the
[1:36:32] temporal window unfortunately unfortunately not much can be done in that you will have to assume that uh
[1:36:41] nearest model run is uh valid in most cases it is valid but if there are air quality events which going
[1:36:53] on which are highly variable in time then this assumption may not be valid but most often it can be
[1:37:01] used on a larger regional scale on a local or urban skill you will also have to be
[1:37:10] make sure that your special skills match when you're comparing model data with the satellite data data so if your
[1:37:19] uh uh special scale is 12 kilometer then it's better to use similar resolution satellite data which is like 10 kilometer or if you still
[1:37:29] want to use one kilometer then you have to to average the one enough number of one pixel one kilometer pixels
[1:37:37] to fill the grid of your twelve kilometer uh warfam grids so it is it is critical to actually
[1:37:48] to match the special resolution and temporal temporal resolution before you make any comparison okay uh the next question
[1:38:10] in the data example from the exercise uh uh does it matter if the time is local or
[1:38:19] all for specific tie zones or the stations in the same or time different zone zone yes very good question that definitely
[1:38:27] matters matters so whenever we are making comparison either between the satellites or um um with the model and
[1:38:38] ground station it is very very critical to ensure that both both model and grounds represent same time zone so they
[1:38:52] can be local or they can be in utc it does not matter at that as long as both
[1:38:58] are in same time zone and co-located question 13 i have a one kilometer grade pm concentration derived
[1:39:12] from a dispersion modeling i want to correlate with measurement from monitoring station should i do the correlation with corresponding grid
[1:39:19] concentration or do i first do creating interpolation of grid concentration before correlating with the ground measurement okay um
[1:39:33] so so i think um many different ways you can do this analysis analysis the simplest way will be to actually
[1:39:44] locate locate your one kilometer closest one kilometer grid in your dispersion model uh corresponding which is the nearest to
[1:39:53] the ground station and then use that uh uh grid's value to compare with the ground measurements so that will be the
[1:40:03] most uh closest measurement from the most closest model value corresponding corresponding to the ground station and then make sure
[1:40:14] that times are also matching before you make the comparison i don't think you need to do any kind of
[1:40:22] cricking or any interpolation to the model because that's already very high resolution resolution you can also do a box averaging some
[1:40:32] time that also helps so depending on your model temporal resolution you can draw a box of uh
[1:40:42] five by five kilometer around the ground station and average all the values from the special model and then you can
[1:40:48] compare with the value from the ground monitoring station so you can depending on what you are trying to achieve
[1:40:56] you can compare that in different ways okay question 14 uh exactly how to carry out this temporal matching say if the ground
[1:41:16] measurement is taken at 9 45 hours is it mandatory to have a satellite pass or model forecast for the same time only
[1:41:24] or predict value plus minus 30 minute or any such temporal window from ground measurement time can be considered for
[1:41:30] election election yes so you will always have to it is very very hard to actually get exact same timing from both satellite
[1:41:38] and the ground measurement most most often we do use a temporal window of averaging which can be plus minus 30
[1:41:47] minute depending on resolution of the ground data it can be plus minus 30 minute it can be
[1:41:54] plus minus 1 hour depending on how frequent measurements are available from which value of correlation can be
[1:42:06] considered we have a good forecasted value value this is a difficult question i i thought there is any
[1:42:17] depending on so the correlation importance of significance of correlation highly depends on how many number of data points you have
[1:42:27] you can have very high correlation and it may not be very significant if you have only three data points and your
[1:42:34] correlation is 0.9 it may not have a very high significance because your number of data points are
[1:42:41] not that enough to produce a significant correlation uh but if you have a correlation of 0.5 or 0.6 and your
[1:42:51] number of data points are like thousands of data points then it does shows some skills skills in forecasting so correlation is a
[1:43:00] relative term i would recommend you read about it some it does have a relationship with the number of data
[1:43:08] points and it also has there are other parameters which you can calculate along with the correlation something called
[1:43:17] p value which provide the significance of your statistical parameters how do you deal with the missing data
[1:43:31] unfortunately unfortunately i'm not sure relation to what but missing data are missing data we can't do anything about them
[1:43:42] some people have have ways to fill in those missing data but i personally don't recommend doing that
[1:43:54] that specifically if you have a few months of data missing there's no not much you can do it
[1:44:09] question 17 ozone is considered as pollutant in the lower atmosphere but not when it is present in the
[1:44:17] stratosphere is there any mechanism by which ozone can move to a stratosphere from the troposphere or deposit to
[1:44:26] ground like in case of aerosols so there are mechanism or processes in the atmosphere where air actually
[1:44:38] exchange exchange between upper troposphere and stratosphere stratosphere and in that exchange some time ozone can transport downwind
[1:44:49] or the air can transport to the stratosphere stratosphere i'm not very sure about those exact process how they
[1:44:58] works i'm not i really don't work that much on ozone feed so i'm not sure uh but there are
[1:45:05] processes which happen i am not familiar with any mechanism through which ozone actually deposit the ground ground uh typically most of the ozone
[1:45:16] form form and destroyed in the atmosphere through the chemical reactions come on yes you want to ate something
[1:45:27] yeah yeah dry deposition of ozone is um definitely an important sink of ozone especially when ozone deposits through
[1:45:35] plant stomata and can damage the health of the plant it's through this mechanism that ozone pollution can be detrimental
[1:45:42] to ecosystems okay thanks thanks melanie okay question 18 how can we apply global model to forecast for local area where
[1:46:00] ground monetary extension very few uh i will leave that question i think we are going to talk a lot about global
[1:46:08] models models in session 2 and session 3 and i think that will clear up some of these doubts
[1:46:19] how can we do uncertainty analysis while forecasting emissions we are in this webinar series we are not
[1:46:28] doing forecasting of the emission itself uh uh so i think there are there are different type of emission models
[1:46:37] which can be used for the emission forecasting itself and they are based on some other type of scenarios
[1:46:45] i'm not too much familiar of those melanie do you have anything to add on the forecasting of emission itself
[1:46:57] i'm sorry i was typing another answer are you talking about question 19 yeah do you have anything on the mission
[1:47:03] forecasting itself can do uh uh verification verification about emissions but i'm not sure i'm not sure about
[1:47:15] we validate emissions inventories themselves themselves um in the case of things like power plants or cars you know there's constant efforts to
[1:47:25] validate those emissions inventories that are put into the model and then those pollutants are forecasted around the model in the case of dynamic
[1:47:33] emissions like fire emissions or dust emissions emissions we typically use verifications of those forecasts to evaluate the effectiveness
[1:47:44] of those parameterizations yeah and i think the another factor comes to plane the forecasting the emissions are based on the
[1:47:59] uh policy and decision-making which happens or change in regulation for certain things um once we know those kind of thing then
[1:48:08] the emission forecasting can be done based on uh uh change in industry standard or change in fuel type or change in certain things
[1:48:18] some regulations but those are different types of forecasting forecasting that is done by mostly regulatory agencies okay uh
[1:48:34] how does a wi-fi affect the air quality of the near region how long does the pollution persist could be built a model
[1:48:40] to measure and predict that yes uh yes wi-fi does affect air quality basically whenever there is a fire
[1:48:48] wildfire it emits lot of smokes and the smoke is transported to different parts uh it can transport thousands of
[1:48:57] kilometers depending on how big the fire is and how much smoke is emitting the the the transports happens with the
[1:49:07] weather pattern so wind direction wind speed where in the atmosphere that transport is happening and the smoke can stain the atmosphere for
[1:49:21] several several days sometime weeks depending on again where it is in the atmosphere and it definitely affects their quality
[1:49:33] at the surface there are most of the air quality model which we use nowadays does use a emissions of smoke or
[1:49:43] particles particles based on the satellite observations which which we're going to talk a little bit about that in the session two and three
[1:49:53] how those fire emissions are actually used in the model to predict their quality in different parts parts there are warf and cmag and geos all of
[1:50:03] them have this kind of emission inventories inventories based on the wildfires okay question 21 how do i convert ome
[1:50:19] so2 data from dobson units to microgram per cubic meter i'm not sure melanie do you have exact answer i
[1:50:32] remember we looked into that earlier but i don't remember it so in order to so the dobson unit is a
[1:50:41] column quantity um for other pollutants we see a column quantity expressed as say molecules per centimeter squared there's a direct
[1:50:50] numerical conversion from molecules per centimeter squared to deficit units so in order to convert a surface measurement
[1:51:00] to that is a surface concentration say um to a column quantity you need information about the vertical profile
[1:51:08] of that species as well as the temperature and pressure profiles um um so nor so you unfortunately probably need additional
[1:51:17] information information there's not a direct conversion between them without that vertical information yeah i mean they are basically two
[1:51:28] different type of measurements and they represent different quantity although they are highly correlated uh so that's another way to make a
[1:51:40] conversion conversion that you correlate those two and then get some kind of a empirical empirical relationship between those two and then
[1:51:49] that's how you can probably convert one into another okay uh i think that's about it we have probably all the questions
[1:52:04] responded again thank you everyone stay tuned for the next tuesday we will have a whole presentation and exercise on
[1:52:15] nasa's geos model and some of the re-analysis how to access that forecast how that works so so thanks everyone
[1:52:32] you
