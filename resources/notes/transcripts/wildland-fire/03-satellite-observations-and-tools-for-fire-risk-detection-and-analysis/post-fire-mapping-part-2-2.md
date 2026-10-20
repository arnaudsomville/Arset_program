# Post-Fire Mapping, Part 2/2

`https://www.youtube.com/watch?v=poWjCS3bxb0` · id 202 · 2:18:51 · module 124 — Satellite Observations and Tools for Fire Risk, Detection, and Analysis

[00:02] hello everyone thanks for joining us for our second session for this advanced training on pre and post-fire monitoring
[00:11] my name is amber mccullum and i'm joined by my colleague juan torres perez we are also really grateful to have two
[00:17] colleagues from nasa's develop program who will be joining us for our q a for um the google earth engine for part two
[00:25] so we have brittany boudry and haley pippin pippin joining us today so we're really grateful to have them as well
[00:33] just a little overview of the logistics uh for this training we have two sessions we had our first session on
[00:39] tuesday and our second session today um each of these sessions if you were with us last time um contain a lecture
[00:47] a hands-on exercise a question and answer session and some lab time where we will remain online to um help you
[00:56] with questions as you have them as you work through the exercises of this training training you can find all the course materials on
[01:03] the website listed here including the exercise documents um for the last session and then for the exercises for this session
[01:12] they are actually just google earth engine code and we have links to those later on in the lecture
[01:18] there are two prerequisites for this training first you need to have an understanding of the basics of remote
[01:25] sensing and we've linked our fundamentals of remote sensing training here and then second we had this really
[01:32] great um fires training this last summer where we looked at pre-during and post-fire activity activity and um it's a really great background to
[01:44] some of the um pieces that we'll dive into a little more deeply here i will say that some of the slides from this
[01:50] session are an overview from from that training but we'll definitely go in more depth here and i want to encourage everyone to ask
[01:59] questions along the way as we go through this lecture you can type them into the q a
[02:04] and we'll try to get to them at the end if for some reason we don't get to your
[02:09] question you can always email myself or my colleague juan torrez perez here and then also as a reminder we do
[02:17] catalog all the questions and the answers to those questions and post them on our website at a later date so give us about a week
[02:26] or so to get those organized and then you can check back and have those answers for reference
[02:32] for this series we have one homework assignment and the link to the homework is available now so you can go to the training
[02:41] website and access the homework there it's a google form form and you can submit all of your answers
[02:48] on that google form the homework does contain questions from last session as well as this session so
[02:56] just keep that in mind once you've completed that and if you attended both of our live webinars you
[03:03] um can receive a certificate of completion completion and those will be emailed to you within about three months this does take
[03:12] a while because we have such a large group so do give us time to get those certificates out to you
[03:22] as i mentioned the series has two sessions we talked about pre-fire monitoring in particular climate conditions and landscape conditions
[03:31] that that influence fire ignition and spread and then today's session we're really going to focus on that post-fire mapping and
[03:41] monitoring for this training series uh these are the objectives by the end of the training you should be able to identify
[03:52] land cover and climate variables related to wildfire risks so that's what we talked about um last session and be able
[04:00] to access and display uh wildfire risk data layers and then today um you'll you should be able to create a burn severity
[04:08] map using satellite imagery as as well as calculate burned area statistics and we'll be doing those hands-on activities
[04:16] in google earth engine and so given that i want to remind you all that you need to sign up for an earth
[04:25] engine account if you haven't done so already we've provided the link here it's free you don't need a gmail
[04:34] address address that's something that has recently changed changed and hopefully you um saw the instructions for this ahead of time but
[04:44] if you have not signed up for a google earth engine account no worries you can do this later and you can always come
[04:50] back to our code um at a later date and work through that so as we discussed last session we have
[05:00] two case studies that we're focusing on to provide examples of pre and post fires fires the first example is the the litton um
[05:10] creek fires that broke out in canada this past summer during that really intense heat wave and then we're also
[05:18] focusing on um a massive outbreak of fires in bolivia in 2020 and then the hands-on exercises will
[05:29] focus on both of these so we have um today we have two hands-on exercises in earth engine one for canada one for
[05:36] bolivia so similarly to how the last session went so here's the agenda for today um first we're going to review some
[05:46] post-fire assessments then we're going to discuss burn area and burn severity mapping and then we'll mention a few tools for
[05:54] post-fire mapping and then we're going to talk a little bit about google earth engine for those of you who may not be as familiar with
[06:02] it it um some of the benefits of using this this software and how to use it for conducting assessments of
[06:10] remote sensing imagery and after the lecture portion we will have time for a q a and then as i mentioned we'll stay
[06:19] on for lab time um where we may be quiet for a while allow you to work through the the code but then maybe
[06:27] come on and um address any issues that you all are having um that are very common or things like that so we'll just
[06:34] see how that part of the session goes okay so now let's review um what we take into account when we think
[06:44] about post-fire assessments as with the first lecture um some of these slides are a review of our
[06:52] training that we provided um last summer so um i do encourage you to check that out for more information too
[07:02] while there is a myriad of post-fire impacts that affect our ecosystems and infrastructure infrastructure it's important to remember that they are
[07:10] a natural part of forest grasslands and tundra environments following a fire the impacts can include a release of carbon dioxide and soot
[07:20] particles into the atmosphere thereby influencing climate we see a change in soil chemistry and a reduction in soil fertility
[07:30] we often see destruction of vegetation leading to increased runoff or soil erosion erosion and it also influences the nutrient
[07:39] cycle cycle and and the ecosystems and wildlife that are present in this region when we conduct post-fire assessments
[07:50] from a remote sensing perspective we are usually interested in burn severity which is a function of fire intensity
[07:58] fire intensity is the amount of energy or heat released per unit time or area and can be described by a variety of
[08:07] fire intensity metrics traditionally fire intensity is considered the rate of energy or heat release per unit time per unit length of
[08:17] the fire front regardless of its depth fires of different intensity tend to look very different and have the ability to burn vegetation
[08:27] and soil to different degrees so it's really important to keep in mind this intensity piece and it's really a
[08:35] major factor in determining the severity of burning burn severity is the most mappable metric for post-fire assessment
[08:46] burn severity is the effect of a fire on ecosystem properties and is often defined by the degree of vegetation
[08:53] mortality mortality usually we think about burn severity as a way to measure the degree to which the site has been altered or
[09:01] disrupted by a fire with severity determined by the fire intensity and the residence time soil burn severity is also an important
[09:13] factor in assessment of overall burn severity severity fire induced changes in physical chemical and biological soil properties
[09:22] impact the hydrological and biological functions of the soil severely burned soil contains less organic matter but more available nutrients
[09:33] burned soil also makes landscape more vulnerable to erosion and runoff so we can see large scale impacts on the watershed after a fire
[09:46] so here we have a figure to summarize the effects of fire on the land surface and this illustrates the effects of fire
[09:53] intensity on above ground vegetation as well as on below ground soil properties you can also see the transition of
[10:02] landscape properties from the during fire stage to the post-fire stage so when we talk about burn severity
[10:11] we're typically referring to the changes in both vegetation and soil properties although with remote sensing we're really monitoring that vegetation aspect
[10:22] most of the time so before we dive into the use of satellite sensor data for post virus
[10:29] assessments assessments it's really important to mention some of the ground-based methods um that we attempt to approximate with
[10:36] remote sensing so having these measurements is always really important to compare with our imagery field burn severity assessments often
[10:47] complete a composite burn index or cbi the cbi was developed to assess fire effects on vegetation and soil
[10:56] cbi plots rate the burn severity for substrates herbs low shrubs small trees tall trees intermediate trees and big trees
[11:07] so each of these categories are related to to determine the burn severity ratings are then averaged for each
[11:14] category and then across all plots to provide burn severity rating for the entire study area this index is particularly useful for
[11:23] comparison with satellite-derived burn severity severity ground-based assessments of vegetation regrowth often look at post-fire tree injuries and determine tree mortality
[11:35] over time after a fire event some trees are injured rather than completely burned so these assessments account for
[11:43] mortality over time related to field injury injury field observations of vegetation regrowth can also provide information that we can compare to the remote
[11:54] sensing imagery so from a remote sensing perspective we usually assess post-fire landscape impacts with two metrics burned area to determine the spatial
[12:07] extent and location of the burn scars and then burn severity that we've been talking a lot about here which is the
[12:14] relative impact of the fire on the landscape landscape so we'll go over this a little bit more
[12:18] in the following slides but here you can see an example of burned area and burn severity severity with these two metrics we're able to use
[12:27] remote sensing imagery to assess the extent and magnitude of fire impacts over large areas we can also assess the landscape long
[12:38] after the fire in order to assess regrowth regrowth in remote sensing assessments of vegetation regrowth we typically use
[12:46] vegetation indices like those that we discussed last session like ndvi for example example as well as land cover classification
[12:53] methods which we also discussed last section section um and the presence and health of vegetation over time
[13:01] so so um well this is not something we'll cover today in our hands-on exercise we've talked a lot about the use of
[13:11] vegetation indices um and you can use those for post-fire assessments as well generally generally looking at the vegetation regrowth for a
[13:23] year and two years post the fire we can start to see um some of this vegetation uh grow back so
[13:30] this is an example from central queensland in australia where this was actually a coal mine rehabilitation but it provides similar
[13:40] attributes of how long it takes for the vegetation to grow back in these regions okay so now let's let's take a a deeper
[13:52] dive into burned area and burn severity mapping first it's important to understand how optical sensors use spectral information
[14:02] to examine vegetation conditions under typical circumstances so here we have a spectral response curve of vegetation plotted over the
[14:13] electromagnetic spectrum from 0.4 to 2.6 micrometers micrometers in healthy vegetation there is a relatively high response in the green
[14:23] portion of the spectrum due to chlorophyll pigmentation and there is also a very high near infrared response due to the
[14:33] healthy plant structure and a relatively low response in the mid infrared due to water absorption so this is a typical
[14:42] curve of healthy vegetation so when we compare that healthy vegetation vegetation to those of burned areas we notice some
[14:53] really stark differences you can see pretty clearly from the spectral response curves of the low moderate and high burn severity that you
[15:03] can see here where healthy vegetation has that really large peak in the near infrared bare soil and burned areas have much
[15:11] lower peaks in the near infrared and in the case of high severity burned areas there's much less response in the
[15:19] near infrared you can see that healthy vegetation typically has low reflectance in the shortwave infrared but burned areas have
[15:28] high reflectance in those wavelengths with these spectral characteristics we can identify burned areas and distinguish them from healthy vegetation
[15:40] to take advantage of this difference in spectral response between healthy vegetation and burned areas we use the
[15:48] normalized burn ratio or nbr to map post-fire conditions nbr uses remote sensing data in the near infrared and the shortwave infrared to
[15:59] map burned areas and ultimately this can help us assess bird severity you can see how this calculation is
[16:06] completed here on the slide and similar to ndvi mbr is a unitless value value ranging from negative one to one
[16:16] a high nbr value that is closer to one indicates healthy vegetation while a low value that is closer to
[16:23] negative one indicates recently burned areas and bare ground nbr is com is a commonly used metric for
[16:30] identifying areas where vegetation has recently burned during a fire here you can see an example of the mbr
[16:38] in action the images show pre during and post and vr from the mendocino complex fire and this was a really large fire that
[16:47] occurred in california in 2018 and the red area as you can see outlines where the fire occurred
[17:00] nbr is also critical to burn severity estimates to estimate severity we compare nbr pre and post-fire using the
[17:09] difference normalized burn ratio or dnbr here we have a super basic run-through of how this works first we calculate the nvr prior to a
[17:20] fire fire and then after a fire and then we take the difference between those two images you'll note that the dnbr is calculated
[17:28] by subtracting the post-fire nbr from the pre-fire nbr once dnbr is calculated an analyst will need to threshold the dmbr values into
[17:39] classes of low moderate and high burn severity to produce a map that looks like the one that you can see here on
[17:46] the right where the high burn severity areas are mapped in red there are suggested thresholds for burn
[17:55] severity mapping and when we go through the example today we're going to be using one from the u.s
[18:01] forest service and it's a great starting point and a really commonly used thresholding but you can also modify this based on
[18:10] your region and if you are more familiar with with the area so we'll be going through all of these steps with both of
[18:17] our exercises today i also wanted to briefly mention um a variant of the difference normalized burn ratio and this is called the
[18:28] relativized difference or normalized burn ratio or rdnbr and this was developed in 2017 and the rdnbr attempts to
[18:40] account for differences in vegetation in areas with high or low vegetation cover cover so it measures the relative change in
[18:48] regard to the pixels for example sometimes areas with low canopy cover appear to experience low severity burning simply because there
[18:59] was less vegetation prior to the fire with the rdnbr it attempts to correct for this by noting a higher relative
[19:08] change in the vegetation loss in this area area the rdnbr is not always appropriate for use in every area but it's commonly used
[19:18] these days along with a dndr we won't be going through this for the purpose of our our webinar but i did
[19:25] want to mention it um if you're interested in conducting something like this you can take a look um at the
[19:31] citation provided in the slide here okay so now let's review a few a few tools for post-fire mapping
[19:46] landfire is a program under the department of interior and focuses on a variety of applications in the united
[19:53] states states it provides over 20 national geospatial layers such as vegetation fuel disturbance disturbance and ecological models that are all
[20:05] available to the public one such layer they provide is disturbance and this is available annually and historically for fuels and vegetation
[20:15] types types vegetation disturbance data also includes transition magnitude we also have historical disturbances data for california and you can see that
[20:29] shown here where the disturbance is mapped in red so you can see we've we've had a lot of
[20:35] disturbance a lot of large fires in california california um and you can also take a look at the
[20:40] link um here for landfire if you're interested in any of these products that are primarily for the united states
[20:49] the monitoring trends and burn severity project is also a great resource that is only available in the us
[20:57] this project provides the nbr dmvr the burns verity classifications and the fire perimeter data these maps are created by technicians
[21:08] that are familiar with the area they're working on for the analysis and as i mentioned um the project only
[21:17] works in the u.s but um it's a good idea to reference these methods um for your own burn severity estimations regardless
[21:25] of your study area and and the ntb mtbs also has a data explorer um that's really great to take a look at
[21:36] these different data layers and it's relatively new and it was also created um through the api of google
[21:44] earth engine so it sort of builds off of google earth engine as well you can explore the mtbs burn severity
[21:53] archive um however it's i believe it's currently limited um to estimates from 2019 and earlier um so it does take them
[22:03] a while to do the processing but within the data explorer you can create summary statistics um you can define your area
[22:11] you can analyze single point data by 30 by the resolution of landsat so 30 by 30 meters
[22:20] and you can also download data as a csv or a png so this is a screenshot shown here also
[22:28] of the 2018 casino complex fire in california the qgis fire mapping tool was created in partnership with mtbs and was
[22:43] developed to address the needs of users who may need to determine the effects of small fires that are below the mtbs
[22:51] burned area thresholds or if you can't wait for the um the layer to to come out before they're published so it
[23:00] facilitates the identification and processing of landsat imagery that correspond to a user specified area of interest and it also
[23:10] generates fire perimeters performs thresholding to produce burn severity images images through the use of this tool users can employ satellite-based imagery
[23:22] and derive information to produce their own bird severity estimates so it's fully open source it's freely distributed
[23:31] distributed it's available for download we've we've also also mentioned this tool in previous um our set training so you can take a look at
[23:41] the the link there um for for that and it is run through qgis so just another um thing to take
[23:49] into account so here's a quick rundown of the process that that the tool uses for defining a fire
[23:59] perimeter and conducting the burn severity assessment to give you an idea of how it works um so first you use
[24:08] another data source so you can pull data from things like world view or firms to identify a fire
[24:15] and then you can use um this in qgis to enter the fire information and order your imagery
[24:24] you then need to identify your pre and post-fire images similar to what we'll go through later on in our exercise
[24:31] and then you'll follow instructions um within the tool and download the prompts um um to walk through the steps of mapping
[24:39] the fire perimeter and burn severity so it's it's a really great option if you're interested in mapping small fires
[24:48] if you're a huge user user as opposed to somebody who is well versed in earth engine it's another
[24:55] great resource i also wanted to briefly mention nasa's fire information for resource management system or firms and firms has data available globally
[25:07] and and verbs is really focused on active fire mapping as i mentioned in the last section a lot of these tools
[25:16] have um active fire it has the full gamut the pre the during the post fire so there are a lot of different data
[25:24] sets available but i did want to mention that they have this really great burned area product from modis
[25:32] and you can select by the year and then identify burned area by the the month of that year so here we're seeing
[25:41] northern california um in 2020 where we had the this large outbreak of multiple fires and you can see that most of the
[25:49] fires here occurred in august and september september um you can also download data directly from the firm's website as well
[25:59] and i know we reviewed um g with or the global wildfire information system in our session um our first session but i also wanted
[26:08] to mention that it can be used for active fire mapping and for post-fire burned area we discussed earlier the modis burned
[26:17] area product and you can also find it here and then you can compare it to things like the near real time modis and viirs
[26:28] um um hotspot data i also wanted to highlight a really fantastic tool from the land processes distributed active archive center or
[26:42] lpdaq and this tool is called appears and it allows you to extract point and area location data for many of the
[26:52] available data sets that are provided through the lpdaq um the great thing about this is that you can view the data
[26:59] prior to downloading it you can interact with the data you can make some of your own plots and analyze the values of
[27:08] those plots and there are many data sets available and those relevant to this training are the modis and viirs burned area products
[27:19] as well as the neural time thermal anomalies for identifying actively burning fires so i do encourage you to take a look at
[27:27] this um great resource from lp doc as well okay so now that we've reviewed um an overview of
[27:38] uh post-fire mapping and provided some examples of tools you can use let's talk a little bit more explicitly about
[27:46] google earth engine which we'll be using for our post-fire mapping exercises today so so you may have already heard um about
[27:57] google earth engine you might be a super user um but for those of you who aren't um this is a great resource for
[28:05] cloud-based raster computing of remote sensing data um computing in the cloud has a lot of benefits um since you're not limited to
[28:14] your own personal computing capabilities you may also be able to process larger datasets simultaneously to reduce time that it takes to process
[28:24] data data cloud resources can also typically host and store more data than what you have available available and since the cloud can be accessed from
[28:34] anywhere anywhere you don't have to have them all with you each time you're running the analysis additionally the platform is freely
[28:46] available available for scientists researchers and developers and we'll talk a little bit about that later so the
[28:57] ge platform leverages the advantages of cloud computing and provides user with a single place for accessing satellite
[29:04] data data also for applying some of our methods and displaying results google's access to data storage and
[29:12] computing infrastructure allows the platform to host these data sets and provide access to global imagery archives archives in particular for this training series
[29:25] we're going to be looking at the archives of landsat as well as potentially sentinel 2. the ge javascript api
[29:37] and specifically the ge code editor interface which we'll be using is the most common method for interacting with ge
[29:46] it's also the most frequently used by developers and has and there are a lot of useful scripts and base codes that
[29:53] are already out there i know many of you probably have experience working with things like python python and you can also use python
[30:03] through earth engine rather than javascript um but we'll be focusing on the javascript application here um the python api is available through
[30:14] google collaboratory or colab and i'm not an expert at this i've heard it can be a little bit
[30:21] more difficult to use but that is an option option um and then google collab also specializes in interacting with jupiter
[30:31] notebooks so if that's something that you're familiar with that's a great thing to take a look at as well
[30:41] so a quick survey of some of the basic functionalities of earth engine relevant to to satellite imagery analysis
[30:50] you can do things like automation of data processing and display near real-time monitoring you can apply machine learning
[30:58] algorithms um in particular we in the past we've talked about things like random forest as a land cover classifier
[31:09] and then there are also the option to create a user interface that builds off of the coding interface and so climate engine
[31:22] is a perfect example of that so as i mentioned in the previous slide slide earth engine has a lot of potential for
[31:38] land monitoring applications applications like long-term monitoring of landscape change computation of vegetation indices snow cover looking at time series and change
[31:52] detection of land surface features earth engine also includes functionalities for calculating summary statistics statistics for running validation accuracy
[32:03] assessment assessment and then of course for visualizing these results results um so it's a really robust platform that
[32:10] includes a lot of the pieces that you would want to use for doing this type of analysis
[32:20] so i also briefly wanted to mention some of the relevant satellite data products that are hosted and available through
[32:28] earth engine so earth engine essentially is pulling a lot of these data sets from the dax that are serving them out
[32:36] whether it's via usgs or the the european space agency things like that the first here and the the
[32:46] data that we'll use today are the landsat series so the total series covers 1972 to present with data from
[32:54] landsats four through eight um i believe they'll be pulling in landsat 9 data soon as well um and then this also includes raw
[33:04] images top of atmospheric reflectance and the surface reflectance products so a lot of times we'll use the surface
[33:13] reflectance products that have already been um pre-processed and then these products are separated into tiers um where we have tiers 1 two and three
[33:25] based on how much pre-processing is is occurring occurring and um you can access the data catalog so you can see all of the data available
[33:36] on earth engine via this link i'm showing here at the bottom of the slide sentinel 2 data is also available
[33:46] through earth engine and includes the top of atmosphere and surface reflectance products the applications of sentinel 2 are
[33:54] really similar to landsat but there are a few notable differences sentinel 2 has a higher spatial resolution
[34:03] resolution it has a shorter revisit time so it's taking imagery of the same place on earth about every five days
[34:10] um but it has less temporal coverage and the data really doesn't start until 2015. so um there's
[34:17] always trade-offs when we think about the use of different sensors sensors and in our exercise today for the
[34:25] bolivia example you'll see you have the ability to modify the script in order to use landsat imagery or sentinel 2
[34:34] imagery and we'll talk a little bit about that later earth engine also contains the modis archive archive and you're probably already familiar
[34:44] with with modis modis these data are available from 2000 to present day and um it's a really popular
[34:54] um um imagery and data layer because you can receive data globally on a daily cadence it has a coarser
[35:05] spatial resolution and some of those are listed here but they do also have pre-processed products available so with modis and
[35:14] with viirs for example they'll have products of ndvi available for you already without you running the calculation yourself
[35:24] so you can take a look at the modis catalog and all of the products available from modis at that link here
[35:30] as well another data set that you might find useful is sentinel 2 and this is a synthetic aperture radar data or sar
[35:41] and it's already pre-processed and ready to go and work in earth engine um while we're only focusing on optical
[35:49] imagery for this session we have had previous rset trainings in particular i mentioned this last time as well but our forest mapping and
[35:58] monitoring with sar data training that we've provided the link for there uses earth engine and and sentinel one data for looking at forest
[36:09] mapping mapping so so please take a look at that if you're interested in this data source as well
[36:18] so i mentioned this briefly when i talked about the modis slide but there are also a variety of processed land
[36:26] cover cover layers available in earth engine so the one shown here is a data example from the copernicus global land cover
[36:36] layers data set and there are also layers in displaying the modis land cover products so i mentioned a lot of the uh products are
[36:45] readily available via modis and land cover is one of them um there are also other land cover maps available like the usgs
[36:56] national land cover databases so you can take a look here at all of the different land cover products available
[37:03] but we have also discussed how to generate your own cover map for your region region in previous rset trainings
[37:17] so that was a really quick overview of the uses of earth engine and a few of the data products that are available
[37:25] um for this training we'll be using earth engine for burn severity mapping i mentioned we'll be focusing on landsat 8
[37:32] data but you have the option to modify for sentinel 2 as an additional step if you'd like to
[37:40] take a look at those data we'll be walking through our calculation of the normalized burn ratio and the difference
[37:47] nbr nbr and we'll use some thresholding and identify categories of burn severity mapping within earth engine and i'll mention this again but i really
[37:59] want to highlight and and uh mention this un spider burn severity mapping in google earth engine training
[38:08] so large portions of the code uh we'll be presenting today in particular the bolivia example were um used directly
[38:17] from the un spider burn severity training so i really uh encourage you to reference reference that resource it's a fantastic resource
[38:26] and um what was really the basis for a big portion of the code that we created um in particular for our our second
[38:34] example um it's really flexible you can use it in different regions um and it it's it's a fantastic resource so i
[38:42] can't stress that enough um to take a look at that and and given that we are focusing in earth
[38:50] engine for exercise today there are advantages and disadvantages of earth engine we've talked a lot about the advantages already um we've talked
[39:01] about the ability for rapid processing of imagery in the cloud and the the fact that it's free for non-commercial use
[39:09] you have the ability to access and integrate many different data sets in particular the ability to monitor
[39:18] phenomena on a global scale is is so helpful and and it does have this flexible access through apis that are created off of the
[39:28] earth engine code and climate engine is a great example of this you may be familiar with global forest
[39:35] watch which is another great example of this but i will say it's not perfect there are some quirks
[39:43] um especially as you become a more advanced user there are some limitations in the processing operations and we'll actually see that if you take
[39:53] a look really explicitly in our bolivia example example um um you often cannot run batch operations that take over five minutes to process
[40:02] without a cost so i mentioned it's free for non-commercial use for researchers for non-profits but if you're a private organization
[40:10] there is a cost associated with it i'm not familiar what those look like you'd have to take a look at their website
[40:16] there there um um to see what the costs are associated with it but that is something to keep in mind um
[40:24] and then also complex processing can be challenging challenging um one feature in particular that has been challenging for me and i will admit
[40:33] i'm i'm not an advanced user um and but we'll see this as we work through the code is that
[40:39] um the the way earth engine works is it it tends to create these composite images images um where it stitches together multiple
[40:47] dates and it does this for a good reason to to help with cloud cover to help with data quality issues
[40:56] but in doing that it's often difficult to determine which pixel is from which date because it uses pixels for multiple
[41:07] dates to create the image composites um so if you're really interested in something that in doing your analysis
[41:16] over pixels all from the same image you have to be very explicit about that and we'll we'll talk about that as we go
[41:23] through the exercise but that's one thing that that sticks out to me and and as someone who has been
[41:30] a remote sensing user for for many years is something that's kind of unique um when using the cloud computing platform
[41:38] as opposed to say downloading a single image yourself and running the processing on something like um airdos
[41:45] imagine or envy or even arcgis it's a very different model so just something to be aware of as you work through
[41:55] okay and as i mentioned in session one um we are focusing on these case studies as are examples for running this
[42:04] analysis and i wanted to just briefly mention those again um so the first example is the linton
[42:11] creek fire it began on june 30th it destroyed much of the town of litton canada canada um and it occurred after this
[42:20] record-breaking heat wave where we saw temperatures reaching um nearly 50 degrees celsius which is about 121 degrees fahrenheit the hottest
[42:30] values ever recorded in the country this came as part of a record-breaking heat wave over canada and much of the
[42:38] northern uh western u.s and the fires were um a really really impactful to indigenous communities in the region as well
[42:50] um and i didn't mention this last session but i wanted to highlight this really fantastic arcgis story map that
[42:58] was created by by one of my colleagues sativa crews as well as collaborators from esri canada about this fire in particular so do
[43:10] please take a look at this this fantastic story map that that really tells the story of the fire um and this
[43:17] is available um via arcgis story maps so for the litton creek fire for this exercise we are going to be working through six
[43:30] steps steps first we're going to load a pre and post fire landsat image we're going to calculate the normalized
[43:37] burn ratio for the pre and the post-fire images images then we're going to calculate the difference difference mbr
[43:45] mbr for both the pre and post um by doing this this subtraction and then we're going to classify the
[43:52] burn severity and add a legend then we're going to calculate the burned area area and finally export the burned area
[44:00] statistics as a csv so so here is the link to the code we'll be working through this example in
[44:10] in great detail after the lecture portion is over i will mention that the code is entirely commented out for this linton creek
[44:19] example and we'll we'll talk through that and what that means as we go through the example in our second case study example
[44:30] we're focusing on this large wildfire outbreak in bolivia that occurred in the summer of 2020 and as i mentioned in the first session
[44:39] the fires expanded to large regions and prompted the government to declare a state of emergency this was linked to the amo this climate
[44:51] oscillation oscillation that generally decreases rainfall and increases temperatures in the region several ecosystems were affected not only in bolivia but in
[45:02] surrounding um brazil and paraguay and for this example um we are going to only focus on bolivia
[45:13] but i wanted to mention that these fires really burned and quite extensively in the pantanal wetlands which is the largest tropical wetland in
[45:25] the world it's really biologically diverse diverse less than five percent of the the region is protected and in 2020 um the region saw over 8 000
[45:37] fires fires and you might say well it's a wetland how did these fires spread so dramatically dramatically they were experiencing the worst drought
[45:45] in 47 years so much of the area that is typically underwater was dry which allowed for this this spread
[45:54] i also want to reference another great story map that i found while doing some research um on the these fires
[46:02] and the link is shown here and this is another great resource and information in particular about this region
[46:08] um so what we'll see in our exercises we'll see some of the burns that occurred in the bolivia
[46:15] portion but as you can see from this map here much of the wetlands are actually located in brazil as well
[46:27] for this earth engine script i mentioned earlier earlier um the um uns the un spider a knowledge portal and um
[46:38] most of the script was generated by them and was slightly modified by me um so for this one we have the option to
[46:46] use landsat 8 or sentinel 2 and we will be running through many of the same steps as the canadian example
[46:56] so for this one it's it's a much longer code it's a more flexible code i would say more easily modifiable for
[47:05] your region it also has a few extra steps like applying a cloud and snow mask and the ability to mosaic and clip
[47:15] images for your study area um and we'll also be you know running some of the same steps
[47:22] such as calculating the burned area looking at the burned area statistics and the the link to the code is here
[47:31] i will mention that we won't be going through this code in explicit detail in a step-by-step manner in the
[47:38] exercise portion for today but i encourage you to run through the code during the lab time and take a look at
[47:46] it yourself it's a really it's really great code and and you can modify it to take a look at your region in
[47:54] particular particular for this code that i've provided i have not commented everything out so as you'll see it'll run um
[48:03] automatically all of these steps will occur occur um um it's a very large code so i didn't want
[48:09] to to require you all to delete the comments for um many of these steps so um just a note there with the with the
[48:17] bolivian bolivian example okay so to summarize um um fire impacts many aspects of the ecosystem things like soil chemistry
[48:30] watershed dynamics vegetation extent and type and many other features we talked a little bit about how remote
[48:37] sensing can be used to assess the burned area extent current severity and vegetation regrowth and we also mentioned some of the tools
[48:45] for assessing post-fire landscapes such as landfire firms mtbs jewish appears and then of course earth engine which we will take a look at soon
[48:59] as we discussed last week or last session session there are many resources available here with links to
[49:07] information in particular about the fires so um as we did for our first session on tuesday for our remaining time together
[49:17] um first i will step you all through our canada example for our earth engine script script then we will have some time where
[49:27] we will answer some of your questions that you've been asking along the way here here and then we will remain online
[49:34] for the remainder of our time in this three hour session as you work through the exercises so we're here to help you
[49:41] to answer questions and this might involve involve pulling up and sharing our screen or talking through some
[49:47] challenges that many of you are seeing along the way as a reminder here is the contact information for myself and my colleague
[49:58] juan juan you again can find all the information about this training at the training website here and then i want to put a plug-in for
[50:07] the variety of really fantastic are set resources that we have for different application areas like water resources health and air
[50:16] quality quality uh disasters and and many more so do take a look at the rsat webpage if
[50:22] you're interested in running in taking any of these other trainings or in different topic areas you can also follow us on twitter where
[50:30] we'll announce upcoming trainings and things like that so let's go ahead and jump right in to our hands-on exercise where we'll be
[50:41] doing our post-fire mapping with google earth engine okay okay so now moving on to our exercise what you can see here is the
[50:55] earth engine code that was provided in the lecture so you all can take a look at this code on your computer
[51:04] you can also just sit back and watch as we talk through this code um and then you can come back to yours
[51:11] later and actually run it on on your own but i wanna um outline a few things here
[51:17] before we actually jump in um we have a lot of uh comments uh i heavily commented this code so that
[51:26] we we all know what's going on we've listed the training website here um the fact that this is our um
[51:33] written canada example i've referenced the um spider website where you can find some more information in particular for the
[51:42] bolivia example and i provided a little bit more information here about the clinton canada wildfires stuff we talked
[51:52] about during the lecture i've also outlined the steps for this exercise exercise um so as we mentioned in the lecture we
[52:00] have six steps that we'll be working through here and for this example in particular we're going to be going through the code step
[52:10] by step um in small batches and the way in which you can do that is you need to comment out all of the
[52:19] processes processes um because the way earth engine works is it'll run all of the code that you give it all at once
[52:29] so the way to just focus on a few different steps is to comment everything out and then delete those comments for
[52:35] the steps that you want to run um and once every all the comments are deleted uh it'll run the entire code and
[52:42] the way that we create comments as you can see here are with these two hash lines here
[52:49] so that's why all of this is green whenever you see a green portion that means it's commented out it's not
[52:56] actually running in the software i also want to mention that i won't be reviewing like the basics of
[53:03] earth engine um there there are so many resources available via google for those types of things things but we'll be talking through this code
[53:13] really explicitly i also want to mention that i'm not an expert in earth engine so many of you online might have
[53:22] suggestions on how to modify this code or have shortcuts or other suggestions and we're really open to that and
[53:32] especially as we try to build a larger community around some of this work feel free to to let us know if you have
[53:40] suggestions on changes and we can um you know tell tell everyone as we go through so so so just want to caveat uh as we step
[53:49] through that here um um and i also want to mention that all the comments for this code i've i've done
[53:56] the the hash signal and these these two symbols here that you can see so you can really make note of
[54:04] where um you need to delete the code and where the comments versus the actual portions of code that we want to run are
[54:12] are located and you'll see that as we work through it we also have some landsat 8 information
[54:18] here this is the imagery we'll be using for this example there's a website here where you can
[54:24] find information on all of the bands and what those are um um and i also want to mention that
[54:32] for this example example we took a look at the images using earth explorer so what we did prior to the selection of
[54:45] these pre-fire and post-fire image dates is we took a look at the imagery on earth explore and and that might not be
[54:54] a process that is very common um but for this as a starting point i wanted to start off really simply where
[55:03] we're just looking at two discrete images and i mentioned in the lecture where if we select a wide
[55:10] time range we can create earth engine will create these composite images that have pixels from multiple dates
[55:19] um with that um comes a little bit of uncertainty um so i wanted to start off really
[55:25] simply in in the the bolivia example you'll see that um you can specify a date range so you don't actually need to
[55:33] do any work ahead of time and looking at the imagery and trying to find images that have low cloud cover those types of
[55:40] things but but that's something i did here um and just to to sort of cover our bases
[55:47] bases so for part one the first thing we're going to do is load the pre and post
[55:52] fire landsat images and so we can see here i'm going to go ahead and delete our comments out for the portions
[56:01] of the code that we want to work through and i'll talk through what these mean as i
[56:06] i delete these portions out so the first thing is we're loading a pre-fire image the pre-fire image is from august 9 2018
[56:16] and this is the the variable here what we're identifying as the pre-fire image and then the image is this very specific
[56:26] um um landsat name um in in past presentations with our set we've talked a lot about the naming convention
[56:34] of landsat earth engine uses the similar naming convention to pull the correct image of interest um to display in the map so
[56:45] what we can see here is this is landsat 8 8 um tier one level two um the and then we can see the actual
[56:53] date shown here this is the um the ban the path and row so this will specify the area overlit in
[57:02] canada where the um image was taken and then the date here um so you can refer to this
[57:08] and then what we're going to do is visualize the parameters and we're going to just look at a natural color image so
[57:15] you can see um blue green red bands here and if you refer to that information about the landsat bands you
[57:23] can see that those are bands six five and three and um here we're using a surface reflectance
[57:31] product so that's why it's sr so we're essentially just loading the pre-fire image here and then below we're loading the post fire in in
[57:42] exactly the same way so um the post fire image is going to be from september 2nd 2021
[57:52] um as you as you note the uh the the uh excuse me there we go um the fire occurred in late june um and
[58:07] into july of 2021 so this is a relatively cloud-free image um after the fire occurred and you want to make sure
[58:16] that the image is long enough after the fire occurred to where you're not still seeing smoke in the image from the fire
[58:22] burning itself um so that's what we're doing with that portion there and now we're going to just center the
[58:29] map and the way that we're centering the map is we're using the latin long from linton canada
[58:35] and um then this piece here where we see seven this is the zoom level so you can change this to
[58:42] zoom in and out closer or further away from your area of interest and now and then we're going to add our
[58:50] map layers so we're going to add our pre-fire image and our postfire image using the parameters we set for natural
[58:58] color color and then we're giving them these pre-fire and post-fire names and then um we just want to print the
[59:06] images to the console on the rights so that we can essentially store them for later if we want to download them or
[59:13] take a look at them they'll show up here on this this console portion to the right right so now that we've
[59:23] comment decommented our first part of our script we can just click on run so what you can see here is we've zoomed
[59:32] into the area of linton canada where we're zoomed out at a seven um if you increase that number
[59:40] you'll zoom in higher um what we can see here un under the layers is we have our pre-fire image
[59:47] and our post-fire image and we can just kind of take a look here you can always zoom in and out more if you're
[59:53] interested in this we'll do that a little bit later but by turning these layers on and off you can
[59:59] see first the pre-fire image and then the post-fire image and it may be difficult to see the
[1:00:05] differences here initially but we'll we'll talk through those um as we identify the burn scars and take a look more closely
[1:00:14] now the next part is we're going to calculate the normalized burn ratio or the nbr and we've given the
[1:00:21] equation for that here and again this is really just referring to which bands are which for landsat in
[1:00:29] particular and then running this calculation calculation we have the pre mbr we're using the normalized difference which is a
[1:00:38] function that's readily available in earth engine for the near infrared band and the shortwave infrared band for both
[1:00:45] our pre and postfire images and then again we are going to print this to the console and we can we can click on run to run
[1:00:54] this portion but the images aren't going to be showing up just yet because we have not printed
[1:01:01] them them to the map itself which we'll do in our part three but we've done the calculation we can
[1:01:10] see here in our console on the right with um this ran perfectly and we have um each of those images available but we
[1:01:18] want to display those images in a particular way which we'll do here in part three so now um the result
[1:01:29] we're going to calculate the difference nbr so what we essentially need to to do is um subtract the
[1:01:38] pre-nbr from the post nvr and that's what we're doing in this step and then we're scaling it to usgs
[1:01:46] standards and i mentioned that previously that the usgs has this great resource for how we're we're mapping
[1:01:53] burn severity and this essentially is just um multiplying by a thousand to scale up our values then we're going to
[1:02:02] add the difference image to the console on the right like we did with the previous examples and then we're going to identify how to
[1:02:11] display display the the products so first we're going to display them in grayscale um so we're doing gray scale of white
[1:02:19] and black then we're going to we would like to display the pre and post fire nbr separately so in the
[1:02:30] step 2 we calculated this pre and post mbr we printed it to the console on the right which is sort of our holding place
[1:02:39] for the images where we can take a look at the statistics but now we're going to add them to the
[1:02:44] map so this map dot add layer is going to to do that for us um we've identified the min and max
[1:02:52] values as i said this is a ratio between negative one and one the palette is going to be gray scale
[1:02:59] um and then we've identified the pre and the post fire nbr and then finally we're going to display
[1:03:06] our differenced nbrdnbr and because we've scaled this to the usgs standards the values will go between negative a thousand and a
[1:03:17] thousand thousand the palette is still gray and then we're still looking at the gray scale here so now we can click run again
[1:03:29] we can see in our console as soon as we click run that the dmvr is now here on
[1:03:34] the right and we see some new layers being displayed so here if we hover over layers we can
[1:03:43] see three more layers displayed so we initially had the pre-fire and the post-fire image but now we've displayed
[1:03:52] the pre-fire and post-fire nbr which is needed for that calculation calculation that we run and then we are showing the
[1:04:01] um difference nbr or that dnbr so we can turn these on and off to take a look at each of those layers
[1:04:12] pre-fire image post-fire image pre-fire nbr post-fire nbr so we can start to see some differences in particular some differences up here
[1:04:25] in the northeastern quadrant of our landsat scene and then we can look at the dnbr in grayscale
[1:04:35] grayscale again again now that we're looking at the dnbr we can start to see some um differences
[1:04:42] up here in this portion of the the image and that's what we're really going to use um for our classification and for
[1:04:50] our coloration of the uh differenced nbr nbr um so again this essentially is subtracting the post-fire nbr from the pre-fire envy
[1:05:05] so now let's go back to our code and the part four that we're going to work through now
[1:05:12] is um classifying the burn severity and adding a legend so much of this code this part of the code was created
[1:05:21] by the folks with unspider and a lot of this portion of the code is specifying colors and labels and adding
[1:05:30] a legend um and is is really doing that sort of coloration and displaying and not much of the
[1:05:38] raster analysis um so i i would refer you to this this website for what's being done here
[1:05:47] here for a lot of these color maps and you can also find the color codes and things
[1:05:52] like that via help with google and earth engine itself so the first thing we're going to do is
[1:06:01] define the discrete intervals for which we will apply to the image and these intervals are identified by those
[1:06:10] standards set by the usgs and those are made available again on the un spider website website so
[1:06:20] so what we're doing here is we're identifying the intervals with which we are thresholding our differenced ndr map
[1:06:29] and then we are identifying the colors that we want them to be from essentially from green to red
[1:06:36] we are identifying the labels again those are the value thresholds for our our levels of burn severity we're creating
[1:06:46] the color map and we're symbolizing this in our raster so there's a lot here such as the color
[1:06:53] the the value and the label and this can be applied for a lot of different rasters that you're
[1:07:01] coloring up and symbolizing with just some slight modifications to the color and the labels so then we're going to add this image to
[1:07:11] the map using those color ramp and interval schemes that we just identified and we're going to separate this into
[1:07:20] the eight burn severity classes those classes that i mentioned so this is essentially thresholding your image into these different classes and we'll
[1:07:29] see see the values of these classes and what those mean in terms of the designations of burn severity
[1:07:37] so so here we're taking our dnbr we're applying those thresholds we're reducing them and essentially applying it to the entire um dnbr image
[1:07:50] that we've created so now we'll step through again more of the sort of fine-tuning of the way things
[1:08:00] look in earth engine such as setting a legend legend so this is the first piece is essentially setting the position of
[1:08:07] where we want the legend to be the legend is going to be displayed in the sort of the bottom
[1:08:14] left portion of our map map below below we are going to create a legend title um we are going to
[1:08:26] call that legend dmvr classes we're going to make it bold the text then we're going to identify the font
[1:08:35] size as 18. um specify the margins and the padding we're not adding in any padding so it's
[1:08:43] going to go directly in the bottom left and again these can be found you can do some
[1:08:49] simple google searches for legend and creation of these things in earth engine and then we're going to add the title
[1:09:01] we are going to specify the color and the name and essentially create a label that designates the
[1:09:10] specified color that we've identified for each of the burn severity classes and tie those to the correct
[1:09:18] the correct designation so again uh we're applying a label we're um identifying the background color is going to be white
[1:09:29] we're giving padding to essentially the the box that where the legend is located we're identifying where where this text will occur
[1:09:44] and then we're creating the label for the text itself so we're giving it a name we're again specifying
[1:09:52] this particular margin the location and then after you've specified all of these things you need to return it so you need
[1:10:02] to actually tell earth engine to display it it and um that is displayed using the the um widgets so widgets are these cool
[1:10:13] little features that you can apply to display random things you can add things like a time slider if you're looking at
[1:10:20] variety of different dates you can add legends as we're going to to show you here and there are a whole suite of widgets
[1:10:29] that you can take a look at now now we're identifying the color palette for our our each of our categories so you'll see
[1:10:41] this will be colors from green orange yellow red again you can look these up and and find what these color designations mean
[1:10:50] by doing a simple google search now we're specifying each of these categories categories in the name on the legend so you can see
[1:11:01] we're going to look at enhanced regrowth high high enhancer we go low unburned unburned low burn severity
[1:11:11] moderate burn severity moderate low burn severity moderate hybrid severity high severity and then any pixels that don't fall within these
[1:11:21] categories uh maybe it's like the edge of the scene maybe maybe it's a pixel that doesn't meet these thresholds a lot of
[1:11:31] times we'll just put an a in there just in case there are any additional pixels that are maybe on the edges of the scene
[1:11:37] things like that so these are the categories that we will um have for our burn severity map
[1:11:46] and all this does is it applies the specifics that we outlined outlined prior to this um it's essentially
[1:11:55] running a function for each of these eight categories it's applying the legend specifics and making rows and
[1:12:02] names for each of these um pieces of the legend um so this is like an iterative process that occurs and assigns this
[1:12:11] along the way for each of the legend properties properties and then finally we're going to add the
[1:12:18] map to the legend so i know that's a lot of code for what seems to be a pretty
[1:12:24] simple step of adding a legend but there are a lot of um different combinations you can really be specific with the way
[1:12:32] these look so you can modify these based on your interests interests and um how you want things to really
[1:12:39] look look so so with that we will click run again and you can see right away that our legend populated here um
[1:12:50] on the uh the bottom left we have our dnbr classes that we identified um the color is appropriate
[1:13:00] for what we'd assume to be regrowth or unburned or low and moderate low moderate high severity so now
[1:13:09] if we take a little closer look at our map map we can zoom in a bit and we can again focus in on these
[1:13:18] regions regions really close to the town of litton so let's take a nice close look at these
[1:13:25] and you can move around the panel um you'll see that with each zoom what's happening is the layers are displaying
[1:13:31] again again we have these five layers that we had initially and now we have this classified classified layer so let's go ahead and turn all of
[1:13:41] them off let's orient ourself we have litten here um that town that much of the town burned
[1:13:49] um and we have our pre-fire image our post-fire image and start to see some features here we have our pre-fire nbr
[1:14:02] our post-fire nbr in grayscale the differenced nbr and then this classified image so what we can see here is right near
[1:14:15] the town of litton um this pretty large fire perimeter um here we see some other major fires um
[1:14:23] like i said this was a pretty extensive fire outbreak across the region um so you see what looks like you know the outline of
[1:14:32] four fire perimeters and if you had the other landsat images along the edges here you'd probably see this extend into
[1:14:40] these regions on the map as well so that is looking good we have an idea of the severity we can
[1:14:47] see that much of the the fire severity was a low to moderate and again this might also depend on the the designation the
[1:14:57] classification that you've you've set um we've again used that that simplified classification but um it might not be
[1:15:05] the most appropriate for this region so um you could take a look at other thresholding um values and change those
[1:15:13] to see um if the the burn was more severe um you could compare it with ground-based estimates of severity and
[1:15:20] see how it compares um there's a variety of things that you could do if you had more information
[1:15:26] um you'll also see that some of these areas are white where um it was either snow or cloud
[1:15:33] cover cover particularly probably snow in this region region and those were excluded from our classification classification okay
[1:15:42] okay so now if we come back to our code we are now on part five so part five
[1:15:50] we're going to calculate the burned area so we're essentially going to take a look at the entire
[1:15:57] dndr dndr and we're going to calculate uh how many pixels fall into these different categories and and um like i mentioned in the lecture
[1:16:10] uh there are some limitations to the processing of um data within earth engine there is a limit to the number of pixels
[1:16:22] that can be included into these class statistics which i've outlined here along the top so so for example if you were to run these
[1:16:32] calculations over the entire image image you would get an error because there are too many pixels likely too many pixels
[1:16:41] included in the unburned area for the process to execute properly so what i've outlined here is identifying a geometry
[1:16:53] just around these per this perimeter essentially just just selecting out the areas where we know the fire is
[1:17:03] occurring and being very specific about where we're calculating these these estimates estimates so um you can do that uh really simply
[1:17:13] by using these features here to draw a shape or draw a rectangle but what i've done here is i've done
[1:17:21] that and then i've i've taken a look at the lat and long of the end points so
[1:17:26] the end boxes of of that rectangle to create this geometry so that the process will just run over this specific
[1:17:34] geometry so we'll just run over the region where we know the fires are occurring and this will likely happen to
[1:17:42] you if you are interested in analyzing a really large burnt area and if you want to get the statistics so
[1:17:50] something to keep in mind of a way to identify your geometry and then essentially say hey we're going to look
[1:17:58] at this feature collection so we're going to look at this imagery just over where we've specified the geometry for
[1:18:04] that polygon to be and then we're going to count the pixels in this area area so that's what this step is doing here
[1:18:15] um we're taking a look at the classified classified [Music] [Music] um um images from the entire layer
[1:18:23] we're using a reducer essentially to count all of the pixels in each class we know the scale is 30 because it's
[1:18:31] landsat and it's a 30 by 30 meter pixel and then we're taking a look at all of the pixel stats to get a sum so
[1:18:42] we're counting up all the pixels in each class and then we're extracting a pixel count as a number so then we're just um
[1:18:50] adding all of those up for each of the categories categories now with a lot of functions where you're
[1:18:56] creating a list you need to essentially create a holding place for where you're going to store those data points so
[1:19:03] that's what this is doing here and area list is what we're calling it as a variable and then the the brackets
[1:19:08] indicate like hey we're gonna put some information into this area um so now this is the function where
[1:19:16] we're deriving the extent of each of the burn severity classes so we're doing an account and we're using the the class number
[1:19:26] that we calculated here and then the name of each of these categories again we're using a reducer this is a
[1:19:34] very common thing with uh earth engine code where you just have to ensure that we're applying the function over the
[1:19:42] entire area of interest whatever it may be be and then we're identifying the pixels pixels we're also calculating the hectares
[1:19:53] so we're doing this by um understanding that a landsat pixel is 30 by 30 meters so which is 900 square meters
[1:20:03] um so we're multiplying by 900 and dividing by a thousand to get the hectares hectares we're also going to be calculating the
[1:20:12] percent percent of each class and round it to two decimals decimals um so we're doing that that's what this
[1:20:19] function is doing here and then what we're essentially saying is we're going to hey we want to look at
[1:20:28] the class name the number of pixels the number of hectares the percentage for each of these categories of interest
[1:20:39] and we have to tell it which which classes we want to analyze like we did before and like we also did before
[1:20:50] we have to execute the function over every single class so the the function is being executed over these
[1:20:58] eight eight classes classes and um the area count are these different um are are each individual class i
[1:21:08] and then the names um so we're identifying the pixels in each category given these these names and then we're going to print the values
[1:21:20] here to the console so we can take a look at those values after we we run this
[1:21:26] operation great so now again we will go ahead and click on run you can see our map is loading again
[1:21:40] with all the um features that we calculated and there was nothing that really changed to the map itself again
[1:21:47] we can zoom in we um it's important to note that because we've commented out all the lines of
[1:21:54] code above this every process is running again again so every time it'll run all of those steps for us again
[1:22:02] so it resets the zoom for example and here if we take a look at our console on the right you can see now
[1:22:10] in the bottom we have our burned area by severity class so if we just use this down arrow we can start to look at each
[1:22:18] of the categories and the properties so for example let's take a look at low severity this is our low burn severity these are
[1:22:27] the hectares that have been identified the percentage the percentage of the polygon that geometry that we identified
[1:22:37] that you can display um if you want to take a look at that and um then we identified that
[1:22:46] almost 13 of the pixels are in low severity class and then we have the number of pixels so
[1:22:53] we can take a look at these things here we can take a look at every single category
[1:22:58] category of interest that we've identified um so that's a really nice feature where you can come in and do some quick
[1:23:06] estimation of stats in the console here so now the final piece is is this edition actually in addition to uh
[1:23:21] something that was not provided by the the un spider code is say we want to export the burned area
[1:23:27] stats into a csv so we have these values that we're looking at in the console on the right
[1:23:33] readily accessible and usable for us and it's just a few more pieces of code here where we need
[1:23:42] these these to a csv and when we export the list of values to a csv we can then um have the option to
[1:23:53] export that csv to our google drive which is a really cool feature so again we are going to
[1:24:00] [Music] [Music] have this variable we're going to create an exportable list we are going to take a look at the feature collection um
[1:24:09] the area list which we identified preferably preferably and we again are just returning each of those features that we calculated um
[1:24:21] previously on the console so we just have to identify this again we want the class the hectares the percentage etc
[1:24:28] and then we're going to print the feature collection again to the console to make sure it looks right
[1:24:34] make sure it's something that we want to export export and then this last bit of code is
[1:24:41] creating an exportable table it's creating that csv table again this can be applied to a variety of applications
[1:24:51] that you might be interested in so what we're doing is export table to drive we're going to create that list
[1:24:59] where when we actually do the export which i'll show you it'll create a folder with this name in your google
[1:25:06] drive so if you've linked your drive to your your user here it'll create this our set pre
[1:25:14] postfire monitoring folder and then that's where it will store this csv um this is the name of the tasks in the
[1:25:22] tasks tab which we'll take a look at and then the file format is a csv and then
[1:25:28] what we can do is identify the name and the export after we run this piece of this
[1:25:35] of the code now i'll just go ahead and click on run we can see here that we are
[1:25:45] cataloging a new feature collection and this is going to be our export of our burned area statistics
[1:25:52] the other thing that you'll notice after this ran um is that we um the tasks tab turned orange so that means hey there's
[1:26:01] something here to address so let's take a look at the tasks tab and i've done some um i've done this a
[1:26:09] few times before so you can see i've ran a few tasks but what you'll see is you'll have your
[1:26:15] unsubmitted tasks here and this is our canadian canada burn area stats so this last piece that we did
[1:26:22] now in order to actually save this to your google drive you need to click run and when you click run you can change
[1:26:31] any of these preset conditions that we had in our code so if you want to change the name of the folder or the file name
[1:26:39] or even the file format you can change although i would keep this as a csv because it's only going to be a table
[1:26:47] of data and then you can click on run and then what you will see once this process runs
[1:26:55] is you'll have you'll open up your um google or your google drive and you'll see that folder
[1:27:03] there created for you and you will also see that csv file so we can go ahead and take a look at
[1:27:11] that now okay so once that process has run you will see in your google drive this rset pre and post fire
[1:27:25] monitoring folder and now what you can see is you'll just see this canada burned area stat csv
[1:27:33] and you can see what we've done is we were able to export the class the hectares the percentage the pixel
[1:27:41] and then it just has this reference of the the type of data that we're looking at so then you can come up here and open
[1:27:48] with google sheets for example and this will create a google sheet you can also open it with excel if you have
[1:27:54] that available and then you can see here we have all of these data ready for us ready to go so if we want
[1:28:03] to do any kind of analysis further analysis we have the numbers um this is also a great idea for doing
[1:28:10] things like land cover classification you can see the areas under each different land cover classes it's a really great uh resource to have
[1:28:19] to be able to export your data so that was the final step for our canada example here
[1:28:29] and and this was a really basic overview of calculating burn area by severity or class and then exporting the stats and taking
[1:28:41] a look at those um so this again this example is is not as easily modifiable with the exception of if you know your
[1:28:55] area um your landsat image of interest you can change these here um really easily easily so while this is the end of our
[1:29:04] um canada example i really briefly wanted to mention the bolivia script and take a quick look at it because it is
[1:29:13] quite different it's much longer much more involved but you have more flexibility so let's just go ahead and take a quick
[1:29:23] look at our our code for our bolivia example and i just need to kind of come up to the top here
[1:29:32] and show you what this looks like so it looks very similar to our canada code code we've outlined
[1:29:42] where much of this came from and we've also outlined all of the steps and you can see
[1:29:49] 13 steps here as opposed to the six that we went through on our previous example and the biggest difference with this
[1:29:58] script script is that it's easily modifiable to your region so i want to just step through and talk through how these modifications
[1:30:07] can be made and i've i've outlined this here where you can modify the study area the date range and the satellite
[1:30:16] platform so you have the option to use landsat 8 or sentinel 2. so sentinel 2 might be a great option for you as it
[1:30:23] has some increased spatial and temporal resolution in your region another big piece is the application of cloud and snowmask which is really
[1:30:34] useful for a variety of applications and and i will say that in particular for a region like bolivia um there is high
[1:30:41] cloud cover and in all of the tropics really high cloud cover very often um so this can be really great um a great way
[1:30:49] to to run a composite to have many different dates to apply a cloud mask and to try
[1:30:57] to find the pixels that are going to be the most usable for your optical imagery i will also say that in the tropics the
[1:31:05] use of sar imagery is very useful as well well so so just quickly looking at parts one two
[1:31:13] and three um also note that i have not commented out the portions of the script that you
[1:31:19] would like to run so you could actually just click run and generate the whole script for you here i would encourage
[1:31:26] taking a closer look at it as you before you do that um but what i've done here
[1:31:33] is i've identified actually a country of the world to select um i've used this this um food and agriculture organization a
[1:31:43] layer to identify bolivia as the country of interest so we're actually going to be generating imagery landsat imagery
[1:31:52] over the entire country of bolivia however you could create your own geometry so i actually went in and used
[1:32:00] this this feature here where you click on geometry and then click on the map a variety of
[1:32:07] steps and create your own geometry so you can do that if you're interested in that um i've given you the um
[1:32:17] latin long for something that's like a very coarse um attempt at selecting the entire country of bolivia
[1:32:27] but you can do something like this and just include your endpoint latin long for each of your own
[1:32:32] geometry and i've also included the steps for using the polygon tool which i just kind of showed you down below
[1:32:40] to create your geometry of interest the difference here for the bolivia example is that we have set the pre-fire start
[1:32:53] and end dates as opposed to a specific image for pre-fire and post-fire so what you'll see here is this is going
[1:33:01] to look at the region from january 1st 2018 to december 30th 31st um 2018. so we're we're going to
[1:33:11] have the ability what's going to happen is is all of the images from um that are available
[1:33:19] uh uh in this region for that entire time frame are going to be selected and and earth engine will create a com a
[1:33:26] composite image using the best pixels from this this date range and the same thing we set for after the fire so if
[1:33:34] you are going to look at a specific fire of interest in your region you can change these dates um
[1:33:41] i encourage you to use anniversary dates or um if you one thing to think about is if
[1:33:48] you're in particular if you're not interested in tropical regions the vegetation can look quite different if you're selecting um imagery from say
[1:33:57] january or imagery from say july especially in like the northern hemisphere so you might want to be more
[1:34:03] specific about your rate date range here um because this is the tropics and the um the vegetation cover doesn't change
[1:34:11] that much throughout the year i've included the entire year but you might just want to include the summer months
[1:34:17] within your date range and then here i've selected the same parameters for after the fire and then the final thing um that is
[1:34:27] quite different about this code is the selection of the satellite platform platform so we've included details about landsat 8 as well as
[1:34:36] sentinel 2 and the great thing here is that the entirety of the rest of the code is flexible
[1:34:44] so you can just select either landsat 8 which is what's shown here using l8 or you can use s2 and if you type in s2
[1:34:55] here here um you will see that the same process is run with sentinel 2 data and if you take a quick glance at say
[1:35:04] part 4 you can start to see how this flexibility is built into the code so there are a lot of if else statements so
[1:35:14] this basically says if you selected sentinel 2 as your platform then run this process if you selected a landsat 8
[1:35:24] then run this process there are differences say for example in the band number the naming convention for the bands between the two sensors so
[1:35:35] this is how the the code is selecting those two things it's running the same exact process whether or not you're
[1:35:43] using landsat or sentinel but there are differences in the metadata and the naming conventions um and of course the
[1:35:51] feature collection that you're you're selecting either the landsat or signal so so really cool feature of this code and and
[1:35:57] hats off to the u.n spider group for creating much of this code so so i will say um that is a brief overview
[1:36:07] of the rest of this um code there's a big disclaimer here don't edit the script past the the three the first
[1:36:16] three parts um unless you know what you're doing unless you're an expert here and and i'll be honest there are portions of
[1:36:23] this code beyond the parts one two and three that i am not entirely sure exactly uh the details of what's going
[1:36:30] on many of you might be more familiar with earth engine and can can modify this code um in a variety of ways
[1:36:38] but that is a brief overview of the bolivia example i won't be going through that right now but i encourage you all
[1:36:46] to take a look at that um as we are online for our our lab time um and feel free to ask questions as you're
[1:36:55] working through that and maybe even as you were selecting a different area or time period to take a look at a fire in
[1:37:01] your region of interest so that concludes our exercise portion of the training today i hope you enjoyed
[1:37:10] um this dive into earth engine it's it's such an interesting platform and and there are so many things that you can do
[1:37:18] um with earth engine so now we will have some time for uh questions and then as i mentioned we
[1:37:26] will be online for a bit longer while you're working through these exercises exercises to answer any questions that you might
[1:37:35] have um so so thanks again and and now we'll move into the q a great thank you everyone and um bear
[1:37:48] with us for a moment as we pull up our um question and answer document we've already gotten a lot of great questions
[1:37:55] from you throughout the the training and i'm really looking forward to addressing a few of these along the way
[1:38:02] um a few points i wanted to mention we have posted the link to the earth engine code in the chat and the code is
[1:38:12] also available on the presentation slides slides for those of you who have already signed up for your earth engine account
[1:38:21] take a look at those there i also want to mention that we will be sending a survey out to
[1:38:30] everyone after the completion of this course and we would really love to get your feedback on um this course in particular in in terms
[1:38:39] of the structure we're trying something new with this idea of lab time um and then also we really take into account
[1:38:47] your suggestions for future training topics so if you have other ideas on trainings you would like to see coming
[1:38:53] from ourselves in the next few years let us know we really want to be meeting the needs
[1:38:59] of the community and in particular the decision making community out there so um do provide your feedback we we take
[1:39:06] that into account as we do planning in the future um and then like we did with our session on tuesday
[1:39:15] um i'll be going through some of these questions here maybe for about 30 minutes or so and then um i'll i'll go and be quiet
[1:39:24] and allow you all to work through the earth engine code and as we see potential for common questions coming up
[1:39:32] we might jump back in and do some of the the narration and answer some questions and and we've seen a few questions about
[1:39:39] earth engine come through already um but we'll just be online until 12 12 12 p.m pacific time if you're in the u.s
[1:39:50] 3 p.m eastern time and we'll just be here to to continue to help you out and answer questions and
[1:39:58] and i also want to acknowledge um my colleagues brittany and haley for being on with us today and i might jump to them to help
[1:40:06] answer some of these questions as we go through them so let's let's jump right into to some
[1:40:12] of these questions some really great questions today the first question here it says high burn severity has low infrared
[1:40:22] but it's supposed to have water absorption is that possible how is that possible possible so so if you take a really close look at
[1:40:30] slides 19 and 20 from the lecture we can see see that given the spectral response curves the high burn severity
[1:40:38] have higher values in the mid infrared because there's actually low water absorption so when there's water absorption
[1:40:47] absorption there is less reflectance in the mid infrared and therefore lower values in those spectral curves so healthy
[1:40:56] vegetation in on the other hand has lower mid infrared values because it does have water absorption because there is water in the plants
[1:41:05] there so um so just take a close look at those slides and and if you look at the
[1:41:09] figures there you can see the differences between the reflectance values in the mid infrared range with high burn severity versus healthy
[1:41:18] vegetation and that's really a a major feature of the ability for us to identify burned areas because of that difference in
[1:41:29] reflectance in the mid infrared range so that's that is that is pretty important okay okay next question does the nbr hold true for
[1:41:39] grasslands and arid areas yes um nbr can be used for grasslands and arid regions but it's important to consider the
[1:41:49] vegetation cover so if there's really low vegetation cover um say in a desert region then then you won't be seeing the difference in
[1:42:01] the ndr from the pre and the post uh fire or event that took place on the ground so so again we have to to
[1:42:09] recognize that the the nbr is actually looking at differences in vegetation on the ground and so if there's less
[1:42:17] vegetation on the ground we might see less of a change between two points in time so that's just something to be
[1:42:24] aware of it does take into account um grassland fires um but i would would say that it
[1:42:31] is very um very useful in more densely forested regions um and this question three came up quite
[1:42:42] a lot um and i'll i'll i'll go over it a couple of times but the the question is
[1:42:48] really referring to that the thresholding um that we've identified uh for for the the uh application of these different uh
[1:42:59] ranges of uh you know low moderate low moderate high high burn severity and so this threshold is is the one that we've
[1:43:08] used is one of the most commonly used thresholds thresholds um i've provided the link there to the
[1:43:14] unspider website that has the table for these thresholds and this was developed by the u.s geological survey
[1:43:21] and i believe it's used pretty extensively by the foreign service as well but i will say that this is not the
[1:43:27] end-all be-all to um the thresholds of severity and this can be um really dependent on on your region and
[1:43:39] and it allows for some interpretation from the analyst and i would also say along with um much of the work that we do in the
[1:43:49] remote sensing world we still need ground-based information and we still need that validation on the ground to help inform
[1:43:59] what we're seeing in the remotely sensed imagery imagery so so more importantly if you have a better
[1:44:06] understanding of your region if you have ground-based data ground-based information things like the composite burn index that can help you modify these
[1:44:18] thresholds and these ranges based on your ecosystem and your information so um i will say this is just a starting
[1:44:25] point point um and and they can be modified depending on your expertise so it's always great to have that expertise in
[1:44:33] that ground knowledge um i've linked to a paper that takes a look at the this thresholding and
[1:44:41] the addition of information from the ground in order to modify these thresholds and i will say um that that
[1:44:50] with the written example um myself and a few of my colleagues actually went through and did some
[1:44:57] modifications to thresholding in um the the gis application that we did with with arcgis and and um it does
[1:45:07] lead to some changes obviously in the number of pixels that are included in these different um severity
[1:45:14] classifications so um we you know we didn't do any ground truthing um but i'm i'm certain that if you had
[1:45:22] some more information about the ecosystem you might you might change these thresholds and um in your region so that's a question that
[1:45:31] came up quite a bit um and there's no real cut and dry answer answer beyond sort of a starting point of
[1:45:39] what we've given you here and then question four is a very similar question question um how do we interpret the dnbr um and
[1:45:50] we've given that um that that information about the table from the unspider website uh there in the
[1:45:58] previous question okay okay we scroll down to question five this is a really interesting question um it says if wildfires affect human
[1:46:12] settlements and infrastructure it seems that vegetation-based indices would not be appropriate do we have alternatives that can measure that impact
[1:46:21] and that's a really great point again i mentioned the nbr is a vegetation based index index and i'm not aware of any that doesn't
[1:46:29] mean there aren't um indices out there um i would also say that assessment of urban impacts um can be best done by
[1:46:38] ground truthing as well a lot of times the impacts to the urban interface will be smaller in scale and will be a little
[1:46:47] more challenging to assess via nasa remote sensing data drone data might be a great resource for for something like that as well
[1:46:57] um and then another thought that i had was we do have this great resource from um the viirs sensor where they
[1:47:06] provide um nighttime light products so this is something that has been used in in disaster type situations
[1:47:14] things like large fires human displacement through settlements earthquakes interrupting power grids and what this does is it displays the lights
[1:47:27] coming off of urban areas um and so this might be something else to look into um if you if you
[1:47:37] see a fire being burned in some uh really large urban area that can be detected by these changes in the
[1:47:44] nighttime lights that might be something to um to take a look at to think about as well and i've provided the link there
[1:47:50] for for more information about that um there are other indices like um the built-up index which is an urban
[1:47:59] index that identifies built-up areas um so that might be another thing to look into into um i know that the
[1:48:09] trends.earth trends.earth team with conservation international does a lot with calculating urban growth so that might be something else to look
[1:48:18] into as well it's good question okay uh question six in the bolivian fires that involved many fires
[1:48:29] fires why is the pre-fire situation not affected by the fir by the burns pre and post are happening at the same
[1:48:35] time affecting landscape temperature etcetera that is another very good point and um is something to keep in mind if
[1:48:43] you're examining a landscape that is often affected by fire um because it can be difficult to distinguish
[1:48:51] between regions that have been affected by fire in previous years where we might see regrowth in the vegetation
[1:48:58] um so my suggestion would be to modify and change the date range for your imagery based on what you may know
[1:49:09] about the fires in the region um and it's also really good to get as much information about previous burns
[1:49:16] through some kind of burned area mapping product ahead of time as well so um yes you will see uh the previous fire
[1:49:27] scars scars in regions where there are many fires occurring over multiple years and you will see vegetation regrowth happening
[1:49:35] um i also mentioned this in the answer to a few other questions but there's another great resource called
[1:49:42] land trender and this is an algorithm for identifying um landscape scale changes over time um um and
[1:49:51] and it also has a earth engine interface it has a api as well as coding interface where you can apply that algorithm
[1:50:00] and the great thing about that is you can select a region and even a pixel and you can see changes to vegetation
[1:50:07] indices over multiple years so you could see for example um um the vegetation sort of uh being continued being stable and then in
[1:50:19] a year of a fire see the vegetation values really fall off or see the nbr values um really really increase
[1:50:29] so so that's another great resource for looking at changes over time but it's a good point and unless you have the
[1:50:36] ground-based information or information about previous fire location and perimeters it can be difficult to identify exactly when those fires
[1:50:45] occurred unless you were really set on your um time frame of interest and and again that's um also sort of why in the
[1:50:54] in the litten example we provided specific images from specific dates because we knew um they were images from a pre and post
[1:51:04] fire and we knew that they were relatively cloud free and so these are all things to consider
[1:51:11] a lot of limitations and things to think about um okay question seven uh very good question um and i think we
[1:51:23] got some help on the answer to this so what is the difference between earth engine and climate engine that we tried
[1:51:28] out last session um um is it the actual satellite data or what is the difference so um earth climate engine is essentially
[1:51:39] an application that was built on top of google earth engine so so climate engine is just providing you
[1:51:48] with this really nice point-and-click gui interface where you can select these different data sets and run some
[1:51:54] analysis yourself without having to run the code so um there's no difference necessarily in the data that you're you're
[1:52:04] pulling the data is being pulled the exact same way that you would pull the data from earth engine
[1:52:10] you just don't have to write the code and run it yourself so if you are less of a coder and more of somebody who
[1:52:17] likes that point and click and um in that interface that that's why we um we focused on climate engine for for
[1:52:26] those those pieces um if you are somebody somebody who is very advanced in the javascript coding application you certainly could
[1:52:35] run all of the pieces that we did with climate engine um for the pre-fire analysis in earth engine um it's just a
[1:52:45] bit more involved so that's a great question um and it highlights the flexibility of earth engine and the ability to create these
[1:52:54] applications on top of of this this cloud computing platform okay okay great so question eight um i was
[1:53:07] wondering if earth engine can evaluate soil burn severity and the post-fire effects on the watershed so the soil burn severity estimates and
[1:53:16] we highlighted in the lecture particularly focused on ground-based measurements so actually getting measurements of the soil itself and and
[1:53:25] the physical chemical and biological changes that have happened especially to the structural changes we mentioned this in the q a last
[1:53:36] session a little bit but those structural changes that occur in the soil can lead to things like
[1:53:42] increased runoff decreased infiltration of water through the soil um so those properties are really difficult to evaluate
[1:53:51] evaluate via remote sensing data because they are um very uh heterogeneous and can change very quickly from from place
[1:54:01] to place so those i would i would suggest doing ground-based assessments for in terms of impacts to the watershed
[1:54:10] remote sensing can be used for things like this for monitoring things like landslides for looking at sediment loading in large
[1:54:19] streams streams due to runoff um and we have other trainings uh we have some really great uh folks who do
[1:54:28] trainings in disasters and water resources and i've linked to a sar training for landslides um in this
[1:54:35] example and then we have others that focus on on water resources and watershed analysis um so so do please take a look at that
[1:54:44] and um and yeah and and thinking about how remote sensing can be used again for for larger scale assessments um we
[1:54:52] always have to be mindful of the scale when we're doing this type of work too the spatial scale edits
[1:55:00] okay um if we scroll down to question nine what is the easiest way to figure out whether the fire is fully out and
[1:55:12] there's no smoke in your location especially when part of the fire might be out in part of the fire might
[1:55:19] be still burning um so that's a great question um in terms of from the remote sensing perspective how you can do this is you
[1:55:26] could take a look at data that's occurring and being provided on a higher temporal resolution like modis and veers
[1:55:36] um you can look at surface reflectance data um using things like world view which i've linked here in the q a um
[1:55:44] that will show you daily data of um essentially smoke plumes coming off of these large fires um and then you can also look at things
[1:55:53] like the active fire hotspots to see if the satellites are detecting any heat anomalies for regions where the fire is
[1:56:00] still burning um in particular you know if you're not seeing a lot of smoke but there's still um fire um maybe occurring
[1:56:08] at a lower level in that region um and then again as always um you know ground-based or more local assessments
[1:56:17] using things like drone data can or uav um um unmanned aerial vehicles can be really helpful for for the type of um
[1:56:26] assessment of smoke and i will say that with this training we did not cover the during fire piece um specifically as it
[1:56:36] pertains more to those active fire detections as well as smoke monitoring which um is more along the lines of our
[1:56:43] health and air quality experts but we did cover this in our previous fires training a bit from last summer so do
[1:56:51] please take a look at those during fire sessions i believe there were two of them focused on on smoke
[1:56:57] and hot spots okay so question 10 yeah this is a really another very good question in bolivia the case it seems
[1:57:08] that the classification has some unnatural edges it does not smoothly blend across bolivia and why does this happen and how do i
[1:57:16] tackle it um this is a great point that highlights the fact that tropical areas are difficult to examine
[1:57:24] if you're interested in land surface properties using optical data because there are clouds um there are clouds
[1:57:32] very often and and what you're seeing likely in the bolivia example are these unnatural sort of edges and lines
[1:57:42] due to cloud masking um um and and in in in the bolivia example through you know this code that was largely provided by
[1:57:54] the u.n spider program there is a cloud mask and so depending on the date range that you use and how many clouds are
[1:58:03] present within the satellite imagery within that date range you're probably going to see uh you know many pixels
[1:58:10] actually just being removed from the analysis entirely or you will see um sort of the these unnatural features
[1:58:18] um that that aren't actually occurring on the landscape so so um the way you can start to tackle that is uh you have a
[1:58:27] few different options you can change things like the date range um modify it to be a smaller time window
[1:58:35] to see if we can obtain any imagery with fewer clouds unlikely unlikely you could change your data set so
[1:58:44] there's the option i mentioned to take a look at sentinel 2 data to see if maybe that revisit time occurring more readily
[1:58:54] is capturing an image with less clouds and then i also want to make a plug for star data
[1:59:02] in tropical regions the synthetic aperture radar data is really really beneficial because it penetrates clouds and clouds are not an
[1:59:13] issue issue um but it is more challenging to work with in general um and it's quite different than optical data if you're
[1:59:21] somebody who is more well-versed in the use of optical data so um we have a lot of rc trainings on sar
[1:59:29] data um you can take a look at many of those i've mentioned them in the past as
[1:59:33] well but it's a really good point and again highlights the limitations of certain types of remote sensing data and
[1:59:41] things to consider when using these data okay question 11. um is this there's a very short answer to that can this
[1:59:53] analysis be done using sentinel yes um we in the bolivia code you can actually toggle between landsat 8 and
[2:00:00] sentinel 2. um if you're interested in sar data you can take a look at sentinel one um we have those uh our set trainings um
[2:00:10] in particular our set training on forest monitoring with sar data where we use sentinel one if you're referring to
[2:00:16] sentinel one okay question 12 can the calculation of the relative relativized difference nbr be incorporated into this code yes
[2:00:28] again another short answer it's not something i have done myself but i found this really great paper
[2:00:33] where they have done this and they um link to some google earth engine code at the end
[2:00:41] this is not something i have done so i can't comment on the validity of the the code or the paper itself um but but that
[2:00:48] might be a great resource for you it's just a matter of taking a look at that calculation
[2:00:56] and applying it in much the same way that we apply the difference to nvr value um i will go ahead and um skip question
[2:01:10] 13 because um we sort of answered this with um the thresholding question three i might come back to that a little bit
[2:01:19] later as well okay does the nbr give any idea of how old the occurrence of the fire may be
[2:01:27] through time series data um not necessarily however um um again this kind of goes back to the
[2:01:35] question about bolivia where we see a lot of fires occurring multiple years in a row um if there is vegetation regrowth in a
[2:01:43] region where there was a previous fire if there's been regrowth from the time of the fire to the time you acquired
[2:01:51] your imagery the um nbr values uh will be lower um you can see that again on the thresholding table where we see um
[2:02:01] the nvr values uh less than one indicate regrowth in this region so it can give you an idea of the fact that
[2:02:11] time has passed since the fire but it can't necessarily pinpoint the exact date when the fire occurred
[2:02:21] occurred in order to do something like that you might want to do some kind of time series analysis right
[2:02:27] so you mentioned that in the question you might want to look at monthly data or yearly data depending on the region
[2:02:35] to see if you can pinpoint when the fire occurred if you're not sure um i mentioned this earlier but um the a
[2:02:45] great resource for this is the land trender algorithm um that you can implement in earth engine um it has a great feature where you can
[2:02:53] it'll it'll map a time series of um values of things like ndvi and vr over time for a specific pixel and
[2:03:03] within that you can then see oh there was the significant event that occurred in this year um it is yearly as far as i
[2:03:11] understand it so um it's difficult to get it to a smaller temporal scale than that but you can also look at things like the
[2:03:20] modus burned area product if it was a fire that occurred many years ago these do take a while to process and
[2:03:27] provide those those products but that might be something else to look into um and you can map
[2:03:33] and that's available monthly so you can identify fires that occurred in different months within a year we did that
[2:03:42] provided that as an example in our past training on some of the major california fires that occurred in 2020
[2:03:50] that's a really good point okay uh question 15. um um this one refers more specifically to earth engine
[2:04:02] um can you load a shape file locally rather than a bounding box um the answer there uh is yes and we provided a link
[2:04:11] for how to do this through the assets tab tab um and maybe i will open it up to
[2:04:17] britney or haley because i believe they answered this one if they want to provide any more details about that
[2:04:23] process um yeah you can absolutely use a shapefile uh in google earth mention you can use the assets tab
[2:04:34] up in the top left corner next to scripts and docs and when you click new within the assets tab you can upload a
[2:04:43] lot of different things including ship files geotiffs tfr graphics and you can even upload other things like image collections and
[2:04:52] folders folders and when you use your or you can use your uploaded chip file the same way
[2:04:57] that you would use a bounding box i would just add that when you do upload a ship file or you know something
[2:05:04] similar google earth engine automatically keeps that item private to your account so if you want to use it in your code
[2:05:13] and then you want to share that code with someone you should just make sure that you either change the privacy
[2:05:18] setting of the shapefile so that anyone can see and use it or you can specifically add someone's
[2:05:26] email that has a google retention account so you can kind of keep it private to you and the emails that you
[2:05:31] share it with you can change your shape file's privacy by hovering over it and you can click on
[2:05:38] this button that says share and that's where you can either add those emails or just make it public
[2:05:44] if you forget to do that for your ship file the only thing that will happen is you'll just receive an error message
[2:05:50] when you run the code saying that they can't find that shape file file so i hope that that helps
[2:05:57] great thank you yeah thanks for that additional information on the private versus public sharing of those sheet files that's very helpful
[2:06:06] um question 16. um this is another question about the classes uh for the burn severity of burn severity i will
[2:06:14] say here um that um to reiterate that the the dmvr is a ratio so you have will have values from
[2:06:22] negative one to one and um in the example here in the code we just multiplied by a thousand in
[2:06:29] order to get whole numbers so that's why you'll see um those numbers in the array starting with negative one thousand
[2:06:37] indicating high regrowth in the region um so you do you can take a look at that table there from the event spider
[2:06:44] website and question 17 is another more specific earth engine um coding uh question so maybe i'll turn it back over to brittany
[2:06:56] if you'd like to explain the answer to to question 17 which is can you please explain what the reducer does
[2:07:07] i can take this question amber um great so uh the reducer is a really useful function in earth engine
[2:07:16] and basically it aggregates all the pixels and i region here but it really should say parameter because reducers
[2:07:23] can be applied over space like we did in this code or over time like if you have an image collection of
[2:07:29] uh many different images over a time series uh and apply some sort of summarizing or aggregation function that
[2:07:36] you specify to all of those pixels so in our code here we've used ee.reducer.com which counts the number
[2:07:44] of pixels within the geometry that we drew but we've also used dot reduce sum which adds all of the pixels within the
[2:07:55] image band that we were applying it to and there are lots of different types of reducers and different ways that you can
[2:08:01] apply them and different objects that you can apply them to so i highly recommend that you check out the
[2:08:07] google earth engine developers page because they have really well thorough documented guides on reducers and different examples of code and how you
[2:08:16] can apply them great thank you so much hayley for that for that explanation appreciate it okay so
[2:08:26] um a few of the next a couple of questions i feel like we've answered a little bit
[2:08:32] um question 18 asked if we can add a shapefile of the actual fire perimeter so the percentages would be related to
[2:08:40] just the fire and not the ceramic unburnt area and yes um the short answer to that is yes if
[2:08:45] you have a shape file of the fire perimeter that you can load you can use the assets option to do that as well
[2:08:52] um so quickly move on to question 19 and we'll get to a couple more questions and then i do want to um give folks time
[2:09:00] to work on the uh uh the training without us um yammering on um but for for question 19 um again that
[2:09:10] asks about the range of the nbr values and you can find the differences in the thresholding there at the unspider
[2:09:16] website um and again um thinking about thresholding and how that might uh change based on your region and your
[2:09:24] expert knowledge of the area um um question 20 is is a great question um so i think we'll do question 20 and 21 and
[2:09:35] then we'll we'll pause um question 20 asks when we try to get data as quickly as possible to respond
[2:09:42] to a disaster for example to mobilize resources is earth engine the best source or do we need to access other resources to verify
[2:09:51] and clarify i will say that earth engine is a great resource resource um that's pulling data from
[2:09:59] many of the formal repositories like the dax um if you have code already created it's really quick to run um you know all the
[2:10:10] computing is done on the cloud so you're not having to sort of wait to download imagery or
[2:10:16] fill up your computer with imagery um i will say that um there are some other resources out there that are
[2:10:24] that could be used for the use of remote sensing for disaster uh response i mentioned world view earlier world view
[2:10:31] is really useful for uh mural time active fire detection as well as identifying smoke plumes um um also nasa's disaster portal i've linked
[2:10:42] to it here as well they have a great resource where the nasa disasters team in applied sciences works on
[2:10:51] specific large-scale disasters and creates maps and um does time series analysis and provides statistics and a lot of different things to the end user
[2:11:02] community so that's another great resource resource um but yeah i will say earth engine is used used for a variety of things like early
[2:11:11] warning systems it's also used for um drought early warning systems um and it's used for flooding disasters and
[2:11:21] things like flooding so it is a really great resource if you know how to use it um and and as soon as the imagery is
[2:11:28] available on these stacks um you know just thinking about the latency of the imagery itself um they are then
[2:11:34] available on earth engine so you don't have to wait um a long time for that um but i will say it's always a great idea
[2:11:42] um retrospectively to go back and do your your qa qc i know a lot of these new real-time products do have that
[2:11:50] warning associated with it where um you know a lot of the uh data hasn't been ground truth for example or um there may be uh
[2:12:00] less uh there may be more uncertainty associated with those products coming out in the real time that are then
[2:12:06] modified in the historical record so um you know as a retrospective analysis it might be useful to go back and and do
[2:12:13] some um more of a deep dive into the quality of those those products um okay so the last question i want to address here
[2:12:23] is also a very good question um um if we ran these indices over the archive of images through time
[2:12:31] and search areas of high burn severity we could build long-term statistics for an area or country but this would
[2:12:38] include deforestation in the category of wildfire wildfire um that's a great point um and then any idea how we could eliminate those things
[2:12:47] so yes um the the fact that we are using vegetation indices um um you can use the nbr to identify
[2:12:58] deforestation you could use it to identify things like um pine beetle effects um on regions and so therefore
[2:13:06] it'll be difficult to distinguish between what was a fire what was a deforestation activity um i will say again referencing the land
[2:13:17] trender uh tool um the ability to sort of look at this over time um allows you to
[2:13:27] at least see if there are changes that are occurring slowly like things like mountain pine beetle effect or on forest
[2:13:35] that might take multiple years to see um the the die off of of the trees and even
[2:13:42] deforestation that might be happening on slower cadence you might be able to distinguish between deforestation and fires
[2:13:50] fires um um i will also mention um and we didn't include this in the presentation we probably should have
[2:13:58] global forest watch is another great resource and they do have a lot of data on fires and one thing you could do is
[2:14:07] you could link up things like the hot spot protection of fires and compare that to your um
[2:14:17] nbr maps for example and in regions where you're not seeing any thermal anomalies happening over the years
[2:14:27] years um then you could maybe do some further investigation to see if oh well maybe that was a clear cutting event versus a
[2:14:32] fire event um you know using multiple data sets and aligning them and looking at them over time might be something
[2:14:40] that you would need to do in order to look at these things like long-term statistics um but i will say that global
[2:14:47] forest watch and resource watch um they're interleaved they are provided by the world resources institute they do provide statistics on
[2:14:57] some of these metrics across countries and regions um so you can do this for countries um i
[2:15:04] believe you can do it for tribal lands um they have a lot of great resources there so that might be
[2:15:10] something else to um to look into and to take into account um when doing that kind of analysis over many years
[2:15:18] for a country in order to look at some statistics so so great questions here um i will go ahead and pause now
[2:15:28] um to let you all work through the earth engine code we have about 45 minutes left where we will remain online
[2:15:37] um we'll continue to monitor the q a if if there are some similar questions coming through we'll we'll pop up back
[2:15:44] on and and um you mention them and maybe show our screen as needed we didn't see that much last with the last session so
[2:15:53] we didn't come back on but i'll also be monitoring the q a document here um and seeing what comes up
[2:16:02] i believe my colleague might play a little light jazz for you all so you can um you know mute for a while if you're
[2:16:09] if you're not interested in hearing that but um feel free to continue to answer ask your questions via the q a and we
[2:16:16] will remain online now for the next 45 minutes or so all right everyone this is amber just jumping back on here
[2:16:30] we didn't notice any common questions um coming up on the earth engine exercises so hopefully you all work through those
[2:16:38] nicely nicely um a few reminders before we finish for today's session um we are cataloging all of those
[2:16:46] questions and the answers in a q a document that we'll be posting to the training website um give us a little bit
[2:16:53] of time to go through those and make sure we've answered everything properly and we'll post this as a pdf to the
[2:16:59] training website that you can use for reference later on again for those of you who may not have seen it the earth
[2:17:08] engine script codes are located within the powerpoint itself for today's presentation you can go directly to that and work through them
[2:17:17] yourself yourself we will be sending around a survey i mentioned this earlier so we really appreciate your feedback
[2:17:27] in particular in terms of the training format ideas you have for other kinds of formats and other types of
[2:17:37] topics for training or software you'd be interested in us um we are really focused on meeting the needs of our
[2:17:45] community out there so we want to hear from you we want to hear what's working for you what isn't um
[2:17:50] over the the past couple of years we've gotten a lot of uh response about the use of earth engine so we've tried to
[2:17:57] meet that response with a couple of recent trainings in the past two years and it is a it is a fantastic resource
[2:18:03] along with many others out there so thanks again for being with us we had hundreds of folks from around the world on and we're
[2:18:12] always so grateful for our fantastic audience and participation so um we hope you enjoyed this webinar series we will go ahead and close for
[2:18:22] today if you have additional questions that aren't answered here or that we didn't discuss today you can email
[2:18:29] myself myself um or my colleague juan terrace perez our email addresses are listed here and we'll keep them posted on the q a
[2:18:36] document as well so do take care everyone and we hope to see you with our our next arset training series
