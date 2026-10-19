# Using the Fire Mapping Tools to Map Fires, Part 1/2

`https://www.youtube.com/watch?v=n3UCO2BoALg` · id 235 · 1:53:19 · module 124 — Satellite Observations and Tools for Fire Risk, Detection, and Analysis

[00:03] Hi everyone. Welcome to our webinar using the fire mapping tool to map fires. This is the first of two webinars that
[00:12] will be holding on techniques for wildfire detection. We are very happy to present Josh Picotte who will be our guest speaker
[00:21] for today talking about his fire mapping tool. tool. Before we get started though, I wanted to tell you a little bit about how this
[00:30] course is structured. There will be two two-hour sessions, one this week and one next week on Thursday. Session A will be
[00:39] 10 to 12 Eastern time and session B for each week is 6:00 to 8:00 p.m. um Eastern time. You only need to attend
[00:49] one of these sessions because they are exactly the same. Again, our guest speaker this week will be Josh Picotte
[00:56] with the USGS. Um he will also be on the end of the second week to answer any
[01:01] questions you might have about the fire mapping tool. All our recordings, the PowerPoint presentations, and the homework
[01:09] assignments can be found after each session at our website listed here. And then following each lecture and each
[01:17] exercise, we will be available for Q&A or you can email me or my colleague Amber McCollum at my email address
[01:26] listed here. There will be one homework assignment at the end of the second session next week. The answers must be submitted um via
[01:37] Google Forms. In addition, you can get a certificate of completion, but you have to attend both live sessions from both weeks and
[01:45] complete the homework assignment by August 2nd. You'll receive certificates approximately 2 months after the completion of the course.
[01:58] There are several prerequisites for this course since it is an advanced course. First, you have to take fundamentals of
[02:04] remote sensing session one and two A. Um, you can get that again on our webinar and you can look at it anytime
[02:11] you want. It's an on-demand webinar. It's also very important. Um, hopefully you have all already done this, download
[02:19] and install QGIS and all accompanying software. Um, we have an exercise available to help you with that called
[02:26] downloading and installing QGIS. So again, hopefully you have all done that before you've um, attended this webinar
[02:34] today. today. And we also strongly recommend that you actually open um, QGIS if you haven't used it before to make sure that the
[02:43] software is working properly. Again, to accept access course materials, you can go to our website listed here. Um, you'll see the
[02:53] registration information, the course agenda, um, and details about each of the sessions as well as access to uh,
[03:02] the homework and the exercises. So the overall outline is this week, session one, um, Josh will be giving an
[03:12] overview of the QGIS fire mapping tool. And then next week we'll be focusing on the global wildfire information system
[03:21] or GWIS. So at this point I'm going to turn it over to Josh. So hold bear with us for a
[03:29] minute while we switch screens. All right. So thank you very much for the introduction, Cindy. Um, to start this presentation, I'd
[03:42] really like to thank USGS uh, uh, Earth Resources Observation Science Data Center in Sioux Falls, South Dakota,
[03:49] um, um, for making all of this possible. Um, I was originally based out of there. I'm uh in Sioux Falls, South Dakota.
[03:55] I am now teleworking out of Los Angeles, but I'm still working with Eros. Um, I'd also like to thank the retired
[04:03] project lead, Stephen Howard. Um, Um, who really did most of the program uh did most of the management of this
[04:12] project and who got a lot of this project started. And I'd also like to thank the tool
[04:18] developers, Sheryl Hollan and Karthik Panimalai. Karthik was the original developer and um Sheryl has since taken over from him.
[04:26] So, and they've they've done a great job on the uh fire mapping tool. And finally, I'd like to thank the NASA
[04:33] Applied Sciences Program Wildfires Project NNH12AU7 11. Um, because NASA funded the majority of this project, although my percentage of burn severity
[04:47] has since taken over the funding um from NASA. So, today we're going to start off with a little
[04:56] bit of background on burn severity and how we actually measure this using remote sensing methods. We'll also talk
[05:04] about Landsat and how Landsat imagery feeds into the whole burn mapping process. process. And then we'll talk about um some image
[05:15] parent considerations when picking a pre- and post-fire image. Um, and finally, we'll actually I'll actually introduce the
[05:24] um QGIS fire mapping tool. So, to start, I'm going to give you a few basic definitions and explain burn
[05:34] severity. severity. So, we're going to start with fire intensity, which is the amount of heat released per unit of time or area.
[05:40] Um, and so basically that's important because fire intensity directly affects burn severity. Um burn severity is the actual
[05:51] effect on ecosystem properties. Um it's often defined by the degree of mortality vegetation. It can also be the
[06:01] degree of damage to the soils as well. So, loosely fire burn severity is a product of fire
[06:09] intensity and uh residence time, so how long the fire is burning on the ground. Um soil burn severity is the actual fire
[06:19] induced changes that change both the chemical, um physical, and biological properties of the soil. Um And that generally impact hydrological
[06:31] hydrological and biological soil functions. Um so, just to give you a really nice pictorial example of fire intensity
[06:41] versus burn severity. Again, fire intensity is the amount of heat. It's It's the It's the um how hot the fire gets that re- results
[06:52] in vegetation damage. And again, uh I should also say it results in awful soil burn severity damage as well.
[07:04] So, from a field perspective, there's ways to assess burn severity on the ground. One is Key and Benson's
[07:12] composite burn index. And what this does is it does a visual estimate um of actual damage to the vegetation and the
[07:18] soil. soil. Uh generally, researchers hike through and observe burn scalars and then rate the actual amount of severity.
[07:27] There's also ways to assess from a soil uh uh burn severity metrics including um water repellency tests of seeing how long it
[07:34] takes for the water to infiltrate soil. And just some visual tests of how do the soils change in color.
[07:44] From a satellite perspective, we can also see burn severity. On the left, you can see a Landsat image
[07:49] that shows a fairly recent fire scar that generally crosses grasslands and shrub areas and gets a little bit into
[07:56] the forested areas in the center of the image right here. And we can directly correlate this with
[08:03] on the ground measurements to then threshold the imagery to get a burn severity map. And so this burn severity
[08:09] map will give you more of these throughout the presentation. Um dark green is the is unburned. Mid green is low severity.
[08:17] Uh yellow is moderate severity and red is high severity. So if you want to kind of relate the
[08:25] two, we actually can look at the imagery and relate it to what's what's going on on the ground. So
[08:32] were trees killed? Um is there any remaining vegetation? Um if it's been a little bit time after
[08:38] the fire, can we actually see areas of regrowth? Um if it's been a long time after the fire, there areas
[08:44] that have since um that have since shown some more tree damage such as tree dieback or some
[08:51] um delayed mortality. So when we talk about remote sensing electromagnetic magnetic energy, we're talking about measuring how light
[09:01] reflects off the ground um in different spectra. And by measuring these uh spectral response curves, we can
[09:08] identify identify the type of vegetation that's on the ground or um in this case, the amount of burn
[09:15] severity. severity. And this is due to the different again spectral response curves um in the different um electromagnetic magnetic
[09:23] energy spectra. So So the spectral response there's different peaks within the spectral response curves. Um so for example, in the
[09:34] visual spectra, you can see one spectral response curve that is uh results because of chlorophyll pigmentation. There's also
[09:43] a a spectral uh peak um in the mid-infrared um because of healthy plant cells and how they how energy reflects off of
[09:53] them. them. And then finally there's two additional peaks um that are in the mid-infrared that are due to water water absorption in healthy
[10:02] plant cells. In order to exploit these curves, we can see the difference between healthy vegetation and burn severity. And so if you look uh
[10:16] towards the mid-IR, you start to see peaks peaks that differ in intensity um at the low, moderate, and high.
[10:32] So when we start thinking about what satellites we're going to use, we take into consideration several factors. The
[10:37] first factor is resolution. So how small of an object can we actually see? Uh and this differs dramatically between
[10:45] different sensors. Some are going to have much coarser resolution, and this means the pixels are much larger
[10:51] as compared to some that have very fine resolution. The extent of the image, so can we actually see the entire fire scar in one
[10:59] image or would it take several images? Um Um they would need to be mosaicked together to be able to see the fire scar.
[11:08] Um revisit time, how often can we see the same area? And this really is important because in
[11:14] some areas, especially areas that get a large amounts of clouds, we may not be able to get many images
[11:20] per year that are really that useful. And so if the revisit time is infrequent, we may not get usable
[11:26] imagery for much of the year, or we may only get one or two images per year. And finally spectral sensitivity. So, we
[11:33] talked about the spectral response curve. And there's different peaks depending on what you're looking at. So, how many
[11:39] colors can we actually see and what what areas of the electromagnetic spectrum do they actually occupy? The sensor we'll be dealing with today
[11:50] is Landsat. Um Um we'll be specifically dealing with Landsat 5 thematic mapper. Um its lifespan lifespan uh it's been around for 30 years between
[12:02] 1984 and 2011. Um and TM imagery has seven bands. Landsat 7 has been around from 1999 to
[12:11] present. However, I will say after 2003, it has data gaps in it. Um and so, it's not as complete as Landsat 5. And
[12:19] Landsat 7 right enhanced thematic mapper has eight bands. And finally, the newest sensor, which came online in 2013, is Landsat 8
[12:29] operational land imager. Um it has 11 bands. All these sensors have 30-m resolution in the electromagnetic bands. And if you
[12:38] look at this graph over here, what you can see is they for the most part, each sensor overlaps
[12:46] with one another. Um again, OLI has more bands than Landsat 5 and um Landsat 5 and 7 are actually more
[12:53] similar um in the bands that they they monitor. monitor. But, they're still small enough to be able to do um
[13:03] the same types of mathematical operations to assess burn severity. So, for burn severity mapping, um a lot
[13:15] of image processing methods depend on which sensors you use. Again, for this application, we're going to use Landsat
[13:20] data. You could also use Sentinel data. However, at this time, the tool we'll be discussing in a few minutes um is not
[13:26] set up to work with that data set. One thing that we do is we calculate the um normalized burn ratio
[13:34] um for an image, which is just the difference in the near infrared and shortwave infrared divided by the sum.
[13:40] And from these um if we get a pre-fire image, uh pre-fire image is usually taken in the same
[13:47] season as the fire. It can be in the same year as fire or it could be 1 year
[13:52] previously. previously. And if you look at this image, you don't see any fire scars in the middle right
[13:56] here. And if you calculate the NBR, what you'll see is just a lot of pixelation. You'll see um brighter pixels showing
[14:02] healthy vegetation, darker pixels showing less vegetated areas. As compared to the post-fire imagery, in which you can see clearly see a fire
[14:11] scar. scar. And in these normalized burn ratio values, in this case, burned areas show up as more negative values. The higher
[14:17] the burn severity, the more negative the value generally, or values are not always negative, but the basically the values range from 1,000 to
[14:25] -1,000. The lower the value, the potentially the higher burn severity. And so if we difference these two, which
[14:32] is just subtracting um Excuse me. The uh pre-fire and the post-fire, what we get is we get a differenced image in
[14:43] which higher values show um higher higher potential change between the images. And so if you look around the fire scar, values should be
[14:52] low. Generally, if if it's a perfect uh image composite, if there's no phenologic changes between the vegetation, if the sun angle is exactly
[15:01] the same, you would see values generally around zero um around the outside of the fire scar. Within the fire scar,
[15:09] um again, higher values are these brighter pixels um that may be may result from higher burn severity. In
[15:15] this case, less vegetation, potentially more soil exposure. Um Um so you can then take these images and
[15:22] actually threshold them. So, if you know what the um um how the imagery corresponds to the on-the-ground burn severity,
[15:31] you can then subsequently threshold it into uh the unburned areas for these dark green values, values, the low severity, which are these mid
[15:41] green values, uh yellow, which is moderate, and red, which is high. A variant of the differenced normalized
[15:52] burn ratio is the relativized differenced normalized burn ratio. Um and this was developed by Miller and Thode in 2007. And basically,
[16:01] what it does is it tries to account for differences in vegetation um between areas. So, if you've got low
[16:07] versus high vegetation cover, um um and so, it measures relative change um of vegetation in regards to the pixels.
[16:16] You could have a really an area of high vegetation, which is going to get a lot of change. So, both the NBR and RDNR
[16:22] have the same values. Kind of moderate again, where you can see the NBR and RDNR have similar threshold values. Once
[16:28] you get to lower canopy cover, sometimes the values are very different. And so, RDNR can be used to um
[16:36] better predict the NBR. Now, I should say that there's um other research that shows RDNR is not always effective, and
[16:43] it's definitely not effective in all vegetation types, and may not be effective in your area. But, it is a commonly used
[16:50] way in the United States to um assess burn severity in addition to the differenced normalized burn ratio.
[16:59] So, when you start thinking about what uh the time frame from which we're going to obtain our pre-fire versus our
[17:04] post-fire image, we have to think about a couple of things. The first thing is especially um whether we want to do an initial or
[17:14] an extended assessment. Um an initial assessment is done during the same year, generally the same season as when the fire occurred. So,
[17:24] for example, if this fire occurred, um, in August, we'd like to get a post-fire image in October.
[17:31] Um, as close to the fire as we can, once the fire's out. Um, and then we would like to obtain a
[17:39] pre-fire image during the same season, generally the year before. Now, if there was an image available in July, and it
[17:47] was spectrally very similar to the post-fire image, um, I mean, in terms of areas that have not burned, we could
[17:54] also get one that just has to be during the same time frame as the post-fire image. Um,
[18:01] an extended assessment is generally 1 year post-fire, um, during the same season of burn, or actually, it's
[18:10] generally more or less, um, obtained during the peak of green during the subsequent season. season. Um, and so that we would therefore get a
[18:19] pre-fire image again during the same time frame. It could be the same year as the fire, it could be back another year.
[18:25] But, generally we have about a year between the pre and the, uh, pre and the post for extended assessments as well.
[18:31] And extend- extended assessments start to measure late mortality, and also things like whether an area's starting to regenerate. And so, depending on why
[18:41] you want to, uh, do the assessment, you may have to choose between doing an initial or extended. You may want to do
[18:47] an initial if your area, um, is really highly vegetated and responds quickly, and therefore the fire scar will
[18:53] disappear very quickly, making having an extended assessment useless. Um, but you may want to do an extended,
[18:59] uh, assessment if your area doesn't recover very quickly, or you actually want to see some of the recovery and
[19:04] assess areas that have not recovered. So, it kind of depends on what you want to use it for.
[19:14] So, again, initial assessment is generally done during the same time frame as the actual fire. So in this image you
[19:23] can see kind of a fire scar. It's kind of hard to pick out. It's a shrub area.
[19:27] It's got less uh uh it's harder to differentiate with the fire scar within within this Excuse me. Within this reflectance
[19:35] image. image. As compared to a normalized burn ratio image image um um compiled from the same reflectance image
[19:42] in which you can see the fire scar very clearly. And you can delineate these brighter values or areas where it
[19:47] potentially burned potentially burned or removed more vegetation. Again, it's it's still a little bit difficult to see
[19:54] just because the of the high sparseness of the surrounding vegetation. An extended assessment again would be 1
[20:02] year post fire. And so what you're starting to see are these areas of green up or vegetation regeneration.
[20:09] And so when you look at the normalized burn ratio image, you see these darker values uh more
[20:15] in which uh in which we can see that the vegetation's regrowing and that there again that there are much darker
[20:24] spectral than the rest of the fire scar. In fact, in this one it's kind of hard difficult to even pick out the fire
[20:29] scar. scar. So in this area you might not want to an extended assessment. Again, it would depend on what your objective is
[20:36] um for doing the burn severity assessment in the first place. Um Um Another consideration is um um the Landsat scene pair. So
[20:49] we want to make sure that we have good pre- and post-fire image uh scene pair for the DNBR image. So in
[20:55] this example let me just go back and forth. Um in the first image you can't see a fire scar.
[21:02] When you compare it to the second image kind of the areas of unburned areas are very spectrally similar or at least
[21:08] visually similar. Um and you can see the fire scar very nicely. And one thing to take into account, you can see these
[21:14] shadows. And so those are going to show up in the DNVR image. Or clouds, you should be very You'd be
[21:19] careful with that. So again, you can see the fire scar, but you can also see these artifacts.
[21:25] Luckily, these cloud and cloud shadow artifacts are not within the fire scar. They're not really um impeding it at
[21:32] all. Um Um you also want to make sure that there's limited between scenes seasonal variation. And one way to measure this
[21:41] is by looking at normalized difference vegetation index uh values um per vegetation type over the fire scar.
[21:50] Um you can do this by creating normalized difference vegetation index um um image yourself. Or if you're within the
[21:57] conterminous US, right now on the uh MTBS website, there's actually a page that that um you can actually look at the kind of
[22:04] the overall scene NDVI values. And so what you want to do, again, NDVI is kind of a measure of greenness.
[22:12] So the higher the value, the greener the um the pixel. If we compare, for example, these um
[22:21] two time frames, one from um March 31st, 2010, and the second one from April 16th, 2010, what you can see
[22:29] is the value is relatively different. You can see a positive slope. And this is because when you actually
[22:36] look at the imagery, you can see you're going between a time of senescence, that's the left-hand image in March, to
[22:43] a period of rapid green-up. And so you're getting this really big change between scenes. And so in this case,
[22:49] you'd want to make sure that if you're monitoring a farm in this area, that you pick the scene where the pre and the
[22:55] post matched up phenologically. And again, um NDVI values can kind of show how green, on average, the scene is.
[23:05] And again, you also want to be careful if you're looking between years for the difference. So, in this example, the
[23:10] 2009-2010, if you look around in January, and this is in the panhandle of Florida, what you can see is that the
[23:17] NDVI values are very similar, and so there's almost no difference between them. So, these would be good scene
[23:22] pairs. pairs. However, if you look at these um scene pairs after July, what you start to see
[23:29] is um I I shouldn't say July. I thought it was a difference in uh phenology, and what you can see, the
[23:36] 2009 scene is much greener than the 2010 scene. It has And this is only a difference of about uh
[23:43] -0.04 between uh NDVI values between the two. And so, these two scenes probably would not are probably not useful
[23:53] um um for for uh difference in the create difference normalized burn ratio um image just because of the difference in um
[24:01] phenology between the two. Another thing to be careful of are differences between um um I should say between image land cover
[24:11] changes. changes. So, in this image, you can see these higher um dNBR values, and these result from agriculture. If you have areas of
[24:19] agriculture in your fire scar, they may show up as high severity or low severity. They they may alter the um
[24:26] again, severity, so you do not want them within your scene. Areas of development or land clearing or
[24:32] potentially like a timber harvest post-fire also react uh also result in changes to the difference normalized burn ratio values. So, you have to be
[24:41] careful with these, make sure they're not within your fire perimeter. Another thing to take into account is
[24:46] that a fire that burned the year before may be regrowing, so you may get these darker values, these darker um
[24:53] when you get actually vegetation recovery. And so, you'll want to sure that there's not a lot of vegetation
[24:58] recovery in your fire scar. Again, unless that's your unless that's an objective in your extended assessment. So, these fire
[25:06] scars right here, you should make sure that these potential problems do not occur within them. The other thing you want to make sure is
[25:12] you actually understand where the fire occurred. So, there's multiple fires here. They probably didn't occur on the
[25:18] same day. So, it's nice to know exactly when each fire burned when it did. You also make sure that each image, so
[25:27] the the um pre and the post have similar reflectance brightness. So, you can look at the For example, on this one
[25:34] you can see that the left-hand image um is much brighter than the second image, and this is because it's got a
[25:39] higher solar elevation, lower um sun azimuth, and so you can see a brighter image. Um again, this one is very different uh
[25:50] because of sun elevation and sun azimuth angles. Also, the image on the right still has snow, so taken from You can
[25:55] see that in kind of the blue coloration throughout the landscape. So, you can see these two images really don't match
[26:01] up well at all um for image pairing. And same thing for this one. This image you can see in areas probably either
[26:10] spring or you know, being close to peak of green versus one taken um in the dormant season, where again there's a
[26:17] big difference in sun elevation and sun azimuth azimuth angles. So, post-fire and pre-fire Landsat scenes should also not
[26:30] have clouds within them. They should be cloud-free. Um this is because clouds really can obscure the burn severity
[26:36] value value and really change um uh some of your change I'm going to redo this slide. This is And this is slide 41. This is
[26:47] because um clouds can really change reflectance, which ultimately really alter your assessments of burn severity. Um here's another example where you have
[26:58] clouds surrounding everywhere. It's possible in this image if a fire occurred maybe in the south end you
[27:03] might be able to get a good image for the for for a fire that occurred here. But for the remainder of the image it's
[27:09] really not a good image. Um and that's also because of the snow in the mountains. You should always be a little bit uh
[27:16] wary of clouds even these kind of hazy clouds again the cloud shadows they really can alter the um
[27:24] reflectance of the imagery. And again you should be careful not to have haze in the imagery. Um it may not
[27:30] show up very well, but if when you difference the images um to create a difference normalized burn ratio image
[27:37] um it may look very different because of this haze. And finally again make sure you don't have snow within the fire perimeter.
[27:46] It's going to change the imagery uh the image image spectrally and will result in very different burn severity values.
[27:54] I suppose another way to deal with limited snow would be to mask it out. Um so you could still use the same image,
[28:01] but then you also have to make sure that the other image pair kind of matched geologically and that can be difficult.
[28:07] Um Um during winter. You also make sure that there's no active burning within the within the fire perimeter. Again you might get some
[28:16] smoke or shadows and you'll get this active fire line which really changes um the burn severity values.
[28:27] You should also be careful to see that the fire scar maybe a little fire here and here.
[28:31] That That um they're not near the near the scene edge of the actual Landsat scene edge. And this is because they get kind of cut
[28:38] off and you get these patterns that are um not resulting from fire. These are just um artifacts that are the result of
[28:46] being near the scene edge of the Landsat scene. And you should also be careful, and this may or may not be possible depending on
[28:55] your image availability, but it's nice to try to get This is the Landsat 7 scene, so you can see the scan line
[29:01] artifacts, these data gaps in the image. Um they extend on either side of the center of the image. On the center of
[29:07] the image, you can get a scan line pre um image. However, when you get close to the edges, you start to get again scan
[29:15] gaps. gaps. The data gaps. And so, these can really start to alter um fire scars. And if it's a small fire,
[29:23] um um it may take up a scan gap could take up a lot of the fire scar.
[29:28] So, So, you know, when possible, try not to use um um imagery with data gaps. Um And this isn't always possible, and so
[29:39] there's way We generally just mask out the image um the uh image data gaps, and map the fire
[29:46] scar the way it is, and that may be what you have to do, but you should be
[29:50] careful again with these data gaps. Let's talk about the fire mapping. You know, I've kind of talked about
[29:58] how we actually pick scenes to monitor fires. Let's talk about the uh fire mapping tool. The fire mapping
[30:04] tool was originally developed in the United States to kind of supplement the Monitoring Trends in Burn Severity project. Now,
[30:13] Monitoring Trends in Burn Severity project maps a lot of fires every year in the in the US. They map about 95% of
[30:19] the acreage. They map, you know, generally over 1,000 fires a year. The problem when you The problem is when you look at, for
[30:25] example, the 2016 fire occurrences, the occurrences within the US, and most of these are going to be small fires, and
[30:31] they kind of look like the entire South is Southern United States is burning, but this is just an artifact of these
[30:37] just being points, and not actual probably um not actually perimeters of the fires. What you see is
[30:44] that there's lots and lots of fires that go unaccounted for. And so, MTBS maps, again, 95% of the fire acreage,
[30:51] but misses, you know, 99 and a half percent of the fires some years, uh up to, you know, they may miss
[30:59] They may only map 2% of the fires. So, MTBS MTBS doesn't map, um, any small fires just
[31:06] because it's it's cost prohibitive and it and just can't be done. always good records for all these fires as well.
[31:14] So, the fire mapping tool was developed with an eye to actually, um, um, hopefully, give users, um, tools to more
[31:23] accurately map burn perimeters and severity with Landsat imagery and use similar techniques to the Monitoring Trends in Burn Severity project.
[31:31] Um, the big difference between the Monitoring Trends in Burn Severity project and the tool that we use is that
[31:39] for the fire mapping tool, we actually use QGIS. And the reason we use QGIS is because it's open source,
[31:45] um, and can be used anywhere in the world, whereas some of the tools that, uh, MTBS uses
[31:52] can be, um, have fees associated with them and can be cost prohibitive. Um, and so, we want to make sure that we can
[31:58] get the tool out to anyone. So, this is the plugin, the fire mapping tool. You can see it on the right hand corner of the
[32:08] screen right here. Um, it's just has a drop-down menu, like a lot of other plugins within QGIS. So, it's in that
[32:15] kind of the same framework. And the SMT will allow users to actually process Landsat imagery that have been
[32:23] ordered through the Eros Science Processing and Archiving System. The reason we have, uh, ESPA process these data sources is
[32:32] because it does the top of atmosphere corrections. They can also do surface reflectance corrections, even though um generally
[32:43] uh we've been using top of atmospheres because that's what MODIS Burn Severity has used and we're more familiar with
[32:48] potential um burn severity break points with top of atmosphere corrected data. You can the FMT will take a pre-fire and
[32:57] post-fire image and create a dNBR image. Um the FMT will also allow users to actually map fire perimeters and
[33:06] potentially uh create masking shapefiles to map out potential image anomaly anomalies such as water, clouds. clouds. Um it also will calculate automatically
[33:16] calculate RGR offset and subsequently create an RGR image. Now, um it also allows users to input their own, so
[33:26] the tool offers suggestions since it's the RGR offset. They're not um I wouldn't say that any that the value put
[33:34] into the tool is necessarily perfect, but it's a good first guess. Um it also suggests potential low,
[33:40] moderate, and high burn severity thresholds. Um and again, this is even potentially more problematic than RGR offset. Um these
[33:49] break points are estimated based on the spectral characteristics of the imagery. Um I'm not going to go into detail right
[33:56] now on how that's done, but the point is is they're just estimates. And so, uh really users should should be familiar
[34:04] with the um area to make sure that those uh estimates that we make sense and actually start to visual visually
[34:10] threshold the uh imagery themselves. Um Um subsequently, the FMT will create a threshold burn severity product and
[34:20] output metadata that uh uh defines a lot of the uh characteristics about that fire mapping product and all the
[34:28] information that was used to create it. Um and finally, all this information that's been entered into the um FMT is
[34:36] database is in a special light database. And so, this allows you to do spatial queries, to actually query a database um
[34:45] about the about the fires you've actually mapped. Um Um And finally, um even though we're going to go in
[34:54] to go through the workshop exercise today, um there's also additional documentation um at mtbs.gov at qgis-fire-mapping-tool. Um there's actually another
[35:08] similar exercise in there. Um but it also has a little more detail about how to pick images and some of the
[35:14] things that we do when mapping fires. Um It's part of my inventory project. So, I just want to give you a really
[35:24] brief overview of of um how what the FMT actually does and how you can actually use the FMT to map
[35:32] a fire. The first thing you can do is figure out geographically within imagery or any other sort of data source, figure
[35:39] out where a sensor um may a sensor may have detected a fire or potentially you just have a lat long.
[35:47] So, if you have a lat long, you know geospacially where the fire might have occurred. You can enter this information
[35:51] into the QGIS tool. And really what you're going to need to enter in is going to be um a lat long,
[35:57] so that location. It could be a center of a fire. Um the the date of the fire and then you
[36:05] by entering in some imagery, um image data information, you can actually use the tool to query the Landsat archive to
[36:12] get a list of potential images that could then be uh uploaded to ESPA. And once you uh once ESPA has finished
[36:20] processing those images, you can then download those images and bring them into the FMT to identify a pre, which is
[36:27] this left-hand image, and a post-fire image. image. Um you can then difference images to create difference normalized burn ratio,
[36:36] um physically trace the fire perimeter, and this is within QGIS, and then use the FMT to threshold the
[36:42] imagery and create a burn severity product. So, that's just kind of general simplified outline of what we're going
[36:48] to be talking about today. So, in conclusion, um remote sensing of burn severity is definitely possible. Um
[36:59] Um the accuracy and how well of how well you do with mapping is kind of up to you
[37:04] and up to how much information you have about the fire and how fires in your area may burn.
[37:09] Um but at least at the very least, you can get a really nice perimeter out of it um
[37:14] to show where the fire burned. Again, Again, on the on the ground burn severity information can really help help you
[37:21] calibrate and figure out how fires burn in your area. Um it can help you um potentially determine what the
[37:28] breakpoint should be. But again, the tool will allow you to it it actually will estimate and suggest
[37:36] breakpoints if you don't even really if you still don't have an idea where you should start. Um
[37:41] Um the pre- and the post-fire image characteristics are really important when mapping fires. Um you should always
[37:46] take into account whether you want to perform an initial versus an extended assessment, um whether there's seasonal
[37:52] variation between the imagery image, and this can be this can result from um just just uh changes between dormant and growing
[38:03] season. It can be uh it can result from droughts, it can result from flooding, and there's all sorts of um things that
[38:10] occur occur during time of that affect vegetation, which can uh subsequently affect the imagery. And finally, just you know, be aware
[38:20] that there're are image anomalies. It could be um it's possible that burned area was subsequently harvested and this
[38:26] would definitely change um burn severity assessments. It's possible that you have agricultural areas in your um burned
[38:35] areas. You just need to be aware that they're there and potentially mask them out if you don't have any other images
[38:41] that are available that don't contain those anomalies. Um the FMT can use Landsat 5, 7, and 8
[38:48] images. So, any fire between um um I I shouldn't say any, but most fires between 1984 and present can be mapped.
[38:59] Um and it can be used to assist in the assist the mapping of burn severity or at least used to assess burn severity.
[39:06] Um and so the next part of this presentation we're going to demonstrate the fire mapping tool in the uh in its entirety from kind
[39:16] of a start to end in how how we actually take Landsat imagery and then map burn severity.
[39:26] So, now we're going to actually go through the fire mapping tools exercise. Um if you have any questions, please uh
[39:33] hold them until the end of the uh demonstration. demonstration. Today we're probably going at pace that may be too quick for you to follow
[39:41] along, but we're just remember that we're recording this presentation and the presentation will be posted in the
[39:47] next 24 hours. So, you'll be able to watch it at your leisure and complete the exercise at that point.
[40:00] The first step in the process of this actual exercise is to actually get the fire mapping tool plugin. You can get
[40:09] that that uh on the MTBS website at www.mtbs.gov. Under the tools drop down menu, you'll see two other drop down menu, I mean two
[40:20] other other applications. One is the QGIS fire mapping tool. And the second is the NDVI profile tool
[40:28] that actually kind of gives you the idea of how Landsat scenes differ through time and space within the United States.
[40:36] So again, this isn't Unfortunately, we don't do this for the world, but if you are in the US, this will
[40:42] allow you to determine if your scenes are are similar in terms of greenness. However, you can download the QGIS fire
[40:49] mapping tool. So let's click on this link and you'll get to this download page with a little bit of
[40:55] a little bit of explanation, a contact form when you if you have questions, and the download tool and documentation. So
[41:01] you can click on this link and the tool will download pretty quickly. It is 787 megabytes and this is
[41:08] because it's got imagery. So depending on the speed of your connection, it might take a little bit
[41:13] of time. Um Um This plugin also has more documentation that goes along with it. So if you get stuck after looking at
[41:23] the exercise, you can always go back to some of the documentation. So okay, so once you've downloaded it,
[41:33] I downloaded it, you'll want to just extract it with whatever with Windows or 7-Zip or whatever you like.
[41:42] So that might take uh now 10-15 seconds to extract it depending on your computer. If you look in this folder, you have two
[41:52] different folders. And I'll show you where to put these You also have the user guide. This is the
[41:57] first version, so if you have any questions, please let me know. know. But uh the FMT, this is the actual QGIS plugin.
[42:06] If you look in here, there's a lot of different Python files. There's an SQL light file. There's some other
[42:13] there's an init script. Um Um um a config script that you'll need to edit. edit. We also have the Fire Mapping QGIS
[42:21] folder. folder. And this is the folder that kind of contains all the folders necessary um for mapping
[42:28] a fire. So, So, to get the plugin installed, the first thing you want to do is copy the FMT
[42:36] folder folder and paste it um um into your users. In this case, mine is JP God. Um .qgis2
[42:53] uh Python plugins folder. So, you can see I've already copied it in here. Um this is where all this
[43:03] depending on where how you set up uh QGIS, this could be under C users. In this setup, it's under D users. So,
[43:12] copy and paste it right there. So, um we're almost done with getting that set up. You also need to configure your
[43:23] um um uh config file. And this just has some paths you'll have to change. Um Um one thing will be image source folder.
[43:33] So, you'll see this Fire Mapping QGIS folder folder um reference right here. And so, you just want to make sure that
[43:39] wherever you put this, that that part of the path goes before image source landsat. landsat. Um and this part of the path ends with
[43:46] Fire Mapping QGIS for the scene directory. directory. Um the other two are uh the NDVI URL it's fine, but uh it again, it won't be
[43:59] that useful to use it outside the US. And the aspa folder is uh you don't necessarily have to do anything with
[44:05] this. We're not really using this right now. We just left it uh in case you wanted to define it. So, you definitely
[44:11] need to change the image source and scene directory. Again, make sure you put where the fire mapping QGIS folder will land.
[44:20] So, on my machine, I put my fire mapping QGIS folder directly in my D drive. Again, you can put it wherever you want.
[44:33] Just make sure you list you reference where you put it. Um if you copy and paste it directly,
[44:38] you should have all these folders. You also have um a tar.gz folder. This is where your This is where the imagery for this
[44:50] exercise will be housed in tar.gz form. This is the uh This is the direct download from ESPA.
[44:57] All that information goes right here. Um you also have the event prod. This is where your fire mappings are going to
[45:03] go. The image process image Sorry, image source, which is where the Landsat imagery goes, including the reflections and NBR.
[45:13] Um and image proc folders. The other, for example, the working directory is just where your a lot of
[45:20] this processing takes place. There's a template folder for QGIS templates. Um and in scene list, this is if you
[45:27] want to keep track of what scene list you submit to ESPA. Um and RSS just keeps track of the ESPA
[45:33] RSS files. Okay. Okay. So, So, now if you've been following along, if you put the FMT um
[45:43] um folder into the into the correct location on your machine, you should be able to go to the plugins directory.
[45:52] Um you'll notice that mine's already installed, but what you would do is go to the plugins, go to manage and install plugins.
[46:02] It might take a second to load up. You put it in the correct location, you should be able to search for it. You
[46:09] should be able to say fire mapping tool or FMT. And you want to check this box. It
[46:15] should be it if everything is installed correctly, correctly, then you're you're ready to go with the FMT.
[46:22] FMT. Um Um The other thing I want to point out is that that there's one additional um
[46:30] um there's one additional plugin you may want you'll want to potentially get. Um it's called the zonal stats plugin. So, what you can do
[46:40] is search zonal. You put in zonal, it should come up with the zonal stats plugin, download it, um
[46:48] it's it's uh install it, and you'll be good to go. And we use that as a tool to get the RDD
[46:55] offset, which we'll talk about in a few minutes. Okay. So, now we'll pretend that you've actually uh
[47:05] installed everything correctly. Hopefully you have. Hopefully that wasn't too difficult. Um Um So, as I mentioned before, we're going
[47:16] to you know, make sure you you edit the configuration file. And now we can actually go into the QGIS
[47:24] um file and actually uh establish the link to the uh SQLite database. So, to do that, um and I should I didn't point that out
[47:36] before. Let me show you where that is. Um Okay. So again, it's in the FMT folder. You'll see that's
[48:05] all all all alphabetical, you'll see um um a a file called the uh fireinfo.sqlite. So what you'll do, make sure you copy
[48:18] and paste this address. So you'll go up to layer. Add layer. Add spatialite layer. Then you can click on new.
[48:43] Okay, it'll ask you where your file is. So you can see it'll come up with your SQL lite file. You hit open.
[48:56] And then you can hit connect. And you should just be able to edit Yeah, you can just connect. It's not a
[49:00] problem. problem. And then you can close. So you've already made a connection with spatialite layer. But now we're actually going to talk
[49:08] about about how we actually use the ESPA um um uh ESPA created data file. Um so we kind of have to pretend that
[49:21] you submitted an order to ESPA. Um you can submit an order by submitting a text file with Landsat scene IDs. Um
[49:30] if we open the FMT, you can do this a couple different ways. Well, one way. You can get hit get scene list. And what
[49:37] this is going to ask you is for latitude and longitude. You enter those in. You then set the time frame that you want
[49:44] scenes. scenes. Um Um and you basically hit okay. What it's going to do is it's going to return a
[49:52] text file. It'll tell you uh you'll be asked where to you want to save it. And you can then submit this
[49:58] uh uh this this table to espa and then download the tar.gz file. So, you you can see that uh
[50:06] I didn't see any scene like list. Uh I didn't get one, so that's all right. Once you actually have downloaded the
[50:13] espa scenes, you put them into Look at the folder you put them into. Again, you put them into this
[50:21] tar.gz folder. Um they'll go in there. We'll pretend that you've already done this. I'm not going to run through it because it can
[50:28] take your system several minutes to process them. Um if you've got them from espa, once you get those tar.gz files, you can put
[50:35] them in the folder and then process espa data. If I hit this right now, it's going to give me an error, but we'll
[50:40] pretend that um um I actually uh data in there. I'll hit process espa data. It's then going to ask you if um
[50:53] you want to actually output the files in Albers Equal Area projection. So, if you're within the US and want the
[51:00] conterminous uh projection, Albers Equal Area, Area, you can hit yes. Otherwise, hit no. And that means that the projection of
[51:10] your Landsat imagery will be in uh whatever UTM zone that you downloaded. Um and in this case, it's uh zone 10 for
[51:20] the data for this for the fire we're going to be talking about in just a minute. minute. Okay. So, again, we'll keep pretending
[51:24] that we processed the we processed imagery right now. So, now you actually will actually go through the step-by-step process of how
[51:33] to enter in the fire information. Um Um and how to actually process uh the fire including making the
[51:41] perimeter and thresholding the image. So, if If didn't um, if you if you didn't have the fire added
[51:51] to this database, what we would do is hit add fire. You would then enter in a state. In this case, if you're an
[51:57] international user, you're not in the states, so you would enter in international. What it's going to do is take the first two letters and
[52:03] you would say all the files files will get an IN. You then enter in the latitude longitude, the ignition date of the
[52:10] fire, whether or not it's a wildfire, prescribed fire, wildfire land use fire, unknown, other. Uh, doesn't matter, just
[52:17] select one that best describes your fire. You can enter in the acreage or not. If you don't know
[52:22] it, just leave it 999. Um, and this is important. Uh, Uh, you then would want to also enter in
[52:31] the path and the row for the, um, actual, actual, uh, Landsat sensor you're going to use. So, if you look at we'll just I'll show
[52:40] you that really briefly. So, if you look at I'm going to just go to a folder that
[52:47] has a bunch of Z folders. How many files? Something like that. Um, so again, if you look at these file names, what
[53:05] you'll see, we're going to go through this really briefly, you'll see a series of letters and numbers.
[53:10] The first two letters are kind of sensor ID. ID. So, So, LC is for OLI Landsat 8, LE is for, um,
[53:19] Enhanced Thematic Mapper, TM is for, uh, and TM is for, um, Thematic Mapper. The 08 is the sensor Landsat 8, 07 is
[53:28] the sensor. And then you have a then you have a 0 4 7. So, this is path 047. It's a three-digit code, so
[53:37] make sure when you if you enter it in, these you put in a three-digit code, or um
[53:44] um and depending on your area, you could have uh it could be a it could be over 100 for
[53:50] the path. And the next three digits after that are the rows. In this case, it's path row
[53:55] 027, so 27. The other set other fields you can enter in um for a fire are the actual name of the fire, the
[54:06] containment date, report date, all this uh comment, agency, um administration unit, whatever you want. It is helpful,
[54:13] I would say out of these, the most helpful one to put in is the event name. Um in this case, if you were mapping uh
[54:19] the fire we're talking about today, we'd type in the Paradise fire. Um but it's already added for you. So,
[54:27] instead instead go to search. This is if you already have a fire added to the database. If it's my name, I'm going to type in
[54:35] Paradise. Search, and you'll see a fire come up. Now, you'll probably um you'll probably see some mappings. So, you there's some
[54:47] example mappings that I've included in yours. yours. But, the really if you're just entering this information in, this would all be
[54:54] blank. blank. Um Um but this would be filled in because it's all information you would have added to
[54:59] the Paradise fire. Uh that in this case it would have it would have said incomplete, but I've mapped the civil
[55:05] conscience as complete. Acres 2,800 uh 2,800 2,800 acres. Um the event date was 6/15/2015. Here's the event ID, which is
[55:15] automatically generated for you. Again, it's the first two letters of the state, or if you're an international user, uh user of the
[55:23] IIN. IIN. Um and then it has information about the latitude and longitude, the year and the year of the uh occurrence.
[55:32] Then we have the path row that you entered in. It shows up as two digit, but is actually again to be a
[55:37] three-digit code, latitude and then the ID is just the first fire that has been mapped. mapped. Now,
[55:44] Now, we'll pretend again that we process this for data. You click this, hit no when it asks you for others.
[55:52] So, what should have happened is you should have had Landsat scenes created. So, if you click on what you're going to
[55:58] do do is you're going to double click inside this um fire right here right here. And a uh
[56:08] a window will come up that allows you to select the type of data or collection data. There's no other option.
[56:14] Um we used to have a different type of data. That's kind of a remnant, but it will allow you to
[56:20] uh uh select the start year. So, the reason this is important is because tool allows you to load all the imagery
[56:28] that you have between a start year and an end year for this path row path row 47 27. Let's
[56:36] select 2014. End year is 2016. You hit okay. And the tool will tell you the number of
[56:46] images that have loaded into QGIS. So, you hit okay. So, look at QGIS now. So, we're going to hit QGIS and it might
[56:59] take a a second for the imagery to load. You'll see two images. You'll see In this case, we've only provided you with
[57:05] two images. You'll see the post fire, the Landsat 17 on top, and the pre-fire image. image. And the images range in date from lowest
[57:16] uh sorry, the the um first image from the first image date all the way up to the last image date.
[57:23] So, you can see we have two images. And let's check the projection information and make sure that it's what
[57:30] we think it should be, which is we go to general. So, what you're going to do is right click on an image, go to
[57:39] properties. Go to general and look right here. Here's what the image references. This should automatically be populated. You
[57:48] should be good. But, the EPSG G code is 32610 32610 and the projection is or projection data
[57:57] is WGS84 UTM zone 10. So, that should all be loaded for you. That should be good. Now that we've loaded the imagery, we
[58:14] can actually start to um create a new fire mapping. So, the reason this imagery loads into the tool so you can look at it, but it
[58:25] does another nice thing, which is um when you want to actually create a new mapping, this information of any Landsat scene
[58:34] that's in here, any Landsat scene, even if it's in a different projection, even if it's not related, it's all going to
[58:41] load load into the fire mapping tool when you when you hit create new mapping. So, if you have Landsat scenes in here,
[58:48] this tool is going to be able to read them correctly. And I should say if you process them using the FMT,
[58:54] you have options for an initial um initial single scene. This means that you don't have a pre-fire image. You
[59:01] only have a post-fire image and so you do a normal assess the fire using a normalized burn
[59:08] index ratio image. This is discussed in the documentation. We're not going to talk about single scene assessments today.
[59:14] Um they're a little more difficult and sometimes the information's a little more it's harder to um um uh
[59:23] uh explain the different break points, but it is explained in the documentation. Um so the initial again is right after
[59:30] the fire and then it is 1 year after in this case. And we also again have an extended
[59:35] assessment single scene. Again, we're not going to talk about that. Um so we're going to select extended.
[59:42] You can then select the pre-fire image. Um and that's going to be the Landsat image. You could select either one, but
[59:48] for example, if you select the 2016 as the pre-image and the post image, you're just going to
[59:53] get zero values for the dNBR. They're going to load the same image for both. So you want to select the pre as a
[59:58] Landsat 8 and the post. So the nice thing about this scene is you've got the scene ID,
[1:00:05] it tells you what sensor it's in, and it tells you the actual date of image. Um the perimeter image is if you Let's
[1:00:12] say you had three or four images You had another image that you wanted to use to map the fire scar. Maybe the post-fire
[1:00:20] image you want to use has some areas of clouds that you have to mask out. It doesn't show the fire perimeter exactly,
[1:00:26] so you use a different image. You can put that image here. You could put You could replicate. You could say
[1:00:31] that the Landsat 7 scene is the perimeter image as well. That's fine. But you can also leave it blank. So this
[1:00:37] is just um um anything that you tell it. So if you put a different image in here, it'll get
[1:00:43] clipped like everything else to the fire boundary. boundary. But for now, we're just going to leave this blank. So save mapping.
[1:00:52] So what you should see is at the bottom and yours may be a I'll be a different
[1:00:57] number than mine. I I played around with this a lot, so I've got more mappings than one
[1:01:01] or two. Whatever is in yours, you'll see this new mapping right here. And it was it was started today at 12:24 p.m. If you
[1:01:11] look at my time, this is the correct one. I This was created. Okay. So So if your land if you had Landsat imagery
[1:01:21] and it imported in the tool, you should be able to run fire scene prep. What fire scene prep does is it creates a
[1:01:27] DNBR image. It subtracts the pre-fire and the post-fire values. Um it's going to be in the same UTM
[1:01:34] projection as everything else everything else should be the same. So you can hit run scene prep. If
[1:01:43] If um in this case I've already run it. It's going to take you a couple minutes to run it. You'll get a warning message
[1:01:48] that says it already exists. Um you can hit okay. Let's say that you made it before you you ran scene prep
[1:01:55] before but you had a different projection and you want to change it. I mean you let's say that I'd done it which I did
[1:02:01] originally Albers. I could actually rerun the imagery and hit overwrite right here and it would redo um scene prep when I when I run
[1:02:09] when I um hit this button. I'm not going to do that because um DNBR image is good. We should be all
[1:02:15] right to go. So So pretend that I hit run scene prep. Okay. So we should be good to go.
[1:02:30] The next thing you want to hit is run fire prep. What fire I'll show you exactly what
[1:02:34] fire prep does. So let's hit fire prep. Run fire prep. Let's see. It says scene prep complete.
[1:02:42] Run fire prep. Fire prep is complete. So just hit okay. What fire prep does is it creates a um
[1:02:50] and I'll show you what this is right now. If you hit this button open event folder what it should have done is
[1:02:55] created a new folder um and let's take a look at the contents of this folder for just a second.
[1:03:01] It has a QGIS file which is the project folder. folder. Um not folder, sorry, the project file
[1:03:06] that goes to QGIS. It has a burn boundary shape file and a mask and that's all that's in this right
[1:03:12] now. So we're going to add to this and automatically automatically um we're going to add it to the shape
[1:03:17] file and automatically cut the get in there. there. So, now what you Now what you would want
[1:03:23] to do is hit delineate perimeter. So, delineate perimeter. QGIS project files are located loaded. So, again, if you looked in your project
[1:03:32] folder, it's going to load the QGIS folder, load everything from there in there. there. And it's going to probably give you a
[1:03:39] message saying that the project files are all from an older version of QGIS. That's fine. That way error, it's it'll
[1:03:46] still work. It'll load the full scenes from that path row and it will also load the shape
[1:03:52] file for the burned area boundary, the mask, the post scene, and the pre-scene imagery. So, now what we're going to do is we're
[1:04:02] going to The first thing you want to do is right click on any of the images, including the post-fire scene. Let's
[1:04:08] click and say zoom to this layer. If you zoom to this layer, you'll see the uh you'll see the Uh,
[1:04:16] excuse me. You'll see the image help you all load. It looks pretty good, probably not 100% perfect, but we're going to change it
[1:04:24] with make it a little brighter. So, what we're going to do is zoom into the fire. You look at this bright patch of pixels
[1:04:30] right here. This is just slightly different little slight echo variation because of uh snow. The fire scar is right below it. So,
[1:04:40] here's Let's zoom back out so you can see where that was, right here. And zoom back in.
[1:04:47] And see the fire scar right here. All right now, the fire scar We're going to zoom in on the fire scar right here.
[1:04:53] I'm zooming in by using the plus magnifying glass right here. I wanted to zoom out a little bit. Say zoom in a
[1:05:00] little too close for you. Hit the negative. Um You can see the fire scar right here, but it's not showing up as well as we
[1:05:08] probably like. So, what you can do is you can actually change the way this the actual style
[1:05:16] of the uh of the actual image. So, what you do is go uh again, right click on the
[1:05:25] post-fire reflectance. Go to properties. Go to style. Render type multiband, that's what you want. There's other choices here like
[1:05:34] single band pseudo color. We're going to use single band pseudo color a little bit later, but right now
[1:05:39] multiband color is good. I should have the correct bands loaded. You can change the min and the max
[1:05:44] values. Often you start out with 0 to 127, 0 to The numbers are going to They're 8-bit images, that means they're
[1:05:50] going to range to 250. Um the values can range to 255. So, they're um 256 different potential numbers ranging from
[1:06:01] 0 to 255 for each reflectance image. Oops. We can do a little bit of enhancement to make it a little bit brighter. We can
[1:06:13] clip it to the min and max. And all you have to do is hit uh apply. apply. Let's close out of here. What you should
[1:06:23] see is the image looks considerably brighter. So, you can change any of those numbers I just showed you to
[1:06:28] whatever you want and it's going to alter how the image shows up. It changes how It changes the ratio um the
[1:06:36] uh of reflectance values used in the outer RGB uh red, green, and blue bands. That was multiband image.
[1:06:46] So, we've done the post. You want to do the same to the pre. You can see the pre is kind of dark. Now,
[1:06:52] that you know, we'd probably like to be a little bit more similar to the post-fire image. So, we again click on
[1:06:57] pre-fire scene. You want to see it. Click the X box. Uh Uh hit right uh right click on the image
[1:07:05] name, go to properties. Again, it has multi-band color. We've got bands in this case, 7 5 and 4, so
[1:07:14] the bands are showing correctly, a little different than the other one, which is Landsat 8 versus Landsat 7.
[1:07:21] But you can still put in the same number, 0 and 127 for the min max values which you're
[1:07:26] going to look at. Uh go to stretch, put them in maps, apply. There we go. Okay. Okay. So if we flicker, we just go back
[1:07:48] and forth between them. They look more similar, but you'll see the fire scar disappear when you go to
[1:07:54] the pre-fire image. But the greenness of the images looks to be fairly similar um visually right now. So, that's pretty good.
[1:08:13] Okay. So now we're actually going to assess assess the burn scar. So you can, again, you may want to zoom in a little bit more.
[1:08:24] Oops. Oops. That's zoom in, not zoom out. Um so I've zoomed in. I'm ready to edit the burned area
[1:08:34] boundary. So often what I'll do is I will look at both the post-fire scenes and actually you can see things you
[1:08:39] can't see in the DNBR. So you can see the fire scar nicely in the DNBR. It should show
[1:08:45] up pretty well. Um if it doesn't, you can adjust the DNBR a little bit, and I'll go through
[1:08:51] why we do that in a second, but you may I the values we suggest are fine. fine. Um so it should load pretty well.
[1:09:00] You'll also see a post-fire NBR. You should able to see the scene pretty well on that. But again, I kind of like using the
[1:09:08] post-fire reflectance image to trace the fire scar. So, I'm going to click on and you can X the box by the burn area boundary.
[1:09:16] Nothing shows up cuz you haven't done anything to it yet. You're going to go to this pencil.
[1:09:21] Um Um Choose the editing feature for shapefiles. Just click on it. You see this uh kind of this star by
[1:09:28] this polygon shape. You then click on add features, the add feature button. And what that's going to do is allow you
[1:09:35] to to create a shape uh add vertices to a shape a polygon for um that will allow
[1:09:42] you to trace the fire scar. So, you click if you click on it once, you see this line pop up.
[1:09:48] Click on it twice, and you start seeing this polygon grow. If you cross over something like this, you're going to get
[1:09:54] an error message cuz you can't have vertices cross over. But as long as you don't click when you
[1:09:59] do that, so like if I that one's still okay. It's all right. You'll may see some error messages pop up at the
[1:10:04] bottom. bottom. But as long as the error message goes away, you're good. Otherwise, you may need to edit
[1:10:11] your shapefiles so that the vertices don't cross. So, So, I'm kind of doing a sloppy job. Again, it's up to you how nicely you
[1:10:22] want your fire perimeter to be. Um so, the accuracy is really Let's see. So, it looks like I made a mistake
[1:10:31] somewhere. somewhere. Anyway, when I'm done, I'm going to right click. And I'm going to set N and
[1:10:35] one for the ID. It's telling me that I actually crossed the vertices, which is Is that true?
[1:10:45] Um Um not seeing it. You can zoom in to check your vertices. If you want to check your vertices, zoom
[1:10:54] in, you can see um all the X's. Those axes indicate areas where you dropped the vertices. Um,
[1:11:02] Um, I don't see any problems. Okay, so I'm going to zoom out a little bit. And hopefully there aren't any problems.
[1:11:13] We'll find out. And then if you're done editing, you're happy with it, you can hit save. The
[1:11:20] other thing you could do is if I messed up up uh vertices, I could hit this button,
[1:11:25] which is the node tool. So you click on a node, you can click on individual nodes and delete them or add additional
[1:11:31] nodes. So, let's just say that I went in here and I didn't want to have that vertices right
[1:11:38] there. So I click on my node tool, well, like a hammer and I um I I don't know, uh screwdriver or
[1:11:47] something in a node. Click it on. I want to get rid of that one, I can hit
[1:11:52] delete and that deleted it. So it's fine. So I edited it. And then come back up here, save my edit.
[1:11:59] Um, Um, zoom back out. Oops. Uh, Uh, and then click on my shape. Looks like I'm I've
[1:12:11] saved it, so I'm okay. So make sure you click on save, this save button, not this one. This is the project save, this
[1:12:17] is the vector file save. If you click on the pencil, you're done editing. So that looks pretty good.
[1:12:24] Um, Um, you can then also save your project. So it just saves it as that project ID,
[1:12:30] that W A 4769812 and so on. If you want, you can also digitize. You can mask out problem areas. So just
[1:12:43] for fun, I'm going to mask out this cloud shadow. So again, I'll do the exact same thing.
[1:12:48] I click on the mask, pencil, edit, editing tool, I right-click. I get one. Okay. Now, you should just
[1:13:01] number them. If I have more than one, I do one through whatever number of uh masks I would do. So, find your mask,
[1:13:08] hit save, and then click the editing tool to stop editing. You should be good. So, if you
[1:13:14] look, now you have a mask. You know, without the fire perimeter, we didn't really need to mask it, but it's fine.
[1:13:21] The tool will automatically mask these um no data scan gap lines. So, you don't need to do that.
[1:13:29] Um and now we're ready to actually subset the imagery. What I mean by subset subset is the tool is going to look at the
[1:13:38] bounding box of this shapefile. So, there's going to be four corners. It's a rectangle. rectangle. And um this designates the area in which
[1:13:47] this this uh uh uh polygon occupies in space. Let's go back to the FMT FMT tool. Let's open up the event tool again. See,
[1:13:58] again, this stuff has changed. The shapes have changed. Just, you know, they probably got them slightly bigger.
[1:14:03] They're not that big. Um you can now put subset. And what it says is running subset, and
[1:14:12] then it says subset is complete. Okay. Well, that's good. Now, if you want to see what actually was done, you can come
[1:14:18] into this folder, which is a subset folder. folder. Not the subset folder, sorry, the actual event folder. And what you'll see is the
[1:14:25] imagery imagery has been created that shows the actual footprint of the fire. It's just a binary image.
[1:14:34] Uh DNBR image has been clipped. A gap mask has been created for Landsat 7. 7. Got a mask of
[1:14:44] uh uh That's the mask that's actually got the um mask that we created uh binary form zero for not mask one for mask.
[1:14:53] Reflecting imagery has been clipped and the R imagery has been clipped. Again, we have a gap mask file. So, we
[1:15:00] should be pretty good to go. For now, we're about ready to actually calculate the DNBR offset. So,
[1:15:11] one thing I want to point here is if if you feel pretty good about your perimeter, click you can click high.
[1:15:17] You can then make notes like this is a test. test. And if you click okay, it's going to
[1:15:24] attribute the shape file with area and with these comments. Now, down here, this is for the RDNBR
[1:15:32] offset. The tool again calculates off the entire kind of bounding box of the entire footprint in the imagery. It
[1:15:38] calculate calculate um the median value of all um DNBR values values within the range from -100 to 100.
[1:15:49] Um and so the the me- median value is three and the offset, which is uh standard deviation, is calculated as
[1:15:56] well. That's 37. And the analysis type we're going to do today is DNBR, not NBR and NDBI.
[1:16:05] So, the tool will then allow you to create an RDNBR image. Now, if you're if you're not sure that this RDNBR value is
[1:16:12] very good, we're not positive it's good, we can then actually go back into the FMT FMT and actually calculate the DNBR offset.
[1:16:24] So, what we're going to do is we don't need the mask on right now. We need boundary area boundary on right
[1:16:30] now. We actually want to look at the DNBR image. DNBR image looks like this. And so, what we want to do is we want to
[1:16:38] we want to highlight unburned areas of the same vegetation about the same vegetation type, same vegetation greenness
[1:16:48] greenness uh uh between between uh that are outside the fire perimeter. So, this will be the same vegetation
[1:16:53] type. So, it's probably conifers if I may just show up. So, this looks like it's kind of outside.
[1:16:59] I've noticed that if I when I create this polygon, if I cross over into these no data values, um
[1:17:10] that this alters the distribution of the mean median values. I just try to click on areas that we're
[1:17:17] going to just select polygons and then uh areas of good data. And so, what we're going to do is we're going to now
[1:17:23] create create a new shapefile from which to get the DNBR value. And again, you don't have to
[1:17:30] do this every time. The tool will do just one for you. But, just so you know how to on I mean
[1:17:35] how to do it manually. You get new shapefile layer. Okay. Okay. It's going to ask you to pick between a
[1:17:41] point, a line, or polygon. We're going to pick polygons. Now, one thing that's important is you need to make sure you select the right
[1:17:49] UTM uh the right UTM zone. So, we're going to go click on this icon. That's the select
[1:17:55] CRS. CRS. They'll give you a list if you know what your imagery is in. In this case, it's
[1:18:00] WGS 84 UTM zone 10 or EPSG 32610. You can search for this. You can put in WGS 84
[1:18:11] slash UTM Oops. And then we can look for what zone we want. So, we're 10 north. So, we're good. Hit okay.
[1:18:24] Um new fields, just enter in your name. I usually say DNBR or DNBR offset. Okay. And it's going to ask you where
[1:18:32] you want to save it. So, you're going to want to save it in the same project, which is actually
[1:18:39] for me it's the uh MTBS number nine folder, so this one. And I'm going to call it
[1:18:47] E N D R offsets. offsets. And let's save. Okay, so you got an empty shape file. You're then going to edit it like you
[1:18:57] did with the burn boundary. But again, just select pixel values you want. Select thousands of them. When you're done, right click. It asks
[1:19:06] you for an ID. You can set one or whatever you want. You can see this offset shape.
[1:19:13] I'm good, so I'm going to save it. Stop editing. Now I'm going to actually use the zonal statistics tool. I'm going to
[1:19:19] go into if you uh installed the zonal statistics tool tool correctly in the plugin, plugin, go to raster, zonal statistics, zonal
[1:19:29] statistics. statistics. Now, it's going to ask you what raster layer you want to look at. You're going
[1:19:34] to want to look at our same E N D R. You want band one. There's only one
[1:19:39] band. band. E N D R offset. Make sure you select the right shape file. Don't select burn
[1:19:44] boundary or mask. And then you can select what statistics you want. So, I'm going to select the
[1:19:49] count. Count will give you how many pixels you're selecting. Mean, median, standard deviation. Not going to worry about minimum, maximum,
[1:19:57] range, or any of those. You could select them if you want. Um you're just going to use this information to help populate
[1:20:02] the F M T. I'm going to hit I'm going to hit okay. If you right click on
[1:20:08] the D V R offset shape file, go to attribute table. You can then see the counts. I selected
[1:20:14] 2,295 pixels. Mean, my offset was 21. My standard deviation was close to 40. As long as your standard deviation is
[1:20:23] under 50 or so, should be good. As long as your off your um mean, or I I use median to get rid of um
[1:20:31] outliers, but their mean and median in this case are really similar cuz you don't really have any outliers.
[1:20:37] Let's keep it 21. As long as those are under 50, you're probably good to go. That just means
[1:20:43] that there's not a lot of variation in your unburned area, so it's around zero. In this case, your dNBR offset was
[1:20:51] three. So, ours is slightly different, and that's okay. So, you could either say, "Well, three's pretty good. They're pretty close."
[1:21:04] Standard deviation of 20 and three is uh it's yeah, it's close. Um Um I I would say that my the one that the
[1:21:12] tool selects is pretty good. The tool selects all pixels that are unburned within that image, so it's selecting more pixels. I'll
[1:21:19] probably just go with this one. So, three and 37. Um you can then hit the rDNBR button,
[1:21:26] and that will create your rDNBR image. So, it should say at the bottom of the QGIS tool, "rDNBR complete." So, we're
[1:21:34] good. If we open up our work folder, we can see that the dNBR image is there, and so is the rDNBR
[1:21:44] image. Good. So, you've got your dNBR and rDNBR. Good to go. Okay. So, today we're going to stop at
[1:21:53] section two, um cuz that's all we have time for. Um but next week, we will finish up the
[1:22:00] threshold exercise, um which starts in step three. Uh and I'll and I'm going to pass this back to Sandy.
[1:22:11] Thanks, Josh, for really awesome presentation. presentation. I want to remind you that we'll open it up for uh questions right now if you if
[1:22:20] you have any, or you can email Josh at the the email address shown here. I I also want to remind you
[1:22:34] that if you have any questions about land management or wildfire webinars, you can contact me at the address at my
[1:22:41] email address here or my colleague Amber McCollum. If you have general R set questions, you can contact Anna Prados,
[1:22:50] the lead for R set. And of course, for access to the recordings that Josh just mentioned as well as the homework and
[1:22:58] the exercises, you can go to our website listed here. So, we'll pause for questions, but we want to thank you all for participating
[1:23:11] this week. Next week, we will be doing the second half of the fire management tool with Josh
[1:23:18] in QGIS, and then we will follow that by some information about the Global Wildfire Information System. Thanks,
[1:23:25] everyone. All right, everyone. So, hopefully you can see the question screen right now. I'm going to scroll to the top of it
[1:23:43] where it says question and answer session. session. And we'll go through each question one by one. You can see that Josh has
[1:23:50] already already responded to some of the questions. And Josh, you may just want to go over each question verbally and the answers
[1:24:02] as well, and you can and and I can just scroll down as you go through them. You
[1:24:07] can do a summary summary of each question if you'd like. Sure, I can do that. No problem. Um so,
[1:24:13] the first question is are there set values for those thresholds in the tool? And the answer is no, there's no set
[1:24:19] thresholds. The tool actually examines um the DNBR NBR values, all the values that are in the um it's kind of a
[1:24:28] bounding box around the fire that are within that clipped image and sets them based on the values in the
[1:24:35] image. Um I'm not going to go through the full process and how that's done. Um it's clearly documented within the actual
[1:24:42] Python scripts in the tool. Um if you are used to working in Python, you could potentially edit them. But
[1:24:50] right now, no, there's no um there's no set values. Uh question number two is is DNBR equivalent to the difference in NBR? And
[1:25:00] so yes, DNBR is the difference between the pre- and post-fire NBR images. Um Um Question number three, can we consider
[1:25:09] 5% about variations in NDVI? Um and so yeah, if the uh pre- and post-fire images differ by greater than
[1:25:16] 5%, 5%, um and in all honesty, that it could be as greater than 4%. Um then image pairs really don't match.
[1:25:25] We only want 1 or 2% variation. Um generally we want NDVI values. Um when you're examining NDVI values, you just
[1:25:32] want to look at that fluctuation um in in the vegetation type you're examining. Um so for example,
[1:25:40] uh evergreen trees might show a lot less phenological variation than the deciduous trees that are adjacent to
[1:25:46] them. So if you're looking at evergreen trees, um NDVI values that change a lot for those deciduous trees wouldn't really matter
[1:25:55] as much. Um the reason we put these values in here is because within the US, we actually do
[1:26:00] calculate NDVI per vegetation type per scenes. scenes. Um there's actually a link on the MTBS website that will get you to that
[1:26:06] information. information. Um unfortunately, outside the US, we don't have that information. So for question number four, do you have
[1:26:17] any burning situations in sugarcane plantations? The answer is yes. In South Florida and some places of Louisiana,
[1:26:23] they do burn sugarcane plantations. These are can be difficult to map because of the really big changes and
[1:26:31] um um uh between teen values and agricultural areas. This could be due to burning or it could be due because of harvest or it
[1:26:41] could be due to drought or um Well, so there's sorts of there's all sorts of problems that don't relate to
[1:26:49] burn. And so I'd recommend if you're going to try to map map them, just make sure you know
[1:26:56] exactly where the fires occurred. Um in the US generally ag fields are uh poly- I mean they're usually
[1:27:04] rectangles. And so if you know one field burning, you can usually kind of map the fire pretty well.
[1:27:11] Um I would definitely not map burn severity with sugarcane fields though because um you know, what is severity in
[1:27:18] a sugarcane field? Generally, if it burns, it's going to probably burn pretty completely and so you're not
[1:27:21] going to get really different levels of severity. You might get the only thing you can really pick up are differences
[1:27:26] between burned and unburned areas. So, if you're using FMT to map the uh map fire in sugarcane fields, I would just
[1:27:35] delineate a burned and un- I mean a in a burned and unburned threshold or low severity threshold.
[1:27:43] Uh question number five, is it plug it on with QGIS 2? Um short answer is yes. And that's
[1:27:50] because QGIS between QGIS 2 and 3, they switched versions of Python. And right now it's written to work with Python 2,
[1:27:57] which is with QGIS 2. Um if so, will one create be created to work with QGIS 3?
[1:28:04] Um short answer is we hope so. Um we'd like to modify the tool. We need to modify all the Python scripts
[1:28:10] and potentially some other things to work with Python 3. Um right now I don't have a good timeline for when this work
[1:28:16] is going to be done. Um but if you already have QGIS 3 um installed on your computer, you can
[1:28:23] always install QGIS 2 as well and then use the plugin to uh map your fires that way.
[1:28:32] Question number six, how do I differentiate burn scar area and burned area in respective digital number value?
[1:28:40] Um Um I don't have a good answer to that. I don't know it's hard to differentiate between um
[1:28:45] burned areas and bare areas because a fire essentially burns all of could potentially burn all of the vegetation
[1:28:53] away leaving only burned area burned soil which would theoretically have similar reflectance values to the surrounding bare soil and that's
[1:29:02] if there's no if you can't see a lot of ash or char on the ground then spectrally they might be really similar.
[1:29:08] Um I don't really have a good break point for that. Um for the digital number to actually
[1:29:13] differentiate between the two. So you kind of have to look at the imagery and hopefully you'll be able to see you
[1:29:18] can always look at um an area that shows where the vegetation actually was before the fire and
[1:29:26] you should be able to hopefully differentiate burned versus unburned area by comparing the two. Um the other thing is that if you look
[1:29:33] at a difference normalized burn ratio image of an area was uh bare before the fire and after the
[1:29:38] fire, its value should theoretically be zero or close to zero. And so by looking at a difference normalized burn ratio
[1:29:45] image, you should be able to tell um um areas that were burned that may be bare now um because they weren't they may
[1:29:52] they probably weren't bare before the fire. fire. Question number seven, could you please repeat how to change
[1:29:59] config file for the FMT? Um the short answer is you can you just have to edit it with in
[1:30:07] a text file editor. Um, directions are provided with the with the exercise or within the recording. Um, so I'm not really sharing my screen
[1:30:17] right now, but I can uh so you should be able to go back and look at how to edit it pretty easily.
[1:30:23] Um, question number eight, does the QGIS 3? Again, no, it it it doesn't right now and hopefully we'll enable this
[1:30:32] this uh we'll enable the tool to work with QGIS 3 in the future. Question number nine, when estimating the burned area by
[1:30:42] relating it to the pollutants PM10 and PM2.5, PM2.5, uh what method can I apply? So, you actually have to understand the
[1:30:51] relationship between the fuel characteristics and the amount of PM10 and PM2.5 released as the fuel was burned.
[1:30:58] burned. Um, Um, you'd actually probably have to develop relationships between the burn severity classes and PM10 PM2.5,
[1:31:06] unless you just know how much PM10 is released per square meter or whatever area unit you want to use um of your
[1:31:15] burned area and then you could just it just be a simple relationship. So, the short answer is um all vegetation types
[1:31:21] differ between differ between the amount of PM10 PM2.5 they release and they're often they differ in the way that they
[1:31:29] burn and they also are highly dependent on severity. Um, so I don't really have a good you have to I don't have a good
[1:31:37] uh hold on um how they relate always. So, you have to develop these relationships yourself. Um, question number 10,
[1:31:45] uh uh this delineate uh delineation of burned area can only be processed after obtaining Landsat imagery or is there any online pro
[1:31:54] platform that is free and allow the generation of areas affected by forest fire? So, the short answer is you can
[1:31:59] technically copy and paste any predetermined fire perimeter into the shape file that's created by the FMT. I need to change that right now. So,
[1:32:09] it's created in the FMT. Um fire products right now are available worldwide for the MODIS sensor and you
[1:32:17] can just go to modis.gsfc.nasa.gov data data prod mod 45 and these will provide some parameters. MODIS are going
[1:32:26] to be coarser more MODIS drive parameters are coarser than Landsat so they may or may not match up perfectly.
[1:32:33] Um you could also develop uh tools to actually classify other imagery types as a burned area. That's been done for a number of other
[1:32:44] satellites but um MODIS right now is one of the big ones that actually does generate fire parameters.
[1:32:54] Question 11. With respect to the optical image of Sentinel 2, can the same mapping method be applied? The short answer is yes.
[1:33:04] We could accept the bands in Sentinel are different than Landsat and um you know, there's so we'd have to modify
[1:33:15] the tool to work with Sentinel 2 data and right now it's not configured and at this point we don't have a budget to
[1:33:21] configure it to work with Sentinel 2. It could happen in the future but right now it's just Landsat.
[1:33:28] So, question number 12 is does the FMT only work with Landsat imagery and yeah, the answer is yes. It only works with
[1:33:33] Landsat imagery. Question 13, is it fine using it outside the US? And the short answer is yes.
[1:33:40] It is fine to use it outside the US and I've uh I've done some testing in Brazil
[1:33:54] and the outports uh uh look good. Now, I will also say with that that um I don't know severity thresholds for
[1:34:09] Brazil, and so my threshold income been way off. Um so you'll really need to know your area know kind of how the
[1:34:15] thresholds thresholds work for your area. They're also the of course vegetation dependent and um obviously vegetation Brazil is um
[1:34:26] even though they have similar life forms like tree, shrub, and herb, um the spectral layer can be very different.
[1:34:34] Question 14. It was a little quick. Could we have support for the FMT tool FMT tool? Thank you. Um so there is support um if
[1:34:45] you go to the website the MTBS website where you can download all the information that was provided before.
[1:34:51] There's a question form, and we've been answering questions as they come in through there as well. So the short
[1:34:57] answer is yes. Um and as long I I will say I don't know if there's necessary support for the
[1:35:03] modification of the FMT, but if you have questions or um just need to know how to do something
[1:35:08] let me know, and that's not a problem. Um uh I'm the one that answers the questions for the FMT support.
[1:35:15] Question 15. What is the difference between fire severity and burn severity? Okay. So burn severity the actual physical
[1:35:23] changes to vegetation, whereas fire severity is often a measure of how he hot a fire gets and the amount of heat
[1:35:29] release. release. So burn severity is just looking at the actual physical changes to the vegetation soils. Question 16.
[1:35:39] And I I'll just say you know I'll I'll after this is done I'll fill out the answers to these questions.
[1:35:45] Um Um Please explain about severity level of DNBR range. Uh regrowth minus 500 minus 251, so on and so forth. Okay, so those
[1:35:55] breaks were uh, determined by um, Kean and Benson in 2006 as basically it is what the breakpoints
[1:36:05] are in forested areas in the western US. So they're just like a they're just a range of um,
[1:36:11] but uh, sorry, they're just a range that correspond with ground control data with um, these breakpoints. Uh, they're not necessarily perfect,
[1:36:19] they're just a rule of thumb and again they work in the US, but they work okay in the US for forest
[1:36:25] ecosystems. ecosystems. How to find threshold for one to use in the US? Is there a reference I can look?
[1:36:31] Um, I would I would look at there's a lot of papers out there that talk about uh, thresholds
[1:36:38] within the US and describe this well. The um, the first paper that really does this um, and references is those
[1:36:45] breakpoints above is the Kean and Benson um, 2016 landscape assessment um, government technical report and I can
[1:36:54] provide the link to that in my answer. Um, Um, so that's the first that's the the first
[1:36:59] place I would start and then if you use Google Scholar, you can actually look at number of times Kean and Benson's been
[1:37:07] cited and so forth look through some of the other papers as well. There's a lot of papers on it. Um,
[1:37:12] I don't have a plugin folder under Python file and QGIS folder. How do I get around this?
[1:37:17] Um, well, that's probably because you don't have so many plugins and to get around it, you just um, you would type
[1:37:23] in in uh, uh, I'm trying to if what the actual name of the file if it's actual let me just
[1:37:31] check really quickly if it what the name of that actual folder is. Um, you can just basically create a full empty
[1:37:36] folder folder in the correct location. I'll tell you what that is in just a second. I I'm
[1:37:43] forgetting and I'll also write this down in my answer in just a second. Just a second. Need to look at a different computer.
[1:37:54] Um Josh, I I think you also have it written in the instructions in the exercise. I believe it's there as well.
[1:38:02] Yep, you're right, Cindy. I just wanted to give someone an answer right now to Yeah, you're totally right. It's It's in
[1:38:06] the exercise. And um like like So, that's definitely a good point. Someone just look at it really quickly.
[1:38:14] Won't take very long. Right. So, just a reminder everyone while Josh is looking this up that a lot
[1:38:22] of these questions that you have about the the steps that he went through um are actually all in the exercise. So,
[1:38:29] make sure you download the exercise and take a look at it. And then maybe go through it at your own pace since I know
[1:38:36] um he went through it kind of quickly on this um on this webinar today. Yep. So, the name of the folder is um
[1:38:45] and it goes in the doc QGIS2 backslash uh Python. The name of the folder you'd have to create is called just plugins.
[1:38:52] It's just lowercase p l u g i n s. Um is the varied level fixed for all
[1:39:00] cases? And no, it changes based on the imagery. Um No, that's So, that's not Are the provided Landsat images TOA corrected?
[1:39:08] The short answer is yes. When you go And that is in the exercise. When you order them through ESPA, you can select TOA um
[1:39:17] correction and download them that way so that you don't have to worry about that. Um Um we the tool could probably work for
[1:39:24] surface reflectance images. The The problem is is that um we haven't really related um I don't really know what if the break
[1:39:32] points would change that much, but um the tool is developed specifically to work with TOA imagery. Or TOA corrected imagery.
[1:39:40] So, many forest fire growth models out there. From that, we can easily predict forest fire direction and spread area by
[1:39:46] considering so many parameters. Can you kindly clarify the difference or advantage advantage of the FMT to fire growth models? So, um
[1:39:56] the only advantage is that you're actually mapping a fire scar on the ground. A fire growth model just
[1:40:01] predicts where the fire is going to spread. It may or may not be accurate. So, you could use a fire growth model
[1:40:06] before the fire if you're trying to predict where it's going to spread. The FMT would then could be used to assess
[1:40:12] burn severity after the fire. Question 21. In Indian subcontinent today, the biggest issue is crop residual burning
[1:40:21] stubble. Can the tool be used for this? And the short answer is yes, but again, you have to kind of know where the fires
[1:40:26] are and you could use maybe like MODIS product or some other product that will show um active where there are active
[1:40:32] hot spots. Um because if the fields again, fields and harvest versus burn, you're removing vegetation and you're changing the
[1:40:40] spectral characteristics. So, they might look similar. So, you just have to be careful when using it. Um and it's also
[1:40:46] possible you might be able to develop your own burn models um to if you want to classify imagery as burned or not
[1:40:51] burned for um burned burning stubble. Question 22. Can the FMT tool be used for crop burning issues and its mitigations and
[1:41:02] what satellite data should we consider the most? So, yeah, it it could be used for uh crop burning. Um if you want to map all
[1:41:09] the burn scars by hand, you'd probably want to look at some sort of sensor data that detects hot spots, which could be a
[1:41:16] little bit off I because a lot of the hot spot data is kind of coarse 500 m to 1,000 m
[1:41:22] resolution. resolution. So, if you know approximate locations, you could easily do it. If you don't, then then you might have a few problems if, you
[1:41:31] know, know, um burned areas look similar again to harvest areas in crop uh type. So, you could use it um but you have to be a
[1:41:39] little bit careful when using it. What are the gaps of pre- and post-fire for determining fire severity and burn
[1:41:45] severity? Um So, the gaps I'm I'm I'm I'm thinking maybe that you're talking about the scan gaps um and that would be
[1:41:55] because we used uh Landsat 7 imagery um to map the fire which has data gap issues. issues. Um
[1:42:04] Um Otherwise, uh if you're talking about knowledge gaps, again, the imagery isn't showing fire severity, it's showing burn severity.
[1:42:14] It's showing the change in vegetation. Question 24. As far as I'm concerned, ecological ecosystem recovery after fire
[1:42:24] is not always related to severity drive remote sensing other other methods instead of uh spectral indices to assess severity.
[1:42:31] And the short answer is yes, that's true. Um you know, it could be the amount of rain
[1:42:36] or the amount you know, amount of rainfall or it could be the amount of nutrients available after fire.
[1:42:43] Um Um So, So, uh uh most of the methods we look at are spectral in nature. Um
[1:42:51] you can also go out on the ground and measure it physically and after measure monitor physical burn severity.
[1:42:57] But, But, um um So, So, yeah, I mean this tool is specific specifically related to spectral. Um if
[1:43:06] it doesn't work for your area if it it just doesn't make sense, then I just wouldn't use the tool.
[1:43:19] Uh question 25. Is it possible to use some kind of brightness temperature and is there any spectral
[1:43:26] spectral library for different classification types? types? So, yeah yes, you could use some kind of brightness temperature probably
[1:43:33] delineate the fire scar. The only thing is that with Landsat, the we're looking at the um uh we're looking at some of
[1:43:43] Excuse me, if you're looking at the thermal products, they tend to saturate pretty quickly. So, and they could that
[1:43:49] saturation can bleed into other pixels. And so, I don't necessarily recommend you using it. And it's also only uh
[1:43:56] valid when you um map on a fire when a fire is actually occurring. occurring. Um is there a spectral library for
[1:44:03] different classification of fire type? Um Um I There probably is. I'm not necessarily aware of one right now. I'm not using
[1:44:12] any other spectral library. What happens to the dNBR offset? How is this used in the tool? Um this wasn't really explained well
[1:44:22] during my demonstration. The dNBR offset is used to create the relativized difference normalized burn ratio image. Um the other thing is that the dNBR
[1:44:31] offset could be used, and this is up to you. If you want to do between fire comparisons, you can subtract or add
[1:44:38] that value. So, if it's negative, um if it's a negative value, you're going to add it to
[1:44:45] actually add the value. If it's it's positive, you'll subtract it. And this allows you to compare uh compare fires
[1:44:52] um that occurred at different times and different places. You're trying to get the um you know, the condition as close
[1:44:58] to zero for unburned areas as possible. So, you would just subtract or add that value to dNBR.
[1:45:05] Uh there is no offset value for NBR. Okay. Let's see. Are there any other questions right now?
[1:45:27] Right now, it looks like you've got them all, Josh. Well, um we can stay on a little bit more in case anybody has any
[1:45:33] additional questions. That sounds good. I can definitely answer any of the questions and I and I'll finish completely. I know we just
[1:45:43] talked through some of these questions, but I'll also finish um I'll edit it some more, too. Let's see. There's another question.
[1:46:26] Okay, question. Would it be justifiable to do the data processing for forest fire extents of already mapping without
[1:46:31] conducting field work? Okay, so for forest fire extent, definitely because you can see the burn scar clearly in the image and there's
[1:46:40] not not I mean, the pixels are 30 m, so you might have some error in the perimeter
[1:46:45] delineation just because of um pixel size. size. You also would have some user error, but um there's not as I haven't seen a lot
[1:46:54] of of problems with ever using fire perimeter data as laying from Landsat data, and she it's pretty well accepted in
[1:47:01] literature. Now, the severity is a different case. Um if you can somehow tie severity with um um what's actually what you're seeing on
[1:47:13] the ground, then you could do it without conducting a lot of field work. Um if you want to get more exact break
[1:47:22] points for the burn severity image, then you probably want to regression analysis by conducting by actually going out,
[1:47:27] collecting composite burn index data on the ground, and relating this to the imagery. There's a bunch of papers out
[1:47:33] there that do this. Um so, it's if um but you don't necessarily Excuse me, if you do see trends, if you do see
[1:47:44] that that you know, um a high severity a high severity pixel as shown by the imagery um actually is high
[1:47:51] severity in the ground, then you can use it. Um so, it's it's really up to the user um
[1:47:56] and whether or not they can determine if the imagery actually makes sense. The other thing I would want to point I do
[1:48:02] want to point out is severity um with uh severity is really defined well for forested areas in the imagery.
[1:48:10] Shrubs, it's it's okay. Um you know, it it may or may not show severity well, and then herbaceous, you really can't
[1:48:17] get severity out of it very well. So, um yeah, you you just have to be careful with
[1:48:25] with uh uh how you're using the tool to define burn severity, what assumptions you're making. Okay. Can we map the burn severity of soil?
[1:48:52] Um Um so, short answer is w- Okay, so, each each pixel is kind of amalgamation of all the burn burn
[1:49:01] severity responses, including vegetation and soil. So, when you map burn severity, you are um mapping again vegetation and kind of soil burn
[1:49:10] severity. severity. I Again, you would have to determine for your area if the imagery related well the if the burn severity imagery related
[1:49:19] well to soil burn severity. Um Um and it may or may not. It's difficult for me to say. Again, really the imagery
[1:49:27] reflects vegetation burning um or vegetation burn severity better than probably soil burn severity even though soil burn severity is kind of included
[1:49:36] in that analysis. Uh so in working through the exercise again error when using subset is there a troubleshooting guide
[1:50:01] somewhere? somewhere? The short answer is um um no, but it's possible if you send me your error messages I'll try to I'll try
[1:50:09] to work through them with you. Um the error messages that come out are Python error messages. Um
[1:50:16] Um so if you're used to working in Python you'll probably be able to see what the error is um more easily than if you're
[1:50:25] not really that familiar with Python. Okay, maybe we'll go for one or two more questions um and then we'll we'll close
[1:50:43] the webinar for today. Okay, sounds good. Uh next question, can we judge the grade of the fire while monitoring it?
[1:51:16] Um, I'm not sure if you mean by the actual fire effects on the ground. I would wait, you know, what we
[1:51:26] generally do assessments either either right after the fire or with one year after the fire. We generally don't monitor severity while
[1:51:37] the fire is still burning. Okay, I think at this point we'll turn it back over to Brock and he will bring up
[1:51:53] our email addresses so you can contact us if you have any questions and we can get you
[1:52:01] in touch with Josh if you have any specific questions about the fire management tool, but we want to thank everyone for joining us
[1:52:12] today and especially thank Josh for giving us a really great webinar. Again, we the recording will be
[1:52:21] available in the next day or so, so I recommend that you go through the exercise yourself at your
[1:52:29] own pace using downloading the exercise in written form and then going through what Josh went through and then if you
[1:52:36] have questions you can email us at our email addresses here. So, just to remind you next week we'll
[1:52:43] be finishing up with this fire management tool. So, Josh will be on for the first part of the webinar next week
[1:52:49] to to sort of finish up with what we didn't finish today and then we'll also be be showing you the global wildfire
[1:52:59] information system for looking at wildfires globally. So, thanks everyone again for joining us and we'll look forward to talking with you again next
[1:53:09] week.
