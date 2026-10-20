# Using Hot-Humid Heat Estimates & Population Data to Map Heat Exposure Worldwide, Part 4

`https://www.youtube.com/watch?v=P7i2cWpM9yc` · id 267 · 1:06:26 · module 16 — Satellite Remote Sensing for Measuring Urban Heat Islands and Constructing Heat Vulnerability Indices

[00:01] welcome to part four of the rset training satellite remote sensing for measuring urban heat islands and constructing heat vulnerability indices
[00:09] in the fourth and final part of the webinar series we'll be hearing from guest presenter dr caskey tucholski who
[00:15] will present on using high-resolution satellite-derived hot humid heat estimates and gridded population data to map extreme heat exposure worldwide
[00:26] in the first part of the webinar series we presented on assessing the surface urban heat island derived from land
[00:31] surface temperature data using nasa earth observations in the second and third parts of the training we presented
[00:37] on heat vulnerability indices why they are important and how to construct them for your urban area of interest in this
[00:44] concluding part of the webinar series we'll be presenting on mapping extreme heat exposure all webinar recordings presentations
[00:55] code question and answer documents and homework assignment can be accessed from the training page at the link below
[01:04] as a reminder there will be one homework assignment for this webinar series due by august 25th answers must be submitted following the
[01:11] instructions found on the training page a certificate of completion will be awarded to those who attend all live
[01:16] webinars and complete the homework assignment by the deadline of august 25th 25th you will receive a certificate
[01:23] approximately two months after the completion of the course from marines martin martin after participating participating in today's training attendees will be able
[01:33] to define the wet bulb globe temperature and how it is a measure of heat stress discuss the global high resolution daily
[01:40] extreme urban heat exposure data set and how it is used with socioeconomic data for understanding exposure and demonstrate the use of python
[01:48] jupiter notebook for assessing extreme urban heat exposure it is now my pleasure to hand the presentation over to our guest presenter
[01:58] dr cascade tucholsky to present on mapping extreme heat exposure cascade over to you hello and thank you for being here my
[02:08] name is dr caskey tohulski i'm a post-doctoral research scientist at the center for international earth science information network at the columbia
[02:16] climate school at columbia university this fall i'll be beginning as an assistant professor in the earth sciences department at montana state
[02:24] university i'm a human environmental geographer and my research focuses on the intersection of extreme heat exposure climate change and food
[02:33] security broadly my goals are to inform adaptation strategies that redu reduce the harmful and inequitable impacts of
[02:41] extreme heat i completed my phd from uc santa barbara in 2020 today i will overview two data sets that
[02:50] i developed with season and nasa cdac that are released for public use and i will overview our
[02:58] learning objectives for those data sets the first learning objective is to define wet bulb globe temperature and
[03:05] how it is used to measure heat stress next i will discuss the global high resolution daily extreme urban heat
[03:12] exposure data set and how we can use it to explore socioeconomic data largely demographic data to understand how
[03:19] extreme heat exposure in cities worldwide has changed finally i will demonstrate use of these data sets in a python jupyter notebook
[03:28] as well as some exploratory analysis in qgis so so to overview my presentation the first part of this talk will discuss wet bulb
[03:41] globe temperature next i will provide again an overview of the global high resolution daily extreme urban heat
[03:47] exposure data set which is from 1983 to 2016. 2016. then i will briefly overview an annual global high resolution extreme heat
[03:56] estimates version 1 which will be released this month by nasa sedak i will do a jupiter notebook and qgis
[04:02] demonstration and then we will open it up for questions uh and answer session so so throughout this rset training you've
[04:11] probably become familiar with land surface temperature land surface temperature is measured by many earth observation platforms including modis
[04:21] and landsat and it is a measure of the radiated heat off the surface but humans don't live exactly on the surface of the
[04:29] planet but rather one or two meters above above as such land surface temperature can vary greatly over short distances and
[04:37] short timestamps you can time spans you can think about this as in standing in a grassy field next to a parking lot if
[04:44] you put your hand on the grass the grass will be relatively cool compared to touching the asphalt
[04:50] now now for us humans in terms of human health and well-being the radiating heat does influence our
[04:58] lived experience but air temperature specifically 2 meter air temperature is a much better indicator of heat stress
[05:05] that can affect our health and well-being or in other words heat stress is much more complex than just land surface
[05:14] temperature alone you have the differences between indoor and outdoor air temperature uh the influences of wind speed relative
[05:22] humidity whether you're in shade and and um many other climatological factors and this again is difficult or this can be difficult to
[05:32] measure with a satellite alone um if you're just looking at land surface temperature one metric used largely by physiologists
[05:44] and the public health community is called wet bulb globe temperature wet bulb globe temperature is typically measured with a field instrument so on
[05:54] the ground and it accounts for 2 meter air temperature relative humidity radiated heat so your land surface temperature
[06:02] and wind speeds or air flows wet bulb love temperature is uh uh when it's calculated with an instrument
[06:11] 70 of it is the natural wick temperature so this is the temperature of wetted cotton that is covered in shade
[06:19] the temperature of a black globe to measure the radiated heat so basically the temperature of a black
[06:25] ball being exposed and then the air temperature not exposed it is important to note that wet bulb
[06:32] globe temperature and wet bulb temperature both used widely in academia as well as in policy maker spheres are two different
[06:41] metrics metrics that require different parameterizations and they should not be confused because say a 30 degree c of
[06:49] wet bulb glow temperature is much different than 30 degrees c of wet bulb temperature to overview the history of wet ball
[06:58] globe temperature it was created in the 1950s by the united states marine corps and it was used to estimate heat stress and heat
[07:06] load among uh marines who who you know tend to be younger and fit people and then it evolved into a
[07:15] reference for occupational heat health standards uh used by the international standards organization and it's widely used in occupational heat health as well
[07:23] as um ins by different athletic bodies to govern when sport sporting events should be cancelled wet bulb glove temperatures are usually
[07:32] referenced for both acclimated and not acclimated folks and different metabolic rates to come up with thresholds when
[07:42] activities should be stopped or when resting should be implemented to reduce the impacts of extreme hot human heat on
[07:49] human health and well-being again the international standards organization iso reference 7243 is often cited both again in the academic literature
[08:02] and by policymakers for thresholds that are dangerous to human health and well-being and i want to emphasize that
[08:09] these thresholds were designed for quote unquote the working man generally young fit healthy american marines who are not the vast majority of people
[08:18] who are at most risk for heat stress i say this because for most people especially those who have pre-existing
[08:25] conditions or from vulnerable populations lower thresholds may be more appropriate to identify dangerous breaking points or thresholds that cause damage to human
[08:35] health and well-being now i said that wet ball globe temperature typically is measured by a field instrument many different
[08:44] scientific teams have come up with ways to estimate wet bulb globe temperature through earth satellite-borne earth observation
[08:52] platforms platforms as well as climate reanalysis data products like i said there are several different methodologies for
[09:00] calculating wet bulb globe temperature with meteorological data this paper from kong in hubert is a great overview it
[09:07] was in earth's future it was published in january 22 and i highly recommend giving it a detailed reading if you'd
[09:13] like more information about different ways to parameterize wet bulb globe temperature temperature i will present one way in which you can
[09:19] present or you can calculate wet bulb globe temperature with uh different gridded meteorological products the challenge here
[09:31] is that most of the planet and most people on the planet don't live in an area that has a weather station with a
[09:39] longitudinal reporting record this paper i published with ben zycheck johns hopkins university in 2021 we found that
[09:48] approximately 4 billion people on the planet live more than 25 kilometers away from a weather station with a robust
[09:56] longitudinal longitudinal reporting record record half of these people can be classified as urban residents so this means that earth observation
[10:06] satellites are really important for not just understanding extreme heat impact in cities today but also how extreme heat has changed
[10:15] over time and what extreme heat may look like for urban residents worldwide under a warmer climate so for example
[10:25] in india there are approximately 3 000 urban settlements but only 111 have longitudinal weather stations again to
[10:33] re-emphasize this point that earth observations are key for monitoring assessing historical change and predicting future uh extreme heat stress
[10:43] under climate change as well as term and seasonal forecasting so this figure right here the pink and
[10:50] purple dots are where there are weather stations and the green dots are rough estimations of where there are urban
[10:55] settlements settlements it's not just for india but offers for all of southern asia here and you can
[11:00] see there are far fewer weather stations than our urban settlements as i said satellite data combined with
[11:08] station data can gap fill areas where we lack temperature data or meteorological data to approximate wet bulb globe
[11:15] temperature temperature in this data set that i'm going to present today i use church daily which is a new data set from the uc santa
[11:22] barbara climate hazard center and has been shown to be the most accurate and highest resolution daily global
[11:28] temperature product available from 1983 to 2016. it's available at approximately five by five kilometer grid cells and it
[11:37] will be updated to near present time sometime probably in early 2023 right now the data set only goes to 2016.
[11:46] church's daily advantage is that it leverages the temporal accuracy of station station with the spatial coverage of
[11:52] meteorological satellites the doi for the raw church data is at the bottom of this slide and right here is um a figure from paper
[12:01] i publish where we compare uh the church daily station station extreme heat reporting record with the princeton global enforcing data set
[12:10] which is another gridded meteorological data set and we have much better accuracy with our derived temperature data set against stations
[12:19] than this other dataset the same is true for era 5 climate re-analysis product church daily outperforms that for
[12:25] measuring extreme heat to convert charts daily into wet bulb globe temperature to produce the global high resolution daily extreme heat extreme
[12:39] urban heat exposure data set or uhe daily data set we first take the church daily maximum daily temperature record so this is a
[12:49] daily temperature record from 1983 to 2016 with near global coverage we then also use a derived daily minimum
[12:57] relative humidity uh estimate and we follow the national weather service procedure to turn that into a daily heat index
[13:08] uh value which is what we use in the united states to look at hot humid heat or kind of what it feels like
[13:15] then following this paper bernard and hiendo pardon for the prince pronunciation 2015 we convert daily heat index to daily wet
[13:26] bulb globe temperature it's important to note that this is an approximated wet bulb globe temperature estimation covering a range of relative humidity
[13:35] estimates estimates but with fixed wind speed and radiation so again it is very much an approximated wet bulb globe temperature
[13:43] but it can be tied back to those iso standards so we can get a fairly good understanding again of global coverage
[13:51] of how hot humid heat stress has changed over the surface of the planet to build the uhe daily data set we
[14:01] combine the church daily wet bulb globe maximum record with the global human settlement layer urban center database
[14:08] the global human settlement layer urban center database is a remote sense-derived estimate of how many people live in urban settlements for the
[14:16] whole planet benchmarked at 1975 1990 2000 2010 and i believe now 2020 with the latest data release
[14:27] what's cool about this data set is we have a fairly good understanding of not just how many people live in cities
[14:34] across the planet over about a 40-year period but also how big those cities are with this we can calculate the area
[14:44] average daily maximum wet bulb globe temperature where each urban settlement on the planet for a 34 year period this yielded about 150
[14:54] million daily observations and then we can apply the iso threshold to identify how many days for each city
[15:02] on the planet exceeded a dangerous heat threshold so for example wet bulb globe temperature of 30. how many days did
[15:12] each city on the planet for this time period exceed that threshold so the graph or part of the graphic on
[15:19] my screen right here shows uh loosely our methods we take a church daily wet bulb globe temperature maximum
[15:26] record record we overlay the global human settlement layer urban center database we turn that into a raster and then we
[15:34] calculate the area average wet bulb globe temperature data set for every day and then we identify which
[15:41] days exceeded a dangerous uh extreme heat threshold this area right here is for the nile river valley and you can
[15:48] see uh loosely in the bottom right that it goes from white white to blue meaning that the southern nile area had more hot
[15:58] humid days than the northern region which makes sense given that it gets warmer as you get closer into the sahara
[16:07] to measure exposure we use an established metric called person days this metric takes the number of hot
[16:14] humid days in a given year and multiplies it by the population exposed we can do this for any geography so for
[16:22] new york city hypothetically speaking we could say that there are 10 million people in new york city and in 2016
[16:29] there were two dangerous hot humid days thus there would be 20 million person days for 2016 for new york city
[16:37] we can then look at how person days has changed through time and fit a trend line to that and i'll go through that in
[16:44] a little bit more detail in a moment and once we fit the trend line we can look at the average rate of change in
[16:49] exposure exposure so basically how hot is the city getting and how many more people are being exposed for a given
[16:57] year year these are results from a paper we publish in pnas last year and this kind of goes through in more detail at the
[17:06] global level how urban extreme heat exposure has changed over time we found that approximately extreme urban heat exposure increased
[17:15] 200 percent from 1983 to 2016 and total urban warming contributed a third of the annual rate of increase in exposure
[17:26] so in this figure the yellow line represents represents the total increase in person days per year year the blue line is the trend due to
[17:37] population growth alone and the purple line is the trend due to urban warming it's very important to note in this data
[17:44] set that urban warming is both a combination of climate change and the urban heat island effect we do
[17:51] not back out the impact of the urban heat island effect versus climate change in this data set
[17:57] you'll note that the slope of the purple line plus the slope of the blue line equals the slope of the yellow line so
[18:04] we can see whether for a given city or given geography whether exposure was driven by more people moving to a city
[18:12] or by the city warming up in itself which is true for most of europe european cities don't tend to be
[18:17] increasing in population but they are warming but for much of the rest of the planet it's a combination of both
[18:23] population change and increased warming so like i said we can disaggregate this data set for every city on the planet
[18:34] and i'll show this in my demonstration what this looks like programmatically but here we show the annual rate of
[18:39] change and person days from 1983 to 2016 we find that 6 000 urban settlements had an increase in exposure
[18:48] which housed 1.7 billion people in 2016. you'll see that those cities with the greatest increase in person days really
[18:55] concentrate at the mid and low latitudes with this data set like i said we can also estimate whether for a given
[19:04] geography the increase in exposure is driven by population growth or by warming and you'll see that some cities
[19:12] it's a combination of two or it's equal i will note with this graph that white and purple dots are plotted over green
[19:19] dots and there's far more green dots than white and purple dots meaning for many places on the planet even with
[19:25] global warming people are moving to cities and thus exposure is increasing we can also look at this data set at
[19:35] just the warming signal so we can ask the question for a given city how much hotter hotter is it at night during 2016 than it was
[19:44] in 1983 and what is the annual average rate of change for dangerous hot human heat heat i should note here that all the data i'm
[19:51] presenting right now uses a wet bulb temperature daily maximum threshold of 30c the data set also has it estimated
[20:00] for 28c and 32c and i'll show you that more momentarily in the demonstration what's really interesting to me about
[20:09] this data set is we can dive into very localized heterogeneous patterns even though this data set was developed with
[20:15] a very top-down approach it's very locally applicable so here we have three large south asian cities kolkata
[20:23] delhi and dhaka and on the x er on the y axis we have days per year where the wet bulb globe
[20:30] temperature exceeded 30 c the y axis we are probably on the x-axis we have time you can see that kolkata tends to be on
[20:38] average hotter and humidor than delhi and dhaka and that its rate of change is greater than delhi and dhaka in terms of
[20:47] the number of hot humid days in 2016 versus versus 1983. so this data set the global high
[20:57] resolution daily extreme urban heat exposure dataset uhe daily is available from the nasa socioeconomic data and application center or cdec
[21:06] it is live right now you can google it or you can just jump on on nasa cdoc and find it right now if you
[21:13] just type in urban heat i'll put the doi up in a second um um it includes every hot humid heat wave so
[21:21] not just how many days per year but when each heat wave was based on these criteria how hot the heat wave was
[21:28] um and how long it lasted for three different iso extreme heat thresholds wet bulb glow max 28 30 and 32
[21:37] it also includes annual person day estimates or exposure estimates for each urban settlements plus exposure and warming
[21:45] warming warming trends the data set is available in geojson csv and shapefile formats here's the doi for the data set
[21:58] the second data set that will be released by nasa cdac this month is the annual global high resolution extreme
[22:04] heat estimates version 1. this data set is very similar except for it only focuses on the rate
[22:12] of warming and it's not just focused on urban areas i'll show you in a moment what i mean by that
[22:18] so right now we have the time series of the number of days per year where wet bulb globe maximum exceeded
[22:24] 28c and the locations on the planet where that happened and you'll see for a given year some
[22:31] areas might be yellow signifying that wet bulb glow maximum exceeded 28c for for say 300 days darker areas might be less
[22:42] this data set is available with 34 geotiff files and we also have the annual rate of change calculated too
[22:50] and in my demonstration i will show you what i mean by that so again the annual global high
[22:56] resolution extreme heat estimate data set to be released by nasa cdac this will be the doi it's not uh activated right now but
[23:05] it should be by the time this presentation is given it's similar to the uhe daily it's the
[23:11] global annual account number of days at five kilometers across these three set thresholds and also has the rate of
[23:17] change change so right now we have the array or this figure right here we have the arabian
[23:22] peninsula a pink pixel increased on average 2.5 days per year from 1983 to 19 to 2016 where the wet ball glow maximum
[23:34] temperature exceeded 32c a green pixel is half a day so so a green pixel half a day per year over
[23:42] 34 years is about 17 days more of hot humid heat dangerous hot humidity heat in 2016 then in 1983. the blue areas
[23:52] here represent urban boundaries and i'll show in my demonstration how you can approximate approximate a hot humid
[24:01] urban heat island effect and you can dive into an urban area and calculate how much more did this urban area heat
[24:08] up than its surrounded surrounding rural area and that gives us an indication of how much the urban
[24:14] built environment might be driving our increase in dangerous high humid heat for a given geography so now i'm going to launch into a
[24:22] demonstration demonstration so this is the national socioeconomic data data nasa socioeconomic data and application center website i've navigated to
[24:33] uh the uhe daily data set here's a descriptor of it the data set download takes a moment my internet is a little
[24:42] slow today but this should load right up and you can download it in tabular csv json or shapefiles the documentation
[24:56] page leads to a full description of our methods in our pnas publication as well as metadata i have already
[25:03] downloaded the data set here is what the files will look like you have these different thresholds and if we go into
[25:16] here is the data set so now to look at this in a jupyter notebook we can start loading the data
[25:25] this uh data set is available or pardon me this notebook is available on github and i think i can pull it up right now
[25:35] just so you see where it is in github it's in this notebooks and it's this nasa rsa tutorial for later use also
[25:42] feel free to send me an email and i can send you the jupiter notebook so these are the dependencies you will
[25:48] need you'll need pandas geopandas numpy os os uh matlab plot pie plot and seaborn to make this notebook work
[25:59] the first thing i do is i'm going to zoom in a little bit i set the file path and i set the data
[26:06] set this string wet bulb globe temperature max 30 will be common throughout so it makes it really easy
[26:12] to just change part of your code to load say the 28 threshold or the 32 threshold so i set the data set and the path
[26:23] and the first thing we're going to look at is the annual rate of the annual exposure so this is the
[26:28] person days for a given year this is identified with this exp suffix suffix so i'll load the data and i'll show you
[26:38] what it looks like so right here you have a unique identifier that maps back to the global
[26:45] human settlement urban center database the year the total days that exceeded wet bulb globe temperature 30 the estimated
[26:55] population population the population in 1983 the population in 2016 2016 the person days the person days heat
[27:03] person days pop and then some geographic information information so so in 2016 there were two hot days for this
[27:11] city the population was approximately 600 000 people so our per our person days is two times 2016 and then we can
[27:19] back out the contribution from people population versus warming we can also look at the data set through an english language
[27:32] name church based on geography so with this code cell we're going to subset the exposure data set
[27:38] for india only and we see you know here is a city in 1983 it had 81 days the population was approximately
[27:49] 250 000 people it's uh euchre pardon me for the mispronunciation india here's the latin long if you want to
[27:57] plot it and some auxiliary geographic information and we can also do a search uh based on city names so here i'm going to look for
[28:06] kolkata based on this string k-o-l-k and see if i can find the data for calcutta and so here is the exposure record from
[28:15] 1983 to 2016 for kolkata again here are the hot humid days or days that exceeded wet ball boat temperature of 30 the
[28:23] population population of the city in the given year and then the person days and then we can plot
[28:31] um um we can plot this data to see how exposures change which is similar to some of the graphs i showed in my
[28:37] presentation presentation so i'm subsetting the data here based on the id and now this is all the data for kolkata
[28:47] and we can look at how uh annual exposure or person days change for coconut from 1983 to 2016.
[29:00] so here each bar represents the total express exposure again that's hot humid days multiplied by the number of people
[29:07] explo exposed and then the increase for kolkata kolkata over the time frame of the data set we can also ask the question as i said
[29:17] what is a contribution total exposure from warming versus population growth and here we subset the three data sets
[29:24] person days is total people days heat is a contribution from uh heating and people days pop is the complete
[29:31] contribution to person days from population growth and so here's our graph and we can see that in kokata a lot of the green areas
[29:43] is the contribution to this very light pink let's change that a little bit to to 0.2 0.2 there we go see it a little better
[29:55] so here we have the increase in exposure due to heat and green due to population change and blue and the increase the
[30:02] total the blue plus the green equals the red and we can see that in kolkata a huge
[30:10] part of the signal and we discussed this in the pnas paper um in terms of total exposure is driven
[30:16] by an increase in days per year where wet bulb globe temperature exceeds 30. we can also ask how many days per year
[30:24] was wetball globe temperature max greater than 30 in kolkata this is a subset of one of the graphs in my
[30:30] presentation presentation and you do this by pulling the total days column from the data set and here the count number of days where
[30:39] what bulb globe temperature exceeded 30 for kolkata from 1983 to 2016. so next in the data set we can also ask
[30:51] what was the rate of change basically how much per year did exposure change and how much of that exposure was
[30:58] driven by population change or by increased heating again this is a rate of change and we use this by using the data set
[31:07] wet bulb globe max30 trend p or heat p05 and so this is um the increase in hot humid days per year
[31:19] and we see that our coefficient of total days is 0.48 so about a half a day per year increase
[31:28] is how much the rate of change in hot humid days was for kolkata using the 30 c threshold
[31:35] and again we could uh subset and search for kolkata and and oh pardon me this this initial one is
[31:44] not kolkata but then we can subset based on the unique id for kolkata and we can ask this question pulling the
[31:54] coefficient of total days and we see that the increase in warming was about 1.8 days per year
[32:00] and then using seaborn we could actually plot that so we'll take this graph and then we'll plot the trend line across it
[32:14] and and here's our trend line with confident intervals and the slope of this line is approximately 1.8 days per year
[32:23] as i said in the beginning of the introduction the data set we also have the the individual heat waves along the
[32:30] statistics for those heat waves based on those thresholds um i want to emphasize that there is no universal definition
[32:37] for what constitute a heat wave and it really comes down to the local context to define them but with a global data
[32:44] set we decided to use a globally accepted standard to define what was a hot humid day but again i want to emphasize different
[32:52] locales locales practitioners and researchers should identify the appropriate threshold for them them um um so this is a really big data set because
[33:02] again it's every heat wave so it takes a moment to load in but once it's loaded it will come up on
[33:08] the screen and i can walk through some different research questions we can ask of the data set so one moment while
[33:14] this loads so there it goes it loads um um so so i'm going to just jump right here again
[33:32] i subset the data based on this 9691 identifier for kokata and this is what the heatwave dataset
[33:39] looks like so you have your uh city id the year of the heatwave the duration of the heat wave the average wet bulb globe
[33:46] temperature the average intensity so that's you can think of that as excessive heat so how much was 30
[33:52] degrees exceeded on average the total intensity is the summation of all the excess heat based on that
[34:00] threshold we have the event dates the intensity a unique identifier for each heat wave and then the auxiliary
[34:09] information so right now this is every heat wave that well it's just the first couple but every heat wave based on the threshold
[34:18] consecutive days where where um wet bulb temperature exceeded 30 c focal cutter so we can ask some nice questions um we
[34:27] can subset this for heat waves from 1983 that exceeded wet bulb group temperature of 30 for kolkata that lasted more than
[34:36] 30 days so we subset that and then we're going to ask well how many heat waves were
[34:42] there that exceeded 30 days in kolkata over this time period there were 10 um we can ask what years did these heat
[34:51] waves happen 1989 1989 96 99 2000 2005 2008 2010 2012 2015-2030 we can also uh look at in the event ids
[35:07] if we want to just gather all of them and keep track of them based on a unique
[35:11] identifier identifier so this is the event id of a certain heat wave from 2016 where the duration of the heat wave was
[35:22] greater than uh 30 days and we can look at that oh pardon me this is an old set of code just changes
[35:30] really quickly i was looking for 50 day ones so here is your heat wave um so we see again that it was in 2016
[35:39] it lasted 31 days here the dates the intensity and we can even look at you know all the dates
[35:48] that this heat wave happened um um i highly recommend if you're going to be using the heatwave data set and again
[35:56] the file name for the heatwave dataset is um um pardon me i scrolled too far up the file
[36:05] name is the stats suffix for the data set so if you're using this to use the json files because
[36:14] this jsons will allow you to read these lists otherwise they get loaded in as strings and you have to parse them
[36:21] yourself so again i really recommend using the json version not the csv or the shapefiles if you're interested in
[36:27] looking at individual heat waves again this is for 13 000 cities not just kolkata so we can also subset this into a data
[36:37] frame frame so here is um our dates of extreme heat in 2016 uh that for this one giant heat
[36:47] wave and then the temperature is for each data set so the last thing i'll show you is the
[36:54] um um the trend in exposure so we can look at which which cities have the highest rate of increase
[37:00] in person day exposure over time and that's what this trends p days at 0.05 and we'll load this into here and again
[37:09] we see our coefficient um um of person days so this is the increase in person days per year this is the
[37:16] p-value so we see it's just statistical significance significance and we can sort them um um based on this coefficient of b days
[37:28] and we can rename the columns to something a little nicer all the column names are well described in the read me
[37:34] files that come with these data sets but also again this coda is publicly available available and and we make a nice data frame here where we
[37:45] have the id we have the exposure trend the days per year increase the city um the populations at different time
[37:53] points and these are the way this uh code is written these are ranked ordered so we see dhaka delhi
[38:00] kolkata bangkok mumbai karachi are top-ranked cities in terms of global increase in extreme heat exposure from 1983 to 2016.
[38:12] now very briefly i'm going to go to qgis so we can look at this new data set i'm developing
[38:20] that again will be released this month it may be fully released by the time the seminar is live
[38:27] right now i have qgs i have the openstreetmap platform open and i have uh the wet bulb globe temp
[38:36] i'm going to turn this off count days for the year 2000 so here we have them listed black areas are
[38:44] zero zero bright yellow is 365 days that exceeded a wet bulb globe temperature of the year 2000 this is global
[38:53] we can overlay 30 and as you would expect fewer parts of the planet have you know days that exceed a wet bulk
[39:00] globe temp of 30 and even fewer have an increase of uh or pardon me count number of days per
[39:09] year where a wet bulb globe temperature maximum exceeded 32. zoom in here and we see this is largely
[39:15] in the persian gulf region and parts of southern asia these rasters are available again from 1983 to 2016. i just have some of them
[39:27] loaded loaded but if we zoom back out to the global level level this is our account number of days per
[39:33] year in 2016 and then i'll put the that exceeded 30c and this is 2000. so you can see globally very
[39:42] quickly that 2016 was a much hotter day for almost well a huge part of the planet pardon me
[39:49] 2016 was a much hotter year than 2000 for much of the planet in terms of dangerous hot humid heat
[39:58] we also have the trends and this is statistically significant and 0.05 and this is what that figure was
[40:05] shown in my presentation so the white areas are five kilometer grid cells that increased by about a half a day per year where wet
[40:16] bulb glow temperature or days per year where wet bulb globe temperature max exceeded 28 degrees pink is six days per year
[40:25] six day per year increase means that some of these locations are saturating where every day now exceeds a wet ball
[40:32] globe temperature maximum of 28 degrees this is what it looks like the trend line looks like for 30 degrees you'll
[40:41] see some interesting things that um i'm excited to dive into this region right here actually shows that wet bulb temperature days per year
[40:50] may be going down and i think this might be have to do with a drying signal because again wet bulb growth
[40:56] temperature is a combination of humidity and temperature so temperatures may still be going up but hot humid
[41:02] temperatures might be decreasing in this region but in general we see that wet bulb globe temperatures increased
[41:10] for a lot of mid-latitude and low latitude locations on the planet and then again at the wet bulb globe
[41:17] temperature of 32 degrees so i'm going to just zoom in on um or just present a few things you can do
[41:26] so you can ingest a shape file so these are national boundaries this is a boundary of india and then using the
[41:34] raster extraction you can clip your raster um by a mass layer so i'm not actually going to do this but
[41:42] so this is wet bulb globe temperature of 30 and here's our masked layer where's our india boundary here's our
[41:49] india boundary and if i hit ref it will produce a subset just for india and i have already done that so i'm
[41:57] going to show you what that looks like so here's our subset for india um the colors haven't been changed but we can
[42:04] zoom in on that and that's what it looks like for india so we just isolated the wet bulb
[42:10] temperature of 30 trend for india um um and we can also do this um like i said you could take one of these
[42:19] and look at the change of an urban versus a surrounding or uh rural area so so i changed the colors here so uh so they
[42:30] pop a little bit more but we're going to zoom in on the miami or the western southwestern coast of florida
[42:35] here is where miami and fort lauderdale are you can overlay a boundary file of urban centers so i'll turn that off
[42:46] so this is the rough uh land surface area of miami fort lauderdale area i've isolated that polygon here
[42:56] and then i've buffered it using again a qgis so if you go to vector vector and you go to processing tools and you
[43:04] go to buffer and this is in degrees so approximately 0.1 is a 10 kilometer buffer around it
[43:14] and then you can take the difference in that buffer and see okay so this is our rough surrounding 10 kilometer buffer
[43:21] around uh miami florida rail and then you can clip your rasters um um oops burn me so that's your surrounding buffer i
[43:33] haven't changed the colors so that's your approximately you know your 10 km rural area and that's with the urban
[43:40] center and so you could come up with the average wet bulb globe temperature increase for your rural area versus your
[43:47] urban area and that would give you an approximation of your wet bulb globe temperature impact of the urban heat
[43:53] island of the surrounding area but again if you just visually look at miami you can see these
[44:00] pink areas are increasing at 1.5 or primarily 1.25 and purple areas are one day per year the green areas are inland
[44:09] much more rural areas where you see much less impact of extreme heating now i'm not going to say whether this was all
[44:16] urban heat island effect or climate change these are very complex processes but the cool thing about this data set
[44:22] is it will at least give you a general understanding of how urban versus rural areas are heating up at the global scale
[44:28] and i tried to make it as simple and usable as possible so with that i'm going to end my
[44:32] demonstration and i'm going to pass it off back to sean and here are my references and with that i thank you for being here
[44:51] and i open it up for questions and answers and pass us on to uh back to the
[44:56] administrators thank you cascade for the wonderful presentation and demonstration we've received a number of questions from participants and for those online who
[45:06] would like to ask a question to dr tucholski please enter your questions in the q a box we will answer them in the
[45:12] order they were received we will post the q a document to the training website following the conclusion of the webinar
[45:19] below is the contact information for dr tuholski along with links to the training page and the rset website
[45:27] we will now transition to the question and answer session of today's training we appreciate your attention and please
[45:32] submit your questions if you haven't already we will get through as many as possible in the time remaining thank you
[45:51] wonderful and thank you for everybody that have been contributing your questions we've gotten uh quite a few
[45:55] already and they're all very good so if you have any please do feel free we still have plenty of time left roughly
[46:01] 45 minutes today in this final part of the webinar series on urban heat islands and extreme heat so again we do encourage if you
[46:10] have questions please do submit them jumping into question number one uh what is the difference between wet
[46:18] bulb globe temperature and wet bulb temperature temperature how is wet bulb temperature measured and used uh cascade over to you if you want
[46:27] to unmute to answer that yeah can you hear me uh yes we sure can excellent so i started answering a bit
[46:36] of this in the text um but basically what bulb temperature is uh the temperature at which um
[46:44] uh you don't get any evaporative cooling from uh increased moisture so basically uh uh and water can't uh
[46:53] basically is the temperature which relative humidity is equal to 100 and uh under given conditions and it is
[47:01] commonly used with climate analysis products products um because it's easy well relatively easy to parameterize from it i believe
[47:08] what goes into it is your saturation vapor pressure and your air temperature wet bulb glove temperature as i said in
[47:14] the talk is much more field instrument measurement that incorporates wind speed and an attempt for radiated heat whereas
[47:21] what bulb temperature does not have that as a parameterization and they're really two different metrics used by different communities and i
[47:30] don't think one is per se more informative or less important either i think they're both fairly valuable the important thing is just not
[47:36] to confuse them because they're both cent and celsius so wet bulb temperature of 30 and wet bulb globe temperature of 30 are not
[47:45] equal and sometimes even myself will mix them up just when i'm speaking because they're very similar names but they're they're two
[47:52] different metrics wonderful thank you cascade great moving on to question number two the health burden of heat varies by
[48:07] climate region population characteristics and adaptation capacity are you not generalizing too much when you use one same threshold for the
[48:16] entire globe what is a hot day for alaska may not be in tanzania for example yeah and that's you know when we wrote
[48:25] this paper that was what we uh wrestled with in our initial analysis is how do we do a global scale comparative
[48:34] analysis that is fairly straightforward but also make it generalizable for any uh apparently make it specific enough
[48:41] for any local context so we arrived at least for the initial analysis at using three different whip-up glove
[48:47] temperatures based on international standards organization criteria but as i said in the start of my talk those
[48:53] criteria are really based on old you know studies that are over 50 years old based on a very homogeneous
[49:00] population and i think that a more detailed analysis for different geographies really need to incorporate that place-based analysis so perhaps
[49:11] perhaps for you know researchers or stakeholders in northern latitudes the wet bulb globe temperature of 28 still isn't even
[49:20] applicable and i hope with further releases we can dive into some more locally locally specific specific data sets and create them as needed for
[49:29] groups around the planet but yeah i fully agree with that point it's really hard to come up with
[49:34] generalizable extreme heat thresholds great thank you again cascade uh moving on to question number three how can we use urban heat exposure uh
[49:49] daily data set on a neighborhood scale which scale best fits use this methodology so um a couple of points
[49:58] in terms of historical data sets um until actually i think last week a new data set came out that might be global
[50:07] at one kilometer from the year 2000 but in general five kilometer is the highest resolution um church daily is the
[50:15] highest resolution temperature record produced produced with the kind of accuracy that it yields and so the uhe dataset cannot be used
[50:25] for enable neighborhood scale analysis it's really to inter-compare different urban mid-settlements and i'm very cognizant especially as a geographer
[50:32] that the word urban means many different things in many different places so comparing comparing you know the
[50:39] area average temperature of cairo to helena montana is just it's not necessarily the best metric and that's
[50:45] why we produce the second data set with just the actual count days per hot days at the raster level so that researchers
[50:54] can identify the geographies of interest for themselves and five kilometers does allow for some neighborhood scale analysis we've actually been working on
[51:03] some urban heat island hot humid urban heat island mapping of new york city and it does delineate um pretty well between
[51:09] the burrows and some general uh neighborhood characteristics but to my knowledge you're not going to find you
[51:17] know like a 30 meter hot humid uh data set that goes back into the 1980s unfortunately we just
[51:23] don't don't didn't have the capacity to produce data sites like that that uh long ago great yeah that's a really good point
[51:32] and getting back to if you remember from part one of this webinar series when we discussed some of the limitations of
[51:39] satellite remote sensing and derived products products it's very difficult to have very high resolutions in both temporal
[51:47] and spatial and i think we're we're seeing that now so it's really a compromise on using uh
[51:54] the highest resolution for your application application and um so hopefully hopefully whoever asked that we'll be able to to find that
[52:01] happy medium so moving on question number four is there a particular reason on the 28 ce benchmark for the days per
[52:09] year year wet bulb globe temperature max on page 27 yeah i um as i said earlier and i put
[52:18] the link into the a really nice paper because iso standards are actually not open source so that's a nice link to a
[52:24] paper where you can go read about uh iso standards or if you go into google scholar and type in a web globe
[52:30] temperature iso standards to give you an overview of the history and there's lots and lots and lots of critiques
[52:36] there's um the paper i presented or had a screenshot of um i think it's a kong and uber paper
[52:43] um um critiques different um ways to calculate wet bulb glove temperature from satellite observations or climate re-analysis products
[52:53] and so just to get to your question 28 is um follows iso standard for um i believe unacclimated people working
[53:02] under moderate uh stress and so that's uh we figured that was uh or we decided that was gonna be the
[53:09] lowest end of this dataset um however like i said we're very cognizant that that may be too hot
[53:18] to really understand extreme high humid heat stress especially in northern latitudes or southern latitude areas great thanks cascade um question number
[53:31] five five when should we use land surface temperature or wet bulb globe temperature to create heat maps
[53:40] oh i don't want to get in trouble with my colleagues here um so i will give you
[53:44] a broad answer and not get into specific i think um many of the heat health scholars both from the public health
[53:52] side but also the remote sensing side um um i work with have pointed out that landscape first temperature
[54:00] does offer um um a good understanding at a very fine spatial and temporal resolution of how he bird may vary across like a given
[54:11] urban area you know from building to building the problem with land surface temperature as has been discussed in
[54:17] this is it um it's not what we actually experience as humans that a parcel of air you know as you're walking around
[54:25] through a city it does change fairly significant between neighborhoods but not at the way that a satellite will
[54:31] read land surface temperature between as i presented asphalt and grass literally right next to each other you can have a
[54:36] huge temperature difference so so to your question i would say you should use land surface temperature if you want a high understanding of how
[54:47] land surface temperature varies across a given geographer geography with the understanding understanding that it does not necessarily reflect
[54:54] heat health burden or impacts to human livelihood as well as say a derived wet bulb globe temperature
[55:02] that i present here which may not provide the spatial resolution but is i would say better connected to
[55:09] heat health outcomes again with the caveat that we're using very broad breast thresholds with this data set
[55:19] great i like how you ordered that cascade you definitely don't don't want to cross paths with any colleagues that
[55:24] are are preferenced one over the other um question number six how do we complement satellite derived land surface temperature and wet bulb
[55:33] globe temperature calculated from gridded daily temperature and humidity and how good is the extreme temperature represented in the gridded data assuming
[55:44] gridded data is interpolated so the grenade data so two things the gridded data is um it is a blend
[55:54] of station observations and satellite observations so so um i'll get into the weeds a little bit the first step is actually a data set
[56:04] called church max which i was not involved in producing the church map max at five kilometer grid cell
[56:13] is is the monthly maximum temperature and that really really goes through uh sorry to double word here the goes um
[56:24] and the various meteorological satellite record and it fully uh i think it's called the grid sat record and they
[56:30] fully remove all cloud screening data data from there and they blend it with station observations using uh the church
[56:39] algorithm to come up with the mean max or pardon me the monthly maximum temperature temperature and then we use that monthly maximum
[56:46] temperature to bias correct down scaled arrow five so basically on a given day an era five uh we subtract the difference between
[56:56] the app the average of the maximum temperatures per air five from the church church uh max monthly maximum temperature
[57:07] so in short it's not interpolated at all it's actually um adjusted using satell basically we're adjusting air five using satellite and
[57:17] station observations to produce a higher resolution data um and i'll put the the paper you want to look up um
[57:27] i'll i'll make sure the link gets up for the church max data site so you can understand in detail how that data set
[57:33] is produced terrific thanks cascade uh okay moving on to question number seven and we use what was discussed here as an
[57:47] exposure component in formulating our heat vulnerability indices um um that's a complex question i would say you can use this as a framing and you
[58:01] definitely can use the second data set i presented in terms of understanding your temperature signal but the uhe dataset itself is really
[58:11] a broadbush ex population exposure but it doesn't speak to [Music] [Music] anything below the city scale in terms
[58:20] of vulnerability so we can say very general generally that new york city is a wealthier city than say
[58:26] cairo and so you know higher exposure levels in new york city may be easier for the government of new york to deal
[58:35] with because they have more money and more infrastructure than cairo so in that way there might be less there
[58:40] may be more exposure but less vulnerability i'm totally speaking off the cuff here my point being is i don't think that you just
[58:47] said speaks very well to anything beyond population level vulnerability for a given urban settlement the second data
[58:54] set very much so can be tied to any other socioeconomic and demographic data set that's basically explicit
[59:02] vulnerability and as i said we're working on that for the city of new york right now actually
[59:11] great i hope uh publication comes out of that would like to read that once it's uh once it's ready for for the public
[59:18] question number eight how is wet bulb globe temperature and wet bulb temperature different excuse me from thermal indices such as
[59:27] pet utci and pt um so i i only am familiar with the acronym utci and uh i can put a a link
[59:38] to a paper that goes i believe somebody just published a paper that goes through like 200 different heat health metrics there
[59:47] are a plethora of them and i i think again last week or two weeks so somebody just published where they go through
[59:52] them so i can't speak to the specifics how wet ball globe temperatures varies between them all i can say is that there
[59:59] are many different extreme heat metrics um um and and that that the research and public health community
[1:00:07] i think is starting to zero in on a few that are most broadly applicable to different contexts
[1:00:15] contexts but at the same time again especially as a geographer i really respect the importance of play
[1:00:21] space and locally specific heat held matrix to make the most sense and with earth observation platforms it's often hard to have that again broad
[1:00:31] spatial generalizability um um but also the to develop a globally broad data set but also incorporate that local
[1:00:40] context context so i'm sorry i can't fully answer that question okay wonderful thank you uh question number nine uh these are all been really
[1:00:55] really terrific questions coming in are there any open source models to predict heat waves and heat stress
[1:01:03] um i can't answer that question either in terms of because i'm not a meteorological forecaster i don't know
[1:01:12] if ecwmf or noaa models are open source i know that the resulting data sets are but i don't
[1:01:19] know about the actual parameterization of the models i do know that many meteorological models um um are written in
[1:01:27] uh like fortran and so uh some of them actually haven't been updated to uh uh you know to these modern more modern
[1:01:38] programming languages that my generation of researchers are more familiar with i'm going to call it on my colleague dr
[1:01:47] mita mekta who you heard from in a previous training in part three amita do you know if the geos
[1:01:53] 5 model is can be applied for predicting heat waves and heat stress um um yes i the resolution has to be
[1:02:04] considered considered but but that there is it does provide a prediction of temperatures and humidity both great thank you thank you so much uh
[1:02:20] question number 10 why does the data set stop in 2016 is the data up to 2016 only or is it more updated
[1:02:32] um it's a very simple answer it's not that 2016 due to uh uh uh labor availability of the researchers
[1:02:41] producing the data set uh the cloud screening screening and developing the underlying climatology from the satellite record
[1:02:48] was a tremendous undertaking and that you know i think the church max data was published in 2019 which means
[1:02:54] they finish the analysis sometime in 2017-2018 so that's when their record went through however ucsb climate hazard center will
[1:03:04] be updating all of these data sets to be produced in uh i think with like a month
[1:03:09] or two lag time this this hopefully by the end of 2022 if not early 2023 and that's why these data
[1:03:16] sets are versioned so hopefully we'll have version two um out sometime next year but yeah the goal is to get these data sets so
[1:03:24] they're um operationally effective so that stakeholders can use them right away to understand heat stress as it's happening in your real time
[1:03:37] great thank you thank you cascade well i i do believe we have gotten through all the questions that were
[1:03:44] posed today in this part four final part of the webinar series on assessing urban heat islands and
[1:03:53] extreme heat for for everybody that joined us we hope that you were able to start from uh the first part all the way
[1:04:02] through this last and we thank you we know that this is we hope you got a lot
[1:04:05] of value from this training and we hope that a lot of the uh the applications that you're able to learn in each part
[1:04:12] of the four-part training will help you in your own research and help you if you are applying this in your profession so
[1:04:20] we we we you can expect a survey to be sent to you uh in the next week or two that
[1:04:28] survey will ask you questions on some of the things that you that you learned and and how
[1:04:34] well you will uh apply them in your own work so we encourage all of you when you
[1:04:39] receive that survey in the next week or two please do take the time it only takes five to ten minutes not that long
[1:04:45] to complete that survey we take all of those responses very very very well and we we apply them to how we
[1:04:55] plan our future trainings in terms of the topics that we will train on and how we will run future trainings based on
[1:05:01] the feedback that you're able to give us so please do take the time to complete that survey when it is sent to you soon
[1:05:09] we want to greatly thank our guest presenter today dr cascade duhoulski cascade thank you so much for joining
[1:05:15] today and providing this wonderful presentation and demonstration in jupiter notebook we hope that people will use the the jupiter the the code
[1:05:24] that you wrote in the jupiter notebook to be able to apply it in their own area of interest and we hope that um
[1:05:31] we hope that it does get used by the participants so thank you so much for contributing to this this training and i
[1:05:37] also want to thank the entire arsenal team that has been supporting this training salon hudson odoi sarah
[1:05:44] cutchall jonathan o'brien and brock blevins and as well as amida mechta so thank you for the rsep team
[1:05:51] who contributed to this training and and lastly we do want to thank all the participants again for joining today we
[1:05:57] do hope that you got a lot of value from this training and we hope that you will
[1:06:01] join up on our list serve on the rset listserv to learn about upcoming trainings that might be of interest to
[1:06:06] you in your research or into your profession so thank you for everybody again and we hope you stay safe and we
[1:06:13] hope to see you again soon thank you
