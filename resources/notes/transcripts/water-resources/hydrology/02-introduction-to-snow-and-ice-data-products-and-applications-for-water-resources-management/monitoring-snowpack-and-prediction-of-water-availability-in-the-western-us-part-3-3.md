# Monitoring Snowpack and Prediction of Water Availability in the Western US, Part 3/3

`https://www.youtube.com/watch?v=MhU1e5PqS2M` · id 358 · 1:30:36 · module 106 — Introduction to Snow and Ice Data Products and Applications for Water Resources Management

[00:00] Hello everyone. Welcome back to this ARSET webinar series on introduction to NASA snow and ice data products and applications part
[00:09] three. three. This is the concluding session of the series and today we will focus on monitoring mountain snowpack and
[00:16] prediction of water availability in the western US for water resources and disaster applications. Our guest speakers today are Dr. Karl
[00:26] Rittger and Dr. Shawn Fleming. I will be introducing them shortly. We will start with a very brief review
[00:34] of part two. So in part two last week, we focused mostly on snow data discovery and access
[00:42] by using different tools starting from National Snow and Ice Data Center. So we had an overview of NSIDC
[00:51] where more than 1400 data sets are available freely. And we also saw tools such as NASA Earth
[00:59] Data Search and AppEEARS. We had demonstrations of how to discover data and subset them specially and temporally and extract them.
[01:09] Then we had a demonstration of how to download data using these tools and analyze them in QGIS.
[01:19] There was a case study used in Grand Mesa in Colorado. For this area, snow data from SnowEx Airborne Snow
[01:28] Observatory and MODIS Normalized Difference Snow Index were downloaded and analyzed in QGIS. Today's session is going to focus on the
[01:40] application of snow data and that is monitoring mountain snowpack and prediction of water availability in the western US for water resources and
[01:50] disaster applications. This is a joint session between ARSET and NASA's Western Water Action Office or WWAO. And so, the focus is going to
[02:00] be on the Western US case studies. Just to note that the homework is posted today on our website and it is due on
[02:10] August 21st. Those of you who attend all live sessions and complete the homework assignment by the deadline will receive
[02:18] a certificate of completion. Um so, that just a note that the homework is available today. Starting with today's session, the
[02:30] overall objectives for part three are that participants will be able to recognize the importance of water resources and impact of snow data in the
[02:40] Western US. Identify methods to monitor and visualize snow cover, snow albedo, snow darkening, and snow cover duration in
[02:50] the Western US. And finally, recognize how snow data are used in water resources management and forecasting snow-fed river flow with
[02:59] case studies in the Western US. So, the outline for today is that Dr. Ridker will start with monitoring
[03:09] mountain snowpack and demonstrate Snow Today website. And Dr. Fleming will be talking about application of snow data
[03:17] for water supply forecast. Before I introduce our speakers for today, here's a note about asking questions. As I mentioned in the
[03:26] previous sessions, please put your questions in the questions box and we will address them at the end of the
[03:32] webinar. webinar. Feel free to enter your questions as we go and we will try to get to all the
[03:38] questions during the question and answer session after the webinar. The remainder of the questions will be answered in the question and answer
[03:45] document and that will be posted on the training website about a week after the training. With that, I want to introduce our
[03:54] speakers for today. Dr. Karl Rittger is a research associate at the Institute of Arctic and Alpine Research or INSTAAR,
[04:03] where he works on projects sponsored by NASA, NOAA, and USGS, focusing on the research, application, data archiving
[04:12] and distribution, and capacity building. His research areas include mapping snow and ice at a special scale suitable for
[04:20] mountainous terrain and large-scale physically based distributed modeling of snow. snow. Dr. Rittger leads the Snow Today team at
[04:29] the National Snow and Ice Data Center, providing real-time information for users. users. He is a MODIS and VIIRS land team member
[04:38] and executive board member of the Snow International Working Group, and participates in multiple NASA working groups on snow.
[04:48] Our second speaker will be Dr. Shawn Fleming. Fleming. Dr. Fleming is the science lead for the NASA Western Water Action Office,
[04:56] supporting practical application of NASA Earth observations in the Western US for water resources management. His research interests include
[05:06] hydrology, cryospheric science, climate, data analytics, and machine learning. Dr. Fleming is also an affiliated faculty at Oregon State University in
[05:18] Center for Earth, Ocean, and Atmospheric Sciences, and the Water Resources Graduate Program. He participates in senior-level advisory
[05:29] activities in multiple organizations, including Water Resources Research and World Meteorological Organization Commission for Hydrology. He contributes science-based guidance to
[05:41] policy formation, evaluating draft legislation, and performing environmental impact assessments. So, we first invite Dr. Karl Rittger. Karl.
[05:53] Karl. >> Okay. Hi, everyone. I'm Karl Rittger at the University of Colorado Boulder at the Institute for Arctic and Alpine
[06:00] Research. I wanted to thank NASA for the invitation to speak and the introduction as well as all of you for being here
[06:07] today. today. I've been working on snow monitoring for about 15 years and a large team of folks
[06:13] have contributed to both algorithm development as well as the Snow Today website that I'll talk about. Mark Raleigh and I founded the Snow
[06:21] Today website in 2020 and critical validation and development efforts have come from Doctors Palamaki, Painter, Skiles, and Jeff Dozier who passed in November
[06:33] of 2024 who was the pioneer of this research. Our community will miss him. Here's an outline of today's training
[06:43] presentation. First, I'll talk about an approach called spectral mixture analysis or SMA which can tell us the
[06:49] snow cover as well as other snow properties like grain size, snow albedo, and snow darkening. Walt Meier introduced SMA earlier on the
[06:58] first day of training um but I'll discuss the snow signal, these algorithms, as well as the validation.
[07:06] validation. After that, I'll show our analysis platform called Snow Today which allows users to view snow properties in context
[07:13] with the historical conditions and it also provides links to download that data for your own use. After that, I'll briefly show three
[07:20] examples of research to practice with data use, our plans to extend spectral mixture analysis to new sensors and regions,
[07:28] and then I'll follow with my vision of the future of optical remote sensing and conclude with a summary and data access.
[07:37] So, to get started on snow signal and methods. methods. So, these graphs show the spectral signature or
[07:45] spectra of various things that cover the Earth's surface. On the Y axis is the reflectance or fraction of the sun's
[07:52] energy that is reflected by the surface. On the X axis is the wavelength. The left side of these figures shows
[08:01] the visible wavelengths where eyes can see, and in the center are near infrared near infrared wavelengths followed by
[08:08] shortwave infrared wavelengths on the right. right. On the upper left graph, four vegetation spectra are shown. And those are highly absorptive um in
[08:19] wavelengths like blue, but vegetation's highly reflective in the near infrared. So, you can see where it goes up there.
[08:27] Um on the upper right is snow, which is bright in the visible wavelengths, which is we which is why our eyes see it as
[08:33] white. And the four spectra here show fine to coarse grains with new snow or small grains being the
[08:40] brightest. brightest. Near infrared reflectance is lower for large grains where light is more easily trapped in those larger grains. And in
[08:49] the shortwave infrared, snow is dark. On the left side at the bottom are soils, which are dark in the visible but
[08:57] brighter in the near infrared and shortwave infrared. On the lower right, you can see where multispectral satellites, such as
[09:07] MODIS, measure these spectra. And those are those vertical lines. And that's where the satellites are measuring these
[09:16] different Earth surfaces um from space. So, spectral mixture analysis models uh are physically based, meaning they use all of these data, these spectra,
[09:27] instead of an index like the normalized difference snow index or NDSI, which you saw earlier in the training. The
[09:34] normalized difference snow index or NDSI subtracts the dark band in the short infrared from the bright band in the
[09:42] visible and normalizes it by the sum. And that can be useful for detecting snow, snow, but it's shown to vary in accuracy,
[09:50] especially across regions with different vegetation types or grain sizes. In contrast, the spectral mixture analysis relies on linear combinations
[09:59] of end members to determine snow cover, snow grain size, and snow darkening from light-absorbing particles um and snow albedo as well.
[10:14] This graph on the right also shows the impact of snow darkening, uh which is caused by light-absorbing particles on
[10:23] the snow's surface, such as dust or carbon. And this example shows different concentrations concentrations of dust that impact the visible
[10:31] wavelengths. So, we also detect this, the snow darkening. And when we multiply the snow darkening by the incoming solar
[10:37] radiation, radiation, we get uh a number in watts per square meters, which tells us how much extra energy is
[10:45] added to the snowpack, uh contributing to snowmelt. So, I've worked on two SMA approaches. Um one is the spatially and temporally
[10:55] complete or STC SCAG and DRFS, and the other is the SPIRES approach. And in my slides today, you'll see data
[11:03] from both methods. Um while both are spectral mixture analysis methods, they differ. For example, the SCAG method uses snow, vegetation, and
[11:14] rock end members, which we saw on the last slide, while SPIRES uses only snow end members and uses a mixed background
[11:21] end member, which are combinations of other surfaces like vegetation and rock. The SCAG model runs iteratively for each
[11:29] pixel, while SPIRES groups pixels to speed up the processing. Another difference is that SPIRES solves simultaneously for the snow darkening
[11:39] or the concentration of the light absorbing particles, while the STC Skag RFS model solves the snow darkening
[11:46] separately. separately. Both algorithms use persistence of the surface surface to separate clouds, but SPIRES has a machine learning algorithm to help as
[11:55] well. well. The Skag and DRFS algorithms are being adopted by the National Snow and Ice Data Center, Distributed Active Archive
[12:03] Center, and we have a plan to transition the STC algorithm, which gap fills them as well. SPIRES, on the other hand, is run by a
[12:11] team at INSTAAR, giving us quite a bit of flexibility. And other groups are beginning to run this algorithm as well.
[12:20] Published literature shows that spectral mixture analysis methods, like the two I just showed, perform the best for snow
[12:26] cover over other methods like NDSI. In the left panel, back in 2013, we showed how the MOD Skag model maintains
[12:35] accuracy over various vegetation types. Um we have forest, shrubs, grasslands, and barren areas here. Um and I apologize, I'm missing the Y
[12:47] axis on these graphs. Um but what we would see is differences in the snow cover product minus the
[12:56] validation that we're doing there, which you can sort of see in the Y label. So, in 2018,
[13:06] Dr. Mason uh did some similar analysis, and again showed that spectral mixture analysis methods perform better than
[13:13] NDSI NDSI with some independent validation. And he compared five different algorithm algorithms. Two of them were spectral
[13:20] mixture analysis, and three were NDSI approaches, in three different regions: the Alps at the top, the Pyrenees in the
[13:27] middle, and Morocco at the bottom. The graphs show the root mean squared error. error. More recently, on the right side, work
[13:38] led by Tim Bothlinger used lidar from the Airborne Snow Observatory, which was also introduced earlier in this
[13:45] training, and again performed the accuracy of the spectral mixture analysis methods over the NDSI methods. This analysis looked at different canopy
[13:55] covers, view zenith, which is the angle that the satellite's looking at, and different snow cover fractions. And
[14:02] overall, the SMA methods performed the best. best. However, I should note that SMA is not available globally currently, and the
[14:10] MOD 10 NDSI products presented earlier in this training are very useful for this purpose. Published literature also shows that
[14:21] spectral mixture analysis methods perform the best for snow albedo. In 2019, work led by Dr. Baer showed
[14:28] that the accuracy of the remotely sensed albedo from the STC Skag DAFS method outperform snow aging models that are
[14:35] often used to estimate snow albedo. These models assume a decrease in snow albedo over time and can include
[14:42] estimates of dust if if available. The graph on the left shows both the remotely sensed albedo and the modeled
[14:49] snow albedo from Bats compared to the on-the-ground measurements. You can see the spectral mixture analysis retrieved in blue circles falls closer to the
[14:58] one-to-one line than the red circles from the Bats model. This year, Dr. Palo Machete led a paper
[15:05] showing how snow albedo from spectral mixture analysis performs better than three standard MODIS products. This figure is on the right.
[15:14] The four graphs show the bias and root mean squared error on the left and the right sides for both snow fraction and
[15:22] time on the top and the bottom for the five products that are represented by five lines here.
[15:29] The three spectral mixture methods in red, purple, and green outperform the standard methods in blue and orange.
[15:35] Notably, spectral mixture analysis performs better for full covered snow pixels, where you might think that some of the other methods would do just
[15:43] as well since there's little vegetation or soil. With a robust understanding of the accuracy of spectral mixture analysis
[15:52] methods applied to coarser 500-m MODIS data, we're now looking at applications to higher spatial resolution 30-m data.
[16:01] On the left side, we we see two spectral mixture analysis maps of grain size. And one of them is from the SPIRES
[16:11] model, and one's from the SCAG model. The SCAG model shows quite a bit of variability, where in contrast, the
[16:18] SPIRES model is showing little variability across the image for these Landsat data. When we look at the distribution of
[16:25] grain sizes across aspects, um the box and whiskers plots on the right show that the southern and eastern aspects from the
[16:34] SCAG model have larger grains. This is represented by that larger extent of those blue blocks blue boxes
[16:42] for the east and southeast directions. And this makes sense because those slopes receive more sunlight than northern and facing slopes. So, we're
[16:51] still investigating the accuracy for this Landsat scale data. Next, I'm going to move on to visualization and analysis
[17:01] um from our SnowToday website. While the SnowToday website started in 2020, in 2024, it was added to NSIDC's
[17:11] homepage along with their well-known sea ice and ice sheet products. Along with a redeveloped desktop application, traffic to our site
[17:21] increased by 10 times from about 300 months in pre 300 people a month in previous years to over 3,000 per month.
[17:29] This year's interest peaked in November and boosted our site views to about 8,000 per month. With the primary US focus in the past,
[17:38] most of our users are coming from the United States with some interest from other countries. And we've developed
[17:43] data sets for other regions, which we hope to add to the website in the coming years. years. Snow Today pro- provides accurate daily
[17:52] gap-filled 24-hour lag, 500-m spatial resolution snow cover, and snow surface properties for water managers, scientists, and the public.
[18:02] Snow reading of forcing which tra- which tracks the impact of light absorbing particles like dust and carbon on snow,
[18:10] impacts the snow albedo and has only been previously produced for scientific studies. But on Snow Today, we produce
[18:16] this in near real time along with the snow cover and snow albedo. While the gridded data's useful to both
[18:22] researchers and operational managers who have technical skills, for those without funding or skills to manipulate the data,
[18:30] data, Snow Today provides that. We'll get to that in a moment. Now, water managers need consistent products and we've been providing those
[18:40] for 5 years. I won't go into a lot of detail here, um but this shows the progression of our
[18:47] algorithm development. The Snow Today website again started in 2020 and we've been active for um a few years now.
[18:58] In the first year, we used MODIS Terra and um the STC Skag River FS algorithm. And we did that for about 3 years, 4
[19:08] years. Moving forward, we've now transitioned to the SPIRES algorithm. During the years with the STC algorithm, we made a bunch of improvements, which
[19:18] are highlighted at the bottom here, including the validation, which I've shown already. Currently, we're using the spires
[19:25] algorithm, and we've updated this from the published version by Dr. Bear to now do near real time. We've added radiative
[19:34] forcing, and we've sped up the algorithm. algorithm. And corrected issues that we found in the original algorithm with the grain
[19:41] size and albedo. Looking forward, we're again parallelizing this algorithm, so we can run it over a larger areas and get data out faster.
[19:53] The daily snow viewer on snow today can be used to view all of these variables. And the automated analysis allows one to
[20:01] compare the current conditions to historical ones for states and multiple levels of river basins. This summary graph on the right shows
[20:08] the snow cover for this year in context with the previous 24 years for the western US with the min, max, and
[20:15] interquartile ranges displayed. Snow covered area peaked a bit later this past year than usual, which you can
[20:22] see by comparing the blue line to the gray shaded area. Late season snow is captured in mid-May,
[20:29] which you can be seen by the slight increase at the end of the blue line on the right side.
[20:34] In addition to these graphs of snow cover, cover, we provide similar summaries for snow albedo, snow radiative forcing, and snow
[20:41] cover duration. That can be seen here. Again, this figure shows snow cover, snow albedo, snow radiative forcing, and
[20:51] on the far right side, snow cover duration. And this is for the state of New Mexico this year. And the same day
[20:58] as the previous graph. This year was very dry in New Mexico, the driest on record, which you can see
[21:05] on the left bottom graph summarizing the snow covered area over the year. In column two, you can see the lack of
[21:10] storms in the early season created snow with low albedo with the big dips in the blue line.
[21:17] Small high elevation storms likely kept the snow that did exist relatively bright after that. In column three, we can see the snow
[21:25] radiative forcing. In the US West, snow radiative forcing can have a major impact on melt timing. Dust storms darken the snow and while
[21:33] it's covered with new snow during the winter, it accumulates on the surface during the spring melt and accelerates
[21:41] the melt. In column four, you can see the snow cover duration which is calculated by summing the snow cover each day and
[21:48] that's also very low in New Mexico this year. That was a summary for a state in the
[21:55] Western US and I'm now showing a summary for a basin, the Upper Colorado River Basin. Basin. This is a hydrologic unit code two or
[22:03] HUC2, the Upper Colorado River Basin. This year, snow started falling in line with normal patterns which you can see
[22:11] with the blue line uh on the left bottom there. Um from December to February, there were less snow cover than normal and this
[22:21] also can be seen um by looking at the snow cover duration in the fourth uh column. In column two, you can see some dark
[22:29] snow in March and April from the lack of storms and also that dust accumulating on the surface which
[22:36] you can see in the radiative forcing in column three. In addition to the HUC2 basins, currently the Snow Today website can
[22:45] also analyze hydrologic unit code four basins which are quite a bit smaller. And this figure shows the snow surface
[22:52] properties for the Colorado headwaters which had near normal conditions in terms of snow cover as shown in column
[22:58] one and snow cover duration as shown in column four. But you can see the same dark snow in
[23:04] the albedo and radiative forcing columns three and four as we saw in the previous slide for the Upper Colorado Huck 2
[23:12] Basin. During the winter, we also write monthly articles on snow in the West. The figure at the bottom left here shows
[23:23] a monthly figure. And this one actually is the maximum snow cover day. So when did snow cover reach a maximum value?
[23:31] The red dot shows that in 2025, it was relatively late in the season, well above the mean line around January 15th.
[23:42] On the upper right, you can see net changes in snow water equivalent, which are displayed also on our website. We
[23:48] get these data from the NRCS and do analysis on those as well to pair with the remotely sensed data.
[23:55] We also do difference maps to show anomalies or differences from normal, um which is shown here as the snow cover
[24:03] days map. So those red areas had much shorter duration. You can see that in New Mexico, a lot of red, which I have
[24:11] showed earlier. And some of the northern areas are blue, so showing they had much longer snow cover duration than normal.
[24:18] We write these articles once a month, usually from February to June, uh as a retrospective on the previous
[24:25] month. month. All right. So now we'll move a bit to uh some examples of this data in use.
[24:34] The first example of the use of Snow Today data is from the NRCS, which runs an operational US Westwide supply water
[24:41] supply forecast system each day. In this study, snow cover was considered alongside the traditional SNOTEL or snow
[24:49] water equivalent point measurements in both the statistical and AI-based models. models. The addition of the snow cover results
[24:57] in accuracy gains for late season forecast as snow lines rise above the in situ measurement sites. Snow cover similarly improved accuracy
[25:07] accuracy for early season forecasts, which are also problematic. Overall, there was a 10 to 25% improvement in the forecast and the
[25:15] gains were roughly proportional to how thoroughly runoff is dominated by snowmelt compared to rainfall and how poorly in situ measurements monitor the
[25:23] late season snowpack. Additional exploration suggests that snow cover um as the sole predictor can yield reasonable water supply forecasts from
[25:34] mid to late season. Uh so potentially useful in sparsely monitored regions. Shaun Fleming will review this work uh
[25:42] in more detail, I believe. Another application of the snow cover products are in the CU fusion uh Westwide SWE product.
[25:55] This work led by Noah Molotch um uses a generalized linear regression model to estimate the snow water equivalent on
[26:03] a weekly forecast schedule during the snow season. I won't go into too much detail about this since our focus is on the remotely
[26:12] sensed product, but these snow water equivalent products are available um starting in February of each year and you can find those at InSTAR.
[26:26] Another example of our use of data is from the Colorado River Basin Forecast Center or CBRFC. They use a temperature index model
[26:34] called snow 17 to estimate snowmelt and that relies on snow cover along with air temperatures and degree day factors.
[26:42] There's a very simplified uh equation at the top left here. The figure on the top left is a
[26:48] conceptual figure showing the impact of factors like solar radiation and albedo on the degree day melt factor.
[26:54] And our radiative forcing products integrate both the snow darkening and the incoming incoming solar radiation. And CBRFC uses these data to increase
[27:05] the snow 17 air temperatures to account for the dust. The graph at the bottom shows some late
[27:11] season dust and snowstorms captured by the radiative forcing product in 2022. In addition to the magnitude of the snow
[27:19] melt, which is shown on the left, the right side shows an example of zonal fractional snow cover from satellite
[27:26] observations observations um compared to the snow 17 model snow cover. And there's a difference map shown at the bottom here.
[27:35] Uh this allows forecasters to see differences between the observations from space and what their model is showing and
[27:41] helps them qualitatively see if the melt is being generated from the correct locations. Next, I'll talk about extending spectral
[27:51] mixture analysis to new sensors and regions. regions. MODIS, which we've relied on since 2000, is nearing end of life. The satellite's
[27:59] drifting closer to the earth, resulting in earlier morning observations where there are larger shadows from mountains, making it harder to see the snow. The
[28:07] MODIS science team have proposed phasing out the data processing later this year, though Congress has stated they'd like
[28:12] to continue funding this data. Uh we're still waiting on a vote for that. that. So, we're working with our ability to
[28:19] extend the data through the use of the VIIRS satellite series, which will go through 2035 or 2040.
[28:27] VIIRS on the Suomi NPP platform, launched in 2011, has nearly 15 years of overlap with MODIS, opening
[28:36] the door for intercalibration to reach the goal of a 30-year time series, which water managers typically like to see.
[28:43] Similarly, with the next satellite in the series, NOAA-20, there's a 7-year overlap with the MODIS instrument. Early results from our efforts to
[28:53] transition to VIIRS were presented by Dr. Leonard at the American Geophysical Union meeting last year. Here you can see the viewable
[29:00] fractional snow cover at the top, snow on the ground, which accounts for snow under the trees in the center, and snow
[29:07] albedo at the bottom. Looking from left to right from winter to summer, we see progression for snow
[29:12] cover and albedo as expected. Validation of these data are in process currently, and we plan to use these data
[29:19] alongside with the MODIS record to extend from 2000 to present. The US Bureau of Reclamation is funding
[29:27] our work to continue advancing snow cover and albedo products from NASA satellites. satellites. Our updated algorithm includes
[29:35] improved new and ephemeral snow detection, and improved interpolation schemes for very cloudy regions. We plan to intercalibrate the data
[29:45] streams streams between MODIS and multiple VIIRS sensors. sensors. There's a 50-minute difference between um um two of the VIIRS sensors,
[29:57] which allows us to perhaps see between clouds as clouds pass by. Um also, in addition to the SPIRES
[30:06] algorithm, the National Snow and Ice Data Center is working on a near real-time gap-filled MODIS gag MODIS
[30:13] DRFS product, which may come back online in 2026. Currently, we're processing data in the western US, which is represented by the
[30:23] black tiles here. We've created historical data for the red tiles as well and plan these to run
[30:30] in near real-time in this coming winter. Not shown here, we're working on data sets for the eastern US and Canada, New
[30:38] Zealand, Chile, and high mountain Asia. The Alaska Pacific River Forecast Center are partners in our work. Shown here is a progression of snow
[30:46] cover from March 15th where there is near full snow cover to June 15th when just the highest mountain
[30:52] ranges are covered with snow. Collaboration with the University of Calgary Calgary um on the Yukon River has motivated
[31:01] motivated a validation of this data set as well. We validated using about 20 Landsat scenes for snow cover
[31:10] across a number of years using both the Skag and the Spiers algorithms on Landsat. Those are in the middle column.
[31:18] On the right you can see the differences between the MODIS observations and the Landsat observations. Again, the
[31:26] difference is MODIS is at 500 m and Landsat is at 30 m. So, we expect Landsat to give us better estimates of
[31:33] snow cover. While we do see differences, those are mostly in the vegetated areas where the models are making different assumptions.
[31:42] But despite those differences the overall statistics are very high um and the fractional statistics show mean differences of about 5% which is pretty
[31:53] accurate. accurate. Moving on to the future of optical remote sensing, we hope to integrate spatial, spectral, and temporal
[32:01] resolutions from these various satellites. satellites. Looking forward, there are opportunities in data fusion for both multispectral and hyperspectral data which measures
[32:11] the spectrum in more wavelengths. These examples of snow cover fusion and snow albedo fusion are shown on the left
[32:19] and right respectively. For snow cover on the left, we have developed fusions based on random forest machine learning
[32:26] that leverage 30 m spatial resolution of Landsat and the daily cadence of MODIS of MODIS. Our recent work published in 2024
[32:35] developed a local model that uses training from the surrounding region and resulted in more accurate snow maps than
[32:41] both MODIS and a global fusion that was trained on full Landsat images. Currently, this is not being done
[32:48] operationally, but once trained, the model could be used with our current MODIS or future VIIRS data as input.
[32:55] Moving to the figures on the right side, while the spatial resolution of Landsat is helpful, using data from a
[33:01] hyperspectral sensor can also improve our albedo estimates. Spectral mixtures estimates of albedo at 500-m resolution still have errors of around 7 to 10%
[33:14] when compared to in situ observations. Here, we used hyperspectral data from the Airborne Snow Observatory as a proof
[33:21] of concept for satellite-borne hyperspectral data. The data fusion reduces the MODIS error by more than 50% of its original values
[33:29] and completely removes the bias when we train on data in the same basin, from the same time or a different time.
[33:37] However, when we train the model on a different basin, the root mean squared error error is unchanged from our original MODIS
[33:44] data. So, there's some improvements to be made there. Notably, we were using airborne data here, and in the future,
[33:52] we could use spaceborne satellite hyperspectral data, which would allow us to observe every basin. In summary, Snow Today runs accurate SMA
[34:03] algorithms daily with a 24-hour lag to produce gridded and summarized data in context from water year 2001 to present.
[34:12] Snow Today is wrapping up its sixth year of operational production this year, and Snow Today will continue in water
[34:19] year 2026, hopefully producing data for a wider array of regions. Snow Today continues to work on VIIRS
[34:28] data in preparation for the MODIS Terra decommissioning, decommissioning, and future improvements in spatial resolution and accuracy will be achieved
[34:35] through the fusion of spatial, temporal, and spectral resolutions. Thank you very much. I hope you enjoyed this training.
[34:44] Before I go, I'm going to talk about where you can find the data that I talked about today. On the left side, we
[34:51] have the SPIRES based algorithms, and on the right side, the Ska GRFS algorithms. And the top is historical data, and the
[34:58] bottom is near real-time data. And all of these data sets are available at the National Snow and Ice Data Center
[35:04] with various dates for the historical and the near real-time data. I will note that the data on the upper
[35:11] right is not gap filled like the other three data sets. Thank you very much. >> Hi there. Thanks, Karl, for the
[35:24] introduction introduction and for going over your snow today products. In this part of the ARSET training, I'm just going to give an
[35:32] overview of one, and this is just one example of how Karl's data, and of course, NASA snow
[35:41] data, snow and ice data more broadly, can be used in a practical water management or hydrologic science
[35:50] application. application. So, we are going to use that in-situ satellite data in a statistical and AI-based river
[35:59] hydrology model to show how it can be used to improve the accuracy of operational water supply forecasts in the western
[36:08] US. US. There we go. So, some motivation here. This is a great quote from the Jeff late Jeff Dozier
[36:19] from an EOS transaction article over a decade ago. The punchline is that where he saw the future, and I think a
[36:27] lot of us would agree, I certainly do, that progress in water supply forecasting and hydrologic prediction in
[36:36] general and hydrologic understanding going forward is going to reflect in large part a combination of remotely sensed snow data,
[36:46] particularly but not exclusively from space, with machine learning driven hydrologic prediction models. So, what is, you know, that was over a
[36:55] decade ago. How are things looking? So, from, you know, the 20,000-ft view looks pretty good. But, if you dig get down
[37:01] into the into the weeds, there are gaps. If you look at operational flood and water supply forecasts as some of the
[37:07] governmental service delivery organizations, SDOs, that's an acronym I'm going to use a few times here. You're going to see that in general
[37:14] remotely sensed snow data mainly used for quality to guidance. And And in addition, most hydrologic models don't use AI. Now, in the private
[37:25] sector, there's some companies out there who are, but if you're looking at big organizations like USBR, USDA,
[37:32] NOAA, NOAA, groups like that, this is generally true what I'm saying here. Also, in both research and practice, there are really
[37:40] very few examples of remotely sensed snow data driving AI-based streamflow models for seasonal water supply forecasting. So, what we're going to do
[37:48] here is that in the context of a generations, literally generations old, US Westwide operational water supply forecast system operated by the US
[37:59] Department of Agriculture's Natural Resources Conservation Service, in that context, we're going to test a new remotely sensed snow data set
[38:07] as forcing to a new AI-driven hydrologic model. model. So, let's step back and give a little bit of background in terms of water
[38:17] water resource science here and what we're actually doing. So, Um, what is a water supply forecast? I've used that
[38:23] term a few times. So, in the Western US water management, there's there's a set definition for this. And these are
[38:29] forecasts issued once or more per month, uh, generally beginning in winter, say January, so, of the upcoming spring summer total flow
[38:38] volume for a given river, uh, performed by service delivery organizations or SDOs, having strict accountabilities to end users, including the general public,
[38:48] around reliable forecast product generation. So, that's a bit of of a mouthful, um, but you may have come
[38:55] across these things. Uh, they're they're quite commonplace in, uh, water resource management. So, California Department of Water Resources Bulletin 120 is a famous
[39:04] example of it. Um, the NOAA National Water or, um, National Weather Service River Forecast Centers, their ESPs, based on a
[39:13] process-based model, is another example. And the USDA NRCS regression models, uh, are are still another example, uh, of
[39:21] West-wide WSFs. So, why are they important? Well, they're foundational to Western water management. They're used for all
[39:28] sorts of choices. I can't I don't have time to go through them all here, but a few examples are crop selection, so
[39:33] they're very important to ag. Uh, water ice rentals, they're important to, you know, the the water market. Um, they're
[39:39] heavily used in hydropower, uh, generation optimization and and revenue optimization. optimization. There are all like very specific legal
[39:47] and treaty obligations, uh, that are, you know, in management of transboundary waters that are driven very quite
[39:53] specifically, um, by WSFs. So, there's a whole bunch of implications of it. And if you want to try and put a dollar
[40:01] value on it, it's a little tough, but, you know, bear in mind that there's over a trillion, with a T, dollars of,
[40:08] uh, uh, of water managed annually in the Colorado Basin alone. And, uh, the ability to improve a water supply
[40:17] forecast um, even marginally can be valued at over a hundred million dollars a year in hydropower generation
[40:24] just in the Columbia Basin. So, it's important to get it right and to make it better. better. So,
[40:31] So, next question if you're especially not familiar with WSFs is how is this possible? You know, weather forecast can
[40:36] only reliably look out, you know, a few days, couple weeks at most. There's progress in S2S forecasting, but
[40:43] still we're kind of limited on that. So, how can you forecast water river volumes, volumes, river flow volumes
[40:51] looking at literally like half a year? And the reason is that there are lags between hydrometeorological forecasting
[40:58] and hydro hydrological response. So, and we're we're looking quite specifically in the western US and western Canada as well.
[41:06] In that region precipitation falls mainly in winter and mainly as snowfall especially in the mountains. And the mountain snowpack
[41:17] is forms effectively this gigantic reservoir reservoir that produce produces runoff the following spring and summer when it's most needed. So,
[41:28] snowpack data are essentially a powerful but not the only predictor or boundary condition in watershed hydrology models
[41:33] used for water supply forecasting. If you know what the snowpack is, you'll have a decent idea right off the bat of
[41:39] what the upcoming spring summer runoff is going to be. There's more to it than that, but that's kind of the foundation
[41:43] of it. So, what kind of data then do we use? Well, classically it's in situ data. So,
[41:49] these are manual snow surveys and there's a photograph of one here being run the by the California Cooperative
[41:55] Snow Survey as well as kilometer snow pillows such as SNOTEL. Um Um So, So, that's a little bit of the broad
[42:05] context. We'll kind of zoom in a little bit on the NRCS here. So, the snow survey water supply
[42:11] forecast program um um that's essentially been run by the USDA since 1930s. Uses both manual snow surveys and that SNOTEL network we just
[42:20] covered the last slide. And it's the largest standalone operational uh WSF system in the West. So, it uses a few
[42:26] different models, uh but the core method is principal component regression, which is a linear statistical method um introduced to water supply
[42:33] forecasting by um Dave Garen in the early 1990s. But NRCS is now transitioning to an AI-based approach
[42:41] called M4. Stands for multi-model um meta-system um machine learning meta-system. So, a little bit about that. Um so, it's
[42:51] it went operational at the NRCS I think two seasons ago now. Um it was built from scratch in a
[42:57] user-needs driven framework to meet key NRCS design criteria for an operational water supply forecast model. So, snow
[43:03] R2O is kind of O2R in a way uh and then back to operations. operations. Um if you're familiar with that those
[43:11] acronyms. So, what is it? Um it's a meta-system of six different data-driven forecast systems um that all work
[43:18] together and several of them can contain machine learning. So, um it used to uh something called a MYA design
[43:27] philosophy, most advanced yet acceptable. Uh so, kind of meeting the hydrologic community where they are and building what they need. Um which
[43:35] basically took the old system and hot rodded it. Uh you know, there's a lot of trust in that old system, um
[43:41] but there's also room for improvement. So, we basically uh just threw a whole bunch of very specific
[43:48] uh useful technologies in there including evolutionary um um uh computing, machine learning, some pretty sophisticated statistical methods
[43:57] and what have you. So, enough about the model. What about the data? So, we're not going to go into
[44:02] much detail about it cuz Carl's just gone over it and in uh a good a good amount of detail in the previous
[44:08] presentation, but just uh more from a modeling perspective, what are we looking at here? So, um to reiterate, you know, we're looking at
[44:16] the MODIS instrument aboard the Aqua and Terra satellites. Um MODIS data provides a basis for measuring snow covered area
[44:25] or fractional snow covered area. And it has a really and this is very appealing to an operational group, as a long
[44:32] history of use in river forecasting research and operations, both in the US and internationally. So, we're using a particular MODIS
[44:42] product here that Carl just reviewed. It's called the spatiotemporally complete or STC MODSCAG fractional snow covered area product,
[44:54] that's FSCA. So, why this particular product? You know, it's about picking the right tool for the job. And for this job,
[45:02] there's certain criteria that the USDA NRCS needed. One was a long record, 20 years or more. Um you need to have data within the
[45:11] first couple working days of every month cuz that's when the NRCS is obligated to get its water supply forecast out, so
[45:18] that has implications in terms of fast cadence and short latency of the remote sensing product. Continuity is also important. It's you
[45:27] know, nice to build a product, but it needs to, you know, keep on working going forward. So, the Aqua and Terra satellites are
[45:33] are near the end of their lifetimes, but continuity will be ensured via the VIIRS product. Um and
[45:41] of equal importance to all these other criteria, there can be no spatiotemporal gaps. That's just a big pain when you're
[45:47] trying to do something operationally. So, So, that particular data set really fit the bill. Now, how did we use it? Well,
[45:56] we developed a total of 220 models and a, you know, relatively exhaustive set of experiments drawn from the existing
[46:03] operational USDA NRCS forecast system. And to be clear, I should point out that when I did this work, this was a WAO
[46:10] national national NASA NASA Western Water Action Office WAO coordinated project with Carl through UC Boulder and myself when I was
[46:25] at the USDA. So this is, you know, a USDA product here. Uh though I am now at NASA. Um so I'll just throw that in
[46:35] there. there. Um just for clarity. So those outcomes obviously were interpreted from an NRCS operational perspective with no eye to
[46:44] when, where, and why that satellite data improved water supply forecast skill. So, what did these experiments consist
[46:51] of? Four different locations widely spaced across the Western US with very different snow regimes, very different hydrologic regimes, quite different
[47:01] water management concerns. Um Um lead times we looked at issue forecast dates from January all the way through June. For
[47:10] the most part, it varies a little bit depending on where you are. For example, for example, the Gila River in the far
[47:17] pretty far south in New Mexico. Different environment, different lead times and and forecast intervals or targets rather.
[47:28] Which hydrologic models did we use? We used that N-4 system I just described as well as the previous NRCS linear
[47:35] prediction model. And we used a whole bunch of different combinations of data. You know, just the SNOTEL snow water equivalent and
[47:42] precipitation data as in the existing operational system, just the MODSCAG FCA satellite data, um um aggregated either by total basin average
[47:55] or averages across a series of elevation bands. I won't get into the rationale for that at this point, but I'd be happy
[48:02] to discuss that later, as well as various combinations, mix, you know, mixing and matching these things. So, getting to some of the punchlines,
[48:10] don't worry, I'm not going to review these these rather, you know, busy graphs in detail here. But just a word about how we measure the
[48:19] water supply forecast benefit of satellite data. In the context of M4 and the, you know, the version of the linear model that we
[48:28] used as well here, there's kind of two sets of metrics. One is the percent improvement in both the deterministic
[48:35] and probabilistic forecast accuracy accuracy metrics. So, that's things like R squared, that's things like root mean square error, and it's also RPSS.
[48:46] Um Um one really important aspect of operational water supply forecasting is that in general, the end users of those products want
[48:57] estimates of the quantitative quantitative estimates of the uncertainty in in the forecast, not just the best estimate, but also estimates of
[49:05] the uncertainty in it. So, we also look at it from a probabilistic perspective, that's part of what the product
[49:10] generates, generates, and we want to assess how how well it does that. Um the other set of metrics is it
[49:18] relates to the genetic algorithm that was used in both of these models for feature optimization or predictor in
[49:26] a more classical statistical nomenclature. Um so essentially, on the basis of out-of-sample prediction scale, the genetic algorithm picks which
[49:37] predictors to retain in the model on the basis of their ability to improve the forecast. So, it's not just
[49:45] a kitchen, you know, everything in the kitchen sink kind of approach. You throw in a bunch of um,
[49:51] potentially useful things and the genetic algorithm decides which of them to keep. And looking which of those
[49:57] those predictor varies to keep gives you uh, information um, about the value of the satellite data, you know, whether
[50:04] it's retained or not. So, what are some punchlines? Uh, there are well, there are some obvious things
[50:08] that you would expect uh, irrespective of what kind of data you're using, you know, accuracy decreases with increasing
[50:14] lead time. Um, Um, and uh, in cases where any reasonable prediction skill exists, the AI-driven system generally meets or beats uh, the
[50:23] linear uh, model. Um, that's not news. That that already been determined in in previous work and it's
[50:30] part of the reason why NRCS adopted this model. model. Getting down to the nuts and bolts of it
[50:35] though, um, using the combination of both satellite data and uh, in situ data uh, often beats just using the in situ
[50:44] data alone. So, it's probably not too much of a surprise. surprise. Um, you know, in situ data is just
[50:49] measurements at a point in space. Even if you have several SNOTEL stations, still there's only just a few individual
[50:55] points in space and you're looking at the snowpack and you know, across much of a watershed. So, the satellite data
[51:00] fills in the gaps. Um, but SNOTEL actually provides snow water equivalent, whereas MODIS gives just provides snow covered area. So,
[51:08] having the two together improves the forecast. But, not in all cases. Um, and it kind of parses naturally into three
[51:15] seasonal time frames that I'll go over in the next slide. But, just to you know, under line the the the the the
[51:21] the punchline here is that integration of the satellite data into data-day production systems for water supply forecast modeling across the western US
[51:29] is advisable. That's kind of the the overall conclusion here. Um, so, punchlines, as I said, it kind of naturally
[51:39] segregated into three um, um, seasonal time frames. So, for short lead late season forecasts, um, you know,
[51:49] this is when you're getting into May and June and the snowpack's being depleted. Providing MODSCAG data alongside SNOTEL
[51:58] data to the model increased the accuracy substantially for most of the rivers. The degree to which a
[52:06] a an improvement was seen was, you know, kind of roughly proportional to how snowmelt dominated the river the
[52:12] spring-summer runoff is in that particular river, you know, not surprising. surprising. And that's as opposed to spring-summer
[52:19] rain inputs. And also how poorly the local existing SNOTEL network samples the late-season mountain snowpack. You know, as it becomes patchy or the
[52:27] snowline moves above, you know, the actual in situ network. We also found that the AI system and the
[52:34] linear system, although the AI system generally performed better, the percent improvements that were obtained from integrating satellite data in these
[52:43] late-season forecasts, in terms of percent improvement, was about the same between the two technologies. In the um medium-lead mid-season
[52:53] forecast, so this is around April or so, March-April, when the seasonal snowpack in the mountains is pretty much at its
[53:02] maximum. maximum. Neither model benefited from having the satellite data incorporated. And that's really a testament to how over
[53:14] the last century, literally, there's been so much experiential knowledge developed about how to design an in situ
[53:22] snow monitoring network, which is really kind of keyed around you know indexing what the peak snowpack is, that adding
[53:33] this kind of satellite data didn't help much. Now, other kinds of satellite data around snowpack, obviously other uh
[53:41] parameters, could still be useful, but we're just kind of looking at this particular project at the moment.
[53:46] What was also really interesting though is for those very long lead early season forecasts, and this is important uh
[53:53] because the longer the lead you get, the better. It's really important for things like drought planning in particular.
[53:59] Um Um again, where it's kind of like those short lead late season forecast, both models, both this linear statistical
[54:07] water supply forecast model and the AI-driven hydrologic model benefited from uh the use of that MODIS/SNODAS satellite data. Um there is one
[54:17] significant difference, and that's again, that's not surprising. Early season, potentially patchy snowpack, potentially um high snow line that the
[54:25] in situ, you know, monitoring network's not going to get. There's something more complicated going on though because the
[54:31] linear models in those early season forecasts, the linear hydrologic models weren't really able to leverage that additional
[54:38] information, whereas the AI-driven model M4 did. And that implies that there's some strong non-nonlinearity and/or interactions going on there that the
[54:47] machine learning can handle and the linear model can't. And there's some specific ideas around exactly what that
[54:53] looks like, but we'll just leave it at that for the moment. So, um there's a few other outcomes that
[54:58] I'll touch on briefly here. Um so again, our main punchline is that from an overall practical operational
[55:05] perspective, perspective, integrating that MODIS/SNODAS snow covered area data into um both the linear and in particular the machine
[55:13] learning-driven hydrologic models improved uh substantially the quality um of the water supply forecast, and that's that's worth a lot. Um and it's it's
[55:24] something that's operationally very doable. Um so, you know, it was it was a success from that perspective. But
[55:30] there's a couple other interesting things that came out of the study. One is that this combination of an in
[55:36] situ network a data-driven hydrological model with a predictor selection algorithm or feature optimization algorithm in the machine
[55:43] learning nomenclature, as well as satellite data with comprehensive spatial coverage, can in effect support um um site selection for expansion
[55:56] of that in situ network. Um so, it what we're looking at in this in this graph here is a particular river water
[56:05] the river. This is on the east side of the summit of the Sierra Nevada in California flowing into the Walker
[56:12] Lake Basin. Looking at a June forecast issue date. And we have we're looking at seven different elevation bands here.
[56:21] This is meters above sea level. Um just want to emphasize that the details vary between watersheds and lead times. This
[56:27] is just a particular example we're looking at here. And this bar graph shows I won't go into
[56:33] the details. We don't have time. But essentially it shows the degree to which M4, the AI-driven system, or principal
[56:41] component regression, the linear system, was able wanted to use um the satellite data. So, what we see is that at the
[56:53] intermediate intermediate elevations, kind of mid-elevations in the watershed, the the um linear and machine learning models both
[57:05] really really want to use that satellite data. What that suggests is that um and remember this is this is all in
[57:14] terms of a the accuracy of a water supply forecast model, which is adjusting adjusting and conditional on
[57:21] the in situ monitoring network. So, what this is essentially telling us is that it would be beneficial if we had an
[57:28] additional snow tail station at these mid-elevations mid-elevations uh spatial gap filling essentially as the snow line is either, you know, right
[57:36] well in this case it's a June forecast, so, you know, the snow snow pack's going to become a little bit patchy. But we're
[57:42] also seeing, particularly in the machine learning model, um um is um it's also retaining high high elevation band satellite data.
[57:54] Um you know, over over 3,000 uh meters there. there. Um which suggests that uh M4 is also
[58:01] using using um the satellite data to essentially chase the snow line uphill. So, it also makes sense then to have a
[58:09] higher elevation SNOTEL station uh up there if you were looking to improve your in situ network. Which NRCS is cuz
[58:17] they're also responsible for running the SNOTEL network. Um on another uh note, um you know, it was kind of interesting to see, well,
[58:25] what if we don't have an the opposite end of the spectrum. What if we don't have an in situ network at
[58:30] all? How good can we do just using the satellite data? Uh and this is a particular example from
[58:36] the Piedra River in the um upper color well, southern part of the upper Colorado River Basin uh
[58:43] watershed um headwater watershed up there. We're looking at the um non-linear model, the AI-based model, the you know, vaguely uh
[58:52] roughly similar results for the other models in other locations to some varying degrees. And what we see is that, yeah, you know,
[58:59] unsurprisingly having that in situ snow water equivalent information does help, but just using the satellite data, you
[59:08] can get some pretty, you know, serviceable R squares in your, you know, these are out of sample
[59:14] uh results for um water supply forecasting, and you can get some pretty pretty good results um pretty early in
[59:21] the season, certainly by uh March or April in particular, um um just using that satellite data. So, that
[59:30] is potentially a useful thing to have in your pocket if you're working in some very remote areas or historically
[59:37] underserved areas, perhaps international development context, things of that nature where these very pretty expensive not so much to install to some degree,
[59:48] but also to maintain these in situ networks. It can be tough to keep them going, keep them working well, all the
[59:54] support around you know, the data QC and storage and and dissemination and all that kind of stuff.
[1:00:01] stuff. Whereas you can just pull this NASA data basically off the internet or from Karl in particular
[1:00:07] using his his refined product and his data distribution systems and get a pretty darn good result. So, I'll wrap it up with that. I would
[1:00:16] be happy to take any questions and if you're interested in learning more about this particular example, it was published in an AGU Water
[1:00:25] Resources Research article. That's That's uh pre and open access as is the code. So, with that, I'll close it out.
[1:00:36] Thank you for your time. >> Thank you so very much, Karl and Shawn for your excellent presentations.
[1:00:50] Just to summarize what we saw today, we give you two spectral mixture analysis or SMA approaches to determine
[1:00:59] snow cover, snow grain size, snow darkening from light absorbing particles, and snow albedo. These two methods are specially and
[1:01:07] temporally complete snow cover and grain size or STC SKAG, and snow property inversion from remote sensing or SPIRES.
[1:01:17] As Karl mentioned, both these SMA methods, uh are more accurate than normalized difference snow index. Then, we talked about snow today.
[1:01:28] Snow today runs accurate SMA algorithms daily with 24-hour lag to produce gridded and summarized data in the
[1:01:35] context for water year 2001 to present year and focuses on the Western US. And it will continue
[1:01:44] uh working on VIIRS data in preparation for MODIS Terra decommissioning in near future. This is the site we had a
[1:01:52] demonstration of snow today. Then, we saw application of STD MODSCAG for water supply forecast or WSF. We saw an overview of multi-model
[1:02:06] machine learning meta system or M4 model for water supply forecast using STC MODSCAG snow fraction and SNOTEL snow
[1:02:14] water equivalent data. And results indicate that integration of STC MODSCAG fractional snow cover area for WSF modeling in the Western US
[1:02:26] improves the forecast in most cases compared to SNOTEL data alone, particularly for long lead early season forecasts when M4 is used.
[1:02:38] For basins where the spring summer runoff is dominated by snowmelt, using MODSCAG with no in situ data may provide
[1:02:46] serviceable short and medium lead uh what's um supply forecast. That's a very important point where there are not
[1:02:54] sufficient in situ data. This brings us to the conclusion of today's uh session as well as this
[1:03:04] webinar series. And we just want to summarize what we saw in these three parts. Uh we started uh by looking at
[1:03:13] importance of snow and ice. They play a crucial role in Earth's water and energy cycles. cycles. Uh snow stores water for days to months,
[1:03:23] while ice stores water for hundreds to tens of thousands of years. And uh then uh we focused primarily on
[1:03:32] snow data products and properties, and we really did not talk much about the ice products in this webinar series
[1:03:41] uh for two reasons. First, uh the focus was mostly on a shorter time scale where snow melt and snow water equivalent
[1:03:49] contribute to um water supply. And then uh there is a lot more information about land and sea ice
[1:03:58] that we plan to do in future. So, we focused on these snow products and properties, uh snow covered area, snow
[1:04:06] thickness, snow water equivalent, and snow albedo, grain size, and impurities. Um and then I also want to point out
[1:04:15] that ARSET did conduct a training on sea ice uh using SAR, and the link is provided here for your information, and
[1:04:23] we will offer a separate training on land and sea ice products in the near future. We reviewed uh remote sensing missions
[1:04:34] um and uh sensors. So, for different temporal coverage and special coverage, they provide um snow data. Uh we saw
[1:04:44] that passive microwave and visible and near infrared spectral measurements are used, and for your reference, satellites and sensors are listed here with their
[1:04:56] corresponding temporal coverage. We talked about snow data products, so snow cover and normalized difference snow index available from MODIS and
[1:05:06] VIIRS at multiple special and temporal resolutions. resolutions. Talked about snow water equivalent available from AMSR-E and AMSR-2.
[1:05:16] An improvement to standard MODIS snow products products by using MODSCAG TRFS and SPIRES. We saw that also. And
[1:05:26] then talked about airborne data from airborne snow observatory and SnowEx products. NSIDC provided an overview of their
[1:05:39] website as well as tools for data search, search, temporal and special subset and download by using Earthdata Search and APPEARS.
[1:05:52] And we had snow data analysis and visualization using QGIS. Example here is shown for MODIS NDSI and
[1:06:02] this is ASO and SnowEx snow depth focusing on Grand Mesa in Colorado as a case study. We saw several applications of snow
[1:06:13] data. data. We saw monitoring variability of snow in Alaska for National Petroleum Reserve of Alaska in Arctic National Wildlife
[1:06:22] Refuge for decision making which used MODIS snow cover and also SWE data. Then we saw snow today monitoring
[1:06:34] mountain snowpack and there are several applications of that. SDC MODSCAG in particular we saw water supply forecast using M4 for Natural
[1:06:43] Resources Conservation Services. Then we saw real-time snow water equivalent derived from fusion of fractional snow cover area and
[1:06:53] ground-based snow water equivalent and assessing snow melt for Colorado Basin River Forecast Center. This brings us to the end of today's
[1:07:04] presentation and before we conclude today's session and go to question and answer part, um here is one more NASA
[1:07:12] web tool that we thought would be useful to know about and that is NASA Worldview. Worldview. Uh this tool allows near real-time and
[1:07:20] past data exploration and visualization. It allows uh searching for a variety of NASA geophysical data products including
[1:07:29] some of the snow data products we saw during this webinar series. And so, what I'm going to do is quickly
[1:07:37] uh show this tool how to use it that you can explore uh at your own convenience. I'm going to share my screen and go to
[1:07:45] this tool. This is the Worldview site. And once you go to this website, you will have um
[1:07:52] description of the site as well as you can look at several case studies to learn more about Worldview features. And
[1:08:00] these are tutorials, but basically it allows visual exploration of past and present satellite imagery for a variety
[1:08:08] of data sets. Here uh this I allows you to explore more features. And here you can start
[1:08:16] using Worldview. That's what we're going to do and uh look at some of the snow products we've looked at earlier.
[1:08:23] Here on the left-hand side, you have several layers. Reference uh is so you can turn these uh layers on or off by
[1:08:31] clicking here. So, these are place labels. These are coastlines, borders and roads. And these are base layers.
[1:08:42] These are true color images from uh VIIRS and MODIS from different satellites. And the one that's shown
[1:08:49] here is from Terra MODIS. This is a true color image. You can see land, ocean, cloud, etc. You can turn that off and on
[1:08:57] and these layers as well. Here's the timeline to explore data from near real time to past data and you can
[1:09:06] navigate by clicking on this arrow or by changing dates or months or years. And so this is the time selection
[1:09:18] bar. And let's go to uh winter season so we can look at snow products. products. Okay. Okay. Uh now to explore different data sets
[1:09:30] you would go to add layers here and click on that. And this opens this window with a number of options by thematic areas.
[1:09:41] You can search different parameters, but let's focus on snow. Go when you type data that you're looking for,
[1:09:51] um it searches and provides a list of all the data sets available for that particular parameter. So here you see a
[1:09:58] number of um snow parameters. Uh let's look at what we saw earlier from Terra and Aqua Modis. So here you
[1:10:07] can see um um normalized difference snow index or NDSI from Terra Modis, from Aqua Modis, um and of course there are monthly and
[1:10:18] daily data. As you go down, this is snow extent. extent. Snow cover again, this is from NOAA-20
[1:10:26] years. Um and this is snow water equivalent from AMSR2 that we saw earlier um in part two of this webinar
[1:10:37] series. So to select these layers, I'm just going to show a couple of examples. So let's start with uh Terra Modis
[1:10:46] um um NDSI and we can pick daily data here. So um this is NDSI. Click here to select the layer and that
[1:10:57] is visible now on this map that we look at. If you click here, you will get information about this product and
[1:11:06] appropriate reference for that product. Let's look at one more parameter and that is snow water equivalent again
[1:11:14] daily from AMSR2. We turn that on. And if you see this symbol, that shows that you can do a time series in
[1:11:24] addition to map. So, let's look at the maps first. Here you can see that you have snow
[1:11:33] cover or NDSI and that's from 1 to 100. This is Terra Modis and this is AMSR2 what's snow water equivalent in
[1:11:43] millimeter. millimeter. You can turn the base layer off just for clear view of snow. And let's even turn snow water
[1:11:53] equivalent off. So, this is NDSI for 1st of January 24. Let's go to 25. So, here you can zoom in to the region of your
[1:12:04] interest. These are global data, so you can zoom in to other regions as well. Especially Especially in the northern hemisphere winter you
[1:12:15] can see the snow in the higher latitudes and at higher altitudes. altitudes. You can explore that. You can turn snow
[1:12:23] water equivalent data on and as you can see now, this is the scale and you can move this layer
[1:12:36] also. So, let's see. Yeah, you can move so you can clearly see NDSI and snow water equivalent. Each
[1:12:48] of of these layers can individually be customized. Uh different transparency, different color uh color options, and different thresholds or uh values can be
[1:13:00] chosen. And you can look at tutorials to learn more about that. But basically, we wanted to show that uh
[1:13:08] you can quickly explore a number of data sets, and you can visualize. Uh here there's animation feature.
[1:13:16] You can select So, this is 1st January to 11th January. You can change uh uh uh range here time range here, and then
[1:13:28] animate data. And you can see that uh data are animated. You can see how snow features are evolving during this period, and you
[1:13:38] can do do this for longer time period as well. So, this is a very nice tool that
[1:13:44] allows you to explore and visualize data. Uh and if you go to data download here, here, after viewing and selecting what you
[1:13:55] want, uh it again takes you back to NASA's Earth data search, and then you can follow the procedure that we saw
[1:14:02] earlier in in the webinar series how to download the data. But this is a nice way to look at the different parameters
[1:14:11] uh simultaneously. Just a note about uh homework once again. Uh it's posted today on the training web page, and answers must be
[1:14:24] submitted via Google Forms. Uh it will be due on 21st of August. And certificate of completion will be
[1:14:32] awarded to those who attended all three live webinars, complete the homework assignment by the deadline, and the certificate will be
[1:14:40] sent to you via email approximately 2 months after completion of the course. With that, we really want to thank all
[1:14:51] our guest speakers for sharing their expertise and contributing to this training webinar. Uh especially National Snow and Ice Data Center NSIDC and
[1:15:01] uh Western Water Section Office WSWO. Um so, specifically, we had our speakers Andrew Barrett, Walter Meier, Ryan
[1:15:10] Terrer, Michaela Big, Saber Brutscher, Diane Fritz, Karl Rittger, and Shawn Fleming. Um thank you all for your
[1:15:18] contribution. And uh as we go to the question-and-answer session, please feel free to provide any additional comments
[1:15:27] you have. This is ARSET contact information uh for us, and this is ARSET website and YouTube link for uh reviewing all the
[1:15:38] presentations, and recordings will be posted there as well. Um also, join our quarterly newsletter to stay up-to-date on our latest
[1:15:46] training. Uh you can send an email to this this address with no subject line and follow the instructions sent in response, and
[1:15:57] uh you will join our listserv and receive information about upcoming ARSET trainings also. Thank you all very much for attending
[1:16:07] this webinar series, and we will go to the question-and-answer session now. Start with our question-and-answer session, and thank you again uh to all
[1:16:18] our guest speakers and to all of you for attending uh today's uh webinar session. Um Um So, to start with, um
[1:16:31] question one, we'll go through a few questions here. Um question one, how does grain size estimated from the SCAG
[1:16:38] model compared to grain size derived from Landsat only data and is there a known method or empirically empirical
[1:16:46] relationship to convert Landsat derived grain size estimates to actual in situ grain size measurements. >> This is Carl. I'll go ahead and jump in
[1:16:59] here. So, just to clarify, um SCAG is a model, the snow covered area and grain size model that can be
[1:17:06] run on any multi-spectral satellite data. data. So, you know, the ones that we typically uh uh do are from MODIS or VIIRS of those
[1:17:17] daily estimates. And Landsat is higher spatial resolution, so uh presumably we could get slightly more accurate answers from Landsat, but to
[1:17:27] date I'm uh sort of unaware of anyone who's actually compared grain sizes across across um satellites. I think it's definitely
[1:17:34] something important to do as we move to fuse the higher spatial resolution data to the higher temporal resolution data.
[1:17:43] Um Um and I guess uh um and in terms of comparing to in situ grain size measurements,
[1:17:53] I think some of that work has been done. Uh the the main difference is that the grains that you're
[1:17:59] measuring uh in the field uh might not be spherical, which is the assumption made in the model, so you could see some
[1:18:06] differences because of different grain shapes. shapes. Um Um and and the um I guess other other models that I
[1:18:16] talked about SPIRES, but also a uh sort of simpler NDGSI or normalized difference grain index can also be used
[1:18:25] to estimate grain sizes. So, there's a a few different ways to to do that and you might see differences based on the
[1:18:32] on the grain size or on the uh on the shape of the of the snow grains. Um
[1:18:40] Um I'll go ahead and just move on to question two. So, um is snow today only for the lower 48
[1:18:47] states? What about Alaska, Canada? So, um um we've got the system working really well for the Western United States, and we
[1:18:57] started producing data for Alaska and Canada that we hope to add to snow today um before sort of the next snow season
[1:19:06] gets going. Um so, we're sort of validating that data in Alaska. There's quite a bit more cloud cover than many
[1:19:13] parts of the Western US. Um so, that's challenge a challenge. So, we've made some edits to the SPIRES model to try to
[1:19:20] account for that. Um so, yeah, stay tuned. Please check in. Feel free to contact us at NSIDC or
[1:19:27] myself about uh those data sets uh which we hope to publish in the coming months. >> Thank you, Carl. And question three, um
[1:19:36] which snow parameters are measured in field campaigns, and what are typical tools for those measurements? What temporal and spatial frequency do we
[1:19:45] typically get from such measurements? >> All right. Well, this one we could probably talk about for quite a while.
[1:19:53] Um I did write down some things here which I might expand upon when I have a little bit more time.
[1:19:58] Um you know, it sort of depends um the field campaign and what the goals are and who's funding that work. But, I
[1:20:04] would say the most typical information sampled is the snow water equivalent. Um manually, that's done through digging
[1:20:11] snow pits where you measure both the depth and the density of the snow throughout the column. And that's a very
[1:20:18] accurate way to measure the snow water equivalent. And typically, water supply forecasters, you know, think snow water
[1:20:24] equivalent's the holy grail of snow information. So, this is why this measurement's done most frequently. Um federal or samp federal samplers, which
[1:20:32] are tubes that can also be used to more quickly measure the snow water equivalent um, are also used. Um, that's
[1:20:40] just faster than digging snow pits. Um, the NASA SnowEx campaign was one of the largest uh, field campaigns in
[1:20:48] recent history and um, NASA supported the Clipex field campaign before that. So, these are two really large field campaigns.
[1:20:56] Um, in the most recent SnowEx um, they did measure um, snow water equivalent with lidar and radar as well. And this is in an effort
[1:21:06] to sort of uh, prove the technology and algorithms so we can move to a space-based estimate of snow water
[1:21:12] equivalent. Which we cur- currently do not have. Um, snow wetness or snow water content is also something that people
[1:21:19] are interested in. It can tell you whether the snow is melting. Um, so that can be done using lysimeters
[1:21:24] that I data I'd say is probably uh, few and far and between. Um, often the energy balance is measured. So, this
[1:21:32] involves um, sort of different sensors uh, on the ground that can measure incoming and outgoing uh, shortwave and longwave radiation.
[1:21:43] Um, the other two components of the energy balance often used are the sensible and latent heat which depend on
[1:21:49] air temperature and vapor pressure. So, uh, often those are measured if possible as well. Um, in alpine environments it's
[1:21:58] the solar radiation driving most of that uh, snow melt and energy balance. But in forested areas or high latitude areas
[1:22:06] um, other components can become much larger. larger. Um, Um, so, so, yeah. I guess that's the main things
[1:22:15] that I can think of. I provided some links to the SnowEx campaigns and data at NSIDC from that. Uh, NSIDC also has
[1:22:23] the Clipex or CLPX data sets from a really large field campaign. Um Um >> Yeah, thank you so much. This is very
[1:22:32] informative and then question four also is to follow up. How much of a limiting factor are these field measurements on
[1:22:40] greater watershed models? >> I will I had hoped Sean might jump in here for this one. I'm not sure if he's
[1:22:49] here. here. Um Um I do less of the watershed modeling. Uh I think point measurements have been
[1:22:56] used used um um Let's see for a really long time. Um Sean, do you want to You want to take
[1:23:06] over on this one or >> Yeah. Yeah. So, um it depends what you mean by field measurements. So, if you're referring to
[1:23:14] in situ measurements uh from monitor ongoing monitoring networks, um if that's what the question is referring to, um then we're talking
[1:23:23] about the things that Carl just mentioned. Um so, that's primarily manual measurements uh using that federal sampler, um which is a
[1:23:32] uh actually quite effective and accurate way of doing it, but it can only be done maybe once or at most twice a month just
[1:23:38] cuz of the logistics of getting up into the mountains and actually doing that. Um the primary source of data used in
[1:23:46] watershed models on snowpack uh conventionally is from telemetered snow pillows. Uh so, across most of the US, that's
[1:23:57] SNOTEL, which is run by US Department of Agriculture. In uh most of California, um that's the California uh Department
[1:24:05] of Water Resources. Um in Canada, there are other groups that do it. It's also done in in Western
[1:24:10] Europe by by various uh various groups operationally. operationally. So, um those provide actually really good information that's
[1:24:21] quite hard to beat in terms of um um the kinds of practical pragmatic things that one would typically look for from
[1:24:29] an operational uh stream flow model. Um and part of the reason for that is that there's been literally like a
[1:24:37] hundred years of experience using these things and knowing where to take those measurements. So uh snow and to take a
[1:24:44] step back, SNOTEL measurements are and and what uh California Department of Water Resources does and what other
[1:24:50] agencies do in terms of their kilometer data that's so for those of you who don't know I have no idea what what what
[1:24:57] your your level of knowledge about this is or isn't so I'll I'll just go through it. A snow pillow is basically like a
[1:25:03] balloon almost um and it's filled with antifreeze and it basically this hooked up to a transducer and it's just sitting there on the
[1:25:11] mountain mountain essentially weighing how much snow is on top of it um and then sends that data
[1:25:16] back back um on a very frequent basis. So we have a really temporally high resolution data record. So
[1:25:23] uh that having been explained using uh there's been a a long um um record uh track record uh figuring out
[1:25:31] where to put these SNOTEL sites or these manual uh snow survey sites is typically kind of mid elevations forested areas
[1:25:39] with a little bit of a clearing and just on the basis of working that out over the last hundred years um they found
[1:25:47] ways ways these kinds of sighting protocols lead to data that serves as a pretty good index for the total amount of snow water
[1:25:56] equivalent in that watershed. Um particularly you know at the peak which is you know in the western US that's
[1:26:04] kind of March maybe early April something like that. Um and then simply using that data and and watershed models
[1:26:11] really works pretty well. But um we're really bumping up against some limitations to that. So, you don't
[1:26:18] know what's happening in between these in situ stations, um um and that becomes particularly problematic um if the snow cover like
[1:26:27] early and late in the season, you know, when the snow cover is patchy or when the snow line's above the uh SNOTEL uh
[1:26:33] site or above where the fixed manual measurement site is, in which case you have absolutely no information about
[1:26:38] snowpack. So, that is where remote sensing becomes a really, really powerful tool. Um and basically whenever it's added to uh and it generally is
[1:26:49] used in addition to those uh in situ measurements, measurements, um um it really, really helps with the
[1:26:55] watershed models. Um and it's also really important for more fundamental scientific research that you might do using these watershed
[1:27:02] models to really understand detailed watershed processes. >> Thank you, Sean. >> I'll also just jump in and say, you
[1:27:10] know, as the water supply becomes more constrained with higher use, we need our models to perform better,
[1:27:17] and that's one of the reasons we're sort of hoping to uh utilize as much satellite data as possible
[1:27:24] um moving forward. >> Mhm. >> Great. Thank you. Um question five um is what is the feasibility of using uh MODIS Terra and
[1:27:36] MODIS Aqua to study the Antarctic area? How to treat data? >> Yeah, so, you know, as you move towards
[1:27:45] the polar regions, the sun is lower in the sky. So, it can be more challenging uh to use these optically based
[1:27:53] satellites to estimate, you know, snow surface properties like snow cover, snow albedo, and other things. Um the models
[1:28:02] we have do account for the lower sun angle, so spectral mixture models um use different spectral libraries um to
[1:28:10] account for that lower sun angle. And the NDSI method, um, divides by the sum of the reflectance in the two bands that
[1:28:19] are used to sort of account for the fact that it's a bit darker there. Um, so the
[1:28:24] data is usable in these regions, but, um, there's often, you know, periods of very low light, which could be edge
[1:28:31] cases. And then, of course, there's periods where, uh, you know, there's 24-hour darkness or just darkness when
[1:28:37] the satellite's going over, uh, if it's early in the morning. Um, MODIS, uh, Terra goes over at 10:30 in the morning,
[1:28:45] and MODIS Aqua goes over about 1:30 p.m. So, Aqua could be better for, um, some of those, uh, edge cases, um, you know,
[1:28:56] mid-season before the sun's a bit higher in the sky. Um, so, yeah, I think and there are some
[1:29:02] studies showing the accuracy of of these methods as well. Um, I will try to add, uh, that study to this question as well.
[1:29:09] Thank you. >> Wonderful. Thank you so much. Thank you, Carl and Sean, both for today's presentations and, um, answering all the
[1:29:17] questions. Uh, we're almost at the end of our webinar time, and so we thank everyone for attending this session. And
[1:29:25] once again to all our guest speakers, um, also want to thank our ARSET team, our coordinator, uh, Selene Hudson Odoy
[1:29:33] and Brock Blevins, uh, then editors Sumonthi and Jonathan O'Brien, and our helpers, Sarah Cutshall, uh, Maria Marabito, and, um, um,
[1:29:45] Natasha Johnson Griffin. Uh, so, on behalf of myself and Sean McCartney, uh, we thank you all for attending this
[1:29:53] webinar series, and we hope to see you, um, in our future training. If please join our listserv, uh, through the email
[1:29:59] address provided. And just one more note about, um, a survey that you will receive you email. Uh, at the end of each training we do uh
[1:30:09] send a survey out to get your feedback um how we can improve, what else can we include, or what different topics that
[1:30:17] you might like to see in a training. So, please take a few moments to complete the survey when you receive it.
[1:30:23] Uh and uh thank you all again.
