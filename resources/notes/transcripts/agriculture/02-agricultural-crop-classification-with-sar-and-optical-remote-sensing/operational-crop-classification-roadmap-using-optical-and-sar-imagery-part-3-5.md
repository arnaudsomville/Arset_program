# Operational Crop Classification Roadmap using Optical and SAR Imagery, Part 3/5

`https://www.youtube.com/watch?v=6_bytSnJCc8` · id 175 · 2:23:28 · module 18 — Agricultural Crop Classification with SAR and Optical Remote Sensing

[00:00] hello and welcome to the third session of this webinar series on agricultural crop classification with synthetic aperture radar and optical remote
[00:10] sensing i'm erica podest scientist at nasa's jet propulsion laboratory and rsat instructor today's session is a crop inventory
[00:20] roadmap roadmap our guest lecturer is dr laura dingle robertson who's a scientist with agriculture and agri-food canada
[00:33] and as a reminder this webinar series consists of five sessions today is the third session and it's the first part of
[00:42] an operational crop road map it's focused on sar today the second part will be on thursday october 14th and
[00:51] that will be focused on the optical part and emerging both optical and sar the last session will be on tuesday october
[01:01] 19th and that will be focused on biophysical variable retrieval using optical optical satellite data to support agricultural
[01:09] monitoring practices by the end of this training participants will learn how to access and select sentinel 1 sar images
[01:20] how to pre-process sentinel 1 data field training and adequate field data collection collection and the use of snap for pre-processing
[01:31] of sentinel-1 images and subsetting and stacking data there will be one homework assignment posted on the training page on the last
[01:41] day of the webinar series answers must be submitted by google form by the due dates of november 2nd
[01:48] a certificate of completion will be awarded to those who attend all live webinars and complete the homework
[01:55] assignment by the deadline of november 2nd 2nd you will receive a certificate approximately two months after the
[02:02] completion of the course from marines martins now i'll pass it on to dr laura dingle robertson robertson thank you very much laura for sharing
[02:13] your expertise and your knowledge on a crop inventory roadmap i know you've worked on this for many years and we're
[02:20] really thrilled that you're sharing all of this experience with rsat so thank you and welcome hello hello my name is dr laura dingle-robertson and
[02:38] i work in research and development at agriculture and anchor food canada aafc using sar and optical satellites for
[02:47] mapping and monitoring agriculture in canada canada in this session i will provide a step-by-step road map on how to operate
[02:55] an earth observation based operational crop inventory at country level using sar and optical satellite imagery and open source processing tools
[03:09] canada is the world's second largest country in landmass at just under 10 million square kilometers canada's agricultural
[03:18] landscape is large and complex there are over 193 000 farms and 64 million hectares of total farm area
[03:28] that's slightly bigger than the size of the entire country of france and its five overseas regions in 2009 aafc began generating annual
[03:38] crop type digital maps for the prairie provinces using satellite imagery and expanded the annual crop inventory aci to the entire agricultural extent of
[03:50] canada in 2011. the aci is an annual crop inventory that is produced at the end of the growing
[03:58] season season its overall target accuracy is at least 85 percent the final spatial resolution is 30 meters
[04:08] meters it is national in scale and it is an operational program with a mostly automated workflow the crop inventories are published on
[04:18] the government of canada's open data portal and include an aafc geospatial viewer aafc started the national monitoring
[04:30] endeavor through research and development projects to determine if sar and optical satellite imagery could be used to classify agriculture regions
[04:40] the r d projects used test sites spread across the agriculture extent of canada to capture the variability of crop types
[04:49] field sizes growing seasons and tested different classification methodologies and sar and optical processing choices the result of these endeavors is this
[05:01] annual map you see here that has been produced nationally for over 10 years this is the agriculture extent of canada
[05:10] crops generally do not grow in much abundance north of these latitudes due to the shortened growing season and that
[05:17] area which is mostly forests wetlands etc is mapped and monitored by other departments of the government of canada
[05:25] this agriculture inventory classifies all agriculture and other land covers within the agricultural extent resulting in approximately over 40 different
[05:35] agriculture classes and 10 land use land cover classes the variation in crop types field sizes and shapes makes this crop inventory
[05:48] endeavor unique in the challenges that must be met fields in the prairie provinces such as those shown in the
[05:55] here in the taber alberta figure are large typically square and with some irrigation which are seen here as
[06:04] circles and farms on average are very large around 450 hectares crop types typically are small grains such as wheat oats barley rye along with
[06:17] canola dry peas sugar beets fodder corn and hay fields in the province of quebec are long and narrow as seen in the figure of
[06:26] richelieu river with average area per farm of about 180 hectares and crop types are typically corn soya notes
[06:35] along with fruits berries vegetables and hay hay fields on the east coast are typically very small as seen on the central prince
[06:43] edward island figure with farm sizes averaging about 170 hectares crops are typically small grains like wheat oats and barley that are grown
[06:53] alongside canola corn and soybeans prince edward island is the largest producer in canada of potatoes all of the pink fields on that figure
[07:05] you can see that just with these three examples there's quite a variety of crop types field sizes and field
[07:12] configurations the aafc crop inventory method relies on an integration of data from canadian radar set sar satellites and optical
[07:24] satellites such as landsat 8 and sentinel-2 sentinel-2 sentinel sentinel sar satellite from esa is currently being integrated
[07:33] this rsat training will use sentinel 1 and sentinel 2 data given the global access to these data
[07:41] participants will use open source snap software software while taking this course and while you're thinking about how to adapt these
[07:48] methodologies methodologies considerations should be made based upon the local cropping systems in your region and these considerations should
[07:57] include include what is the growing season what are the crop mixes in your area what are the crop management practices
[08:06] how are the field and parcel sizes differing differing and what field data collection strategies do you have
[08:15] this flow chart outlines each of the steps that are taken from the earth observation data acquisition to the
[08:21] final product publication each of these steps will be considered in detail in the next slides and in
[08:28] session four but here you can see the overall process is is one one acquiring and processing the satellite
[08:35] data data two two collecting checking and controlling training of validation data three working with regions for classification
[08:46] classification four four applying the classification to regional data stacks of earth observation data and training and validation data
[08:54] and five final product product production including post processing quality checking and publication first we will discuss acquiring and pre-processing sentinel 1
[09:11] and sentinel 2 data for the aafc aci we utilize application programming interfaces apis to download landsat sentinel 1 and sentinel 2 data
[09:25] and pull acquired radarsat constellation mission data we download and process thousands of optical and sar images every year to
[09:33] cover the entire agricultural extent across the whole growing season afc uses about one sar image per month
[09:45] but research has demonstrated that dense stacks of sar imagery throughout the growing season will improve prove classification accuracies
[09:54] c-band data are available from sentinel-1 satellites both a and b cine1 satellite has a 12-day exact repeat the two satellites provide a
[10:06] six-day repeat at the equator in the interferometric wide iw swath mode these can be provided as single look
[10:15] complex data or ground rage detected data data and ground range detected can come in one of three resolutions
[10:23] full high and medium resolution in general bester results for classifications of agricultural landscapes are found when using a vv and
[10:34] vh polarization which can either be derived from slc or grd products to simplify processing we will use iw
[10:44] interferometric wide grd data research has demonstrated that polametric parameters and multi-frequencies improve accuracies and this should be part of your
[10:57] consideration when considering your future crop inventories typically for crop classification ground reach detected sar data is sufficient
[11:14] the sentinel-1 grd product in high resolution is a multi-look times 5 in the range direction and by 1 times in
[11:22] the azimuth direction and is projected in the ground range this means that the phase information is lost
[11:30] lost vv and vh dual polarization is preferred and is generally what is available for sentinel one over land
[11:38] the sentinel one image also has a 250 kilometer swath making it preferable for large region operational mapping
[11:49] aafc uses all optical images with minimal cloud coverage the number of images with minimal cloud coverage varies by region in canada and
[12:00] by year the integration of radar with optical ensures that we obtain full spatial and temporal coverage during the growing
[12:09] season season in general for our optical image selection our data is coming from landsat 8 and sentinel 2a and b
[12:20] sentinel 2 has a revisit time of 10 days at the equator with one satellite and five days with two satellites
[12:27] two or three days repeat at the mid-latitudes mid-latitudes landsat 8 has about a 16-day exact repeat coverage
[12:36] and in some areas there will be higher revisits where over orbits overlap providing additional acquisitions however cloud coverage may reduce the
[12:47] number of optical images that may be available for your annual crop inventory generally sentinel 2 are available as
[13:01] level 1c or level 2a if level 2a which is corrected to the bottom of atmosphere reflectance are not
[13:09] available for download sentinel 2 images can be corrected using snap and the sentu core processor sentinel 2 imagery are sectioned into
[13:19] granules which are also known as tiles and are about 100 by 100 kilometers squared as seen here in the lower corner image
[13:30] in a grid format they are also orthorectified and have a utm utm wgs84 projection sentinel-2 data can be downloaded from
[13:44] the european space agency's copernicus hub or using the usgs earth explorer as i mentioned the centu core processor
[13:54] can be used for generating the level 2a products and it can be used as a function in snap or separately using
[14:01] command line functioning aafc's annual crop inventory typically only uses six bands that correspond to the green red blue
[14:11] near infrared and the two short way infrareds similar to the band the the bands available on landsat
[14:20] other bands available from sentinel 2 incur including the vegetation red edges may prove to provide important information for certain crop types and
[14:30] therefore investigation on the use of those bands may be warranted in your region one way to access sentinel-1 and
[14:41] sentinel-2 imagery is through copernicus hub hub if searching for a specific area try and minimize the area of interest the date
[14:49] range of interest and even the data types for example from only choosing ground range detected in order to reduce the number of returns
[14:58] on your search forms if you're looking to use these operationally investigate the use of application programming interface or
[15:07] apis and cloud computing another site available for sentinel 1 downloads is the alaska satellite facility facility there are a lot of options for
[15:18] downloading data from this site including pre-processed interferometric products products understanding the naming convention of sentinel-1 data is important the first
[15:29] three letters is the mission either sentinel 1a or sentinel 1b the beam mode is the next two digit
[15:35] characters which could be iw interferometric wide ew extra wide strip map or wave and typically for crop mapping as we
[15:45] mentioned you will probably use interferometric wide the next most important information is the date and time which gives you the
[15:53] sensing date and that's located as start date and time time for sentinel 2 similarly there is important parts of the naming convention
[16:04] to look at the first is the product level here you will learn if the product is the level 1c not corrected or level 2a
[16:15] which is corrected to bottom of atmosphere reflectance the sensing time again is another important aspect as it will tell you
[16:24] when the image was acquired for pre-processing earth observation data there are two main paths for the sentinel 1 grd data we first
[16:37] apply an orbit file then apply a speckle filter then a geometric correction and finally if you're interested in a specific area of
[16:46] interest you would subset for the sentinel 2 l1c data you would apply the centucore atmosphere correction with an l2a output and again
[16:57] if interested in a specific area of interest you would subset these data are all subsequently co-registered together
[17:07] and then exported as geotiff or big tev format to be used in other classifiers the first step of processing is applying
[17:18] the precise orbit file satellite positions are recorded by a global navigation satellite system to ensure a fast delivery of sentinel-1
[17:28] products orbit information is generated by an on-board navigation solution that is stored within the sentinel 1 level 1
[17:35] products products orbit positions are later refined by the copernicus precise orbit determination the pod service precise orbit files have a less than
[17:45] five centimeter centimeter accuracy and are delivered within 20 days after the data acquisitions the accuracy of restituted orbit files
[17:55] is less than 10 centimeters these files are available three hours after data acquisitions it is important to apply the precise
[18:05] orbit file to ensure positional accuracy speckle filtering the tsar data is the next step in pre-processing as you've previously learned there is
[18:19] often noise within a sar image that needs to be minimized during the pre-processing period and for agriculture this is to make
[18:27] fields more homogenous for classification classification speckle filtering will take care of that there really is no simple answer however
[18:36] in the selection of filter size and type and it's highly dependent on the target of interest and whether they are a point
[18:43] target or a distributed target and what the target size is field size and configuration may be important when you're considering the
[18:51] size of the filter to use testing should be done when you're determining the size of the filter that
[18:58] you choose just as filter size is important the type of filter you choose will also be important
[19:08] important adaptive filters minimize the homogeneous area noise while maintaining edge effects the adaptive filters listed here all in
[19:16] green are all available in snap multi-temporal filters typically remove noise based on an assessment of a time
[19:24] series stack of sar imagery the multi-temporal filter will average tempo components that are typically statistically homogenous throughout time
[19:33] while maintaining features that did not meet the homogenous criteria multi-temporal filtering methods can minimize noise from homogeneous areas however they have an
[19:43] assumption that those areas remain unchanged through time the multi-temporal filter is also available through snap other filter types not available include
[19:55] multi-resolution filters and these do not assume an unchanging and consistent response through space and time the tuesday filter is an example of a
[20:05] multi-resolution filter and has a five-step adaptive process that includes point target filtering curvilin linear filtering homogeneous area filtering
[20:16] multi-resolution edge detection and filtering of stationary areas non-local filters also consider pixels in a patchwise manner where the
[20:27] importance of a pixel is weighed through a comparison of similar patches throughout the whole image a lot of these filter types are very
[20:36] computationally heavy so considerations should be made from an operational perspective of the benefit of the filtering type and the
[20:47] computational time as i mentioned it is important to test the type of filters you use along with
[20:55] the size of the filter for the particular region of interest these results here show that overall accuracies and response will change with
[21:04] changing filter size and type due to the different field sizes and shapes you can see with the gamma map results
[21:12] the overall accuracies did improve for each of the three test sites in canada argentina and the usa as your filter
[21:19] size increased until an overall peak accuracy was reached at approximately of a filter size of 11 by 11.
[21:27] when afc was developing our methodology for our annual crop inventory we tested these features at that time and we
[21:34] continue to test these features as you see here to make improvements where we can and as different filter types become
[21:41] more available afc uses the gamma map filter which is based on the assumption that the unspeckled intensity of the underlying
[21:52] scene is gamma distributed the filter will minimize the loss of the texture information better than a frost
[21:59] or lee filter within gamma distributed scenes scenes on here you can see the difference between the unfiltered hve image on the
[22:08] left and the gamma map 7x7 filtered image on the right the filtered image is obviously less pixelated and more the fields are more
[22:17] homogeneous the next step in sar pre-processing is a radiometric conversion and calibration so sentinel 1 level 1 products are not
[22:30] radiometrically corrected or calibrated by default so radar reflectivity is stored as digital numbers or dns in an s1 products
[22:41] and these must be converted to physical units radar backscatter to apply radiometric correction and calibration a calibration annotation
[22:50] dataset cads with four lookup tables is provided within the sentinel1 products in the xml files the s1 instrument processing facility
[23:02] automatically applies corrections for elevation antenna pattern and range spreading loss the lookup tables that are provided are
[23:11] then applied then apply a product scaling factor and a calibration coefficient and a conversion for local incidence angle
[23:23] the radar cross section of a target which is the equivalent area seen by a radar and is the measure of a target's
[23:29] ability to reflect radar signals in the direction of the radar receiver the radar cross section lookup tables
[23:36] whether for sigma beta or gamma can be simplified and contain the area normalization factor and calibration constant
[23:48] data are calibrated to sigma naught and beta naught and gamma naught using these following formulas in general for agricultural monitoring
[23:58] we use cat data that are calibrated to sigma naught if a poor precise sigma naught is required
[24:10] required knowledge of the local slope is also needed through a digital elevation model this process is known as radiometric
[24:17] normalization an sr image can be normalized to a local incidence angle a projected local instance angle or
[24:25] incidence angle derived from an ellipsoid ellipsoid to reduce the effect of changes in backscatter across swath due to
[24:33] incidence angle a cosine correction can be applied however the weighting factor in this correction is target dependent with the
[24:42] drop and backscatter in the range being dependent on the roughness and the vegetation structure this can be seen here in the graph on
[24:51] the right where there is a change in backscatter with increasing incidence angle for different soil types and
[24:57] different canopy covers afc conducted testing on large swath sar images such as sentinel one iw 250 kilometer swath or raidersat-2 standard
[25:09] or wide modes at 100 kilometers to 150 kilometer swaths that indicated that radiometric normalization for sigma naught using a dem to a local projected
[25:21] or a local a projected local or ellipsoid incidence angle was important to minimize crop class variability across these large swaths
[25:31] this type of normalization is not as important for smaller swaths typical of experimental sites but is critical for
[25:39] data that is used in a large-scale operational monitoring the fourth step is terrain correction or orthorectification and refers to the
[25:50] correction of the image to a known coordinate system and removes the effects of angle and terrain this type of correction requires also a
[25:59] digital elevation model there are a few types of terrain correction methods that are available in snap including the rage dopplers and sar
[26:08] simulation models aafc's annual crop method typically uses a rational polynomial coefficient model but for this research purposes set with sentinel
[26:19] 1 we typically use the range doppler method available in snap the sentinel-1 grdh image does not have
[26:28] geographic coordinates images must be converted into a map coordinate system the terrain correction with the use of
[26:36] digital elevation model data corrects topographical distortions like foreshortening layover or shadowing as you previously learned the range doppler terrain correction
[26:49] method implements an ortho rectification method for geocoding sar images from a single single 2d raster radar geometry
[26:58] it is available it uses available orbit state vector information in the metadata the radar timing annotations the slant to ground
[27:07] range conversion parameters together with the reference dem data to derive the precise geolocation information the next step in earth observation
[27:22] pre-processing is to pre-process the sentinel-2 optical data for the afc operational pre-processing methods which include both landsat 2 and
[27:32] landsat 8 data a manual review of imagery for cloud cover and image quality is conducted if part of an image has limited cloud
[27:42] cover over specific regions of agriculture then an image can be included in the classification regardless if the entire
[27:50] image is has a high percentage of cloud cover cover therefore if an area of the image over
[27:57] agriculture is cloud-free or minimal clouds it can be used if desired esa has methodologies to remove cloud cover including some that
[28:09] are available in snap however this will increase the overall processing effort and computational time the pre-processing step for optical
[28:19] imagery has been described in more detail in previous webinars in this series series the earth observation data preparation
[28:27] has been described and actual image processing will be demonstrated shortly now we will take a look at collecting
[28:34] training and validation data focus should be made now on the collection of training and validation data data this aspect is the single most important
[28:47] aspect of the classification process well-dispersed good quality and large quantity of reference data will ensure success with your classification process
[28:58] this step should have as much or more focus than the earth observation processing and acquisition the following are the main steps that
[29:07] afc follows to collect training and validation data so afc acquires field data for training and testing using two approaches
[29:19] one we have partnerships with crop insurance agencies for some of the provinces provinces that means the crop insurance agencies
[29:27] send us the information about what is growing on all the fields within those different provinces the second approach is that we send
[29:36] crews to actually collect the in-situ observations observations our guiding principles for in-situ observations is that we are getting good
[29:45] coverage the data points are very well dispersed to cover the areas of interest we get large quantities of samples
[29:53] especially for very rare or unusual crop types types and classification classification success is highly dependent on quality
[30:02] of the ground data inputs if you have poor ground data you will have a poor gra classification
[30:10] you can see in this image the extent of surveying that is completed in one growing season across southern ontario
[30:16] one part of one province there are three teams here that go out you can see them in red green and blue
[30:23] and they blanket the areas over several weeks in the summer to gather high quality field data aafc
[30:34] has devised a thorough training system to help new staff or students to become familiar with data collection methods
[30:41] previously we used gps enabled tablets with a proprietary survey tool that had been created and modified for canada's
[30:49] collections needs to survey the provinces where we do not get the insurance data we have been moving to applications that
[30:57] can be used on smart smartphones or other regular tablets such as esri survey123 which is a licensed product
[31:05] or as well the nga madge which is app which is a more open source type of tool
[31:12] here we have leander campbell from our earth observation team explaining the general process of surveying just a moment to kind of show you what
[31:20] we have for our setup we collect our data here so what we have is a gps enabled tablet that shows my
[31:28] precise location and i've overlaid that on top of some satellite imagery so i can see the boundaries of each field
[31:34] and what happens is when we pass the field and i look over and see that's a cornfield
[31:42] i can drop a point on the field enough we'll pop our menu and i can select from
[31:47] a various drop down menus and tabs different crop types and that's i'm going to select corn and it adds a point on to our field so
[31:56] then we continue to do this repeatedly over the entire province of ontario and in other provinces where we
[32:02] don't have crop insurance generally they go out in teams of two a recorder and a driver and the
[32:10] observations are actually made while they're driving and not stopped as he was showing in the video this is the general process of training
[32:23] that goes on each year for new staff or co-op students that we hire to do this kind of field work
[32:30] the main points include extensive crop identification training land cover training and device training which could be on our old tablets or
[32:39] using newer applications on smartphones or irregular tablets we do target training which teaches the field surveyors where exactly to put the
[32:48] point of interest we do regional training to ensure that surveys are familiar with particular crop types and cropping systems that are
[32:56] present in different parts of the country country and finally the staff goes through simulations and test run practices to
[33:04] ensure that they're ready to acquire weld-placed and well-identified field data data some of the ways staff are taught
[33:13] identification are through these processes processes they visit greenhouses staff can visit greenhouses on our campus to watch crops at various stages
[33:23] in growth we have an extensive crop manual that staff review that document all crops that are grown
[33:31] across canada we have this regional training our staff familiarizes themselves with the types of crops grown in their assigned field
[33:40] work region we also have a historical point review the staff will look at past data collection years to see which miner
[33:48] crops may have been spotted in certain parts in previous years we do a street view slideshow using
[33:56] google maps staffs pretend to drive virtual paths and are asked to identify crops in the field we do a crop slideshow aasc created a
[34:08] rapid slideshow of crop photos that staff are required to quickly identify as they are quickly displayed one way to easily teach identification
[34:21] is by using google street view staff pretend to drive from point a to point b as seen on the left
[34:28] staff will mark various cover on the satellite as they drive on street view and they try to identify the
[34:37] land cover as best they can obviously street view is not necessarily in the current year and may not be in
[34:44] the growing season but using this method can get the surveyor used to looking from side to side and to identify simple
[34:52] agricultural and land cover types some surveyors are unfamiliar with satellite imagery to start with and image recognition in general
[35:04] we review satellite background imagery to become accustomed to how these images may appear on a device we also spend a lot of time with device
[35:13] familiarization familiarization this give takes spending time looking at the learning and looking at the different functions of the software
[35:22] how to delete a point how to add a point how to load a layer and reading through
[35:26] all the help files that were created we also spend a lot of time on point placement placement we work on them being able to correctly
[35:35] position data on top of the background imagery imagery and we run through a static identification of targets in the office
[35:44] with a background image we ask them to find perhaps 10 water features six barns seven forest classes two golf courses
[35:52] etc finally the trainees go through land cover and crop target training and this is prior to our actual field season
[36:03] we take the trainee on a known route where they will be asked to collect land cover and crop target data
[36:09] the trainee is then judged on correct identifications positional accuracies and volume of points we provide this very extensive training
[36:17] because good quality field data is critical to the success and accuracy and quality of the overall inventory
[36:28] many times we're asked how many samples are actually needed well the simple answer is a lot overall for the southern portion of
[36:36] ontario ontario crews generally collect around 16 000 field observations but often we wonder can that number be
[36:45] reduced to if we need to reduce resources and time for field work afc ran an experiment to test the impact
[36:55] on accuracies by reducing the number of field data points used to train the classifier classifier we used we reduced the number of field
[37:03] samples in our classification from 100 all the way down to five percent and each time we reduce the number of
[37:11] field samples we reclassified then we assessed the accuracies that were obtained overall we found that we could reduce
[37:20] the number of field data points but the overall accuracies eventually decline to below operational preferences therefore a decision has to be made
[37:31] over what the overall accuracy is preferred in our case we strive for 85 percent percent and how much are you willing to allow
[37:40] that to degrade to reduce field sampling it's a very difficult decision here's another example of another region
[37:49] of eastern ontario we had a hundred percent of samples over sixty seven hundred where the overall accuracy was eighty
[37:58] five point four percent when we reduced that by fifty percent our overall accuracy reduced to 84.3 percent
[38:07] percent and then when we actually reduced it to 5 percent our overall accuracy reduced to 81 percent
[38:14] we do want to keep accuracies near 85 percent so it's important to assess these changes in general though we are looking for
[38:22] very spatially dispersed points that are representative of all crop types after 10 years of experience aafc has
[38:31] determined optimum sampling numbers for mapping crop types across canada new operational groups should acquire a maximum amount of samples as possible in
[38:41] the first years but can then use these data to run similar experiments to determine what are the requirements for
[38:48] their regions the next step once the points are collected are to go through an intense quality checking of reference data
[38:59] we first scan attribute files for any flagged items and we read all the comments from the surveyors
[39:07] the surveyor may not have known all the possible crop categories and might have placed the crops in a wrong class for
[39:14] example they might have selected other fruit with a written comment of blueberry blueberry we will correct that and put that point
[39:21] in a blueberry class if there are other questions we also use the photos to reconcile when a field surveyor has questions
[39:31] about what they are looking at they do stop and take photos of the field of interest interest even our most experienced surveyors
[39:39] often have to stop and take a photo and take it back to the office to review for minor or rare crops we highlight on
[39:50] the map and check if they're in an expected location for example if berries cannot grow in a
[39:56] region we would assume this is an erroneous observation we we for third for our third step we scroll
[40:06] along driving groups to make sure point placements are within fields for example points should not be on the
[40:13] roads or in forests or on billion buildings or in rivers we adjust point locations if possible otherwise we would delete a point
[40:24] if we find multiple points have been placed in a single field we make sure that the crop types match
[40:31] while we're scrolling if we can identify the crop type using the satellite image in the office such as an orchard or a
[40:39] vineyard or ginseng we verify that the observed crop class is correct we also cross checkpoints where our
[40:47] surveyors data collections overlap we purposely overlap our field routes to assist with our quality control if observations differ we select a
[40:58] majority observation so if two out of three surveyors agree we select that crop crop class we also review dates to
[41:07] determine if one surveyor's observation was taken at a better time for crop determination determination and we consider the historical
[41:15] inaccuracies of the particular surveyor overall overall when in doubt throw it out next we create polygons from the point
[41:28] data that was collected in the field given the amount of that we survey it is not efficient to simply manually draw
[41:35] polygons polygons to change the point data to polygons we first add a 500 meter buffer around each
[41:43] sampling point this limits the area that will need to be segmented around the sample next aafc uses e-cognition software to
[41:53] segment the imagery there are other open source options available such as qgis or python and afc is now looking at doing this
[42:03] segmenting step in google earth engine next the segment around the sampling point is extracted and is then
[42:11] considered the actual field boundary and the polygon that will be used as the training invalidation sample the training of validation sets are
[42:23] created from the polygon field data we split the field data using a stratified random sampling method ensuring that all classes are well
[42:33] represented in a region and that we have enough training invalidation for all classes present resulting in 30 percent of the field
[42:41] data split to validation and 70 split to training training we next rasterize all our vector samples and we add those raster vectors those
[42:52] rasterized samples to our satellite co-registered data sticks aafc uses all in-house tools to do this but these processes are available in r
[43:03] and python and will be shown in the next section of the series part 4. the final pre-processing step we take is
[43:13] region building so region building separates the data into manageable areas of interest it would be impossible to try and
[43:21] classify the entire agricultural extent of canada at one go therefore we break it down into manageable bits
[43:28] these sections can be based on grids such as the s2 grid or where maybe the imagery all overlaps
[43:36] or by geopolitical boundaries such as state lines or provincial lines or if the country is not that large
[43:44] could be by the entire country region building occurs just before the classification classification aafc's internal system now actually
[43:53] iterates regions over all pixels to ensure that the best coverage with each pixel is given the best coverage of
[44:01] images possible we will not region build in the hands-on portion of this activity but will subset our imagery to a common area of interest
[44:12] afc is often asked what staffing resources are used to create the annual crop inventory every year keeping in mind that canada has 64
[44:21] million hectares of total farm area to map map we have four permanent technical staff using 75 of their time that are required
[44:29] for data processing and this does not exclude this excludes their field work we also need resources to collect the
[44:37] in-situ field data for six provinces or approximately 8.5 million hectares we have an overall budget of approximately 45 000 canadian dollars a
[44:47] year excluding the salary for the four permanent technical staff as you can see from our graph we have
[44:55] six provinces resulting in 8.5 million hectares that we need to survey in the first column we have newfoundland
[45:03] which has 28 000 hectares of farm acreage acreage we take one person the first number and and four days the numbers and brackets to
[45:14] survey that area and provide enough field data so forth and so on you will see that for
[45:22] each of the provinces we either have afc's earth observation team which is our permanent technical staff or we have aafc students which we hire
[45:33] part-time co-op students over the summer months months we have aafc that actually are in the province which in newfoundland that is
[45:41] who actually does the field surveying we partner with statistics canada another government of canada agency who does surveying with us
[45:51] we partner with provincial governments such as omafra which is the ontario ministry of agriculture or the bc government to also do
[46:01] surveying in those provinces so overall we have 26 individuals for 168 days of work to survey the
[46:12] 8.5 million cut a hectares 8.5 million hectares so that's 26 people for a total of 160 8
[46:23] days or an average of 6.5 days per person so so now we will go and do our hands-on
[46:37] exercise for opening and pre-processing imagery with snap if you have downloaded the sentinel one sar image you can try and follow along
[46:49] with these processing steps on your own don't worry this recording will be provided on the training website within 24 hours so you
[47:00] can again apply and go at your own pace so so as you have already learned snap is
[47:13] sentinel's application platform it is free in open source toolbox and it's for processing and analyzing esa and
[47:20] third-party earth observation satellite image trade imagery data and as you've learned you can download the latest installers rib snap from esa
[47:31] there are the main steps that you need to follow for star preprocessing is opening a sentinel 1 iwgrdh
[47:39] image image apply an orbit file apply a speckle filter complete the geometric correction with the range doppler
[47:49] complete the geometric correction with the range doppler model and at this point this is where the radiometric normalization and conversion
[47:57] to the sigma naught occurs and then you will have your preprocess sar data first we will start with opening a
[48:10] sentinel 1 image you can do this by doing file open product and clicking on the manifest safe
[48:27] product and now your image is open you will see that you have the metadata information which describes
[48:45] all the details about the sar image what its mission is the acquisition mode its processing time and
[48:55] and all other details and you will have other information that helps for geolocation and you will have the bands that are
[49:05] available in the sar image which are amplitude and a virtual band which is intensity which you have learned about
[49:13] our first step is to apply the orbit file file to do this we go to the radar toolbar
[49:22] and we select apply orbit file here we have the i o parameters tab and the processing parameters tab
[49:35] in general in snap as you know the i o parameters tab will be giving you the information about the source product
[49:43] and the information about the target product product it'll also tell you what the type of file is
[49:50] so in our case for applying the orbit file we would like to select the file that is in the product explorer
[49:58] it will save that file with an underscore or rb so that you know that orbit file has been applied
[50:05] and we will select the folder in which we wish to save this next you go to the pre-processing
[50:19] parameters parameters here you will select your orbit state vectors either sentinel precise or sentinel restituted and sentinel precise
[50:29] is related to the 5 centimeter accuracy you leave the polynomial degree at 3 and you hit run
[50:43] the writing target product window will next come up and it will complete now once your file has been orbit corrected it will
[51:04] show up in your product explorer but it will now have the underscore or our b as it in its name file
[51:13] and you can see here it has the same bands of amplitude vh and amplitude vvv with the virtual
[51:19] intensity and virtual intensity vb you would close the apply orbit file and you've completed the first step of
[51:28] applying the orbit file the next step in the process is to apply the speckle filter once again you go to the radar tool
[51:39] and go into this speckle filtering selection selection here you'll see we have single product speckle filter and multi-temporal speckle filter as i
[51:49] mentioned was available in snap in our scenario we will select single product speckle filter the toolbox window is opened and once
[52:00] again we have two parameters two two tabs the i o parameters and the processing parameters we want to ensure that our source
[52:13] product is file number two or the file with the underscore orb our target product you will see will now
[52:24] be renamed to or rb underscore speckle or underscore spk in my case i would save it to a
[52:35] directory called sentinel1 underscore speckle speckle but in your case you may feel you don't need to because all the subsequent files
[52:43] are saved with the information about what processing processing step has been applied under the processing parameters tie
[52:55] you would highlight the four amplitude and intensity channels and then you would select your filter type type as we mentioned at aefc for the aci we
[53:10] use a gamma map filter with a 7 by 7 window size then we select run and the writing target product
[53:35] window will come up and show you that it is writing and there's more bands so it takes
[53:52] longer so processing is completed and we close the main toolbox and we will see that our file is now
[54:22] in the product explorer with the underscores spk we can actually look at our speckled image by clicking on
[54:35] right clicking on the intensity vh and opening of window and we can compare it to the non-speckle
[54:42] filtered filtered image by right clicking on the intensity vh under the just orbit file corrected image and we can tile our
[54:57] images horizontally so you can see here and by synchronizing our image cursors and synchronizing our image views
[55:16] we can zoom in and see what the differences when you apply the speckle filter filter so our non-speckle filtered image is on
[55:25] the left and our speckle filtered image is on the right and you can see here the salt and pepper nature of the
[55:34] non-speckled image as opposed to the more smoother and homogeneous fields of the non-speckled of the speckled image
[55:45] the next step that we would apply after we've done speckle filtering is to do the geometric correction
[55:54] by applying the range doppler model and at this point do the radiometric normalization and conversion to sigma
[56:01] naught naught once again we go into the radar tool and we go to geometric we go to terrain correction and we
[56:10] select the range doppler terrain correction the tool window opens up and again there are two tabs i o parameters and
[56:20] processing parameters we'll make sure that we're selecting the speckle filtered image and you'll see once again it will give a
[56:31] underscore tc which indicates that a terrain correction has been applied to that file i again like to set mine in specific
[56:41] folders under processing parameters we have more selections first we will highlight all the bands and then we will select the digital
[57:00] elevation model we want to apply in this scenario we are looking at applying applying srtm srtm one second hdt auto download
[57:13] digital elevation model the srtm one second hdt digital auto digital elevation model has an overall resolution of
[57:23] approximately 30 meters there are other options and you will need to determine which of these models is available over
[57:33] your specific region and and will be the most appropriate for the information that you're looking at you can also import an external digital
[57:45] elevation model if you happen to have one we leave the digital elevation resampling methods alone you can here
[57:55] change the map projection in our case we will leave it at wgs84 and it's here that we apply the
[58:03] radiometric normalization and save our data to the sigma naught in our case we will just simply use a
[58:12] local incidence angle from the digital elevation model so once all the processing processing parameters are selected we will hit run
[58:29] and once again the radio target product window will come up showing that the product is being processed
[58:44] i have these pre-processed that takes uh you know a good 20 minutes so so and then your file should open
[59:24] in the product explorer and you will see it now has the underscore tc close that and you will see now we have
[59:34] different bands we have sigma naught vhv we have local instance angle image we have a projected local instance angle
[59:42] image and then we have our sigma naught underscore vh using the local incidence angle from the digital elevation model
[59:51] these are the bands or channels that we wish to use in our classification but you will also notice they are
[59:59] virtual bands this simply means that they have not been uh their virtual information and they have not been converted into real images
[1:00:09] and it is at this point that you right click on each of these and hit convert band
[1:00:17] band convert band and you will save that product so those will be saved and written as real actual
[1:00:25] products products this takes quite a bit of time as you're writing a 250 kilometer swath image and writing each pixel based on
[1:00:39] this new information from the calculations i have these pre-processed and now you have the corrected speckle filtered terrain corrected image
[1:01:18] and again we can close these image windows and look at the actual image you can zoom in on the different areas
[1:01:39] and see what information you can see depending on your computer ability ability rendering in on these images they take
[1:01:52] certain amounts of time but this is a image that is ready to go into a crop classification
[1:02:07] and and this area is over argentina and you can see that these would be different different fields
[1:02:19] as would be some of these within here and water bodies and towns etc okay okay that's it for the
[1:02:35] pre-processing with the sar the next part of your pre-processing are your steps for optical pre-processing the steps would involve if you have
[1:02:55] sentinel 2 l1c data you need to convert that that and correct that to a bottom of atmosphere reflectance by using a
[1:03:05] centucore atmospheric correction module please refer to the nasa arset training by esa for detailed instructions on how
[1:03:14] to apply the actual optical imaging pre-processing pre-processing so what i'm doing is subsetting sentinel one imagery co-registering sentinel one imagery and
[1:03:26] exporting the files our next steps are subsetting co-registering and exporting our files to geotef format next you would
[1:04:26] make sure that your orbit file applied speckle filter corrected terrain corrected image is open and highlighted in your product explorer window
[1:04:36] you would select the raster tool in the toolbar toolbar and select subset it is here that you would put in your
[1:04:48] information about where you would wish to subset to in our scenario we have a smaller area that we will be
[1:04:59] classifying classifying and therefore we want to relate our sentinel 1 image to our sentinel 2 images and so we'll be using the extents
[1:05:10] or the geo coordinates of the sentinel 2 image as our subset so in this scenario we would put in the
[1:05:17] subset coordinates and you will see as i enter subset coordinates coordinates the window of interest starts to change
[1:05:39] and our southern latitude and finally our eastern longitude and you will see now we are actually taking
[1:06:24] taking only this section that we are interested in in and and this is actually representative of an
[1:06:32] overlapping sentinel 2 image you'll hit ok and and magically it seems to have subseted itself very quickly
[1:06:46] the problem here is is that it hasn't actually been written to file we can open the image window and see the
[1:06:52] subsetted version um and we can open the subsetted window and we will see the actual subset of the full image that we were
[1:07:59] looking at so again we can zoom in and you'll see it renders a little bit better because the file is smaller and
[1:08:06] we can see the different fields and cities and water bodies etc etc you'll also notice over here
[1:08:15] that that i have removed the four channels i am not interested in and and i have then subsequently saved my
[1:08:26] product product by just hitting save now you have the pre-processing and subsetting of sentinel one imagery we want to get them ready to go into the
[1:08:42] data stacks in conjunction with the sentinel 2 imagery and the field data now in the next part of part 4 you will
[1:08:51] see how to put in sentinel 2 and the field data but now we will co-register all the
[1:08:57] sentinel 1 pre-processed data for this site we have approximately 10 images that we will be using from sentinel 1.
[1:09:19] so now we will co-register the sentinel one images and and create them into a stack to be combined
[1:09:27] with sentinel 2 and the field data for the classification can pre-process all your sentinel one image image either individually as i've shown here
[1:09:40] or you can do bulk image processing using the graphs in snap as was shown in the previous trainings
[1:09:50] now we will open all our subsets that we want to co-register in some ways you may have learned you
[1:09:59] can also just drag and drop files into the product explorer and they will all open up so in this scenario i have the 10
[1:10:11] sentinel one images that cover our area of interest so cover the growing season so if you're thinking of argentina the
[1:10:19] growing season starts in september of the previous year 2018 and it goes approximately through to may of
[1:10:28] the following year so 2019. so we will now co-register or put all of these images into one data stack so that
[1:10:37] we have one image that has all of these 10 bands or 20 bands in them so once
[1:10:44] again we go to radar and we go to co-registration and the co-registration window opens now in the product we have different
[1:10:55] tabs tabs we have product set reader we have create a stack we have cross correlation we have warp and we have write
[1:11:04] so the product set reader is something like the i o parameters this is where we're putting in what our
[1:11:11] our products are that we want to stack and in this this scenario i can simply add all the files that i have opened
[1:11:20] and they are stacked they are in the product the co-registration file next we want to simply create a stack
[1:11:30] our initial offset method that we will use is product g location and our resampling type is just bilinear
[1:11:38] interpolation interpolation our output extents are based on one of these options as being the the primary extent that all other images in the
[1:11:51] stack will follow so we can apply this find optimal master and generally this may or may not change
[1:12:00] to select a one or a different image we leave cross correlation and warp as is for defaults and then we select write
[1:12:14] and once again you will see that stack is added to the end of a one of the
[1:12:24] stack is ended in added to the end of the master's name and that will be your stacked
[1:12:32] file that has all of your 20 bands in it so we select a folder in which to save
[1:12:40] that and we select run so and now we have our master master file with stack underneath and you will
[1:13:27] see we have all bands that file and it's at this point we would now export this from the bmd map
[1:13:37] format that it is in for snap into into a a geotiff format to be used in a different
[1:13:47] classifier classifier or in a different software so all we do is go to file export export geotiffbigtiff
[1:14:01] and we select a location and we can rename this if we don't want to keep all that information
[1:14:33] and we export our product and this will take a while to write all this data to a geotef big tiff
[1:14:46] okay that's subset core edge and export okay okay and now you have a stack of co-registered and subseted
[1:15:08] sentinel one imagery to use with the classification with python in the next section of the webinar series
[1:15:18] and remember we will have this training video video on the web page within 24 hours so that you will be able
[1:15:26] to go through this at your own pace so i thank you very much for listening and learning about the annual crop
[1:15:33] inventory and listening to how to do a crop inventory and we will now send it back to our host
[1:15:49] please please write your questions in the question window and we will answer them in the order that they were received we have
[1:15:57] been already collecting the questions that have been coming in and we've been putting them in a google doc which we
[1:16:04] will be sharing with participants shortly on screen we will post this document on the training website following the
[1:16:12] conclusion of the webinar if you have any questions about the material presented today please feel free to reach out to dr laura dingle
[1:16:24] robertson her email is here also also if you want to access the recordings or the presentations they're all being
[1:16:33] posted on the rset training page for this webinar series thank you very much dr dingle robertson for that great presentation and
[1:16:46] thank you for participants for the questions coming in we've been gathering them and we're now ready to start
[1:16:54] our question and answer session great great so so let's uh just work our way down the questions that we've already
[1:17:13] been assembling on our google doc and uh let's start with number one uh how to how do you integrate sent to core
[1:17:22] plug-in offline in snap so go ahead laura thanks erica um good morning all right uh so there
[1:17:34] are instructions on esa's website um that will integrate the centucore offline uh for snap um and we provided
[1:17:42] you with the link for that and then similarly and this is what we use and i know a lot of people across uh
[1:17:49] across the world use it as well the step forum is an excellent source of resource in order
[1:17:56] to ask questions on how to integrate that into your particular system um there are ways to run centicore when
[1:18:02] it's integrated in snap or you can do it separately using command line but again those those links will be an
[1:18:10] excellent way to to go and look at that and similarly um the previous lecture in this series lecture two i'm pretty sure
[1:18:19] they probably spoke about centucore as well so you can refer back to those videos as well yeah absolutely um some of some of um
[1:18:30] sent to core was discussed in this second session of this webinar series so question two how does one estimate
[1:18:38] zone area or cultivator area of crops using sar data okay so i think this came a little early
[1:18:45] in in the questions but as we've shown afc has this robust method to integrate siren optical data
[1:18:52] to operationally map cross map crops across canada so this webinar gives you the whole background on the pre-processing of the
[1:19:02] sar data the previous webinar lecture 2 would have given you the example on how to pre-process optical data and and then
[1:19:11] the next webinar webinar 4 on thursday will give you the the instructions on how to process process use these data in a classification our
[1:19:23] webinar today also showed you how to do the field data collection as well on thursday we will walk you
[1:19:29] through the whole post post classification process including on how to publish your data okay okay question three how do you use ascending
[1:19:43] and descending past sentinel one images so in our case in an operational crop inventory we use either pass either pass
[1:19:53] can be utilized um in some cases there may be uh you may be trying to avoid a
[1:19:58] pass um that might be acquired when do is present um so generally it's not necessary to exclude those images or
[1:20:05] stick to either descending or ascending um and it's uh also not necessary to sort of stick to a single incidence
[1:20:12] angle in a simple crop classification um we talked about these issues with incidence angle or water and moisture
[1:20:20] and and sars so we're asking that if you go back to part one in this series and
[1:20:27] get a sense of how those things may have an influence but generally in an operational classification we're not
[1:20:33] specifically uh singling out ascending only or descending oldly or simple one type of incidence angle only that's a great point
[1:20:43] okay question four what is single look complex and ground range detected what is the difference difference okay well this also was covered in part
[1:20:53] one but uh briefly so uh singlet complex slc data are in the slant range and that's the natural viewing geometry of
[1:21:02] sar sar heather had a really great slide that sort of shows exactly uh what that natural viewing geometry means
[1:21:11] and the phase is preserved the ground range detected data grd data have been projected into an actual ground range
[1:21:20] and and phase is not preserved so if phase information is not required ground range detection is a good a choice for
[1:21:28] operations um these products are easier to stack they're easier to integrate with other geospatial data and in the
[1:21:34] case of our current crop operational crop inventory we simply use ground range detected data okay so now question number five going
[1:21:47] back to sent to core can i use it to do terrain correction of a level 1c granule
[1:21:53] using a dm that covers it partially um so typically for us and again um the information on send to core definitely
[1:22:02] you'll you'll see um about or can hear more about in part two um but typically we use the dm that covers an entire area
[1:22:10] of a granule you can download dms that that will cover the entire granules potentially there could be errors in the
[1:22:19] portion that are not covered by the dem but again for details on centucore only um you can refer to those links i
[1:22:27] mentioned above um as well refer back to part two of this lecture series okay question number six do sentinel 1
[1:22:37] and sentinel 2 satellites go over the area on the same day are are they in some kind of
[1:22:48] uh orbit train orbit where both optical and sar data are acquired on the same day day so this is probably a question for esa's
[1:22:56] the the engineers but um it i i think it is it's depending on where the images of
[1:23:02] acquisition are being acquired we do satellite calendars for some of our field surveyors just so that they
[1:23:08] can try and be out to match certain um satellites for certain research projects um and in southern ontario for example
[1:23:16] sentinel lender and sentinel 2 are being acquired on sequential days i suspect in europe there's overlap but again this is
[1:23:23] probably a question for esa and maybe looking at their sites there are acquisition calendars calendars both for sentinel one and sentinel 2.
[1:23:35] you can get a link for that okay question number seven do the images from the alaska satellite facility and
[1:23:44] the copernicus hub have the same name or id id uh yes i believe the naming convention is an isis standard so they would have
[1:23:52] the same and it's it's across the board so that everybody knows what type of imagery you're you're looking at and the
[1:23:59] the different dates and times question eight uh what does a corrected file refer to how does the correction process
[1:24:10] uh uh produce produce so so yeah we weren't too sure about this question um just that again we kind of
[1:24:19] went through the different correction steps the geometric correction the radiometric correction um geometric correction is applied to relate this our
[1:24:27] image to a position on the earth and radiometric correction is necessary to correct for system errors and to provide
[1:24:33] accurate accurate measures of backscatter response per unit area so i guess they could refer back to some of
[1:24:40] the details in in this lecture or i believe heather also mentions this in part one again okay question nine has two parts first
[1:24:52] is it correct to process sentinel 1a and 1b images at the same time and and the second part touches on the previous
[1:25:03] question you answered what happened with the ascending and descending is there any sort of i guess error or noise that's introduced when
[1:25:12] using both at the same time okay so as i mentioned we have never experienced issues with using the two
[1:25:18] together but again we might sometimes trying to avoid data that were acquired when there was due in the
[1:25:27] fields fields in operational contacts it is imperative to acquire a time series of sar imagery that captures the entire growing season
[1:25:36] so for the afc crop classification in operational context we use both you're going to have a trade-off between
[1:25:45] do effects differences in incidence angles and maybe slightly different viewing directions and a good temporal coverage um but as we heather just talked about
[1:25:56] during the tsar basics refresher refresher if you're trying to just use star backscatter for change detection it is
[1:26:03] important that your orbit and incidence angle are the same so when you're just trying to do it for crop classification
[1:26:09] um is not as important but if you're trying to do change detection you want to make sure that orbit and incidence
[1:26:14] angle are the same yeah that's a great point question 10 page 25 or slide 25 you mentioned that the
[1:26:26] the oh did you mention where the blue marked filters are implemented okay so i think this refers to so we did
[1:26:34] have uh filters marked in blue red and green and in relation to just different types of available filter speckle filters and
[1:26:44] then um ones that were available in snap and then ones that uh uh were not and some of them were were in blue but uh
[1:26:52] for the operational uh crop inventory we typically use a gamma map filter with a seven by seven or greater window size um
[1:27:01] but what we really recommend with when you're trying to figure out what you're doing with your speckle filter is that
[1:27:07] you do tests on the filter type and the filter size in some cases a spec for a
[1:27:13] specific filter or one of those blue listed filters that we showed there the multi-resolution um the um
[1:27:21] yeah the multi-temporal it may be more appropriate for your particular area of interest in our scenario we found using the gamma
[1:27:30] map filter is the best filter for us to use across the canadian extent but as we said it's best
[1:27:37] to test these over several sites in your particular area okay question 11 how do you determine the threshold of cloud cover with
[1:27:50] sentinel 2 images so typically we generally do not have a minimum threshold and we don't actually um when we're trying to look at uh
[1:28:00] optical imagery we don't uh give a minimum threshold because we want to attempt to utilize all portions of
[1:28:06] images that are not covered in clouds and sometimes when you put in a minimum threshold it will knock out an image
[1:28:12] that may have a portion of it that is cloud free we do a little bit of a manual process
[1:28:18] by which we review our optical imagery to ensure that we can use all portions of viable images possible
[1:28:26] and as i said by using a threshold you may actually exclude some portions that might be um cloud free and it may be the
[1:28:34] only available imagery optical imagery for a particular period of time and it might be an important period of time for
[1:28:40] a certain in terms of growth and gross stage for a certain crop type great question 12 what are luts where
[1:28:51] can i find them and how do i use them well there's many ways to use luts those
[1:28:57] are look up tables and in general they are provided in the satellites metadata and they are incorporated into a wide
[1:29:05] variety of processing tasks like we showed such as radiometric conversion to sigma naught for example so in general these
[1:29:14] are being incorporated in snap for example into some of the different snap modules and are used in the different
[1:29:21] calculations to produce a desired outcome whether that's sigma naught or maybe that is in relation to geometric correction but in general when
[1:29:30] you go into snap you can go and look at a a satellite's metadata and you will be
[1:29:35] seeing a list of lookup tables in there question 13 can we access aafc training system documentation so the training systemation
[1:29:49] documentation is not currently available to the public to download but um leander has kindly i didn't do this but
[1:29:56] leander's kindly given his email address and um you can send him a quick email and he'll pass along our training
[1:30:02] materials particularly in relation to our field data training um and he can answer any additional questions that you may have
[1:30:12] so his email is right there yeah question 14 what is the other what other type of information do
[1:30:20] you gather from the ground aside from crop type and how often do you go to the field
[1:30:26] field so besides crop types um data collectors can also add points for additional agriculture information they may
[1:30:33] add information about if a field is fallow fallow if it has been harvested one one type of observation we do a lot of is
[1:30:43] too wet to be seated so obviously standing water in a field the field can't actually be seated
[1:30:49] they can also add various land cover types such as wetlands forests water and then they have ability to add
[1:30:58] additional notes to their different points so either a field has a lot of weeds or crops are
[1:31:05] looking dry or stressed so within the particular particular observation survey tool there is an option to add notes and these notes can
[1:31:14] then be reviewed back in the office when trying to prepare the data for for the crop classifiers
[1:31:23] great question 15. is there a similar software also available for data collection using free open source software
[1:31:33] software so any geo-referenceable collection tool can be used as a data collection tool obviously so like a
[1:31:40] like a smartphone we actually have surveyors out um using their smartphones um but the method used by our operationals group um they use
[1:31:50] gps enabled tablets and they use this old esri collection software called arc pad um recently and in research and development
[1:32:00] we've started using um a phone based application um using esri survey123 um and that unfortunately is proprietary um
[1:32:09] but we've also experiment experimented with it's called nga madge data collection tool and this has been used
[1:32:16] by the usda's foreign agriculture service um and so you just go online to the app store and and look up nga's madge data
[1:32:24] collection tool okay question number 16. there are lots of parts to this question but it's all related to the data sample size so for
[1:32:34] crop classification using the training data what is the data sample size and what should be the average farm size in india the average
[1:32:45] sizes are half a hectare so is that arm size okay should we use at least 100 such farm
[1:32:53] data for training and what is meant by well-dispersed data how do you differentiate between grain crops such as patty wheat
[1:33:02] or what kind of training data sets should be considered and what specific method could be used to distinguish crop type
[1:33:11] so that's a lot of questions so we have this road map but we you have to understand and we've provided this
[1:33:18] roadmap and this is what works very well in canada and has been working for over 10 years but there has to be some
[1:33:24] adaptation adaptation and there will be some adaptation required to apply to your region of interest depending on your cropping
[1:33:31] system depending on your growing season and obviously depending on your field sizes sizes canada's is pretty simple uh cropping
[1:33:40] season we have a very sort of may to september growing season and we have relatively very large fields
[1:33:47] for smalls fields you want to consider higher resolution sar modes and remember that the noise associated with sar will require noise reduction
[1:33:56] which heather discusses in part one um so as such typically some type of averaging spatially or multi-looking
[1:34:03] will be needed in terms of dispersion of training data it's important to collect field observations across the area you
[1:34:10] wish to classify because there may be a differences in seating dates or meteorological conditions may create differences in crop development so we
[1:34:20] differentiate between many many different crop types including grains and vegetables and oil seeds you will require samples of all the crop
[1:34:28] types you are trying to classify so there's no simple answer to the number of field observations that you need um
[1:34:36] it depends on the mixture of crop types how different the tsar and optical signatures are among the crop types so
[1:34:43] afc's operations this whole process began with research and we actually continue uh adapting our menu methods as
[1:34:52] we go to achieve the best results so this is something that if you're looking at this is that
[1:34:59] starting with research seeing what works across your area of interest and then operationalizing it and then adapting as
[1:35:07] you go okay question 17 do you stratify the sen the training sample collection so that you ensure sufficient training samples
[1:35:19] and and are confident in capturing rare land cover classes do you calculate accuracies for land cover classes
[1:35:26] individually or overall so um our sample classification collections is not stratified but given these guys have been out every year for
[1:35:37] the last 10 years it's based on their knowledge of the areas so areas with rare fields are usually are going to be sampled with
[1:35:45] a higher density um so where they know that there are rare crop types being grown they will go in there with a
[1:35:51] higher density in general they publish overall crop accuracies per province but individual crop classification accuracies are also computed
[1:36:02] but they are not published but they are also available on request and are listed on our open
[1:36:08] canada.ca as being available on request from the earth observation team great question 18 do you publish the crop maps and
[1:36:19] training data so yes as i just mentioned everything is published on opencanada.ca and the annual crop inventory maps are
[1:36:28] found at that link there and the ground truth points that have been collected by our earth observation team so this is
[1:36:36] not the data that's provided by the provincial crop insurance companies can all be found there so all uh 10 years
[1:36:43] worth of crop classification points can be found at that site question 19 since landsat and sentinel 2
[1:36:54] imagery have different resolutions and bandwidth how can they be combined and used in the same study so um you can combine them by resampling
[1:37:06] one to the other spatial resolution um first uh uh first uh comparing the spatial resolution um similarly uh sent
[1:37:15] to agree which i believe will be discussed a little bit in part five and is available through esa and what i
[1:37:25] believe is called mls data that is being produced by the usgs they have an attempt to normalize the
[1:37:32] bandwidth between the two imagery types to be used in an optical type time series but you can
[1:37:40] go online and look at send you agree at the link that we provide there and then similarly i
[1:37:47] believe you can check out usgs's sites for details on and i believe it's mls i'll double have to double check that
[1:37:55] but it's uh where they're trying to normalize between landsat and sentinel so they can be used in time series
[1:38:03] okay question 20 is the same one as question 18 so we will skip that one and question 21 that's been answered two
[1:38:13] in question 16 so we'll go over that one skip over it and then let's go to question 22.
[1:38:21] in my understanding fields are classified according to the view from the roads driven during aafc field surveys
[1:38:30] surveys this assumes that the road view crop is representative of the entire field can you provide an estimate of the error
[1:38:37] that entails this assumption so data collectors are instructed to place their observation point only in the area they can see so they're not
[1:38:48] trying to assume that a whole field is growing in a uniform crop type when they run the segmentation process
[1:38:55] that we we described in the lecture over the imagery with the observation point we then associate uh the observation at that
[1:39:06] point to that polygon that is created during the segmentation uh process but uh nothing is perfect and they've had
[1:39:16] conversations our earth observation team with uh usda um the decision tree methodology that they use and for their crop classification
[1:39:25] can handle up to 20 uh training data error and still produce an acceptable map um but of course they never really
[1:39:33] want to be near that percentage so it's always kind of a trade-off here um in terms of your
[1:39:39] development of your field field training data what you can feasibly do it's driving along roads is is one of the
[1:39:47] only ways that you can feasibly get that many training samples um in a in such a large area uh you know as canada's
[1:39:55] extent so it's a bit of a trade-off okay question 23 do you do the survey every year
[1:40:05] yes yes we survey for every growing season that's july through august and we sample the information every year where it's
[1:40:13] not made available so for all those provinces that i listed in in the summary table um we do that every year
[1:40:20] um and then for the other provinces we receive receive information from crop insurance agencies okay question 24
[1:40:31] do you have you considered using bikes instead or in conjunction with cars which would eventually allow access to
[1:40:38] more fields and how about drones so so uh considering we're very like canada is a very large place um and we have very
[1:40:48] large areas to sample so it becomes an impossible task to buy bikes even in conjunction with cars
[1:40:56] similarly we have privacy requirements and we are not allowed to simply go on to a farmer's field to make
[1:41:04] observations observations we would have to obtain permission from the farmer and that that's quite a logistical logistical problem so
[1:41:15] with drones there are issues again with permissions with where drones can actually be flown in canada and with weather
[1:41:25] so it's a bit too complicated right now to be used operationally okay question 25 which builds on question 24 is it possible to
[1:41:37] ask all the farmers in a specific region to indicate on a map what the crop type is on each of their farmland
[1:41:46] okay yep um and yeah and then the the he went along to talk about um uh in
[1:41:52] netherland the farmers actually register their plots every year um so this the source of data in the
[1:42:00] netherlands sounds like a very excellent source of institute data if they're required to register their plots every
[1:42:06] year and if um you can uh gain access to that data i don't know if there's privacy issues around that
[1:42:13] in canada farmers are not required to do that kind of registration we mentioned that we are able to acquire
[1:42:18] crops insurance data from some provinces but there are very strict rules and agreements between ourselves and those
[1:42:25] provinces that have allowed us to use those data and again in those provinces where we cannot obtain
[1:42:32] that type of data we do the field surveying ourselves okay question 26 how do you ensure that
[1:42:44] your training set is representative of the study area how can you determine the sampling density before even starting is there
[1:42:52] any formula ratio expression or tips in addition to being familiar with the region of interest is the choice of sampling site only
[1:43:01] related to the landscape heterogeneity level in terms of lithology geographic formation soil types land cover and land use and so on
[1:43:12] um so we are not using any quantitative rules to determine our sampling density in canada so in areas where there's lots
[1:43:20] of field diversity we sample as much as possible along those driving routes um again the samples should be well distributed
[1:43:28] across the entire mapped area um and this will help collect data in areas that might have experienced a
[1:43:34] microclimate microclimate differences like wet drought wet or dry if there's pests or disease infestation um as as we saw in the first lesson from
[1:43:45] uh dr mcnair their assembly across the entire area of interest will help with the near and far
[1:43:51] range issues with sar data we will also focus on more sampling in areas with rare crop types as i mentioned
[1:43:59] so in general the more samples the better for these crops for the decision tree methodology that we're using um and
[1:44:08] the decision tree will start to be biased to the more common crop types given there's more robust sampling for those crops so
[1:44:17] for rare and uncommon crops you want to get as many samples as you possibly can okay question 27 when applying the
[1:44:27] terrain correction can you use a higher resolution resolution dem and what would be the effects so you could use a higher resolution dm
[1:44:37] to apply the terrain correction but um you'll use any additional benefits from this as you're limited by the pixel
[1:44:43] resolution of the original image image um so in fact a higher resolution dm could potentially slow down the
[1:44:49] processing entire time because it's more detailed and likely a larger field size so um trying to match the same
[1:44:57] resolution as your your original imagery might be a more appropriate approach okay okay the next question number 28 if we want
[1:45:11] to automate this process can this be done in earth engine or or is there a separate script in python
[1:45:20] so yeah so all of these processes that i ran with snap can be automated using python so snap has a version of python
[1:45:28] called snap pi and you can incorporate that and call all those modules that that that i showed in the online
[1:45:38] preprocessing preprocessing similarly you can run all of that processing in um as a batch processing option and i'm not
[1:45:47] 100 sure but potentially in part two they described um how to do batch processing in snap but you can write a
[1:45:56] graph for all the processes in your preprocessing and then run multiple multiple images using the batch processing and snap
[1:46:09] okay question 29 is there a suggested approach to subset your image before correcting it in order to reduce
[1:46:16] computational time or is there a reason not to do it so simply to subset your image to be
[1:46:24] able to subset it to a known area of interest you actually need to know where your image is so it does have to be
[1:46:29] terrain corrected and projected into into a known geometric uh known place on the earth so you would have to do that first so um
[1:46:39] yeah you you need to you kind of need to know where you are before you can subset
[1:46:43] an image down for sure okay question 30 why didn't you apply a radiometric calibration calibration so you might have missed it but um it
[1:46:54] was applied during the terrain correction in the snap so if you refer back to um once the video is posted you
[1:47:01] can go through and run through the snap processing again um but in snap if you're writing applying a radio
[1:47:08] calibration that is uh that you want to be more precise using a digital elevation model use the pro process
[1:47:14] within the training correction module um in some cases you may not wish to do this um and subsequently you can plot
[1:47:21] apply apply uh that type of radio correction first um prior to your speckle filting and in snap that's going
[1:47:29] in the radar um tool and hitting calibrate and then calibrate to sigma naught okay question 31 do sar images have to be corrected for
[1:47:42] atmospheric interference so so so no that you don't need to do an atmospheric correction for sar data
[1:47:51] and this is only for optical data they're obviously passive systems and they're looking at energy reflected and
[1:47:58] emitted from the earth and as heather's mentioning right now our satellites are their own microwave energy source um and they have longer
[1:48:07] wavelengths than optical satellites and are not impacted by atmosphere particles and heather really describes this um in
[1:48:14] the first in the first portion of the or first part of the whole series so you might want to review that as well
[1:48:23] okay question 32 can send core be used to perform a terrain correction or is it necessary to
[1:48:30] implement a routine analysis to do it so i would refer back to the first question on terms of what
[1:48:39] centucore can and cannot do typically my understanding is it's terrain corrected prior to download um and then so there's not a necessary
[1:48:49] it's not necessary to do a terrain correction on sentinel-2 imagery um but i would refer either back to part
[1:48:57] two of this lecture series and the links that we provided above on centucore all right question number
[1:49:08] 33 33 for the slide where you show human resources resources needed to create the crop inventory by province
[1:49:20] there was i didn't see any information on the prairie provinces is ground data for those areas provided entirely by the
[1:49:28] crop insurance companies um that's correct so the crop insurance agencies within agreement with agriculture and agri-food canada provide
[1:49:38] the crop infra crop information um for those provinces um and so that that is correct we do not
[1:49:46] do any surveying any ground surveying um on an operational context in those provinces and research and development
[1:49:54] we actually do some similar types of crop surveying but obviously in more smaller areas more focused for research so but for the operational
[1:50:05] the crop insurance agencies provide that information okay question 34 is there any disadvantage in applying the thermal
[1:50:16] thermal noise removal and radiometric calibration before terrain correction so for thermal noise removal and i believe our our our
[1:50:27] partners with copernicus roost will actually uh they actually include that in their processing chain but we we
[1:50:33] haven't seen any sort of advantage or disadvantage in completing the thermal noise removal and it's not currently
[1:50:39] part of our processing chain for radiometric correction we've done some initial assessment and as heather mentioned in relation to
[1:50:48] when using wide swath sentinel one imagery it can be important to apply that normalization using the digital
[1:50:55] elevation model and local incidence angle because the difference between the values of the class types on either side of the images can be
[1:51:02] significant okay question 35 the semi-automatic classification plug-in for qgis provides a toolkit to pre-process sentinel 1 and sentinel 2 imagery are
[1:51:19] those tools built on the snap pi python module if not what are the main differences between the pre-processing
[1:51:27] and and snap and in the semi-automatic classification plug-in so i'm not familiar at all with this semi-automatic classification plug-in
[1:51:37] for qgis but i would assume that someone on that thesis for forum would be very uh familiar with this and my
[1:51:46] recommendation would be uh going on the step forum and just posting your question um because i'm sure someone has has
[1:51:54] attempted to try this and uh they they would be able to give a little bit more insight but i'm we we do not use that
[1:52:01] that tool okay question 36 with snap how do you subset irregular shaped study areas can we use
[1:52:14] already prepared area of interest like a shape file or another type of raster so typically i'm not subsetting to
[1:52:22] irregular shaped study areas using snap so it's it's not something that i've i've sort of um investigated myself um
[1:52:31] subsequently uh you can pull your whole pile a stack of data if you've stacked like um sentinel one images uh you can
[1:52:40] pull those all out and subset them using uh python or another another source uh for subsetting we have
[1:52:49] proprietary tools that afc that we can use for subsetting um if we want an irregular shaped uh
[1:52:57] aoi but typically if i'm using snap i'm using simply uh square or rectangular shape areas and so
[1:53:06] they're not they're not irregularly shaped shaped again i would check the forum that's always a great place and yep
[1:53:18] okay question 37 how can i use the mage app in my country the app asks for a
[1:53:23] server url so mage the software is open source but you need to host your own server so that you can manage the database and
[1:53:33] the actual software so what you would do is then you would create your own server to host
[1:53:40] your mage application and then send that out to your surveyors to use for surveying surveying and i don't know leander might have a
[1:53:49] link that we can add in terms of more details and resources on using mage we'll get that for you guys
[1:53:58] okay question 38 how does aafc estimate accuracy of the crop inventory maps so the data are being collected um
[1:54:08] either by the field work or from crop insurance data and we divide that into 70 training data and we have 30 percent
[1:54:16] which is our reference or validation data and that 30 it's set aside we don't use it for any training or testing it's
[1:54:23] solely used to validate the maps okay question 39 to to the crop insurance industry i want to
[1:54:34] use sentinel one data for different crops in the indian region which are comprised of small fields how please suggest how
[1:54:43] do i do this i guess how do you access the crop insurance data so again this is a road map and you will
[1:54:52] require some adaptation um if they're not available to you you'd have to consider collecting in-situ field observations um to getting the
[1:55:01] training and validation data but if there is crop insurance data available in your area you'd have to investigate
[1:55:08] um all sort of the issues and regulations surrounding that data and the availability of that data so that
[1:55:15] would have to be specific to to india and your your area of interest okay question 40 are you creating a new
[1:55:24] crop model each year or are you using the field data collected each year to increase the accuracy of the previous
[1:55:31] year's model do you also collect field data for crop yields yields eg from farmer interviews to ground
[1:55:38] truth your yield forecasts so new models are created each year farmers uh answer surveys about their yield estimates to statistics canada
[1:55:49] which is another canadian government department department and this information is incorporated with other information such as current
[1:55:57] growth season weather information historical weather information yield data data and other factors to estimate what the current field
[1:56:06] yield is forecasted to be so um for for the crop classification new models are created each year
[1:56:18] all right the next question number 41 how can we use sentinel-1 data for soil moisture moisture please go through the full methodology
[1:56:27] using c-band okay so um there are another a number of different modeling approaches and this is something that
[1:56:37] dr mcnaren's team has been working on for many years but these are obviously empirical semi-empirical physical modeling
[1:56:45] modeling snap does have a soil moisture toolkit that applies the iem physical model but this requires hh and vvv to run the
[1:56:52] original iem or vv using two different incidence angles to run the hybrid iem um so the iem could be a challenge to
[1:57:02] apply with sentinel one as typically imagery are not acquired in hhv which is used needed for the original
[1:57:10] iem and using the hybrid iem there's typically a time difference between the first and second sentinel one image so there's some
[1:57:21] promising methods to retrieve soil moisture using sentinel one backscatter it's just published so there's a link there to that that article and this has
[1:57:30] been tested over several sites and including some in in canada as well all right question 42 can we change the
[1:57:40] file format while performing code registration registration uh yes you can so in any point when you're trying to save out of snap you
[1:57:49] can can save the file format to a different uh format and there's a when you do the drop down uh when you're
[1:57:57] saving or print writing out there's options there for geotiff big tiff other formats that may be more compatible to different
[1:58:06] softwares that you're using okay question 43 great question and how how how do you use polarimetric decomposition for crop classification
[1:58:16] techniques techniques so um the afc aci uses obviously vv and bh backscatter um however there's a significant amount of research ongoing
[1:58:27] by afc and many other scientists to the use the um to assess the use of polametric parameters for crop
[1:58:34] classification um obviously as i mentioned at the beginning of the presentation presentation we use raidersack constellation mission
[1:58:41] data which has um availability of operational compact telemetry telemetry information so we are very interested in the use of polymetric parameters for
[1:58:53] clop classification so in general we see improved accuracy when integrating more polametric rich data layers so including decomposition layers
[1:59:04] and a polymetric decomposition channel such as volume scattering could simply be integrated into either the decision tree or random forest classifier much in
[1:59:13] the same way that a vv or vv vh backscatter would be a layer would be integrated so similarly you could think
[1:59:22] of this in generating you would need slc data data but you would generate your polymetric parameters and then similarly use the
[1:59:30] channels of interest like volume scattering from a decomposition um different uh aspects like degree of linear polarization or stokes vectors things
[1:59:41] like that you could add simply as uh channels uh in the classifiers all right the next question can we use a
[1:59:53] hybrid classification such as knn or kd classifiers for different minor crop classifications so there are a lot of different
[2:00:03] classification methodologies that are utilized for crop classification um so again this really relates to what is in the literature
[2:00:14] and what works well in your particular area of interest typically what we're finding is that these machine learning
[2:00:22] methodologies like decision tree random forest and then moving into the deep learning methodologies like artificial intelligence neural nets
[2:00:31] are methodologies that are more commonly used now um for these these classifiers and are performing well and are
[2:00:38] performing well operationally as i mentioned operationally we use a decision tree classifier but i believe in the next
[2:00:47] next next session on thursday we will describing how to use random forest classifier which we've shown in our research
[2:00:56] has has shown to improve on overall crop classification accuracies and our operational team is subsequently evolving and including that methodology
[2:01:06] in their in their in their methodology moving forward so as i mentioned we have been doing this classification
[2:01:14] method uh for the last 10 years but through time we continue to do research and development to improve it and and
[2:01:21] change as as we go through time all right question 45 is co-registering an s2 image the same as co-registering
[2:01:32] in s1 or s1 images so um i believe this is actually being covered on thursday so i will i think i
[2:01:40] can leave it to that but we will cover that on thursday when they're developing their data stacks of the optical from
[2:01:47] part two and the sar from part three until all of part four yes that is correct this will be covered
[2:01:55] on thursday yeah question 46 for operational mapping purposes is it important to consider either the ascending or descending pass of sentinel
[2:02:04] one as well as incidence angle so this has been answered before we'll reference the question where you can find the answer
[2:02:13] question 47 can your inset to ground truth crop survey data be used for training and validation for different
[2:02:20] years years so currently our our current operational approach does not allow for that right now now so every year we're treating it as a new
[2:02:30] unique classification and we're receiving both the insurance data and in-situ data on it on a yearly basis and
[2:02:37] the majority of farmers actually rotate their crops in each field annually um but there's nothing to be said that um
[2:02:45] this cannot be looked into on an aspect in your particular area that you could use data from previous years to
[2:02:53] classify uh new year's maybe with a minimal addition of new data but again this this will require further further
[2:03:01] research question 48 does the order of speckle filtering in a pre-processing chain matter matter so we did a lot of testing on this
[2:03:13] during an experiment um with what's called the j cam sorry to comparison experiment which looked at applying the
[2:03:20] aafc operational crop methodology on sites across the world and one of the steps or one of the the the the research
[2:03:29] we looked into is um does order of operations matter and what we found is that it matters in terms of a timing uh
[2:03:38] aspect and so that completing the speckle filtering first reduces the amount of time overall on a large scale um as opposed to doing
[2:03:48] terrain uh correction first so we put the paper there um you can refer back to the paper for sort
[2:03:55] of that ideas about how that how that that improves based on when speckle filtering is applied all right
[2:04:06] question 49 do you use principle component analysis for reducing redundancy in the in-situ data and thereby reducing the sample size
[2:04:16] so yes we use it uh for the sentinel 2 data to reduce the number of bands that
[2:04:20] go into the classifier and this is just to avoid currently computer memory issues for us question 50 how do you examine radar
[2:04:31] issues such as foreshortening and overlay overlay before using the data in the mountains um so it is very difficult to remove the
[2:04:41] effects of foreshortening for shortening and layover um obviously a good dm will assist with geometric correction but the
[2:04:48] sar response is still going to be distorted in the landscapes ascending or descending orbits may provide a different look over the
[2:04:55] terrain terrain and you can collect that data in those different orbits to see if that will help you
[2:05:01] otherwise otherwise as it was covered in part one that you may have to actually mask out those
[2:05:06] terrains typically in in canada in the agriculture extent this is not something that we have to be
[2:05:13] very concerned with all right question 51. i think you've answered this one before too in terms of
[2:05:22] ascending and descending and integrating the backscatter yeah um so i'm just going to skip this in the
[2:05:29] interest of time uh question 52 do you have any correction factor to deal with precipitation occurrence in sar data
[2:05:39] so no um if there is precipitation during star acquisitions the microwaves will be scattered by the rain droplets so the star image is
[2:05:48] obviously washed out in the sense there's going to be differences in the back scatter between the fields
[2:05:54] but and the differences in the back scatter between the fields is lost and scattering observed on the images due to
[2:06:00] the scattering by these droplets um so it is important if you can to eliminate the sar data that are required
[2:06:06] during rain events and we can put up a link to um a pretty neat uh uh twitter series that actually shows um an
[2:06:16] image that has that rain event phenomenon going across it and you can you can really see the uh the difference
[2:06:23] there okay question 53 i get an error when i run apply orbit file it says a problem occurred during
[2:06:33] the target production in initialization how do i resolve this so so this error is related in to a change in
[2:06:43] the deposit or default repository that's used by snap to automatically download the sentinel one orbit data and so
[2:06:50] that's change um so the orbits actually need to be downloaded manually from the step repository or for comparicus
[2:06:57] sentinels pod data hub so we provided those links below and then you place them in your respective folders so
[2:07:04] you'll see that all there and then sorted by type platform year a month um the orbit should be
[2:07:10] in an individually zipped archives and can be downloaded from the step repository um and so that kind of gives
[2:07:16] you uh the the response on how to do that okay question 54 if the same crop was
[2:07:24] sown in two different dates can the classification algorithm detect this or will the result be two different crops
[2:07:33] so spectrally spectrally the same crop will appear the same same they will just be at slightly different
[2:07:40] stages of their development and so by monitoring over a full growing season uh acquiring imagery through the whole
[2:07:47] growing season this difference is negated um but right now we're doing other research that exploits these sar
[2:07:54] scattering parameters to detect crop growth stages using for example machine learning algorithms so we're trying to see if we can actually
[2:08:04] detect those growing stages and specifically if they're seated at different dates can we see those differences all right question 55 what is the
[2:08:14] difference between co-registration and geocoding when combining radar and optical data do you stack the images and if so which one do you use as a
[2:08:24] reference for spatial resolution so again i think they're going to talk about this in part four but
[2:08:30] co-registration that's geometrically aligning a data set with another data set that's already geo-referenced and geocoding is actually assigning a geo
[2:08:38] reference to the data set so optical radar data are geocoded to the same projection resolution extent um and then
[2:08:45] for now this is with our operational um uh for our operational methodology we're just using landsat 8 resolution at 30
[2:08:54] meters for all of our data stats data sets all right question 56 who are the users of the crop monitoring and
[2:09:04] classification results and for what and how are they using it okay well there are many many and
[2:09:12] numerous end users of the data and this ranges all from federal provincial and local governments and this is for policy
[2:09:20] development development private industries are using it such as rail transportation and grain elevators our disease and past scientists
[2:09:29] are are using it looking for fields that don't rotate crop types frequently so they'll use the whole time series of their
[2:09:36] different crop maps so there are many others and this is just a quick example and we can see if
[2:09:42] our earth observation team can provide some of their use case scenarios in a link for you guys
[2:09:49] great great question 15 is it important to gather ground data at the same time the s1 s2
[2:09:56] l8 pass over your area so it's not necessarily important um the crops will remain in the field for
[2:10:05] numerous satellite passes when you're looking for crop identification mapping so in some of your countries where you
[2:10:11] might have multiple crops so double crops crops that are grown in what we call a single growing season it should be necessary to
[2:10:19] actually capture both crop types grown in those fields though so you just want to make sure you're capturing what's
[2:10:25] going on if it's sort of a single crop type growing in a single season you can go in and look at that and
[2:10:32] observe that but if you have these double crops you may have to go back and observe that again
[2:10:40] all right question 58 how do you deliver your results how often and in what format etc so we're going to show you at the end of
[2:10:51] part four on thursday what we do after the fact after the classification is completed completed but in general data is distributed about
[2:10:59] a few months after the end of our growing season and all provinces are distributed typically no later than
[2:11:06] february the following year and that could be related to um the the year and and what was going on in the particular
[2:11:13] year so the format right now is geotiff it's 30 meter resolution and it's available by province and we've given
[2:11:19] you the link to that again question 59 can the annual crop inventory be applied in tropical countries so for example in
[2:11:32] indonesia the department of agriculture used the standing crop method using remote sensing imagery for rice field factual condition in the ground
[2:11:43] so so as we're saying this is a road map this is something that you can use um and and
[2:11:48] using our experience on how we develop this for canada and as i said we've also been testing
[2:11:54] this road map in other regions particularly through the jcampsar into comparison experiment and through other ongoing endeavors
[2:12:02] and we ran this to test these methods over different cropping systems um there will probably be some adaptations that are required um
[2:12:11] as we said canada's growing uh canada's agriculture is pretty simple it grows through a simple period from may
[2:12:20] to september and uh you know so it's pretty simple but it may have to be adapted to apply it in your particular
[2:12:27] region region we do have again another link to the paper of the results that we had from
[2:12:33] applying these methods in those different places around the world during the jcamp sorry comparison experiment so you can check that out and and see sort
[2:12:41] of where we found things uh worked well and maybe didn't work well all right question 60 could we use google earth engine to do
[2:12:54] the co-registration process for sentinel 2 or is there a similar method to do this this so i'm going to defer that question to
[2:13:03] our our our friends with copernicus roost to answer on on uh on thursday um they would probably be able
[2:13:12] to let you know what you can do in google earth engine or not okay great question 61 one of the early slides
[2:13:22] mentioned something about land cover data that's updated every five years is an independent land cover data product being used to mask the areas to
[2:13:31] be classified or is establishing a cropland mask part of the classification process and the data referenced used in
[2:13:40] some other way so a random selection of the training sites from the existing land cover so non-agricultural maps is used to
[2:13:49] classify the entire agricultural extent using the current year imagery so then you have what is called um an uh egg and
[2:13:58] non-egg basically outcome and crop classification is then performed on what would be classified as agriculture in that initial
[2:14:07] classification so in a way it is like a cropland mask okay question 60 1 a random selection oh sorry 62 what is
[2:14:22] the minimum number of samples we should take for a particular plot for model development and how does one decide
[2:14:30] so in the literature there's a lot of information on numbers of samples that are needed for particular models
[2:14:39] these can range anywhere from 30 to 50 samples per crop type but obviously that's not always possible so what
[2:14:46] you're looking for is as many many samples as as as you can especially for for rare and unusual classes
[2:14:55] that are are present in the field or in the in the region okay question 63 correction of the
[2:15:05] terrain is quite useful using a digital elevation model what is the standard error doing this and how much can we
[2:15:12] rely on these data i'm going to get back to you on that question um i just want to be able to i
[2:15:19] haven't actually gotten to sex c3 yet so i wanted to be able to have this a moment to actually think about that and
[2:15:25] answer that so we will make sure that we answer that question and get back to you all right question 64.
[2:15:32] i work in a data scarce environment and was wondering how the crop signature for wheat could be applied to developing
[2:15:40] countries countries so we haven't done a lot of testing on generic crop signatures like wheat and how those could be applied over time
[2:15:49] and space so specifically over in your your area taking a signature for wheat from another area and applying it to your
[2:15:57] area um this would be really challenging because obviously signatures are different due to the different cults of
[2:16:04] ours the different seating dates the different meteorological conditions but we're looking at new like artificial intelligence methods
[2:16:13] neural networks to assess the transferability of signatures so that um but that all really depends on a really
[2:16:22] robust training set um and ensuring that a robust training set can be developed and and by robust we mean many many many
[2:16:29] many samples so there is a lot of research on this um on transferability of signatures so that would be something you'd want to
[2:16:38] start looking at in terms of what's in the literature all right question 65 what vegetation indices and bands are used for crop
[2:16:50] classification classification so spectacly um and this is operationally for the optical imagery we use the visible and infrared
[2:16:59] bands so with landsat 8 which is typically what our operational methodology was um uh uh based on uh we used well we actually
[2:17:09] based it on obviously landsat 5 but bands two three four five six and seven so that would be red green blue near
[2:17:16] infrared and the two shortwave infrareds um with sentinel 2 what we've tried to do is simply match those similar bands
[2:17:24] um which for sentinel 2 we've listed out those similar bands that's not to say like sentinel 2 has some really sort of
[2:17:30] great uh the red edge bands and things like that so it's always important to try incorporating the different information as much as
[2:17:38] possible possible so uh these are used and the sar data provides the information obviously in the microwave portion and as we
[2:17:46] mentioned we're using the vv mvh uh uh from uh c band currently so that's based on having uh
[2:17:55] access to radarsat 2 and now raider sat constellation mission data and now as well sentinel 1 data but
[2:18:02] that's not to say that in the future it would be important to incorporate other frequencies of sar data
[2:18:09] like l-band data for when the nissar satellites are launched and and so forth so it's always important to consider
[2:18:17] what's going on now but also what can potentially happen in the future and what you can learn gain from adding in
[2:18:24] other data in the future question 66 can we use google earth engine for pre-processing sentinel one data
[2:18:36] data okay so this is a good answer we don't use google earth engine um at all on our
[2:18:41] aspect um uh due to some different issues as i've mentioned we use radar set constellation mission we have
[2:18:47] proprietary uh processing but apparently sentinel one data is already pre-processed on google earth engine except for the pen speckle
[2:18:56] filtering so you can refer to those guides uh there all right question 67 how do you account
[2:19:03] for the changes in the scatter near range and far range when using ascending and descending together so oh yeah good yeah and how much
[2:19:13] difference in backscatter can be expected between ascending and descending descending okay so the annual crop inventory deals
[2:19:20] with this by using images with overlapping footprints so in the far range once our scene will be in the near
[2:19:26] range and the other scene so both in the dsc and asc orbits the stacking of the star images helps
[2:19:32] negate the issues over the entire area of interest but also you really need to try and collect training data across the
[2:19:39] entire swath in both the near and to far ranges so just kind of keeping that in mind um in
[2:19:48] an operational perspective all right question number 67 the annual crop inventory deals with oops i'm sorry no we just did that one
[2:20:01] yeah yeah 68. is co-registering and snap equivalent to mosaicing in google earth engine engine again i am not familiar with google
[2:20:11] alerts engine we're not using that in our current operations or for research and development so i'll leave that to either
[2:20:19] copernicus ruse to answer on thursday or even maybe erica you can let us know yeah i've never done a comparison by
[2:20:28] side by side so i'm i'm not able to answer this one question 69 do you measure spectral
[2:20:36] distance between crop type something like what jeffrey's matusita is doing and then using this for determining the time
[2:20:44] interval on the basis of which you create a mosaic uh no we we do not do a measurement of
[2:20:51] the spectral difference between crop tights right now as we said we if you're referring to the difference on
[2:20:58] either side of the swap images for sar imagery we have done some initial assessment of the signatures because we have
[2:21:07] in situ in situ data on either sides of imagery and we've compared the signatures of same crop types across swath
[2:21:17] so we've done a bit of analysis in that manner but no we haven't applied this spectral distance
[2:21:22] to application all right so that was the last question wow um amazing job uh laura in answering
[2:21:33] all of those questions and as we mentioned earlier this google doc will go online so you can reference
[2:21:41] the answers on a later date as well so with that then we've reached the end of this session i'd like to
[2:21:52] thank dr laura dingle robertson for her great presentation and handling all of these questions i'd also like to thank
[2:22:01] other members of aafc who've been online answering the questions on the google doc leander capco heather mcnarron and
[2:22:10] thierry fizzy i'd like to thank our arset team uh the team that makes this possible brock blevins jonathan o'brien and so one
[2:22:20] hudson odoi and arson instructors amita mehta and sean mccartney and and with that before we close uh laurel any
[2:22:32] last words before we close sure thank you erica um just to let you know in part four we
[2:22:38] will pick up where we left off um exploring the files with uh copernicus ruse um and we'll talk about the
[2:22:45] classification portion of the crop road map and we'll go through the final steps of the post process so going through
[2:22:53] publishing and thing and and and those and publishing it to uh the public um and that thanks very much this has been
[2:23:01] an awesome opportunity so we really appreciate it great thank you and thank you to all for the participants
[2:23:10] stay tuned at the same time on thursday for session number four and the second part of this
[2:23:17] crop inventory roadmap wishing you all a great day bye
