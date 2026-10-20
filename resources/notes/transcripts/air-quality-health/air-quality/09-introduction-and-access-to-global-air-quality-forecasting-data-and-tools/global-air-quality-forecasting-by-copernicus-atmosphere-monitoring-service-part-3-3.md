# Global Air Quality Forecasting by Copernicus Atmosphere Monitoring Service, Part 3/3

`https://www.youtube.com/watch?v=hS0jzXIxBJQ` · id 236 · 2:00:05 · module 30 — Introduction and Access to Global Air Quality Forecasting Data and Tools

[00:00] hello everybody my name is mark parkinson and i'm a scientist at the european center for meteorology weather
[00:05] forecasts and i will be giving this lecture as part of the series of lectures um on the introduction and
[00:11] access to global air quality forecasting data and tools and my colleague chris stewart will be giving a practical
[00:17] session after this lecture um um so you will already have seen the previous two sessions in the agenda which were on air
[00:32] quality basics and the nasa geos model this third session will be on the the european center for medium range
[00:39] weather forecasts modeling um as part of the concern because atmosphere monitoring surveys or camps and the learning objectives for this for
[00:49] this session are to be able to identify the different atmospheric composition and air quality relevant data sets
[00:55] available from the copernicus atmosphere monitoring service to understand the difference between forecast analysis and re-analysis to understand how satellite
[01:03] observations are used for forecasting re-analysis and evaluation and to discover how to subset and visualize re-analysis and forecast outputs
[01:14] so as i said this is session three on global air quality forecasting by the copernicus atmosphere monitoring service
[01:22] so i'd like to start with this slide which gives us a sense of the the spatial scales that are involved when it
[01:29] comes to uh uh impacts of atmospheric composition and air quality um and why we need to monitor and why we
[01:38] why did we monitor it so these um these nine images are showing different aspects of atmospheric pollution
[01:46] in terms of local local spatial scales on the left so that's local scales less than 100 kilometers so
[01:54] things like um disasters such as fires in industrial complexes things like urban smog so really at the
[02:03] street level but then also plume dispersion dispersion from point sources such as power station chimney stacks and other
[02:12] other types of point sources in the middle column uh we're looking more at the regional scale which is
[02:19] horizontal spatial scale of between 100 and a thousand kilometers and in this case we have aspects such as
[02:27] impacts on visibility and radiation um regional smog so this is urban smog or the atmospheric pollution at the more
[02:37] national or regional or continental scale um and this could also include um things like acid rain and then finally at the global scale in
[02:47] the right hand column we look at things like the ozone layer and the antarctic holes on hull which is currently going
[02:54] on now in towards the end of september of this year um but then also things like climate forcing of different
[03:00] pollutants and biogenic biogeochemical cycles including things like the carbon cycle and larger scale global scale processes that affect the
[03:11] atmosphere atmosphere so we do this at ecmwf and i just like to give a few uh pieces
[03:18] of information about about why we do this at each mwf and who we are in fact so at least nwf which is the european
[03:26] center for media range weather forecast our role is to address the most critical and most difficult research problems in
[03:33] medium range numerical weather prediction or weather forecasting and these are problems which no one tackle and because no one country would
[03:42] be able to tackle on its own so we're in an organization that was created in 1975 and we consist of 34 member and
[03:50] cooperating states uh we're basing reading in the united kingdom but we have partnerships all around the world and more information
[03:57] can be found through our website which is given by the link there um ecmwf contributes to the copernicus
[04:06] program through a couple of different services services um so copernicus is the european union's operational earth observation monitoring
[04:14] program program um and what it does is to launch some satellites which are called the sentinels and they're shown in
[04:22] silhouettes on the left there and data from these satellites which measure all different aspects of the earth system including the land surface
[04:31] the marine environment as well as the atmosphere atmosphere the these observations provide are fed into into value-added services which are listed in
[04:40] the right so there's six of these services from atmosphere climate land marine emergency and security and the two that are
[04:48] surrounded by solid line boxes there the atmosphere and climate services are both implemented and operated by ecmwf and we
[04:57] also contribute data and part of the service to the emergency management service related to flood forecasting and
[05:03] fire danger forecasting and one of the bottom lines for the phoenix program is that these services are user driven and
[05:11] all the data is free and unrestricted and available to anybody that wants to use it so in the
[05:20] atmosphere monitoring service we have a portfolio which covers a fairly wide range of information products products related to all aspects of atmospheric
[05:30] composition these include surface fluxes and emissions inventory through to operational forecasts at the the global but also the regional scale for europe
[05:42] and looking at air quality and the ozone layer layer and we also have various applications in terms of solar radiation and climate
[05:51] basically forcing and this is all provided by one consistent system and the whole thing of the components atmosphere
[06:00] modeling service or the whole operation of it is based on a large european consortium including 196 different entities across
[06:11] europe europe and more information can be found on our website and the link is given at the top
[06:16] of the slide so one question uh we have to raise is why do we need something like cams why do we need a
[06:24] service which takes in satellite data and provides then additional information and this is an example showing nitrogen
[06:33] dioxide tropospheric columns observed by the copernicus sentinel 5p or tropomy um satellite and this is an example from october 2018
[06:45] and we're we're looking at in in the blues greens and reds the um no2 no2 values but in black we have repeat
[06:55] we have regions where there are no observations this could be due to cloud contamination contamination and the satellite not being able to see
[07:03] the surface um but it could also be due to some artifacts in in the in the observation and in the retrieval
[07:11] and and extracting the information on no2 in those particular pixels and this is a scene that's looking over eastern europe
[07:21] so these observations are essential and really important however to directly make use of them it can be quite limited and can be quite
[07:30] challenging challenging as i mentioned these black these black areas in the image are showing gaps in space and time
[07:38] that the observed quantities may not be directly relevant to to our application or to how we want to use them so for
[07:43] example this is a vertical integrated tropospheric column but it does not necessarily directly relate to the the surface concentration
[07:54] and plus also this is only one scene from one instrument and there can be complex and numerous
[08:02] data available and getting into the terabytes of data so what cams does is to blend these observations not just from satellites
[08:13] but also from non-satellites with with a model to provide a consistent three-dimensional state and by doing this we can then initialize
[08:22] forecasts and predict atmospheric composition air quality a few days ahead but we also then run re-analyses re-analyses which cover the past years or decades
[08:32] with a consistent framework and more information will be given on these uh the differences between these as the lecture goes on
[08:43] so in cams we have an information flow that looks in simple terms something like this so on the left we have
[08:50] earth observation from satellites currently this is about 75 different instruments instruments but also we use in-situ from regulatory
[08:59] or research measurement networks to to to provide additional information in terms of validation and additional constraints on the system
[09:09] this data feeds into first of all our main operational data simulation the modeling system this is the
[09:17] the ecmwf integrated forecasting system and this we operate at about 40 kilometer spatial resolution operationally but now for our reality
[09:27] that 80 kilometers um um these global forecasts are then used to provide the boundary conditions for not a nine member ensemble of regional
[09:38] air quality models over the european domain and then information from both the the global and regional forecasting systems are used in various
[09:50] applications so there are applications for policy related products for for regional air quality in different cities across europe our data is also used by
[10:02] various air quality apps such as windy.com breedometer and plume labs and our air quality forecasts are also
[10:09] featured regularly every day on on euro news for europe but also cnn international so so what what does this mean in practice so
[10:22] we have a data assimilation system we'll talk a bit a bit about data simulation shortly shortly and as i mentioned this is built on the
[10:29] ecmwf integrating forecast integrated forecasting system so in the middle here we have various control variables or what we call
[10:39] control variables and these are related to to different atmospheric pollutants so the chemistry uh the reactive gas species
[10:48] ozone nitrogen dioxide sulfur dioxide carbon monoxide and formaldehyde and then also aerosols which uh speciated based on
[10:59] their emission type and but then also we include greenhouse gases such as carbon dioxide and methane and of course this
[11:06] is a weather prediction system originally so it includes all the meteorological variables as well so to together the chemistry we include
[11:16] um um various uh different types of models and solvers for the chemistry so these solvers solve the
[11:24] the chemical equations um to give us and the atmospheric pollutants um currently we're using something called tm5 which includes 57 chemical
[11:36] species and 131 chemical reactions and this includes photolysis so reaction with solar radiation and also removal processes of some of these
[11:48] pollutants through dry and wet deposition deposition and then for the aerosol model we have 14 bins well that this is basically
[11:55] dividing up the aerosol types by the species whether it is desert dust sea salt salt organic matter black carbon sulfate
[12:03] nitrate or ammonium and then the size of the particles is also taken into account and then greenhouse gas field as i
[12:11] mentioned mentioned so so we initialize these uh the composition forecast using additional information such as emissions so gfas here i'll come to shortly but
[12:24] he's he's uh providing daily um global wildfire emission estimates but also fluxes from anthropogenic sources as well as natural
[12:34] sources we add in observations to do this we include all the information of how we translate the observation into the model
[12:44] space how we react for biases between the model and the observation and also take into account um statistics on the background
[12:52] areas in the model because this is a model and of course they are completely perfect perfect um
[13:01] um and then in terms of the output our aerosols and ozone can are interactive with your radiation this means this is the
[13:08] atmospheric radiation and so this is basically the transmission of light from the sun down through the atmosphere to the surface and then the
[13:16] outward outward radiation of the outward emission excuse me of thermal radiation um um and the aerosols and gases in the atmosphere
[13:27] interact with this radiation and can affect then the weather uh forecast through through changes in surface temperatures and and the winds
[13:38] um and in this case the aerosols and ozone are interactive with that radiation and so they can make
[13:43] adjustments to the the temperature in the model and also the then the wind and the distribution of the the pollutants in the atmosphere
[13:55] we also have chem coupling between the aerosols and the reactive reactive gases so for example nitrogen dioxide then is a precursor for nitrate
[14:06] and ammonium aerosol and this this information feeds into the aerosol so we improve our modeling of the aerosol as
[14:13] well as the chemistry um and one future development which i'm not really going to talk about is the
[14:20] development of an inversion capability and this is a system which will be able to take in these observations
[14:27] and then improve our estimates of the emissions from the surface by by taking into account the observed
[14:36] the opposite extremely observation of the uh the relevant parameters and chemical species in the atmosphere so we have a number of configurations
[14:52] and more information is given in the references here in terms of taking in observations we have have an information flow which is which is
[15:04] important for being able to make sure that we make the best use of the available observations and that they
[15:10] actually provide a positive impact and improving the accuracy of the forecasts that we provide provide so typically from a satellite
[15:21] instrument you get different levels of data which are denoted here so level one b data is typically what the
[15:29] satellite is measuring and this is some form of electromagnetic radiation either thermal infrared or ultraviolet or visible
[15:38] visible light coming from the atmosphere or reflected back from the atmosphere this level 1b data goes through a
[15:46] process called retrieval which is retrieving the amount of the different gases in the atmosphere which contribute to what is observed in terms
[15:57] of that thermal infrared or uv visible measurements and this then provides us with something called level two data
[16:05] this is retrieve parameters and that could be something like ozone or nitrogen dioxide or aerosol or a greenhouse gas
[16:16] we feed this information into our analysis and monitoring tools which are as as we've shown in the previous slide and by
[16:25] doing this we can then look at statistics over a period of time to see are there any drift how close are the
[16:32] excuse me how close are the observations to the the model and and if if any if there are any biases between them
[16:42] whether those are changing over time and this is useful information because we can feed that back to the retrieval
[16:48] teams to point out if there might be some some issues with the retrieval process or if something is missing or not quite
[16:56] correct so we can do this iteratively until we have a very reliable satellite product and one that also
[17:05] provides meaningful information for being able to predict um how atmospheric composition is changing when we have this good data we've been
[17:16] through this process of monitoring and feedback feedback um we can then feed the feed the observations into our simulation system
[17:26] and ultimately lead to including and observe them from this new observed information into our analyses and then
[17:33] forecast forecast and when we've done that we have downstream services and users all of which are hopefully very happy with what
[17:41] we're providing so in more practical terms uh this this is what that looks like so we have we're requiring data from from
[17:51] the internet and from different service providers um either from the space agencies directly or through um through
[18:00] other servers such as through the the world metrolog world meteorological organization so this goes through some so every day
[18:08] we're going through this acquisition process process um and then we're ingesting that data and putting it into
[18:15] a format that we can then feed directly into our model through the the high-performance computing that we run
[18:21] at ecmwf um um and then this is what provides us with the the capabilities to do the monitoring of the observations
[18:34] and to identify any biases or any caveats with the observations which we can can iteratively uh feedback to data
[18:43] providers okay so this is this has all been a preamble on the system that we're running to lead to the point to to give
[18:54] you more information on what what observations we're actually using and what then some actual applications of our products are in
[19:02] terms of the forecasts and analysis and reality reality so this slide is showing um an overview of the different satellite
[19:12] instruments that we're using currently for atmospheric composition applications so the table here is showing a list of
[19:21] species in the atmosphere from reactive gases ozone carbon oxides nitrogen dioxide sulfur dioxide also aerosol and then greenhouse gases so
[19:31] carbon dioxide and methane and the very bottom row is then showing the observations that we use to estimate
[19:38] wildfire emissions so if we so that in this table each of the instruments that is colored red
[19:47] is showing the data that is currently actively assimilated in cam and is actually providing information directly into our forecast system
[19:57] the ones in bold but in black as show our instruments which we are currently implementing in our system and
[20:05] which are being tested and going through this monitoring process of understanding if there are biases between the
[20:12] observations and the models and whether those biases are changing over time and then the the other ones
[20:18] just in the the plane forms um are showing instruments which are under development and which are planned for
[20:25] the future at some point so you can see we've got quite a wide range of instruments and
[20:32] species which are being assimilated um and this is this is how we provide the service that we provide
[20:42] and then this is a rather complicated slide that shows the uptake of observations within ecmwf and particularly those
[20:51] related to to atmospheric composition so this this bar chart on the left goes from 1996 up just up to 2018 and shows this very
[21:01] year-on-year almost increase in the uptake of observation and their assimilation at eastern progress so we see we go from
[21:09] um um 10 also in the through the mid 90s into the early 2000s and then that has now
[21:16] increased about eight-fold to about 80 or 90 um data products which we actively assimilate every day and then the table on the right i don't
[21:26] expect to read but it's just giving me then a list of those instruments just to give you a sense of the number of
[21:32] instruments and a number of different satellite platforms and space agencies that we work with to use their data and
[21:39] more information is provided in the the link at the bottom of the slide so i mentioned earlier
[21:46] this this process of data simulation and this means this provides us with a means of combining the information of a huge
[21:56] number of observations with our global model model and we to do that we need to take into
[22:02] account the background statistics of the model and of the observations um and so this data simulation process
[22:10] is the us with the means for bringing together the observations in the model to provide um something which is a combination of
[22:18] both and which more accurately reflects the the true state of the atmosphere and we do this by minimizing a parameter
[22:26] called a cost function which is denoted by the letter j um and it's given by this rather complicated at first sight
[22:34] looking um equation but essentially what it's doing is a least squares fit combining the information from the model background
[22:43] which is denoted by a b and then um by the observations which are denoted by um an o and or an r um
[22:54] and so if we just take note of the the uh the red words and arrows this is kind of giving a
[23:01] sense of indicating of where where these things lie so if we look at the equation on the bottom
[23:07] our analysis which is essentially our starting point for the forecast is a combination of taking the previous
[23:15] forecast and then adding some change to it which combines the difference between the observation y and the background forecast which is xb
[23:28] and to be able to do this they need to be be in the same space space and we do this through an observation
[23:36] operator and i'll talk about that in the next slide but what the the graphic on the left is showing
[23:42] is a sort of visual representation of how data simulation works so we have our previous forecast which
[23:50] is shown by this light blue arrow arrow on on the on the graph and then we have these observations that
[23:58] come in at various points which are shown by a green star and we can see there's some
[24:02] deviation uh of what is observed to what our previous forecast thought the the atmospheric state would be
[24:10] so we go through this process of minimizing this cost function to determine our analysis and then the analysis
[24:17] which is which is a somewhere between the previous forecasts and the observations um is then used to start a new forecast
[24:26] which is essentially corrected by the observations and then we see we have a more realistic trajectory of that arrow compared to the
[24:35] previous day's forecast so another way to look at data simulation is how we get the the observation to be
[24:49] comparable with the model state and we do this through this parameter called an observation operator which essentially converts the
[24:58] model parameter or the model forecast comparison against the observation in the same space that the observation was
[25:06] made so that takes into account the location of the observation the time of day day any of the the physics of the the
[25:13] measurement and the the instrument that's used to make the measurement um and in its simplest form this would
[25:19] just be a means of interpolating from the model grid to the observation location for example if we were using just in
[25:27] situ observation but for satellite observations as i say we also need to take into account some of the physics of
[25:33] the measurement so that we're comparing two parameters which are which are in the same which are in the same space so we're comparing
[25:42] like with like rather than slightly different parameters so this slide is showing then how how these observations look like in our
[25:58] in our assimilation system so these are these maps are showing um the the the observations available for just one
[26:08] day day for a different chemical species so we're looking at carbon monoxide ozone nitrogen dioxide in the troposphere
[26:15] formaldehyde and sulfur dioxide and the different colours of the on each map is indicating a different observation
[26:24] observation and those observations are labeled in the boxes to the side of each map and some of these data are actively
[26:32] assimilated and some of them are monitored and some are just monitored and that's denoted by the shading of the
[26:39] of the uh observation in the uh in the box box and and what it shows is that for for
[26:46] ozone no2 hcho and so2 these are observations from ultraviolet and visible parts of the spectrum spectrum and what that means is that these
[26:59] observations are only possible when there is sunlight shining on the atmosphere and so this is why we only see this fairly small area
[27:08] of the of the earth actually covered by the the by where the observations are from carbon monoxide however is measured by
[27:17] thermal infrared those measurements are possible to make during the day and during the night and therefore with with just so over one day we get a
[27:27] full global coverage with with the instruments that are shown in this this slide um um and one thing one thing's worth noting
[27:39] is that all of these satellite observations are essentially providing some kind of integrated total column amount so this
[27:47] is is an estimate of how much of that particular particular trace gas or aerosol is in the
[27:54] atmosphere from the surface up to the top of the atmosphere however our model is three-dimensional and so one of the
[28:00] advantages of combining this these observations with the model in camps is that we can then redistribute the
[28:08] observations to give us a three-dimensional picture of the atmosphere so this is an example looking at carbon monoxide so carbon monoxide is
[28:16] very useful tracer it's a product of incomplete combustion and therefore it's a very good indicator of atmospheric
[28:24] pollution from wildfires and industrial processes processes and kavanaugh fed up has a photochemical lifetime in the atmosphere of about
[28:33] of a couple of weeks to a month and so it really gives us a good indication of
[28:38] where the where pollution is and where it could be transported to over over the next few days
[28:45] so the the first chart here is showing um um carbon monoxide observations from the measurements of pollution in the
[28:52] troposphere instrument which is on the nasa nasa um um eos terra satellite and we see the kind
[28:59] of coverage that we have from muppets so this is what is an interesting instrument because it was launched
[29:04] already in at the end of 1999 and it's still functioning very very well to this day and was really a groundbreaker in
[29:13] how we understand atmospheric pollution from space this next image is showing carbon monoxide on the same day but from an
[29:22] instrument called iazzi which is a european instrument and which was launched a few years after after the
[29:29] terror satellite and we see we start to get increased coverage from the way that the observations are made
[29:38] and then by combining them with the model we can get we can get a map that fills in the gaps in the observations
[29:46] and and um has a has a combined picture of of what carbon looks like looks like at the global scale and then also
[29:54] because the model is three-dimensional we can redistribute that information in the vertical so we can really look at
[30:01] how carbon monoxide looks not just in terms of a two-dimensional map but also in terms of its vertical extent and
[30:09] distribution one of the challenges of using satellite observations is how many observations are available and how we
[30:23] how we merge them into into our system so this is a case looking at the antarctic ozone hole in october 2019 and
[30:32] what it's doing is comparing the cams forecast at the top left and then three different instruments of uh
[30:43] three different instruments which measure in the the uv visible and those are the top only going to
[30:49] an ome instrument so these have all been launched at different times stop only is the most recent
[30:54] um um and we what we what we see is between the different satellite instruments is a change in
[31:02] how how many observations they are able to make over the course of the day so we can see with the only instrument there
[31:09] it's it's fairly limited we've gone to it's a bit more and then with top homie you're almost getting in the observation
[31:16] something that resembles what the model is showing um um but this these four images give you a
[31:24] sense of how the the same information looks from four different four different ways of looking at it so of course in
[31:30] cams that that map is showing the data that is assimilated from going to and only into the the cams forecast system
[31:43] yeah so okay so this this map here is showing showing the um the observations at their native special
[31:52] resolution so we see a lot of features along this orbit so going from northern europe down to the
[32:00] the southern ocean and the eastern part of the western part of the indian ocean if we resample the
[32:11] observations at the spatial resolution of the cams forecast systems or by default it is is for atmospheric composition this is 40
[32:20] kilometers we see um um we see that we we have a similar picture that some most of
[32:27] the main features are still there um when we we resample at the um or when we do the super all being at the
[32:34] uh the causal resolution in the model and we also run the model at costa resolution still in some cases
[32:42] and this is what the observations would look like if they were super robbed at this spatial scale of 120 kilometers or
[32:50] rather than 40 kilometers um and this is another example of uh super robbing where we can look at um
[33:03] nitrogen dioxide from different satellite instruments and different retrieval process processes and and this is just to show again with
[33:13] tropomy we get really highly detailed spatial coverage um compared to the what was previously available from from
[33:22] sas flight observations in with the gom-2 instrument and also only this is a case of north america in
[33:32] november 2017. and then if we go through this super robbing process it's just to show that that
[33:41] that the amount of information that tropomy brings to cams when we look at it at the different when it's been
[33:48] through this process of super robbing um to the different model resolutions so this is at the the cams operational
[33:55] resolution of about 14 kilometers and and then even at this much coarser space resolution which is about 120 kilometers if you remember
[34:05] from the previous slide that that that we have much better coverage than than what was previously available from
[34:14] firefly observation so i mentioned a few slides ago that muppet was a game changer in how we understood
[34:20] atmospheric pollution from space uh tropomy has been another one of these um step changes in our understanding of our
[34:28] atmospheric pollution using satellites just purely simply for the coverage that it provides um um and i mentioned i alluded to
[34:40] very right at the beginning this observation process and feeding information back to the um the the data providers through monitoring of the
[34:49] observations and this slide is just a further illustration of that so uh we can by feeding the observations into our
[34:58] system we can look at things like um different we can look at things like how the observations uh depart or or are
[35:07] different from our our background forecasts um so the the two panels on the left are showing this observation minus model first guest
[35:18] departure over a period of a couple of months or a period of a couple of weeks rather in 2021 and we
[35:27] start to get a sense of where the differences are between the observations and the and the background model and
[35:34] then also by looking at these hove muller style plots at the bottom left we get a sense over over time whether those
[35:42] biases or those departures are changing and the the charts on the right are also showing something very similar so by
[35:52] looking at a time series of different monitoring statistics and i'm not going to go through what they are right now
[35:58] but this is just to give you a sense that we can we can see as a function of
[36:02] time how these different statistics change so uh are the is the observation behaving in a consistent manner over a
[36:13] period of time and then when by understanding this we can can we can have some confidence in
[36:20] assimilating it into our system but also any departures and deviations we can feed back to their data providers and so
[36:27] that they could look at improving their the data that they provide okay so that that summarize that comes
[36:37] to an end of what i wanted to talk about in terms of the system and in terms of
[36:41] how we ingest observations and how we make use of satellite observations in cam cam and i'm also i'm going to now talk about
[36:49] some of the input other inputs and data products that we have and show some examples of what they look like for
[36:57] different applications so one of the one of the most important things we need for modeling atmospheric composition are the surface inputs in
[37:08] terms of the emissions and fluxes from different processes at the surface so so in this case we're looking at
[37:16] an example of emissions from shipping and so this is a data set that was um developed under cams and is is also one
[37:26] of our data portfolio and what it's showing is that the european domain and then the global domain emissions of carbon dioxide from
[37:35] shipping shipping and so we see all the ship tracks for different regions of the world across the different oceans
[37:42] across different seas um and this is just one um element that then feeds into the emissions that we need to be able to
[37:50] correctly model atmospheric composition so our emissions inventories are all available through our atmosphere data store store and then this is just a
[38:05] couple of examples that show um emissions of sulfur dioxide from different regions in asia so china india
[38:14] southeast asia and so it's just to give you a sense of there's a number of different emissions inventories and this
[38:20] gives a sense of where the the current cams emissions lie relative to those in terms of their trend of the last um
[38:29] the last couple of decades and so in all of these charts there is a black line with red
[38:36] with red circles which is the cams emissions inventory and we can see that it lies somewhere in the middle of
[38:43] other emissions inventories that have been developed over the last 30 or so years years so we provide these emissions as an
[38:52] inventory which means that they're fairly static in time but they have these these these trends uh monthly trends and
[39:00] annual trends but they don't really change um very quickly um over the course of days they're changing very slowly over the course of
[39:10] a season or or over several years um but one of the key elements of emissions for for atmospheric pollution atmospheric
[39:19] composition composition are fire emissions and and so these have a lot more spatial variability and temporal variability and
[39:27] so we need to be able to estimate them um in near real time and we do this
[39:33] using using our system which is called the global fire assimilation system which makes use of of satellite observations of this parameter
[39:42] called fire relative power so there are a number of satellites which are providing observations of fire related power currently we are using
[39:51] two nasa modis instruments but we're also testing and implementing um some of those satellites um um to be able to make use of that
[40:01] information and to improve the the product that we have um so these efas emissions are provided with the
[40:08] global coverage at about 10 kilometer spatial resolution we provide information with hourly output which runs about seven hours behind near real
[40:17] time so that when we initialize new forecasts we really have the most up-to-date information that that's available on
[40:25] the the distribution and the the scale of fires as they're burning worldwide worldwide and then we estimate emissions of
[40:33] aerosols and gases using factors which are dependent on the vegetation type um and we also provide injection heights
[40:42] which gives you a sense of where of the the power of the fire and where most of the
[40:49] the gas or aerosol is being put into the atmosphere as a function of the the size of the fire
[40:59] this animation um runs for a couple of minutes and it's showing us the daily changes in global fire emissions
[41:08] throughout the whole of um 2020 2020 so we see in january february and march a lot of
[41:16] fires in the northern tropics so over northern parts of south america central america and also northern tropical africa
[41:26] and then as we go through into the spring spring um um and then to the summer we see how that
[41:31] distribution changes so we see this shift from northern tropical africa to southern tropical africa um um we see more fires in in mexico more
[41:41] northern parts of south central america and then as we go into june particularly in 2020 we saw the emergence of these
[41:48] fires within the arctic circle within uh siberia and eastern russia and as we go through the summer and as
[41:57] we reach september we start to see fires developing in california and in the pacific northwest in the u.s
[42:04] and is really flared up in in september and then it runs through to the end of the year
[42:11] where we start to see the the fires in central parts of south america and the amazon amazon and
[42:20] and then through to the end of the year and what this really shows is just how how much variability how much fire there
[42:27] is worldwide day by day and how much that changes in terms of its distribution particular locations throughout the year
[42:41] so so i just want to show an example of what these emissions then look like in terms
[42:46] of their their daily totals and annual totals so this chart is showing a time series of the daily total estimated
[42:54] carbon emissions from fires worldwide um from the first of january through to the end of december the red line is showing the data for
[43:02] 2020 and the black line is showing an average of the previous year's data so our data set gfas goes back to 2003
[43:11] and then we see that generally we there was perhaps below average activity through at the global scale throughout
[43:18] much of the year but of course it changes um regionally and then this bar chart is showing the
[43:25] annual total estimated carbon emissions from global wildfires to show that from 2003 through to 2020 how how
[43:35] the fire activity changes year on year and then i have an exact a couple of examples of um
[43:44] the whole camps process if you like in action action so this is a slide showing um fire
[43:51] fire emissions emissions and smoke transport in august of 2017. so the charts on the right are showing
[43:59] the the daily total estimate carbon emissions from siberia and canada and again so the red bars are the the
[44:08] emissions from light years 2017 and the gray bars are the mean emission from the previous years of 2017.
[44:15] um and we see this um these these peaks in the the fire emissions and and we see then the resulting smoke
[44:24] transport around the northern hemisphere as a result and this this case was kind of exceptional because we saw smoke from
[44:31] fires in british columbia transported high into the arctic ocean and to the north pole um and then another similar case this is
[44:42] looking at august of 2018 so these are fires in in north america and what i'm showing here is in the line
[44:50] in the excuse me the chart around the the edge of this animation is showing some sense of the evaluation
[44:57] of the cam's forecast relative to independent observations which are made by erroneous sites rns is a network of
[45:08] instruments which measure the amount of aerosol in the atmosphere and this is comparing comparing the parameter of organic matter aerosol
[45:16] optical depth which is a proxy for smoke um compared again against these observations and what we see is as this
[45:23] smoke was transported from the western parts of north america across the continent then across the atlantic that had these measurement
[45:31] sites along the path of the the smoke transport that we see a good agreement in the forecast with then these
[45:38] independent observations another example for our regional forecast has been to look at european air quality and we provide various tools for
[45:52] for looking at the source allocation and the chemical speciation of of some particulate matter for the european countries this comes
[46:04] about as a result of having a nine-member nine-member ensemble of air quality forecast models and more information on this tool can be
[46:13] found on through the link given below and this was a case looking at um aerosol transport in a cold front um in
[46:21] northern france um in the spring of uh 2020 and this resulted in this uh this tran this very narrow band
[46:32] of of sulfate aerosol crossing northern france and and being noticed by by people on the ground through the smell
[46:41] i'm gonna skip that one and talk about the analysis uh so i mentioned right at the beginning
[46:47] that we also have a re-analysis product a re-analysis is a combination of observations and models to create historical
[46:58] conditions climate conditions through things like the era 5 and the mirror re-analysis for example example but in cams we also provide
[47:08] re-analysis of global atmospheric composition composition all the data is available through our atmosphere data store and the link is
[47:15] given above and there's some examples are given in this page i'll give some more in the next
[47:21] couple of slides um so so basically um the our re-analysis covers the period of 2003 to 2020 and it all
[47:32] uses a consistent uh model set up for that whole period and then we provide information on aerosols chemical pollutants as well
[47:42] and also greenhouse gases and this real analysis runs at a spatial resolution about 80 kilometers and a paper documenting the re-analysis and
[47:51] the and the technical aspects of it are given in this paper by my colleague anthony innis from 2019.
[48:01] and the chat on the right is showing a in in ozone so this is the forecast the
[48:07] predictability if you like of ozone ozone um in at this in in the southern hemisphere over antarctica at the normal station
[48:17] and so basically it's showing um how the the re-analysis is compared from 2003 up till about 2017
[48:28] with the um with the real-time operational forecast so we can see that every every so often we go through this process of upgrading
[48:38] and improving the model cycle and use operationally and that leads to then to jumps and changes in the time series all
[48:46] the time but what the analysis does it it smooths out all those gaps because the model system doesn't change from
[48:52] year to year and some applications of the re-analysis uh are shown here so this particular one is looking at anomalies
[49:02] of carbon monoxide on the top panel and aerosol optical depth on the bottom panel in relation to the the huge bush
[49:10] fires which burned in southeastern australia in january 2020 and what this shows is that above well above average or well above
[49:20] the climatological average values of carbon monoxide and aod over the pacific between australia and south america in
[49:28] relation to the emissions from those fires and this is uh giving a sense then also of on the left
[49:44] uh an evaluation of aerosol optical depth against um the different versions of our of our analyses that we produced in cam
[49:54] and then the right and evaluation of carbon monoxide total column at two sites one in north america and one in australia
[50:07] over that period of the the re-analysis um and another application and something which is very relevant right now is uh monitoring of the
[50:20] antarctic ozone whole and so with our analysis we're able to really compare current states of the ozone hole with what's happened in
[50:28] previous years over the same period of time time so this this is showing a tar of the
[50:35] total ozone distribution very clearly showing the whole with this strong polarobotics on the 15th of september of
[50:42] this year and then the two line charts on the right are showing that the ozone hole area and the ozone hole column minimum
[50:51] as a function of time from the start of the season through to the end of the season to show where
[50:56] the current situation is relative to what we saw last year and then in all the previous years
[51:03] i'm going to skip this um um and one thing we can one thing we can also do
[51:11] with not just the chemistry analysis but with the era five analysis which goes back even further in time to 1979 the
[51:19] start of the satellite era and we can now now we now have a means of comparing the
[51:25] ozone hole size and depth um for this whole 42 year period which is showing in the slide here
[51:37] um um it's worth noting that all of this work is is um is useful but it's only as useful if
[51:46] it's providing usable information that's improving on on the information that that would be available or anyhow and we go through a
[51:56] process of documentation and quality control every quarter and and all the reports for the validation of our system are available from our
[52:05] website through the link given on this slide here this image is just to give you a sense
[52:12] of of the range of measurement networks and measurement types which are used for evaluation at the global scale using
[52:19] in-situ in-situ ground-based remote sensing aircraft surface measurements and also satellite observations for for understanding understanding how well our forecasts compare with um
[52:32] with other observations um and then this table again it's rather complicated but it gives you a sense of
[52:40] the species that are included in the camps portfolio their vertical range what satellites are assimilated and then what instruments
[52:49] and observations are available for um validation and evaluation and these are these are all routinely used for our quarterly validation of the
[53:01] account data and and in terms of data access my colleague chris is going to to show you the
[53:08] practical of how to access data and how to to do some basic basic plotting and manipulation of the data
[53:17] but all our data as i said at the beginning is completely free of charge and open access and is mostly available
[53:24] now from the atmosphere data store so the idea of the atmosphere data store is that all the data is available for
[53:33] download from one place and it can be in it can be accessed either interactively or with programmatic access through api
[53:43] and also using python or other um other means of access and then all the data formats are
[53:52] supposed to be standardized and harmonized harmonized and everything runs in the cloud so it should be more efficient in terms of
[53:59] accessing the data um um just to give you a sense of some numbers so so as of june of 2021 um with just one year
[54:11] of operational date of the ads we had 11 published data sets with two more being close to being ready and
[54:20] ultimately all of the cams data would be available through this abs and then just a sense of the
[54:28] the scale of the data in terms of the storage instead of the terabytes and what would be needed to to you know
[54:39] keep all of this data um on the local machine if if you were to use all this data on your on your own
[54:47] and actually brock i would maybe skip this slide if possible so yeah i don't think it's necessary so
[54:54] if we can flip skip this one that would be helpful then um um okay and then just a quick uh
[55:02] look at what the atmosphere data store looks like um so the website is given here through this link
[55:09] and you get to a page that looks something like the image shown and then to access the data you just
[55:16] need to register once and then you can log in simple registration um um when you're inside the data store you
[55:24] can then search the catalog so this you can find all the data sets that are currently published
[55:30] to a page that looks like this and then when you've chosen the the data you want to use
[55:37] you then just basically go through check check boxes to pick the parameters that you want and which levels which date range that you
[55:46] want data for and then you can download this data as netcdf files and you can use the data
[55:54] this is just an example using pan apply to look at pm 2.5 forecast forecast which of course that you can use any
[56:04] program or application that you want to to to access and look at what the data actually shows
[56:15] welcome to this practical part of the training training in this part we're going to look at how
[56:22] to to access data from cams and how to process that data and we're going to do that through
[56:30] jupiter notebooks so there is actually a jupyter notebook tutorial that i will go through um but before i do so i just like to
[56:40] introduce myself so my name is chris stewart and i work at the european center for medium range weather
[56:47] forecasts forecasts um and my job title is copernicus training and knowledge transfer officer so i coordinate the training activities
[56:57] for the copernicus atmosphere monitoring service and also the copernicus climate change service so what i'd like to do now is to go
[57:06] through through to show you practically how you can access data on air quality from the copernicus atmosphere monitoring service
[57:18] and how you can view that data using using using python and we're going to access the data
[57:27] programmatically using the api but i'm also going to show you how you can download it using the website
[57:35] so the first thing is to show you how you can access this jupyter notebook tutorial tutorial so this tutorial is available on the
[57:44] github github and it's a github github repository for ecmwf projects copernicus training and you see the link
[57:54] here in the address bar and in this github repository you find a lot of jupyter notebook material
[58:04] material this is likely this the structure of this github repository is likely to change but the content will be the same
[58:12] so you will still be able to access the same content even if the structure the order of the notebooks may vary a little
[58:19] bit and what you'll find is you'll find that the the jupiter notebook is is in this repository but
[58:30] also links to run this jupyter notebook in a container environment so this enables you to run the tutorial without
[58:39] actually having to install anything so if you want to run this on your own system system you would have to install jupyter
[58:47] python and various different libraries but if you if you click on if you click on a link here
[58:55] to launch the tutorial in binder you can launch it in in a container where everything is installed and set up
[59:03] for you and you and you really don't need to uh install anything so the tutorial is this one here
[59:11] so 2021 0 9 cans air quality data access and you will find this um here so this is the actual jupiter notebook
[59:21] tutorial tutorial um but as i said you can run it using um using binder so i'll just show you how that works if
[59:30] i open it in a new window um so here it launches a an instance in in a docker container
[59:43] where everything is installed and it takes some time to to prepare the environment environment but then once it's done
[59:50] you will see the notebook um um and you will be able to run the various different code blocks um quite simply
[1:00:03] if you just want to see a rendered version of the tutorial without actually running the tutorial you can click on the link here
[1:00:11] in the meantime the tutorial i think has opened up in the container so here you can actually can see it
[1:00:20] and what you would okay i don't know why there's a problem here okay okay and here you can
[1:00:28] you can run the various different code blocks if you select the so this you can see that in grey you see
[1:00:34] the the blocks where there's code in python python and these blocks are separated by text in markdown
[1:00:44] so these text and images uh explain the background uh with the instructions of what we're going to do
[1:00:51] and these blocks in gray are the actual code blocks that you need to run and you can run them by selecting
[1:00:58] the um the play icon here okay okay so when you run when you click on on play then you end up running these code
[1:01:06] blocks you have to click inside the code block and you click on play and it will run these blocks okay so you
[1:01:13] can do this you can run the tutorial in your own time time if you just if you don't want to run the
[1:01:20] tutorial and you just want to see how it looks you can click on this link here the rendered version here and this will
[1:01:28] open it open a um a web page where you can see the tutorial you can also download it
[1:01:37] and here you don't actually run you can't run any of the code blocks but you can just see
[1:01:42] how the tutorial looks so what i'd like to do now is to start going through the tutorial
[1:01:50] um which i already have opened i think i have it here and what this tutorial will do is is
[1:02:04] broken into three parts the first part is just to prepare your environment and what you need to do
[1:02:11] um to prepare your environment if you're running the notebook in in um in binder so um in the container then you don't need to
[1:02:20] install anything but what you do have to do do is you have to register with the atmosphere data store
[1:02:27] of the copernicus atmosphere monitoring service and you need to obtain an api key key so an application programming interface
[1:02:35] key that enables you to uh to download the data programmatically so that's the first part then the second part is a part where
[1:02:45] we're going to access data from the cams global atmospheric composition forecasts so we're going to look at a forecast
[1:02:55] of of organic matter aerosol optical depth for the first few days of august and then the last part is um
[1:03:06] is is how to access the cams global reanalysis data data and we're going to create a figure from
[1:03:14] of carbon monoxide um from this data so if we now go to the first part so um
[1:03:24] for this i'm going to start off i'm going to go to the the atmosphere data store of cams
[1:03:32] so so first we go to the if we go to the um the home page of of cams
[1:03:39] so let me just go to the home page so this is this is the the home page of
[1:03:49] the copernicus atmosphere monitoring service service um um and in this home page you'll see a link to data
[1:04:00] so if we select this link then then here you see the various different places where you can access data
[1:04:07] so there's a data catalog and this and the atmosphere data store so we're going to focus on the
[1:04:12] atmosphere data store because all the data that we're going to use in this tutorial comes from here
[1:04:18] and this is a very nice resource because it includes a lot of very good data from the past and the
[1:04:27] present and the future um um on atmospheric composition and you can access this data either on the website or programmatically
[1:04:37] we're going to see how to do that so if you click on the link to enter into the atmosphere data store
[1:04:45] so this is the page that you see to begin with um um and you'll see that it's possible to
[1:04:52] enter enter a keyword search so if you if you know what you're looking for you can already
[1:04:58] enter some text in here and then search or if you just want to see the entire offering then you can click on search
[1:05:07] and you'll find everything so all of the data sets are listed here and when you when you go to a data set
[1:05:24] so for example if we go to the um if we go to the cams global atmospheric composition forecasts
[1:05:38] then you can find more information about the data so here you find an overview of the data
[1:05:49] set and you also find a um a tab here to actually download the data so here you
[1:05:57] can specify exactly what variables what what time period or geographical coverage and all the various settings you can
[1:06:08] you can choose them here and then you can download the data either by selecting this link here
[1:06:16] so this will download it directly and you'll see a little uh icon here and you just click on that icon and
[1:06:25] it'll download the data directly or or you can download it programmatically using the api api and to do that you would select show api
[1:06:37] request and here you get a block of code which you can just copy and paste so you can copy and paste this block of
[1:06:44] code code into into a python script and you can download it by running this script script why is this useful
[1:06:55] so this is useful because you can change any of the parameters here so if you want to loop through different
[1:07:00] lead time hours or different different dates or different variables you can do that that within this script
[1:07:12] now in order to use the the api you need to um you need to get an api
[1:07:18] you need to get an an api key [Music] [Music] and if you click on this documentation page it will show you how to do that
[1:07:27] also in the jupiter notebook um there's a link to to um to obtain an an api key
[1:07:37] which is actually down here okay okay i forgot to mention that to enter into the atmosphere data store you first need
[1:07:45] to log in or register and this is a very simple registration so for me i i was able to access by
[1:07:54] default default because i'm already registered but if you're not registered then all you need to do is select this
[1:08:02] link here to to register and it's a very simple registration process so once you have registered with the
[1:08:14] atmosphere data store and once you have obtained an api key then then you can begin to use the
[1:08:23] um um you can be you can begin to use the api to download the data programmatically and now we're going to see how to do
[1:08:30] that so first of all we need to select our data data um but i just want to show you here that
[1:08:42] when once you have once you have obtained your user id and api key um um there's a a
[1:08:50] code block here where you can insert this you you replace this text with your user id and api key
[1:08:58] and then if you run this this code block then then it will save you will save it in this
[1:09:06] variable variable which is useful for later on in the script script i won't do it now because i've already
[1:09:13] um um i've already created this variable with my own user id and api key so to begin with the um
[1:09:29] with this particular script i'm showing you how to download the data programmatically um what we're going to do is we're going
[1:09:39] to import various libraries so you need to import the the cds api library library um um and this you can install
[1:09:51] you can either install using pip install so here there's pip install cds api um um of course if you're running this jupyter
[1:10:01] notebook using the the binder link then this has already been done for you because it's part of the environment
[1:10:10] that's already set up but if you're doing this on your own system then you need to install the cds api
[1:10:17] so it's just a very simple pip install cds api we're also going to import various other libraries so we're
[1:10:27] going to import numpy and xray so x-ray is very useful array-based library library for working with multi-dimensional
[1:10:39] arrays such as netcdf files and we're actually going to download the data in net cdf format so xray is very good at reading and
[1:10:48] handling netcdf files we're also going to import some libraries for plotting and visualizing the data so matplotlib and carterpi
[1:10:59] and then a few libraries um for extracting extracting the file the files in zip format which will be downloaded in
[1:11:08] zip files and also some libraries for um um for viewing animations so we're going to run this
[1:11:19] cell block here to to import these libraries we're also going to create a data directory for the data that we will
[1:11:29] download download so so we're going to create a data directory called um in the in the current working
[1:11:37] directory called forward slash data and now we can we can choose the data that we're going to download
[1:11:52] so to do this we're going to go back into the atmosphere data store and we're going to download some data
[1:12:02] from the cans global atmospheric composition forecasts and these are the parameters that we're going to download okay so
[1:12:11] um this shows you the the variables um the date range uh the area um and the format
[1:12:20] of the data that we that we're going to uh work with and as i mentioned before in the if we
[1:12:28] go now go into the the catalog the atmosphere data store i think i've already got it open here
[1:12:34] let me just close these other tabs so here's the atmosphere data store okay okay again we go into the atmosphere data
[1:12:44] store we can select data sets and we scroll down to the global cams global atmospheric composition forecasts
[1:12:55] so so cams produces this data um produces forecasts for atmospheric composition twice a day and this includes many different chemical species
[1:13:08] and types of aerosols and also some meteorological variables and the initial conditions of the forecast obtained by combining
[1:13:19] the previous forecast with current satellite observations and this is called data data simulation and this data simulation produces the
[1:13:28] best estimate of the of the state of the atmosphere um at the initial forecast time step so this is called analysis so
[1:13:36] basically we're combining um previous forecasts with with the current observations observations as a basis for um for for the forecast
[1:13:47] um um then the forecast itself uses a model of the atmosphere based on the laws of physics and chemistry
[1:13:55] to determine the evolution of um of all the various different species and parameters um for the next five days
[1:14:03] now what you can also do is you can do you don't have to do a forecast based on
[1:14:08] the last available analysis but you can also go back in time and that's what we're going to do
[1:14:13] because we're going to look at a particular event at the beginning of august august in um the united states so we're going to look
[1:14:20] at some of the wildfire activity and we're going to create a forecast from a time step in the beginning of august
[1:14:28] this year um and we're going to look at the uh how the one particular variable has spread over the country and affected
[1:14:40] air quality over the over some parts of the united states so we're going to we're going to select
[1:14:50] [Music] [Music] okay sorry in this overview section you can see also a lot of information about the the different
[1:14:59] variables variables and the resolution the the the vertical resolution the horizontal resolution um and the temporal resolution and all
[1:15:09] of the and the characteristics of all the different variables um in the data set so here you can see a
[1:15:15] list of all the variables uh so the different chemical species the different aerosols and the different meteorological variables
[1:15:23] and you can also see their their units here so this provides you information about the data set if you want more detailed
[1:15:31] information you can go to the documentation documentation and here you can find more detailed information about the product
[1:15:41] so then to actually obtain the data we go to the download data tab and here you find all of the
[1:15:49] you can select all of the the parameters for the download and in this particular case we're going
[1:15:56] to select organic matter aerosol optical depth at 550 nanometers so to select or deselect you can you can select all
[1:16:06] the variables or you can you can just select individually whichever variables you're interested in so we're going to focus only on
[1:16:15] organic matter aerosol optical depth then um okay these are the single level variables variables there's also multi-level variables if
[1:16:25] you're interested in multiple levels um you can select them here um um so when you select multi-level variables
[1:16:35] you can select the different levels so by levels we're talking about pressure levels in the atmosphere so
[1:16:40] basically different heights in the atmosphere atmosphere um from one hectare pascal to a thousand active pascals so if you're selecting
[1:16:49] multi-level variables you can also select the pressure level here but we're going to focus on single level
[1:16:56] uh a single level parameter so um um so all the pressure levels will be grayed out then
[1:17:11] then um we can select the date range and we're actually going to uh create a forecast from different analysis time steps every
[1:17:21] day day from the 1st to the 8th of august and the analysis so the the first step
[1:17:29] of the forecast will be zero but you can choose 0 or 12. and then we're going to choose a lead
[1:17:36] time different lead times from 0 6 12 and 18 hours from the initial analysis so basically four steps
[1:17:48] um for each of the days from the first to the eighth of august then here we can also select a
[1:17:58] we can select the whole area or we can select a subset and and we're going to select a subset over
[1:18:08] north america so this is from um 25 to 80 degrees latitude and minus 50 minus 150 to minus
[1:18:16] 50 longitude and we're going to select the to download the data in net cdf format so so now all we need to do is we need to
[1:18:27] select the api request and we can copy this code block block okay we've already imported the cds api
[1:18:37] um um and also we've already run this line here so all we need is this code block
[1:18:45] to download the data okay so if we copy that and we can paste it into this into this block here
[1:18:55] okay and once you've done that we we only need to run this this this block to then download the data
[1:19:10] so if we run this um it downloads the data the data is very small so that should download very fast
[1:19:16] um um just something to point out i'm just going back to the catalog because something to point out is that some data
[1:19:22] um is very fast because it's on disk other data uh can be quite slow to download um if it's on
[1:19:31] tapes tapes and there's i think this is explained here so fast versus slow data but any data that's on tape will be will
[1:19:41] be uh flagged so you'll know if it's uh very slow if it's going to take a long time to
[1:19:46] download download um there's actually a section here on slow um not here but it'll it'll be specified where um the
[1:20:02] data is is on tape instead of on disk so this particular data is on is on disk
[1:20:11] so it's very fast to um to download then once we've downloaded it then we can extract it
[1:20:21] um so we'll it'll be downloaded in in zip format so we run this code block here to extract the data
[1:20:33] then then we can um so this uh this line of code is just to create a variable out of the file name
[1:20:43] so the file name uh in the the extracted data which you can see is a netcdf format
[1:20:49] format so so um we're going to put this file name into into um um a variable called fn
[1:20:59] and then we can open this netcdf data in x-ray so we create an x-ray data set okay so this is this line of code here
[1:21:12] is just to create a data set in x-ray so this this we can now have a look at
[1:21:26] and here you see the structure of the of the data so you can see that there are various coordinates
[1:21:32] um longitude latitude and time so the time this includes the different different lead times of of 0 6 12 and 18 hours
[1:21:46] from each of the analysis time steps for every day from the 1st to the 8th of august
[1:21:55] august we can also see see um the actual variable so this is a variable um um and if we click on this icon here we can
[1:22:05] um um see the the so this variable is organic matter aerosol optical depth at 550 nanometers um now if we want to
[1:22:17] start working with this data normally in x-ray x-ray you convert from so a data set an x-ray
[1:22:24] data set contains everything that was in the netcdf file but then if you want to uh work with one
[1:22:32] particular variable which in this case is this organic matter aerosol optical depth you you convert it into a data array
[1:22:43] which includes only that variable even if the data set only contains one variable in any case we're going to
[1:22:49] create a data array from that data set of this variable for more information about x-ray there's very good tutorials
[1:23:00] that explain you know the concepts and the difference between data race and and data sets but here we're just going to create a
[1:23:09] data array from this variable and so we run that we run that line of code and then we can
[1:23:17] view the data array which looks very much the same as the data set given that we only have one
[1:23:23] variable here and then finally we can we can create an animation animation of of this this data throughout the different time steps
[1:23:36] so for each of the time steps of each of the days um from the first to the eighth of august
[1:23:42] and we can do that with this code block here here so so um this is just the the code block to
[1:23:50] create the animation so it's based on matplotlib um you create a figure you define the various different
[1:23:57] axes axes um um and then you do this in a loop in order to create the animation
[1:24:04] so if we run this here we can see the animation of the the organic matter aerosol optical depth
[1:24:12] and interesting what we the interesting um um thing about this animation is you can really see how the
[1:24:20] uh uh the the organic the organic matter um aerosol optical depth is is going across from from um
[1:24:29] um from the west coast uh to the east coast and the um the source um um is really it's mainly from these um
[1:24:43] these wildfires in california in particular there was one particularly big fire which is a dixie fire which by the 6th of august had grown to
[1:24:52] become the largest single wildfire in the history of california so um it was a huge uh event
[1:25:03] and you can really see how the uh organic matter um um from this um um went right across the country from from
[1:25:14] coast to coast and it even affected the air quality um on the east coast of north america
[1:25:22] so so it was a really big event um um so this is this this is just a very quick uh
[1:25:31] overview of how you can download and visualize um some of this data if you want to look at
[1:25:38] historical data um so this is a forecast data but if you want to if you want to really look at um
[1:25:45] a long time series of historical data it's better to look at the re-analysis data so the re-analysis data provides a
[1:25:55] um a consistent uh time series of uh data um from 2003 uh to present to the present
[1:26:06] um and what we're going to do now in this last part of the tutorial is to look at this reanalysis data
[1:26:15] so we're going to go back to the the catalog and we're going to choose we're going to
[1:26:23] download some of the cams global re-analysis data um using these parameters here so this is the the block of code
[1:26:34] from the api request and it shows you exactly the parameters that we're going to focus on so here we're back in the catalog
[1:26:46] and we go back to data sets and this time we're going to look at the cams global re-analysis
[1:26:55] monthly average fields so if we select this data set so um here we can see again the
[1:27:07] characteristics of this data so we see the the resolution uh temporal coverage and so on so um
[1:27:18] so here you can see um all of the uh the different the different variables contained in this
[1:27:24] data set and this is good if you want to look at a long you know time series of
[1:27:29] historical data because with the the forecast data um it changes every time there's an improved uh model
[1:27:37] whereas this is a consistent uh time series so you can really um look at data um um in in a consistent way knowing that it
[1:27:45] that it stays the same throughout the or the characteristics of the data will be the same throughout the um
[1:27:52] throughout the whole the whole temporal coverage so now we're going to go to the download data tab to choose our parameters and
[1:28:02] this time we're going to look at carbon monoxide um and this time we're also going to look at different pressure levels
[1:28:11] so so we're not going to just focus on one single level but we're going to look at
[1:28:16] the difference the differences throughout different um heights of the atmosphere atmosphere and we're going to um we're going to
[1:28:23] look at um um from 100 hectare pascals to a thousand um and we're just going to focus on
[1:28:34] august 2020 okay so remember if you want to change any of these parameters and you can either select them all or you can
[1:28:44] you can select only you know individual months months so here we're just going to look at one
[1:28:51] month month we're going to look at the monthly mean and and we're also going to look at the full
[1:28:58] area area in actual fact we're going to look at only the northern hemisphere but i'll show you how in x-ray you can
[1:29:08] filter the data to include only um one geograph one geographical area so we're going to download everything
[1:29:16] but we're then we're going to do a filtering in them in x-ray um in any case the data is quite small
[1:29:24] so so um it's only a few megabytes and again we're going to choose net cdf format format so here we can if we select the submit
[1:29:32] form we download the data directly in in the web interface but but if we want to um
[1:29:42] um to download the data within the jupyter notebook notebook then we click on show api request and we
[1:29:48] take this code here okay so this is the same code that's in this code block so then if we run this
[1:30:02] we'll be able to download the data data and again we can extract it in the usual way
[1:30:16] and then we can open it we can read it into x-ray and we can view the different um the
[1:30:26] characteristics of this data so we can see the the coordinates um and this time instead of just longitude and latitude
[1:30:32] and time we also have the level so these are the different pressure levels levels here we can see all the different
[1:30:38] pressure levels and then again we to convert this from a data set to a data array so we run this code block here to do
[1:30:50] that that and now we're going to instead of viewing an animation we're going to view an original meridian or
[1:30:59] mean plot so this will allow us to um to view the view the data in the different different pressure levels so
[1:31:08] we'll see a profile at different heights of the carbon monoxide and but we'll we're going to in order to
[1:31:16] be able to see this in a two-dimensional uh plot um we're going to average over the latitudinal axis
[1:31:25] so we're going to only focus on the northern hemisphere and we're going to look at different longitudes
[1:31:30] um in the northern hemisphere but we're averaging over the latitudes so basically we're averaging we're looking at all of the we're averaging
[1:31:40] all of the latitudes from 0 to 90 degrees north so to do that we um here there's a simple
[1:31:54] line of code here where we use um the where function here to um um to average over the different overall
[1:32:04] the latitudes above latitude zero um and then we take the mean uh so first of all we filter out uh the last user
[1:32:12] that are less than zero and then we take the mean um of each latitude and now we can plot the data
[1:32:25] um we can plot an original mean plot and and um so this is this is the code to create
[1:32:32] the figure um here we just define the figure we define the axes um so the by axis i mean the kind of
[1:32:42] area area in the figure where the actual plot will be and then we can set the various tick
[1:32:50] marks and the labels and the title um and also the color bar um so if you run this
[1:32:59] then here we have the figure more we can see here is we can see the the longitudes
[1:33:06] um so all the longitudes um um and and and on the um on the y-axis we can see the different pressure levels
[1:33:17] from the surface uh up into up up to 100 millibars um um so what we're seeing here is the
[1:33:27] different concentrations of carbon monoxide monoxide at different levels of the atmosphere for different longitudes and and often you can see a different
[1:33:38] concentration of um carbon monoxide at different um at different um heights as it's transported across um even if the source may have been
[1:33:51] elsewhere so this was just a very simple demonstration of how you can access and visualize data from cams
[1:34:03] um so i would finish here but i would i would just include maybe one more thing in this uh in this this last block of
[1:34:10] code code is just a um um it's just an optional code to to create a custom color map
[1:34:21] similar to that used in cams products so so if we run this okay we create a color map which is
[1:34:29] called cans color map here and we'll copy that and if we go up to the first figure
[1:34:38] so this figure here so this figure was created using one of the default uh matplotlib color maps so this is yellow
[1:34:45] orange red okay but if we replace this with the the cast the custom color map we created and we re-run this
[1:34:54] block of code then you'll see the animation using uh the cams the typical cams kind of map
[1:35:02] which you'll see on some of the products on the website so i think i'll finish here i just want to remind you that if
[1:35:11] you want to run this tutorial at home then you can you just go into the github repository
[1:35:19] the copernicus training so it's ecmwf projects copernicus training github repository and you'll find the notebook material there so you can
[1:35:30] either download the notebook itself if you want to install python and jupyter and all the various libraries in your own system or you can
[1:35:40] just run the binder link here and you can run it within a container online without having to store anything
[1:35:48] so i think i will finish there and thank you very much for watching so with that i'll thank you for your
[1:35:58] attention and look forward to any questions thank you okay hello everyone um so we have the document with the question
[1:36:15] and answers on the screen now um we'll go through them one by one and answer where we can and if we can't answer
[1:36:20] right now um there will be answered at some point in the next couple of days and and included in this
[1:36:27] document document so if we start with the first question um can we convert aerosol optical depth to the mass concentration
[1:36:36] uh well um it's a difficult one to answer so in the cam's products the uh mass concentrations for all the
[1:36:47] aerosol species are included so you can access them individually but of course we are um estimating the mass concentration based on the aod
[1:36:59] but rather than go through that process it's better to maybe just download the um um the the mass concentration fields and
[1:37:06] use those directly okay so i'll move on to question two um is it possible to run the model
[1:37:19] online at eastenders website and acquire results to plot with other git software um um short answer is no um so basically we're
[1:37:27] running the model um operationally so we provide two forecasts a day and these are initialized at midnight
[1:37:36] and midday universal time um um but at some point there will be the possibility through the atmosphere data
[1:37:45] stall a toolbox will be developed and available available in which you'll be able to do that kind of plot at least you'll be
[1:37:52] able to plot the data how you want via this uh toolbox on the website and also as chris has just shown um you
[1:38:02] can take the data from the ads and and plot them with your own software chris has shown jupyter notebooks but in
[1:38:08] principle you can do it with any software okay so question three how the cam's your analysis data stream simulates
[1:38:19] secondary organization um all right okay this is quite a technical question and i think one that's probably best to be answered
[1:38:26] offline i don't have the information off the top of my head but it is documented okay so question four what is the
[1:38:40] difference between gmao and cams is there any connection between them well um so dmo gmail and cams are two
[1:38:47] separate organizations and um institutes um so gmail is part of nasa cams is part of of the european copernicus program
[1:38:57] and is implemented at ecmwf there are no direct connections between them in terms of the models that are
[1:39:04] used which are both different systems there'll be some similarities in the observations observations which are used between the two systems
[1:39:12] but but that's but that's it there's no other connection okay so question five is it possible to
[1:39:24] apply cams models to a specific location area area within situ measurements as input or is it too complex when applied to a small
[1:39:30] area okay so we kind of do this in cams already so as i explained we have we're
[1:39:35] running the global system adi similarif but we're also running a european air quality system with i think i said nine models but i think
[1:39:44] now it's actually eleven um um and those essentially do this so they take the boundary conditions from the
[1:39:50] global global forecast um and then they use in-situ measurements in their assimilation um so in principle you could do this
[1:39:58] with any other regional model or limited area model um um and you know the date you can contact
[1:40:06] tower user support to get help with how you can access the data to do this okay so question six
[1:40:21] how can we use in-situ or other satellite measurements to fill sentinel 5p 5p um um well i would argue based on what i
[1:40:29] presented today that i mean there's there's not it doesn't make a lot of sense to do that because you're talking about gaps
[1:40:36] not just in space but also in time a lot of the satellites are in polar orbit so
[1:40:41] they're all measuring at slightly different times but you don't really get full full filling in all the gaps of of a
[1:40:47] particular instrument the best way to do this is to use a model framework like i've shown today and like we'll
[1:40:53] show on the other day uh by melanie and assimilate all these different data sets and then let the
[1:40:59] model fill in fill in the gaps because you're still at the mercy of the being gaps in the other measurements
[1:41:06] if you see what i mean okay all right thanks and question seven decent website what's the difference
[1:41:16] between cams near real time and cam's re-analysis data they're not quite the same so the cams near real-time data is based on
[1:41:25] the the the current version of the model system um um but that model system gets updated every
[1:41:32] so often so that you do get jumps then in the outputs every every so often when we upgrade and improve the model
[1:41:39] the re-analysis is one one consistent model version that provides the full period so then you can compare this year
[1:41:46] with 2003 and all the years in between which is in the operational near real-time product you can't really do
[1:41:52] that but the near real time is what's produced in the two daily forecasts and is what what is available to give you
[1:41:59] the most up-to-date information on atmospheric composition okay so this is uh one of the big questions in in our field
[1:42:15] um um and i think yeah maybe better to to skip it uh the the interactions are very
[1:42:21] complex so climate change changing the atmospheric temperature the circulation patterns those can affect air quality in terms of the
[1:42:29] emissions and the distribution um um but this is really you know this is really a big research
[1:42:38] question and there's hundreds and thousands of papers being being um that have been published on this okay it's a question now what are the
[1:42:49] main differences in the secondary organic aerosol scheme by marin two and cams and i think this is again i don't
[1:42:54] have the information to hand and it's something we can provide offline okay so question 10 how accurate the
[1:43:07] data will come in comparison to ground level monitoring of pollutants um um so i'm presuming this is meaning the
[1:43:14] accuracy of the the cams forecasts um well like i explained we have a periodic periodic um um validation of our
[1:43:26] outputs against ground level monitoring observations and so all of that information is documented and available through our website as i explained so i
[1:43:38] think you can find the slides and find the link to where that information is okay so comes global atmospheric
[1:43:48] composition forecasts and comes global the analysis are the same which probably all right and again this is similar to
[1:43:54] the answer i gave a couple of questions ago okay so so um excuse me just losing my place um okay
[1:44:05] so it's similar to the answer i gave a few questions ago um it's just differences in in the near
[1:44:14] real time is um more up-to-date and then the re-analysis is this consistent data set that covers a longer period of time so for
[1:44:24] conducting a validation study then it depends on the time frame you're interested if you're interested in comparing two different
[1:44:31] years then the re-analysis would be better better but for particular case studies um than near real time but it would be
[1:44:38] interesting to compare both as well i think okay so i'm gonna move on so i'm being told to read the
[1:44:50] questions um out loud so question 12. so just let um the writing change okay so question 12 how are the pm 2.5 and
[1:45:00] pm10 values estimated in each scenario of cams global data set what satellite data is used for validation is it true that model
[1:45:08] forecast data is assimilated every few days or for for more accuracy and what is the methodology for forecasting um
[1:45:16] okay there's a lot of questions in one um um all the information on how we calculate the surface pm 2.5 and pn10
[1:45:23] concentrations concentrations is um available in in our we have a user forum and knowledge base accessible through our website which
[1:45:32] contains the formulae which are used for calculating these things um um and as for the other questions i think
[1:45:41] again these are things that were addressed addressed in the lecture today and in the lecture the other day
[1:45:47] but if there are more specific questions then we'll be able to answer those another time maybe he's worth adding in terms of what
[1:46:00] satellite data is used for validation well um there are products which derive surface pm concentrations from satellites
[1:46:08] satellites um um but they're still based on some of the aerosol optical depth observations which are assimilated so it would be very
[1:46:16] difficult then to to do that kind of validation better in in this case to use whatever ground-based measurements are available
[1:46:24] for validation of surface pm okay so question 13 for the case of biomass burning and the comparison of the aerosol optical depth
[1:46:44] satellite data and pm 2.5 from cams between the biomass burning period and non-biomass burning period at a specific region
[1:46:53] what would be the reason for no observed changes in aerosol optical depth but observed increase in pm 2.5 for the same
[1:47:00] year for example um um this is quite a big question as well but what i would say is that in cases
[1:47:08] where you see increases in uh pm 2.5 but not necessarily in aerosol optical depth could just indicate that uh fire is not
[1:47:18] the smoke from the fire is not really getting out of the boundary layer and so it might not contribute to the observed
[1:47:24] aerosol optical depth but because we have the observed source of the fires and the estimated emissions we still
[1:47:30] have some element of pm 2.5 or other pollutants okay so i'll move on to question 14. can you export the animation can we save
[1:47:53] the figure after plotting it be using jupiter um i think this is true this is the case but if chris is online maybe he
[1:48:00] can answer this one yeah um so the the answer is uh you can definitely um save the figure after plotting it um
[1:48:10] and you can also export the animation i'm not sure i don't think in this particular script let me just have a
[1:48:16] quick look because i'm not sure if that was actually included in the script um um no for the animation though uh yeah
[1:48:22] because the animation in this case was just just looping through the difference so rewriting the figure so
[1:48:28] in this case um there wasn't the option to save it but there are other ways you can create an animation and you can
[1:48:34] create a movie file which you can then keep keep and download um for the other figure as
[1:48:40] well yeah sorry i didn't include a line to save the figure but it's it's just one line of code to
[1:48:47] to save the the figures of png or jpeg or whatever you want to um save it in so
[1:48:53] so that can be done um if you know you can even just or you can look at some of
[1:48:58] the other jupyter notebooks or you can just google you know how to save a figure and and
[1:49:03] it's a very simple thing to do in um uh uh yeah in python okay thanks chris um
[1:49:15] so just let okay so we'll move on to question 15. uh which is model performance wise nasa
[1:49:21] geos versus ecmwf cams uh well both uh systems have um their advantages and disadvantages um i'm going to be diplomatic in answering
[1:49:32] this um but i think i think one thing right now where cams maybe does have an advantage is we assimilate more
[1:49:38] satellite observations but i know that nasa is working on the assimilation of other species in their system and so
[1:49:46] um um they should become more comparable and it's good to have different systems that do similar things so we can better
[1:49:54] understand then the processes in the models and understand atmospheric composition i think something further melanie or pavan have a chance to answer as well
[1:50:10] thanks um yeah i think it's also important to note that geos is a research model it research is its
[1:50:17] primary focus it's it's not an operational model um so that's i guess one factor that anybody using the output should take
[1:50:27] into consideration yeah uh this is phone i just want to add one more thing actually it really depends on what specific
[1:50:38] application or science question you are trying to address and each of these model has capabilities to address certain things in different
[1:50:49] ways ways so i would not generalize them uh in terms of whether one is better or other it really depends on your
[1:51:00] application what you're trying to do and based on your application you can choose one okay great thanks melanie thanks pavan
[1:51:15] so i think we move on to question 16 which is without using jupyter notebook can we directly download data with an
[1:51:22] animation of specific dates like you can in the nasa portal web tool giovanni um so i would say yes you can download the
[1:51:30] data directly from the atmosphere data store and use whatever application you want to to produce a map
[1:51:39] uh one tool that's also quite useful that was developed by nasa is called panoply panoply and this is a
[1:51:46] a little application which into which you can feed net cdf data and produce maps uh very quickly and without
[1:51:54] needing to know any codes but it's it's very good for quick looks at data but if you then want to do more data analysis
[1:51:59] you need to use something like python or a a programming language okay so question 17 is cam's reanalysis
[1:52:21] data going to be available on google earth engine um um i'm not completely up to date with what is
[1:52:28] available on google earth engine i know that some people have been um putting some of our data on there but
[1:52:35] um right now i'm not sure off to my head um um what information there is there but in
[1:52:40] principle um it could be added but we'd have to we'd have to look into it okay question 18 are these data on ecmwf
[1:52:56] website available for africa uh short answer yes this is global data and so the everything's there for for africa
[1:53:05] as well um so in our global products for sure but i would also add that our european regional domain also includes a
[1:53:13] reasonably large area of north africa around the mediterranean okay so question 19 how do you validate organic and black
[1:53:38] carbon aerosols what are the main points that need to be studied in the near future for accurate estimation of black
[1:53:44] carbon and organic carbon okay so um some element of this is done in our validation reports although um not so
[1:53:55] extensively just because the data is not all the validation data is not always available in near real time
[1:54:02] um um but um what we need to to do in in the near future to unders to better
[1:54:10] or to improve the modeling of these um of these aerosols is it all comes down to the emissions are
[1:54:18] the anthropogenic emissions right are the fire emissions right um um as well as then how that translates into
[1:54:25] things like pm10 pm 2.5 often in these cases we're relying on measurement campaign data that will make then
[1:54:33] specific measurements or particular processes processes but i'm not aware of the top of my head if if anything is there in the literature
[1:54:42] right now i just want to add something for question 17 for the google earth engine i don't think cam's re-analysis data is
[1:54:55] on google earth engine right now you can find for example um the copernicus climate change service re-analysis data the era five that's on
[1:55:04] that um but not yet the the count one i don't know if there are any plans to um
[1:55:10] to put it on uh sorry it's era five era yeah great and that's from the copernicus climate change service
[1:55:22] okay thanks chris so we're down to question 20 what does the term single level refer to does it
[1:55:30] stand for the surface okay so on the atmosphere data store as chris explained there's the three-dimensional data on model levels
[1:55:38] and pressure levels um and the single level data essentially refers to all of the two-dimensional products of those that
[1:55:47] only have a latitude and longitude dimension so it would be surface concentrations of particulate matter but also all the aerosol obstacle depth
[1:55:56] values for the different aerosol species are also referred to as single level because those are also 2d 2d
[1:56:05] 2d data yeah i think that's right okay so question 21 which data can be used to assess carbon dioxide
[1:56:23] sequestration such as from urban vegetation in relation to air pollution in urban area um i don't think i can answer this right
[1:56:34] now it's something we'll have to look into we do have carbon dioxide forecasts and we do have a greenhouse gas analysis
[1:56:42] but if but i'm not sure that that data is at a sufficiently high resolution or if the processes in our model
[1:56:49] are enough to to fully um assess uh things like things related to co2 sequestration we are running biosphere
[1:56:58] models and there are developments to include include urban vegetation and urban tiles within the model but um
[1:57:06] i'm not sure the states of that we can look into it okay so that looks like it's the last
[1:57:17] question um so yeah thank you for tho to those people who had the questions very very interesting
[1:57:24] interesting and very good questions and i hope we've answered them and more answers will come in the coming days
[1:57:33] okay thank you thank you mark and thank you chris for excelling presentations and going through the all the exercise
[1:57:41] for downloading accessing cams data and uh we had really good question answer session so uh question answers scripture scripts
[1:57:51] from all three sessions will be posted um on website for people who wants to refer them along with the recordings
[1:58:00] uh there are a couple of things i want to probably brock and mentioned brock can you commence on the
[1:58:08] certificate and homeworks what what what to expect for the participants uh yeah basically um if you're looking
[1:58:17] for a certificate of completion um you had to have attended all three parts and complete the homework assignment which is on the
[1:58:26] training web page under part three right now we just made that available um that is due by october 14th
[1:58:33] and it's a google form so um you'll find it there and if you have all four of those check boxes
[1:58:41] you you will get a certificate uh emailed to you as a pdf attachment within about three months we have a lot
[1:58:49] of people attending the training it takes a little bit of time to process attendance and everything great thanks brock so i just want to
[1:58:58] finally thanks everyone brock shelby and jonathan they all helped really put together this training so thank you guys
[1:59:07] uh thank you melanie and mark and chris for putting excellent presentations i hope everybody was able to learn
[1:59:15] something and like i said all the materials ppt recording script question answer scripts all are available you will receive an email from brock
[1:59:25] about about filling in survey surveys are very very critical for us to receive your feedback and improve on
[1:59:33] training and design new trainings for the topics which you may like to see us doing training so please take few
[1:59:40] minutes and fill out those surveys when it comes your way through email and and always looking forward for more
[1:59:48] trainings in the future thank you everyone everyone have a good good day bye thanks a lot thanks everyone bye
