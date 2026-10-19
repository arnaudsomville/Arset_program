# SAR Polarimetry with Sentinel-1, RCM, & SAOCOM Imagery for Agriculture, Part 2/4

`https://www.youtube.com/watch?v=30x6XE6U4CU` · id 37 · 2:32:46 · module 21 — Mapping Crops and their Biophysical Characteristics with Polarimetric SAR and Optical Remote Sensing

[00:01] welcome back to the rset training mapping crops and their biophysical characteristics with polarimetric synthetic aperture radar and optical
[00:10] remote sensing my name is sean mccartney and i'm joined today by my colleagues laura dingle-robertson from agriculture and
[00:17] agri-food canada and armando moreno from the university of sterling last week we learned about sar polarimetry theory and how the first
[00:29] part of the polarimetry practical intensity derived parameters for agriculture monitoring in the second part of the webinar series
[00:39] we'll be continuing with the polarimetry practical practical laura dingle-robertson will show how one can generate pseudo-polarimetric parameters derived
[00:48] from sentinel-1 data following laura's practical armando mourinho will provide a practical showing how to analyze a time series of
[00:58] fully polarometric rcm and salcom data to identify crop characteristics with different polarimetric observables we hope you would join us for all four
[01:10] parts of the webinar series to gain as much value from the training as possible if you are not able to attend one part a
[01:18] recording will be made available within 48 hours of the training day on the rset website as a reminder there will be one homework
[01:29] assignment for all four parts of the training training answers must be submitted via google form which can be accessed from the
[01:38] training page on the rset website homework will be made available on may 3rd 3rd with a due date of may 17th
[01:47] a certificate of completion will be awarded to those who attend all live webinars and complete the homework
[01:53] assignment by the deadline you will receive a certificate approximately two months after the completion of the course from marines
[02:01] martin by the end of this training you will be able to explain the theory behind sar polarimetry especially as related to
[02:13] crop characteristics generate a polarimetric parameters using open source imagery and software and perform a time series analysis of
[02:22] crop growth identify how send for stat can support national statistical offices in the uptake of satellite earth observations
[02:32] for agricultural statistics and perform a time series analysis of crop types using sentinel 2 derived leaf area index
[02:43] i want to hand it over to laura dingle robertson from agriculture and agri-food canada to provide the first practical
[02:50] for today's training laura over to you hello my name is dr laura dingle robertson and i work in research and
[02:58] development at agriculture niagara food canada aafc using sarin optical satellites for mapping and monitoring agriculture in canada
[03:06] in this session i will provide instructions on how to derive pseudopolymetric parameters from sentinel-1 single-look complex data
[03:14] which includes includes the phase information which is important to generate these type of parameters there have been many studies that have
[03:22] used sentinel 1 intensity for all manner of crop classification modeling and mapping but there is a treasure trove of
[03:29] unmined information that is available in the the slc data through this practical you will learn how to derive these parameters from
[03:37] sentinel one data and will be given some idea of what you can use this valuable information for
[03:48] telemetry allows for the use of phase and creates richer information than just intensity alone sentinel one dual pool vvvh slc data can
[03:58] be stored in the 2x2 covariance matrix a c2 matrix which sarah has previously described and uses the full available
[04:07] signal bandwidth and phase in preserved and phase is preserved and each pixel consists of both a real and imaginary
[04:15] component component using by the two by two covariance matrix c2 matrix we are able to derive scattering parameters that are similar
[04:24] to fully polymetric or compact polymetric parameters we call these pseudo-polametric parameters as they are not as rich as
[04:32] those that can be derived from the fully polymetric or compact polymetric data however this is still a rich body of
[04:39] information that can be gained by by deriving these parameters from the dual polymetric slc data there are many different types of pseudo
[04:50] polymetric parameters that can be derived derived including the following which we will be looking at in more detail
[04:57] those include the stokes parameters which are a set of values that describe the partial polarization state of the
[05:04] electromagnetic wave the orientation angle which is the orientation of the linear polarization with the strongest backscatter the ellipticity angle so that's the
[05:15] ellipticity of the scattered wave the degree of linear polarization which is the degree of the hoodie or polarization components in
[05:25] the polarization polarized scattering the the simple linear polarization ratio which is the ratio of the vh and vv
[05:34] intensities intensities the span again the total intensity of vh plus vv which is expressed in power item values which are the eigenvalues of
[05:44] the coherency matrix entropy which is the degree of randomness of scattering the alpha which is the dominant
[05:53] scattering mechanism which is presented in degrees and the normalized shannon entropy which is the sum of the total backscatter
[06:00] power and the bearcat degree of polarization which is normalized between 0 and 1. while many parameters can be derived you
[06:10] should be sure that it makes sense from a target perspective to use certain parameters in your work
[06:16] simply putting everything in a classifier or in a regression model for things like biomass modeling or vegetation modeling or crop
[06:23] classification does not help the understanding of what the parameters are telling you about your target of interest
[06:29] interest it is important that you try and understand which parameters can provide the best information about your target
[06:36] while fully polymetric derived parameters and compact polymetric parameters are something that we have been using in in our research and
[06:43] studying for years the polymetric parameters that we are deriving from segment one data is new research for us
[06:50] we continue to try and understand what these parameters mean in relationship to the target particularly we have been looking at the
[07:01] stoke parameters the stokes parameters describe the scattering from a partially polarized electromagnetic or em field the soap's parameters contain all of the
[07:12] polymetric information to describe scattering from a target there are four strokes parameters that can be defined here
[07:22] where modulus e is the amplitude of the intensity and phi hv is the phase difference between the h and the v
[07:30] all four storks parameters are real numbers numbers the first stokes parameter s0 indicates the total intensity of the radar
[07:39] backscatter both the polarized and unpolarized portions which is the sum of the powers of the two orthogonally
[07:45] polarized received waves other the other three parameters which are s1 s2 and s3 describe the properties of the polarized potion
[07:56] proportion of the electromatic magnetic field degree of linear polarization is another parameter of interest that we've been
[08:07] looking at that is derived from the stokes parameters the weight incident upon a target arrives completely polarized
[08:15] if the target is composed of elements with varying orientations for example leaves stalks flowers the waves scattered by these individual elements
[08:24] will vary in both phase and polarization the degree of linear polarization measures the percentage of the polarized
[08:31] energy which is linear linearly polarized polarized degree of linear polarization is low where scattering is dominated by
[08:40] circular polarized waves and approaches one where scattered waves are linearly polarized regardless of the orientation angle angle this is based on the stokes parameters
[08:52] and is measured as described in this equation equation you can see here that these contribution parameters are the three
[09:01] parameters of s1 s2 and s3 which describe the properties of the polarized portion of the electromagnetic field
[09:14] additionally we've been looking at entropy alpha cloud at all 2012 cloud 2007 developed a dual polarized version of the fully
[09:24] polametric h a alpha which is entropy and isotropy alpha decomposition method which only includes entropy and alpha
[09:35] first it extends the idea of alpha as an indicator of the dominant scattering type both the multiple volume scatterer
[09:42] single bounce or surface scatterer and double bound scatterer so in general single scatterers will have a lower alpha and alpha will
[09:50] increase as biomass increase which will indicate a change from a dominant surface scattering to multiple or double
[09:56] bounce scattering you also have to keep in mind that how a wave scatters also depends on the
[10:02] incidence angle both alpha and entropy will change with changing incidence angle secondly secondly it extends the idea of entropy from a
[10:12] fully polymetric decomposition as a measure of the complexity or uniformity of a target on a bare smooth field the
[10:19] polarization of the scattered wave will be predictable from location location location to location in that field alpha will indicate a dominance of
[10:29] single bout scattering and entropy will remain low as vegetation cover increases the polarization of the scattered wave
[10:36] becomes less predictable from point to point within the field and entropy will increase increase what you see in the alpha entropy graph
[10:45] for nearly the barrier for nearly bare sparse vegetative fields is that most of the scattering with low entropy so very
[10:53] predictable scattering and dominated by a surface or single bounds relatively low alpha as crops grow the scattering changes and
[11:03] becomes unpredictable what is missing from the dual polymetric entropy alpha is the anisotropy which since this is only dual polymetric
[11:14] data we can't resolve if there are secondary or tertiary scattering which anisotropy or a measures contributing to the total
[11:23] scattering send no one data are available in interferometric wide wave strip map and extra wide swath modes and
[11:34] all of these data are available in single looks complex data data set to one data are available across the
[11:41] world in the temporally and spatially consistent matter which which make it very useful for agricultural monitoring as you may be aware sentinel 1b
[11:51] malfunctioned in december 2021 has not been acquiring imagery since that date isa is working diligently to try and fix
[11:59] this issue sentinel one a continues to collect imagery imagery you can check out the link noted above
[12:06] on the slide and to see where the acquisition plans are to determine the coverage of your area of imagery of interest
[12:16] fails a linear space is a prime contractor for sentinel 1c and its twin sentinel 1d airbus defense and space is responsible
[12:26] for both radars the most expected launch date of sentinel 1c is 2023 as of march 2022 these various acquisition modes come
[12:38] both both come in both product types of single look complex and ground range detected and particularly for intrametric
[12:46] interferometric wide swath mode slc data the resolution is 2.7 meters to 3.5 meters in the range direction and 22
[12:56] meters in the azimuth direction with pixel space spacing of 2.3 to 14.1 meters in the range and azimuth
[13:04] respectively slc sentinel one data can be accessed on the copernicus open access hub you will require a username and password
[13:15] and you can draw a polygon over your area of interest or an important area of interest and indicate the specific type
[13:23] of interest that imagery that you're interested in and the overall dates of interest for example your entire growing season
[13:37] you can draw that polygon over your area of interest or you can import your area of interest
[13:43] once you are satisfied with your search parameters and area of interest you can search for available slc data
[13:51] and down those that meet your particular criteria so for example i was interested in generating polymetric parameters for an
[14:00] area in canada to map crops through the growing season i will look for all available slc images throughout the
[14:08] entire growing season from may to september similarly you can access set the one slc data on the alaska satellite facility
[14:19] data portal in some scenarios downloading data are easier at one site over another depending upon where you are in the
[14:26] world world additionally both sites have api functionality functionality and asf has bulk downloading scripting capabilities capabilities esf site also has some processing
[14:36] capabilities that relate to insar and terrain correction which are not necessary for this practical but could be of use for other purposes
[14:46] for this practical i downloaded a july 9th 2020 image that is over an area of interest known as carmen manitoba in
[14:53] canada canada canola is the top producing crop in manitoba by area acres seeded wheat and soya bean production are the second and
[15:01] third behind canola this region has a diverse annual cropping mix that includes flaxseed sunflower corn barley rye oats canary seed potatoes and field
[15:10] peas one crop is grown per year and seeding occurs once temperatures allow and soils are dry typically canola is seeded within the
[15:21] first 10 days of may in the study area harvest harvest's harvest times are more variable due to weather conditions and
[15:29] timing is crop specific you'll see from this naming convention of the sentinel 1 image it fully describes the overall image details
[15:39] the first three letters describe the mission so in the case of my downloaded image over carbon manitoba it was from
[15:45] the sentinel 1b satellite the second two limit letters describe the beam mode in the download loaded image it is iw or interferometric wide
[15:56] swath swath the next three letters are the product type which in our cla case are slc single or complex data
[16:06] a fourth letter would show up if there was another product type as this is an indicator of the resolution class
[16:14] the next letter is the processing level which in our case is level one processing the second letter in that
[16:20] group is the product class for which is for us is sar standard and then the final two letters in that
[16:26] group are the polarization which in our case are dv or dual vv vh then the start and
[16:35] date and time of acquisition are listed and the stop date time and acquisition finally we have our absolute orbit
[16:42] number the mission data take id and the product unique identifier code to derive the polametric parameters from
[16:52] sentinel1 slc data we have developed a workflow that includes processing that is using esa's snap pulsar pro open source softwares and a
[17:02] simple python script the process is a bit complex but as is as follows in snap we apply an orbit file and then
[17:14] we complete an s1 top split we do a radiometric calibration we do an s1 tops the burst and an s1
[17:22] tops merge we apply our polarimetric speckle filter we apply our terrain correction and then we export the c2 matrix to pulse our pro
[17:31] format and geotiff big tip format we import the c2 matrix that was exported from snap into pulsar pro
[17:42] in prosar pulsar pro we apply the processes of extracting our parameters the matrix elements c11 c22 and span
[17:53] are stokes parameters stokes components s0 1 2 and 3 the orientation and ellipticity angles the eigenvalues the degree of linear
[18:02] polarization and the linear polarization ratio ratio the h alpha decomposition parameters including alpha entropy and finally shannon entropy
[18:13] finally out of pulsar pro we use our python script to convert the pulsar output to geotiff first we're generating a c2 matrix with
[18:25] snap snap you must use single look complex slc sentinel one data the first step to create the
[18:32] pseudo-polymetric parameters in generating the c2 is generating the c2 2x2 covariance matrix using esa snap issues with generating s1 polymetric
[18:44] parameters include the processing time and memory requirements each interferometric wide swath image consists of three sub swaths iw1 2 and
[18:55] three in the range direction and each sub swath has nine bursts in the not in the azimuth direction
[19:04] satellite positions are recorded by a global navigation satellite system gnns gnss gnss to assure a fast delivery of sentinel 1
[19:12] products orbit information generated by an onboard navigation solution is stored within sentinel 1 level 1 products the orbit positions are later refined by
[19:23] the copernicus precise orbit determination pod service precise orbit files have less than five centimeter accuracy and are delivered
[19:31] within 20 days after data acquisition the accuracy of the restituted orbit files is less than 10 centimeters and
[19:39] these files are available three hours after data acquisition to apply an orbit file to a sentinel one
[19:46] slc image in snap you simply go to the radar image a radar menu and select the apply orbit file drop
[19:55] down down the apply orbit file window will open and under the i o parameters tab under the source you must make sure that
[20:04] you're selecting the sentinel1 slc image and you ensure that you indicate a location for the output target
[20:13] product to go to under the processing parameters tab you simply want to ensure that under orbit statement vectors you are selecting
[20:23] sentinel one precise the auto download and your polynomial degree is three you click what run and close the window
[20:32] when complete settlement images are very large and often you do not want to use the entire image but rather would just use a
[20:42] portion of that that would cover your area of interest you can just you can get just a portion
[20:49] of that area by splitting the image to specific bursts within one of the three sub swaths the top star split operator splits each
[20:57] sub swath into selected bursts it limits the amount of data that you will have to process and reduce the
[21:03] processing time and memory requirements we split the subswaths and staff to speed up the processing and reduce the
[21:12] amount of data we are trying to process to split the sub splash in snap we again go to our radar menu and select set the
[21:21] one tops and we will go to the drop down of sentinel one top split once again the sentinel one top split
[21:31] window will open under the i o parameters tab you want to make sure that you select the orbit
[21:37] corrected s sentinel 1 slc image and make sure that you indicate where you want your target out image to be
[21:44] outputted to under the processing parameters tab you want to select the sub swath it will be either s1
[21:53] iw1 iw2 or iw3 under polarizations you would like to highlight that make sure that both the vv and vh polarizations are selected
[22:05] and under burst you can reduce the bursts to those that fall over your area interest by choosing the arrows on
[22:13] either side and dragging them to reduce the number of bursts altogether once you have the number of bursts that
[22:20] you are interested in that fall over your area of interest you click run and close the window to be complete
[22:29] so our slc products are complex and must be converted to real and intensity and imaginary phase channels
[22:36] the conversion is mission specific and for polar metric processing the data must be complex snap will automatically determine what
[22:45] kind of input product you have and what conversion needs to be applied based on the product's beta data
[22:53] to apply the radiometric conversion to your your split split sentinel 1 interferometric wide image you need to go again to the radar menu
[23:04] and select radiometric and the calibrate drop down the calibration window will open and you will ensure that under the i o
[23:14] parameters tab you are making sure your source is the s1 top split and orbit corrected image and that your target
[23:22] product is set to be output to the appropriate folder you select save as a complex output and
[23:33] and choose run and close the window when complete the images for all selected bursts from the previous
[23:45] results in the selected sub swaths can be resampled to a common pixel spacing grid in the range and azimuth
[23:54] while preserving the phase information and all bursts are merged to deburst your split image you need to once again
[24:06] go to the radar menu go to the sentinel one tops menu and selects s1 tops d burst
[24:14] under the i o parameters tab once the s1 tops d burst window opens you make sure you select source
[24:23] image image is the orbit top split and calibrated sentinel one slc image and that you have indicated where you want your target
[24:32] output output target output product to be put under the processing parameters tab you simply select both both images the vh and vv
[24:44] and you select run and close the window when complete this merges your now calibrated orbit corrected bursts back into one
[24:55] image image if you've processed multiple sub swaths so one two or three of them you would then use the s1 tops merge
[25:06] to merge the debursted images you have just corrected into one main product using the s1 tops merge
[25:15] operator operator if if this will merge the sub swaths back to the main product to do this you're once again using the
[25:28] radar menu and the tops drop downs but this time selecting tops merge once again make sure that the io
[25:39] parameters source image is the orbit top split calibrated and tops d bursted set the one slc image and that you've
[25:48] indicated where you want your target product to go under the processing parameters window you will simply select the two
[25:56] polarizations of vvvh and click run and close the window in our scenario we only selected bursts from one sub swath so we do not need to
[26:08] do this particular step for polametric parameters the filter chosen must ensure that there is a preservation of the phase and polar
[26:19] metric information while suppressing the noise you cannot apply a simple speckle filter on if you're trying to maintain
[26:29] the phase in a polymetric image there are four parametric speckle filters that are available in snap again the choice of the filter type and
[26:38] size should be related to your area of interest and what the final data will be used for
[26:46] the output of the polymetric speckle filter is the finalized c2 matrix values to apply this polymetric speckle filter
[26:56] you go to the radar menu choose the polymetric drop down and the polymetric speckle filter under the i o tabs parameters tab you
[27:07] want to make sure your source image is the orbit cur applied orbit top split calibrated and tops d burst and merged
[27:16] if you were using more one sub swath sentinel one slc image and indicate where you want your final
[27:23] polymetrically speckled filtered image to go to under the processing parameters tab you will choose the type of speckle filter
[27:32] you want to use and then of course your filter size in this scenario we are using a box
[27:39] color filter and a 7 by 7 window size click run on the window and close the window when you're completed
[27:51] so the c2 matrix is now generated but before we transfer this to pulsar pro we would like to terrain correct this
[27:58] so terrain correction with the use of a digital elevation model can corrects the topographical distortions like foreshortening layover
[28:08] and shadowing as we've mentioned in the previous training the range doppler approach once again is one way to perform geometric correction
[28:17] the method needs information about the topography which is provided by the digital elevation model as well as orbit
[28:24] satellite information to correct the topographic distortions and derive a precise geolocation for each pixel of the image
[28:34] to do the geometric terrain correction you go to the radar menu and the geometric drop down selecting terrain
[28:42] correction and the range droplet train correction correction ensuring under the i o parameters tab that your source
[28:51] is the c2 matrix products seeing now you have the bands of c11 c12 real c one two
[28:57] imaginary and c two two and you will also want to ensure that the options chosen for these
[29:07] digital elevation model and map projection projection are available related to your area of interest interest for the image over carbon manitoba we
[29:16] use the srtm one second hgt auto download dem and the map projection is utm zone 14. these parameters though should relate to
[29:28] your area of interest when you're complete you select run and close once the processing is done we now need to export the c2 matrix from
[29:40] snap so it can be used in pulsar pro parts.pro format has all bands in of data in dot bin and dot hdr header
[29:50] pairs pairs it also has a dot config text a config.txt file and a metadata.xml file that are all completed
[29:59] under the output folder plus we will also need to export a version of the train connected image to
[30:08] be used as a master tiff during the python scripted generation of the terrain corrected tips from the pulsar
[30:15] pro output to export files in both the pulsar pro and the geotiff big tiff formats you simply select the file export drop the
[30:26] file menu and the export drop down sar formats for the pulsar pro format and the geo tiff big tiff for the
[30:34] geotiff big tiff format we would now use esa's pulsar pro version 6.0.3 to generate the polametric pseudo-polymetric sentinel one
[30:49] parameters parameters so pulsar pro is a very long-term research software that was developed for foley polymetric data analysis
[30:59] it is completely free and open for download from the associated link this is a very powerful tool for polar
[31:06] metric analysis but it is a little tricky to install so you can follow along with the readme
[31:13] files that are provided at the download to to install the various associated programs and the generalized main program pulsar
[31:24] pro pro and you can look on the esa site for details on how to fully install the
[31:30] pulsar pro software the first step once the pulsar pro software has been installed is to calculate sar polymetric
[31:40] parameters using pulsar pro so you will want to import your data first step would be to create a c2
[31:49] folder folder and copy all the pulsar profiles that you had exported to snap to this folder the c2 folder name will actually enable
[31:58] pulsar pro to recognize the data set as a c2 matrix you also must modify the config.txt file
[32:07] that was generated when snap converted the files to pulsar pro format in the config.txt file you want to
[32:17] change the polar type from dual to pp2 this term allows pulsar pro to identify that this data is represented as a two
[32:29] by two matrix you will now set an environment in pulsar pro you will start your pulsar pro edition
[32:39] on your desktop click on the pulsar pro biomass on the initial toolbar then select the enter on the pop-up
[32:51] the main pulsar pro toolbar will open set your environment by choosing environment environment single data set and
[33:05] and go to the folder the directory that is holding your c2 folder once you've pointed to that directory
[33:16] and it's recognized the c2 folder you will collect save and exit now you'll generate the c2 matrix
[33:27] elements elements in the main pulsar pro menu bar you will select the process tab and drop down of matrix elements
[33:40] the data processing covariance element c2 window will pop up in this pop-up you will select c11 modulus c22 modulus and the span linear
[33:53] options you will run these and the selected parameters will be generated and stored in your c2 folder
[34:08] modulus is the linear representation of the considered c2 element amplitude and of course span is the quantity
[34:17] giving the total intensity received and in terms of our scattering matrix it's the total power equal to the sum of all
[34:24] the matrix elements you will next do your stokes parameter generation generation under process again you will select
[34:36] polymetric functionalities slash one and under the next drop down select stokes parameters parameters under the stokes parameters pop-up there
[34:47] are many parameters to choose from depending upon your application of interest interest we are as we mentioned we are newly
[34:55] interested in looking at these pseudopolymetric parameters so we have just begun to start to understand what all of these different parameters mean
[35:04] in relationship to the target on the ground ground in our scenario we select the stokes components which in this case are called
[35:14] g0 g1 g2 g3 but are the s0s s1 s2 and s3 the orientation and the ellipticity angle
[35:25] angle the eigenvalues the degree of linear polarization and the the linear polarization ratio ratio you select those parameters of interest
[35:37] and then you set your window size x by x of the sliding window that's used to compute the local estimate of the
[35:45] average matrix the selected parameters once you've selected that you click run and the selected parameters will be generated
[35:54] and again stored in your c2 folder we will next generate the entropy alpha decomposition parameters once again you select process but you
[36:09] select the h a which represents an isotropy and alpha decomposition and then the drop down of the
[36:20] decomposition parameters once the data process is h a alpha decomposition window opens you simply select alpha and entropy
[36:32] and this edit entropy parameters that we are interested in generating generating again you will set your window size in
[36:41] our scenario 5x5 and the selected parameters click run and the selected parameters will be generated and stored in the c2 folder
[36:54] so all of your parameters have now been generated and are stored in your c2 folder folder at this point you want to associate back
[37:03] the geometric information that was encoded on these parameters and we use this provided script convert underscore pulsar pro underscore output underscore
[37:15] to tiff dot pi to convert those pulsar pro outputs to appropriate tiff tiff that can be used in other software for
[37:28] other purposes the python requirement for this script is python 3.6 or greater and you must ensure that you have gdal installed
[37:45] the files required are the pulsar pro output c2 folder the master tip the geotiff big tiff that
[37:54] you generated from the step of exporting to to the the trade corrected file to geotiff big tiff
[38:02] from the final stop step and that contains all the geo-referencing information information and finally the list underscore
[38:11] parms.txt file which contains a list of the parameters in the c2 folder that you want to convert to tiff
[38:21] so the parameters to change are all located at the very bottom of the provided script this includes your empath which is where
[38:30] is your location of your c2 folder your out path where do you want your geo-referenced geo-referenced parameters to end up
[38:40] and your list underscore parms.txt should be located here and then finally your master file and this is the
[38:49] file the geotiffs slash big tiff that you generated in your last tip step out of snap and is the location of your master file
[38:59] for georeferencing so here's some examples of the outputs so the first hooks for vector parameter so is an indication of the total
[39:12] intensity of the radar backscatter both the polarized and unpolarized information information and this is the sum of the powers of the
[39:19] two orthogonally polarized received waves waves the other three parameters s1 s2 and s3 describe the properties of the polarized
[39:27] portion of the electromagnetic field the figure on the right is an rgb component of the s o s1 and s2 parameter
[39:36] and the figure on the left is our associated annual crop inventory for 2020 over the carbon manitoba area this is a thematic
[39:45] map map of crop classes that aafc produces on an annual basis so you can see here there are varying
[39:54] crop types and variations in in the fields of the smoke parameters on the right image these do correspond to the varying crop
[40:04] types that are found on the left images once again we've circled and examples of the pivot irrigated fields of potatoes
[40:13] which show up as circular bright yellow on the right figure and correspond to the thematic map as the pink cir colored
[40:20] circles circles so recent works we've done using stoke factors derived from compact preliminary data have shown that ellipticity and
[40:28] orientation characteristics of the polarized scattered waves vary among crop types and change as crop structure structure changes and phonology
[40:38] progresses and we are able to use stokes parameters across seasons to help with crop classifications here are some examples of the degree of
[40:52] linearized polarization images images so high values of degree of linear polarization represent that the waves are being scattered in a linearly
[41:02] polarized manner whereas low degree of linear polarization represent that the waves are circularly circularly or elliptically polarized
[41:12] again we have the figure on the right is the gree the degree of linear polarization image that was generated
[41:19] with bluish areas representing low degree of polarization values and and red and orange areas representing higher degree of linear polarization values
[41:30] we see low dolp for july are related to canola fields which we can see on our annual crop inventory
[41:37] thematic map and higher degree of linear polarization relating to soybeans we've seen in previous research that as
[41:46] crops develop more structure and biomass in their canopies more of the scattering is returned with less linear
[41:52] polarization polarization canola in july is generally in a later flowering stage which is a more which has a more complex canopy structure
[42:02] soybeans in early july are typically at an early flowering stage on a bbch scale of about 60 with left less than 10 to 30
[42:11] percent of flowers opened the canola canopy is structurally more complex at this stage and lastly more the scattering will typically be
[42:20] circular or elliptical and will result in a typically lower degree of linear polarization polarization you can relate the high and low values
[42:29] of dolp not only to crops but actually to specific stages of crop growth and biomass and leaf area index
[42:40] these types of images can be added to classifiers as additional information regarding crops or it can be used in
[42:46] regression modeling or other crop phenology modeling in this example we show the generated alpha figure on the right and the
[42:56] generated entropy figure on the left in gradients from blue representing low values and red representing higher values
[43:06] values we can see there are more areas of higher entropy and alpha that can relate to where there is
[43:15] multiple scattering as expected in areas where there are growing crop fields similarly we have areas with lower alpha
[43:24] blue areas and higher entropy red areas that are indicative of more surface scattering what we have found in the past is that
[43:38] at the range of incidence angles at which this sentinel-1 image was acquired when wheat has lower biomass we expect
[43:46] entropy at around a .63 values and higher biomass sweet to be at approximately 0.7 values for canola lower biomass has higher
[43:58] entropy values at about 0.88 with high biomass canola having lower entropy values of 0.78 as i've mentioned in any case there are
[44:10] many many types of things you can use these parameters for such as modeling biomass and lai feeding these models
[44:18] into models for crop phenology feeding these images into classifiers for crop classification extracting values and assessing them in
[44:27] relation to other existing earth observation indices and models the sky is the limit the big benefit is that there is a seven
[44:36] year record of 701 slc data with consistent coverage around the world there is a lot of information from these
[44:43] slc images that can now be mined to help with the crop monitoring modeling and mapping in a temporary and spatially
[44:51] consistent manner welcome everybody i'm amanda marino and i'm really honored to today to be here presenting this part two of this
[45:03] training on sar polarimetry with the riverside constellation mission and south in southcom imagery for agriculture agriculture before we start just a few
[45:14] words about myself why am i so i'm a senior lecturer at the university of stirling in scotland and
[45:22] my teaching is about earth observation and and sar in particular and my research is mostly about polarimetrix ar and use of
[45:31] polarimetrics are so so back to this practical the the plan is that by the end of this
[45:41] practical practical you will learn how to run python code for processing pulsar data you will learn how to open a binary file
[45:50] in python how to visualize images how to perform filtering how to manipulate the elements of the covariance or coherency
[45:59] matrix how to derive the elements of cloth protein decomposition how to produce a time series of polarimetric
[46:06] observables observables looks like a lot of stuff isn't it but follow me during this next hour and you
[46:12] will see we will get at the bottom of this so today we will be using python and i
[46:19] don't think i have to introduce python to you i think everybody knows what it is is a
[46:23] programming language and you can install it oh my suggestion is that you install it using the anaconda
[46:32] installer installer in between the material that you will get from this course course you also have some explanation on how to
[46:40] do that so using anaconda is possibly the easiest way the only thing you need to be careful that you install a three
[46:48] point something 3.9 maybe version so don't go for the 2.7 version of python because it will not work so go for the
[46:58] 3.9 3.9 once you have installed you will see that you will get an icon here for accessing your jupyter notebook which is
[47:08] what we will be using today we will talk more about this so jupyter notebooks open our website
[47:15] web browser sorry and we will see this more uh later but also there is another editor of the
[47:23] offered by the package of anaconda which is called spider so now spider is possibly what i would suggest you to use
[47:31] if you want to make this a bit more automatic automatic processing stack it's a bit more automatic like you can have a scheduler
[47:39] calling your function this kind of things it's easier to do in spider so that's why i mention it but
[47:46] for educational purposes jupiter is much easier to to use for learning so that's why i'm using jupyter notebooks
[47:55] now now the possibly the one of the core of these things the data that will be used
[48:00] the highlights of this practical the data that we'll be using we have two fantastic data sets we are really uh
[48:08] grateful to the space agencies that allow us to use them the first one is a rather sad constellation mission we have
[48:16] five images acquired in near the town of carmen in manitoba canada um um i will tell you more about these images
[48:28] later on just just a quick look of how how they look like and so this this was
[48:35] these are rather two images so which is an official market canada space agency while the second data set we use is a
[48:44] sarcome data set from konai which is the argentine space agency and this is l-band well rather constellation mission
[48:52] is c-band so different frequency which is very interesting to investigate and the location is also different this one
[49:01] is in argentina near the city of cordoba but again we will you will hear more about these things
[49:09] later on when we start working with these data sets so so at this point i i we are ready to start with the actual
[49:21] practical practical so the first things you have to do is to get to your jupiter notebook so you go
[49:28] to your icon of the jupiter notebook wherever that is and you'll see this will open in a web browser
[49:46] here we are you see the screen is a list of folders and files you have inside and you may want
[49:57] to create a new folder here by new and then you go to folder i already have one because our set i put
[50:07] my files there then you want to upload here the files that you will get from the the from this training course so you you get
[50:17] them from the the website the training course and then you can copy them inside your folder for the jupyter notebook now
[50:27] you see there are different full files here diff uh different scripts and one i want to start with today is
[50:36] this one one acquisition rather than constellation mission you'll see there is one grid and without the word solution in
[50:45] them them and and my suggestion is that you tried one weird solution first and then you go
[50:51] looking at the solution later so that's the one that i will start first also start with this one
[50:58] acquisition don't start with the time series the time series script is much more complex you don't want to start
[51:04] with that this one is more approachable you start using it you learn how to do it and then
[51:11] you move to the time series so click on it and you start seeing the scripts here and
[51:19] now you see there are different sections of this script each one of this section is called a cell
[51:26] the one with the blue banner on the side are markdown and there are texts they're not really
[51:34] things for the machine so the the python doesn't do anything with it it just displays for us
[51:40] if you go inside you also see there is a um um like like latex type code where you can write down
[51:47] things and they look very nicely with a very nice layout so in this data set here we'll be using
[51:56] another sub constellation mission we start with that then we move to the saocom data what i did here is to pre-process this
[52:05] data using snap so i did several operations concluding calibration subset create the coherency matrix then a multi-loop to one so the
[52:17] pixel is more squared then i did the core registration in a stack which we'll be using later when you use
[52:24] the the time series and this is important you have to register the images images otherwise they will not overlap
[52:33] and then i do the geocoding at the end so so to run a cell you can go with
[52:42] shift enter or control enter as well or you can click the button here run you see the markdown don't do
[52:50] anything at all because it is not code for the machine but here we start dealing with actual code and you see
[52:59] there is this weird coloring because jupiter is helping us understanding the different parts inside the script so when you have banash to start a line
[53:11] this means is a comment comment means instruction for humans not for for machines the machine python doesn't do
[53:20] anything with that just text for you to read and to know what is going on and it's always
[53:26] good to annotate your script properly so that you know what is going on in different parts of the scripts
[53:32] so the first cell here this loading theme is imported in libraries we import numpy matplotlib math you can see what
[53:44] they do later but things that we use libraries are collection of functions that we will be using when we run our code when we have
[53:53] to do operations um um there is also one library here that i've commented out this is called spectral
[54:03] and it's very useful for reading headers of images and as you will see later the thing is that this library you have
[54:10] to install yourself it doesn't come with an account the installer and sometimes installing libraries is complicated there is some instruction of
[54:20] how to do it about this inside this word document that they put there but if you don't succeed to install it then leave
[54:27] this to line this line here uncommented with a comment if you manage to install it very good
[54:35] you can uncomment it and go with it using the library if you manage to manage to install it but if you don't
[54:43] it's okay don't worry just leave it out to uncomment something you go control backslash at least in with windows
[54:54] so there are other libraries also you can add here but do i leave this to you and also i will
[55:00] tell you more later about this so let's run this this cell and okay okay then this part of the scripts we
[55:10] accumulate all our functions the function we define a function is a very useful things when you program because you can in a single
[55:20] line of code you can encapsulate a lot of lines of code so it makes things very easy also if you put these things inside
[55:29] a library and they will tell you more later about this and you can have this repository without your function and
[55:36] when you make a change in a function inside the library all the other scripts that call that library will be updated
[55:44] because they will look at the new library as a new function so it's very cool very useful you should do it
[55:51] so here what we do again we want to know again what we do here we want to open
[55:58] an image with an mb format now snap saves images in an nd format and and i have
[56:07] some some image here so to see how they look like they come with a header the header is basically text file and
[56:15] yes a lot of cool information about the image for instance how big it is or what is the
[56:22] type the data type now now if you manage to install spectral then you can uncomment this line in the library spectra called the
[56:36] collision envy will go inside the header and read this information for you but if you'd only managed to install spectral then i had
[56:46] coded this information inside the script so that you can still run the code but you need to go there
[56:53] personally manually read this number and put them inside the code and you will see this later when we call
[57:00] the function so try to install otherwise you just need to do manually so what does this function do is to open
[57:11] an image which is in a certain with a certain name a certain path with a certain file name
[57:19] and then reshape it in a fashion that you can see as an image this is another a bit of a quirky thing
[57:27] and and um the these images or windows that i'm using use the fourth run format for representing images where you have the
[57:38] the first coordinates is vertical and the second is horizontal um if your operative system would restore the images use the
[57:49] the c convention which opposite this coordinate is on its own that second is vertical then you need to use
[57:57] this other line of code but anyway you will see when you start trying these things if you do wrong
[58:03] selection of parameters the image that just won't display you will see clearly there is something wrong and then you
[58:10] need to change the parameter okay so this one select the path where the images are where the images are stored so for me
[58:23] the path is called this way and for you will be obviously differently it will be a different path also i like always to
[58:31] create a folder where you can dump things that you save so you can produce so it is not in the same
[58:37] file same folder creating confusion you have a different folder for your output so this has to be modified you want the
[58:47] code will run if you keep it as it is because this is good for me but not for
[58:52] you this is the part that i was telling you before that code bit bit in case you cannot install
[59:01] spectral so what i need here is to look for the number of column row inside the header for the
[59:10] rcm images and also the data type i know that the number four represented there correspond to float for
[59:19] and i know that my machine is using uh those images are big endian so this this symbol here um
[59:29] if you had hard code this you need to have a look at the tables how to convert
[59:34] the mv format into a this kind of python format and also if you have troubles just ask
[59:44] we are here to help um so by keeping that code things i can run the code without the
[59:52] function spectral but if you solve spectra that's it you've done it is easier that way now let's start the most more interesting
[1:00:03] things so preparation is finished we are ready to start loading these images that we previously saved with snap
[1:00:13] as i said what i do in snap is a pre-processing i created a covariance matrix that i
[1:00:19] geocoded so the data now in a covariance matrix format if you look here there is that t11 t12
[1:00:29] imaginary t1 to real t1 3 imaginary t1 to real to 2 to 3 and 33 so all the elements of the covariance
[1:00:43] matrix matrix now now how many independent parameters do you expect to have there so we have three diagonal elements which
[1:00:54] are our intensities in this case are the intensities for the pauli component the components because i use a paulie basis
[1:01:02] for representing them so we have this three intensity on the diagonal and off of diagonal we have the cross
[1:01:08] correlations between the components of the valid basis and cross correlations are complex numbers so for each cross
[1:01:17] correlation we have two numbers you remember when the the theory about complex numbers that you saw in the previous
[1:01:28] presentations presentations so so you have three real and three complex in total mix for nine nine values so you actually have
[1:01:40] nine images that you need to uh to work with uh uh but at the end is six
[1:01:49] six after you put them together you will see you end up with six elements but two three of which are complex
[1:01:58] so we can go now to this part here when we read these images and i think you will see something weird
[1:02:07] going on here this word quits coming up so the word kwids is obviously not a machine machine instruction it's my quirk way to tell
[1:02:18] you that you can add something here so this is your exercise you can add something here to fill up the code so
[1:02:28] my suggestion is that you try to do this exercise by completing the script adding stuff when you see the word queens and this can be
[1:02:41] a symbol word a sim simple word this can be a line of code or can be few lines of
[1:02:47] code but when you see the word quits it means that is you you have to go there
[1:02:51] and try to complete the code if you try to run this you will see you will crash it will give
[1:02:58] you an error and the error says name quits is not defined i'm not surprised i just made it up just put this word there
[1:03:06] so the way you have to do it basically is to try to complete it and you see for
[1:03:14] this example here is not that complicated you you just have to say that the file name here is t22 you said
[1:03:22] nt11 and then these things stay the same see so you can just copy and paste really this bit here
[1:03:32] but i'm not gonna complete all the quizzes with you at this point because otherwise we need two three hours for
[1:03:40] doing that it takes too long so for the sake of brevity i'll leave this to you and my suggestion is that you try to do
[1:03:49] unless you're looking at this live if you're looking at the recording so later on on you got these things before the live
[1:03:57] session my suggestion that you try this exercise on your own when you get to a quiz word you try to write it something
[1:04:04] there you pause my video you try to write something there on your script if it doesn't work you impose my video and
[1:04:12] you see the solution that i'm showing you now so that you try this yourself first trying it yourself of course it's
[1:04:19] very good because you start understanding what is going on you just run it you don't learn how to run it but
[1:04:26] you learn how to write it you learn how to do it yourself so that's why my suggestion is to try to do yourself
[1:04:32] but now for sake of gravity let's just move on to the solution script so we go back to the
[1:04:41] main screen of jupiter and this one you see is green means that this active is still working what you
[1:04:49] want to do is to close it you shut down and then you open the one with the
[1:04:53] solutions solutions we can scroll down to the point we arrived before and we can run all the
[1:05:01] cells that we have run before so you could run all above and it just runs everything is above that
[1:05:08] then then here what we do is use the the function we define openmv image to open the different images
[1:05:17] different images have different names so you need to make sure that the name you're putting here is one that you have
[1:05:26] inside this folder here is actually for sacom so you won't find that date inside here but you have to make
[1:05:34] sure that the you the image actually exists inside your folder then the input parameters is this one
[1:05:43] and the things learning allow it gives you the the different images so you get the t11 t22 t3 which are the three element
[1:05:54] intensities intensities of the components of the pali vector and then you get the off diagonal elements with t11
[1:06:05] and so on you see your t11 being a cross correlation is a complex number containing a real
[1:06:14] and an imaginary part and this because you know complex numbers are composed by real and imaginary parts because they have to
[1:06:22] represent waves and so waves have amplitude and phase you need two numbers you cannot do it with one
[1:06:30] um so you have to read them separately but then you have to put them together in a single complex image
[1:06:38] you can do it by just summing the two using the the the imaginary unit here which in python is
[1:06:47] written one j so that tells that these things is the imaginary part so so once you have created this complex image
[1:07:00] it's a good practice to remove the just the real and imaginary part separate why you want to remove them
[1:07:08] from your from your memory because they occupy memory they make your process seem slower and they may also
[1:07:16] crash your system if there is too much stuff inside memory so keeping your memory memory as empty as possible is always good
[1:07:24] practice practice so you don't need them anymore we delete them with this function there and then here we repeat the same for the
[1:07:32] 1 3 element f4 to 2 3 element so running this one and it goes smooth why do we need this i j element here for
[1:07:43] creating the complex number well you have learned that the complex number is composed barrier and imaginary and the
[1:07:50] ij is the way that you represent the imaginary parts you put in front of the imaginary part but if this is not very
[1:07:58] clear you can go back to the to the theoretical part of this course where where where these things was explained
[1:08:08] so we can keep on processing and then we get to this bit here now what we want to do
[1:08:16] here is to visualize an image to see what is going on if what we get is actually an image of whatever is inside
[1:08:25] those data um um in polar symmetry polarimetry polarimetry is very handy to use rgb images for that
[1:08:36] so so i think you're familiar with what is a a composite image an rgb a full scholar
[1:08:42] image but what you do here is you to assign different color to different images and then plot them all together
[1:08:50] so that you can see the different composition of colors inside what you're observing so once you want to do this when you
[1:08:59] want to do this in python the first things is to create a container for these images and you do this here by this i
[1:09:10] rgb rgb so this is a container with three dimension and the first two dimensions represent the size of the image
[1:09:19] so so three because you have three rgb three images you can represent but how do we select the different color
[1:09:29] for the representation once you when you are using paulie basis which is what we are doing here is say
[1:09:39] in convention that you select the colors in this way here here for the red color which is the first
[1:09:47] channel of this container you choose the t2 tool which is the intensity of hh minus vb this represents horizontal behavioral
[1:09:57] also people refer to them as double bounces sometimes and so that does one we choose to go in red
[1:10:06] then is a green color which is the second channel here one you generally you normally select t33
[1:10:15] which is twice the hv channel or hv plus vh divided by two and and this why we do that because they
[1:10:27] this type of target represents 45 degrees oriented behaviorals so we check out the hedral durian 45 degrees which is a bit weird but they do
[1:10:38] happen in nature but also because these things are not very common these already behaviors you don't see them everywhere
[1:10:45] and what he also represents a lot is the random volume scattering random volume goes everywhere over the polarization
[1:10:53] channels and since the t33 contains not much of the rest you see a lot volume there so people refer to it also
[1:11:04] as volume although theoretical is this 45 degrees oriented behaviorals there's a third channel so the blue one
[1:11:13] we select t11 which is the intensity of hh plus db this represents surfaces three headers or more generally odd bounces
[1:11:24] so why we choose the blue for this because the distinguished surface appears blue which is very nice
[1:11:31] and and so if you look at scenes you will see a forest appearances greenish and water appears as bluish it looks
[1:11:39] good good so that's why we normally select these colors colors now now once you when you do these things you
[1:11:48] have to pay attention that python does not like images or the function that we use in show doesn't does not like images to be
[1:11:58] bigger the values of the pixel to be bigger than one so you have to normalize in certain way
[1:12:05] the way that i do is by using the mean and the factor and then to clip into one everything is
[1:12:13] above one my suggestion is that you play with these factors to see what happens so try values like 0.5 or virus like say 10 and
[1:12:23] see how your image change so you get darker or brighter based on how you play with this
[1:12:30] value here with this factor so so once you have done that then we open object config figure then we put a title
[1:12:41] there and in show our image inside and also we save the image inside this path save that we
[1:12:51] defined before you may decide to don't save your images but it's a good practice to do that
[1:12:57] also of course you have to use a better convention for name than just test this is just a test this is but you you
[1:13:05] should use a better naming of the the image so we run this and our image comes here
[1:13:14] you can see the number of pixels here on the side okay i think we talked about this the
[1:13:23] physical interpretation of the pauli rgb and why we choose those colors what i what we do here is to reduce the size of
[1:13:33] the part of the image we are working with with now images are images are very big and
[1:13:40] if you start working with these huge images it is very likely that your ram get full and then the process gets very
[1:13:47] slow or crash or crashes the data that i'm providing to you in the stack are already reduced to avoid
[1:13:54] this but it's also i like also you to see how to do it and also to to avoid
[1:14:00] your processing being too slow because i don't know a different machine can run quicker or slower the process so
[1:14:08] let's reduce it let's make it smaller so at least you don't spend too much time running this and then you can increase
[1:14:15] the size as you as you may wish so what we do here is to find the area of
[1:14:22] interest interest and we define the start range pixel and range pixel start attributes and adds more pixel inside
[1:14:33] the image so you go inside here and you say remember the in this case the azimuth is vertical the range is
[1:14:39] horizontal because the the flight is in this direction north south and so here i see 300 800 about this area here 300 to
[1:14:50] 800 800 and that is is a range 300 800 is about from here to here so it's a crop about
[1:15:00] this this this bit here but you can choose other areas you just go where you want and once you have done that you see that
[1:15:10] the the you can delete the full image that you just occupy memory but you don't really use it so
[1:15:18] do this cleaning every time you can next bit is to filter the coherency matrix i told you
[1:15:29] before that these lcm images were multilooked to one now two one is way too little for working with polarimetry
[1:15:36] you need to do some average of these images images if you have a distributed target you need to filter it you cannot indeed
[1:15:45] polarimatically the single pixel the slc pixel if you have a distributed target this is okay for single target for
[1:15:54] like artificial targets you could say but definitely is not good for disability target you need to average
[1:16:01] it's super important so so we do the average in here so in this cell here we first decide um
[1:16:13] how big of these things actually we decide which filtering methodology we want to use and here i'm using a box car filter now
[1:16:22] this is possibly the simplest filtering you could do but this because it's simple and logical is good as a start
[1:16:31] point and also sometimes you would just to use this because it's so simple that you can understand if you
[1:16:37] start doing complex things you may not start losing the understanding when you are developing your code so it's better
[1:16:46] to start with simple and then go complex later later so so boxcar is there is this little kernel
[1:16:54] that's sweep over the image using a convolution convolution and first things we need to design how big is this kernel and here select is 7
[1:17:04] by 7 pixel fold window averaging window you can choose i suggest you to choose very different numbers go for instance
[1:17:13] with 3x3 or go for reason with 21 by 21 or whatever but try different values and see what happened to your data
[1:17:23] after you filter with different window sizes so we create a kernel when you create a kernel the important things is that you
[1:17:33] normalize it so you divide by the number of elements this kernel contains this is because you don't want the energy of your signal to
[1:17:44] change after you do convolution so it has to be unitary integral this kernel so use the function
[1:17:51] once which means all ones for the size of array of matrix if you want want okay the function that you see here is
[1:18:04] called convolved to d and you do the convolution for the three images pre-average and you get the image after average
[1:18:17] now i'll leave it to you to have a look at what these parameters means because i don't have enough time
[1:18:23] for going into that but be careful these things has to be there otherwise you may have artifacts at the edge of the image for
[1:18:32] instance okay so this one run now we can now visualize this new filtered images after we need the filter
[1:18:46] we apply again the same methodology that we used before to produce this image and the image it comes out is this one
[1:18:55] you compare this one to how it looked before you can see that we are doing quite some goodness to the image to
[1:19:05] reduce the noise also please have a look at different values of filtering for instance try 21 by 21
[1:19:16] the results is you see different more smoothed and you will notice two things so one side is more
[1:19:22] smooth it's blurred but on one side if you look at the colors the colors are possibly more vivid more
[1:19:30] you can separate better things by color and when you look at these rgb images uh really color is polarimetry because they
[1:19:42] represent different polarization channels with different colors so having different colors inside an image is a good sign there is a lot of
[1:19:50] priori magic information there okay so this is done one thing you could check is to have a better look inside
[1:20:04] this data the statistic especially the statistical variation of this data and you can do it by plotting an
[1:20:11] histogram histogram so what you want to do here is to select an area that you deem as quite homogeneous
[1:20:22] and then plot the histogram for that a inside image the the area is to be homogeneous because
[1:20:30] otherwise what you get out as a distribution it is a bit mixed between different targets that are inside so it
[1:20:37] doesn't look like a canonical distribution if you want to check the probability distribution function for say a field then that field has to be
[1:20:46] homogeneous otherwise you start getting at least that doesn't have to include boundaries the field the target itself can be heterogeneous
[1:20:56] and you will have textual distributions but if you can see there's two fields so a forest and an agriculture field
[1:21:02] together together then you start getting things a little bit more not nice to look at especially at this stage where you want
[1:21:10] really to see the histograms the distribution functions so so we selected this area for the image before filtering after filtering
[1:21:22] and and the way i do it is by creating a one-dimensional array out of the image and then plotting the
[1:21:30] histogram with a certain number of bins you can use different way for doing histograms i found this the
[1:21:36] possibilities for me and i plot them inside the same plot using the subplot function essay two rows one column
[1:21:49] so you run this one and then we get the the two distribution you see the distribution before filtering is much
[1:21:57] broader than after filtering so filtering is reducing the statistical variation which is good is letting us getting more information out of the data
[1:22:11] the next bit here is to run the um the chloropothy at the composition so which is possibly the core of this
[1:22:20] practical so some really cool polarimetric analysis and and what we want to do here is to extract the parameter of the color
[1:22:31] put here now if you remember the the theory that you've seen before the club protein what it does is to
[1:22:39] apply a diagonalization of the coherency matrix so represent the covariance margin symbolic coordinate you call it coherency matrix and then you
[1:22:50] diagonalize it all start from there and because you once you diagonalize these things you also get the the
[1:22:58] optimum values for scattering mechanisms so you get the scattering mechanism with the highest power the one with lowest power in the
[1:23:07] middle one and then you can start working with these three scattering mechanisms as your components of your decomposition
[1:23:19] so what you basically need to do here is to to do a diagonalization of a three by three
[1:23:25] matrix matrix but what you have is these huge images so the magics have been split in huge images so how do you go
[1:23:34] back to the three by three matrix and there are a few ways but by far the simplest to understand is
[1:23:43] by using a for loop so a loop is a function function in programming languages which allows you to repeat the same type of
[1:23:54] instructions instructions just changing the value of the index here between a starting and an ending point here
[1:24:04] so you have to do a for loop along all the absolute value in the long old range
[1:24:09] value value and for each of them which will be your m n coordinate inside image for each of
[1:24:18] them you put the big image inside the small matrix three by three matrix at the right place of this matrix of
[1:24:28] course so the t11 goes in position zero zero which represents one one you know python starts from zero so the zero
[1:24:37] for python is actually one and so the t11 goes in the position zero zero of the matrix in python
[1:24:46] the t one two goes in position zero one and so on now you may have noticed that we only
[1:24:53] have six images but three multiple times three is nine so what happened to the other three elements of the matrix
[1:25:02] now the there is a very cool property of covariance matrices is that they are emission emission so it means that the
[1:25:13] upper triangular part of the matrix so the the cross the off diagonal elements on top are the same
[1:25:22] conjugate of the lower triangular part so the lower and upper are the same but this conjugation that you have to do
[1:25:32] so we can fill in the matrix by conjugating the elements on the other side side is a symmetric matrix it's called their
[1:25:41] mission symmetric and these things give so many properties physically some beautiful things to work with but we
[1:25:47] have no time to talk about the the physics of the covariance matrix but anyway anyway you you feeling you populate all the elements of
[1:25:57] this three by three matrix when this is done you ask python to diagonalize this matrix matrix using
[1:26:07] a metric sorry using the egg h function this means eigenvalues hermitian because we know the math the matrix is emission
[1:26:19] and we can just this this function which is more efficient efficient this gives us as output the
[1:26:28] d are the eigenvalues three elements we are the eigenvectors which are three vectors so their values are the power of the
[1:26:40] scattering mechanisms on optimum scattering mechanisms the eigenvectors are the optimum scattering scattering mechanisms one thing that we want to do here is to
[1:26:56] order these eigenvalues based on from bigger to smaller so that we know that the lambda 1 the few second values is the biggest
[1:27:06] so since sometime in some system this may not happen it's better to just do it explicitly but this
[1:27:14] addresses may take so i do it explicitly so that i'm sure that the thing is working properly
[1:27:20] so we are forcing lambda 1 to be the biggest order of this eigenvalues next step is to create the problem to
[1:27:29] calculate the probabilities for each one of these eigenvalues the way we do it is to divide the
[1:27:36] eigenvalue eigenvalue which on pixel m n will be lambda 1 brackets m comma n divide this by
[1:27:46] the values of the others of all the eigenvalues eigenvalues now the sum of the three eigenvalues is
[1:27:55] equal to the sum of the diagonal of a scatter of covariance matrix because our diagonal elements of the
[1:28:03] coherence magics after diagonalization and we know that this is equal to the span of the polarimetric acquisition this is an
[1:28:13] invariant it's the total power that is being collected by the uh your satellite by your satellite so this value here is
[1:28:22] an invariant that is the total power you divide the different eigenvalue by this total power and it tells you how strong is this
[1:28:32] eigenvalue or if you want the probability of that again value you have seen that one of the most
[1:28:40] effective effective elements compo outputs of the cloud protein decomposition is the entropy entropy so here we calculate the entropy
[1:28:52] and this will be different pixel per pixel so we have to assign it pixel per pixel pixel and so how do we do that
[1:29:00] so we need to start with a minus sign because otherwise we get negative numbers because these are smaller
[1:29:05] logarithms smaller than one but besides the minus sign what we do we multiply the probability of one eigenvalue
[1:29:14] by the logarithm base three of that probability now python does not have a logarithm b string so what you do to get the logarithm base
[1:29:26] 3 is to do logarithm base 10 or you can use the natural as well so larger it's base 10 of the probability
[1:29:35] divided by the locality this 10 of 3 and there is a theorem of logarithm the logarithms that tells you that these
[1:29:44] things is true so don't have to believe me you can check it on google so so basically the probability multiplied
[1:29:52] logarithm base 3 of probability if you're working with dual polar you have only two eigenvalues this will be a log base 2
[1:30:02] not b string so the num the base is depending on how many images you are putting there
[1:30:10] so okay this is the entropy and and now now looking at these things you can sort of
[1:30:17] understand what happened for instance when you have a very dominant eigenvalue if you have a very dominant
[1:30:24] number lambda one very very strong and other two are very small you'll have the p1 will be about one p2 p3 will be about
[1:30:32] zero because other very small and when you put these numbers so p 1 1 p 2 0 p 3 0 you
[1:30:41] will see that your entropy is equal to 0. 0. and so entropy equal to zero means one
[1:30:48] very strong scattering mechanism if instead you have these three repo the same like you can have one random volume
[1:30:56] then you have the distribution probability will be one third one third one one-third if you put one third here
[1:31:03] and you do the math you see and h the entropy is equal to one so android equal to one means that you
[1:31:11] have a very confused scott a very confused confused process polarimate by partial target so there's a lot of the polarization if
[1:31:23] you want if you move a pixel per pixel so there is not much information in the polarimetric
[1:31:32] polarimetric in the polarimetry beside the fact that you know that is a very confused process but you don't have an abdominal
[1:31:38] scattering mechanism there now let's go next anisotropy it's very important too then it's obvious is to look to look at the imbalance between
[1:31:48] the second and third eigenvalues to the second minus third by second plus third third it is a very cool thing too and it's
[1:31:57] been been shown in the lip pressure that for instance this is related to soil moisture which is also quite
[1:32:04] important for agricultural studies next bit we start working with digging the egg and vectors so the b one
[1:32:15] and we want to extract the alpha value now uh if you consider the complete decomposition you will see that the
[1:32:24] eigenvectors are represented using polar coordinates so the vector goes cocino alpha cosine e mu comma you go and never look at that
[1:32:51] just make sure what is what but then you will see that this code extracts the value of the angle by getting the arc
[1:33:00] cosine of the first element of this vector vector and once you have that you can calculate also the average alpha
[1:33:10] using a bernoulli process so you averaged alpha weighted by their probabilities so how strong the scattering mechanisms is
[1:33:19] so if you have a very strong dominant scattering mechanism you only have alpha one if they are confused so you have
[1:33:27] an an probability that one third then what you get when you substitute the numbers here is that the the alpha angle is 60
[1:33:37] degrees it's a magic number 60 degrees and this is because alpha one of the two end of the tree are forced
[1:33:47] to have in a way they're forced by the fact that the adm vectors has to be or have to be
[1:33:55] orthogonal to each other so the three eigenvector must be orthogonal so that is the way it works and so
[1:34:05] alpha one after two we have country alpha three are forced to have certain values if you have one tiered here you
[1:34:12] get alpha equal to um to 60 degrees again you don't have to trust me try these numbers you see
[1:34:20] it end up that way then we can also extract bait and i'll leave to you to find out why i use this
[1:34:27] equation here to get it so let's run this this this lines of code you see there's a
[1:34:36] countdown here i included the countdown with these lines of code here why because i'm quite impatient and i want to know if the
[1:34:48] thing is not stuck of course i want to know how long it takes to decide if i
[1:34:52] can go for a cup of tea while it's processing so having a calm down i always find it beneficial there are more
[1:34:59] efficient of like more infusion more cool way of doing it you can find your way my way is this one will
[1:35:06] come down and and when this is finished so so here we go another things you see here
[1:35:17] there is some warnings here this this runtime warnings this is when you have something some numerical error it is not
[1:35:29] a big deal generally because like a division by zero these kind of things if you have once in a while it's not a
[1:35:35] big deal if you have a lot of times there is something wrong inside your code you should
[1:35:40] check check but these are not really errors just say that in a pixel up and that you did
[1:35:47] an operation which is not allowed like dividing by zero okay once we have these things here we can proceed running
[1:35:57] the rest but before we proceed i want to show you um something to understand a little bit better about this bit of the
[1:36:05] code here like let's have a look at the values of d and v inside the code if you want to have a look at any
[1:36:14] variable inside the jupyter notebook what you do is to click on the side here of the script
[1:36:22] then you press b which means open a cell below below you write down the name of the variable
[1:36:29] whatever this is is d my case and you go ctrl enter for running it and then you see the numbers inside
[1:36:38] you see that the uh it was not sorted yeah the first element the biggest element is the last so that's why i did
[1:36:45] the sorting but this one is bigger than this and these they're all real numbers representing representing intensities
[1:36:52] intensities so what about the egg and vector these are these are the egg in values or bad
[1:36:58] eigenvectors eigenvectors this is what you get which is not very simple to see but you see there are
[1:37:04] three elements each one two three one two three one two three and and this represents the columns represents
[1:37:14] the the eigenvectors for our inside the pixel specific pixel we are analyzing it is a pix the last pixel
[1:37:24] because it's the last v od that we are looking at at this point so let's delete this to delete a cell you
[1:37:32] click d twice so dd goes away let's continue processing here in this cell here i want to visualize different
[1:37:46] parts of this decomposition and see again i use subplots this time with two rows and two columns
[1:37:54] you can play around with all these values and plot this in different ways and the output is here so we can see the
[1:38:05] maximum again value is bigger than the second and the third if you look at the power one elements you see is not that
[1:38:13] dissimilar to the maximum again value this only one is surface capturing this tells you that there is quite a lot of
[1:38:20] surface scattering going on inside this this scene then we have a look at because see poly1 overlap
[1:38:30] quite well with the maximum negative value maximum scattering mechanism having a look at the alpha angle you see
[1:38:39] we have values close to zero zero is for surface surface and and the red bit here of pi
[1:38:48] is for behavioral and middle values is full dipoles so we see it's quite a lot of surface scattering they're going on
[1:38:58] especially in the dominant but because there is several scattering mechanisms going on when you do the average these
[1:39:05] things tends to get higher and tends to go closer to the magic number 60 degrees so the entropy
[1:39:17] again confirms us that there is quite a mixture of scattering mechanism there mechanisms there although this look
[1:39:26] not quite stronger than this but it's not dominant there is still quite a lot here in the second again values and even
[1:39:34] the the third one and so relatively high entropy is due to many things maybe due to the fact that there
[1:39:42] is some vegetation there it's not just background background it may do to the interaction of the different parts of the plants with the
[1:39:50] ground it may do to the fact that the ground is very enough so the soil is very
[1:39:56] a lot of roughness so there are many things why your entropy can be high and and this completes this part of the
[1:40:08] this part of the practical now we are ready to go to the the difficult bit the time series also
[1:40:17] you see there is one with using sao com data which is also very cool i don't go through that
[1:40:24] because it's basically the same i see i split in the two files to make it as simple as possible for you and also to
[1:40:30] give you a chance to do the exercise twice twice but here i put these two satellites together so that you don't
[1:40:38] have to you don't have to version for the time series and maybe we take a little pause here
[1:40:45] before we start the last one we get a little little simple water i'm sorry i'm keeping you for longer
[1:41:00] than than expected but yeah hopefully we'll be finished nothing too much long so let's start this let's click
[1:41:26] on this script now now here i want to to to ramp up the complexity of what we have
[1:41:38] done so far so the first part is a bit more say educational for you to go step by
[1:41:46] step try to do things in an easy way here in this final folder a panel script i try to put things together
[1:41:55] so that is closer to something that you can use as an automatic system and and it's still not there i still didn't go
[1:42:05] too complex that you could not and that you have difficulty understanding what is going on i still got it's a small
[1:42:12] step from the one before but is nevertheless a step in complexity also my suggestion is that possibly you
[1:42:21] also try to run this using spider another editor which i find better when you want to do
[1:42:27] more automatic processing stacks where you for instance you have a scheduler that calls the python function every the ten o'clock on
[1:42:36] monday around the code if you do this kind of things then then spider is your friend you want to use
[1:42:42] that type of editor so how do you convert this into a spider spider so into a script that you can
[1:42:49] open in spider you go to file download it s and then you go python.time python.time once you download this as a
[1:43:00] pi then you just open it in spy there is a a and it's a normal file so here we will be using circus relation
[1:43:09] mission and succumb both the things together and and the first part is about the same so you
[1:43:19] need again to load your import your libraries and then it starts we start with defining our functions
[1:43:30] now now the functions are all defined here inside this single script jupyter notebook script but the best way to work with this as i
[1:43:40] was telling you before is to create a library library so you create a dot pi file so you
[1:43:47] export this you download this as a dot pi you just keep the functions the functions and then once you
[1:43:55] go inside your script you import the library with the name that you assign you have to make sure that
[1:44:03] python knows where to look so they knows where their library is and but then you can import that way so you don't have to
[1:44:11] repeat all these functions these routines routines definitions inside your script when you're running it this makes things easier your script
[1:44:23] goes smaller and then once you modify your library every time you call the library you have the new files the new scripts with you
[1:44:31] don't have to update every single script you have because all these things are inside your library so that is my suggestion do that but for
[1:44:40] the moment let's run this first on the jupyter notebook which is simpler and then you can try that later
[1:44:48] so so as i said the images are pre-processed using snap a lot of use is not with that because
[1:44:57] it's very easy and then you can do a lot of things by in a very quick way a very
[1:45:04] automatic way as well so i created this graph and then i used the gpt of python to run it many times over
[1:45:13] all this stack of images and it's also simple and nice so that's why i i love to use
[1:45:20] snap snap i think that the images the file name convention of snap snap doesn't work very well with what i want
[1:45:30] to do so i generally change the file names that they look better or at least i found them better
[1:45:39] to work with you may prefer to work with different conventions but this is the i'll show you the convention that i like
[1:45:46] to work with so if you see the images that you get after it's just the name of the
[1:45:55] the image the t1 and the date in this format so that everything is in alphabetical order and once you
[1:46:04] run this with snap things don't come out in alphabetical order and also they have the word master enslave inside the file
[1:46:12] path which makes things quite com for me it's not the best to deal with with different images so here there are
[1:46:20] some functions to modify modify the file name convention and making a way that i like most you may decide to use different
[1:46:31] conventions but my strong suggestion is that you don't try to do this manually because if you try to change the file
[1:46:38] name of which of this function manually you get mental write up python script to do this for
[1:46:45] you is so much better and so you take time to write the script but then you you save so much time
[1:46:52] after so anyway i'll leave it to you to have a look at these scripts and also here we are using the
[1:47:01] one specific library in python called os os this is well known to a different way of processing
[1:47:14] things with different operative systems so this has been tested with mac linux and windows but nevertheless it may be that your output is different
[1:47:25] from my how my output look like so so it may happen that you have to modify this a little bit in order to suit your
[1:47:34] your specific output when you use the os library library now this one converts the mount conversion conventional snap into
[1:47:44] numbers numbers and so because these are not the alphabetic order where these are so that's why i do this
[1:47:52] and this is a function to read the file names inside this folder folders like this one and to extract the list of dates so you
[1:48:04] see there are several dates here so that function goes inside and extract just the dates and create a list with it
[1:48:16] this function here is what we have seen before is just opening one mv image next function and we basically
[1:48:28] encapsulated encapsulated everything we use to read a covariance matrix inside this function here so that you don't have to repeat this inside the
[1:48:37] script and this is written once for all you always call the function you make sure that you have no typos in your new
[1:48:44] script script this one needs as a input the path where the images are but also the the dates
[1:48:51] what is the date because you see in the file name there is the date next things that i put inside a function
[1:49:02] is this uh is the put here the composition and and why because in this way i'm sure that when i write
[1:49:12] new script i don't have to plug this in which takes a lot of line of code and also i'm sure that i'm not
[1:49:18] making any typos there if this is written once for all inside the library you know that library is
[1:49:24] working well then i'm sure that is working you know so it's a it's a good way to
[1:49:30] to deal with these functions the input of this one is our six images for the coherency matrix
[1:49:39] and the output is the entropy anisotropy in the triangle of course you can modify this if you want those to the beta
[1:49:48] coming out you want alpha one to come out you just add it here say you would want beta here
[1:49:55] alpha one whatever you can add more things you can save more stuff if you want okay okay and
[1:50:07] and these are all the functions that i i put inside here we can run them all by
[1:50:16] run all above and then we can start with the script i said you i told you before
[1:50:24] we want to use the same script for running with different sensors different folders different values especially if you cannot install
[1:50:37] spectrally you need to code these values so how do we deal with this with this um and
[1:50:44] and the way i did here is by using if clauses so this if if or else and it's an
[1:50:54] an easy way of doing it it is also when you are learning about it is also nice to allows me to teach
[1:51:02] you about the if clauses which are very important but is possibly not the most efficient or you can be more efficient
[1:51:11] than that than doing your desired coding and and possibly the most efficient way of doing dealing with this is by having a
[1:51:20] config file configuration files these are text files that you can read use the library config parser and then you can basically put these
[1:51:32] things inside your text file and if you format it properly then config parser will be able to go inside
[1:51:39] there and read the values for you as spectral is able to go inside the header of the mv image and read the parameters
[1:51:48] for us so i'll leave this to you to to try to use config parser for bringing these to
[1:51:57] another level to the next level so so basically explain if so what does it go looking at this variable if this is
[1:52:08] equal to this value that's these instructions if this is equal to this value does this if it's not none of them gives you a
[1:52:19] worrying and say you you are making a mistake there be carefully carefully so to to switch from rcm to sal com data what
[1:52:30] you do is to uncomment one or another so here we'll be running so com here will be run even this will be
[1:52:39] running rather soft so so that's done next thing is to start reading getting the dates of our acquisition
[1:52:55] if you're doing this from from say from scratch so you did all the snap processing and now you have to create
[1:53:03] your new file name convention then you need to uncomment this and run this code which which you may need to fix if you use a
[1:53:14] different operative system so if you use windows and linux should be fine so anyway do do you have to uncomment this thing
[1:53:24] if you're just using the the files that i provided with this with practical then you run this bit here
[1:53:34] now this cell here use the function get dates dates stuck this use the library os and i've no no people having trouble
[1:53:47] with that apparently everybody tested this code that was working but if it is not working if the os
[1:53:56] library is not working for you then then you will crash won't be able to to proceed and you can also check
[1:54:07] how it went by having a look at this list of dates so if we here we process run all the cell above
[1:54:18] and then we create a new cell here and i showed this one then here you see the five dates of the
[1:54:29] rcm data set if you don't get this data automatically with this function it will crash so what you have to do is to uncomment
[1:54:39] this bit and so you basically hard code this vector and then it won't crash this allows you to finish the practical
[1:54:48] but you still have to go back to this correct date stack and try to understand why os did not work for you why you
[1:54:56] don't get these four values inside the list a finger crossed this was tested and will work now this bit is quite important so what
[1:55:09] we do here is to create these cubes where we contain we will put the the multi-temporal information you have
[1:55:19] several images here and each image has a certain size so you can understand that you may start struggling with putting
[1:55:29] all these things inside your ram memory and because things can be easily very large consider you're playing with
[1:55:37] some some large large time series of say 20 images you can understand this thing start getting very
[1:55:44] big and you need to to deal with it we need to deal with it so what do we do
[1:55:49] here is to create some cubes where we have the first two dimension is the image of interest and then the third
[1:55:58] dimension is time and here i'm loose using a quite loose word same cubes data tubes are more
[1:56:09] complex structure here just say this three-dimensional three-dimensional structure but if you really want to use property the tubes then you can read
[1:56:17] more about that and use libraries like the zed array is one of the a very good one
[1:56:24] so anyway we want to create these little cubes where we store all the parameters that we extract from the image for the
[1:56:31] block we are deciding to use to work with with and and what we do how we do it is by selecting first of
[1:56:42] all the size of the block we are dealing with again for rather constellation mission these are the areas of interest
[1:56:51] so this is the area of interest for salko this is the area of interest and then we create this three dimension
[1:57:00] dot this uh the three dimensional cube where the third dimension is time and is given by the number of
[1:57:08] acquisitions which in this case is 5. so we create a cube for entropy one for anisotropy one for alpha and then why
[1:57:17] not also the three element of the power lead basis although we have the big image there but maybe you don't want to
[1:57:24] work with big image we prefer to just keep it small and then open and work just the
[1:57:31] small tube don't open all the time the big image which make things more efficient so we run this one
[1:57:41] and yeah my suggestion is you also test different areas you try to to explore the data more
[1:57:50] then we can start the process in here so let's start this will take some time second to recover
[1:57:59] so so what we do here is to first load one one date by using this function here
[1:58:09] and and we go on the list list date for the index of interest and then what we do with this we take a
[1:58:21] crop of the image so we take the small area of interest and then we apply some averaging so boxcar filtering
[1:58:33] here is an exercise for you i didn't do it because i'd like you to to give it a good try in this thing so
[1:58:40] these things can be easily slotted inside a function so you don't need to have all these lines of code here you
[1:58:49] could create a function like we did for the cloudport here where you input the pre-filtered images and then you get
[1:58:57] this output the filtering images on the other side so you don't have to repeat this all the times another thing that
[1:59:03] you have to input don't forget is the window size if otherwise the the function we don't know how big
[1:59:11] is your window size but this is a nice exercise you can try to do so take this and create a
[1:59:18] function on top of the script but anybody that does the the filtering as before then applies the claw put here
[1:59:26] in a single line this is amazing i think i love this kind of thing so it's just a
[1:59:32] single and before you add 100 lines there's a single line uh so applies the the club here and then
[1:59:39] is lots the output of the put here inside the tubes that we have created previously previously and that's the same also for this
[1:59:50] t11 t2 to 3t3 so so the processing is still going on it takes some time every time you run this
[1:59:59] you have to do the club here for all the block you you selected so this can take
[2:00:06] a little bit of time and also you see still running by looking here these are nasty obstetrics inside it means i'm
[2:00:14] still doing it wait so okay now i start in the the final one i can possibly continuous telling
[2:00:25] the rest and then we by the time it should be finished so what we want to do next is
[2:00:30] to do some visualization of the images at these things we want to visualize the power rgb i wrote the code in a way that it
[2:00:41] creates more and more figures one after the other for each one of the images so you see it goes from
[2:00:50] all to all the images and it gets the values for the t11223 stuck inside the container and then
[2:00:59] visualize and also it's cool to put the the some text here that tells you which images booty images what
[2:01:09] let's see if this is finished not yet so let's now visualize this rgb as finished and and you see
[2:01:21] the the series series of images is here and we can also start to have a little bit of interpretation of these things
[2:01:31] first of all i would like to lead your attention on the fact that if you look at the different images in time you see
[2:01:38] the color change seeing a color change is good sign it means that there is some polarimagic information that has been changed
[2:01:47] between the different dates if the colors stay the same then well well you cannot tell much about the evolution
[2:01:54] of the plant but if the color change then you can relate this say changing color to this changing
[2:02:01] polarimetric information into change of the phenology of the plant even if you just from a machine learning perspective
[2:02:10] but looking at this changing colors is a good thing so so let's now look for instance this field
[2:02:16] here this circular field here which is quite cool so it's quite green in the end of july and so this is northern
[2:02:26] hemisphere this is when the plants are quite in canada this is when the plants are quite big so it's most likely volume
[2:02:34] scattering scattering then then you see a bit of the field seems to disappear and also this one gets darker in needle august
[2:02:47] and this can be either due to harvard or is possibly due to harvest and but it could also be sent a sense of plants but
[2:02:55] most likely this looks like harvest and this in this side here may be mostly in essence where the plants start
[2:03:02] getting drier and you see them a little bit less you see a little bit more of this casing small surface captain so
[2:03:10] what is underneath then you look more and the color changed again now it's a little bit more red
[2:03:16] this maybe you start seeing more the stems at this point so with the double bounces because you go through the
[2:03:24] dryer canopy and then you see a bit of the field has disappeared disappeared and this is on the 9th of september
[2:03:34] and a bit more has disappeared on the 17th of september i think they are harvesting they're taking longer to
[2:03:43] harvest so probably either there is two species or the seeding time for these twelves was different we'll start in
[2:03:52] seeding this side left side first and then when seeding the right side so another thing that could happen also
[2:04:02] this point is that because radasat constellation missions use different satellites inside the constellation images could be acquired also different
[2:04:12] time of the day could happen this and if this happened then there would be some signature in that so extra information
[2:04:19] because you acquired you look at the same things at different times but also you you will see some differences in the polarimetric
[2:04:28] you may see some differences in probably magic behavior this is especially little things like jew that you can see you can
[2:04:35] have in the morning but maybe not at other time of the day and also other things that are related with
[2:04:41] the time of the day when the acquisition is done but but in order to tell more about this you need possibly
[2:04:50] to know the phenological stages of when these phenological stages were happening inside inside the data and you can find a lot of very cool
[2:05:02] information regarding the the type of crops grown in the area uh provided by the agriculture in the ugly
[2:05:11] food canada the government of canada following this link so from there you can find i'll leave this to you to look such a
[2:05:19] big data set but you can find a lot of information a wealth of information where you can start telling more about
[2:05:26] specific crops that you see there so so now let's visualize the power the group put here parameters
[2:05:37] and and we see we start with relatively relatively high entropy values so we've seen before lambda 1 was quite
[2:05:48] surface scattering but we had other mechanisms too which created them which see no bias but bring the average alpha to higher values
[2:06:00] toward the magic number which is 60. so but this surface is quite something in the fields there's quite a bit of
[2:06:10] surface scattering and again you may want to look at the dominant alpha some cases cases is cool as long as you
[2:06:19] use it together with the entropy and not alone alone otherwise you make mistakes if you just use the dominant alpha without
[2:06:28] considered entropy then this is bad it's not good then then the there's a little bit more surface
[2:06:36] cutting a little bit less center a bit lower entropy here telling us that possibly we see more the
[2:06:45] ground at the mid here there is a bit an increase as a strain a change in trend here and maybe
[2:06:54] due to some specific practice or uh uh other reason but it's not very high it's also linked mostly to the value of
[2:07:03] entropy that are higher in other end we notice but word hand we get lower values of entropy and
[2:07:15] this again gets towards more surface and then then again there is more confusion here maybe depends on the different practice that
[2:07:23] we're going on but you see there is more entropy here than here maybe also the weather condition as well
[2:07:30] if the rain and this kind of things may also impact so the wetness of the ground these kind of things
[2:07:39] so so the the um um this is the another thing that i also want to say is that the these are
[2:07:46] acquired by different uh satellites inside the constellation and if you acquire a different time of the day we also may have
[2:07:55] issues issues things related to the amount of brine or water of 10 pressures of that time of the day so
[2:08:06] this is can also be in other things that create a bit of fluctuation now now in this part of the code
[2:08:17] what i try to do is to show this images with strains so selecting a specific field inside the image we can
[2:08:27] use the same that we were using before for the histograms and then produce doing averages inside and produce trends
[2:08:37] here you see a new image new function i'm using this none mean so this is mean again like before but excluding not the
[2:08:48] numbers numbers in case that the club put here do run runtime warnings and produce nothing numbers there it will still work
[2:08:59] so that's why i use this one so we can finally visualize these as trends trends and you can see that about what we saw
[2:09:11] before but trends of the entropy the the anisotropy transformed alpha and and this also should span which is related
[2:09:23] sometime to the amount of vegetation that you can see so so the next bit here of the code is save in
[2:09:33] the cube but before we uh go with that i would like also to show you the salcombe
[2:09:40] data which are really cool there's really cool stuff there so we uncomment this bit here and then
[2:09:51] so we select salcombe as the data we want to use and then we can process everything above the cell here
[2:10:02] so it is finally finished and we can visualize visualize our rgb images and you will see we have two images
[2:10:15] taken uh in one image march and uh so february march so the this is in in argentina is the time when the plants
[2:10:27] are are growing growing southern hemisphere and and if we look at these two images taken in 20 20 the images looks quite green
[2:10:38] there's a lot of green going on inside these images showing that the plants are quite quite strong vigorous at this point
[2:10:47] but if we look at the subsequent two in 2021 acquired in november and december the images are
[2:10:58] blue blue this is the time when they start seeding the fields so it's mostly surface scattering of
[2:11:07] very small plants very good seedling and and since we are using here l band the small plants are
[2:11:16] not very visible so what we see most is the ground component we can clearly see all the ground here where the
[2:11:25] new plants are planted while when we are later in the phenological stages we can see the green of the
[2:11:34] plants then let's run run the the property parameters and if we look at the um an entropy we can see that in february
[2:11:55] march this entropy is relatively high there there are plants they're quite big and this they mostly plant corn and soya beans they
[2:12:05] are quite big and so they produce some volume scattering we go looking at alpha and also this corroborate the fact that
[2:12:13] this is alpha is higher than surface scattering except for few fields where there is some peculiar behavior
[2:12:23] um so plants are there we are looking at the plants uh here plants start getting more in the
[2:12:30] senescence senescence so there's more surface that can be seen through the plants that are getting drier drier if we look at november
[2:12:41] the entropy is much lower because we have the city that is mostly uh background what l band sees remember l band is
[2:12:51] bigger wavelength 23 centimeters so you need quite some roughness to to make it not look like a surface
[2:12:59] and so you see the surface pretty well and the alpha angle is very quite low so we can clearly see
[2:13:08] we are looking at the ground and then maybe some some plants are already growing then trophies start getting a little bit
[2:13:17] higher a banal is still quite pretty much surface scattering we can run now these plots this is what we
[2:13:31] observed for the month where the plants are there have high entropy demands where the are seeded so it's mostly ground that
[2:13:43] have lower entropy and in terms also of alpha we see that the the is low for one when the plants are not there and
[2:13:56] this higher tends to be quite high when the plant starts growing more and and last bit is here to save
[2:14:08] all these cubes in our folder and the easiest way to save these images is by using numpy so
[2:14:18] save as numpy files but i'll leave it to you to try to use more complex ways like if you install
[2:14:24] spectral you can save them smb files or you can if you're using jigdal from the start you can even
[2:14:33] save them as geocoded images so you can really choose the way you want but here is a start
[2:14:41] we go with nubi images and this will be saved inside your your [Music] [Music] your save folder
[2:14:51] you can find them here so this is the end of this this practical and i hope you have enjoyed i hope this was not too
[2:15:03] complicated the second part the one with time series can be a bit complicated so i suggest you to start with the exercise try to do
[2:15:11] yourself and then build up your confidence to move on this second bit here and if you have any
[2:15:19] question question about this just please ask we are here to to to try to answer your questions
[2:15:28] so i hope you enjoyed and and also would like to thank again the space agencies uh the canadian space agencies
[2:15:38] and connie the argentine space agency for providing this data which are really cool really we have a lot of fun uh
[2:15:46] processing this data and i hope you will also have fun with them and so i close it here thank you for your attention
[2:15:57] thank you armando for the wonderful practical practical analyzing a time series of fully polarimetric rcm and cell com images
[2:16:05] using python jupyter notebooks as armando already stated the code rcm and salcom data used in today's practical can be accessed from the rset
[2:16:15] training page we encourage you to download the jupiter notebook and files and start working with the data on your own
[2:16:24] next week we'll be joined by pierre de fournie from uc levin to present on send for stat
[2:16:31] a european space agency open source sar and optical toolbox for operational crop type mapping and monitoring over very
[2:16:41] large areas we will now transition to the question and answer session of today's training please enter your questions in the
[2:16:50] question and answer box and we will get to them in the order they were received we will post the question and answer
[2:16:57] document to the training website before the start of next week's training below is the contact information for
[2:17:06] laura dingle robertson and armando moreno along with links to the training webpage and rset's twitter handle thank you and we will now start with the
[2:17:17] question and answer session wonderful we've been getting some really terrific questions coming in uh so do please continue to submit them uh in the
[2:17:35] chat box uh let's just jump right into it question one our single look complex sar images useful in crop mapping or ground range
[2:17:46] detection detection hi this is laura dingle robertson i'll answer that the simple answer is that both can be used for crop mapping
[2:17:55] typically if you're only interested in using sar intensity you would only need to use the ground range detected data
[2:18:01] however if you require a richer data set to classify your crop types you can use the sltc data and derive the polametric
[2:18:08] parameters as we described here both the fully polymetric and the dual polymetric parameters parameters we've found in our research that
[2:18:16] polymetric parameters add additional value in separating crop types in classifications so the accuracies are higher and there's improvement in
[2:18:24] classification uh the improvement in classification is crop type specific so this improvement can be explained by the fact that the
[2:18:33] difference in the sar response from one crop to another is not only about the differences in the intensity magnitude
[2:18:39] of the sar backscatter from cropped crop how the wave scatters how the energy is depolarized and the angle is scattering
[2:18:46] can be very informative we've found for example that the stokes parameters perform very well in crop classifications as these four parameters
[2:18:55] specifically capture much about the characteristics of scattering than simply the intensity of backscatter wonderful thank you laura
[2:19:11] question number two how can we geo-reference the output of pulsar pro as snap provides geo-reference output to
[2:19:20] any pre-processing so i think this question was asked just before uh we got to this part but the
[2:19:26] python script that was provided in the first part of the training that i provided um actually does the geo-referencing to the
[2:19:35] output of the pulsar pro uh data so you can download that from the rset website and use that to uh to georeference the
[2:19:44] pulsar pro output wonderful thank you again laura question three why wasn't snapped used for driving polarimetric parameters although the
[2:19:58] tool is available there so uh the polarimetric parameters that can be derived with this with snap um
[2:20:06] require currently require the fully polymetric data so that similar to what armando was describing so fully polymetric or quad-pole data
[2:20:15] and so this is why we used a combination of snap for deriving deriving the c2 matrix and then pulsar pro to
[2:20:23] generate the polametric parameters from the dual polymetric sentinel one data terrific thank you question number four what is the difference between single
[2:20:37] look complex and ground range detection answer this one and slc is a single look complex while grd stands for ground
[2:20:53] range detected they'll see as the face information so the image in slc is a complex image so imagine a real real and
[2:21:02] imaginary part are the images that we were importing in python composed by two numbers not one while
[2:21:09] the grd is only the intensity of that also the grd has applied some multi look to the pixel a
[2:21:17] one for multi look to make it look a little bit more squared on the ground so the uh
[2:21:23] from a practical point of view if you have an slc you have the phase information and you can apply all the
[2:21:30] cool polarimetrics are processing the use phase information like cloudportier is one but there is many other things
[2:21:38] like the stocks like the yamaguchi the composition whatever you want to do and if you just have the grd you won't be
[2:21:46] able to do that so they that's why we were using slc because we wanted to access this space information
[2:21:58] great thank you armando question number five can we clip single complex and ground range detected data to a particular area
[2:22:08] of interest and then do all the pre-processing if so how so again i think this uh question came
[2:22:15] in just before we started to talk about it um it's the step uh in the order of
[2:22:20] operations the s1 top split so what that do does is reduce the data to specific bursts within specific sub swaths um
[2:22:28] interferometric wide swaths that the one data has uh three sub swaths with multiple bursts in each so what you just
[2:22:35] need to do is know which sub swath or sub swaths and which bursts cover your aoi and then you can follow that s1 top
[2:22:43] split to split your data down to just that specific area terrific thank you thank you laura question number six
[2:22:54] when applying an orbit file i face the node id error and no orbit file is downloaded and for some dates and scenes
[2:23:02] it can't be downloaded manually from pod could you please help thanks okay so this has been a problem on
[2:23:08] occasion for us and we found there's different reasons why this happens it can relate to a firewall issue within your
[2:23:15] organization it can be related to the snap edition you are using as there was a known issue which has been corrected
[2:23:21] by the snap development team um it could be related to actually whether or not the precise orbit file is available if
[2:23:27] you're using very current sentinel one data um there are threads on the esa's step forum that can provide suggestions
[2:23:34] on how to correct this issue depending on what exactly it is for your particular scenario and we put the link
[2:23:40] to the isa forum there great thanks laura question number seven what is the difference between a speckle
[2:23:48] filter applied to ground range detected imagery and the polarimetric speckle filter applied to single look complex imagery
[2:23:58] so polymetric speckle filters are designed to preserve phase so you need to be careful to select a polymetric
[2:24:05] speckle filter for slc data i think in armando's case they were using boxcar filter as were we so otherwise the phase
[2:24:12] statistics will be distorted and any polametric parameters that you then derive from that slc data will not be
[2:24:19] correct or accurate once you actually generate the polymeric parameters such as the entropy you can actually apply other radar
[2:24:27] adaptive filters to be applied onto those data layers thank you laura question number eight during stoke's parameter generation why
[2:24:40] do we why do we set five by five window size what is the default for this operation
[2:24:47] operation so this five by five window size it's a sliding window size that takes an average of the matrix value and what
[2:24:53] it's doing is further reducing noise when you're in pulsar pro the default are question marks and so there isn't
[2:25:00] actually a defaults number in those boxes this can be set to what is appropriate for your area of
[2:25:07] interest interest in our research we found that a 5x5 window size is appropriate it's based mostly on the size of our agriculture
[2:25:14] fields fields and what we're looking at however we often suggest that you test different window sizes for your area of interest
[2:25:21] to see how changing window size changes the output so there's no typical one size fits everything wonderful thank you question number nine
[2:25:34] relating to entropy and alpha referring to slide 41 is there a list of entropy examples for patty
[2:25:41] so in our experience entropy in particular has been very useful in mapping and monitoring crop growth and
[2:25:46] just not only crop type but actually growth stage and crop condition we do not have an exhaustive list of
[2:25:52] papers to cite with respect to polymetric response and rice paddies but um in a literature research that will
[2:26:00] likely reveal research in the use of entropy alpha for rice paddies so once you begin to work with fully or
[2:26:07] partially polarized sar data from 701 or rcm or salcom you'll find that these polymetric parameters have strong
[2:26:13] correlation with crop development we have one reference that we we've listed there that you can start with
[2:26:20] in particular for rice paddy rice phenology mapping wonderful question number 10 is there a relationship between entropy and any
[2:26:30] other vegetation index so absolutely our research has proven repeatedly that entropy the degree of randomness varies depending on crop type but also crop
[2:26:41] condition and crop growth stage the degree of randomness and scattering changes as crops develop and that's due
[2:26:47] to an accumulation of biomass and leaf area index so as you can imagine even though the transmitted wave is fully
[2:26:54] polarized when it enters the canopy as vegetation structure changes as crops grow the predictability of how the wave
[2:27:01] scatters not only in terms of intensity but but scattering characteristics decreases so we found the entropy is correlated with
[2:27:09] lei and also ndvi having said that using multiple sar polymetric parameters will improve the accuracy of tracking crop
[2:27:16] development so think about exploiting not just only entropy but also the other parameters that we listed there as well
[2:27:23] as the other parameters that are available through pulsar pro wonderful thank you question number 11. last time the sar nasa training was done
[2:27:33] with google earth engine is it not possible to do processing with google earth engine maybe i can take this one and google
[2:27:42] earth engine is a fantastic tool we i love it when you want to there's something in a place you don't have data
[2:27:48] there you go there it's very easy and quick to to do analysis but there is some problem an issue with google earth
[2:27:55] engine is that the data that are stored there the satellite data like sending one one are grd they don't store the slc
[2:28:04] so there is no phase information there the main reason is because the slc is so much bigger than the grd the grd is much
[2:28:11] smaller than some multilook so they at the moment you cannot really do this cool pulsar processing processing by
[2:28:21] using google earth engine in the future windows maybe they will host the slc and you will be able to do it but not now
[2:28:28] also there's a thing that uh not aware that in google earth engine you can call snap functions so you may
[2:28:35] need to develop them on your own on the google platform and and snap is so useful there is so cool
[2:28:44] methodology you could use there straight away and instead and needed to develop them yourself yourself so quick answer is you cannot really do
[2:28:55] this because it's not there's no slc there hey thank you armando question number 12. can we also use google collaboratory
[2:29:05] as an alternative to jupiter this is another very cool answer a pretty good question you can use that i
[2:29:15] am aware of people that are doing that so google a collaborator is super cool because it's very easy boost
[2:29:20] collaboration it's very easy to collaborate with other people then you can also store your data on the cloud so
[2:29:27] you don't have to download and store the data if they're available there otherwise you have to put them on their
[2:29:32] cloud and so it is a cool thing um i and i think you can use it if you want
[2:29:39] on our side we don't use it much because he he details some disadvantage that we want to do
[2:29:46] operation on ourselves would maintain intermediate products on our server our own and we just share the final output
[2:29:55] well if you are there everything is shared in collaboration but it's uh absolutely you can use it if you want
[2:30:02] the thing is you will be able to do it great thank you armando and looking at the time we are at the the end of
[2:30:11] today's training uh so for all the people that did ask questions we want you to know that we are answering all of
[2:30:17] them in this doc and next week before next tuesday when we have our third part of our training we will post that to the
[2:30:24] training page so do if your question was not answered uh we can we assure you that it will be and it will be posted to
[2:30:31] our webpage but i do want to thank everybody all the participants for joining today uh we had
[2:30:36] a wonderful turnout we we appreciate all the questions that people were submitting and i also want to thank armando mourinho as well as uh
[2:30:44] laura dingle robertson and heather mcnarron uh from agriculture and agri-food canada armando marino from university of sterling
[2:30:50] and before we close and wrap up i did want to give each of the guest presenters an opportunity to uh any
[2:30:56] reflections on on today's training so laura maybe we can start with you uh i'd just like to say thank you very
[2:31:03] much to everyone for attending and to just get out there and start using the sentinel one slc duopolymetric data as i said there
[2:31:12] is a lot of data that's been collected very consistently around the world so just get out there and start start
[2:31:18] looking at it and looking at these polametric parameters and i'll just give a quick shout out if you're interested
[2:31:23] in finding a resource where there's a community of people who gather and talk about tsar on twitter we have
[2:31:29] our at sisters of tsar twitter initiative which uh has has over 6 700 followers and we talk about
[2:31:38] tsar every day all day so please feel free to follow at sisters of tsar laura thank you so much and armando if
[2:31:46] you had any uh any last comments you wanted to share with the participants now just thanks everybody for being here
[2:31:52] it's been a pleasure from my side to be able to teach you these things and i hope you you will find it useful
[2:31:59] if you have any question about these things that don't hesitate also to ask later on and please keep on using
[2:32:07] polarimetric data let's keep the the community going on these are really very ditch of information and we we should
[2:32:15] try to to use them more in the future considering in the future there will be more and more popularity magic sensors
[2:32:21] as well wonderful well dr moreno and dr dingle robertson thank you both so much as well as dr mcnaren uh for contributing
[2:32:29] today's uh training and we look forward to seeing everybody next week so on behalf of the entire rsa team big thank
[2:32:35] you and we look forward to seeing you next week thank you bye-bye
