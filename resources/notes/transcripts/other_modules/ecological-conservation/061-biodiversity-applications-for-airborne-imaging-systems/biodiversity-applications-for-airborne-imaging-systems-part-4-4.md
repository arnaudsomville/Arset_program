# Biodiversity Applications for Airborne Imaging Systems, Part 4/4

`https://www.youtube.com/watch?v=llRk4mILEFA` · id 23 · 1:33:11 · module 76 — Biodiversity Applications for Airborne Imaging Systems

[00:01] so welcome to session four of this uh webinar series on biodiversity applications for Airborne Imaging systems my name is Juan Torres Perez and
[00:11] like in the other webinars I am today here accompanied by primitability and Amber McCollum and sativa Cruz from
[00:20] the Ames Research Center in California and also today we have a very special invited speaker Dr Natasha Stavros from
[00:28] the University of Colorado Boulder and or I will also be presenting some information on behalf of doctors Liang
[00:37] Gile and Jeremy Kravitz also from the aims Research Center so thanks uh Leon and Jeremy for providing that
[00:45] information of today for for this webinar okay so again as a reminder here's uh the course structure as you know we have
[00:57] four different sessions this is the last session session of about an hour and a half each and uh
[01:04] from 11AM to 12 30 p.m Eastern Time U.S and each session has a lecture and then at the end we have a question and answer
[01:15] session also where we will be answering some of your questions that you I may have provided during the during the
[01:23] presentation and as always you can find all the materials for this uh specific webinar on this uh on the webinar
[01:30] webpage here and if by any chance we're not able to answer any of your questions most likely
[01:38] because of the limitations of time you can still send or send it to us to either myself or Amber Brittany or
[01:46] sativa and we will try to answer those uh as soon as possible again as a reminder these are the
[01:56] prerequisites for this webinar the fundamentals of remote sensing and also uh some time ago we did an introductory
[02:04] High perspectral data for land and Coastal systems and that we encourage you to take a look at it if you're not specifically you're
[02:12] not familiarized with a high perspectral data but you if you also have an equivalent experience that's okay with
[02:19] us foreign foreign there's a homework assignment that is actually will be available today during this last session
[02:32] and uh you with this uh homework you may you need to submit it by Google forms it's a relatively simple homework that
[02:41] you submit to Google forms and the important thing is to submit it before April 19 which is the last day the red
[02:49] line for submitting the the homework and if you complete the if you attended all the four live webinars a new completed
[02:58] the homework on time submitted by April 19 then eventually you will receive a certificate of completion uh which uh
[03:07] because of the amount of uh participants that we have in this webinars it usually takes about two to three months to send
[03:15] them out but uh but yes if you attended or follow webinar sessions and you completed the homework be sure that
[03:22] eventually you will receive their certificate of completion so these are the course outline the part one we may we have an overview I don't
[03:36] know where view of a hyperspectral spectroscopy data especially specifically from the visible to the short wave infrared then in part two we
[03:46] talked about thermal and lighter data for from Airborne campaigns and we also had a summary of The bioscape Campaign
[03:54] then in part three this past Monday we there were there were some case studies about using Airborne data for
[04:01] terrestrial systems and today we will do similarly but for aquatic systems because the concentration on aquatic systems
[04:11] systems both for Coastal or also Inland aquatic systems again as a reminder these are the learning objectives objectives for the
[04:22] whole webinar series we expect you to at the end to have an understanding of the applications of
[04:30] high perspectral data or multi-spectral data which we also touched on lidar and thermal data for biodiversity monitoring and Analysis and also to be
[04:41] able to compare the different case stories that we have presented including during this uh within this session and
[04:48] that have used previously used data sets in preparation from for upcoming NASA satellite missions and Airborne campaigns that we have mentioned uh
[04:57] previously such as sdg base glimmer and others this is the agenda for today specifically specifically um we're gonna show uh I have a
[05:10] watershed scale monitoring biodiversity a multiple multiple scales using Edna remote a combination of Edna remote sensing our field sampling this is uh Dr
[05:20] Natasha's presentation where uh she's going to highlight the heiris and every single data and analogous satellite data
[05:29] from ecospace and emit and also she would provide an overview of how special scale influences a diverse diversity metrics to inform how
[05:40] we can go from big data sets to more manageable data and then I will be talking about monitoring
[05:49] aquatic ecosystems with uh using images postography and also Airborne campaigns I'm gonna highlight some applications of prism the uh some
[06:02] projects past projects also will highlight the upcoming cyanoscape project which is part of the bioscape campaign that um Wilson talked about in
[06:14] the in session too and uh I'm also going to talk a little bit about Pace Preparatory data as well and as always
[06:23] and at the end we will have the question and answers sessions okay but now well I have the pleasure of
[06:34] leaving you with our guest speakers Dr Natasha stabros she's the director of the earth lab analytics Hub uh
[06:43] Cooperative Institute of uh for research in Environmental Studies or Cyrus from the University of Colorado Boulder so
[06:51] Natasha Welcome to our webinar series and take it away hi thanks so much for having me here
[07:01] today I'm Dr Natasha stabros and I'm going to talk to you about our project in South Africa with the bioscape
[07:10] mission so as you know we are in the sixth mass extinction which is known as the anthropocene
[07:23] anthropocene um it's in the Holocene if you're into paleo ecology um but it's called the anthropocene because the extinction that we're
[07:30] experiencing is because of human-caused global warming which we know of as you know changing climate we're also
[07:40] changing land cover and we're using the land in different ways which increases invasives and effects um in ecosystems around the world and so
[07:51] with this there's been an international effort to conserve biodiversity which resulted in a multilateral treaty for the conservation of biological diversity
[08:02] the sustainable use of its components and the fair and Equitable sharing of the benefits arising out of the
[08:10] utilization of genetic resources this agreement and treaty was legally binding with an obligation to implement and it was ratified by 196 countries
[08:23] in 2010 the UN declared uh that we were going to have an international year of biodiversity which resulted in a decade
[08:34] of uh the decade on biodiversity whereby we developed a strategic plan for biodiversity and conserving biodiversity and the I.T biodiversity targets which
[08:49] included not only the goals but the targets and the indicators that we would measure to see if we were actually on
[08:55] track for meeting our goals the problem was is that we didn't really have a global observation system and so
[09:03] the group on Earth observations biodiversity observation Network geobond created the essential biodiversity variables EBV which is what you see here
[09:14] in the second column and don't worry I'm going to walk you through all of this in more detail
[09:21] but some of these in particular can be observed through remote sensing and while remote sensing is a valuable tool
[09:30] in particular because it offers a top-down view with consistent information and time and space so just a really quick check
[09:40] um you can raise your hand or you can kind of just think to yourself but how many of you have seen a criminal show
[09:48] where they're looking at evidence to try and find who committed the crime and they use something called a mass
[09:56] spectrometer to investigate the chemical compound of evidence so here's a snapshot where you can see they've loaded up some evidence and they're
[10:04] looking at the chemical composition and they're going to say oh is asphalt from this parking lot or is this kind of
[10:11] plant well we can do something really similar with imaging spectrometers which you've learned about in some of the
[10:18] previous sessions but just as a refresher Imaging spectrometers don't measure mass they measure the chemical compounds based on the structure of the
[10:28] compounds and how those structures absorb and Scatter the full spectral signature in the electromagnetic spectrum so what you can see here is a
[10:37] full spectral signature from 400 to 2500 nanometers and several different distinct spectral signatures from Conifer grassland broadleaf Dryland
[10:48] vegetation and non-photosynthetic and you can see how they absorb or reflect here with reflectance on the Y column
[10:57] differently in different parts of the Spectrum which can tell us about leaf water cellular scattering cellulose lignin sugars chlorophyll other
[11:07] essential pigments and so with this you know just to show you the value of Imaging spectroscopy you can compare
[11:17] this to what you would see from landsat or planet and Dove or any of the other sort of
[11:23] multi-spectral broadband sensors so these are broad bands because they're very wide as opposed to very fine and
[11:32] creating the full complete spectral signature signature and so with this very detailed spectral signature we can map the biogeochemical
[11:42] Fingerprints of the Earth's surface and earlier you heard from Phil Townsend who specializes in this work and is a
[11:51] leading scientist around the world for understanding how this biogeochemical fingerprint varies and how we map it but
[11:59] these fingerprints represent functional traits and so here just to give you a sense this is leaf Mass area LMA
[12:09] nitrogen chlorophyll phenolics we can do um um potassium and phosphorus as some other key traits that we can map carbon as well
[12:24] and with these traits let's say we were to measure um here you can see foliage height plant
[12:30] area and canopy height so we look at three functional traits and if we were to look at let's say nine pixels within
[12:38] an area together or here you can see you know a hundred pixels all together and we were to map them in this
[12:45] three-dimensional space of these traits we can understand functional diversity which is defined by the volume of how those pixels sit in
[12:56] that space which means the functional richness how much those pixels uh spread away from the center of gravity tells us
[13:09] about the functional Divergence and how they're distributed and how evenly they're distributed in that space tells us about functional rich evenness
[13:21] sorry functional evenness um and so this is another way that we can measure biodiversity by looking at
[13:29] the functional diversity that we have also functional traits represent and they're called functional traits because they represent key chemical processes
[13:40] like metabolism that facilitate the cellular functions necessary to sustain life and can relate to specific species so here you can see the full spectral
[13:50] signature and these these gaps have to do with water absorption so there's a lot of noise there so we've sort of
[13:57] masked those out but what you see here are the unique spectral signatures of different species and you can see that they are actually
[14:07] quite distinct and sometimes they're more distinct so here you can actually see that Salix which is a willow is very
[14:15] high high in the near infrared whereas when you get a little further out it's more mixed with some of the other
[14:26] species this allows us to map the dominant species of the top of canopy so the trees that are at the highest point in
[14:40] the canopy and we can also relate these to plant communities so here you can see where we're not just looking at the
[14:48] dominant species but we're looking at species that we know tend to um um live together in a community
[14:56] and this can also be distinguished not just from looking at the dominant species but looking at how that spectral
[15:03] signature gets mixed and how it's consistently mixed the same way when similar communities are present going beyond that we can map plant
[15:15] communities communities into habitat so here we took the communities that we saw and this black line was a fire perimeter and you can
[15:24] actually see that we have different communities inside the perimeter as opposed to outside and we correlated this with bird surveys to look at how
[15:34] species richness of birds differed inside and outside of the fire perimeter and we did find a significant difference
[15:45] but conservation management targets Focus not just on select species but species richness or phylogenetic diversity and ecosystem services and I
[15:57] want to take a moment just to Define what these terms mean because it can get really confusing but taxonomic diversity
[16:05] is the diversity of taxa within an evolving and that's a key word the evolving hierarchical nomenclature constructed by taxonomous which means
[16:15] it's relying on Expert knowledge and that that nomenclature that hierarchical nomenclature can change as we learn new
[16:25] information which means that it can be hard to compare in time when something has changed phylogenetic diversity is the
[16:34] evolutionary relationships among taxa where distance is calculated from the differences in the molecular or the morphological characteristics that
[16:44] separate clades and contribute to Branch links in the phylogenetic tree or the tree of life so this is much more
[16:51] genetic genetically driven so we know that this is also an important essential biodiversity variable as you can see here in the top
[17:01] ones and so the question is how do we get there how do we measure um biological diversity as it relates to
[17:08] genetics well a common tool is environmental DNA or Edna which we can get from soil sediment water or even
[17:18] dust in the air it's really easy for volunteers to collect and then we geotag the samples and we process them in a lab
[17:24] and we can do the processing within days to weeks just to give you a sense of what Edna is here's a picture on the on
[17:32] the right and you can see someone's hand and they're holding the sample and a really good sort of rule of thumb is
[17:39] that the sample is about the size of your pointer finger and you go and you collect a little bit of soil and you
[17:45] send it into the lab and they'll sequence all the DNA that they find in there up to hundreds or thousands of
[17:52] species will be found in there the advantages are that we can actually see microbes and other small organisms
[18:00] quite easily which are traditionally very hard to inventory and Edna is really considered a gap filling method
[18:08] it does have some challenges it is what we would call zero inflated data so um what that means is that you're going
[18:17] to get a lot of zero pre like zero presence so a certain species is not present but that doesn't necessarily
[18:25] mean that it wasn't there um and so there's another sort of challenge that some species are missing from the
[18:34] reference DNA database and so one they could be missing from the reference database database or they could just not shed DNA in that
[18:44] specific spot where you collected your sample it doesn't mean that they weren't there and so even with these
[18:50] imperfections imperfections DNA data is a biodiversity barometer of ecological change give you a little sense of how it works
[19:00] um and full disclosure I am not a microbiologist microbiologist um but at a high level it uses meta
[19:06] barcoding and metagenomics to find the signatures of hundreds to thousands of species per sample so you have your
[19:14] sample you do a DNA extraction you pull out key segments of that DNA sample and you relate it with your metabarcoding
[19:23] reference library to find Target groups and to map species and then metagenomics can bend them into broad categories as
[19:32] well just to give you a sense Edna barcoding libraries are vast over 10 million specimens around the world and they're
[19:43] all consistently captured and they're all consistently analyzed which means we can compare what we found here in
[19:49] California to what we see in Australia or India or Asia and South Africa so this is a really great tool because just
[19:58] like remote sensing it's sort of a consistent measurement in space and in time as opposed to a traditional survey
[20:05] which is much harder to compare across the space and time so we know that traditional and citizen
[20:13] or Community science like e-dna collection from volunteers can work together to tell the status of biodiversity on the ground
[20:21] traditional surveys though do traditionally take many months to years to coordinate because they rely on Expert taxonomists
[20:30] and they're really more bio indicators rather than direct species measurements and these can wash out the details
[20:37] needed to study complex biological systems that are influx and changing as we lose species around the world
[20:45] whereas Community science and Edna can rely on non-experts or local experts but it involves more data science with more
[20:54] samples in space and time and so there's an inherent uncertainty that comes with those Collections and so it's really the
[21:02] two of them that can work together to tell us what's on the ground now we know that Edna and traditional
[21:08] surveys can work together we also know that Edna and remote sensing can work together so here in this study
[21:16] um this was across the entire State of California with hundreds of Edna samples relating to remote sensing metrics like
[21:25] topography and ndvi or greenness on the landscape and many others that you can see here and we saw an overall
[21:34] correlation of 35 percent across 700 families so we weren't just looking at two or three key families
[21:43] we were looking across 700. that prediction is quite strong and it definitely varies based on the species
[21:53] that you're looking at or the family that you're looking at when we apply those relationships between Edna Alpha diversity and remote
[22:03] sensing layers we can create these Maps of what Edna Alpha diversity should look like across the entire State and when we
[22:13] do that we can actually see that it it um um core corresponds really nicely with biotic and abiotic drivers of ecosystem
[22:25] and environmental patterns which we use to define these black lines called Eco regions right and so we know that Edna
[22:35] and remote sensing also relate but what we need to know is how Edna traditional field and remote sensing observations of
[22:43] biodiversity relate to each other not just once but across space and time and so our particular case study in South
[22:51] Africa for the bioscape project is to look at and answer this exact question and our hypotheses are are based around the idea that life
[23:04] organizes around water and how water moves and so you can kind of see that here you know we've got our Edna samples
[23:13] and we've got some biotic and abiotic factors and you can see this are the organizational levels um Within geomorphology
[23:23] um and Watershed ecology and Science and how we would think about it in an ecological context from macro systems
[23:31] down to microbial guilds so with that we have three specific questions that we're asking our first question is how are they related how are
[23:42] phylogenetic taxonomic and functional diversity directly related to each other um and with this we our hypothesis is
[23:50] that we do think they are related and we are testing along the Berg and earthy river systems in South Africa
[23:56] and the significance of asking this question is that if they are related we could map biodiversity consistently
[24:04] globally and that regular intervals which means we really have a basis for seeing how biodiversity is changing
[24:12] globally and we could do it more frequently than we have in the past the second question has to do with how
[24:19] these relate in space so does hydrologic structure of watersheds phylogenetic taxonomic and functional diversity self-organized spatially dependent on
[24:32] scale so this really gets at that question of if we look at watersheds and reaches and rivers
[24:39] how does that relate with how we see biodiversity clustering on the landscape and we think that it does that's our
[24:49] hypothesis and the significance of this is that life organizes along understood processes of water movement and possibly how water moves can predict
[24:58] how biodiversity will move as our climate changes finally our last question is how these three measures relate in time and so
[25:12] we're asking the question do Hydro meteorological processes influence the temporal signal signal of functional and phylogenetic and taxonomic diversity
[25:22] that allow us to dynamically map biodiversity biodiversity and we do think that hydromediological processes influence this and the
[25:31] significance of understanding this is that it tells us how we can use and interpret Edna data in a combination
[25:39] with remote sensing so that we can create global maps and so it's helping us with our interpretation along the way
[25:48] go far where we're at in this project is that we've analyzed the bergen-earsty river watersheds in South Africa and we
[25:55] visited our sites collecting data for the first time in Fall 2022 so here you can see the clear polygons represent
[26:03] convex watersheds or watersheds that are influenced by other watersheds and yellow represent watersheds that are headwaters of tributaries that feed the
[26:14] burgundy or sea so they're true watersheds watersheds um um and of course at any one of these sites
[26:20] these different color codes represent how many samples were taken at each point point in preparation for our fall 2023 flights
[26:30] over South Africa um we are doing analyzes to better understand remote sensing metrics of functional diversity across scales so
[26:41] here you can see in this 2017 nature paper paper that depending on the resolution and the scale at which you calculate your
[26:51] metrics you could get very different functional richness Divergence and evenness and so what we're doing is a
[26:59] spatial analysis to better understand the spatial covariance so things like topography and other metrics like community ecosystem Community affect how we
[27:14] calculate these metrics and then our intent is to then standardize or normalize by those spatial covariates so
[27:24] that you can get a metric of biodiversity that you can compare from one location to another independent of
[27:31] the scale at which the metric was calculated calculated so how can this work really benefit you um especially from an application's
[27:40] perspective we're working to establish a framework for better understanding how different observations of biodiversity relate to inform conservation management
[27:48] and improve monitoring by better understanding the phenomenon that drives spatial and temporal patterns of different observation types
[27:57] we can better account for them in biodiversity reporting and the tangible outcome that all of you can expect is an
[28:05] open source software package in Python that enables anyone with access to Imaging spectroscopy and thermal infrared data which is coming globally
[28:13] and will be freely available in the late 2020s through the NASA surface biology and geology mission to extract remotely
[28:20] send spatially consistent metrics of functional diversity so that you can look and see how your management is working to meet functional diversity
[28:32] goals goals so with that I do want to acknowledge and say many thanks to our team which is
[28:40] much bigger than just me we had our field team who you can see here in all of the
[28:46] pictures in South Africa as well as our collaborators some of whom you will hear from in other sessions for this training
[28:55] so with that I'll say thank you and open it up for questions thank you so much Natasha for that
[29:07] presentation it's super interesting the connection between Edna and remote sense data how you can go from from Big to
[29:16] more to smaller uh data sets as well so thanks again for providing the all that valuable invaluable information for
[29:25] our to our participants and now uh let's continue with some examples on the use of prism for uh Coastal and Inland
[29:34] Waters applications and we will also briefly mention some previous projects that have involved the use of uh
[29:41] specifically of average Ng for uh for aquatic applications so here's a mission that I that I have
[29:53] mentioned very briefly in past webinars we did mention it during the hyperspective one um it's a mission that uh use
[30:02] hypertensional data from Prism in this case case to map coral reefs and uh so actually the the name of the mission was made was
[30:12] Coral stands for coral reef Airborne Laboratory Laboratory and the goal of coral was to provide critical data and new models that are
[30:21] needed to analyze the status of coral reefs and to predict their future status Coral provided the most extensive
[30:30] picture to date on the of the condition of a large portion of the world's quarter weeks from a uniform data set
[30:39] and the spectral resolution for this was about 350 to about a thousand nanometers with a bands that were sampler sample
[30:50] around 3.5 nanometers so this is the the the prison Spectra resolution typical Spectra resolution core are acquired Airborne spectral
[31:01] image data with prism installed in the uh Gulf Stream 4G the G4 and this was concomitant with the
[31:12] flights there was a lot of in-situ data that was obtained to validate the remote's observations so for each Reef
[31:20] spectral image data were process to provide the reef condition described by measurable quantities of a ventic cover
[31:30] of algae coral and sand uh there were also calculations so primary productivity and also uh calcification calcification um which is over the uh derived from the
[31:45] from the in C2 and the hyperspectral data data um so these three Reef condition parameters were analyzed quantitatively
[31:54] again against 10 different key biogeophysical parameters using new models to understand the conditions today and to predict the brief
[32:05] conditions in the future so for instance for each uh square kilometer of reef Coral generated about 10 000
[32:14] observations on Bentley cover primary productivity and calcification uh and by 10 000 I mean 10 000 pixels or of about
[32:26] 10 by 10 meters square the uh in in between between 2016 and 2017 uh Coral flew over key Reef areas
[32:40] in the Pacific Ocean including the Hawaii the Mariana Islands Palau and also the Great Barrier Reef and as you
[32:49] can see here from the from this survey map on on the left you see all the the
[32:55] areas where the data was collected from the coral mission on the right you can see a color image in this case here
[33:04] from Northwest Highway where hyperspectral data were used to create a classification map which you're looking at here and on the right hand side on of
[33:16] the locations of main Bentley components so basically coral and algae and Sam and see you can see the difference here in
[33:25] terms of the of the corals for classification of this specific image from Hawaii now the quarter research group conducted
[33:38] a series of field campaigns at the story size in the Pacific as I mentioned earlier which included the collection of
[33:45] spectral libraries from the main Reef Bentley components and this is technically what you're seeing here in this uh in this graph
[33:55] around the middle of the slide uh they also collected data on the in water characterization for uh
[34:05] uh uh inherent Optical properties and also apparent of the optical properties oh they also did um diver operated video transects uh
[34:16] collection for Bentley cover analysis in much more details detail and they also measured uh primary productivity within
[34:25] situ data loggers all this data were used then to for calibration and validation of the prism images
[34:34] images which in turn were used for benthic mapping of the system and what you're seeing here in the middle figure
[34:43] and at the also at the not only at The Reef level but also Island on Regional levels as well as estimations of primary
[34:52] productivity and calcification as you're seeing here in the in the bottom map on the left hand side
[35:03] now the image on the right shows up uh celldo this image in particular the top one uh cellulo RGB composite of the
[35:14] Heron Reef in the Great Barrier Reef obtained by the coral group and the two figures below they showed two different
[35:23] approaches for benthic classification uh used by the team namely the hyperspectral optimization processing Exemplar we look up tables or hope loot
[35:37] um and also the bottom reflectance of of mixing computation of the environment or Bruce Bruce uh models here's a uh the paper by
[35:49] Garcia roll that you can then you can refer to that has a lot of more information about these two different
[35:56] models models um here's a two different regions region and what we're calling here all about the other score here on a uh and B
[36:06] and it highlights the inner Lagoon in this case and the reflat uh here respectively and the highlighted reunion
[36:14] B here are bright green patches that are likely to be uh benthic magma micrology so you can see that depending depending on
[36:26] which of the models were used they they were able to obtain different details about the rift composition and for in
[36:36] this case for Heron Reef now previously we saw the graph that I showed in the in the earlier slide with
[36:49] some Reef Bentley components on their spectral similarities or differences as well as some of the data collected by
[36:55] the by the coral uh project team here's a recent data from a recent paper published by by Tom Bell uh at all in
[37:04] 2020. 2020. and uh and that includes also some of the ecois of the coral team and what
[37:12] they did is that they simulated the ability of a spare Bond a spaceborne hyperspectral sensor in preparation for
[37:19] the for the upcoming missions to accurately map the fractional cover of coral reef banking classes under different water quality conditions and
[37:28] depths using a semi-analytical process um um the using the hydraulic radio radiative transfer transfer model and also what's
[37:40] known as the multiple end member spectral mixture analysis or mesma to estimate uh cover they obtain best the best results for
[37:49] shallow Waters of our less than three meters in depth for most typical uh relief water quality condition
[37:58] conditions and proposed that a Dev of more than five meters should only be classified under low chlorophyll and low
[38:07] sediment concentrations but in short mesma uh the the the the model that was used for this particular
[38:15] uh paper mesma uses multiple class specific Representatives as spectral signatures signatures to model each image pixel and to
[38:27] determine the optical combination of M member fractions and the technique was developed and tested uh originally with average data
[38:36] with average classic data by robots in the late 1990s it's actually to map North aquatic system but to map a
[38:46] Chaparral environments but since then has been applied to a number of other uh both terrestrial and Aquatic ecosystems
[38:55] including Kelps and also by Reef environments such as uh the people that we're highlighting here from uh dumbbell at all
[39:07] um in in the paper and this one specifically in this paper the authors also pointed out that the the potential
[39:14] advantages of having new hyperspectral satellite-based systems such as the upcoming missions of sbge and base for assessing uh glimmer processing uh
[39:26] changes in multiple spectral scale and also at multiple temporal scales and also remember that glimmer is another
[39:34] one of those uh upcoming missions uh from NASA in the near future now here's a similar application of the
[39:46] prism data in this case from the works of Dr Heidi dierson's lab from the University of Connecticut where in this
[39:55] case uh they applied a prism data to Sea grasses occurring in the alcohol SLU in Monterrey Bay here in California and
[40:05] these are communities that are dominated by the eelgrass uh sostera Marina which is a common sea grass in in temperate
[40:13] Waters Waters and the aircon slew is a it's a tidally force and payment that extends for about
[40:20] five kilometers in length and about 200 meters uh across and here the at the slew the water Clarity bar is during the
[40:28] day depending on the tidal cycle and the seagrass community is usually extend to about four or five meters uh in depth
[40:36] so this time uh the producers group applied The Hope model that we mentioned earlier for for some of the Quran papers
[40:44] uh to discriminate between eelgrass and sediment or also uh deep Waters deep water areas and uh hyperspectral
[40:55] data from Prism shows the subtle differences as what where he and we're seeing here in the in these uh top
[41:03] graphs graphs to discriminate both bottom types discriminate between eelgrass and and also sediment or deep Waters so on the top graphs we will see the
[41:18] some of the similarities here uh between the specifically between the field data collected with a field spectral
[41:26] heliometer and the prism data and you can see that the graphs look very very similar there's only for instance for
[41:32] eelgrass it's only uh the difference is mostly in terms of the magnitude but not necessarily on the shape of the curve
[41:39] which is what's what's typically useful for uh for discriminating between different ventic types so as Adam Wilson mentioned in in the in
[41:54] session two specifically of this webinar series the upcoming bioscape campaign will involve efforts aim at characterizing characterizing the biodiversity of the rest here and
[42:06] Aquatic systems in South Africa now we're going to provide an example of one of the Aquatic projects
[42:13] called cyanoscape and uh but also we will highlight briefly other similar efforts that have used uh in this
[42:22] average engine in the past to monitor the occurrence of a phytoplanton blooms in this case in the Mississippi Delta
[42:33] now cyanoscape is one of those one of the two uh aquatic projects funded through uh bioscape campaign
[42:48] and it's a concentrated on the Discrimination of phytoplankton communities and Florida floating aquatic vegetation vegetation in the Inland Lakes in South Africa the
[42:59] project is led by uh Liang and Jerry mcravitz and myself from the NASA Ames Research Center and also from
[43:08] a number of other colleagues from the Council of a scientific and Industrial researchers or or scissor and the University of Benda and we have
[43:20] all of them uh mentioned here in Murray Smith listen laying uh Wilson [Music] [Music] I'm from the University of Benda so
[43:31] thank you everyone and specifically thanks Leanne and Jeremy for providing what I will be presenting in the next uh
[43:38] several slides foreign foreign ton biodiversity of South African freshwater systems is not well characterized characterized anthropogenic practices have hindered uh
[43:54] hydrological processes and compromise rivering and Aquatic systems and this impacts are compounded by the effects of increasingly variable rainfall and
[44:04] temperature fluctuations associated with climate change another biodiversity of freshwater phytoplankton in this Lakes includes cyanobacteria and some of those can be
[44:18] harmful harmful so the increased incidence of cyanobacteria are also other harmful algal blooms conditions is related to
[44:26] nutrient over enrichment from agriculture Urban and Industrial practices and climate change harmful cyanobacteria can produce toxins such as a microcystein that can cause a
[44:40] hepatic or liver diseases or even neurotoxic effects in humans and animals and can even lead to mortality
[44:50] uh electrophic conditions are also conducive of uh to invasive fluorine aquatic vegetation like the water hyacinth the overgrowth of this water Hyacinth
[45:04] can suppress native species and can affect water chemistry and provide habitat for disease vectors such as mosquitoes or snails or others
[45:16] so that's that's the the importance of doing this kind of uh projects such as like say a cyanoscape for understanding
[45:24] the conditions of Inland Lakes in this case in South Africa now the main goal of cyanoscape is to use hyperspectral data most likely
[45:35] prison but potentially also arisenji with a recently developed and the Next Generation algorithms to determine the biodiversity of freshwater systems and
[45:46] phytoplanton communities with emphasis on the potentially doing a distinction between the genus level including also potential sign of toxic cyanobacteria
[46:01] and also to monitor the prevalence and diversity of flowing aquatic vegetation uh in these environments this is uh just to go over some of the
[46:14] objectives of this specific project cyanoscape is one of the objectives is to apply and test the capability of
[46:20] published and Next Generation algorithms for high perspectral anniation of phytoplankton assemblages and fluorine and quality vegetation biodiversity so
[46:30] it includes a remote sensing data from built on in historic time series from Mary's landsat Sentinels bodies beers and others and also
[46:45] opportunistic data and satellite data collection during the actual Airborne Campaign which will happen between October and December of this year 2023.
[46:56] and that's what we will see in the in some of the of the upcoming slides one important aspect is to make sure that
[47:02] the data collected on the site is within plus or minus one hour of the actual uh or saturnal satellite or Airborne
[47:11] overpass overpass and like I mentioned this is mostly concentrated with my address and prison data and uh so we will use uh radio
[47:20] relative transferring model to produce a synthetic data set to train an emulator to Output water quality and phytoplanton
[47:30] functional types and uh there's also a lot of machine learning and artificial neural network Concepts that will be used uh for
[47:42] particularly for the uh for analyzing the phytoplendon communities and uh to come up with a different phytoprandom functional types
[47:52] and uh we will also map a floating a project vegetation in connection with the with the potential connection with
[47:59] cyanobacterial blooms the other objective uh is to monitor the firebanton community and the flooring aquatic vegetation biodiversity and and
[48:10] this uh specific objective focus on the actual field campaign and there's going to be several stations doing the
[48:18] different over flights and during and each civilizations we're going to collect uh field spectroscopy with a field spectral heliometer and also
[48:28] there's going to be a number of instruments that will be in the water to collect uh data on apparent Optical
[48:34] Properties or aops uh sampling water sampling for analysis of phytoplankton and cyanobacteria and also for uh we
[48:43] will do atmospheric Corrections uh we collect data for atmospheric correction as well there's also going to be some samples
[48:52] that will be collected and uh for specifically for identification of fibroplankton and cyanobacterial communities using uh flowcamp or which
[49:03] are flow image in microscopy and also uh some of the water sampling will be used to do an analysis of chlorophylla and
[49:15] also analysis of pigments using high performance liquid chromatography or hplc so here on the on the right hand
[49:22] side you see an example of some of the uh some of the organisms not only cyanobacteria but also uh dinoflagellate
[49:33] stack can be part of the phytoplanton community community in some of these Lakes so these are the the sites that were
[49:44] proposed for cyanoscape I'm going to go over the details of each of the sides but you can see that some of them are
[49:50] located even within the boundaries of the of Cape Town some of them are more located on the and the uh other parts or
[49:58] more to the to the South or to the east of Cape Town some of these sites are natural sites
[50:04] some of them have been have different dams being used for power power or high reluctive power so there's a there's a
[50:14] variety of diversity of different sites here that I have that are influenced by by different conditions depending on
[50:21] which side we're looking at so here's uh uh or some considerations uh that that uh that we need to take
[50:34] into account when planning an Airborne mission for particularly for aquatic systems systems and I remember that when you're dealing
[50:43] with aquatic systems uh one of the the main things I have to be considered is that the water column can change at any
[50:50] moment moment so it's uh it's very important to collect data within as close as possible to the to the either the satellite or
[50:59] the the or the Airborne instrument overpass overpass now other things I have to be considered when you're doing the flight planning
[51:07] for social mission is to try to avoid as much as possible or avoidal have some greens and what is Sun green some green
[51:13] is a phenomenon that occurs when the when the the the sun reflects a of the surface of the water body and at
[51:23] the same angle that the sensor is viewing the surface and the immediate effect is to see the water surface as a
[51:30] kind of like a silvery uh color instead of a typical Dark One therefore the solar geometry has to be
[51:39] considered when choosing the time of the day day for the sensor to do the the overpass also the presence of Rough Waters
[51:48] without White Caps will also affect the image acquisition and usability and uh it's also important particularly for
[51:58] sizes that are relatively small such as the ones where where cyanescape is uh concentrated concentrated to have a cloud-free data or nearly so
[52:09] uh for uh when when it's been collected also usually um less than 10 clouds are ideal but uh
[52:18] but like I said this is influenced by the size of the study site or the water body since
[52:25] specifically especially smaller sites might be completely covered even even if the overall cloud cover for specific overpass is relatively small
[52:34] therefore therefore the flight lines have to be optimized in order to obtain uh science quality data and this
[52:43] includes uh The Heading of the nose of the aircraft into and out of the Sun for Imaging and flight lines that are
[52:52] flown flown uh within plus or minus of the Iowa of also minus one hour of the of the field
[52:59] campaign so you have to you have to uh make sure that they both uh match when you you have the people on the field
[53:06] collecting the The Institute data at the same time that the airplane is or the satellite is passing uh over the the
[53:15] story sites foreign aspect also that influence influences uh Airborne data is um is the what's known as the aircraft
[53:32] pitch role on your and uh and for those who are not you know familiarized uh with this uh terms
[53:40] when you pitch refers to the aircraft nodes going up or down roll are the wings going up and up or
[53:48] down a little bit and your is the aircraft heading um influenced by by the way so it's
[53:54] called it's a left or right uh Direction um these uh aspects may impact some of the Airborne sensor performance and and
[54:06] these are some of the experts that are that that typically obviously are not considered for satellite missions but
[54:13] are very very important for Airborne campaigns here's a paper by by Dr a role from from 2020
[54:23] where a lot of these information is covered in much more detail and I encourage you to take a look at that
[54:31] paper for more details about specifically about Airborne radiometric for calibration and validation uh for Coastal I mean or Inland Waters
[54:42] foreign flight planning for a window uh of uh of days in this case uh for the actual uh proposed field
[54:57] campaign between October and and December December would like to thank the Milos from nsyns for providing this
[55:04] this uh map and uh and the map on the right uh this one shows the optimal direction of uh
[55:14] for flying for better data acquisition based on the factors that we have discussed earlier since that that may or
[55:22] may not affect the uh data collection it's uh for aquatic systems and also to um um to avoid some clean in particular you
[55:33] have to be sure that the song elevation is within the range where where you wanted it typically an acceptable song
[55:42] elevation for for uh revolution's data collection but aquatic systems is about 30 to 50 degrees you see here that uh that all of these
[55:52] are the different flight lines that are uh uh so far proposed for each of the sites and uh and what you see in red is
[56:02] the actual the different flight lines and then what you see here on the uh kind of bluish uh color box uh will be
[56:10] the actual swath that will be covered once the playing goes in in in either of these directions
[56:20] now this is the same map uh but adapted for a specific date and you can immediately notice uh how the heading
[56:31] varies uh depending on the date so if you go back if you go back to the previous map we had some example dates
[56:40] here of uh let's say October 23rd November 8th or December 4th and uh for instance if let's say just we selected
[56:50] uh randomly one of the dates as a November 8th and uh and you see that the The Heading of the is here on the of the
[56:58] airplane about 89 almost almost 90 degrees the uh in the the true Direction versus the magnetic one and uh and and at the start
[57:12] of the flight line and then on the end you see how it changes because you can again you have to be sure that it's it
[57:18] it's within that uh song elevation which you know changes constantly during the day and then specially and then for
[57:26] a different date in this case uh uh for October and you see that it has a different uh asymmos you know that it
[57:35] will depend specifically on the date so it it's it's very very important to make sure that you that this is covered
[57:43] during the flight planning otherwise uh uh you you don't know if the type of data that you want will be the one the
[57:51] uh the one that is actually being collected now why the the specific Lakes were chose for for the cyano campaign those
[58:04] legs six legs that I mentioned before were were some of these are Inland water bodies are dominated by distinct phytoplankton
[58:13] communities or by floating aquatic vegetation and uh which uh reflect at different wavelengths in the visible and
[58:21] the infrared spectrum and here's data in this case this is a data from Sentinel um by Jeremy Kravitz and uh
[58:35] this is from two of the study sites uh ball play and the water score and uh and when you see here that uh in this
[58:44] case he applied three different indices the normalized difference chlorophyll index the maximum chlorophyll index and the floating algal uh indexed MCI and
[58:56] ndci are are fairly similar to each other uh for the floating algal index uh so you see here also uses a different
[59:04] band which is more into the almost into the short wave uh infrared so floating algal index uh will
[59:14] specifically specifically aim to capture as as the as the name implies uh flooring aquatic vegetation at a first glance we can see that
[59:26] there's uh there's more similarity between uh in this case uh ndci in black and MCI in blue
[59:36] and uh then with the floating aquatic vegetation and what this uh indicates you can see here in some of the the the
[59:44] the the curves they follow pretty much the same pattern uh usually we don't increase around the around the what's the around the summer
[59:53] month months in the in the southern uh hemisphere hemisphere and uh and these are uh similarity between ndci and MCI
[1:00:04] uh as opposed to with the floating uh uh following algal index uh indicates that during certain times of the year these
[1:00:12] Lakes might be influenced by a diverse phytoplantic communities now here's uh some of the some of the
[1:00:23] other lakes and replay um um I wanted I wanted you to know here that uh uh Michael blooms during the during and
[1:00:34] after the hot summer months and receding into the uh winter season happened during in some of these lakes here this
[1:00:42] is what a specifically what is shown here in the in the in this uh parts of the graph
[1:00:49] um with the with a with a with a an increase in the uh ndci and MCI during
[1:00:56] those months as opposed to the following algal index versus in some of the other Lakes Lakes um you can see that it's quite the
[1:01:05] opposite during those months of the year there's an Inc uh where uh whereas capture is an increase in the floating
[1:01:12] algal index and uh and this definitely could imply that there's floating aquatic vegetation or even better influence from the from from the water
[1:01:23] level change uh depending on how of the clarity of the water but this is a this could be a clear indication there and
[1:01:32] and at least in the case of this Lake as opposed to uh sick of lay here during
[1:01:37] those months there's a dominance of floating aquatic vegetation and not necessarily uh uh of the on the other
[1:01:44] types of uh of uh phytoplankton communities here's a similarly and in this case we're comparing ndci only for all the
[1:01:57] different uh dams all the or all the different uh lakes and uh and again remember that the summer months are
[1:02:07] usually uh uh are on uh January or you know December January uh and uh February March of each year in the in the
[1:02:19] Southern Hemisphere and again you see that in some Lakes there there's uh specifically here in the encycloplay
[1:02:26] there's an increase there's a pattern here where uh pretty much during every single year you see the increase as of
[1:02:34] as the summer months start see an increase in the uh in the uh ndci indicating that increasing the popular
[1:02:41] different populations of phytoplankton in the in that specific like and if we do assuming of uh for specifically for the time
[1:02:53] where for for when this field campaign is being proposed you see the you see the pattern here it starts around uh
[1:03:01] October or so and then there might be a little bit of a decrease during some months but but it
[1:03:09] actually stays pretty constant uh uh between October and January uh office year which indicates the uh the presence
[1:03:19] of some of these uh phytoprilateral communities communities potentially also including some of the cyanobacteria communities now again as I mentioned there's a lot
[1:03:32] of factors that you have to take into consideration when the when doing uh Fields such a field collections
[1:03:40] um like I said very important to have a to do the The Collection between plus or minus one hour of the overpass
[1:03:49] uh to make sure that the song elevation angle is around between 30 and 40 degrees to avoid the Sunland
[1:03:58] and that uh that the aircraft flies in into and out of the uh of the Sun in this case where when in October
[1:04:08] November and and the first week of December when when the actual campaign will happen this year um there's a lot of other instruments
[1:04:16] that will be in the water to collect ready metric data um also more in systems and like I
[1:04:24] mentioned we're going to collect water samples for chlorophyllate ficocyanine which is indicative of uh of some types
[1:04:31] of cyanobacteria and uh also for hplc analysis for for uh other pigments measuring other pigments composition and for the different uh
[1:04:44] aops and iops uh upper and Optical properties an inherent Optical properties there's our other instrumentation that will be
[1:04:54] collecting different types of data absorption attenuation Backscatter among others uh here in these photos we wanted to show
[1:05:04] you uh how potentially some of these Lakes may look like this is actually from here from California
[1:05:11] but uh but this is from the previous uh history campaign where we went to where our site was
[1:05:19] Pinto Lake in in within the Monterey Bay region in California and uh and here you can see the there's a lake that is
[1:05:29] influenced by different types of phytopolitan communities and uh and a lot of times you see this kind of
[1:05:35] science or you know no fishing or or even you know no swimming or anything in the lake because
[1:05:42] um some days it can it can be relatively clear the water but when these blooms happen it may look like something like
[1:05:50] this and it's uh and like like I said some of them are harmful or even toxic so uh the people are definitely
[1:05:58] encouraged to stay out of the water uh during those days foreign this case using data obtained from uh
[1:06:13] from the average classic sensor uh flowing over over Pinto Lake uh close to Monterey Bay in California during the
[1:06:20] experience Preparatory campaign as I mentioned again this is a photo that I showed in the previous slide
[1:06:27] and Pinto Lake uh just so you know uh those who are not familiarized with it's an inland Lake influenced by different
[1:06:35] types of phytoplanton community some of the install tarpses toxic as I mentioned uh depending on the time of the year
[1:06:44] so here's a paper where uh well it was also one of the collaborators but it was uh led by race godela from UC Santa Cruz
[1:06:52] where three different algorithms were applied applied uh based on historical in situ data collected collected by by Dr Ray
[1:07:02] kozella's group from from the University of California in Santa Cruz and uh the photo here on the lower left as I
[1:07:11] said it shows how the leg looks on a typical day with high cyanobacterial concentration so definitely it doesn't
[1:07:19] look you know that good for for swimming or anything like that and uh in fact uh like I said the lake test signs uh for
[1:07:29] uh so not to drink or swim in the water but the graph on the right uh I wanted
[1:07:34] to grab your attention here because what it shows this graph is how peaks in uh phaco cyanine chlorophyllium and
[1:07:43] microcysteine uh also start operating appearing right after the peak in the water temperature here's on the top
[1:07:50] graph here's the water temperature and here are the peaks of uh of uh chlorophyll and phycocyanine and in the
[1:07:59] bottom graph microcysteine and you can see there's a there's a pattern there so right after you start the the water
[1:08:06] temperature Peaks that's when you see some of the so the appearance of some of these uh organisms there's a bit of a lag time
[1:08:17] there uh which is most likely due to the time it takes for these populations to to reproduce but there's a there's a
[1:08:23] pattern that uh that it's uh it's pretty obvious now this time the the average sensor was flown at
[1:08:35] um 65 000 feet on board the the NASA the year two aircraft and there are provided a
[1:08:42] special resolution of about about 17 meters of a pixel size and uh but with the advantage of the the
[1:08:51] average high perspectral data the the three different algorithms were were applied uh to distinguish the distribution of different communities
[1:09:00] through the lake and this is what you're seeing here in specifically in this in these two different uh Maps
[1:09:08] uh where uh this one shows uh uh uh the scattering light height for Pinto Lake and the warm colors here uh indicate the
[1:09:20] probability of a cyanobacterial bloom and this was validated within situ data similarly here uh for this here's uh the
[1:09:29] one of the other algorithms that was applied to the data this case a cyanobacterial index and again it shows
[1:09:37] some of the other potential areas where uh the cyanobacteria could be found in this uh this Lakeway
[1:09:47] again here's the paper as a reference so uh for those of you who are interested please make sure that uh that
[1:09:56] you uh go get into uh find the paper and you will have much more information about about uh this uh field campaign
[1:10:05] that was conducted some Years Ago by our group here's some some experimental data obtained from with the average NG in
[1:10:16] this case from the over the Mississippi Delta it's part of the uh what is known as the Delta X campaign
[1:10:24] uh to calculate uh different parameters specifically cdom chlorophyll attenuation attenuation beam attenuations 670 millimeters and uh the number 66 here that you see
[1:10:41] on the on the bottom one uh shows the only in situ data point that was collected during during this campaign
[1:10:49] um but the the estimated values are within the range of what is expected for for this area so so far the products
[1:10:57] looks are promising especially after applying some of their song removal processes um but uh but there's definitely there's
[1:11:08] a lot that still needs to be done with uh with such data now here's uh again data provided by by
[1:11:20] Jeremy where he used uh chlorophylay specific absorption data from 75 different uh uh species collected from in different labs
[1:11:31] uh throughout the world and what is shown here are the absorption uh curves normalized by biomass and with with these he
[1:11:43] calculates the imaginary reflective refractive absorption indices and then there's a derivation of real refractive indices to eventually
[1:11:59] derive species specific inherent Optical properties and in this case the data includes uh species from diverse groups
[1:12:11] including uh green and red algae different types of cyanobacteria among others this is how the spectral Library uh
[1:12:24] created by by Dr Kravitz looks like for this case for two specific type of cyanobacteria cyanobacteria commonly represented by a blue or red
[1:12:34] mode depending on the type of pigment that dominates the composition whether it's a phycocyanin or phycoed3 and uh
[1:12:44] and um in this case in the case of phycocyanine the uh has a characteristic Peak absorption around 620 nanometers
[1:12:54] versus the red types are which are dominated by FICO erythring has a distinct absorption Peaks uh more into
[1:13:04] the blue ring blue green region of the spectrum as you can see here the lines show the actual lab data
[1:13:15] on which the spectral libraries are based on now these diagrams here summarize some of the aspects that are needed for these
[1:13:28] uh specific types of campaigns Airborne data is combined with a matchup data uh with the in C2 but specifically easy
[1:13:40] to uh uh data for validation through and then through a machine learning processes um uh the data is used to obtain an
[1:13:52] assessment of the constituentless constituents of the water column in such Inland very complex Inland Waters and some of the some of the parameters can
[1:14:06] be chlorophyllate different Optical water types the presence or absence of different different uh constituents such as cdom quarterly soft organic matter
[1:14:17] um the scum was produced by cyanobacteria or also a non-algal particles among others as mentioned uh before these types of
[1:14:33] opportunities provide for assessing the presence of a phytoplankton communities floating aquatic vegetations such as the ones that we're seeing here and other
[1:14:46] constituents like and for instance in this case this uh map on the bottom half shows uh the con the concentration of
[1:14:56] non-aquatic uh non-algal particles I mean mean um um as you can see here so in summary uh Airborne campaigns are
[1:15:10] tied with intensive field efforts but these provide a unique opportunities for characterizing not only terrestrial but also aquatic ecosystems as we have
[1:15:21] seen in the in the previous session and also in this session the selection of sites are usually based
[1:15:30] on the needs and accessibility and flight planning is critical as it may may represent particular challenges such as such as the ones that we
[1:15:42] mentioned mentioned especially for aquatic targets now uh things that have to be considered also during the the planning of a
[1:15:51] mission are for instance the phenology the seasonality atmophilic conditions Etc a bunch of different different factors that need to be considered
[1:16:01] depending on whether your target is a terrestrial or aquatic ecosystem and for aquatic Targets in particular the Field Works definitely needs to be
[1:16:11] aligned with the Airborne campaign and and also other satellite overpasses because of the constant changes in the
[1:16:20] water column composition if you wait several hours or even on the next day after the the the actual uh flight uh
[1:16:30] overpass you most likely have depending on the side you will most likely have a different uh composition
[1:16:38] of the water column so it's critical to have the field campaign aligned specifically aligned with the Airborne
[1:16:46] campaign campaign and and then then as we mentioned with some of the some of the Dr Kravitz area analysis and model
[1:16:54] modeling facilitated by Machine learning techniques can help processing such large data sets that are usually collected by Airborne sensors
[1:17:07] here's some of the some of the websites that we have mentioned before but it's uh as always uh always uh good to to
[1:17:16] mention them again where you can find information specifically about the different sensors that we have highlighted during this webinar series
[1:17:26] and also on upcoming campaigns such as space space and others again here's a contact info of uh myself
[1:17:38] Amber Brittany and sativa um uh here's a the the web page for uh for this webinar remember that all the
[1:17:48] different materials the presentations the homework right uh will be it's available right now during this last session and uh everything about this
[1:18:00] webinar you can find on on its web page and as always we want to encourage you to also visit the RC webpage
[1:18:08] so that you know about not only upcoming webinars but you can also do a search on past webinars and then you can obtains
[1:18:17] uh the presentations and uh even for those who have that have a Hands-On exercises also so some of those
[1:18:25] for your benefit and uh we also encourage you to consult our sister programs of develop the capacity building program for undergrad
[1:18:35] recent grads and grad students USA helps with this with the coordination of projects and as always uh we encourage you to follow us on
[1:18:54] Twitter at the NASA rset uh so that you are you have an idea of the upcoming webinars in the NASA in the next few
[1:19:06] months months and stay up to date on what's coming next next and with that let's go then to the
[1:19:14] question and answer sessions thank you very much okay so let's see this one again let's see if I ever selling if you can share
[1:19:24] with us the the question and answers uh document we've been receiving quite a number of uh questions on uh of both the
[1:19:35] case studies or projects that were presented today and uh we have uh our our guest speaker Natasha with us and also our uh great
[1:19:46] contributors as well from the aims Research Center uh Vienna Jeremy we're also help answering some of these
[1:19:53] questions questions [Music] [Music] um um we can go we had a quite a crowd today even more than 500 people connected uh
[1:20:02] in this last session of this uh we're in a series so thanks everyone for all your support uh let's see question number one
[1:20:10] then uh the Assumption of testing the the adna to connect the existence of a species is that those species left
[1:20:20] something on that sample of soil what radios from the soil sample um convey infer certain species exist
[1:20:30] based on the sample soil or something like that I think I think Natasha that you answered this can you
[1:20:38] feel free to uh to uh I'll mute your uh your microphone if you want to go live
[1:20:48] yeah hi thank you can you hear me yes perfect okay great yeah so um this is one of the recognized disadvantages of
[1:20:57] ebna ebna um so for example plants don't shed DNA much even if you collect a sample at the
[1:21:04] base of a tree you might not get a signature for it um and so this is why it's so important
[1:21:09] for us to map biodiversity using all of these different techniques the ebna the field observation and the remote sensing
[1:21:16] not one but all because they all have their own limitations and so by using them all we
[1:21:22] are able to kind of get the complete picture of what's actually on the ground and so that's why this particular case
[1:21:30] study is so important because we need to understand how they relate to each other um so that we can use all of them
[1:21:38] uh synergistically excellent excellent I think this one also is also for you Natasha do you think that what they see is regarding
[1:21:47] hydrologic uh relating to diversity holding areas that are not water limited such as a topical systems yeah I think this is such a great
[1:21:58] question and to be honest with you I really don't have the answer um we put we chose and started in
[1:22:05] Mediterranean climates one because that's where we were living um so why not start close to home and
[1:22:12] something that you know and um it's also where we had data um and so we were able to kind of start
[1:22:19] asking this question there but based on the literature it would be reasonable to hypothesize that life still organizes
[1:22:26] around water availability however it's also worth testing this hypothesis because not all species need to get water
[1:22:37] the same way and so what water availability looks like and how that's organizing could influence what this
[1:22:46] looks like from remote sensing in very different ways um and so I think it's a really interesting question and um
[1:22:55] yeah we don't have the answer all right yeah I agree supporting just a question and uh it seems that there's a
[1:23:03] lot still to be done in that uh that uh specific theme um yeah uh could you please repeat the
[1:23:12] name of the python packaged for you yeah we don't have the name yet so we welcome any
[1:23:20] inputs uh that you all might have um and uh I don't know I'll I'll list something here as for how maybe I'll put a Google
[1:23:32] form up and you can put your your name suggestions in the Google form I'll do that in a second on this sheet but
[1:23:39] um we don't have a name and it's not we're not close to releasing it right now we're still doing the preliminary
[1:23:44] analyzes and so we're expecting it in summer 2024 so we've still got a whole year before we get there and then just
[1:23:51] to answer the next question which is how will we publicize it when it is ready um and we will publish it through our
[1:23:58] manuscript and through the um through zenodo or Joss which is an open source software software um database of different
[1:24:07] um softwares and it'll likely be reviewed through Pi openside which is an open source community that reviews code
[1:24:15] um and does all the checks on it we'll put the package on GitHub to enable the community contributions and support for
[1:24:22] maintenance through time but maybe the best option for this is to follow me at on Twitter or on LinkedIn and I'll put
[1:24:34] my LinkedIn information there as well and of course when it becomes available we'll make an announcement all right thanks
[1:24:44] um I think the next one is also for you is it possible to plot genetic Evolution Mass migration and this kind of special
[1:24:51] Pathways into our Eis yeah so that's a it's a really good question to my knowledge um Edna is really good for understanding
[1:25:00] genetic Evolution however I mentioned I'm not the micro we have a microbiologist on our team and I've
[1:25:08] tagged them on this question in the Google Doc and asked them to jump in to answer but unfortunately I don't have
[1:25:13] the answer to this one the next one or question seven until they're able to jump in the document but we will get an
[1:25:21] answer for when these questions go public public okie dokie so stay tuned yeah sorry so uh I want to make sure in the few
[1:25:33] minutes that we have left that we take some uh questions that were also in regards to the other uh case studies
[1:25:39] that we uh mentioned um question eight was about uh the study that I uh highlighted from heidierson on
[1:25:48] on third group on the Monterey Bay on the aircon Slough it's asking about the maximum water depth of the in the
[1:25:56] monetary work study and uh to what depth of water and then a sense of like prison measure
[1:26:03] measure um the the water depth of the through varies you know depending on types and the location within the uh this rule uh
[1:26:13] about average of uh about 1.5 meter to about 4.55 meters uh in depth the central portions of this rule were
[1:26:22] deeper than the nearship songs of course a sensor and this applies not only to prison but also other Optical sensors uh can be it
[1:26:34] can be used to detect any Bentley components that will greatly depend on the clarity of the water and again
[1:26:41] not only for the for the Excellence Loop or pretty much for any any water uh Bobby Bobby uh uh but but you'll be operating this
[1:26:50] this kind of data to um what is a flow cam I don't know Leanne were you the one that was the
[1:26:56] other one that answered this question yes I took a stab at it and I'm not actually the ex expert on our project
[1:27:04] for this um it's actually our um university of Venda colleagues so I I did a quick um check on this so the flow
[1:27:13] cam it's a flow imaging microscope it's super cool you you uh put the you send the water samples through this system
[1:27:22] and it actually can take these um amazing images of the constituents in now in the water sample and um it's it's it blows them up
[1:27:35] it's a beautiful beautiful images as you saw on the slide but it also allows us to help delineate the
[1:27:45] um community of phytoplankton but also to count them so it's a really neat tool and I look forward to actually seeing it
[1:27:53] in person yeah definitely yeah I'm super excited about this um um yeah I guess we can probably take one
[1:28:04] more I wanted to to make sure again that I over there are some uh great questions about flight planning in particular and
[1:28:12] uh and uh when we knew that it was this was a topic that a lot of people were
[1:28:17] were interested um let's see can you can we go selling yeah can we go to uh maybe we can take
[1:28:24] the question um um let's see version 11 um this is about the cyanoscape project uh we also checked their Bergen Earth
[1:28:36] reverse Health statistic only the static bodies of water that uh that we showed in slide 52. uh this is Leanne Gile from NASA Ames
[1:28:51] the pi of the sign Escape project and we are a small Nimble team of uh of uh scientists that will be heading out
[1:29:02] to each of our sites we would love to get out to more sites but we have a very
[1:29:08] limited campaign window and also you know depends on whether whether or not we could do our sampling but to line up
[1:29:15] with these different sites that we've uh proposed will also depend on when you know what the aircraft is able to fly
[1:29:22] over and it really will take us a bit of time to get in between sites as well so
[1:29:29] all these things are important for your your field planning being able to get to multiple sites we may jump to a second
[1:29:38] site in one day of a flight just to get a Spectra and water samples from a dock
[1:29:45] or the water's edge but that's the best we can do unless we can um recruit volunteers scientists
[1:29:53] that I want to join in maybe from the local universities that might happen thank you yeah yeah sure and uh maybe one last one
[1:30:02] in regards to uh to aircraft uh angles uh 14 uh Selwyn if you wanna you can go
[1:30:10] there to for question 14 is uh talks about it was asking about can we please explain the effect of aircraft aircraft
[1:30:18] angles on calibration okay okay uh this is Leanne again and I think I understood this question and it's it's a
[1:30:29] great question if I'm understanding it properly that um we are um designing our flight planning ahead of time
[1:30:37] um each day of um the of the flight campaign window and uh during the day the solar geometry is changes you know
[1:30:47] from sunrise to sunset and so we need to pick a window of time that will avoid sunglunt if you're flying over with the
[1:30:56] aircraft and so that is between you know 30 and 50 degrees solar elevation but the other thing is to fly into and out
[1:31:05] of the Sun so if we have um a flight line that doesn't really follow our plan like that then it it
[1:31:13] could uh compromise the science quality of the data and therefore we wouldn't be able to uh use it for say calibrating
[1:31:23] um calibrating the sensor using it as a kind of like a field truth or even from our field measurements but also to test
[1:31:32] out really neat um new hyperspectral and emerging hyperspectral algorithms for phytoplankton biodiversity so this is a really unique campaign an opportunity
[1:31:44] for us to exploit these new algorithms and sets us up for the upcoming uh pace glimmer and SBG
[1:31:57] hyperspectral satellite missions awesome thanks Liam all right so we are uh getting uh the limit of our hour and
[1:32:09] a half before we leave I want to thank again all of our participants from all over the world who join us uh in this
[1:32:17] webinar series I want to also give us a special thanks to all of our panelists and uh organizers especially all of our
[1:32:28] invited speakers are um Jeremy Leanne Natasha fail articles Annabelle uh also thanks for all the support and
[1:32:40] uh again stay tuned for other uh upcoming Arsenal webinars uh remember to visit our our main our webpage uh to
[1:32:51] know about the the upcoming webinars or just to also uh visit us on on Twitter as well again thank you so much and have
[1:33:01] a great rest of your day
