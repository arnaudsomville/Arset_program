# Introduction to the Aerosol Robotic Network (AERONET), Part 1/5

`https://www.youtube.com/watch?v=x0Gg8COznJ8` · id 64 · 1:46:52 · module 27 — NASA Atmospheric Composition Ground Networks Supporting Air Quality and Climate Applications

[00:01] All right, welcome everyone to this ARSET training on NASA's atmospheric composition ground networks supporting air quality and climate applications.
[00:12] Before we get started, I just give like to give you a brief overview of the ARSET program.
[00:19] ARSET, which is the NASA Applied Remote Sensing Training Program, provides accessible, relevant, and cost-free trainings on remote sensing using
[00:28] satellites and other methods such as ground networks, which we'll be talking about today. These trainings cover a variety of
[00:34] different application areas, as you can see on the right of the slide here. This particular training is in the health and
[00:40] air quality application area. These trainings address a variety of applications in these areas and are tailored to a variety of different
[00:47] audiences with different experience levels. levels. ARSET provides both online training such as the one you're attending today, as
[00:55] well as in-person trainings. The trainings can be live and instructor-led such as today's training or asynchronous self-paced trainings. However, all of
[01:03] our trainings are cost-free. Several trainings are available in bilingual or multilingual options. We only use open-source software and
[01:12] data in our trainings, as we'll see in part two of this training series. And we modify our trainings to
[01:18] accommodate a variety of different levels of expertise. This session in particular is geared towards those with intermediate levels of expertise.
[01:26] You can visit the ARSET website to learn more about these trainings and others. So now, moving into the topic of this
[01:35] training series, which is the atmospheric composition ground networks, which support air quality and climate applications. If you've attended any previous ARSET
[01:45] trainings, you've probably learned about the different kinds of satellite instruments which provide remote sensing data from space.
[01:51] What you might not know is that NASA also operates ground-based remote sensing networks. NASA's atmospheric composition ground networks, which are
[01:59] the AERONET, Pandora, TOLNet, and MPLNET instruments and networks, provide information on aerosols and trace gases in the atmosphere, including vertical
[02:08] profile and column information, and support a wide range of applications from air quality tracking to climate modeling.
[02:15] modeling. The bottom-up view that these instruments give us often complements the top-down view, which we get from
[02:20] satellites. satellites. And this also allows ground-based networks to give us certain types of information which are very difficult to
[02:26] get with satellites. For example, looking at what's happening in the lowest levels of the atmosphere, which is most relevant to where we live and
[02:32] breathe. breathe. Over the course of this training series, we'll learn about all these different networks, the types of data they
[02:38] collect, and how these data are used in air quality and climate applications such as improving atmospheric models or
[02:45] providing continuity between different satellite missions. By the end of this training series, we hope that our participants will be able
[02:53] to, first, identify the basic characteristics, capabilities, and limitations of the NASA instruments used by these ground networks for active and
[03:01] passive remote sensing of aerosols, ozone, and nitrogen dioxide. Second, to recognize how these ground-based networks sustain global long-term observations,
[03:11] support air quality and climate applications, and how they complement satellite-based remote sensing. Third, we'll be showing you how to
[03:19] access relevant atmospheric composition data from the appropriate NASA ground networks for given locations and and application purposes.
[03:28] And finally, we'll show you how to compare and jointly analyze specific ground-based atmospheric composition data products with relevant
[03:35] satellite-based remote sensing data. For example, satellite aerosol data products for given location and time. As a prerequisite to this course, we
[03:44] recommend you taking a look at this introductory training on how NASA measures air pollution. This covers some
[03:50] of the basic concepts which will be further expanded on in this training. In part one today, we'll be taking an
[03:58] introduction to the Aerosol Robotic Network or AERONET. Next week in part two, we'll continue with a hands-on analysis of AERONET data
[04:07] before moving in part three to an introduction to the Pandora instrument and the Pandonia Global Network. Then in part four, we'll move on to an
[04:15] introduction to the Tropospheric Ozone Lidar Network or TOLNet. And finally, in part five, an introduction to the Micro
[04:22] Pulse Lidar Network or MPLNET. The homework for this training series will be offered beginning at the end of
[04:30] part five. And you'll have two weeks to complete that homework assignment. The due date is September 5th.
[04:36] Those who attend all five of the live sessions of this training series, as well as complete the homework assignment
[04:42] before the given due date, will receive a certificate of completion for the course. Now, let's start off with part one of
[04:51] this training series looking at AERONET. My name is Dr. Carl Malings. I'm an assistant research scientist at Morgan
[05:00] State University under the GEOS-AR2 cooperative agreement, and I've been given the introduction to this training. And shortly, I'll be handing the
[05:08] training over to Dr. Pawan Gupta, a co-lead of the AERONET network from the NASA Goddard Space Flight Center to
[05:14] present most of the technical material. By the end of this part, we hope that our participants will be able to, first,
[05:22] identify identify the basic characteristics of the AERONET instruments used by NASA for ground-based passive remote sensing of
[05:28] aerosols. aerosols. And also, recognize how AERONET networks sustain global long-term observations, support air quality and climate applications, and complement satellite
[05:37] aerosol data. To review some prior knowledge that you'll want to be familiar with before this training course,
[05:46] aerosols are solid or liquid particles which are suspended in the atmosphere and impact air quality, weather, climate, and human health and animal and
[05:55] environmental health as well in a variety of different ways. Passive remote sensing instruments rely on direct or indirect reflected or
[06:03] scattered sunlight as the source of the electromagnetic radiation they detect. If you've taken previous ARSET trainings, you might be familiar with
[06:11] some of these satellite instruments which provide information about aerosols. These include the MODIS instrument, the VIIRS instrument, the
[06:18] ABI instrument on the GOES series of satellites, as well as several of the instruments on the newly launched PACE
[06:24] satellite. Those missions will come up a little bit later in today's training as well. If you have questions at any point
[06:33] during today's training, please put them in the questions box within Webex, and we'll be answering all of those questions
[06:39] together at the end of the training today. today. You can answer enter the questions in the questions box at any time.
[06:45] And we'll be answering them, as I said, at the end of the training. We'll be collecting all the questions and answers
[06:51] together into a training document which will be posted on the training website about a week after the conclusion of the
[06:56] training. And any questions we don't get to answer during the live portion of the Q&A, we'll still be answered in that
[07:03] training document posted to the website. So now, without any further ado, I'd like to hand us over to Dr. Pawan Gupta
[07:10] to tell us about AERONET. Thank you, Carl, for that great introduction and details about the ARSET and the
[07:19] training. So, in part one, we are going to talk about Aerosol Robotic Network or commonly known as AERONET. And I'm going
[07:28] to talk about brief history of AERONET, details of instrumentations, and get to some of the applications. Okay.
[07:38] Okay. So, the first one is our AERONET overview. What you see on the right on the map are the locations of all the
[07:45] AERONET station ever deployed all around the world. AERONET program is a federation of ground-based remote sensing aerosol
[07:55] networks. So, it is a network of networks, and we'll explain that in more details. The primary purpose of AERONET
[08:02] is to get columnar atmospheric aerosol measurements from the ground stations. So, these are considered ground truth. It provides long-term,
[08:13] continuous, and readily accessible public domain database. This is very, very important. There are many, many networks all around the world operated
[08:24] by many other agencies, but one of the beautiful thing about AERONET is the data are in public domain, and anyone
[08:31] who likes to use the data can obtain that. So, that's very, very important part of AERONET. It includes
[08:38] data sets on aerosol optical, microphysical, and radiative properties. And all of these are very useful for air
[08:46] quality and climate change research. The network impose standardization. Again, very important for AERONET is the standardization. Please, I'm going to
[08:57] talk about this little bit more when we get to the instrument calibration, data processing, and distribution. Although
[09:03] it is a network of network, but throughout all the networks across all the globes, we use same instrument, same
[09:12] calibration process, data processing happens using same algorithms, and they are all distributed through NASA Goddard AERONET website.
[09:22] As I mentioned, AERONET data has been extensively used in aerosol research to characterize atmospheric aerosols, to validate the satellite retrievals, and
[09:33] model outputs, and most importantly, to address the climate and air quality applications throughout the history of AERONET.
[09:43] AERONET. Next, I'm going to talk little bit about the AERONET background or historical perspective. So, AERONET was
[09:51] was supplied by NASA and PHOTONS, a group out of University of Lille in France in 1993 1993 with one station here at NASA Goddard.
[10:03] And since then, the network has expanded by joining other networks, regional networks called Rima and Aeros Spain.
[10:14] These are two in out from the Spain. Uh Aero Can, which is a Canadian aerosol networks. Neon is a national ecological
[10:25] observatory network funded by National Science Foundation here in the US. And then the Carsonite, which is a part of
[10:32] Chinese AERONET network. In addition to that, uh AERONET also has something called Aeros Pen uh Aeros Pen, which is
[10:41] a small network out of from Australia. In addition to that, uh there are thousands of collaborators with national
[10:53] and international agencies, which includes includes uh public and private sector institutes, universities, universities, and individual scientists and partners
[11:03] who actually contributed heavily on AERONET. And as I mentioned, it started in 1993. So, we have 30 years of data
[11:11] records from some of the sites. So, as I mentioned earlier, it's a network of networks and it started in
[11:20] 1993. So, what do you see on the left side with one square dot, which is first location at NASA Goddard, started back
[11:29] in May 1993. So, we have a completed 30 years data records from that one site. And then it
[11:35] grows to the what you see in last year, May 2023, the locations of all the stations all around the world. So, in
[11:43] last 30 year, it has grown lot. Currently, we have about 600 active stations. stations. Over the time, we have about 1,800
[11:53] station deployment, which means some of the sites have been decommissioned for various logistic and other reasons, and
[12:01] some of the new sites comes along every years. years. Uh AERONET coverage is across 100 tical gaps in many areas around the
[12:15] world, uh specifically over Africa and over northern uh hemisphere over Russia and other places uh due to uh geopolitical issues and uh
[12:26] difficulty in uh maintaining stations on these locations. Here are uh some of the locations of the networks which are part of AERONET
[12:40] program. The first picture you see here is from the NASA Goddard. We have a calibration centers and one of the major
[12:48] AERONET uh uh uh lab here, uh which have capability to calibrate 100 instruments on a given day in time.
[12:57] Then we have Photons on the top, which is in Lille, France. Uh Aeros Pen, uh we have Neon. Neon is very These are
[13:06] also located in very difficult locations and typically these uh instrument sun photometer is mounted on actually with
[13:16] many other instruments on these kind of towers, which you see here in the picture on the right corner.
[13:23] Then you have some sites in uh Australia. We have Aero Can, Canadian sites, which are really in difficult uh
[13:31] locations under snow and ice conditions. So, they operates certain time of the years only. So, this is just to give you
[13:38] a glimpse of what different sites looks like or where those different networks operates. operates. Now, the growth didn't happen overnight,
[13:48] as we mentioned earlier. It took 30 years. And what you see on the bottom, the time series, is the number of sites
[13:57] which came along, added into the AERONET networks over the years. So, if you do a trend fit, it's about 25 sites which are
[14:08] which we include new sites in AERONET networks networks uh combined from all the networks which are part of AERONET. And you can see how
[14:18] the locations of those sites have been evolving over the time in the map on the right on the top. And the colors are
[14:26] basically mean aerosol optical depth for that particular years, which we uh deploy uh the the station is displayed. The AOD is
[14:36] represented at 500 nm, and we'll talk about that a little bit more what it means. means. Here is some more details about some of
[14:45] the sites which came along in last 3 to 4 years, uh starting 2020 to 2023. As you can see, uh 2020 and 21 22, those
[14:56] two and more than 2 years were heavily affected by the COVID uh all over the world, and the AERONET
[15:05] operation also got affected because it was very, very hard to maintain those site. But uh still we were able to put
[15:11] lot of sites during that period and after that period in many, many different parts of the world.
[15:18] Uh you can see the deployment uh the colors on the map doesn't have any relevancy here, but you see the
[15:26] uh the locations of the new sites which came along. We are already in discussion uh with many different countries, uh including
[15:35] US, Saudi Arabia, Iraq, India, and other countries in Africa where new sites in coming year will come up, uh which is
[15:44] about 20 more sites. Now, if you look at the data records, availability of data records for various
[15:51] climate and air quality research, then we have about 30 years data records from one site, that what is Goddard.
[15:58] Uh if you're looking for uh more sites, then we have about 20 years of data records from 71 sites
[16:07] uh uh uh spread across the region. So, you can see very quickly in the first 10 year
[16:12] itself, we went from one site to 70 site. site. The 10 year plus data records is available from more than 350 sites. So,
[16:21] huge change in last 10 years, all the way from 70 sites to uh 350 sites. And if you're looking for 5 years
[16:31] plus data records, then we have about 565 sites. Uh as I mentioned, currently we have about 600 active sites all around the
[16:39] globe. Okay. Now, in additions to these uh permanent AERONET sites, AERONET also heavily involved in supporting field
[16:53] campaign. And these field campaigns can be NASA or non-NASA, depending on the purpose of the field campaign. And
[17:02] AERONET participate in all kind of field campaigns since the beginning of the program until current time. Uh what we
[17:09] call it's Dragon, the uh regional aerosol graded observation network, uh distributed uh regional aerosol graded observation network or Dragon. So, the Dragon's the
[17:21] concept of the Dragon is that you put many, many AERONET sites in a smaller regions to observe or to measure aerosol gradients
[17:34] in a space and time over a smaller regions. And one of the example, if you see here on the left side in this
[17:41] animation, is a similar Dragon deployed in 2011 during a Discover-AQ field campaign here in Washington, DC and Baltimore area,
[17:53] where we had 40 plus similar instrument operated for many months to actually capture that special and temporal variability in this region.
[18:05] Similarly, we have deployed these Dragon networks in LA, in Houston, in Colorado, all supporting Discover-AQ campaign. And
[18:15] internationally, we have these Dragon deployment in UAE, over India. Most recent one which we just did earlier
[18:23] this year was called Asia AQ field campaign, which was deployed in Thailand, Philippines, and South Korea, and
[18:34] Taiwan. So, those four countries actually covered during this. And these high density networks can be very, very
[18:42] useful not only to assess the special gradient, but to validate the satellite data at high special resolution, which
[18:50] are becoming more and more available using the new sensors. So, if you have these high resolution satellite data,
[18:57] which is about 1 km to 10 km resolution, uh this Dragon network can be significant at the value to the quality
[19:06] of the data in in assessing the quality of satellite data. Okay, here I just want to quickly show
[19:15] some of the example of AERONET deployment deployment uh from different site. And these are just some example. What I want to point
[19:23] out is that if you look these each deployment, they are each of these are different uh in many things. Some of
[19:31] them are deployed on a tower, which is site design site uh specifically for observation. Some of them are just on the roof of schools, or
[19:42] some of them are in open field on the ground surrounded by mining activities or lake. And some of them are in the uh
[19:51] agriculture field. So, all 600 sites provide very unique perspective in their own way about aerosol measurements and they
[20:02] cover all kind of land use land change scenarios, scenarios, different environmental condition, different climatic conditions from extreme heat in Saharan
[20:15] Sahara to extreme cold in Alaska and Canada and Greenland and South Pole. So, we have AERONET measurements
[20:24] in different environmental condition, different climate conditions to assess how the aerosols are actually evolving around the world.
[20:35] So, before we move forward, I just want to pause for 10 15 second here. If people have question, they can put it on
[20:42] the chat box, the question answer box, and then I will move on. Okay, so I hope that allowed you to
[21:02] think about any question you may have or put in the question answer box. So, let's move on. I talked about the bigger
[21:08] picture of AERONET network. Now, before we get into more details, I want to uh uh make sure that everybody understand what
[21:18] AERONET measures and what kind of things and since this is an air quality application training, I want to make
[21:25] sure we make that link very early how this AERONET measurements are linked to air quality, how how they are different and
[21:34] how they are similar. So, let's look into some of these terminologies which you will hear throughout the
[21:41] first two sessions. Okay, so the first one is called aerosol optical depth. That's the fundamental measurement done by AERONET and it's
[21:51] optical measurement of the atmosphere. Okay, as some people it also called aerosol optical thickness, commonly known as AOD or AOT. It is always
[22:02] represented at certain wavelengths. So, whenever you saying AOD, you must mention at what wavelength the measurements are done.
[22:12] Typically, for most climate application, the measurements are done at the green channel either 500 nm or 550
[22:21] 550 nm, but it all AERONET along with other instrument can make measurements in other wavelength as well.
[22:29] So, what is aerosol optical depth? It's uh uh it is optical depth express the quantity of light removed
[22:40] from a beam by scattering or absorption during its path through a medium. So, let's look look this first bullet little bit more
[22:48] closely. So, you have a sun which is a source of energy which is uh transmitting transmitting electromagnetic spectrum in all kind of
[22:57] wavelengths which reaches to the top of the atmosphere and enter to the atmosphere. When it enters the
[23:03] atmosphere, it interact with the atmospheric component which are cloud, water vapor, gases, and aerosols which are small particles in the atmosphere.
[23:15] And then, whatever is transmitted through these uh atmospheric component reaches to the surface and that's where the AERONET
[23:25] instrument is sitting and looking towards the sun directly within 1.2° field of view. So, what AERONET does is it makes
[23:36] measurements of this incoming irradiance in a specific wavelength by looking directly to the sun passing through the atmosphere. Right? So, now
[23:48] if let's say if we know I0 which is how much top of the atmosphere irradiance in particular
[23:55] channel is and if we measure I which is measured by the instrument, then we can tell by looking the difference how much
[24:05] irradiance in that particular wavelength is is attenuated or removed by these particles or clouds or water vapor or anything
[24:15] else which is there in the atmosphere. So, that is the basic principle of making measurement of aerosol optical
[24:20] depth. Now, in this case, we have shown you a sun photometer. We'll talk about that little bit more, but there is also
[24:27] another instrument which is shown here is called microtops and I'll talk to that about that as well.
[24:33] Now, the aerosol optical depth represent the loading of the particles in the entire column of the atmosphere as you
[24:39] can see from the measurement picture. What we are measuring is how much radiation is reaching to the surface.
[24:45] So, it represent the entire column. We are not able to separate in the surface or different layers of the atmosphere.
[24:52] It represent the entire column of the atmosphere from the surface to the top of the atmosphere. The value depends on many things. So,
[25:00] we'll talk about how to separate into different component, but the value of this aerosol optical depth depends on
[25:07] particle concentration, how many particles are there, what kind of shapes like dust particle have a different type
[25:14] shapes versus a smoke particles versus pollution particles in the in the urban environment may have a different shape. Size also matters.
[25:24] Their chemical composition, in other word, refractive index can will tell us whether they are refractive they are
[25:31] scattering type of aerosol or absorbing type of aerosols and where they are in the atmosphere. Although we are making a columnar
[25:39] measurement, but it matters whether they are in lower atmosphere, upper atmosphere, or middle atmosphere. Depending on their location, this
[25:48] aerosol optical depth value can have a different meaning. And then, the wavelength at which you are making
[25:53] measurements. So, like I said earlier, aerosol optical depth always is specified by the wavelength and its value will change depending on
[26:03] which wavelength we are showing the measurement. measurement. And like I mentioned, it can measure from the ground as well as from the
[26:12] space. space. So, So, looking little bit more into mathematical form how the AOD is calculated, so typically, this is
[26:21] represented by what we call Lambert-Beer law or Beer-Lambert law. And And as from the previous picture, I is the
[26:30] measurement which we are making at the surface using the sun photometer and the I0 is the top of the atmosphere
[26:37] irradiance in that particular wavelength. Uh M theta is uh what we call is optical air mass. And theta is the solar zenith angle and
[26:49] 1 over cosine of solar zenith angle is what M is defined by. And this tau lambda is optical depth
[26:58] of the atmosphere. So, it includes optical depth of the atmosphere. This is not yet aerosol optical depth. This is
[27:05] optical depth of the atmosphere which have air, aerosols, and gases. So, now let's assume this measurement of I is
[27:16] done under cloud-free condition when there was no cloud. We did this measurement. So, when there is no cloud,
[27:24] what are the other component which are there in the atmosphere which will have impact on this I value which we
[27:31] measured. measured. We will have air particles which is also called Rayleigh particles. So, this is called optical depth by air
[27:40] molecules or Rayleigh optical depth which we can calculate very accurately using air pressures measured at the surface. So, this is a quantity very
[27:51] accurately can be calculated and we can remove this from the total atmospheric optical depth. Then we have aerosol optical depth. This
[27:59] is our interest. This is what we want. Okay? And then we have gases. So, for example, uh ozone, NO2, SO2,
[28:10] water vapor, uh uh all of the carbon dioxide, all the gases depending on which wavelength you are
[28:18] making measurement, these gases can have a different optical depth for the on that particular wavelength. And again,
[28:26] based on our understanding and other type of measurement, we can calculate this this gas aerosol gas optical depth as well
[28:35] with high accuracies. So, once you have measurement of total optical depth using this equation, we can actually remove the
[28:46] Ra- Rayleigh optical depth and gases optical depth to get aerosol optical depth and that's how AERONET actually
[28:52] get to the aerosol optical depth. Moving on, there is another parameter which is very important in come which comes
[29:04] from AERONET called Angstrom parameter or typically alpha or ang- Some people also called it Angstrom coefficient. They are all same.
[29:13] And what Angstrom parameter or alpha tell us about is the size distribution or the what kind of particles
[29:22] dominated that particular atmospheric column where you are making measurement. And this is defined by this specific equation alpha which is a
[29:33] uh uh measurement taken in two different wavelengths. So, these are aerosol optical depth in two different wavelength wavelength one and wavelength
[29:42] two and these are the actual wavelengths. So, you take the logarithmic of the the two and then
[29:48] ratio, that is what the alpha is defined. Typically, this alpha is always represented by pair of wavelengths. So,
[29:57] in in in AERONET, we define it for 450 to 870 nm. nm. You can also use more than two
[30:05] wavelengths to calculate alpha by doing a least square fit. So, there are many different ways. So, again, whenever you are using Angstrom
[30:14] parameter, always ask the question which two wavelength or how many different wavelength it represent because the value will change depending on which two
[30:25] wavelength you are using or more wavelength you are using and their interpretation will also change. So, let's assume we are using these two
[30:32] wavelength 440 nm, which is sensitive to absorbing aerosols in the lower close to the UV part of the solar spectrum and
[30:40] 870, which is close to the near IR channels representing height. Now, when you have the value of this alpha
[30:49] like greater than two, then basically it indicates that uh uh the particles in the atmosphere are dominated by fine mode or a smaller size
[31:00] particles. These are typically urban pollution particles like sulfate, nitrate, or a smoke part fine smoke particles. particles. When this value is near zero or less
[31:10] than 0.5, it typically indicate the presence of coarse mode particles such as desert dust or soil or
[31:19] sand particles in the atmosphere. Again, depending on the pair of the wavelength, this interpretation can change, change, but
[31:31] the Angstrom parameter is kind of a quantitative way in which the we are using optical depth measured in
[31:39] different wavelength to assess the size. So, So, the spectral dependency of aerosol or aerosol properties uh uh are quantified by this Angstrom
[31:53] parameter and very very useful in assessing or identifying type of aerosols in the atmosphere. Okay. Now, how these things are linked
[32:05] or similar to aerosol optical depth or what what we call PM2.5 in air quality community, how they are two quantities linked or
[32:18] what kind of differences they have or similarities they have. So, let's look first the PM2.5, right? PM2.5 is typically measured near the
[32:29] ground ground or top of the building. And these are most likely point observations. observations. The surface layer is the lowest layer of
[32:41] the atmosphere where we all breathe. Typically, it's uh thickness of this layer can be few tens of meters up to 100 m or few
[32:53] kilometers depending on the mixing of boundary layer. How the boundary layer is well mixed. So, this surface layer can vary. Okay.
[33:03] Now, Now, satellite or even the ground-based AERONET aerosol optical depth, which we just discussed, represent the entire
[33:12] column of the atmosphere. So, let's say this is a surface measurement of PM2.5, but this is aerosol optical depth.
[33:18] Whether it's If it is coming from a sun photometer like AERONET, then it will be a representing one point point location
[33:25] similar to PM2.5, but if it is coming from the satellite, then it will have an horizontal resolution also. So, that
[33:32] cylinder of the atmosphere, which extended from the surface to the top of the atmosphere, will also have a certain
[33:39] diameter or radius and this resolution can vary from 1 km to 10 km depending on which satellite, what data product you
[33:48] are using. So, this is main difference between aerosol optical depth and PM2.5 in terms of the what they are measuring.
[33:56] Now, there are other differences. PM2.5 is a mass concentration and it is always represented microgram per cubic meter.
[34:06] It's a dry mass means it is measured under controlled conditions by heating the air sample at 40% relative humidity,
[34:17] 35 to 40%. Where aerosol optical depth is actually represent all the particles in this column, all size, all shape,
[34:29] all kind of chemical composition, everything which is in this column is represented by optical depth. It's a unitless quantity. Optical depth
[34:36] is a unitless quantity. And it is done in ambient conditions. So, what what I mean by ambient
[34:43] condition is we measure aerosol optical depth in the ambient condition, whereas PM2.5 is a dry mass. Like I said, it's
[34:50] the sample is heated and then measured. So, when you do the optical depth in ambient condition, quantities like water
[34:57] vapor vapor can have a direct or indirect effect on aerosol optical depth, right? So, let's say you put the sulfate aerosols in
[35:06] urban environment with high relative humidity conditions, then the sulfate aerosol are hygroscopic in nature. They will grow in size and they'll absorb
[35:16] water vapor and grow in size and their optical properties will change and aerosol optical depth will increase. Whereas,
[35:24] since we are only making dry mass of PM2.5, your mass concentration may remains constant, whereas aerosol optical depth can
[35:34] see the changes because of the high concentration of water vapor in the atmosphere. atmosphere. And there are other parameter which we
[35:41] already discussed. So, although these two quantity have been heavily used in air quality research and application, there are significant
[35:49] differences in both of them. But both of them, one thing to important to note here is that both of them
[35:59] represent represent amount of pollution in the atmosphere. Yes, there are significant differences, but there are also similarities. Under certain
[36:10] conditions, under certain atmospheric condition with some assumptions, they can be highly correlated and that is what we use actually
[36:19] if you have looked any satellite derived PM2.5 product, those assumption, those equation, that's what we use to actually
[36:26] derive surface PM2.5 concentration using aerosol optical depth. But this is also I just want to make sure that everybody understand the
[36:36] differences before we start using aerosol optical depth data for air quality application. Okay. So, let's move forward. Let's get
[36:46] back to the AERONET and what we are going to talk now is what kind of instrument we use,
[36:52] calibration, which is a backbone of AERONET network and some of the data sets which we produce using these
[36:59] instrument from all around the world. Okay. So, the first one is the instrumentation. instrumentation. The The fundamental instrument which
[37:09] AERONET use is called sun photometer. A sun photometer is nothing but a light meter that measures the amount of light
[37:19] within a very narrow range of wavelengths or colors within a very small field of view. So, as I mentioned
[37:27] earlier, this this this head of the sun photometer, what we call is collimator, is looking or pointing towards the sun
[37:38] and it measures the incoming solar irradiance in particular wavelength at very small field of view, 1.2° field
[37:48] of view. Once the light passes through this, there are detectors, different wavelength detectors, which makes measurements and then we save the data.
[37:58] Uh The The one thing to note down about this instrument is it's an automated system. So, it not
[38:12] only has this uh collimator and the sensor head where we record the data, but it also has a
[38:19] robot. And the robot is basically to track the sun. So, it track the sun from morning to
[38:25] evening evening using automated programming and then we have a control unit, that's where we actually store the data and can program
[38:34] in different mode. Okay. So, let's move on and learn a little bit more about this particular sun photometer which is used in AERONET.
[38:42] As I mentioned in the beginning, AERONET use the same instrument throughout the network. network. Uh this is
[38:51] what we the latest version of the instrument of the sun photometer, what we call it sun sky lunar multi-spectral
[38:59] photometer. Okay. It is manufactured by a company called CIMEL Electronics. It is based in Paris, France. And the latest version of this
[39:10] instrument is called CE318T, we typically more commonly known as T instrument or TCIMEL. And this is although we use some older version of
[39:24] CIMEL is still in the network, but they are all calibrated with the new instrument. But since 2015,
[39:32] since the launch of T instrument by CIMEL, AERONET has adopted this new version version and started um
[39:43] um transitioning the entire network from the older version to the new version. About 60 to 70% of current network uses
[39:51] this T version of instrument and the remaining 40% uses the older version. They are very similar to each other.
[39:59] They are only differences in their capabilities and but the data quality and the parameter which we get are same.
[40:09] The new instrument is capable of not only making measurement of sun, but it can also scan the sky and I'll talk
[40:18] about that little bit more it how those measurement sky measurements are useful. But the most important is that it can
[40:25] actually track the moon in the night also. So we are able to get not only daytime aerosol optical depth
[40:33] measurement by looking to the sun, but we are also able to get night time aerosol optical depth measurement by
[40:41] observing the moon. As I said, it's fully automated, very low power consumption. It can run on solar panel, although it
[40:51] has option to provide the power through direct wall power or we can use the solar power. The solar panels are being
[41:00] heavily used within the AERONET network, specifically in locations where we may not have continuous supply of electricity. We often use solar panels
[41:11] so that the operation can be continued. The daytime measurement both sun and sky and the night time measurement from the
[41:21] moon moon are all used to derive these aerosol optical depth, particle size distribution, number concentration and water vapor. And I'll talk little bit
[41:35] more about the water vapor because that's one of the parameter which we get from AERONET, which is also
[41:44] used to correct the AERONET aerosol optical depth, but we also provide that as a product. Several models exist. As I said, this is
[41:55] a standard model, but there are for a specific application, there are other types of models available from
[42:02] AERONET AERONET including polarized. So people who wants to to use the data for other purpose to assess
[42:12] the polarization, there is a way to get polarized. There is C-PRISM specifically designed to make measurement over ocean
[42:19] and lake. We'll talk about that more. The instrument also come with flexible communication. It can communicate the
[42:28] data through satellite link, through internet by connecting to a computer or it can also transmit data over
[42:36] cellular phone cellular SIM using modem. The data are like fully automated. We get the data in real time process.
[42:47] If the location doesn't have any of these or problem with any of the communication, communication, it has onboard data storage. It can
[42:55] store data for up to 2 years in on SD card. So for complicated or difficult location remote location, data are stored
[43:04] on the SD card and once in a while site managers or PI upload the data to AERONET server.
[43:12] Okay, these are different version as I was mentioning earlier. The one which we often use is called T instrument. It has
[43:19] these different channels, nine different bands starting from 340 nanometer to 1640 nanometer. All these channels have specific purpose in the AERONET. 937
[43:34] channel is used specifically to derive the columnar water vapor and other channels these UV channels are specifically
[43:44] put there to actually get absorbing property for aerosols and the visible channel are most commonly used wavelength. There are other versions.
[43:52] AERONET also use over some station polarized model. There are two other instrument which AERONET use in their network called
[44:02] C-PRISM for ocean and for lake and I'll talk about that little bit later. If you want to know a little bit more
[44:09] more technical detail, the the link of user manual is here which provides lot more specific on the
[44:17] instrument. instrument. Okay, so the instrument operation as you can see in this particular movie it's very automated. It
[44:29] wakes up every 15 minutes, track the sun, sun, makes the measurements in nine channels and then go back on the
[44:38] it when it is resting, the collimator position is down as you can see and that is to prevent
[44:46] any water particles, any water vapors or anything anything getting into the collimator or damaging the instrument. So this is always
[44:54] what we call is rest position. There are nine direct sun and four sky spectral channels. It takes about 10
[45:02] seconds to make measurements. We also do a series of three measurements to actually screen the cloud. So whenever measurements are
[45:11] taken taken within 30 within 1 minute of interval every 30 second, three sets of measurements are taken. All those three sets of
[45:19] measurements are actually take to what we call the triplet measurements. So these triplet measurements are take we take them to actually
[45:30] screen the cloud from the because instrument has no other way to actually detect the cloud or non-cloud. So these
[45:38] triplet measurements are often used in cloud screening algorithms to remove the cloud from the measurements. The frequency of measurement varies from
[45:48] 5 to 15 minute depending on the sun angles. Uh In the morning and evening, we have more
[45:55] frequent measurement in afternoon, we have less frequent measurement. And then the similarly we do the night time measurement
[46:03] and we'll talk about that little bit more. more. Okay, so in addition to those two direct sun and direct moon measurement
[46:16] we also do these instrument also capable of making sky radiance in four spectral bands. Those four spectral bands are basically
[46:28] 440 nanometer, 670 nanometer, 870 nanometer and 1020 nanometer. Currently we are operating in these four wavelengths, but we are actually
[46:38] experimenting to expand it in UV channel as well. Along the so so these sky radiance are along the solar principal plane, which
[46:46] you can see on the first okay movie here. here. And then here is what we call is
[46:55] almucantar measurements in it it as you can see, it actually tracks the sky sky in principal plane just looking so we
[47:06] can capture the different scattering angles. And in the almucantar, you are actually looking scanning the sun along the sun
[47:17] angle the entire sky from 0 to 180 degree back and forth. And these two measurements allow us to
[47:27] actually actually measures the scattered radius radiance radiation which is used along with aerosol optical depth measurement to
[47:39] derive the phase function, which is a radiative property or the optical properties of the aerosols and the size
[47:46] distribution and single scattering properties properties using a algorithm called developed by in a very early called Dubovik and Nakajima inversion
[47:57] algorithm. So we use direct sun and sky measurements to actually get additional aerosol properties. And there are there we have several
[48:10] publication describing into much more details about this algorithm if you are interested. interested. Okay, so let's move on to the
[48:18] calibration. Let's let's take a 20 second break here before we get to the next section. If you have a question
[48:25] again, put in the question answer box and then we'll move on to this next slide. Okay, so the next topic which is most
[48:54] important for AERONET, it's backbone of maintaining high quality data in AERONET network is calibration. Each AERONET instruments is calibrated using same
[49:06] method, same duration as I mentioned earlier. earlier. So So there are three major steps in calibration. What we call is
[49:16] pre-deployment calibration. So whenever either we buy instrument or anyone else who is deploying these stations, they can buy directly from
[49:27] CIMEL. So one of the thing I want to note down about AERONET is anyone who is interested in deploying and station
[49:36] around their own institution or their wherever their research interest lie, they can actually buy a AERONET instrument directly from Cimel and then
[49:48] NASA will calibrate for you free of charge. And we will and your station will become part of
[49:54] NASA AERONET network. The only policies is that you open your data to the public and we process all the data in real time. So,
[50:07] before when you buy instrument from Cimel, before you deploy in the field or and at any location, the instrument
[50:15] comes to either NASA or one of the other calibration centers. So, if you can see on the map, there are few other
[50:22] calibration centers all around the world. There is one which is started in Taiwan. We have one in the US. This is
[50:28] NASA Goddard. We have couple of them in Europe. Europe. We also have some calibration sites which may not be the calibration center,
[50:38] but they are calibration site where the calibration data are gathered. So, one over is Hawaii. One over is Izaña,
[50:46] another island, because we need very clean conditions to calibrate this instrument and I will talk about that
[50:52] little bit more. And in Australia, we have just another network. It's not a calibration site. So, once the instrument
[51:01] is purchased, you do a pre-deployment calibration which is done either in one of those calibration centers, then the instrument is sent to the
[51:10] field. It is deployed. It remains there for 1 years to 1 and 1/2 year, depending on the location and the purpose.
[51:18] Typically, the deployment period for each instrument is about 18 months. After 18 months, the instrument comes back to one of the calibration center.
[51:27] We do the post deployment field calibrate or post field deployment calibration and then the instrument is sent back to the again to the
[51:37] field for another 18 months or 12 months, depending on where you are. So, this three-step process ensure that
[51:47] instrument we track the consistency of instrument over time, how the filters behaviors are changing, if there are dust or anything depositing in
[52:00] collimator or sensor head, if the instrument for whatever reason is declining in the performance, then those pre-post field calibration allow us to
[52:12] correct the data. This is very, very important for AERONET to maintain high-quality data. Okay, so in order to do the calibration, one of
[52:27] the thing as you might remember from the equation of aerosol optical depth is the I0, which is extraterrestrial solar
[52:36] irradiance or top of the atmosphere solar irradiance in the particular wavelength. And in order to calculate aerosol optical depth from the measured
[52:44] I value, we need this I0. And this to derive this I0, we call we use a method called Langley method.
[52:54] And this Langley method required that the atmospheric turbidity or haziness or or aerosol optical depth remains low and constant over time of
[53:08] the measurements. So, in to to ensure that we actually make set up these calibration sites in very clean
[53:17] condition with very, very minimal aerosol optical depth. Typically, they are high-altitude sites. So, we have two major calibration sites,
[53:28] one in Mauna Loa Observatory in Hawaii, which is about 300 which is about 3.3 km up in altitude.
[53:38] And very clean conditions. Aerosol optical depth values are order of 0.0205. 0.0205. So, very, very stable site. This has
[53:49] been used extensively since the beginning of AERONET program for calibration all the So, we have this something what we call it is a master
[53:59] instrument. The master instruments are sent to the Mauna Loa on a regular basis. Once the instrument comes back from the Mauna Loa to the
[54:07] Goddard or other calibration centers, they are intercompared with the field measurements and then we transfer the calibration from the master instrument
[54:16] to the field instrument. And this process continues every 6 month. The master instruments are sent back to
[54:24] the Mauna Loa. Similarly, we have another site Izaña in Canary Island in Spain, which is also an excellent site for the
[54:33] calibration. Okay, now let's again calibration has lot more details. Again, our website when we go to the part in part two, next
[54:47] session, we'll discuss I'll walk you through details documentation on all of these specifics on the website which are available. Now,
[54:57] let's talk about the data sets. So, there are two types of data sets as we mentioned earlier. There are direct
[55:05] sun and moon measurement. Like we mentioned earlier, we use that triplet to do the to do the cloud masking and then we use
[55:15] this Beer-Lambert law to get the aerosol optical depth. Once you have aerosol optical depth in different wavelengths,
[55:21] you can calculate Angstrom exponent which or Angstrom parameter or Angstrom coefficient and then the water vapor is
[55:28] also calculated in ninth using 937 nanometer channel to correct the aerosol optical depth. The sky radiance which we saw earlier
[55:38] using almucantar and the principal plane plane measurements are used to input in an inversion algorithm by Dubovik and Nakajima
[55:54] to actually retrieve or derived microphysical and radiative properties. So, microphysical properties such as whether particles are spherical or not
[56:05] and size distributions. Radiative properties include single scattering albedo which tells about whether particle is scattering type or absorbing
[56:14] type and then the imaginary and real part of refractive index, which is another parameter to define chemical compositions of the particles.
[56:26] AERONET data, similar to satellite data, comes in different level. Level one, level 1.5, level two. In terms of as people who are using
[56:37] satellite data, they are familiar that the time-to-time data reprocessed using improved algorithms. So, similarly, AERONET also reprocess the data and the
[56:46] current level data are called version three, which was released in 2018. Level one data are unscreened data.
[56:54] Means it will have clouds and everything. Level 1.5 data are cloud screened and quality controlled. These are done using an automated algorithm.
[57:03] And level two data are quality assured. Level two data are only produced after the post field calibration. So, level
[57:11] two data have a lag time of about 2 years after the measurement is taken and about a month after the
[57:19] calibration post field calibration happens at one of the calibration facility. In order to see the complete list of all the
[57:30] parameters which are actually derived or provided by AERONET, you can see that link link below, but these are major list of
[57:40] parameters which are used very often by the research community. Spectral aerosol optical depth means optical depth in
[57:48] different channels. Angstrom parameters using different combination of wavelengths. wavelengths. Columnar water vapor is also derived by AERONET and then we have some of the
[57:59] inversion parameters like single scattering albedo which tells whether particles is absorbing or scattering size distribution. Refractive index
[58:09] tells you basically give indication of chemical composition by looking imaginary refractive imaginary and real part of refractive
[58:18] index. We also provide absorption and extinction optical depth derived. Then you have phase function, fine mode fractions, coarse mode
[58:28] fraction and so on and so on. There are like 50 plus different parameters which are provided by AERONET.
[58:37] Okay, now let's talk about nighttime measurement. As I mentioned, this new generation of instrument instrument is capable of
[58:46] looking moon in the night and able to make nighttime aerosol optical depth measurement. measurement. Currently, about 300 out of 600
[58:55] stations, 300 stations have this capability to make nighttime measurement. The data are currently under research, I would say, and
[59:08] what we call is provisional data and only available at one point level 1.5. We don't process this later data to
[59:16] level two. AERONET team continues to refine and improve the algorithms. And one of the challenges the cloud
[59:24] screening during nighttime. So, our team is continuously working to develop new cloud screening algorithm to check the
[59:31] consistency of this nighttime data with the daytime data and using some of the lidar measurement during nighttime data to
[59:40] validate. Once we are assured about the quality, the provisional status will go away and the data will become regular
[59:48] level 1.5 data and then we'll also mature to level two data after the full calibration. Again this link provides actually documents
[1:00:02] which describe very specifically detailed description how the lunar algorithm works. Okay, so in the beginning I mentioned little bit
[1:00:16] AERONET not only have these permanent AERONET stations on the land, but it also deploys sites during field
[1:00:27] campaigns and do the nighttime measurement, but there are more more than that. We also have couple of other component
[1:00:36] of AERONET. One is called AERONET OC. So the AERONET OC is ocean color monitoring network and this is part of
[1:00:45] AERONET. It use one of the CIMEL CIMEL sun photometer model which I discussed earlier called SeaPRISM. It is
[1:00:55] specifically designed to make measurement in ocean to actually get the ocean color. There are So this is the current
[1:01:07] sites locations. These sites are typically either inland which are on lake to get actually the lake water
[1:01:19] measurement or they are on a platform in ocean or on the coastal sites. Okay, so how does this work?
[1:01:29] The AERONET OC is not only capable of looking to the sun and the moon, but it also has capability to look down to the
[1:01:40] ocean, to the water surface and make measurement of what we call water leaving radiance. Okay, so as you can see in this picture, the
[1:01:52] water leaving radiance is very very important when you are trying to validate the satellite data specifically designed to observe ocean color or to
[1:02:01] get uh properties of how the solar radiation interact with the water surface. So in very early in like 2000,
[1:02:13] AERONET OC started and became part of AERONET network since then a lot of things have changed and the
[1:02:22] the network has grown significantly. These are some of the locations of the sites. sites. We have about 20-25 active sites, 20
[1:02:35] sites are over ocean, five are lake sites and then some of the sites are decommissioned decommissioned during different time of the
[1:02:44] measurement. These One of the thing I want to note down, these AERONET sites are most difficult sites
[1:02:54] to maintain and do the measurement. As you can see these platforms are often in the middle of the ocean far away from
[1:03:03] the coast. They are in difficult oil and gas platforms or uh uh lighthouse or various kind of platform which are in
[1:03:12] the ocean and they are often experience extreme weather conditions, continuous boarding of sea salt particles, winds and all
[1:03:22] kind of challenging environmental conditions. So to maintain and make continuous measurement from these locations is very very hard. So this all
[1:03:34] the AERONET is making actually measurement from about 20 such locations, this data are very very valuable otherwise not available from
[1:03:43] any anywhere else. One more thing I want to mention here about this particular network is that although NASA manage this network, but
[1:03:57] each sites are actually managed by site managers or PI of that particular sites and they belong to
[1:04:06] international institutes. Sometime the instruments is also purchased by those instrument instrument institutions and sometime it is provided
[1:04:16] by the NASA. But the overall, the whole network is actually benefiting the global community on the ocean ocean
[1:04:25] color measurement and that is maintained by the AERONET. As you can see in these pictures, some of these sites
[1:04:35] are you cannot reach them directly through ship. You sometime you have to use helicopter, sometime you have to use
[1:04:41] the boat and many it's extremely difficult stations to actually make the measurements. measurements. We are really lucky to have these 20-25
[1:04:51] sites around the globe to get this valuable data sets for many satellite validation including the PACE mission
[1:04:58] which was just launched by NASA recently. recently. Okay, now another very useful network or component of aerosol AERONET is called Maritime
[1:05:10] Aerosol Network or MAN. The MAN is done through the sun photometer which is commercially available called Microtops
[1:05:25] II. II. And this Microtops is an a handheld sun photometer. It works in four to five different channels depending on the
[1:05:34] configuration. It provides shipborne aerosol optical depth measurements measurements using the sun photometer and depending on who is buying and it can become into
[1:05:46] different combination. One is with 340 nanometers, another one is one longer wavelength it's at 500 nanometer. It In addition to this
[1:05:58] Microtops providing aerosol optical depth, it also has inbuilt temperature and pressure measurement so that we can get the other component of aerosol
[1:06:06] optical depth as we mentioned earlier. You can connect this Microtop using a GPS which enables the accurate location
[1:06:14] and time of the measurement. All these Microtops, we have about 20-25 Microtops Microtops at AERONET here at NASA which are all
[1:06:24] distributed and provided to anyone who is interested in making shipborne measurement through a research vessel, field campaign or through a commercial
[1:06:34] or through a private ship cruise visit over ocean. So we provide to all kind of people all around
[1:06:41] the world. Once the cruise or the ship measurements are completed, the instruments come backs to NASA Goddard. We compare and
[1:06:51] calibrate against the master CIMEL instrument sun photometer so the data quality comes from these Microtops are similar to what we get from the CIMEL
[1:07:02] sun photometer. Although because of the limited channels and limited capabilities, it only provide aerosol optical depth and few
[1:07:10] other parameters. It doesn't provide all range of parameter which we get from the main AERONET instrumentation. Since 2004, we have deployed these
[1:07:21] periodically on ships, research vessels all around the world and this data provides an alternative source of data sets for
[1:07:32] over ocean to validate the satellite retrieval and model outputs. These are some example of different parameters which you get from MAN
[1:07:42] network from Microtops. You get Angstrom parameter, AODs in fine and coarse mode and then you get also get the precipitation
[1:07:51] water. water. Here is bigger map showing locations of these measurement. You can see over last 20 plus years since the
[1:08:02] existence of MAN network. It has covered large part of global ocean and otherwise these measurements are not available to validate satellite
[1:08:15] data. So very very important data sets comes from AERONET from MAN networks to provide valuable information over
[1:08:23] oceans which is otherwise not available from any other ground source. Here you can see some pictures. This MAN is actually great example of
[1:08:34] collaboration internationally because individual people are spending their own time and effort to make this measurement and NASA is just providing the
[1:08:44] instrument and the data processing and calibration capabilities. But many people, students, researchers, individuals during their family trips
[1:08:55] makes all kind of all the time these measurements and help us build this huge data repository at NASA which is
[1:09:04] benefiting global community. Okay, so let's talk quickly about some of the applications. I mentioned many of them throughout the
[1:09:14] presentation, but specifically emphasize that AERONET data are heavily used to validate the satellite data, satellite retrievals. More recently, their quality
[1:09:25] application have started using AERONET derived product uh for a long time to address the implication or the role of aerosols in climate change
[1:09:38] research heavily relied on AERONET because of the high accuracy accuracy of the data and long terms of
[1:09:46] data records. More recently solar industry also started AERONET data to actually account for aerosol particles in the atmosphere and
[1:10:00] how they actually can prevent solar energy production in different parts of the world specifically in dust prone regions. This
[1:10:09] can become very very useful. useful. Here are some examples of how we are actually supporting various satellite
[1:10:18] missions and their validation efforts. The first one is NASA's most recent air quality missions called TEMPO Tropospheric Emissions Monitoring
[1:10:27] Pollution which was launched last years and data became available earlier this years. This is a part of a global
[1:10:34] constellation of three air quality satellites called GEMS, Sentinel-4 and TEMPO which will be flying over US, Europe and over Asia.
[1:10:45] In TEMPO field of view AERONET has about 160 active sites covering all 37 covering actually out of
[1:10:54] 53 states in CONUS and then more recently we have actually put 10 sites in minor disserving institute to bring
[1:11:04] minority students and faculties to the mainstream NASA research. These 10 sites are are set up by NASA through a ROSES
[1:11:13] competition. competition. PACE is another recent NASA mission which is focused on ocean colors and aerosols. AERONET is heavily involved in
[1:11:25] validating both ocean color and aerosols uh uh uh from PACE. And then we have another upcoming missions and
[1:11:34] which is anticipated to launch in next two years called MAIA, Multi-Angle Imager for Aerosols. It is specifically
[1:11:42] designed to get PM2.5 and speciation to assist the health impact of uh aerosols particles. particles. And it will make measurement of specific
[1:11:55] location all around the world. AERONET is a critical part to validate these data sets. We have set up several sites
[1:12:03] around the world to actually specifically validate and collect data for MAIA validation. As many of you know, NASA is building an
[1:12:14] inclusive open science community through various program to actually foster greater collaboration in research and scientific investigations investigations by removing barriers.
[1:12:27] So AERONET stands on the foundation of open data policy as I mentioned from the beginning one of the
[1:12:34] AERONET data policy is to make the data open so that global community can use. Uh we have done excellent job since the
[1:12:42] beginning of the program to make the data available through the web portal. Uh but there's also opportunity to
[1:12:49] expand its reach and impact to the larger community by by providing data in user friendly formats, by providing training,
[1:13:00] making more relevant data products for air quality community for example. And partnership with the ARSET is one of the
[1:13:09] example or attempt for us to actually reach to the larger user community. Okay, so I think that was all about the
[1:13:19] AERONET and different components. So I'm going to quickly summarize what we learned so far. As I mentioned many many times, it's
[1:13:29] AERONET has produced 30 years of atmospheric aerosol measurements and we are continuing. We have about 600 active sites all
[1:13:36] around the globe. AERONET continue to provide high quality data for various application which includes satellite validations validations and
[1:13:46] and including sensors starting from MODIS, OMI, TEMPO, MAIA which are more recent, VIIRS and then upcoming sensors like
[1:13:54] VIIRS and MAIA. AERONET is also heavily used to validate, evaluate, validate and assimilate into models including including major models like GEOS
[1:14:10] and then UK Met, ECMWF, Navy model and many others. AERONET also has been used to assess the
[1:14:19] reanalysis products such as MERRA, MERRA-2 MERRA-2 or European ERA. ERA. And then one of the focus of AERONET is to
[1:14:31] do synergy measurements. So often AERONET alone does not provide complete pictures of atmosphere. So we are also
[1:14:39] co-locating our instrument with MPLNET, Pandora, TOLNET which you will hear in following session of this webinar series
[1:14:49] and then other networks like SPARTAN, SKYNET, IMPROVE to assess the air quality. quality. Uh the DRAGON networks are very very
[1:14:57] useful to get high special and temporal resolution data which are often deployed to support various NASA and non-NASA
[1:15:06] field campaigns. And then AERONET OC continue to support water living radiance radiance which serves as a primary tool for
[1:15:16] validation including the PACE mission. We also have quarterly newsletter which you can access through this uh uh
[1:15:26] uh QR code and and I think that's all I have. We are looking for part two. In part two
[1:15:36] we will go over some of the application example. We will get into the website, browse through different parts of the
[1:15:45] website. We look into how to download the data, how to visualize the data. We also have some Python Jupyter notebook
[1:15:53] which we will play with the Google Colab. So if you want to actually work along with us, please make sure you
[1:16:00] have a Google account. And that particular Python notebook will also include an exercise to how we are
[1:16:08] using AERONET data to validate the satellite retrieval of aerosol optical depth. So that is for all the part two.
[1:16:17] And And one of the most important thing as I have been mentioning from the beginning is is AERONET is a
[1:16:27] effort of international collaboration. Although NASA takes the leadership in managing the networks and providing lot of infrastructure,
[1:16:36] but it is a true collaborative collaborative works from hundreds and hundreds people from all around the worlds coming from
[1:16:46] many many institutions, universities, agencies, government, non-government, private and public sectors. This picture just shows AERONET team here at NASA
[1:16:57] Goddard. Goddard. We have AERONET site PIs and site managers who actually manage and ensure that AERONET instrument is working fine
[1:17:09] and operating and sending the data. Our funding comes from what we call US validation program under NASA
[1:17:18] from NASA headquarters. So I would like to acknowledge and thanks everyone actually who directly or indirectly contribute to the whole AERONET program
[1:17:27] because without supports of collaborators and global team this would have not been possible. So I would like to thanks
[1:17:35] everyone for that. And I think that's all I will move over to call for uh homeworks and other
[1:17:46] logistic for this webinar series. Thank you. Thank you very much Dr. Gupta for that introduction to the AERONET network. Um
[1:18:00] just a reminder about the homework and the training certificates. The homework will be issued at the end of the last
[1:18:06] session of this training that's on August 22nd and the certificate of completion will be handed out about two months after the
[1:18:13] end of the course for those who attend all five of the live webinar sessions and complete the homework assignment by
[1:18:19] the deadline. This slide lists contact information for myself, Dr. Gupta, as well as the ARSET program and our sister programs. We also
[1:18:28] encourage you to join the AERONET mailing list by emailing the email address listed here, aeronet-join@lists.nasa.gov if you're
[1:18:35] interested in receiving news and updates about the AERONET network. Finally, here's a link to the AERONET website.
[1:18:46] website. And thank you very much for your attendance and attention and we'll be moving into the question and answer
[1:18:52] portion now. All right. Yeah. Yeah. Sorry, go ahead. Okay, yeah. Well, thank you. you. We'll get through as many questions as
[1:19:07] we can. Any questions we don't answer live will be collected in this document which will post to the website
[1:19:13] later. I will note there were several questions about sharing the slides. Those will be posted on the website
[1:19:19] along with the recording of this training so you can go back and look at things you might have missed. And I will
[1:19:24] note that we had several questions related to uh climate change. If you're interested in that, that's not the focus
[1:19:29] of this presentation, but we have several other AERONET trainings dealing with climate and resilience. Uh so, we
[1:19:35] put links to that as well as the US Global Change Research Program website for for those asking questions about the
[1:19:40] US. US. Uh all right. So, we can take it away with the other questions. I don't know
[1:19:45] if Pawan, you had specific questions you want to answer. Uh otherwise, we'll just go through. Sure. Thanks, Gar. Uh so, what we're
[1:19:54] going to do is um I'll pick some questions and answer them because I noticed a lot of questions
[1:20:02] earlier were actually already answered in later slides, and many of them are actually also going to be answered in
[1:20:10] part two of the presentation. But, we will answer some of the important ones. And just want to
[1:20:17] and note down that uh I have my colleague uh Thomas Eck from AERONET team also in the panel. So, I will
[1:20:24] direct some of the question to him uh who has lot more experience with AERONET. AERONET. Uh he's associated with AERONET from the
[1:20:32] beginning of the program, and he can provide you more uh inside perspective. Okay. Okay. So, let's see.
[1:20:45] Okay, let's go to the question three. So, Gar, are you going to read them Yeah, sure. I'll read them. Uh so, the question is
[1:20:54] what's the distance between the instruments in the DRAGON campaign? And this is related to evaluating the MYAC
[1:21:00] data product, which has a 1-km resolution. resolution. Yeah, so that's great question. So, uh uh the DRAGON deployments uh distances are
[1:21:11] not fixed. It depends uh it varies for every single deployment, and it depends on what is the scientific objective and
[1:21:18] measurement required and for a particular field campaign. Uh it can be a few kilometers uh to tens of kilometers.
[1:21:27] It really varies. Uh the one of the densest uh DRAGON deployment we have done uh was in
[1:21:35] Baltimore-DC area in 2011 as part of Discover-AQ field campaign, uh where we have 40-plus sites actually uh ranging
[1:21:44] from DC-Balt in the DC-Baltimore metro area. So, that's one example of the dense network. Okay, thank you.
[1:21:53] Uh I think we can scroll past some of these were answered in the questions. There's another question about DRAGON.
[1:21:59] Uh in terms of the difference between active and passive remote sensing, basically uh passive remote sensors rely
[1:22:05] on an external source of energy, usually the sun. Active remote sensors provide their own energy, and we'll be learning
[1:22:11] later in this training uh in other sessions about some active instruments as well. Uh we can go to the question eight. Mhm.
[1:22:21] So, what is the region of the world that needs the sun photometers, for example, African deserts or the Mediterranean
[1:22:26] region? region? Yeah, so uh that is correct. We have Africa, Mediterranean, and Asia, where we have less dense network. Uh and
[1:22:35] again, we'll go through all this lot more uh in detail in part two. And if you look the map, you will see the US
[1:22:42] and Europe are most densely networked currently. currently. All right. Um maybe there's a question about again about the maps. Uh maybe the question 11
[1:22:54] about what are the constraints or requirements for establishing AERONET sites? sites? Yes, so there are a lot of uh
[1:23:01] requirements, which uh one is it required a lot of resources to set up and maintain an AERONET station. There
[1:23:09] is an initial investment uh from financial perspective, but there is also commitment from the institutions who are
[1:23:16] hosting the instruments, because instrument required regular checkups, maintenance. Uh the instrument has to come to one of the
[1:23:24] calibration centers every 12 to 18 months. So, we need to facilitate that part also. So, there are several
[1:23:32] requirements. Again, uh when we go to the part two, I'll talk about those little bit more. And anybody who is
[1:23:38] interested in uh more learning more, please email me, and I should be able to provide you more specifics.
[1:23:46] Okay, thank you. Um so, there's a question about urban versus high-altitude sites. They're different. There's not necessarily a preference between them.
[1:23:56] Um Um Yeah. Yeah, both are valuable uh depending on the purpose and what you're looking for. Um
[1:24:04] we don't have any specific preference. Okay. Okay. Uh and we're not aware of any data sets or campaigns that look at AOD at the
[1:24:13] meter scale resolution. As Pawan mentioned, the DRAGON networks are pretty much uh for AERONET at least the
[1:24:19] highest resolution spatial scales that were were explored. Um and then all the methods that uh Pawan presented on are detailed
[1:24:27] in a lot of different publications, and those are listed on the AERONET website for people to look at.
[1:24:34] Um another question, question 15 about the number of sites in India specifically. Again, next week we'll talk about how to go to the AERONET
[1:24:41] website and get a list of active sites there, and you'll be able to use that to determine where the active sites are.
[1:24:48] Um how about uh question 16 on the level of accuracy? So, uh AERONET doesn't measure trace gases. We'll learn about
[1:24:55] the Pandora instruments, which do in part three. But, what about the accuracy for uh aerosols? Yes. So,
[1:25:02] the aerosol optical depth, which is fundamental parameter which AERONET provides, uh the um we uh we provide the
[1:25:10] accuracy of order of 0.01 in the visible, and then around a 0.02 in the in the UV part of the solar spectrum
[1:25:20] from uh And I think let me ask Tom if he wants to add more on that. Tom, do you have
[1:25:26] more? more? Uh yes. Um there's also parameters such as absorption of the aerosol, and um we measure that to an accuracy of
[1:25:37] uh single scattering albedo is the parameter for absorption, and we measure that to 0.03. It's an uncertainty of the
[1:25:46] retrieval, and that's only for optical depths that are moderate to high, so greater than 0.4 at 440.
[1:25:53] And then we measure um uh size distributions quite accurately um for fine mode. Um probably better than point about 0.01
[1:26:03] micron radius uncertainty for fine mode um particle radius. So, that's that's what I That's all. Okay. Okay. Thanks. Thank you.
[1:26:16] Um and then a question about ensuring the accuracy, that's done through the calibration, which was discussed in the
[1:26:21] presentation. presentation. Um in terms of the operational time frame for the instruments, I don't know if if uh you want to answer that.
[1:26:29] Yeah. Yeah. Yeah, so Yeah, so the the instruments uh depending on the location, it operates typically throughout the year.
[1:26:40] Uh if it is in polar region or high latitude, depending on how much sun is available. If there is a snow and ice on
[1:26:46] the surface, and the instruments are covered, then also it can um um uh stop the operation. And during
[1:26:55] monsoon season in some parts of world, if there is continuous rain, then we don't have measurements. Sometimes there
[1:27:01] can be gaps uh when the instrument is um getting calibrated. Uh but otherwise, it's year-round uh measurement. And then
[1:27:10] for calibration, we work closely with the site managers and site PIs from individual institutions um to get the
[1:27:19] instrument back to one of the calibration center, and then we send them back. Sometimes we send one shop
[1:27:25] out uh of the instrument in advance, so that we don't have any measurement gap. So, there are a lot of combination which
[1:27:32] works, and then it every site is unique in that perspective. Okay. Um Maybe question 20 is about with the
[1:27:43] wavelengths that these uh AOD measurements are taken. I know there were several questions related to, you know, why do we measure at 500 and 550
[1:27:51] nanometers specifically? Okay, so let me say this, and then I'll ask Tom to add more. But, I think um one of the reason
[1:27:59] is um 500 and 550 nanometer is kind of a wavelength where solar energy peaks. So, if you look the solar spectrum, that's
[1:28:08] where the the green band that's where the solar spectrum peaks. Uh I think probably that is the reason where most
[1:28:16] model uh calculation solar energy budgets uh is uh are using to actually assess the impact of aerosols on different climate
[1:28:26] and air quality using that particular wave. wave. Um Tom, do you want to add anything on that?
[1:28:34] And then uh most satellite retrievals are made at 550 nanometers, so um AERONET measures at 500, and we can
[1:28:43] interpolate spectrally um between the 500 and 675 nanometer data from uh from AERONET to compare to satellite data for validation of
[1:28:54] satellite data. Okay, thank you. Um question 21 again deals with where the technical information can be found,
[1:29:03] that's on the website. Uh question 22 is again about quality control, that was discussed in the presentation. Question
[1:29:11] 23, I think we we kind of answered that already, why do we measure certain spectral channels. Uh question 24, and I think there was
[1:29:18] another question later is about the top of the atmosphere solar radiance. I know that uh during the slides it was
[1:29:24] mentioned that uh the Langley method is used. If you maybe want to elaborate on that a little bit.
[1:29:30] Tom, do you want to take it? Okay. Um, we we calibrate our master instruments for AERONET at Mauna Loa
[1:29:38] Observatory at um um, uh in Hawaii and so it's a high altitude station mid-Pacific and the optical depths are only about 0.01
[1:29:49] and the stability of the atmosphere is exceptional in the morning. So, we get highly accurate calibration from the
[1:29:54] Langley method. And um, that that accuracy is on the order of a quarter of 1%. 1%. Um, so this is um why we um, why we why
[1:30:05] we calibrate there. It's unitless. It's top of the atmosphere signal for that instrument and so because uh uh AOD is a
[1:30:14] unitless quantity also that we measure. Okay. Okay. Um, maybe question 25 is a question about capturing local sources with
[1:30:25] AERONET. I know this is not necessarily what they're designed to do. I don't know if you want to discuss a little bit
[1:30:32] about the limitations there. No, I think that's a great question. So, it all depends on what is in the path of
[1:30:41] sun and AERONET instrument, right? So, and it's point measurement. Like satellite data are typically averaged over certain horizontal space.
[1:30:52] Uh, so they cover certain footprint on the earth's surface where AERONET is much more like a point measurement. But,
[1:30:58] they they aerosols are often homogeneous in a small small uh spatial scales. So, if there is a
[1:31:06] constant source of local emissions and if it is pumping aerosols in the atmospheres, atmospheres, then it will be measured by AERONET um
[1:31:16] It really depends on the strength of that source um whether we will be able to capture it or
[1:31:21] not, I think. And then like uh mentioned here, wind directions and other factors can play a role there.
[1:31:30] Okay. Um, questions 26 and 27 are also about the the wave specific wavelengths used. I think we addressed that. Looks
[1:31:38] like also question 28. Um Um Uh, question 29 I it's about the shape of the earth. I don't know um
[1:31:48] it doesn't really affect things so much um um for AERONET at least. That is correct. Yeah. So, question 30
[1:31:57] maybe um So, we know that there are or there's evidence that PM1 is is very closely related to health effects. Is there any
[1:32:05] relevance in the uh data collected by AERONET for inferring PM1 rather than PM2.5? Do you know about that?
[1:32:14] Uh, I think let me refer to Tom. Tom, do we have more sensitivity towards very fine particles, ultrafine particles?
[1:32:31] Tom, can you hear? I'm sorry. I was I was muted. Um Okay. We have uh more sensitivity to the size
[1:32:39] of fine mode particles in our size distribution retrievals. In terms of um AOD we have equal um sensitivity to both um
[1:32:51] fine and coarse mode particle sizes. So, um um So, uh it depends on what product's being used. If it's the retrieval
[1:33:00] of the size distribution or they're not the AOD that's being used. But, um uh uh we do have a tremendous sensitivity to
[1:33:10] fine mode particle at both optical depth and size. Okay, thank you. And I guess just a reminder, you know, PM1 is a mass
[1:33:19] measurement. Uh, AERONET's collecting optical depth which is not a mass measurement. But, as Tom said, uh AERONET is sensitive to those fine mode
[1:33:27] particles that contribute to the PM1 mass. mass. Um, how about question 31? What about polar regions where there's a a very
[1:33:36] shallow angle to the sun? Does that affect How does that affect the the measurements? measurements? Uh, I think that is again Tom's
[1:33:43] question. question. Um, we have actually greater sensitivity or greater accuracy in the polar regions um, because um of the
[1:33:54] large path length through the atmosphere. So, the uncertainty in um in optic aerosol optical depth measurement is proportional to um
[1:34:05] uh one over the path length or one over the air mass. So, um So, we actually have uh more accurate
[1:34:12] data in the polar regions even though the optical depths are typically low there. Um, there's the ability to measure
[1:34:20] um with higher accuracy in polar regions. Okay, thank you. Um, in terms of calculating PM2.5 from AOD, we
[1:34:33] uh in the introductory training we recommended as a prerequisite for this. We do talk about that a little bit. Uh,
[1:34:38] I don't know if you want to add anything to that now or just leave it at that.
[1:34:42] Yeah, I I think so. I don't know if that we do have some old uh ASTER training we did number of years
[1:34:51] ago focused specifically on uh calculating PM2.5 from AODs. So, I would like for folks who are interested
[1:35:00] can explore some of the ASTER older training uh I think in before 2000. Okay. So, I'll I'll we'll put a link to
[1:35:08] that in in the response to this question. And again, the document's going to be posted to the website after
[1:35:13] the training. Um, we're a little bit past the scheduled end time. We'll go I think until uh 45 minutes past the hour. So,
[1:35:21] another 10 minutes about. Um, and again, any questions we don't answer live we'll write up the answers and post the
[1:35:27] document to the website. Um, here uh question 33 is another question about Dragon. Um, I think we basically addressed this
[1:35:35] before. But, just you know, what's the advantage of of this high spatial-temporal spatial-temporal network and what's the comparability to
[1:35:43] satellite footprints? I don't know if you want to add anything to that or just move on. Uh, I I think yeah, the bottom line is
[1:35:50] if you want to capture the small scale spatial variability um specifically in urban locations which can be high
[1:36:01] depending on different road system, different traffic pattern, different industry locations. And some of these can be very useful actually. So, I think
[1:36:11] that is one of the main main purpose to to deploy these. And they can also be very useful because when you're
[1:36:19] comparing with the satellite data, often satellites uh one pixel or multiple pixel of satellite data are compared
[1:36:26] with one particular AERONET locations. But, in this case this gives you an opportunity to average several AERONET
[1:36:33] location within the footprint of satellites. So, you have little bit better better uh measurement or representation of
[1:36:41] satellite footprint from multiple AERONET site rather than one AERONET site. So, I think that that helps. Mhm.
[1:36:49] Okay, great. Uh, question 34 in the images of the AERONET instruments, there were two collimators. Uh, it looked like there were two
[1:36:56] collimators. So, the question is what's the purpose of the second collimator? Tom, do you want to take it?
[1:37:03] Sure. Um The The uh there's two collimators because there's essentially two separate instruments in one. There is a
[1:37:11] silicon detector for um uh most of the channels from the UV up to 1020 nanometers and silicon cannot
[1:37:22] detect higher than 1020 nanometers or 1050 nanometers. So, then the second collimator is for the longer wave the
[1:37:30] longest wavelength which is the 1640 nanometer nanometer wavelength which we have an InGaAs detector, indium gallium arsenide
[1:37:39] detector. detector. So, it's a separate detector um and a separate um filter that's measured um in the second collimator
[1:37:50] and it cannot be measured by the silicon side. So, essentially you have two instruments in one sensor head. Um, one
[1:37:57] for the bulk of the wavelengths and the other for the 1640 nanometers. Okay, great. Um, so question 35 we answered already.
[1:38:07] Question 30 36 about applying for more sites, I think you can reach out to to Pollen or the other uh AERONET leads uh
[1:38:14] with requests for setting up new sites. Uh, maybe question 37 about the standard working schedule of AERONET. Um
[1:38:23] How do you decide on the the pointing angles and the schedule for the different measurement modes? Yeah, Tom, I think let's let Tom answer
[1:38:33] this. this. Okay, the schedule is dependent upon solar zenith angle and the instrument calculates the solar zenith angle based on the latitude
[1:38:44] longitude that's entered into the instrument and based on the accurate time it gets from the GPS. So, um
[1:38:52] solar zenith angle is used to to measure uh through the Langley period in the morning which um we start measurements
[1:39:00] at air mass seven. Um, Um, seven path lengths through the atmosphere. atmosphere. And um and then um we go through the the
[1:39:10] day based on a predetermined schedule. The AOD measurements are made every 5 minutes. minutes. And the sky scans are made every hour.
[1:39:21] So, we have almucantar scans and hybrid sky scans that are made hourly. But direct sun measurements of AOD are made
[1:39:30] every 5 minutes. Okay, thank you. Um question 38 about the Angstrom parameter, can it have negative values?
[1:39:40] Uh I think yes. Typically, when you have very large particle domination, then we see that. Tom, do you want to add anything?
[1:39:49] Yeah, that's correct. We can see negative values. It has to be extremely large particle dominated. Uh theoretically, the lowest value you
[1:39:57] can get is minus point two. But we we don't see that we've never seen values really below
[1:40:06] negative point one from the network. Um partly because dust um also exists in different sizes. It's not always just super micron size.
[1:40:17] There are also middle mode and and fine mode size dust particles. particles. Okay, great. Um question about the the presence of
[1:40:27] clouds. clouds. How are they removed? I want to if you could talk a little bit maybe about the
[1:40:31] cloud masking algorithms. Yeah, sure. So, clouds are detected by cloud mask algorithms. That is based on what we
[1:40:40] call a triplet measurement. So, we take multiple measurement within 1 minute of time interval. And those measurements are used to
[1:40:48] calculate the standard deviation in each channel and those are used to put some kind of thresholds to you to
[1:40:54] mask the clouds. So, clouds are typically highly variable in that 1 minute and aerosols are not that much
[1:41:01] variable. So, that is assumption we use to actually do the masking of cloud. And in addition to that, there are other
[1:41:08] checks which happens in the algorithms to do that masking. Uh for the once the cloud is detected by the
[1:41:15] algorithm, we discard that data and that is not used for aerosol AOD retrievals or AOD optical depth
[1:41:22] calculation or retrievals of other aerosol parameters. Okay. Okay. Question 40 discriminating between absorbing and non-absorbing aerosols. Okay, and I think let Tom answer that.
[1:41:37] Okay, that's basically measurements of of sky radiances in the sky scans. And we have sensitivity to absorption by looking at the intensity
[1:41:49] of scattered radiation. We have the optical depth goes into the algorithm. And the sky scattered angular distribution of sky radiances. So, we
[1:42:00] have um good sensitivity to the absorption magnitude between weekly absorption and strongly absorption absorbing aerosols and any anywhere in between that scale.
[1:42:12] Um but the optical depth has to be moderate to high in order to have that sensitivity. So,
[1:42:18] um it's required that optical depth at 440 nanometers is greater than point four four to have a sensitivity that's typically
[1:42:26] useful for most scientific applications. Okay, great. Um Um Question 41 is about averaging between the day and night measurements. I guess
[1:42:39] the maybe the question is is there meaning in averaging those together if you have night time measurements
[1:42:44] available as well? No, I'll let Tom answer that again. I think. think. Well, it depends. I mean, there are
[1:42:52] sites where there's a lot of diurnal variation variation throughout the day and night. It depends on what the application is, but
[1:43:00] um often it's interesting and useful to know know what the variation is throughout the day and then throughout the night. We've
[1:43:08] only recently um taken the provisional status off the night time measurements. So, um there is more useful night time data
[1:43:16] currently available. It is still not as accurate as the daytime data cuz we can't do all the
[1:43:23] cloud screening um techniques cloud screening checks at the night time data that we do in the daytime.
[1:43:31] daytime. Okay. So, it sounds like in principle, yes, they're comparable, but it's a relatively new the night time products
[1:43:36] are relatively new. So, that hasn't been looked into as much. Um possible sources of of sulfate aerosols, there could be several fossil
[1:43:46] fuel burning, biomass burning, volcanic eruptions. eruptions. Question 43, the influence of the or the presence of absorbing particles on the
[1:43:54] Angstrom coefficient. Um Tom, do you want to take it? Sure, Sure, it does have an influence on the
[1:44:01] Angstrom exponent, but primarily, the main driver of the Angstrom exponent is the uh spectral difference in scattering
[1:44:10] that that dominates the the optical depth. depth. Typically, uh scattering is is anywhere from 80 to 100% of the optical
[1:44:21] depth. So, absorbing absorption does influence the Angstrom exponent, but it's more on the order of typically 10% or less.
[1:44:31] Okay. Okay. Um so, question 44 is not I think relevant to this network. Um question 45, 45, uh we talked about, you know, the
[1:44:41] Angstrom parameter is calculated it's provided um by the network. Question 46 um is about I guess comparability in the in
[1:44:52] the Angstrom exponent between AERONET and MAIAC data products. Um I don't know if that's something you can comment on. Yeah, so I'm not 100%
[1:45:03] sure what pair of wavelength MAIAC use for Angstrom exponent. Uh but Angstrom exponent is always calculated by using
[1:45:11] two pairs or more than two wavelengths. Uh and AERONET provides actually Angstrom exponent for different pairs of
[1:45:18] the wavelength. Uh I'm not sure what pairs MAIAC use. So, depending on their pair of the wavelengths, uh it can be
[1:45:26] comparable or it can be very different. Okay, thank you. And then I think we'll finish up just with question 47. Just as
[1:45:36] a reminder, AOD and PM2.5 are not directly comparable. AOD is an optical measurement of the atmospheric column
[1:45:43] and PM2.5 is a is a in situ mass concentration measurement. So, while you'll see and we discussed in this
[1:45:50] training and we'll reference that that prior training when we talk about how to maybe estimate PM2.5 using aerosol
[1:45:58] optical depth, there are methods whereby you can make those estimates. There are correlations between the two in many
[1:46:03] circumstances, circumstances, but it's important to emphasize that these are not directly comparable. So, you can't necessarily compare the
[1:46:10] accuracies of them directly. So, I think with that, as I said, we'll we'll we'll end for this the session for today.
[1:46:19] And again, we'll post the answers to these these questions on the website in few days time. time. So, we look forward to seeing you again
[1:46:28] for part two, which is going to happen next week on Tuesday. So, thank you very much, everyone, and have a good rest of
[1:46:35] your day. Thank you, Carl. Thank you, Tom, for helping. Thanks everyone for attending. See you next week.
