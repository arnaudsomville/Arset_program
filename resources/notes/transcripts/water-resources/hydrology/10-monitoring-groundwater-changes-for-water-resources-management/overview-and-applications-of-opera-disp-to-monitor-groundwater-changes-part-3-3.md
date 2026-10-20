# Overview and Applications of OPERA-DISP to Monitor Groundwater Changes Part 3/3

`https://www.youtube.com/watch?v=RbiYboadlLc` · id 188 · 1:52:23 · module 113 — Monitoring Groundwater Changes for Water Resources Management

[00:01] Hello everyone. Welcome back to this training on monitoring groundwater changes for water resources management. This is part three and the topic today
[00:10] is overview and applications of OPERA DISP to monitor groundwater changes. OPERA is observational products for end users from remote sensing analysis and
[00:21] DISP is displacement product. So, we will be talking about that and our guest speaker for that today is Dr. Eric
[00:28] Fielding from NASA Jet Propulsion Laboratory. Laboratory. This is the final part of this training and there's one homework that's posted
[00:38] today. It opens today and it's available from the training website and the homework will be due on 15th of May.
[00:45] A certificate of completion will be awarded to those who attend all live sessions and complete the homework
[00:51] assignment before the due date. Here's a brief review of what we saw in the last session. Uh, in part two, we
[01:01] talked about global land data assimilation system version 2.2. Land data assimilation systems or ELDAS, they integrate data from various sources
[01:11] using algorithms that represent our knowledge of physical processes to fill spatial and temporal gaps. GELDAS 2.2 integrates GRACE and GRACE
[01:23] Follow-On observations. We talked about these in part one of this training and so GELDAS assimilates uh, terrestrial
[01:32] water storage with other information using data assimilation techniques enabling spatial and temporal downscaling and vertical disaggregation. GELDAS 2.2 soil moisture and groundwater
[01:45] output has been evaluated extensively using ground-based observations. Uh, there are a couple of limitations to this data. The model does not simulate
[01:56] water management, that is groundwater pumping, so it cannot effectively downscale grace or grace follow on observations where direct human impacts
[02:06] are significant. And the model does not simulate confined aquifer storage changes, which may be an important components of total water
[02:15] storage changes observed by grace and grace follow on in certain regions. CLDAS 2.2 output are updated monthly on
[02:26] uh GESDISC site and associated wetness and drought indicator maps and monthly forecasts are updated weekly on the
[02:35] National Drought Mitigation Center website. website. This brings us to today's session. And so objectives for today are that by the end of part three,
[02:47] you will be able to identify characteristics of OPERA surface displacement product, access and visualize OPERA DIS data to
[02:56] infer groundwater changes at regional scale for applications. As in the previous two sessions, please put your questions in the questions box
[03:09] and we will address them at the end of the webinar. Feel free to enter your questions as we
[03:14] go. We will try to get to all of the questions during the Q&A session after the webinar.
[03:21] And the remainder of the questions will be answered in the Q&A document, which will be posted on the training website
[03:28] about a week after the training. With that, I want to introduce our guest speaker for today, Dr. Eric Fielding.
[03:38] Dr. Fielding is a senior research scientist at NASA's Jet Propulsion Laboratory and California Institute of Technology. Technology. He received his undergraduate degree in
[03:49] Earth Sciences from Dartmouth College and his PhD in Geological Sciences from Cornell University. His expertise in processing synthetic aperture radar data
[04:00] and especially SAR interferometry. His research interests include mechanics of landslides including transition from stable to unstable sliding and effects
[04:12] of climate variations. Active tectonics especially in the Alpine Himalayan Tibetan system on a variety of time scales.
[04:22] Uh then fault interaction where the transfer of stresses through the lithosphere and the possible implications for earthquake risk
[04:30] assessment. assessment. Dr. Fielding has received several awards including AGU Geodesy Ivan Mueller Award for service and leadership.
[04:40] Several NASA Exceptional Scientific Achievement medals and Edward Stone Award for outstanding research publication. publication. Dr. Fielding has more than 100
[04:51] peer-reviewed publications and so we invite Dr. Fielding to talk about OPERA DisP. Eric. Thanks Amita for the introduction. I'm
[05:04] going to be covering the use of the OPERA displacement products to monitor groundwater changes. And I'm using some slides from Grace
[05:14] Bonto who's also at JPL and part of the OPERA displacement validation team. So [clears throat] I'm going to be doing
[05:26] an overview of the OPERA displacement products and show some specific applications to understand how this particular type of
[05:39] product can be used for groundwater monitoring. monitoring. Uh these are the objectives. I'm going to do a quick overview of SAR
[05:48] interferometry just to get the basic concepts. Uh we have previous ARSET trainings that cover this topic in much
[05:56] more detail. Uh so I will uh point to those as a good way to get the more
[06:02] details about the the the background. A little bit about what the interferometric phase, which is the basic measurement of SAR
[06:12] interferometry, interferometry, uh uh tells us about the land surface and and uh surface subsidence. And then uh understand what the OPERA,
[06:22] which OPERA stands for the Observational Products for End Users from Remote Sensing Analysis, um program displacement product
[06:34] measurements uh mean. And then we'll uh in the demonstration show show uh uh uh some examples of what the OPERA
[06:44] displacement time series reveals about land subsidence uh in one of the larger subsidence areas in the United States,
[06:53] the California Central Valley. Uh these are the uh previous uh ARSET trainings. Uh so these are good places
[07:02] to start if you want more uh uh detailed information on uh the process uh in SAR and and SAR
[07:11] analysis. analysis. So So here's [clears throat] a review uh uh of the uh Synthetic Aperture Radar or
[07:19] SAR interferometry. Uh the 2017 ARSET training and 2019 ARSET training on on SAR interferometry uh have much more
[07:29] details. I've reduced that it here to make it uh fit into the time that we have available. Uh Uh, the key thing uh there
[07:42] is that what we measure with SAR interferometry is the phase of the radar signal. You may have seen
[07:49] in other uh, SAR analysis um, training or or or papers uh, that there's the radar uh, amplitude uh, but for interferometry we
[08:02] don't really pay attention to the amplitude. We look at the phase of the SAR signal. And the SAR phase is
[08:11] uh, a measurement of uh, how many uh, uh, oscillations of the radar wave there are between the antenna on the satellite and
[08:22] the the ground. And one of the things to keep in uh, in mind is that we have um,
[08:31] uh, uh, the radar resolution and the all the elements or or objects within that resolution element, which is
[08:42] roughly 10 by 10 or 20 by 20 m, um, are added together into one uh, phase measurement. And we also have
[08:53] this uh, very large number of uh, uh, cycles of the radar wave between the satellite and the ground.
[09:01] Um, but by taking the difference or or interferogram, interferogram, we we basically subtract uh, the whole the phase from one
[09:12] observation observation uh, o- o- from the the phase of another observation and by that cancels out almost all of these
[09:23] effects and we then get a measurement that's just the uh, surface displacement. So, basically basically uh, uh, we can simplify the phase as just being
[09:35] uh due to the distance, the which is uh, the letter rho here, and some other constants that are due to
[09:43] the uh the radar propagation, um and and and distance from the satellite, satellite, and uh and noise and
[09:55] by taking that same measurement of a second image, uh these other constants we assume that these other constants are are the same.
[10:06] And And when we then uh uh subtract phase one from phase two, these other constants then cancel out.
[10:16] And therefore, uh get rid of those and the remaining signal is the difference between the distances between of of the two uh
[10:27] satellite images plus some amount of noise. noise. Uh Uh So, this is just a a a graphical
[10:35] representation of the same thing. At uh we take two different images at time one and time two.
[10:43] Um and the the distance to the ground can change up by a small amount. And the phase tells us how much that
[10:52] distance changed uh between time one and time two. Uh Uh one of the uh key things about the uh
[11:03] SAR interferometry I I didn't have time to get into the fact that we can also measure topography with SAR
[11:10] interferometry, but here we're using SAR interferometry to measure displacement. That's this equation here. The this is this equation the second
[11:21] equation here, and you can see that the uh the sensitivity to displacement is depending on the uh
[11:29] uh the wavelength of the radar lambda, uh uh uh 4 pi over lambda. That's the sensitivity sensitivity uh to uh
[11:39] displacement. And we are using uh here uh uh today we're going to be talking about data from the Sentinel-1 satellite. That
[11:48] the radar wavelength is 6 cm. Uh other satellites, including the uh the NISAR NASA-ISRO SAR satellite that
[11:57] was just launched last year and now being calibrated, has a radar wavelength of 24 cm. So, the Sentinel-1 satellite
[12:08] has a greater sensitivity um uh because the radar wavelength is shorter. shorter. Um Um there is a sensitivity to topography,
[12:21] uh but we're not going to talk about that here. So, So, >> [clears throat] >> the OPERA uh observational products for
[12:32] end users for remote sensing analysis uh uh project uh does systematic uh measurement of displacements from the Sentinel-1 um
[12:44] project, but they also do several other uh types of analysis. It's a a large-scale uh uh project that's supported by the NASA
[12:57] satellite needs working group uh uh which uh gets money uh directly from the Office of Management and Budget to
[13:06] support these products that are requested by other US government agencies. agencies. And all of the data is free and open,
[13:16] and we've been working hard to make this data what we call analysis-ready, uh which means that the data is
[13:24] processed to a level where you can start using the data uh without uh having to do your own
[13:30] sophisticated processing. So, there's uh these these different products and I'll [clears throat] I'll go into more in the next slide. And OPERA goes uses
[13:43] data from a wide variety of missions including Landsat 8, Landsat 9, Sentinel 1, the SAR from the Copernicus European
[13:56] uh constellation and Sentinel 2, which is the optical imaging from the Copernicus Copernicus uh uh uh uh constellation.
[14:07] constellation. And then NISAR, which is the new NASA satellite that is obviously a SAR mission. So, these are the products that are
[14:19] uh uh that OPERA is producing. producing. Uh there's level two products. These are basically intermediate products that we
[14:27] don't don't that we are producing for the as part of the processing, but could be useful for other people.
[14:35] They're not so easy to use directly. Um Um the level three products are what most people are going to be using.
[14:45] Um there's the dynamic surface water extent extent uh that's a map of the surface water um >> [clears throat]
[14:55] >> over time. That's dynamic because it's over time. And there's two different versions of the surface water extent. One is made
[15:03] from the the harmonized HLS, the harmonized Landsat Sentinel 2 uh data set, so that's optical imaging. And then a second version that's been
[15:16] it's made from the Sentinel 1 SAR imagery, and in the future will be made from NISAR. Those products are near global wherever
[15:27] the data is acquired. And they're updated as often as we get new images from from Sentinel-1 and the harmonized Landsat
[15:38] Sentinel-2. Sentinel-2. Similarly, the disturbance product, this is a measurement primarily of disturbance to vegetation and other uh
[15:51] uh other things that happen to the surface uh could be due to fires or people cutting down trees or
[16:01] or whatever. Um these are very similar and they're both there's two different versions, one made from the harmonized Landsat Sentinel-2
[16:10] and one made from the Sentinel-1. And again, these are are near global uh available on land almost everywhere.
[16:21] Um today I'm going to be talking about the uh surface displacement product. This is mapping surface displacement
[16:29] uh from the Sentinel-1 and and soon from Sentinel from NISAR. The coverage of this data set is North
[16:37] America, not global uh because of the uh large amount of uh cost of of doing the more advanced
[16:45] processing for necessary for displacements. displacements. In the future >> [clears throat] >> the uh OPERA project is going to be uh
[16:53] making a vertical land motion product. The The present displacement product is in the radar line of sight. Um
[17:06] uh not uh uh separated into vertical or or horizontal motion. motion. And it's not tied to any uh
[17:16] any data. Whereas the vertical land motion uh product will be separated into vertical and horizontal displacements, and it
[17:25] will be tied to uh GPS or other um uh absolute datum uh to make a uh um
[17:36] um a product that's directly usable for measuring vertical land motion. Uh for North America, uh similarly to the
[17:44] displacement product. And just uh recently just um uh uh released is a a tropospheric zenith delay. Uh one of the effects that I I
[17:56] didn't mention uh on radar interferometry is that as the radar beam goes through the atmosphere, it it can
[18:04] be be uh uh slowed down slightly uh by the presence of water vapor in the atmosphere. atmosphere. And this tropospheric uh zenith delay
[18:16] uh product can be used to uh correct for those atmospheric delays. Uh it it is useful for applying to the
[18:26] opera displacement product, but it's actually a generic uh global estimate uh for any place in the world and can be
[18:35] used for any uh SAR mission. We don't have time to go into that today. today. So, this is [clears throat] the map of
[18:44] the uh displacement products for North America. Uh this is the the the the descending track. Now, this is the ascending track map.
[19:00] Uh this ascending is where the satellite is uh going north relative to the uh Earth's surface. Um
[19:10] Um due to the way that the uh Copernicus system operates the Sentinel 1 satellite, they have good coverage of
[19:18] the the eastern part of uh of North America only with the ascending tracks. tracks. Uh Uh they have limited capacity
[19:29] uh to to do uh two different look directions there, so so the for the eastern part of the US only
[19:36] ascending data is available. You'll notice that the uh the displacement product is only available for the part of Canada that's within 200 km
[19:49] of the border with the United States. Um due to the widespread uh uh uh snow cover in northern Canada, we
[20:00] decided to uh not uh include that in the processing. But the uh processing also goes down through
[20:08] some Central America to the uh southern border of Panama. And the coverage uh is North America with a with an asterisk because it
[20:21] doesn't cover uh the northern part of Canada. Uh the Sentinel 1 uh data coverage uh varies with time in some
[20:32] time intervals the time periods the uh passes were acquired uh with uh a 6-day separation, other times 12 days,
[20:45] or another times it's 24 days. And that depends on also on the location. For the western part of the US, uh especially uh
[20:54] the west coast, uh they uh because of the larger amount of deformation due to uh groundwater and
[21:03] uh earthquakes and other processes, they uh acq- tend to they acquire both ascending and descending data and uh
[21:12] generally have uh uh more frequent coverage. And the uh the [clears throat] OPERA processing starts in July 2016.
[21:25] Uh Uh the satellite the Sentinel-1A, the first Sentinel-1 satellite, was operating before that, but the coverage was less,
[21:34] so we just decided to start with a July 2016. 2016. Uh NISAR uh data processing is uh
[21:45] uh waiting on the final calibration of the NISAR data, which should be completed by June of this year. And uh
[21:54] the uh OPERA team is working hard on getting that ready. And this is uh the first InSAR product uh if if from
[22:04] anywhere that's been certified by the uh Committee on Earth Observation Systems, CEOS, uh as application-ready data. data. So, OPERA
[22:18] >> [clears throat] >> products have a a number of layers. I'm going to be uh talking about some of these
[22:24] in detail. Uh the frame number here is is part of the file name name uh because the uh
[22:35] OPERA products are processed on a frame by on a frame basis uh using a frame definition that was uh
[22:44] created by uh the ASF. So, So, I'm going to be specifically talking about the uh the main primary data
[22:54] layer, the uh displacement in meters. But, there's a [clears throat] second uh version of the uh displacement, which is
[23:05] what we call the short wavelength displacement. displacement. The short wavelength displacement [clears throat] layer has the um
[23:14] um the larger scale variations in displacement filtered out. Um everything over about 25 km in spatial scale has been filtered out.
[23:28] And that um short wavelength displacement is what they use for display in the ASF um um displacement portal, which I'll be
[23:40] talking about uh later. And then there's a whole set of uh these different met quality metrics. Uh
[23:51] Uh not going to go into this in a in great detail because it's kind of an advanced topic.
[23:57] Uh but these layers can be used to determine which which >> [clears throat] >> which pixels of the of the product have
[24:07] good quality measurements and which may have uh uh a more noisy measurement. Okay, so that's the um or ready to go to
[24:20] the demonstration. I'm going to be uh giving a demonstration of that uh displacement portal. portal. And then uh doing some analysis.
[24:30] The displacement portal uh as I mentioned uses the short wavelength uh uh displacement displacement filtered versions. And then I'm going to show a Jupyter
[24:43] notebook for more in-depth dis um analysis of the displacement products. products. And when you go to the displacement
[24:52] portal, which is here, the displacement.asf.alaska.edu, uh it comes up with this uh this data disclaimer, which is just a reminder
[25:02] that uh what they're showing is the uh filtered uh displacement, which uh can work uh it works well to uh highlight uh
[25:15] small-scale small-scale deformation features, but large features uh like the Central Valley that I'm going to be talking about later are not
[25:23] very well uh imaged by this short wavelength. Okay, so now I'm going to go to the uh
[25:31] demo. Uh Uh Okay, so now I'm in the uh displacement portal. Uh right now I'm looking at the
[25:44] the descending track uh uh upward displacement uh products uh from Sentinel-1. As I mentioned earlier, there's kind of a
[25:55] a gap here in the eastern part of uh the United States uh where they have not been acquiring
[26:02] uh the the data with the descending tracks. Uh That's going to be one of the big advantages of NISAR is that NISAR
[26:11] has global [clears throat] coverage with both ascending and descending tracks. The NISAR engineers spent a lot of time
[26:19] developing a a whole uh hardware and uh data system uh and down like a did down like to be
[26:27] able to cover the whole world with ascending and descending data. Uh Uh There is coverage in uh the the very uh
[26:35] northeast part of uh uh of of the United States and also around uh Houston. Houston. Um but most of the eastern part of the
[26:46] US is is not available in the descending tracks. tracks. Uh so I'm going to zoom in here. Uh, you
[26:53] can just zoom in with a with a scroll bar or uh or the uh plus button over here. The
[27:02] scroll bar works pretty nicely if you have a scroll uh wheel on your mouse. And here we can see that these are uh
[27:10] groundwater groundwater uh subsidence areas in uh Arizona uh and New Mexico and Texas. And also, I think northern Mexico.
[27:23] Uh, Uh, because these are relatively small areas of subsidence, the uh short wavelength filter is not uh
[27:33] changing the the values too much. You'll You can see that there's kind of a halo of uh
[27:39] what what looks like apparent uplift around the edges. That's a a filtering artifact. But, we can click on a point here
[27:49] and and the the uh displacement portal goes out and gets the Opera displacement products for that point
[27:59] point and will show us a time time series for the whole data set at that point. Takes a little bit of time cuz they
[28:11] have to go through a lot of files. And here we can see the time series from uh July 2016 or August 2016
[28:24] through through uh the last point here is September 2022. 2022. Um Um they are working on continuously updating this time series,
[28:34] so uh they're trying to get up to uh the very most recent data uh soon. And uh one of the things to notice here
[28:45] is that this is uh uh subsidence due to groundwater extraction and uh it's highly seasonal. Uh during the um the winter when it's
[28:56] raining and and they're not trying to grow so many crops, uh the the surface is relatively stable.
[29:03] And then in the summer when they're using lots of groundwater to irrigate their crops and extracting it out of the
[29:11] the subsurface, then the ground surface uh subsides. So, that's why we can see this very systematic uh level and then
[29:21] uh subsidence pattern over the whole um uh uh almost almost 10 years here. And we can see the same thing on other
[29:35] other groundwater basins. Uh Uh it's a very common feature. That first point uh had a total subsidence of
[29:45] uh uh 0.4 m, that's 40 cm in 9 years. And this new point >> [clears throat] >> um
[29:58] So, the the portal has a way of uh showing uh points that are not uh well determined uh as uh these kind
[30:10] of open or dashed circles uh because I clicked on a point that didn't has probably uh some agricultural
[30:17] fields in it. Um Um During the time that they're plowing those fields, uh the opera displacement product cannot be measured,
[30:28] so then it ends up being these uh dashed uh circles. But the the way that the opera
[30:36] displacement product is uh processed is able to um um get a overall time series even when there's
[30:46] these gaps where the the measurements are not good quality. Let me erase those points. Oh, Oh, before I go away from this area, I'm
[31:03] going to just switch you could use this little uh flight direction button here to change the the flight direction. So, these are this is
[31:14] now the ascending track data. And we can see that the groundwater line of sight displacement in the radar line of sight is uh
[31:27] very similar for the ascending and descending tracks. In this particular area, it seems that there's more gaps
[31:36] in the ascending track than there are in the descending track. Uh Uh where you don't see a dot, that means
[31:43] that they didn't actually turn on the satellite on that date. So, I'm going to zoom out again. This is the ascending
[31:59] track as I showed earlier in the slide. It has much more complete coverage including all of the
[32:06] Eastern US. Um Um Most of the Eastern US doesn't have uh so much groundwater extraction. Uh but there are some hot spots.
[32:22] Um Um Houston, Texas and Galveston is one of the areas where there's a lot of groundwater extraction.
[32:34] And we You at a point here. And you can actually zoom in here to see the full resolution
[32:46] 30 meter pixels if you want to get >> [clears throat] >> the pixel that includes your house or
[32:53] whatever. whatever. Uh Uh or or the some other feature. So here we can see that the ground the
[33:02] ground water extraction seems to be uh more constant without that strong seasonal variation. And it uh the total subsidence here
[33:15] is a little bit more than uh it's about 12 milli uh 0.1 1 2 or meters or or 12 centimeters.
[33:39] Now I'm going to take a quick look at the California Central Valley. And here you'll notice that the uh
[33:46] the it looks very Well, if you know what the the subsidence in the Central Valley looks like,
[33:52] like, this is going to look very strange and that's because the overall [clears throat] subsidence uh over a long spatial scale has been
[34:01] filtered out and what we're seeing is just local variations. So it looks like there's little areas of that are going
[34:08] up and down. Um but that's because the overall subsidence uh has been subtracted out. And that's why
[34:19] I'm going to show you next how to look at the full uh uh the full unfiltered data
[34:27] uh with a a a notebook uh Jupiter notebook. Uh this other feature over here is the uh
[34:36] signal from the 2019 uh Ridgecrest earthquake. It was a magnitude 7.1 earthquake. earthquake. Uh Uh that was actually preceded by a 6.4
[34:46] earthquake. This uh this line here was the 6.4 and this was the rupture of the 6 7.1.
[34:54] This is also a little bit affected by the filtering. But it shows the earthquake signal. Uh okay, so I'm going to um
[35:06] switch to a different tab now. Okay, so uh this is a a Jupiter notebook uh that was um
[35:21] Yes, this is a Jupiter notebook that uh we're going to use to uh download a subset of uh
[35:29] Opera displacement products for a part of the uh Central Valley. And then look at the full uh
[35:41] unfiltered uh displacement uh products. I'm not going to go into a lot of detail on this uh first setup part.
[35:51] Uh it's possible to to run you you can run this by setting up a conda environment. environment. And then running these uh commands here.
[36:01] Um Uh so this next uh uh This is the cell where we actually specify specify what area we want to look at.
[36:15] >> [clears throat] >> You'll remember earlier I said that the Opera products are processed on frames. Uh
[36:24] I forgot to mention that the in the uh displacement portal, when you click on a point, it it shows you what frame ID
[36:33] uh that point is is part of. So, um that's the the kind of the easiest way to to get the uh frame ID, but you
[36:41] can also get it by searching for Opera products in the regular Earth data or uh or ASF uh vertex search.
[36:55] Then I uh specify >> [clears throat] >> a bounding box. That's just a polygon polygon with the four corners of the rectangle
[37:06] that I want to analyze. This particular notebook I'm using just the data from August 2022 to August 2024.
[37:18] This is a time interval that was very uh had had a lot of rainfall. Uh the 2022-2023
[37:27] 2022-2023 winter in California was extremely wet, one of the wettest in the in the last century. And the 2023-2024
[37:35] winter was also uh well above normal. So, this time interval is is a very wet period uh for
[37:44] uh California rainfall. rainfall. Um so, once you've specified your area, then the uh system will prompt you to enter your NASA Earth data
[37:57] login. Uh you you can't download the net Opera displacement products without having a a NASA Earth data login
[38:06] account. Uh this is free, but it requires registration. Uh and you have to enter your username and password here.
[38:14] Uh you can set up uh a new a file [clears throat] called .netrc in your home directory
[38:22] with that Earthdata login information which is what I do to avoid having to enter this every time.
[38:29] It just reads from that file in your home directory. So this uh cell checks to make sure that I have the
[38:38] um um uh uh credentials for Earthdata and then it's going to go out and download the data.
[38:48] Because I've already downloaded this data, uh it's going to very quickly realize that uh I've already downloaded it. So then
[38:56] it finishes. Um it it can take quite a while depending on your internet speed. Um it could take
[39:03] 20 minutes or or longer to and and and depending on how big of an area you're trying to
[39:10] download. So it's now put those files in this uh subfolder called subset. dot N NCs that's um net CDFs and frame
[39:28] 38502. All right. So these are all the files. It's 59 files for that 2-year time interval. Uh this this just checks to make sure
[39:44] there's nothing uh Mhm. Mhm. Uh Uh wrong with the files. So this next step uh looks at the files
[39:54] and uh gives uh basic information about each file. file. I didn't have a chance Mhm. To [clears throat] uh
[40:04] Uh I I didn't make a slide earlier, but um um the Opera data is processed in what we
[40:11] call mini stacks. Um the the uh uh, about 15 dates in a row are are combined into a mini stack. Uh, this is a key
[40:24] part of of the processing efficiency. Uh, because we can't process the whole time series together. Uh, but in this case, uh, over those two
[40:36] years, there's four different mini stacks. Each one has, uh, 15 scenes except for this one that seems
[40:43] to be missing one scene. Um, Um, and within each mini stack, uh, uh, the reference date is the first date in
[40:53] the mini stack, but the, uh, the last date of a mini stack is the same as the
[40:58] first the next the first date of the next mini stack. So, this notebook is able to then
[41:04] reconstruct the whole time series uh, without any any real additional calculation. So, we can see here the first date is, uh,
[41:14] August 10th, uh, 2020 >> [clears throat] >> two. Uh, Uh, and the last day is, uh, number
[41:27] 58. 58. >> [clears throat] >> It's between So, the first day here is the reference date of that mini stack.
[41:35] Uh, this this mini stack goes from February to, uh, July. And the the last day is July 30th, 2024.
[41:49] Uh, so, this then quickly, uh, does the the referencing of those mini stacks. stacks. Uh, it sees all the files.
[42:00] And then, uh, we need to choose a reference point. Uh, as, as, uh, >> [clears throat] >> the opera products and as with most uh,
[42:14] InSAR products, they're not referenced to any um absolute reference system. They have their own internal uh it's just basically relative to the
[42:27] satellite orbit. So, we need to choose a point point uh uh that we think is uh not moving.
[42:37] Um In this case, I chose a point uh it it makes this plot here. This is the whole time series. I made a
[42:47] point that over here on the side of the uh uh of the Central Valley where I it's
[42:56] stable stable um ground not not affected by the subsidence as as the reference point. But, you can pick one here and it'll
[43:04] tell you what lat long >> [clears throat] >> what the lat long of the point that you
[43:09] picked is here. And then you can enter this value into this next cell. Uh I already entered in the uh
[43:19] the reference point. Uh here that I had chosen earlier, but you can also use this tool to choose
[43:28] another point that's in an area of subsidence. subsidence. Uh Uh and get that latitude and longitude and
[43:36] then then uh this next cell with you entering the point for the to plotting the time series.
[43:44] series. Uh Uh then this next cell shows the uh the full time series for that uh point.
[43:53] Uh first it shows the map. It's now re-referenced the map. Uh I know that's the that's the
[44:01] original. It's this one. Uh we're going to use that reference point. point. Uh the Opera products are actually in
[44:12] UTM coordinates. Uh but the notebook is is converting the the lat long point that I gave it into
[44:19] UTM coordinates to uh use with the Opera Opera data product. It's now re-referenced the time series to that um
[44:35] reference point that I gave it. It's going to make a new map here. >> [clears throat] >> So, this is now the uh cumulative
[44:58] displacement over the the over the four years relative to the uh reference point. And the reference point is this point up
[45:06] here uh with the yellow dot. You can see it's at the edge of the of the Central Valley. This is all the big
[45:13] uh uh Central Valley of California. Uh near the city of um uh Fresno. And uh there's a small city here called
[45:26] Corcoran. Corcoran. This this point here is near the city of Corcoran. Corcoran. And we can see the time series for that
[45:33] point. In this next plot, >> [clears throat] >> in this case, I I chose a point which uh
[45:46] in this time interval actually uh had very little net displacement. There was a little bit of displacement here in
[45:54] 2022 before the the heavy rains of of the winter of 2022 2023 started. And then we uh it started moving back up
[46:06] later. later. So, this is one of the things that uh is very which is a little bit unusual
[46:14] about this time interval. Um you can see this is the fully This is not the filtered time series. This is
[46:21] the full uh the time series and you can see that the eastern part of the of the
[46:27] Central Valley here has continued to subside, but this western part over here has actually rebounded. And that's
[46:36] because there was enough rainfall uh that it started recharging uh the shallow aquifers enough that the ground
[46:45] surface actually started moving back up uh during this time interval. We have seen this before. Uh there was a
[46:53] previous time between 20 15 and 2019 where we also got a lot of rainfall and uh there was a previous time when when
[47:05] this western part of the Great Valley also moved upward. So, [clears throat] this is one of the
[47:11] This is one of the key uh uh pieces of information that the InSAR can provide uh while where Grace is going to
[47:19] be averaging over this whole area and showing that maybe there's a a reduction in the water uh
[47:27] the groundwater extraction uh but it won't show you uh the spatial distribution of the surface effects of what the groundwater is doing. And
[47:38] with the InSAR we here, we can see that the the western part of the Great Valley has actually moved up in
[47:45] these uh two years uh due to significant groundwater recharge. recharge. And uh this eastern part is still moving
[47:53] down, but as I'll show you uh shortly, uh the uh the rate of subsidence is much less than in
[48:02] a previous time at all. Uh so [clears throat] then there's a bunch of um uh more notebooks that show more
[48:15] information about the the details of the um the quality metrics. Uh this first one is the uh
[48:30] There's a number of different quality metrics. I don't really have time to get into all of them here.
[48:35] There is a layer that you could look at. It's the short wavelength displacement. I'm not going to We already saw that in
[48:42] the displacement portal. Uh one of the um the main uh is It's going to going to show the uh
[49:07] Here. Yeah, so this is showing the whole uh uh uh set of time of of layers. This is the overall displacement
[49:17] uh with the subsidence in the eastern part of the valley and in the uh a slight uplift in the western part.
[49:25] This is the short wavelength displacement uh which as I mentioned in the the in the portal it has this very strange
[49:34] uh uh fact where this very large scale uh long wavelength displacement has been removed. removed. Uh one of the layers is called the
[49:43] recommended mask and this is uh a starting uh mask to a mask out the uh less accurately measured uh locations
[49:53] and you can see that there are many of these these uh fields uh that that were not well
[49:58] measured. In fact, this area here um um was actually flooded for uh almost a year year uh due to the extremely high
[50:08] precipitation in in uh 2023. It formed a lake there that called Lake Tulare, which was a historical lake, but then
[50:18] was drained for agriculture. Uh but came back because there was enough rainfall. Uh these are some of the other quality
[50:26] metrics. metrics. Temporal coherence is a showing uh the how uh how coherent the the measurements are with time.
[50:38] Uh cornering is this uh and cities show up as very highly coherent because the buildings uh reflect the radar very well.
[50:47] Estimated phase quality is similar to the temporal coherence and you can see this area here with the low phase quality is the area
[50:55] of that lake that formed in uh in 2023. Uh causing the measurements to be inaccurate during that time interval.
[51:06] And then there's uh there is a a water mask where permanent water uh can is masked out uh but
[51:16] there's very few permanent lakes here. This uh Lake Tulare is is a a temporary lake. Um Um there are some other
[51:27] types of uh measurements uh that I'm not going to go into here for the sake of time.
[51:36] Uh So, finally, uh this uh cell here uh does a a velocity estimation. And then what it it's just going to take a a
[51:51] linear fit to all the points uh in each pixel um um to estimate the average velocity over uh
[52:02] the 2-year interval. And uh this particular step can actually take a lot of time to run and um
[52:12] and quite a bit of memory. Uh so, uh I I wouldn't run this unless your computer has at least 32 GB of RAM for
[52:19] it for this very large area. For smaller areas, it doesn't use so much memory. Uh it's something that I
[52:25] want to improve uh later. And then down here, this is the estimated uh average velocity for the for the um
[52:37] 2-year time interval. And here we can see uh uh this western part where the recharge occurred occurred uh with uh
[52:47] velocity on the order of uh six 2-6 cm a year or a little bit more in some places.
[52:55] Uh Uh and over here in the uh in the eastern part of the Central Valley, it uh was subsiding around 6 cm
[53:04] per year uh during these 2 years. So, this is uh this is a a significant uh a
[53:13] product that you can extract from the Opera time series using this notebook. Um then uh this later part is actually
[53:24] taking these uh products that we generated, the the velocity and other other products and and exporting them to uh file formats that
[53:37] we can load into uh a uh series program called MintPy uh or uh QGIS. And uh I'm not going to go through all these
[53:52] details. details. Uh Uh The QGIS uh products, it actually um um There's different versions of the recommended mask.
[54:07] Uh Uh Uh this is the most uh strict. Uh it it it removes the most area, especially in this area of of Lake
[54:15] Chewali. Chewali. Uh whereas this one over here uh is a more uh lenient uh uh mask that uh allows it to try to
[54:26] estimate the velocity in that area from the points before and after the formation of the lake. And And so, it actually exports uh three
[54:38] these different uh files. And it writes out the GeoTIFFs here that can be loaded into uh QGIS.
[54:49] QGIS. Uh Uh It also makes images for all the dates. So, uh those export files are under this
[54:59] export directory. Um These are the uh different files. Uh these are the As uh as I mentioned, there's
[55:17] three different versions of the uh recommended mask. Uh And then there is a a velocity uh file
[55:30] here. here. Uh this based on the recommended mask uh converted to uh centimeters. So, now I'm going to make a quick, uh,
[55:41] jump to the uh, pretty popular, uh, QGIS, uh, GIS uh, program. Uh, this is available for Mac, PC, Linux,
[55:56] and, uh, so it's a very, uh, multi-purpose international free and open source, uh, GIS package. Uh, it's
[56:07] can also, uh, the same thing kind of things can be done with ArcGIS for those who have the, uh, commercial ArcGIS, uh,
[56:16] package or or other GIS packages. Okay. Okay, so this is the, uh, the [clears throat] average velocity map, uh, loaded into
[56:38] QGIS. QGIS. It's, uh, uh, the the notebook actually reprojected it from the UTM coordinates to, uh, long coordinates to, uh, make it
[56:50] easier to look at. Uh, Uh, but I've, uh, I'm actually using QGIS to to to re-display it in in, uh,
[57:01] in in UTM coordinates because so it's not as a more accurate uh, uh, map coordinate system. Um, and, uh, here
[57:11] I have also added, uh, in QGIS, uh, a Google satellite image, which is one of the layers that, uh,
[57:20] QIGIS offers as a as a background. Uh, it's, uh, but I can, uh, Wait a minute, this is this is the, uh,
[57:31] 2022-2024 2022-2024 uh, uh, map map uh and with the rebound in the western part of the Central Valley.
[57:45] And if we turn this off, you can see the all the agriculture and and you can see
[57:50] that the Google Earth actually captured this when there was a so significant part of the Tulare Lake here.
[58:01] Uh Uh So, the this is the 2022-2024 average velocity and I did the [clears throat] similar analysis with
[58:12] the time interval from uh August 2020 2019 to to 2022. This was a 3-year time interval of
[58:27] precipitation. precipitation. Uh Uh And here you can see that the the average subsidence rate is much much
[58:36] higher. Uh this is the uh the color scheme here is that the notebook converted the subsidence rate into centimeters per month and
[58:51] these areas of deep blue here are subsiding at 1 and 1/2 cm per month or over uh
[59:02] 30 cm per year. Uh that's a that's a big amount. Uh whereas if we go back to the
[59:11] 2022-2024, 2022-2024, we can see that these subsidence rates are are much much lower. Uh in the area
[59:19] that's still subsiding and the western part is is rebounding. So, that's just a very quick uh introduction to how we could uh load
[59:30] these these products into QGIS or other GIS programs to have a better view of what the results [clears throat] look like.
[59:42] And these particular versions of the are using the recommended mask with a pretty with a moderately strict coverage um
[59:53] uh so, the the Tule Lake is largely masked out here in the 2022-2024 image, but more more complete in the uh
[1:00:05] 2019 to 2022 image. There's also a lake down here that actually stayed even longer. Uh I forget the name of that lake.
[1:00:17] So, uh now I think that's a very quick demonstration, but I hope that's uh informative. informative. And I'm just going to go back to these
[1:00:26] slides to show um uh some resources of web pages that you can use to go back and uh look at the uh
[1:00:35] background for OPERA and um the displacement products. >> [clears throat] >> Okay, so uh these are some web page
[1:00:49] resources about the uh the NASA Earth Data System that is where all of the OPERA data products
[1:00:57] are stored. Uh the Satellite Needs Working Group, which supports the OPERA project and and other projects. In fact,
[1:01:05] the the Harmonized Landsat Sentinel-2 uh data products are are another Satellite Needs Working Group product. Uh that we uh in the OPERA project um
[1:01:18] build on their product uh for some of those displacement, I mean the disturbance and uh water extent
[1:01:25] products. products. This is the uh displacement portal that I demonstrated. Uh there's some uh uh product information about OPERA in
[1:01:36] general. general. There's a link to the GitHub page where the OPERA Jupyter Notebooks are shown and in fact you can also look
[1:01:46] at the OPERA products in NASA WorldView. Uh Uh It's not as effective for the uh displacement products, but it's very
[1:01:55] effective for uh the other OPERA products such as the water extent and disturbance products. And I'd be happy to answer questions.
[1:02:06] And I'll hand it back to uh Amita. Thank you so much, Eric, for your presentation and information about OPERA
[1:02:18] Disp, especially for your demonstration about uh ASF Disp portal, and sharing your Jupyter Notebook code with everyone.
[1:02:29] Just to summarize, um we had a review of SAR interferometry, especially that phase of SAR signal is very important when you
[1:02:37] consider interferometry. Uh so when two observations are made from the same location in space but at different times, the interferometric
[1:02:46] phase is proportional to any change in the range or distance of a surface feature. feature. And that is used in producing OPERA
[1:02:53] Disp. It is derived from Sentinel-1 SAR imagery using interferometry. OPERA Disp products provide information on movements of the Earth's surface such
[1:03:04] as subsidence due to groundwater or oil and gas extraction, uplift due to water injection, and ground motion from tectonic faults,
[1:03:14] landslides, and volcanoes. We also had an overview of Opera displacement visualization portal available from Alaska SAR Facility and
[1:03:25] Dr. Fielding demonstrated Jupiter notebook code for in-depth analysis of Opera DISP products. Uh we saw how subsidence in Central
[1:03:34] Valley, California uh looked at from DISP indicated groundwater changes. This brings us to the end of this
[1:03:44] training. training. And in this training we focused on three different ways of looking at groundwater. groundwater. Uh so, we first looked at GRACE and
[1:03:55] GRACE Follow-On, then GLDAS model, and then Opera data products, and we saw their characteristics. So, GRACE and GRACE Follow-On they
[1:04:04] provide measurements of variations in mass or gravity changes over Earth's surface. surface. Um and these gravity variations are
[1:04:12] interpreted in terms of changes in equivalent water thickness or terrestrial water storage, TWS. Uh GLDAS version 2.2 integrates GRACE
[1:04:23] and GRACE Follow-On observations of TWS with other information using data assimilation, assimilation, enabling special and temporal downscaling of soil moisture and
[1:04:34] groundwater. And finally, Opera, which uses Sentinel-1 SAR, has displacement product or DISP um that is also useful
[1:04:43] for monitoring groundwater depletion and recovery as we saw. And these are the characteristics of these data sets. Uh GRACE and GRACE
[1:04:52] Follow-On missions uh they provide terrestrial water storage change data. Um these are global data sets. Uh resolution um original is approximately
[1:05:03] 3° by 3° uh latitude longitude, but they're reprocessed at 1° by 1° and also at 1/2° resolution. Uh temporal coverage is
[1:05:15] February February uh 2003 to present and there is a gap between July 2017 to May 2018. Uh that's the the gap
[1:05:26] between Grace and Grace follow-on. Data are available on monthly time scale. Uh GLDAS groundwater storage data it's
[1:05:34] it that's also global and it's available at high resolution quarter degree by quarter degree latitude longitude. Uh
[1:05:41] it's the same um time period as Grace and Grace follow-on as they're assimilated in here and these
[1:05:47] data are available on daily time scale. Finally, OPERA disk which is based on Sentinel-1 data has a higher resolution
[1:05:57] 30 m. Um it's uh right now available uh only for North America and the duration of the data is uh July 2016 to 2025 and
[1:06:09] revisit time is about 6 to 24 days depending on the location. We also had demonstrations and you had
[1:06:19] exercises for data access, analysis, and visualization for Grace and uh Grace follow-on terrestrial water storage changes. We looked at Grace data
[1:06:29] analysis tool. I want to um bring another um visualization tool which we did not have time to go through, but this mask on
[1:06:40] visualization tool is similar, but it also includes uh GSFC mask on data uh at a half a degree.
[1:06:48] So, you can uh explore that, uh but we looked at maps and time series based on this original Grace data analysis tool.
[1:06:58] Then, we used Giovanni and QGIS to look at GLDAS groundwater data. We had maps and uh time series and also looked at
[1:07:08] difference in groundwater. Uh so, groundwater storage change over different periods. Finally, today we had um a demonstration on OPERA DISP uh
[1:07:20] using a ASF displacement portal and um we will have some exercise based on that. There is one homework that's posted
[1:07:32] today on the training web page and answers must be submitted via Google Forms. Uh the homework is due on 15th of
[1:07:40] May. May. A certificate of completion will be awarded to those who attend all three live webinars, uh complete the homework
[1:07:47] assignment by the deadline, and then you will receive a certificate via email approximately 2 months after completion
[1:07:55] of the course. Just to note here that for each uh training session, we had exercise and some questions are based on
[1:08:03] those exercises, so please uh go through the exercises before you uh go to the homework. homework. Once again, we want to thank our guest
[1:08:12] speakers, Dr. Matthew Rodell and Dr. Eric Fielding, for their uh presentations and information about uh different data sets.
[1:08:22] Uh you can see the trainer information here. Uh Dr. Rodell and Dr. Fielding, you can contact them if you have any
[1:08:29] questions. Uh this is the ARSET team, my colleague Shawn McCartney and Erica Podest along with that. You can contact
[1:08:36] any of us if you have any questions. This is ARSET website, ARSET YouTube link. Um and for questions, comments, or
[1:08:45] to share how you have applied our training to your work or studies, please email at nasa.arset@gmail.com and join our quarterly newsletter to
[1:08:56] stay up-to-date on our latest trainings. And for that, uh you can send an email with no subject line to this email
[1:09:04] address and follow the instruction uh sent in the uh response. Here are some useful resources uh used
[1:09:14] in this training. Okay, thank you all and uh we'll start with our question and answer session. Um
[1:09:32] we have uh Dr. Fielding here and so we can start with the question answer session. session. Welcome Eric and thank you for being
[1:09:42] here. So, we'll start with question one. Is downscaling important for looking at groundwater drought index in a
[1:09:50] particular region? And Eric, you can unmute and uh answer the question, please. Hello, yes. Um this is uh
[1:10:11] uh the drought index that uh the National Oceanic uh the National Weather Service in the United States
[1:10:20] makes is a um estimate of the availability of surface water and shallow soil moisture. It does not directly measure ground waters. So,
[1:10:31] uh uh downscaling of that uh would would be possible, but uh they uh uh they estimate that based on the weather
[1:10:42] including precipitation and temperature, which are not uh which they use only uh uh large-scale uh uh measurements.
[1:10:52] measurements. Uh Uh The conversion of the drought index to the the drought index does not directly measure groundwater,
[1:11:03] uh but areas of drought are often places where cities or farms, especially farms, uh will extract groundwater to continue
[1:11:12] their uh farming operations. So, it's it's not the same thing. It's a a different type of measurement, but they
[1:11:20] are related. Great. Thank you. Uh question two is what happens during a storm if OPERA has difficulty due to distance to capture
[1:11:32] data? data? So, the OPERA uh surface water and disturbance products uh that use the optical harmonized Landsat Sentinel 2
[1:11:44] um um inputs uh will be blocked by cloud cover, and they will not have any measurement for the dates and pixels
[1:11:53] where there's cloud cover. The OPERA products based on SAR images, including the Sentinel 1 and soon NISAR SAR
[1:12:02] images are not affected by clouds, and they have measurements for every pass. Great. Great. Great. Great. Open and safe, please. Open and
[1:12:13] Uh question three, can we apply OPERA DISP anywhere? For example, the Middle East. So, NASA only has funding to process the
[1:12:24] displacement products for North America, uh but the software that OPERA uses is is fully open. So, people could use the
[1:12:33] same software to process other areas. Thank you. Question four is I want to process Sentinel 1 data into
[1:12:43] displacement for small area of interest in different region outside North America. Since OPERA DISP is limited geographically, how difficult would it
[1:12:53] be to build a similar workflow? As I mentioned, the Opera software is is available. It's open source and on a
[1:13:02] GitHub. Uh processing a small area should be relatively easy. Uh the main time series program is a is
[1:13:09] a program called dolphin. And it can be used with uh Sentinel-1 uh or or other SAR data
[1:13:20] uh to uh analyze the time series and using the same algorithm that uh is used by Opera.
[1:13:29] Opera. The Opera system does have a a sophisticated uh uh uh workflow to enable continental-scale processing, but you don't need that for
[1:13:39] processing a small area. Mhm. Mhm. Thank you. Uh question five, if we generate S-pass in SAR time series for a region using
[1:13:51] tools like Pi, uh GMT SAR, Mint Pi, or uh LiCS uh S-pass, how can we distinguish groundwater-driven
[1:14:02] deformation from other processes like oil and gas extraction, tectonics, earthquakes, or snow loading? How should we handle uh intercomparison and
[1:14:13] validation, and how do Opera products ensure consistency between C-band Sentinel-1 and L-band and NISAR for long-term monitoring?
[1:14:24] So, the uh the full separation of different geophysical and and groundwater effects is is beyond the scope of this training, but the time
[1:14:34] series data that's provided by the Opera displacement product is very helpful for distinguishing different uh effects within the Earth.
[1:14:46] Uh the groundwater extraction in in most places is typically uh seasonal, uh more in in the dry seasons
[1:14:56] and and less in the wet seasons. So, if you see uh a seasonal variation uh in the
[1:15:04] displacements, that's a uh strong clue that the displacement is due to groundwater and not uh tectonic effects.
[1:15:14] two two Um the second part of the question is about the uh how do OPERA products ensure consistency?
[1:15:22] Uh, the OPERA displacement products are processed separately for each uh Sentinel-1 track or NISAR each NISAR track. There is no additional
[1:15:33] processing to ensure consistency between the tracks. Uh, but the future OPERA vertical land motion motion uh uh products that will will have a uh
[1:15:46] additional processing to make to combine different Sentinel-1 displacement tracks ascending and descending and uh there and and with uh calibration with a local
[1:16:00] uh GNSS or or GPS data to make a consistent map of the uh vertical land vertical and horizontal land motion.
[1:16:14] Question six is for the Python demonstration, what is the velocity accuracy of this result? Say 5 mm per
[1:16:21] year. year. Yes, the uh the uh OPERA products have a uh uh uh requirement to have an accuracy of 5
[1:16:32] mm per year and that has been validated uh for places where the data has high quality. quality. Uh, there are some areas where the
[1:16:42] InSAR coherence is low due to farm plowing fields or flooding or or dense vegetation that is incoherent in in
[1:16:54] Sentinel-1 C-band data and those are marked as unreliable in the in the recommended mask that's included with
[1:17:00] the products and there's no useful velocity measurement in those areas. Uh question seven, for the Python demonstration are subsidence and
[1:17:14] depletion and equal? Uh there's a >> [clears throat] >> there's a quite complex uh uh relationship between the volume of
[1:17:24] groundwater extracted and the amount of surface surface subsidence. This is determined by the characteristics of the groundwater
[1:17:32] reservoir reservoir which varies greatly in different places even within the same sedimentary basin uh and the situation could be especially
[1:17:42] complex in places where there is groundwater reservoirs at different depths. depths. They are not equal um but they're closely related but and
[1:17:53] require some advanced um hydrological modeling of the of the groundwater reservoir to to better understand what the uh
[1:18:05] uh uh the reservoir characteristics and response are. Thank you. Question eight is I'm seeing some missing monthly uh data while
[1:18:19] working with the ASF data. What is the reason for this? Uh the Opera products are only available
[1:18:26] when the source data was acquired. Uh the various satellites especially Sentinel-1 sometimes miss a a acquisitions or or
[1:18:37] change their um change their acquisition plans. Uh the Sentinel-1 uh constellation has had uh uh some changes over time.
[1:18:52] Uh initially, they had just one satellite, the Sentinel-1A. Then, they added Sentinel-1B. Uh but, then the Sentinel-1B satellite
[1:19:02] uh uh stopped working in uh December 2021. So, then they were back to having only one satellite until
[1:19:11] uh uh 2025 [clears throat] when they got Sentinel-1C in operation. And they they just uh uh uh I think it earlier this month uh
[1:19:23] declared Sentinel-1D uh to be operational. So, they're now back to full uh operational strength with two Sentinel-1 satellites. But, during this
[1:19:35] especially during the time interval where there was only one Sentinel-1 satellite, satellite, uh they had to reduce their data
[1:19:41] coverage because if they had less uh half the the the acquisition uh uh capacity. And and if they didn't acquire
[1:19:50] the data, then Opera couldn't has no no data point. Right. Thank you, Eric. Uh question nine is when we downloaded the DIS files,
[1:20:02] what is the best way to assign the reference based on a point or border of the bounding box? How is a reference
[1:20:09] point selected for measurement of displacement? Is there any specific point we should select? So, you want to choose a reference point
[1:20:19] in a place that you know or or have good reason to believe that the ground surface is not moving or stable.
[1:20:27] Uh for groundwater studies, you typically want to have a point that's outside of the sedimentary basin. Uh
[1:20:35] Uh uh nearby, but not in the not likely to be affected by the subsidence. subsidence. Uh and the reference point also needs to
[1:20:44] be coherent in all the dates of the InSAR time series. So, for the Sentinel-1 uh displacement products, you
[1:20:52] can't choose a point in an area where there's dense vegetation uh that will not have a good measurement.
[1:21:00] And being coherent. So, next question is question 10. What's the difference between uh line of sight velocity, deformation along slope,
[1:21:12] horizontal and vertical uh deformation, and how are they estimated using SAR? So, the [clears throat] fundamental measurement that we get from the InSAR
[1:21:24] uh is the line of sight velocity. The single a single line of sight velocity from one track of data is not
[1:21:32] sufficient to be able to separate horizontal and vertical displacements. displacements. Uh Uh there are are ways to combine uh two or
[1:21:42] more line of sight uh displacements to estimate what component of the displacement for each point is vertical
[1:21:51] and what part uh what part is horizontal. horizontal. Uh this is what the OPERA vertical land motion uh processing will be doing in in
[1:22:00] the future. Uh the if you only have two line of sight directions like you get from the ascending and descending
[1:22:09] Sentinel-1, then you only the only uh horizontal component that could be estimated is the east-west direction. You can't
[1:22:18] uh estimate the north-south component. Question 11 is is there any atmospheric correction applied to the level 3 or raw
[1:22:31] results when analyzing the displacement time series? Should we apply corrections like ionosphere delay, solid earth tides, etc.?
[1:22:41] So, the Opera [clears throat] displacement products the the the raw products that you get with from the time series files, they do
[1:22:51] not have the atmospheric corrections applied. applied. But, they do have extra layers in the in the file that include the ionospheric
[1:23:01] delay and and solid earth tide estimation. estimation. The [clears throat] these effects are really quite small for
[1:23:09] the C-band Sentinel-1 data. So, for most purposes, this is doing that those two corrections are not necessary.
[1:23:18] necessary. As [clears throat] I mentioned briefly, the Opera product is providing a separate tropospheric delay delay estimation
[1:23:28] estimation that can be used to estimate and apply a tropospheric delay correction. And these are much much larger than the ionosphere
[1:23:36] or solid earth tide corrections. But, require some a little bit of extra work to to to add to your
[1:23:47] analysis but not covered here. Just to make a point that the simple file that you have in your exercise will
[1:23:59] show all different layers that includes what Dr. Fielding just mentioned. And question 12, in the displacement portal, there are many pixels over a
[1:24:12] water body. Why why were the pixels not removed by the water mask? The ASF displacement portal does
[1:24:22] include a water mask and and a mask for areas of low inside coherence. There should not be pixels over a water
[1:24:36] body unless it unless that water body was uh uh dried up for some reason. Uh the Tulare Lake uh in in the Central
[1:24:46] Valley of California is typically dry most of the time, but it it did get water in it during the
[1:24:54] very heavy rainfall of the uh winter of 2023. Uh so in that area we get a we had we
[1:25:05] could see that there was uh measurements in the time interval before 2023 and then during 2023 when there was a water
[1:25:14] there, there's no measurements. Question 13: In the time series that you showed, does each point represent deformation with respect to the
[1:25:27] reference data or to the data immediately before? If we have deformation in time times T1, T2, T3,
[1:25:37] the shown deformation in T3 is deformation with reference to T2 or T1, assuming T1 is a reference date.
[1:25:45] >> [snorts] >> Uh the time series is with reference to the reference date. Uh so when I
[1:25:53] the upper products are processed in these mini stacks, so there is a separate reference date for each mini
[1:26:00] stack. stack. Uh but the um um the Jupiter notebook that I had uh ties together the reference dates for
[1:26:10] each mini stack so that the whole time series is relative to the uh reference date of the first uh, mini
[1:26:17] stack. That's great. And if you again look at the uh, supplemental uh, document in in today's exercise, you
[1:26:29] will see that the file name convention is explained in there. Um, and then question 14, when analyzing
[1:26:38] displacement time series data, should we use unfiltered displacement or short wave displacement? Uh, for almost every uh,
[1:26:49] analysis, you want to use the unfiltered displacement. The short wavelength displacement is just a a visualization tool that uh, makes it easy to to
[1:27:01] to show uh, the displacement over a large area without worrying about local reference points. Uh, and it's not really
[1:27:13] uh, usable for detailed analysis. Next question 15, is the displacement time series comparable with SBAS derived displacement time series?
[1:27:27] Yes, it's it should be uh, comparable. Uh, Uh, the OPERA uh, time series analysis uses uh, a more
[1:27:37] uh, sophisticated um, what we call uh, persistent scatterer and and uh, uh, distributed scatter analysis to get uh,
[1:27:49] higher quality measurements. Uh, but the fundamental result should be similar to SBAS uh, uh, for for most places.
[1:28:04] So, the next question also is like what algorithms algorithms what algorithm uses OPERA to create the time series PSI or Sbas.
[1:28:15] The opera algorithm is what we call um um it's uh phase linking. It's called phase linking. It actually uses both uh
[1:28:30] persistent scatterer PSI uh InSAR and uh distributed scatterer InSAR. InSAR. Uh so, it's kind of a a combination of
[1:28:41] PSI and Sbas. Uh Uh and the the two measurements are combined into each uh 30 m by 30 m
[1:28:51] pixel. Um next question is I received this message time series service error no opera S1 burst frame IDs were found
[1:29:05] over the given AOI and the point is given here. What should I do? Um Um this is 29 e longitude
[1:29:16] uh uh which one is Yeah, [snorts] this this is outside of North America. There's not going to be
[1:29:22] any opera data outside of North America. I think it's not in North America. So, uh question 18. Are the velocity maps an
[1:29:32] average or total for the years? Uh the calculation that I showed in the notebook is uh the average over the time
[1:29:42] interval. So, I showed uh two different uh calculations. One was the average velocity from 2019 to 2022.
[1:29:53] Uh the dry years. And the other was the average velocity from uh 2022 to 2020 4, which was the uh wet years. So, those
[1:30:06] were the average velocities over those uh two time intervals. Uh you can't it you can do other types of analysis.
[1:30:15] That's what the the full time series is available for other types of estimation. I also have showed some maps that were
[1:30:24] the the total or cumulative displacement. Question 19, is the velocity map still in line of sight direction or does the
[1:30:37] script download both directions and decompose the vertical element? Uh this script is the analysis that I showed in the notebook is still in the
[1:30:49] line of sight direction. I only have it only used one track of the opera displacement products and that's
[1:30:59] just one line of sight. There's no decomposition. Question 20 is what should be the minimum time window to measure surface
[1:31:11] displacement for groundwater applications? applications? Uh well, that's going to the the minimum time interval is going to depend on how
[1:31:19] fast the groundwater groundwater uh displacements are happening in in a given area. In the Central Valley, the
[1:31:30] uh uh the displacements can be up to 30 cm per year. So, you can get a good measurement
[1:31:37] in just a few months. Other places, the displacements are much slower, maybe only a centimeter a year. And you might need to have
[1:31:49] two or three years of of data to get a good estimate of what the the rates are if if the rates are quite
[1:31:58] slow. Question 21, why are these p- Why are there positive subsidence points? points? Yes, that's quite that's quite a
[1:32:10] surprising effect there in the 2022 to 2024 2024 time interval. Because this was a time interval where
[1:32:22] the the California received a huge amount of rainfall. rainfall. The groundwater actually was recharged. And the surface rebounded due to the the
[1:32:37] very large amount of rainfall during those two two years. Okay. Question 22, while exploring the ASF portal in my region, I'm seeing
[1:32:52] localized pockets of subsidence a few hundred meters per yards across. Is it reasonable to interpret this as subsidence? What sort
[1:33:01] of factors should we be wary of for misinterpreting at fine scales? Uh Uh the displacement products are
[1:33:16] indicating that there's some type of ground motion. It's It's probably a subsidence, but it could be some other effect like such as
[1:33:26] landslides moving or uh uh In [clears throat] some in California, we have earthquakes also in Nevada and other places.
[1:33:38] Uh Uh but but most the the measurements should be uh useful. useful. Uh it's it's just a measurement of the
[1:33:49] surface displacement. It doesn't tell you neces- the cause of that surface displacement. So, you do have to do some
[1:33:56] interpretation as to what what actually is the causing the displacement. And in other places there's some uh
[1:34:10] uh uh displacement where landfills or or former landfills that the the material keeps compacting with time and
[1:34:20] uh you can see that on the uh on the opera products in in uh urban areas where there's large landfills that
[1:34:27] are are been been they've been covered over with because they stopped using them, but the the material keeps compacting with time.
[1:34:37] It's interesting. Uh question 23, land displacement can be caused by multiple factors such as erosion. Do we separate them from ground
[1:34:48] water subsidence in the disk data set? So land uh uh land surface modification by uh erosion uh or other uh you know construction
[1:35:02] that that that changes the land surface uh in a major way will become incoherent in the InSAR measurements. And therefore
[1:35:12] it'll it won't have a valid measurement. So the InSAR measurements of in the opera displacement products are only in places
[1:35:22] where the surface is uh not being uh changed significantly over time. And major erosion you can't measure
[1:35:33] erosion directly with the InSAR. Thank you. Question 24, could you provide key references, documentations that could guide us to produce opera
[1:35:47] uh land displacement or vertical land motion etc. output data sets for study area located in Africa, for example.
[1:35:57] Uh yeah, the uh the main uh opera opera algorithm uh is uh all the software is online and at GitHub
[1:36:10] uh uh uh the main There is a paper that's coming out uh shortly uh on the whole opera algorithm and and
[1:36:20] methodology. It's not yet published. Uh so, I can't give you that link yet. Okay. Question 25, is there um a way to
[1:36:34] enter the coordinates of my point of interest directly into the opera disp search bar? Uh the displacement portal doesn't have
[1:36:44] that capability at this time. In NASA Earth data, you can do that. You can just um click on a point and then
[1:36:53] modify the lat/lon exactly the way you like. like. Uh yes, you can you can you can search
[1:36:59] for the opera uh displacement products, but not in the displacement portal. >> Not in the portal, yes. Thank you.
[1:37:07] Uh question 26, how can opera disp time series be quantitatively integrated with grace and chill dust data to improve
[1:37:16] groundwater storage estimation considering their different spatial and physical sensitivities? Uh this is uh important uh uh question, uh but it's really uh beyond
[1:37:31] the scope of this this training. Uh that you have to consider the whole uh response of the reservoirs in the areas
[1:37:41] and the uh the spatial resolution is a is a major uh effect that uh uh requires some
[1:37:53] um um computer uh modeling or or or uh uh data assimilation techniques uh beyond the scope of this training uh but people
[1:38:06] have work have done this work and there's a number of papers on uh combining InSAR and uh
[1:38:16] uh GRACE GRACE and GRACE follow-on data with uh InSAR to get a better estimation of what mhm
[1:38:25] mhm the the local variations in the ground water extraction. Uh question 27 is since OPERA Disp uses
[1:38:36] InSAR radar from satellites, does the radar beam actually penetrate underground and see the water table directly? directly? No, the the radar beam does not uh see
[1:38:49] the water table. It uh penetrates into the ground surface at at most a few centimeters. Question 28 when OPERA data is
[1:39:02] processed, are there different reference points for the North America region or is there a unique point? Can we know the
[1:39:09] location of such point? Uh the OPERA displacement products are are not processed to any um um global
[1:39:21] global uh reference point for all of North America and the that's what the uh ver- the future vertical land motion
[1:39:30] product will you be uh so each each track is basically each frame has its own uh local uh reference
[1:39:40] system and you need to uh uh provide your own reference points uh and when you do your analysis. There's no
[1:39:47] um um absolute uh reference points for the upper displacement products. Question 29, for InSAR, what are some
[1:40:00] best practices if studying groundwater related subsidence in a seismically active area? In addition to analyzing both ascending and descending data sets,
[1:40:11] do you have further recommendations? Um Um Yeah, well, earthquakes are are fault motions gradual fault motions are a
[1:40:25] a concern. Uh in most cases, the the the faults are are not in the middle of the groundwater basins. Uh but in in
[1:40:37] other places, they are. Um there's a an additional effect where many times the groundwater reservoirs are are actually
[1:40:48] actually uh uh um um have an edge right at the location of a fault. fault. And uh you may see that there's a bigger
[1:40:59] groundwater variation on one side of the fault than the other side of the fault. It doesn't mean that the fault itself is
[1:41:05] moving. It just means that the uh the the aquifer layers in the in the groundwater groundwater uh are
[1:41:14] of different thickness on the two sides of the fault. We've seen We saw that very clearly in the
[1:41:21] area of uh what's called the Santa Clara Valley Valley uh that includes San Jose in California. There's a few papers
[1:41:31] uh on that. Question 30, is InSAR measures displacement relative to a reference point, but no point is truly stable due
[1:41:44] to tectonic strain and other factors. In a basin with both regional tectonics and groundwater pumping, what the minimum
[1:41:52] temporal baseline is needed to separate these signals? Uh Uh >> [clears throat] >> Yes, the the InSAR measurements are are
[1:42:02] always relative to a reference point. Um in some cases, you may have a GPS station station uh or or GNSS station
[1:42:13] uh that you can use to get the full uh absolute uh three-dimensional uh displacement time series for that
[1:42:25] point and and use that as your stable reference for the InSAR. Uh Uh That's uh that's an effective way to try
[1:42:35] to separate the two signal different signals, uh but you would have to to do some your own analysis of the
[1:42:46] tectonic signal to see how it might be affecting the uh groundwater. Typically, they're they're on different spatial scales, so
[1:42:56] uh just by looking at the spatial um uh resolu- uh the spatial uh area uh it in the spatial pattern,
[1:43:12] uh you can separate different effects. By using a what when you have a local reference point, it's basically saying
[1:43:20] that that local reference point has zero displacement. So, if there is some kind of, you know, large-scale plate motion,
[1:43:28] uh that that plate motion has already been subtracted out because you set that you had that local reference point.
[1:43:40] So next question, um let's see if it's relevant. What if we want to do groundwater temporal changes as one of
[1:43:47] the environmental factor to demonstrate uh uh uh casual relation causal relationship to the lake geohazard. Which data set is
[1:43:56] the best available option? Grace has its own limitations. Uh Uh I'm not sure what they mean by the lake
[1:44:06] geohazard. Uh Right. >> But typically uh the InSAR is uh and or other uh just InSAR is going to give you the
[1:44:17] higher spatial resolution that you can more easily tie to local or or uh local effects. The Grace data
[1:44:27] is only going to give you a regional scale look at what's happening in a in a given area.
[1:44:35] Question 32 is if the area of selection is bigger than one frame, does the disk Jupiter script mosaic them and fix the
[1:44:44] phase jump in between? No, this uh Jupiter script only works with one frame. frame. In fact, you have to make sure that your
[1:44:55] uh uh area of interest uh fits within the frame boundary or it won't it'll it'll s- it'll stop running.
[1:45:07] Question 33 is won't pair up process Canada even by removing wintertime data. Is that a limitation in processing 6
[1:45:15] months of data every year? Uh Uh it was a decision that they made some years ago. Uh
[1:45:23] uh uh I I I know the exact reason, but they decided not to process uh the part of Canada out
[1:45:31] north of two more than 200 m 200 km from the border. Um Um that's just what they decided to do.
[1:45:41] Mostly because of the the snow cover issues. But so there is uh a snow cover issue in Alaska, and when
[1:45:49] you look at the displacement data in Alaska, you'll see that there's uh large gaps gaps in the time series uh during the winters
[1:45:58] when there's snow cover. Uh it is possible to do that kind of processing, but uh NASA the NASA funding
[1:46:05] wasn't sufficient to do that for for the large area of northern Canada. Thank you. Question 34, how can OPERA
[1:46:16] DISP data be used at the local scale to assess groundwater level variations linked to vegetation evapotranspiration, particularly in comparing water use
[1:46:26] between fast-growing and slow-growing forestry uh species? So the >> [clears throat] >> OPERA displacement products are are
[1:46:36] measured with the whatever temporal resolution uh is available from the Sentinel-1 data uh and in the future uh NISAR data.
[1:46:47] Sentinel-1 Sentinel-1 uh as I mentioned earlier uh had some of the time they've had two satellites, in which case they in some
[1:46:56] places they actually acquired data every 6 days, especially over the west coast of United States. Uh but in other places they acquired data
[1:47:09] only every 12 days. And uh NISAR will also be 12 days. So um the temporal resolution is determined by
[1:47:19] the input data. Um Um so you're not going to see uh variations at time intervals less than
[1:47:28] the the the data acquisition uh rate. We just have time for a couple of more questions and then we'll stop. We're
[1:47:44] almost at the end of the time. What's the cause of the positive effect affecting affecting around bodies of
[1:47:51] water in the ASF data? Yes, so the this is due to the way that they calculate the short wavelength uh filtered version
[1:47:59] of the displacements. Uh and to calculate a short wavelength displacement, you take a window uh that's about 25 km across, take the
[1:48:11] average of that window, and subtract it from the data. Uh and that means that the the center of the the subsidence bowl
[1:48:20] gets gets uh uh still has the subsidence, but then the areas next nearby end up having a
[1:48:28] an apparent uh uplift that's just due to the way the filter was calculated. Next question. When calculating the
[1:48:38] linear recurrence velocity of pixels, what is the improvement to accuracy of using a polynomial fitting instead at
[1:48:46] least over smaller area where computation time is not a major concern? Uh you can use uh higher order polynomial fitting, but
[1:48:56] then you may be um fitting uh noise in the data. There is a significant noise in each
[1:49:03] measurement. Uh this can be reduced if you do the tropospheric corrections that I mentioned earlier. Uh So, that's that's a
[1:49:16] you don't want to overfit and and stay um um fitting noise in the data. That's why we
[1:49:24] typically use averages over at least a few months. Yeah, the last question is it is commonly known that Mexico City is
[1:49:35] sinking due to the compression of the clay beneath it. In our exercise, this negative land displacement was
[1:49:41] surrounded by a ring of positive displacement. Why is this? Yeah, this is the same thing that I just
[1:49:49] described. It's due to the way the filter was applied. When you do the short wavelength filter, it shows up as positive around the edges
[1:49:59] and and the subsidence in the middle. If you look at the unfiltered displacements for Mexico City, you'll see that it there is
[1:50:08] no no uplift uplift around the edges. It's uh it's only subsidence in the inside the basin. Thank you so much
[1:50:22] Eric. Eric. We thank Dr. Eric Fielding for his presentation and answering all the questions questions today and he's sharing his expertise on
[1:50:33] this subject. So, thank you all for attending this webinar series. This is the last part of this
[1:50:41] series and we hope to see you in our future training. So, please stay updated with our set listserv. You'll get
[1:50:49] information about our upcoming trainings. Also, um um please um take a few minutes to complete the survey that you received so that we get
[1:51:01] feedback from you. Um and we want to thank our ARSET team for their help, our coordinator Natasha Johnson Griffin, our
[1:51:13] editor Maria Marapito, and other coordinators Brock Blevins, Calvin Hudson Odoy, Sherry Morris, and our editors Jonathan O'Brien and
[1:51:23] Sarah Caswell. Also, want to thank our instructional designer Susan Monti and my colleagues Shawn McCartney and Erica Portis for
[1:51:33] everybody's help. And once again, Dr. Fielding B, thank you for your help and time with this training. Um
[1:51:42] And it looks like it generated so many questions and people are really interested in this topic. So, hopefully
[1:51:49] through the exercise and through the Jupiter notebook, you can explore this data and then um as as we told you earlier, the homework
[1:51:59] is due on 15th of May. And And we hope to see you in our future training. Thank you all.
[1:52:08] Thank you and and you're welcome.
