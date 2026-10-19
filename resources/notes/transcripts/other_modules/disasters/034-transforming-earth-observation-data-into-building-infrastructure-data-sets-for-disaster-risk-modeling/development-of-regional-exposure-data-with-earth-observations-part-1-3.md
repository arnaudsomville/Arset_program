# Development of Regional Exposure Data with Earth Observations, Part 1/3

`https://www.youtube.com/watch?v=bg3ioNmLuEg` · id 183 · 2:01:05 · module 51 — Transforming Earth Observation (EO) Data into Building Infrastructure Data Sets for Disaster Risk Modeling

[00:00] welcome to the ret training transforming Earth observation data into building infrastructure data sets for disaster risk modeling my name is Brock Levens
[00:11] and I'm an ret trainer based at NASA's Gard space flight center in Green Belt Maryland it's a pleasure to welcome you
[00:19] all to the first part of this three-part webinar webinar series before we begin I will briefly inform you about the arset
[00:28] program for those un familiar to the applied remote sensing training program or aret arset is part of NASA's applied
[00:35] sciences capacity building program our set provides accessible relevant and cost-free trainings on remote sensing satellites sensors methods tools and applications all
[00:47] tailored to audiences with a variety of experience experience levels our trainings cover a range of data sets and Analysis Tools in their
[00:55] applications to agriculture climate and resilience disasters ecological conservation health and air quality and Water Water Resources trainings are offered online
[01:08] or in person freely available to anyone with an internet connection and conducted either live or instructor-led or a synchronous and
[01:17] self-paced our set trainings have both bilingual and multilingual options and use only open-source software and data since 2009 the program has reached over
[01:27] 100,000 participants from over 180 countries we encourage you to visit our website and learn more about the program
[01:35] all ret materials are freely available to use and adapt to your curriculum if you use the methods and data presented
[01:43] in these rset trainings please acknowledge the NASA applied remote sensing training program the following slides will provide you with an overview of this
[01:52] three-part webinar Series so why is climate risk assessment important even with the drastic reduction in carbon emissions short and
[02:02] medium term impacts are inevitable climate change impacts and risks are increasingly becoming complex and more difficult to
[02:12] manage climate change impacts on human infrastructure are not well understood and Vary drastically by location so understanding Community
[02:23] specific risks to climate change is critical to evaluating adaptation strategies by following the approaches described in this three-part training
[02:33] participants should be able to recognize what building vulnerability is and why it's important to risk modeling identify
[02:41] the core elements of natural Hazard risk modeling and asset loss estimation identify fundamental approaches for developing building
[02:50] exposure models using Earth observation data and tools apply a basic procedure to model built infrastructure exposure and
[02:58] vulnerability vulnerability characteristics from Earth observation data evaluate building specific exposure data to identify key components for fit
[03:09] validity consistency and rectify bias evaluate the appropriate use of model building exposure data to a given Community apply strategies to identify
[03:23] and address equity and bias considerations apply approaches to validate the building data with imagery from Regional data sets and document
[03:33] your exposure development process through metadata so that others can understand the process used the limitations and how to update it if
[03:43] necessary the prerequisites for this three-part training are fundamentals of remote sensing which we have available uh on demand and you can familiar
[03:53] through the ret program um for those who are unfamiliar with some of the basics of remote sensing or if you have
[04:00] equivalent experience that's fine but also a basic understanding of risk disaster risk management so a quick review of prior
[04:10] knowledge so uh just to know that climate change science tells us about the regional climate Hazard Specialists
[04:18] tell us about the hazards GIS and Earth observations give us an idea of where that exposure is and
[04:27] Engineers tell us about the susceptibility to damage or vulnerability and together these can give us risk or likelihood of an impact
[04:36] and for this GIS is critical GIS provides a digital glue between the disciplines um by evaluating new sensors
[04:44] technology and data sets understanding and communicating key GIS Concepts and limitations and then fusing harmonizing and assessing quality
[04:55] of multimodal based data over the next week there will be be three two-hour parts that will include presentations
[05:02] and question and answer sessions all materials and recordings from each session will be available on the training web page usually within 24
[05:10] hours of the live session so you can go back and review before the next one additionally there will be one
[05:16] homework assignment that will be posted on October 10th the last day of this training series and that will have a due
[05:22] date of October 24th this will be in the form of a Google form a certificate of completion will be awarded to those who
[05:30] attend all live parts and complete the homework assignment before the given due date which brings us to part one where
[05:36] we will cover the development of regional exposure data with Earth observations so the objectives for part one is that by the end we hope that
[05:47] participants will be able to recognize what building vulnerability is and why it is important to risk modeling be able
[05:53] to identify the core elements of natural Hazard risk modeling and asset loss estimation and also identify the
[06:01] fundamental approaches for developing building exposure models using e EO data and tools please put your questions in
[06:08] the question box and address those at the end of the webinar feel free to answer your questions as we go and we'll try to
[06:15] address all questions during the Q&A session any remainder of questions will be answered in the Q Q&A document which
[06:23] we will post to the training web page about a week after that part it is now my place pleasure to
[06:29] introduce the guest Trainers for today's webinar Charles hike executive president of image cat Georgiana esus geospatial analyst for image cat and Mike Uchi
[06:44] project engineer also with image cat we are delighted to have them joining us as guest trainers to discuss the
[06:51] development of regional exposure data with Earth observations Charlie over to you thank you you all right thanks for coming today uh
[07:02] we're going to start with an explanation of what exposure data is and how it's used in the loss estimation
[07:10] process so first of all when people think about exposure data they generally think about uh these type of
[07:16] architectural renderings or uh things that you see in movies uh video games uh that imply quite a bit of detail about
[07:25] what might be going on on the inside of a building but are actually uh essentially just um um drawings CAD
[07:31] drawings and that type of thing um uh I've never seen these be able to be repurposed or used for um the type of
[07:39] things that we're talking about it's uh generally a whole different level of data what we're talking about is the
[07:46] general um um building exposure data that's typically on an aggregated basis or a building specific basis that will
[07:54] give you things like um um a structural type the vulnerability the replacement cost or the type of rough
[08:01] characteristics that you need for risk analysis so it's something quite quite different so what we're talking about is
[08:09] exposure data used for disaster risk reduction and we call loss estimation risk modeling sometimes you hear uh cap
[08:16] modeling used um these are things that are used to essentially help Nations try to reach their sustainable development
[08:24] goals um and um there kind of four main categories that you can think of uh that you might use these data um uh
[08:33] before an event happens for planning scenarios what happens if a category 5 hits Miami or New York what happens if a
[08:41] magnitude 8 earthquake happens on a on in um uh Los Angeles or there's a 500-year flood in the midwest um these
[08:52] um scenarios are used um you know they actually sort of play them out Bring together teams of folks from um state
[08:59] local Federal tribal um governments to pretend like they're responding to an event um to figure out where there's
[09:06] gaps uh and what what they might do better to respond in the future during event something is actually happening uh
[09:14] what is it going on what should we do about it should we evacuate an area um should people be boarding up their
[09:22] Windows uh is this hurricane going to hit Maine or Boston U this kind of thing and if it does because this way or that
[09:29] what are the possible ramification ramifications um after an event so an earthquake has just happened for example
[09:38] uh is International Help required uh where there's the most damage uh where should we be deploying resources and
[09:45] search and rescue and then on average so um you've ran a single scenario gives you kind of that that
[09:54] that single event view but if you run Suites of thousands of scenarios you can kind of see what might happen at the
[10:01] annualized level the 100-year level the 500e level and you can use those to make um um decisions uh about things like uh
[10:09] retrofitting or insurance premiums so what we're talking about is the field of disaster risk reduction uh represented here on the left which has
[10:20] been going on for at least 100 years uh on the right we've got a new field uh
[10:25] called uh climate change adaptation and there's intersections between between um the two of them um and that's getting um
[10:32] they're more and more in meshed as we understand begin to understand tactically on the ground what the
[10:38] probable effects of climate change can be and uh how we should go about uh responding to the uh to those climate
[10:48] changes but unfortunately these we've uh got two different disciplines with two different lexicons and um we use words
[10:57] that are similar and very different ways so in disaster risk reduction and disaster risk management the concept is
[11:05] to reduce the impacts of disasters um um through preventative measures that we people do uh climate change adaptation is we talk about
[11:17] adaptation which is making human human driven adjustments um um the ecosystem the policy or processes to respond to uh
[11:26] uh changes of and climate so we've got different kind of stated goals there uh in disasters we talk about mitigation in
[11:34] terms of lessening the probable impacts to a community uh a a society a system a a building um by changing the
[11:47] attributes of that building or you know uh it can be social policies or public awareness but in general um I'm changing
[11:54] uh something that has an impact on um on essentially the vulnerability and mitigation in climate change policy
[12:01] mitigation is defined quite differently uh and is used for the reduction of greenhouse gas emissions that are the
[12:06] source of climate change we don't use mitigation in that same context so there's some confusion there sometimes
[12:12] and likewise vulnerability um vulnerability refers to um the physical conditions of a building or uh or uh
[12:22] social socially vulnerable class of uh people uh that essentially says you know you've got an excitation what will
[12:29] probably happen in terms of damage or impact uh it's the inherent properties of those um of that system whether
[12:37] they're exposed to the hazard or not whereas the vulnerability uh and climate change adaptation really refers to uh um
[12:45] things that are uh um in a hazardous area so um you know whether or not you're you're um uh that which is what sort of what we
[12:55] would call the risk right it's not the inherent properties of the system system but it's because you've got exposure in
[13:01] a um um a hazardous area so we're talking about a very specific uh uh ontology here if you will where we've
[13:09] got three kind of pillars the hazard the exposure and the vulnerability um and I'm going to go through them one by one
[13:16] but it's possible for example to have exposure and vulnerability but no risk because there's no Hazard there for
[13:22] example um my house would fall down if it was hit by a 20ft wave but it's just
[13:28] not going to happen because there's not the hazard there so there's not the risk so Hazard tells us things such as
[13:36] where uh uh things are are likely to happen how strong it is the intensity of the wind speed the depth of the flooding
[13:44] the the the ground motion uh uh how often uh when with a forecast what the duration is going to be how long it will
[13:52] be exposed to a given wind speed or a given depth of flooding and you're all familiar probably with these type of
[13:57] Hurricane Maps or 100-year flood maps all of these impact just the uh effect of the nature on the ground for um so to
[14:06] speak and there's lots of different parameters that the ways that they can be expressed but that's all kind of the
[14:13] hazard area the natural phenomenon if you you will now when we talk about uh uh vulnerability particularly when we talk
[14:20] about building vulnerability How likely is that building to fall down or be damaged given a level of Hazard so if
[14:29] the wind is so strong How likely uh will it be that the um the envelope will be
[14:36] compromised and the wind will go into the house and lift the roof up and fall over or uh given U the flood waters are
[14:44] 5 foot deep what's the percent damage likely to be to your home these are kind of expressions of vulnerability that are
[14:50] independent of the occurrence of the hazard and then we put this all into a risk Paradigm so we've got the exposure
[14:58] which we'll be talking about um quite a bit that's on top of this um of this slide that goes in with mapped to
[15:05] vulnerability these vulnerabilities are things that you know they can they develop through testing or empirical um classes these very very specific uh
[15:15] functions damaged functions or Vol functions cross reference that with the hazard you do your calculation and that
[15:21] gives you some sort of loss or probability of loss that enables decision decision support and there's two kind of main
[15:29] pillars of the risk analysis we talk about we talk about deterministic scenarios which is um uh sort of a
[15:37] single event uh one sort of time slice or it could be multiple time slices for a hurricane if it's approaching that
[15:43] kind of thing but it's essentially running a one framework this is one loss scenario um and but there's a prob
[15:52] probabilistic analysis that we um refer to in this context typically the probabilist is referring to having a
[16:00] whole Suite of events to figure out what the loss might be over time so here we've got a curve an EP curve they call
[16:08] these so given a return interval um that would be you can see here a 10-year event a 50-year event a 100-year event
[16:15] um so that's sort of piece of the deterministic puzzle that slices into that probabilistic how much loss you
[16:22] would expect it to have experience to a system or a building given the vulnerability so this is um what's used
[16:29] to make probabilistic um decisions so all of this kind of feeds into um uh the disaster risk reduction
[16:38] framework um that tries to help uh uh Nations meet their sustainable development goals uh there's a more kind
[16:45] of uh disaster specific uh framework the Sendai framework where they have specific metrics that come more directly
[16:53] out of the uh risk assessment but you can map those to the sustainable development velopment goals and countries are trying to do that in
[17:01] order to um reduce their losses particularly um uh in the face of climate change so although the climate
[17:09] science is different than the disaster science more and more we're understanding um what those impacts are and what we're doing is we call it
[17:16] climate conditioning the models so that we can understand how that's changing on the the ground so back to exposure development
[17:26] what is building exposure in the context of of disaster uh risk reduction so here we've got four
[17:32] different pictures depicting four different very different ways that people live very highrise uh uh residential construction uh informal uh
[17:42] uh we call informal construction or unengineered construction although very impressive uh Hut here on the upper right uh um very typical apartment
[17:52] building blocks in this case on a very high Hazard area and that it's set on a Hillside and then very typic typical um
[17:59] single family residential uh uh probably American Construction U modern engineered structures so um a lot of what happens is what we're trying to do
[18:10] is characterize for a given area a given census tract a given cell what the number of buildings are uh where is it
[18:17] that's depicted by the cell Itself by structure type by cost um uh for the purpose of assessing that in this
[18:26] context uh what we find ourselves doing uh much of the time is saying uh given a number of people a population uh grid
[18:34] for example how many households are there and given those house households what's the dwelling area and um how does
[18:43] that change through time and through space so it's often um a more of an art than a science uh a very large data
[18:52] Fusion exercise where you take as much as possible um uh the data that that's in and make the best decision for
[18:58] Distributing that out minimizing bias in the process so that's what we'll be talking about uh in detail over the next
[19:05] several days so in that context there's um uh certain questions that we can answer and then there's things that that we really
[19:16] can't answer we've gone through kind of generally what we want to do but you know we can say yes uh with this type of
[19:23] process uh we can assess whether it's costeffective to retrofit certain building Ty types regionally uh where should we focus our retrofitting efforts
[19:32] where should we get started where are the riskiest areas our building codes cost effective uh and where are they
[19:38] cost effective what might happen given a different specific event what just happened for a specific event but it
[19:44] does not tell us is it cost effective to retrofit this specific building or which buildings fell down after an event which
[19:51] homes are flooded uh exactly how many buildings uh fell down um and it's important to emphasize this because it's
[19:59] very easy for people to have false Precision that comes out of these models and it's important to um um uh keep uh
[20:06] reassessing what the what's a valid U um decision here and what's not an appropriate decision for this
[20:13] process so here's some examples some products that we've been uh We've produced in the past some projects that
[20:20] we've been involved with one is um the estimate of fatalities after the Nepal earthquake here our client was UNICEF
[20:28] and they were looking to reach out to uh orphan children um for the purposes of Life Safety and uh and finding shelter
[20:36] for these folks and we were able to produce this a very wide area estimate of what the fatalities would be um with
[20:44] an idea that that that would correspond to where orphan children were uh high-profile example in the United States uh a uh effort funded by
[20:57] Congress and manager by FEMA uh we did the work with a National Institute of building sciences and a team of experts
[21:04] which basically established how cost of effective it is to U mitigate for for given hazards um um both to code and
[21:11] then above code uh and this is a very high-profile project that's been um you know a reference by President Biden um
[21:20] used in um hundreds of um of subsequent studies U media and so forth and it helps kind of promote awareness of uh
[21:27] the cost effectiveness of mitigation and all of that was done uh with a background of exposure data another
[21:34] example are cat Bonds in developing countries uh Mexico uh um had a cat bond for earthquake uh which they they hit
[21:42] the jackpot twice with 8.0 magnitude earthquakes triggering um a release of hundreds of millions of dollars that allowed them to get back on
[21:51] their feet distribute that to their um U people in their countries and you know the faster that money gets out there um
[21:58] the quicker that um they're able to rectify the problems and get the economy going and avoid cascading effects um a
[22:05] very well-known phenomenon in um in disaster science um and if they you know hadn't done that then they would have to
[22:12] figure out where that money was going to come from they would have to um presumably argue about it from a policy
[22:18] uh standpoint U maybe take the money from somewhere else or uh as the International Community so they didn't
[22:24] have to do any of that stuff so all that gets um deployed right away and that helps folks get back in their feet and
[22:30] this is seen as a um a probable template for developing countries that don't have an insurance infrastructure to help um
[22:38] uh particularly where you've got the exacerbated effects of climate change um um which out and um and and flooding and
[22:45] Africa is an example of uh good candidates for for cab bonds so um we'll just touch on um the
[22:54] uh the limitations here we've got a whole presentation uh here but it's um what comes out of these exposure
[23:01] databases typically not accurate at the cell level um particularly if you've um uh basically inferred this from a
[23:09] population data it cannot be more accurate than the original base data sets that go into it if you've got a
[23:15] problems in that base data um with um um ethnic minorities for example that might not be um considered in the or
[23:23] undercounted in the population data that's going to be reflected in your exposure data it can be a big problem
[23:28] um uh and it cannot be uh it cannot expect that it'll always capture small unmapped uh rural areas and this is um a
[23:37] consistent problem in um mountainous regions or um in areas that remote sensing isn't good at capturing uh for
[23:45] example areas with no low Night Lights um sometimes are are difficult to capture there's a lot of C cloud cover
[23:52] or tree canopies all of these make it very difficult to find uh rural communities that might be impacted by by large
[24:00] disasters and lastly U this these data sets it's not good to repurpose them for civic purposes such as a tax assessor
[24:07] database um you these are built for purposes for loss estimation and do not provide the kind of building level
[24:14] accounting that um you typically need for um for government purposes a lot of challenges in putting these data sets together uh one is data
[24:23] availability trying to uh get access to data permission to use the data once you've found that it's available there's
[24:30] processes and challenges which we'll be going through but um you know um um having the skill set to do that uh at
[24:37] the at the city level there's not a lot of cities that have that um um bias that
[24:44] that are in the um um various parts of the data sets which which we'll be talking about in in detail human a
[24:51] processing this sta it's very easy to make mistakes and difficult to catch them um until you've got the risk estim
[24:57] estimate and people say hey what's this do you really think this and that can be a big problem uh data gaps you're not
[25:03] always going to have all of the data that you would like to um be able to put
[25:07] these things together you have to make assumptions and extrapolate um um through those uh those data gaps there's
[25:15] misperceptions about what the data sets are there's um misperceptions about accuracy um and they're used um at the
[25:23] building level which is a false Precision problem um explaining the data with Clarity is always a challenge to
[25:30] folks um who might be high level and have short attention spans inappropriate legacies you develop the data and you
[25:39] give it to folks and they uh use it for something five years later uh they didn't hear the initial conversations
[25:44] perhaps because the original people that um the data was developed for got new jobs or the people that produced the
[25:51] data got new jobs uh and then just the data getting old and Dusty all of these are are very big problems which we'll be
[25:59] touching on as we go through but things that you have to be cognizant of a lot of these aren't um different than the
[26:06] regular Project work that all of you have probably been involved in but things that need to be tracked and uh
[26:13] and recognize nonetheless lastly a challenge is Advanced Technologies you've got artificial intelligence which is exciting on one level and scary on
[26:22] another when being able to apply it towards um building L of decisions for example it's probably not appropriate uh
[26:29] UAV data additional sensors um there's a sort of I think a Thrust in the gis Community to get higher and higher
[26:37] resolution on data but higher and higher resolution data does not mean more accuracy and it might mean spending more
[26:43] money developing building exposure databases in GIS than is warranted for the risk assessment that's being uh developed given the um massive amount of
[26:52] uncertainty that's generally in the hazard data and the vulnerability anding okay so those are all kind of things
[26:58] that you have to think about um for having a balance here and things that we'll be talking about over the next 3
[27:11] days hello everyone I'm georganas the geospatial analyst for image cat and today I will be discussing the basic
[27:20] process for developing building exposure databases I will go over these three basic cont concepts for developing a
[27:28] building exposure database first I will discuss what are the different types of building exposure levels then I will
[27:36] explain what data is required for developing the exposure database and throughout the presentation I will be giving examples of how Earth observation
[27:45] data or satellite data products are used for the past decade we have developed a taxonomy and classification
[27:55] system for five exposure level types these levels are defined by the spatial scale of the input data and communicates
[28:04] the level of detail content and method required for producing each exposure level level one is a rapid large scale
[28:14] building exposure analysis which primarily sources Earth observation data uh trusted global resources and aggregated demographic and housing data
[28:27] level two consist of national level structural distribution information economic parameters General and essential facility building stock demographic data from National
[28:40] statistical institutes or census level three requires a significant effort in order to refine National level data to reflect Regional
[28:51] or subnational Trends an example would be incorporating climate or cultural regions to better represent the varying construction patterns in
[29:02] each or level three can be used to identify large urban areas where building footprint data is used to
[29:11] adjust building counts and builtup area estimates level four consists of a building specific data set aggregated either to a uniform grid a fine- scale
[29:25] administrative unit or a another boundary smaller than the subnational level although the users compromise the spatial resolution of the available data
[29:37] by aggregating it this method allows for a more accurate representation of the building exposure by reducing the noise
[29:45] in the data and finally level five is a building or site specific exposure database this exposure level requires an
[29:55] adequate amount of building specific attribute data in order to car characterize risk and vulnerability for each each location in this example of the County
[30:08] of Los Angeles we can see how the building exposure levels differ based on the input data required per level in
[30:17] this comparative analysis we came across some unexpected results such as those found in level 1 and level five where in
[30:26] spite of the vast difference in their spatial resolution these two had the closest total exposure value to one
[30:34] another and the lowest of all the other levels and when we detrended the results we saw that the total exposure values
[30:44] for levels 2 3 and four were very consistent to one another this could be due to the fact that although there were
[30:52] Regional adjustments made to level three and four the primary source for each was the haard database and vulnerability
[31:01] curves this is especially important for the modeling Community to understand because it highlights the fact that an
[31:09] increase in data resolution does not necessarily mean that there will be an increase in Precision or accuracy this exercise allowed us to
[31:21] identify key parameters that significantly affected the output of the results results those parameters being person's per household values living area per
[31:33] household replacement cost values and exchange exchange rates another important takeaway from these five exposure levels is that the
[31:44] degree of uncertainty within each level greatly depends on the quality of the input data so the analyst must be
[31:54] meticulous in documenting their data sources methods and validation process in order to reduce the introduction of Errors into the data especially for
[32:06] exposure levels three and up therefore it is important to understand the methods and data required for processing these seven
[32:18] steps for estimating building counts and number of people having accurate and high quality data is essential for exposure level one and two typically
[32:31] the population persons per household or number of households are used to estimate the number of buildings given
[32:40] an average area per household value while in level four and five the building count data is more typically
[32:50] used to estimate the number of people and for level three land use data or development patterns are used to
[32:59] refine and reallocate National level population and housing data to the subnational subnational scale for estimating the number of
[33:09] buildings and builtup area you can use census or micro sensus housing data open- source building footprint and
[33:17] height profiles and Earth observation based data products we have found that there is a positive correlation between the number
[33:27] of households and builtup area so using a sample of building Footprints Heights and number of households we can train a
[33:37] model to produce Total Building counts and area estimates that are supported by the Census Data the level of detail of these
[33:48] estimates will vary depending on the exposure level of your study for example a level one may simply
[33:56] catrow Iz the building counts and total area by an urban rural designation for the entire country while level three
[34:06] could report these values at a 500 met grid cell by development pattern type and a great place to find various
[34:17] EO based uh builtup surfaces and population data is the NASA uh pop grid viewer if there isn't any any
[34:27] documentation or existing building footprint data for your study region building counts and builtup area can be extracted from highresolution satellite
[34:37] imagery or aerial photography this can be done through traditional remote sensing techniques such as a supervised or unsupervised
[34:47] image classification analysis or with the newer machine learning neural network or automated image segmentation algorithms algorithms the image to the right is an example of
[35:01] a supervised classification analysis where the orange pixels represent the building building perimeters these perimeters can be converted to polygon building
[35:15] Footprints and the image to the left shows how the panchromatic image can be used to determine builtup area
[35:23] density and later classify the image by density zones which could represent single family residential areas or high
[35:33] urban urban areas and using the extracted building Footprints as a sample set we can extrapolate and estimate number of
[35:44] buildings and builtup area as with the building footprint extraction we were able to use Earth observation based data products for
[35:55] determining building Heights this is an important attribute to obtain because the total living area value is one of the key parameters that directly
[36:06] influences the total building exposure value what this means is that if we only use the building footprint data then our
[36:16] building exposure values would be underestimated since the values are based solely on the area and not the
[36:24] builtup volume building Heights can also help determine building distribution estimates in the in these images here you can see how we use sentinel SAR data
[36:38] to estimate the building Heights based on development pattern signatures found in the mountainous region of Nepal without this
[36:48] analysis the pockets of midsize towns with two to three story buildings would have been assigned as a rule single
[36:59] story story construction the method for estimating building distribution by development pattern types uh typically begins with an engineer identifying local
[37:12] construction types for the study region either through virtual reconnaissance through available street view imagery or through an in-person
[37:25] survey once the construction types are determined homogeneous construction type zones which we call development patterns are are classified and we begin to create
[37:37] delineated sample polygons for each type the spatial scale of these delineated polygons will depend on the level of effort and exposure level
[37:50] required for your specific study this can span from a simple small scale delineation that only classifies the urban rural
[38:02] zones or it can range to a very detailed large scale mapping unit as seen in the right hand side image of SOS Costa
[38:13] Rica prior to the development pattern uh delineations the building and population distribution for San Jose would have
[38:23] been evenly distributed throughout the administrative unit but now the buildings are reallocated to the regions that are more consistent with the on the
[38:35] ground observations development pattern segmentation allows us to get a better understanding of where people actually live and we can improve the structural
[38:48] distribution estimates and local mapping schemes all of which is important for disaster risk modeling and mitigation planning because it identifies the
[38:59] vulnerable communities vulnerable infrastructure and potential risks to important supply chain facilities prior to the use of development pattern segmentation our
[39:12] understanding of a region was limited to an urban rural designation that can be seen in the bottom right hand image the
[39:21] red being the urban and green being rural when analyzing risk risk we would be limited to using the default
[39:29] vulnerability curves Associated to that Urban rural designation Additionally you can see that the urban class was overestimated
[39:41] and Industrial Development pattern types are buried within the data now in the upper right hand corner uh the image shows how the development
[39:53] pattern segmentation is able to classify by the different degrees of urbanity and it highlights locations of crucial manufacturing and Industrial
[40:06] locations once the development patterns have been determined a structural distribution can be estimated using a combination of virtual reconnaissance
[40:18] building construction literature and a well- defined stratified sampling strategy for a level one exposure you can use global data sets like the world
[40:30] housing housing encyclopedia whereas for a level three or four you'll require an infield survey to sample the structural types within
[40:41] each development pattern so how do we conduct a sampling strategy we start by generating a set of
[40:51] randomized points and randomly select an even amount of survey locations per development development pattern while in the field the survey
[41:01] team takes samples of the buildings found in and around that location recording important building attribute information like Building
[41:13] height age occupancy and structural type then those samples are extrapolated to the similar development pattern throughout this study region
[41:27] this method improves the structural distribution and mapping scheme of the study applications like the inventory data capture tool can be used to collect
[41:38] the field data and take geotagged images as part of the US Aid prepare program I traveled to San Jose Costa
[41:49] Rica to give a workshop on the idct tool the purpose of the workshop was to teach the professor ERS Engineers firefighters
[41:59] and local volunteers um on how to use the data collection tool and how to conduct a building inventory study for a seismic
[42:10] risk risk analysis the wonderful part about this program and project was that the local community was able to take command in
[42:19] creating their own building inventory instead of relying on International groups this allows them to update their databases as needed and utilizes the
[42:32] depth of Knowledge from their local experts after all the building and population data has been collected and
[42:42] the development pattern and mapping schemes have been created they are all brought together as input data for the
[42:50] Monte Carlo simulation Which models exposure this takes several iterations and fine-tuning of the parameters for example we check against the national
[43:04] demographic and housing data in order to evaluate if the output results are reasonable and do not exceed the known
[43:14] building count or population values the results are also reviewed to resolve any over or underestimating within an individual ual development
[43:27] pattern type for example in Tanzania we had to create a new special case Urban Development pattern type for the Western
[43:37] portion of the country because after the first iterations we noticed a significant overestimation of high-rise buildings due to the sampling done in
[43:49] the urban areas of the towns uh to the east after the validation process is complete replacement cost values can be
[43:59] calculated using the estimated Total Building area either for occupancy or building type using various construction cost handbooks or local expert opinion
[44:12] you may have to experiment with the different replacement cost values and compare the results or you may have to
[44:18] use a combination of sources which are more applicable to different building types for example construction cost manuals may be an excellent source for a
[44:29] dense urban area with highrise construction but may be less useful for a rural area uh in its place you may want to
[44:39] review cost estimates from uh resettlement action plan reports because they might be better suited for scaling replacement cost values of adobe or earn
[44:51] homes based on the durability factor of the building material adding essential facilities is critical for identifying vulnerable communities
[45:03] at risk Lifeline Services and estimating the availability of resources or shelters in the case of an emergency although many humanitarian Aid
[45:14] organizations have put in a significant amount of effort in developing more detailed health care and education facility information many countries
[45:24] continue to have very limited data sets especially those that contain geocoded information therefore sampling and data Fu Fusion would be required which can be
[45:37] time consuming but would bear fruitful for a disaster risk management assessment to summarize Earth observation data sets play an intergr
[45:50] role in developing building exposure databases Urban intensity data sets which are imperious surfaces or builtup area data have a strong correlation with
[46:02] structural pattern types which Aid in the development of structural distribution and development pattern classification global population data
[46:12] sets are very valuable for developing a rapid level one or level two building exposure but you will need to review the
[46:20] uh accuracy of the data at your location and make adjustments as needed development pattern segmentation wouldn't be possible without satellite
[46:30] image composits of various sources either from Nighttime light data impervious surfaces land use and various population grids or the uh or the
[46:44] composite um Can Source satellite imagery and data products that have gone through textural or spectral analysis each composite combination can
[46:55] highlight various attributes for example dense urban areas can be seen uh as the white pixels in the bottom
[47:05] image the covariance image analysis in the upper image highlights another method for extracting building Footprints specifically extracting large
[47:17] industrial facilities or closely grouped informal informal housing the use of Earth observation continues to evolve and I look forward
[47:28] uh in seeing what the new technology has to offer thank you uh and this concludes my presentation all right my name is Mikey
[47:42] Gucci I'm a project engineer here at image cat and today I'll be talking about the uh structural mapping scheme
[47:48] development and uh building sway in this presentation we'll go over two of the main things required for
[47:56] exposure development uh first are the development patterns is a country specific we go what they are and why
[48:05] they're important and then the second part would be uh the maing Scapes these are basically the building taxonomies
[48:13] we'll go through how they're defined and how they're developed so what are development patterns basically they're country
[48:19] specific homogenous regions of building types and densities that are created using remote sensing so essentially each development pattern
[48:29] gets a unique distribution of the builtup environment and the built-up environment can include uh properties such as the structural characteristics
[48:39] you know what type of uh L Force resisting system is it what are the building materials what are the
[48:45] different height profiles so can be related to number of stories uh what's the distribution of occupancies and these Dev development
[48:55] patterns are you know essentially created throughout the entire region so they don't necessarily need to be contiguous you can have Rule and one
[49:04] part separated by residentials then rule um and it's important to note that development patterns will differ by
[49:13] region uh just because you have you know some type of development pattern in the US doesn't necessarily mean that you're
[49:20] going to have it in a different part of the the globe so why is need for these
[49:26] development patterns uh if you look on the left it's satellite photo of LA county in Southern California if you
[49:33] look on the top right it's the land use occupancy which is U basically all residential so if you just to look at
[49:39] these and you ask me what's the buil of environment I assume most of its uh you know more twostory wood brain
[49:46] residential residential construction what that neglects to tell you is that there are other parts may it'll be you know downtown areas the
[49:55] industrial areas where that's just not the case so the purpose of the development pattern is to capture that
[50:03] unique builtup environment building distribution so since we know that LA County isn't all single story two story
[50:14] woodframe construction we want to be able to identify those regions that are you know much different in regards to
[50:20] the built-up environment so here we have a zoomed in photo of some of these areas that we found in LA county uh bottom
[50:27] left is Downtown LA this where the mid and highr reinforced Cony or still sructures are uh to the top left just
[50:36] the west of downtown LA are the you know 234 woodf frame apartment structures uh on the top is the uh
[50:46] industrial regions these are large warehouses single story tups typically uh bottom right is a pretty unique situation where the La Port or Long
[50:57] Beach and La ports and on the top right is typical single story one two woodf framed construction that you'll see in
[51:06] most of the suburbs of Southern California so why do we want to you know identify these unique areas because each
[51:15] building distribution for each of these is quite different and if we're looking at any type of Hazard modeling or
[51:22] anything like that we want to know these character istics we want to know the structure type we want to know the
[51:28] height uh possibly we want to know the ti so the building uh development patterns will capture all of this
[51:38] information and you'll be able to identify why it's Unique uh what's your vulnerability in in a given
[51:46] location so now that we know what a development patterns are I'll go through some of the ones that we typically see
[51:53] uh throughout the world uh it's important to note that you know not every country is going to have all these
[51:59] development patterns uh some might not have you know those Central Business districts or high urban areas which
[52:06] we'll go through later but here are some examples that we uh typically see so the first one is Rule uh most F going to
[52:14] have this these are found outside in the city boundaries uh we usually associate them with agricultural regions uh
[52:21] developing countries these are you know usually small reel villages one way in one way out and they're usually you know
[52:28] one two story not engineered using local materials and constrction techniques so next up we have the residential development patterns uh
[52:39] these are pretty obvious they made me uh one and two stor single family detached homes uh probably local materials
[52:46] construction construction methodologies um one thing you'll notice here is that you know one of these cells is blank that doesn't necessarily mean
[52:54] there's no res residential uh readings and out in the uh in the area it's just that there is no construction pattern
[53:03] that met our requirements for the residential development pattern residential occupancies probably are going to fit into another uh development
[53:17] pattern uh next is what we're calling high high density residential development patterns and these are typically found in and around the uh
[53:26] Urban uh centers you'll notice things start getting a little more dense maybe a little taller uh with each development
[53:33] pattern uh but a majority of the population here you know lives in multif family residential housing apartment
[53:42] structures um still we're looking at low rise with some occasional big rise EV uh next up we have the Urban
[53:51] Development patterns these are exactly as how they sound uh that's found in in and around the major uh City centers you
[54:00] know space is limited so buildings are pretty tight and they're fairly regular shape just to get within the block um
[54:08] you'll typically see these as low to midrise residential this is where you start seeing a lot of the commercial
[54:15] come in uh with the occasional high-rise you know office building or partment structure so here we have one step above
[54:23] the Urban Development pattern calling the high Urban these are found only in the uh major cities and they're
[54:32] typically the central business district of of the region uh they're occupied by mid to highrise uh buildings you can see
[54:41] from the satellite image you know how Den the space it is see how tall they are from the Shadows just the this image
[54:50] um there's three lens here again not every country is going to have it so this is why we're going to start seeing
[54:57] phasing out uh of this development pattern in a lot of the more underdeveloped underdeveloped trins the last of the typical developing
[55:07] patterns are industrial areas these are pretty obvious from satellite imagery and they're usually you know fors liing
[55:15] Ora other industrial activities uh the large warehouses regular in shape you can see large rectangular buildings basically in
[55:24] these develop patter you'll also see some you know lowrise uh office and Commercial supporting areas but for the most part it's going to be
[55:32] uh warhouse structures so here are some other special types that we've observed uh around the world uh they're not going to
[55:42] be everywhere um but they will be there in some cases uh the first one are en thoral
[55:49] thoral housing these are rity Deads uh in form of stims you'll usually find them around you know around the edges of any major
[55:59] city uh there Standalone structures basically no space some between any any them uh they're almost always inl non
[56:08] non-engineer and what they all do is pretty much use any local materials to create these areas uh on the Other
[56:17] Extreme are these local caring very high Urban uh areas these are you know Global centrally centrally districts uh and those always high-rise
[56:29] buildings bottom right is uh H see the high profiles are much different sizes are much different than any other other
[56:39] development pattern that we've gone through so far so now that we know the unique development patterns we need to be able
[56:46] to associate a uh a mapping scheme to each of them so mapping schemes basically give you a breakdown
[56:54] percentage wise of the builtup environment uh macing schemes can include you know story height profiles stral type profiles are we can
[57:04] see TI later on but basically each development pattern gets this unique distribution for future analysis um for the mapping scheme
[57:16] Basics we'll go through three things uh first we'll show how to identify Which social types are in your region uh then
[57:24] we'll go over how to gather and organize any type of sensus data that's available and lastly how to construct these uh
[57:33] mapping schemes building distributions Etc so the first thing you want to do in your country of Interest region of
[57:40] interest is know what builds of environment can consist of you know what materials are used what's typical
[57:48] structural system now things in the US are going to be much different than areas such as uh Nepal
[57:55] so the first thing that we'll do is look at any scholarly or onl journals uh the world housing psychopedia and a pdna
[58:04] reports and the good thing about these is they go pretty in depth of what uh unique buildings are Structural
[58:11] Materials lot of force resisted systems uh the methodologies construction uh they reach in specific and you know
[58:19] they'll give you any known structural details deficiencies and details uh for future vulnerability modeling so next we look at any type of
[58:29] uh country specific assessments this is usually in the form of um Census Data the Census Data is good because it gives
[58:37] a general overview of the country and usually they provide you know breakouts percentages of materials home materials
[58:46] uh wall materials through thing floring Etc uh one of the cons is that you know sometimes it's limed the the this
[58:55] information if you can get it and that there's no uh distribution of you know the lateral forces to system they'll
[59:03] give you the main materials for things such as the walls but you're going to have to use the information you gathered
[59:12] from your initial research to essentially uh assign these main materials to a structural system when we look a little bit broader
[59:22] we can use the uh Global building exp databases such as it's one from pager uh essentially they give a pretty
[59:30] detailed description of the structure type distribution for all countries in the world um there's a downside too that
[59:40] you know it's limited to essentially rural uh Urban and not all countries are country specific meaning that if they
[59:51] don't have enough data for one country they use a proxy uh from neighboring country so we have to be aware in using
[59:57] this type of data in regards to documentation what we L LA cut is building codes uh these are
[1:00:05] good because they're country specific and so they'll tell you any uh applicable materials and construction practices that they do use the cons are
[1:00:15] you know enforcement can and often may be limited so what you see in the code might not be what you see out
[1:00:26] in the field you have to be careful with your vulnerability modeling uh if this is the case so one of the things we have rely
[1:00:35] on for identifying the construction types or any type of ground imagery or videos uh mainly Google Street View and
[1:00:42] M uh the pr pros of this is that you know they're widely available and often pretty good
[1:00:48] quality uh some cases in post event there'll be some damaged buildings you can get images of the building materials maybe
[1:00:57] some structural types um another Advantage is if you use this in combination with satellite images you can start making some correlations
[1:01:06] between you know I know it has this type of roof this type of St material from satellite image I know it's the
[1:01:12] structural type from the ground view so now you can start making some assumptions based purely on satellite
[1:01:19] images at that point uh the cons that they're often pretty Limited in Rural and maybe more developed developed developing countries
[1:01:30] um this is when you're going to have to start looking at you know online photo sites or videos to get any good idea of
[1:01:37] what the building environment is so the point of this slide is to show you how to get from you a satellite
[1:01:44] photo down to a identified structural type uh the top row we have all our development patterns um in the middle
[1:01:52] row we have typical building that we're seeing in the street view and then this bottom those where it's pretty
[1:01:59] advantageous for the street view is we often see buildings under construction which reveal the bu building materials and the structal
[1:02:10] system U within the region within the development development pattern so if you're not able to find some buildings on your construction with
[1:02:21] the ground imagery there's some other tips and tricks we can do to figure out the structural type or building
[1:02:28] materials uh this first one I'll look at all sides you know the backside doesn't have the pro appeal that they need so
[1:02:35] it's out of to finished so if we go to the back we can see that you know
[1:02:40] reimport masonry building uh that you can't really see from the front with the facad uh again Google Earth has historic satellite
[1:02:50] imery you can talk through that and see if you can capture when it was at the constrution
[1:02:57] here we can see it's tilt up uh Google Google Maps also has a historic ground industry uh it's pretty recent though so
[1:03:06] you're not going to go pretty far back but here we're able to capture this supp part of struction Florida under
[1:03:13] construction uh we can see it's a reinforced block reinforced M block wall uh building because we're able to
[1:03:20] capture it under disruption so once have a good handle on the construction types within a given region we need to start creating these
[1:03:30] uh building distribution breakouts uh for each development pattern and by breakouts we mean what's the percent distribution of each structural type
[1:03:39] what's percent distribu every uh Building height occupancy etc etc uh for Rural residential we typically or heavily rely on any type of sensus or
[1:03:50] global data uh depending on the resolution so so these are good because you know street view often is pretty
[1:03:57] limited out there and they will provide percent breakouts by the wall material uh we can't use that wall
[1:04:05] material for any Vol ability modeling so what we have to do here um as in that bottom table there is essentially map it
[1:04:14] uh to something that we can use in this case a pager so using the know knowledge you have of building materials structal
[1:04:24] Etc that you learn from the um previous slides you're able to map directly the wall type human P type or teature
[1:04:35] analysis for nonrural Regions we look for any uh country specific exposure studies for uh mapping scheme development uh these are usually
[1:04:46] done in high Hazard regions for example the one on the left is a t in Tunisia what essentially was was a field survey
[1:04:56] where they recorded the number of stories structural type um age uh occupancy and so if we have that data
[1:05:06] and we have our development patterns we can essentially overlay the two and pull uh mapping schemes directly that way we
[1:05:15] of course do some sity checking again with the street view uh make sure that the some of the assumptions are are
[1:05:22] correct and we'll you know redistribute the structural types or building Heights based on our Judgment of what we see uh
[1:05:29] on our review if the relevant sensus data or the uh previously done F surveys are not available we do a stratified sampling
[1:05:40] ourselves this is both for the development of the mapping schemes and validation of any uh sales mapping
[1:05:47] scheme that we already have uh this can be desktop which is probably most of the time or a ground survey build saving Sun
[1:05:55] uh so for example on the left we have our um development pattern where we want to sample uh we go through identify each
[1:06:05] unique building structural type their height Etc we do this a few times throughout the region to make sure we
[1:06:12] cover uh you know variations in the development pattern from there we essentially create these distributions that you see on the right side from our
[1:06:23] sample so the right we have each uh structal type we have each development pattern and on the cells are our
[1:06:33] observations and our distributions of those based on our desktop study so that was the summary on how we
[1:06:42] come up with the development patterns and how we create the uh mapping schemes and to that development pattern uh just
[1:06:49] a few things in summary um first you know do an online search identify all the materials all
[1:06:56] the structural types that are typical in that region uh once you have those go through you know Google satellite view
[1:07:03] ground imagery make sure you can find those and validate that those assumptions are correct uh you definitely want to make use of any type
[1:07:11] of census data or region specific or build surveys uh it takes a lot of the leg workout and they can help you with
[1:07:17] some preliminary uh mapping schemes uh once you have those mapping schemes though you need to be able to validate
[1:07:25] these uh maybe through a stratified sampling uh again the stratified sampling can be used to create the
[1:07:31] mapping schemes for those development patterns if we don't have any um at the end of it I like to do a quick sanity
[1:07:38] check essentially du these results make any sense uh on the table on the left there development pattern one
[1:07:45] development pattern two four five six um seven is industrial but one is rural two is residential four is high density
[1:07:55] residential five is urban six is a high Urban so you want to make you want to look at it and make sure you know do
[1:08:02] these high profiles make sense are there taller buildings where I expect them to be taller buildings which is in the
[1:08:08] urban urban regions are the local materials you know the W and dobs the Adobes are they mainly in the rural residential regions
[1:08:17] and again on the opposite end for the you know the engineering construction these reinforced concrete frame more
[1:08:24] still brace Fame uh buildings are they in a region where I expect them to be which is typically going to be in your
[1:08:31] you know your high Urban developed Central Business districts and so with that I'll leave it and I hope
[1:08:39] you uh enjoy the presentation and learn something from it I'll be presenting with my colleague Z and we'll be going through this case
[1:08:53] study which is a walk through a building exposure data from Tunisia this was a project tked to us by
[1:09:00] the World Bank and essentially they wanted us to perform a multi- study for the Republic of Tunisia looking at both
[1:09:08] flood and earthquake risks our tasks included exposure development and review of incorporation to a format suitable for L destination and also data
[1:09:17] collection uh guidance on vulnerability assessment assignments for both seismic and flood uh assessment of the risk of
[1:09:25] the builtup environment and a visualization within a bi tool so the first thing that we did was
[1:09:31] identify all the homogeneous cells or the uh development patterns which we talked about previously this was pretty
[1:09:38] important for this country since it's kind of a mix between you know older vulnerable uh buildings and some of the
[1:09:45] newer developments that you'll see in residential or navy Ur urban areas uh so we identified five regions for shown
[1:09:54] here rules not shown but what we have here is the essentially detached residential uh development patterns uh
[1:10:05] Industrial Development patterns occupied by those large warehouses again uh the urban regions these are typically midrise buildings uh found in the city
[1:10:16] center and then on the outskirts you have these really dense uh high density uh residential uh stru development
[1:10:23] patterns which are occupied by you know some of these more older vulnerable structures which we'll go into
[1:10:33] later once we knew what the development patterns were going to be uh we needed to assess the uh builtup environment
[1:10:40] essentially asking the question you know what type of permanent and also non-permanent construction and build building the twos are prevalent
[1:10:48] throughout the country uh we relied heavily mainly on three things uh first was ground imagery this was pretty
[1:10:55] limited through VOR but there definitely was some ground imagery we used for validation and assessment uh the sensus
[1:11:02] and housing data uh that we had the Tunisia housing profile from your habitat uh we also looked at pager for
[1:11:09] some uh General uh building distributions and finally we had these uh country profile studies uh which go
[1:11:16] into pretty good detail regarding the uh structural types structal distributions for different parts of the region so we were able to get this National
[1:11:26] catastrophe risk profile from the World Bank uh this was pretty advantageous in three ways essentially first of all it
[1:11:33] gave us the sh Show types that are prevalent within the country uh it was in French which we translated uh it gave
[1:11:42] us distributions for the rural and urban areas for residential and non-residential non-residential construction and it also gave us these
[1:11:49] vulnerability curves seen in the bottom right for each of the uh structural systems that they identified so given those different
[1:11:59] lateral Force resisting systems from the national risk profile uh we needed to be able to identify them uh visually for
[1:12:07] both S Check and for validation so what we did was we used the UN limited street view imagery and any online photos to
[1:12:14] essentially identify and label uh each of those types uh that you see here uh next we looked at Census Data
[1:12:24] from the World Bank and ernston young this detailed Census Data provided the foundation for the mapping schemes of
[1:12:32] the predominantly uh residential development patterns as the data provided a breakout of the different types of housing from the top left you
[1:12:43] can see it's Shaw room entry semi detached uh Villas or apartments uh structural types for these housing were not uh provided therefore
[1:12:55] we had to rely on descriptions laid out in the Tunisia housing profile which we'll go through uh after this but this
[1:13:05] was beneficial because it gave us breakouts of these housing types for every governor and so we started looking
[1:13:12] through all these governments and some of them were solely residential or solely HD residential so we could start
[1:13:19] those using those as the preliminary mapping scheme for some of these uh basic development patterns so the World Bank and er census
[1:13:31] dat data gave us uh five different housing types that are found within each govern govern uh the problem is we
[1:13:39] didn't know uh where they were what they looked like what kind of Str that it was thankfully we found this uh Chia housing
[1:13:48] power from the unab and in it they go through each of the five different types and they even
[1:13:56] have a satellite photo of what these typical types look like so what we're able to do is find these uh types in
[1:14:04] satellite imagery Google Earth use street view imagery to assign a structural type to it and given those
[1:14:12] structural types we assign them back to the World Bank distributions and so from there we can create these uh residential
[1:14:20] Dev development pattern mapping SCS so this was predominantly used just for those residential development patterns another source relied on was
[1:14:31] this study from the University of Tunis uh and essentially what they did was they inventoried U certain blocks uh
[1:14:39] within the city of Tunis and had an assessment of their vulnerability uh you can see on the top which buildings were
[1:14:46] surveyed and they this ground survey they recorded quite a few things which is the you know structural type the
[1:14:54] occupany uh where it was built the number of stories and we use this for the uh non-residential statistics since
[1:15:01] we already had a lot of residential stats for from Census Data um this is great it was direct observation and a
[1:15:09] breakdown of structural types for this downtown Urban region and this was suitable for our Urban Development patterns so where we didn't have any
[1:15:20] census data or filled survey data from uh previous studies um we needed to do a essentially stratified sampling strategy
[1:15:30] uh to come up with these mapping schemes this was mainly well this is only done for the uh uh Industrial Development
[1:15:37] patterns uh although you know it's the ernston young and World Bank uh data provide number of lots and lot sizes uh
[1:15:44] there's no information regarding the structural type so what we had to do was survey this these regions uh throughout
[1:15:52] the country and we recorded both the uh number of stories and the associated structural type using the information that we already had from
[1:16:04] the uh the previous studies so we end up coming up with this distribution for Industrial Development patterns seen on the top
[1:16:14] right so we used all the sensus data fil survey data uh ground imagery to essentially come up with this uh
[1:16:22] Nationwide mapping scheme for Tunisia for each of these five uh development patterns res rural residential HT residential Urban and
[1:16:32] Industrial uh to recap for the rural residential and HT residential we relied heavily on the uh the World Bank and N
[1:16:41] young Census Data these gave us the distributions by government the Tunisia housing data allowed us to relate those
[1:16:50] housing types to the young ild building types uh for the urban we relied on the um um field survey from the University
[1:17:01] tus uh we did validation uh inspection on our own to essentially sanity check any of those results and for the
[1:17:10] industrial again it was a sampling strategy there's no information regarding structural types for this from anything that we could find uh we needed
[1:17:19] to make sure these are all consistent so we used the um uh structural types seen Below in French apologies U but anything
[1:17:29] that we got from the Ern young or the University of Tunis or from our sampling we had to essentially map to one of
[1:17:36] these structural types so it's it's all consistent across the board um so we ended up with this uh M see seeing below
[1:17:45] and my colleague z uh will go ahead and uh essentially tell us how we used all this
[1:17:52] this information so once the development patterns were ready so we used a machine learning model to classify development
[1:17:59] patterns across the entire country so we took those digitized regions and we used that for training to create that model
[1:18:07] and we did that in Google's engine platform we chose that because uh first it had a lot of different data sets we
[1:18:14] we're using lanap we use fearce we also use classified layers uh one layer we used was Global uh human sediment layer
[1:18:24] so all those data were easily available within the platform and also second it's very easy to pre-process that data so we
[1:18:32] have we stacking all that data we had to resample some of the data for because of different resolutions we're stacking
[1:18:38] that with this some normalization so all of that was very uh easily done then they have buil-in uh learning models
[1:18:46] they have some a different type of algorithm that we could test out to generate the final model we could
[1:18:53] generate uh we could do the testing of the the performance of the model within that platform and once we did that uh
[1:19:00] the final classify uh grids were exported into a tip that we use for the next step of processing and the tip that
[1:19:08] we created was a 15 Arc seconds which is close to half a kilometer resolution so here we see the classifier
[1:19:17] layer overlay on the city Tunis and here we see uh the different colors represented the different development
[1:19:24] patterns the yellow color represent the the Urban Development pattern we can see that in the city center then across that
[1:19:32] we see a lot of these more cion bluish color dots the residential then we have this little purple uh those are the
[1:19:41] dense residential so we see these zones to be classified and out of the city we see the rural pattern which more the the
[1:19:49] brownish color here we see an example for another city where we have a lot less of the Urban Development pattern
[1:19:57] but a lot more than the residential and dense dense residential so with the grids classified uh we did the exposure
[1:20:06] disaggregation here by disaggregation we mean to geographically distribute the exposure onto these grids okay and the data that we got from Young the original
[1:20:16] exposure data those were aggregated at the admin level so here we used a remote sensing signal that for each of these
[1:20:26] classified grids and we distributed that geographically geographically proportionally and then we also value the proportion depending on the
[1:20:34] different development patterns because a different development pattern the total amount is quite different the and the in
[1:20:41] the replacement value for those amount will also different and then we apply these mapping schemes to represent the
[1:20:48] uh vulnerability so at the end of that we have the different grids for each grid we have the total amount of
[1:20:55] exposure represented like number of buildings we have the total replacement cost and a series of vulnerability and
[1:21:04] the proportional vulnerability that characterizes that exposure for every grid so we did that analysis for the general residential commercial
[1:21:13] industrial we also did that for some quite specific one for Education Financial Health tourism and for some special types this
[1:21:22] method we did not apply uh for the point specific ones but poor Dam these are the dis the disaggregation method does not
[1:21:31] apply and also for some another one which did not had damage functions we also did exposure refinement for sun areas and so this is
[1:21:42] to better characterize the flooding so the original grid remember it was close to half kilometer which is adequate for
[1:21:52] earthqu analysis but this is two cores for flood modeling especially because we had a flood data at much higher
[1:22:00] resolution so you can see from from this picture if the red color represent the area of a grid the flood region is
[1:22:09] actually smaller than that but if we're using this entire grid as a representative exposure all we can do is
[1:22:16] just say the entire region is being flooded which is not correct then also it's not really correct to assume that
[1:22:24] exposure is evenly distributed within thatr so we use higher resolution remote sensing and we did a higher level of
[1:22:33] disaggregation that gave us uh better grid resolution around the rivers near riving area or area that uh represented
[1:22:42] in those flooded areas so we have better representation of the exposure at 90 M so we can have a better understanding of
[1:22:51] the flood rate risk now let's talk about the hazard data used uh for flood we use fluo
[1:22:58] defended flu undefended uh both of these are from ination caused by rivers and defended undefended the defense is the
[1:23:07] presence of uh defenses along the river I flood walls or barriers flu Pro your data those are inundation zones caused
[1:23:17] by excessive rain so we had data at 90 M that's where we did the uh disaggregation refinement we had the
[1:23:26] refinement for 90 M and we had flood there for 10 different repair periods okay so each of these repair period
[1:23:34] could be converted into a probability that helped us in the end to calculate annualized average loss so for
[1:23:43] earthquake uh we had a data which a lot more course as you can see from that but
[1:23:48] we had for the entire country and the metric that we used was p ground acceleration and we had that for seven
[1:23:55] different return periods the next step is calculate the loss using the return period Hazard values at every grid and the exposure
[1:24:05] with the vulnerabilities we're able to calculate the losses so in the end we kind of have a
[1:24:12] return period loss curve for every grid for every occupancy so we collapse that return period curve into annualized
[1:24:21] average l remember uh the return periods correspond to different probabilities so that can be aggregated into a a for
[1:24:30] every grid the a was also aggregated for each admin One units so the final step was loading all
[1:24:39] that loss information the exposure information into a bi tool and that was the final presentation of the result and
[1:24:47] the bi tool was very useful because it was presenting a map it had different uh charts and different ways of
[1:24:55] representing the data and the best part is these are interactive so people click on uh area that admin the graphs gets
[1:25:04] updated with the with the value fund that admin or if they want to see a particular uh occupancy they can just
[1:25:12] click on the occupancy and see all the result being updated so this concludes our uh use case for what we did for
[1:25:21] Tunisia Tunisia Charlie Georgiana Mike thank you all for your terrific presentations so let's review what we covered here today we discussed exposure
[1:25:34] data and how it's used in the Lost estimation process as well as a basic process of developing those data
[1:25:40] additionally we covered structural M mapping scheme development and building sampling and ended with a case study involving building exposure data in
[1:25:50] Tunisia on October 5th with in part two two days from now we will continue with the discussion with the development of
[1:25:57] site specific exposure data with Earth Earth Earth observations we'll also be looking at developing building structured data sets
[1:26:04] and a case study used to characterize vulnerability so we hope that you can all join us for part two below is the
[1:26:12] contact information for Charlie Georgiana and Mike along with links to the training web page social media and if you enjoyed
[1:26:20] today's webinar we hope you'll sign up for our sets list serve to receive not notifications of future trainings and
[1:26:27] follow us on various social media platforms for other relevant announcements pertaining to NASA's Earth Sciences we'll now transition to the Q&A
[1:26:36] portion of today's webinar thank you all right welcome to the question and answer session thank you everybody for
[1:26:53] submitting your questions throughout the presentation and we've been working as a team to address those and what I'll do
[1:27:02] is I'll just Dive Right In and for any of the trainers um that provided the answers please feel free at any time to
[1:27:13] unmute and uh go through the document with me so uh I'll start with question one how is it coste effective to
[1:27:22] actually retrofit when you have to spend the extra time and money on customizing specific requirements I'm sorry Brock am I
[1:27:42] supposed to uh jump in here and answer the question I thought you were going to read through for a second uh well I
[1:27:49] thought it might be be best to um who actually provided the the text here to kind of walk through it and I'll capture
[1:27:57] anything else that you might add to the answer okay um Mike why don't you go ahead and start and then I'll um follow
[1:28:04] up the B thank you Mike uh sure yeah so how do we know if it's cost effective basically you will do a
[1:28:12] benefit cost analysis uh just to see if this retrofit is a cost effective so what we do is you know we run through
[1:28:19] the analysis we calculate the expected loses for the Asis building meaning the non-retrofitted building we'll go ahead
[1:28:27] this is expected losses in regards to loss of life injury things like that and then we'll do the same analysis for the
[1:28:36] building that is retrofitted and when you when it is cost effective uh your BCR your benefit cost
[1:28:45] ratio uh will be essentially above one so I put an example you know if your seism ret is cost 10K and through our
[1:28:54] analysis we expect 20K in savings that's a dcrf 2 we expect that to be a cost beneficial cost beneficial at that
[1:29:06] point yeah and I think that um uh kind of embedded in the question is how can it really be a coste effective if you
[1:29:11] have to do a lot of Uh custom work it's a um it's kind of a a uh we don't just
[1:29:18] look at retrofits and that um um anal is we look at um the cost effectiveness of new building codes uh cost effectiveness
[1:29:27] of buyouts actually removing uh homes from areas of high risk um but we also do sometimes look at um specific types
[1:29:36] of retrofit many of which you know uh will require um um um adaptation for specific buildings like a trailer tie
[1:29:46] downs or retrofitting for earthquakes but are are fairly standard so that the C may say does not add a lot of cost to
[1:29:53] the project and then in some projects they they'll be highly customized and in those cases those are
[1:29:59] usually uh uh cost effective in areas of high risk where you have life safety concerns or a lot of um um benefit costs
[1:30:08] I'm sorry um business Interruption concerns so those are also included in the benefits of the um of the BCA
[1:30:16] analysis Mike was talking about thank you very much Mike and Charlie and uh for all the participants
[1:30:26] uh please feel free to continue adding questions to the question answer box and we'll add this them to this document and
[1:30:33] we'll try to address as many as we can during our Q&A session uh so please keep them coming question two what would be
[1:30:40] the possibility of exposure mapping in terms of accuracy of renewable energy to asset extreme events using EO
[1:30:48] data yeah so this um it's difficult to answer answer that that question without knowing sort of the specifics of the
[1:30:55] application but this is definitely you know exposure data is definitely being used to uh uh you know assess uh trans
[1:31:03] transition risk one thing that uh you know we've been involved with is looking at the vulnerability of new sites
[1:31:10] placement of of of new sites or um the uh the risk associated with solar panels accuracy is really going to depend on
[1:31:19] the specific application application great thank you question three can you provide some articles related to how the
[1:31:28] me how to measure Building height and shade patterns in urban areas yeah looks like the uh the
[1:31:35] questioner is looking at trying to characterize uh um heat Islands uh I've not done any work in the um shade
[1:31:44] patterns um myself uh and in terms of measuring Building height it really depends on your base data uh and your
[1:31:51] application I just would recommend going to Google Scholar that's often what we do to start thank you question four on slide nine SAR was
[1:32:02] mentioned synthetic aperture radar when talking about Building height c one data has a ground resolution of 10 meters
[1:32:09] what would be the vertical accuracy when using this data set for estimating the building height presuming picked up
[1:32:15] correctly that Sentinel one SAR was used to find that Building height so this is a technical question
[1:32:22] that I don't know the answer to um The Sentinel one was not used on that slide that um slide was actually
[1:32:30] just an illustration of the types of things that you can use eo4 um that specific study was uh uh
[1:32:37] from uh quite a while ago and actually used Airborne SAR data I think that the resolution was about three meters uh I
[1:32:45] looked into the accuracy of that data set for quite a while actually um as a um uh you know a study and you know we
[1:32:54] discovered that you know specific buildings might actually disappear in the SAR data depending on the orientation of the building what was on
[1:33:01] the roof uh uh and so on and so forth we got unprocessed star data and looked into the acur acuracy ourselves so
[1:33:08] there's there's definitely uh issues with trying to get uh Heights from specific buildings from sard data that's
[1:33:15] not the way that we actually use the data typically we will use it to come up with almost like a height profile or
[1:33:22] region uh which would be used basically to uh uh extrapolate um um structural characteristics and the and the the
[1:33:32] methods that U um using the methods of developing uh building patterns development patterns um that some of the
[1:33:39] other speakers addressed so uh yes our data for Heights can be highly problematic great thank you very much
[1:33:45] for that clarification question five in the step of estim estimating the distribution of building by development patterns
[1:33:55] identifying delineating development patterns how much effort goes into this process and can it be automated second question to that is is
[1:34:04] there a global data set that has this information or doesn't need to be calculated for each study
[1:34:10] area so um you know it's um a lot of these the aners these questions will depend on the scale of the work that's
[1:34:17] being done um we almost never use use uh automated um um detection algorithms we almost always do semi automated uh
[1:34:28] detection algorithms that we'll start with a long conversation with uh Mike and uh um Z and Georgiana and myself uh
[1:34:38] looking at the specific structural uh um characteristics of the uh country and um and the risks of the country and what we
[1:34:49] think that can be extracted so you almost want to start with um some some base knowledge to to make sure that you
[1:34:54] don't miss anything in an automated process um uh is there uh is there global data sets that that you can use
[1:35:02] um yeah I mean there's a lot of uh there's the world housing encyclopedia from um er um that's a great source for
[1:35:11] structural information I believe Mike mentioned that um Jem has uh a global data set where they've got um structural
[1:35:20] types I don't think they have development patterns but they have structural types um pager has embedded um structural types um by Urban and
[1:35:30] non-urban areas that can be used uh in conjunction with development patterns and then the meteor project by bgs
[1:35:36] that's mentioned here uh has uh 46 countries developing countries where we've provided that information great thank you question six I live in Cutter which
[1:35:50] is on the coast of the raban Gulf our region is generally extremely row risk in terms of natural disasters and thus
[1:35:57] we have tons of energy producing plants near the sea even though it's considered safe we still need to take measures in
[1:36:03] the case of that 1% what approach would be appropriate to address the wh ifs sorry I can take this one again um
[1:36:20] yeah so so uh if you're looking specifically at the risk to the power plants and energy generation
[1:36:27] facilities uh the first thing to do is to start with the locations of those plants and then overlay uh your risk
[1:36:33] data if you've got flood data you mentioned 1% uh getting a 1% flood Hazard data set there's international
[1:36:40] data sets that you can uh um start with that are um commercial fathom for example is a good source
[1:36:46] jba um and then overlay with the facility location and then use that prioritize um the acquisition of more uh
[1:36:54] uh high resolution data if you're looking at very high um uh value faciliity such as this though you might
[1:37:02] not want to uh uh rely on 1% you might look at the 500 year the 2500 year a
[1:37:07] flood maps because um for one thing climate is changing and it pays to be conservative and and on the other hand
[1:37:14] it might be very cost effective to um um uh mitigate those uh high value properties properties um that's you know can a massive
[1:37:24] cascading particularly if you're talking about you know energy generation energy generating economy there that can be very disruptive toly
[1:37:34] the economy of kar so you might want to look Beyond to 1% great thank you question seven nice to learn about ongoing
[1:37:46] projects in Nepal for identifying building Heights the country has scattered buildings and hills and mountains how can I estimate the number
[1:37:52] of buildings such terrains with scattered builtup patterns further for the use of local resources like slates rock or wooden or bushy rooftops make it
[1:38:01] even more challenging to Tech buildings have you seen any um similar work in this this area yeah I mean we've done a lot of
[1:38:10] work in Nepal uh it's hard uh and specifically we use um the mountainous areas in Nepal as an illustrative example of how hard
[1:38:20] it can be uh um that being said you know we've done the best we can we've developed
[1:38:27] both the level one and a level three data set for Nepal in order to kind of compare the two uh also on a project
[1:38:34] with um pgs for e space agency and osm was on that project um you know if you're if you're
[1:38:41] trying to um um get specific buildings you can't beat the human eye uh and and high resolution data and that's actually
[1:38:50] what was done by M given the um a magnitude of the risk in the Paul I think they've got had their kind of
[1:38:57] crowd sourcing engine um digitize every building footprint and that's a very good guess and you can cross reference
[1:39:05] that with uh a population data sets and scale up if you need to but I don't really need I don't think you need to um
[1:39:13] um scale too much maybe in some of those U those mountainous areas so anyway there are sources uh the meteor project
[1:39:21] um maybe one of my cohorts here can get the link and and put it in there that
[1:39:25] you can um you can um take a look at great thank you and uh it's nice to
[1:39:33] have a clarification that no it it it can be uh a little bit difficult and um but there are some ways being developed
[1:39:40] to work around those question eight when estimating raser cell population counts using building and other spatial data
[1:39:48] sets have you come across known under Forest canopy populations that are undetectable by remote sensing if so how
[1:39:56] did you account for those counts yeah so I mean this is a um this is another limitation that we really
[1:40:04] want to be upfront with um and uh everybody on the call needs to be upfront with if you uh go down the road
[1:40:11] of developing these exposure data sets and that is you know um you can't characterize what you can't see there
[1:40:18] you know if you you do characterize it you have to be very transparent and how you go about that process uh and um and
[1:40:25] that needs to be uh you know a limitation if you for example have uh an area where you've got severe flood risk
[1:40:34] under a tree canopy uh you know you're not going to be able to make very definitive statements about that risk
[1:40:40] and that's something that you need to understand I think we've got a whole session on that actually some of the
[1:40:45] limitations that um that you need to look at um so and a good example is the pop grid data right pop grid is an
[1:40:53] effort led by um C where they've actually mapped different um global population data sets in the same screen
[1:41:03] so that users can see how different um um di symmetrically mapped assumptions about distribution of population can
[1:41:11] result in very different U um estimates on on a per grid basis so anyway I mean the question is sort of what have we
[1:41:18] done um in those situations I think you know um Pap Guinea was a good example for us where we we had to kind of throw
[1:41:27] up our hands and um uh rely on some um more statistical methods and in those cases we we acquired a a language spoken
[1:41:39] maps of tribes that could be very small and used that to distribute the population we were able to find
[1:41:47] clearings on coastal areas associated with farming development we placed a lot of population in those areas uh and then
[1:41:54] I think that there was in some areas that were internal to the country we just have made some assumptions about
[1:42:00] some distance from roads but it can be very difficult and that's one of the areas um that you need to be very
[1:42:07] transparent transparent about great that's good to know and um you know uh We've we're trying to create
[1:42:15] a nice community based around these trainings and people working in these areas areas uh so hopefully we can communicate these
[1:42:24] approaches and successes and limitations um uh throughout and overcome them together question nine on the slide mapping scheme Basics a lot of different
[1:42:37] sources are mentioned how much of this data is processed automatically and how much it's done manually I want to get an
[1:42:43] idea how long it would take to create a view of building composition in a middle-sized town in an agricultural F
[1:42:50] Focus Focus semi-rural region in other words not highly developed okay I spent a lot of time answering these questions so uh uh but I
[1:43:03] think any of my colleagues can jump in anytime anytime and give me give me a hand here um uh
[1:43:10] really um how much money is spent developing the exposure um database depends on many many factors including of the risk of
[1:43:21] the town uh the risk of the area um so that is you know how much do you have to
[1:43:27] actually get this get it down if it's in not a very risky area you know you might
[1:43:32] be able to get um get away with not doing any development patterns and going to something like a hasus database or or
[1:43:38] some um um Global dat set to look at the risk if it's a very high-risk town and
[1:43:42] you're worried about schools and hospitals it can be a very extensive effort um but I think uh if we're
[1:43:48] specifically talking about the mapping scheme development pattern work um you know um going to um get local man
[1:43:59] use planning Maps is a a great place to start if you've got tax assessor data you can um you can manipulate that um um
[1:44:07] to actually go beyond the need for um getting some of these development patterns but you know um you know
[1:44:14] putting these things together in a few days to a week um is is very reasonable um you there's a lot that you can infer
[1:44:21] from looking at um high resolution Optical data in Google Earth yeah I'll just add that you know
[1:44:29] it really depends on the extent of the study you know if you're looking at the entire country you're now worried about
[1:44:36] every single structural type within that country but if we're looking at a you know a small town the variations in the
[1:44:44] structal types and met building Heights they'll be pretty uh homogeneous at that point so know you're you're limited in
[1:44:52] what you need to look at so your level offer is much smaller great thank you Mike and uh question 10 are we G are we
[1:45:03] going to get the case study PDF now when I saw this come through I thought possibly at first they were referring to
[1:45:10] uh the PDF of the presentation here today um but it is also possible that they could be referring to uh a specific
[1:45:17] case study and a link to that um so the person who asked that question if you could drop in the question box uh a
[1:45:26] little bit of clarification and if so maybe we can find that URL for you question 11 uh is Google Earth
[1:45:34] engine source code available is it possible to analyze your own satellite data in Google Earth engine or can you
[1:45:41] only use data available in their cataloges you want to take this one one uh yeah I said the source code it's for
[1:46:00] well the data that the source that we use in Google it's it's uh it's there uh you you can upload own data into Google
[1:46:08] Earth engine you can use that to to process but you have to check uh you might want to check the licensing if you
[1:46:13] want to do any kind of commercial satellite data you want to put it in Google then you you definitely would
[1:46:20] like to check that and make sure that it's it's within uh your your permitted use and and see also what Google does once the
[1:46:28] data gets into there so yeah but that that's the short but Google Earth uh it's what we use it's very very uh basic
[1:46:38] in terms of what what what the engine provides in terms of being able to process that data but yeah if anybody
[1:46:47] requir some kind of sample we can look into see what parts that's not propietary we can we can
[1:46:54] distribute yeah thank you and um you we had contact information in the contact slide at the end of the presentation so
[1:47:02] um question 12 independent from population density where we already have different Global raster data sets World pop land scan for example is there any
[1:47:13] GIS Global later in indicating settlement vulnerability considering the urban urban structures and I'll try to capture what
[1:47:23] you say here uh Mike you wanna um you want to give this one a shot you may be muted
[1:47:45] or we we we could also uh move on to um question 13 I give I give it a shot I I
[1:47:51] don't think that there's any GIS data sets that um uh capture that data um we've already mentioned several uh
[1:47:59] others that might be useful here um there's a world housing encyclopedia R USGS has things by Urban and non-urban
[1:48:08] areas places there and then the jam database um I'm not sure how public that is but uh it's definitely a good place
[1:48:16] to give a look it's gem yeah sorry I was muted uh considering Urban structures I mean pager the pager
[1:48:27] database has a a tab specifically for urban structural types so just be careful that a lot of these are using
[1:48:37] proxy cases so you want to make sure that what you're looking at is is uh essentially usable at that
[1:48:48] point great thank you uh and this next one focuses on um the case study um so possibly Z or Mike be able to address
[1:48:58] this one what is the success rate of the Tunisia case study and the limitations maybe we need a little clarification on
[1:49:05] the success rate but maybe you can comment to that yeah that I think that's we're uh not sure what the success rate it's it's
[1:49:13] trying to uh asked maybe we can could get a clarifying question on that but for the Tunisia case study like
[1:49:20] mentioned where the goal was to have a view uh of the hazard forre not Hazard for the the rest of entire country for
[1:49:30] flood and earthquake so for for that purpose we knew entering what the limitation of the the analysis could be
[1:49:39] because depending uh based on the the data that was used so we couldnot do uh I mean pmls we cannot do a return
[1:49:48] period assessment of the risk we could only use the data that existed uh the the sources of Hazard and and that
[1:49:58] existed to do the risk analysis so in terms of the the exposure we have some base exposure data that we used and we
[1:50:08] used our our the methodology that we described to uh ge geospatially locate and say what the vulnerability is at
[1:50:17] different parts so in that regard we had a successful uh successful study which we were able to produce the results that
[1:50:26] the work band was able to to use so that that's the uh if that's the the metric
[1:50:34] that we use in terms of for the success free great ultimately ultimately what the country of Tunisia use the data for in terms of
[1:50:44] their decision making in terms of uh acquiring insurance and so forth which is success rate we were not uh involved
[1:50:53] in those conversations and it can be a frustrating thing uh often to not have access to your uh D client when you're
[1:51:01] doing these risk studies but that's just a um that's just the nature of uh of the business I
[1:51:09] think great thank you very much question 14 how can we consider the uncertainty in assessing exposure and vulnerability
[1:51:20] and that's kind of a broad question here but maybe just a a little bit comment on uncertainty in general when it comes to
[1:51:27] these these terms I think assessing um the uh uncertainty of vulnerability is outside the context of what we're discussing
[1:51:37] here there's a whole kind of science behind that and I believe we do have another session where we talk explicitly
[1:51:44] about uncertainty and exposure don't we guys see and part three we'll be talking more about that yes so there'll be a whole
[1:51:54] session on that in part three yeah but but in terms of assessing exposure there many different aspect of
[1:52:04] that which will be covering more great even more reason to tune in for part three a week from today um
[1:52:15] question five uh Morocco experienced an earthquake how can I calculate damages post earthquake any suggestions about the data sources and tools and uh I'm
[1:52:24] not sure when this question came in but I I think that you did Cover quite a bit
[1:52:28] throughout the presentation so it's possible that you you did go through some of these um throughout the rest of
[1:52:34] the presentation but if there's anything else that you wanted to comment on here I can try to capture
[1:52:44] that you want to talk a little bit about com a little bit I probably comment bit uh for earthquake so for
[1:52:52] calculating the damages you definitely need three different parts one it's the the exposure as we discussed in this in
[1:53:00] this particular Workshop we were focusing on saying the exposure that means where where uh where people buildings are located what kind of
[1:53:10] vulnerability they have then you have to have the second part which given the vulnerability what are the the damage
[1:53:18] functions what what kind of damage would it suffer when you're subject to the hazard and the last part of course more
[1:53:24] importantly where it's the hazard map so for all three of component you need to have uh information on so so today's uh
[1:53:34] Workshop Focus mod on the first part which is creating that building exposure data then you have to have some some
[1:53:40] engineering uh expertise to be able to determine what the damages are and and last it's the hazard oh the hazard
[1:53:49] information information that uh USGS does provide these type of information USGS has a um has a shake map program which
[1:54:00] produces ground shaking levels uh ground shaking M Hazard GIS data that can be downloaded publicly accessible but depending what region of
[1:54:11] the world it is the the sometime the accuracy you have to have uh it needs to be reviewed so so that's one source that
[1:54:22] that you can use uh maybe in terms of uh analytics tools uh there there may be some some
[1:54:32] Analytics tool already exist uh uh gem Global earthquake model they do have uh they do have tools that can be
[1:54:42] used for Earth specific for earthquake damage analysis so that that might be a source to look into so USGS for hazard
[1:54:50] and and gen can be used for uh looking into the the calculation I think it's called open
[1:54:59] Quake Quake yeah all right great thank you very much question 16 how do you deal with mixed forms of building structures when
[1:55:10] I was in North Africa there was a lot of mixed buildings any comments on dealing with with that uh I think I'll take a shot at that
[1:55:20] uh mixed buildings I'm not I'm not sure what the uh what they mean here but if they're
[1:55:28] talking in regards to mixed structural types if that's what it is uh we typically try to find a vulnerability
[1:55:36] curve that's specific to that for example if it's mixed you know reinforced concrete with a UR INF fill
[1:55:43] we have a agility curve specifically for that if it's talking if he's talking here she is talking in regards to mixed
[1:55:52] uh two separate structural systems we will take the uh primary one as the uh primary mod Force resist system as the
[1:56:02] one we model for mapping scheme hopefully that's what you means next yeah great oh go ahead sorry yeah I
[1:56:14] think that's also where we we create these uh development patterns where Within pattern you have different type
[1:56:21] of of buildings all within the mixture and we use the different statistics to determine what distribution of each of
[1:56:29] these types are within these patterns great thank you very much on question question 17 and we have uh room
[1:56:40] for a couple more um before the top of the hour does hyperspectral satellite data analysis make analysis better than
[1:56:50] using broader spectral images we've done a lot of research into hyperspectral Data we've some some with plume modeling it's something that I
[1:57:01] think would be a very interesting um for research it could be H so in terms of other uh companies
[1:57:18] doing this type of work uh USGS FEMA nibs uh uh doing this work from federal perspective I think it's it's widely
[1:57:29] recognized it's going to be much more important with climate change and then there's uh commercial companies uh image
[1:57:35] cat air um RMS and Moody um core logic lots of lots of options here so we can
[1:57:43] we can fill in this this question great thank you um I live in the US and I'm interested in doing this
[1:57:52] kind of work what companies and organizations are doing this type of work or maybe you're already answering
[1:57:57] that question yeah I was trying to answer that yeah okay U we'll yeah we we'll turn around and get to this and um
[1:58:04] what we'll do is once we clean this up and make sure everything is accurate we'll post this on the training web page
[1:58:12] um for you to download and you can have URLs uh there as well possibly and let's see here um just briefly did you
[1:58:24] go on the ground in Tunisia at any point during the study or was it completely remotely assessed uh it was completely remote
[1:58:35] um on the ground in a sense that we use the available Google Street View and maer ground imagery but we relied
[1:58:46] heavily on that and the field survey study from the University of Tunis essentially Mike you want to speak more
[1:58:54] generally about the difference between a study like a Tunisia where we're depending on remote data and something
[1:59:00] like you know Costa Rica where we went in the field say that again Charlie you want to uh kind of compare
[1:59:09] and contrast the the benefits of going out in the field like maybe looking at CTO Rica comp to
[1:59:17] t uh yeah you know Tunisia we you know we were kind of hindered by the vulnerability curves that were available
[1:59:27] so you know we had all these different structural types and we had to match um any field survey to those structural
[1:59:36] types and we needed to use those vulnerability curves as opposed to going out on our own you know we we can record
[1:59:43] what we want what we want to use for our vulnerability curves you know if we're looking at things like hurricane we can
[1:59:49] start looking at any of these you know roof types hurricane shops Etc um but it we're more free to gather the
[1:59:57] information that we specifically want as opposed to relying on information that's kind of handed to us so it kind of goes
[2:00:05] into where the into the vulner building model quite a bit that way great thank you and I see we're at
[2:00:14] the top of the hour so um thank you very much um Charlie Charlie Georgiana Mike and z uh we really
[2:00:25] appreciate your time in this part one of the webinar series we hope that you all join us for part two this
[2:00:33] Thursday and then for part three uh next week so um thank you very much for joining us we're going to close this for
[2:00:42] today we'll post this recording um hopefully within 24 hours if you want to go back and review anything and we'll
[2:00:48] include this Q&A in the end of that video as well and we'll post it on the training web page so I hope everybody
[2:00:54] else has a uh nice rest of your day and thank you very much
