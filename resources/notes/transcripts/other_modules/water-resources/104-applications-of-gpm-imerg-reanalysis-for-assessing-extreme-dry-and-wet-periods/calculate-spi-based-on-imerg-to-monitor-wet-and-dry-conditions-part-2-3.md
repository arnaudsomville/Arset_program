# Calculate SPI based on IMERG to Monitor Wet and Dry Conditions, Part 2/3

`https://www.youtube.com/watch?v=Gok9zsA_RFk` · id 197 · 57:08 · module 115 — Applications of GPM IMERG Reanalysis for Assessing Extreme Dry and Wet Periods

[00:03] hello and welcome to part two of our set webinar applications of gpm imagery analysis for assessing extreme dry and
[00:09] wet periods my name is sean mccartney and i'm joined today by my colleague ami de mecta in part one of the webinar we learned
[00:17] about imerge version 6 data products how to explore and download the data using giovanni and how to calculate regional
[00:24] precipitation statistics using qgis and spreadsheet software in today's webinar we'll be using imerge data with open source software to
[00:34] calculate the standardized precipitation index or spi to monitor wet and dry conditions each session of the webinar is divided
[00:44] into two parts the first part being a presentation and demonstration on data access and analysis using image data for
[00:52] a very specific application part two of the webinar is provided as lab time for you to do hands-on
[00:58] computer-based exercises amita and i will be online to field your questions for the duration of the two hours
[01:05] homework assignments will be available for each of the three parts on the rset website website answers must be submitted via google
[01:12] form by the dates shown below a certificate of completion will be awarded for those who attend all
[01:17] webinars and complete all homework assignments assignments you will receive a certificate approximately two months after the completion of the course from marines
[01:26] martin as this is an advanced webinar it is expected you have completed the required prerequisites offered through previous
[01:35] rset trainings these are the fundamentals of remote sensing and overview and applications of imerg long-term precipitation data products
[01:46] to complete the exercise for today's webinar you will have to register an account on nasa earth data
[01:52] install qgis version 3.x install panoply install anaconda version 3.7 and for windows users only install git bash or another bash shell such as
[02:05] baboon or cygwin which you can run on your machine the objectives for today's webinar will be to learn how to bulk download image
[02:14] data from nasa's goddard earth sciences data and information services center or guess disc determine how to calculate the
[02:23] standardized precipitation index or sbi using eye merge data for assessing extreme dry and wet periods and finally to interpret the results
[02:34] using panoply and qgis i will start off providing background information on the standardized precipitation index or spi
[02:45] we will then demonstrate the calculation of sbi using a case study for the state of texas in the united states
[02:53] you will learn how to bulk download imerge precipitation data from nasa gazdisk gazdisk pre-process imerg data using the net cdf
[03:01] operator or nco nco is a suite of programs designed to facilitate manipulation and analysis of data stored in the net cdf format
[03:13] we will calculate sbi using an open source software package implemented in python provided by the national oceanic
[03:20] and atmospheric administration's national integrated drought information system program we will then interpret the results using panoply and qgis
[03:32] the remainder of the webinar will be provided to complete a similar exercise calculating spi using the country of
[03:38] mozambique as a study area step-by-step instructions are provided to complete the exercise along with all the slides from today's webinar
[03:48] if you encounter a problem installing the software please look for a solution online or with your it department
[04:03] sbi is a result of research and work done by tom mckee nolan doskin and john kleist in the early 1990s at the
[04:11] colorado climate center at colorado state university the outcome of their work was first presented at the eighth conference on
[04:18] applied climatology held in january of 1993. 1993. it was used for estimating meteorological conditions based on precipitation alone which is one of its
[04:29] major strengths it was designed to quantify the precipitation deficit for multiple time scales from sub-seasonal to inter-annual
[04:38] and shows that it is possible to simultaneously experience wet conditions on one or more time scales and dry
[04:44] conditions at other time scales sbi can be compared across regions with markedly different climates in 2009 the world meteorological
[04:56] organization recommended spi as the main meteorological drought index that countries should use to monitor and follow drought conditions
[05:04] it is now the most commonly used indicator worldwide for detecting and characterizing meteorological drought some of the limitations of spi are with
[05:16] precipitation as the only input sbi is deficient when accounting for the temperature component which is important to the overall water balance and water
[05:24] use of a region spi does not consider the intensity of precipitation and its potential impacts on runoff stream flow and water water
[05:34] availability availability it can provide uncertain results in arid regions regions with quasi-normal distribution of precipitation precipitation in dry climates the user should focus on
[05:46] the duration of the drought rather than on just its severity the sbi values are interpreted as the
[05:56] number of standard deviations by which the observed anomaly deviates from the long term mean for a normally
[06:02] distributed random variable and fitted probability distribution for the actual precipitation record negative spi values represent dry conditions the lower the spi value the
[06:14] drier a period of time is positive sbi values represent wet conditions the higher the spi value the
[06:22] wetter period of time is spi values lower than negative 1 indicate a condition of dryness whereas spi values greater than 1 indicate
[06:33] wetter conditions compared to a climatology climatology in most studies using spi the gamma distribution has been widely used as the
[06:42] gamma distribution has been understood as the reliable fit to the precipitation distribution distribution the software we will use in this webinar
[06:50] computes spi for both the gamma distribution and the pearson 3 distribution interpretation of a one month spi
[07:00] is is similar to a map displaying the percent of normal precipitation for one month month it reflects relatively short-term
[07:07] conditions closely related with short-term soil moisture and crop stress the three-month spi provides a comparison of the precipitation over a
[07:19] specific three-month period with the precipitate precipitation totals from the same three-month period for all the years included in the historical record
[07:28] it is important to compare the three-month spi with longer time scales a relatively normal three-month period could occur in the middle of a longer
[07:36] term drought that would only be visible at longer time scales looking at longer time scales would prevent a misinterpretation that any
[07:44] drought might be over it reflects short and medium-term moisture conditions and provides a seasonal estimation of precipitation
[07:54] the six-month spi compares the precipitation for that period with the same six-month period over the historical record
[08:02] a six-month spi can be very effective in showing the precipitation over distinct seasons seasons and may be associated with anomalous
[08:10] stream flow and reservoir levels as well as good for monitoring agricultural impacts the nine-month sbi provides an
[08:20] indication of precipitation patterns over medium time scale droughts usually take a season or more to develop spi values below negative 1.5 for these
[08:31] time scales are usually a good indication that significant impacts are occurring in agriculture and may be showing up in other sectors as well
[08:40] the 12-month spi is a comparison of the precipitation for 12 consecutive months with the same 12 consecutive months
[08:47] during all the previous years of available data it reflects long-term precipitation patterns with spi values tending towards
[08:56] zero unless a specific trend is taking place place spi values of these time scales are tied to hydrological impacts to stream flow
[09:05] reservoir levels and even groundwater levels at the longer time scales in some locations the 12 month spi is
[09:12] most closely related with the polymer index here we are showing spi labels and the relationship to the standard normal
[09:22] distribution distribution the labels denote meteorological dry conditions when the value is between negative one and negative one point five
[09:29] moderate dry conditions when the value is between negative one point five and negative two and extreme dry conditions
[09:36] when the value is below negative 2. the opposite is true for wet conditions the percentages printed within the
[09:44] regions bounded by the dashed lines indicate the probability for sbi values to fall within that region only
[09:55] for more detailed information on spi please refer to the references we've provided on this slide for this demonstration i will walk you
[10:06] through the process of bulk downloading image precipitation data from nasa guess disk disk pre-process image data using the net cdf
[10:15] operator operator calculate sbi for the state of texas using a python script and interpret the results using panoply
[10:23] and qgis the demonstration and the subsequent exercise assume you have already registered an account on nasa earth data
[10:32] installed anaconda version 3.7 panoply and qgis on your machine first we'll use a web browser to navigate to the nasa guest disk website
[10:44] once there in the search bar we'll type in imerg this takes us to a webpage with a list
[10:51] of imerch version 6 level 3 products ranging from half hourly to daily to monthly monthly the list includes early late and final
[11:01] runs of the multi-satellite product since we're calculating monthly sbi we'll select the imerg level 3 final run
[11:10] product product here the link takes us to a page where we can read more about the imerg product how it
[11:18] is created and calibrated as well as a product summary at the bottom of the page page since the study area for this
[11:24] demonstration is the state of texas in the united states we'll click on the subset get data link to refine our
[11:30] search even more under the refine date range since we want the entire time series of monthly imerge data we'll leave the default date
[11:40] range as it is final runs of imerg are delayed by about three and a half months which is why the data set ends in
[11:47] september 2019. to subset our data spatially we'll manually enter the longitude and latitude to create a bounding box around
[12:02] the state of texas for variables we'll select precipitation we'll leave d the grid as default and for file format we'll select net cdf and
[12:22] click get data to confirm all the parameters we selected in the last step we can use the
[12:28] drop down here to confirm the data set date range spatial subset variables as well as the file format are all correct
[12:37] we're then presented with a list of 234 links to download each monthly image data set from june of 2000 until the
[12:45] present day we could go through and individually select each of these hyperlinks to download the file separately but that
[12:52] would take much too long fortunately gas guest disk provides information for bulk downloading data under the instructions for downloading
[13:00] link first you have to create an earth date account if you haven't done so already then in your profile you'll need to
[13:10] authorize the nasa guest disk data archive as an approved application you can do that by clicking on this link
[13:17] here and following the directions that they provide once you've you've approved the application and agreed to the end user
[13:24] agreement you'll have your earthdata account linked to the guest disk data archive archive you can then verify your account is
[13:32] linked by downloading a data set using the link that they provide here once you've verified everything you can
[13:39] click on the download the list of links and save the text file to a directory on your desktop
[13:45] i created a directory and named it imerg and that's where i'll be downloading the tip the text file
[13:51] the text file includes links for 232 imerge netcdf files a document on how the imerg algorithm was created as well
[14:00] as a readme file we can then follow the instructions to use wget or curl to bulk download the
[14:10] data using the text file that we just downloaded downloaded wget works on both windows operating systems as well as mac operating systems
[14:18] and since curl is installed with the anaconda installation this should be available to all users as well
[14:24] feel free to use whatever utility you are most comfortable using we've also provided a zipped folder with
[14:31] this data on the rset website for your convenience if i navigate to my directory i can see
[14:43] i've successfully downloaded the 232 files and i've also created a backup file this is because we'll be changing
[14:50] the files that we just downloaded and i want a backup of all the files since they will be changed or in case they get
[14:57] corrupted i have a backup now that we've successfully downloaded the time series of imerg precipitation data data we need to do some pre-processed
[15:10] pre-processing of the files so they can be right into the python script provided by the national integrated drought
[15:16] information system first thing we'll do is open a bash shell and change directories to the imerge directory
[15:29] there we'll explore the data with a command called nc dump is a tool that generates an ascii representation of a netcdf file
[15:43] we'll use the dash h in the command so only the header information is output containing the dimensions variables and
[15:50] attributes of the input file but no no data values for any of the variables we can see that there are three
[15:58] dimensions dimensions time long and lat referring to time longitude and latitude respectively followed by variables for precipitation
[16:07] latitude longitude and time as well as global attributes to calculate spi from imergma data using the python code we need to concatenate
[16:19] the 232 net cdf files into one netcdf file file to do that we first need to make the
[16:26] time dimension in each of the imerg files a record dimension we'll be using the netcdf operators for
[16:34] all of our pre-processing first we'll use the ncks program and we'll loop through all of the net cdf
[16:44] files in the imerge directory and make time the record dimension this takes a couple seconds to run
[16:53] but once it's con once it's finished executing we will use the same ncdump command on the same file as before and
[17:00] we'll be able to see the change that was made made now when we read the header file for the
[17:05] same net cdf file before we can see that time is now the record dimension which is indicated by the unlimited
[17:12] name once we've established our record dimension we'll be able to concatenate all the netcdf files using that record
[17:21] dimension into one file using the ncrcat program this concatenates all of the netcdf files in the directory and it outputs a
[17:33] file that we're naming imerg underscore concat now if we run the nc dump tool on the file that we just created and we look at
[17:49] the header file we can see that in time where there was only one file listed before we now see
[17:55] that all 232 files are now listed and concatenated using the time dimension as the dimension to concatenate them
[18:05] the last step in pre-processing the net cdf data will be to change the order of dimensions of the file from time long
[18:14] lat to lat long time this allows the file to run in the python code provided by the national
[18:20] integrated drought information system we'll use the ncpdq program to do this the nc2pdq pro program and in this code
[18:32] will then change the order the dimensions to lat long time and output a file that we're naming imerg concat
[18:40] ncpdq now when we run the nc dump command on the file that we just created and take a
[18:53] look at the header file we can see that the list of dimensions is now lat long in time
[19:01] now that we've successfully pre-processed our netcdf files we'll navigate to noaa's national integrated drought information system website to
[19:10] download the software you can download the software by clicking on this link at the top of the
[19:17] webpage we'll save this to our desktop and we encourage you to explore this website to learn more about the national
[19:26] integrated drought information system you can see there are a number of other climate indices that they provide
[19:31] software and code to be able to calculate for this demonstration we're only calculating the spi climate indices
[19:40] once we've successfully un downloaded the file we will unzip it onto our desktop and we will rename the directory that we
[19:49] just unzipped climate underscore indices next we will copy the imerg folder and paste it into the climate underscore indices
[20:10] folder so that all of our data and all of our code is in one location and next for the code to run we need to
[20:22] copy the output file that we just pre-processed pre-processed which again is imerg underscore concat underscore ncpdq and we need to place that in the example
[20:36] inputs inputs directory located here next we need to configure the python environment for the climate indices root
[20:53] folder we'll do so by following the steps on the drought portal web page but first we're going to change
[21:12] directories to the root folder climate indices then we'll go to the drought portal and we'll follow all of the
[21:30] instructions for configuring the python environment as well as running testing once we've configured the python environment to the climate indices
[21:39] folder folder for the sake of time i've already done these steps but it's important for you to go through and do them yourself
[21:46] after we've done that we'll change directories to the scripts folder and we'll run the following code which
[21:56] will actually calculate the sbi at a three-month scale the web page gives details on what each of the options are in this code
[22:10] this code will compute a three-month spi for both gamma and pearson 3 distributions outputting the results in
[22:17] the results directory as imerg underscore spi underscore gamma as well as imerg spi pearson since the spi calculation takes around
[22:28] 10 minutes to run i went ahead and ran it ahead of time of this demonstration at this point in the demonstration we've
[22:39] successfully bulk downloaded i image monthly data pre-processed the files using net cdf operators and calculated the three month spi
[22:48] to view the results we'll use both panoply and qgis to view the results in panoply we'll launch the application and then we'll
[22:58] open the spi file that was fitted to the gamma distribution this file is located in the results
[23:04] directory as imerg spi gamma 03 indicating it's the sbi result fitted to the gamma distribution and it's a 3
[23:14] month spi we'll select that file and then click open the header information for the file can be found in the frame on the right
[23:23] similar to the results that we got from running the nc dump tool in our bash shell shell to visualize the spi results we'll
[23:31] select the variable spi gamma 03 and click create plot when a window opens leave the default as
[23:40] longitude latitude at longitude latitude plot and click create create since we calculated a three month spi the first two months in our time series
[23:50] will not display they were used solely for calculating the index if you select any other month besides
[23:56] june and july from the year 2000 you will see the results displayed on the map map to better visualize the results we'll
[24:02] click on the scale tab and select the scale range as negative 3 is the minimum and positive 3 is the maximum
[24:11] next we'll select a different color ramp so blue represents positive standard deviations and red represents negative standard deviations
[24:19] we'll use the color ramp cb red yellow blue dot cpt next we'll click on the map tab
[24:27] and change the projection to equirectangular regional we'll then center the map on longitude negative 100 and latitude 30.
[24:39] we'll then click fixed proportions now we'll compare the three month spi in texas for two separate years using the
[24:49] month of june which is one of the rainiest seasons of the year we'll select june from 2011 which was a
[25:01] drought year and compare it with june 2015 one of the wettest years on record the three-month spi
[25:11] for june of 2011 is doing a good job characterizing how dry the state was from april through june of 2011 compared
[25:21] to the same three-month period in the imerg time series when we select the three-month spi for june 2015
[25:36] we see how much wetter this three-month period was compared to the same 3 month period period from 2000 to 2019
[25:48] panoply also provides the option of viewing the data as an array as well as exporting the data as a csv
[26:02] file next we'll launch qgis to visualize and interpret the results as well once we have the qgis application open
[26:17] we'll click on the add raster layer icon and we'll select the same file that we added to the panoply application this is
[26:24] the gamma distribution of the three month spi when the image displays we see something is obviously wrong the image appears
[26:34] stretched on one of its dimensions to troubleshoot the issue we'll right click on the layer and select properties
[26:42] we'll then select the information button and view the extent we can see from reading the extent that
[26:49] the latitude dimension is being displayed as the time dimension which is seconds from january 1st 1970. to correct for this we'll use the bash
[27:00] shell and change directories to the results folder now we're on the ncpdq program to reorder the dimensions
[27:29] the following code changes the order dimensions to time lat long and outputs a file that we're naming
[27:36] spi gamma o3 texas now when we add this raster layer we'll first have to click on zoom to
[27:54] layer layer and change the symbology we'll change the symbology to single band pseudo-color we'll choose the the minimum
[28:07] to be negative three and we'll change the maximum to be three next we'll change the bands we can select any band except for the
[28:20] first two for displaying on the map again the first two months in the time series were used solely for calculating
[28:28] the spi we'll then click apply and okay to confirm the image is geo-referenced correctly i'll add a shapefile of texas
[28:39] acquired by the texas department of transportation i'll also add a base map from openstreetmap now that we've confirmed that our image
[29:04] is displaying correctly we'll now compare the same three-month spi from june 2011 and 2015 that we compared using panoply
[29:21] first i'll go back to the symbology tab and this time i'm going to select band 133 represents the three month spi
[29:38] for june 2011. [Music] we can see low negative standard deviations across the state compared to the same three-month period
[29:50] for the imerg time series next we'll change the time to 181 this represents the three-month spi for
[30:09] june 2015. this shows high positive values for standard deviations across indicating wet conditions for this three-month period compared to the same three-month
[30:20] period for the imerg time series this concludes the demonstration the rest of the webinar will be provided
[30:29] for you to complete the same steps for downloading imerge data pre-processing the net cdf files calculating a
[30:36] three-month spi and displaying the results in panoply and qgis step-by-step instructions have been provided on our website and both amita
[30:45] and i will be available for the duration of the webinar to answer any questions you may have
[30:54] we're getting some questions and to to answer those if you're looking for step-by-step instructions they can be
[31:00] found on the presentation which takes you step by step through this exercise and that can be found at
[31:07] the link to the rset webpage for this training so feel free to go there and and and either download or or follow along uh
[31:15] through the exercise using that presentation presentation the instructions are also found in the handout section of this webinar so feel free to
[31:24] click and downlink download those links as well hello everybody i'm going to start addressing some of the questions that
[31:36] have been coming in so thank you all for sending them uh hopefully these pertain to more than one person so
[31:45] hopefully we can help you the first question pertains to the daily i merge product and the question is
[31:53] is it from 12 o'clock universal time to 12 o'clock or is it from zero uh universal time to zero universal time
[32:03] and and uh the answer is uh the image daily product product is is uh uh days days from january 1st 1970
[32:15] at at 0 0 universal time again that is days since january 1st 1970 at zero universal time
[32:24] time in this exercise that we're working on we are using monthly data so that would be that would be
[32:32] actually seconds since january 1st 1970 zero zero universal time and sudhir asked why are we using ncpdq
[32:44] is this to a rearrange the uh the dimensions dimensions and yes it is we are using the ncpdq
[32:53] program to rearrange the dimensions from time lap long which is what is provided from nasa guest disk to lat
[33:01] long time and the reason we are doing this is because this allows the net cdf file to run on the software which is provided
[33:10] by the national integrated drought information system another question we had is is the videos of the last session
[33:25] and this one when will they be available and and we actually already posted the recording from part one which was on tuesday
[33:36] and you can find that uh you can find the video to part one on the training page
[33:42] uh uh the website for this training page and the the video from today's training will be posted
[33:51] within 24 hours also to the webpage for the rset website another question that we had are are why are we using the standardized
[34:04] precipitation index spi when there are a plethora of other indices indices and it's a really good question there
[34:12] are a lot of climate indices that are out there and the reason we are using this for this demonstration and for the
[34:18] exercise exercise is one we're focused on using imerge precipitation data and because spi uses precipitation only it makes it relatively easy to calculate
[34:32] compared to other climate indices it's also more comparable across regions with different climates than say the palmer
[34:41] severity drought index and it's also less complex to calculate than a lot of the other indices but it is a good question there are a
[34:50] lot of relevant climate indices that are out there and we encourage you all to explore them if i may also add sean
[35:01] wmo also recommended like spi is a quick way to look at meteorological drought so so a weather related drought and so spi
[35:11] that way is is useful for meteorological drought and it's easy to calculate compared to other indices as you
[35:19] mentioned so since this webinar focus is online merge we decided to focus on sbi is how does image compare to prism
[35:33] um so that's a a good question if you look at prerequisite and uh dr george hoffman's presentation he talks about image
[35:43] validation validation you should have that link um um that is systematic comparison with prism has not been done but i am going to um
[35:54] give a reference here uh which was a presentation in ams meeting that you can look at that's for cold
[36:12] season season and and it is known that for um this is the reference you can look at
[36:22] um um to see how imerge and prism data compare this is mostly over the us so so with elevation and slope of course prism
[36:35] does better than imerch also in light rain conditions especially in the elevation elevated regions regions prism and eye merge they have
[36:46] differences differences but it this is not true for all regions this was just very specifically for elevated region if you see this pdf you
[36:56] will see that um um but what i i recommend there is also um um in if you are familiar with
[37:06] google earth engine engine they they it has prism as well as i merge data sets that you probably can compare in your
[37:19] own region to see how they differ and here is the here is the link for that if you go
[37:28] quite a few precipitation data sets are available here especially prism and image version six they are both there so in your own
[37:36] region you may want to conduct your own comparison because there is no one answer that fits everywhere as you will
[37:44] see from dr hoffman's presentation also which was the prerequisite that validation is also very local in where there is
[37:54] in train is not complex um because i merge final assimilates re-engage data prism and imerge would compare
[38:06] well that's what i believe but you you probably want to validate in your own region region for your own accuracy
[38:16] assessment assessment thank you thanks amita another question that we had was how to install the net cdf4
[38:39] and the nco package from the anaconda prompt or is it necessary to use a bash shell and the answer is you can install uh the
[38:52] net cdf4 package and the nco package from either the anaconda prompt or the back shell so that is up to you both
[39:01] should work another question we had was the the the the ncks program can be installed through through the conda install
[39:17] which is the the line of the command which we provided in the slides for you and the
[39:26] answer is yes the ncks program along with all of the nco operators are installed as a package when you install the nco
[39:38] the conda install dash c conda dash forge nco which is the command that we provided for you in the
[39:45] slide so yes that will be installed with that installation and another question we received was i noticed that the latency
[39:59] uh the i.e the temporal availability of imerg product is about two to three months if it's right we can encounter some
[40:09] challenges in operational use so so to answer this question the image products in which we are using
[40:20] for both the demonstration as well as the exercise today is the final run product which comes out roughly three and a half
[40:30] months months after the observational month so that's why we're downloading data up until september of 2019 but for those who are interested in
[40:42] an operational application of imerge data data they do have both a half hourly so 30 minutes minutes as well as a daily
[40:53] early and late run product so separate from the final run which is what we're using and the early run product
[41:00] is released roughly four hours after the observation time and the late run product is released roughly 14 hours
[41:09] after the observation time so for those who are interested in near real-time applications of emerge data these would be the products that you
[41:20] would be probably the most interested in but again the the final run product the monthly product is only available as
[41:30] a final run product and because we're calculating monthly sbi that's why we're using using this product specifically
[41:40] another question we have is i'm trying to connect my earth data account account with guest disk however i can't find the nasa guest data
[41:52] archive archive it only appears as guest disk test data archive what should i do again we would
[42:03] uh we would recommend you to go back to the the information which is provided at the link
[42:11] link and you should be able to you know link your earth data account with the guest disk archive using those
[42:22] steps steps it should work um okay another question we had is uh if i have a case study where the
[42:34] precipitation is happening only during three months of the year for example march april and may would i calculate spi for these months
[42:44] only only then how to calculate the duration of the consecutive drought and other drought characteristics is annual sbi
[42:54] would be indicative of that case so in this scenario the case study or the the study area is
[43:02] uh is a an arid environment that receives receives three months of precipitation each year and for this case study where the
[43:12] precipitation only falls three months out of the year it is advised to calculate sbi at multiple time steps
[43:19] that would be monthly three months six month in annual and and when you calculate that focus only on
[43:26] those months that where the where you're receiving precipitation so in this case that the person who posed the question those
[43:35] would be the months of march april and may you would focus specifically on those three months when you were looking at the results
[43:42] from the sbi calculation and and that should show the duration of of the anomaly for wetter drive periods
[43:53] in again as a caveat in arid regions of the world spi does not perform as well on the
[44:00] severity of the drought so it's best to look more on the duration and you'll be able to tell that through
[44:06] looking at it through those different time steps of monthly three month and six months as well as annual
[44:25] another question that we had has to do and this has to do with pertaining to the part one
[44:33] of the this webinar it has to do with running the the raster dot series or r dot series
[44:42] uh which is run in grass through the qgis application and what can i do to calculate the standard deviation
[44:55] of seasonal precipitation if the r dot series tool is not working in qgis first thing we we can recommend is is it
[45:06] could have something to do with the establishing a path to grass within qgis so so maybe the first thing you could do is
[45:15] talk with somebody in your it department and help them to troubleshoot the the uh the issue of making grass compatible
[45:24] within qgis that would be the first way that you might want to troubleshoot this um um uh
[45:31] uh or if that is not working if you don't have access to somebody say in your it department
[45:37] um if if our if the grass tool r dot series is not available um then you will have to use some other
[45:46] programming language uh for example you might want to use something like python or r uh to calculate the standard
[45:53] deviation deviation and for the exercise you can skip this step uh if you if you don't have access
[46:00] to the r dot series tool um um so yeah hopefully that answers that i know some of you are having
[46:06] some issues troubleshooting graphs in qgis from part one so next gddp download downscale data are available i'm not sure whether they're available
[46:19] from gs disk but they are available on google earth engine and i think you can download them from aims nasa ames
[46:28] so there's a question here about how to install wget um that instruction is given on ges disk
[46:36] page when you go to data download options options um um wget is a link if you click on that it
[46:42] will will show you the steps how to do that we had a question pertaining to the python script to calculate
[46:54] spi and if there are any requirements i'm assuming she's referring to any parameters from the netcdf file that you
[47:08] pre-processed to use as an input for example like time units precipitation units and a name of variables
[47:18] and again once you've pre-processed pre-processed the the uh concatenated and rearranged the uh uh the dimensions using the nco commands
[47:31] uh uh that file should run in in the in the script that we provided and and to understand
[47:41] what what those parameters within that script are referring to i would ask that you go to the webpage for the national
[47:51] integrated drought information system and if you scroll down on that page under the section titled indices processing
[48:02] it gives information on what each of those parameters is is referring to in that script so hopefully that clarifies that question
[48:21] again uh we want to repeat that this today's recording of the webinar will be available on the rset webpage
[48:30] uh the training page for for this um for this specific webinar uh within 24 hours so we encourage you to
[48:39] again come back to the rc website uh and explore explore the the part two and you can re-watch this
[48:47] recording as well as uh the recording from part one which has already been uploaded to the web page
[48:53] and if you want you can view some of what is in store in part three which would be next tuesday so
[49:01] again again if you want to view today's recording go to the rsi webpage by tomorrow and we
[49:07] will have uploaded it we've also provided the homework for parts one and for part two and they are
[49:15] now accessible if you go to the the training page for this webinar again both homework assignments are now
[49:25] accessible so please feel free to start in them uh when you have the time so question 20 is what are the relative
[49:40] effects of short and long-term drying trends in satellite-based rainfall products products special resolution so yeah of course special resolution is
[49:50] in here is about 10 kilometers square so it's not super high resolution so you can only see trends within that region
[49:58] uh these data are 20 years long so you would um whatever trend you see in that could be
[50:08] a part of inter annual variability could be part of that too so you have to keep that in mind yes
[50:15] because the time series is about 20 years long so you will be able to see uh the
[50:27] variability and trend uh you're probably not long in a long enough time series to to be able to attribute it to any
[50:36] particular cause um for you can clearly see el nino la nina type variability and so that's short term drying that you can clearly
[50:48] see in these records but trend it's a little tricky i for 20 year period period it could be long-term
[51:00] multi-decadal variability that could appear as trend also so yes that is something to keep in mind so this starting
[51:39] date for i merge um for this data set is june 1st um 2000 that's when it started
[51:49] so for this long-term data set that we are talking about the first june 2000 2000 so question 22 is about
[52:15] standard deviation range if you were able to to run raster series r dot series and you had a
[52:23] standard deviation map then you would see minimum and maximum value that's the range that we are asking for
[53:18] there's a question uh which other parameters other than precipitation can be used for drought monitoring and mapping
[53:29] mapping some other products which are derived from remote sensing data which can be used for drought monitoring
[53:38] are evapotranspiration as well as soil moisture products which are two important parameters for drought monitoring and mapping
[53:49] and i would like to take the time now to promote a and our set training that will be
[53:54] happening in april that will be specific specific entirely to the remote sensing applications for agriculture agriculture and food security
[54:07] and we will be discussing both of those products evapotranspiration and soil moisture in that training so we hope you will stay tuned for
[54:16] and and if you are not please get on the rset list serve so that we can notify
[54:20] you on the exact dates of that training which will be held in april well since we're past the hour we will
[54:48] now be concluding the part two of the webinar applications of gpm iomerge reanalysis for assessing extreme dry and wet periods and for calculation
[55:00] of sbi based on eye merge to monitor wet and dry conditions i would like to thank my colleague amita mekta
[55:10] as well as my colleagues at arset brock levins selen hudson odoi and jonathan o'brien o'brien for contributing to this
[55:18] webinar next tuesday we will be concluding this three-part webinar webinar with with gpm image training which will be a
[55:27] comprehensive final part where you'll be applying the skills that you learned in parts one and two and applying them to a
[55:35] study area that you will select again all the homework assignments for all three sessions are available on our
[55:43] training page and and homeworks for part one and part two are already online and accessible please submit these answers via the
[55:54] google form which you can find linked on that same web page as a reminder the due dates for all
[56:00] three homework assignments will be next month on february 11th for part one february 18th for part two
[56:08] and february 25th for part three the contact information provided here is for amita and myself and we want to
[56:23] thank you all for joining us today we hope that you got something out of this and again if you have
[56:30] if you want to go back and refer to the video it will be online by tomorrow so
[56:35] thank you all for joining us and we hope to see you next week for part three just just a suggestion that
[56:44] in part three since you will be working on the area of your own interest you may want to have a shapefile or region
[56:52] already decided when you come in to the webinar webinar and thank you for attending this session and see you on tuesday
