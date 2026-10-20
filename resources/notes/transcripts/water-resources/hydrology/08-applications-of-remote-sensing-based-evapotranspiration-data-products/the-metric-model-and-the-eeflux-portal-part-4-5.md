# The METRIC model and the EEFlux Portal, Part 4/5

`https://www.youtube.com/watch?v=_MPQgDQJxYw` · id 352 · 1:47:14 · module 111 — Applications of Remote Sensing-Based Evapotranspiration Data Products

[00:01] You're welcome. Welcome everyone. Good morning. This is Amita Mehta and welcome back to the fourth session of this webinar
[00:10] series on applications of remote sensing to soil moisture evapotranspiration. Um today we're fortunate to have guest speakers,
[00:19] speakers, uh Professor Rick Allen from University of Idaho and Professor Ayşe Kılıç from University of Nebraska-Lincoln. Um and they are going to talk about
[00:30] their evapotranspiration product to us. This is just to uh remind you that uh homework was posted on our website uh
[00:38] last week and there will be one more homework uh coming up next week as well. Um and as just as a reminder, those of
[00:47] you who attend all five sessions and complete the homework assignments will be be uh awarded certificate of completion
[00:55] about a month or two after the webinar series is over. And just a reminder that this is our
[01:02] website where all the presentation material as well as recordings uh can be found for this webinar series and a lot
[01:10] more other information on the website as well. So without further delay, I want to invite uh Ayşe Kılıç and uh Rick Allen
[01:20] to talk about METRIC evapotranspiration and and its applications. We did talk a little bit about and we introduced what
[01:27] METRIC is in session one. But here's a detailed overview and information about the data and um access of this data as well. So thank
[01:39] you. Here. Welcome. Welcome. Rick. Okay, thank you. Uh Uh hi, my name is Rick Allen and uh Ayşe
[01:53] Kılıç uh will be co-presenting both on the metric and eflux applications. We're very delighted to have this
[02:03] opportunity to speak to to this particular community about applications involving primarily Landsat satellite and then using surface energy
[02:16] balance. balance. We'd like to recognize some of our co-developers listed at the bottom of this screen, Ricardo
[02:24] Treza of the University of Idaho, Tony Morse, Morse, Bill Kramber of Idaho helped get us started in the early days
[02:31] about 15 years ago and our current development partner is Justin Huntington at the Desert Research Institute. Amita
[02:48] Amita on the first seminar gave good background on evapotranspiration, what it's used for, why we need it, but
[02:55] just to give a brief summary. Often times field level evapotranspiration is an essential input to state departments of water resources for water
[03:09] rights management, water allocation, sometimes water rights enforcement during water shortages. So, it's a very critical component with water resource
[03:21] management. At the federal level, US Bureau of Reclamation has responsibility for for both water demand and water supply
[03:31] management of many of the federal projects. They have a very important need for evapotranspiration information. And of course, the US Geological Survey
[03:41] conducts a wide range of hydrologic based studies including ground water modeling. They have a a large need for
[03:50] spatial distribution of water consumption information. And more and more of course, we need good information on water consumption
[03:59] for managing the environment, ecological studies, endangered species. And down at the irrigation level, farms manage water at the fuel scale.
[04:11] And And they they benefit from information and then more and more we are seeing uh water water uh issues come into our court systems
[04:22] where we have various parties buying for a limited resources. Some of the applications that we'll talk about today
[04:35] and I I I think one of the emphasis areas of today's presentation is to not talk only about the production of the ET
[04:45] maps, but also talk about what they are and can be used for. Here's a short list of some of the primary applications in
[04:54] the West and Midwest parts of the United States. Of course, we can't plan without good information on water consumption.
[05:02] Ground water systems, more and more we are mandated to have sustainable depletion from aquifer systems. We can
[05:12] get much better estimates of what those levels of use are by knowing the actual consumption of water from the aquifer
[05:20] systems. We mentioned endangered species issues, both fish and other uh uh species and court cases we talked about
[05:30] uh uh when we transfer water from agriculture to cities in some cases there may be water rights uh transfers or leasings or
[05:40] buybacks. And so we need to have a good estimate of what the historical water consumption has been and we can also use
[05:49] uh ET maps for monitoring near real time water consumption. Uh just to give an idea of what we are
[06:00] talking about when we look at evapotranspiration maps. Sure all of you are familiar with that. Here's an example of a seasonal by
[06:13] growing season evapotranspiration from Southeast Idaho over the Eastern Snake Aquifer. Aquifer. It's for the period from April through
[06:22] October. October. This is developed using the metric process that we will talk about in the Landsat imagery.
[06:30] We can see the high ET areas on the plane from irrigation. We can also see some high ET in the
[06:39] up at higher higher elevations in the mountain areas where we have forested systems. So The advantage of Landsat is that we can
[06:48] get relatively high resolution information information over a wide range of land cover types. And of course it's often times total
[07:01] millimeters of water consumed over an extended time period. In this case the growing season in Southern Idaho April
[07:09] through October. So the legend here shows us millimeters uh uh for that period. That's often meaningful information for estimating depletions to
[07:19] the resource. And then also uh for managing and and water accounting. We can zoom in a bit on that same image and we can see
[07:35] field to field variation in water use. We can see that it varies substantially from field to field. Each field has its
[07:43] own behavior. So, this is why we uh focus on Landsat uh imagery. Landsat has 30 m resolution in the shortwave bands.
[07:55] Uh Uh and then anywhere from 60 to 120 m resolution in the thermal bands. Uh Uh Often times over on the left, we see
[08:05] some riparian systems along streams. Uh ecologically, this is important. It's also important for estimating total depletion to the water resource.
[08:16] If we zoom in even closer, uh we can see within-field variation. Uh Uh which is meaningful also at the farm
[08:26] scale for improving uniformity of irrigation, for example, uh seeing areas of uh high ET versus low ET. So, uh a satellite like Landsat with
[08:38] 30 m resolution is very essential and important for field-scale water management. We use energy balance uh in METRIC, and there are a number of
[08:52] other uh energy balance models used for evapotranspiration besides METRIC. Today, we'll concentrate on METRIC. Uh Uh Reasons that we use energy balance is
[09:03] the fact that evapotranspiration consumes energy. Anytime we go from the liquid to the vapor state, uh there's a
[09:11] large amount of energy required. And so, if we can make a good estimate of what that energy consumption is, we can
[09:20] transform that into an equivalent depth of water evaporated. Uh The energy balance uh this equation we see in the right on on
[09:35] this uh simple schematic. We rearrange it so that evapotranspiration is on the left-hand side. side. And uh then we have the four primary
[09:46] components of the energy balance on the right-hand side. Recognizing that the primary energy source is uh uh
[09:54] uh radiation from the sun and from the sky. Uh Uh the net just means what is lingering at
[10:01] the surface. And then that is going to be partitioned and and consumed either in sensible heat flux to the air, heating
[10:11] of the air through convection. Or there's a portion of that may be conducted into the ground, call that
[10:17] ground heat flux. And then uh the remaining part of the energy from net radiation that we do not see in G
[10:26] and H, we presume goes into evapotranspiration. evapotranspiration. Now there are a few minor consumers of uh energy, for example, photosynthesis,
[10:37] uh incorporation into the plant, but those are usually less than 1%. Uh and so we uh we can generally neglect
[10:45] those in the energy balance. And again, the basic truth is that evaporation consumes energy. Because the satellites do not see water
[10:58] vapor flux at the surface, we have to more or less come in through the back door and use the thermal information
[11:04] that we can see to provide uh relatively good estimates of these three energy balance components on the right-hand side.
[11:18] One reason that we like to use energy balance also is it gives us the actual ET as opposed to potential ET.
[11:28] For example, uh in uh areas that may suffer from some water shortage either irrigated areas or some natural rain-fed areas during
[11:39] droughts. Um we can have shortages of ET. ET. Uh the energy balances allows us to estimate the actual ET directly under
[11:49] those situations. Uh here's a list of some other factors that can impact uh and reduce evapotranspiration including
[11:58] disease. Um we we can investigate some of the uh variables that affect crop phenology and growth including variety,
[12:08] planting dates, the density. Uh some areas of the world suffer from uh salinity of the water uh with
[12:16] potentially some reductions in evapotranspiration. Uh these two graphs we want to use just to show um that there's a very strong relationship
[12:31] over on the left-hand side between evapotranspiration evapotranspiration and uh surface temperature. Uh the right-hand graph shows the same
[12:40] thing, evapotranspiration versus a vegetation index called the NDVI. NDVI stands for normalized difference uh vegetation index. The
[12:53] The ET shown here is expressed as a a relative fraction of reference ET. We will define for reference ET is in a
[13:01] moment. Uh here's the ratio of the fraction of reference ET. Uh but the reference ET more or less represents
[13:10] the near maximum amount of ET that's limited by energy availability. We we just talked about the energy balance. So
[13:18] that gives us a reference maximum value. And then if we divide that into the actual ET, we get a nice normalized
[13:26] fraction that generally scales between about 0 and 1. So, it's very convenient uh uh to evaluate evapotranspiration
[13:37] information in this way and some of the spatial variation. Uh and then also inside of metric, for
[13:44] example, we use the ETRF during our calibration. calibration. What we want to show here is that there
[13:52] there is a relationship between relative ET and the amount of vegetation present as we would expect, but we do see a fair
[14:00] amount of variation from field to field. These are a number of desert and agricultural pixels down in the Rio
[14:08] Grande Valley of New Mexico during 2002. Uh we we see that for some low NDVI, there are fairly high values of
[14:18] evaporation, probably coming from some wet fields that have been recently irrigated or areas of shallow water table where there's free evaporation
[14:28] from the surface. We can also see for some moderate uh level NDVI, some relatively low values of ET that uh probably are fields that
[14:39] are suffering from water shortage and uh consequently a reduction in evapotranspiration. evapotranspiration. Uh Uh on the other hand, if we look at the
[14:49] relationship between relative evapotranspiration and surface temperature, we see a much stronger more singular relationship. Uh we we do want to point out that uh
[15:02] these ET estimates come from the surface energy balance that is based on surface temperature. So, the estimates are not independent and they
[15:13] probably overstate the close proximity as opposed to what's actually happening in reality. But, we do just want to show a a fairly
[15:23] strong strong relationship, although we do have up to 10 and 15% variation in ET for the same amount of surface temperature.
[15:34] But what we want to point out here is that there's a very close range of variation in surface temperature
[15:42] associated with the cooling effect of evaporation. evaporation. And we use that to our advantage in a process like metric.
[15:57] One of the areas where use of energy balance is quite important is in a very low water input system.
[16:07] Here's an example from Southern Idaho on a sagebrush desert system. The average rainfall is less than 150 mm per year. So this is a
[16:20] very low input system. We we are showing four days of measurements with eddy covariance here. Uh Uh and the first one here is one day after
[16:30] rain. The orange line Let me pull the pointer up here. The orange line that we see are measurements
[16:37] from two eddy covariance systems. Uh and we see a fairly substantial amount of evapotranspiration because of wetness of the soil. Uh
[16:48] these top lines represent net radiation. So we are consuming most of the energy. But as we move to day two and the soil
[16:57] surface is drying, we see that the ET signal is getting smaller and smaller. And then finally three and four days
[17:06] after rainfall, the soil surface is dry. Uh most of the net radiation now is going into sensible heat flux
[17:14] represented by uh three of these lines and so we uh uh have a very small ET signal. So, these
[17:24] are conditions where it's quite important to have as accurate an energy balance as we can. Just a review of those three components
[17:36] of the energy balance that we solve for from Landsat, um net radiation, sensible heat flux, and soil heat flux. Uh where
[17:44] they come from? Uh net radiation we break down into both the shortwave and longwave components. For longwave, it's both the emitted
[17:52] longwave from the surface. We get that from satellite and then the incoming longwave, we estimate that from the
[17:59] emitted longwave and transmissivity. Uh sensible heat fluxes, we'll cover in the next slide. Uh we estimate a surface
[18:07] air temperature gradient uh cup uh based that off from the surface uh image that we have. And then we uh have to include
[18:16] aerodynamics because sensible heat flux is a convective process. Soil heat flux, we generally estimate that directly from
[18:25] as a in relationship to the value of sensible heat flux um and with some moderation due to the shading effect of
[18:34] vegetation using fairly standard types of approaches. A quick look at uh sensible heat flux uh estimation and and we're not going to go
[18:45] very far into the details of the algorithms algorithms used to metric, but just to give you a
[18:51] sense of the basic equation. We use a standard electrical analog uh equation for sensible heat flux where we
[19:00] have uh air density See, I lost my little pointer, but uh up up at the top we have uh the row as air
[19:10] density. We have specific uh heat uh uh capacity. And then the the DT uh shown in the schematic is a
[19:19] uh vertical air temperature gradient uh from uh two points in the air stream above the surface. So, we don't touch the surface.
[19:30] Uh we go from a Z1 to Z2. And then R sub a H is the aerodynamic resistance between those two elevations.
[19:38] Uh over here in the lower left-hand corner, you can you can see we use a standard equation for that with some uh
[19:45] stability corrections for buoyancy effects. One of the advantages of using this DT is that we can inversely calibrate that
[19:57] function as a a function of uh surface temperature. Uh we don't need to rely on absolute values for radiation and uh
[20:09] Oh, excuse me. Radiation-based temperature and uh aerodynamically based temperature, some of the differences. We don't need to have absolute measurements
[20:17] of air temperature. We actually derive this DT function by inverse uh uh inversion of the energy balance
[20:25] equations. Um so that we uh eliminate many of the biases and uncertainties. Uh looking quickly at uh soil heat flux,
[20:39] uh soil heat flux is can be quite large for a desert system like that sagebrush that we looked at. Here's a plot of soil
[20:47] heat flux versus net radiation. Um net radiation can be as high as 600 W per square meter, for example, and
[20:55] ground heat flux can be almost 1/3 that much. So, it is a fairly important estimate. Uh here are some measurements
[21:04] uh taken from that sagebrush site. And so, we develop uh equations to estimate G both from net radiation and soil heat
[21:11] flux. Uh Uh we'll run through a few slides here that just show some of the estimate estimations coming from the energy
[21:22] balance components. Uh Uh here's that same sagebrush site. The left-hand left-hand photo or graphic just shows the various
[21:32] components of the energy balance. Uh looks like I've lost my pointer, but let's see if I can find it
[21:39] somewhere. I Oh, here it is. Okay. So, we have net radiation here. This is comparing to eddy covariance data for
[21:49] four different Landsat dates during 1 year. year. Uh Uh net radiation estimates from the model versus the measured ground data. Here's
[21:59] the very strong sensible heat flux where most of the energy is being dissipated as convection into the air stream. Uh
[22:07] here's our ground heat flux. And then we can see the very low ET signal that we talked about. So,
[22:14] uh uh you can see relative error is fairly large, although absolute error we're generally within 30-40 W per square
[22:23] meter. Uh but we can appreciate it's very critical to get these components estimated as well as we can so that when
[22:32] we difference them, we get as accurate an estimate of this very low ET signal as possible. And so, that's why we do a
[22:39] lot of inverse calibration and bias correction, correction, which we are showing in this graphic here. here. Uh
[22:47] Uh we we recognize that we have biases in uh net radiation estimation. There's some uncertainty in the surface
[22:55] temperature uh image from the Landsat satellite, a few degrees. Um Um generally uh we have biases probably in
[23:05] some of the components of aerodynamic basis for heat flux including roughness estimates. estimates. Therefore, we introduce a bias into our
[23:14] DT function that represents the near surface air temperature gradient. That transfers into a a known and planned
[23:23] bias into the sensible heat flux estimate. But then that bias is removed when we solve the energy balance for ET.
[23:33] Another way of looking at this is these bottom two equations where the top equation we are during the calibration
[23:40] we are solving the the energy balance for H in this case with known values of ET or or latent uh heat of uh
[23:49] evaporation LE. Um where we uh specify these values for a very low ET condition in the image and a high ET
[23:59] condition in the image. Um Um so knowing these values we can back calculate for H. And then from H we can
[24:07] derive the DT that is responsible for that value for H. And then derive our relationship between DT and surface
[24:15] temperature. temperature. Knowing that any biases in these inputs factor into H, but then when we uh apply
[24:23] this equation at 30 million pixels in the image, uh the bias in H is largely removed from the same biases that may
[24:32] exist in RN and G. So we end up with a non-biased estimate of LE, which is uh
[24:37] very critical for uh many of the water rights and and evapotranspiration uses that we have in western systems.
[24:49] Uh METRIC itself uh we like to think of it as uh an engineering tool as opposed to uh science tool,
[24:57] uh it's designed for uh fairly low-level uh Landsat scene-based applications, uh you know, say a 200 km by 200 km
[25:08] area. Um where really good estimates of ET are quite important, so it's probably worth some time by the human for review
[25:18] and intervention. Fact one, uh formula for accuracy, and this applies pretty much to any model, is you want to start with good physics,
[25:28] but invest good human effort and review time and intervention as uh required to improve the accuracy. So, we often will
[25:38] iterate through applications of uh METRIC with evapotranspiration, make reviews, make some adjustments uh to get uh as as good of an image as
[25:47] we think is possible. Some of the fine-tuning that we do in METRIC, and I'll I'll just mention these in this list,
[25:57] but uh we try to account for during spring conditions, we may have soils that were frozen at night, that impacts
[26:04] the thermal signal we get. Uh any amount of organic mulch, say straw from wheat systems, can impact the soil heat flux.
[26:16] Um Um soil heat flux uh we we optimize that just to learn more about it during energy balance inversion.
[26:25] Um and uh for estimating water, we instead of using energy balance, we do use a direct aerodynamic-based
[26:32] estimation for evaporation from water because we do have the surface temperature of water, uh so it's a
[26:37] fairly straightforward uh method to estimate directly uh from the thermal imagery. Uh a few more examples uh of
[26:50] applications of uh METRIC just checking against ground measured data. Here's some data provided by one of our
[26:56] research partners, Dr. Samuel Ortega of the University of Talca, Chile. Uh we're looking here at some olive
[27:05] orchards with eddy covariance measurements measurements uh here. And similar to that previous graph we looked at, we can break down
[27:17] estimates from the metric process on that over past days versus the ground measurements. Net radiation again is the
[27:24] stronger signal. Uh olives tend to be fairly low water use systems because of the sparse vegetation and stomatal control by the olives. Uh
[27:36] so our second largest component is the sensible heat flux. And then ground heat flux and the ET
[27:42] signal again, which is quite low for these olives, uh is on the order of 100 W per square meter.
[27:51] But relatively good correspondence to a one-to-one line. Now Now metric and other processes for ET from Landsat and other
[28:03] satellites give us a snapshot of ET at the time of the satellite overpass. And in the case of Landsat, we may have
[28:11] images every 8 days with two Landsats or every 16 days with one Landsat. Um but we have to ask the question, what do
[28:21] we do in between the satellite overpasses? So we tend to use that fraction of ET that we've introduced
[28:26] already, reference ET, to extend these snapshots over time, recognizing that relative ET is relatively conservative value because it's scaled to the
[28:40] reference ET. Then we use the reference ET based on weather data or gridded weather data um to incorporate the
[28:48] impacts of day-to-day variation in evapotranspiration as impacted by the weather system itself. We'll talk a little bit here about
[29:00] reference evapotranspiration. We use what's called the American Society of Civil Engineering standardized Penman-Monteith equation showing on the bottom there. It's a very
[29:11] standard widely used equation that utilizes solar radiation, air temperature, wind speed. This U variable here is wind speed, and then some
[29:22] measurement of humidity so we can calculate what we call the vapor pressure deficit. So this equation is formulated with fixed coefficients to
[29:32] give us a estimate of what we call reference ET that represents a specific vegetation. In this case, either for alfalfa, as we'll
[29:43] see in the next slide, or for grass, also. also. We like to use alfalfa in metric because
[29:50] alfalfa is a very strong consumer of energy and it tends to approach the maximum ET possible. Here's a photo of if you're not familiar
[30:02] with alfalfa, this lower right-hand field is an alfalfa field and from this small person you can get an idea of it's about
[30:11] half a meter tall. Clipped grass is the other reference type used in the Penman-Monteith equation. equation. Here is one way that we measure
[30:20] evapotranspiration. This is called a weighing lysimeter. Here's during the installation at Kimberly, Idaho back in the '60s by the USDA.
[30:30] This is an inner tank that's placed on weighing scales. We measure the weight of this tank every
[30:36] half hour, even every 5 minutes. And as evaporation occurs from the surface of the lysimeter, the mass changes, and we
[30:45] just simply measure the change in weight over time and derive a a very good estimate of ET.
[30:53] Here's some data from that lysimeter with alfalfa. The purple is the lysimeter measurement and the ETR is
[31:01] coming from that standardized ASCE equation. You can see very good correspondence even during the nighttime between the equation and the
[31:09] measurements. measurements. Here's another day a few days later where we had a cloud system come over and both the lysimeter and the equation
[31:19] that's based on weather data had very similar sensitivity. So, we we feel quite confident that that Penman-Monteith coupled with
[31:29] high-quality weather data can give us a very good estimate of what the maximum evapotranspiration is. We use that
[31:35] information both during the calibration of METRIC, and then we also use it uh during the time integration between
[31:43] Landsat imagery. Here's just one more look just to build your confidence if you're not familiar with the ASCE Penman.
[31:53] These are daily measurements by that same lysimeter system in the dark blue and then the light blue color overlay is
[32:01] evapotranspiration evapotranspiration estimated for the reference alfalfa crop by the ASCE Penman-Monteith uh for full cover periods. So, we we don't look at
[32:11] when the alfalfa is cut because then it's no longer in a reference state. Uh to go from the time of the satellite
[32:21] overpass, here's again ET millimeters per hour on the left. Over on the right is is fraction the fraction of reference ET
[32:30] scaled between about 0 and 1 or in this case about 1. Or actually, we're using just the green dots for the
[32:38] right hand axis. We can see that these the sugar beets over time you can see the consistency of the ETRF
[32:46] over time pretty much and then this white dot represents the 24-hour average. And we can see that the value
[32:54] that we get at the time of the satellite overpass at 11:00 12:00 is very similar to the 24-hour value. So we use this to
[33:02] jump from the overpass time to the full day to make an estimate of ET for the extended time period.
[33:11] And then for the interpolation as we talked about uh uh each of these blue dots is a Landsat overpass day uh for
[33:19] every pixel we get an estimate of what the relative ET is and then because ETRF is relatively conservative over time uh
[33:29] we can use a spline function or linear function to interpolate between these values. values. And then we estimate reference ET every day using
[33:39] the weather data either from gridded weather data sets or from individual weather stations. So we can derive then
[33:46] an estimate of ET for every day that occurs in between these images and we integrate under that curve to get our
[33:55] monthly or seasonal or annual evapotranspiration. Here's a a look at that same lysimeter in this in Kimberly in this case planted
[34:08] to sweet corn. It's about 2 m by 2 m in diameter. Here's a a look at uh that growing season April
[34:18] through September in this case. uh measurement by the lysimeter and then estimate by metric and in this case it
[34:26] came out very very close. It's not always this close. Um but it just happened to for this particular year
[34:33] back in 1989 uh that the sugar beet estimate was uh quite quite close. Uh, Uh, it's it's very valuable to conduct what
[34:45] we call blind comparisons where the application with the satellite is done in the absence of any knowledge of the
[34:52] ground measurements. In this case, here's some data compiled by one of our partners Justin Huntington of DRI.
[34:59] It's a research institute. These are mostly eddy covariance some Bowen ratio systems operated by the US Geological
[35:07] Survey over some irrigated agriculture in Western Nevada. And And without having the data and making metric applications
[35:20] Justin was able to come up with these estimates of seasonal ET. So it includes the impact of time
[35:26] integration versus the seasonal ET measured by the Bowen ratio and eddy covariance systems. And And Justin has put some air bars on here to
[35:37] give us some uncertainty estimate of both the ET measurement and then also the estimate coming out of METRIC and
[35:46] you see relatively good correspondence even for some fairly low ET systems that probably are not irrigated but are using only background
[35:56] precipitation. precipitation. Another blind comparison that was done by Utah State University and the US Geological Survey. One component was in the Palo Verde
[36:07] Irrigation District which is in Southeast California near Blythe. If you're familiar with it, it's about 100,000 acres
[36:15] of irrigation and they conducted ET estimates both using a district-wide water balance and then using some Bowen
[36:23] ratio ratio technology. technology. We processed a number as of Landsat scenes as did other teams that participated. I'll just show the
[36:34] results here identifying uh metric um on this row here. Um Um and uh this bias is is the difference
[36:44] between the ground measurements and the metric estimates and and metric is within about 2%. Uh some of the other
[36:52] methods were as with less than 10% accuracy also, so we feel that 10% uncertainty is quite good from
[37:00] satellite-based estimation. So, we had three different methods that were uh able to uh estimate season-long uh ET within 10%.
[37:12] If we look at the ET from the water balance, uh similar results. Uh the metric uh estimates were within about 2%
[37:20] again. And uh two other methods were within 12% which again we feel is probably adequate for much of the water
[37:30] application uh work, water management. And of course, the closer we are, the more comfort we have and and it's always
[37:37] good. Just another quick comparison with other uh lysimeter measurements. Actually, I I think I'll skip this, but this uh graph
[37:47] was just showing on each image date we can compare against something like the lysimeter just to understand the behavior and uh
[37:54] see the change in ET with development in this case with a sugar beet crop in Southern Idaho.
[38:03] Well, let's move on to some of the applications where accuracy is pretty important. Let Let's start with a
[38:09] application in Southern Idaho. Uh Uh all of these yellow dots are irrigation wells. The red just shows some of the
[38:18] irrigation areas. Uh the yellow irrigators are generally junior, we call them, to some of the senior irrigators
[38:27] here without wells that rely on river water and canals. Uh, they have higher priority water rights. Um, there's a lot
[38:35] of tension between those two systems. We use uh, metric ET here you can see for 5 years
[38:42] years uh, with an overlay of a groundwater grid to make better estimates of some of the impact to the aquifer by the
[38:49] uh, well users. Uh, there have been a number of uh, law uh, court-based uh, uh, water calls we call them where the
[39:00] uh, uh, senior water users file a complaint against the junior water users and then the state has to do some type of
[39:07] intervention. intervention. Uh, just show you some of the news headlines here. So, the state had to go in and identify
[39:15] some of the junior water users who may have to curtail some of their pumping based on their water right uh, age.
[39:22] Um, Um, so that uh, they would not impact some of the water flow in the Snake River
[39:27] here that uh, again impacts the water supply to the surface water users. So, metric was used in this case. Here's a
[39:34] map of evapotranspiration to allow the state to come in and make an estimate of uh, of the spatial
[39:40] distribution of depletion to the aquifer by these pumpers so that uh, they can make a good judgment of how far away
[39:47] from the river to uh, curtail water and then at what date of water right permit to cut off uh, to
[39:56] satisfy the water supply for the senior water users. So, fairly serious applications of evapotranspiration mapping. mapping. Another way that uh, the ET is used is
[40:06] water rights buyback where uh, we may buy water from irrigated excuse me, irrigated agriculture to leave more
[40:14] water in the river system. In this case, one uh, application was in the Snake River for endangered species.
[40:21] We've The state has bought some marginal irrigation water rights through negotiation. Of course, farmers always want to sell the full water right
[40:30] amount, but the state uh Department of Water Resources only wants to buy the actual wet water, we call it, the amount
[40:36] of water that's been consumed historically. So, the satellite is very useful for that. Here on the left is
[40:42] evapotranspiration from this uh region that was bought out. And then on the right is 1 year after the retirement of
[40:49] the land, and we can see that there's still some residual evaporation occurring, but uh 2 years later it has
[40:56] returned to a desert situation. Um Um here's an application by uh our co-developer Aisha Kilic of the
[41:05] University of Nebraska, Lincoln. Uh again, uh making applications for a local state uh natural resources district that has to monitor manage and
[41:16] monitor both ground water and surface water depletions. Um and here's a map of monthly evapotranspiration showing the
[41:23] spatial distribution. Uh other applications have included along the uh Middle Rio Grande of uh New Mexico that we already talked about. Uh
[41:35] the it's a fairly narrow corridor of riparian vegetation and also irrigation. Um and there's invasion of salt cedar,
[41:44] so there's a lot of questions related to water consumption. One of the things that we can do with
[41:48] spatial evapotranspiration maps is we can sample all of the pixels that are associated with a certain land use
[41:55] class. In this case, uh salt cedar, the invasive species, and then uh cottonwoods. We're showing here the
[42:03] annual evapotranspiration consumption versus the frequency distribution, so these are like histograms. And we can see that the distribution of
[42:12] ET for cottonwood varies widely from very high values to low values depending on the proximity to a stream or to
[42:20] shallow groundwater. Same thing occurs for salt cedar. So, having the spatial evapotranspiration maps really helps us to appreciate the spatial distribution
[42:31] amongst those two systems to be able to compare the relative water consumption. Here's just a a table showing some of
[42:41] the relative values that we don't need to go into. Another Another nice use of thermal based energy balance for ET as we can look at
[42:51] places that maybe have some shallow groundwater. And here's a graph showing precipitation monthly in a part of the
[43:00] Rio Grande over some bare soil. And we see evaporation that exceeds substantially the precipitation. And we can use this to identify areas where the
[43:10] shallow groundwater causes free evaporation from the soil. This is one place that we could go into to
[43:18] rectify that situation and conserve water that is not being used beneficially. Other application areas have included California. We just looked at the Palo
[43:30] Verde area here. Another large irrigated area is the Imperial Imperial Valley of California right next to Mexico.
[43:39] And uh some of this water has been transferred over the last 15 years to the city of
[43:46] San Diego, Los Angeles. And so there's a need to monitor the impact of that transfer and to help manage the water.
[43:54] Uh fallow fallowing of fields back to Palo Verde, we we can monitor help the cities monitor the impacts of fallowing on the
[44:05] evapotranspiration. Uh Uh Nevada, as we talked about, uh water is moving also from irrigated agriculture and from phreatophytic systems into the
[44:18] cities. Uh so, we need uh evapotranspiration information for monitoring that. Uh we've seen applications in the Klamath River Basin
[44:26] of uh Oregon and Northern California, where we have some real tension in water use between endangered species, uh
[44:35] salmon recovery, and irrigated agriculture. There's over-allocation of water, and so we can use uh monitoring of irrigation to help us with uh
[44:46] determining the impact of retiring some of the agricultural areas. Here's a just a time-lapse showing one part of California where or excuse me,
[44:56] of Oregon, where there's been some retiring of irrigated areas. So, we can see portions of that irrigation area
[45:04] through the more brown colors, uh seeing a reduction of ET during the course of the growing season as water is
[45:11] uh pulled off and and retired. For example, right here. Here's just a close-up uh of the time-lapse again showing areas where uh
[45:23] there's been a reduction in in water application to leave more water in the stream systems, and we can use the
[45:31] satellite to monitor associated reduction in ET corresponding to retirement of the irrigated uh water application. So, this is a time-lapse just going
[45:45] through the growing season. Uh Uh evapotranspiration maps have been used in in uh uh Supreme Court cases. Uh for example, uh
[46:02] recent case between state of Montana and Wyoming. We have introduced metric based evapotranspiration maps and so there
[46:09] it's being vetted even at the US Supreme Court level. Um so it's becoming a very accepted process to estimate spatial
[46:20] variation in evapotranspiration. We'll talk about at the end of today's presentation some of the challenges not having enough frequency of Landsat scale
[46:32] imagery. We sure like to see more Landsat. Eventually, we would like to see see Landsat type of overpass every four
[46:40] days, not just every eight or 16 days to mitigate for clouds. Fact, here's a showing four different images where
[46:48] we've masked out the clouds. You can see it really impacts our knowledge of spatial evapotranspiration. Here's a case in Nebraska, some of the
[46:58] work with the University of Nebraska. Again, we have to mask out the clouds, then we have to fill it in using some
[47:05] type of information gathering from adjacent images in time to fill the missing cloud data, but it's never a
[47:14] perfect process. But here is a application in Wyoming where we have been able to produce seasonal evapotranspiration
[47:22] evapotranspiration after cloud filling. So it is possible, but but it's much much easier when we have more
[47:27] satellites so that we have more clear sky images available. For example, here's where we just allow an automated filling in of uh
[47:39] of of clouded areas that I just showed you from Nebraska. We can see what the information we filled in with does not
[47:46] fit the actual outside areas that are real data. So we have to make some adjustments using some soil water
[47:54] balance models. We get a much better fit that way, but it's a fair amount of work to do, and we would really be helped by
[48:01] having more satellites. But, it can be done. Some of the current users of METRIC, and then I'll turn the presentation over to
[48:10] Aisha to talk about eFlux. eFlux. Is uh at state level we talked about, but here's just a kind of a short list of
[48:19] some of the users of the data. You can review this later. Here's some more users, Montana, Texas, Oregon.
[48:27] Uh some of the commercial applications that have been made by private companies, or even by Gallo for manage
[48:34] managing wine quality and water consumption. And then internationally, we're seeing some applications. Uh access to METRIC, we generally
[48:44] provide training courses once or twice per year, a 4-day training. Here's a recent one conducted in Davis,
[48:51] California. California. Uh during that course, we provide access to the METRIC code, uh a number of different levels of uh
[49:00] processing. Um currently, METRIC is coded in ERDAS and ArcPy and Python GDAL and other teams around the world have used even R
[49:15] and and MATLAB and other methods. So, the next section that Aisha will talk about is the eFlux.
[49:27] Oh, Aisha says that she has to run to class. class. Okay. So, I I guess I will continue on.
[49:33] But, I'd like to introduce Aisha Kilic. Aisha, you want to Okay, she had to run to class. I
[49:39] She apologizes for that. She has a class in uh remote sensing that she needs to teach. Okay, well, let's continue on. One of
[49:49] the the forms of METRIC that we have developed over the last three or four years uh is
[49:55] on the Google Earth Engine. It's called eFlux Earth Engine Evaporation Flux. Like to we'd like to acknowledge our
[50:02] team of developers. It's been a three institution effort with the University of Idaho, University of Nebraska, and
[50:09] Desert Research Institute. We'd also like to recognize the very strong support by Google Google staff. staff. Currently, Tyler Erickson is a very good
[50:21] day-to-day resource for us. Why ET on Google Earth Engine? Well, the Earth Engine has very strong computing
[50:31] power with parallel processing cloud storage. It's essentially free access at this point in time. It holds a number of
[50:40] archives. For example, the entire Landsat archive for the globe is on Earth Engine as are a number of gridded
[50:48] weather data systems that Earth Engine and Google have been kind enough to load into their collection system. So,
[50:54] NLDAS CFsv2, if you're familiar with those, are available for anyone to use. As I mentioned, good strong user
[51:02] support. And then, Google just has the right philosophy that they want to make free information available to really
[51:09] improve conditions in the world both for food supply and for the environment. Here's a little picture of what we get
[51:18] from from Earth Engine. The eFlux is very similar to what we saw with metrics. So, these types of images, here's a time lapse
[51:26] just for the year of 2008 using Landsat 5 imagery. The full archive is there as we indicated back to 1984. And good imagery
[51:35] never goes bad. It's like a fine wine. It often improves with age. So, we can go back and look at historical water
[51:43] consumption over time. In this case, in the Palo Verde area, we can see the impact of fields that have been
[51:49] fallowed, where that water has been taken into the cities now, and we can monitor any background residual
[51:56] evaporation occurring from precipitation or shallow groundwater. Some of the data resources used by eFlux on Earth Engine,
[52:06] mentioned NLDAS, a derivative of NLDAS is a very nice daily weather set that's been bias corrected by John Abatzoglou
[52:15] at the University of Idaho. We use that to estimate our reference ET using the Penman-Monteith. There's also
[52:22] the National Land Cover data set uh available for various years. Digital elevation models, we use that for some of the elevation
[52:32] impacts on surface temperature. And then also we have the STATSGO database mounted for the CONUS, Continental US,
[52:41] and then we have a Food and Agricultural Organization soil database for the rest of the globe. Here's just an example of reference ET
[52:52] calculated from the gridded GridMet weather data system that's loaded. This is again the kind of the potential ET represented by the
[53:01] Penman-Monteith. Here you can see high values in 2012 associated with the big drought in the Midwest. So this is used
[53:09] both for calibration and for time integration. integration. One of the intermediate products that we use for calibration of eFlux is
[53:17] background evaporation. Just from rainfall events, again, this is coming from the GridMet uh system that uses PRISM
[53:28] precipitation. precipitation. And so we we get the special information to tell us for the the low ET areas of an image
[53:37] what the background evaporation is likely to be. Uh Uh is running for the entire globe. Uh we'll give a demonstration next. Uh so
[53:48] we do use some global databases for land use, uh DEM, and uh and of course the Landsat archive is available for both
[53:56] Landsats 5, 7, and 8. Uh Uh I won't linger here, but just some of the work we've had to do. Uh one has
[54:04] been to develop a uh web access um for eFlux, and then uh for cloud detection, uh we're working on that
[54:14] right now for the Fmask with Google. Uh coming is the time integration. Right now we're at the snapshot level.
[54:22] So now we will uh take time out and uh go to the web and uh do a demonstration.
[54:29] Uh we're providing URLs for two beta copies of eFlux, uh what we refer to as a level one and a level two. The level
[54:37] one is a fully automated uh calibration. So you you really don't need any knowledge of ET background, the process,
[54:45] or anything, but uh because it's automated, it may not have as high of accuracy. Uh we're also giving access to a what we
[54:54] call a level two, where uh the user can go in after the initial automated calibration and make some adjustments to
[55:03] the ET image. Uh if you're would like to try to improve it uh based on your experience. Level two is really for
[55:11] experienced users who understand the metric process. Um and if we have time, we'll we'll go into a demonstration of that.
[55:20] So Brock, I guess we'll uh switch over to the web now if uh that's Okay, here's that uh level one uh URL.
[55:32] So if you you're feel free feel free to follow along, but actually if you can wait maybe until after my demonstration
[55:38] is done, it'll give me more bandwidth with the our website. But, I'm just putting in that level one URL.
[55:46] First thing that we will see come up is the eFlux uh screen. Um and over on the right is I
[55:54] don't know if you can see my cursor, but uh that pin this is a standard Google Earth type of map. I can zoom in, zoom
[56:02] out. out. The the pin is uh showing the location where I would like to uh make some processing. So, for
[56:09] example, uh let's just go down into southern Arizona um where there's some irrigated agriculture, a lot of clear images.
[56:19] And then up here on the left if you can see my cursor is the date range that I
[56:25] am interested in processing. And just as a default, it's coming up with June through through September. But, if I click on this, I
[56:33] can get some calendars. And for example, if I want to look at a little wider range, let's start with perhaps the 15th
[56:40] of May. And then let's go through the 30th of September, for example. So, we're going to explore
[56:48] and see what kinds of images we have available. available. And uh so, I'm going to come down to
[56:52] this green button at the bottom here and say search for images. So, Google Earth Engine is looking
[57:01] through its collection. Uh it's given us a return here. So, it's a drop-down box. I'm going to press that
[57:07] green box. And what we see here is a list now of all the available Landsat scenes for that location, a single path
[57:16] row, and uh that series of time that we looked at. Uh the top half is for Landsat 7. We can see the LE7 indicated
[57:26] there. And then the bottom half is uh LC8, meaning Landsat 8. Over on the right is a indication of the amount of
[57:34] clouds available. So, just for an example, let's just pick the first Landsat 8 image here as zero cloudiness
[57:42] is for the 1st of June. So, I'm going to click on that. And depending on how much traffic we
[57:50] have, have, I get this menu now. It just says, "Okay, do you want to run eFlux?" Here's
[57:56] a picture of that image here. We can zoom in on it. We'll zoom in more later, but we can see
[58:01] a false color. Here's some of the irrigated area south of Phoenix. Here's the Phoenix area over on the left.
[58:09] So, I click the run eFlux button and we get some options of different products we can look at. You know,
[58:16] here's the original true color image. I push that true color button. Um looks like it's running a little bit
[58:23] slow. We probably have a a number of you maybe exploring this. Uh probably I should have hidden the URL from you so
[58:30] that that we we don't chew up all our bandwidth, but if if you can maybe wait to
[58:37] run this, it'd be better. So, I'm not going to run through very many of these just because it looks like
[58:42] it's running slow because we've got a lot of people trying it out. But, here's the true color. But, for example,
[58:48] here's a surface temperature map. Let's look at that real quick. Uh this is one of the beauty beautiful things of
[58:55] Landsat is that thermal image. Uh that and and we run it through our algorithms and we present a surface
[59:02] temperature map in Kelvin. So, we'll run that and then finally I'll I'll go directly to the ETRF cuz it
[59:09] looks like it's running slow uh because we have a lot of users. But, here's a surface temperature map. The the
[59:15] brighter colors are the cooler colors. We can see the the low temperature associated with some of the irrigated
[59:22] areas. areas. So, I'm going to ask Sorry, I should have lingered on that. I'm asking for the ETRF
[59:29] that fraction of reference evapotranspiration that gives us the relative amount of evapotranspiration. evapotranspiration. That's generally of interest. We we also
[59:40] like to use ETRF when we review the images images to look at how good the calibration looks. You know, do we get the types of
[59:49] high values towards one that we would expect where we have full vegetation. Okay, it looks like it's run and now we
[59:57] have the image coming in from the different cores on the Google Cloud. So, they come in at different times.
[1:00:03] Um, we can zoom in down here in the lower left-hand part of the image. Let's see if I can find my cursor. Here we go.
[1:00:11] So, I'm going to just zoom in so we can look at some of the irrigated areas south of Chandler near the town of
[1:00:18] Maricopa. Maricopa. Fairly well-known place. And as we zoom in, uh, we can see that the cloud is
[1:00:25] recomputing. recomputing. Um, and now we can we can start to see the individual fields appearing. The dark green color from the legend going
[1:00:35] into blue shows high uh, ET. We can see some center pivot fields. We can see some other surface
[1:00:41] irrigated fields, probably. Uh, we can see areas that are not irrigated, either rangeland or just temporarily fallowed fields. We can see
[1:00:51] the very low ET signal associated with those. those. Here we can see some of the cores from
[1:00:56] uh, the Google Cloud still coming in, reporting back. So, this is very valuable. Uh, again, this is all automated calibration. So,
[1:01:06] um, um, sometimes and and I want to emphasize uh, we do Ikhache, Ikhache Kilic's team at the University of Nebraska is doing
[1:01:15] some of the primary coding on the calibration and interface. And we're still in beta mode, so this is
[1:01:21] a beta product. We are updating it weekly. So, please come back and look at it from time to time. We hope that it will get
[1:01:30] better better and better. Right now with this automated level one product, we allow the download of both
[1:01:38] the ETRF and then the actual ET. So, once we have our image, if we want to to push on that ETRF download button.
[1:01:49] Looks like the site's pretty busy right now, but it it will give us now a means of saving that TIFF file.
[1:02:00] So, let me minimize this so we can see it. So, down here at the bottom of my
[1:02:04] screen, it's asking for to save this TIFF file, so I can save it to my computer now. It's in a zip
[1:02:12] location. I can just give it a very specific name. And the maybe with the date and then I
[1:02:23] can save it to my uh computer, unzip it, and I'll have a TIFF file that I can bring into any type of
[1:02:30] viewing system. It's a registered geo-registered information. It can be brought into a GIS. And other places. We're getting a little bit past the half
[1:02:42] hour mark, so feel free to demonstrate that other level two. I'm not going to try it now
[1:02:51] cuz I think the system will run pretty slow, so if we can go back uh Brock, maybe to the
[1:02:58] uh uh Adobe application. I'll just give a few more slides finishing finishing the presentation. What we'd like to talk
[1:03:08] about is is kind of a I guess an advertisement. Um here is is our the the very important
[1:03:16] need for more Landsat type satellites. They don't have to be Landsat, but they need to be Landsat type resolution with
[1:03:22] thermal imaging. We need that to mitigate mitigate clouds. And what I'd like to show you is some work done at
[1:03:29] the Desert Research Institute by Charles Morton and Justin Huntington, where they've gone through the MODIS archive to look at the cloud identification, and
[1:03:39] they've run a very nice statistical analysis for the entire continental United States that shows the probability of producing
[1:03:48] uh good estimates of water consumption for an entire growing season, for an entire year, where we would like to have at least one
[1:03:58] cloud-free image every 30 days, once per month, so that we can really track the uh change and evolution in ET caused by
[1:04:06] development of vegetation or change in water supply. So, here we can see the probability of that happening when we only have one
[1:04:14] satellite with a 16-day revisit, one Landsat. And we can see that only in the dry parts of California are we up above
[1:04:22] uh 70% chance in any particular year of having success, of being able to give the state or the government or local
[1:04:32] producers field-level uh maps of evapotranspiration. evapotranspiration. If we go into a a more cloudy place like Nebraska, we're down less than 5%
[1:04:42] chance, chance, a one in 20 chance that any particular year we will feel that we are successful in having
[1:04:50] monthly evapotranspiration. Southern Idaho, where I'm from, we're up around the 20-30%, and we do see that in
[1:04:57] practice. practice. Now, if we have two satellites, like we currently do, we can see that the situation greatly in improves. And for
[1:05:05] Southern Idaho, for example, we're up to the 70% chance of success. Uh Southern California, almost every year we are going to be successful uh
[1:05:16] just because it's a low cloud area. But if we go back into the Midwest like uh in Lincoln, Nebraska, again, we're still
[1:05:24] below 20% 20 to 30% because of the impact of clouds. We just don't get enough snapshots from Landsat so that we
[1:05:35] get enough clear sky looks. And of course, the eastern United States is all red. Florida is a
[1:05:42] very cloudy place. And so, you have to have a lot of uh frequent revisit to have any kind of
[1:05:49] success uh with a process like uh metric using strictly Landsat. We have to get into a data fusion with VIIRS and MODIS
[1:05:57] in that case. Now, if we were to have four satellites with images every 4 days, it's a
[1:06:04] binomial type of probability thing. So, probability more than doubles. It goes up like by three or four times. So, now
[1:06:11] for much of the western United States, we're up in the 80 and 90% probability level. And even in the eastern United
[1:06:18] States, we're above 3%. So, at least one year out of three, we have some very good accurate estimates of ET at field
[1:06:26] scale. Florida still have some some issues because of clouds. So, in a very ideal very ideal, which we
[1:06:34] won't see probably in my lifetime, if we were to have eight Landsats or four Landsats that are twice as wide as the
[1:06:41] current one, so we have a revisit every 2 days, we can cover almost every location in the United States daily.
[1:06:49] Excuse me, not daily, but with high success of having ET maps every year with two. And then in a utopia where we
[1:06:59] have one satellite, I guess we're not showing it, it gets even better. But a 2-day revisit it be just so fantastic for field level
[1:07:08] water consumption that's so valuable for so many water users and for sustaining water resources usage in the United
[1:07:16] States. The very last slide, just a little pitch along the same lines. This idea of a two-day
[1:07:23] or even a daily revisit, it's it's not prohibitively expensive and we like to call this an Earth selfie. We all have
[1:07:32] our smartphones, we take selfies of ourselves. Why don't we have a field scale satellite system that takes an
[1:07:39] Earth selfie every day? And here's just some very simple math. Uh if the cost of a Landsat is about
[1:07:46] $800 million, there's 300 million Americans. We're only asking to launch 16 Landsats would only cost five bucks per American per year. That's
[1:07:56] just only two coffee lattes per year per American. I I We think that that's a very affordable investment to have a
[1:08:04] field based selfie. Every day. So that's our pitch. So we hope that you contact your congressman uh
[1:08:13] uh uh communicate with the US Geological Survey who is in charge of the uh Landsat, NASA. But primarily to Congress to help them
[1:08:22] understand that this is a very affordable uh uh uh idea and uh it's it's going to be used
[1:08:30] by millions of people for water management. management. So with that we will stop and uh just want to thank you and I I guess we'll
[1:08:37] shift into a question and answer. Uh yes, thank you so much, Rick. That was a wonderful presentation um
[1:08:47] not only high resolution ET we can see but so many applications and that great examples plus EE flux and so easy
[1:08:54] accessibility of data. So we really thank you for your time and this presentation. Yeah, thank you. It's our pleasure
[1:09:05] pleasure. And and Aisha wanted to apologize that she had to run to her class. So, she wasn't able to present,
[1:09:11] but she's a a major partner and developer in all of this as is Justin Huntington at the DRI.
[1:09:30] So, I guess we're I guess we're getting some uh uh questions coming in. Uh Let's I guess I I will read these.
[1:09:43] Here as Brock indicated, you're you're free to type in your questions and then I will go through these as I am able and
[1:09:53] uh uh uh read the question and then answer it. So, hopefully you can all hear me. Uh
[1:09:58] looks like the first one question is, "Have you tried applying metric to daily MODIS?" MODIS?" Uh the answer to that is yes. Uh we are
[1:10:06] able to apply the same algorithms in uh metric to MODIS. We just need to use different coefficients for deriving
[1:10:14] reflectance and surface temperature information, but the technique is uh essentially identical. Uh we do process some MODIS imagery from
[1:10:24] time to time, but not often uh simply because of the spatial resolution of MODIS, which is 1 km thermal resolution.
[1:10:33] Uh so, our ET generally is granulated at the 1 km level. Um Uh 99% of the fields in the United
[1:10:42] States are smaller than 1 sq km. So, we lose that field scale information, which is so essential to us.
[1:10:50] Uh there are some techniques and Martha Anderson of the USDA would be talking next week uh about some of the fusion
[1:10:56] techniques where we use a combination of MODIS and Landsat or VIIRS, which has 375-m 375-m resolution. That's quite helpful, but we
[1:11:05] still tend to lose, uh, some of the, uh, time-based fidelity of the change in ET, especially with irrigated fields,
[1:11:14] where we really don't know when single fields are irrigated right next to a field that may not be irrigated that
[1:11:21] week, and uh, MODIS tends to kind of fuse all that together. MODIS is a great satellite. We we we
[1:11:32] love MODIS, but it's not nearly as useful as Landsat for field-scale water management, uh, which which is really
[1:11:39] where it's generally done. Another question we have, uh, were the ET calculations used in groundwater models to calibrate pumping rates from
[1:11:49] junior and senior water users? Uh, the answer is yes, uh, uh, in a couple different ways. Uh,
[1:11:56] the state of Idaho Department of Water Resources has taken ET estimates from METRIC and then compared those with ET,
[1:12:04] uh, estimated or groundwater pumpage, uh, either measured or estimated using electrical power consumption. Uh, sometimes one can establish
[1:12:16] relationships between uh, electrical, uh, kilowatt-hours consumed and the amount of water pumped, uh, in situations where there are no
[1:12:25] direct flow meters, like propeller meters or sonic meters. Um, and they get, uh, a fair correspondence, but, uh, it has
[1:12:33] indicated that the, uh, measurements, uh, have some uncertainty associated with them. Uh, so, that was your second question,
[1:12:42] does the flux compare with pumping rates? rates? Uh, Uh, uh, uh, it it there's a fair correspondence, but
[1:12:49] it's It's a very tight relationship, uh, for a variety of reasons. Uh, Uh, Some of it related to the uncertainty in
[1:12:57] the pumping data. data. The ET for metric is used directly in groundwater model development by estimating recharge to the aquifer just
[1:13:10] using a water balance where ET is one of the layers utilized. And then it's used during operation of the groundwater
[1:13:19] model where the stress to the aquifer is derived directly from metric uh ET or derived from weather-based ET estimates
[1:13:32] that are calibrated with metric or at least least compared against metric to confirm. Another question is can we use metric
[1:13:48] for small areas like 40 acres or 20 hectares? And the answer is yes, that that is why we
[1:13:56] like to use Landsat. One Landsat pixel again is 30 by 30 uh meters which is about 1,000 square
[1:14:05] meters. So it's about 1/10 of 1 hectare or about 1/4 of an acre. So the thermal band of course is larger.
[1:14:14] For Landsat 8 it's 100 meters. Um Um I I guess I did and 100 meters by 100
[1:14:20] meters is 10,000. So excuse me, it's about 1 hectare in size or about 2 acres. So Excuse me, I have a frog in my throat.
[1:14:31] Uh Uh So we we can still definitely look at 40 acres although we do have start to have
[1:14:37] some edge effects where some of our thermal pixels might uh straddle the edge of a field. So part of the thermal
[1:14:45] information is from inside the field, some of it's from outside the field. So, we start to get a little bit of bleeding
[1:14:52] of ET outside of the field edges. And of course, the smaller the field, the larger that edge effect is going to be.
[1:15:01] There are some ways of sharpening the thermal using vegetation indices down to 30 m that we employ and other people
[1:15:09] employ. employ. Uh Uh So, we we can we we feel we can probably get down to about a 10-acre or a 5-acre
[1:15:17] size of field and still give a reasonably accurate estimate of what that field integrated ET for that field might be.
[1:15:30] Uh one comment says that they are happy to give up the lattes. So, thank you very much. It's might be a little
[1:15:38] healthier healthier anyway to drink a little bit less coffee. So, I appreciate you appreciate that. I will
[1:15:46] give you information on how to send that money into the US government to help afford the next Landsat system.
[1:15:55] Let's see. Let me look down. Here's another question. Um How do you see the performance of simplified models such as the SSEBOP
[1:16:06] C-BOP C-BOP one way to pronounce that, I guess, compared to METRIC? C-BOP is stands for the simplified surface energy balance
[1:16:15] operational model as developed by the US Geological Survey survey at the EROS Data Center in Sioux Falls, South
[1:16:23] Dakota. Dakota. Um In in some of the blind comparisons, like in the Palo Verde, C-BOP was one of the
[1:16:33] higher ranked methods. As I mentioned, it was within 10 to 12% of the measured values. Uh one of the
[1:16:44] benefits of C Bob is that it's uh generally fully automated and can takes uh maybe fewer computer resources to
[1:16:53] apply. apply. Uh that's one consider- consideration. Um I I think there's plenty of room and opportunity for
[1:17:01] both models, C Bob and Metric and others, uh Lexi, dislexi, uh C ball, reset. reset. Um Um we we like to think of Metric as as
[1:17:12] being uh quite useful for those applications that are are have quite serious ramifications. For example, for water rights work where uh
[1:17:26] so- some of the data has to go into a court of law and undergo a lot of
[1:17:31] scrutiny. It's probably useful to have a model that uh human effort review and intervention is used for tuning that
[1:17:38] model. Uh applied by experienced users. And of course, we are attempting to make Metric as automated and uh quick as
[1:17:46] possible, so it it's really I think at that point right now, it's not a big uh user of time or computer
[1:17:53] resources. We run it on workstations uh by individuals. Uh Uh Justin Huntington uh runs it on a a
[1:18:01] cloud. cloud. You just saw the Eflux uh on the Google cloud, so there there's probably less reason to
[1:18:08] try to overly simplify models uh these days. Um but again, uh the the proof is in the pudding, so uh
[1:18:17] um if if simplified models uh perform well, then uh they ought to be used. Another question or can be used and
[1:18:26] maybe uh Wim Bastiaanssen, I want to recognize him, uh of UNESCO, the global water accounting entity. Uh Wim is tasked with trying to
[1:18:38] estimate where water is flowing all over the globe, especially for irrigated food production. And Wim is attempting to
[1:18:47] create an ensemble of ET from a wide range of ET methods. So, rather than use just one method, he's using a number of
[1:18:57] those. There's a nice presentation by Wim at the World Bank and NASA websites from the ET workshop that was held in
[1:19:05] Washington, D.C. about a year ago. Uh, that you're you're welcome to find on the web. Another question, would it be possible
[1:19:14] to calculate ET with Sentinel-2 imagery? It will cover the same area every 5 days once both satellites are orbiting.
[1:19:23] Uh, the answer is yes and no. Let me start with the no part. The no part is that one cannot use energy
[1:19:31] balance with Sentinel because Sentinel-2 does not have a thermal imager, unfortunately. unfortunately. Uh, we're quite dismayed and
[1:19:40] disappointed uh that that the European community was unable to include a thermal imager. Of course, the planning for Sentinel-2 began 15, 10
[1:19:51] years ago. So, I think in hindsight they wish that it did have a thermal imager. Um, there are some future opportunities
[1:19:58] to put a thermal free flyer in orbit with Sentinel-2. We hope that that will happen. happen. Uh, but at this point in time, it's not
[1:20:06] possible to get energy balance based, thermal based ET from Sentinel-2. Uh, one can estimate ET using vegetation
[1:20:15] indices like NDVI from Sentinel-2, but of course, there's more uncertainty that way because it's unable to capture the
[1:20:22] impacts of water shortage uh, primarily or evaporation from bare soil. soil. Uh, one generally cannot capture that
[1:20:31] with short-wave data only. Good question. Another question, can the methodology be used on MODIS and other satellite
[1:20:43] sensors with similar bands to Landsat? I guess we mentioned that already and the and the answer again is yes,
[1:20:50] uh although the spatial resolution is uh much larger than what we would like to see for field-scale
[1:20:56] uh applications. Another question, uh how can we download the recorded video? I guess Brock and or Amita can speak to that uh later. Uh
[1:21:08] eFlux cover entire world? Yes, it does. Uh Uh we do recognize again we're in the beta mode. We haven't fully tested the
[1:21:18] automated calibration for all parts of the world. Uh one of the other limitations is that the land cover map
[1:21:25] is quite large on the order of about uh 5 to 800 square meters. Uh soils data is is not quite as good as
[1:21:34] it is in the United States and the gridded weather data sets may be a little bit less certain. So, those
[1:21:41] combined together probably increase the uncertainty of the estimates by eFlux in uh some of the other parts of the world.
[1:21:52] Uh another question is what is the advantage of METRIC over SEBAL? I do want to recognize again uh Dr. Wim
[1:22:00] Bastiaanssen, Bastiaanssen, uh the developer of SEBAL uh clear back in the late 1990s. Uh Uh METRIC originated from SEBAL. Uh Dr.
[1:22:12] Bastiaanssen was kind enough to share his technology and uh basic algorithms for SEBAL um um that gave the basis for METRIC and then
[1:22:22] we have evolved METRIC uh uh kind of separate from SEBAL for the last 15 years. So, it's quite different
[1:22:30] now, but the basic philosophy is very similar. similar. Uh, Uh, one primary part of uh, SEBAL that we
[1:22:39] uh, still use is that DT versus temperature function that uh, we covered. Uh, that's directly from SEBAL.
[1:22:47] That's some of the genius, I think, of SEBAL and of uh, Bastiaanssen uh, to develop that. That's kind of what
[1:22:55] makes METRIC and SEBAL what we call engineering models. Uh, it allows the use of inverse calibration. Uh,
[1:23:03] Uh, one of the differences between METRIC and SEBAL is is in the way of calibration. In METRIC, we put a lot of
[1:23:11] emphasis on calibrating to the reference evapotranspiration evapotranspiration that we use to represent a near maximum evapotranspiration, where SEBAL, the
[1:23:20] classical SEBAL, has used temperature of an open water body uh, to establish what we call the cold
[1:23:27] pixel. pixel. Uh, some of the later versions, I understand, do have an advection correction correction uh, uh, for that water-based temperature to
[1:23:37] uh, perform better in some of the more arid areas where ET can exceed the uh, amount of net radiation due to
[1:23:44] advection. Okay, I'll I'll just keep going on with the questions until people get tired. Uh, Uh, we'll try to answer all of them. I think
[1:24:00] we're about halfway through or until Amita wants to cut us off. Another question, uh, is it possible to
[1:24:08] make multi-dimensional modeling of ET using multi-data? Uh, Uh, I'm not fully sure what's meant by the multi-dimensional modeling of ET.
[1:24:21] Uh, Uh, there there have been some good efforts on on uh coupling the ET that we get from uh
[1:24:30] energy balance uh for example for metric or SEBAL or SEVAB uh uh which which again is a snapshot of ET
[1:24:40] over every 8 days or every 16 days or whenever we have a clear image. And then use a
[1:24:48] a one-dimensional or two-dimensional uh uh uh daily or hourly process model for evapotranspiration in between the dates
[1:24:57] of the satellite image. Uh for example a a multi-layer Shuttleworth-Wallace type of model uh we've had a a PhD from the
[1:25:06] University of Idaho uh Ramesh Dhungel uh develop a a resistance-based uh two-source model for that uh actually it's a three-source
[1:25:17] model. model. Uh Uh So I I don't know if that's what you mean by multi-dimensional, but that I
[1:25:23] think that's in the future where we use the snapshots of ET to uh inform and calibrate our daily or hourly process
[1:25:31] models and then use those to simulate the ET process in at least two dimensions uh in between the images.
[1:25:40] Uh Dr. Jan Hendrickx of New Mexico Tech uses a similar technique to calibrate some soil water balance hydrologic
[1:25:49] models. He uses the ET for metric uh every time he has a satellite image and to parameterize uh soil water and uh
[1:26:00] soil parameters uh to best reproduce what he sees from the Landsat satellite. And then he's able to use this process
[1:26:09] model even in years where he does not have satellite data to make very good informed estimates of uh ET and runoff
[1:26:17] and groundwater recharge. Another question, uh can we download the land cover data in eFlux? Uh Uh Actually, right now we do not make that
[1:26:33] provision, but if uh that is something that you would like to have access to, we can probably put those types of uh
[1:26:41] download options. Uh we're trying to keep the interface as simple as possible so that anyone, including a college freshman or
[1:26:52] a sixth grader in southern New Jersey can uh operate eFlux. So, we want to keep it fairly
[1:26:59] straightforward and simple. Uh in the level two that we uh gave the URL for, there is provision to download
[1:27:07] more of the products. I I don't recall if land cover is one of those. Can we get the code to calculate ET from
[1:27:13] eFlux? eFlux? Uh the answer to that is no. We are wanting to protect the eFlux code for
[1:27:20] two reasons. One, we want to protect the integrity of the code so that it it doesn't start to morph into a large
[1:27:27] number of modifications uh by various users. Um Um and uh secondly, we are we continue to be in the development stage, so we we it
[1:27:39] it'll be a while before we get to that point. With that said, however, there will be an API created. API means
[1:27:48] application programming interface uh uh within the Earth Engine system so that any Earth Engine user in the future will
[1:28:00] be able to access the eFlux algorithms directly in the form of subroutines. For example, one for net radiation, one for
[1:28:10] albedo, one for surface temperature, one for sensible heat flux. And that way any other application, for example, a groundwater model or water
[1:28:19] balance model that needs an ET layer can access the eFlux API as callable subroutines. You still won't be able to view the code
[1:28:33] directly, but you will be able to view the functions as they are available. So, that's coming. It probably will be
[1:28:41] available in another two to four months. Good question. Another question, please explain biases being canceled. Uh Uh Okay, on the right-hand side of the
[1:28:56] calibration and metric and SEBAL. Uh just very briefly again, we we recognize that we have probably systematic biases in surface
[1:29:05] temperature temperature from Landsat due to our means of atmospheric atmospheric estimation of emissivity. Uh we definitely have uncertainty in actual
[1:29:16] air temperature above each field. We know that that changes with surface temperature, the air temperature does. Uh we have biases in estimation of
[1:29:26] aerodynamic resistance. So, all of those biases are factored into our estimate of sensible heat flux. But because we during calibration, we
[1:29:37] we think we know or we say we know the evapotranspiration value at two extreme conditions. One is a very
[1:29:45] well-watered, high vegetation condition. We call that our cold pixel or the wet pixel. pixel. And then we go to a a bare soil
[1:29:55] condition that we is mostly dry and we say that we have a pretty good estimate of what the background ET is from that
[1:30:04] bare soil. We run a daily soil water process model, so if there's been some recent precipitation events and there's some
[1:30:13] residual evaporation for the entire image or portions of the image, we will assign a non-zero value for evaporation even from the hottest
[1:30:25] pixels in the image. And that gives us the two end points where we have confidence in the assigned values
[1:30:33] of ET. We invert the energy balance to solve for the H, the sensible heat flux that explains
[1:30:41] those two ET conditions, uh determine our DT function, our temperature gradient function versus temperature. temperature. That ingests all of the biases that went
[1:30:54] into our calibration. But then when we turn around and we apply this now at all 30 million pixels
[1:31:02] in that Landsat image, uh that bias comes back out again because we are using biased net radiation G and H, and they have
[1:31:11] compensating biases. So our end result, which is ET, uh hopefully has much less bias. Uh I see a message from uh Brock at NASA
[1:31:27] that says they are working on a way to have the presentations available for download. download. I guess you guys all saw that, too.
[1:31:35] Uh another question uh how to collaborate with the metric team to validate the model for irrigated crops in India
[1:31:47] with eddy covariance and uh large aperture scintillometry uh with ground measurements. Uh nice question. Uh we welcome collaboration.
[1:31:58] Uh please contact us. You can uh Google uh the internet for uh METRIC at the University of Idaho or METRIC at the
[1:32:07] University of Nebraska, get our contact information or uh perhaps we can type in an email address below for me.
[1:32:16] Um Um maybe I can do that right now. Feel free to contact us and uh we're very willing
[1:32:21] to collaborate. And of course we we hope that our collaborators have high-quality ground data that is uh you know, air checked,
[1:32:32] uh has a lot of QAQC done to it. Uh it's it's installed and operated by very experienced, thoughtful people, which
[1:32:42] I'm sure this person is. Uh but we look for that also because one can't do much with faulty data.
[1:32:49] Uh often times it causes more harm than it may uh be good. But not not to cast any doubt on your
[1:32:58] data. Uh it's just something that we like to to request. Uh another question, uh is it possible
[1:33:07] to do a training program on ET? Yes, as we mentioned, we give uh one or two of
[1:33:11] these per year. Um Um it's about a 4-day course. We we go through some of the physics and
[1:33:18] background of the energy balance process, get into the highs and whys and hows of the energy balance algorithms,
[1:33:26] and then uh actually go through the operating the code. It's a mixture of Erdas code and some ArcPy code to be run
[1:33:35] in ArcGIS and and uh also some of the algorithms are coded in Python GDAL. So, you can just contact us directly by
[1:33:45] email uh to uh we can keep you updated on the next planned uh training course. Another question, uh what are the
[1:33:55] differences with SEBS? Uh SEBS stands for the surface energy balance system um developed in the Netherlands uh
[1:34:05] mostly with Bob Su. Um Um at the University of Enschede and Wageningen. Wageningen. Um Um SEBS and METRIC are fairly different. I
[1:34:16] mean, they are common in that they are can both be applied with Landsat thermal data. The primary difference uh of
[1:34:23] course energy balance is energy balance, so uh I I'm guessing I've not looked inside SEBS for a long time, but I'm
[1:34:29] guessing that the net radiation estimation is similar. You use sensible heat flux, ground heat flux estimates. Uh the main difference is in the
[1:34:37] calibration where in METRIC we use two extreme evapotranspiration conditions that we apply either to the entire Landsat image, or I should point out in
[1:34:49] EFlux EFlux uh uh the level one we actually use a a grid for calibration. So, we break the image
[1:34:56] into about 100 sub areas, and each of those sub areas has a unique calibration applied to it just so that we can deal
[1:35:06] with mountain areas better, uh areas close to the ocean where we have colder temperature near the ocean,
[1:35:13] and then the surface temperature warms up as you go inland. Uh we like to treat that separately.
[1:35:19] But anyway, METRIC uh only has those two extreme conditions that we use. SEBS on the other hand develops a
[1:35:28] calibration specific to every pixel of the image. So, uh image with 30 million pixels has 30 million calibrations. Uh
[1:35:37] it uses a theoretical approach to do that. Uh uh kind of a blending layer up in the atmosphere for wind speed,
[1:35:44] temperature, and humidity. Um Um So, it's a very elegant approach. Uh I like the approach very much, but it does
[1:35:52] have some operational uncertainties dealing with estimation of that blending layer above the surface. Um, Um, and estimation of what the maximum
[1:36:05] minimum theoretical values of ETR associated with each pixel, and then how the corresponding temperature relates to those
[1:36:16] end points for each pixel. A comment that the EFlux site is amazing. amazing. Thank you very much. Appreciate those
[1:36:25] comments. We're glad it's working. We didn't know how it would work with a lot of usage all at one time. So, I guess
[1:36:32] it's been a good test. Any issues you have with the EFlux, feel free to again send us emails letting us
[1:36:40] know the problems you have. The calibrations look high or low. Sometimes Sometimes EFlux will time out. We only get so much
[1:36:51] access time to the cloud per run. And if we run out of the milliseconds being allocated, it may
[1:37:01] give you a time out message. But if you rerun it fairly quickly, Earth Engine does keep what is called a
[1:37:09] cache of recent products. And some of the intermediate products from EFlux might be cached by Google Earth Engine. So, the
[1:37:18] second time you run, it may run faster and make its way to the end because it's utilizing some of these pre-calculated
[1:37:26] products. So, you might try running it two or three four times for the same image same date before you give up uh,
[1:37:35] to to make it run. Um, otherwise, you may wait till the middle of the night if you're in the US
[1:37:42] where there's sometimes less uh, uh, less traffic. And and yes, probably we had a we're at a kind of a high traffic site now both
[1:37:52] on Earth Engine and then for our website, so many users. It probably should be better in a couple hours.
[1:38:00] Another question is drought assessment going to be done by ET models in a country like India? And definitely yes,
[1:38:08] that's one of the very important usages we think of ET maps is uh, for energy balance based assessment of
[1:38:17] actual ET. We can see the reduction in actual evaporation that's associated with drought either direct reduction in
[1:38:28] rainfall or reduction in available water supply from rivers and canal systems. Uh, it's a very nice way of documenting
[1:38:39] the actual damage caused by a drought and estimated reductions in food production associated. I can also be used for example in the
[1:38:50] state of California uh, ET maps can be used to assess the acceleration of groundwater depletion brought about by
[1:39:00] increased pumpage during drought years, increased usage of groundwater by more users, uh, in place of water supplies on the surface that are
[1:39:11] short. short. And it can be useful for projection of the impact long-term impact of water usage during droughts.
[1:39:23] Uh, another comment getting towards the end. I'm surprised by the Florida low availability result because it's actually a fairly sunny location
[1:39:32] climatologically and actually I think this the slogan for Florida is the Sunshine State, isn't it? So it's a little bit ironic, but what we
[1:39:43] find is that 11:00 approximately local time, which is when Landsat comes over, uh uh for some reason, there just seem to be a
[1:39:53] lot of small uh convective types of clouds clouds uh over Florida that annoyingly uh mask over the
[1:40:04] ground surface. Um it's it's just what we find. And uh I guess there is sunshine in between those clouds,
[1:40:13] and maybe there's more sunshine on the beaches of Florida, maybe closer to the ocean with more clouding inland. Uh I'm
[1:40:21] not sure the exact reason, but um we we definitely see a lot of clouds in Florida. Florida. So, that's why it it's in those cloudy
[1:40:30] areas both in the eastern United States or other parts of the world, uh in the tropics where we have a lot of
[1:40:37] clouds, those are the places where we will greatly benefit from a 2-day revisit or 4-day revisit of thermal
[1:40:45] imaging at the field scale. Um places like southern California where it's largely cloud-free, uh we can get
[1:40:54] by with two satellites fairly easily. But uh it's in those other places, and some of them are water short, we really
[1:41:01] need better information. Uh we would greatly greatly benefit both economically and uh information-wise information-wise and the ability to manage water much
[1:41:13] better and produce better food globally if we have a a shorter revisit time. Okay, I'll keep going. Looks like some
[1:41:29] people are getting some errors with the um um eFlux system. Uh maybe somebody is having a difficult time unzipping the
[1:41:40] ETRF file. Uh make sure that it's completely downloaded. It might take a while. It's uh couple hundred megabytes
[1:41:47] in size uh before you try to open it. Otherwise, Otherwise, try a few more times and uh feel free to
[1:41:54] email us. Oh, by the way, let me type my email in and I can give you I shades also.
[1:42:17] So, I just uh gave you the two uh email addresses. Uh another question, how do you see the
[1:42:38] accuracy of data over the region of the Congo Basin with uncertainty of cloud over the area? Uh I can imagine the Congo Basin of
[1:42:47] Africa is quite cloudy at times, uh especially during the wetter seasons. Um when we have a clear image, uh we we can
[1:43:00] produce accurate information, uh ET information. But, to get the the time integrated ET, for example, millimeters per month or millimeters of
[1:43:11] annual ET, which is uh very important for uh water management, uh that's going to to become uh more difficult and more uncertain
[1:43:22] if we have to wait, say, 2 months between Landsat imagery. Uh there can be a lot happen with vegetation in a
[1:43:29] 2-month period or with water supply that can impact the ET. So, we lose accuracy the longer we have to go between Landsat
[1:43:39] images. So, that that's one area where some of the ways to treat that would be to use some
[1:43:47] fusion techniques that Martha Anderson will talk about next week with viewers or Modis. But, again, we start to lose
[1:43:56] some of the spatial uh information that way. Uh but, it might be that parts of the Congo Basin, if you if you don't
[1:44:04] need full-scale information and you're looking more at regional uh scale ET, uh there's nothing wrong with using Modis and viewers for that
[1:44:13] where you do get more looks more often. There's a question that uh uh there's an impression that the webinar
[1:44:25] might cover how to estimate ET using Landsat data. Uh that that's the metric and eFlux process. Uh we've not gotten
[1:44:37] into the details of metric, how it works. That probably would take all day to to cover all the algorithms. But, uh
[1:44:46] there are some papers uh we can provide references to them or I think if you just Google
[1:44:52] um metric and University of Idaho or Nebraska, um there there may be some papers that will come up. I'll I will uh
[1:45:01] verify that. That will give all the details of the process. Okay, one more question. Uh how do you
[1:45:19] feel about using DisTrad to spatially sharpen LST using NDVI NDVI uh and calculate ET from sharpened LST.
[1:45:30] Yeah, that is something we do. Uh, we do not use the dis-trad algorithm. We have our own in-house
[1:45:36] algorithm where we, uh, uh, do use NDVI to distribute thermal the thermal pixel, uh, to the 30-m
[1:45:46] scale, scale, uh, using a relationship with NDVI. Uh, we depart from the dis-trad technique in that we use that hot and
[1:45:55] cold cold pixel from the calibration of metric to give us end points uh, on how cold and warm to allow
[1:46:05] uh, the distributed temperature at 30 m to get, and it it helps to constrain the process very well.
[1:46:19] Okay, it looks like we are at the end of the questions. We sure appreciate the questions and and the interest and
[1:46:27] uh, again, feel free to contact us uh, if you have any, uh, additional questions. Yeah, thank you very much for
[1:46:34] your time today, Rick. Uh, we really appreciate it. And, uh, yeah, we will close down the session for today.
[1:46:39] Um, so, if, uh, we didn't get a chance to get your questions, uh, Rick provided, uh, his email address if if you want to,
[1:46:47] uh, follow up on something. Um, but, uh, yeah, we'll close it out here today. Um, if you missed any of your part of the
[1:46:53] presentation, we will have it available to stream from the trainings webpage up by tomorrow. Um, so, with that, uh, have a great day,
[1:47:03] and we'll see you next week. Thanks, Rick.
