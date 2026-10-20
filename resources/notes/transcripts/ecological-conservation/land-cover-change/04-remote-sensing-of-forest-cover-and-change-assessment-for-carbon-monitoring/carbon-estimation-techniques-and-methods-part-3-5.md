# Carbon Estimation Techniques and Methods, Part 3/5

`https://www.youtube.com/watch?v=VxtD9Op--tM` · id 307 · 1:25:26 · module 88 — Remote Sensing of Forest Cover and Change Assessment for Carbon Monitoring

[00:02] hello everyone welcome to week three of our webinar series remote sensing force cover and change assessment for carbon
[00:09] monitoring monitoring my name is amber mccollum and i will be your instructor today along with two guest speakers from the usda 4 service
[00:18] grant donkey and ty wilson as a reminder for this course we'll have two sessions per week each thursday
[00:28] please make sure you only sign up for and attend one of these session times we have lectures guest speakers and
[00:36] hopefully time for questions and answers at the end you can find all the course materials on the website listed here this includes
[00:44] past recordings presentations and homework assignments we will also eventually have each of our presentation materials available in
[00:53] spanish spanish if there are any additional questions you can email me or my colleague cindy schmidt at the email addresses listed
[01:02] below we have two homework assignments for this course the first homework assignment is available on the website
[01:11] now and it's due on june 30th the second homework will be made available next week we have also included the website where
[01:20] you can find the link to the homework in the chat and i can provide that again if anyone
[01:26] needs it to receive credit for the homework you must submit all your answers via google forms forms you will receive an email receipt of the
[01:34] homework submission after the deadline for each homework we will then send a separate answer key to all the participants that complete
[01:42] each homework after the final webinar to receive a certificate of completion you must attend 4 out of five live
[01:53] webinars and complete all the homework assignments assignments it takes some time to process the certificates so you can expect to
[02:00] receive those about three months after the completion of the course we had one prerequisite for this course
[02:09] basically knowing and understanding the fundamentals of remote session remote sensing sensing you can watch our on-demand course
[02:16] that's listed here which includes two one-hour recorded webinars as mentioned previously you can access all the materials
[02:30] via the course website listed here please note that in order to view the webinar recordings after each session you must enter your
[02:40] information again and register register this helps us keep track of who is viewing the online recordings however once you register you'll
[02:50] automatically be taken to view the recording online i also suggest to do this if you have any bandwidth
[02:58] issues issues throughout the presentation today here's an overview of the course agenda this week we will be discussing carbon
[03:09] estimation techniques the agenda for this week includes discussing the role of forest carbon monitoring providing information about national
[03:21] forest inventories and how to identify the status of forest established trends and how to maintain the sustainability
[03:28] of forests we will discuss carbon stock estimation and reporting we'll provide approaches for time series image processing and analysis
[03:37] provide a use case useful case study and hopefully have time for questions and answers if we do not get to any of your
[03:46] questions by the end of the webinar today we will be keeping track of these and we are hoping to create a
[03:54] document where we can answer questions that may have not been addressed during this webinar so now we'll hand it over to our guest
[04:06] speakers from the usda forest service our first speaker grant donkey will discuss forest carbon monitoring and reports in the us
[04:14] then we will hear from ty wilson we'll discuss discuss national forest inventory data and satellite imaging emissions and removal
[04:23] for estimating emissions and thank you very much amber well my name is grant domkey and i'll be presenting
[04:30] the first few slides here in this presentation and i'll be covering uh broadly the us experience around forest
[04:36] carbon monitoring and reporting in the united states i lead the group in the u.s that compiles the emissions
[04:44] and removals uh from the forest land category for uh greenhouse gas reporting to the u.n each year
[04:51] and i'll be giving a broad overview of our experiences and also the work that we do here in the united states
[04:58] to that end so so why are we interested in in accounting for uh carbon emissions and removals from the forest land
[05:10] category well first of all uh forests in the united states account for around 86 percent of all annual sequestration
[05:18] uh each year um relative to the uh six land use categories and what this amounts to at least for
[05:28] the 2016 inventory is around uh offsets around 11 of the total emissions total co2 emissions uh for the nation and what what what
[05:38] that amounts to is around uh a sink of around 172 million metric tons of carbon uh in 2016.
[05:48] so the role of carbon accounting so in our group essentially what we do since we sit in the national forest inventory
[05:55] the fia program within the u.s which is sort of the us the census of forests in the u.s
[06:02] we collect information on around 125 000 forested plots we take that data and convert it into information we turn that into estimates
[06:14] of carbon and other forest attributes and then use that information in reporting instruments uh to the united nations uh to the u.s
[06:23] congress uh to national forests within the forest service and a variety of other national international uh reporting instruments
[06:33] and the the principal instrument that we report to again is this un document that's compiled each year by the environmental
[06:40] protection agency and then via the state department is submitted to the united nations so within our group we have sort of uh
[06:51] an improvements paradigm that we work within and a set of sort of constraints or um or ideas or ideals that we sort of
[06:58] adhere to and really um given that we're reporting to the united nations we follow the intergovernmental panel on climate
[07:05] change good practice guidance for uh for national inventories and a sort of guiding principle or phrase that we we follow is that
[07:15] inventory should contain either over nor underestimates underestimates so far as can be judged and the uncertainties in those estimates should
[07:23] be reduced as far as is practicable and so there's a set of tenants that we really we really adhere to and the fact
[07:30] that we sit in the national forest inventory means that we're trying to leverage in-situ information observations from the ground wherever
[07:38] possible and while doing that also integrate auxiliary information like remotely sensed information which we'll be talking about today but also climate
[07:47] attributes and other variables that might be useful to identify and drivers of change we try to align national international
[07:57] reporting instruments wherever possible so that our reports are consistent and the estimates are consistent on an annual basis and also align those
[08:05] instruments for reporting reporting baseline to present information with projections projections for a variety of different instruments as well
[08:16] all the work that we do we try to maintain transparency and open access so all of the plot information in the
[08:21] united states is available publicly available available uh and and all of the methods that we use uh to compile estimates in the
[08:29] greenhouse gas inventory are vetted through the peer-reviewed literature and are published so you can you can go out and find the the
[08:37] methodology that we use for all the different approaches during that compilation process we try to incorporate emerging science
[08:45] wherever possible and that means working with partners and other folks from universities other government non-government agencies to leverage
[08:57] all the resources available to us to sort of maintain sort of cutting edge science and accounting principles
[09:06] we also are constantly trying to build new partnerships with with uh folks within the agency but also universities
[09:13] etc uh uh again to to keep our finger on the pulse of what's happening out there and uh maintain and improve the methods
[09:21] that that we're developing and finally we try to remain nimble to address ever-changing requests uh guidance and stakeholder needs
[09:33] so i thought up front i would i would sort of define what we mean or what we're accounting for in the u.s in terms
[09:39] of our greenhouse gas inventory report and and we only include managed lands and and by managed i don't necessarily mean managed
[09:47] from a forest management perspective but lands that um are influenced in some way by human activity so only those
[09:56] so only those lands are included in our unf triple c reporting all forest land in the uh
[10:03] conterminous united states is classified as managed and southeast and south central coastal alaska alaska are currently considered in our managed
[10:12] land land definition definition but i will say that a recent analysis classifying classifying lands on the interior of alaska have
[10:21] identified a whole suite of areas that do meet that managed land definition and some of the techniques
[10:28] and approaches that tai will be discussing later are being targeted targeted to to investigate those lands in the interior
[10:36] where where the fia program the national forest inventory has not measured historically and so there's a really broad definition
[10:46] and actually it's it's rather detailed but a lengthy definition of of forest land in the u.s but it can really be
[10:53] boiled down to just a few a few key points it there's got to be a minimum cover or stocking it's got to be
[11:00] a minimum area it has to the trees in that area the site must be able to support uh tree growth to a
[11:07] height of five meters and we we want that land to be considered a forest land use not a a
[11:13] land like a grassland or other land use so so typically it would be considered a forest land use if if it meets those
[11:19] other criteria i'm just going to give a brief overview of the national forest inventory the sampling frame and tai will go into
[11:29] a bit greater depth so really it's a three-phased process there's a pre-field phase where we use remotely sensed
[11:36] information to identify forests from non-forest non-forest and those plots with at least a single uh forested condition
[11:45] are then sent to the field and when when i say sent to the field what i mean is a
[11:50] field crew will go out and visit those plots plots and measure a variety of forest attributes attributes and those those plots are uh distributed
[12:00] approximately every 2 400 hectares uh and then there's a set of intensive plots and and those intensive plots
[12:08] basically every 16th core plot is considered an intensive plot and so in addition to the core plots where we
[12:15] measure things like a tree diameter species species tree heights and a variety of site level attributes those intensive plots we
[12:23] measure additional attributes around standing and down dead wood litter soils uh understory vegetation and a variety of other site and and uh
[12:33] component specific uh attributes that are used in our carbon accounting and so here's an example of the the
[12:43] layout of the the the plot design so on the left or on your left you will see sort of this hexagonal grid
[12:52] with it each hexagon represents approximately 2 400 hectares within each hexagon a plot is randomly located and then you can see this sort of uh
[13:03] scaled version of a plot each plot is comprised of four subplots and then within each subplot a variety
[13:12] of of micro plots and transects are included particularly on those intensive uh plots to measure a variety of site
[13:22] and and component attributes so as i said there are around 127 000 plots that have at least one forest
[13:33] condition in the u.s and increasingly we've been using not only the forested plots but also non-forest plots because during that
[13:43] pre-field phase we collect a variety of information information on those on on all plots including land use information in recent years and so
[13:51] this is really important in terms of our reporting because we're working with the other land use categories to make sure
[13:58] that we're not double counting and ensure that we're completely accounting for all carbon across all of the ipcc
[14:05] pools which i'll describe in a minute on all land uses so in a nutshell how we estimate things based on uh the
[14:16] different attributes based on the nfi is we estimate a carbon density at the plot level for each plot
[14:23] the carbon stocks are summed to total by inventory cycle so for each year and the stock change is
[14:31] essentially the difference between successive stocks divided by the time interval so uh a stock in in 2015 minus
[14:39] the stock from 2014 would be the stock change for 20 2014. and estimates develop are developed separately for
[14:46] each state or region and again it's important to emphasize here that historically we've relied primarily on the nfi to compile
[14:54] our our greenhouse gas inventory estimates using this stock difference approach the forest ecosystem carbon pools of interest
[15:04] interest are above ground live biomass which includes includes live trees as well as understor the above ground understory
[15:12] material below ground by biomass which includes the coarse roots from that woody material as well as the
[15:19] herbaceous material dead wood which includes both standing and downed dead the litter material which includes the organic material above mineral soil
[15:31] and then finally soil organic matter which is the mineral soil and we measure to a depth of 20 centimeters
[15:38] and use models to report to a depth of one meter so here's the distribution of forest carbon stocks by pool in the u.s based
[15:49] on the 2016 inventory which was released back in april you can see that the soil organic carbon
[15:56] is the largest contributor to our total carbon stocks in the united states by a long shot followed by above
[16:03] ground biomass and the litter material and this is a a spatial distribution of the carbon stocks in the us you can see
[16:16] that there's a tremendous amount of carbon in the pacific northwest so the part of the united states as well as the
[16:24] northern lake states in the pacific northwest that's predominantly above ground biomass driving that the carbon stocks there as well as
[16:33] substantial carbon stocks and in the northern lake states it's driven primarily by soil carbon stocks here's a essentially a breakdown over
[16:51] the entire reporting time series from 1990 to the present of all carbon stocks and also harvested wood products so
[16:59] that's another part of the forestry section within the land use land use change and forestry chapter that we contribute to
[17:07] and you can see here that soils is primarily the the main driver of of carbon stock change or excuse me above
[17:16] ground biomass is the main driver of carbon stock change on an annual basis so sequestration forest growth is really
[17:22] the the major driver in carbon stock change change followed by the other carbon pools and then to a lesser extent the harvested
[17:31] wood products and on an annual basis on average over the time series we've been sequestering between 180 and 200 million
[17:39] metric tons of carbon each year and so this is a very iterative process we we began reporting uh to the united
[17:50] nations in 1992 to and and since that time have uh uh made a number of improvements around the
[17:58] models that we use for in the pool science field as well as the mechanism that we use to compile all of these
[18:05] estimates estimates and ultimately deploy those estimates as part of the greenhouse gas inventory report report here's sort of a development timeline of
[18:17] how things started as i said things started in the early 1990s and based on the 1998 farm bill some
[18:24] legis congressional legislation that occurred in the late 1990s the periodic information that we were collecting as part of the national forest inventory uh
[18:33] was was we made a transition to annual information and we and also started collecting additional attributes around all of the different
[18:42] pools i just described and so over the last 20 years or so we've used that information leveraged that annual
[18:48] information across all of the different forest attributes to develop models for standing in down dead wood litter soils
[18:56] understory etc and this timeline really illustrates the improvements that we made and that we continue to make most
[19:04] recently recently the soil organic carbon and litter pools and we're currently in the process of developing a new accounting system which
[19:13] more fully integrates remotely sensed information which we'll get into in a little bit as part of that improvements timeline
[19:23] i said that we've continuously refined the way in which we estimate uh the different carbon pools or components
[19:30] within within the inventory and recently we've updated the litter estimates based on in-situ observations from those uh intensive
[19:39] field plots historically we've used literature values and again following those sort of tenants that we we sort of work within and sort of the
[19:49] mission of the group we're constantly trying to leverage remotely sensed information as well as nfi information in situ observations wherever possible
[19:58] to get estimates or or develop models that are sensitive to the drivers of change just give you an example of some recent
[20:10] work around soil organic carbon so historically we've used used natural resources conservation service pet ons which are predominantly uh
[20:21] focused or located outside of forests which this uh this graphic here illustrates so you can see the blue pet
[20:28] ons here uh those are are essentially the uh the pet ons that were used to develop the original soil
[20:35] organic carbon model the gray area in this map is the forest land in the in the lake states region
[20:42] minnesota wisconsin and michigan and the red points here are the national forest inventory plots but you can see that those blue plots
[20:53] are or pet ons are are essentially focused outside of forest land so there was an inherent bias in in
[21:01] the soil organic carbon model that we were using and so between that and the fact that we
[21:05] have a nearly uh complete and extensive inventory of soil organic carbon in the inventory now we've begun leveraging
[21:13] that information in combination with a variety of auxiliary attributes to predict soil carbon across all plots in the us
[21:23] and so this is the distribution of soil organic carbon plots we have roughly 5 000 plots where we measure to a depth of 20
[21:32] centimeters centimeters and based on those plots and integration of a variety of auxiliary attributes and information from
[21:42] nrcs on forested plots to greater depths than that 20 centimeters we've developed this new soil carbon map
[21:50] which reflects the estimates that we used in the 2016 inventory another major component of the work that
[22:01] we do is interact with the other land use categories again to ensure that we're not double counting
[22:07] and also ensure that we are completely accounting for all carbon across all land uses particularly the carbon that
[22:16] is transferred or lost as a result of a land use change and so these graphics here illustrate
[22:23] changes uh in the carbon sink the forest carbon sink as a result of land use changes in the eastern united states
[22:30] you can see that the uh majority of loss land use change has occurred in croplands and this has benefited the
[22:37] forest land category but also many of the cropland cropland much of the cropland area has also been
[22:45] converted to settlement which is not surprising so some of the ongoing and future work that we're doing as
[22:55] you know in in in an effort to improve our estimates within the greenhouse gas inventory so historically we've used uh
[23:02] remotely sensed information to inform plots and we're now starting to focus on moving from pixels and forming plots to
[23:09] plots and forming pixels leveraging leveraging all sorts of auxiliary remote sensing information information and one of those pieces of information
[23:18] that i think tai will get into a bit in a little bit is uh this dense time
[23:23] series of landsat and in particular we're interested in this to attribute carbon flux to particular disturbances so uh while the national forest
[23:32] inventory is really useful at a strategic level when we scale down the spatial and temporal resolution of
[23:39] those estimates is not quite as refined as we would like and so by incorporating remotely sensed information we believe that we can have
[23:48] more produce more resolved estimates both spatially and temporally we're also leveraging lidar information and a variety of other auxiliary
[23:57] attributes to develop biomass maps and other products and increasingly are relying on nape imagery from the national agriculture imagery program
[24:08] to to begin looking at plots using aerial photography photography to identify really fine scale changes on our plots and we believe that this
[24:17] information information will be really helpful as we continue to build out our our system for identifying land use
[24:26] changes and carbon stock changes as a result of those changes changes and so this is sort of a
[24:35] schematic or a graphic illustrating the direction that our carbon accounting system is going in the united states where
[24:44] historically we've relied on a periodic uh national forest inventory and annual inventory for the accounting system we
[24:52] are now now going to use those periodic and annual inventory data in combination with a suite of remotely sensed
[24:59] information to provide more spatially and temporally resolved estimates of carbon stocks and stock changes as well as their uncertainties
[25:07] across the united states so final thoughts on this sort of broad perspective of of the u.s experience in
[25:18] greenhouse gas accounting and reporting uh are that the national forest inventory remains the foundation of forest carbon estimates for the united
[25:26] states working on land conversions is a relatively new area for the united states states and we're beginning to think more about
[25:35] uh greenhouse gas monitoring reporting as not a forest level or a forest land category but as a continuous system that
[25:42] includes all land uses and we must work with those other land use categories to ensure internal consistency in terms of the methods that
[25:50] we're using in our accounting across the various forests or across the different land use pools and also that we avoid double counting
[25:59] and ensure complete accounting and so with that i would like to hand it over to my colleague ty wilson who will
[26:06] go in uh to some details around some of the remotely sensed or remote sensing efforts that we're currently working on
[26:14] great thank you uh and thank you grant for providing the uh the context for what i'm about to present uh that was a
[26:20] really excellent overview of carbon reporting process uh uh so i will spend some time now uh maybe
[26:29] digging into the weeds a little bit and talking about the use of satellite imagery for improving the precision of
[26:36] our estimates of carbon emissions and removals removals so here's an outline of what i'll present uh first i'll just give a little
[26:43] bit of background information on ipcc guidance regarding carbon reporting reporting i will just talk very briefly again
[26:52] about the national forest inventory of the united states the the fia program that grant us spent some time talking
[26:58] about there uh and then i'll talk in a little bit more detail about uh the use of dense time series
[27:06] satellite imagery namely landsat in this case case and i will give a worked example from a research study that we have been
[27:16] conducting on how we might be able to improve the precision of our our estimates using this this information in conjunction with the
[27:25] nfi data and then i'll talk about uh the results the preliminary results from the research study using these different
[27:32] approaches so first talking about ipcc guidance on nfi basically the guidance is that nfi data are not really required but
[27:47] they can be used for for carbon reporting this would be an example of using design-based sampling or design-based inference for making
[27:57] population population estimates estimates and in this case within nfi we would have multiple measurements or at least
[28:04] in the case of a continuous nfi we would have multiple measurements of the same plots over time which would give us some
[28:10] information about change so from this change information we would be able to estimate emissions or removal factors for any of our red plus strata
[28:24] as grant just described this is an example of a tier 3 approach to the above ground carbon pool
[28:34] relative to i think you maybe discussed the tiers in the previous uh one of the previous presentations
[28:45] and primarily for the nfi we're really talking about the the main focus is on forest land that remains forest land
[28:52] less less less so on uh land use change but we will talk a little bit about that
[29:00] and this would be an example of a stock change approach rather than a gain loss approach and again hopefully you've
[29:07] discussed this in a previous presentation with the gain loss approach we would be estimating uh activity data first for
[29:16] these would be examples of uh changes from one land use to another or perhaps land uses remaining in that
[29:24] land use category and then we would have some uh emissions factors or removal factors associated with those uh with
[29:33] those activity data and then it would be a simple matter of multiplying your activity data by your emissions factors to get your
[29:43] total removals or emissions in the case of stock change it's all based on these uh observations of change uh that come
[29:51] from the the the sample of plots given that that grant did such a great job discussing this i'm not sure how
[30:02] much time i'll spend on the the national forest inventory the u.s which is the forest inventory and analysis
[30:09] program as he said this is a forest service program and and the the main purpose is really to report
[30:16] on forest status and trends across the united states this is really intended to be a strategic survey so we would be
[30:26] reporting on uh trends say at the state or maybe maybe a sub-state level but nothing much smaller than that that's
[30:33] really not the purpose so this is a national program however it's uh it's implemented regionally which can lead to some issues however
[30:43] we've developed this developed a set of common standards for implementing this inventory across the four regions regions in the united states we have a northern
[30:54] region southern intermountain west and pacific northwest region and that allows us to customize while we have this common
[31:03] sampling frame common field collection protocols we're able to tweak the sample or tweak the protocols to address
[31:12] regional concerns so as grant said we have a common sampling frame where we have one plot installed per every 2 400 hectares
[31:25] this information is collected across a 5 to 10 year cycle depending upon what part of the country that you're in
[31:33] this would be an example of a quasi-systematic sample we basically are putting in a plot inside this
[31:43] you saw this hexagonal mesh that grant showed in a previous slide and we install a plot in each of those hexagons
[31:51] but not necessarily in the center because we want to maintain uh plot security plot confidentiality and and sample integrity uh so here's sort of a
[32:01] a recap of what what grant had presented before our sampling frame is based on a hexagonal tessellation of the the land
[32:09] base if you could imagine a a soccer ball at least the old-fashioned kind of soccer ball that
[32:15] was made up of hexagonal and pentagonal patterns uh or panels if you were if you had a large enough soccer ball that
[32:23] could enclose the earth and you arranged it in such a way that one of those hexagons covered uh the contiguous
[32:30] united states which you see here in the middle uh the middle of this uh this this figure
[32:36] figure and then you were to subdivide that into smaller and smaller hexagons you would basically have our our sampling frame
[32:43] and then in each of those hexagons we would install one of these permanent plots as grant described it before it's
[32:49] it's basically a cluster of four four different subplots but i i won't talk in much more more detail about that
[32:58] and then again on each one of these plots we will collect some information that's associated with the plot as a
[33:05] whole like for example it's its location in terms of latitude and longitude the elevation of the plot and then on each
[33:12] plot there would be one or more conditions which would be basically be areas that have similar land cover
[33:18] ownership or stand age and we'd collect other information like slope or any indication of disturbance on the plot and then in turn on each
[33:28] condition there might be one or more trees and for each of those trees we would again make some observations such
[33:35] as the status of the tree is it alive or is it dead what's the species of the
[33:40] tree we'd measure its diameter at breast height height uh we'd estimate its height and any indication of damage on the tree so
[33:48] those are some of the examples of of the field measurements that we would make on the plot or in different parts of the
[33:53] plot plot and in addition to these observed observed attributes there are a series of modeled attributes that we compute later
[34:04] using our database compilation system where we would do things like on the condition level we would uh type the forest uh we
[34:12] would compute volume for each tree based on our uh our allometric equations and and models uh and from those we would
[34:21] derive things like uh biomass or in the case of this this particular study uh carbon different carbon pools
[34:30] now ultimately we are while the plot information is is interesting ultimately what we're interested in doing is using
[34:38] the sample to say something about the population as a as a whole we can't of course take a
[34:45] complete census the estimates that we make for the population are based on this sample so there will be some error associated with
[34:52] that that so this is again an example of design based inference where the source of uncertainty in these
[35:01] estimates will be basically whether or not a population unit is in our sample or not in our
[35:07] sample that's where the uncertainty comes in and that of course is going to be determined by the sample design the
[35:14] sample design that i showed you basically gives us a measure of the probability of any population unit being included in the
[35:23] sample or not and then we use this information with post-stratified estimators to make uh unbiased estimates about the population
[35:33] which is what we're really interested in and so for each of our strata we come up with design weights and those are those
[35:41] will be those weights will be the same within each strat and basically it's like an expansion factor each plot
[35:47] represents a certain amount of land within a stratum without getting into too much detail and we can use
[35:56] the sample then to make estimates of what's the current state of the forest or if we in the case of multiple
[36:03] observations of plots over time then we can say something about change in the landscape we're talking about a gain loss approach
[36:13] uh from the nfi alone so this would just be based upon uh the the plots the sample of plots uh
[36:20] and the information we collect on those so this would be not using a map at all no auxiliary
[36:26] information is used another approach would be to use the gain loss approach and but with the stratified estimator
[36:40] uh this is a little slightly different than the post ratified estimation that i was discussing earlier and i'll get into
[36:46] this in a little more detail in a little bit here and this would use a map but it would
[36:51] use a thematic map so some sort of classification of the landscape basically into activity data and like i
[36:59] said we'll talk about this in a little more detail in a bit and then finally we could use a stock change approach with
[37:05] the model assisted regression estimator this also uses a map but in this case it would be a continuous map
[37:13] so so let's let's dig into this in a little more detail so these two examples the gain loss
[37:20] approach with the stratified estimator and the stock change approach with the model assisted regression estimator they both use auxiliary information they use
[37:28] basically maps but in different forms so first i'll talk about the auxiliary information that uh that we are using or
[37:37] that we are planning to use i think uh uh grant talked a little bit earlier he talked about kind of the the state of
[37:43] where we are and where we would like to be and so i'm going to talk a little bit
[37:46] more about kind of where we'd like to be in the future using using dense time series imagery in this case
[37:53] for this this study area i'm talking about landsat 7 enhanced thematic mapper plus data and i think you talked about
[38:01] this this maybe in your last uh weekly webinar where you talked about remote sensing platforms so landsat 7 as you hopefully all know
[38:12] uh collects information in in eight bands uh the spatial resolution or the pixel resolution of the data is anywhere
[38:19] from 15 to 60 meters uh here's a a table that describes the bandwidths and the uh ground sampling
[38:30] density uh in meters of the pixels that uh the pixel information and it's collected in those different bands
[38:38] and that information is collected basically any spot on the ground is revisited every 16 days so i'm going to talk about a a data set
[38:49] it's again based on landsat but a lot of pre-processing has already been done this is particularly useful uh for us in
[38:57] the united states but actually i think now this data has been made available globally uh maybe just not at the same
[39:03] temporal resolution as what i'm showing here but it's a it's a website and data set called weld which is the web enabled
[39:11] landsat data set and this is a a joint venture between nasa usgs and south dakota state university
[39:20] this data has been pre-processed in a number of ways it's been orthorectified it has been uh basically recalibrated from uh
[39:31] from digital numbers raw digital numbers to top top of atmosphere reflectance which is a typical pre-processing uh
[39:39] step that most people would have to do but it's been done for you and finally the data have been
[39:45] composited into a number of different uh compositing bins but in my case i'm using the monthly composites which means
[39:53] uh for every spot on the ground or at least for my study area we've taken all of the collections
[39:59] within one month and and and produced a composite image from that for that month so the weld record is uh is a decade of
[40:11] images that decade spans from 2003 to 2012 which is particularly convenient for us in the fia program
[40:20] because that spans at least for my study area that spans two five year fia cycles which means that i will have
[40:29] observations of plots at two points in time so i can start to look at change over time
[40:37] so i'm using one weld tile you can you can download tiles that are five thousand by five
[40:44] thousand pixels these are roughly uh that's roughly the size of a landsat scene maybe a little bit smaller
[40:53] [Music] [Music] so my study area or for this particular uh example is one tile i see somebody's
[41:02] raised their hand here okay it looks like maybe maybe that was addressed somebody else has raised a
[41:11] hand here amber should i try to okay i'll just i'll skip these for now uh i think we'll
[41:18] get to those in a little bit so we have one tile you can see here this is
[41:22] located in um yeah there is a link to the weld website on the slide uh so we can see that uh
[41:32] you can see that later um so we're working with one weld tile in wisconsin uh uh this is a really complex landscape in
[41:41] terms of lulu cf that's land use land use change in forestry there's a lot of interesting things that have been going
[41:47] on in that landscape over this 10-year period so we will we'll look at that in a little more
[41:53] detail in a bit but because we're working with dense landsat time series in this case monthly composite data
[42:00] we're and we're working with landsat 7 we've got a couple of issues that we're going to have to deal with one of the
[42:05] issues is of course clouds uh and then also there's missing data due to the fact that the uh landsat 7 in the case of landsat
[42:15] 7 sensor the etm plus sensor the scan line corrector conked out in 2003 and the scan like corrector is really
[42:23] just a small mirror that helps to compensate for the forward motion of the spacecraft and so when that compt out it
[42:30] it resulted in some uh some of these wedges of no data that's more apparent as you get further uh from nader which
[42:39] is directly beneath the sensor so you can see that on the right there that's an example showing you before and after
[42:46] of the the bay area around san francisco in california so that's one issue that we're going to
[42:52] have to deal with are these data data gaps gaps another issue that we'll have to deal with is the fact that since we're
[43:00] especially interested in vegetation in this case and we know that vegetation is seasonal response to uh to the the
[43:07] weather to the light environment there is seasonality and we're showing an example of that here this information
[43:14] comes from the wide area monitoring information system which is a whammis um um and this shows you can see there's a
[43:23] there's a crosshairs there there's a little plus a yellow plus that shows a point on the landscape and what
[43:30] i'm showing there on the right is uh is a time series of evi this is from modis and this is showing you the
[43:38] seasonality for that point on the ground over the course of oh it looks like roughly 10 years or so so it's very
[43:45] clear that there's seasonality in the spectral response or the case in this case it's a vegetation index
[43:51] so we have to account for that if we're talking about change because it depends on when we've made the observation
[44:00] so the question is how do we handle the gaps in the data that are due to the scanline corrector or clouds
[44:09] how do we characterize these seasonal patterns patterns well one thing that we can do is use something called harmonic regression so
[44:16] we can do harmonic regression of the monthly composites so what you see down there this this image sequence is
[44:23] showing you rather than seasonality for one point like i showed you in the previous slide this is showing you
[44:29] seasonality across the entire uh across conus i think the image on the left is from january and then the one in the middle
[44:38] is in march and the one on the right is i think it's may june so you can
[44:42] actually see that different parts of the landscape and different cover types green up and then senesce at different different rates
[44:51] so that's important information for us to to account for so harmonic regression in a nutshell it involves the use of a
[45:03] fourier series so the fourier series equation isn't too too scary it's uh it's really just a summation of sine and cosine terms so
[45:14] you what you're doing with the fourier series is then you're approximating any periodic function so here's an example
[45:23] this is using uh this is using a fourier series to approximate a square wave so you see the square wave there in black
[45:31] and then the colored curves that you see there are fourier series that have been fit to that uh that square wave with different
[45:41] numbers of harmonics so as you add more harmonics to the series you can more closely approximate the periodic
[45:47] function function so this is exactly what we're going to do with the landsat monthly composites another transformation that we're going
[45:58] to do to the data is we're going to transform the raw etm plus bands into tasseled cap
[46:05] this is a very common transformation that's done with landsat data and it's to make the those raw bands into something that's
[46:15] more more meaningful to the analyst so the reason that they call it tasseled cap is because if you imagined viewing
[46:24] it in three dimensions it kind of looks like a cap looks like maybe peter pan's hat or robin hood's cap
[46:32] so you can see here uh tasseled cap is broken down in terms of brightness brightness and greenness
[46:40] and wetness and so we see that here and the x-axis is the brightness band or brightness component on the y-axis it's
[46:47] the greenness component and on the z-axis it's the wetness component so you can see a dark green blob there
[46:55] uh kind of resting on top of the cap that would represent forests uh that's what uh forests look like in terms of
[47:03] the tassel cap transformation that's where you'd find them in this feature space of three dimensions or in this
[47:09] case i'm looking at these two dimensions and then that large triangle of light green would basically be cropland
[47:17] and then the brown sliver along the bottom would be either bare soil or like rangeland and then that blue
[47:24] uh that small blue circle over to the left would be water and then the big gray kind of uh oval uh to the right
[47:33] would represent uh urban or built up areas so you can see depending upon the land cover uh they occupy different places in this
[47:43] feature space in this tasseled cap feature space so that's information that we will pull in as well
[47:52] so what we're going to do is uh is use the tassel cap transformation to brightness greenness and wetness and
[47:58] then we'll look at these monthly composites of tasseled cap brightness greenness and wetness and fit a fourier
[48:05] series to each of those and we're only going to use two harmonics per series because we really the main purpose here
[48:12] is to is to capture the overall seasonality of the data we don't necessarily care about capturing every little bump or jag or
[48:20] wiggle in the time series we want to get the overall trend so in this case i've got two five year
[48:28] periods that i'm going to fit for a series two so i've got two 60-month periods right i've got monthly data and five years so
[48:37] that's five times 12 is 60 months per period period and then i've got three tasseled cap components i've got five fourier series
[48:46] fs is fourier series coefficients uh per series when you use two harmonics it results in uh five coefficients that
[48:55] you're estimating and i've got two time periods so in the in the end i'm going to be basically i'm going to wind up
[49:01] with 30 features that i can use to to to do my my modeling or my classification of the landscape
[49:11] so we have one more issue that we have to deal with is because i want to use
[49:14] this landsat information with the nfi data which is the national forest inventory data uh for from fia
[49:23] is that the fia plots are actually larger than uh landsat pixels and here is a here is a
[49:31] figure that shows that you can see the relative size of the fia plot to a landsat pixel so a simple solution for
[49:39] dealing with this spatial mismatch would be just to use the mean spectral response of a three by three window
[49:47] centered on the the center subplot so here's some results so this is um in this case i'm using this is time period
[49:57] one so this would be from the period of 2003 to 2007 and what i'm showing you here in this
[50:04] rgb image so red green blue image is the mean brightness greenness and wetness for my my weld tile and you can see here
[50:14] very clearly that uh there are some some different land covers here so what you see in blue
[50:20] would be that's high in wetness right so those would be water bodies and you can see for example
[50:26] uh some lakes in the northern part or the upper part of this image uh and then red would be brightness so
[50:33] that would be like bare bare soil um so you see that in the agricultural areas which are mostly in the southwest part
[50:41] of the image and then green high in greenness would be uh would be forest land and so that's
[50:47] what you see kind of throughout the northern half of this image so we can clearly see some
[50:53] different uh land covers in this landscape landscape and here it is in time period too and it might be hard to see but we'll
[51:01] come back to this in a little bit there have been some changes between time period one which was 2003 2003-2007
[51:08] and then time period 2 which is 2008 to 2012. 2012. so we'll focus on those changes in a
[51:14] little bit so here's an example of a thematic map of change so i just use those 30
[51:21] features that we identified by using the tasseled cap transformation and the and the harmonic regression fourier coefficients
[51:31] coefficients and i've done a simple iso data classification which is a which is a a fairly commonly used unsupervised
[51:39] classification approach on all of these 30 features and then i've gone in and i have uh assigned labels to the the
[51:49] classes that uh that i've uh that i've categorized here right so you can see some things like
[51:56] for example that little red slash over on the right side of the image that is actually a a tornado track there was a
[52:05] tornado event in 2007 right in the middle of this time series a major disturbance event and you can
[52:11] see that clearly in this classification and then you can see some small patches of red kind of in the northern part of
[52:18] the image those are harvests in kind of industrial forest land areas and then there are also some some
[52:26] blue and black pixels in there that you see as well and those are regrowth after previous harvests
[52:36] so again kind of coming back to that ipcc guidance we're really focused now on this second piece this is the gain loss approach
[52:45] with the stratified estimator using a thematic map and that's the thematic map that i've created there just using unsupervised classification
[52:54] of those features that i've derived from the imagery so before i talk about that next piece we have to talk about moving from
[53:04] design-based inference which i talked about before to model-based inference in model-based inference we can borrow strength basically from
[53:14] units outside of the sample and this is useful when we have auxiliary information for units outside of our
[53:21] sample like we do with satellite imagery this can result in some major reductions in the variance of our estimates but it
[53:30] really depends upon the strength of the relationship between the auxiliary variable and the variable of interest and there also is because we're creating
[53:39] a model here there is the potential for bias but we can actually correct for that if we can estimate what the bias is
[53:47] one of my favorite quotes about about models is from george box the statistician who said all models are
[53:54] wrong but some models are useful so i think that's important to keep in mind is that we we kind of go into this
[54:00] knowing that the model is wrong in some way as all models are but that doesn't mean that it's not a useful approach
[54:09] so since we're talking about uh models here we have to define what the response variable of the model is
[54:17] so because we are working with satellite imagery and with satellite imagery we can really only detect land cover we
[54:25] can't at least directly measure land use it would be useful to use a response variable that's somehow
[54:32] associated with land cover so tree canopy cover of course in in our case we're interested in forests we know that
[54:39] tree canopy cover is going to be uh uh somehow related to the basal area of trees trees basil area for those of you who don't
[54:50] know know is basically if you were to take a measurement of the diameter at breast height if you could slice through the
[54:58] tree at that point and you could measure the area of the stump that resulting stump that would be the
[55:05] basal area and we know that that area is uh is going to be closely related to the
[55:11] canopy and the canopy of course is what we're detecting at satellite so for the purposes of this uh kind of this worked
[55:18] example here i'm going to use that just as a proxy for above ground carbon i guess i could have used the above ground
[55:25] carbon carbon measurement because that is a modeled uh i shouldn't say measurement i could have used that attribute which is a modeled
[55:33] attribute in our database but just to kind of keep it simple and not add too many models on top of models i'm just
[55:38] going to use basal area as my proxy and so for my small study area that 5000 by 5000 pixel area i've got
[55:49] 1446 plots that have been re-measured between 2003 and 2012. so in this case i need a predictor
[55:59] variable variable so i'm just this is more to kind of give folks of flavor for the kinds of
[56:05] analysis analysis that um that you might do with uh with uh imagery with remotely sensed imagery a very common
[56:15] approach to working with multivariate data data is principal components analysis so it's another kind of transformation it's
[56:22] actually very closely related to the tassel cap transformation that we saw before before and it results in
[56:32] standardized and orthogonal components which means that there should be no correlation between one component and the next which is important when we fit
[56:42] a model we want to deal with that multi-co-linearity of our predictor variables variables and and really useful
[56:51] it's really useful in the case if you wanted to reduce the size of your predictor data set but maintain most of
[56:57] the variance that you see like in this case we can account for 93 of the variance that we see in the predictor data set
[57:06] just using the first eight principal components so we can shrink the size of our predictor data set considerably
[57:13] without giving up too much information so here's an example back to that study area in this case it's a this is an rgb
[57:22] image again but now i'm showing you principal components one two and three and again you can see here these are the
[57:29] principal axes of variability in my uh my satellite imagery my multi-temporal satellite imagery and what we can see
[57:38] here is that the agricultural areas in the southwest show up very clearly as being either kind of red or orange or yellow in this
[57:48] in this rgb image and water bodies are kind of this light blue which you can see and interestingly now you can see that
[57:58] forest land can can be differentiated into deciduous and evergreen so evergreen forests would show up in green here and
[58:10] uh deciduous forests would show up in purple purple and then also there are a few other uh
[58:16] cover types here like wetlands which show up as sort of a pink color if i choose instead to view
[58:33] some different principal components if i look at components one five and seven now we can actually see not not the axes
[58:40] of greatest variability but that principal axes of change and so that tornado track on the uh kind of the
[58:48] eastern edge of the image is very apparent now that it appears as kind of a light light blue sort of a cyan color
[58:56] there there as well as those uh those industrial forest lands that we saw before in the uh in the classified image
[59:05] we can see those as well so we are clearly detecting some change between those two time periods
[59:13] so i don't want to go into too much detail on the the model we could really do this with any sort of model i wanted
[59:19] to keep it really simple so in this case i'm using a k n estimator so the k n
[59:25] estimator is it's a non-parametric approach to modeling it doesn't make any real assumptions about the relationship between the predictor variables and the
[59:34] response variable in this case and it really just means that we're going to use the weighted average
[59:41] of the k nearest neighbors to any pixel and in this case i'm not talking about nearest pixels in terms of geographic
[59:50] space i'm talking about nearest in terms of feature space so remember before i described that there were 30 features
[59:59] that i've derived from the satellite imagery so that forms a 30 dimensional space and if i use principal components
[1:00:05] analysis maybe i can get that down to an eight-dimensional space and it's those eight dimensions in which i'm measuring
[1:00:12] proximity so that's that's what i mean when i say nearest neighbor it's nearest in that space so using the k n estimator and just the
[1:00:20] weighted average of the nearest k in this case k was something like i want to say 15 so i'm saying what's the weighted
[1:00:28] average of the 15 nearest neighbors to every pixel in that feature space if i can pull in
[1:00:34] the plot information from those nearest the plots that are nearest in that feature space i can come up with an
[1:00:40] estimate and that's what i've done here and so this shows you change in basal area between time period one and time
[1:00:47] period two so here you can see uh changes which would be so reductions in basal area would show up in red or yellow
[1:00:58] no change would be kind of a light green or a greenish blue or greenish blue yellow and then
[1:01:06] positive changes so increases in basal area would show up in blue missing in particularly pixel size was
[1:15:50] not a uh probably top of mind at the time that the the the plot design was established but
[1:15:56] that's a very good question the size of the workforce that carries out this sampling and how many plots are
[1:16:06] typically sampled each year a great question question so so the the forest service works with both forest service employees contractors and
[1:16:16] state partners to measure plots as i think tai alluded to in the eastern u.s we measure plots um re-measure plots
[1:16:25] every five years and in the western u.s it's every 10 years and so i i don't know exactly the number of
[1:16:34] personnel personnel per se but i think there's right around um um 100 folks in the east 100 field crew members in the east that
[1:16:43] are measuring yeah in the northern region region anyway um which is a about 20 24 24 state
[1:17:17] and then across those 24 states we're measuring around 20 of the plots each year so those 100 folks are measuring about 100
[1:17:25] plots each year i i see some questions here uh this is tai uh regarding the k n estimator uh so
[1:17:35] yeah so that is k n stands for k nearest neighbor and it is a very it's a very
[1:17:39] simple model basically uh once you have your feature space uh and you find uh the k nearest where k is something that
[1:17:49] you would define as the analyst you would just use a simple weighted average of attributes from those nearest
[1:17:56] in this case it would be it would be plots if if you guys uh i see folks are
[1:18:01] asking for references to that i would be happy if you if you would just send me an email i can provide you with
[1:18:08] some citations and references to the use of the k n estimator it's been uh used quite a bit in scandinavia and in the us
[1:18:16] for for for quite a few years now so it's a pretty well established method for using uh
[1:18:22] for using our nfi data one of the main benefits which i didn't really touch upon is the fact that because you would
[1:18:29] use the same set of neighbors uh you would basically be able it's a multivariate approach to modeling which
[1:18:37] means you would get all of the attributes associated with the plot not just one of them so
[1:18:44] if i were interested in say above ground tree carbon i could look up that attribute associated with those k
[1:18:51] nearest neighbors and take the weight the the average um if i'm interested instead in biomass i could just look that attribute up
[1:18:59] instead so it's it's a nice uh efficient way of linking a map to our our database of plot information it's uh
[1:19:09] they they refer to that as imputation um let me just kind of i want to make sure i get to a few more of the
[1:19:15] questions here uh let's see i saw something up here uh uh you want to answer this one about annual
[1:19:22] removal factor oh um no not necessarily um so so yeah so there are emissions and removal factors and i
[1:19:31] think tai touched on one way that you can can calculate those emissions and removal factors from a map or from an nfi um there are also
[1:19:42] default emission factors that are available through ipcc good practice guidance that can be used with that activity data to
[1:19:52] compile estimates in much the same way that was described here where you might not have nfi or or other information to
[1:19:59] inform those emissions and removal factors i also saw that there was a question here about the k n estimation
[1:20:05] oh yeah discrete data are continuous thank you sorry about that um yeah i see that question too now um yeah you could
[1:20:11] actually use it for either um so in my case i used it for continuous data but you could instead uh that weighted
[1:20:18] average it basically uh could then amount to a series of votes and each each of those nearest neighbors
[1:20:24] basically votes one way or another so for example if you wanted to use the uh plot observations of land cover or land
[1:20:32] use you could basically then use uh each of those plots casts a vote if that nearest neighbor was categorized as uh
[1:20:40] cropland uh if if more of them say it's cropland than say it is uh forest land then you would classify it as cropland
[1:20:49] so yes you can definitely use it for discrete data as well there are some studies that suggest you might want to
[1:20:55] increase the value of k if you're producing a categorical map rather than a continuous map looking else let's see what else here
[1:21:14] did you want to say something about that sure uh so there's a question here can you elaborate a bit on this statement
[1:21:20] moving from pixels and forming plots to plots and forming pixels so under the current framework that we
[1:21:26] use in the greenhouse gas inventory and actually that we use within the national forest inventory we use satellite
[1:21:33] imagery remotely sensed information or products derived or obtained from remotely sensed information to stratify our population as
[1:21:45] as our estimates which is essentially a variance reduction mechanism it reduces our overall uh variance variance and and that's the way that we we've
[1:21:55] incorporated remotely sensed information to this point in time what we're proposing is that we would begin to use
[1:22:02] the plot-based information to inform the the pixels to inform what's hap what's going on in each pixel uh to arrive or
[1:22:11] develop emission factors for each of those pixels so really kind of flipping flipping the use of that remotely sensed
[1:22:18] information on its head someone also uh asked a question about loss of information due to the the
[1:22:26] stripes from the scanline corrector off condition uh yes that is true but however using the fourier series and
[1:22:34] harmonic regression you're actually able to recapture a lot of that information from that from that model if i wanted i
[1:22:41] could probably create then uh sort of a modeled um like let's say we were interested in a
[1:22:50] vegetation index or ndvi over time you could then produce an ndvi image at any any point in time and of course again
[1:22:57] like we talked about before it would be a model and therefore it would be wrong but we could estimate the bias in that
[1:23:04] model so while yes there is some missing data there um the the fourier series helps to recapture some of that information it's
[1:23:15] more problematic if the missing data happens to be at the at the peak or at the uh either the the maximum or minimum
[1:23:25] in the series that's when it's more problematic and there's really not a lot that we can do about that but if the
[1:23:32] data is missing at any other point in the uh time series the uh the 4a series does a really nice
[1:23:39] job of uh of filling that in yeah so we're just trying to as quickly answer as many of these as we can here
[1:23:52] is there anything else in here oh uh could you explain a little bit more about how you solve the space of
[1:23:58] spatial mismatch yeah so the way again the way i did that was um uh to compute the uh
[1:24:06] the mean spectral response for a a three by three window centered on my central plot the central subplot
[1:24:15] location location so uh there is this in image processing software there's a there's a fairly common function which allows you
[1:24:24] to compute zonal stats where you define basically a kernel around each location and it can compute you can determine the size of that
[1:24:35] that kernel it could be any shape you want it doesn't have to be square it could be circular whatever but we found
[1:24:40] that it worked really well to just use a 3x3 window and so we run this filter over the entire image and then we
[1:24:48] extract the information from that filtered image before we fit our model so i hope that that helps a little bit
[1:24:58] great um thank you ty and grant again for uh the really informative presentation presentation and um for joining us today and
[1:25:05] answering our questions um and thank you all for joining just as a reminder next week we will be discussing accuracy
[1:25:12] assessments and we will have our our guest speaker pontius olfason from boston university so so thank you thank you all again
[1:25:26] you
