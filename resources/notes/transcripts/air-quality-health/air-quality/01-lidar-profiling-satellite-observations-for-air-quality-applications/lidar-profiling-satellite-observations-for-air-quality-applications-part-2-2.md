# LiDAR Profiling Satellite Observations for Air Quality Applications, Part 2/2

`https://www.youtube.com/watch?v=-6YsozJoNLk` · id 240 · 53:11 · module 22 — Lidar Profiling Satellite Observations for Air Quality Applications

[00:02] All right. Hello everyone. Welcome to part two of LAR profiling satellite observations for air quality applications. I'm Ed Natnik from NASA
[00:10] Gddard Space Flight Center and I'll be your trainer for this second part. Okay, as I mentioned, this is part two
[00:17] of our training. Um, following our training, we'll have homework assigned and that will be due two weeks from
[00:24] today. The homework will be posted on the training web page and following completion uh each attendee will be
[00:31] awarded a a certificate uh certifying they've completed the the training course. course. So part two will be focused on
[00:41] how we translate our observations into data products and we're going to walk through the theory as well as do some
[00:49] live real world examples. So hopefully following this this training here, you'll be able to understand how some of
[00:57] the uh LAR data products such as aerosol type and cloud phase are determined from the fundamental measurements of the LAR
[01:08] system. So again, my name is Edna Watnik. I'm a research physical scientist at NASA Gddard Space Flight Flight Center. I've
[01:20] worked with a lot of airborne and spaceborne LAR systems uh both in space as well as some that are currently being
[01:29] planned to launch um in the early 2030s. So just a refresher of what we covered in part one. In part one, we identified
[01:40] past and currently available LAR missions and some of the differences between those different missions. We recognize the capabilities of LAR
[01:49] active remote sensing and measuring vertical profiles of aerosols and clouds and for how important they are for air
[01:57] quality applications. Now, we also focused on understanding the strengths and limitations of LAR observations. observations. Now, today we'll be focusing on number
[02:10] three and five. So today, as I mentioned, we're going to walk through the theory behind how some of these
[02:17] level two LAR products are are determined for a given scene. And then at the very end, I'll show you how to
[02:26] access LAR data. Um both quick looks for case studies as well as where to go if you want to download and analyze larger
[02:34] volumes of data. And the focus of today's training, we'll be using real data from two of NASA's
[02:42] airborne LAR systems, Calypso and Catz. These two are were primarily developed for aerosol and cloud profiling. In part
[02:52] one, we covered many other LARs that measured the atmosphere, but necessarily weren't developed um for atmospheric applications. So today we're going to be
[03:01] focusing on Calypso and Cats and at the end we'll um show you how to access data from those two LAR systems.
[03:10] So again um if you have questions, please put them in the questions box and we will address them at the end of the
[03:16] webinar. Feel free to enter them as we go. Uh that way you may, you know, in case you forget, uh pop them in the
[03:23] question box. uh we'll try to get through all of them during the Q&A and then the remainder of the questions
[03:30] will be answered in the Q&A document and we'll post that uh about a week after the training.
[03:38] Okay. So, first let's do a quick review of part one as it pertains to part two. So, as I mentioned we we're going to be
[03:47] talking about Calypso. Calypso was launched in 2006 as part of the NASA at training and it operated in
[03:56] space until 2023. Calypso operated at both 532 and 1064 nanometers and it established a long record of spaceborne LAR uh from NASA uh
[04:11] for data users to use. Um you useful for tracking aerosol plumes like I'm showing in the the bottom right here. This is a
[04:19] Saharan dust event transported from Africa into the Caribbean. And you can see over successive days, Calypso uh
[04:29] provided key vertical measurements of the vertical distribution of this dust event as it entered into the Caribbean.
[04:39] Now, CATS, just a refresher on that, was a a lowcost LAR that was developed for implementation on the International
[04:47] Space Station. This was a processing orbit. So it enabled dal sampling at different times of the day. Uh it primarily operated at
[04:57] 1064 nanometers but also had 532 nanometer measurements as well. And this instrument operated 33 months from 2015 until 2017.
[05:11] So before we move on, I wanted to pause and do a quick learning check. Um, so given the choices below, what are
[05:20] two differences between Calypso and Cats? Cats? A, they had different orbits. B, they are both LARs. C, they both operated at
[05:29] 1064 nmters. D, one one was part of the A train and the other was operating on the ISS.
[05:44] All right, hopefully you selected answers A and D. So, Calypso was in a polar orbit and cats operated on the
[05:53] ISS, the processing orbit. Um, and Calypso was part of the A train. So, um, these are some of the key differences
[06:00] between these two LAR systems. They're very similar in a lot of respects. That's why I'll be showing
[06:06] observations from both data sets interchangeably throughout the remainder of this presentation. All right. So, let's move on to
[06:20] the theory of how we get from LAR measurements of photons to level two data products such as um aerosol
[06:30] extinction, extinction, um aerosol type, things of that nature. So in part one we went over the fundamentals of how
[06:42] lightars work, how they collect photons at different ranges from the from the telescope. telescope. So now we have that vertical information
[06:51] of back scattered photons. What do we do next? Well, the first step is we have to calibrate the signal for back scatter
[06:58] light. light. And to do that, basically what we do is we normalize the back scattered signal to a region of the atmosphere
[07:10] where where we're relatively sure that it's free of aerosols. So that means higher in the atmosphere and so we we normalize to the
[07:20] molecular or signal. And here on the right you can see an example of the different regions of the
[07:28] atmosphere where various LAR systems tend to calibrate their signal. Now airborne systems are nominally operating at 20 km or less. So they have to
[07:40] calibrate calibrate um lower in the atmosphere. They have to be extra careful about avoiding clouds and aerosols in their calibration
[07:47] region. region. uh cats uh calibrated a bit higher in the atmosphere and clipso even higher. And so as you go higher in the
[07:56] atmosphere, you actually have less molecules. So you're playing the game of uh you want to be free of aerosols and
[08:02] clouds, but you also want sufficient signal to noise ratio to be able to calibrate to them to the molecular
[08:09] signal. And so here's an example of that. Um this is real data from cats. um and a
[08:18] groundbased LAR system called Poly XT in red. Uh they're the two squiggly lines here. And you can see this dash line is
[08:27] the theoretical molecular signal. And so that's what we're calibrating to uh operationally for cats and calypso. And you can see higher in the
[08:37] atmosphere, this signal more or less follows that theoretical line. And then as you get down closer to the surface,
[08:43] you see it deviates. And that's where we're getting particulates, whether it be aerosols or clouds, deviating from
[08:51] this theoretical molecular signal. Okay, so let's walk through some of the calibrated level one products. This is a
[09:04] cat's example here, and this is the total attenuated back scatter at 532 nmters. nmters. We call it attenuated attenuated because
[09:14] it includes signal attenuation. Uh we discussed this a bit in part one. You can see it here where these clouds
[09:21] are fully attenuating the atmosphere below it. We call it total because the back scattered signal includes both
[09:30] molecular and particulate contributions. So you're measuring molecules as well as clouds and aerosols. And this is this total attenuated back
[09:39] scatter whether it be at 532 or 1064 nmters nmters is the fundamental level one product that is used in LAR data. And this is
[09:49] used to go further down the road and generate level two data products. And so total attenuated back scatter
[09:58] is a measure of intensity. And you know, I've had lots of experience staring at LAR curtains, but looking at this, you
[10:06] can see that the clouds um these look to be clouds because they're higher intensity and back scattered signal.
[10:13] They're higher in the atmosphere. They're up around 15 to 20 km, whereas aerosols tend to have um
[10:21] vertical distributions more common to what I'm showing here. They're closer to the surface. They're a bit more
[10:26] homogeneous. homogeneous. Um, and as you get more and more familiar with LAR data, these these sorts of scenes will become more
[10:33] obvious. But we'll walk through all the steps um that are used to actually determine determine clouds versus aerosols and assign their
[10:42] phase and type respectively. So this is 532 nmters. Cats also operated in the near IR at 1064 nmters.
[10:52] And here you can see that this is the exact same scene, but you can see that it's very similar to the 532 scene. And
[11:00] I'll toggle back and forth. And one thing you may notice is there's a lot more signal in this region in 532
[11:10] nmters. That's because it in at 532 nmters, we have more molecular back scattering. And we use these two different
[11:23] wavelengths because as you'll see in subsequent slides, we use these the back scattered signal from these two wavelengths to help
[11:32] discriminate clouds from aerosols. Another level one product is what we call the perpendicular attenuated back scatter. scatter. And as I mentioned in part one, LAR
[11:47] systems measure linear deolarization from particulates in the atmosphere. And non- spherical particles such as ice particles and clouds or dust particles
[12:03] that are aerosols will back scatter light in the perpendicular plane. So you'd have a perpendicular component to the back
[12:11] scattered signal. And so because we're getting perpendicular attenuated back scatter, you know, we we thought that these were likely clouds. We thought
[12:21] these were likely aerosols. Now we have some information about their shape. And because they're non spherical, we can
[12:27] say, hey, this is likely Cirrus and this is likely dust. Okay, but how do we actually do that in the algorithms?
[12:41] Well, we have our calibrated signal and so the first step is to identify what we call features or layers in the
[12:49] atmosphere and these are the the deviations from the molecular molecular signal that I was discussing earlier. These are the particulates. We don't
[12:57] know what they are yet but we know that they are going to be either clouds or aerosols.
[13:04] aerosols. And so fundamentally how these algorithms work is you have your theoretical profile molecular profile and then when you see these deviences
[13:14] from that say oh there's a layer here between 15 and 17 km well we have to account for the
[13:22] attenuation in that layer and so we have re readjust the theoretical curve we say oh here's another layer here
[13:30] and we readjust the curve again and so here in this case in this single profile, we have four different layers.
[13:38] And so it's not uncommon to have multiple layers in in a single column. You can have multiple aerosol layers,
[13:44] clouds embedded in aerosols. Um, but this is the general approach for identifying features or layers. And for tenuous layers, it's not
[13:56] uncommon for LAR algorithms to have to average horizontally to uh to beat down noise and improve signal to noise ratio so that these
[14:06] features pop out from the theoretical curve. So that's sort of the traditional approach for feature detection. I wanted
[14:17] to mention some recent work that was done by Selmer at all. So very recently uh several groups have been working on
[14:25] signal denoising. And if you recall during the day um solar background contamination plagues the back scattered signal the measured
[14:36] back scattered signal by the LAR. So that makes the the data look extra noisy. noisy. So using machine learning techniques,
[14:45] groups have been developing methods to dn noiseise the daytime signal and it enables us to do feature
[14:53] detection at finer horizontal resolutions. Remember I said traditionally you have to average long distances using this feature um signal
[15:02] denoising. You no longer have to do that. And so here's an example from the paper. Here's a truth signal of
[15:09] attenuated total back scatter. Here's a noisy signal that would be uh representative of what was measured during the day. And then here's the D
[15:20] noiseis signal. You can see that looks much more comparable to the truth. And on the right are the the feature
[15:27] locations. And so here's the truth resolution. resolution. Um you can see that the the cloud feature detection was very fine. See
[15:36] lots of structure in the aerosol. When we do the standard feature detection, you can see it's much more
[15:41] blocky. And that's the side effect of averaging horizontally to do your feature detection. And then in the bottom column here, you
[15:50] can see that the denoised feature detection looks a lot more like the truth. So this is new capabilities that will hopefully be
[16:01] applied to past data sets but also data sets going forward to improve daytime signal to noise and consequently feature
[16:09] detection. detection. Okay, so we've talked about feature detection. detection. Now let's talk about depolarization ratio. So we talked a little bit about
[16:21] the perpendicular attenuated back scatter scatter and so what the deolarization ratio is is the ratio of the perpendicular return
[16:31] to the parallel return and recall that non- spherical particles will have a contribution to the perpendicular return. So that means spherical
[16:40] particles such as sulfates for example or water clouds will have depolarization ratios much closer to zero whereas dust
[16:49] and and cirrus clouds will have depolarization ratios that range from 2 to 6.7 and we'll walk through an example here.
[17:03] So, here's a a a profile of deolarization ratio from the CAT slider. And And here are some real examples of what we
[17:14] just talked about. So, as I mentioned, smoke tends to be spherical. You can see the deolarization ratio for that is
[17:21] ranges from 2 down to zero. Dust is sort of moderately polarizing. That's typically around 0 2 to 3. these
[17:31] yellows and oranges and these the ice within cirrus clouds is much more irregularly shaped and you can see those
[17:39] deolarization ratios are higher. They're 04 to 6 and beyond that. So this is how you start to use your level one
[17:48] observables to help identify the various feature types and this is how the the algorithms are constructed. We use
[17:57] things such as the polarization ratio to help identify cloud phase and aerosol type. type. Now that's depolarization ratio. Now
[18:08] we'll talk about color ratio. And so color ratio is the ratio of your attenuated total to back scatter
[18:17] at your two different wavelengths. So in this case it's 1064 nmters to 532 nmters. nmters. And what this does, it tells you
[18:26] information about the the particle size. So larger particles such as clouds exhibit exhibit color ratios that are 6 to one for
[18:38] cirrus clouds,8 to 1.4 for water clouds. Generally they're closer to one, meaning there isn't much spectral dependence in
[18:47] the visible and the near IR. Aerosols are smaller particles and therefore they have a much stronger spectral dependence at these tube
[18:56] wavelengths. And so what we do is we use this information to help identify clouds from aerosols. We call this cloud aerosol
[19:04] discrimination. discrimination. Uh and here's an example here where we have um some cirrus clouds. We can see
[19:13] that color ratio is closer to one and the aerosols are closer to 0.5 or so. So we use this color information to help
[19:22] separate clouds from aerosols. Okay. So that's what it looks like in the data products and then we start
[19:31] working towards what we call our vertical feature mask and that includes information of aerosols versus clouds as
[19:39] well as their phase and type. And so here's a a level one attenuated total back scatter scene. And here's
[19:48] using the color ratio and deolarization ratio. You can see how that translates into clouds and aerosols. You can see
[19:54] it's kind of binary, the blues versus the oranges. But we first assign cloud versus aerosol before we get into phase
[20:04] and type. And again, we primarily use the color ratio to help discriminate clouds versus aerosols. Now, once we've identified a feature or
[20:17] layer as a cloud, now we want to identify the phase. And this is where the deolarization information comes in.
[20:24] And here's a PDF of the deolarization ratio ratio for ice clouds and water clouds. And as we discussed earlier, ice clouds have a
[20:36] non- spherical component which generates back scattered signal in the perpendicular channel. And so we use the deolarization information to help
[20:46] identify cloud phase. Now there is some ambiguity at times like in this range here uh where it
[20:54] could be mixed phase. Uh there often we'll pull in temperature information from a reanalysis for example to help us
[21:01] with that choice. Um, and so here's an example. Here's attenuated total batch scatter from cats. Level one product. Here's the
[21:10] level two cloud aerosol discrimination. And then going here, here's the cloud phase. So the white clouds are the
[21:18] cirrus clouds. Blue are the water clouds. And you'll notice that the where it was orange in this panel is not
[21:26] depicted here because those are aerosols. This is just a a vertical profile of the clouds. and their phase.
[21:35] So that's clouds. Now let's talk about aerosol type. So now we have a feature identified as aerosols
[21:45] using um the the color ratio. Here's an example flowchart from the cat's aerosol typing algorithm for how
[21:55] we assigned aerosol type. And so there there's several inputs into this. One is as you can imagine the deolarization
[22:04] ratio that's very useful for identifying dust and and dust mixtures. Uh we use information on the feature
[22:14] thickness. Um is it really thick? It's more likely to be a smoke plume. The underlying surface type. Um are we over
[22:21] the ocean? The remote ocean. It's more likely to be marine or sea salt. uh the elevation, is it lofted high in the
[22:30] atmosphere? If it's very high, it might be UTLS aerosol. If it's lower, it may be a a smoke event again.
[22:38] And then often we for cats at least, we pulled in information using MERA 2 to help um assign an aerosol type
[22:48] where some of this information was kind of ambiguous. And so similar to the cloud phase map, here's a different case from cats. We
[22:57] have cats 1064 nmters level one total attenuated back scatter. Here's the feature mask. And then here's the
[23:05] aerosol type. And similarly, you see all these these light cyan colors which are clouds are not showing up in the feature
[23:13] type. And so I'm not showing it here, but this, you know, thick yellow plume is is dust. This black is is smoke. Here
[23:23] we most likely relied on the deolarization ratio information to help with that choice in the aerosol typing
[23:30] algorithm. Now for both clouds and aerosols, if we want to get to optical property retrievals such as extinction
[23:43] per back scatter light such as cats and clipso, you often have to assume an extinction to back scatter ratio
[23:52] known as the LAR ratio. This is part of the LAR equation which we're not going to going get into but you have to make
[24:00] an assumption about the LAR ratio and that's the purpose of this aerosol typing and cloudphase algorithm. Once we
[24:06] make that discrimination we assign a LAR ratio so we can do our optical property retrievalss and these LAR ratios can range from 10
[24:18] to 80 strains. They're generally representative of different aerosol types. And what we do is once we have the
[24:27] aerosol type map, for example, we can go in and do optical property retrievalss for the various contributions of the
[24:36] aerosol types to the extinction. So this is a curtain here where we have an a the continental uh urban pollution
[24:45] contribution to the extinction. Here's the dust contribution. Here's the marine. And so we can get more sophisticated in how we do our aerosol
[24:54] typing retrievalss um and our level two products. Okay, so we've gone through the theory of how we get to our level
[25:05] two products. Um we showed some case studies with a real world example, but here let's walk through this this again
[25:12] here with Calypso. Um so here we're moving to clipso. We have our total attenuated back scatter at 532
[25:22] nanometers in the top perpendicular in the component. And then hopefully looking at this you can you can start to think about what
[25:31] sorts of um features phase and type might pop out of this. So uh comparing box A um to the per in the total to the
[25:43] perpendicular you can see there's a contribution there. So hopefully you thinking oh this might be cirrus cloud
[25:50] uh in circle B here and we have strong signal in the total but not so much in
[25:55] the perpendicular that's indication of spherical particles. So you might be thinking uh this is some this could be
[26:02] something like sulfate or smoke for example. example. Now we fold in the color um ratio information information and you can see okay that you can you
[26:13] can see it with your eyes the spectral dependence in region B again indicating that hey this is likely aerosol
[26:21] in box A those look pretty much the same. Remember I said that the color ratio for clouds generally hovers around
[26:28] one. And so piecing these information pieces of information together, you can start to think about how um the level two data products are going
[26:38] to shake out. So here's the feature mask for Calypso. You can see it looks very much like
[26:45] uh the cats. Um as you may have guessed, box A is is a cloud and circle B is
[26:53] aerosol. aerosol. Um, if we go a little bit further into the level two aerosol typing, you can
[27:01] see that this was actually a little bit of a dust mixture here. Uh, so there was a little bit of perpendicular return.
[27:10] Uh, but not strong enough to be a pure dust case. And so hopefully you're getting more comfortable with how
[27:18] the LAR algorithms go from photons measured to calibrated signal level one products to feature detection to cloud aerosol discrimination to
[27:32] aerosol type and cloud phase. And so now we're going to walk through an example. Um, you know, let's say there's an event of
[27:43] interest and you may want to go see if cats or Calypso overflow that event and if so, you know, walk through the data
[27:53] products and quick looks to see what uh what the LAR saw. Um, and so let's first start with how to
[28:05] find an aerosol event and to see if Calypso in this case overflow it. All right. So now we're going to walk
[28:22] through a realworld example. First, we're going to see how or if uh Calypso overflow our event of interest. And so,
[28:30] I'm in the world view web page here. I have assuming NVP true color and I've already already um moved to my date of interest. And
[28:42] this is June 20th, 2020. Some may be aware of it. There was a monstrous dust event that came off the
[28:48] coast of Africa, made its way into the Caribbean, and into Texas, and actually had very adverse impacts for for air
[28:57] quality. Um, so you can see this huge dust event making its way across the tropical North Atlantic here on the
[29:05] 20th. So, let's see if um, Calypso intersected this. So, what you do is you go here, you click add layers.
[29:15] and you go up to the search bar and I often just type Calypso and for this case uh let's select both
[29:25] day and night tracks. Remember that um Calypso sort of parses their data by day and night. So let's select both of those
[29:34] and then we'll go ahead and X out of this. this. And And oh look at that. So, we can see that
[29:42] there's a a transact that goes right through this event. It's somewhere between 0450 and 0505 UTC. So, now we're going to go over to the
[29:56] Calypso Quicklook website uh and see what the data looks like. So, now we're on the main Calypso web
[30:09] page. page. Um, you can quickly get here by googling Calypso NASA. We'll also provide the direct link to the quick looks in our
[30:19] slides here. Uh, but here I'll show you how to navigate to the quick looks from the main web page. So, we're on the main
[30:26] web page. We go to products and select LAR browse images. And for this case, um, we're going to
[30:38] look at the most recent data release, which is version 4.51. And here you see a calendar of data
[30:45] availability. availability. So this event was June 20th of 2020. So here we are in 2020. Select the 20th.
[30:59] And it looks like there's a fair amount of data available on this day. And let's go scroll on down to try to
[31:06] find our event of interest. So I mentioned it was between 04 50 UTC and 0505. And here we are. And so you can see the
[31:27] time stamps here. This is the time time start is 0445. time end is 0531. And if we compare this to the world view
[31:38] image, if you recall, that event was located what looks to be along this pink curtain here. And so let's go ahead and
[31:45] select that. So this is a nighttime image. And here we go. So we get a nice map of
[31:54] the track. Here's the attenuated total back scatter at 532 nmters. You can see that this is you know very strong event. Uh we have
[32:05] back scattered signals in in this red portion of the color bar which is very strong for aerosols.
[32:12] So that's the 532. We go down to the 532 perpendicular back scatter. scatter. You can see that there's a significant
[32:20] component in the perpendicular part. And recall that we use that information to construct the deolarization ratio. And you can see that this deepole ratio
[32:31] is within the range that we discussed for saharin dust right 2 to4. So that all checks out.
[32:39] Now what about the 1064 nmters was what about the color ratio? So we have lots of signal in the near IR here.
[32:48] Let's look at the color ratio. And we have some it's mostly purple. Some you know eight or so I say would be
[32:57] the average. So indicative of aerosols in this case. So this is all checking out. It's looking like aerosol. It's dust.
[33:06] What does the feature mask look like? Okay, so the feature mask is coloring this mostly orange with some blue in
[33:14] there. There looks to be some embedded clouds within the Sahar and dust event. And you can see, yeah, this is number
[33:20] three, which is orange tropospheric aerosol. aerosol. Um I mentioned horizontal averaging during the day. Um if those are
[33:29] interested in that how how far along the curtain the signal was averaged to detect the features that's uh curtain of
[33:36] that. that. In this case we're focused on aerosol. So not so much on cloud phase. And then here we are. What's the aerosol
[33:45] subtype? And this bright yellow is saharin dust or desert dust in this case. And so this is a real world
[33:54] example of how you may want to go into and see if Calypso flew over an aerosol event or cloud event, convection event
[34:03] of interest and how you can find the quick look data on their website. So we walked through a case study for
[34:12] how to find Calypso data for your event of interest. I mentioned that I would provide the direct links to the quick
[34:20] looks for both cats and calypso. They're provided here on the left. You can see that the cats website for quick looks
[34:28] looks very similar to the calypso website that was developed and designed intentionally to mimic that so that the
[34:35] data user users would be you know comfortable with both um both uh data products. On the right is
[34:43] the direct link to the browse images that we just walked through um for this Dust Zilla event. Now, this is for
[34:51] individual case studies. Um for for cats, for example, um there is a an option to download HDF5 files um
[35:02] associated with that um we call it a granle or you know this this chunk of the the orbit. So just a subsection of
[35:10] the orbit. However, if you want to download let's say a month of data and or a year of data and look at um longer
[35:20] time scales of analysis, um um we want to go to one of the data acquisition centers. And for both
[35:30] Calypso and Cats, they're both housed at the NASA atmospheric science data center or ASDC. And here you can see that um they're
[35:42] sort of partitioned in various collections and um notionally these are with the the level of the data products.
[35:50] So level 1B would be your calibrated back scatter in this case. Your level two products would be your feature mask
[35:58] feature detection. Um so depending on what you're interested in, you can download a subset of these data
[36:05] products. You may download only daytime products. you may download only nighttime products. Um, as I mentioned, the the data products are partitioned
[36:13] accordingly. You can see there's a D in the uh the file name for daytime data and N for nighttime. Um, but so
[36:21] depending on what you're interested in, if you want to download larger chunks of the data, I highly recommend using the
[36:28] uh the ASDC for that. All right, so let's move on to the summary for this training. So, thank you
[36:40] again for attending part two of our LAR training. Today, we covered how to interpret information from LAR curtains
[36:48] to help identify cloud phase, aerosol type, and aerosol plume information for a given scene. What I hoped you really gained an
[36:56] understanding and appreciation for was how the different wavelengths and the polarization ratio information are used to classify clouds versus aerosols,
[37:07] their phase and type. Following that, we went to world view and walked through how to search for
[37:17] whether cats and calyp or calypso overflow an event of interest. In the live demo, we used Calypso.
[37:25] Um, if you want to see if cats overflow an event of interest or we entered Calypso in the in the search bar, just
[37:33] punch in ISS and you'll get the ISS orbit um um overlaid on top of your imagery. So, following that, we went through a a
[37:44] demonstration on how to access quick looks on the Calypso website. As I mentioned, if you go to the cat's
[37:51] website, it's structured very similarly. Um, and that's really useful for the quick looks or a case study. But if you
[37:59] want to download longer chunks of data, we recommend that you go to the Langley DAC or ASDC.
[38:09] So, I mentioned homework at the beginning of this. Um, we will have one homework assignment. It will open today
[38:16] and it can be accessed from the training web page. and use Google forms for your answers and it's due two weeks from now. And
[38:25] then following that, we will um issue a certificate of completion. So if you're interested in getting in
[38:33] touch with me, if you have follow-up questions, feel free to reach me at the email address provided here. Here are
[38:39] links to the RSET website and the RSET YouTube page. And if interested, we want you to uh visit our sister programs such
[38:49] as develop. And thank you all for attending the training. At this point, we're going to transition to our Q&A.
[39:02] Uh how can we tell that the cloud is ice and not water? Uh that's that's that's a
[39:07] good catch. We in the lighter community, we tend to refer to liquid water clouds as water clouds. Of course, ice is water
[39:16] as well. Um, that's just a um I guess not well defined term that we use in the
[39:24] LAR community. So, when I was referring to water clouds in the presentation, I meant liquid water clouds such as
[39:30] cumulus for example. Which LAR product has available data for South America? So, So, um, all of the space-based sensors that
[39:41] we went over last time and focused on this time will have coverage over South America. So, that would be Cats and
[39:49] Calypso today with the caveat that cats uh would only go down to 52 degrees south. Um, certainly ISAT 2 covers that. EarthCare,
[40:01] um, AOLIS, any of the polar orbiting sensors will provide measurements over South America, but that would just be,
[40:09] you know, sort of a curtain or two overpassing them per day per instrument. Um, on the ground, there are
[40:17] historically several micropulse LAR network, MPLnet stations, um, located in South America. I think there's an active one in Sa Paulo now.
[40:28] Um, and I think there have been some previous previous field campaigns supported by NASA that have also um deployed some groundbased
[40:39] systems there as well. Um, and I'm just referring to to NASA assets in this case. I'm there should be some other I
[40:49] suspect there are other um agencies or or countries that have deployed LAR to this part of the world.
[40:59] Okay. Why does EarthCare use 355 nanometers? nanometers? So um the 355 nanometer laser transmitter has been developed for space um
[41:16] with uh by issa in partnership with um um uh Leonardo in Italy. So that's sort of the technology demonstration and the
[41:27] reason for um going to 355 is these are highspectral resolution LAR systems. So if you were in the first um training the
[41:39] HSRL system really uh takes advantage of strong molecular or returns to help separate that from the particullet which
[41:51] are the aerosols and clouds. So, you want a really strong molecular return for the HSRL um um system. And when you get into the 355,
[42:02] you'll have a stronger molecular return than you would at 532 and definitely 1064 nmters. Is there a way to find data based on
[42:14] location instead of the time of event? I'm not aware of a easy way to do that. Um
[42:23] NASA has a website called Giovani that you can do with the passive sensors. So modus for example.
[42:31] Um Um the best way especially for case studies to check to see if the satellite of interest overpassed your event is to go
[42:41] into world view and then overlay the orbit tracks. Um, if you're going to do more sophisticated or or or
[42:51] more in-depth analysis and if you go to the DAC and download some of the data, then you could just, at least in some of
[42:58] my previous experience, I just put a a box over my region of interest and just check to see um if the satellite
[43:05] overpassed. Okay. Can we access and analyze data in the GE and is there any data available to
[43:19] Ethiopia? Ethiopia? Um could you specify what GE stands for? GE is Google Earth Engine. Ah okay. Um
[43:31] I do not know. Um we can get back to you on that one. Uh but there is certainly data available to
[43:40] Ethiopia through the NASA DAX and the Quicklook websites that we uh went over uh in this presentation.
[43:52] I don't know if it made it in here. I did see a question come through the the
[43:57] chat about single photon counting detectors. Um kind of more on the technical side. Um, so some of the LAR
[44:06] systems that we talked about utilizes single photon counting detectors such as cats and MPMED. Um, the ones I think you
[44:15] you were referring to uh I'm not aware of teams working on those at least in this context but um that technology of
[44:23] SPCMS has been utilized for atmospheric LAR previously. Is there a hyperspectral future for LAR or will it continue to focus on
[44:34] monospectral lasers? Um I think near-term just due to um technology maturation uh mono spectral lasers will probably be
[44:51] the near-term future. Um, I think there are some groups within NASA working on hyperspectral LAR systems and I believe those are
[45:03] primarily being demonstrated on airborne platforms at the time. So that's typically the path to space for a lot of these instruments
[45:12] is demonstrate your technology on an airplane and then that's a stepping stone typically to flight implementation. implementation. Is it possible to use these satellites
[45:24] to measure gas emissions in a specific area area of any gas emission measurements or environmental alerts related to air
[45:32] quality have been created? created? Yes. So there are some groundbased I don't know if you're referring to
[45:40] trace gases such as ozone um but there are trace gas groundbased systems uh to measure ozone methane um
[45:51] NO2 NO2 there are um methane ladders that LARs that have been deployed NOE light I believe that have been deployed on
[46:01] aircraft um I know Uh, I believe I have that correct is developing a space-based methane LAR called Merlin
[46:14] and have any measurements or environmental alerts related to air quality been created? Yeah, so these groundbased systems
[46:23] um as well as some of these um um you the space-based systems that we discussed for these would be more along
[46:32] the lines of like smoke hazards, things like that. Um there's near real-time capabilities. They certainly have been
[46:38] using in the past to help warn the public or provide um you know hazard outlooks or impact
[46:47] near-term forecasts. Can you do laser polarimetry LAR from multiple angles? So there are some groups um actually the
[47:01] University of Wisconsin they're they have a groundbased LAR system. they've developed one that that scans horizontally. horizontally. Um
[47:10] Um there have been some past concepts for sort of multiple multi-angle LAR systems um in including cats that demonstrated
[47:21] this for um about 6 weeks in the first um 6 weeks of its life. So it had two fields of
[47:30] view looking left and right separated by 7 1/2 km and there the idea was to look at you know spat smaller scale spatial
[47:40] differences in clouds and aerosols. Uh but there were some more sophisticated concepts floating around years ago that
[47:48] would have more diff more um view angles beyond just the two that cats demonstrated. Is it possible to obtain data for a
[48:01] specific cloud type? Yeah. So, what you'd want to do there if you're interested in cirrus clouds for example
[48:06] is um you know download your data file and this would be in the level two data products. You would have your feature
[48:16] classification. classification. So, you would look for a flag whatever it may be depending on the space-based system or groundbased system that
[48:25] correlates to ice clouds. And then you would use that and that that flag would provide you the bounds of the feature.
[48:33] So the feature top and feature bottom. And then from there you can look at things like the back scatter variability
[48:39] within uh the feature bounds. Different strategies use various space-time collocation strategies. What is the most widely recommended approach
[48:54] for spac-time collocation when comparing calypso with aeronet observations? So for things like yeah aerosol related research where they're
[49:08] generally don't um vary as quickly as you know convective environments. Um, Um, I think we typically use
[49:19] collocations collocations um with a 3-hour window, you know, temporally plus minus an hour and a half from the overpass time. Then depending
[49:28] on your application, you would set your um, you know, your range ring um, um, something like 50 kilometers, 100 km.
[49:40] Those are typically typically the scales we've used in the past. Again, that kind of depends on your your application. If
[49:47] you're looking at, you know, small scale variability, you might want to set that ring smaller than um broader analysis
[49:54] that you're hoping to perform. Uh and so for convection, just to follow up there, that's going to be a little
[50:04] bit tighter. So when we fly our airborne systems under spacebased systems, we typically use like a 30 minute window
[50:12] there just because in convective environments the scenes evolve pretty rapidly compared to aerosols. So can you talk about LAR applications
[50:26] for wildfire fighting? Yes. So certainly for wildfire fighting you want your data products uh available in near
[50:36] real time or real time if possible. So um NASA has had a few field campaigns that have looked at um you know fire
[50:47] emission and environmental controls. Uh they've flown lightars on those aircraft. aircraft. Um, and those goals were kind of more
[50:57] focused on helping to constrain downwind effects and improving the forecasts downwind. Um, more recently, I'm aware of some groups that are developing
[51:09] UAV um, technologies so that they can deploy a small scale LAR in these, you know, these challenging environments
[51:18] where you wouldn't want to be, you know, operating a groundbased system or potentially even flying within these
[51:24] wildfires. wildfires. uh where you would hover over the um you know the wildfire, get an estimate of
[51:31] the the plume height and use that to help forecast uh downscaling or downwind effects. effects. that's more recent that uh this this UA
[51:43] U UAV development and just another sort of application that I know was used for both clipso and
[51:53] cats was um helping to characterize um bloom thickness and tops of volcanic eruptions as well because that has
[52:04] certainly important radiative impacts on the um on the earth but it's also very important for the aviation industry to
[52:12] understand where those uh events are located in the vertical in the atmosphere so that you know they can
[52:20] avoid those reason regions. So as we mentioned the homework will come out following this second part. I hope
[52:33] everyone who attended today um learned something and um looks forward to working with LAR data going forward.
[52:41] Certainly reach out to myself or Melanie if you have any follow-up questions that you didn't think of today.
[52:48] And this point I'll maybe turn it over to Melanie just in case I I missed something or if you want to add
[52:54] anything. anything. Nope, that all sounds great. Thanks Ed for a fantastic presentation. Thank you and thank you to everyone who
[53:03] attended. Have a good day.
