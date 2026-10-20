# Introduction to Interferometric SAR (InSAR)

`https://www.youtube.com/watch?v=egP0aoGXHDs` · id 255 · 2:06:07 · module 5 — An Introduction to Synthetic Aperture Radar (SAR) and Its Applications

[00:01] hello everyone and welcome to the second session of this arset training titled introduction to synthetic aperture radar
[00:09] and its applications I'm Dr Erica podest I'm a scientist at NASA's jet propulsion laboratory and also an instructor with
[00:17] the arset program today's session will be an introduction to insar interferometric SAR which will be delivered by invited expert Dr Eric
[00:27] Fielding who's also a scientist at NAS jet propulsion laboratory prior knowledge for today's session is the basics of synthetic
[00:40] aperture radar and SAR processing and data analysis and here's the training outline the third and last session of this
[00:51] webinar series will be next Wednesday uh November 20th and that will be an overview of SAR data sources and
[00:59] tools tools I'd like to remind everyone that there is a homework associated with this webinar series it will open on the last
[01:08] day of the series so that's on November 20th and the due date will be on December 4th a certificate of completion
[01:16] will be awarded to those participants who attend all three of the live sessions and complete the homework
[01:23] assignment by the due date how to ask questions please write your questions in the questions box which is at the bottom right you'll have
[01:33] there'll be three points click on that and there'll be a popup menu select questions and write your questions in
[01:41] that box and we will address your questions at the end of this session feel free to answer your questions as we
[01:49] go along and we'll try to get to all of your questions during the Q&A session the remaining questions that we cannot
[01:58] answer we will answer them in the Q&A document which we will post to the training website in about a
[02:10] week so now let's get started with this uh session introduction to insar the learning objectives for today's session are the following
[02:23] identify key concepts of the physics of SAR SAR interferometry recognize what SAR interferometric phase says about the
[02:33] land land surface identify the data processing steps needed to generate a sar interferogram be able to interpret the
[02:43] information content in SAR interferometric images to measure deformation and finally identify application areas in which interferometric SAR is
[02:55] useful Dr Eric Fielding is a research scientist at NASA's jet propulsion laboratory he's a geophysicist and expert in the use of radar
[03:05] interferometry for studying tectonic movements landslides and other phenomena Dr feling is also part of the nysar science team which is a satellite radar
[03:15] mission that will be launched in early 2025 he is a globally recognized expert in the use of insar and has supported
[03:24] nearly all of the insar sessions that arset has offered and I believe this is fourth or fifth participation in an rset
[03:32] training I'm extremely grateful for his involvement as a guest instructor in this training thank you very much and
[03:40] welcome back Dr Fielding well thank you Erica for uh introducing this uh training today uh I'll be talking about SAR
[03:54] andrometer and starting off with a discussion of the Bas some of the B basic theory about SAR
[04:03] deometry uh the previous uh sessions uh Eric has described what uh synthetic aperture radar or SAR is I won't cover
[04:13] that um I hope that you've seen her presentation to understand what SAR is and what I'm going to be talking about
[04:21] is the uh method of interferometry that uses the uh coherent nature of the uh SAR SAR images to uh be able to make
[04:37] measurements are very small uh displacements of the ground surface so uh over here on the on the left here uh we have
[04:52] U the radar beam coming in as shown by this line uh we think about it as a a a wave that's propagating with a a a
[05:06] linear phase front uh and that phase uh radar uh incoming radar beam signal uh interacts with a number of objects that
[05:18] are within uh a radar uh resolution element uh which is the radar pixel uh and then so uh on the left is one one
[05:33] pixel in the image and another on the right is another pixel you can see that the the the things that reflect the
[05:38] radar with inside inside that pixel are in different locations in every in every pixel and that's um means that when we add together the
[05:52] phase of the the return reflected beam from each one of these objects in within the pixel we get a a total phase that's
[06:04] uh ends up being um a a complicated sum of all the internal the things inside the pixel um
[06:14] and so uh that's the phase that's due to the pixel or the scatterers that are within the pixel and then there's
[06:22] another part of the phase that's the range or the the total distance between uh the satellite antenna and the ground
[06:32] surface and that's the range phase so um we do uh so there's actually millions of cycles of the radar
[06:44] um uh radar signal uh in the hundreds of kilometers of um between the the radar in space and and the ground uh so we
[06:56] can't actually count the total number of of Cycles um so that is one of the uh things to
[07:03] remember with SAR and deometry is that we can't um uh we don't know the exact uh distance to the ground we know but by
[07:12] uh taking U the interferometric difference uh we're going to be able to uh tell changes in the distance even if
[07:22] we don't know the total distance exactly exactly um and because this uh this wave is repeating then uh we we
[07:36] only only um we we we measure the phase of the signal which is where it is in this uh
[07:43] up and down curve uh and that'll be important uh later we just don't know how many times the the curve has gone up
[07:53] and down between the satellite and the ground ground surface so uh the phase that we measure is U from one the key thing is that
[08:06] we're going to use two different images two different radar images either taken from two different antennas at the same
[08:12] time or the same antenna at two different times uh and uh this these equations work for both of those
[08:23] situations uh we have this uh term that depends on the distance the row here is the the distance um and that's divided by the
[08:34] radar wavelength o o 4 pi over the radar wavelength that's the uh total uh delay the radar propagation from the
[08:47] satellite antenna to the ground and then back up to the satellite then there's these other constants which are due to
[08:53] that distribution of the scatterers within that pixel and then there's some amount of noise here the n one for for
[09:04] image one and the N2 for image two but the key thing here is that um this other
[09:11] constants part of the pixel uh of a given pixel is uh can be close to con uh the same for
[09:22] the two images um and that's the key to doing interferometry is by taking the difference between these the phase of
[09:32] image one and image two we cancel out these other constants and therefore get the uh total distance uh or the
[09:39] difference in the total distance uh here row but the difference between Row one and row two uh as I mentioned there's two
[09:50] different basically a couple different ways to do interferometry uh there's the interferometry where we have have two
[10:00] antennas at the um on on either on satellites flying together uh the German satellite system called ter tandem X had two has two radar
[10:16] satellites that fly uh through space very close together so they can image the ground uh at the same time we also
[10:25] did a shuttle radar topography Mission which is a NASA mission where we actually had a 60 M long boom uh in
[10:34] coming out of the rad the NASA space shuttle uh payload Bay to separate uh one one antenna uh at the end of the boom from
[10:45] the main antenna on inside the payload Bay so there that's how we did a topographic map of most of the world in
[10:54] 10 Days by using that radar system with the two antennas so that's uh that's a single pass interferometry where we have
[11:04] two different antennas then there's the uh there's still another case of having the uh uh the two antennas separated in
[11:14] space uh across the perpendicular to the flight Direction uh is the case where we have one one antenna uh on the satellite but the
[11:25] satellite comes back again on a different day and uh and repeats the same pass over the ground um and those
[11:34] that second pass often is never exactly in the same point in space they try to keep it as close as
[11:43] possible but it does have some distance between the the Lo the passes but in that case then these two antenna
[11:52] locations are on the two different dates uh rather than on the uh and that's called repeat pass
[12:00] interferometry there's also a type of interferometry uh where they take two images as the satell light's passing
[12:07] over the area um just a few milliseconds apart and then they can do uh interferometry between these two
[12:18] images uh acquired just a short time apart and that as a way of measuring wave motion uh uh the the part of the wave
[12:32] motion uh so uh as I uh mentioned that with the uh the single pass interferometry where we had the two
[12:40] antennas or on uh either on the space shuttle or on two different satellites close together uh that allows us to
[12:48] measure top topographic maps um because the I'll talk about that in in a minute how we do that but
[12:59] uh it's a way of measuring uh very high resolution topographic maps um the um topographic map from shuttle radar
[13:10] topography Mission had uh a spacing of about 30 MERS uh the the tandem x uh from the German space agency and uh
[13:22] Airbus uh has a spacing around 10 meters uh so uh you can get very I mean it's not
[13:32] super high resolution compared to uh what we get from lar but you can cover very large areas um and in fact
[13:42] the the the tandem XDM uh which was commercially processed by uh Airbus uh then was uh purchased by uh the European cernus
[13:56] Mission uh cernus project and made made available now publicly at 30 m resolution globally as the cicus demm um
[14:09] so if you want the 10 meter demm I guess you have to buy it from from Airbus but
[14:14] the 30 meter uh version that we use for many other things uh is is available from uh cernus uh and it's freely
[14:24] available available online so this is a a excellent way of covering large areas um at uh at pretty
[14:33] high resolution there's also an Airborne version of this uh that's been operated by a number of groups including NASA
[14:41] NASA has a Airborne radar system that's called um gissen the other uh main interferometry uh is that repeat pass interferometry
[14:52] where we have the two different dates um in satellites of the dates are normally uh at least a day apart and
[15:03] often many many days apart um the there are some Airborne systems where they've been able to repeat uh the
[15:13] track uh just a few hours apart or or even tens of minutes uh to see changes over very short periods of time but the
[15:23] key thing is that uh this is a way uh to measure the amount of displacement of the ground or at least the um objects
[15:33] above the ground like buildings or trees or uh Bridges uh whatever is reflecting the radar uh during the time interval
[15:43] between the two dates so uh we'll talk about more that more later so those are the two uh main types of interferometry
[15:52] uh that are in wide use so the uh this is a uh simple diagram to uh explain how we
[16:03] measur topography with the uh the two antennas and the uh single pass uh so we have uh an image acquir
[16:13] this is a like a cross-section where the the satellites moving into the screen here uh at uh location of uh Point A1
[16:25] and and A2 uh on two different uh at the the same time or very close to the same time
[16:33] uh and by looking at the um the phase uh at these two locations uh separated by some distance a distance B
[16:44] for for Baseline uh and we know this how that Baseline is oriented in space where the where the satellite orbit is uh we can
[16:56] estimate the uh change in uh distance between the two uh the two radar images acquired of the
[17:06] two locations and that's then proportional to the um the height here of uh Z of the ground surface or ground
[17:17] or whatever else is reflecting the radar above the um some reference uh surface like sea level uh or or an ellipsoid and
[17:28] that's proportional to this um uh do this triangulation uh calculation with these different triangles triangles uh the
[17:43] uh uh Z here is the uh elevation above the uh the reference surface and um that's what we finally
[17:54] get uh this equation ends up uh being um we that we need to know the uh distance between these two antenna
[18:04] locations to a few millimeters um and then uh the and the orientation uh the shuttle radar topography Mission had a whole
[18:16] sophisticated system to measure the orientation of that Baseline the distance was also measured carefully uh and then uh
[18:29] we can then convert that to uh the height uh using these equations uh this is there's a little
[18:37] bit of a difference depending on whether the uh whether with the space shuttle uh uh we had basically all the uh radar
[18:49] energy was sent out by the U antenna inside the space shuttle payload Bay and then came to the ground and they
[18:58] recorded it when it came back inside the payload Bay and at the ant at the end of
[19:03] the boom that's what we call Classic with tandem X they actually had two satellites uh so that this second
[19:12] antenna is a second satellite and there they can do um what we call pingpong mode where each satellite sends its own
[19:20] signal down to the ground and receives it it it just changes the equation by adding an extra factor of two here uh
[19:29] which not going to go into um in great detail uh and then uh as for the repeat
[19:36] pass um Acquisitions then we have uh the radar uh on the space shuttle or or or whatever other
[19:44] satellite um coming by at two different times and that uh is again a little bit more more like that ping pong mode where
[19:54] uh at each time there's the the satellites sends out the signal to the ground so that's where this two comes
[20:02] into these equations here uh on the uh getting the phase from the change in range uh so for uh measuring uh
[20:15] displacements displacements um the range the difference in the range between time one and time two is uh a
[20:25] direct measurement of the uh change in distance between the uh the the two antennas and the ground if the
[20:36] two antennas were if they managed to fly the spacecraft so to to exactly the same point then we uh would all be able to
[20:45] see just the um the distance change uh uh and the um distance change here Delta Row in uh m MIM or whatever um
[21:01] multiplied by 4 pi over pi over the Lambda Lambda is the radar wave length tells us that we get a a a high
[21:10] sensitivity to the um change um depending on the radar wavelength in a real case then the uh
[21:21] the two antennas are not in exactly the same place in in space uh either at two at two different times or or with the
[21:30] single pass then uh there's uh an additional range change that's due to topography um and so there's
[21:41] a that's proportional to the elevation of the ground surface at a given pixel uh and then there's a change term and
[21:52] those two are added together uh so if you want to measure topography then you want to have the two images at
[22:01] the same time where where the change term is zero because it there's no time chain uh between the two
[22:09] images images uh or if we want to measure the uh change between two different times then we have to uh know what the Topography
[22:20] is so that's why uh we are are so um interested and and actually dependent on on getting that digital elevation model
[22:31] data from srtm or the tandem ax Copernicus DM uh because we need to know what the Topography is uh and subtract
[22:41] that out in order to be able to measure the change term and then these are the uh
[22:49] sensitivities to uh topography and to displacement as I mentioned earlier the uh sensitivity to displacement is is 4
[22:58] pi over Lambda the the radar wavelength um so we're very sensitive to um displacements uh the sensitivity
[23:10] to um topography depends on a row here which is the total distance uh between the satellite and the ground which is
[23:19] hundreds of kilometers uh and the the Baseline here uh or perpendicular component of the Baseline here in the numerator at is
[23:29] only uh 500 MERS uh so because we're dividing this 100 100 meters by hundreds of kilometers or hundreds of thousands
[23:40] of meters uh we're much less sensitive to topography than to um uh to displacements so basically we
[23:49] can measure topography around uh the meter meter scale and the to topographic change or or Surface displacements at the
[24:01] millimeter scale so that's a key thing to keep in mind uh what's the difference between the single pass
[24:09] interferometry uh for topography and the uh repeat pass interferometry for displacements they have very different sensitivities one of the other um uh
[24:26] details about uh you nephrometry uh that I mentioned briefly earlier is that we measure the phase which is where uh the
[24:38] um the radar signal is on this U sine wave um but the sine waves are repeating uh so we don't know how many of these
[24:49] sine waves there are in any one place we just know where where we are within this uh cycle uh so the the actual
[24:59] measurement that we get here is this Middle Line uh it's we get a it's called a wrapped phase that means every between
[25:08] uh every two Pi of phase uh in measured in radians uh the signal um is wrapped around or repeated and that means that
[25:21] uh we get measurements that look like this saw too uh measurement between pi minus pi and plus pi uh
[25:29] and we have to use a computer program to try to figure out how many uh factors of
[25:36] two Pi uh are need to be added to the phase in any one point so if the actual
[25:43] phase uh here is on the top uh after we do the interferometry we end up with this wrap phase where it's modulo 2 pi
[25:53] we need to figure out how many two pies we need to add which which parts of the
[25:59] image and we get this unwrap phase if uh if we're uh if it's not too noisy so another uh key factor uh um
[26:11] aspect of the interferometric phase is what we call the uh interferometric coherence or interc interferometric correlation um some people uh call this
[26:23] the correlation because we actually use uh spatial correl ation or or temporal uh correlation between the the radar
[26:33] signals uh to estimate the coherence coherence um a lot of people nowadays are using the term coherence uh
[26:44] more uh is 10 years ago or 20 years ago people were calling it correlation more often now people are more more likely to
[26:52] call it coherence uh but you'll you you may hear either one of these terms the interfer for correlation or
[26:58] interferometric coherence and uh basically it's the same thing just with a different name um so the uh the radar signals Can
[27:10] U become incoherent or or lose or or decorrelate um for a variety of reasons there could be some um just errors in
[27:21] the radar processor and and the temperature in the system that's the thermal noise that's usually very small
[27:29] um if the baseline or distance between the two uh satellite positions is large uh that causes what we call a volumetric
[27:40] uh decorrelation uh and and geometric decorrelation uh if the for some reason the two radar uh antennas are are
[27:51] looking at different directions that causes a loss of coherence and then there's the other big effect which is
[27:58] the uh motion of those objects within the radar pixel and and that we'll talk about that uh in a minute
[28:08] uh uh and once we have this amount of uh loss of coherence or decorrelation that um can be related to
[28:18] uh an estimate of the fa the deviation uh phase stand deviation standard deviation of the phase and that affects
[28:27] how ACC accurately we can estimate the height or displacement and it affects the um the phase on wrapping process because if
[28:36] there's too much noise the computer can make mistakes in in what uh what number of two pi to add and the key a key thing
[28:45] to remember about the correlation or coherence components is that these components are not added together like uh the topographic phase and the uh
[28:56] displacement phase but they're multiplied together so that means that if any one of these uh effects like the
[29:04] volumetric uh effect of trees or the steep slopes or um uh gradual changes in the surface or sudden changes due to a
[29:15] earthquake or volcano or or whatever uh hurricane hitting uh any one of these being low will cause
[29:25] uh the total uh coherence or or correlation to be low so uh one of the challenges if you're trying to use this
[29:35] method to look at a signal is to be able to separate uh what part of the de the
[29:42] loss of coherence or decorrelation is due to which one of these effects because they're multiplied together okay so now I'm going to talk
[29:51] about some uh applications uh these are just some general examples uh some of these examples are are a few years old
[30:01] but um the use of insar is uh really expanded drastically in in the last years uh so I
[30:10] have I won't attempt to to do a comprehensive uh review of all the um all the applications so uh these are some
[30:21] examples of deformation um on the top left here uh is the interferometric fringes from an earthquake from
[30:32] 1999 in Southern California it was called the hector mine earthquake it was one of the first earthquakes that was uh
[30:39] well covered uh by the European radar satellite satellite ers1 and ers2 uh in the middle here uh is an
[30:52] example of uh inter interferometry showing uh sub Ence of the ground surface U uh due to uh extraction of
[31:03] groundwater uh in LA in this is in the City of Pomona this east of Los Angeles um where they were extracting a lot of
[31:15] groundwater uh back in this is from uh the early 90s uh and that showed up as a very
[31:22] clear signal in the U insar data uh this is uh now been found many places around the world uh in uh in with very rapid
[31:35] rates in certain places including uh the Central Valley of California uh Mexico City uh places in Iran places in
[31:46] India many places around the world uh where they extract large amounts of groundwater the the ground surface is
[31:56] subsiding another example here uh on the upper right is a a volcano that was in um in Sicily called Mount Etna and that
[32:08] volcano uh goes up and down uh quite often due to the magma moving in into the magma chamber underneath the volcano
[32:21] uh uh scientists have been studying that for more than uh 20 years now uh so we have a very uh complete time history of
[32:32] what what the surface of that volcano has been doing for for more than 20 years uh with from SAR deometry so one
[32:41] of the other and another uh big uh application of uh SAR deometry is to measure the motion of ice and this is an
[32:51] example from the um uh the coast of Greenland uh where there's some um ice streams uh the large Greenland ice cap has is
[33:05] generally uh a flat surface but then where it gets close to the uh Coast uh some there's some streams or or kind of
[33:14] like a river in the ice where the uh velocity of the ice is much higher than than adjacent areas it's like a a river
[33:23] of ice and we can measure that motion with the SAR deometry method uh these are uh some examples of
[33:33] volcanoes in uh the Andes that were U uh measured uh some Years Ago by Matt Pritchard who is now professor at
[33:43] Cornell uh he found uh a number of these uh volcanoes in the Andes had uh significant signals do we don't uh
[33:56] always know whether that's a due to magma motion and at depth or it's a more shallower effect that's due to
[34:06] hydrothermal fluid uh variations so uh people have been using S deometry for a long time to monitor this over over
[34:17] decades to see what each one of these volcanoes is doing uh so that's been a a long a key application of uh SAR
[34:29] deometry and it works especially well in the Andes because the Andes the high part of the Andes is a free of
[34:38] vegetation so we can see the what the volcanoes are doing this is another uh case uh this is
[34:46] a volcanic uh Dyke injection in a far area of um Ethiopia there was a huge um Dyke that uh intruded into the ground
[34:58] surface and forced the uh ground apart it caused this huge uh Valley to form uh and uh with in aerometer we can see that
[35:09] this this line here is where the that Valley opened up and all these uh fringes or or um interferometric L
[35:21] Contours show how much the the ground surface moved apart uh due to that uh magma moving into a dyke uh below the
[35:31] surface the the two sides of the of the Dyke moved apart by as much as five meters in some
[35:40] places this is an earthquake that happened in uh 2015 in Nepal uh the seismologists called it the Gorka
[35:51] earthquake the the epicenter of the earthquake was near the nepes city of Gorka Gorka uh but uh there was uh the once we had
[36:02] the the interferometry uh we were able to see this pattern here which shows the um uh displacement of the ground surface
[36:13] uh due to the earthquake um in this case the radar line of sight is almost uh uh perpendicular to the direction
[36:23] that the earthquake moved these uh arrows show the uh GPS stations that moved uh and displaced the ground uh
[36:33] show that the ground moved uh sou South Southwest um which is basically perpendicular to the line of sight here
[36:42] so that means that we're not we're not seeing this uh horizontal motion uh to the Southwest but what we
[36:50] are seeing is the vertical motion that's a a secondary part of this earthquake deformation so in fact the the city of
[36:58] cfmu here is in the area that where the ground surface was pushed upward by the earthquake up and the uplift due to the
[37:07] earthquake was as much as uh 1.2 meters and that the area to the north uh was was dropped down by the earthquake
[37:18] because it uh the ground surface was the fault was pulling material away so we did a a study of this uh some
[37:29] years ago uh I mention it's this UA at all paper uh using this interferometry the GPS and
[37:38] seismological me seismometer measurements uh we were able to reconstruct the whole uh slip on the earthquake fault as a function of time
[37:48] during the earthquake uh the inner perometry was a key part of that we can also look at
[37:55] faults such as the central part of the San Andreas fault um this is a a a less populated
[38:04] part of California at the Central Coast ranges between the the very tiny town of Parkfield and San Juan Batista and this
[38:16] is the the San Andreas fault passes through this area and it act this part of the San Andreas fault actually moves
[38:24] uh gradually all the time um there are earthquakes here um uh up to about magnitude 4 4 and a
[38:33] half but uh because uh it seems to be moving all the time we think that this section of the San Andre as fault uh
[38:43] never uh participates in large earthquakes because the this gradual motion that occurs over time uh releases all the the stress that's building
[38:54] up uh that's a unusual but there are other places around the world including the the Hayward fault in in Northern
[39:02] California that do the same kind of uh gradual uh creep it was very uh uh clearly shown on these inter
[39:13] interfer interfer ramps uh we uh mentioned earlier about groundwater extraction in Pomona this is another example uh from the city of Las
[39:23] Vegas um this was uh published uh 20 years ago so uh I think the uh ex groundw extraction in Las Vegas probably
[39:35] increased since then uh the city population has increased drastically in the last 20 years uh and we can also see that uh not
[39:45] only is the uh the there a lot of variation in the um uh the amount of subsidence at
[39:56] different places but some of the the substance is is controlled by fault um and that means it's probably because the
[40:06] fault is uh um truncating the U the layer that has the water in it this is another example of um ice stream
[40:17] velocities in Antarctica Antarctica um and these were um actually mapped by uh insar and a another technique called
[40:28] feature tracking we don't have time to cover today it's a way to measure very large large displacements and then this is just
[40:36] another an example of um groundwater um I mean this is not groundwater but this is uh due to oil
[40:46] extraction uh in Argentina uh these these uh areas here are areas where the oil is being extracted more quickly and and then
[40:57] causing so the surface to move down a few centimeters in just a two years um as I mentioned earlier uh we
[41:07] can also look at decorrelation or or coherence loss uh to um look at how the ground surface has changed uh between
[41:18] two dates uh this is uh a map of the coherence not the not the interferometric phase but the
[41:26] interferometric interferometric coherence or or correlation uh with uh the lower correlation in these green and yellow colors and higher correlation or
[41:37] coherence in the red colors we can see uh this area around the city of bam uh which had the a devastating earthquake
[41:46] in in 2003 uh the adjacent uh desert areas or have very high coherence um it's a desert pavement that did not change at
[41:57] all in the 35 days the city of bam here was um has very low coherence coherence um and there's a line of low coherence
[42:10] right along uh this area to the South and that um turned out to be uh where the fault uh that ruptured in this 2003
[42:22] earthquake came to the surface uh the geologist had no idea that this fault was here it was not a a previously
[42:30] mapped fault there was a previously mapped fault over here near the city of barant uh they went out here and they
[42:37] looked at this uh previously maap fault they did not find anything uh at the surface uh showing a significant slip on
[42:46] the on that fault but they once we sent them this interfer uh interferometric coherence map uh with this very uh sharp
[42:55] line of irre line going to the south of the city they went out into the desert here and found that there were uh clear
[43:03] fault ruptures at the surface with up to 25 cmers of slip slip uh so this is a excellent example of
[43:14] where we Ed that interferometric coherence change to actually map uh something about what changed in that 35
[43:23] days so you'll notice that the city of bam and the city of Barat both have low coherence uh in this 35 day interval um
[43:33] and that's uh because um uh a combination of what is both the um vegitation effects and the damage to
[43:45] the buildings uh so uh one of the things that we can do is take uh two in two
[43:52] interferometric coherence maps and subtract them uh so we look at the inter ometric coherence before the earthquake
[43:59] and subtract that from the interferometric coherence of the pair that includes the earthquake and that gives us um an estimate of what uh part
[44:09] of the coherence uh low coherence is due to the earthquake and that highlights the fact that the city of bam uh is
[44:17] widely damaged by with huge numbers of buildings that were destroyed whereas the city of barant had low coherence due
[44:26] to uh V ation date plantations before the earthquake and during the earthquake but by doing this difference we we
[44:36] subtract that out and see that the damages here in bam and the barant part is not damaged we can also see the very
[44:46] clearly the um the fault rupture to the south of the city of bam and this method of taking the coherence difference has
[44:54] been developed into what we now call the damage proxy Maps uh which we use to map damage uh due to earthquakes uh
[45:04] hurricanes hurricanes tornadoes landslides and and many other effects effects uh based on on this method and that's that's where the
[45:15] earthquake earthquake ruptured we can also use um Airborne uh interform systems NASA has this airborne a special airplane uh uh it's a piloted
[45:32] plane uh but with the radar system is called called uavsar it's actually flying on a piloted plane um operated by NASA pilots and we
[45:42] can fly this in different directions over uh this is a landslide in Colorado that moves very quickly uh and by taking
[45:51] the uh the uh interferograms from different directions we're able to estimate what's the uh the motion the
[45:59] full three-dimensional motion of the ground surface uh in in this uh map uh I don't have time to go into that in great
[46:07] detail but that's a by having the three-dimensional surface deformation we can actually estimate what depth the uh
[46:15] Landslide is sliding and we've been doing that uh a lot uh in the last years um with this
[46:24] method so um I'd like to uh now talk about the uh NASA satellite Miss Mission that's uh upcoming uh this is a joint uh
[46:36] Mission with the uh Indian space research organization ISRO uh we it's called the NASA ISRO SAR Mission uh or nysar for short and we're
[46:50] really looking forward to this uh launching early next year the um uh radar the it's a u the system is uh
[47:03] is basically ready to go uh the they're just doing some final uh tests and then uh getting ready to put it on uh a
[47:13] rocket it's going to be launched by uh an nro rocket that's one of their big contributions contributions uh to this Mission uh so we're we're
[47:26] waiting for ISRO to decide exactly when the the the the rocket will be ready uh but it'll be early next year uh
[47:35] and the uh all the data will be available uh free and open to everybody uh and that we have this website n.j.
[47:45] nasa.gov for more information this is some more details about the nysar satellite we're going to have this uh
[47:53] 240 kilometer swath we're using a method called sweep SAR uh but taking advantage of of this reflector system uh the radar
[48:05] uh is emitted from a bunch of uh transmit receive modules along the top of the satellite goes up to the
[48:13] reflector goes down to the ground comes back and by uh receiving the data at a number of these reflectors at different
[48:20] times we're able to image this whole swath here um uh with a uh pretty with consistent coverage that
[48:30] gives us um this is a new technique that has not uh yet been flown in space or called
[48:38] that we call Sweep SAR uh it's going to fly at an altitude of 747 kilometers uh at the near uh the
[48:49] closer part of the satellite or near range it's going to have an incidence angle from the vertical of 33 degrees
[48:55] and go out to 4 7° um the Orbit's going to be in a 6 a.m. 6 PM orbit l so at any given place
[49:05] on the ground it come over around 6: am and 6 PM as it goes around the earth it
[49:11] goes over each Place uh goes over the Earth twice both on the uh uh ascending or north and
[49:21] descending going or the satellites going south the main radar waveline length is 24 24 cm U that gives us
[49:31] a a longer radar wavelength that's less sensitive to that decorrelation in in vegetation that um bam earthquake that I
[49:40] showed you U was using uh a shorter radar wavelength of about F six centimeters and that's why it was much
[49:48] more sensitive to that uh vegetation in the town of barant um the L band interferometry will be
[49:57] be uh uh coherent over vegetated areas around the world um so that that's going to give us uh interferometry coverage in
[50:07] a lot of places that are not presently well well covered uh so the l-band instrument was built by uh JPL and na NASA and then
[50:19] there's a second uh radar instrument in fact there's there's two different sets of radar transmitters here using the
[50:26] same end reflector and that this is a a radar wavelength called sand and it has a 9.4 cimeter wavelength a little less
[50:36] than half of the U the radar wavelength that we're using for the L band the L band for the the NASA part uh the sand
[50:48] data has a a more limited capacity they can't cover the whole world uh so they're mainly going to
[50:56] cover the the Indian subcontinent and certain other parts of the world uh Indonesia and and a few other places uh
[51:07] but in in in those areas we'll actually have two different radar wavelengths and that'll give additional information
[51:13] especially about uh vegetation uh vegetation structure it's a 12-day exact repeat that's the same as um Sentinel one that
[51:26] uh we're going to talk about later uh we have uh three different uh several different modes the main ones uh have a
[51:35] between 10 meters uh resolution and 3 MERS MERS resolution the satellite uh NASA has certain categories of satellites this is
[51:47] in the category that's uh U expected to last at least three years um as far as NASA goes and but is
[51:57] has has plans by their definition the the missions expected to last for five years and is is also putting enough fuel on
[52:06] the satellite to last uh probably at least 10 years if if everything is going well well um the big thing is that it has this
[52:17] very high observation duty cycle uh we can get up to operate over as it comes over the Earth it can operate as much as
[52:26] 50 % of the orbit and get all that data down to the ground this is the going to
[52:32] be the highest volume data satellite that's been launched uh so far um NASA built some extra ground receiving
[52:41] stations just to be able to get all the data down to the ground um the satellite is going to be
[52:49] looking towards the South or left looking as along the satellite track that means it's going to get better
[52:56] coverage of Antarctica and less coverage here in uh the Arctic you can see that the very Northern end of um Greenland is
[53:06] is not covered covered uh also swar and a few other places um and the Arctic Ocean we expect that
[53:17] other satellites like Sentinel one radar sat and other will cover the Arctic and we're not going to be covering the
[53:25] Arctic with nysar so now I'm going to talk about uh insar processing uh for this uh introductory
[53:34] course we're not going to get into uh a lot of details uh we're going to uh use
[53:40] some of the new um um products that are available um to simplify the radar processing we're going to be using data from the uh
[53:53] cernus Sentinel one uh satellite system uh Sentinel one is actually a constellation of satellites uh they launched the first Sentinel one in
[54:08] uh uh in 2014 um they Sentinel 1A was launched in April of 2014 but it actually started
[54:16] regular operations in October 2014 uh they uh then launched uh Sentinel 1B the second uh Sentinel one
[54:28] satellite in uh 2016 and got that into operations within 2016 uh unfortunately the uh Sentinel 1B satellite had some kind of onboard
[54:42] anomaly in the radar system and it stopped working in uh December of 2021 so uh we had the two satellites
[54:53] operating at the same time for about 5 years years uh but since in the last three years uh
[55:01] we only have we're back to having one satellite um each one of the satellites operates in a 12-day repeating orbit um
[55:12] they flew Sentinel 1 a and and 1B in orbits such that they covered a given point on the ground six days apart so
[55:22] that made it effectively a six- day repeat the two satellites are identical uh in the radar system so they
[55:32] could be used for full uh completely interchangeably for interferometry and and other types of analysis um Sentinel
[55:42] 1C uh is is ready for launch they just announced last week that uh they're planning to launch it on December 3rd uh
[55:51] of 2024 so that's coming up right away very soon uh and so they'll have Sentinel 1 C in replacing Sentinel
[56:01] 1B and they'll go back to the uh 6 day uh time between Sentinel 1 a and and 1 C
[56:09] and they also have uh a sentinel 1D uh already uh built and almost ready to be launched so I think the the plan
[56:18] is to to launch Sentinel 1 C uh bat D the fourth one uh maybe six months after 1 C because uh Sentinel 1 a
[56:30] uh has now been in space for 10 years and it was designed to uh to last for seven years and it's
[56:37] so it's getting uh it's getting a little bit bit uh a little bit old and and having some
[56:44] some issues so they want to get uh sen1 D CND d uh launched uh very as soon as
[56:52] possible and uh it looks like they're going to be doing that very soon The Sentinel one uh satellites all use
[57:02] the same um the same acquisition modes um there are a few places where they they use different modes but especially
[57:13] over the oceans um but for over almost all the land on the earth um they use this mode that's called
[57:23] tops uh which stands for ter observation by Progressive scans um kind of a funny name but um uh it's a way to uh to image a wide
[57:38] swath um unlike nysar which has this uh sweep SAR that images the whole swath swath continuously um Sentinel one uh has
[57:53] three different sub swath so uh the side sends out pulses uh of the radar um uh for uh some
[58:04] amount of time in one sub swath then it switches the beam and sends out a burst of uh radar pulses in a different subwa
[58:13] for a while then it switches the beam and sends out pulses uh and in the third sub swath for a while then it then it
[58:22] switches back to the the first one uh and and over time it builds up a an image uh
[58:30] over the full 250 kilometer wide swath out of these three sub swaths with a uh a number of bursts along track uh that
[58:44] U are are separated by some amount of time as as the satellite's moving along um so the fundamental
[58:54] um uh component that in in the way they process the data um uh The Sentinel uh satellites are
[59:06] owned uh and paid for by uh the European Union uh through their Cernic's Mo program but the European Union then uh
[59:19] hires the European Space Agency uh to do the uh building and operation of the satellites so it's kind
[59:29] of a a little bit uh uh strange uh for us uh out in the United States uh
[59:37] Arrangement between two different organizations that the countries that are in the European Union are different from the countries that are in the
[59:44] European Space Agency so they're not exactly the same uh groups but the money so the money comes from the European
[59:53] Union but the the work is done by the European space agency and they uh they ask us to call it the
[1:00:02] cernus uh Sentinel one satellites and not the ISA Sentinel one satellites because they they're paid for by
[1:00:09] cernus um but Isa does the the operation and data processing so um they process the data in these bursts uh and each
[1:00:19] burst is about 20 kilomet along along the radar track and 90 kilometers uh wide they overlap some between the three
[1:00:29] sub swats to give the full swath width 250 kilometers and the uh the bursts overlap a long Track by uh just about
[1:00:40] three kilometers a very small amount um so it's kind of a complicated system uh but it uh was the choice that
[1:00:51] they made uh quite a while ago obviously it's the the first one was launched 10 years ago
[1:00:59] so this was designed probably about 15 years ago or more uh to give a they a a good uh coverage uh with a uniform uh
[1:01:16] radar amplitude um but it does cause some uh issues for uh interferometry uh which we've learned how to deal with but
[1:01:26] it it does make things a little bit more difficult difficult um there are uh some higher level uh
[1:01:35] products um so the preliminary processing is all done by Isa they downlink the satellite data from the
[1:01:43] satellite they produce uh the level one uh a level zero products called raw they produce the uh sing the level one
[1:01:54] single look complex products and they produce uh uh what they call geocoded Ground range detected uh amplitude
[1:02:04] amplitude images uh all those are produced and and provided through the Copernicus data system um and they process the
[1:02:15] individual bursts uh for the raw data and the um single look complex data the ground range detected images the merge
[1:02:26] the burst together uh for ease of use use uh uh they cut the satellite uh data into uh slices uh which are not
[1:02:42] always in the same location that can cause cause confusion uh for processing uh and these data products are all
[1:02:53] archived in the Cernic's data space system it's a a set of servers in a a cloud system in in in Europe but uh
[1:03:04] there's also a automated transfer uh to a NASA Alaska satellite facility distributed active archive Center or DAC
[1:03:15] um they get all copies of all the cernus data uh Copernicus Sentinel one data and they make uh that available through the
[1:03:23] ASF and the the next part of this uh uh webinar series will be from the uh Chief
[1:03:30] scientist of U ASF to give more information about how they um operate and how to search the for the
[1:03:40] data and they uh have added a new uh access system about uh a little over a year ago now uh to give access to the
[1:03:50] original uh individual bursts um it of the single look complex images and that's what we're going to be uh using
[1:04:00] today um but we're going to be using uh the an uh an products that have had another level of processing that's been
[1:04:09] done by the NASA Opera project that's uh running at JPL and other uh centers um where the Opera project takes those
[1:04:21] original um SLC bursts that are in radar coordinates and co-register them and uh puts them into geocoded coordinates so
[1:04:31] they're in UTM coordinates um and uh they do that for all of North America um and those products are
[1:04:41] archived at the ASF so um we'll be using that today to uh save a lot of the work of getting uh
[1:04:51] the interferograms to work uh there's also another uh NASA project called ARA it's also a JPL where they process the
[1:05:00] uh uh interferograms completely um uh for selected areas and selected dates uh and and uh create files that are in geocoded
[1:05:13] unwrapped interferograms or gun NWS and those are also archived at ASF um these uh nysar will Al all the nysar data will be
[1:05:29] uh the nysar lban data will be archived at ASF the uh cband data will be archived at the ISRO data centers uh I
[1:05:38] mean the sand um the um nysar will will be uh producing higher level um uh data products that are similar to what I just
[1:05:53] described uh from Opera uh there's uh radar coordinates wrapped interferograms uh in the areas of ice sheets uh there's geocoded single look
[1:06:05] complex gslc which is very similar to the the Opera C registered slc's uh from The Sentinel data so uh I'm going to be
[1:06:16] talking about an example with using this the Opera S1 csc's but this uh type of processing will be very similar for uh
[1:06:26] the the gslcs uh from um nysar um there's also uh nysar is going to be producing these
[1:06:37] gws U geocoded unwrapped interfer graphs and those are uh almost exactly identical to the Sentinel one gws um except for the things that are
[1:06:50] specific to the different satellites and there will also be the uh original radar coordinates slc's from available for those that want those from
[1:07:02] nysar I'm going to be uh doing a demonstration using a Jupiter notebook um these notebooks are available from uh GitHub on on my
[1:07:13] account uh this website uh EJ Fielding uh ret notebooks uh and I'll be uh running this notebook uh to uh show you how how to
[1:07:26] use the uh co-registered slc's to make an an interferogram over the area of Hawaii uh there's additional notebooks
[1:07:37] available from the Opera project um at the at the Opera uh applications website so the first thing uh we need to
[1:07:49] uh do is find the data um this is going to be a search through the Alaska satellite facility uh for more details
[1:07:58] on searching ASF listen to part three of this uh webinar series um uh we'll first go to uh ASF uh find
[1:08:10] the big island of Hawaii uh draw a box around it uh tell it that we want dates
[1:08:17] uh uh uh around the time of the uh an eruption that happened in 2022 this should say
[1:08:25] 2022 not 2015 I that was a mistake um uh we're going to choose the to the data
[1:08:33] set to to search for is the Opera S1 that's the Opera Geo co-registered SLC data set and um when we search for that
[1:08:44] we're going to find the uh the granules uh that uh cover that time and and spatial location and um find this U
[1:08:57] geocoded SLC that's for one burst of the of the scene uh acquired on uh December 12th I mean December 4th
[1:09:11] 2022 and we're uh do the search first and then uh do the download later with the Jupiter
[1:09:19] notebook uh this is just a a screenshot of what we're going to do here uh for purposes of
[1:09:26] comparison comparison uh same thing that I just explained we want we're going to find this scene that's acquired on the
[1:09:37] uh December 12th 2022 uh it's also possible to uh search for the uh GW ARA cal1 GW inter programs
[1:09:52] at um the ASF so you do the same kind of search as before um uh with that same um
[1:10:03] uh Geographic box and start and end dates uh but if we choose the ARA S1 GW data set then when we search we're going
[1:10:12] to see the interferograms and we can find a granual called S1 G and W track 87 um
[1:10:28] uh tops it's tops mode and this gives the two dates of the that are in the interferogram um the between the 11th I
[1:10:39] mean the 11th month 222nd Day November 22nd and the 4th of no of December um that's a 12-day interval uh in
[1:10:52] 2022 uh we talked about uh how to used these these GW files last year in an ret training on
[1:11:00] insar so uh I'm not going to go further into that except to show that uh this is
[1:11:06] the uh GW interferogram for the area of the uh monoa uh at the time of the eruption in uh the end of November
[1:11:19] 2022 uh and uh this is this is the uh interfer from the GW uh which has a a 90 M uh
[1:11:31] spatial spatial resolution so this is what we see when we first open the NASA the Alaska satellite
[1:11:39] satellite facility uh Vertex or Search tool um and we're going to zoom in on Hawaii here uh
[1:11:49] Zoom uh I use the scroll bar to assume um then I'm going to draw a box around
[1:12:00] monoa and then I'm going to go up here and we have a number of different things uh different radar data sets we can
[1:12:09] choose uh but I want the Opera S1 uh products here Opera S1 these are the the Opera products that have been um
[1:12:22] processed by re U by Opera to uh geocoded uh Co registered slc's and also uh geocoded uh radiometrically terrain
[1:12:37] corrected amplitude products I'm going to change the um the dates to start in November 15 2022 and go
[1:12:52] to November uh December 15 15 2022 uh because I know that the um the eruption happened in uh the end of
[1:13:04] November uh do the search now we can see these are the um Sentinel one scenes that were required
[1:13:14] at this time um there's actually uh two different tracks here uh the T part of these file names in the cslcs
[1:13:25] is the um the track number uh in this particular case we want the track 87 and we can uh look at track
[1:13:39] 87 uh this was acquired on the 4th of December December 2022 uh and the um this next number in
[1:13:49] the uh long file name 185 682 is the uh the full uh burst number of the of that
[1:14:01] burst of the uh Sentinel data that so the birst numbers stay constantly in the same point on the ground uh so that's
[1:14:10] why uh they process the data uh on the on a given birth so that all the data
[1:14:17] all the scenes uh acquired over that place on the ground are co-registered uh so and this is track 87
[1:14:26] uh we're going to use that in a minute uh with the Jupiter notebook notebook uh so that's the uh and we can see over
[1:14:38] here it's it's an hdf5 file uh that's 252 megabytes so that's that's a pretty big file but
[1:14:47] that's because it's um it's has 5 meter by 10 meter resolution it's very high resolution uh so that's uh this the search uh you
[1:15:01] can hear more about the search tomorrow uh next week from U uh fron Meyer uh in in the U ASF uh search uh
[1:15:17] webinar okay so now we're going to talk about how to actually do the processing now that we found the uh co-registered
[1:15:25] C's uh this same processing method uh will work with nysar data in the future because they're basically the same
[1:15:34] product uh a little unfortunate that uh the Opera project chose a different name but cslcs and gslcs are the same thing
[1:15:45] uh and it's very simple because uh the Opera processing or the nysar processing has done all the big amount of work of
[1:15:53] getting the two uh the before image or which we call the reference and the after image which we
[1:16:01] call the secondary um co-registered uh that typically takes a lot of processing uh time uh but they've already done that
[1:16:11] uh and they've now provided this product that's already co-registered so what all we need to do is download the uh the
[1:16:19] reference image and the secondary image and basically multiple ly them uh in the complex number domain which ends up
[1:16:29] subtracting the face then we immediately get an interferogram and then it's easy to uh take that interferogram calculate the
[1:16:39] coherence uh we do some multi-looking is uh the radar uh name for averaging pixels um if we're using the Sentinel
[1:16:51] one data the co-registered slc's from one we have to do an additional step of merging the burst because it's processed
[1:16:59] in separate bursts with nysar gslcs uh we don't have to do that because it's going to be processed on
[1:17:07] whole frames uh so that the final output uh is here it's pretty U basic to get a
[1:17:17] what we call a a wrapped interferogram this is just a graphical uh slide showing the same process this
[1:17:26] was a slide created by Grace BTO at JPL for the Opera project these are the two uh bursts uh from November
[1:17:35] 22nd and December 5th or 4th 4th um and uh we multiply them in the complex these are complex numbers C1 and
[1:17:48] C2 that's how we actually do the calculation of the the phase difference uh uh I'll go into why that complex number
[1:17:58] works but then we immediately get the interferogram for that one burst of over the area of the of of monoa and then we
[1:18:09] can calculate the coherence and then after we merge three bursts together we're going to use these three bursts from track 82 um we can get
[1:18:23] uh the full area of uh surface deformation uh from the uh the 2022 eruption uh of monoa and uh this map on
[1:18:36] the right is the coherence map uh and the the this area near the top of monoa where we see the sharp uh area
[1:18:48] of of low coherence and that's the area where the lava flows have uh completely changed the surface and uh it's an
[1:18:58] excellent way to map the uh the new lava flows uh as of the date uh of U December 4th when the uh image the
[1:19:09] second image was acquired so uh that will go back and now and do this same uh processing in uh the
[1:19:19] Jupiter notebook that uh Grace BTO uh created uh to do this uh calculation uh with a few changes that I made and uh
[1:19:31] that notebook is available from um GitHub um so uh this is a notebook uh we don't have time to go through uh the
[1:19:45] whole explanation of how to run Jupiter notebooks that's been covered in other uh courses this is a notebook that was
[1:19:53] originally uh created by Grace BTO at JPL uh that I modified to be uh with some more annotation uh about uh for
[1:20:03] this training course uh so uh just going to jump into it uh here this is the uh
[1:20:11] explanation we're using the Opera co-registered co-registered slc's with the uh 10 meter resolution in the uh North South direction or Northern
[1:20:21] Direction 5 meter resolution in the um East West Direction it's already in UTM coordinates and uh co-registered slc's
[1:20:31] have been processed so they're all uh co-registered uh this is uh a way setting up the cond environment I'm not
[1:20:40] going to go into that into detail uh we'll just uh skip over that uh load the necessary modules here
[1:20:50] um set up the this next step is where we uh def find the U parameters for the
[1:20:56] area of interest that we want to study uh this is a bounding box for the area of monoa it's uh 155 degrees longitude
[1:21:07] West West 19 degrees north uh with some uh decimal points there uh the orbital pass is descending where the
[1:21:19] satellite's moving Southward the path is 87 uh we're going to use a reference date of um the 22nd of November and a
[1:21:30] secondary date of the 4th of um December and uh I'm going to put this output files into a directory on my uh
[1:21:41] Macintosh called user Fielding downloads and save it into a directory called monola monola demo uh uh track
[1:21:53] 87 uh you have to set up your Earth data login uh this cell will ask you for your
[1:22:00] login information if you haven't already set up a a net RC file uh that's a special file in your home directory
[1:22:08] that's called underscore netrc if you're running Windows and um netrc if you run Linux or uh Mac
[1:22:18] OS uh this checks to see if you already have that file if you do then it grabs
[1:22:24] the uh your login information from the file if you don't then this other steps uh ask you for the your Earth data login
[1:22:33] and then uh puts it into that file for you uh this next step uh actually queries the ASF uh DAC uh using a a
[1:22:44] module called ASF search that was part of the set of modules uh loaded by that condic command before we're looking for
[1:22:54] the Opera S1 slc's same thing that we search for in the guy we want the cslc processing level and then with that
[1:23:04] area of interest uh the pass Direction start date end date and we can see that it found U six uh Mo uh six bursts uh we
[1:23:16] can this next step uh loads those bursts into a Geo data frame to better uh look at the metadata about the bursts and
[1:23:27] this next one uh selects just the bursts uh from the um reference scene and the uh secondary
[1:23:38] scene in case we had a longer time interval that included more than just two dates um this this does a a Subs
[1:23:48] subset selection we now end up with the we still have six bursts uh the there's three three different births and two different dates
[1:23:58] for each of those births so it's a total of six births and this next plot uh page
[1:24:04] what does a makes a map using that uhu uh that information and we can see here that those bursts cover uh the
[1:24:14] western part of central part of the big island where the uh peak of monoa is you want to make sure that the bursts cover
[1:24:24] the area that you wanted to cover um so that was just done by searching for the the burst uh this next step actually
[1:24:33] downloads the data uh because I ran this before it uh it doesn't bother to download them again uh but it's it's
[1:24:41] relatively quick if you have a good uh internet connection they're 250 megabytes a piece much smaller than the
[1:24:49] original original um uh full SLC slices uh then we uh read uh each one of these bursts and uh uh
[1:24:59] calculate the um which bursts um are from which dates uh this step actually opens the files and um checks to make sure what's
[1:25:15] what's in them uh it's got the F okay now we got all all three all six of the
[1:25:21] bursts open the next step is just to calculate the interferograms uh we're ready to uh take these these functions here
[1:25:31] calculate the uh interferograms and do the uh multi-looking that I mentioned and then uh write the files to uh
[1:25:41] geotest and that so this next command actually does goes through uh for each one of the bursts and finds the reference SLC and
[1:25:53] the secondary SLC does that subtraction calculates the indogram calculates the coherence and then uh we'll we'll be
[1:26:05] able to see those images okay there's three different bursts and it's going to make some plots there's the uh the northermost
[1:26:25] burst which is mostly north of where the volcano volcano is uh where the volcanic deformation is uh this is the coherence for that
[1:26:36] burst this is the middle burst we were most of the where the peak of monola is and this is the coherence for that burst
[1:26:45] this is the southern burst and and the coherence for that burst and then the um the next step
[1:26:53] actually actually uh merges the burst uh oh that's that's the the function definition this is this one
[1:27:04] actually runs the burst so the first first cell merges the interferograms the second one merges the coherence
[1:27:13] files files uh and here's the uh final results we have the uh oh and no it's still running the
[1:27:27] merge merge uh this part can take uh a fair amount of memory on your computer uh so it
[1:27:34] could take longer or shorter depending on on your computer this is the merged interferogram it's still it's a wrapped
[1:27:46] interferogram uh this is Sentinel one uh which has the uh cband uh 5 six uh CM radar wavelength so each one
[1:27:58] of these fringes is 2.8 CM half the radar radar wavelength um um and uh we can uh count how many uh
[1:28:11] fringes there are to calculate What's the total deoration um the next step for a more advanced analysis would be to unwrap
[1:28:20] these fringes uh in this uh very preliminary Ary uh course we're not going to be covering the phase onw
[1:28:28] wrapping part which can be uh more difficult and require some more expertise uh and and uh so today we're
[1:28:37] just going to talk about the um the interferogram and this coherence map this coherence map as I mentioned
[1:28:46] earlier uh the dark areas here near the top of monoa are the areas where the lava flows have have completely covered
[1:28:54] the surface um and uh we can see that the this is the peak of monoa uh the
[1:29:02] lava flows both went to the north and to the South uh this flow that went to the
[1:29:08] north actually was in danger of hitting a road that's further down down the hill here um and so it was very uh important
[1:29:16] to have this kind of radar information to know how far the lava flow was getting um although once it got close to
[1:29:25] the road they could actually see it from the road and know where it was but this also uh because the radar covers the
[1:29:32] whole part of monoa we could also see that some of these lava flows went South from the the main um the main Caldera of
[1:29:42] monoa and uh the but they did not go very far to the South um one of the
[1:29:48] initial concerns after this eruption started was how far to the South some of these lava flows could get and uh this
[1:29:57] confirmed that the the lava flows did not go very far to the South uh so um that's the very basic
[1:30:08] notebook that shows how we can use these co-registered slc's to make uh interferograms and coherence Maps or
[1:30:16] correlation maps from the uh the data for this Hawaiian uh volcanic ruption in 2022 uh this is uh a qgis of function uh
[1:30:34] because these uh interferograms and coherence Maps were saved as geotiffs I could uh open them directly in qgis qgis
[1:30:44] knows uh uh where they are from the uh geotiff information U I previously loaded uh all the um Google satellite uh
[1:30:56] image so we can see um the uh context for the uh interferogram this is the high peak of
[1:31:07] of of monoa uh we can also look at the coherence map one of the interesting things here about is that we can also
[1:31:15] see uh the areas that are green on the satellite image where there's the the more forested parts of monol low at
[1:31:24] lower elevations those are low coherence um and as we expected from the uh coherence discussion that I did
[1:31:34] earlier uh so the the low coherence at the low elevations is due to uh vegetation the low coherence at the high
[1:31:43] elevations in U monoa where there's no trees uh is due to the lava flows that covered the surface and completely
[1:31:53] changed the radar um back scatter so this uh one image shows uh the the two biggest effects on coherence uh in one
[1:32:05] image uh and so uh we can you know turn the the coherence on and off and see uh
[1:32:12] you can also see in in a couple of places where there were lava flows from I think
[1:32:20] um uh in I think this was maybe a hundred years ago a lava flow came down here into the Kona area um and that
[1:32:30] there's no trees along that lava flow and you can see that the coherence is actually High along that old lava flow
[1:32:37] because there's no trees on it whereas the new lava flow um we can tell from the older lava flows because the
[1:32:44] coherence has dropped and so that's the um a quick overview of how to interpret uh the interferograms and the the um the
[1:32:54] coherence maps for a volcanic eruption uh similar types of analysis could be done for uh earthquakes landslides and
[1:33:04] other processes that um modify the land surface this is a summary of what we covered today um the insar theory uh the
[1:33:19] key point is that the insar U uses the phase of the reflective radar signal to measure the distance from the satellite
[1:33:27] to the ground or the ground to the satellite with very high Precision uh the the coherence or
[1:33:35] correlation local correlation of the insar phase is a sensitive measure of what the house Surface or Surface cover
[1:33:44] I mean which could include vegetation how stable that Surface or Surface cover is at the radar wavelength scale uh we
[1:33:53] could could uh the phase Cycles in in these repeat paths wrapped into Furrs show the change in distance uh that's proportional to uh
[1:34:04] the half the radar wavelength for Sentinel one and other uh cand satellites that's about 2.8 cmers for
[1:34:13] nysar uh that half wavelength is will be 12 12 CM um so nysar will be less somewhat
[1:34:21] less sensitive but it will have much better coherence in vegetated areas uh these newly pre-processed uh insar
[1:34:29] products uh from Opera uh the co-registered slc's and uh gws um enable uh analysis with a few
[1:34:42] additional steps uh the same thing will be true for nysar where we'll have the gslcs and uh
[1:34:50] gws um so uh the demonstration today showed how we can just with a few U commands in python be able to make an
[1:35:01] interferogram out of these pre-processed products U these insar measurements are useful for a wide variety of U processes
[1:35:12] on the earth and above the Earth that cause a motion of the surface or or surface surface materials uh including um earthquakes
[1:35:25] landslides uh volcanic eruptions uh also some hydrologic processes such as um groundwater extraction the AL dynamics of glaciers
[1:35:36] the the rate of Glacier motion and several other effects that cause the surface or or large structures such as
[1:35:44] Bridges or dams uh to move so I'm going to pass this back to Erica for the final
[1:35:52] wrapup and questions so thank you very much Dr Fielding for that great presentation and demo now I'd like to remind everyone
[1:36:07] that there is a homework associated with the uh webinar series The Homework will open on the last day of the webinar
[1:36:18] series that's next Wednesday November 20th the due date is December 4th and a certificate of completion will be
[1:36:27] given to participants who attend all three live sessions complete the homework by the due date and they will
[1:36:37] receive a certificate via email approximately two months after completion of the course and if you have any questions
[1:36:47] about the material that was presented today please feel free to reach out to Dr Eric heing through his email posted
[1:36:59] here once again thank you to Dr feling for the presentation and the demo and a special thanks to Grace B for putting
[1:37:08] together the Jupiter notebook also thank you to all the participants for um your interest and your questions we've been
[1:37:15] assembling them into a Google doc which we will share with you shortly on screen and now we will begin our question and
[1:37:24] answer session wonderful so uh let's uh we've had a number of uh questions and let's start uh in the interest of time uh and
[1:37:42] we'll try to get as through as many as we can uh Dr feling has already started answering some of these questions uh
[1:37:50] let's just start from the top um can import and analyze inser data in Google Earth engine Dr Fielding please go
[1:37:59] ahead yes um Google Earth engine has the capability to import uh geotiff images so if you do your insar analysis with
[1:38:10] whatever package and save your says a geotiff then you can load them into Google Earth engine or another uh GIS
[1:38:20] system such as arcgis or qgis G Google Earth engine cannot be used to do insar calculations because it
[1:38:32] does not support uh complex radar um phase data thank you question number two can we do interferometry using any SAR mode
[1:38:46] scan strip spot for example yes in in some cases yes we can can do allometry with uh the different uh SAR
[1:38:57] modes uh the strip map data is always compatible for interferometry as long as it's uh data acquired on the same track
[1:39:06] with a adequate Baseline uh it's a very simple SAR mode scansar and and the Sentinel one tops mode SAR data has to
[1:39:17] be acquired uh with the bursts of the scansar um uh precisely co uh synchronized in space uh to enable interferometry The Sentinel
[1:39:31] one satellite is specifically designed to do this uh so that's a a type of a scansar system other
[1:39:42] scansar systems such as alos 2 are also designed for insar spotlight mode uh is more difficult it has to be acquired with
[1:39:53] exactly the same Imaging geometry of two passes and that is possible but it's uh not always done okay question number three is it
[1:40:08] possible to mix the modes uh in some cases it is possible to do insar analysis by mixing uh strip map
[1:40:17] and scansar data uh including the alos 2 satellite uh the ice 2 application called alos 2 app that was written by a
[1:40:28] stock working with me at JPL supports uh this mix mode insar between the alos 2 strip map and scansar data I don't think
[1:40:38] it's possible with other satellites great thank you question number four between cross trck interferometry and a long track
[1:40:48] interferometry which is better and for what type of situation so the they measure different things cross track interferometry
[1:40:56] measures topography the height of the ground land surface a track interferometry uh measures ocean wave motion so they're very different
[1:41:11] measurements okay question number five can you please brief about colorization of SAR image so I think these are false color
[1:41:25] composits uh yeah um yeah I wasn't quite sure what this question was asking one of the ways that we often portray the uh
[1:41:34] wrapped phase for interferograms is with a rainbow uh color scheme that uh just Cycles through the rainbow so that uh
[1:41:45] the uh every time it goes through uh the the two Pi uh phase variation it reaches the same color uh in the
[1:41:59] rainbow that's uh one of the ways that that insar is colored I'm not sure if that's what they
[1:42:08] were were asking yeah um in terms of amplitude I can also add a link to a guide on how to
[1:42:17] best portray uh different polarization images so a question go ahead please no go ahead okay question number
[1:42:33] six how is the Copernicus DM different from the srtm DM is the DM generated actually as a digital surface model and
[1:42:43] srtm digital elevation model please explain yes uh actually both um cernus demm and srtm are digital surface models
[1:42:59] uh the cernus demm is derived from the tendem X satellites so it's using xand 3 cm rad
[1:43:08] wavelength radar and the srtm was acquired with a the cband radar a 6 cenm radar wavelength so they are both uh
[1:43:21] measuring uh the the surface included in in forested areas uh they are going to be measuring a
[1:43:33] different height within the forested areas because the radar the xand will be reflecting higher in the in the radar
[1:43:41] canopy and the seab band somewhat uh deeper into the forest but neither one of them is Imaging the ground underneath
[1:43:49] the forest great question number seven can insar be used to measure the surface roughness of water such as in detecting variations in
[1:44:00] water surface texture or wave height NO insar phase cannot measure surface roughness of water there are radar systems that can measure water
[1:44:11] waves by looking at the radar back scatter amplitude and this is a a very common technique used in a number of
[1:44:21] satellites but it's using the amplitude of the radar rather than the phase okay question number eight can we
[1:44:30] map topographic change by uh using free data and which one should we use the srtm data was acquired in
[1:44:42] February of 2000 and the cernus DM was acquire was based on um tandem X data acquired between 2015 and 2017
[1:44:54] they're both free and uh can be used to measure topographic change between those two two times um there's no other present source
[1:45:04] of of uh uh data from radar satellites but there other some countries have free topographic data that can be used to
[1:45:16] measure uh change uh with with other U topographic measurement methods okay question number nine has NASA or other space Earth uh remote
[1:45:33] sensing sensing groups ever proposed attaching Radar Radar antenna to commercial flights to collect high resolution data regularly uh synthetic aperture radar
[1:45:48] from airplanes requires a special design of the airplane it can not just be done from any airplane so there's some not
[1:45:58] possible to just connect it to any commercial airplane question 10 what is the minimum size the formation detectable using
[1:46:10] Sentinel one satellites the spatial size of insar the measurements that Sentinel can measure is about 20 by 20
[1:46:21] Metter if you have High coherence um the displacement magnitude that can be detected in a single interfer is around five
[1:46:32] millimeters but measurements of one millimeter are possible if you can add many many interferograms over a long time interval
[1:46:40] to measure uh a smaller uh displacement uh but we have to pay attention to the fact that atmospheric
[1:46:50] noise can be 1 to 5 cm and sometimes even higher so the accuracy of the measurement will be much uh lower um if
[1:47:02] the atmosphere is active during the um star Acquisitions great question number 11 does icei radar work on the same SAR
[1:47:16] interferometry principle how would an ice I image be converted to a DM for input into a Gis for
[1:47:25] example most iide data is acquired with single passes not in a an ESR compatible geometry that repeats the
[1:47:37] same pass exactly on two different orbits they are starting to acquire more data with orbits that are close enough
[1:47:46] together for insar um you would have to get uh two images acquir IR ired with the the right uh insar geometry to make
[1:47:57] a DM all right question number 13 if we're able to monitor crops with SAR then when we tried go ahead you skipped question
[1:48:13] 12 oh I'm sorry question 12 ins start data from Sentinel one only available please specify how to
[1:48:22] access the data uh the availability of Sentinel one data will be covered more in more detail next week in part three of this series
[1:48:33] but it it is generally available from the uh Copernicus data space system in Europe and the NASA Alaska satellite
[1:48:42] facility okay great thank you so now question number 13 if we're if we are able to monitor crops with SAR then when we try
[1:49:18] to build the topography with ins SAR does that mean we may end up getting signal from the plants instead of the
[1:49:25] ground surface and is it possible to separate these signals yeah I'm not quite sure whether they were asking about doing um DMS with
[1:49:38] insar insar uh uh where we would want to have two images acquired with the same geomet uh
[1:49:47] at the same time using cross track anomet doing inside in an area where there's crops um so I think it's the
[1:49:57] second question um insar measurements are affected by crops if the the uh crops have dense leaves and vegetation
[1:50:08] then that will cause a a loss of coherence for the short wavelength insar satellites such as Sentinel one other
[1:50:15] cand satellites or x-band satellites the L band radar of nysar and and other band satellites will largely go through the
[1:50:25] the crop vegetation and enable insar measurements of the ground surface below great question number 14 can you
[1:50:36] share resources to pre-process SAR imagery using the snap toolbox and also python uh the uh Isa step Forum with the link here has a
[1:50:51] uh is a great source of information about using the snap software and their um python uh snap
[1:51:00] py uh code that's a the best place I would would start great question 15 how accurate is
[1:51:12] detection of change in terms of meters or centimeters in case I want to detect height change of a building or want to
[1:51:19] do volumetric calculation in my area if a building is under construction and they're actually adding floors to the
[1:51:29] building then it will be changing the radar Reflections and then become incoherent for insar we can't measure
[1:51:37] the height of uh the height change of a building with a repeat pass interferometry only single pass cross cross trck interferometric
[1:51:49] topographic maps could be used to measure building might changes okay the next question number 16 what do you mean by
[1:52:02] displacement displacement sensitivity uh this is the how sensitive we are to uh displacement on the ground uh we can
[1:52:13] see uh around half a centimeter of displacement of the ground surface uh using insar with a a cband radar
[1:52:29] satellite all right question 17 discuss the difference between dinsar and and uh PS so polarimetric synthetic uh uh PS insar I'm not sure
[1:52:46] this is a an advanced topic so can't go into all the details the basic detail difference is that D
[1:52:54] insar distributed scatterer insar has averaged some number of pixels to measure the phase and displacement over an area of five to 20 or more pixels the
[1:53:07] PS insar or persistent scatter or insar method finds special pixels that have stable phase and amplitude and measure
[1:53:16] the displacements of those limited number of pixels great thank you question 18 how do different phase unwrapping algorithms
[1:53:29] performant areas with steep topography or or discontinuities and what are the trade-offs between computational efficiency and accuracy uh this is a really Advanced
[1:53:41] topic topic um we uh have a lot of people have been working on this for many years and I I think it's too
[1:53:53] hard to explain here okay may maybe something to elaborate um in in the when uh typing out the answer then uh question number
[1:54:05] 19 what are the limitations of two Pi phase ambiguity resolution when dealing with temporal decorrelation in multi-temporal insar
[1:54:15] applications yeah this is a an important limitation of phase unwrapping or phase ambiguity resolution the phase uh ambiguity cannot be accurately
[1:54:26] calculated if the coherence is too low or the area is decorrelated um and the the next question is very
[1:54:37] similar similar um the there are some approaches people use the main approach is to average more pixels
[1:54:55] um to uh to try to extract a a phase over a larger area area um if there's no if there's no
[1:55:09] information in the phase then it's it's impossible depend that's when the the coherence is effectively zero great then the next question number
[1:55:22] 21 how can we process inser images for time series land displacement please share how to process uh we uh covered this in some
[1:55:33] previous uh set tutorials how to do the time series analysis of in 2022 and 2023 so uh that would I recommend people
[1:55:48] go back to those previous trending sessions all right question uh we'll put the link to that here the next question
[1:56:02] number 22 beside ice motion is it possible to measure ice thickness and roughness uh the ice roughness is H
[1:56:14] similar to the water roughness it can be measured by looking at the radar back skatter amplitude not the
[1:56:23] radar radar phase um the ice thickness uh uh can be uh measured only with the uh single pass
[1:56:41] interferometry where we have two images acquired simultaneously with cross track andrometer okay then the next question number 23
[1:56:56] what is the major difference between SAR and insar applications uh the insar is H for measuring uh the
[1:57:09] displacement of the ground surface or disruptions of the ground surface that affect the radar phase uh other SAR applications uh learn
[1:57:23] can use the amplitude of the radar and the U variation with different polarizations to learn about uh uh
[1:57:34] vegetation structure soil moisture and other effects okay question number 24 pretty uh multi-tiered question here what is the common spatial framework
[1:57:54] that these systems are coordinated against that's to know where the observation platform is and how is it
[1:58:01] orientated oriented in relation to the object in the surface and what coordinated framework is used I think
[1:58:09] you mentioned that satellite themselves would have advanced systems to measure the difference between the antenna but the position of the platform in relation
[1:58:17] to the DM the modern recent SAR satellites including Sentinel one and and nysar and others have on board gnss receivers to
[1:58:31] determine the platform position and uh and uh other U sensors to measure the attitude attitude orientation so uh
[1:58:47] the then the satellite orbit is estimated from the uh GM n SS data in a and estimated in a standard terrestrial
[1:58:56] reference frame as it in um the operations of the satellites great so um we'll go through another two questions in the interest of
[1:59:08] time uh question 25 how can we be sure if our analysis is true or accurate how do we make sure the analysis is not
[1:59:17] affected by noise or some kind of ground survey uh should be done to validate the analysis uh this is a good question uh
[1:59:30] the an uh ins would be done with a Time series to so that we have more than one inogram to
[1:59:41] uh reduce the U effects of atmosphere that's changing rapidly and causing U the atmospheric noise so ground measurements are always
[1:59:55] helpful to validate the analysis great uh the next question how can insar be used to monitor ground
[2:00:06] acceleration in case of a sismic activity uh I think the uh question is about how I actually measuring the
[2:00:16] acceleration of the ground during the seismic earthquake shaking and insar cannot measure that we can only measure
[2:00:24] the static dis total displacement caused by an earthquake not the acceleration of the ground acceleration or ground
[2:00:33] velocity during the earthquake okay question number 27 how do the colors in interferometry I guess in an
[2:00:43] interferogram translate to physical distance of displacement is it possible to measure the actual displacement from the colors
[2:00:54] generally you can get some roof estimate but uh you want to get the original interferogram to really
[2:01:04] know measure the actual displacement okay the next question uh number number 28 I'd like to inquire the Pres about
[2:01:21] the position of horizontal and vertical deformation measurements in relation to volcanic eruption predictions specifically is there a definitive
[2:01:32] deformation threshold that reliably indicates an imminent eruption say within a couple of days no I don't this will be uh there's
[2:01:44] no uh threshold that can be applied everywhere a local uh volcanic observatories are the ones that know how a specific volcano is likely to
[2:02:00] uh behave and would would need to U be involved in in interpreting the the exact dep threshold that uh means an
[2:02:13] eruption is imminent and generally it's the seismic data for a volcano that tells the most information about exactly when eruption
[2:02:24] is about to start okay and then the last we'll end that question number 30 so number 29 can
[2:02:33] SAR data be used to pick up any patterns to predict earthquakes in Japan they're expecting a mega quake in nankai in the
[2:02:42] near future can SAR data help to take countermeasures in such a scenario we don't have any uh accurate
[2:02:57] precursor uh measurements to tell when an earthquake is about to happen in the near future so insar and gnss data are
[2:03:09] both measuring the surface displacements but there's no uh definitive measure uh to determine when an earthquake is about
[2:03:19] to happen okay and now then last question how do you determine displacement size of 1.2 with reference to the Nepal
[2:03:32] earthquake I guess this is from the example that you showed showed uh did the analysis to in the radar line
[2:03:41] of sight and it moved 1.2 meters in the radar line of sight after um unwrapping the insar phase and
[2:03:52] and uh estimating the displacement okay so with that we're a little couple of minutes um over but uh
[2:04:03] let's just end it there and we will answer all of the questions and place the Google Doc on the training web page
[2:04:13] um we have received a lot of questions so thank you for um all of your interest and questions coming in I would like to
[2:04:22] thank Dr Eric Fielding um for the excellent material um today I'd like to thank Dr Grace B for her support and I'd
[2:04:32] like to thank the aret team for um the all all of the support and putting this together before I close I'd like to um
[2:04:40] have uh Dr feling give some um closing words please go ahead yes we are um at JPL we're greatly
[2:04:50] looking forward to the launch of the nysar satellite in in a few months uh we be able to do insar over the
[2:05:01] vegetated parts of the world that are not presently uh accessible to doing good insar measurements and uh that's our goal in
[2:05:14] the short term at JPL to get the nysar satellite launched and in operations uh sometime uh during
[2:05:25] 2025 absolutely thank you very much Dr feling very exciting times with the upcoming launch of nysar so uh with that
[2:05:33] then we'll close this session please remember there is one last session as part of the series it will be next
[2:05:41] Wednesday at the same time and it'll be focused on uh different SAR data that's available through the Alaska satellite
[2:05:50] facility and resource ources for analyzing and visualizing data so with that wishing you all a great rest of
[2:05:58] your day and until next week bye-bye everyone
