# Introduction to Geostationary AQ Observations and AQ Products from Himawari, Part 1/3

`https://www.youtube.com/watch?v=ZkCcPGMWlLQ` · id 234 · 1:55:22 · module 23 — An Inside Look at How NASA Measures Air Pollution

[00:00] hello everyone again welcome to the webinar series on introduction to Geo stationary air quality observations in this three session series uh we will
[00:14] today learn about gestationary air quality observations some of the data sets and tools how to access those data sets
[00:28] so like I said this is a three session three-part webinar series uh part one today we'll do I will do and my name is
[00:38] Pawan Gupta I'm senior scientist here at USR at Marshall's respect Center and later on uh Aaron Dr Aaron neger will
[00:47] join me he is also scientist here at UAH at Nasa Marshall he will talk about the upcoming Tempo mission in part two we
[00:56] have our guest speakers uh Dr Amy Huff from NOAA she will talk about their quality products from the gozar series
[01:04] of sensor which includes goes east coast west and most recently launched ghost 18. 18. and part three which will be on October
[01:13] 25 we will have a discussion on air quality data sets coming out from the very new instrument called gems launched
[01:23] by South Korea and we will have Dr surgeon go from UMBC and NASA's Goddard Swiss flight center
[01:31] she will talk about gems products and how to access and will walk through some of the Python scripts to read and map
[01:40] the gems data so for today's talk uh so I was talking about the learning objective for today's uh presentation so
[01:52] we'll go over the geostationary orbit we'll talk about the difference between the low earth orbit and geostationary
[01:59] then we'll look into some of the imageries how to access them and then finally Aaron will come in and we'll
[02:05] talk about the temp permission okay so before going to forward I would like to quickly do a quick uh survey
[02:17] question here uh just want to get understanding uh where we are in terms of uh using the geostation satellite
[02:25] data from the audience so just to you will see a pop-up question on your screen and you will have about 30
[02:33] seconds to respond to these questions and that that is just to give me an idea uh how should I paste all the training
[02:41] and where which stands before we start the training so if you can just take a few seconds to respond to the question
[02:49] we have only six percent people voted so far so please vote if you can okay that's good we have about
[03:03] 70 percent voting I'm going to close the poll in two seconds and then uh here are the results so that is good
[03:14] that most people who use who have uh or who are attending today have used the satellite data in one way or another way
[03:21] uh which is good because this is a intermediate level webinar series and where we are trying to actually now let
[03:28] me ask you the follow-up question if you ever used any geostation satellite data for any purpose so we got about 70 polling so I'm going
[03:38] to close the share the results so we have about half of Dy division among the participant who have used geostationary
[03:47] or not used so this is good thank you uh so let me get back to the presentation
[03:51] what I'm going to do is since we have uh about half off I'm going to review some
[03:57] of the key aspects of remote sensing okay okay and let me start with first one so one of the thing which is
[04:08] very different in geostationary is where the sensor is located right so these are all different types of remote sensing
[04:17] sensors which makes different kinds of measurements are used for different purposes right on y-axis you see a
[04:26] vertical level in the atmosphere where these type of sensors or instruments are typically deployed so you have a lot of
[04:35] sensors on the ground you have aircrafts uavs balloons in low troposphere or atmospheres and then once you go about
[04:44] 400 kilometer up you start looking lot of satellites which are making low earth order orbit measurements so
[04:54] International Space Station is around 400 kilometers and then you have around 7 800 kilometer all the Terra Aqua
[05:02] Morris sensors are sitting there when you go to 36 6000 kilometer that's where the GE stationary or geosynchronous
[05:08] satellites are typically operated typically these satellites are meteorological satellite but more recently we have been using them for the
[05:17] quality purposes well okay so this is again a very basic uh representation of how the whole satellite remote sensing works so you
[05:29] have a satellite in the space either it can be a low Earth orbiting or a geostationary satellite so depending on
[05:35] the orbit it will have a different height in the atmosphere or in this space and then you have a sun solar the
[05:42] source of energy so Sun's radiations comes to the Earth in different wavelengths we'll see about that and
[05:49] then it actually interact with the atmospheres all the components in the atmosphere like clouds aerosol particles gases water Vapors everything which is
[06:00] in the atmosphere and some of them get reflected back to the space some of that get transmitted to the surface and then
[06:07] it interact back with the objects which are on earth surfaces which includes trays water grass where soils you know
[06:16] build up any kind of built up area any kind of human areas so when solar radiation interact with atmospheric
[06:23] particles in the atmosphere depending on the particles properties it will actually attenuate the radiation will attenuate in a specific wavelength
[06:33] and what satellite is going to measure is what is going back to the space so whatever is going back to the space is
[06:40] measured by the satellite so this is called top of the atmosphere Radiance measurement so what satellite actually
[06:47] measure it does not directly measure the amount of pollutions or type of vegetation or height of the building or
[06:55] number of trees but it measures how the radiation is changed when it was coming from the Sun to going
[07:05] back to the Space by interaction so the radiation will change according to the property of the object through which it
[07:12] is interacting so that change in radiation is measured by the satellite and that is what we are going to use to
[07:19] retrieve information about that particular objects or get information about those particles in the atmosphere now I talked about the uh Earth uh the
[07:33] solar radiation the solar radiation is nothing but electromagnetic radiation Spectra right it has a range of wavelength in which the solar radiations
[07:42] comes to the Earth and what you see here are that range of electronic Spectrum so you start with radio waves microwave
[07:50] these are longer wavelength radiation and you can see a comparable size uh on the bottom here but as you go towards
[08:00] infrared visible the wavelength start decreasing in size then you have all the way ultraviolet X for air quality application most of our
[08:11] work is actually limited to visible and in some ultraviolet so when Aaron talks about the tempo Mission he will talk
[08:19] about the ultraviolet wavelengths uh when I'm talking about the visible and then we will have another presentation
[08:25] in week two most of the aerosols information we rely on the visual part of server Spectrum we do use infrared
[08:33] part of solar Spectrum as well to help remove the clouds and other features in the satellite imagery so infrared
[08:42] visible in Android these are the main range of solar Spectrum in which we are working and that's where we are actually
[08:49] getting or most of the information okay so let's move on and look at the some satellite sensors and how so often
[08:59] in the community satellites and sensors and instruments are used uh interchangeably but there is a basic difference uh between them uh the
[09:11] satellites are nothing but the platforms or the bus on which all the instruments are mounted in the instrument and
[09:18] sensors are individual sensors which are making measurements so for example this particular picture is for goes or
[09:26] spacecraft or ghost 16 spacecraft and now you can see um it has solar panels and these are all
[09:33] the uh platform on which individual sensors are mounted and you can see there are multiple sensors uh two over
[09:41] here two over heels and then you have a most common which we often use are ABI Advanced Baseline nature that is what we
[09:50] are going to use for a quality application and the glm for Global lightning monitor so this is for more
[09:56] like name monitoring so so the satellites which we will talk throughout this webinar series are those R series uh that include those are and
[10:09] goes s and goes T which has been recently launched few months back only now the way naming convention works of
[10:17] this GST satellite is little bit different than uh some of the Polar orbiting which we have seen and this is
[10:24] specifically true for the NOAA operated satellite which is Ghost series uh so before launch they are denoted by these
[10:32] letters are as the recent one was T after the satellite is launched they are named as numbers goes 16 goes R become
[10:42] goes 16 goes as we come 18 goes T will become became rows 18 which is currently in orbit
[10:50] once they are operational means operational means satellite becomes operational even when there goes numbered but once they become
[10:59] operational and adopted into the data stream and user applications nor declare them operational satellite and then they
[11:07] become either goes east and goes west so there are currently rows 16 which is goes east and goes 17 which is Goes West
[11:14] the ghost 18 satellite which was launched very recently will replace ghost 17 in few months and become Coast
[11:23] West so ghost 17 will be parked in another position it has some issues in some of the channels so that is the
[11:30] reason it will be replaced and we will learn about these two more uh in the part two when we talk about
[11:37] specific product from these two satellites satellites okay so the common orbits uh there are two types of common orbits through which
[11:46] most of the air quality observations are achieved uh polar orbit which we have looked in many different trainings uh
[11:55] Modis misers beers only tropomy all of these sensors are in this polar orbiting satellites okay so they have Global
[12:04] coverage but they only rotate around the poles and that only makes measurements one or two measurement per day and
[12:12] typically typically their overpass time is same according to the local server time whereas the geostationary satellite orbit is fixed actually the
[12:23] geosynchronous orbit is fixed about 36 000 kilometer above the Earth it has the same rotation period as
[12:32] so because of that specific property uh it can actually see the same portion of Earth all the time so you get a limited
[12:41] coverage over a specific region but you get frequent observe you get capability to make measurements very frequently on
[12:50] that particular place so so the basic difference between polar orbiting is global coverage versus regional coverage polar orbiting only give you one
[12:59] measurement per day whereas the geostationary gives you multiple measurements per day here are some more facts about the
[13:07] geostations at orbits again the height from the earth is about 36 000 kilometer the orbital velocity is there the orbit
[13:18] is circular with zero degree inclination and I'll talk about that inclination in a little bit more uh and this basically
[13:24] allows satellite to match Earth rotation period and that is the main basic characteristic of AGS stationary orbit
[13:34] so you might also heard this term called geosynchronous and geostationary sometimes people think they are same but
[13:43] basically typically the term geosynchronous use for any satellite which is about 36 000 kilometer in different outputs and now you can
[13:52] imagine there can be different orbits even at that same height because Earth is spherical so you can rotate your
[14:01] satellite from different angles with respect to Equator so the geostationary orbit is a special type of orbit which
[14:12] is located on the Equator so the inclination angle with respect to the uh equator is zero degree in case of GE
[14:21] stationary there are other type of geosynchronous satellite which are inclined with certain angles for different purposes uh some of the common
[14:30] communication satellites are also located in the geosynchronous orbit uh most of the mythological satellite historically has been in the
[14:38] geostationary orbit so that you can actually monitor uh weather pattern with high frequency of the data especially
[14:46] during storms hurricanes wind storms and things like that okay so let's move on uh this we already
[14:55] kind of looked over but just give you a more animated view of how a polar orbiting or Leo orbit satellite so in
[15:04] this case this is a Modis orbit uh making measurement during day time uh when there is a dark night time the
[15:13] visual data is not available so you see how the polar orbiting is making measurement throughout the day scanning
[15:21] different part of the earth during different time of the day right so this is how the polar orbiting making Global
[15:28] coverage whereas the geostationary you have this is a 5 10 minute data from those those East where you can see that it's making
[15:38] every 10 minute full disk measurements um and but the the area which it is covering is fixed every time the darker
[15:50] color you see is a nighttime time and then the this visual part is data and you will see very specific differences
[16:00] and features between geostationary and although we can just talk more like in the later on when we'll start looking
[16:06] the uh true color images okay so here is another example uh why we need GST dictionary observation so
[16:16] this is just showing a PM 2.5 dinal pattern and these are average for different season different color
[16:26] represent different season on on x-axis you see different time of the day and you will see in many many place or most
[16:34] places you will see there is some kind of a dino cycle in observed en 2.5 concentration or particle Mass
[16:41] concentration and this Dino cycle can be related to the emissions change in emission for example in urban areas or
[16:49] cities if there are traffic hours then you will see this kind of issue when there are high concentration of
[16:57] pollution during the traffic hours and the blow during the non less busy time there can Metrology which can also
[17:05] actually change this diagonal cycles for example the boundary layer height in uh significantly modulate the dynous cycle
[17:12] of pm2.5 so those are some of the things which we have to take care um when we are making PM 2.5
[17:20] measurements we need that information and the polar orbiting which I showed earlier has only one or two measurement
[17:27] if you combine multiple instruments then you can get multiple measurements those measurements are not going to actually
[17:34] give this detailed Dino cycle information that is why you need geostations so the current GST satellite have capabilities to make measurement as
[17:45] frequently as every 30 seconds for limited areas to the 60 Minute and some of the example which have been I was
[17:53] telling earlier are the ABI Advanced Baseline imager Advanced himawari images Advanced metrological images these are basically same sensors operated by different space
[18:05] agencies hi by Japanese Ami best Korean space agents and the gems is also from Korean species specifically designed to do air quality
[18:15] monitoring monitoring um we will have a Tempo and Sentinel 4 which will form a constellation of satellite which will learn more about
[18:23] this in uh later part in today and then uh uh [Music] [Music] um third part of the webinar service
[18:31] okay so here are some of the current uh existing geostationary sensors which has similar capabilities just like ABI instrument Advanced
[18:45] Baseline images so three of them uh goes R goes s and goes T all located Over America so they look over Northern
[18:53] America South America the Pacific Oceans and Atlantic Ocean all the way to the coast of Africa and they provides every
[19:01] 10 minute message so this is really an excellent measurement which has been become available in last in four years
[19:07] over this part of the world there are two himawaris himawari 8 and 9 which has sensor called Ahi Advanced
[19:16] base advanced in our E major and that H I actually makes measurement over Asia covering Australia to all the way to the
[19:24] uh uh to the Japan and northern part of Russia Russia and these measurements um are very identical in many sense to
[19:35] the goes R Series so you have almost similar observation every 10 minute again the himawari 8 is currently
[19:43] operational uh himawari 9 which is already in the orbit will become operational in LA in couple of months
[19:51] starting in December so you will see the data from the process light more recently uh Korean space agency launched
[19:58] this Ami which is also providing uh observation over Asia but you will see that it's obser field of view has
[20:07] shifted little bit more toward West so you can see more coverage over India which is not that much available in the imagery data
[20:16] uh China also has a similar capability uh but the data uh probably is not available in public domain uh once
[20:25] European Space Agency launched this called Sentinel 4 Sentinel um sorry the meteor set third generation satellite which will have the FCI
[20:36] instrument uh which is very similar to Avi will have a global coverage of everything minute showing similar
[20:45] measurements so and then India also want to launch some time in said series of satellite which will have similar
[20:52] capabilities capabilities okay so a little bit more on these coverage special coverage of these uh sensors so what you see here on the left
[21:01] side is Ahi full disk coverage like I said it has three different mode of measurement one is called Full disk
[21:09] which is taken every 10 minute uh there are uh meso skill measurements and there are Regional measurements so the
[21:16] mesoscale measurements are usually taken when there are specific atmospheric events or events going on if there are
[21:25] volcanic eruption happening on Earth you can actually take every 30 second measurements using himawari or ABI the
[21:33] two and half minute skin is regional they are typically located of the country of the origins so in this case
[21:40] South Korea in Japan they are making measurements uh in that part of the region so they make every two and a half
[21:47] minute for their own application similarly the ghost series of Starlight as you can see the coverage the ghost
[21:54] West cover most of the America with the Pacific Ocean goes east cover most of the America and the Atlantic Oceans
[22:02] so they have there is some overlap between the coverage and we will talk about a little bit about the pixels and
[22:10] the angles due to which we need multiple satellites again similar type of uh skin mode you have mesoscale mode you have
[22:18] corners every five minute in this case so it will take entire us and then the full disk every 10 minutes so in many
[22:25] many ways uh these are very very similar observation observation now let's look at the capabilities or the spectral capabilities of these
[22:35] instruments people have used the ghost generation of satellite the ghost 13 or older you will see they have only
[22:42] limited number of channels four five three to five channels and those channels are typically very broad band
[22:48] channels which covers larger part of the spectrum spectrum this this uh satellite that goes ABI series uh has
[22:58] 16 channel in those 16 channels you can see an example of how the certain part of the earth look in each of those
[23:08] channels so the first six channels are the visual part and then the remaining channels are the Infrared channels
[23:15] um these 16 channels makes continuous measurements every 10 minute or five minutes or 30 seconds depending on the
[23:22] scanning mode and provides you different uh piece of information about the earth atmosphere system so let's look those what are those
[23:31] specific channels and their special resolutions or footprint on the Earth surface or the pixel size in other words
[23:39] on the left you have Ahi which is giving you spectral measurements every 10 minutes and you will see this 16
[23:51] channel starting from the blue point four six Nano uh 0.46 micrometers or 460 nanometer to all the way to 13.3
[24:01] micrometer so you have all the channels here now you will notice that in advanced himawari images there is a
[24:09] channel in the green part of the solar system so we have a blue Channel we have a green Channel and we have a ratchet
[24:17] the special resolution of these channels varies most of the channels are at two kilometer nominal resolution which is a
[24:25] coarser resolution compared to Modis which is one kilometer or viers which is 375 meter resolution so little bit
[24:33] coarser compared to the some of the Polar orbiting popular sensors but these RGB channels have actually one kilometer
[24:44] resolution red and sorry the blue and green and then the red has a half kilometer resolution and then 0.86 which
[24:51] is often used for portion application as about half kilometer resolution so the resolution varies ABI which is on goes Eastern Goes West
[25:01] has a similar special resolution and similar uh channels there are some differences in channels you will notice
[25:10] there's there's goes east or west or the ABI does not have a green Channel okay so remember
[25:17] this is very very critical it has blue and red but they they do not have red um green Channel
[25:25] but instead they have a 1.38 channel which is used to detect uh thin cirrus cloud in that atmosphere which is very
[25:33] very critical for air quality application as we talked in the algorithm Parts in part two so the the reason why they do not have
[25:42] green channel is because green channel is highly correlated with the blue and red channels and often it can be derived
[25:50] and that is what they are doing to create the stripler images which we'll talk later on okay so just to give you a quick
[26:00] um view here similar to Polar orbiting satellite Json satellites have the similar level of data products we have level one or level
[26:10] 1B which is typically Radiance data spectral Radiance measurements although 16 bands in their native resolution the GEOS physical products are called level
[26:21] 2 products they are derived using these spectral radians using a physical retrieval algorithm so this is gone through an algorithminism
[26:33] sometimes these products are at Native resolution sometime they are at reduced spatial resolution or core solution and then the level 3 product which are
[26:45] typically gridded data they are averaged over time over a day or a month or over one hour period uh so depending on the
[26:54] temporal average and different level three product can be created and then there can also be averaged over space so
[27:01] typically spectral radians are half kilometer one kilometer two kilometers they are also about the same resolution some of them are downgraded to course a
[27:12] resolution and then when it goes to the graded level 3 product they are typically typically quarter degree or 0.1 degree or one
[27:22] degree depending on the specific products the level three spatial resolution can vary and we use all this
[27:30] product for air quality application uh today I am going to more focus on the spectral radians which how we can use
[27:36] that for air quality application but in week part two and part three you will learn a lot more about level two and
[27:43] some level 3 as well okay so let's switch gear here a little bit bit um let me actually put a poll question
[27:53] uh so that we can get a feeling about how we are doing and then I will move on
[28:01] to the next topic which is true color imagery so you will again see a poll question and you will get about 30
[28:08] seconds to respond to it uh please respond uh so the first question is GST satellite provide Global coverage true
[28:17] or false and I am closing the pole now we have about 60 people responded that's good so the correct answer is
[28:32] false geostation satellites provide regional coverage if you might if you combine multiple geostationary satellites then they can provide you a
[28:43] global coverage but one single GST satellite only provides regional coverage so maybe the question was not very clear but I mean to have only one's
[28:52] GSS stationary so polar orbiting satellites come provides you Global coverage okay so let's move on to the next
[29:03] question question and this is something I did not cover but a math question more likely and we
[29:12] talked about how many uh full disk image are taken by ABI goes east on goes 16 or
[29:20] goes is in uh how frequently they take full disk image so if you remember that frequency then you
[29:30] can calculate how many images will be done in one hour so I understand this is not a direct but
[29:40] uh a derived question from the information which I have provided in other slide so maybe we can wait another 10 more
[29:53] seconds seconds okay I'm going to close poll now we have about 50 percent and the response is
[30:03] in the order we have 50 plus percent people saying six which is correct answer so remember both ABI and ahis
[30:13] makes full disk measurements every 10 minutes so in 60 minutes one hour we will have six full disk images from one
[30:22] of these sensors so six is the correct answer so 10 minute is the frequency for the full disk measurements
[30:30] okay and this is something I just talked about so let's take another 30 second hi has a green band but ABI does not
[30:42] is that true or false and closing and showing the results so the answer is true h i has a green bank
[30:54] but Avi does not and we just talked about it uh a few minutes ago so that let me get back to the
[31:04] presentation and we'll talk about the true color imagery is now yeah yeah okay so as I was saying the true color
[31:13] imagery is uh or rgbs or level 1B data adds its change for RGB means red green blue so true color imagery is are made
[31:25] using these three colors when you combine the measurements with three different spectral band in blue green and red then we get a true color
[31:37] imageries or RGB image and why it is called troopular images we'll see when we start looking some of those images so
[31:45] what you do this term is primarily actually derived from a display computer displays and it basically simulate how
[31:56] human eye will see certain features if you look so for example if when we combine these three channels the clouds
[32:04] will appear white water will appear darker vegetation will appear more greeners and so on and so so here is an example of Truecaller
[32:16] image this is taken from uh a polar orbiting wear sensors which has similar three channels red green and blue and
[32:26] what you see here in the image is a view in the red channel view in the cringe
[32:34] Channel and the blue and the last one is the view in the blue channel so when you
[32:40] plot the data or the map the data in individual channels the radians you will see this kind of view now in first look
[32:49] they look very similar to each other but if you look carefully you will see the blue is much more brighter or clouder
[32:56] area the red has lot more contrast you'll see darker color over Ocean or clouds are looking much more brighters
[33:03] there's less contrast and blue channels and the green is in between the two when you combine these
[33:10] three channels it is become true color image or RGB and now you will see the colors start appearing differently and
[33:19] they look almost similar to what you will look from your human eyes if you are are traveling in a aircraft you will look
[33:29] down the Earth you will see similar features as you see in the true color image so that is why it is called
[33:34] Popular image now in case of Ahi since it has a green Channel they use these three channels to
[33:42] make an RGB or true color images in case of Abi Abi does not has a green channel
[33:48] so they actually derive a green Channel using blue and red and then it is used to create the RGB
[33:58] foreign here is a RGB image which is uh just to give you an example right so you see
[34:17] clouds you see a some pollution or smoke in this particular case and then you can see uh some darker water so what what
[34:26] creates these different features or different colors in a true color image so it depends on going back to the
[34:35] satellite remote sensing part where I was explaining that depending on the wavelength of incoming solar radiation and depending on the properties of these
[34:45] specific features for example Cloud pollution or water there will be interaction there will be scattering absorption attenuation of the
[34:54] light and based combination of these two will actually come will have a impact on that outgoing radiation whether it will
[35:04] be so for example the clouds clouds reflects most of the visible light in all of the solar band uh equally almost
[35:13] equally so that is why the clouds looks wide whereas the the water actually can absorbs a lot of these red green and
[35:23] blue bands sufficiently so it will have a less intensity in the refracted back to the space so that is why the cloud
[35:30] the water is actually appearing darker similarly the vegetation the soil based on how much energy they are reflecting
[35:39] and how much they are actually absorbing in those three channels their color will vary similarly that is why you will see
[35:47] this some of the pollution is actually appearing little it's not as bright as Cloud but it is a little bit grayish in
[35:55] color and that depends on the size shape and their chemical composition of the particle particle so it is based on physics how radiation
[36:04] interact with each of this feature uh here is an example I'll just quickly move over this again uh there are
[36:13] different features in this image and I want you to just know down here uh let me this particular feature here okay
[36:22] this one is called glint uh then you have some number two which is smoke and has so over a northern
[36:33] India during the post monster season there are a lot of biomass burning happens and that actually produce the
[36:39] smoke so that is more mixed with the local pollution is creating this haziness haziness this white area over the smoke is actually very
[36:50] smooth surface and these are very low level cloud or fog then you have some clouds all over the places here here uh
[37:00] you have our Mountain if you look carefully the snow has a specific structure and little bit brighter than
[37:08] the clouds and these are also clouds so in an image you can actually identify these Land Ocean and acquisite features
[37:16] uh based on how they will appeal to our human eye another example of a true color image
[37:24] showing uh fog over endogenetic Valley in in India and over Nepal and uh Bangladesh area and there is a lot of
[37:34] haze which is actually transporting uh and then there are some clouds which you can see okay the glint so here if you look at
[37:45] this glint in this particular image which is coming from The Polar orbiting satellite beers you will see the glint
[37:52] has a vertically overs Ocean and the glint is produced by the specific angles when sunlight and satellites are on a
[38:00] specific angle it's got a specular reflection though so that is the bright area over ocean typically it is mostly
[38:06] over ocean and you will see it is along the orbit vertically when you will see that in
[38:13] geostationary it is typically in circular shape so these are uh glint area in a geostationary orbit again from h i this bright area over
[38:25] ocean and it moves with the time because the sun moves from morning to evening as solar as anything or sun's position
[38:33] change in the sky this glint will move from east to west August to is depending on uh where we are looking and then here
[38:40] you can see our specific ocean this is image from the Goes West and then you can see from the goes east half of the
[38:49] glint is over ocean and then our land there is no glands so the glint is very important because we cannot actually
[38:56] retrieve particle information if there is a Clint a little bit more on some of the specific particles how they appears in
[39:08] atrocular image again these examples are from uh polar orbiting satellite mode is envious but uh I'll show some example
[39:17] from geostationary as well uh Australian dust you will see this dust looking brown but it is over a very bright
[39:25] surface so there is a it's a difficult to see the contrast between underlying land land area and the dust in that
[39:33] posture here is in smoke like I said earlier very Contracting contrasting so you can see clear features
[39:41] um again this is over east coast of U.S during summer month the pollution get transported or Atlantic Ocean which you
[39:49] can see in this form and then this particular example is a volcanic eruption in Indonesia which is actually
[39:56] putting out a lot of so to another Ash in the atmospheres and you can see a thick Bloom and because it
[40:07] is a sulfate type of aerosols or isot2 um it has very similar properties uh very highly scattering type of aerosols
[40:16] and it almost looks like a thick cloud some other examples again dust over SAR and deserts you can see as soon as dust
[40:26] reaches over ocean it start looking very nicely because because of the darker background these are the smoke plumes
[40:33] coming out from the wildfires in California uh similarly these are some of the haze which is actually
[40:39] transporting from the Alaskan fires these are the smoke coming out from the oil fires and these are very specific so
[40:47] you can see uh very dark in color so oil fires smoke which comes from the oils are very absorbing in Natures they are
[40:55] almost like Black carbons absorbs most of the energy so that is why they are looking very darker in this particular
[41:01] and all these measurements are possible from both polar orbiting and geostationary object so now let's look some quickly some movies and I'll show a
[41:12] little bit later how to actually generate some of these movies uh using some of the tools which are available
[41:18] online so this particular example is a smoke transport over Northwest and this is is uh uh you can see how the smoke from these
[41:31] fires are actually transporting all over across U.S and these are every five minute measurements uh over us and some
[41:38] of the smoke pollution smoke particles are actually fascinating pyroclimbus Cloud which are generating in this region so you can see really real time
[41:50] when you have measurement frequency very high as high as five minutes or ten minutes you can see the movement of
[41:57] these smoke once you actually use this uh data into a model then you can forecast very accurately where and how
[42:07] much smoke will be observed in a given location location another example here actually you will see a dust again this is from the ghost
[42:18] satellite you will see a dust storm which is shown in this so you will see in this area particularly where the
[42:25] arrows are showing you will see a dust is originating and then it is this one particularly using dust storm which is
[42:33] originating in this part uh Nevada and New Mexico area okay another example of the fires this is from Ghost 16 or goes east you can
[42:46] see see uh in different part of Texas and Oklahoma you will see the uh or the cancers I believe uh small
[42:55] fires are actually starting and how the smoke Bloom is uh transporting towards the north with the rubber system and you can see the
[43:06] generation of pirates Cloud along the way way so this is not possible from The Polar orbiting satellite because you don't
[43:14] have that frequency measurement and this is the advantage of geostationary occupant measurements again very recently this is a I think
[43:26] so I think this is the magnifiers which happens in July you can see how use the smoke Bloom from this wire
[43:36] is coming and how quickly the pyropreneurs clouds are forming so the magnitude of this fire was huge
[43:49] another fire from the June this year earlier you can see uh it's a small fire but it is originating
[43:57] and going away in some time this is every five minute imageries you can see one here there is some dust here which
[44:05] is originating at the same time so you you will see here is some dust on this side also so the smoke and dust both are
[44:13] actually original built into different ways and can be monitored with this frequent measurements okay uh this is very popular example and
[44:23] you might have seen right this is a dust storm which is again from this year earlier June month every year during the
[44:30] Spring and Summer uh dust from the Saharan deserts over north of Africa originates and actually it gets
[44:37] transported all over Atlantic and all the way to the Americas it reaches to the Amazonia uh forest in South America
[44:46] it reaches to the Central America and it is also reaches to the east coast of uh United States and this can create
[44:54] actually significant issues with local air quality specifically more on tn10 side so again this is a bull's East
[45:03] image so we can see how this actually best originating and transporting our Atlantic Ocean uh another example of dust transport
[45:13] from Australia uh this is taken by uh himawari and this is image from August 2020 uh southern hemisphere summer time
[45:22] uh Australia has a huge deserts and often they get actually dust storms so this is a restaurant in southern part of
[45:31] Australia so the southeast part transporting over our Pacific Ocean okay and this is the last example from
[45:45] the geostationary which is a volcanic eruption which happened very distinctly distinctly earlier in the year in January and you
[45:56] can see this is a ghost 17 or the ghost West uh Zoom version of uh South Southern
[46:06] Pacific Ocean where you can see the eruption of volcano uh and this is I think every 10 minute observation
[46:17] so you can really see some of the fast changing uh features of phenomena which are happening in atmosphere or Earth surface
[46:28] using this geostationary very very well okay so I think uh with that that um let me put out a couple of more holes here and
[46:40] then I I want to finish up this presentation with a couple of more slides or let me actually do this like this and
[46:50] then I'll do the whole question and then we'll go to the exercise Okay so since we have talked only about the true
[46:58] color image these are level than the data but in week two in week three we will do actually use level two products
[47:06] so I want to introduce the scientific terms which we are going to be using a lot more uh which may we may not have
[47:13] time to actually explain in which only three so one of the quantity in level two product often used for air quality
[47:20] application is called aerosol Optical Gap and the aerosol Optical depth is uh expressed it's a optical quantity and it is Express the quantity
[47:33] applied removed by a beam by scattering or absorption during its path so medium so think about this is a ground
[47:43] instruments called simel or sun photometer typically makes measurement of aerosol Optical depth from the ground it looks directly to the Sun so Sun's
[47:52] radiation is coming this one I zero and then it interact with the incoming solar radiation uh sorry it the the solar
[48:00] radiation interact with the particles or the aerosource in the atmosphere and these measurements are only taken during
[48:06] Cloud free condition If This Cloud moves over here then we cannot take this kind of measurement so there are also Optical
[48:12] depth measurements are always under Cloud free condition when it interacts with the sun this particles over here in that atmosphere
[48:20] it will either absorb or scattered some of the scattered light will actually transmit towards the Earth where the sun
[48:28] photometer is sitting in making similar measurement in different spectral Channel as we saw from the satellite and
[48:35] then once we know how much a radiation is was coming and how much we measured you can use this kind of mathematical
[48:41] equation to calculate the optical depth of the atmosphere now what you calculate Optical depth is not just because of the
[48:48] particle but there are gases water Vapors and other components in the atmosphere which needs to be corrected
[48:55] for example you can calculate how much Optical depth is due to the gas how much is due to the air particles which is
[49:02] called typically relay scattering these two can be theoretically calculated very accurately once we know this we can
[49:09] calculate the aerosol Optical depth by subtracting these two quantities which is m is a solution tangle so depending
[49:17] on angle of the sun with respect to the Sun photometer that Optical depth can be calculated and
[49:25] typically this Optical depth is defined for particular wavelength on which it is making measurement most common wavelength used for this measurements
[49:33] and for reporting purpose is 550 the green vent which has which is often used for air quality application as well okay
[49:42] so this is about aerosol Optical depth now what is its relationship with the PM 2.5 so just give you an example here if
[49:51] you have a very hazy condition right so this is a picture taken in Pittsburgh's uh around the same time of the day on
[49:58] two different days on the day on July 18 on the right side image it was taken when the air quality was good the ground
[50:08] measured PM 2.5 was about 4 microgram per cubic meter you can see clear view of the high Rises building
[50:17] and topography in this pictures on the left side this was taken at the same time from the same location uh but
[50:26] another day when their quality was not that great the PM 2.5 on that particular day measured from the ground was 45
[50:33] micrograms per cubic meter and if you make measurement of aerosol Optical depth on these two days then it
[50:40] will be higher this number 0.8 is just approximation uh a first guess uh 0.8 in this case uh on the high PM 2.5 loading
[50:50] case and point one on the low PM 2.5 loading case so air quality or the PM 2.5 concentration is
[51:00] intrinsically related to aerosol Optical depth although they represent two different quantities aod represent total column entire column from the surface to
[51:10] the top of the atmospheres as we saw in earlier image from here to here whereas the PM 2.5 is measured near the surface
[51:19] one is mass concentration one is Optical properties properties this is defined for a specific range of particle size this is refined for all
[51:28] the particle size so there are significant difference in these two quantities but still it would is very
[51:34] good proxy for PM 2.5 and there have been many many data sets generated of PM 2.5 which are based on aerosol Optical
[51:44] depth measurement from the SAR lights and then finally once you have your call RPM 2.5 or a quality you can use this to
[51:53] generate air quality index which can often be uh transmitted or communicated to the public for safety purposes with
[52:00] health advisories as done by environmental agencies for example in US U.S EPA okay so I think that's about all
[52:09] I have I have some references here uh which you can go over if you want to learn little bit more about any of these
[52:16] two color images or anything else if you want to get more details on the ABI census or the go satellites there is a
[52:24] nice bams article which will give a lot of details about the sensors and the missions itself okay so now I'm going to switch and do a
[52:36] couple of poll question and then we'll quickly do a uh a exercise where I will show you how to access some of this true
[52:44] color imagery so let me get to the poll okay so here is first poll and this is
[52:57] not testing anything here but I just want to get a feeling about from the audience uh which part of the world do
[53:05] you like to study from a GST or applied and you can choose your area of interest in which you will like to have a GST
[53:14] satellite data available for your research or air quality applications okay so we are getting about 20 both let
[53:25] me keep it open for another five more seconds seconds um okay let me close the polls and just
[53:41] forever so we have pretty good distribution uh of course the current existing GST satellite provides measurement only over Americas and asias
[53:52] so that is uh one robbed the reason you see about 35 35 distribution there and then Africa and
[54:04] Europe we don't have a geostationary Satellites with similar capabilities as ghost series of satellite and of course
[54:13] uh there there will be once we have the meter set third generation over Africa Europe uh we will have a global coverage
[54:20] so thank you for that and I think I have a a last question and this is related to the concept which
[54:31] I just discussed aerosol Optical depth I'm just wondering if you ever used aerosol Optical data from any Source uh
[54:38] doesn't matter whether it's satellites or ground-based measurements or model output if you ever used please just say
[54:46] yes so that we this question I want to get so that we emphasis we want to put
[54:52] on the fundamental definition of this particular quantity in part two and part three three okay okay so we have about
[55:04] 50 50 distribution um okay so I think this is good to know so that we can actually remind our
[55:11] participants about this specific quantity and what it means okay so let me hide this and uh what I'm going to do
[55:19] next is uh I will spend 10 uh 15 minutes in showing some of the online tools uh
[55:28] where you can access some of this true color images so for that I will go on internet uh let me show you a couple of
[55:36] slide actually which has a link to this these tools so that you can access them so first one is the satellite Library by
[55:47] the NOAA where you can find both goes east and west and goes 18 imageries this is an excellent Tool uh Noah has very
[55:54] recently launched this uh there is a called slider uh it's a again managed by Noah from the Colorado State University
[56:03] and what it does is it provides you near real-time data from Ghost East West and himawari and this is only rgbs and there
[56:13] are some additional images which you can get from there the only limitation of this tool is it only keeps the data for
[56:22] last two three months only so if you're looking for historical data you will won't be able to get from this but this
[56:27] really provides you animation capabilities where you can actually animate and save the image for your own purpose later on
[56:38] uh jaxa the Japanese space agency has a their own tool called Petri uh it provides actually way to
[56:49] access and visualize uh H either Advanced imagery imager data as you can see in this screenshot it says fire data
[56:59] Russell Optical depth and then the RGB images so it only provides data from him away it is a nice tool um the data
[57:08] products which are shown in this tool are all generated by jaxa so some of these memory products
[57:16] are also generated in us which is not part of this particular tool so you can explore this tool in your own time the
[57:24] tool which I'm going to actually give you to today is uh NASA world view which I'm sure many of you are familiar
[57:32] with with this specific tool has uh in the last couple of years ago they have started adding geostationary data
[57:43] as well so it has uh both goes east and west and human body data and I will walk
[57:48] you through some examples so we will look actually these uh two cases uh we'll look January 15 uh the case uh
[57:57] when there was a volcanic eruption which we saw the image earlier in Southwest with question and then I'll also load
[58:04] the March 15 case where there was huge dust storms over over Asia and then we can also look more recently from the
[58:13] last month the fires in Sacramento of California California so with that let me share my internet and if you want please uh you can follow
[58:25] along with me uh to this exercise so if you do not know where the NASA world view I typically just Google it just say
[58:35] NASA world view and the first link will show you the NASA World YouTube okay and it will load when it will load
[58:51] first time you will see a pop-up window appears in this pop-up window actually uh uh show some of the specific
[59:01] categories or features for which the data are available so you will notice here that it is not only serving air
[59:11] quality Community this particular website is designed to serve many many different communities all around the world so you can see the cloud
[59:22] landsat sentimental data you can see the hurricane monitoring dust fires Night Lights almost all the satellite data which are
[59:35] available in real time are available from this website so you can actually explore this in your own time but let me
[59:43] walk you through the exercise okay so when you open you will see this is a default view of the Void view the image
[59:53] which you will see is uh acquired by Modis sensors from Aqua which is uh in afternoon orbit uh and these are the
[1:00:03] orbital gaps from The Polar orbiting satellite on the bottom you can see the date date in time window uh to change you can go
[1:00:13] back in time you can change the year month or day okay uh this camera button is to make animation I'll show you later
[1:00:22] on on um on the right side these are different features so the camera button will take a snapshot over the area you can select
[1:00:31] any area and take a snapshot uh this particular share this map features is actually very nice it creates a
[1:00:42] permanent link of the view which you are seeing if you have actually overlaid layers here and you create on the short
[1:00:50] link and copy paste and share with social media it will remain active forever as as long as the data are
[1:00:56] available in this tool and then the search will actually you can search anything okay so you can search specific features you
[1:01:06] can search place names so for example respectful California California okay so once you search there it will take
[1:01:30] you to that place and then we'll show now that image is not available yet so you can look yesterday's image for that
[1:01:38] place so that's how the search features works okay now on the right size is um are actually
[1:01:48] three different tapes layers events and data events will actually show you some of the latest events uh whether they are
[1:01:57] rain fires snow and you can choose and that that will take you to that for example if I click on this tropical
[1:02:05] Cyclone Cyclone it will take me to the that geographical location and then it will give me some
[1:02:12] examples which I can display here so there are different things which are displacing rainfall winds and things
[1:02:19] like that so this is a good features again if you want to explore this in your time so the one which I want to
[1:02:25] show you is okay let me get out of this and then remove this things okay so you have placed Value Place uh
[1:02:39] Place levels so you can see in uh where you are on the earth okay so let me
[1:02:46] reduce the size so that I can see zoom in and zoom out okay and then you can see Coastline so that
[1:02:53] will show you the boundaries geopolitical boundaries okay there are multiple types of that these are just to help to navigate
[1:03:01] through the map now in the base layer there are three four different options modest era mode is aqua wears also me
[1:03:09] NPP and wears on in 120. now what we want to look at is uh we want to look uh
[1:03:16] geostationary satellites right so I'm going to add layer okay and again you will see a list of
[1:03:25] many different features many different data sets you can actually browse through this list but let's search jio right
[1:03:34] because that's what the geostationary stand for zero right and as soon as you search Geo there are different layers
[1:03:40] which start appearing here the first one is called jio color true color image goes east ABI okay
[1:03:48] I can click that the jio color goes west API and these sorry this is the night time
[1:03:57] so we want the data in right so let me and then you have this individual spectral band like we saw red channels
[1:04:15] right so these are the Innova equals west coast East uh these are the Infrared Channel now from himawari I
[1:04:23] believe we have a air mass okay I don't see where is yeah here is the himawari h i uh red Channel and
[1:04:36] there should be cleaning product there is air and goes first yeah air mass himawari is similar to RGB it's not exactly RGB uh
[1:04:48] it's a derived using different combination of Channel but you can see some of the features so I'm going to
[1:04:54] select these three images once I select and then click on the cross on top right corner those
[1:05:02] layers will start appearing here okay so let me close this himawari for a minute I'm I'm interested in the goes best
[1:05:13] image so I'm going to also close both East image now we are trying to look this volcanic eruption uh which was
[1:05:21] happened on January 15 in southern ossification motion right if you want to look the ghost West image so
[1:05:31] I will go and change the date uh from October to January and and 15th of January that's when we want to
[1:05:42] get get and and this is the Southern Pacific Ocean that's where we uh the volcano happen now as soon as you load the GS
[1:05:53] stationary you will see in the there is additional time tab started here okay now this is a 10 minute or you can
[1:06:03] custom how fast you want to move by using Arrow so I'm going to just use the 10 minute data now zero GMT is daytime
[1:06:12] in the Southern Pacific Ocean right so this is drawing and I know the volcano happens around 3 GMT so I'm going to just start
[1:06:23] from the three so that we can quickly look the volcanic eruption okay so this is 3 GMT
[1:06:30] um um this is 3 10 and let's first locate the volcano so that we can actually look it more
[1:06:39] closely so you will see here is your worker which we saw earlier so let me go back again in time
[1:06:52] so there is almost no action here this is is 350Z okay I move 10 minute again 4z
[1:07:04] so four four o'clock there is not much visible sign of the eruption 410 you can see this huge Cloud coming out from that
[1:07:14] volcano this is 420 or 30 for 40 450 450 5 so this is within one hour and then you can keep going and you will
[1:07:30] notice that the sun has started setting in this part of the World As you move so the darker side on the east side
[1:07:40] started appearing the volcano actually started looking really huge now we lost most of the visible light so
[1:07:48] what you see is the nighttime reflection you can still see this working right now if you want to make a movie of this what
[1:07:57] you do is you click here on this setup animation or the camera button uh you can select January 15 I'll start it
[1:08:07] for Z to January 15 at 6 30 Z prime rate I can choose and then click and then
[1:08:18] set up my area for which I want to create and then click create gif it will take some time uh depending on
[1:08:27] how many uh frames you have taken probably I have taken too many frames so let me actually close this and select
[1:08:36] less number of frames so that it can be done quickly uh and then do it again hopefully this will be faster I'll just
[1:08:50] take one almost six frame only um that will create you a animated gif image for that particular volcano
[1:09:03] okay so it started creating animation so you can see this is the same animation which I have shown you earlier
[1:09:11] in the PowerPoint and this is using ghost ghost satellite you can see the same in ghost in himawari data also and
[1:09:21] you can download and it will download the image as a gif image on your so this is really nice uh feature of
[1:09:30] whiteboard now let me take you to the show you the fire example from September 15 to 15 years in the ghost East data
[1:09:40] and Sacramento California okay so I'm going to load goes east and then go to September and and remove the himawari and select the goals
[1:09:57] so if you click this I one time the cross line is basically the layer will disappears and then you can also move
[1:10:05] these images up and down so that if you want to see the place name you can just
[1:10:09] drag them and they will move actually nicely nicely the order of the display will change okay so here is California
[1:10:21] and here is set reminder that's where the file is right and we are on September 15th 6 to 15 so let's go to September 6.
[1:10:40] and and I'm going to actually do change by date um I'm going to go into daytime which is
[1:10:49] about 16 GT or more right that is when daytime here and then move find the fire first
[1:11:00] so you can see there are some smoke on Seventh eighth you can see a lot more smoke
[1:11:08] ninth there's a lot more tenth smoke is actually transporting and in different parts of the the 11
[1:11:19] 11 this is 12 this again cloud has been cleared and you can see the smart plume is
[1:11:25] transporting towards the North these are all smoke blooms this one you can see this and let's look at this in more frequent
[1:11:41] and stem so this is September 16 1650z and I am actually incrementing by 10 minute so you can see how slowly actually smoke
[1:11:54] is moving probably the wind speed is very slow and you can animate it actually so if you don't want to create
[1:12:00] GIF you can animate the entire screen just say plate and it will actually animate the entire screen first time it
[1:12:08] will take some time to load the image once the image are loaded then it will be pretty fast
[1:12:15] okay this is September 15 15 oh oh any Mission went back to the earlier setting and then this is 16.
[1:12:34] so you can see this okay so I think uh this is one way to access the true color imagery is from
[1:12:46] the the uh goes east Goes West and himawari and there are other ways which are shown in
[1:12:53] the PowerPoint slide which you can use uh unfortunately uh the level two data sets are not yet from GST satellites are
[1:13:03] not yet in world view uh hopefully they will become available in coming time but right now you can access the RGB images
[1:13:12] so with that uh let me close this session and I will ask Dr Aaron um to actually give us a 10 minute
[1:13:22] presentation on Tempo Mission which is a new air quality Mission coming up over the Matrix thank you everyone and we I
[1:13:32] will be here for question answers after Dr Aaron presence all right well thanks pollen and the rset team in general for inviting me
[1:13:42] here it's like pollen said I'm going to be presenting on the tempo Mission some background information um on the mission
[1:13:48] um Aaron neger the tempo Deputy program applications delayed I'm here at the University of Alabama at Huntsville and
[1:13:55] NASA Marshall so I'm going to first start off with a few quick facts on the tempo Mission it was
[1:14:04] or is NASA's first Earth Adventure instrument that was selected in 2012. Tempo will observe atmospheric pollution every daylight hour at high spatial
[1:14:15] resolution from geostationary orbit and the coverage of tempo in this full field regard coverage of tempo over greater
[1:14:25] North America here that Temple will provide provide Tempo is a ultraviolet and visible ink spectrometer and that will operate in
[1:14:35] the ultraviolet and visible wavelength regions here shown at the bottom right from about 290 to 490 nanometers and 540
[1:14:43] to 740 nanometers and this capability will enable a Tempo to be sensitive to policy relevant pollutants such as hydrogen dioxide
[1:14:52] sulfur dioxide ozone and aerosols as well well and this will this capability will also enable Tempo to separate and distinguish
[1:15:02] between boundary layer and free tropospheric and stratospheric ozone which would be kind of first ever first ever retrieval of PBO ozone for space
[1:15:12] and we had a really uh exciting event recently we had our the tempo instrument was integrated with our host satellite
[1:15:19] and tell us that 40e recently we have a launch date in the early March 2023 time frame with a target of March 1st to
[1:15:30] a position of 91 degrees of west longitude and we are also a member of a geostationary satellite constellation
[1:15:36] for observing pollution over the Northern Hemisphere and that includes the Gym's Mission which we talked on later on in this training
[1:15:47] so pollen already gave a background on how I measure and measure the atmosphere so I'll make this quick and just say
[1:15:56] that Tempo will measure the intensity of back scattered ultraviolet invisible radiation this is ultimately influenced by the surface and atmosphere conditions
[1:16:04] we then employ retrieval algorithms to derive the slant column densities from these measured type of atmosphere radiances in known Trace gas absorption
[1:16:14] spectral windows and the trace Trace gas column density is essentially the total number of molecules of a given gas which
[1:16:22] is NO2 along this light path from the surface to the satellite location and we then use that information and
[1:16:29] convert the slant column density to a vertical column density directly above the tempo footprint location to provide
[1:16:36] information on that stress in the vertical so quickly here it's kind of our proposed our data products that Tempo we
[1:16:47] anticipate from Tempo after launch this starts with our level 1B Radiance data that I just mentioned and which is used to drive these level
[1:16:57] two products shown here on this table this includes Cloud products and also our pollution products such as ozone
[1:17:04] profile which includes a zero to two kilometer or pbl ozone column information we have nitrogen dioxide formaldehyde sulfur dioxide and aerosol
[1:17:14] and these are also knee proposed near real-time products for NO2 formaldehyde SO2 and aerosol with the data latency of
[1:17:22] about two to three hours and we have other products as well such as Galax water vapor bromine and a Tempo
[1:17:31] goes are synergistic product which will include aerosol information such as UV aerosol Optical depth and visible aerosol Optical depth in addition to
[1:17:42] fire hot spot information and lightning information Etc we also have a level three product on our list as well which is essentially a
[1:17:51] gridded version of these level 2 products shown here are proposed resolution of that product is two by two
[1:17:58] kilometers squared currently and looking down this list right here most of our products are going to be at
[1:18:05] the temp Tempo nominal footprint resolution of 2 by 4.75 kilometers squared except for ozone profile this will require additional averaging over
[1:18:15] several Tempo Footprints to increase the signal to noise ratio and ultimately increase the accuracy of that product to
[1:18:23] the community and you can see this really revolutionary aspect part of tempo here where we have this hourly
[1:18:29] information on these Trace gases as well but we also have level four products that are going to be uh proposed for the
[1:18:39] mission Capital launch two all right so looking at the operational timeline here this is based on a March 2023 launch
[1:18:48] date keep that in mind this will be shifted if that launch date does encounter encounter um delays so our current Tempo
[1:18:55] commissioning phase is set for June through September 2023 we plan to release Level One beta data about four months after the
[1:19:05] commissioning phase and level two level three data about six months after the commissioning phase so we have a target
[1:19:12] of March 2024 for those level two level three products the data will be publicly available via NASA or data search in netcdf hdf5
[1:19:23] format that's our Baseline format for the mission we are also looking at other data formats and data services for the
[1:19:29] temple Mission as well during this pre-launch phase of the mission the latency of our standard offline products is really pretty good
[1:19:38] of three to six dollars except for the ozone profile which will have about a day latency due to just a
[1:19:44] essentially the computational expense of running that algorithm LR proposed near real-time products will have a latency of about two to three
[1:19:52] hours as I mentioned in that previous slide slide our Baseline Mission length is 20 months with a possible 10 plus year lifetime
[1:19:59] depending on a senior review note extensions every couple years Colin mentioned NASA world view earlier so we do we will have Tempo imagery and
[1:20:09] products available in world view and there's an EPA RC Gateway which will also be used to serve Up Tempo data to
[1:20:17] the community as well all right so I wanted to share here uh kind of the the granule information of
[1:20:25] how temp will be served up to the community in terms of level three level two data files after launch so they're
[1:20:31] showing the different granule information starting across the East portion of the field of regard to the West portion of the federal regard
[1:20:40] so this is 10 different granules which will be served up to the community for each of these complete hour scans
[1:20:46] this will also ultimately enable more efficient distribution of tempo data especially near real-time Tempo data and also reduce the data load for those
[1:20:55] users who may only want uh certain or focused only on a certain area of the federal regard they will you know only
[1:21:03] have to download one or two granule files perhaps rather than rather than the entire field regard all right so I want to show an animation
[1:21:12] here an approximation of how Tempo will scan after launch that you'll see here Tempo starting out across the East and then eventually
[1:21:21] covering the entire field of regard from the east to west and then later on in the afternoon so we're seeing the
[1:21:28] morning scans here across the east coast and now as we get more Daylight across the West you're seeing that stand in
[1:21:36] line moving to the west and eventually you will see that skin line moving across the East moving to the West as we
[1:21:43] lose daylight across the East later on the afternoon so ultimately Tempo will perform these Standard East to West hourly daytime
[1:21:52] scans across this field of regard over greater North America what is not shown here are also sub-hourly scans that will be performed
[1:22:02] for the tempo Mission which includes optimized scans across the East and West when the solar energy of angles too high
[1:22:09] over portions of the field of guard to complete our nominal hourly scan and we also have these Special Operations
[1:22:16] designed for the mission for dedicated experiments such as Iroquois disasters or Wildfire smoke events for example where we can actually look at selected
[1:22:25] portions of this field of regard at higher temporal resolution so yeah you saw that whole entire animation here and uh it kind of
[1:22:33] concluding there across the West as we lose daylight in the east all right so I want to zoom in closer
[1:22:40] here to California this is showing our troposphere our pre-launched tropospheric NO2 product for Tempo that we've created for the for the user
[1:22:50] community community and we've zoomed in here to California again showing this uh information on NO2 from the morning to the evening here and
[1:23:01] ultimately this is showing the ability of tempo to observe these rapidly varying NO2 columns within um you know your urban areas and traffic
[1:23:09] corridors across California the Central Valley for example you can see the very rapidly evolving NO2 columns in that
[1:23:17] region and we have a wildfire smoke event that occurred on this day later on in the afternoon which is also
[1:23:22] highlighted in this proxy product it's a very high NO2 columns associated with that smoke event um as you can see here our current
[1:23:31] observing capabilities such as the NASA ozone monitoring instrument which provides this midday this limited midday information overpass information on air
[1:23:41] pollutants is really incapable of showing this full diurnal picture you only get a couple of uh you know a
[1:23:47] couple of snapshots each day through our current observing capabilities simple will dramatically increase our capabilities for observing
[1:23:55] pollution in general all right so I want to also highlight our ozone profile product that will be
[1:24:03] available for Tempo after launch this is showing our pre-launch product but nevertheless we have this zero to two
[1:24:09] kilometer ozone animation here this is for one day and our tropospheric ozone product product and ultimately this proxy product is
[1:24:19] showing the ability for Tempo to track ozone pollution in the tropospheric layer throughout the daytime this can be
[1:24:26] a really revolutionary aspect of the tempo Mission um you know this proxy profile product here also demonstrates the sensitivity
[1:24:34] of the temple instrument to Ozone pollution in the lower troposphere we'll be able to capture that with Tempo
[1:24:40] ultimately providing new information on ozone pollution within this layer of air where people live and breathe which will
[1:24:47] be critical moving forward all right so I kind of wanted to finish off here with this final slide looking
[1:24:55] at well first looking at the tempo application areas you know Tempo data will ultimately enable new and enhanced health and air
[1:25:03] quality applications for the community here's kind of our chart here of the full breadth of tempo applications this
[1:25:11] includes those health and air quality thematic areas that you see here including regulatory science Public Health air pollution emissions and
[1:25:20] monitoring but also we have weather analysis and forecasting applications with Tempo and vegetation ocean monitoring applications with tempo
[1:25:28] and we have a very active early adopter Community with tempo as well and here's some of those Tempo early
[1:25:35] adopter studies I have are currently being looked at by the by those community members uh looking at NO2
[1:25:41] pollution inequality in urban areas dust storm monitoring capabilities with Tempo and also short-term analyzing short-term Public Health outcomes using that hourly
[1:25:52] gaseous pollutant information from tempo and I have a QR codes here you can scan those to actually join our early adopter
[1:26:00] program here and you can find much more details on these different early adopter studies in our Tempo green paper here
[1:26:08] through this QR code and my contact information is there at the bottom left feel free to email me on tempoquestions
[1:26:17] and I do want to mention one more thing as we conclude here I'll leave this up temporarily
[1:26:23] temporarily um um I did mention that we have this Tempo proxy data set and this data set is available to our
[1:26:31] Tempo science team of tempo early adopters and this is through NASA Earth data search I just want to quickly show
[1:26:38] you know the ability for me to go in here and actually download these pre-launched Tempo proxy data sets we
[1:26:47] have the tempo formaldehyde NO2 and ozone profile products currently available in this NASA Earth data search and you can kind of just play around
[1:26:56] with it download them learn how Tempo data will be served up to the community after launch and I will end there
[1:27:04] and bring this screen back up briefly if you wanted to get those QR codes off there there thanks Annan that was great
[1:27:14] um so uh now I think uh we finished uh completed the presentation part of today's uh session and we will move to
[1:27:25] question answer session and uh for that we will share all the questions which you have been putting in the
[1:27:34] question section if you have still some questions please do uh put that in question section so that we can take
[1:27:42] them one by one uh so I believe uh Selvin I'm going to share your question answer okay here it is
[1:27:51] Okay so what we are going to do is uh you will see on your screen uh are people able to see the question
[1:28:05] answers on their screen is the screen shared solving foreign foreign yes it is okay great thank you so
[1:28:18] we will put all the questions yes and this uh sheet we will answer one by one and then this sheet once we proofread it
[1:28:29] will be put on our website for any further uh reading people who wants to either look at the recordings or see
[1:28:39] this question as a refer want to refer this question on subscription Okay so question one uh why is the polar orbit
[1:28:50] different in every season what parameter can be affected by the polar orbiting of satellite so I think uh when you talk
[1:28:59] about different seasons as Polar uh so the polar orbits are circular orbit along the poles so they just rotate pole
[1:29:10] to pole and different part of the earth comes underneath the satellite in whatever parts of Earth is coming
[1:29:18] underneath the satellite over par orbit will be measured or taken the measurement from that part now as you
[1:29:26] know the uh since Earth is tilted that is that is what caused the season and in differences in different parts different
[1:29:34] area of the Earth will come into into the orbit into the overpass of orbit satellites and that is why you
[1:29:44] will see a difference in uh coverage in differences for it specifically to the air quality related uh you will notice that when you
[1:29:56] are talking about the aerosols measurements they are taken during only Cloud free conditions and snow and ice
[1:30:04] free conditions so during winter time during Northern Hemisphere winter Northern latitude location like Europe Canada they will have all ice covered
[1:30:14] and the aerosols observation in those locations will not be available uh similarly in the southern hemisphere same thing happens during their winter
[1:30:23] time so you will notice change in atmospheric aerosols or air quality related product coverage changes because snow and ice coverage changes in
[1:30:35] different seasons and same the cloud also has some seasonal Cycles in some certain part of the country for example over Asia or
[1:30:46] Indian Ocean or over India There Are Monsters season during which we don't have any uh good coverage of aerosomes
[1:30:53] in men's because of the Cloudy season So based on the uh for the air quality relevant also okay
[1:31:02] question two is the reflectivity of dust or smoke influenced by climate and if so then what is
[1:31:11] the best possible GST platform to be used to identify it okay I'm not very sure about this question but the
[1:31:19] reflectivity of dust and smoke does get influenced by the underlying surface on which uh where the smoke and dust are
[1:31:29] have in that atmosphere right uh their reflectivity or the scattering properties also change how big they are
[1:31:40] in size and what is their chemical composition the smoke in different uh no over the time smoke and Edge actually
[1:31:51] and can mix with other types of particles and that can change their scattering and absorption property similar things happen with the dust dust
[1:31:59] which transported to the long distance they are typically fine dust and they have a little bit different uh Optical
[1:32:07] properties compared to the larger coarse particles in the dust so anything in terms of the climate climate when we say climate change we
[1:32:18] are typically talking about the rainfalls the temperatures the relative humidity and those parameters can also actually impact some of the scattering
[1:32:28] properties of this particles so for example under relative humidity condition although smoke is not influenced but if you have absorb
[1:32:38] microscopic particles right like Urban aerosols then they can grow in size under high relative humidity condition and that can influence the properties
[1:32:48] now now currently uh the from the geostationary platform goes the ABI and Hi and then gems and Tempo they are the best some of
[1:33:02] the best or available uh uh missions in which you can use from which you can use uh data to identify smoke and dust and
[1:33:13] other types of particles and we will learn a little bit more about in in gens in session 3 which has
[1:33:23] uh different which make measurements in different part of the solar Spectrum which is UV similar to what you learn
[1:33:29] from Tempo Mission which Aaron was describing earlier thank you okay question three what useful things can we get from GST satellite during
[1:33:42] night time okay so night time um during night time uh we can actually uh if you are looking into visible
[1:33:51] imageries then Night Lights intensity can be measured and that can provides actually useful information about human activities and human presence or all
[1:34:03] around the world uh there are also infrared channels uh which can actually used can be used during night time to
[1:34:11] actually measure the temperatures and brightness temperature and that provides useful information the clouds can also be monitored during night time
[1:34:20] using infrared channels uh you can also monitor fog uh you can also actually do volcanic eruption monitoring during
[1:34:29] night time using infrared channels uh so typically there are range of channels but most of the visual channels does not
[1:34:37] provide a measurement during night except the night lights or the elimination from the Moon sometime okay uh so there is the question is
[1:34:52] there a simple explanation of what is average income although we did not talk about this in today's presentation so I
[1:34:59] will lead that question for part two and part three when it is more relevant to answer that question so we will get to
[1:35:06] that question in part three mostly when it is more relevant actually foreign is there an archive of ghost image and
[1:35:18] data somewhere I want to see data more than a week old for example from 200 yes so the goes uh 1617 image uh again uh
[1:35:28] goes series of satellite is uh managed and operated by NOAA so they do have a different archive uh one of the link is
[1:35:39] provided here in the document in week two the part two uh we will go over some of this uh
[1:35:47] archive and try to download the data using python script so please stay tuned for the next presentation by Dr amiha
[1:35:58] what is the full range of data observation frequencies from those are satellites so there are three which I mentioned
[1:36:05] earlier in the presentations the 10 minutes uh 30 second or one minute and then you have five minute conus
[1:36:12] observation those are default but in addition to those there are other modes which can be operated time to time uh
[1:36:20] and they are more like Flex mode so you can have entire uh full disk every five minutes or you can have a continual
[1:36:29] continuous measurement of full disk every five minutes or in those scenarios you do not have actually Corner service
[1:36:36] scale observation so again in part two when we talk specifically about level two products we will talk about more uh
[1:36:45] in details what additional modes are available in from the Gosa again in the script we have provided a link uh to get
[1:36:54] you more details on if you are interested in all the different modes in which those satellite can operate
[1:37:01] foreign so the world view it depends on the satellite for which you are actually accessing the data the mode is satellite
[1:37:16] which provides RGB image the first one was launched in 1999 on Terra so the data is available February 2000 onward
[1:37:27] from Modest era for modus Aqua 2002 or 2003 onward viers data has started populating more recently so they
[1:37:38] are available from 2012 onwards from us into so depending on the satellite instances the data will have different
[1:37:46] availability in the world view differently okay question eight I recently made a time lapse of hurricane Iran or Florida
[1:37:57] with ghost 16 full list data I use the band as follows C3 green C1 what kind of
[1:38:03] different band composition can I use when I try different band it gave me error okay I'm not sure where you tried
[1:38:10] and what kind of error you got but just to give you a kick overview you can actually when we loading those three
[1:38:19] images RGB in RGB band we see a true color image but you can actually change the order of RGB and then you can get a
[1:38:28] different color combination so it depends on what kind of features you are trying to highlight and based on that
[1:38:36] you can actually change the order or you can change the channel itself to actually have a different color scheme
[1:38:44] or different features highlighted in your image for example um when we do lens surface uh vegetation display typically we actually in case of
[1:38:56] mode is we load the band 7 in red and then then Bento in green and then blue in line one
[1:39:04] and that gives you a different color combination so because the vegetation is very reflective in near infrared which
[1:39:10] is bang two uh you and then absorption happens in band and when seven you will see a greenish color of vegetation in
[1:39:18] that particular and similarly brownish colors of the land which is uh very bright in the red color so
[1:39:25] depending on what feature you want to highlight you can make your own color combination and those are called false
[1:39:35] colors composite image false color composite image because you are actually loading different color scheme rather than RGB in that order so that is one
[1:39:45] possibility to use different color combination to get to to actually highlight certain features in a satellite imagery
[1:40:00] is there any data source which can give the option to download the data in Excel or CSP format from NASA world view uh
[1:40:08] unfortunately no NASA world view does not allow data to download uh in Excel or CSV what NASA worldview is does is
[1:40:18] provides a link to the original NASA Earth data where you can download the data either in net CDF format or hdf
[1:40:27] format or hdf5 format there are some other uh uh sources for example level 3 data which are graded from jio1a I
[1:40:39] believe can be downloaded in some cases in CSV format question number 10 if people want to use this data for
[1:40:54] machine learning models in data science projects with data format should they be familiar with what and what tools are
[1:41:01] needed for python users so I mentioned earlier these data comes in HTF in net CDF data format these are the
[1:41:12] two most common data format in which satellite data most of the satellite data are provided uh some satellite data
[1:41:19] are also provided in geotiff uh also but most of them are in hdf and net CDL python can handle both of these uh there
[1:41:28] are specific package in Python which can handle these data sets so if if if there is Advanced python user they should be
[1:41:37] able to actually read and map and extract the data from this format now specifically for air quality data in
[1:41:46] part two and part three both will have a component where we are going to actually take some of this level to data file and
[1:41:55] read map and extract the data using some of the example python codes so we will go through some of those exercise in
[1:42:03] part two and part three okay okay okay uh question 11. does a geostation satellite have an already been dispute
[1:42:14] data if it does uh can you provide me the link to the data yes so there is a level two derived
[1:42:22] motion winds uh from goes or satellites the link the data is available uh from NOAA nasty star Nets just websites and
[1:42:34] some of the link how to access the data are again available in the script which we are you can see here on your screen
[1:42:42] and this will be provided through our website later on to all the participants so you will be able to access those
[1:42:48] links we will do um like I said we will go through download process of level 2 data using
[1:42:55] python script in next week's presentation by Dr Amy Hub and she she will show you how to download and that
[1:43:03] should be able to easily you should be able to easily modify those scripts for wind data which are originally written
[1:43:10] for aerosol data foreign was being created okay Z means uh so this is a since most of the satellite data are uh
[1:43:30] global data sets and you need a const a constant time zone to represent the data so we typically use 24 our time called
[1:43:40] Zulu time that's what the Z stands for and this is typically UTC or GMT time it represents Z means represent UTC time or
[1:43:49] GMT time so most of the satellite data are reported actually in UTC in the g z comes from there
[1:43:58] foreign how can you measure the coverage for example of that volcano either width or depth okay so this is an interesting
[1:44:09] question and I uh it depends on what how you want to do it right so in terms of if you want to
[1:44:18] do the vertical profile of the vulcano or the height then you need uh the imager measurement may not be best to
[1:44:28] use it uh either you need a sensor which has capability to do multi-angle viewing of the same location
[1:44:38] for example Miser or you need a sensors or something which can have active senses for example lidar like a Calypso
[1:44:49] or a radar a based instrument which can actually manage it through those thick clouds and give you a vertical profiles
[1:45:00] and that will enable you to how to do the depth uh in terms of the width I
[1:45:06] think the width you can do calculate base if you take the original image and first you detect the boundaries of the
[1:45:15] volcano and then you can calculate actually as time passes how the width or the perimeter of that volcanic eruption
[1:45:23] is changing over time since each pixel had fixed uh size on the surface of the Earth you can
[1:45:33] actually convert that into either area or width or some kind of other kind of Dimension it is a it's it's not
[1:45:41] something readily available uh you you will have to do manually and there are tools actually which can allow you to do
[1:45:50] that some some of the image processing tools like arcgis or other which which might be allowed to do this kind of
[1:45:58] using level one way images okay question 14 how do I activate the time hours and minutes on the world view
[1:46:11] I only see a month and date okay so this happens uh when you by default um world view
[1:46:19] displays only Modis and viewers data as base layer and since I mentioned mode is nvs data only available one or two
[1:46:29] measurements per day you do not see the time there as soon as you load any geostationary data like goes or himawari
[1:46:38] the time hour and minutes start appearing in the times on the bottom bar as soon as you remove those two layers
[1:46:47] from geostationary that hourly window the time and minutes and hour options will go away from world view
[1:46:58] okay so the question 15 um and 60 uh 17 uh I believe uh Aaron do you want to take those three questions
[1:47:10] yeah sure for 15 definitely yeah internals are critical to the ozone profile retrieval and that averaging kernel information will be in
[1:47:20] the ozone profile product and in fact that's already in our pre-launch proxy product for folks that go take a look at
[1:47:29] that I showed on Earth Theta earlier so um the pre-launch proxy products were creating a man to have all the pertinent
[1:47:38] variables already in the file for users to browse and access uh interesting cross part critical for tempo
[1:47:47] 16 as well as chemistry profit available in units of PB are for the level products like NO2 SO2 will be available
[1:48:01] in molecules per centimeter squared the the um the units for those level two level three products um
[1:48:11] um abilities for users to go in there and convert those products to like a PPM I mean a ppb and our our ozone profile
[1:48:21] will be available in Dobson units so those are our standard unit output for our air quality products from tempo
[1:48:30] okay 17 and then answer it please yeah I was going to wait for uh whoever's typing to
[1:48:40] catch up but um so question 17 does Tempo cover other parts of the world uh no so
[1:48:49] Tempo will cover Greater Northern cap and during my presentation however that being said of you know pollen also
[1:48:59] mentioned on this uh or air quality constellation and that will include the submission essentially our sister mission of tempo with similar observing
[1:49:10] capabilities as Tempo which will cover Asia and we'll also have I think there are still planning on launching the
[1:49:18] European Sentinel 4 satellite in 2024 which will cover North Africa and Europe so we'll have a really nice uh kind of
[1:49:27] global air quality constellation that will cover a large portion of North America or not North America North the
[1:49:33] northern hemisphere for users so and um that's really going to be the great aspect of This Global air quality
[1:49:41] constellation I lost question 18. not not uh there we go okay why is the resolution different for
[1:49:59] ozone profile and aerosol okay this is tempo tempo here too or the ozone profile there is a lot of
[1:50:09] noise and that it's a very noisy retrieval when done at the tempo footprint nominal footprint location size of two by four point seven five
[1:50:19] kilometers squared so in order to kind of hit our Baseline Mission requirements on the Acura accuracy requirements of
[1:50:28] that ozone profile product we do some co-adding which is called Toe adding essentially averaging of tempo Footprints to increase the signal to
[1:50:39] noise ratio and ultimately increase the accuracy levels of that product for the community so that's kind of why the
[1:50:47] ozone profile is currently specified at eight by four point seven five kilometers squared rather than at the tempo nominal footprint size of 2 by
[1:50:59] 4.75 kilometers squared simpler for aerosol um kind of a similar concept there however you did see in our product list
[1:51:12] that I shared we are looking at a ghost R Tempo synergistic aerosol product which will have higher resolution
[1:51:22] aerosol information and we're looking at a potential a resolution spatially of that product at two by two kilometers
[1:51:32] squared currently so some of this is still kind of tdd and we're looking at this now during the pre-launch mission
[1:51:39] so probably more to come there and more updates on that aerosol product foreign foreign question 19 can I detect emissions of
[1:51:51] Knox for tempo for sure you know Tempo will provide column tropospheric column layer of information on your not nitrogen dioxide
[1:52:03] however you know that gives insight into these areas of nox emissions across the tempo field of regard of course there's
[1:52:12] extra steps and procedures that are needed to you know get at the Knox emissions but they can definitely
[1:52:19] identify areas of Knox emissions through that diuronally you know you know our hourly NO2 product from Tempo that will
[1:52:29] have that information from morning to you across a Tempo field of our guard it's one of the key aspects of tempo
[1:52:36] actually is the ability to monitor emissions from the morning to evening compared to our current low earth
[1:52:42] orbiters that are only focused on those midday hours um um question 20 might be this uh general question for
[1:52:55] pollen too yeah so question 20 is can we monitored and analyze Hydro metallurgical Hazard using Justice satellite data yes answer
[1:53:07] is yes I mean we do that all the time we measure we do typhoons hurricanes thunderstorms all those are
[1:53:16] hydrometological phenomena which we always always actually monitor using geostation and data uh in fact that is one of the
[1:53:25] primary use of GS stationary meteorological geostationary data how is the pre-launched data generated by Tempo and all those actual
[1:53:36] measurements data okay and this is your question question did a whole presentation on this um in brief how we do yeah don't just
[1:53:46] don't focus on the accuracy level of products we use model input information um yeah so hopefully that answers that
[1:53:54] question um there is a link I've presented more information on this during some of our Tempo early adopter
[1:54:00] workshops I could share that link to those presentations for more information on the pre-launch product generation thanks thanks Aaron so uh since we are
[1:54:13] already two hour and five minutes I'm going to just take the last question here the 22 and then we will uh we will
[1:54:20] actually actually post all the answers of all the remaining questions in written uh through this script uh later on uh on
[1:54:28] through our website so question 22 how can I get the level 2 and level 3 data from Justice satellite so uh simply just
[1:54:35] say stay tuned for part two and we will learn about how we get these data sets and with that thank you everyone for
[1:54:43] joining today's webinar series uh first part of the series next week we have specifically guest speaker Dr Amy Huff
[1:54:52] who will present on goes uh our series of data uh specifically related to your quality and then we'll play with some
[1:54:59] python codes uh to download and visualize the data thanks everyone thanks thank you Aaron for presenting thank you
[1:55:10] thanks bye-bye bye
