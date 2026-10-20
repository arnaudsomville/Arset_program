# Image Processing Hands-On Exercise, Session 3/3

`https://www.youtube.com/watch?v=YD-CHY0s5pU` · id 31 · 1:38:28 · module 10 — Processing Satellite Imagery for Monitoring Water Quality

[00:05] here welcome back everyone this is the last session of this webinar series on monitoring water quality using satellite
[00:13] image processing we already had two earlier sessions in the first one we had an overview and analysis of NASA remote
[00:23] sensing data especially for head monitoring we focused on auto fill a concentration we also talked about other
[00:30] parameters we had an overview of Geovany and ocean color web this was in week one we downloaded some data and we did
[00:41] analysis using seed as in week two we had a demonstration of different features of sea - and then you worked
[00:51] with Lake Victoria file or should follow file that you downloaded from ocean color web and then you analyze that
[00:57] using C - you also did not only just visualization but calculated statistics and also did mathematical operations
[01:07] using spectral reflectance is for Lake Victoria file so today now the focus is going to be on little further if we do
[01:17] not have level 2 files in this case we had level 2 data for Modi's from ocean color but something like Landsat
[01:26] operational in imager we don't have level 2 data in ocean color website so how do we analyze Landsat data set so
[01:34] that is going to be the focus of today again this is the reminder that this is the website where all the information is
[01:42] and this is the listserv that our set has where you can sign up so overall outline for today is that we'll have an
[01:51] overview of image processing there is a special software it's called ocean color science software or OCS SW this is part
[01:58] of the C - a software so um we are going to see how you can install this or
[02:05] download this within C - and we will also see how we can analyze this level 1 Landsat data - level 2 how to get level
[02:15] 2 data from that once you have level 2 data data then you can use seed as to do analysis
[02:21] that we did last week using modus level 2 data so we'll have convert level 1 to level 2 and we will focus this on Lake
[02:31] Victoria we will have images for Lake Victoria from lens fed only and we'll do the conversion and then Africa is going
[02:39] to demonstrate how to use Landsat images and in situ data which help you develop algorithm and she is going to focus on
[02:48] gulf of mexico region for that so we will have two demonstrations and then we will summarize our cds and then we'll
[02:55] have question answer so this is an overview of this ocean color science software Oly OCS SW and we again want to
[03:07] acknowledge our ocean biology processing group friend Daniel Knowles he has helped us with some of these slides and
[03:15] also in explaining how OCS SW works so here is the once you go to see that you
[03:24] can download installation and then I will quickly demonstrate after the slides how to do that but once you go to
[03:34] see - there is a way to download and install OC ssw and once you click on that you will be asked for different
[03:44] missions which mission you want to work with it install software for that and we are going to do that for only in this
[03:53] case we're going to use this GUI that we've been using but you can do this by using command line configuration also
[04:02] and the procedure is given here so if there is it there is no software available for any particular sensor then
[04:13] you will get a error or that say a process failure will occur if the mission is not installed so you have to
[04:21] install for particular mission if the non mission is not available then you will not be able to of course to the
[04:27] analysis also note that all Chi from Sentinel 3 on that is only available through command-line and not through GUI so GUI
[04:36] it we're going to focus on Landsat here which is available so it is either automated when you will demonstrate that
[04:45] when you go to see - and try and install the software it is either automatic in the sense it finds where this directory
[04:54] is or if it is not in your path you may have to do a little bit of manipulation
[05:01] and make sure that the software directory is where your seed ass is looking for ok so that's a little bit if
[05:11] you can't find it then you may have to make sure that she does knows where to point the directory path has to be
[05:18] included once you pick the sensor or mission data then you can just run and then it installs the software this
[05:28] software as you can see on this side there are multiple options so you can have level 1 browser now remember that
[05:38] the demonstration we had last weekend see - question that you use then it was mostly for it was entirely for level 2
[05:46] data and not level 1 this software allows you to look at all levels so level 1 you can browse and you can
[05:54] generate map level 2 also you can browse and generate map you can convert from level to level 1 to level 2 and what is
[06:04] important to know here is that when you go from level 1 to level 2 you have to
[06:09] apply this atmospheric correction and for Landsat if we will do that here but that requires ancillary data so that
[06:19] requires data for atmosphere about clouds about aerosols these data are also available through this software and then you can use that there is your
[06:33] location and calibration currently it is mostly for motors and Weir's there is X Factor's the special extraction and also
[06:42] by-product you can do there is level 2 Benny for level 3 so you can bin level 2 data in particular
[06:51] grid to get uniformly graded level 3 data and you can have level 3 binning from multiple level 3 files or you have
[07:00] you can do that too there is map generation for level 3 and you can look at metadata and also have multi level
[07:07] processing so there are multiple options we're going to focus on this part level 1 to level 2 conversion of lengths at
[07:15] Olli data along with correction of length set data so I will have that little demo now in which will convert
[07:24] Landsat 8 only data level 1 data to level 2 data and in between we'll see how atmospheric correction is applied
[07:40] this is the demo to generate level two products from level one data from Landsat so in this case we would use the
[07:50] L to Gen tool that is available in seed us to do that process first we will open
[07:56] our citizen and we will navigate on the top menu to OCS SW and select LT gen in
[08:07] order to LT gen to be activated you feels you have installed the OData processors on their OCS SW and select
[08:17] the sensors in this case we are going to use Landsat data so the sensor is only and you click on run that takes some
[08:27] time and after that has been installed all these different tools will be available we are going to work with LT
[08:36] gen we click on LT gen and this is the window for this tool in the main window
[08:43] you have to include the input file and that will be the metadata file for the Landsat imagery and automatically will
[08:54] assign a name for the output file and there you can also see there other options that you can navigate and select
[09:04] different parametrizations to perform the atmospheric correction and to generate the right geophysical parameters so in the main window we are
[09:17] going to select the input file which is the metadata file of our Landsat data the output file name automatically load
[09:37] and here you can see in which folder is going to be located and if lt-gen has been installed correctly you will get
[09:48] this information if you get an error that means that eltridge and didn't install appropriately then you can click
[09:59] on get ancillary data that's going to be useful to perform the atmospheric correction phil should load in this
[10:09] window as well then in products you can navigate to the different products that are going to be generated as a result of
[10:19] running the lt-gen to and if you want more than the ones that are selected by default here is what you go and select
[10:29] those additional products as you can see if you go to radiances and reflectances the remote sensing reflectance is
[10:37] selected so those plants are going to be generated and these are the spectral bands that are selected to generate the
[10:46] products that includes the deep blue the blue green in case you will have you will like the
[10:56] other bands then your infrared and the sewer bands you can also select those here we are going to leave everything as
[11:04] a default but a this is to show you the different options that are available and you can also select the water living
[11:14] radiance a as a as a product and that's by a spectral band as well in the derive
[11:22] geophysical parameters you can see that chlorophyll a is selected and that there are also other products if you will
[11:32] light a surface temperature you can also select it here and regarding more information about these different parameters you can check the
[11:42] documentation that will share the previous week weeks about the lt-gen tool there are links there that direct
[11:51] you to the a to more information for this for this tool and the different capabilities that it has so we are going
[12:01] to leave this as default in processing tools we are going to modify some of these parameters in order to obtain an
[12:12] appropriate product in our area as i mentioned i am focusing on lake atitlan which is located in guatemala is an
[12:20] inland water body relatively small and the image that we are processing is during an algal bloom event the current
[12:33] parametrization that the tool has i already know that is not going to work there because it has been created for
[12:41] ocean waters and one of the parameters that we can change in order to work in inland where were these bodies with
[12:50] Landsat data is the aerosol parameterization so in this case we are going to select no aerosol obstruction
[13:01] and this is because the atmospheric correction tends to fail in the areas in water bodies that that
[13:11] contain very turbid water so we select this one and I will also like to show you the other options that
[13:21] lt-gen has the ancillary inputs on this download climatology data that is useful for the atmospheric correction and you
[13:36] can also see that there is information about the algorithms that are used to derive the geophysical parameters such
[13:45] as chlorophyll a in miscellaneous you can also change the coefficients that are assigned for the chlorophyll a
[13:57] algorithms and this is where you can input your own coefficients in case you have already calibrated one of these
[14:07] algorithms for age your area of interest so we are going to let this a as it is
[14:14] and we are going to run this tool this will take some time after lt-gen has run you will get this window of successful
[14:33] completion you click OK and the product will automatically upload in the Siddhas platform so you can see that the
[14:44] structure of the products are created is very similar to the ones that we uploaded a from the the ocean color
[14:55] website so we are going to focus on the raster data set and these files that are here were the ones that were selected in
[15:04] the product window in lt-gen so we can see that we have the chlorophyll a product and we are going to double click
[15:12] in this one and it takes some time to load given the spatial resolution which has more detailed than Modi's data and
[15:24] and this is the image we can assume in I told you that I was working on lake
[15:31] atitlan in Guatemala so we are going to zoom in to this area this was during an algal bloom event in 2015 and this is
[15:46] the lake we are going to go to the color manager and we are going to modify we
[15:54] can modify the range and the colors as well and we can also activate the masks as we
[16:14] have we have done before the land mask and if I navigate around the image I can see the values of chlorophyll you can
[16:29] also try to run the L to Gen with other parameterization is you leave it if you leave it as default you will see that
[16:42] you may get some errors in case you get errors such as the atmospheric correction has failed first you have to identify what the
[16:53] errors were and that's why it is useful to navigate on the final product and identify a what the flags are for those
[17:07] pixels for example here I didn't get data and I can zoom in on this area and I can expand the flag pile and it says
[17:33] that this was a cloud because in the cloud eyes it has been a sinus true so this may be the reason for this one if
[17:47] we zoom out and in all this area we know that this is not water and I know
[17:56] because I know the shape of the lake but we can have an idea what happened here and this has a been selected a coastline
[18:10] if we want to know what each of these flags mean you can navigate to the mask a layer you will find the same flash
[18:21] and he will give you the coast sea has been is a shallow water so this is for
[18:42] the demo of using the lt-gen tool and then we will work with Cedars and in situ data to compare in situ
[18:53] observations with satellite era observations of chlorophyll concentration this is the demo to start working with in situ observations and
[19:11] satellite observations for water quality in terms of in situ observations we already mentioned before that a sylla's
[19:20] website provides a good resource to obtain in situ observations for water quality so I'm going to demonstrate how
[19:29] to search and download these data and use it in the city this is the website for Sivas and you can do a file search
[19:41] here and you can select the times in which the measurements were made our general search run 2005 to 2018
[20:01] you can select here the geographic area of interest I am focusing on the Gulf of Mexico and then you can also select the
[20:12] parameters that you are interested on in this case I am interested on chlorophyll so I'm going to select this anaconda
[20:20] products and you can perform a search and decent the results it indicates the temporality and the location and the
[20:36] product and we are interested on also they have a water depth all of these measurements have a attempt associated
[20:43] and each of these files represents measurements done by different campaigns and you can see those results in
[20:50] different ways you can see it as a map and you can zoom in to see the locations
[20:58] and you can also create a plot for example you can select it and leave a parameter we are going to for total
[21:17] chlorophyll and you can also include the depth of the measurement and as you can see the plot all day dates for the
[21:30] measurements these are from 2010 and then you can click on this add the file will download the fact that you are
[21:40] obtaining this information from civil doesn't mean that automatically is going to be ready and in the right format to
[21:48] be uploaded into Siddhas you have to check actually what the format is and for that I have a file here that was
[22:01] obtained from Siva that is in the right format and I want to call your attention about the station data these are the
[22:12] name of the measurements so in a way at each point and all this information has to be tab limited when you see here in
[22:23] the delimiter has to be by tab and the fields this is another important parameter you have to have it organized
[22:31] by day time the station this station has to be defined here and lat/long then the format for date and time is also
[22:47] relevant if you see here in the first measurement date is given by dears with four digit month with two digits
[23:00] and day with two digits and then the time is given by hour minute and second and here in the unit is specified what
[23:14] is the format and exactly in that order and with those units and in that format is how the information has to be for
[23:26] Sita's to be able to read it for example if you click on anything and on any of
[23:31] these first results that we obtain here we can go to this one and you can do the
[23:40] double check station is not defined and then in the fields and the order is different the delimiter
[23:49] is comma not tab and he has sample you should be a station were also has a station one and both field Deb water and
[24:01] then it has German and date at separate fields and we already saw that the former has to be late this one so you
[24:10] have to reformat the information the deck the data into appropriate one in order to see this to upload it and I
[24:23] recommend that you do that in the text editor for example this one de we know that is the right one we can select this
[24:33] love this and we copy and and we open a text editor you convert this text editor to plain text and paste this information
[24:50] and then you can save this file as texts as plain text these words are read in the right format
[25:15] so I don't have to do any modification for some of the results that I obtain for the Gulf of Mexico I did have to
[25:24] format the date information to have it similar to this one and I also trained the products because there is more than
[25:32] chlorophyll here as you can see there are other pigments are being measured so I just left the water depth and the
[25:39] chlorophyll content and now we are going to open these files into Siddhas now that we have seen how to search and
[25:54] download data from Sivas regarding in-situ measurements for water quality we are going to see how to upload those
[26:02] measurements inside us and compare them with satellite observations in this case I'm going to demonstrate a two areas one
[26:12] for the Gulf of Mexico and one for the north east coast in the u.s. very close to Chesapeake Bay first you need to know
[26:25] where the measurements that you have overlap your graffiti with a satellite image and you have to obtain that
[26:33] satellite image level two I'm going to work with Morris level two data downloaded from the ocean color website
[26:42] and for this for the Gulf of Mexico example I have already seen where the observations that I have a are and
[26:54] therefore I look images for that and also that overlap not only geographically were also in terms of
[27:04] time they are going to open the file and we can activate the nod mask to see whether where we are and now that I
[27:29] already have an image loaded and I know that my observations overlap or fit into this area I'm going to import this
[27:39] Zbyszek information I can do it different ways I can use the icon that is on the top menu of the Siddhas
[27:47] platform or I can also go to vector import and see what data I want to use that one
[27:56] and I'm going to search for my file and once you have a loaded line no error has appeared it seems that it was
[28:15] successful but it still is hard to see where it is you can see that the file gets loaded and associated to the image
[28:27] and the file image that you are looking at right now in order to edit how the layer looks you can go to layer manager
[28:38] and in this button you can edit and we can change the colors here and instead of a cross which is how it's being shown
[28:53] right now you can use a circle and now it's easy to see easier to see where our
[29:00] observations are as you can see here when you open this file do you have the pixel position the geolocation date of
[29:14] the measurement time the station name type of the measurement and the parameter of our interest in this case
[29:21] total Pro review a and in the depth you can see that there are measurements that were done very deep into the water at 70
[29:32] meters and 40 and 80 so in order to compare with our satellite image we should compare only measurements that
[29:41] were done at the surface level and we are going to reformat this Sivas data set even further to trim it only for the
[29:52] measurements that were done at the surface level and I have already done that so I'm going to upload that layer
[30:00] so in vector import civils datum and right here and now you can see that it was added to our files here in the layer
[30:29] management I'm going to uncheck the previous see last data and I'm going to change this one okay and these are word
[30:52] locations put back here we can open these and notice that contain only the measurements that work done at the
[31:00] surface level now we can compare these with our chlorophyll measurements from satellite images we can do that here
[31:11] it's still showing the previous plot so we are going to upload that update that we have five data points and obviously
[31:37] we do need more to do an appropriate correlation and to have a better idea of how the satellite derived measurement
[31:46] compares with a in situ observation but this is only to show how that comparison can be done in addition I would like to
[31:55] mention that on the y axis you have the chlorophyll concentration measurement derived from the satellite image and on
[32:05] the x-axis you have the chlorophyll concentration measurement from the in situ observation and you can add the
[32:15] regression line to see what the correlation is you can also change this box size which is going to select the a
[32:28] box of pixels for example if you select 3x3 some other pixels of 3 by 3 or 5 by
[32:36] 5 7 by 7 and does the mean value that is going to be shown here in the table and
[32:47] it also calculates the standard deviation of those pixel values and that's what is shown here you can change
[32:58] also the tolerance here another useful tool is the profile plot you can find that tool on the top menu
[33:13] of the zetas plataform here and this is useful if you want to compare the in-situ measurements that you have in
[33:25] your file with a satellite image besides the correlative plot you can also use this as a first view of the
[33:33] information and here you can use the file in this case we are going to select the file that it has the measurement for
[33:45] the specific date and we are looking at in the image and in the data field the chlorophyll a the once you have that you
[33:56] can also select the box size if you only select one thus taking into account only one pixel to pixel that overlaps with a
[34:07] measurement or the path that is being selected here by this line if you select them a box size with more pixels so here
[34:19] it shows the standard deviation in the color around the graph and once you move you can see in the image where those
[34:34] values are so is recording here in the graph the values from the satellite image you can also see that in the table
[34:45] and like in the correlative plot you can move between the plot and the table that the plot is based on here you can see
[34:53] the mean value that is the the mean value of that number of pixels that were selected in the box size the standard
[35:01] deviation and the real reference value so this is another useful tool an additional quick example to keep
[35:21] processing and comparing in situ observations with satellite imagery will be a by opening the data that we have
[35:28] for the north is close very close to cheese back way so you can load these files you get directly from the exercise
[35:39] and that's what we are going to do right now I already have downloaded the image so we can go to file and open this is
[35:54] first one and it looks this is in a very different area as you can see here so we
[36:01] are going to load a chlorophyll product and we can activate the mask so to have a very idea where we are the land mask
[36:12] and that you can see Chesapeake Bay is here I already know that the measurement and are available through Sivas and that
[36:20] you can also download from the link that was provided a overlap in with this geographic area so I going to upload
[36:28] those Sivas measurements or in situ measurement and in this case I going to use this tool of the import field
[36:36] measurements and you can't load that file that was provided and save it as plain text and then you can load it here
[36:49] I here you can see that it loads in the over the image if I didn't have the
[36:55] image if I try to do this on my original file over the Gulf of Mexico it wouldn't load it would tell me that
[37:03] the points are outside of the area in that I have available so we can modify in here the files you can see that the
[37:16] text file got loaded and is associated to the files for this product I seven with this name and we can edit
[37:27] the layer here so we can go to layer manager and you click on the pencil and modify this I wanted to destroy black
[37:42] man instead of across you can use a circle so it's a little bit easier to see on the image and you can see that we
[37:51] have multiple measurements there but actually to have a very understanding of what we are looking there we can go here
[37:59] and double click on the file and you can see the type of information that is available so we have measurements first
[38:08] for multiple dates as you can see here it also contains the time at which the measurement was made and multiple
[38:21] products were measured and we have total color fill a but we also have other pigments another type of information as
[38:32] you can see we have only loaded one image therefore a let's check what is the date of the image that we have here
[38:41] and amis from Iraq so in that file you can go to global attributes and check the metadata for this level to product
[38:55] that was unloaded from the ocean color website and here you can see is from November 7 of 2010 this is the date of
[39:07] the image that we are looking at here I'm going to close the roll and here we open a web in situ data we
[39:22] can see that we have measurements for November 6 7 there are few measurements for November 7 and you can edit this
[39:32] file to only have the measurements for this a for this date you can also export this as a shapefile and you can work in
[39:44] a different geographic information system plataform to manipulate this information and also to do this type of comparisons but is useful to see the
[39:55] different capabilities the seeders has to do this type of analysis the other thing we can do a correlated plot but we
[40:06] should only compare measurements that we acquire the same day that image was acquired another important field here is
[40:17] the time at which the measurement was acquired the data file the civil file the header maybe you can also find more
[40:30] information about the the units of digits is in UTC or local time in the metadata file of jury image you can find
[40:48] the time at which the image was acquired and this is useful because you would like to compare only the measurements
[40:58] that were acquired close to the time of acquisition only the same day but also as close as possible to the acquisition
[41:06] time a good reference will be plus minus 3 hours and because as you can see is very difficult to have in situ
[41:15] measurements and even to plan for in situ situ in situ measurements that overlap as exactly as possible with your satellite
[41:25] decision and in this case we can do a correlative plot but we are only going to focus on the day that overlaps with
[41:33] the satellite image so in order to do the correlative plot you have to have first selected the chlorophyll product
[41:41] here on your and your files and then you click on correlative plot in the point data source you can select the text file
[41:58] that has your measurements and we are going to select total chlorophyll a as a parameter right now is showing all the
[42:07] measurements that are available in this text file which was unloaded from save us and on the y-axis again you have the
[42:18] measurement derived from the satellite image and on the x-axis you have the in situ measurement you can we can go to
[42:29] the table actually I'm going to pay that much attention to the plot because right now we are looking everything but we
[42:37] only care about these measurements that we've collected on the November 7 here in the table you can see the mean value
[42:45] that does the chlorophyll value derived from the satellite image and here you have the total chlorophyll a from the
[42:55] reference file in our in situ measurement and you can see how it compares the Sigma the standard
[43:01] deviation for the satellite measurement in case we have a 3x3 box selected you can edit this file to only have the
[43:15] measurements for that day and do the comparison that way now we are going to see how to calibrate
[43:33] algorithm coefficients for your area of interest interest in case you have in situ observations we are going to do this analysis using
[43:43] limited data points this is not recommended if you want to do this for a real-world case in a real application
[43:52] you will need a statistical significance there for at least 30 points will be a good number to do this type of analysis
[44:02] so the first thing I would like to show is that in the level 2 data that you
[44:10] have from ocean color you can go to band attributes and open the chlorophyll a product you can logo click there and you
[44:20] can see that in show friends is a listing of paper this paper contains the algorithms that were used to generate
[44:29] this product so I have already opened this paper and is here and actually it explains how the chlorophyll a is being
[44:42] generated is actually a combination of two algorithms for waters that have chlorophyll concentration less or equal to 0.25 milligrams per cubic meter they
[44:55] are using the color index algorithm which is explained here for the waters who have a higher chlorophyll
[45:02] concentration it is using this for order polynomial algorithm I would like to walk through this algorithm because we
[45:12] need to understand it in order to calibrate out our algorithm coefficients so it's based on the bank ratio between
[45:22] the blue and the green band in models we have multiple blue bands in this case it is using the maximum value in the
[45:33] Lubin and that is using these different bands and select the maximum value and that account the value for the blue bond
[45:42] and then is divided by the green band and this is our ratio then we calculate a lot end of the ratio that love 10 is
[45:51] the x-value here and the final chlorophyll-a concentration that we see in our prologue is 10 to the power of
[46:00] the result of this polynomial equation here so it's a little bit long but we need to understand that in order to
[46:10] update our algorithm coefficients were we update our these values here after seeing that we can generate a disband
[46:27] ratio that we saw in the publication and we are going to do that using math band I already created that bound ratio
[46:37] my result is here once you have used madman to create a product and we saw how to use madman last week you can go
[46:49] back you can go to that product and go to properties and see the expression that was used to generate that layer
[46:58] this is the expression that I use we select the maximum value containing these three different bands then divided
[47:08] by the green band and is the lock then follow this run it and now we would like
[47:16] to extract the values of our image that overlap with our in situ observations since we are interested in creating an
[47:27] updated chlorophyll-a at the end as our ultimate goal we need to go back to work with the raw data in this case our raw
[47:39] data is referring to the spectral band that's what we are working with the remote sensing reflectance I didn't mention before that for to
[47:48] create this Bank ratio what I use where they original remote-sensing reflectances so we are going to use
[48:02] tools pixel extraction and we are going to extract the pixels that overlap with our in situ observations and this is a
[48:12] tool that we can use inside us to do that in the input and output file we are
[48:20] going to include the input file that is going to be the base is our satellite image and from where the values are
[48:29] going to be extracted and if you see even the product that I generated got associated to this file so it's going to
[48:37] extract everything for all the bands for my original remote sensing plants to the curve in a product and everything that
[48:45] is there we can also indicate on which folder and directory is the final product going to be save and the name of
[48:54] it in parameters here is where you can upload the location of your in situ observations in order to upload a file
[49:04] here it has to be formatted in the right way I have already done that so I can
[49:09] import a file that is tab delimited I to format at the Gulf of Mexico data that I
[49:17] downloaded from Sivas here and it loads here you can also use the pin tool here as soon as you create a pin it
[49:28] automatically appears here the other characteristic that it has if you have a large data set of measurements that were
[49:39] acquired at different times you can have a time constraint I will recommend a tight difference of plus minus three
[49:47] hours between the time the satellite image has been acquired and the time that the in situ measurement is acquired
[49:55] the other important parameter here will be the window size this is indicated with pixel value you are
[50:04] selecting it is either exactly the same pixel that overlaps with your in situ point or the value derived from a block
[50:15] size that is made of several pixels for example a 3 by 3 or 4 by 4 3 by 3 or 5
[50:23] by 5 you can also include expressions here usually it is recommended that you use a mean value of a box of pixels so
[50:34] we can select 3 here and you can also select the aggregation method we can use average or mean and you click here on
[50:48] extract and it's going to extract all the values for each of these different bands and it's going to create and the
[50:57] text file with this I have already open the file that is created if you see in name we have the station data that we
[51:13] saw originally on the Sivas file then it extracts all the values that are contained in our original level 2 data
[51:25] set it has the remote sensing reflectance and it includes the mean value we selected our box size of 3 by 3
[51:34] it creates a standard deviation and the number of pixels as well that we use for this to generate this mean value and it
[51:45] does it for everything for each of the ones that are available in this file so you have a large data size both what we
[51:59] are interested on is on the lock down bound ratio that we created on our original measurements of chlorophyll
[52:08] concentration when you use the pics extraction tool it is recommended that you use it only for the data says that
[52:17] much about a in situ with the satellite data set I have already clean out this file to select only the text and match
[52:28] what we need to focus on as we mentioned before the chlorophyll in situ measurements that were collected that
[52:36] date and they love 10 ratio of the remote sensing reflectance bands so I have already organized information so I
[52:46] have those two datasets and here we can see the total chlorophyll ADA was measured in situ and our mean value of 4
[53:03] the lieutenant ratio what we want to do is a regression with this information I have already told that and you can do
[53:14] that in different ways as long as you have these two datasets that's the most important thing you can use Excel you
[53:21] can use our Python wherever you whatever means you you have to do this if you are going to use Excel we can do that very
[53:31] fast here and we are going to select both the total chlorophyll a that was measured in situ and we are going to
[53:41] select our bond ratio love 10 of the veneration that was extracted from our satellite data set we can able to insert
[53:52] a scatter plot and now we have this one we can click on the point and add a
[54:00] trendline and this open and we are going to select polynomial order for and we can displace the question of the
[54:14] chart and also the r-squared and we can increase okay I would like to mention here you can see that the love 10 band
[54:35] ratio value is the same for the different points so please just consider that this is no real data that this is
[54:45] just for example purposes but when you are working with your data and this should be different obviously remember
[54:53] that we actually only have two locations and we have different chlorophyll measurements on the same locations so
[55:00] that's why we are having that our data derive it from the satellite image obviously has the same values because
[55:08] it's for the same point so now we have these new coefficients and those are the ones that we are going to use to update
[55:20] our algorithm coefficient in order to do that we can go back to seeded and juice math plant to recalculate our
[55:32] chlorophyll a product based on these algorithm coefficients we already know that X corresponds to the block temper
[55:42] ratio ratio I was already calculated so we can go back here to see this and calculate Y if
[55:52] we make reference to our original paper which it is where face of that was face so I have already done those
[56:05] calculations using mat fund and let me see here I did it in Tula steps fears I calculate Y and then and Y is
[56:27] the polynomial equation using these new coefficients so we can open this expression and as you see I am
[56:37] replicating the equation that I got from the polynomial regression if you see this is the equation here an X
[56:51] represents the log 10 bound ratio so I got here and every time that I have to use X and I'm using the event that I
[57:02] have already created one I have calculated wide I can cancel on this and then I calculated the final the new
[57:23] chlorophyll-a product which is 10 to the power of Y so this is a very simple one in which we have a base 10 to the power
[57:37] of Y in this case is the result of the polynomial equation and the result will be my new chlorophyll a product that has
[57:49] been calibrated a with my in-situ data as I mentioned this is only for example purposes in a real application you will
[58:00] need a statistical significance so you definitely need more data sets to do this type of analysis but this is the
[58:08] general workflow to do that and now actually we can do a simple comparison using our correlative plot in theory
[58:18] also if you want to do this to see how good or bad has been your calibration is recommended that you do it for a
[58:28] different data set for example in situ observations that you are going to use shouldn't be the same ones that you use
[58:38] to calibrate your algorithm because obviously is going to show better results but you will see that how good
[58:48] or bad as this new calibration be when you compare with additional that I said that when included in the algorithm
[59:00] development so but for this example we are going to use the same data so we are expecting to have better results that we
[59:08] had in the past if you remember our correlative plot in the past was not that good so to do this a comparison we
[59:17] can go here to our new chlorophyll file and we check on the correlative plot we select the same measurements of March
[59:29] 22nd and our data field V total chlorophyll a and now we have an R square of point 99 obviously we are
[59:41] evaluating the same data that we use to calibrate our algorithm we have very limited data points so I do expect if I
[59:50] navigate in other parts of the image actually is going to be a little bit better very bad because I am just using
[59:57] this limited information but as I mentioned before please consider having more a data points and some of the
[1:00:07] considerations that you need to take into account when doing this type of calibration is that your in-situ
[1:00:13] measurements have to match as much as possible the satellite acquisition we saw last week how to identify when is
[1:00:23] there is going to be a satellite overpass so you can schedule the in-situ measurements during those overpasses
[1:00:30] because they fed to the in situ measurements have to be as close as possible to the time
[1:00:37] that the satanic image was acquired at least the same day if we are outside the plus minus three hours difference at
[1:00:50] least to be the same date so you will have better results and or more appropriate result for this type of
[1:00:57] analysis Thank You Africa are for the demonstration so this brings us to the end of this series and before that we
[1:01:12] want to summarize what we did a starting from the beginning we talked about current satellite missions which are
[1:01:21] relevant for water quality monitoring and is listed here it's lengths at 7 & 8 terra and aqua
[1:01:28] Sumi and PP j PSS Sentinel to a and B and Sentinel 3 these are all currently in orbit some like Lancet and moded and
[1:01:43] Terra they are since 1999 and these are the recent one that we talked about we talked about the sensors available on
[1:01:52] this missions so Landsat 7 is e TM + legs at ATS Olli Terra aqua motives reels from NPP and JP SS Sentinel 2 a
[1:02:07] and B has multi spectral imager and Sentinel 3 has ocean and land other instrument Ulchi they all have different
[1:02:15] swath width as well as resolution the highest being MSI at 10 meter then Landsat at 30 meters Modi's and rills
[1:02:26] they are moderate ranging from 250 meters to about 1 kilometer depending on bands and then all she also is 300
[1:02:35] meters they all have different special coverage also they're all polar orbiting but swath width can be 185 and narrow
[1:02:46] for Landsat all the way to our ears which is about 3 3040 now kilometers all all the terra aqua and NPP and GPSS they
[1:03:02] have one to two day coverage from Modi's and wheels that are available on that temporal scale but if you look at MSI
[1:03:11] it's 5 daily visit Landsat is 16 de visite and all Chi is 2 this seven-day 3 visit time so they all
[1:03:20] have different spatial and temporal attributes we also talked about a number of tools we focused on chlorophyll
[1:03:29] concentration in sea surface temperature but from Modi's and wheels you also have particulate organic carbon and inorganic
[1:03:37] carbon also inherent optical properties are available so these are all derived and B quantities and we also sure saw
[1:03:46] what can what type of algorithms are used to get these data we also talked about level 2 and level 3 data access
[1:03:55] tools ocean color and web and Giovanni and we had demonstration of sea - which is a software that you install you had
[1:04:04] some experience using this and you analyze data over Lake Victoria using C - and today then it was a little more
[1:04:13] where we just have L level 1 data how can we do atmospheric correction to convert to level 2 data and then use
[1:04:20] some in-situ data to develop algorithm or even validate the data so this is the overall summary that using passed a time
[1:04:33] series data of satellite observations and in situ data our algorithm can be your model can be developed using
[1:04:41] statistically empirical technique okay in between you have to do atmospheric correction which is a little complex and
[1:04:49] little requires radiative transfer calculations in which you need information about atmospheric gaseous constituents aerosols and clouds also
[1:04:59] once you have all this information you develop algorithm you can store model coefficients and then this model
[1:05:08] coefficients can be used for current and future satellite data the advantage here is that in-situ data can be very
[1:05:16] sporadic or - not continuous but once you develop coefficients based on this in-situ data these coefficients can be
[1:05:24] used everywhere where there is satellite information available so you have a nice continuous spatial coverage okay and we saw that algorithms are
[1:05:35] developed by using optical near-infrared and infrared and microwave remote sensing observations and the information can be used for monitoring say lakes
[1:05:47] actuaries and coastal oceans and that is a review article listed here which has number of review articles and it shows
[1:06:01] how different optical and infrared micro bands are used in combination or what kind of algorithms are developed to get
[1:06:13] water quality parameters so this is something that you can review for more up-to-date information and more specific
[1:06:21] information how these bands are used so we want to summarize some of the challenges that we saw in what quality
[1:06:31] monitoring so as listed here for accurate and quantitative what quality monitoring you have to have co-located specially and temporally both in situ
[1:06:45] and satellite measurements since in situ measurements can be every once in a while and they are not continuous in
[1:06:54] space there has if they there is overlap with satellite then the algorithms are model developed using these two are more
[1:07:02] accurate also feasibility of water quality monitoring in coastal New England water bodies that does depend on special temporal and spectral resolution
[1:07:14] of 30 mode sensing observations for example if you have a small lake in which is just a not visible in mode is
[1:07:26] being 250 meter resolution it is difficult to of course derive water quality parameters in that and sometimes
[1:07:36] when there are multiple water quality parameters in high quantities such as sediments or dissolved organic matters or
[1:07:44] or or scornfully concentration they're all present at the same time it is difficult to separate from the remote sensing
[1:07:52] measurements so in situ measurements then they do have to be there to aid it and then algorithms have to be defined
[1:07:59] sufficiently to be able to capture those also it is not it's not possible to characterize Algar types or toxins from
[1:08:18] only four view sensing observations you can look at for a fill a concentration but you will not be able to see whether
[1:08:25] the algae that you have is toxic or non toxic or what type of argue that you cannot distinguish that moreover while
[1:08:36] remo as we mentioned remote sensing a reflectance have to be corrected for Atmospheric effect so that for for
[1:08:49] accurate algorithm development actual accurate water quality monitoring and so you have to know atmospheric constituents and optical remote-sensing
[1:09:02] observations when clouds are present we saw when we were looking at Chesapeake Bay that you cannot see through the
[1:09:11] clouds so then you don't have data where there are clouds present so these are some of the challenges nevertheless um
[1:09:19] water quality monitoring has is being done by a number of and the examples given here number of NT organizations so
[1:09:30] can be combination of these multiple satellites they can be used so even if Landsat is every 16 days in between you
[1:09:39] have motifs and Viers MSI and then you have all G also so whichever sensor is available and whenever it is cloud free
[1:09:49] you can use this yes you have to develop algorithm for each sensor but then wherever you have cloud free image from
[1:09:58] sheriff answer and if you have in-situ data you can derive the algorithm and then you can use that in in monitoring
[1:10:07] what quality in current time or you know and then it monitoring water quality in inland lakes it does depend on the size
[1:10:17] of the lakes so lens set being 30 meter resolution it is submitted that about 170 K+ lakes globally can be observed
[1:10:29] using Landsat data because it's 30 meter resolution whereas mode is all cheers they resolve about 1868 so relatively less number of links and
[1:10:42] this term is an estimate from EPA so lens set really is useful that way and now MSI having even higher resolution
[1:10:54] and better revisit time of five-day would be also useful in monitoring many many global legs these are some of the
[1:11:06] examples remote sensing based regional water quality monitoring so cyanobacteria assessment network or science that's NASA NOAA EPA USGS
[1:11:16] project that is monitoring inland lakes where there is algal bloom and cyanobacteria so they monitor that la
[1:11:26] Lake Erie hab tracker is from Nova Nova coast watch Copernicus marine environment monitoring service from European Space Agency and also near
[1:11:38] real-time algal bloom monitoring in North Atlantic these are some of the links that you can you can see how water
[1:11:46] quality monitoring is done in near real-time and then this is the webinar that we did last year introduction to
[1:11:53] remote sensing for all of bloom that covers examples of these so you can even see this webinar for more information so
[1:12:04] in summary we saw how you can develop algorithm how can you solve the rhythm you have in
[1:12:11] visualize and how you can use already available data or quality data from NASA to monitor either inland lakes coastal
[1:12:21] region or estuaries so with that we want to thank you for attending this webinar series and we we have a couple of
[1:12:33] announcement and then we will open the floor for Question and Answer so thank you again for attending this webinar
[1:12:53] thank you everyone thank you for webinar cities we will have question answer session soon but we just wanted
[1:13:01] to announce that you know about the homework homework 1 & 2 they have to be finished and submitted if you are having
[1:13:11] trouble with installing Siddhas or having trouble accessing some of the features of as we mentioned there is a
[1:13:19] forum that you can join and post your questions hi Amita this is Africa I guess hi Africa please are chiming
[1:13:31] yeah I just like to add additional traffic clarification or summary in addition to what you provided I would
[1:13:41] like to mention that the algorithms that we are working with for example in the exercise to calibrate the algorithm
[1:13:47] coefficients those are for ocean color waters and therefore they are using the blue and green band ratio but if you
[1:13:57] want to monitor chlorophyll a it for other type of water that have more that have different constituents and the
[1:14:07] color of the water is driven not only by the chlorophyll put by other constituents in the water you can check
[1:14:14] the paper that Amita was talking at the beginning about a review of the different ways to estimate a work
[1:14:23] quality because there are algorithms that had been created for specific areas that you can calibrate and may be more
[1:14:31] appropriate for the water body that you want to study and this is for chlorophyll a the algorithms for other
[1:14:39] parameters are also different and you also need to check all of the all of those things are important where you are
[1:14:47] monitoring water quality yes thank you cuca but that's a good point also we will make Landsat data available that is
[1:15:00] be downloaded images for Lake Victoria and they will be made available through our set website if you want to try some
[1:15:08] of the features that Africa demonstrated today so level one data from only for Lake Victoria are there so
[1:15:16] you can download those files and convert it to level two since patrol if you have in situ data
[1:15:25] for Lake Victoria you can try putting in s text in text format and do the algorithm but this is
[1:15:33] mostly for you to work with Landsat data in in C - and use the oCSS - view
[1:15:39] software to convert data just to learn to do that so the length data will be available in
[1:15:53] a day or so the volume of this data is little larger than Motors data being high-resolution so you will be able to
[1:16:03] download them for art from our third website in a day or so yeah for those of you is still experiencing issues with
[1:16:13] Siddhas we recommend and suggest that you visit the ocean color forum there are a lot of answers there and I know
[1:16:20] that there were some specific issues trying to install the OCS as W a tool that makes the LT gen tool available but
[1:16:30] for Windows juicers you have to do addition suit you have to have some additional steps but everything is
[1:16:37] explained in the documentation and we share in the chat they link to the forum as well that explains what has to be
[1:16:47] done so now we can move to the question answer session and we'll try to address your questions here so Africa the first
[1:17:08] it's about algorithm variables a a 1 a 2 yeah and those are they are algorithm coefficients there are generation to the
[1:17:19] regression the regression analysis and we saw that during the demo if the way the algorithm was generated originally
[1:17:29] was also doing this polynomial regression and that gives you specific algorithms and you can recalibrate those based on your own in situ measurements
[1:17:39] and in fact ocean color has gone through different versions of chlorophyll-a algorithms that means that they had been
[1:17:50] using different coefficients every time that they add more data to their a in situ data set they recalibrate the
[1:17:59] algorithm and they recalibrated to and what they are doing they're updating these coefficients question 3 is about
[1:18:13] can we using us to analyze the limiting yes you re and job I would want to say
[1:18:20] and Daniel you can correct me if you have div in egde of salinity you will be able to open it with C - well then
[1:18:29] analyze if if I understand correctly but if you can correct me yeah of it is Africa it is possible right if you have
[1:18:43] a deep image of salinity you should be able to open it in C - yeah if it's
[1:18:51] already created but I don't I don't know you can create salinity information derived from satellite images I haven't
[1:19:04] seen that yeah it's inaccurate you have to have it your own data if you already have salinity
[1:19:12] data in TIFF format or you know in text format also you can open it with C dash
[1:19:20] and analyze so maybe if you want to do steady state so you want to visualize it should be possible is that right
[1:19:28] probably I it's hard to say I see it s can open any file I mean but we've
[1:19:32] officially support the the missions that we officially support there on the on the you know when you do the install
[1:19:43] processors those admissions we officially support if we haven't written a specific reader for a specific mission we may or may not support it fully but
[1:19:55] see this can open any file it's just up to what parameters of the final you can understand since we know nothing about
[1:20:04] that file the only one that I'm aware of that we have is Aquarius that has a salinity product yes that that's what I
[1:20:13] was going to mention that X Marius has salinity product but that's not current that that mission intended also Daniel
[1:20:24] if you can address the next question is MSI available through the GUI or does it need command line work is that certain
[1:20:35] all - yes it's not in the GUI that I know of that I really don't know much
[1:20:43] about that particular one I know uh oh forget cheese Nemo roading and I really don't know on that one to be honest okay
[1:20:57] I think we will check and let you know but I I think Sentinel data are still you have to do it command line yeah me
[1:21:06] command line yes I really don't think it I definitely not Sentinel three yeah and the GUI no I mean if that's nice but
[1:21:17] not the GUI command line probably yes on both I don't know how well the documentation is though on Sentinel 3 not actually
[1:21:29] officially supported but it's in there as far as I know it's not officially I mean no but so if you go to the GUI OCS SW you
[1:21:44] will see that no Sentinel data are there so it has to be done through command line probably the only documentation
[1:21:56] would be the you know like if it's l2 gen which you're running l2 gen and help you may see something in there the the
[1:22:09] code is all available so you can actually look at the source code the C source code not that anybody necessarily
[1:22:19] wants to but that is the documentation officially sort of the next question is can we do sediment analysis of river
[1:22:31] using C - so yeah my response would be if you have in situ data for sedimentation or sediments and you can
[1:22:43] use officially available sensor through C - and what Africa showed for profile a concentration you can derive algorithm
[1:22:54] based on satellite and in situ data in Africa you can join e yeah yeah as long as your satellite a satellite data that
[1:23:06] you are using us enough spatial resolution resolution yeah it would be possible I think that Landsat 8 can be used and again the
[1:23:16] algorithms that you use have to be different than the ones that we saw here because these are chlorophyll a and also
[1:23:23] for ocean waters there is a lot of literature abuse in Landsat data to monitor sedimentation and they use
[1:23:34] different bands are mostly they use a combination of red infrared and green bands sometimes for that yeah next question is how can I know if
[1:23:50] any legs and pains in my city are monitored by a NASA satellite um so all satellites would be going over because
[1:24:01] they are polar orbiting satellites that we are talking about all of them we talked about our polar orbiting
[1:24:06] satellites so it's very likely that they do go over the lakes and Bay in your city now what the resolution is of the
[1:24:14] lakes that you are talking about or the Bay Area that you are viewing that will decide which satellite would be most
[1:24:22] useful to you but we talked about different tools so ocean color web tell you about Modi's and queers and if you look at USGS earth
[1:24:38] Explorer and just point into your area you will see the lens had a data for that ms/ms eye data are also local
[1:24:51] through USGS earth Explorer this is a good question question seven instead of generating level two data in Cedars why
[1:25:06] can't we directly use level to data from Earth Explorer so a length of data level two data available in earth Explorer it
[1:25:16] was you know they're more useful for land remote sensing they those very connection is more accurate if you do it
[1:25:24] in C - so you can try and use and see how you get different results perhaps if
[1:25:34] you use level two data from our textbook and you start from level one data and then convert it to L - you see - so
[1:25:42] atmospheric correction is done specifically for water bodies over water projects in can you see us and see - doesn't officially support all
[1:25:57] these other things like level to data from Earth Explorer was generated there not by our program so it doesn't
[1:26:07] necessarily know all the nuances within that data structure so that's a big difference when cts opens our level 2
[1:26:16] file it knows that it's our level 2 file and it knows how to handle it best so is
[1:26:31] it possible to estimate lake depth from remote sensing data so right now remote sensing cannot provide that I believe
[1:26:45] but I think what mission will help in that direction what can be derive is height with a Jason's yes so C octave
[1:27:06] level height can be derived yeah but not that computer deepness you you so in situ measurements in C does so sea
[1:27:23] bass is the one that you talked about and some website that sea bass information is available and I will give
[1:27:32] you the website that's where all the information about instruments would be so earlier we received a comment from a
[1:27:41] participant about the Chesapeake Bay that sometimes a chlorophyll concentration data are collected not right at the surface but at some depth
[1:27:52] so you have to know that information too and so it is important to know which instruments are used and how and where
[1:28:02] the data are collected in situ data are collected so I'm just going to keep you see bass website that you can get more
[1:28:11] information about in-situ data and instruments used yeah and just to add many of these data files in the header
[1:28:26] information they have some description about a thanks to means that we use or metadata about how the measurements were
[1:28:35] made or even links but it varies file by file is not like all the campaigns that collect the data have that information
[1:28:44] some are more descriptive than others but there is also a tional information in the header of the original Sivas file
[1:28:52] that is downloaded from the website suppress your turn our estimating call feel a consultation for each pixel how
[1:29:04] about the variability of chlorophyll a concentration according to death for the pixel as to be suppose it to be nearly
[1:29:14] constant along the vertical so LA and Africa you can correct me but it depends where you are connecting your in situ
[1:29:24] data at what depth in most cases they are collected at the same depth and so what you're getting is probably a
[1:29:35] concentration like we said that no matter what the water depth is and we're not assuming that it's constant
[1:29:41] everywhere but only information we have is that wherever the in situ data were collected at that height this would be
[1:29:50] most representative now yes I I agreed usually we use the closest surface level measurement and as I met I mentioned
[1:30:03] sometimes the algorithms have been created with a measurements that had done at a deeper level and but that's it
[1:30:13] we don't have information about what that concentration of constituent is in the column of water and it will be very
[1:30:22] hard to derive that from the satellite imitating that you can do that with in in-situ measurements when you are
[1:30:29] measurement measuring chlorophyll or any other well quality parameter at different depths so that gives you an idea of how is the how that constituent
[1:30:40] moves in the column of water but otherwise with satellite data is just a snapshot of the information it's
[1:30:52] possible to downscale Modi's level to profile a with Landsat 8 or central 2 to obtain high special and
[1:31:02] temporal resolution images so I'm not aware of with a concentration but for some other parameters it has been done
[1:31:12] especially like vegetation index or evapotranspiration now Moody's and lines had combined data are used also mode is
[1:31:23] I mean Lancet and MS I combined data are also available from NASA so it has been done that multiple sensors have been
[1:31:35] used together I I believe that again there has to be some statistical analysis done or algorithm developed
[1:31:45] downscaling if you want to so when you have co-located Modi's and Landsat for certain regions or number of days then
[1:31:56] you can derive some kind of relationship between low resolution and high resolution or fill a concentration and
[1:32:03] that may be of use to downscale it and see that that would be some kind of mapping of the two and co-locating them
[1:32:17] together so the next question Daniel Africa if you can answer is there a movement in in KT 419 C - how did you
[1:32:34] say me yeah yeah if you my that's like algorithm I I'm I wouldn't know that that would be they it should be on the
[1:32:46] the OB PG our website as far as about the specifics of the algorithm so I mean for what I do I develop the GUI so and
[1:32:59] cuz I understand correctly if you're talking about mode is 84 90 it is the same that you see in ocean color web
[1:33:10] that is actually that that data are actually when you open the file you get the same data in C - so I don't know
[1:33:19] whether improvement is there it's the same data set that you are looking at Essie does matches I mean that
[1:33:32] replicates the data that we provide at OPP G and it uses that algorithm I don't know if that algorithm has changed over
[1:33:40] the years so I can't speak to that why these huge variations in in situ and satellite data beautiful eh yeah yeah I
[1:34:00] think that these vary depending upon of the area that we are looking at the current chlorophyll-a algorithm that the
[1:34:07] ocean color generates he is very accurate in the deep waters and but if you move closer to the coast there may
[1:34:14] be some discrepancies there and that's because the large data set that is used to calibrate the algorithm has more
[1:34:22] information on the deep oceanic waters and if you want to have more accurate results on the coastal areas you have
[1:34:35] maybe sometimes this is not going to be that good also there is a lot of implications of the complexity of the
[1:34:42] waters there they were the color of the water is not only driven by chlorophyll a but also by other constituents and and
[1:34:51] so it is it is hard to get to have a higher accuracy there because the Calgary dome has been developed with
[1:35:01] data that it has more representation of deep oceanic waters and and Daniel I don't know you would like to add more to
[1:35:09] this the only thing I would add is that the satellite footprint would not not necessarily match your in such your data
[1:35:17] measurements or satellite footprint is a full footprint measuring all that area and then but you don't have anybody out
[1:35:27] there measuring that full footprint so if the waters variant and it's going to be hard to match we usually think 30%
[1:35:36] match is a good match but that all depends what you're measuring mm-hmm yeah yes we despite measurement
[1:35:47] versus like a pixel which is more like an average information larger area and we usually when we match we instead of a
[1:35:59] single pixel 5x5 box is the standards you're actually measuring a big area because you're trying to beat down
[1:36:08] satellite noise and bunch of other variant variances there's papers on it but basically matching up a large
[1:36:19] surface area with a point however you slice it there's one more question what algorithm was used to generate l2
[1:36:31] Norfolk a products in Modi's if you reviewed last week's presentation actually both weeks they talked about the first week provides link to the
[1:36:44] algorithm page where you have all the information about how the algorithm was developed and what was the algorithm so
[1:36:55] if there are no more questions we would like to thank you for attending this webinar session it was a little
[1:37:04] advanced and some of you are having difficulty with sierra's but hopefully you can resolve that and use the tool as
[1:37:12] it is quite useful for doing processing so on behalf of africa flores and myself we want to thank all of you also daniel
[1:37:25] knows for his time and help with this webinar and question answers we also want to thank our said team prop
[1:37:34] lemmings and Sabbath hook and solving Hudson for helping us in various ways learnt in completion this webinar series
[1:37:44] yeah and I mean I will also like to extend the thanks to the ocean color group who were responding all of our
[1:37:53] inquires regarding the use of citizen day day in installation and lt-gen so thank you and we look forward to your feedback or
[1:38:05] you will receive a survey link and we request that you complete the survey when you receive the link because your
[1:38:13] feedback is very important to us and also please submit all the homework by 26th of September
