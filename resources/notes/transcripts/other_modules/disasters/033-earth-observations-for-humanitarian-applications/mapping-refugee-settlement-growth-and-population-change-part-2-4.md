# Mapping Refugee Settlement Growth and Population Change, Part 2/4

`https://www.youtube.com/watch?v=3yEelQADHxc` · id 7 · 2:12:26 · module 50 — Earth Observations for Humanitarian Applications

[00:01] hello everybody welcome to uh part two of the rset humanitarian applications using nasa earth observations training um today we are talking about uh our
[00:12] part of the training focuses on mapping refugee settlement growth and population change change um um as a reminder um
[00:20] this is this webinar series is scheduled around world refugee day which takes place on june 20th 2022 we've got four
[00:29] parts that are distributed sort of before and after world refugee day and and really are focused on um refugees
[00:36] one way or the other uh or humanitarian concerns of refugees rather in our last part of our training we
[00:43] looked at monitoring urban damage with insar with interferometric sar analysis that that part of the training is sort of positioned to
[00:55] think about how we can use satellite data data to to map the spatial pattern and the events
[01:02] detect the events that cause people um to be displaced from their home so in this case armed large scale armed
[01:10] conflict conflict today in part two we're talking about we're coming at sort of the end of that
[01:16] displacement or at least a stage after that initial displacement where we're focused on the refugee settlements and looking at the growth
[01:24] and population change using satellite data that that occur part three is really a follow-on to part two where we're looking at more focusing
[01:35] on the agricultural and vegetation changes in particular in and surrounding the refugee settlements and then part four um wraps
[01:43] up our training by looking at climate hazards at refugee camps so really thinking if part two and three is sort of a
[01:51] bottom-up let's look at the vegetative conditions the infrastructure out the settlement and we detect that from space
[01:57] part four is rather thinking about let's look at these top-down climatic um um conditions that that may affect uh
[02:04] refugee vulnerability in in refugee camps camps um each part of this training is two hours long and that includes a question
[02:14] and answer session at the conclusion so we're looking forward to hearing your questions at the end of
[02:19] this this part of the training uh and again we were focused just today on this refugee settlement growth and population change
[02:28] so so this this uh part of the training is really motivated from the fact that refugee settlements rapidly grow following
[02:35] refugee arrival we often have thousands of refugees showing up within the maverick weeks sometimes more and and that can really that large-scale
[02:47] population arrival in in in a settlement uh that the settlement usually doesn't exist right before the refugee
[02:54] refugee need to create that a settlement has been identified so that settlement gets established uh it often expands very quickly
[03:04] and then population arrival comes very the population increases very quickly with refugee arrivals arrivals those dynamics can strain available
[03:14] resources and existing infrastructure and their the situation is often is such a it's often referred to as a rapid
[03:22] response situation so there's lots of attention acute attention to setting up the settlement to providing the aid the need the
[03:30] dressing different kinds of needs such as shelter and medicine to the incoming refugees and um those those kind of processes
[03:41] can have a visual impact on the landscape right we can see indications of this um in the
[03:48] refugee layout and settlement layout and so satellite data because there's that um kind of spatial indicator that
[03:55] the hallmark of the settlement establishment the expansion and the population arrival um satellite data have a really great um
[04:05] spot to play in detecting that timing the rate of settlement change and supporting the refugee population within this element and we'll be looking
[04:14] at some of the different uh cut through our case that we'll be looking at some of the examples of doing that
[04:19] so today our goals we want to look at land cover changes following refugee settlement establishment and we'll be doing that
[04:26] through visual as well as quantitative analysis analysis and um that that emphasis on visual um is is
[04:36] intentional because um we can interpret these images often in a more perhaps efficient or rapid way than we could through
[04:46] analyzing things in a quantitative way at least in a single image and having that visual reference is
[04:53] really important so that when we do run a quantity quantitative analysis we're not uh we have a way of comparing that
[05:00] to make sure that it lines up with how we actually see uh things changing through our own
[05:05] uh interpretation of the imagery using our own remote sensing system which is our eyes and our brain
[05:13] we also are going to uh map this rapid expansion of refugee settlements using using satellite time series data so
[05:22] i'm looking at many many many images dozens collected over several years and we'll be looking at um some of the
[05:30] leading uh satellite data informed with demographic products things like mapping population density over a raster grid in a given region which includes a
[05:41] refugee settlement and we'll be looking at how well those do and comparing those estimates to some of the official
[05:48] population data provided by the u.n refugee agency my name is jamin vandenhook i've been speaking to you so far i'm an associate
[05:58] professor of geography at oregon state university university um i'll be walking us through the background and framing of this part of
[06:05] the training and then i'll hand it off to hannah friedrich who will walk us through the case study
[06:12] and hannah is a phd student of geography at the university of arizona today's case studies are uh each done
[06:21] using uh google earth engine so if you haven't already head over to the earth engine site we have a link there in the
[06:28] slide um and click sign up and get going with your own account the links that we'll be sharing that hannah will be
[06:34] introducing um should uh persist so anytime if you don't have your training if you don't have your account set up
[06:40] today you can come back to the recording of the training at another time and uh and walk through the
[06:46] case study uh at your own pace once you do have an account account um there are several are set uh
[06:54] trainings that we're um kind of building off of um we have at least five that really are uh
[07:03] would offer a nice sort of precedence for some of the things we'll be talking about today the fundamentals of remote sensing
[07:10] training the google earth engine for land monitoring applications the land degradation training uh population grids training as
[07:18] well as the time series so um not necessary that you've gone through all five trainings for this but just calling
[07:26] these out as really good resources to help perhaps lay a better foundation a more complete foundation for what we
[07:34] will be talking about today okay so um why do we need to understand refugee settlement dynamics and how can nasa
[07:44] satellite data help um um well why do we need to understand it one one reason is that it's a really large
[07:52] complex problem that of refugee population displacements around the world um at the end of 2021 we had about 26 million refugees across
[08:06] almost every country in the world 170 of uh 195 countries um this is a global phenomenon it's a uh
[08:16] we can't even say it's a yearly phenomenon in some cases there are new displacements occurring every month
[08:21] um um and uh this really um merits much more attention than it's receiving these uh needs of refugees are consistently under
[08:33] met um there's really never enough money or enough um aid enough support to address all these needs so it's sort of
[08:40] um um a scenario where we're always trying to address humanitarian concerns with far fewer resources than are
[08:48] actually needed to do so so it's a really large scale problem and and this before we get much further just to
[08:57] clarify um this term refugee this is a properly uh you know defined term um as someone who is an international migrant
[09:07] so someone who has to have crossed uh international borders who has been forcibly displaced from their home country due to violence or
[09:15] persecution or with the threat thereof and they've been granted under uh sorry granted protection under international law
[09:25] law so this this distinguishes refugees from internally displaced populations idps this this international uh crossing has to take
[09:36] place and there has to be a request for asylum asylum as you may expect then when you cross
[09:42] that border um most times um refugees then seek asylum in their one of their neighboring countries so we end up um seeing
[09:53] uh the vast majority of neighboring countries um that are neighboring where the recces are being displaced from
[10:00] really um shouldering a lot of the responsibility for supporting those refugees over in some cases decades um so here we have two examples of
[10:10] different moments of sort of south sudanese refugee arrivals there are about 2.2 million refugees today from south sudan and they are
[10:20] broadly living in kenya and uganda um um so so with that uh uh neighboring country displacement or the
[10:30] reception of refugees in neighboring countries countries that that correlates to developing countries hosting most of the world's
[10:37] refugee population 86 and and this has its own set of challenges because many of the developing countries
[10:45] that end up hosting refugees not only do they not receive enough support from international donors to as much as
[10:55] they've requested to support refugee needs often they're all some of the countries are already dealing with some extreme uh resource
[11:04] scarcity of their own um and so we have some of the most sort of critical refugee scenarios
[11:13] scenarios that kind of go on without being addressed addressed as they need to just simply because of
[11:19] the lack of available resources challenging that the population continues to rise since 2010 the global forcibly displaced
[11:30] population has doubled and and with that doubling over time we also have a it varies year to year but
[11:43] um there's a often quite a long average period period that refugees are displaced in fact two out of three refugees are in
[11:54] what's called a protracted refugee situation and that's when you have 25 000 or more refugees from the same
[12:00] nationality who have been in exile for five consecutive years or more in a given uh host country or asylum country
[12:07] um so this is this is common um this is this is the most common scenario that we
[12:13] have these long-term displacements these are not short-term uh a couple of weeks or even a couple of
[12:18] years the the tend the trend um is many years and in some case some cases we see um
[12:26] settlements inhabited for generations children children uh born as refugees last year uh there were a million refugee children born
[12:35] um and so we have this rising population over time and that uh really since you know the the modern
[12:44] definition of refugees wasn't was created created um that's always outpaced the number of returnees the number of refugees who go
[12:52] back home to their home country so we have this widening gap and we also have a general
[12:59] between refugees and attorneys and we also have just this growing population at least over the last decade or so
[13:07] so it's a sizeable problem um and you the un uh high commissioner for refugees which we abbreviate as unhcr that's the u.n
[13:17] refugee agency they shelter uh and and really help manage nearly a third of global refugees in um refugee
[13:25] settlements settlements settlements get um when we talk about a refugee settlement then this is not a refugee
[13:33] living or moving into an existing city these settlements are established for refugees their plot of land is allocated um it's it's
[13:41] uh it's planned um there are estimates of how many refugees can be in a given refugee settlement at a given time what
[13:48] kind of infrastructure is needed to support that on the right-hand side of this image we see um
[13:54] a couple of different way a couple of different examples of um refugee settlement uh dwellings or structures rather we have an emergency
[14:02] shelter a transitional shelter and we have a kind of the planning layout on the right hand side where you
[14:09] can see individual tracks and dwelling units sort of allocated within so this is highly organized in in many cases highly
[14:18] organized um and responsive to the need to shelter so many refugees but this takes place on land right this
[14:27] takes place this is you can think of this as novel urbanization so that's where uh satellite remote sensing comes in you
[14:34] can see the top uh image the aerial view of the in the upper left image in the
[14:39] graphic um that aerial view is really telling we can do things like count dwellings we can map the road
[14:45] infrastructure we can look at vegetation dynamics um lots of things right that we can get at from oh well that's the
[14:53] aerial view but from a satellite view we can we can get some of the similar kinds of information um so though this isn't
[15:00] uh you know extremely uh often considered an extreme social concern there's a lot we can do with satellite
[15:08] data um to address this and and it's pretty self-evident right when we look at some of these settlements on the
[15:13] right-hand side this is a time series video of uh sentinel 2 data um over actually one of the settlements we'll be talking
[15:21] about today in uganda uganda um um this is this kind of change we see with the urbanization with the
[15:29] infrastructural development um with clearing of vegetation with the establishment of dwellings you can see some of the bright structures there as
[15:36] well well um some of the larger buildings this is occurring over them a matter of months um so this this this is
[15:44] a new settlement that's established um and uh you know here we are uh six years later and it's still
[15:51] inhabited um and there's not necessarily much indication that it's going to be closed and the refugee population that's
[15:58] living there now would return um so we can see this really well in satellite data data and we can in particular track
[16:08] how quickly this happens right um this rapid establishment um we can see that really well with our
[16:15] eyes and we'll be looking at today um how we can use some quantitative assessments as well to support that
[16:24] there is quite a diversity of layouts of refugee settlements or sometimes called camps broadly we could think about these as
[16:36] sort of being in an unplanned category or one you could consider it being an organically settled um settlement versus
[16:44] one that's planned and the general distinction would be that one has a uh more of a rectilinear sort of
[16:51] 90 degree roads on the right hand side of the plant compared to the of the more sort
[16:56] of diffusely distributed uh dwellings um on the left but they're both uh refugee uh different kinds of refugee
[17:05] settlements um and they uh have different kinds of challenges from a remote sensing perspective we have different kinds of density of structures
[17:13] vegetation into mixing on the right hand side you could say there's a bit more of a pattern that we can see um
[17:21] in terms of the arrangement of dwellings um and allocated land compared to the left which is uh we don't necessarily
[17:27] see that sort of clustering clustering um so different kinds of challenges right um between uh looking at in a sense as gradient
[17:35] from unplanned to planned um and um we also have extreme um diversity right across different settlements we have a large population
[17:47] living in camps um some very well-known camps like zaatari on the left and kutupolan bangladesh bangladesh where
[17:56] where rohingya refugees are in this uh kudapalang camp where as syrian refugees are in this uh zottery camp
[18:03] um um but look at how different these are right completely different um um kind of layout the terrain we have hilly
[18:12] uh terraced lands with with shelters and dwellings and other kind of buildings um kind of built in
[18:19] nestled into these terraces um totally different layout in this uh zachary refugee camp in jordan and that's not even to speak about all
[18:31] the different kind of environmental and climatic conditions just the layout of these camps themselves extremely different so one of the consequences of
[18:43] uh no not only do we see um a lot of variability um on in terms of the layout of refugee
[18:52] settlements um we also have as something that's sort of challenging some of the overarching uh concerns about responding to reggie
[19:02] needs is we have um in some cases some very restrictive warehousing policies that restrict uh that limit refugee
[19:10] mobility so that they um can't leave the refugee camp in some cases cases these are called yeah warehousing
[19:17] policies policies where countries um are engaged in warehousing policies that's a really good predictor of protraction how long
[19:25] uh refugee refugees will stay in a given country um and that has that those restrictions on mobility um have effects
[19:34] for refugees developing their own livelihoods for generating their own income for um leaving the camp for any sort of uh
[19:42] wage seeking uh behavior um um and uh this is an estimate on the right-hand side here of uh this is very
[19:50] old but it's the the most recent estimate of populate country level population that i could find showing the number of of refugees in
[19:59] these different kinds of scenarios so these population data are surely out of date but just to give an
[20:04] example of the number of countries that have these kinds of restrictive policies um this means that the settlement in
[20:12] these cases really is one of the key key places to study to understand the kind of concerns and needs of refugees because
[20:21] refugees are restricted to that settlement right because of these warehousing policies so i've mentioned a couple of these
[20:29] advantages of satellite data for monitoring humanitarian conditions of refugee settlements a big one an obvious one that i haven't
[20:37] mentioned is that satellites can see you know anywhere around the globe um we are not limited by uh physical access or the
[20:45] need for physical access or the remoteness of a given location which is common many borderlands sort of settings for
[20:53] refugee communities we have satellites in orbit that are detecting images images sort of gathering images anywhere around
[21:02] the world regardless of our ability to actually visit those sites that of course has its own challenges we have to
[21:08] make sure our assessment is is well grounded but um at least we have we have imagery we have some data that we can
[21:13] work with um we also have this broad coverage we can look at uh conditions across an entire refugee hosting country for
[21:21] example example and compare and contrast between countries because we have consistent acquisitions acquisitions um from a given sensor over time landsat
[21:30] is going to collect the same kind of data data uh day after day site after site um
[21:35] and uh you know most satellites uh we could say the same thing we have that consistency um that allows us to measure
[21:43] uh the same kind of signal over broad expanse expanse um and over long periods of time um we
[21:50] also have this repeat um what we could call a revisit from satellites that give us a in some cases near real time
[21:59] assessment um and we that can go into perpetuity and in the case of landsat that can take us back
[22:06] uh decades as well which is a huge advantage satellite data as you all know really flexible um they can be applied in in
[22:16] many different kinds of directions um it's really just limited to um our creativity and our imagination and i
[22:23] think some of the awareness of what what needs to be done right there's a gap between what needs to be done and the
[22:30] data that might be available to do it and so that's one of the reasons that motivated this this training as well is
[22:35] to think about how we can narrow that gap to make to take advantage of this kind of flexibility of satellite data
[22:41] and put them into a humanitarian application which which is may not be one of the most common kinds of
[22:46] applications applications um um we also though we have this broad expanse along uh you know we can look at
[22:53] huge areas over time um um the data doesn't mean it doesn't mean that those satellite data are um
[23:01] out of context and sort of irrelevant to the local conditions it's it's in fact just the opposite we can really localize
[23:08] some insights on refugee livelihoods or things like sustainable development or disaster risk production climate adaptation adaptation um even though we're getting this really
[23:17] broad view from satellites we can the view that we're really interested in is what's happening at the settlement or
[23:24] around the settlement and satellites of course are are terrific at uh offering that kind of perspective perspective so satellite did have been used for a
[23:34] diversity different refugee settlement mapping applications for at least a couple of decades in peer-reviewed literature some of these early
[23:43] studies studies focused on counting dwellings or establishing refugee settlement boundaries estimating the extent the footprint of the refugee settlement um
[23:54] using satellite data we can see an example of this on the right-hand side looking at the tracking uh the growth of refugee
[24:02] settlement settlement over time this remains a really common application just because the need is it's still there we
[24:10] the the satellite imagery give us this insight into this rapid expansion of settlement and we can get at that we can
[24:19] track that in part through counting um dwellings through uh counting the uh estimating the area of the satellite
[24:28] of the settlement and then correlating that to um to population density um um some some uh studies use uh before and after
[24:39] snapshots to narrate the settlement growth um and estimate the population um other studies um take advantage of
[24:48] multi-temporal or full time series which is to say all available imagery um from a given satellite sensor to settlement
[24:56] expansion or land use and land cover changes and there's uh really uh amazing diversity of different uh
[25:03] applications around these so there's surely more than what we have uh listed here but these are some of the ones that
[25:10] are most relevant for this training today today uh so there's lots of great precedent to to build on and uh of course lots of
[25:17] opportunities for improvement going forward forward um um throughout all of these studies right decades of this kind of work there are
[25:26] several challenges to monitoring refugee settlement dynamics that really persist their characteristics of the settlement and the sort of habitation this
[25:35] long-term habitation that are difficult to to totally overcome overcome the first is that refugee settlements um and the land use within a settlement
[25:45] they tend to be pretty small scale so sometimes we may see a plot of land um within a refugee settlement that's
[25:51] smaller than a landsat pixel perhaps smaller than a 30 meter by 30 meter landsat pixel or perhaps um may
[25:59] just take up one say sentinel to 10 meter by 10 meter pixel right these can be really small plots of land um those
[26:06] are difficult to detect using open data so high resolution data can be really helpful in those cases
[26:14] um um we also tend to have a um we don't it's not a sort of a typical
[26:21] city layout where it's just dwelling after dwelling after dwelling in a dense you know urbanized area often we see vegetation um intermixed
[26:30] very often we see bare earth intermix in between these dwellings that creates challenges from a mixed pixel phenomenon where we uh that makes
[26:41] it difficult to get a clean signal in some cases of individual dwellings or infrastructure infrastructure um and so we sort of have a muddled
[26:48] classification or or on the flip side characterization of vegetation condition because the dwellings are getting in the way or
[26:55] infrastructure of our vegetation assessment assessment um and of course i mentioned this one but because the refugee settlements are
[27:02] so rapidly often built and settled we have this this this need for very high frequency revisit data to capture
[27:15] that kind of dynamic dynamic and we also don't have uh a once the settlement is open the settlement may close um at some
[27:26] later time so we have the sort of different kinds of temporal concerns both the rapidity of it but also the ephemerality in some
[27:35] cases cases of settlements opening and then closing at another time and really all of this really necessitates
[27:43] knowing what's happening in a specific displacement context we need to know um the timing of the settlement established
[27:51] don't need to know if it's been closed of course um so we we can't just be operating um
[27:57] outside of this uh kind of knowledge of the actual um the conditions on the ground as much as we can we want to
[28:04] understand those before designing our satellite image analysis um there's also generally a scarcity of up-to-date data on land cover land use
[28:12] changes in refugee settlement so that can make it difficult to validate some of our assessments uh similar similarly
[28:19] with population dynamics um so uh often we we don't quite have the kind of data we'd really like
[28:27] to refer to to to make sure we're accurately capturing a land cover land exchange exchange at the specifics that we're interested
[28:34] in and so we can use other kind of data that are available maybe collected elsewhere in the same region that would
[28:40] have a similar kind of value for assessing what a given kind of vegetation looks like spectrally and
[28:47] then we can check it that way but suffice it to say that we may not have that opportunity
[28:52] for ground truth data right at the site of the settlement itself and we'll be dealing with some of these
[28:57] in our uh training today um that's all for me i'm gonna hand it over to hannah for our case study
[29:05] great uh thanks chairman um so now we're going to shift into kind of the case study portion of of
[29:14] this training um and we'll specifically be looking at the establishment of refugee settlements in uganda but before doing that
[29:25] i'm going to give a little bit kind of more background and context on why there's refugee settlements in
[29:31] uganda and kind of the history of um how those came to be so currently the total refugee population
[29:39] in uganda is about 1.4 million which makes uganda about the third largest largest refugee hosting country in the world
[29:49] which is pretty staggering with with primarily primarily most of the refugee population is coming from south sudan
[29:57] um as well as democratic republic of the congo congo um um and kind of refugee settlements in
[30:03] uganda in general have really date back to the 1960s when there were refugees from burundi and rwanda
[30:12] rwanda and drc that first began to be resettled within settlements in uganda and the history of kind of how uganda
[30:22] has managed or welcomed refugees has changed a lot um especially in the past 20 years where where um
[30:30] um jamin mentioned earlier in the in the training that there were you know these warehousing policies were there's
[30:37] really restrictions on what refugees can do and where they can be and if they can leave settlements or not but
[30:44] um in the past really since the 2010s uganda has kind of pioneered this self-reliance or self-sufficiency policy
[30:55] of really having an open door um um policy when it comes to what refugees can can do so
[31:02] um within a settlement refugees are are settled they're given a plot of land for a dwelling and agriculture
[31:12] and and really significantly granted access to services such as healthcare education and freedom of movement to come and go from the settlement as they
[31:23] please so this really you know opens up a lot of kind of doors and opportunities for people to gain
[31:31] employment employment you know be able to go to school get the services that they that they need um
[31:37] which refugees and other refugee hosting countries aren't able to take advantage of so um in that sense uganda has kind of had
[31:45] this really liberal refugee response policy that that has been widely praised within the the international refugee kind of hosting community
[31:56] um um and also has implications for how we think about what refugees what refugee supplements look like in satellite imagery um
[32:05] knowing that there's not necessarily a hard boundary when it comes to understanding where there's built up areas
[32:12] areas in locations that that refugees are settled settled um um and so in total there's 32 unhcr managed refugee settlements
[32:25] across uganda in this map here on the right hand side you can see that um the refugee
[32:32] settlements themselves here are are outlined are filled in in orange and they're kind of dispersed in the
[32:39] northern part of the country as well as the western span of uganda and so um in the northern part there's quite a
[32:47] few that are really clustered together and they're a little bit more spread out in the western part but
[32:54] what's kind of interesting about the spatial distribution and and also like extent of of settlements is that some of
[33:02] them can be really large so for example bitty bitty um which is in the right hand kind of sorry upper
[33:10] left-hand part of this map in set a is one of the largest refugee settlements in the world and is a really
[33:18] giant giant boundary extent um but then there are some refugee settlements um like pajarina which is one that we'll be
[33:26] looking at more in depth in this in this training but ones like alua one and alua ii which are
[33:32] really really tiny um and so the variability in the size of refugee settlements um also you know kind of adds another
[33:41] element of complexity to understanding what refugee settlements look like in in a given locale given you know the different um layouts that
[33:53] that can that are possible so um if we look on the left hand side here there's also a timeline of the total
[34:04] ugandan refugee population through time and so the population totals date back to the 1960s which is when the first refugee
[34:13] settlement was opened in uganda but we see here kind of in the 2014-2015 2014-2015 um um at that point we see this really
[34:23] explosion in the refugee population um and that's due to conflict that was happening um in south sudan
[34:32] sudan with the civil war that was happening where where about a million refugees from south sudan um were displaced to
[34:40] uganda so um jamin mentioned that in in refugee settlements there's usually a rapid expansion of you know the the settlement being
[34:52] established and then also with populations being arriving at the settlement this kind of rapid rapid urbanization that can occur so even just
[35:02] looking at the the timeline of total population we see this kind of at-large influx of of people
[35:09] coming in on to uganda um so this these three images here are actually just showing google base map but
[35:21] um show three different examples of some of these smaller settlements in uganda um um but also kind of showed that the
[35:27] diversity that can exist exist so so in ilo 1 we kind of see this gridded street network
[35:37] in these two kind of sections of the settlement itself and a little bit of that is also present
[35:43] here in this middle figure of parolee one one and then looking at um mary the one on
[35:51] the right hand side this is a bit more organic organic you know there's less of a you know
[35:59] grid-like layout to the the streets themselves it's mostly just like walking paths in between these smaller smaller clusters of dwellings or structures so
[36:09] um um yeah having a kind of a you know knowing the diversity that can exist with with
[36:15] refugee settlement layout is is really important and kind of i think will set us up for going into where
[36:22] we're about to go with the training here um so for kind of for the remainder of the the
[36:28] training we'll be focusing on just one settlement called pashurina that was established in 2016 2016 and this is one of the handful of
[36:39] settlements that was established to host the arriving refugees from south sudan sudan so so pajarina pajarina mainly hosts
[36:50] the population is majority south sudanese sudanese um um the kind of i think the cap that it was
[36:58] at the the total population there's about 36 000 000 um um so so within within this this blue units here settlement boundary
[37:11] um there's about 36 000 south sudanese that were settled here um so it's in located in the northern part of the
[37:20] country country and one kind of side note here about where these unit shear settlement boundaries come from
[37:31] they usually result from planners on the ground working with within unhcr to set up the settlement and then the
[37:41] geospatial geospatial officers get you know create the data set and that's shared shared and that data set is also shared with
[37:51] the humanitarian openstreetmap team and so they you can access these settlement boundaries through openstreetmap openstreetmap and there's also a platform called
[38:01] humanitarian data exchange which hosts a lot of humanitarian open street map data including the settlement boundaries so
[38:11] um um yeah the the unity our settlement boundaries aren't always as easily available for other refugee hosting countries but
[38:21] in the case of uganda they're quite easy to to to access publicly um um so in this middle map i also have some
[38:28] additional osm data here showing the official road network as well as just some points of interest including refugee response offices and
[38:39] market centers and there's a host of other types of landscape features that is available through osm um which is also kind of
[38:49] really interesting for kind of grounding us for understanding what kind of services and you know things like schools or child-friendly
[39:00] spaces um markets markets um exist at these at these settlements um and then the map on the right-hand
[39:10] side is a land cover map from the european space agency their 2020 world cover map map and
[39:22] and which we'll get into in the training three of this kind of training series a little bit
[39:28] more into comparing different line covers but we can see here that um even though page arena was established
[39:36] in 2016 and this data set from esa represents 2020 nominally the the land cover there there's a lot of built-up area that's
[39:45] missing um and and a large portion of the settlement has been classified as cropland or grassland and even though it's picking up a little
[39:54] bit of this street network here with like this thin red lines there's still a lot of you know residential dwellings and
[40:04] structures that are just completely missing from from these kind of off-the-shelf blend cover products so so this kind of begs the question of
[40:14] how can we kind of understand essentially map urban urban build-up area area on our own using available satellite imagery
[40:27] so so we're going to start with first just visualizing visualizing um um padrina itself so the we'll make a time series looking at
[40:38] the establishment of the settlement um and then as we'll see here we'll be making this kind of little gif on the
[40:44] right hand side the pretty rapid expansion that happens at pajarina um so we'll be using landsat 8
[40:53] uh so a 30 meter optical optical sensor and creating a time series from 2015 through 2020 um
[41:03] um to capture the establishment of pajarina which happens in middle of 2016. so i'm going to click on this earth
[41:12] engine link and it's going to pop us over over into into the code editor so um um here
[41:24] here we are in earth engine um for those who are unfamiliar i'm just going to do a really quick overview just
[41:30] to situate what um what we're looking at so this is the the code editor of earth engine
[41:40] on the right hand side there's tabs for your scripts docs so this is you know if you need to
[41:49] look up um information about any of the functions that we'll be using in the script itself this allows you to come in search
[41:57] through that as well as a tab for assets which has essentially where you store your data that you personally upload to earth
[42:07] engine that you can use and share with others so they can use it as well in the middle here we have our code
[42:14] editor which is where we have our script ourself which we can edit comment comment add code to
[42:24] and this is what we'll be walking through here in a second we can search for existing data sets
[42:30] within the earth engine catalog in the search tab here um so there's a just almost endless amount of data sets
[42:40] that are there and being added all the time so this is kind of a jumping off place for
[42:46] looking for additional satellite imagery or different data sets that are hosted on earth engine um and then here on the right hand side
[42:54] is the console so this is where we'll be if we're printing things out on how we'll be interacting with those
[43:02] that information that's printed out there's also an inspector tab which we'll use in a little bit to
[43:10] to click on the map below here and look at some data values and kind of interact with the data that we're creating
[43:17] a little bit more intimately um um and then here they're really the the links or the buttons that you'll want to
[43:25] pay attention to here is just this run button so as we're editing the script um and want to
[43:31] output it we'll hit run and that will allow us to run our script so so we're gonna start out here
[43:41] um um uh first setting our options for our map so our map is down below here um
[43:50] um you can have either a map that you would think of when you think of a google maps or something so that
[43:58] has the political labels streets um you know some of the road network waterways on there but we're gonna set our options to
[44:07] satellite um that just switches it over to to the google base map there even though we'll be adding satellite imagery on top
[44:14] of this um it's just a little bit easy to kind of understand and interact with um um the underlying base map there so first
[44:22] we're going to load in the unit tr settlement boundary for power arena which is shared publicly as a asset um
[44:31] within this repository called eerset humanitarian humanitarian um and so we'll load it in as a feature collection but because it's just a
[44:41] single single feature within the feature collection um we're gonna use this dot first to grab grab that feature
[44:50] and call it a feature so in earth engine if you've done the some of the rsat primers on this there's
[44:59] these different types of data on feature collections as well as features a feature is essentially just a single
[45:06] item within a feature collection um so we're that's why we're kind of calling this here after we
[45:14] filter this here so we're going to create that variable called pashurina and then we're going to add it to the
[45:20] map map um so we're adding the feature pajarina we're not giving it any visualization and calling it pagerana refugee
[45:29] settlement as the layer name and then we'll also center the object on pagerana so this will even if we pan over here
[45:39] and get off of pageran whenever we run the script it will automatically bring us back to centering the map on padrena itself
[45:48] which is pretty handy so while the the settlement boundary is really useful we really kind of want to be interacting
[45:58] or looking at what's also happening on the periphery and the edges of the settlement so we're going to create a
[46:04] buffer buffer around the settlement just to kind of bound bound what we're looking at so we're going to create a buffer of 500
[46:13] meters meters blackbirds and earth engine operate in meters meters um and then we're going to apply this buffer of 500 to pashurina
[46:23] and then create a bounds on it and create create force it to become a geometry and earth
[46:28] engine speak so this is essentially going to be a bounds or bounding box around padrina itself itself um so that's a little bit of kind of
[46:41] just the the prep work to get uh working with our boundary um and before we get into working with
[46:49] landsat data itself um we're going to create a function to add indices indices so so with lanza data we have multi-spectral
[47:00] optical imagery and and for visualizing some of the the changes in refugee settlements over time we could just look at true color
[47:12] red green blue imagery or false color imagery but we could also apply indices like the normalized difference
[47:18] vegetation index which essentially allows us to see how green each pixel is or the normalized difference built up index to evaluate
[47:28] the essentially the degree of built-upness or urban urbanization of a pixel or something like the normalized burn
[47:36] ratio ratio to evaluate burned area so so this function itself is really just taking what bands will want
[47:48] to create those indices with and use a function called normalize difference difference um to create those um
[47:57] um unique indices so for ndvi we're going to be taking infrared minus red divided by new infrared plus
[48:04] red red and and we'll be doing that for different bands for ndbi and nbr um some other prep work we're going to do
[48:16] before before kind of loading our image collection for lancet is renaming our bands so um um the lanza
[48:24] images come served up with the bands we'll be using the the surface reflectance version of landsat but
[48:32] but the bands are called sr underscore b2 which is not super intuitive for understanding or knowing which banzas
[48:40] are so we'll rename them to blue green red nearby so our one and sword two um so to actually
[48:50] um um process our our landsat data at pashurina um we're going to take the image collection itself
[49:00] itself um which is um the string here and we can also go in here and i'm just copying and
[49:08] pasting that string and pulling this up so we can read a little bit more you can go into
[49:12] the description see the bands here's our sr underscore b1 see what all the image properties are um so this is the image question that
[49:22] we're loading in and then we'll be taking that filtering it to the dates of 2015 through 2020
[49:30] um um given that that's our our period of interest around the establishment date um and then filtering it to these
[49:38] buffered bounds that we created earlier which is the bounding box around powder arena arena we'll also want to get rid of images
[49:46] that have a lot of cloud cover so we're going to filter the image collection to have images that
[49:51] have cloud cover less than 40 percent um so this filter function allows us to filter by image property um
[50:03] so we'll be getting rid of cloudy imagery more or less with this this filter command and then we're going to
[50:13] rename our bands so we had these two lists here that we created before um we'll be selecting
[50:20] our bands of interest these sr underscore bands and renaming them to our more interpretable blue green red
[50:31] etc named bands and then lastly we're going to take that function that we created before called add indices
[50:39] where we take our various bands that we want to create indices with and actually create the indices and add them to each image
[50:51] so this will allow us then to have a full image collection at pagerina from 2015 through 2020
[51:00] with each image having ndvi and dbi as well as nbr as bands so that will that will
[51:10] set up our image collection um um next next um so we could just add our refugee settlement boundary to the map
[51:23] but but a handy-dandy little way to just add the outline is to create an empty image and paint the pagirina outline
[51:38] onto the image with a couple of parameters saying the the width of the boundary itself and the
[51:44] color color um and then we'll add that outline um saying that it's blue to the map um so
[51:54] here we'll we'll run it and it will see that the boundary is is blue um um so
[52:03] so the the i guess kind of going back to the the task of at hand is to create
[52:08] this this time series uh gif of the landsat imagery that we've collected um and processed so um
[52:20] to do that we'll um also want to add the date of the image onto the essentially superimpose the date the text
[52:31] of the date onto the image itself um in in our each snapshot uh through time in the video so to do that we're
[52:39] going to bring in this package um and call it text this just allows us to add text annotations to our images
[52:50] we're going to create a variable called rgb vis-param which essentially is the visualization parameters that will apply
[52:58] to each image in our landsat image collection collection um um and then define some arguments for the video
[53:08] itself itself so our region is going to be the buffered bounds that we created earlier we're going to tell it to have three
[53:15] frames per second and a scale of a 10. 10. and then we also have a variable for
[53:23] annotations which is just indicating where the text that we have for the dates is going to go on
[53:33] on each image and then lastly we have this function called add text which is actually going to
[53:44] take the date um for each image um so we can get that using the system time start
[53:51] um um cast that to an earth engine date and then an earth engine string so so this system time start is
[54:04] not in the format that makes sense to us so we're going to change the format to be in
[54:09] year month date um um so it's a little bit easier to understand what the actual data is
[54:15] um and this is really essentially where we're bringing it all together here where we have our for each image in our image collection
[54:24] we're going to clip it to our buffered bounds bounds visualize it with the parameters that we specified above here
[54:33] so it's going to be a true color image we're going to be showing red green blue with these various max min
[54:41] and opacity settings settings and then we're going to add the date as our the date for that image onto the image
[54:53] through this annotated text.annotate image section section and return annotated which is the image with the date superimposed on top of it
[55:05] so so this function add text we're going to take and then map map through each image in our image
[55:15] collection collection being the landsat image collection that we've processed above above um so that will then give us
[55:25] this image collection that has the date superimposed on top of it and with that we can then create our video
[55:34] so earth engine has this function called get video thumb url um where we can take our um
[55:44] um image collection that has the time this time stamp add it as an annotation apply this function give you some url and then
[55:56] bring in the video args that we specified above so telling it we want to create a video at
[56:03] our barber bounds give me three frames per second um and then print that which will show up then in our console
[56:13] so if we hit run for this so so we see that the map switched to satellite satellite we have our
[56:36] just feature collection added to the map but to see our outline the the uh padrina refugee settlement boundary
[56:45] that was painted onto the image and added added and then over here in the console this link
[56:52] [Music] [Music] that if we open up will then take us over to a new tab and and the
[57:06] gif of our landsat time series will show up with the dates on it so here i know this is going by really fast
[57:16] but but um um at the beginning of the time series we saw that in 2015 there wasn't a
[57:23] settlement settlement really identifiable but then in 2016 it showed up so let's let it loop through here again
[57:31] and and we can track that quick so in 2015 no settlement settlement green green grass 2016 hits
[57:41] and then all of a sudden we see the settlement established really quickly so really in a matter of a couple of
[57:46] landsat scenes we go from having no refugee settlement to having a street network buildings buildings cleared land
[57:56] um um you know areas that are being expo or cleared for agriculture um um and and yeah this this rapid establishment that
[58:07] happens um so even with landsat data you know a 30 a 30 meter satellite image we can see that this
[58:18] this rapid establishment happens really quickly and um um we can't you know get out these day-to-day changes because landsat is
[58:27] only available um you know just we're using landsat 8 in this case so 16 day revisit periods for for landsat 8
[58:36] but but we can you know visually qualitatively interpret that the settlement is established quite fast so this is a kind of a really
[58:48] intere like easy way to kind of get to know a study site um by creating these these gifts and time series through time
[59:00] and next i'm kind of going up the the chain of complexity and what we can do with time series
[59:07] is actually looking at a image by image um approach to understanding changes through time so there's a term called time series
[59:18] disturbance detection which is essentially essentially in in remote sensing where you can look for disturbances in your full
[59:27] time series of satellite imagery um and so we can use time series disturbance detection to document these
[59:34] different land cover changes um within and around refugee settlements so not only can we look at urbanization or you know the settlement
[59:42] being established itself but look at changes in um vegetation bare ground forest forest you know any other kind of land cover
[59:54] that we're interested in to understand how is that pixel changing through time is it undergoing some sort of
[1:00:01] disturbance disturbance or change and what does that mean for kind of the overall assessment of of land cover at that area
[1:00:10] so so a land cover change or a disturbance can can take on three different possible trajectories trajectories there's a disturbance in a state change
[1:00:21] which is shown here on the bottom left so so going from vegetation to urbanization in this case
[1:00:28] we have a drop in ndvi when we have a a building being built in what was a grassland so
[1:00:37] this is kind of a what we were just looking at with the before and after so um
[1:00:42] um vegetation to urbanization is our state change we can have also a disturbance that is a condition
[1:00:48] change so if we're looking at um um grassland for example we could have a really bright green
[1:00:56] patch of grass um that over time weather due to drought or some sort of seasonal shift or
[1:01:06] application of some sort of i don't know um pesticide or something couldn't undergo some sort of change in the condition of that land
[1:01:17] cover so a grassland could go from being really bright green to less green so this a little bit more gradual change
[1:01:25] would be a conditional change um or we could have something that's a trajectory that is a disturbance so some
[1:01:33] sort of in this case drop in recovery that's followed by um sorry a drop in ndvi that's followed by recovery
[1:01:42] so so this is a little bit more complicated where we have you know being one at one point of uh in time having a
[1:01:49] certain dbi value having it drop and then having it return to its near original value so these are just three different types of
[1:01:58] disturbances that can be tracked and and studied studied using this disturbance detection approach approach um um and so there's a variety of different
[1:02:10] disturbance detection algorithms available um we're going to be using uh one called breaks for additive seasonal and trend
[1:02:20] otherwise called be fast which allows us to account for both long-term trends so in the case of
[1:02:29] this conditional change something like browning due to a protracted drought would be our long-term trend as well as seasonal trends so we know
[1:02:39] that we have you know shifts in you know we go through dry seasons rainy seasons multiple you know different kind of
[1:02:48] changes throughout the year that may happen so what what bfast bfast is really kind of well equipped to do is handle both of
[1:02:56] these types of long-term and seasonal trends um and kind of set that aside when we're trying to understand or identify
[1:03:05] disturbances disturbances so so um on an image by image basis we can essentially identify these more nuanced
[1:03:16] disturbances that we may not um that we would not have been able to capture with other disturbance detection algorithms
[1:03:25] um which may see some sort of long-term trend as a disturbance or may see some sort of seasonal trend
[1:03:31] as a disturbance but bfas takes those um different long-term and short-term trends into account account um to help us identify more kind of like
[1:03:43] acute changes in our in our time series um at every given pixel pixel so a little bit more kind of
[1:03:52] nuts and bolts of bfast um the inputs are an image time series so you can use landsat imagery sentinel 2
[1:04:03] modis modis um whatever image you know archive you want to use and then the other input is defined parameters
[1:04:14] which we'll get to in the next slide but essentially essentially different different knobs that you as the user can define
[1:04:21] and and change um to test out how bfast is doing at identifying disturbances in your time series
[1:04:29] um um and what bfas provides as the output is a pixel level date of disturbance um which is called the break point timing
[1:04:40] so this is when in the time series you that be fast identifies some sort of pixel level
[1:04:47] disturbance disturbance and the second output is a magnitude of change so if you're using um a time series
[1:04:57] with ndvi you could use whatever really variable you're interested in ndbi ndbi um just a green band swear
[1:05:08] but whatever your variable of interest is that you're using in your time series it will give you the
[1:05:14] magnitude of change which is essentially the difference or the medial residual between the expected and observed values
[1:05:26] during this what is called the monitoring period so this graphic i think helps maybe illustrate what be
[1:05:32] fast is doing a little bit um so with our time series which is here these gray dots so we have
[1:05:41] here 2010 through 2015. we have some sort of spectrometric let's just say this is ndvi that we're looking
[1:05:47] at through time so our gray dots are fluctuating through the year as we have a rainy and dry season
[1:05:56] um and then we're getting up into mid-2012 and we see this drop in the gray dots through time so we know that
[1:06:05] you know there's something happening but let's use bfas to help us model that disturbance disturbance so what we do is we create a
[1:06:13] define a historical period and a monitoring period so historical period is the time period that we're telling be fast to learn
[1:06:24] this time series and by learning the time series it will create both these harmonic and linear components
[1:06:32] components so we're essentially starting in 2012 and working backwards the fast will be looking backwards in time to create this
[1:06:40] modeled fit which is this blue line which takes into account both the linear trend so there is somewhat of a increase
[1:06:48] in in ndvi over time um which is fine that that's okay bfas will be able to account for that
[1:06:56] um as well as the harmonic trends so we have these little like dips here at the top of the curve um
[1:07:02] as well as the giant or the the main uh switches here between the peaks and the troughs of this curve
[1:07:09] are are which are our dry and wet seasons so bfas creates this model fit and then we'll extend that model fit
[1:07:18] into the monitoring period so it will continue that from 2012 onwards and then bfas will then look at the differences between
[1:07:32] the model fit so the blue the solid blue line line and and the time series itself and create these model residuals which
[1:07:41] is the gray dotted line so this is the difference between the expected which is the blue line our
[1:07:48] model b fast fit and what is observed which is our image time series over time and we have these
[1:07:57] these differences which then um based off of the input parameters depending on how big these differences are
[1:08:06] are um um bpas will essentially then flag okay when we have a really big difference consistently for a given amount of time
[1:08:15] that's a disturbance and so we see here um you know just looking at the gray dots they're
[1:08:22] coming along fluctuating through through time every year and then there's a drop and then bfast will identify what is called the break
[1:08:32] point which is that date of disturbance um and then calculate for at that given date what is the magnitude
[1:08:41] of change um the difference between the expected and then the observed so that difference let's say you know going
[1:08:48] from from this value down to this value then is our our expected change um or the the actual observed change in
[1:08:56] the the the variable of interest so um um yeah this this schematic is is really illustrative of kind of what will be
[1:09:06] what we'll be showing here in the next uh kind of little task um so i mentioned that there's different
[1:09:13] parameters that the user can define um when setting up their bfas model um so so this kind of gets back to something that
[1:09:23] jaime mentioned earlier which is really knowing the landscape that you're working in or at least seasonally what's going on
[1:09:31] throughout the year so we can essentially tell it be fast how many many if we want to have linear trends so do
[1:09:39] we want to account for these long-term seasonal greenings or brownings or any kind of long-term trends over time
[1:09:46] um tell it what uh if we want to include a harmonic so in this case yes we want to include um
[1:09:55] you know this um ordered model so we have both our dry and wet seasons that we're going to account for
[1:10:07] and then we have various parameters that essentially allow beef boss to identify identify what it means to be a disturbance so
[1:10:17] there's this value called h um um order which is the the how many harmonics we'll actually include in the
[1:10:25] model fit um history which is essentially how beefal understands what a stable history period is when it's creating the model fit
[1:10:37] and and the the the dates of interest for the historical period and the monitoring period so um
[1:10:45] these you know really are just kind of different knobs to play with when defining the be fast
[1:10:50] model and and do have quite a bit of bearing on the actual outputs but really depend on case by case you
[1:10:58] know what the value should be um um and and um you know also just like as a
[1:11:05] you know kind of experimenting with the the different parameters to to see what the outputs are and how they align with
[1:11:13] your expectations um um so this is what page arena looks like for using or what bfas looks like at patrina
[1:11:25] using using sentinel 2 in this case we we see here for the settlement area this is looking at ndvi through time
[1:11:37] these fluctuations happening um and then our our black dots drop off in 2016 so for this red dot area here we see here
[1:11:49] in june 2016 vegetation vegetation in by september of 2016 definitely built up urbanization happening so of course we have this drop-off in ndvi
[1:12:02] and and bfast will then allow us to see when that time period is that it detects a disturbance in this case it detected
[1:12:10] this for october which is a little bit later than we see here but um nevertheless a disturbance happening
[1:12:18] and then the magnitude of change so about a 0.25 decrease in ndvi from before and after after and then
[1:12:27] for this area here where we have a non-settlement non-settlement point point so a place that just you know remains
[1:12:35] um vegetated we just have our time series and there's no disturbance detected so in that case you know we can also use bfas for
[1:12:44] understanding where there's stability essentially over time in our land cover or at least the ndvi time series
[1:12:52] so so um be fast there is code that does exist for using bfast in the code editor but
[1:13:00] we are going to use an app called the fast monitor google earth engine app um um to essentially apply be fast um at
[1:13:10] pashurina pashurina um just for some context pagino or sorry bfast was originally written in r and has since
[1:13:19] been adopted to earth engine so um if you really kind of want to like get into the weeds and use vfas i
[1:13:27] would actually recommend um checking out be fast monitor as it exists in r but knowing that you
[1:13:34] can use it also in earth engine um if if you want to so with the app um you know it's really
[1:13:43] quite simple and kind of like what we're going to be doing in terms of using bfas but
[1:13:49] um um i'm just had this already loaded here because it does take a couple of minutes to
[1:13:54] to um once you kind of hit update um for it to run but um walking through the different parameters
[1:14:03] that we can set here so we have a start of history which i've defined for 2012 end of history the end of 2015 so we
[1:14:11] have this um um four year time period for our history for the monitoring we're going to start
[1:14:18] january 1st 2016 and have it go through the end of 2018. these are just the default uh
[1:14:26] uh additional parameters so we have h period alpha magnitude and harmonics i did change the harmonics to v2 so we
[1:14:34] have this um order of two harmonic that the model is being fit to and then once you define these hit update both
[1:14:45] maps maps and then this will update so you can kind of see patrina underneath here um um but um
[1:14:56] yeah so on the left hand it will show the time of change so 2016 through 2019 as set here from our
[1:15:04] state of monitoring 2016 through end of 2018 2018 the color being really like this kind of white or lighter blue being closer to
[1:15:12] 2016 2016 and then darker being later on so this is when bfast detects a disturbance um and then the magnitude of change
[1:15:22] which is our our change from the expected expected um based on the modeled fit from the historical period to the observed so
[1:15:31] bright colors mean some sort of large magnitude of change and then on the right here we can click
[1:15:37] on different areas to see on a pixel by pixel instance instance when the breakpoint or the they're
[1:15:47] calling here break time was the magnitude of change um the longitude and latitude of the point that you
[1:15:55] clicked clicked as well as the plotted time series um so this is really um you know helpful
[1:16:02] for kind of illustrating the time series um um you know on a image by image basis um so
[1:16:11] the other kind of caveat here of using the the be fast monitor earth engine app is that this is just
[1:16:19] set up to show um normalized difference moisture index and so far we've been looking at normalized difference vegetation index
[1:16:29] um so just know that that's kind of the variable of interest that's being shown here but um you know
[1:16:36] the different variables depending on on the disturbance that you're trying to detect um that you could use so
[1:16:43] um um yeah we're just going back to the map here um if we're looking at the time of change um
[1:16:52] we see here that it actually is doing really well in picking up like what we know to be the
[1:16:59] built up area and defining uh that time of change that's detected for all those pixels as you know in the 2016 range so
[1:17:09] um um even using an index like normalized difference moisture index we can we can see this um
[1:17:18] um establishment of the settlement built up area itself um and then if we switch over to the
[1:17:24] magnitude of change um again you know seeing a pretty good distinction between the built-up area having pretty
[1:17:33] significant changes in the magnitude of change compared to the expected um with the outline shown in in bright
[1:17:42] and then if i just click uh uh somewhere on the map uh uh this will update here
[1:17:55] here on the right hand council council so while the charts are loading so i clicked somewhere around here about
[1:18:08] um um and we see yeah that the break point is middle middle you know about of 2016. so right on
[1:18:17] track with when we know the settlement was established in june of 2016 and that we have a break point magnitude
[1:18:25] for that pixel that i clicked on about a decrease in 0.38 in our ndmi um um and then the chart that gets printed out
[1:18:36] below is our historical time series so you know as to be expected we have these shifts seasonally year to year that are
[1:18:45] happening happening um um so this is the blue dots the ndmi the actual pixel values and then the fitted
[1:18:54] model that we created so we can see that even with you know these parameters that are set
[1:18:58] over here we have a pretty good model fit fit for the time series and then our monitoring period so again
[1:19:05] that model that gets projected into the future during the monitoring period period and then the actual ndmi values from 2016 through 2018
[1:19:18] and and we do see this drop-off happening in middle of 2016. um um and that's it's not shown here but you
[1:19:28] know that's when we have this essentially this um these break points um break times being being identified
[1:19:41] that are displayed here so that 2016 middle 2016 date here is then visualized here and that difference between the expected and
[1:19:52] observed is then visualized here in the right values so um yeah this is a you know kind of a really
[1:20:02] useful you know way to get started with using be fast and interacting with it and kind of experimenting with the
[1:20:09] different parameters just said and historical and uh the monitoring periods um um and it's yeah a bit of a foray into these kind of denser
[1:20:21] time series disturbance detection algorithms algorithms um that really gets allows you to see on the image by image basis what's
[1:20:29] happening happening at a pixel level um and that then allows you to um make some inferences and about the the types of
[1:20:38] changes that you're seeing so so um um yeah so um shifting back here to some uh findings that we've had uh with
[1:20:55] bfasset pagerina as well um looking at ndvi in this case we can see that there's definitely different types of changes in
[1:21:05] the magnitude in ndvi that we can map on to different types of line cover conversions so you know even with using bfast outputs
[1:21:14] we can see that there's like elements of the street network that come through so like these darker grid like patterns have
[1:21:23] these really um you know more significant decreases in ndvi and then also places that have you know
[1:21:33] pretty dense built up areas like the reception center so this is like the large kind of office area that
[1:21:42] people when they arrive at patrina are processed processed into the settlement the market center a clearing for child friendly spaces
[1:21:54] another market center a refugee response office so these little clusters of dark um the purple indicating big decreases in ndvi
[1:22:05] um we can then begin to connect these different changes in ndvi with actual landscape features which is super cool
[1:22:12] um um and similarly we can do the same with thinking about things like conversions from natural vegetation to to agriculture so
[1:22:22] um this kind of approach for tracking disturbances kind of then is this jumping off point for understanding
[1:22:31] these different types of land cover conversions um and if we look at the dates of disturbance that we see we can also kind
[1:22:41] of begin to paint out this step-by-step narrative or account of um when the settlement's being established and when it's expanding
[1:22:51] um and can kind of then build up these larger kind of inferences about rates of change over
[1:22:59] time um so we see that with the break point date from be fast showing showing that the majority of the settlements
[1:23:09] being established in mid to late 2016 so in this image here is showing the is colored by the month
[1:23:19] of disturbance detected in 2016 so lots of greens yellows you know showing the mid to late 2016
[1:23:27] and then for 2017 the disturbances that are detected are at the beginning of the year and this is in the spaces that um
[1:23:38] we qualitatively interpreted to be more the agricultural areas where there's conversions happening um where you know larger agricultural plots
[1:23:47] are being established which which also aligns with you know when kind of the the sowing season starts in
[1:23:55] in that part of uganda so um um these you know kind of quantitative assessments of pixel level changes and
[1:24:03] dates of changes um maps on to our expectations of when we should see landscape landscape changes um
[1:24:11] over time and we can also like thinking about the total area that is disturbed compare that to the
[1:24:20] the total settlement boundary itself um um and and one of our another interesting finding from from looking at this is that the
[1:24:30] total disturbed area actually mapped on pretty well to the the total settlement boundary itself um um which helps us verify that we're
[1:24:38] detecting changes that that did occur within the boundary which is cool so so um um this is just another kind of figure
[1:24:48] showing you know the amount of area that's disturbed every month and then um annotating that amount of very
[1:24:56] disturbed with the the actual changes that we see so um again you know kind of back in mid 2016 the settlement is
[1:25:06] officially opened people start to um arrive um there's roads and structures that begin to appear in august
[1:25:16] and then we have this kind of rapid period of disturbance where the settlement grows up until the
[1:25:23] end of 2016. and then we have this drop-off in total area disturbed but the area that is disturbed then
[1:25:33] as you remember is kind of on the edges of where the actual build-up area is which is where the agriculture
[1:25:39] is established and those plots of areas uh begin to become converted so um um yeah this is just kind of another way to
[1:25:51] to illustrate one of the outputs from from bfast and and yeah as we see here the the timing of
[1:26:00] the the actual disturbance the magnitude and spatial extent of the changes um map onto our expectations of when refugee
[1:26:08] populations arrive which is really useful because the publicly available data at least on on unhcr population estimates
[1:26:18] isn't always available on a you know 16 day revisit period it may only be available at the month or quarterly or yearly
[1:26:29] um if you can track down that data and so so you know having this kind of alternative way to understand
[1:26:38] changes in a landscape and in this case we're really interested in looking at the growth of the settlement itself
[1:26:45] is kind of a proxy for understanding populations um arriving um you know or potentially land being abandoned and populations leaving so
[1:26:55] this is another way to kind of get at that um get at monitoring population changes over time
[1:27:04] um yeah so um um you know again like the the this is not just a issue in uganda this is an
[1:27:16] issue to other refugee settlements as well the the lack of population data that may be available and so
[1:27:23] um um this approach of using time series detection can be really flexible um in different places um which
[1:27:33] satellite data is a really useful data source for understanding some of these these settlement level population dynamics
[1:27:39] that we may not otherwise have been able to understand just looking at unhcr provided reports or data or different types of
[1:27:50] information information so now we're going to shift into the last part of the training which is looking
[1:27:57] looking at and comparing different population data sets i'm just going to point you all towards this interesting tool
[1:28:05] called pop code viewer which allows you to actually look at different population data sets for the same location
[1:28:12] so you can look at um these are not the only ones that they have available on there but in this case we can look at
[1:28:18] global human settlement population global population for the world world pop land scan um and this kind of you
[1:28:25] know just this screenshot itself shows the the really the pretty stark differences that do exist between uh these different products at the same
[1:28:36] location location um so this is just really our first lesson in seeing how different population data sets estimate
[1:28:46] population for the exact same location so for our case study we're going to be comparing comparing three
[1:28:56] three commonly used satellite derived population data sets that disaggregate population at the pixel level so as jamin mentioned earlier these are
[1:29:07] satellite and formed so each of these three data sets are taking satellite data kind of at the
[1:29:16] as one of their inputs to create these population estimates so we'll be looking at ghsl which uses landsat imagery is available
[1:29:25] at 250 meters um is available for these different time periods periods it's hosted as an earth engine asset um
[1:29:33] which we'll be using we'll we'll also be looking at the high resolution settlement layer um also uses landsat is available at a
[1:29:40] higher spatial resolution of 30 meters so so uh the native resolution of landsat um but it's just a single timestamp with
[1:29:50] imagery sourced from sometime in the period of 2011 to 2015 depending on the location location this is also shared as a um public earth
[1:30:00] engine asset and then last you'll be looking at the world pop constraint data product um um which has a bunch of different
[1:30:10] geospatial geospatial uh covariates as well as building footprints that come from satellite data and this is available at 100 meters um
[1:30:21] and is available annually um i will say it's available annually um um and but we'll be using the 2020 version
[1:30:29] and this is also shared as a earth engine public asset and much of these are you know they kind
[1:30:35] of have these different approaches of how each of these data sets are created but um you know they're taking a number of
[1:30:41] different inputs including solid imagery to to estimate population oftentimes are using what's called a day symmetric approach which
[1:30:50] essentially allocates known population totals from the census data data to areas that it models to be areas where people are
[1:31:00] living so that could be informed usually from satellite imagery where there's built up areas or some sort of structure
[1:31:08] um these data products will take that population total from census and allocate population totals to those built up areas um
[1:31:16] that it's modeled so they're they're um operate very differently but you know side by side in terms of the basic
[1:31:23] methodology they're um um using this asymmetric approach kind of across the board okay so lastly we're going to look here at
[1:31:33] comparing the estimates of population counts from those three satellite derived population products and compare them with what unhcr says
[1:31:41] the population is so i clicked on the code link and this is popping up so so uh this all looks familiar to you all
[1:32:00] we're again bringing in pajarina um and then also having we're gonna bring in the full uh uh all the refugee settlement boundaries in
[1:32:12] uganda as well so we're going to do kind of a cross settlement comparison comparison um and then here's where we bring in our
[1:32:21] population data sets so we have the dhsl pop pop which is available here through this image collection
[1:32:28] we're going to filter it to the most recent one being the 2015 one and select the population account we name it
[1:32:36] as population we're going to then bring in hrsl pop which is this data set hosted here as
[1:32:44] this asset rename it b1 to population and then lastly bring in the world pop which again is hosted on earth engine
[1:32:55] filter it to just the uganda data and select the population data or sorry this the band called population
[1:33:04] so first we're going to do some just visualize it on the three different data sets so we're going to take each one
[1:33:10] and and for each uh uh pixel we're going to have this visualization from 0 to 50 on with this pal which i'll show here
[1:33:23] um so let's click run check it out so so actually just turn these off here so so um right now we're just looking at the
[1:33:40] jhsl pop i'll zoom out here so you have a little bit more context so we do have some
[1:33:45] variability happening on the blue based off of our visualization parameters is low population population this bright kind of neon green is
[1:33:58] a higher population so what we see here though at padrina is that ghsl is not uh estimating any population totals or
[1:34:07] at least it's not allocating any population to the pixels that fall within uh where pagerana is at
[1:34:15] so jssls you know not doing well here at estimating population which we know there to be about 36 000 south sudanese
[1:34:23] refugees residing at so not great um um if we look at hrsl pop um um here here you know it does have um it's allocating
[1:34:37] some population to the side or at least a you know this kind of village to the west of patrina
[1:34:44] but but not estimating you know there's like one pixel up here one on the side here that it's allocating some to but
[1:34:53] again it's not estimating any population totals within within uh pagerana itself and then lastly we take a look at world
[1:35:04] pop pop we see a pretty different story we have uh uh actually a lot of population being
[1:35:10] estimated within the boundary itself so um um this is um you know the where it's estimating population two is conforming pretty well
[1:35:20] to where we see the built up area that we learned about in the previous tasks so you know just qualitatively looking at
[1:35:29] the the the visual visualizing the population data sets we see that uh world pop's doing pretty good off the bat
[1:35:38] um next in the script we're going to print print just the the scale of which which we
[1:35:43] already know but just to confirm ghsl is that 2050 asia sells at about 30 world pops says 92 here um just based off the
[1:35:52] projection but nominally about 100 globally for where it's available and then next we're going to just summarize
[1:36:01] for each settlement boundary uh the total estimated population with our our three population data sets so to do that
[1:36:10] we're going to use uh this reduce region function as well as one of the map functions that
[1:36:17] we we used previously before so we're going to take our settlement boundaries and for each feature in our settlement boundaries feature
[1:36:26] collection map over it and we're going to in this case for ghsl pop select it rename the band to ghsl and
[1:36:37] then reduce over that feature um i.e we're going to take the sum of the population totals at ghslpop
[1:36:47] using the ghsl pop scale for that features geometry and um this is just a max pixel to
[1:36:56] essentially allow us to reduce that that total within the feature so um um this is going to allow us to get
[1:37:04] for each settlement boundary the total populated or a total estimated population population and we're going to apply that same kind
[1:37:10] of setup for hsl as well as for world pop and then um uh so that those totals get added on as
[1:37:24] properties into the settlement boundaries feature collection and then within that so we have the unhcr population and then each of the three estimated
[1:37:34] population totals from the three data sets sets we're going to calculate the difference between the unhcr pop so that's the
[1:37:42] official population estimate and then the estimated population estimates from these three and create three additional properties called ghsltif hrsldif and worldpopdiff
[1:37:58] and then with that data we're going to essentially chart the differences between the unhcr pop and the three different population estimates
[1:38:09] for both settlements that have less than and greater than 25 000 people so to do that we're gonna filter first
[1:38:19] out on the less than or greater than for twenty five thousand for the unit cr pop and then create lists for the values for
[1:38:29] ghsl hrsl and world pop um um essentially essentially taking all the population estimates for ghsl hrsl and world pop using this
[1:38:40] aggregate array function and putting it into a list um um and then do the same um uh for the world pop this is just
[1:38:52] setting up here for our less than 25 000. 000. um so we have these various lists that
[1:38:58] we're going to actually use to chart um in this ui.chart array values so we have our y values which is our
[1:39:06] um um our three different lists of json hsl and world pop as well as our x values of
[1:39:13] the unit tier pop and then we're going to chart them and do that same setup for the the populations that are greater
[1:39:23] than 25 000. um also put them into a chart print those two charts which we'll see over here on the side
[1:39:33] um um so this is showing on the x-axis the unit gr population and then on the y-axis the estimated population
[1:39:41] for the greater and less than and we see here that really like we have really low estimates
[1:39:48] for the estimated um um kind of across the board and it gets a little bit better for the greater than
[1:39:56] 20 or sorry for the less than 25 000 but um um yeah overall we're seeing pretty severe
[1:40:02] underestimations of population happening um um and then lastly we can just look at some of the stats for these differences and
[1:40:11] values so if we print out um stats using this aggregate stats function function we can see for example from the ghsl
[1:40:21] differences the max difference is about 23 23 me and so this is the average difference between the dhsl and the unit to your pop is
[1:40:30] negative 30 000 about which is pretty significant um you know on average we're seeing an underestimation of 30 000
[1:40:38] people people across all the settlements um um so yeah that that's pretty significant um and we can look at you know across
[1:40:48] for each of them again for hsl the mean is about 30 000 underestimate 22 000 under estimate for world pop so
[1:41:00] even though world pop was doing well when we looked at this qualitatively we're still seeing on average it's
[1:41:08] underestimating about 23 000 people across our our unhr refugee settlements in uganda so um um yeah this really kind of illustrates the
[1:41:20] you know both the qualitative looking at at the at the data size as well as printing out these charts and stats
[1:41:26] how much each of these population data sets are underestimating total population so here just showing again what we were
[1:41:37] just looking at um um and so really why is this the case that the population data sets are um
[1:41:47] underestimating well because they're being uh they're taking these national level census data which off the bat already don't include
[1:41:57] refugee populations so you know really kind of the input data that's going into these population satellite and foreign population data
[1:42:06] sets is already kind of excluding these refugee populations and that is trickling down then into what how much
[1:42:14] total populations are being estimated at the settlements themselves and we end up having these pretty grave underestimations of population
[1:42:24] populations at refugee settlements um and there are uh consequences for this um you know we have these
[1:42:32] uh uh cascading data impacts that happen in terms of estimating population whether that's you know these population
[1:42:40] data sets are used for a bunch of different applications whether that's identifying where a clinic needs to be
[1:42:46] set ups or you know schools or distributing you know different resources um sending out early warning systems you
[1:42:56] know there's kind of a bunch of different different instances where population data sets are used to make decisions about how
[1:43:05] um you know to provide services or assist people if you know there's some sort of disaster or
[1:43:13] event that happens and so um um the fact that these these population data sets aren't accounting for
[1:43:20] [Music] [Music] these populations even further marginalizes and um you know leaves people kind of in the dark in
[1:43:29] terms of potential potential services or resources that they may otherwise have been able to access if if these uh populations were properly
[1:43:39] represented in the data sets themselves wanted to leave everyone with uh some really great um peer-reviewed literature that's
[1:43:48] kind of diving into these data sets um so you know we shared some of our our work from the be fast stuff but
[1:43:57] um um there's stuff looking at population um in more depth and and land cover change as well as looking at sdg changes and
[1:44:06] monitoring sdgs um um yeah so all of these link to to those papers papers um um and that's it we are now at the question
[1:44:16] phase so please enter in your questions in the q a box and um happy to answer them as they come in or
[1:44:26] answer any questions that come up so thank you thanks hannah um so there's a lot to digest there if you
[1:44:35] have any uh follow-up questions please don't hesitate to reach out to uh hannah or me or both of us
[1:44:42] um as a reminder this uh presentation as well as the recording we have the permanent link there at the bottom of the page
[1:44:51] and uh that's it for this training thanks so much for joining us um please join hannah and me at the next part part
[1:45:01] three of the training detecting agricultural and vegetation changes in and surrounding refugee settlements thanks everyone great and thank you to everybody that
[1:45:17] have been submitting questions over the past hour uh and 45 minutes we really appreciate them they're really great
[1:45:23] questions we hope that you'll continue to submit if you have any so jumping right in uh question number one
[1:45:30] does the refugee settlement analysis include those refugees displaced due to climate change or disasters and feel free to unmute yourself if you
[1:45:40] want to answer either hannah or jamin yeah i can jump in with this um this is a really great question that gets um
[1:45:50] asked a lot um and there is some kind of complexity to it given that there are certain legal standards and kind of
[1:45:59] these different designations that accompany what it means to be a refugee so uh refugees yeah as we have written here
[1:46:07] are technically only populations displaced by violence or a threat of persecution so there's a not totally narrow but there there's a
[1:46:18] uni chair has their own kind of designation and that is deemed from the un about what it means to be a refugee
[1:46:24] and what protections are offered to refugees refugees um and climate refugees are not under that don't fall under that designation
[1:46:33] so so um they're yeah technically a different population of concern as the u.n refers to them um and so
[1:46:42] yeah this training will really it just pertains to to those that are under the protection of the unit tr or or do have
[1:46:48] that formal refugee status um so those who have been affected by violence against civilians or armed conflict or
[1:46:57] any kind of persecution persecution and yet this this link here from unity are about what is a refugee
[1:47:04] kind of out outlines all of those different designations and and provides the definition for it um um there are um also people who are
[1:47:15] displaced um but aren't crossing uh an international border so remain within their home country and those populations are
[1:47:26] referred to as internally displaced persons or idps idps and and there are idps that are displaced due to
[1:47:34] conflict and or climate or disaster related events um and so those populations are very different from what it is to be a
[1:47:45] refugee but um also you know face similar challenges um in terms of being displaced um and there is a group called the
[1:47:56] internal displacement monitoring center that does monitor those populations and provides data information on on the type of displacement and
[1:48:07] different locations that idps are at so if you're interested in looking at idps idps you can check out their their website
[1:48:14] that we have listed here as well wonderful yeah thank you so much hannah question number two is this data satellite remote sensing
[1:48:27] data for monitoring humanitarian conditions available for the public i may have missed you saying this what is the resolution of this data and its
[1:48:36] temporal resolution too i can jump in with this one as well um yeah so all the data that we're using in
[1:48:48] this training um both in the previous training and the future trainings is is publicly available um and most of it's coming either from nasa
[1:48:58] whether it's landsat 8 or modis imagery or from the european space agency esa for that we're using both sentinel 2
[1:49:08] and sentinel 1 and all of that all of those imagery data sets are publicly available um and yeah the spatial
[1:49:18] and temporal and spectral resolution really depends on the data set that you're using so for this training number two we
[1:49:26] are exclusively using last at 8 which is a a 30 meter optical imagery data set um and is normally
[1:49:36] available about every 16 days although if you're using different landsat landsat imagery from different landsat sensors like landsat 5 and 7
[1:49:45] that that frequency frequency or cadence of imagery availability goes down to about eight days um um and yeah the the data catalog link for
[1:49:56] landsat 8 that we're using in this training can be accessed through that link there great thanks hannah question number
[1:50:07] three three is the calculus about ndvi disturbance reference on page 37 made for all pixels in the image's area of interest or a
[1:50:17] sample or a mean value uh this is jamin can you hear me okay i can try this one
[1:50:28] we sure can jamin yeah thanks um yeah the this is a good question so um um bfast and most other time series
[1:50:37] disturbance techniques work at the pixel level so we have as we show a series of different maps that give us results of
[1:50:47] timing of the disturbance as well as the magnitude of disturbance and there's several other metrics in fact at the pixel level so
[1:50:56] um we don't tend to uh we do this in particular because we do this kind of analysis because we want information at
[1:51:03] the pixel level so we it's helpful to take a sample of perhaps the average magnitude of disturbance across an image
[1:51:14] and certainly characterizing the conditions across the image before running be fast so we understand what kind of condition is there in terms of
[1:51:21] ndvi but when we actually get the results that's at the pixel level we can aggregate it any way we like after that
[1:51:28] though of course all right thanks jamin uh question four what happens if the environment in which we calculate the ndvi is more like a
[1:51:41] desert does it affect the quality of the results i can start on this one too um yeah this is a more difficult scenario
[1:51:52] it definitely would affect the quality of the results the whole premise here is that we see a stark contrast in
[1:51:58] vegetation or rather in condition and spectral value before the settlement is established or expanded and during or after that's
[1:52:07] concluded so really what we're looking at is the conversion from vegetation to non-vegetation in our case study that's that's the scenario
[1:52:15] and across most refugee case uh different study areas that would be a similar sort of setting refugee
[1:52:21] settlements um across sub-saharan africa uh tend to be established in um rather somewhat vegetated we're not talking about clearing a forest to make
[1:52:32] a new settlement but there's usually a background kind of vegetation there are cases um of course where we have much more uh
[1:52:40] arid or sparse or barren landscapes and we have a famous well-known camp called zatri in jordan which is a syrian refugee camp which is
[1:52:52] basically non-vegetated before this the refugee camp is established so this does come up it's a good question
[1:52:59] um it's a similar kind of challenge to detecting refugee settlement or idp internally displaced person encampments at the edge of an existing
[1:53:09] city right so it's that's sort of a similar situation where we're looking at a different kind of urbanization at the
[1:53:14] edge of an already urbanized area so ndvi is not going to work in this in this case
[1:53:22] if we don't have a strong vegetation signal prior to the establishment we're not going to be able to detect um
[1:53:30] you know meaningfully a large drop in vegetation signal with the establishment or the subsequent expansion so so in that case
[1:53:38] i would turn to other kinds of uh of metrics um those that would be better at discriminating
[1:53:46] um bare areas or from built up areas um and so we in our written answer here we
[1:53:53] provide a couple of these examples the normalized difference built up index um would be one um the normalized burn
[1:53:59] ratio may be helpful if there's some kind of um clearing that took place specifically like to to raise whatever sparse
[1:54:08] vegetation there was prior to the establishment which is common in some areas that could be helpful as well
[1:54:16] and then there's a really new index that's been produced called the artificial surface index which is designed to it it has um better
[1:54:26] sensitivity to discriminating artificial built up surfaces from bare lands and so that could also be could be
[1:54:34] brought in in this sort of scenario but that's a good question that's a challenging context thanks jamin question five
[1:54:46] has there been any application of be fast on other types of earth observing system data for example sar data
[1:55:00] yes there have been several studies it's usually done a little bit differently where we have sar is often brought in as a complement
[1:55:08] to optical data or it's brought in as in a sort of fusion scenario where we do a kind of
[1:55:14] disturbance detection with optical and then a kind of disturbance detection with active sar data and then we we merge the two
[1:55:22] together to see to basically uh use all detected disturbances from both approaches um um bfast is is also as mentioned just one
[1:55:32] of these kinds of time series disturbance techniques there's another commonly used approach called ccdc which is a more recent uh algorithm that's
[1:55:40] been developed and has a lot of sort of shared sort of much in the same uh logic around developing a curve to fit
[1:55:50] the time series and then detecting deviations from that it's a little more um um there's a little more
[1:55:56] sensitivity to potential differences within the time series itself rather than just fitting a single curve at a
[1:56:03] given pixel like befestas ccdc can is more sensitive to variations over time time at the pixel level as well
[1:56:11] but with both of these approaches there have been different examples usually this has been done in a case in the context of
[1:56:18] detecting forest cover changes and we have a couple of examples here in the written answer and uh
[1:56:25] there are also some examples of using nighttime lights data for um working with bfast or ccdc and we link to those
[1:56:33] so really any kind of scenario where you have time series data that um are expected to have or it's the strength of
[1:56:41] be fast or ccdc would be looking at time series data where you have some kind of natural um
[1:56:49] uh oscillation some kind of seasonality to the signal and that's there in our data of course that's there in optical
[1:56:57] data that's their nighttime lights as well because nighttime lights um emissions electricity emissions vary depending on the day and depending on
[1:57:05] the month so any scenario where we have those data that we want to detect the kind of deviations
[1:57:12] key dates of change in the trend prior to that date we should be able to do uh make some
[1:57:19] progress in that direction using be fast or ccdc so it's certainly not just limited to optical data it's a good
[1:57:25] question wonderful and question six is there any available bfast script in google earth engine yeah this is a great question um i would
[1:57:41] say yes in a very um a lot of the code is kind of like under development and i'm not sure if
[1:57:47] it's actively being maintained or developed developed um i'm going to post in the chat um a paper kind of supporting
[1:57:58] or or introducing the be fast monitor app that was that we showed in the training um as well as the github to
[1:58:06] the site showing the code for that on yeah so i think if if you want to use
[1:58:12] the code that that does exist um there's a bit of um kind of like finagling of the code underneath
[1:58:21] the functions that are available to use whatever metric you want or any kind of image image input so there's that caveat to it
[1:58:32] but yes there is some available bfast script in earth engine that i will try to post here in the chat
[1:58:39] great thanks hannah and question number seven seven is it possible to use bfast for time series analysis of forest change
[1:58:47] degradation degradation disaster impact assessment tree phenology mapping urban growth mapping etc um um yeah yeah it's certainly possible i would say the
[1:59:01] forest change and degradation is is probably the most common application period of be fast or time series
[1:59:07] disturbance detection analysis um disaster impact assessment um and and i've seen less of that nothing really comes to mind in there i think the the
[1:59:19] um um the the uh person asking the question may be thinking of something like a landslide or a flood
[1:59:26] um um that could that could happen i think that would probably probably be a little bit more um commonly done with a before
[1:59:34] after scenario because that disaster or natural hazard um often we know about the timing of it and so one thing that
[1:59:44] one reason we use be fast is that we don't know the timing um um and it happens in a spatially diffuse
[1:59:51] way and so it's just more difficult to detect but a localized landslide for example or a localized flood
[1:59:59] we tend to have a little bit more information not to say we have the full picture but there might be more commonly
[2:00:04] used ways to detect that um and there i'm thinking maybe like a before after uh bi-temporal change analysis
[2:00:11] um tree phenology mapping that's a good question i uh i don't know i haven't come across any examples i
[2:00:19] haven't sought that out um either there may be something out there i could see um using using similar techniques but again the the
[2:00:30] phonology suggests that sorry sorry if we're interested in phonology then we're interested in tracking really identifying those
[2:00:39] seasonality trends that we see beefast beefast tate does that but then it also goes into this disturbance detection analysis
[2:00:47] so there's probably better approaches to doing a tree phenology study if we're interested in looking at changes in
[2:00:55] magnitude magnitude sorry changes in condition via looking at the magnitude of ndvi at a given time in the year
[2:01:03] there i'm thinking about things like time series decomposition techniques where you look at the seasonal harmonic and you're looking at
[2:01:10] the trend as well um that's a kind of what has happening in the background to be fast anyways um
[2:01:18] and so that's probably a little bit more effective effective for a proper phonological analysis urban growth mapping yes that's another that's
[2:01:26] a good example where where beefast would be really helpful because that could be happening at different rates at
[2:01:32] different locations we don't really we may not know exactly the location and the right and the exact time of year or
[2:01:39] or year period where that's happening so that's a scenario where looking at a city-wide um you know the boundary or
[2:01:46] even the internal area of the city and tracking changes with b-fast would be a really good example and certainly there
[2:01:52] are lots of examples of urbanization um using these kind of time series analysis techniques hey thanks jamin question eight while
[2:02:03] coding the image collection anna had filtered out cloud cover images but we could still see them in the
[2:02:08] output gif why is that yeah this is a really good question um so so we're doing the filtering based on an
[2:02:17] image level property called cloud cover which which is a representation of the total percent of the image that is
[2:02:27] from like nasa's processing deemed as cloud and so we're filtering i think to less than or equal to 40
[2:02:35] cloud cover so there are still some images that have clouds in them um um and and yeah because we're we're filtering at
[2:02:44] the image level um you know there's there's parts of the image that still have clouds in them that just so happen
[2:02:51] to fall over padrina where we're looking at at um so we're because we're not looking at the full landsat image we're just
[2:02:58] looking at the image that is clipped to pause arena that's why we still have clouds coming through
[2:03:04] um and that are represented you can see them in the gif that we produce um you could also this is a very like
[2:03:11] basic basic cloud cloud um processing approach to just filter at the image level um but you could also use something like
[2:03:19] cloud masking where you uh on a pixel-by-pixel basis mask out pixels that are deemed to be cloudy
[2:03:27] which would be a more kind of rigorous approach for dealing with clouds and filtering those pixels out if you
[2:03:34] wanted to have more cloud-free imagery represented in the time series so we don't show that here in the training but
[2:03:42] that's possible to do yeah yeah great thanks hannah question nine what is the accuracy of global population
[2:03:49] data in urban areas which population data is more accurate uh we touch on a couple of these leading
[2:03:59] products if we're talking about the geospatial products specifically remote sensing and foreign products um world pop and ghsl
[2:04:07] as well as a product called lanscan which we did not include are are commonly used and they would have
[2:04:14] nominal accuracies in the 90 percents usually 90 or above especially in these large dense urban areas areas um that
[2:04:25] question of accuracy is um difficult to answer because the there's no no single single definitive global population data set
[2:04:36] out there this is something that i think was maybe surprising to hannah and i when we started doing this research but
[2:04:43] talking to people who are world experts in using remote sensing products to estimate local population or population density um they'll say right
[2:04:53] no one really knows what the actual population is the the validation data that we would use national censuses um
[2:05:00] itself are well they're out of date you know inherently they're a snapshot of population and things change
[2:05:07] change in some cases very dramatically right after after that those data are collected um so we don't always have uh we don't have
[2:05:15] perfect um estimations out there just as a as far as a baseline as far as validation data
[2:05:22] data set to begin with um um but the uh the products that uh we list here world pop ghs on landscape tend to
[2:05:30] have um pretty high accuracies um um i'm not actually sure i think the question which population is more
[2:05:37] accurate um i think that might vary sort of study to study in context to context i don't know of you
[2:05:44] know globally like the average accuracy but that information is probably out there there um the real challenge of this though is
[2:05:52] um is detecting right if we if we already have population data from censuses reliable in large urban areas
[2:06:00] um our approach to trying to estimate that with remote sensing data derived information is still helpful but we we
[2:06:09] know the uh you know an approximation of it from census data for example the real challenge is going into rural
[2:06:17] areas um it's going into newly established areas it's going into parts of urban areas that are informal that are not part of the
[2:06:27] national census data collection effort or it's in areas where people are undocumented undocumented or where people are
[2:06:35] um intimidated from registering in the census which happens in lots of different contexts around the world people don't want to be recorded right
[2:06:44] this is where these these products get really um it's incredibly uncertain how well they do in those scenarios the
[2:06:51] whole premise of these products is we look at an indication of built up-ness and we get at that from a bunch of
[2:06:58] different uh remote sensing products and then we use that to build the people that make these products
[2:07:06] use a series of different modeling techniques to take those national level or in some cases local regional level
[2:07:11] population and then estimate through a series of different say regressions or deep learning techniques to estimate how that
[2:07:19] suggestion of population through remote sensing indication how well that aligns they calibrate that with known census data
[2:07:30] data again that starts breaking down in areas where we don't have the census data collected in the first place or places
[2:07:36] where we have new populations that have arrived since the census data were collected collected um so the urban areas is probably a
[2:07:43] place where we're doing really really well overall you know the 90 90th percentile or higher it's the rural
[2:07:50] areas the informal areas where we have much much lower accuracy and the paper that han and i put out on this
[2:07:56] um um discusses some of the challenges of looking at urbanization uh of detecting urbanization to begin with if we can't
[2:08:04] detect uh urban human settlement presence then we're not going to do well at these global population data
[2:08:09] estimates either great thanks so much shaman and last question where do we have to input select the
[2:08:19] indices when calculating v-fast in google earth engine yeah so um this earth engine uh uh link here um
[2:08:32] that's being showed is is kind of the latest version of the beta code for the raw earth engine script
[2:08:40] that uses bfast and so in there there's a variable on online online 121 called dependent which is the where
[2:08:51] you can choose the metric that you're using using so in this case they're using um the normalized difference moisture index and
[2:08:58] dmi um and so if you wanted to use ndvi you'd have to code in um essentially adding ndvi
[2:09:08] as a band and renaming it to ndvi and then choosing ndvi as that dependent variable name um so there's a little bit of um
[2:09:19] kind of like heavy lifting on the back end you have to do to to to use these other spectral metrics
[2:09:25] um with the fastener with engine but if people are interested in doing that um happy to you know reach out um
[2:09:33] if you're having issues with that and implementing it so yeah yeah wonderful thanks so much hannah and with
[2:09:40] that uh wonderful uh jamin and hannah both both thank you so much for the presentations and for answering thoroughly all of the
[2:09:48] questions that were uh submitted by the participants participants i also want to thank all the participants for we understand that
[2:09:54] we're a little bit over the hour so thank you for your flexibility in staying on and your interest as well in
[2:10:00] in and uh you know going through the question and answer session as we wrap up i would like to
[2:10:06] give uh jamin and hannah an opportunity for any closing thoughts or comments baby jamin we can start with you
[2:10:12] sure thanks sean um thanks selwyn thanks everyone on the rset team for organizing this and the other uh parts of the
[2:10:19] training to the audience members um thanks so much for your great questions today and for sitting um sitting with us
[2:10:26] as we go through this these different kinds of applications for monitoring refugee settlement settlement establishment and expansion um from a
[2:10:34] kind of infrastructure and population perspective perspective next tuesday part three continues of the training and there we'll be looking more
[2:10:42] at the vegetation side of things we'll be documenting um um instances of degradation we'll be looking at
[2:10:50] different ways we can study agricultural condition in refugee settlements so related but really an extension and going more
[2:10:58] more more focused into the vegetative domain so i hope you'll attend on next tuesday and then next week a
[2:11:05] week from today next week thursday we'll be looking at measuring uh climate exposure in refugee camps using um google earth engine again
[2:11:14] but through a python collab interface so really looking forward to that and i just want to thank everyone again um
[2:11:20] especially hannah for uh for their work pulling this together great thank you so much damon and hannah
[2:11:29] do you have any uh closing comments or thoughts for our participants um just echoing draymond's sentiments yeah thank you all for
[2:11:38] participating and to the rsi team for helping us host this um and yeah feel free to email jamin or myself
[2:11:46] with any follow-up questions um that come up um now or in the future thank you so much
[2:11:54] great and we also want to acknowledge the rset team that's uh you might not hear them but they are in the background
[2:11:59] uh working tirelessly to make this training possible that's brock blevins salon hudson odoi jonathan o'brien and sarah cutchall so thank you for all the
[2:12:07] rset team and especially big thanks to hannah and jamin for providing such an amazing webinar and we look forward to
[2:12:12] seeing everybody next tuesday so do stay safe and we look forward to seeing you there bye-bye you
