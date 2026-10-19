# Mapping Landslide Occurrence Using Earth Observations, Part 2/3

`https://www.youtube.com/watch?v=EvhCt0nan0A` · id 226 · 1:33:21 · module 47 — Landslide Monitoring and Risk Assessment Using NASA Earth System Data

[00:02] welcome back to the rset training landside monitoring and risk assessment using NASA Earth system data my name is
[00:08] Sean McCartney I'm an rset trainer working from NASA's godded space flight center in Green Belt Maryland I'm
[00:14] delighted to welcome you all to the second part of this three-part webinar series The Following slides provide an
[00:21] overview of the three-part webinar series Landslide monitoring and risk assessment using NASA Earth system data by the end of this three-part
[00:30] training participants will be able to identify the Core Concepts of landslide risk mapping including geophysical and meteorological drivers and how satellite
[00:40] data can be used for this purpose select appropriate satellite data and model data to support Landslide science and
[00:47] disaster preparedness associated with landslides and recognize how to map where landslides have occurred using optical and radar data and understand
[00:56] how automated tools can be used for this purpose purpose the prerequisite for this training is our fundamentals of remote sensing
[01:03] course we recently relaunched a new online self-paced fundamentals of remote sensing training on the rset learning management system and we hope you would
[01:13] check it out a link to this new online training is provided here over these two weeks from March
[01:19] 11th to March 18th there will be three one and a half hour sessions which will include presentations demonstrations and
[01:26] question and answer sessions all materials and record recordings from each session will be available from the training web page if you are not able to
[01:34] attend one part a recording will be made available within 48 Hours on the rset training web page homework opens on
[01:42] March 18th and will be due on April 1st you'll be able to access the homework from the training page on March 18th a
[01:51] certificate of completion will be awarded to those who attend all live sessions and complete the homework assignment by the given due date
[02:00] part two of the training is focused on mapping Landslide occurrence using Earth observations by the end of part two
[02:08] participants will be able to select appropriate satellite data and model data to support landside science and disaster preparedness associated with
[02:16] landslides and recognize how to map where landslides have occurred using optical and radar data and understand how automated tools can be used for this
[02:26] purpose please put your questions in the questions box and we will address them at the end of the webinar feel free to
[02:32] answer your questions as we go the question and answer document will be posted to the training website within a
[02:37] week of today's training I am delighted to introduce the guest Trainers for today's webinar Dr Robert emberson and Dr pukar ammaa
[02:47] Robert serves as associate program manager for NASA's Earth applied sciences disasters program area in this role he helps administrate a range of
[02:56] projects funded by the disasters program as well supporting the disaster respons activities for providing satellite data and insight to a range of stakeholders
[03:04] before during and after disaster strike alongside this programmatic role Robert is also part of the NASA landsides
[03:12] research team where his current research focus is to better understand and model the exposure and risk based by human
[03:19] settlement due to landsliding the primary aim of his work is to better model the economic and social impacts of landslides globally
[03:27] and in Neal time using satellite data pukar is an associate research scientist working with the landslides team in the
[03:35] hydrological Sciences laboratory at Goddard space flight center his main research is to develop open- Source systems that use machine learning and
[03:43] very high resolution imagery to develop automated open-source Landslide mapping algorithms to generate Landslide inventories using optical and SAR
[03:51] imagery he's also involved in the committee on Earth observing satellites uh landside demonstrator to to highlight the use of commercial and Bas agency
[04:00] data for Landslide applications I'll now pass things over to Robert for today's presentation Robert over to you so thank you Sean for the
[04:11] introduction um I'm excited to be here again to present part two of this training um alongside my colleague pkar
[04:17] Mata talking much more today about how to map landslides using satellite data um and specifically focusing on the
[04:23] sources of data information that NASA have been made available and the tools that we've developed in house
[04:30] so let's start with First Steps so you'll remember from the training the first part of this training um the type
[04:35] of landslides that we can think about with satellite data the way the way in which we can think about the broad types
[04:40] of data involved in this but let's say you have a landslide that has occurred in the area of your really interested in
[04:46] determining details about that specific Landslide maybe um you want to know more about whether there are other landslides
[04:52] in the vicinity so let's think about what might be necessary for mapping those landslides using satellite data we
[04:58] typically talk about pre and postevent imagery um basically as a uh the type of data that's available um before or after the
[05:07] triggering events that c the landslide so in terms of definitions if you see that terminology used typically we're
[05:12] thinking about um imagery or data that brackets the timing of triggering event for that Landslide so helpful to make
[05:21] sure that you have access to data from either side of this it is still possible to map land slides with only postevent
[05:25] data but again pre-event is certainly helpful from a comparative perspective and again to really get into the detail
[05:31] for this it's important to make sure that this kind of data is Geor referenced so we know that aial
[05:35] photography can be used widely but again if you want to make sure that it's able to map the location of these you need to
[05:41] make sure that that information is geore referenced so you would also need a GIS Software System to kind of capture this
[05:48] and again artillery data that we talked a little bit about last time but um things that can help you distinguish the
[05:53] the location and and potential um source of source and run out zones of a landslide may be helpful as well and
[05:58] we'll talk more about that in due course so to quickly reiterate what we talked about in part one what
[06:06] characterizes a landslide event so these are often uh rapid and devastating Downs slope failures um starting of of
[06:13] material and sediment that washes from a source point to a deposit or an out run out point and typically this leads to
[06:21] very highly visible surface changes and so you can see in this picture here the landslide which is running from the top
[06:26] left down to the bottom right into the river um there's a source near the the road at the very top of that image where
[06:31] the red point is and then the landl side has clearly run through another road and some population some some buildings and
[06:37] devastated those buildings where and then it eventually runs out into the river at the bottom right here so one
[06:44] thing that you might note is that these uh the impact to human systems are quite clear here so the impact to roads and
[06:50] infrastructure um so that's one thing you would want to think about with respect to mapping but the other thing
[06:55] here is that this is obviously a two-dimensional observation of what is ultimately a threedimensional event there's a gravitational movement down
[07:01] slope and so we have to think a little bit about how we can convert our observational understanding from orbit
[07:07] from two Dimensions into those threedimensional kind of visualiz Vis how how you can turn this uh kind of
[07:12] understanding from space into a 3D visualization you can consider in your head how does that mapping operate so in some cases these kind of
[07:20] uh Landslide failures are kind of obvious in some ways or you can kind of quite easily conceptualize the source
[07:26] and the run out zones of these landslides here's an example from big s in the west coast of California um you
[07:32] can see that the landslide has run from the upper upper part of this hill slope and this aerial photography and ended up
[07:37] as a large deposit in the ocean so there's Context Clues here that you can use to inform your understanding of this
[07:42] system the first for example is that the the ocean here is obviously the lowest point in this in this landscape and so
[07:48] the material source and the material deposit Zone will certainly start from a higher point and then a lower point and
[07:53] you can use obviously the ocean as a very basic kind of context Point here and again thinking about how you
[07:58] understand the landscape and where the kind of the the lower areas are and the higher areas can really help you inform
[08:04] the source and run out zones of a landslide you can see here again highlighted those that scar area and the
[08:09] deposit area another clue that you can see in this uh image here that gives an example of what's happening is uh
[08:16] there's certainly a certain a large amount of material deposit area that looks a bit like the source the the kind
[08:22] of areas around the landslide in other words this um that kind of darker brown area in the deposit mirrors the
[08:29] landscape a bit more than the kind of freshly scrubbed clean um Source area so again maybe we're looking for sort of
[08:35] areas in the deposit that look a little bit like the um original kind of landscape um and so from if we're
[08:41] thinking about that from an orbital perspective you can see here this is now from Google Earth imagery the same Landslide you can see
[08:49] and begin to start to distinguish the kind of source and run out zones of this Landslide so these very large events are
[08:56] somewhat um clear to understand from this kind of Earth observation imagery you can see there's a very large change here between
[09:03] the the color of the landscape originally these green vegetated areas and this like this deposit and Landslide
[09:08] area that's significantly changed so that's certainly something you could look out for and this would strike you
[09:13] and and jump out of you from the page in some ways however there are certainly other types of landslides um where the
[09:20] obvious signals like those very large ones may not be so clear so here's for example a very large Rock fall that's
[09:27] occurred uh this is in Oregon in the United stes States this massive Rock has landed on this road um and this again is
[09:34] a type of a type of landslide in in this case it's a rockfall um there may already be an existing scar here like an
[09:40] existing Landslide deposit that has just been reactivated and so in this case the signal that you're going to look for
[09:45] from satellite observations is this potential impact on the road this change um we would know for example that the
[09:51] human system here in this case the road would not we would not anticipate that there'll be a very large Boulder in that
[09:56] road and so this initial change uh this this landscape um change that we see here would be quite visible in a pre-
[10:03] and post imagery you can really pick out that change to human system so again these are the kind of visual clues that
[10:07] you can look out for and this is something to think about as we talk more about the the more specific sources of
[10:12] information going forward so in general we think about um landslides as events from above from from two-dimensional imagery and we want
[10:22] to think about how to uh outline the area in which there has been a change and so in other words we're often
[10:27] thinking about creating polygons that uh outline the specific area of landslides and capture the potential kind of
[10:34] overall shift in in landslides uh so in activity so here you can see an example of a landslide in British Columbia and
[10:41] this image was something we used in the part one training but here we're looking the red outline is a polygon outline um
[10:47] used in a GIS software of this Landslide event and again you can see at the very base of this land slide where it's run
[10:54] out towards the river there is a road and the impact again on that road might be more visible so creating these
[10:59] polygons is something that we can do using um various GIS tools including uh EZ Arc GIS U Google Earth and other open
[11:07] source systems to create these shapes and then we can merge those if there's many many landslides we can merge those
[11:13] shapes into what we file or a geod database and that is then what we would potentially refer to
[11:20] as a landslide inventory a data set of multiple different sets of landslides um with the outline of those areas
[11:27] highlighted and the kind of the The Zone um so the entire Impact Zone kind of connected both source and deposit now
[11:35] we'll talk a bit more about um delineating between source and deposit in upcoming slides but I just wanted to
[11:39] note that generally when we're capturing landside mapping we would consider both of the source and deposit areas and Maps
[11:45] them as a kind of entire polygon in some cases if it is um such that the landslide has fully run out into a river
[11:51] or the into the bottom of the valley and it's not entirely clear where that Landslide um fully separates um from the
[11:58] surrounding rivers or something like that you would probably want to draw a polygon that uh like outlines that final
[12:04] deposit area the end point of that deposit as the um say the low point of the terrain the river the valley bottom
[12:11] or um the kind of uh debris flow channel that might be connected there so we obviously just talked about
[12:19] polygons but it's important to note that many Landslide inventories are also simplified to single points for each
[12:24] land slide um particularly for emergency response and here I'm showing an image um from the Huracan Helen Landslide
[12:30] observations dashboard which was a multi- agency effort to produce Landslide estimate and Landslide location estimates during the aftermath
[12:38] of caran Helen um in last year in sorry 2024 in North Carolina and surrounding states um because it's much quicker to
[12:47] map the location with a single point rather than uh specifically and carefully drawing a polygon around that
[12:52] uh Landslide it can be more efficient for emergency response to do Point data sets and in essence this is a single um
[12:58] point of lat latitude and longitudes to highlight the specific um location of a landslide and then these can be
[13:05] potentially used to inform further analysis and polygon mapping at a later date um so again this is more often for
[13:11] convenience and speed um typically for multiple different uses we would probably prefer a polygon data set um
[13:17] it's more comprehensive but again for emergency response this can be highly um efficient and something we typically
[13:22] want to um lead with um for a very short-term short-term response as I mentioned for um landslides have a source area and a
[13:31] deposit area um here in this very kind of simplified schematic on the top right you can imagine at the top of a hill
[13:37] slope where the landslide source is from and where it runs out to the deposit area those are connected um we would
[13:43] connect those we typically talk about the angle of reach or the kind of slope of the in European terminology the Faro
[13:50] shung angle um connecting the source and deposit area um the area between those two locations between deposit is often
[14:00] damaged or even stripped bare by the land slight the motion of that material down slope and so we're thinking a lot
[14:05] about mapping the entire extent of from the top of the source area to the bottom of the deposit area but we would also
[14:11] want to think about um differentiating these zones um and this is particularly important for something we'll talk a lot
[14:17] more about in the uh part three of this training susceptibility and Hazard analysis um so we'd often want to think
[14:24] about how we can uh connect those source and deposit zones and separately consider them um so there are certainly
[14:32] simplified methods we can talk about like here where we talk about the the up most up uphill Zone and the most
[14:38] downhill um Zone we can sort of think about this this image down below from New Zealand where you can see again the
[14:44] very top of that scar area um there's a clear line that defines the top of the scar area the vegetation um where the
[14:51] vegetation ceases and then the deposit you can see that there's broad amounts of material that's been dumped into the
[14:56] stream um and then the deposit has a broader area kind of around that you again you can see where there's
[15:01] vegetation still on top of a lot of that deposited deposited material so there's Context Clues here that you can use to sort of distinguish
[15:08] between those uh source and deposit but these can be quite hard to generalize um this is particularly um challenging when
[15:14] we're talking about longer run up areas so here I'm showing um an image from Google Earth from Southern Taiwan we'll
[15:22] refer to Southern Taiwan a few times in this in this course of this training because it has some really useful and
[15:27] illustrative examples but here you can see these um very large Landslide scars at the top of this hill
[15:33] slope and uh I'm just going to zoom zoom in on those a little bit you can see
[15:37] that there is um these large Blobs of source area at the top of the hill slopes and then there's these long run
[15:43] out channels where the landside material has been channeled through um the valley and end up in this like large river
[15:50] Channel and it can be quite to challenging to distinguish where the landslide itself actually ends we typically would not map the run out
[15:57] itself into those River channels um so the the entire River Channel you can see running from uh sort of the center of
[16:03] the image all the way to the F to the right hand side um we would typically not consider that to be part of the
[16:08] landslide but again if I asked you to kind of distinguish where does this Landslide begin and end that can be
[16:13] quite challenging and so um oftentimes we're going to think we can to generalize this process we would
[16:20] perhaps want to think about some simplified geometric rules and so this is a a rough estimate that has been
[16:25] demonstrated by a number of studies that the perimeter and the area of a landslide can be Tools in with which we
[16:32] can estimate the uh kind of aspect ratio um of a landslide and then determine the the the rough estimate for scar uh the
[16:41] relative area I'm sorry for the scar and then using the scar area we can kind of estimate What proportion of the overall
[16:47] Mount Landslide is made up of a scar so I'm going to go over that briefly here so what we would do is we' calculate
[16:53] using a mapped polygon we' calculate of the landslide we would also calculate the a of that landslide and then using
[16:59] the formula um below um we can estimate the associated width of a landslide and we would use the area and perimeter to
[17:07] calculate an equivalent ellipse and the aspect ratio which is K here and then again using this formula we'd roughly
[17:13] estimate the um Associated width of a landslide and then we know from global data sets the scar area proportional the
[17:20] scar area is approximately 1.5 times the width squared and so once we know that scar area we can take the overall area
[17:29] that we maap to a landslide and take the uh kind of Sky area estimate and using that we can kind of estimate an
[17:35] approximate uh relative proportion of the landslide and in this case we would probably assume that the higher part of
[17:41] the landside the the most UPS slope area is the scar area and that can be a way
[17:46] to approximate this over large landar populations so um I'm happy to provide more information more information is
[17:51] available and the resources for this and presentation about that specific um formulation um but again this is a an
[17:57] approximation that you can use for large landside populations um to estimate the source and run and and relative Source
[18:04] area for um or scar area for a large population of landslides another important tool in our um belt I guess uh for mapping
[18:15] landslides is false color imagery um so this is some imagery that you actually have seen from the uh intro material for
[18:22] this overall training again this is a large catchment in southern Taiwan which was devastated by landslides as a result
[18:29] of Hurricane morot in 2009 um what you're seeing here is vegetation uh in red and gray tends to
[18:37] be um Bedrock or Channel fill um this is a using this is using ndvi band combination or normalized
[18:43] difference vegetation index um details on how to create that kind of ndvi system again are available on the
[18:49] resources for this training and this is a very helpful tool because changes in vegetation particularly in tropical
[18:55] areas whether it's an extensive vegetation or forests is often much more sensitive to surface change um as a
[19:01] result of land sliding than any other kind of combination of bands and this can be particularly important in areas
[19:05] where we have dense vegetation and we can pick out landslides very carefully in this case you can see that there's
[19:11] extremely large VAR differences because of the landsliding these these gray areas much more pronounced um in the um
[19:19] in this catchment um but you can also see again obviously the the river itself has like a large amount more sediment in
[19:25] it as a result of Upstream landslides so that can be something else you can pick out us using this
[19:30] methodology so I would also note from this image that one of important element that you should pay attention to is
[19:36] cloud cover in the bottommost image here in fact in both images there's clouds around the top of these um mountains um
[19:42] that's something you won't be able to see round and again we talked about that in part one of the training that cloud
[19:46] cover is an important consideration for uh Optical imagery use another characteristic of the imagery you can use to to map L slides
[19:56] is the resolution of the imagery we talked a bit about about this in the first part of the training but in more
[20:01] detail now um the number and size of land slid that you can observe is very dependent upon the resolution of the
[20:07] imagery that you're using now that should make kind of Common Sense uh but to illustrate this using this figure
[20:14] here um we're looking at Landslide inventories from a range of different locations around the world mapped using
[20:20] a range of different imageries and again these different image uh types have a different set of resolution so what you're seeing on the
[20:28] x-axis is the area of landslides and then on the y- axis is the probability density of the kind of overall
[20:35] population so um essentially as you go higher up on that y-axis um there's a more higher uh these are more common in
[20:42] the overall inventory that size of landslide is more common in the overall inventory so the key thing to look at
[20:47] here is these populations at very small areas um and in this case you can see there's a handful of those inventories
[20:54] these individual lines um that were mapped using very high resolution imagery and that could be up to 3 meter
[21:00] resolution imagery and in this case you can see there are a large number of landslides in those inventories um that
[21:06] are around about 10 I guess 100 square meters or even smaller those are really small landslides uh and so or at least
[21:13] from an optical Optical image optical Earth observation imagery perspective those are small land slides and so this
[21:21] higher resolution imagery certainly means that we can see a larger proportion of those small land slides and then when you have uh access only to
[21:27] the kind of Co resol solution imagery um particularly you can see some of these points where what we refer to is the
[21:32] rollover in these distributions is much uh a much higher area you're capturing a lot fewer landslides at those small
[21:38] numbers and so your population your overall inventory is going to be made up of much larger landslides only so this
[21:44] has been a big change in recent years as we have the Community Land Community has had access to um a wider range of high
[21:50] resolution commercial data particularly that has enabled this kind of um data set uh this dat kind of mapping um a lot
[21:56] of this through NASA has been available through the commercial satellite data acquisition program and it's enabled a
[22:00] much higher um effective resolution mapping of these small landslides again as I mentioned before cloud cover is a really significant
[22:09] factor for optical imagery um here's just an image this is just a nice image of different types of clouds over
[22:16] Northern Australia using llat um this is the you can see that there's small puffy clouds at low level and then higher
[22:22] level you've got these larger serus forms each of these can kind of definitely uh I guess mask the areas
[22:29] where landslides have occurred or could occur it certainly is a preference to seek cloud-free imagery for mapping um
[22:35] where possible um when producing an inventory of landslides uh particularly for emergency response purposes it's important to provide polygon outlines of
[22:46] the cloud locations in the associated inventory in other words you want to provide a separate um sort of shape file
[22:52] that captures where those clouds are in the imagery used to map this so that anyone using that data set can then go
[22:58] back and say ah I understand this area was masked by clouds so there could still be landslides here and it makes
[23:05] sure that anyone using this inventory for further analysis does not falsely assume that those areas may be Landslide
[23:11] free it's only that they were masked by Cloud so again capturing where cloud cover is is an essential part of
[23:16] building building a and again this is one reason why um we would strongly suggest to seek cloud-free imagery uh where possible
[23:23] because then it avoids having to have a separate shape file of clouds within your overall Landslide inventory
[23:30] so when producing uh a landslide inventory um we want to think a lot about the type of data to go alongside
[23:36] this um so for each individual Landslide you would want to think about the types of information available and then for a
[23:41] broader inventory similarly a number of different data sets number of different characteristics are relevant to capture and this would be what we refer to as
[23:49] metadata so we would certainly want to think about the location that can be obviously the individual Landslide
[23:54] locations either as polygons or points but also more generally providing that kind of contextual information about uh
[24:00] the the overall landscape if you have that that can be as provides as comment and I guess the the data package part of
[24:07] the inventory we'd also want to think about the potential triggering event that can be very easy in some cases to
[24:12] point to a specific earthquake or seismic event or in some cases you would think about you would know that this was
[24:18] uh triggered these landslides were triggered by a significant rainfall event so providing that information would be helpful we'd want to provide
[24:25] the imagery date um so uh certainly to sure that we have informed the user of this data set what the date of the
[24:33] imagery used for mapping was so when that image was collected particularly this is important uh to if we're using
[24:40] pre and post imagery so that we can determine whether the landslide inventory includes uh just the landslides triggered by a specific event
[24:49] bracketed by those uh imageries or whether that includes historic events prior to that as well we'd want to
[24:55] include information about the source the type of sensor and resolution so you could say landat operational land imager
[25:02] um resolution 30 MERS for example or um you know for a variety of different sensors depending on what was involved
[25:11] um you'd also want to includ information about the type of mapping that was used whether that's points or polygons
[25:16] whether it uses a manual method or automatic method which is something we'll talk a more about in a few slides
[25:21] time if it's produced using a manual method we'd also want to give information about who that person
[25:26] mapping is again all of that information is so that this data set is reproducible or as best as possible
[25:32] reproducible um typically we don't to talk about any Associated Publications or DOI that attaches to this information
[25:38] um again the extent of the mapping area as we mentioned I'm talking about cloud coverage and including that information
[25:43] in a in the metadata is essential and if possible the type of landslide for the individual events um should be recorded
[25:50] and this is often tricky if we don't know exactly what type of information this is and field validation is is
[25:56] certainly relevant um but we're typically mapping individual small Landslide events or um shallow landslides we might want to flag that
[26:04] that's what was mapped here if we're thinking more about deep-seated landslides as we mentioned in part one
[26:09] we'd also want to flag that those the type of landslides that were considered so again all that kind of information
[26:13] should be considered and included in a metadata package and that can be part of a geod database or additional um kind of
[26:19] notes or documentation alongside the shape file that's produced as mentioned um we can think a bit about new or hisor
[26:29] landslides so after an initial Landslide um the deposited area and the scar area can certainly be revegetated um plants
[26:38] can grow back and fill that area so that it's much harder to spot where that was so again we're returning to that
[26:43] location Southern Tai one uh you saw the image on the right hand side here before um but when the last when that catchment
[26:49] was uh fresh from this incredible rainfall event in 2009 um there was a lot more obvious Landslide SC stars in that area and so
[26:59] these are the same location but um uh one image is taken in 2011 and one image is taken in
[27:05] 2024 and you can see that a significant part of that area especially with the smaller landslides has been revegetated
[27:12] um significantly over time and so these older landslides um may be uh invisible as scars are through vegetation um and
[27:22] so ultimately we want to this is why it's important to to flag the timing of the like imagery and and critically to
[27:28] get imagery if possible as close to the timing of the landslide event as possible to ensure that we capture the
[27:33] full extent of those areas one thing that's also obvious here is that those larger Landslide um landslides here are still um vegetation
[27:43] free and that maybe because theyve been reactivated or or um kind of the remobilization of material or loose scar
[27:50] material maybe continuing as as brainfall continues over the last 15 years uh and so that's something to also
[27:57] pay attention to again that like larger landslides may continue to be obvious in the landscape for longer than smaller
[28:02] landscape landscape landslides one thing that we we can think about more about we'll talk more about this with automatic mapping is
[28:08] that multi-temporal land inventories can certainly improve the kind of longer term analysis of these kind of areas so
[28:13] in other words we can build a l inventory not just once but over many years like once a year maybe even or
[28:19] even once a month potentially if you have access to that kind of information to assess the changes over time and
[28:24] whether there's been reactivation new landslides changes to existing landslides or or essentially if if um only small landslides have have occurred
[28:33] all of these kind of contextual Clues and and the timing of these events are critical to to consider when building
[28:40] inventory um and again you've seen a number of examples now of um manually of landslides and how you can distinguish
[28:46] them using manual mapping we're going to talk now about some of the tools used to map landslides
[28:51] automatically so the next section we're going to kind of drill into um what the the the critical to consider and how we
[28:59] can accomplish those using um algorithms and kind of automated methods to um build these inventories so why do we care about
[29:09] automatic mapping um so far I've shown you a number of images um over the first part of this training as well as the
[29:14] first section of today's training that consider essentially one or two or maybe even a handful of land slides but in
[29:20] some cases where there is a large earthquake or a major rainfall event many thousands of land slides could be
[29:26] triggered by single trigger and so we'd end up on a landscape that looks a bit like this this is again the
[29:31] same catchment in in southern Taiwan and it would be impractical to ask an individual uh to map these um
[29:40] using hand mapping or kind of clicking to to create the polygons this would be an enormous task um in some places this
[29:47] has been done um and I myself have been part of of you know several efforts to map thousands of landslides but this is
[29:53] not time efficient and particularly if we're doing something that requires a rapid response and that could include
[29:58] emergency response uh for disaster and Analysis um one example of that would be NASA's disasters program which supports
[30:05] um Landslide mapping as part of response for disasters um particularly in the US but also abroad we would want to use
[30:13] automatic methods to speed up this process as well as provide a more kind of reproducible and robust and uh I
[30:19] guess objective analysis of these a areas to build a more systematic Landslide catalog so typically automatic methods will exploit the the changes in
[30:28] texture color and spectral properties of the recently Disturbed areas so what that means is and the change between um
[30:36] an image before and after can be look you can look at the change in the kind of pixels or the areas to assess um
[30:43] those characteristics and how the landid have introduced that um typically there are two methods um either pixel based or
[30:50] object based and we'll talk about both of those one reason why this however is is one critical element we want to
[30:56] address today is amalgamation as well I'll talk more about that in a few slides time um but again automatic
[31:02] methods can be highly productive to do this kind of work uh and a real advance that has been made in the landside
[31:07] community in recent years there are certainly caveats but we'll talk more about that in the next few
[31:13] slides so to drill into this in more detail let's talk about how this kind of process works so let's give a a very
[31:21] broad overview before I had it was my colleague bukar Mata but typically we want to think about a computer is going
[31:26] to an algorithm we'll look at um a way to characterize locations that's that are like look like landslides or don't
[31:34] look like landslides based on information that has been made available and typically that's the training information so in other words we would
[31:41] often have a small subset of landslides that manually mapped um as an input to a model um those would then be uh an
[31:49] algorithm would assess the characteristics of those Landslide locations and the areas without Landslide locations and then compare
[31:55] that with the larger broader analysis area that's to be mapped and pull out the areas of that um kind of broader
[32:02] area to be mapped that will um produce uh an estimate of where L are likely or not so one example of this is using
[32:08] random Forest models where um an initial data set is subsampled decision trees are used to assess the likelihood either yes or no
[32:18] of lands Side location that's done over a large number of um subsamples and then the uh this kind of multiple set of
[32:26] trees is produced a majority voting estimate um to produce a final prediction so this is just an example of
[32:32] one of many different types of machine learning or um statistical methods used to do this um and typically we were
[32:40] again we're going to try to characterize between Landslide and non-landslide zones based on this training information and um we have a a wide variety and I we
[32:49] will not have time today to talk about all these different sorts of um forms of of analysis um but again statistical
[32:55] regression machine learning or AI have widely been used recently uh and so the output of all of these however is
[33:01] ultimately uh prediction of likely Landslide locations one of the most important things to remember here is that the outputs of any statistical
[33:09] model are only as good as the inputs and so the ultimately the training data that's used is going to be one of the
[33:15] most important factors that determines the success or failure of an automatic model and so still this is why we have
[33:21] to stress the importance of manual mapping and manual inputs because ultimately a human eye will still be one
[33:26] of the most important elements build those training data sets in most cases so I'm now going to pause and pass
[33:32] over to my colleague pkar Mata um who will take over to talk a little bit M some of the automatic methods that have
[33:37] been developed um by NASA scientists thanks Robert for the great overview of landslide mapping hi everyone my name is pkar amatya I mostly
[33:50] work towards development of automated Landslide mapping system so right now I'm going to talk about uh automatic
[33:57] mapping technique to map landslides using optical imagery so remote sensing of landslides can be categorized into two groups uh pixel based and object
[34:05] based image analysis obia uh the pixel based method use the spectral signature of single pixels and have been
[34:13] successfully used to map landslides however this method suffers from the salt and peer effect due to single
[34:19] pixels being demarcated as landslides on the other hand in obia image segmentation is used to convert homogeneous pixels into objects so an
[34:28] object in literal sense is a polygon made up of similar pixels uh spectral textural morphological geometrical and
[34:35] contextual characteristics of these objects are then utilized to detect landslides so comparative Studies have found obia to detect landslides
[34:44] accurately with fewer false positives one caveat is it is computationally expensive in comparison to the pixel best
[34:52] best method uh due to uh the reason mentioned in previous slide at NASA we have been utilizing object based image analysis
[35:00] based methods so land side mapping using obia consists of two important steps segmentation and classification in segmentation step uh segmentation
[35:09] algorithms such as multi-resolution segmentation mean shift segmentation water set segmented Etc are used to group homogeneous pixels into objects so
[35:18] in figure B uh you can see objects being created using segmentation the main challenges in implementing a
[35:25] segmentation algorithm is determining the segmentation parameters these segmentation parameters are very important as it defines the size of the
[35:33] objects overall influencing the accuracy of the in inventories produced so these parameters are often set using iterative
[35:42] trial and error methods or automatic uh parameter calculation methods so the second uh step is classification most of
[35:49] the studies utilizing obia for Landslide detection involves creation of a knowledge based classification rule set for classifying M mented objects to
[35:58] landslides this uh machine learning uh this sorry this machine executable Ru set is created based on site specific
[36:06] characteristics and manual thresholding of landslide diagnostic features uh such as ndvi and slope uh alternatively machine learning methods uh such as
[36:14] random forest and support Vector machine Etc have been successfully utilized for this step as well uh although obia has
[36:22] been uh used to map landslides all around the world the accessibility of the Bev algorithms is an issue because
[36:28] most of the studies have relied on Commercial Commercial softwares we at Nasa developed a python based open source semi-automatic
[36:36] Landslide detection system uh called Salad which is easily Deployable in both Linux and oper and Windows operating
[36:43] system uh salad combines various python packages uh to create a system capable of mapping landslides using obia and
[36:50] machine learning uh the system when provided Optical imagery and DM uses meft segmentation to generate objects so
[36:59] object means of spectral topographical and textural Landslide diagnostic features uh such as ndvi slope brightness glcm texture Etc are then
[37:10] calculated and used for Landslide mapping as this is a machine learning best method a manual Landslide inventory
[37:16] is used to train a random forest model and objects are classified into Landslide or non-landslide class finally
[37:22] objects belonging to Landslide class are dissolved to create a first first pass land like inventory we then run a quick
[37:29] visual check to remove some obvious false positives uh such as uh river sand Baron areas roads Etc to obtain the
[37:38] final Landslide inventory the code uh for salad is open source and if anybody's interested you can get it off
[37:45] of uh NASA's GitHub the link is also provided in this slide so to put into visual perspective
[37:53] of what I just described I will use a test case that was used in the original salad paper so during development salad
[38:00] was tested in A5 kilom square area along the pasang lamu highway in Nepal where a large number of landslides were induced
[38:08] by 2015 Gorka earthquake using rapid ey imagery so we divided the study area into training and validation area uh
[38:17] within the rapid imagery itself 623 landslides were manually mapped out of uh out of that 148 landslides in the
[38:25] yellow polygons were used to train the random forest model and the remaining 475 landslides were used to validate the
[38:32] results uh of landslide inventories generated automatically using salad so the figure on the top shows the segmented objects uh created uh from the
[38:44] rapid ey imagery using mean shift segmentation we can see the landslide objects were clearly separated from other objects the segmentation however
[38:54] uh did result in some over segmentation uh although the purp purpose of segmentation is to create meaningful
[38:59] objects over segmentation is not necessarily a bad result uh generally over segmentation is preferred to under segmentation because uh merging is
[39:09] possible in final steps so the bottom figure uh shows a zoomed in view of salad detected landslides so comparison
[39:16] with manual inventory for validation highlighted salad was successful in detect in detecting 70% of the area of
[39:23] manually map landslides and about 20% of where false positives uh present in the detected Landslide so uh a thing to note
[39:33] here is some small amount of manual Corrections will be needed to generate a complete inventory if salad generated
[39:39] landslides or any automated method outputs are to be used for detailed uh Landslide Hazard modeling and risk
[39:47] analysis analysis studies so once you have a train model then you can start doing large scale mapping so video on the left uh show the
[39:56] early distribution of L slides along two major highways in Nepal the thing to note here is the sheer number of
[40:01] landslides that were induced by the 2015 Goa earthquake one can note as we are not using a change detection based
[40:09] approach uh we map every Landslide present in a particular year style this type of mapping however enables us to
[40:15] visualize evolution of landslide Through Time the video on right uh shows evolution of a landslide that led to a
[40:22] catastrophic failure widely known as the jur landslide in Oro Highway of Nepal uh you can see that Landslide started
[40:30] developing in 2012 and failed in 2014 creating a flood Hazard Downstream uh by blocking the river uh and since then it
[40:38] has started to dwindle in size so here's another example of a multi-temporal inventory that was developed using salad to support risk
[40:47] assessment study for upcoming hydrop powers in the UR River Basin in Nepal uh so although salad had an accuracy of
[40:55] about 70% as mentioned before uh the speed with which it map landslides over large area is of considerable Advantage
[41:02] for example we spend about 6 hours manually mapping landslides induced by 2015 Gorka earthquake for a single rapid
[41:10] eye tile uh with about one hour of mapping landslides for training purposes we were able to map same landslides
[41:17] using salad in about 45 minutes which is a significant amount of time gained and this capability might be very valuable
[41:26] for supporting rapid response efforts uh during disaster events so as mentioned earlier inputs to salad are a post- event image and a
[41:34] demem as it only uses a post event image it does not have that ability to separate old landslides from new event
[41:42] induced ones sometimes when we need to do mapping to support rapid response it is very important we map landslides
[41:48] induced by the event only a change detection based approach utilizing pre and post imagery can help us achieve
[41:54] that hence uh we introduced a change detection based module to the salad framework we call this new system salad
[42:00] CD the new framework incorporates uh image normalization image code registration and instead of using single image Landslide features we use change
[42:11] detection based matrices such as ndvi difference uh principal component analysis and independent component analysis which is basically a
[42:20] dimensionality reduction method capable of capturing change related information in smaller number of bands from a stack of pre and postevent uh satellite
[42:28] imagery so in the figure you can see individually mapped landslides that were induced by Hurricane ETA and Iota in
[42:35] 2020 in South America using salad CD so recently deep learning based methods have been found to map
[42:44] landslides more accurately and faster uh than obia or pixel based methods so deep learning takes in an image and applies
[42:51] several mathematic operations in particular filters to identify objects in an image separating one from the other however the prerequisite to run a
[43:01] deep learning based model is high quality large training data set which might not be readily available to
[43:07] support Disaster Response fortunately in recent times uh there are multiple Community reference data set open source which can be used uh to train uh the
[43:18] Deep learning based model and establish uh a pre-rain file so a pre-train deep learning model once established can
[43:24] easily and effectively be transferred or or or use on similar Landslide mapping task so our test here at Nasa has
[43:32] verified deep learning to map Landslide faster than obia method and it's something we are pursuing further for
[43:38] the near future so uh just to sum summarize which method to use really depends on individual preference and
[43:45] mapping condition if one has a pre-trained uh deep learning model or have a large enough of training data I
[43:51] would suggest using deep learning methods if uh one has small data set and training needs to be done from scratch
[43:58] and relatively quickly we can use obia uh and if one just needs to have an idea like basic idea of like how large of a
[44:07] landslide event it is one can relatively quickly and easily run a pixel based methods so thank you with this I would
[44:16] like to hand it over to Robert again to continue on with the presentation thank you so much pakar um
[44:26] very interesting presentation and some of the exciting work has been done uh from the's research at Nasa so um just
[44:33] to note a couple of additional considerations with respect to automatic um mapping so again as we mentioned the
[44:39] training data strongly influences the outputs um the method that prar described uh salad has been used also to
[44:47] map flood damage relying on change detection and ultimately this is looking at um specific information about where
[44:53] Rivers have changed or the damage as a result of like high flood waters occurred in some places that can look
[44:59] similar to landslides But ultimately um not exactly identical and so again whatever you feed into the model is
[45:05] going to strongly influence um the outputs there so um in this case for example using Dem data the topography or
[45:11] the slope for example could be used as an underlying layer to like distinguish between areas that are for example
[45:16] floodwater impacts or landslides on Hill slopes ultimately because we understand that there's a difference between High slopes and uh land slides occurring on
[45:24] slopes and impacts occurring in River channels as well so I think again adding in that kind of anery data to the
[45:30] training analysis um tools is certainly beneficial in some of these analyses um one other note is that areas
[45:37] where there has not been a significant change in the textural color or spectrographic um analyses or Optical
[45:45] observations uh detection of um land size may be difficult and this is particularly important in desert regions
[45:51] or areas where Landes have been reactivated in those places the Bedrock color or the sort of subsurface color or
[45:57] the soil color may look very similar to the sort of surface color that you would see from over and so ultimately there
[46:01] may be very limited amount of change that could be detected and in that case we may need to use non-optical methods
[46:06] to do this and we'll talk more about that in a couple of slides one other critical element to
[46:12] consider is amalgamation so I'm showing two images here of a small area um of part of China
[46:19] that was impacted by the WAN earthquake these are the same zones um and on the left hand side is using 15 me
[46:27] to ASA imagery um the landslides were mapped automatically using uh a variety of different analysis tools you can see
[46:33] that these polygons that produced are relatively coarse uh and they uh kind of align around these zones of change
[46:39] including including landslides on the right hand side this is 2.5 met spot imagery of the same area
[46:46] but now you can see that there's a lot of detail within the landslide areas um that's highly kind of complex in some
[46:52] cases the specific Landslide bodies that we've mapped um as individual large bodies of landslide single landslides May in fact represent multiple small
[47:01] landslides sort of merge together by the kind of course analysis and this is a real challenge particularly if we want to do something
[47:07] with that L inventory for um or ssibility modeling or particularly runout modeling um the main reason why
[47:16] this is the case is because the amount of material produced by a landslide um typically scales with the size of the
[47:23] scar so those the larger the scar the more um deposit more material is is moved but this is a nonlinear scaling
[47:29] the volume of material produced is is certainly um scales in a as I say nonlinear fashion with the scar area and
[47:36] what that means is if we misidentify the overall scar area the errors in our volume estimates will be significantly
[47:42] in proportionally larger so this amalgamation is really important and it's one of the reasons why higher resolution imagery is certainly better
[47:49] and in any automatic method is also important to to you know look at again at these automatic polygons or the the
[47:56] data sets that the produced and identify for example if any of them may be um Amalgamated landslides
[48:03] a human identification of some of these events would focus on um potentially let's say these larger blob of
[48:10] landslides that have been highlighted um breaking them apart into smaller individual areas and and using context clues to determine um whether these may
[48:18] be are multiple different events or M together and this ultimately produce a more robust and reliable lands inventory
[48:23] for further analysis so now as we mentioned um we're going to talk a little bit more about non-optical
[48:31] detection of landslides so there are certainly strong cases to be made for the use of optical data and this has
[48:36] formed the bulk of landside Science and mapping for many many years but there are multiple different um sources of
[48:43] information available from orbit and some of them have been used effectively for landside mapping in recent years and
[48:47] I want we wanted to touch on some of those today to give a brief overview of how they
[48:52] operate so one key element is the use of SAR data um SAR stands for synthetic aperture radar and this is using radar
[49:00] data to image the surface of the Earth that sounds somewhat simple and principle but there are many factors
[49:05] that influence the way in which landsides are detected um this schematic here shows roughly what's going on a
[49:11] satellite um flies along a specific flight path and using uh uh it puts radar data it like points radar data out
[49:19] at the surface of the Earth and then detects the reflection of that data of that um radar those radar waves those
[49:25] radio waves um back at the satellite itself and the satellite records both the amplitude the frequency and the
[49:33] phase of that information coming back so there's lots of critical information captured within that that can be used to
[49:37] assess the the surface characteristics of the Earth as it flies below the satellite however there are several
[49:42] factors that influence the way in which a satellite can observe um uh certainly mountainous areas which are really
[49:49] critical for landslides three of those key elements include Shadow so in other words areas behind a mountain as seen by land a
[49:57] satellite orbiting at a shallow angle uh are invisible in other words anything that's like behind the the mountain
[50:04] itself is is not something we can see so Landslide on the far side of a mountain like that would be invisible um there is
[50:09] also an effect called foreshortening and this is because um because of the relative angle of slopes facing a
[50:15] satellite um versus slopes facing away from a satellite um sensor facing slopes tend to look smaller than the ones
[50:23] facing away from the slope so that's something else to consider the relative that has to be corrected for and then
[50:29] finally layover is an effect um whereby steep slopes um may appear as being flipped over in essence uh the point at
[50:39] the bottom of a slope versus the top of a slope may be inverted in the observation um that returns to a
[50:44] satellite and so again correcting for that is something that's critical um when considering the landslides at these
[50:49] in these mountainous areas the other thing that matters is the type of surface and facade data so
[50:57] the reflection of uh the um radar data is going to depend significantly on how smooth that or how rough the surface is
[51:06] um particularly if the um wavelength of the roughness is is close to the wavelength of the sensor or you know
[51:12] within those kind of brackets so very smooth surfaces Like Water for example almost give no Reflections we see that almost as dark
[51:19] in sat in SAR imagery um rougher um surfaces produce more diffuse scattering which potentially leads to um a wide
[51:28] variety of of changes to the reflection and so again um landslides may not just affect the overall um uh sort of shape
[51:35] of the landscape but also the roughness of the surface um you can imagine a Bedrock surface may be significantly
[51:41] either scoured or kind of these homiy textures of landslides to have very kind of rough areas um and again this is
[51:47] going to strongly influence the way in which satellites radar data is able to observe those systems there are two key approaches to
[51:56] assessing um landslides using SAR data um those are coherence based approaches and amplitude based approaches both types of analysis use pre- and post
[52:05] imagery to compare and so in other words you're thinking about the difference between an initial image and an off math
[52:11] image of a landside triggering event um typically an an amplitude based assessment records the change and the
[52:19] intensity of the signal return um these typically have lower sensitivity but more recently and recent Studies have
[52:26] been used to assess changes um large changes in volume of of of L material so dense volumetric changes of M of of
[52:34] landslides go wear that in a second and then coherence-based approaches are changes that would affect the signal of
[52:41] the radar return um the kind of the signal frequency and how much of that is is uh incoherence or um kind of out of
[52:48] coherence if you like with the their initial um radar signal This is highly dependent upon various factors including
[52:55] atmospheric influence and so an Associated change a significant effect of surface textural change is what we're looking for here
[53:02] and the scattering properties that result um this has been used in some cases quite effectively for L detection
[53:08] in some settings but to briefly introduce nonoptical sorry the the amplitude based assessment um several teams including
[53:16] some supported by the disasters program have used um amplitude based changes including using Google Earth engine to
[53:24] assess uh dense areas of landslides so on the right hand side you're looking at what we refer to as a rapid response
[53:30] heat map um the black lines are showing the polygon outlines of landslides that have been mapped using optical imagery
[53:38] on the aftermath but these the low to high density um color scheme here indicates areas where the um s data has
[53:46] indicated a large amount of change potentially in the amplitude and so potentially seeing a lot of landside uh
[53:52] effects and in this case these those areas align very closely with the areas of where LS were eventually mapped
[53:58] afterwards and this has been used effectively to see through clouds and to look at areas where there's been
[54:02] significant cloud cover afterwards a critical um example was in the 2021 he Haiti earthquake and after and and
[54:09] shortly thereafter there was a major rainfall rainfall event um this method was used rapidly afterwards to assess changes in
[54:16] Landslide density shortly after that um triggering event sequence you can see here on the left hand side an image of uh salad mapped
[54:26] landslides I'm using the same method that my colleague pukara spoke about just a second ago um looking at the uh
[54:32] kind of these yellow polygons of the landslides mapped in the center of the image but you can also see the number of
[54:38] clouds that were evident here and this is an area that's highly Cloud covered and often although we could see some
[54:42] areas with um Optical imagery for mapping not all were immediately visible and so SAR data was used effectively to
[54:49] map in the very short aftermath of um the triggering events to look at locations where there were significant
[54:55] numbers of slides and this was an important tool to number one to highlight the locations of potential
[55:01] risk but also to um flag areas for further mapping in as as cloud-free imagery became available so that was a bit about
[55:10] amplitude based assessment but we also have um coherence-based approaches um this typically looks at the change in coherence between two s
[55:18] images this has been used as I mentioned for landside mapping um this example from Myanmar and a recent study by
[55:25] monini and some Co authors um shows this big change in coherence this like bright spot SP spot
[55:32] in the S image in the middle of the of the data set that aligns with the location of this Landslide as you can
[55:36] see um on the left Um this can be a very useful tool for the assessment of landslides um but it is very dependent
[55:45] upon a number of factors and areas prone to decorrelation so where the imagery the return data set does not align
[55:52] coherence with the uh output with the um the The Source symetry um particularly forests coherence change may have a very low
[56:00] detection ability so in this case this works but um it's important to note that this is this data set and Analysis
[56:05] approach is not always robust in every setting so lastly a word about um insar so this is interfer interferometric SAR
[56:17] um this uses two or more images to reveal change in surface motion so um in this kind of schematic here we're
[56:24] looking at um two uh images of two s images collected at different times and the difference between them is used to
[56:33] assess what's refer to build what's referred to as an interferogram um and this builds sort of very small you can
[56:39] look at very small gradual changes in motion or change in surface um this is highly effective in some settings but it
[56:48] does require surfaces that are typically coherent in other words ones that are consistent between each image and so
[56:53] we'd want to find uh specific points that are unchanged on the surface of a landslide and so this typically works
[56:59] best for um slow moving landslides um what ones where we might be able to find a specific Reflection Point that is
[57:07] consistent from one point to another and you can assess the small amount of movement between those the before and
[57:12] after images so here's an example from um California sorry this isn't Nepal but the team is based in California my
[57:20] apologies um there are a number of landslides um you can observe um the velocity per year for example of the
[57:27] individual Landslide bodies and over the course of a large landscape you can assess um areas of motion and those
[57:34] would be used to highlight potential slow moving land slides that may not be visible from any other source of data um
[57:40] even from the from the ground surface where these small changes ultimately only millimeters per year may be
[57:45] non-evident uh and so again this can be an important way to highlight potential risks um in the future or even elements
[57:51] that are currently you at risk for infrastructure right now again all of the consistent uh sort of uh caveats
[57:59] that apply with SAR data are relevant here as well the same kind of um complex um analysis is is required here um there
[58:07] was a number of resources available in this training and the the resources material uh that can be used to guide
[58:13] the way in which s data can be used um and this is one of those um tools that
[58:18] has been highly effective in some settings but again there are many settings is not always the same this is
[58:23] not always as applicable um however is important important to note that Optical and S imagery do not have to be used
[58:29] exclusively from one another um particularly for large landside events it can be highly beneficial to use Optical and S images alongside one
[58:36] another to help build a um both s and Optical assessment and this kind of multisensor fusion um is perhaps one of
[58:43] the most important and exciting um potential further analyses that we can think about um as the future of landside
[58:51] science so I want to say thank you so much for your attention today um and um want to lay the seeds for what's going
[58:57] to come in the final part of this training using all the information we've kind of built so far we're going to talk
[59:02] a bit more about building land siiz suceptibility models and how that informs hazard assessment um and then
[59:08] we're going to put all those pieces together to build a kind of understanding of how Hazard exposure and
[59:12] impact can all build a much more comprehensive understanding of how landslides and disasters fit together so again thank you so much for your time
[59:18] today I'm looking forward to taking any questions thank you to my colleague bukar and to the asset team for your
[59:23] support so over to you Sean wonderful thank you so much Robert and pukar the following are links to
[59:33] resources related to today's training including the GitHub repository for the semi-automatic landside detection or Salad NASA landsides research as well as
[59:42] relevant ret trainings in summarizing the concepts covered in part two of the webinar series an ability to translate
[59:51] two-dimensional observations from orbit into situational Awareness on the ground is a critical skill to develop for landside mapping differentiating the
[1:00:00] source area or headscarp of a landside with the runout and deposit areas is important for comparative analysis of su
[1:00:08] susceptibility and Hazard the number and size of landsides that can be observed strongly depends on the resolution of available
[1:00:16] imagery relevant metadata is needed when mapping landsides multi-temporal landside inventories can provide longer term analysis automatic methods for mapping landslides
[1:00:28] such as pixel-based and object object based exploit the typical changes in texture color and spectral properties of
[1:00:35] recently Disturbed areas automatic methods use a variety of regression machine learning or AI based approaches that can be used to predict other pixels
[1:00:44] or objects that match the type of input used as training which is then an output as a prediction of likely outlands side
[1:00:50] locations training data strongly influences outputs and sarbas landside mapping uses two key approaches coherence-based and amplitude based before we transition to the Q&A
[1:01:04] session I want to remind you there will be one homework assignment which you will be able to access from the training
[1:01:08] page on March 18th answers must be submitted by Google form with a due date of April 1st to receive a certificate of
[1:01:15] completion you must attend all three live webinars and complete the homework assignment by the deadline you will
[1:01:21] receive a certificate via email approximately 2 months after the completion of the course below is the contact information
[1:01:30] for Dr emberson and drat along with links to theet website and social media we will now transition to the
[1:01:39] question and answer portion of today's training please enter your questions in the question and answer box and we will
[1:01:45] get to them in the order that they were received we will post the question and answer document to the training we web
[1:01:50] page within a week of today's training session and once again Dr emberson and Dr am Mata thank you so much for the wonderful
[1:02:03] presentation uh we can jump right into it we've gotten some really great questions so far so we do have about 30
[1:02:09] minutes left so if you have not submitted a question uh please do so and we will try to get through as many of
[1:02:16] these questions as we can in the next 28 minutes or so so jumping right in question number one uh is there any way
[1:02:23] to use satellite data predict to predict landsides or satellite data that can help thank you for the question and I
[1:02:31] just want to say generally thank you for everyone engaging with this question and answer session I'm excited to answer
[1:02:35] some of these so in this context prediction can mean a number of things I guess the the first and probably the
[1:02:41] most common example is predicting the location of where a landside is likely to occur and we'll talk a lot more about
[1:02:46] this we refer to this as thinking about susceptibility of of a landscape of parts of a landscape to landsliding
[1:02:51] we'll talk a lot more about developing susceptibility models in part three of this training so yeah I encourage you to
[1:02:55] follow on um in terms of predicting the timing of a landslide so thinking more about the specific uh Hazard itself um prediction
[1:03:04] in this case would require forecast information so information that is not just observational what is happening with rainfall right now we would want to
[1:03:09] predict something about the likely rainfall to come and that is not something that is observed from satellite data so we would obviously
[1:03:16] have to rely on model data whether it's rainfall forecast data for a global rainfall forecast or a more local
[1:03:22] rainfall forecast either way that information is typically course resolution and lower Fidelity than a lot of observational data and so prediction
[1:03:30] of land slides whether through a kind of threshold based model or otherwise is certainly going to rely upon calibration
[1:03:36] with forecast information rather than kind of observation data um we make a big distinction between our model which
[1:03:42] we refer to as the L side hazardous awareness or Lasser model which is a situational awareness model that uses
[1:03:48] near real time data so this is not a prediction model this is a forecast this is a sorry it is not a prediction model
[1:03:54] it is a situational awareness model and those are two distinct things um we have implemented a forecast um mode for that
[1:04:03] but it's is still in a kind of like I guess the best way to describe it as a
[1:04:07] early stages of of developing accuracy metrics and so I think again local prediction of lands side locations um
[1:04:14] with satellite data is I would argue not something we're doing right now and I think it's more situational awareness
[1:04:19] than is production within a temporal sense so long answer I apologize but yeah thanks for good question
[1:04:30] hey wonderful uh question number two uh sorry if I'm jumping ahead but I'm wondering uh if we'll discuss predicting
[1:04:38] versus assessing the Potential Threat of landslide areas uh so in advance of an actual event versus postao and uh realizing obviously the
[1:04:49] need for additional data uh such as for example soils uh geology digital elev models models Etc so great question and uh no no
[1:05:00] apology necessary you are in fact though jumping ahead we're looking at this in part three of this training so thinking
[1:05:05] about versus suting Potential Threat is is kind of exactly what we're thinking of in terms of susceptibility analysis
[1:05:10] and we will talk about that in part three of this training okay wonderful uh question number three which state-of-the-art
[1:05:20] convolutional neural network and artificial intelligence models are being used to map land slides with Optical satellite satellite imagery thanks for the question so right
[1:05:31] now like our team uses various uh uh different iteration of unit right so it is not state-ofthe-art by today's
[1:05:38] standard uh recent literatures has shown Transformer based model to be better at mapping land slides compared to CNN so
[1:05:44] one example that participants here can go to is recently IBM and NASA has has released a foundation model called privi
[1:05:52] and it it has uh been updated to version two so these kind of foundation models are trained on large amount of data
[1:05:59] right so what you can do is like you can fine-tune this model uh by showing this model small amount of uh of data which
[1:06:08] which suggest the model what a landslide look like looks like right so that can be used to quickly uh fine tune the
[1:06:15] model and then uh map Landslide so if you look at like ttv's uh recent paper there is a uh Downstream task where they
[1:06:23] looked at mapping land slides and they did some comparisons with different methods and found that uh these
[1:06:29] Foundation models do work better compared to other methods thank you uh wonderful thank you so much pukar
[1:06:39] uh question number four are there any papers or Frameworks to train a convolutional neural network to automatically map landsides while also
[1:06:48] writing all the metadata uh of landslide inventory a landslide inventory ought to have so uh yes there are open-source
[1:06:57] public reference training data set that can be used uh to train a deep learning based model uh in terms of like metad
[1:07:05] data um I would say it's a little bit difficult uh because what the neural network is doing is like just mapping
[1:07:13] landslides right so it it might only have like some attributes related to a polygon so we would suggest caution uh
[1:07:22] looking at metadata that is generated automatically uh so so we we would recommend uh some manual intervention
[1:07:29] while uh generating or looking for metadata Robert you want to add something no this I totally agree with
[1:07:35] you parar I think there just one yeah of course the metadata analysis is something that we again we
[1:07:43] encourage manual way to ensure that there is like reliability consistency for the individual Landslide polygons obviously you could um theoretically
[1:07:52] code up a model that could produce files that have specific attributes attached to those things but again it would be
[1:07:57] important to sort of check through those as as beon mentioned polygon produced would obviously be important in any in any
[1:08:04] context and and unsupervised Landslide inventory prod production uh is certainly something we' be like make sure you check it on both ends to put it
[1:08:12] that way so yes and I'll also like add some links uh to this answer okay terrific uh thank you both
[1:08:22] Robert and bukar uh question number five do different satellites have different measurements and resolutions for landsides what are some good satellites
[1:08:31] for measuring landslides in your opinion I keep hearing L lanat Sentinel one Etc but not sure of the differences are
[1:08:39] there any recommended reading resources to know the differences so great question um and we appreciate the the interest in learning
[1:08:47] more about these different elements there are wide variety of different satellites um and yeah the resolution certainly varies significantly and the
[1:08:55] different benefits as mentioned in the answer to this question I think it might be important to review the fundamentals
[1:08:59] of remote sentencing training that asset offers as well as of the introductory information um from postat in the final Q&A I'll note
[1:09:08] that typically we work widely with lat and Sentinel one data sets and part of that is because even though they are
[1:09:14] what we would refer to as moderate resolution outputs sort of 30 meter resolution pixels um they're very long
[1:09:19] archives for those data sets um which means we can go back a long time to look at uh the location of different um pixel
[1:09:26] and say you know what's changed over time um and they are very well calibrated with respect to each other as
[1:09:31] well as specific sources on Earth more recently commercial data has become an important part of landside mapping um we
[1:09:37] have extensively used um for example data from planet scope as well as other commercial sources that NASA has
[1:09:43] obtained access to through the commercial satellite data acquisition program um these tools uh typically are of higher resolution and often uh have a
[1:09:50] higher return rate although in terms of the longer archives that offered by these um think L and Sentinel um they
[1:09:57] are um not they don't have the same long archives I will note that the question asked here focused on Sentinel one and
[1:10:03] so I should make a comment that Sentinel 2 is the optical satellite opt offered by The capern Sentinel group in Europe
[1:10:10] Sentinel one is the SAR satellite so lat and Sentinel one are not exactly analogous lat and Sentinel 2 however
[1:10:16] those are kind of directly comparable data sets and Sentinel one rather is a s based assessment so just a note
[1:10:23] there okay great Robin thank you for that clarification uh question number six could you use a single algorithm
[1:10:31] combining object based image analysis and a pixel-based method simultaneously to enhance the end result yes thanks for the question so in
[1:10:41] a basic sense like uh pixel base and object base are intertwining with each other because we are using pixel based
[1:10:48] features that gets turned into an object to map land slides right however there are like a couple of studies that I've
[1:10:54] seen where object based image analysis and deep learning based methods are combined so what they are basically
[1:11:00] doing is like taking an output uh from obia and then use it into or or Supply that to a deep learning model to map
[1:11:09] land slides and they have shown that combination of this like uh to work better uh than single
[1:11:16] instance I can provide the link here as well well later okay thank you pukar question number seven what is a reasonable
[1:11:24] training ratio manually mapped slide area versus overall area of interest for solid approach yeah this is very
[1:11:32] difficult question to answer like the general consensus is larger the training data the better but like it depends upon
[1:11:39] like what you're trying to do right for example if you're trying to do some rapid response Landslide mapping then uh
[1:11:46] you'll have to make two with few amounts of training data but like in in my test of using uh salad for rapid response I
[1:11:54] have seen like accepted results uh using about 50 Landslide samples so it really depends upon like what you're trying to
[1:12:03] do if you're trying to do a large scale study where you need to be very accurate then I'll suggest using more training
[1:12:07] data Robert you want to ask add something to this no I think that's an excellent answer again I think this is
[1:12:13] is very context dependent um if the I guess the larger point is that if the landslides in the vicinity of the area
[1:12:22] the area you're interested in are all spectrally very similar and have all very similar shapes and structures your
[1:12:27] training data set may be may need to be smaller but if there is a wide variety of different landslides um again this
[1:12:33] may be something that you would going to have a larger training data that that would encapsulate the more like diverse
[1:12:37] potential kind of Landscapes and the potential sort of spectral indices particularly if there's a very large distinction between bedrock and and
[1:12:43] shallow landslides that are kind of either incorporating official material or deeper material that might have different spectral signatur so that's
[1:12:50] again something something to think about if you have um just based on initial inspection a wide variety kind of
[1:12:55] obvious landslide that you want to distinguish between he thank you Rob and pukar uh question eight specifically for buar uh
[1:13:05] not sure why over segmentation would not be a bad result from the model can you please explain further yeah
[1:13:12] so landslides vary in shape and sizes within a within within an satellite imagery right so one set of segmentation
[1:13:20] parameters uh which is able to segment all landslides to its perfect shape might not truly exist you know yeah you
[1:13:30] can try various combination of segmentation parameters to get at that but just to be clear like it would be a
[1:13:38] very timec consuming task right so as as logic suggests like since uh at the end of the salad procedure we are taking
[1:13:48] those objects which were classified as Landslide and merging them together over segment over mation tends to be a lot
[1:13:56] easier because smaller things can be combined and then transformed into bigger things whereas if you have like a
[1:14:03] large object which encompasses landslides and the surrounding areas it might be very difficult for you to break
[1:14:10] right so I'm not may I should rephrase it maybe saying like over segmentation is not a good result but it it might be
[1:14:19] a preferred result in the sense that U we can easily combine that to to to form a bigger Landslide area than having to
[1:14:28] break a over segmented object thank you okay pukar thank you very much uh question number nine is there a
[1:14:38] correlation study for repeat salid versus change detection investigations uh for the same area of Interest yeah so we haven't done a study
[1:14:49] to be specific but salad and change detection detection basically uh Works in into works or like is useful for different different types
[1:14:58] of landslide mapping right whereas salad as it only uses a posant imagery um it cannot separate old and
[1:15:07] new landslides so if you are to use it uh for for rapid response that might create a problem because you get
[1:15:16] information about all the landslides in an in a satellite imagery so rapid responders might not know which one is
[1:15:21] new which one is old right whereas with change detection you leave all those old landslides out and be only detecting new
[1:15:28] landslides which might be very beneficial for uh rapid responders so in terms of study we don't have it but
[1:15:36] these are basically two different kind of systems that can be used in two different scenarios okay great thank you thank you
[1:15:45] parar uh question number 10 how can someone who isn't familiar with machine learning get started on using salad do I
[1:15:52] need any special software do I use Google Earth for satellite imagery that's a great question and I'm
[1:16:00] I'll defer to you in a second I just wanted to say that all of the resources that um refer to salad are available on
[1:16:05] the NASA's uh lass's project page which I've linked here um you can find papers on the describe the model as well as the
[1:16:11] information that um uh in general you can sort of the code is also available there um in terms
[1:16:18] of Google Earth um because you can't directly download Google Earth imagery or at least if you're taking screenshots
[1:16:24] for example of Google imagery it's not going to be Geor referenced that's not preferred we would suggest using imagery
[1:16:29] from uh kind of a download the data that would be from either Sentinal lsap or other data that you have available to
[1:16:36] you um and then in terms of special software all the um code is available to run on open source platforms including
[1:16:42] python so again I defer to you on specifics buty yeah your your your spot on like uh salad is uh created as an
[1:16:50] open source software so if there is python available uh it should work it might a little bit difficult to install
[1:16:56] because it has some special packages like Oria toolbox but if anybody wants to try it and is facing problems please
[1:17:02] don't hesitate to send me an email I'll try my best to solve that terrific thank you Robin pukar
[1:17:10] question number 11 how often at at what point are ground truthing Andor any on-site observation or calibration data
[1:17:18] or evidence obtained considered useful or necessary at what relative cost so again I think there a really
[1:17:26] important just to question to ask I would suggest that perhaps the the alternative again I let me stop this by
[1:17:33] saying it's going to depend on your application uh so if you're in the emergency response space your initial
[1:17:38] question is how much time do I need to spend figuring out what's going on and and low latency analysis is going to be
[1:17:42] most important and that's where satellites can come in really handy producing automatic mapping is going to give you a sense of what is out there
[1:17:48] and where you might want to then prioritize your kind of localized assessments um these would be particularly important for things like
[1:17:54] like infrastructure impacts or um new Landslide deposits that might have damned rivers and the stability of landslide dams for example is something
[1:18:01] that geoengineering experts think a lot about so again in terms of ground truthing I think um I would probably
[1:18:07] place this the other way around in that satellite data can be used as an initial guide to where to then go into the
[1:18:12] fields to produce more detailed assessments the other element is obviously there are some landsides that occur um a smaller size of smaller sizes
[1:18:20] than can be detected with satellite observations and particularly this is the case if you're using relatively resolution data like LSAT you might find
[1:18:27] landsides that are still impactful that are below the resolution you can observe and so again going into the field to
[1:18:31] observe those is important I'll note that in general we found a lot of benefit to working with um researchers
[1:18:37] and scientists who then go into the field to assess those um I think again the application is what matters here if
[1:18:44] you're interested in producing an accurate and reliable inventory over long time periods that has been done effectively for example in Puerto Rico
[1:18:50] the USGS goes in has gone in and mapped landslides um on the ground uh to ground truthy estimates um that
[1:18:58] were collected initially from satellite but again I think if you're looking to build sessility model for example again
[1:19:03] that might be something that would be relevant if you're looking for a very localized assessment though it's context
[1:19:07] dependent I think again but um we would suggest that satellites are more of a potentially guide for where to go to do that ground
[1:19:14] TR thing um and then based on the evaluation of where the most impacted potential areas would be that could be a
[1:19:19] way to determine the cost benefit agree thank you rob question number 12 question specifically to pukar is the multi-temporal landslide
[1:19:30] inventory data of Nepal mentioned in the presentation open source what is its accuracy compared to manually extracted
[1:19:37] data also just want to double check are both the training and prediction based on the entire Landslide polygons rather
[1:19:44] than just the source area uh so yes like whatever inventories are produced by the landslide team uh
[1:19:51] they are open source you know some might have gone through Corrections some that were uh released during rapid response might not have
[1:20:00] been but in terms of these particular multi-temporal inventories for Nepal like these are available in the nsidc
[1:20:07] high mountain Asia deck so I can put in a link here later so these inventories have gone through manual Corrections
[1:20:13] before we released it and yes training uh for salad generally like is done using complete Landslide polygon so we
[1:20:21] never use partial or points perfect thank you pukar question number 13 quite interesting when training an AI
[1:20:30] model as you said the model is only as good as its training data I can imagine that finding a good Landslide data set
[1:20:37] for training especially due to issues like cloud cover is not easy could you find a highquality data set that would
[1:20:43] be a strong candidate for training and then generate 1,000 synthetic data sets based on it modifying the images
[1:20:51] altering the landside geometry Etc to reduce the time needed defined training data and speed up the entire
[1:20:59] process so I'm just going to proper an answer here I think this is a really excellent research question um and I
[1:21:05] think understanding whether we can generate inventories without the input of kind of initial manual data set is
[1:21:11] something that we are currently exploring and I didn't if you want to say anything else yeah so so in this in
[1:21:16] this context like there is a method called Data augmentation where like you augment the data set that you already
[1:21:24] have and create synthetic data out of it right what can that be like flipping the image rotating the image you know like
[1:21:31] introducing noise to an image so it's a it's a common technique used in deep learning uh to increase the amount of uh
[1:21:39] Landslide samples uh there are if you look at like any deep learning based L and mapping papers I think you will hear
[1:21:47] of the term data augmentation so it is possible okay trfic uh thank you Rob and and buar question 14 is the GOI
[1:21:58] segmentation method effective for monitoring active and recorded Landes I don't know exactly what this refers to parar yeah it's it's a little
[1:22:10] bit confusing to me as well so when when we hear the top monitoring like we go into different realm of like actually
[1:22:17] measuring movement so goai segmentation uh is generally used for mapping LS like right so for monitoring uh Bye by
[1:22:28] preference would be utilizing synthetic aperture radar you know yeah you you can monitor growth of the landslides using GOI
[1:22:40] [Music] [Music] segmentation or reactivation okay terrific uh moving on question number 15 you mentioned insar is good for slow moving landslides what
[1:22:52] is a good method to detect a f fast moving landside what about a fast moving landside but at a smaller
[1:22:59] scale uh well I think what we've been talking about in terms of optical mapping and and kind of generic St
[1:23:05] mapping is is ultimately um is exactly what we were kind of referring to for fast moving landslides
[1:23:11] so we would again think of shallow landslides and bed landslides as landslides landslides occurring satellite overpasses you're
[1:23:18] very unlikely to capture that happening as it literally as it literally as it happens so you're detecting before and
[1:23:23] after uh and so I think that would be um again mapping the aftermath using optical data would be kind of our
[1:23:28] typical advice there yeah so in terms of SAR like um in terms of monitoring fast moving landslides or like detecting you
[1:23:38] can use pixel tracking right as opposed to inser and also for detecting like change detection based method like log
[1:23:45] Ratio or amplitude based change detection would be better and and the scale like typically depends on the
[1:23:51] resolution so uh it's Ty depends upon what satellite image you are using Okay terrific question number 16
[1:24:03] according to the rules of perspective what parameters are allowed for foreshortening images taken with SAR uh I'm probably gonna ask if the
[1:24:18] person who asked this question could slightly rephrase it because I'm not sure I fully understand what's being
[1:24:23] asked here um unless I'm wrong I I don't yeah no me too me too I would Point uh whoever asked this
[1:24:33] question we we have a series uh probably up to 10 SAR ret trainings so if you're interested just generally about about
[1:24:42] SAR the physics uh applications Etc um we have some very thorough everything from fundamentals to very Advanced
[1:24:49] trainings on SAR so if your question is more General in scope then we do encourage you to visit some of those
[1:24:56] trainings and we'll certainly Place some links to these before we post it on the training website uh question number
[1:25:01] 17 will you be presenting more insights on fusing Optical and SAR based analyses um we'll talk a little bit
[1:25:10] about that in part three but in general I think the consensus here is that that is still an evolving field and I think
[1:25:16] um the science and research in that space is not something that is um I want to be careful about presenting
[1:25:23] exactly the details of that just because I think we We Are One a group of a number of different researchers involved
[1:25:28] and trying to determine how to do that effectively um and I think the best thing we can do is to point you in the
[1:25:32] ansers this question to a number of recent research papers that have studied this and and we can hopefully like
[1:25:37] introduce some of those elements but um yeah in general I think this is an evolving area and so I wouldn't want to
[1:25:41] misent what is is being done now okay terrific question 18 insa requires large satellite baselines to achieve High Fringe sensitivity usually
[1:25:54] 1 has a relatively small orbital tube of just 150 M as far as I know the optimal
[1:26:00] Baseline size for good Fringe sensitivity is around 2 km are there any satellite systems that have this
[1:26:06] Baseline would you have some literature that you could share regarding this use case I love a really complicated and and
[1:26:14] detailed question like this this is excellent so um off the top of my head I do not have um those numbers available
[1:26:20] um but I will look them up and figure out which is the other ones I know that
[1:26:23] for the insa Bas side analysis other tools that have been used includes the AOS Suite of satellite data set um
[1:26:31] satellite data um and upcoming nysar obviously will be part of that analysis but um yeah off the top of my head I
[1:26:38] don't know those numbers so I'll figure that out unless you know differently I think that's no no we'll have to look it
[1:26:43] up up yeah okay question number 19 is it possible to predict a landslide from nonoptical detection such as insar uh
[1:26:53] from from interferogram I particularly haven't worked in this field but I have seen papers which have done so so I'm pretty
[1:27:02] certain we can yeah and I think um typically with a lot of these the S based analysis are
[1:27:11] often useful to take land slides that have no spectral observ you know you can't see with Optical data that I
[1:27:17] either moving slowly or previously moved um and as a result are forming an important part of analyses in parts of
[1:27:24] the world particularly where there's um very limited spectral difference between the optical um nature of landsides and
[1:27:30] non-landslide affected zones so yeah we've we've we've not specifically pointed to any of those today but if
[1:27:35] these certain exist and we'll make sure we have some references and the final answers answers here okay uh wonderful question number
[1:27:41] 20 has to do with lar have you used lar data for looking at post landside Forest structural changes is it possible to
[1:27:48] incorporate Point Cloud information into the automated approach so go Robert go ahead okay well I was going to say first of all is um within
[1:28:00] the context of NASA data we have not explicitly use lar and the uh NASA liar data set from ISAT for example we've
[1:28:07] determined is not um isn't necessarily align with the way we want to map landslides I do however know that liar
[1:28:14] from from from vehicles or drones or um from groundbased assessment is widely used in L side assessment and um particularly in
[1:28:22] terms of like you know the vegetation change as well um I previously worked in groups where this has been widely done
[1:28:28] and so again yes uh in terms of whether it's done or not it certainly is in terms of an automated approach to this I
[1:28:34] think um might have to go look at the papers but yeah I think this is probably also carried out now as
[1:28:42] well yeah uh I I have seen papers which are using lier demms uh to map land slide automatically so is it possible I
[1:28:50] think they were using uh features such as slow roughness Etc but I think it's possible okay wonderful and uh two
[1:29:04] questions left question 21 what automatic techniques are recommended for fast slides given that the frequency of daily or longer resolution images is low
[1:29:13] for the required response times no more than 48 hours so again this I think um is you
[1:29:23] have right that uh emergency response time lines are often very short in our experience working with this data
[1:29:28] particularly working through n disasters program um use of commercial data has been widely effective and in comp in
[1:29:34] combination with the salad method we can and have produced landside inventories on on short timelines of that kind of
[1:29:40] time span um those have then been part of a kind of a wider kind of support response activation um that the disaster
[1:29:47] response coordination system that NASA is involved with um if you want more information about that I will certainly
[1:29:51] provide it in this in this response but yeah I think if you have anything to add there I know that you've been part and
[1:29:56] parcel of some of those responses where the the turnaround it typically depends upon like when the satellite imag
[1:30:02] becomes available right at Nasa due to commercial commercial satellite data acquisition program we have access to commercial satellites so we can do it
[1:30:11] pretty fast uh given cloud cover is not there if cloud cover is there we do uh use synthetic aperture radar based
[1:30:21] amplitude uh change detection method to generate what we call Landslide proxy heat Maps which gives you an idea of
[1:30:27] like where Landslide might happen I think Robert showed it in the slides ahead okay wonderful and and last
[1:30:35] question 22 is salad only for mapping Landslide areas like feature extraction yeah so Saladin score is an
[1:30:43] obia based mapping system right here it is mapping landslides because we are providing features which helps us to
[1:30:49] detect landslides but it can be used also for general purposes classification like land cover mapping I think Robert
[1:30:56] showed an example of salad being used for flood damage mapping as well so yeah um if you can bring in features uh which
[1:31:05] might be useful at uh detecting certain things then it can be used uh for classification or mapping
[1:31:13] that as well okay fantastic uh we we're able to get through all the questions so thank you for everybody that that did submit a
[1:31:21] question uh really terrific one so thank you for everybody for doing that uh once again Dr erson and Dr MAA uh wonderful
[1:31:28] absolutely excellent presentations uh I don't know if you've been following the chat at all but I certainly have I know
[1:31:34] that there's a lot of people uh you know very pleased and and and very excited about what they were able to learn today
[1:31:39] so uh once again really thank to both of you for for such a terrific presentation as well as uh providing so many terrific
[1:31:45] answers to these really great questions uh as we wrap up today I did want to give an opportunity for both Dr emberson
[1:31:52] and Dr Amia to Prov some closing comments uh maybe uh Robert maybe we can start with you thank you Sean uh and
[1:31:59] just say want to say thank you to everyone involved in this this this uh training course today and those who have
[1:32:04] attended and have participated I'm I'm really delighted to be here and to support your your learning and and I'd
[1:32:10] love to get to hear more from you either you know VI email or in the chat um
[1:32:14] going forward um I look forward to training for part three and I just want to say thank you to my co-host parar
[1:32:18] Mata and then obviously to the asset team whose tremendous work has led to this so thank you
[1:32:24] yeah thank you thanks thanks everyone for listening to our program or talk if you have any questions please don't
[1:32:30] hesitate to email me I'll try my best to get you the answers and I'll see you on
[1:32:35] part three of this training and thanks to Robert and aret team for allowing me to participate in this thank you
[1:32:43] terrific and I also wanted to uh single out some some uh some colleagues from the arset program Natasha Johnson
[1:32:49] Griffin San Hudson ooy and Sarah kuta uh they were working they have been working and will continue uh to support this
[1:32:56] training all the parts before and after and and just want to thank all of them for all the terrific job they're doing
[1:33:01] to make this run so smoothly and and so successfully and finally I just want to thank everybody that joined today
[1:33:05] wherever you're joining from uh really appreciate it and we look forward to seeing you for the third and final part
[1:33:10] next Tuesday so stay safe and we'll see you next week
