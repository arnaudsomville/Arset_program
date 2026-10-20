# Fundamentals of Remote Sensing Imagery and Tools to Access, Part 2/5

`https://www.youtube.com/watch?v=rVWfZH2eQY0` · id 275 · 1:08:57 · module 25 — Introduction to Satellite Remote Sensing for Air Quality Applications

[00:04] Let's start today's session. Uh again, welcome back everyone for the week two of webinar series on introduction to
[00:14] satellite remote sensing for air quality application. application. Uh today we will talk about the visible satellite imageries.
[00:25] So, just to give a quick review about uh we learned about the fundamental of remote sensing, how satellite make
[00:34] measurements, what are the different terminology which we use in satellite remote sensing like orbits to types of satellites swath, pixel size,
[00:46] various types of resolution. And those some of those concepts are very very important when we use satellite data for particular
[00:56] application. So, that we did covered in week one. By any chance if you have missed those, we have recorded version available
[01:06] on our set website which you can listen at your time and space. Today again we are going to do the
[01:15] satellite imagery the week two where we learn how we can use the simple visible imagery to learn
[01:23] about some of the air quality features in those images. Uh outline for the today's sessions are basically we look first
[01:34] what are these true and false color images. And what we can learn from these images. And then I will also provide
[01:41] tools of two useful image archives. And if you like to do tour with me, you can follow along with me
[01:52] on those websites. Excuse me, they're pretty easy to follow on. on. And And again those who are not there on the
[02:03] first session, my name is Pawan Gupta. I'm here at NASA Goddard Space Flight Center. Center. I'm a research scientist here and
[02:13] we do research on aerosol retrieval from satellite observations. Here is my contact details. If you need to contact me for any reason, please
[02:23] feel free to email me. Uh Uh we also have Brock Blavin who is managing this training and he's helping us with the
[02:36] software. So, if you have any technical problem or any logistic question, please feel free to email him. His email ID is
[02:45] listed on week one presentation. And thank you Brock for helping. So, let's start the today's session. Today we will learn about the visible
[02:55] images science of visual images. So, these visual satellite image are essentially essentially photographs just like what we take from
[03:03] our camera. These are energy collected by the visual sensors or cameras on board a satellite platform. Uh
[03:16] Uh And this is light energy which reflect from the objects on the earth incoming solar radiation as we learned
[03:24] in the week one presentation that how the sun's image the energy and then it reflected back to the space
[03:32] where the satellite is located and it takes takes captures that reflected light in different spectral channels. The reflectance is measure of albedo.
[03:44] So, So, the reflectance which get back to the space is measure of albedo which is the percentage of light
[03:51] reflected by the earth's surface or any other surfaces. So, we can define the albedo in that manner.
[03:59] Higher the value of albedo or higher the value of reflected radiance uh the objects appear more bright in color.
[04:10] And we are talking about the visual light here. So, for example clouds or snow, snow, they appear very bright in color
[04:19] because they reflect more light back to the space due to their specific uh uh optical property and due to the
[04:30] specific wavelength in which they are interacting. interacting. Uh lower the albedo, more it means the more light is absorbed by those specific
[04:39] objects. objects. So, for example water, if you look the ocean surface in satellite imagery, you will see it appears dark.
[04:50] As we discussed in last week that the earth observing remote sensing sensors typically make measurements many discrete wavelengths.
[05:02] These are called wavelength bands or spectral channels or just satellite channels. channels. Here in this picture, you're looking
[05:11] into a electromagnetic spectrum of incoming solar radiation. The The uh wavelength on the top are given in
[05:21] meters. meters. Uh Uh for for for the reference of size of this wavelength, wavelength, different physical subjects are shown
[05:30] here on the bottom of those numbers. Uh longer the wavelength uh uh are mostly radio waves, microwaves,
[05:42] uh infrareds and then as we move to the right, we see the visible ultraviolet, x-rays, soft x-ray, gamma rays are the
[05:51] short wavelengths. Today we are going to focus mostly on the visible part of the solar spectrum which you can see in the entire spectrum
[05:59] very very tiny part of the spectrum. Uh Uh since each uh wavelength wavelength interact with the object very
[06:12] differently, therefore selection of appropriate wavelengths becomes very critical in instrument designing and application. Uh typically for air quality
[06:24] application, we mostly use visible channels for particulate matter pollution like aerosols, particles in the atmosphere. Uh sometimes we use UV
[06:34] channels and infrared channels to infer other properties. Uh UV measurement in ultraviolet measurements are usually used to do some
[06:44] of the trace gas pollution which we learn about more on week four. And infrared channels are used to
[06:52] actually detect some of the cloud and fire properties uh which we are not going to discuss in this series
[06:59] but we will in some another series. Sometimes we use individual channel to extract specific information and other time we use the combination of two
[07:12] or more channels to retrieve specific information or property about an object. So, uh that is why it is really very very
[07:25] important to understand how this electromagnetic spectrum works and what are the different parts in which we are
[07:32] making measurements so that we can understand the advantage and limitations of that particular measurement. In today's talk, we will focus on visual
[07:44] imagery imagery created using channels in the visible part of solar spectrum. So, typically the visible part of solar spectrum
[07:52] ranges from 400 nm to 700 nm. Uh And it can be defined little bit higher and low lower end also
[08:01] but that's a typical range. So, to simulate what our human eyes can see, see, we combine the red channel
[08:11] uh the green channel and the blue satellite satellite channel into corresponding display channel and as a result we get a true
[08:20] color image. So, in order to simulate what human eye can see, we need these three basic three colors
[08:32] measurement in these three channels, red, green and blue. So, to understand a little bit more how we create the true color image or RGB,
[08:43] here is an example how we create it. Uh in this example, you have a satellite or eye looking
[08:52] sitting in the space and looking down to earth of specific area. And making the measurement in various
[09:01] different spectral channels as we discussed discussed in previous slide. So, out of this spectral channel we select
[09:09] select red green and blue. And And if you look here a little bit more, there are wavelengths
[09:19] are also reported for the red, green and the blue. So, the red is 600 671 nm, green 551 nm blue is 443 nm.
[09:31] Now, Now, these are central wavelength of uh channels as I think we discussed a little bit about that the bandwidth of
[09:40] the the channel in week one. And these are you will see the number very little bit here and there depending
[09:48] on different instrument. So, this is specifically for instrument called VIIRS. VIIRS. Now, if you observe these three images
[09:58] which are taken into red, green, and blue band, then uh we can identify some of the spectral
[10:08] behavior of the Earth atmosphere system. So, the first uh if you look the red band, uh what appears much darker um
[10:17] actually compared if you look this features over here, I don't know if you can see my cursor, but this features
[10:24] over here the darker uh that's a water body actually. And uh that appears much darker in the red band
[10:32] as compared to the blue band. It it's much brighter in the blue channels because the water reflects much more
[10:38] light in the blue and it absorb more light in the red, so it appears darker. Um on the other hand,
[10:47] uh the land appears uh much uh brighter in the red band compared to the blue band. So, if you see the blue, uh the
[10:56] land appears a little bit darker as compared to the red band. Uh clouds uh appears more or less uh
[11:06] similar in all three bands. Uh there's not much difference in their reflectivity. Uh of course, uh it
[11:12] depending on different types of cloud, amount of water vapor, and height, uh they can have different features,
[11:19] uh but uh in general, they have similar spectral response. Now, Now, if we combine these uh three bands and
[11:28] come up with a single image uh which shows color in the same manner as our human eye can see. So, this is a
[11:35] resultant image on the bottom here. Uh this is a resultant image on the bottom here where you can see things
[11:44] much more clearly and probably it's easier to identify different features in this because this is uh simulated as our human eye can
[11:54] uh see. So, you can see again the clouds as very bright white thing. Uh that's how we look from our human eye. You can
[12:03] see water as a dark uh land as a brownish uh color and then the other features which we'll talk a
[12:11] little bit. So, these uh this is very this resultant image is called actually uh true color image or RGB image. Uh by
[12:22] visual inspection of these uh image, uh we can learn many things about the uh scene and classify these images into
[12:31] different classes. So, we can say, "Okay, this area is cloud, this is water, this is plain, this is land, this
[12:38] is coastal." Uh and that really helps in understanding what's going on uh on that particular scene or
[12:46] uh on the Earth's surface or in the atmosphere or over the water. So, So, uh uh in other words, uh
[12:54] these true color images provide visual tool for us to uh extract some of the information uh for air quality uh application and in
[13:05] many other applications. Uh there's uh one of the most used uh and popular instrument which uh provide
[13:15] these true color images is called uh uh MODIS. And MODIS stands for MOD MOD Moderate Resolution Imaging
[13:23] Spectroradiometer. Spectroradiometer. Uh Uh it is one of the key imaging instrument on NASA's Earth Observing System. Uh it is designed to measure uh
[13:34] large-scale global uh dynamics across land and ocean and the atmosphere. It is flying on the two uh satellites
[13:43] allows uh MODIS to capture imagery of the same area of the Earth uh in different time of the
[13:57] day. day. Uh the two instruments are almost identical to each other and both generate daily continuous global uh
[14:07] images in multiple spectral. So, the one MODIS fly on the Terra platform platform uh which takes measurement in the
[14:16] morning time around 10:30 local solar time. The another is at on the MODIS Aqua which fly in the afternoon.
[14:26] Uh the data comes from uh MODIS in HDF format and we'll talk about that a little bit in these three and four. Uh
[14:33] the spectral coverage varies uh from uh uh uh uh visible IR near IR to mid IR. And there
[14:43] are 36 different bands in which it makes measurements. The special resolution is also varies depending on which band we
[14:51] are talking about. So, it varies from 250 m resolution to 1 km. There are two bands in which uh the 250
[14:58] m resolution works. There are five bands on which 500 m special resolution is obtained. And then the remaining bands
[15:06] obtained at 1 km special resolution. And this is a typical one-day uh global coverage of MODIS. And what you see
[15:14] here, the gaps as we talked in the last presentation, these are the data gaps. Uh here are some of the more details
[15:23] about the specific uh channels or bands of MODIS. And what you have here on the left side are the
[15:31] primary application or the primary use of these channels. And also the resolution in which this make measurements.
[15:40] Uh Uh and what do you see here is the bandwidth which I was talking in few slides early.
[15:47] And this bandwidth are basically defined as the width of the band. And then when we represent by the single wavelength,
[15:54] it's basically center wavelength of the band. Um I'm just uh displaying here the primary primary reflectance reflective bands of the
[16:05] MODIS. The remaining bands are actually in IR channel uh which I'm not displaying here for the purpose of
[16:13] I'm just using visible imagery. There's uh another sensor called VIIRS uh which is launched in 2010 and it is
[16:22] on board on the NPP the new NPP satellite. satellite. Uh it is uh a joint mission between NOAA
[16:30] and NASA. Uh VIIRS is in many ways similar to MODIS, MODIS, uh but there are differences as well.
[16:38] One notable difference uh which we discussed last week as well was the coverage of the swath width. So, if you
[16:45] noticed in the previous slide, uh MODIS uh does have orbital gaps or the data gaps. gaps. But if you look the VIIRS, uh it does
[16:56] not. Uh it it is due to the VIIRS uh larger swath width of about 3,000 km uh
[17:04] compared to what MODIS has is 2,330 km. So, you don't see those black area uh between orbit in the VIIRS image. And
[17:15] that's the added advantage of VIIRS on uh uh MODIS. Now, Now, if you understand the physics of how uh
[17:27] particular wavelength interact with the object on the Earth or in the atmosphere or the over ocean, uh we can create
[17:35] images uh which uh emphasize certain features. Uh so, in the visible imagery uh or the true color imagery,
[17:45] uh the water appears dark as it absorbs more energy. Uh clouds appeared white as it reflects more solar energy incoming solar energy.
[17:56] And then the pollution or the haze or smoke, uh uh the color actually will depends on its
[18:03] absorbent property. In this particular uh image, uh we know that this is uh uh fires burning in off
[18:12] of the coast of the Georgia and Florida in the in the United States is putting out a lot of this smoke which is mixing
[18:19] with the clouds and other weather pattern and transporting in the area. So, So, depending on where and how thick the
[18:27] smoke is, the color will change. So, this in this particular case, this is the smoke. Uh glint is uh another very important
[18:40] features in satellite imagery uh which is unavoidable uh over the ocean. ocean. Uh if you look in our satellite images,
[18:49] then identifying glint by the naked eye is not uh very difficult. Uh it's that bright uh area in the middle of the uh
[18:59] image uh uh over the ocean which is typically typically you see. So, in the in this image, if
[19:07] you look this very bright surface bright area in the middle of the image uh circled by this
[19:14] red circle, this is called glint. Uh sun sun glint is a uh phenomena that occurs when the
[19:22] sun reflects off the surface of the ocean uh at the same angle that satellite or the sensor is making
[19:31] measurement or viewing the surface. So, when the sun angle and the satellite angles matches uh over the ocean, you
[19:38] will see features like that. In the reflected area, the image uh uh the smooth over water uh ready you
[19:48] will see very smooth feature over water uh becomes very mirror type of uh features. features. While rough areas, which you can see
[19:58] some of that, becomes very dark. So, depending on the smoothness of ocean surface, surface, you can see very bright or very dark
[20:08] features on inside the satellite. Sometimes the sun glints regions of satellite image reveals interesting oceans or atmospheric
[20:18] feature feature that sun glint does not typically record. record. For air quality purpose, it is mostly not useful as
[20:27] signal dominates by this glint and it's very very hard to separate it from the atmospheric signal. So, this is important another
[20:37] restrictions of using satellite data over ocean is that wherever there is a glint, we will not see satellite data
[20:44] retrieval specifically for aerosols. Uh Uh clouds, there are other features in the atmosphere which we can identify.
[20:56] Clouds are like we said are white and gray and they tend to have textures. So, if you look the clouds in any satellite
[21:04] image, you will see some kind of a texture. So, there are clouds on the top of the image here.
[21:12] So, if you look the top of the image, there are clouds over the uh uh Himalayan mountain and beyond that area.
[21:20] Uh haze is usually featureless and gray in color or dim white. Dense haze is more opaque, so you can
[21:32] see some dense haze over here in the northeast part of the India and Bangladesh. Bangladesh. And the thinner haze is more
[21:40] transparent, which you can see in the northern India over here. Uh the color of the smoke or haze
[21:47] usually reflects the amount of fog, moisture and the chemical pollutants. So, it depends on their absorbing or
[21:55] reflecting properties. Uh but it is not always possible to tell the difference between haze and fog in visual interpretation of satellite
[22:05] images. Sometimes we can get confused because they have very similar spectral signature. signature. Uh what you see here is in this image is
[22:15] very smooth white features. These are natural fog, but it may be also mixed with the pollution. So, this very
[22:27] nice features most likely a natural fog mixed with the pollution or sometimes they can be very low clouds, which can
[22:36] appear as a fog. So, there are many different interesting features features which you can observe in any specific
[22:46] true color image and can help you identify different things things in any satellite imagery. There are more examples here.
[22:57] Volcanic plumes over Indonesia on the top right panel here. here. They appears depending on the eruptions. Plumes of the steam and gas are white.
[23:11] For example, in this case, uh ash plumes are brown. Suspended Suspended volcanic ash is also brown. So, depending on
[23:23] what kind of chemical composition is emitting for different volcano because some volcanoes are sulfate rich, some are CO2 rich, some of
[23:32] them are producing more ash. So, depending on what they're emitting, you will see different color in the
[23:39] visual satellite imagery. The The bottom right panel is shows very dark features. This is fire on the Indian oil. It was I think
[23:55] 2009 2009 close to Jaipur city. They had a big fire in the oil depot. And that that put out a lot of the smoke
[24:04] in the area. Since it was very oil fires, it produced a lot of black carbon. So, you can see a thick black
[24:12] plume of those fires. So, this is smoke, but the colors shows tell us that it's not typical vegetation fire.
[24:25] Uh Uh The other examples are dust over Australia, Australia, the urban or industrial pollution over Bangladesh and over India.
[24:37] So, by looking this satellite imagery over time and over time, you'll start getting a good feeling about different
[24:45] features in these images. You can identify by their shape, textures or by their color. Uh Uh another example set of images
[24:59] on top, you have a Saharan dust, which is looking brown. And what you can see is that the
[25:07] the contrast of the dust when it goes off the over ocean, then you can clearly see is
[25:13] because of the dark background of ocean. But if you see the same dust over land, then it is difficult to separate between
[25:23] land and dust because the underlying surface is also very bright and on top of that dust dust is very bright. So,
[25:31] to identify dust over land, probably we need to use different bands or more spectral channels so that we can separate these two
[25:39] signals. signals. Uh another example of wildfires off the coast of California, where you see a lot of fires burning and
[25:48] they're putting very thick plume of a smoke, which is with the wind transporting over the ocean and you can see very nice smoke
[25:57] plumes plumes with different colors based on their opacity. Again, there's some industrial pollutions off the northeast of US here and the smoke
[26:10] pollution over the Atlantic. Uh Another example of fires in Alaska. They're putting out some smoke. So, again, depending on what what is your
[26:22] interest, different features will look different in the visual imagery is and will be helpful. Okay, so before going
[26:33] forward, forward, I have a very quick quiz where we can identify some of those features features in the satellite images. So, I have a
[26:45] composite imagery of the over the United States and I have numbered some of the specific areas 1 to 8 in the image.
[26:55] And basically, you need to identify what each of these surface or the features of that image are.
[27:05] are. You can say either they're cloud, haze, land, water, glint, whatever. So, So, I will just to give you a minute to look
[27:14] around this image and then I have three poll question uh looking at uh haze, cloud and sun glint. So, if you
[27:25] can just respond to them very quickly, then we can can we can move forward. Okay, so I think let's move on so that we can
[27:45] cover other things. I think most people have answered it correctly, but I also give you the answer here quickly.
[27:56] So, if you look the next image, there are answers. So, you see sun glint over off coast of the California, the bright
[28:04] surface which we talked about and you can see the same feature over ocean on Excuse me, on the east coast.
[28:12] You can see some smoke. Clouds are visible in many different places. places. Uh you can see some haze, which is
[28:21] transporting actually and there are some snow in the northern latitude. So, So, these are some of the
[28:30] important things which we can learn from these images. Now, before I move forward, I would like to go ahead and do a quick
[28:42] tour to a website where you can find this interesting images because I have shown some of the
[28:49] good images here where you can look this different different really beautiful features of Earth's atmosphere system. So, where to look for
[28:58] this? So, for that, I will share share and you can start your browser if you would like to follow along with me.
[29:16] Okay, so uh there is a website called Earth Observatory. So, if you you if you open the any search engine, you
[29:28] just type NASA Earth Observatory. Observatory. And then the first link which you see is Earth Observatory nasa.gov. That's where
[29:38] you want to look. And if you open the site, you will see a image of the day. So, Earth Observatory
[29:48] folks actually provide image of the day which is interesting to the different people. But before going to that, I would like
[29:56] to go bottom of the page and there's a link called about about the Earth Observatory. Observatory. And this basically gives you a very nice
[30:07] overview of what Earth Observatory is. So, I'm going to read the mission statement. statement. The Earth Observatory mission is to
[30:14] share with public the images, stories, and discoveries about the environment, Earth system, and climate that emerged from NASA research,
[30:26] including its satellite missions, in field research experiment, and the models. So, basically it's an public platform where people can find
[30:36] interesting images. And then you can find other all the details about who are involved and other things.
[30:43] So, let's go back to the home and you see image of the day. Uh you can also see some of the features
[30:51] here and you can click uh on these different this arrow to get to different images. If you go a little bit more, then you
[31:03] will see natural hazard where you will see uh events like dust storm, typhoon, or or thunderstorm, or
[31:14] uh volcano, or smoke, or fire, or that kind of thing. Uh if you go a little bit more on the
[31:22] global maps, then you will see the maps of Let me click on the global maps here. So, this is a kind of an archive of
[31:32] global maps of different at land atmosphere features. So, for example, aerosol optical depth is one of the parameter which we will learn more
[31:44] next week. You can find the monthly map and these are in movie format. So, you can play and see how things are
[31:51] happening from the March 2012 uh May 2016. So, usually they they keep it correct within 1 or 2 months.
[32:00] And then you can read about it uh what we are trying to show here. Uh similarly, you can see other
[32:09] parameters parameters uh aerosol size, fire. You can look at this is very interesting thing. Um so, you can play this how
[32:18] different parts of the world are having fire in different season uh depending on the weather pattern and
[32:25] other other practices in that particular region. So, this is I I like I specifically like because this gives to me a good global
[32:35] view of different uh uh uh Earth atmosphere parameters which I'm interested in. So, you can see vegetation,
[32:45] vegetation, uh rainfall, snow cover, water vapor, sea surface temperature, and they keep adding new parameter as they
[32:52] becomes available. Now, you can click on the images and then again you will see very different types of images. So, you will see heat,
[33:02] land, land, uh snow, water, life. So, they are classified into different categories. And so, this is like for example, very
[33:11] interesting. So, they do not only provide image from the satellite, but from the photographs taken by the astronauts. So,
[33:18] this is a photograph taken by astronaut uh from the International Space Station and it's for showing the city of Paris
[33:27] in the night time. So, So, very interesting and you can see related images here on the right side.
[33:37] You can see some of the features, uh articles from the field campaign, from the long-term studies, from the
[33:44] research. research. Uh Uh you have here on the calendars, you can browse by different years, you can
[33:51] browse by different topics. Uh this is the news and notes. And if you don't find what you're looking, you can also
[33:59] search. search. So, one of the thing I would like to show is the story uh they have done is called tracking the
[34:09] dust off over the Atlantic. So, this is uh a study done in August 2013 and this is event which lasted several
[34:19] days. So, you have Africa uh which uh Saharan dust put out a lot of dust over ocean and with the weather
[34:29] system, this dust actually transport all the way to the United States. So, this is the first image and if you
[34:35] look these image in time series, then you can actually see how the dust plume is transported. So, this is July 31st,
[34:43] August 1st, you can see it expanded to much bigger area. And if you look uh August 2nd, then it almost reached to
[34:52] the South America and some of the Caribbean Islands. You can see same thing with some more uh
[35:00] uh more quantitative parameters called aerosol. So, this is a from another sensor called OMI which provide aerosol
[35:08] index similar to OMI which we'll talk next week actually. But what you see this uh are the aerosol concentration. So,
[35:15] the the uh yellow color is lower aerosol and the red is more aerosol. So, you can see the
[35:20] smoke plume is the dust plume is originating over Sahara on the day one of July 31st. It's transporting in the
[35:28] Atlantic. Atlantic. It extend uh on August 1st and August 2nd, it reaches to some of the part of
[35:36] the the South America and Caribbean. And if you keep looking, then you will see that it reaches all the way to the Central
[35:42] America and some part of the Florida Island of Bahamas. So, this is interesting and you This is completely So, you can find such
[35:52] very nice case studies in the Earth Observatory. And we'll see this from another uh another another uh archive where you can see uh analyze
[36:03] the similar things for any length of time. So, with that uh I will go back to the presentation.
[36:21] And uh we'll continue our presentation and then I will show you another tool uh towards the end.
[36:28] So, that was an uh tools to the Earth Observatory. Uh again, all the links are there on this PPT uh towards the end.
[36:36] So, if you want to access it at a later point and you want to learn that's very
[36:41] very very interesting. I always like to go that website to find different interesting features. features. Okay, let's move on.
[36:50] So, I was showing an example of using time series in Earth Observatory. So, we looked at images for different days to track how
[36:58] dust is moving from source to different part of the world. Okay? Okay? Uh here is another example where
[37:06] dust is originating in uh in Arabian Peninsula and again like I was talking earlier, we have two MODIS
[37:17] sensor, one on Terra which is about 10:30 a.m. and then Aqua. So, we can look actually the same thing
[37:24] uh using two different time in in same day. So, this is April 6, 2013 and this is morning time and the bottom
[37:34] is the afternoon time. And I would like you to pay attention in the region where we have the circle.
[37:40] Uh so, if you look the top panel on inside the circle, you will see some uh hazy some
[37:47] brownish thing which is actually dust, but it since it's over land and the surface, then the dust color is similar.
[37:54] It's very hard to identify it. And on the bottom, you can see same thing, but there's a
[38:00] data gap here due to the orbital gap of the MODIS sensor. Now, let's look this same area uh in the another day. So, this is
[38:10] April 6, this is April 7. Uh Uh you see that dust has actually moved all the way and it has it's covering lot
[38:20] more area. And if you look very carefully, carefully, uh in the morning time around 10:30, you see a layer of uh dust along the coast
[38:31] which is much more easily visible in the satellite image due to the background is very dark water
[38:37] bodies. bodies. And if you see 3 hours later around 1:30, you can see that it has extended
[38:44] further. So, you see much larger area. So, it clearly demonstrate that the over time, the dust storm is moving towards
[38:53] uh uh Arabian Sea and you can track that using the satellite. So, now if you go to the
[38:59] next day, this is August April 8 and then you can see the dust is actually covering most of the Arabian Sea and
[39:08] reaching to the uh other regions, Pakistan and India. And in in the afternoon, you see the extent it has uh
[39:18] increased the extent. And also what one other thing you can notice in these two images is that in the
[39:24] morning time, the dust is concentrated in the smaller area, so it's much more thicker. thicker. Uh in the afternoon, it has extended to
[39:32] the larger area, so it has become thinner in uh density. So, these are some of the interesting
[39:39] features which we You just look in the visible satellite image identify. Okay, now we have talked enough about
[39:48] true color images, but these are not the only images. We can also have false color images. So, false color images are to enhance
[40:00] particular features we want to see an image. So, we load the band into red, green, and blue display channel
[40:08] that do not correspond to the visible red, green, and blue wavelength. So, instead of loading red, green, and blue, we choose
[40:18] different channels. So, in this case, we have a Landsat image here. And instead of RGB, red, green, blue channel, we
[40:30] decided to use a 1.6 micron, 1.2 micron, and 2.1 micron channel, which are loaded in the same
[40:39] RGB channel and in the display system. And this is a little bit more computer science science thing how we load this into display, but
[40:47] if you there are software which can do you do for these things for you, or you can write up your own computer
[40:54] software to do that. So, what you see here are some of the nice land features. There's a
[41:02] Pay attention to this magenta pink area on the top left area of the image, and then you
[41:10] can see nice some land city type images and then vegetations and then some river type features. Now, if I do the same image
[41:21] by true color image, so I also have on the left is true color image of the same
[41:26] scene where I loaded uh red in the red channel, green in the green channel, blue in the blue channel.
[41:35] So, what I see is the smoke plume coming from these fires which are happening here. And this is the exactly
[41:42] the same region in this. But in the true color image, I cannot identify a lot of things. Uh
[41:51] But if I do the false color image, what you see here is you can see some trace
[41:56] of a smoke in the false color image. But since since the smoke particle are smaller or the
[42:02] fine in size, uh they are not visible very well visible in the longer wavelength because we are using 1.6,
[42:10] 1.2, and 2.1 micron channel where their signal is very low. And that's the reason you don't see those
[42:18] smoke plume. And in this channel, the smoke appears as a transparent, and you can see features underneath that smoke plume,
[42:27] which is not possible in the true color image. So, these are the advantage of having false color image. You can see
[42:34] certain things which are not possible in the true color image. So, again, reemphasize the importance of selecting
[42:46] wavelength and understanding in which wavelength the satellite is making measurements. measurements. Uh and this is a nice example of that.
[42:54] And you can find a lot of false color images images actually on Earth Observatory, and I will show you another tool where you can
[43:01] find find do these kind of images more. Uh here is another very good example of true color images, and this is really
[43:13] phenomenal example. If if you are in the United States in Europe part of the Europe, we have something called fall color
[43:23] where the trees changes their colors. They become really yellow, orange, red, and different colors. And I think in many other parts of the
[43:32] world it happens depending on the vegetation type and the climate. Uh but the interesting thing is can we
[43:40] see that from the satellite, from the space? So, this is pictures taken over a forest covering the Great Smoky Mountain
[43:51] in the southeastern United States. Uh it changes color from brown to green to orange to brown in different seasons.
[44:00] So, on the top, what you see So, let's start with the bottom right panel, which is summer. And in summer,
[44:08] you have a lot of vegetations. All the uh all the mountains are covered with the vegetation, so you see nice
[44:15] green pictures like this. As you move from summer to fall season, when trees start changing the color and
[44:25] leaves start falling, you see a very brownish color where you have mixture of different colors which makes this shape. So, the fall looks
[44:35] very colorful in the in that part of the world. world. From fall to winter, when there is
[44:43] low temperature, all of the most of the uh leaves from the vegetation fell down, and you can see underlying surface. So,
[44:53] you see very rough land type of features. features. Uh in the spring time, bottom left here, uh
[45:03] uh temperature start increasing, and then the vegetation is start blooming, and you see actually the leaves coming start coming back. So, you
[45:14] see some features which is greenish combination of greenish and brownish. So, some of the land some of the trees
[45:20] have have vegetation vegetation leaves, some of them does not. So, you see a mixture of green and brown. And
[45:27] again, in the summer it becomes green. So, this is really powerful tool to observe things which we
[45:33] cannot think about seeing that from 7 800 km from the in the space, which you can really see in the satellite. And
[45:41] this can be very useful in monitoring this kind of features around the world, learning about different type of
[45:47] vegetations, and for just for fun purposes, it's really interesting. interesting. Uh this is a article on the Earth
[45:59] Observatory. If you want to learn a little bit more about this feature identification, identification, there there is also article on this fall
[46:07] color images on the Earth Observatory, which you can find using this link here. So, this is in real time if you want to
[46:15] learn more. I would highly recommend to go through this web page. Uh here is a list of several web page uh
[46:26] which we usually recommend for people to get uh satellite imageries and there are different different ones. ones. And
[46:38] And in the end, we already talked about Earth Observatory. I would like to give you a tour of another
[46:45] website called NASA Worldview, which provides near real-time access of satellite imageries and many other parameters. So, to do that, uh I'm going
[46:57] to share back a my screen, and again, if you would like to to if you would like to follow along with
[47:07] me, me, please uh open your browser, and then we will move from there. Okay, so I will go back to
[47:19] Google. Google. Um Um I usually don't remember the URL, so I just use Google to So, I will type NASA
[47:30] World World View. View. And if I type NASA World View, the first result shows worldview.earthdata.nasa.gov. worldview.earthdata.nasa.gov. That's
[47:40] That's where I will click. And if you click on that, uh you will see a page like this, uh where
[47:48] you have a a welcome window, which says take a tour or skip the tour. So, if you are already
[47:55] using this, you can skip, but if you are first time users, I would highly recommend take a tour because when you
[48:02] take this tour, it will tell you what these different buttons or clicks you can do in this tool. So, I'll
[48:12] just go through very quickly walk you through what this is. So, the timeline on the bottom, you have a timeline. You can select You
[48:22] can change the date by going by arrow, you can type, you can use this arrow going back and forth, uh or you can
[48:29] click on any of this area here to go jump to that particular line. Uh Uh There is a days month window here. You
[48:38] can click on any of that, and it will take you to that escape. So, this is timeline with where you can
[48:45] select which date you are interested in. Uh you have timelines continuous already, and then then you have a layer.
[48:54] So, So, uh There are two types of layer, base layer. Base layer is basically the background layer which you want to
[49:02] display, and there are three options in this layer. You can either have a fierce reflectance, reflectance, or the true color image. You can have
[49:12] MODIS Aqua true color image, or you can have a Terra MODIS true color images. So, you can select that which one you
[49:19] want. want. Then you can pick the layers here, overlaying layers. So, there are some basic layers like coast lines. You
[49:29] can click that. You can click on the places names. As soon as you activate this layer, you
[49:35] will see start seeing some the names. And if you you can click on this I button again, the those uh
[49:43] the cross sign says it's not active. And if you click again, it will come back. So, if there is a cross on the I,
[49:51] it means not active. If it is there's no cross, then it means active. And then you can click on this bottom to
[49:59] show some country and other kind of uh features. features. Okay. Now, if you go to the next uh here are
[50:10] some of the maps which you can use uh uh the toolbar has some of the things like uh uh you can get a link to the
[50:21] display which you are looking right now. So, if you click on this thing, it will give you a link of the current display,
[50:28] and you can share with your friends uh uh uh within agency or anybody else. You can put it on online, and this is a
[50:35] permanent link. So, if you take it now, uh uh uh uh it's supposed it's not uh supposed to
[50:42] expire. expire. Uh you can if you click on the camera, you can take a snapshot of area. So, as
[50:50] soon as you click on that, you can go to a specific area, make a box, and then
[50:55] you can uh save the image in different special resolution uh in different format, JPEG, PNG, GeoTIFF, or KMZ. KMZ is for Google
[51:04] Earth. GeoTIFF GeoTIFF is for people who wants to use in ArcGIS format. Uh you can choose that.
[51:13] Uh there's an information tab where you can learn a little bit more about source and other kind of things. And if you
[51:19] have a problem, you can send it directly to them. So, this is a very uh good tool. So, let
[51:26] me go to uh here on the panel on the left side. So, you have at the active
[51:33] and if I click on the add layer, then it comes up with this dialog box. And what you see here on the dialog box
[51:43] is different features. Uh they are categorized air quality, ash plumes, fires, dust, drought, floods, severe storms, shipping, vegetation, and
[51:55] there are many others. I think there are more than 500 or 600 different parameters which you can actually
[52:00] display here. And if you don't know where which parameter you're looking, you can search for here. So, for example, I can search for
[52:06] aerosols, and then all the parameters related to the aerosols are displayed here, which I can display. I can click
[52:14] on the box on the right side, and then it will just start coming up on the map
[52:19] like this. So, I would like to go back uh uh of the dust transport which we just
[52:30] looked on the Earth Observatory and see if if you can uh visualize that. So, to do that, uh
[52:38] let me let me close all of these. And then first go to the date on which I
[52:47] want to go back. Okay. So, that was from 2013. So, I'll click here and go to 2013.
[52:55] 2013. And then that was the starting in July. So, I will I'm already on July, and then
[53:00] let's start somewhere around 28 uh July. Okay. So, this is 28 July, and we are looking into this area. Okay.
[53:14] Uh Uh pay attention to uh this zoomed-in area off the coast of Africa. Okay. And we are looking
[53:22] uh MODIS Aqua images. So, let's let me go back and see. So, on 28 July, you don't see much activity in terms of the
[53:31] dust over ocean. You see a plain You see a data gaps. Now, let's change the date. So, if I click this
[53:39] arrow on the bottom, I go back to the next day. Now, you see So, 28, 29, you see it starts seeing
[53:48] from from uh brownish shade over ocean. That's dust coming from the Saharan Desert. Uh I can click on that, and then you
[53:58] will see progression of the transport of the dust as we move along. 31st, you can see much more extended
[54:07] this nice features of dust which is going along with the weather pattern system. And then again, you see how extended it
[54:18] has uh over the time. August 1st, August 2nd, you see it has reached all the way here.
[54:26] here. And now, things are looking much thinner, but you can see some features, some hazy type features over the uh Central America and
[54:36] over over uh Southern America. Now, you don't see any dust here in this region on August 4th, but you see some
[54:45] over over uh Central uh Central America and America Southern America region. Now, how do we know this
[54:53] is dust or not? So, one is that we look the satellite visual imagery and by training, we know that okay, these are
[55:01] dust. But there are other ways to do that. that. So, let me bring some other uh features
[55:07] which can tell us some of the So, I will go to the dust dust storm. And then there are three
[55:13] parameters called aerosol optical depth. So, I'm looking at warm uh MODIS satellite. So, I will click on the
[55:21] aerosol optical depth, which will tell me. And then I will also uh capture another parameter which we
[55:28] talked next week, but I just want to give you a brief uh uh uh uh uh example of how it can be used. It's
[55:36] called Angstrom exponent over ocean. So, I will pick that, too. So, as soon as I pick them, they appear
[55:43] here on the layers window and in in the order in which I picked them. And if I click on
[55:50] this, I can actually move their order. So, and as you see, as as soon as I move
[55:55] them in order, their display on the panel is also changed. So, let's go back to the I'm going to deactivate these two
[56:04] layers and just have the original image. So, you don't see any visible image now. I will put aerosol optical depth, which
[56:10] is an indicator of how much aerosol is in the atmosphere, and we'll learn about that more in next week.
[56:17] So, you see some high values of aerosol optical depth. Okay, here in this spot. Uh again, you can move
[56:26] June 29th, when we have seen the layer is is dust dust dust transporting uh July July 31st, due to some reason, we don't have
[56:38] that retrieval. Uh July 31st, you can see very high values of aerosol optical depth in the region where we have dust.
[56:48] Uh this is August 1st. Again, the dust is transporting. And this is August 2nd. Again, you can
[56:55] see nice plume of dust. And these data gaps actually can be problematic. So, you have this gap due to the plain and due to the
[57:05] orbital gap of the satellite. And on August 3rd, it has transported all the way to here on the
[57:12] west side. August 4th, August 5th, and like this. So, you can see that. So, that's another indicator of there is
[57:22] some aerosol uh features going on. But uh this component which I was talking is called aerosol aerosol and
[57:30] and Angstrom exponent. And this basically tells me uh about the size of the particle. So, uh if Angstrom coefficient values are
[57:41] larger than one, they are typically small-sized particles like a smoke and other things. Uh if their size is
[57:52] if their size if the Angstrom exponent value is less than one, uh then they are telling me they are
[57:58] larger-sized particles. So, if you see these values, they are about less than 0.5 or maybe lesser, and you can see
[58:07] some of the colors changing. Uh this color is actually uh even lower less than 0.15 or something like that. And
[58:15] this is indicator of dust. Again, uh you can flip through different days, and you will see that dust is showing low values
[58:26] of Angstrom coefficient, suggesting these are some coarse-sized particles. And looking by knowing the source and area, you can say yeah, this is
[58:35] most likely dust. Uh you can There are another features here. Uh if you click on this uh panel
[58:45] which has arrow in it, it's a download button. So, you as soon as you click on that, you will see satellite orbit, and
[58:53] then uh you can click on this once or and then it will start displaying granules of MODIS, and you'll learn
[59:00] about that. And And as soon as I select that, uh first I have to select which layer I want to.
[59:07] So, for example, aerosol optical depth, I go back here, I select this, and then it it's uh I can say select download
[59:16] selected data, and then I will find the list of the data. I can directly download the MODIS
[59:22] uh uh HDF file, which we'll learn more next week. Uh I can search on the website, and there are other tools uh
[59:29] for your help. And I think that's all I have. Let me go back to the presentation here.
[59:51] So, again the link is here if forget it, please make use. Again, like last week, there's no assignment
[59:59] for this week. Next week we'll talk about aerosols specifically, remote sensing of aerosols and the NASA products and how we can
[1:00:09] connect them with the surface level PM2.5. PM2.5. And And just a reminder, all the materials and recordings will be available through
[1:00:19] this web link. And here is my contact information for any technical question. If you have other other issues with material access, trainings,
[1:00:29] and other like just take please please contact Brock Glavine, who's our training coordinator, and he will be happy to
[1:00:38] help you With that, thank you, and I will be happy to take any questions for next 10
[1:00:46] minutes or so. Thank you very much. Okay, so there is the question, which sensor was used on the image shown on
[1:01:20] slide 55 22. Okay, those were referring to the false color image showing some of the smoke plume
[1:01:29] from the fire. Those are very high resolution images, and they comes from Landsat satellite, which is a land
[1:01:36] mapping sensors. And so those images were from the Landsat. Okay. Sorry. Sorry. Oh, oops. How can glint be corrected from any
[1:02:08] images for its analytical purpose? We can correct glint up to some extent, but it will depend on what features
[1:02:19] you're trying to extract. For air quality purpose and specifically for aerosols, aerosols, it's very very hard to correct it. So,
[1:02:28] whenever there is a glint, we actually mask that data and we do not use for aerosol retrieval.
[1:02:37] But depending on the sun solar geometry, sun satellite geometry, you can calculate actually the impact of glint
[1:02:43] on each pixel. Okay, let me see what are other questions here. Will the sun glint area act more like a
[1:02:56] camera aperture and reflect the surface activity of the sun? sun? Right, it's not about the surface activity of the sun.
[1:03:07] It's the angle in which sun is uh putting out the solar radiation and the satellite is looking. So, when you have
[1:03:17] a a they both are in the same angles. Although they are looking in different direction, but in the same angle. So,
[1:03:24] it's called a specular reflection. It's a physics terminology. So, when you have a specular reflection, you see this very
[1:03:31] bright bright reflectivity, very bright reflectivity, and it's very hard to see other features in that kind of thing.
[1:03:40] WorldView and MODIS. I already did this thing before, but the problem is that the data in HDF form, how can it be used
[1:03:46] in GIS software? Okay, so if you noticed when I showed you a download camera button, if you pick a specific
[1:03:56] area and you want to use that image in its GIS format, then you can actually download in
[1:04:05] GeoTIFF format. And GeoTIFF is accessible through any GIS format. But there are I understand there are some other data sets which might be in
[1:04:15] HDF format. So, there are ways to Nowadays new GIS softwares handle the HDF data like ArcGIS can handle HDF
[1:04:26] data. Okay. If there's too many clouds in certain region, how do we detect fires? Okay. So, if there are a lot of clouds, one
[1:04:41] thing we can do about the fire is to use the infrared channel. And by looking difference in the
[1:04:50] temperature, because if there is a fire, you will see high temperature in that region. And that can be an indicator of
[1:04:57] fire. And that can separate from the cloud cloud and fire. That's one option, but there are other options in
[1:05:05] where you look at different spectral signature of smoke and cloud, which and you can use them to
[1:05:12] separate them. How can you identify a snow and clouds in satellite images? Because both appears white. Okay,
[1:05:26] Okay, yes, it's true that both appears white, but in general, fresh snow or long-term snow or ice have very high
[1:05:37] reflectivity, even higher than clouds. So, usually they are much more brighter than clouds. But sometime I can
[1:05:44] understand they have similar reflectivity. So, then you start looking the temperature. is another handy things to look because snow ice
[1:05:53] will have very cold temperature, whereas clouds will might not have that cold temperature. temperature. Other information we can look about some
[1:06:02] of the height information. Then we also look about their textures. Because if you see the snow and ice, the
[1:06:11] clouds look very smooth. Snow ice will have some kind of a texture, so you can can use those different tools, spatial
[1:06:20] and spectral variability in these features to identify or separate them. Okay. Okay. Are we able to identify small fires
[1:06:37] using MODIS? Okay. Okay. So, a small is relative terms. MODIS channels which detect fires are at 1 km spatial resolution. So,
[1:06:51] anything below that, if very small fire like a dump fire, probably not. But if it is large enough to have enough signal, then
[1:07:00] yes. How do false color images allow you to see through clouds or haze? So, So, false color images means you can choose
[1:07:15] any channel you want. So, for example, if you have very infrared channel, which does not reflect which does not
[1:07:24] see any reflection from the smallest smoke particles or haze particles, then you can use that. Because for that
[1:07:31] specific wavelength, smoke is more transparent because the wavelength is very larger as compared to the size of
[1:07:38] the particles, so it does not really see the haze. For clouds, it becomes more difficult because cloud does respond to longer
[1:07:48] spectral bandwidth. And it can become a challenge. But then you use other tools like temperature to identify those
[1:07:56] features. Is it possible to get glint-free images if you want? On research basis, yes, but we don't
[1:08:12] have any tools or data sets which can readily make those available. Okay, there is the question, can we
[1:08:34] import the data from WorldView into ArcGIS? ArcGIS? Again, I would say you have to download the data in either GeoTIFF format, which
[1:08:44] can be read in the ArcGIS. There's no direct import options from WorldView to ArcGIS.
