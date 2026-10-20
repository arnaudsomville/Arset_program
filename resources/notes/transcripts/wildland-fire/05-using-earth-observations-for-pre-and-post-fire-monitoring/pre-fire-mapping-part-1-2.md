# Pre-Fire Mapping, Part 1/2

`https://www.youtube.com/watch?v=yQY41ViDPKU` · id 63 · 2:30:07 · module 126 — Using Earth Observations for Pre- and Post-Fire Monitoring

[00:00] hello and thanks for joining us for our first of two sessions for this advanced training on pre and post-fire monitoring
[00:09] my name is amber mccullum and i'm joined by my colleague juan torres perez we will also be joined by two colleagues
[00:17] from nasa's develop program for the q a session for session two so um look forward to having them on with
[00:25] us as well for this training we have two sessions each being three hours long and the first is today on january 18th and the
[00:38] second is on thursday january 20th these sessions will consist of a lecture a hands-on exercise and a question and answer session and
[00:49] then we're going to have some lab time where myself and our other instructors will remain online to ask questions as
[00:57] you complete the exercises in this training training you can find all the course materials on the website listed here
[01:05] including the exercise documents for this session we actually have two exercises exercises for this session um there are also two prerequisites for
[01:15] this training first um it's really important to have an understanding of the basics of remote sensing um and our course on the
[01:23] fundamentals is listed here also it's recommended that you have attended or watched the materials from the training we held last summer
[01:35] which was a really extensive training on the remote sensing of fires and i will note that some of the lecture
[01:41] slides from today's session will be a review from that training but we will also be going in much more depth than we
[01:49] did in that training i also encourage you all to ask questions along the way as we go through
[01:56] this lecture and as we go through the exercise um so you can add your questions into the q a and we will get
[02:03] to those at the end and we've also included our emails here if you have additional questions that we
[02:10] don't get to with the q a or with lap time for this series we will have one
[02:18] homework assignment and the link to to uh view and complete the homework will be made available um
[02:26] during our next session and this will be uh uh due by tuesday february 3rd the homework will be a google form that you need to
[02:36] submit online so if you attend all of the sessions so today's session and thursday section and complete the homework by february 3rd
[02:46] you'll receive a certificate of completion completion and these do take a while to process so do please be patient with those
[02:55] give us a couple of months to get those out to you and you'll receive the certificate via email
[03:01] after a few months after this training has concluded so as i mentioned this series will consist of two sessions and during this
[03:10] first session we're going to be focusing on pre-fire monitoring and then in the second session we're going to focus on post fire mapping
[03:20] and both sessions as i mentioned are this is an advanced training so we're going to have some online um
[03:27] interactive hands-on exercises so today we'll be looking at a few different web tools tools for monitoring pre-fire conditions and
[03:35] then then next session we're going to focus on the use of google earth engine for post-fire mapping
[03:44] here are the learning objectives for this training series by the end of the training you should be
[03:50] able to identify land cover and climate variables related to wildfire risk assess and display geospatial wildfire risk data layers
[04:02] and then um in the next session we'll be creating a burn severity map using satellite imagery and also calculating
[04:09] the burned area um using our our google earth engine examples so i want to remind you all
[04:18] that in order to complete next sessions exercise you will need a google earth engine account and if you haven't already make sure to
[04:27] go to the link here and sign up for an account um you can also find this on the
[04:34] training website earth engine accounts are free and you don't need to have a gmail in order to
[04:40] sign up but they do recommend that you use your work or institutional email you can also just google search
[04:48] google earth engine account sign up and you'll you'll find instructor instructions on on how to do this
[04:55] if you don't have an account ahead of time no worries um you can follow along and just watch
[05:00] me go through um the scripting portion of our training and then you can you'll have access to the code for later so you
[05:08] can go on and and run through the exercise at a later date as well but it is encouraged because we do have
[05:15] lab time for this training to sign up for that account and and take advantage of the time that we'll be on together
[05:23] throughout this webinar series we will focus on two case studies to illustrate the concepts and for our hands-on
[05:30] exercises exercises the first case study will focus on a wildfire outbreak in british columbia that occurred last summer after the
[05:39] hottest day ever recorded in canada the second case study will focus on multiple fires that occurred throughout
[05:46] bolivia in 2020 that impacted various ecosystems such as wetlands savannas and portions of the amazon rainforest and we'll discuss these in a little bit
[05:59] more detail later on in this training series so here is the agenda for the first session session first we will review the pre-fire
[06:09] biophysical and climate conditions then we will highlight pre-fire data and tools such as landfire the global wildfire information system
[06:20] and and severe's global service catalog then i will guide you through portions of the hands-on exercise mostly in
[06:29] google or in climate engine for today after the lecture portion of the session we will have time for a question and
[06:38] answer portion and as i mentioned ask your questions along the way and i also wanted to mention we will
[06:46] post the questions and answers on our website as a pdf document after the end of this training um give us about a week
[06:54] or two to get that um posted but you'll have that for reference so if you asked a question and we provided some links
[07:01] you can go back and use that document at a later time and and again this training is a little
[07:08] unique we haven't done this um very much with our rset trainings but we're going to stay on for some lab time
[07:15] if you have questions along the way as you work through the exercises at the end of today's session
[07:22] okay so let's now get into a review of our pre-fire conditions related to climate as well as the landscape
[07:33] and again i want to mention that some of these slides are a review from our recent training that we conducted last
[07:39] summer so there are many variables to consider when monitoring a region prior to a wildfire wildfire these can be broken up into two primary
[07:53] categories categories so monitoring the climate conditions in the months weeks and days preceding a fire and these conditions are ephemeral and
[08:05] likely to change rapidly and these include variables such as precipitation temperature soil moisture humidity and winds winds so these are the the pieces that we're
[08:17] going to focus on first and then the second category of pre-fire conditions are the landscape and vegetation features
[08:26] while these variables can change some of them are more fixed such as topographic features like slope and this can affect how fire spreads
[08:38] other variables like vegetation structure and health can also change and lead to increased risk of fire occurrence but these tend to change um a
[08:48] little more gradually than things like the the climate conditions um this is all also to say that there are many
[08:57] variables you can monitor to assess wildfire risk and this is not going to be an extensive list we're not going to
[09:05] talk about every single variable you could monitor but give some examples of in general the types of
[09:12] variables that we tend to look at when we think about increased risks in a region or a certain landscape and these
[09:21] systems can be really simple or they can be really complex and a lot of times it just depends on your region
[09:28] so do keep that in mind as we go through these examples so the first i wanted to mention here is
[09:37] the effect of precipitation on wildfires and this is interesting because it can be twofold on one hand increased precipitation
[09:48] leads to increases in vegetation growth in particular with forest understory this can then increase the fuels available for fire in say a subsequent
[10:00] dry season on the other hand decreased precipitation leads to dry fuel which will more readily burn therefore it's important to closely
[10:11] monitor the precipitation patterns in the region that you're interested in and you can see increases in in fires
[10:19] occurring with both increases and decreases in precipitation in different ways increases in temperature have led to increased fire activity throughout much
[10:32] of the world positive land surface temperature anomalies are being observed more frequently due to climate change this was a driving factor in our first
[10:42] case study with the linton fire in canada that occurred after an anonymously high temperatures the highest temperatures ever recorded
[10:52] in canada and this has also been a primary factor in many of the recent wildfire outbreaks that we've seen in the western united
[11:01] states soil moisture patterns similar to precipitation patterns can also have varied impacts on wildfire outbreak potential in wetter regions drier than
[11:15] normal soil moisture can dry out fuels which can lead to wildfire risk in drier conditions wetter than normal soil moisture can
[11:26] also lead to increased vegetation growth that can fuel fires so the effects of these variables are often times very dependent on your
[11:36] ecosystem ecosystem and other dynamics at play relative humidity is the ratio of the amount of moisture in the air to the
[11:49] amount of moisture necessary to saturate the air at the same temperature and pressure and this is expressed as a
[11:56] percentage percentage relative humidity is important because dead forest fuels and the air always exchanging moisture so low humidity takes moisture from the
[12:09] fuels the vegetation and fuels in turn take moisture from the air when humidity is high light fuels such as grass and
[12:20] needles needles gain and lose moisture quickly with changes in relative humidity so when the relative humidity drops fire
[12:30] behavior tends to increase because these fine fuels become drier heavy fuels on the other hand respond to
[12:38] humidity changes more slowly to see significant changes in heavy fuel moisture there must be significant moisture usually from more than just say
[12:48] a single storm so again these dynamics are complex winds at the time of a fire outbreak can
[12:58] have significant impact on fire spread when wind speeds are high and fuels are critically dry wildfire spreads very
[13:07] quickly quickly we often see this in california as wind speeds can get extremely high in particular in high elevation regions
[13:16] with steep topography such as the sierra mountains mountains in general wildfires normally travel up to 6 miles per hour in forest
[13:25] and 14 miles per hour in grasslands but this can dramatically increase when the wind wind picks up in some cases fire managers
[13:35] have seen fires moving up to 40 miles per hour as we saw in california with many of our wildfires in 2020
[13:44] with fires like the glass fire for example where winds topped up to 70 miles per hour as i mentioned there are various methods
[13:56] to assess pre-fire conditions and one in particular is the assessment of fire weather fire weather is the use of
[14:05] meteorological parameters that we've discussed here things like relative humidity wind speed and direction and soil moisture to determine whether conditions are
[14:15] favorable for fire growth and smoke dispersion dispersion you may have heard of the term red flag warning which is issued in the united
[14:23] states when weather conditions are favorable for a fire outbreak these conditions vary by region but a red flag warning is the highest alert
[14:33] that can be issued when there is low relative humidity strong winds dry fuels and the possibility of dry lightning
[14:41] strikes or any combination of the above as we've seen in recent years climate change is a major factor that has
[14:52] already led to an increase in wildfire season length wildfire frequency and burned area the wildfire season has lengthened in
[15:02] many areas due to factors including warmer warmer springs springs longer summers and dry seasons and drier soils and vegetation
[15:12] similarly climate change threatens to increase the frequency extent and severity of fires through increased temperatures and drought
[15:21] earlier spring melting and reduced snowpack resulting in decreased water availability during hot summer conditions conditions these trends of longer wildfire seasons
[15:32] and larger wildfire size are predicted to continue as more frequent and longer droughts occur the figure here shows estimates of
[15:40] burned area in the western united states back to 1984 with the red bars alongside temperature anomalies with the
[15:49] black line where you can see major increases in in both in the recent decade okay so now let's move on to the
[16:02] landscape and vegetation properties that can affect pre-fire conditions as i mentioned earlier these landscapes features features can be fixed
[16:14] such as elevation slope or they can be variable such as vegetation type extent health structure and moisture content so
[16:23] now we're going to go through a few of these examples in more detail elevation affects fire behavior by
[16:32] influencing the amount and timing of precipitation precipitation as well as exposure to prevailing wind elevation also affects the
[16:43] seasonal drying of fuel in lower elevations generally where more private land is located located fuels tend to dry out earlier in the
[16:52] year because of higher temperatures and lower precipitation the opposite is true for fuels at higher elevation elevation there is also a tendency for more
[17:02] lightning strikes and subsequent initiate ignitions at higher elevations slope slope that's how steep or inclined the land
[17:12] surface is impacts the spread of fire increased slope often equates to faster fire spread fires tend to spread faster up the slope
[17:25] than they do down a slope as heat rises in the front of the fire it more effectively preheats and dries
[17:33] up slope fuels making for more rapid combustion of vegetation now aspect or the direction of the slope
[17:44] affects how much solar radiation the site receives and it also affects the vegetation type south and west facing slopes tend to
[17:53] have less vegetation and lighter fuel loads particularly in low elevation forests forests south slopes receive much higher solar
[18:02] radiation and are warmer so fuels tend to dry out sooner and more thoroughly during the fire season
[18:10] in contrast north slopes have more vegetation and hence heavier fuel loads north slopes are cooler and more shaded
[18:19] thus delaying the drying of fuels long into the fire season but because of their higher fuel loading
[18:26] heavily vegetated north slopes can experience more severe wildfires so it's important to note that we are speaking from a northern hemisphere
[18:36] perspective when we talk about these different um aspects and the effects on solar radiation and vegetation lastly landscape features like narrow
[18:51] and wide canyons ridges and saddles can dramatically affect fire behavior these features can change prevailing wind patterns by funneling air
[19:02] increasing wind speed and thereby intensifying fire behavior fires on lateral ridges those coming off of a main ridge can burn in any
[19:12] direction and can be affected by wind moving up through the canyons and saddles saddles other features including rock
[19:20] outcroppings streams rivers lakes and roads act as fire barriers and can be used as anchor points for developing
[19:29] fuel outbreaks and we will see this with our canada example in particular when we go through the exercise in the next
[19:38] training training when we think about the location of the river and the wildfire spread and firefighters often take advantage of
[19:48] these natural and man-made features in attacking and suppressing wildfires additionally the vegetation conditions can also greatly impact wildfire
[20:01] ignition and spread remote sensing can be used to assess these conditions for large regions in terms of assessing vegetation type
[20:11] and extent land cover classification is a really popular approach as you might already know land cover classification is the process of
[20:20] grouping similar pixels in remote sensing imagery based on land cover classes like forest shrubland agriculture agriculture how specific each class is depends on
[20:32] your analysis of the imagery and your access to ground truth data you can also see on the right this land
[20:40] cover map of sub-saharan africa and this provides pretty specific classes allowing for more fine-scale characterization of the fuel type and
[20:50] extent extent the scale of the classification whether general general vegetation type or even plant species is typically left up to the fire analyst
[21:01] and whatever level of classification works for the management and decision making making mapping different vegetation types is
[21:09] really important for fire risk since fuel behavior varies depending on the type of vegetation present for example forests contain more biomass
[21:20] to sustain burning but shrubland vegetation might ignite more easily differentiating fuel types and mapping their extent is a great way to start
[21:30] understanding vegetation-based fire risks within a study area and i've also linked two our set trainings that provide much more detail about
[21:41] land cover classification this was a one that we did recently in google earth engine so doing land cover classification
[21:49] and then the other was forest mapping and monitoring with sar data where we also actually provided a google earth
[21:55] engine example here but we won't get into some of these next variables about the the dynamics and characteristics of
[22:06] forests and vegetation that you can do with sar mapping but but there's the link there to to take a look at that
[22:13] training it was a really well done training by some of my colleagues as well vegetation stage and health are also
[22:23] really important unhealthy vegetation typically has a higher percentage of drier biomass like dead leaves or drying branches
[22:34] and this makes the unhealthy vegetation easier to burn the stages of vegetation can also dictate the amount and types of fuels
[22:43] available for fires an important component of the vegetation stage is thinking about phenology so phenology is the science of seasonal variation in
[22:54] plant development such as blooms buds and crop growth the figure here describes the seasonal change in ndvi
[23:04] measuring seasonal variation in vegetation using land surface phenology from remote sensing data products can demonstrate changes in fuel loads over
[23:14] time time now we won't be going into much more depth about phenology um but we've provided a link to
[23:22] another recent arset training that we focus just on phenology and you can monitor these types of things
[23:30] things using various vegetation indices like a few of these i've given here as an example these vegetation index anomalies are
[23:41] often used to show current vegetation patterns relative to long-term averages so we think about these as the difference from average
[23:51] you can use any vegetation index that works best for your region as long as you have enough data to establish some
[23:57] kind of long-term mean and this can be calculated by subtracting the long-term mean from the current value
[24:04] and is oftentimes done on a monthly basis basis for example if the anomaly is negative this indicates that the vegetation is
[24:13] less green than normal which may be indicative of drought-like conditions or abnormally high temperatures that impact vegetation
[24:21] health health for example the veers ndvi anomaly map shown here outlines negative anomalies in northern california on july 3 of 2020 prior to a
[24:34] large fire outbreak that occurred in august august this ndvi anomaly map supports this point as vegetation was likely drier due
[24:44] to low moisture and high temperatures vegetation moisture is an important factor to consider when discussing fuel ignition and burning
[24:58] low moisture in your vegetation acts as drier fuel and will contribute to the spread of the fire as we've been talking about here
[25:08] dry vegetation can also influence the moisture of the surrounding environment providing more favorable conditions for fire fire one method of assessing vegetation
[25:19] moisture is via fuel moisture content which is the ratio of leaf water content to dry leaf matter
[25:27] this can also be quantified indirectly via evapotranspiration which is the sum of evaporation from the land surface plus transpiration from
[25:36] plants plants there are also relevant vegetation indices that can provide more information about moisture content such as the normalized difference water index
[25:46] the normalized dry matter index and the evaporative stress index which we'll go over a little bit here
[25:59] in the case of wildfire the canopy height and density influence dynamics directly as fuel and this all links to the vegetation
[26:10] structure structure so measuring density is important since dense vegetation can allow fires to spread over a greater extent and more
[26:20] quickly quickly canopy height provides you useful information about ladder fuels or those fuels that can allow for fires to spread
[26:28] vertically into the canopy like shorter trees lower hanging branches or shrubs height and density also influence fire
[26:38] dynamics indirectly through their influence on other variables in the fire environment environment for example three-dimensional fuel structure has been shown to have an
[26:49] influence on fuel moisture regimes with the forest floor being consistently more moist under dense canopies estimation of density height and overall
[27:00] 3d structure can also be useful for biomass assessments biomass is considered a as a means to assess fuel loads
[27:09] and i mentioned our recent training on the use of synthetic aperture radar or sar sar and you can also use lighter as a mean
[27:18] to to assess these factors and so we won't get into this um piece for this training but it is an important piece
[27:27] and the use of sar data is really valuable here for canopy height forest stand height is a frequently used metric
[27:37] it provides an estimate of the average height of trees in a forest stand and it acts as a useful indicator of
[27:44] forest age and structure especially in the assessment of above ground biomass and this this really makes it useful for
[27:53] that pre-fire stage assessment of fuel availability availability and as we mentioned previously mapping vegetation height over a forested
[28:02] landscape has been done um with for example the maps you can see here on this slide and also provides information
[28:10] about ladder fuels and again i'll reference the uh rsa sar training we did recently and finally canopy dense density can
[28:22] impact fire spread now when we talk about canopy density we are typically referring to structural elements elements like openings in vegetated areas single
[28:33] trees separated from stands and clumps of trees with adjacent or interlocking crowns crowns closer together denser vegetation
[28:43] provides consistent and more accessible fuel loads for fires influencing their a bit ability to spread across a landscape
[28:53] when mapped like the figure on the right created using lidar data dense and sparsely vegetated areas are
[29:01] identifiable over the entire landscape landscape scale mapping like this can help us identify areas where fires may
[29:09] spread more readily or have greater access to fuels so now i will briefly review a few fire danger assessments
[29:23] and as i mentioned early on in this lecture lecture outlining fire danger can be done in a
[29:29] really simple way or it can be done in a very complex way um and there are a variety of methods to
[29:37] assess fire danger and whatever you do in your region can can really vary depending on the type of
[29:45] data you have available um what metrics your decision making activities or entities use for making decisions on risk
[29:56] so these can vary widely and there are just a few examples out there so let's start with two definitions
[30:06] using this example from the un food and agriculture organizations forestry program and fire danger here is a general term used to express
[30:19] an assessment of both fixed and variable factors of the environment that determine the ease of ignition the rate
[30:27] of spread difficulty of control and fire impact impact in other words where fire can start and how it will move fire danger rating
[30:38] is a component of a fire management system that integrates the effects of selected fire danger factors into one or
[30:46] more qualitative indices of current protection needs fire danger rating systems were developed as tools to provide a uniform
[30:57] starting point for fire management agencies to prepare and respond to fire the picture here is a public fire danger
[31:06] rating sign from thailand and signs like this are common throughout the world where fire danger rating systems have been established
[31:19] in practical terms fire danger is about tracking static and dynamic elements of the fire environment and these include a lot of those
[31:29] variables that we've already discussed today today so so topography topography that static part of fire danger all all other things be equal
[31:41] fires spread faster uphill as the slope bends the fuel towards the flame flame and preheating those fuels
[31:50] also fuels on sun-facing slopes also dry out faster than in the shade second fuels which we've discussed
[31:59] and fuels as i mentioned are part of the static and dynamic aspect of fire danger fires start more easily in fine fuels
[32:09] such as forest litter and grass it's harder for fires to spread in live or matted grass than in
[32:17] in standing dead trees there's also more fuel available to burn and produce smoke in forest compared to
[32:24] grass grass coniferous trees tend to be more flammable than broadleaf trees and fire behavior also depends on fuel
[32:33] structure the space between the trees the connectivity of the landscape the ladder fuel for example so these pictures show examples of fires
[32:45] in different terrains terrains um and you can see a low intensity fire spreading on the flat terrain in the top
[32:53] picture picture and a higher intensity fire in the more mountainous region here on the bottom bottom the last and the most dynamic element of
[33:07] fire danger is weather so we talked about a lot of these parameters as well um weather can control the moisture
[33:14] content of dead fuels and it can impact a lot of the the ignition and spread of fires as well
[33:27] around the world there are simple and complex fire danger rating systems and here are a few of these examples
[33:37] we have the crossover concept which is an ad hoc way of identifying dangerously dry conditions when the situation is bad when the
[33:46] temperature is high [Applause] [Applause] higher than the relative humidity so this idea was developed from the experience of firefighters in north
[33:56] america america the next index was developed in russia in the 1940s this index goes up each day depending on the difference
[34:05] between the temperature and the dew point point and then finally the u.s fire danger rating system characterizes potential fire starts and
[34:15] behavior for four different u.s fuel types types it requires hourly observations of things like temperature humidity wind
[34:24] speed precipitation solar radiation and then includes topography regardless of their complexity all fire danger rating systems have a weather
[34:36] component component the canadian fire weather index system is an intermediately complex fire danger rating system it is an accounting system to track the
[34:47] moisture content of different classes of dead fuels paired with simple models of fire behavior so this requires daily measurements of
[34:56] things like surface temperature relative humidity wind speed and precipitation it's really designed to produce the maximum amount of information with the
[35:07] minimum amount of data input into the system system because of its modest data requirements and adaptability it's one of the most
[35:16] widely used fire danger rating systems in the world different indices have been adopted and calibrated for local fire environments
[35:25] ranging from the boreal forests of alaska to the dry forests of southern europe to the tropical rainforest of
[35:31] fiji but this is a really um widely used and applicable danger rating system and we'll actually be focusing on this for
[35:39] part of our example on the canadian fire that we'll have later on in this session so now with a brief overview of
[35:52] those conditions that we assess and some of the rating systems to look at fire danger danger i wanted to talk a little bit more about
[36:00] our case studies that we'll be going through today and on thursday and some online tools that you can use to assess pre-fire
[36:08] conditions in your region of interest so as i mentioned previously our first case study will focus on the linton
[36:18] creek fire in british columbia canada on june 30th 2021 a large fire broke out near linton bc
[36:26] after three consecutive days of record-breaking heat the day before the fire began temperatures reached over 49 degrees
[36:35] celsius or 121 degrees fahrenheit the hottest ever recorded in the country this streak of temperatures came as part
[36:43] of a record-breaking heat wave which impacted much of the western u.s and southwestern canada the persistent high temperatures were
[36:52] the result of what is known as a heat dome dome a mountain of warm air pressing down
[36:57] across a huge area there were high winds in this area that led to increased fire spread the fires nearly destroyed the town of
[37:07] litton litton and the fires affected many first nations communities in the region the figure on the top shows those
[37:15] temperatures temperatures that were recorded on june 29th with that record-breaking heat along with some of the images below of the fire and
[37:24] the destruction in the town there in order to assess some of the pre-fire conditions primarily the climate
[37:35] conditions we're going to be using climate engine for actually both of our exercises so for this canada example as well as the
[37:43] bolivia example um climate engine is a user friendly in interface that actually is built off of the google earth engine api
[37:54] to generate maps and time series of many different climate and remotely sensed variables variables you can create maps and time series of
[38:02] data all within the cloud without the need to download any of the imagery or the data so you can also download results in a
[38:11] variety of formats such as a csv or you can download the images and maps as png things like that
[38:23] climate engine is fully customizable for spatial and temporal analysis and provides a comprehensive set of variables that provide early warning
[38:32] indicators of fire impacts of climate impacts for things like fire for drought for agriculture and many other applications
[38:43] one can select from the make map tab for quickly visualizing and analyzing variables variables for remote sensing you can look at
[38:51] things like the landsat archive modis sentinel 2 and you can also look at climate models and climate estimates from things like
[39:00] chirps maritube prism gridmet snowdass and many others all the datasets are visualized as a map layer on a google map
[39:10] um um so it's actually a really easy to use and you don't need to understand coding or
[39:17] or have any of that really in-depth knowledge behind this to to do this analysis for the linton creek case
[39:29] example we're also going to be taking a look at the canada fire weather index that i mentioned previously
[39:35] and they have a series of maps and data available available via natural resources canada as you can see here and and what i
[39:43] mentioned a little bit of previously was that the w the fwi includes things like temperature humidity wind and rain to generate three
[39:54] fuel moisture codes these are generally represented as unitless codes in instead of fuel moisture content um they can be converted into moisture
[40:05] content and in fact are converted each day as part of the daily or hourly calculations calculations so this includes things like the fine
[40:13] fill moisture code which represents fuel moisture of forest litter litter in the fuels under the shade of forest
[40:22] canopy canopy it also includes the duff moisture code which represents fuel moisture of decomposed organic matter underneath the litter
[40:31] and the drought code which represents deep drying in this then using these codes um the initial spread index and the built built up
[40:42] index index are are calculated um the initial spread index is the numeric rating of the expected rate of
[40:51] fire spread it combines the effects of wind and the fuel moisture fine fuel fuel moisture code code to assess the rate of spread
[41:03] and then the built up index is a numerical rating of the total amount of fuel available for combustion
[41:10] um so this index as you can see is shown here in this map on the right and it ranges
[41:16] from zero to about 35 it can go higher it actually increases exponentially when you get to really anything over 30 and this
[41:27] indicates extreme fire risk and so you can see here an example of the fire risk from july
[41:35] 1st 2021 in much of canada there's extreme risk here are two more examples of maps produced by natural resources canada
[41:47] including seasonal forecasts before and during the fire season monthly forecast maps are generated at the beginning of each month
[41:57] forecasts are based on a 40-member ensemble of predicted monthly temperature and precipitation anomalies using two numeric weather prediction
[42:06] models models these maps include the forecast severity rating rating which presents forecasted monthly or seasonal severity readings
[42:16] this map shows the predicted conditions unadjusted for climatology it also includes things like the average severity rating map which presents a
[42:26] 30-year average monthly or seasonal severity rating and this really shows the regional climate climatology of severity and then and then finally the forecast
[42:38] severity anomaly map which presents the ratio of the forecasted severity rating to the average monthly or seasonal
[42:46] severity rating so this indicates which regions are predicted to be above or below the regional climatological average
[42:55] average in the normalized form so you have a lot of examples here and um um nice maps that are pre-generated for
[43:04] those of you interested in tracking fire in canada and and and another nice resource from natural resources
[43:17] canada is this interactive map within this map you can display things like fire danger layer using the static maps like we showed in
[43:26] the previous slide but you can also do some during and post fire monitoring and mapping mapping and while this training is not focused
[43:34] on actively burning fires you can view them here and with many of the online tools for monitoring pre-fire conditions
[43:45] they also include things like actively burning fires so so a lot of times these are included in
[43:52] particular with the next system that we'll be mentioning so the global wildfire information system we'll be taking a look at in both
[44:03] exercises exercises and and as you may be aware this is a joint initiative of the geo work program and
[44:11] copernicus which is the european service that delivers new real-time data on a global level and the real goal of geois is to provide
[44:21] a comprehensive view and evaluation of fire regimes and fire effects at the local level um this builds on many ongoing
[44:29] activities and they have this really great great viewer that we'll be taking a look at and as i mentioned they had um they run
[44:38] sort of the gamut of pre-during and post-fire data available so this is what the current situation viewer looks like
[44:49] they have fire danger forecasts which is what we'll take a look at what we're interested in here is this pre-fire
[44:56] danger danger and then you can also view things like active fires from modis and veers as well as burnt area um after some time of
[45:05] the calculations are are being conducted so this is a screenshot of what the viewer looks like at the time just prior
[45:12] to the start of the litten fire and here we have the isi displayed with high values indicated in red
[45:20] and when we start to take a look at this example you'll see that the lit and fire
[45:24] occurred right in this area of really high risk in our second case study example we will focus on a large wildfire outbreak in
[45:35] bolivia that occurred in the late summer of 2020 while fires are common in this region and are generally used as a tool for
[45:44] maintaining pastures and for clearing crop crop clearing land for crops the fires in 2020 expanded into really
[45:53] large regions and prompted the government to declare a state of emergency emergency there was a similarly large outbreak of
[46:01] fires the previous year in 2019 as well and research has suggested that this may be related to a dry modulation of the
[46:10] atlantic multidecadal oscillation or the amo amo and this uh decreases rainfall in the region and increases temperatures and
[46:18] this is again related to climate variability and potentially related to climate change as we see these oscillations um
[46:26] being modified with these increased temperatures in our oceans and several ecosystems were affected including wetlands savannah grasslands
[46:37] and portions of the amazon rainforest and i will note that with these fires the damage was not only limited to
[46:45] bolivia and there were large swaths of land in brazil and paraguay affected as well well um um it was estimated that over 1.3 million
[46:56] acres of land burned during these these large fire outbreaks in this image here you can see the
[47:05] number of fire detections in the southern amazon in 2020 by the fire type along the top and the cumulative number
[47:13] of fire detections for the average of 2012 to 2019 and then separately for each year from 2012 to 2020 and so here you can
[47:24] see um in the figure on the bottom the 2020 line is the blue line with the number of fire detections well
[47:32] above average and so this is just an example of what we're seeing in these historic fire years with these um
[47:42] real large increases in the number of fires as well as the area burned while we will be using climate engine
[47:54] and gwis for the bolivia example we will also take a look at a tool created by severe amazonian
[48:02] severe is a joint usaid and nasa program and severe partners with countries and organizations in these regions to
[48:10] address critical challenges in climate change food security water and related disasters disasters they also focus on things like land use
[48:20] and air quality and they use satellite data and geospatial technology to co-develop innovative solutions through a network
[48:30] of regional hubs to improve resilience and sustainable resource management at a variety of levels so local national
[48:39] regional scales severe has this really large diverse collection of user-tailored geospatial services that use nasa data as well as other earth observations
[48:51] for a number of fnatic areas so one of these tools is the global fire emissions database or
[48:59] the gfed amazon dashboard and while this also is primarily a tool for tracking actively burning fires it can be used to
[49:09] assess fire forecasts along with firecast which i'll mention next and it can be used to assess fire type and
[49:17] extent in the amazonia region so it's a really great tool that i encourage you all to take a look
[49:23] at and we'll be looking at briefly with our second exercise and finally i wanted to briefly mention
[49:31] firecast firecast which is an international tool that acts as an analysis and alert system for developing neural time monitoring
[49:40] products via email to the users these alerts include risk of fire within a user specified area like protected areas or specific land
[49:52] cover areas or user-defined regions alerts also include map images depicting the locations of fire risks or fires
[50:02] the system is operated in many south american countries indonesia and madagascar so we'll take a look at the
[50:11] fire season forecast for bolivia as it applies to the potential for large fire outbreaks in this region so
[50:18] each year they do have fire season forecasts for countries and regions within countries that can be really
[50:26] informative informative for assessing fire potential so in summary from today's lecture there are many factors that contribute
[50:38] to fire risk including climate variables like precipitation and temperature as well as landscape characteristics like slope and vegetation density
[50:49] fire danger can be assessed using various climate variables and indices and can vary regionally we also highlighted a few tools that can
[50:58] be used to assess pre-fire conditions such as climate engine geos the amazon dashboard and we'll focus on
[51:06] these for our hands-on exercise that we'll get to next here are some of the links to resources
[51:14] that we mentioned throughout this lecture so again i really encourage you all to use this as a resource we'll be going
[51:22] through some of these as well and you um can access this presentation on the the course website too so you can
[51:32] have these all for reference later on as well well okay so in the remaining time together for this training we are going to have
[51:42] um three interactive portions so first um what i'll do is walk you through the steps of our first exercise for our case
[51:51] study example for the litten fires in canada canada and you can either follow along with me during this exercise or you can work on
[51:59] your exercise at the end of the session during the lab time then we'll have a period of time for um
[52:05] question answer session so as i mentioned i encourage you to add your questions along the way um we'll have a
[52:12] designated time where i'll answer some of the questions um and then after the the brief q a period um
[52:21] the trainers myself um my colleague juan um will remain online for lab time so during this time we'll we'll um sort
[52:30] of be quiet for a little while allow you all to work through the um exercises at your own pace and
[52:37] ask further questions um so during this time time we may type in our answers to your questions or
[52:45] if we have a lot of similar questions or people running into similar issues um we'll just pause and maybe pull up our
[52:52] screens and talk through some of these examples here so um this will really kind of just slow depending on how what
[53:00] kind of questions you all have the questions that are coming in now and how you all work through the exercise
[53:05] itself as a reminder here's our contact information for my self and my colleague juan you can find all the information about
[53:17] the training including the links to download our two exercises for today um at the training website shown here
[53:26] and also i want to mention that um with our set as many of you know um there's a wealth of different
[53:33] trainings and for topics available so do do please check out the rsi website for other trainings that may be relevant to
[53:40] the types of things that you want to do with remote sensing data and you can also follow us online at
[53:47] twitter and we have information on upcoming trainings and events located there so now we're going to jump right into
[53:57] our first hands-on exercise where we're going to be monitoring pre-fire conditions for the linton canada example all right so for this first
[54:13] case study example i mentioned we're going to focus on the the litton creek fires in canada um and we'll be taking a look at three
[54:21] different websites uh first we're going to take a look at climate engine then we're going to take a look at the
[54:25] canadian wildland fire information system and then we're going to take a look at the global wildfire information
[54:31] system system and we'll be going through climate engine for this example as well as our other examples
[54:38] um um so i want to mention before i get started you can follow along with me using the pdf of the exercise documents
[54:47] found on the arset training website or you could just sit back and listen in and refer to those exercise documents
[54:56] later during the lab time the exercise documents will take you through step-by-step all of the steps i
[55:03] will be going through um so no need to to try to keep up and follow along um but you can if you'd
[55:09] like like i will also mention that with climate engine in particular um it's best to use google chrome
[55:18] um and when we start to generate some of the maps especially when we look at um difference from average conditions
[55:27] it can take a long time to run the processing and it really also depends on your bandwidth that you have
[55:34] um how great your internet connection is in your region so um if your map takes a really long time to load you can always
[55:43] use the reset option and restart everything but i just want to mention that here i'll mention that again as we
[55:49] go through the the example today as well um so let's go ahead and jump right in uh what you're seeing now is the climate
[56:00] engine main web page they've they've just modified a few of these features here but what we're going to take a look at
[56:08] is their research application so if you come right up to the top here and click on research app you can learn a little
[56:17] bit more about the application and go to the app here and when you first arrive to the climate
[56:27] engine website uh you'll be given an option to take a tour and you can do this this um if you if it's your first time using
[56:35] climate engine um feel free to to go ahead and take the tour we're not gonna go for the tour because
[56:41] i'm gonna step you through a lot of the the pieces here but um you can opt to not show this window again if you
[56:48] don't want to take the tour we can just close that out there and what we're first going to do is um
[56:56] focus in on our location so one great thing about climate engine is it's sort of using the the google earth as its
[57:06] mapping application so um you can go in here and type in linton canada and click on center map
[57:19] and this will take you automatically to our region of interest interest along the top of the map you have a lot
[57:28] of different options for the features one of those is under map you can change your base map
[57:35] so you can go ahead and under base map choose something like the road map sometimes that's a little easier to view
[57:42] you have some different options here i'll leave it up to you but now you can clearly see the town of
[57:49] litton here you get a little bit of an idea of the landscape surrounding the region and now what we're going to do is use
[57:57] this this left-hand panel to to select the variables of interest so we have the option here to make a map
[58:06] which is what we're going to do you can also make a graph we'll we'll show brief example of that later
[58:13] but here is where you really want to fine-tune your variables of interest so along the make map panel
[58:21] you can go ahead and keep the type as climate and hydrology the data set that we're going to take a
[58:28] look at is the nlds 2 reanalysis and when you click on the down arrow you can see
[58:35] there are a lot of data sets available so you have a lot of options here if you
[58:39] want to play around with this later but we're going to look at nldas 2 and we are going to take a look at the
[58:46] precipitation first so again depending on the data set that you choose you have different variables as your options
[58:56] under processing here we're going to keep the total under the statistic and for the calculation we are going to
[59:05] take a look at the percent of average conditions conditions so so go ahead and click that there
[59:11] and then for the time period you can select a custom date range but it also has these pre-selected time periods so
[59:19] things like the last june july august are really useful and in particular for this example because the fire happened
[59:27] um in the the last year so then um you can see the start and end date are automatically uh modified to
[59:35] the last june july august and because we are doing a percent of average calculation um um this might take a while to process
[59:45] because what what's going on behind the scenes is there is a climatological average established from 1979 to 2021
[59:54] and then we're looking at the difference from average the percent of average conditions in this example so go ahead
[1:00:01] and click on get map layer and wait for the map to load okay so now that the map has loaded you
[1:01:49] can see that in this region the precipitation is below average for for the area one great feature of climate engine is
[1:02:01] you have the option to get a value in a particular location so you can click here on get value
[1:02:07] and because we selected litten as our zoom in area um the geomarker will be located directly over
[1:02:16] the town so then we can click on show value value and we can see what the precipitation uh
[1:02:23] percent of average was for the last june july august in this region so here you can see the precipitation
[1:02:34] was was um um nearly 40 of average so well below average we've included a few different optional
[1:02:45] steps within the exercise and we've highlighted this in orange along the way so so here you'll notice that there are a few
[1:02:53] different optional steps where you can look at different time periods and take a look at the precipitation
[1:03:01] precipitation you can also compare various drought indices indices um um in this region to reflect other climate
[1:03:09] variables like the precipitation anomalies so what we can do here is very easily change the variable variable to the
[1:03:19] standardized precipitation index or the spi spi and we can select a custom time period where we can look at the time period
[1:03:31] prior to the the fire outbreak by changing the custom time period here and what we've outlined here in this
[1:03:40] example is to select 0401 so april 1st to july 1st and then we're going to click on git map
[1:03:56] layer now you can see the standardized precipitation index so this is also an index that uses precipitation anomalies
[1:04:24] um and you can see in the um red regions um is a lower than average precipitation if you
[1:04:33] click here along the yellow question mark you can get more information about the spi and its uh
[1:04:43] us drought monitor categories you can see that much of this region was an exceptional or extreme drought
[1:04:50] so so really prone to a fire outbreak here another thing i wanted to mention is that along the variables and the data
[1:05:01] set you have these yellow question marks where you can get more information about things like what is a standardized
[1:05:08] precipitation index and it provides you with links to do some of your own research as well so for a
[1:05:15] a variety of these variables you might want to go ahead and take a look at that you can also look at things like the
[1:05:22] spei which includes um evaporation in the index and you can take a look at the map layer here by again clicking on get
[1:05:32] map layer and we can see similar patterns maybe a little less extreme when including the evapotranspiration evapotranspiration but you have the option to look at these
[1:05:52] various drought indices as well we can also take a look at the north american drought monitor which is a
[1:06:02] cooperative effort between canada mexico and the united states so along um our git map our make map layer panel here we
[1:06:12] can change the data set to the north american drought monitor and then we can take a look at the
[1:06:22] drought classification ensure that the statistic is the mean and the calculation is the values and then again for our time period we're
[1:06:32] going to take a look at the last june july august and click on get map layer and here you can see that
[1:06:43] the the drought is the classification for the north american drought monitor is a little bit less severe
[1:06:50] again we can click on git map value and show this for our particular region of interest and here you can see that the
[1:06:58] value value is 2.3 and in this classification system a positive value indicates more severe drought drought so you can again
[1:07:11] see what these designations are so another variable that we discussed in the lecture is temperature um so now we'll we'll take a look at
[1:07:21] some temperature parameters during this time period and again for this fire in particular temperature was a really big driving force in the the
[1:07:30] fire outbreak so um what you can do here um um is click on reset along the top and this will bring you
[1:07:39] right back to all of the parameters of the map that are default when you very first come to the application including
[1:07:47] even the the the tour here so um i recommend using this also if you have issues with your map loading
[1:07:57] and processing maybe timing out so you can always use this to reset again we'll come to lytton
[1:08:06] canada canada as our place of interest where we want to center our map we can change the base map let's try one
[1:08:17] out like you could try the road map you can take a look at terrain let's just go for the
[1:08:22] road map again and here along the the panel we are going to keep the climate and hydrology
[1:08:30] we're going to again use our nldas2 our reanalysis and for this we're going to take a look
[1:08:38] at max temperature um so this is the variable that came up as the default we're going to look at the mean and
[1:08:46] we're going to look at the difference from average conditions as a starting point and again we're going to take a look at
[1:08:55] the last june july august and click get map layer okay okay so now we can see as before
[1:10:20] our maximum temperature difference from average is higher than average again we can use the get value option to
[1:10:30] show the value in linton and here you can see that the value in the last june july august
[1:10:51] was was nearly 2.5 degrees celsius hotter than average average so this is quite significant another optional step here is to take a
[1:11:04] look at the temperature differences from a different climate climate model um you can take a look at the cf
[1:11:13] fs3 analysis or merit2 um and let's also now take a look at the um temperature anomalies in the days
[1:11:23] preceding the fire so um just in a shorter time window where this was really a severe change in the temperature so we're going
[1:11:33] to go down here in time period and do a custom date range and we're going to do um 20 21 6 1 as
[1:11:42] our at 6 28 as our starting date and then 6 30 as our ending date so we're just going to look at
[1:11:51] june 28th 29th and 30th in the the days that that led up to this fire and now um get math value or get that
[1:12:01] later so now if we use our get value option again again we can take a look at the
[1:12:21] maximum temperature difference from average in our area and here you can see it was nearly 15.8 degrees celsius hotter than average in
[1:12:32] these two days so wow that is really severe um and you can take a look at the
[1:12:38] temperature anomalies um in the whole region if you zoom out as our optional step um to take a look at
[1:12:46] that heat dome that affected much of the western and northeastern u.s and canada so now we're going to go ahead and take
[1:12:53] a look at soil moisture another variable we discussed in our lecture we're going to keep the climate and
[1:12:59] hydrology type and for our data set we are going to use the fl dos so so um here we're going to just change this
[1:13:08] um um and go down to land surface and again you can get more information on on what these
[1:13:17] data sets are using the little yellow yellow question mark there okay so now we are going to take a look at soil moisture
[1:13:26] another variable that we discussed as having an impact on fires so what we're going to do is just change
[1:13:33] our data set here to fl dos which is a land surface model here and what the variable will be is the default
[1:13:42] is the surface soil moisture we're going to keep the statistic as the mean and the difference from average as
[1:13:49] the calculation what we are going to do now is change the date range to the last june july
[1:13:56] august so taking a look at what we had before and then click on get map layer okay so now you can see that the surface
[1:14:10] soil moisture in this region is is variable it tends to be a little lower than average again we can use the get
[1:14:18] value option to show the value in linton and you can see that this is um about about 1.2 millimeters less than average so
[1:14:31] it was dry in this region um um prior to the fires during the last june july august you can also look at soil
[1:14:41] moisture in you know the months proceeding so you can take a look at the spring soil moisture um as an optional
[1:14:47] step as well so now we're going to take a look at the wind speed and we're going to go back to
[1:14:54] our nl-dos 2 as our data set the re-analysis here and the variable we will take a look at
[1:15:04] wind speed and now we have units they can be um in in meters per second or miles per hour
[1:15:15] depending on what you prefer we're going to look at miles per hour here the statistic is going to change to the maximum so the
[1:15:26] maximum wind speed and the calculation will be values and here we're going to look at our more specific date range our custom date
[1:15:36] range range of 6 28 june 28th to to july 2nd so so actually after the fire had began
[1:15:48] now we're going to click on get map layer and here you can see the um the wind
[1:15:57] speeds speeds we can click on get value again for for lytton and here um for our model
[1:16:09] uh we have wind speeds of about 10 miles per hour um which is pretty low for the region um however
[1:16:19] some of the ground stations measured wind speeds of nearly 45 miles per hour so this might have occurred at higher
[1:16:26] elevations along peaks um and in particular in regions um where where the fire was was spreading rapidly
[1:16:34] um so another thing to take a look at but here in particular as winds are so variable it's oftentimes very useful to
[1:16:42] take a look at the ground measurements as well okay so now we're moving on to part two
[1:16:48] looking at some of the pre-fire landscape characteristic characteristics and here in um climate engine there are fewer options available but we do have
[1:17:00] an option to look at a terrain base map so we can get sort of an idea of what
[1:17:05] the terrain looks like what i'm going to do here is again just reset i recommend doing this often
[1:17:12] because because a lot of times you are going through a lot of the processing and the mass can get a little
[1:17:20] hung up if you're doing the same thing over and over again so i prefer doing a little reset
[1:17:24] and then we can take a look at linton canada again and center our map and now what we can do is under map we
[1:17:36] can change our base map to terrain and while this isn't a perfect example of of what the elevation looks like in
[1:17:47] particular regions we can see that this is a mountainous region just based on this terrain map um also if you zoom in you can start to
[1:17:55] see some of the topographic topographic lines lines so you can see this is a complex mountainous terrain
[1:18:04] and yeah if you zoom in really far using the plus or minus sign you can start to
[1:18:09] see some of the contour lines that indicates the elevation so you can see ridge lines canyons and regions that are
[1:18:16] covered in vegetation and regions that are more bare so in google maps you can also click on
[1:18:25] some of these regions and get an idea of what's going on so if we click on one of
[1:18:33] the the peaks also get more information about about the the the elevation so if we zoom in here
[1:18:45] and and we zoom into litten here we can take a look at these different peaks in my example i took a look at
[1:18:57] mount roach in the exercise but we can also just click on any of these peaks here and get a little bit more information
[1:19:08] and view in google maps so if we view it in google maps we can get more information about the mountain
[1:19:20] and a lot of times the topography in this region as well so here in google maps you can see
[1:19:27] things like the elevation nearly 3000 meters for these peaks so it's a very high elevation region so now if we go back to our climate
[1:19:40] engine app um the next thing we'll take a look at is the vegetation health and we can do
[1:19:46] this by taking a look at some of our vegetation indices um so again we are going to
[1:19:53] use our panel here on the left we are going to this time take a look at remote
[1:19:58] sensing data so this is another option um you see when i change remote the type to remote sensing the data set here
[1:20:07] automatically changes to landsat what we're going to take a look at is sentinel 2 in this example in sentinel 2
[1:20:14] surface reflectance and we have our ndvi which is the normalized difference vegetation index as our vegetation index selected
[1:20:25] we're going to take a look at the mean and the values and for the time period we're going to take a look at the
[1:20:32] last northern water year and then click on get map layer okay okay so now you can see the ndvi value in
[1:20:48] this region um you can see that much of the region has dense vegetation um in the especially in the lower
[1:20:55] elevations along the waterways with less than less vegetation along the mountain peaks so now we're going to just make sure
[1:21:05] that our map is um sort of centered back on litten we can zoom out a little bit
[1:21:10] and when we do that um the processing will will expand to the larger region as you can
[1:21:16] see here while this is useful it doesn't really say much about the health of the vegetation vegetation so what we're going to take a look at
[1:21:24] now is the percent of average conditions so we're going to keep sentinel 2 and ndvi selected then we're going to take a
[1:21:33] look at the calculation being the percent of average conditions and we're going to change our time period to the last march through may so
[1:21:48] this is the springtime preceding the fires and we're going to click on get map layer now you can see that much of this region
[1:22:04] had had below below average ndvi values as indicated in the oranges and reds we can also do this for the
[1:22:17] time period just prior to the fire and during the fire outbreak so we can take a look at this in the last june july
[1:22:25] august august and again click on git map layer and again we see a lower than average ndvi values in this region
[1:22:41] so now we are going to take a look at the vegetation moisture conditions so we're going to take a look at the ndwi
[1:22:50] to identify variations in moisture content in the vegetation in this region so here we're just going to change the
[1:22:58] variable to um the ndwi and we're just going to choose the near-infrared and shortwave infrared this first option
[1:23:06] there are a variety of ways to calculate this index which we won't discuss here but just select the first one for this
[1:23:13] example example and then we are going to ensure that the statistic is the mean the calculation are the values and then
[1:23:22] we are going to take a look at the typical ndwi values in this region so we're going to take a look at the
[1:23:30] entire period of record and click on gitmap layer okay okay so now you can see the typical
[1:23:49] typical vegetation moisture conditions and if we take a look at the get value if you use that option again and
[1:23:58] navigate around you'll see that the values range from about about negative 0.1 to 0.6 and again really
[1:24:07] vary based on the elevation and the aspect aspect so what we can also do like we did with
[1:24:14] the other indices is take a look at the difference from average conditions and we can just take a look at the last
[1:24:22] june july august and click on git map layer and now you can see that the the vegetation moisture difference from
[1:24:47] average is a little below average in particular in the region around litten in particular where the fire is actually
[1:24:54] occurred occurred so just another way to assess pre-fire vegetation health so now we are going to take a look at a
[1:25:09] really new and cool feature in climate engine is a fire danger so we talked about the fire weather index as a
[1:25:16] component of the canadian forest fire weather index and um again it's it's based on these these variety of indices
[1:25:26] that use things like temperature precipitation humidity um again we're just going to reset our map as a starting point
[1:25:35] and then we're going to zoom into litten canada again to center our map and just type in linton
[1:25:54] canada canada and center our map we are going to go ahead and change our base map to terrain again
[1:26:08] and now we are going to take a look at climate and hydrology and our data set we are going to take a look at the nara
[1:26:16] 2 reanalysis and in this analysis we have the fire weather index as an option and this is an option
[1:26:27] available just for the u.s and portions of canada so this will not be available for all of your
[1:26:33] regions but it's a great example for for this area for the statistic we are going to look at our maximum
[1:26:44] and the calculation will be the values and again we're going to take a look at the last june july august
[1:26:52] and click on get map layer interestingly enough the fire weather index ranges from about 20 to 60 across
[1:27:07] the region and is not that intense for some of the regions surrounding litton but um is a
[1:27:15] pretty high value just north of the town here and in some of the surrounding regions as an optional step you can take a look
[1:27:26] at the custom date range option and look at how the fire weather index changes in a custom date range say the couple days
[1:27:36] preceding the fire you might see some differences there so do take a take a look at that as an option if you'd
[1:27:43] like like so that concludes our climate engine portion of this exercise we are going to um now briefly take a look at natural
[1:27:54] resources canada and then we'll take a look at the global wildfire information system it won't be as extensive as our
[1:28:01] climate engine portion but it does provide a few examples here so now we are going to go ahead and take
[1:28:10] a look at the canadian wildland fire information system and again um this is a great resource provided by natural resources
[1:28:20] canada for fire mapping um i've provided the link there in the exercise document so if you're following
[1:28:26] along with us you'll be navigated to this link that i've already pulled up in my browser here you can get a lot of information
[1:28:35] about the forest fire weather index what we've been talking a lot about and then on the left hand side here they
[1:28:42] have this option for an interactive map so we can go ahead and click on that and we provided an example of what this
[1:28:51] map looks like in our lecture lecture but here we can go ahead and change our dates to our date of interest we're
[1:29:01] going to go ahead and take a look at june 28th of 2021 and then we're going to click on
[1:29:10] retrieve map it's a very simple interface but it has a lot of nice information along the top right if we click on
[1:29:20] overlays here we can expand our map options so we can see what we have available again again this is just focused on canada but it
[1:29:30] has a lot of examples a lot of information you can see initially our fire danger is turned on and we were down here in
[1:29:40] british columbia and you can see again the fire danger was very high um in the couple days preceding the fire
[1:29:49] outbreak if you want you can zoom in and navigate over to this area and take a little closer look
[1:30:02] um and we were really right in this region here you can also turn on the fire history
[1:30:08] layer and see how it compares with the regions that are under a high fire danger danger currently
[1:30:16] currently so you can turn these layers on and off um you can take a look at the
[1:30:21] fired fire history um fire danger so um the fire history shows you fire perimeters from 1980 to 2020
[1:30:32] you can see some very large fires happening here um um portions of the canadian rockies um and a variety of other things you can
[1:30:41] zoom in and take a look at those pathfire um perimeters of interest now while we're not focused on active
[1:30:52] fire mapping for this training again as i mentioned many of these tools have multiple data sets available so
[1:31:00] what we can do is we can change the date to to july 2nd so we'll come here to the 2nd of july of
[1:31:09] 2021 2021 and we can retrieve the map and again look at the overlays and take a look at the active fires
[1:31:22] so we can take a look at the fire 3m hot spots and this will pull up um the hot spots areas for the the fires
[1:31:31] that occurred in the last 24 hours and if we zoom in we can find our fire up in
[1:31:37] here here um with these dots so there are many fires that occurred around around linton and if you click on the map you can get
[1:31:46] more information there the nrc website also provides seasonal fire forecast maps such as the national wildland fire situation report
[1:31:59] and historical analysis of fire danger so if you go um along the top of the web page here
[1:32:08] and click on fire you can find some of this information so here you can read through the
[1:32:15] background information provided and scroll to the bottom of the webpage to find out more about all of the information that they
[1:32:25] have but you can also hear click here on the canadian wildland fire information system and here's where you can view those maps
[1:32:36] that we showed in our lecture as well so there are things like fire weather fire behavior and the fire hot spots
[1:32:44] so if you click on any of these in particular you can be taken to those pre-populated and pre-created maps
[1:32:53] available available you can also take a look at various data sources uh on this website such as
[1:33:00] things like the burned area composites composites fire polygons smoke plumes and and many many more things so this is a great
[1:33:09] resource if your area is in canada you're focused on um so i do encourage you all to take a deeper dive into
[1:33:18] natural resources canada website for a variety of the tools and resources that they have for you so that was a really really brief um
[1:33:28] highlight of the canadian information from natural resources canada and in the final portion of our exercise we are again going to look very briefly
[1:33:39] at the global wildland uh wildfire information system or geois because it does have a little bit of information in
[1:33:47] our sort of pre-fire analysis so again this is part five if you're following along we have the geos website
[1:33:57] shown here um that we are going to take a look at so now if we scroll to the bottom of the
[1:34:10] initial webpage we can take a look at the long-term fire weather forecast if we take a look at the
[1:34:22] here global long-term fire weather forecasts here you can take a look at many different regions of interest
[1:34:34] here we're going to take a look at north america so we'll go ahead and select the north american region it's centered over
[1:34:41] over europe because this is a joint um issa produced tool tool so they do have a focus there on europe
[1:34:50] but we can take a look at north america and here you can see the monthly and seasonal maps of temperature and
[1:34:59] rainfall anomalies so we have a monthly option we have a seasonal option so in future fires future analysis that you're doing you
[1:35:09] can take a look at the the long-term monthly forecasts in your region we can also look retrospectively at the
[1:35:19] various fire danger data layers available in the current situation viewer viewer so at the top of the web page we can
[1:35:26] take a look at the apps and we can look at the current situation viewer viewer with the current situation viewer there
[1:35:35] are various map options and forecast layers layers along the left hand side once this loads and you can you can navigate through
[1:35:45] this map really easily so what we can do here is we can move our region and zoom in to
[1:35:53] our area where we were interested in in british columbia and take a look at some of these layers
[1:36:00] as well so now we can take a look at um the forecast tab so if we take a look at the forecast tab
[1:36:16] we see fire danger forecast here and we can take a look at june 28 2020 our time
[1:36:23] period of interest so just by using this navigation to go backwards and click on june 28th and we are just going to take a look
[1:36:37] first at the fire danger forecast so we can go ahead and turn this on and now we can see the
[1:36:46] fire danger rating similar to what we were viewing in our climate engine website website although this is um available globally
[1:36:55] so you can again you can zoom out of the map and see this in many portions of the world
[1:37:01] um during this time period i mentioned the heat dome so much of the western us as well as british columbia were
[1:37:11] under this uh fire warning fired fire danger was very high and and we can take a look at
[1:37:22] the table of the fire danger forecast to see what this really means what the values mean um so
[1:37:31] the other options available here as well are some of the variables that tie into the fire weather
[1:37:39] index like the initial spread the built up index the fine fuel moisture code you can take a look at all of these
[1:37:45] different layers again we have an information icon and this is very similar to the yellow question mark that we had in
[1:37:57] climate engine where you can take a look at what these values mean so you can see the fire danger classes and the fire
[1:38:05] weather index ranges and what they mean and we've included this table in the exercise as well so you can take a look
[1:38:12] at what the colors are and then where the fire danger rates um along the map as well
[1:38:19] so if we go back to our current situation viewer again i mentioned a variety of indices here we can take a
[1:38:25] look at things like the initial spread index and our map will change and populate automatically and we
[1:38:31] can zoom into our region of interest to get this information you can also look at things like the
[1:38:39] fine fuel moisture code we can see that the fuels were very dry during this period um prior to to the
[1:38:49] outbreak outbreak um so there are a lot of different data sets available in geos um in particular
[1:38:57] there's a lot available for actively burning fires um they do also have some burnt area data products
[1:39:05] available so i do encourage you to explore this in a bit more detail and we will be exploring
[1:39:13] this with our second exercise so do take a look at that and take a look at the
[1:39:18] global wildfire information system so i know that was a really brief overview especially of our second and third web portals for
[1:39:31] pre-fire information but this concludes the exercise for our linton canada fire break fire outbreak example you can see in a variety of ways
[1:39:42] that the conditions were primed for a really large fire to occur now i've just stepped through our first
[1:39:50] exercise here but we do have a second exercise focused on our bolivia fire examples that looks very similar to what we've gone through
[1:40:00] here here um for our our canada example so i encourage you all to spend the time during our lab time to to go through
[1:40:09] that second example and we'll be here for for questions that you have along the way um and i do just want to thank you all for
[1:40:18] being with us today so we'll wrap up our exercise here um and then we'll we'll get to some
[1:40:24] question and answer session and then we'll we'll be around for for questions for um quite a while um after the
[1:40:32] conclusion of this so um thank you all and we will now move into our question and answer portion
[1:40:54] all right so thanks again everyone for joining us uh give us a moment we're going to pull up our q a document
[1:41:02] uh a few things i wanted to make note of uh straight off the bat is uh i realized
[1:41:08] with so many users online here um we have nearly 700 of you today it looks like we may be
[1:41:17] overloading the climate engine website so you may have difficulty you may be seeing an error when you go to the climate engine
[1:41:25] website when you're trying to load specific specific when you get to the um to the initial site so uh
[1:41:36] with with large groups of participants um going on to these sites where we're in a learning process
[1:41:44] process so apologies uh if you're unable to access climate engine now um i will say that you can come back and
[1:41:53] access climate engine at any point you have the documents with the step-by-step instructions there for you and you also will have access to view
[1:42:03] the recording of the uh in particular the canada example that we just stepped through and that will be made available on the rset
[1:42:11] website within a couple of days so you could always come back and test out these features and i know we also had a few questions
[1:42:20] specific to climate engine that i'll get to to later on as well um so what we'll do now is we'll go
[1:42:28] through questions um until about the top of the hour um as needed as we see some questions
[1:42:35] coming in we can answer those as well um and then we'll we'll take a pause and and
[1:42:41] and maybe we'll see if we're able to get onto climate engine and you could work through some of those exercises um
[1:42:49] until uh the the top of the the next hour so let's just go ahead and jump right into a few of these questions
[1:42:56] some of these were coming in during the lecture portion so they're more specific to some of the topics we
[1:43:02] were discussing the first question here that's shown is what about anthropogenic factors where does this factor in and that's a really
[1:43:11] great question and i would say that that anthropogenic influences on the climate and the ecosystem can be folded into many of these
[1:43:21] variables that we discussed during the lecture um you know for example we see increased temperatures or changes
[1:43:29] in precipitation variability and frequency and severity of storms as a result of climate change and so um
[1:43:37] we can see anthropogenic influences on the climate in terms of those variables as we're looking at things like
[1:43:44] differences from average in particular when we're pulling from a long-term 30-year 30-year climatology we can also assess changes
[1:43:53] to to um the land cover and forest structure due to anthropogenic influences so looking at things like forest clearing
[1:44:03] agricultural expansion urban growth um and looking at a time series of imagery imagery uh uh over the a particular area of interest
[1:44:15] as as a human influences the landscape so we mentioned land cover classification in the lecture so you could do something like this as
[1:44:25] looking at calculating your own land cover classification over many years and seeing how those classes change um you could also look at changes in
[1:44:36] things like the ndvi um over time and in in in that you can identify land clearing um and changes to the
[1:44:46] health that may be related to anthropogenic influences um so so i would say that there are a variety of
[1:44:54] factors that you can take into consideration when when looking at these variables that we considered in the
[1:45:00] lecture that can attribute to fire risk there are also many other factors factors um and and one thing we didn't talk a
[1:45:09] lot about that is a growing area of concern is is something like the urban wildland interface and
[1:45:17] the encroachment of of these large wildfires on um what used to be pretty safe areas where where folks are living
[1:45:26] um um and so that that is another area of study in terms of risk to communities and risk to structures
[1:45:34] um so that's something to consider as well well i will say um in response to looking at force structure and there was
[1:45:43] another question later on about this as well um using sar data is really beneficial um to look at things like structure and
[1:45:52] density of forests and um i've linked i've provided the link to a training that we gave last year on
[1:45:59] force mapping with our data we had another arset trainer trainer erica potus who is our resident sar expert
[1:46:08] online for that training we also had a guest speaker who talked about forest stand height there and so that's another area to
[1:46:15] explore in terms of assessing changes to forests due to anthropogenic activities okay so moving on to question two
[1:46:29] this question asks why always after a wildfire event the same vegetation types and densities that were come back to colonize the same area
[1:46:39] and if we could just scroll down thank you on the document a bit there um so that's a great question and um it also
[1:46:47] might depend on your area and the vegetation vegetation of interest within a region that was recently burnt but um vegetation
[1:46:55] regrowth patterns can vary um oftentimes you do see the same types of vegetation and and that can be a real
[1:47:03] function of the fact that wildfire is a natural part of the ecosystem and contributes generally to the health of many forests um
[1:47:13] particularly um conifer-based forests where the the fires uh will open up the seeds of the trees and actually
[1:47:25] create the conditions necessary for new new trees and regrowth in that region region so so this is this is a really natural part of
[1:47:36] the system you know in relation to the previous question we are seeing these these more severe wildfires occurring
[1:47:45] um that may be related to changes that are anthropogenically produced and so um we are seeing um sort of
[1:47:53] unnatural fire regimes in in many of these forests and um that that can relate to the way the
[1:48:00] forest is managed that can relate to climate change and climate variability and a variety of other factors um but we
[1:48:07] do often see some of the same vegetation types and and that can be due to vegetation itself it also can be due to
[1:48:15] the climate and topographic conditions that are present um in the region and also the influence of human activity um
[1:48:24] and um restoration uh activities also in the area i know that in many portions where wildfires have burned there are efforts
[1:48:35] uh by uh groups like the us forest service to restore that area to the um natural system so
[1:48:45] there are a variety of factors that are um in place there okay um question three interesting question here um how can
[1:48:56] wildfire affect groundwater conditions groundwater changes um and and again that also depends on the severity of the fire but as we
[1:49:05] mentioned in the lecture um the soil conditions of a region that have been impacted by wildfire can can
[1:49:12] change drastically and this can modify the um the soil particles um the space within the the soil
[1:49:22] the structure of the soil itself so oftentimes this can influence things like recharge rates where in severely
[1:49:30] burned regions the soil structure has been destroyed and infiltration is not occurring as readily as it would
[1:49:40] naturally so this could decrease infiltration rates this could um you know lead to less recharge potentially happening to
[1:49:50] to the groundwater um and again it can be uh very homogeneous and variable depending on your region
[1:49:59] but if if for example you have an extreme wildfire event and and the soil is is destroyed or the soil has been impacted
[1:50:09] severely um infiltration could decrease so you could have less recharge to those aquifers aquifers um um and
[1:50:17] and also the wildfires can lead to increase in runoff in watershed due to the lack of the
[1:50:23] vegetation vegetation leading to things like landslides which can heavily impact the watershed watershed as well as the surface water in the region thinking
[1:50:34] about water quality and sediment loading and things like that and um i also wanted to mention that in part
[1:50:42] five of our previous flyers training that we held last summer um it focuses on um hydrology based applications um so
[1:50:54] assessment of the watershed post fire um so do take a look at that we have um our great uh water resources trainers
[1:51:05] who gave that session provided some more information about that as well okay okay if we scroll down to question four
[1:51:17] the question is what are some examples of heavy fuels another great question heavy fuels can be things like large tree branches logs
[1:51:26] buildings and these generally are considered to require more energy and they they once but all right everyone i believe my audio
[1:52:02] was lost there for a moment but i hopefully am back now looks like my speaker is working again
[1:52:11] maybe some connectivity issues on my end but i was referring to this question four about heavy fuels
[1:52:18] i've also included um some examples of light fuels um things like grasses grasses and shrubs shrubs and and as well as um thinking about
[1:52:31] uh uh ladder fuels and what those what those mean so there's a great resource um from the
[1:52:39] forest service i've provided the link there it's a it's a little fact sheet that talks about fuel different fuel
[1:52:45] types types for wildfires okay okay um um question five this question um is asking to account for multi-year drought
[1:53:00] events instead of starting or ending the fire season on fixed dates could remote sensing be used to assess
[1:53:07] landscape conditions such as soil moisture evapotranspiration vegetation indices to determine a temporarily dynamic fire season and the answer there is yes we saw that
[1:53:21] with some of our climate engine example um you can assess these variables via remote sensing and climate models
[1:53:29] um for multiple different time scales and and you can select in climate engine in particular the the
[1:53:36] benefit of that is the ability to select different time periods um and run that analysis and make the
[1:53:43] maps in real time to whatever kind of time period you're interested in now that is to say you are limited by the
[1:53:53] remote sensing record in terms of your time period of interest um you're limited by um the when the satellite was launched um the
[1:54:05] and the temporal resolution of satellite overpasses in a region so um you have to consider that if you're
[1:54:12] thinking about assessing um you know historic wildfires or even into the future as some of the satellite
[1:54:20] sensors sensors may be decommissioned so that's something to consider as well but yes the short answer is yes and you
[1:54:29] can assess things at different time scales scales you can also look at anomalies of these variables as we saw um using something
[1:54:37] like a 30-year climatology we often look at something like 1980 to 2010 um as the the average and then you you
[1:54:46] pull the anomalies off of that climatological average and there are issues with that of course as well but
[1:54:52] that's a good estimate to use in terms of seeing how different the current conditions are from from normal
[1:55:03] okay okay so so moving on to question six how can individual height of trees be calculated through sar without lidar
[1:55:12] data or 3d data is it possible from a sentinel one image to achieve this and and uh the short answer there's no um
[1:55:20] sentinel one data it's very difficult to identify individual trees as far as i understand it and i will caveat that with saying i am
[1:55:29] not a sar expert um i am more of an optical person so some of you online may even be more well
[1:55:36] versed in the use of star data than than i am but i would say that you can estimate poor
[1:55:42] stand height more generally for um regional forest areas and we have covered this in a recent our
[1:55:50] set training i've also linked to our um our our tsar training that i mentioned um that we gave last year on on forest
[1:56:01] uh uh estimating forest uh height so we had our final lecture for that one i believe it was the session four was um focused
[1:56:11] on the use of star data for fourth stand height gave some examples from the eastern u.s we had a great guest speaker
[1:56:18] online for that training so i would say take a look at that for more of those technical details about
[1:56:25] estimating um tree height and fourth fan height through the use of star data it is a it
[1:56:31] is a really important component when thinking about wildfire activity um if you're interested on the dynamics and on a really small scale
[1:56:40] um or a very specific area of interest um so i will say that that it's a useful piece that we didn't cover
[1:56:49] in much depth during this training but we have some other resources available for you there okay okay um
[1:56:57] um so the next question is an interesting question and i honestly didn't know the answer right off hand and it might take
[1:57:04] a little bit more investigation but the question is what resolution does the fwi have so that the fire weather
[1:57:11] index index and it does depend on the data in which you are using to calculate those other
[1:57:18] indices like the initial spread index and the def moisture code the the variables that go into that calculation are going to define the
[1:57:28] spatial scale um um we've provided a link there um about more information on the fire weather index there
[1:57:38] but i will say in doing a little bit of an investigation there's another great website that we didn't mention
[1:57:46] much much here here but it's called a resource watch and you may be familiar with it through the use of looking at other data
[1:57:56] sets but one of the one of the data sets that they have on resource watch is the fire weather index and this is
[1:58:04] actually actually a global fire weather database and it's uh processed and run by some folks at nasa goddard and in in
[1:58:15] that data set that they provide on resource watch they state that the global daily calculations of the fwi
[1:58:25] system system using these inputs such as relative humidity temperature wind speed a variety of variables they are uh
[1:58:36] providing the data from 2015 to present at a one degree resolution so that's going to really depend on um
[1:58:44] where you are in the world a 0.1 degree resolution what that looks like in terms of kilometers
[1:58:53] um but that's what they have provided us some of the details there there and we can certainly provide a link to
[1:59:02] resource resource watch watch in the q a for reference later as well it's not explicit on the canadian
[1:59:12] website anywhere that i found so that's a really good question okay um i think we can go and answer a
[1:59:25] couple more questions and then maybe um see how how we're going with with climate engine to see if anyone is able
[1:59:32] to access it if we should um give some time for lap time or have folks try to
[1:59:36] access it at a later date uh looks like it's loading for me i just tried it again so
[1:59:42] but we'll go through a few more of these questions questions uh uh so the next question asks is there a
[1:59:48] relationship between fires and el nino and la nina and the the short answer is yes yes um
[1:59:55] um and so are they el nino southern oscillation um affects temperature and precipitation patterns globally globally um so depending on
[2:00:05] your region of interest and depending on the phase of and so if it's in a la nina
[2:00:11] or an el nino um this can impact the uh the conditions that can influence wildfire outbreaks so
[2:00:21] for california for example um when we when we are in a la nina we generally see decreased precipitation especially
[2:00:30] in the northern port portions of california and that can lead to increased drought and and conditions that may be more
[2:00:41] prone for wildfire outbreaks um and in other regions of the world uh the phase of enso may
[2:00:51] uh change those precipitation and temperature patterns in uh different ways so um just depending on where you
[2:00:59] are in the world and the the current face um it can definitely impact wildfires wildfires um i also wanted to mention that in our
[2:01:08] bolivia example we didn't talk through it too much today um but research has has shown that um
[2:01:15] the outbreak that occurred in 2020 in bolivia may have been um largely impacted due to the atlantic
[2:01:23] multi-decadal oscillation another climate oscillation the amo um it's a longer scale uh climate oscillation so it stays within one phase
[2:01:33] uh for longer periods of time um um but they are currently in a phase that results in uh warmer and drier
[2:01:42] conditions in bolivia and they have been for for many years at this point and so there they there is research that
[2:01:49] suggests that the um outbreaks in 2019 and 2020 um may be partially related to this um phase of the climate oscillation
[2:01:59] there there um um i've also linked a paper on the global effects of enso on wildfires that i
[2:02:09] found in doing some quick search so do take a look at that for more information there okay the next question question
[2:02:19] nine is there any agency-led effort developed to develop new fire weather indices indices the short answer to that is maybe i just
[2:02:29] might not be aware of it um as nasa we're we're not necessarily an operational agency um so we're really
[2:02:37] focused on the use of data and the dissemination data um through through trainings and things like that so there
[2:02:45] quite possibly could be and i'm just not aware of it i will say that the u.s forest service and usgs uh work together
[2:02:53] to produce data and to serve data on fire danger um and i'm sure there are other efforts
[2:02:59] that i'm just not aware of maybe some of you online know know about other efforts um um i i did find this uh resource on the
[2:03:08] usgs forest service fire danger forecasting project um that's really focused on the dissemination of some of the the fire danger data
[2:03:18] um and also i will say it might depend on your your area um i'm sure globally there are efforts
[2:03:26] within countries and agencies in different regions to assess fire danger um so um short answer there is probably
[2:03:37] and i'm not aware of specifics myself so so um okay so i think the next couple of
[2:03:44] questions questions start to focus a little bit more on climate engine so i'll um answer a few
[2:03:51] of these as as i can here um um [Music] [Music] question 10 the question is are you able
[2:03:57] to customize your search preferences within the variable for example i'm interested in the percentage of time for
[2:04:08] for june july august uh i think they're referring to maybe a step in the exercise um 28 c
[2:04:17] let's see what twenty [Music] [Music] um um i'm not sure what that that variable is offhand but i will say that depending on
[2:04:28] the variable of interest if you go to um your processing it's actually i it's actually under processing and then
[2:04:38] calculation i wrote statistic there but under calculation you have a variety of options options for for running different statistics so you can
[2:04:48] do things like just the total values but you can also do things like the difference from average the percent
[2:04:55] difference from average percent of average um and you can also look at slope um and correlation um for a variety of different things so
[2:05:07] the answer there is yes there are some statistics that you can use that are pre-programmed within climate engine
[2:05:14] that are there for you depending on your variable of interest um and you can just take a look at those options in the
[2:05:26] under processing and then calculation on the the left-hand panel there in climate engine okay okay so if we scroll down to question 11.
[2:05:45] can we use all of these analyses analysis results as a server service to download them further oh yes so if you
[2:05:53] are making a map there are a couple of different options here so if you're making a map you can
[2:05:59] go along the top hand panel and go to download and you can select a rectangular image and then download
[2:06:08] the map download that square or the rectangular image as a geotiff you can also download it as a pdf
[2:06:17] and um and i will say the other option that you have is if you are making a graph which
[2:06:23] is something we didn't go through for the canada example but we have a brief bit of that in the bolivia um example
[2:06:33] where you can make a graph for a particular region and then download the data as a csv or a
[2:06:39] png and then you can you know export it as you'd like and use it in other software as well
[2:06:46] um i did see one comment uh in the questions that um somebody was having an issue with the
[2:06:54] way the data were downloading like the um i believe that the entire rectangle maybe data weren't being downloaded for the entire area
[2:07:04] that they selected um i'm not aware of that as a common issue but that might be a question to ask the
[2:07:14] um climate engine developers um so we could take a look at their website and see if there is a
[2:07:21] a like help email to ask them about that uh that's not something i'm specifically aware of um but that might be an issue
[2:07:29] um either based on a lot of folks trying to access climate engine right now or um maybe a common um bug that they're
[2:07:37] seeing on the site i'm not sure but you do have some options there in terms of downloading
[2:07:43] data as geotin uh okay so the next question have you had any luck downloading or analyzing the hazard layer
[2:08:00] um in climate engine do we need to process or treat them differently given that they're usually somewhat static
[2:08:09] right um that's not something i've really looked at much i know that it's a newer feature um on climate engine and uh
[2:08:19] and it includes but it does include a lot of interesting variables like burn probability probability um um risk to potential structures which is
[2:08:29] probably a relatively more static um calculation if you do go to i will say um if you do go to the
[2:08:39] little yellow question mark on the make map panel you can click on um um the the uh
[2:08:48] uh the the data set and get some information on the metrics um in particular the wildfire risk to communities uh
[2:08:58] data sets there and um the these data are primarily serviced through landfire and it does mention that they um some of
[2:09:10] the data like the fuel loading data set is from 2014 so as you mentioned that is a more static
[2:09:17] layer layer so yes i think you would need to depending on what you're using the data for in your analysis
[2:09:26] really keep that in mind of what the when those data are representative of the landscape conditions and
[2:09:34] in comparison to maybe some of the climate variables or the the variables that are changing um on a shorter time scale and how
[2:09:44] that relates so i will say that um those data sets were created by the forest service and um they can be accessed mostly i
[2:09:53] think through landfire as well so you can get more information about um each individual and what year was
[2:10:00] produced and how it represents um the the landscape for that given time period um um but that that's a really good question
[2:10:10] um and also a good a good comment about comparing data that are changing more rapidly alongside data
[2:10:20] that are not so looking at things like topography and slope and aspect um that's not going to change much um
[2:10:29] but then when you're when you're also tying in the factors um like precipitation anomalies um the they are
[2:10:38] changing at different time skills so that's a good point and something to keep in mind as you're analyzing risk in your region
[2:10:53] question 13 is a really interesting question question and i will say it just varies depending on what type of data
[2:11:00] that you're looking at um um so the question is who provides the data for each of the search engines groups
[2:11:09] organization weather bureaus forestry nasa noaa esa how is it verified great question so um it depends on the variable of interest
[2:11:20] like i just mentioned this wildfire ristic communities layer is produced by the usda4 service um um i will say
[2:11:29] that that climate engine uses uses google earth engine as um so the back end computing so this
[2:11:39] is just a essentially an api that's that's uh generated off of earth engine and earth engine pulls data from a variety of different
[2:11:51] places oftentimes pulling data directly from things like the distributed active archive centers or decks so for a lot of
[2:12:02] nasa produced data um the dax are the official service um repository for data and they have uh
[2:12:14] been been qaqc'd they have all of the associated metadata metadata there's a real clear process on how
[2:12:24] those data are taken from the the sensor processed delivered into specific products and they have a very specific process outlined on the
[2:12:36] dax dax um um climate engine and earth engine is just essentially pulling that data um through cloud computing um
[2:12:47] the places that the data are officially being served so if you want more information on the the quality of the
[2:12:55] data data and and all of that type of stuff you would probably want to go to some place like
[2:13:01] the dax um one example of um this interplay between these different agencies in terms of delivery and services
[2:13:13] landsat it's a great example of a collaboration between nasa and the usgs so so nasa built builds the satellites sensors
[2:13:22] they launch the satellite once the satellite is up and running and data is being served the usgs is the
[2:13:30] agency responsible for pulling the data um organizing it processing it generating specific products and serving it so this is a really um interesting
[2:13:44] connection between these different organizations and so it really varies um you know for a lot of the the esa
[2:13:52] satellites um it's more uh uh included within the whole esa ecosystem so most of the esa data such as sentinel 2 is provided
[2:14:08] through the copernicus dac um or data portal if you will um and that's also run by esa itself so
[2:14:17] it's a really complicated question but it's really interesting um to think about so um and then and then i will say
[2:14:26] you know places like the forest service or different weather bureaus or even local state agencies might use data from
[2:14:35] nasa or usgs and then uh create their own products um and landfire is a great example of that where they are pulling
[2:14:43] in data from you know things like landsat but they are including their own data and expert analysis to create different products as
[2:14:54] well well and serve them through various locations so so great question a complicated answer okay uh this is also a very good question um
[2:15:15] 14 asks if they're wondering if the bolivia data graph with increasing fire counts over time discriminates between wildfire and
[2:15:25] intentional fires for clearing if not would that be possible i don't believe that it described the graph that we were showing in the
[2:15:33] lecture discriminates between that whether or not it was intentionally created i did note in the bolivia example that
[2:15:43] many of the fires that are seen in that region are used for clearing land uh many times for agricultural purposes
[2:15:54] so many of the fires in the region are are are are anthropogenically anthropogenically produced and are serving the purpose of clearing land for
[2:16:06] agricultural production it's the most common um way to clear the dense forest um in this region and in some of the
[2:16:16] resources we provided on the bolivia fires they they comment on that um quite extensively that um fires are seen
[2:16:25] as a normal part of the landscape oftentimes due to this clearing activity and um most much of the land is is um locally owned um
[2:16:37] and so the clearing is is happening on a regular basis but the fire outbreaks in 2019 and 2020
[2:16:45] were um more extensive than what was observed what's observed on a normal year due to clearing um
[2:16:53] um i will say that i mentioned the um severe amazonia dashboard and on that dashboard they it's really focused on near real-time
[2:17:05] monitoring of fires um so not not necessarily this pre or post-fire that we're talking about in this training
[2:17:12] series but they um they do uh discriminate um um fires based on the the what burn i believe they uh outline things
[2:17:26] like it's an understory burn for example um but i also don't think they discriminate between if it was if
[2:17:34] it's a purpose purposeful burn or if it's just a um you know wildfire incident that occurred due
[2:17:41] to you know something like a lightning strike it's a really great great question um and i will say that there may be
[2:17:50] regions regions um where there is some like local or state statistics on on um land clearing type burning prescribed
[2:18:01] burns versus uh wildfire events um but that's probably probably dependent on your region and i'm not aware of
[2:18:10] specifics on that very good question though okay okay maybe i'll just go through a couple more questions i see that we do have a few
[2:18:35] here that we haven't quite answered yet um i'll go through a few of these and then maybe i'll um
[2:18:44] maybe we'll go to for a few more minutes and then we'll pause here and allow you guys some time
[2:18:50] to sit quietly and go through the lab it looks like climate engine is working again um maybe fewer of you are actually
[2:18:58] online using it right now um but i'll go through a few more and then i'll i'll take a pause
[2:19:04] and and we'll come back on as needed for answers to specific questions on the exercise so so um the next question is lack of
[2:19:19] precipitation can increase stress and converse this can make them more vulnerable to fatal attacks by insects like western pine beetles yes
[2:19:27] does this increase fire risk outside of just the heat and lack of precipitation that the area is already experiencing um
[2:19:34] i would say yes the the uh mountain pine beetle outbreak has been very extensive and especially in
[2:19:41] the western us in places like the california colorado and the rockies and the sierra and and in just as as the question uh mentioned
[2:19:53] the the mountain pine beetle attacks can be fatal to the trees which and then in turn drives them out which
[2:20:04] when a fire does come through can lead to um increased spread um the fuels then are drier
[2:20:13] um um they can that can increase ignition of fire and spread certainly in in these regions and so
[2:20:22] it is this two-fold risk that's occurring occurring um um on on on the forests where um you know the
[2:20:30] attack from the mountain pine beetle can then lead and make the region more susceptible to larger fires and provide
[2:20:37] more fuel drier fuel at least for the um wildfire spread in this region so it's a great point and um another
[2:20:48] another thing to to think about and and i will say that a couple of years ago we
[2:20:54] did a training on um assessing assessing uh uh land cover changes using land trender which is another um sort of gui
[2:21:06] built off of earth engine and we looked at mountain pine beetle uh infestation in colorado and changes we i
[2:21:15] think we used ndvi maybe nbr to look at changes in the uh forest health in that region so
[2:21:22] that's certainly something else you could do is take a look at changes to vegetation health in regions that we
[2:21:32] know we have mountain pine beetles spread spread and you know think about that in terms of the risk to to wildfire
[2:21:41] in that region question 16 is a pretty specific question i don't think i have an answer to
[2:21:57] to it's asking um interested in your thoughts or experience incorporating landfire into spread models um for um areas of interest in
[2:22:07] in earth engine i'm assuming and workflows for export exporting covariates or generating functional group ratios um similar for post recovery monitoring
[2:22:19] i honestly don't have specific experience with that so unfortunately i am unable to address that question specifically
[2:22:29] specifically um i certainly could ask some of my colleagues that may have more experience looking at spread models
[2:22:39] that's not something i've done unfortunately uh question 17 um is it possible to produce normalized burn ratio from pre and
[2:22:56] post-fire data yes we will do that next session session very extensively um so that'll be uh and i guess that's
[2:23:04] another another uh point for me to give as a plug for our next session um we will be using google earth engine
[2:23:14] more more directly directly through javascripting through the earth engine coding interface to do pre and post nbr calculations and to create
[2:23:27] a a burn severity map for both of these case studies so we have an example from linton canada where
[2:23:34] we're looking at the same fire and then the bolivia example as well um so so the short answer is yes and stay
[2:23:41] tuned and do please come back for um our session on thursday where we'll we'll do this in much more depth and
[2:23:50] and um i will say if you haven't done it already um acquiring an earth engine code editor
[2:23:57] account and at least opening that interface up and having a little bit of familiarity with it will be really
[2:24:04] beneficial for you we're not going to be reviewing the uh sort of an intro to earth engine
[2:24:11] code editor we do have scripts available for you um where you can run um the analysis yourself but i won't be
[2:24:20] going through sort of the basics but there are a lot of resources for that um on um provided by google
[2:24:28] as well so um plug for that um um and and and so come back come back thursday and
[2:24:38] we'll go through that in much more detail but that is the way that we will analyze our post-fire impacts
[2:24:43] and burn severity um okay so i will go ahead um now and take a little break um i'll take a look at some of these
[2:24:53] other questions that we've come that have come through um but i do want to give everyone a little bit of time to
[2:24:59] just sit quietly and work on the the lab as as they'd like um and i'll come back if we see some
[2:25:07] common questions or you know potentially do a little screen share if there are um some issues around a certain variable or
[2:25:15] function um with the exercises um um so i'll just pause here but i will remain we will all remain online until
[2:25:25] the top of the hour so just a little over 30 minutes if you'd like to work through anything and in the meantime
[2:25:31] i'll take a look at some of these other questions and pop on if need be but i will say that
[2:25:38] our q a document will be made available to everyone so for the questions i didn't get to live
[2:25:44] today today um i will we'll be typing up our answers and we'll be posting that on the website
[2:25:52] um so you can come back if you're if you uh your question is a little lower on
[2:25:57] the list here that we haven't gotten to yet you can come back and take a look at
[2:26:00] that give us a little time give us about a week or so to come back and edit this
[2:26:04] document and get it online for you but you'll be able to come back there as well um and then of course the recording
[2:26:11] will be posted too and then you have um for the two exercises today you have that step-by-step guide that you can
[2:26:19] reference as well to get to get through everything so um great so i'll take a pause here we'll remain online um and
[2:26:26] you know continue to feel free to ask questions as they come through um and and best of luck uh working on the
[2:26:34] exercises for today all right everyone um this is amber back again again um um didn't see too many of the same types of
[2:26:57] questions with climate engine so hopefully you all are working through the exercise just fine um um we
[2:27:05] we are available via email we've included our email addresses um in the lecture if you have additional
[2:27:13] questions questions about climate engine or um specifically pertaining to the exercises themselves um we we are available for that um i
[2:27:23] also wanted to mention that um do be prepared for part two on thursday we are going to be working through
[2:27:33] an example using um earth engine so we'll be doing some um some coding with that we will provide you with the scripts to
[2:27:42] go through them um similarly to the way we we organize today's session we'll have a lecture then a little bit of q a and
[2:27:50] then some time for you all to work independently and ask questions and then of course we can come on and
[2:27:58] show our screens if there are some common questions popping up um i will say we also will be going
[2:28:05] through the canada fire example very explicitly on earth engine and then we will leave you on your own to go through the bolivia
[2:28:15] example example as we did with today's um exercise as well well um so be prepared for that
[2:28:24] um and then the the uh link for the earth engine code is available on the presentation for thursday's lecture as
[2:28:33] well so you can access it that way um i also wanted to mention that we will have one homework available and i
[2:28:40] believe that is also on the website now so if you attend both sessions and complete the homework within two weeks
[2:28:48] of thursday then you can receive a certificate of completion for the course so i wanted to make note of that i'll mention it again
[2:28:56] um on thursday as well it is a google form with um just a standard set of some
[2:29:03] questions questions um that you can go through and you're not being graded on that it's it's uh
[2:29:08] just as as long as you go through and answer those questions you'll get some um um feedback on on the answers to those
[2:29:16] questions but it's not uh graded so we are right at the top of the hour um i
[2:29:22] again want to thank you all for joining us today um i also we welcome feedback on um our different
[2:29:30] styles of our trainings we're trying out some new things we'd love feedback on what you all would like to see more of
[2:29:38] um in the future too so i'll be mentioning this next time but we will have a survey that will be emailing out
[2:29:43] to you all at the end of the training um that we'd love to get your feedback on
[2:29:47] for for future trainings um so thank you all again and i look forward to being on with you
[2:29:56] again on thursday so thanks and and have a great day you
