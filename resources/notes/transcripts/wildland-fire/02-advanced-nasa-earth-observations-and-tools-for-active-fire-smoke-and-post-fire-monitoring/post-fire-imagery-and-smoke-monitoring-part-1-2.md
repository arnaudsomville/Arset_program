# Post-Fire Imagery and Smoke Monitoring Part 1/2

`https://www.youtube.com/watch?v=dk4TWK0aOUI` · id 326 · 1:00:33 · module 310 — Advanced NASA Earth Observations and Tools for Active Fire, Smoke, and Post-Fire Monitoring

[00:00] Welcome everyone to our ARSET training series, Introduction to Advanced NASA Earth Observations and Tools for Active Fire, Smoke, and Postfire Monitoring.
[00:09] Today is part one of our training series, postfire imagery and smoke monitoring. My name is Brock Blevens.
[00:15] I'm a training coordinator for the RSET program, and I'll be your host for this training series. But before we begin today's training, a
[00:25] few quick words about the ARSET program. NASA applied remote sensing training or ARST program provides cost-free training
[00:34] on the use of remote sensing observations, analysis methods and tools. We provide training in several thematic areas, agriculture, climate and
[00:44] resilience, disasters, ecoconservation, ecoconservation, health and air quality, water resources, and such as the training here today, wildland fires.
[00:55] Our set provides trainings both online or in person. Our online trainings are delivered in two formats live and
[01:01] instructorled like today's training or asynchronous and self-paced like NASA's free and accessible data. All of our trainings are offered at no cost. We try
[01:12] to offer trainings in more than one language whenever we can and we only use no cost and open- source software and
[01:18] data. We offer our trainings at a range of levels so you can find a training series that fits your level of
[01:23] experience and need. Please visit our website to learn more. We'll begin today's session by giving an overview of the training series advanced
[01:32] NASA Earth observations and tools for active fire smoke and postfire monitoring. Consistent and routine monitoring of active fires, smoke transport, and
[01:44] postfire burn severity is essential for understanding both the immediate as well as the long-term impacts of fire on
[01:51] ecosystems, air quality, and human infrastructure. infrastructure. Satellite observations provide continuous and often global data that allow for early detection of new fire
[02:02] ignitions, the tracking of fire progression, and monitoring of smoke transport. These data can help guide emergency responses, reducing risk to
[02:11] communities, postfire, burned area, and burn severity maps can be used for damage assessment, evaluation of vegetation loss, and debris flow risk
[02:21] assessment. This information can help scientists and land managers support recovery efforts. Overall, satellite monitoring is a key tool for both
[02:30] immediate fire response and long-term environmental management. And here are training learning objectives for the series. By the end of the training,
[02:39] participants will be able to access relevant postfire imagery in the firm's burned area mode to assess burned area,
[02:47] burn severity, and other factors. Identify and track wildfire smoke over time using corrected reflectance amps aerosol index and pyrob layers available
[02:58] in the firm's smoke aerosols mode and also understand when to use the pyrob layer. layer. Use relevant data and firms to identify
[03:08] static thermal anomalies associated with industrial and natural sources that are not vegetation fires and use Jupyter notebooks to assess and
[03:18] visualize firms data for different case studies. A prerequisite for this course, we recommend that you take our fundamentals
[03:28] of remote sensing to familiarize yourself with the terminology and concepts you might hear in today's training or have equal knowledge coming
[03:36] in. This training also builds on a previous ARST training, introduction to NASA Earth observations and tools for
[03:42] wildfire monitoring and management. This training gave an overview of the NASA fire information and resource management system or firms,
[03:51] the modules available in firms. We explored the data as well as the characteristics of available satellitebased active fire detection and
[03:59] provided demonstrations on how to query, access, and visualize the data in GIS and other applications. This training will also discuss burn
[04:08] area and indices for burn severity. So for more information on those, we recommend reviewing our previous training spectral indices for land and
[04:17] aquatic applications. So here's our training outline. In part one today, we'll be covering postfire imagery and smoke monitoring. And then
[04:25] in part two, a week from today on November 19th, we'll be looking at data analysis and visualization. There'll be
[04:31] one homework associated with this training and it will be available on November 19th on the day of our last
[04:38] session and it will be due two weeks from there due November 3rd and that will be posted on the training web page.
[04:45] A certificate of completion will be awarded to those who attend all live sessions and complete the homework
[04:51] assignment before December 3rd. So let's start part one. Our part one trainers today we're lucky to have Jenny Houston. She is the Lance
[05:02] manager and Diane Davies who is the Lance operations manager. And the objectives for the part today participants will be able to recognize
[05:12] the strengths and limitations of available postfire indices and imagery products in the burned area mode. Access available indices and imagery
[05:21] products and burns to assess burned area and fire damage severity. burned area recovery status and other land cover
[05:29] characteristics. characteristics. Recognize the strengths and limitations of available smoke and aerosol data products and firms. And this will be
[05:36] used for monitoring smoke extent and tracking progression. And then how to access available satellite data products and firms that can be used to track the
[05:45] extent and progression of smoke. Just as a reminder, some of the key concepts we'll be using during today's
[05:52] session. If you're completely unfamiliar with these, you can refer back to our recommended prerequisites. One is true color imagery is used to
[06:00] show an image as a human eye would see it. It uses red, green, and blue wavelengths to represent the
[06:06] corresponding colors in the real world. False color imagery is created by assigning wavelengths invisible to the human eye such as infrared to colors
[06:15] like red, green, and blue. False color imagery is used to enhance surface features like the presence of vegetation
[06:22] or a burn scar. A spectral index combines different wavelengths of light to highlight specific features on the Earth's surface
[06:31] or atmosphere. Different indices can give information on the health of vegetation, water quality, burn severity, the presence of aerosols and
[06:41] more. more. Examples of these referred to in part one are the normalized burn ratio or NBR, the normalized difference
[06:50] vegetation index, NDVI, and aerosol index. index. How to ask questions. Please put your questions in the questions box and we'll
[07:01] address them at the end of this training. Feel free to enter your questions as we go. We'll try to get to
[07:06] all the questions during the Q&A session after the training. The remainder of the questions will be answered in the Q&A
[07:13] document which will be posted to the training's web page about a week after the training. So now I will hand this
[07:19] off to Jenny Houston who will start us with burned area mode in firms. Thank you Jenny. >> Okay great. Welcome to this
[07:33] demonstration using firms to map and monitor burned area and postfire dynamics. The demos will provide an overview of
[07:43] the firm's burned area interface with global burned area products and an overview of the vegetation indices and
[07:50] other imagery available to analyze burned area and postfire dynamics for a particular area of interest. By the end
[07:58] of this session, you should be able to assess burned area globally using the monthly and annual burned area products
[08:05] available for modus and VAS and be able to analyze burned area and postbiodnamics for a particular area of
[08:13] interest using vegetation indices and other imagery from the harmonized Lancet Sentinel data set. There are two global burned area
[08:29] products that can be accessed through the burned area mode as well as the advanced mode which you can access here.
[08:37] There is the NASA modus monthly burned area product as well as the NASA via monthly burned area product. The modus
[08:47] burned area product is generated using modus on terra as well as modus on aqua. The VS product is generated using VAS
[08:57] aboard SNPP. The modus product is available from late 2000 and the VA product is available from early 2012.
[09:11] If I change this to 2025, you will notice that the products are available, both the modus product as
[09:20] well as the via product through August of this year. And And that is because the products are based on a burned area
[09:35] algorithm that uses a time series of reflectance imagery to identify abrupt changes in reflectance. The algorithm then checks for the persistence of this
[09:46] abrupt change and then uses a series of active fire detections to doublech checkck these changes resulted from
[09:53] wildfires. This process can result in a lag of anywhere from two to four months. Now, as they are both based on the same
[10:05] algorithm, the the v uses a modified version of the modus burned area algorithm. This ensures that the v
[10:15] product will provide continuity to the modus product once terra and aqua which both carry the modus instrument are
[10:22] decommissioned. decommissioned. And both products also have the same spatial resolution 500 m. Other options to note on the uh
[10:34] interfaces again the interfaces are are identical. There is the monthly product that is available and then there is also
[10:42] an annual cumulative product. The monthly product can be viewed for one, two or three years simultaneously. For example, you can change the dates to
[10:56] any year of interest and then the relevant year will pop up at which point you can manipulate which of the layers,
[11:05] which of the months you would like to uh view based on your area of interest. You can change the colors here and you can
[11:14] change the uh opacity of a particular month using this tool. You can also decide whether you want the months
[11:23] filled or would like to use um an outline instead. And then there is the annual cumulative product. And again you
[11:35] can look at this uh for one, two or three years simultaneously. Okay. So that's the interface and now
[11:47] we're actually looking at the Pansanel region in South America. It is the world's largest wetland and it
[11:54] is located in this area of Brazil, Bolivia and Paraguay. So all throughout this area here, the Panel generally experiences a dry
[12:09] season between June and October. And in 2023 and 24, the region actually saw a significant drought and a large
[12:18] amount of area burned. We are actually looking at, let me just collapse these down for a moment. We're
[12:26] actually looking at a modus board aqua false color composite produced using band 7, two, and one. And burned area in
[12:35] this composite shows up as a brick red color. You can also see active wildfires and smoke emanating from uh the
[12:44] wildfires in these areas here. We can now explore when the area is burned using the burned area product.
[12:57] Let me collapse a couple of layers and then open up the modus burned area product. So I change this to 2024.
[13:07] And now I can look at the areas that burned and were mapped by the modest product in May,
[13:16] in June, in July, and in August 2024. 2024. As I mentioned, you can change the color of individual months. And so we're going
[13:28] to change June to more of an orange color because the green does not really stand out on the false color composite.
[13:42] And if we turn each of these layers off, you can actually see the burned area that was
[13:50] mapped underneath the burned area product generated by motors. Now, if we fast forward to the end of
[14:02] September September and pop that on, we can see that even more area has burned. Again, there is
[14:11] smoke from some of the active fires. And this is all of the area that was burned from the end of August to the end of
[14:23] September. September. And if you wanted to compare the modus and vas burn area product, you pop down to the v product
[14:36] and select the same year 2024. And we will compare August. Now we're actually looking at August 2024 of modus and
[14:47] August 2024 of VAS. And let me change the color of the via product to a yellow so that we can
[14:59] now see uh both products. V is in yellow and we can actually see how well the products generally correspond to each
[15:06] other even though the products are from two different sensors modus and vs. And these have different sensor
[15:14] characteristics. characteristics. And if I zoom in and now pick up the opacity tool and slide back and forth,
[15:29] we can see how well the products overlap and any small differences that uh that there may be. In fact, on average, the
[15:39] annual global difference between the two products is 2 to 6%. And this is all explained and documented in a recent
[15:47] paper by Jiglio that is in the references section. In this section, we're exploring other data layers that can be helpful in
[15:58] assessing burned area, postfire dynamics, etc. We're using the firms US Canada and we're going to explore the
[16:07] harmonized LANCAT Sentinel 2 imagery dropdown dropdown right here using the mosquito fire in California. California. This was the largest fire in California
[16:20] in 2022. It started in September the 6. It burned in two counties, Place and El Dorado. And just to orientate a little
[16:31] bit to the east is Lake Tahoe on the border of California and Nevada. This is an older burn. This is the uh Calderon
[16:41] fire burn from uh 2021. And then over to the west are um irrigated areas. We're actually looking at
[16:53] a a false color composite from two days into the fire on September the 8th. This particular particular uh image was generated mainly using um
[17:09] OI aboard LANCAT 8 and 9. And you can see which source of of data is providing the image by clicking these on and off.
[17:23] And if we zoom in a little bit, you can see this is the area that has already
[17:28] burned in brick red. And there are active fire fronts on multiple sides of the fire and lots of smoke emanating
[17:36] out. out. We can also make use of the active fire detections detections to look at the progression of the fire.
[17:46] So if we hop forward to September the 12th and look at a week's worth of active fire detections.
[17:54] And for this we'll use the active fire detections from VA on Noah 20. And we'll just give it a moment to load.
[18:06] Okay, Okay, now we're looking at all the active fire detections over the first seven days. So, the 6th through the 12th. I have the
[18:16] this uh set the display set to timebased. And so, we're actually looking at these based on when they were
[18:24] detected. So, orange and red are the most recent. And again, this is um days since detection. All right. So we have
[18:34] made use of uh the FOSCOL imagery as well as the active fire detections to look at the onset and progression of the
[18:43] fire over the first week. And to help users assess areas that have been burned, we've recently incorporated a
[18:51] number of vegetation indices from the HLS data set that are available under the HLS imagery dropdown, which I'm
[19:00] showing over on the on the right. So let's fast forward to further into the fire. So on the 25th of September,
[19:11] we're now looking at a false color composite from the 25th of September. And if I change this to one day and give
[19:20] it a moment to load, let me zoom in to the area. And so this is the area
[19:29] that has burned that appears in in brick red in this false color composite. And now we're going to make use of the
[19:36] normalized burn ratio or NBR. So let me pop that on. And the NBR from from Lancet OI is
[19:50] calculated using infrared and shortwave infrared bands. That's bands five and then bands seven of the shortwave infrared. And the MBR can be useful
[20:02] firstly in mapping the extent of the burnt area. In this palette, purple shows vegetated areas and shades of
[20:12] orange show burned areas. Secondly, the NBR can help in assessing burn severity. Darker orange areas generally indicate
[20:22] more severe burning. some more damage to vegetation, increased bare or exposed uh ground, presence of ash, etc.
[20:31] But it's important to note that the NVR can be impacted by terrain effects. So things such as steep terrain, shadow,
[20:40] etc. of which there was a lot uh in this area. And then as I mentioned, increasing shades of purple generally
[20:48] indicate healthy vegetation or only lightly burnt areas. The third way that the MBR can be helpful is in planning
[20:56] vegetation recovery and postfire response activities. All right. So, keeping this image in mind, let me now change the date to
[21:11] 3 years later on. So, 3 years post fire. And And there was actually a good image available on the 24th
[21:24] of September. Okay. So now we can see more shades of purple indicative of recovering vegetation and undamaged or healthy
[21:41] vegetation and lessening shades of orange. Remember there was a a a lot of orange in this area
[21:51] and the orange is indicative of damage to vegetation burn severity etc. And if we pop on the false color
[22:01] composite, we see more shades of green which is indicative of the vegetation recovery. And I have loaded up the image that was
[22:20] collected after the first uh several days of the fire. And all of this uh is is burned area throughout
[22:29] here and then this for comparison uh three years later on. So we can look at two snapshots now. The freshly burned
[22:37] and then three years after. And with this we can start to assess the magnitude of change that has has occurred and the recovery
[22:47] of of vegetation over time. In addition to the normalized burn ratio, we also have available the normalized difference
[22:55] vegetation index or NDVI, the normalized difference moisture index and then the normalized burn ratio too. And each of
[23:04] these can be explored after the webinar using the uh information tool. At the bottom of the interface, I wanted
[23:15] to highlight that all of the bands for both Sentinel as well as LANCAT. So the 10 Lancet
[23:24] bands and the 12 Sentinel bands are available so that you can generate your own customized band combination
[23:34] using the bands that are available. You can also download the modus and via burn area products for using a GIS for
[23:46] example. You can navigate to the page using the downloads option here or you can access it over on the left via the
[23:57] download archived data from this dropdown. dropdown. The files are available in HDF, geotiff or shape file format and download
[24:09] instructions are detailed in the user guide. So the modus user guide is here and the v user guide is listed here.
[24:17] There's also additional downloading guidance noted at the bottom of the page here. Uh, thank you so much Jenny for your
[24:28] demonstration on the burned area monitoring and postfire dynamics. And now I'll send this off to Diane Davies
[24:35] who will talk about the smoke and aerosols mode in firms. After a little bit of background information, Diane
[24:42] will demonstrate an overview of the smoke aerosols mode in firms as well as tracking smoke and aerosols using the
[24:49] amps aerosol indices and corrective reflectance imagery. Thank you, Diane. >> Great. Well, welcome to this demonstration on using NASA firms to
[25:01] monitor smoke and aerosols. By the end of this session, uh you should know how to use firms to track smoke from routine
[25:09] fire events all the way up to extreme pyroumulo nimbus or fire induced events that can inject smoke into the
[25:16] atmosphere. atmosphere. So, let's get started. First, I wanted to just um establish our foundation that when we talk about aerosols, we're
[25:26] referring to tiny particles suspended in the atmosphere. And these come in many forms. We have natural aerosols like sea
[25:35] salt from ocean spray, dust from deserts, pollen from plants, and volcanic ash. We have human generated aerosols from vehicle emissions and
[25:44] industrial pollution. And then we have fire generated aerosols. And this is where smoke fits in. So a key concept
[25:52] from this is that smoke is simply a type of aerosol. It's made up of tiny particles from burning vegetation. And
[26:00] because it's suspended in the atmosphere, we can track it using satellite instruments. And that's what makes firm so useful for smoke
[26:07] monitoring. monitoring. And why does this matter? It matters because smoke doesn't just stay local. These particles can travel hundreds or
[26:16] even thousands of kilometers from their source, affecting air quality far from the original fires. So understanding smoke as an aerosol helps us use the
[26:26] right tools to track its movement. So what tools does firms give us for tracking aerosols? Well, we're going to
[26:34] be looking at the smoke and aerosols mode. And uh I think there are three main data sets that are extremely
[26:40] useful. First we have visual detection through corrected reflectance imagery. So firms through NASA Gibbs provides true color imagery from multiple
[26:51] satellites. So we've got the modus instruments on board terran aqua and the v v instruments on sunumi mpp Noah 20
[26:59] and noah 21. And this imagery shows us what the earth looks like from space as our eyes would see it making smoke
[27:07] plumes look clearly visible against the landscape. landscape. I should just note that in the advanced tab of firms which I'll uh come to
[27:16] later, we also have the harmonized LANCAT sentinel imagery which has a 30 meter resolution but it's only available
[27:23] 2 to 4 days after satellite overpass and I know that's been covered in some of the other training sessions. So in
[27:30] addition to the visual detection we need quantitative measurements and that's where the amps aerosol index products come in. AMPs or the ozone mapping and
[27:40] profiler suite was originally designed to measure ozone but it excels in detecting aerosols in firms. We have two amps aerosol index
[27:50] layers um and we'll discuss those in a moment but I just want to mention um active fires because as I mentioned
[27:58] earlier smoke is just one type of aerosol and so adding in the active fires helps us distinguish what sort of
[28:04] aerosol we're looking at and make us more confident that we're looking at smoke as opposed to dust for example.
[28:11] And um in my example we'll we'll look at both smoke and dust. So I mentioned that firms actually
[28:19] provides two related amps aerosol index products. It's actually the same index and the value is related to both the
[28:26] thickness and the height of the atmospheric aerosol layer. Um but they have different values. So understanding uh when to use each one is key to
[28:35] successful smoke monitoring. The standards aerosol index has a range from 0 to 5 and this works perfectly for
[28:43] most smoke and dust events. values above five are actually filtered out of this product because they're considered too
[28:49] extreme for routine monitoring. But what happens when we have extreme fire events? Well, that's where the pyroumula nimbus or pyrob layer comes
[28:58] in. And this has a range from 5 to 50 and removes all that high value screening and is useful for identifying
[29:05] fires with dense smoke blooms. And it has effectively been used to track these pyroumulum nimbus clouds or
[29:13] thunderstorms generated by wildfires. And so it's useful to know when to switch between these two layers. Um we
[29:20] generally start with the standard product for routine monitoring and switch to the pyrob layer when you're dealing with extreme fire events or when
[29:28] you see gaps in the standard product. So let's just spend a moment uh looking at what these numbers mean and uh the
[29:37] resolution of the data. Okay. So this is very approximate but generally for the standard amps aerosol index values from 0 to one indicate
[29:45] clear or minimal aerosol conditions. Values from 1 to three show light smoke or dust. 3 to five indicate moderate
[29:54] smoke levels. And uh here's an important threshold that when you see aerosol index values of five, that indicates
[30:02] heavy aerosol conditions that can reduce visibility and impact human health. For the pyrob layer, values above five
[30:10] indicate dense smoke that's probably reached higher in the troposphere. I should point out that there's a bit of
[30:16] variation between the amps aerosol index between products between sumP and Noah 20. Um this should be rectified in the
[30:24] future but for now values above seven from sumP and values above 10 from Noah 20 suggest a likely pyrob event and uh
[30:36] values from 20 to 50 indicate extreme pyrob events where smoke has likely been injected into the stratosphere.
[30:44] So temporally we get daily coverage with near real-time observation um within about three hours of satellite overpass.
[30:52] This global daily coverage is what makes AMPs so valuable for tracking smoke transport over long distances. In terms of the resolution, the spatial
[31:02] resolution's aerosol index from Sunumi MPP has a spatial resolution of 50 by 50 km. km. The newer Noah 20 and Noah 21 satellites
[31:13] actually provide higher spatial resolution for the umps aerosol index and ultimately this will give us more detail in smoke plumes. But currently
[31:23] firms displays both the aerosol indices from sumP and Noah 20 at a resolution of 50x 50 km. In the near future, we plan
[31:33] to enhance the resolution of the Noah 20 amps data to 12 by 17 km and add in the
[31:41] amps aerosol index data from Noah 21 which will have a 10x10 km resolution. And uh this is what that will look like.
[31:55] So I'm just going to switch out here. So now I let's uh see this in action with a real world example. I'm going to
[32:06] walk you through the Canadian uh wildfire events that occurred in May 2025. 2025. So when you first go into firms, you
[32:14] you'll be in the basic mode. You can click on these horizontal lines at the top to go into the smoke and aerosols
[32:21] mode. And here I'm going to uh put on the um corrected reflectance imagery from Noah 21. And I'm going to zoom into
[32:31] I've already set the date here to May 24th, 2025. And now I'm going to put on the active
[32:39] fires. I'm going to put on the fires for um beers Noah 21. So they're coincident with the imagery. And you can start to
[32:47] see here that we can see some smoke plumes. So, these are milky white um against the landscape. And that's
[32:56] exactly how it would look uh to your eyes if you were viewing it from space. And you can see some cloud cover here to
[33:02] the left. And uh if I zoom out a little bit, you can also see there's snow to
[33:08] the north. And uh there's ice in the um Hudson Bay. So sometimes it can be a bit challenging
[33:16] to distinguish between clouds and smoke. And so that's why the fire active fire detections are very useful to help us um
[33:24] to to be sure that it is smoke. Um and now we're going to add in the amps
[33:29] aerosol index layer. And um here you can start to see that we've got um values in the probably in
[33:39] the 2 to four range. If you want to look at the actual values, you can click on
[33:43] this opacity button here and you can change the values. So if you just wanted to look at values from two, you can
[33:50] change it here. Uh almost there. Um and there you are. Um you can also if you want to be able to see through the cloud
[33:59] as well, you can change the opacity. So um sorry, if you want to see the through the aerosol index, you can change the
[34:05] opacity here. So that's quite a useful useful tip. So this shows us where the smoke is and the aerosol index starts to
[34:13] give us an idea of how dense the smoke is. And in this case, it's it's not very
[34:17] dense, but as we progress through the dates, you can see um that the aerosol index values are getting higher and the
[34:26] um smoke plume is getting larger and denser. denser. So, I'm going to scroll through a little bit more. Um all right. Now, watch what
[34:37] happens if I put on the pyroumula nimbus layer. You can see um that we now have so I changed this to blue to make it
[34:46] really stand out. But again there's a functionality here. This is the default. Um you can switch it to whatever color
[34:53] you you you like for your preference. Um but you can start to see that um the smoke is being lofted high into the to
[35:00] the troposphere and um it's starting to transport well beyond the boundaries of Canada. Canada. So, um, what I want to do now is I just
[35:11] want to switch across and show you an animation of this smoke plume. You can see, um, I'm going to put it on to
[35:20] repeat actually so that you can see it uh, a couple of times. So, here we are. We've got, if you can see my cursor,
[35:27] we've got the smoke plumes coming from Canada. They go right across the Atlantic to Europe and um, and onto
[35:34] Asia. And at the same time as heading out into the Atlantic, there's also a plume that goes up to the Arctic. And
[35:40] you can also you might also notice that there are some fires occurring in eastern Russia. Um, and you can see
[35:47] again that the smoke plumes are quite large there. Now, you might notice that there's quite a lot of activity going on
[35:54] on the west coast of Africa, north and west coast of Africa here. And so, we're just going to take a look at that. um
[36:02] because in this case it's still aerosols but it's not actually from fires. So we're going to follow the same procedure. We're going
[36:11] to have a look at the um corrected reflectance symmetry and um I'm just going to scroll through
[36:18] to to the third I think it is. Yeah. So what we what we what we saw here was that we
[36:26] were seeing fairly high aerosol indices in the Sahara. Um and we can tell whether or not it's smoke or fire by
[36:37] looking to see if there's any fires close by and if we can see any smoke plumes. And in this case there isn't.
[36:43] Um, and also if you turn this off, you can see that we have a huge dust plume
[36:49] coming off the west coast of Moritanium. And um, again, if I just zoom out, you can start to see
[36:59] Oops. Just let it catch up. There we are. You can see the smoke plume coming out into the ocean. And uh, there you
[37:07] can see the amps aerosol index. And I probably should have put this back down to the original value before I started.
[37:14] So again, it's approximately right. Okay. So there's an example of dust rather than just um than smoke.
[37:23] Okay. Okay. So the other thing that I wanted to look at at um um was was an example from India. So um in northern
[37:38] India there tends to be reoccurring seasonal haze and pollution that becomes trapped near the ground by seasonal
[37:45] weather patterns and this can create unhealthy air quality. So here we are. We've jumped to to India for November
[37:54] the 1st and you can see here that we have these um seasonal agricultural fires. This is where they burn the
[38:01] remaining stubble from after the rice harvest. So this um stubble burning often creates um haze and smoke. And
[38:09] again if you use the um time slider, you can see how this progresses. And this is um this has been a source of contention
[38:18] often in the news in um in Delhi and uh northern India due to the poor air quality.
[38:28] So I just wanted to show you what a pyroumulanimus event looks like in firms. So I've jumped over to the
[38:35] advanced mode here and um we are looking at the um via Noah 21 uh imagery and you can see
[38:45] that we've got very thick smoke here. We've got the um winds going from kind of west to east. And um if we put on the
[38:54] aerosol index, you can see that uh we've got quite high values. Um and if we put on the pyroumula nimbus event, you can
[39:03] see pyrochumula nimbus layer, you can see that where you've got these gaps in the uh standard uh layer, you it's
[39:10] filled in with the um the amps pyrob layer. Um, so I'm just going to turn those off for a moment and uh just zoom
[39:18] in. So what we're actually seeing the pyroucumulin event, you can actually see them pretty well here. Um, but what's
[39:26] happening is the higher values um, in terms of the aerosol index only show when the smoke has been lofted into the
[39:33] air and is being transported. Um, but yeah, just to show you uh quickly what it looks like, I'm going to just put on
[39:40] the Vers 21 active fires. And again, um, just to show you here, if you if you want to kind of just match, uh, the
[39:49] daytime fires with the imagery so it's constant, you can even, um, again change the size of the pixel so you can really
[39:56] get a good view of the smoke. And in this case, what I just wanted to also show you is that um in the advanced
[40:02] mode, we have the um HLS layers. And I think uh we've seen these in previous RET trainings. Um but here you can put
[40:11] on the uh I think it's the the LANCAT data. Yep. And uh if you zoom right in
[40:16] again, you can see that thick smoke that's um funneling up uh the funneling up into the um troposphere. and um and
[40:28] then being lofted across and I think it's so these pyrochuminous events we've seen quite a few of them this year and
[40:35] uh in previous years I think 2023 um had a record number of pyro CB events in um
[40:41] in Canada and uh these are very much uh smoke fire induced uh thunderstorms that can impact the weather and uh loft these
[40:49] uh smoke aerosols uh far into far transport it very many kilometers I just wanted to recap on um when to use
[41:01] each product. So the standard amps aerosol index should be used for most situations uh for routine monitoring for
[41:08] smoke and aerosols. And the pyrob aerosol index layer should be used um when there are extreme events um when
[41:17] you think there might be fire thunders fire created thunderstorms or gaps in the aerosol index product. And then just
[41:24] just by way of recap, I think firms is particularly uh useful for monitoring and tracking smoke by starting with the
[41:33] true color imagery to give you a visual overview of smoke, potential smoke and um aerosols and then you can add in the
[41:41] aerosol index and then re I recommend that you add in the active first better distinguish between smoke and other
[41:48] forms of aerosols and then switch to the pyrob aerosol index if values exceed lead five and then use the temporal
[41:56] progression um to track the fires over a number of days. And um you can also use the orbit tracks
[42:04] and subd timeline for for adding additional time context. >> Okay, thank you so much Diane and Jenny
[42:15] and thank you very much for demonstrating those for us today. So just as a summary today we looked at
[42:22] an overview of the available burned area data sets and postfire imagery and indices. We had a demonstration of
[42:28] firm's burned area mode, an overview of available aerosol indices and then a demonstration of firm smoke and aerosols
[42:36] mode. mode. Looking ahead to part two, we'll be visualizing active fire information on static graph and interactive maps.
[42:46] analyze active fire information using a fire count histogram. Overview of static thermal anomaly data available in firms and how to use that
[42:56] static thermal anomaly data information to identify thermal anomalies that are likely not vegetation fires. And just as a reminder after part two
[43:07] we'll have a homework available and it'll be due on the 3rd of December. Anybody who attends both live webinars
[43:14] and complete the homework by the third will receive a certificate via email approximately two months after the
[43:19] completion date of this training. Here's the contact information for Jenny Houston, Diane Davies, and myself, Brock Blevens, as well as a link to the RSET
[43:31] website and ARSET YouTube channel. Thank you very much. And now we'll start the question and answer session.
[43:44] Okay, great. Well, let's just jump right into it here. Your questions have been coming in throughout the presentation
[43:51] and we've been diligently getting to these as well as we can before this session. So, we can jump right into it.
[43:59] Uh, we have Jenny and Diane on here. So, we'll start off with question one. Most of the satellite analysis is mainly
[44:09] for focusing on examining the incident that happened already and satellite update intervals extend the extend the damage further. Is there any possibility
[44:18] to predict or foresee the incident beforehand? >> I'll take that. Shall I Jenny? Okay. So um no, there aren't any specific layers
[44:29] in firms global that enable users to predict fires unfortunately. Um and we have struggled with the idea of putting
[44:37] in some kind of fire danger rating um globally. Um so that that's just not available as local conditions vary. Um
[44:46] however firms has recently added vegetation indices from HLS which Jenny showed and these can be found in the
[44:53] advanced mode and include the normalized difference vegetation index and normalized difference moisture index and these could be used locally to help
[45:02] monitor fuel conditions. Um for firms US Canada there are a couple of layers which may be of interest. There's a US
[45:09] flag warning and a US fire weather watch. Um so these are watches and warnings issued by the National Weather
[45:16] Service and their criteria varies for each and um National Weather Service forecast area. Um a fire weather watch
[45:23] is issued when there's a combination of dry fuels and weather condition weather conditions that support extreme fire
[45:30] danger and the red flag warnings are issued when these extreme conditions are anticipated in the next 24 hours.
[45:38] >> Thanks Brooke. >> Great. Thank you very much. Uh second question, uh the HLS product is only
[45:45] available over US and Canada or with firms global. Can we access the data set? >> Well, thanks Brooke. So the data are
[45:55] actually available in firms global. Um one thing to to note that uh there is a delay in the data set. There's a lag of
[46:06] anywhere between two to four days. So again the the imagery is available in um firms US Canada as well as firms global.
[46:17] Sometimes it can be helpful to to zoom out and just be a little patient so you can see the uh the imagery actually um
[46:27] load on the screen. And uh just to know this is different than the the LANCAT active fire data and
[46:36] they are only available uh for the US and Canada. So again the HLS imagery are available uh globally with this um with
[46:46] this slight uh lag time. >> Question three. Given that the firm's platform will not be updated temporarily
[46:54] as indicated by the notification, what alternative solutions can you offer us? Yeah, thanks for the question. So the uh
[47:04] there are no um enhancements or or updates being made to the website currently uh due to the lapse in in
[47:13] funding, but the actify detections and image products continue to be uh ingested automatically into firms. Additionally, any outages or data
[47:24] anomalies that occur h have been addressed um as uh as as um as they've occurred. >> Great. Thank you. Um we'll see what we
[47:37] can do to swing back around and address question number four. Um in the meantime, uh we'll move on to number
[47:44] five. Um I'm working with a gener working on generating monthly time series data sets of burn severity
[47:50] metrics over large pixel scales using modus. My main challenge is identifying appropriate pre-fire and postfire time windows for calculating the NBR for each
[48:01] month. Could you suggest a effective approach? So, I'm actually going to invite um my colleagues to to address this, but I
[48:16] actually think this uh question um will take a little bit of time to to just uh think about and develop the the best
[48:25] answer for Diane. I don't know if you have uh an idea um off the top of your
[48:31] head. head. >> It's such a great question. I think um we would be better off getting a proper
[48:39] answer from some of our science team to help answer this question. >> And we we do um as you know we do answer
[48:48] um all of the the questions um as soon as we as soon as the webinar finishes and we have additional information
[48:56] available. available. >> Yeah, that's great. Um we we figure we might as well uh give a a little bit
[49:03] more of a thorough answer to this. So uh please give a a little bit of time to
[49:07] make sure that we can answer this answer this as accurately as we can. Um question number six. Does the aerosol
[49:13] index correlate with the concentration of smoke plumes? That is my understanding um that it's it's to do with density and um height of
[49:29] uh smoke plumes. But again, I feel like uh this is a very technical question and I will confirm once we um circle back
[49:40] with the final answers unless anybody else on my team would like to chime in. I I'm in agreement Diane. I think uh
[49:54] addressing this when we have additional information uh will be ideal. >> Great. Once again in the sake of
[50:01] accuracy please give us some moments on that one. Uh question number seven is there some way to use amps in a
[50:07] geostationary satellite. >> So AMS is on board S SNPP Noah 20 Noah 21. These are all polar orbiting uh
[50:17] satellites versus the geostationary satellites such as um go east and west. Uh question eight, can we use this data
[50:28] to predict when first nation communities should look at evacuation? So it just looks like emergency response. Uh and
[50:40] >> sure we we would caution against that. Um the data are provided as is and we take no kind of responsibility for it
[50:50] being used in evacuation circumstances. We would rather advise that you use local knowledge on the ground. Um
[50:57] obviously sometimes people find the data is helpful but please remember that you know the data is near real time. So
[51:04] approximately 3 hours after satellite overpass and these are polar orbiting satellites. So they're not constantly updated updated um throughout the day. We have the
[51:13] geostationary satellites which do have um uh you know they are updated throughout the day and night. However,
[51:21] the spatial resolution of those uh pixels is is not really good enough for that kind of decision making I would
[51:29] say. say. >> Great. So the uh the geostationary data is a has a higher temporal uh but maybe
[51:38] the trade-off being spatial. >> Yes, thanks for that clarification. Yeah. Yeah. >> Uh question nine are temperatures of the
[51:47] fire of the temperatures of the fires available. available. >> I was trying to find the unmute button
[51:53] there. Uh so the radiative uh power or FRP which is um the energy of the fire is available in the attribute
[52:00] information of the active fire detections and uh this can be identified by by actually clicking on the uh active
[52:09] fire detection which will bring up the attribute information um for each of the detections. detections. >> Dr.
[52:19] Based on the workflow provided, are there structured guidelines on how to properly reference the data acquired? >> Um, we do have that information. We have
[52:32] a um something you can use on your using our data and we will pop that in the
[52:38] chat as soon as I can find it. It's uh under data use and uh data use guidance
[52:43] and disclaimer. So, let me pop that in the chat for you. Great. Thank you very much. And I'll
[52:51] also include that link in this document for future reference too. Okay. And then question 11. Are these
[53:02] layers only applicable in Google Earth Engine or they can can they also be used in ArcGIS Pro as that is the main
[53:12] software used at my institution? >> Yeah. So I'm I'm rapidly uh putting the answer in here. So the the burned area
[53:21] products are available in HDF, geotiff and and shape file format and certainly the geotiff and shape file can be used
[53:29] in uh arcgis pro and there is information um on the uh on the fem uh website if um you look under download
[53:42] archived data. So those can be downloaded and used in RGis Pro. Additionally, the actifier detections are available in in multiple formats
[53:53] including CSV and and um and shapes and so they can also be used in RJIS Pro. >> Okay. So um I don't see any other
[54:05] questions adding to the question and answer box. Um, if you're not able to find that, uh, please look for the three
[54:14] little dots uh on the left lower corner of either your application or your web browser and you can see a Q&A section
[54:24] where you can answer your question or ask your questions and we'll move those over to this document. What we'll end up
[54:31] doing is cleaning this up for accuracy um, and then posting this ideally within a week. So um hopefully before part two
[54:42] next week we can have this available on on the website for your reference. Which sensor characteristics are
[54:51] essential for accurate detection and retrieval of atmospheric aerosols from satellite observations? So I guess it's just a comment on some
[55:01] characteristics. Yeah. Of of the sensor. Okay. Oh, everybody's really challenging us today. Um, >> I don't I couldn't give you a good
[55:17] answer to that either. I'm really sorry. I think we'll have to circle back to you. >> Okay. So, we'll bring this question to
[55:27] the science team and and and uh so look for this answer u once we post to our training web page.
[55:34] Yeah, I should just say that, you know, we we work very closely with our science teams and they provide us with all the
[55:40] um this type of information and uh we aim to make it easily accessible through firms. So, so apologies for not being
[55:48] able to answer those questions. >> Oh, we see a couple more pop in here. Uh this one seems to be a little bit more
[55:55] of a use case or hypothetical or maybe there's some case studies doing this, but how can satellite monitoring help in
[56:01] estate management? So I'm guessing this is mitigation or preparedness. >> Um I can take a stab at that. I guess
[56:13] you know you can look at um things like uh which areas have burnt over time. Um that might be useful for understanding
[56:21] fire regimes in your particular estate or area of interest. You can also look to see which um areas have burnt and so
[56:29] you might get a better understanding of which areas are more likely to burn in subsequent years or fire seasons. Um
[56:36] again, you know, I mentioned earlier on that we have um vegetation indices from the HLS data. Again, that might help you
[56:45] understand um what your vegetation conditions are like and give you a sense of whether or not it's more likely to
[56:52] burn. Um and and the same thing with for the active fire data. You know, again, you can look at um uh fire patterns over
[57:00] time. We also have an email alert uh service which is freely available. So, if you wanted to put your coordinates
[57:08] in, uh we could send you an alert uh when there's a fire in or close to your
[57:14] particular area of interest. >> Question number 14. You mentioned a 2 to 6% difference in fire detection between
[57:23] modus and fears. One tendi is higher than the other. And it looks like we have >> Yeah,
[57:33] >> thanks for that question. Sorry um Brock to uh to to interrupt. In fact, all of the information on um the inter
[57:42] comparison between the modus and via burn area products is available in the chiglio at l paper and I have pasted uh
[57:51] the link for that paper um in the question. >> We'll just tackle these last two here real quick. Confirms detect on
[58:01] greenhouse gases. So the active fire detections and the and the the burned area products that they don't directly uh detect any any
[58:11] greenhouse gases but they can be used in the um in the calculation of different uh greenhouse gases
[58:20] and Diane I don't know if you want to add uh any additional information to that that >> question 16 what are the strengths and
[58:28] limitation of aerosol index pro products for detecting lowaltitude smoke versus stratospheric results. results. Yeah, another excellent question and um
[58:42] we can certainly consult uh the the science team members um to get some more information on this
[58:50] >> and I and I would just from having spoken to the science team uh recently um in preparation for this I can say
[59:00] that um generally it would be you know you can use sorry the the lower aerosol index values
[59:08] indicate that you've got low altitude smoke. And you can um look at the corrected reflectance imagery to try and
[59:17] um verify this. And we will circle back on this answer to make sure we have it correct. And uh when you have much
[59:25] higher higher um AI values, so you would be looking at the pyro CB layer here. So values above
[59:31] five, that's when you're more likely to have these dense smoke um dense smoke that's that's gone higher into
[59:39] stratospheric uh into stratospheric layer. And and I'd say that, you know, higher the higher the value, the more
[59:46] likely the um smoke has gone uh higher up. up. Uh we are at time here today. I want to
[59:54] respect everybody's day. Thank you very much for joining us for part one of this series. Hopefully you had a chance to
[1:00:00] pick this training for the intro one back in April. If not, uh all the recordings, videos homeworks are
[1:00:07] available so you can self-pace through it. Um but we wanted to offer this one to highlight some of the additional
[1:00:14] features that have been incorporated in the firms. So, thank you very much, Jenny and Diane, for showing us those.
[1:00:21] And please join us for part two next week. And thank you very much for joining us and we'll see you next week.
