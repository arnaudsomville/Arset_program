# Development of Site-specific Exposure Data with Earth Observations, Part 2/3

`https://www.youtube.com/watch?v=R5JdP8msTbE` · id 121 · 1:42:57 · module 51 — Transforming Earth Observation (EO) Data into Building Infrastructure Data Sets for Disaster Risk Modeling

[00:07] Welcome back to the ARSET training transforming Earth observation data into building infrastructure data sets for disaster risk modeling.
[00:17] My name is Brock Blevins and I'm an ARSET trainer based at NASA's Goddard Space Flight Center in Greenbelt,
[00:24] Maryland. Maryland. It is a pleasure to welcome you all to the second part of this three-part webinar series.
[00:32] Let's do a quick recap of this training and why we're here. Why is climate risk assessment important? So even with the drastic
[00:42] reduction in carbon emissions, short and medium-term impacts are inevitable. Climate change impacts and risks are becoming increasingly complex and
[00:51] difficult to manage. Climate change impacts on human infrastructure are not well understood and can vary drastically by location.
[01:01] So understanding community-specific risks to climate change is critical to evaluating adaptation strategies. So here we are in part two where we're
[01:10] going to talk about the development of site-specific exposure data with Earth observations. It will once again be a
[01:17] two-hour part with presentations and a question and answer session at the end. end. All materials and recordings from each
[01:25] session are available on the training web page and there'll be one homework assignment which will be posted on
[01:31] October 10th and will have a due date of October 24th. 24th. A certificate of completion will be
[01:38] awarded to those who attend all live parts and complete the homework assignment by the given due date. A
[01:45] little bit on the prerequisites. We talked about having an idea of the fundamentals of remote sensing, basics of GIS and databases,
[01:55] but also the basics of statistics and sampling. Links to each of these trainings are provided and we encourage
[02:02] you to go through them to familiarize yourself with the content related to this training. Please put your questions in the
[02:09] questions box and we'll address them at the end of the webinar. Feel free to enter your questions as we
[02:14] go and we'll try to address all questions during the Q&A session. The remainder of the questions will be
[02:19] answered in the Q&A document which will be posted to the training web page about a week after the training.
[02:26] So without further ado, I will introduce you to our trainers today. We have Greg Yetman, Yetman, associate director for geospatial
[02:35] applications at Cason at Columbia University University and Taylor Hauser, geospatial data analyst at Oak Ridge National Laboratory.
[02:48] Laboratory. Greg, Greg, you're up first. Thank you very much. Thanks very much, Brock. Uh, it's a pleasure to be here today to talk to you
[02:58] about uh, first off uh, uh, working with data to merge building footprints with infrastructure data sets to improve uh, infrastructure data sets
[03:10] for use in Hazus, the Hazards US package for flood impact analysis. Yeah, so the obj- objectives of this
[03:18] lesson today are to be able to understand the techniques for attributing infrastructure, that is assigning uh, attributes on building
[03:27] details to infrastructure data. Identify issues in this attribute transfer, specifically when you're talk about uh, issues that arise because different
[03:35] spatial models and the difference in locational precision between data sets. Uh, select the right strategies for transferring
[03:44] transferring uh, your attributes and just by way of how we're talking about different possible sources of data,
[03:50] you'll you should be able to identify common sources of infrastructure data and building footprints. So, So, in 2012, New York State and New York
[04:05] metro were rocked by Superstorm Sandy. It was a large storm, large hurricane that hit, and you can see some of the photos of
[04:13] flooding and damage across the bottom. And there was a lot of examination of was was New York State, New York City, different
[04:22] agencies prepared for this kind of storm. storm. If this kind of storm hits again in the future, what could we do differently?
[04:29] And what data, key for today, what data are needed for the next storm? What would be really useful for preparation?
[04:36] And it was noted that risk assessment requires more than just population data and building locations, but you need
[04:43] information on vulnerability, building characteristics, population vulnerability as well. Although we won't talk about that today, but both are really important for
[04:53] understanding risk and potential impacts. impacts. Um so, prior knowledge, some some things I'm assuming you know at least a little
[05:02] bit about today would be the basics of geographic information systems. That is that GIS is used to
[05:10] maintain and query spatial data, and it lets you do spatial analysis. That is, overlay different layers in primarily
[05:19] today we're talking about vector space. So, where you can overlay layers like building footprints with other layers,
[05:26] tax parcels, or um critical infrastructure data, and establish relationships as in which building is inside which parcel, or
[05:37] which critical infrastructure point location is closest to which building. And GIS enables all of this. Um the fundamental
[05:45] nature of vector GIS space is is a simple data model of points, which is just a XY coordinate pair for every single
[05:54] point. point. Lines, which are ordered series of XY coordinate pairs. Uh and points are of course have no dimension, they're
[06:02] no area, no length. Lines have a length but no area, they're one-dimensional. And then polygons, uh like tax parcels or building
[06:09] footprints. We've got a closed series of XY coordinate pairs. And the other key power of GIS is how
[06:16] individual geographic objects, like shown here on the bottom right, built in the building footprint, um are linked to database records. And so on
[06:26] the right you see this table of the county, municipality, uh the source of the data, and the roof type, uh zero
[06:33] being flat, and the occupancy class or how the building's used. This is educational class two. In fact, this is
[06:40] the office building where Juan and I work. This is the the building on the campus where we work.
[06:45] So, So, GIS lets you do that kind of query and look up uh within layers and across
[06:51] layers, which makes it really powerful. And we'll see an example of GIS analysis for transferring attributes from one
[06:57] source to another. So, our flood impact analysis, uh we're using HAZUS, or actually the algorithm from HAZUS, which is short for Hazards
[07:08] US, Haz- Hazards United States. Uh and it's an extension to GIS software that lets you do impact analysis for
[07:16] multiple hazards. And in this project we did it for flood impact analysis. Um so, for flood impact analysis, you
[07:24] need to know the flood depth under different scenarios. Um this is typically used for planning or preparation, not for post disaster
[07:32] response. So, the flood depths are hypothetical or or built on data under different scenarios. And we'll talk a
[07:40] little bit more about the flood scenarios in a bit. Um, and then for your buildings, you need to know uh information about them,
[07:48] attribute about them, attributes about them, their value, the the amount of money the the the building itself is
[07:54] valued at. Uh, the occupancy class, that is is it residential, people live there, industrial production, commercial or
[08:03] retail or commercial also includes service like office buildings, or a mixed-use case where you for instance have ground-floor retail with
[08:12] residential buildings over top. And then institutional, which can be anything from schools through hospitals through churches. Um, and typically or
[08:21] actually as a requirement for HAZUS, these classes are broken down further. I haven't listed them all here, but
[08:28] residential for example goes from residential one through residential nine. So, nine different subcategories of residential, things like whether it's
[08:36] an apartment block or a single-family home, detached, semi-detached, all those characteristics are in those residential categories. Commercial and industrial
[08:45] are divided into three different categories as well. Uh, and the institutional is typically um um sourced by type, you know, a church or a
[08:54] hospital or a school or university, that sort of thing. Um, and then key for damage during a flood
[09:01] is what's known as the ground floor or first floor elevation. That is not just the elevation of the land land at
[09:10] the foundation of the building, but more importantly, what's the lowest point where water can enter. So, there's the
[09:16] sill on a door, how far above ground level is that, or a window sill close to ground level or below ground level. Um,
[09:23] those are our key points or garage doorway. Those doorways are are places where water gets in and causes damage
[09:29] during flooding. Uh, so knowing the height or approximate height of that is key for for estimating damages.
[09:37] And then critical infrastructure data. So, critical infrastructure includes not just buildings, but power plants, uh power transmission lines, lifelines like
[09:47] key highways. Um all these things can be analyzed with Hazus uh to get an idea of what could be
[09:54] interruptions to service during a flood or other other disaster. Um and today we're going to focus in on the building
[10:01] exposure and attribute in buildings and the building damages. But, we also talk about critical infrastructure and transferring uh information from
[10:10] critical infrastructure from point sources like address lookups to the building footprints. And finally, the the flood data we're
[10:18] using uh in this project are two different sources. We've got FEMA, the US uh Federal Emergency Management
[10:25] Agency flood data uh that's modeled and uh flood data that was modeled by Stevens Institute for coastal flooding
[10:32] along the Hudson River uh areas that um flood due to storm surge. So, key for today is talking about how
[10:42] we compiled this statewide building footprint database. So, in New York State, a number of municipalities and counties had um building footprint
[10:52] databases, but there was no building footprint data uh for the whole state. Uh and we're talking about the whole
[10:59] state outside of New York City. New York City maintains its own its own data. Um and so, we assembled it from multiple
[11:05] sources. We we downloaded online or contacted directly different municipalities and used their databases. Uh we used the Microsoft building footprints,
[11:16] which are footprints that were extracted from high-resolution imagery using machine learning techniques. Um so, the footprints were automated and
[11:25] they did have some quality issues. So, they required a lot of work uh to improve the quality and and replace bad
[11:31] footprints, fill in missing footprints, um things like that. And then we extracted footprints from lidar data, open lidar data that's
[11:40] available for New York State. New York State Clearinghouse has lidar data. Um and that lets you do a good job of
[11:46] extracting building footprints. Um we used Esri ArcGIS software and an algorithm they have to do track building
[11:54] footprints footprints and then review them all and make sure they are valid footprints before we included them. And then as a last
[12:00] resort, the most labor-intensive part was we manually digitized um um from imagery, uh optical imagery, high-resolution imagery
[12:09] uh that uh is available for New York State. We just traced the outlines of the buildings, really roof outlines
[12:15] rather than buildings because you from looking down from above, you can't quite get at the the foundation. You're really looking at
[12:21] the roofline, which often overhangs the foundation. So, once we had these building footprints all assembled, it was key to
[12:31] have the attributes I talked about that HAZUS requires for um um using the data in a model.
[12:38] So, the critical infrastructure data we compiled from primarily two sources, uh New York State and the federal uh
[12:47] uh Department of Homeland Security has a national-level national-level uh database. And when we merged the two of them, we still found that there were
[12:53] some omissions and some out-of-date information on the critical infrastructure. So, we did some manual collection from municipalities and county websites.
[13:04] Uh so, the critical infrastructure all came in as points, uh not always well-located points. They were typically done by address matching.
[13:11] So, somebody enters a street address and a point gets placed at a certain distance along the road based on
[13:19] uh dividing a a street road into segments, a street or a road into segments. segments. And so, that has some locational
[13:26] inaccuracies. inaccuracies. Um so we joined the critical infrastructure points to the building footprints just by finding the building footprint that a a point
[13:36] fell inside or was closest to. And especially for the footprints that were actually sorry the the critical infrastructure
[13:43] points that were outside of building footprint locations, we did validation to make sure that we moved the attributes from the critical
[13:52] infrastructure points to the correct building footprint. And we would use common sources like Google Maps or other
[13:58] online lookups to to see if we got the building building the right building footprint for the critical infrastructure.
[14:05] Uh we had to alter our data model partway through cuz we realized that there were a lot of co-located services
[14:10] in single building footprints. So a fire and police station jointly housed in the same structure. So we couldn't just
[14:18] store store fire or police or school or hospital. We had to to handle um multiple instances of critical
[14:27] infrastructure inside the same building footprint. And we ended up handling this by not adding additional fields but by concatenating together the
[14:36] different categories inside the field. So in our critical infrastructure field, you can list multiple uh types of critical infrastructure that
[14:43] are there within one building footprint. And on the right side of this slide is the list of the critical critical
[14:50] infrastructure facilities uh that were included in the database. So you can see things that are related to
[14:57] to um um emergency operations, fire, hospital, and response but also key infrastructure like power plants and wastewater
[15:05] facilities that may um um be vulnerable during a flood to um interruption in operation and losing power or losing um
[15:16] wastewater treatment is an issue for uh people, you know, being in the dark or or not having power that's required
[15:23] for for uh key activities or the wastewater treatment plant filling can be a problem for potable water and you may need to
[15:31] issue a boil water um order or something like that. So, these attributes are key. And then the
[15:37] educational, church, um you know, institutional type buildings, they're commonly used for uh places for people to gather or
[15:45] shelter. So, uh identifying their locations is key as well. So, the other thing we needed to do was
[15:55] assign building value and building occupancy class or the use to each individual building footprint. Um so, fortunately we obtained uh permission to
[16:05] use a statewide uh uh building data set on tax parcels. So, on the right you see those bluish purplish
[16:12] uh polygons that are the tax parcels and overlaid on top of those are the building footprints that we created. So,
[16:19] the tax parcels included the occupancy class for each of the for for each of the parcels and the assessed value of
[16:27] the land and the assessed value of the building contents or the building and its contents, sorry. Sorry, not its contents, just the
[16:36] building itself. The assessed value for the building and the assessed value for the tax parcel. Um the land was included in the tax
[16:45] parcels. parcels. So, So, we looked at a case where many parcels contain multiple buildings. This was pretty common.
[16:53] Uh it's not shown here, but it's pretty typical for, you know, a tax parcel to have a
[16:59] residential home and a garage that's separate uh building from the residential home or a case where you've
[17:06] got uh something like uh apartment complexes that are all part of one tax parcel, but there's multiple
[17:12] buildings or commercial space uh institutional space where you have one tax parcel for the owner and many many
[17:19] buildings across it. So, in this case, we just divided the assessed value of the buildings across all of the buildings within the tax
[17:29] parcel based on the area of the buildings. Unfortunately, we didn't have complete information on the number of
[17:34] stories, so we couldn't compute volume uh, cuz that may have been a better slightly better measure of
[17:40] uh, of of building value because a seven-story building is obviously worth more than a one-story building in in
[17:47] most cases. Uh, but we did use the building area as a as a weight up assign or apportion the value uh, for
[17:56] the tax parcel to the multiple buildings. buildings. So, that was one issue we had to deal with. And the second one that was pretty
[18:02] common was that many buildings crossed tax parcel boundaries. Um, so buildings were split by tax parcels and sometimes those splits were
[18:14] because one building um, or two buildings built side by side with no split in the roof line were recorded
[18:22] as one building. Um, so that's the example you see on this corner on this um, corner two tax parcels where this building
[18:30] crosses both. And that's just um, two buildings that are built together with no roof line, so the algorithm to
[18:38] extract the rooftops extracted as one. So, in this case, we would split the building in from one into two buildings
[18:45] and each part of the building would get the uh, value and the occupancy class from the tax parcel that it falls
[18:51] inside. inside. Really common also were issues like this where these buildings extend beyond the tax parcel. Uh, sort of looks like into
[18:59] the sidewalk or into the street, but really it's just a mismatch in spatial accuracy between the building footprints
[19:04] and the tax parcels. Or um, buildings slightly cross the the tax parcel lines. And again, this is usually due to a
[19:14] spatial misalignment. The tax parcel data were not collected from the same sources and perhaps not as uh precise as the building footprints or
[19:22] vice versa. The building footprints were not as precise as the tax parcels. We didn't have a good way to know which was
[19:28] correct. So, we left the buildings where they were and we transferred the attributes from the tax parcels. Um
[19:34] after we split the the buildings by the tax parcels, we had an algorithm to uh decide whether
[19:41] that split was a case like here on the corner where we wanted two buildings or a case like here where there's a just a
[19:49] small part of the building that crosses the part the parcel line and that should stay with the original building.
[19:57] And so, that algorithm looks like this in GIS. Essentially, uh we performed a operation called an identity, which is a
[20:05] GIS operation. It's similar to a union or an intersect, but um what it does is it splits the building
[20:12] footprints, which is our target uh data set, by the tax parcels. And if there are parts of the tax parcels that fall
[20:20] outside of the building footprints, they're discarded. So, the result is just the building footprints, but split by tax parcel with the tax parcel um
[20:28] attributes. attributes. We then calculated the area uh updated area for each part of the buildings after they've been split uh as
[20:37] a percent, right? So, a percent of the original building area that was split off. Um so, you if a building was split
[20:45] into two pieces, each piece would have a percentage of, you know, let's say 90% and 10% um and we would we ended up
[20:53] selecting small features, features with a percentage of 20% or less um and merging those back with the original
[21:02] building footprint so that they were not stored as a separate building. Uh and that's the the dissolve operation here.
[21:09] And so at the end you have your buildings with the parcel attributes, a number of which have been of the
[21:14] buildings have been split into two or more when they cross cross parcel lines. Other ones that cross parcel lines were
[21:20] reassembled back into the original building footprint and just got the um tax parcel attributes from the largest
[21:28] share of area uh of overlap between the building footprint and the tax parcel. Right? So at the end of the day,
[21:36] um um the tax parcels were not the definitive geography per se, they were what was used to transfer the attributes and
[21:44] split some of the buildings, select some of the buildings into multiple uh building footprints into multiple building footprints.
[21:51] And so that gives us our complete set of building footprints with assessed value for each building and the occupancy
[21:59] class for each building as well. And so the next thing we um had to deal with um
[22:07] um were some cases in the municipal uh sorry, the the statewide tax parcel database where we had stacked polygons.
[22:16] So here would be uh condos or co-ops um where you had multiple units over each other, right? So in a co-op or a condo,
[22:26] each each unit can get have its own tax assessment, uh but geographically they're represented as polygons stacked
[22:33] on top of one another. And so when we were trying to do that relationship between the multiple
[22:39] tax parcels that overlaid with a particular building footprint, um that was a problem because we didn't want to take just one
[22:47] of the tax parcel values and occupancy class, although generally occupancy class was the same for all of
[22:55] them, but you could have a condo with ground floor retail, for example. Um but we didn't want to assign the
[22:59] value from just one part of that to the building. So, what we did is for the tax
[23:04] parcel polygons that were stacked or overlaying exactly on top top of each other, we created one feature out of
[23:11] those that summed the assessed value and then included the the occupancy class or classes plural as mixed
[23:20] mixed for for that so that we had one just one geometry to transfer attributes for. Um yeah.
[23:27] And the second issue we had in uh um attaching attributes to the building footprints were the ground floor
[23:33] elevation or first floor elevation, which I talked about as as key for the flood impact assessment process,
[23:39] is generally not available in the building footprint data or the tax parcel data. There's no good database of
[23:45] the ground floor elevation. But, the tax parcel data do contain uh a year built, the year constructed, uh for
[23:53] any structures on the on the property, right? Whether it's commercial, industrial, or or residential building. Um and we use that to impute the ground
[24:02] floor elevation. And what we did is that we looked at various building codes for New York State. Um they changed over
[24:07] time, time, uh but they specify a minimum ground floor height or first floor elevation. And depending on the year built, we
[24:16] could look up what the minimum ground floor elevation was according to the building code uh for the occupancy class
[24:22] of the building. And it could vary by commercial, service, or or um residential, industrial, um different different first floor elevations. And
[24:32] then we assign that minimum first floor elevation elevation uh to the structure depending on the year it was built. So, this gives gives
[24:38] us a good approximation of which what the minimum uh first floor elevation is for all the buildings in the data set.
[24:47] Uh and that that we think gives a much better much more accurate and precise look at flood impacts than a traditional
[24:55] approach in Hazus, which is to approximate it at the census block or census block group level, where you just
[25:01] have one ground floor elevation height for everything within the same census block or census block group, uh which is much more generalized.
[25:11] Of course, um um each building now needs to get the flood depth, and so we used the Federal
[25:20] Emergency Management Agency FEMA DFIRMs, or digital flood information maps, um for inland areas of New York State,
[25:28] uh that is riverine flooding, and they published two scenarios, uh 500-year uh flood return period, or 0.2%, and the
[25:37] 100-year, or 1% probability in any given year of a flood. And those have different depths. So, we took the the
[25:44] digital maps and calculated the depth based on a digital elevation model, and we could then get the maximum depth that
[25:50] each building was exposed to under each flood scenario. Right? So, we added to each building the the flood depth
[26:00] information. information. Um and these are key for estimating damages. damages. We then used the HAZUS uh flood model
[26:10] damage curves. Um so, HAZUS operates inside of Esri's ArcGIS software to to do the analysis, but because we were
[26:17] working with um millions of building footprints, we actually extracted the flood curves from the HAZUS uh model and ran it separately in a
[26:27] Python script. Um it worked much faster for that many building footprints. But, on the right, you see three damage
[26:34] curves for three different categories, one for residential, one, industrial six, and government one. Um and those three curves are based on at least, I
[26:45] think, uh 20 years worth of data that are from recorded flood floods in the United States, and they would take
[26:52] the the depth and the building characteristics the the building type and the first floor elevation and match it up with the amount of
[27:01] damage that actually happened for the building and then turn each of those different different occupancy class combined with first floor elevation into
[27:11] a curve that would show you the damage as a percentage. Um and of course we can take the
[27:17] percentage damage and apply it to the assessed building value and come up with the um the the hypothetical damage to the
[27:25] building in dollars uh in US dollars. And And so we used each of these curves to look
[27:32] up the damage for every building under both flood scenarios and in coastal areas we're using the Stevens data which still give us flood
[27:41] depths under those two scenarios. Um to assign a building damage in dollars to every building. We have
[27:48] haven't released the the damages for every building at the building level. What we did is we aggregated it up to
[27:56] census and municipal units so that you could have a total estimated damage for a given flood scenario for a
[28:02] municipality or a census unit. And the reason we're doing that is that the the reliability of the damage estimate
[28:10] for any one particular building in dollars is is not um perhaps great because a very small difference in flood depth can make a a
[28:19] large difference in the the damage impacts. So we didn't want to release these numbers as an authoritative
[28:24] estimate of damages under particular flood for individual buildings. We wanted to to look at estimates for planning at the municipal or census
[28:33] level. You can however look up in the data online the impact assessment data for individual buildings in
[28:42] categories of damage. So that would be slight, moderate, significant, or actually destroyed is not one of the
[28:52] ones we use. Uh slight, moderate, or significant damage, and no damage as well as a category. Sorry, a a mistake
[28:58] on the slide. That was an older nomenclature we had in there. Um so, each of those is is assigned to
[29:05] the building footprints. Um Um So, here's the the proper damage categories, right? So, individual buildings were categorized into damage
[29:16] categories of none, slight, moderate, or substantial damage uh for both the 100-year floods. Uh and we we you may have learned elsewhere that
[29:26] 100-year flood is is not a flood that occurs every 100 years. It's a flood that has a 1% probability of occurring
[29:34] in any given year. So, even if a 100-year flood happened last year, there's still a one proba- 1%
[29:41] probability would hit the same area with a a uh the same level of flood in the next year. And the
[29:48] same for the 500-year flood, which is uh 2/10 of a percent probability of occurring in any given year.
[29:55] Um So, on the right you see a table in the bottom right corner and to give you
[29:59] an idea of the data that's available. So, we've got the county and municipality, uh the storm return
[30:05] period, and the building and contents loss uh in US dollars, uh and the number of buildings damaged.
[30:12] Um in um um each building, we've also got it flagged by whether or not it's critical infrastructure. So, you can look at
[30:20] critical infrastructure building footprints and know whether or not it's uh going to be damaged um slight, moderate, or substantial under both
[30:28] flood scenarios as well. And then finally, attached to each building footprint are recommendations for climate vulnerability. New York
[30:36] State released a report on climate adaptation that included uh key strategies for reducing flood impact and improving
[30:45] vulnerability. And so, what we did is we used a lookup of the building occupancy class for all the buildings that are in
[30:51] potential flood areas and assigned um recom- the recommendations from the adaptation report to each of those building footprints. Uh so, here's an
[31:01] example for a residential uh flood uh sorry, a residential building that's within a model flood zone. Uh obtain flood insurance,
[31:13] uh elevate your furnace, water heater, and electrical panel, uh especially if they're in the basement, right? So, it's
[31:19] it's common for lots of damage to uh equipment that's in the basement of a home cuz that's the first place to
[31:24] flood. flood. Um and you could install check valves, that is valves to stop um water from backing up through the sewer. And
[31:31] finally, um incorporate flood openings below below the the ground floor elevation entrance uh and ensure waterproof building
[31:41] materials uh below grade so that you can stop the water from entering and give it a place to drain once it uh
[31:48] if it does enter. And then, right now I was going to pause and show you um a
[31:55] example of the online application that's available. Uh we this URL is in uh the materials for today, but uh these
[32:05] data have been released as a web mapping application for New York State. So, there's a link where you can download
[32:11] all the data, but here we can explore uh all of the layers that were made available for New York State. So, if I
[32:18] click on the explore button, we'll see at first counties, and it tells us um the different the primary uh
[32:25] sorry, the uh the number of buildings uh per household at the county level. But, once you zoom in, you'll see lots of
[32:32] detail at the building footprint level. So, here I've zoomed in on Rockland County County um um and Westchester County and the Hudson
[32:39] River. River. Uh, Lamont Doherty, this is again is the campus where where our offices are. But if I go a little north here into
[32:46] Piermont, we can see some areas of modeled flooding. So this is showing flood depth, the darker the blue, the
[32:54] greater the flood depth. Uh, for the 500-year scenario, uh, in and around Piermont. And so if we zoom in even
[33:02] further, we can see the individual buildings and you can click on a building and it should pop up in a
[33:07] moment with, uh, the attributes for the building. So we see, oh, it actually gave me the flood attributes. Uh, should
[33:14] also pop up. It's doing a query here. Uh, the service is probably waking up. I'm probably the first one to use it
[33:20] today. I tested it yesterday but not today. I'm going to hopefully it'll pop up, but here it's just showing us the properties
[33:28] of the the flood data. But as always the case with live demos, it's not pulling up the building
[33:37] attributes for me right away. Let me try again and pull up the attributes for the building. There we go. So now it came up right
[33:46] away. So here's the building footprints for Rockland County. The building footprints are served by county. Um, and the general, you know, this is
[33:55] residential one, which is typically single-family home. Uh, the imputed first floor elevation, 2.75 ft. And under 100-year flood,
[34:04] there's no damage in the 100-year flood model, so there's no flood depth or no significant flood depth. Some areas can
[34:10] have very low flood depth modeled, but that would result in no damage. But under a 500-year flood, it would be
[34:17] substantial damage, uh, modeled for this. And so we can see the adaptation strategies that are recommended and the
[34:24] sources for those, so you can link uh, to each of the sources for each of the recommendations.
[34:31] recommendations. And if I zoom out again and we a little further up the Hudson, we can see for
[34:35] instance some areas in South Nyack that, you know, see the same thing under the 500-year flood they're shown to be
[34:40] stormed. Um and impacted. You can choose which layers are visible. So, by default the critical infrastructure is turned
[34:48] off. off. Um and the both the 100- and the 500-year floods are turned on. I'm going to turn off the 500-year flood. And you
[34:56] see a significant difference in the model flood extent between the 100-year and the 500-year. You have to go much
[35:01] further to find something that's potentially impact impacted by the um 500-year or sorry, the 100-year flood. Um because the flood depths are so much
[35:10] less. less. And I can click on that building footprint footprint and see that oh, sorry. It's returned.
[35:17] I missed the footprint in that the um 100-year flood extent. So, here we can see that it's actually showing slight
[35:24] damage under 100- and the 500-year um um category flood. And just to show you um what it looks like, here's the critical
[35:34] infrastructure. Um so, each of the buildings is tagged with whether or not it's critical infrastructure. But, we've
[35:40] added these points so that it stands out more. And if we look at the legend, you can see the types of
[35:46] critical infrastructure that are that are are shown here in the database. So, a few more than actually are listed on the slides cuz I
[35:53] I think I overlooked the prisons and libraries as critical infrastructure. Um and so, that's the map viewer that's
[36:00] available again for all of New York State. Um another if you're in New York State or you know
[36:06] a place in New York State, you can look up the address and it'll get you pretty close to the building footprint.
[36:10] Uh so, you could find where you live or where you know somebody who lives in New York State and see if they're within the
[36:16] modeled flood extents. Um thanks for listening today. I'm going to hand it over to Taylor Hauser who's
[36:24] going to talk about using EO data to develop building structures data sets. Thanks again. Taylor? Thank you everyone. My name is Taylor
[36:38] Hauser. I'm a geospatial data analyst for the built environment characterization group at Oak Ridge National Lab. And today I'm going to be
[36:44] talking about the USA Structures project in a talk titled using Earth observations to develop a building structures data set.
[36:55] The outline of my talk is pretty simple. I'm going to go over the background and motivation for this work. And then I'm
[37:00] really going to dive into the workflow. And that workflow can be divided into two major parts. From imagery to polygon, and then
[37:07] there's a post-processing workflow where we try to enrich those polygons to correctly uh to correctly relate to the structures
[37:16] with significant attribution. So the driving force behind USA Structures was that in 2016, the United States experienced 32 major disasters.
[37:29] Six of it which involved flooding emergency declarations. And during that time, emergency preparation, response, and mitigation had all been hampered by
[37:39] the lack of accurate current data on the precise location and elevation of buildings. buildings. So ORNL proposed a solution that they
[37:48] would build and maintain the nation's first comprehensive inventory of all structures larger than 450 square feet. So this is by no means just my work.
[38:00] There has been a significant amount of contribution over the years. This is a rather long running rather long running project since 2017,
[38:09] even though we did some preliminary work in 2016. And it's taken a wide variety of expertise and and folks to to be able to
[38:18] accomplish this work. So our progress to date um uh has been going according to plan. We're pretty
[38:27] excited. We just completed phase two. And in phase one is where we really focused on that imagery to polygon. We
[38:36] went through and downloaded image images that covered all of the United States and the majority of its territories, and
[38:43] we extracted these buildings. And then phase two, which we just completed last month, is where we really focused on
[38:50] that latter part, which is where we go we take that geometry and we enrich it with a lot of attribution to be used in
[38:56] emergency response and damage modeling assessments. assessments. So, you can see here these are our total feature counts for each data set that we
[39:04] produce. So, over 125 million building detections. detections. And if you want to look at this data or
[39:12] use this data, it is available on FEMA's geospatial disaster platform accessible by that link on the right.
[39:22] So, here's the general workflow for USA Structures. This can be broken down into three major parts. The first part is the
[39:30] imagery. imagery. Um when we define an area of interest, we will go and crawl Maxar's data catalog for all of the current imagery,
[39:41] and we'll begin building a mosaic of imagery for that AOI. And that and that the priority of the
[39:47] images are given to the most recent image with the least amount of cloud cover at the most appropriate viewing
[39:55] angle. And then we'll take that information information and we begin building this mosaic. And often times, for example, here in Texas,
[40:03] we ended up with 4,862 images, which is around about 3.7 terabytes of data. And then once we have all of these
[40:12] images, images, we will pan sharpen them to around to just under a half a meter resolution and
[40:19] often times that will balloon the data to pretty significantly and for the case of Texas it ended up being about 44
[40:27] terabytes of data. That image on the right just shows you the outline of each image that we used. And when the images
[40:34] overlap, we choose the imagery that meets our requirements, our specifications. So, the newest image goes on top.
[40:45] Once we have this image mosaic, we will begin we will begin developing a convolutional neural network and we train that neural network to
[40:54] identify building detections and to delineate that building detection in the satellite imagery itself. And we do that by selecting 500 by 500 pixel
[41:05] image chips that we then have analysts go through and manually digitize each building each building in the image chip. And so, we have done
[41:16] this close to 60,000 image chips for the United States. And we have around we have just over
[41:23] 25,000 positive samples. And a positive sample is an image chip that actually has a building in it. And we do also
[41:31] train the neural network to identify when there is no building and that is when we implement a negative sample. And
[41:38] so, that would be a 500 by 500 pixel image chip where there's no building. So, for example, a
[41:45] lake or maybe an agricultural field. And this really helps us reduce the false positive rate of the convolutional
[41:52] neural network's output. And then then we And then the last part of the workflow is really about taking
[42:05] those polygons, making sure that we validate it and then enrich it with significant attribution that can be
[42:11] used. used. So, here's some of Here's the example of some output uh the raw output from the convolutional
[42:19] neural network. Just to describe what you're seeing here, you're seeing the actual imagery that was used to delineate the
[42:26] structures and then the convolutional neural network went through and essentially digitized all of the buildings. So, anything that you see in
[42:34] purple purple is a genuine structure detection. And we're providing examples from Washington to Florida to Pennsylvania to
[42:44] Colorado Colorado to show that we are able to do this in a wide variety of geographies, in a wide
[42:50] variety environments. So, we have East Coast Washington for example and I'm sorry, East Coast Florida for example
[42:57] and then West Coast Washington. And we do provide uh we're showing Colorado here cuz oftentimes mountain is terrain is one of
[43:05] the more difficult uh terrains to to extract building features from. So, once we have these geometries, we
[43:15] need to find some way to verify and validate this output. After all, this is a hundred, you know, we're talking about
[43:21] hundreds of millions of geometries and there's no While we do have a manual QA process, uh there's no way that we can
[43:29] put eyes on every single structure detection. detection. So, a lot of the work that I focus on is
[43:35] how do I how do I develop a model that can evaluate these structure detections, grade them on some sort of quality and
[43:43] then assign a confidence value to that structure. structure. So, I developed the verification and validation model, which is a quality
[43:51] assurance quality control model that's designed to evaluate vectorized or or uh sorry, vectorized structure or building detections.
[44:00] detections. It's Whoops. Its sole purpose is to identify type one error, also known as false positive. And so a false positive
[44:08] in this case is a building detection where there's no building. So this could maybe be a rock or just some sort of
[44:16] polygon that was generated by the neural network that doesn't represent a structure. structure. Um it is a supervised binary
[44:23] classification ensemble and for those of you who have a data science background, the actual algorithm that I use is
[44:30] called a gradient boosted decision tree. And here are some of the results of the VVM. VVM. Um I really like this slide because what
[44:41] you're seeing here is you're actually seeing the combination of two machine learning models. We're getting the geometry from the convolutional neural
[44:49] network network and then we're getting the symbology or the color from the verification and validation model. And what that model outputs is a
[44:58] probability from zero to 100 where zero means it has a high chance of being a false positive
[45:06] and 100 means it has a very high chance of being a true positive. Um and so that's also color coded here
[45:13] from anything that's red to yellow is considered a false positive and anything that's that cyan or blue dark blue color
[45:21] is considered to be a true positive. So this is the way that this is how we go
[45:25] through and even if the convolutional neural network for some whatever reason um begins generating some false positives, we can quickly identify those
[45:33] and remove them from the output. So for example, on the left side of your screen, there's Camp Bell, Missouri.
[45:40] There's some texture in these agricultural fields that generated a significant amount of false positives and then our secondary model went
[45:47] through, was able to detect these and automatically remove them. St. Peters, Missouri in the middle is an
[45:54] excellent example where both models are in high agreement. The convolutional neural network is generating uh valid geometries that we expect to represent
[46:04] structures and the QA QC model is going through and you know, really being able to verify that these are geometries and
[46:12] they're organized in a way that we would expect them to be organized. So, once we have once we've gone through
[46:19] a the automated QA process, then we do have some analysts go through and review manually just to make sure everything is
[46:26] working. We always try to have a human in the loop. And then the next step is to go through
[46:32] and to regularize the geometries. And the regularization is just a process of of removing non-incident geometries from
[46:43] each polygon uh, to make them more familiar shape. There are multiple benefits to regularization. Um, removing so many
[46:53] geometry removing so many vertices from each geometry greatly reduces the the overall size of the data set itself.
[47:02] After all, we're actually removing the majority of vertices when we do this. So, we're talking about billions and
[47:07] billions of vertices that we that we remove from the data set. Um, it also helps improve the render
[47:14] speeds for GIS software. So, it makes it a little bit more user-friendly. And one of probably the most interesting
[47:21] uh, interesting outcomes is that it takes these it takes these really jagged polygons because we're going straight from raster
[47:30] to vector um, and it turns them into more familiar shapes. One of our biggest critiques that we got from our sponsors is that
[47:37] the analysts had a hard time trusting this data even though that we knew it was accurate because we had done all
[47:43] this work. Those shapes that were being produced just weren't familiar or they didn't meet the expectations of what analysts
[47:51] thought. So, regularization is a way to really kind of properly go from that raster pixel space into vector space and
[48:01] have a genuine nice representation of a structure. structure. There are a couple of drawbacks with regularization. It's computationally
[48:11] expensive. Often times these algorithms can can take a very long time to run. Um and they can sometimes they can cause
[48:19] difficult to find issues. So if you look at the the middle example where the purple polygons are, you'll see that
[48:26] middle polygon has actually been manipulated in a way where it's overlapping two other polygons. And in a
[48:33] building data set, we generally try to not have any overlapping polygons. And we really if there are neighboring
[48:41] polygons, we'd like for them to be contiguous and not overlapping. And the last drawback is that this is
[48:48] just another complex process to get in between the imagery and the actual output of of the actual data set that
[48:57] we're producing. So once we have the geometries, they've been QA'd, they've been regularized, it's not just good enough to say, "Hey,
[49:10] there is a building here." More often than not, the moment you hand over a data set of buildings, the first
[49:17] question a user's going to ask is, "Well, what kinds of buildings are these?" And so we have developed out a
[49:23] schema and in phase two, which we just completed, uh we attempt to to to tackle this challenge by going through and we
[49:31] have a rather sophisticated process of trying to assign an occupancy to every single structure in the United States. And so our
[49:41] occupancy domain, it consists of um residential, commercial, industrial, agricultural, assembly, nonprofit, government, education, utility, and miscellaneous. And then
[49:54] lastly, unclassified. And the way that we go about this is kind of a three-tiered process. The first step is that we use
[50:03] The first step is that we go and we collect a lot of geo foundational data from the HIFLD
[50:10] data sets. If you're not familiar with HIFLD, that is Homeland Infrastructure Foundation Level Data. Data. And they are openly accessible data
[50:20] layers. If you just Google HIFLD open, you'll you'll go there. And we take all of these data sets that they generally
[50:26] have a particular theme that aligns with our occupancy domains. And so we'll do a we'll do a various
[50:33] various spatial joins with that data to our USA structures and we'll derive a use out out of that.
[50:42] And then anything that doesn't get labeled by that process, we then move to uh Census housing unit data and LightBox
[50:49] parcel data. Where we then intersect any remaining unlabeled buildings with with those data sources and then we try to
[50:58] aggregate or categorize various information from those data sources into our occupancy schema that you see on the
[51:05] right. right. And then if there's still anything that is remaining that is unlabeled, we then have another machine learning model that
[51:16] can analyze building morphologies. And it'll analyze the building morphology of a various structure and it'll be able to classify it fairly
[51:25] accurately as either residential or non-residential. So I mentioned building morphologies and Gauntlet is a tool that I've developed
[51:36] that uh assists with calculating building morphologies. Gauntlet can generate over 65 various measures. And a morph a building
[51:46] morphology is just a very precise description of the building itself and its very physical characteristics and also its relationship to surrounding
[51:55] buildings themselves. And so Gauntlet is the tool that we that we use to do this. It'll go through and generate about 65
[52:02] different measurements. Some of those measurements are very simple measures of geometry like area, perimeter. Uh some are engineered and they describe a
[52:11] little bit more complex. These are complexity ratio, compactness, roughness, things like that. And then there are also contextual
[52:19] uh contextual measurements and these come from spatial point pattern analysis, if you're familiar with that domain, and also scale relationships. Um
[52:28] and this could be the example of just the number of structures that are surround the one particular building
[52:34] you're trying to describe or maybe even the pattern of how those buildings are placed within a certain amount of space.
[52:42] And so we calculate all of these building morphologies for each of these structures. structures. And then the resident the res type model
[52:49] will analyze those building morphologies and produce either residential or non-residential. non-residential. Um and again, the residential the res
[52:58] type model is uh is only meant to fill a data gap. It's not uh we we try to rely on the
[53:05] most authoritative data first and then wherever we have a data gap, then we use this model to fill in those gaps.
[53:11] And the res type model has been trained on labels from parcels. Here's an example of output for the res
[53:20] type model. This is very similar to the verification and validation model that I showed where it produces a probability,
[53:27] a residential probability. So the lower the residential probability, the more likely it is that that structure or that building
[53:35] detection itself has been labeled or is like um is a is a non-residential structure, excuse me. And those are here
[53:43] shown in red. Um as the color gradient gets closer to blue, those are the structures with the
[53:50] higher residential probability. And this is how we go in and fill in data gaps in areas where there's not a
[53:57] lot of rich attribution that can be used to label a structure. So, when we finally bring all of this
[54:09] workflow together and all of these models together, we end up with some output that looks like what you see on
[54:17] the right. This is an example of our USA structures data set for Miami-Dade, Florida. And you can see that they've been
[54:26] color-coded by their occupancy class. So, anything any geometry that you see in uh that dark blue is a residential
[54:35] structure. structure. Um anything that you see in purple is a commercial building. Anything that you see in that kind of that green color
[54:42] that is government. And then orange is education. education. And you can even see that we have some
[54:50] call-outs here where we go through and and show off some of some more attribution that we have for each
[54:57] structure. structure. So, for example, if you look at the the black box on the right that's kind of in
[55:03] the middle of the screen, that is pointing to an education building that we know is a pre-K through
[55:10] 12. And we also provide an address when we have available. Um and then some other characteristics as well.
[55:17] Again, this is all the process of putting through uh you know, this is the end product of imagery processing,
[55:24] feature extraction, validating the geometries, regularizing them, and then running them through an attribution workflow that I described.
[55:33] So, I believe that is all the time that I have. So, thank you for your time and
[55:37] attention. attention. Um feel free to email me or ask me questions and I'll go ahead and hand
[55:43] this back over to Greg. Thank you. Um thanks very much, Taylor. Uh now I'm going to talk about a second
[55:52] case study for uh assigning attributes to to building footprints or or actually larger areas in this case, not
[55:58] individual footprints. But, that is sampling uh from Google Street View and Google Maps to characterize vulnerability. vulnerability. Um so, for areas with no detailed
[56:07] infrastructure inventories, can we estimate vulnerability from samples? Can we can we look at different regions and some detail in
[56:16] those regions from a sample and characterize the whole region? Um so, by using broad categories for remote sensing classification and uh
[56:25] we we've seen this with ImageCat doing this this approach uh of image classification where they take moderate
[56:31] resolution satellite data like Landsat and classify areas into urban core, industrial areas, residential areas, um so that you've got polygons that show
[56:41] this extent. So, if you've got those polygons showing you different areas, different categories, what we can do is
[56:47] draw random locations, draw random sample of locations from inside of those categories, and then look at the Street
[56:55] View coverage to assess vulnerability. Uh and that's the case study I'm going to walk through that we did
[57:01] uh for Quito in in Ecuador. Uh so, by the end of the training, hopefully you can understand the
[57:06] techniques we're using for generating um a random geographic sample and construct a survey uh of these components yourself
[57:14] if you want. Um so, we're doing area-based estimates of building vulnerabilities that are relevant for disaster planning. Today,
[57:22] I'm going to focus on floods, but this has been used for earthquakes uh as well. well. Um and scoping exercises, deciding where
[57:30] to collect more data. So, you could go in um if you're looking at a whole urban area and do a random sample and decide
[57:36] that that um some areas are heterogeneous and don't need additional samples, but or do need additional samples, and our other
[57:44] areas are more homogeneous and don't need additional samples, for example. Um and this can be used to these samples
[57:50] can be used to estimate the prevalence of different vulnerabilities such as the building type or the average ground
[57:56] floor elevation for flooding, uh different land use categories. Uh and so the approach is, you know, sort of a survey design where you select
[58:04] your geographic area, select your sample sites, just generating random points, uh set up a Mechanical Turk, and we'll
[58:11] talk about what that is uh precisely in a bit, and then do your data collection and analysis.
[58:18] Um so, the the key thing for survey design, you're you're doing a geographic survey, but essentially you need to
[58:24] decide what categories of information you want to collect and what options you want to give. So, defining your
[58:29] variables. On the In the table on the right is uh are the variables we collected for the case study in Quito. Um and we
[58:37] standardized these through a codebook so that they became um um standard standard uh options for all of the analysts that
[58:45] were looking at the data. So, the codebook includes these categories, their names, but also uh photographs of
[58:50] each what each one looks like so people have a reference to look at. And then we developed a template task
[58:57] script uh of the survey variables. So, with these variables defined, you can essentially set up a web form so that
[59:04] people can fill it out and uh uh for individual sites and quickly assess vulnerability categories across an uh an urban area or even larger areas
[59:13] if you want. So, here's an example of of Google Street View from randomly selected sites in Quito. Um and in in essence we take a
[59:25] a bounding our area, uh our case study area. This this case we're doing the whole city, but you could also do a
[59:31] stratified sample by uh land use type is much more common. And then um with your end up points, you you verify
[59:39] that they're close to buildings, not just in the middle of a field or park in the city, and drop anything that's not
[59:45] suitable. And then we also ensure that the buildings uh we're including in Google Street View. So that
[59:53] you could actually get this perspective view, not just a satellite top-down view of the buildings. And then we set up our Mechanical Turk.
[1:00:01] So there's two ways to do this. We used an open source software uh called Local Turk, Turk, um and it's linked here on the slide,
[1:00:09] where you can install locally or you can run it on a server and and have multiple people look at the same data.
[1:00:17] Um and we exported the remote sensing image that you see at the very top, so a top-down view,
[1:00:23] uh and then had a link live link to the Google Street View image. So the second image that's showing the Street View,
[1:00:29] you could pan and zoom and navigate around in Google Street View. Sorry, I skipped ahead a slide by mistake.
[1:00:36] And then for each site, each randomly selected site, you get a web form. Uh this one's quite detailed. A lot of
[1:00:42] these surveys could be shorter, uh but in this case we're picking out all those variables I showed before. You could
[1:00:48] select what you think the sill height is or the first floor elevation is or referred to it. Um
[1:00:55] choose whether the building is detached or a single-family home style or standalone building, semi-detached, attached, or doesn't apply. Enter the
[1:01:04] number of floors, and then we looked at building condition, status, and material. Um so the material um masonry or cinder block wood
[1:01:13] construction, brick, steel. That's important for earthquake type analysis. Uh but it could be useful to know in
[1:01:19] general what neighborhoods are are mostly made of. And occupancy, if it's available, just whether or not it's occupied, not a not
[1:01:26] a land use in this case. Uh the roof type, which is key for um hurricane type impacts.
[1:01:33] Uh and the land use, uh whether it's residential, commercial, agricultural, industrial, natural, other. Other could include mixed categories.
[1:01:42] And then we were also, since we're in Quito, which is near the mountains, we're also interested in the street
[1:01:47] information, what the what the slope was like, whether it was flat or a low slope, medium, or a very steep slope.
[1:01:53] And uh for assessing drainage and whether or not there was actually built drainage, uh you know, sewers and and
[1:01:59] stormwater capture, we were just looking at whether or not there were storm drains visible in the in the Google
[1:02:05] Street View imagery and panning around. Uh and then the street cover type, uh what the street was like and whether or
[1:02:12] not it had potholes, what the street was covered with and whether or not it had potholes. And note these checkboxes, you
[1:02:17] can check anything that applies. It's not a either/or situation where the radio boxes, the round circles, you can
[1:02:24] only choose one option. And then for some sites Google Street View didn't work, so we just had that
[1:02:29] Google Street View not available as a way to to um drop something from a from the survey site. So we had to
[1:02:36] oversample, we had to take more sample points because some of them dropped out because they weren't close to buildings
[1:02:42] or Street View was not available. So, So, with that we used Mechanical Turk to collect data for each location. And what
[1:02:51] we did is we had actual multiple analysts look at the same location. And this is a way of checking consistency uh
[1:02:59] and and survey design. So if there's certain questions that are where analysts have a lot of confusion,
[1:03:06] um either it's something that's difficult to tell from the Street View imagery or the question is needs to be
[1:03:12] um tweaked or reworded. Um so we We the data collected for each variable. Here on the right you see the number of
[1:03:18] drains where the brighter colors are more street drains visible from one particular location in street view. And essentially found
[1:03:26] that, you know, the the downtown core and the more built-up areas seem to have more street drains visible.
[1:03:32] Which isn't a big surprise. And then visualize the results in context like this map we're showing at
[1:03:38] the at the right on the right. So So what we found was that flood flood vulnerability variables for hundreds or
[1:03:47] even thousands of buildings can be collected quite rapidly once you're set up and running. We've used this approach
[1:03:53] for other validation techniques and even done something on the order of 10,000 images looked at by three separate
[1:04:01] analysts. That was a much simpler use case than the vulnerability assessment here. But just a just a two-question
[1:04:07] sort of survey, but we found that could be completed again in a day or so by multiple analysts. So it's it's a really
[1:04:15] productive way to review a lot of data. But you do need to look at the uncertainty of your output because um
[1:04:22] analysts don't always apply consistent heuristics or rules for for deciding which category something falls into. And it's also easy for different
[1:04:33] analysts to interpret the same set of instructions differently. So examples, especially example images, are quite useful for being consistent. So here on
[1:04:42] the right is the Kappa score, which is a a score of the consistency across each of the categories. And so we can see we
[1:04:50] do quite well in what the building material is, the roof type, the street type, the land use.
[1:04:55] Less well, especially for the building condition. There's only 54% agreement across the analysts for the building condition. So that's quite a subjective
[1:05:04] measure. And that might be a case where we've got too many options for the analysts. We might want to simplify that
[1:05:11] question or just make sure to provide good examples on what we think uh the building condition means. Um
[1:05:17] so, what does poor condition look like? What does excellent condition or good condition look like? Uh with photographs so that it's not so
[1:05:25] subjective. subjective. And then our street topography could be difficult to judge, but we still got close to 80% agreement. The sill height,
[1:05:33] this is key here, was only 66% agreement. And because sill height is is important for uh any flood impact
[1:05:40] modeling, if you know the average sill height, you could uh apply a damage curve and and estimate damages from a
[1:05:46] particular flood depth. Uh but if your sill height isn't being measured consistently, then it's probably not um
[1:05:54] um as useful for that type of analysis. So, here for the sill height, if we re-did this again, we we might tweak it
[1:06:00] so that we have fewer categories or or broader categories um so that people uh can be more consistent in their
[1:06:08] estimates. estimates. Um yeah, uh so that's the uh data we collected for Kīhei. Uh the consistency and the reliability. Uh we've got a a
[1:06:19] paper pending on this uh so, once the paper's out, uh the data should be released as well. Uh because
[1:06:26] it's all collected from uh you know, there's no privacy concerns with the data. It's just uh photos that are
[1:06:31] available from public viewpoints that are stored in Street View. And I wanted to um quickly show you what
[1:06:38] this looks like. So, here's an example form. Uh this is running things locally um for a particular location. This is inside
[1:06:47] the US. It's what I had screenshotted before. So, here's the two-dimensional satellite view, uh but the three-dimensional uh street view or you
[1:06:54] know, perspective view street view is a live interactive uh type thing. So, you can pan around, and we could zoom in.
[1:07:02] So, here for example, if I move down the block, I might be able to zoom in and
[1:07:07] sort of estimate that oh, there's two steps up, right? It's might be difficult to see on the shared zoom screen, but
[1:07:14] you can see two steps or three steps up before you hit the sill for the for the entry for
[1:07:20] the doorway and the windows are the same. So, from this view, though being able to see a garage that might have
[1:07:27] ground level entry, you know, you could estimate it's probably more than a foot um um before you get to the sill height or
[1:07:34] maybe even upwards of 2 ft. Right? So, the ground ground floor elevation here would be 2 ft.
[1:07:40] Um as a category variable. And of course, construction would be brick, uh single family home, um and
[1:07:47] if we're scrolling around, we can't see any street Oh, yeah, we can see manhole covers. covers. Uh and there's a street drain, for
[1:07:55] example, right? So, we know that there's a uh storm wastewater stormwater. Um sorry, stormwater system. Um probably a wastewater system as well.
[1:08:06] Yeah. And so, this would be a pretty quick way to assess all those questions. So, if we go back to the questions,
[1:08:12] right? We could see that we're looking at a high sill height. Uh it's a detached home. It's just a single family
[1:08:20] home. I'd say very good condition. Uh we can see it's primarily brick construction. construction. Uh I would
[1:08:28] say either occupied or can't tell. It looks like occupied because the lawn's well cared for and everything, but it's
[1:08:34] hard to know for sure, but I would probably go with occupied. And if we go back, the roof type looks
[1:08:39] like it's shingle uh to me, so uh Oh, yeah, because we're collecting in Quito, it doesn't quite apply to the
[1:08:48] um um US case that I pulled up here. Uh residential land use. Uh flat or low slope, I think.
[1:08:59] Uh we saw one drain and a paved street. Uh I don't think there's any notes to add
[1:09:06] and then we could just submit that record and it'll auto advance to the next record which uh pops up here.
[1:09:13] Actually, there's a little bug here. I'm showing the same images but normally it would it would auto advance to the next
[1:09:18] record. And that gets recorded uh in a um a spreadsheet that's stored on the computer that's running the the local
[1:09:26] turf information. So, once you're done with the collection for all these points, you've got an ID value for every
[1:09:31] site and the attributes recorded uh in a spreadsheet and if you run this through for multiple analysts to look at the
[1:09:38] same site, you've got a way to link things and do comparisons like the type of calculation I showed you.
[1:09:44] So, that is um everything for the second case study. The methods I've shown you today could be used for assessing um
[1:09:54] flood vulnerability or vulnerability for floods but also different hazards. Um the key point is you can use some
[1:10:00] relatively simple open technologies and commercial services that are free to use to rapidly assess vulnerability from different characteristics that you can
[1:10:10] see in top-down satellite imagery or a street view perspective. Um so, you if you're looking for example at earthquake
[1:10:18] vulnerability, you can detect, especially if you're working with an engineer, the primary construction type which is key for that
[1:10:25] or flood vulnerability, you can see whether or not there's street drainage and what the civil ground floor
[1:10:31] elevation is which are key for flood vulnerability. Um or you could choose other variables that you think you could
[1:10:36] see see in the street view imagery. The limiting factor is that Google Street View is not available globally, uh especially in
[1:10:44] rural areas, there's very spotty coverage. Uh but it is available for large parts of Latin America and Asia
[1:10:50] and of course North America and Western Europe, it's it's available almost everywhere uh but the most rural areas. So, you've got a
[1:10:57] pretty wide collection of data that's updated on a rolling basis from by Google that you can use to do rapid
[1:11:04] assessments. assessments. Thanks very much for your time and Brock, I'm going to hand it back to you.
[1:11:13] Greg Taylor, thank you very much for those presentations and I hope participants found the information very useful and instruction and technique.
[1:11:22] So let's review what we covered here today. today. Greg walked us through the methods and techniques for developing a building
[1:11:29] load exposure data set for a Hazus flood study in New York City. Taylor showed us using Earth
[1:11:37] observations to develop a building structure data set. Then we had another case study on using sampling from Street View to
[1:11:45] characterize vulnerability. We hope that by looking at these case studies and by us highlighting the techniques that were used
[1:11:53] that these techniques could be used in other regions. On October 10th in part three, the last part of this training series,
[1:12:01] we'll cover assessing utility and communicating uncertainty. So that'll involve exposure data best practices, developing an understanding the
[1:12:13] metadata, metadata, equity and bias considerations, and another case study assessing climate change impacts with building exposure data in Antigua and Barbuda.
[1:12:23] Below is the contact information for Greg and Taylor along with links to the training web page, page, social media,
[1:12:32] and if you enjoyed today's webinar, we hope you sign up for ARSET's listserv to receive notifications on future
[1:12:38] trainings. trainings. Please follow us on Twitter or for other relevant announcements pertaining to NASA's Earth Sciences. We'll now transition to the Q&A portion
[1:12:49] of today's webinar. Thank you. Thank you everybody for submitting your questions so far in this session. So, I guess what we'll do is dive right
[1:13:11] in. in. If you have other questions, please feel free to continue submitting those in the questions box and we'll try to get to
[1:13:18] them. And any of the trainers online, if this is a question pertaining to you, feel free to unmute and we can start a
[1:13:28] conversation. Question one, Hazus integrates into ArcGIS, but ArcGIS is not open and not everyone has access. Is there a possibility to look at Hazus
[1:13:39] when you don't have access to an ArcGIS installation? Hey Brock, let's I think that's for me. Yeah, Hazus itself um
[1:13:52] is integrated with ArcGIS, but the software, the algorithms behind it have been implemented as Python scripts scripts uh
[1:13:59] uh that are available as as open data. Um so, you can run the algorithms outside of ArcGIS and the data are also
[1:14:07] available for download from FEMA directly. So, you can get the data and the algorithms and and run them.
[1:14:13] You don't have the advantage of the menu system and the maps and the interactivity that you have in ArcGIS.
[1:14:19] You also need to know scripting languages. Uh but, that's that is feasible um to do it outside of ArcGIS.
[1:14:27] In fact, when we ran our analysis, we we used a Python script for the damage curves. Great, thank you. It's nice to know that
[1:14:35] there are other options um for the the open data. Thank you or and open source software. Question two, how many critical building
[1:14:45] infrastructure buildings are high-risk. What mitigation approaches are moving forward? And it looks like this referred to the um
[1:14:55] flood study in New York City. Yeah, yeah, the New York State study. Um we didn't actually calculate the total
[1:15:02] number of critical infrastructure buildings at risk. I I'm not sure why. It's I It seems like an obvious thing to do now that you
[1:15:08] asked the question. It is there in the data for most of the counties, so you could um we could calculate it. And um
[1:15:16] the recommendations that are being implemented, I don't know the current status. status. Um there's a the report has the complete
[1:15:22] list of recommendations and NYSERDA, the New York State uh Energy Research Development Authority, uh that funded the study also is funding
[1:15:31] programs for the implementation of the recommendations. So, because a lot of the recommendations are changes in infrastructure like moving your furnace
[1:15:39] and moving your electrical panel and uh locating generators on roofs, they're sort of long-term um uh uh plans for for the changes. I think
[1:15:49] a lot of newer or even um relatively recently constructed critical infrastructure facilities have followed those recommendations when they were built,
[1:15:59] and it might be the older ones that need to to do the updates. Um so, NYSERDA would be the place to
[1:16:04] check if there's a program for that, but I don't know any other systematic place to look at what's being done.
[1:16:11] Thank you. And I'm placing the uh links to the URLs referenced in the first couple questions, and I'll continue putting
[1:16:19] those into the chat. Um uh but we will have this available uh for you to download this transcript
[1:16:25] after we clean it up on the training webpage. Uh give us about a week to do that, but um I just want to in the
[1:16:31] meantime place those in the chat for you to check out. Uh question three, Does QGIS have damage curve calculation
[1:16:39] curve methods? Yeah, as far as I know there's no built-in algorithm for that, but because the Hazus
[1:16:48] um um methodology and the and the damage curves are implemented in Python, you could run them from within QGIS. QGIS
[1:16:55] integrates with Python. Um it would take some work to adapt the script, but you you should be able to
[1:17:00] should be feasible for somebody knows scripting to do exactly that, take the QGIS data as input and run the script by
[1:17:08] providing the the correct inputs for the damage curves. Great, thank you. Question four. Such a great Such a great web GIS application. How do
[1:17:22] you make a similar flood impact interactive map? Can you please share the repository? So it looks like uh
[1:17:28] we're already sparking some interest in trying to uh replicate some of this work um um at different locales.
[1:17:36] Yeah, so um the data are all available. So if you if you're interested in the data, they're
[1:17:41] all available for download. But the um um the web mapping application has two components, both of which we're using
[1:17:48] commercial software for, Esri software. So we published the flood data and the building footprints and the counties
[1:17:57] kind of infrastructure as separate services in ArcGIS Enterprise, used to be known as ArcGIS Server. Uh and then the web application was
[1:18:05] built with a um what's known as a sort of configuration or implementation mode, where uh Experience Builder lets you
[1:18:14] build a web application by pointing to the services you want and even that multiple tabbed interface that we have
[1:18:19] in the application is is available. And then you can um you know, configure it. And it is
[1:18:26] possible to do that without server. If you use ArcGIS Online, you could put services in ArcGIS Online and still use
[1:18:31] Experience Builder. It's a little more limited, but uh you can do that. And then finally, I added some notes on if
[1:18:37] you're interested in doing this with open source software that you could definitely definitely um um implement this with the open source
[1:18:47] equivalents of, you know, using GeoServer or MapServer to build the to publish the services and then there's a mix of open source and
[1:18:55] and commercial clients that can do the same sort of things uh experience builder. And in fact, you could probably I didn't
[1:19:03] think of this when I was typing this up while Taylor was talking, but you could probably um do something like Mapbox uh
[1:19:10] as an alternative way to to to show interactive view of these flood data. Um if there if there is interest in the
[1:19:17] code, I think I I could it's not posted anywhere right now, but we could probably make it available and feel free
[1:19:22] to follow up. Um it's like I said, it was built with experience builder, so um it's if you
[1:19:28] have a license for that, you can look at exactly what we created um repeating exactly what we created with your own
[1:19:34] data data just through the Esri website or experience builder. Great. And you know, we included your contact information in the slides as
[1:19:43] well as on this Q&A doc. So um uh uh you may have people inquiring directly. Yeah, please do feel free to to reach
[1:19:52] out. out. Thank you very much for your time. Question five. In the section about building footprint detection,
[1:20:01] I thought I saw that the pan-sharpened image is 2.4 ground resolution. Is this detailed enough to complete the
[1:20:09] building building footprint when the building is incomplete incomplete by, for example, treetops or how does the model perform when the buildings are
[1:20:17] closer together than the pixel size? And I'm not sure this may be for Taylor's section. Um just to kind of put
[1:20:34] this in context. Well, um I'll uh Yeah, Yeah, it looks like this may be have was for
[1:20:52] Taylor Hauser's presentation and uh I'll read the answer here. Um but uh Taylor had mentioned that uh
[1:21:00] uh uh he he's not able to uh connect to the audio. audio. Um But uh hopefully we can get him back.
[1:21:08] We're working on a a way to get him some audio here and be able to unmute. But in
[1:21:13] the meantime uh I'll answer this. Um so this is a difficult question to answer as as indicated here. Higher resolution
[1:21:20] does not guarantee higher quality detection. detection. One main drawback of using satellite imagery for feature extraction is trees.
[1:21:29] Uh our model will not completely delineate a building that is covered by a tree. It will be a partial detection.
[1:21:34] We did try to implement leaf off imagery when available. Uh how did the model perform? We found that the view angle of imagery
[1:21:44] had the greatest effect. If the buildings were closer together and we had off nader imagery, the CNN would
[1:21:52] the convolutional neural network would draw both buildings together connected by the facade of one of those buildings. So hopefully this gets to the
[1:22:01] the heart of your question. Question six. How to select the best machine learning model? model? As we do have many models available.
[1:22:12] What I want to do is train the Sentinel images with some drone orthomosaic data I have for building footprint
[1:22:20] extraction, which that's wonderful you have some drone data there and you are I'm to combine them. And um
[1:22:33] Let's see here. Typically, one would select a few different models that are suitable for your needs, then train them
[1:22:38] all and compare their performances to one another on a validation data set. And when I have a chance, I will put in
[1:22:47] a a link to a training that we had this year on machine learning um um really an introductory on using Earth
[1:22:57] observations. observations. And um it's pretty broad, so I think it'd be a a good one to check out and we'll drop
[1:23:04] the URL in here for you. That was uh in English and Spanish. Question seven. With object-based classification and
[1:23:13] supervised classification, I have some good raster data made from drone orthomosaic, but when I want to turn
[1:23:19] into a vector, they're simply not good. Uh if you've come across these problems, do you have any suggestions on on how to
[1:23:27] overcome them? And we'll circle back around to that one. one. Uh question eight. Is the code used to
[1:23:43] train the convolutional neural neural network to delineate the buildings open access and um Uh yeah, sorry. It looks like that it is
[1:23:52] not open access, but hopefully some of the instruction there can help you um um get an idea of how to um
[1:24:01] produce that code for yourself. Question nine. I have a question regarding the rapid advancements in machine learning algorithms for
[1:24:09] detecting buildings and extracting polygons from Earth observation images. Some of these changes happen quite fast. How do you stay current with the
[1:24:17] developments and what criteria do you use to determine when it's necessary to update your models. The answer being it will we will run a
[1:24:28] general model first and evaluate the output. If it meets their needs, uh they will not update. If the output
[1:24:34] needs improvement, we will update the model via localizing localized training data. data. Updating the architecture of these
[1:24:42] models is done every 2 years or so. So, hopefully that's uh can be seen as uh maybe some best
[1:24:50] practices practices uh when when working with machine learning. Question 10. Can you provide details on the regularization algorithm? Is it
[1:25:02] available in GIS software and can be run on a PC or a computing server? I also see a reference to Gauntlet, a tool for
[1:25:10] calculating building morphologies. Is this an open-source tool? And can you provide references to such tools, such scientific publication
[1:25:20] links, links, um and any details on the res type model? So, we're still uh investigating open-source options, um but the
[1:25:33] regularization regularization algorithm uh that was used was uh Esri's regularize regularize footprint tool. And uh I'll uh drop this
[1:25:46] in the chat for everybody. All right. Uh question 11. How did you connect the the structure in the image to an address
[1:26:03] in Google Street View or the Mechanical Turk task? Yeah, I think this is for me. Um so,
[1:26:12] Street View lets you zoom to a location based on latitude and longitude. So, um personally we didn't have to
[1:26:20] get a address to get this Street View link. And the downside is that, you know, if the
[1:26:27] latitude and longitude aren't relatively close to a street, um you'll end up with a blank Street View image. So, it
[1:26:32] doesn't work in every single case. Great, thank you. I'll uh I'll clean this up before we post it. Um
[1:26:44] Oh, yeah. I mean, I didn't I didn't look at this, too. No no no problem. I'm trying to catch up with the
[1:26:48] questions. So, um Yeah, I think that I I on first blush reading that, I think that's that's true
[1:26:59] that you're looking at um um over the lifetime of a mortgage, there's definitely a higher probability of flood
[1:27:06] uh uh for question 12, um than than the probability in any given year. Um Um but I think that's more of a issue to
[1:27:15] consider when when looking at homeowners or or or people that own buildings, whether they're commercial or residential, uh
[1:27:23] industrial, whatever is is communicating the understanding that the probability of a flood over the lifetime of a mortgage is relatively high, one in
[1:27:31] four. four. Seem that those numbers seem right to me. Um it's they would be they would be a factor for buying for
[1:27:41] investing in flood insurance or remediation adaptation measures, for certain. Not that, you know, getting people to realize that.
[1:27:51] Great, thank you. Question 13. Yeah, so um Yeah, measures built by themselves are a terrible idea. So, this is
[1:28:01] I I think it's a good idea. And if we could, you know, the the reason we're using Street View to estimate is mostly
[1:28:07] because we don't have access, you know, the resources to go to Quito and measure and other places internationally. And in
[1:28:13] the US, you know, our New York State example, we didn't measure the sill heights, we imputed them, but um mostly
[1:28:19] it was just there are millions of buildings. So, I think it's a good idea though cuz we
[1:28:23] could measure a random sample of built sill heights or or do a survey and ask homeowners, commercial building owners
[1:28:30] to measure their sill heights, and then use that as validation data for how well the StreetView method works or for
[1:28:35] building another kind of model. Uh and in the New York State case for imputing the the sill heights, you know,
[1:28:41] is that a reasonable approach based on a measure measure uh actual measured sample would be great great idea.
[1:28:50] Great, thank you. Question 14. In the use of HAZUS for flood impact analysis, what do you think that the
[1:28:57] major limitations will be when trying to deploy it for developing countries? Yeah, I've read and it and it seems
[1:29:05] correct to me that um you know, the damage curves being built solely on US data is the biggest
[1:29:11] limitation uh or the biggest source of inaccuracies for impact assessment when you go internationally. Right? So, the flood depths and the
[1:29:20] flood models work the same regardless of what country you're in, but the damage curves are going to be quite different.
[1:29:27] Uh Uh Also, the building construction techniques are quite different. So, the flood flood the damage curves and the
[1:29:33] and the engineers' understanding of what how the flood impacts work or any of the hazard impacts work are largely based on
[1:29:40] US building codes and US structures. And so, different buildings uh are going to react differently to to hazards, whether
[1:29:47] it's flood or or other HAZUS models um just because they're they're built differently. So, they might be
[1:29:54] more resilient or less resilient, you know, more susceptible to damage or less susceptible to damage, and that's not
[1:29:59] really captured in the HAZUS model or data um because it's all based on the US. US. And then there's some technical
[1:30:08] um things like the the Hazus data are based on some of the Hazus data are based on US Census measures at the block
[1:30:16] or block group level. So those measures may not exist or may be slightly different internationally. So you'd have
[1:30:21] to adapt them to fit. Okay, great. So a very local specific inputs inputs are are needed there of course.
[1:30:33] Yeah, yeah. In fact, you know, there's case studies where Hazus doesn't work well for exceptional cases inside the
[1:30:38] US. For example, New York City. The original version of Hazus, they may have updated this, but it it couldn't
[1:30:45] model a school that wasn't on the ground floor. But if you're in New York City or some other large cities, you'll have
[1:30:50] schools that are on the second or third floor of a larger building. And you know, a school is a lifeline or
[1:30:55] critical facility. Just that didn't exist in the world of Hazus to take one example. Do you know for those exceptional
[1:31:04] locations even in the US where the model doesn't capture it correctly? Do you know if there's any documentation on methods that people
[1:31:15] used to get around that? I can check. I don't know on the off the top of my head. I know there was
[1:31:22] I know that from talking to folks in New York City Office of Emergency Management when they went and applied it for New
[1:31:26] York City, they found that to be an issue. And I believe they worked around it. So it should be it should be
[1:31:31] documented somewhere. And I can do some digging and see. I'm post it for the follow-up. Thank you.
[1:31:39] Question 15. How can we automate the process in Google Street View using computer vision like the floors? Additionally, it would be
[1:31:46] useful where we have a dense homogeneous urban environment. Yeah, I think this has been done. In fact, I think Google may itself use
[1:31:57] computer vision in Street View data to do some of these extractions just from having chatted with a few folks.
[1:32:04] Um we haven't tried it. Um I think our biggest issue in Street View is that um in the areas we were sampling, there's a
[1:32:13] lot of not uh heterogeneous environments. environments. So, Street View wouldn't necessarily you know, the URLs we're generating, you
[1:32:22] had to pan around just to find the the building. building. Um the right view. Um so, automating that process, don't know how
[1:32:30] to automate finding the front of the building building uh in Street View is not maybe possible. So, logistically, it just seemed or
[1:32:37] technically, it just seemed too too challenging for our our use case, like the urban uh our suburbs of Quito and we worked in
[1:32:45] our international states. But, if you're doing a you know, an urban core, it's probably much more feasible.
[1:32:55] Great, thank you. Question 16, how do you distinguish between single-family dwellings and apartments? Shouldn't lidar data data give you some hint of
[1:33:04] the building heights? At least enough to distinguish high-rise apartments from two-story single-family houses? I'm not sure if this is for me or for
[1:33:14] Taylor. Taylor. Um Um but in our New York State study, we were distinguishing the building type just
[1:33:20] based on the we had the New York State parcel parcel information which would tell us the building type. Um
[1:33:27] lidar data can give you, if it's good enough detail, give you definitely the the height of a building. Uh and you
[1:33:33] could, you know, not to put words in Taylor's mouth, but you could definitely infer whether or not it's likely to be a
[1:33:39] single-family home versus apartment building based on the height. Uh though it would be wrong probably in some cases.
[1:33:49] Great, thank you. Question 17, this seems to be the last one on here. Uh if there's any others, please feel free
[1:33:56] to uh to jump on in, but uh this is a is the third example of the case study
[1:34:02] output available to the public. Where can we see more of its visual results? Yeah, so we haven't published the data
[1:34:10] yet. We we have a paper in review or under draft. I forget the exact status. So we're waiting for the
[1:34:17] paper to be finalized in part two because the there may be revisions to the data based on reviews of the paper
[1:34:22] and feedback on the paper. So it will be published hopefully on our our website um um sometime in the next 6 months.
[1:34:30] You know, but feel free to reach out if you have particular cases. We I have some images I could share
[1:34:35] of the of the results for sure. Um you know, even before it's published. Great. Thank you. Appreciate that offer and look for the
[1:34:45] publication to come out in the next couple months. You said on your web web page, do you mean the Sea Duck web page?
[1:34:50] Yes. Yes. Okay. Okay. Thank you. Um Question 18. Could you tell us more about any other web app optimization problems you solved
[1:35:05] besides regularization? Once again, this this this could be for Taylor. I I I'm trying to determine um
[1:35:15] And so Yeah. Yeah. I mean, I can talk about the you know, the web app the the data service
[1:35:21] optimization we did for the New York State. I don't know if that's relevant or not, but Um
[1:35:26] Um a lot of it had to do with you know, there's a large number of buildings in
[1:35:29] New York State. So we had to tune the performance performance to serve the buildings. And what we did
[1:35:34] is is use tiles. So we built tiles for the flood image data and tiles vector tiles for the building footprints. So
[1:35:43] when you're when you're looking at those data, you know, in a large area, you're getting a reduced resolution version of
[1:35:48] the data. So much smaller and lighter version of the data. And then when you query or click on the map, it's actually
[1:35:54] throwing the query for the data details to a different service endpoint. So, the visualization is simplified and has no
[1:36:01] attributes. But, when you click on the map and and you're requesting details, it goes back and looks for that
[1:36:07] individual feature of the pixel in the flood depth raster and and sends that information based on a query service. So, it doesn't
[1:36:15] have to serve as much data. So, that was a big optimization um thing. And those are pretty standard
[1:36:21] um um pretty standard um approaches for web map tuning. Great. Uh question 19 and 20 uh both
[1:36:31] referring to uh sill heights. Um Building insurance sill height info available? Or Oh, that's that's a really good
[1:36:39] question. In you know, when we were assessing the the sill heights internationally, we didn't have um I don't think there's a lot of
[1:36:47] insurance on information. I don't know if that's collected inside the US um for by insurance companies. I would be surprised if they did just
[1:36:58] from my own experience buying house insurance. insurance. Uh nobody's ever asked for the for the sill height. They may impute it like we
[1:37:04] did based on building codes or the age and the age of the house or or maybe they're not doing um models
[1:37:10] that detailed. I don't know that. From talking to different folks who do this kind of damage modeling for the
[1:37:17] insurance industry, a lot of that algorithm and data that they have is considered proprietary. So, if they do
[1:37:23] collect it, it's likely not in an open database or a way we can access it. That makes sense. Yes.
[1:37:31] Um Um Question 20. How sensitive are the results to the precision of the measurements? For example, are sill heights sensitive at
[1:37:39] the inch or foot or yard? Yeah, I think the sill heights are more likely to be um sensitive or or accurate
[1:37:48] within a foot or so, definitely not an inch. Um and it's going to vary a lot with the
[1:37:55] individual building and how close the Street View imagery will let you zoom in. in. Um Um so the example I showed in the live
[1:38:03] demo, you can make out that there were two steps uh and then a and then the door sill above the two steps. So, you
[1:38:11] know, in building codes in the US, you could probably look up what standard height for stairs are, but they are very
[1:38:16] from that, but you know, you could count on those being around 8 or 10 in steps and then add a little bit for the sill
[1:38:21] height, so so you can be pretty confident it's over a foot and likely closer to 2 ft, but I
[1:38:27] wouldn't say it's anything more precise than that. And then for other buildings, you just don't have a good idea because
[1:38:33] it's the the imagery isn't detailed enough, so it's it's maybe only accurate to I don't know what closer to a yard than than a
[1:38:40] foot. Great, thank you. Sure. Sure. The other The other thing I just want to throw in there, too, is
[1:38:48] that the Street View imagery only shows you what's um visible from the street. So, you know, if there's a if in the
[1:38:57] back of the house or the side of the house, there's um lower entry points, you wouldn't see those. So, you wouldn't
[1:39:03] know the actual minimum sill height from um for the whole building. You're you're just sort of estimating from the front
[1:39:09] of it. And in the New York State case where where we're imputing from building codes, you know, the assumption there is
[1:39:14] that the buildings um were were constructed to code and inspected and passed and not modified subsequently to either have a better
[1:39:23] sill height higher sill height or or a new entry point that's lower. Great, thank you. Question 21.
[1:39:37] Regarding characterizing vulnerability using Google Street View, was the data Mechanical Mechanical Turk etc. later used to categorize the region
[1:39:46] into different levels of vulnerability? If so, could you please describe this further further or demonstrate this? Um this is actually ongoing work. We
[1:39:55] don't have anything complete yet for different regions. So, um I don't have anything right now to show, but we we do hope to do exactly
[1:40:04] that. Take the random samples for a place like Quito and and merge it with the um the characterization and neighborhood
[1:40:13] for moderate resolution um remote sensing data uh like the the approach approach um ImageCat has done um
[1:40:21] um where they characterize urban areas based on, you know, industrial or large um um uh or high-density residential,
[1:40:29] medium-density density residential, low-density residential. And so, based on the sample points inside those different categories, hopefully we could
[1:40:36] say something about the average or the the, you know, representative um sample uh vulnerability characteristics. We've actually collected data from more
[1:40:49] cities internationally, but that's, like I said, it's ongoing work. Great. Great. Thank you. Um and that seems to be the
[1:40:57] last question. I think that we will um close this out here. I just wanted to give um
[1:41:02] uh you a uh if uh a chance if there's any parting words that you would like to say before
[1:41:08] we sign off here today. Um you gave a a great uh summary uh within your presentation, but um
[1:41:16] just wanted to see if there's any additional comments you want to make. Oh gosh. Um thanks for the time and the
[1:41:24] the great questions. These really made me think, so uh it's it's nice to know people are interested and have some really probing
[1:41:32] um questions that are it's actually useful to to hear these and think of new ideas. Like extracting
[1:41:39] um um automating the extraction of things from street view, you know, is something we should investigate and see if it's been
[1:41:45] done cuz it could be really useful. Great. Yeah, I you know, I hope this presentation sparks some
[1:41:52] conversations and some help form a community all working towards very similar outcomes. Um Um So, yeah, you know, also we will be um
[1:42:05] distributing a survey after this this training is over and um that's another way that we can uh hear from you um some things that
[1:42:15] maybe you're working on in your area or um things that you would like to see uh in the future from
[1:42:21] from us, the Arches program, CEDAC, or ImageCat, or the community working on this this this disaster risk modeling.
[1:42:32] Okay. Well, um I guess we will shut it down for today. We hope that you all will join us for
[1:42:41] part three on next Tuesday. So, thank you very much and I hope you enjoy the rest of your your day. Thank you
[1:42:50] very much.
