# Detecting Agricultural & Vegetation Changes Surrounding Refugee Settlements, Part 3/4

`https://www.youtube.com/watch?v=3UPjH_tSJ_M` · id 239 · 1:52:38 · module 50 — Earth Observations for Humanitarian Applications

[00:00] hi everybody thanks for joining part three of our humanitarian applications using nasa earth observations uh webinar series
[00:08] series um um we we uh today are going to be talking about detecting agricultural and vegetation changes in and surrounding refugee
[00:17] settlements as a reminder this whole webinar series is scheduled around world refugee day on june 20th 2022 and we've got four parts
[00:27] uh the first part was on monitoring urban damage within sar uh we then shifted to mapping refugee settlement
[00:33] growth and population change here we are today um on agriculture and vegetation vegetation and uh on thursday of this week we'll be
[00:43] talking about assessing climate hazards at refugee camps each of these uh parts is two hours long and we've got a
[00:51] question and answer session at the end of each all are going to be available online with the webinar recording as well as q
[00:59] a documents um available into perpetuity so thanks so much for joining um um the motivation for this part of the
[01:07] training really comes from concerns around whoa interest and opportunities to see how we can use earth observation data to
[01:15] support refugee food security protect land quality which is to say avoid degradation degradation these are really really essential humanitarian goals that we see
[01:27] in site after site and certainly year after year these are both these aren't short-term challenges and they're really in some cases very
[01:35] difficult to address because many refugee settlements are inhabited for years years and in some cases generations so
[01:43] that arrival rapid arrival of population to a area that sort of increased population density can stress available
[01:51] resources and make some sort of existing pre-refugee arrival environmental conditions uh it can really cause a change in the
[02:00] ecosystem ecosystem and and put the uh agriculture and vegetation condition into a new sort of phase of
[02:07] management or or perhaps even stress of course we know that satellite data are really useful for monitoring
[02:13] agriculture and vegetation of a whole different variety of types and this is especially and they're especially helpful when we lack physical
[02:23] access to a certain site and um as we know from uh the training part two refugee settlements tend to be located
[02:31] in in border regions in areas that are a little bit more difficult to access than a a traditional sort of or a large-scale
[02:40] urban settlement for example so uh today we're going to be uh mapping vegetation dynamics within and surrounding refugee settlements we'll be
[02:50] visualizing and measuring those changes and agricultural condition over time and we'll be looking at like time from a
[02:56] bunch of different perspectives and we'll be measuring changes in land degradation metrics or estimates of land degradation
[03:03] before following on the settlement establishment establishment um we will have a homework assignment for this webinar series
[03:11] answers will be are expected to be submitted by the google form that will be found on the
[03:16] training page we have a link there that will be due july 7th completion of that homework alongside
[03:23] the attendance of all the webinars will will earn you a certificate of completion which will be sent about two months
[03:31] after the completion of the course so check out the training page for more information on the homework assignment as well as
[03:36] the the completion certificate of completion we have the same presenters today as we did in part two last week my name is
[03:46] jamin vandenhook i'm an associate professor of geography at oregon state university university and uh hannah friedrich is our other
[03:52] co-presenter today she is a phd student at the university of arizona and thanks to all of you for joining
[03:59] just like last time we'll be using google earth engine for our analyses uh if you haven't already check out the
[04:05] retention site click sign up and then follow along with our our uh demonstrations today there are um at least five uh previous
[04:15] our set trainings that we think will be useful useful leading into this training um um we cover
[04:22] uh this is fairly broad in terms of the scope so certainly the fundamentals of remote sensing but then land monitoring
[04:30] agricultural applications uh land degradation and then time series uh would all be really helpful and those are all excellent trainings in their own
[04:37] right so check those out not critical to go through those but i think uh they'll be really helpful to
[04:44] get you a leg up so some of the things that we're sort of taking for granted when we introduce uh the coding aspect
[04:49] or some of the concepts as well those should be covered uh in much more detail in those other trainings
[04:58] so shifting into some of the kind of context and background for this uh part of the training
[05:04] why is it important to monitor vegetation change in and surrounding refugee settlements um um this section of the presentation is
[05:12] probably the same as the as the background from uh part two so if you attended part two this will
[05:18] more or less be the same but um um the the main answer there is that around why this is important as well this is a
[05:25] big problem supporting refugees around the world um we had uh 26 million refugees across 170 countries at the end
[05:33] of last year it's a global scale phenomenon just to make sure we're all on the same page about what is and is not or who is
[05:42] and who is not a refugee this is a legal term so refugees are international migrants who have been forcibly
[05:48] displaced from their home countries due to violence or persecution and they have to cross an international border and seek asylum where they will
[05:56] receive protection under international law so terms like uh which you may have heard climate refugees or internally displaced person or people
[06:06] idps idps those are different categories of what we would call population of concern or people of concern uh refugees are are a
[06:14] special category in that and there's a whole diversity of refugee communities around the world this is just one example showing um a
[06:23] snapshot of lots of people on the move syrians leaving on their way to leaving at least the
[06:32] country country in total we have about 6.7 million syrian refugees across um turkey jordan and lebanon um
[06:41] um that border crossing of syrians into neighboring countries and seeking asylum that is the mode that's the most common
[06:48] practice 73 percent of refugees seek asylum in their directly neighboring which is to say border countries um similarly with south sudanese
[06:57] refugees 2.2 million refugees are in kenya uganda which which border south sudan so we have um a
[07:08] disproportionate burden really expectation of these border countries to support um refugee needs and and in actuality that means that most of the
[07:20] world's refugee needs are being addressed by developing countries it's their neighboring countries and so this is a this is a challenge
[07:28] where we have large population arrivals in areas of some countries that are already strapped in for providing
[07:37] resources to citizens of the country much less say 600 000 refugees that have arrived over you know a three-month period which is
[07:46] not necessarily an atypical uh arrival uh sort of trend um so it's very difficult to support um
[07:55] this this global population at large but also in these specific contexts and um most of the support for this comes from
[08:03] international donors but year after year the um the needs are the financial requests the financial needs go
[08:11] unfulfilled usually by quite a wide margin margin um um making all this more difficult well over the last decade or so the global
[08:20] forcibly displaced population has doubled the estimates from from just just the halfway point through 2022 show that
[08:27] we're still on this track for increasing um global forcibly displaced population amongst uh within that broader population are refugees
[08:37] um um and so we have this every year for the last um 10 12 years we have the
[08:44] population increasing um um we also are not necessarily seeing an increased increased rate of returnees where people who are
[08:54] given asylum and declared refugees are returning home to their home country so this is the rate of new refugees is
[09:01] still outpacing the rate of refugees i'm sorry upper attorneys and it's not just the new refugees it's
[09:09] not just um the new refugees that are contributing to this global population there's a broad population that um is living in
[09:20] what we call a protracted refugee situation two out of three refugees live in the circumstance um where they're in
[09:26] exile for five consecutive years or more and on average it's more on average uh it varies every year but usually it
[09:34] hovers around a decade is the typical duration of being being in asylum being a refugee abroad so this is not only a long-term problem
[09:44] in that we have um um the global forcibly displaced population increases every year it also just at an individual or a
[09:55] household or a family level this is this is the norm where we have a long-standing displacement and with families with refugee families
[10:04] that have been displaced we have lots of refugee children being born we have a million refugee children born last year
[10:12] so it's it's a serious challenge to try to support the needs of such a large diffuse and varied population
[10:21] the u.n refugee agency is called the u.n high commissioner for refugees they shelter nearly a third of the
[10:29] global refugee population within settlements which is to say in uh in settlements outside of existing urban areas so these are not cases where we're
[10:38] integrating refugees into existing cities or villages these are new settlements that are being established and planned by the unhcr
[10:47] these are really the loci for distribution of aid and provision of different services and resources education education medical attention
[10:58] farming this happens um broadly in these sort of base uh settlement refugee settlement locations um because of these large-scale refugee
[11:09] arrivals um that often happen very very quickly there's a great need to establish and plan and allocate land for refugee settlements
[11:18] quite quickly you can see this graphic of a sentinel 2 time series animation here where in the middle of 2016 as
[11:25] we're coming up here in a few frames we start seeing the first indication of the infrastructure of of a settlement in
[11:30] uganda called pajarina which we'll be talking about later in this training that gets laid out you can see right
[11:37] there there in june july it really grows to its full extent within a few months months so this rapid period of refugee arrival
[11:46] is also when we have terrific need for geospatial data remote sensing data that help us monitor the establishment growth
[11:54] and of course the needs of refugees who as best we can tell as best we can develop an estimate or proxy of that
[12:02] through satellite data analysis quite a variety in what a camp could look like we have a unplanned so-called unplanned or
[12:11] self-organized self-settled rather camp on the left we have a planned camp on the right this distinction between these
[12:18] two camps is most clearly seen in the um the grid pattern between other two settlements where we have a
[12:25] roadway uh grid laid out on the right and we don't have the grid present on the left the difference between these
[12:31] two is just because the there's basically more time and perhaps more resources for the settlement on the
[12:37] right compared to the one on the left in terms of the early establishment and planning stage um in a sense the
[12:43] unplanned supplement on the left may have just been a much more acute need to be established rapidly um and and
[12:49] there's just not as much time or resources to lay off the grid like we see on the right
[12:54] um um there's a broad variety of conditions across different refugee settlements we have a kind of an urban built up camp
[13:05] on the left in saturday jordan and then we have on the right in bangladesh where rohingya refugees are
[13:15] the different setup that we see of different refugee settlements really conforms to these local contexts so the refugee camp the rohingya refugee
[13:25] camp in bangladesh you can see is uh many dwellings are built into of what the landscape is terraced and then the
[13:32] dwellings are established on top of these terrorist lands lands very very different from this semi-arid fairly flat landscape
[13:41] in jordan that hosts the syrian refugee camp so lots of diversity and despite all this uh variability in
[13:50] terms of environmental conditions the rate of refugee arrivals the duration satellite remote sensing data offer a sort of persistent gaze um that uh
[14:00] that uh go that is present throughout um this period from the establishment to the uh to the expansion of the settlement and
[14:08] then into into you know the subsequent long-term habitation in some cases cases so um it's a terrific asset satellite
[14:16] remote sensing for monitoring um humanitarian conditions at refugee settlements big one of course is that we do this remotely where we don't need
[14:25] physical access to these locations um we mentioned that one earlier um but we also have broad scale coverage so across
[14:33] many many refugees settlements we can get the same kind of data so there's a consistency and a
[14:39] comparison that uh satellite data offer that we um don't necessarily have with other kinds of um even aerial
[14:46] instruments where we have different kinds of acquisition conditions perhaps or on the ground where we may have
[14:52] have different kinds of sampling regimes interview data collection approaches in different settlements uh we also have uh it's not just long
[15:00] term but we have near real-time uh data collection um that that uh allows us to monitor changes in some cases really
[15:08] close to the rate at which they're happening happening as we all know satellite data are very flexible they can be adapted to support
[15:17] really a wide range of different lines of inquiry related to atmospheric related terrestrial hydrological hydrological all of these different sort of facets
[15:29] of the land cover land use domain are also well can be well captured with with satellite data
[15:38] and and while the data may be broad in scale and long term they also offer some really
[15:44] helpful helpful information on a localized insight so we can tailor our analysis tailor our our inspection um to the specifics of a
[15:54] specific community or population or settlements livelihoods or land use or sustainable development concerns um and so this gets back to some of the
[16:03] flexibility but it can be really customized to give us a very local information and we'll see some examples
[16:09] of that in today's presentation as we saw um in part two as well well um what about the refugee settlement
[16:17] dynamics well um we have we know that refugee settlements are very dynamic so time series and different kind of visualizations can
[16:26] help a lot these settlements grow very quickly so we want to monitor these trends as they as they
[16:34] happen happen and there's a whole variety of changes that happen all sometimes at the same time within the
[16:40] same same span between two different images so we want to have some sensitivity to understand the complexity and the variability of all
[16:49] those different changes okay and with that i'm going to hand it over over to hannah friedrich who will introduce
[16:56] our case study on refugee settlements in uganda and jordan thanks chairman okay so now we're going to shift to some
[17:05] of the training or different tasks um portion of this training um and first we're going to start with a background
[17:15] of of kind of more context on what refugee settlements settlements are like in uganda and why they exist there
[17:24] so the total refugee population in uganda currently is about 1.4 million people people um which is comprised primarily of
[17:34] refugees from south sudan with about 950 000 people from south sudan and about 444 000 from the democratic republic of
[17:43] the congo and and this total population of 1.4 million makes uganda the third largest refugee hosting country in the world
[17:53] um so it has received a lot of kind of um attention to to the refugee settlements in uganda um
[18:03] and most of these refugees coming from south sudan and drc um are being displaced from their home
[18:10] countries due to violence and armed conflict and persecution persecution um but refugee settlements in uganda are really
[18:20] unique in the sense that uganda's refugee response policy really uplifts this notion of self-reliance self-reliance um um and one of the ways that they
[18:32] kind of roll out this policy is by providing providing all refugee family units with a plot of
[18:40] land that they use for constructing a house or dwelling as well as providing within that plot of land area for
[18:50] cultivating agriculture which is not the norm in other refugee hosting countries um and so that that model of having
[19:01] access to to agriculture within kind of like your own home area within a settlement is is really unique um and in addition to
[19:11] that kind of um the setup of of the settlement itself at the family level refugees also are granted access to
[19:19] services such as healthcare and education education um so refugees use the same healthcare or access the same clinics and go to the
[19:28] same schools as that of ugandan nationals um which is also really really um kind of sets uganda aside in terms of
[19:37] what what um um how they treat refugees um and welcome them to their country um um in addition to that they have this
[19:48] policy on freedom of movement so refugees are able to come and go from the settlement as they please which
[19:54] opens up a lot of opportunities for gaining education or employment and accessing services outside of the the settlement itself
[20:04] um so it's a really interesting case study to kind of look at some of these dynamics that
[20:11] we'll be going into in this training so in total there are 32 uhcr managed refugee settlements across uganda
[20:21] they're scattered in the northern and western regions of the country the majority of the settlements are located in the northern portion
[20:31] where where some of them are really closely clustered as is the case with these settlements located here in the middle
[20:40] uh in set a and some of them are scattered or dispersed quite far apart from one another as we see here in in the western
[20:49] region region but the kind of interesting take or takeaways with the geography of refugee settlements in uganda is the distribution in the total
[21:01] size of these settlements so some of them them can be really small as we see here with
[21:06] these settlements in the middle and others like itty bitty or rhino camp or naka valley in the western region are
[21:16] really large uh and so they can comprise multiple uh settlements within these larger settlement boundaries um which i won't go into too much detail
[21:27] about here but there's really a quite a large variability in the size and extent of the settlements
[21:36] and when they were established as well so so looking at the timeline of refugee the total uganda refugee
[21:43] population we see this really massive spike in the total population starting around 2014 and that aligns with when uh the civil
[21:54] war was happening in south sudan and brought brought close to approximately a million people across the border from south sudan into
[22:02] uganda so um um yeah the the settlements themselves um some of them date back to the 1960s
[22:13] and have remained open since then but majority of the settlements of these 32 settlements were established in response to this
[22:23] large large influx of refugees in the mid 2010s so these maps show some of the the kind of
[22:36] there's a base map satellite-based map here here but demonstrate the variability in settlement layout that jammin was discussing earlier where
[22:46] we have iela 1 which has this grid-like structure structure of streets that are visible in the base
[22:52] map map um and then in miri for example we see a much more organic organic kind of layout of
[23:01] dwellings and footpaths between structures structures and so these different maps kind of demonstrate that that variability that we saw
[23:10] or discussed earlier uh for the for this training we'll be focusing on pajarina refugee settlement which was established in mid 2016.
[23:23] it's located within that northern cluster of settlements in uganda um um and here we see just looking at the
[23:33] in this middle map the unh settlement planned boundary outlined here in blue which will be important for
[23:41] one of the tasks that we'll be diving into into momentarily momentarily um as well as some i've included
[23:49] the osm road network here as well as some landscape features as the refugee response offices and market
[23:55] center center and so the the this osm data as well as the unhcr settlement boundary data data is collected
[24:06] and hosted on osm and and yeah yeah is is available also through the humanitarian data exchange site so
[24:18] the settlement boundaries are all publicly available and you can access them there lastly in this map on the right hand side we have a map
[24:29] of the esa 2020 world cover data set which we'll be diving into with our next task so we can
[24:37] see here that um even within this one settlement there's a really really large diversity and types of line covers
[24:46] that are present both within the settlement boundary and outside of um and peripheral to the boundary itself
[24:55] yes so we will be focusing on pashurino which again was opened in 2016 um and and is located in northern uganda it hosts
[25:06] about 36 000 refugees um exclusively from from south sudan and we'll also be looking at a settlement that looks very differently
[25:19] from from what padrena looks like at least in satellite imagery which is software refugee settlement that was opened in 2012 and is located
[25:28] in in northern jordan and hosts about 80 000 refugees from syria so these are images taken at different scales but
[25:40] side by side we can see quite a few differences in in the settlement layout um um even though there is
[25:48] you know some grid-like structure visible at pashurina we see a much more kind of organized um layout here in
[25:59] at southery um another kind of important distinction between these two settlements is the the settlement boundary itself so
[26:08] with padrina the settlement boundary kind of conforms in some areas tightly against where we see some built up areas but also
[26:18] includes areas that are not built up on in contrast this auteury refugee settlement boundary is really tightly
[26:27] um kind of snug around where we see built up area at the settlement itself um and so those two different types of
[26:38] conditions of the these two settlement boundaries boundaries um presents unique challenges for for understanding land cover dynamics within
[26:46] a settlement boundary um so these are the two settlements that we will be returning to and comparing
[26:53] throughout throughout the remainder of the training so our first task is to visualize and compare different line cover products
[27:04] so before we can even start to look at different dynamics at refugee settlements settlements it's really useful to have a sense of
[27:12] um well just to situate ourselves with what's happening at uh at a settlement in terms of the land
[27:19] cover present um and then thinking about how those land covers change over time and on different transitions that may happen
[27:28] and at what rates and when um um so just having these snapshots of a blind cover for a given time is a really
[27:36] useful starting place um so to begin we'll be looking at two different land cover products both representing a line cover nominally from
[27:46] 2020 the first is the esri land cover product um which which is is constructed using sentinel 2 imagery
[27:58] which is a 10 meter optical image product um and the esri land cover product has 10 different classes
[28:06] um listed here on the left and the second product we'll be looking at is the easter world cover 2020
[28:14] product um which is built or constructed using both sentinel 1 and sentinel 2 so um unlike esri which is just using
[28:23] sentinel 2 isa is using both sentinel 1 and sentinel 2 um it's also a 10 meter product and has
[28:31] 11 11 uh different classes that it uses and so um um there are um pretty there are
[28:40] some similar classes between the two products in terms of water and trees um um built area bare ground but there's other
[28:49] kind of unique differences between esri and issa and that esri has this class called called flooded vegetation and grass
[28:58] and issa has a bit more distinction between the the vegetation classes in that it has shrubland grassland
[29:06] herbaceous wetland and mangroves so as well as moss and lichen um so there are these kind of unique
[29:12] uh distinctions between the two class schemes of these two products um and you can also click on these two
[29:19] links and pop out to learn more about each of the respective products so i'll just show for esri
[29:26] this is hosted as a publicly available asset on earth engine which you can read more about here
[29:33] as well as the esa product which is posted directly on the earth engine data catalog so so if we go back and click on this earth
[29:44] engine code link we are brought to this page here and so [Music] [Music] um um yeah we'll be launching into
[29:56] the walking through the script here itself itself so we first bring in both the pajarina and zatri
[30:03] uh uh two different features um and then there's a variable called aoy which allows us to quickly toggle between either pashurina
[30:14] or zatri um so right now we're looking at patrina but i'll show sauteri in just a second
[30:21] and i'm not going to go into line by line what's going on with the the code here itself but we have
[30:28] essentially essentially are adding both of the land cover products the azure and esa to the map and
[30:35] and adding legends for both of those and then creating this split panel map which allows us to
[30:43] go back and forth between um um visualizing the two the two layers on the map at the same time
[30:51] so this is a really kind of useful application of having using the the split split panel function in google earth engine
[31:01] um um so yeah the and and if we look at what's going on in the maps themselves and compare
[31:12] compare the two products we see um um starting out here with just the the base map itself um
[31:24] for those who attended the previous training training you learned about the evolution of built up area at pagerino over time so just to
[31:32] situate ourselves this blue outline is the settlement boundary boundary and then just looking at the base map we can see
[31:40] that there's um um some roads different dwellings um some larger than others as is the case with these buildings but
[31:53] um um there's also vegetation within the settlement and as we know from the the refugee policy there's also agriculture
[32:05] happening happening in and around these these unique individual dwellings so there's a mix of land cover happening
[32:14] within this entire blue outline itself um and then if we bring this over to look at esri
[32:25] we can see that most of it is being classified as built up which is which is good that kind of conforms with
[32:34] what we see in the base map and then there's classifications of scrub or shrub in this kind of beige
[32:43] color color around as well as trees in the very northern portion and crops just right here on the
[32:52] southern edge and then to the right or east of padrena we see a bit of grass being detected so
[33:02] um overall ezra is doing well picking up built up area um but is kind of aggregating the classifications
[33:11] into this giant blob like um polygon which we know that there's a lot more complicated land cover
[33:22] happening happening within the settlement itself so some of that is being masked um and kind of yeah not really the details of these
[33:32] different land covers that we can see isn't being captured with the esri land cover product so so comparing that with the isa product
[33:43] which we can turn on and drag the slider over to view um we can see that there's a lot more
[33:51] complexity in the spatial frequency of land covers being represented and just the the variety present so we see that the yellow there's a lot of
[34:03] grassland being being classified the pink is cropland the red is built up so interestingly the esa product is
[34:14] still capturing some built up but what it is capturing looks to be mostly that road network um and then a little bit
[34:24] of the larger building structures that we saw um um on just on the corner of the settlement
[34:31] and within it so it's not doing a great job at picking up built up area um um it's also designating some area at
[34:41] shrubland shrubland and unlike the azure product which is designating this northern kind of pocket as trees which
[34:51] seems about right compared to what we see in the base map the esa product isn't picking up on
[34:59] that that um those that forested our tree area up here so um definitely a lot of differences that
[35:09] we see between between the two here um let's toggle this to take a look at what's going on with
[35:16] the two products that's autry so i can just copy this change the aoi to zatri rerun it
[35:35] okay so again just to situate ourselves um um this is the base map we see a lot of built up area and
[35:45] given just the background vegetation or lack of vegetation a lot of bare ground um um uh at zaatari
[35:54] um um so zooming out a little bit for the esri product we see a lot of built up area being detected
[36:10] and this red blob um some of which is extending beyond the settlement boundary um um and then this kind of western
[36:20] corner corner is being designated as a mix of either scrub or shrub and bare ground so so pretty kind of similar to what we saw
[36:32] with the types of line covers being captured at pagerina with the esri product in that there's a large
[36:39] built up area blog blog and then some some some complimentary classes being included um um there's interesting that we see that
[36:51] there's some cropland being detected or classified classified both to the east and west of xautrey and if we
[37:03] turn this off and look at the base map we do see some some cropland um at that area here but um
[37:15] you know there's these fields which um are to the south which are being designated as fairground in that case so
[37:24] um um definitely some kind of disparities in what's being considered cropland uh with esri esri compared to what we see in the base
[37:34] map and if we switch to the esa product um um we see a really different picture as
[37:40] well so um um we also see that it's picking up built up in a lot of the street like
[37:48] or where there's their streets so so another kind of similarity between tajirina and zachary and that is picking
[37:57] up in this the built-up area is the street network um but most of it is being classified as
[38:05] barren or sparse vegetation and so um yeah that that's an interesting kind of effect happening here with with the issa
[38:17] product product um um it is picking up on some of that cropland that we were just looking at
[38:25] um um and and yeah so overall it's you know detecting some built-up area but but is designating most of the settlement as
[38:35] this barren or sparse vegetation class um um which which there are areas within the settlement that do have
[38:45] bare ground and maybe some sparse vegetation happening but overall overall individual dwellings or areas where there's these
[38:56] really tightly clustered buildings together um those are not being captured as built up and and being classified as as barren
[39:06] or sparse vegetation so so just walking through what we just looked at in the code editor um so we see quite a bit of distinctions
[39:22] between between both similarities and differences between the products at both sites um to summarize the esa world product world
[39:32] cover product appears to overlook built up at both settlements um but especially at padrina there was hardly any built up
[39:39] area detected there and the esri line cover product on the other hand seems to do pretty well at detecting built up
[39:49] area area at both sites but fails to overlook important important land cover classes like agriculture as we saw in the case says at pagerina
[40:03] so so this kind of really underscores this takeaway message that each product offers unique insights online cover but
[40:11] both of them each have their unique flaws and blind spots so there really is no such thing as an error-free data set
[40:19] and that also extends to land cover products um and so these these disparities between the two data sets as well as
[40:32] um um you know just inaccuracies in the line cover that's classified within each of them has the potential to have these
[40:41] cascading consequences of over underrepresented classes and this has implications for a a bunch of different kind of follow-on
[40:52] data products that are are constructed using land cover products so things like satellite informed estimates the population which we talked about in
[41:03] the training too um so some of these satellite informed products use uh uh input data sets that rely on land cover
[41:13] classifications to allocate population totals to built up areas and so if there's underestimation or lack of built up area being detected
[41:25] and that is being used to allocate population totals those population totals will be misrepresented or misallocated spatially
[41:34] so so um um that's one instance of kind of a cascading consequence of these underrepresented classes but it also is important for
[41:46] understanding you know limitations with assessing sustainable development goals um which we'll get into one of the future tasks for this
[41:56] training training as well as analysis of climate hazards or future climate projections understanding you know what land covers
[42:05] may be impacted by certain types of extreme events which is important yeah for understanding understanding future risk so that will be covered in
[42:17] in the fourth training of this training series and so knowing that we we have these land cover
[42:27] products that we can rely on to get a sense of kind of the context of what's happening at refugee settlements but
[42:34] that may not always be enough to understand as we saw built up areas or agriculture these different
[42:42] different kind of different dynamics that that could be present within a settlement um and so kind of
[42:51] going into this this next portion of the training we'll be talking about um how you can you know given this
[42:59] limitation in line cover products not accurately accurately showing where built up area is we can use satellite imagery um
[43:09] to to better understand where there's built up area area um um within the settlement itself so um
[43:17] um as we saw earlier this blue outline is the planned planned or official unhcr settlement boundary for pajarina
[43:27] and this is the land that quote unquote officially delineates the refugee settlement so um this boundary is
[43:36] for all intents and purposes meant to distinguish distinguish land that can be directly accessed and used by refugees
[43:43] and so even though there is that pretty open doors policy in terms of refugee mobility within um and outside of the settlement
[43:54] boundary boundary the the formal boundary does have some weight to it in what it means for where
[44:04] where refugees can access land um so as i mentioned earlier there's some portions of of powder arena that aren't
[44:15] you know built up we have this forested area and some like open areas here on the edges and so
[44:22] um um the pat the planning boundary may include include this land that isn't yet used by refugees for
[44:30] dwellings or agriculture agriculture and given that we may want to instead create or have a functional settlement
[44:39] boundary that better reflects the extent of refugee land use so um um even though refugees may be able to
[44:51] go into this area of the of the settlement itself they may not be making any you know
[44:58] line cover changes within those areas or doing any actions that lead to changes there and so having a functional
[45:04] settlement boundary allows us to see where there are actually changes happening with with refugee refugees being present
[45:16] and so there are numerous kind of different satellite derived settlement data sets that can be used to help us
[45:25] delineate this quote-unquote functional refugee settlement boundary as opposed to the planning boundary and those include the global human
[45:34] settlement layer the high resolution settlement layer the world settlement footprint as well as the geo-referenced infrastructure and demographic data for
[45:46] development data set or otherwise called grid three and so while these are all meant to represent settlement
[45:56] settlement or built up area we can see here looking at a kind of side by side of what each of these
[46:02] products look like at pashurina itself that most of them do a really poor job at actually classifying or estimating settlement so
[46:12] um just looking at the sentinel to a true color uh uh visualization of sentinel 2 you know we
[46:18] see this built up area but but with both ghsl hrsl as well as the world settlement footprint wsf there's
[46:29] very few areas within the settlement that's captured as a settlement or built up area area in contrast
[46:37] grid 3 does a really good job at estimating settlement settlement but but you know comes with its own limitations
[46:47] in that it's only available for certain certain areas um um and and you know taking all these with a grain
[46:55] of salt they they are all kind of delineated using very different methods but but all rely on on satellite imagery to
[47:05] um be developed so we see that even just overlaying where we have coverage amongst these four products that
[47:14] hrsl is picking up some some pixels but overall um we can't rely on um um hsl hr cell or wsf to really give us a
[47:26] good idea of where this built up area is located located so so our next task is to actually
[47:34] estimate a functional settlement boundary using k-means clustering so k-means is a unsupervised classifier which means that it doesn't require
[47:46] user user provided input training data and so it randomly um um partitions spectral space so the the
[47:58] data that we have through through satellite imagery into into different different classes and then the clustering will then iteratively go
[48:09] through and cluster each image pixel into however many classes the user designates that they want based on a minimum distance to the class
[48:20] centroid so there's what's called a a feature spectral space that all the pixel values for the given image is
[48:29] um um kind of distributed within and then depending on how many classes the user says that it wants those pixels
[48:38] to be classified within it will look at how far each spectral value is to to these two or however many centroids
[48:48] the user designates as in the number of classes classes and then we'll distribute or partition each of those features
[48:56] to whatever class it is closest towards um um and so k means clustering is um um can be used in earth engine and so
[49:06] within this this code link that we'll get into um it'll allow you to distinguish between between either running the k-means at padrina or
[49:16] zatri zatri using either landsat 8 or sentinel-2 and will allow you to cluster based on three different spectral indices
[49:26] ndvi normalized difference vegetation index index ndbi which is the normalized difference built up index or the normalized burn
[49:36] ratio ratio nvr nvr and it will allow you to do this clustering for an image composite which you can choose to start
[49:46] and end dates for and and with that um we'll be able to compare the resulting functional boundary that results from
[49:55] the k-means clustering to the official unhcr planning boundary um as well as bring in the google open
[50:03] buildings footprints and the microsoft building footprints which are two different publicly available data sets representing building footprints
[50:14] and see how they compare to our functional settlement boundary that we create using the k-means um and then we can also kind of compare
[50:21] those to how well the k-means is doing between both pagerana and zoftree so i'm going to kick in here to the
[50:32] code link for this task so so again we're bringing in patreon and zaatari zaatari um here are the user inputs that i
[50:44] mentioned that you'll able be able to toggle between so you can run it between pashurina or zachary
[50:51] you can choose the sensor being landsat 8 or s2 sentinel 2 you can choose the index as well as the start and end date and so
[51:07] i'll just kind of quickly walk through here how we're making the composite which is important for why we're
[51:12] choosing when we're choosing the start and end date so um um whatever aoi we have whether it's
[51:18] pagerana or zatri we're going to create a buffered bounding box around that settlement boundary we have a function called add indices
[51:26] which will allow us to calculate the indices for whatever image collection that we'll be using whether it's landsat 8 or sentinel-2
[51:37] um um some some primer variables to allow us to rename our bands so they are a bit more
[51:43] interpretable interpretable um um from from either either yeah essentially translating the bands for both landsat 8 and sentinel 2 into
[51:54] band names like blue green red near infrared etc um um and then we have queuing up our our
[52:02] image composites itself we'll bring in the image collections for landsat 8 and sentinel 2 and for each of those we'll do kind of a
[52:12] series of filtering um so first we'll filter by date so this is where our start dated end date comes in
[52:19] and so choosing this date you'll want to find a date that is that you know is essentially well you can choose whatever
[52:26] date you'd like but um um after when we know the settlement was established established so if we want to get a sense of
[52:35] a functional boundary for padrina which we know was established in mid-2016 we could choose any date range
[52:44] kind of after mid-2016 if we want to identify this kind of built-up related functional settlement boundary that we'll be delineating
[52:55] um but as we'll explore you can use different date ranges to kind of compare when that functional boundary
[53:04] how it changes through time so if we were to change this to 2016 middle 2016 through the end of 2016 that functional boundary
[53:14] will represent a very different um functional boundary than when we have 2019 through 20 sorry mid-2019 through
[53:22] into 2019. so um it kind of depends on the question and context that you're after for designating the
[53:30] start and end dates so then we'll also filter by the bounds so we're just going to filter for our
[53:38] our bounding boxes filtering to images of less than 40 cloud cover changing our band names and adding those
[53:45] indices indices um and then we will create a post median this variable called post medium which is essentially a median
[53:54] composite so collapsing all of our pixel values values across our start and end date image collection into
[54:01] the median um so this will give us the the median composite for whatever our date range is
[54:07] and then clipping that to our buffered bounce bounce and then this code chunk here will then set up the k-means classifier so
[54:18] to do that we because it's unsupervised we're not inputting any training data so we're sampling training data from our our
[54:24] median composite which we can do using this sample method um um and then we define certain parameters for k-means so
[54:35] importantly here we're defining two as our number of clusters or classes that we want k-means to classify
[54:42] based on um so the kind of logic behind that is that we want to identify settlement and non-settlement
[54:49] so we have two classes and then we're going to tell it to iterate iterate um um five times and
[54:57] the seed value is just so we can replicate our results in the future if we want to rerun this
[55:04] here this sets up the actual cluster using the parameters that we designated and then we apply the k-means class
[55:11] sorry k-means cluster classification uh model to the that median composite that we created um and then we do a little bit of
[55:23] post-processing with the output um to apply a morphological filter which is essentially cleaning up the output that we get from k-means so
[55:32] it's a little bit more the pixels that are on their own next to pixels that are not of the same
[55:40] class get filtered out and pixels that are of the same class get essentially aggregated together so it
[55:47] kind of cleans the output which we'll see here what that looks like in just a second and then we do a
[56:01] a step here where we apply the filter um and that essentially gives us our our cleaned k-means output and then we'll
[56:08] reduce that raster to a vector so we can have a settlement functional boundary which is a vector we
[56:14] can compare with our our official settlement boundary um and then we will add those two to the map um as well as
[56:24] bringing in the google google and microsoft buildings data sets um so i know that's a lot of code to
[56:33] walk through in a short amount of time but but hopefully the um um this will be a little bit more
[56:41] illustrative what we're getting at so here here um we have our post median with the ndvi visualized so that was the
[56:50] parameter that i chose here we're using pashurina using sentinel 2 and dbi for this given time period
[57:01] and then our samples so these are our sample points where we're gathering those ndbi values values our immediate or preliminary kind of k
[57:16] means output so this is the designation between between um settlement and settlement as kind of deemed by our two class k-means
[57:30] clustering model this is the cleaned k-mean so after applying that kernel morphological morphological operation operation um this is
[57:42] we have our cleaned polygon but what's really important is just grabbing the the settlement settlement um um boundary from this clean polygon which
[57:57] is our rk means kind of this is our functional our derived functional k-mean supplement boundary and so if we compare that with the
[58:08] formal unhcr settlement boundary we do see that this functional boundary is capturing a bit more of the
[58:18] the kind of constraint to the the built up area itself as well as this area outside of the boundary
[58:25] which which based off of our ndbi composite that we're using to delineate the functional boundary is including some agricultural area
[58:35] um you know different um um areas of land that were kind of undergone some sort of transition
[58:43] transition um um right next to the settlement itself so this functional boundary allows us to get a better you know understand where
[58:51] there's there's some sort of um changes happening um next to the settlement and yeah yeah if we
[59:02] bring in the google footprints here so there's both a designated high and low confidence which don't really
[59:14] just means that the high confidence ones are have a higher confidence of being classified as building footprints
[59:21] and so if we zoom in [Music] [Music] we see that the the building footprints for the google
[59:35] building footprints the line pretty well was where we see um the location for the the functional settlement boundary
[59:42] um um this is all reloading but um if it once it eventually does finish reloading reloading we'll see that there's actually no
[59:50] microsoft building footprints detected here here at page arena but yeah just kind of a supplementary data layer to bring in and see how it
[1:00:02] compares with our functional settlement boundary boundary um i'm going to switch back here to our slideshow so another kind of parameter set that
[1:00:16] you can apply is using landsat a at pagerina pagerina using ndvi with a pretty different start end date
[1:00:24] of 2017 just the entire year and so we saw um um compared to the one that we just
[1:00:32] actually walked through in in the code that that this settlement functional boundary is quite demolar some quite different from
[1:00:42] uh uh this this this functional settlement boundary using landsat 8 ndvi from from 2017. so um um you can kind of customize in this sense
[1:00:55] what you know not only the dates of interest for the the composite that you'll be using to delineate the
[1:01:00] boundary but based off of ndvi which is looking at essentially essentially greenness or vegetation um compared to ndbi which is built up
[1:01:11] area area um um as well as the input sensor that you're using landsat 8 which is a
[1:01:18] 30 meter versus sentinel 2 which is a 10 meter meter you can have quite different functional boundaries that result
[1:01:26] um but each kind of provide their own unique insights into um um this distinction between these classes
[1:01:35] um you know between a sensibly settlement and no settlement in this case so so our estimation of the refugee settlement
[1:01:51] functional boundary again depends on the sensor the spectrometric and the image date and so this is just kind of another
[1:01:57] example of how if we look at kind of the true color imagery back in time from when
[1:02:04] the functional boundary was developed so in this case this one was developed from july 2018 and we see here that based off of this date
[1:02:15] and time the functional boundary performs really well in terms of constraining or identifying this kind of settlement
[1:02:23] functional area and if we look in hindsight back through time time that this boundary you know isn't a is
[1:02:33] um including areas that haven't yet changed um or haven't under yet undergone some sort of transition so
[1:02:42] sometime between um um in these two cases august um 2016 and july 2018 that there is some transitions of you know
[1:02:54] agricultural cultivation and additional built up area being constructed in this area where we see just vegetated area and so
[1:03:03] over time we can see that these land cover change dynamics are continuing to happen after the settlement is established and we can use
[1:03:12] these functional boundaries in different time periods to understand and help elucidate some of these land cover dynamics
[1:03:22] all right i'm going to stop there and pass it back to jaime thanks hannah um we're going to turn now
[1:03:30] to looking at visualizing differences in vegetation condition between years again at pogarina refugee settlement the approach we're using is generally
[1:03:37] called a false color compositing approach compositing approach that's commonly used for visualizing uh near-infrared red and green bands rather
[1:03:49] than red green blue we're using near-infrared um uh red and green to highlight vegetative conditions so that's typically how we'd
[1:03:57] use a false color composite or at least a typical false color composite in this case we're going to switch that
[1:04:03] around and instead of using a spectral band spectral data for a given band we're going to use ndvi from a certain period
[1:04:10] and in this case we're going to be looking at three seasons throughout a given year sort of an agricultural calendar
[1:04:18] and and putting putting ndvi from those three seasons together into a single composite and then visualizing that so that means that if
[1:04:27] we have high ndvi across all three seasons seasons it should appear as a very bright uh close to white perhaps color pixel if
[1:04:36] ndvi is very low across all three seasons seasons we see a very dark potentially black pixel pixel usually we end up seeing some um if
[1:04:45] there's change between those seasons we see different kinds of coloration and different combinations as well between the red the green and the blue
[1:04:55] so in this case uh on the left hand side we see a false color composite of 2016
[1:05:00] and evi image at pajarina this this we see quite clearly this bright red grid coming through this infrastructure
[1:05:10] looks like infrastructure at least uh roadways and some dwellings within the the the gridded uh street layout
[1:05:19] what why we're seeing this as red is is because as we know pajarina was settled um um in the middle of 2016. and in this
[1:05:27] example we'll talk about this in more detail but in this example season one ndvi was captured before the refugee
[1:05:34] settlement was established so we had higher ndvi at pogarino before it was settled and then later in the year we see lower ndvi
[1:05:42] again we're talking about this left-hand side 2016 red colored image that means that that high ndvi the high
[1:05:49] ndvi from season one is colored as red we have low ndvi from season two and three so we see this red really coming
[1:05:56] through uh prominently at the locations of what ended up being vegetative loss right right so in a sense this is a way of us um
[1:06:05] capturing capturing um um some of the earliest uh sort of footprints or or visual indications of change at least in vegetative condition
[1:06:13] due to infrastructure and dwelling establishment within pogerina now compare this 2016 image to the 2020 image we see a completely different um
[1:06:23] distribution of colors and layout we don't see that that red color really at all that bright red color instead what
[1:06:30] we tend to see within pogerina as well as to the south is more of these sort of teals and blues
[1:06:35] in some cases little slight purplish colors colors this teal color conversely compared to 2016 where we saw
[1:06:44] season one as having a high ndvi and therefore bright red colors here we see uh teal suggesting that we have a lot of
[1:06:51] blue and a lot of green those come from season two and season three so we have high individual season two in season
[1:06:57] three relatively low ndvi in season one that's why we see the teal color the combination of the blue and green coming
[1:07:03] through and we lose the red um this teal coloration also gives a sort of visual um extent of cultivation
[1:07:13] uh outside of the refugee supplement boundary where we see this um it's not indicative of a vegetative loss to the
[1:07:19] south of um of pajarina rather that teal describes instead agricultural expansion how do we structure this in the first
[1:07:30] place before we get into the code um we want to first figure out how we divvy up the year into these different
[1:07:37] periods and so what we can do is first look at the time series look at the ndvi time series sort of get a sense
[1:07:45] of the phenological change throughout the year and we can do that in this case as we see over five years to get just
[1:07:51] sort of a general sense of what's happening um we can also look at the crop calendar which we see on the right
[1:07:56] hand side of the image um this is one of many different crop calendars but we can see uh different periods of planting
[1:08:03] shown in green and harvesting shown in orange it's that harvesting period or really right before the harvest when we expect to see the
[1:08:12] most uh the strongest vegetative signal so so following these two we can divide up this year into four
[1:08:21] different sort of start end dates which together are going to make three periods for us t1 to t2 would be may through
[1:08:28] july that would be a good time to look at peanut harvest for example um first harvest of the year um august
[1:08:38] through september would be a reasonable time for corn and millet and then october through december um would be a
[1:08:46] millet sorghum and soybean so we have t1 to t2 is going to make season one t2 to
[1:08:52] t3 is season two and t3 to t4 season uh three three um you'll note that we don't really have
[1:08:59] anything um from january through july up through may rather that's fine we don't necessarily with our approach here we're not necessarily
[1:09:07] interested in capturing um periods when they're when we don't see a lot of harvest uh or pronounced green up but of
[1:09:14] course we we could design it uh to look at any time of the year um at zatri and jordan which was uh
[1:09:21] example we saw a couple uh uh tasks ago really different story here right totally different part of of the
[1:09:28] world um we primarily have barley and wheat um so we have these two uh different periods um t2 to t3 for um
[1:09:40] wheat um mainly in the month of june and then we have a mid-september through mid-november period which would be
[1:09:45] t3 to t4 and so both of those are targeted for these different crops and we can we can look at them together i
[1:09:52] should note that these time series that we're seeing the phenological curves that we're seeing here as well as in our
[1:09:58] example back here that's this is based on modis uh daily data and it's there's a bit of smoothing
[1:10:05] happening here um so we have daily data to help us inform this and of course that's happening at a somewhat large
[1:10:11] footprint um but let's let's hop into the code and see how we how we do this um
[1:10:19] um here we are in our our link as before we're going to load up our different uh settlement boundary uh data
[1:10:26] sets our assets at pajarina and zatri i'm going to select padrina now i'm just going to enter the
[1:10:33] different time variables and these values refer to the day of the year uh within within our 0 to 365 calendar a 1 to 365
[1:10:43] calendar rather and so we have may 1st 1st of august 1st of october and then 31st of december
[1:10:49] sort of representative start end dates of our different um uh harvest periods we have the same setup for zatri but of course different
[1:10:57] dates because we have different kinds of crops and different climatic conditions we've looked at this sort of
[1:11:04] code snippet before so i won't go into this in detail but we're just filtering a sentinel 2
[1:11:10] time series data set here filtering both by location and time as well as cloud cover as before we're going to add ndvi to
[1:11:18] that that and and then we take our sentinel 2 data set and we um go back and filter this by
[1:11:29] our two different uh start and end years 2016 to 2020 so we're getting this full picture and we can just map our ndvi to all of
[1:11:40] those images in the image collection that results to get sort of a representative representative 2016 to 2020 image we can also
[1:11:50] slice through and just take one year at a time 2016 to 2017. uh sorry 2016 and then 2017 so on through
[1:11:59] 2020 these become our sort of annual images that we're going to dig into now in the next section and do um this
[1:12:09] internal sort of intra-annual filtering by day of year between those start and end dates that we identified t1 to t2 t2
[1:12:18] to t3 and t3 to t4 each of these periods then p1 p2 p3 refer to different harvest periods
[1:12:27] now now we've got our image collection sorted into different times of year for in this case 2016 just an example year
[1:12:34] to get going to visualize this now we have a bunch of images over many many months in some
[1:12:40] cases how do we get a representative image well in our case we're just going to take the
[1:12:47] the minimum and maximum values first to get a visualization range over that entire period we're then going to take each of those
[1:12:57] periods p1 p2 and p3 each of those individual bands stack them together into a single image and um
[1:13:08] and i forgot to mention that we're when we uh select our image of a representative image we're taking the
[1:13:14] maximum value we could do the mean we could do the median the maximum perhaps is is the most
[1:13:20] effective for visualization purposes because we're really accentuating um the sort of extreme values here we can really more readily pull out the
[1:13:28] differences differences so when we plot this we'll do the same thing for 2017 2018 i'm just scrolling
[1:13:35] through it's the same code done for these different years uh we end up having each of these years
[1:13:41] represented here um and just by comparing 2016 and 2020 in our map here we can see exactly the
[1:13:49] same outputs that we had before this allows a really nice um uh rapid and i think pretty
[1:13:58] pretty intuitive way once we get around needing to understand once we're familiar or comfortable with interpreting some of
[1:14:05] these colors that we see which is not just you know ndvi it's a color interpretation that depends
[1:14:12] on understanding how the three different periods work together uh once we're comfortable with doing that we can really start um
[1:14:19] teasing out some of the differences that we see um within and surrounding the refugee settlement and of course having the
[1:14:28] high-res imagery is also really helpful because we can start cross-referencing some of the images that we see here
[1:14:36] with some of the base map images with some of the spectral values we see so it's a really nice way if we're for
[1:14:43] example interested in highlighting areas that are uh if we're interested in collecting training data we can use this to hide to
[1:14:50] select select uh uh sites um that might have high dvi value at one time of year or two two times of
[1:14:58] the year but not another time period right so we can look at these different sort of periods and use that to inform
[1:15:02] our training data collection we can also um do this year after year after year so we can assess
[1:15:10] how the different seasons play out uh over different years and we can gauge just how um um how varied
[1:15:19] the inter-annual cycle really can be in uh well really any kind of environment but in our case study here
[1:15:26] where we're looking at um um a a newly established settlement that's sort of just um coming onto the landscape
[1:15:36] in a previously vegetated area so here's our 2016 image comparing that to 2017 very very different right in terms
[1:15:43] of the layout we also see um the beginnings very clear uh that there's uh agricultural plot boundaries being
[1:15:51] established here as well as here and indeed in the surrounding settlements um 2018 another different story so this
[1:16:00] overarching red here suggests that there could be sort of a different climatic condition it looks like there's much higher ndvi
[1:16:06] in season one period one compared to the previous year sort of lose that again when we go into 2019 and then um
[1:16:14] and to 2020 we see some suggestion of sort of stabilization where we're starting to see sort of a similar trend
[1:16:20] year after year so this false color compositing approach allows a really uh nice way to visualize differences in
[1:16:32] could be ndvi it could be nbr it could be evi whatever you like over time both between years and between seasons
[1:16:40] so it's a really nice efficient way to do that um and it gives us a good visual
[1:16:44] reference for comparing how for understanding how the vegetative condition is changing at uh some of our different settlements and i didn't walk
[1:16:54] through this but uh feel free to jump in that code and do the same thing for the
[1:16:57] zatri example um you'll just want to uncomment the um the specific time one time two time three time four periods
[1:17:05] for the zatri uh case study and of course update the aoi in the same way and you'll be able
[1:17:10] to explore how things are changing um in a very different location like zoutry okay so um what about assessing
[1:17:19] uh land degradation at refugee settlements um we have looked at um change in vegetative condition um we've looked at
[1:17:29] the rapid expansion and sort of the consequences on background land cover condition let's adopt here a more formal framework
[1:17:38] or at least adapt a more formal framework from the sustainable development goal monitoring approach so this is the sdg framework
[1:17:47] there are a series of goals from sdgs one of them sdg 15 is is pertinent for us today that is the
[1:17:54] sustainable development goal to protect restore and promote sustainable use of terrestrial ecosystems sustainably manage forests combat desertification
[1:18:03] and halt and reverse land degradation and halt biodiversity loss so all the things that go into that goal
[1:18:11] there are a series of targets that can be met to achieve those goals one of those is 15.3
[1:18:17] that is a goal a target rather to combat desertification restore degraded land and soil and including land affected by
[1:18:26] desertification drought and floods and achieve the land degradation neutral world how do we assess whether or not
[1:18:33] that target has been reached well we have an indicator that's associated with that target and that's 15.3.1 is one of
[1:18:40] these indicators and that specifically would be the proportion of land that is degraded over the total land area
[1:18:47] so that's sort of our motivation that's sort of a framing for thinking about how we can understand
[1:18:52] degradation um over in a given region over time using this framework that here we've adapted from the trends.earth website
[1:19:01] which is an excellent resource for using remote sensing for sustainable development goal monitoring we have three different components that
[1:19:09] go into this sdg indicator assessment land productivity land cover and soil organic carbon and the way we think
[1:19:17] about this is of course the decline in land productivity would be indicative of degradation um but land cover is a
[1:19:26] little bit trickier we have lots of vegetated land covers what they for example we have lots of
[1:19:32] different uh wide variety of conversions between land covers as well using this framework we would uh think about degradation or
[1:19:43] decline productivity as being associated with a conversion from high biomass land covers like forest to a low biomass land
[1:19:51] cover like urban but it could also be grassland grassland or it could be wetland these would be indicative of land
[1:19:59] degradation there's a extensive matrix of all of these different conversions at this trends.earth uh link here that we that
[1:20:07] we provide at the bottom of the slide um all there's yes so all these different combinations of before after so this
[1:20:14] change in monet the changing conditions during a monitoring period compared to a change uh sorry compared to a previous
[1:20:20] baseline period we're looking at this difference over time as an indication of land degradation and doing that through these different channels of
[1:20:29] productivity when cover and soil organic carbon now for our purposes we're not going to be looking at soil organic
[1:20:36] carbon today because we don't have reliable reliable um um extensive uh data in our study area of
[1:20:43] soil organic carbon between two different dates but we'll be able to do this with land productivity and cover as
[1:20:49] sort of an estimate of this overall land irrigation picture so to measure change in productivity we're going to be using the remote
[1:20:57] sensing product of net primary productivity productivity npp as it's commonly known is a measure of the accumulation of vegetation over
[1:21:05] time time so another way to think about this is the growth of a forest would accumulate vegetative biomass that should indicate
[1:21:12] should be captured as an increase of npp over time um conversely the clearing of a forest would be a loss of npp because we lose
[1:21:22] the biomass to measure npp we'll use the modis product product that has a 500 meter resolution which is quite coarse but it gives us a
[1:21:31] long time period to measure our baseline versus our monitoring conditions conditions we also will use an modis to measure
[1:21:38] change in land cover that also has a 500 meter resolution and as i mentioned we'll be setting up this
[1:21:45] comparison between productivity and land cover using these baseline and monitoring periods uh that sort of end before the refugee
[1:21:54] settlement establishment and begin uh six months or so after and as i mentioned at the bottom of the
[1:22:01] slide we won't be using soil organic carbon soc commonly used but we just don't have the data for our study area
[1:22:08] so let's hop into our earth engine uh code and see how this works as before we're going to be uh loading
[1:22:17] in pajarina focused on pogerina here's our modis npp product that we've imported at the top of the script npp
[1:22:25] and then land cover these are two of the standard google earth engine archive products from modis um
[1:22:32] um pretty simple what we're doing with mpp we're going to filter by uh this 16 year period from 2000 through the end of 2015
[1:22:39] and then we're going to take the mean of all those values those are that's an annual product so it's the mean of those
[1:22:44] years years and then we're going to go back to the monitoring period and similarly take a product mean of those data
[1:22:53] just from a few more recent years following refugee settlement establishment we'll call the mean uh before as the baseline we'll call the
[1:23:01] mean mean following as the monitoring period and we will then pretty simply go through and take the difference we'll take the
[1:23:12] monitoring period and we're going to subtract that from the baseline period so a decline in in npp should give us between the baseline
[1:23:21] to monitoring should give us a negative value and if we run the script here we've given this little a nice color
[1:23:29] palette here where green suggests an improvement in condition and npp i should say productivity and uh purple is
[1:23:37] a decline um and so we see this pretty clear pattern right in the core of the settlement we see a decline of npp but
[1:23:45] within um the periphery of the boundary settlement boundary and indeed around it we see an increase um popping back to our presentation here
[1:23:57] um um we see sort of a somewhat mixed story then right it's not a total uniform story we see improvement of npp
[1:24:05] at the edge and loss in the core we also see an improvement in the southern uh to the southern extent of
[1:24:11] the settlement boundary right where we saw in the previous task with the three uh season compositing that we have cultivation
[1:24:19] there there so that suggests that could be contributing to improved mpp uh surrounding the refugee settlement so this is interesting right quite a
[1:24:31] distinct um a pattern here let's take a look at the land cover perspective okay so hopping back into our script
[1:24:40] um i'm gonna turn off i'm to comment out all the npp data and i'm going to start working with our land cover change
[1:24:50] data this is a little bit different because we're working with categorical data and so we want to take our different land
[1:25:00] cover classes that modis land cover data give us um um and we'll deal with the comparison with
[1:25:08] categorical data but first we're going to take the mode land cover across that same baseline period and then the mode
[1:25:15] land cover across that monitoring period now we have these two different um data sets from the baseline and the
[1:25:22] monitoring period and modis has 17 different land cover classes we need to compress those into a smaller group so we can have kind of a
[1:25:31] cleaner comparison of change to assess degradation so i'm going to use the earth engine remap function and take
[1:25:37] this list of 17 values and compress it into this list of eight and so really what that means
[1:25:43] um is that the uh many many forest and shrubland sort of subclasses will be lumped together into
[1:25:50] a single forest and shrubland class we do that for the baseline and the monitoring period and then we can
[1:25:57] we can visualize those here where where the the yellow color suggests cropland and the green color suggests grassland and we
[1:26:11] see already a distinct break here cropland to grassland like we see as we go from the baseline to the monitoring that would be
[1:26:19] suggestive of the of the degradation of the decline um in this area so where we see this green
[1:26:25] blob this used to be yellow that means that we had um cropland at the cane grassland um so
[1:26:32] that's suggestive of a decline but let's go a little bit further and actually do this quantitative analysis
[1:26:38] we're going to to do this we can't just work with the categorical data of saying sorry a value of 1 in the baseline minus
[1:26:46] a value of 1 in the monitoring period because because any difference between any like class will give us zero so we
[1:26:55] lose that indication of what the class was we lose the stability and similarly you can see how if we go
[1:27:01] from for example cropland to wetland which would be a change of two we could also go from wetland to forest three to
[1:27:10] one that's also a change of two so we lose this indication of trajectory the way we get around that is we scale one
[1:27:17] of our categorical data sets we'll we'll start with the baseline data we'll scale that by a factor of a hundred
[1:27:24] that doesn't change the underlying data but it means that when we do the subtraction subtraction down here
[1:27:31] um now we have these unique values uh that that uh change we go from 200 in the baseline period to one in the
[1:27:40] monitoring period that's a value of 199 that's the only way we're going to get this value of 199. similarly grassland
[1:27:47] to forest gives us a value of 200 minus four four which is 196 that's the only way we'll
[1:27:52] get that value of 196. um and so we have all these different potential trajectories laid out here not
[1:27:58] all these are going to be present at our site site we have a bunch of stable trajectories
[1:28:02] also forest and trebland being stable wetland being stable all of these play out and then we have a big range of values again now
[1:28:12] we're really just interested in looking at the uh improvement stable or or decline in uh degradation inlet from land cover
[1:28:23] perspective and so we're going to similarly take that whole range of values that we've identified as being
[1:28:29] degradation stable or improvement and compress those into three different classes zero class would be degradation a one class would be stable
[1:28:38] and two would be improvement these are arbitrary numbers they just have to be different we could choose any number
[1:28:45] they could be negative it doesn't matter we just need to know which is which these are just encoded um and so now
[1:28:52] when we visualize this this difference between them which is right here we see this with our nice little color palette that is
[1:29:00] similar to the one we used for npp we see this decline indeed in purple where we had cropland being converted to
[1:29:09] grassland according to modis white is stable and green is um is uh grassland being converted to cropland so we have this conversion in
[1:29:20] this area quite different actually conversions inside and out now if i pop back to the slide to the presentation
[1:29:29] um here's sort of the story we see we see the baseline as as being broadly cropland we see the
[1:29:36] monitoring period as starting this incursion of grassland within the settlement we know that's not really grassland though right we know that that
[1:29:43] is mixed pixels from all the other images we've seen of pajarina mixed pixels of built-up structures with infrastructure
[1:29:52] and gardens and vegetation really complicated pixels modis sees that in a 500 meter pixel as being grassland that's what it
[1:30:00] classifies similarly the cropland we're aggregating tons of different features into these large 500 meter pixels and modis sees that as cropland so there are
[1:30:10] some we have some questions about the accuracy of the classification to begin with but for the purpose of our task
[1:30:15] here um we're just working through how we even conceptualize this and as uh before we see a declining uh
[1:30:22] this conversion cropland to grassland is according to the big framework from land cover conversions would be indicative of decline because cropland
[1:30:32] should have a higher biomass compared to grassland um and then we see in the corner southeast corner some improvement
[1:30:39] according to our modus detection um and then the rest of the images is stable here here so we see quite comfortable stories
[1:30:46] between npp and land cover change we see declining mpp within posh arena and then we see degrading land cover conditions
[1:30:53] in pogerina and a pretty similar uh spatial pattern as well right there's quite good agreement between the npp and
[1:31:01] land cover in terms of where we see improvement or decline now it's not always that similar it's not always going to be that
[1:31:08] clean and there might be some disagreements in certain areas between our npp and our land cover classification so we really need to
[1:31:18] understand in either scenario the local context we need to understand what's causing this we need to make sure
[1:31:24] that the data we're using are valid in terms of spatial resolution in terms of timing that they're actually
[1:31:30] capturing uh the information we're most interested in um i think this is a reasonable approximation of the story
[1:31:36] within and surrounding pajarina um even though we have some questions about the actual land cover classification accuracy improving the spatial
[1:31:45] resolution um with uh sentinel 2 or landsat or very high resolution products would really go a long way
[1:31:52] to to improving our overall confidence in this kind of assessment and maybe we need to make our own custom land cover maps as
[1:31:58] well something that's really tailored that may be necessary um um so we've got a lot of citations here
[1:32:06] please check these out there's a great selection here from from different fields and different scholars working in
[1:32:13] different parts of the world um all of these are looking at stories of vegetative change and degradation
[1:32:18] refugee settings as before please enter any questions in the q a box we'll gladly answer them i've had great questions so far i'm
[1:32:26] looking forward to hearing your questions questions and then we will work through the q a live and then post the question and
[1:32:34] answer following the webinar we have our contact information here please don't hesitate to reach out any questions or comments
[1:32:41] uh and i just want to really thank you for working through part three of the humanitarian applications training with
[1:32:48] us and i hope you'll join us for part four of the training which will be sort of a turn towards looking more at still
[1:32:55] using earth engines still using nasa data of course but more thinking about climate hazards at refugee camps
[1:33:01] thanks so much well thank you everybody that stuck around for the question and answer session uh we are currently
[1:33:14] transitioning uh screen so that we can share that and we can all be viewing the same document there we go thank you so
[1:33:20] much owen big thanks to both hannah and jamin for this amazing presentation uh why don't we jump right into it looks
[1:33:26] like we got a couple questions and hopefully some more will come in over the next uh say 25 minutes that's how
[1:33:33] much time that we have left in our q a session so question number one for the data set how
[1:33:40] can we use the uh nicfi planet data set with three and a half meter resolution yeah um yeah so this is a new
[1:33:50] uh uh i guess i can't remember when they actually hosted it started hosting it on earth engine but
[1:33:56] um you can use these mosaics that planet has put together um that you can interact with and
[1:34:04] visualize and do different kind of analyses with on earth engine called the um um nicfi nicfi um
[1:34:13] um but there are a couple of limitations with it and that um i mean yes it's three and a half meter resolution but
[1:34:19] it's just available going back to 2015 um and just has coverage within the tropics so we don't
[1:34:27] have the same kind of spatial and temporal temporal archive that we can use with something like landsat 8 or landsat 7 or sentinel
[1:34:34] 2 and so there's that kind of caveat with it um and yeah as we have written out here
[1:34:40] you would also kind of have to do your own own land cover classification map um to really be able to compare the the nispi
[1:34:48] kind of derived either functional settlement boundary or or you know just settlement built up area to to um you know some sort of other kind of
[1:34:58] verified verified classification and so um but yeah we could absolutely use the the nissb data set um
[1:35:05] to to explore vegetation settlement dynamics great thanks hannah question number two what is the crop diversity of refugee
[1:35:17] camps in colombia and venezuela yeah i i wrote this response i'm personally not familiar with the diversity of crop
[1:35:27] types um or really kind of the variation in in extent of crop areas in terms of the
[1:35:33] sizes and distribution and kind of where they are geographically um in refugee camps in colombia or venezuela um as well as
[1:35:44] like the refugee policy around agricultural agricultural land holdings within refugee settlements in those two countries so um take everything
[1:35:54] that i'm saying with a grain of salt in that sense um um but there may be some country or
[1:36:00] subcountry or regional level classifications classifications specifically on crop types that are available and those would probably be
[1:36:08] the more accurate crop classification maps than say using the issa or um um the esri cover products that we explored
[1:36:20] in this training so my first kind of suggestion would be to see if there's any kind of country level
[1:36:25] classifications that are available that you can access and then secondly to see if there's reports or maps or any kind of
[1:36:34] information that has been published by the unhcr the u.n refugee agency the food and agricultural organization which is fao
[1:36:45] or the world food program wfp they often host a lot of their data and reports um and kind of like informational
[1:36:54] material that they put together um on this website that we have listed here which is data.unhcr.org and there's a tab there where you can go
[1:37:04] to individual countries to see kind of on a country by country basis what information they have hosted
[1:37:10] um and sometimes they do have like settlement level classification maps um that are stored in like pdf
[1:37:17] uh style formats and sometimes they have even have shape files to things and and tiffs so that would be another resource to check
[1:37:26] out to see if there's any kind of information available there on on crop classifications wonderful thank you hannah
[1:37:36] question number three sometimes it is an option to work with mosaic data especially for areas with high cloud cover
[1:37:45] how do we account for the detected changes that might be attributed to the different conditions of the pixels in
[1:37:52] the mosaic data for example the baseline or the study period yeah um so yeah we can definitely work
[1:38:01] with mosaic data um to essentially kind of mask out cloud so if we want to take imagery from over a year or
[1:38:12] a couple of months um and want to account for clouds usually creating some sort of median or average or
[1:38:20] greenest pixel mosaic uh or composite um allows us to address that high cloud cover that we may see
[1:38:28] um um but yeah there's definitely you know with creating a mosaic or some kind of temporal composite in that sense you are
[1:38:38] potentially losing out on detecting those changes that that could be happening across that span of imagery that you're
[1:38:45] collecting um or that you're inputting into the mosaic and so um um yeah that's something you maybe just
[1:38:53] have to kind of create shorter timestamp mosaics to see if there are changes happening that you're you're not
[1:39:01] not actually um like throwing out any of those changes or having that kind of be washed out in
[1:39:07] the creation of the mosaic itself um um but yeah it really depends on kind of like the
[1:39:14] season season that you would be creating the mosaic four or the the context of um what kind of land cover seasonal land
[1:39:23] cover changes may be happening um to kind of best guide when you should be making that mosaic for
[1:39:29] um yeah great thanks hannah and definitely a big challenge for tropical areas which have lots of cloud
[1:39:39] cover just you know if you are limited to optical data uh that's certainly a huge challenge uh there's you know with
[1:39:46] the recent launch of landsat 9 and for those that are familiar with the uh the harmonized landscape landsat and
[1:39:52] sentinel product hls that might be able to get the temporal cadence down so you have greater opportunities for
[1:40:00] breaks in the cloud cover but it is certainly a huge issue and one that will not be going away for uh for the
[1:40:06] foreseeable future so great question number four will repos and code be available in terms of npp time series analysis are
[1:40:16] using the gpg 1.0 methodology to monitor sdg 15.3.1 um for the first question yes um all the i mean yeah i believe all the
[1:40:31] powerpoints are shared as pdfs and the code links that jump you out into the code code or the google earth engine code editor
[1:40:41] with the the scripts already there um and the data layers that we're bringing in to visualize and access and work with all
[1:40:50] that is shared publicly so yes the the repos and code are available um as links in the powerpoint pdfs that
[1:40:58] um um are shared um um in terms of the second question for the gpd gpd gpg 1.0 methodology i'm not sure
[1:41:11] um this would be a great question for jamin who i know is i think trying to get to the computer um
[1:41:18] but i think that so from my understanding there's a variety of different types of methodologies that can be used to
[1:41:24] monitor land degradation and some of those maybe depend on the types of input data that you have available so
[1:41:31] in our case we didn't have the soil organic carbon or didn't feel like we had a you know validated enough soil organic
[1:41:39] carbon layer to work with so that's why we kind of had that customized approach for looking at land degradation um but yeah
[1:41:47] there's i think a handful of different kind of ways to get at understanding or mapping land degradation and
[1:41:54] um i'm not familiar with this gpg 1.0 methodology but um yeah i'm sure you know that may be another way to kind of
[1:42:02] get at monitoring uh sdg 15.3.1 great uh thank you for those that are submitting more questions uh we do have
[1:42:14] a couple more coming in so question number five why did you decide to use k-means to determine boundaries and not a
[1:42:22] supervised classification algorithm yeah this is a really great question um um so one of the obvious benefits of working with an
[1:42:34] unsupervised classification is that you don't have to create your own training data data which can be really
[1:42:41] um and just yeah can take a lot of time and energy to put that data together in
[1:42:47] terms of you know either collecting points or polygons at visually identifiable settlement or non-settlement or whatever kind of
[1:42:57] classes that you're interested in and delineating for so um um you know kind of our our simple
[1:43:05] response to that is to just sample points points um um using the sample um function method in in google earth
[1:43:17] engine and so um um yeah with that um we kind of have this like really kind of easy easy to use
[1:43:24] training data set um to input to the k-means cluster classification um and so yeah there is you know we could use more
[1:43:34] rigorous um supervised machine learning like a random forest um um or svm a support vector machine type of
[1:43:43] classification to identify built up area um um but but yeah k-means is kind of like the a
[1:43:51] low-hanging fruit uh tool to use in terms of just delineating delineating classes really easily and um luckily within the context of where
[1:44:01] we were applying it with pajarina there is a really kind of stark contrast between the ndvi values for settlement
[1:44:08] and ndvi values for non-settlement pixels and so just having those two classes with the randomly sampled points
[1:44:16] that we sample from from the ndvi composite composite allows us to really quickly um with really minimal effort on the
[1:44:24] part of the user to delineate the settlement boundary um in a much more kind of true-to-form fashion
[1:44:32] than what we have with the official planning boundary um um so yeah there's you know you could
[1:44:38] definitely explore other options with doing a supervised classification to get at that settlement boundary uh functional settlement boundary layer as
[1:44:45] well great thanks anna and it's yeah like you said it's so important that you know that you were able to
[1:44:54] show examples and provide scripts for people people uh you know in that aren't going to need to gather a lot of training data and
[1:45:02] validation data et cetera to be able to run these types of analyses uh just to be able to uh you know to have that you
[1:45:10] know know opportunity for folks i think is is really important so you know thank you for for explaining that uh question
[1:45:16] number six hi this is a question related to the previous webinar i wanted to ask whether you could point to any resource
[1:45:24] to use be fast with r yeah yeah um there's a lot of um well not a lot
[1:45:33] there's a handful of different kind of tutorials available um to use be fast and r there's it's there's really two packages both be
[1:45:41] fast monitor and then be fast spatial which are the two are libraries and i'm trying to find a
[1:45:50] couple of links to post into the chat here about um learning about them one second um but yeah there's um
[1:46:07] one in particular that i'm thinking of that kind of walks through a full uh example of using be fast and r kind
[1:46:15] of like start to finish in terms of like having an input image stack um and then trying to like set up the be fast
[1:46:24] monitor and then defining your parameters and visualizing the outputs and kind of interpreting them for different time periods
[1:46:35] um um so let me keep looking for that and then i will post it in the chat here
[1:46:43] wonderful and uh all of these q a documents are being posted to the training web page for
[1:46:51] example the uh the first weeks parts one and two will be posted today and so for all of you who are asking
[1:46:58] these questions and especially for these links that hannah was just referring to we do hope that you will check the
[1:47:04] training page by next tuesday where we will have populated those links and we'll have them on there for you to
[1:47:10] access access so i guess we'll give it one more minute if anybody has any last minute questions
[1:47:16] please do post them before we wrap up today's training i just posted in the other link that i
[1:47:22] was trying to find awesome thanks anna all right it looks like we have another question question uh it's asking is the qgis
[1:47:32] trends.earth easier to use uh i'm not familiar with qgis trend.earth um i imagine that's some sort of plugin to
[1:47:46] maybe interact with time series data um okay okay previous webinar covering trends not earth yeah maybe there's um if there's a
[1:48:03] preview from the writing for that great great but sounds interesting i might have to check it out myself
[1:48:13] all right question number eight is modis the right tool for land cover classification in savannah landscapes can we make an error propagation to
[1:48:23] assess the validity of land cover change results i would say really depends i don't know if modis is the right tool for like
[1:48:34] cover classification in savannah landscapes i think it really depends kind of what classif what class scheme you want to
[1:48:43] implement in your classification so so modus being 250 250 uh meter spatial resolution um if you're trying to find you know identify like
[1:48:56] something like built up area modis may not be the right tool for doing that and so um
[1:49:03] um yeah so i yeah i think there's a lot of different imagery sources you could probably use for doing
[1:49:09] land cover classification in savannah landscapes just depending on what you're interested in um did i hear that joyman
[1:49:15] jamin had joined yeah i'm back sorry for being away for a few minutes sir great i think we have successfully
[1:49:29] gotten through all of the questions so uh thank you so much hannah and and jamin for uh won the presentation as
[1:49:35] well as answering all these great questions that we got from all the participants um thank you to everybody that stuck around
[1:49:42] until the end uh we hope that you really got a lot out of this part three and we
[1:49:46] do hope that you will join us on thursday for the last part in this webinar series as we conclude today i
[1:49:53] wanted to give an opportunity for jamin and hannah to provide any closing comments or thoughts that they might
[1:49:58] have to the participants jamin thanks sean yeah thanks everyone for joining today and sticking around thanks so much to uh sean and selwyn and the
[1:50:08] rest of the arsenal team who have been really really obviously very instrumental in helping us us share this training with you all
[1:50:16] i just wanted to remind you that we have two prior parts to this training in case you haven't checked those out yet both
[1:50:23] were presented last week the first on urban damage monitoring with sar the second with uh working uh also with
[1:50:30] hannah on refugee settlement focused uh change detection and environmental assessments using satellite data mainly for sort of a more of a built up and
[1:50:40] infrastructural perspective rather than the vegetative perspective we focused on today today um um we have one more part to this training
[1:50:47] which is on thursday of this week and there we're looking at developing a climate index for uh rather an index for
[1:50:56] climate hazard climate exposure in refugee camps um so using a bunch of different remote sensing data we
[1:51:02] integrate them all into an index that's on thursday uh please tune in um and of course any questions or follow-ups or
[1:51:10] comments um please send hannah or me or both of us an email and um hope to see
[1:51:15] you you on thursday thanks hannah did you have any last thoughts or comments to any of the participants
[1:51:27] um yeah no thank you all for joining um it was really fun putting these presentations together so i hope you
[1:51:34] enjoyed them as well uh yeah thanks to jamin for co-organizing and the whole arset uh team for really helping us facilitate
[1:51:44] these these series of trainings so thank you to all of them i must say you two both did you knocked
[1:51:51] it out of the part with this uh with your presentation and also thank you so much for providing all the participants
[1:51:56] with the the code through earth engine i know that's going to be of great value to not only the people joining today but
[1:52:02] then in perpetuity because all of these will be uh freely available to the public so hopefully a lot of people will
[1:52:07] be able to access them and and be able to do some good analysis with them uh as
[1:52:11] we wrap up again thank you again hannah and jamin i also want to thank the entire arsenal team brock blevins selen
[1:52:17] hudson odoi sarah cutchall jonathan o'brien and amita mehta thank you all for putting this together and we
[1:52:23] look forward to seeing you in two days for the conclusion of this webinar series so be safe and we look forward to
[1:52:28] seeing you on thursday
