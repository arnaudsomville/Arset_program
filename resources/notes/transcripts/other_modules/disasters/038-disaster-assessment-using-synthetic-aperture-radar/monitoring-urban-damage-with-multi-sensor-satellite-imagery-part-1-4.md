# Monitoring Urban Damage with Multi-Sensor Satellite Imagery, Part 1/4

`https://www.youtube.com/watch?v=R5Pbrd9a6gk` · id 123 · 2:03:01 · module 54 — Disaster Assessment using Synthetic Aperture Radar

[00:01] hi everyone Welcome to our uh part one of humanitarian applications using NASA Earth observations um uh this is a the first uh ret
[00:11] training on humanitarian applications it's at an introductory level so uh really appreciate you all tuning in today um we are uh uh presenting this on
[00:22] June 14th um but we have a series of trainings four parts and these are all scheduled around um World Refugee day
[00:31] which is on June 20th 2022 this year and this timing um is is planned it's intentional because the
[00:39] topics we're talking about one way or the other really Connect into um the humanitarian concerns of refugee which
[00:47] is to say forcibly displaced populations who have been forcibly displaced due to armed conflict um and so we have four
[00:55] parts that sort of start in a sense chronologically at the beginning of this human perhaps not at the beginning but
[01:01] at a at a key juncture in the humanitarian crisis um that's today we're St talking about monitoring Urban
[01:06] damage and we're going to be doing that with with insar which uh we'll be introducing um in this
[01:13] presentation um Thursday of this week um we'll be talking about part two which is looking at Refugee settlement growth and
[01:20] population change part three next week June uh 21st there we're talking about more land cover and land use uh Trends
[01:29] in and surrounding Refugee settlements and then part four we're looking at um the climatic conditions climatic hazards
[01:37] at refugee camps and that's next week Thursday June 23rd so each of these parts is about two hours long and um
[01:45] just like this one we'll have a question and answer session at the conclusion of this this presentation um so we're kicking off
[01:53] here with part one of monitoring Urban damage with insar so you may be asking yourself or maybe you answered it if
[02:00] you're here uh joining the the presentation but why do we need a training on remote sensing applications
[02:05] in humanitarian settings what is special about humanitarian settings uh that's a good question um any remote sensing
[02:13] approach um that is useful from having environmental condition or change and there we're talking about landan cover
[02:20] classification say building detection Hazard assessments all of those could be effective could be relevant in a humanitarian setting really they they
[02:29] should be right there's no reason why the environmental condition or change would be somehow undetectable um inherently undetectable
[02:36] just because it's a humanitarian sing it's not that different from a sort of traditional say policy evaluation or STG
[02:44] assessments other things that that are set trainings have been developed for um we know that the same kind of conditions
[02:51] in a refugee camp are may may mirror the same kind of conditions that we see in a
[02:56] mega city um in terms of the vegetation condition in terms of you know the spectral conditions of the built-in
[03:01] materials so all these data that we're collecting there's nothing um inherently different about how we're going to what
[03:10] we're going to extract from these data we aren't introducing some humanitarian specific algorithms or anything to this
[03:15] nature so all these data that NASA are collecting with Earth Earth observation Fleet that we see in the video on the
[03:21] right hand side these uh these all could tell us something about humanitarian setting as any other place but the
[03:28] difference the reason that we have this um this training in particular um is because we need to know about the
[03:34] context we need to know about the specific concerns in humanitarian settings we need to understand really what's not so much different about the
[03:42] data that we're getting from satellites but what's unique about the the context what's unique about the settlements
[03:48] what's unique about for example the migration or population Dynamics um at within humanitarian settings humanitarian contexts of course are
[03:57] about people um and as we all know um satellite remote sensing are not really designed to detect people right they're
[04:06] not designed to detect um concerns and perceptions of environmental change they tell us about changes uh in the
[04:13] environment on the land on water in uh polar regions um ice and snow and in the atmosphere and all the interactions
[04:22] there in so we're kind of pushing these in this direction towards more of the the humanitarian setting and really
[04:28] thinking about community humanitarian concerns around armed conflict um and thinking about how and being aware of how we need to process and interpret the
[04:40] satellite data in the specific context so we have to know something about um the the humanitarian setting to to best
[04:48] use these data so that's where this presentation is coming from we're building on a lot of the other rset
[04:53] trainings that introduce the different analytical tools and techniques and data sets but we're putting them in the
[04:59] context and really um framing them around this kind of application um this is um really valuable for humanitarian settings
[05:09] because usually we're operating in a pretty data scarce environment and so the the um inherent capability of
[05:16] satellite remote sensing data to observe changes over broad scales broad timelines and of course that specific time dates and specific um locations
[05:27] super super valuable because often you man Arian settings uh there uh it's very dangerous to visit um active conflict
[05:34] zones so we can't necessarily be there to assess things and in some cases we're dealing with highly Dynamic situations
[05:41] where we can't have people on the ground and the ready to respond to uh concern um and sometimes the the scenario is
[05:48] that we have very remote uh geographically remote or or um difficult to reach for some other reason uh
[05:56] settings and so these are all classic applications where remote sensing is is really really valuable um so we're going
[06:03] to be working through some of these different applications um different context over the four parts of this
[06:09] training um after um the uh training is done in whole um these four different parts um we hope that that
[06:20] those of you who are joining um will be able to understand uh and really take action on using landscape and settlement
[06:28] level monitoring in some of the different contexts that we're talking about Which is far from being exhaustive
[06:33] but but I think does a great sense of getting a sample um thinking about some of the benefits limitations of different
[06:40] kinds of satellite imagery we'll be we'll be working with a bunch of different kinds uh throughout these four
[06:44] trainings thinking about the value of using time series analysis so not just before after or a snapshot of imagery
[06:51] but but rather um repeat long-term data acquisition so that we can detect what's happening surely over the long term but
[06:59] also at specific dates because we have images that sort of bookend came right before and came right after a thing we
[07:05] know happened we'll be doing that in today's training um and what about bringing in other kinds of data lots of
[07:12] other data sets are relevant open access to spatial products on population building Footprints infrastructure we'll be working with these uh in the in the
[07:20] next couple of trains in particular uh or parts in particular um and being cognizant of the limitations what data
[07:28] are appropriate or us useful for an application there's no one siiz fits-all uh use case right um there are always
[07:35] limitations and we we'll do our best to have a critical view on where we can rely on satellite data to give us a a
[07:43] useful and insightful take on the conditions and where we're saying ah actually we're kind of at the edge of
[07:48] what we can do with satellite in this case and I should say that while this introductory training is um all four
[07:56] parts of it are really focused on um armed conflict Refugee settings that's only one side uh one kind of corner of
[08:05] of humanitarian concern there's um environmental displacement there are all other kinds of scenarios that could come in to cause humanitarian settings and
[08:14] we're not just um we aren't going to be addressing any of those outside of the sort of conflict scenario but suffice it
[08:21] to say that um a lot of what we're presenting in these trainings in these four parts of this training should be
[08:29] relevant relevant um for other kinds of applications such as a natural Hazard or environmental displacement um scenario um so today monitoring Urban
[08:41] damage with insar this is coming out of the recognition that um widespread repeat damage within cities within Urban
[08:49] settings is a Hallmark of modern and um and increasingly urbanized Warfare uh many of you can probably name off the
[08:58] top of your head some some key conflict sites um around the world Ukraine is obviously in the news right now but
[09:05] there's many others and unfortunately this is a uh this is a a persistent problem a challenge that we have not
[09:12] really been able to address in a consistent way um so we we we have seen many of these large scale armed complexs
[09:19] um erupt over the last couple years we'll be doing a specific case study today on on Aleppo Syria um we know that
[09:27] monitoring Urban damage isn't just about protecting land cover change it's about protecting civilians who are living in
[09:33] these cities it's about looking at implications for migration for food security for uh even postc conflict uh
[09:41] restructure uh rebuilding um following structural and infrastructural damage over the course of the conflict um it's also Mo we're also motivated by the fact
[09:49] that multi-temporal satellite remote sensing data like we'll be working with today and in the other um parts of this
[09:55] humanitarian applications training still are kind of coming into the Rome um in terms of having a humanitarian
[10:01] application and in particular in mapping Urban damage and the way we will be presenting it today is is a one way of
[10:09] mapping Urban damage um and perhaps one that has been used less than others um so goals we're going to be detecting
[10:16] locations of urban change during armed conflict using a specific case study we'll be doing that using insar time
[10:22] series data over um different stages um throughout the conflict and we'll be thinking about some of um the strengths
[10:30] and limitations of radar data uh both in terms of the sort of sensitivity to change but also the classic spatial
[10:37] detail um challenges compared to some of the more traditional data sources like Optical or n timeles data
[10:47] data um my name is Jam vanok I'm an associate professor of geography at Oregon State University I've been talking so far in
[10:54] this presentation um I'm about to hand it over to Corey Sher who is a PhD student at City University of New York
[11:02] um thanks so much for for joining today um we have a couple of suggestions um before we get into to the case study
[11:11] as well as the background that Corey will walk us through um fundamentals of remote sensing rset training
[11:17] introduction to synthetic aperture radar and SAR for disasters and hydrological applications would all be great uh uh
[11:25] sort of Precedence for this we'll be building especially on um some of the fundamentals of remote sensing and
[11:31] introduction to synthetic aperture radar training so please check these out and with that I'm going to kick it over to
[11:41] Cory so after reviewing some of the recommended rset trainings that Jamon pointed to in the last slide I I want to
[11:51] introduce just a first level background maybe that will help to uh facilitate your review of further material but we
[11:58] want to introduce synthetic apture radar and how we can use this specific type of satellite data to map indicators of urban damage uh
[12:07] that arise in our case during a conflict conflict so first I have two images of the same place New
[12:18] York City that's where I'm where I am right now uh the island of Manhattan is in the center and these are two images
[12:25] satellite images from two types of different satell sensors that show us complimentary views of a complicated world so in the left panel is a sentinal
[12:37] 2 true color Optical image 10 meter spatial resolution acquired over the city on April 12th 20122 and on the
[12:46] right is is a sentinel one SAR synthetic aperture radar back scatter intensity image and the VV is specific to a
[12:58] polarization polarization um this image was acquired on May 10th 2022 and I'm going to walk through what
[13:05] the different things that we can see from a radar or a sar image relative to an optical image and build a conceptual
[13:13] understanding of the difference between Optical and radar and how we can use radar to map things like Urban
[13:21] damage so first about the optical image the colors in the image tell us about the spectral characteristics of an image
[13:29] region and those spectral characteristics tell us about the chemistry or the the color of a pixel in
[13:35] the first Arrow I'm pointing to a Reservoir in Central Park um that you can see in the the panel on the right
[13:44] and and the second Arrow I'm just pointing to Midtown Manhattan Time Square so these areas the color and that
[13:51] we can see with our eye in these images reflect what you would see on the ground if you were if you were to visit those
[13:56] areas albeit at a much spatial resolution but a radar image can tell us more about the structure of a region
[14:06] because synthetic aperture radar is a technique that illuminates a region with microwaves and Records the echo it
[14:15] records the reflection of those microwave pulses that travel back to the sensor the way I like to think about
[14:22] this and the way I introduce it commonly to students or friends and family is like a camera flash a camera flash sends
[14:31] light to a surface like my face and the light bounces off back to the camera so it can take a picture of me or I can
[14:39] take a picture of something else in the dark because we send a signal out that is reflected from a surface and comes
[14:45] back to the sensor we call that active remote sensing so SAR is a a type of active remote sensing and the image on
[14:54] the right is showing us the intensity of The Returned microwave Echo to the sensor this is in a sense the
[15:03] strength of The Returned Echo and I'll get into more of that in a second but we refer to this image as a back scatter
[15:11] intensity image and it tells us how strong the returns are to the sensor synthetic apture radar looks at
[15:21] objects differently than an optical sensor so the sensor the SAR sensor is actually sending a signal in what we
[15:28] call slant range so from an angle it illuminates the the target region and the radar Echoes reflect back
[15:38] to the satellite in most case whereas an optical sensor passively receives reflected sunlight almost always directly above a Target and and we refer
[15:48] to that as as Nat directly above a Target you can see the difference in in the schematic
[15:55] below uh the SAR sensor sending a signal from from the side versus an optical sensor looking at the same structure
[16:02] from from above what SAR can tell us is about the structure of an Imaging region because different types of surfaces will affect
[16:13] how radar signals scatter and it will in turn affect how those areas appear in an image so from left to right in the
[16:23] schematic below which is from the SAR handbook from the NASA Sur project which I'm linked to is also in the citations
[16:31] there's a rough surface where scattering is is diffuse think of something like bare soil I'll get more into roughness in a
[16:38] bit there can be different types of scattering in a forest you'll notice the green scattering is uh called labeled
[16:47] volume and that scatters throughout the trees and branches of a of a tree uh sorry the leaves and branches of a tree
[16:54] and then you have this thing called double bounce where you'll have radar hit one surface like a road and then
[17:01] reflect off the side of another surface like a building and that can happen both in forests as you can see in the middle
[17:07] panel and also in cities and those double bounce back scatter mechanisms are some of the result in some of the
[17:14] highest highest intensity radar signal retrievals so the roughness of a Sur surface is therefore really important a
[17:25] smooth surface like calm water will scatter signals away from the satellite while a rougher surface will will
[17:33] scatter scatter signals back toward the satellite and we Define roughness relative to the outgoing signal wavelength from the SAR sensor and
[17:44] that's denoted by Lambda in the figure below so we can directly relate the wavelength to the roughness of a surface
[17:52] and get an idea of the type of scattering we could expect based on Surface types so from left to right we
[18:00] would get very little return from a smooth surface where the height variation across an image region is less
[18:08] than than 132 of the outgoing signal wavelength and in the middle panel we can expect moderate returns to a sensor if the
[18:17] roughness of an image region is between 132 and 1 half of the outgoing signal wavelengths and on the right we can
[18:26] expect the strongest returns from surfaces that are greater than half the signal signal wavelength which we would Define as
[18:39] rough the satellite sends out a signal with a fixed frequency so we always know the signal that leaves the satellite and
[18:46] The Returned Echoes are directly related to this outgoing signal the sensor we're going to work with today is the Sentinel
[18:54] One sensor it's to date the only open access synthetic aperture radar time series Earth observation and that has a
[19:03] uh signal wavelength of about 5 a half CET so if you have an image region and you can imagine your image region is 10
[19:12] met met um projected onto the ground and you have variable building sizes within a city say there's some structures next to
[19:22] a road that means the difference in height between those two buildings is much greater than the signal wavelength
[19:27] we would call that a rough surface similarly if you till an agricultural soil and the this the height difference
[19:36] between a trough and a mound is on the order or greater than half the signal wavelength it would similarly be rough
[19:44] for this sensor which is cband we call in in radar one other characteristic of the SAR wavelength is that the the longer
[19:57] outgoing wavelength the further the signal can penetrate into something like a forest canopy as the signal wavelength
[20:08] increases the penet penetration depth increases so again a figure from the SAR handbook Below on the left hand side we
[20:18] have radar signals uh um a cartoon of XB radar signals which are 3 cm smaller than what we're working with today which
[20:27] are essentially scattered by the top of a vegetative canopy like a forest and as you move through
[20:35] seaband the scattering makes it deeper within the vegetative canopy but it doesn't quite get to the ground you
[20:42] don't get that double bounce back scatter that I mentioned before but as you get into L band and P band these
[20:50] wavelengths are long enough to make it through the canopy of a forest and actually scatter off of the ground um
[20:59] and the tree trunks which you wouldn't have with a shorter wavelength so the scattering the the outgoing signal
[21:05] wavelength aent affects the scattering mechanisms the scattering characteristics at the surface urban areas are strong reflectors of radar signals well water
[21:17] surfaces are not so I've tried to illustrate this and we've just talked about how trees can scatter signals
[21:23] throughout the volume of their Forest buildings in urban areas act as these Cor Corner reflectors of radar signals
[21:31] which send back radar Echoes with some of the highest intensity soils scatter signals at the surface generally with
[21:38] lower intensity and calm water will scatter signals generally away from the sensor there's one other thing Imaging
[21:48] radar is sensitive to for for our purposes today which is changes in moisture content like snow melt uh or
[21:56] rain on soil and this will also really affect radar scattering so in the example below I'm showing images from a
[22:04] a paper I authored last year on snow melt over glaciers in high mountain Asia and in panel a I'm showing an average
[22:13] SAR back scatter intensity image during a snow melt period note that the region is dark dark relative to in panel B
[22:22] which is the average scattering during a frozen period so when all of the snow is dry panel C is an an is an example of
[22:30] this region it's a glaciated region in the Himalayas and D is the difference between back scattering in image A and B
[22:39] and you can see a pronounced difference so between two and 10 DB across the region between the seasonal the snow
[22:49] melt season and the Frozen season back scatter so moisture content and we call this the surface dialectric changes in
[22:59] the surface dialectric can also really affect scattering characteristics another important thing to note about SAR is that the side
[23:08] looking nature of the sensor causes geometric distortions and these distortions affect the ground sampling frequency of ultimately the images that
[23:17] we'll we'll retrieve along the slant range which is the line of sight of the satellite will get geometric distortions like fores
[23:30] shortening uh layover and radar Shadows beneath mountains or structures that we ultimately need to correct for so an
[23:41] image that is projected in the slant range um is in our case called a single look complex image and I'll get into
[23:51] that later as we work through the example and then an image projected in the ground range has been corrected for
[23:59] the terrain and for the viewing geometry of the sensor sensor so how should we look at this image over
[24:10] New York City first of all the geometry of the region looks familiar this is this is a ground range detected image
[24:21] over New York city so we have corrected for the viewing geometry of the S sensor and for some of the topography in region
[24:29] now that we know we're looking at a ground range detected image we can look at this water on the Hudson River or
[24:36] back at the Central Park Reservoir and understand why it appears dark the water appears dark because the SAR signal is
[24:44] being scattered away also on the Hudson River I want to highlight these little bright dots on the river are actually ships contain
[24:58] ships traveling up the Hudson River and you we are getting actually double bouns off the water surface and off the hole
[25:07] of the ship which may get back to the sensor with high intensity so we can actually see these are not bad pixels
[25:13] these are these are likely ships traveling up or down the Hudson River and then generally Manhattan and
[25:22] the areas around it are are bright because builtup areas in those regions are sending high-intensity returns likely from double boun scattering back
[25:33] towards the sensor so we we see them and in this lower image which is um near Wall Street this lower portion of the
[25:41] image there's an intensity so bright it it makes this star shape that's that's a very high intensity
[25:51] return so radar satellites due to their sensitivity to the structure of a region are commonly used to
[25:59] map damage proxies indicators of damage to Urban or otherwise built up infrastructure after natural hazards so the image below is from the NASA
[26:11] Advanced rapid Imaging assessment group uh which commonly puts out things called damage proxy Maps after a natural Hazard
[26:20] and natural disaster the red areas in in this image illustrate proxies for urban damage from radar our satellite derived
[26:29] data um these data were generated from a censor we won't be working with today but indicate the same we indicate the
[26:39] same type of change we would we will be working with in our example so how can radar satellites be
[26:50] used to map this type of damage and it it has to do with sar's sensitivity to the arrangement of structures in an
[26:57] Imaging region so in in the panel on the right there are two columns one with an intact and
[27:04] one with a destroyed you know cartoon of a a structure the partial collapse of a building will change the orientation of
[27:13] a the scattering the scatterer within a region we we call things scatterers in an image region um but in this case this
[27:21] is a building um when the building is destroyed its orientation um is different than when it was intact but
[27:31] if we were if we were to look at this from above imagining that the roof itself was not destroyed and we were
[27:37] trying to use an optical image an optical Imaging sensor to map this damage we wouldn't really see much
[27:45] change but with synthetic aperture radar it's possible it's possible to detect this type of change using information in
[27:54] the the phase denoted by Lambda in this last row where you can see more path lengths more wave Cycles if you will uh
[28:07] after the building was destroyed compared to when it was intact so phase measures the quote range and complexity of an image region and
[28:21] this is a slide that you'll see in the prior ret trainings on introduction insar and SAR applications and
[28:31] monitoring hazards natural disasters uh and it comes out of Paul rosen's 2008 training in principles and theory of radar interferometry from
[28:41] unavco but this the sensor the sensor sends out a fixed signal that undergoes a fixed number of a number of wave
[28:50] Cycles so the the first component of a sarce signal is the number of wave Cycles completed or traveled before the
[28:58] signal is returned to the sensor so we we call this a measure of the range of the signal essentially how far the
[29:06] signal went before it reached an image region but in addition to range SAR phase measures the randomness of path
[29:15] lengths in an image region so you can see these little path lengths that are drawn here they all have slightly
[29:21] different length and they're they're going to different types of surfaces within the region and that cause Randomness in the region which
[29:32] makes phase SAR phase a complex signal but we can sort out the complexity of an image region by
[29:41] differencing two SAR phases in in our case acquired at different times and accounting for the range component and
[29:49] getting just an idea of the complexity within that region interferometry or insar interferometric synthetic aperture radar measures the
[30:05] difference in two complex phases with SAR Acquisitions at different times we use it to map topography at the Earth's surface or
[30:16] changes in the structure of the Earth's surface like ground motion after an earthquake or in this example panel
[30:23] ground motion due to subsidence of a home so you can see a satellite at a similar position acquire acquiring
[30:35] images at one time T t0 and another time at t plus delta T so sometime later and what happened is
[30:47] between these two Acquisitions is the position of the house effectively sank so we had this change in the height
[30:55] change in the range of the sarf signal that we can measure through interferometry so we can measure the
[31:02] phase shift between two acquisitions by essentially differencing two SAR phase measurements acquired from the same position at different
[31:15] times but insar can also be sensitive to construction of buildings like this Stadium from right at all 2006
[31:28] and it can be used in things like intelligence applications where the insar data can map things like vehicle
[31:35] tracks through Fields because of the difference in texture that results after a large vehicle with comp compact soils
[31:44] and change the arrangement of the scatterers in this case soils in that image image region and for us today insar can be
[31:56] used to map building damage and destruction um in this case due to conflict um in the panel uh the figure
[32:04] is a damage proxy map over mul Iraq from the time period 2014 to 2017 like B Ron
[32:13] published last year and the red areas are are proxies for urban damage so all of these examples use
[32:21] insar coherence to detect change and coherence is an estimate of the scattering stability of an of an image
[32:33] region and what coherence estimates is the correlation between two phases but because SAR has a range component and a random
[32:45] component coherence is therefore an estimate of the complex correlation between two phase signals and we use it
[32:54] intuitively uh you can think of it to understand and the randomness of an image image region are scatterers in an image region
[33:03] randomly reorganizing and and not associated to the the last image pass from the sensor or are they stable and
[33:11] are they giving you similar phase information that you saw in Prior Acquisitions so coherence is measured from zero incoherent completely random
[33:22] image regions to one perfectly coherent stable stable structures and what I did in the panels below is make a coherence image using
[33:32] two Sentinel one synthetic aperture radar images captured within 12 days of each other last month over the same
[33:40] region I've been highlighting New York City um you can see kind of intuitively and in the panels May 10th and May 22nd
[33:48] that these images more or less look very similar so when I interfere them when we when we do insar and retrieve a
[33:56] coherence image over this which is in the right panel uh areas that are very light in color are coherence values
[34:03] close to one that is to say that there wasn't much structural reorganization across New York City within this 12-day period and most
[34:15] of those regions are what we refer to as coherent coherent clusters or regions of persistent scatterers an important thing to note about
[34:30] coherence itself is that it is equally sensitive to different types of changes so we often denote coherence with a
[34:38] gamma and it's made up of these various components and the components of coherence multiply so that any source of
[34:47] decorrelation can result in low coherence I want to I want to make an aside and say that coherence and
[34:55] correlation are two terms is often used interchangeably but knowledge of the local characteristics of an Imaging region is necessary to properly
[35:09] conceptualize and interpret insar coherence for example as time increases between two image Acquisitions so gamma subt is the temporal change in
[35:25] coherence the correlation will generally decrease with increasing time so there's a lot of literature on accounting for
[35:33] this gradual decrease in coherence over time and I'll Point again to the aret introduction to interferometric SAR um by Eric Fielding for um this
[35:46] equation but also for a more indepth overview of insar but for our sake today mapping proxies for damage image from military
[35:59] conflict we want sudden changes denoted in Dr fielding's presentation as gamma subc and to retrieve signals of sudden
[36:09] damage it means we need to minimize other types of decorrelation that are related to processes not likely
[36:17] associated with the signals we want to retrieve so we have some straightforward ways of mitigating other types of
[36:26] decorrelation so anything that's not a sudden change that will employ today and that includes masking out areas of low
[36:35] coherence in pre-event scenes so if if the area is already somehow random we don't necessarily want to look for a
[36:45] change in that region because there likely isn't a stable scatterer in the region we also can minimize the
[36:53] difference in gradual changes gamma subt by choosing are pairs with similar temporal Baseline in in the case of
[37:01] today we'll do the minimum temporal Baseline of 12 days between Sentinel one Acquisitions and we also need to
[37:09] minimize geometric causes of decorrelation which have to do with the difference in vantage point of the SAR
[37:22] Acquisitions so these geometric distortions can affect our coherence and what what's going to be important today is understanding something called
[37:30] perpendicular Baseline should is a b with a perpendicular sign and this is a component of the difference Advantage
[37:37] points from which our images used as an insar pair are acquired so for insar damage mapping and for a lot of other
[37:45] insar applications we want the perpendicular Baseline to be small and you can see in the schematic below which
[37:53] is from the ASF Sentinel one insar product guide the Baseline is decomposed into a parallel and perpendicular component and
[38:07] I would strongly suggest that you review The Sentinel one insar product guide from the Alaska satellite facility for a
[38:16] more in-depth understanding of the products that we're going to process and retrieve from their service today in
[38:29] in monitoring proxies for dam for damage um due to urban conflict we want to find highly coherent areas that decorrelate
[38:38] suddenly with conflict so that means we want to look for coherent image regions that show reduced coherence during a
[38:47] conflict event so we expect the main assumption is that the coherence will decrease after a conflict event in an image
[38:56] region so when mapping proxies for conflict damage we assume that this damage would cause deviations in the
[39:03] scattering profile of features in a city and that this would uh disrupt the temporal stability of a region so in
[39:12] order to capture this type of change we're eventually effectively going to need a before and an after comparison
[39:20] but generating a before and after comparison is a little more complicated than simply differencing two images in
[39:27] this case because first we need to make insar coherence images so to capture a decreasing coherence we're going to need
[39:35] to assemble one reference and one event coherence image the reference coherence image will be from before the conflict
[39:43] period of study and the event coherence image will be during it will span some period of conflict so this will require
[39:52] three SAR images to make two coherent images from two insar pairs so one pair will be from what we'll call a pre-event
[40:03] period for example time one and time two and the other pair will be for the event period between T2 and T3 so the event is
[40:12] our conflict and that's where we want to detect detect change so we select a pre-conflict image based on the conflict chronology and we
[40:22] want to use a reference to scene from before the conflict period of study which in this case will be an image
[40:30] acquired at T2 it can serve as a common reference for the pre-event in blue and the event ins our
[40:38] coherence images that we generate from images acquired at T1 and T3 something to note here is that
[40:47] coherence doesn't have a directional component so if you interfered images acquired at T1 and T2 with time one as a reference image or
[41:03] time two as a reference image you would get basically the same coherence value there is no directional component but
[41:11] what does matter is the time between Acquisitions like I mentioned before for our example today we're going
[41:21] to look at 12 days in Aleppo Syria in late April of 2016 so our pre-event period will be
[41:31] April 5th to the 17th and the event period will be April 17th to the 29th this way our comparison
[41:40] has a common reference image on April 17 2016 and I'll note as an aside that you damage mapping over leppo for
[41:51] this training is simply to illustrate the approach um as unfortunately there are many case studies where we could
[41:59] have looked um but we're just using this case as as an illustration of the technique so now we're going to go over
[42:11] a little background on Aleppo um that Jamon will walk us through and then I'm going to continue with a live run
[42:21] through of tasking the ASF server to process inser images thanks Corey um right as Corey said we
[42:33] are not undertaking a a wall to wall so to speak a Citywide damage assessment certainly not a nationwide damage
[42:42] assessment looking over um over Aleppo or over the country of Syria we're also not going to be looking uh over the
[42:50] duration of this war which started in 2011 and continues to this day we're C in specific known conflict events when
[43:00] and locations right where we have uh direct means of uh for our purposes in this training of validating of of cross
[43:10] referencing uh the kinds of um decoherence that we're seeing in the insar uh damage proxy mapping approach
[43:18] so we've chosen a leppo um because there are many many cases to choose from unfortunately so some estimates put uh
[43:28] we can see it in this video here I'm just sort of a drone view flying over the city but you can see
[43:34] widespread damage in these images um it's damage to uh the roadways it's damaged to buildings we see there is a a
[43:42] good example of partially collapsed buildings we sometimes have totally destroyed buildings uh we have piles of rubble that appear in the street um and
[43:52] may be cleaned up uh soon after or may not be those also contribute to decoherence um there's a variet of
[44:01] course vegetation changes inherently contribute to decoherence so there's a there's a whole range of phenomena um within just the city of Aleppo that are
[44:10] causing these and this kind of um uh these kind of Dynamics within the city are critical to understand because the
[44:20] city is still populated right um there are people living within Aleppo um the estimate during throughout the entirety
[44:29] of the war um the estimated population of Aleppo right before the the war started was around three million um and
[44:38] three years into the war it dropped down to approximately 600,000 so we have a uh 80% decline in population um in three
[44:48] years it's massive and Aleppo is just one of the the large cities within Syria that had sort of similar Dynamics um
[44:56] during in the war these images that we this image just on the still of the video um we see uh damage to most of the
[45:06] structures that we can see there um some estimates put uh difficult to say right exact numbers but some estimates put
[45:13] just in Aleppo 36,000 buildings were damaged or destroyed um by 2016 so 5 years into this war which is now that
[45:24] estimates 5 years old um we we saw 36,000 uh buildings not not specific events but 36,000 building structures
[45:33] that were damaged or destroyed during this period so it is um widespread large scale recurrent and persistent damage that we're
[45:45] seeing um and for the purposes of our training again we we basically have a lot of examples to choose from and
[45:51] Aleppo itself um offers uh it's a it's a it's a a densely builtup city so we have
[46:01] large structures that would be damaged which again is just it's a better case study just for the training today um so
[46:08] I'll hand it back to Corey um but uh we're we're at this stage in the in the
[46:13] training where we Corey gave an excellent overview of some of the theory and conceptualization of how we're
[46:19] applying insar and we're just transitioning now into the specific uh case study analysis and we'll be going
[46:24] through step by step a couple of uh our interpretations of what we're seeing from insar damage detection within
[46:32] Aleppo at this specific window that we've identified as being um a known period with uh acute damage to certain
[46:41] areas of the city so back to courey thanks Jamon um and before we get into interpretation we got to First make
[46:49] our insar images and do our change detection so here's an outline of our approach uh for the tutorial today if if
[46:58] you haven't already we're we're going to register for SAR processing resources at the Alaska satellite facility through
[47:04] their vertex tool we're going to search for our reference image over Aleppo and then we'll use the Baseline tool on ASF
[47:13] Rotex to select two insar pairs that I mentioned earlier and we'll submit those tasks for processing the interferograms
[47:23] I'll walk through the the one parameter that we'll have to specify for the processing and we'll let that processing
[47:30] occur and download the processed data and then I'll walk through the actual change detection techniques where we um calculate the percent change in
[47:41] coherence relative to the pre-event period and we mask out areas of low coherence using the pre-event image and
[47:50] then we'll visualize and interpret the results against some high resolution Optical imagery that's freely available um in Google Earth Pro so the logins and
[48:01] platforms that that will be needed for this this tutorial are a user account at the ASF Alaska satellite facility vertex tool
[48:12] and an analytical geographic information system environment so qgis python R whatever you prefer arcgis um so what I'm going to do is
[48:24] walk through the low code example where I'll show you how to use the graphical interface at ASF vertex to generate
[48:34] these Entre images look I've we've also published a code example using the python API for the vertex tool um and
[48:43] that's Linked In this training and you can refer to that if you're more comfortable using python um as opposed
[48:50] to user interface okay so we're going to navigate to the ASF vertex tool um so here we are and it gives us a base map
[49:03] of centered on the US um and some search options so before we start searching I'm going to sign
[49:11] in and if you haven't already now is the time time to uh register for an ASF vertex account
[49:20] because they give us some very powerful open Earth observation processing tools to work with and which which have
[49:27] drastically reduced the barrier to entry to this kind of analysis so I have to sign in now and now I am signed in as Cory
[49:39] sure that's me and what we're going to do is search for uh images over Aleppo in April of 2017 or 2016 April 17th 2016
[49:50] so first I'm going to go over to Aleppo zoom in and draw our area of Interest so I can click once to draw a
[50:02] polygon and click again to finish it so that is our area of interest for now you can see that the vertex will generates
[50:12] well-known text above which you can use to turn into a geometry elsewhere so you can keep track of your search
[50:19] region but next we want to filter first by the date and we can choose this popup to select the year 2016 the month of
[50:30] April and since we know our image we know what we're looking for already which is April 17th I'm just going to
[50:36] limit this to April 15th and then to April I'm sorry sorry April April 18th so from here we need to select our
[50:52] file type and recall that phase is a complex single signal so we need to select level one L1 single look complex
[51:01] imagery those are going to have the phase information that we need in order to do insar analysis so we'll select that and then
[51:11] I'm going to say update the search so we should see one image and that is the image we're going to use you can zoom
[51:21] out and uh get a sense of the geographic coverage of this scene um and just to make sure that this is
[51:31] what we want we can double check the date here which is April 17th 2016 um acquired over about 30
[51:43] seconds and it's on the ascending orbit track so now that we've found our image what we're going to do is use the
[51:52] Baseline tool which you can see here in the bottom the Baseline tool uses the April 17th image as a
[52:03] reference image for insar analysis from all of the images in the Sentinel one collection that overlap this region
[52:14] along the same orbit path and along the same frame of acquisition so you can see all of these different outlines are here
[52:24] these can all be used to make insar Pairs and there's two things to note offset in the images so we can click on
[52:33] this one and see that it's acquired in a different place than maybe that one slightly that is is our Baseline offset
[52:43] perpendicular Baseline offset the other type of offset we have is a temporal offset so these columns where you have
[52:52] the image ID on the left which you can copy if you need it give us two values first there is 69 M
[53:01] um which is the perpendicular Baseline and then there's minus 553 days which is the temporal Baseline so the image on October 13th was
[53:13] acquired 553 days before the April 17 2016 image was acquired because we know our criteria for Baseline we can filter by dates of
[53:29] Interest so we'll have to select 2016 April 5th and then 2016 2016 April April 29th and we can submit that search and
[53:47] we'll we'll see three insr images and on this plot we have on the left Y axis perpendicular
[53:55] Baseline in meters and on the on the x-axis temporal Baseline in days so our image acquired on April 5th you can
[54:07] select and it'll highlight on the plot was acquired 12 days before and with a 31 meter difference offset in the
[54:14] perpendicular perpendicular Baseline whereas the image on April 29th 2016 was acquired 12 days later so it has the same temporal Baseline as the as
[54:27] the other image from April 5th but its perpendicular Baseline was 10 met so the difference in these perpendicular
[54:35] baselines is only 21 M which for our purposes is considered quite small small so there is a third image here and it's
[54:47] it it's an image it's an insar pair relative to the reference image so that's why there's zero meters and Zero
[54:54] D and for a sanity check or to account for other types of coherence we might process this uh but for today we're just
[55:03] going to ignore that so for each of these uh insar pairs other than the pair with the reference
[55:11] image itself we want to choose insar gamma processing and then the option to add one SLC pair so SLC again stands for
[55:22] single look complex so we'll do that once right there and you you get a popup that says the job has been added to your
[55:29] Q for insar gamma processing and then we'll do the same thing for our event image image pair excuse me we'll add
[55:42] that to the processing que so once we've added those to our processing queue we can open up the on demand q and see what
[55:51] we have there so in the insar gamma processing we we have two images that we've just selected um we can see the
[56:00] pairs here the first image is 417 reference image to April 29th 429 2016 and the second is April 5th to April
[56:13] 17 um and in in before we submit this task we have to look at our processing options and the one option that we do
[56:23] need to change is the what we call in radar multilooking and this is a way of essentially reducing what's called
[56:32] speckle in radar imagery and for more details on multi-looking and and the number of looks used in multi-looking
[56:41] I'll refer to past ret trainings that we've linked to and also the Sentinel one product guide for ASF itself that I
[56:50] I linked to earlier in the presentation but for our purposes today there's two options here one is looks in 20 by4 so
[56:59] 20 looks in range and four looks in asouth so perpendicular to the range of the image and that if we chose that
[57:07] image that uh option we would get data uh output data that's 80 M uh spatial resolution but if we choose 10 by two
[57:18] looks we'll get a 40 meter output resolution product and for our purposes we want the uh finer spatial detail that
[57:29] one would hope for in monitoring a city um and so we'll choose 10 by two looks and this will result in a 40 meter
[57:41] resolution product so once we've done that today we're not going to need any of these other components so I'm going
[57:48] to skip over them and I'll simply say submit two jobs we'll be prompted to give it a name so I'm going to to call
[57:56] it it Aleppo Aleppo ret April [Music] [Music] 2016 and I'll submit those two jobs I've gotten an alert that the two
[58:12] jobs were successfully submitted and now I can view the submitted products and we're going to see all
[58:21] sorts of other jobs I've submitted recently recently but we can filter by our product name which was Aleppo ret April 2016 and
[58:32] we'll see our two images we can see that the status of the processing is pending and when the processing has
[58:44] begun the status will say running and when the processing is complete we're going to get um we're going to get results that look
[58:58] like this so this is processing that I've already done and uh of the same images so you can see April 5th and
[59:06] April 17th and for each of these the completed processing we just want to add to our cart for download so I've added
[59:14] the two scenes to our cart we're just assuming the processing was completed successfully um this is what an insar
[59:22] phase image looks like but I haven't talked about that much today um so anyway with these two images added
[59:28] to our cart I can go over to our downloads and I'll remove this and and we'll see the two the two uh
[59:38] successfully completed jobs here in our in our download que and we can simply download the files by clicking the
[59:45] download button uh so we'll be prompted to save the uh downloads somewhere I'll do it in my downloads folder and we'll
[59:54] do the same thing again for the others so from there with with that happening uh once we download our images
[1:00:03] we're going to unzip the folders that we have I like to put them into a working directory where I can keep all my data
[1:00:11] organized and then we're going to load the coherence files which are denoted with a suffix called core. Tiff
[1:00:28] so we've downloaded our insar coher our processed insar coherence data we've unzip the files and now we're looking at
[1:00:36] the contents of the files for one ending in the suffix underscore co. this stands for correlation but
[1:00:46] these are our coherence images like I said these terms are often used interchangeably and what we're going to
[1:00:52] do at this point is very simple raster band math with with the event and the pre-event coherence data
[1:00:59] sets to calculate a change in coherence relative to the pre-event data set so that we'll have a percent change
[1:01:09] in coherence so Delta gamma will be the change in coherence between the pre-event and event coherence images
[1:01:17] expressed as a percent so the change in coherence is happening on a per pixel basis um so if
[1:01:25] if you're familiar with raster band calculations differencing two rasters is a is a chain is a way of comparing two
[1:01:32] pixels in the same image region so you can complete this part of the task in in a geospatial information system
[1:01:40] environment or you can do it in your favorite coding environment but this is going to show us the difference in
[1:01:45] coherence on a per pixel basis across the the region so we'll resolve that difference data set and then we have to deal with
[1:01:55] different types of masking that will help us to receive uh signals only in regions that were stable and
[1:02:04] destabilized ostensibly during this conflict period so the first step in doing that is to make a mask out of
[1:02:13] areas of low pre-event coherence so these are regions that were not uh that did not have a high coherence value in
[1:02:22] our pre-event coherence image and we can make a mass for those regions by using a fixed fixed threshold um on the pre-event coherence
[1:02:31] image so in the panels to the right there's an ezri base map from qgis um and further on the right is a
[1:02:40] pre-event coherence mask so white areas are regions image regions with a pre-event coherence greater than 0.9 so we call this a pretty high
[1:02:53] coherence value this is relatively conservative but note how much of the region actually has a high coherence
[1:02:59] value um in the pre-event image this means that between April 5th and April 17th there weren't too many structural
[1:03:08] or dialectric changes at the surface so we can rely hopefully on these white areas for change detection uh relative
[1:03:17] to the event period of the conflict that we're that we're looking at later in April the second thing we need to mask
[1:03:25] for are areas that increased in coherence so we are not interested in areas that became more stable uh
[1:03:33] relative to the pre-event period because the signal we're looking for is a decrease in coherence a rearrangement of scatters that led to
[1:03:43] increased Randomness whereas the opposite can be true if um a in other examples you can you can have an increased coherence if if
[1:03:53] you turn a vegetated surface into a builtup surface for example that that would cause an increase in coherence or if uh the
[1:04:04] tilling of an agricultural field was completed and there was no change to the structure of the soils there there would
[1:04:09] be a increase in coherence so we want to mask out areas where the change in coherence was greater than or equal to
[1:04:16] zero um so now we have two masks that will apply to our change in coherence image and we'll get something that looks
[1:04:25] looks like this the red areas are regions in our map with a decrease in coherence on a
[1:04:36] percentage basis of 15% relative to the pre-event pre-event coherence so um this is ultimately the damage proxy map that uh we wanted to
[1:04:49] make and you'll you'll notice that there are a lot of light white areas this is overlaid on
[1:04:55] to a ezri base map in qjs and we'll see dark red patches throughout the image um and what we're going to do now is
[1:05:08] investigate some of those patches because these data can help guide our analysis of things like high resolution
[1:05:15] Optical Optical imagery imagery so if we look at this first area which is a greater than 15% decrease
[1:05:26] coherence during the event period we can focus in on it and compare to some historical very highresolution
[1:05:34] Optical imagery that's now freely available in um Google Earth Pro we we'll just do this to illustrate the
[1:05:40] process of guiding image analysis using insert coherence change so in this image uh historical imagery over that that region I was
[1:05:51] pointing to there was maxar Data acquired on April 16 2016 which was just the day before our pre-event period
[1:06:00] ended and then another image was acquired and made freely available on June 11th which shows destruction visible in our image region so it
[1:06:09] happened sometime after April 16th um and by June 11th but you can see that there were destroyed structures there are burn
[1:06:20] scars and the the damage here is is visible it's evident so or insar coherence data gave us a potential
[1:06:28] timing of some of that damage it happened during some of it at least happened during our event
[1:06:36] period we can further use the the inser data to guide uh Optical image analysis so let's look at another region where
[1:06:44] there was a greater than 15% decrease in coherence on the western edge of our image region and we'll zoom in on the
[1:06:51] patch similarly using Google Earth Pro optical imagery and we'll see damage that that occurred um between April 5th
[1:07:00] and April 24th in this case um there was a destroyed structure at this part and a collapsed roof probably some other
[1:07:09] damage that I don't notice but this is just to illustrate that decreases in coherence can guide Optical image
[1:07:19] analysis uh similarly in this time frame uh just before the end of our event period there was a a attack on a school
[1:07:26] and a hospital in Aleppo an msf hospital was bombed on April 28th 2016 and uh the right is a tweet or a statement from msf
[1:07:38] um about the bombing of the hospital and and the images below are from a report that msf released um on the bombing of
[1:07:47] the hospital Al's hospital um so the left panel indicates the location of the hospital and the right panel with figure
[1:07:56] 29 beneath it is a satellite image from April 25th of that hospital you can see it's quite small um there's no scale
[1:08:04] here but I'll have a scale on my back um and it that that hospital is only going
[1:08:09] to um occupy a portion of a pixel because our pixels are relatively large compared to that footprint so here's what that area looks
[1:08:20] like on our map it's it's a small coherence anomaly it's less than 10% um and this is likely due to the fact that
[1:08:30] the hospital only occupied part of an Imaging region part of a pixel and because it didn't completely
[1:08:36] collapse so looking more closely at our imagery um we can only see a very small change in coherence there if any um i'
[1:08:45] I've masked out as you know IM uh regions that have coherence greater than or equal to zero um and again the
[1:08:53] hospital that was struck uh was small and and didn't completely collapse so when we look at high resolution
[1:09:01] Optical imagery that are similarly available in Google Earth Pro um we see an acquisition on April 16th and there was a school um that you
[1:09:11] can see partially collapsed across the street um in imagery acquired July 25th but we know from humanitarian reports
[1:09:19] that these strikes occurred on uh in our in our event period in April late April um but this collapsed building is the
[1:09:28] area of greatest coherence decrease that we've detected in the example today uh compare that to the hospital
[1:09:39] Al's Hospital there's only a slight if any coherence decrease and that's likely because the hospital only covers a
[1:09:48] portion of the pixel and it didn't completely collapse so it didn't cause a significant enough rearrangement of the
[1:09:56] radar scatterers for us to see a big enough change so that is the end of the tutorial walk through and interpretation
[1:10:09] of the results and what I tried to show is that there are regions where we can attribute loss of coherence to the
[1:10:19] destruction of structures um that we highlighted in the first two examples and there's also things that we don't
[1:10:26] see that are Beyond um to quote Al all Lan uh beyond our threshold of detectability detectability um so I hope that illustrates the
[1:10:39] strengths and limitations some of our sensitivities enough to get you started and to get really into this method my
[1:10:48] suggestion is to really start from the basics and there is a vast amount of freely available materials including
[1:10:56] past ret trainings um to familiarize yourself uh more with these methods and I also suggest looking into
[1:11:07] the other applica insar applications training namely from Eric Fielding on Landslide Landslide observations um from there as you begin
[1:11:16] to as you solidify your more conceptual understanding of coherence build the ccept conceptual understanding of coherence and and how different d
[1:11:25] Dynamics at the surface can lead to uh changes or or low coherence so I talked about dialectric changes from snow melts
[1:11:33] Um this can also happen from rain on dry soil or structural changes like the tilling of agricultural Fields
[1:11:40] construction or destruction and in mapping of urban conflict damage it's important to identify he dates or large-scale conflict damage events that
[1:11:51] you want to detect and it's important to have a very clear idea of what you're looking looking for before you start looking for it so
[1:12:00] if it's a time period and a location that's extremely important ASF vertex tools and cloud-based insar processing have
[1:12:10] drastically reduce the barrier to entry to working with these data so in my fourth suggestion I strongly recommend
[1:12:19] taking advantage and learning the ins and outs of these new cloud-based inser processing tools uh namely ASF vertex so
[1:12:27] that you can begin working with these data and learning the ins and outs of them and hopefully integrating them and
[1:12:34] your your humanitarian um applications and finally it's so important to scrutinized output data with any and all available data for
[1:12:44] comparison so today we use freely available high resolution Optical imagery uh from Google Earth but if you're a humanitarian worker and there
[1:12:54] are people on the ground who can verify or there you have access to any other types of ancillary data for
[1:13:03] corroboration that is extremely important before drawing any conclusions from these types of data um finally we've done the exact same example
[1:13:14] through a python jupyter notebook like I mentioned before and that's freely available available um at the link above uh it's also cited
[1:13:23] and and we work through the exact same example but uh in Python code and using the ASF vertex API so if
[1:13:35] you're in a position where you are comfortable in GIS and just want to get your feet wet in Python um for GIS this
[1:13:43] might be a great opportunity to go from a graphical user interface to something like a jupyter note so that code is
[1:13:49] available for you from there uh we'll ask if you have any questions to please answer them in the
[1:13:59] Q&A box we'll answer them in the order they were received and we'll post the Q&A following this uh this training on
[1:14:07] the website after the conclusion of the web thanks everyone for joining us today um here's our contact info U There's the
[1:14:18] link back to the web page please don't hesitate to reach out to us if you have any questions or inquiries around
[1:14:24] running kind of analysis we have a good list of citations here please check these out and thanks
[1:14:34] so much hope we can see you in two days at part two of the training which focuses on mapping Refugee settlement
[1:14:40] growth and population change very wonderful thank you to everybody that have been submitting questions thus far we got some really
[1:14:57] great ones uh why don't we just jump right into it so question number one how would muddy water appear in SAR can we
[1:15:05] distinguish it from Clear Water and feel free to unmute and and speak up whoever answer that um hey everyone uh so this is Corey
[1:15:18] thanks for the question can you hear me okay we sure can great thanks Sean um so basically SAR is only going to be
[1:15:28] sensitive to how rough the surface of the water is so you can imagine uh wind passing rough uh strong wind passing
[1:15:36] over a water surface that's going to change the scattering characteristics of the surface but the S generally isn't
[1:15:43] going to be sensitive to um suspended sediment unless there's some relationship between suspended sediment and the roughness of the water surface
[1:15:54] like if a river turned into a debris flow um but generally no uh you won't be able to distinguish clear from muddy
[1:16:02] water in a star image great um that would you we can of course do this with Optical data to some extent
[1:16:14] assuming the particulate matter has remained near the surface um we should be able to detect some change in
[1:16:22] spectral reflectance usually with the the red band or the near Red Band um and there are several metrics that have been
[1:16:28] produced um the TSS the total suspended solids or the common SPM suspended par matter those those kind of metrics
[1:16:36] should be sensitive in this scenario where SAR really doesn't tell us much because as Corey said this is all
[1:16:42] happening below the surface of the water question two are SAR damage assessments possible when there's no prior SAR
[1:16:55] to compare to for change I can give a quick response to this one this is Jam um unfortunately no
[1:17:04] we do need that precedent we do need that that reference period um we need the pre if we're going to be able to
[1:17:10] detect the post if we came at a potential damage site and looked at it with SAR we would just see a
[1:17:18] characterization of scattering that we wouldn't have a reference point to compare to so it's important to remember
[1:17:26] that um many things you know not everything scatters all the time but we're always going to be able in a city
[1:17:32] for example we're going to see this sort of scattering profile basically at any time we take an image over it um and
[1:17:39] that it's that change is that deviation that Cory worked through in the case study that we're interested in so we
[1:17:44] always need that that previous comparison I suppose there could be some um some fancy approaches to use Optical
[1:17:53] data to extend observational record prior to for example the launch of Sentinel 1 um to go back to 2012 2013
[1:18:02] and use Optical data to make a like a a pseudo like a texture map um I bet
[1:18:08] there's some cool research in that direction but um but that would be that's sort of a different and much more
[1:18:14] complicated assessment um but the short answer is we need to know the prior if we're going to understand what happened
[1:18:21] during the in terms of the process or if the state that we see at the outcome the
[1:18:26] post if that's meaningful for damage or not thank you Jamon uh question three is it possible to adapt the python code to
[1:18:36] collab especially hyp3 and ASF search hey this is Corey so I'll I'll jump in there um you can actually open
[1:18:45] any Jupiter notebook in Google collab by prepending um this domain that I've typed out in the answer and I linked to
[1:18:54] an example um of doing that uh I don't know if anyone can click that link but generally
[1:19:01] if there's a Jupiter Notebook thank thank you uh whoever is hosting their screen right now um You can prepend this
[1:19:09] domain and then you can see our notebook um there in Google collab and if you scroll down um to an interactive map
[1:19:17] there should be a folium printed a little bit further down um you don't even have to sorry
[1:19:24] keep going yeah there there you go I can see it you don't even have to run the
[1:19:27] code to be able to like move this map around you can zoom in and out yeah so
[1:19:31] it's already there for you to see uh so you just prepend the Google collab cab. research. google.com GitHub to the
[1:19:39] location of the notebook and then you can view it in collab wonderful yeah thanks so much Corey uh question four when generating
[1:19:53] coherence cop po or cross pole Channel which should be considered which polarization channel should be used for
[1:20:00] coherence and interfer interferogram generation co-o or cross pole is that VV or or VH yeah so thanks for this question
[1:20:10] generally we'll use oh sorry this is Cory again um we'll use the co-polarized VV channel for Sentinel one and in fact
[1:20:16] the ASF vertex tool doesn't give us an option um because it's so common to use the co-polarized channel um I refer back
[1:20:25] to the prior trainings on insar uh for more detail on that but we generally use the co-polarized channel there's not
[1:20:31] even an option to choose the crossbow channel on ASF ver Tex thank you Corey question five if the
[1:20:42] settlement of urban areas is well structured SAR image can identify the damages after any war or disaster from
[1:20:49] scattering change of the damaged building what about if the settlement of the urban area is not well structured
[1:20:55] like some of the area like old DCA of the DCA city of Bangladesh will it affect the change range or differences
[1:21:02] of s image of the damaged area yeah so thanks for this question and in the insar community there's
[1:21:10] generally um trouble detecting changes over regions that aren't what we call persistent scatterers um so the lower
[1:21:19] your the coherence the pre-event or Baseline coherence of your image region is is um the harder it is or the less reliable
[1:21:27] it will be to detect change so unfortunately in less builtup urban areas that act as reliable or persistent
[1:21:36] scatterers we we have more trouble um detecting change relative to areas uh really built up urban areas um so this
[1:21:46] is a challenge for the for the method yeah Cory question six in the case of marup in Ukraine it is said to be completely
[1:22:01] destroyed have you done some evaluation of how much decorrelation has appeared does it confirm heavy destruction um so in fact yes um we we
[1:22:14] have done these analysis and there's broad decorrelation across Maria pole um throughout the um conflict duration in Ukraine I I guess something to note
[1:22:26] would be that in the early part of the Russian incursion um there was snow snow fall and snow melt occurring so that
[1:22:37] limited our ability to retrieve um damage proxies but we we've run the analysis analysis um later since the snow is disappeared
[1:22:49] and yes um there is decorrelation there and we'll be following up with that more formal formal um work work on that in the near not so
[1:23:00] distant future um I don't know Jamon if you want to say anything about that otherwise we can just continue on
[1:23:12] to the next question yeah Jamon might be muted but um Jamon okay if not I will continue uh question number seven what
[1:23:20] are examples that show how a humanitarian actor has used sarbas damaged assessment what humanitarian actions have been based on such SAR
[1:23:33] analyses I can that oh sorryy no go ahead um I was just going to say um this is a good question I think um
[1:23:46] it's really early days for using SAR for a humanitarian application like this um typically the way it has been done uh is
[1:23:55] by uh International NOS humanitarian Nos and groups like The United Nations um the UNP or unocha or unat
[1:24:07] these kinds of groups um might be interested in using uh radar data in a similar way that we did today a post uh
[1:24:17] conflict or post disaster assessment so this is really the norm um so far not really at a stage of seeing a a kind of
[1:24:27] near real time analysis um even with the recent um invasion of Ukraine when there has been lots of large- scale Urban
[1:24:36] damage there wasn't a public facing at least uh illustration of using SAR in a sort of monitoring capacity so
[1:24:46] unfortunately we often end up um responding or uh coming at these assessments uh with with some delay um I
[1:24:56] think that's changing because one of the things that's really um shifting is the availability of higher resolution SAR as
[1:25:04] well from commercial providers um that is a potentially uh you know revolutionary um opportunity for for humanitarian
[1:25:14] applications and we have never had anything like that that we could detect SAR at a you know one meter level we've
[1:25:21] never had that kind of access especially for the human mon Arian sector um so I I think in the next you know few years we
[1:25:29] aren't even talking about decades here but in the next few years if we see um another kind of large scale conflict or
[1:25:36] certainly in any sort of large scale disaster like a uh earthquake for example we're going to see SAR being
[1:25:42] used in a much more real-time capacity but but right now it's it's very similar to what we've shown here we estimate we
[1:25:49] detect specific locations of change we do uh estimates over a long Peri of time to detect the area of damage um and then
[1:25:58] those maps are made those maps are are shared they're used for um planning reconstruction they're used for
[1:26:05] identifying potentially affected populations or damage to infrastructure so there's a whole host of different kinds of decisions that could be made
[1:26:12] from it but but from a remote sensing perspective it's it's not too different from what we did today except for
[1:26:18] perhaps a bit more broader scale right we wouldn't be just looking at specific uh two we interval we'd be looking at um
[1:26:25] perhaps a multi-year study great yeah thank you so much Jamon uh question number eight we will skip
[1:26:36] over because it was answered previously question number nine could this technique be used in rural areas so hi this Corey I'll do that one
[1:26:47] um if there are builtup structures within the rural areas that act as coherent Imaging regions that that are
[1:26:54] then destroyed or damaged uh enough to where the the change in coherence is detectable then yes the method can be
[1:27:02] used in rural regions but generally it's only going to be it's going to be most sensitive to the builtup structures
[1:27:10] within a rural region if if there is something like a large crater in a baren field one might
[1:27:22] be able to pick that up also uh but generally it's the method is most applicable to um regions that are highly
[1:27:31] coherent so largely builtup regions that become less coherent during a conflict event period great thanks Corey question
[1:27:42] number 10 what is the margin of error this is a great question and there's a prior study from 2018 by
[1:27:51] natsuaki um and colleagues uh that quantifies the sensitivity and uh describes the limitations for damage detection of individual buildings using
[1:28:03] an earthquake as an example so I would point you to that publication for a more quantitative um description of the
[1:28:13] sensitivity and limitations uh for assessing damage to individual buildings after after an event of Destruction he thanks Corey question
[1:28:24] number 11 hi I'm working with the rohinga refugee camp can I detect changes before and after a cyclonic
[1:28:32] event as the structure is not concrete um Corey again I'll take that so thanks for um joining us today and
[1:28:44] your work at the the refugee camp um and I I guess the answer is similar to the
[1:28:50] rural areas or generally if there's stab or or a lack of Randomness so high coherence in the image region before in
[1:29:01] this case a cyone or a cyclonic event um and we see the change in coherence after the event then the method could be
[1:29:10] sensitive um I haven't looked specifically specifically um at this region but the the publication I mentioned above natsuaki
[1:29:20] uh at all 2018 also described structure that have things like um tarps as roof as roofs um somewhat informal structures
[1:29:32] um so I would again maybe point back to that publication for sensitivity of coherence change detection in um less
[1:29:43] builtup regions so with less concrete and Roads thank you Corey question number 12 what is the level of accuracy of
[1:29:55] insar based damage mapping with reference to the actual damage for example a school building another great question and it's
[1:30:05] uh similarly um addressed in this natsuaki natsuaki publication but I I'll I'll say that qualitatively the degree of coherent
[1:30:17] change and coherence is related to the level of Destruction so a completely destroyed structure is someone else trying to speak right
[1:30:36] now or am I Publications no list okay thank you so if a structure is completely destroyed um the coherence
[1:30:46] decrease will be larger if the structure is partially destroyed it will it will be a smaller magnitude of decreasing Co
[1:30:54] so generally as the degree of damage increases from something like partial damage to full destruction coherent change detection is
[1:31:04] going to be more sensitive to those changes and this is yet an another example of of a question that's
[1:31:12] addressed in the 2018 paper by notaki and and colleagues so again I'll refer you up to up to that um
[1:31:22] paper yeah thanks Cory uh question number 13 does insar detect small scale damages I can answer this one quick um
[1:31:36] it there's a bit of and core please chime in on this one too um there's a bit of a trade-off here because the
[1:31:41] small scale I I I'm not sure if the question is asking about spatial extent in terms of small scale or small scale
[1:31:48] in terms of the impact of the severity um and maybe that's intentional because the answer involves both of
[1:31:55] those so we we need to have um certainly if you have a large area that's being affected that helps with detection um
[1:32:03] but also if you have a high severity a very you know if you have a small building um that collapses all the way
[1:32:10] that has a different kind of signal than a large larger building that um is only partially damaged but it's damaged
[1:32:18] throughout for example so there's a bit of a trade-off in terms of that magnitude the severity uh and and the
[1:32:24] spatial extent um and so our approach that we showed today has a 40 meter resolution with the the insar processing
[1:32:32] approach um that means that that damage would need to be large enough to register within that pixel um or that
[1:32:41] that region I should say that means that it's a trade-off you could have a large impact High magnitude change that
[1:32:51] introduces so much decorrelation into the region that um that you can it's so pronounced that it it
[1:32:59] registers um as across the entire region or you could have a less um overall severe event but it's across the entire
[1:33:10] 40 meter region um that would also uh potentially register so there's a bit of a trade-off there but in our experience
[1:33:19] we really weren't able to see any fine scale low severity changes but we did in some cases see what appeared to be large
[1:33:27] magnitude changes that took place over a small region within our 40m by4 meter uh study area wonderful yeah thank you Jamon uh
[1:33:41] question 14 I noticed the calculation done by the ASF vertex goes to a q is it possible to make the calculations
[1:33:51] without that service I'll take this one this is Corey so past rset trainings on insar have used non-
[1:34:01] cloud-based tools um so ASF vertex is a cloud-based tool to do insar processing and this generally involves um a
[1:34:11] somewhat powerful laptop and some freely available available um processing tools but also the ability to download up to 10 gab of data um and
[1:34:23] process it locally on your computer so short answer is yes it's possible to do it without the ASF service but the ASF
[1:34:31] service um drastically reduces the local Computing Pro uh capacity necessary to generate and work with these data so
[1:34:42] we've highlighted the vertex tool because it's relatively new um and it effectively reduces the the amount of
[1:34:50] steps it takes for someone um to generate insar imagery and then simply download them to uh analyze them
[1:35:01] further I hope that answers the question great uh thank you Corey question 15 uh can different species be
[1:35:10] mapped using S images with the ASF based tools tools online um this is Jamon I assume this is
[1:35:19] referring to to vegetation species trees or or perhaps crop type and not animal species um if we're talking about
[1:35:29] vegetation um yes SAR can help with this study this is not necessarily humanitarian application but um if a
[1:35:38] different if a a type of vegetation species is a different kind of forest um has a different kind of back scattering
[1:35:46] profile which is to say different kind of surface characteristic surface roughness as well as internal canopy structure
[1:35:54] structure if those differ substantially from another type of species then SAR um should have something helpful to say um
[1:36:02] sort of the ultimate for mapping tree species is liar and hyperspectral together um because it's partially a
[1:36:11] spectral story and it's partially a structural story right tree different tree species different crops appear differently in their structure they also
[1:36:19] appear differently at different times of year um in terms of their spect signature so um bringing in I would
[1:36:26] recommend using lar data or hypers and hyperspectral if you if you have those available to you those are the two that
[1:36:33] are really going to be helpful um SAR is part of that can help with that but of
[1:36:38] course we have some of these restrictions um like the uh the spatial resolution that's there and that that's
[1:36:45] built into SAR and uh it's insensitivity right to to actual spectral characteristics um so it it can help but
[1:36:53] it's probably best to use other approaches thank you Jamon and if the question is directed specific to say
[1:37:02] crops uh we have provided two links to two different rset trainings that were held in the last year using both Optical
[1:37:10] and SAR imagery for crop classification so if that is of interest to the person posing the question please do refer to
[1:37:16] them as a reference question 16 what is the reason for using only c-o coherence for interf perram
[1:37:25] generation so this is Cory again thanks this is a great question um so polarization refers to the outgoing the
[1:37:34] transmitted and received signal so a co-polarized signal um whether it's transmitted in the vertical or horizontal horizontal polarization um is also received in that
[1:37:48] um polarization so that it hasn't been scattered volumetrically um like you would see in a cross-polarized band um so generally
[1:38:00] insar is processed using the co- polariz band because volumetric scattering mechanisms are are going to be different
[1:38:09] than something where you'd be looking for a change in structural Arrangement at the surface so we want a vertical
[1:38:16] transmit and a vertical receive or a horizontal transmit and horizontal receive to be most sensitive to structural changes at the surface um I
[1:38:26] would again point back to things like the ASF product guide or the um Sur SAR handbook uh for more on why
[1:38:36] co-polarization is used relative to cross pole for INS process great thanks Corey question 17 is SAR applicable to drone imagery
[1:38:56] oh jam you want do that you I think you can bite no more might yeah basically SAR is a is a just
[1:39:05] a remote sensing system so you can you can have groundbased SAR you can have SAR mounted on a aircraft like the UAV
[1:39:17] SAR um system from NASA or or you can have it if the Drone is big enough that
[1:39:22] the systems are somewhat heavy um yes it can be mounted on a drone um so yes the short answer is yes it's
[1:39:31] not specific to satellite but it's very rare as well it's very rare and very costly [Music] [Music] yeah great question 18 is there any real
[1:39:47] time sard data source freely available yes um well near real time at least and we've highlighted today using
[1:39:57] Sentinel one uh SAR uh in today's example and the the delay from uh acquisition of an image to initial
[1:40:05] processing and uh open- Source freely available download I think is only about a few hours um so yes the Sentinel one
[1:40:15] constellation is freely available near real time uh s great and I I'll point out that uh in
[1:40:26] the coming year there'll be a new uh joint Mission between the Indian space agency and NASA called nissar and that
[1:40:33] will be launching hopefully the next year and that will be providing an l-band uh SAR capability and that will
[1:40:39] be freely available as well so hopefully the community will be interested in that mission once it launches uh question 19
[1:40:47] what could be the challenges to run this type of analysis in mountainous regions such as the Andes
[1:40:55] uh Corey again here so I will um I'll say that the viewing geometry is going to be the most complicating Factor
[1:41:03] because of the complexity of the topography so you're going to get distortions that have to do with uh the
[1:41:11] The Layover for shortening and you'll get things like shadow um based on where your the SAR sensor is viewing relative
[1:41:22] to your target Reg so I had a slide on the distortions and layover from viewing geometry um in complex topography but
[1:41:31] that's generally going to be the challenge in topographically complex regions are the um geometric distortions from layover fores shortening and
[1:41:47] Shadow great thanks Cory question 20 based on your knowledge would it be possible to prict which structures could
[1:41:55] be damaged in an event of Destruction by War uh I'll I'll feel this one um that's a good question it's a tough one to
[1:42:06] answer I don't think SAR is going to tell us anything about that that we wouldn't know in a much more confident
[1:42:12] way through other sources um but I mean the the key things right if you think about some of the
[1:42:18] case studies that Cory and I looked at even some of the potential ones where did we look in this Syrian Civil War in
[1:42:24] Aleppo to try to find confident examples of repeat damage we looked at hospitals we looked at clinics we could also look
[1:42:31] at schools um these are some of the places that we know to have been targeted these are routinely targeted in
[1:42:38] large scale armed conflicts these kinds of facilities um there is a of course a function of things like territorial
[1:42:47] control and the type of conflict uh that that's uh occurring um and scales of conflict as well um have different kinds
[1:42:56] of of targets that are more common for example um so uh there is some logic and some Theory I guess I'll say to what
[1:43:06] kinds of structures are targeted but um SAR is not going to and there's military strategy around that right from from
[1:43:13] either side who might be engaged in the conflict but SAR is probably not going to tell us too much about that
[1:43:25] great uh thank you so much Jamon question 21 uh can this be used in land use land cover change detection in mined
[1:43:32] areas or forests I'll answer that uh this is Corey and the general answer would be well with respect to mining uh yes
[1:43:47] because if if slopes are being um dug into or blasted away with dynamite and things are being dug up and rearranged
[1:43:57] you would generally see a low coherence so I I know that there were some studies on inser coherence during the covid-19
[1:44:08] lockdowns uh related to things like construction but it would also be applicable to mining where if there's a
[1:44:15] rearrangement of scatters within a region it should be sensitive to um so coherence should be sensitive to uh the
[1:44:25] activity on the ground for forests it's a little more complex complex because you'll you'll have lower coherence in the uh well well the region
[1:44:39] is forested so if you're having if if a region is being deforested then you might want to look for uh other
[1:44:47] components of the signal like simply uh back scatter intensity changes um over time uh or you know rely on
[1:44:56] optical imagery to look for change detection in those regions but yeah oh look uh someone has linked to an ret
[1:45:04] training on mapping and monitoring um in Forest forested regions so kindly refer to to this training uh for more
[1:45:12] information on that I'd follow up to say that the the forest cover change is a much more confident inhand application
[1:45:20] the land mining is uh is tricky um the the mining areas Cory mentioned you need to have sub you need to have
[1:45:28] substantial um disturbance on the ground to be detected um and you'd also probably have better results with high
[1:45:38] resolution Optical imagery um that are acquired before and after this is a a somewhat um uh well it's a nent kind of
[1:45:47] application um of mining detection but it's definitely been done um and spectral also has something to say about
[1:45:55] that um as does an indication of soil moisture because when you disturb the ground you change uh the hyperspectral
[1:46:02] the sensitivity of reflectance in hyperspectral sensors and you also change the soil moisture profile you can change it so um many of these factors
[1:46:11] are brought together and there's a researcher at Edinburgh Gary wator who um uh actually I I think is involved in
[1:46:19] this kind of work um landmine detection um um using optical highres imagery great thank you Cory and Jamon
[1:46:33] uh question 22 uh does the ASF vertex tool provide the mapping of flood inundation areas hey uh I'll do this one oh sorry I
[1:46:46] was not muted um there is at least a python tool um in in the ASF hype 3 toolkit that gives a mapping
[1:47:02] a water map function um but I'm not familiar if the graphical user interface uh gives the option to generate a
[1:47:11] derived product like a water map from a sar image um I will say that generally um SAR data is very sensitive
[1:47:22] to the presence of surface water occurrence and there's a lot of literature and training maybe even within the ret Hazard
[1:47:32] detection uh tutorial from Eric Fielding on using different types of SAR signals to map surface water occurrence I hope that answers that
[1:47:45] question great thank you we also added a link to a uh previous rset training that did focus on on flooding and inundation
[1:47:53] um in nonurban areas so uh hopefully that will help as well question 23 can I use S for soil moisture quantification
[1:48:01] is 40 meter resolution enough for this kind of analysis so I would Rec uh ask you to
[1:48:09] recall this slide on penetration depth into a vegetation vegetated canopy relative to the signal wavelength and because Sentinel one is a C band sensor
[1:48:24] you're not always going to get SAR returns uh from Sentinel one that make it to the ground um or into the soil
[1:48:34] surface at all but as Sean mentioned with the upcoming nysar Mission L band um is a longer wavelength and it should
[1:48:42] have more sensitivity to changes in things like soil and moisture than Sentinel one that said there are um
[1:48:49] studies that apply Sentinel one to soil moisture changes um but in the future we with upcoming NASA missions uh from from nysar and
[1:48:59] ISRO um we should be able to have uh better data sources for mapping things like so moer
[1:49:09] change greate thanks Corey uh question 24 can SAR detect crop Health this is Jam um uh Health that's a
[1:49:24] good question um it could detect maturation it could detect green up and growth um but Health we usually think
[1:49:32] about in terms of biomass accumulation or vegetative Vigor and biomass accumulation would be something like net primary productivity uh greenness or
[1:49:42] vegetative Vigor would be something like normalized difference vegetation index and DVI those are usually what we think
[1:49:49] about when we talk about health um SAR brings the stral component to that so if a crop has fully matured for example um
[1:49:58] you could detect that change um and you could detect differentials between different plots uh different different Farm plots with different quality uh of
[1:50:09] or or health of different um crops if that health comes through as a structural uh attribute right um so yes
[1:50:19] definitely we can uh track the uh we can track the the gener the growth of a crop
[1:50:25] um over time from the planting through the Harvest stage um and that tells us something about the crop's maturation um
[1:50:33] and then potentially the inessence however I would probably defer more to uh and I'm sure the the user the
[1:50:40] audience member who asked this question is aware of these things but um I would probably lean heavily on spectral
[1:50:46] characteristics as well um since those are a little bit more mainstream in terms of actually characterizing bio
[1:50:52] physically meaningful indications of crop health or even things like yield um that that that would be where I would
[1:51:01] start and I think we probably have an ret on crop mapping that we could bring in there absolutely yeah thank you so much
[1:51:11] Jamon uh question 25 using insar coherence changes in builtup area is it possible to distinguish damages from
[1:51:20] changes in construction and have you encountered false damage detection using this method where a high value was
[1:51:27] detected but no evidence of building changes on the ground such as damages or construction what could possibly be the
[1:51:33] interpretation of such a case okay this is a good one uh thank you for this question and there was some
[1:51:42] work um that I think I mentioned in a previous answer on mapping coherence uh during a covid shutdown in some major
[1:51:50] city in the world I I would have to dig up the study but yes if an area is under
[1:51:55] active construction you'll similarly have a low coherence value because the the scatters within that region are being rearranged um so the the study I'm
[1:52:06] thinking of highlighted um an increase in in coherence that corresponded to the covid lockdowns as construction halted and the
[1:52:17] structures within an Imaging region were stable so in that case knowledge of the local context of the signal uh that these um scientists
[1:52:30] were looking for was imperative to interpret a change in coherence uh that in this case was due to the construction
[1:52:40] of of buildings now there's a second part of the question have you encountered false damage detection using this method
[1:52:49] um but no evidence of building damage uh was available on the ground so there's a couple of uh ways I want to preface an
[1:52:59] answer to this which is that it's generally quite hard to validate um building destruction uh in an active
[1:53:07] conflict Zone uh for Regions you can imagine um it's hard to get to and survey and if we're trying to compare to
[1:53:14] things like Optical satellite imagery those Optical satellite images aren't always going to indicate to some someone analyzing
[1:53:23] them visually that damage has occurred and there was a slide in my presentation um on the background where uh for
[1:53:31] example the roof of a structure was intact but the structure itself partially collapsed causing a rearrangement of scatters so it becomes
[1:53:39] a challenge for um validation when we are looking at uh large decreases in coherence and how to
[1:53:48] attribute those changes in coherence to observe damage um in high resolution Optical imagery for for example um I hope that answers that
[1:54:01] question I'll chime in there too as well I I think thanks Corey I think that it's a really good question
[1:54:08] because um cities don't stop people people don't stop living in cities during conflicts right there are um at
[1:54:17] the start of the Civil War we had about 3 million people in Aleppo um and and a
[1:54:23] couple of years in we still had 600,000 so um it's not as if activity and rebuilding even if the rebuilding is
[1:54:31] temporary it's not as if that stops right it's not a uniform process so it's a really good question because this is a
[1:54:38] really tough thing to do well for all the reasons that Cory mentioned I would just add that um in uh Northern Aleppo
[1:54:46] there is a uh a quarry and open mining area and that area contributes lots of change that area pops out um in Optical
[1:54:57] and radar damage assessments um at different times of year and one would be of course you know quick to say well
[1:55:04] this is a consistent recurrent damage event but it's not it's um it's mining right it it's it's the it's the economy
[1:55:11] continuing is one way you could un livelihoods persisting despite the conflict um so similarly when we have um
[1:55:19] even more sort of Nefarious difficult to detect is um just change uh changes that are uh continually occurring in the
[1:55:27] reorganization of tree canopies um in city parks including in Aleppo there's there's change there happening all the
[1:55:35] time and so it's difficult for us to say if that's meaningful damage or or even the destruction of that Forest Grove for
[1:55:43] example or if it's just sort of this uh continual re reshuffling of of the tree structure um so what what this question
[1:55:51] is getting at is um attribution confidence in attribution and that's a really difficult thing to do without um
[1:56:00] different data sources that you can triangulate together um to say this data source showed that we had high conflict
[1:56:08] intensity at this date at this location this other data source let's say it's ourr map shows that we have acute
[1:56:16] decorrelation decoherence during the same period and this other data source is from people on the ground who pointed
[1:56:23] out that this certain building was attacked or they recorded it with a WhatsApp uh video recording that's usually sort of the the
[1:56:33] um standard of evidence we we need quite a lot to be able to attribute specific thing specific events um to sorry
[1:56:39] specific damage uh indications to specific events um so it's it's an excellent question and um the one that I
[1:56:46] think needs you know much much more investigation um as we go forward and we kind of try to to bring up insar to the
[1:56:54] level of other kind of damage monitoring uh tools or data sets thanks for asking that that question right thank you jam and Cory uh
[1:57:03] question 26 could insar be used also to detect Mass Graves as well as tanks and troops I can comment on this one um it
[1:57:14] could be certainly um reorganization of vehicles between scenes could introduce measurable changes in decorrelation decoherence um troops maybe not so much
[1:57:26] individual troops maybe not so much but tanks and trucks certainly um that uh just on that note um there's been a lot
[1:57:35] of work on that in we we did work on that um seven years ago in Gaza actually
[1:57:42] detection of tanks not with insar but with highres imagery so I would still probably use highres to look at
[1:57:48] something that's that fine of a scale but it may come through in in S as well um on the question of mass Graves um
[1:57:56] that's a good one um there has been some work on that um I haven't seen it yet
[1:58:02] with insar but I have seen it with Optical highres data um and that's another kind of that that's um a similar
[1:58:12] line of questioning to the earlier questions about change in soil moisture or the mining uh landmines these are
[1:58:19] some of the same kinds of things um these These are some of the same kinds of challenges between these topics you
[1:58:24] know soil disturbance um reorganization of potentially minute uh reorganization on the surface characteristics um there there might be a couple of different
[1:58:35] ways we could go at that SAR should offer something to that story um but I would if possible I would probably defer
[1:58:42] to to other data sources before getting into SAR uh I'll I'll like to hop in there real quick there there was a one slide
[1:58:51] where showed an intelligence application to map um vehicle tank tracks and that study used a very high
[1:58:59] resolution synthetic aperture radar um on the order of meters pixel resolution so with the Sentinel constellation uh we
[1:59:09] it's much coarser so theoretically yes it's possible but with the freely available and open source data sets um
[1:59:18] it's less possible thank you Jamon and Corey looking at the time we are at the top of the hour uh so
[1:59:26] I think what we can do is for those for the questions that we were not able to
[1:59:31] answer within this two hours we will uh we will answer all of them in the in the
[1:59:36] coming week and uh we will post this to the training page so again for those that did ask a question uh fret not you
[1:59:43] you're it will be addressed it will be answered uh we just want to respect everybody's time uh considering this is
[1:59:49] a two-hour webinar I I do want to thank everybody that joined today wherever you're joining from uh we hope you're
[1:59:54] staying safe uh it's really great to hear back from people in the community as well so we're really excited to have
[2:00:00] you join us today uh before we wrap up I did want to hand it over to Bo Jamon and
[2:00:05] Corey if they had any closing comments before before we end today's training so uh maybe Jamon if you wanted to uh go
[2:00:13] first thanks Sean yeah I just wanted to thank everyone for joining today asking such great questions it's wonderful to
[2:00:20] have um this kind of Engagement with this uh kind of application as you know this is the first NASA application for
[2:00:27] or ret training rather on humanitarian applications um so we're really interested in hearing from you we're really interested in hearing what you're
[2:00:35] working on what you're interested in working on uh with uh insar but also the rest of what we're talking about over
[2:00:41] the next three trainings um the next two parts uh we're going to be focusing on uh vegetation changes infrastructural
[2:00:50] changes degrad monitoring in Refugee settlement context so sort of uh post displacement um we'll be thinking about
[2:00:59] uh how we can use different kinds of Open Source rather Open Access Data to monitor short-term and long-term changes
[2:01:06] including the rapid establishment of refugee settlements and then some of the longer term uh ecological impacts thereof um and then in our uh fourth
[2:01:14] part to this training we will be looking at climate exposure in refugee camps as well and developing a purely remote
[2:01:21] sensing based index for climate exposure um which will be uh using a case study at Cox's Bazar in in Bangladesh where uh
[2:01:30] rohinga Refugee population a large Refugee population lives today um and one of the early attendants said they
[2:01:37] were working on of rohinga um studies so that that's wonderful I hope those are of interest to you as well don't
[2:01:43] hesitate to reach out over email or um different various social media platforms that you have available to you and I
[2:01:50] hope you uh hope we'll see you at the next uh parts to our training thanks Cory did you have any last
[2:02:00] closing thoughts or comments for the participants thanks Sean and thanks Jamon I'll just Echo Jamon and say uh
[2:02:06] thank you everyone for coming and if you are working in a humanitarian field and want to integrate these specific methods
[2:02:12] of insar coherent change detection with your your work um for monitoring uh damage military conflict um reach out to
[2:02:20] us um or you know for any reason please be in touch and just thank you again for
[2:02:25] coming and for all the great questions and thank you to the arset team for hosting this and uh for the opportunity
[2:02:30] to put this all together and present it to you so thanks everybody great Corey Jam we appreciate it so much and for for
[2:02:37] kicking off this four-part webinar Series so well I also want to acknowledge the rset team uh working
[2:02:42] tirelessly in the background that's Brock Levens San Hudson ooy Sarah cutshaw Jonathan O'Brien and Amita mea so thank you everybody and thank you
[2:02:50] everybody for joining we look forward to see seeing you in two days goodbye
