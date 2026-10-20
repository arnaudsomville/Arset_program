# Crop Classification with Time Series of Polarimetric SAR Data, Part 2/3

`https://www.youtube.com/watch?v=BK4S1IXD4c4` · id 51 · 2:30:53 · module 20 — Crop Mapping using Synthetic Aperture Radar (SAR) and Optical Remote Sensing

[00:01] foreign foreign welcome to the second part of the rset training crop mapping using synthetic aperture radar and Optical remote
[00:09] sensing sensing on Tuesday April 4th we learned from Dr Mourinho how to pre-process Pulsar data run python code for machine learning of
[00:19] multi-temporal Pulsar data to classify different crops and evaluate the accuracy of the classifiers today's webinar will be focusing on crop
[00:29] classification with a Time series of optical and radar data from The Sentinel 1 and 2 platforms today's guest trainers
[00:37] are Dr Christoph oshtir and matte rachich from the University of Ljubljana Slovenia there will be one homework assignment
[00:46] for all three parts of the training answers must be submitted via Google form which can be accessed from the
[00:52] training page on the rset website homework will be made available on April 11th with a due date of April 25th
[00:59] a certificate of completion will be awarded to those who attend all live webinars and complete the homework
[01:05] assignment by the deadline you will receive a certificate approximately two months after the completion of the course from Marines
[01:12] Martin after participating in this training attendees will be able to explain how polar metric parameters are used for
[01:21] crop condition assessment demonstrate how to perform Sentinel 1 SAR pre-processing to derive quasi-polarimetric parameters perform a calibration of a sar based
[01:31] vegetation index to ndvi monitor crop growth with multi-temporal polarimetric SAR data from Sentinel 1. examine crop growth using a canopy
[01:41] structure Dynamic model and time series of Sentinel 1 imagery and classify crop type using a Time series of radar and
[01:50] Optical imagery it is now my pleasure to introduce the guest trainers Dr Christopher and mate ratic ratic Dr Christopher works at the University
[02:02] of Lilliana faculty of civil and geodetic Engineering as a professor of geoinformatics and remote sensing he received his PhD from the University of
[02:12] Lilliana and was a postdoctoral researcher at the center Nacional de research scientific in France he has specialized in the use of optical and
[02:21] radar satellite imagery with a particular focus on Raider interferometry classification time series analysis and big data processing
[02:29] with artificial intelligence he has LED or collaborated on projects funded by the European Union the European Space Agency the inter-american
[02:39] development bank and a National Geographic society and other National and international organizations applications of Earth observations range
[02:48] from Agriculture and Forestry to natural disasters water detection societal environmental impact and archeology is an assistant and PhD candidate at the
[03:02] University of Ljubljana faculty of civil and geodetic engineering his research focuses on the intersection of remote sensing and machine learning
[03:10] he started his academic Journey at the faculty of computer and information Sciences where he gain extensive experience in data manipulation
[03:18] algorithms and machine learning during his Masters he combined these fields to explore the field of satellite image time series and since then he has
[03:27] been utilizing his knowledge from both fields to tackle the range of challenges in Earth observation uh thanks Sean for the introduction my
[03:40] name is Christopher steer I'm coming from the University of Ljubljana and in the next couple of minutes I will be
[03:48] presenting the crop classification with time series Optical and radar data together with my colleague mate ratsich and I would also like to
[03:59] mentioning Bothwell who has helped us with the presentation and with the preparing of Time series time series
[04:07] data so to begin we will start with satellite image time series we will Define what satellite image time series
[04:16] are then we will see where we where we can get this time series we will focus a
[04:22] little bit on the Copernicus and the Sentinel series of satellites we will Define analysis ready data we will do
[04:30] the time series analysis and then we will focus on Sentinel hub we will use sentinel half SD platform for processing
[04:39] the data so we will introduce the Sentinel hub statistical API machine learning capabilities especially EU learn and EO workflow that are that is
[04:50] built on top of of your learn so let me start with the slide that you have probably seen many many times this
[05:03] is the sustainable development goals and in those 17 sustainable development goals space is present almost everywhere I would like to invite you to have a
[05:15] look at the unosa web page space for sdgs and see how how space is being involved in the individual goals
[05:25] especially Earth observation is present in for example zero hunger clear water and sanitation life on on land live
[05:35] below water so almost everywhere but this was not the case in the beginning in the beginning we have to go many many
[05:44] years back to see what has happened and how we have come to the situation that we are using Earth's observation or
[05:52] remote sensing to track to to monitor the Earth for a long period of time but it was not until 1970s when landsat was
[06:04] launched and land such changed changed on how we look at our planet we're in the beginning of the Imaging
[06:13] with landsat we are able to see what has changed in our environment and the whole world actually in the last 50 years but
[06:23] what I believe is also a very important and one of the most important things that has happened is the development of
[06:31] Sentinel Hub Sentinel Hub was developed in 2000 it was launched in 2016 and it actually changed how we process space
[06:43] Earth observation data by simplifying every aspect of those of this of this processing by enabling processing huge
[06:53] amounts of space data without downloading the data just doing it on the cloud with a simple simple scripts
[07:02] and so that almost everyone can process terabytes of petabytes of of data since then many similar platforms have been
[07:13] developed we have seen the expansion of Google Earth engine capability the the launch of Microsoft planetary Computing
[07:21] and the others yeah perhaps also to mention is the Copernicus data access service that was launched launched this year to simplify
[07:32] the access to the Copernicus uh Copernicus data okay so we have long and dense Time series series uh satellite image time series or six as
[07:48] it is uh it is abbreviated and you will see this a lot are available uh for the
[07:55] last 50 years medium and high resolution data is available free what does it mean medium and high resolution data high
[08:04] resolution data is the data that is available at 10 meter resolution so basically landsat and Sentinel uh they
[08:13] uh resolution data we have uh landsat archive that is completely open uh in the year 2008 there was a decision
[08:23] to open the arc the archive back to the to the first first images that were captured by landsat and this enables us
[08:32] to see what has changed in on our planet in the last 50 years but when the air
[08:38] the landsat archivers made open this made made an explosion in the exploitation of data since 2008 everyone
[08:49] is able to process time series of data when the European Union was designing the Copernicus system there was a lot of
[08:59] discussion of how to disseminate this data should the data be free should the data be uh should the data be payable
[09:07] but at the end it was a decision and I believe it was a very important decision to make Copernicus data complete free
[09:16] and open so when we begin with landsat we have the data back to the 1972. however those data is not is not very
[09:29] dense we have landsat data every 16 days and in the last decade or almost a decade we have data that is much denser
[09:40] we have weekly data we have daily data and this enables us to process the the the the information all on the ground in
[09:49] on a completely different different way and we also have harmonized satellite image time series harmonized landsat and
[09:58] Sentinel data harmonized Optical and radar data harmonize Sentinel and planet planet data and we also seeing harmonized Optical and radar satellite
[10:10] image Time series so I already mentioned several times everything happened with the landsat with the landsat in 1972 And we have
[10:23] image of every area on the on the land every 16 days however landsat is an optical satellite and
[10:33] Optical satellites are very much affected by clouds and this is this can cause difficulties difficulties when we are doing time
[10:43] series analysis therefore there has there have been many initiatives to densify those time series to make those
[10:52] times serious let's say a weekly time series or even Daily Time series and the European Union has launched the
[11:01] Copernicus program so Copernicus is the program that has been financed by the European Union or its member states and this currently the
[11:14] most simplistic Earth observation system or system of systems it is composed over from our space component with a series
[11:24] of Sentinel satellites from Sentinel 1 to Sentinel 6 and it is composed of Copernicus services in addition to that we have in
[11:35] situ component the Copernicus Services which are maybe not as much known as the Copernicus satellites are land monitoring Emergency
[11:46] Management atmospheric monitoring marine environment monitoring climate change and security there are many different organizations who are providing these services to the
[11:58] end users and by providing these Services means that these services are simple so that everyone civil protection rescue rescue
[12:09] organizations organizations farmers can use this uh these services this is of course driven by users users are defining the what Copernicus should
[12:21] do and what particles should not do and they are defining the program at a higher level for the space component we have the
[12:30] European space agency and units at European meteorological satellite organization who are defining and building the satellites actually Isa is
[12:41] being responsible for for for for for the satellite launch launches and uh building and also the operation
[12:49] operation of the of the satellites and from in the space component we have a series of satellites
[12:56] coming from Sentinel one Sentinel two three four five precursor and five and the Sentinel 6. in addition to that Copernicus is
[13:08] providing data dissemination infrastructure infrastructure because because if we have such good quality data if coming from we have to put this data into the heads
[13:24] of people and by providing simple to use data dissemination infrastructures infrastructure we are able to give everyone access to this valuable
[13:35] valuable data so in the Copernicus space component we have a serious subset of satellites each satellite each satellite group is has at
[13:49] least a pair of satellites like Sentinel one A and B which is for radar observations Sentinel 2 A and B for
[13:57] higher solution Optical observation Central Sentinel 3 A and B for medium resolution imaging and altimetry Sentinel 3 4 A and B for the observation
[14:09] of the atmosphere from geostationary orbit Sentinel 5 and with the precursor satellite for the observation of the
[14:17] atmosphere from low orbit and what is really important here is this is just the first generation of the setups so
[14:26] every satellite will be replaced before the end of their their life cycle by a new setup in our webinar we will focus on the
[14:37] Sentinel run a and b and Sentinel to A and B because we will be doing mostly radar and high
[14:45] resolution Optical Optical observations so let me begin with Sentinel one it is a radar satellite the first one
[14:55] was launched in 2014 the second one in 2016 and it is an observation of land forests water soil and agriculture it is
[15:07] also very important for Rapid mapping in case of natural disasters Sentinel one is also capable of doing ship traffic
[15:16] observation observation of ice and sea it is a c band synthetic aperture radar we will see what what does it mean for
[15:24] the observation of vegetation in a couple of minutes and it is observing the Earth in a 250 kilometer threat
[15:32] swapped with a resolution of 5 by 20 meters which can be resamped for example to about 12 12 and a half meter it is
[15:42] observing the Earth every 12 days this is true for each of the satellites and in the case when we had two satellites
[15:50] this time time revisit time was six days Sentinel one is also very important because of interferometric radar because
[16:01] this enables us to observe the surface motion and also the vegetation if we are taking into account the coherence
[16:12] this is a typical radar image where it's not very exciting it's black and white this is just one plural design
[16:20] polarization and what you can see on this regular image is of course the the relief which is which is very clearly
[16:26] seen on on the images you can see water bodies here you can see water bodies over there this is these are actually
[16:33] flooded area you can see an urban area here a river over there and different different agricultural fields in that
[16:42] area the area here is covered with forests and this is uh not clearly seen on radar image on a radar image like
[16:51] this this Sentinel 2 on the other head in Kent is an optical satellite and the first one
[16:57] was launched in 2015 the second one in 2017 and it is actually the satellite that was specifically designed for
[17:06] observation of vegetation so it is a satellite designed for observation of land water socks surfaces coastal areas also and soil but the main
[17:19] focus was vegetation and agriculture the orbit of Sentinel 2 repeats every 10 days with the pair of two satellites
[17:30] there's the crystalline constellation of uh of two satellites it repeats every five days the main scanner is the multispectral
[17:38] Imager Imager which has a sort of almost 300 kilometers with different resolutions from 10 20 to 60 60 meters
[17:50] so if we observe the the bands of Sentinel one A and B we see that they are almost identical satellites almost
[18:00] but not completely they are comparable very very well comparable so they have bands that are very similar uh but they
[18:10] are not exactly exactly the same so this is the these are the spectral curves or Spectra signature for different kinds of
[18:20] materials like soil vegetation and water and here you can see the bands of Sentinel 2. we have one back or a couple
[18:30] of bands which have four bands with 10 meter resolution which are in the visible part of the Spectra and near
[18:37] infrared part of the Spectra visible part so that we have visible uh RGB images and new infrared red part because
[18:45] of the vegetation this is a typical Sentinel two image with the in the indivisible part of the Specter the same
[18:54] area that was covered before it looks much nicer so you can see here forested area you can see again the urban area
[19:02] water can be seen but not not that good as it was on the optical images and you
[19:08] can see a lot of Agriculture areas here so you can see different stages of Agriculture and different different
[19:17] times however Sentinel 2 is an optical center meaning that it is affected by clouds this is the statistics of cloud coverage
[19:30] for the area of Slovenia where we have some areas that have some images that have less than 10 percent of of cloud
[19:39] cover some images that have between 10 and 30 percent and some images that have more than 30 percent of cloud cover
[19:48] we are we we are not able to see to get all the time steps that are available we
[19:55] have we are theoretically able to acquire an image for the Sentinel 2 every five days and even more frequent
[20:02] if we are at the latitude that are uh farther to the north and to the South but in practice cloud coverage is
[20:10] prohibiting this observation so let's go back to time series and see how we generate Time series how this how
[20:22] time series are construct well what what actually is time series this is a set of images taken over the
[20:32] same area of interest at different times they can the images can be taken by the same or multiple sensors we can just
[20:41] have Sentinel 2 we can just have landsat we can just have planet and the uh the images are taken with the same sensor or
[20:51] we can combine this data together and we are getting a stack that we are able to process at the time series and
[21:00] time series enable us to understand how Earth is changing it they enable us to determine what causes the changes and predict the
[21:13] future changes or what will happen according to what has happened in the past past in addition to that time series enable
[21:22] us to discriminate features there are certain features on the ground that we can only discriminate by time series
[21:30] analysis for example compare some some wheat and grassland at certain period of time we are we are not able to
[21:40] discriminate discriminate between wheat and grassland because they look the same they have the same amount of reflection
[21:48] in near infrared the same amount of reflection in green and red but if we take an image a couple of weeks later a
[21:56] month later we are able to discriminate these two these two land cover classes so grassland and wheat or corn and so on
[22:06] because of the of the of the typical time development of of vegetation so let's have a look at the time series
[22:17] of Sentinel data here at the top you have the date and here it's the same date on the left you have the classical
[22:26] new infrared red green visualization and on the right you have ndvi I was trying to construct a Time series over the
[22:36] whole year and I was selecting only cloudless images so you can you can see very good images and still there pop
[22:47] some images with clouds like this one here or this one here and what is even more important If You observe this date
[22:54] here you can see that in certain amounts of certain amounts you don't have good quality data so we are missing data in
[23:03] certain certain amounts the time stamps are not following let's say five days interval but there there can be some
[23:11] gaps in between if we do the same with Sentinel one data you can see here the date and you will
[23:20] see that the date is incrementing by seven days so I have selected one image every seven days
[23:28] and I could even select more than one image every seven days so for the radar data we can we can really have or we
[23:35] really have dance time series here you have the vertical horizontal foreignization so you see the differences between these two
[23:46] and it is really important that the radar is not influenced by clouds and we are getting dense time series because
[23:53] every image can be included in the in this in this time series so to be able to process time series we
[24:01] have to have something that is called analysis ready data committee on Earth observation satellites defines analyzes ready data as satellite data that have
[24:12] been processed to a minimum set of requirements and organized into a form that allows immediate analysis with the
[24:21] minimum of additional user effort and interoperability both through time and with other data sets blah blah blah it's called data which is
[24:32] ready to use the end users like myself and you we don't want to bother with all the processes that are behind we want to
[24:40] have data that is ready for the analysis we want to have data that has been pre-processed in a form that we can use
[24:49] Python scripts or any other other scripts to analyze the time series of data efficiently without doing a lot of
[24:59] pre-processing pre-processing so what does it actually mean Analyze This ready data and who's providing your analysis ready data well in the past the
[25:08] users had to do this by themselves but nowadays data providers are generating Rd data and of course Rd what is Rd
[25:17] depends on applications the first thing and the most important thing is of course image clipping we have to get a data cube of the same area
[25:29] this is very important because we are observing observing time series for a certain area but we have to do also
[25:36] masking masking usable and unusable data masks are probably the most important factor in generating analysis Trend data because
[25:46] for the for the successful analysis we have to know where do we have unusable data where in our time series we should
[25:55] make a a jump and not count data that is misleading because if we have clouds on the image this is of course not the data
[26:05] that we would like to analyze with time series analysis we just want to put not a value at that moment in time
[26:16] sometimes atmospheric correction is done so the the the effect of the atmosphere is eliminated we have to do the pixel
[26:25] alignment alignment because we don't want to detect changes in Time series data because the pixels are misaligned and the pixels are
[26:33] misaligned depending on the system for a couple of of meters or pixels and this is a factor that we have to correct
[26:42] before doing the the uh the processing and we have to do the sensor alignment or sensor harmonization I already
[26:52] mentioned several times The Sentinel and landsat and also the planet scope and the end user for example myself I don't
[27:01] want want I don't want I don't think to know where the data comes from I just want to know
[27:06] what is the reflectance what is the end UI at a certain period of time on a certain timestamp and therefore we have
[27:15] to join this data together into harmonized time series data an example of this harmonization is the is the
[27:26] landsat Sentinel harmonized time series where we are taking landsat data and Sentinel to data where we are doing atmospheric correction
[27:36] geometric resemble or sampling normalization bent bent adjustment and then we are generating harmonized time series products in the
[27:48] in the grid of Sentinel 2 for example with the resolution of landsat with with a spatial resolution of landsat but at a
[27:57] much better Templar temporal solution and such such combined time series is really a valuable tool for for the
[28:05] analysis analysis so what we have to do with the carbonization when we have two different sensors like the case here or for
[28:13] Sentinel uh for Sentinel 2 and landsat 8 you see that the timestamps are different of course because lens at 8 is
[28:23] taken images every 16 days and uh Sentinel 2 is taking the images every five days and this dance time series of
[28:30] data enable us it enables us to to do a much better interpretation okay what do we see on radar and Optical
[28:41] images regarding the vegetation this is also a very important important factor we have seen this spectral signatures uh
[28:51] in the past and you probably very aware of those uh those curves and here you can see the typical response of
[29:00] vegetation to different wavelengths we are seeing a strong reflection in green a very strong reflection in near
[29:08] infrared caused by chlorophylling the leaves and we do see some absorption bands here caused by different compounds
[29:15] or chemicals like water present in the vegetation or water presence in the soil like here and this is what we are trying
[29:25] to observe with multi-spectral data with multi spectral data we are generating or collecting bands at different waves
[29:37] but indices are those who take the advantage of this wavelength wavelength characteristics characteristics so for example we are using vegetation
[29:48] index or any other index to observe the meditation uh regarding the radar the situation is even more complex for the radar we have
[30:02] different frequencies we have different bands as as they are called The Frequency the frequency or wavelength can be three centimeters six centimeters
[30:10] 24 centimeters or 65 centimeters and depending on this the radiation is being scattered either on top of the
[30:20] vegetation like in the expand or at the bottom or in the middle of the vegetation like for for element and
[30:27] pivent or somewhere somewhere in between like the situation is for the seabed so for the radar back scattering radar
[30:36] back scattering is influenced by the characteristics of the radar and of the surface we have the wavelength and
[30:43] frequency we have the polarization either horizontal or vertical or combination of those two the radar has a typical incidence angle
[30:53] and of course a typical resolution these are all the characteristic of the radar system and the user cannot influence
[31:00] them and then we have the surface we have the surface with different structure with different phenomena on
[31:07] the surface with different roughness of the surface with different conductivity and the electricity of the surface and
[31:14] with different orientation for radar back scattering the orientation of the fields of the structures on the ground can change the
[31:24] the back scattering drastically or this is what we can observe on radar images one of the features that is extremely
[31:37] valuable with radar is also a radar interferometry interferometry in addition to back scatter radar is also measuring the distance between the
[31:48] satellite system and the ground so radar actually measures the distance from the satellite to the ground and
[31:57] this can uh this can then be used for different purposes purposes uh especially if we are observing
[32:06] Imaging images taken from two slightly displaced orbits if these two orbits are displaced by a couple of meters up to a
[32:15] couple of hundred meters we can we can process the data in uh interferometric way way in that case we have phase
[32:26] differences between these two between these two images that are caused by different factors the first one is
[32:34] Parallax because the images are not taken from the same position the second one is elevation differences we can observe survival movements we can
[32:45] observe or we are observing atmospheric phenomena phenomena if we eliminate this atmospheric phenomena phenomena and We Know The Parallax because
[32:54] the position of these two of the two satellites or the image where the images have been taken
[33:00] we can observe for example the elevation on the on the ground if the surface surface movements are not present or
[33:08] Surface surfway surface movements if we do know the elevations so radar interferometry can give us elevations in the in the meter accuracy
[33:20] and displacements in the millimeter accuracy accuracy but for observing the vegetation a side product of this interferometric
[33:29] processing is extremely popular or important and that is the coherence coherence is uh is a measure of how well
[33:43] two image pairs correspond to each other the coherence of an insert data pair represents the magnitude of the complex
[33:51] correlation between two images on a pixel by pixel basis meaning that for each pixel we have a
[34:00] correlation between the images taken a couple of days apart this is the case of Sentinel one where the images are taken
[34:09] six days apart days apart and 18 days apart and you can clearly see how the the coherence is
[34:19] getting lower and lower and coherence is a measure of amount of noise cylinder program and coherence is
[34:27] a measure of the development of vegetation because in 12 days or 18 days the vegetation is being developed or it
[34:37] has is changing and therefore the coherence get gets lower and lower it Still Remains very high in urban
[34:45] areas because there's not not a lot of change over there but wherever we have vegetated areas we are getting lower
[34:54] coherence with the longer longer time span so if we have a change of coherence between two images it means that
[35:03] something has happened to the vegetation either registration has grown or the the the crops have been have been harvested
[35:11] and so on so the inter the the coherence of the inter program is a direct proxy of the development of vegetation
[35:22] yes but with Optical data people are mostly using ndvi and is ndvi enough or do we have to use
[35:32] other indexes so there exist many vegetation indexes the most the basic one is the classical vegetation index which is a ratio
[35:42] between near infrared and red since this this index is not normalized ndvi or normalized difference vegetation index
[35:52] is being used uh very often so the difference between near infrared and red divided by the by the sum near end near
[36:03] infrared plus infrared is the most commonly used vegetation index it is normalized to -1 and 1 and it is very
[36:13] easy to interpret in addition to that many other indices exist like enhanced meditation index soil adjusted and DVI
[36:23] and others and others if you have a look at the index database you will see many of those indexes listed including with
[36:32] the equations and I suggest that you have a look at this index database and to see what indexes are available and if
[36:40] they are suitable for your purposes so this is just an a shorter list from index database with the agriculture
[36:51] where you can see the first 16 indexes with different equations uh suitable for different sensors for suitable for
[36:59] different different applications and of course by by so many indices the the very important question is which one is the best or maybe if I
[37:12] say which one is good good enough so if we are looking at the Sentinel 2 bands here you can see this is a smooth
[37:22] curve of the development for one year you can see that this reflectances increase during the summer and decrease
[37:30] in in the winter and they are lower in the beginning of the season but they almost all follow the same the same
[37:39] curve and here you have the same situation for different indices the first one is ndvi and you have the ndvi
[37:46] here uh very easy to end interpret curve in the beginning of the Season that it increases and then it decreases at the
[37:56] end of the season and more or less all the other indices follow the same the same curve for the same pattern they are
[38:05] just shifted a little bit and probably they are very much correlated and this is true if we see the correlation between 22
[38:16] images 22 indices here ndvi is the first one so the correlation between ndvi and the 21 remaining indexes that are listed
[38:26] here you can see that they are not not just just slightly correlated they're extremely correlated or they are almost the same
[38:36] so to answer the question from the beginning yes and the UI is probably probably enough okay we have defined the time series we
[38:48] have defined how we generate time series now we have to go to the time series analysis for reputation for recitation
[38:55] mapping here you have a tree and the yearly development of this tree in the spring we have very bright green leaves
[39:04] then we have uh in in summer there are stars starting to uh to Brown a little bit and then you have autumn and winter
[39:13] where there are no tree there are no leaves on the tree if we are taking the observation of ndvi we have seen a
[39:21] yearly cycle so the uh the in in the beginning of the year the ndvi is low then it starts to increase it is it gets
[39:31] the highest point and then it decreases in Autumn this is for the northern northern hemisphere of course
[39:40] from this curve we can Define the vegetation parameters we can Define the beginning of the Season we can Define
[39:49] the end of the season of course the length of the season the the base the base value here the the middle of the
[39:57] season with the highest value the maximum value here and of course the amplitude amplitude of this development
[40:05] and this enables us to observe different vegetation types this enables us to observe different crop types and to
[40:13] define the parameters for the crop crop growth growth just remember we have a very very green leaves or green leaves when we have
[40:24] brown red leaves we have yellow leaves and brown leaves and this is all related to spectral signatures of these leaves
[40:33] so then the ndvi changes this is for the green leaf and for the other leaves the spectral signatures are a little bit
[40:42] different and meditation index which is a ratio between near infrared and red reflects this development very very very
[40:52] well well okay let's have a look at what we see with the with the development of vegetation
[41:01] vegetation this is the the ndvi development for European beach pagos silvatica and here below you can see the images of the same
[41:11] tree during the whole the whole year uh why is this important because I want to uh to you to have in mind that what
[41:20] we see with satellite image time series is not exactly what the Observer on the ground would notice for example for the
[41:32] phagus silvatica we have observers who are observing the beginning of the season for for different uh three types
[41:40] or different crop types and what when they Mark the the beginning of the of the season they Market at the time where
[41:48] they see the first green leaves on the plant plant and this is of course not something that
[41:54] we cannot see on satellite images the the vegetation has to develop much further to be to so that we are able to see the
[42:05] increase uh over here the same is at the end of the season The Observers The nc2 Observers who are
[42:13] marking their calendars and generating the databases of different tree or crop tribes they're seeing the the Browning
[42:22] of the vegetation something like that that here and again this is not something that we are that we are able
[42:29] to detect with satellite image time series we might detect this before or after actual Browning is being marked on
[42:39] the calendar by Institute or observers so we have to have in mind that while we are observing the length of the season
[42:47] this might be a factor that is not the same as a human interpreter is doing on the ground there's not that there's
[42:56] nothing wrong with that we have to just know that the start of the season and have to
[43:04] edit a little bit by maybe a couple of weeks according to the observations that have been done by in
[43:10] situ Observers okay let's move to time series of images here you can see the development of agricultural fields from April to
[43:23] November November and if I show you this you would you would immediately be able to recognize the development you would say probably
[43:31] uh in immediately that nothing is happening in April and May but then still things start to develop in June
[43:40] and July when we when certain fields are completely differently colored so different uh different crops are growing
[43:47] and then in August and September we have Harvest harvesting and we are seeing a lot of of bears on
[43:56] so when we are doing time series classification we can do it in several notches notches the first one is to do it in a quasi
[44:05] time series classification what does it mean we just stack the time series of images one above the other
[44:13] for example we take the time series of ndvi and stack the this time series one on top of the other and we are getting
[44:22] kind of multi-dimensional data and we are doing multi-dimensional classification classification this is exactly the same as we are doing
[44:31] multis factorial classification on one image except that we have one more respectful image with let's say 13 bands
[44:39] in our case we might have one multi-dimensional image one stack of images with let's say 20 or 30 bands or
[44:48] timestamps and we are doing the classification classification in that case we are classifying with the this this stack of images but the time
[44:58] sequence is not really considered the classification is being performed on a time time signature of event like the
[45:09] multispectful classification is being performed on spectral signature of the event event however more important is do the
[45:17] full-time serious classification where we take the into account the development of of the time development of different features
[45:27] and here we have to deal with different distances we are comparing time series and we cannot just compare time series
[45:35] in euclidean way because we might have some changes between different years between different features in different areas so we have to do something more
[45:47] sophisticated like time time this Dynamic time working where we adapt the beginning of the of the growing season
[45:54] or any other element and we stretch a little bit this time series so that we are able to compare similar events with
[46:04] uh with different time series time series classification takes many many of the algorithms or methods that have been developed for speech
[46:13] recognition because for speech and recognition the first obvious thing is time shift and then we have different
[46:20] frequencies different speeds of talking and for for doing uh correct uh Speech the speech recognition we have to do a
[46:29] lot of dynamic time uh time working so how do we do classification based on Time series we have a series of
[46:41] known time development like the case here for barley maze rips it critical and meat and then we have a new unknown
[46:51] time series and we want to compare this time series as I have shown previously We compare the differences between
[46:59] between the unknown and the known time series and we classify uh the time series into the class that is closest to
[47:09] the to the to the unknown series you have probably done many times the single image multispectral classification and there we are deal
[47:19] where there we are dealing with a spectral signature and this here is uh are actually time signature so every
[47:29] crop type like critical here has a characteristic time series signature in the same way that every crop type has a
[47:39] characteristic spectral signature yeah until now I have shown you mostly beautiful time series but life is not
[47:51] that beautiful and when we are dealing with especially with Optical data but also with radar data we are getting a
[47:58] lot of noise this is an actual time series uh collected or generated straight from data coming from uh from
[48:07] images you see a lot of a lot of noise a lot of jumping up and down and is this
[48:14] jumping up and down uh influenced by my clouds or is it real real development is it harvesting of
[48:23] crops well we have we have to do the time interpolation or time integration this is the image with of the time uh
[48:34] time series Without in aggregation this is the time series with five-day aggregation where you can see that some
[48:40] noise have been eliminated this is the time series with 10-day interpolation and with one month of interpolation so in that case in this
[48:51] case here we have one point in time every month and this is probably enough for time series time series and analyzes
[49:01] because you can you can clearly see the development of different uh three types in that in that case and we don't we
[49:09] don't have a lot of noise another factor that is very important is time synchronization satellite images have different time
[49:19] stamps they are generated uh regularly every five days but when we have overlapping uh overlapping orbits uh or
[49:29] overlapping scenes when we get information even every two or three days at northern and southern latitudes and we have images coming from different
[49:41] satellites and different sensors so to be to be short our time frequencies are not uh equally spaced we
[49:52] don't have equal timestamps uh of the observations but they can be like this is the case again for Sentinel 2 they
[50:00] can be around five day or less but we can have also images that are taken 15 20 25 days or 30 days apart
[50:10] so we have to synchronize the the time steps steps this is the original Sentinel 2 ndvi time series what you can see here is of
[50:20] course a little bit of noise jumping up and down and what you can see also is that in some some time space we have a
[50:29] lot of data we have images really every five or three three days but there are there are time spans where we don't have
[50:39] any information or uh we we do we are having missing data because of the clouds clouds and so on
[50:48] so what we have to do is we have to compare time series like this which is not uniformly space and this is an
[50:57] expense and this is difficult to interpret that's why we are introducing weekly weekly averages where we take the timestamp
[51:06] every Monday or every every every Sunday in the week and compute the values over there or we can even do a monthly
[51:16] monthly aggregations what we can do with with ndvi for example is to use the maximum derived or
[51:24] the mean ndvi in the in the period of one month and in that case you see we
[51:30] have a similar development but much easier to interpret time series as this in addition to that an important factor is
[51:40] how long must the time cell the time series be when can we classify the features on the
[51:47] ground do we have to wait until the end of the year or can we do the classification after one month or two
[51:55] months or a couple of months and we have to be we also have to consider array of
[52:02] comparing the data for this year with the data coming from previous year so we have to see is it enough to have
[52:11] the data just for the first two or three months or do we have to have more information probably at this stage here
[52:20] we will not be able to classify different crop types but if you are going uh further in the year like to the
[52:28] to June we would be able to increase the accuracy of classification significant significantly so here at the beginning
[52:36] the classification would be very bad quality but when we are taking more data into account we can have
[52:45] better quality data meaning that the beginning of the year is enough for the classification of different crop types why is this
[52:57] important because if we would have to have the whole yearly time serious development this may this would mean
[53:05] that we would be able to do the classification at the end of the year basically for the previous year but what
[53:12] we would like to do is to be able to do the classification in the beginning of the year and to be able to classify
[53:20] after a couple of of months we also have to compare this data with previous years here you can see the
[53:30] development of the same crop in different years and you can see that the years are comparable however the
[53:38] starting of the season is being shifted uh according to the to the to the shifting shifting of temperature and
[53:47] precipitation for that year so it's basically the influence of climate and climate change if you would like but you
[53:54] also see some anomalies on this time series and these anomalies are those that we are interested because that can
[54:02] mean either some natural disaster it can mean drought or the impact of the road or or a similar event in in the in the
[54:12] in the crops okay so we have now seen how to generate time series and now we are doing a
[54:21] little bit to the Practical part and we will be discussing the Sentinel hub uh Copernicus data that's petabytes of
[54:31] data generated every every year has to be put in the hands of users European commission is very very well
[54:41] aware of that and that's why they are developing simple tools to use this this this data and this year they have
[54:51] launched the Copernicus data space ecosystem the cdse to be the new way to get uh Copernicus Copernicus data in the past this was
[55:04] kind of uh neglected by the European commission the Copernicus data Hub was providing the data but the
[55:14] interface was not very efficient and it was hard to get the right data very quickly and that's why the commission
[55:23] together with European Space Agency is launching the Copernicus data space ecosystem that will allow the search and
[55:33] API access to different different data and of course the processing in Jupiter notebooks in the cloud with different
[55:44] different Technologies and here Sentinel Hub will be one of the most important or the central parts of this uh this uh
[55:55] this initiative the Copernicus data space ecosystem will be fully operational this year now it is uh you can also already try it and there
[56:06] will there will be new functionality coming by today to the end of the of the year year so what is actually Sentinel Hub and
[56:16] what does it provide Sentinel Hub was launched in 2016 to simplify access first to open Earth operation data to the Sentinels to
[56:31] landsat data to modi's data later also commercial acceleration data was made available through Sentinel Hub and the users can
[56:42] also add their own data like raster and Vector data digitalization model models other Vector other Vector data like land
[56:53] parcels and so on but also drone and Airborne data Sentinel Hub is following the ogc standards and provides vmts VMS and vmc
[57:05] VCS services that the end users can use in their Cloud GIS web and mobile applications desktop GIS like qgis or rgis rjs Pro
[57:19] and most importantly they are able to access Sentinel Hub through Scripts so python API to our scripts to Envy NV
[57:31] screens and this is actually a game changer in the frame of Earth observation you don't have to use any
[57:39] sophisticated sophisticated data provider to generate time series of data you can use one service Sentinel Hub statistical API to get time series
[57:51] and to analyze time series within the same the same script so if you're if you register and join
[58:01] the the community you are able to to launch the Sentinel Hub playground or or AO browser and you're able in seconds
[58:11] really in seconds without knowing any programming generate products with this you can make this uh nice visualizations
[58:20] by using different band combinations like here and even a little bit of knowledge you can process beta bytes of data in seconds on
[58:32] a really old computer you just need a browser and a little bit of JavaScript and if you give this power to people
[58:42] magic apps applications pop up where you expect them and where you don't expect them in agriculture in forestry in water
[58:54] management management in monitoring air traffic or or trucks from space in monitoring ships from space in every domain that you can
[59:04] imagine and there's someone who has a little bit of knowledge a little bit of Courage that writes a script and
[59:13] processes the data and generates uh the the results this is really a democratization of Earth observation now
[59:22] it is not uh everyone can use their own computer to see what is happening to any part of of the planet
[59:31] so how to use this data and how to get the benefits of of this first you have
[59:39] to create the Sentinel Hub account just head over to uh to uh sentinelcup.com Google it and then click
[59:48] click on the sign in sign in button okay so uh now I suggest to move to the
[59:58] browser and to do the live demonstration so head over to sentinelhub.com and you have here the sign in button if you click the sign in
[1:00:13] button you will be going to the sign in page and here if you don't have the account you have to sign up for account
[1:00:23] so just click the sign up button and enter some user details first name last name and very important enter the email
[1:00:34] address here you have to generate a password confirm the password and agree with the terms of services and then you
[1:00:42] click the sign up button so when you create the Sentinel Hub account you will have you will enter the trial mode and
[1:00:50] you have to send your registered email to my colleague mate mate dot rajitch at eftg dot uni minus LJ dot s i because
[1:01:02] you will get credits for processing and advanced use of Sentinel hub European space agency and synergize are
[1:01:10] sponsoring the use for all the rset participants and you will have enough credits to do time series analysis
[1:01:19] including the machine learning with that with that credits when you have registered for the Sentinel Hub account just log in on the
[1:01:32] page so enter your username and password and click sign in and you will be immediately transferred to the to the
[1:01:41] dashboard where you can see how many uh how many uh credits you still have what is your user usage and so on
[1:01:50] and then switch over to the EO browser or you can just search for EO browser and Sentinel Hub your browser is the way
[1:02:08] to go and when you enter your browser you you can continue with the tutorial or you can just skip the tutorial and login
[1:02:27] once you log in you will see here it means that I'm logged in you can change the language to any other language and
[1:02:36] you can start exploring exploring the data I will move to a part of of Slovenia here and try to search some
[1:02:46] images images you have Sentinels Sentinel one two three and five P you have landsat data you have even the harmonized plants at
[1:02:56] Sentinel data you have other data like notice digital elevation model and even Copernicus Services we will focus on
[1:03:05] Sentinel 2 data and I will click here on the advanced search and first I will lower the cloud coverage to to let's say
[1:03:15] about 20 percent approximately and I will be searching for Sentinel 2 data and the The Sentinel 2 level 2A
[1:03:27] of course I have to change the dates and I will try to uh to to search for some
[1:03:34] images in uh in this in the summer of 22 so let's say from the 1st of July
[1:03:44] to the end of August so let's click here we have here the date range from the 1st
[1:03:54] of July to the 31st of August and we will do the search immediately you get the search results
[1:04:04] and you can visually visualize one of the images so this is the area you can move out you
[1:04:10] can zoom in zoom out you can move around and change the the visualization here we have the true color image you can switch
[1:04:20] to force color image and this is processing on the Fly you can do do some other combinations like ndvi what
[1:04:29] Sentinel Hub is doing there has there's nothing pre-computed immediately when you click another visualization it is getting the data processing the data for
[1:04:41] the for the frame that you are looking for the area that you are looking uh this is uh extremely fast but it takes
[1:04:49] some computational power so I will switch to ndvi now we have the ndvi for the image but you can also select any of
[1:04:59] the other layers here or you can create a custom script so you can create a custom visualization with different band Bend
[1:05:08] combinations and it is computed immediately without any or almost without any delay I will go back to to the this prepared
[1:05:19] visualization and I will complete click ndvi because we have seen that ndvi is very good for vegetation vegetation
[1:05:29] observation observation okay so now we have here ndvi and you can see different Fields here again through image you see that there are
[1:05:40] some agriculture area here uh and you you see some narrow fields switching back to ndvi I will try now to generate
[1:05:50] the statistics for the area that is shown here what I have to do I can put a
[1:05:57] marker marker uh on the on the in the area and when I put a marker on the area I'm
[1:06:04] getting here a new toolbar including the statistical if info for this area and if I click this statistical info uh the
[1:06:14] time series of ndvi is being generated so I'm getting one mass of data for this point for the point that was selected
[1:06:23] and you can see here the time development for one month of course I can change the cloud coverage and I'm
[1:06:31] getting uh less data points but what I would like to mention is here the export CSV button this button exports my type
[1:06:42] series to a file that can be analyzed later okay so let's use another tool I will use this area
[1:06:51] button here and I will draw an area I will manually draw an area I will try to select a field so I'm clicking
[1:07:03] clicking and I will finish with the second with the second click so clicking on the first point so I have here an
[1:07:11] agricultural field and I can generate the statistics for this field this is a 0.04 square kilometers I can generate
[1:07:20] the statistics in the same way so now I'm generating Sentinel to level uh to a statistics and you can see not
[1:07:29] just statistics for one point you can see also the standard deviation for those points and again we can make two
[1:07:39] month statistics and here you can see that this is computed on the Fly and we have to wait a little bit that the
[1:07:45] statistics is calculated and we have we have to lower the amount of clouds that we allow in this Statistics so we are
[1:07:56] eliminated cloudy images and we can go to one year and in that case it will take another
[1:08:03] couple of seconds to compute these statistics and after we have done this we can export the statistics to a CSV
[1:08:12] file and analyze this csvp we file later okay the statistics has been computed for for one year and I just for the
[1:08:24] demonstration purposes I will click also the five years and you can see how now the the computation of the statistics is
[1:08:32] going back five years in time so this means that every image for the last five years is being loaded the statistics is
[1:08:41] being Computing or computed on this uh on this polygon and the statistics has been done has been this displayed here
[1:08:50] and stored and we can see the time State stamps where the images have been taken and I can even lower the amount of
[1:08:58] clouds that I allow and this changes a little bit the time the time series this will take some time because there
[1:09:07] have been a lot of images taken in the past five five years so we have to be
[1:09:13] patient and of course this is uh in that case in in this case we are using a certain amount of credits for this uh
[1:09:21] this computation okay so we are almost finished okay a couple of seconds more and uh we will have the complete five-year time
[1:09:34] series for this field and by clicking the export button my file is being downloaded and stored locally and I can
[1:09:43] then uh open this file and uh down and use it with with Excel so with your browser we can generate
[1:09:53] time series of any of the layer that is present in the your browser we have seen landsat Modis harmonized Sentinel tools
[1:10:02] landsat time series and of course also the Sentinel one data here we can see the vertical horizontal polarization the
[1:10:11] gamma here you can see the time series of of radar data for the point shown here or we can see the time series for
[1:10:21] optical data Sentinel 2 level 2 A Time series where we can reduce the amount of crowds and get a uh less noisy time
[1:10:33] series and where we can increase the time series to get a five-year time series like it is the case here where
[1:10:42] you can see the development of vegetation uh in in this in this point or polygon and you are able to do the
[1:10:52] time series analysis analysis later if you export the data to excel you have a you have a table like this you even have
[1:11:02] the cloud cloud coverage percentage and you can filter and select only the the pixels that that do not contain clouds
[1:11:10] and in this case this is cloud percentage per selected area so for my polygon this means that these images did
[1:11:20] not contain any any clouds anyway again the minimum maximum value the mean value and the standard deviation and this can
[1:11:29] be then used in Time series analysis in Excel if you want which is a a simple way to use this kind of of data so we
[1:11:40] are now moving to the integration of return Optical Optical data and the the machine learning part and I will be
[1:11:50] heading the word here to my colleague mate thank you for the introduction and welcome we'll take a look at radar and
[1:12:03] Optical integration and without further Ado let's get started there are a few ways we can join this
[1:12:12] information we can combine both radar and Optical uh by doing so we wish to combine both the best worlds uh this can
[1:12:21] be done using machine learning beta fusion and with this we are hoping to create a combined trailer Optical
[1:12:30] vegetation index which can serve us for various applications in natural environment mapping or monitoring one of such application uh could be a
[1:12:42] crop classification as we can see in reality scatter and there are obvious patterns and differences between between
[1:12:50] wheat and barley and even between different years similarly it can be observed in Optical indices indices comparing here we can see both ndvi and
[1:13:02] ndre we can see there are quite a few differences in various crops such as winter wheat cotton spring Maize and
[1:13:12] other various vegetation types once a such applications can also be not investment intensive and extensive this can be done by tracking when a certain
[1:13:25] parcel has been moved this can be visible in both radar and Optical information in for example in ndvi
[1:13:33] information we can see the value dropping once there was a logging event and then quickly arising after as
[1:13:39] vegetation recovers and we can see this pattern multiple times a year similarly in case of coherence you can see the
[1:13:46] values increasing as and the change has happened in the parcel and now if we start with the machine
[1:13:54] learning quite often to referred as AI artificial intelligence if you're following the uh any new Publications and the News you can you have must have
[1:14:04] heard of gpp3 uh of open ai's new Endeavor Endeavor um but this is quite often actually just
[1:14:12] machine learning more specifically deep learning which is a subcategory of machine learning and the main difference between the two being the methods that
[1:14:23] we use specifically deep learning is more complex or actually the method that we use have more layers but more about
[1:14:31] that in the next slide all machine learning has in common is the way that we need to
[1:14:38] to formula formalize or a problem that we are solving addressing whatever we are doing we have to first in the time
[1:14:47] what is the result that we're trying to achieve so if we take a look at remote sensing for example more of the a little
[1:14:55] bit more of intuitive a problem that we're trying to solve would be seeing specification and this would mean as
[1:15:00] shown in this example that we're actually trying to give a label to the image and Define what it is and that it
[1:15:08] is representing in this case I'm pretty sure that we can say that this is the residential area and we can all agree
[1:15:15] but we can also see that there are a few roads and a few trees in the image this
[1:15:20] wouldn't what makes it a little bit harder for the model to this and different but we can still see that it
[1:15:26] has no issue with the given image making the task a little bit more complex would be object detection this
[1:15:35] would mean that we still have the insane input in the entire image that each bounding box for each object
[1:15:44] that is detected and we can see that in this case that we have buildings properly detected and also a car that is
[1:15:52] smart and we can see that each object has a probability so this means that each individual object has this similar
[1:16:01] labels as we had before and then the probability that it belongs to this that specific class while going even further
[1:16:10] we have image segmentation we still have the same uh similar input meaning that we input the entire image and now we
[1:16:19] provide the segmentation over the entire image meaning we classify each pixel we give the output and we can see this also
[1:16:27] as an image and if we take a look now for the green pixel you can see that it
[1:16:33] belongs to building but it could be also Road plants and what but as the probability is highest for the building
[1:16:39] class this is also what is indicated in our output but what is different for the examples that we'll be looking at is actually a
[1:16:50] pixel classification which is different in the front segmentation specifically on the area that it does not include the
[1:16:59] information from neighboring pixels but only for that specific one we could produce similarly results as we have
[1:17:07] them here but in image segmentation but this is not the case but this is not the input is not always the entire image but
[1:17:17] just each individual picks up this means that we can use different methods and different optimization to achieve
[1:17:24] similar results and if we go a little bit uh more specific into machine learning for uh pixel classification
[1:17:34] let's say that we are using uh decision tree as we have an example here on the right uh our decision tree expects uh
[1:17:44] two uh pictures as an input normalize different water index and normalize different vegetation index and based on
[1:17:52] whether the value of water index is above zero we are we give it the value is true and we are we mark it
[1:18:04] as a water body and if if you don't work we check the value of ndvi and based on the
[1:18:11] predefined threshold that is actually inferred from the training data uh we divide it into the other two classes but
[1:18:20] this here is only an example uh and the trees can and are more complex and are in turn during the training uh this is
[1:18:29] actually when we prepare the data we have to predefine uh what our samples are and each sample has to have a label
[1:18:38] and based on that based on the distribution in the data that we have the model then learns which pixels
[1:18:45] belong to a specific class and then is able to come up with this Rule and with this we are able to have a simple simple
[1:18:54] specifier that is able to produce and produce a cover map but even going further from this and making it a little
[1:19:03] bit more complex is a random course which combines decision trees a lot of them uh and those three actually always
[1:19:11] work on a subset of the data that we have of the samples both in the number of samples that it works with and with
[1:19:20] the features that you're working with this is often quite important uh as each as the trees would not differ if they
[1:19:29] all had the same data this is why all trees are actually working just on a subsection maybe they don't have all the
[1:19:37] features or in this case maybe on their own working only on vegetation maybe only on the water indices but this is
[1:19:45] also then expanded when we have multiple steps of the time series and more features uh then they can adapt to
[1:19:54] specific classes or to specific conditions and they are able to perform better than a single decision tree as
[1:20:02] they are Ensemble and they're able to vote uh to what they think is present on the given page so and produce a more
[1:20:12] reliable reliable result while in the case of deep learning methods we have more complex approaches uh if you look at the first two lines we
[1:20:25] can see that we have our sentence and DNS and you can see that they both have in common neural networks the first one
[1:20:33] being recurrent meaning that we're mostly working with time series and CNN which are convolutional neural networks which are
[1:20:42] have made their name from the name partner themselves for address for tackling visual uh tasks where we're
[1:20:50] using convolutions to aggregate the neighboring pixels and the information that information that they capture and we can also take a look on the right
[1:21:00] side there and this is a deep learning approach as you can see there's there are a lot of layers uh stacks on top of
[1:21:08] each other uh and this is quite often the case with deep learning methods as they become more and more complex and
[1:21:16] they have more and more features that we need to tune uh this is quite connected to the numbers of samples that are
[1:21:23] required in order to produce a good result result but and this is not always necessary as uh as some have already uh
[1:21:34] introduced us to adapt to provide free training options uh meaning that we actually have time series that are not
[1:21:42] labeled and use those to pre-maintain our model uh to optimize the weight of the model uh which is
[1:21:52] actually hidden in each which are hidden in all of these layers and based on this we are actually able to use much less
[1:22:01] information much less samples to acquire a quite impressive results as you can see here are two examples where you can
[1:22:09] see that the accuracy increases with a deep learning method we can go in further we can actually
[1:22:17] manage transfer between different domains as we mentioned before this a solution particular is not limited to any particular region or even a given
[1:22:29] task it could be used for land covers or land uh land use land type classification or just the specific crop
[1:22:36] types or specific Forest types or different really problems that we have defined ourselves we can actually also
[1:22:45] uh transfer this model between years but this means that you have to adapt a few things uh specifically that we tell
[1:22:54] the model or that it is able to include this information of what year it is working with or that
[1:23:01] you could be able to extrapolate what we have given it to apply and train and then test on the specific years that
[1:23:10] we're working in with uh while this will affect the results we can achieve quite interesting uh knowledge transfer which is by uh using
[1:23:22] the waves that have already been indeed being pre-trained uh for our model we can actually optimize our model uh
[1:23:32] for a specific season meaning that we don't use a cold calendar season uh calendar year as we usually do when
[1:23:40] preparing the data because crops often grow quite differently from what our calendar year is and this can be also
[1:23:49] then adapted to a specific region in the world and uh once we even divide this information even further we can do
[1:23:59] season season adaptation as crops can change within a given year and are specific to each individual season
[1:24:09] but quite often we don't actually need to be that specific we don't need to be uh go in that complex into the methods
[1:24:18] that we're using in this particular case to distinguish between extensive and the Intensive grasslands this was the task
[1:24:26] that was given to us uh and we decided to first uh look a little bit deeper into the time series that were made
[1:24:35] available and we specifically then decided to use mdvi time series and cohere meaning the change that has been
[1:24:43] observed for a specific pixel and we noticed that doing each mowing event there's a drastic change in the time
[1:24:50] series uh as you have seen before on the previous slide and we actually only designed an algorithm that detects those
[1:25:01] changes this could have been done with deep learning but it is not necessary and specifically why we didn't use it in
[1:25:09] this case was because the number of available samples to us was actually very small and it would be too small to
[1:25:17] train a deep learning method and it had too many parameters to optimize but we have to keep in mind that we have
[1:25:25] to really be careful and inspect the data we're working with because this is not always uh so simple uh moving
[1:25:34] detection was one of the more uh nice examples of where this can be done but we still need to need to verify our
[1:25:45] results results in particular we decided and we used the Hamburg generalization uh which actually means that we looked at each
[1:25:58] individual region that we have in the country and that has specific technological uh changes that are actually uh specific to that region and
[1:26:09] we can even see that that coincides we with the distribution of extensive and intensive grasslands and this is not
[1:26:17] specific just to one year we can see here we use two different years and we can see that the pattern is persistent
[1:26:24] there are some small changes but we can see that we have one meaning more of a Mediterranean region where uh the moving
[1:26:35] is more frequent we can see that the the grasslands there are more intensively used and these decreases and uh it's almost the same in
[1:26:48] the half time which is more of a Alpine region meaning that the the grasslands there are moved less often and this is
[1:26:57] quite useful as we can see and that the intuition and the results that we have and have been confirmed with an external
[1:27:07] Source without just using the the metrics that are available to us when we are using machine learning and this can
[1:27:15] be quite often a good uh safety check to see that we are actually going or moving in the right direction
[1:27:23] and now let's start with the Practical Workshop Workshop uh you have already been given the access to the GitHub repository uh it
[1:27:31] will be also shared in the chat you can access it through this through this link and through this QR code
[1:27:42] and we can take a look here you can see that we're greeted with repository here is a quick description on how you are
[1:27:49] able to access this files uh you can use the git call command or download the zip file
[1:27:57] file one of the file is downloaded open the download directory right click on it and extract it in the same folder
[1:28:07] by double clicking on it we can see that we're greeted with the same file structure structure as in the repository
[1:28:12] in particular we'll be working with the data and non-box folders similarly we can move to this folder here in the
[1:28:21] repository where we also have the in the particular instruction by following the instructions here in the repository we
[1:28:30] can see that we'll be using the Anaconda you can download it from the official website in particular we'll be using the
[1:28:38] Anaconda prompt following the instructions we can see that we first have to change our location location for me this would be to change to
[1:28:51] download rset rset minus master practical you can see that first added CD before the path these things change directory
[1:29:07] and now that we are in this folder we can see that we are greeted with data environment and notebooks
[1:29:17] in particular we'll first need to create the environment this can be done simply by copying the conda environment create
[1:29:24] command and it will be using the environment.yaml file which has all the required libraries defined and simply by running the command the
[1:29:37] environment will be prepared if you will have any credible symbols feel free to send me an email
[1:29:44] but it should be running without a hitch I have already done this command so we will will notice the way for it to finish
[1:29:53] uh and now uh we need to activate the environment this can be done using the conda activate command
[1:30:01] and the name of our environment is the eeo and we can see that at the beginning the
[1:30:11] name of the environment we're working with has changed now as we are running a new python notebooks we are going to need jupyter
[1:30:21] lab want to run this command a new window will open and you'll be greeted with the Jupiter
[1:30:31] environment similarly as before we can see that we are in the same folder we can open the notebooks and this is
[1:30:44] where we'll be starting once we were able to establish our environment and run the Jupiter lab we
[1:30:54] can can first get our credentials which will be used by our jupyter notebook and our program to download and access the data
[1:31:06] that we'll be taking a look at in particular and we'll be needing uh three uh three parameters one will be
[1:31:15] input finding client ID and client Secret Secret uh this can only be found in Sentinel Hub dashboard uh you have already
[1:31:24] created this account and if you have not sent me an email please do so now and we'll be also crediting you additional
[1:31:32] credits so you'll be able to access and process more data but in particular what we need to do first is actually go under
[1:31:41] uh dashboard we can see there is a configuration within it right uh you have to keep this uh green button and
[1:31:49] which will enable you to create a new configuration you can name it uh however you desire but we should make sure to
[1:31:57] select the python Street template and then create the configuration with this you will be you will have your
[1:32:04] first uh your first variable that will be needed will need to Define this will be instant finding and it can be found a
[1:32:13] found and copied under this ID column to find the other two you will have to go under authorized
[1:32:21] clients which can be found in the user set set in particular you will of course need to
[1:32:26] create a new authorized client you can also name it on based on the workshop or something similar of meaning but you
[1:32:37] will have to make sure that you will save the secret key as it will be shown only once and it will be used to access
[1:32:46] the portal uh on all the data and to make sure not to share it with anyone as
[1:32:51] and this is actually tied to the quota that you can use uh for how much uh how
[1:32:59] much imagery uh you can download and process uh with the given platform I will not be showing these steps uh in
[1:33:08] detail at their represented here as I we would need to blur out my personal information similarly uh as anyone could
[1:33:19] use uh use it to access our so if we take a look at how the Practical actually uh is divided uh that
[1:33:31] now that we have already signed up we are able to use the credentials underscore Sentinel Hub I python
[1:33:37] notebook uh which first have to also configure The Sentinel hub.id file uh which will be storing our credentials
[1:33:45] and will then just be confirming uh the configuration that we'll be using then going on we will be using the data
[1:33:53] source Explorer where we'll take a look at the data collection that is made available to us and through the Sentinel
[1:33:58] Hub we'll take a look at the eval script and see uh what changes can be made and
[1:34:04] how this affects our processing uh together with an example of imagery retrieval and an example of a simple
[1:34:13] visualization visualization going forward we'll be taking a look at the Earth observation with State API in particular we'll take a look at a
[1:34:23] specific AOE read and uh how we can download the specific time zone for for the provided geometry while also
[1:34:34] visualizing the time series that have been acquired and then afterwards there is an external book a one that will not
[1:34:43] be able to take a look entirely but we will we will briefly review it well we will take a look at the actual
[1:34:52] land cover notebook but we will want to go too much into detail uh as it actually encompasses all of the previous
[1:35:02] uh notebooks and it is uh actually uh the entire procedure one would need to uh split a big area of Interest
[1:35:12] downloads and the necessary data and the reference and do the required machine learning uh to achieve uh and produce uh
[1:35:23] classification map and now if we start uh first with the first notebook uh the credentials we can
[1:35:31] open go back to the browser and open the credentials uh sh dot IPython notebook this can be done simply by double
[1:35:42] clicking on it and we'll address it with the new uh with a new tab and in here we can see
[1:35:50] that we have the Sentinel Hub ID file which can also be found found here on the left side
[1:35:58] and if we double click it we can see that here is actually where we'll be including our information the instance
[1:36:05] ID client ID and client Secret I will be closing this window and I will not be running this command as this
[1:36:13] would actually uh reveal my my credentials and I'll be simply copying uh and uh moving my already predefined
[1:36:23] credentials uh into the notebooks folder and overwriting my existing file file safety for you will be just running this
[1:36:34] command uh and then uh following the following cell and this will actually be the one that will configure uh your
[1:36:42] environment and you will have three lines uh outputted below which will be in the individual uh value being set up
[1:36:53] and then just to confirm that everything is valid and you also run the left cell and you will have the output for the
[1:36:59] values will have been set and now with the first notebook done we can move forward to the data source
[1:37:10] Explorer Explorer and here we can take a look at the data collection DML script and the image
[1:37:18] retriever procedure and the visualizations of the data itself uh to prepare a little bit in advance I
[1:37:24] have made the uh I already divided the area of Denmark into smaller region in particular we'll be working working with
[1:37:32] one key on touch uh that I have selected and will be downloading the data uh and uh visualizing it in The jupyter
[1:37:41] Notebook Notebook going back to the notebook uh we can open the data source Explorer IPython notebook and we can see the data source
[1:37:50] exploration starts with a libraries import uh itself which defines the function that we'll be using in this uh
[1:37:59] in this notebook to load and process the data that we're working uh in the second cell we'll be also defining the data
[1:38:06] folder in which uh we can find our Denmark underscore B box geojson file this will be used to load the area uh
[1:38:18] we'll be working with here in the first section of the notebook we already are presented with the Sentinel to l1c collection in
[1:38:30] particular we'll be downloading the RGB channels uh we can score three and two as I'm sure you're all quite familiarial
[1:38:38] with the ndvr here is also an example on how to uh download this particular values without downloading the entire
[1:38:49] image we can actually calculate this already in the cloud we simply we have to define the yellow script which has
[1:38:57] the and the channels already inside in particular we'll be working with band 4 and band 8. uh we'll also have to name
[1:39:05] in the layer that we'll be working with and here at the bottom we have the function uh in which we pass the two
[1:39:13] before mentioned channels and the operation in which we'll be calculating them similarly to before we have to Define
[1:39:24] The Sentinel Hub task in this case uh we only need to pass the script that we'll be using to calculate it enter the layer
[1:39:33] on which we want to calculate the value form form as you might have noticed both of them
[1:39:39] also both of the tasks have one parameter that I have not mentioned this is Max cloud coverage which means how
[1:39:48] much how many gloves can be on the image in order for it to be still included in
[1:39:55] the process we hire this value is the more clouds we permit to be included in the processor
[1:40:01] foreign foreign we'll be taking a look at the images in the year 2019 as well this is the patch that I have
[1:40:11] selected in order for us to further explore uh the evil learn notebooks and now we are actually going to
[1:40:22] download the data and this is done by executing the tasks that we have defined before the only thing is that we are
[1:40:30] still missing are the bounding box and the timing parallel that we have defined in the cell above this can be simply
[1:40:37] done and done by running this cell as well well and in the background we are reaching extensional Hub Services uh to download
[1:40:46] the data and uh by already defining this interval and area Sentinel Hub is already cropping uh the available images
[1:41:00] and once the patches are done with it you can already see here that we have 19 images with thousand by thousand pixels
[1:41:08] approximately with three bands this is what we have already defined in the beginning and which is the RGB colors
[1:41:14] similarly this will uh this needs to be run out for the npvi test which will be completely a bit faster as we are
[1:41:22] transferring less data and doing the calculation in the cloud which is also faster and more powerful than our each
[1:41:29] individual machine similarly we can also see what what time steps are available to us and this should be the same and should not differ
[1:41:38] between the two different Acquisitions that we have that we have done one of the tasks have completed we can
[1:41:51] see the similar output as before but now we actually have just one channel uh and it's added under data and ndvi and
[1:42:01] similarly as we can see that we still have the RGB values and this is all joined in a single ER patch that can
[1:42:09] then be used and referenced individually the time steps are exactly the same as before but now we can see when exactly
[1:42:17] the images have been acquired download downloaded we can simply reference what uh subsection we want to be working with in particular the RGB
[1:42:30] values in this case and visualize them simply by using the ax in show function which will be taking the uh the
[1:42:39] individual touch tab that we want to take a look at and displaying the image that we want to see
[1:42:47] similarly we can calculate the median values which can also show us how The observed area would look like without
[1:42:56] class as we can expect on those values to be much higher similar procedure can be done with mbvi
[1:43:08] when we are presented with the values and the vegetation and we can see quite well where the
[1:43:16] areas of urban and vegetation data we can quite simply also calculate in the uh the mbvi Time series by
[1:43:29] specifying uh an area that we want to calculate it for and then plugging the value a similar procedure can be applied to
[1:43:42] Sentinels one data we only need to change the data collection that we are using here it is changed to Sentinel one
[1:43:51] the sending and also the bands and band features that we want to be working with here we are specifying the descending
[1:43:58] can be ascending track if you are interested in any more detailed information about the data that is available it is can be found on the
[1:44:09] Sentinel Hub repository under the docs Dot sentinelminushub.com and you can hear a read about each individual data
[1:44:18] source that is how it is being processed acquisitioned and how in what shape or form it is available on the Sentinel hub
[1:44:28] similarly as before we can run the task of just downloading the data for the desired area and interval
[1:44:39] one of the data is done that we can visualize it simply as similarly as before but in this case we can take a
[1:44:46] look at the percentile calculations the 80s and the 20 percentile while also visualizing the standard deviation under
[1:44:54] the blue band simply we can do this by predefining the variables for each Channel and then constructing and
[1:45:02] concatenating the array and then visualizing it as an image there are various ways of joining this information and how we can combine it
[1:45:17] depending on what we want to emphasize in each individual image and in this file we can actually also see and
[1:45:24] compare different uh different images or acquisition times if we take a look at the particular example we can say and take a look at uh
[1:45:36] having the first image as read the third image as the green and the 11th as a blue
[1:45:46] and we can see how the area change throughout the year and how the acquired images images represent that you can see that as we
[1:45:58] mentioned uh that we have the blue values uh being the latest change meaning that wherever there is blue the
[1:46:07] values were the highest uh of only for the last okay and now before we start with the third
[1:46:21] notebook and the Sentinel Hub actually has data in various uh we can access the Sentinel Hub data in various Facebook
[1:46:29] forms in particular we'll be taking a look at VCS requests using a script that is actually written in Python
[1:46:38] similarly as before but the main differences using the Sentinel cup statistical API and we can do this by
[1:46:46] using a geodata and why is this important is actually because we can specify as you can see here an example
[1:46:53] of a geojson format the area where we want the data to acquire the data in particular we have here A Marked five
[1:47:05] different fields regions an example of a medal of Agriculture and water force in urban similarly you can see that it's
[1:47:13] here and we'll be taking a look at how actually we can access this data on instantly without even downloading the
[1:47:22] images only downloading the specific time series starting with the terminal book The retrieval of data using a statistical
[1:47:33] API similarly as before we have the importing of libraries in the first few cells uh specifically we'll be adding
[1:47:43] the functional Hub statistical download clients and send an email Hub statistical statistical and we have a few helper functions in
[1:47:51] the beginning which will enable us to parse the information that will be acquiring acquiring similarly to before as well we have the
[1:47:59] evil script but in this case we'll be accessing all the bands and you can see now that we are also adding a CL mes and
[1:48:08] CLP layers which are in particular math and are used to match the data and Cloud mask and cross probability
[1:48:22] as before we can also add the ndvi values uh we can see here that we have each pixel being evaluated and by
[1:48:33] predefined equations you can also add your own just simply by following these procedures terrible terrible we'll be taking a look at Chrome this is
[1:48:51] a town in Slovenia and similarly as we have done before we can specify a bounding box and the time interval that
[1:49:00] we want to work with before we download the statistics for the region we can first take a look
[1:49:07] at what information what area we are working with as before we can specify the collection but in this case
[1:49:18] the difference being we'll be using a big VCS request but we will be again defining the layer which is the true
[1:49:26] color and downloading it at 60 meter resolution additionally here you can see that we have specified a data folder which means
[1:49:38] that whenever we'll be re-requiting these images in the script will first check if we have already downloaded it
[1:49:45] so this procedure will not be uh re-running and read now learning and using our quota necessarily in this case
[1:49:53] you can see we have acquired 37 images and we can start by visualizing a few of them
[1:50:05] we can see that in this particular case uh the area on the first image was not cloud while this is not the case for all
[1:50:15] of the images but this can be later handled and processed processed in the later steps but what we are in particularly and most
[1:50:26] interested in is uh calculating uh the information already in the cloud and then just downloading the time
[1:50:35] series this can be done with the Sentinel Hub statistics package and Here We additionally specify the interval that we want to operate with
[1:50:48] this design uh when uh at what time steps will be aggregating the information that we have to define the calculation that
[1:51:02] will be using uh this means what values will be aggregated and returned to us in some cases we want to calculate the mean
[1:51:14] or median but this can just be specified and passed in the calculations and then adjust it based on the
[1:51:26] individual area when and what we are working with similarly as before uh we now are actually able to join all of
[1:51:36] these predefined uh attributes uh into the Sentinel Hub statistical function which will be actually uh getting us the
[1:51:47] data data when you'll be running this function for the first time you can expect it to take
[1:51:54] um quite uh quite longer as this data is already accessible on my PC uh it only needed to read it from the cache folder
[1:52:06] and load it into run in case you have any errors they look like this and you can just
[1:52:16] make sure that the request that you're sending is not being timed out or that you not have that you don't have any
[1:52:24] issues with the processing uh before proceeding forward and this can be simply the values that we have received
[1:52:32] that can be simply used by specifying the data and then the actual input are the output of the each individual time
[1:52:42] step step but now before we visualize the time series uh we would like to reformat the data so it can be easier or simpler to
[1:52:53] understand this can be done by just changing it into a data frame and and the changing uh all of the values into
[1:53:03] columns columns we can still see here that we have values for each individual band and the percentile as we have them defined
[1:53:12] before as you might have noticed the values range around 5000. this is done so uh that we do not transfer plot values over
[1:53:29] uh as they require much more data and and take longer to transfer now that we have already prepared our
[1:53:41] table we can go forward and visualize the information that we have acquired we can see the value now are distributed at
[1:53:51] least for any between minus one and one and we can also confirm these on the graph but now we can see that the values
[1:53:59] and the time series is really Jack uh we would need to further remove the cloud in order to improve this visualization
[1:54:22] what we have done above was actually for the whole area of ground but what we're interested in particular is actually
[1:54:30] just the geometry and the particular types of Lambda that we have specified in our geojson file we have to first make sure that it is in
[1:54:43] the right projection and then we can simply pass on the request to Sentinel Hub statistical client and it will download the data for us
[1:54:57] one of the download has finished we can check and we can see that we have exactly as many uh Pi series as we have
[1:55:07] specified in our data frame again similarly as before we have to normalize the data the values are around
[1:55:18] 5000. 5000. and now we can simply be visualize part-time series and we can see the time series are quite
[1:55:28] rejected as well but this is uh due to clouds which can be removed if we can match them using clue value
[1:55:41] and we can see the values have already improved improved but we also have one additional uh option to filter by CLP but this I will
[1:55:51] let for you to try out and test on your own notebooks before going to the final notebook we
[1:56:01] will take a look at the standard procedure in e-older uh by defining the region of Interest similarly as we have
[1:56:08] done before in this case for extracting the water extent we can see that we simply download the sit like imagery for
[1:56:19] a specific region mask the clouds extract and calculate the ndvi feature use the threshold and then we can simply
[1:56:30] vectorize the extent and state the result as you can see the procedure is quite straightforward and so this is uh can be made and it's
[1:56:39] simple because of EU workload uh that we can apply on any region any area of interest and that we have uh at our
[1:56:49] disposal uh or that we have reference data for uh and simply uh by defining the uh the area that we're interested in the
[1:56:59] country we can split it into smaller tiles download the information for each individual one and then use any complex
[1:57:09] methods or processing in order to achieve the required results the last notebook in particular shows how we can do machine learning
[1:57:19] for our example and and we have some time constraints we'll be only overviewing the notebook but you're more
[1:57:27] than welcome to run it yourself uh as you will have more than enough credits to uh process this data and acquire it
[1:57:36] um in case you will have any uh different uh applications or uh desires here on the right side are also a few
[1:57:46] more examples that are available on the uh EO learn workflows and workshops and you will be able to find something that
[1:57:56] suits your needs and if you have any particular particular request or questions you will be you are
[1:58:05] more than welcome to write and address them to me and now to the left notebook the left notebooks is a guide on how to
[1:58:16] create land use land cover predictions in this particular case for Slovenia uh it's divided into Parts uh will not be
[1:58:25] running through them but a quick overview would be that in the first part we are actually preparing the data
[1:58:30] preparing the uh dividing the region and only taking a look at the five by five area and this is uh quite quite a happy
[1:58:40] task and a 5x5 area is manageable for most uh computers and it's a great start but you can also change this later to
[1:58:51] any country or to any uh area site or any year of your particular design the in the Second Step the data is
[1:59:00] downloaded using Sentinel Hub uh fine package and then calc the ndvi in this and virtual index is calculated while we
[1:59:10] also add the reference map which is also provided in your Repository in the second part the data preparation
[1:59:17] for machine learning takes part uh including the construction of the model and training and then also validating
[1:59:25] the model and the visualizing the results similarly as before we are first greeted by the import and then as
[1:59:33] mentioned mentioned the area definition and visualizing it while in the second to the fourth we'll be actually downloading the data
[1:59:44] defining the tasks that will be adding it and defining the workflows in order for us to automate the
[1:59:53] procedure procedure here are a few definitions of the land use land cover map and the colors that
[2:00:00] will be used in the end to visualize everything everything here is also the reference that is being
[2:00:06] used uh it is uh it is consists of the 10 classes mentioned before and here is the entire procedure summarized again
[2:00:17] in case you will have any questions uh you will also be able to email us but the script should be working without any
[2:00:25] issues and it also has some good visualizations which will be showing you if you are on the right path and uh how
[2:00:36] the data that you're working with is actually uh actually looks like and uh how uh how it changes throughout the
[2:00:45] year year and in the second part as mentioned is the machine learning data preparation and procedure well you'll be actually uh running the
[2:00:56] model and training and running the model on uh on the patches that have been previously downloaded here is the entire uh model training
[2:01:07] first we simply have to prepare the data in order for the model to train on it we hear divided into
[2:01:17] train and test set which is then used as the input onto the lgbm classifier and you can save it on your computer so you
[2:01:29] can use it at any other time and see how how the results compare between different cons in case it will be
[2:01:38] changing the parameters or any particular input to the model here you can also visualize the confusion Matrix
[2:01:47] which will actually indicate and tell you how well the model performs but more I suggest that a more in-depth
[2:01:58] information that you find it on the internet as there is a lot of interesting uh things that can be
[2:02:05] optimized the depending on what is the problem that you're dealing with including different metrics that can visualize your model performance
[2:02:16] you can also evaluate which features are among the most important for the given task that you're working with and you
[2:02:27] can also visualize how and what information was was uh was done by the model what was predicted by and save it as a test
[2:02:41] in order to be viewed in any other spatial spatial program that of your prefer of that you
[2:02:50] prefer with this uh I would conclude the Practical part and would like to invite you to change and feature the parameters
[2:03:05] uh that you have been using uh and the area of the interest that you want to be
[2:03:11] working with in particular I would encourage you to use the statistical API as you can calculate and
[2:03:20] get a lot of information for any particular region that you're working with or points of interest without much
[2:03:29] complications and quite quickly as you do not need to download the images and the entire images to your local computer
[2:03:40] with this uh I welcome you to uh also to write us an email in case you have any
[2:03:48] questions and would like to thank uh or the organizers and uh uh for providing us with this uh
[2:04:00] informative Workshop Christopher mate thank you for the wonderful presentation and demonstration we will now transition to the question
[2:04:11] and answer portion of today's training please enter your questions in the question and answer box and we'll get to
[2:04:17] them in the order they were received we will post the question and answer document to the training webpage before
[2:04:22] the start of next week's training below is the contact information for Christoph and mate along with links to
[2:04:31] the training webpage website and social media media if you enjoyed today's webinar we hope you will sign up on the rset listserv to
[2:04:38] receive notifications of future trainings and please follow us on Twitter for future relevant announcements pertaining to NASA's Earth
[2:04:45] Sciences we've been receiving a lot of terrific questions so far I want to thank everybody that has submitted a question
[2:04:59] we still have about 25 minutes left in the session so there is still time if you have a question that you want to ask
[2:05:05] either Dr oshtir or or mate please do put it in the question box and we'll get to it as soon as we can so question
[2:05:14] number one could you please tell us more about the harmonized landsat Sentinel or hls availability on Sentinel Hub how do
[2:05:23] we access it so the harness level data is available on Sentinel having in the same way as any other data
[2:05:32] service centimetry and plant cells it's the eight seven and so on we have listed here a description of the data step and
[2:05:45] it's easy to get it either through your browser or to statistical API so what might take you strong can be done also
[2:05:55] with harmonized lens and Sentinel data set wonderful question number two how do we classify crop types in tropical areas
[2:06:06] especially in proximity to forests I imagine that the ndvi fluctuations might be smaller so we are more likely to
[2:06:14] misclassify crops maybe I'll answer this one if you can hear me of course but yeah we can hear
[2:06:27] you just fine thank you wonderful okay so actually the ndvi changes uh depending on what vegetation can be
[2:06:34] found in a particular area and actually it would be misclassified only if the the signal would be really similar that
[2:06:43] is why it's really important that we have a strong uh signal for each class that we are actually trying to classify
[2:06:50] and it really is dependent on the training samples that you are using uh so actually once we have this it can
[2:06:58] also we can explore uh how and what classes are actually phonologically similar when we are working with the
[2:07:06] data if if I may just add maybe and we are Optical data would not be enough for
[2:07:15] tropical areas so you have to use also the radar data wonderful question number three since the central wavelengths on Sentinel 2 A
[2:07:30] and B differs slightly is that something we should take into account or somehow correct for when using images from both
[2:07:37] satellites example given for classification purposes uh uh now here is no these are almost identical satellites the slide
[2:07:50] that I have shown is just the demonstration that they are not exactly the same satellite you built in different spaces with
[2:07:59] different uh the different methodology but the user does not have to uh differentiate between S2 A and B
[2:08:12] great well hopefully that puts a concerned mind to rest uh that you can use both of those interchangeably
[2:08:19] question number four there might be there might be some bucks uh the geometry of Sentinel 2 and Sentinel uh
[2:08:27] Sentinel 2 A and B is not exactly the same so it's uh the pixel shifts can be
[2:08:34] bigger between the two satellites than the specular reflectance changes okay question four do you normalize the crop time signatures by latitude or for
[2:08:49] seasonal weather the growth curve for any crop will vary by the date planted the weather and The
[2:08:57] Growing Degree Days yes this is true and it would play a big role if we would be producing a map for
[2:09:07] a continent but we would have to adapt the calculation and the areas and calculate everything connected to that
[2:09:17] um but this is not especially adapted to multiple Seasons or within a year that we're working with that is why we
[2:09:25] usually use deep learning and we let it learn the features and it can do it so by inferring it during training and this
[2:09:34] is actually a specific topic that can be also explored and if you're really interested into it I suggest that you
[2:09:42] look at knowledge transfer and concept shift just to name a few wonderful and question uh thank you mate
[2:09:56] question number five is Sentinel Hub free to access is it possible for a student not to pay for
[2:10:03] that subscription he added the song short answer is sending a half is not for free for commercial purposes how the basic
[2:10:16] functionality of something else about this for instance your browser and there exists a lot of sponsorships especially for researchers
[2:10:26] scientists and students I would like to invite you to have a look at the Isla network of resource web page where you
[2:10:35] can apply for sponsorship for sending a half but also other services that is sponsoring and all the RC participants
[2:10:46] if they register and email their their produce the email to material gets partnership through through the same
[2:10:54] network terrific that is wonderful thank you uh both Martin Christopher helping to organize uh those those sponsorships for
[2:11:05] these participants very much appreciated question number six is the data from Sentinel Hub original data or somewhat down scaled
[2:11:15] no this is a very important important question and it becomes several times for data no it's the same
[2:11:27] being used from from any platform so the original files are the same uh however if you are
[2:11:37] looking at the new browser of course the image that you see is reduced because there's no need to have the original raw
[2:11:45] data if you are just looking at a large area so a city or even a region and it
[2:11:52] is therefore computed on the flight from the original resembled and compute computer so but you can get two Sentinel
[2:12:00] heart especially through statistical API the original data in a matrix form so you can get an array of accelerated by
[2:12:09] array with the original values and in addition to that you can get sub samples values so different spatial and spectral
[2:12:18] sunsets it's the same way as use your sub sample Matrix in Python they are very similar where you could get
[2:12:28] sub-sample data from hub API and actually just downloading the data from Sentinel Hub uh you you quite
[2:12:41] often can accompany a company a sentinel 2 at least with the CLP which is the cloud probability mask which is a bit of
[2:12:50] an improvement uh from what is originally available so you're able to mask the clouds a little bit better
[2:12:59] yeah that that's thanks for pointing this out and the data is actually uh supplemented by additional masks and
[2:13:07] additional information that is very useful for statistical analysis okay thank you both Kristoff and mate uh question seven are the points in the
[2:13:19] time series representative of each period example like a month or is it the chosen area's mean okay the samples
[2:13:32] are involved in our spatial average so we have selected a land parcel and you can select many Parcels you can get Vector
[2:13:43] data for this and an average or basic statistics for that area maximum standard deviation are computed for each timestamp so you get the
[2:13:55] statistics for each timestamp however the statistical API also enables you to do the time aggregation of the data data
[2:14:04] like Computing the maximum value in a certain period of time or Computing the average value in a month in a week that
[2:14:13] is being performed in the cloud and when you are getting back back the statistics this is the information that you that
[2:14:21] you are getting so the answer is for a particular point in time you get the spatial statistics
[2:14:29] for the area thank you Kristoff question eight does sentinel Hub support exporting.csv stats via the API or only
[2:14:42] through the browser as shown if you want to you can answer basically basically we have started an EO browser just for
[2:14:59] demonstration purposes but whatever you can go on yeah but we would quite often actually suggest using the python script that we
[2:15:09] have added and you actually have way more options and you're very flexible in what formats what are you doing what are
[2:15:17] you using so really you can explore uh many different various things and Analysis once using the python API
[2:15:27] I will send you for basic playing you could just use your browser select their area and download the CSV and explore it
[2:15:35] in Excel but for any practical work statistical API is the way to go great question nine is very similar to
[2:15:49] question two that we received earlier has to do with the vegetation index in the traffic so how important is the ndvi
[2:15:55] method for monitoring crops in the tropics area tropical areas because of the cloud cover uh yes this is uh similar to the
[2:16:07] question question before the solution to monitor crops in the tropics is to use radar in combination combination and Optical data because the cloud
[2:16:19] coverage is uh for any area just High radar might be the only option option when we are using machine
[2:16:30] learning especially deep learning we can use radar we can use radar to to compute the the ndei data from from it and we
[2:16:44] have included here a link to a paper where uh sentiment one was used to compute the ndvi and then use this simulated or
[2:16:55] computed values for time series analysis a great question number 10. in the Sentinel Hub EO browser can we upload
[2:17:09] ground truth shapefiles of of area of interest for getting time series and can we download the results of analysis or
[2:17:17] do we require a license the statistics on any uh shape that you have provided and you will be actually
[2:17:29] able to download it similarly to what we did now during the the example that we've shown but you would not require a
[2:17:39] license to do so and you're free to share this data as well wonderful question number 11. is maintaining the balance of the
[2:17:53] classes or the number of class specific pixels in The Mask essential when classifying something or making a mask
[2:18:00] necessary for instance 90 pixels for a woodland 100 pixels for water Etc Etc yeah and this is quite important
[2:18:10] especially uh depending on what machine learning model you're using but quite often often when you have such minor differences
[2:18:18] this is not a problem but when it's for example a 90 percent uh difference between the majority and the other
[2:18:25] classes this needs to be addressed and we have to adapt our model our training our machine learning to this but this is
[2:18:35] also quite connected to what we're trying to achieve with the machine learning that we're doing so usually you
[2:18:42] iterate you choose something one of these these approaches and then you see what actually is able to
[2:18:50] bring you closer to the desired result great thank you mate question number 12. uh it asks how small was your sample
[2:19:05] for example in the ego browser was of course quite smooth it was half a square kilometer this was just for
[2:19:17] the the statistics in Royal time and uh you can use a lot of polygons computer statistics with one another
[2:19:33] launch area see uh a smaller region or something like that okay however be aware and monitor the sentence data data
[2:19:46] processing usage in the second half then uh great question number 13. um how do you classify those crops which
[2:20:04] have very similar phenology Cycles example barley and wheat or sorghum and pearl millet this actually can pose quite a problem
[2:20:16] uh and it's difficult but it's really important uh even more important these cases that we have a good training data
[2:20:25] set set um because otherwise the accuracy will be learned and we will be confusing the classes and we usually expect that the
[2:20:34] dominant crop actually the one that occurs more often will have a higher accuracy accuracy um but we might be able to overcome this
[2:20:43] with really dense time series or even multi-year data but when we are talking about extremely dense time series we are
[2:20:55] thinking about the planet's data which is actually daily daily day of course the benefit is not available for free
[2:21:08] wonderful question number 14 can we work with all of the can we work with all the 13 bands of Sentinel 2 and how seamless
[2:21:17] is it to use this to estimate biomass well if I start yes you can you can work
[2:21:27] with all the certain bands coming from from Sentinel 2 they are all available as already mentioned you can download
[2:21:34] the data and process process the data uh however then you might use only 10 meter resolution data so the four bands the
[2:21:45] red green blue and new infrared data or the order resolution data they're both described in the it's used
[2:21:57] it's almost the same so have a look at the web page and you will see that it is very
[2:22:05] similariously journals either level with all the bands or I also also the indices so you can compute
[2:22:18] several vegetation and other indices and forget about the romance and you 'll just in the system so time series and
[2:22:28] regarding the environment estimation their studies but it does depends on of course the quality of reference data and might you
[2:22:40] might require also either right and radar data and similar sensors 18 is how can we set a specific range of
[2:22:48] each band to display a satellite image uh example band 4 and the red Channel with a limit of 0 to 0.5 percent
[2:22:56] reflectance likewise for other RGB bands uh yes uh this is a very good question and the answer is yes you can change the
[2:23:10] visualizations on your browser first you can just select different events and then you can use the you can use custom
[2:23:19] scripts for for the visualization and custom scripts are actually javascripts where you can specify the range of
[2:23:27] events you can compute the statistics the minimum of the maximum the percentage that is displayed displayed and this JavaScript can also be more
[2:23:38] complex they can compute the different indices as I already mentioned or they can make other visualization like
[2:23:46] thresholding and so on so it is a very information right and these this JavaScript interface can use both with
[2:23:56] your browser for immediate visual as an input or something and a half plus API so you can use the same script to
[2:24:07] get the data visualized in your browser or Computing the statistics Computing with Sentinel Hub API there's actually a web page with
[2:24:20] the custom scripts that are available and you can get all the scripts or manuscripts on GitHub already the link
[2:24:30] to the page will be listed in in the notes uh great question number 19 has to deal
[2:24:39] with interferograms so how do you generate interferograms from Sentinel one data uh you can always this has been resolved
[2:24:58] so to generate software programs we are using uh snap snap is a software that is available for free from a European space
[2:25:09] agency and it is a very useful software for processing both Optical and greater data and if you want to generate
[2:25:20] interference with the Sentinel one data you have to download simple complex data and then you can process this data
[2:25:31] locally either manually the snap or automatically with Python scripts and snap graphical graphical workflow and this takes quite some time no so
[2:25:46] there will be a link to snap download and to tutorial for processing this data and in addition to that we have been
[2:25:54] speaking about the access to the standard to the Copernicus data through through different methods and one of the
[2:26:03] platform is called create ideas which is not free and this is according to my knowledge the only one that has already
[2:26:11] pre-completed coherence coherence data okay great thank you Kristoff question 20. 20. where can I find the information I need
[2:26:25] to fill the instance ID client ID and client secret fields in the sentinelhub.id file uh this information can be found in the
[2:26:35] Sentinel Hub dashboard and if you'll go through the recording again in a self-paced you'll be able to see there
[2:26:43] is a slide where it is specifically specified that instance ID can be found under configuration ideally utility
[2:26:51] client ID can be found under users user settings and while the secular secret ID client secret will be actually visible
[2:27:01] uh once you create a new client and you will decide on uh what to name it and
[2:27:07] you will be able to see the secret but only for one time so make sure to copy
[2:27:13] it somewhere great uh thank you mate well we are nearing uh the top of for I guess the
[2:27:23] end of the the training we have two minutes left as we conclude the second part of the training uh this uh the
[2:27:29] English session as we wrap up I did want to give both Dr osteer and and mate an
[2:27:35] opportunity to maybe any closing thoughts or comments that they might have for the participants that are still
[2:27:41] on today's call and Dr astir why don't we start with you okay thanks it was a pleasure
[2:27:48] talking to the participants wonderful time for our observation we have dance or better dance time series we have all or almost all the data that
[2:28:03] we need now we have to use this data wisely and we and with machine learning method but not
[2:28:08] not in battles but we have to be careful to provide a very good uh or clever solutions to our to our environment
[2:28:18] environment environment uh there was also a question regarding sending a hub as in the frame that planet
[2:28:28] I believe that not a lot will change this sentence the company will remain even in the frame of planet that will
[2:28:39] remain providing the same Services uh it will be actually even better integrated with other other data and mate did you have any interesting
[2:28:53] thoughts or comments for the participants participants thank you uh yeah I was it was quite a pleasure and uh seeing so many questions
[2:29:00] I really am looking forward to what advances will be there and hoping to see all of you on any upcoming conferences
[2:29:09] to share and see what we have been up to and don't forget credentials you have yes this is this is a terrific
[2:29:23] opportunity for for everybody that's participating in this training we do strongly encourage you go explore Central Hub uh see its applications its
[2:29:32] utility for your own research for your own uh work if it's you know if it's some type of operational work that
[2:29:37] you're doing in the field of of Agriculture Etc definitely do take advantage of this opportunity and the
[2:29:43] credentials that you have to explore Central Hub it's a really great opportunity that uh that is being
[2:29:48] provided uh we want to thank uh very very much to Dr Christopher and emote rachich for an amazing presentation and
[2:29:56] demonstration uh thank you both so so much for all the participants we will be if we did not address your question
[2:30:03] because unfortunately we're out of time but we will finish uh answering all of your questions and we will post this
[2:30:10] this uh word this doc to the training Page by next week so next Tuesday when we have the final part of this webinar
[2:30:16] series we hope to have this uh finished edited and on there so that you can see get an answer to your question it was
[2:30:22] not answered today so thank you to all the participants we we wherever you're joining from whatever time zone you're
[2:30:29] in we we greatly appreciate you joining us today and lastly I want to thank the rset team who's working in the
[2:30:35] background to to make this training possible uh that Sarah cutshall Brock plebins and Natasha so thank you
[2:30:41] everybody for for joining and we look forward to seeing you in our last part of the webinar series next Tuesday
[2:30:46] goodbye
