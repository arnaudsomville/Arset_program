# Introduction to Datasets, Part 1/3

`https://www.youtube.com/watch?v=wIXFw9W1M4E` · id 154 · 1:31:47 · module 25 — Introduction to Satellite Remote Sensing for Air Quality Applications

[00:07] Okay, hello everyone. I think it's time to start now. This is advanced webinar on data analysis tool for high resolution air
[00:16] quality data sets. This is a three session webinar series. In And if you can see my slide, you will
[00:28] see that there are session one which is today where we'll introduce some of this air quality data
[00:34] sets. We'll also talk and go through a website website website to download the aerosol data which we will use in session two using
[00:43] the Python script to read, extract, and map those data. In the session three, we'll use similar Python tools to read and extract map
[00:55] data from only sensors which is provides provides data on NO2 and SO2 for various air quality application. And
[01:05] in session three, we will also go over some of the new recently launched and upcoming air quality satellite missions.
[01:16] I will briefly want to show the website where we have the website for this webinar series. And
[01:25] if you can see my screen, this is the page where I hope everybody has registered through this page to attend this webinar and it
[01:35] provides you all the details, but it also provides all the instructions to install the Python, some of the pre-rec,
[01:43] and then presentations for today as well as for the next two three sessions. sessions. Both presentation slides and exercise
[01:53] and instructions are available uh English and in Spanish as well. So, please please make sure you check this website for any
[02:04] updates and to download any data sets or to exercise and presentations uh for this webinar series. So, this is your
[02:13] tool tool to go uh resource uh for this webinar series. Now, let's start today's presentations. Today, we're going to do
[02:29] uh introduction to remote sensing of air quality. Uh my name is Pawan Gupta. I'm here at NASA Goddard Space Flight
[02:36] Center. Center. Uh works on air quality and aerosols data uh retrieval from satellite. I have Dr. Melanie
[02:50] Cook, air quality. She's using uh trace gases and as well as aerosols plus modeling of uh uh air quality.
[03:00] We also have a Brock Wellman and Elizabeth, who is supporting uh in various uh technical writing part and the
[03:10] coordinating the entire training program. So, please uh feel free to ask question if you have from anyone of us
[03:17] in the question answers window, which is provided through this webinar series. uh webinar uh and then some of the question we'll
[03:30] take uh after we finish the presentations presentations uh one by one. So, with that introduction introduction uh
[03:40] uh the learning objective for this presentations are uh outline aerosols. Uh we'll provide the outline of aerosols and trace gas
[03:49] product in today's and then we'll also identify some of the potential applications in air quality monitoring where you can actually use some of these
[03:59] tools which we will showing week two and week three. Not exactly the same analysis but at least you will be able to modify those
[04:09] Python script to perform those type of analysis. And then definitely we'll describe some of these tools to read those data sets and we'll
[04:19] download some of those results into this presentation as well. So to start with traditionally air quality monitoring is
[04:28] performed using this ground measurements and these ground measurements instruments includes all type of methods starting with collecting the air
[04:39] particles on the filters making the measurement in the lab and then there are other instrument which makes optical
[04:46] measurements where they either send laser slide or they are based on the how these particles reflect or scattered
[04:58] incoming solar radiation. Apart from the ground measurements, there are two other component in modern days of air quality monitoring and
[05:07] management program plays very important roles. One are models. Models are important if you want to predict the air
[05:14] quality for tomorrow or for in five days in advance, you will need models. You cannot do just along with the ground
[05:20] measurements. measurements. And in recent time, observations from aircraft and satellites have really complemented these two tools ground
[05:29] measurements model to either fill the gaps or to advance or to provide a priori information to model for weather forecast for better
[05:39] forecasting of air quality. Satellite Satellite is the one of the component of this really huge air quality management
[05:48] program and we are going to focus this webinar series on some of the data sets available from the satellite sensor
[05:55] which you can use to perform your own air quality analysis. So, why do we want to use the satellite
[06:02] data? What you get from the satellite is a a measurement of radiance a spectral radiance. Again, I want to
[06:13] stop here and want to make sure that everybody have So, if you have not taken, please do
[06:25] that even after this webinar the session. session. And that will really help you because in this webinar series we are not going to
[06:35] go into details of fundamental of satellite remote sensing, how different things works, but we are going to talk
[06:41] more about the data and their applications. So, we will give some brief introduction in today's webinar session, but it's still
[06:50] in order to benefit at highest level from this webinar series, please please go through those fundamentals if you have not done that.
[07:00] With that, so what you get from the satellite is this true color images. These are spectral radiance measured by
[07:07] the satellite and is specifically in this case this is a MODIS Terra image showing showing part of the world
[07:18] on a given day. And what you see here is different atmospheres, land, and ocean features features which are visible in this image. So, the
[07:27] first job of satellite remote when the data is observed by the satellite and it comes to the ground, the first job is to
[07:35] identify these different features in this true color imagery or in this radiance data. And what are those features? They are
[07:45] basically basically Uh you can see the clouds uh very wide uh features. You can see a snow which
[07:52] looks similar as clouds, but if you look more closely, you will see there are structure in this snow uh which is not
[08:00] there in the clouds. So, the textures and uh there are other spectral information like temperature can be used to
[08:07] distinguish between the snow and cloud although although they looks very similar from the eyes. You can also see
[08:13] some brownish stuff which is aerosols over both and land. Uh There are clouds over oceans and over
[08:22] land. They look sometimes different and sometimes very similarly. There are some other features in this image which is
[08:29] like a very bright spot over the ocean on the bottom of this image. It's called glint. It It's appear because of the
[08:37] specular reflection of the sunlight from the very uh from the ocean surface. And then there are black areas which are
[08:46] basically a data gap. Uh and this data gap actually varies by different sensors. So, depending on which
[08:52] satellite sensor you are using, this data gap can be large or small. And also it varies as you can see uh it's the
[09:00] gaps are larger in the tropics. As you move away from the tropics and go at high latitude, uh your
[09:08] gaps will start reducing. So, again it varies uh based on different sensors. Uh there are sensors which does not have any gaps and
[09:17] there are sensors which has more than this gaps. So, pay attention to all this uh small details when you start using
[09:24] the satellite data for any air quality application. application. Once you get those radiance measurements, uh you combine those
[09:30] radiance measurements with physics a priori informations and we have to make a lot of assumptions in order to retrieve a geophysical
[09:40] parameter which is in this case we are going to use the aerosol optical depth as an example which are used for to
[09:48] address certain air quality monitoring aspect. aspect. But this whole process is a I have presented here in very simple terms, but
[09:58] this is called a retrieval algorithm process. So where we take satellite measurements combined with a prior information, radiative transfer
[10:06] calculation, and come up with a retrieval algorithm which produce a final geophysical parameter, temperature, wind speed, water vapor amount in the atmosphere,
[10:16] cloud optical depth. All these are example of geophysical parameter which you can get from the satellite. And we
[10:23] will focus in this presentation on the couple of three different product. One is aerosol optical depth and then the NO2 and SO2
[10:31] to make measurement of to assess the trace gas quantity in the atmosphere. So what is the advantage of using
[10:40] satellite data? Why satellite satellite provide this global view from top from the space which is almost impossible to get from the surface. So
[10:52] what you see here in this map is a seasonal mean aerosol optical depth maps acquired from MODIS Aqua satellite
[11:04] in different season. And what you see here all this uh uh red colors are actually you can identify
[11:14] different aerosols type in different season in different part of the world. So you can see the pollution and dust in
[11:20] the spring coming out from the Asia. You can see the smoke pollution or the smoke coming out from the fires in the South
[11:29] America and Southern Africa and during the fall. you can also see the dust storm coming out of the Africa. You can
[11:37] see haze and pollution even in the northeast in the eastern part of the US specifically during the summer time.
[11:44] And there are biomass burning in the sub-Saharan region which produce huge smoke and combination of dust and smoke in that region. So,
[11:53] this view of uh global view of aerosol optical depth is really impossible to get it from the
[12:01] surface surface and that's what we get from the space. space. So, one questions arise very frequently is how
[12:12] how do we know what satellite is provide what satellite providing aerosol optical depth is accurate or not accurate or how
[12:20] much error it it has. So, in order to do that, NASA has this very dense network of uh
[12:28] sun photometer. It's called AERONET and there are about 400 plus AERONET making continuous observations of same quantity called
[12:38] aerosol optical depth from all around the world every 10 to 15 minute in various different channels which are
[12:45] also available in the satellite. So, this is the tool to check the accuracies, to improve the algorithm,
[12:54] and to validate the satellite products. So, this is very very important to keep in mind that this AERONET measurements provides you
[13:03] aerosol optical depth measurement which are fundamental quantity and considered as ground truth to validate the satellite observations. So, satellite we
[13:13] just don't retrieve or make measurement with satellite, we continuously validate them using this huge network which is an essential part of satellite
[13:22] remote sensing of air quality and other applications. So, how does the validation looks if you This is just an example and I'm giving
[13:33] you this example because you can actually do some of these analysis using the codes or the Python script which
[13:39] we'll do in week two and week three at your own location find your own location nearest to you
[13:45] AERONET location and you can do actually similar analysis. So, on this this is just showing a comparison of AERONET and
[13:51] MODIS globally and you can see the biases about close to to zero with correlation coefficients is very high.
[13:58] Of course, there is a scattered and that's what we know know that's why we are continuously working
[14:04] to improve to make that a scattered close to one-to-one line. Okay, with that uh I would like to stop here for a minute
[14:14] and then we'll go over a couple of questions here just to see where we stand. Uh so
[14:23] and these questions may not be necessarily covered in this presentation so far, but they might be they might you might
[14:32] you may need need to have that kind of knowledge knowledge to understand and to go through the week
[14:37] two and week three so that uh So, let me ask you this first question which is related to your
[14:47] coding experience. So, do you have any experience in computer coding in any language? Uh And you have
[14:56] 20 seconds to respond to it. Okay, so this is also good. People who have there are still 13% people who said
[15:37] they have not completed or they don't have any experience. Please, please do go over the website which I showed in the
[15:45] beginning. There are is linked to a 1-hour session on fundamental satellite remote sensing. Please go over that
[15:53] session. It will help you a lot in understanding the session two and three specifically when we start looking into
[15:59] the data. It is really, really important to understand the data sets before you start using because there are a lot of
[16:05] if and buts and there are a lot of things which needs to be understood before you start using satellite data
[16:12] for any application. Okay, so let's move on to the presentation. Uh now, what I'm going to go over is
[16:22] some of the examples of the application which you will be able to perform using the codes which we are going to run in
[16:30] week two and three. Not necessarily exactly in the same format, but those codes will provide you a guidance to
[16:37] perform this kind of analysis. You will You will require to do some modification on those codes to
[16:46] exactly do this task, but they will help you. you. Okay, so the first thing is we like to get this. When you talk about
[16:55] the pollution, the particulate matter PM2.5 is one of the key uh air pollutant which is causing a lot of health impact all
[17:04] around the world and people would like to see how we can use satellite data to estimate that surface level PM2.5. And
[17:12] this movie actually is just showing an example of how this satellite derived aerosol optical depth, which is shown as the maps, color coded
[17:24] maps as a contour, and then you have this this vertical walls coming out from the ground, which are showing the ground
[17:32] measurements of PM2.5, and you can see that when the aerosol optical depth values are high, you still see high
[17:39] values of PM2.5 from the measurement at the ground. So, this gives you some signal that these two quantities might
[17:46] be different, but they have some kind of relationship. And that's what we want to understand and want to extract from the
[17:53] satellite data. So, in order to look that, let me give you a very brief explanation of these two quantity and
[18:02] how they are similar and different. Both make measurements of aerosol particles in the atmospheres. Aerosol optical depth represent the entire column of the
[18:11] atmosphere from the surface to the satellite height or top of the atmosphere. atmosphere. Also, the satellite derived aerosol
[18:19] optical depth are averaged over a horizontal special resolution. In case of MODIS, it is 10 km special resolution. They also have a
[18:29] product at 3 km resolutions, and there are high resolution product as well. PM2.5 is measured at the surface,
[18:38] uh and these are usually measured either optical measurements or the samplers, and they represent the concentration of
[18:46] particles in the surface layer only, near the surface. So, this is one difference between column versus surface, optical versus a
[18:57] physical mass quantity. PM2.5 is also a dry mass. It is measured in a controlled condition where the
[19:06] relative humidity is controlled to 35%, whereas the aerosol optical depth represent the ambient conditions. So, the aerosol optical depth can have a
[19:15] different value under different water vapor conditions in the atmosphere. Aerosol optical depth actually represent all size of particle in the atmosphere,
[19:24] whereas PM2.5 restrict to the aerosol particle less than 2.5 micrometer in aerodynamic diameter at the surface level. So, there are differences between
[19:35] these two quantities. And so, how how we can actually extract PM2.5 or estimate PM2.5 from the AOD?
[19:47] These are some of the models from early days. days. In early 2000s, people started realizing that we can actually use this aerosol
[19:55] optical depth Excuse me. to extract either PM10 or PM2.5. And these The first thing people started doing is plotting the two parameters on
[20:08] a scatter plot. And what you see here is aerosol optical depth plotted against PM10 in exercise in Italy over AERONET
[20:15] site. site. And that shows a high degree of correlation of point eight. And that gives some indication that yes, aerosol
[20:23] optical depth contained information about this PM10. At the same time, there was another study published in US which
[20:31] used PM2.5 instead of PM10. And they they did the similar correlation analysis and found the correlation of point seven with
[20:41] scattered in the two data sets. But, this early example shows that if you have aerosol optical depth data, then
[20:50] with certain error margin, you can estimate the PM2.5 using a simple linear regression equation where you have a
[20:58] slope and intercept between these two quantity, which can be used to estimate PM2.5. PM2.5. The other applications people uh this is
[21:08] one of the early studies where we have looked the impact of fire on local air quality and what you see on the left
[21:15] side is the surface PM2.5 measured in Sydney, Australia over several stations and the aerosol optical depth on the
[21:23] right side from satellite. And it's very simple visualization that showing that the two quantity, although they are
[21:30] there are differences as we discussed earlier. earlier. Uh are able to track the impact of a smoke coming out of those fires
[21:39] over different locations. Both shows high values during the fires and low values before and after fires in those
[21:47] regions. So, again, this is another indication that AOD from the satellite does contain information on the PM2.5
[21:55] and can be used as surrogate or approximate to estimate surface level PM2.5. PM2.5. This is another example where you can
[22:04] actually look at the long-term trends in air quality or surface level pollution in regions where you do not
[22:12] have any surface measurements. This is just showing a study from the northeast US showing on the top surface
[22:19] measurement from all the way from 2003 to to 2014 and you can see the ground station shows about 35%
[22:28] reduction in PM2.5 and if you look the same uh same region from the satellite in terms of aerosol optical depth, you
[22:36] get about 30% reduction in aerosol optical depth. So, again, over the longer time period, the two quantity being different, but
[22:45] they're tracking the same loading of the aerosols in that atmosphere and showing the long-term trend approximately in the same numbers. This
[22:54] may not be true at the every single place you look. This is just one example, but you will
[22:59] be able to perform some of this analysis using some of the tools which we do in week two and three.
[23:05] Another example of long-range transport, dust coming out from Asia or Africa, fire fire smoke transporting either this is just
[23:16] example the smoke coming out from the fires in Australia transporting all around the world in 10 to 11 days and
[23:23] reaching back to the Australia. So, these are some of the example where satellite data really helps. This is very very difficult to do from
[23:33] the ground measurement unless you put the ground ground instrument on the spot entire path of those transport, but you can look this from
[23:42] the space and make a composite image and quantify the impact of those long-range transport in the local air quality and
[23:49] regional air quality. Another very good example of this is the where you can use these tools and data
[23:57] is to compare with the models. How your model is performing against what satellite is making measurement. There
[24:04] will be differences. There will be which will help you to understand the the performance of the model and
[24:11] sometime you can actually include the satellite data in the model through the data simulation to improve the accuracy
[24:18] of the model. And again, these type of maps you will be able to do using Python script which we will provide in
[24:26] week two and three. Uh This is another example where satellite data are used to oil to to actually study oil and natural gas
[24:38] activities and their impact on the loading of NO2 in this case. So, these are the two example from North Dakota on the top
[24:47] where the if you see on the right, there's a night lights images from view satellite where you can see that there's a lot of lights
[24:55] shown in the circles. and if you go there, there will not too many lights, but what is VIRS is looking is flames
[25:04] coming out from this oil and natural gas activity. Similar example can be seen seen in the Texas and all other parts of
[25:12] the world. This kind of uh activities have been observed using both NO2 and VIRS night light data.
[25:20] Uh Uh So, here's another example of long-term trend analysis of NO2 over the United States. So, this map shows a animation
[25:32] from 2005 to 2012. Uh the high values are for 2005, and as you go as towards 2012 and 2014, you
[25:42] will start seeing those low uh NO NO2 has been reduced. Some of the studies have actually demonstrated that
[25:50] the NO2 in this part of the world has gone 50 to 70% during that time period. So, this is a really remarkable
[25:58] uh demonstration of the use of satellite data data uh for real-time real-life air quality application. application. Uh
[26:07] Uh again, as I mentioned earlier, the validation of satellite data is really really a critical part uh in satellite
[26:14] remote sensing and applications. So, here this study has shown that what satellite make measurements uh in terms
[26:22] from this again O NO2 validation studies over the United States, where NO2 is also measured by the EPA from their air
[26:31] quality ground measurement stations. And when the you compare the two uh and find out the trends over these
[26:38] station, you will see a similar numbers. Uh on the top, you see the satellite-based numbers, and on the
[26:44] bottom, you see surface-based numbers. And you you can see carefully that uh many stations shows very similar trends
[26:52] uh from the two different measurements. Uh Uh And also note down the please the units are different. What satellite
[27:00] is providing is molecules per centimeter square, whereas what AQS is providing is PPV. PPV. And there are ways to convert uh from
[27:08] one to another. Okay. So, there are like I said, these are some of the applications, some of the analysis
[27:17] which you will be able to perform using some of those Python codes. Uh but in week two, we will focus on the
[27:23] MODIS aerosol products. I want to go a little bit on how those aerosol products are derived, and then we'll go through
[27:30] an exercise to download this aerosol product. So, very briefly, optical depth, as you know, is the quantity of
[27:37] light removed from beam of uh by a scattering or absorption by these particles in the atmosphere. And
[27:44] on the left side, you can see that there's incoming solar light which passes through this atmosphere where you
[27:50] have clouds, aerosols, trace gases, water vapors, and all of the component in the atmospheres. And when this light
[27:58] interact with these aerosol particles in cloud-free condition, it either get scattered or absorbed depending on the properties of those aerosols. And then
[28:06] there are sun photometers sitting on the ground, which I showed earlier as AERONET network. There are commercially available sun
[28:13] photometer called Microtops. And then the similar quantity is also measured by the satellite. So, if you look this aerosol optical depth,
[28:24] first these these measurements are made to get the total optical depth of the atmosphere, which is represented in this
[28:30] equation as total optical depth is the Rayleigh optical depth, which is air molecules, NO2, uh the nitrogen and
[28:39] oxygens, and other trace gases in the atmospheres, which we can calculate theoretically very accurately based on the uh air pressure in the atmosphere
[28:48] and and different composition of those trace those gases in the atmospheres. The aerosol optical depth is the one
[28:56] which we are looking for and then the gases absorption. So, this is gas absorption optical depth is basically
[29:03] ammonia, water vapor, CO and all other gases which specifically specifically absorbs or light in those particular spectral
[29:14] channel in which we are going to make this aerosol optical or optical depth is an unitless quantity. It is represented
[29:21] by by always or on a specific wavelength. So, it it can the value of optical depth can
[29:28] change depending on which wavelength you are making measurement. The most common wavelength in which optical depth is
[29:35] reported is 550 which is a green band in solar spectrum. And that's what we are going to use.
[29:44] This is a uh sensor which I have been talking earlier. earlier. It It or MODIS MODIS moderate resolution which
[29:52] is spectral spectroradiometer. spectroradiometer. Uh the data sets from this MODIS sensor available from starting from the 2000.
[29:59] There are two MODIS sensors in orbit. One takes measurements in the morning, one in the afternoon. And if you have
[30:06] gone through those fundamental, you will see more information on that. The special resolution of this sensor is
[30:12] start from 250 m all the way to 1 km depending on which wavelength you are looking. There are 36 different
[30:18] wavelength in which the measurements are provided. So, aerosol detection. The aerosol optical depth retrieval is start with
[30:28] aerosol detection in the image. This is a very simple image where you can see different four different broad classes
[30:37] of features in this image. You can see land, you can see clear water, you can see some a coming out of the fire and
[30:44] there are some clouds. So, this is really very selected clean image where you can see distance features. And this
[30:52] is ideal for aerosol retrieval cuz you really do not have to do much in this and aerosols can easily detected and
[31:00] retrieved. retrieved. But, this is not often the case. Often we encounter things like this where aerosols are mixed with cloud.
[31:09] They're above the cloud, they're below the cloud. It's very, very becomes very hard to actually separate signal from aerosols and cloud. And
[31:19] that's where we have to rely on this spectral information. That is why MODIS make measurement in so many spectral
[31:26] channels so that we can actually use information in different channels to separate this different atmospheric and land and ocean features in the image
[31:37] to extract the information which we're looking for. In this case, aerosol optical depth. So, once you have this radiance
[31:45] measurement, it we convert that in aerosol product which aerosol optical depth and in in this example you're just
[31:52] seeing an example of this fires, the smoke coming out of this fires and the black area on the right shows shows
[32:00] that the satellite retrieval algorithm is not providing aerosol optical depth due to other reasons like either it's
[32:07] clouds, like it's too bright or the algorithm actually failed to separate aerosols from the cloud and that you can
[32:16] see actually as a gap in the thick plume of a smoke just near the source of the fires.
[32:25] So, again, these are all the details which we talked in the fundamental course course and and I hope you have gone through those so
[32:34] you will understand that much better. We will talk a little bit more about these things in week two when we start using
[32:41] the programs. If you are more interested in learning about retrieval algorithm, there's a paper by Remer et al. 2005. It's a
[32:48] really nicely written paper, explain very well how aerosol remote sensing works. And then this is a complicated
[32:56] chart which I have given you for a reference. Um which actually explains essentially entire algorithm uh starting
[33:04] from the aerosol detections to the aerosol optical depth. So, it's a complex algorithm. Uh if you are interested, please go
[33:12] through this paper which I have listed here. here. In case of MODIS, there are two different algorithm. One is called
[33:20] dark target which works both over land and ocean. But it as the name suggest, it only works over dark vegetated areas.
[33:28] The deep blue algorithm is relatively new algorithm. It works over bright surfaces. In recent uh data sets
[33:35] released, deep blue also works over other vegetated areas. So, now you have it two options to get the product. And
[33:43] when we talk in next week, we'll talk talk about the uh uh specific data parameter which you can
[33:50] actually extract to either to select dark target or deep blue or the combined product. product. The latest release of the data sets
[33:59] comes in called collection 6.1. Uh and there is a joint product which combine both dark target and deep blue
[34:07] uh in that release of the data. This is just an example showing the coverage of uh three different uh
[34:16] product which we will look into week two. Uh on the top, you see an RGB where you can see a lot of clouds, land,
[34:24] aerosol features. And when you start using those uh radiance measured in that RGB to go through this algorithm, the dark target
[34:33] algorithm produce this map which is on the extreme left and you can see a lot of white space areas which is either not
[34:41] retrieved retrieved due to the high surface reflectivity or the cloud detection. Deep blue, you will see there's much more covered area
[34:49] because it actually can retrieve aerosols in bright areas so that way therefore western US and mid US is considered as
[34:59] more bright surface so you will see more coverage from the deep blue. And there is a combined product called which is in
[35:07] between from dark target and deep blue in terms of the coverage and that actually we'll talk about that specific
[35:14] parameter in week two why the coverage is actually lower than the deep blue because because they only pick the highest quality of
[35:22] the data. There are other product which are at higher resolution so initially the product was developed at
[35:30] 10 km but over the time MODIS has a 3 km product and the advantage of 3 km product is that you
[35:39] can see some small scale feature which is very difficult to see in the 10 km product. And to make things more
[35:47] interesting there is a 1 km product which is in process right now. It will release soon. soon. It's called MAIAK and this example
[35:58] actually is just demonstrate the power of high resolution data set. So on the RGB it's very hard but if you can see
[36:07] on the east coast of US there are smoke plumes from the small small fires. And if you look the 10 km AOD product you
[36:15] really don't see those signals in that image. Everything looks very smooth homogeneous special features. 3 km product is start showing some high
[36:27] signal in the some of those smoke plume but it's still very difficult to see them. But if you look the 1 km
[36:35] product and you look a little bit more in-depth, then you can see some reds and greens dots and those are basically
[36:42] smoke coming out of those from a small fires. So this is really if you have this high resolution product, it really
[36:50] helps you to identify the small sources on the ground which cannot be detected in the 10 km or
[36:58] 3 km product. This is a reference table just to show apart from MODIS, there are other sensors which provide aerosol product.
[37:08] Each sensors have their own limitations, advantages and this tables provides all those details. There are high resolution
[37:15] product up to 70 750 m resolution from the VIIRS which can be used for air quality applications.
[37:24] Okay, the next one is the OMI. Now, OMI provides trace gas measurements along with aerosols products and it was again
[37:35] launched in early 2004. It operates in UV part of solar spectrum. The wavelengths start from 270 to 500 nm. It's a hyperspectral
[37:47] instrument so that you can actually look the fine absorption line by different trace gases in the atmosphere
[37:54] and that allow us to actually quantify the amount of NO2, SO2, ozone, and formaldehyde, and methane, and other
[38:03] trace gases. The special resolution is coarse compared to MODIS. It's 13 by 24 sq km and it does provide a daily global
[38:12] coverage. coverage. This is just showing how the data of OMI sensors comes into they are about 14
[38:22] to 15 granules or orbits per day. Each granule provide complete one orbit from the satellite. You can see an example on the right
[38:34] showing showing it's about it takes about 90 minutes for the satellite to cover that entire orbit. And you can see on the pole
[38:42] there's a lot more coverage as compared to the tropics and other other regions of the world. So, there
[38:49] are 14 to 15 such orbits every single day which cover entire globe. OMI has suffered something called a row anomaly. It's in
[38:59] a defect on the it it it's it's it's a mechanical problem with the instrument which started sometime in early 2008.
[39:09] Uh where actually because of that you lose about 50% of the data. So, if you look this on the left side, this is 2006
[39:18] image and on the right side is 2010 image just one day showing the loss of coverage due to this row
[39:26] anomaly. And remember this loss is will be in coverage will be different in different latitude of the
[39:34] globe. So, at high latitude the loss will be lower at tropics where already the coverage is limited, you will see
[39:41] much more loss in the data. So, this is very important aspect to remember when you start using OMI data that it does
[39:49] lose lose it has lost some of the data due to this row anomaly effect. This is a this is these are the two
[39:58] quantities which we are going to use in week three, NO2 and SO2 to look into the data. SO2s are provided in Dobson unit.
[40:06] NO2s are provided in molecules per centimeter square. You can convert from one to another. And these are
[40:13] we we'll talk about that more in week three actually when you start using the data. data. Some of the references uh related to
[40:20] this this uh uh air quality page on the website. There's another NASA NASA air quality page where you will see
[40:29] a lot of NO2 data from cities and from different parts of the world. MODIS atmospheric site provide a lot of
[40:36] information on MODIS aerosol product and all other atmospheric product and then the OMI data can be obtained through
[40:42] this website. Okay, so let me have a quick break here of a minute and then we'll I pop up
[40:53] couple of poll questions here and then we will go through some of the preparation for week two and we'll
[41:00] download some of the some of the data. Okay, so I'm going to show some polls here here and then for each question you will get
[41:12] 30 seconds to respond and then we'll go over some of the details which you will require for week
[41:18] two two and download some data which we will use in week two. So, the first question is have you ever
[41:28] used any data sets from either MODIS or OMI? Okay, so we have about 80% responded and the answer is just pretty good. 60%
[41:59] people have used, so that is a good sign that you will get some more added tools to play with these two data sets.
[42:07] People who have not used the data uh uh you will get some head start on how to
[42:13] use this data sets for your applications and research. Okay, another questions. And this is question on just what I
[42:24] presented, so aerosol optical depth AOD or AOT represents loading of aerosol particles in the atmospheric layer close to the
[42:36] surface. surface. Answer true or false, it should be or yes or no. Okay, so we have 76% people responded.
[43:00] And things are divided here. And that shows me that you have not gone through the fundamental of remote sensing.
[43:08] Please do that because this is really really really important. If you want to use the satellite data, it is very
[43:13] important to understand what that quantity means. If you don't understand, then it will you will end up in using it wrong way
[43:20] and that's not good. So, please do go through the fundamental. It's I have also explained this actually
[43:27] during this presentations. So, please go over the recording when it is posted. Or try to read some of those reference
[43:35] material. Aerosol optical depth is an optical quantity. It's a unitless quantity represented on a specific wavelength. wavelength. And it represent the entire column of
[43:46] the atmosphere from the surface to the top of the atmosphere. It does not represent only near the
[43:53] surface. Whereas PM2.5 is measured at the surface and represent mass concentration for particular size range of particles in
[44:05] the atmosphere. So, this is really really important if you want to start using the satellite data to understand this application.
[44:14] Okay. Okay. Next one. Which is very simple. And this is just I want to get a feeling
[44:24] of of whether you are interested in air quality application over land or ocean. Okay. So, only 4% people are interested over
[44:49] ocean. ocean. May I know there are certain agencies which likes to monitor air quality over ocean for various regions. And this is
[44:58] what I expected. Most people are interested about land. So, no surprise. Okay, let's go back to our presentation.
[45:06] And uh there are few things and I think a lot of people also have questions on that. I
[45:12] want to just go through those very quickly here and then we'll go through the data download exercise.
[45:18] So, please make sure we are going to use Python 2.7 using Anaconda, which is an packaged to install Python either on
[45:28] your any operating system computer. It can do on a Mac, Linux, or Windows. In week two, to give you a flavor of different
[45:36] operating system in week two, we'll present everything from a Mac based Apple based computer. And whereas in
[45:45] week three, we'll present actually from Windows based computer. So, you get a feeling. I'm sure there are uh
[45:55] Okay. So, the session two will be Mac based. Session three, which is on Monday, Monday, uh will be a Windows based tool so that
[46:04] we can actually I'm sure there are mix of users who use either Mac or Windows or Linux.
[46:13] Linux users will have very similar configuration as Mac. So they they are already covered. So this package
[46:23] we have a package list to be installed along with the Python. Some of that comes with Anaconda by default,
[46:32] but it is always good to check it. Some of the these you will have to install. For
[46:38] example, PyHDF, H5Py, H5Py, and the Matplotlib and few of these you need to install them. Okay, so on our website we have a we
[46:52] have prepared a test code. If your installation have all the modules which is required for this code and if you run
[47:01] this test Python then it should run without any error and it will produce an image. So if you have gone
[47:08] through that step it means you're all set for week two and week three. If you are getting any error in that test code
[47:15] or it is complaining that the certain package is not installed on your please try to search online for resources.
[47:26] Sometime PyHDF can be difficult to install depending on what you're following. following. So please spend some time, look around. There are
[47:37] solution online. And if you have if you have all the permissions permissions administrative permission on your computer then it should not be difficult
[47:47] to install it. For week two we have also provided MODIS data and the Python code. There are five
[47:56] different different Python scripts which we will go over in week two which are provided as one single package and that can be actually
[48:04] downloaded from from the training page. And if you are really interested to learn a little bit more, we have some
[48:14] additional codes and documentation read me me again on our asset website which the link has given on the bottom. Please go
[48:23] over that link as well. Uh uh This is the test code. Uh it it basically loads or imports all the package which we
[48:34] required. Uh and in this specific code, we are actually reading one MODIS granule file which is also provided as
[48:43] part of that package. And if you run that code, then you will be seeing image like this on the right side as shown as
[48:51] the output. So, please uh go through that uh steps uh before we start next session on Friday where we'll
[49:01] actually go through some of those codes to read and map the data. This is an essential part.
[49:11] To do to go through the next uh next session, we will use MODIS 10 km and 3 km aerosol parameters in order to
[49:23] get the data. Uh we are going to use the lads web Earthdata login. Uh as have been instructed, you must register with
[49:32] Earthdata. It required login and password to download the data. If you have not done so, please check your
[49:39] emails. Uh we have provided details information. And if you are if you don't have there is a exercise. Uh there is a
[49:47] PPT here which shows a step by step how to to actually download this data from the last web including the earth data login
[49:57] and we'll go over that here in a minute. These are the data sets cases studies which we have suggest
[50:08] how to use exactly the same thing. We will be using these two demonstrate some of the code capabilities, but feel free
[50:16] to select other dates other case uh time frame or other part of the region to download your own data sets.
[50:27] So, these are just suggestion and this is what we are going to um through if you just want to run through
[50:34] and understand the outputs of the data. I would be strongly recommend you stick with these going to show from our side and that
[50:45] will confirm that your code is running properly and you're getting similar results. results. Okay, so let's go over some of the data
[50:54] download exercise which we are talking about. about. Uh we don't have a lot of time, so I'm
[50:59] going to go over it quickly on that. If you have not uh if you have trouble, there's a
[51:07] exercise slide on our web page. It's called exercise both in Spanish and English. Uh it has a step-by-step
[51:15] instruction on how to download. So, the first thing I will just go on the Google and type let's
[51:24] web NASA. That should give me the first link which will take me to this website. And if you
[51:35] have not registered with the earth take this application uh which was instructed in your PPT presentation. So, please do that.
[51:50] Once you are on this website, click on the find data. When you click on the find data, you see
[52:00] this page where you have a product time location files, reviewers on the top and on the left there are other options
[52:08] which you can explore in your own time. We are not going to go through those, but if you have questions on those, we
[52:15] will be able to answer after this session. So, the first thing is you select a sensor. In order to select, click on the select
[52:24] a sensor on the left side of the menu and then you will select Modis Aqua. Once you select the sensor, it will
[52:33] start showing a lot of parameters, lot of product names on the left side. All the the There are 57 different product on the
[52:41] right side as the product name. We need aerosols. So, you click on aerosols so that it will
[52:47] the list is shorted now. Now, we have only MYD04, which is 3 km product and MYD04_A2, which is a 10 km
[52:58] product. So, you click on those two on the right side and it will start showing up in your product collection on the
[53:05] left side here. Once you did that, you click either on the arrow on the extreme right or you click
[53:20] Step is to select the date range or a specific date for which you want to download the data.
[53:26] And there are various options here. I'll just use the default and I want the data from from 2017
[53:36] 2017 October October 8 8 to 2017 October October 9. I want the data for these two dates.
[53:49] And I can say add that date. Once you add the date, you will see on the right
[53:56] side date selection. If you have different sets of date, different dates, you can do multiple times here, and then
[54:03] it will show up as date selection. It can search all the dates in one shot, so you don't have to do For this exercise,
[54:11] we'll just stick with these two days dates. dates. And then again, go to the right most arrow and click on that arrow.
[54:20] Now, it will bring you to the select the location where you want to download the data. So, you There are many different
[54:27] options to select the location. You can select by countries. You can select by tiles. There are validation sites.
[54:36] Validation sites are those AERONET sites, so you can download the data on a specific validation site as well.
[54:43] You can draw the box. So, or you can enter the coordinate manually here in this box in different
[54:51] formats as prescribed here. We will use the draw the box features to do that. First, First, you can draw a box on any site. In order
[55:03] to actually select the area, first I will move the map around and then zoom it little bit, so that I can select the
[55:11] area. I can see the area where I want to get my data more. So, I want the data over Bay Area in
[55:23] California in US, so I will draw Now, I will click on the draw custom box, and then I will draw a bigger box here over
[55:32] California. Once you draw that box, it's automatically saves those lat long boundaries, which actually you can see the current
[55:45] selection on the right side. Select area interested. interested. Now again, go to right most and click that A
[55:53] arrow. Once you click that, it will show the results results from those search. So, it shows eight
[56:06] different files. Four files are Modis Aqua 10 km product. All underscore L2 is 10 km product. And underscore 3K is 3 km
[56:18] product. So, there are eight different files on those two days, which were actually actually uh falling on that region on those two
[56:27] days. days. If you want, you can see a vertical column says image. And if you click on that image, you will
[56:37] notice those image option is only available for 10 km product. It's not available for 3 km product. And you can
[56:45] click on those image, and what you will see is the aerosol optical depth map for that particular granule which you have
[56:54] selected. It's color coded with the scale from zero to one. So, this is from the October 8th. And we will make
[57:02] exactly the same map using the Python script. script. You can actually select different file on the right side, and your map will
[57:11] change. change. And this is October 9th, when the fire was started, and you can see very high
[57:20] value of aerosol optical depth shown as a red color in this map. These are the maps which we will actually draw in week
[57:27] two. two. Okay, so once you have done played with this, it also if you go on the bottom,
[57:35] it also shows a map. And that map actually actually shows if you click on different granules, different file,
[57:42] the box on the map moves and that is showing showing the locations on the global map where
[57:49] this data is taken. Uh you can actually save these images PNG also if you want to compare with
[57:55] your Python code. Uh if not, that is fine. Once you go you can actually go back and go to the
[58:03] files here. Click on the right side, there is a button called files. You will get back to your original.
[58:11] Now, the next one is you have to select. You can either select individual files and download directly from here like if
[58:19] I click on this file and say download. There is a button called download on the extreme right. If I click on that, it
[58:29] will start downloading on my computer like this. Uh sometimes it might ask for the directory depending on what setting you
[58:37] have on your computer. You can also select all and it will select all. Once you select all, you will notice on the top right
[58:47] the number five review and order to be tab activated. If you don't select, select, then that tab is not activated. If you
[58:56] select all, the tab is activated. Once that tab is activated, you can click on that or you can click on that
[59:04] that right side arrow. Once you click on that arrow, it if you have not logged in, it will
[59:12] ask to login or Earthdata login. I was not logged in, so it asked me my password and usernames are already
[59:20] saved. If you have not saved, you can save it or you can enter it manually and I say login.
[59:34] Once I say login and everything is set, it shows the file summaries. There are two product four files for more 3 km
[59:42] four files for 10 km product. Now, there are many different options. Again, I would recommend you to
[59:50] explore these options in your own time, but in since we don't have a lot of time now,
[59:57] we will just say submit order. The green button on the right side in the bottom it says submit button.
[1:00:06] If you click on that, it will send you an email which you have used to register on
[1:00:15] Earthdata with all the instruction on how to download the data. If your data volume is not very large,
[1:00:24] you will get an instant email to download the data. If your data volume is large, it might
[1:00:31] take some processing time. So, for example, in this case due to whatever reason it says it may take 5 minutes, 10 plus days, but
[1:00:41] that's not the case. You usually get in few minutes most often. I can say click here to continue and
[1:00:49] I'll check my email and you'll see an email with all the instruction on how to download the data. If my recommendation,
[1:00:57] if you're only interested in downloading three files, one, two, five, even 10, I would just go to that file list here and
[1:01:05] I start downloading the data. Right now, it doesn't shows because I already it has gone through. I can actually look
[1:01:11] my past order here on the left side window. window. There is There are different buttons here on the left side. One of them says
[1:01:19] past orders, which is the last one in the list. And you can see all my past order. I can click on my this recent
[1:01:27] order. This will show all the details here. here. I can reorder. I can see where those files are.
[1:01:36] And it will do something which I don't know what it is doing, but it will show you eventually
[1:01:42] images or the files which you have actually selected. If you have trouble in downloading, please go to this
[1:01:51] I said page and we have a exercise which is essentially same step-by-step instructions instructions as I have presented here. So, you can go
[1:02:01] over that and you should be able to download the data. Okay, with that I think I am
[1:02:10] ready to take question answers. Okay, so you can see a document here where all the questions have been posted. So, you can actually
[1:02:40] read the questions and I will pick some of the question and we'll start answering answering as we go through this document. So,
[1:02:48] these are the question which you have posted posted and then here. So, the first question, how can I
[1:02:55] download data? The website has been given there. It's very straightforward. Just go to that website and you can actually download the data
[1:03:05] over individual station. You can download the data all the station together, a specific time period. There are various options.
[1:03:14] And if you look through our I said website, we also have an exercise which we can put a link here later at
[1:03:21] later point. Another question is, can only data be available and used by themselves without satellite data? It looks like nice
[1:03:32] neighbor by itself. Yes. Yes, you can always use that and people do use it for many different applications, not just
[1:03:40] air quality, but climate applications and all other Uh no, it has been used for wide range of
[1:03:46] applications. Do you know if you can apply the same MODIS AOD models, which I believe you mean algorithms, to Landsat 8? Yes,
[1:04:00] there have been some attempt there are some similarities between Landsat 8 and 9 9 uh channels and MODIS channel which we
[1:04:08] use to retrieve aerosol optical depth and there have been some attempt at research level, but there is no
[1:04:17] operational operational aerosol optical depth product from any of the Landsat series of satellite. Uh it is very high resolution, so there are
[1:04:27] uh uh there are issues which needs to be addressed uh and people have done at research level.
[1:04:38] Okay, how do you tell apart the biomass burning burning from haze or dust pollution? So, the question is basically how you
[1:04:48] distinguish between different types of aerosols or different types of particles coming out from different source, either from fires or from industry or dust? How
[1:04:59] do you So, the the strength of satellite data is that in case of MODIS, we have this 36
[1:05:07] different spectral channels. And each type of these particles, uh it's biomass burning particles or haze or dust or sea
[1:05:16] salt or cloud, they response little bit differently to different spectral channels. And once we start looking signal in different spectral channel, we
[1:05:28] can actually up to some extent we can distinguish between these different particles. It is not always possible to
[1:05:36] actually separate them because you can separate biomass burning if there is a huge event and there's no other aerosol
[1:05:43] type present there, then you can separate them very clearly. But in environment where they are mixed together, it's very very hard to do just
[1:05:53] alone from the satellite measurement. There are other advanced techniques like polarizations which can help, but we have very limited observations of those
[1:06:02] things, things, uh, those kind of measurements. But as satellite remote sensing is advancing in time, uh, we will have more more
[1:06:10] capabilities to separate different types of aerosol and identify specific sources. Okay, so the next question is how can
[1:06:23] you solve if your country do not have AOD station? Okay, so this is uh, so there are
[1:06:34] there are multiple options here. Either some countries do have their own aerosol network. Uh, for example, India has
[1:06:42] their own aerosol network, China has their own aerosol network. There are some other agencies other than NASA have
[1:06:50] their own network which uh, which does cover multiple countries. So first option is to again go in on internet,
[1:06:59] search for any other network which might have a station in your country. If you don't have anything, go to the
[1:07:06] AERONET website. And if you are interested, there are contact information. Try to contact to them and ask them and
[1:07:15] they might be able to interested in putting one station in your country if you you satisfy their conditions.
[1:07:26] Okay, another question. Why most studies are limited to PM2.5 AOD relationship? Why not PM10 AOD? That's very good
[1:07:35] question. So, in recent uh last two, three decades, uh most health studies have actually focused that the PM2.5, which is a
[1:07:48] smaller range of size particles in the atmospheres, they are mostly come from anthropogenic activities, are more harmful to human health than the PM2.5
[1:07:59] PM10, which was traditionally measured. PM10s are coarse particles. They are difficult to go inside, penetrate your body. PM2.5
[1:08:08] are smaller particles. They can easily go through your uh through in different part of your body and they're more harmful to the
[1:08:15] health. health. Uh Uh PM10 are also usually generated through more natural processes like dust storm, sea salt,
[1:08:26] uh another activities, whereas PM2.5 is more anthropogenic uh particles. They can also be toxic in natures. So,
[1:08:37] mostly because of their more severe health impact, PM2.5 are uh uh more people have explored that more
[1:08:46] often, but it's not true that PM10 has been not explored in terms of in getting it from the aerosol
[1:08:53] optical depth. There have been a lot of studies uh specifically in China, some of the European countries, India, where PM2.5
[1:09:01] measurements are not available, people have looked PM 10 to extract from the AOD. Which website will be used to download
[1:09:13] the only data that is given, I think, in the presentation. We will talk that more in week two also. Uh, it's Earth data
[1:09:21] this this which will be used to get the only data. Uh, and we will actually go over that in
[1:09:29] week two little bit to prepare for the week three. I have problem in acquiring AOD data because the
[1:09:41] study area is cloudy. This study area is located Bogota in the country of Colombia. Colombia. Yes, so there are certain regions all
[1:09:50] around the world where the cloud is persistent throughout the years and it might be difficult to pick actually
[1:09:57] cloud-free regions. So, uh, uh, one one option is you go through some of those online tools like WorldView, which
[1:10:08] can help you to identify clear clear areas and days in over certain locations and then you pick that
[1:10:18] dates to download the data. Uh, other options, uh, I have no idea what other option you can do. If there is a cloud on that
[1:10:28] location persistently, there is no option you can actually study aerosols as far as from the passive sensor. There
[1:10:37] are active sensors like CALIPSO, which can penetrate some of the cloud and can provide some aerosol information, but
[1:10:44] it's very very limited coverage. Okay, so next question is on Python. Is it possible to use 3.6 instead of 2.7 in
[1:11:03] this webinar series? The short answer is yes, you can use uh our codes have been primarily tested in
[1:11:12] 2.7. Some of them have been tested in 3.6, but we cannot debug during the webinar if you are having trouble. Uh we
[1:11:22] have tested them in 2.7 and we know that it works. Uh but but I believe with very little modification,
[1:11:31] they should be able to work in 3.6 as well. well. Uh but we will most likely in week week three, uh we will try to
[1:11:40] show 3.6 uh version so that you get an idea of what changes needs to make in order to run uh
[1:11:49] from 2.7 to 2. There are very minor changes which needs to be made actually, otherwise the code should work.
[1:12:21] Okay. Yes, so uh uh some people are having trouble in installing some of the packages which are listed like calendar, system, and
[1:12:32] some of these. Most of these packages usually come as default when you install the Python using Anaconda. And if you are running
[1:12:42] the test code, and if your code is working, coming out without any error or complaining anything, it means those packages are
[1:12:50] already installed, and there are ways actually to check uh if you just type in your Python the name of package, import
[1:12:58] that package, and if it comes up with no error, it means that package is available. You can also list package.
[1:13:05] So, don't worry too much about those if your test code is running, you're good to go. Okay. Uh next question number 10. Is it
[1:13:20] possible to combine the data from ground monitoring station with the satellite information? Short answer is yes, and we
[1:13:26] will go through an exercise in week two, where we'll do the exactly the same thing. thing. Can MODIS product be accessed by some
[1:13:35] web service such as WMS or WFS services? So, So, yes, you can access the MODIS uh data
[1:13:45] using various web services. Uh if you are more interested on that, uh please shoot us an email, and we will be able
[1:13:53] to provide you more details on that. Uh you can also just uh search online, and you will find actually there are various
[1:14:00] web services through which you can access WMS and others uh through which you can access the data, and you can import on
[1:14:09] your own website, you can display it on your website, or other applic- or you can integrate with other online
[1:14:15] applications. Uh Uh Okay, so there is a question, are we going to go over how we can export this data into GeoTIFF
[1:14:32] and GIS applications? Uh not in this webinar series. We are not going to go over that specific
[1:14:39] aspect. aspect. But, if you go through the LANCE web exercise, which we just gone through, and at the end of the data ordering,
[1:14:50] there is option called post processing of the data. And if you go through that post processing, there
[1:14:57] is a option to convert the HDF file into GeoTIFF, which you can export or import in your GIS software. So, there is
[1:15:06] already an option available online to do that task. Uh and it's under post processing when you order the data
[1:15:15] through the LANCEWEB website. But in this webinar series, we will not go over any Python script to handle the GeoTIFF.
[1:15:30] Okay, another question. Can we get SO2 PM2.5 for each day? If there are missing data for some days, do we need to use
[1:15:39] some interpolation technique to fill the gaps? gaps? Yeah, this is uh very This really depends on what's your
[1:15:47] application. Yes, you will see data gaps either due to clouds, due to algorithm retrievals problems, or due to the
[1:15:54] instrument itself has some uh raw anomalies like I was showing in case of OMI, you will see some data gaps. Now,
[1:16:03] there are various ways to fill some of the gaps. There are some statistical technique, interpolation technique, you
[1:16:08] can use that, but it really depends on your application. What is your application and how you want to use the
[1:16:14] data. data. So, I will not further comment on that because that's really very application-specific question. Okay. If you post process our HDF, which SDS
[1:16:35] will be appropriate for PM10? Uh Uh Uh we will actually talk about that in week two when we start looking into the
[1:16:43] actual data. And at that point we will describe or actually talk about various SDS within the HDF files. So, I I would
[1:16:55] say please hold on until week two on the post-processing part. What are the biggest source of errors in accurately quantifying PM 2.5
[1:17:10] from the satellite data? Okay, this is a interesting question and it really depends on many many different
[1:17:18] parameters. parameters. Uh some of them are related to the retrieval accuracies of aerosol optical depth itself. Some of them are related
[1:17:28] to the composition of PM 2.5 PM 2.5 particles in different part of the world. Some of them
[1:17:36] are related to the vertical distributions of aerosols or PM 2.5 in the atmosphere itself. So, it depends on where you are and what
[1:17:46] time frame you are, uh what kind of aerosols you're dealing with, uh those parameters will vary. But some of the
[1:17:54] And it goes back to the fundamental definition of these two particle these two quantities. PM 2.5 is a mass
[1:18:01] concentrations concentrations of particles which are smaller than 2.5 micrometer in aerodynamic diameters. Aerosol optical depth, on the other hand, represent all
[1:18:12] size of particle. So, if you are in place and time where where other size particles or larger size
[1:18:22] particles are dominating, then you will have large error in your PM 2.5 estimation from aerosol optical depth.
[1:18:29] Cuz most signal will come from the large particles and you will have difficulty. If you are in place and time where there
[1:18:36] are multiple layers of aerosols in the atmospheres. So, you have a surface layer and then there are layers of
[1:18:44] aerosols in 1 km and 3 km and 5 km either due to the long-range transport or specific aerosol event,
[1:18:53] the aerosol optical depth will signal will be contributed from all of those layer where SPM 2.5 will be just
[1:19:02] representing the surface. So, you will have large error in those case as well. If you have uh aerosols um
[1:19:12] really very close to the uh usually it happens in winter time very close to the surface. Most of the aerosols are
[1:19:19] accumulated in the lower lower regions of the atmos lower layer of the atmosphere 100 m or so, usually it
[1:19:27] happens during the early mornings of winters in many parts of the world. During that time, satellite will have
[1:19:33] very less sensitivity to see those aerosol particles and that can be another source of error in your
[1:19:39] estimations. Uh there are other uh regions, high relative humidity conditions, in hygroscopic aerosol environment, you will see
[1:19:50] um um large errors when you estimate PM 2.5 from AOD. So, it really varies lot depending on
[1:19:59] what you are trying to do and where you are trying to do it at. Okay. Okay. Uh
[1:20:13] Have you processed images from Sentinel P5 precursors to measure air quality? Short answer is no. Uh I believe you're asked you're talking
[1:20:23] about the Tropomi which has been recently launched satellite. Um the data has not been yet released from the European agency, so we haven't
[1:20:34] processed any of that. Can you automate the data download process through API? Yes, there are various options on the Let's web. Uh,
[1:20:46] there's an open app server which you can use to access directly data. There are HTTP servers to download the data. There
[1:20:53] are FTP servers to download the data. Uh, and you can automate uh, you can write little script and automate that
[1:21:01] process easily. Can we use MODIS AOD and AERONET data to validate WRF-Chem aerosol simulations? The sho- uh, you can use the AERONET
[1:21:15] data to validate. Uh, MODIS data you can use to compare it because MODIS data are not considered as
[1:21:22] ground truth. AERONET data is considered as ground truth. So, when we talk about validation, it means that we are
[1:21:28] comparing with something which is true in nature. So, AERONET data are ground truth. You can validate, but you can also compare the
[1:21:37] MODIS data to see the special features to get the feeling of how overall performance or the consistency between
[1:21:44] WRF-Chem and MODIS. What would be the threshold of correlation between AOD and PM2.5 for validating the AOD product? Okay, so
[1:21:58] this is So, in if you want to validate the AOD product, you have to use the another AOD
[1:22:07] product. In case we are use the AERONET AOD. So, when you uh, validate the AOD product, you use
[1:22:14] the same parameter. What you are asking is probably what is the threshold of correlation to get good estimation of
[1:22:20] PM2.5 from AOD. Uh, in that is also again really depends on your application. How much tolerance level you can sustain in your estimated
[1:22:31] PM2.5. PM2.5. Sometime correlation of 0.5 can do the job. Sometime correlation of 0.9 can also not do the job. It really depends
[1:22:40] on what is your tolerance levels in terms of the uncertainty in PM2.5. Is it 5% accurate you want? 10% accurate you
[1:22:48] want? 30% 40% depend on your application. So, it it varies. There's no one answer for that estimation.
[1:23:02] Can you tell us the important application of air quality monitoring over oceans? Uh so, uh as you know, over ocean uh
[1:23:11] there are many different sources of uh uh uh pollution or air air or the aerosol particles. One major is
[1:23:20] the the uh sea salt particles which comes out from the oceans as uh winds blows over the ocean surface.
[1:23:29] Those are the But, there are other transport from the land like dust, biomass burning smoke, or even pollution
[1:23:36] from the industry that transport over ocean. ocean. There are other source on the ocean also like uh smoke coming out from the big
[1:23:45] ships. There are gas and oil drilling in the over the ocean which puts out of lot of
[1:23:51] of uh pollution in the over ocean. There are are uh uh aircraft emissions and other things. So,
[1:23:57] those if if certain certain agencies do required to monitor level of pollution over ocean, most of the time they are
[1:24:09] near the land boundaries. Um Um and if you are more interested in monitoring aerosols, most often people
[1:24:17] actually monitor aerosols over ocean to address some of the climate application questions. How the ready to forcing is changing over oceans or how
[1:24:28] it is impacting overall outgoing solar radiation or incoming outgoing solar radiation or outgoing earth radiation over oceans. So, to
[1:24:38] address some of the climate application, most people often use uh uh aerosols data over oceans. Not so
[1:24:46] much for the air quality. Okay, is it possible to transport PM2.5 MODIS data to smoke to process it to
[1:24:57] Okay, so this I believe the smoke uh it's question 22. The question is, can you imp- or
[1:25:06] or can you include the MODIS PM2.5 data to CMAQ model uh to get the emissions. Uh and I think the smoke is a model within
[1:25:16] comes with CMAQ which uh creates uh emission data sets. Uh Uh short answer is yes, but I do not know
[1:25:24] all the details about how you would do it. Okay. Okay. Next question 23. Fog is a special cloud on the ground
[1:25:43] that is highly affected by aerosols close to the surface. I'm interested in identifying and analyzing the presence, occurrence,
[1:25:53] and dynamics of fog in tropic highlands Andes. Andes. Is there any algorithm product from NASA focused on this fog issue?
[1:26:04] So, NASA I believe does not have any fog product operational fog product, but there have been research studies people have published.
[1:26:18] Uh Uh and there are methods people have developed based on the spectral thresholds of different MODIS channel
[1:26:26] which can be used to actually detect and monitor fires over different locations. If you are really interested
[1:26:36] please again write an email to me. I can I can suggest some reference paper where people have demonstrated those
[1:26:44] techniques. But I do not remember on top of my head right now but and I don't think there's a
[1:26:52] there is a operational product from any of the satellite. GOES GOES I'm not sure. So Please check the GOES satellite which is
[1:27:07] from the NOAA GOES-R. It might have a fog product over US US but I'm not 100% sure.
[1:27:24] Okay, this has been already answered question 24. What is the question 25? What is the difference between
[1:27:34] normalized difference aerosol index between 2.2 and equation? Okay, I'm not sure what is normalized difference aerosol index.
[1:27:44] I'm not familiar with that. There is a NOAA NOAA product something like that but I'm not 100% sure that might be from VIIRS. So
[1:27:56] I'll just say I don't know that. Can we directly use OMI data and MODIS data without any correction? Again, Uh
[1:28:11] short answer is yes. all the data are already corrected for any correction needed. So, you can use directly, but
[1:28:18] again, it will depends on your applications and how accurate data you want. want. If you need more accurate data, then you
[1:28:25] might need to make some correction. If you don't need more accurate data, you can can you can tolerate the accuracy levels
[1:28:31] which are given with the data or uncertainty level, then you can actually actually use as it is.
[1:28:39] And we'll go over this some of this Uh there are each products come with with a quality flag which tells about the
[1:28:46] uncertainty levels. And we'll go over that when we start running those codes in week two and three.
[1:28:54] Okay. Okay. So, question 27, is MODIS data for PM2.5 available for 1 km resolution? I would like to use it to evaluate C-MAC results
[1:29:04] for PM2.5 in 1 km over Western US. So, there is a data sets available at 1 km special resolution. It's annual mean
[1:29:15] and it's not a NASA product. It's out from the Dalhousie University. Uh there's a group uh called atmospheric chemistry group uh
[1:29:25] led by Randall Martin. They have a 1 km product over US and other parts of the world. Uh
[1:29:34] but it's annual mean number. It's not available daily, monthly, or seasonal. It's annual mean numbers. You can use
[1:29:41] that. Uh again, it's not not an official NASA product, but they use NASA satellite data to create that product.
[1:29:54] Uh Uh can we work on a regional scale for example, Nagpur city, Maharashtra to extract AOD over cities using satellite
[1:30:04] data? Yes, you could do that and we will actually do that exact same exercise in week two.
[1:30:12] This PM2.5 has an impact on occurrence of Western Disturbance Dynamics activity in Western Himalaya. I'm not really sure
[1:30:23] what that means, so I'll say I don't know anything about that. Okay, I think that's all for today.
[1:30:32] Again, if you have more specific question, question, feel free to email us. We might respond We might respond some
[1:30:41] of those questions in week two. Again, Again, go through some of those suggested exercise exercise for in order to prepare for week two.
[1:30:52] In week two, we'll go over Python script. We'll take a lot of time. It's a two-hour session, so we will We want to
[1:30:59] make sure everybody is able to run those codes, so please make sure you have installed Python, your test code is
[1:31:06] running, you have all the data and codes on your computer ready to go. Otherwise, we will not able to actually
[1:31:15] debug code or debug the Python installation in the week two when the session is in pro- progress. So, please make sure you have
[1:31:23] all those things in place before we start looking the data in week two. two. With that, thank you everyone for
[1:31:30] joining, and we will see on Friday same time for two hours.
