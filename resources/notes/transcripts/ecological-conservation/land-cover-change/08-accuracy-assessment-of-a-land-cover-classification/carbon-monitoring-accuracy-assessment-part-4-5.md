# Carbon Monitoring Accuracy Assessment, Part 4/5

`https://www.youtube.com/watch?v=C2Mdeuiqi-U` · id 38 · 1:23:17 · module 92 — Accuracy Assessment of a Land Cover Classification

[00:00] hello everyone uh welcome to week four of our webinar series remote sensing and forest cover and change assessment for
[00:07] carbon monitoring my name is amber mccollum and i will be your instructor today along with our guest speaker pontius olson from boston
[00:15] university university for this course we have two sessions per week each thursday session a will be from 1 to 2 30 p.m eastern and session b
[00:28] is from 10 we have we're going to have lectures guest speakers and and q a at the end of each of these sessions
[00:39] you can find all the materials on the carbon website listed there we eventually will also have all the pdf
[00:47] versions of the presentations available in spanish in a few weeks as a reminder we have two homework
[00:57] assignments assignments the first homework assignment is is online and it's due today so anytime today if you complete the homework via the
[01:08] google form your homework will be counted the second homework is now also available on the course website
[01:16] and i've also posted it in the chat box here and i can post it again if anyone needs that information
[01:24] to receive credit for the homework you must submit all the answers via google forms forms um you will receive an email receipt of
[01:31] homework submission after the deadline um so i've gotten some questions about the homework i will be going through and marking
[01:39] everyone's submission of their homework and i'll be sending you an email with the answer key to the homework sometime
[01:46] next week so keep an eye out for that to receive the certificate of completion you must attend four out of five live
[01:54] webinars and then complete both of the homework assignments by their due dates um um also uh the homework two
[02:03] deadline is july 14th i wanted to mention that as well and we'll mention that again next week
[02:10] here's an overview of the course agenda this week we will be discussing accuracy assessment so for this week we will discuss
[02:22] statistical statistical inference and how it's defined according to the ipcc we will review some terminology such as
[02:29] reference observation reference data and accuracy accuracy we will discuss and provide an example of error matrix sample counts and errors
[02:39] of omission and commission we will discuss error estimators such as bias-adjusted and stratified or post-stratified estimators estimators we will provide some information about
[02:52] the biota tool that was developed at boston university and if there's time we'll have some some questions and answers at the end and you
[03:03] can type in your questions into the chat and we will try to get to them great so at this time i will now hand it
[03:13] over to our guest speaker pontus olfason from boston university all right thanks amber so yeah thank you
[03:23] very much for that amber amber um um as amber said my name is pontus olofson i'm from boston university
[03:33] and i will be talking about stratified estimation today of area and accuracy and i know that the
[03:40] title of this talk is accuracy assessment assessment and it's a little bit more to it than just accuracy we're doing this within
[03:50] the um kind of ipcc red plus greenhouse gas reporting framework and context and and typically what we're
[04:00] interested in is not necessarily or not primarily at least the accuracy of a map that shows areas
[04:09] of of activity data typically what we want is an unbiased estimate of the area of deforestation for example
[04:20] and there's a couple of different ways of doing that i will talk about one of those approaches here stratified
[04:26] estimation estimation but i will briefly touch upon some of the other approaches too um um the other thing i would like to mention
[04:36] before we start is that amber just mentioned the biota tools and i won't talk too much about that for
[04:44] the sake of time but i will say that that is a soft an open source software initiative that me and a few others here
[04:56] at bu have have initiated and it's really a collection of existing open source software so it's not that we have written a whole
[05:08] bunch of programs and scripts and interfaces and stuff we're trying to make use of existing software that that
[05:19] that we use in our own research and that we find helpful and then we try to fill in the
[05:24] holes holes such that you can do this kind of work that i was talking about today we're trying to
[05:30] provide support for much more than just this statistics stuff stuff we have a time series module in there
[05:37] there is an object-based image analysis module module and a lot of different things so the idea here is to try to provide open
[05:44] source solutions such as practitioners like yourself can keep up with kind of the latest development in this
[05:51] field such as such as time series analysis statistical inference and and object-based image analysis and stuff like that
[06:00] um um and and i'll be happy to answer more questions about that later on but i won't talk too much about it
[06:09] um um i will say that everything i'll be talking about today you can very easily do in in the the biota virtual machine
[06:18] and as i said before it's completely free up to it's completely open source all the source code is open doesn't cost
[06:23] anything so please let me know if you have questions about that all right so let's get started with with
[06:36] this lecture on on statistical inference or or estimation of area and accuracy so so the way i see this in order for red plus
[06:46] to happen in order for us to report in order for countries to report um um carbon emissions and removals i think
[06:55] these three disciplines here need to come together if we have uh geography forestry and statistical inference or just statistics right
[07:07] and i think traditionally forestry and statistics there's been a very clear link there's with in the national forest
[07:15] services around the world there's a lot of very skilled statisticians working and at the end of the day forestry
[07:22] you know a big part of forestry in this context is the national forest inventory which is a sample
[07:30] of of a country and and there's a lot of statisticians that know how to make very good use of that sample
[07:38] to make inference to obtain information about the forest of of that country um um i think a link that traditionally has
[07:48] been very weak is this link here between geography and statistics typically the geography community that making math and very very focused on
[07:58] making a map um um once the map is done you might try to provide some accuracy measures
[08:06] of how how accurate the map is but then that's kind of it but really what you thought really what
[08:12] you have shown by by by showing that the the accuracy is not 100 is that your map
[08:18] has errors right then if the map has errors you can't just simply count the pixels in the map
[08:24] you're going to have to resort to something more elaborate you're going to have to construct these unbiased
[08:31] estimators that will really give you an estimate of for example the area of deforestation or force gain that is
[08:39] adjusted for classification errors right then this is something that i personally personally am interested in my my phd is in
[08:48] geography but my educational background is in mathematical statistics so i'm very interested in kind of making this link here and i think one of my one
[08:58] of my aims with the papers that i've written and also with these kinds of talks is to
[09:04] debunk some of the myths related to at least the statistics theory that it's really not that difficult and
[09:11] you don't need a degree in statistics or anything like that that i i usually make the case that i usually
[09:19] make the analogy that you don't need to be able to to take apart the combustion engine in order to drive a car
[09:27] and that's pretty much it so you don't unders you don't need to understand the underlying mathematics necessarily
[09:34] of the inference framework in order to implement an unbiased estimator for example i hope i can convince you of
[09:40] that today by showing a few examples right right so today we will talk very much about this link here between geography and
[09:49] statistics and how we can use some of these statistical approaches together with the stuff that we make
[09:57] by analyzing satellite data and how we can use these two sources together to to further our knowledge about
[10:10] land use change land cover change and carbon emissions and and why do we need to do that
[10:21] why is this so important i think the easiest way to explain why it is important is to go back to the
[10:28] underlying underlying um um the the ipcc good practice guidelines um jim penman penman wrote this and together with a lot of
[10:39] our people he was the lead author of this back in 2003 and he wrote up the the the good
[10:46] practice guidelines for greenhouse gas inventories inventories by the ipcc and i'll talk a little bit about the
[10:54] so-called methods and guidance document the gfy we're currently in the process of releasing the second version of that
[11:00] and jim is the lead author of that too together with myself and and curtis woodcock john rayson and carly green and a whole bunch
[11:10] of other authors we are the five lead authors i've been working closely with with jim the last couple of years of
[11:15] doing this i know jim is a very very smart man and we should all listen to what he says
[11:21] so so in the good practice guidelines he he states these two very important criteria for application to greenhouse gas
[11:30] inventories the first one being that the greenhouse gas emissions are neither over nor underestimate as far as can be
[11:41] judged and the second one is that uncertainties are reduced as far as possible right so what does this actually mean well the
[11:50] first criterion here refers very much to the concept of bias neither over nor underestimate this means that it should be unbiased
[12:02] and bias is the property of something we call an estimator which is simply a statistical formula it's just an equation some of them are
[12:12] very very simple can be a very simple formula formula that when applied to a sample or to sample data gives you an
[12:22] estimate right and if the estimator is unbiased the estimate that you get is unbiased and and unbiased estimate
[12:37] means that and i'm going to call i'm going to pull out my old statistics book here mathematical statistics and data
[12:43] analysis this is one of my textbooks from from university and there is a very good definition i
[12:49] think of what an unbiased estimate is he right the author is john a rice he writes writes we say that the estimate is unbiased if
[12:59] it's expection if it's expectation sorry equals the quantity we wish to estimate that is the estimate is correct on
[13:10] average average end quote so an estimate is unbiased if it's expected value equals the quantity we wish to estimate so if the quantity we
[13:22] want to wish to estimate is the area of deforestation for example we say that an estimate is unbiased
[13:29] if the expected value equals to correct the true area of deforestation that's what it means we have an unbiased
[13:42] estimate the second criterion refers to uncertainties uncertainty are reduced as far as possible in order to reduce the uncertainty we
[13:59] need to characterize it right so even though an estimate is unbiased they will still have some variance right
[14:07] we are selecting a sample sometimes a very small sample from a very large population there is inherent noise in
[14:13] this process and so on and so forth so we'll get there will be some form of variance
[14:18] which means that the estimate will deviate from the true value and we can express how much is deviating
[14:26] from the true value with a confidence interval so we use the confidence interval to express the uncertainty of
[14:32] estimate and again i'm going to go back to my textbook here and read out loud when he how he defines
[14:40] confidence intervals i also think this is a pretty good definition he writes that a 95 confidence interval
[14:47] is a random variable that contains the population parameter which might be area of forest area of deforestation with a probability of 0.95
[14:58] if we were to take many random samples and form a ci for each one about 95 of
[15:04] these intervals would contain the the population parameters so this is what we want in order for something to be ipcc compliant we need
[15:15] an unbiased estimate plus minus a confidence interval and and in order to do that we have to resort to
[15:28] something called statistical influence we have to construct these estimators based on sample data so statistical inference is simply a way
[15:41] to obtain information about a large population by examining a sample right the population is too large for us to examine examine each element
[15:51] of the same of the population so we select the subset from that population and then we examine and analyze that
[15:59] sample and we can obtain information on on the whole population even though we're examining just a small subset of
[16:06] it it and i'm going to go through here a very very simple example of inference that i
[16:13] think you're all very familiar with um that we encounter in in daily life here for example if we have
[16:23] two presidential candidates prior to a presidential election we typically want to know who is ahead in the polls who is who can
[16:33] we expect to get the most votes so in this particular example we have two presidential candidates in the u.s
[16:40] presidential election 2008 and and you know the american electorate is very large like 150 million people or so so
[16:48] we can't obviously ask each one who they're going to vote for that would be a complete census and we only do that
[16:54] once every four years so we can't do that it would be a massive massive task and then a newspaper for example and wants
[17:03] to report on this they can't do such such a um um they wouldn't be able to do that so
[17:10] instead what they do is they're trying to infer information about the whole u.s population by examining just a very small subset of
[17:19] that population so in this particular case we can see that and one one one in this particular example we'll see how
[17:31] this is being done so for example we have the whole u.s population now what we can do
[17:37] is to select a simple random sample of about 500 voters so i said we have 130 150 million
[17:46] voters voters or eligible voters at least we can select a simple random sample of just 500 people
[17:53] 500 voters and we'll ask each one of them them who are they going to vote for we'll have our sample data then of 500
[18:04] answers according to these 500 voters that's our sample data we can apply a simple random sample estimator
[18:14] estimator to that sample data to get an unbiased estimate of the number of votes for presidential candidate obama for example
[18:23] and in this case the simple random sample estimator is is very simple it's just the mean value so we would add
[18:31] we have each of the 500 people here would ask the first one you know who are you going to vote for
[18:37] i'm going to vote for obama okay so that's a one yeah it's the second person in our
[18:41] sample yes i will also vote for obama that's a one the third person says no i'm not gonna vote for obama so that's a
[18:47] zero zero and then we sum up we get a sum of all of these different answers we divide by the total sample
[18:55] size 500 and we get an unbiased estimate here of the people that will vote for obama in this case is 51
[19:07] that is our unbiased estimate and it's pretty easy actually to show mathematically that this estimator is unbiased
[19:14] unbiased that its expected value will give us the true parameter mean here uh the true population mean um and you
[19:24] can you can easily do that yourself i don't i'm not going to do that here i think it's a little bit out of the scope
[19:30] of this talk but just to just to convince you that this is really is an unbiased estimator
[19:39] now this is a small sample it certainly got some the estimate here is associated with certain level of variance and we can
[19:47] easily calculate that and we do that by first calculating a variance we have the variance estimator here it's
[19:58] fairly simple to calculate this 2. there we have n that is 500. here we have i y i which are the different answers it's
[20:06] just 1 1 0 1 1 and so on and so forth and then we have the estimate here which is 0.51
[20:14] so we can very easily calculate that we get a variance we can take the square root of the variance to get the standard
[20:20] error we multiply with a z-score that corresponds to this 95 confidence level and we get a confidence
[20:28] interval i should have put in like a plus minus sign here but i didn't do that right so here is our confidence
[20:34] interval interval so now we have an unbiased estimate of the number of votes for obama plus minus a confidence interval
[20:45] okay now now to make this a little bit more interesting we know that the electorate is very diverse we have
[20:56] people of different ethnicity we have people of different cultural background living in different parts of the country different
[21:04] educational backgrounds different jobs so on and so forth and we know that these different groups these different ethnic and
[21:11] socio-economic groups and geographical groups too vote very differently for example we know that the black part of the electorate
[21:25] votes primarily for obama in 2008 there was we could expect that 95 percent of black voters would vote for obama
[21:32] compared to only 43 percent of white voters now if we select a relatively small this is just an example here we select a small
[21:44] simple random sample of just 100 voters which is a very small sample but just to illustrate the point here
[21:52] and it turns out that we get 70 people that identify as white 30 that identifies black we would then expect obama when we apply
[22:02] this simple random sample estimator to get 59 of the votes if we instead ended up with a simple
[22:12] random sample we have 95 white voters and five black voters we expect obama to receive considerably less number of votes right
[22:24] so in this particular case the simple random sample might not properly represent the population or if we wanted to represent
[22:33] the population we need a very very large sample sample a very large sample that is going to
[22:40] take a long time to um to to interpret and analyze so one thing we can do here is to
[22:48] introduce something called stratification stratification right we can try to do something called a stratified random sampling of the population instead it is instead
[22:59] of a simple random sample so in this particular case we could for example create two strata one stratum of white voters one stratum
[23:10] of black voters and we would sample them individually individually or separately so we could for example select a simple
[23:19] random sample from stratum 1 and then a simple random sample from stratum 2. our estimator would then not be a simple
[23:31] random sample it would a simple random random estimator would be a stratified estimator and it would look slightly
[23:39] different we'd have to take this stratification into account so this is just an example of of statistical inference in real life
[23:49] and i think this is an example we're all familiar with and it happens this is actually actually in one way it's a good example because i
[23:56] think it's a situation we're all familiar with on the other hand it's actually a very complicated situation it turns out that
[24:03] these polls are very very tricky and actually sometimes more tricky than the kind of geography based estimation that i will talk about
[24:12] for the rest of this lecture and it was a very good article today this is this is a little bit of a parenthesis by
[24:19] there was a very good article today in the new york times called how polling can go wrong written by nate cohn
[24:26] published today june 30 2016 and and the problem with this with this particular issue is that we
[24:37] don't really know who's going to vote we know that we have a certain number of people who are eligible to vote but we
[24:45] don't know if all of them are going to vote and we don't know who is going to
[24:48] vote vote and what he's talking about in this article is that sometimes what they do is that the population that they're
[24:55] sampling are actually the people that voted last year and that can can introduce problems because it tends to
[25:06] over represent elderly people they tend to over represent ethnic majorities and underrepresent young people and ethnic minorities
[25:17] um so if you want to know more about this issue which is first of all very relevant we we get
[25:23] reports like this every day in the news um the new york times has this uh i don't want to make any you know
[25:31] commercial for new york times but they have this series of articles about um the issues of sampling and population
[25:40] and polling and stuff like that that i think are are worth reading anyway let's move forward here
[25:46] and i would argue then that the task of doing this what we just went through of trying to
[25:53] make some inference about the voting population of the us in order to say who is going to win a
[26:00] certain election is really not that different from trying to estimate the amount of force in a country or the amount of deforestation
[26:08] in the country it's really the same thing right and here we have an example of this here
[26:14] we have the country of cambodia we have a map showing areas of force loss stable force and stable non-forest
[26:23] and we can easily then see that for example these different land cover categories the land cover change
[26:29] categories the different map classes if you will they can correspond to different demographic groups of the population
[26:38] our sampling framework population here are now all the pixels of this country instead of voters but but the the the statistical issue
[26:46] here is very very similar and we could implement the exact same estimators and the exact same equations
[26:53] to get unbiased estimate of the amount of deforestation for example so let's go through this exercise but
[27:02] before we do that i'd like to introduce some some some terminology first of all we have this term accuracy
[27:09] assessment that that that that is um i think is very i think people are very well aware of this this term
[27:19] accuracy assessment is well indented into the community and the way i like to think about accuracy assessment is is this whole
[27:27] analysis that we do where we identify classification errors in a map so we need to design and
[27:34] implement the accuracy assessment so there are a couple of different steps involved in that the first one is that
[27:41] we need to figure out how to sample the map right so we have our population which in the example here i'm going to
[27:47] show is the country of cambodia that's our population all the pixels that make up the country of cambodia
[27:55] it's millions and millions of pixel we can't analyze every single one of them so we're going to have to sample them
[28:01] just like we did with the american voters in the example then for each unit in our sample we need
[28:08] to collect reference observations so in the polling example the reference observation might just simply be asking a vote who is going to vote for
[28:18] that's kind of our reference observation in this case we can't ask the pixel what it is we're
[28:24] going to have to take a look in in in various data to see what's really going on at each
[28:33] individual sample unit so it's the best assessment of the lens surface condition right so has this pixel gone through
[28:41] uh has this pixel experience deforestation for example or is it just stable forest is it stable non-forest
[28:47] agriculture so on and so forth and and sometimes we already have a sample of reference observation in place you know
[28:56] the best example of that would be a national forest inventory we have the population which is a
[29:03] country we have typically a systematic sample across the country where skilled foresters are visiting each unit in this in this sample and
[29:13] they're collecting in reference observation of what is going on there they actually go on to the ground and
[29:19] doing that so that's a that's a sample of reference observations of very very high quality sometimes and this is the case in
[29:27] cambodia we don't have any such sample sample so we're going to have to collect it and and
[29:34] and in order to collect that we need to identify reference data so that's the data we use to collect these
[29:41] observations so for example if you have a time series of landsat observations and you're up serving serving these these sample units in time series
[29:53] of landsat data then landsat data is your reference data which means that for each unit in our
[30:00] sample sample for each location our sample we then have a reference label according to the reference data
[30:10] and we have a map label and we can compare these two to say something about how accurate the map is
[30:17] meaning to which degree does the map corresponds to reference conditions the measures of accuracy will express the degree to which the map corresponds
[30:28] corresponds to to reference conditions and usually of higher importance are these area estimators that we can construct from the sample of reference
[30:38] observations observations okay okay so to break it down there are like three steps involved here the first one being
[30:47] the sampling design where we decide which element of the map to visit where we will collect these up this
[30:57] reference observations where we will com where where will we collect the reference observations and and we can do this with a simple random
[31:08] sample we can do it with a systematic sample we can do it with a stratified random or stratified systematic sample
[31:15] there are other more elaborate sample design like cluster sample and two-stage sampling and stuff like that once we have done that
[31:25] we need to then determine the land surface reference condition at the locations of the sample unit right so now we have our sample in place
[31:35] the next step then is to identify a set of reference data and determine the reference condition at
[31:43] each of these locations and this is usually a very time consuming exercise right if you have let's say 500 units spread
[31:52] across the country you're going to have to collect the data for these 500 units and and sorry
[32:00] sorry and you're going to have to then determine what the reference conditions are are once you have done that
[32:06] you can analyze it so the last part of this this whole workflow is the analysis and this is where we then construct our
[32:14] estimators estimators we we we calculate our accuracy measures and our confidence interval and all that so yeah and before we actually go through
[32:28] the example another central part of this is the error matrix if you've ever written if you ever read a paper um
[32:37] a change detection paper for example where they do an accuracy assessment you will typically encounter these aeromatrix error matrices
[32:51] so here we have an error matrix expressed in the form of sample counts so so let's take a look at this because this
[33:00] is important being able to to to understand an error matrix we have map here so we have the map labels being
[33:10] represented by the rows right the map labels being represented by the rows in this case we only have we have a
[33:19] very very simple map it's only two classes it's four slots and then everything else everything else being
[33:25] lumped into one class here right right so the map labels are represented by the rows here and then we have the reference
[33:34] observations which are being represented by the columns here and then we have our total sample size down here
[33:44] so let's say that this was a sample of 500 units the first entry here in the air matrix would tell us how many of
[33:52] these 500 units were correctly classified as forest laws and then we have this one here element 2 2 of the arrow matrix this
[34:04] will tell us how many of these units were correctly classified no loss or everything else right this would typically be very very high
[34:13] number in this particular case of importance here are errors of omission and error of errors of commission if we look at the errors of
[34:22] omission of forest laws they are down here n21 so these are the sample units that were mapped
[34:33] mapped as no loss but upon examination in our reference data it turns out that these were actually forced laws
[34:43] right right so we omitted the force lost in this particular case we mapped it as being stable land cover
[34:51] but in reality it was four's loss right the map omitted the force lost in this particular case
[34:59] that's why we call it errors of omission of forest law and then we have the errors of
[35:08] commission commission and one two here so these were things that were so these sample units were mapped as forest laws
[35:19] but the reference data says that it's no loss so the reference observations are no loss but the map label here is forest law so
[35:30] in this case we committed forest laws right this is indicative of an oval representation of the force loss
[35:38] so these are pixels that will show up as deforestation as red for example in our map but in reality they're not
[35:45] deforestation at all right errors of commission so we have here we then have the total number of sample units in in these two
[35:57] map classes and here we have the total number of sample units in the reference classes right so these numbers will will
[36:05] be different if we have errors in our map which we typically do and if this is a stratified sample
[36:12] we have the strata weights out here and these are very important if the sample is stratified and the
[36:19] strata ways really what they are is the area proportion of these two strata strata right so in this case the force loss
[36:27] might be very small it might be like two percent percent and this here would be then 98 so it was
[36:34] 0.02 and then 0.98 and it sums to 1 or 100 now if this is a stratified sample we
[36:45] can't really do much with these sample counts because we didn't have a disproportionate number of sample units
[36:51] for strata this is only 2 percent but it might be if this is only two percent it might be
[36:57] that the total number of sample units like we get twenty percent of the sample units in this in in this
[37:04] stratum here for example so we can't really use this to calculate accuracy measures what we're going to have to do instead
[37:12] and what we want to do is to express this as area proportions so rather than saying that oh i have
[37:20] five errors of commission what does that mean you have five areas of commission it doesn't really mean anything or i
[37:26] have two errors of omission it's not terribly informative it doesn't say much so what we want to
[37:33] do is to express this as area proportions i want to say that two percent one percent or whatever it
[37:41] might be of the total map area were committed force loss right so the the commission error force
[37:50] laws represent one or two percent or whatever it might be of the total map area and same with
[37:56] the the other elements here in our in my arrow matrix i want to be able to express this
[38:01] as as uh area proportion and if this is a stratified sample a stratified random sample we can then rather easily
[38:10] calculate these area proportion we have the strata weights and then we just take the sample counts in each element here
[38:17] and divide by the total number of sample units per strata strata and then we get a new error matrix
[38:27] where the elements here are expressed as area proportions so this would now be you know one percent and this would be
[38:36] 99 or 1 1 and this might be 89 and this might be another couple of percent and this is now much more informative
[38:48] so so if we sum across the columns here so we have the row totals out here these would now correspond to the actual
[38:59] strata weight this will be the proportion of the area occupied by this map class here right so
[39:07] these are not really estimates that's why there are no hats on these right you see we got a little hat on these meaning
[39:13] that they're estimated area proportions this is not really estimate this is the total area of these two strata
[39:22] and then we have these here these are the column totals and these are important because this would then be the
[39:29] area area of force loss and no loss according to the reference data and this turns out to actually be an
[39:40] unbiased estimate of the area of forest laws and we'll get to that in a little bit what we can do now also when we have
[39:51] this expressed as area proportion is to very easily calculate accuracy measures we can calculate the overall accuracy is just the diagonal
[40:00] total total which is just simply the the the area that was correctly classified right we take the diagonal total so we
[40:14] you know it's one minus the the error of omission and commission so the area proportion that was
[40:21] correctly classified which in this particular case if we have a if we have a map of forest loss and
[40:28] then everything else most likely the overall accuracy would be very very high because this will really be a measure of
[40:34] how how well we map no force loss and we ought to be pretty good at that in this case
[41:02] more interesting interesting accuracy measures might be class-specific accuracy measures we have the user's accuracy the user's accuracy
[41:16] of force loss would be this guy here divided by the map proportion right so this is one minus
[41:24] the commission error one minus the commission error and then we have the producer's accuracy which would be
[41:37] this guy divided by the area proportion according to the reference data so this would be one minus the omission error
[41:46] right the complements of omission and commission errors uses and produces accuracy accuracy and in this particular case if we have a
[41:54] map of force loss and everything else these two will it's fine um so we were just here this is like a
[42:03] cliffhanger right we um um we're just gonna introduce area estimators which is like at the heart of
[42:11] everything here so is worth waiting for so in the methods and guidance document and you know i mentioned this many times now
[42:24] and and and the methods and guidance my the second version is about to be published this week or next week
[42:30] actually actually and and we have quite a lot of material on the kind of stuff that i'm talking about here today
[42:41] and and i'm only talking about one estimation approach stratified estimation there's a couple of different one and we try to provide guidance in
[42:48] the methods and guidance document on when to use which estimate and we can with this air matrix we can very easily
[43:03] construct two different kinds of estimators that will give us an unbiased estimate of the area of force loss one
[43:10] is called a bias adjusted estimator and the neat thing here is that it actually has an expression of the bias
[43:21] right right so here we then have you know this is very very intuitive and this is why i like to show this the bias
[43:29] adjusted estimator we have the map proportion out here right so here we have the area of force loss out here
[43:36] expressed as a percentage of the total map area we have to multiply by the total total area in hectares in order to
[43:45] in order to um to express this as a hectare but it's basically an area in hectares but right
[43:51] now we're looking at this as a proportion of total area right so this is the proportion of
[43:58] forest loss and then we add add the area of omitted forest loss right so here we have sorry i forgot to show
[44:10] the error so out here we then have the map proportion of force loss right this is what we know is bias right we
[44:20] can't believe the map because we have errors in the map so the map is not unbiased unbiased okay
[44:28] okay but what we do is that we take this biased biased map proportion and then we add
[44:36] add the error of omission so the amount of force loss that our map omitted omitted we include in our estimate and then we
[44:45] exclude exclude the error of commission right right so here down here we have the area of forest laws
[44:55] and then here in parenthesis we have the bias and the bias is the omission minus the commission
[45:06] and the answer here is is the area of force loss according to the reference data another way to think about this is
[45:15] with a stratified estimator in this case we're not necessarily making use of the map here we're just
[45:23] summing the reference observations the area of force loss according to the reference data so the sum of reference
[45:31] observations which in this case would be this guy plus this guy and it would give us the exact same answer as the bias
[45:38] adjusted estimator in this case so it's two different ways of thinking about i won't go into detail about the
[45:45] difference between these estimators but um in the methods and guidance documents as i said we're trying to outline guidance
[45:58] for this in in i think what one can say though is that if we have continuous map classes so we have a
[46:06] map where each pixel has like a percentage of deforestation the buyer's adjusted estimator will give you a slightly smaller uh standard error
[46:16] or confidence interval whereas if your map classes are categorical categorical meaning that each pixel belongs to exactly one of five or six or whatever
[46:27] map classes each pixel has exactly one map label then a stratified estimator is is preferable so i think we have all the tools now
[46:44] that we need to go through an actual example here and the example i'm going to show is is
[46:51] from the country of cambodia i would also like to mention before i do that that the a lot of the information
[46:59] that i will be talking about are in these two papers here everything is in these two papers and
[47:05] stratified estimation is explained in william cochran's book which has been around for many many decades now the
[47:12] third edition is from 1977 that's the one i'm using written by william cochran at harvard university across the river here from
[47:21] where i'm sitting and these two papers really what they are are um illustrations of how to implement these
[47:30] sampling techniques in a geography context that's really all there is to it it's not like i invented any of this i'm
[47:37] just kind of showing how to how to construct these estimators and to calculate confidence interval in a geography context right
[47:48] so let's go through that exercise and and um as i said the the the example here will
[47:55] be from the country of cambodia so the objective is to estimate the area of forest loss in the country of cambodia from 2000 to
[48:04] 2011. 2011. and all i have at my disposal is this map here that's all i have i have
[48:10] nothing else and this is the map that i got from matt hansen's global force cover change data set so as you're probably aware of
[48:21] in 2013 he published global data on forest cover change annual forest cover change from 2000 to 2011.
[48:29] so what i did is that i extracted those data layers from for the country of cambodia and i
[48:35] created this map here very very easy and it has six different classes mainly forest and not forest that's the
[48:45] majority of the area we have some water and then we have forest laws showing here in red
[48:51] and then we have a little little bit of force gain and then there is even less of something called lost and gain so
[48:58] areas that experience both force loss and force gain over this time period so this is the situation right
[49:09] um um i have my map and i have nothing else so what i need to do now is to
[49:17] and when i have my map and what i want to do is to estimate the area of force
[49:21] loss i know that i can't just simply count the red pixels here because that's a biased number i will get a biased value
[49:30] of the area of forest laws so what i'm going to have to do is to select a sample from this population
[49:40] here from this map and then i'm going to have to collect reference observations for each sample unit and then i have to analyze that
[49:49] sample and construct an unbiased estimator of area and then i calculate a confidence interval so that's what i'm going to do
[50:00] and as i said before this is very important i can't just simply count the red pixels we have a red pixel
[50:08] here for example we don't know if that's actually four's loss we know that the map says it is
[50:14] but we don't know if his four is locked in reality we do not know that therefore we can't
[50:19] just count the pixels on the map however however i can see that even though there's quite a lot of deforestation it's still a
[50:28] relatively small part of the population here maybe five percent of the total area area so the map becomes very valuable to me
[50:36] because it shows me where the deforestation is so it allows me to sample it i can use this information
[50:46] as a stratification of my sample and that's very very valuable if i didn't have this map it would be much more difficult
[50:54] i could do like a simple random sample would i would leave i would need a very very large sample
[51:04] so so just one slide here from the methane guidance document this is from the second version of the methods and
[51:10] guidance document and what we're trying to do now is to focus much less on how to make maps
[51:16] i mean you don't even have to make a map these days you can just download data and and play around in a gis and and get
[51:23] a map for your country that way right so making maps is becoming easier and you can do it in so many many different
[51:29] ways that we're not really providing much information how to make maps instead we're trying to focus on
[51:38] how can you use the map once you have one one and here we have a decision tree
[51:44] from the method and guidance document the first question is do you plan to use a map for estimating activity data
[51:53] you don't have to as i said before you could do a simple random sample or systematic sample of
[51:59] the whole country that's fine you don't necessarily need one it's usually a very good idea though especially if if what you're interested
[52:10] in is just a very small poor part of the population then a map will will become very important
[52:17] so in my case yes i plan to use a map for estimating activity data and again activity data
[52:26] is the ipcc lingo for areas of land use change land cover change right and and typically what we're interested
[52:35] in the changes in in in forest land changes in forest area so in my case i would ask i would answer yes to that
[52:44] question the second question if you plan to use a change map meaning you plan to use a map that shows areas of change you
[52:50] don't have to but again in my case i have one and if you have one it's a good idea to use it
[52:57] so yes i plan to use a change map because my map actually shows areas of deforestation and force gain
[53:04] and then do you have a reference sample in place no i don't so i end up here
[53:11] in box number five i answer yes yes and no so what i'm going to have to do is to
[53:16] select the sampling design and then select the stat statistical estimators for that sampling design so this is the
[53:23] route route that i'm going and in the methods and guidance document we then provide information for each of these decision
[53:30] points here to guide the users through the different decisions here so what i'm going to illustrate now
[53:37] is is this particular route here shown by the red lines from the red arrows so this is the situation i have my
[53:48] objective stated estimating the area of force loss i have a categorical change map so each pixel map belongs to one and
[53:56] only one of six distinct classes there's five here but it's actually six and i don't have any reference sample in
[54:04] place place i don't have the resource to go visit anything in the field i'm gonna have to
[54:09] resort to whatever free data i can get my hands on and in this case it will be
[54:13] landsat data and google earth data therefore therefore my preferred sampling design is stratified random and that is because
[54:23] i'm interested in the area of forest laws and it's a relatively small proportion of the area and i have a change map that shows me
[54:32] roughly where it is so stratifying accordingly is a good idea so therefore following the guidelines in the method and guidance
[54:40] document i'm going to implement a stratified random sample i'm going to select a stratified random sample my preferred area estimator is a
[54:50] stratified estimator not a bias adjusted estimator and that is because my change map is categorical people like
[54:59] steve steinman and at the state university of new york ron mcroberts at the us forest service they've done a
[55:05] good job showing the efficiency of these different estimators in various situations their research have concluded that the
[55:14] stratified estimator is better when i have a categorical change map if i had a continuous change map i would
[55:21] probably be better off doing a bias adjusted adjusted estimator estimator all right so that's the situation so what i'm going to have to do now is
[55:31] the first to select my stratified random sample and part of this sampling design is determine the sample size and allocation
[55:38] to strata i have and then i'm going to have to examine each of my my sample units
[55:49] in my reference data my reference data is landsat and the beauty of landsat there's a lot of
[55:57] beauties of landsat but one of the beauties is the data is completely free we have an archive
[56:03] of historical landsat data that is completely free of charge there's really no reason to not examine a time series
[56:09] of landsat observations i have the time series why not use it so that will give me a better reference
[56:16] data set than just using some individual snapshots in time so i'm going to look at time series of landsat data for
[56:24] each unit in my sample and i'll also take a look in google earth and see if there's anything
[56:31] helpful in google earth and then finally once i have done that i've collected all my reference observations
[56:38] observations i'll do my analysis so i'll construct my estimators of area confidence intervals and calculate accuracy measures
[56:47] so the first step is to estimate the sample size and i'm not sure how much i mean i think we're running a little bit
[56:54] short on time here so i think i'll just brush this over pretty quickly there's a lot of papers out there to explain how
[57:01] to use this and it's just to kind of give you a ballpark estimate but at the heart of it
[57:07] is that i have here a target standard error that i want to achieve and this variable here p hat
[57:15] that's the area of the parameter that i want to estimate in this case area force loss so i'm going
[57:23] to have to try to specify a target standard error of the area of force loss that i want to
[57:33] achieve that's really what is driving this whole estimation of sample size so this is what it might look like
[57:43] s i here it's explained in my good practice papers you might want to take a look exactly what this is it's all just
[57:50] guesswork we don't really know any of this beforehand we're just guessing what we do know are is wi
[57:56] we know that that's just the strata weights we know that from the map and then we have this si parameter i'm
[58:02] not going to talk about you can read about it but the most important variable in this in this equation is this down here
[58:11] so in this particular case the area of force loss according to the map is six and a half percent
[58:17] i'm going to set my target standard error to one percent meaning a confidence interval about two percent of the total area so that's what
[58:26] i'm going to try to achieve if i do that i get a total sample size of 540.
[58:35] i noticed that it doesn't say that here but i i looked at these slides this morning and i realized i forgot to put
[58:41] that in there but trust me it's 540 um um pixels that's my total sample size here and then i'm going to have to allocate
[58:52] this to strata and there's a couple of different ways of doing this and you can do this more or less complicated
[58:59] the literature talks about these optimal allocation approaches you can implement the nyman allocator and stuff like this
[59:06] and steve statement has a good paper discussing that in the good practice document that i wrote up with with steve
[59:12] and others in 2014 we try to do this pretty simplistically so we're saying that we should try to
[59:18] aim for something close to proportional because that favors estimation of area and then we just bump up the small
[59:29] classes so we get at least 50 units in the strata so this is here we have here we have the allocations down here
[59:38] proportional allocation would look like this this 221 266 1435 2 and 1. now we can't live with 14 2 and 1 sample units that's not
[59:50] enough enough so what we do instead if we bump this up to 50 75 and 50 and then we split the
[59:57] difference proportionally between these two larger classes i'll end up then with 550 in total okay okay so this is our
[1:00:09] this is our allocation of the sample now now the other thing i see here is we have
[1:00:20] these two classes five and six right they are very very small point 23 and point 36 of the total area
[1:00:31] here so what i'm going to do is to lump these together i'm going to merge these two
[1:00:39] strata number 5 and 6 into one single fourth gain stratum right and i'm going to put 50 units in its
[1:00:47] total so the area here of the stratum is going to go up a little bit it's still
[1:00:51] just about a hundred thousand hectares which is a very very small area so then i just simply do that i select
[1:00:59] my stratified sample and i end up with a sample here this is what it looks like nothing
[1:01:10] it's not too much about it so this would be the equivalent of these 500 voters so instead of identifying 500
[1:01:20] voters voters i have now identified 500 pixels or 550 pixels of the country of cambodia right it's exactly the same thing
[1:01:30] this is my sample that is representing the population so i see here that people are asking a
[1:01:45] little bit about these papers i actually think that if you go to google scholar and just type in the name of those
[1:01:50] papers they will there will be pdf links i don't know who provided those links it wasn't me but somebody did
[1:02:00] anyway anyway so i have my sample now i'm gonna have to examine the sample and what i'm going to do as i said
[1:02:12] before is that i'm going to use time series of landsat data so so i go back here to the the biota tools
[1:02:19] this is the interface of qgis which is was built into the biota virtual machine and then we have developed something
[1:02:28] called called ts tools which is a plug-in to qgis that allows you to display time series of of
[1:02:36] whatever data they want but but typically landsat data so in this particular case i see here i
[1:02:42] have a time series of landsat observation you can't really see this is a red little pixel here don't worry
[1:02:47] about this parallelogram here just focus on the red pixel here so in this interface i click that
[1:02:55] and i can see a time series of surface reflectance here and this is band five i can if i go here
[1:03:02] i can switch the bands right selecting reference observations observations uh warren cohen at the u.s forest service and also at
[1:03:23] oregon state university has developed a tool called time sync which allows you to do something similar that is also very very
[1:03:32] helpful the good thing about time sync is that you can here you actually have to download the landsat data in time
[1:03:39] sync you don't have to do that it's actually reading it from from a google server but anyway this is this is
[1:03:50] um this is a very powerful tool in this case it's obvious that this is stable forest at least from 2001 to 2005.
[1:03:59] i see this pixel here and what is pretty cool here too is if i click click one of these points in the time series
[1:04:07] it will display the actual landsat image here here so you can really figure out what is going on you see here this is a very
[1:04:15] stable stable uh forest this is the shortwave infrared reflectance if there was a disturbance you would see this
[1:04:22] band 5 reflectance just spike up here and we're not seeing this right so this is stable forest so i put a stable force
[1:04:29] label on it and i move forward i do that for my 550 units i end up with
[1:04:36] an error matrix right these are the sample counts and as i said the sample counts are pretty fun to look at i can
[1:04:43] see here exactly how many that was correctly classified but it's not terribly helpful i want to express this in area proportions
[1:04:53] so i do that right right can't compute by sample count a sample stratified stratified need to estimate area proportion i
[1:05:01] should also mention that i just made these numbers up so so um um if you're cambodia if you're from
[1:05:10] cambodia and you're working for the government on reporting don't don't use this this use the methodology but don't use the
[1:05:17] don't use the numbers here because this i just i just made it up for the foreign example
[1:05:24] example um all right so i'm going to have to convert this to area proportions and it's very simple for each of the element
[1:05:35] in my arrow matrix i have my area proportion according to the map my strata weight i multiply by the first element and i
[1:05:46] divide by the total number of pixels in that stratum right so in this case 165 divided by 175 times 41 so i do that for
[1:05:55] each element here and i now have an error matrix expressed as area proportions and as i said before
[1:06:05] um um oh yeah i see uh cynthia is linking to uh warren's paper there that that's that's that's a very good tool and i
[1:06:18] think that is close if it's not operational already it should be very soon and i've used that tool for this
[1:06:23] this particular exercises and it's it's very good um um so i have my air i have my air matrix expressed as an
[1:06:32] area of proportion here stratified area estimator of area that sounds weird stratified estimator of area or just a stratified estimator
[1:06:42] according to cochrane cochrane doesn't talk about areas or geography or ipcc or anything actually didn't exist when he wrote that book in
[1:06:51] the 50s so it has nothing to do with area and as i said be be as i said those papers in rse that i
[1:07:01] wrote is really just trying to take the methods in cochrane apply it to a geography scenario um
[1:07:10] um but this is what the area this is what the stratified estimator would would look like in this particular case here
[1:07:16] and really what it is is this guy plus this guy plus this guy plus this guy plus that and you end up
[1:07:23] with the column total here this here is the stratified s estimate of the area of force law this
[1:07:32] here is your unbiased estimate of force loss and this is your unbiased estimate of force gain you have to multiply this
[1:07:41] by 18 million two hundred thousand hectares in order to express it in hectares hectares um and i can do that here
[1:07:50] and i can also calculate a standard error i know this equation here looks a bit messy but it's really not all the information
[1:07:58] that goes in it are are is in this error matrix so this gives me a standard error i
[1:08:05] multiply by 1.96 and i get a confidence interval interval so down here now i have my stratified estimators expressed in
[1:08:17] hectares i have my confidence interval express that hectare in hectares 2. so forest loss i see here i have an
[1:08:28] unbiased area estimate of 1 million 137 000 hectares plus minus 150 000 hectares and i can calculate for example
[1:08:43] margin of error where's the margin of error sampling error and things like that i don't think there is a universal
[1:08:49] definition of exactly that is but i like to think of margin of error as the confidence interval divided by
[1:08:57] the area estimate and if that is above 100 percent meaning that the confidence interval is larger than the actual area
[1:09:04] estimate meaning that it includes zero you can't really say much about it you can't really say that that area is
[1:09:12] significantly different from zero but in this case that's not the case so i have area estimates for each
[1:09:20] of my um my map classes here and i know i i kind of did this a little bit quickly here
[1:09:28] because i'm i'm running out of time here but really all it is is that i have my error matrix
[1:09:35] right this is a cross tabulation again i have my map classes in rows i have my reference observations as
[1:09:44] columns so i just simply cross tabulate that in biota we have tools that allows you to create this error matrix very
[1:09:50] very quickly i just simply calculate the area proportions okay very easy calculation i get my error matrix here as estimated
[1:10:04] error proportion and the area estimators just falls right out of it right right the area estimators are just the
[1:10:11] stratified area estimators are the column totals here the confidence interval uh is also very easy to calculate we have
[1:10:23] scripts that that do these calculations for you can very easily do it in the in libreoffice or or excel if you prefer
[1:10:31] to use that it's a rather simple calculation and all of this then it gets expressed as a proportion of area multiplied by
[1:10:41] the total map area to express this in hectares here right and i just i know we're going to do
[1:10:54] questions later but there is a question here can you can you explain what a confidence interval is and i have to go
[1:10:59] back to so so the mathematical definition of it according to my one of my favorite textbooks here i'll read
[1:11:06] that again it says that a 95 confidence interval interval contains the population parameter of interest within this case is um here
[1:11:17] it's not forest right contains contains the population parameter the area of deforestation for example with a probability of 0.95
[1:11:29] meaning that if we were to take many random samples like we just did we did one now right we took one random
[1:11:37] sample if we did that many many times and we calculated a confidence interval for each one of them
[1:11:44] about 95 of those intervals would contain the population parameter would contain the true area of force loss
[1:11:59] so it's a way to express the uncertainty in these area estimates here right so in this particular case the area
[1:12:09] estimate is 137 000 the confidence interval is actually very narrow it's plus minus 150 000 hectares if this was like 2 million
[1:12:20] hectares hectares then then you know it would be very hard to say anything about this estimate here we
[1:12:26] couldn't really separate this from zero we wouldn't be able to say that this is significantly different from zero right
[1:12:35] so this is you know the more narrow the confidence interval is the more precise this estimate is here
[1:12:44] right right so we can if you look here for example we have a very large confidence interval
[1:12:49] for the area of force gain so we have much much more uncertainty in the area of force gain than what we
[1:12:56] have in the area of force loss and the confidence interval again is just we calculate the variance we take
[1:13:09] the square root of the variance and we multiply by two that's pretty that's all there is to it
[1:13:22] and then finally we can then very easily calculate the accuracies here too and as you can see the accuracy of the forest
[1:13:29] gain class is considerably lower right as indicated by the larger uncertainty in that estimate too you see we have
[1:13:39] relatively high accuracy and again it might be that the forest laws in cambodia is according to this map is
[1:13:46] much less accurate than this it might be even more accurate i do not know as i said i have to emphasize i just
[1:13:55] made these numbers up just for the point of illustration but the important point here is that you
[1:14:03] can't calculate these accuracy measures based on the sample counts we have to use the area proportions in this particular case the
[1:14:13] user's accuracy we actually could but but never mind always base your accuracy calculations on the estimated area of proportions and not in
[1:14:24] the sample cancer so so then we have our final analysis so now we've done what we set out to do we have
[1:14:34] estimates here these estimates are unbiased unbiased they have an uncertainty that is quantified meaning that we have now
[1:14:43] fulfilled fulfilled these two um criteria set out by the ipcc this would be ipcc compliant reporting of activity
[1:14:58] data in cambodia for example so just to wrap up a few conclusions here here this is very important all maps have
[1:15:10] errors right even the map i used have errors map is great at making maps but he's not that
[1:15:16] great right all maps have errors even if matt hansen did it right all maps have errors doesn't matter if you use very
[1:15:25] fancy new time series tools stuff like that you can always rest assured that your map is not perfect
[1:15:33] therefore you can't not you can't just simply count the pixels in your map you can't count the area and map the
[1:15:42] deforestation and use that because it will deviate from the true area of deforestation or whatever it is it will be biased
[1:15:56] so what you're going to have to do instead is to construct an unbiased area estimator to remove that bias to remove
[1:16:05] the bias introduced by classification errors the maps become very important those because because this activity data we're
[1:16:15] trying to estimate is typically a very very small part of the population and it's much harder to estimate
[1:16:22] something that is a small part of the population the same thing if you want to estimate how many people in a certain
[1:16:29] country carry a very very rare disease right it's going to be much harder than estimating how many people that have
[1:16:37] diabetes for example right which is a much more common disease so the map serves a very important
[1:16:44] purpose here it will help us identify where the activities are occurring so yes the unbiased estimation is a
[1:16:55] necessity because the map have errors so the area you get from just counting pickles in the map
[1:17:05] will be biased because of classification error the unbiased estimators removes that bias that's why they're called unbiased
[1:17:21] and the other point to be made here is that this is fairly easy to do so so one question here is there a max error
[1:17:31] that i see ipcc can accept uh no the ipcc doesn't doesn't say anything about that and neither does the
[1:17:40] does the mgd and sometimes people ask me like what's the maximal maximum allowable accuracy measure accuracy you can you
[1:17:50] can you can live with and i can never i i will never be able to answer such a
[1:17:54] question question so first of all i think that it's it's very difficult to set any thresholds and
[1:18:02] at the end of the day it will be a discussion between the donor country and the country in charge of the greenhouse
[1:18:10] gas reporting right so for example colombia and germany or brazil and norway or or or whatever or
[1:18:19] however it works when they negotiate these things they are going to have to um um gonna they're gonna have to discuss
[1:18:26] these maximal reliable errors uh and and people like me and others we can show how you estimate the errors and
[1:18:34] you estimate the bias and all that but then how to make use of that information for assault-based payments that's
[1:18:40] something that um that that's something that um that's something that is between uh the country and and the donor country a
[1:18:54] few more questions there how many samples should we get in each class so if you look at the good practices
[1:18:59] document that i wrote in 2014 in rse um um we do outline some very simple recommendations for how to allocate
[1:19:10] a sample to strata and it will depend on your on your on your objective so if the objective is
[1:19:19] to estimate area then we would recommend something close to what i showed something close to proportional but then
[1:19:25] put at least 50 units in the in the smaller classes and there is another question here is
[1:19:35] good would it be possible to have step-by-step procedure on how to analyze the error matrix from calculating
[1:19:40] omission commission accurate standard errors unbiased area above yes we actually have that um and this is this is um
[1:19:55] let me very quickly pull up the github so a lot of the things that we do we
[1:20:10] we we put everything on github so here is the biota github site one of the grad students
[1:20:19] um um that that we work with here is christopher holden he puts a lot a lot of stuff on github
[1:20:28] um that is very helpful um eric bullock another grad student also put a lot of stuff there so i think
[1:20:42] if you look at the github the biota github repositories there are pdfs that that shows the step-by-step like really which
[1:20:50] buttons to push and stuff like that um um a few more questions here so that's the copper metric is no longer
[1:21:08] recommended for quality assessment or land change maps so i i wouldn't you know i've never really seen
[1:21:16] the benefit of using kappa a prayer you i mean at the end of the day it's like
[1:21:21] overall accuracy adjusted for chance or random agreement and and i i don't i don't see why that would be helpful
[1:21:36] there is a good paper by um gail pontius at clark university which i say i think it's called death to kappa
[1:21:46] um um and and he he talks in length about uh why one shouldn't use kappa and in the good and
[1:21:55] in the rse paper that i wrote that i talked about before we also have a some explanations of that i would
[1:22:01] recommend recommend for accuracy measures the three accuracy measures that i talked about but then of importance is
[1:22:08] is usually um um yeah i think somebody is uh linking to that now so gil pontius his
[1:22:20] last name is almost the same as my first name but we're not related okay okay great so thanks again pontius i think
[1:22:36] we're going to go ahead and stop there we've gone over a little a little bit of the time but i think we had some really
[1:22:41] great questions so we thank you again for joining us today and giving a really fantastic presentation so we will make
[1:22:50] note of some of these and if there's any we didn't get to that are relevant we're going to try to
[1:22:55] create a document that we will post on the website at a later date that has some of these questions and answers to
[1:23:01] them so thanks again everyone for joining us and we hope to see you here online for our
[1:23:08] final webinar next week thank you
