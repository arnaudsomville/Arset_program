# Introduction to Polarimetric SAR, Session 3/4

`https://www.youtube.com/watch?v=-xU4oE66pgY` · id 247 · 44:42 · module 21 — Mapping Crops and their Biophysical Characteristics with Polarimetric SAR and Optical Remote Sensing

[00:00] hi everyone this is erica potus and welcome back to the introduction to synthetic aperture radar webinar series
[00:08] so far we've covered the basics of synthetic aperture radar that was session one session two covered star processing and data analysis and
[00:18] this is the third of the four part sar webinar series and today we'll be covering introduction to polarimetric
[00:25] sar our guest speaker today is dr naira pinto she is the science coordinator for uavsar and she is based at nasa's jet
[00:34] propulsion laboratory welcome thank you erica so thank you everyone for participating today my name is nayara pinto i am going to present today
[00:48] about the introduction to polarimetric star and i like to acknowledge a few researchers that helped produce this material over the years
[01:02] from nasa and and the alaska satellite facility so what are our learning objectives today today we saw from session 1 and session 2
[01:18] that radar signals can interact with the earth's surface so essentially the radars illuminate targets on the ground
[01:28] and then they record the received energy that's also called backscatter the received signal provides information about properties of targets on the
[01:40] ground or scatterers and more information is gained by studying different polarization by illuminating the targets with waves of different polarizations we
[01:55] learn more about the target's physical properties properties so our goal today is to provide a brief introduction to polarimetry and help
[02:06] students familiarize themselves first with the way that the polarimetry information is represented mathematically second the data format and third provide
[02:18] one example of data processing for land cover mapping so let's get started our outline is we're going to start
[02:26] talking about why polarimetry i know a lot of our audience is coming from the optical world a brief introduction
[02:36] on polarization and then we're going to move to scattering mechanisms then talk about the data and software
[02:45] we're going to cover two instruments today one that's a spaceborne and one that is airborne and including analyzing dual pull and
[02:56] quad pole imagery and last we will display the results of our classification so why polarimetry so here's one image of an area that our
[03:12] group was studying last year it's a libreville in gabon and we can see here several land cover
[03:20] types types we have a forest we have mud banks soap and water and different types of vegetation
[03:29] mangroves that are dense more tall mangroves mangroves we have a dry forest we have urban areas the city of
[03:39] libreville itself and we have exposed ground the airport is a very good example of that so so the question here is
[03:51] how can we use star to complement [Music] [Music] optical data and resolve some lend cover types that cannot be mapped with
[04:00] reflectance data alone so here's the same location imaged by the uav star instrument in libreville we flew this area in march of 2016.
[04:15] so as you can see you can resolve a lot of different land cover types types this is a false color image meaning that
[04:24] the the colors that you see here are capturing different polarizations so the red channel has hh the green channel has hv
[04:35] and the blue channel has vv polarization so during this presentation i hope that you will gain some intuition about what
[04:44] these different bands are providing in terms of land cover information so radars produce microwaves they are electromagnetic
[05:00] waves waves and the direction of the electric field lies in the plane that's perpendicular to the direction of propagation and
[05:11] that's defining the polarization of the wave wave in our case here we're going to talk about two different types of
[05:17] polarization vertical and horizontal so in dual pol instruments the instrument transmits h or v meaning horizontal or vertical
[05:30] and they receive h and v simultaneously then if we talk about a quad pole instrument instrument those are able to transmit h and v
[05:42] and alternating the pulses and again they receive h and v at the same time so this is one table
[05:52] summarizing summarizing dual and quad pole instrument the dual pull instrument we will study today is sentinel so
[06:01] the data set will have corresponds to this column on the table transmitting v and receiving vh and vv
[06:09] or receiving h and v and the other instrument uavsar is quad pole which means we transmit h and we
[06:19] transmit v and we also receive h and v so you have all those four bands in a data set
[06:34] so again the amount of return signal for different polarization depends on the physics of how the signal interacts with targets on the
[06:43] ground so you can see how having polarization diversity helps you resolve different land cover types so here is one example from the recent
[06:56] literature literature these authors were studying land cover types types in canada using the radar set instrument so radar polarimetry is defined as the
[07:13] study of using multiple polarimetric returns to infer information about a surface surface there are many applications for
[07:24] for mapping land cover types with polarimetry and that includes cryosphere vegetation studies and hydrology and if you look into the literature you
[07:37] find find two main types of studies some researchers are concerned with building theoretical models they sometimes are also called forward models
[07:50] that simulate the scattering of the signal over different types of surfaces so those are more theoretical models
[08:02] there are also more empirical studies that show with observations what the signal is at different land cover types
[08:12] so we are looking into different polarization signatures so what we want to understand is um how do you navigate this literature
[08:26] and get the most information for your own studies and to do that you have to understand the
[08:33] basic concept of scattering mechanisms so the features we see in polarimetric images are due to different scattering
[08:43] mechanisms mechanisms meaning that the received signal changes changes as it interacts with targets on the ground and here are three types of important
[09:00] scattering mechanisms you have a surface which is something you might find on exposed ground you have volume scatter
[09:09] which is common on vegetation and three canopies canopies and you have also double bounce which is when you have two perpendicular
[09:20] surfaces surfaces and and this is common in areas in urban areas where you have these flat surfaces like
[09:28] buildings so the first thing we need to understand is how this information can be encoded mathematically and it's represented in a
[09:39] scattering matrix in the quad post scenario when you have hhv hhv vh and vv this information is
[09:51] encoded in the three by three coherency matrix also referred to as a t3 matrix so this is what it looks like
[10:02] and and during the course of your work you're not going to have to compute this matrix but this is the starting point for any
[10:11] analysis and the if you work on polarimetry software it's going to prompt you what matrix do you want to
[10:18] store your data so it it's useful to understand that what would i like for you to take
[10:27] from this well well first first there are some complex numbers here so the star denotes complex conjugation
[10:40] and this essentially means that this matrix has information about the power as well as the phase of the received
[10:48] signal signal the other thing that's relevant is that we're doing some averaging here which means for each pixel where you're using a
[10:59] moving window to to calculate those quantities so all nine elements of this matrix are calculated for each pixel in your image
[11:12] using averaging using a moving window so again as a first step of working with polarimetric images you're
[11:20] going to be prompted to select the size of this window and this is why this is how the size is used is used in
[11:27] the averaging during the construction of the scattering matrix and then the next step would be okay now
[11:40] that you have all this information could you reduce this to a limited number of descriptors to understand
[11:49] understand the scattering mechanisms on the ground so what i'm going to do is to provide you with one example of how you can do
[11:58] this this and that's called a decomposition there is many different decompositions that we can do but this is a commonly used in the
[12:10] literature so this is why we're doing this one today the hr for decomposition is based on the
[12:18] eigenvalue and eigenvector decomposition of the t3 matrix so we're starting off with our coherency matrix and we are applying some matrix algebra
[12:30] there there to get to this part so so these lambdas are my eigenvalues and the u three are the eigenvectors
[12:44] the important thing to know here is that by doing this you get independent scattering mechanisms the eigenvalues are used to calculate
[12:56] entropy entropy and that's referred to as h and the entropy is a function of noise or into depolarization
[13:05] so essentially it's the same entropy that you use in diversity studies in biology and in other studies and thermodynamics
[13:15] and the idea is how likely are these different states to be found in your in your pixel
[13:23] so with the low entropy entropy closer to zero you're more likely to be dominated by a single scattering
[13:31] mechanism mechanism and with higher entropy closer to one all scattering mechanisms are equally likely to be found in your pixel
[13:43] entropy is a dimensionless unit and it goes from zero to one and this is one example this is a site
[13:52] in costa rica and you can see at the top you have a screenshot of google earth and we can see
[14:02] some plantations here and you can see mangroves here and and these are all green right you don't see
[14:09] a lot of difference in reflectance in those areas but when you move to the polar the entropy results you can see
[14:17] that the mangroves have higher entropy there's more noise in the mangroves because of the canopy shape whereas more regular plantation sites
[14:28] have lower entropy and then when you move to bare ground the entropy is even lower closer to 0.1
[14:41] so we talked about h what about alpha alpha is also based on the same decomposition it's another output that
[14:50] you get out of the same decomposition and this is alpha it's it's part of the eigenvector eigenvector result
[15:01] and and the important thing to know is that alpha is an angle and it represents the dominant
[15:07] scattering mechanism in your pixel and this is how it's calculated it ranges from 0 to 90 degrees
[15:21] and and this is what it represents so alpha go closer to zero means we have a surface you have surface scattering
[15:31] as you get closer to 45 you have volume scattering scattering volume scattering sometimes is referred to dipole because
[15:41] volumes or elements like canopies they are usually modeled as dipoles dipoles are cylinders cylinders so canopies can sometimes be modeled by
[15:54] several cylinders you know randomly oriented oriented and then at 90 degrees we are approaching a dihedral scattering which
[16:04] is double bounce which is again what you would see in a in buildings so then using information from alpha and entropy
[16:21] we can develop an unsupervised classification classification the idea is to have different regions that have values of entropy and alpha
[16:33] and they have distinct scattering mechanisms mechanisms so it's a two parameter system used to classify different types of scattering
[16:43] behavior behavior we have nine zones as you can see here it starts with zone one two three
[16:52] four five six seven eight nine i'll do this zone is called in an unfusible zone so we're not going to see
[17:00] a lot of values in this area we're going to focus on the eight values here that are inside the feasible zone
[17:10] and when you do this classification the results can be combined with other layers it doesn't have to be the end
[17:18] point of your research research actually it's a very good starting point to understand the physics of what you
[17:26] see on the ground and this is one example a recent example of a paper again using radar set imagery
[17:40] so for entropy entropy is on the x axis and again we have values ranging between zero and one
[17:49] you have three regions it's very straightforward straightforward low medium and high entropy then if you move to
[17:58] alpha you all have three regions the the surface surface dipole or volume and you have a multiple
[18:11] which is a dihedral or a double bounce so let's let's do some examples to see what this
[18:22] looks like for a real data set the first thing i want to do is to look into sentinel data although sentinel is
[18:32] not available at four polarizations you can still do band ratios you can compare the amount of received signal for
[18:42] vh and vv for example and because sentinel is available almost globally and with a very good temporal sampling i think
[18:54] that's a good starting point the first step that i did was to download sentinel from the alaska
[19:02] satellite facility i downloaded an image covering libreview the area that i showed the beginning of this presentation
[19:11] and and to to recall that the sentinel is a c-band instrument so the wavelength is around five centimeters
[19:21] it's a space-borne instrument that's operated by user the european space agency agency we have two polarizations in this case
[19:30] we are using the grd product and the resolution is 10 meters in this case i'm showing you how to
[19:37] download one product at the end of the results i will show you how to combine information from two different dates
[19:47] it does help to do temporal filtering in this case it helps to beat down the noise noise so we're gonna do two dates today but
[19:56] you can do more than two dates i'm not going to go into details into the the sentinel processing because this was the
[20:08] focus for session two i'm just going to summarize here the basic steps we started with the zip file
[20:16] we subset the data and then we calibrate and we multi-look and geocode the results results and the results that i have here are
[20:27] saved as geotiff files because um that's my personal preference but as long as you can bring them into qgis
[20:36] we are fine and at the end of the day we have two files v and vh to bring it to qgis
[20:44] and i use the snap data the snap software to do this analysis just like you did for session two
[20:58] the uavsar processing processing requires more work but you also get more interesting results because you have four polarizations
[21:09] since this is new i'm going to more details with you today so so uav star is the uninhabited here aerial
[21:18] synthetic aperture radar it's an airborne instrument so it's a radar that's uh flying on the belly of
[21:25] an airplane it's an l band radar so the wavelength is bigger than sentinel it's fully polarimetric so four
[21:36] polarization polarization and we are using the grd product meaning it's it's it's geocoded it's in wgs 84
[21:47] projection projection and the resolution is about six meters so if you go on the uav star web page you can download this product
[22:01] and if you go on the data search page and click on the product this is what you see
[22:08] you see a list of links and what we want is the orthorectified product product uh we don't want this length range
[22:17] products those are in radar coordinates so it will be uh very hard for us to overlay the results
[22:25] with um with other data sets uh so we want the all six grd files uh the kmz file helps us uh have a quick
[22:39] look of the data and we also want the metadata file that's also called the annotation file the software used to do a polarimetric
[22:54] decomposition of uavsar data is called pulse star pro poster pro was developed by the institute of electronics and
[23:04] telecommunications of ren and they are now in charge of supporting this this package package it's available for windows and linux
[23:16] and and you can also compile at the macintosh using the linux source files that's what i do
[23:24] and and you can use a graphic user interface or command line interface and and today i'm going to use
[23:34] the command line interface because i work on a macintosh but but i'm showing here one example that's also
[23:43] posted at the uav star website where you do another type of decomposition using the graphic user interface
[23:53] so so i recommend that you try it as a comparison comparison and if you're more comfortable with gui
[24:00] you see that the steps are the same so when you're going to pulse or pro the gui interface your first window
[24:14] looks like this for the command line interface you would open your terminal and go to the soft
[24:23] directory directory the soft directory has all the software has all the routines and he has all these different
[24:31] directories directories so the most relevant for us and the ones that i use more frequently are the data import
[24:41] which helps us ingest the uav star files the bmb process that helps us make some quick looks
[24:51] and the the data process single which gives us all the classification and decomposition routines so if you just are curious about the
[25:07] routine routine it's easy to just type that routine name on the terminal to see its usage so for example if i go to the directory
[25:18] soft slash data process underscore single single and you type wizard h alpha classifier the the pulsar pro is going to complain because
[25:32] there is no arguments to this function but then it's going to give you the usage so these are the parameters
[25:41] and there are some parameters that are very common to every function your input directory your output directory for example
[25:52] and the offset row and column this is used to to subset your image we're not going to
[25:59] use it today but it can be useful and and other input files for this function an optional parameters
[26:14] so as we discussed before the first step is to ingest our image and make a coherency matrix
[26:22] we don't have to do that by hand poster pro will do everything for us so all you have to do is to call this
[26:30] function uav star underscore convert underscore mlc.exe and what you give to pulser pro is your annotation file which is here
[26:44] and you provide the names of all the grd files remember there were six so one two three four five six
[26:54] the output directory um i'm calling it t3 but you can call it whatever you you prefer the output
[27:05] directory format is t3 because there is many different types of scattering matrix matrix but today i'll focus on t3
[27:16] the input number of rows and columns is something that you can find in the annotation file it's just the size of
[27:23] your raster the offset row and offset columns as i mentioned before is zero no offset today the final number of rows and
[27:35] columns is the same as before and uh i'm taking looks and rows and columns so erica talked about taking looks in
[27:45] session two we're going to do the same here so 2 by 2 and and after this we're going to have a t3
[27:56] matrix after you have the t3 matrix you can call any decomposition you want but today we're going to focus on the hr
[28:08] for decomposition so this is how you would call from the command line it's the h underscore a
[28:16] underscore alpha decomposition and the input directory is t3 which as you remember was my output directory before
[28:29] and my output directory i'm calling it decomposition decomposition the format is again t3 and remember we talked about how
[28:40] we take a moving window to calculate uh the values in the t3 matrix so this is what we were talking about
[28:52] here you have a a window in rows and a window in columns and this is what's used to to do our
[28:58] calculations so this is relevant and i'm using 7 by 7 window here but you could use a larger
[29:09] number you could use 9 by 9 10 by 10 and and play with the results the final number of rows and columns
[29:22] is something that depends on the number of looks so because i was taking two by two looks
[29:28] this number is half of what i had initially initially and these are some flags indicating the outputs that i want
[29:39] the flag 2 and flag 3 and flag 4 will produce the entropy alpha and another interesting parameter called lambda
[29:51] so so you can make a flag of one for all of them and inspect each one of the files
[29:57] if you prefer then once you have your results what you would call is the classifier the classifier
[30:08] would would take the decomposition results and define the zones so each pixel is assigned a zone between 1 and 9.
[30:20] so you are providing a again the input uh directory which is the directory where i put all the results for this
[30:30] function function you have an output directory which you can name whatever you prefer i'm naming it the classification
[30:39] offset to zero as before the number of rows and columns hasn't changed is the same as before
[30:50] and and these are the types of classifications that can be done and i decided to do today nh
[30:58] alpha decomposition or classification sorry so so this is set to one and uh poster pro has a set of color
[31:07] tables so i i'm giving it a caller table later when you get your results it's going to be a a binary file and you can
[31:16] you're free to change the colors as a last step you need to get your binary file and open it in qgis
[31:28] in order to do that there is one intermediate step you have to make an nv header header the mv header tells qgis
[31:37] how big your image is the number of rows and columns and where it's located on the map and the pixel size as well as
[31:46] the data type so this is one template uh nv header and you don't have to work with
[31:55] the nv software qgis will read images with nv headers and also arcgis starting at 10 they will
[32:05] read envy images so what you need to change here is the number of samples and lines and that's
[32:18] going to be found in the config file that the poststar pro produces it's a small text file and
[32:29] it's also the the numbers that we have here but if you want to confirm you can go to the config file that is produced
[32:36] by this routine and then uh for the uavsar notation file you would grab the location of the upper left pixel
[32:48] this is how qgis would know where to place your image right this is an imaging gabon this is where my upper left pixel is
[32:59] and i also need to provide the pixel size size so this is the pixel size for the
[33:05] original uav star image but because i took two looks i multiply this by two so this is the
[33:13] final final size and this is what i have here so if you have all of this we're using data type four because it's
[33:22] float float you should be able to import your poster pro results into qgis qgis and by the way this manual step is
[33:33] necessary even if you use the gui interface at poster pro as far as i understand no no nv header is produced
[33:44] so so there is an extra step that's needed to be able to visualize your results outside of poster pro
[33:54] so let's bring it into gis environment now and get some intuition for the results first i want to show you what we can see
[34:05] with sentinel data in this case we're not doing any decompositions decompositions it is possible to do decompositions with
[34:13] dual pole data but it it's not the results are not as useful and it's not as common to see
[34:20] those on the literature however what sentinel can give you is a very dense temporal sampling so what i did here was
[34:30] i took two dates and for the vh channels i i took the mean between two dates and this is what i have here march 20th
[34:40] and march 8th and i i put that on the green channel then then for vv i have one date march 20th on the
[34:53] red channel and i have another date on the blue channel so the question is what are can you
[35:02] visualize different scattering mechanisms in this image which is a c band image by the way so if you start here and you look at
[35:13] open water calm water you can see it's very dark and looking at a few pixels in this area you will get
[35:23] these values so those are very low values values indicating this was very dark surface what we have here is specular reflection
[35:34] very little of the signal that is transmitted is received back by the sensor sensor so that's why these areas are very dark
[35:45] so so the next fair that's interesting is the airport the airport if you remember is right here
[35:53] and the airport is dark but it's not as dark as calm water you can see the values are slightly
[36:02] larger more positive it's not easy to see it on the image but you can see it with the numbers
[36:10] and i expect that surface scattering is influencing these results results so this is a surface scattering with a
[36:22] bare ground next if you look at the city of libreville which is here if you expected a few pixels in this area
[36:32] you would see there's a lot of buildings and you have a lot of double bounce but this means that
[36:41] the single pole images would have be would be very bright bright so you have a very more positive value
[36:50] here for vv in both days and not so positive for vh so this is something that you observe
[37:03] at the the single pole result you don't see that with the vh or with hv now the last air that's interesting is
[37:16] the forest which is here and the tall mangroves which are these areas here close to the river channels
[37:25] so these areas have a higher vh contribution relatively relative to vv so what's this telling me is that we
[37:39] have more volume contribution so volume is what gives us a bigger contribution of vh because when the signal interacts with
[37:51] the canopies there is depolarization that means that the incidental wave has one polarization and it changes before it's recorded by
[38:03] the radar so let's look at the decomposition results for uavsar now so first we can look at alpha results
[38:18] and remember alpha is an angle and and values can range between 0 and 90. we don't have the full range here
[38:28] in order to get an alpha closer to 90 you have to have an ideal scatter something like a metal plate
[38:36] so the values get up to 55 in this scene scene and what you see is the open water has
[38:46] lowest has the low values values as well as the runway they're not perfect surfaces but they're closer to being a surface
[38:58] then then if you look into the forest forest has a value that's closer to 45 as you would
[39:04] expect because there's a big contribution of volume scattering and the same is true for tall mangroves which are here
[39:17] and lastly if you look into buildings they have the largest value of alpha which is around 55
[39:26] so these are the very bright areas that you see here the city of libreville then then this is a map of entropy
[39:39] you can see how the results are different from what you see with alpha so we're getting complementary
[39:47] information here with entropy you can see that calm water has a very low entropy values so entropy
[39:57] can go again from 0 to 1. and then the runaway also has somewhat the higher entropy values
[40:11] as well as buildings and the highest entropy you see is the forest and tall mangroves in this case you have more different
[40:21] scatters you have branches leaves trunks trunks this indicates that you have more diversity of scatterers in the vegetated
[40:33] areas areas as compared to the city and compared to the runway to the airport lastly there is one measurement that is
[40:45] the the total power or lambda which which is not as commonly uh talked about in the literature but i
[40:55] thought was interesting in this case because it's very bright in the urban areas areas so i thought it would be worth showing
[41:05] this to you today so you can see the lambda value for buildings is extremely high much higher than it is
[41:13] for for any of the other classes so if you do a classification this is what you would see
[41:25] at the end and i brought my image into qgis qgis and i changed the colors to look nicer
[41:32] and this is what you see so so if you start with low entropy zone 9 is yellow and this is my water here
[41:44] water is low entropy and then if you look into the forest forest is class 5 class 5 is a higher entropy
[42:00] as you can see here and class 5 is also in this area that corresponds to volume scattering as you
[42:09] would expect for forest so looking at other areas here we have the blue areas which correspond to the
[42:18] city city that's zone four four and if you go back to our curve here zone four is the dihedral scattering
[42:29] or double bounce and it has medium entropy just like we saw before doing manual inspection of our image
[42:42] and what else is interesting here these these pink areas are more disturbed areas they have bare ground so
[42:53] disturbed sites near forested areas as well as the mud banks that are bare ground so this is zone six which if we go back
[43:06] into our curve here they have a lower entropy or i'm sorry they have medium entropy and they have a lower alpha angle which
[43:19] indicates indicates surface scattering so there are different classifications that you can do with these decompositions decompositions but the point here is that they are
[43:32] unsupervised classifications and they describe the physics of what's on the ground with a few parameters so they're very useful starting point
[43:43] for your land cover classification and if you want to go further into this i wanted to suggest some additional
[43:55] resources resources there are tutorials tutorials for pulsar pro which you can find at the esa website natural resources canada has a good
[44:08] tutorial on polarimetry and the link is here here and the european space agency has additional training courses including
[44:19] videos of a polarimetry tutorials with that i wanted to thank you for participating again and i'm ready to
[44:29] take your questions thank you i
