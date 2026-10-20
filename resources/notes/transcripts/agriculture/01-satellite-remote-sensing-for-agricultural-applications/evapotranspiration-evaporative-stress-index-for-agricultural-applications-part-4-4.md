# Evapotranspiration & Evaporative Stress Index for Agricultural Applications, Part 4/4

`https://www.youtube.com/watch?v=YUrQGwTryk4` · id 74 · 1:34:15 · module 8 — Satellite Remote Sensing for Agricultural Applications

[00:02] hello and welcome to part four of the rset webinar satellite remote sensing for agricultural applications wherever you are joining us for on we
[00:11] hope you're keeping safe and healthy my name is sean mccartney and i'm an earth scientist at nasa's goddard space
[00:17] flight center in part four of the webinar series we'll be focusing on evapotranspiration and evaporative stress index for
[00:25] agricultural applications in part one of the webinar series we provided an overview of satellite remote sensing for agriculture highlighting
[00:35] specific satellites and sensors and how to access these data products in part two of the webinar series we
[00:41] focused on soil moisture using nasa satellite observations and modeled products that provide critical information for drought monitoring
[00:50] agricultural monitoring and crop forecasting forecasting in part three of the webinar series we covered some of the main products and
[00:58] variables for cropland and rangeland monitoring and showcased operational agricultural monitoring and early warning systems for the final part of this webinar
[01:08] series we are delighted to have as a guest presenter dr christopher hayne a research scientist at nasa's marshall
[01:15] space flight center dr hayne's research interests include thermal infrared remote sensing with applications in surface energy balance
[01:24] modeling soil moisture retrieval hydrologic data assimilation and drought monitoring monitoring he's played a significant role in the
[01:32] development of the atmosphere land exchange inverse model or alexi is currently used to monitor continental evapotranspiration evapotranspiration soil moisture and drought
[01:45] today he'll be discussing the importance of evapotranspiration for agricultural applications applications satellite methods for estimating evapotranspiration evapotranspiration case studies using the alexey model
[01:58] an overview of the evaporative stress index as well as highlight an exciting new evapotranspiration monitoring tool he and his colleagues created in google
[02:07] earth engine as with previous sessions each webinar in the series will have a one-hour presentation followed by a 30-minute
[02:20] question and answer session as a reminder both homework assignments are due by may 12th if you are interested in a certificate
[02:28] of completion you must attend all the webinars and complete all the homework assignments assignments you will receive a certificate
[02:36] approximately two months after the completion of the course from martinez martin i will now turn the presentation over to
[02:45] dr hayne to present on evapotranspiration for agricultural applications okay okay uh thanks sean for the introduction um
[03:01] as sean said i'm dr christopher hayne i am a research scientist at the marshall space flight center in huntsville
[03:07] alabama and i've been working on essentially land surface remote sensing with a focus on evapotranspiration drought drought and working with a lot of agricultural
[03:18] applications for you know most of my career career and today i'll kind of give you a presentation um
[03:25] on some of the applications that uh the community has developed for monitoring evapotranspiration and then you know
[03:30] essentially some derivative products from from these models to look at agricultural applications related to evapotranspiration and drought
[03:40] so go ahead and get started you know for the most part what is evapotranspiration um you know it's an
[03:48] important part of the water cycle as you see here in the schematic you know we have everything from precipitation
[03:54] to how water flows back into the ground is then available to vegetation so when we talk about evapotranspiration we're
[04:02] really worried about three main components of the water cycle and that's evaporation from the soil surface so a
[04:10] bare soil surface after precipitation uh there's you know a certain amount of water remains in the soil and
[04:18] near the near the land surface atmosphere interface that water is available for evaporation the other main one and one that's probably the
[04:28] most important when we talk about agricultural applications is transpiration from vegetation so this is in the process of
[04:37] plants essentially taking in carbon dioxide and releasing water back into the atmosphere uh uh transpiration occurs because
[04:47] plants have you know large rooting structures they have a lot of availability of water within both the
[04:53] surface layer and in their root zone and transpiration really does make up a dominant part of uh you know essentially
[05:00] the exchange of water from the land surface back to the atmosphere and then there's one other one other component
[05:09] essentially this happens in very dense forest uh you know in parts of the equatorial rainforest brazil equatorial
[05:17] africa where you have very dense canopy structures and actually you get precipitation that is essentially intercepted by that canopy there's water
[05:27] on the leaves water within the canopy structure and that can then also be evaporated back into into the atmosphere
[05:34] so these three components really come up with the summation of what we call evapotranspiration um like i said because we're kind of
[05:44] focusing on an agricultural application here uh i really wanted to talk about you know what kind of you know this
[05:53] interface between the land surface and the atmosphere so what controls transpiration from plants um and you know the amount of water that
[06:01] plants can transpire you know it can greatly change over geographical areas and over time season season and there's a number of factors that can
[06:10] determine essentially how effective transpiration can occur from vegetation the first one is temperature transpiration rates go up as temperature
[06:19] goes up um especially during the growing season when the air is warmer so essentially during the cold season
[06:27] when you have active vegetation the plant does not you know release as much water as when you have
[06:33] essentially in the warm season when you have you know more hot conditions and and this kind of goes with the
[06:41] atmospheric moisture part of the second control is you know warmer temperatures can hold more moisture but also
[06:49] the amount of humidity or water vapor in the air also controls transpiration transpiration as the air becomes more moist the
[07:00] transpiration rates can fall this is because there's not as much of a gradient between the leaf and the
[07:07] atmosphere um and so your your ability to the ability for the plant to actually release water is is lowered as the
[07:15] humidity rises and this mainly means that it's easier to evaporate water into drier air than more saturated air
[07:23] there is an additional con additional consideration here that you know when plants become stressed when they have less soil moisture soil
[07:33] available water in their rooting system plants can also tend to regulate their own water use so sometimes when plants
[07:41] become stressed and the humidity is very low low plants might pull back their transpiration rates to conserve water so
[07:49] the moisture component is kind of a more complicated control but generally you know in a well-watered plant it's easier for the plant to
[07:56] transpire into drier air than more humid air air the third one that we worry about is wind
[08:04] wind increased movement of air around the plant plant results in a higher transpiration rate and this essentially helps because as
[08:10] turbulence can mix drier air near the plant surface kind of tying back into that prior control uh for it's easier to
[08:17] evaporate into drier air than the more saturated air uh so when wind increases it a more effect it allows the plant to
[08:25] be more effective and transpiring and then the one that i kind of was also talking about is soil moisture you know
[08:32] when moisture becomes lacking uh plants will begin to conserve water in a way of trying to you know
[08:39] essentially not you know go into a dormant state or to uh you know suffer from you know
[08:45] essentially the the ability for the plant to you know essentially stay alive um and so it'll transpire less water um you
[08:54] know so these four controls they're all kind of tied together in some sense and um you know no single one
[09:02] um um really dominates the structure it's really this how they all interact together is really you know how
[09:09] we we understand and understand how the plant interacts with the atmosphere and with that exchange of water
[09:17] so so now that we kind of understand you know what is et we'll call it et going forward with apple transpiration
[09:26] um um why do we need to measure it for agricultural applications um this is probably not a complete list but you
[09:34] know this is i think you know maybe if you had to pick five ways that you know us scientists in the
[09:40] community work with stakeholders in the agricultural sector to use remote sensing data to measure e.t on the first one irrigation management
[09:49] essentially in areas where crops are irrigated and not rain fed um our ability to measure et allows us to
[09:57] give better information to farmers on when and how much to irrigate the second one monitoring drought and
[10:03] crop stress uh this kind of goes a bit with irrigation management you know we want to make sure
[10:10] that we're able to measure et so that we can find out when a plant may be undergoing stress
[10:17] and in that sense if it's an irrigated plant you know you can work with the farmer to to do
[10:23] a better management program uh if it is rain fed then you can start to hopefully have some mitigating factors for how to
[10:29] mitigate some of the impacts of drought and crop stress or just to give an early warning of you know downstream effects
[10:36] when it comes to uh you know end-of-year yield or impacts on you know a decreased amount of
[10:43] a food that could be you know essentially harvested or grown from that crop crop and that's also goes into this third
[10:49] point yield prediction um um you know through the growing season we you know a lot of scientists work with economists
[10:57] and others within the you know that sector to try to understand what the final yields of certain crops
[11:04] will be globally and this is important for a global market it's important for areas that are food insecure so our ability to measure
[11:11] et helps us when it comes to trying to predict what end of season yields will be be the fourth one water use accounting
[11:20] this is an interesting one because it's once again in areas where we may not have plentiful water but yet we need a
[11:27] lot of water for irrigation practices it's important for us to understand how much water certain crops use and so this
[11:35] water use accounting is and we'll have an example later in the presentation of how this works but it's really important
[11:40] to understand how certain crops use water and how much they do so that essentially strategies can be made to
[11:48] figure out what is the most effective use of the water in in some of these areas like california where we have
[11:54] essentially water security issues and not enough water to really irrigate as much as we would like to
[12:00] and then crop water productivity you know essentially this somewhat the same kind of you know uh idea with
[12:08] water use accounting is you know how much much you know how much of a crop can you grow
[12:14] per unit of water and you know and making more educated decisions on you know what crops to plant given areas
[12:23] where there is a limited amount of water so so i wanted to go through the next couple
[12:29] slides talking about how we measure et in a couple different ways um first off you know we actually have
[12:38] ground-based methods for measuring evapotranspiration um and the two main ones are essentially eddy covariance these are instruments that are
[12:49] essentially put on towers over a field over an area where you would like to understand kind of the
[12:55] dynamics of apple transpiration and essentially it's looking at really really fast measurements of fluctuations of vertical wind speed
[13:05] and essentially water vapor and by looking at those very very fast changes and fluctuations we're able to
[13:12] estimate how much water is being evaporated or transpired from the surface surface as you might imagine these systems are
[13:20] complicated they're it takes a very specialized person to understand how to actually actually place these um to get the most accurate measurements
[13:30] um and it's not like going out and measuring a temperature with a thermometer there's still uncertainty in
[13:35] air with even these observational systems so that's really complicated for measuring et is that even our quote-unquote ground-based observation
[13:43] systems have uncertainty we don't necessarily necessarily measure it as perfectly as we can measure other things but these are kind of our ability to
[13:52] have some ground truth to these uh measurements and the the second measurement is a called a lysimeter
[14:01] lysimeter it's another relatively complicated observation system where you're actually building building an apparatus within the soil surface
[14:08] that's able to weigh the soil column continuously continuously and essentially back out how much water has been evaporated by changes in the
[14:16] weight of that soil column um you know i think the other real take-home message is both of these methods are pretty cost
[14:24] prohibitive they're very expensive to to build they're very expensive to maintain maintain and frankly that's why we only have
[14:32] several hundred of them to measure et globally so you know having direct measurements of et from these observational systems is
[14:41] not something that we could do everywhere everywhere it really serves as the ground truth and the validation for some of the methods
[14:47] we'll talk about in the next few slides of how we measure et from both a modeling standpoint and a remote sensing
[14:52] standpoint standpoint so models you know there's a couple of you know ways that we can essentially you know
[15:01] much like we use models to predict the weather we can use models to predict energy water and momentum fluxes between
[15:07] the land surface and the atmosphere um essentially we do you know we derive and build computational models to use these
[15:15] physics to understand or to model what we have as an understanding of that interface between the land surface and
[15:22] the atmosphere um so with land data assimilation systems and land surface models that are able to predict these energy and water
[15:31] fluxes um we can strain them with essentially observed atmospheric conditions you know we know the temperature we you know we
[15:38] can measure the wind we can measure the humidity um and then essentially we have model models with it or physics within
[15:45] those models to to estimate estimate rates of evapotranspiration changes in soil moisture so everything that we understand about
[15:53] the system um we put into these models unfortunately unfortunately we don't always have this the most accurate observations to force these
[16:02] models and a lot of the physics are very complicated complicated and so we have to really parameterize
[16:08] which is essentially a way of making some broader assumptions about how some of these physics work when we don't have
[16:14] the observations to truly um model them to the most you know accurate sense um and so you know from an advantage
[16:24] standpoint you know these models are nice because they can be run anywhere where you have the forcing data um you know even if that
[16:31] forcing data is coarse or maybe not as accurate you know take for example africa we don't have a lot of
[16:37] ground-based meteorological information compared as to you know an observational network over the united states um so that introduces some uncertainty
[16:46] um um another advantage is that you know it provides complete temporal resolution and you know information of et over the day you can
[16:56] run the model and output what the model is estimating et at any time of the day so it gives you a full complete temporal
[17:03] picture and you're able to run these at varying spatial resolutions um you know some models run all the way down to 500
[17:09] meters or one kilometer some global ones are more on the five to 25 kilometer so you have a lot of
[17:15] flexibility in what you want to model um um disadvantages i mean with anything with etu every method will have its
[17:25] advantages and disadvantages and it's not so much that we have a clear-cut way to model or you know either from a model or a
[17:34] remote sensing standpoint to estimate et um we really have to kind of work within the constraints of each method to give
[17:41] us a more complete picture so the disadvantages of models you know like i said we have errors in atmospheric
[17:46] forcing forcing the main driver to land surface models is precipitation if your precipitation is not right you're already starting off
[17:55] with some level of uncertainty in what the soil moisture will be and then the downstream effects on et
[18:01] accuracy uh if your precipitation is poor your soil moisture prediction will be poor that will affect your your your
[18:08] estimation of evapotranspiration so really the air is in the atmospheric forcing forcing can cause a lot of issues with producing
[18:16] essentially less certain estimates of et and also we can experience model drift and this happens where essentially these errors accumulate
[18:26] errors in the forcing or the model physics can accumulate and we can get to a point where
[18:32] a model becomes biased it becomes too wet or too dry and and you know so all these errors and all this
[18:40] uncertainty essentially you know kind of downstream feeds the additional uncertainties especially in this case the measurement we're trying
[18:51] to you know model is et so you know you have to kind of take all this into effect and uh try to
[18:59] understand uh what your best method for estimation is so that gets us into you know really what the core of some of
[19:07] what uh our work is focused on which is using satellites to estimate evapotranspiration evapotranspiration there's a number of different methods to
[19:16] do this um i start off here with one of the more simple methods but it's a very
[19:22] strong method when you're looking at you know trying to estimate et for agricultural applications especially when you know a lot about the
[19:29] crop that you're trying to measure et um so in a crop coefficient or eto which is a potential or a reference et
[19:39] um um i'll get to what what what reference et means in a minute so essentially we're trying to calculate
[19:45] evapotranspiration by computing a measure of what the reference et is reference et is essentially the amount of et that would occur under
[19:52] well-watered conditions um and we can estimate that from an agricultural weather station because it's a function of things like solar
[20:00] radiation temperature moisture all those atmospheric controls that we talked about earlier in the presentation and then applying a crop coefficient so
[20:08] essentially a crop coefficient is very specific to a given crop and it tells you how much given the
[20:14] reference et you would expect that plant to transpire that being said those crop coefficients are it's really good when a farmer is
[20:27] able to understand what crop is in his field or her field and to apply a crop proficient that is relevant and so this
[20:35] requires a lot of human interaction to try to you know do this in a way that you know
[20:42] is able to provide an accurate measure and so one of the established methods is a nasa program that's run out of nasa
[20:48] ames ames the nasa satellite irrigation management support system and this uses a crop coefficient method over most of the western united states
[20:57] especially in california where we have good good remote sensing information and good crop data to uh come up with an uh an
[21:05] automated way to estimate uh crop coefficient based on ndvi and estimates of crop height and estimates of what crops are grown in
[21:14] what field um um that being said the you know the main limitation of this method and why it's a
[21:19] good agricultural method for irrigated agriculture but maybe not so good in rain agriculture is that there is less
[21:26] sensitivity to you know changes in et related to deficit irrigation or changes in stress it's really good at estimating evapotranspiration
[21:38] when we have a good understanding that the plant is well watered um and as we go to the next slide um this
[21:46] is really where a lot of the the next method uh being focused on energy balance methods um
[21:54] um or maybe more broadly applied to different types of agricultural applications and actually monitoring et over you know lots of different
[22:02] ecosystems forests grassland wetlands wetlands and so the real theory behind a surface energy balance method is we know how
[22:12] much energy is coming at the surface from short wave and long wave radiation we can measure that
[22:18] with meteorological data and satellite data data and the amount of energy available at the surface is balanced by fluxes from
[22:25] surface heating and the exchange of water vapor so the exchange of water vapor being e.t and so we know given all the energy that
[22:32] comes to the surface how it's partitioned between heating the surface and then energy that's used to evaporate
[22:38] water from the surface really energy balanced models can be divided into two categories one a single source energy balance model
[22:48] this is where the model takes the vegetation and soil and analyzes it in a combined energy budget um these were essentially the
[22:57] first energy balance models um kind of conceived you know a number of decades ago um one of the disadvantages is that you
[23:06] know the the the the exchange of you know heat and moisture from the vegetation and soil are handled very differently so when you
[23:14] combine them into one energy budget it requires a lot of assumptions and kind of corrections that make single source energy balance model
[23:23] sometimes hard to apply in an automated sense without this calibration calibration um to kind of address some of those
[23:31] issues issues a number of researchers had you know essentially developed two source energy balance models which handle the
[23:37] vegetation and soil energy budgets separately separately um and this gets away from having to do that calibration or that correction of
[23:46] considering the vegetation in the soil is one component by allowing the vegetation and soil which can then be categorized given its actual
[23:54] characteristics and in a two-source energy balance model uh has been shown to you know lead to more accurate
[24:02] partitioning between the energy fluxes between vegetation and then bare soil so um i won't go into many of these um
[24:12] but i left them here for um just kind of an example of some of the methods that have been developed over
[24:18] the last number of decades um and then the relevant citation that anybody can go and kind of read up more
[24:24] on these but you know these are kind of you know not like i said not a full list
[24:30] of you know energy balance methods but really represent some of the the foundational development of these types
[24:37] of methods and you know most of these methods have been continually developed and you know you'll see as we go into the
[24:43] presentation where some of them will pop up my background has really been with the atmosphere land exchange inverse
[24:49] alexi and dyslexia model which is a two-source energy balance model the alexi component essentially is the the global original version that runs on
[24:59] moderate resolution and then dyslexia is the the essentially the the high resolution field scale estimation tool that uses high resolution uh
[25:11] remote sensing information from sensors such as landsat and sentinel 2. and we'll talk some more about that as
[25:17] we keep going so so like i said most of the rest of the presentation will focus on alexi and some of the
[25:25] applications that we have developed for agricultural and other applications both in measuring evapotranspiration and looking at drought and vegetation stress
[25:36] but like i said it you know i think the main take-home message is that all of these even the energy
[25:43] balance models all have their um um advantages and disadvantages that have been shown to be be you know some models perform well in
[25:52] some you know some regimes and some perform better in other regimes and the real take-home message you know the et
[25:58] community especially from a remote sensing standpoint is rather collaborative and you'll see that as we get to the end of this
[26:04] presentation and some of the future work that we're doing is that really the community is moving towards looking at
[26:09] estimation of evapotranspiration from an ensemble standpoint of understanding when when you know we that we get more certain
[26:17] estimations of et if we take an ensemble of methods rather than relying on just one method that may do well in one
[26:24] regime but not do well in another regime and what we're finding is when we are able to understand the advantages and
[26:30] disadvantages of each of these methods providing an ensemble with both provides us a better more accurate estimation and then also a level of
[26:40] uncertainty um which is something we'll always deal with with measuring evapotranspiration is you know trying to minimize the
[26:47] amount of uncertainty but understanding that you know even our observational systems are not a direct measurement and neither are our
[26:54] remote sensing or modeling methods so so um this is a little bit of a maybe difficult converse you know a
[27:02] difficult slide to look at but we'll try to walk you through you know some of the the physics of you know some of this at
[27:08] least alexi in an energy balance sense so what you see on the left is essentially the representation of a
[27:13] two-source model you have essentially resistances that explain the exchange of heat and water or yeah what heat and water from the the
[27:23] bare soil surface and then the exchange of water and heat from the vegetation surface and then those are essentially
[27:31] coupled with essentially the atmosphere above them and then the exchange between those two those two components in the
[27:37] atmosphere atmosphere um that blending height you see there that's kind of think of it as the you
[27:43] know an interface between the atmosphere and the land surface so really to estimate these fluxes correctly you need to know the
[27:52] temperature at that blending height unfortunately you know we don't have you know a way to directly measure that
[28:00] uh that height um you know we have models but you know the model is not consistent with what you're seeing with
[28:08] the remote sensing data those will not be be they'll they'll be out of you know they won't be consistent so it can lead to
[28:14] large errors in what we see so the main the main real additional development for alexi from you know its original two source
[28:23] model implementation was to couple the two source energy balance model with a boundary layer model above it
[28:31] so that we can actually model that temperature of at the blending height based on what we were seeing from the changes in
[28:39] land surface temperature so land surface temperature we measure that from satellite and alexi is really driven and
[28:45] most of these energy balance models are driven by that land surface temperature alexa uses a change in land surface
[28:53] temperature in the mid-morning that's been shown to be coupled with that partitioning between heating and evaporation evaporation um
[29:01] um you know because evaporation is a cooling process you know a satellite pixel which is evaporating at a high rate will heat up
[29:10] slower than one that is drier and not evaporating at a higher rate so that's the main core of the physics of the
[29:16] model is you know using this change in land surface temperature to understand how much of that energy is being
[29:22] converted into evaporating water from the land surface back into the atmosphere atmosphere and so this this coupling of the the
[29:30] boundary layer model allows us to keep these two systems in balance um and gets us away from having to measure
[29:39] that temperature at the blending height and that's really you know one of the main additions of what
[29:45] essentially has become this model that we've been developed in the 90s and now still used today so
[29:57] so one more way of kind of looking at this is is you know what you see here is on the
[30:05] left is a water balance approach so think of this as how when we were talking about land service models and
[30:09] land data assimilation systems these are all the physics we had to try to parameterize and mainly driving this was
[30:16] the precipitation and understanding how all of these systems interact to be able to estimate transpiration and evaporation
[30:28] for an energy balanced approach essentially what we're doing is like i said we're giving the known radiative
[30:34] inputs and we can calculate how much water has to be lost or evaporated back into the atmosphere to keep the soil and
[30:40] vegetation at the observed temperature rates so there's two different methods but you know the one of the advantages
[30:46] that we're measuring evapotranspiration with these two methods yet they're they're being driven by you know essentially observations that are not not not
[30:57] do not have correlated errors so when we have both of these methods giving us you know know consistent estimates of some of these
[31:05] energy fluxes it gives us a little bit more certainty that um we're getting so that's why you know
[31:11] when we talk about having an ensemble approach to estimating evapotranspiration that's really what we're trying to do is have different
[31:18] methods of trying to get at the same observation and when those agree it gives us more certainty that we're
[31:25] measuring them accurately accurately real quick slide this kind of shows the real power of this multi-sensor multi-scale et mapping system that we
[31:34] have with the lexi and dyslexia like i said mainly driven by land surface temperature we have we measure land surface
[31:42] temperature at varying spatial and temporal resolutions we have geostationary sensors that measure measure landscape risk temperature over most of
[31:53] the globe in the more moderate resolution two to four kilometers we have polar orbiting sensors such as
[32:00] modis and veers that can measure twice daily land surface temperature uh at the 375 meter to two kilometer
[32:08] range and then we have much higher resolution information from sensors like landsat that give us you know
[32:14] essentially essentially once every 8 or 16 day measurements of land surface temperature at the field scale so being able to understand
[32:24] a modeling system that's able to consistently balance energy inputs across all these scales really shows the power of our lexi modeling system
[32:35] one of the issues with landsat is that we only get it you know once every eight or 16 days and we we need those
[32:42] retrievals without clouds so you know sometimes we have areas where we can go a number of weeks without a
[32:48] clear landsat overpass and sometimes the change in et is occurring on time scales that happens in between landsat
[32:55] overpasses where you may get a rainfall event and you know you may not see the impact on
[33:01] the evapotranspiration until the next landsat overpass so what our team has really focused on is finding ways to
[33:06] integrate moderate resolution into our modeling system and so what you see here on the on the on day 328 and day 336 we
[33:14] had two landsat overpasses and then deriving information between relationships between modis and landsat we were able to fill in the 30 meter et
[33:26] based on the modis overpass on those other days so giving us a full daily estimation of field scale
[33:34] evapotranspiration evapotranspiration and as we look here this is kind of an example of what happens um so this is a
[33:42] a a time series of evapotranspiration over a corn field in iowa and what you see here on this top chart is that the the red
[33:51] the red squares were landsat overpass days days um um and without this kind of data fusion of
[33:58] fusing some of the moderate resolution information as you saw there was a number of rain events in between those
[34:03] two landsat overpass days and that red dotted line is essentially what the et would have been if we had
[34:09] just not used the modus information in between the landsat over past days and then that dark red line was diffusion
[34:16] um and that the blue dots are essentially the observations so you see the data fusion really was able to
[34:22] capture these rain events in between landsat overpass stays and the real take-home message on the bottom plot is
[34:28] with the dark with the solid red and the solid blue line our our data fusion method matched
[34:35] observations much closer than if we had just only used landsat so it really shows the power of this integration of
[34:41] moderate resolution lst or land surface temperature into the modeling system to get at some of these changes in
[34:47] evapotranspiration in between landsat over past days um another real interesting um application is you know starting to then integrate even higher
[35:00] resolution land surface temperatures from we can do this from unmanned aerial vehicles aircraft where we can really
[35:10] start to get at intra-field et variability so this is an example of e.t over a grape field in california
[35:20] what you see here on the left is essentially the yield and as you see over the you know over the field there
[35:25] was a large variability in an actual yield yield some areas had much higher yield than other areas
[35:33] and we were able to start to see that with both the landsat etf 30 meters and this aircraft that you know water use
[35:39] can very large can significantly vary over over a field so this really is the power of getting
[35:48] this type of information into the hands of agricultural stakeholders because they can make decisions on you know
[35:56] why certain parts of the field may be stressed um you know a lot of times this has to do
[36:01] with you know the dynamics of soil drainage uh so it really allows them to understand water use within a field not
[36:09] just looking at something that might give them one picture of like their field from a lower resolution really allows them to
[36:17] understand what you know essentially what they ended up getting and yielding at the end of their season and essentially the water use
[36:24] dynamics during the season within that field i'm going to walk kind of through a case study um
[36:33] and this is essentially you know we've been working a number of years with you know e and j gallo which is a large wine
[36:38] producer in the central valley in california california and they have really shown a lot of interest in trying to integrate remote
[36:45] sensing information into into essentially their management practices within their within their vineyards so we've been working on this grapex
[36:55] project for a number of years measuring measuring uh you know essentially field scale vapor transpiration and a number of
[37:01] their research fields um and two of the sites here are near lodi california uh we've been measuring et for them over
[37:11] this region for you know backs from 2013 the present and we're actually trying to do this in real time so they can
[37:16] actually make decisions on how to irrigate and manage their their vineyards um um this is another example of just kind of
[37:25] like the year-to-year variability in these two fields um and essentially a validation we you know we have eddie covariance flux towers in
[37:34] each of these fields to kind of validate some of the methods that we're developing developing and as you see here on the top you see
[37:41] kind of the change in in water use over the over the three years here 2014 to 2016. and then the time series of both
[37:48] the modeled and the measured and for the most part you know we underestimate a little bit sometimes
[37:55] in very high evaporative demand sometimes you know these scenarios where you get a lot of dry hot air
[38:03] this particular field being in in the hot portion of the central valley in california california it can be very hot and
[38:11] you know measuring some of the measuring e.t under those conditions sometimes is the most complicated and difficult but
[38:17] for the most part we've shown good validation of the method for for over vineyards another example here uh
[38:28] this is another thing that's focused on the san joaquin valley in california as i mentioned earlier water accounting
[38:34] is another really important tool tool we're really trying to understand in this in this in this river basin where
[38:44] the water is being used uh what you see here on in on the right uh for 2015 and 2016 is the usda crop
[38:51] data layer um that tells us essentially in every field what kind of crop was being grown um you see it in the legend that we have
[39:00] everything from corn to alfalfa to tomatoes to vineyards to almonds to you know fields that have been fallowed or not being used that
[39:08] season season and then an estimate of our alexei evapotranspiration for a 10-day period during the peak of the growing season
[39:16] does this show you that certain crops use a lot more water than other crops and that's really where
[39:22] water accounting comes into play of trying to understand the dynamics of how much water is being used and for what
[39:30] um so exactly this kind is the take-home message so because we were able to measure evapotranspiration at high resolutions
[39:38] over this over this area and then we had high resolution information about what was being grown in each field we were
[39:43] able to actually break out water use per unit area by certain crops um um you know so some of the bigger water
[39:53] users almonds rice walnuts olives and then you have some of the you know lower water use crops like
[40:01] tomatoes vineyards pistachios pistachios so it really gets to the point where understanding where every unit of water
[40:10] goes and to you know how effective a certain crop uses a unit of water and then we can do something like this
[40:19] where we actually can use over the season season understand when crops use the most water um i think this is a
[40:27] an interesting thing you know you get this this this uh kind of peak in the in the rice crop
[40:32] where it's using a lot more water than other crops um but ultimately you know you get a
[40:38] sense of how much water is being used to produce a certain amount of uh a certain amount
[40:43] of food and so this is very important for for areas that are trying to do a better job of managing
[40:48] you know essentially a finite amount of water like in an area where california where where agriculture was a very important
[40:55] economic sector but you know there's only so much water and no you know limits on pumping water from the ground
[41:03] and so it's very important to have methods to understand how water is being used used so so one other thing you know this kind of
[41:15] is is something that's been an important integration of a new observation into our modeling system so you know
[41:23] our our method really does rely on you know the thermal infrared wavelengths to measure land surface temperature so these these
[41:31] only allow us to measure land surface temperature and then subsequently evapotranspiration evapotranspiration when when there are no clouds
[41:39] um and that can be problematic in a lot of areas um you know we can go there are there are areas in equatorial
[41:47] africa the ethiopian highlands where even during the growing season they can have drought and crop stress but we
[41:54] don't because it's such a cloudy area we don't actually get enough real certain clear sky retrievals to get
[42:01] a good understanding of what's happening on the ground so this led us to really trying to figure out how to exploit
[42:07] microwave wavelengths which are not as sensitive to clouds they can see through clouds to measure land surface temperature as long as
[42:16] there's not heavy precipitation within the cloud so it gives us a lot more information albeit at a coarser spatial
[42:23] resolution resolution but still no coarser information is still better than no information in a lot of these areas
[42:31] where where the integration of microwave land surface temperature is really helping us get more certain um estimates of land surface temperature
[42:38] and subsequently evapotranspiration so here's just an example over in equatorial africa and the ethiopian highlands as you see here on the left
[42:47] this is a an estimate of evapotranspiration just using thermal infrared so as you see kind of in the in the in the
[42:56] equatorial rainforest we get a lot of this speckle and noise and that's just because of the uncertainty of being able to clear out
[43:03] the clouds uh that contamination gets into our system and it causes us to have errors and uncertainty
[43:10] if you look at the microwave version we don't have that um and so we get a much
[43:14] clearer picture of what's actually happening and in this sense the cloud issues were really causing us to
[43:19] underestimate evapotranspiration in this area in a lot of these areas where the microwave gave us much more certain
[43:26] observations with a lot less variability and noise and so this actually will feed downstream into our higher resolution
[43:33] information because the what we're essentially retrieving at these scales serves as a boundary condition for those landsat scales so we
[43:43] have to measure et at this scale correctly first if we expect to measure it accurately at the landsat scale
[43:50] so we're going to switch topics slightly we're still going to be talking about evapotranspiration but kind of looking at it from a case
[43:59] study of looking at how we use some of this information to monitor and provide early warning for agricultural drought
[44:07] i show this a lot when i talk about drought this is kind of how how the atmosphere and some of the remote
[44:13] sensing time scales for drought early warning kind of go hand in hand um as you see in the top you know
[44:20] usually the precursors of drought are either one or both of these two real atmospheric drivers high atmospheric
[44:28] demand so atmospheric demand is the thirst all those all those controls we talked about before temperature wind
[44:35] moisture when all of them kind of all point to enhanced evapotranspiration it can very rapidly dry out
[44:44] the the land surface those tend to be correlated with periods of below normal precipitation so you have a high thirst
[44:54] of the atmosphere pulling water out of the land surface and then below average precipitation or recharge of that soil
[44:59] moisture moisture so you can start a growing season with sufficient soil moisture as as you know these atmospheric controls
[45:09] start to lead to degradation of the surface soil moisture you can measure that with microwave soil moisture
[45:17] as the root zone dries out you start to see onset of vegetation stress um our thermal-based method with alexi and
[45:26] a derivative product called the evaporative stress index which i'll talk about in the next slide really is looking at the plant dynamics
[45:33] of of the onset of vegetation stress and then you know you look at something where the vegetation is now
[45:41] to the point where it's becoming damaged it's turning brown it might not be as green as it's supposed to be you can
[45:46] start to use ndvi to see that so really you've got to use these different observations because they they
[45:52] represent different time scales of the process process in an agricultural drought so so i'll talk about two real new you know
[46:02] relatively new products that are focused on using you know essentially both evaporative demand and actual vapor transpiration for for looking at drought
[46:12] the first one is called the evaporative drought demand index or eddy it really uses the strong physical
[46:18] relationship between demand and actual water loss and like i said demand can really be explained as the thirst of the
[46:25] atmosphere atmosphere or how much water would evaporate for the land surface under well water conditions conditions um so eddie really provides a signal of
[46:34] potential for future drought by looking at essentially how thirsty the atmosphere is to us and to essentially estimate the
[46:43] potential impact on the land surface the one caveat with eddie is that it doesn't actually physically tie to
[46:50] actual land surface conditions it can only show you the potential for the development of drought it can't actually
[46:56] show you actual drought in isolation uh because it doesn't have any information it's just an atmospheric indicator it
[47:02] doesn't actually know if the plant is well watered what's the soil moisture conditions or what's the actual evapotranspiration so it's
[47:10] really just it's a tool that has to be used with other tools to validate if there's actually a full an actual tie
[47:17] back to the land surface that we're actually seeing impact in evapotranspiration rates or soil moisture to really validate if eddie is
[47:26] showing that potential for drought if it's actually turning into an actual drought drought um this is an example of the website
[47:33] here um they run that they run eddie you know kind of in a near operational near real-time manner um to kind of track
[47:42] changes in this evaporative demand index um for drought um so the one that you know our team has
[47:50] developed developed it's called the evaporative stress index and what we're really looking at is anomalies in the ratio of actual to
[47:57] potential where that thirst uh potential is that thirst of the atmosphere but because alexi gives us actual et we're actually able to tie
[48:05] both actual et to the potential which gives us a physical tie to what's actually happening on the ground and
[48:11] within the plant one of the advantages of esi is that it doesn't require precipitation data we're reducing the soil moisture
[48:19] straight directly from land surface temperature uh so we don't need to know precipitation we don't need to know soil
[48:25] moisture we're reducing the current soil moisture state of the vegetation directly by this land surface temperature driven model
[48:34] it provides early warning because we can start to see signals in the land surface temperature before you start to see
[48:41] deterioration of vegetation health that's because plants are relatively smart plants will start to regulate their water use
[48:49] by closing their stomata and limiting transpiration when they become stressed this leads to essentially remember because evaporation's cooling process if
[48:57] it starts to slow its evaporation in a way of trying to conserve water the leaf temperatures are going to heat up faster
[49:03] we see that with the land surface temperature that we can retrieve from satellite so essentially we're seeing
[49:09] that onset of stress before the plants actually looking like it's damaged or decreasing its greenness another big advantage is that you know
[49:19] we include non-precipitation moisture signals um i don't need to know if a plant or a field is being irrigated
[49:26] we don't need to know if vegetation is rooted to the groundwater as long as we can measure the land surface
[49:32] temperature temperature we are seeing what the plant sees and that allows us to know um if there is
[49:38] being some impact from a drought to changes in water use um this is just an example we run this
[49:45] model both regionally and globally this is a version of our global model which kind of looks what it looks like
[49:52] um um uh towards the end of the presentation we'll we'll have some links to where you can get this data and look at it
[49:59] we run this model in near real time too and all the retrospective and real-time data is hosted
[50:05] on amazon web services and made available to the community for use um so we'll definitely provide that to the to
[50:12] the participants at the end of the presentation presentation um so some of you have kind of maybe started
[50:19] to hear this idea of like flash droughts these rapidly occurring we've had a number of them over the united states in
[50:25] the last couple of years and decade uh elsewhere in the united states essentially where we can go to
[50:31] from relatively normal conditions to you know very uh dry and anomalous drought conditions in a matter of weeks to a month most
[50:41] people think of drought as a slow evolving evolving phenomenon phenomenon what we've learned though is that in
[50:47] especially agricultural interests we can have these flash droughts which are really just been driven by precipitation deficits hot temperatures strong winds
[50:58] you know less clouds so you have more solar radiation more energy at the surface to evaporate and this is an example in 2017 of a very
[51:06] damaging flash drought in the in the dakotas in eastern montana where as you see in early may we we didn't have we
[51:13] had mostly normal to a wetter than normal conditions uh one month later most of the dakotas were in pretty significant drought and
[51:21] then by the beginning of july the whole most of the area and a lot of the agricultural interests both from a crop
[51:27] and a rangeland standpoint were in you know significant you know d2 to d4 drought drought and you know the economic impacts of
[51:36] these flash droughts are are significant and our ability to try to mitigate and understand and provide early warning of them
[51:44] has become a real thrust of new research in the in the drought community and these et methods let's
[51:49] just esi and some of the other methods have really shown the ability to look to provide us some early warning so that
[51:57] some mitigation strategies can be applied applied um another application we talked about crop yield anomalies and predicting
[52:05] those what we're also understanding is one way of trying to better predict crop yield anomalies is understanding
[52:13] water conditions through the growing season um some crops are you know yield is driven by or changes in yield can be driven by when
[52:23] stress is occurring within the crop stage stage uh for example um corn you know there's a certain part of the corn growth stage
[52:31] where if it experiences stress it's going to lead to significant degradations and final you know end of
[52:37] season yield um um this is really highlighted i'll try to walk through this slowly to try to
[52:43] understand it's it's an interesting case study and it's one that's close to home here because it occurred in northern
[52:48] alabama but during the 2012 flash drought um as you saw here if you want to focus on the corn um
[52:56] you know we had negative corn yield anomalies here in northern alabama and tennessee where essentially the stress occurred when it
[53:05] was in that pivotal growth stage we got out of our flash drought relatively quickly at the beginning of
[53:14] august august and september and we had much less stress for our soybeans so we actually had above average soybean yield and below
[53:23] average corn yield just because of when the flash drought occurred here so it shows that it's it's not so much you
[53:31] know in a season did a flash rod occur it's when did the when did the crop go through
[53:37] the stress and at what stage did it happen happen um and so this has just been you know
[53:43] these case studies that we continually develop over as we go through more growing seasons to understand how to use
[53:48] this information to provide better estimates of crop yield anomalies so kind of close with a couple of slides
[53:58] for maybe some future stuff um our research team along with a lot of the researchers that you saw from some
[54:04] of the other energy balance models have uh all worked together to kind of build this earth google earth engine et
[54:11] monitoring system to look at essentially field scale evapotranspiration for agricultural applications in the western us us water issues in the western us are
[54:20] really big and really important and having a means to estimate evapotranspiration in in real time is very important so this project called
[54:29] open et it's you know we're still under development i have the link there if you want to start taking a look at it but
[54:34] you know over the next couple of years you'll start to hear more about this and i'll kind of just walk you through some
[54:38] of the examples of you know being able to have essentially a cloud blaze cloud-based platform where a stakeholder
[54:46] can go in and essentially you know interrogate water use using a number of different methods methods at these field scales
[54:54] and produce reports and and have an understanding of the water use of different crops in the western us
[55:03] so now i'll just finish up the presentation with a with a couple of slides about a a new mission that was
[55:08] launched in the last couple of years a lot of you probably heard of it ecostress which is a thermal imager that
[55:13] is on the international space station on one of the science ports on on the space station um
[55:20] this is essentially a landsat like uh sensor from a from a thermal standpoint so it just has five thermal
[55:28] bands bands um essentially at a resolution of between 40 and 60 70 meters one of the issues is that we don't have
[55:37] the the visible and near infrared information that we need for some of the vegetation information so we essentially
[55:42] fuse that with the closest landsat overpass which creates some issues with making sure that the two images are
[55:48] consistent um but given that you know we have limited uh thermal information as it is um this
[55:54] is still an important addition to looking at how to uh estimate evapotranspiration from thermal infrared observations observations what's nice about this sensor because
[56:04] the the orbit of the international space station is obviously different than what a polar orbiting sensor might be might
[56:11] be be we have a much higher revisit time on the order of four days where um um four days you know essentially you know
[56:20] in near the equator and in the tropics and then sometimes as we get you know because of the the orbit of the
[56:25] international space station we only get coverage from about 50 south to 50 north in latitude um and because of that we get uh more more
[56:34] frequent observations over uh a belt essentially from 40 to 50 degrees uh of latitude so it's an interesting orbit it
[56:42] gives us uh obviously more information than we get from some of the thermal information that we get from landsat and
[56:48] the other really interesting part which is one of the science questions that ecostress really tried to focus on is um
[56:54] you know with landsat we get a thermal overpass at the same time roughly every every time it overpasses the point on
[56:59] the earth and that's in the late morning um because of the orbit of the international space station we actually
[57:04] have a variable overpass anywhere from seven to five pm local time seven a.m to five p.m local time
[57:12] um so it allows us to look at thermal signatures during different parts of the day day this is important because a lot of you
[57:18] know from an agricultural standpoint we might look at stress occurring in the in the late afternoon that we wouldn't
[57:23] necessarily see from a late morning observation in landsat and so that are some of the science questions we're trying to ask um
[57:31] if you go to the next slide this is kind of of what you can get at um this is
[57:34] essentially some center pivot irrigation agriculture in the nile basin in africa and egypt and as you can see these are two
[57:41] different overpasses one occurring in in the morning and then one occurring in the afternoon and so we're able to
[57:47] actually look at water use dynamics throughout the day where with from a landsat standpoint we'd only ever keep
[57:54] getting the same observation time for each of the overpasses so this is really kind of shows some of
[58:01] the capability and you can follow the link here and learn more about the ecostress ecostress mission mission and and
[58:08] it's been flying i said for a number of years and and the data is available and you know hopefully we can continue to
[58:14] justify the use of ecostress on one of the science ports on the international space station we'll continue to have
[58:19] these observations at least for a couple more years uh so from that point um i'll stop and
[58:26] we'll move to the question and answer session session thank you chris for such an informative presentation this provided a great
[58:32] conclusion to the webinar series and on behalf of everyone at our set and from those online thank you
[58:38] as a reminder to our participants if you have a question for dr hayne please include them in the chat box we'll get
[58:43] to as many as we can in the time remaining remaining as with previous question and answer documents they will be posted to the
[58:49] training page by next week for you to access access below is the contact information if you wish to follow up with any of the
[58:56] trainers trainers we will now proceed to the question and answer session well thanks for everybody for sending in
[59:04] your questions uh looks like we've got quite a few of them for dr hayne uh so i
[59:09] guess i'll start off with the first one question one is which types of satellite images are suitable for analysis of
[59:17] evapotranspiration for large steady areas can you hear me yes okay good good uh so yeah for this
[59:27] question um you know it really depends on what application you're going after um you know most of the the energy balance
[59:35] methods that were we presented here um rely on thermal infrared imagery uh you know for the model that you know i
[59:44] work with alexi we we run with uh you know essentially moderate resolution resolution uh land surface temperature you know in
[59:52] the from a geostationary satellite uh really looking at that mid-morning rise and land surface temperature um you know those are on the scales of
[1:00:00] two to four kilometers um if you really want to understand evapotranspiration on for an agricultural application at the field
[1:00:07] scale you really need to get down to that landsat you know 30 meter ecostress you know 30 meter scale um
[1:00:15] so you know really it's it's it's it's dependent on your application and um you know that's you know it's that's kind of just
[1:00:25] you know it's hard to answer that as you know for example you know from a just a
[1:00:32] a general question but you know i think you know as we showed with you know kind of the
[1:00:36] multi-scale version of our model you know know you need there's ways of integrating these these thermal or thermal information that you
[1:00:44] get at different scales um so that's hopefully that kind of uh if not if there's a follow-up to that
[1:00:50] i'd be happy to you know address a specific application great uh question two does the evapotranspiration decrease before the
[1:01:00] growing seasons in crops well you know generally yes um so think about you know the you know think about what goes into
[1:01:14] you know say let's start with potential happy transpiration and what would happen in a situation where um the land surface was well watered um
[1:01:24] what then drives the the actual amount of evapotranspiration is things like sunlight um incoming long wave um that
[1:01:33] balance between the you know the incoming and outgoing um um a short wave and long wave radiation so
[1:01:41] essentially we call that net radiation so so um obviously during the warm season that radiation is higher during the cold
[1:01:47] season or the non-growing season it's lower and a lot of that comes with you know the changes in you know the amount
[1:01:52] of solar energy that we get from the sun um so generally yes less of apple transpiration in the cold season
[1:01:58] non-growing season more about transpiration transpiration in the growing seasons and that's kind of why we have growing seasons and
[1:02:06] non-growing seasons great question three how yield i guess how can yield be predicted from e.t for a particular area
[1:02:17] say africa yeah i mean so you know the hardest part with trying to predict yield is um you really need good
[1:02:26] observed yield from previous years to try to you know build relationships between you know if say we have 20 years of evapotranspiration
[1:02:37] data data and then 20 years of good quality yield data at the field scale you can start to
[1:02:43] build you know machine and deep learning methods to try to predict yield and you know there's a number of people in the
[1:02:48] community who are doing that um um it's definitely a um you know it's definitely done more on a
[1:02:56] a local or regional scale um there are people who are doing you know continental type scale uh yield and
[1:03:03] yield um predictions um but yeah i mean it's it's a it really it really is predicated on
[1:03:10] having good training data to try to build a method or tool to predict yield but obviously et is a very important
[1:03:18] quantity for how um you know trying to build that relationship between what has happened in the past um related you know
[1:03:28] with respect to et and then you know what what subsequently happened in those years uh from a crop yield standpoint um
[1:03:35] and obviously you know there are the other there are a lot of other indicators and data sets that would be
[1:03:39] needed to build such a tool um but yeah i mean they're definitely i think the community has moved and it's
[1:03:45] made a lot of progress in the last number of years at developing methods to look at this so i think it's a very
[1:03:50] important uh you know science question for the community to focus on great uh question four i'm not clear about the difference
[1:04:01] between potential evapotranspiration and actual evapotranspiration would you clarify the difference please yeah so um think of potential as you know what
[1:04:12] would happen if all of the conditions or all those drivers that control of apple transpiration were optimal um you know
[1:04:19] well-watered you know sufficient soil moisture moisture lots of you know solar insulation um so essentially what would happen if
[1:04:28] there was no constraint on evapotranspiration so that kind of sets the you know that threshold for what what would happen under those
[1:04:37] conditions actual et is what actually is occurring um you know it's more of a physically based um
[1:04:45] um estimate of how much water is actually being transferred um from the from the land surface to the atmosphere
[1:04:52] so that's really the difference potential is kind of the what would be happening under optimal conditions and actual is actually what
[1:04:58] is happening great uh and question number five can we use interpolation methods to measure evapotranspiration evapotranspiration um i'm not 100 sure what what the what
[1:05:13] the look you know whoever submitted the question meant by interpolation methods um um you know we do rely on
[1:05:21] using interpolation to try to estimate you know seasonal or annual e.t especially at the field scale where we
[1:05:29] only get landsat overpasses you know every every under a best case scenario every eight days days um so we do need to
[1:05:37] find ways to essentially take those sparse observations and then estimate et et in between landsat overpass days and you
[1:05:45] see with the method that we we presented today that you know one method is fusing you know slightly
[1:05:51] less less more moderate resolution from viirs and modis to fill in for some of those gaps where you know it's complicated if you
[1:05:59] get a landsat overpass beginning of the month and then one at the end of the month month it may not represent rainfall events in
[1:06:07] between those two overpass days um so the the the introduction of more moderate resolution days that you know
[1:06:13] that's available on a daily time scale can hopefully fill in some of that information and you know albeit at a coarser resolution but
[1:06:21] you know we've developed data mining machine learning tools to try to make those uh you know essentially the information we
[1:06:28] get at those scales and be able to interpolate it down to um estimate the field scale so while i say
[1:06:36] you can't use interpolate not really use interpolation methods to measure et you know there's a lot of interpolation
[1:06:43] and data mining to try to fill in some of the observational gaps we have so it's definitely an important
[1:06:48] part of the process great and question six looks like it's a two-part question so the first part is
[1:06:56] is there any recent model to drive et or energy balance with the absence of institute data and then the second part
[1:07:03] of that is what is the best way to estimate et using only remote sensing yeah so you know
[1:07:09] you know in some of these energy balance models um we we don't necessarily need in-situ data um so a lot of those
[1:07:18] methods that we we like i said we when we presented from the energy balance standpoint um they that's part of you
[1:07:25] know what remote sensing addresses with some of the issues where um trying to get at evapotranspiration without in-situ data um
[1:07:34] obviously you know it's not fair to say we don't need any in-situ data i mean we you need to you need to know what
[1:07:40] what is the land surface you're looking at um you know it's helpful if you know what kind of crop it is for some methods
[1:07:49] and so you know and sometimes you know especially in areas where you have irrigated agriculture and more arid uh conditions
[1:08:00] you know some of the some of the same model data that we tried we used to kind of initialize what
[1:08:05] the atmosphere is is not representative of what's actually going on on the ground so sometimes in situ data is helpful to to
[1:08:12] um um you know correct some of those errors so it's probably not fair to say we don't
[1:08:17] need in situ data i think when we have in situ data it makes the methods more robust
[1:08:22] robust but generally a lot of these remote sensing methods do not rely on in-situ data um for what is the best way to only
[1:08:28] use remote sensing um i think what we're finding is you know we have a number of methods from an
[1:08:34] energy balance standpoint and a crop coefficient standpoint and other methods that that all have their strengths and weaknesses
[1:08:41] and no one single model has shown to be what would be considered the best way to do it
[1:08:47] over different regional areas or different ecosystems so that's really why you know when you saw some of the
[1:08:53] slides from the open et project it's really really you know all these different modeling groups coming together and you know
[1:09:00] realizing that it's better to work together than to compete because nobody nobody has the best method and
[1:09:06] understanding when certain methods do better over certain areas and then using an ensemble of methods tends to give us
[1:09:13] the best you know validation when we actually compare against actual ground-based measurements of et where we actually have any covariance
[1:09:22] flux towers so it's really that multi-model ensemble which is the best way to estimate et from remote sensing
[1:09:30] at least it looks it looks like question 7 is actually very similar uh to question six as well it's given that the
[1:09:36] ground observation data are scarce in africa which models and remote sensing approaches would provide good estimates of the e.t
[1:09:44] yeah i'd probably answer it the same way um you know i think you know these energy balance models um
[1:09:52] don't rely on in-situ data um some of the crop coefficient methods that we we talked about briefly
[1:09:58] um really need good crop data layers to you know do an accurate estimation of the crop coefficient which i guess we'll let me
[1:10:06] i'll just address question 82 so the crop coefficient is essentially essentially you know it once you estimate potential
[1:10:13] evapotranspiration or some reference et um you know potential vapor transpiration and reference of apple transpiration are kind of similar
[1:10:21] um so a crop coefficient is say for corn has a certain crop coefficient that to estimate et you would take the reference
[1:10:28] et and multiply it by that crop coefficient so it's essentially how effective a crop is at um
[1:10:36] um in you know producing transpiration and so because some crops use more water some crops use less water that's why we have crop
[1:10:45] coefficients to represent those changes in water use dynamics across crops so i think that's probably the best way of
[1:10:52] looking at it great question diane could you explain or any recommendation to estimate surface energy balance using satellite
[1:11:03] data especially for places that lack insufficient in-situ data yeah so i mean i think you know this is
[1:11:09] also similar to question six and seven you know i think these end a lot of these energy balance
[1:11:14] models models don't require in-situ data so they're able to be applied applied um um you know in areas where there is
[1:11:23] insufficient ground-based data you know because remote sensing provides us a large you know it provides us information that we need
[1:11:33] um for these methods everywhere and there's enough also shortwave and near-infrared observations that we can categorize or
[1:11:42] characterize the vegetation correctly in these areas where we don't actually have ground-based observations so yeah it's i would refer back to
[1:11:49] question six or seven i mean i think it's really an energy balance question of you know you don't necessarily need
[1:11:58] in-situ data it can be helpful in cases um but it's definitely not something that is uh necessary
[1:12:07] necessary great uh question 10 the remote sensing approach of estimating et is good and well for estimating
[1:12:14] and or determining potential et than actual et is that not essentially the actual et contains the soil moisture stress component in it
[1:12:23] could there be any way to include the soil moisture stress component ks and compute the actual et better
[1:12:30] well i mean i think the you know so the point is we don't use remote sensing to
[1:12:34] estimate potential et potential et is a it's physically what what you know it's a it's a it's a it's a
[1:12:43] function of the meteorology or the what the atmosphere is you know from a ability to take in water
[1:12:50] um um the remote sensing approaches that we have here are estimating actual et we don't need to know the soil moisture
[1:12:57] because that soil moisture signal is internal internal in that land surface temperature signal obviously dry soil heats up
[1:13:06] faster than wet soil um and also if you you know you you know so you don't need to know the soil soil
[1:13:13] moisture stress component for it's really internally in the surface energy balance um um there are some you know obviously from a
[1:13:21] modeling standpoint a modeling method you do need to know soil moisture because there is like i said so moisture
[1:13:26] stress stress is is a function of how land surface models estimate evapotranspiration um so so um you know i think
[1:13:38] there are some you know there are have been some work towards developing maybe more of a hybrid
[1:13:44] approach where you have a you know and obviously we do this with data simulation too of trying to assimilate
[1:13:48] remote sensing observations in the land service models so so you know i think the main take home is you know
[1:13:55] these methods are estimating actual et um um knowing accurate soil moisture conditions can help you there but we
[1:14:03] don't have that you know it's another you know we don't have a lot of in-situ data for soil moisture so we must rely
[1:14:09] on either a modeling soil moisture and calculating et for models or essentially calculating et from this thermal
[1:14:16] signature which you know inherently includes the soil moisture stress component great question 11 in another webinar we
[1:14:24] were introduced to landsat's evapotranspiration product ee flux in the presentation there was an internet link but it doesn't work at the
[1:14:32] moment where can i find this 30 meter energy flux product and we've provided a link below that takes you to
[1:14:41] a google earth engine app which which uses that product so hopefully you can click on that and explore uh some more
[1:14:52] yeah and i'll add that you know with open et the ee flux method is one of the
[1:14:55] models that will be used um so you know as open et becomes more and we're going through a lot of the the
[1:15:01] beta testing now so um you know there'll be a lot more et data available um at least you know the
[1:15:08] open et project is focused on the uh you know the western us initially but you know i know the ee flux product you can
[1:15:15] you can run that app through uh and run it anywhere but um and eventually you know i think there'll be
[1:15:22] other methods that will start to uh you know really be able to take advantage of some of the the earth
[1:15:28] engine and the cloud computing capabilities great question 12 where can i download et data um you know
[1:15:39] you know this is a this is a question where it's probably better for me to come back and edit this
[1:15:44] later and i can provide some links to some some openly available data um um so uh it just really depends on what
[1:15:53] your application is too uh your focus area area um where where you know what resolution do you want data at what um
[1:16:02] how many you know what years of data you have i think um you know a lot of the
[1:16:05] models models um that i presented here some of them are more operational and provide you know long-term data sets um
[1:16:14] and also sometimes it's it's best to contact the the pi or the developer of a given tool
[1:16:20] um and ask about so we can we can definitely come back to this and provide some links
[1:16:27] great and question 13 how is the land surface temperature measured under trees and grasses well we we we we don't
[1:16:35] we don't really i mean i guess that's you know you know say if you take a two-source energy balance model um we're
[1:16:41] really looking at the temperature of the bare soil component and then essentially the canopy um um you know i think on some level there is
[1:16:50] um um some need in some areas especially in savannahs where you have um um you know more sparse tree cover but it from a
[1:17:00] from a modeling standpoint is difficult that you need to almost go to a three source model where you're also
[1:17:05] trying to model essentially you know the under the canopy state um yeah it's kind of one of maybe the the weaknesses of
[1:17:14] you know the thermal the thermal based models um that you know were were missing sometimes you know
[1:17:21] important processes that happen with you know heat transfer between you know you know under the canopy and the actual
[1:17:29] uh atmosphere so i'm not sure i'm not sure we do that effectively with you know from a remote
[1:17:36] sensing standpoint great question 14 what are the differences between plant species when calculating et using landsat um
[1:17:50] um you know it depends how you know it depends what method you're using i think some methods
[1:17:56] you know you need to have some characterization of the the vegetation what type of vegetation are you looking
[1:18:02] at at um and you know a nominal height uh you know we a lot of methods you know
[1:18:09] use some estimate of leaf area index or the fraction of green leaf in you know given pixel
[1:18:16] pixel um um you know for some of the the you know when we run these on a more regional or
[1:18:21] continental or global scale we have to make some assumptions where we don't have you know a lot of detailed information when it
[1:18:29] gets down to actual you know what kind of species so we it we tend to keep it more general and generic and
[1:18:37] categorize the vegetation type you know you know you know is it a coniferous forest is it a deciduous forest is it
[1:18:44] crop land is a shrub land um we don't necessarily necessarily discriminate beyond kind of that general land cover classification um obviously
[1:18:54] as i said especially with the crop coefficient method you kind of you know it is better if you're able to characterize
[1:19:00] what type of crop it is just because of the different water use dynamics um so for energy balance we maybe it's not as
[1:19:08] important um but for um uh uh coefficient it is um and you know that but then again it gets kind of back to
[1:19:18] your in-situ data where it's like how much do you have and how much do you need okay question 15. multi-sensors are very
[1:19:29] good at measuring ground temperature it is very difficult to find the swarm of locusts in the desert i think the
[1:19:35] presence of a swarm of locusts can change the ground the surface ground temperature can we use these
[1:19:40] multi-sensors to observe the locust swarm activities in the desert um you know this is obviously an important problem right now um and
[1:19:51] honestly i'm not sure um you know i think you know we we have we have seen people start to look at trying
[1:19:58] to to characterize you know moisture conditions to see where swarms of locus are likely to be or where breeding may be more optimal
[1:20:08] but i i'm not aware of anyone using actual remote sensing to look at changes in temperature due to swarms but you
[1:20:16] know know i can ask around and if i can come back with anything you know i imagine if you
[1:20:20] get a dense enough swarm that might be possible but you might also be limited by the resolution of what we actually
[1:20:25] sense uh thermally right now great question 17 characteristic water use curves use the same days of growing
[1:20:35] period period for all different crops is this correct yeah i think in that in that study we
[1:20:44] you know that's one of the assumptions we're making um you know over a growing season you know
[1:20:49] kind of being stable but you know i think you know obviously there are some differences in you know the length of
[1:20:57] that growing growing period and you know i think in that case you know optimally those were all scaled to where um
[1:21:05] different crops were essentially planted um um because we had good information about when those fields were active and when they were not so
[1:21:14] um um yes okay question 18. uh in slide 25 which satellite do you use for microwave and
[1:21:25] how to combine with alexi um so you know we there's a number of microwave sensors that provide so we need that 37
[1:21:34] gigahertz observation a ka band um there's a number of sensors that have been up over the last 20 30 years and then are
[1:21:44] still up um we and a lot of those are also processed within the gpm the global precipitation
[1:21:50] measurement mission um they do their inner calibration between you know the the core gmi sensor and then all these other sensors so um
[1:22:00] so that gives us a number of observations over the the diurnal or the you know the day and night period um and
[1:22:05] then we use methods to fit those into a diurnal temperature signal and then there are some corrections because microwave is sensing
[1:22:14] you know thermal's connected you know sensing essentially that skin temperature where microwave depending on the slow moisture
[1:22:20] is looking at a little bit of a different different deeper into the soil so there is some
[1:22:24] correction in both the phase and the amplitude of the microwave signal that we have to match back to what we would
[1:22:30] have seen with with uh thermal land surface temperature um um and you know the other i always like to
[1:22:38] mention is that the microwave is coarser resolution um but it does give us information in a lot
[1:22:43] of areas where cloud cover really affects our ability to get uh you know retrievals of land service temperature
[1:22:49] from thermal and i can provide the link to where we process our um our land surveys or where we where we
[1:22:58] i'll provide a link to the the raw microwave brightness temperatures that we use in our algorithm okay question 19
[1:23:08] in field level applications for decision making process how can eddie be used as the proxy and how is it tied with essie
[1:23:16] um um you know i think for you know eddie as i said is really driven by that
[1:23:22] potential et or changes in you know potential reference et um so eddie will see essentially the atmospheric signal
[1:23:30] before there's actually any response in the land surface so eddie is a really powerful tool to look at potential for development of
[1:23:39] drought it can't tell you much about what's actually happening on the ground but it can tell you
[1:23:45] the demand that the atmosphere has and if that's above average that means it's going to you know it can rapidly deplete
[1:23:52] soil moisture and you know then you can start to actually see vegetation related stress and that's what we see with esi
[1:24:01] we're actually looking at the physical plant response to stress water stress so eddie can't tell you anything about
[1:24:08] what the plants actually doing doing but it it can tell you essentially what the atmosphere atmosphere the role the atmosphere is playing in in
[1:24:19] with the land surface but some of these other methods actually like esi tell you what's actually happening at the plant
[1:24:25] level level so really they need to be used together where eddie is more of a early warning for the potential of drought and
[1:24:33] then esi is actually more of an early warning warning for actual onset of vegetation stress or you know especially
[1:24:41] because we can see that stress signature before the plant actually might become damaged or browned so if you're using
[1:24:48] only an ndvi you're going to see it much later than you might see it in esi and
[1:24:52] if you're only using esi you know you maybe didn't see the the atmospheric signal that eddie would have shown you
[1:25:02] okay question 20 is very specific to a part of india so can we get root zone soil moisture
[1:25:08] data for any region in india at high resolution or say for a crop cotton cultivation in the maharashtra state and
[1:25:15] how can we get high-resolution crop specific vegetation images say for time series cotton cultivation in a region of
[1:25:22] india or through geo coordinates of india india um um you know it is a very specific question i think
[1:25:32] from a the the real answer is no um you know there's not really a way to there's not
[1:25:40] really a way to directly um estimate rezone soil moisture from any satellite um um uh uh from the high resolution standpoint you
[1:25:50] know there are you know with you know current synthetic aperture radar and current you know up you know future
[1:25:58] uh the the l-band sar from nasa and uh the indian space agency that's coming online you know in the next couple of
[1:26:06] years will give us you know the ability to estimate you know high resolution slow moisture um also there's it's been
[1:26:13] shown that cygnus which is a essentially a was going to be an ocean wind type mission for you know tropical systems
[1:26:22] using reflected gps signals that is also shown to be a relatively unique way of estimating high resolution
[1:26:35] soil moisture um so definitely we're moving towards the point where we can get high resolution surface soil moisture but you
[1:26:42] still re you still need to rely on modeling to to kind of you know model how changes in surface
[1:26:49] soil moisture affect root zone soil moisture because we don't directly observe root zone soil moisture with some of the microwave instruments
[1:26:56] either active or passive great question 21 there are several types of drought does esi predict hydrological drought
[1:27:06] generally no so i mean esi is really a meteorological or agricultural drought tool um obviously obviously you know hydrological drought happens on
[1:27:16] much larger time scales you know sometimes be driven with you know ground water dynamics snow melts in areas where
[1:27:22] you you you know where snow melt realize you know a lot of you know water use relies
[1:27:27] on snow melt um so it's definitely not a tool that should be used for predicting hydrological droughts um sometimes
[1:27:35] you know we obviously you know if an area is exhibiting you know a long hydrological drought you know we'll definitely see
[1:27:43] that in esi 2 on some sense that we'll see see you know obviously sometimes the the vegetation is is feeling that change in
[1:27:51] in you know you know deep root zone soil moisture so a lot of times um there are
[1:27:56] you know there are some events where the two correspond well um but that's you know there are better tools for doing
[1:28:04] hydrological drought um you know and you know those really are predicated on looking at you know snow melt
[1:28:11] precipitation over these periods uh groundwater changes so yeah you know there are times where yes you can
[1:28:18] technically use it but you know i think it's we really focus on its capabilities for meteorological and agricultural
[1:28:25] drought drought great question 22 what is the time delay that we can expect between seeing a signal of plant stress and esi
[1:28:33] and ndvi so the actual uh plant damage you know i don't i don't think we know i
[1:28:39] mean i think we we kind of estimate you know an order of maybe one to three weeks it just depends on how rapidly
[1:28:45] evolving the drought is how you know um but i mean from a from a standpoint of really trying to understand um
[1:28:53] that's kind of still an area of open research and you know i think no specific case would be uh
[1:29:01] you know it it just requires us to go back and look at some of these cases where we did see the you
[1:29:09] know the onset of stress and esi before you see it in a you know an ndvi or a
[1:29:13] vegetation index great question 23 what are the potential uses of remote sensing based et monitoring for index crop insurance
[1:29:24] um you know i think on anything it's like once you get to you know so so you know and it depends you know in
[1:29:32] places in africa where you know field sizes are very small um we really don't even you know you know technically you
[1:29:40] know landsat the thermal sensor really you know is on the order of 100 meters um you know we we can sharpen that down
[1:29:49] to 30 meters but when you get to some of these areas with much smaller fields you know
[1:29:54] know it's hard to get a pristine view of uh you know water use at a field scale
[1:29:59] there um but it is an area it is areas that we've been working on with you know
[1:30:04] groups that are are focused on you know in index crop insurance um so i think you know in the end as we get to these
[1:30:10] tools where we're able to like open et where we're able to actually produce you know operational field scale estimates
[1:30:17] of et i think it will be a potential use for for um um being used in some of the you know index
[1:30:25] uh methods and for crop insurance so i think you will expect you expect to see it probably become a bigger thing as we
[1:30:31] move forward okay question 24 is actually similar in terms of uh small field size so a majority of farmers in india have two
[1:30:39] small holdings two acres or less on average how can et help them plan their crop rotation cycles
[1:30:45] you know i think you know similar to the last question is like you know we're really you know there's there is a constraint
[1:30:55] with resolution um you know i think as you know as future as future sensors come you know maybe we
[1:31:02] get to the point where we have higher resolution thermal um um but i think also it's just you know a
[1:31:07] lot of these methods are not operationally produced and as that as those capabilities continue to grow it'll make it it'll make it easier for
[1:31:18] farmers to start to integrate this into their decision making where now it's really getting good you know accurate information kind of occurs
[1:31:26] on the retroactive scale um so um something i think going forward you'll see more but i mean depending on
[1:31:34] your your the size of your fields that you want to resolve it's really is constrained by you know
[1:31:39] our you know essentially the technology of you know the thermal acquisitions great question 25 why is avhrr not used
[1:31:49] in alexi to achieve a longer time series um um not because we don't want to um it's
[1:31:55] just an area of active research for us avhrr is complicated in some of the earlier sensors because there's a lot of
[1:32:05] drift of the sensor where it over time or its life cycle will observe the land surface at a different time
[1:32:14] as you have orbital drift um so so that requires just a more complicated technique um than what we've applied for
[1:32:22] motor surveyors but it's definitely an area that we we are actively working on so so it's not
[1:32:28] it's not that we don't plan to do it it's just a matter of uh we're not there
[1:32:32] yet yet great and last question are alexi and alexey esi available at the global level um yes um we run both alexi and you know
[1:32:43] the et and esi data from alexi at uh about five kilometers globally um the esi is produced you know near real time
[1:32:52] and is available for download and i can add the link here after we're done and then um the et data is
[1:32:58] more of a retrospective tool but we're working on getting it run more more of a near real-time mode um
[1:33:05] you know so so yes i mean those kind of serve as the boundary condition for our disaggregation or dyslexia tool
[1:33:13] for when we want to run that field scale method over different areas of the globe wonderful well we we did it we got
[1:33:22] through all the questions uh we are at town so i guess uh so yeah thank you and
[1:33:27] chris i wanna i want you to notice a lot of the the information we've been getting from the participants has been
[1:33:31] just very positive and and very thankful for for everything you've been doing and on behalf of our set as well thank you
[1:33:37] so much for contributing to this webinar series oh no i'm happy to do it thanks great and i also want to acknowledge all
[1:33:43] of the rca colleagues that helped make this possible uh that's dr amita mehta dr erica potist selen hudson odoi brock
[1:33:50] blevins and jonathan o'brien so thank you all thanks everybody for joining and again the homework is due on may 12th so
[1:33:58] please get that in and all the content from the q a session as well as the materials from the presentation are up
[1:34:04] on the website so please go there to access them and hope you all stay safe and we'll see you soon thank you
