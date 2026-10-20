# Working with Gap-Filled SIF Products Part 3/3

`https://www.youtube.com/watch?v=PU1PaHliBK8` · id 347 · 1:28:11 · module 53 — Solar Induced Fluorescence (SIF) Observations for Assessing Vegetation Changes Related to Floods, Drought, and Fire Impacts

[00:01] Hello everyone and welcome to the third and last session of this intermediate three-part ARST training titled solarinduced fluoresence observations
[00:10] for assessing vegetation changes related to floods, drought and fire impacts. I'm Dr. Erica Pist, a scientist at NASA's
[00:19] Jet Propulsion Laboratory and I'm also an instructor with the ARSET program. Today's session will be focused on how
[00:27] to work with gap fil products and it'll consist of a theoretical session and a demonstration. demonstration. Our invited expert is once again Jackie
[00:37] Ryan from NASA's Jet Propulsion Laboratory. So today is the last session of this three-part training and it's focused on
[00:50] how to work with gapfield sift products. There is a homework associated with this training and it is open as of today. You
[00:58] can access it through the training website. The due date is November 12th and we will be providing a certificate
[01:07] of completion to all of those participants who attended the live sessions, all three of the live sessions
[01:13] and complete the homework by the due date. The certificate of completion will be received or or you can expect to
[01:21] receive it in about three months. And this is a reminder of the prerequisites for this training which is
[01:32] the fundamentals of remote sensing as well as a CIF RET training that we did a couple of years ago. It was a combined
[01:41] SIF and LAR. So the prerequisite here is for you to review the SIF portion of that training.
[01:50] And here are the trainers for this session. I'm the ARST training coordinator for this webinar series. And
[01:57] we have an invited expert. Uh once again returning is Jackie uh Jackie Ryan. She is a data visualization developer at
[02:08] NASA's Jet Propulsion Laboratory and she will provide a um discussion about the gap filled products and then she will do
[02:19] a demo to show you how to access and visualize these products. How to ask questions. Please write your
[02:28] questions in the questions box which is located located um in the bottom right there are three points. There's a menu that will pop up.
[02:39] Select the first option which is Q&A and there you can write your question. Feel free to enter your questions during the
[02:48] presentation and we will try to respond all of the questions during the Q&A session after the um after this
[02:57] presentation. The remainder of the questions, if we don't get to answer all of the questions, uh we will answer them
[03:04] in the Q&A document. Uh so we compile all of the questions into a Q&A document and we will post that document on the
[03:12] training web page um in about a week. So let's get started with session three working with gapfield products. Our
[03:24] invited expert is once again Jackie Ryan from NASA's Jet Propulsion Laboratory. She'll be uh presenting the rest of this
[03:32] session. So um cover both the theoretical portion and a demonstration. Uh welcome once again uh Jackie great to
[03:40] have you back. Hello and welcome to the third part of this ars course on solar induced chlorophyll fluoresence. In this
[03:51] exercise we'll be discussing the use of gap filled sift products for vegetation analysis using the go data set created
[03:59] by a team out of the University of New Hampshire as an example. In particular, we'll investigate a case
[04:04] study involving the 2019 Midwestern floods and their impact on agriculture in the cornbt. Here's a brief overview of what we're
[04:14] going to go over today and the main objectives for what we hope you'll get out of the Jupyter Notebook code
[04:19] demonstration. demonstration. Before we dive into the code though, I'd like to provide you all with some context on SIFT measurements collected
[04:26] by other spacecraft. Thus far, we've been using OCO2 and OO3 exclusively in our exercises as a matter of course
[04:35] without really discussing data sources from other missions. The OO missions are not unique in collecting SIP. Though
[04:42] depending on the needs of your own analysis, you might find it useful to incorporate data from other sources. In
[04:49] fact, the primary point of our discussion today is to highlight some of the limitations of exclusively relying
[04:56] on the OCO2 and OCO3 observations that we've used in the first two parts. By using a gap filled product, we can
[05:03] obtain a broader spatial context for the impact of the flooding event in our case study. And you can see a satellite
[05:11] comparison view in the image on this slide. So the left side is 2018 and the right side is 2019.
[05:20] The floods that year in 2019 were extremely severe and caused the loss of three lives as well as significant
[05:29] damage to property across about a dozen states. states. In the notebook, we'll just be focusing on the impacts to terrestrial plants
[05:38] rather than any of the economic or social impacts. Um, and in specific, we'll be focusing mostly on crop land.
[05:46] The basis for this analysis comes from the Yin at Alia 2020 paper and we'll be discussing their results a little later.
[05:55] Finally, as an extra point of comparison, we'll look at a bonus case study examining the impacts of the 2012
[06:02] Midwestern drought on crop land in the cornbt. cornbt. Before we dive into discussing other sources of SIFT data, I want to review
[06:12] why we're even using CIF for vegetation analysis in the first place. If you're familiar with working with
[06:18] multisspectral remote sensing data for this type of work, then you might be aware that there are numerous types of
[06:24] vegetation indices that can be produced from satellite data. Some examples of these are the normalized difference vegetation index NDVI, the enhanced
[06:35] vegetation index, EVI, near infrared reflectance from vegetation or nerve and the chlorophyll corotenoid index or CCI. All of these indices are produced by
[06:47] taking a ratio of observed spectral signals as a heristic for photosynthesis or at least for measuring the vegetation
[06:56] health in the environment. But the most direct measurement we're actually interested in is gross primary production, GPP, which is a measure of
[07:05] carbon fixation performed by an ecosystem. ecosystem. While GPP is the best possible measurement we could look at in
[07:12] vegetation analysis, at least from a remote sensing perspective, very challenging to observe from space. As an aside, there are some SAR based
[07:21] measurements that can measure biomass like the recently launched ISIS spacecraft itself called biomass. But this approach is relatively new and
[07:32] data coverage is limited. With all that being said, then because of the challenges of using GPP directly,
[07:40] it is often necessary for us to use alternative measurements. The plot on this slide compares some of the metrics
[07:47] I've mentioned against GPP to show how well they are correlated. This data is for boreal forest in
[07:54] northern Canada. Though the correlation will vary somewhat depending on the biome type used in your own analysis or
[08:01] in the case study we'll look at today. For example, in this case, CCI is almost as correlated with GPP as CIF is, but
[08:12] CCI is particularly well suited to studies of gymnosperm dominated biomes like this boreal forest due to the
[08:19] phenological changes in reflectance in the needles of evergreen trees. In other words, in the deciduous forest, evergreen broadleaf forest or in crop
[08:30] land, we might not expect to see the same correlation between CCI and GPP. So, I want to take a moment to look a
[08:39] little more deeply at this plot. Uh, starting at the top, we can see that if is the best correlated variable with GPP
[08:48] with an R squar value of 0.92. The second best, as I mentioned, is CCI with an R squar of 0.9.
[08:58] However, I also want to take a moment to point out NDVI with its R squared value of 0.79.
[09:07] You may already be familiar with NDVI from your own research or analysis since it's easy to measure and therefore it's
[09:15] commonly used across a wide variety of applications. applications. In the case of our boreal forest here, even though it has good overall
[09:25] agreement with GPP, it does exhibit a hysteresus effect during winter. In other words, GPP tails off down to
[09:34] zero in late October or early November, but NDVI remains high into December. Since NVI is mainly measuring a plant's
[09:46] coloration, it will tend to be a lagging indicator of vegetation health, short-term stresses, like those caused by floods, drought, or extreme heat
[09:55] might not show up in NDVI until a couple weeks after photosynthesis has stopped. If on the other hand, is more dynamic,
[10:03] meaning we're more likely to see rises and falls in activity and response to stresses even within a single day. If
[10:10] you recall Nick's explanation in part one, this is because SIF signal is tied to the photochemical quenching reaction,
[10:19] which in turn tells us how open the photosystem reaction centers are within plants across an ecosystem. So hopefully you're convinced now that
[10:29] CIF is an excellent metric for studying vegetation health and stress response. DIP is a relatively new type of
[10:36] measurement for spacecraft with GOE 2 on METOP A back in 2006 being the earliest instrument capable of picking up the
[10:44] spectral signal directly. This wasn't an original use case for Gome and the data set itself was derived
[10:50] later. The first dedicated SIFT data sets from space-based remote sensing were actually developed in 2011 by Joanna Joiner, Luis Guanter, Christian
[11:00] Frankenberg and others using Jax as GOAT satellite. Oio2 followed in 2014 and improved upon the existing CIF record.
[11:10] More recently, we now have Tropomi on board issa's Sentinel 5P spacecraft which launched in 2018. GOAT 2 launching in 2018 as well, OCO3
[11:22] which launched in 2019 as we've previously discussed and most recently the Chinese Academy of Space Technologies Gong satellite which
[11:31] launched in 2022. All of these satellites have publicly available data with the exception of Gong. And sometimes your analysis may be
[11:41] improved by combining or regridding data from multiple satellites into a single product. So it's useful to keep these in
[11:48] mind to know all the tools you have available when looking at CIF. So the first other satellite that I want
[11:58] to talk about is GOAT. As I mentioned, it's been around the longest of all the data sets, but it suffers from low data
[12:06] availability in a spatial sense. As you can see from the plot here, which I've taken from the Dodie at all paper that
[12:13] we looked at in part one. So goat here is up at the top and then we see grided
[12:20] raers of OO2 and O3 very similar to the plots that we created in part one. Like many other earth observing satellites
[12:29] such as OO2, GOAT has a sun-synchronous orbit. So we'll see a point at a given latitude at
[12:37] the same solar time every single orbit. While GOAT improved upon the resolution of Gome, it's still only about 0.1°,
[12:47] though it's best used for ecosystem level analysis. That might be difficult to tell from the figure on this slide
[12:54] because the OCO data has been gritted to a resolution of 0.5° alongside the GOAT data. In this case,
[13:04] you can find more information on the data from the two papers that I've linked the DOIs for. Um, and you can
[13:12] also find the data itself in the data set link that I've included on this slide. slide. Proposif is another great resource to
[13:21] use in addition to OCO2 and 3 data. Most of the research papers that we've referenced in this course make use of
[13:28] tropomy data to augment other sources of CIF and for good reason. As you can see from the plot on this slide, the spatial
[13:37] coverage is quite substantial and retrievals are available at a subd cadence. Although we aren't covering its usage in this course, you're encouraged
[13:46] to take a look at the troposif data set on your own. One thing to note is that
[13:50] there's no direct comparison between OO2 and 3 757 nanometer SIF and the SIF from Tropomi. So it's best for you to compare
[14:01] only the 740 nanometer SIF data between the two instruments. And again, as with GOAT, I've linked a
[14:09] paper describing the theoretical basis for the SIF retrievalss from Tropomi as well as a DOI link to the data set
[14:17] itself. Let's turn back now to the OC3 grided raster plot that we made in the first notebook exercise.
[14:27] When you look at this plot, you can tell that for June 2020 and in general for any given month, there's relatively
[14:34] limited spatial coverage. Although the ISS orbits every 90 or so minutes, the low swath width of the instrument means
[14:42] that there's going to be gaps in coverage for some months. Additionally, because of the inclination of the ISS's orbit, there's a seasonal
[14:51] bias as to which areas get more daytime coverage during certain times of year. For the Konis, this means that we get a
[14:59] lot of coverage during May and June. You may have noticed this when looking at what dates SAM observations are
[15:06] available for during the second exercise. Another challenge that we encounter with any of the products that I've just mentioned is that their
[15:15] observational record only goes back about a decade. For OC2, we have 11 years of data and at the most there's
[15:23] Gome which stretches back to 2007, but even that is not very long. For OC3, we have just 6 years of data and even then
[15:32] instrument anomalies and time spent powered off means that there are significant gaps where no data was being
[15:37] acquired. With all these limitations in data availability for spacecraft observations, it begs the question, can we do better? Is there a technique that
[15:47] we could use to improve the coverage of this data and estimate values that we have not observed directly using
[15:53] indirect measurements from other satellites? And as you may have guessed already, the answer is that we can use a
[16:00] technique called gap filling or data fusion. There are many approaches to doing this, but the basic premise is
[16:07] that we need to train a model using a datadriven approach to predict the value of a measurement. In our case, SIF. The
[16:14] value we are predicting is called the label data. And the ancillary measurements we use to aid in predicting
[16:20] the value are called predictor variables. These can include land cover classification, surface reflectance, or meteorological data like vapor
[16:31] pressure deficit, BPD, air temperature, and downwelling shortwave radiation or DSR. That last one, DSR, is similar to
[16:41] photosynthetically active radiation or PAR, and that it quantifies how much solar energy a plant can receive at a
[16:48] given time. So for an example of how we could do gap filling, we could take modus data which
[16:56] has a resolution of up to 500 meters per pixel and gives us all of the predictor variables that we need and we can
[17:03] associate those predictors with the observed OC2 or OC3 data and use all of that to train a model. The model can
[17:11] then tell us what we expect to be in places where we have no direct observations. observations. The modeling technique that you use for
[17:19] this gap filling is a matter of debate in research, but the product we will be using in this exercise is based on a
[17:27] cubis regression tree, which is a datadriven approach rather than machine learning. With that being said, there are definitely teams using machine
[17:35] learning to do gap filling with SIFT data, such as the works discussed in Juni's presentation in part two.
[17:45] Now let's talk about GOIFF the data set that will be the star of the show for our code demonstration today. GOIF was
[17:53] originally developed by Shing Lee and Jing Fun Xiao at the University of New Hampshire in 2019 by fusing OCO2 data
[18:01] with modus. What they ended up with is a spatially contiguous global product at 0.05° 05° resolution or about 6 km per
[18:11] pixel and 8th day temporal resolution. Although there are also monthly and annual products. The reason we can only get 8day
[18:22] resolution out of the data is because modus is only able to produce a BRDF or birectional reflectance distribution
[18:30] function every 8 days. And that's a required ingredient for determining the surface reflectance. Reflectance for this purpose requires taking many
[18:40] observations of the atmosphere with and without clouds. And so, as you might imagine, that can require several days
[18:48] of observations on average. Remember how I mentioned that the observational record of OC2 only goes back to 2014? An advantage of using
[18:59] Modus for this purpose is that we can now estimate CIF all the way back to when Terra and Aqua were first launched
[19:06] in 2000 because of the observational record of modus. If you'd like to read more about the derivation of GOF, you can find the
[19:15] paper in the DOI on this slide. I've also included a direct link to the data store on the UNH website, although we'll
[19:22] go into detail about downloading the products in the code demonstration. For this next slide, I want to talk
[19:30] briefly about some other gap filled products. And Junj has already gone over this research, so I'll only touch on it
[19:36] briefly here. But there are other products that you can consider using in your own analysis. None of these have the easy data
[19:44] availability that you would get with GOSF though, so you may need to reproduce their technique rather than
[19:50] going to a website and downloading data. Da Ying Jang and her team developed a DAL SIF product 0.5 degree resolution
[20:00] using climate model data for predictor variables. If you recall, I mentioned that OIO3 will observe the same location
[20:06] at different times of day due to its orbit. And this makes it a great resource for developing dial models or
[20:13] models that can predict SIF at hourly cadence throughout the day. This can be used to demonstrate PL's response to
[20:19] heat stress in the afternoon. In many places where it gets really hot, like tropical rainforests, the plants will
[20:26] largely close up their leaves to preserve water and engage in non-photochemical quenching, in other words, heat production to avoid drying
[20:35] out despite having plenty of sunlight. This can be observed as an afternoon depression or drop in sift values. The
[20:41] figure I've included on this slide shows that behavior in action. And you can see that in the final time bin for a given
[20:50] day over the Amazon rainforest, as the researchers pointed out in this study, there's a noticeable drop in CIF
[20:58] about equal to what's seen in the morning and an increase in water use efficiency. Another product to look at is called Eco
[21:10] OC3. OC3. The O3 science team is currently working on a product that combines Ecostess land surface temperature data with OO3 SAM
[21:19] mode measurements as a means to quantify water use efficiency. And water use efficiency, as was mentioned in this other study as
[21:29] well, is a measure of how efficiently an ecosystem uses water to fix carbon. So this figure shows an example of an
[21:38] eco product. This is not a gap filled product per se, but it's another example of data fusion in action.
[21:47] Lastly, GEOSIF, which was also covered by Gingier, is a gap filled product produced by combining the Korean GK2A
[21:57] weather satellite for predictor variables to provide hourly data or estimating CIF in East Asia. All right, so now we want to dive into
[22:10] our case study for today and consider how the researchers did their own vegetation analysis. The scientists of course use SIFT to
[22:17] investigate impact, but they also considered terrestrial water storage EWS from the Grace follow-on mission, atmospheric CO2 concentrations from the
[22:28] ACT America airborne campaign as well as from OCO2 itself and uh GPP data derived from those measurements. The reason for
[22:37] using CO2 concentrations in this context is that it's another way to gain insight into GPP behavior. Since if CO2 is
[22:45] elevated over a region of crop land compared to normal, then it indicates that plants are fixing less carbon than
[22:52] we would expect. Unfortunately, there were thick clouds over most of the cornbelt during this period, which somewhat limited the data availability
[23:00] during June and July, but the paper was still able to demonstrate early season growing conditions over crop land
[23:07] exhibited much lower than normal GP, as can be seen in the second plot on this slide. slide. This can also partly be explained by
[23:16] delay in planting which is why we see an uptick in GPP later in the season. In fact, the crops were able to take
[23:23] advantage of the additional water in the soil later in the season. In the top plot of this slide, you can see that
[23:30] TWWs was two standard deviations above the mean in the flood gear. Interestingly, we can also notice from
[23:37] the middle plot that non-crop land areas were less affected by the flooding. Natural biomes are usually better
[23:48] adapted to periodic flooding due to the existing trees and root structures that help hold the soil in place.
[23:56] So, let's turn over now to the SIF analysis that the researchers did in their study. In their case, they used
[24:02] tropomi cy at 740 nm spatially aggregated to a county level and took the difference between 2019 in 2018 for
[24:11] each month over the growing season. Reinforcing the findings that we looked at in the previous slide, you can see
[24:18] that the delayed planting date in this last plot over here up to 5 weeks in the case of Illinois
[24:26] meant that the early growing season exhibited much lower than normal cy. So if we look at the June data, we can see
[24:35] that the difference over here shows lower than normal SIF. On the other hand, the late season had
[24:43] higher than average sif over here. One question to ask is, do you expect to see similar results in the goif data between
[24:51] 2018 and 2019? This might seem obvious, but my hope is that it will build your confidence about
[24:58] using gap filled products in this context. context. Another question to keep in mind is, do you think that the later peak balanced
[25:06] out the earlier dip in primary production? In other words, what might the overall effect on yield be in this
[25:14] particular year? And to answer that last question, we can just pull up agriculture statistics curated by the USDA and see that corn
[25:25] yields in the US in 2019 were about 5% lower than in 2018. When we're looking at this data, how is the SIF correlated
[25:34] with crop yields? As Junj showed in her presentation, the most thorough way of comparing the two is by incorporating
[25:40] climatology to build a rigorous estimate. In an oversimplified sense, though, we can consider that the total yield is tied to integrating under the
[25:51] curve of CIF or GPP. In other words, by summing up the values that we see in those metrics throughout the season.
[25:59] This mainly works for annuals because the harvested crop completes its entire life cycle within a single season. as
[26:05] opposed to perennial crops whose yield can be impacted by previous seasons. Looking at this yield chart, you'll also
[26:13] notice there's a conspicuous dip in corn yields in 2012. This motivates our bonus case study where we'll be looking at the
[26:20] impacts of drought on crop production in that year. 2012 was a severely hot and dry year in the corn belt, and there was
[26:28] no extra water storage to mitigate the effects like there was in 2019. Comparing 2012 and 2013, we can see that
[26:36] there was a 22% drop in yield between the years. This is made slightly worse by the fact that there's an upward slope
[26:44] to the yield graph due to improvements in agricultural practices, crop protection, and better hybrids that get released year-over-year.
[26:53] So, that is the upward trend line that I'm referring to here. That concludes the presentation portion of this part and now let's turn over to
[27:04] the code demonstration. Now that I've explained the context of what GOSF is and why it's useful for our
[27:14] analysis, I'd like to turn over now to the code demonstration. Today we'll be looking at the third
[27:20] notebook, GOIF.NB. And as in the previous exercises, you'll first want to load up the Jupyter Hub environment using the setup script I
[27:29] provided. So I'll jump out of this presentation now. And you can see I already have a terminal window open.
[27:43] So I'll be using this terminal window to open up my Jupiter environment as we did with the previous examples. First, I'll
[27:51] want to navigate over to where I have the code. This may be different depending on where you cloned the repository on your own
[28:02] computer. computer. And then, as before, I'll run the setup script. Since I'm on a Mac, I'll use
[28:08] setup.sh. If you're on Windows, you'll want to run the setup.ps1 PowerShell script. Okay. Okay. And I see that now my server is running.
[28:24] And I'll pull down my browser window so that you can view the Jupiter environment that I have
[28:32] open. I'll now want to navigate over to the third notebook. I'm just closing the other tab so that we can focus on the
[28:46] task that we're going to be discussing today. So you should now see working with GOIF data in your Jupyter environment on your
[28:56] screen. screen. The first cell here that we're going to be running is just importing libraries as we've done in the previous exercises.
[29:05] So I'll run that cell now. Okay, with that out of the way, um the first portion of the exercise is just
[29:17] going to focus on downloading GOIFF data itself. [snorts] And to reiterate what was discussed during the presentation,
[29:25] this data set was produced by Dr. Jingfong Shao and Shing Lee at University of New Hampshire and they
[29:33] took OC2 data and produced a model that's able to estimate it at 0.05 degree spatial resolution or about 6 km
[29:43] per pixel on an 8day monthly or annual cadence. cadence. And they used a number of other predictors to estimate these values in a
[29:55] gap-filled manner. And this is the gap filled product that we were talking about from before. I've already written a helper function
[30:03] called download and unpack go which will make it easy for us to download data from the UNH data store.
[30:13] Before we go ahead and download the data though I want to pull up that site so that you can see where this is coming
[30:19] from. from. So here's the UNH website containing the GOSIF data set. And this is the cover page for it. And if I scroll down here,
[30:32] you can see down at the bottom of this web page, it says download GOSIF. And if we click on that link, that will take us
[30:40] to a data store like this. You can see that there's three different time cadences for our data. If I click on
[30:48] 8day, 8day, you're able to see a number of TIFF files that have been packed using gzip. And
[30:57] And these TIFF files have dates associated with them. There's a year and a day of year. year. And these estimates go from the year
[31:08] 2000 all the way through to the end of 2024. 2024. So there's a wealth of information here
[31:15] for us to work with. You can see that each individual file is about 10 megabytes. Okay. So let's return now to the
[31:27] notebook. The example file that I've selected for us to work with is from June of 2020. And as we've been doing in other
[31:42] exercises, I'm going to store it in the data directory within our notebook environment. We're going to create a new
[31:48] directory called go for storing this data. If you provide a day of year, you will get the 8day data. Since I'm providing a
[32:01] year and a month, the function will know that I'm asking for monthly data. And if I provide only a year, the function will
[32:09] download the annual file from the data store. Okay. So you can see that our progress bar shows that we just downloaded the
[32:20] file. It was 9.3 megabytes and it unpacked the gzip to turn it into a geotiff file. If I go into my data
[32:30] directory, you can see that there was a new goif directory that was just created. created. And we have our TIFF file right here.
[32:40] Now, Now, the default Jupyter notebook environment will not be able to view this Geotiff file. Some operating systems can handle
[32:50] this natively, but generally speaking, Geotiff is a format that's intended for GIS software, and it's not always the
[32:59] easiest to work with. If I turn over to my finder window, which I have over here, and I look in my data directory,
[33:08] and I see my new goiff directory right here, I can take a look at this geotiff that we just downloaded.
[33:16] Now, this doesn't look like very much right now. You'd see a lot of gray areas where we have no data. You can see white
[33:24] areas where there's desert region and no activity. And then we see a whole bunch of black and actually this is varying
[33:34] shades of gray associated with the CIF value in the particular area. But it's very difficult for us to understand what
[33:43] we're looking at when we just look at the raw version of this geotiff. Because of that, for the purposes of visualization,
[33:53] I've added additional functions that will convert this geotiff to a PNG. So, let's take a look at that code cell
[34:06] that does the conversion to PNG. There are a few values here that are sort of like magic numbers which
[34:15] actually come from the users guide for the data. If I turn back over here to our data store web page that I showed
[34:23] you earlier, you can see there's an included PDF over here. And if I open that up, which will take a moment to load,
[34:34] you can see that the authors of the data set have included some helpful information for understanding what we're
[34:41] looking at with the data. One thing, our units are watts per meter squared per micrometer stradian, which is the same
[34:50] unit that we've been using for SIFT throughout these exercises. However, the scale factor is 1 * 10us 4,
[35:02] which means that this is a value that we have to multiply the raw values from the geotiff by to get the values in the
[35:09] proper unit over here. Additionally, there are two fill values which are associated with data where we would not expect to find CIF activity in
[35:20] these files. So, we'll need to filter out those values and treat them as a transparency when doing our conversion
[35:28] to PNG. Okay. So, turning back over to the code, you can see that we're accounting for our two no data values with this data
[35:39] threshold right here. So, we're only going to use any value from the geotiff with a number less than 32,765.
[35:53] After we filter the values, we'll be scaling by the scale factor that's been provided. provided. And that should give us a result that is
[36:03] in the watts per meter squar sterian micrometer unit that we expect. Okay. So, I'll run this cell.
[36:15] So, now that we've run the cell, we've converted our geotiff file that we downloaded from the UNH data store into
[36:23] a PNG with associated metadata in a JSON file. file. If you're not familiar with the geotiff format, it contains georreerencing
[36:33] information embedded in the file itself. Because the PNG format does not support georreerencing information natively, we've included it in an ancillary JSON
[36:43] file for use later in our visualizations. visualizations. Let's take a look at the files that we just generated to see what they look
[36:52] like. So, I'll turn back over to my Finder window and I'll open up this PNG map. map. So you can see that this is a
[37:02] significant improvement in being able to view the data intuitively compared to what we were seeing with the geotiff. You could also
[37:12] accomplish this by viewing the information in a GIS program like QGIS, but since we're in a Jupyter notebook, I
[37:21] thought it would be helpful to include these PGs. Now, one thing you may have noticed is that there's no scale reference for the
[37:35] CIF values in the PNG. There is one other parameter that I haven't mentioned yet, which is our Vmax parameter,
[37:43] similar to the Vmax that we used in other exercises throughout this course. In this case, Vmax is scaled prior to
[37:52] the scale factor being applied. So a value of 8,000 here corresponds with 0.8 watts per meter squar steradian
[38:02] micrometer micrometer and this is about in line with the SIF values that we were seeing for June when
[38:11] creating our grided raster. One thing to note about the goif product is that its values are based off of the
[38:20] 757 nanometer cif from OCO2. So the scale of SIF values that you would expect to see should match with
[38:31] true observations at 757 nm rather than the 740 nm which are common for peak SIF values. values. All right, with our data preparation out
[38:44] of the way, we can get to the fun part, which is actually looking at our data on
[38:48] a map. I've written a helpful webbased widget for doing that. And you can see that the setup for it is in this cell.
[39:06] What we'll be doing here is running the widget, which is actually a web page that will run locally on your computer
[39:16] that enables us to look interactively at this file. One thing you might have noticed when we pulled up the PNG is
[39:23] that there's really a lot of information in these files. So, it's helpful to be able to zoom and pan around to really
[39:30] get a sense of every detail of the data. Let me run this cell now. And if I scroll back up, you can see
[39:40] that a map has opened within our Jupyter notebook. notebook. If you find that the aspect ratio of
[39:48] this makes it a little difficult to view the information itself, there's also a link here and this will open the map in
[39:56] a new tab. So with that open, we should now be able to look at the converted SIF data from
[40:04] the geotiff in more detail. And you can see I can zoom when using the scroll wheel or when using the plus and minus
[40:13] buttons over here. And if I zoom in on the United States, you can see this particularly active area in the
[40:20] temperate forests of the eastern United States. States. So over here, one of the details we can see is that this area of relatively
[40:29] lower cy is the US corn belt and in June typically that's right at the beginning of the planting and growing season. So
[40:40] the crops have not actually reached a mature enough stage to have a significant sif signal yet. On the other hand, the broadleaf forests
[40:52] of the eastern United States show a significant amount of activity in this late spring, early summer time of year.
[41:02] Let's see what other details we can see around the world in our SIFT data. One of the incredible things about this
[41:10] GOSIF data is that because we've done gap filling now through the GOSIF technique, we're able to actually view
[41:17] any part of the world for any time step that has data available. Whereas when we were producing grided raers, we still
[41:25] ended up with gaps in the data due to areas that the orbit of the ISS or OCO2
[41:33] did not cover during the time period that we aggregated over. One thing we can see in mid latitudes
[41:45] near the equator are the two tropical rainforests of South America and Africa. And these areas show moderate levels of
[41:57] cyph lower than the temperate forests of the northern hemisphere at the same time of year. And that's consistent with the year
[42:09] round photosynthesis that we see in the rainforest regions of the world. On the other hand, in desert regions such as
[42:16] the Sahara Desert, the Mojave Desert in the western United States, and the deserts in Chile and Argentina
[42:27] have have quite low values of CIF, which is associated with lower plant activity in those regions. One last detail I'll note here is that
[42:41] because of the thresholding that we did, we were actually able to filter out ice and water values which have no SIF
[42:50] activity and would just cover over important context in our map. And that was the point of the thresholding step
[42:59] that we did earlier. The last thing I'll point out on this widget is that the folder icon up here
[43:07] enables you to open other converted GOSIF granules that you may produce throughout this exercise or in the
[43:15] homework exercise. And this is really handy if you want to view other data later. You don't have to
[43:23] rerun the cell or perform any additional code steps to visualize it. Now, the details for actually implementing something like this widget
[43:38] that we're using here are rather complicated, and it's not terribly relevant to the discussion of the data
[43:44] itself. So, I'll leave it out of this demonstration. It's not necessary to create an interactive plot or anything
[43:51] this complex for viewing geotiff data. This widget was merely meant to take the place of loading data into GIS software
[43:59] like QGIS, which is what you normally might do when evaluating a new data set like this. Before we continue to the case study
[44:11] analysis portion of the exercise, I want to return to the previous cell and show you one more feature that we can use
[44:18] when analyzing these granules. I'll scroll back up to the previous cell. cell. When we ran this cell originally, you
[44:26] may have noticed this commented outline. Similar to when we were creating grided raers in part one, we can add an
[44:36] argument that bounds the data to a specific geo region. In this case, the commented out arguments allow you to
[44:46] bound the data to the conis. So, I'll uncomment this line. And if we rerun the data, data, we have converted the file again.
[44:58] And looking in finder, you can now see that our converted geotiff only contains data over the conus.
[45:06] This can be useful when speeding up our processing later on in the analysis. If I return to the map
[45:18] and I rerun the cell. Now you can see that the data has automatically been zoomed into the
[45:28] United States. Let me turn back over here and refresh the page. And when we open a file that
[45:36] has a bounded geo region, it will automatically zoom the view to that geo region that you've selected. This is
[45:46] handy for automatically setting up where you want to see the data instead of having to pan around and find it
[45:52] yourself. I will note, however, that I didn't change the file in this case. So if you are generating many PNGs in this manner,
[46:04] you might want to specify a new output file name so you don't overwrite previous data. And if I go back up to
[46:12] the previous cell, you can see that the file name is contained in the GOIF PNG variable here.
[46:25] And we've specified it here to be the same as the geotiff's file name but with the PNG extension. So if you wanted to
[46:34] change it, you might add something here like underscore conus. All right. So I'll remove that for now.
[46:47] Another side note before we continue on is that the researchers also created a data set estimating GPP from GOSIF data
[46:56] using the linear relationship between the two quantities. Remember how in part two we showed the linear relationship
[47:03] between CIF and GPP in ideal conditions. If we go back to Dr. Shiao's website and let me go back here
[47:17] and we scroll back up on this page. You can see a GOIFF GPP web page on the
[47:25] sidebar here. You click that link. This is the cover page for that data set. And here's some information on the
[47:33] validation of the relationship between the GOIFF GP product and tower GP showing that the results achieved by the
[47:42] researchers agree quite well with groundbased measurements. So this can be another useful resource when performing vegetation analysis,
[47:51] although we won't cover it directly in this course. However, if on your own you'd like to look at that data
[47:58] yourself, you can do so by adding in the keyword data set equal to goif like so. And now when you download the data, it
[48:16] will actually use the GPP data from the UNH data store. One thing to note though is that the scale value and threshold
[48:27] values are a little bit different for that data set. So you'll need to tweak some of the other parameters yourself to
[48:35] get it to work. Again, we won't be covering that in this course. Um I just wanted to note it down
[48:42] if you did want to look at the GPP data on your own. With that side note out of the way, now
[48:55] we're going to use this product to perform our own vegetation analysis in the spirit of the Yin at Alia paper that
[49:02] I talked about in the presentation. To recap, we'll be looking at how the 2019 Midwest floods affected agriculture,
[49:10] especially the corn and soy crops that make up a majority of the cultivated land area in this region.
[49:17] This event was a big deal. It was the wetest January through August period in over 125 years. There were fields that
[49:25] were underwater. Farmers couldn't plant their crops on time, and the crops that did get planted often drowned. The first
[49:33] thing we'll need to do to understand the scale of this event is to download all of the granules over the entire growing
[49:39] season. And we'll use the 8-day product here instead of the monthly that we used in the first section to have the best
[49:46] temporal resolution for our analysis. You can see the instructions here in the explainer text that I've included. So,
[49:54] we're going to download 8day average GOIF from March through October of 2018, which will function as our control year
[50:02] and 2019. And 2019, as a reminder, is the flood year. In step two, we'll use the conversion function that we used before
[50:14] to get all of the data to use the same SC. SC. In step two, we'll use the conversion
[50:21] function that we used in part one to convert all of the data to the same color scale from 0 to 0.8 watts per
[50:30] meter squar stradian micrometer so that the data can be compared visually. We'll also perform the bounding operation that I showed you to make the
[50:40] data only appear for the US Midwest, which is our region of interest. We'll compile the map data into an
[50:49] animation, which is a helpful way of visualizing this and getting an intuitive qualitative understanding of the event.
[50:59] Lastly, for a more quantitative approach, we'll be creating a time series to see the year-over-year difference in CIF within the region of
[51:06] interest. Okay, so let's take a look at our first cell here. That's going to be performing step one as before, which is just
[51:19] downloading the data. And the date range that I've included is from day of year 73 to day of year 298.
[51:29] These two dates weren't chosen for any particular reason other than that they cover the growing season with a little
[51:37] extra. And here you can see our function working. This will take a couple minutes. Okay, so now our code cell has completed
[52:16] and we've downloaded all of the data over the growing season for 2018 and 2019. Before we continue with the analysis, I
[52:32] want to mention that although looking at CIF is not comprehensive, if you feel confident about this material so far, you can also
[52:41] incorporate the estimated GOIF GP product that I mentioned and the XCO2 product from the OCO2 and O3 missions. Similar to the SIF product,
[52:55] if you've been following along from part one, this would represent a more comprehensive analysis in line with the
[53:01] study. If we turn over to the study, I can show you a little more detail on what I mean by that.
[53:13] I touched on this in the presentation, but I'll show you the study directly now. In particular, I want to point out this
[53:32] plot which not only compared CIF from tropomi and OCO2 but also considered the planted area to show the delay in crop planting in 2019
[53:45] and the delay in the peak and sif. One more detail to look at is the terrestrial water storage which I also
[53:54] touched on that comes from grace followon data which I won't be covering and the GPP data. Now this GPP can be
[54:03] reproduced by downloading the GPP data from GOIF and you can see how well the results match or maybe don't match what
[54:12] was found in the study. >> Additionally, the researchers considered XCO2 XCO2 If growth is less in a region then XCO2
[54:24] would be higher in general and that is due to less carbon fixation from the plants over that region.
[54:33] So that's another reason to consider XCO2 when performing this type of vegetation analysis. Let's return to the notebook.
[54:44] With our SIF files downloaded, we now need to convert them to produce the animation. >> I've created a function called create
[54:55] ghostif comparison animation here which will take the files that we just downloaded. Perform the conversion function and create an animated GIF file
[55:06] that actually shows the animation itself. itself. >> So let's run that now. This was not actually part of the study
[55:20] itself, but I find it instructive to animate the data over time in a side-by-side graphic. Okay, so now the cell has run and our
[55:32] animation is displaying down here some description of the >> I'm going to wait for it to loop back
[55:38] around. While you could look at the granules individually in the map widget that I showed you before, it's easier to
[55:57] compare them in this animated view in my opinion. So, let's take a look at what's happening right now. You can see that
[56:03] CIF is peaking over here on the left in 2018 while it remains relatively muted over here on the right.
[56:10] Subsequently later in the growing season, CIF reaches a somewhat lower peak in August and September, whereas CIF is relatively low over on the left
[56:24] in our control year. You can play through this animation multiple times if you missed it the first time. You might
[56:30] notice new things each time that it plays through. While this is useful for getting a rough qualitative sense of the scale of the
[56:40] event, it's helpful for us to also include a quantitative analysis using a time series to actually see the
[56:49] difference in peak over time in this region. region. Another thing that you'll note about this graphic is that there's a red
[56:57] polygon over the Midwest. And this polygon identifies the rough shape of the cornbt region. >> Okay, >> I didn't use any specific huristics for
[57:10] creating this polygon. It was just based on an interpretation of where fields roughly lie in the US Midwest. So it's
[57:20] not comprehensive. In general, you might include aggregating all data within a given state. However, that might include
[57:29] some wild regions within your analysis. An alternative would be to use something like the USDA's cropland coverage
[57:40] product to specifically filter to data that is only crop land. Uh but that is a little bit more
[57:48] complicated than what we'll be doing in this analysis. >> Yeah. So, >> so for creating our time series, we'll
[57:57] actually be averaging all of the SIF values within this polygon. And the percentage of planted regions within this polygon is quite high. So,
[58:08] we should mostly be seeing a crop land signal. I do. >> If you're curious about the data points
[58:20] or the um spatial points in this polygon itself, that is in the cornbt.json ancillary file over here.
[58:31] So I want to point out one last thing before moving on from this animation and looking at our quantitative analysis.
[58:38] >> Let's take a look at this region down here. here. in Missouri and a little bit of Arkansas
[58:43] below the red polygon. This corresponds to the Ozarks region which is mostly deciduous broadleaf forest and unlike planted crop land, the
[58:58] wild regions like this experienced a lower impact on CIF and actually had a slight uptick in CIF activity during the
[59:08] flood year. This area was more resilient due to the established root structures and the selection pressure on species to be more
[59:20] adapted to flooding. For instance, in flood planes of rivers, you might see plants like cattails which are more resilient to flooding. As I
[59:30] said, said, in the Yin Adalia paper, the researchers noted an increase in productivity of 0.04 04 pedagrams of carbon in 2019
[59:40] compared to 2018 across all land types in the 17 states included in the study. So the effect of wildland regions on the
[59:50] overall average across all 17 states actually resulted in a slight increase in primary productivity. On the other hand, the cropland
[1:00:03] regions experienced a 0.21 21 pedagram of carbon drop in productivity in June and July in the flood year with a
[1:00:12] corresponding increase of 0.14 pedigog of carbon in August and September due to the later peak. Remember we saw that
[1:00:22] peak in August and September in our animation where that dropped over here. So just doing the simple math that
[1:00:32] resulted in a net loss of 0.07 07 pedagrams of carbon overall in the flood year over crop land region specifically.
[1:00:43] Let's see if we can see that same trend in the quantitative analysis. So let's take a look at the cell that we
[1:00:52] have down here. Again, we're using the cornbelt.gojson ancillary file, which is that red polygon that you saw in the animation.
[1:01:04] And we'll be looping over all of the geotiff files which contain the raw data itself itself and taking the zonal average over the
[1:01:15] region excluding any node data values. For each of those spatial averages that we acquire, we'll be able to create a
[1:01:27] time series. one line for 2018, which is our control year, and one line for 2019, the flood
[1:01:36] year. year. Let's take a look at that plot. All right, here we go. Another thing that I've done to help with our
[1:01:45] visualization visualization is that to make the plot a little less busy, I've only included data values over the specific region where plants
[1:01:55] were growing most vigorously during the growing season. The researchers found that the reduction in CIFF, as you can see in the red line
[1:02:07] here for the flood year, represented about a 15% reduction in crop yields. And that's huge. It represents perhaps
[1:02:16] billions of dollars in agricultural losses. losses. Doing some quick math, we can see that our 2018 peak in this case of 0.58
[1:02:26] watts per meter squared stradian micrometers micrometers around mid or early July of 2018 is about 13.7% higher than the similar
[1:02:38] peak of 0.51 or so in 2019. So even just using a roughly drawn polygon rather than the more rigorous
[1:02:49] approach of filtering by crop cover, we get a result that is fairly close to what we see in the study.
[1:02:59] On the other hand, the time series also shows that later rise in productivity later in the season.
[1:03:08] Whereas in 2018, we see a steady drop off towards the end of the growing season. This later peak in the 2019 flood year
[1:03:20] corresponds with the several weeks later planting date that farmers used to mitigate some of the effects of the
[1:03:29] flooding. As I mentioned before, if you perform this analysis again for some of the natural vegetation outside of the crop
[1:03:41] areas, you might see that some regions actually did better in 2019 because of the extra water stored in the soil.
[1:03:50] Nature can be resilient in ways that some agricultural systems aren't. So, that covers the primary portion of
[1:03:59] our 2019 analysis. But I want to cover another case study of the 2012 drought which occurred in the cornbt.
[1:04:10] And the motivation for that is apparent if you look at the yield plot for corn and soy in the United States. So let's
[1:04:20] turn over to that. And I touched on these graphs briefly during the presentation as well. So looking at our corn yield data, we
[1:04:30] can see that in 2019, while there was certainly a drop in yield, that's noticeable, noticeable, it's only about 5%.
[1:04:40] And one thing we can notice about that is that even though we saw a 15% drop in
[1:04:46] the peak cy, that didn't result in a perfect 15% drop in yield in the crop. So the relationship is not quite that
[1:04:57] simple in this case. The motivation for looking at 2012 as I said is that there's quite a conspicuous
[1:05:08] dip in yield in that year. And this was due to a lack of precipitation and extreme heat in 2012 over the US
[1:05:18] Midwest. If we look at the soy yield charts, we can also see that while 2019 saw a drop
[1:05:30] in yields, it's not quite as severe as the drop that we saw in 2012. Another thing that you may notice about
[1:05:38] this plot if you're not familiar with agriculture is that there's a consistent upward trend line. And this is due to
[1:05:47] changing agricultural practices and improvements in hybrids year-over-year that enable increasing yields. Because of that, when performing analysis of
[1:05:59] agricultural regions, it's important to choose control years that are consecutive years if possible because of the increasing yield over time will also
[1:06:12] show up as increasing primary productivity and CIF over time. Let's go back to our notebook and change
[1:06:21] our analysis to look at the years 2012 and 2013. The reason why I won't be using the year before of 2011 is because
[1:06:30] that year also saw a moderate drought and a drop in productivity and yield. So I'll go back up to the beginning of
[1:06:42] section 3. And here we can see two variables, year A and year B. And instead of 2018 and 2019, I'll
[1:06:52] instead put in 2012 and 2013. And we'll use the same time range to cover the growing season. In different
[1:07:00] parts of the world, you may need to select different dates or when studying different plots with different planting
[1:07:06] times, especially if the crop is a perennial or planted in a different season of the year. >> [snorts]
[1:07:20] >> So now we can see that we're downloading the 2012 and 2013 growing season data. I find this example especially
[1:07:45] interesting in contrast to the 2019 case study because we're going to see CIF crash for a completely different reason.
[1:07:53] Essentially, that there was no water instead of too much water. Let's run the animation cell again and take a look at
[1:08:01] what we can notice qualitatively about the data. In this case, the left side plot is going to be our anomalous year with 2013
[1:08:18] as our control. As we can see, the SIFT peak is quite low in the anomalous year compared with
[1:08:28] 2013. Even the unmanaged land in the Ozarks down here, like we mentioned in 2019, is relatively low in 2019 as compared
[1:08:42] with 2013. Although there was an early peak, peak, there are patchy regions here suggesting that there was some difficulty in the
[1:08:53] growing region down here in the temperate forest. The amazing thing about GOSIF is that we can do this analysis and have confidence
[1:09:05] in what the data is telling us even though both of these years were before the launch of OCO2 in the first place.
[1:09:11] You'll notice OCO2 launched in 2014 and both of these years are before that launch date. Lastly, let's examine the time series
[1:09:23] plot of these two years. So, one thing I'll point out is that the labels will not render very well here
[1:09:33] since I've tuned it for the previous example, but you can hopefully still see what I'm talking about in this plot.
[1:09:42] Even though 2013 lagged somewhat in the early season compared with 2012, which could be for a variety of reasons, the
[1:09:49] big story we should see in this plot is just how muted the peak in CIF was was
[1:09:54] in 2012. It was more like a plateau at levels that we would normally see in the early
[1:10:00] growing season. This much more dramatic crash in production resulted in a direct crash in yields as we saw in the
[1:10:10] yield curve over here for corn and soy. I don't want to dive too deeply into the economics of this, but if you look at
[1:10:19] corn prices in that year, you'll notice that they also spiked, no doubt driven by the scarcity of new corn supply from
[1:10:26] that year's poor harvest. At any rate, I hope that these case studies have really illustrated the power of SIFT data and how we can
[1:10:34] realize its full potential by leveraging gap filling techniques. Whether it's through floods, droughts, heat waves, or even things like volcanic eruptions
[1:10:44] affecting sunlight, SIF can capture all of this information because it's measuring photosynthesis. Even though our analysis of these two
[1:10:56] case studies has been far from comprehensive, should give you an overview of how gap filled sift data can
[1:11:01] be employed. If you want to take it a step further on your own, one homework challenge to consider is this. And this
[1:11:09] isn't an official homework. How would you validate the topline gross primary productivity figures presented in the yin edalia paper abstract?
[1:11:20] Remember that there is a GOSIF GPP product that I mentioned earlier. So if we took that data added spatially
[1:11:28] average GPP values similar to the way that we spatially averaged the CIF values for each time increment over the
[1:11:35] corn belt and over the growing season. We compared the sums of those values between 2018 and 2019.
[1:11:43] What might we notice about those sums? While the difference in the two sums probably won't line up exactly with the
[1:11:51] figures from the paper due to differences in the spatial aggregation technique, do you expect the percent difference should be comparable? Try
[1:11:59] this out on your own if you're curious and want to go even further with this exercise. exercise. So that concludes the code demonstration
[1:12:07] portion of this part and thank you for your attention. Thank you very much Jackie for that great presentation and demonstration. So
[1:12:20] now what we'll do is a summary of our uh session today of the salient points. And here's a summary of today's session.
[1:12:32] CIF is an excellent metric for assessing vegetation health and stress response as uh we saw with the demonstration on the
[1:12:42] case studies of the impacts of floods and droughts. Uh CIF can be measured from several satellite platforms each
[1:12:50] with its own tradeoffs. OCO and OCO3 provide high quality SIF measurements, but they have limited spatial coverage
[1:12:59] and a relatively short observational record up to 11 years. Gap filling or data fusion uses datadriven models to
[1:13:08] predict CIF values and extend spatial and temporal coverage. And GOIF is a gap filled product. Uh so it's a a gap
[1:13:19] filled CIF product. It's a globally continuous SIFT product with 0.05 degree spatial resolution. That's about a 6 kilometer um spatial resolution and
[1:13:32] an 8day monthly and annual temporal resolutions extending back to the year 2000. And finally, floods and droughts
[1:13:41] cause vegetation stress which reduces CIF. And here's a contact information for anyone that has uh more questions about
[1:13:53] the material that was presented today. You can reach out to Jackie Ryan or to Karen Yuan. And with that, we've reached the end of
[1:14:02] not only today's session, but this uh webinar series. I'd like to thank all of the participants and all of our invited
[1:14:10] experts. And we are now ready to start the question and answer session. The first question I want to use SIFT data to analyze
[1:14:26] forest health and want to check and I'd like to check it relative to air pollutants and their impacts on forest.
[1:14:35] I'd like to have some suggestions related to this. >> Yes, the short answer is yes. So you can
[1:14:42] use uh SIF to analyze um the forest health and check uh the impact of air pollutants on forest. So there are many
[1:14:50] studies that using SIF to assess the impact of climate anomalies on forest health such as that what Jackie showed
[1:14:58] today is on uh cropland but there's many studies using safe to look at the impact of drought um heat stress on the forest
[1:15:07] but you can also use safe to look at air pollutants but the challenge is really to how to isolate the impact of air
[1:15:14] pollutants from other factors so that such as heat and drought because they could happen At the same time um in the
[1:15:22] document I uh I put the example of using SIF to investigate the impact of air pollutants on forest health and I will
[1:15:30] put more references on this document. You can check it out later. Wonderful. Thank you very much. The next
[1:15:38] question number two I get this error. Does anybody know why permission error access denied? Yeah. Yeah. So, that was hopefully just
[1:15:53] due to having the folder open in Windows Explorer. I'm not sure if that fixed that particular users problem. Um,
[1:16:02] I will note that Windows is a bit less comprehensively tested than Mac OS. Um, so if you are having an issue, I can
[1:16:13] look into it further. Yes, please feel free to email Jackie, contact her directly if you continue having issues.
[1:16:23] The next question number three, I want to know the difference between the SAMs and target acquisitions acquisition
[1:16:31] modes of OCO3. Can both modes be collected together for a site for example a flux tower site?
[1:16:42] >> Yes. So um these two modes cannot be collected at the same time. Um but they can be collected at different times but
[1:16:49] over the same site. So bas basically you can collect like today using SAM but now they use a target. Um and SAMS covers
[1:16:58] much broader area. So it collects observations over about 80 kilometer by 80 kilometer area within 2 minutes where
[1:17:05] target mode covers a much smaller area. It's about 25 by 25 km. is much smaller than SAM and is also primarily used for
[1:17:14] uh validation purposes. So not those target observation normally over TCON sites which are surface remote sensing that are used for uh validation of the
[1:17:25] satellites. satellites. Great. Let's move on then to the next question number four. SIF data has higher values in July August of of the
[1:17:36] year. What factors drive these values? Um so as Jackie said in the um in the training in the core in the uh in in the
[1:17:47] course the SIF is a really indicator of plant productivity while plants growth needs light energy and the water. So
[1:17:56] these quantities are higher in July and August in the northern hemisphere. So that's the reason that a sif has higher
[1:18:04] values in July and August uh in the northern hemisphere. In the southern hemisphere is a different case. So in
[1:18:11] the southern hemisphere is be opposite. So say would they have higher values in January February of the year when the uh
[1:18:20] when you have the highest uh light availability and also the temperature is warmer. warmer. Very good. Thank you. There is a new
[1:18:29] question in the chat. What are the specific differences between NDVI and CIF values? Um I could try to answer that or um
[1:18:40] maybe Jinger do you want to answer that? >> Jackie please give a try. Yeah please go ahead.
[1:18:46] ahead. >> Uh okay so uh as I mentioned in the presentation NDVI is primarily a measure of the color of plants. It's created by
[1:18:56] taking a ratio of specific um reflectance bands from you can use a variety of sensors. Uh it's kind of
[1:19:06] agnostic. agnostic. CIF is a very carefully estimated measurement that comes from um high resolution spectrometers and it's more directly tied to the
[1:19:23] physiological response of the plant. Because of that you get um a much faster response of CIF rising and falling in
[1:19:37] response to changes in photosynthesis activity in the plant as compared with NDVI which is considered a lagging
[1:19:45] indicator. indicator. So for instance, if you had a prolonged drought where plants stopped photosynthesizing, photosynthesizing, you might be able to observe that up to
[1:19:54] a week before you would see uh similar falloff in NDBI. >> Great. Thank you very much. Uh Jackie
[1:20:04] and uh Janji, if you'd like to add anything else, please feel free. >> No, I think Jackie uh explained really
[1:20:12] well. Excellent. >> Wonderful. Thank you. Uh okay so we have another question coming in. Are there plans to expand CIF coverage via
[1:20:20] additional satellites? >> Uh I can I can start um you can add. So there is another satellite called flex
[1:20:28] which will be launched later of this year on early next year. um they the the flag satellite uh will is will be
[1:20:37] launched by uh Italy Italian space agency that's um just main variable main observable is SE so that would increase
[1:20:46] observation coverage of SIF and other satellites I mean uh may not uh have SIF as primary v uh observables but safe
[1:20:58] could still be uh retrieved from those satellites such as uh temple which uh our team members are working to
[1:21:06] um to retrieve SIF from temple. Temple is a geostation satellite over North America. If uh the team member could be
[1:21:13] successfully retrieve safe from that satellite that could be uh um dramatically increasing the observation coverage of SIF over North America. Um
[1:21:25] uh so those are two cell two uh satellites I would I I know that could potentially increase the SIF observation
[1:21:32] coverage. Jackie, do you have anything to add? Um I'll also note that improvements in gap filling is an area of active
[1:21:42] research. So um there are many groups right now um including the ones that I mentioned in the presentation that are trying to take
[1:21:55] the observational record that we do have and estimate CIF using other more highly available instruments. Um and actually
[1:22:05] this was a focus of some research that I did earlier this year that is as yet unpublished to take data from the GO
[1:22:17] satellites which are um geostationary weather satellites operated by Noah and estimate CIF by training a model with
[1:22:27] OCO3 and the go data. >> Great. Thank you both. All right. If you have additional questions as you go through the
[1:22:38] material, please feel free to get in touch with any of the instructors um throughout this training series
[1:22:48] um Dr. Yunji Louu, Dr. Nick Parisu, Jackie Karen, or any of the ARST uh team members. So, with that then we've
[1:22:59] reached the end of this training series. Uh I think it was a great training. I'm really excited to see so much interest
[1:23:06] in CIF and um having um a large community be interested in in these sorts of data sets. So I first of all
[1:23:15] I'd like to thank all of the participants again for your interest for your enthusiasm in this topic and for
[1:23:21] all the great questions that have been coming in. I'd also of course uh I'd like to thank the ARSAT team uh Brock
[1:23:29] Levens, Jonathan O'Brien, Sarah Kutshaw, Sue Monty, Salwin Hudson, Adoi, Maria Marabido, Melanie Foya Cook, Natasha Johnson Griffith, and others uh from the
[1:23:40] RSET team that help um put this together and make these trainings possible. And finally, I would like to thank our uh
[1:23:50] the SIFT team who did an incredible job in um putting all of this material and demonstrations together. Uh especially
[1:23:58] for today's speaker, Jackie Ryan, who's been phenomenal in uh presenting not only the the theoretical part, but also
[1:24:08] uh the very instructive demos. So, I'd like to uh give the opportunity to Jackie for any final words before we
[1:24:16] close. Go ahead, Jackie. >> Um, yeah, just thank you uh for attending and for your attention. And um the last thing I'll mention is
[1:24:28] that uh we will be posting the homework hopefully this week. Um the only required portion is the 11 multiple
[1:24:38] choice questions. um for receiving their certificate. However, uh I also wrote three optional exercises if you want to pursue any of
[1:24:50] the analysis that we did in these three code demonstrations further on your own. Um and those exercises focus on
[1:24:59] extending what we looked at to view different areas of the world such as the sugar growing region in S. Paulo region
[1:25:08] of Brazil. Uh so yeah, thank you. >> Super. Thank you, Jackie. And uh Dr. Lou, would you like to say any words
[1:25:17] before we close? I just want to thank the whole team for putting this together. This is fantastic. And also
[1:25:24] thank for the participants from all around the world for your interest and for your active participation. And feel
[1:25:30] free to reach out to us if you have any questions when um during your research. And uh uh good luck with everything.
[1:25:38] Thank you. >> Thank you very much. And finally, uh Karen Euan, who's been instrumental in really um getting this this training uh
[1:25:50] or making this training possible. So Karen and would you like to say any words before we close?
[1:25:56] >> Um thank you to all the participants for joining us uh for today and the whole series. Um, and I do know that there is
[1:26:05] a survey that RSET does provide. Please fill that out. This is how we are able to know what to put together and provide
[1:26:15] to um all the participants because your feedback we really do look at that and we um work with great people like uh
[1:26:24] Jackie and Gingi to be able to put together these sessions for you. So, we look forward to your feedback. Thank you
[1:26:31] again. We have a great team and thank you to our set uh team. Thank you to Gingi and and [clears throat] Jackie.
[1:26:38] It's really an honor to work with you all. all. >> Thank you very much Karen. So yes, I
[1:26:45] just wanted to stress what Karen said that there is a survey that will be sent out. We ask you to please uh fill out
[1:26:53] the survey. it is important to us and and to the OCO mission right to understand um the what you're interested
[1:27:03] in uh how you're finding the use of the data what you would like to see in the
[1:27:08] future uh what are some of the challenges that you're having I mean all of that is really really helpful
[1:27:14] feedback for us and and the for our set and for the OCO team so please uh fill
[1:27:20] out the survey as mentioned the homework will be posted on the training web page today. Um the due date is November 12, I
[1:27:31] believe, and the uh certificate of completion will be provided to those participants that attended all three live sessions and complete the homework
[1:27:41] by the due date. So with that, I hope to see you all in the future again. Um, we hope to have another SIFT
[1:27:52] training sometime in the future. Maybe uh uh the next step something a little more building on what was presenting
[1:27:58] presented this time around. So, please let us know what you're interested in. Thanks everyone and wishing you all a
[1:28:05] great day.
