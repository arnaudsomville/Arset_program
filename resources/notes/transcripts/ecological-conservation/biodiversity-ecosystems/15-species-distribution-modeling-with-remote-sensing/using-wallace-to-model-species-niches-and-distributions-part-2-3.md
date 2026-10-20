# Using Wallace to Model Species Niches and Distributions, Part 2/3

`https://www.youtube.com/watch?v=VfXg3UsnufU` · id 348 · 1:27:38 · module 78 — Species Distribution Modeling with Remote Sensing

[00:01] thank you all for joining us for part two of our series species distribution modeling with remote sensing
[00:08] my name is amber mccollum and i'm providing this training with my colleagues juan torres perez and zach
[00:13] bensten bensten today we are so happy to be joined by guest speakers from the wallace team erica johnson andrea posvelez and mary
[00:23] blair before we get started with today's content let's review the logistics this series includes three one and a
[00:33] half hour sessions and the remaining session after today will be held on august 19th at the same
[00:40] time time 12 to 1 30 pm eastern recordings of each session of the series can be found on the training webpage
[00:49] we've provided a link to the webpage here and we'll have a question and answer session at the end of each part
[00:56] so um please do enter your questions along the way and we'll get to as many as we can at the end
[01:03] if we're not able to get to your questions questions or if you have any questions after the
[01:08] session is over feel free to email myself or my colleagues our email addresses are shown here and we've also provided an email
[01:18] address for the wallace team in the installation instructions on the website so you can email them with specifics
[01:24] about about today's session an overview of the three sessions for this training series today we will focus on a tool for
[01:33] modeling species niches and distributions called wallace and during the final session we will discuss additional species distribution
[01:42] modeling projects and tools so now i'd like to hand over the presentation to our wallace guest speakers
[01:51] speakers first we have erica johnson a phd candidate from city university of new york she has participated in many
[01:58] research projects both academic and non-profit settings and she seeks to integrate field work with landscape ecology currently she's interested in the
[02:08] biogeography of diseases under global change change her phd research focuses on applying sdms to understand how landscape may
[02:18] influence biotic interactions among parasites and hosts and their potential implications for human health second we have andrea posviles who is a
[02:29] postdoctoral researcher with eth zurich she is interested in incorporating remote sensing into biodiversity research to improve our understanding of
[02:40] the relation between environments and biodiversity biodiversity aiming to improve biodiversity monitoring monitoring as part of the wallace team andrea
[02:48] contributed to general software development and spearheaded the integration of tools for conservation applications in wallace that will be
[02:56] presented today and finally mary blair the director for biodiversity informatics at the american museum of natural history will be
[03:06] joining us online during the question and answer portion she is a conservation biologist with more than 15 years of field research
[03:14] experience in latin america and asia studying evolutionary drivers of biodiversity to inform the spatial prioritization of conservation actions
[03:25] she is leading the nasa-funded expansion of wallace to facilitate biodiversity assessment and reporting by conservation practitioners practitioners she was also a co-author on the re
[03:36] recent open source release of maxsend the most commonly used software algorithm for sdm so now over to you wallace team
[03:48] yeah thank you for that introduction and thank you all for coming so we'll be talking about how to use wallace to
[03:53] model species niches and distributions and just to give a little overview about this session i'm going to start talking
[03:59] about how to use wallace for species distribution modeling then my partner andrea is going to walk you through how
[04:04] to run a species distribution model from beginning to end in wallace then we'll be talking a little bit about the
[04:10] redesign and expansion that went into v2 which is coming out really soon which makes it easier to visualize results and
[04:17] we added some new cool models and finally to wrap things all up we're going to talk about the things we're
[04:23] working on v3 to post-process sdns for conservation decision making so let's start off with species distribution models in wallace
[04:35] and just before i jump into wallace i want to have a brief recap on what sdms are and how they work so if you remember
[04:42] from our last session one of the things that scms try to do is characterize a species niche in terms of the
[04:48] environmental variables that are necessary for its survival and persistent in a region in environmental space so we take for example
[04:55] precipitation and temperature and find this combination and then transfer that into geographic space to find the areas where these
[05:02] environments exist and therefore where our species could persist and one of the things i want to note is that just
[05:09] because things are very close in environmental space so if we notice a little purple and green dots it doesn't
[05:15] mean that they're necessarily in close proximity when we transfer this into geography so the way that species distribution
[05:25] models do this is typically by taking species occurrences and then predictive variables which we consider are important for the species
[05:32] ecology so this could be climate or land cover topography anything we can think of and we put these
[05:39] variables into a model which can be regression based or machine learning as we've mentioned throughout the sessions
[05:45] there are many ways in which we can build a species distribution model and then through this model we try to
[05:51] predict the geographic areas in which the species could be and generate a potential distribution map so there were two typical ways until
[06:01] recently in which we could approach species distribution modeling the first one was using um softwares that had
[06:08] graphic user interfaces or gui that were really friendly and easy to use however these tended to be very inflexible in
[06:15] terms of the variety of tools that we could use and were typically not updated very frequently which uh you know made
[06:22] it difficult to keep up to date with the cutting edge you know techniques that were being developed and also led to
[06:28] many users using them inappropriately another way you could go about it was learning how to code and as all of us
[06:35] who have learned how to code at any point know it's very flexible but have you know the problem with it is that
[06:41] it's very prone to errors and there's a very steep learning curve so there's definitely a need to
[06:48] for for a software in the species distribution modeling community that achieves a balance between automation and supervision and
[06:56] specifically a software that is capable of automating repetitive tasks forcing users to make critical biological and conceptual decisions
[07:04] and a software that's general enough with the you know with respect to all the algorithms that could be used in
[07:10] order to fit the user's needs this inspired our team and very specifically this fellow over here jamie
[07:18] cass to come up with wallace this is an r shiny app which means that it has a
[07:23] graphic unit user interface that is very friendly and runs r in the background and and what is wallace anyway so a very simple
[07:33] way of thinking about wallace is that it's a user-friendly application for species distribution modeling that provides guidance towards following best
[07:42] practices at each step one of the things about wallace is that it has a variety of features that make
[07:49] it very user friendly for example it's accessible instructive flexible interactive reproducible expandable and open and i know this is a mouthful and
[08:00] i'll go on to explain each one step by step step so wallace is accessible because it lowers a barrier to implement these
[08:07] cutting edge sdm techniques through our very friendly graphic user interface it also allows the user to download
[08:14] occurrence and environmental data from a diversity of sources also users can find support from the community through various networks
[08:21] including google groups and github walls is instructive it provides educational and instructional resources addressing addressing concepts and theories related to species
[08:32] situation modeling as well as the methods that you could follow to build your models additionally it guides the users in
[08:39] following these best practices practices at each step of the process whilst it's flexible it allows users to
[08:46] select from a multitude of data sources and analytical tools which as we've been saying are many and there's no correct
[08:54] one and all depends on what the user's needs are and what the study calls for while this is interactive it provides an
[09:02] assortment of dynamic visualizations such as maps tables and graphs that allows users to explore their data and
[09:08] the results it's also reproducible this is i find to be one of the most exciting parts of
[09:14] wallace as i mentioned r is running in the background and the code is being saved as you run it through the gui so
[09:21] at the end you're able to download this code which is executable and allows you to replicate the analyses it also allows
[09:28] you to save your work and load it later so you don't have to redo any steps while this is expandable so
[09:35] the way that walls is built is modular meaning that it has these components which are the columns or row a
[09:42] which represent the larger steps in the modeling process and within each component we have modules which you can think about them as different
[09:52] options that you have to run within these steps so different analytical tools and because while this is built this way in a
[09:59] modular way it means that we can add components or modules and make the software grow and lastly wallace is open this means
[10:09] that the code is publicly available for all users to download on cran and github and users are also able to modify and
[10:17] suggest enhancements to the code enabling users to eventually become contributors as well so i hope that gave you a overall idea
[10:26] of what wallace is and how it works and with that i'm going to hand this off to
[10:30] andrea who's going gonna run a live demo of version one of wallace hi i'm andrea and i'm gonna be
[10:38] walking you through a full workflow to build an sdm in wallace and just remember that all the instructions to install wallace
[10:48] are available on the website and that you will be um getting a recording from this walkthrough in 48 hours so you can follow along
[10:59] when you install the software we are also providing some extra slides at the end that will be available on the website
[11:08] that will have a screenshot of every part of this walkthrough if it makes it easier so like erica just showed you
[11:19] to start wallace you have to run two commands in r just this two which are library wallace and then ron wallace and
[11:28] this will open a window on your default um internet explorer so in my case it's safari but it could be google chrome
[11:38] mozilla it will open in the one that you have set as default and this is wallace it will always open
[11:47] with a description of the software that you can look up it basically summarizes what erica just talked about
[11:56] and it has all the components with numbers from one to eight and we will go through them one by one
[12:05] first to run an sdm you need to get occurrence data for your species and in this case i'm going to show you a
[12:12] demo with an amphibian a frog that is endemic to the north hernandez uh it's called androphosophos molitor
[12:29] and you need to make sure that it's built right so that we can look it up in
[12:33] this case in the global biodiversity information facility but do remember you can also upload your own data points
[12:42] and set the maximum number of occurrences i just want all of them and then query the database
[12:48] as you can see in the lower right right there's a bar showing you the progress and these
[12:54] are all the points available for these species it will always show up on the map and then
[13:02] then first thing you do every time is look at the occurrences and evaluate whether they are in the right geographical area
[13:13] if they're not you can go to the second component the process occurrences and select the area that you know the
[13:20] species is present in so in this case i know know that this area should be removed it's just a very similar species so you
[13:33] can draw a polygon around the points that you want to keep say say this and double click for the polygon to be
[13:43] created created and then select the occurrences as you can see the occurrences that were outside of the
[13:50] boundary were removed and then you can remove the polygon you can also see that those points are very close together and
[14:01] erica talked a little bit about um sampling bias and you heard about it yesterday yesterday so we're gonna do a spatial thinning of
[14:11] the data set to to 10 kilometers which will just remove the points that are too close together as you can
[14:23] see in red you have the points that we are keeping and and blue the points that will be not deleted and not into the
[14:31] model model third we're going to get the environmental data and in this case we're going to use the oral clean bio
[14:38] cleanse cleanse we can select the resolution going from the the bigger pixels to the smaller pixels we're gonna do an
[14:48] intermediate model today and just load all environmental data and and then then whenever this shows up you're ready you have your data
[15:04] in your computer it's a raster stack of all the layers again again you can always input your own layers
[15:12] which can be derived from remote sensing in this case we're using um a pre available data set the workload data set
[15:23] then we can process the environmental data data and for this we need to just decide what's the region where we're
[15:31] going to build our model we're going to do a very simple selection today a minimum convex polygon
[15:37] up around our points our observed points with a small buffer and we just select that's the area for
[15:47] our model and then we want to sample the background of the area where the species is present
[15:55] to be able to build a model and we want to do a good sampling but this is a very
[15:59] small area so i'm just gonna reduce this to a thousand points you wanna have a sampling of all the area
[16:07] then sample gonna go up so you can see um you get all the information in this log box
[16:17] random background points were sampled so you're ready to go to the next component is called partition occurrences and in this case you want to
[16:28] partition your occurrences into training and testing data sets so you can have testing statistics for your model
[16:36] wallace offers two options you can either do non-spatial partition random partitions or spatial partitions structured in space
[16:47] for the non-spatial partition you can either do a jackknife which is all points are included in the partition
[16:53] or a random k-fold in which you select the number of groups that you want to partition into
[16:58] for the spatial partition you have option three options to do this in a block as a checker board
[17:07] um and with different numbers of groups we're going to do a non-spatial partition today a random fold
[17:18] of two so that this runs quicker the more partitions you have this will take a little longer
[17:25] in your computer i'm gonna partition and each color corresponds to one partition so as you can see this one was random
[17:32] and we have partition number one in red and partition number two in blue we go into the next component
[17:44] the model part as of right now wallace is offering two options two algorithms the bio claim algorithm and the maximum
[17:51] algorithm today we're going to use maxsend again it's offering two options for maxim either the max net package for r
[18:03] or the maxon java um software just if you're gonna use the java version you will have to have it
[18:12] installed in your computer before you run wallace so today we're going to use the maxnet component you have to select the feature classes
[18:22] the kind of response that you think makes sense for your species either a linear response of the
[18:29] presence of the suitability uh with each environmental variable it can be linear quadratic it can have hinge pictures and it can have product
[18:39] features we're gonna run a very simple model today just with the first two and you also have to
[18:46] select the penalty against complexity in the case of maxnet which you can move move in this little bar today again we're
[18:55] just gonna do do something something small small the multiplier step is just telling you how this complexity is gonna be tested
[19:05] so either every step or every half step or every two steps we're going to do every half step today
[19:13] and then you can run so whenever you run a model in walls you'll first get this table with
[19:18] statistics statistics and and this is showing you for every row one of the models that was run
[19:28] with one of the combinations that was selected so remember we selected different feature classes and different panel penalties for
[19:37] complexity so all the possible combinations and you have several statistics to choose from to select the best model that you want
[19:46] to use today we will be using a sequential criteria with two statistics the area under the curve and the
[19:54] emission rates in the model and so what we are looking for is the lowest emission rate so the emissions
[20:03] rates are coded as or for emission rate the lowest omission rate here and you can organize the table
[20:13] and then within those that have the same omission rate we're looking for the best area under the curve and so that will be
[20:23] here so the best one in this case would be the first one which is a model that only had linear
[20:33] feature classes and a penalty of one and then you can select that model in this log box and it's very important
[20:40] that you select the right model before you go on to the visualization component where you will be looking at the
[20:47] statistics here but also you can map the prediction you can map the model you can select we're going to select the
[20:55] clock log prediction right now and no threshold and so you can see your continuous model of habitat suitability
[21:03] for this amphibian you can also decide that you want a binary map one for presence zero for absence and
[21:13] wallace right now offers options for two thresholds either the minimum training presence or the 10 percentile training
[21:21] present we're going to use today so you can plot the binary map and here blue would be presence and grade would be
[21:28] absence absence and the last component allows you to make projections in time and space and so this model that was calibrated for
[21:39] the area of presence of the species can be projected to the future to see how climate change
[21:45] is going to impact the distribution or it can be projected in space for example to to sort of evaluate the invasive invasion
[21:54] potential of the species i'm going to show you how to do a new time so you select new time here as a
[22:01] module module you select the time period that you want to project to so let's say 2070 2070 and then you have to select the global
[22:09] circulation model carbon emission model say it's going to be the most dramatic and again you have to decide if this projection will be
[22:20] binary or not let's try a binary projection projection and you have to select the area where it
[22:26] will be projected so in this case i want to project to sort of the same area just to see how climate change is going
[22:34] to change the distribution in this area and so we project and and now we can clear the polygon
[22:45] and you can see how the projection shows a different distribution distribution in the future finally the last step the one that
[22:59] doesn't have a number that is called session code that's where you can download your code and erica talked
[23:05] about this when she was describing the software so you get an rmd which you can download and i will show you the
[23:15] result result you can open this in a text editor there you go this will have all the history of the
[23:33] decisions that you made while running your wireless model and you will be ready to run again from
[23:39] r r and for you to make any code modifications that you want to make within r and this is an rmd that is
[23:51] very documented so you have every step here this is our first component obtain occurrence data and what this this is that we looked for
[24:00] the database that we use the limit that we use and this will be repeated for every component and every decision that
[24:07] you made so you can replicate your analysis and especially you can make modifications modifications going back to wallace
[24:18] for a moment i just wanted to show you that if you have any questions about any of the components that we talked about
[24:25] or any of the modules that we talked about in every component you have the stabs here that include the component guidance and
[24:33] we talked about what the component is doing which we just described and then you have the module guidance so depending on the
[24:41] modules that you choose you'll get information on how the module works and especially the references and it will point you to
[24:51] the literature to make the best possible decision in each module and it will change if you change the
[24:58] module that you are selecting you have a new so this is for the new extent and this will be for the new time
[25:05] and this is available in all your components components so do take a look at the guidance okay so
[25:15] one more thing in all the components where there's a visualization available there's also the possibility to download what you're
[25:24] visualizing so in this case i was looking at the projection the time projection you would be able to download
[25:32] either either the picture so a png or a raster file geotiff and ascii or grd that you can then open in another
[25:42] geographic information system we're now going to go back to the presentation we're going to show you a
[25:49] little bit of the new um components and modules that will be soon available in wallace and for which if
[25:56] you want to install you can email us and and we'll send you instructions for development versions and thank you for watching the demo i'm
[26:11] now going to go back to the presentation so so wallace has been in constant development and expansion and
[26:24] the newest version version 2 will be released very soon and this version is making it easier to add new modules in
[26:33] particular particular so for collaborators or anyone interested to add their packages as part of wallace it is also allowing to access many more
[26:44] data sources so today i showed you three databases that you could use for for species distribution points and one
[26:53] database that you could use for climate data this has been expanded in the new wallace version it also allows for
[27:02] multiple multiple species to be worked on at the same time so you can create multiple models at the
[27:08] same time and you can compare those pieces it is based on the rmms metadata workflow so it is easier to document
[27:17] your model for a publication and this development has been heavily guided by user feedback that we get from
[27:24] conference workshops emails the google group that we still have and we invite you to join and and we have now been working on what will be
[27:35] version 3 which is focusing on post-processing for conservation conservation and this has been funded by nasa and has
[27:43] been produced in collaboration with the humboldt institute in colombia and in particular their biomodels group and it has been thought as a bond in a
[27:53] box so a biodiversity observation network analysis tool what we have been doing is adding a few new components so you recognize
[28:05] this from what erica was showing you except now we have a new component to process with remote
[28:12] sensing data and a new component to calculate indicators and those two are based on two packages that the team has been
[28:25] developing that are called mask ranger and change ranger and those two packages were first developed as independent r packages and
[28:34] then integrated into wallets the first one is task ranger and mass ranger has been created to do post-processing
[28:42] of sdns in particular it allows to use the use of remote sensing products like forest cover cultivars urbanization
[28:51] protected areas to both crop crop your models uh but also to understand what percentage percentage is in
[29:02] a certain protected area or in a certain land cover and it also allows experts to correct the maps
[29:10] if they know that the species is present in another area or is not present in one of the areas that is being modeled
[29:19] and and i'm just going to show you a quick example of how this works this is the
[29:24] lingito lingito this is a recently described small carnivore that is limited to high altitude cloud forest in northern south
[29:31] america it's very data poor and it needs an iucn status update given recent dispersation and the first model
[29:40] that was produced didn't reflect the exact distribution of this little mammal so this is an sdm where you can see areas in red are
[29:49] higher suitability and areas in lower suitability and so what the team did for this study was get all the recent occurrences for the
[29:58] el ningito and match them to the maldives yearly force cover data so that we would know what's the minimum force that this
[30:07] species needs to be present and when you do that in mass ranger and create a new distribution
[30:16] you can see that only the areas in color are the areas that are really suitable for the olinguito
[30:27] and the areas in black were climatically suitable but don't have the necessary forest and and this is very important
[30:33] for conservation purposes we've we've also also been working on calculating indicators and for that uh the team has created the change ranger
[30:46] management chain ranger package which allows for calculating key biodiversity change indicators that are important for example for iucn
[30:56] assessments and that includes the computing of the area of occupancy aor the extent of occurrence the eo the
[31:04] percentage of suitable land cover the representativeness of the species distribution in protected areas so how much of the species
[31:14] range is protected for example it sorry it also allows for showing the changes in range over time
[31:28] and space and so the graph that you're seeing here in the right is showing how the olingito distribution
[31:36] is changing in time with the forest station and so even though it had 42 thousand kilometers square kilometers of distribution in
[31:46] 2005 2005 according to the deforestation data that we got from the motive sensors uh this has gone as low as 30 000 square
[31:55] kilometers in 2009 and 10. so you can see how your distribution would change given remote sensing products
[32:07] finally with trying to integrate how to calculate multi-species indicators and so at this point wallace can compute measures of species richness and
[32:18] species endemism and sodomaps that you're seeing are richness and endemism for primates in colombia and very soon we will be integrating
[32:28] other measures like photogenetic diversity phylogenetic endemism complementarity complementarity to think about conservation in a multi-species level so just to summarize uh wales is an user
[32:43] friendly application for species distribution modeling and it provides guidance towards following best practices at each step and i hope that
[32:51] the demo showed you how accessible instructable flexible interactive and reproducible and expandable well as well we have two versions coming soon
[33:04] p2 p2 before v3 v2 will provide additional svm data sources and it will allow for multiple species distribution models to
[33:14] be run at the same time and it also facilitates module contributions from user communi from the user community
[33:22] police v3 on the other hand is adding tools for conservation applications yes it allows for um the calculation of
[33:30] biodiversity indicators but also to it allows for improvement of the species ranges estimates by using both remote sensing data and user information
[33:41] and those two versions are now available for for beta testing and if you're interested interested please contact us
[33:51] the information is available in the installation instructions and we will get back to you with precise installation instructions for both
[33:59] development versions thank you very much and i'm handing it over to amber now thank you erica and andrea for the great
[34:10] presentation and demonstration of wallace really exciting stuff i wanted to remind everyone that next session we are going to highlight some
[34:18] additional additional sdm tools and techniques so do please join us for our next and final part of
[34:26] the series and i also wanted to remind everyone um that we're going to now move into the
[34:34] question and answer session but feel free to email myself or my colleagues at our email addresses listed here
[34:40] you can find all the course materials including the presentations the links to view the recordings as well as the
[34:48] instructions for the installation and running of wallace at the training webpage so do please check that out
[34:56] also next session we will have the link to the homework provided on the the website there as well
[35:05] and of course you can visit the rsi website for any other trainings that we have across a variety of
[35:13] application areas so there's a lot to find on the rset website shown here you can also follow
[35:20] us on twitter and our twitter handle is shown there so so once again um a real big thank you to our guest speakers we
[35:31] so appreciate your time and being here and um really getting um the tool out to the community and and thank you all for
[35:38] joining us today um we have also listed the wallace github page as well as the google group for wallace so if you are
[35:48] interested in integrating this into your workflow and and using wallace um please do join the google group there's a lot of nice
[35:58] q a there as well and helpful support for for running the model so thank you again and we will now move
[36:06] into the question answer session great thank you everyone um so if you would just give us a moment we're going
[36:17] to to move on over to the question and answer documents documents i want to thank all of you for being here we have over
[36:26] 1200 1200 participants from around the world so we're so glad um that we're getting such a a from our community here
[36:36] i want to mention a few things before we jump into the questions um we will have one homework available
[36:43] and that will be on the website next session so check back for that on thursday the 19th when we have our final
[36:50] session and that is a google form that you can complete within two weeks in order to receive your certificate of
[36:57] completion and it does take quite a while for us to get all the certificates out to the
[37:02] community so do please allow about three months to receive that i also wanted to mention that we have
[37:10] included the information about the wallace google group and an email address that you can use for any questions that
[37:19] specifically pertain to wallace on our question and answer document and we will go through as many questions as we can during the time
[37:28] today today and then we will also be posting this document to the training website so you can refer back to it at a later date
[37:37] to get any of the specifics on those questions and if you don't get your question answered today you can always email the
[37:45] arset team or the wallace team at their gmail address shown there great well i will go ahead and jump
[37:54] right in and we'll get into some of these questions here so the first question asks would any of the resource persons
[38:03] be familiar with predictor variable data sets on global average emergent tree height height i'm asking as emergent trees are a known
[38:13] limiting factor for my species of interest interest a tropical forest raptor that depends on emergent trees for nesting i'm currently
[38:20] using average canopy height as a proxy for emergent tree height looks like mary might be able to address that question hi yes
[38:32] hello everyone thanks for tuning in um thanks for this question so i'm i'm not aware of any global
[38:41] data sets available um it would be good to check around for local data sets in your area of interest but i do know
[38:50] that nasa's jedi mission and the jedi science team are coming up with some pretty cool algorithms and models for global data
[38:58] sets of other kind of forest structure related variables that when combined with canopy height might be a little bit more
[39:05] informative for for your work so stay tuned to that mission and i know there are some things coming out soon
[39:13] and uh the geo bond ecosystem structure working group also has some interesting ideas of new variables that they'll be
[39:19] delivering through the the geo bond database great thank you mary and i will note that um well it doesn't specifically
[39:29] address your question of emergent trees that's a sort of a very difficult estimation to get at as you may have
[39:36] noticed um we have had some trainings on sar data we have actually have quite a few trainings on sar data in general on
[39:44] the rset website and recently we um had one focused on you the use of star data for forest
[39:52] mapping so that might be something of use for you as well and we've included the um training website there
[40:00] as well so dude please take a look at that okay great thank you mary moving on to question two
[40:10] what what what can the maximum number of occurrences be for wallace i have data from six thousand to sixty thousand and use
[40:20] greater than ten environmental biological indicators through bio oracle yes i believe i answered this one so it
[40:32] seems like you're very lucky and you have a lot of occurrence data which most of us do not have you know we're not
[40:38] fortunate enough to have this sort of data um so i don't think there's actually a limit on the number of
[40:44] occurrences that you can input into wallace but your computer might not be super happy with with that amount of recurrence data
[40:53] so the limiting factor might be the computational power of your computer and the memory so one of the main issues
[40:58] with r is that it does allocate memory on your ram and if that burns out it might crash
[41:05] um um one of the things that i do think however however is that you might be concerned a little
[41:12] bit just by by the amount of data you have about spatial biases resulting from the sampling design and that is
[41:18] definitely something you would want to look into reducing in order to make a good quote-unquote model uh and
[41:25] fortunately wallace allows you to do this within the sp skin or spatial thin module in the process oxa component and
[41:32] i i hope that answered your question great thank you okay moving on to question three to what spatial scale is recommended to
[41:43] use our wallace yes i think that that was me um the spatial scale really is not about the software but more about
[41:58] your your question and the skill that you have variables available to use so so what's programmed within wallace right
[42:10] now is that you can access the workleam database and workleam database has data at 30 arcsec 2.5 arc main five argument
[42:18] or an arc mean but you can upload any data into walls as user specified and so you can upload
[42:25] variables at any resolution just as long as all of your variables are at the same resolution so you can do 30 meters if
[42:31] you want but everything has to be at 30 meters meters um yeah great thank you that's a great point and
[42:39] we talked a little bit during session one about having all of your data layers at the same spatial scale that's usually pretty
[42:46] important when conducting this type of modeling modeling um either conducting upscaling or down scaling to match those layers is really
[42:55] important so thank you okay question four wallace v2 will be released soon when is the exact date
[43:07] i guess i can do this too um we don't have an exact date because we are partly subject to
[43:14] the peer review process for the manuscript that is associated to wallace v2 but it should be officially released
[43:20] this fall um in the meantime if you're interested in either v2 or v3 there are beta versions available and you can
[43:28] contact the team for installation instructions and beta testing instructions great thank you okay question five can you use remote sensing variables
[43:40] like leaf area index and nd ndvi variables in sdm yeah this was me this is mary the answer
[43:50] is yes absolutely but it's important with especially with remote sensing variables to make sure that the occurrence data that you're
[43:59] using as input and the remote sensing variables match up in terms of temporal scale scale for training the model
[44:07] and as long as the variables that you're using are the same extent in resolution you can use them together
[44:13] yeah great point and we we did talk about leaf area index and ndvi in session one as well as
[44:21] those in environmental sort of predictor variables variables very important ndvi is a is a huge one i
[44:28] see being used quite often in particular if you have a species that is moving across the landscape and maybe
[44:36] moving according to vegetation health or um phenology uh changes so yeah that's a great point those are oftentimes very
[44:45] useful variables to include okay question six how would you select a proper thinning distance distance why should the occurrence data be
[44:57] spatially thinned yeah so this is also me um so ideally to select the proper thinning distance you would have some
[45:06] information about the biology of the species such as their home range daily travel distance um or maybe for you know for plants like
[45:14] dispersal distance um or about the sampling density for that group to help inform your selection because what you're trying to do is
[45:24] balance so that you have enough data to characterize the full environmental space that the species occupies but also to avoid spatial bias
[45:34] and autocorrelation because if if your input data are biased they're just reflecting where people went to sample your species instead of
[45:45] where they actually are in a biological sense um so really this selecting a proper thinning distance is
[45:52] about about making sure that you're modeling what you want to model and not just where people sampled for
[45:58] for your species of interest great great point thank you okay question seven is there a way to check on the
[46:08] multico-linearity between the downscaled bioclimb variables in wallace um i think andrea we can tag team this one or if you want i can just take it
[46:21] that's what i was gonna say we could do this together um so yeah um we don't have a formal
[46:27] multiple linearity test but in v2 you can look at a pca in the environmental space component for all of your variables
[46:35] however when you're running maxnet or maxim you can penalize complexity by increasing the regularization multiplier value and you saw that very quickly in
[46:45] the demo and this will in practice penalize the use of clinical variables and then mary can explain further here
[46:53] yeah so this it gets a little technical here and some in this field people feel some people feel very strongly about
[47:01] collinearity but from a super technical perspective perspective um with maxent anyway which is a machine learning algorithm
[47:10] it determines predictive variable importance in the context of the other variables variables using internal variable selection using
[47:17] regularization which andrea just talked about about in this algorithm it discards redundant information and it only gains novel
[47:25] information even when the novel information is really really tiny and so if you remove highly correlated variables from the analysis you could be
[47:33] removing a small amount of data that might be important um so you know but there are other sdm
[47:41] algorithms where you it is important to control for collinearity so it's key to really um be aware of all of this and
[47:47] wallace includes component and module guidance and the full references for some of these concepts so that you know
[47:54] you can really educate yourself and learn a bit more about about all of these issues great thank you
[48:08] okay okay moving on to question eight thank you if you use your own data what sort of
[48:17] format format format does it need to be and how do you upload this into wallace okay um so as i mentioned earlier in my
[48:28] presentation when i had that flowchart there are mainly two types of data you need to build an sdm the first is
[48:34] occurrence data and then we have predictor variables or predictor data so our current data needs to be provided
[48:41] as a csv table and it has to have at least three columns so the scientific name of your
[48:46] species longitude and latitude and one of the things that is very important to know is that your your table your csv
[48:54] file has to have those exact names in the columns that means no capital letters just exactly as they are right
[49:01] there and in that order or else wallace will not read them now the predictor variables which are
[49:07] typically environmental data must be provided in raster format and wallace does allow for several raster formats to be uploaded so it
[49:15] doesn't have to necessarily be tiffs or grd which is the r format it does allow for some flexibility there
[49:22] for both types of data in the pertinent component so we have awk data for occurrence data and then m data for environmental data
[49:32] both of them have a module called user specified when you click on that on the radio dial you automatically get a
[49:39] little button that says browse and you're able to upload your data as you normally would great thank you
[49:48] okay okay moving on to question nine this is a question about the modular approach of wallace does wallace simply
[49:58] import the functions from other packages for example dismo or does that port to the functions from the
[50:06] source code yeah i believe i answered this um well as imports functions it doesn't import them although for some packages
[50:18] we have what we call wrapper functions that prepare the data that is needed for those packages to work and produces the
[50:24] warning and error messages that you see in the log window in wallace and within each component and within
[50:31] each module you can see in the lower left of your screen a list of the used packages
[50:38] packages with their links to their references the relevant references and in v2 this will also be provided as part
[50:44] of the rmb file so a list of all of the packages that were called for your analysis
[50:53] great thank you okay question 10 what is the basis for partitioning occurrence data what does partition do with the
[51:02] occurrences and what are the what is the basis for choosing different methods for partitioning okay so the basis of partitioning your
[51:15] occurrence data is that when we build a model we normally split the data into two main groups so we have our
[51:21] calibration group which is the data that we're using to actually build the model and then we have our evaluation group so
[51:28] normally the data is built on the calibration group and then we try to assess how well it
[51:33] predicts the data that was withheld in the evaluation group the partitioning method that is going to be used really depends on your data so
[51:42] for example if you have very few points you might want to use a jackknifing approach which just means that
[51:49] you take one point out at a time and use the rest of your points to predict that
[51:53] single point which is really good when you have very scarce occurrence data but if your goal of the study for example is
[52:00] um it might also depend on the goal of the study so for example if your goal is
[52:04] to project it into a different time period with different climates you might want to use a spatial block partition
[52:10] because this allows to test how well your model transfers into a potentially different environment so so this is there's a whole literature on
[52:19] this and you can find some of it in the muscarella paper that i referenced there and you can also find it in in wallace's
[52:27] guidance text we have a list of references that you can refer to understand this more and additionally if you want to
[52:34] understand it a little bit more i know i added a slide at the very end we have
[52:38] some additional like supplemental slides and there's one specifically about partitioning that has a very nice visual that might help you
[52:45] understand this great thank you and we've included the pdf of the presentation slides in the handouts portion of the um go to webinar software
[52:58] as well so you can access that there sounds like there are a lot of resources okay question 11
[53:06] for the users that are somewhat new to sdm does the wallace documentation provide either guidance or literature
[53:13] references to all of the steps and decisions so that users can make a more informed uh prioritization
[53:20] decision yes it's me again absolutely so one of our main goals is to be for welsh to be instructive so
[53:29] there's information at every single step and every single component about the component in general which is the major modeling step but as well
[53:38] there's information on the actual different tools or the modules that are inside our component and if you see the
[53:45] i call it the results panel where the map is there's different little tabs on top with orange letters there's one
[53:51] called component guidance and one that's called module guidance and these are refer either to the general step or to
[53:58] the specific tool that you have selected it provides as as the word says you know guidance related to these topics but it
[54:06] also provides references directly related to these topics so i would suggest anybody who wants to learn a lot
[54:13] more and dig in to reference those tabs and and check them out great yeah dear dear okay question 12
[54:25] querying gbiff using wallish is not working the progress bar is stuck at one-eighth of the bar is this a bug
[54:34] hi i can take this this is mary so when this question came in i quickly tried it
[54:39] myself and it worked just fine for me um so i think there are a couple things to
[54:44] double check here of course it could be a connection issue so if you have a low connection
[54:49] connection and the larger number of records you're searching for the slower it's going to be while also streaming a webinar so
[54:55] that could be it but also just make sure you have the correct scientific name uh double check that gbif actually has
[55:04] that species by going directly to their website because we're using the the gbif api here to bring the gbif data into wallace
[55:14] and also double check that the set maximum value of occurrences is not zero or not like a super high number
[55:23] which could take a while too so you could sort of test if it's working by setting a maximum value of like 100
[55:29] or something lower than that and just make sure it's working and then try a higher number great thank you
[55:38] and i'm just adding the gbiff website here for more information um we talked about this during session
[55:46] one as well okay okay question 13 after downloading the wallace code is it possible to rerun that code in wallace
[55:58] or would you need to open the code in a text editor and use it to re-enter your
[56:02] model in wallace yes so we have two things in this question the code itself the one that you download
[56:12] as an rmd the one that i showed at the end of the demo that one you can rerun
[56:17] in r but not in walls so it's just an r code however starting with v2 you will be able to save and load your
[56:26] wallace session as an rds file and so you can save at any point in your analysis and then load again within
[56:34] wallace so that is coming in the next version great thank you okay question 14. can this model be used for plant species
[56:47] such as mangroves in modeling mangrove distribution and relating it to sea level rise but historical sea of level rise data is
[56:55] limited are there available proxy data should i follow the resolution of the mangroves lots of questions baked into this one
[57:06] yeah i i can take this i think more was added to this question than when i first
[57:10] answered it but in terms of using for plant species um absolutely uh theoretically um these models work even better for
[57:20] plants uh then some like really large bodied vertebrates for example that are more generous however if you want to
[57:27] model model a mangrove um or like you know a system or a community you can also do
[57:35] that that and andrea can talk about that a little bit too but there's some trickiness to it
[57:41] it um i need to know more about the specific area about proxy data for mangroves but you know there are
[57:49] world claim does have in their past projections projections for like mid-holocene and going back farther it does incorporate sea level
[57:58] rise rise um um and i don't understand uh uh what is meant by resolution of the mangroves so
[58:08] i think uh you can just email us more of these questions and perhaps clarify further and we can we can help you out
[58:17] great thank you um i've also added a link to a recent training that we did for mangroves for mapping mangroves and
[58:28] related to un's sustainable development goals so i've included the link there that training focused on the use of google earth
[58:36] engine to do things like mapping mangrove extent looking at time series analysis of mangroves um um calculating the area of mangrove so this
[58:47] might be something that would help you in your work as well so do take a look at that
[58:54] okay question 15. does wallace have projection features for marine environments or is it just terrestrial can wallace be used to model
[59:05] the distribution of marine species are there data sets related to ocean bathymetry bathymetry and and most of the ocean datasets seem to be
[59:15] sea surface temperature yeah this is mary again um there are bathymetry data sets out there i can't think of them off the top of my
[59:27] head but we can include them later later in this document when it's sent out and and right now wallace doesn't include those
[59:39] data sets you know in wallace itself but users can include any data that they want so you you would just find them and then
[59:49] uploaded them as user specified variables for your area of interest great thank you and we will be talking a little bit
[1:00:02] about marine environments um and fisheries in particular um in the final session so check back for that it
[1:00:11] may or may not be related to your questions here okay question 16 how can we export the final sdm map to
[1:00:23] any other software such as arc for classifying the area of more suitable suitable and less or moderately suitable habitat
[1:00:34] yes yes this is andrea um okay i think i need to add some things there um you
[1:00:41] can definitely download your model so i showed you that there's a tab um that is called download in every module
[1:00:50] so if you go to the visualization part and to the download tab you can get rasters of your model there are
[1:00:58] several formats available including geothe ascii and gred grids you can also get the map itself as a png
[1:01:08] but for classifying as i just saw this part within wallace you can also apply thresholds there are some pre uh program
[1:01:17] thresholds available including the minimum presence threshold and the 10 percentile training presence threshold um um which you can apply within wallace and
[1:01:29] again download the raster of the binary map map both are available great great a lot of options then
[1:01:39] okay question 17 could you please repeat what statistics in wallace are useful to test the model quality
[1:01:49] yes that's this is me mary so um highly encourage you to read carefully the component and module
[1:01:56] guidance guidance that we have for users in wallace that gives some detailed information and and further references to look into to
[1:02:04] try and make these decisions because because you know in a certain sense the statistics you use really depend on the
[1:02:11] species you're modeling and if it's a small sample size or really big sample size and and how much complexity
[1:02:19] you're willing to allow in in your model but a general rule of thumb thumb is to select the optimal model based on
[1:02:28] performance metrics that balance predictive ability model sensitivity and specificity so typically i advise you know like my
[1:02:36] students to take a look at the average test omission error and the average test area under the
[1:02:43] receiver operating characteristic curve or auc and then with smaller sample sizes and especially if you're concerned about
[1:02:52] your model being over fit over parameterized overly complex which is for you know especially concerned if for example you want to
[1:03:01] project your model under future climate change or under a novel environment you don't want it to be so fit
[1:03:08] over fit to your data that it can't really inform those projections then you should also look at the lowest
[1:03:15] delta aic score and maybe even look at that first and also look at the number of parameters included in the final model
[1:03:24] and all of these you can view on the table in the results tab of wallace great thank you really informative
[1:03:33] detailed detailed answer there to that question um okay question 18. can you model more than one species at
[1:03:44] any given time yes i'll take this one so currently in v1 it is not possible but as we mentioned
[1:03:53] v2 does allow for multi-species modeling so this will be out very soon great great thank you question 19
[1:04:06] as a student can i publish a paper about using wallace's data for any desired area area if yes is there specific guidance on how
[1:04:15] to do so um i'll did this one this is mary so we um we do have a suggested citation on
[1:04:24] our website if you use wallace for your research workflow so we ask that you cite the the original paper that
[1:04:33] published wallace and that citation is here here however the data sets that you use or that we serve in wallace are
[1:04:41] actually coming from other places so and we do include the references for those data sets so please make sure to also
[1:04:49] cite whichever data sets you end up using using that's a great point yeah um we've talked about a lot of uh
[1:04:59] uh portals for data and we'll we'll even discuss some more next next session but it's always a great practice to fall
[1:05:19] the trail back to where you're receiving all of your data and properly cite those things um great
[1:05:25] okay for a moment i should be back on my audio now um so question 20 uh how do how does modeling with wallace
[1:05:36] on aquatic species that are limited areas such as rivers links or swap swamps swamps and how do you do modeling on migratory
[1:05:45] species that are sensitive with barriers like like like a dam in their migratory route yeah i'll take this one as well this is
[1:05:54] mary this is um a great question something we've been thinking about a lot with our users that are interested in
[1:06:02] especially freshwater species and we've been thinking about this for v3 especially for conservation folks so you know the a typical way to do it is
[1:06:13] to to find a shape file for the stream of interest and you can basically either clip your environmental variables
[1:06:21] just to that area um or around the model and then clip the model the resulting model of to that area so there are different
[1:06:29] ways to do it and we're kind of experimenting with those through some use cases um but this will be something you can
[1:06:37] definitely definitely do a little bit in in version three and it's really important to to think about this and not only for freshwater
[1:06:46] species but like a lot of the things that you model um over predict into areas where they're
[1:06:53] not found like maybe the other side of a mountain range that they can't reach or the other side of a river
[1:07:00] and so um yeah some of the things you'll be able to do in version three will let
[1:07:04] you basically like clip out that part that doesn't make sense for for that species species great question
[1:07:12] great thanks okay okay moving on to question 21 at step four the process environment i cannot find a way to select the study
[1:07:27] region when i try to sample the background i keep getting error before sampling background points to find the background extent can you
[1:07:36] clarify this step yes of course so component number four the processing of the environmental variables actually has two steps and you
[1:07:47] must do both steps for it to work so the first step is selecting the background extent so just like what's the shape of
[1:07:55] your background and you can either use a predetermined extent as i showed in the demo which is a minimum convex polygon
[1:08:03] or a point buffer or just a bounding box around your points you can do a user-provided extent that means you
[1:08:11] upload a shape file with your extent or you can draw your extent of interest after you create the extent then you can
[1:08:20] sample the background points because the background points are only sampled within the extent so it must be defined
[1:08:26] first that's why you're getting the error error it's just a step right before it great thank you
[1:08:34] okay okay question 22 in wallace can you make a principal component analysis graphs i think yeah you go ahead i think i answered it
[1:08:52] but it's really your answer i can take it yes uh in version two we will we do have a pca option within the
[1:09:02] environmental space component so it allows for comparing the environmental spaces of different species with a pca with also
[1:09:11] density grids and finally it performs niche overlap analysis in environmental space space in version 2 it will only be available
[1:09:20] to compare two or more species you cannot do it for a single species great great question 23 are there specific wallace
[1:09:31] workshops that we could participate in um um yes this is mary again so we we have one
[1:09:40] uh coming up soon in october for the student conference on conservation science new york which will be virtual
[1:09:49] well there'll be in-person events on the last day but our particular wellness workshop will be virtual and we often have workshops at other
[1:09:58] international conferences like the international biogeography society and many others and erica and and andrea both here have
[1:10:08] led workshops in a lot of a variety of venues and also in spanish so also in multiple languages we also have a lot of
[1:10:16] webinars um that you can find on our website that will help you as well but if you're
[1:10:21] interested interested and you can't think of how to access any of these upcoming workshops and you'd like
[1:10:29] to somehow organize one please email us and reach out great thank you and we've posted the link to the
[1:10:38] student conference on conservation science in the chat there as well so you all can access that easily
[1:10:47] okay okay moving on to question 24. how long should wallace take to spatially thin user input occurrence
[1:10:56] records i've noticed that for 2000 records it takes my computer an hour when i tried running several thousands
[1:11:06] it was done in over nine hours yes i believe i answered that um so wallace uses the sp theme package for
[1:11:15] thinning thinning and it's gonna really depend on the package itself so my question back to you is have you tried running sp
[1:11:25] thing directly into r just to know if it's it's related to the package the speed will really depend on the underlying package
[1:11:33] and your own computer power but do keep in mind that what sp thing is doing is measuring the distance
[1:11:39] between your point and all of the other points to make sure that it's not at the minimum distance that you're giving it
[1:11:49] and so if you have thousands of points you can see how you have exponentially um increase the number of comparisons
[1:11:57] and so i would guess it takes a lot of time that makes sense great uh question 25
[1:12:08] um thank you for your presentation in the past i had problems using wallace with species that have broad
[1:12:15] distributions or a lot of occurrences it fails to build a polygon or to do the sdm is this something that will change
[1:12:24] with the new version yes andrea again here um the new version should prevent many of the gray screens that you might be
[1:12:34] having having but but if this is a problem about your computer power power it might persist version 2 does include an option to run
[1:12:44] models in parallel which should help with problems of computer power but if it's at the polygon level um
[1:12:54] i don't think it will be fixed um probably probably just need a computer with a bigger ram
[1:13:02] as erica mentioned r would allocate everything in the rams okay great question 25 any rule of thumb
[1:13:15] on minimum occurrence data that can be used used in stm especially maxsent to get good habitat prediction
[1:13:24] prediction would you still recommend spatial filtering as a way to account for sampling bias when you have few
[1:13:29] occurrence records such as lesson 20. and is there any other way of accounting for sampling bias that doesn't run the
[1:13:37] risk of reducing already sparse occurrence records yes i believe um i answered the first part of this and
[1:13:48] these other questions were added afterwards but i'll try my best to answer them so this is a great question
[1:13:53] and i don't think there's a super clear-cut answer um in general i think the consensus is like
[1:13:59] if we have over 30 points we all feel very very comfortable and confident that we can produce a robust model with that
[1:14:06] however i i have seen models that are good models built with about 10 points it's all really dependent on how large
[1:14:14] your modeling extent is depending in relation to where you have your points because one of the things that we're
[1:14:20] trying to do by evening out or thinning out is is the occurrence data is to make sure that
[1:14:28] the environments that the species occupies are equally represented and that we're not weighing some more heavily than others just because of
[1:14:34] sampling biases so in terms of the spatial filtering when you have a few points well it really
[1:14:40] depends on how clustered your points are going to be in relation to the extent that you're going to be
[1:14:45] modeling to and if you think that's going to artifactually increase suitability in certain areas because you have more points in that area
[1:14:55] as i said it's not a really straightforward answer and it takes a little bit of thinking and
[1:15:03] um just inspecting and knowing the ecology of your species as well right because the mobility of your species is
[1:15:09] also going to be affecting the way that you you choose the same the spinning distance um i'm glad you brought it up and i'm
[1:15:17] sorry i don't have a better answer for it it i think it's still a point of contention
[1:15:22] and people are still trying to figure it out great thank you okay okay moving on to question 27
[1:15:37] thank you we we've been working on crop plagues caused by different insects as well as suitable to project expansion
[1:15:45] of insects as well as fungi and bacteria knowing their occurrences so yeah i'll take this one um
[1:15:54] so yes you can absolutely use wallace or any other sdm approach to model insects or bacteria or fungi
[1:16:03] as long as one you have the occurrence records and in my experience that's the hardest part to deal with especially
[1:16:09] when you're dealing with um non-vertebrates non-vertebrates and you know for some insects there is a lot of data but then for others there is
[1:16:18] not not one of the main assumptions is that the distribution of your species though is going to be driven mainly by climate so
[1:16:25] in my experience one of the issues here is that for example maybe some fungi and bacteria are going to be very closely
[1:16:33] related to hosts and maybe it's host distribution that is actually going to be the main driver of their distribution
[1:16:39] so if that's the case then you have to be very careful about the modeling assumptions and make sure that you
[1:16:44] incorporate some sort of method to include these biotic interactions with like hosts or other species that may be
[1:16:49] relevant and i've added a reference here just one of them very many of how and when you should include biotic
[1:16:56] interactions in your sdm workflow great thank you important point there okay um question 28 what are the assumptions to take into
[1:17:09] consideration when using camera trap occurrence points for sdm uh i think i answered this one this is
[1:17:18] mary mary so i think the the biggest consideration here is sampling bias so if you're using camera drop data
[1:17:26] um you want to be really careful to control the background training extent and maybe just do like buffers around
[1:17:32] each camera trap because your sampling is so restricted and it would be important to do spatial thinning of points as well
[1:17:41] great thank you yeah it ties into some of the conversations we were having previously about bias and thinning
[1:17:48] okay okay question 29 can the model be used in crops such as rice rice or be used to predict microorganism
[1:17:57] distribution hi yeah i answered this one um erica here um so kind of related to the question i answered previously about
[1:18:06] bacteria and fungi so in theory yes you can use this for crops or microorganisms but kind of the same idea you have to be
[1:18:15] very mindful to consider what are the actual drivers of your distribution so for example with rice if there's any
[1:18:21] anthropogenic activity that is changing the local environment such as irrigation for example maybe you would want to
[1:18:27] include that as a predictor variable so so um in theory yes but you would have to make modifications to actually fit the
[1:18:35] species that you're interested in great yeah good points okay question 13. if i have an archive of occurrence data
[1:18:49] of different species that was taken from november 2017 to december 2020 what date should be the best for environmental variables if i
[1:18:57] want to upload to wallace oh this is this is me yes so um if you're interested in climate
[1:19:11] variables you don't have to worry about this too much because those are 30-year averages um but if you are interested in using
[1:19:19] remote sensing data like forest cover or something or ndvi to inform your model training you might want to try a median
[1:19:27] date or a year or something if you want to model all of those occurrence data together but it
[1:19:33] would be really important to double check those and make sure you know if you have um an occurrence
[1:19:42] point from 2017 and then you're using ndvi from 2018 is like the medium you want to make
[1:19:50] sure that there wasn't like extreme forest loss that's reflected in the ndvi from 2018 when your species was observed
[1:19:57] there in 2017 before the force was cut down see what i mean so you just want to
[1:20:01] double check it we don't do this in wallace but you can also also do something really fancy in our
[1:20:10] which is like a point process model where where you could include different environmental variables for each point
[1:20:17] so you could match your point from 2017 with the environmental variable for 2017 etc etc you can also do that with
[1:20:29] swd format i guess in accent and i can't remember if that's something we're doing in v2 andrea let me know if so
[1:20:38] but um you know we've had some requests to think about that so we might we might think about it some more
[1:20:48] yeah interesting point i have not heard of of doing this point processing model where you can select those different dates
[1:20:56] sounds like something that'd be really useful useful especially when doing field sampling over multi-year periods like this
[1:21:04] very cool um great all right question 31 if we do not have point occurrence data of species
[1:21:13] could we do sdm like like uh study using iucn distribution data which is in polygon form yeah this is this is me too um
[1:21:25] students ask me this all the time i strongly advise against it um um and i think you know many of us who have been a part
[1:21:35] of iucn assessments and know how those polygons get drawn would probably say the same but people do it and maybe people will
[1:21:43] take the polygon and like sample random points within it or something um but it just it just adds a huge level
[1:21:50] of uncertainty um but you know it really depends on the question you're asking right and the scale
[1:21:56] that you need to answer your question and also the resolution of environmental variables that you're you're using so it
[1:22:04] might not be terrible depending on all of those things but i advise you to not do it
[1:22:12] great thank you okay question 32 can wallace be used to model distributions distributions or predictions for highly mobile species
[1:22:23] especially migratory species of birds and fish this is this is particularly for species that have very poor ecological or biological
[1:22:32] information yeah i think this is me again um so yes um with extreme caution and some thoughtful
[1:22:45] thoughtful thoughtfulness about the environmental variables that you're using to train the models or perhaps with some creative ideas about variables that
[1:22:53] might even capture parts of the migration process yes you can certainly look into it i've seen folks that do this often have
[1:23:02] separate models for different seasons right or or they only model the breeding season for example for birds rather than
[1:23:09] everywhere that that animal has been seen seen but yes there's a lot of examples of folks doing this and it can be quite
[1:23:15] informative and interesting very cool thank you and also in session three on thursday we'll be talking about um another model
[1:23:26] called circuitscape does focus more on the migratory aspects and might be another option to look into we'll talk about that in a little bit
[1:23:38] more depth on thursday okay okay question 33 is it possible to say that wallace is a simplified or advanced
[1:23:52] of m.i.a accent modular integrated approach to maximum energy distribution modeling um so we're not very familiar with miami
[1:24:08] accent um we're definitely gonna check it out more but to me it seems like it's a method
[1:24:15] uh they're arguing uh it's a method that is better than accent walls is not a method wallace is able to
[1:24:24] include many or any modeling technique we started with max and but it will be able to incorporate others
[1:24:31] wallace is a platform that allows for best practices to be incorporated in data pre-processing and the model
[1:24:39] parameterization parameterization which could be applied to any modeling technique technique miami accent included great thank you okay question
[1:24:56] 34. is it possible to visualize or save response curves um yeah me again yes definitely in the
[1:25:05] visualize component you can look at all the response curves um one variable at a time and you can use the download tab in that
[1:25:14] same component to download all of the response curves at the same time great thank you um and we did have one email question um
[1:25:26] that that was referencing about the species species uh finding the species and the uh i think the
[1:25:37] guidance that was given was check gbiff to make sure there are data of species occurrence occurrence for that particular species if the
[1:25:46] spelling is also correct in the model um so i i did receive that that email question and popped it in there and
[1:25:54] we'll include that in the q a document as well um so i think that might be uh the majority of the questions
[1:26:04] for today and we are very close to the time for the session here here so i think we can go ahead and wrap up
[1:26:13] for today i just want to give a huge thank you to to andrea andrea erica and mary for um the presentation
[1:26:23] and for joining us today and answering so many of these questions um it's really great to have this engagement
[1:26:29] with the community and um you really have some thoughtful responses to all these questions so very very helpful
[1:26:37] um we have also included the um email address to contact the the wallace team at the top of the document and
[1:26:46] looks like my colleague is scrolling up here um there's a there's a google group so do please
[1:26:52] um message the google group there there's a lot of information there um and then we've included the the wallace
[1:26:58] email team um there as well yeah um there's the google group as well and um yeah i would
[1:27:05] just like to to thank our guest speakers again um and and remind everyone to please join us next
[1:27:13] session session on thursday that'll be our final session for this training series and do please check back on the website
[1:27:22] for the homework at that point as well so thank you everyone and enjoy the rest of your day
[1:27:37] you
