# Sen4Stat Open-Source Toolbox (Theory and Practical), Part 3/4

`https://www.youtube.com/watch?v=IQXtWowwkAs` · id 144 · 1:57:59 · module 99 — Fundamentals of Satellite Remote Sensing for Health Monitoring

[00:00] hello hello my name is pierre defoni from the university of louisville in belgium belgium and it is my pleasure
[00:09] to introduce the centrostat open source toolbox for large calicrop mapping this is the third part of a training
[00:20] entitled mapping crops and their biophysical characteristics with polar metrics are an optical remote sensing this third part
[00:33] will be followed by a fourth training session which allow you to be introduced to crop specific time theory analysis
[00:44] for growth monitoring this this fourth session will take advantage of the lesson learned today the two-day session is organized in four
[01:00] sections sections first we will identify and understand the key challenges for large-scale crop mapping mapping using high spatial resolution data
[01:15] the section 2 will introduce the send for stat toolbox solution for logical crop mapping section 3 will show how to use practically the
[01:32] send for task toolbox for crop mapping we will complete with section 4 by a question and answer session
[01:47] but first let me introduce why today today we can consider mapping very large area of agricultural land
[02:00] land and even monitoring the crop development along the season in a real time at 10 meter resolution
[02:08] for any large country the main reason which make this feasible are display here new satellite missions and i.t revolutions have completely
[02:25] changed the game of agriculture application using satellite observation indeed indeed following the landsat decades of observation the european copernicus program
[02:45] launched a set of satellites which make a big difference sentinel 1 and sentinel 2 are providing today
[02:57] for any part of the world a systematic coverage which is free open and available on the long term
[03:09] this data policy allowed today to develop develop fully operational solution in agriculture application radarsat constellation mission new space constellation like the one
[03:24] from planets make sure that we have complementary information information to this major mission which are landsat and sentinel missions
[03:37] the second reason why the game is changing is the availability of cloud computing infrastructure these servers farms
[03:51] allow today to store the full earth observation data archive and to make it available to all at a low cost
[04:03] allowing the exploitation at low or reduced cost a third reason is related to the smartphone equipped by gps
[04:18] this this application running a smartphone are turning anybody any person in the world world in a data collection
[04:30] people people this this allow allow to collect ground observation all over the area area in a very wide
[04:42] way way combine some time with uav which allow to have also a large sampling sampling of observation
[04:54] this ground are essential for agriculture application a fourth reason is is the better organization of the international community
[05:10] for instance through the sears through the gcam network which allow in the context of your glam to develop joint experiment for crop
[05:21] assessment assessment across different sites in the world or similarly the acmep community allowing to share experience around agronomic models
[05:36] a fifth reason is the development of a set of open to open source toolbox very much dedicated to agriculture
[05:47] application application which make use of the big data are available today this open source application application allow to address the challenge of big
[06:01] data all together these reasons can can make us able to say that this is operational to derive a set of
[06:17] agriculture products from earth observation observation like crop mapping crop type mapping biophysical variables estimation estimation crop condition monitoring
[06:30] or even agricultural practice monitoring this this unlike previously can be done not only at landscape level but at field level
[06:43] and even some time at intra field level therefore the question today is as follow follow how can we take advantage
[06:54] of the copernicus centennial one and sentinel-2 data for crop mapping you an operational manner manner at national scale
[07:07] before going into this question let's have a look at the sentinel-2 mission mission as you know there are two satellite
[07:18] orbiting around your planet each satellite have an orbit with a path of y swap of 290 kilometer and you will need several
[07:32] passes passes to cover a given country and it may take up to five days if there is any cloud to have a wall-to-wall
[07:42] coverage coverage of a given country but of course unlike on this planet more than 50 percent of the area is
[07:50] covered by cloud which make much longer the period to cover a given country only once let's start with the section one
[08:07] challenges for large scale crop mapping and ice functional resolution this is very different than all the modis or spot vegetation
[08:16] application which was which were on daily coverage with a very wide swap allowing to cover on a daily manner any country
[08:28] today the high resolution satellite imagery imagery provides a set of challenge that we need to address these challenges are in addition to the
[08:40] big data challenge related to the volume of imagery imagery and also the corresponding idea requirement on the top of this constraint
[08:55] three main challenges need to be defined first first the observing satellite system as the one we have just seen
[09:05] at high resolution do not cover large area at once as we have seen sentinel to instrument swap is
[09:15] 290 kilometer sentinel 1 interferometric y-swap mode cover only 250 kilometer per orbit and in addition to that
[09:30] there is an overlap between images acquired from adjacent orbits finally finally there is an increasing overlap between adjacent orbit
[09:45] due to converging orbit to the north pole pole this effect is very well illustrated on the picture on the right side where
[09:55] we can see the coverage of sentinel 1 over europe while the revisit cycle is at the equator
[10:05] equator 12 days for a given satellite with two satellites we will have six days at the equator
[10:14] but within three months from july to september we will have 7 47 observation observation at the latitude of spain
[10:26] when we move norway we can reach up to 105 observation for the same period thanks to the overlapping orbit
[10:38] due to the converging path this this geometrical feature define the heterogeneity of observation density across the area
[10:55] the second challenge is related to the code coverage frequency which is as you know quite variable and will limit
[11:04] the valid observation recorded by optical system in addition the non-systematic acquisition plan of sar system and some optical system
[11:20] will introduce some viability in term of coverage coverage over space and time meaning that combining all we will have a large heterogeneity
[11:35] of valid observation density across the area partly due to the geometrical effect secondly due to the cloud coverage and
[11:47] the non-systematic acquisition plan the third main challenge is related to the ground surface indeed over a large area we can observe
[12:02] significant agroclimatic gradient meaning that the rainfall will vary from one area to another the temperature will vary from one area to another
[12:14] introducing large viability and crop development in crop calendar and even in land cover development this will lead to
[12:27] a very large diversity for a given crop type for instance within a same country we may have a
[12:37] given crop type which is the emergence while on the other side of the country we are close to the harvest
[12:45] there is no way we can combine these two signatures in a given crop type let's look more detail through an
[12:59] example example but what is so special with large scale chrome mapping we just mentioned the three challenges
[13:09] already identify but for code mapping what is also very special is the role of the temporal resolution
[13:18] which is very critical for crop discrimination discrimination indeed indeed the crops are all vegetated material and the
[13:30] timing of their development will make the difference between crops and therefore the temporal resolution is a critical
[13:40] feature for a good crop mapping looking at the example of sudo we will have a number of granules to
[13:51] cover the entire country the scenes provided by landsat will split the country into the the blue square
[14:03] while the tile provided to sentinel will correspond to the red square or the red rectangle we will have many orbit many dates of
[14:17] observation to be combined to get a wall-to-wall coverage but let's look first at the number of valid image
[14:27] meaning that an image needs to have a cloud cover less than 10 to be valid when we
[14:36] consider the period from march 2017 to february 2018 12 months as you can see for some area in sudan
[14:46] the reddish area we are close to 10 observations only for 12 months while when we look at the red the green
[14:56] area we will have up to 70 observation for the same year this corresponds clearly to the overlapping area
[15:07] of the sentinel orbit the heterogeneity of the sentinel observation observation and the heterogeneity of the landsat 8 observation that you
[15:21] can see below below will make very difficult the use of these time series as they are therefore a first solution to cope with
[15:39] this heterogeneous valid observation density density is to proceed through monthly synthesis this means that we will combine all the
[15:51] code free reflectances acquire over a given month and we average them to provide a single image for this month
[16:04] each band will be averaged separately allowing to consider color composition like this one that you can see on the display
[16:16] of course as you can visualize there are several artifacts which are due to the viability of the input data
[16:25] due to the diversity of atmospheric correction correction and the diversity of the related performances most importantly working with monthly composite will
[16:40] reduce the temporal resolution to a month month which is critical for the crop discrimination several methods are available
[16:54] to complete this temporal synthesis many of them are averaging all cloud-free reflectances acquired during the given period
[17:05] you can see the benchmarking of different methods on the right side of the slide where we use several averaging methods
[17:17] and more classical mean value composite or maximum value composite approach the idea is when you have a time series
[17:30] you have a set of valid pixels as it is illustrated on the left side of the image
[17:38] and you can run a quality control to figure out which one are the most valid pixels pixels you we can use all these quality control
[17:48] valid valid value of reflectances and average them to to assign the mean to the same pixel by doing so for each pixel pixel by
[18:01] pixel pixel spectral band by perspective we will build up the synthesis of course there are more sophisticated
[18:11] approaches like the one selected by centrostat centrostat which correspond to the weighted average synthesis processor where in addition of the simple average
[18:25] we will weight the value according to the distance of the debt with regards to the central date of the
[18:34] composite period we will wait also the value according to the aerosol optic optical thickness similarly similarly the
[18:49] the pixel close to a cloud or a given dead will be weighted as there may be more perturbated than
[18:58] the one far from the cloud finally finally we will give priority to sentinel 2 with regards to landsat 8
[19:10] because of the special resolution of these two sensors such a sophisticated approach allowed to reduce significantly the compositing
[19:22] artifact artifact providing providing nice visual product still still the monthly temporal resolution is not suitable for chrome
[19:35] discrimination discrimination however however in some country where the cloud free free synthesis are so nice it could be feasible
[19:48] to use this monthly temporal series series for the crop discrimination we can have a look here we are in the
[20:00] western cape province in south africa with monthly composite for the month of june here the month of july
[20:11] the months of august where the reddish area now corresponds to the growing season going to september with the senescence
[20:21] phase phase and then the october starting with the harvest and the november completing the harvest and showing the bursary
[20:32] such a nice time theory of monthly composite will probably allow a good crop discrimination however however in most countries
[20:44] such a nice time today won't be feasible and will have many artifacts and many missing data even at the monthly
[20:54] timestamp a similar approach can be used for the microwave domain indeed indeed the solution to the cloud as you know is
[21:08] the use of the sar mission however however the speaker is very well known and this is a random component in the
[21:19] sar signal that can be reduced by averaging averaging all the observation available for a given period this provide
[21:30] produce a large noise reduction as you can see on the left side of the image here we see
[21:38] the mean of the coherence value [Music] [Music] acquired during the months of march 2017 over netherlands these are interferometric pairs used for
[21:52] the coherence computation such a noise-free imagery allowed to be combined with several one to produce the nice color composite that
[22:06] you have on the right side of the slide that kind of color composite are also very interesting for crop discrimination
[22:17] as you can imagine from the visual inspection of course neither for the optical nor for the sun
[22:29] the temporal synthesis will solve the critical problem of the temporal resolution needed for the crop discrimination therefore
[22:42] therefore a second solution to cope with the heterogeneous observation density of a large area which is different than the monthly
[22:53] compositing compositing is is implemented in the central stat this corresponds to the production of an optical time series
[23:05] or or of a certain series which will be gap-filled gap-filled using linear interpolation with respect to missing data
[23:17] therefore therefore the missing data due to cloud to cloud shadows to no data to unvalidate data will be replaced by the gap field value
[23:28] this provides a continuous profile over the full-time series then then the continuous profile can be resampled in the time dimension
[23:43] at the regular interval to synchronize all the observation to specific dates this approach provides provides the same observation dates
[23:59] over the whole area independently from the sensor orbit and the cloud cover occurrence which is very critical
[24:11] because this allowed to run most of the classification methods this synchronization is instrumental for large-scale mapping applications
[24:35] let's come back to our sudan south sudan example looking at the country and the meteorological map we can see a major rainfall gradients
[24:48] across the country this gradient will of course define two different crop calendar on one side we have a
[25:03] one season production area area where we have a calendar starting in april with a growing season in june and
[25:11] july august and the harvest in september for the main crop and then some crop with the long cycle hop will have a bit
[25:20] longer growing season on the other side where the rainfall are more abundant we can have a b
[25:32] b seasonal cropping system with the first crop starting earlier than the other one with a growing season starting even in may
[25:45] and ending by the harvest in august and then a second crop growing growing from october to december
[25:57] we can understand that we cannot mix the maze from the second crop season season in the southern part
[26:06] with the maze of the northern part there will be a different stages different stages for a given date
[26:18] therefore therefore the only way to proceed is to stratify the country into different zones in this case
[26:28] two zones have been defined according to the agroclimatic gradients and the administrative regions these two zones are displayed here and
[26:41] will be classified completely separately of course when we proceed by stratification we will have to calibrate a specific model
[26:55] for each stratum this will require to collect enough ground observation for each zone not only for the crop type
[27:05] but also for all the non-agricultural classes indeed indeed nine land cover class need to be distinguished as well
[27:18] to retrieve and identify specifically the crop type therefore therefore the sampling here was was good enough to collect
[27:32] 4000 4000 sample sample widely distributed in the country however however we need to pre to split this into
[27:43] two two zone corresponding to the stratification making maybe 2 300 available for each zone in addition we will have
[27:59] the nine lan cover type which are not non-crop non-crop and a dozen of crop type meaning that
[28:08] we will have 21 21 classes classes to to calibrate calibrate for each stratum this give us an average 100 sample
[28:23] for each crop type for each cartoon this illustrates why stratification needs to be handled carefully carefully because it multiply
[28:37] very very quickly the number of ground observation needed for the large scale crop type mapping let's proceed now with section 2
[28:55] to introduce the send for start toolbox in order to map large scale area in terms of crop type
[29:07] centrostat is a nisa open source toolbox for operational crop type mapping and crop condition monitoring over very
[29:16] large area this toolbox is able to process centennial 1 sentinel 2 and landsat 8 and 9. time series according to a state
[29:28] of the art methods including advancer product this toolbox can deliver automatically or on requests five type of product which are related
[29:43] to processors they can be delivered in the real time along the satellite data acquisition or offline on request
[29:55] the five type of product are as follow the first one is the 10 meter optical cloud-free temporal synthesis
[30:05] as well as a 10 meter sar temporal synthesis the second one is the time series of spectral indices
[30:18] like ndvi brightness and dwi hydration disease and so on and and the biophysical variable estimation like lai f cover fa power
[30:34] a third kind of product are the crop type map at 10 meter resolution resolution which are produced as i just mentioned
[30:43] along the season based on in situ dataset and possibly stratification the first kind of type of product
[30:58] correspond to a large set of crop course condition metrics including even meteorological datasets the last but not least
[31:09] type of product are related to crop hill estimation at various aggregation level either national regional or local
[31:22] these five type of products are fully complementary complementary they can be combined to each other in order to add value to the information
[31:36] this open source toolbox may look a bit complex complex it is a very large machinery which can run all cloud computing
[31:47] infrastructure infrastructure are on your local server the first part on the left side corresponds to the data access
[31:57] or the automated download the second part refers to the pre-processing step for the the different missions considered in this
[32:10] data set and the in-situ quality control the third part corresponds to the core area of the toolbox
[32:22] toolbox which deliver the five type of product we just mentioned the last part on the right side
[32:32] refer to the analytic tools and the visualization visualization of the product this open source toolbox toolbox got a graphical user interface to
[32:51] configure the system and to launch the production production or to monitor the processes the system needs to be configured
[33:02] before the start of the season if you want to run in the real time of course you can also run it offline
[33:11] and therefore you can configure the system whenever you like a few set of parameters need to be defined in
[33:23] order to launch the production first first your area of interest needs to be delineated delineated as a share file to be uploaded
[33:37] then for this given area you need to select the growing season of interest corresponding to the monitoring period
[33:47] you will have to indicate the start and the end of this monitoring period you can then select
[33:56] the type of mission you want to use on the monitoring sentinel 2 sent to length 2 and landsat 8 and 9
[34:07] or sentinel 1 centennial 2 and that's at 8 and 9. any combination is possible allowing to tune the data set
[34:19] to the region of interest then then the data source has to be defined to get the data automatically
[34:30] or to get access on the cloud infrastructure therefore you can select your own data set where you have your
[34:38] own credential or your own access to data this can be your local storage on your own server
[34:49] of course this allow to define the overall sets of parameters parameters but then you will have to
[34:59] trigger some action like the fee data campaign which rely on a good sampling design that we will mention
[35:09] possibly including stratification [Music] [Music] you will have to go to the field or people will get the data
[35:20] available for you in order to be able to link the crop type on the field and the
[35:28] location of this field data set is very much required for the calibration of the classification module this is the reason why you will have to
[35:44] upload that for that kind of processor the system is illustrated here while running in real time as soon as the data are available
[36:03] on the catalog on the size app or on the usgs website they are downloaded to the local server
[36:13] once they are downloaded they are pre-processed pre-processed atmospherically corrected closed screen and turned into livery index in this
[36:23] case case this allows you to deliver leave area index map for the whole area of interest along the season
[36:36] of course anomaly can be detected and heterogeneity or growing condition can be mapped we can look at this
[36:49] in southern africa for for some irrigated area where this color composition allowed to see the crop type
[37:00] same with the near infrared color composition composition and then the time series of liver index recorded here on the 27th of october
[37:12] and then on the mid november and then on the late november then on the early december late december
[37:24] and finally the early january dead before we get the harvest and the end of the season in april
[37:35] as you can see here the heterogeneity of the growing condition could be accessed very nicely for each pixel you can derive a temporal
[37:46] profile of the lai allowing to derive some temporal metrics like the area under the curve of the lai
[37:55] maximum which are metrics usually related to the crop heat the system operation that we have been running as illustrated before
[38:11] can actually be operating in two different modes in the real time using the orchestrator or on request
[38:24] the automaton mode which is configured from the web graphical interface will make use of the orchestrator to run automatically
[38:36] based on the by default parametrization the download will be checked checked every hours the processing will be
[38:47] triggered based on the availability of a new image or of a new institute data set which trigger the production of a cop
[38:58] type map for instance this is very much suited for operational production in neural time of course this automated mode can be run
[39:10] also also on user request whenever you want alternatively alternatively the manual mode can run processor independently using
[39:26] using custom job the custom job allows you to define your own custom parameter and will run on its own
[39:36] for a dedicated task as you have defined you can see below below the dashboard which allow to
[39:47] assess the resource use use on your computer for the different processors this is very important of course to make
[39:58] sure that you got enough storage you got enough cpu and you got enough memory institute data collection is very much
[40:12] required for the annual crop time mapping as you know either you will be able to rely on
[40:20] available reference data set typically collected according to an area or a list sampling frame by the ministry of agriculture or
[40:30] by national statistical surveys if no data is available you will have to organize a field campaign campaign and this can be done according to the
[40:42] gcam guidelines typically typically a pragmatic approach will proceed with a windshield survey using motorized vehicles like the car
[40:54] motorbike motorbike or even plane which select a set of appropriate roads and a set of complementary roads
[41:05] to make sure that we will reduce the bias bias linked to the observation from the rules of course
[41:14] roadside sampling is not the most randomly randomly secure sample but this is a very pragmatic approach to
[41:25] cover very large area the requirements for the institute data collection are as follows they are very different according to the
[41:37] use of the dataset the reference ground information can be used for calibration you will need a sampling
[41:49] that covers the diversity of situation existing in the study area the purpose is to cover the range of the
[42:00] possible signature for the different element of interest typically the crop type on all the main non-copland classes
[42:14] another use of the institute dataset is the validation to estimate the product accuracy to do so you need to rely on a
[42:26] statistically sound sampling to be objective and independent of course ideally you will have to sample randomly through all
[42:39] the study area however for logistic reason sampling completely random is not feasible feasible and we would rather prefer a two-stage
[42:53] sampling sampling to assess the crop type at different scale does two-stage sampling rely on primary sampling unit which can be villages
[43:07] and those villages have to be randomly selected selected and then you may have elementary sampling unit which correspond to fields
[43:17] which are randomly selected along the roads roads as we mentioned it before according to the gcm guidelines
[43:26] guidelines combining the primary sampling unit and the elementary and sampling unit will allow to set save a lot of time in
[43:35] transportation and validation field campaign for crop time mapping can be combined they are tedious and heavy operation
[43:49] but if they are combined then the sampling design should be statistically sound to obtain a fully independent data set which is required
[43:59] for the validation once you got the institute data collected on the ground we have to proceed with the quality
[44:12] control process and the data set preparation to build a high quality reference dataset collection you need to have a reliable field
[44:23] campaign for the non-crop area area you may rely on visual interpretation of very high spatial resolution imagery
[44:36] available online google earth's image bing image allows you to identify the forest the water the urban area
[44:48] while for the crop type you have to go to the field the quality control of this dataset collected on ground
[45:01] will proceed with a geometric consistency check a typology to standardization and a homogeneous check this may discard several polygons which
[45:15] were selected on the ground but this is the only way to get a high reference quality data set
[45:28] then then according to the use of the dataset we have to split the polygon into calibration and validation
[45:38] typically a quarter of the dataset will be allocated to calibration and the rest to the validation the split will take place at the polygon
[45:51] level and not at pixel level in some cases because of a poorly balanced institute data set we may
[46:01] have to require some alternative strategy strategy more complex but already designed in the central start system last but not least
[46:15] for the mad original crop type which were not frequent in the dataset collected on the ground we need to enhance
[46:25] this sample using the synthetic minority over sampling technique this is also part of the centrostar system system for the institute dataset preparation
[46:43] this data set serving as reference for validation will allow to compute confusion matrix where we match the classification with
[46:54] regards to the reference data this confusion matrix allow to compute four different metrics which are as follows
[47:05] the overall accuracy that you all know corresponding to the diagonal of the element divided by the number of sample
[47:17] the user accuracy also called precision corresponding to the fraction of the correctly classified pixel with regard to all pixels classified
[47:29] as this class in the classifier image and the producer accuracy corresponding to the fraction of koi this classifier pixel
[47:39] with regard to all pixels on the icon through the class the combination of precision and recall or of user accuracy and producer
[47:52] accuracy accuracy allow to compute a single matrix which is very interesting for each class named f score
[48:03] the f score is a harmonic mean of the precision and recall and will vary from one to zero
[48:12] one being the best score f-score is a very nice matrix because it is a synthetic which refer to each class separately
[48:27] ok let's run again the system in an automatic mode to deliver in near real time a 10 10 meter crop type map at national
[48:39] scale scale to do so we will download the data from the sentinel 2 app from the usgs land subway service
[48:49] and the sentinel one signs up all these data are pre-processed as they arrive into the the server
[49:00] but then we have to upload the in-situ data data as we proceed in the season as soon as the in-situ data are uploaded
[49:11] this trigger the production of a crop type map at the dead of of the delivery a first crop type map which could be
[49:22] what we call the mid-season crop time map will be produced automatically of course the season will continue and
[49:32] new acquisition will be acquired maybe new in-situ data will be also uploaded and will allow to proceed with a final
[49:42] crop type map at the end of the season this final crop type map of course is expected to be better
[49:50] providing better accuracy metrics this is the way it could be running for large-scale area and it has been running
[50:02] since 2016. indeed indeed in 2016 the very first 10 meter national cropland and crop time map based on sentinel 2a only
[50:16] with deliver for ukraine the overall accuracy for the cropland was 96 percent while the overall accuracy for crop type
[50:27] was 81 percent this allowed to derive the proportion of the different crop for the different oblast the district
[50:37] area in ukraine following our south sudan example of the beginning of this session we can look at the result
[50:50] and see how the mid-season cropland mask can perform compared to the ant-season cropland mass if you can see the overall accuracy is
[51:02] rather similar the f1 score non-cropland is similar but but the f1 score coplan is increasing significantly this is expected as we got more data at
[51:18] the end of the season to discriminate the cropland from the non-cropland we can also look at the result at the
[51:27] stratum level as you remember we should divide the south sudan into zone corresponding to two calendars calendars and we see the same kind of result
[51:43] the f1 score for the cropland area improved from the mid-season to the end of season while the other metrics are rather
[51:53] similar in mali the the cloud-free composite has been delivered from the sentinel-2 imagery on a monthly basis as you can
[52:10] see here and the data have been processed to deliver another crop plan and another crop type but only for the southern part
[52:20] of mali in this case this involves more than 4.5 terabyte of sentinel 2 data corresponding to 2152
[52:33] sentinel 2 imager and 542 landsat 8 images the overall accuracy for the cropland are nice the cop type map
[52:47] shows an overall accuracy which is radar 4.66 of course we can visually also check the quality of the crop type map and as you
[53:01] can see here or even here the pixel based classification looks quite nice as we can distinguish the different pattern of
[53:13] the field of course this is not enough to be able to to consider this as a good area estimate
[53:24] for the crop type this data center in fact was produced with the precursor of zenfone stat which is the sent to agree system
[53:40] sent to agree system is a precursor because it runs only from sentinel-2 and landsat 8 and it can deliver only these four kind
[53:49] of product in a more basic way however this sentinel to agree system is available available and can deliver
[53:59] on on requests or automatically all these different products cent for start is a more complete and more operational solution
[54:15] for national processing and for local application to take advantage of sentinel one and 2 in addition to landsat 8 and last
[54:25] night night indeed indeed there is a state-of-the-art sar processing toolbox which allow to provide high level products
[54:36] that like the coherence are the cross ratio and many other backscattering coefficient that i will illustrate right now
[54:49] the sun for start is is running open source toolbox which is based on ortho using the orchestrator in the slum
[55:03] architecture architecture and using the snap toolbox which is also introduced in the context of this training the whole system runs on centos 7 which
[55:16] is the operating system allowing to have a very reliable production line the state of the r sub sub processing
[55:28] corresponds to this beta node which are the slant range geometry of the backscattering coefficient coefficient which is not
[55:38] used sigma node is the corrected for the local incidence angle and which is a common backscattering coefficient
[55:49] while in some area we may need to run the gamma node correction which flatten using a digital elevation model
[56:00] this gamma node is computer intensive and therefore we will not apply this correction when it's not needed
[56:13] the processor corresponding to the crop time mapping module module is based on the random forest as a
[56:22] classifier by default in addition there is a deep learning alternative corresponding to neuronal net in the transformer
[56:34] type specific quality control of institute data set are applied for this crop type module to balance the calibration data set
[56:48] and and a set of features are used to discriminate the crop type this is a large set which involve all
[56:57] the time series of the mission we mentioned mentioned but also ndvi and then why that indices brightness time series
[57:07] as well as polarization ratio time series series and in addition a set of temporal metrics derived from the above time series
[57:18] and and a set of sentinel one temporal metrics derived from the start time series this provide us a large set of feature
[57:29] giving more chance to discriminate difficult crop type the random forest is probably the most well-known classifier and i will not be very long on this
[57:43] but for recall this is based on decision trees a decision tree is a recursive partitions calibrated on training set
[57:55] to get regions which are increasingly increasing new increasingly homogeneous with respect to the class this this defined notes and criteria to
[58:10] discriminate between the different classes building a large number of screens led to the random forest which become an ensemble learning
[58:22] algorithm that combines multiple classification of the same data set to produce higher classification accuracies accuracies the random forest proceeds by bagging
[58:35] bagging will proceed with different subsets of training data and subset of features features which allow to avoid the overfitting
[58:49] of the models the banding begging will build a large set of trees and we will conduct a single majority vote to
[59:02] identify the most frequent class decide from all the trees for a given pixel this random forest will make use of the
[59:13] in-situ data to be able to build s model this has been applied for 35 crop type in spain in spain area
[59:27] where we got very similar accuracy from the random forest and the neuronal net transformer transformer the overall accuracy for 35 crop type is
[59:39] 80 80 while when we cluster the crop according to to their their their the group then we can reach up to
[59:50] 88 similarly similarly based on the existing national survey from the daphsa in senegal a random forest classification has been
[1:00:06] applied to sentinel-2 and landsat 8 temperatures only to get the cropland area the overall accuracy was 96 percent
[1:00:16] with a good f-score of 0.97 for the coplan the non-coplan is less accurate and may require additional polygons to better
[1:00:29] define the different non-coplan classes using the same data set but this time for the crop type map
[1:00:43] we could find that we reach a very poor accuracy accuracy 68 percent probably because of the unbalanced
[1:00:53] ground observation data set indeed as you can see in the confusion matrix matrix there is a lot of simple for the ground nuts
[1:01:04] there is a lot of sample for other classes classes while some other are very little simple this unbalanced
[1:01:15] data set will not allow the random forest to build the appropriate trees to recognize the all the different crop
[1:01:24] type type therefore therefore we propose to proceed with a new specific institute data collection for a small area as a pilot experiment
[1:01:38] in this case we select randomly across the landscape the field to be visited as the area was limited
[1:01:50] we have selected calibration data set which are completely distinct and fully independent to the validation data you can look at the split
[1:02:01] we have more calibration polygon than validation polygon because we have a small number of sample in total
[1:02:14] this allowed to process the coplan map and to reach a very good accuracy with a f-score of
[1:02:25] 98 from the cropland and this time f go for the non-crop line to 95 which is much better than the one we got from
[1:02:36] the existing data set and the senegal scale level on the left side you can see that the
[1:02:44] the different tiles coming from the sentinel 2 and never covering the area completely while our area is still very smooth
[1:02:56] this is to show that even for a small area like a department the send for start system can be quite
[1:03:03] relevant to be able to make use of all these satellite missions using the data set for not only the
[1:03:15] cropland but also the crop time mapping we can see the increase in the overall accuracy up to 84 percent
[1:03:25] thanks to much more balanced dataset you can have iron the urban glass in red the forest in green the water in
[1:03:35] blue and the crop type according to the legend here the ground nuts and the millet are very
[1:03:44] well classified with the f-score reaching 0.91 or 84 which is very suitable for copper area estimate estimate while actually the males
[1:03:58] still remain to a lower level most probably because of the lack of in-situ data but we have to say that the lack of the
[1:04:08] institute data correspond also to a very marginal situation of males in this area and therefore the error here need to be
[1:04:19] interpreted interpreted in term of importance with regard to the actual area of the crop in the landscape
[1:04:31] all these results i hope illustrate how we can make use of the the sentinel 1 sentinel 2 landsat time
[1:04:40] series thanks to the sunforstart system to deliver operational product for agriculture application the intention of 74 start is really the
[1:04:52] operational full-scale exploitation of this satellite mission to improve timely information delivery about crop area as we have shown here
[1:05:05] crop hill and crop production in at the end of course it will be very nice if national
[1:05:15] statistical office can make use of the system system to take advantage of their national survey survey and
[1:05:23] and improve their own statistic by using the earth observation into their process this is what is intended to be done in
[1:05:33] senegal and other countries in the context of the centrostar project this leads us to the section 3
[1:05:45] which will allow us to use practically the send for start toolbox and to run your own crop time mapping
[1:06:01] in this second part of the training we would like to introduce the send for start toolbox of course before getting access to the
[1:06:11] web interface of the sun for start you will have to run the installation package of them for start
[1:06:19] to install the system on your own computer or on any cloud conf cloud computing infrastructure that you
[1:06:28] may access to once the installation package has been run successfully you will have access to the send for
[1:06:37] start interface through the explorer explorer using using the logging display you can get in using the by default username which is
[1:06:52] sent for start and the by default password send for start this allow you to connect for the first time
[1:07:01] while later on you will be able to define new users that who to whom you want to get access to the
[1:07:10] system once you are login you get into the site manager where you can create your site creating a new site means that you will
[1:07:24] define the area that you want to monitor for the agriculture season this site can be run for many years or
[1:07:33] for once only and the site here will be in senegal in europe more precisely corresponding to a sundown area of senegal
[1:07:46] to define precisely this area you will have to upload a shapefile in a zip format which allows you to
[1:07:56] exactly ingest the definition of your site once the site has been created you are invited to edit it
[1:08:10] to define the mission you want to use for the the satellite data by default there will be the sentinel 2
[1:08:20] data but you can also select landsat 8 and 9 as well as sentinel one to make sure
[1:08:28] that you will get data even with the occurrence of frequent cloud coverage coverage you can see that your
[1:08:39] site or your area of interest correspond to the two tiles for sentinel 2 and for 5 scenes for landsat 8
[1:08:50] once you have the area and the mission selected you can define the season that you want to process
[1:08:59] but of course before defining the season you have to determine what kind of product you want to deliver
[1:09:07] the product we want to deliver here is a call type and this is the reason why we
[1:09:12] select the s4s crop mapping there are many pro processor that can be activated as you can see here
[1:09:21] but also some of them are activated by default as they correspond to the pre-processing of the sentinel one and sentinel-2
[1:09:31] imagery as well as code screening and other information like this of course you have also to define the
[1:09:40] season you want to look at and and you got to give a name and a starting date corresponding to the
[1:09:50] beginning of the season of agriculture production you want to monitor and map we will select the 1st of may
[1:09:59] then we can select a mid-season dead which correspond to the timing when we can hope to get an early crop
[1:10:09] type map and we will select the first of july because at that time several crop type can be already discriminated
[1:10:19] in this area most importantly is the final date which corresponds to the end of the season and we will select
[1:10:29] the 31st of december corresponding to the dead of the delivery of the crop type map the final
[1:10:38] crop type map these seasons need to be enabled meaning that it will be running once we will have save the season and
[1:10:49] configure all the remaining parameters we will save the season into the site and you can see here in the display that the site
[1:11:00] senegal neuro has been allocated with one season and one period starting from the 1st of may to the 31st of december
[1:11:14] now we need to find where to get the input data the satellite data by using the data sources manager
[1:11:24] we can select different source data up from where we will use the satellite mission data there are two ways either you are on the
[1:11:36] cloud infrastructure where you have already in storage the mission corresponding to the selection you made and therefore
[1:11:48] you will have to select this source and you will not have to download the data you will just get access to the
[1:11:56] data which are already stored in the cloud infrastructure this will be the most efficient way to run the system and this is why sent for
[1:12:05] stat is very much dedicated to run on cloud infrastructure as you will see the processing of a growing season for a
[1:12:15] large area requires a lot of product and therefore being close to the data storage is a major advantage
[1:12:23] alternatively alternatively if you don't get access to a cloud infrastructure and you are running on your own server
[1:12:31] then you will need to download the data from different data up and here you can select for instance
[1:12:38] several data app you can run from the send the sentinel to scientific data up of isa if you want but this will
[1:12:49] works only if you run in a real time because because isa is a rolling archive which is very
[1:12:56] short and you will have to download the data as they are acquired along the season season if you are not in such a timing then
[1:13:06] it's probably safer to get your data from a data up which stores the data for long like the luxembourg space agency data
[1:13:17] center where you can query the data event from previous years before you get access to such a download
[1:13:26] you will have to create your own account on the luxembourg space agency data center center get your credential that you can input
[1:13:35] here to make sure that the stanford start system will get authorized to download the data from the luxembourg
[1:13:43] space agency data center you have to enable this of course and there you will get the sentinel 2
[1:13:50] download download available available for the corresponding player next to the sentinel 2 you want to select landsat 8
[1:14:00] from the usgs data center and you can enable as well this download using your own credential from this
[1:14:10] landsat 8 usgs web service last but not least to get sentinel-1 data involved in your crop mapping you
[1:14:21] have to also download the sentinel-1 data data and we propose to use the same in this case
[1:14:28] case using the same credential from the luxembourg space agency data center this means that now we have been connecting
[1:14:37] from to the different source of data that we want to use for the crop type mapping mapping for our season
[1:14:47] once we have done that we need to activate the site and therefore we can select the on button to activate the site
[1:14:58] which start actually the download of the data this is very important to start the download and the pre-processing of the
[1:15:08] data as soon as you know that you want to monitor a growing season because this is a huge amount of data
[1:15:16] a lot of download a lot of pre-processing pre-processing and of course earlier we you will be able to do it to
[1:15:24] do it earlier you will be able to deliver your final product the pre-processing can run from the send
[1:15:32] to core l2a l2a data for sentinel 2 but you can also select other alternative for the atmospheric correction and the cloud
[1:15:44] screening like the maya or the fmask algorithm algorithm by by launching this download you can see that
[1:15:56] in from the system overview interface you can see the activity on your cpu where you see the the query
[1:16:05] starting starting for your area of interest for the mission that you have selected of course this will take quite a bit of
[1:16:15] time and will require to download a lot of data this is starting now and once we have uh select the right uh
[1:16:28] the the right data sources all the data will be coming down down you get here the statistics and the
[1:16:37] statistics in green show the number of product which has been already download in blue the ongoing one
[1:16:45] while in red are the failed one and in orange are the unsuccessful one which need to be repeat
[1:16:52] later on it is important to know that the system will check every hour if there is any
[1:17:01] other new data which can be used for your crop mapping meaning that for the three source for the three data up the system will
[1:17:11] check every hour if there is any new data to download as we have done this of course it will take a long
[1:17:21] time to get all the data available and this is a reason why we propose to show you how this work when you go
[1:17:29] to a site which has been already processed like the senegal senegal 2021st where you see that for the same
[1:17:38] area of interest you have 250 product which has been successfully downloaded and no failure and no remaining
[1:17:47] data product to be downloaded this allows us of course to check the statistic in detail and see
[1:17:58] when when these products have been acquired by the satellite and if if we got the right processing for all
[1:18:07] these these in blue you see the acquisition in green you see the process and the successful process of these available data
[1:18:17] you can do that for sentinel one for sentinel 2. we can never look at this product visually by going to the product tab
[1:18:28] where we can select the surface reflectance product which has been atmospherically corrected and therefore you see each by one here
[1:18:39] there is 140 product corresponding to the area of interest interest you see here a natural color composite
[1:18:48] that you can download from the from the system but of course there are so many that you don't intend to download them
[1:18:55] you want to process them where they are this is for the sentinel 2 we can never look for the sentinel 1
[1:19:04] to make sure that the amplitude product has been also properly pre-processed and available for our crop type mapping
[1:19:15] production production this is the case and this concludes the first step of the preparation of the system
[1:19:26] it's first term meaning that we have defined the area we have defined the period and we have defined the satellite
[1:19:33] mission we want to use as well as the data source from where we will download the data
[1:19:42] this allows us to move to the second part of the work which corresponds to the production of
[1:19:48] crop type mapping this is what we call a processor in the context of centrostat and the processor need to be configured
[1:20:01] for for the the production you see that there are many processors but today we focus only on the crop type
[1:20:10] mapping mapping using the random forest random forest as you know is a machine learning algorithm there will be many more available
[1:20:19] including deep learning algorithm very soon soon but right now the random forests correspond to the otb random forest implementation which is
[1:20:31] also a point source and where we can define a large number of parameters we can define the depth of the random
[1:20:40] for us threes we can define the number of trees but in addition we want also to make
[1:20:46] sure that the in-situ data that we will be using are representative and this is why there are
[1:20:54] a a significant number of parameter corresponding of the to the minimum number of pixels required for a polygon
[1:21:02] to be used for calibration the minimum pixel to be used for validation validation and the minimum share between
[1:21:12] calibration and validation according to the availability of in-situ data for each crop type these define different strategies that
[1:21:23] we can select and fine-tune here the default parameter will provide you a proper proper output and therefore we propose to use
[1:21:34] it as it is once we have configured the random forest forest we will of course have to import some in-situ data
[1:21:47] as you know crop time mapping require a field data collection to make the link between the location
[1:21:56] and the crop type these correspond to polygons that has been observed on the ground and that we can display here in the qgis
[1:22:06] or any gis software where we can assess the geometry and the type of crop type for each of this polygon in
[1:22:16] this case we have a field with millet and we have another fill with mace and we can make sure that we cover the range
[1:22:25] of the diversity of the crop type in the area area in addition to the crop type we need to
[1:22:31] add add non-cropland land cover type polygon to make sure that the random forest will make the difference between the crop
[1:22:40] type and the the other land covers that are not of interest for us as in situ data seems compatible with
[1:22:50] our production we want to import them into the sen4start system to do so we go back into the season we
[1:22:59] want to process and we have the button upload file where we can upload the in situ this will be a shape file in a zip
[1:23:13] format format allowing to ingest large amount of data into the system we upload it and this is made available
[1:23:24] to to the the processor for crop type mapping to make sure that this is properly done we can go
[1:23:35] to the product to display this nc2 data into the viewer and make sure that this import has been
[1:23:47] properly and successfully completed this is a confirm we can see that and therefore this allows us to
[1:23:59] to start the the processing but first the system will do some quality control of the in situ
[1:24:07] data on its own and will also make a buffer of one pixel around the boundaries to make sure that
[1:24:15] we use only pure pixel for the calibration calibration similarly this institute data will be split into calibration and validation data set at
[1:24:26] the polygon level to make sure that they are fully independent for the calibration calibration this will require also
[1:24:35] to to use some metrics for the random forest and a large set of metrics will be use
[1:24:44] use not only the reflectance of sentinel 2 the the back scattering coefficient of sentinel 1 and of course the reflectance of landsat
[1:24:52] but as ndvi times series blindness time series and dwine time series an additional temporal matrix like monthly composite of backscattering
[1:25:06] coefficient and many others all being ingested for the random forest of course we need as i explained earlier
[1:25:16] in the training to balance the in-situ data data accordingly to make sure that we will not mislead it the random forest
[1:25:27] once this has been in place we can expect that the production of the crop type map has been
[1:25:36] completed and this is the case as you can see here the product is available here and can be download from this web interface
[1:25:46] of course the download will allow you to get access to the product the crop type map but also will
[1:25:55] provide you some accuracy metrics like the f1 score and the overall accuracy based on the validation data set
[1:26:06] in this case we will not download the data we will first have a look using the viewer in the send for start
[1:26:14] system and this viewer allows us to zoom in and to see the different crop type in millet the millet in yellow the ground
[1:26:23] nuts in pink and the maize in orange of course the urban area in red and the forest in in green
[1:26:32] this looks like a reasonable product and quite interesting even we see the shape of the parcels while it is a pixel-based
[1:26:40] classified classification but maybe you would like to give a try to improve this product to do so you can
[1:26:50] go back to the send for start system and using the same matrix the same feature the same in situ
[1:26:58] data data you can use the custom job tab to select the crop mapping again for your site
[1:27:07] and and define maybe another one without landsat 8 within sentinel 1 and and for maybe a season which will be a bit
[1:27:17] shorter for instance we can still start from the 1st of may but maybe stop on the 31st
[1:27:25] 30th of november to make sure that we don't cover the season of fire and senegal we will select all the corresponding
[1:27:36] images and this allows us to run with the same random forest parameter a new job that we submit right now and
[1:27:47] we'll be running right away of course this will produce a new crop type map that i will need to go
[1:27:55] the previous one to see which one is the most performant one we i can compare also the matrix the accuracy metrics
[1:28:03] to see how much we discriminate the different crop type according to the different approaches this crop type
[1:28:13] mapping processor is only one among many in this enforcer system which has been designed designed not only for mapping but also for
[1:28:24] monitoring monitoring and therefore what we just explained for crop time mapping can be extended for monitoring for instance we can produce
[1:28:35] cloud-free color composite using the same data set for a specific period uh that i can select from 10 days to
[1:28:47] 50 days if i want and i can select a lot of advanced parameter to play according to the area of interest
[1:28:57] depending of aerosol optical thickness the frequency of this aerosol in my area i can tune my compositing
[1:29:06] algorithm accordingly this is to produce image mainly for the purpose of visualization visualization for crop monitoring what is most
[1:29:18] interesting is the vegetation status processor processor which provides us the opportunity to produce time series of a lot of
[1:29:28] biophysical variables like fapa fcover livari index and so on those will be made available on a regularly regular time step over the
[1:29:40] season season and allow me to see the growing and the crop development along the season for the different crop
[1:29:48] type this this concludes the introduction of the centrostat interface as you fully understood this is a system which has been designed
[1:30:00] to run over a large area as you don't have to handle file by file the system will
[1:30:08] based on your shape file define the area of interest and the corresponding product for the different mission you
[1:30:16] have select and automatically automatically download them for your own purpose purpose similarly similarly the processor meaning the the product
[1:30:27] will be produced in a real time automatically as the data are acquired if you run in neural time
[1:30:36] or as you launch the processor if you want to do the job in a customized way thank you pierre for the amazing
[1:30:52] overview on large-scale crop mapping using the send for snapped toolbox i hope everyone participating in today's training found the practical with the
[1:31:01] send for stat toolbox of value for their own area of interest there are so many great products
[1:31:08] generated from the send for stat toolbox and the interface seems very user friendly thank you again pierre for such
[1:31:14] a thorough presentation next week we'll be joined once more by dr pierre de fournie from uc luveng as
[1:31:23] well as fabrizio ramoino from serco to present on crop specific time series analysis for growth monitoring they will be demonstrating how to
[1:31:33] retrieve crop specific leaf area indices index time series from sentinel 2 using snap snap as well as a time series analysis of
[1:31:43] crop types and anomalies detection and intra-parcel heterogeneity assessment for different agricultural fields using optical data with python jupiter
[1:31:54] notebooks notebooks we hope you will join us for this fourth and final part of the webinar series
[1:32:01] next tuesday below is the contact information for dr deforney along with links to the training webpage and esa's eo for
[1:32:11] society website below our links to access the different toolboxes and applications presented in today's training along with links to two
[1:32:24] other agricultural trainings led by dr deforney this slide provides instructions for the send for stat installation package which
[1:32:36] we which will be made available in june of this year as a reminder there will be one homework
[1:32:46] assignment for all four parts of the training training answers must be submitted via google form which can be accessed from the
[1:32:54] training page on the rset website homework will be made available on may 3rd with a due date of may 17th
[1:33:03] a certificate of completion will be awarded to those who attend all live webinars and complete the homework
[1:33:09] assignment by the deadline you will receive a certificate approximately two months after the completion of the course for marines
[1:33:17] martin we will now transition to the question and answer session of today's training please answer your question in the
[1:33:27] question and answer box and we will get to them in the order they were received thank you
[1:33:53] wonderful and we've been getting some really good questions coming in throughout the today's webinar and we do
[1:33:58] encourage if you have a question please do submit it and we will get to it momentarily so question number one
[1:34:05] are some send for stat processes and products able to be replicated in google earth engine and pierre if you wanted to unmute and
[1:34:14] answer that would be fantastic you shin for this introduction centrostat has been designed to run automatically and confused continuously
[1:34:26] and therefore this is very dedicated to run on any cloud computing infrastructure providing the fact that you get access to sentinel 1 slc and
[1:34:36] sentinel 2 l2a or l1c data google earth engine could replicate the sum of the processing or workflow
[1:34:48] but mostly those regarding the sentinel 2 expectation because because google's engine does not provide sentinel 1 slc time series
[1:35:01] wonderful thank you question number two is polarimetry good for distinguishing or classifying uh one salinity in soil
[1:35:10] using the c or l bands two two subsoil water using l-band or three soil versus snow versus glacial ice
[1:35:21] thank you for this question which is referring to the previous part of the training and which no way
[1:35:29] it's not at risk today i'm not the best expert in polarimetry for sure uh what i can mention is the fact that
[1:35:37] the signal are obviously sensitive to dielectric properties and therefore potentially sensitive to salinity and subsoil water content
[1:35:47] because they modify the electrical conductivity of the materials however however this is not clear how much these
[1:35:55] influence the back scattering coefficient and this intensity and furthermore i would say that this is less sensitive to polarimetry
[1:36:07] than uh to see signal amplitude or intensity wonderful thank you pierre question number three does the send for stat toolbox extend to
[1:36:19] other applications like deforestation and forest degradation mapping on a large scale thank you as you fully understood the centrostat
[1:36:29] is able to process very large scale area area meaning that the processing workflow could apply to other
[1:36:38] kind of classification of earth observation observation and typically land cover mapping can be run as long as you introduce
[1:36:47] appropriate in-situ datasets this has been done typically in the philippines philippines uh however for forest degradation or
[1:36:56] forest uh deforestation sorry uh this may require very specific institute dataset to be able to train uh the supervised
[1:37:06] handoff handoff rs classifier in an appropriate way thank you there question number four when will center stat be available to
[1:37:18] download as already mentioned centrostat will be released officially by early july 2022 could be possibly by late june
[1:37:30] the system is already developed but in a better version and currently test it for demonstration cases meanwhile if you want to start
[1:37:40] even from tomorrow today you can download the cento agree system which is dedicated to optical time series only
[1:37:49] sentinel 2 dataset and would allow you to do most of the send for start application related to crop time mapping
[1:37:58] and li time series analysis and so on and even you can use the sun for cap system which is an object-based oriented
[1:38:07] processing system which are also available available since several years and both are regularly updated these are open source toolbox which are
[1:38:18] actually the predecessor of the central stand wonderful yeah it's great to hear that in two to three months center stat will
[1:38:27] be released to the public so for all the participants we do hope that you will check back at the website that uh that
[1:38:33] pierre has provided for you all uh question number five in a lot of developing countries the field data is not available but the area
[1:38:42] statistics are available is there any way to perform an unsupervised classification to determine areas and then back out crop type based on the
[1:38:52] area thank you for this good idea as you mentioned mentioned this is fully right that the area
[1:39:02] statistics are available but they will be only usable if we are looking at a very simple agricultural
[1:39:10] landscape typically showing one two or three largely largely dominant crops if they are very significantly different therefore an unsupervised reaction will
[1:39:24] be able to provide cluster corresponding to this crop probably however there is no guarantee to capture this
[1:39:34] respective hub signature therefore this is still not the recommended recommended pathway to get in situ data great and this next question six looks
[1:39:48] like it refers to one of the case studies that was provided in your presentation so is field data for south
[1:39:54] sudan publicly available uh unfortunately the i'm not able to answer this question for good good the world food program owned these data
[1:40:06] and they may be willing to share them but uh i cannot answer that for all that wonderful question seven you mentioned
[1:40:17] temporal metrics of sar time series can you give some examples and explain this further further sure the sinful stat includes a set of
[1:40:27] sar temporary metrics which are as you fully understood derived from the sartime series and those are typically
[1:40:37] the monthly mean composite or the annual standard deviation of the full cell time series and this can be computed and is compute
[1:40:48] for the different polarization and for the different mode the ascending and the descending mode therefore providing different temporal
[1:40:57] metrics for each of these great question number eight can you explain send for stat id and pass
[1:41:10] pass yeah yeah as soon as you will install the central stat there is a default user account
[1:41:19] which allow you to connect for the first time time the username is sent for start and the
[1:41:25] password is sent for start once you run the system you will be able to configure to configure new username
[1:41:34] and of course to delete the by default one if you want therefore there is a national one an
[1:41:40] initial one to start with and question number nine where can we get the installation packet for send for stat i couldn't find it at
[1:41:52] the link that was provided yeah yeah the reason was explained earlier the the package will be released
[1:42:01] officially by late june or early july 2022 2022 and this is the reason why you won't be
[1:42:07] able to find the installation package right now as you have seen at the end of the presentation
[1:42:15] presentation there is a slide with the instruction for installation which has been already provided but the installation package is not available
[1:42:23] yet yet as mentioned before other systems are already available and can be used and are actually quite valuable to get
[1:42:34] trained to be ready for some foster and question number 10 what methods were used in collection of field data
[1:42:49] we have select the gcam recommendation you can find the link in the document which is defined actually a pragmatic
[1:43:00] approach for institute data collection of course there may be other strategies to collect in situ data but
[1:43:08] but this recommendation was found very helpful in many countries wonderful and uh i believe that someone will be posting
[1:43:20] that in the chat so everybody has access to that link so question number 11 on the rset description page this
[1:43:28] workshop said it would also include national statistical data sets and surveys for agricultural statistics how are those incorporated
[1:43:38] you are right as you have seen the example for senegal this has been run by the dapsa which is the national
[1:43:47] official statistical office providing the data they have been collecting collecting during their annual survey this data has been incorporated as
[1:43:58] in-situ data and this is the reason why during the training we explained that their in-situ data was not well balanced and we
[1:44:06] complete another in situ data campaign with them using their own enumerators or surveyors surveyors and they provide us the new institute
[1:44:18] therefore this allows us to do some crop type mapping as you have seen and the intention is to improve the
[1:44:25] agriculture statistic by improving the cost efficiency the special disaggregation and the timeliness of the delivery of information
[1:44:36] information but you are right that all these very specific topics has not been fully addressed in this
[1:44:44] context context but if needed we can provide more information about that wonderful and question 12 can we export
[1:44:54] different products generated using send for stack yes of course there is a a button where you can just download the
[1:45:05] final product directly from the web interface which has been demonstrated and the product will be accessible directly
[1:45:15] directly they can be also accessed through our linux seminar if you want this is another way to do it
[1:45:25] great and question 13 can the send for stat platform be used to monitor the conditions of mangrove vegetation
[1:45:36] i would say so as the platform allow you to process process vegetation indices and biophysical variables variables you will be able to actually derive
[1:45:49] the the time series on a very regular time time step uh uh to monitor the dynamic or the phenological
[1:46:00] feature of the mango okay great and question 14 how can we assess crop fields having two crop types
[1:46:12] for the same study period that's a very nice question indeed in many countries we refer to mixed crop
[1:46:23] or associated crops meaning that two different crops has been sold at the same time over the same area
[1:46:34] in such a situation of course you cannot label the field according to one or the other crop
[1:46:43] the only way to proceed is actually to label this field by the mix cropping of the two crops
[1:46:52] meaning meaning beans and corn therefore it will be a new class corresponding to this mixed crop area
[1:47:02] area there is a challenge there because in some cases only one of the crop crop will be developed and the other one will
[1:47:11] be actually surely i mean largely underdeveloped therefore the institute observation is very important to to associate associate some information about the dominance
[1:47:25] of one or on the other corpse and a truly mixed crop will combine both i would say at this rather same level or
[1:47:36] at least being both largely present over the field therefore the recommendation is to add a new crop type corresponding to the
[1:47:48] mixed crop different mixing can exist meaning addition i mean several additional crops need to be listed in the
[1:47:58] typology wonderful uh thank you pierre question 15. 15. how do you transfer learning uh for random forest and use it in another area
[1:48:13] and can you also provide any information on crop classification using harmonic time series transfer learning is really a key
[1:48:24] research topic and in our field of agriculture monitoring i have to say that i have not read a lot
[1:48:33] of successful application of transfer learner learning neither from one year to another nor from one area to another of course
[1:48:45] if you are processing a small area and then you can transfer your model to the next i mean to the area next to
[1:48:53] the one you you used for calibration this would be a successful transfer learning but actually when it comes to
[1:49:02] using a model which has been calibrated for a given given not region to another one it could be significantly separate
[1:49:13] we can say that today the science is not complete the research sign i mean the research is not complete to propose a
[1:49:22] generic solution this is a very active research research activity activity and i hope that we will be
[1:49:32] able to provide some solution in the coming years but this is a drawback of the the machine learning and the artificial
[1:49:42] intelligence intelligence methods today now with harmonic time series this can be yeah we can use some harmonic analysis of the time series
[1:49:59] today we did not find this as a very powerful solution in our cases great and question 16
[1:50:12] will we be able to install send for stat in ubuntu 10 for cap accepts centos 7 only which makes it difficult to operate
[1:50:22] uh cent for status unfortunately running only on sun centos seven and there is a reason for that
[1:50:30] center seven is very stable and sn4 stat is designed to be fully operational operational we don't want to have any bugs or any
[1:50:40] stability in that kind of processing chain chain as it runs on its own and this is a reason why centos 7
[1:50:50] has been selected and still user for that kind of let's say a large scale processing system system uh
[1:51:02] uh if someone want to transfer this to some other environment that are most welcome of course wonderful thank you here question 17 do
[1:51:15] you need the crop type before estimating biophysical variables or at least improve the accuracy of the estimates
[1:51:25] this is a very nice question as well thank you you don't need the crop type to derive
[1:51:31] the biophysical variables because the biophysical variables retrieval is based on the radiative transfer model which will be explained in the next part
[1:51:42] of this training part four and as you will see actually this can be very generic and applicable to any crop
[1:51:51] type type we did complete some research by focusing on a specific crop type to improve the estimate of the
[1:52:01] biophysical variables like the hindi very index but the improvement were were only very very very little and
[1:52:10] i mean was not necessarily useful for the application for large scale application therefore this is this could improve
[1:52:23] very slightly your estimate but this was not proved to be be efficient and let's say great question 18 is it possible to
[1:52:38] classify fruit tree types and or olive trees trees yes there is even a specific processor in the central start system
[1:52:49] fully dedicated to permanent crop type and this is available in the centrostat while in the centroid ray
[1:52:57] the permanent crop or perennial crop was possessed as the others as any cop type type in this central start system there is a
[1:53:07] dedicated processor for that specific process great question 19 can we measure soil parameters such as soil moisture content
[1:53:20] soil texture organic matter ph salt and lime contents using send for stat ah this would be wonderful
[1:53:31] unfortunately unfortunately sanford is only running based on earth's observation from satellite satellite and therefore except the soil moisture content
[1:53:43] which can be estimated from the sentinel one time series series when the vegetation attenuation is not too strong
[1:53:52] we don't see how we could uh infer infer the salt texture on organic matter or the ph the salt and the lime content
[1:54:03] using satellite imagery carbon organic matter could in some cases be assessed but this is not part of the centrostar
[1:54:18] wonderful and question 20 can the send for stat app be installed on the windows operating system or can
[1:54:26] it only work with linux unfortunately the infostat can only works with linux for the same reason than we mentioned
[1:54:36] before for stability reason reason to be able to be i mean to not depend to any any upgrade or update of
[1:54:46] operating system and question 21 is there a method or software to geocode the phase image of some other type sar
[1:55:03] this is not part of the scene for start central start deal only with the sentinel one imagery
[1:55:11] imagery to to derive the interferometric currents for the face i would recommend to use the snap which should be able to run the
[1:55:23] radar imagery as far as i remember but but i'm not aware about any other open source software
[1:55:33] there are commercial software of course that i may not mention here except if you allow me wonderful uh well dr deforney i believe
[1:55:48] we have gotten through all the questions as we are wrapping up today's uh today's training and be mindful of every all the
[1:55:55] participants that we do have one more training in this webinar series that will take place next tuesday so we do
[1:56:01] hope you all join us for that final part of this webinar series but dr deformi i did want to hand it over to you and ask
[1:56:08] you if you had any last comments or or reflections that you wanted to share with today's participants
[1:56:16] i thank you for your attention and for your very nice question and your lively interaction i would recommend for those who are
[1:56:25] eager to start right away with in-situ data and sent to agree system to go to the jio knowledge app
[1:56:37] the geo is the organization of the space agency on the geopknowledge app you will find find a full set of materials combining
[1:56:47] in-situ data earth observation data and the software to download including the installation package which allow you to start with
[1:56:57] right away while you may wait for the send for stat release which is coming soon and which
[1:57:04] should be a breakthrough breakthrough because of the combination of sentinel 1 and sentinel 2 processing workflow over a very large
[1:57:14] scale in natural time thank you for your attention and we look forward to see you next week
[1:57:23] dr deportee thank you so much and as well to all the colleagues also from uc levin that were assisting today with
[1:57:29] answering the questions thank you all so much for joining us uh wonderful presentation and again we do hope you'll
[1:57:34] join us all next week for the final fourth part of this webinar series uh big thanks to the entire rset team for
[1:57:42] uh providing support and and running this webinar series so once again for all the participants that join us today
[1:57:48] thank you and we look forward to seeing you next week goodbye
