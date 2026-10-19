# Estimating Biomass using GEDI, Part 1/2

`https://www.youtube.com/watch?v=7Gn1rvDe-UI` · id 180 · 1:01:29 · module 74 — Estimating Biomass and Change with GEDI and the OBIWAN API

[00:01] Welcome to this RSET training series, estimating biomass and change with Jedi and the OB1 API. Today is session one of
[00:10] our training series and it's focused on estimating biomass using Jedi. My name is Erica Pist. I'm a scientist at NASA's
[00:19] Jet Propulsion Laboratory in Pasadena, California, and I focus on the study of terrestrial ecosystems using SAR. I'm
[00:28] also an instructor with the RSET program and I will be hosting this training. Before we begin today's training, I'll
[00:38] say a few quick words about the ARST program. program. The NASA applied remote sensing training or RST program offers free trainings on
[00:48] the use of remote sensing and model data along with methods and tools for the global science and applications
[00:54] communities. Our trainings are tailored to different experience levels ranging from introductory to intermediate to advanced. We provide trainings in
[01:06] several thematic areas including agriculture, climate and resilience, disasters, ecoconservation, health and air quality, water resources, and wildland fires. ARS trainings are
[01:21] either online or in person and there are two modalities uh one is live and instructorled like today's training or
[01:32] the other modality is asynchronous and self-paced. self-paced. All trainings are free of charge and utilize open-source data and software.
[01:42] Some of our trainings are delivered in both English and Spanish like this one. And all of our trainings have a Spanish
[01:50] uh uh presentation available, a PDF presentation available. So let's start today by providing an overview of this training series
[02:02] estimating biomass and change with Jedi and the OB1 API. What is happening beneath the canopy? One fundamental question that many
[02:13] people are interested in is forest structure and what is happening beneath the canopy. Now from many traditional
[02:21] satellites we do not know this because optical remote sensing sensors can tell us things about for example the
[02:29] greenness of the vegetation but not about the understory or the structure. Spaceorn lighter can do this, such as
[02:37] Jedi, which measures forest structure across more than 20 billion locations on Earth. And you'll learn to use this
[02:47] data, how to do this in this training. So by the end of this training, attendees will be able to identify the
[02:55] fundamental characteristics of Jedi data and carbon monitoring, including data structure, uncertainty, and system requirements. requirements. Apply methods for estimating biomass and
[03:07] biomass change, including the integration of Jedi with LANCAT time series and calibration with forest inventory data. Evaluate the accuracy
[03:18] and uncertainty of biomass estimates using validation data. Use the OB1 tools and APIs to generate and analyze biomass
[03:27] change products, including visualizing results for userdefined areas and comparing carbon gains to different climate scenarios. And finally, evaluate advantages and
[03:42] disadvantages of the footprint level versus grided level Jedi biomass products to determine which data are appropriate for a given use case.
[03:54] The prerequisites for this training is the RSET fundamentals of remote sensing as well as the spaceorn LAR for
[04:02] monitoring vegetation structure and biomass using Jedi. And this [clears throat] was a course from October of 2025 an arset training and um
[04:14] below that is a list of suggested trainings. trainings. This training series consists of two session. The first session today is
[04:24] focused on estimating biomass using Jedi. And the second session will be next Thursday, May 28th, and it will be
[04:33] focused on estimating biomass change with Jedi and the OB1 API. The homework opens up on May 28th and
[04:44] it'll be due on June 18th. It'll be posted on the training web page. There will be a certificate of completion to
[04:52] participants who attend all live sessions and complete the homework assignment by the due date. So with that, let's begin with session
[05:03] one, estimating biomass using Jedi. We have a guest instructor for this training, Dr. Sean Healey who's a
[05:12] research ecologist with the US Forest Service and US Department of Agriculture. Agriculture. So by the end of today's session,
[05:24] participants will be able to identify the fundamental characteristics of Jedi data and carbon monitoring, including data structure, uncertainty,
[05:34] and system requirements. Explain the Jedi structure and how uncertainty is characterized. characterized. demonstrate how Jedi data are fused with
[05:43] LAN Lancet time series and calibrated with forest inventory data to estimate biomass change and finally apply Jedi
[05:53] estimation methods to visualize and generate biomass products for given userdefined areas of interest. How to ask questions? Locate the three
[06:06] points on the bottom right. A submen uh click on it. A sub menu will open and select Q&A. So a window will open and
[06:14] write your question in that window and we will address your questions at the end of the webinar. Feel free to submit
[06:21] your questions throughout this webinar. We'll do our best to address as many questions as possible during the live
[06:28] Q&A session. Any remaining questions will be answered in a Q&A document which will be posted on the training website
[06:37] approximately one week after the training. training. So let's get started. Uh this uh next part is going to be presented by Dr.
[06:47] Sean Healey. We're very fortunate to have him. So welcome Dr. Healey. >> Hello. I'm Sean Healey. I am speaking
[06:59] for uh Dr. Jang Yang. Uh we both work for the USDA Forest Service, the inventory and monitoring program. I am
[07:07] very happy to be with you today to talk to you about Jedi. Uh Jedi is an acronym. It stands for global ecosystems
[07:16] dynamics investigation. Uh it is a NASA mission. It's a LAR instrument that is on the International Space Station. I'll talk a little bit
[07:26] more about that, but before I do, I want to clarify. So, I will be talk starting with Jedi, but I will also be talking
[07:34] about Obi-Wan, which is another Star Wars reference. It's another acronym. It doesn't really matter what it stands
[07:40] for, but uh basically Obi-Wan is an application that is specifically designed with the requirements of carbon monitoring in mind. Uh so we're going to
[07:52] start with the Jedi mission and we're going to be going we're going to be phasing into the Obi-Wan uh tool. Uh and
[08:01] I say phasing because uh Obi-Wan uses observations from the Jedi light LAR. It uses statistics built into Jedi. It uses
[08:14] carbon models built into Jedi. So it's really use it's a subsidiary tool of the Jedi mission. Uh we're going to start
[08:21] with the theory and measurements behind Jedi and uh between this presentation and the next one there is a second
[08:28] version which you will see uh we will get into uh how Obi-Wan helps us u answer real
[08:38] questions in the in the field of uh carbon monitoring. So uh starting with Jedi uh it is a NASA Earth Ventures
[08:48] instrument. It launched in 2018 and became uh operational in 2019. Uh on the the picture on the right there, there's
[08:58] not actually a p a sign on it that says Jedi. I've added that. But that's basically what it looks like. It's the
[09:04] size of a of a refrigerator. It is a laser. There actually there are three lasers on Jedi. Um
[09:13] and uh they help us uh measure the basically the height of trees around the world or at least in the uh latitudes
[09:22] that the International Space Station overpasses between 51 degrees north and 51 degrees south. Uh there is another
[09:29] ARS training that that goes over uh more of the specifics of Jedi, how to and and focuses on how to get Jedi data. Uh
[09:38] we're going to be talking today really about how Jedi makes inferences from those measurements related to how much
[09:46] biomass is in particular places. Uh and that's on the way to talking about uh the Obi-Wan tool. Uh I I should say that
[09:56] it became operational 2019, but it took a one-year nap between uh March 23 and April 24. Uh it has since resumed
[10:05] operations. operations. uh and it's uh you the PI is Ralph Dubai at the University of Maryland. I should
[10:13] also say that uh NASA very recently selected uh the edge mission uh which is which is similar to Jedi except it's
[10:21] free flying. It will be free flying. It should launch around 2030. Uh NASA selected that through the Earth Systems
[10:28] Explorer program. Uh the PIs there are at at uh UCSD and University of Maryland. Um so the technologies that
[10:39] you're seeing here um will be available into the future. Okay. So so what does Jedi do? It's it
[10:47] really has three lasers but those lasers are split and dithered in such a way that it really gives us eight tracks. As
[10:56] the International Space Station goes over an area, it's collecting eight tracks worth of uh height data. And as
[11:05] the mission has continued to go on, you can see that uh the sample is filling in. So it's not an imager. It is
[11:13] collecting footprints along tracks and the tracks are not contiguous. They're interrupted. But so there are 30 meter
[11:21] footprints along all of those tracks uh that have been collected since 2019. And what do these footprints look like?
[11:31] uh as I said they're about 25 meters in diameter and really what you get the main observable from Jedi is this
[11:39] representation of the vertical forest structure. Um so uh as uh laser energy comes down from the space station, it
[11:50] bounces off of the surface. Some some of that energy bounces off the top of the canopy. Uh some of it makes it all the
[11:59] way down to the ground. Uh and you know because uh we know the speed of light and how long it took uh different parts
[12:08] of that waveform to come back uh we infer this waveform. Uh the the business end of the waveform is really when you
[12:17] quantize that to things that we can put into a bio biomass model. So relative height RH uh is is basically the height
[12:26] above where we found the ground uh a particular percentage of the waveform's energy is returning. So RH100 is
[12:35] basically the top of the canopy. RH50 is the height at which half of the stuff that that LAR energy is returning from
[12:45] half of the stuff is below and half of the stuff is above. And so basically we quantize the waveform into things into
[12:52] these measures that we can put into a biomass model. There are a lot of uh Jedi well there's
[13:00] four levels of Jedi products. It's not it's not a bewildering array of of products. the the level one, two, uh
[13:08] especially the level one and two are are sort of uh more basic uh physics oriented um waveform
[13:17] uh properties. Level four is really where we're going to focus today. That level 4A is how much biomass for ev
[13:26] every footprint uh has a biomass estimate. So level 4 A is talking about how how we model using those relative
[13:35] height measures, how we uh model biomass and level 4B is how we take the sample that Jedi gives us of those predicted
[13:48] biomass values, how we fill in uh the entire area for one kilometer grid cells. So that it's really a sample
[13:57] survey sort of a process and we we use u you know very similar statistics to those used by uh the forest inventory
[14:05] that I actually work for. So uh let's let's just jump right in. Um how do we get our predictions for biomass at the
[14:15] footprint level? Basically uh the Jedi mission has asked co cooperators from around the world for LAR data that's
[14:25] collected directly over uh inventory plots where biomass has been measured on the ground and uh throughout this
[14:33] presentation you will see references here it's Duncin at all 2022 to to the source material if you want more uh
[14:41] details about the processes but basically uh what the Jedi mission has done is simulate Jedi waveforms from the
[14:50] airborne LAR and used the paired uh Jedi waveform and field data to make a model u a specific model for every continent
[15:02] and every continent is split between plant functional types deciduous uh evergreen etc. So uh an important for
[15:13] for our purposes where we're headed is estimating biomass and inference. Um where we're headed is uh we are keeping
[15:24] the uncertainty that's associated with these models. Um and we won't get into exactly how that's stored but uh there
[15:33] is an uncertainty stored with every model and we use that in this next slide actually. Um so when we go to L4B
[15:44] Jedi L4B that's the grided biomass product where we are inferring uh the mean biomass for every one kilometer
[15:52] grid cell. What we're doing here I mean it looks like here we we've got a sample and that's exactly what Jedi gives us.
[16:00] Um, so every 1 kilometer cell, not every 1 kmter cell, some 1 kilometer cells are unlucky uh either because of the
[16:09] overpass pattern of the space station or because they're perpetually cloudy. Some uh 1 kilometer grid cells don't have uh
[16:20] much of a sample and those uh those grid cells get a different algorithm which I'll talk about in the next slide. But
[16:28] for those cells, which is most cells uh that do have a good Jedi sample, really what we do is we use an estimator, a
[16:37] statistical estimator, uh that estimates the mean biomass from all the predictions that are in that grid cell.
[16:46] And we also produce an estimate of uncertainty, a standard error around the estimated mean that uh is a function
[16:56] both of the model uncertainty. If you remember from the previous slide, we saved uh a lot of not a lot, we saved
[17:04] the relevant uh model uncertainty information. So that gets propagated through this uh this process and also a
[17:12] sampling uncertainty. As you can see, we're not measuring everything in that one kilometer grid cell. So this
[17:19] estimator Patterson at all uh uses both s or propagates both sources of uncertainty to get a standard error for
[17:28] for our estimate of mean biomass in one kilometer grid cells around the world. So that's the L4B
[17:36] product. product. I mentioned that there are some L4B colum 1 kilometer grid cells that don't have for whatever reason enough um
[17:48] enough Jedi measurements in there to to do that process. So this is what we do in those cases. Uh the green squares are
[17:58] field plots around the world um and that are used by the Jedi uh team to make our
[18:05] biomass predictions. So we've already talked about the field to Jedi model. So there's one model but then there's then
[18:12] we predict we use Jedi's predictions uh for all the waveforms uh in a in a particular area. We're using currently
[18:21] we're using 10 km squares 10 by 10 km squares um and we intersect those predictions of biomass with LANCAT time
[18:34] series information. So not just a single LANCAD image but uh all of the available clear imagery for a LANCAD pixel gets
[18:42] fit fit into this time series function and we use properties of that function to make our prediction of biomass with a
[18:51] model that we calibrate with Jedi's predictions. So very local model uh we're using Jedi predictions to predict
[19:00] a Lancet model. Uh, okay. So, and we've talked about where that's used. This is important for Obi-Wan because this really is the basis
[19:11] for how Obi-Wan works through time. And and we'll we'll come to that uh in just a moment. But before we do, um, I'd like
[19:20] to show you what the L4B product looks like. Um you will be seeing uh a little bit later in an app uh that that I will
[19:31] be walking through and that you will also have available to you. You will see that there are a lot of 1 kilometer grid
[19:38] cells in version two which is what the app is seeing um that do not have uh an
[19:45] estimate. version three which has been submitted to the DAC and will be actually I think it is available
[19:52] currently um fills in all of those gaps with the process that I just talked about but basically every every place in
[20:01] the world has a prediction at the one kilometer scale of biomass from Jedi and there's also a corresponding standard
[20:09] error of that estimate map so this process doesn't have to only apply to one kilometer grid cells. It
[20:16] can apply to uh entire countries. It can in this case what we have done is uh pointed that process at uh 64,000
[20:28] hectare hexagons that that cover the United States. And uh in this paper we compared those estimates with estimates
[20:37] uh from FIA, that's the forest inventory, the part of the forest service that I work for. And really there's a pretty good match
[20:46] spatially spatially um you know spatially and looking at the scatter plot. Um so uh we'll we'll talk
[20:53] a little bit more about validation with FIA especially in the in the next um presentation but in general it lines up
[21:03] and the important thing is that it doesn't have to be a one kilometer grid cell it can be uh you know uh any shape
[21:10] and it can be multiple uh multiple patches too. So now we're getting into Obi-Wan which is a tool uh for
[21:20] estimating biomass change and change is is a operative word in this slide because uh so far all we've talked about
[21:30] with Jedi is single point in time biomass but we will see in in the next uh version of this presentation the next
[21:41] session of this presentation that practical carbon accounting really requires a view over time. And so Obi-Wan is using the measurements, the
[21:54] statistics, uh, and the models that we've already talked about for Jedi, but pointing them directly for the purpose
[22:02] of estimating change. Okay, so you will remember this that this is sort of uh the alternate algorithm for predicting biomass for a
[22:14] single point in time for the 1 kilometer grid cells where there is not enough Jedi uh direct not
[22:23] enough Jedi footprints directly in the 1 kilometer cell. So um what we're doing there's two levels of model one from the
[22:32] field to Jedi and then one very fitted very locally at 10 km by 10 km area Jedi
[22:40] predictions to LANCAT imagery and uh the the nice thing is that LANCAT is consistently processed through time.
[22:52] And so what we do then is we can apply that LANCAT model not only to the present but to LANCAT uh imagery and and
[23:01] again it's it's LANCAT time series imagery uh going back in time to the mid 80s if we want to. Um so what we end up
[23:11] with is a time series of predictions through the LANCAT record. uh LANC modern LANCAT started in in uh the mid 80s uh the
[23:24] first LANCAT launched in 1972. So, so what we are doing here in this slide, this is uh the country of
[23:32] Paraguay. Uh we have fitted our models with Jedi in the current period and and then we are applying that Lancat model
[23:43] back in time and what we see through time is that there's a lot of reduction of biomass especially in the western
[23:50] part of Fire uh through this time period. period. Okay. So, so this is how we're getting est basically how we're getting
[23:59] estimates of change. Um so when we're talking about uh a company applying for carbon credit applying to be to sell carbon credits
[24:13] because of forest management or we're talking about a country uh complying with its own commitments uh internationally in terms of uh
[24:22] mitigating climate change by managing forests in a way that stores more and more carbon. we really uh need uh a
[24:32] straightforward way of accounting for the uncertainty of this car of car any carbon management credits that we may
[24:39] claim. And so, uh you might ask, we've got a time series of LANCAT predictions. How do we track the uncertainty of of
[24:52] the predicted change for a partic for for an area that we care about? And in this slide, it looks like we care about
[24:58] a square. Um, you know, it could be, as I said earlier, it could be any shape. Uh, it could be um multiple areas from
[25:09] across from across a region. Um we we are we do require that it be at least uh
[25:17] 500 hectares uh because the statistics that we're using some of the assumptions break down for smaller areas than that.
[25:26] Uh but basically the top set is basically what I just showed you. We we make two models uh field to Jedi Jedi to
[25:34] Lancet. We apply the model through time and let's say that we care about the change between 1990 and two 2020. We get
[25:42] a prediction in 90 uh of 95 and 30 years later it's 80 tons per hectare indicating there's a loss of 15. So what
[25:53] we actually do behind the scenes in Obi-Wan is uh change both both of those models field to Jedi Jedi to Lancat in
[26:05] ways that across a lot of iterations represent what we know about the uncertainty of those models and so and
[26:13] we call that bootstrapping. And I'll talk a little bit about what how how we uh sort of jitter those models in a
[26:20] second. But basically we end up making a lot of different time series of predictions. And uh the the first one
[26:30] indicated a loss of 15, the second one indicated a loss of 13, third a loss of 20. And across a lot of these iterations
[26:38] or bootstraps what we will end up with is a distribution of predictions and that's what you see see on the right and
[26:49] uh the you know the mean of those predictions that's that's what we return as an estimated mean and the standard
[26:57] deviation around that mean is what we report as a standard error of our estimate. estimate. Just a little bit of detail about how we
[27:07] are jittering these models. This you know two two models. Uh the first one we have be we have because the Jedi mission
[27:17] provides it. We have it's a linear model that goes from the field to uh field field biomass to Jedi biomass. uh and we
[27:28] have a parameter coariance matrix for for the parameters in that linear model. um we can we jitter we jitter that model
[27:36] on on that basis on the basis of the uncertainty that's that is implied by those parameters and then we also I
[27:45] won't go into the details but we also resample the second level of model uh in in a way that gives us a lot of
[27:53] different time series that we need that we query to to return a predicted uh change and standard error around that
[28:00] change. Okay. So here's sort of a a a red flag that is uh that may be on your mind especially if
[28:11] you do a lot of remote sensing. So, LANCAD imagery is optical imagery. And as uh forests grow, let's say they're
[28:20] growing from scratch, you know, from from an open field, in general, the more uh the forest expands, the greener uh
[28:28] the imagery gets until uh the canopy closes. And at at that point, the the stuff under the canopy continues to
[28:38] grow. The trees get taller. They put on more and more biomass. But there the the imagery does not get a lot greener.
[28:46] There's some shadowing the changes. There still is some signal there. We have shown that um if we make our models
[28:54] very locally it helps but it's still a problem. Um basically that problem manifests itself and our models
[29:03] uh overestimate low low values of biomass and underestimate high values of biomass. So that's a bias right there.
[29:13] And then especially when we're looking at change from either high biomass to low or in the opposite direction, we
[29:20] will systematically be underestimating that uh that change. That's a problem. So uh what Obi-Wan does is very
[29:30] explicitly use calibration to address that problem. And we will be talking about uh two options for calibrating uh
[29:40] in the next session. Uh the first one is using Jedi waveforms that we didn't use to make the LANCAT model and the second
[29:49] is using inventory data that may be available in a particular country. um both of those. Basically what we do
[29:57] is we look at the predictions that we see in these time series and we develop a really simple
[30:06] calibration function that in in in essence most of the time it pushes the high predictions upward and the low
[30:14] predictions downward because you know th those are generally the the what has to happen if we want to remove the biases
[30:22] that in integrating that process into the process that I uh that I just mentioned uh is really simple and
[30:30] computationally it's very simple u and and we'll see a little bit about that. So there's very little additional
[30:37] computing. I just want to make the point that um and we'll come back to this in the next session that there is
[30:44] calibration possible and in fact it is happening. Um okay so uh before we get to sort of a hands-on activity that we
[30:55] in which we will be uh exploring Jedi data um with with a Google Earth Engine app. I just want to point out these uh
[31:05] resources. resources. There is also of course the earlier uh RSET trainings in this series which talked about lidar in general and LAR
[31:16] specifically from Jedi. Okay. So the hands-on activity that we will be pursuing uh before we get into
[31:26] it, we'll talk a little bit about what it is. We will be exploring the distribution of Jedi shots. You know
[31:33] what this when you look at uh Jedi data, how how dense is it? Um and um how does
[31:42] that density change from place to place? We'll be looking at uh what Jedi actually measures at each of its
[31:49] footprints. uh you will see very clearly that they they um line up in uh paths that echo the overpass pattern of this
[31:59] international space station. Lastly, we will be uh experimenting with uh the estimator that I mentioned earlier that uh propagates the
[32:12] uncertainty of uh the sampling the the model error and the sampling error. Uh so uh I just want to point out that this
[32:25] is possible because Jedi data is stored on Google Earth Engine. Here is the uh thing that you would search for in the
[32:33] catalog. And here is the link to the to the Jedi app that we will be exploring now.
[32:47] Okay. Uh so here we are. Uh you have uh registered for Google Earth Engine if you weren't already registered. Uh
[32:55] you've clicked on the link and this is a Google Earth Engine application that we built. Uh really it was Jang Yang who
[33:03] built this for this training and what we're doing here is looking at a number of things. What I don't I I
[33:13] think that you can see my cursor here. Uh what we're looking at now is Jedi L4B. Th those are the statistical
[33:21] estimates at the 1 kilometer grid scale. Um Um so you know just zooming in you will see
[33:31] that there are places where there's no estimate. Those are places where at least at the time of this uh version,
[33:39] which was version two of Jedi, there weren't enough uh Jedi footprints in there to make an estimate. Uh so if you
[33:48] want to see imagery under underneath what we're showing, you can just press the satellite button here. And um I'm
[33:57] just zooming in to a particular place. Um, so these are the um 1 kilometer estimates. I'm going to press this
[34:07] inspect pixels button and just clicking on a, you know, a a pixel at random. Pretty high biomass uh 357
[34:18] tons per hectare. We've got a standard error of uh 95 uh tons per hectare. So this is actually a fairly uncertain.
[34:27] There's a lot of variability in this. Uh so the because the standard error is maybe 30% of uh or actually it's yeah
[34:37] well it's about 30%. That's a pretty high error. Um in addition to seeing so you can explore really this is sort of a
[34:45] tool for you to to explore Jedi data. It's global. Uh I'm I'm focusing I think it's this is Alabama. But as you zoom in
[34:55] um in addition to these 1 kilometer estimates, you can choose uh the Jedi product that you would like to see. L2A
[35:06] uh that's a footprint level. So I'm just zooming in so that you can see the density of the 30 meter uh footprints.
[35:16] It's really uh pretty dense. Um, so as we as we zoom in, you can see this looks brown. The forest here looks
[35:27] brown. I have a feeling that this is a sort of wintertime image. Uh, when we when I click on um, one of those pixels,
[35:36] this L2A is the product that has those relative height values. So the top of the canopy is about 31 m tall for the
[35:45] for the footprint that I clicked on. 50 that is sort of the midpoint of the canopy uh stuff that intersects that
[35:54] intercepts Jedi is about nine uh meters. So there's a pretty far uh distance between the midpoint of all the all the
[36:04] photosynthetic material and the top there is also this L2B product that's also a footprint level product. It is uh the ca the predicted predicted
[36:17] canopy cover for a particular uh waveform and uh this one is showing about 0.9 canopy cover. So that really
[36:25] tells me this is not brown because it is uh uh barren is brown because this is a
[36:32] wintertime uh high resolution image. If you want to uh see what's under there, you can. This slider bar opacity uh can
[36:42] make this what our Jedi data uh invisible for a moment. I'm just going to switch over to
[36:50] another instance. This is on the coast of California. Uh I I'm I'm going here because uh the the redwoods
[37:01] are here. They're very they have very you know fall heights obviously. So I'm just going to zoom into um you know a
[37:09] place here and instead of looking at the one kilometer estimates I'm going to look at the the Jedi footprints. You can see
[37:18] that there's you know there are I think 20 billion highquality uh Jedi shots around the world currently. Uh I'm going
[37:27] to display them against uh forest data. So these are mean the redwoods are famous for being tall obviously. I'm
[37:41] going to uh press inspect pixel that's here. I get a a crosshair. crosshair. I'm going to zoom in making sure that I
[37:52] hit the middle of this pixel. Uh so we're predicting almost 500 tons of biomass per hectare here. That's a lot
[38:01] of biomass. Um you can you can find some that are over a thousand tons. Keep in mind that these footprint level
[38:11] predictions are not uh necessarily representative of the whole hectare. 25 meters that might just fall uh luckily
[38:21] or unluckily by chance on uh one tall tree and a lot of that 30 meters might be you know just one column of wood. So
[38:30] for that small area the density is over a thousand tons per hectare uh over the whole one kilometer uh or even larger
[38:40] area. you know, it's it's going to be some footprints that fall in between trees. Uh, this is the last thing I want
[38:48] to show you here. Um, for an area that you care about, uh, this panel over here, polygon,
[38:59] rectangle, delete, analyze, this accesses, uh, the statistical estimator that I talked about earlier. uh that propagates the uncertainty both from the
[39:13] model and from the sample. And so basically I'm just drawing a pixel. And I could draw several pixels or not
[39:21] pixels uh polygons. I could draw several of them. When I have the place that I care about, I can press the analyze
[39:28] button. button. And over here uh this panel tells tells us that the area is 627 hectares. It's estimating
[39:39] 355 355 tons per hectare. Uh that's megrams per hectare. It gives us the standard error. This one uh is a pretty uh pretty low
[39:50] standard error. uh the forest here. I I was careful to not uh include a bunch of different um forest types. If if it was
[40:01] really various, the the standard error would be higher. Uh there's some other informationation here. There are 52 53
[40:08] clusters. So each one of these lines uh we treat as a cluster sample and across those 53 clusters there's 1,400 shots.
[40:20] So the last thing I want to talk about because this uh leads into the next session is that we have built into this
[40:28] app uh a little button that says Obi-Wan report. we care about, for whatever reason, we care about this place. Uh,
[40:36] and we built into this this app uh something that, you know, gives some background and and uh records at least
[40:46] what today our estimate for that area was. This could be built into any kind of data system you want. It could look
[40:53] however you want. We'll talk about that in the next session. And I just want to point out that even in this uh fairly
[41:00] simple app, we have options for documenting the out the outputs uh that that our estimators are using. Uh this
[41:11] app will be live for the foreseeable future for the purpose of just letting you explore around the world uh the the
[41:18] Jedi data and the capacity for estimating mean biomass that is that is built into Obi-Wan. Thank you.
[41:28] So now we will hand this over to Erica who will lead the Q&A portion of this presentation. Uh and as I said earlier,
[41:37] a lot of what we have hinted at in terms of carbon monitoring we will explicitly cover in the second session.
[41:48] >> Thank you very much Sean. And next we will do a brief summary of the key concepts that were presented during this
[41:56] session. session. So let's quickly review the key concepts for this session. Jedi is a sensor on the International Space Station. It is
[42:08] an active sensor that measures the distance by timing how long a laser pulse takes to return back to the
[42:15] sensor. And this provides detailed information about elevation, canopy height, and three the three-dimensional structure of the vegetation.
[42:24] Jedi is a full waveform LAR. Unlike discrete return systems, this sensor records the complete energy profile of
[42:34] each pulse, which captures the entire vertical distribution of vegetation within Jedi's 25 meter diameter footprint. And this as a result this
[42:45] provides a much ri richer structural information. information. Um so each footprint provides the complete vertical structure of the
[42:57] canopy canopy and given that as I mentioned Jedi is on the international sta space station it doesn't have a regular orbit. So it
[43:06] covers latitudes between plus and minus 51° 51° and produces both footprint level data at 25 m and grided products at 1
[43:17] kilometer resolutions. The uh relative heights are a property of the waveform that can be plugged into a biomass model and the level 4 A is a
[43:29] biomass density predicted for individual footprints. Level 4B are statistical estimates of mean biomass for a 1 kilometer grid cell using Jedi sample of
[43:41] level 4A biomass predictions. Now, uh, OB1 is a forest canopy analysis application that uses Jedi LAR observations together with forest
[43:53] inventory data to estimate biomass and monitor changes in forest carbon over time. and Jedi uses sampling theory to
[44:02] estimate mean biomass and uncertainty. Looking ahead to session two, participants will be able to identify key concepts in carbon monitoring,
[44:15] including system requirements, decision making needs, and the concept of additionality. additionality. They'll be able to recognize or you'll
[44:23] be able to recognize how OB1 estimates biomass change including its use of Jedi landsite time series and under the
[44:32] underlying data infrastructure. Participants will be able to evaluate uncertainty and validation using forest service inventory data to assess the
[44:42] accuracy and precision of OB1 change estimates. Access open- source OB1 API to generate estimates of biomass change
[44:51] in areas of interest and apply OB1 tools and APIs to visualize biomass change and compare carbon gains against different
[45:00] climate scenarios. Homework and certificates. There is one homework assignment with this training. It'll open on May 28th. That's the next at the end of
[45:15] the next training or the next session next Thursday. And you can access the homework from the training web page. The
[45:24] answers must be submitted via Google forms and the homework is due by June 18th. 18th. The certificate of completion will be
[45:34] given to those participants who attend both live webinars and attendance is recorded automatically. Participants complete the homework assignment by the
[45:45] deadline. And please expect to receive the certificate via email approximately 2 months after completion of the training.
[45:56] training. If you have any questions about the material that was presented today, please feel free to contact Dr. Sean
[46:03] Healey through the email that you see here. We've reached the end of today's session. Thank you very much to Dr.
[46:14] Healey. And we are now ready to start the Q&A session. All right. Thanks again. Thanks. Thanks, uh, Erica. I'm tech team one. I'm tag
[46:31] teaming here with uh with Erica because she has to uh step out. So, I'll be leading hosting the the Q&A session
[46:39] here. And thanks for for uh putting it there on the on the screen. we can go straight to the to the first question
[46:48] and uh and then Sean I'll I'll be I'll read the question and then feel free to uh to provide the answer to it. Um so
[46:57] the first question is are we and some of these questions came really early in the uh during the webinar. So I'm I'm
[47:04] assuming that uh maybe maybe you already answered some of them uh uh during during your talk but uh but the first
[47:11] one says are we measuring biomass change or are we producing a sophisticated model based uh approximation. >> Hi uh thanks for the question. Um the
[47:23] answer is I I guess if if you give me a choice between those two things it's a
[47:27] sophisticated model-based approximation. I mean it's almost impossible to to measure directly measure you know a lot of trees over a large area. Um so
[47:39] there's there probably is no direct measurement of biomass change but there is uh what what we're using is a
[47:47] modelbased mode of inference where we are accounting for um uncertainty that is built into our models. We're also accounting for
[47:57] uncertainty of the uh introduced by the fact that Jedi is only sampling the landscape and not um not collecting an
[48:06] image over the entire population. So uh you the answer the answer that I put there is that it's uh you know it's
[48:15] a modelbased estimation paradigm uh and the uncertainties that we produce are are our best understanding of how the
[48:24] errors in our models uh propagate to the final answer of uh of biomass change. >> Great. Thanks Sean. Uh question number
[48:34] two, it's uh can uh space-based biomass estimates be accurate and reliable enough to support high stakes carbon
[48:45] decision making and if not what monitor approaches would be more appropriate in cases where comprehensive uh groundbased
[48:53] monitoring is not feasible. Can space-based biomass estimation serve as a practical alternative or complimentary approach and to what extent the approach
[49:03] is uh practically applicable? So, pretty long question there, but uh but yeah, feel free to to jump in.
[49:11] >> Yeah, two great questions right out of the gate. Um, you know, I I think that uh the gold standard is having a
[49:18] field-based inventory uh that goes back in time and is that is consistently and frequently measured. Um that is is
[49:27] pretty expensive. Uh especially if you know you don't have an inventory for anything else, it's it's hard to imagine
[49:35] u you know carbon credits paying for that kind of uh that kind of inventory to be collected all the time. So uh in
[49:43] in lie of that in me in in many places we don't have any forest inventory uh and I I believe that uh what we're
[49:51] talking about is the best estimate that we can get from remote sensing in many parts of the world. Uh and I I think uh
[49:59] you will see uh in the next presentation I believe uh that in many places that is not good enough. I mean it's not good.
[50:08] you know there are there are definitely biases that creep in. Um so I I although I I would say it's the best we have and
[50:17] maybe the best available answer in a lot of cases um there we know that there are biases and that that will be covered in
[50:25] the next uh the next presentation. I would say though and you'll also see this in the next presentation that uh
[50:31] when we in the United States we're using uh reme-measured data from the forest inventory and analysis unit of the
[50:38] forest service to calibrate uh these estimates that it's getting much closer to the truth and I I think uh you know
[50:46] in this country we are entering uh a space where it this can be used for decision support you know that you know
[50:55] we we provide probabilistic take estimates of uncertainty which all always includes the possibility that you know there's you know there's some uh
[51:04] bias in there or um some errors in there but um I I do believe in this country
[51:10] especially that in the United States uh that uh there is room for using what we're talking about in in operational
[51:19] carbon accounting. >> Excellent. Okay, question number three. Uh should temporary forest carbon storage be treated as equivalent to permanent
[51:32] fossil fuel emission reductions? >> Well, uh you know, I I I think that the answer depends on the time frame of
[51:43] mitigation that we're talking about. Uh I'm a lot of people consider the next few decades as you know the the real uh
[51:52] you know tip place where tipping points will or will not be passed uh and uh you know these upcoming decades uh probably
[52:01] will be you see the peak of of carbon emissions hopefully and um you know a lot of people say that uh
[52:11] mitigation in the near future is is more important than mitigation 400 years from now. Uh I I don't have a position on
[52:19] that but um I I do recognize what the what the questioner is asking like uh mitigation is not in in forest carbon
[52:29] storage is not permanent. You know uh disturbance is a part of life in in forest ecosystems. Um so that that
[52:38] question is more of a a general uh forest climate change mitigation question. Um, so I I guess the answer to
[52:46] that is it depends on on your time frame. frame. >> Um, okay. Uh, question number four is RH
[52:55] 50 half the elevation of RH 100 or half the biomass of the vertical column. >> So the answer is it's ne neither. Um, as
[53:06] the light from the laser passes from above and eventually bounces off of the ground, some of that is intercepted by
[53:16] the very top of the canopy. Some of it's intercepted by the branches and leaves uh at different levels of the canopy.
[53:24] And RH50 is really a measure of sort of the uh the midpoint of the density of the stuff that the light passes through
[53:32] and bounces back from on its way to the ground. So if you think of a profile uh
[53:39] and I I showed a profile um of the waveform, that's the point at which half of the energy is returning has already
[53:47] returned back. Um so uh yeah it's it's really a measure of the the waveform and uh you know depending on the
[53:57] distribution of canopy material that could be half half of the height of the very top or it might be taller than that
[54:04] or shorter than that just depending on how that material is distributed vertically. vertically. >> Interesting. Okay. Question number five. Uh is it
[54:15] possible to access the lighter data using the Duncans at all paper? Um or is it open source?
[54:22] >> I in general uh all uh NASA sponsored research is open- source data. However, the Jedi mission is collaborating with
[54:35] about a hundred or maybe it's more by now uh providers from around the world who have uh put a lot of work into uh
[54:44] surveying measuring trees and and collecting LAR data over those trees. So that's that's proprietary information in many cases uh shared you know through
[54:55] goodwill. But part of that uh goodwill is also uh vouch safe with uh uh agreements protecting uh against
[55:05] sharing. So as much as uh the mission would like to share that data, it has to respect the providers of that data and
[55:12] it it does not share it. >> Okay. Number six, how do you see the potential of incorporating information
[55:20] from Sentinel or higher resolution satellites in addition to the LANCAT model? model? Well, Sentinel 2 is a that's sort of the
[55:30] sensor I addressed in my answer here. Um, that's a fairly easy one. Uh, NASA provides uh harmonized LANCAT Sentinel
[55:41] data set. I think that globally it it may only go back to 2018, but basically they make uh the two sensors
[55:51] sort of interoperable and that would be easy to integrate. We have not done that uh because uh the the stuff that I was
[55:59] talking about today uh go you know we we wanted to go back to 2000 and and Sentinel wasn't available at that time
[56:07] but um all of these methods could be adapted we haven't done it but they could be adapted to other wall-to-wall
[56:15] uh sources of imagery. >> All right. Um, number seven here, uh, how do I fuse Lancet imagery with Jedi
[56:25] data? Which software can I use to do this or can I use different co-ar such as NDBI, EVI, etc. And additionally,
[56:37] kind of similar to to the the questions that you just addressed, is it possible to use Sentinel one or two instead of
[56:43] Lancet for biomass estimation? Yeah, I'll address I I I just addressed that one, but uh the you know what software
[56:50] would you use? Uh I mean you could use a lot of different kinds of software, but uh it would be easy on Google Earth
[56:56] Engine. I think that I mentioned that uh Google uh is storing the Jedi data set as an asset. It's very easy to use and
[57:06] uh it's al also stores LANCAD and Sentinel and and other sources. So uh fusion with other data sources one easy
[57:15] answer would be Google Earth Engine. >> Super. Okay. Number eight. Uh would the bootstrapping time series you mentioned
[57:25] be similar to performing multiple simulations like a Monte Carlo simulation? simulation? >> Uh the answer is yes. Uh there's a
[57:33] stochastic element in both of those. I would say that the bootstrapping that we are doing, we're bootstrapping
[57:39] uh models either field to Jedi or Jedi to LANCAT or both and uh that that's a narrower term uh and accounts for just
[57:51] the the uncertainty involved with those models. Monte Carlo uh simulation would allow uh you to incorporate variability
[58:02] from other sources also. Uh so I I I I see uh Monte Carlo uh simulations as sort of a broader
[58:11] uh class of stochastic simulations. Okay, Okay, let's do the next uh couple questions and uh and then just for the benefit of
[58:24] the audience remember that uh eventually all the answers will come up in the in the Q&A document uh several days in in
[58:31] in about a couple days uh a week max. Uh okay question nine uh is uh estimating biomass using jedi applicable and
[58:42] efficient in uh drylands and grasslands. >> I uh I have not personally worked a lot with grasslands. I believe that Jedi's
[58:55] uh waveforms are uh I'm not sure they're great for grasslands uh to be honest with you. uh
[59:04] and and but in in dryland forest I would think that uh the the um measurements are are uh you know perfectly uh
[59:14] reasonable to use. Uh we have not tested Obi-Wan. So Obi-Wan brings in the the element of uh modeling Jedi to LANCSAT.
[59:26] I'm not sure how well we do in uh dryland forest. We have not yet tested or um validated that in dryland forest
[59:35] specifically, but as I say here, I think uh we do need to do that. So, it's kind
[59:40] of an incomplete answer, but that's that's what I know so far. >> Yeah, it be interesting to see how how
[59:47] it behaves. >> Okay. Um All right. Question number 10. I think you mentioned that the the assumptions are going to the biomass
[59:56] estimations breakdown for areas less than 500 hectares. Did I hear that correctly? If so, could you please speak
[1:00:03] a little more about that? >> Yes. Uh so we we're working with modelbased modelbased inference and uh there is a component of
[1:00:16] modelbased inference that involves spatial autocorrelation of the errors in our models and uh that is relevant at at
[1:00:28] very fine scales that we and we do not account for that uncertainty. So uh you know at at finer scale at very fine
[1:00:37] scales uh you know we simply you know given the assumptions of our of our method we don't trust those estimates at
[1:00:45] very fine scales. So that's why we recommend uh at least 500 hectares. >> Makes sense. Okay. Um yeah, we're going
[1:00:55] to we're going to stop here and but again, as I mentioned, the the Q&A document will eventually be available
[1:01:02] for our participants uh in the in the training web page. Thanks again, Sean, and your team for
[1:01:10] for helping with this and for all that valuable information. And uh yes, we'll see everyone uh in session two next
[1:01:18] week, next Thursday. So, have a great day all and uh we'll see you on Thursday.
