# CO2 Measurements over a Large Urban Area, Part 3/3

`https://www.youtube.com/watch?v=B-Y1uz02Ccg` · id 281 · 2:00:22 · module 44 — Applications of Carbon Dioxide Measurements for Climate-Related Studies

[00:01] welcome to the third and final session of this ret webinar applications of carbon dioxide measurements for climate
[00:09] related studies my name is Erica podest and I am an ret instructor and a scientist at NASA's jet propulsion
[00:17] laboratory where I study terrestrial ecosystems with satellite data today's session will focus on the use of oo3
[00:25] data over a large urban area it will start with a the theoretical portion and will be followed by a demonstration with
[00:34] upiter Notebook on how to access and analyze oo3 data for urban area studies as a reminder this webinar
[00:46] Series has three sessions the first one was a recap of the oo2 and oo3 missions and the characteristics and limitations
[00:56] of the data the second session was on the impact of droughts on co2 and today's session is on uh CO2
[01:05] measurements over a large urban area using data from oc3 there is a homework associated with this training and it will be due on
[01:14] August 14th so we have a new due date and the certificate will be given to those that attended all the live
[01:23] sessions and complete the homework by the due date today we have three guest instructors Dr abich chaty from NASA's
[01:34] jet proportion laboratory he's the project scientist for the oo3 mission and the deputy project scientist for the
[01:41] oo2 mission he'll be presenting the first part of the session discussing the characteristics and uses of CO2 data
[01:49] from oc3 over urban areas it will then be followed by a demonstration that was developed by David and Karen Yuan
[01:59] both from NASA jet proportion laboratory Karen is the oc2 oo3 applications lead and David is the oc2 O3 rset team
[02:09] developer the demo will be presented by Karen Yuan and it will show participants how to access and map oc3 data for an
[02:17] urban area using Jupiter notebook here are the objectives of this session by the end participants will be
[02:26] able to recognize the importance of observing CO2 over metropolitan areas identify important aspects of space-based CO2 measurements over urban
[02:37] areas access subset download and analyze multi-year oc3 Sam data using a Jupiter notebook and visualize this data this
[02:48] Sam data over urban areas to be able to do interpretive and comparative analysis how to ask questions please
[02:59] write your your questions in the questions box and that box is located if you see the three little points on the
[03:06] bottom right you click on there uh you'll have a popup W window and one of them is questions so please write your
[03:15] questions there and we will answer uh your questions at the end of the webinar and you can write your questions as we
[03:23] go so we'll try to get to all of the questions during the Q&A session however if we cannot we will answer the
[03:31] questions on a Google doc and we will be posting this Google doc onto the website in a couple of
[03:40] days now we will start with the first part of the session which will be presented as mentioned by Dr chhat this
[03:47] is the second arset training that Dr chhat has supported as guest instructor he was guest instructor for the first
[03:55] ret CO2 training back in 2022 so it's really great to have him back welcome Dr chat the floor is
[04:05] yours thanks ER well welcome everyone to this part three of this training as Erica mentioned earlier and as you have
[04:15] seen through most of this training session we'll be learning a lot about carbon dioxide emissions and the data
[04:24] that's collected from orbiting carbon Observatory 2 and obser orbiting carbon Observatory 3 today's part will focus primarily on the data that the orbiting
[04:35] carbon Observatory 3 mission Which flies on the International Space Station the data that oo3 is collecting over large
[04:44] urban areas or mega cities we will talk a little bit about why this data is important why we need
[04:52] to study Urban emissions and then move into the type of measurements that O3 provides over urban areas and how those
[05:03] measurements can be used to understand emissions and then finally what we will see is that these measurements by
[05:11] themselves provide an indicator of the net emissions that are happening but what as a community and what the world
[05:19] really wants to know is the different sectors that are contributing to this Urban Urban emissions and so we will see how we can
[05:28] bring in information from other satellites that are flying or other sensors that are operational that provide information about other Trace
[05:39] gases or other greenhouse gases like methane carbon monoxide or nitrogen dioxide how we can use those information
[05:47] together in conjunction with the CO2 observations from oc3 to get an understanding of the sectoral emissions so why are we interested in
[05:59] knowing the emissions from urban areas well I'm sure that most of you live in one or the other urban areas that have
[06:08] been shown in this map uh this map shows all the different pockets of areas that are classified as mega cities or urban
[06:18] areas based on their population characteristics and more than 50% of the global population reside in this in one
[06:28] of these Pockets that are shown here but in reality this only covers 2% of the world's surface however it's these
[06:36] Pockets that are responsible for more than 60% of fossil fuel CO2 emissions so that's like a huge amount that's
[06:45] contributed to the total fossil fuel CO2 emissions just from these urban areas alone now it also turns out that there
[06:56] is going to be a growth of urban areas so the map or the pockets that I showed
[07:02] in the previous map those are not simply static but in fact those areas will continue to expand and grow this is a
[07:10] paper these res uh the figure shown here is taken from a paper by Professor Karen Sito at yel University and back in
[07:19] 2012 uh there were a group of papers that actually looked at forecast of the probabilities of how urban areas will
[07:28] expand expand now there was a lot of the expansion that will happen will mostly happen in areas uh for example just north of
[07:38] Middle East in India and China as well as in several other areas even within the United States as well as like in
[07:46] South South America Now what's kind of interesting is that even though some of these areas will have expansion going
[07:57] on really there weren't many areas where there would be any kind of decline that we would see so in general more and more
[08:05] of the population is expected to move out from rural areas and move into urban areas what that means is that there is
[08:13] going to be more and more emissions that we will see previously I mentioned the number that more than 60% of fossil fuel
[08:20] CO2 emissions will be contributed by urban areas but likely by the time we get to 2050 or around that time we will
[08:30] likely see that more of the contribution of fossil fuel CO2 emissions are coming from urban areas I also strongly recommend you all
[08:39] to check out a couple of these resources on urbanization that's from the National Geographic and then also on the
[08:46] environmental impacts of urban growth which is again a web page that is me uh that is maintained by Professor satto
[08:53] steam at yel University so given that there was there's going to be an increase in both the number of urban areas as well as the
[09:04] fossil fuel emissions that will happen from the urban areas it is not surprising that there are many
[09:10] International entities that are now starting to take lot and more and more action or interested in taking more and
[09:20] uh initiating specific type of activities that will help curb or somehow reduce the am amount of emissions that are happening from urban
[09:30] areas so the most recent or uh at the very highest International level the most recent action that has been
[09:39] initiated is was at the cop 28 last year where several nations came together to form this Coalition for high ambition
[09:49] multi-level Partnerships or champ for climate action and this is the first time that at the UNF C
[09:57] Level different nations have got together to look at their specific cities or subnational regions and come up with a
[10:07] climate action plan similarly there is a group called C40 cities this is a Global Network of mayors of the world's leading cities
[10:17] that are all United in action to confront the climate crisis and the name C40 here comes from the fact that all of
[10:25] these cities that are part of these coalition coalition all of them have population above 100,000 people and what they have
[10:35] realized is that for these cities if they are able to reduce their emissions by 40% then collectively they can meet
[10:42] the goals of the Paris agreement uh if you go into the C40 cities web page uh and if you just t for
[10:50] C40 cities you will see a map of all the different uh a global map showing all the different cities that are part of
[10:57] this Coalition I strong would recommend you to check it out because one of the urban areas or cities that you're living
[11:04] in likely they are part of this group and that will help you follow sort of the actions that the your particular
[11:10] city is taking now in addition to these there are also other suoc or subnational entities for example the
[11:21] II which is a coalition of local governments that are coming together to address sustainability within Lar cities
[11:30] as well as entities like the World Bank group that are actually providing financial and funding support to
[11:36] different cities in order to make sure that they are working towards reducing emissions uh mitigating them and
[11:44] addressing the climate problem or the climate challenge as a whole now all of these different entities they are obviously interested
[11:54] in reducing Urban greenhouse gas emissions but at the same time they're interested in monitoring or tracking them and what they require from all of
[12:03] the work that we do in terms of taking measurements and estimating emissions are information that's policy-driven and
[12:13] actionable this is also reflected a little bit within uh the United States where recently the United States federal
[12:21] government came up with a national strategy to advance an integrated greenhouse gas measurement monitoring and information system and there is this working
[12:32] document that was released last year but one of the interesting pieces of this document is a very strong focus on
[12:40] reducing Urban greenhouse gas emissions maintaining a strong monitoring Network around urban areas and then making sure that different cities or different urban
[12:51] areas are taking actions to mitigate them this is actually a conceptual illustration this is for the Los Angeles
[12:58] basin but just shows a conceptual illustration of how this Urban scale prototype would look like where you have
[13:06] satellites for example like oo2 or oo3 flying above taking measurements you have aircraft monitoring as well as you
[13:14] have like these uh small towers that you can see which are a little bit hazy in the background but you have these Tower
[13:21] sensors that are also U measuring the CO2 and other greenhouse gas emissions so so kind of needless to say
[13:31] that there is a a lot of interest in maintaining uh a strong Network and then monitoring the greenhouse gas emissions
[13:41] now the reason why you need that diverse portfolio of observing systems is because the source of carbon emission
[13:48] within cities can happen from various sectors it's just not it's not necessarily just one single Source if you think about just the urban
[13:57] area city that you live in you know that there is power consumption there are power plants and industries that
[14:04] generate emissions you have the transportation sector like your cars and planes and ships and trains that generate emissions you have the
[14:13] residential and household where you know where we turn on the light and we turn on electricity and a lot of that is
[14:20] coming from CO2 a lot of the directly results in CO2 emissions so I point all of you to this paper that was written by
[14:29] professor John Len from University of Utah that came out in 2018 that actually does a great synopsis or a summary of
[14:37] all the different types of uh emissions all the different types of sectors within a large urban area or a large
[14:44] city and how they all contribute to CO2 emissions what this paper also does and we'll come back to this a little bit
[14:52] later is that it actually links the CO2 emissions that happen the sectors that are responsible to air quality and
[15:00] socioeconomic activity it it really makes for a really fascinating reading that specifically within the urban domain how issues like air quality and
[15:11] pollution those are actually strongly go hand in hand with CO2 emissions CO2 and greenhouse gas emissions now one of the other things
[15:22] that you might come across as you start looking into the literature for urban emissions are what is called as scope
[15:28] one scope scope two and scope three emissions now what this is is that the emissions that happen within an urban
[15:36] domain they are simply getting broken up into the specific sector or region or uh particular uh organization or individual
[15:47] that's generating them scope one typically means that these are direct emissions that are happening within a city boundary and that we can kind of
[15:55] observe from the atmosphere scope two and scope three are more indirect emissions so for example scope 2 refers
[16:03] to let's say electricity steam or something else that's being purchased by the city that's coming from outside but
[16:12] then is contributing to the emissions within the city whereas scope three is more indirect where this can be
[16:19] different goods and services uh wayte that is generated in different operations employees that are commuting from a different area to
[16:28] another area um all of those kind of contribute to scope three the reason that I kind of
[16:35] point this out here is that when we typically talk about emission monitoring from satellites or the data that the
[16:43] satellites see they are looking at the entire atmosphere over an urban domain so they are looking at all of the
[16:50] emissions together and typically it's kind of most easily attributable to the scope one it's very hard to actually
[16:59] pick out scope two and scope three which since all of that information kind of gets mixed together in order to get
[17:07] scope two and scope three you actually need to use more something like bottom up emission inventories or activity
[17:15] based uh data which can then help identify how much of the emissions that you are currently seeing how much of
[17:23] that is originally brought indirectly from the domain outside your particular City or urban area that you are
[17:31] interested in so the traditional way in which urban emissions have been characterized is what is known as bottomup
[17:43] estimation a bottomup estimation typically means that there are many different ways in which bottom up estimation of urban emissions can happen
[17:52] but the most common one there is where we rely on activity data so for example how much fuel is being consumed what the
[18:01] traffic count looks like during the morning and during the evening and statistics from different Industries we take stock of those
[18:10] activity data multiply that by emission factors that are sort of known or established within the literature or
[18:18] reported and generate what are called as emission emission informations um the other way of doing this is instead of relying just on
[18:28] activity data we can use some kind of uh uh some kind of a process based model or
[18:35] some kind of inventory information as well and generate this bottomup estimation there are a variety of different ways that uh this can be done
[18:45] and I have pointed out to a very nice report that was written by the US national academic Sciences board called
[18:53] greenhouse gas emission information for decision- making the hyperlink is provided here so if you go to the
[18:59] hyperlink and look you will find a much more detailed description of how this bottomup estimation is done what are the
[19:07] different types of methods that are used and how we get at this emission information now the big challenge with
[19:16] the bottomup estimation is that sometimes depending upon how the activity data is reported or how the inventory is being generated there can
[19:26] be a huge discrepancy between different bottomup estimates I have shown here three examples this is from a paper that
[19:35] came out in a journal of geophysical research atmospheres in 2020 this paper looked at three different state-ofthe-art bottom up
[19:45] estimation estimates from uh three different inventories or three different data sets um ffd odiac and Edgar and
[19:55] these are just comparison maps that are shown over the Middle East and while when you just like stare at them quickly
[20:02] it sort of looks like well they roughly get maybe sort of the same uh overall they can get like the same type of
[20:09] patterns but if you actually start looking at the differences you can see that there can be some large
[20:15] differences depending upon which region you are looking at and in some cases for example you can have like a lot more
[20:22] granularity uh for example in Edgar or ODC relative to like ffd so there is difference both in not just
[20:32] the spatial distribution of where the emissions are happening but also in the magnitude of the emissions and this can happen due to a
[20:39] variety of reasons because again each of these inventories or uh this activity based information they're being generated using different data sets uh
[20:49] they are using different information uh there can be slight different in the emission emission factors all of these result in some of
[20:58] the these uh differences that we are seeing in this Maps if you actually now scale this up
[21:05] and look at like different urban areas so the previous map was showing for an entire region but let's say if we
[21:12] actually scale up and look at specific urban areas this is from a paper that came out in 2023 by uh anet all in
[21:22] Environmental Research letters and in this case what the authors did was look at emission estimates for a variety of
[21:31] cities that are part of the C40 group so remember the C40 Coalition we talked about earlier here they looked at like I
[21:38] think around 90 or 96 cities within that C40 C40 group oh sorry they looked at 78 of the
[21:47] 96 C40 cities were analyzed in this study um you can see like map of all the different cities just showing the
[21:56] emission estimates and sort of the domain um that have been defined uh for each of those cities and then on the
[22:04] right hand side in this figure what they did was each of these cities as part of the C40 group they have their own way of
[22:11] reporting the emission data so that's part of this GPC inventory um and then the the authors compared this GPC
[22:21] inventory with two other fossil Fu emission estimates one based on Edgar which is again a state-ofthe-art uh Global one and then
[22:31] ODC and what is shown here then is the differences uh between Edgar and GPC or between odak and
[22:41] GPC and quite interestingly we see that if you look at all of the C40 cities together we certainly see that there is
[22:50] like a huge discrepancy between what the cities report versus what our inventory estimates are providing and then if you start breaking
[22:59] up the cities by which particular region they come from whether they are in Africa or whether they are in Latin
[23:05] America or North America then you kind of also see some big differences so for example if you look at all of the
[23:12] African cities together then the self-reported GPC style inventory estimates differ a lot from what Edgar or odak is telling you but over North
[23:24] America for example those differences are kind of much closer and one of the main uh sort of uh
[23:33] highlights from this paper was that this differences between different emission invest uh emission estimates these are highly Regional in nature and you can
[23:43] really see the difference between the annex one like cities that are part of the annex one versus like non- anex one
[23:52] countries so now that we have seen that there is this large difference in bottomup Mission estimates which again
[24:00] is a I will stress that even though there are large differences and very important way in which emission
[24:06] estimates are generated and highly needed especially given remember that bottom up emission estimates are the only way that we can get scope two
[24:15] and scope three emission estimates it's extremely important but clearly there are large differences between them so this brings us to the
[24:23] question that can space base emission estimates such as the one that we derive from oo3 can they be used to keep give
[24:32] us a handle or give us a check on the emission estimates that we derive from bottom up
[24:39] inventories so this is now where we introduce the orbiting carbon Observatory 3 and the specific information that it takes over urban
[24:48] areas and mega cities this is what is done through a particular mode of observation known as the snapshot area
[24:58] map or Sam now on the part one of your training you did hear a little bit about oo2 and
[25:06] oo3 but just to give you all a quick recap oo2 launched in July 2014 it's a free flyer that means it's fly 700 kmet
[25:17] above the Earth's orbit it measures both column average CO2 and solar induced chlorophyll chlorophyll fluoresence oo3 was built from the
[25:27] sprayer of oo2 and instrument and launched 5 years later in 2019 it is on the International Space
[25:34] Station it makes the same measurements as oc2 and even actually operates on the same modes Ned glint and Target that you
[25:43] might recall uh from um what you learned in part one but then it has got this unique fourth mode of observations which
[25:52] is known as a snapshot area mapping mode and what that is is that as The Intern National Space Station is flying over
[26:00] let's say this is like an urban area or like a Target area in this case this is
[26:05] actually a power plant then as the space station flies over then it can quickly take snapshots of images around that
[26:15] particular area or what this allows us is that within a very small localized area within like let's say 80 km by 80
[26:25] km it takes almost 2 minutes for the space station to fly over but within those 2 minutes we can take this very
[26:31] dense concentrated data around that region this very nicely complements the global nater and glint measurements that we take and which we can use to do a lot
[26:43] of the other Sciences for example in part two you learned a lot about the natural fluxes that we estimate and
[26:49] understanding its relation to climate but the Sam mode or snapshot area mapping or Sam mode as we will refer to
[26:56] during the rest of the stock the Sam mode is really really helpful then for constraining urban emissions or
[27:02] emissions around a CO2 hotspot like around power plants Etc where do we take these Sam measurements well we take these Sam
[27:12] measurements across the entire Globe the space station can only see between 52 North to 52 South so that's why this map
[27:20] is sort of truncated but all of these dots that you see on the map this is where we have
[27:28] taken uh observation in the Sam mode now the observations in the Sam mode are taken not only around large CO2 emission
[27:37] hotspots so those are what we call as fossil Sams or those are the ones that are shown in the blue dots but then
[27:44] there are other sort of areas where there is a lot of interest in the scientific community in taking this high
[27:51] density data and those can range for example around volcanoes that are shown in the red dots as as well as around
[27:59] some edian tower sites where we want to better understand the linkages between carbon and water cycle so those are like
[28:06] some of the green and the purple dots are where we take um those sites but all the total Sams that we have taken uh
[28:16] like so in the four years that oo3 operation we have taken around 16,000 Sams out of that 60% of the Sams are
[28:25] taken over the fossil Fu areas information about where these Sams are taken and how many Sams have been taken
[28:34] over a particular location all of that is available on a public web page so again I strongly recommend you to go and
[28:41] check out this oo3 Sam web page that is hyper link here and you will be able to
[28:46] zoom in on the map you will be able to pick out your own City or see if you
[28:51] have taken any Sams there and in fact if you see that there are no Sams that have
[28:57] been taken over the place that you live in or over an area that you are interested in there is also a feature on
[29:03] that web page where you can go and request a Sam and we can certainly take that into
[29:09] account when we are planning the next set of operations so how do these Sams look like when we take them over urban areas
[29:19] this is just two examples one for Los Angeles and one for Mexico City so the Los Angeles map is shown on the left the
[29:27] Mexico City map is shown on the right the Los Angeles map you can clearly see that we have put in some particular
[29:36] markers there for those of you who might be familiar with Los Angeles wherever you see this high intensity yellow uh
[29:45] color that's where we see an enhancement in CO2 concentrations and quite surprisingly or not so surprisingly it turns out that
[29:54] this high CO2 concentrations end up along big Transportation routes or Trucking routes that connect the Port of
[30:02] Los Angeles which is in Long Beach to Downtown LA where a lot of the goods and services sectors are so this lines up
[30:12] along two of the big Interstate routes through which uh trucks move then similarly for Mexico City again if I
[30:20] play this we again see there is like a large CO2 concentration or enhancement that happens around the downtown region
[30:27] whereas if you move away from the downtown to sort of like the background then there is like less CO2
[30:35] concentration there have been these are just two examples uh for the purposes of the stock but there are similar oo3
[30:42] observations that have been made over other urban areas and there is like a whole uh Suite of studies that have now
[30:50] been published I have referenced several of them here but this is not a complete list so I do strongly recommend you to
[30:58] check these studies out but then hopefully these should lead you to other studies that have used oo3 Sam data and
[31:05] there have been emission estimates now that have been derived for Los Angeles for Mexico City uh for a couple of
[31:12] cities in China for Paris uh Boston Etc so what3 CES or the observations that we take those are CO2 concentrations
[31:28] now those observations do carry information about emissions and processes but how do we go from that observations to that
[31:37] emissions this actually happens through a rather complicated process called inverse modeling you learned a little bit about inverse modeling in part two
[31:47] of this training but to sort of reframe that inverse modeling of that methodology within the urban context in
[31:56] this case what we need to do is that we have our observations that Sam observations that we have taken over an
[32:02] urban area those are observations taken here we start with some kind of information about what the background
[32:12] provides or what the background CO2 concentration looks like we Define what the boundary conditions are so let's say
[32:20] around this Los Angeles area we kind of Define a boundary as shown in the square box we have somei information about the
[32:29] emissions that are happening from various sectors whether that's from power plants or from the aviation sector or
[32:36] or Transportation Etc we then use some kind of an atmospheric transport model that simulates the way the winds are blowing
[32:44] around and how much mixing is happening along the inter atmosphere and then come up with simulated observations that we
[32:53] have here and then we start minimizing the differences between the simulated observ observations and the actual observations that are taken so this
[33:01] entire process is known as atmospheric inverse inverse modeling it's a a little bit of a complicated process certainly but there
[33:11] are many many papers that have been written on this topic to on how you can generate this Urban emission estimates
[33:18] and in fact all of the papers that I referenced in the previous page almost all of them have used one or some form
[33:25] of these particular methodology so again one of the reasons why I strongly recommend you to check those
[33:33] out out now while this atmospheric inverse modeling one would think that you can use this observations and directly get
[33:41] at what the emissions are one thing to keep in mind is that atmosphere is an imperfect Communication channel so that
[33:48] means that there is some loss of information that happens through mixing and Ina in this and when you do this
[33:56] inverse modeling when you apply this methodology there are certain uncertainties or certain errors that kind of can creep into your estimates so
[34:06] which is why when you generate a top- Down based emission estimate you always provide not just what the mean estimate
[34:14] is of what the emissions are but then some error bound around it to capture all of the different uncertainties
[34:20] whether that's coming from mixing or how you define your background or errors in your observations Etc however a key point for this type of
[34:32] regional uh Urban inverse modeling is like how you define the background and so I want to spend a little bit of time
[34:40] in giving you a flavor of how this background is defined what the background in this case means is we are trying to refer to a
[34:50] particular area or region of atmospheric xco2 that is not contaminated by emissions from or within the domain of
[34:59] your interest or your study domain how you define that background again there are multiple definitions that have been used within different
[35:09] studies and a few of those different examples are kind of provided here you can do a geographic uh definition so for
[35:19] example if you go back to this particular uh example of looking at Los Angeles you can let's say Define a point
[35:26] that's way out side of what the urban domain is and use that as like what your background CO2 concentration looks like
[35:35] and use that to subtract off from the actual CO2 observations or you can do something a little bit more complicated
[35:43] and sophisticated like what's called as a trajectory endpoint method or an overpass specific method where you actually modeled the background based on
[35:54] information that you have and use that to calculate the enhancements uh for the exercise later we are going to use a very simple method
[36:04] in which we are going to just assume a very random background value far away from your Urban domain of 410 PPM and
[36:12] we'll do that just for visualization purposes but you should be aware that yeah there are more sophisticated
[36:18] methods on how the background can and should be calculated so the background certainly contributes as one big way in which
[36:31] uncertainties creep into your Urban emission estimates but if you kind of try to compare the two between the top
[36:39] down and the bottom up approach this table provides a list of the advantages and disadvantages of each the top down
[36:48] approach um as you know within the inverse modeling methodology you can Define different grid resolutions you can define a very fine grid resolution
[36:57] from a kilometer to something coarser and it can certainly you will have errors due to wind Metrology and
[37:06] determining the background condition you will also need to account some way for the urban biosphere signal because
[37:14] remember within your urban areas or cities you do have trees growing you do have plants and those contribute to
[37:22] actually uh taking up some of the CO2 uh in that domain so that needs to to be
[37:27] accounted for but the main advantage here is that it considers real atmospheric observations and it provides a very important sanity check on the
[37:38] bottomup emission estimates now the bottomup approach on the other hand the big disadvantages are or the big uncertainties there is that
[37:47] it relies on self-reported economic energy activity data so a lot of it is self-reporting you can miss specific
[37:56] sectors or maybe there is a particular sector in which there is a severe Under reporting of the emission estimates and
[38:03] typically these actually lag by multiple years because there is a large amount of input data that needs to all come
[38:09] together there are large different sectors different companies different Industries need to provide all of the data in time to be able to come up with
[38:17] this bottomup emission estimates however the good thing is that these can still be generated at high spatial and temporal resolution because
[38:26] you can almost go industry by industry so it's not you're not even looking at a great cell but you're looking almost at
[38:33] like Point by point and um as I have mentioned previously is that this provides an estimate of scope one and
[38:40] two and three emission estimates can all be tracked in this bottomup approach so again you can see that between the top
[38:47] down and the bottom up approach there are advantages and disadvantages of both which is why there is actually value in
[38:56] in pursuing both both and in fact all of the strategy documents that I mentioned previously like the US national strategy
[39:04] or even like some of the international coalitions the strategy that they adopt they typically want to adopt both of
[39:12] them so they do want top down emission estimates but they also want to make sure that they do keep on getting the
[39:17] bottom up emission estimates as well because there is value in having both of those emission estimates available
[39:27] now what we will look at is how we can pair oc3 CO2 observations with measurements of co-emitted
[39:35] species and this again comes back to the point that observations of atmospheric CO2 they actually provide a great
[39:44] constraint on the net emissions but what we are really interested in is what are the sectors within an urban area or a domain that
[39:54] are contributing to those emissions and and in order to get at those particular sectors it turns out
[40:01] that sometimes tracking observations of carbon monooxide or nitrogen dioxide those actually provide a great indicator of what different sectors are
[40:14] contributing but the first question is why and how does that happen and this is a very nice pictorial representation
[40:23] again from this National academics report that I have mentioned earlier that shows that within an particular Urban domain there are multiple
[40:33] different uh processes that are at play it's a very dynamic system so we not only have our well- mixed greenhouse
[40:41] gases uh like CO2 methane and n2o but you can also have a lot of the shortlived gases and aerosols like
[40:50] carbon monoxide the voc's ETC all of which kind of kind of interplay and dynamically link with each other within an urban
[41:02] domain and it turns out that if for example we are tracking some of these coited species like nitrogen dioxides or
[41:11] methane or Co then these can help with both getting more robust total emission estimates as well as with the sectoral
[41:21] attribution how how or why would this happen so let's look at a couple of examples first nitric oxide for example
[41:29] is co-emitted with CO2 during the combustion of fossil fuels it rapidly reacts with oone to form nitrogen
[41:37] dioxide but then the NO2 vertical column densities we can observe those from space and ones that are released from
[41:45] fossil fuel combustion they actually have a pretty high concentration and they are far above what the background
[41:52] values should be by several orders of magnitude so that means if you want to understand particular sectors that are
[42:02] particular sectors like power plants or any other sector where fossil fuel combustion is happening then if you use
[42:09] the NO2 Tracer along with CO2 we can get a pretty good handle on that particular sector similarly carbon monoxide is
[42:18] another Tracer for combustion it has a longer lifetime than NO2 and it can help pinpoint hotspots where there is poor
[42:26] combustion effic uh efficiency because Co is sort of if the combustion is not if there's not total combustion
[42:35] happening then Co will be released alongside CO2 and so this can help inform subsidy emission and Pollution
[42:41] Control Control efforts and I provided a couple of references here uh that have used specifically either NO2 or used at
[42:51] carbon monoxide to do the sectoral attribution uh I hope that you are able to check those out and see how the
[42:59] information from those species kind of have been used together the other point that I forgot to mention and which is important is
[43:07] that along with the fact that CO2 is a great Tracer for net emissions we are always have to keep in mind that for CO2
[43:16] as you have seen in both the previous Parts part one and part two of the training there was a large background
[43:21] signal like CO2 has been present for several several years and right now the there is like pretty high concentration
[43:29] of CO2 already in the atmosphere it also has a large variation due to the Natural fluxes so like due to the Natural plants
[43:37] and if the city is by the coast then by changes in the ocean so typically CO2 enhancements that
[43:44] you will have due to Urban emissions their variability can often be swamped By changes that are happening within the
[43:50] natural natural fluxes and in order for us to be able to look at like the CO2 enhancements and
[43:59] then tie it back to the sectors it actually is really helpful if you're able to use information from this
[44:05] co-emitted species as well so we are now going to look at a couple of examples that really highlight
[44:15] this point of how CO2 and NO2 together or CO2 and Co together how those can be used so this is one example that shows
[44:24] coincident data that has been taken from oo3 as well as from the Korean geostationary environmental monitoring spectrometer gems this is a
[44:36] geostationary platform that is act looking at this particular region that is shown in the blue bounding box here
[44:45] so primarily focused on uh Korea and Southeast Asia and part of the Indian subcontinent and I've shown two examples
[44:53] on for two different days one over soul in South Korea the city of soul in South Korea and another over the city of
[45:01] vendel in India where there are a large cluster of power plants the maps here or the top figures here show the CO2 data
[45:11] from oo3 and the bottom two figures show the NO2 data from the gems instrument and what you can see is that for example
[45:20] for soul we see that where we have these large CO2 concentrations that actually lines up very well with where we also
[45:28] have the large NO2 um large NO2 enhancements as well these are actually both enhancements that are shown so this
[45:37] helps pinpoint like all where the not only where the hotpots within the city are but likely sort of the presence of
[45:44] power plants and other heavy industries that are contributing to this high CO2 and NO2 signal similarly for this particular
[45:54] case in India that's shown on the right we know there are large several large power plants I think there are like
[46:00] seven or eight large power plants that are present around this particular Lake and that's where you have this High
[46:08] concentration in NO2 and we kind of see a corresponding large CO2 enhancement as well now the CO2 NO2 and then along with
[46:21] the carbon monoxide data this can actually be utilized together as well to get a better understanding of not just
[46:29] the sectors but also of the emission patterns between different cities and sort of like then do some kind of an
[46:38] understanding of whether the cities fall within the annex one like developed Nations versus non-developing Nation this is a really great study by park at
[46:49] all that came out in the remote sensing of environment Journal where they looked at multiple cities across the globe over
[46:57] uh 30 cities were looked at and they used data for CO2 from in this case it was actually used from oc2 instrument
[47:05] not necessarily O3 but the same type of observations that we have been talking about and then NO2 and Co from the
[47:14] European tropomi instrument and what they did was that they actually looked at ratios of CO2 of Co and CO2 and ratios of NO2 and CO2 and
[47:27] then sort of broke those up by looking at the GDP for different cities what they found was really really interesting
[47:37] is that for some of the cities that are present with between uh that are present in developed Nations so for example in
[47:45] Los Angeles Tokyo Etc where you have high GDP those typically have low Co versus CO2 values or even sometimes low
[47:55] NO2 versus CO2 values where cities that have like a lower GDP especially cities for example in India and then in the
[48:04] Middle East Etc they have lower GDP but they can have higher Co versus CO2 so that means in those cases like the
[48:12] combustion efficiency is not good and more often than not they are producing higher Co emissions or higher NO2
[48:21] emissions which kind of likely contributes to more air pollution so so they had like this really fascinating um highlight in their
[48:31] study saying that developing cities have higher incline of emission ratio per GDP than the developed cities this study is
[48:39] kind of fascinating and I know or I'm aware there are like several other studies that are in Preparation right
[48:46] now that are planning to look at like longer time series of the satellite data and trying to assess whether these
[48:54] statistics that were derived in this paper whether they are robust whether there is some kind of Trend in them over
[49:01] time or as even in fact As Cities start reducing greenhouse gas emissions and put in some practices to try and curb
[49:10] greenhouse gas emissions then whether these strengths uh will evolve or change or not and then finally I kind of wanted to
[49:21] provide this very new example that's um we we have available right now from the International Space Station so on the
[49:30] International Space Station we have oo3 instrument flying but there is recently another sensor that has been installed
[49:37] there by NASA which is called emit now the emit Mission wasn't originally designed to Target greenhouse gases but
[49:46] it has turned out that because of the particular wavelength that it is looking at or observing at we can actually pick
[49:53] out some very large Point sources of CO2 and and methane and this is an example over uh
[50:01] the city of New Delhi in India which is kind of situated in the star here we have information from three different
[50:09] sensors now all together the background that you see in the in this Violet and yellowish color this is from the
[50:19] European tropomi sensor providing information about NO2 observations and we can kind of see this like patch of
[50:27] NO2 enhancements that are primarily due to where the industries are located in this particular region we similarly have
[50:35] the oo3 Sams over this particular area and again you see the high yellowish enhancements here which is from the CO2
[50:44] concentrations um which again because of the wind and sort of different factors they don't exactly overly with what the
[50:52] industrial emissions are but it seems kind of again concentrated towards this North East sector but then what's
[51:01] interesting is that with the emit sensor we are able to pick up now these two methane plumes and these are coming from
[51:09] two different landfills that actually are present within just outside the city boundary and these two landfills typically generate a lot of methane
[51:19] emissions and those methane plumes are now observed from this emit sensor so this is like a fascinating
[51:27] uh kind of a snapshot of the type of monitoring information that we are likely to get in the future U emit has
[51:34] been operational for only a little bit over than a year so there is not like a huge length of data record but over the
[51:42] next few years as we start getting more and more of these satellite data we expect these cases to become more
[51:49] frequent where we can use in formation three different species CO2 NO2 and CH4 and we can not only get an estimate of
[51:58] what the total urban area emission estimates are but then exactly pinpoint the estimates that are happening from
[52:04] landfills that are happening from Industries or that are happening in general from the Transportation sector and other sectors so this is really a
[52:14] fascinating direction that the space based community and this entire Community is sort of gradually evolving towards so so with that I would like to
[52:27] kind of summarize what we have talked about as uh part of in in this part three um again just to remind everyone
[52:38] that urban areas there is certainly a huge growth that's happening in urban areas there is going to be a further
[52:46] expansion of urban areas as we get into the 2050s and now there is a rapidly increasing demand from a range of users
[52:54] whether that's within the public sector the private sector or different agencies for trusted information about greenhouse gas
[53:02] gas emissions the O3 Sam observations that we learned a little bit about those have certainly Advanced our scientific
[53:10] understanding of urban CO2 emissions they have helped us better understand the particular up down approaches that we need to use the inversion
[53:19] methodologies that we need to use to address or generate emission estimates that are robust and that have good got
[53:26] like well characterized uncertainties but more importantly or more crucially what they have demonstrated is that space-based CO2
[53:35] measurements those have the information content and the ability to quantify emission changes that are happening across urban
[53:44] areas when that information is used in conjunction with co-emitted species such as NO2 and Co we can actually get at
[53:52] sectoral attribution so for example we saw uh some examples of information coming from like power plants or from
[54:00] other sectors heavy industries from landfills landfills Etc um there is now a lot of interest in using all of this information together
[54:10] along with information about GDP and population density to track socieconomic characteristics within different Global cities and look at the contribution
[54:20] across different cities and finally this information and the emission estimates that the we can generate using this
[54:27] space based data this also provides a check on bottomup emission estimates which can ultimately help boost transparency in carbon accounting and
[54:36] assist with overall decision- making process so with that thank you very much I would like to end this lecture here
[54:47] and then now turn it over to sort of the Hands-On exercises uh that we are about to dive into
[54:56] thank you Dr chat for that great presentation now we will move on to the demonstration portion of this session
[55:05] the demo was put together by David and Karen Yuan however Karen will be delivering it this is David's first time
[55:13] supporting an arset training as guest instructor and Karen's second time she was guest instructor for the CO2
[55:19] training back in 2022 so welcome to David and a big thank you to Karen it's great to have you back the floor is
[55:28] yours now we will go over to the demonstration portion and we will open up Jupiter notebook I am working on a Mac system
[55:42] today and I've opened up a terminal and typed in Jupiter notebook for those on the PC system you would open up a
[55:49] command prompt and do the same thing go into my folder oopsie oopsie and sure I opened up and open up this one
[56:22] also you should see my screens for The Notebook once you have opened Jupiter notebook you would open up the notebook
[56:32] that's entitled our set oc3 data map and plots using openap and xco2 variability in select urban areas and that's what
[56:43] you'll see here on your screen um the data set used in this notebook is the oo3 level to full physics files that are
[56:52] archived at the Gard DC or just disk um the link for this is in the notebook and
[56:59] it is in the net CDF format um The Notebook accesses data from the Dax um from the DAC using open
[57:11] dap or open source project for a network data access protocol and uh this allows you the user to only have to run this
[57:19] particular notebook to retrieve subset and download data and also do the mapping from one notebook it simplifies uh even further the
[57:28] typical uh client server model when using open app and acknowledge here I would like to thank my co-authors um
[57:38] first cigar limbo who's our former student and employee at JPL uh Charles Thompson and D David morone at JPL as well as our
[57:49] collaborator Dr abish chaty Who is also the project scientist for oio three I'd like to point out that this
[57:59] notebook is only meant for initial training and demonstration of the utility of these data sets in support of
[58:05] oo2 O3 ret training this notebook is designed to function as is for the scope of the training exercise as code
[58:12] dependencies and data sources periodically become deprecated or updated the users of these notebooks bear the responsibility to maintain and
[58:21] or repurpose these notebooks and associated dependencies in a workable state beyond the source of this initial training uh this notebook was produced
[58:30] to support the ret O2 O3 training and for full details please go to the arset site for this
[58:39] training okay so we are going to start um we'll start in the beginning by importing the libraries you need to set
[58:48] up the environment please don't be alarm I know as you can see all these there's a lot however most of these would be
[58:57] familiar and they are grouped by uh specific purposes and you'll see that um I put in lots of notes in different
[59:05] areas if you wanted to understand uh what we're doing you know the pre-processing um visualization and plotting uh retrieving lat um data from
[59:16] the linkage for the for the open appap all of that um is explained here so I'm going to run this
[59:24] cell next you would be asked to log in um to go into this notebook since this is a continuation of Activity 2 and you
[59:34] already have your store. netrc file you should be all good here and you would run the cell or You' be prompted for
[59:41] login if you have not you run and now at this point we are going to run um the cells that will help
[59:49] you choose the areas that you want to look look at and i' like to point out there are
[59:56] notes here if you get lost that tells you how you should put in uh the values but when you run the cell there you're
[1:00:04] requesting input for your year month and version for the files you will be prompted to enter the year first please
[1:00:11] use four numbers for this um for example just don't put 24 do 20 uh 2024 and for
[1:00:18] the month um for the singular digit months January to September start with a zero followed by the number and for the
[1:00:25] double digit months you would use the double digits and then enter 10 for the current version for the data
[1:00:33] available so I'll show you here like I said you put in um but I'm going to use
[1:00:38] 2021 as the year I want to look at I want to look at the month of June so I
[1:00:45] would do 06 here and then I'll type in 10 here for the version and you can see um that came
[1:00:56] back very quickly and now we will go to um the opened app to access the files that we want
[1:01:07] to look at and let me run the cell and from here it says it's pulling the main
[1:01:18] URL and now we're inside the session and you will see that in fact we have pulled 338
[1:01:42] files and we'll be ready to start um averaging the files the values of the files together but before I go there um
[1:01:52] I want to point out that this particular line here at line8 this last code here it is uh an area where you can choose to
[1:02:03] look at it by month you see the plus month here if you do remove this part you would only pull the data for one
[1:02:11] year and for right now for the sake of time I'm going to show you um the time
[1:02:17] it takes to download one month of data and then but I'll show you the results of what it looks like if we have one
[1:02:23] year of data so we're going to prepare for plotting by looking through these cycle periods and you'll see that from the 338
[1:02:35] files that we had before we are down to 30 files and now we are going to retrieve
[1:02:45] from open dab the files and all the variables that we are looking for the variables that we call are um the
[1:02:53] X2 the vertices for for the longitude the latitude based by sounding ID and the quality flag and now we will let this
[1:03:07] run all right we have finished downloading our files and we know this for folks who didn't know um this will
[1:03:17] become a number again it was on a star for a long time once it becomes a number
[1:03:21] you know you know you know and uh we were able to do this in 3 minutes and 38
[1:03:26] seconds for the files and we will do the next step and um just so you know uh when
[1:03:37] we uh pull the files uh from open app um you have to be aware that depending on
[1:03:47] your computer and your internet speed of where you are the time for download will vary so that's just something to bear in
[1:03:56] mind that is why we're doing the example for one month of data first and I'll show you what it looks like for one year
[1:04:03] of data uh in a short while and um now that we have pulled files and variables from open dab and subset it them by XO2
[1:04:13] the vertices for the data Footprints and also the quality flag um we will start the the pre-processing and what it does is that
[1:04:23] the pre-processing since we got the vertices from the corner points of the data this will create the polygons that
[1:04:29] would represent the footprints in our plot for the map and um this will include this will require additional
[1:04:36] processing time and but not as long as the the file download So as you can see from here we create a frame for the
[1:04:45] variables that we have and also we are filtering the data by the quality flag and making sure it's
[1:04:54] set to to Z and now we will let this run for a couple minutes and you see you have the
[1:05:07] star here when it becomes a number you are done with your um pre-processing all right so we've had a
[1:05:18] couple minutes pass and you can see we have pre-process the data and now we're going to get ready to to
[1:05:27] plot now I will run the cell where we would use Bas map and begin our plotting and in this particular cell you
[1:05:39] do have the option of being able to choose your minimum and maximum that you want to look at just to depending on
[1:05:48] what you're interested in in studying uh for today we have it set for minimum at 405 PPM and 425 PPM for the
[1:05:59] [Music] [Music] maximum and this will also prompt you for the city name because we're using base map
[1:06:11] and let's run this and once now we can locate the region that we want I'm going to use Los
[1:06:24] Angeles and there you go here is your map of the oo3 data for June 2020 2021 in Los
[1:06:57] Angeles Angeles and what we can also do then is plot these values as a scatter plot and you
[1:07:07] run this and we're going to do this for the input for the month let that run for a few
[1:07:19] seconds and there you go here's your plot that shows you all the values for for that time
[1:07:28] period for what we have from Oco 3 what you can also do is look at options of looking at other cities that
[1:07:37] may be of interest to do that you simply go back to the cell again line 14 here
[1:07:45] run it and you can input another location and I'm going to use Chicago we'll let that run
[1:08:08] and here you go here's what oo3 captured for Chicago the month of June 2021 now I'd like to uh let you know
[1:08:21] that uh even though we have the option of inputting other cities not every city will have coverage
[1:08:28] because SO3 is on the International Space Station and its precessing orbit will only allow latitudes less than plus
[1:08:35] or minus 52° so um you have to consider that when picking the cities that you want to look at we have this option of
[1:08:44] being able to input different cities because it's um it's a an easy way for you to look at what's available and
[1:08:52] reference the snapshot area maps that are available on the oo3 website and produced by the oo3 science
[1:09:02] team I'm going to do one more example and come back here again rerun this out and I'm going to run um Paris
[1:09:30] so you see you have all the data here for Pais for the month of June 2021 for
[1:09:35] the oo3 data and same way we can plot these values on a scatter plot oh sorry and there you go and these are all the
[1:10:00] values that we have for that month I'm going to go back and redo Los Angeles for the moment so I can give you the
[1:10:08] example example of what it looks like for one year's worth of data in Los Angeles I'm doing this because um from
[1:10:22] home uh working with all the files uh the downloaded files took 37 minutes and the preprocessing took another um almost
[1:10:32] 25 minutes and so for the sake of time I'm doing these examples by month here so here you go this is what it looks
[1:10:40] like for Los Angeles for the month of June in 2021 and let me show you what it looks like when it's one
[1:10:50] year's worth of data here what's valuable when you look at one year's worth of data aside this plot I'm sorry aside
[1:11:00] this plotted map is really the values that you would get if you ran the second uh cell that shows the input for the
[1:11:09] year and you can see all the values that are plotted that would be needed or that you would be interested
[1:11:20] in I'd like to show you um I'm going to go back here for a second if you recall the line that I
[1:11:34] had line eight right here I'm going to do a comparison I'm going to to go back and
[1:11:47] forth between the two so for line8 for the one year I simply remove the plus month from this
[1:11:56] line here we have the plus month for the one one month and we remove it for the one year
[1:12:04] so you have that option for your for what you want to do and you can check yourself on this because for as you can
[1:12:12] see once we cycle we actually have 338 files we're running through versus the 30 for the one month that we're doing so it takes
[1:12:26] considerably more time it's worth it for what you want to look at but I wanted to point that out um everything else is the
[1:12:32] same but it gives you the option to adjust for what you want and need this is your one-ear
[1:12:48] map this is your one month map thank you for your time today and this concludes the uh Activity three
[1:13:00] demonstration for this arset training thank you Karen for that great demonstration and just to remind participants that we will be posting the
[1:13:15] recording and you can follow the demo along at your own pace so next I will provide a summary of this whole
[1:13:28] training so a summary of the different concepts that you learn throughout this whole training oc2 has a 10-year record
[1:13:38] with a temporal resolution of 16 days it flies overflies the equator at 1:30 p.m. local time oc3 on the other hand has a
[1:13:48] 5year acquisition record the sensor is on the International Space Station and the coverage is limited to plus or minus
[1:13:56] 52° latitude its observations cover all hours of the day both sensors make Acquisitions in the nater glint and
[1:14:07] Target modes oc3 also makes Acquisitions in the S Mode the O xco2 data from these missions is the column average volume
[1:14:17] mixing ratio of CO2 in the atmosphere the data between oo2 and oo3 are consistent over time and are
[1:14:26] complementary and it's recommended that you use the level two light xco2 data and these data have been filtered and
[1:14:34] corrected for bias and they're openly available through the NASA data archive Center known as guest disk surface
[1:14:43] carbon fluxes are related to the biosphere and oceans the global average atmospheric CO2 concentration is the integration of All Surface carbon fluxes
[1:14:57] the temporal change of local and Regional CO2 concentrations is related to surface carbon fluxes and lateral transport or background values surface
[1:15:08] carbon fluxes are linked to atmospheric concentration by means of atmospheric transport models and the process to calculate carbon fluxes from atmospheric
[1:15:19] CO2 concentrations is called atmospheric CO2 flux inversion now related to the Sam Acquisitions they're useful to quantify changes in
[1:15:29] emissions occurring in urban areas and together with co-emitted species such as NO2 or Co they can Aid in sectorial
[1:15:38] attribution they have the potential to monitor the socioeconomic Regional characteristics of Glo Global Urban emissions and these data help increase
[1:15:50] transparency in carbon accounting and Aid in the decisionmaking process homework and certificates there is one homework associated with this training
[1:16:01] it's you can access it on the web page for this training and answers must be submitted via Google forms there is a new date it
[1:16:13] is now August 14th 2024 so we've pushed it we've made a a later due date now the
[1:16:20] certificate of completion will be given to all of those participants that attended the live the three live
[1:16:27] webinars and that complete the homework assignment by the deadline you will receive a certificate via email approximately 2 months after
[1:16:38] today and here's the contact information for all of the invited instructors uh if you have any questions
[1:16:47] please feel free to reach out to anyone here and we've come to the end end of this session and this webinar series I
[1:16:58] would like to thank Dr abich for the great presentation as well as Karen Yuan for and and David for putting that
[1:17:06] demonstration together and and for Karen for her delivery so we've been collecting the questions that you've been writing onto a Google doc and we
[1:17:16] will be sharing that Google doc on screen with you shortly and we will begin our Q&A session
[1:17:26] okay um uh as a reminder about the demo um you will be able to uh re-watch the recording we will be
[1:17:37] posting it online and we did share with you how to access the code it's uh on the ret
[1:17:46] GitHub and uh you can uh once you access that you can then download the whole uh folder onto your your computers and run
[1:17:56] the code directly from your computer okay so online we have uh Dr abich chaty we have Karen Yuan we have H
[1:18:08] David and they will be answering your questions uh so let's just start with the first question I will read the
[1:18:17] question and then one of the uh members of the arset team will be answering them okay from the top are there any Global
[1:18:26] standards for new buildings in terms of CO2 impacts with respect to Urban growth yeah so as I have responded there
[1:18:40] um there are now building and construction construction codes that are being looked at by different countries these come under the
[1:18:50] nationally determined contribution from different countries under the Paris agreement goals so I provided the link to a 2022 report for building and
[1:19:01] construction that was released by the UN environment program it provides a review of different policies that are being
[1:19:10] implemented Technologies as well as different countries and what their action plans are so hopefully that helps answer that
[1:19:21] question thank you question number two which observation mode is ideal for studying Urban emissions the snapshot area mapping mode
[1:19:32] which we covered in a lot of detail during this webinar that's the best suited for urban emissions and there have been many many
[1:19:43] Publications now that have used that data set so I've provided a link uh to a list of those
[1:19:53] Publications question number three does co2 concentration depend on the population density of the geographical area yeah so this is a great question um
[1:20:04] the short answer is yes but it turns out that there is like a strong interplay or dependency between uh the population the
[1:20:16] area and then whether this Falls is part of a developing or a developed nation and how the changes are happening
[1:20:25] um there is recently a nature study uh or a study that got published in nature that looks at this relationship between
[1:20:33] different factors and how it contributes to the CO2 emissions and I've provided a link uh to that
[1:20:44] study question four does any country have a legal responsibility to reduce emissions for the public transport sectors yeah this was again a very
[1:20:55] wonderful question um uh I think great question whoever asked it Europe in Europe certainly as part of the European
[1:21:04] green deal there are now actual legislations that have been put in place to look at CO2 emissions from different
[1:21:13] types of vehicles initially this was targeting only heavyduty Vehicles so uh those that are above 16 tons but in
[1:21:21] recent revisions in the last couple of years they have now expanded this to cover different types of other vehicles
[1:21:29] such as other smaller trucks buses coaches and they have this set amount of targets that they have proposed between
[1:21:38] now and 2040 about how much emissions they want to reduce and all countries that are part of the European Union kind
[1:21:46] of have to sign uh towards this agreement there are similar discussions happening in other parts of the world
[1:21:53] like in America and in places in Asia but again based like if you're just talking about legal responsibility then
[1:22:04] I think Europe uh certainly leads the way in implementing certain policies okay question number five why is it called a b bottom up
[1:22:18] approach yeah so the term bottomup approach typically refers to the fact that we are collecting information from
[1:22:25] the ground and then building up whereas the atmospheric concentrations and then using those concentrations to infer emission that's called like a top down
[1:22:38] approach so the bottom up specifically for when it comes to looking at greenhouse gas emissions the bottom of
[1:22:46] approach refers to where there are measurements that are happening on the ground through looking at direct fluxes
[1:22:52] or you're gathering in information about different sectors and uh also information about different types of Industries and power plants and the
[1:23:03] transportation sector and then aggregating them up to get at CO2 emissions so think about it as like
[1:23:11] building from the ground up whereas the atmospheric method is more top down so coming from the top great question number six is there a
[1:23:22] plan to be able to access data from Google Earth engine yeah so I think uh Google Earth
[1:23:31] engine hasn't been included as part of this training and I believe this question came up previously for parts
[1:23:39] one and two as well but yeah right now this is not part of the training question number seven at what
[1:23:47] altitudes are these changes observed um so I wasn't completely sure about which which slide this was being
[1:23:56] asked uh so it was really a little bit hard to follow but in general oo3 installed on the space station the space
[1:24:06] station is flying at a height of around 400 to 420 km above the Earth um so around like 250 miles and O anything
[1:24:15] that oo3 is observing is basically observing from that height now this is different from oc2 which actually has a
[1:24:24] higher orbit and so that's flying at like 700 km above the Earth okay so I I sort of interpreted
[1:24:33] this question slightly differently maybe you can touch on um probably the what altitudes are the CO2 concentration
[1:24:41] changes observed are they near the surface or higher up uh okay um this would be some near the ground uh this
[1:24:49] would be near uh the surface um because because even though oc2 and oc3 we are looking at total column
[1:25:00] observations because these observations are being made in the near infrared they are actually able to detect more of the
[1:25:07] changes that are happening close to the surface um and so in that sense yes this is more sort of like U near surface
[1:25:19] changes great thank you the next question number eight do you have a similar example for agricultural areas um say or for example
[1:25:30] a new football field being constructed um yeah so again not without mentioning the slide number here it was
[1:25:40] hard to know what the similar example refers to but assuming we are talking about like the Sam observations or Sam
[1:25:49] measurements that are made those Sam observations are typically made over an area of 8 kilm by 80 kilometer but
[1:25:57] within that entire Sam box you have individual soundings and those individual soundings are still around 4 and a half kilom Square so they are
[1:26:08] relatively big and certainly much larger than a plot of an agricultural land or even like the size of a football field
[1:26:18] so in general between within like one of those soundings it will be incredibly hard to pull up about until unless there
[1:26:25] are some really large changes that are happening because like you know for example there's like a huge fire that's
[1:26:32] taking place of the agricultural land or a huge disruption which causes a large change in the CO2 emissions it would be
[1:26:41] really hard to pick up changes that are happening um like at the scale of an agricultural plot or football
[1:26:51] feed okay question number nine how has the dynamic nature of the atmosphere particularly in terms of clouds and aerosols been accounted for
[1:27:03] in the accuracy of CO2 measurements so in addition compare the accuracy and coverage of different satellite data such as oc2 oc3 and
[1:27:14] goat so I have I would refer um the person who asked this question to part one of this training because there we
[1:27:25] discuss in detail about how the revals or the measurements are made and then all the specific calculation related to
[1:27:34] clouds and aerosols that we take into account the CO2 measurements are then of course validated against a network of
[1:27:42] ground reference measurements and that's how we know about their accuracy and I've pointed to a recent paper that
[1:27:50] compares data from oo2 and oo3 um that paper also has references to previous work comparing oc2 and go
[1:28:02] act okay the next question what is the viewing angle of the device during shooting I think that question means
[1:28:09] what is the viewing angle of the sensor oc3 sensor while it's acquiring observations those dense observations um so it just yeah so I'm
[1:28:21] assuming uh that's the question um the Sam observations are always taken in N mode so we are looking straight
[1:28:34] down um so again going back to part one of the training there are different ways in which the instrument can operate
[1:28:42] including nater which is looking straight down and glint where we sort of look a little bit at an angle at light
[1:28:50] reflected of the surface but the Sam observations are always done in Nat mode which is why you
[1:28:57] know even if we are looking over an area of 80 km 80 kilometer we can scan for
[1:29:02] only two minutes because that's the time it takes for the space station to fly over and go past the
[1:29:10] Horizon right so I think with the last part you you answer the next question how quickly does a satellite or group of
[1:29:16] satellites see a particular object of Interest or area of Interest yeah so I mean again quickly the I uh there are two ways of
[1:29:26] interpreting the word quickly one is that the time that it observes and maybe we need to add that that typically the
[1:29:35] Sam observations are made within a two-minute two-minute period um I also interpreted this as like the frequency of revisit and that
[1:29:44] depends upon the trajectory of those orbits now oo2 which is a free flyer that comes back to the same location on
[1:29:54] the Earth every 16 days on the other hand the International Space Station goes around the earth multiple times a
[1:30:02] day and there are spe like within if you look at the fouryear data record the data record that we have from oo3 there
[1:30:11] are instances where over a particular location we have observed two or three times in a day and then at certain
[1:30:21] periods there are just like large gaps where we are not able like even if we flew over a particular location but
[1:30:27] because of clouds or aerosols or something else we weren't able to take any observation for many many days um so
[1:30:36] yeah I guess depending upon again what was asked here about the time it takes to observe versus like the overall
[1:30:44] revisit time okay question number 12 is it possible to visualize the transport and fate of CO2 at Regional
[1:30:57] scales scales um I wasn't particularly sure what is meant by fate of CO2 um in general all
[1:31:08] of the data that we take with those CO3 SS and also there dense measurements that we take over urban
[1:31:15] areas those are then fed into local or Regional inverse modeling so in part two for example what you did was look at
[1:31:27] like these Global inverse modeling where we used models that had like really large resolution and large grids on the other hand for almost all
[1:31:38] of this application over urban areas or over power plants we actually use a much higher resolution model so a lot of the
[1:31:47] modeling that happens is at like scales of 10 kilomet or 15 kilometers so these are all like high resolution Regional
[1:31:56] models that are used okay question number 13 for the top- down approach what you say the accuracy of this
[1:32:09] modeling approach will improve due to improvements in communication Technologies um yes I wasn't sure what was meant by communication
[1:32:22] Technologies um I hope the person who has this is still online can clarify in general like I can provide a
[1:32:33] quick answer or response in terms of how the accuracy of the modeling approaches can can improve and those would primarily be two
[1:32:43] things one is that even though we are using a high resolution atmospheric transport transport model that means we need to simulate the
[1:32:53] the direction the winds are flowing or sort of what the overall atmospheric transport and Dynamics are and that can
[1:33:01] be pretty challenging because if you have let's say an urban area that is sitting right next to a mountain then
[1:33:08] you can imagine it's really hard to model how the wind fields are um this is a challenge not just like
[1:33:16] for one particular group or one particular set of researchers but this is a globally challenging problem and so
[1:33:24] being able to improve the atmospheric Dynamics and Atmospheric transport at sort of those high resolution scales that would certainly have a huge impact
[1:33:34] on improving the accuracy of the estimates we get the second way that these estimates can be improved is u in one of the
[1:33:46] slides U or and during the webinar we showed that there are pieces of information that go in related to the
[1:33:53] background ground and how that background is defined especially for this Urban uh inverse modeling work that definition of background that kind of
[1:34:04] varies depending upon what like a particular researcher or a particular scientific scientific community and it has been shown by
[1:34:13] studies that depending upon how that background definition varies that can have an impact on your final inverse
[1:34:20] modeling estimates so being able to come up with a more robust standardized way of defining the background conditions
[1:34:27] for different applications that would certainly again improve the accuracy of these approaches okay question number 14 how
[1:34:36] can I generate the animation of the observations in urban areas on slide number number 20 uh yes that can be done uh that's
[1:34:46] just scripts written in any software like b laab or Python and essentially you can use those scripts
[1:34:56] scripts um the training that Karen and David did I mean with some of those scripts you can kind of like actually start from
[1:35:04] those scripts and then do some similar animations okay question number 15 is there a legal definition of the
[1:35:14] background values for different locations no there is no legal definition um it's kind of currently based on best practices
[1:35:24] adopted by the scientific community and as mentioned during the webinar again it varies between different research groups
[1:35:31] and um different um science experts all right the next question number 16 greenhouse gas emissions consist of six types of gases how does
[1:35:48] Sam help in identifying them separately the oo3 Sam observation only provide information about CO2 it does not provide information about any of the
[1:36:00] other greenhouse gases and that is why within the scientific and research Community what is typically done is that you then
[1:36:09] bringing information from other missions like tropomi or from the emit sensor and you bring in information about the other
[1:36:19] greenhouse gases like nitrogen dioxide carbon monoxide methane Etc um so hopefully yeah that that kind of helps clarify that
[1:36:34] confusion okay the next question number 17 why is CO2 considered the most important greenhouse gas to report
[1:36:43] despite the presence of other gases like NO2 and so SO2 yes so I interpreted this question that there may be some misunderstanding
[1:36:54] in in distinguishing between greenhouse gases and air pollutants NO2 and S2 are typically considered as ear pollutants
[1:37:04] they do not absorb infrared radiation and so by that definition they are not direct greenhouse gases greenhouse gases are CO2 and
[1:37:16] methane n2o nitrous oxide that's a greenhouse gas uh water vapor Etc and so I pointed to this link on the EPA page
[1:37:27] which provides a very nice definition of all the different greenhouse gases that are there and then um sort of like talks
[1:37:36] about the different sources and syns for each of them Etc and hopefully that clarifies the question NO2 and S SO2
[1:37:45] thinking of them as air pollutants of course they are very very important to study because they have a direct impact
[1:37:51] on air quality they also have have impact on other because of the different chemical reactions they can have they
[1:37:59] have an impact on other species like ozone formation and U couple of other things which then can have like these
[1:38:07] indirect effects on the presence of greenhouse gases um so certainly they're very important to study but CO2 is sort
[1:38:16] of the primary longest L greenhouse gas that is there okay question number 18 how easy would it be to globally reduce or
[1:38:27] eliminate fluorinated gases as inputs to the dynamic situation um I am not an expert on fluorinated gases and so I I'm going to
[1:38:40] hes I'm reluctant to necessarily provide my thoughts the EPA link that I provided earlier that also discusses uh the
[1:38:52] fluorinated gas gases there and so it might be worth um the person who asked this to kind of go and take a look at uh
[1:39:01] the description and sort of like what is talked about about the fluorinated gases there great thank you and we'll make
[1:39:08] sure we'll include the link as part of the answer to this question um okay question number 19 is there a reason
[1:39:16] that developing cities have a higher incline of emission ratio per GDP yes and and the primary reason is
[1:39:25] that as developing cities and developing countries they are trying to make growths in different economic sectors that means there is more demand for
[1:39:38] energy use more growth in Industries and transportation transportation sector because Industries Transportation sectors and those all are primarily
[1:39:49] still dependent on fossil fuel emissions or right now that's like the cheap cheapest way to grow that's why you end
[1:39:56] up with like more CO2 emissions there is a lot of effort and a lot of initiatives that are being taken
[1:40:03] by the United Nations the World Bank and other groups to promote growth that actually takes makes use of nonfossil
[1:40:14] fuel non-fossil fuel energy sources so like solar energy and wind energy but again those can be cost prohibitive um
[1:40:23] there can be larger cost associated with them which is why if you look at any of the developing cities typically there is
[1:40:31] like a steep rise in CO2 emissions just because they want to expand Industries and Roads and other uh
[1:40:40] things okay next next question number 20 will the emit data be publicly available for commercial use for a commercial
[1:40:49] company and yes and if yes how do I access the data yes the data is publicly available all of NASA data is open-
[1:40:59] source and publicly available um the emit data is available through one of the NASA what's called as the
[1:41:06] distributed archive centers L uh in this case LP daac so I've provided the list there if you click on that link you will
[1:41:14] see a list of different emit datas that are available and some of them are related to methane and CO2 plumes
[1:41:25] okay question number 21 are CIP 5 emissions of carbon monoxide significant to to investigate um I am not an expert on
[1:41:36] carbon monoxide and I can uh certainly talk to some of my colleagues who work more in that domain and I can
[1:41:47] come back and later on provide a response or point to specific papers that um um the person who asked a
[1:41:55] question can then refer to wonderful question number two how much CO2 and CH data is available over
[1:42:05] Nigeria CH4 I'm assuming yes that's what I assumed um so with both oc2 and oo3 with the regular nater and glint
[1:42:16] data that we collect there is uh coverage over Nigeria so if you go back to the training in part one and you
[1:42:25] follow the links from where you can download the data for oo2 and oo3 if you download the data and plot over Nigeria
[1:42:33] I'm sure you'll see quite a bit of coverage I will also point out that that region can be pretty cloudy or there can
[1:42:41] be a lot of interference from dust plumes that happen from the Saharas and so there are data gaps over that region
[1:42:49] of the over that part of the world but in general there is data available um the oc2 O3 doesn't see methane so for
[1:42:58] methane you would have to then look at something like tropomi to look at that data now the oo3 Sam data specifically
[1:43:07] we have Sams that taken over Legos and so if you go to the Again download those 23 data and you search for Legos using
[1:43:16] some of the tools that Karen and David showed then you'll be able to get the s data
[1:43:26] okay the next actually the next two questions are uh related to the demo the first one is is there a way to convert
[1:43:36] oc3 and oc2 data from uh net CDF to CSV or Tiff using Python scripts and uh perhaps David or Karen
[1:43:51] would want to jump in my apologies I was looking for the mute button or unmute button um I believe I
[1:44:00] um answer that for those who can look at what was written uh yes so the the short
[1:44:06] answer is yes that is possible uh it's a little bit more extensive as work and we have developed actually a script that we
[1:44:14] put into uh python notebook and um we had talked about this in the past uh the the issue of course is that uh we cannot
[1:44:24] publish any of our notebooks until it has been cleared and so uh I am in the process of working on that to make sure
[1:44:32] we get the appropriate clearances before I can upload it so thank you for your patience we will get this up for folks
[1:44:39] to use um it we had some changes where I can't just share a notebook um because I had presented it
[1:44:49] in the past or making it available it has to go through a clearance process so I will get that taken care of because we
[1:44:55] have gotten quite a few questions about um wanting about file uh to know about file conversions and and being able to
[1:45:01] work with our data that way so I'll make sure that gets updated thank you wonderful thank you very much and
[1:45:07] actually what we'll do uh is we'll make a note on the uh training web page the arset training web page um indicating
[1:45:16] participants that these updates have been made on the uh on the GitHub that would be helpful thanks Erica Yeah
[1:45:24] question number 24 how do we set the min max of the color bar is it picking the
[1:45:30] range from the data set or do we Define it explicitly well um if you go in the
[1:45:38] notebook that's presented it's specifically in cell 14 in the notes you can say that um you can actually pick
[1:45:45] the range obviously uh you define the Minimax if there's no data there you're not going to see anything but it it's
[1:45:53] find that way uh so it is in the The Notebook great next question number 25 in the presentation the point was raised
[1:46:06] about validation of bottom up estimates using oc3 Sam observations how can we do that with differences in spatial
[1:46:14] resolution and other issues that's a really really great question so thank you for asking that um so so the way this is done typically is
[1:46:26] that you have to bring both sets of estimates to the same spatial and temporal resolution so let's say the
[1:46:34] bottom up estimates are available at 1 kilometer and daily you have to aggregate them up to something that's like let's say 15
[1:46:46] kilomet or 20 kilometers and weekly or monthly sets of estimates and then you can compare that against
[1:46:56] the oc3 derived like the inverse modeling or topown approach derived estimates that are at those ques or
[1:47:05] resolutions there are other types of approaches that so this is like a direct comparison and that can help you get a
[1:47:14] sanity check on the bottomup emission estimates that you are using in most cases people use some different approaches uh or some
[1:47:23] different techniques I should say where you can look at the time series of emissions from the two different
[1:47:30] approaches and then see if you see a discrepancy in the trend or if there are particular instances when the estimates
[1:47:39] are hugely diverging or for particular sectors they might be very different and that can help bridge the gap between
[1:47:48] those two estimates okay the next question it has two parts the first one has been answered already
[1:47:59] question number 26 is possible to export data to geotiff that was answered in question question 23 uh let's focus on the second part of
[1:48:08] this question is there data that can be accessed all over the world oc3 data yes the oc3 data typically because
[1:48:18] it's situated on the space station so it sees between 52 nor to 52 South and between that domain um you can pretty
[1:48:29] much you get coverage over that entire uh domain I believe in part one we had shown a couple of animations
[1:48:40] or visualizations that show the coverage for both oo2 and oo3 so if you look at that you'll see you have data all over
[1:48:47] the world okay so the next question why are there straight lines or slash patches with the same color in cities in
[1:49:00] data from cities in the Hands-On exercise and how do you remove them hi uh so I I I know where those
[1:49:13] show up and that's when we have a Year's worth of data and in that particular exercise we are mapping the available
[1:49:21] data we're not creating a snapshot area map and so um I wanted to distinguish that yes you can plot the data and it
[1:49:30] shows you what's available and and that's what we have if you're looking for something that's cleaner uh like
[1:49:38] what uh Dr chaty had presented you really need to go to the website and look at the snapshot area map for those
[1:49:46] specific because that's when the science team members that's something that they've created and I would highly recommend going there
[1:49:53] um because it's it's it's two different ways of looking at one is an official product that's what they have for Sams
[1:50:01] and the notebook is an exercise to allow you to quickly get an idea of what the O3 data can provide for you to look at
[1:50:09] but if you want something that is much more um defined like um that that without the lines and
[1:50:17] everything I think you need to go to the Sam's website to get that okay thank you question number 28 how do
[1:50:27] you obtain the background CO2 in an urban area I'm assuming that they're talking about a value I wasn't sure what they
[1:50:43] meant meant by the background CO2 they're talking about some values maybe yeah I believe so in the demo it was set to a given
[1:50:54] amount amount um that subtracted that that you subtract um we because it's not an easy process but for the sake of the exercise
[1:51:05] it's just to uh keep it simple uh we set it the background at 410 parts per million which is what was reported for
[1:51:13] Edwards uh I'm sorry um uh the for I think it was Edwards Air Force Base um yeah the Edwards that that's where we
[1:51:23] have a Deon yes and we use that as a reference reference but go go ahead sorry oh sorry Karen I
[1:51:32] mean there was a slide in the package um I believe it was slide 22 let me open up
[1:51:40] um where we do talk about different ways in which that background is defined and there are references to papers that have
[1:51:49] implemented those different techniques um again I I know this background question has come up before there is
[1:51:57] no a standard or standardized definition of how the background is done it depends really on researcher and application to
[1:52:07] application and it does result in uncertainty in the final emission estimates okay moving on then to question number 21 where can you obtain
[1:52:21] the geog graphic boundaries for an urban city such as Los Angeles uh that's again a great uh
[1:52:33] question so for Los Angeles it's e easy to say um the Los Angeles County they kind of provide a definition this raster
[1:52:44] data sets of what they consider the Los Angeles city um I can search for that link link provided that's the case for a lot of US
[1:52:57] Cities as well um or cities within the us and within Europe uh where these definitions are already available you
[1:53:05] can go pick out a map and use the grided map to then extract data it's not the
[1:53:12] case for everywhere on the globe uh in some cases if you use a tool like rgis uh the city definitions might be
[1:53:20] available in some cases they are not and I would point out that the city definitions are changing like the urban
[1:53:28] areas and as we have mentioned previously the overall definition and scope of urban areas and urban boundaries those are constantly
[1:53:39] evolving um so it kind of definitely depends upon particular City that someone is interested in um whether
[1:53:46] something is available on GIS or they would have to do based on population maps are like other indicators to kind
[1:53:54] of get a sense of how the urban area is defined or how the boundary is defined okay thank you question 30 are
[1:54:07] there any sensors or algorithms to evaluate n2o emissions uh there are algorithms to evaluate n2o emissions uh so right now
[1:54:23] the N measurements all come from in C2 measurements so which means like different flask sites or other different
[1:54:32] network of measurements and then those measurements are used can be used within the same inverse modeling framework and one can
[1:54:41] come up with estimates of what ntua emissions are um the best of my knowledge and Erica you might know about
[1:54:50] this more the best of my knowledge I do not know there is any end to a sensor
[1:54:57] available I'm not aware of either yeah any remote sensing sensor available uh there was discussion I'm trying to remember the name now let me
[1:55:09] see if I can uh there was discussion of a satellite project that could do it I think it was called Minos or
[1:55:18] Minos um and it it it is like a miss concept that has been proposed the European Space Agency I do not know if
[1:55:28] that's actually going to be operational or not okay then the last question and this one again is related to fluorinated
[1:55:42] gases uh what Global monitoring systems are available to track fluorinated gases and are there any satellite missions
[1:55:52] missions that can measure them I again I'm not an expert on fluorinated gases so I would have to
[1:56:01] inquire with some colleagues who are experts in that area and get back to this um and get back to this
[1:56:12] question question okay so that concludes our Q&A session then um wow we got through 31 questions that was great
[1:56:24] uh so before I close I would like to thank all of the participants I would like to thank the
[1:56:31] arset team swin Hudson ooy Brock bevens Natasha Johnson Griffith Jonathan obrien suanti Melanie cook foer and I would more than anything like
[1:56:45] to thank our invited lecturers um today we had a a great presentation from Dr abich chaty and from the demo from Karen Yuan
[1:56:59] and David I would also like to thank uh Dr Vivian Payne who presented the first session and Dr Juni who
[1:57:09] presented the theoretical portion of the second session um before I close I would like to remind participants that the
[1:57:18] homework is due on August 14th and to also please make sure you fill out the survey that we'll be sending out let us
[1:57:27] know what you found uh what you liked about this training what you would like to see in future trainings related to
[1:57:35] CO2 measurements and carbon fluxes um okay so before I close I would like to hand the floor over to Dr abber chaty
[1:57:45] for his final words thank you Erica again for moderating uh the discussion and thank you Karen and David and all of the arset
[1:57:59] coordinators and then a very big thank you to all of the attendees uh all of you who were able to attend and learn
[1:58:08] about some of the data that we are collecting uh from both oc2 and both uh for both oc2 and oo3 and then the
[1:58:15] different science applications that this data has been used for um all of our contact information is available at both
[1:58:23] the Q&A and in the different slides so if as you start working with the data and looking at it and you have any
[1:58:30] questions then please absolutely feel free to reach out to us but thank you all thank you very much Dr chhatri and
[1:58:38] as you know the demo was put together by David and Karen Yuan uh Karen presented it but I would like to uh give
[1:58:46] the opportunity to David uh for any any words that you'd like to say to participants participants before we close yes thank you for this
[1:58:54] opportunity and I just want to say uh the vast majority of the credit goes out to Karen Newan for putting that that
[1:59:00] demonstration together uh my support was more in the testing portions and uh facilitating with um uh the Earth Earth
[1:59:07] access Library uh uh module and also the environment. EML file that was put together there on the GitHub site uh but
[1:59:14] yes thank you again looking forward to your feedback thank you so much thank you David and uh Karen any words from
[1:59:20] you before we close thank you very much to everyone for joining us today um we enjoy putting
[1:59:27] these together because we want you to be able to use the data and we look forward to feedback papers please reach out to
[1:59:34] us if you have other questions and uh give us feedback on the survey thank you thank you very much so I just want
[1:59:42] to highlight that yeah we the the Oco team and NASA wants you to use this data so make sure that if you run into any
[1:59:50] sort of um ISS issue trying to uh access or open the data or interpretation make sure you reach out to any of the
[1:59:58] instructors that present it during this training to try to resolve that and facilitate your use of the data so with
[2:00:05] that I would like to uh close this training again thanks to all of the participants for your enthusiasm
