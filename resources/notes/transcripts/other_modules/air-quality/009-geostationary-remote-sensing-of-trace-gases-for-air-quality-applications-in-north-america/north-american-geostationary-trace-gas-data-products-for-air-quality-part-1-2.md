# North American Geostationary Trace Gas Data Products for Air Quality, Part 1/2

`https://www.youtube.com/watch?v=3zlqrftGU7c` · id 256 · 1:35:05 · module 26 — Geostationary Remote Sensing of Trace Gases for Air Quality Applications in North America

[00:02] Welcome everyone to our ARSET training series geostationary remote sensing of trace gases for air quality applications in North America. Today is part one of
[00:11] our training series North American geostationary trace gas data products for air quality. My name is Christina Piston. I am a research scientist at the
[00:20] Bay Area Environmental Research Institute and NASA as in the California Bay Area and I am the ARSET lead for
[00:28] this training. Before we begin today's training, I'm just going to say a quick few words about the
[00:34] RSET program. The NASA applied remote sensing training or ARSET program provides cost-free training on the use of remote sensing
[00:44] observations, analysis methods, and tools. We provide training in several thematic areas including agriculture, climate and resilience, disasters,
[00:53] ecological conservation, health and air quality, water resources, and wildland fires. ARS provides trainings both online or in
[01:06] person. Our online trainings are delivered in two formats, live and instructorled like today's training or asynchronous and self-paced. Like NASA's
[01:15] free and accessible data, all of our trainings are offered at no cost and we only use no cost and open source
[01:21] software and data. We try to offer trainings in more than one language whenever we can, including a spa a
[01:26] planned Spanish version of this training later this year. We offer our trainings at a range of levels, so you can find a
[01:32] training series that will fit your level of experience and need. Please visit us at our website to learn more.
[01:39] We'll start today by giving an overview of this training series, geostationary remote sensing of trace gases for air
[01:45] quality applications in North America. The tropospheric emissions monitoring of pollution or tempo mission represents a new capability of hourly monitoring of
[01:56] trace gases across North America. It is the first space-based hyperspectral instrument to continuously measure daytime air quality over North America
[02:05] from the Atlantic Ocean to the Pacific and from Central Canada to southern Mexico. These data are essential for
[02:12] understanding dal changes in air quality and monitoring real-time movement of pollution pollutant plumes such as wildfire and urban emissions. This
[02:21] training will provide an overview of tempo capabilities and available trace gas data products and will illustrate how tempo data can be visualized using
[02:29] the NASA worldview online tool. Tempo's capabilities will be demonstrated through hands-on case studies using the tempo data and participants will learn
[02:37] how to interpret the tempo observations for understanding of the scope and potential air quality impact of some
[02:43] common scenarios. By the end of this training, attendees will be able to describe the basic characteristics of tempo and its
[02:55] benefits and limitations compared to other air quality relevant missions and instruments. Identify available trace gas data products from Tempo and their
[03:02] associated characteristics. Visualize hourly tempo trace gas data products using NASA Worldview for current and historical events. Evaluate tempo trace
[03:13] gas products in Worldview to anticipate short-term air quality risks such as high concentrations of ozone precursors. Distinguish uses for tempo trace gas
[03:21] data products given cloud and solar zenith angle thresholds. and determine the spatial patterns, temporal trends, and likely sources of trace gases
[03:30] related to wildfire, smoke, and urban area air pollution events using tempo data in worldview. As a prerequisite to this course, we've
[03:40] recommended that you take our fundamentals of remote sensing training to familiarize yourself with some terminology and concepts that you might
[03:46] hear in today's training. Some examples that are important in today's training uh include what is meant by spatial and
[03:53] temporal resolution of a sensor, the differences between level one, level two and level three of satellite data
[03:59] products and the characteristics of satellites in geostationary orbit. This training will take place over two days with part one which is today. We
[04:09] are covering uh North American geostationary trace gas data products for air quality. Uh it's offered in two
[04:16] sessions at two different times as you can see here. Uh part two will uh be two days from now covering case studies and
[04:23] trace gas monitoring with North American geostationary sensors uh at the same times on that day. After part two, a
[04:31] homework assignment will be posted on the training web page and a certificate of completion will be awarded to
[04:36] participants who attend all live sessions and complete the homework assignment before the given due date. And with that, we're going to get into
[04:46] part one of this training. First, a brief introduction to who we are. As I said earlier, my name is Dr.
[04:53] Christina Feone. I am a research scientist at Barry. And with me today is Dr. Erin Nagger, the tempo mission
[05:00] applications lead at NASA Marshall Space Flight Center. The objectives of part one of this training. Uh by the end of this part
[05:09] attendees will be able to describe the basic characteristics of tempo and its benefits and limitation compared to
[05:14] other air quality relevant missions and instruments. Identify available trace gas data products from tempo and the associated characteristics.
[05:22] Distinguish uses for tempo trace gas data products given cloud and solar zenith angle thresholds and be able to
[05:28] visualize hourly tempo trace gas data products using NASA worldview for current and historical events. some brief logistics for how to ask
[05:38] questions. Uh please feel free to put your questions in the questions box and we will address them at the end of the
[05:43] webinar. You can enter them as we go. Uh we will try to get to all the questions
[05:47] that we can during the Q&A session. Uh but the remainder of the questions will be answered in the Q&A document which
[05:54] will be posted to the training website about a week after the training. And with that, I will turn it over to Aaron.
[06:04] >> All right. All right. Well, thank you Christina for that introduction. Now, we're going to dig into an overview of
[06:10] the Tempo mission and instrument and its capabilities. A few slides here. Uh the Tempo mission, uh the major goal here is
[06:17] to provide high resolution observations or measurements on air pollutants across greater North America every hour during the daytime. And uh some of the key
[06:27] objectives here are to deliver revolutionary air quality data to the community and the public, improve air quality forecast and alerts, better
[06:37] understand pollution sources, better inform policy and regulation, and enhance health studies from pollution exposure estimates. uh to the right I'm
[06:48] sharing uh a few of the key uh products or um observations from tempo including nitrogen dioxide format and total ozone
[06:57] and those math are showing also the tempo um field overg guard as we call it as well there in red and at the bottom
[07:05] left u I'm showing a really nice image uh a nice picture of our tempo instrument when it was completely
[07:12] integrated on our satellite IS-40E prior to launch A few quick facts on the tempo mission. It was NASA's first earth venture
[07:22] instrument selected in 2012 and it's a joint project with the Smith Smithsonian Astrophysical Observatory. Uh it is a
[07:30] hyperspectral auto ultraviolet visible spectrometer that is sensitive to policy relevant trace gases and aerosols. And to the bottom right here is a figure
[07:42] showing the um observation area that Tempo um performs in. So it performs on two different detectors in the
[07:50] ultraviolet and visible. So, we're seeing these 290 to 490 nanometer wavelength spectrum and 540 to 740 nanometer wavelength spectrum where
[08:01] Tempo provides these very high spectral resolution observations to get at key information on these air pollutants uh
[08:09] shown here and the Tempo field regards greater North America. The standard coverage of tempo is shown in the black
[08:18] area here. And uh however tempo is able to go outside those bounds. There's a max fiddle regard coverage shown here in
[08:25] purple. We've done some test with moving tempo outside the standard domain. But of course our standard normal
[08:33] observations were done within the black area shown there. Um, Tempo was launched into geostationary Earth orbit on a Spac
[08:41] X rocket to its current longitude at 91 degrees west on April 7th, 2023. Tempo's first light or Earth
[08:50] observations were done on August 2nd, 2023. And we had a long a fairly uh six month about commissioning phase which
[08:59] was successful and then led into our nominal operations phase of the mission which we're currently in. Um and that
[09:06] occurred on October 19th, 2023. And um we are currently our mission is currently funded funded and extended
[09:14] through September 2026. Of course, tempo can be up there 10 plus years uh depending on funding down the road. So
[09:22] um here's a nice picture too of the SpaceX lao launch on the SpaceX rocket um on April 7th, 2023.
[09:35] So during the pre-launch phase of the mission, we um definitely did discuss the core applications of tempo with our
[09:44] early adopter community of the mission. And this was a diagram that the science and the early adopter community kind of
[09:51] built during the pre-launch phase of the mission. You can see that the core applications definitely uh center around
[09:58] air quality, air quality modeling and forecasting, air pollution emissions and monitoring. Uh we have a large uh number
[10:05] of stakeholders in the air quality management community and also a pretty long list of early adopters involved in
[10:12] public health applications of tempo. Um additional application areas um include vegetation and ocean monitoring and weather analysis and forecasting.
[10:22] All All right, this slide here is showing the tempo's footprint size across the tempo of field regard. Uh top figure here is
[10:30] showing the east to west pixel size in kilometers. Um and the north south pixel size in kilometers. And as we're seeing
[10:39] here, we have very fine tempo footprints or high spatial resolution uh from tempo across much of the field regard. We lose
[10:48] some of that information content as we go farther north in the field of regard especially in the northwest and
[10:54] northeast corners but altogether very high spatial resolution. This table to the right shows different locations across the field regard and the tempo
[11:05] footprint size tied to those locations. So key take-home message here is again when you go further north in the temple
[11:13] field regard like Juno Alaska Canadian oil sands you have larger footprint sizes. If you go farther south for
[11:20] example over in Mexico City we have fine scale pixel sizes. So there are some variations throughout the tempo regard.
[11:29] And here's a map zoomed in showing the tempo footprints in by these red boxes here, red polygons, and um showing the
[11:38] spatial coverage of tempo across the LA area. So you can see we're getting a lot of information content, spatial
[11:45] information on air pollutants across the LA area by having this type of spatial resolution or footprint size across
[11:53] these urban areas. Now zoom into New York City or the New York broader New York area and again getting a lot of
[12:01] different uh tempo footprints that can retrieve information on air pollutants across the New York area and showing how
[12:07] tempo can observe these uh urban inter urban air pollutant gradients. And same picture here over a similar
[12:16] picture here over Mexico City. Of course we have even higher spatial resolution across Mexico City. So, we're really
[12:24] zoomed in here and showing the large number of tempo footprints that we're able to um that we have over this region
[12:31] of interest to the south of the field of regard. regard. All right. Now, we're going to dig into
[12:38] uh some actually showcase some tempo data here and look at our um how tempo performs at scans across the field
[12:46] regard. regard. This is an example on July 26, 2024 where we had our nominal operations performing. And this is tempo
[12:57] tropospheric NO2 data shown in this animation where we're seeing how these nominal operations consist of both these
[13:05] standard hourly daytime scans where we're gathering data across an entire field guard and also these optimized shorter scans that we're seeing here
[13:14] later in the afternoon across the west. So we see the same picture here across the east in the morning where we have uh
[13:23] only daylight in that region. So we're performing the tempo operations in that region, the optimized scans. Then we
[13:29] move to the standard operations and then back to the optimized operations in the west in the afternoon. So that's kind of
[13:36] the day in the life of tempo in terms of making us observations. And we also had a special uh component
[13:44] of tempo where we can zoom in to areas of interest and perform tempo special operations. So, this was a 4-day time
[13:54] period from January 16th to 19th, 2025 where we performed these very high resolution 10-minute scans across the
[14:04] West Coast of the US and then went back and forth between our nominal hourly operations and our special operations
[14:12] throughout the day. And we did this for a 4-day time period. So, this is another really unique component of Tempo as
[14:20] well. This was done right after the large LA wildfires that occurred in January 2025. So if we zoom in to that LA basin area,
[14:31] and this is kind of when the wild wildfires kind of died down, but there's still smoldering from the wildfires. And
[14:38] this animation to the left is showing though the propospheric NO2 that was collected during those special operations and the high variability in
[14:49] NO2 columns that were observed across the LA basin region. And when taking a look at the time series information here
[14:57] for two days from January 16th through 17th and taking a location of interest within the location of the Palisades
[15:06] wildfire, uh we're seeing how during this smoldering time period of the wildfire event, we're capturing this NO2
[15:14] dal variability which is not quite captured by the uh standard normal observations shown here in black. So
[15:22] these blue the blue line here blue dots are showing the addition of the special operations over the region compared to
[15:29] the normal standard observations. Now down here to the uh bottom right, we're showing an area in downtown LA
[15:38] where again we observed the stronger variability and NO2 variability in downtown Los Angeles uh during the morning of January 17th was not captured
[15:49] by our tempo standard scan. So again, the addition of the special scans helped um collect more information on NO2.
[15:58] And you can actually go to our tempo operations log through this QR code here and find the
[16:05] days when these special operations occurred. And here's a screen capture of part of that operations log and where
[16:14] the special operations that were done for the LA region from January 16th through 19th were done. So you can kind
[16:21] of find that in the operations log along with the other special operations that we've done to date.
[16:30] All right. So now we're going to discuss a little more detail on the Tempo trace gas products in the following slides
[16:39] and first showcase how Tempo observes these trace gas pollutants that we provide from the mission. And the key
[16:46] variable the key input here is the ultraviolet to visible radiation from the sun. Tempo requires sunlight to uh
[16:54] make observations of these trace gas pollutants. Um and which then we observe these top of atmosphere radiance shown
[17:03] here in this diagram and along with our retrieved slant column density information. And we combine that with sun and satellite
[17:12] viewing condition information to uh report or retrieve information on vertical column densities which are really the VCDs here provide information
[17:23] on the target trace gas of interest within a standard energized vertical column of the atmosphere. So we're
[17:31] seeing this is our key output and our key parameter that we provide in our tempo trace gas products.
[17:40] And how we do that going from our slant column to our vertical column information or data in the tempo
[17:47] retrieval process is done by first deriving our [clears throat] slant column densities from our measured top of atmosphere radiances that were shown
[17:57] in that previous diagram. And then we calculate vertical column densities using air mass factors. And these air
[18:06] mass factors are uh calculated offline using a ray of transfer model and input from a global 3D atmospheric composition
[18:15] model. And tempo in particular uses the Godd earth observing system composition forecasting system to uh put together
[18:24] these air mass factors. And this equation shown to the left is showing the equation where we have slant column
[18:31] densities in the numerator and this air mass factor variable which actually combines uh a large number of
[18:39] information um in the denominator which then deres or retrieves information on our vertical column densities. And shown
[18:47] at the bottom of the uh slide here are the NO2 slant column densities zoomed into the Pacific Northwest here and our
[18:57] NO2 air mass factors in the middle and our total NO2 vertical column densities on the right. The key message here is
[19:06] that you can see how our slant column densities from of NO2 are higher than our total NO2 VCDs. And that shows how
[19:15] this process from going from our slant column density to our vertical column density leads to lower VCDs as we're
[19:22] looking at the vertical column directly above the tempo footprint um compared to the um the slant column information
[19:30] that's shown here. And we also go a bit further with our tempo retrieval to derive tropospheric NO2 VCDs. So here is
[19:41] a comparison between our tropospheric NO2 vertical column densities and our total NO2. And as expected, our tropospheric NO2 VCDs are lower than our
[19:53] total column NO2 VCDs. And there was a wildfire that occurred during this time period. So this large NO2 plume in this
[20:00] map is tied to a large wildfire smoke event that occurred in North California. Now we go a bit to do this whole
[20:08] operation where we um derive tropospheric NO2 BCDs. We apply a stratosphere tropospheric separation technique in our temple retrieval
[20:18] process. And this method estimates the stratospheric NO2 BCDs based on the slant column densities, the air mass
[20:27] factors and the NO2 columns from the GOCF forecast. The stratospheric NO2 VCDs are then subtracted from the total column NO2
[20:39] VCDs to arrive at our tropospheric NO2. So, and note the different scale on these figures here. But to the left
[20:46] here, again, I'm sharing the total NO2 BCD map. Here's our stratospheric NO2 BCDs. Again, lower scale here. Much
[20:57] lower NO2 in the stratosphere in general. And then to the right, I'm showing the tropospheric NO2 BCD. So you
[21:05] can see here how we have these lower tropospheric column amounts compared to our total and how we go from our total
[21:12] to our tropospheric. And there's also quality assurance variables within the data files of tempo which I'll go over
[21:19] here in a minute to where we can filter lower quality or higher uncertain data. And here is where I applied a filter
[21:27] where we only kept data with the cloud fraction less than 50%. And a solar angle less than 80°. And going back and
[21:35] forth, you can see how we end up having these areas where clouds are removed, but also areas where even the smoke
[21:43] plume were removed, which I'll go into bit more detail of another use case of when that happens.
[21:51] All right. So for the tempo, this is a table showing the tempo data products, the baseline, the near real time and
[21:58] also the upcoming Noah aerosol products. And we start with the level one data, the level one radiance data, which is at
[22:07] this tempo footprint size of 2x4.75 km squared, which is the tempo footprint size at the center of the field of
[22:15] regard. But as we saw earlier that footprint size varies throughout the tempo field regard. Then we drive or
[22:23] retrieve these various products shown here including cloud products ozone total column nitrogen dioxide bermatahhide and ozone profile.
[22:34] Uh some of these are also nearrealtime products. So we provide we are currently providing nearrealtime products with
[22:41] data latency of less than two hours and uh that includes our cloud nitrogen dioxide and formatahhide data and a key
[22:51] point with our ozone profile is the ozone profile provides information on tropospheric ozone column amount. So we
[22:59] get at information in the troposphere and lower troposphere and we can actually track ozone concentrations really well in the troposphere through
[23:08] the ozone profile. Uh upcoming products in the near future are going to be our um aerosol products including aerosol
[23:15] optical depth and aerosol layer height and an aerosol detection product. Those level two products shown here. Um the
[23:23] baseline products also have a level three uh product tied to them which are pretty much very similar to our level
[23:31] two except they are put on a regular standard 002 degree grid across the tempo field regard. So those those grid
[23:40] point sizes don't change like the footprint sizes do up here. Uh I do want to note that the ozone profile level
[23:47] three is a bit coarser at 0.04 04 degrees compared to the other level three products. And the reason for that
[23:55] is as you can see here the resolution of our ozone profile for level two is coarser because there's some co-adding
[24:02] or averaging done of pixels to make that product um of higher accuracy precision for the community which is required. And
[24:10] finally, we have level four products which uh will include our surface PM2.5 product with an hourly PM2.5 estimation.
[24:20] Okay. Now, we're going to do a little more discussion on level two versus level three products from Tempo.
[24:28] Kicking off here is the general methodology where we go from our Tempo level two products to our level three.
[24:36] And the level three products are essentially um created from regridding level two data onto a regular grid using
[24:46] an area weighted averaging approach. So we do that at the 0.02° grid for NO2 fromahhide and total ozone and at that
[24:56] point 04 degree grid for ozone profile. The the equation that is used here is shown on this slide and it's really just
[25:05] geometric regridding where we take contributions contributions uh from nearby grid points that overlap that level two pixel footprint and then
[25:16] apply this equation to get at our level three data for each grid grid point. And here's an example of the level two
[25:26] versus level three data zoomed in to the LA basin area on June 18th, 2025, zoomed in on LA basin and showing the
[25:36] comparison between level two and level three. So we're seeing those kind of polygon shapes when we look at our level
[25:42] two, which was shown on that map earlier, the tempo footprints. And now we have this like standard regular grid
[25:49] that we're seeing this tempo data appear in in the level three product. So um this is in the morning hours where we
[25:55] have high NO2 likely tied to the traffic um in the morning across the LA basin area. So for our level two data we uh provide
[26:08] these in different data granules across the tempo field regard. There's nine different level two data granules that
[26:16] compose each full tempo field regard scan during our hourly standard operation. So we're seeing this for one,
[26:24] this is simply an animation showing one hour of those nine different six to seven minute data granules that are
[26:33] provided across the temple field regard. And note this that did change before starting September 29th, 2023. We went
[26:41] from 10 to 9ine. So um during the commissioning phase we had a little larger number before September 29th.
[26:50] All right. So then we take those nine different tempo data granules for each full tempo filter regard scan and
[26:58] compose a level three scan data file. This is similar to the pre or same time frame as a previous animation but just
[27:07] taking all those level two data granules. Um stitching them together and doing that remapping regridding process to put that NO2 data on a 002 degree
[27:20] grid across the tempo field regard. This is how those level three scan data files are provided for tempo.
[27:30] And zooming in here to the LA basin again, looking at the level two versus level three NO2 comparison for a
[27:40] morning, early afternoon, and late afternoon, evening time frame during this one day on June 18th, 2025. And we're seeing similar information as
[27:51] before in terms of you can really see the the polygon shapes um where these NO2 column data are shown and then kind
[27:58] of the the regular grid shown here. Uh kind of one key takehome here are is in general level three NO2 maps or data
[28:07] will have a smoother appearance compared to the level two NO2 maps after doing that regridding averaging process. And
[28:15] this can also lead to some significant differences in the like fine scale NO2 hotspots and large NO2 gradients when
[28:25] you're comparing the level two and level three data and maps. This is same kind of comparison here
[28:34] except for format. So we're doing from level two to level three format comparison. Maldahhide is a noisier,
[28:42] more difficult retrieval compared to NO2. NO2. So in general, that just makes this comparison a bit harder in terms of
[28:49] seeing where all these gradients or differences are occurring. But again, similar thing here where we have a
[28:56] smoother appearance to our level three fromahhide map due to that remapping regrading process compared to our level
[29:02] two. All right. So now we want to talk a little bit more in detail about the quality assurance and data filtering
[29:12] methods which um are really needed by the user community and our recommendations here are based on the
[29:20] latest recommendations for the version 4 product release. It's important to note here that we had a we went from version
[29:28] three to version 4 data. Version 4 data started being produced on September 17th, 2025. Um, we haven't reprocessed
[29:37] the data prior to September 17th, 2025 yet, but for now, all our version 4 data are available starting September 17th,
[29:47] 2025. So, these recommendations here are focused on that version 4 data. And this table is showing the key quality
[29:56] assurance parameters that are recommended for use. And this this includes effective cloud fraction solar zamp angle and our main data quality
[30:06] flag. flag. This uh quality flag is a bit more complicated in terms of uh how you know
[30:14] what these flags refer to in in the product in the variable. And for example zero a flag of zero means high quality
[30:22] tempo retrieval. A flag of one uh means suspect retrieval due to air mass factor or viewing geometry issues and a flag of
[30:34] two means outlier retrieval or there is no successful air mass factor calculation. calculation. So for looking at the different ranges
[30:42] of these variables, we have the effective cloud fraction ranging from 0 to one. Solar zenth angle as you'd
[30:48] expect from 0 to 90° and our main data quality flag going from 0 to two. Currently in world view for all for all
[30:57] the available version three data that are available to view. Um these are the qualitative use thresholds that are
[31:04] applied. So they apply a cloud fraction less than.5 solar zenith angle lesson 80 and a mandated quality flag lesson two
[31:13] for quantitative use and research use there are different recommendations in our tempo user guides they recommend a
[31:21] much lower cloud fraction threshold of less than 0.1 to retain high quality data that can kind of vary um you know 0
[31:30] 2 0.15 depending on your application of course uh solar Zenth angle is less than 70° for quantitative use and uh they
[31:39] recommend only retaining the high quality tempo retrievalss for quantitative research use as well. All right. So this is an example of uh
[31:50] comparing those quality insurance thresholds um and the different maps that can be shown based on those different assurance thresholds. So this
[32:00] is for one day on September 20th, 2025. uh zoomed into the Pacific Northwest here of tempo tropospheric NO2 and we're
[32:11] seeing here at the bottom are is are those stricter quality assurance recommendations shown on the previous table. These are the thresholds at the
[32:19] top here are those currently used for the world view in O2 visualizations. And the key message here is that there
[32:27] were some cloud cover during this time period. And we're seeing more white masked out areas uh in the lower panels
[32:36] here due to cloud cover, but also we're seeing a wildfire event that occurred during this time period. So there was a
[32:44] pretty large wildfire and we're seeing very high NO2 plume tied to that smoke. And but when we apply that cloud
[32:52] fraction the strict cloud fraction quality assurance threshold we remove that smoke plume the NO2 plume from the
[33:00] map and analysis. So you know care needs to be taken when applying these cloud fraction uh thresholds based on your
[33:07] application and needs and looking at the uh similar thing here but looking at solar zenith angle uh
[33:16] quality assurance and this is using the strict cloud fraction of 10% but then looking at the solar zenith
[33:24] angle of 80° versus 70°. So when we apply that stricter solar z angle threshold during the uh morning and late
[33:34] afternoon here we can see that we lose information content on NO2 based on that updated uh more strict solar angle in
[33:44] these maps here and to the right we're looking at the whole entire tempo field over guard here applying the less strict
[33:51] cloud fraction but the main change here was looking at a flag of equal to zero versus a flag of less than two. And by
[34:01] using a flag equal to zero, we lose this tropospheric NO2 information in the far northwest and far northeast due to the
[34:09] viewing angle restriction flag within the product. So it's another thing to keep in mind when using um the flag
[34:17] variables within the tempo and from high data. data. And I wanted to share another table here for the quality assurance
[34:26] recommendations for tempo total column ozone slightly different but similar to a degree. We have quality flag parameters effective cloud fraction
[34:37] solar zenith angle viewing zenith angle recommendations. uh there's a lot more information with contained within the quality flag here compared to NO2 and
[34:47] formaldahhide uh including sunglint contamination contamination and SO2 being present. Uh for you can kind of see the different ranges much
[34:56] higher range with this quality flag. For qualitative use they recommend less than 1024 for the quality flag. And for
[35:06] quantitative use for total column ozone for best highest quality data is simply apply apply the flag equals zero. And if you want to
[35:15] retain uh more adequate data you can also keep those flags equal to one two and five. effective cloud fraction. There's no
[35:25] filter currently being used for qualitative use in world view. However, for quantitative use and research, they recommend a an effective cloud fraction
[35:35] of less than.5. And you're seeing similar solar and viewing zenith angle uh quantitative use restrictions for our
[35:43] total ozone column as shown for NO2 and formaldahhide. And now we're comparing the different quality assurance uh thresholds shown
[35:53] here. Same day on September 20th, 2025 as shown for NO2. But this is for total column ozone and applying the qual
[36:03] qualitative thresholds that were shown in the previous slide and the more quantitative research threshold. So, as we would expect when applying a cloud
[36:13] fraction on the bottom panels here, we're seeing more areas removed due to cloud. Um, also there are there is some
[36:22] influence from applying that quality flag equal to zero as well. Some of these areas around here were were also
[36:29] removed due to that quality flag. So again, taking account kind of what happens going from our different
[36:36] qualitative to quantitative thresholding for this product. All right. So now we're zooming out um and looking at the tempo field regard
[36:45] total column ozone. And the top here we are looking at the quantitative more research thresholds versus the
[36:54] qualitative thresholds that were shown on the previous slide. And as you can see when we apply that stricter cloud
[37:00] fraction we remove the clouds from the scene but also there's some influence from that quality flag equal to zero.
[37:09] You can especially see that uh quality flag equals zero and the sun contamination removed from the far south
[37:17] extent here. This is sunglint that's removed when we apply that quality flag equal to zero versus retaining that
[37:25] sunglint area in the bottom map. And there's also some influence from applying um that quality flag in other
[37:32] areas of the field regard as well. Okay. Now we're going to actually show some examples of our level two trace gas
[37:41] products. products. And for this example, we're going to be focused on that version 4 data time period. This is zoomed in to the
[37:53] southwest US on October 15th, 2025. To the left here, we're showing a beer's true color image. And on the right
[38:04] showing the animation of tempo tropospheric NO2 vertical column densities on this one day from morning to evening across the domain.
[38:15] And uh what we're seeing here are high NO2 BCD columns over Dallas Houston. Um we're seeing some elevated NO2 across
[38:27] the major traffic corridors um and over the Perium Basin as well. So there's a large oil and gas infrastructure and
[38:35] over across a perium basin and we're seeing higher some higher NO2 columns tied to that Peran basin along with some
[38:43] small hotspots of NO2 uh tied to power plant locations and also some uh fires that were occurring across the domain um
[38:52] across the east here especially. We had some fires that were occurring across Louisiana for example and some of these
[38:58] NO2 hotspots were tied to those fires. And then this is another animation for total column format. So same day October
[39:08] 15th 2025 uh morning to eveninghide information across the southwest. uh and one of the areas of higher format
[39:19] concentrations if you look at this animation closely occurs over the Houston area. So that is a typical urban
[39:27] area tied to high format concentrations. And so we see that in our format animation here along with other areas of
[39:35] elevated formaldahhide even over the perium basin uh tied to the NO2 in that region and the oil and gas industry.
[39:45] And this is the animation for total column ozone for the same day. And again this is total column. So this takes in account
[39:55] both the troposphere and the stratosphere. stratosphere. Over, you know, 90% on average of the ozone is contained within the
[40:04] stratosphere. That being said, we're still seeing some variations in total column ozone in this animation um with
[40:12] some higher higher concentrations across various regions including in around the Houston area. Of course, now we have our tempo ozone
[40:23] profile data which is shown here. This is the tempo tropospheric ozone column data for that same day. And now we're seeing some
[40:34] stronger, more apparent distinct variations in our tropospheric ozone calma amounts as we retrieve this information only in the troposphere. And
[40:46] I'll highlight again one of the areas of interest over the Houston area. as this we see these higher ozone concentrations
[40:54] that occur in the later afternoon area during that animation. We can even get down to the lower troposphere with our
[41:02] tempo ozone profile product. So same day but looking at the 0 to2 kmter ozone column information and this is really
[41:12] neat what we see here. Um we'll replay the animation again from morning to evening and as you will see in the later
[41:20] afternoon evening hour we see a definitely distinct high values that are occurring in and around the Houston area
[41:31] mainly to the southwest where we actually where the ground monitors observed higher ozone um columns on higher ozone concentrations on the day
[41:40] as well. So, uh, really neat that we're picking out some of the elevated lower tropospheric ozone in an area where the
[41:47] ground monitors measured higher ozone concentrations and and unhealthy ozone levels. So, we're changing we're changing days here uh to September 26, 2025 because we
[42:02] had a large wildfire event occur on this day. So again to the left I'm sharing the ver's true color image here on the
[42:12] in the Pacific Northwest and we're seeing these large grayish color intensities here tied to wildfire smoke on this day. And to the right we're
[42:23] looking at the tempo ultraviolet aerosol index. And this variable is contained within the tempo total ozone product.
[42:32] So, what's really neat about this is we um see these higher UV aerosol index values tied to these wildfire smoke
[42:41] plumes and that's due to the absorbing uh the absorbing nature of smoke particles. So, which leads to the high
[42:49] UV aerosol index value. So, this parameter can be um very useful in terms of monitoring and tracking uh smoke
[42:57] plumes throughout the day. Okay. So, I did want to share um some comparisons between um tempo and our
[43:08] current low earth observing satellite instruments, the NASA ozone monitoring instrument and tropomi. All these results here are based on our version 3
[43:19] tempo products. So this is uh the comparison between our low earth orbiting ozone monitoring instrument versus tempo. Again, OMI is a
[43:34] low earth orbiting. So it only provides a midday observations of air pollutants across the globe. And its spatial
[43:39] resolution is is much coarser at 13x 24 km squared compared to what we have with tempo. tempo. And this is showing just as zoomed out,
[43:50] you know, over the west region of the US. OMI tropospheric NO2 versus tempo. And it is, you can see the really
[44:00] incredible information uh content that we get from tempo NO2 compared to tropomi. Um and if we zoom in, look at
[44:08] the zoomed in images over the LA basin area versus tempo vers OMI. Uh we can see that tempo NO2 tropospheric vertical
[44:18] column densities are larger than OMI in urban areas and this is it shows over the LA area uh over Mexicalei
[44:28] too and this is a combination of both the much higher spatial resolution of tempo that's able to capture these areas
[44:36] of high NO2 but also the higher instrument sensitivity of tempo as well. So, um, this is really incredible now
[44:44] what we're seeing with Tempo compared to our previous legacy instruments like OMI. OMI. Okay, now we're looking at a comparison
[44:52] between um, Tempo and Tropomi. So, Tropomi like OMI is a low Earth orbiting satellite instrument. It was launched in
[45:02] 2017 and provides higher spatial resolution information than OMI. And now we're carbonom is providing NO2 observations at 5.5 by 3.5 km squared.
[45:15] So we can definitely see right away that the comparison between tropomi and OMI is much closer than OMI and tempo.
[45:23] Number one, there are differences for sure uh tied to the different instrument retrieval techniques, but also the
[45:31] spatial resolution as well. So if we can kind of see that if we zoom in closer to
[45:37] the tempo versus trobomi comparison across the uh LA basin area here where we are seeing in general higher NO2
[45:47] tropospheric NO2 from tempo across the LA basin. Again, this likely has to do with both the different instrument
[45:55] retrieval techniques, but also the in general the higher spatial resolution of tempo is contributing to these different
[46:04] NO2 differences. But um it is important to note that we're still capturing similar NO2 gradients, tempo versus
[46:11] tropomy. There's differences in the values here. Okay. Now, we're going to dig into a little more quantitative comparison
[46:19] between tempo and tropomi in O2. at these selected areas across the field regard shown here in the map in the top
[46:27] right. Key take-home points here is that tempo is higher than tropomy at these locations of interest in general. Uh
[46:37] tempo tends to be a little bit lower than tropomy in non-attainment areas. Tropomi tends to have a high bias in
[46:44] these low NO2 conditions. And if we do more of a detailed comparison between tempo tempo tropospheric NO2 and tropomi at the
[46:55] Boulder and the LA south coast locations here we're seeing that we're getting better correlations between tempo and
[47:02] tropomi across Boulder the Boulder area compared to the LA south coast area. So we're having correlations of 73 in
[47:10] Boulder and correlations of 36 across the LA south coast. So the main takehome here is that tempo and tropomi they
[47:20] generally are in agreement but they can also be um their comparisons can vary at different locations across the field of
[47:27] regard as well. Okay. So now we're going to do a little uh more in detail with the validation of
[47:35] tempo products. Uh this is again a validation comparison done for our version three tempo products. And this is a comparison tempo
[47:46] validation done against our Pandora network. So our Pandora is our main groundbased validation network for tempo and Pandora provides NO2 and format
[48:02] observations or measurements like tempo but from the groundbased perspective. And here we're showing the correlations and mean biases between tempo NO2
[48:14] and Pandora and Tempo formatahhide and Pandora from the key take-home notes are that tempo NO2 in general reproduces the spatial
[48:25] variability of Pandora. It correlates well at most of the Pandora sites. And for tempo formatahhide we have similar
[48:35] outcomes here with fairly high correlation at the Pandora site level. Uh there is some reasonable bias with
[48:43] some of the individual sites that are requiring further investigation which we're currently doing. Um this validation work is ongoing with our
[48:52] version 4 data um as well. So more to come in terms of our tempo validation versus Pandora for our version 4 data.
[48:59] But in general, our tempo version 3 data showed good comparisons between our with our tempo with our Pandora observations
[49:07] of NO2 and format. And if we go into looking at tempo versus Pandora, taking account all those
[49:17] sites that we just showed in the previous slide and look at the per month comparisons and variability.
[49:25] This is showing tempo versus Pandora NO2 at the top and or format at the bottom. And for both of these comparisons and
[49:35] figures, we are showing that tempo NO2 and formaldahhide captures the seasonal variations well with pretty good bias as
[49:44] well bias. So this is showing again that tempo is able to capture these seasonal variations as shown by Pandora.
[49:54] And we can get into more detail in terms of the variations per day, per hour of the day. Same as before, but looking at
[50:03] tempo versa, NO2 at the top and formaldahhide at the bottom for different time periods throughout the day for all those sites that we saw. So
[50:15] the key one of the key messages here is that the NO2 for tempo during the time periods in the morning and the evening
[50:26] with higher solar venth angles we see a lower correlation but still good correlation between uh tempo and
[50:35] Pandora. This is expected. We we know that our tempo retrievals have lower accuracy during the morning and the
[50:42] evening. uh it's not as apparent in the formaldahhide formaldahhide uh when you're looking at the format comparison between tempo and Pandora
[50:50] throughout the day. Uh our correlations are in general lower than NO2 and that's to be expected because our the format
[50:59] retrieval is more difficult from both the tempo and Pandora perspective. So but great that we're seeing these
[51:06] overall good correlations in general uh with format as well. Okay, now we're going to go into some
[51:14] tempo data visualization and world view and Christina will take it over from here. Thanks Aaron for a great overview of
[51:24] tempo. Now we're going to get into some of the data exploration that you can do with the tempo that are available on the
[51:30] NASA worldview. So we are just going to go to NASA worldview from a normal web browser. You can type it in. It's
[51:38] worldview.eardata.mnasa.gov. worldview.eardata.mnasa.gov. You can see I've typed that and it's uh already populated. So when you go to world view, this is
[51:48] the landing page that you'll see. Uh worldview has some great stories to peruse the different data sets that they
[51:56] have here. I encourage you to check these out at a later date. Many of them are relevant to air quality topics. Uh
[52:01] but we're not doing that today. So we're just going to X out this welcome page. And um I should note you are welcome to
[52:08] follow along with what we're doing here but uh this is also a recording so you can go back you can follow it through
[52:14] later as well at your own pace pause it and everything. Uh some of the homework questions are going to involve similar
[52:20] examples. So that will be another opportunity to go through these tools on your own. So, we are going to go to uh explore in
[52:29] more detail the wildfires of January 2025 in the LA area. Uh to note to orient you a little bit to world view
[52:39] down here at the bottom left, we can see uh it has defaulted to the current date 2026 January 12th. Uh, since we're going
[52:48] to go into the LA area, I'm just going to use my cursor scroll wheel to scroll into roughly the California area. For
[52:56] those who may not be most familiar, we're just going to put on some place labels for orientation.
[53:02] And because we're going to January, oh, that's the wrong way. Because we are going to January 2025, I'm just going to
[53:09] click this arrow down. So, now it's 2026 to 2025. And we are going to go to January
[53:19] 9th of 2025. And again, for some quick orientation here, um this is the LA area. We can see
[53:28] that the fires were already in process. Um the the images that show up now are true color imagers. Uh and they're
[53:40] represented as base layers. So it has defaulted to terramotus and that's what we're seeing here. So it
[53:47] has more of an morning overpass. We can turn off this layer. We can turn on the aqua modus. We can see that uh it had a
[53:54] little bit of a different view later in the day. Or if we want to do a Noah 20
[53:59] veh. can see that this was a little bit more in the middle of the of the we can see it was a little bit more in
[54:08] the middle of the satellite swath for this particular time. Uh but what we're interested in today is
[54:16] the tempo data. So we are going to go to this red button down here, the plus add
[54:21] layers. We're going to click on it and it brings up this page which has again a number of topics. Feel free to
[54:29] peruse them at your own leisure. Uh we have some air quality topics, some specific air quality topics like fires,
[54:35] dust, ash, uh etc. But since we are going to tempo, what we're going to go is we're going to go to this top search
[54:42] bar and type in tempo. tempo. And as we do that, we can see that a number of different products show up. So
[54:51] these are all of the products for Tempo which are currently available in world view. So we can click on formaldahhide
[54:58] and uh it'll give you an idea of the temporal coverage the uh a little bit of the metadata. We want to
[55:07] explore all of these. So we're just going to click the little uh check box here. And you can see behind this panel
[55:14] that I'm in right now, these data sets are slowly populating underneath here. You can see uh it's a little bit above this
[55:30] formaldahhide here. So if I were to turn off the formaldahhide, we can see that the nitrogen dioxide is uh adding itself
[55:38] to the list of variables, the layers that we're going to have available for this particular data. Um and as you can
[55:45] see, sometimes it can be a little bit tedious to do all of these things to check all of these boxes. So, um, we are
[55:52] just going to go to a window where I've already had all of these loaded. So, we're just
[55:58] going to pull the cake out of the oven already done. Uh, one thing again to note. So, now we have all of the tempo
[56:07] layers loaded and they are hidden. So, we will we will go through and look at them one at a time. So, I've hidden all
[56:13] of those. And another thing to note for when we first opened world view, we had year, month, day. You'll remember,
[56:22] you'll notice since we included the tempo layers, we're now having uh hour and minute. And this is in time of UTC.
[56:32] And there's also this little increment feature here. It is defaulted to six minutes because the tempo revisit time
[56:38] is hourly. We're just going to click on this. this. When we click on these arrows, it's going to be an hourly time step. So,
[56:47] first here, what we're going to do is look at the nitrogen dioxide since Aaron showed some great examples there. So,
[56:53] we're just going to click on this level three layer. And what are we seeing here? Uh, this
[57:00] may be something that will happen as you're exploring worldview. You can see that the values here are fairly uniform.
[57:07] Uh as I'm mousing my cursor over the map, you can see uh on the left lefth hand panel there's a little triangle in
[57:15] line that's giving you an idea what the numerical values are. They're fairly uniform values. What has happened here
[57:20] and you might encounter this uh we have perhaps inadvertently put on the stratosphere level three layer. So this
[57:27] is nitrogen dioxide level three vertical column stratosphere. Uh which is not maybe necessarily what we want to do if
[57:34] we are looking at the air quality. uh issues. issues. So now we are looking at nitrogen dioxide level three vertical column
[57:43] tropospheric and subdaily. This is a little more what we would expect as we're looking at nitrogen dioxide near
[57:51] surface values. Uh and again we can use the cursor to mouse over the areas of very high concentrations. You can see uh
[58:00] the values here almost 3 * 10 16th molecules per centime squared. Uh if we move the cursor out
[58:09] towards the ocean where it's a little bit more uh pristine or uncontaminated, we can see that the values get much
[58:14] lower. We can see again some other values from general uh other sources of pollution in the San Francisco Bay area
[58:25] and the central valley of California. So we're seeing different sources uh in addition to the very strong smoke plume
[58:32] that we're seeing in the LA area. So now we're going to use these arrows that we set up to increment hourly. And as we do
[58:39] that, we're seeing again the bar down at the bottom. You can see it's uh stepping by an hour at a time.
[58:49] And we can see that the values are also changing. So we're able to see the different time steps that are going on
[58:55] uh throughout the course of this day. Looking at the scene and looking at the uh values that we're observing here. Uh
[59:04] what has happened here? We have gone to January 10th uh at 12:45 a.m. UTC. Uh this corresponds to
[59:15] uh uh 4:45 p.m. local California time. Uh which is after sunset at this time. So you'll remember Tempo is only available
[59:25] during daylight hours. And it's a little bit difficult to see, but if you look on this cursor, if you
[59:33] look on the the time bar here, there's a little bit of a different shading from the the nighttime values here. So, it's a little
[59:44] bit darker. And then there's a change where this is showing where the values are the data are
[59:53] available over the course of the daytime. So um that can give you a sense of where where data are available from
[1:00:00] this instrument for this particular uh time. time. So we can step backwards in time again. So now we've reset to sort of the
[1:00:15] beginning of the day. Okay. So that is nitrogen dioxide level three data. Uh we can also look at the NO2 level two data.
[1:00:25] And again we're picking the tropospheric values. Uh as we turn off this layer the tropospheric level three data and turn
[1:00:34] on the level two data. Uh you can see this is uh how that looks. Um as Erin
[1:00:41] mentioned this is the level two data are presented in this way. One thing that you can do uh there's a little tool here
[1:00:51] called view options. If we click on these little slider options, uh we're going to increase the granle count here
[1:00:58] from its default of one to nine because again there's nine granules in the tempo overpass. overpass. And so now we have uh the full
[1:01:11] US US uh one snapshot of tempo is visible at a time. And we can see if we mouse over
[1:01:19] these uh it's giving us a little bit more specific time step for this swath uh 1645 1638 1631. So these are uh in
[1:01:30] approximately six minute intervals uh going from starting at the earliest time 1552 uh as it progresses from east to west
[1:01:44] across the US. So we can see that uh the level two data um um are visualized a little bit differently
[1:01:55] here. Uh again we can step through and see the evolution of the scene over the course of the day
[1:02:10] to give a sense of the differences between level three and level two data. Uh this is just a comparison mode. We're
[1:02:17] going to talk about this more on day two. Here we're comparing the level three data on the left and the level two
[1:02:24] data on the right. And if we drag the slider, uh this is the level two data and the level three data. And you'll
[1:02:32] remember uh as Aaron described the native grid of tempo in the level two data are a little bit more of an angled
[1:02:41] grid whereas the level three data are averaged over 02° grids. So it's a little bit more regular. This is a way
[1:02:50] to sort of visualize a little bit the differences between the two uh between level two versus level three.
[1:03:00] So that's the uh NO2 level two data. Uh we can also look at the ozone column values. Uh so we can only look at the
[1:03:10] ozone total column, but let's see what we have. Um this is the ozone level three column values. Uh again if we mouse into
[1:03:21] different places of the map we can see that the the values on the color bar to the left are changing with the different
[1:03:30] values to giving giving you a sense of the numerical uh values that we're looking at here. Um the main takeaway
[1:03:38] here with the ozone total column is it's very difficult to see any signal from the wildfire event that we know is
[1:03:47] happening in the troposphere uh in the column values. So that's ozone. Uh we can again hide that layer. And now let's
[1:03:55] look at formaldahhide. And looking at formaldahhide it is similar to what we saw in the nitrogen dioxide. Um, we're seeing a clear plume,
[1:04:09] uh, a very distinct plume, uh, associated with the wildfire smoke that we know is happening. Um, as it goes
[1:04:17] from beginning of the day, we can sort of step through hour by hour and see the changes, the
[1:04:32] evolution in the scene and the values that we're seeing uh in formaldahhide over the course of the day and as it
[1:04:40] disperses off the coast. And again we can uh mouse over and get a sense of the qualit the quantitative
[1:04:48] uh values that are within this bloom as well. And finally what we're going to look at uh we're going to briefly look at the
[1:04:58] aerosol index which Aaron mentioned as well. It's retrieved in conjunction with the ozone product here. And um higher
[1:05:07] aerosol index indicates a the presence of absorbing aerosols. So such as dark smoke in this scene which uh we
[1:05:15] certainly certainly can tell uh is happening here. So going to the beginning of the day we can see
[1:05:21] uh that detection of absorbing particles is present in this plume as it was observed by tempo as it
[1:05:32] evolves uh over the course of the day. So that's the aerosol index as well. So, one final thing that we can look at
[1:05:40] for this event, um, as Erin mentioned, there were special operations, special uh, every 10-minute observations that were happening a few days later during
[1:05:50] this same event. Um, and so here is the custom interval selector. Uh, one thing we're going to do because they were
[1:05:57] every 10 minutes, uh, currently we're set it, we've had it set to be every hour, we're going to go to custom and do
[1:06:04] intervals of every 10 minutes. And so now our increment is going to be every 10 minutes. The special operations
[1:06:13] happens on January 16th and 17th. So we're just going to navigate to the 16th. And let's start
[1:06:23] start at 8:00 Zulu. And then we are going to look at the NO2 level two tropospheric values here. So
[1:06:36] we'll turn on that layer. And then because we're looking at special operations, we are going to go
[1:06:42] back into our tools uh and reduce the granle count. So we're only looking at let's say two at a time.
[1:07:06] So now we're only looking at two granules at a time. So we can X this out. out. And so now we are looking at uh January
[1:07:17] 16th, 8 o'clock Zulu, which is uh noon Pacific Standard Time. And um we are seeing there are two overpasses here or
[1:07:27] two swaths here. Uh 1954 1959. If we increment another 10 minutes now we're seeing uh 2004 2009.
[1:07:42] As we step through the time incrementor of every 10 minutes, uh we can see how the scene evolves over the course of
[1:07:50] this day at this 10-minute resolution where um we have the high high revisit time, high uh temporal
[1:08:00] observations observations uh during this particular hour. So, um I encourage you to go to the tempo log and
[1:08:07] see if there were uh any other special operations that may have happened at uh scenes of interest.
[1:08:18] So, that concludes our visualization exercise in worldview for today. We will be back in Worldview on day two to
[1:08:26] explore a couple more case studies that we can observe with these data uh that are available. There are also some other tools that you
[1:08:37] may want to explore for visualization of tempo data. Uh the slides are a will be available on the website after the
[1:08:49] training is done. Uh so he's here are some other tools that uh you may be interested in.
[1:08:57] So this is the conclusion of our part one uh tempo geostationary trace gas training. training. To summarize what we went over today, um
[1:09:09] Tempo's hyperspectral capability uh enables us to retrieve criteria trace gas pollutants in the troposphere at unprecedented spatial and temporal
[1:09:20] resolution across greater North America. Um it's allows us to observe small-scale emission sources and fine-cale pollutant gradients that have not been adequately
[1:09:31] resolved by prior satellite missions. The geostationary nature of its observations uh allow for monitoring of rapidly evolving pollutants which
[1:09:40] support air quality analysis and forecasting. The uh nitrogen dioxide and formaldahhide products show overall good agreement to the Pandora validation
[1:09:49] network and tropomi satellite data. The ozone profile product which is currently in beta will offer enhanced capabilities
[1:09:57] to monitor and characterize ozone concentrations within the troposphere. NASA worldview applies tempo quality assurance which uh is suitable for
[1:10:07] qualitative visualization. For more quantitative analysis, users will need to apply quality assurance variables to both level two and level
[1:10:17] three products, uh, which remove the tempo data with larger errors or uncertainties from that analysis. Um, with the caution that using strict
[1:10:26] quality assurance tends to remove large nitrogen dioxide columns from wildfire smoke. smoke. to look ahead to our part two which
[1:10:38] again will happen in two days. In part two, we will evaluate the tempo trace gas products in worldview to anticipate
[1:10:44] short-term air quality risks such as high concentrations of ozone precursors. And we will determine the spatial patterns, temporal trends, and likely
[1:10:52] sources of trace gases related to wildfire, smoke, and urban air pollution events using tempo data in worldview.
[1:10:59] And we will look at two case studies. one um on some fires in the Colorado front range and then uh urban air
[1:11:07] quality conditions and pollution sources over East Texas. As a quick reminder, this training series will have one homework
[1:11:18] assignment. You will be able to access the homework assignment from the training web page starting January 22nd
[1:11:24] after part two. And answers should be submitted via Google forms within two weeks, so by February 5th. Certificates
[1:11:31] of completion will be issued to participants who attend all of the live trainings and submit the homework before
[1:11:36] that deadline. The certificates will be issued via email about two months after the training. Here we've included the contact
[1:11:45] information for the speakers today as well as links to the RSET website and YouTube channel. We encourage you to
[1:11:52] sign up for our mailing list. Here are some additional links and resources. resources. Thank you for attending today. We're now
[1:12:00] going to transition to the Q&A portion of the session. Okay, we've been getting some Q&A already coming into the WebEx. Um,
[1:12:22] anybody who has questions, there should be a Q&A box to the bottom in the bottom right of the WebEx. Feel free to put
[1:12:29] your questions in that chat and we will try to get to them. So, uh, question one, I guess I'll start
[1:12:36] there. Um, can you explain why Tempo is using a continuous UV visible spectrum instead of discrete bands like other
[1:12:43] satellites? Erin, do you want to elaborate a little bit on that? >> Yeah, hopefully you can hear me. Okay.
[1:12:52] >> Yep, sound great to me. >> All right, great. Yeah. So, Tempo is uh uses a spectrometer that has very fine
[1:13:00] spectral resolution across that UV visible spectrum. So, um that's very critical in terms of detecting that very
[1:13:08] fine absorption spectrum and the differences in the absorption between those critical trace gases that Tempo was designed to provide to the
[1:13:18] community. So that's really the key part and that really goes even further with the ozone concentrations because that
[1:13:26] the UV viz spectrometer does also enable improved sensitivity to o to ozone in the troposphere layer. So compared to
[1:13:35] using discrete discrete bands like other satellites. So in general in overall the UV viz spectrometer uh provides that
[1:13:43] higher precision and improved sensitivity to trace gases compared to using a satellite with district with discrete bands for example. Hopefully
[1:13:52] that clears things up. >> Thanks. Yeah. And uh to remind everyone this Q&A document will be posted on the
[1:14:00] training web page uh after the fact as well. So um you'll be able to go back over these. Um so question two uh is
[1:14:08] regarding the special scans. So um basically I think is what happens when the when the special scans are
[1:14:15] happening? Is there a special instrument um or or how does how do the special scans affect the standard scans that are
[1:14:21] going on? >> Do you want me to go for that one? >> Um sure. [laughter] >> Okay. Yeah. So I think you kind of
[1:14:34] answer it there on the document here. But um yeah, so we're always there's no special no separate special instrument.
[1:14:42] It's all the tempo spectrometer that does the special versus the standard scans, right? So we just transition the
[1:14:49] tempo instrument from performing the standard normal hourly daylight operations to a special scan mode um during a day. Right? So you saw that
[1:15:01] example in the um art training where we did that same kind of special scan operation for a 4-day time period. Um,
[1:15:09] so you know, we can do that too where we set the special scan mode to operate for
[1:15:14] four continuous days and then have those 10-minute or you know, for example, 10-minute um scans over a certain
[1:15:22] portion of the field guard um, you know, happening for that 4-day time period during the daylight. >> Yeah. And um in in the slides I'll also
[1:15:33] mention in the slides there's a link to the tempo operations log which can um give a record of when special scans were
[1:15:41] happening. And so if if there's data missing it could in a particular time it could be because there was a special
[1:15:47] scan happening at a different in a different time and place or in a different place during the same time
[1:15:51] rather. rather. Um we're getting a number of questions. I'll just combine them all together. There's there's a number of questions
[1:15:58] about the stratospheric tropospheric division and how that how that is how that process is done and how that uh
[1:16:06] distinction is made. Uh Erin, do you want to talk a little bit more about that in sort of a general term? I think
[1:16:11] I'm combining a bunch of these questions, but they're all similarly themed. Yeah, I did notice there's a
[1:16:17] handful of questions related to that. Um so what we really do is we actually um use the total column, right? and we uh
[1:16:26] subtract out the tropospheric column. So really we're not retrieving information directly on the stratospheric portion of that. We have a you know tempo provides
[1:16:36] the total column um information directly. We use then a retrieval process to get at the tropospheric um
[1:16:46] column amount and that then after that we're able to at least get an idea on the stratospheric portion. That's how
[1:16:53] it's separated out in the tempo data product as well for NO2 for example we have you can get information on the
[1:17:00] total column the tropospheric column and the stratospheric column portion within the tempo data product for NO2 um for
[1:17:10] formaldahhide there's a question later on regarding formaldahhide I believe and for formaldahhide the reason why we don't do the stratosphere troposphere
[1:17:21] separation is that the format concentrations in the stratosphere are very low. So there is not really a need
[1:17:30] to do that stratosphere troposphere separation for the formaldahhide product for example. Um and I think there's a
[1:17:38] question also related to ozone and the separation of that. Yeah. So the ozone is similar to NO2 in regards that we can
[1:17:46] get at information or we do use a separation technique right to get at the stratospheric and the tropospheric
[1:17:54] concentrations for ozone which are in within the data product itself. Um ozone is special in regards to we're able to
[1:18:03] retrieve additional information in the lower tropospheric layer. So we actually have a uh you know you can get at the
[1:18:10] tropospheric or the lower tropospheric column amounts for or ozone within the ozone profile product and that might clear up those three or
[1:18:23] four questions related to troposphere for stratosphere. I missed anything let me know. Thanks. And yeah, um, feel free if
[1:18:33] anybody has any follow-up questions, you can again put them in that Q&A box in the WebEx. Uh, let's see. So, we covered
[1:18:41] those. those. Um, there's question number five, which is just about uh the orbital period of the satellite. Um, again, this is a we
[1:18:50] have that in the chat. Uh, this is a a geostationary satellite. So, it is uh constantly the orbital period is one
[1:18:57] day. It's constantly staring at uh North America. America. Um and for more detail on that we have
[1:19:03] some uh fundamentals of remote sensing uh self-paced training if you would like to get some more uh detail about the
[1:19:11] different orbital types. Um Um I see number question six is about the lower signal to noise ratio uh with
[1:19:22] formaldahhide. Erin, do you want to do that one now or uh should we leave it for for >> I kind of skipped over that one. Let me
[1:19:31] let's go back to that one. Um I can go to the following question. >> Let's see. Uh how about question seven.
[1:19:39] Um there there was some striping a striping feature on uh the tropospheric profile that you showed. Um do you want
[1:19:48] to talk a little bit about what causes that? that? Yeah. So the ozone profile uh I want to
[1:19:54] make it clear that we are still in the validation phase of that product like a like we mentioned in the training. It is
[1:20:01] a beta product right now. So we're undergoing um pretty intense validation on that ozone profile product currently
[1:20:10] with the hope that we can have a provisional ozone profile by the end of this year. So, but you know during our
[1:20:18] early validation results um and one of our main mechanisms for validating our tempo ozone profile product is the toll
[1:20:28] net um stations which I'm not sure people know about tool net but it's a groundbased validation network for our
[1:20:34] tempo ozone profile. Um the [snorts] ear early validation results have shown that this horizontal striping is kind of
[1:20:42] similar to what we see with tropomi and and omi data for example in terms of insufficient cal calibration across the
[1:20:50] tempo wavelength spectrum especially those wavelengths that are used for retrieving um ozone information. So it's kind of similar to the row anomalies row
[1:21:00] anom anomalies that you see in the tropomi and omi data that are also tied to calibration um outdate calibration problems. Um and
[1:21:12] again we hope to have much more information regarding this and uh also additional improvements in the product
[1:21:19] once we have that um once we have the provisional product available later on in 2026. Sounds good. I think we're all looking
[1:21:28] forward to uh further validation and further improving of this product, but it's a really cool product. Uh so
[1:21:36] question eight, um how you can sort of reconstruct reconstruct information about atmospheric processes or pollutant emissions uh during periods
[1:21:48] where the satellite is not making observations. Um the the written response I think covers this. I don't
[1:21:53] know Erin if you have anything to chime in but essentially this is something that I don't think tempo tempo can't do
[1:21:59] it by itself. This is a case where you would uh bring in some other perhaps modeled data or or other observations to
[1:22:06] be able to get the fuller picture there. Um and there's there's links to some other trainings which may be relevant to
[1:22:12] people interested in uh pursuing that question. I don't know if you have anything else to add Aaron.
[1:22:18] >> Uh nothing for my end. I think that response right there tells it all. That's good. >> Yeah. Uh so question nine uh I think you
[1:22:27] touched on this already uh about how the data are calibrated with uh groundbased observation systems. You mentioned
[1:22:34] Pandora and you mentioned Tollnet uh and again there was a a whole training specifically to the the ground networks
[1:22:41] that NASA uses uh to be able to get at air quality and climate applications. Um let's see. So question 10, I think we
[1:22:57] already covered that. That's the the trop tropospheric stratospheric division. division. Uh the question 11's a little bit different
[1:23:11] with converting the the vertical column values into something that is uh like what is measured at the surface and ppb
[1:23:21] or ppm. Um and I think this again goes to yeah there's other information needs to be incorporated something like models
[1:23:30] or something like groundbased sensors. Um, I don't know, Erin, if you have anything else to add to that.
[1:23:37] >> I think that is a great response right there. It just takes further work and further research to really get at um
[1:23:43] that ppm or ppb value when you're looking at tempo data. >> Yeah, that's always the million-dollar question is converting from the column
[1:23:51] values to something at the surface level. level. Uh so question 12, I don't know Erin if you want to elaborate a little bit more
[1:23:59] on this, but I think this is essentially talking about uh how how can researchers best deal with uh places where there are
[1:24:08] a lot of clouds going on. Um and we we talked about it with quality assurance. Tempo can't see through clouds. So you
[1:24:14] need to sort of filter with that. Any anything else you want to add with how how to deal with areas which are very
[1:24:22] cloudy? cloudy? Yeah, it's going to be a problem, right? I mean, when you're looking at um cloud
[1:24:28] covered areas that are, you know, cloud fra with the cloud cover is encompassing too much of the tempo footprint, right?
[1:24:36] Where the tempo is trying to perform that retrieval, um it's going to be very difficult to provide a high quality
[1:24:43] retrieval. So depending on what is meant by cloud noise um which I guess is just a tempo footprint that has a lot of
[1:24:52] cloud within it um that to really get you really can't get high quality information on temp from tempo in those
[1:24:59] areas where the cloud fraction is high in the tempo footprint. So like we mentioned in the quality assurance
[1:25:07] discussion, uh even when doing a qualitative look at tempo data, uh we recommend using filtering out any tempo
[1:25:16] footprint or tempo data that's tied or associated with the cloud fraction of greater than 50%. So um that's probably
[1:25:24] at the level where this cloud noise would become a problem. Yeah, one of one of the challenges in
[1:25:32] doing uh remote sensing observations is those darn clouds sometimes get in our way. Uh so question 13 uh is asking
[1:25:42] about whether the AOD product is going to be in world view. Uh it's not currently. We we are planning to have a
[1:25:50] uh tempo aerosol product training later this year when those data are available. uh more more broadly. Um I don't know if we
[1:26:03] have any better timeline on that. Um but I think I think later this year is what I I think we can confidently say
[1:26:11] hopefully that the that the AOD product will be available. >> Yeah, looking at hopefully Mayish, potentially after, but yeah,
[1:26:24] >> hopefully Mayish. Yes. Uh the question I should clarify here uh the level four AODD product, it's really
[1:26:32] a level four PM2.5 product. The level um the AOD is actually a level two product. >> Is there a level two and a level three
[1:26:42] AODD that will be >> No. So uh that is one difference between what we're generating for our aerosol
[1:26:49] products versus our um versus our trace gas products. So for our as you saw on the table ear earlier and some of the
[1:26:58] presentation material we provide the trace gas products on both a um the standard tempo footprint but also on a
[1:27:08] standard grid level three standard regular grid um which is referred [clears throat] to our level three product. We they are we are not doing
[1:27:16] that for the aerosols. So we'll have the aerosols as a level or the AODD as a level two product and then um additional
[1:27:26] retrieval processes are used to derive that level four PM2.5 product. >> Sounds good. Thanks for the clarification there. Um
[1:27:39] question 14. Yeah, I think that's uh an interesting question but a little bit beyond the scope of what we are uh doing
[1:27:47] right here in terms of how solar radiation modification will affect these products. That's um I don't know that we have uh anything
[1:27:59] else to add beyond what's written on the screen right there but it it could be interesting. Um,
[1:28:07] question 15 about the validation of tropospheric ozone products. I think we covered this uh in detail and in some of
[1:28:14] in the in the presentation some of the other Q&A. I don't know if we have anything else specific to add there,
[1:28:21] Erin, but that's um done done with Tlnet and done with Pandora. Yeah, again like our um our Pandora
[1:28:31] network was really more for validating our total column of ozone product. Um the toll net um the tool net program
[1:28:41] with the ozone profile retrievals from toll net are really the main um the main validation mechanism for our tempo ozone
[1:28:50] profile. So yeah, we're uh more work to be done there and we'll have much more results and progress by late later on in
[1:28:58] 2026. >> Sounds good. Uh question 16 talks just about the difference between geostationary orbit and polar orbiting.
[1:29:09] U I think that was covered in the slides as well and the the fundamentals of remote sensing. Uh, I know we're at our
[1:29:16] ending ending time. Um, but let's can we just perhaps Erin, if you want to end on question 17, which is the when is the
[1:29:26] reprocessing for the version 4 going to be available? Do do we do we have a a timeline on that?
[1:29:34] >> Oh man, I'd love to provide a timeline. Um, we've been discussing with the tempo team back and forth on this and um, we
[1:29:43] don't really have a good timeline for when all that reprocessing will be done. >> Um, but I will provide an email and we
[1:29:52] will provide an email to all the tempo folks um, and on our various email chains um, and email communication
[1:30:01] chains when that reprocessing is complete. But I hope I'm going to throw a ballpark. We hope by the middle of
[1:30:09] this year it'll be all done and reprocessed. But I don't have a good timeline. Unfortunately, >> there's a lot of data to go back over
[1:30:18] and there's uh yeah, it's want to want to be sure we're doing it right and it it can take some time to go back over
[1:30:26] hourly to get out for >> for years. The key is we'll provide in an email notification when that's done.
[1:30:32] So everybody will know if you're on our emails. emails. >> So sign [snorts] sign up for the emails
[1:30:37] if exactly when that uh will happen. Um so I know we're at time uh I think a couple
[1:30:52] >> we can try to maybe address question six. I was a bit um I guess the the main
[1:30:58] thing with formaldahhide it's just a challenging um trace gas due you know when you're trying to use a satellite to
[1:31:06] measure formaldahhide um it has a lower atmospheric composition compared to NO2 um we a much weaker not much but a
[1:31:15] weaker spectral signature compared to NO2 for example we don't have that same sensitivity that we do with
[1:31:23] formaldahhide as NO2 too. But um that being [snorts] said, we can still we have shown that our front hydide
[1:31:30] retrieval is good from tempo, just not as good as our NO2 due to these challenging, you know, these other
[1:31:36] challenging issues tied to formaldahhide in the in the troposphere. Hopefully that clears that up. Right. Um, I know there were a couple more
[1:32:02] questions that came in. Um, I don't know if we want to stay on or or regardless, these will all be uh answered in this
[1:32:11] document and posted on the website. Um, so question 18 is referring to question 13. Yeah. So, uh P PM2.5
[1:32:29] uh uh I think the link I think we're we're asking for the Okay, I think the the link to where the
[1:32:42] aerosol tempo training will happen. Um I think if you sign up for the uh our set mailing list. The announcement will go
[1:32:52] out when we have dates on that. We're we don't have set dates for when the tempo aerosol training will be happening at
[1:33:00] the moment. Uh because we we want to make sure the products are uh available at that point. Um but I think sign up
[1:33:07] for the the mailing list and you'll get you'll be the first to know when the registration opens for that that
[1:33:14] training. Do you see that question 19 that came in there? I don't if we want to address
[1:33:21] that or not, but >> that one's all you. Do you wanna you have anything to add to that? Uh
[1:33:28] people need to do that. >> No, they don't. I mean, right, like we mentioned in the training, um we use the
[1:33:34] GOCF GOCF model for this CTM and conversion of in the and the generation of AMFs to uh for
[1:33:43] our product. So, and the GOCF is at a quarter degree resolution or grid spacing. Um, so I'll just leave it at
[1:33:51] that. I mean, there are things that can be done with other models to bring in that may be higher resolution, right?
[1:33:59] But that is another um I guess more intense training >> and I think uh for for purposes of this
[1:34:06] training probably um you all on the back end on the on the tempo side of things have already incorporated that. So I
[1:34:14] think what I would s think is uh people don't need to worry about that and um you can use the products as they are and
[1:34:23] don't need to worry about that. >> Yeah. >> Okay. Um I think we might be at the end then. Uh
[1:34:34] thanks to everyone who attended. Um and hope to see everyone two days from now on on Thursday, same time or a few hours
[1:34:45] later. You can find the the link on the website. There's there's two sessions each day. Uh thanks everyone for joining
[1:34:52] and I'll see you next time. >> Thank you.
