# Estimating Biomass Change with GEDI and the OBIWAN API, Part 2/2

`https://www.youtube.com/watch?v=3jQoJYAlwvs` · id 153 · 1:00:51 · module 74 — Estimating Biomass and Change with GEDI and the OBIWAN API

[00:01] Welcome to this ARSET training series estimating biomass and change with Jedi and the OB1 API. Today is the second and last session of
[00:11] this webinar. The focus of today's session is estimating biomass change with Jedi and the OB1 API. My name is Erica Podest and I'm a
[00:20] scientist at NASA's Jet Propulsion Laboratory in Pasadena, California. And I'm also an instructor with the ARSET program.
[00:29] I will be hosting this training today. There are two parts to this training. The first session was last week, last
[00:40] Thursday, on estimating biomass using Jedi. Jedi. And today we will cover estimating biomass change. So, there'll be a theoretical component and then
[00:52] there'll be a demo using the OB1 API. There is a homework associated with this training. It's it can be accessed
[01:01] through the training web page and the due date is June 18th. A certificate of completion will be provided to those
[01:08] participants who attend both live sessions and complete the homework assignment by the due date. So, let's get started with today's
[01:18] session. We have one guest instructor. He is Dr. Sean Healey, who also presented in session one. Dr. Healey is a research
[01:29] ecologist with the United States Forest Service the and Department of Agriculture. The learning objectives for today's session. By the end of the session,
[01:41] participants will be able to identify the key concepts in carbon monitoring, including system requirements, decision-making needs, and the concept
[01:50] of additionality. Participants will be able to recognize how OB1 estimates biomass change, it's its use of Jedi, Landsat time series,
[02:02] and underlying data infrastructure. Participants will be able to evaluate the uncertainty and validation of the data using Forest Service inventory data
[02:12] to assess the accuracy and precision of OB1 change estimates. Access the open-source OB1 API to generate estimates of biomass change in
[02:22] areas of interest. And finally, apply OB1 tools and APIs to visualize biomass change and compare carbon gains against different climate
[02:33] scenarios. How to ask questions? Please write your questions in the Q&A window, which you can find on the bottom right under the
[02:42] three points. Uh there will be a sub-menu that says Q&A. Q&A. We will address your questions and at
[02:49] the end of this session. And feel free to enter your questions during the presentation. We will try to answer all
[02:55] of the questions during the Q&A session. However, any remaining questions will be answered in a Q&A document that we will
[03:03] be assembling, and we will be posting that document on the training website in approximately a week. Now, I would like to welcome our guest
[03:15] instructor, Dr. Sean Healey, who also presented session one. >> Hello, and welcome to the second part of
[03:28] this training about biomass estimation with uh OB1 and Jedi. I'm Sean Healey. I'm speaking for Dr. Zhichang Yang. Uh
[03:38] we both work for the USDA Forest Services uh Forest Inventory and Analysis Program, FIA. That's the nation's uh national forest inventory
[03:48] with plots all over the country. >> [clears throat] >> So, uh in the last session we talked
[03:54] about the Jedi mission, its data products, products, uh the way that it estimates biomass for one point in time for 1-km grid
[04:05] cells, cells, and also how uh that that logic and the the sampling theory uh can be used to
[04:14] estimate estimate uh changes in biomass for any area that you care about that's over a few hundred
[04:20] hectares hectares uh uh between uh different years uh using Landsat imagery and bootstrapping. So, we will review some of that. We will
[04:32] also be talking about practical carbon assessment needs. Uh by the end, I will be showing you OBWANS API. That is how
[04:41] you and everyone else with a with an internet connection can access uh the tools that are built into OBWAN.
[04:50] So, you know, what kind of needs does uh OBWAN address? Uh it's it's really uh climate change
[04:58] mitigation in the forest sector. The proposition for uh pretty much any kind of mechanism to recognize uh climate
[05:07] change mitigation across agriculture or the energy sector and and forests is to identify uh management activity or
[05:18] practice that reduces the impacts of climate change sustainably. This slide sort of shows the shape of of that
[05:26] proposition in the forest sector. So, I'll start at the bottom. A fundamental question is how much carbon in the way
[05:33] in the form of biomass is your forest storing now? And you know, there are millions of biomass maps out there, and
[05:41] they all can give you an answer. Uh we talked about last time if those maps were not made in a way that allows you
[05:49] to combine the uncertainties of all those pixels that make up your your area of interest, they're not as much useful
[05:57] in the context of practical carbon accounting. So, you know, an uncertainty framework for these estimates is critical. Last time we also talked about
[06:06] how through bootstrapping we can answer the middle question. How much carbon is your forest adding? So, basically
[06:13] between last year and this year or between 2020 and now, what is the change in biomass in the place that you that
[06:20] you manage? And then sort of the top level question which echoes the main the main question in all of these frameworks
[06:27] is how does your management contribute to carbon storage trends? So, that really implies a question about additionality. So, you might be storing
[06:36] extra carbon, but maybe it was was going to store extra carbon anyway. So, we have to address additionality which we
[06:44] will in a second. I just want to point out this is sort of by way of context
[06:49] for for everything I'm going to be talking about regarding OB 1. The the sort of most common way that people practically
[06:58] do this, at least with remote sensing, obviously obviously a country like the United States that has a inventory that's been working for
[07:05] many years now, we use the inventory to answer these questions, but in many places that don't have that, the
[07:12] carbon standards use what what people refer to as the spreadsheet method. Basically, there is a running total of which is called
[07:22] activity data of how much forest is being added or subtracted through management, and there's an emission factor. How much what's the mean biomass
[07:33] stored in the average hectare of forest. Most existing carbon standards are built around that. If you use it, you aware
[07:41] that there are some limitations in terms of statistical difficulty of saying declaring something significantly. There are capability capacity issues in some
[07:52] places. You really have to be able to measure thing measure the area forest in a consistent way through time.
[07:59] So, maybe Obi-Wan is the alternative to that paradigm. Okay, so back to Obi-Wan. This top-level question, how does your management
[08:08] contribute to carbon storage trends? That gets to the question of additionality. So, what would happen if you weren't doing the thing that you're
[08:16] doing? My example is in 1994 the national forests in the Pacific Northwest implemented a new forest plan.
[08:25] According to Obi-Wan before that forest plan was implemented there the region was losing a small amount of carbon.
[08:33] It's very productive region in the 1980s and prior to the 1994 implementation of the plan, there was a
[08:39] lot of harvest. After 1994, there was a surprisingly immediate bounce. Changes were all positive. So, one way to
[08:48] to look at additionality is over time. What happened what's happening now compared to what happened before you you
[08:55] did you know whatever it is you are committing to do. The second way to address additionality is to compare the changes that you're
[09:03] seeing now in the place that you care about. Let's say it's a national park. With areas outside of the national park.
[09:11] So, that's a counterfactual sort of baseline. baseline. There are complications that should be considered. Generally younger forests
[09:20] store store carbon faster than older forests. So, it's really like there are a lot of requirements I I think for doing the
[09:27] counterfactual additionality assessment well. well. And I'm not going to talk as much about that. Although you will see at the end
[09:35] that Obi-Wan does allow you to do this kind of additionality assessment. Pressing into the guts of OBW one,
[09:45] please recall from the first session that it's inferences are really based upon bootstrapped time series of biomass
[09:55] maps. So, the example I showed before, let's say that you care about the change between 1990 and 2020 in a particular
[10:03] place. place. There are several bootstrapped time series and all of these bootstraps, recall, are realization of the
[10:12] uncertainties in both both levels of model, both the the Jedi level of model and the Landsat level of model. The
[10:19] first bootstrap suggests that the area we care about lost 15 tons per hectare, the second bootstrap suggests we lost
[10:27] 13, the third suggests we lost 20. So, across a lot of different bootstraps, that's where our inference comes from.
[10:35] So, that's how Jedi works and we don't just have to look at changes. What what I just talked about is the second
[10:43] bullet, the difference between for the same place between two points in time, but we can also look for a single point
[10:50] in time. Let's say we just care about the biomass in 2020. Well, the first the first bootstrap says 80, the second says
[10:57] 84, etc. So, we we could get a distribution around a point a single point in time estimate. We've just
[11:04] talked about the differences between two points in time. We can look at two two forms of additionality that I just
[11:11] mentioned. The first is change in the rate of gain between two periods. So, we could ask 1990 to 2000, what's what's
[11:20] the rate of change within the same bootstrap? And and compare that to what that bootstrap says is the rate of
[11:27] change between 2010 and 2020 and get a difference between those rates, and that's what we look at across
[11:35] bootstraps. So, we get a distribution of that change of change, if you will, that that sort of additionality over time.
[11:42] And we get and the distribution gives us uh an uncertainty. We can also compare two places uh in this way uh using the
[11:51] using the different bootstrap time series. So, OB1 really does uh allow us to look at additionality questions um
[11:59] and and uh really gives us a fairly comprehensive way to look at monitoring carbon change uh within areas that you
[12:07] care about. So, this issue uh calibration is is really important to OB1. Uh optical imagery like Landsat and
[12:17] Sentinel-2 uh do not see through the canopy. So, basically, as forests grow for the first part of their lives, you
[12:24] know, that the pixels get greener as more forest grows. And and that, you know, there is pretty good signal about
[12:30] how much biomass there is. But, once the canopy closes, it doesn't get significantly greener as more and more
[12:38] biomass or volume or basal area is added as the forest grows. So, that, you know, people call this a saturation a signal
[12:46] saturation problem. And it it manifests itself uh when we're make we're using uh optical imagery to make predictions,
[12:56] we generally under-predict the very high biomass, and we over-predict the low biomass. And when we think about changes
[13:04] from a high condition to a low condition, we are almost always under-predicting those changes because the high is under, you know, it it
[13:12] everything gets squished towards the middle, and you go from high to low, well, that that change is also going to
[13:17] be low. So, calibration is a concept where if you have independent data in the places where you have predictions, you can,
[13:27] across a a large a sample of those, come up with a calibration function that that simply is a correction, and it is uh a
[13:36] correction that it that is applied to minimize bias. It doesn't make your predictions better, but it removes the
[13:43] biases, so you're no longer systematically under predicting the high biomass and over predicting low biomass. But again, it's it's reducing bias, it's
[13:53] not reducing error. Uh but that's that's really critical for this for this kind of application. This last line here is the only time I'm
[14:02] going to mention this. Calibration can also be used to convert OBWANS estimates of biomass and biomass change to other
[14:12] variables. For instance, uh biomass is quite related to forest volume and also uh basal area. So, if from the National
[14:21] Forest Inventory, for instance, you had a bunch of independent you could come up with a calibration from biomass to those other variables
[14:31] that you may care about in in other uh settings. So, um calibration is really important, and uh I'm just going to talk
[14:38] a little bit about what calibration data are available where. So, GEDI data is available globally, as we have talked about, at least between
[14:48] the latitudes of 51° north and south. So, the first option, once we have made our biomass map with Landsat imagery, we
[14:57] can use GEDI data, the the biomass predicted for GEDI points that were not used in calibrating the Landsat map, we
[15:05] can use those to calibrate our predictions and come up with that that correction. And in general, that
[15:12] correction, when we apply it, makes the high predictions higher and the low predictions lower. Uh and how much data is available for
[15:18] this? Well, OBWAN uses about half currently in 2026, it uses about half of the available data, which is several
[15:27] thousand, it's it's at least 2,000 Jedi shots per 10 km square. So, there's a lot of data available for this
[15:35] everywhere. everywhere. The second the second option is not available globally. It's in places where you have repeated inventory plots that
[15:45] have coordinates that you trust. And for I we work for the National Forest Inventory and you know, the United States is where we
[15:54] are applying this. So, so basically, we have several several thousand plots in every state. Sometimes up to 10,000 or
[16:05] or even a little more in some big states where we have measured biomass in multiple points in time. And we can
[16:12] compare those measured changes to predicted changes from OB1. So, instead of calibrating at the level of an
[16:20] individual point in time prediction, we're calibrating the estimates of change. And in general, when we apply those calibration functions, those
[16:28] really simple calibration functions, we end up making the losses bigger and the gains bigger. Okay, so now I'm going to
[16:38] move into a couple of validation activities that we have performed, one in Nepal and one in the United States.
[16:47] Through the the great support of NASA's severe program, we worked with Nepal's Forest Research and Training Center, which they
[16:56] which is the entity that runs the National Forest Inventory for Nepal, and they very kindly provided inventory data
[17:03] for three provinces in that country. And basically, what we're looking at here is on the left is the OB1 estimate
[17:13] of biomass change for a five-year period. That's an orange compared to basically the spreadsheet method applied to Nepal's inventory
[17:24] data. data. This is not exactly aligned with what what Nepal reported to UNFCCC, but it is very close. It's as close as we could
[17:34] make it with their with their data. So, as you can see in across the country, you know, there's pretty good
[17:40] correspondence with the amount of biomass that Obi-Wan predicts for this period, the Obi-Wan estimate for for the
[17:48] whole country and for the three provinces provinces uh uh that we had data for tends to be a
[17:55] little bit more dynamic and I believe that is because Obi-Wan represents changing biomass in existing forests that are not being cut down. So, uh many
[18:08] um spreadsheet methods, uh which is the alternative, uh treat the amount of biomass in protected forests as static
[18:16] and uh will result in sort of less dynamic estimates of change. Obi-Wan accounts for that that change or at
[18:24] least predicts uh a change, uh usually growth, uh in forests that don't get cut down. So, I think that that's probably
[18:32] why why uh Obi-Wan is showing a little bit more gain over this period, but it is it is
[18:37] pretty consistent both at the national and the province levels. So, what can you do with that that kind
[18:43] of information? These are This is Nepal. There are 77 districts in Nepal. One thing that we could think about doing
[18:53] with it is uh if Nepal were awarded REDD funding, which it was, and they were engaged in deciding how
[19:01] that REDD funding was going to be split among its districts, one could use Obi-Wan to sort of
[19:07] systematically look at, well, which district is uh contributing which amount of of the national level gain that the country is being
[19:17] compensated for. In no way would we presume to tell tell anybody how they should, you know, distribute their money, but this is sort
[19:24] of a systematic objective uh way to look at a distribution of gains across the country by by different
[19:32] jurisdictions. So, it's it it could be just used as, you know, decision support tool in that context.
[19:41] Okay. So, now I'm I'm jumping into uh validation activity that we've done here with uh FIA data. Again, FIA stands for
[19:50] Forest Inventory and Analysis. That's the part of the Forest Service that Yang and I work for. So, uh we're looking at
[19:56] results for two different states. And on the x-axis, it's FIA observed bioma- aboveground biomass density change. So,
[20:06] every dot is a group of plots. The plots pretty much represent about a hectare. Uh they subsample that hectare, but they
[20:15] they're all about a hectare. So, what we're basically doing is grouping together bunches of 500 FIA plots.
[20:24] plots. And And uh ordinating them on, you know, the x-axis here like how much they're gaining or losing between two periods.
[20:32] And on the y-axis, comparing what OBWINS answer for that five that group of 500 plots is. So, for instance, the blue
[20:42] line is what OBWINS with with no calibration, that's what OBWINS gives us. And I I mentioned that signal
[20:49] saturation, and really what we see is that OBWINS systematically underestimates the losses, and it underestimates the gains.
[20:59] So, that you know, that's a main reason why we use uh calibration. When we use the kind of calibration that that
[21:05] available in Nepal and everywhere outside the US using independent Jedi shots shots for at least in Alabama and in Maine, we
[21:15] see that that really pushes the estimates of loss well below the dotted line, which is the one-to-one line. So,
[21:22] we're really at least in Alabama for these different groups of plots pretty severely severely overestimating losses when we use that
[21:32] global calibration. However, once we get to like the gain territory in Alabama anyway, that calibration really seems to work
[21:41] pretty well. It brings it up close to the one-to-one line. Calibrating with FIA repeat measurement data actually it does
[21:50] pretty well. I mean, we're seeing across all of these groups of FIA plots that the performance is is not bad.
[21:59] This interval is the is basically the precision that's the standard error that OB 1 gives us for
[22:07] these changes. There is bias that is not accounted for in this interval. So, when you when you get something out of when
[22:14] you get an interval out of OB 1, it's the precision, it's not the bias. So, this kind of validation is is crucial.
[22:21] In Maine, we see something pretty similar except above a gain of 20. So, at places that are are gaining a lot of
[22:28] biomass per year, we're not differentiating those cases very well. I would point out that at least with the
[22:36] FIA calibration actually the global calibration as well, you know, the one-to-one line is is within the confidence interval that you
[22:44] would get out of OB 1. Okay. So, moving on from estimation of change to estimation of additionality
[22:53] over time, that is we're asking how much faster or slower is this place gaining carbon biomass than it was in a
[23:04] previous period. So, you know, the same same two states we're asking so we have multiple measurements, several
[23:13] measurements in many cases for FIA. So, we we know we're able to to measure this sort of acceleration or deceleration of
[23:21] gain at individual plots. And so, just looking at the corresponding estimates of of gain from Obi-Wan. On both it. So, on the on the right
[23:32] side, side, those are those are populations that are gaining biomass faster than they were before. And on the left, those are
[23:39] populations that were that are losing uh biomass faster than they were before. And the FIA calibration, the red series,
[23:48] does really pretty well across the whole the whole uh range, whereas uh well, actually, the global calibration does better with this
[23:56] additionality challenge than than it did with the individual two points in time question. So, that is sort of the
[24:04] validation that we have pursued in Nepal and and uh the United States. I'm going to jump into
[24:13] API, application programming interface. I should have uh defined that, but uh basically, it is a set of functions that
[24:22] we provide that you can use to access the time the bootstrapped time series that we're storing on Google Earth
[24:31] Engine. Uh again, Google has has donated uh uh substantial amount of of storage for us to store that. And what the Obi-Wan API
[24:41] does is it just gives you a bunch of functions that you might use to do very common things
[24:47] uh involved with reporting and verifying uh carbon changes in in the place that you care about. So, the things that you
[24:54] might specify with the with the Obi-Wan API is what years that you care about, how you want to visualize these changes,
[25:03] what kind of authentication you want to build into accessing whatever it is you're putting online. You can define a a baseline,
[25:11] additionality baseline, whether it be a different point in time or a different area, maybe a surrounding area or a
[25:16] buffer area. And also it allows you to, you know, store whatever reports in whatever format you want. So really the
[25:24] API is maximizing your flexibility. So I guess the the question is why are we doing this instead of making a map? You
[25:34] know, a map is easy to distribute, but the and this is definitely a sort of new paradigm for accessing uh space-based
[25:43] biomass data. But I think there are good reasons for what we're doing. Um the first is we can't predict the years
[25:51] and the places that you care about. Um so allowing you to define those things uh it is obviously uh targets
[26:00] uh the the stuff to to exactly what you need. need. Also, across market and treaty-based commitment mechanisms, some users need
[26:09] to show uh things very transparently, perhaps to donors or to other countries, whereas others, I'm thinking of uh private
[26:18] industry in this country for instance that may be participating in carbon offset markets. Much of this is
[26:23] considered proprietary and they need to control access. So, uh you know, using the API to develop your own
[26:31] application really gives you the power to build in, you know, whatever you need. need. Uh it's easy to standardize across
[26:40] affiliated clients, maybe all participate participants in a particular carbon market or perhaps different jurisdictions supported by the same
[26:51] donors. So one could picture uh you know, developer hired by a particular donor developing dashboards for lots of
[27:00] different clients in a way that is consistent. consistent. Also, we're we're pre-computing these bootstraps time series because
[27:10] if if when you made your query and you had to wait for the all the computing involved with bootstrapping to happen,
[27:17] it would you know, it would take hours. It may take hours. So, we've pre-computed these things, store them on
[27:23] Google. Google. And that makes it much faster. And and lastly, like we we do it this way
[27:28] because because you know, you may not be the only person who cares about you know, your country.
[27:34] So, we're we're reducing a lot of redundant computing. So, this is really um sort of an overview of the structure. We
[27:42] do the bootstrapping, we we store it thanks to Google on Google Cloud. We're providing the API which we will get a
[27:51] look at in a moment in our hands-on activity. activity. And then you and your the developers that you pay probably
[28:00] develop your own dashboards, accounting systems, reporting systems, building in whatever considerations are important to you. So, the key is this API and it sounds harder
[28:13] than it is. API is really pretty well documented. It's really very simple. It's it's just a bunch of commands
[28:19] uh with you know, syntax that that define that defines important variables for these commands that queries the the
[28:28] stored asset on on on Google Cloud and gives you what you need. And you'll see those you'll see some of
[28:35] the calls to the API in the notebook we are about to look at. These resources are some background about the theory of our
[28:45] estimation methods, about some some context for carbon markets. Okay, so before we dive into the hands-on activity, I just want to tell you a
[28:57] little bit about what we're doing. We're going to be using a Colab notebook, that's a Google Colab
[29:03] notebook that calls an asset that we made for this training over Alabama state in the United States. It's it's 10
[29:11] bootstraps deep, which is not deep. And operationally, we would probably want 100. But it will give you the idea of
[29:20] what's happening here. It will allow you to experiment with different options and different visualizations. visualizations. And and it gives you actual syntax, like
[29:29] how how the API is used. So you could give this to your developer friend and your developer friend could really
[29:37] practically build a dashboard pretty easily for you for the area that you care about. So what you're seeing is the link to the
[29:47] to the Colab notebook. Before you start playing around, I will give you some further directions in just a
[29:54] moment. But if you could click on this link, Google may ask you if you've never never used a Colab notebook if if you
[30:02] want it to compile the notebook for you. Please say yes. And then stand by for more instructions.
[30:16] Okay, so if you clicked on that link, what you probably see is this. I want to point to your direct your
[30:24] attention to this cannot save changes. What I'm going to ask you to do is go to file
[30:31] and save a copy to drive. That way what you're working on, first of all, you will be able to save it and
[30:40] a lot of other people on the same training won't be, you know, uh, disturbing what you're doing. Uh, that
[30:46] will be unsatisfactory for everyone. So, once you save a copy to drive, what you will, um, see is copy of this
[30:59] This is a Python notebook, uh, using, uh, Google's Colab. Um, you and and this is the extension
[31:05] for that kind of file. So, so really what you're going to be seeing is is a lot of Python code that's
[31:12] calling the API, um, and visualizing a lot of the estimates that the API enables. So, uh, you know, the the first thing I
[31:23] guess I would point to is there is some, you know, annotation here, but but basically, if all you want to do is see what it does,
[31:36] you can just go down through, um, um, and press these these triangles. And basically, that runs the code that is hidden you but you
[31:45] can see the code here. This first This first box is just setting up some variables, uh, that are
[31:53] calling the OB1 endpoint, the API. Okay, so a lot of this is really sort of generic, but it will help, I mean, I I I
[32:03] really feel like, uh, with this code, you're probably 50% of the way towards making, you know, your own dashboard for
[32:09] the area that you care about. So, all of this is sort of generic and, uh, right now this is pointing to
[32:18] this Alabama, uh, study area that we made for this training, but, uh, soon enough we will have at least, uh,
[32:27] an asset, uh, we will have bootstraps for the entire United States. And, And, uh, when you do that,
[32:36] uh, when we do that, you you will only have to change this, you know, this address. So, once we have national asset and an
[32:48] international global asset for all of the bootstraps available, this code will really This is one line of code to change the the uh
[32:58] actual address of of that asset. All of the rest of this code, this Python code uh is will be applicable.
[33:06] So, uh and and right now, you know, this the Python code is calling this vis- this viewer. Um
[33:15] and you know, we can turn this the asset off and on. Uh you can do whatever you want. I mean,
[33:22] you can visualize it with whatever imagery or perhaps uh company records behind it. Um Um one thing I would
[33:31] uh point out, right now what we're displaying is the uh mean of the biomass predictions across 10 bootstraps. I
[33:40] mentioned that 10 bootstraps is not a big number. Um and here's a 10-km tile where uh the
[33:47] >> [snorts] >> the the bootstraps uh obviously uh simulated errors across all 10 that happened to give us very high biomass
[33:56] values. The The color ramp here is is biomass. So, there's nothing squarish uh under underneath there. You
[34:04] can turn that on and off up in the upper right-hand corner. But basically, you know, what we're
[34:10] seeing seeing is one way to visualize uh the asset. Okay, so again, uh this could be any
[34:20] visualization you want. Uh but in this case, what we're showing here is uh you pick the area that you care
[34:30] about. about. Again, this is in the middle of Alabama. Alabama. I sort of arbitrarily drew a polygon.
[34:43] In your own In your own development, you would probably import a KML or a shapefile for the
[34:49] place that you that you care about. Okay, so we selected an area of interest. interest. And And now I'm going to Let's say we need we
[35:02] care about 2019. So we for that area of interest which is 37,000 hectares, the estimate is 136 tons per hectare.
[35:16] That's the That's the units here for biomass. That's without calibration. Let's try with calibration. See if that
[35:25] changes it from 136. It did. It You know, it's a fairly high value and it made it higher in general.
[35:36] So what we see the standard deviation of for that estimate Again, that's the precision. That's not necessarily the
[35:42] overall accuracy. Um Um Okay, so you can you can toggle this on and off to see the effects of calibration.
[35:55] Okay, so here's here's another thing that you might want to do. For For the area that you care about let's look at
[36:04] the trajectory. Of of this area. And basically what you will see is I mean, I just drew that fairly
[36:15] arbitrarily, but we we saw a gain up until around 2013. And then a loss. It is a fairly actively
[36:26] look like a fairly actively managed uh uh uh area of again 37,000 hectares. Okay. So, and I I find that looking at uh the
[36:40] estimates for different points in time really sort of gives a lot of insight into the overall trends for for the area
[36:46] that you care about. So, So, uh uh you know, estimating a change with a standard standard error,
[36:55] let's just um press this this button here for I think it's from the beginning of the time series 2019 or 1999 to 2023.
[37:07] The estimate The estimated change is a gain of 10. We only if we only care about the end
[37:13] points, the you know, the gain was about 10. If we had defined that as uh 1999 to 2013, it would have been a
[37:21] big bigger gain. And from 2013 to 2023, it would have been obviously a loss. Um so, that's why looking at it uh at
[37:31] the mean estimates across time first is is pretty is pretty valuable. I mentioned that there's this uh
[37:39] counterfactual additionality where you where you apply where you look at the changes in your area, let's say it's a
[37:46] park, compared to maybe a buffer zone that is not managed under your management plan uh and and is not
[37:54] um you know, the the area that you're committing uh uh removals from the atmosphere to. So, we're going to skip that. Uh I
[38:05] uh uh it works, but you have to be able to trust uh your comparisons if you want to
[38:12] make it uh an inference of like this the differences that you're you're uh seeing are actually a good indication of the
[38:21] impact of your uh management. So, we're instead going to skip to uh looking at changes changes in the change. Changes in biomass
[38:31] change, changes in the in the uh rate of uh biomass accumulation. So, we we press that um and and we're
[38:42] uh looking at the difference between let's say that this is our baseline 1999 to 2005 and the place and the the target is 2015
[38:52] to 2021. So, uh you will see here in the outputs that these are these are indeed the play that
[39:07] the uh times that we care about. You see the the area of this place. This is the change in the annual rate of
[39:17] gain. So, we're uh compared to the baseline time period, we are gaining uh uh two tons per hectare per year less in
[39:28] the target uh period, which is 2015 to 2021. 2021. Okay, and when we have across bootstraps, this is the the uh
[39:38] uncertainty that that uh the answer across bootstraps implies. implies. So, uh I guess I would say that, you
[39:46] know, this is a demons this Python notebook is a demonstration, but it's also uh you know, a lot of a
[39:54] lot of Python code anyway that uh gives you good examples about how you could make your own uh application dashboard
[40:03] or at least it gives a a you know, a lot of uh examples of calling the API for things
[40:10] that you that you care about. So, I think that uh after a brief message, uh I will be on for answering
[40:18] your questions. I look forward to them. Um have fun with the notebook. Thanks. >> Thank you very much, Dr. Healey, for
[40:32] that great presentation and demonstration. Now, let's do a quick summary of the most important uh points discussed during this presentation.
[40:43] Today, we learned that OB 1 can address climate change mitigation across different sectors by identifying management practice that reduce impacts.
[40:52] Uh it's important to understand that uncertainty for carbon estimates is critical and that concept of additionality is how management
[41:01] practices contribute to carbon storage trends. So, what would happen if you were not doing what you were doing?
[41:09] Uh OB 1 uses hierarchical bootstrapping to get a distribution of predicted changes. And optical imagery from sensors like
[41:18] Landsat do not see through the canopy and are likely to under predict high biomass while over predicting low
[41:25] biomass for a single point in time, as well as under predict changes between high and low biomass conditions.
[41:33] And finally, calibration is a simple correction based on independent data and applied to the predictions to minimize
[41:41] bias. >> There is one homework associated with this training series, and the homework can be accessed through the training
[41:52] website as of today. The due date is June 18th, and there will be a certificate of completion to
[42:00] uh participants who attend both live webinars webinars and complete the homework by the deadline. deadline. Participants will receive a certificate
[42:09] via email approximately 2 months after completion of the course. If you have any questions about the material that has been presented, feel
[42:19] free to reach out to Dr. Sean Healey through the contact information in this slide. We've reached the end of today's session
[42:30] and this training series. I'd like to thank Dr. Sean Healey for his excellent presentations. I'd like to thank all of
[42:38] the participants for their interest in this topic and all of the great questions that have been coming in. We
[42:45] will now start our Q&A session. >> Thank you, Erica, for the summary and wrap-up. My name is Savannah Cooley and
[42:59] I'm an RSET trainer with the Ecological Conservation Program and I will be facilitating our Q&A session today.
[43:11] With that, we can go to the question and answers document where we have been populating all of the excellent
[43:19] questions that have been coming in. And let's go ahead and dive into question one. Which asks, "JEDI and OBIEE
[43:33] seem very useful for estimating biomass change, but high-stakes carbon decisions require strong evidence of additionality, uncertainty control, and
[43:42] validation. validation. In your view, what is the current practical boundary between using OBIEE for scientific monitoring and using it
[43:51] for operational carbon credit or policy verification?" So, with that, I'll pass to you, Sean. You've started your answer
[43:59] here already and I'll let you elaborate. elaborate. >> Thanks, Savannah. Yeah, this is really sort of a
[44:06] fundamental question, isn't it? Um, you know, when um um authorities issue carbon credits and when com- countries use particular methods for
[44:19] accounting for uh the the additionality of their forests, their forest management, you know, there there's always a decision,
[44:27] uh you know, what is uh reliable enough, what is uh what meets the standard of of what can be
[44:34] used, what's you know, what's the best available. I I think in most many cases uh Obi-Wan represents the best available
[44:41] remotely sensed answer. Uh I it's not as good as uh having a longitudinal field survey, but that's not available in many
[44:50] places. So, I mean, we see a lot of people, people, uh you know, countries especially, projects using this emission factor
[44:59] activity data uh paradigm that, you know, that uh relies on a statistical framework just like Obi-Wan does. Uh I believe that Obi-Wan um
[45:12] uh accounts for uh more factors than that. It accounts for changing uh changing emission factors uh within the
[45:21] same class through time. Um Um the short answer is uh you know, the what whether Obi-Wan or, you know, the activity data emission
[45:32] factor paradigm or anything else is is acceptable is up to uh you know, particular creditors. My personal opinion about Obi-Wan, as uh
[45:43] some of the some of the validation activity sort of suggested, I think it's good outside of the United States. The
[45:50] calibration with independent Jedi data is is very useful and it uh removes uh a lot of the biases that we see,
[45:59] but uh it it's not it's it's also introduces biases um and in some cases we're over predicting losses
[46:07] uh which you know that's that's the primary problem. So, um I'm not sure that it is appropriate for
[46:16] um um you know uh uh funding uh critical decisions and monitoring um outside of the United States yet,
[46:27] although I do think that it probably represents the best remotely sensed answer anybody's going to get give you.
[46:34] um um So, I think it's appropriate for science, but maybe not for for uh the offset markets. In the United States
[46:41] where we have systematic uh collection and avail- availability of change calibration data, I think our validation activity
[46:51] uh suggested that yeah, I think it it is approaching that level where uh you you might base uh funding decisions on that,
[47:00] crediting decisions. You know, and again, it's it's not as good as having field plots in your forest uh you know,
[47:07] going back in time, but in a lot of cases that that kind of field effort uh is is just not feasible given the
[47:16] amounts of money that are involved. So, uh that I I think that's a a fundamental uh question, which is why I spent a lot
[47:23] of time on it and uh I've thought about it a lot, too. And you know, that the uh
[47:28] statistical framework that that we talked about is is really uh you know, everything that we're doing is geared
[47:34] towards making this uh more acceptable to countries when they uh uh when they choose their method for
[47:42] reporting and for uh carbon standards uh when they choose their methods for for monitoring um the credits that they issue. So,
[47:53] that's that's a long answer to a good question, I think. >> Thank you so much, Sean, for the
[47:58] thoroughness of of your answer and and and really going into some of the nuances and the key considerations.
[48:05] Um and I think yeah, what you emphasized around around the the importance of the knowing the uncertainties and ultimately
[48:17] that they will be the creditors that be able to decide that and existing in question. You know, and and
[48:26] also the the high costs of field-based methods of of doing these kinds of analyses that um OB1 still despite
[48:35] having having uncertainties also represents the best information that we know of available um and from a remote remotely sensed
[48:42] standpoint. So, thank you so much for that thorough answer and we will move to question two. Can the integration of Jedi-derived
[48:51] biomass structure, Landsat/Sentinel land cover history, and SIF, which is solar-induced fluorescence-based photosynthetic activity, improve estimates of watershed-scale carbon
[49:03] capture and biomass change dynamics under climate and disturbance pressures? >> Well, yeah, uh that's a good question. I I um
[49:15] in general, I'm the answer that I wrote uh addresses um you know, what imagery we use in OB1. Um
[49:23] as I read the question more thoroughly, I I'm not the question that's being asked. Uh but I'll I'll just to
[49:29] elaborate on that question, um yeah, the better the the imagery is correlated with biomass, the better our
[49:37] answers are going to be. We use Landsat because it's available systematically back backwards through time. Um in terms of understanding
[49:47] uh uh climate pressures, climate processes, and stuff like that, OB1 is not a it's not a uh
[49:54] process model, right? We're not uh we are only monitoring uh uh past trends. Uh we're we're not trying to extract uh
[50:03] processes that we might uh use to extrapolate under different climates and and things like that. Uh in in terms of
[50:11] disturbance pressures, yes, certainly we're we're uh I mean, in a retrospective way, we're we're uh allowing the quan-
[50:19] quantification of uh biomass change in a particular area that may be subject to or or protected from uh develop-
[50:27] disturbance processes uh related to development. And it it uh facilitates comparison of of the additionality there. So,
[50:37] um um yeah, I I think that's um yes, yes for disturbance processes, no for for climate processes.
[50:45] >> Thank you. Question three asks, can the OB1 API be used for urban prediction? >> Uh the the short answer is I I wouldn't.
[50:58] Um Um buildings often fooled fooled Jedi waveforms. They can look like trees. Um and so, I uh I frankly just don't
[51:08] trust trust uh our predictions over urban areas just because uh that that sort of fundamental error will propagate its way um and we
[51:18] haven't tested it. Uh but I I don't think it's I pro- it's probably not the most appropriate thing
[51:23] to to track urban forests in particular. >> Right. Even if even if an application, I imagine, were to have a a very um
[51:32] accurate um map of building footprints that they could mask out, there's still the consideration of the Jedi
[51:39] geolocation error, right? Which would which would um >> That's right. Yeah. Yeah, I and and just that's that's up to
[51:48] about 10 m. One sigma is 10 m, so you know, a 67% of the footprints might be 10 m or
[51:57] away, and you know, some might be considerably farther away than than than the coordinates say they are.
[52:05] >> Yep. Question four asks, "How do uncertainty approximation approaches differ between MDN based probabilistic and OB1 based
[52:17] biomass change estimation, and can these approaches be integrated to improve watershed scale carbon and ecosystem decision support?"
[52:27] >> So, I don't even know what MDN stands for. for. >> I don't either. >> Um >> If actually if someone who who asked
[52:36] this question wants to clarify that part um um in the chat, pause a moment or circle back to this
[52:45] question. >> To I mean, to to answer the question about watersheds, I think OB1 is appropriate for watershed
[52:55] carbon decision support. Um you know, that where where as I said in the presentation, talking about larger areas over a few
[53:05] hundred hectares, and that certainly is most watershed scales. So, um I I I would feel comfortable using OB1 to to evaluate carbon trends
[53:16] in in particular watershed as long as it's not, you know, the really fine fine scale scale uh hook
[53:23] levels. >> Thanks. Question five is a question about the black stripe line in slide 11. >> Yeah, those those were the those were
[53:37] the figures that just have um field measured change on the x-axis and predicted change on the y-axis.
[53:47] And the closer that that that black line is uh the one-to-one line. So, the closer uh a a particular population is
[53:56] estimated to the to the real change, the closer it will be to uh that black line. So, that's
[54:02] just there for reference. >> Question six asks, "I know that over steep slopes, the waveform tends to
[54:13] stretch. This can lead to overestimating canopy height. Do the current versions of relative height metrics, such as
[54:20] RH100 and RH98 in the level 2A product, include any slope correction algorithms or have they successfully mitigated this
[54:29] slope stretching effect?" >> Yes. Uh so, uh I mean, if you think about the waveforms we we looked at last
[54:38] week, uh if the level of the I mean, it it's based upon uh the elevation of the
[54:45] ground that's found. Um but if you think about a you know, the circle that is a footprint, if that ground elevation is
[54:52] much higher on one half one side of the the circle than the other, that's going to introduce a bunch of noise uh to to
[55:00] that waveform. Um and that's why the GEDI mission is using a much smaller footprint. So, you know, minimizing the
[55:09] potential for that ground level to uh change considerably. But it is 25 m, and if you if you mean you you can go out in
[55:16] the woods and walk 25 m and and go down a slope. So, uh you know, there there is
[55:21] noise there. Um and that's why um GEDI uh provides provides um um waveforms, basically the L2A uh relative
[55:33] height uh metrics using a variety of ground finding algorithms so, specifically to address well this issue is is one of the main reasons why
[55:46] Jedi provides multiple versions of RH and and some of them I mean the intention is that some of
[55:54] them are probably more locally representative than others. So So I've included a link to all the documentation for for those algorithms.
[56:08] Um Um So the short answer is we minimize it as much as we can and we take
[56:17] take a range of of measures to to uh to find the ground appropriately and you can find you can find different
[56:29] choices for that algorithm in the in the Jedi data. >> Yeah and maybe I would just add that
[56:35] that this is is a fundamental issue with just how full waveform lidar works right where that we don't actually have a way
[56:45] to trace individual returns within a footprint in terms of where within that footprint they landed and so there's no
[56:53] that that's a fundamental characteristic of just how waveform lidar works. >> That's right. Yeah that's well put.
[57:03] >> So in question seven we have the following. Could you share more applied cases of satellite data fusion
[57:12] especially examples where multiple data sets such as Jedi Landsat Sentinel solar induced fluorescence or synthetic aperture radar are integrated to improve
[57:22] biomass carbon or ecosystem monitoring? >> Yeah I put I put a link to Laura Duncanson at all's a paper. I think it's
[57:31] accepted now but I included the link for the free version. Um Um you know, that's that's fusion of uh
[57:39] ICESat-2, uh which is available outside of, you know, above the latitudes that that GEDI is limited to. So, the boreal
[57:47] mostly the boreal uh region that is not studied by GEDI. ICESat-2 does does see it, so that that
[57:54] paper and uh integrates uh fusion of Landsat and ICESat-2. Uh there's also a lot of work with GEDI specifically that has
[58:05] uh uh followed uh fusion with um TerraSAR-X, like um what TanDEM-X uh so radar data. So, you know, it and
[58:19] uh you know, the GEDI asset is available on Earth Engine, so you know, the the possibilities are almost limitless
[58:26] uh in terms of uh fusion through a number of different methods. >> Great, thank you. And in uh with the
[58:35] time here, this will be our last question for the live Q&A. Um Um there are more questions that have yet
[58:43] to be addressed, and and we will make sure to have those addressed and published in the Q&A document that will
[58:49] be posted to our training website uh within about a week uh from from today. So, let's end here with question eight.
[58:58] How is calibration extrapolated to every Landsat pixel when using GEDI / FIA? >> Yeah, and I'll I'll start with my last
[59:07] sentence there. OB1 is a tool for estimating biomass and biomass change over large area. So, the focus is not
[59:14] perfecting every prediction. It is removing the the biases across the population uh because because we're focused on a
[59:23] population level parameter, the mean change or the mean biomass. So, um you know, in in general, uh we use data
[59:32] from across the across the landscape to come up with a simple correction, uh classical linear calibration function
[59:40] that we apply to all of the pixels. It doesn't necessarily make any particular pixel better, but it removes the biases
[59:47] across across the whole population. That's the intention anyway. So, um um yeah, I guess this the question is how
[59:54] was it extrapolated? It The calibration is is uh fitted across the large population and it's applied to all the
[1:00:02] pixels, knowing that uh you know, our target is the population parameter and not any particular pixel's uh
[1:00:09] trajectory. >> Great. Well, that uh that's our time here for for today. I want to thank you, Dr. Sean
[1:00:21] Healey, for such a fantastic presentation and demo of OBON, and thank all participants for your interest and
[1:00:30] participation in today's training. >> Thank you, Savannah. Uh you guys have been great. This is uh really a
[1:00:40] well-supported uh training, I think. So, thank you. >> Thank you all.
