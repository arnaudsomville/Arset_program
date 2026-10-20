# Urban Mapping Using Trends.Earth for Computing SDG Indicator 11.3.1

`https://www.youtube.com/watch?v=1eXzBn6vNmc` · id 190 · 1:47:13 · module 87 — Remote Sensing of Land Indicators for Sustainable Development Goal 15

[00:05] Thank you all for joining us today. This is the third and final session of remote sensing for monitoring land
[00:11] degradation and sustainable cities SDGs. My name is Amber McCullum and I will be your presenter today along with
[00:20] a multiple guest speakers. Um this is a theme with our training so far. Um we will have our colleagues from
[00:28] Conservation International that we've had um the past 2 weeks. And we are also joined today by Dennis Mwaniki from
[00:37] UN-Habitat and he's going to discuss indicator 11.3.1 and the associated data needs. Um and then we'll we'll also be hearing
[00:48] from um Alex, Monica, and Mariano um about the Trends.Earth tool. Again, just as a reminder for this
[01:00] training, we have three 1 and 1/2 hour sessions. So this is our final session today on July 23rd. And you only need to
[01:09] sign up for and attend one session per day. We have the English English session and we have the Spanish session um
[01:17] presented live. You can also find all of the webinar uh recordings, PowerPoint presentations, and the homework assignment found on the course website
[01:28] shown here. We will have some time for questions at the end, but if your question doesn't get answered or you have a follow-up,
[01:37] feel feel free to email myself or my colleague Juan Torres Perez at our email addresses shown here.
[01:46] We have one homework for this training and the link is now available on the website, so you can access the that
[01:53] train that um link to the Google form for the homework. homework. In order to receive a certificate of
[02:00] completion, you must have attended three of the live webinars and complete the homework two weeks from now by August
[02:09] 6th. 6th. And again, I met I've mentioned this the past two weeks, but the homework does span the entire training. So, just be
[02:18] aware of that when you're answering the questions. They'll be questions from sessions 1, 2, and 3 and the associated
[02:25] exercises. You will receive your certificate of completion about two months after the end of this course. So, please do be
[02:34] patient with receiving the certificate. It does take a while to process all of those. Again, I've mentioned the course
[02:45] prerequisites. prerequisites. A fundamentals of remote sensing and having QGIS, the correct version of QGIS. QGIS. And then installing, downloading,
[02:57] installing, and registering the Trends of Earth software. And this is the plugin within QGIS that we have been going through
[03:06] exercises with and really demoing throughout the course of this training. Again, you can access all the course
[03:15] materials on the website shown here. And this includes the PowerPoint presentations, the recording that will be available a few
[03:26] days after each session, the exercise documents, and the homework link. So, now that we are in the final
[03:38] session, we're really going to shift our focus from SDG 15 to SDG 11. For today, I'll provide a very brief
[03:50] overview of SDG 11. And then we will hear from Dennis about indicator 11.3.1 11.3.1 and the data needs.
[04:01] Then we will also hear from our CI colleagues and they will be providing a presentation on the trends.earth tool
[04:09] for SDG 11. 3.1 and then we'll be launching right into the exercise for urban mapping. So just as a reminder, today we're
[04:29] really going to focus on SDG 11 11, sustainable cities and communities. Today more than half the world's
[04:39] population live in cities and by 2030 it's projected that six in 10 people will be urban dwellers.
[04:48] So cities are really important for managing the SDGs and they can be really incubators for innovation and growth
[04:58] with drivers of sustainable development. With satellite imagery we can map cities, especially urban areas. So this is a really great image of Landsat of
[05:12] the Los Angeles area. So you could see how we could use satellite imagery to map and identify urban land areas.
[05:23] The target 11.3 states that by 2030 enhance inclusive and sustainable urbanization and capacities for participatory, integrated and
[05:34] sustainable human settlement planning and management in all countries. This is really a multi-faceted target with many data needs.
[05:44] However, some of these data needs can be addressed via remote sensing. So, like the images I've provided of urban
[05:52] mapping. The ratio of land consumption rate to population growth rate is indicator 11.3.1. 11.3.1. This indicator requires defining the two
[06:06] components of population growth and land consumption rate. In estimating the land consumption rate, you need to first define what
[06:16] constitutes consumption. And it might be really difficult to distinguish a newly developed region to a partially redeveloped region.
[06:27] Therefore, the percentage of current total urban land that was newly developed or consumed is used as a
[06:35] measure for this land consumption rate. Fully developed areas are sometimes referred to as built-up areas. And again,
[06:45] things like Landsat are great tools for estimating um these regions. Landsat with its 30-m spatial resolution um can
[06:54] be really uh helpful here. And these images are um really great. They're both from Landsat. Um they are
[07:03] images of New Delhi uh from 1989 on the left and from 2018 on the right. And so,
[07:10] you can really see this expansion of the city. So, the city is shown in the purple hues and the gray hues and then
[07:18] the um countryside is shown in the light browns and green colors. And so, you can see really how this city has expanded um
[07:27] over the course of these years. In terms of data needs, the satellite images, primarily Landsat or Sentinel,
[07:38] can be used to estimate the impervious index or the built-up area and the city extent. This needs to then be coupled with
[07:47] population data. It's also important to highlight good practice guidelines and the country reporting. reporting. Um and this is another great image uh of
[07:58] the nighttime lights and this is an image from the VIIRS um sensor that allows you to identify urban
[08:06] areas as well. The UN Development Programme is one of the many groups focused on target 11.3. And here are a few impressive statistics
[08:18] um about urban areas and um one is that the fact that 4.2 billion people live in cities and that by 2050 that it's
[08:29] expected to reach 6.5 billion. While cities only occupy 3% of the area of Earth. And there are 828 million people living
[08:42] in really poor conditions. So, this is a an important aspect of the SDGs. UN-Habitat focuses on some of the same
[08:52] issues wherein over 90 countries they promote the development of socially and environmentally sustainable human settlements and strive for adequate
[09:02] shelter with better living standards for all. all. And our guest speaker today will speak a a little bit about UN-Habitat and the
[09:09] data needs for this target. So, So, again I um am happy to hand it over this week to our guest speakers.
[09:20] Um Um first we're going to hear from Dennis Mwaniki from UN-Habitat and then again we're going to hear from our colleagues
[09:28] with Conservation International. So, I will hand it over to our guest speakers at this point. Thank you very much Amber for the
[09:39] introduction. introduction. Um my name is Dennis Mwaniki. I work in the the Global Urban Observatory Unit at UN-Habitat. That is
[09:47] is the statistics unit of the agency. And I've been involved a lot with the in the SDGs monitoring with specific
[09:56] focus on monitoring of the indicators that require the use of observations and geospatial information for for computation. Uh I'm going to
[10:06] speak in the next few minutes about the work that needs to be done or the inputs and the
[10:12] requirements for the computation of indicator 11.3.1 that Amber has already introduced. And uh I'd just like to show a few things
[10:23] that happen in that happen in cities. Uh cities usually change. They the the the they evolve. They're
[10:35] like organisms which change over time. So they some of them expand, some of them contract, some of them densify,
[10:43] others that's sprawl outwards. So we have four ways in which cities generally grow. Uh cities infield where we have uh
[10:53] growth happening within the same area. Uh like for example, a good example is this case of uh Guayaquil in in in Ecuador where we
[11:02] have uh if you look at this small section in green here. Um we have this part of this part of the
[11:10] city that was not very dense in 2003, but in the next uh year that is 2015, there was a lot of
[11:19] development that had happened in this same same section. At the same time this this city was also
[11:25] expanding outwards. If you look at the the the circle to the left here, We have a wire kill and actually not
[11:35] just the infield or densified in some section, but it is so grown outwards. So, there was a lot of growth happening
[11:42] in in this part. The the top the the most left side of of of this image. So, we also have other kinds of growth
[11:50] where we have leapfrogging where a city jumps jumps from from the traditional boundary rather from from the original boundaries
[11:57] and starts to grow in in a new area. Then over time then the growth of the entire city joins into that leapfrog
[12:05] leapfrog development. So, all these kind of of developments or ways of of change actually affect a lot how cities and
[12:14] urban settlements grow over time. For indicator 11.3.1 as Amba has already mentioned, it measures the rate at which
[12:21] the cities are expanding specially versus the rate at which their population is growing. So, traditionally what we've measured and what is
[12:28] presented a lot in the the the urban projections. So, we look at the population projections by the United
[12:36] Nations Statistical Commission division is we have a lot of population projections saying a city like Quito would would be having a growth rate of
[12:47] say 4% or 10%. So, this growth is as traditionally mostly been based on the population growth aspect. So, what we're
[12:57] doing now for the SDGs is introducing a new measurement I mentioned that is also trying to look at where this growth is
[13:03] actually happening. So, if you say a city or the urban areas in a country grew by 10% then usually you don't know
[13:12] where this growth is happening. Whether it's the big cities, in the small cities, or in in coastal cities and so
[13:19] on and so forth. So, for this for this particular measurement or this indicator, it does not just look at the
[13:24] entire what is happening in the population changes or trends in a country, but also look at very specific
[13:32] urban settlement changes over time. Uh to for this indicator usually to to be able to see change unless it's very
[13:39] fast growing cities. The recommended interval is is 5 years because one the inputs that open source currently will not if you
[13:52] don't have very high very high resolution imagery for example you not be able to see the changes very small
[13:57] changes over time but when you have say you're using Landsat imagery then you are when you have 5 years difference
[14:04] you're likely to see a bit of a bit of growth in that city. So for example in
[14:08] this case again for or Yakili that's why we are looking at 12 years difference here and we can very clearly see
[14:15] the the transitions. So for this indicator we have different kind of inputs to be able to to measure
[14:23] the growth of of of cities. Uh and here we are showing three three images. The first one shows the built-up area
[14:34] change. The second one shows the how this affect the boundaries and the third one shows the integration of population
[14:40] and that's we talk very briefly about each of these inputs one by one. So what we need is to measure two kind
[14:49] of growth. The first one is what called the land consumption rate. And this one looks at how cities are actually expanding.
[14:57] And in the co-indicator we have the way we measure this is looking at the outward growth of cities.
[15:03] So So in the case of Riyadh here in the first in the first drawing or rather the first map is the black the
[15:11] black spots here represent the built-up areas of Riyadh in the year 1990. Then the blue is the built-up areas for Riyadh in 2000.
[15:21] Then the red is the built-up areas for Riyadh in 2013. So, as we can see from this this this this map here, Riyadh
[15:30] grew very over over the period of 23 years, Riyadh grew significantly from a small compact city to a city that is
[15:38] expands outwards in into all directions with a lot of growth happening to the north towards the north the north
[15:46] side. So, for this indicator what we're looking at is how is this city growing specially? And and to do this then we
[15:53] need we need the an input on the the built-up area the built-up layer of the cities. cities. So, so if if this is a simple is a
[16:02] simple input that I know Mariano and Alex are are going to discuss in the subsequent subsequent slides on how the trends are developing
[16:10] with this. So, we extract the built-up layer for cities and this traditionally can be done by normal image classification
[16:20] procedures in in GIS to extract what was built-up in in this city over during the different time
[16:27] periods. So, once we have this then we need to define what we call the dynamic functional urban areas. And this is
[16:35] based more on the the non-administrative functions of cities. So, here we look at specific things that affect how the city
[16:46] functions. And one of them is the key the key input to this is the growth. So, when when when an area is growing very
[16:53] fast and is connected to the city then this area is a functional likely to be more connected to the city than
[17:01] despite the fact that in many cases it might be outside the official city boundaries. boundaries. So, for this particular indicator
[17:08] we look beyond what is uh the the within the boundaries known as the official city boundary because the the
[17:17] the said the functioning of that city is not really restricted to that administrative aspect. So, in the case
[17:24] of Riyadh, for example, uh uh if if uh the boundary of this city was around the black
[17:33] black areas in in the the year 1990, then if you kept that boundary as a fixed boundary, it would mean that as
[17:39] the city grows outwards, then you're not really capturing the growth. So, for this particular indicator, we're looking
[17:45] at the the entire spectrum of of of urban urban level growth uh that defines what the city is. So, this
[17:53] is one of the just an example of the of of of Riyadh. This does not represent the official this the second map here in
[18:00] the middle does not represent the official classification of what is what is Riyadh in in the different years, but
[18:07] rather an analysis of the urban extent function of the city based on the built-up area density. Which this is defined by looking at
[18:17] within every 1 sq km of land, how much built-up area is for every single every single built-up was 1 1 sq km
[18:28] circle. And for this one, what we what we pick is if uh from every built-up pixel and within the 1 sq km circle,
[18:39] we have more than 25% of the area also built up, then that qualifies to to be an urban area. And that is how this
[18:48] boundary is here in the middle this the map in the middle have been generated just by analyzing the built-up
[18:54] area density for for this city in the different different the different years. What is important to picture is
[19:02] we're looking at not Riyadh not just as as a as an administrative area, but picking all the built-up areas where
[19:10] buildings happened within this time period. period. And we are we are using that to define what is the functionality called the
[19:18] functionality would be like a city area for this particular and this includes uh clusters of settlements that were very
[19:25] well connected all around around the main the main urban urban center. So, this we use this to create the dynamic
[19:33] boundaries then we can from this we can actually be able to see the change of of the city uh in the different periods.
[19:40] Then that is what we use to compute the land consumption rate component. And the land consumption component of the
[19:46] indicator is measured basically by looking at the the natural logarithm of the built-up the the urban extent. Here
[19:54] in in for example here would be the the for for the year 2000 here would be what
[19:58] is in yellow in this map in the middle. Uh that would be the area of the of the
[20:04] city of Riyadh in the year 2000. Then what is in blue inside the yellow ones is what would have been the area of the
[20:11] Riyadh the the function the the dynamic boundary of Riyadh in the year 1990. So, basically we'll be looking at that
[20:18] growth between the the area of 1990 and the area of 2000. And using the natural logarithm and the analyzing of of this
[20:26] kind of growth so that you get an annual growth in essence what you get from this is
[20:33] is we'll be able to say uh Riyadh grew by say 0.1% over the over the 10 years between 1990
[20:42] and 2000. Then that would be an annual an annual growth growth rate. The third component that is very
[20:48] important then is also to look at the population change. So, if if in the middle here we looked
[20:53] at how the city is growing specially. But then we also need to see how the population is changing against this
[21:00] boundary that we have defined. Uh what this means is we need to look at inside every boundary that we've created
[21:07] here using the built-up area and and estimate how many people are living within that area. Uh the best way of doing this is
[21:17] going to the national statistical offices offices and asking them to tell us because they have very high-resolution data at the
[21:24] household level and look at for the years of analysis and look at the tell us how many people are actually living
[21:31] within the those boundaries in that particular year. Then we use that then to compute the population growth rate
[21:38] over that period. But again, this information is very difficult to get in in some countries because of some of the years of
[21:46] analysis, some of them will not be directly aligned to the statistic the national censuses. So what happens
[21:54] is there different data sets that have been produced at the global level. They're called the gridded population
[22:00] data sets. And this what they what these data sets do is uh they look at the area of say the a
[22:08] census unit. They look within that census unit how many people are likely to be there. And to distribute this
[22:16] requires the different inputs. So I just say talk about one of the ones that is the most common one that looks at how
[22:23] many buildings are within a census unit and distributes population to all of them. So the the logic here is uh
[22:32] as opposed to creating a population density by distributing the total population to the area well in actual fact census unit might
[22:39] contain a national park or it might contain a water body. Then what you're doing is we're actually saying within
[22:46] this enumeration area or this census unit, people only live in buildings. So people should actually be counted
[22:54] as as a share of how many buildings there are in that in that in that unit. So this is how
[23:02] different the population data data sets have been created and and we have a lot of them the greater population of the
[23:09] world world different versions. I think the current one is version four. We have the global human settlement layer population. We
[23:15] have one population. So basically using this data sets then we are able to look at inside each boundary that we created
[23:24] the dynamic boundary that we created in the middle map here then we look for each year how many people are estimated
[23:31] of how many people are living within this area. Then we use this to then compute the compute the
[23:38] the share of the the the indicator aspect of the population growth rate. So from this then we are able once once
[23:47] we once we have this then we is is straight forward we measure the land the ratio of land consumption rate to
[23:53] population growth rate which is measured just by dividing the value we have for the land consumption rate by the value for the population
[24:01] growth rate. And this information is very useful for cities and for national governments because of many things.
[24:09] Uh the first one that I'd like to to mention is it helps cities understand their growth beyond the administrative boundary.
[24:21] So for example is the the there are two mayors who whose cities are next to each other.
[24:28] And a lot of growth is happening in one city and spreading to the other. Then it's only it's only important that
[24:35] these two mayors understand what kind of growth is happening and how they can collaborate and work together to for
[24:42] regional development as opposed to just people focusing or or decision makers focusing on the same area. So this
[24:49] indicator helps us to one to understand how cities are growing how fast they are growing which direction they are growing
[24:56] the kind of growth that is also happening is is it is it students? Is it Is it dispersed kind of kind of growth?
[25:03] And all this again help to determine service, the need for services, and and where investments are needed in that
[25:10] city. city. They help to support development of policies and sustainable urbanization as I mentioned because if if for example, a city is growing too
[25:20] fast into agricultural land, then this indicator will help us to understand. And And an important thing to note beyond what
[25:29] the core indicator requires is that the information produced by computing this figure of the land consumption rate
[25:36] to population growth rate is not enough for to for for the entire decision-making process. We require a
[25:42] bit more information on what is actually the kind of growth that is happening. And and this is very easy to produce
[25:50] this information just from the same inputs that we we have we are going to generate in the next slide through the
[25:56] trends up tool. One of the important ones is it would be to look at say when the city is growing
[26:03] outwards, which types of land uses is it eating into? So, is it in the Are the cities growing more into
[26:09] agricultural land? Are they growing into water? Are they growing to desert land? And so on and so forth. And and using
[26:15] the exact same inputs that I've explained there, the built-up area change, and defining the dynamic boundaries, then we can very easily be
[26:22] able to determine this. The second aspect that we can also look from this and that helps also in
[26:28] decision-making processes is how how fast are the cities also densifying inside? So, if for example, we have
[26:36] the main city area or the city border is saying the year 1990 as I was showing for the case of Kenya,
[26:42] then we'll be able to see within 1990 how much change happened within the 1990 area. So, we can we can actually
[26:50] calculate how fast the city's densifying versus versus how how fast the city is sprawling or is expanding outwards. And all this this
[26:59] information is very useful because then it it plays more into the decision-making process more solidly than just seeing
[27:07] having a value of the indicator. Uh a lot of a lot of people keep asking what the indicator means or the values
[27:16] what what are the values for the for the indicator supposed to supposed to mean. And And uh
[27:23] uh I don't want to point out that you see because the the values uh uh really vary a lot depending on how you
[27:31] want to look at it. So, for example, a city that is uh that is growing very fast outwards,
[27:38] the the the the target might be to reduce sprawl and promote more densification. densification. But, a city that is densifying very
[27:46] fast, the risk might also be you you you creating an informal settlement. So, so here is is not about
[27:53] having one figure that is a good number, but rather looking at this indicator value against most of the other what is
[28:00] also happening internally. I'll give a good example. If you have uh growth rate land consumption rate population growth rate figure that is
[28:09] equals to one, what it does mean uh literally is that every time new people come to the city,
[28:15] then the city is also growing outwards. You'd ask is this a good thing or is it a bad thing? It will depend because if
[28:22] the city is if the city is a very big city and is already too dense, then it
[28:27] might be a good thing. But, when you have have uh uh a small city that is expanding very very
[28:33] fast outwards, every time like new people come to the city, then it is also growing, then it is a bad thing because
[28:38] it affects a lot the service delivery for this for this area. And again, this applies to all cities. So, it is a a of
[28:45] balancing between not just the land consumption rate to population growth rate, but also seeing what is happening
[28:51] within that that side of the city. Uh another example is if we have land consumption rate to population growth
[28:59] rate value that is say 0.5, then it's like half half of one. Then what this means is that this city
[29:06] is densifying very fast. There's very little expansion happening outside. So, the question here would be is the
[29:13] densification formal or is it informal? How is it affecting the service delivery? Is it Is it resulting in
[29:20] congestion of services for for the people? Is it Is it resulting in say say lack of of people eating into open
[29:29] spaces in the city and so on and so forth. The last one is when you have the
[29:33] city city the land consumption to population growth rate value being so high, then the problem here would be how fast
[29:40] is is this city growing? Is it Is Is it Is the growth happening at the same rate
[29:44] as the that of the service provision? Is the just the external the kind of extensions of the city affecting how say
[29:52] people commute to the city and so on and so forth. So, in conclusion for this indicator, what
[29:57] you look at is it's not a single number of a value, but rather how this number is also relating to other aspects of the
[30:04] indicator. And And this this is very important because then it helps the decision-making process. Uh the last thing here where also this
[30:12] indicator is important is because when when you understand where growth is happening, happening, then there's a very high likelihood that
[30:19] you can assess the vulnerability or the say developments in environmentally fragile areas. It helps you to make put in place
[30:29] policies and plans to actually control this kind of growth to where where this is applicable. But more importantly, this indicator is
[30:38] very key to to the entire urban understanding because it it helps us move from understanding urban growth
[30:45] from a population just a population based based kind of perspective to actually being able to show the mayor or to show the
[30:53] the the governance structure of of of our entire urban system that growth is happening in these cities
[31:00] very fast versus growth is happening in in in other cities very slowly. And and one of the
[31:07] things that from UN-Habitat these past 10 years we've noticed is that or we've we've we've we've found out is that the smaller
[31:15] cities have been growing very fast outwards as compared to bigger cities. But this from now our understanding of
[31:22] more data based on this indicator computation, we're also seeing a lot of growth happening in the in the big
[31:27] cities because they're also expanding outwards very fast. So with this kind of with this kind of data from this
[31:32] indicator then we're able to actually understand better the urban system of of our countries and also putting the
[31:41] the data inform the policies and decisions that then help us shape whether to our urban agenda whether to
[31:47] densify some cities and whether to allow for a bit of suburbanization of some areas. And with these
[31:55] these few remarks I would like to welcome Alex who is going to take us through a bit on
[32:00] on the trends.earth tool. And from that we'll we'll be happy to answer any specific questions related to
[32:07] to these few slides that are from Dr. Thank you very much for your good patience and for listening.
[32:17] Thank you very much Dennis for the introduction. Again, my name is Alex Wallach. I'm senior director of
[32:22] Brazilian science at Conservation International and today as you've already heard, I'm going to talk to you about how to use the indicator
[32:33] 11.3.1 11.3.1 uh, in support of the sustainable cities SDG. So, again, this is review. You've already heard about this,
[32:43] uh, before from Dennis and Amber. Uh, but the goal for SDG 11.3 is to make cities and human settlements inclusive,
[32:52] safe, resilient, and sustainable. Uh, so to, uh, calculate whether or not this SDG has been achieved, uh, the international community has
[33:01] agreed on an indicator. That's indicator 11.3.1, 11.3.1, which is the ratio of land consumption rate to population growth rate.
[33:11] So, in order to calculate this SDG, there's two different things that we need. Uh, the first is a data set on
[33:16] urban extent, and the second is a population data set so that we can calculate this ratio of the land
[33:23] consumption rate to population growth rate. So, how do we actually get there to calculate, uh, this SDG? Uh, so the
[33:32] first part, of course, is estimating the population growth rate. Uh, so what you see here on the right-hand side of your
[33:38] screen are the equations that are actually used, uh, to calculate the SDG. Uh, so the population growth rate is
[33:44] calculated as the natural log, uh, of the population at time t plus one over the population at time t. So, uh, some future
[33:54] population, say 2015, uh, divided by the population in, for example, 2010 if you were calculating the indicator over that period.
[34:02] And then, uh, the second part is calculating the land use consumption rate. Uh, so that's the natural log, uh,
[34:10] of the urban extent at time t plus one over the urban extent at time t. Uh, so then at the end of the day, we
[34:17] can actually calculate the final indicator, which is the ratio of these two things. The ratio of the,
[34:23] uh, land consumption rate over the population growth rate. So, how can we use remote sensing in in
[34:29] order to support calculation of this SDG? Uh, well, a key part of this indicator, of course, is calculating the
[34:35] land consumption rate. So, what I'm going to talk about today is how we can use the trends.earth tool
[34:42] to calculate the land consumption rate using remotely sensed imagery. The second piece of the picture, of course,
[34:51] course, is population. And what we'll use today, and what's used in the trends.earth tool, is the Gridded Population of the
[34:58] World version 4 data set, which you might have heard referred to as the GPW version 4. So, this is available out of season.
[35:08] And this data set uses census data set, which is then allocated to a raster grid using methods developed by the group at
[35:20] CIESIN. So, there's something to note about mapping population growth rates using gridded products is that this can be complicated
[35:29] due to the changes in census units over time. So, it's very important to review the data sets for the particular
[35:37] area in which you're working as you can get biases in your population growth rates due to changes over time in census
[35:46] units. So, this is something to be aware of. of. It's not a problem in the underlying data set. It's just a problem with the
[35:53] fact fact that it's difficult to map changes in population over time given particularly as cities, for example, develop. There are many cases
[36:02] around the world in which senate census units will change or subdivide over time. So, we do always recommend if
[36:09] there is national level data available, for example, from the Bureau of Statistics for your country, we would recommend using whatever the
[36:19] best available data is that you can glean for the particular area in which you're working. So, how do we actually calculate SDG
[36:31] 11.3.1 11.3.1 in trends.earth? So, I'm going to go into this in a bit more detail in a
[36:36] second, but just to give you an overview of how the process works. Uh so, say for example, we're looking at
[36:41] the first point in time that we support, which is the year 2000. Uh the first step is to use satellite
[36:47] imagery. We use data from the Landsat archive archive to calculate an impervious surface index. This is an index uh giving an
[36:55] indication of the extent of impervious coverage coverage within pixel. Uh the next step is to convert from that impervious index into
[37:05] a map of built-up area. So, these are areas areas that are built up typically densest of course in the core of the city. You'll
[37:12] have less dense built-up extent typically on the outside, which we'll talk about in a minute. Uh the next step is to convert from
[37:20] those that simple map of built-up area into actually making map of the extent of a city, recognizing that of course
[37:27] you will have cases where built-up areas occur outside of a city. So, there needs to be a conversion made
[37:33] from just that simple map of built-up area to what's actually defined as a city. city. And then the next step is to combine
[37:40] that with population data so that we can actually start to get at the land consumption rate versus
[37:47] the population growth rate. Of course, we don't have any rates yet. We're just looking at one single point in time for
[37:52] the year 2000. Once we start to bring in data from additional periods, for example, 2005, we can start to actually get at the
[38:01] rate of change of population and rate of change of land consumption in order to actually map SDG 11.3.1.
[38:09] What we support in the tool is we allow this this to occur for multiple periods for 2000,
[38:14] for 2005, uh for 2010, and also for uh, So, using the tool, you can track changes, uh, between, uh, these four
[38:27] time points over time, getting three measures of SDG 11.3.1. So, now we're going to start digging into a bit more detail of how this
[38:38] process actually works. Uh, so, what we'll talk about in a minute is how we actually map built-up
[38:44] area within a city, uh, using the tool. So, the first step, uh, is to calculate, uh, from a stack of satellite images of land
[38:53] side data, uh, this impervious surface, uh, index. In a moment, I'll go into a bit more detail how we actually calculate that
[39:00] index, index, uh, but just know that this first step is actually precomputed. So, this isn't something you'll need to worry about
[39:06] directly when you're using the tool. Uh, you'll be working with, uh, precomputed, uh, impervious surface index maps, uh,
[39:14] which then you'll be converting, uh, into, uh, the maps of city extent using the options, uh, within the tool.
[39:24] So, this is that second step is using those precomputed maps of impervious surface index. The tool will allow you to set a number
[39:31] of different parameters, uh, to convert from these maps of built-up area into an actual map of city
[39:38] extent. So, I'll talk in bit more detail about these in a second, but the idea here is rather than producing a single
[39:44] global map, uh, city extents all around the world, uh, what trends.earth does is it allows you to produce a map customized for your
[39:54] particular area. Uh, this is important because of course, as we all know, in any global product, it can be
[40:00] uh, very difficult to arrive at a single approach that will work universally around the world, particularly with
[40:07] something like cities, where there's large regional variation and even variation, variation, uh, within a country, uh, on, uh, size of cities, how cities
[40:16] are defined, etc. So, what we do within trends.earth is we allow users to set a number of parameters to map
[40:25] a representation of city extent that makes sense for their given context. The final step then is to combine
[40:34] these maps of built-up area with global data on population, which as I mentioned before comes by default from
[40:42] the Gridded Population of the World, version 4 (GPWv4) GPWv4 data product. There's also the option within the tool to use locally available
[40:52] population data, which again we recommend when possible. And once this process is completed, you can arrive at
[41:00] the final SDG 11.3.1 indicator. So, for those of you who viewed our prior webinars on SDG 15.3.1 land
[41:10] degradation, for SDG 11.3.1, you'll have similar output, so there'll be Excel tables summarizing SDG 11.3.1 for these four time periods.
[41:25] So, as I mentioned before, the trends.earth tool provides for you pre-computed maps of impervious surface index. What this slide is describing is
[41:35] how we actually derive those maps using Landsat data. So, what we do is we draw on an existing
[41:43] data set, the Global Man-made Impervious Surface or GMIS data set, which is a global map of impervious surface
[41:52] area for the year 2010. You'll see the citation on the bottom right-hand side of your screen, that's our Merrick Brown
[41:58] and Coulston et al. What we do is we use that existing data set for 2010 to provide training data in order to
[42:04] develop develop random forest model allowing us to map an index of impervious surface area for other time periods. So, we use that 2010
[42:13] GMIS data as training data drawing on it to provide two different sets of information, training points for what we classify as
[42:22] high-quality urban areas. So, these are areas in the GMIS data set with high percentage of impervious surface cover,
[42:30] low error, and as a secondary check, we also require that they be mapped as urban areas in the ESA CCI land cover
[42:38] data product. We also then draw a training sample of non-urban areas of high quality. So, again, low standard error and low percentage
[42:46] impervious surface cover in the GMIS data set. And what we do is we train a set of
[42:51] models models random forest models to map impervious surface area. We noticed pretty early on that we couldn't use a single global
[43:00] model given differences regionally. So, what we do is we actually train individual models using map of terrestrial eco-regions. We
[43:09] train an individual random forest model for each of these eco-regions to allow for regional variations in how were
[43:17] the different predictors reflect impervious surface area in each eco-region. eco-region. So, at the end of the day, we end up
[43:25] with maps for 2000, 2005, 2010, 2015, and 2018 of this impervious surface index. Now, of course, at the end of the day,
[43:38] we don't want a map of impervious surface index. We actually want a map of city extent. So, there's two steps in
[43:46] getting there. So, the first step is converting from this map of impervious surface index to a map of built-up area. So, the way that
[43:54] we arrive at this map is we draw on some additional data, nighttime lights index, that impervious surface index that I just mentioned, and
[44:03] then also water frequency using the product from Joint Research Commission of the EU. And what we provide is
[44:12] what we call the Urban Mapper. You'll see the address for this website down on the bottom right-hand side of your
[44:17] screen. And my colleague Monica will introduce this to you in a moment. Uh but what the Urban Mapper does, it lets
[44:24] you play around with these three parameters parameters uh and see in real time how they influence the final map of built-up
[44:31] area. So, basically, as you increase uh values of the impervious surface index, uh that's going to reduce the amount of
[44:39] area that is considered urban because it's essentially thresholding the data. You require a higher level of impervious
[44:45] surface index to be considered urban. You'll of course be reducing the area that's mapped as urban. Uh the nighttime lights index
[44:53] uses the nighttime lights data uh to uh basically mask out areas of cities cities uh that are darker as you increase the
[45:02] value of that index. This is something that makes sense in some contexts, but in others, of course, some cities
[45:09] uh will uh if you have ungridded black power, you'll have uh higher values in nighttime lights than in other areas
[45:16] that may be uh more remote. And then the water frequency data set allows you to mask out areas uh
[45:23] depending on the frequency of water on a given pixel. And again, this is something you can play with on the fly. Uh Monica will
[45:31] demonstrate in a minute. Uh and we do provide some recommendations on uh default values to use uh for these parameters.
[45:42] So, once you've selected values using that Urban Mapper page uh within the trends.earth tool, uh you can input
[45:48] whatever values you've chosen. You'll see a screen like uh what you see right now. Uh these are those same values you
[45:54] saw before. ISI 20, nighttime lights index 10, water frequency 25. And what the tool will use is it take
[46:02] these parameters and convert from that impervious surface index into a map of built-up area. The second step is converting from
[46:13] built-up area to urban extent. Uh so of course not every area that is built up can be considered necessarily
[46:20] part of a city. Uh so what we do as a second step is uh allow the user to input parameters
[46:28] that define how we convert from built-up uh to urban. So what you see here are the default values that are used in the
[46:35] tool. Uh and these generally will work uh in the mid areas we've looked at, but of course
[46:40] you can alter these values as necessary. Uh so an urban area is defined as an area with greater than 50% built-up
[46:48] within a 500-m radius uh of that pixel, suburban from 25 to 50, and then rural uh less than 25%.
[46:58] We also consider open space because of course many cities will have parks or other open areas within the city that
[47:03] are still considered urban even though they may not be uh impervious. And so we define fringe, captured, and rural open
[47:11] space. space. Fringe open space are those open spaces uh within 100 m of urban and suburban areas.
[47:18] areas. Captured open space is that open space that is fully surrounded uh by fringe open space. And then rural open space
[47:26] are basically all other areas uh outside of the city. Uh so as before with the conversion from
[47:35] impervious surface index to built-up area, area, there's a screen that defines how built-up area is converted to urban.
[47:42] And so what you'll see here are those same parameters I just mentioned. Here the default is set to uh 25% built-up is
[47:49] considered suburban, 50% built-up is considered urban, and then we also have an additional parameter uh defining the area of the
[47:57] largest captured open space in hectares. So, what this influences is basically if you can imagine a park in the middle of
[48:04] the city, what's the maximum size that park might be and still be considered to be part of the city uh
[48:10] and and not uh just open space. The final step in the process is defining the area of analysis.
[48:18] So, we provide a number of different options for defining the area. Uh the first is you can use uh the data set
[48:25] that we include within the tool uh to pick a country and region or city on which you wish to focus.
[48:32] This is data provided from the natural earth data set. Uh we do recommend as with population, that if possible, uh
[48:39] it's much better to use nationally available or locally available uh information rather than the defaults that we provide because of
[48:46] course uh spatial data provided by your national statistics office uh will be what is uh nationally recognized as opposed to what
[48:54] we provide here, which is a publicly available data set, so we can't guarantee uh the accuracy for a given
[49:00] area. area. Uh so, if you do have uh information available from a national statistics office, you can choose that area from
[49:07] file option on this screen and that would allow you to define your area of analysis using for example a shape file.
[49:14] Uh if you have picked a uh point uh to input your city location, uh you'll probably want to check this
[49:22] apply a buffer option, which will allow you to look at some circular buffer around for example a point defining your
[49:28] city. Once this is done, then again you'll see more examples of this from my colleague in a minute,
[49:38] uh but once this is done, uh the tool will produce maps of urban area for 2000, 2005, 2010, and 2015.
[49:47] This is focusing on Kampala in Uganda. This is showing an example of the map for 2000. What you see in red is urban area,
[49:55] orange suburban, green open space uh on the fringe, and then the darker green is captured open space. And of
[50:04] course, the blue uh is water. If we go through time, this is Compal in 2005, 2010, 2010, and 2015. So, you can see the growth of
[50:19] the city extent over time. And then of course, uh the final output of the tool uh you can see here a map
[50:28] summarizing uh SDG 11.3.1 uh from 2000 to 2005, 2005 to 2010, and 2010 to 2015. And you'll also see some information
[50:41] summarizing uh population uh within each of the uh different types of uh urban extent or urban suburban built-up open
[50:50] space. Uh so, this tool uh is uh still undergoing testing. Uh we've had of course uh support from our partners. Uh
[51:02] NASA is working to test this tool uh within the United States using some existing data, which I'll show you in a
[51:08] second. Uh we're also working closely with UN-Habitat uh with Dennis and his team to test the tool in a number of uh
[51:15] cities around the world. Uh we're working with partners in Mexico, Peru, and not Columbia uh as well uh to test
[51:22] and apply the tool. And just to show an example of some of the work that we're doing uh within the
[51:28] United States, this is led by uh our colleague Lahouri uh Bonala at uh NASA, and this is showing for 25 cities uh in
[51:37] the United States uh comparison of the values for the impervious surface index, nighttime lights, and water frequency that performed best
[51:46] uh for each of the cities uh in the US. And this is in part what's been used to
[51:50] guide guide the default values of these parameters within the tool. So, as far as next steps for this work
[52:01] on 11.3.1, as I mentioned before, we're continuing to work with partners such as NASA and UN Habitat on the verification process
[52:10] of this tool and also to provide regional guidelines on the most appropriate parameters to use for different areas of the world. We
[52:19] have also noticed some issues in hyper-arid regions where it can be difficult to map built-up areas in part
[52:26] due to confusion of previous surfaces with soil. So, that's another area that we're continuing to look at. We're also in close contact
[52:34] with with providers of graded population data like Season, as I mentioned before, to provide better guidance to users on the
[52:43] most appropriate appropriate, rather, population data sets to use for mapping changes in population growth rate. rate. And then, of course, we're continuing
[52:54] capacity building efforts as well, of course, both through Our Set as well as through UN Habitat. So, thank you for listening to this
[53:06] overview. Of course, this is available within the QGIS plugin trends.earth. Further information on the methods I just described and on usage of that tool
[53:16] is on the website http://trends.earth. The third link that you see on your screen is the link to the Urban Mapper.
[53:24] So, that page that helps with selecting the values for the parameters to use in the trends.earth tool.
[53:35] And now to go through this and provide an example of how to actually use the tool to map SDG indicator 11.3.1, I'll
[53:42] hand it over to my colleague Monica Noon, Noon, who's senior manager of data science for resilience here at Conservation
[53:49] International. Um hello everyone. My name is Monica Noon. I'm the senior manager of data science for resilience at Conservation
[53:59] International. And I'm going to walk you through a demo of SDG indicator 11.3.1 um using the trends.earth plugin to
[54:07] QGIS. QGIS. Um so again, once you open your QGIS um software version two, um you can check to make sure that you
[54:17] have the plugin visible here. Again, if you don't, you can right click and make sure it's checked on. Um and if
[54:23] not, if you haven't downloaded it yet, um you can go through the plugins menu um as demonstrated in session one.
[54:32] So, you'll go to the calculate indicators icon. Um and today we'll be going over this urban change and land
[54:38] consumption indicators, the SDG indicator 11.3.1. Now, by clicking on that, you'll have these two options. Uh step one will be
[54:47] calculating the urban change. So, click calculate urban change spatial layers. And you'll see this um window pop up.
[54:57] Now, we actually have um a little um browser-based page that you can use to explore the different parameters. So, as
[55:06] Alex explained earlier, um we have these different impervious index, nighttime lights index, water frequency um in order to determine where those
[55:15] built-up areas are. Um so, what you want to do is click on that from the tool and bring up this um
[55:22] Earth Engine Apps page and uh zoom in with your mouse to an area of interest. Today, I'm going to look at uh Kampala,
[55:31] Uganda. Uganda. So, we'll zoom in a little bit so we can see roughly where the city extent is.
[55:37] So, with those default indicators that I have already in the the toolbox, I can hit run analysis. And then you can
[55:44] see that this is populating some information here. The reason we have this in the toolbox is so you can play around with these
[55:51] indicators. So, you can determine what fits best for your area of interest. I can change this to different values.
[55:59] So, for example, if I think that the nighttime lights index is is not capturing the information correctly, I
[56:05] can change these accordingly. So, we have this set as default values. However, you have the option to change
[56:13] this to different values and keep hitting run analysis to populate the the map with that with those values.
[56:24] I think I'm going to keep those default indicators. indicators. So, I'll go back. Here, I'm selecting 20
[56:30] for the impervious surface index, 10 for nighttime lights index, and 25 for water frequency. frequency. So, then I'll hit next. And here you can
[56:39] define define how you want to define your urban areas. So, what percent it will be considered built up
[56:47] and what percent will be considered urban. urban. So, I'll leave these again at the default. Sub urban is 25%. So, all
[56:53] values below this will be considered rural areas. And then 50% all values below this will be considered sub urban. So, this is
[57:01] just breaking it into urban, sub urban, and rural areas. And also this area of largest captured open space, which is
[57:10] 200 m or sorry, 200 ha. So, the reason that we've actually selected this option was for example, in New York City,
[57:18] there's there's Manhattan has a large park called Central Park that many people have visited if you go to New York City.
[57:26] However, this is a very massive multi-block park. And when we were early on running this indicator, we were
[57:33] finding that this was being considered a non-urban park. So, we decided to add this open space. So, that includes large
[57:40] parks or large natural areas within urban areas. Then we have this population definition, the gridded population of the world.
[57:48] Same data set for both of these. Um I'm going to select the first one, population density consistent with
[57:54] national census and population registers. registers. Then I'm going to go to my country. So, I'm going to select Uganda again.
[58:04] Um just selecting here this first level will then filter the other two. So, now that I've selected
[58:10] Uganda, I'll be able to find Kampala, the city of Kampala in their drop-down menu. Now, this city layer is just a point
[58:19] layer. layer. Um so, if I had another city layer, maybe the what I think the extent of my
[58:25] area of interest is, I could upload it here. Um but since I I don't really have any information for Kampala, I'm just
[58:30] going to select city, but I'm going to apply a buffer. So, I'm going to enter a 20-km buffer
[58:36] because Kampala, if you remember from uh this map, this actually looks quite large. Um this point will be somewhere
[58:44] in the city center. So, if I want to capture some of these things on the outside, um I'm going to make it the
[58:50] buffer slightly larger. It will take longer to run as a result. So, then I want to type in some
[58:58] information, Kampala, Uganda. SDG 11.3.1. Um and here I like to type in some notes. So, if you've changed these from
[59:09] the defaults, you'll want to add in that information there. So, I would impervious surface index, say 20,
[59:24] 10, water frequency 25. Also, if you've changed these information suburban urban open space you can add that there.
[59:42] 50% 50% Um, I did a 20 km buffer from that point. Um, and then open space we had 20.
[59:55] 200 200 hectares. hectares. So, now I hit calculate and again, you'll see this blue bar pop up and
[1:00:04] notifying that it has been submitted to the Google Earth Engine. So, now it's running on Earth Engine
[1:00:10] Cloud servers and um, we can check our our download list again by going to this this download results from Earth Engine
[1:00:21] hitting refresh and we can see here my task is now running. Okay, once your um, you've refresh
[1:00:32] refreshed your list and you see that the uh, task is completed, you can hit download results. It'll prompt you to
[1:00:39] save the file of course. So, we're just going to say Kampala Uganda. And then 20 km for that 20 km buffer.
[1:00:53] We'll save that and it's going to load to the map. So, now we have urban area change.
[1:00:59] change. So, this is your change map um, showing built up by 2000, built up by 2005, 2010, 2015 and of course no
[1:01:07] data in water areas of water. So, to get the um, spatial the final spatial indicator for SDG 11.3.1
[1:01:18] and the um, tabular output we can go back to the calculate indicators and select again urban change
[1:01:26] and land consumption indicators and then select step two, calculate urban change summary table. So, as you can see under input, since
[1:01:36] I've already run downloaded that layer, we have the urban change layer already pre-populated. Can select next and save our outputs.
[1:02:06] Again, I like to select and copy that so I don't have to type it again. Hit next.
[1:02:19] I'm just going to use these the areas that I've already selected, so Uganda, Kampala, again applying that
[1:02:27] buffer of 20 km. And I can give the name of final. It's going to calculate this locally.
[1:02:36] So, now we can just let it run. It'll run quickly and it'll give us some data layers for each of those time
[1:02:43] steps as well as the output table. So, here we can see we have urban area for 2015 and it gives us some
[1:03:08] information. It's a little more detailed than that urban change area. So, for each year we have urban change for 2015. For example, we
[1:03:19] have the urban areas, suburban areas, again defined by that those percentage uh parameters in the tool. We have
[1:03:27] built-up rural, we have open space, and these again um can be altered by those those parameters that we entered.
[1:03:35] And we have a nice little time series if we click on and off all of these, we could see the change over time.
[1:03:44] Which is then um um demonstrated in this final layer. We also have a an output Excel uh table which has this information as
[1:03:57] well. Um so this will be summarized for the indicator that's um the SDG indicator land consumption rate
[1:04:04] um to get at the SDG 11.3.1 um growth rate in land consumption. So here we have the breakdown again of
[1:04:12] those two time periods from 2000 to 2005, each between each time step, how that population change um has occurred,
[1:04:21] uh the growth rate of the city area, the city area change, and then those values are used to calculate land consumption
[1:04:29] rate, which eventually then leads to this this uh SDG 11.3.1 indicator, um the actual consumption rate over population.
[1:04:41] And we have a little chart that also demonstrates that over time. So that is uh the demonstration of how
[1:04:49] to run SDG indicator 11.3.1 using trends.earth in QGIS. Thank you. So again, I'd like to thank our guest
[1:05:01] speakers for being here with us today and providing those really interesting, informative informative presentations and walking us through the
[1:05:09] trends.earth tools for sustainable cities. cities. Um we are going to have some time for questions. questions. But if your question does not get
[1:05:18] answered or you have a follow-up, you can email myself or my colleague Juan Torres Perez, and our email address is
[1:05:25] shown here. If you have general ARSET inquiries, you can email our program manager Adam Anna Prados. Prados. And again, feel free to check out our
[1:05:35] ARSET website. There we have a lot of different trainings and different application areas. And um they're all
[1:05:43] listed there, freely available, ready for you to um watch the recordings and to um get the presentations and
[1:05:49] exercises. So I really would like to thank you all for being here with with us today. Um
[1:05:57] and I want to provide a reminder to complete the homework by August 6th. So that's 2 weeks from now. Um and we'll
[1:06:06] have some time for questions now, but I really hope that this training provided you with um some new tools and new
[1:06:14] information about how you can address the SDGs in your work, whether it's on a country level or local level, or you're
[1:06:25] just wondering about how to get integrated and what data to use and um what the approaches are. So um I hope
[1:06:32] this was an informative training for you all, and um we hope to continue our work on providing SDG focused trainings with
[1:06:41] ARSET in the future. And I also just want to remind everyone that we will be following up via email
[1:06:48] with a survey um for you all to complete. And these are really, really valuable to us here
[1:06:54] at ARSET. We we take these to heart. We appreciate your um constructive criticism on how the training went, what
[1:07:03] you liked, what you didn't like, what you want to see more of in the future. And that's what we really use these
[1:07:09] surveys for in a lot of ways of identifying the needs in the community and developing our trainings
[1:07:17] around those needs. So, we do really appreciate your participation in those surveys and and that your feedback there
[1:07:24] as well. Um so, thank you again and we will now open it up for questions. And once
[1:07:31] again, you can type your questions into the Q&A box and we'll be displaying them and answering them as we go in the
[1:07:37] document and um we'll we'll provide that on the website um at in a few days as well. So,
[1:07:45] thank you. Uh again, this is Axel Schramm Conservation International. Uh what what we're going to do here is
[1:07:55] Dennis Lwanga is still on the line. I think questions one and two would likely be best addressed by you.
[1:08:03] Um so, I can hand it off to you uh Dennis for questions one and two. Yes. Yes. Uh
[1:08:10] Uh the question one, would you explain how the relationship materializes between land consumption rate and population growth rate?
[1:08:18] Uh Uh as I mentioned for for this for this particular indicator, the you get a value. So, the first
[1:08:25] the the denominator of the indicator will be a value that represent the land consumption rate, which is an annual growth rate of the or
[1:08:32] rather is is an annual rate at which the land is the being consumed in that city. Uh the the denominator would be the rate
[1:08:39] at which the population is is is growing at an annual level in that city. So, the the ratio of the two will
[1:08:46] give you a value that could represent different things. So, if you if you have say a value that is less than one, it
[1:08:52] means that for this particular city, then the the population was growing faster than the the land consumption. So, it it it it it
[1:09:01] points towards a densifying city. If a value is more than one, then it means that the land consumption was
[1:09:06] happening at a faster rate than the population growth rate for that city. And and so on and so forth. So, for some
[1:09:12] cities, you also have some cities which lose their populations or they lose part of the urban area, say for example, because of
[1:09:20] a disaster or because of aging population or shifting population. So, for these particular cities, you get a negative value for the
[1:09:28] indicator, which which could would would would would be based on whether the population was declining or the actual
[1:09:34] urban area level settlements actually decreased. So, this then this this the interpretation, as I mentioned in my
[1:09:43] other recorded presentation, is really very depends on depends on how you how you relate this to the other kind of
[1:09:50] indicators. indicators. The second question is how how the balance is achieved on the two fronts which I mentioned, increased
[1:09:58] forestation and increased urbanization. Uh Uh I'd like to talk a bit about the increased urbanization. I assume that
[1:10:05] the increased forestation means that is the reduced urban sprawl. So, again, this is very relative to the area. Some
[1:10:13] cities really require to be densified, other cities need to have less a bit of redensification or reduction in the
[1:10:22] densities. And this for for from our UN-Habitat perspective is we promote densification, but not too much densification which then results in
[1:10:31] informality in that particular city. So, so the balance is actually looking at how the indicator values really balance with other
[1:10:40] services, say for example, provision of in that city, availability of open spaces in that city, and so on and so
[1:10:46] forth. So, if you have a city that is sprawling or is growing out at a very fast rate, then that is a problem
[1:10:51] in many different fronts. And this is a challenge that we are having a lot with many cities where we have a lot of
[1:10:57] sprawling developments which which eating to other kind of land uses. So, I think that for me would be the
[1:11:04] explanation. Alex Apologies finding my mute button. Uh thank you, Dennis. Um and then for question three, uh there's a question on how do you
[1:11:22] determine in Trends.Earth the approximate value of the population living within a 1 square kilometer box, which are the required inputs?
[1:11:31] As is noted here already, there are a range of different gridded data sets to estimate population. Some of those include those from season,
[1:11:41] JRC, European Commission, WorldPop, etc. What's used right now in Trends.Earth is the gridded population of the world,
[1:11:49] GPWV4. GPWV4. So, that gridded data set, which again is produced by season, is what's used as a default. You can in the summary table
[1:11:59] that's produced at the end of the tool, you can input your own population data if you have it.
[1:12:05] And I recommend, of course, listen back to when we discussed this in the webinar, but just briefly there are some
[1:12:10] issues assessing population growth rates from gridded population data sets. So, for that reason we do recommend that if
[1:12:18] possible using locally available data that's applicable to the units of analysis that you're focused on is best.
[1:12:28] Question four, does NASA have a database of geospatial population or demographics going to be used for disaster
[1:12:35] management, for example, evacuation, disaster severity, etc. etc. As noted in the response here from the RC team, it's best to refer to the C DAC
[1:12:46] socioeconomic data and application center center for our information. information. And it looks like actually there will be
[1:12:53] an upcoming webinar as well with a guest speaker talking about remote sensing applications related to disaster risk management. So, I'd encourage you
[1:13:01] to look at those resources that are listed in the response to answer four. For question five, which NASA/ESA
[1:13:11] satellite platforms and instruments are used for measuring NDVI? NDVI? So, as noted in the response here, there's different sensors that can be
[1:13:19] used to assess NDVI. We presented in the last two webinars primarily focusing on using MODIS data, which is 250 m resolution to assess
[1:13:30] trends of productivity over time. For this tool for the urban analysis for SDG 11.3.1, we're using 30-m data from Landsat. And Mariano Jose
[1:13:44] Roglich, who's also here, could add anything there if there's anything he wants to add. And no, no, like you said,
[1:13:50] for this indicator in particular, what we're using is Landsat, and you So, what we're doing is a a time
[1:13:56] series of NDVI for different years, and you you can refer to the documentation where they explain There's a stack of
[1:14:02] 20-something bands that we use for each year, but it's the source is is Landsat, yeah. yeah. And then the next question is probably
[1:14:09] best for you also. Yeah, question number six, what does impervious surface index mean and how do you calculate it? So,
[1:14:17] the meaning of it the impervious surface index it's an index that ranges between zero and a hundred, and lower values are
[1:14:25] more correlated with areas where there's no impervious surface, so areas with vegetation, with where there's no built-up human built-up.
[1:14:34] And higher values represent areas where there's higher imperviousness, so usually buildings, roads, things are constructed by humans. And also areas
[1:14:43] with rocks, so that that's also an impervious surface. That's why then we do need to use these these different
[1:14:50] thresholds like nighttime lights or to to differentiate what is human and what is natural. Uh how do we calculate it? We used we I
[1:15:00] would recommend that you check the website transat.earth. There's we have a section that we added yesterday on SDG
[1:15:06] 11 with a very detailed description of how we computed what we did is we used um the global man-made impervious
[1:15:15] surface data set produced by NASA. Um Eric Brown de Coulston was the the PI of that project. It was um a product of
[1:15:24] impervious surface for 2010. So we used that an ESA CCI land cover data set to train a set
[1:15:32] of random forest models using Landsat data. So what we we used that model, we trained it for 2010 and
[1:15:39] then we applied to a series of years to create a time series. Uh and again the the step-by-step
[1:15:45] explanation of all the inputs, the outputs, and the assessments that we did are on the website. So I would recommend
[1:15:51] that you check it there. Question seven. Sorry, I cannot see it here. Are there efforts to take sustainability
[1:16:00] methods such as these and expand it to watershed level as management unit? Therefore, conserving creating sustainable area, urban, suburban,
[1:16:09] agricultural and wild areas. Um probably Dennis may be may may know more about these. I don't know if Dennis if
[1:16:18] you want to add something to these questions. questions. In response to this question. Sure, not from not from our side because
[1:16:28] um um we are more focusing on the urban kind of of look of things because our our mandate
[1:16:34] is also on the urban urban urban aspects of the human settlements. So but I think it's the already there there's a lot of
[1:16:42] opportunities emerging from the SDGs framework that actually links the urban growth and different kind of land uses like watershed level
[1:16:53] management. So I think it would be interesting to see maybe within the broader SDGs framework that they
[1:17:01] this kind of application and and what is required for the watershed management. Okay, thanks for that Dennis.
[1:17:09] Um question number question number eight. Are all the world countries considering the calculation of urban changes? Um
[1:17:21] Um so yes, we did yes and no. We did train the model globally so we used like Alex mentioned in the
[1:17:31] presentation, we used the core regions to train different sets of model for different regions. We tried to run it globally and
[1:17:38] it's covering most of the of the cities on earth. But there are some areas for which we
[1:17:44] did not find training data. That had to be with limitations on the original data sets that we used. So again, you're
[1:17:51] going to see that in in the website we posted some maps and some statistics on on some of the cities for which we we
[1:17:58] were not able to generate data. Most of them being small island states. So you're going to notice that there's many
[1:18:08] I think it represents a pretty small number. We did an assessment on 224 cities and I think it was
[1:18:16] less than two or three percent the ones that did not have the data but there are some without data, there are
[1:18:23] some for which the data set has very it's not really working very well so that's why it's important that you
[1:18:29] assess the results for your area but it's working well for about 85% of the of the cities globally.
[1:18:40] Uh and then for question nine, uh the Salex can how do we export these layers to a TIFF? A trial on the previous
[1:18:48] exercises leads to a 35 band raster and then it's difficult to identify which band represents which layer.
[1:18:55] Uh yes, that's a good question. Uh right now there's a little trick to see what those layers are if you go to the load
[1:19:03] data tool uh in trends.earth, that will actually show you the names of each band. band. Uh that this is a question we've gotten
[1:19:11] before. What I will do is I'll try to get this up later today. If you go to
[1:19:16] our website uh trends.earth, I'll add under the documentation section uh description for each of the outputs uh
[1:19:24] with uh what each band uh is and how they are coded. Right now that information is available in the JSON
[1:19:31] file that accompanies your download, but that's not uh very accessible. So, definitely will uh add more information there, so stay
[1:19:39] tuned uh on for more information on the coding. Uh question 10, back to Mariana. Perfect. Uh question 10, I would like to
[1:19:48] know about the validation process of the urban map. Um So, assessing data set like these one it it's it's challenging
[1:19:56] as you can imagine and that's why we we decided to create a a tool that that allows the user to really customize the
[1:20:03] results for the area. That being said, we we understand that doing validation and assessment are important, so we did
[1:20:10] uh several things. So, the the first one that we did was assess the sort of the error that we were finding between our
[1:20:17] our impervious surface data set, the the 2010 layer, and the one that we used for training. And by comparing those two, we
[1:20:23] estimated the RMSE, the root mean square error, and the values that we found for the subset of cities where we tested it
[1:20:31] was around 10%. Uh which is which for an index that ranges between 0 and 100, it's relatively low.
[1:20:38] So, all sort of the first assessment that we did of of it's not Yes, the determinate number that's going to say
[1:20:45] it's good or it's bad. Uh but it pointed us in a in the right direction. Then, the other assessment that we did
[1:20:51] is the one I was mentioning that it's now posted on the website. Uh where we took pretty much every capital city in
[1:20:59] the world. Those were 200 data set of 200 cities. Uh and then we also used analysis analysis on the largest
[1:21:08] um um cities in the US that added other another 24 cities. And what we did is we
[1:21:15] we compared the results of the tool to high spatial resolution images to see how how the build-up index matched, how
[1:21:22] how how well it was representing the build-up area in these cities. And for that, we did a
[1:21:28] It's a subjective evaluation, but we we ranked it from 0 to 5. 0 meaning no data, 5 meaning it worked perfectly
[1:21:35] well. Uh and and we used that as sort of another assessment. And we posted that on the website so you can see what are
[1:21:42] the values, and then you can also see for each of the cities for which ones we had good data, for which ones we had bad
[1:21:48] data, and what are the parameters that we used. Uh and the third sort of validation verification that we're
[1:21:54] planning on doing is is relying on you. Uh because we do need we there's so much assessment that that we can do. We
[1:22:02] really need your input, the users running the tool. So, when you go to the to the tutorial
[1:22:08] to the step-by-step guide, you're going to see that at the end there's going to be a little box in which we request to
[1:22:15] to for your feedback. So, we we put together a little Google survey. So, at the end of the tutorial, you can click.
[1:22:22] It takes 30 seconds to fill. But what we're asking there is what are the parameters that you used for which city
[1:22:29] uh and then what is your assessment of that result? Was it totally useless and and it didn't provide any information?
[1:22:37] Again, using that same scale from zero to five, zero being very bad to five being perfect. So, I think that is
[1:22:45] going to really inform us on on the quality and the usefulness of this data set for really assessing the
[1:22:52] SDG. So, sorry, that was a long answer, but we we do really are trying to produce a product that is validated,
[1:22:58] verified, but it sort of challenging with a global data set combining so many different things. Uh for question 11,
[1:23:08] how can we import our own population data? It depends on what you mean. If uh you've noticed in the final output of
[1:23:17] the summary table that's produced for SDG 11.3.1, if you scroll down in the Excel sheet, there's a table of population. You can
[1:23:26] replace those numbers and the Excel sheet will recalculate the SDG 11.3.1 indicator. So, that is one way you can
[1:23:34] replace the gridded population data we provide with your own population data. If you're talking about importing a
[1:23:41] gridded population data set that you have uh that's a different data set right now, that's not supported uh
[1:23:48] directly within trends.earth, but we'll definitely uh add that to the list of uh requests for uh future features.
[1:23:56] Okay, back to Maria for the next question. question. Question 12, there's two parts here. The first one is how well does Landsat pick
[1:24:04] up vertical build-up in a on the interior of cities such as skyscrapers, high-rise buildings? And the answer is
[1:24:11] how well? Not well at all. Uh with Landsat, what you're doing is is picking up that sort of the footprint of the
[1:24:18] built-up area. So, you cannot differentiate between a house and a skyscraper, skyscraper, skyscraper, sorry. Uh So, with that's why what we're
[1:24:26] measuring is built-up area. We're not really assessing the volume of the city in terms of how high the buildings are.
[1:24:35] And then the second question is how to distinguish built-up areas from bare lands lands in arid and semi-arid using Landsat
[1:24:43] data. data. There's two things here that we're doing. First is Built-up areas have a very constant signature throughout the year. So, it
[1:24:56] doesn't really change with the throughout the seasons. It's It's always impervious. So, the reflectance is It's pretty constant. Areas where there's
[1:25:09] bare bare lands, it's bare, but there there is some vegetation or some changes in humidity when it rains or So, there
[1:25:17] is some some variability throughout the year. So, we're trying to capture those two different characteristics of these
[1:25:23] two surfaces by using statistics of of the time series of of the reflectance over time. So, we're
[1:25:30] using the median of the of each of the bands and then a series of indices, but also we're including variability over
[1:25:37] the time. So, a built-up area is very constant, but it while in in soil or bare areas, there there may be some
[1:25:45] flexibility when but some variability when it rains and when when a few grasses grasses grow up. So, that is when we're building the
[1:25:52] model and when we're training the random forest model. And then at the end, the the last sort of control that
[1:26:00] we do for that is what you're doing in the urban mapper is using nighttime lights. So, that is sort of the the
[1:26:05] final control that you can do to differentiate between these two types of of areas. You're going to notice that if you only
[1:26:14] use impervious surfaces, the the top of mountains, which are rocky are going to come up as as build up. But, these areas
[1:26:21] have no lights usually because there's no people living there. So, we're using nighttime lights to to mask those out
[1:26:27] and and just focus the analysis on the cities. cities. Um one last key point is that you're not
[1:26:34] going to find one set of parameters that is going to work for your for the globe, not even for
[1:26:40] your country. So, it's important that you run these analyses at the city scale. So, you need to look at the
[1:26:46] better zoom to the city like Monic explained in the in the example, um and then define the parameters that work
[1:26:52] well in that area. If you have a mountain 100 mi away, well, it may not work well there, but you should be
[1:26:59] running the analysis on the city boundary. So. And one thing I would add related to that uh is uh so, some of you may have
[1:27:07] noticed there's a new version of the tool QGIS uh plugin uh version .66. Uh if you're using the new version of
[1:27:15] the tool, you might notice a message pop up uh if you try to run a very large
[1:27:20] area for the urban analysis. And this is related to what Mariana was just saying is that we do recommend that
[1:27:26] you run this analysis at the city scale. Uh and there will be a message that pops up if you're the area that you specify
[1:27:34] is greater than 10,000 sq km. Is that right, Mariana? Uh it's the another question. Sorry, for QGIS 3.10.1, it's 10,000 sq
[1:27:43] km. Yeah, it's 100 by 100. Yeah, 100 by 100 at the kilometers. Um so, you may notice that
[1:27:48] message popping up if you have the new version of QGIS. With the older versions, you won't get that message,
[1:27:53] but your task uh will likely still fail if you try to run a very large area. So,
[1:27:59] if you do try to run the urban tool and you see a task failing, it's likely that
[1:28:03] you're trying to run a very large area. So, try to run a smaller area, and of course, we recommend upgrading to the
[1:28:09] new version of the plugin, which will automatically detect that for you. Uh and then for question 13, when
[1:28:20] defining urban pixels, do you define a 500-m buffer or a 564-m to correspond to 1 square kilometer
[1:28:29] area? area? I believe So, in the tool we're we're using a 500-m buffer, yes. Uh Uh I don't Yeah.
[1:28:41] We're We're Is that a projection? Yeah, I I don't know where these numbers the the 560 Well, the 500-m buffer wouldn't be Yeah.
[1:28:53] 1 square kilometer. So, I guess the question is it 1 square kilometer area or is it 500? No, it's a 500-m buffer that we're
[1:29:00] doing, yeah, around of each pixel. That's how we yeah, how we coded in the tool, yeah. Uh question 14, how uh how are the year
[1:29:12] yearly Landsat stacks created? Are you using all available scenes, maybe depending on cloud coverage? Are there certain months preferred, chosen for
[1:29:21] specific regions? That's a great point. Um Um So, what we're doing is the time series that we're creating is
[1:29:30] it starts in 1998. Um so, we're producing a stack for 1998, one for 2000, one for 2005, 10, 15, and
[1:29:40] 2018. 2018. Uh for each of those years, uh uh yes, there we do filter for of course
[1:29:48] for cloud coverage and and quality of the images. So, each of the images we don't filter the images, what we do is
[1:29:54] we remove the clouds and we use all the useful information that it each Landsat scene has. Um
[1:30:01] Um in many areas, especially in for the earlier years, for 1998 and 2000, uh image availability is a is a seriously
[1:30:10] limiting factor. So, we what we had to do was to use for each year, so what we
[1:30:16] call for example 2000 is actually combining 1999, 2000, 2001. So, we're using information from the year prior
[1:30:24] and from the year after of the the name of that how we call that year. year. Um
[1:30:31] Um So, we're yeah, filtering, masking, and we're using images the last point for throughout the year. So, it's all the all the image avail all
[1:30:40] the images available. And like I said, we we have different ways of summarizing them. For some, we we use
[1:30:47] the median. So, it's a measure of sort of centrality within the the the year variability. And for
[1:30:54] others, we used the We also included a median, and we also included standard deviation as a measure of the
[1:31:01] variability to be able to capture pixels that were uh constant over time and like the ones that are built up and there pixels that
[1:31:08] were changing in terms of reflectance, uh uh which usually are associated with more natural land covers. And then for question 15 relates to
[1:31:18] Liberia, I haven't worked there, but Monica has. I'll pass over to Monica. Thanks, Alex. Um so, in the last Q&A
[1:31:25] session, you mentioned that you have operated in Liberia um in other Eastern African countries. Um Western Africa,
[1:31:32] right? right? Um please under which ministry or office or institution can I connect with your activities? I'm currently living in
[1:31:37] Liberia and would love to connect um in any capacity. So, um first of all, we actually have a
[1:31:44] Conservation International office in Liberia. Liberia. Um and we have a uh GIS analyst based out of there as well.
[1:31:54] Um in I guess March of 2018 when we held the the capacity training um workshops with UNCCD.
[1:32:04] We had member from the the Ministry of Environment Environment as the GIS expert at that workshop. So,
[1:32:12] we worked pretty closely with him in the past over the past year and a half. And he's been using the tools for
[1:32:19] different purposes. So, you can just email us I guess directly at trends.earth@conservation.org trends.earth@conservation.org and we can connect you
[1:32:28] to our colleagues in Liberia. Thanks, Monica. Question 16, why is random forest select the select the algorithm instead of
[1:32:38] another AI algorithm? Um Um we use random forest that that there are others which probably could have been
[1:32:47] used. Random forest has been proven to be successful for this type of analysis, so that's where we went with it.
[1:32:53] And also I guess one other thing is that we were running this analysis in Google Earth Engine and random forest is one of
[1:33:00] the models available. So, I guess the combination of it's one of the best models available and it's the
[1:33:05] one we we had access to. But if someone has other suggestions of other models that would be more appropriate, please
[1:33:13] reach out and we we're constantly trying to improve the the data set, so we can definitely test that. Thanks.
[1:33:21] Twitter Uh question 17, you want to go for it? Uh sure. When selecting the population definition, we have two
[1:33:27] options. Which one is higher or sorry, which one is higher in general? Which one is optimal for analysis? So, what
[1:33:34] this is referring to is in the urban indicator calculation, you can choose between the UN corrected population statistics or those
[1:33:43] that are consistent with national estimates. estimates. Uh I wouldn't say that either is going to be generally
[1:33:51] higher. It's going to depend on the country that you're looking at. And which one to choose is really more a
[1:33:58] question of what it is you're doing with the data. Typically for most users that we've worked with, if you're working in a
[1:34:05] government ministry, you're going to want to use something that matches your national statistics, so that may be the
[1:34:10] preferred choice, but there's not one that is generally preferred. Yeah. Yeah. Question 18, is there a way to use
[1:34:20] watershed boundaries for the buffer instead of a circular buffer? Um Um yes, we we do not have watersheds
[1:34:28] preloaded in the in the toolbox, but you can use your watershed watershed shapefile or just polygon in the tool.
[1:34:36] So, you in that same window where you define the study area, you can use the your own watershed file to run
[1:34:44] the analysis on that. Um again, we do have that limitation of a 100 by 100 km area, so if your watershed is is
[1:34:53] too big, you're not going to be able to run it, but if it's a watershed that it's circumscribed to the city, it will
[1:34:59] work fine. Um question 19, is the model compatible with tropical countries? We also have a very heterogeneous land cover.
[1:35:10] Plus bad zoning practice, hence my question. question. Um Um the model in terms of the impervious surface model, I imagine is the question
[1:35:21] is referring to. You're going to notice again in the when you check the verification, the sort of
[1:35:28] that that assessment that we did in in 224 cities, that it works pretty well in tropical countries for most of them. There are
[1:35:38] some regions though where cloud coverage combined with low sort of a small archive of Landsat images, then the model in some of these
[1:35:50] areas it's not performing very well. But for most tropical areas, it works great. Yeah. So, I would say again,
[1:35:58] you're going to notice this very well when you start testing the the Google mapper for your city. You're going to
[1:36:03] see that for a few cities, if the image availability is very low, you're going to see that the results
[1:36:10] look more striped or it's not really capturing well where the urban area is, where the built-up area is.
[1:36:18] Question 20. Is there a general rule of rule or method for determining the threshold for the different indices, impervious surface,
[1:36:27] nighttime lights? Because for example, we can be two person working about the same region but choosing different
[1:36:34] values. It will impact Will it impact the calculations? So, that's the first question. Um Um for that one,
[1:36:44] um we do We do not have a set of recommended values that you can use. Uh what we did is we provide there what
[1:36:52] we consider were the best values for for the different regions. Uh but it's true that if if two
[1:36:59] different people with different criteria would would run the analysis and they choose different parameters, the results could vary. Uh they wouldn't vary
[1:37:06] greatly because if you use 5% more or 5% less, it means your built-up area would increase a little bit more or less, but
[1:37:15] the trends in the in the SDG 11 would not significantly change. So, it's a matter of sort of what the objective of the
[1:37:22] analysis is. If If you're If you're What you're trying to get is the actual built-up area, then those numbers would
[1:37:29] vary. If you're interested more on the trend on the SDG, so how how the sustainability of the city is is
[1:37:35] trending, then that would not be affected very much. The second part of the question um is is is there a great population data? Does
[1:37:47] the greater population that exists for Morocco if we can export urban layers to use it for another analysis? So, the
[1:37:55] greater population data yes exists for Morocco. These are global data sets. So, you you can check those. How good they
[1:38:03] are though it will depend on on the data provided to build a model. So, again it's one of the things where global data
[1:38:09] sets has its limitations, but but the data is global. Then, how can the layers be exported for
[1:38:16] other analysis? All the layers that we produce in Transit Earth are GeoTIFFs. So, you can use all the results that you download can
[1:38:24] you can use them in in any other GIS software. So, it's a matter uh of yeah, just download the results and then they
[1:38:31] can be loaded in any other GIS. For question 21st, I think Dennis would be more fitted to
[1:38:39] answer this question. It's what is the basis for defining the percentage of urban and suburban? Yes, uh so for for this one too, we are
[1:38:48] using the approach called the uh our city urban extent approach to city definition. And uh what we look at
[1:38:55] is is within every 1 square kilometer of a pixel around around each built-up pixel, we look at how many other pixels
[1:39:03] are actually built up. So, if 50% and above of the of the surrounding pixels are built up, then that area qualifies
[1:39:10] to be an urban area. Then, if it's between 25 to 50% of surrounding built-up pixels, then that that that
[1:39:17] area is a suburban area. Thanks, Dennis, for that. Um and and in the tool, remember that these parameters uh can be changed. So,
[1:39:30] we we're following sort of those those guidelines, but you you can customize those. those. Question 22nd, is there any evidence to
[1:39:38] use only 1 year before and after the AM year to deal with the data. Um Um So, our approach, what we're trying to
[1:39:47] do here is ideally we'd like to use only images for the the target year. Uh so, we started with that and that's how we
[1:39:55] realized that there was uh uh not not enough data in many regions. As you can imagine, developed countries,
[1:40:03] well, especially in the US, the Landsat archive is is huge and it's pretty much every image has been recorded and
[1:40:09] stored. So, it it's a compromise. We we started with just the target year and then we we're slowly increasing the time
[1:40:17] year period. Our our uh goal was to make it that window as narrow as possible, but have data for most places. So, it it was
[1:40:26] more of a of a compromise between uh the ideal and the data availability. Uh question 23, how long should the
[1:40:38] processing take? I submitted the job and it's still running after 20 minutes. Yeah. Uh that is a great question. Uh it depends
[1:40:47] on the size of the area that you're running it on. Usually, the test that we have been running takes up
[1:40:56] about 30-40 minutes to run. Uh that being said, uh we're running this analysis, remember, on Google Earth
[1:41:03] Engine Engine and there is the there is a when a lot of tasks are submitted, some of the tasks are taking longer. So, I
[1:41:12] imagine that right now, since all of of us are submitting tasks and testing things, the analysis may take a little
[1:41:18] bit longer. Uh so, I would say have a a bit of patience. Um but as long as you
[1:41:24] don't get a a fail message, you're going to be fine. Uh even if if it seems like
[1:41:31] waiting for an hour is a long time, uh uh we did discuss this with UN-Habitat and with our NASA colleagues. Uh and it's
[1:41:40] it's an hour of waiting, but if this analysis, if you had to download the data, do the pre-processing, and do all
[1:41:46] the analysis, you're talking about weeks of work. So, you even if it takes a little bit uh of time, uh
[1:41:54] don't get frustrated. You can get a have a coffee in the meantime. We're We're giving you some time to take a break.
[1:42:01] Um Before you move to move on, um I also just want to remind you um that that if you have that download window open,
[1:42:10] it's not going to automatically refresh when the results are done. So, make sure you hit that um refresh results
[1:42:18] um in the downloads window. Or refresh list. So, it may actually already be done as well. So, um just hit
[1:42:26] refresh list every time, so you get the latest. Perfect. Question 24. The urban area mainly makes with sand, bare land, rock outcrops. So,
[1:42:42] how to improve the classification for urban extraction? While working at regional level, build up or mix with these land features.
[1:42:52] Um Um are you I I Well, I would like to to hear my back for this person. Maybe if you if you
[1:43:00] could send us an email with the area where you're running it and the parameters, then then we can definitely
[1:43:06] uh provide a a response that is going to be more useful. Uh yes, there are some areas
[1:43:11] where these these mix-ups are happening, like like we explained. Uh for more most of the areas, it's not. Uh if if for the
[1:43:19] areas, if you find an area where this this is happening, uh but you think that's that the overall data set is
[1:43:26] providing insights, uh you could download the results and then do some some cleaning up on on a GIS
[1:43:34] software you could do it in QGIS. Um but yeah, it would be useful to know what is the area where you're testing
[1:43:41] and on the parameters and then we can give you a more informed informed response, a more useful.
[1:43:50] And I think that's all the questions. Um unless there's any others coming in. Um I guess I'll give them one more
[1:43:59] second, but otherwise in the meantime I also wanted to mention uh I'm sure of course there may be
[1:44:05] questions about uh the methods, the tool, etc. after uh the webinars are finished. Uh we do have
[1:44:13] an email list serve. If you go to trends.earth on the homepage, scroll down to more information and you'll see
[1:44:21] a link that says join the trends.earth discussion group. So that's a Google group where if you have any questions
[1:44:27] about methods, about the tool, you can feel free to send an email to that list and one of us or someone else in the
[1:44:34] community of users can get back uh to your question. So feel free to contact that group uh with any questions and we encourage
[1:44:41] you to join. And I think that's it for the questions, so so uh thank you from all of us here at
[1:44:49] Conservation International. And uh we'll hand back over to Arset. Great. Thank you all and um we really
[1:44:59] appreciate you staying on and answering these questions. It was a really great discussion. Um so just a few reminders
[1:45:06] before we close down for this um training series. Um we have included a link to um a survey.
[1:45:16] Um Um Or we will email you the a link to a survey about this training and we really
[1:45:23] appreciate you all um taking the time to go through and answer those questions, tell us what you liked, tell us what you
[1:45:29] didn't like, and really tell us what you'd like to see in the future because we use these survey responses to develop
[1:45:37] our training materials, um, and plan for future training. So, we we love to hear that feedback from you all. Um, also, if
[1:45:47] you want to provide information in that survey about how you are working with the SDGs or if you'd like to see more
[1:45:54] trainings focused on SDGs, please let us know. know. Um, Um, also, if you would like to receive a
[1:46:01] certificate of completion, please do remember to complete the homework, um, by 2 weeks from now, August 6th. And the
[1:46:10] link to the homework is on the training web page as well, and it's it's a Google form that that you submit this way. And,
[1:46:17] um, do please be patient with the the certificates. They take about 2 months to send out to everyone. So, after
[1:46:25] um, you've completed the, um, the homework there. So, um, again, we'll have the answers to the, um,
[1:46:34] questions and the recording posted to the training website, um, within a few days, maybe about a week. Um, and so, do
[1:46:43] please come back to that and revisit it as needed. Um, and then do take advantage of the, uh, listserv and the
[1:46:52] TransLator Group for any questions that you may have along the way. So, thank you all so much, and, um, we really
[1:46:59] enjoyed this this webinar series, and, um, have a great day.
