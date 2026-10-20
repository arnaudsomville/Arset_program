# Spectral Indices for Land and Aquatic Applications, Part 2/3

`https://www.youtube.com/watch?v=hga94lkmtqM` · id 11 · 1:22:08 · module 95 — Spectral Indices for Land and Aquatic Applications

[00:01] so hi everyone uh Welcome to our our spectral indices for land and Aquatic applications training this is part two
[00:09] so we're going to concentrate today on aquatic aquatic applications and uh as always my name isz and I am joined today by Amber
[00:19] McCollum and Britney bodri and also sativa Cruz uh and all of us are with at the NASA ases research center in
[00:28] California now here's a just a little bit about the purpose of this training uh and it's uh
[00:38] concentrated on providing an overview of some of the commonly used uh spectral indices for both Aquatic and land
[00:45] applications and uh our participants will see some examples of spectral index calculations with the diverse sensors including even lanat 9 and Sentinel 2
[00:58] and also with the harmonized L and Sentinel uh data sets and and uh we will also show some demos short demos on uh
[01:08] using Google Earth engine for both Aquatic and land applications now here's some of the general objectives for the for this
[01:19] training as a whole uh is obviously to recognize some of the commonly use spectral indices for land and Aquatic uh
[01:27] environments also to distinguish between uh the spectral indices and then uh to be able to select uh the best ones that
[01:36] are suited for any given uh Lan or aquatic system uh application or interest of interest and uh also to
[01:45] learn a little bit uh how to compute the spectral index uh calculations and over some of some of your areas of interest
[01:53] and how to acquire some of the products uh available already available for for uh for spectal indices uh for a variety
[02:02] of sources again remember that this is an introductory webinar so we have a prerequisite of the fundamentals of
[02:12] remote sensing which is uh you can find on the aret uh web page or if you have
[02:19] an equivalent experience that that also counts now again this is part two last week we had part one on which was an
[02:30] overview of spectral indices today we're concentrating on aquatic applications and we have uh two different times at uh 11: to 12 or also
[02:41] uh 3: to 4: p.m. eastern time also remember that we will have one homework that will open on the last day
[02:51] so next week uh November 9th and it's uh due two weeks uh after the deadline is two week after so weeks after on
[03:00] November November 23rd and uh you can fill the homework and then submit the homework and then if
[03:07] you attended all three parts and completed the homework you will will eventually receive a certificate of completion that uh will be sent to you
[03:18] uh obviously as you know aret webinars in arset webinars we have a lot of participants so it will probably take at
[03:26] least a couple of months to get those certificates but eventually you will get them this is us uh Britney B who's uh
[03:38] one of our trainers Amber she's our team lead for the ecological conservation team aret team myself one and also
[03:47] sativa Cruz uh she's one of our newest instructors or Trainers for the Eco e conservation uh Team okay so specific specifically for
[04:00] part two uh today uh the participants will be able to recognize some of the common uh indices for uh particularly
[04:09] for aquatic applications and to distinguish some of the basic differences between those indices uh develop for aquatic systems
[04:18] and also how to uh some differences between the indices that are developed for aquatic systems versus the ones that
[04:23] are developed for land applications uh also to recognize some of the main regions the electromagnetic spectrum that are particularly useful
[04:32] for aquatic applications and to review some of the recent examples of the use of the some of these indices uh for Coastal and and
[04:42] ocean applications and as I said we will have a short demo on the use of Google engine for calculating some of these
[04:48] indices as well this is a uh very broad uh review of what we covered during the first uh
[04:59] part last week uh as as we mentioned the every surface on Earth reflects and absorbs energy in different ways plants
[05:07] for example absorb in the blue and the red region of the spectrum and that's why they usually reflect in the green
[05:14] that's why we see the the leaves green and in the near infrared uh region of the spectrum so different surfaces have
[05:21] different spectral signatures and uh and the spectral indices are very simple usually very simple band ratios that will highlight a specific process
[05:32] or property or either on the land or on aquatic uh surface so for instance last week we covered a little bit about the
[05:41] one of the most common commonly used uh indices for land applications the normalized difference vegetation index index or
[05:49] ndbi and ndbi is particularly useful to follow uh phenology implants such as in the in the graphs that you're seeing
[05:58] here in the the bottom of the of the slide and uh in the case of ndbi uh
[06:05] specifically it's a simple relationship that uses the red and the near infrared regions of the of the spectrum ndbi is
[06:14] also very useful for analyzing uh vegetation vegetation Health as well now as a reminder um we will have a Q&A session
[06:27] at the end of the webinar but during this whole webinar you feel free to put your questions write down your questions
[06:33] in the question box and uh during the Q&A we will address those questions probably because of the limitations in
[06:42] time we will not have enough time to go over all the questions that are submitted by all the participants but uh
[06:49] make be sure that we will address those questions we will answer them in the in the Q&A document and the Q&A document
[06:56] will be available in the on the training web page uh within the next days or so for all all of our participants so if we
[07:05] can't answer your question because of the limitations and time don't worry we will answer it in the in the Q&A
[07:13] document okay so let's examine some of the most common uh spectral indices for aquatic applications and uh again keep
[07:22] in mind that because of time constraints we will not go into too much in depth um some of these spect indices also because
[07:30] it's um it's is an is an introductory uh webinar but uh we will nonetheless provide some valuable uh references for
[07:42] those of you who are interested in let's say in the what's what was the arithmetic uh development of this uh
[07:49] indices or uh even uh references some other projects that have applied this or similar indices also for for aquatic
[07:59] application ations either on land Inland water bodies or in coastal areas okay so before we go into the
[08:10] details on some of the spectral indices it's always uh good to review the uh some of the properties of
[08:19] optical properties of water and how water quality affects those uh Optical properties so uh different wavelengths penetrate differently in the water
[08:28] column column and this will influence the amount of information that the sensors obtain so for example wavelengths in the blue
[08:36] region are usually what we're seeing here are usually the ones that uh penetrate deeper into the water column
[08:44] and obviously this is why we see the uh ocean particularly in the open Waters uh blue or dark dark blue uh colored
[08:55] whereas those wavelength longer wavelengths like the Reds uh or even the near Infrareds they penetrate penetrate much less in the
[09:04] water column so the signal received by the sensor either in orbit or Airborne is not only affected by the penetration
[09:12] of light in the water column but also is affected by the components of the atmosphere um and for example some of
[09:21] the light uh is scattered by some of the particles in the atmosphere in the atmosphere it can also be absorbed by
[09:28] some of the particles and this will eventually affect the signal that is received by the sensor and eventually
[09:35] the the the quality of the image that you will uh be able to get get now uh let's keep in mind that when we
[09:45] talk about ocean color in this webinar we are for most times uh referring to what is known as
[09:53] the remote sensing reflectance and the remote sensing reflectance is a function of the inherent Optical properties of
[10:01] the materials in the water so for example absorption by phop planton by noral particles by color dissolve
[10:08] organic matter or cdom um by the water itself and also uh scattering in the in the backward or
[10:20] forward Direction by particles and other materials that are suspended in the water water column uh it also contains a correct
[10:29] correction correction factor denoted here by the letter c to relate what's known as the subsurface uh uh IR Radiance reflectance to what we
[10:40] know as Radiance reflectance now the remote sensor reflectance is the water living Radiance corrected for bidirectional effects of
[10:52] the airc interface and also the the subsurface light field so the light field in the water col
[10:59] and normalized by the downwelling solar Radiance denoted here by Ed uh which is uh the radiance just
[11:09] above the the C Surface now the remote sensory reflectance is the fundamental remote sensing quantity for which most
[11:17] most ocean color products are derivate for example uh chlorop product for chlorophyll partic inorganic carbon light absorption by different components
[11:30] uh suspended sediments among others others now take a moment to look at the diversity of colors in this uh scene
[11:43] that we have here on the right hand side now the inherent Optical properties of the material in the water give the
[11:51] water its characteristic color so inversely uh it is possible to use the color of the water to see we that we see
[11:59] from uh from the imager and in and infer what are the inherent Optical properties of the water to then address some of the
[12:09] some questions like for example what's the chlorophyll concentration what is the clarity of the water or the
[12:16] turbidity of the water um how much sediments are suspended in the in the water column and these are the types of
[12:25] questions that we can relate to some of the spectral indic that we will see uh today now I would like you to take a
[12:36] look uh uh for a moment at the plot on the right here and the remote sensor reflectance that you see here uh
[12:44] correspond to some of those examples that we saw uh in the previous slide for instance chlorophyll water particles or
[12:52] sediments or cdom uh here and uh these are uh atic illustrations of the remote sensory reflectant Spectra so these are
[13:02] not actual uh Spectra but the purpose of this is to show you where some of these components actually reflect uh within
[13:11] the visible and also in the near infrared regions of the electromagnetic spectrum so for instance sediments typically reflect uh within the
[13:20] yellowish to the red and then they also have a peak in the near infrared this is the the the reason what
[13:27] we see when the water is uh is very murky we see it as a maybe brownish or
[13:32] grayish grayish uh color uh in the case of water water uh as I said absorbs uh greatly uh in the Reds and also near
[13:44] infrared so that is that's why it's it mostly uh reflects in the on the blue region of the spectrum and the cdom uh
[13:53] also reflects around the green to um to yellows it's actually some some people call called cdom yellow substance and uh
[14:02] chlorophylls as we know they reflect within the within the green region of the spectrum now in addition to suspended
[14:13] sediments and C disol organic matter or cdom what are some of the other water quality indicators that salite can
[14:20] observe from our vehicle can be used to uh or can be even uh derived uh the some
[14:27] of these include CER temperature uh we mentioned chlorophyll uh of course salinity uh the diffuse attenuation of
[14:37] light uh what's called the KD for KD the vertical attenuation coefficient or in the uh there's some other products that
[14:46] are in particular wavelength such as the as the KD 490 uh so vertical atation coefficient at 490
[14:54] nomers and uh also the uh euphoric depth which is uh uh where the light attenuates to about 1% of the amount
[15:03] that we s the we found in the the water surface now unlike uh land surfaces water itself as I mentioned absorbs uh
[15:17] strongly in the red this is what what we're seeing here in the in the blue in this
[15:23] this graph also in the near infrared and the shortwave infrared regions of the spectrum so even in highly uh turbit
[15:33] Waters uh as in the case of what we call in oceanography uh case two Coastal Waters water is opaque or black in the
[15:42] uh shortwave infrared uh region and this can be used as an advantage when analyzing coastal regions as uh this
[15:49] wavelength then can be used for some atmospheric atmospheric Corrections other water constituents like a cdom like a I said absorb
[16:00] greatly uh uh in the in uh in the blue uh region of the spectrum and uh and also um there uh
[16:12] because of chlorophyll and other photosynthetic pigments absorb strongly in the blue and the red regions they have a they also have a a higher
[16:21] reflectance in the green and also in the uh near infrared so pixels containing floating algae for instance can be
[16:31] difference for from uh let's say water pixels and this is the essence for using some of the spectral indices that we
[16:39] will see today like for instance the floating Aqua floating algae index or fi to monitor the presence or absence or
[16:47] floring algae such as sasum or Kels uh also in coastal Waters but since most of these indices that we will mention today
[16:56] are dedicated to photosynthetic TI targets or chlorophyll uh let's uh first touch briefly on one index that was
[17:05] developed to assess the turbidity in Inland and in coastal uh water bodies and this is what we refer to as
[17:15] the normalized difference turbidity index or ndti which was originally developed by laco at all in in 2007 for water
[17:25] equality assessment uh in this case in b and small Inland water bodies um because they were con they were their focus uh
[17:35] the study areas were small inner water bodies they used the spot five uh level two images so these are uh 10 meter
[17:44] special resolution images um but ndti there's been some uh other attempts of of applying ndti uh to other uh type of images such
[17:56] as those from lanat or or Sentinel as well and uh here is uh the figure on the right here is uh from one
[18:07] of our most recent NASA a uh develop program projects that uh in this uh particular case aim to study the impacts
[18:16] of water quality on the distribution of Eel Grass in the South slooh National esing research uh Reserve in
[18:23] Oro here it was assumed that uh most of the turbidity IND the FL was caused either by sedimentation or by organic
[18:32] debris and uh what we see here is uh how it uh how the turbidity in particular um was uh different uh as we
[18:43] move throughout the throughout the years how it changes through Chang throughout the year and eventually uh they studed
[18:50] on how this impacted the the uh presence or absence of uh e grass in this uh Sou
[18:57] slw in Oregon uh Here's the the the calculation as you see for ndti relatively relatively simple the Red Band uh minus the green
[19:08] uh divided by the red plus the green and then it will give you an index of uh
[19:14] turbidity and like I said here's the uh the reference for for that particular paper now as mentioned on these and
[19:26] other preview uh arset web our chlorophyll is is an indicator of phop planton biomass as it's usually the main
[19:34] uh pigment in in most of these uh uh communities uh it could also be used indirectly to estimate nutrients in the
[19:42] water column as uh typically you know Waters with high chlorophyll concentration are eutrophic or they have they're they have a high concentration
[19:51] of nutrients uh usually especially nitrates or or phosphates now one of the main uh indices for for
[20:07] uh chlorophyll or algae that we will mention is uh also one of the most commonly used is a normaliz difference
[20:14] chlorophyll index or ndci ndci was proposed by Mishra Mishra in in 2012 uh to predict concentrations in
[20:24] this case in turbit waters and uh using the med uh data sets now the overarching objective of the Mishra and Mishra paper
[20:32] was to improve the accuracy of chlorofil retrieval in tbit uh productive Waters using a simple easy easy to
[20:42] implement uh an intuitive kind of similar to ndvi for the vegetation and land uh uh systems and an Universal
[20:50] model so the concept of ndci was developed using uh simulated data however field data sets were acquired
[20:58] for uh the same geographic regions uh and were used to further bate the data uh all the the results from
[21:08] ndci now ndci as you see here in the uh in the slide it uses the remote sensor
[21:17] reflectance at uh two different wavelengths uh 78 and 665 uh nanometers so this uh emulates the uh the Maris um channels and uh
[21:31] similar to other turbit uh productive chlorofil algorithms the index uses the information from uh like I said from the
[21:39] reflectance that is around the 700 and uh Peak which is uh maximally sensitive to the variations in chlorophyll in the
[21:48] water and uh it also uses the information around 665 which is a also generally a assigned to uh the absorption of uh by by
[22:03] chlorophyll chlorophyll now um they selected these two uh different uh band sets uh here to uh to
[22:14] develop ndci and to avoid uh some of the confounding influence that can be brought if you use different wave length
[22:22] or let's say the bluish wavelength uh from the presence of cdom or total supended sediments in the on the on the
[22:29] water reflectant Spectra um also since both both bands are relatively close to each other uh they also assumed that the cdom and so
[22:41] total suspended solids absorption was a similar in magnitude as well now based on the results of this uh
[22:50] study um the uh the the the the the the the combined range of cdom and and and TSS uh absorptions at 665 and
[23:04] and uh and and and 78 uh were approximately equal and they assume that uh it could be
[23:16] negligible now following this uh the simplistic model of ndvi then ndci um it's uh it can be used to have
[23:28] an idea of what is the concentration of chlorophyll in the at the water surface and also to kind of try to predict the
[23:38] presence or absence of uh of photosynthetic organisms in the water column and again here is the reference
[23:47] for the Mishra and Mishra paper Okay this uh like I said n DCI are uh values can be also indicative of
[24:02] regions that are impacted by nutrients um because what it measures is the presence of chlorophyll and chlorophyll
[24:08] is influenced by the amount of nutrients in the water column so in general uh ndci as I said previously will give you
[24:16] an idea of the concentration of phop planton but in relatively clear and shallow water something to to take into
[24:23] account is that this type of index can be influence by the presence of Ben thick vegetation such as seagrass or or
[24:32] green algae or in this case U uh Eel Grass here is the uh some of the results
[24:40] from the same NASA developed project that I mentioned previously on the south slw where we see through time how uh the
[24:49] H chlorophyll behave uh in the slooh and but like I said this this is a particularly shallow area so some of
[24:57] these Sals might or might not be influenced by also the presence of uh of e grass in this case these are areas
[25:04] that are some of these areas were uh you know centimeters or or about a meter or less in
[25:16] depth now as as we have seen in in previous trainings um in the case of Kelps in particular the blades can float
[25:25] in the water so first du to the presence of uh gas field structures and as scalp blades occur at
[25:34] or near the surface of the water indices usually developed for lamp purposes such as such as ndbi can potentially be applied to study
[25:45] the culps uh to estimate the health of this uh magnificent organism especially the ones that are you know
[25:53] floating now the graph on the right here shows data from uh from a paper from shter at
[26:00] all where uh where you can see a mark difference in the reflectance um of an unsubmerged uh kelp
[26:12] so for instance here's the the one that it's uh floating in the water column you see the high reflectance in the near
[26:18] infrared versus the Kelps that it's uh submerge let's say the this one this graph uh on the yellowish
[26:28] where you see that the reflectance in the near infrared is uh very small now notice that even in the first
[26:38] centimeters of water there's practically no signal on the near infrared in this uh some of these uh uh graphs
[26:47] here now another index uh such as the floating alga algae index developed by shaming who and it's was polish in rot
[26:58] sensing of the environment um was can also be applied to this type of uh situations um we will show in a moment
[27:07] uh some details about the floting algae index and it can also be in this case can also be used to map uh uh floating
[27:16] Kelps in the in the water surface now the Fai uh uses the red region of the spectrum and the short wave infrared as
[27:26] we will see and fi was specifically uh developed for mod this data but before we go into the FI we can mention here
[27:36] also that uh here for instance in the in this graph on the right hand uh we are
[27:42] showing how the percentage and this is this is data from K kavana from the UCLA uh we're showing how the percentage
[27:50] of a floating ks in this case can influence the signal received by the sensor in the near infrared region so
[27:58] not only whether it's submerge of not or not but also the percentage of the floating algae within a particular pixel
[28:07] so therefore the spatial resolution of the sensor is another important aspect to consider when using spectral indices
[28:15] to characterize floating vegetation uh in a particular region most most time or also sometimes as the budget allows uh
[28:25] these type of studies are also have a field field component where the percent cover is characterized iny to then to help
[28:34] understand the values that are obtained with the remotely sensed data and also the values that are obtained with with
[28:41] these indices here's a similar data set in this case showing how the signal changes as a floating algae in this case argasm
[28:52] in the Caribbean or in the Atlantic uh are either completely exposed or slightly submerged and how uh as you see here in
[29:03] the left hand uh graph here how it's uh this reflects on the on the near infrared region of the spectrum here you
[29:12] see the the the the big difference here the significant difference here in the reflection uh of the within the near
[29:20] infrared in the in those uh mass of sasum that are uh the ones that are uh emerg so they are at the water Surface
[29:29] versus those that are just below the water surface such as the the the photo that we're seeing here on the right hand
[29:40] side side now some of the sensors that have been used uh for sasum in particular are uh
[29:50] the uh Modis Aqua Modis Terra and beers and uh as a reminder um they provide images with a cross
[30:01] track of about 2,330 kilomet and a special resolution of Kil of 1 kilometer 500 or 250 kilometer depending on the spectral
[30:11] bands for modies and a and a SWAT width of about 3,000 kilometers and a spatial resolution of 750 and 315 uh uh meters
[30:22] depending on the spectral bands for beers now mod this and Bears the the the advantage is that they ensure quasi
[30:31] Global coverage of the earth each day and two of the algal indices that we will mention in a moment the floring
[30:40] alal index and the alternative floting algal index were uh developed with uh particularly with Mod this data Fai uses mod this high resolution
[30:52] spectral bands um and the 250 M but is very sensitive to clouds uh making it difficult to differentiate sasum from
[31:02] clouds and other artifacts now the AFI which is based on the 1 kilometer ocean color spectral bands is uh
[31:11] computed from the rally uh corrected reflectance using the SAS but that we have covered in other uh in other
[31:19] webinars and that it's uh it's already available from NASA now let's let's talk a bit about both uh indices let's start with the
[31:30] floing algae uh index here's the the equation for the for the FI note that it uses the reflectance in
[31:41] the red the near infrared and also in the uh shortwave infrared region uh of the spectrum and it's kind of similar to
[31:51] other indices or methods used for chlorophyll such as um you may be familiarized with um what is known as
[31:59] the fluorescent line height or FLL FLH uh proposed by uh leier and naot in in 1996 um or the Maris maximum chlorophyll
[32:12] index uh proposed by by go all in in 2005 we know we not cover those uh here
[32:19] today because of uh the the uh lack of time but uh the Fai U basically uses a a
[32:28] different combination of bands now also note that for fi uh Cham Ming who who was a researcher the a colleague that
[32:37] developed this uh this in index uh recommends using the the the 1240 nanometer uh SAR band of Modis instead
[32:49] of the uh, 1640 or 2130 nanometer bands but for clear atmospheres the reason is that for Clear
[32:59] atmospheres the 1240 band leads to a lower Baseline and a higher Fai values uh which are closer to the truth
[33:10] True True Values also uh the 1640 and 2130 nanometer bands have lower s sensitives therefore they have they have a higher
[33:21] no noise nonetheless um in the absence of 1240 nanometer band uh he also recommends as an alternative using the the 1640
[33:33] nanometer band uh for the for the Su region now here's an example of the application of the FEI to detect sasum
[33:44] with with Mod Aqua data in this case we can see clearly how the sasum mats are shown in the image of the of the left
[33:53] here and how even with this uh multi spectral data set we can see the big difference in the remote sensitive
[34:01] reflectance especially uh in the near infrared uh region of the spectrum here uh Hugh also compared uh the FI uh
[34:18] efficiency for detecting uh flooring algae to other lamb based algorithms such as the ndbi and also the has
[34:27] vegetation index or ebi and uh what what uh what Charming uh found was that uh in this case FAA
[34:37] values appear to be more stable meaning that the uh the standard deviation was uh smaller uh than those of ndvi and evi
[34:48] over ALG and also over water pixels now here's data provided by some of our colleagues from the University of
[34:58] Puerto Rico the bioptical orography lab where they appli the Fai to detect sasum mats in the southwest Puerto Rico at a
[35:08] much higher spatial resolution you in this case using Sentinel data at 10 meter uh uh pixel size they applied a
[35:16] land mask which is what you're seeing here in in the in in in black and the zoom image on the on the
[35:25] right here shows a chronic accumulation of sasum close or to the Shoreline here now the up colleagues uh in particular
[35:34] doors Roy Amon and Willian Hernandez they're using Fai in combination with a timelapse photography to monitor the
[35:43] accumulation of sargassum floting mats each year and how this impacts the marine life at the lapala natural uh
[35:52] Reserve in Southwest Puerto Rico now one difficulty of the FI is that there is not effective uh Cloud masking
[36:07] method it doesn't have an effective Cloud masking method and therefore usually sasm slicks and clouds are represented by high uh Fai values now to
[36:19] overcome this difficulty uh the alternate floing algae index or AFI was developed by Juan and chaming who in in
[36:29] 2016 and the AFI includes uh Cloud masking through different band band combinations here three spectral bands the the red 6007 67 nanometers near
[36:45] infrared and 748 nanometers and the S uh in this case at 869 nanometers were used and but also note that although 6 869
[36:57] 69 nanometers is within the near infrared spectral range for Simplicity and consistency this is still term uh uh
[37:06] s or or shortwave infrared by the authors now another important aspect is that while the AFA has a lower Spectra
[37:15] resolution it was meant for 1 kilometer pixels uh compared to the 250 pixels of fi um the 1 kilm B uh use for fi has a
[37:28] much higher signal to noise ratios um with the cloud masking addition it makes the resulting imagery simple to
[37:34] interpret by anyone with a leader to no remote sensing experience now here's an application of the AFA to a large portion of the
[37:47] Caribbean and we can see clearly the Aral of sasum here uh in the image here on the uh
[37:56] lower part of the image and also towards the southern uh Caribbean Sea here in the just south of Puerto Rico and uh and
[38:08] I'm also showing here the I want to mention that I'm showing here the website uh the link to the website for
[38:16] the sasum watch uh system where you may obtain uh regular updates on the presence and and absence of sasum you
[38:25] can subscribe to this uh website uh get into their mailing list um uh you will even even get uh monthly reports on the
[38:35] presence or absence of sasum uh through the Caribbean and also uh the Gulf of Mexico and the
[38:43] Atlantic here is the the website for the sasum uh watch system and uh so we encourage our participants
[38:52] to those especially interested in sarcasm or monitoring sasm to connect and to explore the website and uh
[39:02] there's a lot of valuable uh information there uh including papers and uh other uh data products uh so uh
[39:13] please uh feel free to uh go into the website and and explore all the data and information that it's uh ready available
[39:23] to to anyone who's uh interested in this also we want to remind our participants that two other uh available tools are
[39:34] the SAS and snap also uh software packages uh we included here the links to two of our previous uh aret webinars
[39:47] in this case where we did we specifically did uh demonstrations of uh how to obtain uh how to download the data from the from
[39:58] sidas and how to process the data for chlorophyll and uh I think suspended sediments and uh and other uh ocean
[40:07] color products as well so uh if you're interested more more interested in in this uh topic please feel free to uh
[40:15] review those uh webinars which uh uh we did uh with the last year or so so now another in IND is the what is known
[40:28] as the normalized defense aquatic vegetation index or n Davi this was introduced uh by V atol in in 2014 and
[40:37] uh the ndvi was designed to use the lza Thematic M maatic matter and enhanced magmatic matter bands one which is the
[40:48] the blue one band Center at 480 nanometers and uh also band four the near infrared one Center and at
[40:57] 830 uh nanometers and here's the the equation for uh for these and uh and also the the paper uh for those of you
[41:08] interested in in in getting a little bit more details on the on the development the algorithm development of this uh
[41:14] this uh index now the idea behind using the blue BN that it's uh which penetrates deeper into the water column
[41:23] and the near infrared um was that has very little penetration in the water column um and then Ben thi
[41:32] aquarium vegetation can be easily distinguish from other ventic components such as sand M and others here's some data from another uh
[41:46] recent NASA develop project uh where they explore different indices to follow potential correlations with particular en enironmental factors in this case uh
[41:58] there's a unique like I said a unique band combination of near infrared and blue uh and this allows to analyze uh
[42:09] the presence or absence of seagrasses um the photosynthetic organisms as I said they reflect a large am large amount in the near infrared so
[42:19] the near infrared band and the blue band collectively allow for The Aquatic vegetation to be assessed particularly
[42:28] in very shallow uh clear waters now uh this figure uh looks at n Davi in the chandelier Island from the
[42:41] same project that I mentioned before um Five Points were selected across the islands were that's what we're seeing
[42:49] here on the left hand side and their ND distribution was compared from 1984 to about about 2021 the left hand panel here shows the
[43:01] true color uh and the AA imagery in the the spring uh of uh of of 1984 and also
[43:11] then the right hand and the on the and in in 2021 now as we move through the center
[43:18] or the Panner here which this uh this uh time series uh analysis it's very interesting to see that the thei has
[43:27] shifted in relation to many different uh hurricanes and catastrophic events uh that occur within this about 36 years um time
[43:40] period there's uh some of the some of the main hurricanes or or storms that went by the chandelier Islands or even
[43:48] some uh man-made uh uh catastrophes such as uh the old spill uh in the uh in the
[43:57] Gulf of Mexico now these images here show the the ndvi in the summer months of uh particular especially in 200 to
[44:12] 2020 and the highest Val values on the index are shown in green and this occurs very occur very close to the uh very
[44:21] very close to the islands each year so the images also exhibit the change es in land cover seen uh in the previous
[44:29] figure the low land cover in the 2010 image after HK and Katrina uh but before the sunburn placement is particularly uh
[44:41] striking now this images suggest that the decrease in N Davi Trends correspond to to the loss of uh seag grasses
[44:49] inmediate proximity to the islands when the when land area uh disappears now uh interestingly uh some regions relatively
[44:59] far from the island have high n daavi values what we're seeing out here especially in the in the right hand
[45:09] figure and uh so this in this these regions we know that they they don't contain sea grasses and because sea
[45:16] grasses T to occur in in Shallow areas so this might be artifacts related to the with the calculation of the ND AI
[45:25] but is the index can be used as a proxy for estimating where the SE grasses were located through time in the this case in
[45:34] the chandelier Islands uh in the Southern Louisiana now here uh the team compare the the index uh again acting as a proxy
[45:49] for for submer aquatic vegetation Health uh for the entire chandelier Island system uh to um major uh uh labor on the environment and
[46:01] the chandelier sound the water discharg from the Mississippi River now River runoff and precipitation which contributes to River to
[46:11] contributes to the to the decrease in water water quality quality um also have has have an effect on in
[46:19] the water salinity as well and uh and historically it seems that the submer aquatic aquatic vegetation uh Fair better in lower
[46:29] salinity or fresher water environment and this has major implications for the ecosystem changes that will result from
[46:37] the uh installation of more River diversion uh projects in the Lower Mississippi River in the next uh decades
[46:44] or so so now the the apparent uh uh visible wavelength wavelength our a aw avw uh index is a new algorithm that was uh
[47:05] just developed a couple of years ago by uh Ryan balder muing uh and his team and it's assigned to present represent a
[47:15] one-dimensional geophysical metric of color which is uh um which is in inherently correlated to the spectral shape
[47:26] shape now in this case the avws output is in nanometers and it analyzes the remote sensor reflectance
[47:35] in terms of uh spatial and temporal Trends and variability and it is also designed to uh to be used with both
[47:45] multi sets now therefore this type of index can be applied to even upcoming ocean color satellite missions such as a
[47:57] planton aerosol Cloud on ocean ecosystem or Pace Mission which is coming up next year and uh even the the designat
[48:07] observable of uh s surface biology and geology and here's how it looks like the uh the deration of the equation and then
[48:18] how it behaves uh and you can see how how it models the the normaliz remote transing reflectant uh with different wavelengths
[48:29] especially within the within the uh the red the the green region of the spectrum about 500 or so nanometers here's a
[48:38] paper of B mu R all for those uh interested in the in the looking at the derivation of this particular uh
[48:48] index now since the avw uses the full spectral information in the visible range range um although uh you can also use other
[48:59] other wavelengths such as uh parts of the uh ultraviolet or even the near infrared and as opposed to to to some of
[49:09] those already uh describe indices ABW becomes relatively intuitive and easy to visualize when describing the these types of water see here how the the
[49:23] graphs on the on the right hand side Cor responds the images to the the process images from hio in this case so this is
[49:30] hypers spectal data and uh and how it uh behaves uh as it moves throughout the images now uh the Q wi or the the
[49:48] quality water index polinomial it's a it's a quality control index developed for the uh avw that can be rapidly
[49:58] implemented into ocean color processing chains chains uh providing a lb of uncertainty about a retrieve spectrum and flag some uh data sets that might be
[50:10] questionable or unusual Spectra for for further further analysis now here hio images were quickly screened to uh identify pixels
[50:21] conforming to The Institute based spectral Behavior and uh aret uh we're not going to go into much details about the avw or QB
[50:33] but arset is planning a pce dedicated webinar in the near future and we will most likely go into much more details
[50:42] about the ABW and this uh quality control index uh so stay tuned for that okay now uh we're going to see a
[50:54] demo of one of our colleagues uh Britney bodri on how to calculate some of these indices in the Google Earth enging so
[51:04] take it away Britney thank you Juan yeah let's begin the Google Earth engine demonstration here today so this is part two focusing
[51:18] on the Aquatic applications and here we will specifically be focusing on calculating ndci also known as the
[51:26] normalized difference chlorophyll index and we will be using Sentinel 2 so we're going to start here at the beginning of
[51:34] the script starting on line 12 where similar to part one we're just creating a title for the map window this little
[51:43] nice title right here part two calculating calculating ndci so we're creating this variable title on line 13 we're just creating
[51:52] that title on line 14 part two we're changing the font weight we're selecting the font size and then just the position
[52:00] as the top center of our map area down below as we move this up and down it's
[52:04] always just going to stay at the very top in the center which is nice and then we're moving on to Define
[52:11] our region of Interest our Roi very similar to part one we're just creating the variable Roi and we are selecting
[52:19] the geometry which I pre-wed Square over our region of interest uh and again if you want to
[52:30] change the geometry yourself you can always just change it from what I have here as geometry you can change to a
[52:39] different geometry the name of the asset you might want to upload yourself any of that you can change right here on line
[52:44] 23 and throughout the rest of the code it should just apply to the r Roi variable and you don't have to change it
[52:52] all throughout your code which is very nice and useful right and then here on line 25 we are
[52:59] setting the ROI as our map Center and setting the level of Zoom to 10 so right when we hit run on the code it's just
[53:08] going to zoom right to this area and soad starting from a world wide view which're just zooming in right
[53:14] here so let's get to the uh fun part in part one which is defining our study area and applying a cloud mask to
[53:25] Sentinel 2 Data so you might remember this section from part one when we worked with Sentinel 2 we're just
[53:32] creating that same Cloud mask that we did last time we're using the function mask S2 clouds we're just selecting the
[53:40] QA 60 band and we are selecting the clouds and Cirrus bit masks and we are setting them
[53:48] to zero again we're just indicating clear conditions in all of the pixels that we're working with we want nice
[53:54] cloud-free imagery for all of our calculations and visualizations that we're going to be working with and so
[54:00] that is our function here mask S2 clouds and then here online 52 we are applying that cloud mask to The Sentinel
[54:10] 2 collection with our variable bar S2 and I'm just going to copy sort of this identification here I'm going to paste
[54:20] it up here it's the Sentinel 2 that's what we're working with today and you can read all about it in the description
[54:28] and here are the bands again of course we're going to be referring back to these bands as we start talking about
[54:33] calculating the ndci and you can also always look at the image properties and anything else that you might want to
[54:39] learn about Sentinal T and here we are filtering by date so the date that we're using today is
[54:47] September in 2021 I picked this date because there's an alal Bloom over the place that we're looking at at and then
[54:56] we are filtering by the bounds which is our region of Interest our our Roi and then we are again just filtering
[55:05] for Less cloudy pixels and then applying that cloud mask the mask S2 clouds and then we are taking the median
[55:13] values of these for our image which brings me to part two in which we will calculate the ndci over
[55:22] Pyramid Lake Nevada with Sentinel 2 and we're going to add it as a layer to the map so we have this variable Lake and
[55:31] we're taking our Sentinel 2 imagery that we made right above we're just clipping it to that region of interest that Roi
[55:38] in this case are nice geometry we're just clipping that imagery and we're calling it Lake and then from here we are going to
[55:45] calculate the normalized difference chlorophyll index and so the formula for ndci is the red Edge one band minus red
[55:55] divided by the red Edge one band plus the Red Band so what is red Edge 1 and
[56:02] what is red what are those bands within Sentinel 2 if we go and look here we come across red and that's
[56:11] band four known as B4 and then here red Edge one that is the fifth band known as
[56:20] B5 B5 so we're using that same do normalized difference function that we used in the previous uh section that we used in part
[56:31] one because it does follow that same you know formula of first band minus second band divided by first band plus second
[56:41] band so we can continue to use normalized difference for this equation as well with band five and band
[56:50] four so with that being said now that that it's calculated right here in line 71 with variable S2 ndci we're going to
[57:00] move on to uh line 74 where we will set those visual parameters our ndci Vis right now are just the negative 1:1 in
[57:10] the pallet is white to Blue um with blue indicating higher conditions of chlorophyll and we are changing those
[57:18] Min and Max values later once we get them in the code similar to part one but for right now the values are just NE 1:1
[57:25] for the entire ndci and then we add that map to our layer uh here on line 77 using map. add
[57:35] layer we're just adding The Sentinel 2 ndci with those visualizations that we set and we're naming it senal to ndci
[57:44] and you can see that that's our layer right right here and here it is and you can see you
[57:50] know here's Pyramid Lake and you can kind of see the difference in vegetation right you can start to see some of this
[57:56] alal Bloom where it's darker regions here lighter regions of course the area surrounding it it's not water so it's
[58:05] not too applicable to our our region we're really here to focus on the lake but again it's it's a little hard to
[58:11] tell things are very very standard blue very uniform blue and it's because we are using ne1 and one in our visual
[58:20] parameters parameters so here we're going to look at what the actual minimum and maximum values are in
[58:27] the data set itself and we're going to do that on line 80 by using the min max
[58:32] function to print those values instead of -1 it's 0.329 and instead of one the maximum value is
[58:46] 0.622 so let's go back to earlier in our code line 74 here we're going to take the minimum value
[58:55] now I'm just going to copy and paste that instead of1 the actual minimum value here I'm going to do the same thing for the
[59:04] maximum just going to take take 0.622 and paste that right and so now I'm going to hit
[59:14] run again and we're going to see the value here change to be a little bit more uh visually appealing in terms of
[59:22] The Wider change in white to Blue for the the Minimax so it should be a little bit
[59:28] easier to spot at least I think so here I feel like I can see the difference in ndci
[59:36] values way better I can really see those dark areas where that that bloom is way better than I could before when it was
[59:45] negative 1 to one you can really see the full change in the areas with really intense uh chlorophyll here versus the
[59:53] the lighter regions which have Less on the surface surface so that's the ndci calculation that's the end of the script
[1:00:06] so with that being said we can go back to onean to complete our presentation here um thanks
[1:00:16] onean well thanks so much Britney that was super interesting now let's uh summarize some of the main topics that
[1:00:24] uh we covered today uh as we saw there's a number of simple spectral indices that have been
[1:00:32] developed uh for for aquatic applications most of these are for multi-spectral uh data sets um also particular wavelengths especially those
[1:00:43] in the near infrared and short wave infrared they do not penetrate much into the water column and these this will
[1:00:51] eventually influence the type of index that you use to do to get some uh some idea of the presence of uh of aquatic
[1:01:00] vegetation in your particular area of Interest now it is important to make sure the that we do we do use an
[1:01:08] appropriate atmospheric correction algorithm uh to the we have applied the the the correct one to the imagery to
[1:01:15] the pre pre-processing before applying these uh spectral indices and particularly for aquatic targets this is this is very
[1:01:26] important um some indices are specific to particular sensors whereas others as what we just saw in the case of ABW can
[1:01:36] be applied to multiple sensors and uh new algorithms or indices maybe even applic applicable to multispectral and hyperspectral data
[1:01:48] sets Okay so next week we will have the the final part of this uh three-part webinar series um this next week we will
[1:01:58] concentrate on landbased uh spectral indices such as the enhanced vegetation index or evi the soil adjusted vegetation index or or or Savi or and
[1:02:10] also the normalized burn Ratio or NBR and and similarly to today we will have a short demos on uh how to apply
[1:02:20] some of these indices in uh Google ref enging then as a reminder uh there's one homework that will uh be available on
[1:02:29] November 9th and uh you can access it through the uh webinar's uh web page which is shown here on the slide and the
[1:02:39] answers will be you can submit the answers via Google forms it's uh very simple uh homework the important thing
[1:02:47] is to submit those uh on on or before November 23rd which is the deadline for for those and like I mentioned uh at the
[1:02:57] beginning of the webinar if you attended all three sessions and completed the homework eventually you will receive
[1:03:03] your certificate of completion again here's the contact info for Amber or team lead myself Britney and sativa feel free to uh send us an
[1:03:15] email if you have uh any further questions or any questions that might come up after the webinar or uh so feel
[1:03:23] free to you know send an email also I like to remind you that to visit the arset website where you can find not
[1:03:30] only the upcoming webinars but also you can search on previous webinars past webinars and uh have all the materials
[1:03:38] available to you uh for your benefit follow us also in Twitter there's an aret YouTube uh Channel as well and uh
[1:03:48] for those interested in other uh capacity building programs uh we encourage you to visit uh the websites
[1:03:54] of our two sister programs develop uh which is a capacity building program uh for undergrad and gr students and also
[1:04:04] uh Ser which is uh deals more with our uh International collaborations so with that thank you very much again for joining us today and
[1:04:16] let's go into the Q&A okay let's see the uh if we can share the Q&A there um just want to make
[1:04:26] sure that uh the people can hear me if uh BR me if you can confirm that yes I can okay perfect all right uh
[1:04:39] again thanks thanks to everyone to for for joining us today we're going to go into some of the uh uh questions that we
[1:04:46] have received over the uh over this past hour uh but again if if by any chance I
[1:04:53] we we did received quite a number of questions I'm pretty sure that we're not going to be covering most of most of
[1:04:58] them at least uh now live but we will answer them in the in the final Q&A document that uh as always our
[1:05:06] participants will have will have H access to it so let's go into the first one I think the first one is proba for
[1:05:11] you Britney uh how can we plot a Time series uh illustrating the trend seasonality and anomalies for ndbi and a
[1:05:20] trend analysis of ndbi using Earth engine yeah definitely um so there's prob a way to do that within
[1:05:38] Google Earth engine um at least the well both the ja JavaScript and the python version um we were using the JavaScript
[1:05:45] version today and I included a training and sort of like a guide that Google Earth engine itself series model use is actually
[1:06:00] using nvi um and calculating seasonality and Trends um right there in the code so I linked that training that
[1:06:15] anyone I think we just lost you there at the end um but uh oh yeah there's a there's some
[1:06:23] uh links to to actually to our previous Earth Earth engine uh training that we did uh some
[1:06:31] time ago and uh there's a lot of information there that uh that uh refers to to ndbi in
[1:06:39] particular okay question two is about salinity and uh we do get this question quite uh quite often in our Coastal or
[1:06:49] water related uh trainings if there are sensors that can be used or or obviously as the as the person explains in the in
[1:06:59] the in the question there the optical sensors they do not measure serinity uh so unfortunately there are
[1:07:05] not that many uh that can retrieve this this parameter I included there a paper uh was from around 2010 or so from from
[1:07:15] Victor clas um on the remote sensing assist salinity and uh Victor explains uh on the specifically on the use of
[1:07:27] microwaves radiometers uh are airborne based microwave radiometers for uh for measuring uh salinity uh also there was the Aquarius
[1:07:38] Mission which was a partnership between NASA and konai the Argentinian space agency and and that was in orbit for
[1:07:46] about four years also until 2015 and and I did included the the the physical sonography uh DC from NASA uh a website
[1:07:58] there where uh people interested in this can can uh probably retrieve some of the data that was collected during during
[1:08:06] those uh times I'm not sure uh if if it covered the whole globe or if it was
[1:08:11] specifical for some regions but uh I would encourage you our our participants uh to to take a look at
[1:08:19] this the uh there's one about the different uh uh explaining the differences between remote sensory reflectance water living reflectance
[1:08:29] probably water living Radiance maybe what the person is refering to but uh normalized water living reflectance and
[1:08:36] uh and the says that he or she found the equations on how they are derived but uh
[1:08:46] but they're too complicated and if you can explain the differences so in in in Broad terms uh usually the remote
[1:08:52] sensory reflectance is used for most of these uh calculations water Li Radiance is used to calculate the remote sensory
[1:08:59] reflectance and uh and the normaliz water living reflectance is a reflectance corrected for atmospheric effects and this is usually done in the
[1:09:08] field uh we usually do this in the field um by using spectrometers where you collect data spectral data from the
[1:09:16] water and also spectral data from what's called a spectral diffused surface panel that has a uniform surface usually
[1:09:24] around it depends on on the on the percent of white but usually what what we prefer to use is the the really
[1:09:31] bright ones the about 98% uh White and then you do the calculations to to normalize the uh for this what I would
[1:09:41] recommend to the definitely to our participant who who who uh put this question into the Q&A chat is to refer
[1:09:49] to to me one of the one of the one of the best uh references out there on on
[1:09:56] anything related to Aquatic uh Optics which is the ctis mobbly uh ocean Optics uh Web book which I included the for
[1:10:06] which I included the link here in the uh in the Q&A uh document uh Mo goes into
[1:10:13] all the different details about uh each of these different parameters how they are calculated why and the geometry that
[1:10:22] is used so yeah all of that so please refer to Mist book I I'm constantly referring to to most Mist um
[1:10:31] book whenever I when when I have the need uh question four it's about ndti it appli about a global scale and there was
[1:10:41] there another question that that also I think I also saw in the uh uh after this um also related to ndti and the
[1:10:50] applicability on global scales or is for the region so ndta was originally developed um by LOL for for small pawns
[1:11:00] actually um or Inland Waters uh aquatic bodies um especially with in their case they use uh spot data 10 meters uh data
[1:11:11] so high special resolution data with develop with the with the the project that I mentioned during the presentation
[1:11:19] we we applied the similar ndti uh um to but using Lan on Sentinel data sets uh just to see if if it could detect uh you
[1:11:32] know turbidity in in some of of these water bodies in the in this case in the in the western region of the US um the
[1:11:40] applicability I will say uh of the for global data will depend on the specific band of the sensor and as always if the
[1:11:49] pixel is uh too co uh or if it's close to land mass then it might be influenced by lamp
[1:11:56] features so those make sure that those pixels are not taken into account when you do the the
[1:12:04] analysis uh number five what causes the turbidity in pawns and legs and I would say ponds lakes rivers Coastal Waters
[1:12:13] same same uh applicability uh usually these Inland water bodies or even Coastal water bodies in the case of uh of coastal uh
[1:12:24] are affected mostly by Watershed related uh issues such as utr fication and sedimentation most likely as a result of
[1:12:34] land uses uh changes in land use and land cover and uh and we've done several several uh arset trainings on Coastal
[1:12:42] ecosystems and uh and uh also on water quality and uh there's a lot of uh details that we cover specifically on
[1:12:53] the on parameters such as turbidity uh chlorophyll and others the and how these are affected by by different either
[1:13:01] climatic or anthropogenic conditions okay number six uh there what sensors allow me to for the to know for
[1:13:11] the temperature temperature and salinity of the water again for salinity as I said you know we we already covered some
[1:13:18] of this in in question two above for temp temperatures and there's several satellite missions that have been
[1:13:24] assessing temperature specifically if you're referring to C surface temperature uh for many years uh included there the link for Modis um
[1:13:35] that shows uh particular this that that link is for all the different products available for for modies landbased or or
[1:13:44] or or waterbased uh projects product similarly uh we included the link here for for beers and uh also a recent paper from I
[1:13:55] think it was last year 2022 uh on the use of lansa data for C first uh temperature um uh that the participant
[1:14:06] can refer to and uh this is really uh up to-date uh data sets um we also I also want to mention
[1:14:15] that uh that previously was uh two years ago we did an arset training on on on on
[1:14:22] the use of uh sidas in particular and the transition the transition from Modis to be uh uh datas now that mod is uh
[1:14:32] getting into this is uh the final years uh so also please refer to that uh arset webinar uh that is that one specifically
[1:14:42] to of on the use of C of SAS on how for uh SAS and with Modis and ver data and
[1:14:49] to calculate different parameters I think we don't we included uh temperature there uh as well I know that
[1:14:55] we covered uh I think turbidity and chlorophyll maybe temperature but but it's the same same methodology okay
[1:15:04] uh is the ndci useful to predict accurate accurate concentration conation is more of a ranger than a precise estimator so many
[1:15:14] of these indices including ndci are used to get an idea of the concentrations of of the different
[1:15:20] parameters uh such as choro filling in this case so so not necessarily you know really uh spot on accurate concentration
[1:15:29] but so just to to get an idea yet this results can be correlated with U or are
[1:15:34] usually correlated with Institute based uh data or concentrations that are calculated with other more robust algorithms uh to have a a much better
[1:15:44] idea of the efficiency of the index to to calculate calculate some of these uh parameters um number eight how similar
[1:15:55] the band centers and bandwidth need to be between uh different satellite sensors to be able to derive same
[1:16:00] indices for example the 78 and 665 were initially proposed for ndci what if I wanted to derive this index with a
[1:16:10] different satellite sensor is slightly different different bands uh this is a very good question and indeed many many of these indices
[1:16:17] are have specific bang ratios um others when you look into the literator more for instance uh refer to General such as
[1:16:27] green red blue n uh and uh could potentially be applied to different uh data setes data sets I
[1:16:37] would always refer to the to the original paper um of the of the index and how it was developed and then uh see
[1:16:47] if it is or not applicable to uh to other uh satellite sensors number nine and we'll probably
[1:16:55] go into maybe one or two more uh just for the for the because of the time limitations number nine if using a cell
[1:17:02] phone camera with LGB is it possible to determine the health status of sub aquatic vitation the post po poas
[1:17:11] poasa uh no an LGB camera is is very limited and that's spectral capabilities obviously you're just dealing with
[1:17:20] really really broad you know red green blue uh pands there um nonetheless I do want to mention that uh that there is a
[1:17:33] a citizen science based um app out there called hydrocolor um it was develop at the University of Maine and uh and it's free
[1:17:46] it's really available for for Androids and for uh for uh iPhones and we included the link here hydrocol what
[1:17:56] what it does is that it's it uses so again it's it's for citizen science so it's not super accurate but it's a will
[1:18:03] give you an idea on the not on the health of the super much aquatic vegetation but on on some parameters
[1:18:12] like turbidity or or chlorophyll in the water um what it will do is that you will need a what's call an an an
[1:18:21] 18% um photograph first card great card that you can buy through maybe Amazon or or some other site and uh and then you
[1:18:32] take a with your phone you take a photo at a specific angle you uh and the and
[1:18:37] the the the app comes with a with a compass and uh and uh just uh and also
[1:18:44] uh another uh feature to let you know the specific angle where you you need to point your your cell phone at uh you
[1:18:51] take a photo of the of the water the sky and also of the this uh reflectance panel or reflectance card uh 18% and
[1:19:03] then it calculates some of those uh water quality parameters uh so uh yeah it's uh it's a it's PR nice particularly
[1:19:12] for for citizen science okay number 10 does SE seasonality winter summer affect the tation of T bidity and chlorophyll of
[1:19:22] course and probably most uh aquatic based parameters parameters seasonality will affect the presence and the also the the presence and the
[1:19:32] detection of of these so for instance rainy years or Seasons versus throughout years or seasons will show different
[1:19:40] values of course um the uh whether if if you're looking at a coastal system uh it will be influenced by whenever there's a
[1:19:49] there is a a a rainy event and you we have you know a lot of uh sedimentation
[1:19:55] getting into the water uh ALS also as always if you're using optical data the presence of clouds will also affect the
[1:20:03] the detection as well um clouds not only clouds but also Cloud shadows and and others um okay uh will theci work for
[1:20:15] Waters that are not tbit uh and uh probably will stay with this one that's the last one for now uh yes can work now
[1:20:24] the the researcher will have to be careful in terms of being sure that there's no influence of the bottom
[1:20:29] reflectance or uh the submerged aquatic vegetation uh in the water if if you're if you're dealing with Waters that are
[1:20:38] uh relatively clear let's say in coastal Waters kind of like Cora reefs uh Seas type of waters those are uh usually very
[1:20:47] clear and you will have an influence of the bottom reflectance there so most likely when you do the calculation of
[1:20:53] the ndci what you will be be getting a uh an artifact there that is created by the presence of of some of these uh vtic
[1:21:05] features uh in in some of those sites so something to to consider when when using ndci specifically for Waters that are
[1:21:13] not uh that tbid okay um so we'll stay here just again for because of the limitations of
[1:21:21] time but we will make sure that we will uh go over this uh Q&A document and uh
[1:21:27] answer all of these uh and and then you will have access to the to specifically to the uh
[1:21:36] to the uh uh the the final document um stay tuned again for next week for the part three of this uh webinar series and
[1:21:46] as always uh feel free to send us an email um if there's anything in particular uh about this webinar that
[1:21:53] You' like to to know so thanks again and stay tuned for part three take care
