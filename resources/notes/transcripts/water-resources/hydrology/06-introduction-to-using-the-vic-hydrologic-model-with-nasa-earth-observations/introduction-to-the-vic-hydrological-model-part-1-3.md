# Introduction to the VIC Hydrological Model, Part 1/3

`https://www.youtube.com/watch?v=51bB7frovtg` · id 313 · 1:27:10 · module 305 — Introduction to Using the VIC Hydrologic Model with NASA Earth Observations

[00:01] okay welcome everyone uh welcome to this webinar series uh it's on introduction to using the variable infiltration capacity or weak
[00:11] model model with nasa observations so my name is amita mehta and i am from nasa applied remote
[00:21] sensing training program um i have my co-instructor here mr kale marker he's from university of alabama at huntsville and he's also a
[00:32] part of nasa server global program so today we're going to first start with introduction of the entire webinar
[00:42] series and then kale will talk more about big model itself so the overall objective of this training
[00:52] training is to teach about where and how to download big model how to set it up for
[00:59] a particular watershed or river basin using remote sensing data and finally how to analyze output output for number of applications including
[01:10] what resources management and also for flood or drought applications so at the end of this training all the attendees will learn
[01:20] where and how to download and install a big model on your own computer where to go and get weak inputs and finally how
[01:28] to implement um wig for a river basin and then analyze output so this is going to be the overall
[01:39] outline of the training as you know there are three sessions today today second second is on 22nd february and third one first
[01:49] of march all these sessions are repeated twice a day uh 9 to 10 a.m and 6 to 7 p.m
[01:59] eastern u.s time this is basically to cover different time zones here in the u.s as well as internationally
[02:07] overall we will have first session today it's mostly introduction of the model itself so it is introduction to the big
[02:15] hydrological model uh second one which is next week at the same time will be on overview of remote sensing based input
[02:24] data for a week totally devoted to just data preparation for uh vic model and finally the third session will be
[02:33] how to implement the model and how to analyze the output for a specific river basin and for this webinar series we are
[02:42] going to use the mekong river basin mekong river is in southeast asia and as you can see
[02:48] here is the shape file outlining the mekong river basin so we will present a case study about
[02:57] mekong we are going to focus on overall water resources management and show a flood and drought case both using with
[03:06] so that is the overall outline now uh some important information this is our r set or applied remote
[03:15] sensing training programs website here is where you will find all the information about this webinar you will
[03:24] find all the presentation slides on this site site not only in english we also have spanish translate
[03:32] translate slides translated in spanish they will also be here after each session the recordings will be placed at the same site so you can
[03:42] access the webinar or you can listen to it recording later on as well so this is the main
[03:48] go to site for all the course material also also there will be a homework that will be posted
[03:57] for session three after session three you will be able to see this homework on the same site on our set site for
[04:05] a week webinar and uh answer of this homework you will have a google form link you will go to that
[04:13] link and answer all the questions and that will be your homework uh due date for homework will be 16th of
[04:20] march march and so that's an important information to keep in mind also also please note that uh
[04:30] those of you who attend all three webinars live and complete the homework assignment will be awarded a certificate
[04:38] of completion and so that will be about two months after the completion of the webinar uh it takes about that much time so please
[04:47] wait and if you haven't received your certificate then you can contact minus martins our email address is given here
[04:54] so this is session one outline and that's for today um first we will briefly go over the applied remote
[05:01] sensing training program and then kayle will talk about overview of the vic model it will focus on
[05:08] features and processes of weak model also a routing model that has to be used along with rick so
[05:15] we will give information about that so with that i want to start to talk about our set program
[05:24] uh ourselves applied remote sensing training program that is a capacity building program that is supported by nasa's applied sciences program
[05:33] and as you can see uh our arsenal's mission is to empower the global global community through remote sensing
[05:40] training training uh tatara audience is environmental professionals and policy makers makers in public and private sectors and the
[05:50] idea is to uh have societal benefit of remote sensing observations in multiple thematic areas as you can see
[06:01] arsenal does training in disasters management land management health and air quality and water resources management so these are the basic themes
[06:10] where we do training and some of you may already have taken ourselves training so we have uh training formats are
[06:18] different types we have in-person training as well as online training such as we're doing now uh we have live sessions there are some
[06:27] recorded sessions as well uh depending on the type of training um it ranges from four to six hours of
[06:34] instructions for online training and from two to seven days in length for in-person training um both online and in-person training uh
[06:46] they have introductory as well as advanced component and depending on that it is either presentations demonstrations of case studies or it can
[06:55] involve hands-on case studies where all the participants work on their own computer to either access data or
[07:03] have learned how to apply this data for a particular application application we also have uh train the trainers
[07:12] series in which our set helps people or personnel who want to train other people in their own organization
[07:21] or they want to work with other end users users arsene provides online training on best practices for providing training
[07:30] and and if there is other help needed rsi can be contacted for that again as i mentioned there are multiple
[07:39] levels of training so fundamental level uh it assumes no remotes or requires no remote sensing background or
[07:49] no familiarity with satellite data also based on that introductory level uh it requires that you go through fundamental
[07:57] training some of these trainings fundamental trainings are already recorded and placed on our set website that you can access access at any time
[08:07] um um basic or introductory level such as this one one is usually for introducing a topic or
[08:15] providing an overview or demonstrating some case studies and then advanced level or level two it requires um some knowledge of remote
[08:24] sensing sensing also familiarity with satellite data and then this is mostly in-depth and it is focused on specific topics on also on
[08:34] regional areas sometimes an example is uh advanced webinar remote sensing of drought that we presented last year in
[08:42] which our participants actually worked with precipitation and vegetation analysis data to detect drought in a number of areas
[08:52] so this is our site's global participation between 2009 and 16. as you can see there are more than 100
[09:01] trainings we've provided and more than 13 000 participants have taken training from our set we have reached 159 countries and all
[09:12] the u.s states and and 3700 plus unique organizations have participated in the training so this is us ourselves website and
[09:24] there is our set list serve here that here all the trainings are listed you can go to any of the online or in person
[09:32] training training and you can join the list serve so that um sign up for the lister to get
[09:41] information about upcoming trainings or any other activities then i said this converting that you will be informed
[09:48] about that before kell market provides overview of the weak model here is a brief outline of what
[10:02] we're going to do next week we are going to talk about all these different inputs which goes they go into weak model and
[10:10] then the output we get our water balance component says shown here soil moisture air for transpiration runoff and stream
[10:19] flow and snow water equivalent so these are the major water budget components that we get out of wick
[10:29] the wick itself is a complex model and so the code is available to us but to be
[10:37] able to run the model or use the model it's good to know major features and processes that go into it so that is
[10:46] what is going to be presented next and then next week is about inputs and the third week then we
[10:56] will focus on outputs so with that i asked kell to talk about the weak model thanks hi everyone i hope everybody stays going
[11:10] well as amita said my name is kel markert i work with the nasa severe science coordination office and my main
[11:17] role is coordinating all the water activities that occur with the severe program so so let's dive into an overview of the vic
[11:27] model model so so today we're going to talk about some different hydrology models and looking at why certain models over the other then
[11:37] we're going to dive into the vic model understand its features understand its processes and how do we get data and
[11:46] stream flow and all the processes that go within the vic model so we're going to dive into an overview
[11:52] of the vic model vic stands for the variable infiltration capacity model is a grid-based model that simulates moisture and energy
[12:01] fluxes between the land and atmosphere the vic model was developed specifically to be coupled with global circulation
[12:07] models as a land surface game and this model is considered a research model the model was developed as an open source project
[12:17] so that way everybody is able to access it modify the source code and everything so you can really tune it to your own
[12:23] purposes so here's a brief overview of land surface models versus traditional hydrology models land surface models so the purpose
[12:35] between the difference between the purpose of land surface models and traditional hydrology models is land surface models are really focused on
[12:42] simulating those moisture and energy fluxes between the land and the atmosphere where traditional hydrology models focus largely on the flood forecasting a water
[12:52] supply supply in traditional hydrology models the water balance is the most important piece piece that is simulated where in land surface
[13:02] models it is both the energy and water that is important and so how the model represents the land
[13:10] surface is uh in traditional models they're mainly conceptual models so think of the cn runoff curve method that is based on
[13:18] empirical relationships where land surface schemes try to capture the physical processes that occur within the model model and in traditional
[13:28] hydrology models the vegetation how that's represented is implicitly simulated so what i mean by that is the
[13:38] the it doesn't directly take in information on vegetation where land surface models you have to represent that vegetation
[13:46] within the model scheme and in traditional land surface models when you run the model they are either lumped parameters so think of on
[13:55] a watershed based or distributed parameters where land surface models again they're coupled with these global circulation models so they're grid based
[14:06] and traditional hydrology models are meant to be run as offline simulations so what i mean by that is you're running
[14:12] them them on your own desktop and then land surface schemes are meant to be coupled with those
[14:20] general circulation models that way you have a two-way movement of data between the general circulation model and that land
[14:30] surface model but that's not to be said that they can't be used in offline like we're going to show later on in this
[14:37] webinar series okay so there are a lot of hydrology models out there there and a lot of times the question is why
[14:51] use this model over another well really you should be selecting a model that is focused for your application
[14:59] and this this selection is somewhat based on technical expertise so if you're able to run a multiple different
[15:06] models then you're able to select that model that best fits your needs there's a lot of studies out there that
[15:12] have looked into different models uh their different parameterizations and calibrations and how that and how that affects the representation
[15:22] of the data or the hydrology of a system so when you're selecting a model well model selections really have a
[15:32] major effect on how the hydrology is represented and different components of the hydrology hydrology and you should also understand the
[15:40] physical processes going on in the model to best represent those physical conditions of what you're trying to
[15:47] model model okay okay so now let's dive deeper into vic so we gain that physical understanding of vic
[15:56] so so vic was originally developed back in 1994 1994 by liang at all and so this was a
[16:04] two-layer soil vegetation model that was physically based and the whole idea is that it was coupled with these climate
[16:11] models so we're able to simulate those water and energy fluxes at a grid level level and here are the sources so you can look
[16:20] up the original article okay so some main features of the vic model model each grid cell is simulated
[16:27] independently independently so what that means is the only water entering a cell is from the atmosphere or precipitation
[16:36] the model can represent a sub grid vegetation or land cover variability and also can represent represent subgrid elevation variability and this
[16:46] is important so that way we're actually we'll see later that the grid cells are fairly large but being able to represent
[16:53] this subgrid variability allows us to better refine the model the model is able to be run out of daily
[17:00] or sub daily time steps you're able to specify multiple soil layers layers and it has a routing scheme that was
[17:08] developed specifically for this model by lowmen at all and we'll touch upon that a little later on today
[17:14] and a big component of this is groundwater is not considered within the model so this is only focusing on
[17:21] shallow soil water all right so as i mentioned the vic grid cell size is quite large and there's a reason behind that so the
[17:33] grid cells are simulated independently of each other again only uh water entering the cells from precipitation so that means there's no
[17:41] channel flow no sub surface flow or no recharge the soils from these rivers and this assumes that the vertical
[17:49] fluxes precipitation are much larger than the horizontal fluxes like channel flow and so this assumption is usually
[17:57] satisfied with a large good cell that is three kilometers to about two degree resolution or larger and so some of some additional
[18:08] assumptions that go on within the model our groundwater flow is relatively small compared to surface and near-surface
[18:17] flow flow lakes and wetlands do not have significant channel flow and that flooding over banks is insignificant
[18:27] insignificant and so those are typically focused on that horizontal flux right you don't have the recharge into soils from rivers
[18:36] you don't have these large channel channel flows and so again these are all usually satisfied if the grid cell is large
[18:45] enough enough here we're going to dive into the subgrid representation of vegetation so the spatial distribution parameters
[18:53] of vegetation classes are specified with these input files which amita will go over in session two and so
[19:03] this allows for the energy and water balance terms to be computed independently for each vegetation class and each vegetation class will have
[19:11] different parameterizations like leaf area index rooting depth surface roughness etc and so this means that with those large
[19:20] grid cells about three kilometers or greater greater we're able to specify what percentage of each grid cell is
[19:29] for example forest and then we're able to scale the total water balance of each grid cell according to the simulated vegetation or
[19:40] what's going on within the vegetation or different land cover classes so when representing these percent area of these different vegetation
[19:51] classes classes these classes must add up to a hundred percent percent if they do not then vic has a backup
[19:58] scheme for bare soils that's used for the remainder for example if we have 33 percent of a grid cell that's forest and
[20:05] 36 that's grassland grassland that adds up to only 69 percent of the grid being covered by a land cover and then vic
[20:16] uses that last 31 percent as bare soil okay okay so here's a quick breakdown of how vic represents uh
[20:27] the subgrid elevation so the subgrid elevation is really focused on capturing those orographic effects on precipitation and energy
[20:36] processes processes and so this is very important to understand the differences between precipitation and snowfall and the snowpack processes
[20:48] and this is this really affects the representation of snow accumulation and snowmelt timing between high and low
[20:55] elevations elevations again vic has these pretty large grid cells so you can have mountain peaks or what have you within these grid cells
[21:02] that actually accumulate snow but may not be represented if you're using a global aerial average for that grid cell
[21:11] so the user specifies the snow or elevation bands and again these are represented as fractional areas of each
[21:20] band of each grid cell and so what happens is the mean pixel temperature temperature is taken at the mean elevation
[21:31] and then vic lapses so calculates the temperature that it's supposed to have at each elevation band and uses that to
[21:40] calculate the water and energy fluxes so so when we represent the subgrid variabilities the aggregation how these
[21:52] weights are actually calculated is pretty important so these are weighted aerial averages and so the the elevation bands the processes at each
[22:03] elevation band are computed first and then the vegetation cover so if you think of this as an iterative process so
[22:10] band 1 elevation band one we're processing that and then within there we process each vegetation class then we move on to band two and then we
[22:19] process each vegetation class within band two and so on and then these are all summed up by
[22:25] weighted aerial averages by each variable and then that's the final model output for each grid cell and so again these the order of
[22:33] operations is pretty important and so the more elevation bands and more vegetation types you have this significantly increases the computation
[22:43] time so you don't want to add in say 100 elevation bands because that's a little bit overkill and you can get
[22:52] the same similar results using say 10 elevation bands so so right now i want to pause real quick and
[23:03] ask a quick question so with the vic model what is the smallest grid cell size that we can theoretically
[23:11] run the model at and have still representation of the physics and why is that great so now that we've covered the
[23:35] features of the vic model now we want to dive deeper into the physical representations of these hydrologic
[23:41] processes that the model captures before we dive into this the model does require detailed parameterizations parameterizations and these parameterizations are pretty
[23:53] important for climate sensitive regions and what i mean by that is we need to finely tune the the model parameters to
[24:00] actually capture what's going on from the physical standpoint and the vic model does contain modules and options to capture those specific
[24:09] processes so to start off with we want to talk about the vegetation canopy so the vegetation canopy representation
[24:21] is important to understand for the storage and how moisture is stored within the canopy so what happens is precipitation falls
[24:31] the canopy the leaf area index captures water and whatever does it whatever the canopy does not capture is considered through
[24:39] fall and that's precipitation that exceeds the canopy storage storage and then that then is repper that then
[24:48] goes into the land surface scheme whatever the canopy captures in storage is either evaporated or transpirated okay
[25:02] okay so when that precipitation falls through the canopy then if it's snow then we have a snow
[25:09] simulation module so snow that's um captured within the vegetation canopy again is directly related to the leaf
[25:18] area index but snow on the ground is captured through a two layer energy balance model so what i mean by that is that there is
[25:30] a thin surface layer that the snow falls upon and then there's this pack layer and then the
[25:36] energy is transported between those two and so albedo and snow pack size evolves as the snow ages
[25:44] and so when you have snow that occurs then you know dust or dirt gets on top of the snow and then that actually
[25:54] changes how the snow holds in energy the albedo of that and so and how snow is actually the changing in
[26:03] albedo and how it's compressed and how that all changes how the energies flow flows within the snow and this requires
[26:11] calibration of these uh snow parameters such as surface roughness and albedo okay and so as i mentioned before there is
[26:25] we can distinguish between liquid or rain and solid snow precipitation precipitation and vic does this by using a simple
[26:35] linear method to determine the percentage of precipitation that is liquid or that is solid and so we have an example here
[26:45] where we set a rain minimum being zero degrees celsius meaning that's the minimum minimum temperature that rain can occur at and
[26:55] then we have a snow maximum which is the maximum temperature that snow can occur at at and then between those two values
[27:03] percent snow or percent rain is then linearly interpolated between those in this example if we have a temperature that is
[27:12] 0.5 degrees celsius then that would produce 75 snow and 25 percent rain so now that we've covered the snow
[27:20] processes and and everything now we're going to dive into this uh the embattled transpiration simulations so the
[27:27] simulations that vic uses for evapotranspiration is the physically based penman-monteith approach where we have surface roughness or radiation and
[27:37] all that that is driving the the evapotranspiration processes when we're simulating et these are made up of three components we have our wet
[27:48] canopy evapotranspiration we have the dry canopy transpiration and then we have a bare soil of apple transpiration
[27:57] transpiration so what i mean by between all those three is in the wet canopy we have straight evaporation so water uh turning
[28:04] into water vapor in the dry canopy we have the canopy the the vegetation actually transpiring the water so bringing the
[28:13] water up from the soil and to the leaves and then transpiring it and then within the bare soil we just have straight
[28:19] evaporation that occurs by evaporating moisture within that top soil layer and so the bare soil calculations are
[28:30] very similar to the penman monteith approach but they're they include resistant terms and that account for the soil atmosphere
[28:37] moisture transfer okay okay so next we have our parametrization of soil so this is a very important part
[28:46] within the model because this is where a lot of the this this governs how much water is infiltrated into
[28:53] the soil column how much is surface flow and the different base flow and soil moisture how those fluxes occur
[29:05] but in general the soil information is poorly known so what we do is we use a pedo transfer
[29:12] function function and this is taking information that we have and turning it into what we need and so we have data on soil texture and
[29:23] information information from usda soil classes and we take that information and make assumptions and turn it into these physical units like
[29:32] bulk density fuel capacity and wilting point point and so um solar texture against the soil texture information is really important
[29:43] to to uh uh parameterize the soils within the vic model model but again it is based on assumptions and
[29:54] may not necessarily be represented representative of some of the physical processes okay okay so when we parameterize the soil
[30:07] information then we distribute the soil column into different layers so we can theoretically define an arbitrary number of soil
[30:20] layers but typically we have two or three layers so the model actually requires two soil layers and this is for the water balance
[30:28] calculations calculations and then the soil the model when you we run it in energy balance mode then it
[30:34] takes three soil layers again there's no theoretical limit but two or three are typically used and so
[30:44] within three layers here's some example um depths that are used within the nldas and gldas models when we're calibrating our model for our
[30:57] specific case then we have to adjust the lower two layers to make sure we're really capturing those and we'll talk
[31:06] about this a little later but the lower two layers actually define how much base flow occurs or what have you
[31:15] within the model we also define rooting depths and these are independent of the soil layer depths and again these are user-defined so
[31:22] these define how deep different land cover classes penetrate into the soil column how where where the water is being taken up
[31:32] for the transpiration calculations typically rooting parameterization is taken from literature or estimated and so there are quite a bit of studies done
[31:43] that look at the different routing depths depths across the globe and so we can take those and apply them to our model for
[31:50] our specific regions so here we're going to discuss how the soil runoff and infiltration is parameterized so
[32:05] so this this soil run surface runoff and soil infiltration is defined by the variable infiltration curve hence the name of
[32:12] variable infiltration capacity model this variable infiltration curve was defined by wood at all 1992 and this is a non-linear function that
[32:25] scales maximum infiltration and fractional saturated area and this allows us to enable runoff subgrid runoff calculations so the
[32:37] curve is defined by a infiltration parameter this b sub infiltration and this parameter is typically 0 is
[32:48] greater than 0 but no typically no greater than 0.4 and this defines the amount of infiltration capacity relative to the
[32:57] saturated grid cell area and so once a saturated grid cell or once the saturation of the grid cell
[33:08] increases above that infiltration curve then that's considered surface runoff and so by by producing a greater value of that b
[33:19] infiltration yields lower infiltration and more runoff and so this is a parameter that's typically calibrated within the model
[33:30] so subsurface flow or base flow is estimated using the arno baseball model and so this is a function of soil
[33:38] moisture at the lowest layer so these are defined by a couple parameters in the model where where base flow is linear at low soil moisture
[33:50] content and so this reduces the responsiveness of base flow during dry conditions conditions and then the base flow is
[33:59] transferred into a nonlinear relationship relationship at high soil moisture contents and so that produces rapid base flow during wet
[34:07] conditions conditions and so we can see here on the bottom right that we have a turning point
[34:13] defined between this dsdm and wsw-2 where where once our soil moisture hits that point then it turns into a non-linear base
[34:24] flow and here we're going to discuss how this base hole is actually formulated so it's important to understand these base flow
[34:33] dynamics and parameterizations when we're calibrating model so that way when we we run our calibration process then we're
[34:42] understanding do these values actually make sense so there's a link here that you can go to that's a spreadsheet where we can
[34:50] estimate our base flow for different model uh parameterizations parameterizations so we assume one time step t1 to t2 at
[35:00] the low soil moisture layer and our soil moisture is increasing from 300 to 310 millimeters so this table
[35:08] finds the change in base flow for that time step at different parameterizations and so here we can actually tweak our baseball
[35:16] parameters and see how that actually changes our baseball values for for the different days and then these values like the w
[35:27] sub n super c we define those based on other soil parameters taken from the pedo transfer functions
[35:38] okay lastly we're going to talk about our stream flow routing so stream flow routing is important concept so we
[35:45] the vic model land surface model actually simulates our surface runoff and our subsurface runoff but we have to apply a routing model to
[35:54] turn that into actual stream flow and so this is typically performed after the the land surface model simulations and we
[36:03] use the lowmen at all model which was designed specifically to be coupled with our land surface model
[36:10] so what this model actually does is it applies a unit hydrograph approach at each grid cell and so we create what's called an
[36:18] impulse response function basically the time that water takes to reach an outlet for each grid cell and apply that to
[36:27] um the stream flow that we calculate or the s the surface flow that we calculate at each grid cell from the vic model
[36:36] and then this basically calculates the percent water contributed to an outlet from each grid cell at each time step
[36:43] so then we take our surface runoff for all the grid cells and then turn it into stream flow at
[36:50] the outlet as shown here on the right so now that we've talked about all the physical processes that go on within the
[37:00] model i want to talk a little bit about some computational considerations so when running the model we have to be
[37:07] conscientious of how we actually implement the model so the model is compiled using free and open source c compilers so the model is
[37:16] written in a c programming language it can be compiled using other compilers but that needs to be tested so currently
[37:24] we use the gnu-c compilers so the simulations because the simulations are run on a cell by cell basis it can be very
[37:35] efficiently paralyzed so we divide our basin into sub basins and then we can run that on parallel processors
[37:45] so the vic model is built on a unix or linux operating system so it's typically run within this
[37:51] environment and we'll see in our model setup in session three that i use a linux environment to set up the model
[38:00] and it is possible to run the model using windows but this is not supported and you have
[38:06] to have specialized software installed typically the simulations are pretty efficient they use about 1 megabytes of ram so
[38:16] because we're simulating on a good sell by grid cell basis um um so memory usage does not increase but
[38:25] the time to simulate does so we need to be conscientious of how much much uh how large of the basin we're
[38:32] simulating again the number of snow elevation bands and the number of vegetation vegetation classes that we use within each grid
[38:40] cell cell and so depending on the size of the basin two we can use a considerable amount of storage
[38:46] for input and output data again this depends on the base and size and time step if you have a very large basin
[38:53] then that's going to take up you're going to need a lot of data to run the simulations versus a smaller basin where
[38:59] you have less data so to wrap up i want to provide a couple resources that you guys can go to to
[39:10] learn more about the vic model in in further detail again this this presentation was largely focused on
[39:16] giving you a brief overview and so if you want to learn more please visit these websites so the current vic website that's where
[39:26] a lot of the documentation is currently stored stored and also on the routing model they have a another website
[39:33] and we can all there's also two links down at the bottom to actually get the source code and this is the
[39:42] the actual files that we need to use to run the model okay okay lastly here are some references
[39:51] for you to look up based on what i went over in the presentation thank you so keel the first question here is can i
[40:09] use the wick for reservoir management i think the short answer is yes but kale can yeah hi everyone um
[40:19] you you theoretically can so i didn't touch upon this in this first session because you know again the first session was
[40:26] focused on just giving you a brief overview but you can specify you know further further lakes and wetlands within the model
[40:36] and this is a little bit more advanced topics within the model because it takes a whole lot more parameterization and it
[40:42] was added in as somewhat of a um it was a follow-on development to the original model but yes you can use it for reservoir
[40:55] management and understand there's plenty of papers out there that use vic modeled stream flow as input parameters into the reservoir and then
[41:06] calculating reservoir change volume and everything like that okay second question yeah yeah so i guess we'll just go through
[41:23] each um each question here um so the the next question is what are the areas of tropics where snow is not
[41:33] experienced is it possible to turn this off off short answer is no you cannot turn off the snow model
[41:41] so the snow the snow model is actually really important to calculate those energy and water balances especially at
[41:48] high latitudes and mountainous regions but but if you're modeling something in the tropics tropics say say the mekong
[41:59] basin then or the lower mekong basin then the temperature's too warm and theoretically no snow falls so there's
[42:08] going to be no snow accumulation within the model okay and uh here question three what is it meant what is meant by lapsed
[42:26] temperature temperature so um what i mean by uh elapsed temperature is hold on let me make sure i pull this up and get the
[42:35] right answer here um um so it we have we have a lapse rate in atmospheric sciences we have what's
[42:44] called a lapse rate which is a relationship between altitude and temperature temperature and so basically what we're doing here
[42:52] by what i say by lapse is we we use those those elevation bands and say here's our mean
[42:59] temperature for our grid cell here's our mean elevation for our grid cell cell now if we move our
[43:08] if we move our elevation up say 100 meters what's going to be that change in temperature temperature from
[43:16] from that mean elevation 100 meters up and so that's what we mean by lapse temperature okay here uh question four is the model
[43:36] useful useful if there are groundwater springs and a river since it doesn't look at channel flow or
[43:42] ground water below soil level two um um so it depends on the type of spring that you have so i'm if you know the spring
[43:52] is is you know an ephemeral spring that is fed by base flow then yes the model will capture that
[44:03] if the spring is say an aquifer spring or what have you then the model will not capture that
[44:10] because it does not consider that deep ground water okay okay so next question is question five so
[44:24] what do what do i mean by the climate sensitive areas um and so this was in reference to
[44:30] um talking about the parameterizations so um in climate sensitive uh regions um we want to make sure that so
[44:42] for example in high latitudes right there's a lot of different processes that that um that occur that
[44:51] the model will need specific parameterizations parameterizations to capture and so um um when you're when you're simulating an
[45:00] area area that that um um that's pretty sensitive to um precipitation or temperature for example like the high latitudes are
[45:12] pretty sensitive to temperature which the permafrost and snow and accumulation are sensitive to you know few changes in
[45:21] degrees temperature then we need a very detailed parameterization to actually capture those processes so the question six is can we take help
[45:35] from you regarding rick so um as as uh caleb mentioned greek itself was developed developed by university of
[45:45] washington washington and and they have source codes they have a forum and they you can also get help from them
[45:54] regarding the vic model what the what we are trying to do is that we take week as is
[46:02] what kale has shown us is what the processes are and then next week we are going to talk about how to to get input
[46:09] data from uh nasa remote sensing so the main purpose is that you take the vic from university of washington um
[46:18] download the code you install it on your computer computer but it's not always easy to get input
[46:24] data data for week for all the river basins or watersheds so here is one mechanism that you can
[46:31] use use remote sensing or earth system models to force wick and then you look at the output so
[46:40] we can help with this in the sense that uh you will have this presentations and recordings for reference how to
[46:49] prepare and run a model for vic itself um it's the side that is the model itself you me uh i mean you
[46:59] you can contact university of washington um um they have a help help forum i think uh kale you can add to
[47:09] this this yeah they they have a help forum where you can sign up and you can send an email and it
[47:15] will send an email out to everybody um and and there's a lot of typically the university of washington people answer
[47:23] very quickly if not someone else that's been using the model has will answer so if you want help with the vic model
[47:37] definitely sign up for that that email list serve okay question seven is the vic model capable of running on a
[47:56] low power cpu such as single core um um i think i'm pretty sure it is so the um
[48:07] the vic model is pretty um it's pretty efficient model when you look when you actually look into the
[48:13] code and so the i don't think it should run out of memory memory and and it may just take more time
[48:26] another consideration to have too is the vic model is pretty heavy on data storage so you have to have some um
[48:36] a lot of data storage space to run some of the models depending on the size of your grid cell
[48:44] and basin okay and question eight here is do we need samples for soil samples so i'm assuming you mean do
[49:03] we need to go out into the field and collect field field samples for soil you can do that um i think that will
[49:17] definitely help with parameterizing your model uh uh what you you can use there's a lot of data sets out there
[49:29] that you can use to parameterize the model on the soil side and they do a fairly good job
[49:36] and so amita next week will talk about some of the data that we have used to parameterize the soils
[49:45] in the model and but with with the caveat is you have to to actually calibrate some of those
[49:53] parameters parameters so going out in the field will help you estimate those parameters initially but we can also calibrate
[50:03] those parameters as well so uh question nine is what are nld and gl does these are north american
[50:20] land data assimilation system and global land data assimilation system system if you want more information on asset website there is a
[50:34] pre-recorded webinar this is fundamental session 2b it describes nlds and gl dash a little bit and big is part of both
[50:43] these models so that's why they were mentioned all right question 10 here this means vic has limitations for base
[51:03] flow flow i'm not sure what you mean by limitations the model as we saw has somewhat of a simplistic
[51:17] representation for base flow so base flow is a function of soil moisture at the lowest so the lowest soil layer
[51:28] um um but but when you parameterize the model you can specify the maximum amount of base flow that can
[51:38] occur within a day so so and then so what you do is you you set that maximum base flow
[51:47] and the model will scale how much base flow occurs per day based on that maximum base flow
[51:55] so theoretically there can be no limitations you can say like it's a hundred hundred millimeters per day
[52:03] or what have you that's a lot but but again when you when you specify that much if you have low soil moisture then
[52:09] you're going to get low baseball values and this uh the base flow so parameterizing the soil depth and your
[52:24] base flow parameters like maximum amount of base flow and when that non-linear baseball occurs is pretty important one
[52:32] of the main parameters you calibrate for the model okay question 11 here so about the soil column and slides 18 and 19
[52:44] what if we have permafrost in the regions so um i didn't talk about this because this is getting into some of the more
[52:51] advanced vic model topics vic actually has a scheme to calculate frozen soils typically typically you don't have to play around with the
[53:03] parameters that much to calculate this or to tune the frozen soil model again this is part of that energy
[53:13] transfer right so the soil is going to hold energy or release energy right depending on the moisture and all these
[53:20] other parameters and so when you're in a permafrost region it will actually calculate that there's going to be frozen soils and then that
[53:31] affects the like infiltration and surface runoff and all that because your your moisture flow within that soil
[53:43] column is going to actually be hindered by that frozen part question 12. if i understand correctly the vic model combines both saturation
[53:56] excess runoff and infiltration excess runoff so i'm assuming what you mean there by saturation excess runoff is
[54:08] is that your soils become saturated you have ponding on the surface and then what's left over is considered
[54:16] runoff runoff if that's the case then yes that's that's how that essentially how the the variable infiltration
[54:27] curve works and the infiltration excess runoff i'm assuming you mean within the soil column and and if that's the case then yes we do have
[54:39] uh infiltration so if there's excess soil moisture within the column then we have more basal that's occurring and so we so that
[54:50] base flow is also called subsurface runoff okay question 13. i have windows operating system can i practice this
[55:06] model using this operating system yes you can again the the model was built in a linux system
[55:20] so i would highly suggest if you are able to use a linux operating system than that you use that
[55:28] but if you do have a windows machine you can compile and run the model using a program called cygwin
[55:39] if you are to use cygwin then you if you use sig wind then make sure when you install
[55:50] the program you have the gcc compilers installed along with it okay question 14. um um how can we connect this model
[56:06] with regional climate model so there are short answer you have to couple the models and i do
[56:16] not have experience with that um um there are examples um i'm blanking on the name but you can
[56:25] search it the um the university of washington had a project where they were coupling the vic model with a wharf model
[56:39] and producing outputs for the arctic region and so that i would suggest if you want to use this
[56:50] the vic model with these regional climate models then you look into that as an example so um
[57:00] because wick is a grid based model um it it is somewhat easier to couple it with climate model if you look at nldas and
[57:10] gl gl and there is a web there are websites for that ldas.jsfc.nasa.gov um um they they they show like climate models is used as
[57:24] forcing whatever comes from out from regional climate model is used as forcing for a weak model so running weak model with climate model
[57:33] output is relatively easier if you want to truly couple it so uh energy and water flux is going back to
[57:42] regional climate model requires a little more work uh you have to take care of certain physics physics and
[57:50] and so that's beyond the scope of this webinar but this information is available from ministry of washington
[57:56] also if you look at nldas in geodes based based publications you can get this information okay question 15 does vic have routines
[58:12] to simulate tile drainage typically found in midwestern u.s reservoir wetlands and agriculture activities um um i'm not sure
[58:25] i'm not sure what you mean by title drainage i'll have to look that up and and get back to you
[58:32] okay so question 16 here how do we use vic models and couple them with gcm models models um
[58:41] um i think we kind of touched upon that for uh uh i think it was question yeah so just like in nldas and gldas um
[58:52] if you visit that website um you will have some more information so it is really any gcm would provide
[59:04] inputs for weeks such as precipitation or weather data also vegetation soil moisture all that either can be specified or they can come
[59:15] from a climate gcm coupling part that you feed back uh energy and water flux is soil moisture evapotranspiration back to
[59:25] the climate model that requires a lot of work and skill both so uh best way to review that is to
[59:35] review nldas and glass literature how they do it so there's also a question can you show some exercise with rough data and that
[59:46] is what we are planning to do uh in next two two sessions we will start with downloading
[59:52] data that go into vic and and that is the next session and the last session then we will care will show
[1:00:03] how how these these data are put into wake and how the model itself is run so we're going to use the mekong basin as
[1:00:12] an example for that also also one clarification here is that what we are showing here is that if you
[1:00:23] want to use rig for water budget estimation or water resources management management or to monitor flood or drought
[1:00:34] um you can use it stand alone without really having to couple it to any regional or global gcm or climate models
[1:00:44] you can get forcing data from nasa earth science uh uh system models and also remote sensing satellites so
[1:00:55] that that is the major part of this session that without coupling with any other gcm or climate model how can you
[1:01:05] run rick by itself getting forcing from satellites and models models and that way you can quickly look at
[1:01:16] what budget components over your area of interest and also if there is you can look at history
[1:01:25] over your region and then looking at the flux is coming out of which you can see whether it's
[1:01:31] whether it's flooding or drought conditions or there's excess of water or deficit of water okay so question 18 here
[1:01:44] we have um is it possible to run the model with regional local data the answer is most definitely yes
[1:01:53] so you can pre-process your data your like precipitation data or or what have you land cover data and use that as inputs
[1:02:06] into the model what we are showing you here is specifically how to use nasa data data as inputs into the model
[1:02:19] and in particularly for data sparse regions regions so so you know part of the severe program is
[1:02:25] we work in developing regions and so we really focus on you know producing data where there is no data
[1:02:36] and so that's part of why we're using these nasa and showing these nasa satellite satellite data inputs into the vic model
[1:02:48] question 19 is recommendations for virtual machine software to run the vic model on windows 10 platform my
[1:02:58] my personal favorite because it's free and open source is virtualbox and and they have some nice it's it's a fairly easy
[1:03:12] interface interface and they have some resources online on how to use it and everything um so i would suggest that but there's a
[1:03:21] whole whole a whole lot out there so the next question do we have to download the week model prior to the
[1:03:31] next session um actually uh you don't have to uh we are going to just demo this is more of an
[1:03:39] introductory webinar and from the question answer that we just received earlier it looks like many people have not heard or used vic before
[1:03:51] some of you have heard but not used it and some of you are using either swat or
[1:03:56] hackers or weep or other models so idea here is to just learn how to get input data put into wake and analyze
[1:04:08] output so it's the emphasis is more on getting input data which may not be available any everywhere in the world if you have
[1:04:18] in situ data if you have a well calibrated uh regional model that gives you forcing that's good but if you
[1:04:27] don't have uh in c2 data or you don't have you are in data sparse region then you can still
[1:04:35] run vic with nasa data so so you can download model if you like just to try it but we our sessions will not
[1:04:45] involve running the model at this point um if you are interested in the sufficient interest we can definitely
[1:04:52] plan an advanced training later on and and walk everyone through big setup and week running okay so question 21 here since vic
[1:05:10] conducts an energy budget at this oops i think i lost the questions okay there we go since vic conducts an energy budget at
[1:05:20] the surface doesn't mean nasa provides a net radiation product so so net radiation can be an output from the
[1:05:31] vic model but but the the there's i think a couple different nasa net radiation products available from
[1:05:41] actual remote sensing data sets um um so it yes nasa does have surface radiation budget data and i'm trying to find the
[1:05:58] i i want to say langley provides that i'm just going to try to website here that okay so while meat is finding that
[1:06:20] she'll she'll put in the um the link to question 21 so that way you can find that net
[1:06:29] radiation data product from nasa we'll move on to question 22 and is there python integrated version of vic
[1:06:37] available so so yes there is right now we are so what we're going to be showing is the
[1:06:51] c version so you have to compile the model and then run the model um using that compiled executable
[1:07:01] there is a python version where they have python bindings to those c libraries libraries but i haven't used it
[1:07:10] so i'm not and from what i read online from university of washington it's still in beta testing
[1:07:18] my my best best suggestion to use if you want to use python python you can use python to format the data
[1:07:27] sets sets and and set up the model and then you can run the model using python as a wrapper
[1:07:36] if that helps question question 23 is how to decide soil column depth and parameterization um so initially
[1:07:57] um initially you kind of just guess really really so i mean you look at your region and
[1:08:07] you say here's what i believe is you know the best soil column depth depth parameters parameters and then
[1:08:17] when you do your calibration process your your the soil depth so the lowest layer of the soil column is definitely a
[1:08:28] parameter you want to calibrate within vic vic because that's going to be that's going to affect that base flow or subsurface
[1:08:35] runoff runoff that the model calculates and so you're going to need to calibrate that so question 24 is how accurately can
[1:08:52] this model work and what are the maximum area of water bodies that can be applied accurately so um
[1:09:02] i've seen the model be extremely accurate and that's for a a [Music] [Music] very fine-tuned regional application
[1:09:14] right now we have a nasa pi who's working on a project and he's getting flood forecast values
[1:09:22] or sorry flood and outcast values of within order of 30 centimeters from actual actual values values that's what i i would consider that
[1:09:33] fairly good um um especially for a macro scale model um um so also um there is model calibration
[1:09:43] involved in there or yes yes there there so that is uh an extremely calibrated model and then
[1:09:51] i'll touch upon calibration in session three so um i'll show you guys a a quick calibration process
[1:10:01] and so that way you guys can can see how like kind of how that works and talk
[1:10:07] about which uh values you calibrate um um and so it was yeah so it can be fairly accurate
[1:10:19] and depending on your application you want to again calibrate it but if you just provide initial guesses
[1:10:29] then it can perform pretty poorly and also too i want to note that the model model results are actually going to be pretty
[1:10:38] heavily dependent on model inputs yeah so go ahead sorry oh i was just going to say still on 24
[1:10:48] um the model results are going to be pretty uh dependent on model inputs so if you are using
[1:10:56] um um like highly accurate precipitation data then your model's probably going to perform fairly well as long as it's
[1:11:05] calibrated if you have like poor precipitation inputs then you may not get the best results so question 25 is please mention some
[1:11:18] applications of with model with examples we're going to do that in session three we are going to
[1:11:24] show some of the applications where week is already used in some case it's used operationally to look at flooding so
[1:11:34] we'll definitely show that in last session um question 26 is about using vic for water quality um i think you can infer
[1:11:48] runoff and if you have vegetation but i don't think you can have water quality parameters in wick
[1:11:55] right kim yeah that that's correct so the models focus specifically on moisture and energy balance components and
[1:12:06] again if you want to calculate water quality you can infer those from land use change and runoff
[1:12:12] um um but but that's similar to how the swap model does it but there's not really really any methods for that right now within
[1:12:23] vic so uh question 27 is are there any limitations of the model if we work in an arid or semi-arid area
[1:12:37] like northern africa egypt the question or i would say no i don't i don't think there would be a
[1:12:47] limitation of the model particularly because you can the nice thing about the vic model is you can really really
[1:12:58] parameterize it towards your region they give you and you will see in session three they give you basically
[1:13:05] full reign of how you set up the model and so you can set it for um your
[1:13:10] regional studies um and so i i think i've seen some applications in semi-arid regions and the model performed fairly well but i
[1:13:19] don't know if they have seen any specific applications in north africa or egypt okay so question 28 here is is the vic model
[1:13:33] useful for reconstruction of paleo hydrology hydrology i would consider it yet i would say yes again again it's really dependent on your
[1:13:44] input data so if your paleoclimatology data if you have confidence in that then definitely use that payload climatology
[1:13:54] data as inputs into the vic model since the vic model is a physically based model the when you run the model the physics
[1:14:07] aren't going to change depending on time so it theoretically should be used and there's a lot of studies that use the
[1:14:13] vic model for future climate so so there's definitely been applications where it's been used for that so i don't
[1:14:21] see any limitations why it shouldn't be used for palo hydrology okay so question 29 since the vic
[1:14:38] vic model is run on a cell by cell basis how can we effectively calibrate all those parameters at a grid cell
[1:14:45] and can we kindly elaborate on how the calibration was done in previous experiences experiences so um there's there's quite a few
[1:14:57] calibration strategies out there um there's there's a lot of literature out there on how to like different methods
[1:15:05] for calibrating um the most common method is what's called a cascading basin approach and what that means is
[1:15:16] you have a outlet for a sub watershed and you calibrate and so you basically go to the upper reaches of your basin
[1:15:25] and you calibrate for that the upper subwatershed subwatershed and then use and then you have your then
[1:15:32] you have lumped parameters for that subwatershed subwatershed and then you apply that um you you then move to the next sub watershed
[1:15:44] and you calibrate for those parameters that only contribute to that sub-watershed keeping that initial calibration parameters from the upper
[1:15:54] reach and you just keep stepping down each sub-watershed and calibrating those those grid cells that contribute to that
[1:16:02] outlet outlet that is a very common approach that's used used widely and so that way you're you're essentially
[1:16:13] ridding the need to calibrate each grid cell cell but your effect adding in more distributed um information within the the larger basin
[1:16:29] so question 30 here is can the vic model be run a monthly time step uh uh answer is no
[1:16:37] the lowest time resolution you have to run the vic model at is daily um um what i've done for the model
[1:16:46] is run daily and then aggregate results to a monthly time step question 31 is can the vic model be used
[1:17:04] to estimate water availability and appropriate these for multiple various uses within the watershed um um so the first part of your question is
[1:17:17] yes the vic model can be used to estimate water availability so the big component of vic is you're
[1:17:25] simulating the water budget at each grid cell cell so you can understand soil moisture snow water equivalent surface runoff
[1:17:34] evapotranspiration so you're getting all those components of the water budget but whether so one limitation of vic is that it
[1:17:45] assumes that it's a natural system so so when you have these reservoirs within your basin and everything you have to
[1:17:56] the vic model doesn't know that that's a human-induced reservoir or how that water is being used um there are
[1:18:08] instances where there is um um where the where the model has been used to estimate irrigation and everything and how that affects the
[1:18:21] um the water balance and so it it can be used for that but at the baseline vic model like the vic model
[1:18:32] that you get offline and everything that is um that is only for for natural systems so what kell is trying to say is that if
[1:18:51] you have a specific um you have a dam or a reservoir or in your region you have to get this weak model
[1:19:02] and then have additional management component into it and it is still a part of research that you do and then
[1:19:12] make use of it this one is just taking natural inputs natural forcing so question 32 to which extent does vic
[1:19:28] enable enable parameterization for inferring underground water storage um so i excuse me sorry um so i want to
[1:19:46] make a make a clarification here so there's two components to underground water storage there's a shallow uh water storage which is like
[1:19:56] um up to two meters um so you have your soil moisture and root zone soil moisture so the vic model actually estimates
[1:20:07] those your soil moisture at each layer in the soil column and then your total root zone soil moisture
[1:20:14] that is available for plants uh the deep water reservoir reservoir is is not considered within the model
[1:20:27] and so the vic model cannot be used to estimate those but there are methods out there to estimate groundwater recharge
[1:20:42] based off of base flow and um low soil are the lowest layer soil moisture but the vic model does not consider that
[1:20:57] you have to calculate you would have to run the model get the base flow data and then
[1:21:02] estimate the groundwater recharge offline um so question 33 can the vic model be used to determine water scarcity areas
[1:21:21] um um so i'm assuming so i guess there's two compo i'm understanding this question two ways so
[1:21:29] one is can the model be used to determine water scarcity within an error then yes the model
[1:21:37] will be able to estimate whether or not so again it does a water budget um um it does a water balance model and so
[1:21:46] it's calculating how much water is available in each component of the water balance so you're you're looking at basically your change in
[1:21:54] storage your inputs how that how those different components are being used within a natural system so yeah you can identify whether or not
[1:22:02] there's there's water available for certain processes now if you want to use the model to determine water scarce areas
[1:22:11] areas that do not have enough water then i think yeah you can infer those areas from the
[1:22:17] model model if you look at say like evaporative stress you know the amount of precipitation versus the
[1:22:29] um versus the amount of potential evapotranspiration evapotranspiration then you can use that you can look so that's and that's basically an aridity
[1:22:39] index index right how much water do you come how much water is being put into the system
[1:22:44] versus how much demand is there for that water water so you can use the model for that but
[1:22:48] again those are all kind of inferred and calculated after the simulations are done okay last question question 34 if i
[1:23:06] would like to run the vic model image driver and specific watersheds in peru forcing with wharf climate outputs
[1:23:15] what can you recommend is best strategy to manage data inputs and calibration procedures in this complex geography
[1:23:24] geography um um okay that's a that's a tough that's a that's a very good question so managing data inputs so the vic model
[1:23:35] the image version of the vic model everything everything is handled via netcdf data sets so so i would
[1:23:48] if you're worried about data storage or what have you then um then that cdf has a compression level
[1:23:56] that you can set um um and from what i remember is you have your soil parameters your vegetation parameters
[1:24:04] and different net cdf files and then you have your precipitation or your forcing as a separate net cdf file
[1:24:13] so i think the data management actually becomes very manageable using the image driver but the calibration procedures
[1:24:24] i would suggest that you especially because peru is it has a lot of terrain it's a very
[1:24:33] it's very dependent on the snow snow snow runoff for water that you should really look at not only calibrating the model but also
[1:24:45] um bias correcting your inputs if needed um um so you're using warf data on or your warf outputs i'm not
[1:24:59] you know depending on how well your your model is simulating the temperature and precipitation precipitation that's going to really affect how much
[1:25:08] snow is actually accumulating in those areas areas and so that's going to be a big component of
[1:25:14] the water balance within peru and so i would i would check whether or not the wharf model is producing
[1:25:22] correct results if not perform some bias corrections corrections and then and then calibrate the vic model parameters based on that
[1:25:31] i won't touch upon this a little later but because vic is typically you calibrate soil parameters but you can also
[1:25:41] calibrate snow parameters within vic such as when when wind precipitation is considered liquid versus solid and also your albedo for new snow versus
[1:25:55] old snow and and snow roughness like surface roughness and so those parameters are also going to affect your
[1:26:05] um um how how the vic model calculates these changes within snow and so i would highly suggest looking
[1:26:14] into into calibrating those snow parameters along with the soil parameters especially in peru i hope that answered your question
[1:26:30] yes thank you so much for attending this session and thank you for such great explanation of big processes
[1:26:38] and features and answering all the questions questions so so we will see you next week at the same
[1:26:44] time we will be talking about how to prepare input for weak model so so thank you again for attending this
[1:26:52] session and a recording of this session will be available soon on our website thank you everyone
