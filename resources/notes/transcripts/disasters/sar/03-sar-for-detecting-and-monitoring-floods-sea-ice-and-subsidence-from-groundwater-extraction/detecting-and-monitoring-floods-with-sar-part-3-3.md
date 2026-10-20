# Detecting and Monitoring Floods with SAR, Part 3/3

`https://www.youtube.com/watch?v=2CKxV_mTuxk` · id 285 · 2:06:38 · module 55 — SAR for Detecting and Monitoring Floods, Sea Ice, and Subsidence from Groundwater Extraction

[00:02] hello everyone and welcome to the third and last session of our three-part applied remote sensing training SAR for
[00:10] detecting and monitoring floods CIS and subsidence from groundwater extraction my name is Erica podest and I'm a
[00:18] research scientist at NASA jet proportion laboratory as well as an instructor with the aret program I will
[00:26] be hosting today's training today I will be joined by Le guest lecturer Dr France Meyer who is Professor for radar remote
[00:36] sensing at University of Alaska Fairbanks as well as Chief scientist of NASA's Alaska satellite facility distributed active archive
[00:47] center today he will be focusing on detecting and monitoring floods with SAR to begin I'll provide an overview of
[00:59] our training before we begin this session I'll first be providing an overview of our training before we begin
[01:08] this session the objective of this webinar series is for participants to learn how to use SAR to detect and address
[01:19] potential disasters related to sea ice floods and groundwater extraction and these sorts of events can have a large
[01:27] impact on human lives infrastructure rure and the economy so SAR can be critical in informing on the ground
[01:35] efforts on disaster mitigation efforts and resilience by the end of this webinar series participants will be able to
[01:47] detect and monitor CIS to identify potential risks to shipping and Coastal erosion so that was the first session
[01:55] generate subsidence Maps due to groundwater extraction to inform risk and resource s Management that was the second session and then detect and
[02:04] monitor floods in order to more closely monitor increase or decrease of flood waters and better informed Disaster
[02:11] Response and managements and that is today's training here's an outline of the training today is the third and last
[02:21] session of this three-part webinar series all presentation slides recordings and Q&A transcripts will be available on on the training page there
[02:31] will be one homework assignment which will open today Wednesday November 1st and it will remain open until November
[02:40] 17 a certificate of completion will be awarded to those who attend all live sessions and complete the homework
[02:49] assignments before the given due date and finally um before we get started I just wanted to remind everyone
[02:59] one that you have if you have a question to please type it in the questions box and under this platform it is uh located
[03:08] in a different place it's at the bottom right under the three points there's there's a drop- down menu and uh one of
[03:16] those three options in the drop- down menu is questions so please write your questions there and we will address all
[03:24] questions at the end of the webinar um and feel free to uh type in your questions as we go
[03:31] along the uh all the questions will be assembled into a Google doc and that Google doc will then be posted onto the
[03:40] training page with all the answers we're very pleased to have Dr France Meyer as guest lecturer today he
[03:53] is an expert in SAR and has been a major force in global SAR capacity building efforts and in making SAR more usable by
[04:02] the scientific and applications Community there's a reason he's known as the SAR evangelist thank you Dr Meyer for
[04:12] joining us today and for so generously sharing your knowledge and wide experience in the use of SAR for
[04:19] detecting and monitoring floods welcome thank you Erica for a kind introduction so my name is France um I'm a professor at the University of
[04:31] Alaska Fairbanks where I'm specializing on teaching topics of microwave remote sensing I also am the chief scientist of
[04:40] the Alaska satellite facility which is probably one of the data sources that you will be using um when you're working
[04:48] with synthetic aperture radar data sets so I'm giving you today's session three of this um three session training
[04:57] on SAR for detecting and monitoring ing floods CIS and subsidence and uh so my session today will focus on the monitoring of flooding
[05:06] events with SAR the um um the content today uh is intended to introduce you to the properties and the benefits of synthetic
[05:20] aperture radar data sets for flood monitoring but specifically for benefits of some of the more commonly used uh
[05:27] data sets these days which is senel one an ongoing Mission launched by the European Space Agency uh that's
[05:34] currently in orbit and provides regular observations uh for flooding events in an upcoming mission called nysar uh that
[05:42] I'll int introduce that's a collaboration between NASA in the Indian space research organization and will also provide fantastically useful data
[05:50] sets for flood mapping um I hope that you walk away understanding um how different land cover types look in SAR images and how
[05:59] specifically water surfaces look different from most of the other land surfaces and there therefore can be distinguished from these other land
[06:08] surface surface types um and we we will talk about um how to identify Open Water areas using
[06:15] thresholding approaches and I will show you a notebook a Jupiter notebook uh that you can use to uh exercise um
[06:23] thresholds based flood mapping for a sample data set um over the hindukush Himalaya Himalaya um and at the end uh we'll talk about
[06:32] the capabilities of these threshold based algorithms but we also talk about some of the limitations of these
[06:38] techniques um that will help you use the right data set for for your particular flood application so I believe that right now
[06:49] you are you are taking this course at the perfect time it's a really good time to learn about SAR right now and it's
[06:55] specifically because of two fantastically useful sensors synthetic aperture radar data sensors sental one and niser uh so I want to talk to you
[07:04] about their sensor characteristics um and how you can access data sets from these uh two missions which both are
[07:11] very useful for the um application of flood monitoring so SAR has gone undergone a great transformation over the last maybe
[07:22] five to seven years and it is related to the Advent of new sensors that provide free open regularly sampled data sets on
[07:31] a global scale uh you see here an example in this animation that shows you repeated uh images over
[07:39] Bangladesh um in these images you see a variety of different brightness patches and you see that at some point very dark
[07:46] patches show up these are uh surface water extend features we'll talk about in this class while these surface water
[07:54] extent features look very dark in SAR images but the key is that that these modern data sets such as Cal one the
[08:02] upcoming nysa Mission and other many upcoming missions uh in the space of SAR they provide you regular observations
[08:10] every 6 to 12 days over these uh features that are flooding in the landscape uh and the regular
[08:17] observations in the free free and open data set are really key to use SAR data sets uh in operational response and
[08:24] operational flood monitoring monitoring so I want to bring uh Those sensors to you real quick um the first of Those
[08:34] sensors you probably already have heard of and maybe you have used that sensor already in your work it is sener one
[08:41] Sentinel one is was launched in 2014 it's a constellation of two cband radar satellites we'll talk about the
[08:49] different wavelengths and bands of SAR here in a little bit um cental one is um was brought along a pivotal change um in
[08:59] in the use of SAR because it was the first SAR satellite system with an operational operational Mission this means that c one is
[09:07] required to observe every point on Earth um at a 12-day Cadence some places in in Europe at a even higher Cadence um
[09:17] usually six day Cadence so we have regularly reliably observed data sets because it's a synthetic aperture radar
[09:25] one of the benefits of it it is it is cloud-free and weather independent and it images all land masses all Coastal
[09:31] coastal zones and shipping routes every six to 12 Days additionally CER one is also specifically designed for insar while
[09:40] this particular lecture does not utilize the capability of interferometric SAR you heard about insar uh in previous
[09:48] lectures especially the ones that focused on Landslide um displacement from from landslides and key to Center one is that
[09:57] all data sets they observe are freely and openly available this free and open means that you can access
[10:04] the data sets for free um independent of your application uh so you can apply these data sets to any kind of uh
[10:11] application you want so Center one was launched by the European Space Agency as mentioned earlier in in 2014 um starting in
[10:23] 2014 free and open data sets globally acquired it's a constellation of two cband cband sensors you can remember try to remember
[10:32] already cband is a microwave wavelength that is used fairly heavily in Earth observation and it has a wavelength of
[10:40] about 5.6 CM uh senal one is also providing multiple polarizations typically dual pole data in vvvh polarization over land
[10:51] also polarization is something we will uh talk about more uh later in this class the data data sets have a
[10:59] resolution of roughly about 10 m so 5 by 20 M roughly about 10 m scale pixel size
[11:07] and every image has a swath of 250 kilometers so you get very large coverage um with every uh rotation of
[11:16] the satellite around Earth the temporal samplings is six days over Europe and 12 days uh for the rest
[11:24] of the globe uh and it has both Imaging and interferometry capability as mentioned earlier and one of the things you can do is the
[11:31] image that you see in the background here is actually a flood detection image the different shades of blue here show
[11:37] water extent at different time steps and how Cal one can be useful for flood mapping we will discuss in this
[11:46] class this animation shows you how the the constellation of Cal one sensus operates to ensure Global coverage every
[11:55] 12 days so we have two satellites that are offset by about half an orbit uh scanning the planet um completely within
[12:02] 12 12 days um unfortunately one of these two satellites in this constellation specifically Sentinel 1B so the two
[12:11] constellation satellites are called C Sentinel 1 a which was the one one launched in 2014 and Sentinel 1B for the second
[12:18] satellite launched in 2015 Sentinel 1B had a uh failure in December December 2021 and is currently not providing any
[12:28] additional data set um so there's some limitation in coverage at the current point however a replacement satellite called Sentinal 1C
[12:37] is planned to be launched uh sometime in 2024 likely late 2024 or early 2025 if in the full constellation of two
[12:49] satellites um Center one provided uh Global observation with quite high density this plot shows you how many
[12:56] Acquisitions were made per month in 2021 when the full two Satellite constellation was still available uh so
[13:03] you see that there's lots of coverage especially in the higher latitudes uh in many of the tectonic sites um uh and
[13:10] also good coverage for the for the rest of the land masses um so all the blue areas shown here these are the land
[13:18] masses covered by Sentinel one after the failure of Sentinel 1B the coverage decreased to some degree so
[13:27] this is giving you a little bit of an idea this animation what the coverage looks like since then um so there are
[13:34] some areas that have not been covered extensively such as um um um Siberia uh and some places in Africa um over time
[13:45] Issa started adjusting a little bit the acquisition scenario to have more Global coverage available even with only one
[13:52] satellite in in place uh but notes that in 2024 late 2024 we expect that Sentinel 1 C will be launched uh to
[14:02] recover the full cap capability of the Sentinel one constellation so senal one is one of those two data sets um that you will
[14:13] work with extensively I would expect when using SAR for flood monitoring another data set along the similar the
[14:22] similar um properties is the Nissa the NASA ISRO SAR or nysar Mission so this is a collaboration between the US space
[14:33] organization NASA and the Indian space research organization Israel they uh collaborated to build uh this Mission which an artist view you see on this
[14:46] Slide N is going to be exciting it's it's launching in Spring of 2024 we expect the launch to happen probably
[14:53] around April next year it pre brings a few firsts um it's going to be the first spaceborn L and sand uh dual frequency
[15:04] uh radar satellite it will also like Sentinel one provide full Global coverage every 12 days but in contrast to Sentinel one
[15:12] which operated at cband remember cband was about 5.6 centimeters wavelength um nysar would operate at L band which
[15:22] provides at roughly 25 cmers wavelength so it's about five times the wavelength and the longer wavelengths has some
[15:29] benefits um for a number of applications including flood monitoring we'll discuss uh these uh benefits a little bit later
[15:38] uh in this lecture Nisa will provide an enormous amount of data set um or data volume per
[15:46] year nysa is expected to provide 50 pedabytes of data which uh roughly is about maybe 10 times as much as c one uh
[15:55] over its planned Mission lifetime which is three years um we have 150 pedabytes of data that Nissa will
[16:06] bring all data from nysa are also free and open um so again you can access these data sets for free and you can
[16:14] apply these data sets to any application that you care about uh specifically Nissa will provide data uh that feeds into a number of
[16:23] science applications disciplines um the main science disciplines supported by n includes solid earth science this includes things like um studying
[16:32] earthquake Dynamics volcanic Cycles land slides ground subsidence from groundwater extraction and so on it additionally supports cryospheric
[16:43] science this includes the movement of glaciers the movement of and extent of sea ice and uh the movement and extent
[16:51] of ice sheets and then lastly uh the l-band um data set is very useful for ecosystem science
[16:59] science so it's going to provide data sets that can be used to understand Forest biomass and biomass change agriculture extent
[17:06] and agriculture Dynamics as well as Wetland it also will support Wetland monitoring in addition to these science
[17:13] disciplines there are a number of application disciplines such as such as flood monitoring that will be supported
[17:19] by niser quite well so both of these data sets senal one nysar will be available for you for
[17:31] your research through the services of the NASA Alaska satellite facility or the NASA ASF Dak Dak stands for
[17:38] distributed active archive Center so NASA operates many of these data centers um for different disciplines and these
[17:46] data centers house all the NASA owned and nasar related um Earth observation data sets for you ASF is the data center for synthetic
[17:55] aperture radar data it was established in 1991 we were established back in the days U mostly to provide down link from
[18:05] a downlink station from Earth observation satellites but this mission was expanded um a few years later to
[18:12] also include the data archive today ASF is providing access to about 20 pedabytes of SAR data uh
[18:20] through its archive and ASF is unique in the fact that all of our data are located in the Amazon web services cloud
[18:27] and all data are ready for you to use so so none of the data need to be ordered
[18:32] they are all um on life spinning discs um ready for your science usage um ASF provides access to 40 more
[18:42] than 45 years of data sets um these days uh starting in 1978 uh with the cat Mission um it is
[18:50] the current um one of the current archives Global archives for sener one shown here on the left hand side and
[18:57] will be the data center for nysar so all the level zero to level two data sets from nysar will be available through
[19:05] ASF as a side note some of you may be aware aware of another NASA project that's called Opera Opera provides um
[19:13] large scale um level three science products from Sentinal one at nysar um Opera is producing things like surface
[19:20] water extend so it's they provide a product that we'll talk about today a lot they also provide uh Global surface
[19:27] disturbance uh information as well as North America wide um ground displacement these data sets from Opera will also be available um through ASF
[19:39] specifically the displacement data set will be available through ASF I'm I'm not going to give you a
[19:48] grand tour of ASF in this particular lecture but the slidex contains some links um on on on this slide here you
[19:55] see a link to the ASF search interface this is a One-Stop shop for the discovery and the on demand processing
[20:02] and downloading of SAR data sets from missions such as Center one and nysar so all of your Senter one and nysar data
[20:09] sets you'll be able to find through this convenient uh search and Discovery interface I also provided a link to the
[20:17] ASF website uh this gives you more information about the sensors we hold and all the other activities uh that ASF
[20:24] is conducting uh in the field of synthetic aperture radar so please check out these links uh and
[20:31] there's also feedback buttons on this website uh which you can use uh to ask ASF any questions you may
[20:40] have now these both both of these data sets um um are great for surface water mapping and in this next section I I
[20:48] want to talk about why s is really good um for um detecting surface water uh in a
[20:56] a landscape so firstly SAR is really useful for emergency response for some simple re reasons um SAR data sets
[21:05] operates in the so-called microwave Spectrum or the radar spectrum of the electromagnetic um um uh overall the
[21:13] electromagnetic spectrum let me turn on my laser pointer here so we operating in this frequency range uh between about 1
[21:21] cmet wavelength and roughly about a meter wavelength this is where all the microwave data sets sit this is
[21:28] distinctly different from the visual range which is is in the order of a few few microns or a few hundred
[21:37] nanometers um one of the differences between those two Spectra is um that the atmosphere is very transparent uh in the
[21:45] microwave window which allows weather independent observations of planet Earth so for flooding that's particularly important um flooding often happens uh
[21:57] during cloudy conditions when when rainfall is happening and having a a weather independent and Cloud penetrating observation platform uh for
[22:07] OB observing the impacts of severe weather is very useful and radar provides that capability um other benefits we we'll
[22:16] talk about is that SAR is really good for change detection uh this is related to the fact that SAR or radar is an
[22:24] active uh observing instrument so we are actively sending out microwave signals from a satellite um those signals travel
[22:32] to the ground get reflected and come back um to our sensor this makes us independent of sunlight and it provides
[22:40] a very stable observation scenario so if you take it an acquisition today and we take a repeated acquisition 12 days uh
[22:48] later because we are sending the exact same amount of energy from the exact same location uh down to earth we have a
[22:55] very repeatable observation condition which lends itself really well for change change detection another reason why SAR is
[23:04] really useful is because the observation wavelength is quite different from what you're used to from Optical systems or from what you're
[23:14] used to what you're seeing with your eyes this may make s data sets a little bit difficult to interpret at first but
[23:22] it means that you provide complimentary data to Optical senses um so we are providing independent information about
[23:29] the surface we are seeing different things about the plants and the surface structures on on a landscape and so
[23:37] that's really useful combining Optical data with s data sets together in classifications or interpretations can be quite
[23:47] useful this animation here developed by the German Aerospace Center gives you a little bit of an idea of the benefit of
[23:54] the weather Independence uh of these uh s data sets and why it is particularly important for the for understanding
[24:03] hazards related to flooding events so the idea as mentioned earlier is uh during um flooding events usually
[24:13] we have um poor weather conditions we have cloud cover and rainfall uh and Optical data sets won't
[24:20] be able to see the ground from space ground will be obstructed by clouds uh SAR satellites such as
[24:28] terrasar senal one nysar however have the capability to penetrate through these clouds you can see that here in a
[24:34] second this animation so we can see through this cloud cover this is the fres benefit for flood
[24:42] flood monitoring but then when we hit water surfaces we we also see that these water surfaces look quite different than the
[24:48] landscape you see water is very um dark in these images much darker than the Le rest of the landscape and we will talk
[24:57] about how you then can use the unique characteristics of water to automatically extract water from those SAR images and then overlap these or
[25:07] overlay these water information with other information such as um Road information or where the buildings are located uh to understand impacts of
[25:16] flooding events so these modern SAR sensors today provide these data sets regularly this is again an example of from the
[25:27] hukushima you see a Time series of every 12 days observations uh for this area of interest and again you see the
[25:35] development of surface water and you can um even visually already see how surface water expanded and changed throughout
[25:43] the flood season in this area this is Bangladesh and the impacts you're seeing here are related to the annual Monsoon
[25:51] flooding events that typically start in may to June of the year and end in September October here another example of the benefits of
[26:02] SAR for water surface mapping this is a um side-by-side comparison of an optical sign time series in this case over the
[26:11] Brazilian Rainforest uh you see in the optical data set that heavy cloud cover on many days obstructs um the uh sort of
[26:20] the the water surface from view while the um s time series on the left uh gives you consist access to the
[26:29] surfaces um underneath the clouds and you can see here hopefully uh in some areas how water surfaces are expanding
[26:37] if you see my laser pointer here you see expanding water surfaces that happen as rainfalls uh in this
[26:50] region so um this sort of shows you a little bit the benefit of SAR data sets uh for you know uh for monitoring
[26:59] hazards uh related to rainfall and flooding uh I want to briefly talk about the different flavors of radar uh that
[27:06] are available for your use uh so similarly to the visual range in the microwave Spectrum we tend to
[27:15] split up the Spectrum into different subbands in the visual range you would call these colors uh you know blue um
[27:23] red green are all different parts of the visual uh range electromag electromagnetic electromagnetic spectrum in the microwave we use
[27:33] somewhat a bit more complicated nomenclature for these different subbands we use letters such as x c s l
[27:41] and P to distinguish different subbands of the microwave Spectrum from each other um so xand is the shortest of
[27:52] these wavelength that are typically used for Earth observation these expand satellites have wavelengths of about 3.5 or so
[27:59] [Music] [Music] cenm they provide very high resolution imaging and they mostly used for understanding things like Urban
[28:08] developments uh and are also useful for very small scale uh features and changes on lands on a land surface um for um the
[28:18] purpose of blood monitoring and uh and sort of also analysis of ecosystems um expand sensors have very
[28:28] little penetration into vegetation and so what this means for you if you're interested on monitoring flooding it means that these xand data
[28:37] sets cannot see water under vegetation so this is one limitation that's very similar to Optical data um
[28:45] if you have trees obstructing the surface you won't be able to map water under those trees using these expand
[28:54] data data sets go going to uh longer and longer wavelengths the next uh wavelength uh subgroup is cand Radars cand Radars
[29:07] operate in the order of about five and a half centimeters wavelength um they are sort of the
[29:12] Workhorse of SAR many of the satellites that are in space right now operate at cband the reason why C cband was picked
[29:20] uh initially is that it is um able to provide information about a lot of different things so it's sort of an um it's good at a lot
[29:31] of things but not really perfect for any one of them uh it still provides decently high resolution it provides a
[29:39] little bit more penetration into vegetation but it's not really good yet for extensive uh vegetation characterization and it doesn't really
[29:48] have quite enough penetration yet to reliably allow you to discover water under under vegetations so it's useful for a broad
[29:58] range of things but it's not really optimal for any of them so that's why it was picked sort of as a starting point
[30:05] um to be able to support data for a really wide range of applications Sentinel one one of the
[30:12] missions that you likely will be using is operating at cband um to longer wavelength we have then sand at about 7 7.5 to 15 cm
[30:25] wavelength l band which is focused roughly at about 25 cm wavelength and MP band in thew of about 60 cm wavelength
[30:33] on on average uh the ones that we'll talk about uh today more is l-band L band is really good to provide
[30:42] Global medium resolution sard data the nysar mission which we discussed earlier operates at Eland at 25 cm it's really good for GE geophysical
[30:54] monitoring it provides substantial penetration penetration into vegetation cover which gives you good sensitivity to biomass um so the
[31:04] penetration into the tree canopy allows you to characterize the tree canopy and estimate biomass in other vegetation
[31:13] parameters and the penetration also means that now at Eland we are much more capable of seeing water under vegetation
[31:22] which is a topic that will come up a little bit later again in this presentation presentation so remember we'll today we'll talk
[31:31] mostly about cband about 5.5 CM wavelength and L band at about 25 cmet wavelength in addition to Cloud
[31:45] penetration um radar also provides um another capability that you don't get as easily from Optical data and the
[31:54] capability is the exploitation of Po polarization now what polarization is uh the the orientation of uh the oscillation of an
[32:06] electromagnetic wave so if you think of uh electromagnetic signals they are so-called transverse oscillating waves transverse oscillating waves means that
[32:18] their direction of oscillation here shown as this up and down sinusoid is orthogonal to the direction of
[32:27] propagation so the electromagnetic wave would travel from the hand in this case to this wall on the other side so
[32:35] propagation is from left to right but the oscillation is up and down which is orthogonal to the direction of
[32:43] propagation this transverse um nature of electromagnetic waves gives us uh the ability or allows us to for these signals it matters in
[32:56] which uh plan Lane the signal is oscillating so the signal can oscillate up and down like in this case but it
[33:03] could also be oscillating left right in a horizontal plane and it turns out that uh signals with different oscillation
[33:11] planes they interact with the surface differently and give us independent information about the surface the plane of oscillation we call
[33:21] then polarization uh so a a um a signal that travels in a plane that oscillates vertically so up and down we call
[33:30] vertical polarized and signals that travel in a plane that oscillates uh horizontally we call horizontally polarized and to show you an example
[33:42] that these different polarizations indeed lead to different um Imaging results results I'm showing you here some examples what I'm showing you at
[33:52] the very left is a um in this case a um um l-band uh data set acquired by the
[34:00] alos Pulsa Mission so it's a 25 cm l-band uh data set the left shows you the the signal in the in an HH
[34:09] polarization H the two hes here mean that we are transmitting a signal that is horizontally polarized so where the
[34:16] oscillation happens in this hor horizontal plane and we are receiving uh signals that were scattered back from
[34:23] the ground we receiving those signals also in that same polarization so it's horizontal transmit and horizontal receive these are those two
[34:33] hes in the middle you see um a data set acquired over the same area now in vertical polarization so here we have uh
[34:42] transmitted a signal in in in sort of this up and down vertical oscillation and received signal in that same
[34:49] polarization and if you compare those two data sets uh to each other you can see some uh differences you see that
[34:58] this um area here which ends up being a water surface looks quite different in VV than it does in HH so you see there
[35:06] is independent information provided here um also on the sort of southern end of this data set you see differences
[35:13] between the HH and the VV with the HH having higher brightness in some parts uh of this Forest structure in this case
[35:21] on the lower end um of the data set if you have polarization capability you can do also funny things you can do
[35:30] uh you can record cross-polarized signals those are data sets where you transmit a signal in one polarization
[35:37] for instance you transmit um in this case in horizontal polarization but you're receiving energy uh scattered back in the opposite
[35:46] polarization so we transmit horizontal and we we receive uh vertically this allows you to understand depolarization depolarization um so in this case you're you're
[35:59] recording uh signals that were changed uh in their polarization and we'll talk a little bit later here in the slide
[36:07] what causes depolarization and what this cross-polarized term tells you ah and it comes actually here um so these polarized data sets
[36:20] allow you to to distinguish different types of scatters on the surface um and what we can distinguish are these three
[36:29] different scattering types from each other we can uh for instance uh map out um so-called rough surface gatters um
[36:38] these are these signals shown in blue so if uh the signal from the radar travels down to the ground and then scatters off
[36:46] of a rough surface in this single uh scattering event um mechanism this is a rough surface scattering uh event and uh we'll see
[36:56] that there is a a polarization that is particularly sensitive to rough surface scattering a second um physical
[37:06] scattering process that SAR can distinguish is so-called double bounds scattering this is shown here in this red color double bound scattering
[37:15] happens for instance on tree stems so if um a signal Travers down from the satellite it may hit um the ground it
[37:23] may bounce forward from the ground H hit second vertical structure like in this case a tree trunk and from from there it
[37:32] may reflect back to the satellite in this dou double bounds uh situation so vertical structures such as
[37:39] Treet runks but also potentially light poles and other similar features they provide very strong double bounds scattering other features that are heavy
[37:48] in double bounds are Urban environments um you can imagine a signal come down to come down hit the surf surface bounce
[37:57] off the side of a building and then come back um to the satellite so it's the the second kind of
[38:04] scattering process that SAR can identify and distinguish uh and um we'll talk on the next slide which polarization is
[38:13] strong at mapping out double bounds features um the third scattering process is volume scattering um what this means is we have
[38:24] again a a signal come in from the satellite and then it penetrates this signal penetrates into a scattering
[38:30] volume volume such as a tree canopy in that volume this the signal may bounce many many times from Branch to Leaf to
[38:39] Branch to leaf and back so there may be you know hundreds of bounces within that volume before the signal bounces
[38:47] eventually back to the satellite these many bounces in a random volume those are um the main main
[38:57] process that can cause depolarization that can cause an incoming signal of a certain polarization to lose its polarization in
[39:07] Integrity so we depolarize the signal and um the return signal may have equal amounts of horizontal and vertical
[39:16] polarization and so this these cross polarized signals that we looked at on on the previous slide they are really
[39:22] good at detecting uh the degree of depolarization and really good at quantifying volume scattering and volume scattering um happens very heavily in
[39:31] tree crowns and vegetation covers so data at multiple polarizations then allow you to discriminate these different scattering
[39:43] types and this is the case because rough surface scattering tends to be particularly strong in vertical polarization double bound scattering is
[39:53] particularly strong in horizontal polarization in volume sket ing is the main source for depolarization show shows up very heavily in these
[40:02] cross-polarized terms so these terms where we transmit one polarization for instance horizontal and receive the other polarization such as
[40:12] vertical so if you have all these polarizations available you could look at ratios in power if a pixel has higher
[40:20] power in VV than in HH it is likely dominated uh by rough surface gettering um to show you what different surface
[40:33] types look like in SAR images I want to show you this example this is a um very
[40:39] large SAR Mosaic actually acquired by a mission called map this is a uh an l-band Mission operating at about 25
[40:48] cm and this Mosaic shows the Amazon rainforest rainforest Basin uh if you know the area this rainforest Basin contains uh lots of um
[41:00] tree cover and and vegetation cover those are shown in these um sort of intermediary gray uh Landscapes it
[41:07] contains some water surfaces uh and also some inundated um vegetation so these dark features shown here these are uh water surface features
[41:20] those um um those areas look dark because of the following reason SAR satellites turn out to be observing
[41:30] the planet always in a slightly sidel looking manner this has to do with the way SAR images form are formed um the
[41:38] the process of of SAR image formation which we won't discuss uh in this lecture um necessitates that the SAR satellites
[41:47] always look slightly to the side so there's an angle here that's not zero um that describes the degree of side look
[41:56] of a satellite so the satellite looks to the side it transmits energy to the ground if this energy hits a very smooth
[42:07] surface then the uh scattering happens in a forward um in a forward angle uh so the scattering happens in in an optical
[42:17] scattering process um where the incoming signal is scattered away from the sensor in this sort of um um opposite direction
[42:27] uh from that smooth surface so a very smooth surface such as a water surface will return very little
[42:35] signal back to the sensor and therefore will look always quite dark um in these SAR images and this is an a fact that we
[42:43] will exploit uh when we try to detect water in s data if you add roughness uh to the
[42:52] surface uh such in this area that circled in in yellow here this is an agriculture site um so these are fields
[43:01] that are plowed and and and cultivated uh the plowing adds um surface structure to the surface and
[43:08] roughness to the surface um this roughness means that um the scattering happens in into a variety of different
[43:16] orientations and the sum of the signal now comes back to our sensor it turns out the rougher the
[43:23] surface the more signal is scattered back back to the satellite sensor and SAR is really good at measuring surface
[43:30] roughness this way um we see um other intermediary gray surfaces here these are vegetation surfaces uh so here signal comes down it
[43:44] penetrates into the tree cover there are many many bounces that are happening here and then signal comes back to the
[43:50] radar um how bright these uh vegetation patterns look uh depends on the amount of structure of the tree canopy the more biomass the
[44:01] more above ground structure the tree has the higher the radar brightness becomes this is really useful because we can
[44:08] look at the amount of scattering in in in radar over tree covers and can use that to understand the amount of biomass
[44:17] the more scattering the more the higher the biomass uh of the forest lastly in this area you see these
[44:26] very very bright patches um those are really interesting uh and we'll get back to a little bit later What's Happening
[44:33] Here is we have inundated vegetation at Eland we have the the ability for the radar to penetrate through the tree
[44:41] cover enough to incur scattering uh on the surface if that surface is a water surface we have very strong forward
[44:51] scattering uh on this water surface um the forward scattered signal will then bounce off of uh tree stems in
[44:58] neighboring trees and from there will be sent back to the radar so we get a very strong double bounds uh effect that
[45:06] makes these inundated vegetation features very bright and we'll see later that these very bright features in rainforests in other vegetation covers
[45:15] um can be used uh to understand um the amount of inundated vegetation uh in an area area so as mentioned um in order to be able
[45:29] to see the um water under vegetation we need to be able to penetrate through the vegetation it turns out the amount of P
[45:38] penetration is dependent on the radar wavelength um so the shorter the wavelength the less penetration um is
[45:47] available uh for the same type of Target so if we take if we take a tree stand
[45:53] and we observe this tree stand at say three different wavelengths such as X band uh cband and L
[46:01] band uh you can see in the sketch sketch here is the longer the wavelength becomes so we go from 3 cmet at xand to five at C
[46:21] bandm at L band the higher the penetration penetration into that vegetation cover becomes so that's really this means that
[46:32] elban is really useful for vegetation penetration and is much more useful for seeing uh water under the tree
[46:40] covers this penetration ability also U holds true for some dry soil areas like dry ovium um the long trate the same is
[46:50] true for Glacier Ice and Snow cover um the longer the wavelength the easier we can penetrate into ice and snow and to
[46:58] deep the deeper we can penetrate into uh these surfaces this means short wavelength such as xand these Radars um scatter
[47:09] mostly off of the tops of tree canopies um cband to lb band has then increasing penetration ability and longer
[47:18] wavelengths such such as L band are useful for mapping of inundation under Forest canopies so missions upcoming
[47:24] missions such as band will give you improved capability to map water not only in open terrain but also find water
[47:34] under Forest canopies and an example of this you can see again on this slide this is l-band
[47:42] data coming from a Japanese mission called alos one uh these data were acquired in uh around um in the early 2000s this is an
[47:54] area in Peru and what you see here you see the same area covered in two different times of
[48:00] the year uh the left data set uh is acquired during the dry season where the uh where the water under the V under the
[48:09] vegetation is fairly limited and on the right hand side is a data set acquired during the wet season where we have more
[48:17] water under vegetation uh in both cases you can see that there's some water present in both dates uh this feature for instance is a
[48:26] water under vegetation feature that also survives during the right the dry season but during the wet season you can see
[48:34] that there's substantially more uh Open Water um under the vegetation cover you have water over here in these bright
[48:42] patches you see a lot of water also in these brighter patches up so you could use this to map out um
[48:50] inoda vegetation using these alband data sets so now we have an understanding roughly what drives uh radar scattering and we
[49:02] already understand a little bit about how surface water looks in s images I want to dig into these surface water
[49:09] signatures a little bit more so that you understand what to expect um when uh flooding develops uh in your area of
[49:17] Interest so the way we can detect surface water signatures in s data has to do with the different kinds of
[49:24] scattering scattering uh we observe uh on these very smooth water water surfaces so if you have a s side looking
[49:32] radar um instrument uh and the signals travel down to the ground if the signal um hits a smooth water surface um it
[49:42] will incur so-called specular reflection so the incoming energy will be scattered forward in the opposite direction this
[49:50] means over water we have very little scattering that comes back to the radar and water typically looks quite dark in
[49:57] SAR images you can see that here in the on the right hand side this is a data
[50:01] set in Norway where you can see these very dark patches uh those are lakes uh in this
[50:10] landscape in contrast if the if the incoming um signal hits uh regular land surfaces such as bare soils um or ve
[50:21] vegetated terrain we incur diffuse scattering this is because of the roughness of the surface and the structure that grows or is on top of the
[50:31] surface diffuse scattering means that um the incoming energy is scattered into a variety of different directions including the direction back to the
[50:40] radar so regular land surfaces look significantly brighter than open water and again you can see that quite nicely
[50:48] here in this image on the right where the um water surfaces look distinctly darker than the regular land
[50:58] surface um and so we can then think about um what uh the radar cross-section um observed by a radar looks like as
[51:09] rain sets in and flooding occurs in a landscape so I want to show you Bri briefly three um SAR signatures for
[51:18] three different types of Landscapes uh and so what you see in both cases we have a situation where at
[51:24] the beginning of the time Series so time is shown here on the on the x-axis we have a reasonably dry surface
[51:33] so in this first uh observation spot um let's assume that rain is starting to fall early on in this time series we
[51:41] have relatively low soil moisture uh and then as rain sets in you see that progressively soil moisture is
[51:50] increasing so this left panel here shows you the change of soil moisture over time as precip precipitation is
[51:58] falling at some point in this time series the um the surface may be completely fully saturated uh and at
[52:07] this point this is the point when surface water will form so the soil is now not anymore able to absorb uh
[52:14] additional precipitation and you know surface water in puddles on the surface of forming and expanding so this is
[52:22] where flooding where you have flooding in the landscape landscape now what does this look uh conceptually in a sar data set um as um the soil
[52:33] moisture or the moisture of the the the ground increases this leads actually to us to a continuous increase in the radar
[52:41] scattering of the surface soil moisture turns out to be a very strong driver of how strongly microwave signals interact
[52:50] with with soils the the wetter the soil becomes the the more effective it scatters radar signals and and therefore the more the
[53:00] brighter the radar signal becomes so initially as the moisture content content increases we have a continuous increase
[53:09] in the radar cross-section of that soil in a Time series but then when surface water develops we now have standing
[53:17] water this standing smooth water surface uh causes the radar cross-section to drop uh into the basement here because
[53:26] now we have specular reflection all the incoming signal is scattered away from the radar and we get very dark signals
[53:32] from this open land surface so if water appears in in open land areas this is the radar
[53:40] cross-section time series you would expect first brightening and once um flood waters appear you get very dark
[53:52] responses this is in contrast to water F forming under vegetation canopies if so in this case we have um
[54:01] trees on the landscape and depending on your radar wavelength you may be able to penetrate through through these trees
[54:08] during both Dr dry and flooded conditions if there are dry conditions um and the signal penetrates to the
[54:16] ground you incur sort of diffuse scattering on the ground um so some of the sking comes back to the radar a
[54:24] little bit um bounces forward against the trees and then comes back to the radar so we have moderate direct
[54:30] scattering and moderate double bound scattering from these three canopies if we however add water to the surface so we have now rainfall and
[54:42] surface water is forming we get first of all much more much stronger scattering on the surface if water scattering is forming the
[54:50] scattering is a forward scattering case so we have um specular reflection with forward scattering um the forward
[54:59] scattered signal now hits the tree stem very effectively and comes back to the radar so the scattering becomes much
[55:05] brighter um uh in in this area so looking again at that same time series so again as as rainfall uh
[55:17] develops we have first a gradual increase of radar back scatter related to an increase of soil moisture
[55:25] but now at the point when surface water is forming the brightness actually becomes very bright so you jump up
[55:32] instead of down uh because we get very strong double bounds signatures in these under these vegetation con
[55:40] canopies so there's a difference between open land in open land the scattering went down to zero in uh in flooding
[55:48] under vegetation the scattering jumps up to very bright double bound scattering in in inundative vegetation so this inundative vegetation
[56:01] again as a reminder is mostly observable at elban such missions um such as nysar much more so than in currently available
[56:09] cband data sets from c one um to show you an example of flooded vegetation um um you see here two cases
[56:20] of the Amazon rainforest actually in in Brazil on the left hand side you see uh a situation where there is no flooding
[56:28] under the trees this is during the dry season you see the U the field observation here on top in on on the
[56:34] bottom you see the related SAR observation what you see here is in Black this is the a river going through
[56:42] the Amazon rainforest in this case and around it you see moderately gray value Brides uh vegetation scattering uh in
[56:51] the in the area scattering from the trees at this this elban data set now if we get into a flood season now we have
[56:58] standing water under these uh trees this leads to strongly enhanced double bound scattering and you can see that double
[57:06] bound scattering very nicely in this data data set so all of these bright areas in this data set is inundated vegetation that
[57:14] you can easily map out um either in a GIS system or using some sort of an automatic
[57:23] technique technique I'm going to skip forward real quick and show you a couple of examples of the
[57:30] scattering phenomena so this uh to show you what this looks like in reality um I'm showing you a Time series of data
[57:39] sets over India so this is the north um eastern part of India also here during the monsoon
[57:46] season there are slot flood waters that are forming the river that you see uh go through these data sets is the Ganges
[57:56] River and you see that um during some time Steps early in the season the the background looks uh more or less evenly
[58:06] bright this is at the end of the dry season and then as rainfall sets in during the monsoon you see more and more
[58:13] dark patches show up that indicate surface surface water now we can pick a pixel in this in
[58:20] this data set we're picking this pixel over here indicated by this uh symbol in the map and if we look at the time
[58:28] series for this pixel you see a graph um here shown on the left you see we have
[58:34] an early phase where scattering is fairly stable at about a brightness of minus5 minus5 DBS and then uh the radar brightness
[58:43] gradually decreases and settles in to a much lower R radar brightness at about minus 20 Debs and so if you want to interpret
[58:53] this you can interpret this in in the following way this is the before uh flooding radar brightness here on the
[59:00] very left and as uh rainfall sets in more and more of this pixel becomes um flooded and inundated with water and um
[59:11] at a certain point this entire pixel is inundated and you get much darker scattering from the from the specular
[59:19] reflection you get um from the inundation so you could not only map uh identify this pixel is being flooded but
[59:27] you could also roughly draw a line at which time step this pixel was completely inundated to show you another example of
[59:39] this data point number two here uh right next to the river you see a little bit of a different Behavior you have first
[59:46] again roughly about minus 5B stable scattering um as rain sets in we we then get actually an in increase
[59:54] in brightness at first and then a decrease in brightness later and the phases that you see here is that um as
[1:00:03] water next to this river is rising we have vegetated terrain around uh around that River initially there's water happening
[1:00:13] under the vegetation in this area which leads to a brightening of the radar cross-section that you see
[1:00:19] here but at some point as the water continues to rise this vegetation in this area which is not very tall is
[1:00:27] actually completely inundated and when it's completely inundated you see how the radar cross-section then falls to the minus 20 DB uh indicative of of
[1:00:38] surface water so we have initial inundative vegetation and then at some point completely submerged vegetation uh in this in these
[1:00:51] pixels um a third data set I show you over here um so these are wet lenss that are
[1:00:57] slowly uh inundating in the time series um at this point number three and here you see that we have again minus 52b uh
[1:01:06] background scattering early in the in the time series then about in June of that particular year rain sets in and
[1:01:14] the radar crosssection drops uh to a certain level of about roughly minus 10 DB and then at a latest stage um in
[1:01:24] August of that same year it drops even further to minus 20 DB we already know that the minus 20 DB
[1:01:31] is is the fully inundated um uh is indicative of full inundation of a particular pixel but what happens in
[1:01:39] between is that this pixel which has a a 30X 30 meter footprint uh for a while was partially inundated this can happen
[1:01:49] if um there's topography in the landscape and you have mounds and valleys The Valleys will fill up with
[1:01:56] water first so part of that 30 by 30 meter pixel has standing water and and other parts of that pixel is are still
[1:02:05] um elevated terrain and only when also the rest of the pixel gets inundated the radar brightness will fall to that minus
[1:02:12] 20 DB level so these time series are really useful to understand how flood uh progresses and to pick uh time steps at
[1:02:24] which um a certain pixel became fully inundated now at the very end I want to show you um how we can actually map
[1:02:37] these water water surfaces using SAR and it's all based on this idea that um water surfaces look much darker because
[1:02:47] of that specular reflection that we've already discussed so we're trying to exploit this darkness of surface water
[1:02:54] features to automatically identify them in in images and the way we do this is or a very simple way of doing this is using a
[1:03:04] thresholding technique and so what we are counting on is that if we form create create histograms from SAR images a histogram
[1:03:15] is basically a bar chart where for every uh brightness value radar brightness value we counts the number of pixels
[1:03:24] that um um are characterized by this by this particular brightness value so this black line here in the background is a
[1:03:33] histogram of one SAR image what it shows you is that you have most pixels have a radar brightness roughly of about minus5
[1:03:42] DBS somewhere between maybe minus8 uh and maybe min-2 DBS um most pixels have radar brightnesses like that these are pixels that predominantly
[1:03:54] belong to the class land so these are rough surfaces that and vegetation types uh that form regular land
[1:04:03] surfaces you see there's a a second order um appearance of pixels a lot of additional pixels have a radar
[1:04:12] brightness here in this case of about maybe minus 17 DBS these pixels are pixels are significantly darker than the
[1:04:20] average land pixels and those darker pixels belong all to the cloud water so if you look at this histogram
[1:04:27] you see this histogram has two distinct uh if you want humps we call them usually two different
[1:04:35] modes um and the darker mode usually um relates to water and the brighter mode relates to land surfaces and we can draw
[1:04:44] visually a line that separates pretty well the water pixels from the land pixels so this is what a thresholding
[1:04:51] approach is doing it tries to find a separating line uh pixels that have brightnesses below uh that threshold
[1:05:00] value uh we would classify as water pixels and pixels that have a brighter brighter values than that threshold we
[1:05:08] would classify as land and you can see visually that this threshold is pretty good at discriminating those two classes from
[1:05:15] each each other on the left hand side you see a second case again you see a very
[1:05:22] distinct separation of water and land again here we can draw a threshold line that separates water and land pretty
[1:05:30] well from each other so what this slide shows you is first of all that thresholding is a
[1:05:36] really convenient and easy way to do water mapping in SAR images because it exploits this dark signature of water
[1:05:44] but it also shows you a little bit of the complications of this technique um you see first of all that
[1:05:50] the water and land class are not equally separated in those two cases these two cases are distinguished by some geometry
[1:06:01] characteristics so one of them is acquired with a look angle of 23 degrees so this is a radar that looks very
[1:06:07] steeply to the ground the other one the other radar looks a little bit more shallow uh this observation has 45 Dees
[1:06:15] the point here is that different observations may not provide you equal separation between water and land and
[1:06:24] the optimal threshold uh that distinguishes water from Land may also not be in the same case so in the in the
[1:06:32] right hand side case you would draw a separation line roughly about - 17 DB while on the left hand case you would
[1:06:40] draw it at about minus 10 DB at a quite different brightness value so a key to a successful
[1:06:47] approaches to automatically determine what is the best separation line between water and land and we may have to pick that optimal
[1:06:57] threshold for every single scene because for every single scene um the separation between water and land U may be
[1:07:05] different so we are looking for a an Adaptive approach that automatically finds the best separation threshold for
[1:07:13] every single data set and so the approach that you will exercise in in a lab um is doing exactly
[1:07:22] that it is a performing an Adaptive uh threshold based surface water mapping it is an approach that uh we developed in
[1:07:30] an uh applied science uh uh project a very simple but quite robust threshold based approach this approach was
[1:07:39] actually used by a number of people or similar types of thresholding approaches were used by a number of people um for
[1:07:46] instance uh there's a paper that's listed here on this Slide by Sandra Martinez at all from the German
[1:07:52] Aerospace Center that uh published a very similar approach uh in their paper U from 2015 essentially what we're doing is we
[1:08:02] take uh original SAR data sets we do some pre-processing to these data sets essentially to geocode um the data sets
[1:08:11] and and remove some image distortions that you get in SAR images uh so so this step number one prepares data sets
[1:08:20] geocodes the data sets so that we can do um flat mapping on these images once we have prepared the data
[1:08:29] sets we can uh do the automatic thresholding so most of the secret source of the approach is hidden in this
[1:08:35] step two where we're trying to automatically find the best separating threshold between a class land which is
[1:08:43] the brighter class in AAR image and the class water which is the darker class uh in in this particular SAR
[1:08:51] image so step two provides um the threshold determination based on this threshold we can separate uh land from water classes
[1:09:03] and we get what we often call an initial flood map or flood candidate map we usually do a little bit of
[1:09:09] postprocessing on on that map which is shown in in steps four and five this post-processing is mostly to remove some
[1:09:18] false detections sometimes U we may detect land pixel as water pixels um there may be reasons why sometimes
[1:09:29] certain lamp pixels are dark even though they don't contain water so in this step four we Tred to identify those pixels
[1:09:35] and remove them from the initial detection and in step five in this approach uh we also perform an
[1:09:44] additional step um where we try to separate permanent water from actual flood water extent so permanent water
[1:09:52] would be the the permanent extent of rivers permanent extend of lakes um in contrast to additional water you you get
[1:10:00] during a flood situation in the lab exercise we'll do here in a sec uh we will exercise steps
[1:10:07] two and four um to get to uh an initial flood map and then a post-processed um false alarm reduced uh flood
[1:10:18] map um just briefly how the original flood threshold Det ction works is so we need to find a way of
[1:10:27] automatically finding the best uh classification threshold for a scene and the way we do this is we take a sar
[1:10:33] scene um like this this is um a scene that has about a 250 by 250 kilometer footprint and let's assume that our
[1:10:42] scene contains some water so we have a lake uh we have a lake and a river uh in
[1:10:47] that that scene what we do first we we uh we split up the scene into uh smaller scenes we call those tiles
[1:10:56] these tiles are typically about five 200 by 200 pixels in size and of all of these tiles we tried
[1:11:04] to initially identify tiles that contain roughly about equal amounts of water and land in them and the way we identify
[1:11:13] those tiles is we look for tiles that are darker than the average uh tile brightness and uh where the distribution
[1:11:23] of brightnesses in a tile has um a larger standard deviation than the average so why does what what does this
[1:11:31] mean tiles that have both water and land in it they are darker than the average tile brightness because the water
[1:11:40] surfaces are much darker than the land surfaces um so so those tiles are biased low in average brightness compared to a
[1:11:50] tile over here which only contains uh land surfaces so that's the first indicator um um to um so this first step
[1:12:01] by looking at average brightness will detect all tiles that contain water uh so for instance this tile here marked in
[1:12:08] red but also potentially this tile down here which basically contains only water um to then focus on tiles that
[1:12:16] contain both water and land we also look at the standard deviation so we we basically take all the pixels within the
[1:12:23] tile and calculate the brightness standard deviation if we have both land and water classes in here the standard
[1:12:30] deviation will be very large because people will have very dark and very bright pixels uh and so the combination
[1:12:36] of average brightness and standard deviation um lets us select these few tiles marked in red which contain both
[1:12:44] water and land and these are very ideal tiles to do threshold calculation we can then for each of these tiles find a best
[1:12:54] separating threshold between the water mode and the land mode uh we get for instance five such thresholds from this
[1:13:02] technique and we then end up averaging those five thresholds to get a final threshold for a scam um I'm not going to go into too
[1:13:14] much detail into the postprocessing but once we have a first detection using this automatic thresholding approach we can get some
[1:13:22] false detections those happen often in in in topographically inclined terrain where we may have radar Shadow it also happens
[1:13:31] sometimes in terrain that say may be covered in snow such as high elevation you may have sometimes snow cover during
[1:13:41] warmer days the snow cover May melt on the surface it may also look very dark similar to a flood plane and so those we
[1:13:48] may want to remove from our original detection and we our Pro uses a set of criteria to identify pixels that are
[1:13:57] potentially false detections um we look at the radar brightness of those pixels if the radar brightness is very close to our
[1:14:07] threshold then we basically saying we are not so sure about about this particular particular detection uh we also assume that um uh
[1:14:17] flooding happens mostly in flat terrain so if you have flood detections in uh in areas where the surface slope is very
[1:14:28] steep we also are doubt a little bit that this is a correctly uh classified pixel so we have a few of those rules
[1:14:37] that we put in place uh to clean up our original detections uh and these rules work pretty well to show you an
[1:14:45] example these are uh flood detections in a very topographically inclined region in Hino chimalaya this is in the
[1:14:53] Himalaya Mountains uh and on the uh right hand side you see the sarene in this particular case on the left hand
[1:15:01] side you see the original um initial flood flood candidate pixels um many of these flood candidates detected here are
[1:15:10] actually false alarms these are pixels that happen to look dark but are not water water covered um once we apply the
[1:15:17] post-processing step many of these pixels are removed so you see here in the comparison so this here is before
[1:15:25] postprocessing we see lots of false alarms after process postprocessing many of these false alarms are gone and these
[1:15:33] features that are left here actually those are true water bodies this for instance is a high altitude Lake uh in
[1:15:40] the Himalaya Mountains so it's quite effective post-processing step also this step is included in your little lab
[1:15:50] exercise so this is a very simple but yet quite powerful approach to water mapping um on this slide I show you that
[1:15:58] we actually built a service um based on this technique to do continuous water mapping uh in the hukushima region so we
[1:16:07] do water mapping for Bangladesh Northern India uh Southern Nepal and Southern Bhutan this slide includes a link so
[1:16:15] once you have these slides I encourage you to look at this link and and explore that um platform that we've built that
[1:16:22] automatically does water mapping uh in this region in this platform we provide two layers one of them is the uh
[1:16:29] inundation uh information in light in sort of a lighter blue color and in a darker blue color we also provide a
[1:16:36] permanent water extent um to allow people to distinguish between the flood plane uh and the The Perennial water
[1:16:44] surfaces in the in the landscape and because we have data sets every 12 days you can uh animate uh this
[1:16:53] information on in this web service uh to sort of monitor how the flood situation is developing in that particular region
[1:17:02] this shows you a Time series um um animation of flooding in Bangladesh from 2021 uh where you can see how the flood
[1:17:12] plane is continuous continuously expanding during the early phases of the monsoon uh in that particular year uh here an example how this
[1:17:24] information can be used this is an example where you see on the left hand side uh the surface water EX on the
[1:17:31] right hand side the surface water extend extracted from our service this is for the for the northeastern part of
[1:17:38] Bangladesh and on the right hand side you on the left hand side you see a an area photo to give you an impression of
[1:17:44] what that water extent looks like on the ground um again because you have data sets every 12 days you can not only um
[1:17:57] you know map what extent once you can map what extent regularly and this uh data set shows you or this slide shows
[1:18:04] you how you can use multiple data sets to do additional analysis on the um left hand side you see a surface water extent
[1:18:15] that analyzed as a function of time uh so for every time step here you see the amount of surface water that's present
[1:18:21] in the scene this is for uh 2020 in three provinces of Bangladesh and you can see that in
[1:18:30] this particular year and this particular area floodings commenced in in about early May of 2020 uh initially
[1:18:38] encouraged by Cyclone aan which was a strong Cyclone that hit Bangladesh a bit before the regular Monsoon start so
[1:18:47] there was early uh surface water extend and then in June the regular Monsoon kicked in and added additional water uh
[1:18:55] surface to this area what EXT then peaked um in in early August and then slowly uh receded until the end of the
[1:19:04] year so that's one way of how you can analyze these data sets you can also if you have multiple observations you can
[1:19:10] calculate how many days particular areas are inundated so this is a heat map here that shows you uh sort of reddish
[1:19:18] regions are inundated for many many days uh and blue regions are inundated only for short periods of time this
[1:19:24] information can be useful if you have agriculture areas and you want to understand whether the crops uh in the
[1:19:32] area U may have survived or may have um um drowned uh during an inundation event uh we've done um a great deal of
[1:19:46] uh evaluation of this workflow too to understand the performance of this I want to just show you a brief flavor of
[1:19:52] of of this analysis uh we have uh here a comparison between our water detections coming from s in this case from senal onear to water
[1:20:04] detections from Optical satellites there are established methods how you can detect water from Optical data as well
[1:20:10] and if you happen to have cloud-free Optical data we can try to find pairs of cloud-free optical and um um s data sets
[1:20:20] that are within you know one or two days time difference to each other and then compare these water maps to each
[1:20:28] other and this slide shows you some examples so on the on the very left you see um SAR data set what extent derived
[1:20:37] from SAR um in the middle pane you see water extent derived from Optical data at um time steps reasonably close to the
[1:20:47] sarak positions and on the right hand side you see the difference so everything's in Blue on the right hand
[1:20:52] side side um shows equal water extent and little patches that show red and light blue those are differences between the
[1:21:00] optical and the uh SAR um detections but you should see in this animation that SAR is quite good at monitoring an event
[1:21:10] and seeing the changes of what extend uh equal to what you would get from Optical data if you were lucky and Optical data
[1:21:18] were and you get enough cloud-free Optical data sets so before I go into the lab I want to
[1:21:29] briefly talk about limitations um the limitations uh for these threshold based U mapping approaches uh one of the main ones uh
[1:21:40] has to do with uh wind roughening on water so the premise of the approach was that water surfaces look very dark and
[1:21:51] if you remember the reason why they look dark is because water surfaces tend to be very smooth um this premise is violated if we
[1:21:59] have strong winds during a sar acquisition uh so if you blow water over wind over a water surface you uh you
[1:22:08] create small ripples on the water surface those are called capillary waves you can see that in that little image on
[1:22:14] the left hand side and this causes some roughening of the surface in an increase in in brightness so during days are very
[1:22:23] strong winds this threshold based approach may run into some limitations you can try to mitigate this problem by
[1:22:31] doing um um thresholding not only on the VV uh polarization on the co-polarization but also on a cross
[1:22:39] polarization it turns out these cross polarizations are more resilient uh to water roughening so there's some workarounds uh to mitigate the wind
[1:22:49] impact in the notebook the exercise that you'll be running will actually use both polarizations of Sentinel one uh to be
[1:22:58] more robust uh to wind impacts another main limitation is water under vegetation only certain Radars will allow you to see water under
[1:23:08] vegetation um this is particularly true for the longer wavelengths such as nysar and much less true for the shorter
[1:23:17] wavelengths such as those provided by Sentinel one so the data that you'll be using in your exercise those are Cal one
[1:23:24] data sets senal one is great at detecting open water surfaces but not as good at detecting water under
[1:23:34] vegetation a third one that I make want to make you aware of is um SAR because of its side looking Nature has some
[1:23:42] limitations of seeing water in dense Urban environments the reason is if you look sideways to the ground you um may
[1:23:53] get large shadow effects where you there's an area behind tall buildings uh that you cannot see with these side
[1:24:01] looking Radars so everything that you see here where I'm marking my uh my my mouse uh this area where Mouse is at
[1:24:09] this area is not cannot be seen by the radar because it gets shadowed off by this tall building here in the front so
[1:24:18] shadow effects provide some limitations of seeing surface water uh in urban settings uh that's also something to be
[1:24:27] aware of and so here is an example of this impact of vegetation on water detections this is in this case data
[1:24:39] sets from Sentinel one so these are cband data sets the the two shades of blue here here are water detections
[1:24:47] surface water that was found in those Sor one data sets uh and what you may see is that the water detections end um
[1:24:56] at the edge to this sort of light green region this light green region is um are mangrove forests and it turns out that
[1:25:06] the radar signal cannot penetrate through those Mangrove forests so even though there is likely water under those
[1:25:13] mangrove trees we cannot detect this water using C one using the C band Cal one data set um L band data sets from
[1:25:23] nysar will have much better capability to also detect water under these trees again L band is the way to go if
[1:25:32] you're interested in detecting water on veget vegetation covers so with this uh I want to end uh
[1:25:41] I want to um give you at the very end a homework assignment um we have a little
[1:25:48] exercise that is created in a so-called Jupiter notebook I'm going to spend uh five uh to 10
[1:25:55] minutes real quick to explain to you how to run uh this jupit the notebook and what kind of data sets uh you will see
[1:26:03] uh in this particular jupyter notebook and then would send you off uh to perform this exercise on your own time
[1:26:10] so the link to the uh notebook that we'll be using is in the slide deck um and so on this uh slide here
[1:26:20] with the lab exercise you can uh click that link um and uh what this link is doing it is opening a chup The Notebook
[1:26:29] for you uh and I will explain to you how to run through this exercise real quick and how to use these Jupiter
[1:26:38] notebooks so now you see that the uh Jupiter Hub is spinning up um the environment was built and your
[1:26:45] environment is now spinning up and uh so the exercise that you'll be walking walking through is conceived as a
[1:26:54] Jupiter notebook so what I'm explaining to you real quick is what this exercise is doing what you will be working on and
[1:27:01] how to use jupit notebooks uh to exercise this particular um homework assignment so um Jupiter notebooks are
[1:27:10] ways of sharing executable workflows with users um and so in this particular workflow is doing flood mapping using
[1:27:18] the threshold holding algorithm we just talked about um on a stack of sent one SAR SAR images these notebooks are composed of
[1:27:28] sets of individual cells that have to be run in order um you can see here the outline of one of these cells so the uh
[1:27:35] this this blue line uh indicates the outline of that first cell that we have to run through um this first one is a
[1:27:43] so-called markdown cell you can see um what cell this is um also on the top row of this interface where you can see here
[1:27:53] that this is labeled as a markdown cell markdown cells contain text and instructions that explain a to a user
[1:28:02] what the notebook is doing this next cell is also a markdown cell it tells you a little bit about how
[1:28:10] to run this particular B binder environment a second uh type of cell that be using uh in these notebooks are
[1:28:18] so-called code cells uh these can be identified with the G background code cells then um include executable code they have have to be run
[1:28:28] in the order um as they are given in order to uh exercise this notebook start to to finish um so this notebook is walking
[1:28:38] you through that uh flood mapping workflow as shown in the slides earlier so this graphic you see you saw earlier
[1:28:46] and the notebook includes the preparation of the data the initial um adaptive um threshold calculation the creation of an initial flood candidate
[1:28:55] map and then some post-processing procedures to clean up those masks so in order to execute those uh
[1:29:05] code cells uh you have to click to one of these code cells and then run the code cell you can do that by clicking
[1:29:12] that run button which is sort of this sideways triangle here so you can click on that and it runs the notebook you see
[1:29:19] that the notebook is running um because there is a little star uh in between these square brackets once the code in
[1:29:27] that cell was completed that star is being replaced by a number this is a sequential number um that sort of
[1:29:35] reminds you which code cell you have already run and which one was the last one you've run so you can run through these code
[1:29:42] cells now one by one um to execute these functions um it is explained in a notebook when you walk through it what
[1:29:49] these functions do um so so we initially run through a set of predefined functions that we will use later in the
[1:29:58] flood mapping procedure before we then end up grabbing the data set uh so I'm just going to run through these these
[1:30:04] code cells one by one to show you what kind of end result you would expect once you ran through the notebook all the way
[1:30:12] so let me run those and then I go back and explain real quick so these early code cells here
[1:30:21] load the data set we are using a stack of CER one images near the city of malda
[1:30:27] uh this is in near the Indian Bangladesh border um we have data sets that span the early part of the 2020 monsoon
[1:30:35] season uh we have a a total set I think of 15 or 16 data sets that be analyzing
[1:30:40] here these early code cells are downloading those data sets this is a pre prepared data stack you see here all
[1:30:48] the the different images that we are analyzing these are GE images the F names here show you the dates of that
[1:30:55] image so this is from the 2020 from June 24th of 2020 and for each date we have
[1:31:02] two data sets we have the VV the vertical transmit vertical receive data set and the VH the vertical transmit and
[1:31:10] horizontal receive data set so we use both polarizations uh for robust flood mapping especially to be robust against
[1:31:19] wind impacts as we had discussed earlier so we load these data sets in uh we are also using some ancillary information in
[1:31:29] the form of height above a near drainage layer this is used to improve uh thresholding and postprocessing I didn't talk about that
[1:31:38] to a great deal uh in the lecture but it's you can find some information in this notebook to explain how this hand
[1:31:45] layer is used um and then there's a longer code cell that does the the initial flood mapping so this calculates the Adaptive
[1:31:55] uh Dynamic thresholds for every uh scene to create initial uh flood extent Maps so this is a lengthy code cell that
[1:32:02] encodes all of the processing and if you run that code cell it's going to go through all of the
[1:32:09] images so we have 16 data sets um for each of the 16 timestamps we have two images the VV and the VH image
[1:32:17] that are both being thresholded uh to calculate blood EXT so it goes through all of these images
[1:32:24] calculates adaptive thresholds these thresholds are shown here what the numbers of these are you can see that
[1:32:31] every image gets um a different automatically determined optimal threshold uh to separate the water and land features from each
[1:32:39] other once done there is a code cell that lets you evaluate the flont mapping results so here we've analyzed the 16
[1:32:47] time step time series where you see that early in the in the season the surface water extent was fairly small um it
[1:32:56] mostly was composed of the permanent water bodies uh in in the landscape and then as rain set in here in this case in
[1:33:04] June of 2020 you see a continuous increase of surface water intend until early August before a water extend then
[1:33:13] slowly recedes also shown in this plot is a sort of red dash line is the average flood area extent throughout
[1:33:20] this time series later on in the in the time steps there is a way for you to visualize the the
[1:33:29] water detections on top of the S image um so this shows you an example of these water detections and you can visually
[1:33:37] understand the Fidelity of the detections this is an interactive plot so you can actually go in um and with
[1:33:44] that little button here you can draw up a zoom window window to sort of zoom into an area of interest uh and analyze
[1:33:51] the FL detections with a little more detail so once this Zooms in here you can see uh in more detail the pixels
[1:33:58] that were labeled as surface water in the landscape which in this case are all the dark pixels and the land pixels are
[1:34:04] still marked as as land or not water pixels in this case and at the very end it also creates
[1:34:12] a summary statistic we talked about this uh in the slide deck one way of utilizing um time series of water
[1:34:19] detections is you can analyze for how many days specific areas were inundated um um so in this time series
[1:34:27] you can see the dark red pixels were inundated throughout the time series we are covering here 45 days um and U you
[1:34:34] see that's of course the river which is permanent water uh and then we have uh some features also in the flood plane
[1:34:42] that were inundated for more than 30 days uh during this flooding event so please have fun with this
[1:34:50] notebook again and ensure that um you exercise all of these code cells uh one by one in sequence and you do that by
[1:34:59] clicking into the Cod cell and then clicking that little sideways run button uh to run one not notebook cell once
[1:35:06] this one's Run please go to the next code cell and execute the the following one uh to successfully run this notebook
[1:35:14] start to finish uh in this notebook there are a few stopping points in these green boxes where you can contemplate
[1:35:21] the questions that are opposed to you in these in these little green boxes and please follow the instructions to get a
[1:35:27] bit better feeling for the quality of the water mapping that is provided um using this particular approach I hope
[1:35:34] you have fun with the notebook um and we'll be able to exercise this completely uh on your own
[1:35:43] time thank you very much for that amazing presentation and demonstration so to summarize uh the key points from the
[1:35:56] presentation uh globally and regularly acquired data from Caan and nysar are excellent for hazard monitoring applications SAR has excellent abilities
[1:36:10] to map surface water in all weather conditions threshold algorithms are able to provide automatic water mapping capabilities L
[1:36:22] band provides improved ability to map water under vegetation um so it's a better band then C band and finally there are several
[1:36:33] public water mapping services that take advantage of their the capabilities of SAR and Dr Meyer would like to
[1:36:46] acknowledge Copernicus the European space agency and the nasca NASA Alaska satellite facility deak uh for access to
[1:36:56] the Sentinel one SAR data uh thanks to NASA Ser for funding the hydro SAR development efforts and a special thanks
[1:37:05] to Thomas Meyer and Lori Schultz and others for their contributions and here is Dr Meyers contact information his email address if
[1:37:18] you would wish to contact him about any questions related to the material that he presented today and for those wishing to dive in a
[1:37:32] little deeper here's some relevant literature that will provide um more information and further details about uh using SAR for detecting and monitoring
[1:37:48] floods and finally before we end and uh here are some links that might be of interest and they are to selected
[1:37:56] existing and upcoming SAR based water mapping services so with that we conclude this uh third and last session of this
[1:38:09] webinar series a very big thank you to Dr France Meyer for the presentation and demonstration thank you to all
[1:38:17] participants for the questions that are coming in and and for for your participation and excitement in this
[1:38:24] topic we will now start the Q&A session great so we've been assembling your questions in a Google doc and we
[1:38:36] will uh share our screen here shortly and we'll work our way down Dr Meyer has started answering your questions so what
[1:38:45] I'll do is I'll read the question and he can uh then provide the answer we'll work our way from the the top down uh
[1:38:52] before we start just wanted to remind you that the homework is already posted online and that the recording and the
[1:39:00] presentation and the the transcript for this Q&A document will also be posted online okay so uh welcome uh Dr Meyer
[1:39:10] let's start with the first question how can temporal coverage be selectively higher in certain parts of the globe in
[1:39:18] Europe 6 days and 12 days elsewhere I was thinking would be somewhat the same yes uh do you want me to answer
[1:39:32] verbally yes um yes please go ahead um yes so so as mentioned here the the constellation itself in principle
[1:39:40] with the two Satellite constellation could observe six day uh sampling everywhere however limitations occur in terms of data rates so how much data can
[1:39:51] be down link uh through the available downlink stations um as well as through the duty cycle of each satellite so each
[1:39:59] satellite can only be on for a fraction of the total orbit and so um it one with
[1:40:07] with these limitations isn't um capable of observing everywhere globally every six days so they focus on you know
[1:40:15] places that funded the mission it's a European funded Mission so they ensure Six-Day sampling over European grounds
[1:40:22] uh they also have requirements over the Arctic Ocean to help in the monitoring of of of sea routes and so also there
[1:40:30] where they have six days or better coverage and um they provide additional six- day coverage over Hazard regions um
[1:40:37] many of the geophysically active re regions such as you know volcanic and earthquake sites also receive uh pretty
[1:40:45] good Six-Day sampling California is one of those Hawaii is another one of those those I hope that answers the question great
[1:40:54] yes thank you very much uh question number two what is the most appropriate way to choose a threshold value for
[1:41:01] flood detection from SAR data yeah hopefully that was answered in the presentation uh so in the end it's
[1:41:09] best to adaptively choose a threshold for every scene uh because the uh what exactly how dark uh water will look uh
[1:41:18] in a scene and how bright the land will look is a little bit different depending on acquisition geometry and
[1:41:23] environmental conditions uh so hopefully uh that was conveyed in the presentation that approaches such as hydrocar and
[1:41:32] similar approaches they end up using an automatic um way to always identify the the best threshold for every
[1:41:41] scene wonderful question three is it good practice to use SAR flood maps for validation of flood maps from other
[1:41:49] hydraulic flood inundation models yeah so these these Star based flood maps have been used in conjunction with
[1:41:56] modeling actually in two ways um some uh models use them for validation that works particularly well in places where
[1:42:05] you have open surface water through the presentation you've heard that SAR especially at cand has limitations of
[1:42:13] seeing water under vegetation uh so as long as you have open surface water you should be able to cross compare SAR and
[1:42:20] model outputs for cross validation another way how s data have been used uh for some of these uh flood forecasting
[1:42:28] tools also is that they've been used as input data um so these days we are in sort of era of of deep learning at
[1:42:36] machine learning and so a lot of these U flood forecasting models have also ingested uh s data um as sort of input
[1:42:46] uh to be better at at at forecasting data into the future okay question number four can radar also
[1:42:56] detect sedimentation change under the water that is under the the ocean or Rivers yeah unfortunately uh we s the
[1:43:06] wavelength of SAR that are used for SAR they are not able to penetrate into water surfaces the uh dialectric change
[1:43:14] at the water surface is too high and we are bouncing off of the surface itself so we cannot see things like uh the the
[1:43:21] the properties of sediments on the on the sea Flor we also cannot see sort of sediments in the water column itself so
[1:43:30] lighter data some Optical data sets are better here there is some work that's been done to analyze uh surface
[1:43:37] structures such as wind roughening I think there are questions later about that also the presence of like oil
[1:43:42] slicks on the surface those have been analyzed with SAR and in coastal zones some folks have been using SAR to esate
[1:43:51] shallow bimmetry we can do that because there's a linkage between bimmetry and what wave patterns look like on the
[1:44:00] water surface so we can measure wave patterns and then infer bimmetry from that we can't measure bimmetry
[1:44:08] directly but we can sometimes in Shallow uh environments uh infer bimmetry from you know what it does to wave patterns
[1:44:17] on the surface Great And for those interested we an ret uh s training to detect uh oil
[1:44:27] slicks and that was the last ret training I believe that was in in 2022 for those interested in that specific
[1:44:36] topic so question number five what is the expected real-time latency for nysar and Sentinel Sentinel one yeah so
[1:44:44] Sentinel one has a fairly low uh latency usually you get fully processed data Within hours I would say it like at Max
[1:44:53] at Max eight hours after image acquisition so it's great for a lot of um monitoring applications nysar will
[1:45:02] provide data at about the same latency also for areas labeled of as sort of Urgent Response so these are you know
[1:45:11] ongoing events uh that triggered an Urgent Response mode for nysar uh Al for those you will get data at about the
[1:45:19] same latency for most other data the data will take a little bit longer approximately a day 1 to two days this
[1:45:26] is because uh nysar wants to wait for the final orbit solutions to be available so that we have the highest
[1:45:33] quality data available for analysis but again for for data sets labeled as emerg as Urgent Response because they affected
[1:45:42] by hazards you will get data at about a similar latency as S one okay questions six where can I learn
[1:45:51] more about SAR are there any short courses or training related to this or a manual yeah so I've provided there's
[1:45:58] actually lots of resources it's been fantastic the community as as a whole has really come together and provided
[1:46:05] training resources for new folks toar through a variety of of resources I listed some of them here I can expand on
[1:46:13] those too and and and Erica please chime in too you have a really good overview of over the many trainings that aret has
[1:46:18] been doing uh so has a number of trainings available for different for the theory of SAR which is the one I
[1:46:24] listed here but also for many applications we have provided some resources too those are listed here uh I
[1:46:31] can uh work on those a little bit more the last link I provided here through to that laar website actually has a bunch
[1:46:38] of additional links uh to resources in it uh such as the SAR handbook such as some some European resources and so
[1:46:47] on wonderful yes there there are a number of different different resources out there uh for different levels too so
[1:46:53] uh we'll expand on this okay question seven is it advisable to use the elban data for flood monitoring in a densely
[1:47:01] vegetated area and what is the resolution and how do you get the data yes so um elent data is going to be
[1:47:09] uh very very useful for monitoring flooding flooding on the vegetation uh it's going to be particularly useful for
[1:47:15] many of the sort of South American countries that are suffering from from flooding the data from nysar is a good
[1:47:23] resource for that if you are in South America you may have access now I didn't mention that to data from
[1:47:30] sacom uh and uh and so if you put a note in there I can find a link to saom
[1:47:37] resources um um so Nisa will be available at sort of the 5ish meter spatial resolution through ASF uh
[1:47:46] earlier in the lectures um you saw a link to ASF search interface and through that you will be having access to nysar
[1:47:56] data great question number nine is SAR uh I'm sorry uh question eight which band would be most optimal for mapping
[1:48:06] rice Patty Fields yeah so I'm not a an expert in rice mapping I know there is an actual
[1:48:13] really good s IET training that's linked uh below that focuses particularly on crop mapping um um there have been work
[1:48:22] on both SAR and cand and xand SAR for mapping rice patties uh and and also the development of rice crops uh uh in in
[1:48:33] rice patties both of them were successful um so there's a variety of work out there I'm not sure if we know
[1:48:39] enough quite yet about what's optimal uh for for monitoring rice but as more cband airband and x-band data become
[1:48:47] available I think this is going to become more established okay question nine is SAR lb band able
[1:48:55] to penetrate highly dense and Tall Trees such as those found in tropical areas like in Ecuador or Colombia in order to
[1:49:02] create reliable insar and grd products or would Pand be advised in such cases yeah so elban does have pretty
[1:49:10] good vegetation penetration capabilities and it will provide better ability to like track surface displacement using insar in places that are vet ated um so
[1:49:22] I would advise to initially work with lban lban data um such as the ones that will become available with nysar and the ones
[1:49:29] you may already have access to with saom if you are from the region um there is going to be a so you'll enter a space
[1:49:36] where you will have l-band and Pand data available at the same time over those regions Ecuador and Colombia and it
[1:49:43] would be worth uh contrasting those two uh for their respective capabilities uh you may have some very dense forests
[1:49:52] where L band is not enough and doesn't provide quite the penetration you want and you may have to Pivot to Pand but
[1:49:59] luckily starting I would say 2025 so it's not quite there yet but you're getting there uh you will have data from
[1:50:07] both at both frequencies and the data sets will all be freely available from both lb and P band so that you can
[1:50:14] explore you know what is the better band for your particular region and I provided links to the missions here and
[1:50:22] Elan data again will be available through ASF uh pban data will be available through Isa yeah so the next couple of years
[1:50:30] will definitely be exciting times in terms of uh a new uh radar data uh becoming available in these different
[1:50:40] frequencies question 10 my request for an account in open science lab is pending is there any other way I could
[1:50:46] access the data and in uh part two in session two yesterday some participants had questions about how long it takes
[1:50:54] for their ASF account to be approved yeah let's start with data access first which is the second part of my answer if
[1:51:00] you're just looking to discover data and and download them to your local machine you can always stop by our search client
[1:51:07] uh the link is provided here the search. a automatic open enrollment on open SAR lab until recently unfortunately we had
[1:51:25] a few people enroll in the platform that abused the platform for things it wasn't intended for so we had to at least
[1:51:33] temporarily suspend the open enrollment so right now we're doing manual enrollment which takes a bit longer but
[1:51:38] you should get a response from the team within one or two days after your request so I apologize for that and ask
[1:51:46] for your patience uh but if you're requested for Access you you should get an email from the team with information
[1:51:52] um we are working currently how we can accelerate uh the approval process while ensuring that the platform remains safe
[1:52:00] um so sorry about that we only had a few cases so far so most of the community
[1:52:05] has acted responsibly uh but unfortunately we had a few cases that prevented us prevent us for now from
[1:52:13] just granting you automatic access when you apply uh so right now it's going to take about a day or two until the team
[1:52:20] gets to your particular request um so I ask for your patience for that okay question 11 what is the
[1:52:29] difference between shv and svh yeah so the s in this case stands for the sked back sked power uh and the
[1:52:37] HV and VH correspond to the horizontal transmit vertical receive versus vertical transmit horizontal receive crossport channels it turns out while we
[1:52:48] formally do have do tend to distinguish between those two for the space Bond Radars we have in space right now those
[1:52:56] are the same so whether you are acquiring in VH or HV the response is is intrinsically the same what we usually
[1:53:05] do if we have both available we average them to get a better signal to noise um but you can consider them identical if
[1:53:12] they're coming from the same sensor so if you have VH and HV from senel one or from say radat or from a mission like
[1:53:20] that uh you can treat them as identical for your research purposes great so let's jump to question
[1:53:28] number 13 since 12 is more relevant to session number two um and in the interest of time here question 13 I'm
[1:53:37] experiencing dark pixels in areas surrounding the river in the before flood image and bright pixels in the
[1:53:43] after flood image moreover some researchers use pre-processing even in level one grd2 why is that yeah so we
[1:53:52] usually do uh pre-processing um beyond what the GD provides uh we usually do a full geocoding and retric terrain
[1:54:00] correction the geocoding makes sure that every pixel in your image does align with its correct physical coordinates on
[1:54:08] the ground so you can overlay Optical data with s data sets that's not always true for God data uh especially in
[1:54:16] places that are more mountainous so I suggest to do full geocoding if you're working in gee the GE data are fully
[1:54:24] geocoded uh what we also do is we often do radiometric terrain correction which ensures that in every pixel the radar
[1:54:31] brightness has physical meaning um so that makes uh you know flood mapping but also other classification efforts more robust uh so
[1:54:41] I suggest to do both RTC processing and um and full geocoding uh for your data sets ASF has resources for those
[1:54:49] available if you have questions you can uh send me an email there's also Opera you know missions like a Opera they're
[1:54:56] providing now fully geocoded data for Sentinel one also uh so follow up with me with my contact information if you
[1:55:03] have more information about that regarding the case of brightening after floods uh it could be that you have
[1:55:10] vegetation either taller grasses or you know maybe taller vegetation around the river that got inundated and and caused
[1:55:18] a brightening these areas um because of increased double bounds there okay question 14 could stormy sections of oceans be confused with land
[1:55:30] cover due to the scattering from the rough surface yes I addressed that at the very end so wind blowing over water
[1:55:37] does increase the radar brightness it makes uh sometimes water surfaces look like land surfaces and in sort of their
[1:55:44] brightness brightness characteristics um we we do something to mitigate this problem by by using both the c-o so the VV or HH band and the
[1:55:54] cross Poole bands so the VH HV bands together for flood mapping the crossbow bands tend to be less sensitive to wind
[1:56:03] roughening and and provide a bit more robustness that being said if you image during extreme wind conditions say if
[1:56:11] you image during landfall of a hurricane or or or typhoon then even the HV band may not be Rob enough and you may lose
[1:56:21] some water detections because of wind roughening so there are cases during very strong winds uh where you may have
[1:56:28] issues U finding water using using these threshold approaches great um I'm going to jump to the more relevant questions related to
[1:56:39] this um this uh session and also those related to the demo so let's just go to uh question 16 while doing sampling and
[1:56:48] classification if we're certain about the local area that inundation occurred but the SAR is not showing it what do we
[1:56:55] do do we follow local observations or do we rely on what SAR is showing yeah so I would rely if you're
[1:57:02] certain about your local observations I would I would rely on those you may miss water detections in SAR for a number of
[1:57:09] reasons one of them is vegetation cover so if flooding occurs on vegetation uh the other one could also be mixed pixels
[1:57:17] so if you have if you have a s product that's provided say a 10 or 20 M
[1:57:21] resolution and the pixel is only partly covered in water it may not be detected as an Open Water pixel because its
[1:57:29] brightness is a little bit elevated because the brightness is going to be a mix of the water fraction and the land
[1:57:34] fraction and then lastly what I also mentioned is s data is only Pro available on you know on certain days
[1:57:41] and you may actually miss the peak of flooding and so that may also cause a difference between the SAR detections
[1:57:47] and your local observations is is that if they come at different times and the event is dynamic you may get a
[1:57:54] difference between those two and in that case if you're certain about your local observations I would rely on
[1:58:00] those okay uh question number 18 this is related to the demo can we have a GitHub link for the homework notebook from the
[1:58:10] hydro 30 Via binder I can't that download The Notebook right the notebook is exposed on GitHub U so you can
[1:58:17] download The Notebook from there I provided the link here in this document um if you to go to and download the The
[1:58:24] Notebook file wonderful um n question 19 you said flooding between trees becomes bright pixels how about flooding in a
[1:58:33] residential area yeah so in residential areas you may uh see a similar situation if the um the the U buildings are close
[1:58:44] enough so that you get a double Bounce from the inundated uh landscape and the the buildings around it that being said
[1:58:52] is is flood mapping in urban environments with Sara is still a research topic uh and uh there's a
[1:58:59] variety of different approaches out there to try to optimize flood mapping in urban settings and a simple threshold
[1:59:06] approach like the one that we've shown today may not be necessarily your best choice if that's something that you're
[1:59:12] most interested in you can email me and I can provide you some links to literature okay question 20 does soil
[1:59:20] moisture scattering used for flood detection behave similarly in slopes in other words could the same principle be used to monitor soil
[1:59:28] saturation and slopes yeah so SAR one of the applications nysar actually will provide a global soil moisture product
[1:59:36] that uses this relationship of soil moisture to radar brightness so in principle yes those principles also apply on
[1:59:44] slopes um um if you really want if you want to know more about how to estimate for moisture from sard data I can you
[1:59:51] can contact me and I can connect you with an expert I'm I'm personally not using SAR for soil moisture estimation
[1:59:59] but I can uh connect you with some of the folks from the nyser team that are working on the soy moisture
[2:00:05] product okay uh question 21 could on slide 41 I've seen a white and bright line on the SAR images what is that yeah
[2:00:16] so I should have mentioned that in the example I show on slide 41 is I used um
[2:00:21] sen 1 GD images as a basis um uh to provide sort of this time series um GD
[2:00:29] images do not overlap between neighboring frames and in fact sometimes there are slight very narrow gaps between two neighboring GD images and
[2:00:40] that's what you see here so this line is a gap between two data sets if you want
[2:00:45] want to avoid those gaps I recommend that you use Sen one slc's single look complex images as your source for
[2:00:53] mapping they actually slightly overlap with each other and ensure that you have contiguous mapping um everywhere okay so we're at the top of
[2:01:05] the hour here let's just take uh uh two more questions and then we'll close off the session all questions will be
[2:01:11] answered and posted on this uh Google doc online so let's just go to the next question I'm not familiar question 22
[2:01:20] I'm not familiar with my binder is it like Google collab yeah my mybinder is a a free
[2:01:26] service that you can use to exercise a notebook in that sense it's similar to what Co collab provides it provides sort
[2:01:34] of temporal cloud computing uh as well as some some temporal storage space uh you need to sort of exercise a notebook
[2:01:41] and get familiar with the workflows in a notebook and it does not provide persistent storage though so if you want
[2:01:47] to do research uh you may want to instead use something like open science lab where you have more Perpetual
[2:01:53] storage available but yeah so in many ways it's similar to collab one difference is you don't actually need an
[2:02:00] account for mybinder you just can just click the link and have it spin up uh it will shut down after like 10 minutes and
[2:02:08] free the resource again um so it doesn't provide accounts um um but it doesn't provide temporal uh permanent storage so
[2:02:16] it's more to exercise a workflow and not to actually do your own research more U more um you know
[2:02:26] consistently okay great and then I'm going to jump as a last question I think this is a really interesting one um it
[2:02:34] says uh question 38 for optimal results with the algorithm what would be the minimum length of the time series
[2:02:42] recommended yeah so we this particular algorithm that we are using here presented here works on single images so
[2:02:52] it doesn't actually require a Time series that choice was made intentionally so that the algorithm can be applied uh in in sort of immediate
[2:03:01] response where you may not have a Time series available for for your for your work there are time series approaches
[2:03:08] too that use sort of change detection in Time series to have more robust uh detection of of of flood extent um but
[2:03:17] the the approach that be looked at here is a single image approach however of course if you want to monitor the
[2:03:24] unfolding of an event uh it makes it makes sense to not only use a single image but but apply the approach to
[2:03:31] various to a series of images and then analyze uh the flood extent as a Time series wonderful so unfortunately due to
[2:03:42] uh time limitations uh we can't get to all of these questions again all of them will be answered they've been collected
[2:03:49] in this document and we'll be posting the document in a couple of days so with that uh this ends this webinar series I
[2:03:59] would like to remind everyone that the homework is online due date is November 17th and you will receive a certificate
[2:04:06] of completion if you complete the homework by the due date and you've attended all live sessions uh before I
[2:04:12] close I'd like to thank the ret team for making this possible Brock bevens San Hutson ooi Natasha Johnson Griffin Sarah
[2:04:21] CAW Jonathan O'Brien Amita meta Shan McCartney and I would like to thank our amazing guest lecturers malen Johansson
[2:04:30] from the Arctic University of Norway Eric feling from JPL and today's amazing uh guest lecturer Dr France Meyer from
[2:04:39] uh the uh ASFD and University of Alaska Fairbanks before I close uh Dr Mara would you like to say any uh any closing
[2:04:50] words I just want to thank I'm really excited for all of for the level of interest that exists right now in in the
[2:04:56] topic of SAR um if you if you have you know questions about resources if you need if you have ideas for how we can
[2:05:05] make these data sets more accessible please reach out uh either to Erica to myself to uset to ASF we as a community
[2:05:13] I think we want to make sure that these data sets that are becoming available are as useful uh to all of you as they
[2:05:21] can be and we have still a long way to go so your feedback and your input is is
[2:05:25] very important for us uh and and hopefully we'll see each other at AG or some upcoming conferences if if so then
[2:05:33] please say hi thank you very much uh it's been a luxury having you here Dr Meyer and we
[2:05:40] hope uh that you return and you come back especially once nysar uh is in Orbit and and starts uh generating
[2:05:47] amazing data so we hope to have another rset training sometime in uh June July August of next
[2:05:56] year um so uh thank you so much to all of the participants it's really refreshing to see so much excitement for
[2:06:04] SAR and a growing uh community of SAR users um as mentioned any questions please feel free to reach out to me to
[2:06:12] reach out to uh Dr Meyer and uh we hope to um see you in the next RS at training
[2:06:19] or at any of the upcoming conferences uh wishing you all a great day and until next time
[2:06:36] goodbye
