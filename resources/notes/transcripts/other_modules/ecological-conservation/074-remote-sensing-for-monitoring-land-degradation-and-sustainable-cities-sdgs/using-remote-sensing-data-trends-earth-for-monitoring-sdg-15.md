# Using Remote Sensing Data & Trends.Earth for Monitoring SDG 15

`https://www.youtube.com/watch?v=tG4vxF1IP6w` · id 49 · 1:34:48 · module 89 — Remote Sensing for Monitoring Land Degradation and Sustainable Cities SDGs

[00:03] thank you all for joining us today this is session two of our remote sensing for monitoring land degradation and
[00:10] sustainable cities sdgs again my name is amber mccollum and i will be your presenter along with our
[00:18] once again fabulous guest speakers this week we will also have uh pablo ovellas from the dominican republic and um he's
[00:30] going to provide us with a perspective on country reporting so we're really excited to have that perspective with us
[00:36] here today and um once again we have our colleagues with ci who are going to be really
[00:42] focusing on their trends.earth tool so we're excited to have them back as well a few reminders before we begin today
[00:54] this training will have three one and a half hour sessions we had our session last week on july 9th
[01:01] this week july 16th and then again our final session will be a week from today on july 23rd
[01:09] note that you only need to attend one session per day the same material is presented twice each day
[01:15] but session b is going to be given live in spanish you can find all the course materials
[01:21] listed on the website here and this will include the recordings the presentations and the homework assignment that will be provided next
[01:29] week week we will have some time for questions at the end of each session but if you don't
[01:36] get your question answered or have a follow-up you can email myself or my colleague juan torres-perez at our
[01:42] emails listed there we will have one follow-on homework and that will be available on the course website
[01:52] website to receive credit for the homework you must submit all of your answers via google forms by the deadline and
[02:00] again note that deadline is august 6th and as i mentioned earlier the homework will span across the entire
[02:07] training so just be aware of that when you're you're completing it you will receive a certificate of
[02:14] completion if you attend all of the live webinars webinars all three and complete the homework by the
[02:22] deadline deadline these these certificates take a little while to process so please be patient and give about two months from the end
[02:31] of this training until you receive your certificate again as i mentioned last week these are the prerequisites for
[02:39] this course um having a fundamentals of remote sensing and really importantly having qgis downloaded and installed and having the correct version of qgis
[02:51] so we recommend 2.18.15 and then you must download install and register the trends.earth plugin for qgis qgis in order to complete the exercises
[03:04] so that's really an important piece to completing those aspects before you you try to go through the exercises
[03:17] again you can access all the course materials on our website listed here and this will be a powerpoint
[03:23] presentation of the english and spanish a pdf of each week's exercise and the link to the recording
[03:32] eventually a few days after each session we will have the link to the recording up there that you can watch and then
[03:38] finally the homework google form link will be there as well so last week we really focused on this
[03:49] overview of sdg 15 and um started to get an introduction to the trendsetters tool and then this week we're going to hear
[03:58] more about global data sets and um some of their pros and cons so thinking about the limitations of some
[04:08] of these global data sets and that's really important too and then we're going to have this country-specific example which we're
[04:16] really thrilled to have so so first we're going to hear from conservation international about these global data sets and some of their
[04:27] limitations limitations and then we'll hear from pablo about country measuring and reporting and we're really thrilled to have this
[04:36] perspective and then we're going to focus finally on doing an exercise with the tool as well so now i'd like to hand it over to our
[04:48] guest speakers and thank them all for being here again today and i will let them have full reign
[05:01] so so thank you amber for the introduction again my name is alex wallace i'm senior director of resilience science at
[05:08] conservation international and and in this session we'll be talking about how to use custom data within the
[05:16] trends.earth tool for monitoring land degradation degradation so quick review for those of you who didn't see the first session
[05:25] trends not earth again is a tool for monitoring land condition in support of monitoring in particular sdg 15.3.1
[05:34] which is land degradation neutrality and it's a free and open source tool that supports monitoring all three
[05:41] components of that indicator so that's land productivity land cover and carbon stocks stocks you saw in the last session how to use
[05:49] trends.earth to monitor these three indicators using global data sets what we'll show in this session is how you
[05:56] can use custom local or national level data within trends.earth to monitor these indicators so again as we mentioned before there's
[06:07] three different indicators that go into 1531 1531 land productivity land cover and soil organic carbon what i'm going to focus on here today is
[06:17] how we can use custom to national level data sets in particular to support land cover cover you can use custom data for all three
[06:26] indicators the example i'll show you here today is geared around land cover but again just to know we do support
[06:33] custom data sets for all three of the indicators a little bit of quick review here what is the land cover indicator again
[06:42] this this land cover change describes changes in the biophysical character of the earth's surface surface and what we're particularly interested
[06:50] in in for the sdg is transitions and land cover so that could be forest to grassland for example
[06:57] grassland to urban areas what you see here on the bottom of the slide as an example from the amazon
[07:03] of land cover maps from 1992 to 2015. so trends.earth can be used to monitor changes in land cover
[07:11] over time and again the way that works is combining two different maps uh so for example 2001 to 2015 if we
[07:21] have two different land cover maps derived from satellite imagery we can derive transitions between land cover and using
[07:28] that transition matrix we talked about in the first session we can arrive in a map of potential land degradation
[07:38] that transition matrix is shown again here here as you can see areas in green are areas we consider to be improvement red are
[07:45] transitions we consider to be degradation degradation and again i'd uh encourage you to listen to session one for more information on
[07:52] this transition matrix so our focus here today is going to be on how we can use uh custom data sets uh
[08:02] in places some of the global data sets that are used in trends.earth so what i'd like to talk about first is
[08:09] some of the advantages and disadvantages of using local data in place of the global data sets provided
[08:16] in trends.earth so the first thing i want to focus on are resolution and accuracy some of these will of course be review
[08:25] for some of you but just to show you an example of what i mean here what you see on this page is the global
[08:33] land cover data that is used by default in the trends.earth tool this again is from the european space
[08:40] agency this is the cci land cover data set this is a 300 meter resolution data set that's available from
[08:49] starting in 1992 and it extends through 2015. so this is a global data set uh that's available
[08:58] available by default within trends.earth how does this compare to other data sets that might be of higher resolution so
[09:06] here what we're talking about is spatial resolution so that's the size of the pixel the individual units
[09:12] that make up that land cover map what you see on the left hand side uh are images from 2008 and 2014 from
[09:20] that european space agency cci land cover change data set again it's a 300 meter data set on the
[09:27] right hand side what you see are images from a product produced by the sleek system in kenya as well as
[09:35] rcmrd which is the regional center for mapping of resources for development which is based in nairobi kenya
[09:42] they're the nasa severe partner in the region and they produce land cover maps for a number of countries in east africa
[09:48] but what you see here is the 30 meter compared to the 300 meter map of course the first thing that you see
[09:54] is the large difference in the size of the pixels we're able to make out much more detailed information in terms of
[10:01] spatial scale when we use that higher resolution data set on the right you'll also notice there's some differences in the classes
[10:09] we're able to detect as you can see on the southern side of the lake we can make out
[10:15] more detail in terms of the forest cover that is missed from the global non-cover product on the left
[10:24] so why is it beneficial to have local data sets well as i showed you before with local data sets oftentimes we can
[10:32] get a higher spatial resolution in terms of the maps that we're able to produce it's also possible to get higher
[10:41] accuracy and precision when we have products that are validated locally locally to show an example of what this can mean
[10:50] again in terms of resolution here we're looking at very high resolution imagery so commercial satellite imagery here on
[10:57] the left going up through the size of a landsat pixel pixel on the far right so that's a 30 by 30
[11:04] meter meter pixel on the far right on the left hand side is a one by one meter resolution
[11:10] pixel again of course this is the same story as what we saw in ethiopia but with the higher resolution sensor we're
[11:17] able to make out much more detail in terms of the actual land cover types that are present in this image
[11:26] so what we see here is an example from mount kenya and we see a similar picture to what i just showed you in terms of
[11:33] resolution on the right hand side we have an image taken from the european space agency cci land cover change product at 300
[11:43] meter resolution on the left hand side we have an image derived from sentinel imagery that's 20 meter resolution
[11:52] and what you can see is with the higher resolution imagery we're able to get a more detailed picture
[11:58] of what's actually going on at the summit of mount kenya where on the right hand side from the cci land cover
[12:05] product it's all mapped as the same class class now in comparing these two images it's useful to think of the concepts of
[12:12] precision versus accuracy so i just want to give a more technical explanation of these two terms before we return to that
[12:21] image of mount kenya so what you see here is an image showing showing the idea of precision versus accuracy so
[12:29] imagine that we're looking at a target and all of those yellow dots are are trying to hit the middle of that target
[12:36] that circle in the middle on the left hand side on the upper left we have an image that's neither precise nor
[12:42] accurate accurate those yellow dots aren't hitting the center nor are they in any consistent pattern pattern on the right hand side we have an image
[12:50] that shows those yellow dots all clustered around that center of the target so that's precise and it's accurate
[12:58] on the bottom middle we see an image that's precise but inaccurate there's high precision because all those dots
[13:05] are all clustered around the same area but it's the wrong area it's not the center of the target so it's precise but
[13:12] inaccurate inaccurate so if we return to that image of mount kenya what we can see is that
[13:18] we're able to get much greater precision in terms of the number of classes that we're able to
[13:25] map close to the summit of mount kenya we have that higher precision due to the greater degree of information at a fine
[13:32] spatial scale that's afforded us by that high resolution imagery imagery to assess whether our observations are also accurate it
[13:41] can be useful to actually conduct a validation validation and so a validation exercise is something that can be done
[13:48] particularly with custom national data and it can ensure that you have a relative level of accuracy and precision that is
[13:56] needed for your land cover change products so what might that look like this is an example example of a framework used by the vital signs
[14:07] project which is a project conservation international has active in rwanda and this is showing all of those red dots are points on the
[14:17] ground that were visited in the field and the land cover at that pro at that point rather
[14:22] was recorded so that it could be used to validate a land cover product so in other words we can actually use that on
[14:29] the ground information from the field to assess the accuracy of the land cover maps that we're producing
[14:38] if we shift to the right hand side what we're showing is an example of what can happen particularly if you
[14:44] have a lower resolution data set so imagine on the left-hand side we have a patch of land that's covered
[14:52] in grass and then on the right-hand side we have water when the sensor is viewing that so if we
[14:59] step down to the line that says sensor recording recording if we have a fairly coarse meaning not a high resolution sensor it
[15:07] will be trying to split that image up into say three different pixels so the one on the far left is a pure image of
[15:14] grass the one on the far right is a pure image of water and then the one in the
[15:19] middle is mixed if you have a very light coarse resolution sensor mapping that class in the middle is going to be difficult
[15:28] because you're likely to have confusion between those two classes there's different ways to address this you could add
[15:35] another class to your classification a mixed class between grass and water which would improve the precision of your data or of course you
[15:44] could also increase the resolution of your data itself such that you can map a pure pixel of grass on the left
[15:51] pure pixel of grass water on the right and then pixels representing that mixed class in the middle
[16:01] so to summarize why do we support custom local data in trends.earth this is not to say that global data sets
[16:10] are not valuable or accurate or precise they are but it is certainly possible at the local to national scale
[16:18] to improve the quality of products using locally available information uh it's important to consider the quality of global data sets
[16:27] and the area in which you're interested in working to understand their relative accuracy and precision in the area in which you
[16:34] work and to understand the limitations of the data in the particular place in which you might be conducting
[16:41] an analysis and then of course there's another point that i haven't touched on yet which is using nationally available information
[16:50] can be particularly important in terms of reporting if a country has a national land cover data set that has
[16:58] already been agreed to or approved by national units it may be very important to use that official data set
[17:07] in place of the globally available data sets provided by trends.earth so how does this actually look if you
[17:15] wanted to use this information in trends.earth we'll show you a more detailed example in a minute but there's again focusing on the land
[17:23] cover example there's two different ways that you can customize the land cover data within trends.earth the first is to
[17:32] use the globally available land cover data provided in the tool but modify the way in which the classes
[17:39] are aggregated so the european space agency land cover change product has a range of different classes that are mapped what we do in
[17:48] the trends.earth tool is combine them into a smaller subset of seven land cover classes these are the land cover
[17:55] classes used by the ipcc for admissions reporting reporting and by the unccd for tracking and reporting on land degradation so
[18:05] what you see here on this screen is input code is showing you a class from the european space agency
[18:13] cci product and then on the right hand side is how that class is represented within trends.earth so for example
[18:22] with with tree cover classes there can be nationally agreed upon definitions of what constitutes a forest you can modify the way that these
[18:30] classes are represented at trends.earth to be consistent with that definition or if you notice for example that
[18:37] a particular class is being mapped as tree covered when it should be grassland you can correct that here this doesn't
[18:43] require using an additional data set it's just a modification of the way the analysis is conducted the second way that you can customize
[18:53] land cover data is to replace that global data set entirely entirely with a locally or nationally available
[19:00] data set what's shown here is the screen that will allow you to read in information that you may already
[19:07] have and use it to replace the globally available data and trends.earth so what these screens are showing is
[19:15] how you would tell the tool what for example uh three means in your land cover product was that grassland does
[19:22] that treat covered is that urban etc once this process is done you can run the tools as we showed you
[19:31] in the last session to produce a final summary table what you see here is an example of the
[19:36] same analysis conducted using on the left left the default 300 meter land cover data on the right hand side
[19:43] a custom 30 meter land cover data set and what you'll see is there's slight differences differences in the percentage land area improved or
[19:51] degraded not a huge difference here but in some areas that might be a different story so again just to recap though i focused
[20:02] on land cover change here and how custom land cover data can be used in trends.earth this can be done across
[20:09] all three of the indicators in the tool and for further information on how to use custom data for land
[20:15] productivity or soil organic carbon you can see our materials available online at trends.earth so thank you for your attention during
[20:25] that overview now what i'm going to do is hand it over to pablo valles who's the ldn country
[20:31] consultant consultant from the dominican republic and he's going to speak in a bit more detail about the importance of custom
[20:39] local and national level data within sdg reporting and also just as a reminder for further information on anything i've
[20:47] just discussed you can of course see the website at trends.earth and also for some of the global level data sets
[20:54] maps.trends.earth maps.trends.earth pablo over to you is [Music] okay foreign um [Music] a preparation [Music] [Music] foreign foreign [Music]
[23:33] [Music] is [Music] a [Music] foreign uh foreign it [Music] and [Music] [Music] a a [Applause] [Applause] [Music]
[26:50] platform platform [Music] [Music] uh [Music] foreign [Music] [Music] foreign [Music] foreign [Music] a um fundamentally [Music] global
[30:51] [Music] [Music] a [Music] a [Music] foreign [Music] participants [Music] from [Music] [Music] foreign foreign [Music] [Music] [Applause]
[34:32] foreign [Music] [Music] nicaragua [Music] oh [Music] hello foreign [Music] um [Music] [Music] foreign [Music] foreign [Music] [Music] foreign
[38:42] [Music] thank you pablo for that discussion now i'm going to hand it to my colleague monica noon who's senior manager of data
[39:19] science for resilience here at conservation international and she's going to show you how you might actually use some custom
[39:26] local or national level data sets within the trends.earth tool over to monica all right thank you very much again this
[39:35] is monica noon i'm going to be walking through through how to upload custom land cover data sets today and run the sdg 15.3
[39:45] indicator as well using a custom data set so if you forgot to save your project it's okay
[39:53] you can start qgis again and i'll show you how to load your data sets that you ran
[40:00] ran as we demonstrated in session one again in a few minutes but first i'm going to show you how to upload a custom land
[40:07] cover data set so we'll go back to the trends.earth plugin in qgis and select calculate indicator again we select land degradation
[40:16] indicator that first option and we'll actually go to option 2 now so using customized data here you can
[40:23] upload productivity data sets land cover and soil organic carbon since most countries have a national level data set at multiple time steps
[40:31] that has been validated we're going to demonstrate land cover data today so you select that middle option
[40:39] land cover so here you can see a very familiar screen screen for the land cover setup so
[40:46] so i'll go ahead and select custom land cover data set because i'll be uploading my own so since i haven't ingested it into qgis
[40:57] yet i have two geotiffs i'll first select import and here's where i'll pull in that information so as you see here i actually have two
[41:09] different data sets for uganda so i'm going to select the year 2000 data set this is a data
[41:17] product from our cmrd and which is based out of kenya they've done some land cover mapping for many
[41:23] african countries in east and southern africa africa so i can just pull in that tiff right there it only has one
[41:31] band but you can select from the drop down here if your data set has multiple bands bands and i'll enter in the year of data so
[41:38] right now i have a data set for 2000 then i'm going to select the edit definition definition if you remember from session
[41:46] one there was this uh the aggregation of land cover data set so the european space agency data land
[41:54] cover data product has 37 classes this one has 18 different classes now there's a lot of information here so
[42:04] i'm going to refer back to the website this is our trends.earth website which uses the same data set as the tutorial data
[42:13] which you can download directly from our website website and this is the land cover data set so
[42:19] i'm going to need to aggregate this into those seven land cover categories so as you can see here we have 18
[42:27] and we give instructions on how you can aggregate that down to the seven classes so the first
[42:32] one is no data i'll leave it there we have the next few are tree covered areas so one through seven we have tree
[42:52] covered covered eight through eleven are grassland and then we have cropland 12 through 14. and then the final ones are
[43:30] wetland water body artificial and other land wetland artificial and other land okay so now that i have
[43:47] this this i don't want to do that a second time so i'm going to actually save that
[43:52] definition we recommend that you do this every time because this is also very useful useful for remembering the analysis that you
[44:00] ran ran so i'm going to say that it's uganda scheme 2 is the data set from rcmrd
[44:12] and i'll save that there there and i'll hit save again so now we have that definition of the land cover data
[44:21] set aggregated into seven classes and we just need to save where that output will go so i'm going to say uganda
[44:31] this is a custom land cover data product for the year 2000 i'll save that there select ok
[44:46] now this is going to be running locally and this actually might take a few minutes to run
[44:58] once that is completed you'll see that this data set is now available in the drop down so we're going to need to do
[45:04] that a second time with the second data set so we can get the change over time of those two data sets
[45:15] now now this time when we select edit definition instead of entering those in from the information on our website we can
[45:24] actually just load that definition again you can see here that that has been populated very quickly now i hit save
[45:40] and i will also save the output custom lane cover 2014. now i can hit ok once again
[46:02] and it will load once you've ingested both of your land cover data sets you'll see the options
[46:11] of having these in the drop down you want to make sure that the dates appear correctly so you have your initial year
[46:17] as 2000 your final year as 2014. then you can select next again we have this degradation matrix
[46:27] where you can change whether you want the improving degrading or stable land cover transition categories anytime you make any changes we
[46:37] recommend that you save that information so that you can replicate that same analysis later so if i were to change
[46:43] something i would save table to file i'm going to leave it with the default transition transition as it is
[46:50] and select next i'm going to run it on uganda again selecting next and and i'll name the task now this is going to
[47:01] be run locally on your computer so so you can name the task and and write some notes
[47:08] notes where you receive the data set from any other details that you want to indicate there and then select calculate
[47:15] to get the custom land cover degradation we need to save the output and hit save so now it'll process locally
[47:32] and give an output of that transition and land cover degradation at 30 meter resolution using this custom
[47:39] land cover data set so once that has run finished running locally on your computer you can see
[47:47] that we have four layers now so we have the two land cover data sets 2000 2014 um we have the land cover degradation
[47:56] which is what you saw when we calculated the three sub-indicators in session one and we have the land cover transition so
[48:03] this is uh showing the different changes where you find loss loss in each category and here's an example of that land cover
[48:16] degradation output if you remember from the first session the product was a coarser resolution and we'll compare those outputs in a
[48:26] minute minute so now i want to bring in those other sub-indicators since i'm not loading a full set of
[48:34] custom data sets what i want to do is select this folder icon for load data and load an existing
[48:41] trends.earth output file so if you remember i calculated in session one all of those default indicators so i'm going to bring in the three
[49:00] productivity layers i'll just bring in the land cover degradation so we can quickly compare those two outputs
[49:06] and the soil organic carbon degradation and again we can collapse this and turn off some of these layers so it
[49:23] doesn't take as long to load and i want to just quickly compare using this zoom in icon
[49:41] the two different land cover resolutions so here we have the 2000 to 2014 and here we have the the default
[49:49] indicator we can see there's quite a difference with that resolution there's a lot more detail in the land
[49:55] cover at 30 meter resolution than the one provided at 300 meter resolution so just so i don't get confused even
[50:05] even though it indicates 2001 to 2015 i'm going to remove this and then i'm going to go back to
[50:13] calculate indicators and calculate the final sdg 15.3.1 indicator you'll see that everything is populated if i had kept that land cover data set
[50:26] in here it would be another option in this drop down so i would have had 2001 to 2015 with that coarser 300 meter
[50:33] resolution resolution since i removed it we only have one option and everything has been pre-populated here so then i'll select next again we need
[50:42] to name our spatial outputs and i'll just add 2000 2000 custom land cover to the name a little shortcut is to copy that
[51:07] so you don't have to retype it for the excel spreadsheet here again i'm going to select an area
[51:20] so i'll use a more slightly more official boundary for uganda select next and name that final output
[51:33] custom land cover sdg sdg three three one one so now instead of running on all the default indicators we're running it on
[51:43] the default for the productivity the default data sets for soil organic carbon but the custom land cover
[51:53] degradation layer so now this is going to run locally and it'll take a minute to run okay once
[52:07] that has finished running locally on your computer it may take you know 10 or 20 minutes to run
[52:13] since it's a very fine resolution you'll see this final output which is land productivity um so alex
[52:21] presented in the earlier session about how that the land productivity is combined uh with these three uh productivity sub
[52:33] indicators so now state performance and trajectory have been combined into this land cover productivity data set and you can see
[52:40] from the legend we actually have a little more information than just declining stable and increasing we also
[52:46] have early signs of decline and we have stable but stressed so this is important if you're kind of monitoring an area
[52:53] that may be not fully experiencing land degradation but but is starting to see some symptoms of and signs of land degradation
[53:03] you can also get this final sdg 15.3 degradation indicator and if you'll remember from the first session we produced the same output but
[53:14] that was using those custom level data sets i can add that and we can compare the resolution as
[53:25] well here i'll just add just the degradation we can see there's some subtle differences differences in the final calculation
[53:53] due to that finer resolution data set again you'll have a final table which will summarize the data sets
[54:04] by each breakdown of category as well so that concludes session number two using custom land cover data sets to
[54:12] report and monitor sdg 15.3.1 thank you i'd like to thank our guest speakers again for being here with us today and
[54:25] providing us with those unique perspectives perspectives in the lecture and the exercise as well just to wrap things up i again wanted to
[54:35] mention mention that if you have any follow-on questions you can email myself or my colleague juan torres perez and
[54:43] we will also make the email addresses of the guest speakers available to you all if you want to
[54:51] follow up with them with questions as well well if you have any general rset inquiries you can email our program manager anna
[55:00] paredes paredes and then again feel free to visit our website to take a look at all the different types
[55:07] of trainings that we have available for you so i'd like to thank you all for your participation
[55:16] participation and as a reminder we will have our next and final session a week from today on
[55:21] july 23rd and we're going to shift gears a little bit and talk about sdg 11 and cities
[55:29] and now we will have some time for questions questions so if you have any questions you can
[55:36] feel free to put them into the q a box there and then we're going to as we did last week display the questions
[55:43] on the google document and follow along that way and display them and then eventually we will have the
[55:51] questions and the answers to those questions on the website so you can refer back to those later again
[55:59] okay great so thank you everyone um please bear with us as we switch over to the um document displaying the
[56:07] questions and just a reminder do add your questions to the q a box as they come up and
[56:16] we will go through them one by one so this is alex zwolf again from conservation international thank you everyone for
[56:29] listening in on the webinar today and of course please keep your questions coming in if you do have more uh that you would
[56:36] like to send in we'll make sure that we get them into the q a box so so we'll start going through these i know
[56:44] that these are still coming in so uh we'll give it a second so that they can get transcribed into
[56:49] the document uh but for the first question question one is what differentiates land degradation from desertification how can trends.earth be used to track
[57:01] dignification versus just land degradation degradation so this is a great question and one that now i realized we didn't address in the
[57:08] first webinar so so desertification i would say is a more specific type of land degradation uh so
[57:16] desert vacation tends to refer to arid or semi-arid areas where you have uh typically loss of soil loss of water
[57:25] bodies and conversion of land to desert right now in the land degradation community there's a broader focus so looking at
[57:37] additional types of land degradation in fact the unccd has started referring to dld or desertification land degradation and
[57:50] or drought so there's a recognition that there's a broader set of challenges beyond uh the challenge of desertification alone
[58:00] uh so for that reason we typically use the broader term land degradation rather than desert vacation per se
[58:08] in terms of the second question how can trans daughters be used to track desertification desertification versus just land degradation
[58:17] uh what you might look at here are uh well two things i would suggest looking in a bit more detail at your
[58:28] land cover data sets i'd recommend perhaps using a custom land cover data set where you can more
[58:35] accurately capture transitions to or from desert classes the second thing that you might do is look at
[58:47] the productivity indicator uh where you can can try and include uh the impacts of climate on the
[58:56] signal that you're detecting in productivity that's something we don't go into detail in this webinar but if
[59:02] you go to the trends.earth website you can look at how you might try to pull out some of the climatic signals
[59:11] as well which would be important in that case and then for question two [Music] [Music] could you use very high resolution looks
[59:28] sorry i lost the screen could you use very high spatial resolution images for example from drones to analyze the
[59:37] indicators in a small area i would say yes you certainly could here here drone imagery would be most useful again
[59:47] for land cover given for land productivity you will need a long or time series in order to detect trends
[59:54] so so although you can measure nddi from a drone you're not going to have the long time series that you would need
[1:00:01] to detect trends there but you can certainly use it to produce a high resolution map of land cover
[1:00:08] and you can import that data set then into trends.earth using the process that monica described [Music] [Music] for question three
[1:00:25] i have installed the qgis 2.18.2 and i don't know why i can't find the plugin plugin um
[1:00:31] um [Music] [Music] i'm not sure exactly what's going on there but what i would encourage you to
[1:00:37] do is email us directly and we can uh look into what might be going on on your computer
[1:00:45] and uh again you'll see those emails uh it's trends earth conservation.org or you'll see uh monica's email and my
[1:00:54] email at the top of this document yeah and just to follow up on that um when you're installing a plugin there's
[1:01:01] actually i think two or three options in the menu so there'll be something i think it says
[1:01:08] installed so you may actually have it filtered by the installed plug-ins on your machine and and just
[1:01:18] just when you're sending any emails with questions on the the toolbox just include a screenshot of where you're
[1:01:23] both the error and then what you've done to produce the area i can say and we can better help you but it may
[1:01:31] just be filtered for which which plugins are already installed and that's why you're not seeing it even when you
[1:01:37] search for it so again just email us directly at trends.earth at conservation.org and we can help you out there
[1:01:48] so then for question four can we forecast or project future land cover with trends on earth for example
[1:01:55] predicting land cover for year 2050 or even 2070 and 2100 the simple answer there is no um
[1:02:03] um uh we don't support right now uh land cover projections we are talking about uh developing tools to better support
[1:02:13] scenario analysis so that you could analyze analyze um different scenarios of land change in an area that is not yet released
[1:02:21] uh but we don't have um projection of land covered that far in the future on the timeline right now
[1:02:31] question five when will tren's daughter be available in qgis three excellent question which we've gotten multiple times
[1:02:40] so it's something we're actually working on we do have uh the initial changes made uh certainly before the end of the year
[1:02:48] uh hopefully more uh soon than that so we'll be sure to of course post on our website as soon as it's available
[1:02:56] uh and then also send out a broader email as well as soon as the plugins available at qgis3
[1:03:02] and if you are interested in qgis i'd encourage playing around there's a lot of great new features in the new version of
[1:03:10] qgis especially for making maps and figures so it's a great new version of software question six there's a need to allow for computation
[1:03:23] of land degradation at lower levels of administration for instance kenya moved from provinces to county government how
[1:03:30] will this be updated in the tool secondly secondly how can one compute land degradation for multiple countries and have the output
[1:03:37] as one qgis project layer so for the first part of the question this is also something that we've heard
[1:03:46] uh from there's many countries where you have decentralized governance where there's a need to calculate uh the indicators at a
[1:03:54] lower level and typically what we've heard is there's a need to get the pdf or rather the excel reports
[1:04:02] for for for example every uh county or every award depending what country you're in we do have actually a button and a tool
[1:04:11] that says coming soon so this is something we are actively working on uh what we're trying to figure out is
[1:04:18] the best format for those reports um um so that it can be something that can calculate easily on your computer or in
[1:04:26] the cloud when you're working with custom data sets for example so there's some details we need to work out
[1:04:33] but yes it's a need that we're aware of and we will support uh the second question secondly how can
[1:04:42] one compute ld for multiple countries and have the output as one qgis project layer layer uh uh for that part of the question
[1:04:53] i guess it would i'd say it depends on what you need but you can calculate multiple countries
[1:04:59] if you submit your own shape file so if you create a shape file that joins whatever countries you need together
[1:05:07] you can run a task to calculate degradation across all the countries at the same time and that will give you a single map
[1:05:15] showing all of those countries you could then run reports on each country individually or on all three depending on what you need
[1:05:24] is there anything you've done monica or maybe just the limit on size oh yes uh and we do have uh there'll be a limit
[1:05:34] on the size that you can run uh in terms of area so do let us know if you need to run a
[1:05:40] large number of countries and we can set something up for you so that you can do that successfully
[1:05:50] question seven uh uh so the main part of the question is how can i calculate sdg 15
[1:05:58] for two or five years so so we limit you which is what you've obviously noticed you will get an error
[1:06:07] message if you try to run an analysis for a period of less than 10 years years the reason we do that is because the
[1:06:15] productivity analysis is based on a trend uh and we're trying to prevent analysis of very short time periods
[1:06:23] where you're likely to have a fair amount of noise in the ndvi just due to variation in climate
[1:06:31] there's no reason the analysis couldn't be run for a shorter period technically the reason we have that limitation is to
[1:06:38] make sure that in a large number of cases you'll get valid results results so if you wanted to look at sdg 15 for
[1:06:48] two or five years i would suggest that you not um because it really does take you need sufficient data for the
[1:06:58] productivity indicator to get a meaningful trend um um but but you could of course always email us and
[1:07:06] let us know what exactly it is you're trying to analyze and we might have some suggestions suggestions about
[1:07:12] about what you would like what would make the most sense for your case but in general for the sdg 15
[1:07:19] we'd suggest allowing at least 10 years to make sure you have enough data in the productivity indicator
[1:07:28] um so for question 8 there was a question on the qgis exercise results for the homework homework and i see that our colleagues at nasa
[1:07:37] have already answered that it's not necessary to submit your results they'll have a google form available next week for the homework and i just
[1:07:47] like to add if there's any open-ended questions it's mostly just to answer some of kind of our curiosities about how people
[1:07:55] use the tools so there's no right or wrong answers so just go ahead and answer those for whatever work you're interested in
[1:08:02] running the tool on and then question nine is it possible to join the three indicators analyzed within ddi with other spectral
[1:08:14] indices indices certainly you can do that uh right you'd need to do that directly within qgis or
[1:08:21] other software we um sorry that was an aside uh but yes it's certainly possible but you would need to do it directly within the
[1:08:42] software so it's not something you can do within the plug-in but qgis is a full gis system so you can
[1:08:50] certainly do all kinds of other analyses with these data sets so question 10 is i work in mongolia
[1:09:00] where the data is difficult to find at finder scales so if i want to find scale land cover
[1:09:05] for an area would i have to classify the area twice covering an old date with a recent date
[1:09:11] so i'll answer that question so since we are looking at the actual transitions to classify classify degradation in land cover you will need
[1:09:20] two two separate land cover maps so you need two two land cover maps at different points in
[1:09:26] time time preferably at the beginning and end of the dates that you're running the analysis analysis on and then you referred to a map that
[1:09:35] alex showed with red dots for cover classification did you create training polygons around those locations for land cover
[1:09:45] classification so i think what you're referring to is the vital signs yeah data sampling protocol so this is something that we've used in
[1:09:54] several african countries it's just a randomized sampling approach um so what we did is we we ran
[1:10:02] a randomized uh uh sampling like point sampling within the land cover types like proportional to land cover types in in
[1:10:14] the country so we were creating um land cover maps we used existing validated land cover maps to determine what
[1:10:21] proportion of each land cover existed within the country and then proportionately took samples in those different land cover categories
[1:10:35] we can also follow up and send you a link to that information on the vital signs website it's vitalsigns.org
[1:10:43] that shows how we both create those sampling protocols and carry out data collection in the field yeah and so i know i was trying to find
[1:10:52] that map again to tell you the colors there's either red or black dots on there that show
[1:10:57] what we call rapid roadside assessments and so what those were is building on what monica just said those are places
[1:11:05] where where in the field we conducted a quick assessment of the land cover added area and percentage within different classes
[1:11:12] and that can be used then to validate my member maps that are derived from that area what does monica was saying
[1:11:18] you can get more information on that on the website question question 11. the caribbean region is usually not
[1:11:28] covered in the global data set but alternative is there and it captures degradation degradation besides the esa 300 meter
[1:11:36] so what this question is referring to and we didn't talk about this in detail but there's two different productivity
[1:11:42] data sets in trends.earth one is derived from a product from the research commission jrc called the land productivity dynamics or
[1:11:52] lpd data set that's the default data set that was produced that were released rather by the unccd to support reporting
[1:12:02] during the last cycle the second is a data set uh produced by the trends daughter's tool tool uh to assess uh land productivity that
[1:12:14] is drawing on different input data from the jlc data set so the trends not earth version is 250
[1:12:21] meters the jrc is 300 meters the jrc is actually drawing though on input data that's one kilometers so it's
[1:12:29] a coarser input dataset going into that layer so i suggest looking at the the trends on earth data set the resolution
[1:12:39] appears the same but the jrc1 is actually resampled to 300 meters so it is a coarser dataset
[1:12:46] so i recommend comparing those two to see which works best in your area then also we have a new research project that's
[1:12:55] starting up soon where we'll be using landsat and sentinel data to map productivity 20-30 meter resolution which i think will be much
[1:13:05] better uh for the caribbean region given the needs that you mentioned uh so um that's something that will be coming
[1:13:13] out within the next year and we'll be supportive within uh question 12 how can qgis slash trends.earth
[1:13:25] be linked to gathering data about natural capital the amount or value of natural resources in the percentage of
[1:13:32] natural resources over exploitation to measure the inclusive wealth metric so so trends.earth is focused on assessing degradation
[1:13:45] so i think it would be most useful in assessing land condition there's additional information beyond that that you would want to draw
[1:13:55] on to understand ecosystem services provided by a given area as well as where beneficiaries are located so you would want to bring in additional
[1:14:08] information as well so there are other projects of course focusing on that the natural capital project for example
[1:14:15] uh there's some work we need here out of the conservation international and venture capital accounting um so i'd say trend.earth could be very
[1:14:24] useful as an input layer to assess particles and condition but you will want to bring in additional information from other tools
[1:14:32] as well we can find all so i think the next question 13 is asking if data on land degradation can be found
[1:14:47] for all countries in the tool for example uzbekistan and kyrgyzstan the answer is yes it's a global tool
[1:14:55] so you should be able to find data for both of those countries yeah and i'd say just to follow up we
[1:15:05] have a disclaimer at that step in the process under area um you can select from the drop down but
[1:15:13] that's just from the natural earth data set that we can publicly distribute so if you have a
[1:15:20] administrative boundary like a boundary of your country or other administrative boundaries province county etc you would like to
[1:15:29] load that yourself so you can select the area from file and load a shapefile using that area of interest
[1:15:38] and there's lots of resources where you can download administrative boundaries like gadm um however we're not allowed to
[1:15:46] distribute that due to the licensing so you would have to go and download that yourself to get those boundaries as well
[1:15:56] and then for question 14 while using custom 30 meter land cover data data by keeping sock and land productivity at
[1:16:04] 300 meter resolution how does it improve the accuracy when the default data are still at a lower
[1:16:10] resolution resolution so there's i guess two things i would say first is if you do use custom land cover data
[1:16:19] we didn't have time to demonstrate it here but you can use that land cover data data to calculate soft at the same resolution
[1:16:27] so you can calculate a 30 meter sock change product using your custom data so i'd recommend that you do that
[1:16:34] so that you are using the same land cover data for soil organic carbon as you are for the land cover indicator so
[1:16:41] that's the first thing i'd recommend but then the second part of the answer is you're correct the land productivity
[1:16:48] data will still be at 300 meter resolution resolution so you aren't gaining any accuracy and productivity from using custom land
[1:16:56] cover data what you are doing is you're improving your ability to detect or finally scale changes in land cover
[1:17:04] and that will then flow through to your calculation of stock as well if you follow the first recommendation i made
[1:17:10] so you're correct it would of course be better to have all of the income put data at 30 meters
[1:17:17] uh as i mentioned in response to a prior question we're working on that for productivity uh but there is still
[1:17:23] benefit to using a custom land cover data set even when you stick to the global data for productivity
[1:17:33] for question 15 is it possible to calculate the sdg for a very small scaled area such as
[1:17:40] quaternary catchment on other hand and can one run for the whole of canada is the area too large
[1:17:48] so so in response to this the answer is yes for both you can run it for a very small scaled
[1:17:54] area and you can run it for a very large area although we do place a limit at the high end we will be
[1:18:01] fine for canada uh uh but particularly on the low end remember the default data is 300 meter resolution
[1:18:10] so if you're running for a very small area you're not going to have very much data data available for your area so
[1:18:18] uh always be cognizant of the spatial scale you're dealing with uh for question 16 do you see a possible enhancement and
[1:18:34] development of tools for land use change valuation in urban areas higher resolution with such a diverse spectral signatures
[1:18:45] there's there's definitely need to better capture changes in urban areas certainly certainly right now for unccd reporting those
[1:18:55] areas are typically all mapped artificial artificial so there isn't much differentiation there in terms of the seven classes that
[1:19:04] we we include in the tool um so i think there would be benefit but you would need to think about
[1:19:15] whether or not those those additional classes are needed in order to actually identify changes in degradation for the topic that we're
[1:19:25] looking at here i'd say in most cases you're unless you're interested specifically in degradation within urban areas and you have a very high
[1:19:34] resolution cover map you're probably going to be fine using the global data but if you have a question that's
[1:19:42] focused on urban areas certainly you would need higher resolution data to get a like a larger number of
[1:19:48] classes and a higher spatial resolution also i'd encourage you to listen to the third webinar which will be on
[1:19:57] mapping changes and urban extent so that may be relevant given your interests uh is it possible to correlate land
[1:20:06] degradation and land cover change to extreme climatic events droughts and extreme rainfall using trends on earth uh again this is something where
[1:20:17] trends.earth would provide the input data you would need so you could produce the maps of land degradation or land
[1:20:24] cover change you can also through the download data tool tool download a number of data sets on climate
[1:20:34] but you would need to do additional processing in order to actually calculate that correlation and then also
[1:20:40] calculate the occurrence of extreme events events so it's possible within qgis it's not something we support natively
[1:20:49] natively should we add like the future stuff with droughts oh yes sorry good point and monica just reminded me the
[1:20:57] new research project i mentioned earlier that we'll be starting soon part of that will have to do with uh
[1:21:04] better supporting indicators of drought vulnerability and there will be new data sets that we'll be making available through the tools in that
[1:21:13] project so that would likely be relevant to this question so question 18 how are the default data sets selected
[1:21:24] in trends.earth given that there are many other options available from nasa usgis of gs and esa so we selected the default data sets um
[1:21:36] using the good practice guidelines that was adopted by the unccd so this was a report that was provided by csiro
[1:21:44] out of australia which recommended this methodology that we have and available in the toolbox so we we start the project we actually did an
[1:21:55] evaluation with our partners at nasa over the methodology that um that we could use productivity as a
[1:22:03] proxy for land degradation so they reviewed various methods residual trends evi trends and rue rain use efficiency
[1:22:17] efficiency water use efficiency so these are actually all available in the toolbox as well you can run analysis by selecting a
[1:22:23] different different option if you run the productivity on its own however at the end of our project
[1:22:34] our partners at nasa recommended that ndvi trends were the i guess recommended methodology to be using using um
[1:22:44] um for productivity yeah and i think the other consideration for the default datasets also is the length of the time series
[1:22:54] and so as we've alluded to going forward we'll have higher resolution productivity data 20 30 meters given the satellites we now
[1:23:03] have in the sky but going back in time of course we're limited to what was up there so for that
[1:23:08] reason reason uh we're drawing on the modis record which goes back to f1 f1 as well as there's support for adhrr as
[1:23:17] well a longer resolution to go further back in time to 82. so that's the other consideration is
[1:23:22] what is actually available historically so that we can calculate trends the next question sorry i lost myself here high resolution
[1:23:37] data sets usually have larger errors how are these errors accounted for and then degradation mapping great question and i'd say they're not
[1:23:46] accounted for well now uh so right now in terms of if you're talking about reporting accuracy isn't directly taken into
[1:23:58] account other than evaluation of the data sets and products prior to usage and reporting but there's no
[1:24:07] no agreed-upon methodology to directly consider consider the accuracy of a given map and how that might influence the
[1:24:17] ultimate results that you use in reporting uh so certainly i agree with high resolution data this is something
[1:24:28] uh that you need to be very aware of so we'd recommend you conduct a full accuracy assessment of
[1:24:36] any products that you use within the tool tool uh if you're using custom data sets and the other thing to think about is not
[1:24:43] just the accuracy of the macs individually but one advantage of the global data sets that we draw on
[1:24:52] is yes they're coarser and spatial resolution but they're constructed to be consistent in time so the methodology
[1:24:59] allows for comparison across time between individual years by the line cover data set that's not necessarily going to be the case for maps that were
[1:25:08] independently constructed so you can be accumulating error if you have have uh two linen cover maps where the
[1:25:16] accuracy isn't particularly high and then you use those uh to map change across time uh uh question 20
[1:25:27] our main interest is to map changes and land use management practices towards or against regenerative agriculture agriculture management so we would need to set up
[1:25:37] our own classes for example crops that are conventional till uh versus crop center conservation till otherwise it's something that's going to
[1:25:46] be available in future versions um um in terms of so i think the question here is can you alter the land cover classes i
[1:25:59] believe is what you're asking uh uh you cannot now it wouldn't be too hard to integrates so it's something we can put
[1:26:08] on the list and and yeah is there anything you would add i'd just say that if the your question is addressing
[1:26:21] these land cover changes changes you can actually use the tool if you just need to produce a land cover change
[1:26:28] map very quickly if you're trying to use the default data sets and differentiate those two different classes i don't think there's
[1:26:37] a way to do that now without having information from the field um um and seeing because the the esa product
[1:26:45] does have 37 classes so it's very detailed and if you're finding that you know the the change
[1:26:54] um um or the sorry the two categories um are mapped differently i guess you could break those out but you'd still have to
[1:27:03] ever great right yeah i mean you could kind of fake it with the way it's implemented now but yeah
[1:27:11] definitely add this to the list of something but we should think about yes um um question 21 can you suggest any
[1:27:19] published research work done by you to understand the tool in its outcome so if you go to the website there's a
[1:27:24] list of publications um so trends.earth and click on the publications link on the far left and that will give you a list of recent
[1:27:34] publications there's actually some more we need to add as well from other folks that cite trends on earth
[1:27:40] but we'll make sure we keep that list up to date uh question 22 can we run land degradation
[1:27:51] for specific areas in a country with trends.earth where can we find custom data data uh yes you can you can run it for any
[1:27:59] country country as monica mentioned earlier we have some default spatial layers included that you can select depending on the
[1:28:07] country state or a county the first sub-national unit we recommend you access your own national level maps if you can
[1:28:17] as that will be a more accurate polygon uh uh where can you find custom data that's something that i would suggest
[1:28:27] you reach out to whether it's minister environment or department of sensing statistics depending where you are there may be
[1:28:38] regional centers like the severe partners for example that have produced land cover maps um um so yeah there's various sources
[1:28:49] depending on what region you're in or of course you can also either commission or produce a custom
[1:28:56] data set yourself uh what map projection can one use for trends.earth especially for imported data data the projection needs to be defined and
[1:29:08] it needs to be something that qgis is can interpret easiest way to check is drag your data into qgis and see if it
[1:29:17] opens in the right place if you get an error message saying pgis can't recognize the projection projection then trans.earth won't be able to either
[1:29:28] um do we have anything on the faq on how to to fix rejections we can uh if you're having issues there are i'd
[1:29:36] suggest you google uh qgis guidance on how to define projections if your projection isn't defined uh but provided that it is
[1:29:47] it should work fine in the tool and the way the tool works is it will for any
[1:29:52] analyses analyses done in the cloud it will reproject your data to a common projection but it will
[1:29:58] ensure that areas are calculated accurately or if you go into much more detail than that but we'll leave it
[1:30:05] there for now um um has the tool been validated over west africa that's question 24. um so we did it work with salsa destiny
[1:30:16] and senegal was one of the partners uh for the first phase of the project uh uh we've also been working in ghana
[1:30:25] in liberia seem to be nigerian soon to be nigerian that's your monica we'll be heading there in a few weeks
[1:30:31] um so yes it's been used uh although most of our initial work was in east africa we certainly worked in west
[1:30:38] africa as well uh adding to question 18 was the use of ensembles of trends based on different indices
[1:30:49] investigated what two participants think about this option for further development i think it's a great idea uh
[1:30:56] uh no we don't use ensembles of trends based on different indices but certainly um um i think it's a good idea and we did
[1:31:05] mention i'm not sure if you're just referring to productivity or more broadly broadly uh to land aggregation as a whole
[1:31:13] your responses to the last webinar webinar question there i mentioned the world atlas of justification uses an approach trying to bring
[1:31:21] together a large number of data sets to see if there's a convergence of evidence indicating degradation in a particular
[1:31:28] area that sort of similar idea so that's something i'd suggest you look at but certainly a great idea and i'd
[1:31:34] encourage you to investigate that in your area question 26 how do we see how updated the data sets
[1:31:45] are in trends you can i think you can't help her like i was making sure uh if you go to
[1:31:54] the download data tool and trends.earth uh it's one of the icons on the toolbar there's a screen that will show you the
[1:32:02] starting and ending year for each data set so that will let you view the years available the resolution
[1:32:09] for each of the data sets in the tool uh in general we try to keep things update
[1:32:14] when the new data sets are released for productivity we sort of lagged by part of the year
[1:32:21] so for example for we just added well actually earlier in the year the data out to the end of 2018
[1:32:28] once this year is done we'll add productivity after the end of 2019 but then the update dates for other
[1:32:35] data sets just varies on the producer and i think that's all that we have for questions uh so
[1:32:49] less and more coming that looks like it so i want to thank everyone again for listening into the webinar and i will
[1:32:56] hand it back over to the our set team great thank you alex and monica for your answers to all these questions
[1:33:09] um um and thank you all for being here with us today um just a few reminders we will have the
[1:33:18] these q a documents documents posted on the course website within about a week or so so if you want to refer back to the
[1:33:28] answers to your questions you'll be able to do so on the course website and next week we will be discussing um
[1:33:39] shifting gears oops so there's the the website shown there there um being displayed so um for this
[1:33:47] session you'll be able to download those presentation slides as well as the pdf of the exercise from today
[1:33:55] and then we'll have next week's located there online as well and we're going to be shifting gears
[1:34:02] to to the urban landscape for part three which is our final week next week week so please do join us for that and
[1:34:14] also at that time we will have the link to the homework which will be a google form that you
[1:34:22] will fill out and it will have questions from from each session of this training series so please refer back to the website to
[1:34:32] take a look at that as well so thank you all again and have a great day you
