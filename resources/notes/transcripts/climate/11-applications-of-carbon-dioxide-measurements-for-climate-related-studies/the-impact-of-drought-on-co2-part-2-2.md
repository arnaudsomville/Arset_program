# The Impact of Drought on CO2, Part 2/2

`https://www.youtube.com/watch?v=AeBy7lFKbgE` · id 282 · 2:02:24 · module 44 — Applications of Carbon Dioxide Measurements for Climate-Related Studies

[00:01] welcome to the second session of this ret webinar on applications of carbon dioxide measurements for climate related
[00:08] studies my name is Erica podest and I am an arset instructor and a scientist at NASA's jet proportion laboratory where I
[00:17] study terrestrial ecosystems with satellite data today's session will focus on the impacts of drought on co2 it will start with a theoretical part
[00:28] and will be followed by a demon demonstration on how to access and analyze oc2 data in relation to Drought
[00:38] impacts as a reminder this is the agenda for this webinar Series today is the second session the third and last
[00:48] session will be next Tuesday July 16th at the same time and that third session will be focused on co2 measurement over
[00:58] a large urban area I'd like to remind you that there will be a homework associated with this
[01:04] webinar series we will open the homework on the last session so we will open the homework on Tuesday July 16th and the
[01:12] homework due date will be on August 9th there will be a certificate given to those participants that attend all the live sessions and
[01:24] complete the homework by the due date our guest in instructors today are Dr juniu from NASA's jet proportion
[01:34] laboratory she's the science team lead for the oo2 and oc3 missions David Moroni also from the jet
[01:43] propulsion laboratory is applied science system engineer with the oo2 and oo3 missions and Karen Yuan from JPL as well
[01:53] is the application lead for oc2 and oc3 the objectives of this session are for participants to be able to
[02:05] identify effects from El Nino that can create Regional drought conditions monitor Global fluxes of atmospheric CO2 concentrations to identify areas that
[02:16] are are vulnerable use oc2 data to visualize areas that have been impacted and do interpretive and comparative analysis so
[02:27] this is with you Jupiter notebook identify methods and processes to derive fluxes with atmospheric CO2 measurements and interpret Regional flux
[02:38] perturbations and countrys scale fluxes and emissions and finally follow steps to clone the ret GitHub repository and maintain the local
[02:51] code as a reminder how to ask questions please write your questions in the questions box and we will answer them at
[03:00] the end of the webinar and feel free to write your questions as we go along through the presentation we'll try to
[03:08] answer all of the questions during the Q&A uh after the webinar but if we don't get to your question all of them will be
[03:15] answered we will be compiling them onto a Google doc and we will be sharing this Google doc with all of you a couple of
[03:24] days after this session ends so we will post it on the uh training web page now we will start the presentation Dr
[03:34] Juni Liu will be covering the theoretical portion um discussing atmospheric CO2 concentrations and carbon fluxes and then we will move into
[03:46] a demo led by Karen Yuan and then David on how to uh generate figures of atmospheric CO2 concentrations and
[03:58] fluxes okay uh welcome to the second part of the rside training uh I'm jino in this part
[04:05] of the rside training I will show um how to interpret column CO2 concentration observed by O2 uh the link between uh
[04:14] CO2 concentration surface carbon fluxes and how to interpret drought signals in both atmospheric CO2 concentration and surface carbon fluxes you will be able
[04:24] to generate most of the plots as show in this presentation with stup notebooks later later um so those who attended part one uh
[04:33] have seen this and the next slide um so I will quickly go over these two slides so this slide shows both O2 and O3 um
[04:43] show column CO2 concentration um in the northern hemisphere is much higher uh in April um than in August uh in the same
[04:51] year so the CO2 concentration in uh is higher in the northern hemisphere than in the southern hemisphere uh in April
[04:59] but lower um in August the CO2 concentration is also higher uh in East Asia um America and Europe than uh other
[05:14] regions um this shows column CO2 concentration observed by oc2 as function of uh time and the latitude it
[05:23] shows this stady increase of atmospheric CO2 concentration with time so this about 2. five parts per million per year
[05:32] increasing rate it also shows that the northern hemisphere has much larger seasonal changes than uh in the southern
[05:42] hemisphere so uh what processes cause the change of the global mean atmospheric CO2 concentration to answer this question we need to First Take a
[05:53] look um at the global carbon cycle um so this diagram shows or land uh by vegetation exchange carbon dioxide with
[06:02] atmosphere through a photosynthesis respiration and and also fire uh depending on whether the photosynthesis is higher or lower than respiration and
[06:13] fire this process could cause either increase or decrease of atmospheric CO2 concentration so anorogenic emissions including um uh fossil fuel and land use
[06:25] changes release caring into the atmosphere always causing a increase in the atmospheric CO2 concentration uh while over the ocean
[06:34] the airc CO2 exchange process include uh both the biogenic process and also the physical CO2 exchange between the
[06:43] atmosphere and ocean due to partial CO2 uh pressure differences so this process could cause this all all this process
[06:51] could cause like CO2 uh either increase or decrease some other together um the change of the global mean in atmospheric
[07:00] C2 concentration at any time is the uh integration of all these surface carbon fluxes during that time interval for
[07:09] example the annual Global mean Z2 increase will be the integral of all the surface carbon fluxes over a year so the
[07:18] steady increase of atmospheric CO2 concentration we saw in the previous slide uh indicate the integration of all
[07:26] the surface car fluxes is positive so that cause the increase of atmospheric CO2 concentration increase with time um well the change of global mean
[07:40] atmospheric CO2 concentration is integration of All Surface carbon fluxes the temporal change of local and Regional CO2 concentration is not only
[07:51] related to um surface Caron fluxes but also the lateral transport as I show here like this Arrow
[08:00] so the so-called background values so for example the change of atmospheric CO2 concentration over your region or
[08:07] your city is not only related to your local carbon fluxes but also the CO2 concentration transported um to your
[08:17] region from other area so the air with lower concentration transported to a your area will cause decrease of CO2
[08:25] concentration and vce verser so in part three you will learn how to uh con for background values um and extract local
[08:34] fluxes o using oc3 observation so as I show in this equation that Regional change of CO2 concentration is not only
[08:44] related to uh the surface fluxes but also related to the lat transport and background background value so um this slid shows uh three
[08:55] examples of CO2 concentration time series observed by O2 at three uh different location uh the first point um
[09:05] is in East Asia and the second point is in uh North America and the third point is in uh Southern hamsphere like ocean
[09:14] so no matter where they are like the three points are in a very different locations the atmospheric CO2
[09:20] concentration show a similar like increase in Trend even though they have uh different seasonal changes um this
[09:27] annual increase about like 2.5 parts per million is not only due to local surface carbon fluxes but also the lateral
[09:36] transport of background values so for example like the um 2.5 parts per millon increase over the Thousand ocean is not
[09:46] because the ocean carbon flux at that point is a big Source but because of the increase of the atmospheric Su
[09:53] concentration in the background that transported to that point so uh with this three plots I really want to
[10:01] emphasize the importance of counting for background C2 values when uh interpreting the changes of atmospheric CO2 concentration and any location so
[10:12] when you plot the CO2 concentration from O2 observation at your location and the increase of the CO2 is really not only
[10:21] due to fluxes of your local city or local local area and so in the last few slide is um
[10:30] we talk about concentration and fluxes so on this slide I will um summarize definitions of carbon fluxes
[10:38] concentration and also the commonly used units uh for both so atmospheric CO2 is normally expressed as a parts per milon
[10:48] by volume abbreviated as ppmv we normally call it as PPM so one PPM uh represents one particle of CO2 m molecule per 1 million
[11:01] particles of dry air molecules so this has to pay attention that here is dry air molecules which does not include
[11:10] water vapor and carbon fluxes um represents Direction and rate of transfer carbon between between um diff Earth's carbon poles like such as
[11:22] atmosphere Ocean and the land um the unit of carbon fluxes we normally use is gram carbon per square meter per day so
[11:31] it's per area per time um other units like when for the annual carbon fluxes we use gigaton carbon per year uh which
[11:41] is equal to a gram carbon per meter uh per square meter per day times the number of days per year times area and
[11:49] the unit conversion is 1 10 to minus uh 15 and the other unit is teragrams carbon per year so the difference is
[11:57] like the conversion uh unit is a little bit different and the pentagram we also use pentagram which is the same as uh
[12:06] same amount of as the gigaton carbon per year so then um what's the connection like between carbon fluxes and for to
[12:15] concentration how to convert the carbon flux unit uh to uh concentration unit and so we first need to convert flux to
[12:26] mass uh unit and then to volume unit um so the the ratio between the number of su2 molecules and number of a dry a
[12:37] molecules uh is equal to uh carbon flux times the area so then uh times duration this way convert the carbon fluxes to
[12:49] mass here and then divided by 12 this is number of carbon molecules and then divided by number of dry air molecules
[12:57] this converted to part per parts and then we further multiply by E1 uh to the 10 to the power of six this really
[13:07] converted to parts per million um so in the this in this conversion one parts per million is approximately about 2.14
[13:18] gigaton carbon uh per year um so like we talk about Sur carbon flux in concentration but how are the
[13:32] surface carbon flux linked with um the atmospher concentration is really through uh the wings atmospheric transport an atmospheric transport model
[13:43] simulates how the real atmosphere links surface carbon fluxes with atmospheric CO2 concentration so in this diagram I
[13:52] illustrate how the uh the at atmospheric transform models link the surface carbon FL es with the concentration field so in
[14:02] the forward run we prescribe surface carbon fluxes that include uh fossil fuel emission uh the land carbon fluxes
[14:11] and the ocean carbon fluxes um with the wings and Atmospheric transform model the CO2 release at the surface is
[14:20] transported throughout the globe the simulated concentration is continuous in both space and time as demonstrated in this uh the two plus at the bottom um
[14:34] these are the two examples of simulated column CO2 concentration so when in the spring one in the summer um the warmer
[14:43] colors represent higher CO2 concentration while cooler colors represent lower SE concentration so the spring um has higher CO2 concentration
[14:53] over uh the Northern Hemisphere um since the surface carbon flux is in the spring are dominated by fossil fuel emissions
[15:02] and respiration from ecosystem so that all increase the atmospheric CO2 concentration well in the summer time especially in the Norther hemisphere the
[15:13] atmospheric CO2 concentration is much lower because the carbon uptake by photosynthesis process outpaces the uh carbon release from ecosystem
[15:24] respiration and the fossil fuel emissions so through this process the atmospheric trans model um link the surface carbon fluxes with
[15:35] the at atmospheric SO2 concentration so on this slide you will see animation I will play animation of a
[15:47] simulated atmospheric Su to column by atmospheric transform model so you clearly see that uh the there is uh like
[15:57] a very ACC weather systems and change of CO2 concentration with time so on top of the um this CO2 simulation by the ATM trans
[16:08] model are the CO2 of the oc2 overpass tracks so I will play again you will see like the big flash that's really those
[16:17] the the the stripes are the O2 orbital tracks but you can see that that oc2 only captures a snapshot of atmospheric
[16:28] C concentration this animation again demonstrates that the change of atmospheric C concentration is due to both the ATM
[16:37] atmospheric transport and also the surface carbon fluxes so the surface caral fluxes cannot be easily observed um but we what
[16:52] we can observe is atmospheric Cal concentration then how do we derive fluxes from from atmospheric C concentration um the process to
[17:02] calculate carbon fluxes with ATM atmospheric C concentration is called atmospheric CO2 flux inversion so I will uh show how this process works so I show
[17:15] this plot before through the forward atom transform model we can simulate the speciaal temporal distributions of atmospheric CO2 concentration
[17:25] corresponding to uh the prescribed surface C fluxes so this is the special temperat distribution of the atmospheric
[17:34] C concentration and there is overpasses of o2 observation and then we compare the simulated CO2 concentration with the
[17:45] observation if the simulated concentration are different from The observed uh that means that the prescribed surface carlux is not
[17:55] consistent with the observation then we uh adjust the surface carbon fluxes to minimize the differences between um
[18:07] the optimized fluxes and the prior indicated as XP and then the observation and the simulated the concentration the
[18:16] second term I represent by the uh red colors and each term is normalized by their uh eral covariance term so through
[18:26] this process we adjust the surface C fluxes to minimize the difference between the simulated concentration and observation in the end we obtain a
[18:37] posterior fluxes that best match the uh observation so then the surface surface carlux will be consistent with the
[18:47] observation so this process is called the atmospheric SO2 flux inversion so this shows example of the prior uh
[18:56] posterior night bios ex change and their uh differences the posterior nbe the net Bic change is the optimized surface
[19:05] carbon fluxes that best matched observation uh the MBE includes all land carbon fluxes except phosphor emission the positive values indicate a carbon
[19:17] Source uh to the atmosphere and the um uh negative values indicate L carbon sync the difference between posterior
[19:26] and prior indicates that the post SE fluxes have much larger Source over uh Northern Africa Baker uptake over sou
[19:36] hamsphere me the latitudes and the Waker Source over the nor hemisphere so through this uh inversion process we
[19:44] adjust the prior fluxes that best mass observation at the same time we adjust way the posterior fluxes has been um is
[19:53] different from the prior so in the next uh three slides uh we'll look at some features of surface
[20:01] carbon fluxes and the links with the characteristics of atmospheric su2 concentration the top two panels show um
[20:11] night Bell exchange MBE in March um and July uh it shows stronger seasonal cycle over the north hemisphere than in the
[20:23] southern hemisphere which corresponds to the much larger seasonal uh change is in the north hemisphere then in the South
[20:31] hemisphere we showed on the uh on the second slide and the magnitude of ocean carbon fluxes at the bottom two panels
[20:40] is a order of magnitude smaller um than the land the carbon fluxes you will all learn how to make the this plus with
[20:48] Jupiter notebooks later on and this two plots show fossil fuel emissions in the same month same two
[20:57] months like March March 2016 and July 2016 so most of the fossil emissions concentrate over East Asia Europe and
[21:07] North America and fos emissions I mean you show have much weaker seasonal or changes than the night Bic change over
[21:19] land and the relative magnitude of Night bous Exchange andbe and the fossil fuel emissions uh depends on the location um
[21:28] here on the left panel is biosphere flux in Ocean and fossil fuel emissions at one point in China which shows that the
[21:37] magnitude of fter fuel emission is much larger than the uh biosphere flux is shown in the green line while on the
[21:45] right panel is one point in Africa the fossil emission in at this point is almost zero integrating um the carbon
[21:59] fluxes uh of each category like land flux ocean flux or fopi over a year over the globe we can get yearly carbon
[22:07] fluxes in gigaton carbon per year in this plot it shows yearly uh carbon fluxes from Land biosphere ocean fossil
[22:19] fuel a total is the sum of Land Ocean of fossil fuel and also the NOA observed increase of atmospheric carbon each year
[22:29] the negative numbers uh indicate carbon zinc positive numbers indicate carbon Source from 2015 to 2012 uh 2022 2022 both land biosphere
[22:42] and ocean act as carbon sink um with land carbon fluxes having a very large year-to-year variability is much larger
[22:52] than the ocean year-to-year variability and the total um represents the amount of carbon remained in the atmosphere based on the top down flux
[23:02] inversion to the sum of the fos emission and the carbon sink over land in Ocean um this total carbon flux inferred from
[23:11] top down is consistent with the observed Noah uh carbon atmospheric C to increase so the consistency between these two
[23:20] numbers is kind of a quality check on the top down CO2 flux inversion results and removing the climatological uh mean
[23:33] carof fluxes from each year we can get a anomalies of annual carbon fluxes so this plot shows uh annual carbon flux
[23:42] anomalies or land tropical Land Ocean fossil fuel total and uh The observed NOA CO2 growth rate anomalies um it shows the land uh carbon
[23:56] fluxes have much larger year year-to-year variability dominated by uh the variability over uh tropical land so they almost have the same amount of
[24:07] anomaly every year for example in 2015 and 2016 The observed um NOA CO2 increase shows about one gigaton carbon
[24:19] mole uh CO2 remained in the atmosphere compared to the climatological mean this one uh more gigaton carbon remained in
[24:29] the atmosphere almost completely comes from the reduced net land carbon uptake like uh represented as one gig gigaton
[24:39] carbon carbon anomally um and the tropical land carbon flux anomally over this two years is also about 1 gigaton which implies that
[24:49] tropical uh land Caron flux anomally dominates the total land carbon flux anomally in this two years and the last slide showed that um 2015
[25:03] to 2016 had the largest atmospheric CO2 growth in this eight uh years dominated by reduced net L carbon optic over
[25:14] Tropics in the next few slides I will talk about what happened in 2015 and 2016 and how to interpret the L uh the
[25:24] drought signals shown in both CO2 concentration and the surface carbon fluxes 2015 2016 had um the strongest
[25:36] elino event during the oc2 record so the left panel shows the composite precipitation anomalies during l l New
[25:46] Years it shows reduced uh precipitation over tropical land especially over tropical South America and tropical Asia while the right two panels shows uh the
[25:59] annual mean precipitation anomalies uh in 2015 and also the precipitation anomaly uh during October to December 2015 it shows in 2015 the precipitation
[26:12] has been greatly reduced over tropical region especially over um dur uh especially during the uh second half of
[26:20] the the year so let's first take a look at the concentration signals the top panel shows the differences of
[26:31] itom CO2 between March 2016 and March 2015 so basically it's the March 2016 CO2 concentration observed by CO2 minus
[26:43] March March um uh 2015 values so it shows the annual ATM SE to increase from March 2015 to March 2016
[26:56] it shows more than um um four part per milon increase over tropical South America and more than three part per
[27:05] milon increase in tropical Africa and Asia so on um like normal years the atmospheric CO2 increase is about 2.5
[27:13] par per million as we show early on this indicates that oc2 observed much higher CO2 increase uh from 2015 to 2016
[27:25] corresponding to this Lal and the drought over uh the tropical region then what's the impact of this
[27:34] elino on carbon fluxes so the bottom uh left panel shows the integrated uh net B change from April to March April 2015 to
[27:47] March 2016 with positive numbers uh indicating carbon source and negative numbers indicating uh carbon zinc it shows that tropical land
[27:59] becomes um a carbon Source due to the impact of the elal contributing to the large increase of atmospheric CO2
[28:08] concentration shown uh in the top panel so as we talked earlier um that the change of atmospheric CO2
[28:18] concentration is a function of both the surface carbon fluxes and lateral transport so the more than four POS
[28:26] milon increase is uh from both the the transport of fosil fuel emissions um signal to the tropics and the nous
[28:35] carbon Source from the impact of the elal so as showing in the right panel is a total carbon fluxes between April 2015
[28:45] to March 2016 that includes both fossil emission and uh the natural carbon fluxes so that has big curon Source over
[28:53] uh China Europe and uh and US dominated by the fos emission so that's in indicates that this large carbon release
[29:03] over the nor hemisphere has been transported over Tropics that contribute to this mod than four parts per million
[29:11] increase over the region so this mod four POS milon increases not only from the local carbon fluxes but also from
[29:20] the transport from uh other regions with ending um of the uh El Nino in 2016 the at the
[29:32] atmospheric CO2 increase over the tropics becomes much smaller so the top panel shows the CO2 difference between
[29:40] March 2017 and March 2016 it shows the atmospheric CO2 increase is about uh two parts per million over most of the tropics and
[29:52] well some regions even have less than two parts per million increase and the integrated land carbon flux over Tropics
[30:01] between um April 2016 to March 2017 becomes a carbon sink over most of the region that's represent by this uh uh uh
[30:12] green blue color um again the regional CO2 increase is a function of both ATM atmospheric CO2 transport and the local
[30:22] car fluxes so the about like two parts increase over the tropics is not only due to the net carbon sink but also due
[30:31] to the lateral transport that trans uh that um bring the higher CO2 concentration to this uh region so the
[30:39] atmospheric CO2 increase would be negative if it were only due to the local carbon fluxes because over the
[30:46] tropics over this year is a night carbon sync um so this slide summarizes the drought signals we observe is O2 and the
[30:59] inferred carbon fluxes so during the drought this as we showed earlier during the drought the atmospheric SE to increase is much
[31:09] higher shown in the top panel well the atmospheric SE to increase becomes uh smaller after drought shown in the
[31:17] second panel and the drought dramatically uh decreased the night carbon sink showing the um the bottom left panel represented by the positive
[31:27] members so 2015 2016 alino has the largest impact over tropical land and the impact over the ocean um is much
[31:38] smaller the the the as shown in the bottom red panel that's is a total flux difference between uh
[31:45] 2015 uh to 20 integrated value between 2015 2016 and integral value between 2016 2017 so the ocean flux changed
[31:55] really small so through the slides above we show that um we can the oc2 can detect the impact
[32:07] drought and through the flux inversion we could estimate the change of surface carbon fluxes due to the impact of
[32:15] climate anomalies such as Lal so in summary uh we have talked about how to interpret the column CO2
[32:24] concentration observed by oc2 the global carbon cycle processes the link between uh surface carbon fluxes and atmospheric
[32:33] CO2 concentration the unit for uh both the carbon fluxes and the concentration and the conversions between the two we
[32:42] also talk about um atmospheric se2 flux inversion process and how to interpret the surface carbon fluxes and the prior
[32:50] and posterior fluxes uh used in the flux inversion and at last we talk about um how to interpret the impact of alal on
[33:01] atmospheric CO2 concentration and surface carbon fluxes so uh in the end there are a few uh references at list
[33:09] here I would uh highly encourage you to read uh after the training thank you hello everyone this is Karen Yuan
[33:19] and I am going to do the first portion to help you get started with oo Data before we get started with the
[33:27] python notebook demonstration that David do for you I would like to remind everyone the availability timeline for both the oc2
[33:36] and oo3 products oo2 was launched in 2014 therefore we have a decade's worth of data and oo3 was launched in 2019 and
[33:46] we have five years worth of data both missions products are archived and distributed at the goded earth
[33:55] science data and information service center or just disk if you do not have a profile please register for free the
[34:03] data are freely available but you must register to download the files and use certain tools once you are on the
[34:11] Justice site simply search for oio 2 and or oio 3 and you will see the picture there they give you an
[34:22] example the search will pull up all available data products based on your search search criteria if you recall from our beginner
[34:33] training you will find the same details such as the naming convention and information however newer features such
[34:40] as the updated versions of the data product and the ability to work in the cloud um as shown with the arrow here
[34:49] and a reminder for the naming convention please refer to the beginner training if you in depth of how to navigate through
[34:59] uh the the file formats since the mission data are freely available and in support of NASA's ongoing policy on open science
[35:12] please cite the use of the data in your Publications and other information platforms I have included the language
[35:19] as well as the DOI on the slide here before David will do the python notebook demonstration you will need to download
[35:32] some software packages for this portion of the training he will go into further detail as well we will be working in
[35:41] Python 3 and Python and jupter notebooks are packaged within cond please please follow the install in uh directions
[35:50] listed for your respective operating systems and we do have a link here to guide guide you the libraries that you will need to
[35:58] use and Import in the code below should be included in cond please remember um which directory you download
[36:07] your files in and we will recommend creating a folder for the data and for the next step the libraries
[36:17] you need um as I said should be installed in cond here's a screen grab of um if you need to check to type in
[36:25] cond list in your terminal and it should pull up all the libraries that are currently there if you uh when you
[36:33] scroll and you don't see what you need just all you need to do is a pip install
[36:38] and there's another screen grab for you to just um put in what you need as you can see you can put in multiple
[36:44] libraries from there um but we are going to make sure you create an environment for you to work for these notebooks and
[36:52] David will go to that part of the demonstration and to open the jupyter notebook same thing if you open a terminal prom you
[37:03] type in Jupiter notebook and you will be ready to go all right thank you all right thank you Karen my name is David
[37:11] it's good to be here with you all uh this is actually my first time doing an rset training so thank you for this
[37:17] opportunity uh where I'm going to start things off is our GitHub repository uh that has been uh set up for us uh
[37:24] specifically just for this particular training exercise here and so um we're going to walk through this and just remind folks how to get
[37:32] here is in your homework assignment uh for your rset training uh you should have received uh this link to this
[37:38] GitHub repo um in your as part of your uh training packet uh for your homework assignment so that's how you get here
[37:44] but you should all be also be able to see the URL at the top of my screen here
[37:48] hopefully you can see that okay and uh so from here uh I just wanted to point out that the starting point that I'd
[37:54] like to call attention to is this environment. emo file um and you can actually see instructions on what you need to do here uh to uh get
[38:04] that environment. file um set up uh with your cond dependencies and so what this actually does is that it installs uh
[38:10] your uh your cond and your pip dependencies so in your homework assignment you should have also seen
[38:16] instructions on how to install uh the anacon package you can see this once again called out here um in this um this
[38:23] readme file here and so uh what this environment. EML file looks like uh you can get to it here uh when you click on
[38:29] it from the GitHub site which is what I'm doing right now uh there's some comments at the top that tell you how to
[38:34] install it from your command line so this would be the install command uh and so for the sake of time we're not going
[38:40] to do that in real time today I'm just going to point you to the command and how to install it and that's captured
[38:45] right here in this um environment. EML file at the the top header where the comments are and then once it's
[38:52] installed uh that should take maybe 15 20 minutes or so to install everything once that's installed you're going to go
[38:57] ahead and and activate it with this command just like so and then once you're finished with everything you want
[39:02] to go back to normal environment you're going to do cond deactivate and this is all going to be done from your uh your
[39:07] terminal uh I'm running everything on a MacBook right now so your terminal if you're on a Macbook will look something
[39:12] like this window which I'm having in the background um and that's where you'll execute that and run that so what I'm
[39:19] going to go ahead and do first and foremost is I'm going to go back here and and Orient folks to uh where the
[39:26] notebooks are um at this juncture so we have uh two notebooks this is the oc2 uh test notebook uh for doing download and
[39:34] plotting and then we also have this flux notebook here as well which you'll see in a moment um uh as as H as we conclude
[39:42] the part two demonstration and tutorial and so uh you can either download these individually uh or what we what we'll do
[39:49] now for the sake of time I'll walk you through how do you actually download these in bulk uh including the
[39:54] environment. file so what I'm going to go ahead and do is type this command uh in my uh terminal that I've already uh
[40:00] pre-loaded here get clone and then you just type in the https URL uh to the GitHub repo so I'm going to do that
[40:07] right now and in real time it will clone and download uh with everything that's in the repo at the present time so it's
[40:14] already gone ahead and done that and I've got a separate window here which contains the the the folder of uh what
[40:20] I've just downloaded uh this re this repo that I've just cloned and so from here you can verify and we can quickly
[40:25] see that we have all of the notebooks and the Eniro file the license file the REM file has all been downloaded uh to
[40:31] that directory right there and so uh with that uh we should be good to go I'm just going to do an LS in the terminal
[40:38] to verify yes in fact we see it I'm going to change directories now in my terminal to that new clone directory
[40:45] there do an LS one more time see what we have in front of us and so uh this is
[40:50] going to be the very first notebook that we're going to load but before we do that we have to uh activate our cond
[40:55] environment now as I mentioned uh this is the command to do that so we're going to uh copy that Command right there from
[41:02] the environment. yml file and we're going to insert that directly into our terminal shell window hit the return key and now as you
[41:12] can see we uh have this Con environment this tells us which environment we're in the Oco ret EnV environment so that's
[41:18] the correct environment now we're going to go ahead and launch our Jupiter notebook at least our first one for the
[41:25] day so the way we do that is we type in the command Jupiter with a Y notebook and then we
[41:33] paste in the name of the notebook itself and we're going to let it do its thing it's going to launch into the web
[41:42] browser and you should all be able to see that right here so at this stage I'm going to turn off my camera or it looks
[41:50] like it's already turned off never mind um well I'll I'll turn it on once more just so folks can see see who I am I I
[41:58] don't know if it was on before but hello once again at this stage uh we're going to now transition into the first uh
[42:04] notebook walk through here uh so thank you for your patience as we transition to this portion okay
[42:16] so just some high level context so uh following jun's pres presentation that was just concluded uh we're going to
[42:21] walk through a set of python notebooks that we will uh that will recreate the imagery presented by JN Jas starting
[42:27] with the oc2 elino analysis which is what we have in front of us and then we'll conclude with our our second and
[42:33] last notebook for part two which is the global carbon flux analysis so in this first python notebook we will walk through the steps
[42:41] of querying NASA Earth Thea common repository API also known Hereafter as CMR uh and this will be for the oo2
[42:49] level two bias corrected xco2 data from here we will download the data files within our prescribed time period of
[42:56] study of the 2015 to 2016 El Nino selecting prescribed variables applying a quality flag filter interpreting the
[43:05] data to a common grid generating monthly averages Computing differences between monthly averages plotting the results on a lat laon rectangular map and then
[43:14] lastly exporting the plots as PNG files to a local directory the plots generated in this notebook are intended to
[43:22] replicate the oc2 elal plots shown in the previous presentation by Juni while this notebook does make use of a
[43:29] netrc file for NASA Earth data login credentials with the instructions provided in the top Cale right here in
[43:35] this notebook a DC file is not required as the notebook provides Dynamic generation of the D NRC file with your
[43:43] supplied credentials what we do require in advance is for you to verify or create if needed your personal Earth
[43:50] data login which is explained right here in step one once once your Eartha login account is verified and functional you'll then
[44:00] proceed to step two which ensures that the CMR API recognizes your credential access permissions for the NASA jisk archive
[44:11] the NASA jisk is the only DAC archive we will use uh for this notebook training module step three captures how to create
[44:19] your nitrc file with your login credentials but as I mentioned previously this is not required you'll see in this set of other
[44:30] important notes uh with the most important step being to ensure you trust this notebook before executing which you can check by seeing
[44:38] the trusted icon at the top right of your notebook display as you can see right right here if it says not trusted then you
[44:46] should be able to directly click right here and adjust it to trusted this will prevent errors when writing output to
[44:52] your local directory I'll also take this time to point out that this notebook is only me for initial training and demonstration
[44:59] of the utility of these data sets in support of oc2 and oc3 and in support of the rset training
[45:05] associated with this and the link is supplied here with more details on that before proceeding into the notebook
[45:16] workflow I would like to now acknowledge that the direct contributions from Karen un and uh Dr Jan L from the oc2 project at JPL uh who
[45:26] had presented the slide deck material laying out the background for this notebook training just before uh this
[45:34] portion also want to mention real quick that this notebook is also designed to function as is for the scope of the
[45:40] training exercise as code dependencies and data sources periodically become deprecated or updated the users of these notebooks bear the responsibility to
[45:47] maintain and or repurpose these notebooks and associated dependencies in a workable State beyond the scope of this initial training
[45:57] last acknowledgement I would like to say at this point is that uh there have been some passive contributions to
[46:01] acknowledge um Incorporated via open source code that has been made available through the NASA JPL tropes project NASA
[46:09] op op Scapes the national snow and ice data center also known as nsidc and lastly by NASA's Jaz
[46:21] disk all right so now we transition into running our first cell and so now we will press the Run button to execute
[46:28] through all python code cells starting with the first cell that loads our python dependencies containing libraries and modules most of which are made
[46:35] accessible through our established cond environment through the rest of this notebook as well as upcoming as well as
[46:45] the upcoming notebook you'll see these encoded time functions demarcated by double percent symbols as you can see right
[46:55] here and these are used uh in prescribed cells that require a varying level of compute memory allocation and or IO this
[47:04] this prints what is referred to as wall time in add in addition to the CPU times broken down by the user and system what
[47:11] most of us here probably care most about is the wall time which is essentially the real world elapse time from the
[47:16] start to finish of sale execution so in this walkth through I'm executing this again once again on my personal MacBook
[47:23] laptop and also to point out this is on my home network work so the wall Time Performance will vary according to the
[47:29] platform type CPU and memory architecture and the networking that is used to execute this notebook now as we run through cell
[47:39] number number two we will attempt to authenticate with CMR using the Earth data access library or the I should say the Earth access
[47:46] Library if a if a netrc file is not provided in advance you will see this prompt that you see here requesting your
[47:52] login credentials and as I insert them here in just one moment uh I'll press the return key right after each step and
[47:59] then at that point it will create the DAT NC file that has a that has validated those credentials so as I now
[48:06] enter them in you can see authentication valid equals true it has authenticated those credentials and the NC file is now there
[48:22] and persistent and that will also be used for our next notebook so we won't have to recreate that
[48:33] we are now on Cell three which will which we will now execute to first check if we have the appropriate local output
[48:39] directory for storing data if not it will automatically create this directory as it has uh just done this takes us to cell 4 which is
[48:53] defining a response function to the CMR API we will execute this cell which will enable us uh to use this function
[49:06] later now on Cell 5 starting with the reference URL uh to the CMR API we invoke our previously defined response
[49:13] function that can now verify that CMR is accessible with the status code 200 if for some reason we get a different
[49:19] response status it could indicate a temporary outage at CMR since CMR is accessible we can proceed now in cell six we Define our CMR search
[49:30] parameters starting with the CMR search URL followed by the DOI which defines our targeted data collection as a side
[49:37] note you can also copy and paste this DOI into your web browser search engine and then the DOI should then
[49:48] resolve and take you directly to the Target data set landing page at Jaz disk as we execute this cell we we see the
[49:54] request function extract CMR metadata element element from the targeted data set including the short name long name and version
[50:03] ID these elements are printed below the cell to help us verify we are quering the correct data
[50:08] set so at this point I'll pause for a moment to remind the viewers that the previous rset training series for oo2
[50:15] included a tutorial of how to browse and individually download data files directly through the jisk website for
[50:21] the sake of time we won't cover we will not cover this but you may reference that material separately
[50:29] in cell 7 we are defining the net city of variable input parameters that we will be using including the xco2 quality
[50:35] flag as well as the xco2 measurement variable now in cell 8 we specify the input parameters to query for data
[50:44] granules corresponding to the first month of analysis which in our case is March March 2016 in the CMR realm a data granal is
[50:52] simply a metadata object that points us to a data file that we can access as we now execute this cell we invoke
[50:59] the Earth access libraries data granules function to do the heavy lift at the CMR query it then prints the total matching
[51:06] granules for this month you'll notice that a couple granules are missing and this is due to periodic data gaps in the
[51:12] OC record which is actually quite normal when working with level two Satellite remote sensing data we also print a
[51:18] subset of the granal metadata to confirm that the query is returning a data file reference that matches our query
[51:26] you'll also notice here that the the first of these files corresponds to February February 29th which is a day before our March
[51:33] search period And this is being given to us as the end date time in the observation record is at the precise z z
[51:40] time boundary of March 1st in our upcoming analysis we're going to simply just ignore this data file in cell 9 we execute uh these try
[51:54] accept statements to download these data the combination of these statements ensures that the data can be downloaded
[51:59] regardless of the Computing infrastructure we are using such as whether we are on premise or in a
[52:03] cloud-based environment we now see that all 29 files corresponding to the 29 granal in our previous C query are now
[52:10] being being downloaded this normally takes I would say about between 30 and 45 seconds once again this is entirely dependent on your
[52:19] internet internet connection in this case it actually took much faster than that uh about just under 22 seconds
[52:28] in cell 10 we set up our for Loop that goes through the range of dates with our
[52:33] previously defined start and end date and and times as we now execute this cell we see that it's then running through the data
[52:42] file path strings on our local directory to find matching files and iter iteratively reading through these data
[52:48] files as each data file is read we also extract the latitude longitude measurement and quality flag variables
[52:55] into their own unique arrays we then Define the latitude and longitude Max Min which sets our spatial bounding box
[53:00] for our plot the latitude extent is confined to the plus and minus 30 Dee range which helps us to narrow our
[53:07] analysis over the tropics as this is our primary focus for our elino study from here we also use numpy to do
[53:16] a bounding box selection combined with a quality flag filter which we then apply to complete the subsetting of our data
[53:22] arrays you should note that by using the quality flag filter equals z we exclude what is considered to be the bad quality
[53:27] data and so we also Now set the pixel or grid Point size to a 5x5 degree resolution then we generate a new
[53:35] consistent lat laon grid that will be used for an interpolated grid map now we do a nearest neighbor binning to find
[53:42] the closest matching oo2 observations that matches our recently created 5x5 degree grid these results then are appended to the time series variable as
[53:52] the loop continues to iterate through the remaining files for this month the last step in this cell utilizes numpy to
[53:58] comp to compute the monthly mean of the time series and create a new array of graded data featuring the monthly mean
[54:05] values now below the cell we see the printed results including each file that is read in the time series array
[54:11] dimensions and the time it took to execute now in cell 11 we generate our first map plot of o2 column averag CO2
[54:23] using a combination of functions from the Bas map library and map plot lib we then save this figure as a PNG
[54:32] file and here's the plot now for these remaining cells we're going to repeat a lot of these steps
[54:41] over uh for for a new set of data to generate new plots and so now we're going to do the same for March of
[54:51] 2015 now it's downloading the data for that that month once again this take anywhere from 20 to 45 seconds or so depending on your
[55:00] internet connection okay there we go about 21 seconds or so now we're going to read those variables insert them into the
[55:24] arrays generate our letl map plot and there it is for March 2015 now we're going to compute the
[55:35] difference between March of 2016 and March of 2015 and now we're going to specify the March 2017 input
[55:47] parameters we'll do the same set of plots for March 2017 now we're downloading the files once again this will take about 20
[56:01] to 45 seconds or so okay now we're going to read through the data files and store them into
[56:21] arrays and make a monthly average we're going to generate that Laton map plot and this is that plot for March
[56:30] 2017 now we're going to compute the difference and this difference is between March of 2017 and March of
[56:41] 2016 so in this final step what we're going to do now is we're going to go through how to locate your image files
[56:47] that we had just generated and so from this top drop done menu we're going to click on
[56:54] view and then click on file browser and this actually opens up a new window and this is open up as a new
[57:04] window tab on my browser and your browser might behave a little bit differently I'm not sure if
[57:10] it'll open up a new tab or a new window but it should open something up that resembles
[57:15] resembles this and what we now want to locate is the data directory which is right here we double click on that to load the
[57:23] data directory and so from here we can see all the PNG files that we just generated in addition to that we see all
[57:31] the net CDF files that were downloaded for all those analysis plots that we did you should also be able to locate
[57:39] and access these same files in your system folders which should be in the same location where you're running the
[57:44] the jupyter notebooks from if you would like you may select specific files and if you would like you can copy those to
[57:51] different directory by checking off these boxes so for example we have these boxes is here and uh you can upload if you click
[58:03] that upload button there it creates a pop-up window that allows you to then select a folder that you'd like to copy
[58:08] those files into you can also rightclick the files that you've selected in these boxes and this will allow you to delete if you'd
[58:18] like any files that you no longer wish to have in your directory so now at this time we will
[58:25] transition into the notebook that will demonstrate how to plot the carbon fluxes all right so at this point we'll
[58:33] we'll use this uh this browse tab that has just opened up where we verified our data files at this point we'll use this
[58:38] to go back to the top level directory and we can actually open up our carbon flux analysis notebook uh right from
[58:45] here as you can see it's right here so we're going to double click on that there it
[58:58] is all right so the first thing we will check is our python environment which you can confirm right here that it
[59:05] correctly says the the right um environment is being used the right con environment ooc R EnV I should have
[59:11] probably mentioned this in the first notebook so I'll mention it right now uh if for some reason you don't see this
[59:16] you can actually click that right there and here's the drop down menu uh where you can manually select it here as
[59:24] well and uh if you if you're running this environment for the very first time uh you might even see an initial pop-up
[59:30] window before you even see this you might actually see this popup first as your notebook is running for the very
[59:35] first time and this will give you the opportunity to select the correct condu environment which I verified is already
[59:42] correctly selected so in this notebook we will walk through the steps of quering the NASA CMR API for the following CMS flux
[59:52] data sets all of which are grided level four products the the nbe data set provides the estimated net biosphere
[59:59] exchange fluxes the ocean data set provides the estimated airc carbon fluxes over the global oceans and the last data set we'll
[1:00:06] utilize here is the fossil fuel prior which provides the estimated carbon flux produced by fossil fuel emissions more information on these data
[1:00:17] sets can be found in their respective data set landing pages maintained by the NASA JZ disk which may you may find by
[1:00:22] clicking on any of these respective links that are next to these uh data set entries consistent with what was
[1:00:32] previously presented by Juni we will now go through this entire notebook and generate a series of scientific flux
[1:00:38] plots starting with lat laon Maps over the various months of Interest followed by the annualized flux plots total net
[1:00:45] carbon flux plots bar chart comparisons of the annualized totals and a final bar chart comparison of the year-by-year
[1:00:51] flux flux anomalies for the map plots we will use this notebook to focus first on the months of March and July of the year
[1:00:59] 2016 which is used to help depict the seasonal differences and the fluxes we then conclude our map plots with
[1:01:05] annualized totals that are computed in two adjacent years from March 2015 to March March 2016 and from 20 and sorry and from
[1:01:15] April 2016 to March 2017 it's in selecting these two different years side by side that we can see some of the
[1:01:22] impacts alino has in these flexes that are in conjunction with the fossil fuel emissions as we conclude with the bar
[1:01:30] charts we provide an annualized flux comparison utilizing a longer time series going from 2015 through 2022 all of the other important notes
[1:01:39] user guidance and acknowledgements are the same as were presented in the first notebook so now we will press run to
[1:01:45] execute our first cell and so we will start with loading first our python dependencies containing libraries and modules most of which were
[1:01:57] made accessible through our already activated cond environment for the sake of time we'll directly execute the next series of
[1:02:06] cells but we won't explain them again as these were already explained in the previous notebook the key differences to
[1:02:11] pay attention to are coming up later in cells 6 and 7 and now starting with cell six uh
[1:02:24] where we Define the input parameters and these are unique to our initial nbe data set that we will then query and extract
[1:02:29] data files from now we query the data set in CMR and then we execute our query for
[1:02:40] the matching granules now in cell 9 uh we see that we downloaded only one data file for the
[1:02:49] nbe flux data set it's downloading right now takes about just under 4 seconds which is uh this is downloaded
[1:03:01] because each of the flux data files are aggregated for the fulltime Series so we only really need one file per flux data
[1:03:07] set the same will be true later uh when we download the files for the ocean and the fossil fuel data
[1:03:16] sets all right so as we read in going into Excel as we read in the NB flux
[1:03:20] data variables we also utilize the time and area variables the time variable is used to create a
[1:03:32] separate array that allows us to uh later query the data arrays using specific month and year search
[1:03:37] parameters this is achieved through a couple of steps uh featuring uh this numpy array function right here and let's see where am I at all
[1:03:57] right so this so that was the numpy array function and then that converts the time data into a queriable year
[1:04:01] month format followed by a num numpy as type function which converts our newly constructed data set and this converts it into a newly
[1:04:19] constructed time array uh into a more queriable 1D string array in conjunction with the reshape function I should have mentioned
[1:04:36] yeah okay so that I believe has already been executed I'm just going to double check and make sure I will reexecute
[1:04:42] there we go all right so I should also mention uh in this cell here that the uh the area
[1:04:52] reshape function takes our area array and shapes it into a 3D array that allows for mathematical functions to be
[1:04:58] more consistently applied with our data arrays and then this last step in the cell is to expand our latitude range to
[1:05:04] account for all data across across the globe this last step here cell 11 now produces our first plot
[1:05:15] featuring nve flux data for March 2016 you will also notice here that our that there are both positive and negative
[1:05:21] fluxes as we execute the negative fluxes are captured by the blue gradient while the positive fluxes are in the red
[1:05:35] gradient the near zero fluxes are shaded in white the units for the NB fluxes uh as well as subsequent monthly flux plots
[1:05:47] that you see on a monthly Cadence are in units of grams per carbon per square meter per day
[1:05:58] now going on to cell 12 this cell produces our next spot capturing the NB flux data for July
[1:06:04] 2016 the biggest difference you see in July is the stark contrast actually the Stark reversal uh to negative fluxes uh
[1:06:12] for the Northern Hemisphere and more positive fluxes in southern Africa and South America so we're now going to utilize
[1:06:23] cell 13 to compute the nbe flux difference between July and March of 2016 we can now see the difference
[1:06:33] plotted right there now going on to cell 14 we prep for new arrays to store the number of days for each
[1:06:42] month actually this says cell cell 15 by accident this is originally cell 14 sorry for that that issue there as I
[1:06:50] regenerated the cells uh a second ago and so these are arrays that are storing the number of days in each month
[1:06:57] accounting for both leap and non-leap years these arrays will be used later to compute the annualized flux
[1:07:04] estimates now in cell 15 we prepare the data to generate the annualized nbe fluxes from April 2015 to March 2016 we
[1:07:12] use numpy to create both a selection start and selection end in our month year date selection and then we assign
[1:07:18] this to a start and end index the ending index is adjusted to plus one to ensure we have a full 12- month period of
[1:07:25] coverage from April to March so as I have just ran that cell which created the plot uh I just want to
[1:07:36] also mention that we in this series of cells we also create a new nbe measurement array that covers the
[1:07:41] selected start and end date indices and then we allocate another new nbe array that will store our adjusted total
[1:07:49] fluxus which are adjusted for area and days per month also we have this for Loop that we iterate through each month
[1:07:56] and compute the adjusted total fluxes by multiplying by area and the number of days corresponding to each month it's
[1:08:02] important here in this step to make sure that we are precisely Computing for the correct number of days for the given
[1:08:07] month as we can otherwise introduce an error uh that while small each for each month can add up to become a significant
[1:08:15] uh error once it becomes annualized so once again the number of days for each month is defined in the previous cell
[1:08:20] above and then also in this cell we use uh numpy uh to to compute the 12 month
[1:08:31] total of adjusted fluxes into a new array that contains a total annualized fluxes that have that is then reshaped
[1:08:38] into as a 2d array that can be plotted on a latl long map that we see here and the rest of uh what we see in
[1:08:47] the plotting steps is virtually identical to what we've seen previously with some subtle adjustments to the title color bar and units the units of
[1:08:54] the total analized fluxes and in this case here is now terog per year moving on down now in cell 16 we
[1:09:07] repeat what we did in the previous cell but adjusted for 20 for April 2016 to March 2017 and now we have this new
[1:09:18] plot and here we see less annualized totals compared to the previous year and more negative flux totals overall as
[1:09:25] especially over the tropics now in cell 17 we transition into using ocean flux data and so we
[1:09:32] will replicate a lot of the previous steps that we did uh before uh so we don't need to go into further detail on
[1:09:38] these uh just some minor adjustments to be specific to the ocean flux data set that we are working
[1:09:43] with and so now we'll execute these upcoming cells that take it'll take us now to our first ocean flux plot in just
[1:09:50] a moment for March 2016 now we're downloading the data file reading the data and now we're going to complete the
[1:10:07] plotting step and there we are all right so now we have um our ocean flux plot our Arc fluxes uh for
[1:10:26] carbon uh for March of 2016 and so here we fine-tune the color bar to account for the reduced dynamic
[1:10:33] range of ocean flux relative to what was previously observed for the nbe flux and in the next cell we'll do the
[1:10:44] same for July 2016 and in July 2016 as you can see the plot here uh we see a different Global
[1:10:57] ocean flux pattern emerge uh compared to what we saw just above in March once we compute the difference
[1:11:04] between July and March in the next cell we can see the start contrast with July producing more positive fluxes in
[1:11:11] the northern mid latitudes and more negative in the southern hemisphere tropics now in cell 25 we transition into the
[1:11:27] annualized flux computations and plots executing the cell reveals the total annualized flux in teragrams of carbon fluxes over the global oceans from April
[1:11:36] 2015 to March 2016 and there's that plot and the following cell does the same for April 2016 to March
[1:11:51] 2017 and here in this plot we see a more defined pattern of positive fluxes emerging over the intertropical
[1:11:58] Convergence Zone also known as the itcz now in cell 27 we transition into using the fossil emission data and so we
[1:12:09] will replicate a lot of the previous steps that we don't need to go into further detail on uh with some minor
[1:12:14] adjustments to be specific to the fossil emission data set we are working with now we will execute these upcoming
[1:12:25] cells it takes us to cell 32 once we download this data file give it a there we go now we'll
[1:12:36] read in the data there it is and so this will give us our first uh fossil emission plot for March
[1:12:47] 2016 all right so now this is the uh first fossil fuel flux plot for March 2016 here we've completely changed the
[1:12:53] color palette uh to more clearly see the dynamic range in fossil fuel emissions which unlike the previous flux types
[1:12:59] only produces positive values and so we've tailored this scale on the color bar accordingly and in the next cell we do
[1:13:09] the same for July 2016 and here we see a very similar flux pattern with some localized differences now on Cell 34 we compute
[1:13:20] the difference between July and March like so and again this is the difference between July 2016 and March
[1:13:35] 2016 and so we we also see here are some mostly slight differences in the fossil emissions with certain areas showing
[1:13:42] higher differences and uh other areas differing as much as plus or minus half a gram per square meter per day which is
[1:13:49] quite noticeable in East Asia Europe and the middle east region now moving on to cell 35 we
[1:13:56] transition into the annualized flux computations and plots executing the cell as we just did reveals the annualized total of teragrams of fossil
[1:14:03] fuel carbon emissions uh from April 2015 to March 2016 the following cell does the same for April 2016 to March
[1:14:18] 2017 which produces a very similar pattern of total flux carbon emissions with only slight localized variations compar compared to the previous
[1:14:27] year now in cell 37 we transition into Computing and plotting the total net carbon fluxes starting with the one-year
[1:14:34] period covering April 2015 to March 2016 this competition is simply a sum of each of the previously computed
[1:14:42] annualized components for nbe ocean and fossil emission fluxes and in the following cell we do the same calculation for plotting for
[1:14:50] April 2016 to March 2017 and this competition uh is simply let's see here what what do you want to say
[1:15:02] here sorry let me scratch that I just wanted to say here uh compared to the previous year uh we see a similar total
[1:15:08] net carbon flux pattern in the northern hemisphere with a distinctly different pattern in the southern hemisphere uh
[1:15:15] mostly uh this is visible mostly in the uh most visibly apparent I should say in the tropics and now moving to cell
[1:15:26] 39 we transition into Computing the annualized total flux compar computations which are based um on the January to December calendar Years
[1:15:35] starting from uh 2015 and continuing through 2022 the data that we had previously stored into memory are reread
[1:15:43] into new arrays that are indexed according to the start and end dates of each calendar year similar to what we did previously
[1:15:52] we include a for Loop um and compute a new set of fluxes that are adjusted according to the area and days in each
[1:15:59] month for normal years we then have a second for Loop that does the same for leap years um for 2016 and 2020
[1:16:11] specifically and these are those four loops and what I should also mention here is that the flux totals are then uh
[1:16:30] computed and stored into arrays um specifically for nbe ocean and fossil emission fluxes and following the component calculations we compute the
[1:16:39] net total annualized carbon flux taking into account all three flux components over the same range of years before moving to the next cell we
[1:16:47] print the annualized total fluxes for each flux component which gives us a precise way to assess these estimates
[1:16:53] before we actually plot them for comparison so as you can see here they're printed to the screen and we can
[1:16:57] take a quick look at the actual values for each year and just do a sanity check and make sure they look okay before we
[1:17:03] proceed forward and plotting them on a bar chart now in cell 40 we plot and compare the annualized total fluxes into a bar
[1:17:13] chart after we run the cell we see the bar chart displaying eight distinct years of data grouped and spread across
[1:17:19] the land based nbe fluxes ocean fluxes and fossil emissions and also last the total net carbon fluxes and in the next cell we compute
[1:17:38] the 8-year Global mean fluxes covering the same period from 2015 to 2022 and this includes the landbased nbe
[1:17:46] fluxes ocean fluxes fossil emissions and total net carbon fluxes and and this allows us to in this
[1:17:53] next cell once we have those means computed we can then compute the anomalies so now in cell 42 uh using the
[1:18:01] previously computed 8-year mean fluxes we then use the 8-year mean as the basis to compute the flux anomalies for each
[1:18:07] year from 2015 to 2022 as we run this last cell we generate the final plot that is uh
[1:18:15] featured in this training exercise that includes a bar chart that shows the anomalies for each year according to the
[1:18:20] landbased nbe fluxes the ocean fluxes fossil emissions and total net carbon fluxes in this last bar chart the year
[1:18:32] 2022 specifically produces a pronounced negative anomaly that is explained by the co the coinciding large negative landbased nbe flux anomaly suggesting a
[1:18:40] higher than average landbased biosphere uptake of carbon for that particular year so now once again to retrieve all
[1:18:48] the images that we generated um by this notebook I would please refer you to the previous steps um that were provided at
[1:18:54] the end of the first notebook in the part two exercise that featured the oo2 data uh when that that's basically the
[1:19:01] same set of steps that uh we use to uh get to these PNG file images so this concludes our python
[1:19:08] notebook training for part two thank you for your time and attention to this training material and we look forward to
[1:19:14] any feedback and questions that you may have during the Q&A portion the next couple of slides are a
[1:19:23] summary of today's session as well as resources and contact information and here's a summary of what was covered today um how to interpret
[1:19:37] colum CO2 spatial and temporal distributions what are the factors that contribute to the change in local and
[1:19:44] Global atmospheric CO2 concentration as well as the units of atmospheric CO2 concentrations as and surface carbon fluxes um we covered the links between
[1:19:56] surface carbon fluxes and atmospheric CO2 concentrations and you learned about CO2 flux inversion processes to understand surface
[1:20:06] fluxes um how to interpret spatial and temporal distributions of surface carbon fluxes as well as drought signals in
[1:20:15] both oc2 CO2 concentration and inferred fluxes in addition to that uh you saw a demo on how to generate um a lot of the
[1:20:26] figures or most of the figures that you saw in today's presentation for those wanting to learn a little more about oc2 and oc3 data
[1:20:41] here's a list of excellent references that you can start with if anyone has any further questions about the material that was presented
[1:20:52] today please feel free to contact any of the instructors the third and last session of this training will be next Tuesday
[1:21:04] July 16th it'll be focused on analyzing CO2 measurements over a large urban area so you'll learn about how to recognize
[1:21:13] the importance and challenges of measuring CO2 over metropolitan areas and the aspects of the important aspects of space bace CO2 measurements over
[1:21:24] urban areas there'll be a demo using Jupiter notebook which will walk participants through accessing subsetting and downloading multi-year
[1:21:35] oc3 Sam data Sam is a acquisition mode over metropolitan areas and then visualizing the oc3 Sam data over urban
[1:21:46] areas and Performing um and Analysis and that concludes our second session a very special thank you to Dr
[1:21:59] Janu to Karen Yuan to David for the presentation and the demonstration uh also thank you to all
[1:22:08] the participants we've been Gathering your questions and we will begin the Q&A session shortly so we'll be sharing the screen
[1:22:23] here um in a few few moments and um as mentioned we've been Gathering your questions but if you have additional
[1:22:31] questions just uh type them away in the questions box please um so uh let's uh just start from the top down and I will
[1:22:41] read the question and a member of the oc2 oc3 team uh will be answering your question so uh let's just start with
[1:22:51] question question one could you explain the concept of integration and its significance in the CO2 formula and also State what it means
[1:23:01] with regards to what it translates to in our natural language for the sake of understanding um so this is Jin I will
[1:23:12] uh take step of this question and to see whether Vivan has something to add um I'm sorry for the jargon here so the
[1:23:20] integration is really just represents um a sum of the surface carbon fluxes over a specific time period so it's really just meaning sum
[1:23:30] all the fluxes um over time R do you have anything to add not sure R is online but um
[1:23:58] Erica can you hear me yes I can um I forgot to mute myself uh we'll ask for Vivian's input on the
[1:24:07] written part of this question I don't think she's online at the moment okay so thank you very much well um move on to
[1:24:15] question number two how can we just ignore water vapor when discussing concentrations and fluxes everything is with respect to dry air but any column
[1:24:27] of atmosphere has some level of moisture yeah I think this question Al also asked yesterday um that you're
[1:24:37] right that the I mean the natural atmosphere has both has water wapor but when we calculate column CO2
[1:24:44] concentration we first REM first need to remove the mass of water vapor from the total air mass and then calculate number
[1:24:52] of dry air molecules the reason that we have to use dry air is because total dry air mass in the atmosphere is constant
[1:25:01] with time because doesn't change I mean the total if you sum all together throughout the atmosphere doesn't change
[1:25:08] but if you include the water Vaper it could change with time so that could confuse us when we talk about CO2
[1:25:16] changes so that's why we have to use dry air instead of total air hopefully that address the question that has been
[1:25:23] really confusing for today and tomorrow and yesterday as well thank you for that question number three could the variation of atmospheric
[1:25:34] concentration of CO2 during spring and summer in each hemisphere be possibly due to monsoonal activities um that's for sure that
[1:25:45] monsoonal activities contribute to the seasonal variation of atmospheric Cal concentration but that's not all the story so the variation of the CO2
[1:25:55] concentration is due to uh a lot of factors uh besides the munal activity so the mono activity affect CO2
[1:26:03] concentration basically through two ways one is through the change of ATM atmospheric transport pattern because when you have Monsoon you could have the
[1:26:13] wing could change from the northward wing to Southward Wing so that will change where this air comes from so that
[1:26:21] change the CO2 concentration the other is through the impact of the climate CH climate states on the surface carbon
[1:26:29] fluxes so when you have monsal system like when in the in the summer you have more rain and it's warmer probably
[1:26:36] plants grow better so then the plants AB absorb more carbon uh from the atmosphere so that will change the
[1:26:42] atmospheric C2 concentration but vce wor when you have the winter time the plants go to dormant so the respiration
[1:26:51] dominates that the CO2 concentration will increase so that also affect the change of the CO2 concentration great question number four
[1:27:05] what are the predictions of when the ocean carbon flux will stop being a significant significant sync um this is very um good question um
[1:27:16] so I put in the chat a reference to um to further explain this so what when the
[1:27:23] uh the ocean carbon flux will stop being a significant carbon sync really depends on the um the future fossil fuel
[1:27:32] emission scarios the reason that the the the mechanism for the main mechanism for the uh ocean to absorb CO2 from the
[1:27:41] atmosphere is through the partial CO2 differences between the atmosphere and the the ocean surface and the other is
[1:27:48] through through biology so when you have more fossil fuel emissions that means the atmospheric CO2 concentration is kep
[1:27:56] increasing and the this the gradient of the atmospheric CO2 and ocean CO2 is like pos positive means the atmosphere
[1:28:04] is higher than ocean CO2 then drive more CO2 into the ocean so the ocean will keep remaining as a big carbon sink when
[1:28:13] you have higher CO2 concentration in the atmosphere but when you have large reduction the F Fu emissions that leads
[1:28:20] to um leads to reduction of vam to concentration then the CO2 gradient will become smaller then the ocean will
[1:28:28] becomes less carbon sink so whether the CO2 whether the ocean will remain to be a big carbon syn really depends on the
[1:28:38] uh the future phosph emission scenario so this really a feedback loop between the F emissions and also the natural
[1:28:46] carbon carbon cycle you can check out the referen later on that way uh I have put it in
[1:28:52] the Google Doc okay moving on to question number five the Sahara Desert is devoid of vegetation for the most part and is less
[1:29:08] of a CO2 Source from fossil fuels because of this one would expect that this reflects on the simulation of
[1:29:16] atmospheric CO2 but it doesn't and why is is that um that's really related to what we have um present and talk about today so
[1:29:27] the the change of atmospheric C2 concentration so it's related to both the transport and surface carbon fluxes
[1:29:36] and like surface source and sinks that you uh you you uh explained here so over Sahara Desert it doesn't have vegetation
[1:29:45] do that means that is not a big carbon sink and also doesn't have much of human uh fossil fuel emissions so it's notot a
[1:29:52] big source so in some some some of the natural carbon flx in the fos emission is really small
[1:29:59] over that region so the you what you see the change of atmospheric Co concentration over Sahara Desert is
[1:30:06] really due to the atmospheric transport so the the CO2 transfer from the other region also the change of the weather
[1:30:13] patterns and then you see the change of change of atmospheric C2 concentration over the region thank you this is a good question
[1:30:25] great question number six can a city land parcel or a designated area for aggro forestry be tracked if it has
[1:30:33] become a carbon snc can a village or agricultural land parcel be tracked for carbon carbon credits and so this is a very loaded
[1:30:43] question okay different components who would like to see a step-by-step guide or process document and how this can be
[1:30:49] implemented and do you have a case study um I don't have a case study in mind but I
[1:30:58] um but this is really great question related to the carbon CL policy so in currently there are several ways several
[1:31:06] methods that you can use to estimate the carbon sync due to uh aforestation or your land use change U one one way that
[1:31:17] you can use ATM atmospheric Su to concentration combined with modeling as we talk about today so you can combine
[1:31:24] the atmospheric Su to concentration and the top down inversion modeling to estimate the carbon uh changes in your
[1:31:31] area so our team has uh generated a country scale um current budget that's published by uh burn at all 2023 I um
[1:31:43] included the reference in the Google Doc based on this uh data set you can calculate the carbon sink over the area
[1:31:51] that you are interested um but bear in mind um because we use atmospheric CO2 concentration um that has very large
[1:32:02] Footprints so that means like you are sensitive to a area on the order of few hundred kilometers so that means we are more
[1:32:12] confident on the carbon sink estimates over a large region like a few hundred kilometers instead of few kilometers so
[1:32:20] that's a caveat you need to keep in mind so another way that you can use to track
[1:32:25] carbon sync is through the biomass estimates and the biomass estimates is a very very active research area and I
[1:32:33] also included a reference um in the Google Doc so in that reference you can see you can find the global biomass
[1:32:42] estimates at a very fine spatial resolution but it has relatively closer tempor resolution so it has annual uh
[1:32:51] annual um tempor resolution and the third way that you can use estimate Curr stock change is the way is
[1:32:59] the uh manual that published by United Nation framework on climate change U unfc so they have detailed um
[1:33:08] documentation about how you could assess the stock change using the land area and uh emission uh factors and also I
[1:33:19] included reference in the Google Doc um if you have questions and you want to learn more please feel free to contact
[1:33:25] those that have published those methods if you are uh have questions about top down uh inversion me that our team has
[1:33:33] published please feel free to reach out thank thank you wonderful next question number seven can you give an intuitive sense of the
[1:33:46] rates of lateral transport compared to local syns and sources yeah um this um so I mean really this I really trying
[1:33:56] to emphasize the importance of counting for L lateral transport when you look at the um the CO2 data from O2 it really
[1:34:07] depends on the region so for large point source or mag City such as Los Angeles um the CO2 enhancement that's that means
[1:34:16] like due to the local uh fluxes could be a few parts per million could be two or
[1:34:21] three parts per million on some days like one is also Rel to transport if the air is really uh still really quiet
[1:34:28] doesn't have much of a wi the wind speed is really slow that means the all the emissions just stay in that area that
[1:34:37] you could see the CO2 enhancement be a few parts per million like such as Los Angeles and some large power plant also
[1:34:44] could see a few parts per million but I you also have to remember like the um the magnitude of CO2 concentration now
[1:34:53] is more than 410 parts per million so that means I mean it's really accumulation over long time period but
[1:35:00] then on another note on the on the annual scale the at atmospheric CO2 increase average is about 2.5 parts per
[1:35:11] million and that's the sum of all the emissions and the carbon SNS over the globe the local contribution to this 2.5
[1:35:20] parts per million increase really depends on the magnitude of your emission in your area so say if your
[1:35:27] emission is like 1,000 of this total emission that means you only contribute to 1 thousands of this 2.5 part milon
[1:35:37] increase um of course I think for for for any single day I mean that's really you could be like point on the order of
[1:35:47] few on the order of your POS million or you cannot even notice really depends on the the magnitude of local
[1:35:57] emission thank you okay thanks uh question number eight now the next couple of questions seem to all be
[1:36:05] focused on the demo so let's uh um start with number eight Why install xarray and net cdf4 Library doesn't xarray support
[1:36:16] and uh NC files it does and that yes that's a great question uh so the scope of our
[1:36:24] notebook development was to keep it as simple as possible using the the most basic nf4 Library although we do provide
[1:36:30] xarray as an optional package and our environment. EML file that can be Exton uh installed through cond uh that
[1:36:38] leverages additional extended features exclusive to xray things like uh X S3 access for more cloud-based Computing things like that um but uh we wanted to
[1:36:49] leave that up to the user to decide how to use that uh but we do I I did drop in
[1:36:52] a link there you can see it in the document uh to some additional helpful resources uh provided by jisk they have
[1:36:58] their own GitHub tutorials repo uh in there you'll find some examples of how to use xray if that's something that's
[1:37:04] new to you but the hope is that uh the package will provide it for folks who are already familiar with xarray uh so
[1:37:12] uh but yeah so so I think we just wanted to keep this as simple as possible uh
[1:37:16] for the for the purpose of what we're trying to show in this demonstration thanks David question number nine can I download the CO2 data
[1:37:26] for a specific region or just clip the ncdf net CDF file yes so I'm going to mostly punt
[1:37:35] this over to Karen if that's okay but I I understand this can be done in open app and I believe the part three demo
[1:37:41] next week will go into that uh Karen did you w to touch on a little bit more um
[1:37:46] and then I I put the disclaimer in there if you will um that for the person who
[1:37:51] asked a question when we say specific ific region I think it's very important CU anything that you pull is by lat long
[1:37:58] and you'll be able to download information for an area but is just mindful of uh the the footprint so I um
[1:38:08] I think that both Vivien and ginger had Illustrated this or talked about this and um abash Dr chaty will talk about it
[1:38:18] more next week it's just you have to be mindful of um what you mean by region because it does matter um how big the
[1:38:27] area is and um and and and next week you once we grab the data from oo3 you'll be able to
[1:38:36] pick specifically lat law we do show that next week um and that would be the closest we have for as far as a
[1:38:44] region um or a more fine scale region I hope that answers the question because I I don't know what they mean when they
[1:38:51] say specific region but I wanted to call caution that thank you Karen I think um the way
[1:39:00] I interpret this is perhaps you know defining a region through a lat long or through a shape
[1:39:06] file specifically I know some some data sets have that sort of option yeah so um well you have to come back for next week
[1:39:15] I guess because um the activity that we show um through open daap um we do pick by
[1:39:23] I I um The Notebook will allow you to actually determine if there's a specific City you want to look at and um
[1:39:34] depending if there's data or not we will be able to show that so we will have that as an example next
[1:39:42] week okay thank you moving on then to question number 10 it looks like uh that was left blank so question 11 if we load
[1:39:52] these notebook in Google collab will the download script work there or will we Face any authenticate authentic authentication
[1:40:04] errors yeah this is an excellent question so so we haven't a disclaimer another disclaimer here we haven't
[1:40:09] tested these notebooks in Google collab that was out of the scope of this particular um uh training tutorial
[1:40:15] however uh because it uses https based download it's not for example going direct to S3 and using some sort of
[1:40:22] proprietary cloud based way of downloading the data it's using a pretty generic way of downloading it it should
[1:40:27] theoretically work in any platform that uh as long as you're running Jupiter in that platform in in that environment and
[1:40:33] you have the dependencies uh and the modules that you've installed through the environment. IMO file theoretically it should work fine uh The Notebook does
[1:40:40] generate the credentials uh authentication that you need to authenticate so again I haven't personally tested that out but in theory
[1:40:49] it should work um I will say you do need to to make sure you also set up a uh
[1:40:56] birth data login account in advance uh Karen showed you that in the slide deck just before the the demo uh and make
[1:41:03] sure that your credentials are working that's probably the most important thing you want to do first yeah I can say I did um we didn't
[1:41:11] test for these particular notebooks but in the past uh we could go interchangeably between colab and GitHub
[1:41:18] so that shouldn't be uh a problem wonderful okay question then number 12 is there any training data related to
[1:41:33] CO2 measurements oriented to test machine learning algorithms such as data cubes data sets Etc yeah so I'll start off by saying I'm
[1:41:44] not aware of any um but I I did locate a generic uh ml training um uh repo that
[1:41:51] is already on the GitHub repo that I dropped in there it's very generic I don't know a whole lot about it uh but
[1:41:57] I'll just stop here and maybe PT this over to JJ or Karen if they have more to
[1:42:05] add um so I will start so for from the oo2 O3 project we don't have any training data set
[1:42:15] reserved for machine learning or algorithms but I think the for the question 13 has is related um Eric
[1:42:26] should I um continue with question 13 or I could wait till uh question 13 sure go ahead let me just read it um
[1:42:38] okay yeah so this ties into go ahead and and continue then yeah so I mean we don't have any trinities that um that's
[1:42:46] reserved for machine learning but this is really a very active research area um so both for both the C concentration and
[1:42:54] also for the fluxes I I included several references in the Google docum you could check out later basically the community
[1:43:02] has been using the O2 data and other uh input data and the Machine learning methods trying to uh have Global CO2
[1:43:12] concentration coverage I mean as you have learned from today and yesterday the CO2 only observe uh a stripe of the
[1:43:21] atmosphere so the special coverage even though we um observe the whole globe but it has big gap so the community is
[1:43:29] trying to use a machine learning method to fill these gaps using other um other data sets and also the machine learning
[1:43:41] techniques great thank you that's that's great Insight thanks for that question number 14 is there a way to connect and
[1:43:49] get the data through Google Earth engine yeah I think this was touched on briefly yesterday I think there is a way to do
[1:43:57] it however we we did not incorporate that as within the scope of this training um and we as we explained
[1:44:03] yesterday we mentioned that it would be up to the user to do that uh using the preferred data sets um and uh we we did
[1:44:10] talk about raster file formats briefly yesterday as well such as geotiff um and as the oc2 data sets that you saw today
[1:44:17] and the oo3 data sets that you'll see next week are both natively provided in that CDF format it would be incumbent
[1:44:23] upon the user to do their own file format conversion uh using their preferred tools to do so which do exist
[1:44:30] um and uh so so I think that um there's others that uh I think Erica you you
[1:44:37] were going to comment on other resources that our set already has out there that are more General perhaps that could be
[1:44:43] extended to these types of data sets yeah absolutely uh you did include a link there David on question number 12
[1:44:53] on a machine learning fundamentals that arset has done and that I believe that did use Google Earth engine and many of
[1:45:01] our trainings aret trainings do use Google Earth engine more than anything it's to take advantage of all of the
[1:45:09] data sets that are already sitting on Google Earth engine so um it's especially useful to do time series
[1:45:15] analysis because it's all done in the cloud um in the case of oc2 and oc3 data uh
[1:45:23] uh definitely a user can upload the data onto go Google Earth engine they would need need to uh convert it into a geotiff because
[1:45:33] that's what Google Earth engine um identifies however I don't know what is the um how it would work if you have a
[1:45:44] large time series data set um it might be a little bit burdensome so that's as much as I can say in terms of using
[1:45:53] Google Earth engine but yes you can if you have a couple of files that are in geotiff then you can certainly upload
[1:45:59] them to to that platform um anything else to add on that uh David or Karen uh yeah I don't really have
[1:46:13] anything to add uh substantively but maybe it would be good to also have a resource there for a point of contact at
[1:46:20] Google Earth engine for users who um who uh need to reach out to them for support that might be a helpful
[1:46:30] resource yeah absolutely and I think moving forward as we think of uh future trainings we could include a component
[1:46:38] um that walks participants on how to go through this process of uh converting to a geotiff and then uploading it to
[1:46:48] Google Earth engine converting you know an xco2 file into a geot f um all right let's move on to question
[1:46:57] number 15 the data has a core spatial resolution are there any methods such as downscaling that can increase this
[1:47:06] resolution and what are the parameters such as environmental factors that would need to be considered when choosing a
[1:47:13] method to enhance the spatial resolution yeah so I I could take a first shot at this uh so I'm assuming
[1:47:20] they're referring even though the question doesn't say it I'm assuming they're referring to the oc2 notebook which does have uh that data natively is
[1:47:28] pretty coarse and so we we used a uh a binning a selective bidding um to relatively coar at 5 by5 degree lat law
[1:47:36] resolution using nearest neighbor uh we didn't really scope into the training uh any kind of rescaling to higher
[1:47:44] resolutions uh for this particular uh training exercise uh however uh maybe Jan or Karen have done that in the past
[1:47:51] or maybe maybe this is something that is an active uh ongoing research activity that I'm not aware of so I'll I'll stop
[1:47:58] here and see if they can chime in on that um I can Chim in on this I think
[1:48:05] this probably I mean the uh the question was about fill the data gaps between the different um os2 orbits I think we can
[1:48:17] refer to question 13 I mean from the oc2 project we have level three product that level three products um
[1:48:28] generated by data assimilation methods so basically you combine the models with observations through the data simulation trying to fill the data gaps and another
[1:48:42] way you can fill the data gaps is through machine learning methods um the main um input environmental factor that have to be
[1:48:52] considered uh the wings I mean they really trying to uh consider transport I will refer you to uh question 13 to find
[1:49:01] out more references on that I mean official we don't have official machine learning product but the science
[1:49:08] Community has generated several thank you great question then number 16 are all data that you're using in the
[1:49:27] demo available online yes and I started putting in a link there for the oc2 uh data set
[1:49:37] landing page uh yes they are uh and if you go to the notebooks which you'll be getting in your homework assignments and
[1:49:43] I'll drop the other links directly in this answer sheet as well uh the the top markdown cell of each of those notebooks
[1:49:50] will also contain the direct links on how get to the publicly accessible data sets great so moving on then to question
[1:50:00] number 17 the white areas do they mean there's there are no fluxes and if so why so I think I'm going to defer some
[1:50:10] of this to ji later uh I'll take a first shot at this uh so I think it just
[1:50:14] depends on the flux product you're using so it could be due to missing data over land which would be obviously the case
[1:50:20] for the ocean product or maybe it's uh data that's not available over the oceans which could also be the case for
[1:50:25] the uh the net biosphere exchange product um in areas where we expect um to see fluxes uh there will be a white
[1:50:34] area there uh in between the red the red the shades of red and the shades of blue
[1:50:38] to separate between the positive and negative fluxes those would be what I would consider to be the near zero
[1:50:43] fluxes so they may not be actually zero but near zero in that white range but I'll defer to J uh to explain further if
[1:50:50] it's it's needed um um I think David you explain it really well um so basically I mean
[1:50:57] the is if it's near zero fluxes for the Overland for the MB product that means that the flux is close to zero so it has
[1:51:07] physical meaning so it's close zero There is almost there um almost no fluxes um I think for the flux part we
[1:51:15] don't have missing values so because it's the it's generated by the uh model it doesn't have missing value so it's
[1:51:21] outfi so zero does mean um no fluxes okay question number 19 can you please advise what's the best
[1:51:34] methodology to estimate above ground carbon stock for crop land and grassland um so NASA has another mission
[1:51:44] called jidi uh is a ecosystem liar is also on uh International Space Station so the that mission specifically um
[1:51:55] aimed to quantify the above ground bom mass for Forest I'm not sure about grass grassland and crop land you need to
[1:52:04] check out later um for the references and also I put a reference that uh um that estimate the global biomass using
[1:52:14] liar radar and ground measurements and the Machine learning approach that generates the global uh threshold live biomass over 21st century I assume that
[1:52:26] includes both the the biomass for both cand and grassland and you can check out the reference later in the Google
[1:52:36] Doc okay question number 19 between NPP and gpp which one is okay to use to estimate carbon
[1:52:45] stocks so um I mean gpp is really the gross primary production that represents the amount of carbon fixed through
[1:52:55] photosynthesis and nppp is the difference between gppp and the rate and the carbon released through the um metalism and the maintainance
[1:53:09] respiration so is the MPP is the amount of carbon fixed by the plants and MPP can be used to estimate carbon stock but
[1:53:17] mpps represent flux so that you you really have to integrate the MPP over time period to get carbon stock change
[1:53:26] so it's really carbon stock change it's not really the carbon stock stock okay uh question number 20 why is there
[1:53:35] a large carbon sync over land in 2022 oh that's a good question great question question um we I mean in the first part we talk
[1:53:48] about the drought the impact of drought on the on the carbon fluxes mean 2015 2016 is a elal year um that caused big
[1:53:59] drought over the tropical region so that has reduced the carbon sink well on the opposite of the elal is
[1:54:08] linia so 2022 is by is at the end of the linia year we haven't done the detailed
[1:54:16] analysis but I um hypothesize that the 2022 is due to the large carbon snc caused by the L
[1:54:28] events of course I think this is needs some more detailed analysis um from the community or the
[1:54:38] team okay question 21 I'm not sure if this is clear enough but do you know any AI applications that do this not sure
[1:54:48] what what this is but do you want to take a step um yeah I I think I could
[1:54:56] say I mean if you mean I mean artificial the machine learning has been applied to estimate CO2
[1:55:04] concentration and also the community has been started to use machine learning to estimate Caron fluxes but this is really
[1:55:14] a very active research area and just getting started I haven't seen any um published reference that use machine
[1:55:23] learning to quantify the carbon fluxes yet um but there are several studies that use machine learning to
[1:55:31] estimate concentration okay question 22 we discussed some of this previously can we export the data to Tiff similar to
[1:55:42] jpeg um let's see and analyze changes in CO2 for a specific time period yeah so I could take a shot at this one
[1:55:55] uh so we sort of addressed some of this in the Google Earth engine question above um and and while once again to
[1:56:02] remind folks while we didn't develop or test our notebooks uh to do anything with Tiff or do any Tiff conversions or
[1:56:07] geotiff conversions uh I did uh locate um a open sour one example of an open source solution I'm sure there's others
[1:56:15] out there and python that can be incorporated into a jupyter notebook and so I provided that example there but
[1:56:20] with a disclaimer that this has been tested so it's kind of like a use aty own risk kind of thing uh what we
[1:56:25] feature in our notebooks are uh proven open- Source uh capabilities that um have already been tested and proven to
[1:56:34] work really well and so that's why I'm I'm kind of putting that as a a cautionary disclaimer um with that
[1:56:41] so great thank you for for that reference Yeah question 23 can we use the analysis outlined today to gain
[1:56:48] Insight on areas that might be on the verge of death certific ification I would say yes um so we um
[1:57:00] talk about concentration and the fluxes so if you if the area is on the verge of deser
[1:57:08] deser desertification you could see the change of the current fluxes you could use the data product we
[1:57:15] shared with you today and the some tools you could look at how the fluxes has been changing in the last decade and how
[1:57:24] is that related to the change of climate factors or the human activity and then you probably could
[1:57:33] infer what would happen if the climate on certain trajectory I think certainly this is a very good application area I
[1:57:42] would really highly encourage you to explore how you could use this data to address this question okay so we're running here toward the
[1:57:56] end how about one more question what should be considered when comparing and interpreting oc2 and 3X CO2 data with
[1:58:04] groundbased remote sensing and model observations this is a very good question um so I remember that the oc2
[1:58:15] O3 observations column integrated concentration and uh yesterday Vian talk about averaging kernel that represents sensitivity of this column to the CO2 at
[1:58:27] different vertical levels so when you um uh compare the column Su concentration with ground based remote sensing and
[1:58:36] model observation you should take into account of the averaging kernels and the rating functions that provided as part
[1:58:44] of the level two data set um I think when you compare with column with ground based uh with is the I mean special
[1:58:53] surface data is a little tricky because surface just represent surface signal well column X2 represent column in uh
[1:59:00] column integrated value so on the bottom um um bottom line you really should consider the averaging kernels okay so we have come to the top
[1:59:14] of the hour here unfortunately we weren't able to get to all of your questions however we will be answering
[1:59:20] these questions on the Google doc and we'll be posting the Google Doc onto the training web page in a couple of days
[1:59:27] just to remind you that we will also be posting the recording of today's presentation and the PDF of the
[1:59:35] presentation on the training web page uh there is one more session as part of this series it will be on Tuesday March
[1:59:44] six uh March July 16th and it will be focused on the use of oc3 measurements to look at CO2 to in urban areas so with
[1:59:55] that I would like to thank our invited instructors today Dr Jun jilu Karen Yuan and David David as well as the
[2:00:06] arset team for their support and of course to all of the participants for your uh continued enthusiasm and great
[2:00:14] questions today before I close I'd like to um give the opportunity to our speakers to give some words um uh for
[2:00:24] today's session so Dr Le would you like to chime in yeah um I really thank all of you for uh participating
[2:00:33] participating today's uh training session I feel so honored to share this training course with all of you I feel I
[2:00:41] hope this is really um the beginning of your journey with oc2 O3 observation and if you have more questions and um
[2:00:49] comments please feel free to reach out I am so honored to see so many people from all over the world to D in and also I
[2:00:57] want to thank the uh AA training team for the support and David and Karen for pulling together such a wonderful uh
[2:01:05] exercise and also want to thank Eric to host this uh training session thank you thank you very much uh David would you
[2:01:14] like to say some words yes uh thank you again for having me uh be part of this really awesome
[2:01:20] opportunity and this this awesome exercise uh I actually learned a lot from this myself I hope you all did as
[2:01:26] well uh please don't be shy please reach out if you have any questions my email address is right there um and also on on
[2:01:32] GitHub uh the repo uh all of the code is open source um and and uh I believe it's
[2:01:39] the using the Apache 2.0 license if I remember correctly uh so so you're welcome to reuse the code as much as you
[2:01:45] would like um and yes uh looking forward to seeing what comes from here thank you thank you very much and Karen any words
[2:01:53] from from you thank you so much for joining us it's really always a pleasure and I'm very fortunate to work with a great
[2:02:01] bunch of people and hope to see you all next next week thank you very much and we will see
[2:02:09] all of you hopefully uh next Tuesday wishing you all a great day and until then bye-bye
