# Gauging Long-Term Heat Stress in Refugee Settings, Part 2/2

`https://www.youtube.com/watch?v=Qb8PMcZGs6w` · id 62 · 1:58:03 · module 48 — Humanitarian Applications using NASA Earth Observations

[00:03] Welcome back to the ARSET training, Earth Observations for Humanitarian Applications. Applications. My name is Sean McCartney and I'm an
[00:09] ARSET trainer based at NASA's Goddard Space Flight Center in Greenbelt, Maryland. Maryland. It's a pleasure to welcome you all back
[00:16] to the second part of this three-part webinar series. The following slides provide an overview of the three-part webinar series on
[00:24] Earth Observations for Humanitarian Applications. Applications. So, why would somebody want to take this training? training? More than 114 million individuals have
[00:34] been forcibly displaced worldwide as a result of persecution, conflict, violence, or human rights violations. Refugees, internally displaced people,
[00:45] and other displaced populations are made more vulnerable to climate change impacts due to their socio-political marginalization. marginalization. Recent Earth Observation driven research
[00:54] that recognizes this has made progress towards characterizing the manner and magnitude of climate-related risks in humanitarian settings.
[01:04] By the end of this training, participants will be able to recognize the importance of measuring flood risk,
[01:10] long-term heat stress, and drought effects in refugee and IDP communities around the world. Apply workflows incorporating Earth
[01:18] Observations, geospatial, and demographic data to identify localized climate risk in refugee and IDP settings. settings. Discuss decision-making strategies for
[01:29] mapping and managing climate conditions with risks faced by refugee and IDP communities. communities. Summarize opportunities and shortcomings
[01:38] of specific Earth Observations and geospatial data sets for climate risk and development indicators in humanitarian settings. Prerequisites for the three-part
[01:50] training are listed below along with links to each training. Over these three weeks, from June 6th to
[01:57] June 20th, there will be three 1 and 1/2 hour sessions which will include presentations, demonstrations, and question and answer sessions.
[02:05] All the materials, code, and recordings from each session will be available from the training webpage. If you are not able to attend one part,
[02:15] a recording will be made available within 48 hours of the training day, which can be found on the ARSET website.
[02:22] Homework opens on June 20th and will be due on July 5th. You will be able to access the homework
[02:28] from the training page on the last day of the training. A certificate of completion will be awarded to those who attend all live
[02:36] sessions and complete the homework assignment before the given due date. The objectives for the second part of
[02:43] the training are as follows. By the end of part two, participants will be able to identify and apply open geospatial
[02:50] data sets, global model global model outputs, and Earth observing data and products to analyze long-term heat stress for refugee camps anywhere in the
[02:58] world. And summarize specific humanitarian challenges when gauging long-term heat stress in refugee camps. Please put your questions in the
[03:08] questions box and we will address them at the end of the webinar. Feel free to enter your questions as we
[03:14] go. We will try to get to all the questions during the question and answer session after the presentation and
[03:19] demonstration has concluded. The remainder of the questions will be answered in the Q&A document which will be posted to the training website prior
[03:27] to next week's training. It is now my pleasure to introduce the guest trainers for today's webinar, Dr.
[03:35] Andrew Zimmer, a research scientist at Montana State University, and Dr. Jamon Van den Hoek, an associate professor of
[03:41] geography at Oregon State University. Andy, over to you. Thanks, Sean. Um Um my name's Andrew Zimmer and a a research
[03:53] scientist uh here at Montana State. I'm a human environment geographer um and I study uh climate change and human
[04:02] interactions um on various different scales. Um but very excited to be here to talk to you about heat stress in
[04:08] refugee settings. Thanks, Andy. Um my name is Jamon Van Den Hoek. I'm a professor at uh Oregon State University, the geography
[04:17] program, and work on different kinds of humanitarian applications of earth observation data um in conflict and refugee uh displacement settings like
[04:28] what we're speaking about today. Um Um looking forward to uh going through all of this with you and uh let's get into
[04:36] it. We're we're focused today on uh the part two, gauging long-term heat stress in refugee settings. So, um just to sort of set the stage um
[04:46] for where this work is this part of the training is coming from um um displacement into refugee settings is a
[04:53] global challenge. Um recent estimates uh though these are these numbers, of course, are are out of date almost as soon as they're
[05:02] published. Uh this is from last published last June, June 2023, but they're based on uh 2022 data. So, we're
[05:11] we're uh higher than this as far as we know. Um over 100 million people are forcibly displaced.
[05:18] Now, of that population, um about 35 million people are are refugees. refugees. Um these are uh the subset of the
[05:28] forcibly displaced population who have crossed international borders, who have sought asylum, and been granted asylum. Um uh certain kind of legal protection
[05:37] status in countries um that typically border uh the places that that the refugees fled from in in place. So,
[05:45] these are neighboring uh refugees moving into neighboring countries as by far the most common trend. And as you can see, uh, in both
[05:53] cases, both of these trends were were just really increasing, uh, over the last decade or so. Pretty steady
[06:00] increase that, uh, started, uh, 2011 was notable for the Syrian Civil War. And, uh, we unfortunately don't have a
[06:08] shortage of large-scale armed conflict causing, uh, people to make the decision to leave their homes, leave their cities, and, uh, often take
[06:18] a very long journey by foot, um, across international borders, uh, which itself, the journey, uh, itself can be precarious
[06:27] and dangerous. Um, the the one way to view this, and one way to think about this, um, is
[06:35] it just the the sheer scale of refugee, uh, settlements across the globe. Uh, this is a map, um, based on UNHCR data
[06:45] from last summer, um, also timed up with the charts we were just looking at. Um, we have some very large-scale,
[06:54] um, um, uh, uh, populations, uh, across sub-Saharan Africa, across, uh, the Middle East, um, and some other sort of hotspots in some
[07:05] sub- South Asian countries as well. Um, Um, this this global distribution, um, just really shows how far reaching this is. You can
[07:16] think about overlaying this with about any kind of other map you'd like to make, whether it's, um,
[07:22] the kind of political leadership, or, uh, the kind of climate zone, or, uh, forest cover, or land cover, right? Any
[07:31] other any kind of map you you might make from Earth observation data as well. You're going to see extreme variability
[07:38] across these settings. Uh, this is covering, um, a broad swath, right? Over 60 countries. So, of course, you're going to have uh
[07:47] high variability in conditions, both socially, but also environmentally, climatically. climatically. Um and this training is really trying to
[07:56] take stock of the variability that we see in um um extreme heat. And the it's motivated by the concern um
[08:07] of of already so many populated refugee populations populations um being settled in in areas that are already some of the the hottest places
[08:19] uh in the globe. And the likely scenario that that most of these places are just going to become
[08:26] uh hotter over time in in coming decades and um potentially are going to be placing refugee populations as well as
[08:36] the the population that's not refugee that's that's just living in in proximity or nearby refugees facing similar kinds of extreme heat
[08:47] challenges. So, this is a map that we contributed to uh the li- last IPCC um report. Uh this is from the working
[08:57] group two chapter eight poverty, livelihoods, and sustainable development chapter. Uh it's one of the figures. There's a box associated with this as
[09:05] well. So, uh I'd point you to that if you're interested in sort of reading more about it. But, this took stock of
[09:11] the global distribution of camps as they were recorded at the time. Um both for refugees as well as
[09:18] internally displaced person camps, IDP camps, around the world. And um basically overlaid these with the um uh
[09:29] uh background map at the time looking at um days with temperatures exceeding 35°C in a forecast scenario um
[09:39] in um 2041 to 2060 and this is a change estimate so it's the the increase in number of basically very hot days.
[09:48] Um Um and so you can see while the analysis doesn't provide a camp by camp a level
[09:55] breakdown, you can see that there is a a really a tight um overlay correlation between sites where
[10:04] we have high IDP or high UNHCR uh camp densities today with respect to places that um are likely to really increase in the
[10:16] number of extremely hot days uh where the darkest regions on this map are uh showing upwards of uh 90 100
[10:25] uh additional days of extreme heat um in basically the mid-21st century. Um so, you know, this is
[10:35] this is the kind of assessment that is is really necessary for understanding just what is likely to come so that we
[10:42] can start making changes today and start developing policy frameworks to support these what will inevitably be very
[10:49] difficult decisions around how to best protect uh refugees who um are extremely vulnerable, right? They've left their homes. Uh they often
[10:59] don't have any resources um and they often don't have uh the kind of uh rights of freedom or
[11:06] mobility that uh many of us around the world take for granted, right? They're they're living in a camp and they may be confined to
[11:13] that camp with restrictions on what they can do for livelihoods, um what kind of uh formal services they can access or
[11:21] institutional uh institutional support that they can access, uh whether that's um voting or um seeking medical care, uh educational uh
[11:31] systems, right? They they have certain restrictions on what they can do that a lot of the global community, global
[11:36] population doesn't face. And And how those kind of restrictions are going to affect uh, or how um, heat stress are going to
[11:45] affect refugees given those kind of constraints constraints is is the big worrying factor. Um, this is, you know, just one part of
[11:54] a much broader concern of global climate change, um, potentially making uh, conditions unsuitable and potentially uninhabitable uh, for the
[12:05] regions that are currently hosting refugees. So, these are two different um, um, papers that show kind of different sides
[12:11] of this story. We don't have the the refugee camps over laid here, but um, but both of these are showing uh, on the
[12:19] left-hand side change in suitability where the darker red regions are areas that are changing uh, expected to change um, for the
[12:28] suitability of human presence and and livelihoods livelihoods um, the greatest um, in terms of a decline in suitability. And then
[12:35] similarly on the right-hand side uh, that dark red is going to be the number of days above uh, this this uh,
[12:42] so-called deadly uh, temperature threshold here. Um, check out these papers if you'd like to to learn more about the methods, but
[12:49] they're telling a complimentary story uh, which is um, change is coming, extreme extreme um, um, change in some regions it uh, seems
[12:59] likely. Um, and uh, the some of these regions that are the most prone to change are uh, today places where we we
[13:08] see most of the world's refugees who have um, some of the fewest resources uh, to deal with this change.
[13:14] Now, Now, extreme heat um, is of great concern. I mean, the data are certainly pointing in this
[13:20] direction. However, uh, it's arguably um, um, very under explored in refugee settings in the sort of systematic way.
[13:30] Um Um we know that um this we expect the um impacts of exposure to extreme heat to
[13:38] be very pronounced in places like refugee settings where we have socioeconomically disadvantaged communities communities um with very few resources to adapt. I
[13:48] mean, this is our refugee and other displaced communities really through and through. through. Um Um We also know that refugees face a
[13:57] certain kind of additional vulnerability in that they have been displaced into these areas and uh the lack of familiarity at
[14:07] least at the in the you know early days of displacement so to speak um with the local climate, the language, the customs
[14:15] um that sort of novelty um it just means that they're um a bit isolated, right? From the kind of institutional support
[14:24] that uh again a lot of us take for granted. Unfamiliar risks, unknown risks. risks. Um and without the sort of um
[14:33] the uh institutional support to to necessarily make change in any of those directions. directions. Um Um The other concern is is that and and
[14:45] this is something often of a um uh uh commonly held um uh belief, but it is actually incorrect
[14:53] that refugee settings are are brief, that they're temporary. Um that's not true. I mean, the average stay in a
[14:59] refugee camp by the last assessment that was done showed that that average stay is more than 10 years. Uh that varies,
[15:07] um but we certainly wouldn't call most refugee experiences short or brief. In fact, many are intergenerational um and and decades long in some cases
[15:21] for certain displaced communities. So, it's it's this combination of um the persistence of displacement. So, the these scenarios looking at mid-21st
[15:31] century, these are not out of question for some of uh today's uh people who are becoming refugees this
[15:38] year. Um they may still be displaced in 20 years. Their children may still be uh displaced in 20 years. This is This is a a really
[15:48] um worrisome scenario. The persistence of displacement, combining that with advancement of climate change and increasing heat exposure, um
[15:57] it's it's a very worrying um scenario. Now, our study is is looking at two East African settings in Uganda and Kenya. Um
[16:08] Uganda is a is the largest refugee host country in Africa. There is currently over uh 1.5 million people, broadly um
[16:18] from South Sudan, um but also a large share from Democratic Republic of the Congo. Congo. Um you'll note that the statistics on
[16:25] the left and the map on the right are a little bit out of sync. Uh the statistics on the left are are more
[16:30] up-to-date than um than uh the than the um map on the right. Um Um the the refugee settings in Uganda tend to be
[16:40] rural. So, most refugees live in rural settings, um not in in cities or nearby large cities, um but they are certainly
[16:49] surrounded, effectively embedded in a fabric of um other rural, often agrarian communities, communities, uh that are referred to as host
[16:58] communities. These would be non-refugee host communities. Um the population of refugees uh is about um 50/50 between um
[17:08] women and girls and and men and boys. So, it's fairly split in that way. Um but children comprise um over 57%
[17:17] of refugee population. There's not a very large um, elderly refugee population right now. Um, so it's very um,
[17:25] biased towards youth. Um, which is sort of you know, is indicative of the the potential um, concerns for a lot of these
[17:34] children who are today refugees um, growing up in this kind of um, in in a displaced setting for uh, for uh,
[17:43] not a normal childhood, but perhaps longer. longer. Um, Uganda um, is lauded for its uh, refugee policies which are considered
[17:53] liberal liberal and um, very focused on refugee self-sufficiency and food security. So, this this places a lot of it emphasizes
[18:02] a lot of support towards refugees for um, for sort of developing um, uh, livelihoods and for uh, farming the
[18:13] land and managing the land for um, achieving their own um, food security. This is uh, one of the few policies in
[18:21] the world that that does or one of the few countries in the world that has a policy like this.
[18:25] Um, Um, but it's a difficult policy to really follow through with on some ways with that the promise of it is difficult to
[18:32] be achieved because we're seeing increase in droughts, we're seeing increase in temperature. Um, this affects uh, you know, whole regions.
[18:42] It's not just refugees uh, of course that are being affected uh, by a regional drought. Um, but uh, refugees
[18:50] of course having uh, fewer access fewer access uh, limited access and fewer resources to different kinds of support
[18:56] services, it it potentially uh, impacts refugees um, greater than it would um, non-refugee populations. Um, in Kenya just east of Uganda, um,
[19:10] it's also very large uh, refugee country. We're at um, nearly 800,000 refugees. This is uh, broadly um,
[19:20] Somalian refugees as well as uh, South Sudan and uh, Democratic Republic of the Congo just like um, the the last two
[19:28] there uh, being in common with uh, Ugandan uh, refugees in Uganda. Um, Um, it's a very different geography, uh,
[19:36] refugee distribution in Kenya compared to Uganda. Whereas pop back one slide, whereas in Uganda as you can see on the
[19:44] map on the right, we have refugee camps distributed across, refugee settlements I should say, distributed across uh, the
[19:51] northwest and the southwest of the country. Uh, it's about 30 um, settlements across 13 uh, districts. Um, there's much greater concentration
[20:03] in in Kenya. Uh, we have a large urban population in uh, Kakuma in the northwest and then we have
[20:11] um, this large population in Dadaab um, in the east. Um, and then there's a a smaller but still substantial population
[20:20] in uh, the capital of Nairobi. Um, Um, we have um, also a similar pretty uh, balanced uh,
[20:29] breakdown in terms of uh, uh, uh, gender parity. Uh, it's about 50/50 between women and girls, boys and men
[20:36] um, in Kenya's refugee population. A little bit uh, larger proportion made up by children overall at 56% uh, but still
[20:44] a a small uh, relatively small uh, elderly population. Um, Kenya has uh, similarly aspirational refugee policies focusing on education, health care and
[20:56] livelihood opportunities um, in a in sort of a similar direction as as Uganda. Um, but there are similar
[21:04] challenges to achieving these um, these kinds of of uh policy outcomes when we have uh restrictions on on uh resource
[21:13] access, when we have uh challenges, uh restrictions as well to to mobility, um to the ability to to leave refugee um
[21:22] camps in Kenya. There's a much more mobility, freedom of movement in Uganda. And we also just have this um
[21:29] concentration, which itself, like these very large uh populated uh densely populated uh refugee areas in in Kakuma
[21:38] and Dadaab that present a different kind of challenge compared to what we see in um Uganda, which is a little bit more
[21:45] distributed. Um these are populations at the district level. Uh it's important to note to not necessarily just um not just
[21:52] the uh the camp level, the settlement level in Uganda. Um so that that population density um also, you know, uh
[22:00] adds additional um challenges. We still have have uh large populations, but um perhaps living in closer proximity, um and and
[22:09] difficult sometimes to understand the sort of demographic specific needs, um uh the variation within a certain camp
[22:17] and camp populations. Now, there's been some recent work from UNHCR looking at uh trying to develop a
[22:24] plan plan um um to address extreme heat among other uh climate hazards. This is uh graphic from
[22:31] climate action plan for the East and Horn of Africa and Great Lakes region. Uh there's a link in the lower left if
[22:37] you'd like to check this out. Um this is a plan that is a 5-year plan and uh up
[22:42] to date, so this plan is effectively in place right now. Um and it basically is trying to um contend with some of the
[22:50] expected challenges like we see uh portrayed on the right-hand side, where we have this baseline estimate of heat.
[22:58] I don't have the the color scale here, um but so think of this uh, being relative. Um,
[23:04] think about uh, you know, this history of the 40-year uh, baseline on the left-hand side and then we see this
[23:11] future heat map on the right and this increase in red shows uh, increased likely heat in uh, 2030,
[23:20] which is, you know, um, 6 years away. Um, this these challenges of of of um, increased heat and other climate hazards
[23:31] are certainly not just uh, Uganda or Kenya wide. I mean, this this um, map shows that in fact, Sudan and
[23:38] South Sudan, um, regions of Somalia, um, Djibouti, Ethiopia, these may be seeing um, some of the more um, overall, some
[23:47] of the greatest rises in in um, extreme heat. Um, so what we're going to go through today is is an approach to
[23:55] really try to establish a baseline approach that um, isn't just tethered to Uganda or Kenya, but of course has
[24:02] relevancy across uh, these broad regions. regions. Here's a map showing um, something similar to what we're going to
[24:08] be doing today, um, looking at the heat index. So this is um, in this case, days above 41° C, so a different threshold
[24:14] than what we looked at before with the IPCC graphic. Um, we can see from the baseline conditions here looking at areas in red
[24:22] that are especially um, uh, concerning as having extreme heat in an extreme ranking on the heat index. And if I jump ahead, um, by 2040,
[24:33] uh, we see of course much more red. Um, similar map to what we saw in the last
[24:39] uh, two slides ago where Eastern Kenya is showing some of the sort of areas of greatest concern, but um,
[24:46] you know, regionally, um, we're seeing much more concern in South Sudan, Sudan, Somalia, Djibouti rather than Ethiopia.
[24:55] Um, so again, this is a widespread challenge. Um, we don't necessarily have um, refugee populations across all these areas of
[25:04] concern, but but this map shows um, the black dots, you can see areas uh, they're those are those designate
[25:13] um, um, encamped uh, sorry, displaced populations. And of course, there's uh, a a pretty good um, overlap between where we see uh, those
[25:23] black dots and where we see some of these red pixels. So, again, a really worrying um, potential future that we need to um,
[25:33] develop some some data around to to develop some place-based solutions, to develop different options today, uh, well ahead of when these extreme
[25:42] temperatures just become completely untenable and uh, literally dangerous uh, to human health. Um, Um, which Andy will talk about in just a
[25:52] couple of slides. Uh, that the actual dangers. Uh, why why uh, extreme heat is so dangerous. Um, so, in refugee
[26:00] settings, um, there's there's not a lot right now that um, is really been undertaken to set out the um, uh,
[26:10] protocol or or kind of plan around addressing heat risk. Um, it's recognized that this is a concern, but
[26:17] we don't really have the kind of data at the camp level. It hasn't been taken up in a sense like what we're going to be
[26:23] working with today. Um, these kind of data at the camp level have not really been integrated. Um, climate risks are
[26:30] not uh, uh, mentioned in any substantive way in um, UNHCR, that that's the UN uh, refugee agency's camp site planning
[26:39] minimum standards or the principles and standards for settlement planning documentation. documentation. Um, there's a a little bit of a blurb on
[26:46] climate hazards, uh, which is important, but um, you know, we don't have any sort of minimum standards. Um we don't have a
[26:55] um clear guidance on how climate risk should be even assessed at the camp level. Some of our other work has
[27:03] focused on this with say a a multi-variate multi-variate index of of environmental exposure. Um but we don't really have anything um
[27:11] mainline at this point where there's uh terrific uh amount of uptake um between what we can do from the
[27:19] scientific level at scientific level and what we can do at the policy level. Um I would say one of the best examples
[27:26] of of sort of a promising way forward is um this report called extreme heat preparing for the heat waves of the
[27:32] future. It's a joint report put out uh a couple of years ago uh by the Red Cross,
[27:38] United Nations Office for the Coordination of Humanitarian Affairs, that's UNOCHA, and the Red Cross Red Crescent Climate Center. Um more than
[27:46] any other document, um this does dig into um thinking about displacement settings and thinking about camp settings and the
[27:54] particular vulnerabilities in camp settings as well. Um so there's a lot of good information here. Uh recommend uh
[28:01] you you um take a look at this if you'd like sort of a more in-depth sort of
[28:06] planning perspective on um some of the the topics we're talking about today. Um but they it does a really good job at
[28:14] providing this overview here, um some of which we summarize in this slide. I'm going to hand it over to Andy now to
[28:22] talk more about uh the physiological um impacts of extreme heat and how we can measure it. Okay, thanks Jamin. Um and we're we're
[28:34] going to move over a little bit now um to talk about some of those heat impacts to human health. So, um Jamin Jamin did
[28:43] a really good job of outlining kind of where refugee camps are located and and the types of people that
[28:50] live within those and kind of pointing out that that those are vulnerable people. people. Um and often those those refugee
[28:57] settlements are are placed in areas that are already experiencing extreme heat and climate projections suggest that that they will do into the future and
[29:07] and potentially um get a little bit worse, too. So, any effort we can make to sort of understand these connections
[29:13] in a little bit more detail um is certainly beneficial from a policy perspective um and being able to to plan
[29:20] humanitarian relief to some of these these settlements. Um and so to sort of establish a baseline understanding of of what
[29:28] extreme heat is and and why it's hazardous. It If you've ever been in a place that that is really hot, I'm I'm
[29:34] sure you know that it it can be quite uncomfortable. uncomfortable. Um but when it gets to really extreme
[29:39] temperatures, um it can be hazardous to human health. Um and the incidence of of extreme heat events is increasing as a result of
[29:47] climate change both in the frequency of extreme heat events, but also in the duration. So, we're having um heat waves
[29:53] that that are happening more frequently, but also for for a longer time period. So, if this is say a month in the
[30:00] summer, it may be 2 months and and and expanding into the future. And the exposure of of people to extreme
[30:06] heat um going to have a really wide range of impacts for for every human. Um people experience heat differently um in
[30:14] different places around the world, but also based on um any pre-existing conditions you might have, how old you
[30:20] are, are, um your sex. Um they can result in in kind of a different outcome from a heat
[30:26] and health perspective. Um so, for example, um pregnant females, um children, older adults are all especially vulnerable to the impacts of
[30:35] extreme heat. Um children, for example, I know Jim and mentioned earlier refugee camps are comprised of a a lot of
[30:43] children. They're they're really vulnerable to extreme heat. Children have smaller bodies and so they're less able to kind of cool
[30:50] themselves down. They can be dehydrated and lose fluids a lot quicker and so if they are exposed to to to these kind of
[30:57] really hot conditions, their bodies can suffer a lot more quickly than than an animal. And the the negative impacts of extreme
[31:07] heat heat we know about them. We can predict them and to some degree we can also prevent
[31:12] them. So there are various different suggestions for different populations to be able to sort of avoid heat
[31:19] exposure. Often a lot of these rely on the use of air conditioning or cooling methods to be able to sort of cool you
[31:26] down and and reduce the load on your body so you're not sweating to to cool you down and relying on that is as kind
[31:32] of the sole method for for maintaining maintaining body temperature. But often in in refugee and vulnerable settings, informal communities,
[31:43] these kind of their access to these resources doesn't necessarily exist in in the way that it does elsewhere in the world
[31:50] and so people are exposed to these hazards but also have have kind of no way of coping with them, too.
[31:57] So that kind of lays the foundations for understanding how heat impacts humans but how do we measure heat? There's lots
[32:04] of different metrics just in kind of the the introduction from Jaman talking about heat index or temperature. There's
[32:13] lots of different ways that you can actually measure heat. And so at the moment there are over 300
[32:18] heat stress metrics that used to study how temperature affects human health and well-being well-being according to the WMO.
[32:25] And so lots of these different different metrics have different purposes. They can isolate different different kind of climate impacts whether it's
[32:34] long duration or short duration, um whether it's high temperatures during the night or whether it's high temperatures in the day. There's lots of
[32:41] different kind of metrics that can be used um to study how heat impacts humans. humans. And one of the things we're we're hoping
[32:47] to emphasize in this training um is the importance of of humidity as well. Um and so we're seeing kind of a little
[32:54] graphic here. Um in in panel A at the top, um we're looking at what is dry air
[33:00] temperature, so just the temperature you might measure or look at um online kind of of temperature in degree C of of
[33:07] whatever you would experience around you. you. Um that scales linearly um into the future. Um humidity uh scales
[33:15] exponentially, so that's kind of the the bottom chart there. Um and epidemiologists um will usually think about the impact
[33:23] of heat on humans um as a function of just dry air temperature, so if it's hotter hotter um we'll have more sick people.
[33:29] Um physiologists will usually consider both of them. Um and so we have dry air temperature and humidity together. Um
[33:37] and then in that final panel in C, we can see what the the projected health risks when we incorporate humidity um
[33:43] are are equally exponential. Um and so we have much greater risk um of impacts to human health um because of
[33:51] this exponential scaling of human heat um into the future. Uh in the bottom right-hand side, um you can kind of see three different
[33:58] um panels, three different maps there um that show the temperature response, the humidity response, and then the
[34:05] moist heat stress as as kind of both of them coming together. Um so it really really emphasizes that
[34:11] importance of the the humid heat. Um and specific humidity there is is kind of responsible for for a lot of that extra
[34:18] heat stress in the future. Um and so if we want to incorporate humidity into our metrics, um
[34:24] we can use something called wet-bulb temperature. Um and we'll use this in the demonstration. Um and there's been some really exciting
[34:31] work coming out in the last few years um where people are investigating wet-bulb temperature and and trying to understand which
[34:38] thresholds of wet-bulb temperature are the most meaningful for human health. And how do we apply these in
[34:45] in kind of whatever modeling exactly as we'll be doing in this. So can we apply these thresholds where
[34:50] we know there is a really tight coupling between heat and health? And so the Sherwood and Huber paper in
[34:57] in 2010 established that exposure of over 35°C wet-bulb temperature can be lethal within 6 hours of exposure.
[35:06] But other work has suggested this could be as low as 31. And so you'll see here these these
[35:11] numbers aren't huge. So if if you've lived in a hot climate you might regularly see over 35 40°C
[35:19] but those are typically measured as dry air temperature. But when you factor in that that humid component the the
[35:25] thresholds are much lower for what becomes hazardous. Wet-bulb temperature measures evaporative cooling so it incorporates that kind of humidity into it.
[35:34] So if you imagined your ability to cool down is governed by how much you sweat. If you're in a location that it has a
[35:42] humidity of 100% so the air holds as much moisture as possible. Now your sweat will not cool you down. It can't
[35:48] evaporate from your body and and you can't cool down. So equally if you have 100% humidity and it's really hot
[35:56] then it's you are experiencing kind of all of that heat. Your body can't can't necessarily keep up with it and cool you down.
[36:04] And there's some been some new research come out just last year that that reconciled these kind of dry
[36:11] moist temperatures for different demographic groups. And and one of the figures from the paper is on the right hand side there.
[36:18] And you can see how these kind of different zones which relate to how hazardous hazardous the conditions are how they impact
[36:26] different demographic groups. So on the on the left-hand side, we have people that are 18 to 40 years old. Um so,
[36:31] typically uh less susceptible to extreme heat. And we also have older adults, so over 65 years old,
[36:38] who are also really vulnerable to extreme heat. Um if you read the news in the summer about um the Northwestern US
[36:44] that that experiences heat waves or in Europe um or in India currently, um it's these older adults that that are really
[36:52] vulnerable um to some of these these kind of extreme heat metrics, and particularly that that addition of a
[36:58] humidity. humidity. Um and so, we have this kind of survivability limits as this this red line um on the chart. Uh and the fifth
[37:06] zone is is this kind of really dangerous zone. And we can see the difference between um the different demographic
[37:13] groups with with the older populations being more vulnerable to uh lower temperature and a a lower combination of
[37:19] temperature and humidity together. Um and so, we we can really emphasize that that this humid component of heat is
[37:25] particularly important um to understanding the health impacts, and it's something that we'll incorporate in this demonstration with um thinking
[37:34] about how refugee populations are exposed to it. Um so, it's all well and good thinking about climate data, um
[37:41] but in a lot of places around the world we don't necessarily have information about about the temperature or the
[37:46] humidity. Um we have a pretty poor spatial and temporal weather record. Um and actually over 4 billion people
[37:53] live more than 25 km away um from a weather station with a really robust record. And so, when we're trying to
[37:58] model kind of these connections between climate and humans, um we rely on having information about the the climate that
[38:05] the humans were were exposed to, right? Um and so, if we're just using weather station data, um we don't necessarily have that kind
[38:13] of tight coupling that enables to understand those those connections. Um and so, gridded climate data can help to
[38:19] fill the gap. Um and that's something that that we'll use in in this training. And so, what do we mean by gridded
[38:26] climate data? Um, so these are products that um, kind of split the world up into grid cells. Um, so lots of different
[38:32] boxes. You can kind of see a an example on the right-hand side. Um, and each box will have a value or a
[38:38] series of values which represents the approximate temperature or humidity with within that kind of box. Um, these can
[38:45] be four-dimensional. So, you have your kind of latitude, longitude, um, vertically and and also through time as
[38:51] well. well. Um, and they come at various different spatial scales. Um, and so the the climate projections that are
[38:58] used um, in a lot of the IPCC reports, um, so looking at what future climates um, um, will look like are typically derived at
[39:07] a 100 km um, spatial resolution. And so, you can see that pink box on the left-hand side is is approximately 100
[39:14] km um, on the bottom and 100 km um, along this side. Um, and that's actually pretty good for
[39:22] for climate projections. On the right-hand side, you can see kind of the progression to this finer spatial
[39:26] resolution from um, the first assessment report, the second, the third, and and the fourth assessment report, which is
[39:32] the the IPCC documents. Um, and so, you can see how that resolution is kind of improved. As our
[39:37] ability to to predict what future climate um, might look like has improved. Um, but for the purposes of
[39:43] this exercise, um, we will be looking at historical data where we have um, even better uh, still at at
[39:51] um, evaluating what what climate might look like through space. Um, we have a finer resolution um, record.
[39:57] So, we're going to use the ERA5 temperature record, um, which is approximately 30 by 30 km. So, that
[40:02] orange box that you can see on the left-hand side um, kind of shows you what that looks like relative to to the
[40:08] pink one. Um, and inside there we have um, a camp location of Kakuma, um, which is one of the larger camps in
[40:14] Kenya. Kenya. Um, and so essentially for that for that orange box, we would have a pixel value, so
[40:20] maybe it was 35 degrees Celsius wet bulb temperature. That's what we would use to kind of establish that relationships between the
[40:28] humans that live within the camp and the climate conditions that they're exposed to. Um, and so, the ERA5
[40:36] data and the ERA5 record um, comes from the European Centre for medium-range weather forecast reanalysis data. Um, it covers uh January from 1940 all
[40:47] the way to present day, and it is a we know 30 by 30 spatial resolution, um, but it also provides hourly
[40:54] estimates of of lots of different climate variables. Um, we only need a few of them for the purposes of this,
[41:01] um, but if you're interested in in climate modeling and and looking at historical climates, um, they have
[41:08] a really detailed documentation and and lots of different variables that you that you can kind of explore.
[41:13] Um, so, it covers Earth on this 30 by 30 grid, and it also, um, resolves the atmosphere vertically, um, at 137 levels
[41:21] from the surface all the way up to about 80 km high. Um, for the purposes of this, we're we're thinking about humans,
[41:27] and so, we're using a lot of the surface level variables, um, but you can start, um, kind of processing them, um,
[41:33] vertically, as well. Um, wet bulb temperature isn't natively available within the ERA5 record, and so, we have to produce it ourselves,
[41:41] which we'll break down in in kind of the coding, um, walk-through here in a little bit. Um, but we use a new package called
[41:49] Nute, which is a non-intrusive evaluation of wet bulb temperature from Rogers and Warren. Um, there's a link to
[41:54] the GitHub page there if you want to download the package and kind of play around with it a little bit. It's still,
[41:59] um, in development, um, but is a really efficient way to produce, um, wet bulb temperature using the ERA5
[42:05] record, um, and we've had great luck with it. We'll go through some caveats when we're coding about, um, scalability
[42:12] of of using climate data cuz it is a lot of information per 30 by 30 um at that hourly time point for however
[42:19] many years is a lot of information and when you're doing calculations on that it can um take a lot of computing power.
[42:26] And then on the right-hand side you can see see something that that we've produced with um the new package and
[42:31] also the ERA5 record um which just shows the number of days over 25° C wet-bulb temperature. So this is just
[42:39] incorporating humidity um through time. So you can see um in which locations of the world will we see
[42:46] really hot temperatures um with that humid component as well. Um and a lot of them um kind of overlay
[42:52] those refugee sites that that Jamon was talking about previously. Um if you've read the news recently, you'll see India's undergoing a heatwave
[42:59] at the moment um and that pops up here in the map experiencing a lot of days of
[43:04] the year um where they where they experience these really dangerous temperatures. temperatures. Um the ERA5 record uh is structured kind
[43:13] of in a data cube which this will be helpful once we get into the kind of the
[43:16] coding steps um and so we can imagine um our data kind of structured like this. Um if we switched out precipitation for
[43:24] humidity um this would kind of set up what what we're really interested in. Um so we have latitude and longitude which
[43:31] are kind of two-dimensional um and then we have these uh temperature and and humidity is these three-dimensional
[43:37] cubes um where we have a point through time time um so we can uh kind of measure wet-bulb
[43:43] temperature as it progresses through time for each pixel um in our record. And so that's kind of how we'll we'll
[43:48] set these up. Um so this is using Xarray which is really helpful tool for for scaling the processing of some of
[43:54] climate data um in conjunction with uh another package called Dask. Um it can be really powerful and and you can move things
[44:02] pretty quickly. Um but as we're thinking about setting up kind of our analysis, our experiment, um we do have to think about some of the
[44:12] challenges of defining extreme heat risk. Um we know that heat impacts vulnerable populations. Um some people are affected more by extreme heat than
[44:20] others. Uh but there are also lots of different ways of measuring extreme heat, both within the metrics, so
[44:27] whether it's air temperature or whether it's wet bulb temperature, um but also how you um understand those metrics and
[44:34] how you aggregate them um through time. So are we concerned about the maximum temperature, the minimum temperature? Um
[44:41] maybe we're thinking about the diurnal range in temperature. So if it's really hot at night, often people don't have uh
[44:47] the the time or the ability to cool down, um and that can be really dangerous for human health, too. If
[44:53] you're exposed to heat for an hour a day, maybe you can cope with it more than if you're exposed to it 24 hours a
[44:58] day. Um and so we can with with hourly data, we can look at the number of hours
[45:03] that people are exposed to extreme heat, as well. Um we can look at night time temperatures and all of that kind of
[45:09] stuff. stuff. Um one of the things we can't necessarily measure with um gridded climate data and just kind of point
[45:16] locations of of where people live is who is actually exposed. Um we don't know who's inside or who's outside. We don't
[45:22] know who has access to air conditioning, which can really reduce your vulnerability to to um poor health
[45:29] outcomes from exposure to extreme heat. Um also we we don't necessarily know much about the age and sex, so the
[45:35] underlying health conditions of people. What we do know is in refugee settings, there are a lot of children. Often these
[45:41] people are vulnerable. Um and may contain um people that have other underlying health conditions. Um maybe food insecure, maybe they don't have
[45:50] access to water to be able to cool down or to stay hydrated. Um and so we are
[45:55] already looking at a very vulnerable population. And so any exposure to extreme heat within that kind of refugee
[46:01] setting can be pretty catastrophic. And so, moving forward from kind of these concepts to an investigation, um
[46:09] we really want to look at extreme heat exposure for some refugee settlements. Um we want to use open access data sets
[46:16] that that you guys can um play around with. You can pick your own sites. You can kind of um help us uh understand
[46:23] what the heat exposure is within these settlements and how it varies through time. time. Um and so, our our main research
[46:30] question is understanding what what the characteristics of extreme heat exposure is for refugee camps. Um and throughout our kind of coding
[46:39] walk-through, walk-through, um we'll look at where settlements are located, what climate data do we use, what heat metrics do we use, how do we
[46:46] apply thresholds, of what time period are we interested in, um and then ultimately, how do we aggregate and
[46:51] present our results? How do we make them digestible and understandable, um rather than just a million hours of of
[46:58] temperature data? How do we put that in terms that that kind of makes sense, and how can we identify locations or or
[47:04] people that are most vulnerable to to extreme heat to help kind of planning and mitigation? Um and so, to fill in some of the blanks
[47:11] here, here, um we will focus um in the coding walk-through on Uganda and Kenya. So, using some of the UNHCR data that Jeremy
[47:19] referenced earlier, we'll use the ERA5 reanalysis data um that is available on Google Earth Engine. So, it's pretty
[47:25] easy to access and work with. Um we will look at wet bulb temperature. So, we'll calculate it using that the the new
[47:32] method, um and we know it incorporates humidity as well. Um and so, that'll be particularly helpful for us. Um we will
[47:39] apply a variety of different thresholds, and we'll look at the number of days that exceed the threshold throughout the
[47:44] year, um kind of as a way of gauging how um how camps are exposed throughout the year to to really extreme heat. Um we'll
[47:52] generally look at the the 2000s. Um Um, the coding walk-through, we'll discuss some of the the challenges with with
[48:00] working with these data of a broad um, temporal domains, um, computational challenges that you're running into as as you start to process
[48:08] them. Um, and then it's interesting to aggregate these results in various different ways. We'll look at specific
[48:13] camps, um, we'll look at countries, and we'll look kind of across that region as a whole, um, to be able to see if
[48:20] there's any similarities, are there any differences, are there certain camps that stand out, um, and what does that
[48:25] kind of tell us about um, both current heat exposure within refugee settlements, um, but also what might
[48:31] that look like in the future, um, if we have a changing number of refugees, but we also have a changing climate as well.
[48:38] Um, and so we'll step into the demonstration here. Um, it's all run on Google Colab. It uses Google Earth Engine, um, for the
[48:47] data and Python to kind of write the scripts and and process a lot of the data as well. Um, so we'll step into
[48:54] that now. Okay. Okay. Um, Um, welcome everybody to the um, coding walk-through section of the part two
[49:11] training. Um, again, as a reminder, our our focus here is is um, on gauging long-term heat stress in
[49:19] in refugee settings. Um, and so what we've covered to get up to this point and is we've had a really good
[49:26] overview by by Jayman, um, of refugee settings, settings, of where they are, how fast they're growing, and and some of the
[49:34] um, vulnerabilities that exist for for people that live within refugee settings. settings. Um, we went into a bit more detail about
[49:42] extreme heat, um, obviously being one of those things that um, people in refugee set- settings face. face. Um, we discussed various different
[49:51] extreme heat metrics and different ways to measure it and and trying to identify meaningful ways of of understanding the
[49:59] heat stress that people are exposed to in in these settings with some caveats. Um we're now in the in the coding
[50:06] portion where we'll walk through um some climate data we'll process and we'll develop some heat metrics and
[50:13] we'll extract them for some refugee sites in in Uganda and Kenya. Um we'll go into a little bit more detail about
[50:19] one of the sites in particular uh and we'll look at how the exposure to extreme heat for for those people in
[50:24] that in that site has changed through time. time. And so um a lot of this code has already been
[50:30] run, but I'm going to walk through it here um with you. Um this is an intermediate training, so
[50:36] a lot of the um um kind of set up on Google Colab and Google Earth Engine. There are links on
[50:42] the main training page to to get you kind of up to speed with some of that. We'll we'll touch on them as we go. Um
[50:48] but for the most part we'll kind of dive in and start processing data um straight away. Um and so we'll we'll break this down
[50:57] into various different steps um and our first step is setting things up. Um so we'll get everything ready to go.
[51:04] We'll load our packages. We'll load our data. data. We'll start to explore GEE Map, which is a way that we will interface with Google
[51:11] Earth Engine data in Python directly. Um so we don't have to code in JavaScript. We can kind of access the Google Earth
[51:18] Engine library um directly in in a Python notebook um which is a really nice way to work with
[51:25] the data, especially if you have um code bases or you're used to working with these data um that you might have
[51:32] downloaded locally. Um it kind of allows you to do that in a similar way. And so an overview of the packages we're
[51:38] we're loading. Obviously we have um the EE Earth Engine package, GEE Map. We're going to use Xarray, which we mentioned
[51:45] in the slide deck um as a way of processing gridded climate data. Um, it's really quick and allows
[51:52] for scalable processing, um, which means that as we get more complex, we can kind of scale it up to to keep pace with
[51:58] that. Um, and then we have some generic packages that you'll probably see in any sort of geospatial analysis. So,
[52:04] geopandas, um, some plotting libraries, um, and some kind of cartographic things that that we'll add in as well to to
[52:11] make some nice maps. Um, this is in Google Colab, um, which allows us to access and use files and
[52:19] packages that we have in our own Google Drive. Drive. Um, so that's what I'm doing in this
[52:23] step here is I am, um, mounting my Google Drive. So, now I'm making a connection between my notebook and my
[52:30] own Google Drive, um, where I can access files in there, I can write files to save into my Google
[52:36] Drive, um, and I can also read in files from my my own Google Drive file storage as well. So, it's a really easy way to
[52:43] to kind of get that going. Um, I changed my directory, um, so I'm working in the right place.
[52:49] I'm working in my heat processing, um, file, which is where I have, um, the newt package that we met mentioned
[52:55] earlier, um, which allows us to process some of the heat data, um, really quickly and efficiently and calculate
[53:00] this wet bulb temperature. And that's where we we load the newt package. Um, so we import the moisture and the
[53:06] thermo, um, package from from within there. there. Um, we then authenticate, um, Earth Engine. So, depending on
[53:15] where you are in this process, you may have to run this first line, which is the initial authentication. Um, once
[53:21] you've done that, um, you don't have to do that again, um, and so that's why it's commented out here in my notebook.
[53:27] Um, but what you will have to do is initialize it. Um, and I use this optional URL, which
[53:33] will allows for a high volume API, um, which means you can access data more data and and it comes a little bit
[53:39] quicker as well. Um, and so going through uh these things so that men can get the Google Drive, it
[53:46] will have a pop-out window, so you'll have to make that connection and give it permissions. permissions. Um, but also once you're accessing Earth
[53:52] Engine, um you will have to follow the follow this link and you won't be able to proceed until you kind of enter the
[53:57] verification code, um which will go in here. You can see I've I've added my one in. in. Um, just to change tabs here, you can
[54:05] see what that looks like on the back side. So, it gives you kind of this this code. You can just copy it, put it into
[54:10] your notebook, and then it will save it and you'll be good for the rest of your session.
[54:15] session. Um, and so what GEE Map allows us to do is very similar to if you were working
[54:20] in Earth Engine directly, um you can plot up a map and so um what we're doing here is just making
[54:27] a map. Um, it has a generic base map. It's very similar to what you'd see at the bottom of the Earth Engine um kind
[54:33] of window. Um, it just has a base map on it. Um, you can zoom around and you can kind of
[54:38] click things. You can um add polygons and and things like that. We'll We'll add some com- complexity to this a
[54:44] little bit later on, but for now this is kind of a nice way to just orient ourselves and and see what we're
[54:49] working with. Moving into step two, um we will access climate data. So, there's two different ways you can
[54:57] access climate data from Earth Engine. Um, so this first one we'll work through is using the EE package. So, this is
[55:04] maybe the more traditional way to access climate data. Um, we mentioned the ERA5 data in the in
[55:10] the slides is this reanalysis product that's gridded, it's global, and it it covers multiple years. Um, it's roughly 30 km resolution.
[55:19] Um, it's available on Earth Engine at various different um time uh time points. Um, so this is the
[55:26] ERA5 daily product. So, it's daily aggregates of of climate variables. Um, we will use the hourly product
[55:32] later. So, once we start calculating wet bulb temperature, we'll use some of the hourly information. Um and so in here we we load one of the
[55:41] ERA5 images. We select a band. Um so very similar to to regular Earth Engine processing. Um we select the maximum 2-m air
[55:50] temperature product. Um Um and we select the data of interest. Um so for the uh purposes of this,
[55:59] we're going to look at the year of of 2018. 2018. Um so select maximum air temperature um
[56:06] um within 2018 uh to the end of the year and select the maximum value that occurred within that time period.
[56:14] And so rather than an image collection, we now have an image um which represents that, right? It's
[56:19] the maximum temperature in each pixel across that whole 2018 time period. Um ERA5 temperatures are usually in
[56:27] Kelvin. Kelvin. Um and so we have to convert them to Celsius so we can make a little bit more
[56:32] sense of them. Um so we do that here. We just subtract um 273 from the Kelvin value. Um and so
[56:39] now we have the same image, but now it's in Celsius. Um we are going to plot it. So we're
[56:44] going to put it onto our map. Um and the first step to that is kind of making a
[56:50] uh a color bar so that we can have a look at what's warm and what's cold um
[56:55] and it kind of makes some visual sense. Um and then we move into um plotting the map. So in in the same way as we did
[57:02] before, um we have my map which we developed, which was the generic map. We now add a layer
[57:09] um with our temperature in Celsius. Um we used our um color palette that we've developed. Um and we're going to
[57:16] call it maximum 2-m air temperature in Celsius. Celsius. Um this uh dictionary here is useful for plotting a legend so that we can kind of
[57:26] look between them. Um and we can see what what temperature is where. We add a title and and some of
[57:32] those different things. And so, we can see it kind of gradually populating here. Um and we have Uganda here and Kenya
[57:41] here, which is what we're we're kind of interested in. Um and so, this is the maximum 2-m air
[57:45] temperature in um 2018. 2018. Um and so, you can kind of compare it on the right-hand side to to some of the
[57:52] values in the legend. And so, pretty warm in terms of uh air temperature. And you can look at that
[57:58] regionally, but we can also zoom out and look globally um once it plots up here and renders, um
[58:04] you'll see swaths of warm temperatures, obviously, across the Sahara. Um and in Saudi Arabia, the Arabian Peninsula, um getting a little bit
[58:13] cooler up into kind of the Tibetan Plateau and and things like that. And it's worth noting this is the dry air
[58:19] temperature, too, so um kind of northern India is warm, but not as warm as it it potentially could be with the addition
[58:25] of moisture. So, we now have an idea of extreme temperatures in here. But what if we want to add this moisture? We want we
[58:31] want to add in humidity. Um wet-bulb temperature, sadly, doesn't exist natively in the ERA5 record, so we
[58:38] have to make it ourselves. Um and we're going to do that using hourly data. Um so, we clip it down a bit to make it
[58:44] a bit more manageable. Um and we're going to focus on Kenya and Uganda just to make the processing a little bit
[58:49] quicker on on Google Colab and using Earth Engine data. If we process the whole record, it takes a lot of
[58:55] computational power. Um and on Google Colab, we don't necessarily have access to that. So, we So, we kind of split it down a little
[59:01] bit to make it a bit easier for us. Um and it's worth noting that that we use the hourly data so that we can match
[59:10] that that um humidity and um temperature together at the same hour. Um Um if we're calculating wet-bulb
[59:18] temperature, we want to see how it changes throughout the day. And so, if we use the daily maximum temperature and
[59:22] the daily maximum humidity uh um, to calculate wet-bulb temperature, it might not correspond to the actual wetbulb
[59:29] temperature that was experienced if the there is a mismatch between the the diurnal cycle of temperature and
[59:35] humidity in that um, say the highest temperature is at midday, but the peak of moisture is in the evening, um, the
[59:42] wetbulb temperature that we calculate there wouldn't necessarily, uh, correlate to to where it was actually experienced. experienced. And so we calculate it at the hour.
[59:52] Um, and so this time we are reading in Earth Engine data, the ERA5 land data, which is on Earth Engine, um, and we're
[59:59] using the hourly data. Um, again, we filter it to 2018, um, and then now we we start to use GEE map
[1:00:08] to to read in the data. Um, and we can read it in directly to xarray, which is really nice, um,
[1:00:14] and makes it a lot easier for us to to kind of work with, visualize, process, um, and kind of calculate some of these
[1:00:21] products. products. So when you run this, you get lots of different messages, um, but this is what an xarray data set
[1:00:28] output looks like. And so along the top it tells us how many time dimensions we have, um, so we
[1:00:33] have, uh, 8,736 hours. Um, we have 3,600 longitudes and 1,800 latitudes, um, and you can kind of
[1:00:42] click these, um, little database symbols to have a look at what what the arrays look like. Um, it doesn't print all of
[1:00:48] it, but it kind of shows you the general structure. structure. Um, and so you can close those. It also
[1:00:54] shows you the data variables you have. And so there's actually 69 variables in the ERA5 record, um, which has all this
[1:01:01] really detailed information, um, about dew point temperature, skin temperature, even things like snow albedo, albedo, um, um, soil water, all this different stuff.
[1:01:12] Um, Um, we're not interested in all of that for the purposes of this, um, but those are
[1:01:16] stored in the data as you kind of read them in. As indexes, um, and various different attributes which tells you kind of what
[1:01:23] you're looking at um in the data set, how it's produced, and some kind of background information. Um but, we'll
[1:01:28] close that for now. Um okay. So, this is our x-ray data set that we read in initially. Um we only need a few
[1:01:38] of the variables, so let's select those out of those 69. Um so, we want 2-m temperature, dew point temperature, and surface
[1:01:45] pressure, which are the ingredients for calculating wet bulb temperature. Um so, we use the the um select to keep those variables.
[1:01:55] Um Um and we again, we have all of the time period points, all of the uh latitudes,
[1:02:01] all of the longitudes. So, the whole year of 2018, um globally, 30-m resolution, um every hour, and then we
[1:02:08] just keep those kind of three key variables. variables. Um because we want to reduce our computational load, we clip this to
[1:02:15] Kenya and Uganda. Um we do that using a bounding box. Um so, kind of the expected range to cover
[1:02:22] the region. Um it might go a little bit outside, but that's fine for now. All we want to do is kind of shrink down that
[1:02:28] data set. So, if we look at this one um up here, we have um 3,600 longitude um cells, and we have
[1:02:36] 1,800 latitude cells. Once we apply the bounding box, we now only have 93 latitude cells and and 125 longitude
[1:02:45] cells. And so, it's a lot more manageable. It looks the same. It has the same um time periods, the same hours, the same
[1:02:52] data. Um it's just shrunk down to to the kind of our window of interest but for the purposes of this.
[1:02:59] Um what I'm doing here is saving the 2-m temperature from the gridded data for later. We'll do some comparison between
[1:03:06] um um air temperature, this 2-m temperature, and wet bulb temperature. Um and so, we just extract that now cuz it's a nice
[1:03:12] point to do it. So, um again, it's a similar process. I I just select this 2-m temperature. I turn
[1:03:18] it to Celsius. Um and now I I have this um data set which just contains 2-m temperature.
[1:03:27] Um now we're moving into calculating wet-bulb temperature. Um the first step to do that is to calculate humidity um
[1:03:34] from dew point temperature and surface pressure. pressure. Um so this might take a few minutes. Um if we think about uh what this data
[1:03:42] structure looks like that we're putting into it. Um we have 93 latitude, 125 longitude, longitude, um and over eight eight and a half
[1:03:50] thousand um observations through time. Uh and so those kind of data bricks that we look like look looked at in the
[1:03:57] slides where it's um kind of this three-dimensional cube. That's kind of how this is structured. So you can
[1:04:02] imagine latitude longitude and then the time going backwards. So adding to this kind of um this structure um where for each each
[1:04:10] kind of layer we have different time point. point. And so our our calculation is this function that we're applying. Um
[1:04:17] essentially calculates um humidity from um temperature and pressure for for each one of those grid cells for each one of
[1:04:24] those time points. And so it's it's a lot of processing and it takes a few minutes. minutes. Um it took me 3 minutes. Uh
[1:04:32] Um so we save this as an array, a data array. Um we'll label this Q. Um Um I'm going to use this in the subsequent
[1:04:39] calculation. And so you can see how a data array is is structured. We have the same dimensions. Um and we have all the
[1:04:45] the data, the calculations within there. There are some nan values because it it might be in the coastline um or we don't
[1:04:52] necessarily have the data available. Um and then the second step here is calculating wet-bulb temperature. Um we
[1:05:00] use surface pressure which is in ERA5. We use 2-m temperature which is in ERA5. And then humidity which is what we just
[1:05:06] calculated. calculated. Um so very similar. We use xarray to apply a function. Um the the function is
[1:05:13] from the thermo package um, and it's wet bulb temperature. Um, we use surface pressure from our data set. We use 2-m temperature from
[1:05:20] our data set, and we use the Q that we just calculated earlier. Um, this runs again. It takes um, a few
[1:05:27] minutes to process. Um, we then convert the wet bulb temperature from Kelvin to Celsius. Um, and then we rename it just so we
[1:05:37] know what we've we've got. Um, and it's very similar to the production of the the Q, the humidity.
[1:05:43] Um, it's the same time, latitude, longitude, but it has an array which stores the wet bulb temperature values.
[1:05:48] Um, so you can see they're looking a bit more normal and something that you might be able to interpret. So,
[1:05:54] um, 15, 16, 19 um, Celsius as a kind of tangible temperature. Um, so we just have this as a data array
[1:06:02] at the moment. Um, we want to turn it back into a data set so that we can add
[1:06:06] in some of the other variables and and it's kind of this nice data brick that we can work with.
[1:06:11] Um, so we convert the array to data set. And then we add some attributes. So, it's wet bulb temperature that we've
[1:06:17] produced from ERA5 um, using the Nuke method method um, um, and it's in degrees Celsius. So, we can keep track of things and that
[1:06:24] that stays in that kind of attribute area down here. Um, and so it looks very similar, right?
[1:06:30] We have all of all of the time points, all latitudes, all longitudes, but just this new temperature value.
[1:06:36] Um, now we merge back in our 2-m temperature so we can kind of compare between them. Um,
[1:06:43] Um, and uh, so we have this really detailed record. So, we have over 8 and 1/2 thousand hours um, of
[1:06:50] temperature, but it's helpful, but not super meaningful. Um, like trying to make sense for refugees of um, their exposure to extreme heat. With
[1:07:00] this data it's possible, but as it exists at the moment, we can't really interpret or or who or when were people
[1:07:07] exposed. exposed. Um so, one of the ways that we can kind of aggregate these data are to extract the maximum temperature
[1:07:15] annually, annually, the wet bulb temperature. And so, we do that here. We resample it over 1 year,
[1:07:22] um we find the maximum, um and then we compute it, and we squeeze it across the kind of time dimension. Um and so, that
[1:07:29] that produces the following data set. So, now we we've removed the time dimension because we're just looking at
[1:07:35] 2018. So, across that whole 2018 year, um we we flatten this to a two-dimensional surface, which now we
[1:07:42] have latitude and longitude, no time, um but the values represent the maximum um within that time period.
[1:07:53] Um and so, we can plot that up. Um and this is just how we would plot data from
[1:07:58] xarray. Um we're going to make some maps of it. Um we have this annual max file, which corresponds to this data set up
[1:08:05] here. here. So, we extract our wet bulb temperature maximum, we extract our air temperature maximum, um we get some of the
[1:08:11] coordinates so we can map it, and we go through some kind of generic um mapping code, um and that's what it shoots out here.
[1:08:20] So, we can see Uganda on the on the left, um Kenya on the right, um and then
[1:08:26] in terms of the panels, um we have wet bulb temperature on the left-hand side and air temperature on the right-hand
[1:08:31] side. And again, this represents the maximum value in the year of 2018. Um these are scaled the same, and so the
[1:08:39] the color bars range from 12° C to 42° C. C. Um um as we discussed in the slides, wet
[1:08:46] bulb temperature typically will be lower than air temperature because of the addition of of humidity. Um but it takes
[1:08:53] also a much lower threshold for it to be dangerous to human health. Um and so, throughout this we'll we'll use
[1:08:59] thresholds of 22 or even 25 um to look at exposure to really hot conditions in terms of wet bulb temperature. And we
[1:09:06] can see visually where that where that kind of takes place. Um, so along this coastal region where
[1:09:11] we have, uh, a lot more humidity coming in. Um, and then kind of the northern area of, um,
[1:09:17] Sorry, I just zoomed in there. Um, the northern area of, uh, Kenya also has some extra humidity as well.
[1:09:24] And on the right hand side, we can see maximum air temperature, um, kind of peaking inland, right? We have this is
[1:09:30] really warm uh, in the top left hand corner. Um, but doesn't necessarily correspond to the wet bulb temperature.
[1:09:36] It's most likely a really dry area without much humidity, but is but is very hot. Um, so we kind of have a sense of of
[1:09:42] what the climate data looks like now. Um, we want to work with some refugee data, right? Um, we want to read in and,
[1:09:50] um, explore what the heat exposure is for some of these refugee camps. Um, and so, uh, this is kind of normal
[1:09:57] tabular data processing using Python. Um, so using GeoPandas and and we'll use Pandas later on as as the packages.
[1:10:05] Um, Um, this is, uh, locations of refugee camps from UNHCR. Um, it has lots of information about the
[1:10:12] camps, camps, um, and most importantly their location. We have latitude and longitude here. Um, and so what we're able to do is is kind
[1:10:19] of look at the climate in that specific location. location. And so, in here we have, um, 13, uh,
[1:10:26] sorry, 1,344 camps, um, across the world. Some of them are in our region of interest. Um, so you can see Uganda at
[1:10:35] the top. Um, some of them are not. Um, Pakistan or Ethiopia. Um, and so our first step is to focus on
[1:10:44] Uganda and Kenya. And so we clip out those camps. Um, and we use some some spatial joining
[1:10:50] to kind of isolate those locations. And so it shrinks us down to have 34 camps. So we have some in Kenya here,
[1:10:58] um and the rest in Uganda. Um and some of the Kenya camps uh we'll focus on more specifically um later on.
[1:11:05] Um and these correspond to those figures that that gentleman showed earlier, too. Um so, that's the filtering of our
[1:11:12] camps. Now, we have camps that we're interested in. Um we can add those to our GEE map base
[1:11:17] map to kind of have a look at uh where they are. Um so, let's just zoom in on some, which
[1:11:23] is a really nice feature of kind of interactive maps here. So, we have three camps here, um
[1:11:30] um which we'll focus on later. And so, you can kind of zoom in and use the satellite imagery to have a look and see
[1:11:34] what they look like. Um Um So, that's the one there. Um and we have another huge camp here.
[1:11:42] Um and this is in the Dadaab region of of Kenya, which contains um a large proportion of the refugee
[1:11:49] population in in Kenya, um and also in in kind of the East African region. And so, you can see how
[1:11:54] these um structures have developed. Um you can see kind of the central point um and where people are living within
[1:12:01] within space here. Um and so, uh we have our climate data from um previously, and we know where
[1:12:08] our refugee camps. So, maybe we can just plot them on top to have a look at what
[1:12:12] we might expect the climate exposure to look like initially. Um so, this is very similar to what we
[1:12:18] did before, with the addition of adding the points. Um and so, we have our two maps, and we
[1:12:23] can see the refugee camps. Those three in Kenya, the ones we zoomed in on, are in that kind of zone of of high wet-bulb
[1:12:30] temperatures and reasonably high air temperatures. temperatures. Um so, we have a sense of where the camps are. Obviously, lots of them in in
[1:12:37] the kind of northern region of Uganda, too. too. Um we want to extract the extreme heat exposure for those camps. Um and so, now
[1:12:46] we're going to set up the geospatial extraction. extraction. Um previously, we just looked at the maximum temperature across the the whole
[1:12:53] year. year. Um but we want to look uh with a little bit more granularity. Um and so again,
[1:12:58] we're going to do the same same sort of thing, but instead of a year, we're going to focus on a date.
[1:13:03] Um so we want to know what the maximum temperature, both wet bulb and 2-m air temperature, um refugees were exposed to
[1:13:11] um each day of the year for that that whole year. Um and so we do the same kind of thing,
[1:13:15] and and instead of going to no time dimension, now we have 364 um for each day of the year.
[1:13:23] Um we set the uh latitude and longitude variables for our geospatial extraction, and this is really kind of the meat of
[1:13:30] it in here. Um we set this up to loop through each um location, um and we find the value
[1:13:38] from the daily max file um using the the nearest method. So we identify the nearest pixel to the refugee camp and
[1:13:45] extract um the the daily maximum temperatures for each camp. And that kind of puts us here. here. Um so you can see for the 1st of January
[1:13:54] in 2018, um for this camp here, here's the maximum temperatures. For the 2nd of January, here's the maximum
[1:14:00] temperatures. And it kind of iterates through each camp for every day of the year before moving on to the next one.
[1:14:06] And so you can see it has over 12,000 rows um for each camp. So it's a little
[1:14:10] bit unwieldy, but we can restructure it pretty easily. Um we reformat some of the time dimensions, so it's easy for us to use
[1:14:18] and interpret. Um and then we merge it back into our original data frame. And so now we have
[1:14:24] this um 12,740 um with uh all the information about the camps, um but we also have uh the temperature as well.
[1:14:36] Um so we can start moving forward to make some plots. Um Um and so what we're doing here is just
[1:14:41] plotting temperature for all of the camps. Um it It a little bit crazy, but it's nice to kind of see visually at
[1:14:47] first what everything looks like. Um and so this is the wet bulb temperature on the left again and air
[1:14:54] temperature on the right um for every camp uh for every day of the year in 2018. 2018. Um it's in degrees Celsius. Now in this
[1:15:02] case, wet bulb temperatures are typically much lower and so the the scale here goes up to 26, whereas the
[1:15:09] air temperature goes up to 40. Um so different scales, but you can kind of see how this varies throughout the year.
[1:15:14] And this kind of emphasizes that point we made earlier about the importance of humid heat metrics, because it's not
[1:15:19] necessarily occurring at the same time of the year that these peaks of air temperature are occurring. Um so that's one thing to notice.
[1:15:27] Another is the variability, so we have some camps that are way cooler than others. Um some of the camp locations
[1:15:33] are really hot. Um it's a little bit difficult to interpret with the colors where these are located. Um but the
[1:15:38] canyon camps um are typically exposed to a lot more um wet bulb temperature um than some of the camps in Uinta.
[1:15:47] Um but that's just kind of looking at everything all at once. Um if we want to apply some thresholds
[1:15:52] to that, so we we want to say, yes, these are all exposed temperatures, but not all of these are are dangerous
[1:15:58] temperatures. So, for example, sort of 16° wet bulb temperature isn't particularly dangerous. So, if we want to focus on um extreme
[1:16:05] temperatures, we can apply thresholds. Um and so if we want to apply a threshold of say 25°
[1:16:12] wet bulb temperature, um which is getting pretty hot, um we can count the number of days that
[1:16:17] camps were exposed to that. And so uh if we just filter by those by that threshold, what pops out is um some of
[1:16:24] the canyon camps, um one of them in particular being exposed to 22 days um of this kind of really hot temperature.
[1:16:31] And so we can apply thresholds in various different ways to kind of look at the data. Um if we want to go forwards and focus
[1:16:38] specifically on on one camp, um we can get some really detailed information and and um, have a lot more insights in into what
[1:16:46] that temperature trend kind of looks like. like. Um, so for the purpose of this, we'll focus on the hottest camp. Um, so this
[1:16:52] one here. Um, which has over 22 days of of really warm temperatures. Um, so we'll call that a hot camp and
[1:16:59] we'll extract um, the information about it. It's the Hagadera camp in Kenya, which is part of this Dadaab area, one of the three camps
[1:17:07] we zoomed into. Um, it houses uh, over 100,000 people uh, and is part of the complex which
[1:17:13] houses um, over 300,000 people in that region of Kenya. And so, um, the other people in those camps would likely be
[1:17:19] exposed to similar temperatures. And so, it's a lot of people are exposed to extreme heat. Um, so to extract really detailed
[1:17:26] information about this camp specifically, specifically, um, we have the latitude and longitude um, and it makes processing the data a
[1:17:32] little bit easier. Um, and so we we process the data in a very similar way to to what we did
[1:17:37] previously. previously. Um, now we'll just focus on the year of 2020. 2020. Um, but uh, we get the whole data. Um,
[1:17:44] again, the same same thing we did before. Um, but because we only have one latitude and longitude, one point, we
[1:17:50] only have one pixel that we're interested in. And so, we lose that latitude and longitude. And now we just
[1:17:54] have the time dimension for that single pixel pixel um, going all the way through time. Um, again, we can process the wet bulb
[1:18:02] temperature using the the same code we did before. This produces our array of of wet bulb temperature.
[1:18:09] temperature. Um, we can merge back in the 2-m temperature like we did previously. Um, and we can kind of set up an analysis in
[1:18:15] in the same kind of way. Um, we can look at the maximum temperature for for that camp
[1:18:20] specifically. specifically. Um, and we can have a look at how that varies through time. And so, what we're
[1:18:25] seeing for the Hagadera camp is um, um, the trend in uh, wet bulb temperature and the trend in in 2-m temperature
[1:18:33] plotted on the same the same plot here. Um, and you can see it kind of how that
[1:18:37] varies uh through the year. So, um we're seeing these kind of peaks of wet bulb temperature um exceeding 25° in
[1:18:44] kind of the March, April, May time period, um which corresponds to warm air temperatures, but um the air temperature
[1:18:51] are cooling a little, but wet bulb um remains pretty high. Um, for that camp specifically, um we
[1:18:57] can apply different thresholds. So, here we're applying 22° um where we have over 264 days um for
[1:19:04] that camp uh where where really hot. Um, and we can plot here the number of days that that were over that threshold.
[1:19:13] Um, and so one of the limitations, I guess, is worth mentioning when when you're processing gridded climate data
[1:19:19] on Earth Engine and Google Colab is is running out of memory, which is something I was concerned with this demo
[1:19:24] of um the climate data is amazing. Um, I mean, there's terabytes and terabytes of of verified data that you can
[1:19:30] download online um and use, um but one of the challenges is having the memory and the computational power to crunch that
[1:19:38] information. And so, there are limitations on on Google Earth Engine, which is why here we only have 1 year
[1:19:44] plotted. Um, we only have the extraction for 2020 and the number of days over the threshold, but with enough computational
[1:19:50] power, what you're able to do is extract it with the whole record. And so, I processed this um on us on a
[1:20:00] on our service here at my university, um but with enough juice or or looping through code, you can do a very similar
[1:20:07] thing, um and it gives us a really detailed picture of um what the heat exposure looks like for the Hagadera
[1:20:13] refugee settlement. Um, and so this is the number of days, exactly as we had here, the number of days over dangerous
[1:20:19] thresholds, so 22° is what we're using here here um each year three times. So, we and we
[1:20:25] go all the way back to 1950. So, this is calculated using every hour of data from 1950 to present day. Um, and having a
[1:20:32] look at uh the number of days where the maximum wet bulb temperature exceeded that threshold. threshold. Um, so we can plot each one and you can
[1:20:39] see there's some variability and we also plot a trend line through them um where the slope is 0.88.
[1:20:45] Um, and so that corresponds to a uh obviously a rising trend um but almost an extra day per year
[1:20:52] um of of temperatures that that exceed this threshold. And so we can say that these camps are getting warmer
[1:20:58] um and we kind of know there are a lot of people um living within them. Um, this is just for one camp. Again,
[1:21:04] with enough computational power you can process this for every camp um globally and you can really have a detailed look
[1:21:10] at um extreme heat exposure. Um, but this is where it gets really complex so thinking about um how we characterize
[1:21:17] extreme heat both in the metric we use but also how we extract it. This is using a discrete threshold um which also
[1:21:24] doesn't necessarily account for people's adaptation to extreme heat. If you live in an area that is really
[1:21:30] hot, um you likely have some degree of adaptation to that temperature. Whereas if you are a refugee perhaps and you're
[1:21:37] moving into a new climate, you don't necessarily have um the adaptation to that and so the exposure to extreme heat
[1:21:43] can be um can be more catastrophic. Um, but equally using discrete thresholds we don't necessarily kind of confront
[1:21:51] control for that. Um, one of the ways around that is is using percentile-based approaches. Um, so instead of days over threshold we
[1:21:58] would look at the number of days over the 95th percentile or the 99th percentile um to really isolate those
[1:22:05] extra hot periods even for an already hot location which can can be pretty meaningful, too. Um, for the purpose of this we use
[1:22:13] discrete thresholds which from a policy-making perspective can make a lot of sense. Um, it's easier to say
[1:22:20] um we will um have cooling tents available and extra resources if the temperature exceeds this threshold versus kind of percentiles. Um, and so
[1:22:28] that's kind of how we set this up here. Another plot for you um here is um 25° so a higher threshold, but a
[1:22:37] very similar trend emerges, right? We see a rising trend of of extreme heat within this camp. Um and so that's kind of just a quick
[1:22:44] run through of um kind of uh a coding pipeline to um read in and explore some climate
[1:22:51] data, develop some new metrics, um aggregate over various different time periods, extract it for features in space um for some of these refugee
[1:23:01] camps, camps, um and to have a look at the fluctuations for specific camps to have that real place-based understanding of
[1:23:08] of what the climate is like. Um and so I'll leave it there and we'll pass back over to to the main
[1:23:13] presentation, presentation, um but if you have any questions, then then we'll be here to answer them um at
[1:23:19] the conclusion of of the overall presentation. We are in part two, which is where we will go through some kind of concluding
[1:23:30] thoughts and some summary. Um so we've had a pretty detailed description of um what the current status on on refugees
[1:23:37] and IDPs are and some of the extreme heat um metrics as well as walking through kind of the demonstration um to
[1:23:44] understand how we might investigate extreme heat exposure in some of these uh refugee settlements. Um and so we'll go through a few
[1:23:51] thoughts and and a little bit of a summary here um before we wrap things up and open up to a Q&A.
[1:23:58] And so what did we learn today? Um hopefully um we learned the importance of studying heat exposure for really
[1:24:03] vulnerable populations. Um we have a good understanding of different extreme heat metrics, how they might impact humans differently.
[1:24:10] Um from the coding demonstration, um hopefully we have an idea of how to to process some of these gridded climate
[1:24:16] data efficiently. Um we have an awareness of of some of the considerations and some of the challenges with with processing gridded
[1:24:23] climate data that's at really high spatial and temporal resolution. Um but we have ways that we can work around
[1:24:29] that. We can scale things up. Um we can scale back our analysis to to perhaps look in more detail. Um and then
[1:24:36] ultimately um we have an understanding of of how we can extract heat metrics uh from within refugee camps. And so just
[1:24:43] to summarize a little bit from from what we kind of learned from our investigation. Um what we've seen on the
[1:24:48] bottom left-hand side is the maximum daily temperature um for one of the refugee settlements in Kenya. Um this is
[1:24:55] part of uh one of the larger groups of settlements um in that kind of eastern part of Kenya um which is exposed to to
[1:25:03] uh additional humid heat stress. Um we can see plotted on the left-hand side um maximum 2-m temperatures as air
[1:25:12] temperature in red, um but also wet-bulb temperature. So we know that wet-bulb temperature is likely to be lower, um
[1:25:17] but we're also seeing this wet-bulb temperature pass some of these dangerous thresholds of of 25° C. Um
[1:25:25] and we can see that that generally um peaks in sort of the um March, April, May time of the year. Um and doesn't
[1:25:33] necessarily correspond to the the fluctuations in in um 2-m or air or air temperature. And so when we're thinking
[1:25:41] from a policy perspective, um being able to isolate the times of the year or um certain heatwave events, um being able
[1:25:48] to sort of look at at such a a detailed chart to to know how this varies for um
[1:25:53] throughout the year um is really helpful for sort of planning um in the future. And then ultimately as part of part of
[1:26:00] our analysis, we looked at the long-term climate records. So we have this really detailed ERA5 record um from 1950 all
[1:26:06] the way up to present day. Um and so we've extracted here um the number of days that exceed a 22°
[1:26:15] wet-bulb temperature threshold um for each year along that record, Uh and we plot a trend line through it.
[1:26:21] And here the slope of the line is 0.88 or almost one, which means that every year through the
[1:26:28] record we're having an extra day of extreme heat throughout the year. And so when we're thinking about current exposure but also
[1:26:35] future exposure, knowing that there's an additional day of heat stress every year when we project out into the future, whether it's 50 years
[1:26:43] or 100 years, there are plenty of challenges that that are going to that we're going to have to face in
[1:26:49] terms of the exposure of populations to some of these dangerous heat thresholds. thresholds. I'm going to hand back over to Jayman,
[1:26:58] who's going to talk about some steps with this analysis and and kind of wrap us up here a little bit.
[1:27:06] Thanks, Andy. So, So, we have some good usable results here. How can we go forward with this kind of
[1:27:14] analysis? How can we expand on this? Well, the camp and settlement level data that we've generated here give us that
[1:27:21] kind of localized insight that we need to understand to develop a really a localized or community-specific plan or response.
[1:27:31] Um Um if we were to integrate with refugee population and demographics data, that would also augment what we could do with
[1:27:38] this. We haven't included it here, but um having those data accessible, we can really understand what kind of exposure
[1:27:45] concerns we have across really the the or within the refugee populations um focused on perhaps um the elderly or the the um child
[1:27:55] demographic groups, for example. Also, um as is probably obvious, we haven't really looked at all about at what's
[1:28:03] happening within each camp or settlement in terms of the built environment, the shelter conditions, the shade conditions. That's not included here.
[1:28:09] So, So we brought that kind of information in as well, um that would really help us ground this
[1:28:15] analysis um and help us perhaps craft um or contribute to um mitigation strategies at at a camp or settlement
[1:28:23] level. level. Um there's a another concern as well, which is that the data that we're looking at here are really just at the
[1:28:30] camp level um and that means we're not thinking about necessarily what's happening surrounding um the refugee uh
[1:28:38] camp or settlement. So non-refugee, what we've called host populations, um they may have similar exposure or they may be
[1:28:49] sort of uh at the edge of of uh the kind of conditions we're seeing in in these
[1:28:53] refugee settings. So bringing other communities that are nearby refugee settings into this frame uh would be helpful if we understand um not
[1:29:04] being too localized necessarily, but also uh not just thinking at a regional level, right? This sort of
[1:29:11] a both of those in multi-scalar approach, understanding what's happening locally, yes, but also what's under uh understanding what's happening
[1:29:17] regionally. regionally. Um that'll help us inform sort of the the timing and the type of humanitarian action for refugees.
[1:29:25] Um Um if the whole region is facing similar kinds of extreme heat, then uh that's a different kind of plan that or a
[1:29:34] different kind of plan may be appropriate compared to if it's perhaps just um in this particular region the refugee uh community
[1:29:41] themselves, for example. Um Um we also of course know that across all of our settlements or camps that
[1:29:50] we've looked at here uh within Uganda, within Kenya, or between both countries, um there's not necessarily going to be a
[1:29:57] one-size-fits-all approach to addressing these concerns. Um different approaches are going to be more suitable in different kind of
[1:30:06] contexts based on a whole series of environmental and social and um economic considerations. Um there's sort of a different suite of
[1:30:15] tools that may be available to different humanitarian actors in different places. Um but this kind of assessment that
[1:30:22] we've done here helps using the same kind of data set applied in multiple places helps us ensure
[1:30:32] ensure uh that any decisions or plans forward are more likely uh to be um um um um done in a consistent way, right? With
[1:30:40] the same kind of criteria, the same kind of considerations, as well as um an awareness of the
[1:30:46] limitations of this approach. So, having that that sort of shared baseline of data set um means that we're not doing
[1:30:52] this in a in a in a um partitioned way, um but rather that we have a sort of shared understanding of
[1:30:59] the opportunities as well as uh some of the perhaps limitation shortcomings of the approach. Um and taking um that forward um
[1:31:08] should help with the kind of equity in uh in decision-making or policy framing across a given region.
[1:31:15] Now, this is really important because as we've mentioned, we don't have a really strong policy framework to bring these
[1:31:21] kind of data into into view, into action. action. Um these current policy frameworks that that we've included here, none of these
[1:31:29] um engage with the effects of climate change on refugees, but these are some of the driving still leading uh global um
[1:31:37] policy frameworks on um the protection and the safeguarding of of refugees. Um so, our hope as with these kind of
[1:31:45] Earth observation data, we can actually inform some of the planning around how to refine how to advance the next generation of
[1:31:52] policies um to use the science that we can uh that we can um generate based on Earth observation data
[1:32:00] to ultimately protect refugees from extreme heat today and into the future. Thanks very much and I'll hand it over
[1:32:08] to Shawn. Thank you Jamin for the nice wrap-up to the excellent presentations and demonstration. demonstration. Before we transition to the question and
[1:32:18] answer session, I want to remind you there'll be one homework assignment which will be you will be able to access
[1:32:22] from the training page on June 20th. Answers must be submitted by Google Form with a due date of July 5th.
[1:32:30] To receive a certificate of completion, you must attend all three live webinars, complete the homework assignment by the
[1:32:36] deadline. deadline. And you will receive a certificate via email approximately two months after the completion of the course.
[1:32:45] Below is the contact information for Dr. Zimmer and Dr. VandenHoek along with links to the ARSET website and social
[1:32:50] media. media. We hope you will sign up on the ARSET listserv to receive notifications of future trainings and follow us on social
[1:32:57] media for other relevant announcements pertaining to NASA's Earth Sciences. We will now transition to the question and answer portion of today's training.
[1:33:07] Please enter your questions in the question and answer box and we will get to them in the order that they were
[1:33:11] received. received. We will post the question and answer document to the training webpage before the start of next week's training.
[1:33:23] We want to thank everybody that has contributed questions. We've gotten uh quite a few of them to be honest and and
[1:33:29] all of them have been really great. So, why don't we just jump into it? I know we're actually over the uh the uh given
[1:33:34] time for today's webinar, but uh we do hope to get through at least some of these questions before wrapping up. So,
[1:33:39] jumping right in question one, what would be an acceptable data product to understand temperature variation at 30 m or below? Is land surface
[1:33:47] temperature reliable for a small case study? What are the other alternatives? Thanks, Sean. Um Um Yes, uh certainly we can use other data
[1:34:04] sources. Um Land surface temperature um maybe isn't the best option for thinking about refugees settings. Um we're concerned in this case with air
[1:34:17] temperature and then the addition of that kind of humid heat uh metric. Um so, it's possible to measure
[1:34:23] temperature um using uh Landsat, which is at at different resolutions than than what we walked through in the in the
[1:34:30] demonstration here. Um Um Some studies have used it for urban heat mapping and and kind of looking at the
[1:34:36] difference between rural locations and and urban locations and and the temperature along that gradient. Um and I believe there's there's a previous
[1:34:44] asset training on on this, too. So, specifically using um land surface temperature to to kind of measure that.
[1:34:50] So, um I guess if you're interested in in using that, then then maybe check out that previous training and and there'll
[1:34:57] be extra information there. Great, thanks, Andy. Question two. In order to access the trial data in Google Drive, it has to be shared first.
[1:35:06] The code cell number four in the collab only indicates changing it to the personal drive, but no data is shared
[1:35:11] currently. However, I checked the data repo in the file, and all the data are from Earth Engine datasets.
[1:35:19] Sure, yeah. Um sorry about this. I know that those of you that were trying to follow this along and and code along. Um
[1:35:26] this is more of a demonstration in that um we would walk through kind of a way to estimate extreme heat stress um
[1:35:33] rather than having you kind of click along and and run um the code just because when we're processing this data,
[1:35:39] it often does take quite some time to um run some of the cells. So, we're we're processing millions of data points
[1:35:47] um and calculating wet bulb temperature um across pretty long um time periods, um especially with hourly data.
[1:35:55] And so how this is set up which we mentioned in the slides it requires the an additional package being added that's
[1:36:03] currently in development. So I I sent a a link to it um um I think one of some of the questions
[1:36:08] later on kind of asked this and and we sent a link to to the GitHub where this
[1:36:12] this package is located the atmos package. package. It's not natively available in a Python library so you can't just kind of load
[1:36:20] it you have to put it into your Google Drive or wherever you code. So if you code kind of on your own machine you
[1:36:26] would have it in your own file system. You point to the atmos kind of file structure within there is
[1:36:34] contained several different Python files. files. Those files specifically crunch climate data so they produce the wet bulb
[1:36:41] temperature information that we use for this. So this is all completely doable with just air temperature that's
[1:36:47] available within the era five record. But we if if we want to add some complexity to that and and think about
[1:36:54] humid heat stress and calculate wet bulb temperature then we we need those packages to be able to to kind of crunch
[1:37:00] the data and make those calculations. So sorry that didn't work straight away and your earth engine is kind of an
[1:37:07] additional step that you'll need to do if you want to kind of get this up and running on your own machine. Like I
[1:37:13] mentioned you could just focus on air temperature that's available to look at things maybe doesn't include the the kind of humid
[1:37:21] component but it should work with with just those as well. So yeah sorry sorry that didn't work but
[1:37:28] there's lots of different ways to calculate kind of extreme heat metrics and this is kind of the the approach we
[1:37:34] used for this demonstration specifically. Okay thanks so much Andy. Question number three. How was the threshold of
[1:37:41] 41 degrees Celsius chosen? I'm guessing it is likely a a extreme but does it account for acclimation?
[1:37:48] Would a more flexible percentile-based threshold of heat stress, i.e. number of days above 99th percentile of temperature values in any region, be a
[1:37:56] more relevant measure for heat stress measurement in general? Yeah, this is a really good point, actually. Um and I think we kind of
[1:38:04] mentioned it towards the end of the training a little bit when when we started to um um work with the heat data and and start to
[1:38:12] think about exposure. Um Um picking thresholds and picking extreme heat variables is pretty difficult and it's kind of context-specific of who is
[1:38:22] the population, how old are they, where they live, like what what are they doing, are they working outside or um
[1:38:27] kind of what what temperature are they exposed to. Um so there's lots of different thresholds you can use um with these
[1:38:33] like discrete temperature thresholds, um but the question also mentions this percentile-based approach, which is a really useful way of of looking at it.
[1:38:41] And so how that would work is um thinking about the long-term climate of a certain location, um and then we can
[1:38:48] pinpoint days or months or or whatever you want that exceeds that. So these it really gets at these really hot um
[1:38:56] really hot locations and really hot days. days. Um so that's helpful um in the context of refugees where people
[1:39:03] are moving, um people are moved from where they live to a new location, they maybe don't have that adaptation that um
[1:39:11] a percentile-based approach allows you to get at. So if I live in a place my whole life, I'm adapted to the climate
[1:39:17] somewhat, um and so that that percentile-based approach um may relate to exposure to extreme heat for me.
[1:39:25] Um but if we're thinking about me moving to a different location, now I'm not adapted to that and so maybe
[1:39:31] a discrete kind of temperature threshold is more applicable in that setting, um but it is flexible and obviously if if
[1:39:37] you're trying to put together kind of a rigorous um scientific experiment, you'll probably look at all of them
[1:39:43] um to see if there's kind of consensus between the percentile based purchase and the the kind of discrete threshold.
[1:39:49] But, really useful point and question. Great. Thanks, Andy. Question number four, does heat stress also consider the
[1:39:59] land temperature? Um we are using in this uh example air temperature temperature um and we are focused on kind of this
[1:40:08] humid heat specifically. So, we're not we're not necessarily using kind of the land surface temperature data um that we that we talked about in the
[1:40:16] previous question. Um we're using the the combination of air temperature um pressure. Um we calculate humidity as
[1:40:23] well and and then we kind of link those together to to produce wet bulb temperature. Great. Question number five, is it
[1:40:32] possible to apply the human comfort equation? equation? Um yes, uh I don't know so much about the human comfort equation specifically.
[1:40:42] Um I did a quick bit of um reading about it uh when the question came in. And I
[1:40:47] think it requires information about clothing that people are wearing and activity level, um which is amazing, right? Like that is
[1:40:55] kind of the way to to really think about how you are exposed to extreme heat. Um if you're wearing thick heavy clothing
[1:41:02] and if you're kind of working outside, then obviously you're going to be kind of warmer anyway and
[1:41:07] the heat that you might need to be exposed to to be dangerous is is less than if you were wearing cool clothing
[1:41:13] and you're in shade and you had lots of water. And so, um they're really useful metrics. metrics. Um
[1:41:19] Um but in refugee settings that we're we're doing this kind of global or regional assessment of extreme heat exposure,
[1:41:25] it's really difficult difficult to get kind of that detailed information about refugees. refugees. Um we know to a certain degree how many
[1:41:34] there are in locations, but that's kind of where it ends, is like we don't have um great information about uh
[1:41:42] kind of the locations, the people that are within them, um the resources they have, and so that kind of limits our
[1:41:48] ability to to apply some of these other equations. Um I know UTCI can also be used, um which kind of gets at this um
[1:41:57] kind of comfort uh level, and there's a few others um in development. I read about a stickiness um metric that's been
[1:42:05] developed um within the last few weeks, and so it's we're really at the cutting edge of thinking about um how do we kind
[1:42:12] of model, measure, map um extreme heat and exposure. So, a really good point, and with enough information, um
[1:42:19] it's possible. Um Um and I wish we could, uh but in a lot of these settings we don't quite have um
[1:42:26] such detailed information from the kind of human component. Okay, question six. Is there any specific work that looks at heat impacts
[1:42:35] and survivability limits for pregnant women? women? Um yes, there is, um and there's a few citations just posted here.
[1:42:44] Um a lot of this is in kind of the public health world, um so people that work with um pregnant women uh anyway,
[1:42:52] and kind of linking in climate uh information to to think about exposure there. Um so I guess that the the
[1:42:57] general upshot is that it can be really dangerous, um and extreme heat is exposed uh um coupled with worse birth
[1:43:04] outcomes um for children, too. So, um kind of any exposure um of extreme heat to to people in those
[1:43:12] categories can can be um particularly troubling. Okay, in question number seven, uh kindly discuss the challenges and
[1:43:21] limitations of using geospatial data sets to assess heat stress in refugee settings, and how might these be
[1:43:28] overcome? Thanks, that's a a good question. Um I mean, focusing on challenges and limitations, to my mind, really comes to
[1:43:40] mind questions of accuracy and completeness and timeliness. Um so there were think Um there were thinking about limitations
[1:43:56] on on uh some of the issues associated with um basically having incomplete picture from just one source of data collection.
[1:44:06] So, collecting satellite data uh we're just seeing a certain That's a lens through which we see conditions on
[1:44:14] the ground. So, we don't necessarily have a good sense of what's happening indoor, where people spend a lot of their lives.
[1:44:22] Uh we also don't have a complete picture of what's happening outdoor just from the data itself, because we don't
[1:44:28] necessarily have the full picture on wind, shading, ground materials, right? They These different factors as well that
[1:44:36] contribute into or contribute to the urban heat island effect. Um the data themselves only go so far, right? We often need to
[1:44:44] integrate them with a lot of other kinds of uh other kinds of data sets, but also um
[1:44:49] um other kinds of field data, non-remote something uh non-remotely collected data. data. Um so, the way I think around this is is
[1:44:58] really to try to get an overarching general understanding as best you can with remote or other geospatial data uh that
[1:45:07] you can collect, that you can have access to. Um that should put you in the ballpark, right? But then validating it locally at
[1:45:16] places of key interest, places of concern, uh places where one has access to or relationships to, um those are the
[1:45:24] and identifying then your sense of of extreme heat that we understand through all these different metrics that that
[1:45:31] Andy's been describing the the many hundreds that are available, but also some of the more recent metrics that
[1:45:36] have been developed or more really concepts around thinking about how human beings feel heat. Um and grounding that and one important
[1:45:47] note is that um a lot of this comes through the question about um how pregnant women may be
[1:45:53] affected, right? Um they're not going to No person is going to be talking about this in the context of um a wet bulb
[1:46:00] temperature. They're going to be talking about this very physical effect um that they feel and then maybe it's
[1:46:06] fatigue. Um maybe it's it's um um you know, general um you know, physical other sort of physiological impacts
[1:46:14] through breathing or through um through joints, right? These different impacts. So, interview data participatory interview data um is quite important if
[1:46:23] we really want to understand how this is happening. We're not going to understand we're not going to be able to document
[1:46:29] in a consistent way um with remote sensing um how this is happening human by human. It's a personal story, really. Uh but
[1:46:38] but that in no way means remote sensing and geospatial data are useless. They give us a really helpful overview. They
[1:46:44] they get us very close to what probably the reality is for the at sort of general sort of central tendency, right?
[1:46:50] But then that person-to-person or community-to-community insight is where where the gap is and that that of course
[1:46:56] takes additional collaborations and additional work. Great. Thank you, Jayman. Uh question number eight. Are there any recommended relatively
[1:47:07] accurate global climate data sets, including precipitation and temperature, from at least the year 2000 till now? Um there is an an we use ERA5, which is
[1:47:19] uh one of them. Um so, it has global coverage. coverage. Um, Um, it runs from 1950s to present day pretty
[1:47:27] much. much. Um, Um, it's gridded, so it has Yeah, it has that global coverage. Um, there's some variability between the the
[1:47:35] the main ERA5 product and then ERA5 land, which is um, at a finer scale. Um, but it has kind of the same temporal
[1:47:42] dimensions. Um, and then there's a few others as well. So, um, TerraClimate is one and then um, just in terms of
[1:47:48] temperature and precipitation that the CHIRTS and CHIRPS product um, from the Climate Hazards Center at UC Santa
[1:47:55] Barbara um, is another dataset that's at an even finer spatial resolution that that can be used, too.
[1:48:03] Great, thank you, Andy. Question number nine. nine. How important is spatial resolution here? Example given the CHIRTS Africa
[1:48:09] dataset goes down to 5 km spatial resolution, would we expect a substantially different risk assessment due to variability on fine scales here?
[1:48:19] Y- Yeah, it's a very This is a really good point. Um, fine resolution of of course is helpful. Um,
[1:48:25] if we had information um, at really really fine scales then uh, it would it would help us.
[1:48:33] Um, especially if we're comparing between urban and rural temperatures. And so, some of these refugee settings that are in kind of rural areas um, and
[1:48:40] some are within towns and cities. And so, there's kind of a gradient there between what we what we might expect the
[1:48:46] the role of um, urban heat islands to be. be. Um, and how that might impact temperatures. Um,
[1:48:52] but as far as a substantially different risk assessment, um, maybe not so much is is my take on it. Um,
[1:49:00] I think the general consensus is in many of these locations is um, especially those that that are
[1:49:05] exposed to extreme heat and are warming um, is that that it's just that. Um, so peo- people are exposed to to really
[1:49:12] hot temperatures and and in general a lot of these locations are in are in places that we expect warming in the
[1:49:17] future. future. Um and so I I think really the take home message from this is um less about like the number of days
[1:49:26] that that someone is exposed to in one camp versus the other, but more sort of the general patterns and
[1:49:32] um shining a light on um people living in refugee settlements and their exposure to extreme heat risk
[1:49:39] um as something that that hasn't been discussed so much in in the the policy and the planning of settlements and
[1:49:46] something that that definitely needs to be into integrated now and going forward to be able to help prepare for for what
[1:49:53] the the future risks might be. Um and a lot of these um preparation steps will uh account for extreme heat, but also
[1:50:02] some of the other challenges that that you might face. So, it's it's in general sort of building resilience within um a
[1:50:08] lot of these refugee settings. Thank you, Mandy. And looking at the time, we are 20 minutes over uh the
[1:50:16] allotted time, and we have almost 30 questions questions uh that are on this dock, but I think
[1:50:21] it's probably best to wrap up here. Uh for all those that did uh sub- submit a question, we want to let you know we
[1:50:27] will be uh finishing this Q&A doc, and we will post it on the training page uh by next uh by next uh Thursday when the
[1:50:35] the third and final part of this training will take place. But as we wrap up, I wanted to give an opportunity for
[1:50:40] both Dr. Zimmer and for Dr. Vandenhok to maybe have any closing thoughts or comments for the participants that
[1:50:46] joined today. And uh maybe Dr. Zimmer, we can turn to you first. Um sure, yeah. I mean, thank you
[1:50:51] everybody for um tuning in. Um sorry to those of you that that were trying to to follow through um
[1:50:59] the the um coding demonstration. Um Um But yeah, I mean, our our our sort of main goal is putting this together is is
[1:51:07] kind of my last point there of um we know a lot of people are exposed to extreme heat and um
[1:51:14] we can measure and monitor that for for people in towns and cities and rural areas, but but often refugees are kind
[1:51:19] of left out that conversation. Um And so our our goal is to sort of elevate uh elevate the science uh around thinking
[1:51:30] about extreme heat exposure for for refugee settlements specifically and and sort of to start integrating those into
[1:51:35] some of the sort of planning and and mitigation plans within there. So, um we hope to lay out sort of a
[1:51:41] discussion of of refugees in then a way in which um we can perhaps sort of quantify what the current exposure is
[1:51:48] and start to think about what that might look like in the future. Great. Thanks, Andy. And Dr. Van den
[1:51:55] Hook, if you had any uh closing thoughts or comments for the participants today? Thanks, Sean. Um what I just wanted to
[1:52:02] say, yeah, thank you to all the participants joining today. Um thanks as well to Andy and Natasha and Sean and
[1:52:11] the rest of the RC team for uh really putting on such a well-polished well-polished um presentation like they do um dozens
[1:52:20] of times a year. Um really appreciate everyone's thoughtful planning. Um and thanks uh to all the panelists for
[1:52:27] joining and having such amazing questions. I'm really impressed with the um depth of knowledge and awareness on
[1:52:35] all these different data sets and they have the coding needs to do this. We were wondering where to sort of
[1:52:41] target this at the intermediate stage and um uh it's really abundantly evident that everyone joining here is extremely well
[1:52:50] um um equipped at at running this kind of analysis. So, I hope you all agree that this was um
[1:52:57] not boring and interesting and challenging in some ways. Um so, thanks all uh for for making the time to join.
[1:53:04] Um and hope you check out some of the other uh trainings as part of this uh this humanitarian applications as well.
[1:53:12] Um, Um, on the actual training itself, I I I think uh totally in line with what Andy's saying,
[1:53:17] um really hoping that that data like um we are showing here can can help shape sort of the future of response, the
[1:53:27] future of planning, the future of early act of anticipatory action, early warning systems in refugee settings. Um, there were a few questions about
[1:53:36] IDPs as well. Uh there's one question about IDPs, internally displaced persons, um as well as refugees. For better or worse, we have a lot more
[1:53:47] grounded information on where refugees are, um even though there are far more IDPs in the world than there are
[1:53:54] refugees right now. Um so, in a sense, that could be considered a greater concern. Um, we we're our approach to this is sort of
[1:54:03] thinking about how we can work with these these um um kind of longer established populations, places that we have better geospatial
[1:54:11] data on, places that we have better demographic data on, broadly speaking. Um, and also places that there's a um a
[1:54:19] kind of formal um uh protection policy around, right? The the UNHCR uh the uh provides uh the
[1:54:29] asylum policies rather, um managed by UNHCR, provides protections to refugees. And IDPs don't have that kind of support
[1:54:38] right now. Um, so that that's a big concern. Um, and I think this work, as we go forward with it, we need to
[1:54:45] include IDPs, we need to include asylum seekers. seekers. We also need to think about unhoused populations who are completely absent
[1:54:53] from all of these data sets that were that we've been these demographic data sets that we're talking about. Um,
[1:54:59] stateless peoples, right? There are so many of these of these different um uh kind of intersectional vulnerabilities that present themselves
[1:55:08] to different groups around the world and in in all of the countries that that you all are joining from as well.
[1:55:14] Um and these populations tend to fall through the cracks because they're not well represented and they don't
[1:55:20] necessarily have any sort of policies kind of backing them, supporting them. But they're just as exposed if not more
[1:55:29] to these to these climate impacts. So it's it's really great great concern um to do more um and all you joining with skills in
[1:55:38] remote sensing skills and geospatial science or or or interest budding interest budding skills in these fields, I really encourage you to think about
[1:55:48] how you can apply them in directions to try to um um think about not just the ecological or
[1:55:55] the environmental or the climatic but also the social implications and actually grapple with demographic, grapple with social, grapple with
[1:56:02] cultural and policy considerations because because just thinking about these kind of applications through the a single lens
[1:56:10] of like a remote sensing approach and what can we say about um you know, the ecological conditions
[1:56:16] or the heat itself devoid from the the social context is not going to cut it going forward. It's not cutting it
[1:56:23] now. now. Um so I hope I hope that we can keep in conversation with all of you on this and
[1:56:30] then we can see and learn from you all going forward as well about um how we can take these data
[1:56:37] that are so um um challenging and interesting to work with um but make them really impactful for
[1:56:44] communities that that really need assistance and really need support. Um especially as things are likely going to
[1:56:51] get more difficult in some ways um likely going forward. Um so thanks again. um, I I really I I I
[1:56:59] hope that, um, that this has been, uh, rewarding uh, training for all of you and, uh, yeah, I
[1:57:07] really really hope we can, um, hear from you all with any follow-up questions you have as you
[1:57:12] perhaps dig into the training, uh, again or or maybe for the first time. Thanks so much. Awesome. Yeah, Jaimin and Andy, thank
[1:57:20] you both, uh, for your expertise, your insight into this training, and especially for these closing comments. I
[1:57:26] think they're really reflective of not only what you were able to cover today, but in terms of what people can be
[1:57:31] thinking about in terms of going forward and next steps. So, really appreciate that and I do want to acknowledge, uh,
[1:57:36] our set team. Uh, you might not have heard from them, but they've been working very difficult, hard, and and
[1:57:40] tirelessly in the background. That's Natasha Johnson-Griffin, Brock Clevins, Solomon Hudson-Odoi, and Sarah Catchall. So, thank you to our set team and thank
[1:57:47] you to all the participants that joined today. Uh, we do hope to see you next Thursday for the third and final part of
[1:57:52] the webinar series. So, have a great day, have a wonderful weekend, and we'll see you all at the same time next
[1:57:57] Thursday. Thank you.
