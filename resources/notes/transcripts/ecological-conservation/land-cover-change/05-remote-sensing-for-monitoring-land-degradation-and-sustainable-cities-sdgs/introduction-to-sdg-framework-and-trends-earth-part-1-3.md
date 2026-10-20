# Introduction to SDG Framework and Trends.Earth, Part 1/3

`https://www.youtube.com/watch?v=b_2tfsVE2mY` · id 351 · 1:44:15 · module 89 — Remote Sensing for Monitoring Land Degradation and Sustainable Cities SDGs

[00:04] thank you all for joining us today this is session 1 of remote sensing for monitoring land degradation and sustainable cities SDGs my name is Amber
[00:15] McCullum and I will be a presenter along with many other guest speakers that and some of them I have listed here for this training we're partnering with
[00:23] Conservation International to really highlight a tool that they have and so we've brought in a lot of various voices to tell you about the SDGs and give you
[00:34] background and also to provide information about the tool itself so today we'll be hearing from sasha alexander from the United Nations
[00:45] Convention to combat desertification Alex Olaf Monika noon and Mariano Gonzalez rug lick from Conservation International for this training we are
[00:59] going to hear from them along with some others throughout the three sessions we will have three one and a half hour sessions on July 9th July 16th and July
[01:14] 23rd note that you only need to attend one session per day the same material will be presented twice each day and session B the later session will be
[01:28] presented live in Spanish you can find all of the course materials listed here on the website and this includes all of the recordings once they become
[01:38] available the data links and the homework exercises in both english and spanish we will have time for questions at the end of each session however you
[01:49] can email me or my colleague Juan Torres Perez at the email address listed here if we don't get to any of your questions we will have one follow on homework that
[02:02] will be available on the course website to receive credit for the homework you must submit all your answers via Google Forms
[02:09] by the deadline and so please note that the deadline show Tuesday August 6 and this will be two weeks after our last session and we will
[02:18] have the homework link available for you during the last session and I also wanted to make note that the homework will really span the all of the
[02:29] trainings so there will be questions from the lecture and the exercise portions from both sessions 1 2 & 3 so when you do the homework you might just
[02:40] want to read through it first and look at the questions and then maybe even write down your answers on a separate sheet of paper and a separate document
[02:48] as you're working through some of the exercises or listening to the lectures and then submit them all at once so it just wanted to give you a heads up about
[02:58] that as you complete the homework if you attend all three live webinars and complete the homework by the deadline you will receive a certificate of
[03:14] complete a while to process because we have such a large global group with us and so please be patient on those certificates here is a course
[03:28] prerequisites you should take the e-learning course introduction to remote sensing the fundamentals listed here or have some equivalent knowledge of remote
[03:39] sensing you also need to download and install to gist and this is very important you need to have a slightly older version of QGIS we've recommended
[03:53] two point one eight point one five if you have QGIS three which is the one that was recently released the trends daughter plug-in that we're going to
[04:03] highlight will not work so please have the correct version of QGIS you also need to download install and register the trend setter of software and as I
[04:15] mentioned this is a QGIS plug-in so please do add that plug-in to your library prior to completing the exercises
[04:26] and you also want to register with trends daughters in order to access certain aspects of the tool like the ability to download some data in through
[04:39] each session we at the end will be guiding you through on some of these step-by-step exercises so you can either follow along with us or you can do do
[04:51] those at a later date as well you can access all the course materials at the website listed here so this will be the PDF of the presentation materials in
[05:09] both English and Spanish the exercises so we'll have PDFs of those both in English and Spanish you will also once the recordings become
[05:21] available a few days after each session you'll be able to view them there and then you also be able to find the the link for the homework submission and
[05:33] Google Forms on the website as well here's the general course outline so this week we are really going to provide an overview of our set and some of the
[05:47] trainings that we've done focused on the sustainable development goals or the SDGs then we'll give you a little bit of a background of SDG 15 which is life on
[05:58] land and we'll talk a little bit about targets and indicators then we'll hear from our first guest speaker sasha alexander about indicator fifteen point
[06:10] three point one and some of the reporting mechanisms and then this will be followed by our colleagues at conservation international to talk a
[06:19] little bit about trends dot earth and to conduct the exercise and then following in the next two sessions we're going to focus still on 15 s e-g 15 next week and
[06:32] then we'll focus on SDG 11 in the following week for today we're going to give you a brief overview of our set and our work
[06:50] and how it's connected to the SDGs and then we'll focus really on SDG 15 life on land and talk a little bit about the targets and indicators then we'll
[07:03] hear from our first guest speaker sasha alexander about SDG indicator fifteen point three point one and the reporting requirements and the data needs and then
[07:17] we will follow that on with our presenters from conservation international really focusing on their trends earth tool and how it relates to
[07:29] SDG 15 and then we'll be going through an exercise as well and throughout this session today we'd really like to hear from you all about how your work aligns
[07:44] with or contributes to the SDGs and the data that you may be using the challenges that you face those kinds of things so just feel free at any point
[07:58] along the line within this training series to just say where you're from and what you're doing in regards to meeting the goals and objectives of the SDGs and
[08:11] and your interest in this type of work the are set is part of NASA's Applied Sciences Division where we promote efforts to discover and demonstrate innovative and
[08:29] practical applications of earth observations so we have three primary lines of business applications capacity building and mission planning and within
[08:41] Applied Sciences we focus on these application areas of health and air quality disasters ecological forecasting and Water Resources and so the our set
[08:52] program really falls under this capacity building and empowering folks to use the tools so this idea of empowering the global community through remote sensing
[09:05] training is really what we focus on here and we seek to increase the use of NASA data amongst policy makers environmental managers and other professionals and we
[09:18] also have trainings within the focus areas of Applied Sciences our site has been conducting training since 2009 and this figure displays the types of
[09:33] trainings with a different colored dots and the number of participants shown with the different sizes of the dots you can see how the program really has grown
[09:43] in the past few years and you also notice there along the top we have trainings focused on specifically on the sustainable development goals we
[09:55] actually have an entire page on the are set website focused on the SDGs and how our trainings align with them so you can find on this website
[10:07] each scg listed and the associated our set training we do have some that are more clearly focused on SDGs but then we have others that relate to the concepts
[10:19] of certain SDGs so you can find all that information here to provide with a little bit of background I realize a lot of you already knew all of
[10:34] this but we wanted to start off with a context of what are the SDGs and and why
[10:40] are they important so they were developed to set the world on a path towards sustainable development through the adoption of the 2030 agenda and the
[10:51] goals really provide a framework for the people the planet and prosperity that's kind of the tagline and it's to be implemented across countries with
[11:01] stakeholders acting in a collaborative partnership and there are seventeen SDGs and 169 targets targets are defined as aspirational and global with each
[11:15] government setting its own national targets guided by the global level of ambition but also allowing some flexibility to take into account
[11:25] national circumstances with within each of the targets there are a set of indicators and monitoring frameworks that have been developed as well so for
[11:38] this webinar series the first half we are going to focus on goal 15 which is life on land and then the final session will focus on goal 11 which is
[11:50] sustainable cities and and communities there are a lot of organizations involved with the SDGs and I've shown
[12:01] some of the primary ones listed here organizations like the UN statistics division the UN CCD sustainable development Solutions Network the Food
[12:13] and Agriculture Organization the International Institute for sustainable development the geo or the group on earth observations and so there are many
[12:26] there are also many nonprofit organizations such as conservative Conservation International that have been involved with creating tools to
[12:36] address these as well so the goal here really is to just let everyone know that this is a wide-ranging global collaboration amongst many
[12:47] different stakeholders the ISD has also created this knowledge hub and that's shown here this is a really great online resource center for news and commentary
[13:01] about the implementation of the agenda you can also find information specific to each SDG and some regional developments the United Nations -
[13:15] statistical Commission has a global FCG indicator database which you can access as well so it provides things like the metadata and the methodologies for
[13:26] evaluating indicators and you can also take a look at all of the data that's submitted across the world geo is a partnership of government institutions
[13:39] academic and research institutions data providers businesses engineers scientists and experts that really focus on integrating earth observations into
[13:53] things like the SDGs and with geospatial information as you'll see we can provide the information needed to achieve some of these goals
[14:08] the FAO works to achieve food security and has really supported decision makers in order to shape the 2030 agenda so there are 14 cinematic areas where FAO
[14:23] contributes technical knowledge to the goals and so you can find out more information on how they're related to the goals at the website shown here so
[14:35] as I mentioned we're going to focus on two of the SDGs first off 15 or life on
[14:41] land is focused on preserving diverse forms of life on land and requires targeted efforts to protect restore and promote the conservation and sustainable
[14:54] use of terrestrial and other ecosystems goal 15 focuses specifically on things like managing forests sustainably halting and reversing land and natural
[15:06] habitat degradation successfully combating desertification and stopping biodiversity loss all of these efforts combined aim to ensure that the benefits
[15:18] of land-based ecosystems including sustainable livelihoods will be really enjoyed for many years to come skg 11 is focused on sustainable cities today more than half the world's
[15:34] population live in cities and by 2030 its projected that 6 and 10 people will be urban dwellers despite numerous planning challenges cities offer more
[15:46] efficient economies of scale on many levels so this includes things like provision of goods services transportation so these regions are
[15:56] really important for driving sustainable development and with satellite imagery we can map cities especially their growth and expansion we can also monitor
[16:08] air quality which is part of SDG 11 but for this training we're only going to be focusing on mapping urban areas and this is a great image from Landsat of of New
[16:22] York City to assess the success of scg's the the goals and the targets indicators are used indicators are really the backbone of monitoring
[16:37] progress towards the SDGs at many levels so local national regional and global a sound indicator framework will turn the SDGs and their targets into a management
[16:51] tool to help countries develop implementation strategies and to allocate resources accordingly and to measure progress each level of
[17:04] monitoring requires different types of indicators which are chosen each country based on discussions with the National Statistics office so we're
[17:18] going to focus here on target fifteen point three and indicator fifteen point three point one target fifteen point three states that by 2030 combat
[17:30] desertification restore degraded land and soil including land affected by desertification droughts and floods and strive to achieve a land degradation
[17:40] neutral world land degradation is the reduction or loss of the biological or economic productivity and complexity of rain-fed cropland irrigated cropland or
[17:54] Range pasture or forests woodlands and this results from land uses or from a process or a combination of processes arising from human activities land
[18:08] degradation neutrality or LDN is a state by where the amount and quality of land resources necessary to support ecosystem functions and services and to enhance
[18:21] food security remain stable or increase achieving LVN will require avoiding or reducing new degradation and restoring and rehabilitating lands that were
[18:35] degraded in the past the objectives of the LDN are to maintain or improve the sustainable delivery of ecosystem services maintain or improve
[18:52] productivity in order to enhance food security increased resilience of the land and populations dependent on the land seek synergies with other social
[19:03] economic and environmental objectives and to reinforce responsible and inclusive governance of the land indicator fifteen point three point one refers to the proportion of land that is
[19:20] degraded over total land area there are several sub indicators such as land cover and land cover change land productivity and above and below-ground
[19:30] carbon stocks and these are recognized by the UN as suitable measurements for this target areas with declining productivity and carbon stocks may be
[19:43] considered degraded where areas with increasing productivity and carbon stocks may be considered improving as we will outline in this training data to
[19:54] measure these sub indicators can come from several sources including satellite observations and the satellite observations can really be used to
[20:03] detect to establish baselines to detect change and to derive which areas are being degraded so the remote sensing is a really important piece of this in
[20:20] order to calculate these sub indicators there are multiple data needs and these include the need to have global datasets for standardized reporting across
[20:29] country and regions and they also include good practice guidelines for measuring and reporting findings as well as specific country reporting one of the
[20:43] global datasets that's being used is land cover this can be obtained from the European Space Agency or ISA and is shown here in this image from 2015 ISA
[20:58] has a climate change initiative focused on providing an adequate comprehensive and timely response to the set of requirements for long term satellite
[21:08] base products for climate and as part of this project they deliver these global land cover data sets another data set that is used for these sub indicators
[21:24] are global carbon stocks and you can see an example of what that looks like from soil organic carbon in 2001
[21:34] and also land productivity and we'll discuss these data sets in more detail as we continue with this training but I just wanted to mention some of these to
[21:45] get everyone to start thinking about them off the bat to assist with the objectives of target 15.3 the UN CCD is directed to address arid semi-arid and
[22:00] dry land ecosystems the UN CCD is the sole legal binding international agreement linking Environment and development to sustainable land
[22:10] management and so Sasha is going to speak much more in detail about the UN CCD and their reporting requirements so at this time I would really like to
[22:24] acknowledge and introduce our guest speakers that we have for this week and I'm going to give them full rein over the remaining portions of the lecture
[22:35] and exercise so as I mentioned first we'll be hearing from sasha alexander from the UN CCD all right thank you very much amber the United Nations Convention
[22:50] to combat desertification or un CCD is the custodian agency for SDG indicator 15 point three point one that is the proportion of land that is degraded over
[23:02] total land area this means that we collect the data at the national level and report to the UN high-level political forum on regional and global
[23:12] progress setting the stage the UN CCD was established in 1992 with the other two Rideau conventions on biodiversity and climate change the conventions
[23:26] primary objective is to assist its 196 country parties in implementing and scaling up sustainable Land Management to achieve their development priorities
[23:37] these include food and water security employment and livelihoods social stability and economic growth building capacity until recently there
[23:49] was no agreement on a standardized methodology for measuring land degradation and the capacity to do monitoring an assessment at large scales
[23:58] has been somewhat limited but now with the emergence of Earth Observation data sets and their increasing accessibility the UN CCD has adopted a monitoring and
[24:10] evaluation approach that serves both the Convention and the SDG reporting process with the potential for other applications looking ahead we have
[24:22] learned a lot over the last five years working with these big datasets and what tools our stakeholders need to make this information relevant and useful still
[24:33] more needs to be done since the conventions entry into force there have been various indicator working groups and many expert consultations but with
[24:45] the adoption of the 10-year strategic plan in 2008 countries agree to an overall monitoring framework then in 2013 there was a decision to adopt six
[24:58] mandatory indicators provided that there were adequate global datasets available these include the three land-based biophysical indicators land cover land
[25:11] productivity and carbon stocks now being used for un ccd reporting and SDG indicator fifteen point three point one with the adoption of the SDGs in 2015
[25:24] and the target on restoring degraded land and achieving land degradation neutrality the UN CCD became very active in translating these goals and targets
[25:36] at the national level developing the methodology and assisting countries to build their capacity for monitoring these three indicators in terms of
[25:48] foundation an important first step was to lay down the conceptual framework for land degradation neutrality or LDN here we work with our newly created science
[26:00] see interface a diverse group of experts and policy analysts to make the LD n concept practical and concrete as the custodian agency we were tasked with
[26:14] getting the approval of the interagency and expert group that oversees the SDG indicator framework this is the group established by the UN statistical
[26:25] Commission to review the methodologies and datasets and to make sure that there is adherence to international standards and coherence with statistical
[26:36] principles as we were developing the metadata document requested by this group the UN CCD the number of its partners produced the first good
[26:47] practice guidance document on the land degradation indicator this then became the building block for our outreach capacity building and new reporting
[26:58] protocols this graphic shows the mechanics for estimating the indicator based on the three sub indicators while we provided all our country parties with
[27:12] default data from well recognized global sources we were also cognizant that national data should be used to the greatest extent possible now this
[27:24] creates obvious tensions between the level of comparability or standardization that we have with the global datasets and the desire for
[27:36] national ownership over the data sometimes with differing approaches the provision the provision of default data was generally well-received and often
[27:47] provided countries with a reference by which to validate their own national data in many cases countries did not have the sufficient national data or the
[27:59] time series needed to analyze the trends during this webinar you will learn in detail about trends earth and how it is a powerful tool for helping
[28:12] non-technical stakeholders access and visualize big datasets we also hope that it will become an important decision support tool for
[28:23] national policymakers and more local decision-makers the trans Earth tool was a critical component in our recent recent capacity-building efforts we were
[28:35] able to provide hands-on training to over 140 countries where the end users were composed of our national focal points science and technical
[28:45] correspondents GIS experts and representatives from national statistical organizations finally as I mentioned before there are still quite a
[28:57] bit of work to do in 2017 our parties invited the group on earth observations geo to assist with the use of these big datasets and now we have a geo LDN
[29:11] initiative that is focused on three major work streams one on capacity-building which includes access to continuous high resolution data
[29:22] another on developing minimum data quality standards to help in the selection of the most appropriate datasets and the third working group on
[29:33] how best to map land degradation data with other indicators to help target interventions where they are needed the most as a convention we are now
[29:44] preparing for our next reporting cycle in 2021 2022 where we will continue working with conservation international the space agencies and other partners to
[29:56] improve access to big data and make it actionable and relevant on the ground I thank you for your attention and conclude here with a couple of links to
[30:09] more information now I will pass off to Alex from Conservation International where we'll hear more about trans Earth thank you
[30:20] so thank you for the introduction Sasha my name is Alex wall if I'm senior director of resilience science that Conservation International and now I'll
[30:29] talk to in a bit more detail about the turns daughter's tool and how it supports monitoring of SDG fifteen point three point one land degradation
[30:37] neutrality so as I mentioned I'm from Conservation International and we've been leading on the development of trans daughters that the trans daughters tool
[30:45] has been a product of a much broader partnership involving of course NASA and the UN CCD as well as a significant funding support from the global
[30:55] environment facility we also have local partners which you see listed below who've been key in several of the pilot countries in which we worked so what is
[31:06] the trans daughter's tool so the trends dot earth tool is a free and open source platform trans not earth is was originally developed as you heard before
[31:14] to support and monitoring of SDG fifteen point three point one land degradation neutrality so the tool allows countries to identify degraded lands and set
[31:24] baselines and support with that SDG of course once those baselines are set monitoring progress towards lundegren neutrality in 2030 is if key interest
[31:35] and so the tool also supports countries and monitoring and tracking progress towards achievement of LDN so the goal of the tool the trans daughter's tool is
[31:45] to support countries and accessing the best available global datasets for monitoring SDG fifteen point three point one but at the same time to integrate
[31:53] with those global datasets the best available local information so the overall idea of the tool is to allow users to draw on global available data
[32:03] derived from satellite imagery and to really lower the bar and the barrier to entry datasets that typically used to be much more complex to access requiring
[32:13] access through nasa through the european space agency the joint research Commission and others what we've done with the trends daughters tools we've
[32:20] worked with those partners to integrate that information in a single place to make it simpler to access and easier to analyze in a standardized way so it
[32:29] turns out earth of course supports all three of the indicators you've heard about from Sascha for monitoring SDG indicator fifteen
[32:35] point three point one land productivity land cover and carbon stocks so now I'll go into a bit more detail about those three indicators and how they're
[32:46] actually assessed using the trans dot earth tool so the overall goal of the trends dog earth tool and respect to SDG fifteen point three point one is to
[33:00] assess the indicator for that SDG which is the proportion of land that is degraded over total land area so to do this you need to analyze the three
[33:09] indicators that make up that SDG indicator and productivity land cover and above and below-ground carbon so what the trends daughterís tool does is
[33:21] it assembles in a single place information around each of these three indicators so for land productivity what we do is we use satellite imagery to
[33:30] assess net primary productivity so now let's go into a bit more detail about actually we actually do that for land productivity so what is land
[33:41] productivity so in terms of the definition used by the UN Statistical Commission land productivity is the biological productive capacity of the
[33:50] land the source of all the food fiber and fuel there's a Settings humans now of course this isn't something that we can directly measure itself from space
[33:58] so what we can use instead are proxies so indicators that we can measure using remote sensing in a standardized way so to assess land productivity what we use
[34:10] is net primary productivity or NPP so NPP is something on which there's been a lot of research on how to derive indicators from satellite imagery in
[34:20] order to assess net primary productivity so what is NPP NBP is then that amount of carbon assimilated after photosynthesis and autotrophic
[34:30] respiration over a given period of time and it's typically represented in units like kilograms per hectare per year so how do we actually assess an indicator
[34:38] of net primary productivity from the air many of you will be familiar with NDVI a normalized difference vegetation index which you see here in the
[34:47] your screen so what nd di is is it's a measure that combines two different bands that we can assess using satellite imagery the near-infrared and the red
[34:58] band so what you see on the right hand side of the screen is healthy versus stressed vegetation so you see the green leaves on the left hand side of that
[35:06] figure the brown leaves on the right what we can do is we can take advantage of the fact that the reflectance in the near-infrared and the red bands differs
[35:15] for healthy versus stressed vegetation healthy vegetation reflects more in the near infrared and less in the red while stressed vegetation reflects less than
[35:24] the near-infrared and more in the red bands so what we can do is we can derive a ratio of the near-infrared minus the red band over the dere infrared plus the
[35:33] red band and this will vary in accordance with the health of the vegetation so what we can do is we can use satellites to measure repeated
[35:43] observations at the same place over time and we can look at changes in NDVI to understand how that primary productivity is likely to be changing so
[35:53] that's what you see on the left-hand side of this figure what you see on the y-axis that figure is in DVI and then as we move from left to right we're moving
[36:01] through time so what you can see is that on this figure as we go through time as
[36:08] we reach the start of the season we start to have an increase in NDVI which then reaches a maximum point and thus vegetation senescence and dies at the
[36:17] end of the season the NDVI starts to decrease what we can do is we can take the integral so the area the curve which you see in green here which is an
[36:27] indicator of the total productivity over that season and if we track these changes through time over multiple years we can understand how productivity is
[36:37] changing on an annual basis so once we have repeated measures of NDVI across multiple years we can start to analyze that signal to understand different
[36:48] things about the quality of changes that we're observing from the air so what we can do is break down that signal into different components so what you see
[36:58] here listed now are actually three some indicators that make up the productivity measure that we use so trend starters trajectory state and
[37:09] performance what these do is break down that NDVI signal over time to understand do we see recent changes compared to what we've seen in the past are we
[37:17] seeing long term trends out of this pixel very compared to other pixels that are similar so for example if we look at trajectory that's the easiest to stand
[37:26] understand these three different sub indicators trajectory is simply a measure of the rate of change in primary productivity over time so you can just
[37:35] think of it as the slope over time of that integrated NDVI that we talked about before state lets us look at how the current product to be level in an
[37:45] area varies to past levels and that same area so what state lets us do is assess are there recent changes that have occurred at a pixel so these are things
[37:57] that may not show up as a significant trend over time but it could be for example deforestation in the last year that has led to a change in productivity
[38:07] we could be able to detect that with state performance on the other hand lets us compare values of productivity at a pixel with values of productivity at
[38:18] other pixels that are similar as measured by the land cover type and bioclimatic region and that pixel is so in other words it lets us understand is
[38:27] this particular area more productive or less productive than other areas that are similar what you see on this slide is a bit more details on each of these
[38:40] three sub indicators you don't have enough time to go through these in detail here today but I do want to recommend you check out our website
[38:48] that's right down here on the bottom right-hand of the slide trends dot earth when you go to that site you can get much more details on each of these three
[38:57] sub indicators including the data sets and methods that we use to derive them so once we have arrived these three indicators we can
[39:08] produce a map like you see here now my colleague Monica noon on a moment be showing you some examples in the QGIS plug-in this is a screenshot from that
[39:19] tool and what you can see here is the productivity data from trends dot Earth map of course for Kenya areas green are increasing over time Ayres and red are
[39:29] declining while areas in orange and yellow let us get at some things about the quality of those changes that we can detect from performance and state which
[39:38] I talked about before so those areas in orange are showing areas that show early signs of decline which we can assess using state there is in yellow
[39:47] show areas of low performance stable but stressed which we can assess using performance that I just mentioned before
[39:57] so that's one of the three indicators and land productivity how do we calculate the other two so the second is land cover which is assessed using land
[40:08] cover change how do we actually calculate land cover change using transit earth and what do we mean by it so what is land cover change land cover
[40:18] change describes changes and observed biophysical character of the Earth's surface to help identify areas that may be subject to change so what we're
[40:26] interested in here are transitions in land cover now what's important to recognize is that transitions in plant cover aren't necessarily a good or a bad
[40:37] thing in terms of degradation or improvement whether a particular type of transition is considered an improvement a neutral change or degradation really
[40:46] depends on the area that you're looking at and the perspective of the country question so I'll get into this in a bit more detail in a moment but it's just
[40:55] important to recognize that there is some subject assasin that needs to take place to understand what their types of land cover transitions are degradation
[41:05] or movement so what you see on slide is an example of how we Assad's land ever change in earth so this is a bit simpler than the productivity
[41:18] example I showed you just a moment prior what we need to assess land cover change are really two different data sets so an initial time point and the initial land
[41:28] cover map which you see here on the left for 2001 and then a final land cover map
[41:33] which you see on the left on top for 2015 taking these two land cover maps we can calculate a transition map so that's just showing what are the transitions
[41:44] between those two time points do we have forster iceland or perhaps grassland urban and mapping those out on a map and then when combined with a matrix of
[41:52] transition criteria which I'll show you in a second we can get at a map of potential land degradation so as I mentioned before those transition
[41:58] criteria are really critical to understanding our particular changes in land cover considered degradation or improvement so what you see here is an
[42:08] example of what that land cover transition matrix might look like so if you remember on that previous slide we're going from 2001 to 2015 on the
[42:17] left hand slide land cover in the initial year that might be 2001 on top land cover and target year that might be 2015 and what this color coding is
[42:26] showing you is for each of those land cover transitions do we consider that to be degradation and red stable and yellow or improvement in green so in this
[42:35] example grassland to tree covered which we can see in that second cell down on the left is considered to be improvement while tree covered to grassland is
[42:45] considered to be degradation now again this is something that needs to be determined depending on the particular area that you were assessing if for
[42:54] example woody encroachment is a concern transition from grassland to tree cluttered might be considered a degradation rather than an improvement
[43:03] and you'll see any example of this again in the tool and also how you might modify this matrix to be appropriate for a given area so now that we've gone
[43:14] through land productivity in that cover one indicator still remains that's above and below-ground carbon which at the moment due to expert assessment is
[43:23] assessed using soil organic carbon so just a note here the indicator for the SDG is total carbon and that given the data sets that
[43:31] are available at global scale today at the moment this indicator is assessed using sua organic carbon so how do we actually assess changes in soil organic
[43:41] carbon and trans dot earth and what do we mean by that so carbon stocks reflect the integration of multiple processes that affect plant growth and the gains
[43:50] and losses from terrestrial organic matter pools so again the metric that we use for indicator 1531 is soil organic carbon how do we assess that so what we
[44:04] need here are our two things some one is an initial measure of soil organic carbon and then a second is a time series of land cover change now at the
[44:15] moment there isn't a global data set that can be used to assess annual changes in soil organic carbon there is however a globally available data set to
[44:25] assess initial soil organic carbon that's soils grids a data set that we draw from from is Rick and so what you see here on the bottom is an initial
[44:37] soil organic carbon map and turns out earth again that's derived from soil grids and what we do is we take that initial carbon map and we combine it
[44:45] with a time series of annual changes in land cover so in front on earth the default data set here is from the European Space Agency the CCI land cover
[44:56] change product but as you'll hear about in the second session you could use custom local data sets for any of these land cover or soil organic carbon input
[45:06] layers what runs daughter Earth does is it assesses that stack that you see on the left from 2000 to 2015 of land cover layers and you can derive an annual
[45:17] layer of for each pixel of what the land cover was for each time point for the last 15 years now of course that's just change in land cover how do we actually
[45:29] get to change in carbon the way we do that is we use conversion factors from the IPCC that assess changes in carbon that result from
[45:38] changes and land-use or cover and I'll go into this in a bit more detail in a second but using those conversion factors what we can do is we can start
[45:47] from that initial soil organic carbon layer on the left and once we see that transition in the fifth year we can apply the appropriate conversion factor
[45:56] that lets us calculate per year what the change in soil organic carbon is for that pixel and then for the SDG degradation is defined as a reduction in
[46:05] soil carbon of greater than 10% so I mentioned a bit about these factors just to get into a bit more detail since this is an important part of that process so
[46:19] following the standard IPCC guidelines what we can do if we're interested in changes organic carbon is we can calculate sauk final so that's final so
[46:30] again a carbon in a particular year using four different things so the first is what are the initial levels of silicon a carbon at a place that's sock
[46:40] ref in this equation that you see here and then we can multiply that times three different things so the first is a factor that reflects changes in carbon
[46:50] that you might expect depending on the type and use the second is a factor that accounts for differences in management so this accounts for the fact that
[46:59] within a particular land use type you might have changes in soil organic carbon just due to the management in that area and then the third is an input
[47:09] factor that reflects different levels of carbon input to the soil now in the trends non-earth tool at the moment we account for just two of those that's why
[47:19] you see the F F G and F IR now grayed out we account for that reference carbon
[47:25] layer million count for F L U which is that change in carbon due to change in land use that primary reason that this is done and the tool is there's no
[47:35] globally available data that would allow us to assess management factors or input factors across the globe of course in some places this may be available sub
[47:44] nationally so this is something that we're looking at potentially integrating into the tool in the future following IPCC guidelines those conversion factors that I mentioned
[47:57] previously having to do with land-use vary by climate so what you see here as a matrix showing you how depending on the climate regime those factors are
[48:09] calculated this is not something that you can modify within the tool but this is just to demonstrate the process we'll use within the tool is consistent with
[48:17] the IPCC guidelines so now we've gone through all three of those sub indicators productivity land cover and soil organic carbon of course the goal
[48:30] for the SDG isn't to calculate those three sub indicators is to calculate what's the proportion in land that's degraded over total land area so we need
[48:38] to combine those three indicators into a single number so what you see here is a table consistent with the one out all out principle that has been developed
[48:49] for this SDG now what that means is if we see a decline in any of those three
[48:54] sub indicators we consider a unit of land to be degraded so as you go across this table this is showing you how would we map in that first row for example if
[49:03] we have improving productivity improving cover and improving stock that would map to an improvement in terms of the final SDG however if any of those three
[49:13] indicators decline you'll see that mapping to decline in the final column you don't need to worry about this process because this will be applied for
[49:22] you automatically in the tool that will demonstrate to you in a moment but what's this process is it done those three indicator layers can be
[49:30] combined into the final SDG output which you see here and so this is showing you how here for Ethiopia the productivity layer looks on the right we've been on
[49:40] the left-hand side you see that this process and of course it's actually done globally drawing on the Google Earth engine platform that we use to power the
[49:50] tool so of key interest to many in the audience will be how to actually use this information for reporting to either the Convention to combat esterification
[50:02] or reporting on the SDG and so the tool that we'll show you in a moment will let
[50:07] you out put a summary table it actually takes these map layers and depending on a national boundary or perhaps a landscape whatever air you specify you
[50:15] can summarize each of the three sub indicators as well as the final SDG to get there Atlanta proved stable integrated this will let you calculate
[50:25] that final SDG proportion of land degraded over total land area I also just want to point out there's a fourth tab that you've seen that spreadsheet
[50:34] having to do with you CCD reporting so those that are interested in using trends dot earth support of their analysis of datasets for reporting to
[50:42] the UN CCD can use this tool and directly produce some of the tables that are needed for using CCD reporting so that's a summary of the trends on earth
[50:54] tool so next my colleague Monica noon who is a senior manager for data science here at Conservation International will show you a demonstration of the QGIS
[51:04] plug-in that actually lets you run these analyses also I want to point you again to our website Trends dot earth where you can get further information on the
[51:13] tool more technical information that there wasn't time for me to relate here today and then also of course see our contact information if you have
[51:22] questions about anything I've mentioned also I want to point you to that third link their Maps Trends dot Earth will let you view the datasets that I've just
[51:31] referred to at a global scale so you can understand how these layers combine to produce that final SDG indicator thank you very much for your attention and
[51:41] I'll pass over to my colleague Monica thank you Alex and this is Monica noon I'll be going over the demo I just would like to bring to your attention that of
[51:54] course you can follow along today but if I go at too fast of a pace you can
[51:59] always go to trends dot earth and if you scroll down that the demonstration is also here and then under the step-by-step guides so you can follow
[52:09] along that recording will be available and within a day for you to follow along and this is also a part of the homework assignment
[52:15] so you'll have a couple of instructions that you can follow along to move forward with that so when you first open QGIS you'll have a blank project I'd
[52:26] like to bring to your attention that this is QGIS version to 0.18 so the plug-in is currently available in QGIS version 2 so once you've opened QGIS
[52:37] you'll see this blank project page just a few kind of housekeeping details I'd like to bring to everyone's attention that you can go to settings options in
[52:49] case you wanted to change some settings so you'll notice my icons are very large and the font is also big which is helpful for demonstrating you can change
[52:57] that under this general tab using the different font sizes and icon sizes you can also change the language here under locale if it's not in your preferred
[53:08] language type by default QGIS will set to whatever language your computer is set to so if you have your computer set to another language French Spanish
[53:19] Portuguese QGIS will be appearing in that language automatically but in case you have any issues you can go there now I also like to set up what I have
[53:31] available in my labels panel so for these different toolbox we have the layers panel open you'll see that here on the left I also have manage layers
[53:41] toolbar map navigation toolbar project toolbar and vector toolbar these are all useful tools for exploring the data once you have the plug-in installed so next
[53:51] you'll want to go to plugins manage install plugins in the menu here I've searched for trends daughter but when you go for the first time
[54:02] you'll have many options you can type trends dot earth in the search bar and select trends dot earth to install the plugin it'll take just a second to
[54:12] install once that's done the window will disappear close and then you'll see here the plug-in is now installed this is the
[54:33] trend side earth plugin again if you click right click you can now see that that's appearing in case for some reason you know you've installed it it's
[54:42] installed in your plugins menu and you're not seeing it you can again right click and turn this on and off so the first step that you will need to go
[54:54] through using turns are for the first time is setting up your account it's very simple you select step 1 register enter in your email name organization
[55:03] and country where you're from this is just to create your account because every time you run an analysis you'll actually get an email letting you know
[55:13] that your analysis has completed once you register you'll get an email from API at transit earth you can search that in case you don't find it in your inbox
[55:24] and you can type in your email and the password once you've done that you're logged in and you won't have to go back and do that again it will remember your
[55:33] account information so now that you see the trends dot earth plugin here are the different icons to access the trend setter tool I'll just scroll over
[55:45] quickly so you can see which each icon means so we have the Settings icon the calculate indicators plot data view Google Earth engine tasks visualization
[56:00] tools load data download raw data and the about icon so each of these icons access different parts of the tools and will be able to
[56:14] go through all of these throughout session one and session two of this webinar series so starting you'll select settings and
[56:23] select step one to register you'll need to register your account because every time you run a task and analysis within the plug-in you will receive an email
[56:35] when that's completed because it's being sent to Google Earth engine and the cloud and it may take some time to run depending on the size for your analysis
[56:42] so you just need to provide your an email account that you have access to your name organization and country of origin once you've received that email
[56:54] from API at chenza earth providing your password you can enter your email and password here and once you successfully log in you'll get this little message
[57:05] you can hit OK and you'll be logged in you do not need to do this every time
[57:09] you use the tool only the first time you log in next we'll go to the calculate indicators icon so this will bring up the the four main
[57:22] tools that we have within trance on earth plugin but for the sessions one and two of this webinar series we'll be talking specifically about the land
[57:29] degradation indicator SDG indicator fifteen point three point one so first we're going to select this and you'll see there's several options here so on
[57:40] such an one today we'll be going over step one option one using the default data so you select that first box and you'll see another window pop up with
[57:54] information that you can provide so we're gonna select the trends earth land productivity which Alex just highlighted from the years 2001 to 2015 then you
[58:07] will select next so now under the land cover setup that you do not see any selection options here because this is already the default
[58:18] data set provided by the European Space Agency you will have the option to edit the definition but we'll be going over that in further detail under Session two
[58:27] when we talk about loading custom land cover data sets you can select next so now we have the define effects of the land cover change to be able to define
[58:39] those transitions from land cover classes so Alex noted earlier if you see a transition of for example tree cover to grassland that could indicate
[58:50] deforestation we by default we define that as degradation now you could change that here if you think that in your area of interest
[58:59] that's actually an improvement you can change it to stable so you have the ability to edit that you also have several options to reset in case you
[59:09] forgot how you've changed those to load a save table if you've run this analysis before and also to save the table to the file so if you do edit this we recommend
[59:19] that you select the save table so that you can refer back to that in future steps so now we have the area tab you have several options here for loading an
[59:31] area of interest you have the first administrative boundaries so it has a list of all the countries in the world this data set does come from natural
[59:41] Earth which is a freely available data set which then you can also filter by a second level boundary so if you wanted to look at a specific region within your
[59:51] country of interest you have that option if you don't have an area that you want to focus on that's available here you can also load that area from file here
[1:00:03] you can browse and load a shape file of choice of your area of interest we also have the option to apply a buffer here which we recommend if you're
[1:00:16] for example running on the city's the city is a point layer so to run on a larger area you can select the buffer and run it here based on size and
[1:00:26] kilometers I'm going to run it again on on Uganda so I'll select next and then finally you have this option to name your task so this is just identifying
[1:00:38] the analysis that you are running so I'm running it for Uganda I'm running it on trans da Earth productivity that was highlighted earlier
[1:00:52] for the years 2001 2015 now if you changed anything you could write some notes here that's all saved in the metadata of your analysis then you hit
[1:01:04] calculate and you'll see this blue text appear this is just telling you that your task is being submitted to Google Earth engine and once that disappears
[1:01:15] then everything has gone well and your task is now running on Google servers once that blue bar indicating that the task has been successfully submitted has
[1:01:31] disappeared your computer is no longer processing anything this is now running in the cloud on Google servers so if you picked
[1:01:41] a particularly large area or if you need to shut down QGIS and work on something else for a little bit you can do that now
[1:01:50] however you know this may take some time to run so you will receive an email when the task has completed and once that has done then you can continue with the next
[1:02:04] steps that I will outline now okay once you have submit your task you can go here to this view Google Earth engine tasks and click on
[1:02:18] that icon always when you first open this select refresh list so you'll see I've run a couple analysis this top one matches that task name that I typed in
[1:02:30] earlier and you can see now that it's finished you also have a few other details that are available here so your task name the job which also indicates
[1:02:40] which version of the plug-in you're using the start time when you submitted the task the end time so that took about 8 minutes to run and the status if you
[1:02:49] open this and hit refresh and this says running that means your analysis isn't done yet you can sit back and wait for that email to come because it'll email
[1:02:58] you when that task that is has completed so you can now select download results and a window will pop up so you just want to save that somewhere
[1:03:10] that you can remember on your computer so I'm going to call it Uganda trends earth productivity 2001 to 2015 so I don't forget the dates all sub
[1:03:29] indicators so I'm noting that's all sub indicators here because it's important to remember that you'll run another analysis and you'll be saving another
[1:03:39] set of JSON files to actually run the final indicator analysis and this these are just those sub indicators those three sub indicators that we're
[1:03:52] downloading now so it just takes a second to load you now in the layers panel you'll see that we have five different layers loading it
[1:04:18] may take a little bit of time you'll notice here I have this little bar that's loading on every individual layer and we have productivity the trajectory
[1:04:28] the performance the state as well as the land cover degradation and the soil organic carbon degradation layers
[1:04:41] now there's a few things you can do here you can collapse this if you don't want to see that information or expand it
[1:04:53] and all of these will go into the final indicator STG indicator calculation so again you can go back to calculate indicators and select land degradation
[1:05:07] indicator for a second time but now we're going to step to calculate the final SDG fifteen point three point one indicator and we're going to be using
[1:05:17] option one this is a single unit for analysis so since we ran it on the country boundary of Uganda we're going to want to select this first option now
[1:05:28] when you open this you will notice that because I already have these in my layers panel it's been art populated into this input tab so we have the three
[1:05:38] sub indicators of productivity as well as the land cover and soil organic carbon so there's nothing to do yet you can select next now we're just going to
[1:05:48] be naming where we save those files as well as the names of those files themselves so the first is the spatial information
[1:06:00] and I'm going to call it the trends the earth productivity layer so I don't forget that information again the years just for good housekeeping and I'm going
[1:06:12] to call it s DG 15 3-1 indicator so I know this is the final indicator data set I'm also going to just copy this information selecting highlighting it
[1:06:23] and hitting ctrl C because we're gonna have to type that again for the excel tabular output so once you've entered those in into the area you would like to save your data
[1:06:40] sets you can select next now again we have this area boundary so I would actually like to enter in a different boundary because now as you've seen from
[1:06:55] this analysis the first analysis it's just drawn a bounding box around the country of Uganda from that first area selection but I wanna have a better
[1:07:04] boundary data set that I'd like to use here so I'm going to select the upload my own area boundary and add in the boundary I have for Uganda so it's going
[1:07:16] to clip it to a highly detailed data set boundary and then I'll hit next and I'm going to name that indicator that task name 1531
[1:07:36] okay I think I need to start that part over so now once again we need to select
[1:07:46] the task name again that's what you'll see in that download option I'm gonna again say Uganda transit or productivity in the years and then right SDG 15 31 so
[1:07:59] I know that that's the final indicator that I'm running and I'm gonna hit calculate so now you'll see the blue bar at the top and this is not going to go
[1:08:09] away until the the analysis has completed so this is running locally on your computer now and it'll take a few seconds to to run and then again those
[1:08:20] layers will be populated into your layers panel once the analysis is complete you'll see this window showing that it has
[1:08:36] successfully run you'll see this land productivity layer combining trajectory performance and state into one single layer with declining early signs that
[1:08:46] declines stable but stressed stable and increasing as Alex noted earlier now I'm going to collapse all of these so we can focus on this SDG 1531 you can uncheck
[1:09:00] next to the layer and you'll see the the final STG fifteen point three point one degradation indicator with in red you'll see degradation in this neutral color is
[1:09:14] the area's that's that are stable and in green you'll see areas that have improved over the time period of 2001 to 2015
[1:09:21] now there's a couple of things you can do here for visualization you can add a base map if you need some points of reference again this is from natural
[1:09:34] Earth and I will load the Uganda base map you now once the basemap is loaded you can uncheck all these other layers
[1:09:50] underneath so it'll run a bit faster and I just like to show a few other interesting things you can do and key is to explore that data a bit further so
[1:10:00] you can pan the map using that pan map icon and you can also zoom in using this
[1:10:07] little magnifier so I'm just going to zoom into this area where we're seeing a lot of degradation here near mu bending now we can see that there's degradation
[1:10:19] in these these pixels but what does that really mean you can go here to plot data and actually pick the motifs data set you
[1:10:35] and give it a plot title I'm hit next and what I like to do is just select a
[1:10:42] point in that degraded area so we're going to look at the NDVI time series over the total span of NDVI data set by clicking this little icon it'll remind
[1:10:53] you that you need to click a point on the map and I'm just going to pick this
[1:10:57] somewhere in the the middle of the red now I'm going to hit options and give it a name because it's going to again have
[1:11:10] the task name associated with this analysis you and I'm going to call it Tegra Dacian so I remember now I'll hit calculate
[1:11:24] you can see it's been submitted again I'll refresh my list this one runs very fast I'll download that results and we have a time series plot of NDVI and that
[1:11:38] that pixel with degradation you can see from the red line this is the trend over time also showing why that vbi trajectory was declining and you could
[1:11:51] actually see that NDVI at each an annual interval you can close that session and now if I want to zoom back to the lair I can
[1:12:04] right-click on the layer and hit zoom to layer and I'll go back to the overall view of Uganda now I'm going to open the excel table that I created so I'll open
[1:12:18] the file where I saved all my datasets and select that excel spreadsheet if you get an error you can hit yes
[1:12:36] and you'll see this spreadsheet here so this is summarizing the overall area that we ran that analysis on so for the country of Uganda this is the total land
[1:12:45] area and it shows the breakdown from the SDG 1531 land area improved stable degraded and no data but we further break it down in these additional tabs
[1:12:56] we have the productivity tab which shows the the change in the productivity based on areas of land improving stable
[1:13:11] stressed with productivity type moderate decline and declining and this is actually displayed by the land cover types so you know exactly what
[1:13:23] transition types led to that decline or improvement we also have a breakdown for soil organic carbon looking at the summary of change changed from the in
[1:13:34] soil organic carbon from baseline to target and soil organic carbon change from baseline at target based on land cover transition and the land cover
[1:13:48] change by each cover clasp an area and type of link transition and finally we have the UN CCD reporting tab which aligns with their reporting
[1:14:02] for the baselines for land degradation so this matches exactly with their reporting tables and you can export that information and use it to fill in their
[1:14:12] reporting formats now the final thing that I like to show is how to save that project now all your data is saved so if you forget this step it's alright
[1:14:27] however if you want to save your your project so you can open it later on you can save it too your choice
[1:14:39] and open that later on so this concludes the demonstration for session 1 running all sub indicators using their default values thank you for your time
[1:14:59] so I would really just like to thank our guest speakers for those great presentations and for being here with us today and talking about their alignment
[1:15:10] with the SDGs and their tools that they're developing there was really fantastic just to sort of close off here I would like to say that if you have any
[1:15:23] questions related to the land management and wildfires aspect of the are set trainings you can contact myself or my colleague Juan Torres Perez and our
[1:15:31] email addresses are listed there if you have general enquiries about our set you can email our program manager and a Pradas and again feel free to
[1:15:42] visit our our site website we have a lot of trainings that focus on many application areas so take a look at the trainings available there and I want to
[1:15:52] thank you all for being here with us today I want to remind everyone that the next session will be a week from today on July 16th and we will now take some
[1:16:05] time for questions and you can type your questions into the Q&A and what we're going to do is have a document shown where will display the questions and
[1:16:17] then we'll have likely our guest speakers answer the questions the specific questions along the way and we will be typing into that forum
[1:16:34] great so thank you again everyone just bear with us for a moment while we transfer over to the question document we're going to display that on the
[1:16:47] screen here and go through those questions and what I'll do is I will read the questions and then likely revert to our wonderful guest speakers
[1:16:59] to answer those questions so just bear with us for one moment as we switch over to that document
[1:17:29] you this is Alec Soth again from Conservation International thank you everyone for listening in again to the webinar we've gotten some great
[1:17:46] questions in already so what I'm going to do is I'm going to start going through these questions I'll start off but I'll hand a few of them off to my
[1:17:56] colleagues as well and that's more appropriate so this question actually came in in a couple of different forms but question number one how can I
[1:18:04] analyze LDN sub indicators at the watershed level so this is something that we'll get into in a bit more detail in the second session of the webinar
[1:18:12] when we talk about how to use custom datasets within the trends dot earth tool so it's possible to use data that you have derived yourself for example if
[1:18:25] you produced a land cover map of your watershed you can use that within the trends daughterís tool the same is true for productivity as well as for soil
[1:18:37] organic carbon and we'll get into this in the second webinar but do remember that we are drawing on global data sets for the default data within trends dot
[1:18:47] earth which is around 300 meters in resolution so of course watersheds can vary and scale and make sure that you're using a
[1:18:57] data set of appropriate resolution for the watershed that your analog number two will trends daughters be available for qgis three versions can we
[1:19:09] run trendsetters on qgis 2.1 8.9 so in response to the first part of the question the answer is yes we are working currently on a version of trends
[1:19:22] dot earth's for QGIS three so that is something we're certainly aware of and we will reach out by our website and also via our list to provide more
[1:19:37] details when that version is available the second part of the question is whether trends on earth will work on two point one eight point nine the answer is
[1:19:47] maybe so we do recommend QGIS to point one eight point one five or greater there are just some issues that might pop up if you're using an earlier
[1:20:00] version so we can't guarantee it's going to work correctly if you use a version prior to two point one eight point one five questions three what are the
[1:20:14] weaknesses of NDVI as an indicator of land degradation so this is a larger question that we could spend a lot of time on but I guess two things I would
[1:20:24] say first of all remember that there are three indicators that we're using to assess land degradation so there's of course land cover and soil organic
[1:20:36] carbon in addition to land productivity so remember that it's the interaction of those three so one out all out method being applied that results in the final
[1:20:47] map of land degradation so that final map isn't based on land productivity alone but then secondly as far as NDVI itself as an indicator we're using NDVI
[1:21:00] as an indicator of land productivity so again not directly as an indicator of where i'm beggared ation there's been a lot of research on the association
[1:21:10] between changes in NDVI and changes in productivity of course there are the imitations as with any indicator arrived
[1:21:20] from remote sensing for example in DB I can saturate in heavily forested regions can be one limitation again we can spend much more time on this but do you know
[1:21:32] that it's multiple indicators that are going into the final map of land degradation also in the second session we'll show you how to calculate the
[1:21:44] productivity indicator alone and we're not going to go into the methods in detail in that session but there are other approaches that you can use to
[1:21:55] calculate the indicator of productivity from NDVI and you can see more details on those methods on our website for example looking at rain use efficiency
[1:22:06] or water use efficiency question number four what are you using to develop the annual land cover maps we're involved in a process to generate this type of map
[1:22:19] in Eastern Africa paper interview it would be interesting to see areas of collaboration certainly and feel free to reach out to us if you are interested
[1:22:30] and see any potential or collaboration we do have field teams in Africa and their most heavily in Eastern Africa so certainly feel free to reach out transer
[1:22:41] is that conservation org is our email again in response to the first part of the question so the annual land cover maps you see in the tool aren't
[1:22:51] developed by us the default maps are developed by the european space agency it's the ESA cci land cover change
[1:23:00] dataset so that's not a conservation international product that's developed by ESA but there is the potential again as we'll talk about in the second part
[1:23:11] of the webinar next week to load your own land cover maps into the tool so if you are developing land cover maps you can use those within trends dollars and
[1:23:21] of course we also do have other projects at CI where we've development Maps land cover for East Africa which we be happy to share if
[1:23:33] there's interest and also I'd encourage you to reach out to our cm Rd regional center mapping resources for development which I'm sure you're aware I'm already
[1:23:43] but based in Nairobi they've done a fair amount of work mapping land cover in East Africa as well and their NASA surveyor program question 5 what about
[1:23:58] using the tropical above ground woody biomass data layers like Pacini or similar so this is something we've looked into and I'm actually gonna hand
[1:24:07] this question over to Mariano Gonzalez row glitch who's director of ecosystem analysis here at Conservation International you didn't hear from him
[1:24:17] this morning but he'll be leading the spanish webinars this afternoon and Mariano is the best one to address this question
[1:24:25] thank you Alex good morning everybody yes we that's a great question and we we have looked into Easter's the above-ground biomass datasets definitely
[1:24:38] have a lot of potential in order to assess land degradation and we see that as the future direction of monitoring the gradation particularly linked to
[1:24:48] productivity and but the limitation at this point is that we don't really have data sets that assess change over time so we can use Puccini or any other
[1:25:01] above-ground biomass data set to set up baselines but if we don't have a change product that we can use to drive change that's why within DVI since we had
[1:25:12] measurements every well twice a day we can create these annual composites which allow us to track change over time we do use above-ground biomass in the
[1:25:23] tool it is something that we we didn't have time to cover in the webinar but if you want to explore the total carbon tool in the plug-in that uses biomass
[1:25:34] with the forest tension from Hansen and to assess and changes in in above-ground biomass changes in tree covered and emissions from the first station so it's
[1:25:46] it's not specifically targeting SDG 15 point three point one but it definitely informs the changes in biomass the first stations and the potential emissions and
[1:25:57] you can access that again from ours website translator now I'm handing it to Annika questions sakes oh sorry now question six was also me
[1:26:09] and why do you suck as an indicator when you're using land cover from when you're using land cover I'm from land cover you could estimate
[1:26:19] above-ground carbon um so yes we could what we're following the guidelines so the indicators were defined as part of the UN CCD process so it's it's a
[1:26:35] technical process and also there was sort of consultation with with country members so solar Ghana carbon was the data set that provided and I guess the
[1:26:50] reference information for doing this assessment and we're using a solo guy or carbon dataset which uses land cover in their modeling and also this aligns with
[1:27:01] a IPCC reporting so the UNF Triple C using the IPCC guidelines which uses changes in line cover to inform the changes organic carbon so it made sense
[1:27:11] to do the reporting sort of a lying with the other convention as well and question seven during that sure assuming that woody encroach MIT would
[1:27:26] show up as improving sock how would you represent that appropriately if you are trying to maintain grassland so here the it's important to remember
[1:27:36] there are again three different indicators so if you are trying to maintain grasslands it's important to look at the transition matrix defining
[1:27:46] whether each transition type is positive or negative and ensure that that is appropriate for your area so given that the indicators are combined in a one out
[1:28:00] all out fashion if you define for example transition from grassland to forest as negative that will be mapped as degradation when the layers are
[1:28:13] combined at the end of the day of course it then goes without saying that you need to have an accurate land cover map that's able to pick up those transitions
[1:28:22] to ensure that you are mapping degradation appropriately in your area but for all projects even not just in the case of linear encroachment we
[1:28:34] encourage you to look at that transition matrix it's the default provided within the tool and it was the default recommendation based on the good
[1:28:43] practice guidance but it's very important to ensure that the definitions in that matrix makes sense locally question eight what is the scale that
[1:28:54] turns out earth is mainly used I would like to use it on a 1 to 25000 scale and
[1:28:59] at watershed where a hydroelectric power plant is located so I got into this a little bit in the response to question 1 I said see that response but in terms of
[1:29:10] the scale it's mainly used trends earth was originally designed to support countries and analyzing data to support their work with the UN Convention to
[1:29:20] combat desertification the UN CCD so many of the initial users were at the national scale but given the resolution of the data 300 meters that data it can
[1:29:31] certainly be used a low national level in most countries and it is being used for for example project level monitoring but
[1:29:41] the original user base was primarily at the national scale right now we're working hard to improve the tool and its ability to incorporate finer resolution
[1:29:52] datasets so stay tuned because we will be supporting higher resolution data by default in the future again you can use that higher resolution data now if you
[1:30:03] have it we will be having perilous resolution default data in the future so now I'm going to hand back over to Monica noon to respond to a question
[1:30:18] thank you Alex so for question 9 the question was while clipping the result to a boundary file what CRS moustache-shaped file being it actually
[1:30:25] doesn't matter what coordinate system you're using however it does need to be defined so if you have an undefined polygon it won't be able to be run in
[1:30:36] the tool so just make sure that you've defined a projection it'll calculate that projection in Earth engine as long as it's been defined question ten can
[1:30:49] you use different dates for evaluation and how far in the past can you evaluate so this is really dependent on what we have as default data sets we have a AV
[1:31:00] HRR but of course that is for calculating the NDVI but that only goes back to 1981 and then the land cover data set from the SA CCI land cover
[1:31:15] project goes back to 1992 so in theory you could run it for any dates if you have your own custom data sets we'll go more into detail next week on that
[1:31:23] however the default data sets are available then and of course the NDVI from modus only goes back to 2000 midway through 2000 so that's why we
[1:31:33] have it starting by default at 2001 okay that also kind of covers a bit for question 11 where does the land cover layer come from there is it comes from
[1:31:46] the European Space Agency CCI I think it's like climate change initiatives land cover project so that's from 92 to 2015 as annual land cover data data sets
[1:31:59] however they're 300 meter resolution so again next week we'll go how to upload your custom level data sets so if you wanted to load land cover data sets as
[1:32:10] long as you have two different time steps so you have to have two time steps to be able to compare that change over time you can use any of your own
[1:32:19] classified images at a finer scale so yes it will work with the tool and we'll demonstrate that in detail next week we also just make recommendations that you
[1:32:31] know you're using a validated land-cover project product and that they were both views using the same methodology so that
[1:32:38] they're comparable over time as well so for question 12 well I guess two questions what is the maximum size of
[1:32:51] shapefile you can run an analysis on in trends dot earth is there any specific type you need kml SHP KMZ in response to the latter part of the question is there
[1:33:05] any specific shape file type you can use any file type that QGIS can read which is a large number of types of files actually apologies I'm wrong there you
[1:33:19] can use I believe it's KML or SHP but we can double check and get back to you on
[1:33:25] that question if you have a different file type you can convert it within a GIS to KML or geo Jason we also support but we can
[1:33:39] correct this if that response it's wrong what is the maximum size of shapefile you can run an analysis on on trends dot earth right now we don't have a public
[1:33:51] limit that we release but let us know if you do have issues we've designed the tool to work at the national scale so if you try to run things larger than a
[1:34:00] country the tool is likely to fail given that it is a public tool and we're drawing on resources provided by bull earth engine
[1:34:10] who's been a big supporter of this work so we do not guarantee that the tool will work beyond the national scale but if you are interested in broader
[1:34:20] analyses contact us at our email and we can work with you if you're analyzing larger areas question 13 will this tool have a version that works with ArcGIS the
[1:34:36] answer is the tool is free and open-source so it's the code is all out there so if there are those interested and working with it to build a version
[1:34:46] on our GIS that's certainly possible we're focusing on QGIS given that's a free and open source tool so that's where our focus is but all of the
[1:34:57] methods that we draw on all of the code is freely available so if you have an interest in building a tool on arc that's certainly possible based on that
[1:35:07] we've done question 14 how do I come or wildfires in the area there would be natural degradation in that area as well this would depend a bit on when the
[1:35:23] wildfires occurred and what their impact was it's possible that they could results and when cover change which would be detected in that data set
[1:35:33] unlikely if it's a smaller scale fire it's possible it could be detected in the productivity signal if it's sufficiently large it's gonna depend a
[1:35:47] bit though when it occurred in the period it would be better to bring in other data sets that are directly measuring wildfire occurrence and so
[1:35:57] there are data sets you can draw on there also produced by motifs those are not available right now within the trend daughter's tool what I
[1:36:07] would suggest is drawing directly on a dataset that's assessing fire and we do have a system within conservation international called fire path that's
[1:36:18] one example project that's actually focused directly on assessing fires so I'd suggest drawing on fifteen when his lack of real air come from so this is address and response to
[1:36:35] an earlier question that's for ESI if I have a classified image of more fine scale yes it will work sixteen are there API tools for pulling calculations
[1:36:47] directly from the platform or must all analyses be iterated by hand the answer is yes there is an API that you can pull calculations directly from
[1:36:59] the platform with but it's not documented at the pump so if you are interested and not definitely feel free to reach out to us it's on the list to
[1:37:09] get it documented but right now it's it's not question 17 which is better in presenting land or soil degradation qualitative in terms of load a gradation
[1:37:20] to highly degra gait it degraded or quantitative data I think it would depend on the purpose of the analysis that you're trying to do at the national
[1:37:37] scale that I see there as being a lot of value and a standardized approach that's drawing on the indicators in a standardized way across the country
[1:37:48] which can be difficult to do a qualitative approach there's a lot of value though that qualitative approach can lend and bringing optimal
[1:37:59] information into the process of course land degradation is something that at the end of the day is subjective and we cannot directly measure using remote
[1:38:09] sensing all we can measure our proxies so if you have qualitative data at or you know Social Survey data you can draw on this is going beyond what we do in
[1:38:20] trance on earth but I certainly recommend drawing on it if you haven't yes one one thing I would add I think that address is very well but the key
[1:38:31] and user we have fun for the quality with data qualitative data is also to identify the drivers of what degradation what is causing the degradation which is
[1:38:41] critical when you're tense once you have VSS to start planning how you're gonna address it how are you going to solve it
[1:38:47] so there's definitely value in combining both the quantitative data that you get from remote sensing with the quality data that you get from from experts or
[1:38:56] people who have knowledge in the area has any effort in developing land use land cover map using SAR imagery using
[1:39:06] this plugin so we have noticed a lot of interest from the user seen in generated land cover data sets using the plugin you since are or using optic remote
[1:39:18] sensing like planned sad or Sentinel it's something that we we are analyzing we haven't committed to provide that yet given that generating land cover data
[1:39:29] set has its own technical issues and then also we want to make sure that we provide data that we know it's of good quality and so we've providing the
[1:39:41] capabilities of producing a land cover data so we'll make sure you have to make sure to to also inform and provide all the different options to make the
[1:39:49] accuracy assessment of this evaluation so it's something we are evaluating we don't have a plan for providing it soon but hopefully we will make it happen yes
[1:40:00] question 19 do you have a list of spatial statistical tools to use in performing correlation analysis with factors of land degradation and I guess
[1:40:12] the short answer would be no we do not have that if you have something in mind please do let us know and we we can make sure to incorporate that and one thing I
[1:40:25] would add and it's not spatial stats but in terms of can you scroll up the question again Oh with spatial statistics tools but I'd recommend
[1:40:37] looking at some of the work from the world atlas of desert if occation that approach in the most recent edition uses what I believe they call the
[1:40:46] preponderance of evidence approach where basically the idea is to combine some of the information you get from remote sensing with other datasets that you
[1:40:55] would expect to be correlated with degradation so that might give you an idea both on what some of those factors might be but also one way in
[1:41:05] which consider them together question 20 or do you want by the way sure question 20 how do you how do you
[1:41:15] measure the correlation between climate change impacts on land cover degradation in an area of interest how do you quantify the effects of climate change
[1:41:23] on land and communicate it to the public and in the tool there there are many different functionalities which we did not have time to cover we talked a lot
[1:41:36] about trends in NDVI we know that I don't know if I would call it climate change I would talk about trends in precipitation or temperature we're
[1:41:47] talking about 10 15 years but the tool has functionalities for incorporating those changes into the the trend analysis of NDVI
[1:41:58] so for those of you familiar you can run rese trend analysis residual trend analysis which incorporates the variability in precipitation in rainfall
[1:42:08] in soil moisture three data sets that we provide and you can use also use ranges efficiency on water use efficiency to separate the effect from what would be
[1:42:21] land use separated from the effect of changes in climate so that that is a functionality that is included in the tool and you can use that so that
[1:42:31] affects the results are you obtain for productivity and yeah so that the please explore the website and you can assess those different options and that applies
[1:42:40] to question 21 as well song yeah Mariana was just saying in terms of question 21 how can you differentiate between FM eccentric and
[1:42:48] climatic degradation I would say yes consider what Mariano just said above refer to that question because that was other methods we've integrated core
[1:42:58] mental yeah so I think that looks like all of the questions so thanks again everyone for joining us from thanks again from the Conservation International side and I'll
[1:43:17] hand it back to the Arcite team great thank you all so just a few reminders before we end today we will have this question and answer document available
[1:43:30] on the website after we all get a chance to review it so if you did ask a
[1:43:35] question and you want to refer back to the answer that'll be available on the course website likely in a week or two and then please be sure to join us next
[1:43:46] week where we're going to continue to discuss the land degradation and incorporate local data and kind of talk about how it relates to your region
[1:43:58] during our session next week so thank you again and we will talk to you soon
