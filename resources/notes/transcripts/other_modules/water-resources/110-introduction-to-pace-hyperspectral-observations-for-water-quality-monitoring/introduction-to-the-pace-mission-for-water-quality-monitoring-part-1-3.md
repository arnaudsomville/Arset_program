# Introduction to the PACE Mission for Water Quality Monitoring, Part 1/3

`https://www.youtube.com/watch?v=CoqJUeyXgAA` · id 48 · 1:34:51 · module 119 — Introduction to Plankton, Aerosol, Cloud, Ocean Ecosystem (PACE) Hyperspectral Observations for Water Quality Monitoring

[00:00] hello everyone and welcome to this applied remote sensing training on introduction to Pace hyperspectral observations for water quality
[00:10] monitoring Bas stands for Plankton aerosol Cloud ocean ecosystem and today we're going to focus on introduction to
[00:18] the PACE mission for water quality monitoring my name is Amita meta from arset and we are fortunate to have a
[00:26] guest speaker today Dr Antonio manino he is the based Deputy project scientist and I will be introducing him
[00:35] later we'll start with a brief introduction to rset so rset is NASA's capacity building program from applied sciences and it
[00:47] provides accessible relevant and cost-free training on remote sensing satellites sensors methods and tools our set trainings include a
[00:58] variety of applications of satellite data for the themes listed here and are tailored to audiences with a variety of
[01:07] experience levels so about arset trainings uh arset trainings are online or in person they are live and instructor Le or
[01:19] asynchronous and self-based they're costree uh they're biling well um if they're provided in Spanish even if they're not delivered in Spanish all the
[01:29] material is a available in Spanish sometimes there are multilingual options as well uh we only use open-source
[01:36] software and data and accommodate differing levels of expertise more information can be found from our set website listed
[01:46] here so with that we'll start with uh today's session introduction to Pace hyperspectral observations for water quality monitoring this is an overview
[01:55] for pace so here's a little a little bit of background um water quality monitoring in coastal ocean estuaries and Inland
[02:05] Lakes it is critical for ecosystems and fisheries management and also for Safe Drinking Water uh because of the limited
[02:16] special and temporal coverage of inc2 water samples remote sensing data are utilized to obtain water quality parameters in coastal and open oceans
[02:26] and in Inland water bodies multi-spectral sensors uh have been used for a number of years with limited
[02:35] medium spectral bands which means uh band widths are greater than 10 nanometers and examples are Terra and
[02:43] aqua with Mod sensor uh NPP and GPSs with re sensor lens set o Sentinel 2 MSI these are widely used in recent years
[02:55] for deriving water quality parameters such as chlorophyll a concentration which is an indicator of alkal Bloom Sentinel 3 has POI sensor and that
[03:06] has a few bands with a bandwidth less than 10 nomers um also used for deriving water quality parameters such as
[03:14] chlorophyll a concentration so while these sensors do detect alkal blooms they cannot distinguish between toxic harmful alal
[03:25] Bloom and non-toxic Aly so if you look at this table here um this is from National Institute of
[03:34] Environmental Health Sciences it's talking about different uh organisms so Habs they cause these are part of habps
[03:43] uh they cause illness in humans if they uh consume contaminated seafood or drinking water or are exposed to Habs
[03:53] through through swimming um now hyperspectral observations uh which are less than 10 nanometer spectral bandwidth they help
[04:03] detect help organ have organisms in water and the table shows kind of organisms in type of water so these are
[04:14] salt water organisms um and so this is uh alexandrium then kinia brevis uh pseudo nichia and microcysts uh they forming
[04:27] salt water as well as fresh water here and uh these are the toxins um they cause and they have severe health
[04:37] effects as listed here so for health purposes also it's important to to detect harmful alal Blom constituents
[04:48] from existing Mission uh it's not possible to uh detect all these different organisms and for that hyperspectral observations are useful
[05:00] and that is the reason for design of paace uh which is the newest Mission from NASA now there are past NASA
[05:09] missions for example um EO Hyperion and hio which was on International Space Station um and we will have some more
[05:18] details about these later and there's a current NASA Mission with hyperspectral sensor emit that is also on
[05:25] International Space Station um but in in February 2024 NASA launched Bas which is the newest hyperspectral Mission uh it
[05:36] has ocean color instrument or oci with bands between uh 340 to 890 nanometers in um all the way from Ultra wide to
[05:47] near infrared and also some bands in shortwave infrared and the bandwidth uh they are uh 2.5 nanometer steps U it's 5
[05:57] nanometer bandwidth with 2.5 nanometer steps so Pace oci will improve detection of toxic algae and help monitor the
[06:07] health of coastal and open oceans and Inland water bodies um that can be resolved by oci footprint which so oci
[06:17] footprint is about 1.2 km Square so water bodies which are bigger than that um they can be seen by uh PA oci and uh
[06:30] in the US currently 150 to 200 laks are there which are big enough to be resolved by
[06:38] oci base also has uh polarimeters HARP 2 and specs one and combined ocean and or uh air observations so HARP 2 and specs
[06:49] one are for atmospheric observations so combined ocean and air observations will help us understand how aerosols might
[06:57] impact phytop growth in the ocean now Dr Mano is going to talk about this in in detail so overall training learning
[07:09] objectives for this trainings are by the end of this training participants will be able to review the capabilities of
[07:17] past and current hyperspectral missions useful for water quality applications examine key characteristics of the new NASA P satellite and
[07:26] hyperspectral sensors including their advantages and limitations then access analyze and visualize Space level two and level three data for water quality monitoring
[07:39] in selected areas of Interest using SAS which is a NASA software that we've talked about earlier and Jupiter
[07:47] notebook notebook software finally assess the applicability of selected Pace level two and three water quality parameters to
[07:56] evaluate water quality in large bodies of waters so these are the overall objectives prerequisites for this TR
[08:04] training are fundamentals of remote sensing um also uh there is a training about um water quality monitoring in
[08:13] estuaries that is helpful uh SAS training was offered earlier this year that also is uh useful and um there is
[08:22] an optional prerequisite if you there is going to be a demonstration using Jupiter notebooks and python so if if
[08:29] you are interested in kind of following along or do it later then uh you need to install uh Jupiter notebooks and python
[08:37] at least version three or uh larger or later but that is actually optional you will have a
[08:44] demonstration so there will be three parts to this training uh starting from today and there will be one next week
[08:52] and in the subsequent week um there will be one homework assignment that will be posted on 9th of October that is the
[09:00] last day of the training will be posted on our website and it will be due on October
[09:07] October 24th a certificate of completion will be awarded to those who attend all live sessions and complete the homework
[09:14] assignment before the given due date with that we will start with today's um session introduction to Pace
[09:25] mission for water quality monitoring and specific object Ives for this session are that by the end of this
[09:32] session you should be able to review past and current hyperspectral missions useful for water quality applications identify key features of
[09:42] the NASA Pace satellite and hyperspectral instruments useful for monitoring water quality of large lakes and and estuaries and identify advantages and
[09:52] limitations of using Pace ocean Quil instrument data for water quality monitoring just a note about how to ask questions
[10:03] please put your questions in the questions box and we will address them at the end of the webinar and feel free
[10:10] to enter your questions as we go through this um presentation so we will try to get to all the questions during the
[10:17] question and answer session after the webinar uh the Remain the remainder of the questions which we cannot uh cover
[10:25] today they will be posted on the training website about a week after the training now I want to introduce Dr
[10:35] Antonio manino and he will be talking about uh Base mission um before that I also want to make a note that all the acronyms
[10:45] that we use uh in this uh session uh they are posted at the end of this uh
[10:51] presentation so there's a slide with all the acronyms so please refer to those so I'm just going to um introduced Dr um
[11:00] Antonio manino he is a research oceanographer of the ocean ecology laboratory at Nasa GED space flight center since 2002 and is currently
[11:12] Deputy project scientist for ocean on NASA space mission and Deputy principal investigator on the upcoming NASA glimmer
[11:21] glimmer Mission his scientific expertise is in coastal and ocean biog geochemistry carbon cycle science phytoplankton ecology and remote sensing thereof among
[11:34] his many accomplishments Dr Mano has served as project Pi or principal investigator uh laboratory manager uh lead and co-lead for the geoc cape
[11:46] Mission preform preformulation ocean science working group Modis and we's ocean science team member and he's a pi and lead for the
[11:58] ocean biology and biog geochemistry field support group so I invite Dr mano to talk about the pace Vision Dr Mano
[12:08] thank you thank you am for that for that wonderful introduction I'm happy to be here uh with the ret
[12:16] Community um excited to um introduce um uh pace and um our hyperspectral observations for water quality monitoring okay so what will pace
[12:29] um observe one of the the key things that pace will observe are these invisible or microscopic things that are
[12:35] um from from space and these include uh particles in the atmosphere like aerosols um various types of aerosols as
[12:44] well as microscopic organisms in the ocean surface um various phytoplankton for example so um you know why why are we
[12:56] interested in using Pace um why satellite in general um and specifically white phytoplank andosols these are some
[13:03] of the things that I'm U will uh address today so fire plank on Earth on Earth are quite important they um they're
[13:17] distributed throughout natural water bodies um throughout the Earth um and they have a very wide range in um in um
[13:28] diversity as shown here from this picture on the left um they play an important role on Earth um they produce
[13:37] over half of the oxygen annually um that enters the atmosphere um they're also the they form the base of the ocean's food web so the
[13:48] phytoplankton are consumed by by small animals and those are consumed by small fish and then on to larger fish so they
[13:57] they're they're uh uction Cascades up the food web and ultimately can be consumed can um produce fish and
[14:05] shellfish that humans consume or larger larger fish and and um mammals in in the ocean also phytoplank are important
[14:16] because as they produce oxygen they also take up carbon dioxide and so they they do have a contribution to reducing
[14:24] atmospheric carbon dioxide um to some to some extent here's an example of a satellite image of a CO of a phytoplank In Bloom in this
[14:36] case it's a cockal lithop for this would be an organism that looks like this um it has this calcium carbonate armor or
[14:43] chalk essentially shell and it that gives it a very bright turquoise uh coloration um that we can easily see
[14:53] from space because it scatters the light um the sunlight back out into space for the satellite to to measure so we can
[15:00] see these distributions here in um in the North Atlantic and just to give you an example a CO a single calop for is
[15:10] about a 100th of a millimeter uh in diameter and um and if you um if you filled um a thimble um with with sea
[15:21] water where these are present their concentrations can reach about a thousand cells per that thimble full of
[15:27] water or milliliter uh another feature that we can detect from space is is the pigment The primary
[15:35] pigment in phytoplank called chlorop Fila that gives plants um their their green coloration and and it gives um
[15:43] phytin a green coloration as well um which can be modified um um if they have other pigments which they do so not all
[15:52] phytoplank and L green some do uh depending on their other pigments here's an example of a cyanobacteria
[16:02] bloom um in Lake ERI um you can see the the satellite image here and um in fact
[16:09] in this this sin of bacteria or blue green algae does actually indeed look kind of greenish and in 2011 there was a
[16:15] massive Bloom um and these are considered harmful because they produce a toxin um they they they impacted the
[16:23] Municipal Water Supply for the city of Toledo Ohio in fact they they shut off the Municipal Water Supply to residences
[16:31] and Commercial entities in in Toledo because of this Bloom and and subsequent har blooms that have occurred since
[16:40] then so it's important to monitor them um also here's an example from from Oman in the Indian Ocean in which um uh
[16:48] sardines um um were killed because of the massive phop and blooms resulted in the um u a large amount of organic
[16:59] matter um that resulted in bacterial consumption of the pr of the oxygen present in the water and so the sardines
[17:06] actually couldn't breathe there was no oxygen not enough oxygen present and so that resulted in this massive uh sardine
[17:14] uh uh death here um a bit about iosol again the focus here is water quality but I'd like
[17:22] to give you a broader perspective of the P Mission so um a s come from many sources and they're quite variable in
[17:31] size and shape and um an example here on the left is like a dust uh dust plume um
[17:39] of aerosols here you can have aerosols coming from um plants that emit volatile organic matter um that can um rise into
[17:49] the atmosphere smoke from forest fires is is an important um source of aerosols volcanic volcanic eruptions um also so the ocean itself
[17:59] produces um sulfate aerosols or it's essentially a salt aerosol um then here's some some other images of of um of aerosols uh pollen
[18:13] for example some salt crystals and some smoke or soot uh Char based aerosols as well uh clouds are technically an
[18:23] aerosol but we generally classify them separately um what's important is that they impact climate and a little bit more about that
[18:33] next um so aerosols and clouds help control how much energy is absorbed by the Earth um some aerosols warm the atmosphere and
[18:44] some aerosols cool the atmosphere that has to do whether they absorb uh the sunlight or they uh reflect the sunlight
[18:52] so that's something where that pace will help with by characterizing the aerosol properties and the types of aerosols
[19:00] that are present and their size and other characteristics um we can better uh understand how of their presence and
[19:08] distribution um and composition uh affect uh um the Earth uh um the earth's climate and um and long-term impacts on
[19:19] global warming as we better understand how aerosols change over time okay now we'll move into ocean collar
[19:30] collar um so the the the color uh that uh uh that we see has to do with the how um
[19:38] from the ocean has to do with how the um the sunlight interacts with the uh constituents organisms and substances
[19:49] that are present in the water uh for example if you have this this Photon of light coming down into the water um of
[19:58] course it's you know full spectrum of light um rainbow rainbow spectrum of light plus your ultraviolet and near
[20:05] infrared that we can't see um it interacts with phytoplankton and other organisms and and uh bits and pieces of
[20:14] of material as well as dissolved substances in the water and so light can be be absorbed um it can be scattered in the
[20:22] forward Direction it can be scattered in the backward or to the sides and so these the presence of these these um
[20:30] constituents alter um the penetration uh and the color of the light um that penetrates the in the water
[20:39] column um and ultimately the the light that gets scattered out of the water or back scattered is what we call it
[20:47] exemplified here that is the actual signal that that we that we actually see with our um with our eye and we call
[20:55] that water leaving reflectance and it has its own uh distri light distribution or color distribution um in in clear waters that
[21:05] um you know in in the clearest beaches that you that some of you may have have experienced um the Ocean looks very blue
[21:13] and so that just that means that the the um it's free of of these uh consit many
[21:20] of these constituents um but there there's there is there's certainly always organisms present but the the the
[21:26] blue color is what is scattered out of the of the sea um and what we see is is ultimately
[21:38] similar to what the salite observes so the salite observes the the full the full spectrum of light and Beyond on the
[21:46] ultraviolet and infrared as well and so um and and using the we use the satellites to um quantify how much light
[21:58] um leaves the ocean through the atmosphere and um also um the intensity across the full uh Spectrum um from
[22:09] ultraviolet into the infrared so just to give you a little more background what color what causes the variation in the ocean color here's
[22:20] an IM a satellite image of a coastal region it has wide ranging uh uh colors uh this is a the
[22:28] true color image and as mentioned previously it is a function of the light that's absorbed and Scattered by the uh constituents
[22:37] that are in the water and these include phytoplankton and their pigments uh dissolved organic matter to give an
[22:43] example of the dissolved organic matter if you take a tea bag and you steep it in in water the the substance that comes
[22:50] out of the tea bag that is an example of dissolved organic matter so um across the landscape when when rain falls on to
[22:59] uh through vegetation and through soils it essentially Steeps those um those plants and the soil and strips out
[23:08] dissolved organic matter that flows into the rivers that flow into the sea that we can detect from from
[23:14] cites another uh other constituents are just basically bits and pieces of of of dead um dead organisms um even even
[23:25] fecal pallets of of um of organisms as well U from small animals for example and um also sedimentary particles uh
[23:36] especially in the coastal environment and water itself absorbs light so that also comes into play um and and here on
[23:44] the right just gives you an idea what the Spectrum looks like from the uh Violet all the way out into the red part
[23:50] of the spectrum for different locations in this image so if we look here right near the coast the water looks very
[23:56] Brown very turbid and you can see see that the the highest water water leing reflectance is in the is in this
[24:03] yellowish orangish uh portion of the spectrum and that gives and this spec this uh Spectrum gives it this brownish
[24:12] color as we move further off um we still see we see some some turbidity and really uh kind of opaque is green
[24:21] coloration um gives us this type of spectrum with the peak occurring in in the greenish to yellow wavelengths if we
[24:29] move further out uh we see that the Spectrum shifts further to the left and more towards the blue and still in the
[24:36] green but the waters are still on the order are still green we move further out we move more into bluish Waters and
[24:43] we can see that the peak is sort of at the edge of the blue spectrum and all
[24:47] and towards the edge of the blue UV spectrum and then further offshore um in the clearest waters we see that the peak
[24:56] is at the far blue end this of this spectrum of water leing reflectant all right so how do we take
[25:05] that information um that you know that knowledge of okay so we know that different constituents um impact the
[25:13] watercolor differently we talked that we saw the T the turbidity in those brownish water The Greener Waters where
[25:20] you likely have high amounts of phytoplankton present and their pigment chlorop Fila among other pigments and and also the the blue fluish water where
[25:28] you have low concentrations of of these constituents and so if we if we break down the this is just a very um
[25:39] cartoonish notional eyes this not necessarily a true Spectrum um of reflectance of our leing reflectance but if we look at the different portions of
[25:47] the spectrum um what information can we derive from it so if we look at if we want to look at the colored dissolved
[25:54] organic matter this is a t is an example of that because it's got that you know can have a yellowish to brownish color
[26:00] depending on on your tea or or green for that matter but um we can use information especially in the lower end
[26:07] of the spectrum where uh color dissolving gank matter or sedom absorbs most intensely um uh we can see that
[26:15] because of its um presence it it pushes down this reflectance signal very low in in the ultraviolet and blue end of the
[26:23] spectrum um as we move um as we look at other portions of the Spectrum we saw that peak in the roughly you know the
[26:32] 550 to 600 nanometer range in the previous image this is this is because of suspended solid so we can use
[26:39] information at this part of the spectrum as well as into the into the beyond the red into the near infrared about the
[26:46] presence and concentration of suspended solids um the um we can also look at specific pigments um here are two
[26:55] examples um here in this uh a portion just above around 620 or so we can detect this pigment called ficoin it's
[27:06] present in some um in some of those uh phytoplankton that were present in Lake giri the the CYO bacteria or blue green
[27:15] algae they possess the spicy and pigment um also we can look at uh the signal for chlorofil here at the red end of the
[27:24] spectrum um it's also present in the blue end of the spectrum but in this example we're just showing the red um
[27:31] also the full spectrum Across From Below 400 to over 700 nanometers can be used to derive the composition of phytop
[27:39] pigments that are present in the water and that helps us um derive uh phytoplancton Community composition so so here's the so here's
[27:50] the reflection Spectrum we use this information to get another piece of information and we can um break this
[27:58] Spectrum apart to look at different individual constituents and here's an example of absorption of these different constituents here we've got the
[28:07] seom um in this orange line for example as I said this absorbs intensely at the lower end and the blue and the
[28:15] ultraviolet um the the depigmented particles or um the detrius um has a spectrum that looks similar to to seon
[28:25] but it's it's less intense as you can see it's it's um it's it's less intense in the um in the UV and blue than than
[28:32] sedom and then water itself absorbs and here's an example of the water Spectrum it absorbed more intensely in the higher
[28:39] wavelengths especially in the as you go go into the red and near infrared um but and the green curve represents
[28:47] phytoplankton this is like a mixture of phytoplankton communities uh a mixture of pigments uh but generally this
[28:54] absorption spectr represents the pigment composition of all the phytol plankin present in the water and we can break
[29:01] that F down further uh into different phytoplankton communities and here's just a an example of four very different
[29:11] uh phytoplankton uh species um uh know the huxia has the that K calcium carbonate armor um phastos is a diom these are
[29:24] very very common and widely distributed throughout the global ocean um and then there's um this uh the this
[29:31] pain curve represents a a sign of bacteria that's present in the um open ocean and per caucus is another sign of
[29:40] bacteria that's present um and um and also in the open ocean far offshore in very clear waters okay so um with past we're moving
[29:52] from multispectral radiometry to spectroscopy historically we worked with very few pieces of information in terms of the in the um uh intensity of of um
[30:07] of the ocean at different colors we've only had we started with four pieces of information of colors in the late 70s
[30:16] and through 80s butsy zcs with SE whs we added a several more a few more bands uh
[30:22] with modus we added a couple more uh with v which is the are the most recent sensor
[30:28] sensor um we actually went a little bit backwards we actually had two fewer bands as you can see here by
[30:35] comparison so that limits the amount of information that we have to tease apart the phytop communities that are present
[30:41] and to give you an example from the Arabian Sea here in the Indian Ocean um we'll look an example of a datom here
[30:48] this is a a microscopic image and also uh another uh phytoplankton that can be both a phytoplank and a micro Plankton
[30:59] it can actually eat other organisms as well so it's a combinate it's a mix trro is what we call it
[31:05] nocca um and if we look at what V sees for for these two types of organisms if
[31:13] you look at a water with um with the datom which we'll call fish food because Dooms are really uh a really good source
[31:20] of of of uh food for fish because it's very nutritious for them um we see the the black dots right so that's the
[31:29] because V has only these five pieces of information um and the noala which is consumed by Turtles and and not at all
[31:37] by fish um um we can see the red red red dots here only one pie One spec one at
[31:44] one wavelength is there slightly different signal here this is really insufficient to really distinguish these organisms what pace will give us is you
[31:53] know um well over a 100 more pieces of information um of of light um in terms of in this case it's absorption um and
[32:04] we have much more capabilities to distinguish these two kinds of organisms whether we have fish food or whether we
[32:10] have turtle food and that's obviously important for for humans [Music] [Music] um um I also wanted to share with you
[32:20] that while pace is the first truly dedicated ocean color Mission um hyperspectral ocean color Mission there are other hyperspectral missions that
[32:30] have that are present today and and have have been um in space previously um so these are ones that
[32:39] have are being cons applied for water quality purposes and so um hio was the was the the first um basically it's an
[32:48] off-the-shelf sensor they basically took parts that were available commercially put something together um and launched it to the International Space Station um
[32:57] it was up there for five years roughly 2009 to 2014 um it collected 10,000 images um over its lifetime they're relatively
[33:07] small um the dimensions are given here um at a footprint of about 90 Metter that's the pixel dimensions um from each
[33:16] side um it it it provided some very nice information and data uh it's limited um in the sense that the data quality um is
[33:27] not what we're to for um performing both climate uh climate climate research as well as for um applications that that
[33:39] can directly benefit Society um there's some other instruments um that are currently in orbit and in use there's Prisma from the
[33:48] Itali space agency um it's high spatial 30 MERS um however this was designed for land surface imagery for atmospheric
[33:58] uh greenhouse gas retrievals um it is being applied for water quality but it is it's it's coarser and in in spectral
[34:07] information it's on the order of 12 nanometers and we'll talk more about that for Pace later um but it has its
[34:14] limitations um but it's being applied and it could be useful for those of you who are who require high spatial
[34:21] resolution resolution data again it's limited in coverage it's very limited they're only acquiring images um in certain regions of the
[34:30] earth uh the same can be said for nmap which is um a um uh launched by the
[34:37] German space agency it's it's similar to Prisma in that it's got a um a 30 meter spatial footprint uh but it also
[34:46] collects generally small scenes on the order of 30 kilom by 390 kilometers again designed for atmospheric properties land surface
[34:54] imagery um but it is being applied for water quality currently um and the the last one here
[35:02] is EMT this is a a NASA uh Mission it's on the International Space Station so it's limited in coverage from about 50
[35:10] North to roughly 50 South and um it has a 60 meter spatial footprint again just as the the previous two uh this is
[35:19] designed for other for other other uh science and applications it's for land surface reflectant to study minerology
[35:27] to study atmospheric dust uh for climate radi forcing and greenhouse gases um but it is presently being explored for water
[35:34] quality so there may be some water quality products coming out in the future future um but again because it's not designed
[35:43] for ocean color it does not have the sensitivity doesn't have the complete attributes that are that are that are um
[35:51] Ben that would benefit for ocean color water quality applications um so now we come to Pace U Pace was
[36:01] launched on the 8th of February of this year to um about uh nearly seven months ago uh here's a picture of the OBS the
[36:11] full observatory in the clean room uh GED space Lun Center where where it was assembled are actually two images so
[36:18] there are three instruments on the pace Miss on the pace Observatory the ocean color instrument which is the primary
[36:24] one the largest one here on top and that's what we'll just talk about them uh primarily at in this training session
[36:31] and and subsequent sessions U there also two multi-angle polarimeters har and these are uh shoe box size instruments U
[36:40] just to give you a sense of scale um we we refer to them as small But Mighty um
[36:46] HARP 2 um was um contributed by the University of Maryland Baltimore County in Maryland um it is designed primarily
[36:55] to retrieve um Advanced cloud properties uh but also capable to retrieve um aerosol properties specs one um
[37:04] contributed by a consorti and from the Netherlands uh it is um it produces Advanced aerosol properties and also um
[37:13] Advanced Cloud properties okay so I won't say much more about about the multiangle polarimeters and I'll focus on the ocean color
[37:21] instrument um which is hyperspectral it spans from the ultraviolet from the order of 315 n n all the way up to 895
[37:30] nanom and um and we also have um uh several discreet shortwave infrared bands U from spending from 940 to 2260
[37:42] NM um and um has and we'll talk about global carbage later um there is a tilt mechanism that tilts the instrument
[37:49] forward and a 20° so um as we come up um from the South Pole as the the pace
[37:58] Observatory orbits from south to North um it um it views aft as it comes um as it images the Southern Hemisphere and
[38:07] then shifts uh to uh forward 20° o over the tropics as it observe as it starts to observe the northern
[38:18] hemisphere the spatial footprint is about 1 kilometer um 1 kilometer 1.1 kilometer okay just to give you a sense
[38:28] of how much uh spectral information is is is present here's a screenshot of the um near infrared end of the spectrum you
[38:37] can see that there's spectral information at every two and a half nanometers so 81.9 84.4 86.9 so the amount of special content is
[38:54] incredible so briefly just some some some um unique aspects of about that pace will contribute removing from multi
[39:02] to hyperspectral Ocean color uh observations no other current or PL hyperspectral radiometer provides one to two day Global coverage that is a key
[39:12] distinction between those other sensors that I that I mentioned earlier the the Mt and um uh Prisma and and
[39:21] map um for atmospheric uh uh to improve the atmospheric correction um for ocean color purposes um as um we
[39:31] have ultraviolet capability um and also those shortwave infrared bands including two at two Micron that's important for
[39:40] tur for turbid Coastal Waters um it it's um it's challenging to apply atmospheric correction without those um sh wve
[39:50] infrared bands um and so those are those are very helpful in improving retrievals in these Most turbid Coast Waters and
[39:58] Inland Waters and then in multi-angle perimetry obviously that that helps with um um with the atmospheric properties and the Tilt is essential um
[40:11] because it increases coverage overall okay here's a a summary chart of the advances that pace provides over
[40:20] over current and and prior um satellite missions for ocean color purposes it's hyperspectral spanning as I mentioned
[40:28] 315 to 895 the spectral resolution is 5 nanometers so that we get information um across the full spectrum from 315 to 895
[40:40] at for five nanometer bands and so and um that is a finer bandwidth than those other um
[40:55] instruments that I mentioned previously also we uh spectrally sample at every one and a qu or every 2 and a half
[41:04] nanometers what that means is that um um the 5 nimer bands are uh we step across the full spectrum um at um at one and a
[41:15] quarter or every 2 and a half manometers um so we'll have a band at 3 3 380 38 2.5 385 387.4 NM that would be
[41:30] the the band Center um this gives us 184 total ocean color bands so which is incredible and unprecedented um the
[41:41] other amazing um aspect of the ocean color instrument is the incredible sensitivity has a very high signal to
[41:48] noise ratio this is really important because if you recall that image where we we were talking about those that
[41:54] sunlight coming into the ocean and then coming back out only a small portion of the signal sunlight coming in through the
[42:03] atmosphere into the ocean back out of the at back out of the ocean through the atmosphere to the satellite sensor is
[42:09] actually the ocean signal and it very it ranges from about 3% to 10% and so the satellite this the ocean signal is very
[42:18] small compared to the atmospheric signal and in order to tease apart the ocean signal we need very high sensitivity or
[42:26] in this in we in here we Define it as signal to noise ratio we need a very
[42:31] high signal and so here's just the the the actual um information as to the SNR of the ocean color instrument across the
[42:41] Spectrum so we're mostly interested in in the in the you know 350 to 700 nanometer range for ocean color as you
[42:50] can see the um the the wider bands at 10 to 15 nanometers we have SNR from from
[42:57] 1,400 to over 3,000 which is which is unprecedented um for for ocean color um we also have high sensitivity
[43:07] in the ultraviolet which is which makes those ultraviolet bands useful um and also the nine shortwave infrared bands
[43:15] you can see them here uh as well and three of them being um um sensitive enough for use for ocean color
[43:23] applications uh for atmosphere correction purposes they're nearly da daily Global coverage and you'll see examples of that and the polarimeters
[43:31] will also help with atmospheric correction if we have better information about the airsa uh properties um and
[43:39] even Cloud properties we can we can do a better job at the atmosphere correction improving the quality of the ocean color
[43:45] data limitations the spal resolution is 1.1 kilometer um we know that the water quality Community um especially for
[43:54] Inland Waters uh would benefit from much higher you know spatial resolution unfortunately uh well I should say the
[44:03] the the goal of the pace mission was to accomplish Global uh um Global imagery and um uh climate quality data and
[44:16] climate change studies hence trade-offs have to be made and and spatial resolution was was one that that that um
[44:25] was kept at one .1 kilom kilom challenges um um there is um a lack of verified hyperspectral
[44:35] algorithms um so that's one thing that we we need more of um they're becoming more available but uh something to keep
[44:42] in mind um we also need more comprehensive hyperspectral field measurements um that helps us develop new algorithms as well as help us
[44:51] validate the the data coming from the pace uh mission okay so here an example that we are
[45:00] comparing comparing um um remote sensing reflectance data at 445 neter or a blue band from veers um
[45:10] with Pesci and you can see that generally these agree they they agree well and um but the other thing you can
[45:20] see is that the overall coverage there's more of the uh ocean surface that's filled in with oci than for reer
[45:27] that is because of the Tilt that's why that tilt is so important you see these these ellipsoids here um at each orbit
[45:35] you see these these ellipsoids and that is Sun that is sunglint uh impacted uh ocean that have
[45:43] to be masked because we can't retrieve a high quality ocean color data from those areas and here we we don't see that we
[45:51] do have we do lose a little bit because of the Tilt right along the Equator or off the equator
[45:58] um but something to to keep in mind so the Tilt makes a huge benefit um any an example of the spectrum plot
[46:08] of peso those are all the little diamonds and then the circles represent what the viers values are uh for these
[46:16] five wavelengths that viers um has collects information on and you can see they're right on top of each other that
[46:23] demonstrate that right out of the box uh pace pce the P oci yields data comparable to uh emission that's been in
[46:32] orbit for for many years which is very good um here's an example of chlorophyll a um they look quite
[46:42] similar um again you know obviously you can see the difference in in coverage much more coverage from oci and on
[46:50] average um it yields 31% greater coverage than beers uh each day and 58% more Co spatial coverage than
[47:03] motron okay now we'll go into a description of some of the data products um so we'll have the top of the
[47:10] atmosphere Radiance um atmospheric contribution Oceanic contribution to these things including the water leing Radiance which are the
[47:17] fundamental uh uh products that are used to drive water quality and other ocean color color products um um we have a suite of
[47:28] atmospheric productss I won't go into details for for the sake of time but aerosol properties Cloud properties um also um with the
[47:38] multi-angle perimeters we'll retrieve some some ocean properties ocean reflectant White Cap fraction angular light distributions and oil slick
[47:47] detection so there's some some some um data products that could be of use to the water quality Community
[47:54] here um now the ocean color products include things like light penetration um light transmission absorption properties scattering
[48:03] properties photosynthetically available radiation this is the light that phytoplankton use to perform photosynthesis so this is this is a very
[48:11] fundamental um piece of uh fundamental observation also um with with past we'll have products on photosynthetic pigments
[48:21] floresent and Plank and commed composition particulate um organic carbon suspended matter um such as uh suspended sediments um and also theatric
[48:33] classifications is planned um and there are some terrestrial products as well um one of the key advances with
[48:44] with Pace's um hyperspectral capabilities is to be able to um quantify phop Comm composition so if we
[48:53] start if we show here an image of chlorop a concentrations we can see uh the east coast of the US and the and
[48:59] part of the Gul Coast you can see that chlorophyll concentrations are generally higher along the the coastline and in
[49:05] the coastal ocean here now if we can we can use the information from oci to derive information of the community
[49:14] composition in this case we're looking at three groups of F Well three groups of phytoplankton um using this U Moana
[49:22] algorithm developed by pris laying it all um in this image here we we see the cynobacteria procor cacus concentrations
[49:33] here these are abundances in cells per milliliter and cells per thimble full of of of seawater and um in this image this gives
[49:43] us another a concentration of another group of phytoplank um another C of bacteria called cacus and in this image here on the top
[49:52] left are the concentrations of Pico carots these are very small cells um um and but they are um these are not cob
[50:05] bacteria these are um classified as eukaryotic phytoplancton include very small flatulates and Dooms among other among others what we'll show here is that that
[50:19] the information of promotion color even from chlorophyll gives us some insight as to the the the physical circulation
[50:25] of of the ocean here you can see the the Gulf Stream front here these filaments um um these outflows of of of
[50:35] uh from estuaries and and rivers here and out here and throughout the Southeastern us as examples so um some information on um
[50:47] data processing and release so we um the the pace project uh began releasing data officially on on the 11th of April of
[50:57] this year um this included level one radiometry data from all three instruments um as well as a Heritage
[51:04] sweet of ocean color products like chlorop Fila remote sensing reflectances um um we performed um a the first
[51:13] reprocessing which we've identified as um version two or V2 this is completed uh not long ago in early
[51:22] July in which the um all the instruments were calibrated with the onboard calibration um uh Hardware that we have
[51:31] on the instruments um we also released the second wave of ocean color instrument products all our test products uh these
[51:39] include terrestrial and Aquatic surface reflectant at every 10 ners uh terrestrial vegetation disase and some Cloud properties um and you can access
[51:50] uh information about the reprocessing uh following this URL we are planning a uh second reprocessing which we're going to
[51:58] tag the3 version three in the coming months probably in the next three months and this will include the the
[52:06] first vicarious calibration basically what we're going to do is take data from this um inwater uh profiling uh um buoy that
[52:18] measures measures radiometry um as and and um as as as ground truth data or SE truth data and
[52:27] adjust the gains on the ocean color instrument um to match um to match that information from this hyper naav system
[52:37] um and um that will improve the ocean color data quality even further we also expect to Rel release a
[52:46] a new wave of of products um um with this uh second reprocessing these will be test products and you'll learn a
[52:54] little bit more about that later um additional products will be released um but we don't have any we may not have
[53:02] predefined deadlines for those so a little bit more about algorithms um phylane K composition algorithms include the Moana that that we mentioned earlier
[53:11] here's an image off of South Africa um showing the different CCO caucus and the PCO carots that I mentioned earlier
[53:19] there are two other algorithms that are being that are uh will be implemented shortly that uh provide insight into uh
[53:26] Comm composition by one by crol that relies on car and pigments and absorption and one and one by Chast all
[53:34] that quantifies datom carbon again datom are excellent fish food so that that's that that's a very important product for
[53:43] um for Fisheries among other things um and this this Al this algorithm relates absorption and phytol plantant imaging
[53:51] um um to derive at diatom carbon right so just briefly about data levels um the module two of this training
[54:01] series will talk about this in more detail but there are a range of uh data levels available level 1A is is raw
[54:10] instrument data generally um most users do not work with level 1 a um level 1B would be the sort of the lowest level
[54:19] that people would work with these are calibrated and geolocated instrument data level 1 C just basically Reg all
[54:26] the instruments the three instruments on pce to a common grid if you're just working with the ocean color instrument
[54:32] you you need not worry about level 1 C Level Two is probably what the um or level two and level three are the
[54:38] primary um data levels that most users will work with level two are the derived science data products remote sensing
[54:46] reflectant chlorop Fila and so forth level three are basically level two products that are bin spatial temporarily so um so we we will take the
[54:57] 1 kilm data and composit it to 4 kilometers um we also B it temporally so we'll have in addition to having daily
[55:05] level three will also have 8 day and monthly level three data and then level four products are um
[55:14] based on level three inputs and we could also bring in Model Model output into the ding these level four products um
[55:21] net primary production is an example of a level four product and there's also also different maturity levels from
[55:27] standard like the the Heritage algorithms that are that that have been available such as um pfet and remot and
[55:36] reflectant um provisional ones that have been reviewed but not not not formally validated or verified test um products
[55:46] which are um just being have not yet been reviewed so there could be high uncertainties and diagnostic are just
[55:53] ones that are just taking a we taking a look at um and exploring but not intended for for for
[56:01] for uh for science or or for usage I refer you to the data products availability table there's a QR code
[56:10] here and a URL this gives you insight as to what's currently available what's coming soon what we looking at
[56:17] implementing and evaluating or whether we don't have a plan for it yet but we're interested in we're interested in
[56:24] having that data product the the the table the this table runs for many many pages so I will only show
[56:32] you the very top of it but I refer you to to check it out um online on your on
[56:39] your own um and here we also um are producing um Suites of products because the pace oci data is quite voluminous in
[56:53] terms of storage on on people's hard drives um instead of um instead of making you know single large files with
[57:04] all the ocean color data products together which would be very very um very extreme and would take a long time
[57:12] to download we we subset them into different product Suites so that people can choose which are most uh useful to
[57:20] them um and this include the apparent Optical properties which are primarily the remote sensing reflectances this is
[57:26] for 184 bands and there's also discussions on having a subset of these um it would be multispectral but but at
[57:34] least it might be for those people that are interested in a smaller subset and don't want to work with
[57:39] 184 uh spectral piece of information that'll be a different suite at some point this also includes uh some
[57:48] aerosol um as well as a parent visible wavelength this is basically what color is the ocean it gives you a single
[57:55] wavelength value for representing the color of the ocean so if it's in the 400s it's blue if it's in the uh 500 to
[58:04] if it's in the upper 500 to 600 it's more brownish reddish color um the ones that are crossed out
[58:11] are ones that are not yet available but we do expect them to become available in the future but they will be part of this
[58:17] product product Suite um we also have an inherent Optical property Suite these are the absorption and scattering properties
[58:24] that um were mentioned earlier earlier um as well as the diffuse attenuation coefficient so again some of these are
[58:30] available now some of these will become available in the future we have a bio biochemistry Suite which includes
[58:36] perilla particular again carbon concentration phytoplancton and some uncertainties of these products um and and then there's also
[58:45] the the par Suite the photosynthetically available radiations and these are both daily and instantaneous some are above
[58:51] the ocean surface the zero plus the 0 minus or just below the Sur C Surface and um and there's both s scaler and
[59:01] planer uh versions of these products um again the data table can be reached with this QR code or this um and
[59:11] the algorithms themselves there's only a few um algorithm descriptions available at this point but you can access them
[59:17] through this URL and you can keep checking back to find new ones as they become become available and there's more to come and
[59:25] here some insight into the water quality Suite that we are planning uh this will include water Clarity such as the fuse
[59:33] attenuation attenuation coefficient um for filet turbidity would be based on suspended parate matter product color dissol organic matter
[59:42] absorption as well um and the algorithms that we are um concurrently uh exploring include the aquaverse algorithm um by
[59:53] Neema poon at all um these include chlorop Fila seom absorption total suspended matter um as well as that
[1:00:02] ficoin pigment that I mentioned earlier that's present in those freshwater cyanobacteria um that cause those harmful augle booms in in Lake Erie um
[1:00:11] for example there also these uh cyan equivalent products if you're familiar with the cyan project and the products
[1:00:17] that come out from them we are we are working on um implementing um these products uh for for PCI including a
[1:00:26] surface reflectance cob bacteria index um and the cob bacteria apparent visible wavelength and we are looking also
[1:00:34] looking forward to harmful a a other harmful agle broom products as well but those are TBD currently there are number of data
[1:00:42] issues under investigation um um we have a a website that that describes this in detail um U
[1:00:51] but there are things related to geolocation what we're working on radiometric performance um on or We are
[1:00:56] continuing improvements on on on orbit calibration there are also portions of the spectrum that we recommend avoiding
[1:01:04] for now um these are portions of the spectrum that are influenced by um the some instrument aspects and also
[1:01:12] atmospheric characteristics and and just to give you and here's are the ones for the ocean color instruments so the red
[1:01:17] are the ones uh to avoid um uh the the gray are they use with caution um and and and the reason you
[1:01:27] know some of these are have to do with oxygen and water vapor absorption um where we see these dips in the reference
[1:01:34] Spectra Spectra um solar reference atmospheric transmittance Spectrum here um other issues pertain to the to the um aerosol Optical property Suite in
[1:01:54] particular um and some of it has to do with not having the vicarious calibration applied that will be
[1:02:00] resolved in the next couple months months um we've performed very limited uh validation of remote sensing Reflections
[1:02:08] to date um the the the there was a there was an initial one performed recently and the information are on the on the
[1:02:16] pace website so please take a look at that um to to get the first uh first hard hard uh analysis results for
[1:02:27] that um we see some challenge some some problems with the performance and U and remote sensor Reflections below 400 400
[1:02:36] nanometers uh we need to spend quite a bit more time reviewing that and improving that we expect that the viar
[1:02:42] celebration will improve this but some of this is related to um to um atmospheric gas gases absorbing um again we're refining some
[1:02:52] of the the the corrections for absorbing gases particularly for oxygen and water vapor in these portions of the
[1:02:59] spectrum um the ocean color instrument has um two detectors that overlap and where these overlap um we have light uh
[1:03:09] coming going to both uh detectors and and we're seeing some artifacts there so definitely avoid this 590 to 610 neter
[1:03:19] region region um um also we're processing um to to increase spatial coverage globally daily to beyond what we're uh accustomed to to
[1:03:33] a higher view angles and um and so there are some um artifacts at those very high few view angles so for each orbit of
[1:03:42] pace data the very extremes um besides east to west um are are are we um offer caution in using that and um and just to
[1:03:56] point out clal for us line height will be included in the future in this product weite there also some in some um
[1:04:04] uh product issues um on the um IOP Suite um there's some values that failures that have been noted in the in
[1:04:13] very productive Nearshore Waters those are being uh explored largely having to do largely with atmosphere correction among other
[1:04:22] things um obviously the you know all the products are derived from the remote sens and reflectors so if the remote
[1:04:29] sens and reflectant utilize all these products utilize remote s reflectance so they're impacted by those data qualities from the
[1:04:37] previous previous slide um and then par no issues and Cloud mask is just a minor thing that's
[1:04:43] being being resolved here's some um um some resources that we uh um point you to for further information on um you have
[1:04:54] technical memo lots of information and background descriptions of the pace Mission um and here's the final uh
[1:05:04] another slide on accessing the data with a QR code there are three options that'll be described more in the
[1:05:10] subsequent subsequent um uh training event um and um to learn more about the P Mission or to join the community of
[1:05:23] practice or um please scan QR codes and look look into that um and I look forward to um answering your questions
[1:05:33] um um thank you thank you so much Dr Mano for the excellent introduction to the PACE Mission uh its sensors data products and
[1:05:49] applications with that uh we will summarize today's session Dr manino described base oci HARP 2 and specs one uh they spectral special and
[1:06:03] temporal temporal resolutions uh base data products are available for oceans and estuaries also for atmosphere and land specifically oci
[1:06:13] observations are hyperspectral from 315 to 895 nanometer with spectral sampling of 2.5 nanometer they will enable separation of
[1:06:25] atic constituents and phytoplankton Community Community composition and this is the only hyperspectral observation Mission with near daily Global
[1:06:35] coverage uh HARP 2 and specs one will Aid in atmospheric correction uh there's some um things to note about that pace
[1:06:44] has relatively low special resolution of 1 kilometer and so there is there are constraints on using observations for
[1:06:51] Inland and Nearshore Waters uh the hyperspec algorithms they need verification and require hyperspectral field measurements uh overview of available
[1:07:03] paas data products and issues in level two data products that Dr manino described specifically they're not completely calibrated and there's
[1:07:12] limited validation because it's relatively a new Mission so these things are going on and then there's ongoing
[1:07:18] refinements to the atmospheric correction as well so our next session is going to be about overview access and Analysis of
[1:07:28] Base ocean color data products we will also have a short demonstration of NASA's open source Seda software for
[1:07:37] anal analysis and visualization of selected oci data products so that's going to be next week uh again as I mentioned earlier
[1:07:48] there will be one homework that will be posted on 9th of October the last day of the training it will be accessible
[1:07:55] through through our web page and uh the answers must be submitted by Google forms it will be due on uh 24th of
[1:08:03] October um and as I mentioned earlier again uh you will get a uh certificate of completion after about two months
[1:08:12] after the completion of the course if you attend all three live webinars and complete the homework assignment by the
[1:08:21] deadline uh this is the contact information for Dr Manu if you have more questions and of course you can always
[1:08:28] contact us at rset this is our website for information our social media um links are given here and these are our
[1:08:37] live Sciences capacity building sister programs if you're interested in checking them out so with that I want to
[1:08:45] thank you for attending today's session also want to uh thank uh Dr Mano once again for his excellent presentation and
[1:08:53] we will now go to question and answers thank you thank you Dr mono and looks like we
[1:09:05] have quite a few questions and uh many of them have already been addressed so what um we're going to do is just go
[1:09:14] through questions as many as uh we can go through in the given time so we'll start with uh question one and by the
[1:09:22] way we have um entire P team here um Dr Mano is here Dr Moran mechan and Dr Anna
[1:09:30] she's here as well so uh question one uh is field data collected um to verify the remote sensing
[1:09:39] data and you can unmute and answer the question B Team um yes the um NASA has funded a
[1:09:48] pace validation science team that is um out at se uh at present and in the future to collect um to collect field
[1:09:58] observations to validate the various uh Pace data products and actually this month um um NASA is completing uh an
[1:10:07] Airborne and Etsy uh campaign called pce packs out off the coast of California to validate the atmospheric products using
[1:10:17] the Airborne um the airplane based instrumentation uh flying underneath pace and also um uh a ship a Noah ship
[1:10:27] that we are using to collect observations of uh of the water as well as the atmosphere great thank you and question
[1:10:37] two is how do you distinguish Aerosoles from from Ali uh yes so I I I answered this
[1:10:44] question here myself um uh so the um because the ocean or water in general is very dark in the infrared and um because
[1:10:55] of the strong absorption by water in the infrared um we can use um that dark background um um from the pace
[1:11:06] observations of the earth to uh uh measure and quantify aerosol properties uh in the infrared um because the ocean
[1:11:15] itself is essentially black or very very dark um Things become more challenging in the case of absorbing aerosols um
[1:11:24] these are things that are um products of fire or combustion such as you know burning of gasoline or oil uh or coal U
[1:11:35] that produce soot um they're very absorbing and then there's also Brown carbon which is sort of a a range of
[1:11:40] different different sources um including um um you know um land processes but um those those airs are absorbing so they
[1:11:51] that means um they they absorb in the UV and lower end of the blue BL spectrum and those are um so they can compound um
[1:12:00] retrievals of ocean color properties and and so we generally Mass those areas but because of the um Pace capabilities we
[1:12:08] do expect to be able to better quantify the um the those aerosol those absorbing aerosols and then be able to
[1:12:17] separate out the um the um ocean color and and phytoplankton signal from that um but that is something that is uh in
[1:12:25] development and not not currently available um at present we can only just designate that there are absorbing
[1:12:31] aerosols present which are very common in um um urb uh Coastal urban areas um throughout throughout the
[1:12:41] Earth thank you question three is if all these contribution contributors to Ocean color are present in a given location
[1:12:50] can Pace detect several or could a few potentially mask others for example a phytoplankton Bloom happening in really
[1:12:59] turbit Coastal water with a lot of Dome and sediment would Pace be able to distinguish all those particles oh
[1:13:06] that's an excellent question um that is something that's a subject of a great deal of research um and um part of the
[1:13:16] reason for the the capabilities that were built into the pace ocean color instrument the ultraviolet the high
[1:13:23] hyperspectral the the um hyperspectral across the UV visible and infrared spectrum is to help us better distinguish these various consents that
[1:13:33] is the actual um one of the primary objectives and so um while the the data quality will not likely be as good as in
[1:13:42] blue ocean water for detecting and quantifying chlorophile for example um we do expect to be able to
[1:13:51] retrieve um um chlorophyll a um or you know measure a phytoplankton in turbid waters um in fact we we
[1:14:01] included um a shortwave infrared bands such as the 1038 neter band um and the 1235 nmet bands in particular so that we
[1:14:12] can um we can uh derive a an aquatic signal at in for turbid Waters very turb Waters in in that spectral range to help
[1:14:22] us better distinguish sediments from um um phop Plankton and um Wonder great uh question four is since aerosols impact climate is there a
[1:14:39] uh particular aerosol or constitute that we want more of or less of and how can Bas help with that yeah so the whether
[1:14:49] we want more of one one aerosol or another is sort of a philosophical question um um what we do as scientists
[1:14:57] within the pace project is to provide the data um and and the scientists will that are using the the pace data um whe
[1:15:06] um will um help it'll help them understand um how different aerosols cool and warm the Earth and what the
[1:15:14] implications are for global warming and climate change in the present and in the future the decision whether to take
[1:15:22] action on you know um and produce see more cooling aerosols or warming aerosols depending your perspective um
[1:15:30] is is a is a this is a policy maker decision and and and and and also for
[1:15:36] our citizens it's not something for the scientist scientist to uh advocate for we just we just study
[1:15:43] and and present the results but um geoengineering is something that is beyond our purview question five is can we use
[1:15:54] deflex to identify phytoplankton functional functional types um yes yes as as indicating the answer here um um we we can use um
[1:16:06] reflectance data um to distinguish phytoplankton um then that's largely because um phytoplank have strong absorption features at different uh
[1:16:18] across the the visible spectrum and that helps us distinguish them from other constituents constituents uh in the water um generally um we see
[1:16:30] strong absorption signals by chlorophylls in the blue and the red end of the spectrum and then there's also
[1:16:36] carotenoids that have strong absorption features in the um in the blue and and green uh portions well blue to low end
[1:16:45] of the green portions of the spectrum and because different fire plants have different pigments we it can help us um
[1:16:52] the hyper spectral data um can help help us us distinguish um um different phytoplankton um for example um there
[1:17:01] are uh the freshwater algae microsyst has these Pico billin prog pigments Picos sinin that absorb strongly in uh
[1:17:11] in the 6 in the 620 640 end of the nanometer end of the spectrum towards the red and these are you you fairly
[1:17:19] unique to those types of algae so that'll help help uh scientists distinguish those for from diom in in
[1:17:26] freshwater systems um similarly um there's some unique pigments um in cob bacteria in the ocean like CCO caucus
[1:17:34] they have also have ficoin but they're different kind of ficoin pigments and they tend to absorb sort of in the um
[1:17:42] mid-range of the visible spectrum and and so that that's those are the approaches that are are being
[1:17:48] implemented and such as in the Moana algorithm or the um um the algorithm um by uh Kramer at all that that is being
[1:17:59] implemented currently uh question six is how does the presence of clouds affect images gathered by Pace yes so for ocean color we basically
[1:18:13] Mass clouds um we're we're um not able to see through clouds to actually uh retrieve ocean color properties uh uh
[1:18:24] there are some Studies by by colleagues actually at our institution at GD space flight center who are been doing some
[1:18:30] work to see through the clouds um and so those are those are are promising um uh but uh um we are um the pro the pace
[1:18:42] project is not producing ocean color products um through clouds at present question seven is are hio Prisma
[1:18:53] and map and emit data are freely available yes and one of my uh colleagues um has provided some details
[1:19:01] here as to where you can find um um the the these data um hio from NASA and then
[1:19:09] the other um and from nas anyway they're they're listed there in the in the qu in the Q&A uh document um exactly where you
[1:19:17] can find them thank you for that information Morgan and question eight is can lens of surface reflectant be used to monitor
[1:19:26] fresh water quality um yes and it and it and it is being used to study um water quality in
[1:19:36] fresh waters um oh I'm sorry yes so um yes but this is in in the preliminary stages um we um expect um we are in the
[1:19:50] process of implementing some of the cyan products um which are um um sanza is a program that uses the uh European Eli
[1:20:00] sensors to produce water quality products um in um in Inland Waters um um they don't they use something similar to
[1:20:11] land surface reflectant um but not exactly um however um um we we um the face project will develop um or is
[1:20:21] developing cyan like products for distribution um in the near term and um you know the but as as I answered there
[1:20:31] we um we have not yet validated any land surface reflectance products that is in the works and we hope to have some
[1:20:38] results in the coming months um and then for the water quality part that will be that's a longer term uh project but but
[1:20:46] we hopefully uh the cific community will provide some some uh measurements to help us um evaluate the the the quality
[1:20:55] of that product for water quality in freshwaters oh so let me expand on this um there is active work by Pace
[1:21:06] validation science team members in great in the Great Lakes so there are two projects funded um and so you know for
[1:21:13] the Great Lakes which is a fresh which are freshwater bodies uh there is active work to actually uh but they're not
[1:21:22] um it's unlikely that we would use land surface reflectant for the Great Lakes we would just use our standard ocean
[1:21:28] color products but um just trying to give you a complete picture of what's what's happening um from the pace
[1:21:36] project and um uh Pace science teams wonderful so next question is does anyone have an idea about phytoplankton
[1:21:46] Bloom initiation termination in Peak have you ever detected Bloom initiation termination or Peak using p python met yes so obviously study you know phop
[1:21:58] Plankton have been studied for for well over well over a century and so um both in the lab and in and in and in the
[1:22:06] field um and and so these things you know for um lab field observations if you you monitor a population of phytoplankton
[1:22:18] over you know a period of days uh hours and days you can clearly detect these these processes of initiation
[1:22:26] termination and Peak uh or you know what we call log growth um stationary phase where the growth is balanced and so
[1:22:34] there's no net change in in populations and then cesson when they essentially uh uh be begin to begin to die and
[1:22:42] Decay um um and so um in terms of you know remote sensing uh that that you know that has been uh um uh has been uh
[1:22:54] detected and and there are examples of for example when you've had a volcanic eruption and and that seeds the ocean
[1:23:02] with with nutrients that Spurs uh uh initiation of phytoplancton blooms in those Waters that are seated by the uh
[1:23:12] um the you know the dust that falls out of the volcanoes um and so that's just one example but there are many others in
[1:23:20] the literature um regarding the the python arm mat um you know as I answered those are just
[1:23:27] those are software tools um there um so but you what you need is the algorithms you need the the code coded algorithms
[1:23:36] and then you can apply those software uh programming tools um with the past data in order to um um study you know fop
[1:23:47] Plank and Bloom Evolution so question 10 is can we access uh paste data in Google Earth engine um no um um we are not a past dat
[1:24:02] is not currently in the Google Earth engine catalog um modus Aqua can be added according to the
[1:24:10] answer here [Music] [Music] um um but you can want me to say something this Antonio go ahead yes um
[1:24:20] yeah right now it's not in the Google Earth engine data catalog but it's it's possible for it to be added because
[1:24:26] NASA's modus Aqua data was added but that's a decision made by Google we don't we don't have anything to do with
[1:24:32] that um and so users can request to add remote sensing data sets and I added a link there um so if enough people
[1:24:41] request it maybe Google will decide but um yeah Google makes that decision or you know Google Earth engine we
[1:24:48] don't thank you Dr wendle yes thanks for the information and question 11 is could uh Pace be capable of detecting
[1:24:59] measuring and determining some ecologic communities as water lily blooms mro Island Island Evolution yes it is possible uh I'm not
[1:25:08] familiar with how extensive water lily blooms are um but um Pace spatial resol PES oci spatial resolution is on the
[1:25:17] order of 1.2 kilom by 1.2 kilm therefore if the waterly blooms are about that size or smaller then
[1:25:25] then PCI would not be a useful uh useful source of satellite data to study them mangr Island are
[1:25:34] obviously larger and so um pace could be brought to bear for looking at changes in Mangrove Islands um size and and um
[1:25:45] size and and um I guess the um changes in the vegetation indices um uh at for Chang that are greater than U one
[1:25:56] kilometer in in size in dimension next question is how are hyperspectral algorithms used to better inform Pace I'm not sure exactly what
[1:26:09] the question means but sure um yeah so um so so I guess I I can answer in one way in that um we do
[1:26:21] expect to to um have um better quality products um using hyperspectral algorithms um a prime example would be distinguishing
[1:26:33] different different phytoplankton communities um quantifying you know the proportion of diom and dulat and and cob bacteria present in in
[1:26:44] a in in a water parcel um so that's one area um I mentioned earlier how hypos spectral
[1:26:52] algorithms um can help us um or using hyperspectral data can help us better distinguish the different uh
[1:27:00] aquatic constituents or help us distinguish aquatic constituents from atmospheric constituents such as aerosols so um yes great and yeah it would be informing
[1:27:12] the scientific Community or the pace project but not necessarily Pace itself is just the satellite Mission obviously so question 14 is how can we
[1:27:21] access the spectral information from BAS for example if we wanted to download a data frame which included a Time series
[1:27:30] and the value of spectral irans measured for every wavelength for each time St uh for one geographic region uh how could I
[1:27:40] do that yeah so so that's Yeah Anna would you answer that did you answer this already or did
[1:27:48] someone else yeah I can answer yes um so we will have python code uh as in Jupiter notebooks in part three of this
[1:27:58] training on October 9th I believe so we'll provide python code on how to um download access and and open pce files
[1:28:09] um and we'll even have an example of of how to do a Time series analysis um for the question of
[1:28:16] spectroid Radiance I I put a link to the data products table um we have par which is photosynthetic available radiation
[1:28:24] data um which is similar to spectroid Radiance so you can easily pull that and do a Time series
[1:28:32] um uh using par data you can also pull paste data into cdas to visualize the data if you're familiar using the cdas
[1:28:40] software but um yeah stay tuned to part three because hopefully some of this python code can be helpful um to do to
[1:28:47] do do this that's great uh yeah great so we look forward to the rest of the sessions
[1:28:54] also to learn more and question 15 is how are Inland Waters masked in base um products uh what water mask or what
[1:29:06] is used for determination of Inland Waters yes so um as I'm so um you the the pace project does produce data
[1:29:19] products um for Inland Waters um so you can if you you know go into world view NASA worldview or the Earth data and you
[1:29:30] um uh uh obtain look at an image that that includes Inland Waters that are large enough for oci to to to measure
[1:29:40] then you'll see ocean color like chlorop Fila for example um as a in with respect to masking I I something we would have to
[1:29:49] research exactly if there's any masking uh done um least for uh uh water quality ocean color type of products um I don't know
[1:30:00] if the question is referring to terrestrial so I won't go further unless someone uh follows up on
[1:30:06] that um as I mentioned earlier we are working on implementing cyan like products uh with Pesci data and and
[1:30:15] those are um more those are algorithms are more specific and uh for Inland Waters um yeah so um yeah are we what we're going
[1:30:29] to do is address next two questions because we're almost at the end of the today's session but and then remaining
[1:30:37] questions we will address um and then post on our website but let let's go through next two questions which are can
[1:30:44] you better explain the Tilt and sunglint uh Downs for water quality uh retrievals and specifically for Pace
[1:30:54] yes so um so sunglint um affects um our retrievals of ocean color properties water quality um and so we we want to
[1:31:05] avoid sunglint if possible for our our our standard or typical ocean uh color products and so um a precursor sensor
[1:31:16] called sea whs back in the late 90s and early 2000s had a tilt mechanism but the more recent uh uh missions modus on like
[1:31:25] the modus instruments or and the beers instruments had no tilt and so they were subject to a high amount of sunglint and
[1:31:31] so if you look at a daily coverage from any for reers or Motas you see a lot of
[1:31:36] areas are masked out because of sunglint so for for Pace we and the ocean color instrument in particular we uh
[1:31:43] implemented a tilt mechanism and so the uh the Tilt mechanism tilts oci in the AF direction as it comes over the South
[1:31:53] Pole over the Southern Hemisphere and then as it as it as it um orbits flies over the tropics it it shifts to tilting
[1:32:02] in the forward Direction so that um in in either in for for each hemisphere it basically uh minimizes and avoids much
[1:32:10] of the sunlin so that over the course over the course of a day we accumulate much more of the global ocean um ocean
[1:32:20] color coverage than we would without the tilt and the next SEC next uh question is um could you please elaborate further on
[1:32:32] the Tilt feature does it imply that the scenes captured are not orthographic images take it later yeah that's correct
[1:32:41] the the PCI images are not Nat viewing they are um uh uh collected um at 20° tilt in the um after forward Direction
[1:32:54] and um however the multi-angle polarimeters they they view the Earth at different many different angles one of
[1:33:01] those is native viewing so if you're interested in Native viewing you might consider looking at the multi-angle
[1:33:06] polarimeters the specs one and the HARP 2 2 Data great um we have several questions um that we want to go through but we're
[1:33:17] coming to the end of uh today's alloted time so what we will do uh the help of
[1:33:24] pay team they will all be uh answered and we'll post them on our website in about a week or so um so we really want
[1:33:33] to thank uh Dr manino for his presentation his time and explaining all the questions answering all the
[1:33:40] questions uh uh that's very helpful also want to thank the uh Pace team present today uh doctors uh Morgan mchan and a
[1:33:49] wind and Karina poin uh our next uh speak speaker is Dr Morgan mchan and then in the last session we'll have
[1:33:58] drors Anna windel and Karina Paulin talking about this um data access in so next two sessions we focus more on data
[1:34:07] products and how to access them and analyze them so we uh thank you for joining today's session and we hope to
[1:34:13] see you in the next session next Wednesday on 2nd October and that last one on 9th October um and again we'll
[1:34:21] get to all the questions that we've received and post them on our website so thanks again Dr Mano for today's
[1:34:29] presentation thank you Amita and thank you all for joining it's been a pleasure and it's really exciting to see so much
[1:34:34] interest in the pace Mission and look forward to uh morgain and uh Anna's presentations in the next couple weeks
