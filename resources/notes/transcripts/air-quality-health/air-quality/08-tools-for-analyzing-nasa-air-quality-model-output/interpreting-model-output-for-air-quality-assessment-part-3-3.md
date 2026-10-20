# Interpreting Model Output for Air Quality Assessment, Part 3/3

`https://www.youtube.com/watch?v=HDXwk1r-QI0` · id 224 · 1:28:54 · module 29 — Tools for Analyzing NASA Air Quality Model Output

[00:01] good morning and welcome to session three of tools for analyzing nasa air quality model output my name is sarah strode and i will be
[00:08] presenting part three of this training our third session focuses on interpreting model output for air quality assessment and it builds on the
[00:17] tools that were discussed in the first two two sessions sessions similar to the previous session we will
[00:23] use the collab environment to demonstrate tools and i encourage you to follow along part three has two main learning
[00:32] objectives objectives these are to apply the tools discussed in sessions one and two to recent air quality events
[00:40] and to learn how to analyze nasa model output along with observations to visualize the impact of fires and other
[00:46] emissions emissions on air quality the first two sessions introduced a variety of tools for visualizing modeling output downloading and
[00:56] subsetting output files and analyzing data data in this session we will apply these tools to the geos model output in
[01:04] conjunction with satellite or surface observations to investigate air quality while this training will focus on two specific case studies the approaches
[01:12] shown could be modified and applied to a variety of air quality applications this session is organized around two
[01:23] case studies we will begin with a case study of august 2021 wildfires in the western united states
[01:30] i will start with slides describing the air quality event and some of the analyses we can perform with model
[01:35] output output i will then walk you through the jupiter notebook that was used to create many of
[01:40] the plots shown in the slides we will then follow the same format in our second case study which focuses on
[01:47] december hayes in northeastern india during the notebook demonstrations i encourage you to follow along in your own copies of the notebook
[01:57] in order to follow along in collab you will need to copy the notebooks and data files for this session into your own
[02:02] drive account if you haven't already the slides from session 2 include instructions on how to do this
[02:12] let's begin our first case study august 2021 wildfires in the western united states this case study builds off the analysis
[02:20] shown in the just disk portion of the first session to set the stage for this study the
[02:25] image on this slide which was created in nasa's worldview website shows the modis truecolor image for our study region on
[02:32] august 14 2021 over plotted with thermal anomalies from the viirs instrument to show the location of fires
[02:43] you can see in this image that smoke from these fires extends across much of the northwestern united states
[02:50] the questions we will investigate in this study are how did smoke influence air quality in the western united states in august 2021
[02:58] locally and in regions downwind how did air quality change over the course of the month month and how did this month compare with
[03:06] previous months and years we will start with our first question how did smoke influence air quality in
[03:16] the western united states in august 2021 locally and in regions downwind to get a sense of how smoke from the
[03:23] fires was transported downwind we can consider this series of images for three consecutive days in august similar to the image on the previous
[03:32] slide these modis images are overplotted with viirs thermal anomalies to show the fire locations we can see both
[03:38] individual plumes of smoke near the fires and the transport of smoke across the region region we also see how the transport and
[03:49] distribution of the smoke change from day to day moving eastward from the 13th to the 15th another way to see the smoke transport
[04:02] on these days is to look at the aerosol index or ai from the amps instrument these images were created in the
[04:08] worldview website and the red colors show higher values of aerosol index aerosol index is a quantity that
[04:14] provides information on aerosol concentrations in the atmosphere it is sensitive to absorbing aerosols and also depends on the height of the aerosol
[04:21] layer layer the aerosol index in these images shows the easter progression of the smoke between the 13th and 15th consistent
[04:29] with the true color image next next we will use geos products to further explore this event so how can geos models incorporate
[04:41] information on a wildfire event biomass burning emissions come from the quick fire emissions data set or cuped 2
[04:48] which is based on satellite observations of fire radiative power furthermore geos fp and mira 2 include data assimilation of aerosol optical
[04:57] thickness thickness more details on the inputs to the geosystems are available in the arset training introduction and access to
[05:05] global air quality forecasting data and tools tools the top figure on this slide shows the biomass burning emissions of black
[05:13] carbon that are included in gsfp for august 14. other aerosol emissions are also included but in this figure i'm just
[05:21] showing black carbon which is one of the aerosol types emitted by fires you can see emissions hot spots in the
[05:28] grid boxes with fires a second plot shows the gsfp aerosol optical thickness or aot also commonly called aerosol optical depth
[05:38] provided by the taut xtal variable within geos on the same day we see high aot over and downwind of the
[05:48] areas with high biomass burning emissions we can then compare the gsfp aot aot key with the aot observed by the beers
[05:57] instrument shown in the bottom plot note that although geosfp assimilates modis aot it does not assimilate beers
[06:06] aot aot nonetheless we see qualitative agreement in the spatial distribution of the aot the figure shown here uses the viirs
[06:15] level 3 product but if you are interested in plotting the viirs level 2 data tools are available in the rsat
[06:21] training on modus to beer's transition for air quality applications the link to that training is provided here
[06:31] and in the next part of this session we will show how to generate these plots in a jupiter notebook
[06:42] but if we're interested in other pollutants in addition to aerosols we can use gfcf to see pollutants such as no2 and ozone
[06:52] no2 is also emitted by fires the map on the left showing the gsfp biomass burning emissions of black
[06:58] carbon is what we saw on the last slide we can compare it then to the map in the
[07:04] center center which shows the no2 concentrations in the lowest model level of docf and we see high levels of no2 co-located
[07:13] with the high biomass burning emissions in contrast the map on the right shows that the ozone concentrations are
[07:23] locally reduced in some of the regions with high no2 although ozone production can occur downwind studies have shown that wildfires
[07:33] degrade air quality in the western united states this figure from gupta at all all shows aerosol optical depth and pm 2.5
[07:43] concentrations concentrations at locations in california and you can see the much higher values during a period with fires compared to
[07:52] before and after the map on the right comes from the u.s environmental protection agency's air now website
[08:04] and shows pm 2.5 concentrations for august 14. high values are present over much of the northwestern united states on this day
[08:12] in our next step we will compare data from two of those monitors to output from merit2 so how does merit2 pm 2.5 compare with
[08:24] air now observations at the beginning of the case study we saw that smoke moved eastward over the
[08:30] period from august 13 to 15. we will therefore consider time series for one station in seattle washington
[08:38] shown in the black dot here which is toward the western side of our domain domain and one first station further east the
[08:46] missoula montana frenchtown beckwith station which i'll be calling back with for short the map here shows those two locations
[08:57] the time series plot shows the observed daily average pm 2.5 concentration from the seattle and beckwith sites in the
[09:05] black and dark blue lines the mirror ii pm 2.5 for the corresponding grid boxes is shown in the
[09:14] gray circles for seattle and then the light blue triangles for the beckwith station so to compare the model and observations
[09:25] we compare the black versus gray circles for seattle and then we compare the dark versus light blue
[09:34] triangles for beckwith we see that at both stations the meripm 2.5 is higher than the observed during
[09:41] the fires but both merit2 and the observation show that the peak values occurred earlier in seattle compared to
[09:48] back with so how did pm 2.5 change before during and after the fires based on the time series in the previous
[09:58] slide we can define periods for before during and after the fires and then make a bar graph similar
[10:05] to the one in the gupta at all paper the bar graph shows elevated pm 2.5 at both sites in both merit2 and the
[10:13] observations during the fire compared to before and after the fires it also shows that merit2 overestimates the observed pm 2.5 at these stations
[10:23] during fires in the earlier sessions of the training we discussed a number of factors that contribute to a mismatch between models
[10:31] and surface observations one of these is the comparison of a grid box average to a point observation
[10:37] to visualize why that can be important this modus image shows strong variability in the amount of smoke over
[10:43] fine spatial scales consequently consequently we expect a surface station to measure different values depending on whether it
[10:50] lies within a plume or just outside of it it in contrast these values could be averaged together within a grid box
[10:58] another possible factor to keep in mind is the vertical distribution of aerosols concentrations measured at a surface
[11:04] monitor are sensitive to whether the aerosols occur at the surface or higher up in the atmosphere while the assimilation of aot into geos
[11:12] provides information on the horizontal distribution of aerosols aot is a column measurement so it does not provide the
[11:19] vertical distribution we now move on to our third study question how did august of 2021 compare to previous months and years
[11:29] the giovanni demonstration in the first session addressed the question for fire season pm 2.5 for california using
[11:36] maritu data here we will make plots in our jupiter notebook to examine this question using maritu data for aot at the beckwith
[11:43] worth site the time series here shows monthly mean merit2 aot where the 2000 through 2021 and the red dot indicates the value for
[11:55] august of 2021. you can see that august 2021 stands out is much higher than typical aot values
[12:04] at this location but it is not the highest value in the time series this slide shows a couple of different
[12:11] ways to summarize this time series and place the august 2021 aot in the context of the 2000 to 2021 mara ii record for
[12:19] this site the histogram on the left bins the data by aot and shows the frequency with which different aot
[12:29] values occur the height of the bars represents how many months of the data fall into the given aot bin
[12:39] the red dot shows the value for august 2021 we can see that most of the months in
[12:46] the time series had aot values that fall below 0.15 0.15 the box plot on the right illustrates
[12:54] the distribution of the mara to aot for this this site in terms of the median shown in the green line here
[13:04] and the quartiles so 25 of the data lies below the bottom of the box and 75 lies
[13:12] below the top of the box the bottom line extends to the minimum values in the data while the top line extends to 1.5 times
[13:21] the interquartile range and in this plot values falling above that are considered outliers and shown in the circles
[13:28] and we can see august 2021 is the red dot here so we can see from this that august 2021
[13:37] is the third highest value in this station time series to summarize this case study we found that wildfire smoke affected a large
[13:46] region of the western united states during august 2021 the impact is seen in geos products as well as surface and satellite
[13:54] observations observations august 2021 had the third highest aot since 2000 in marito output for the missoula frenchtown beckwith location
[14:04] next we will walk through a jupiter notebook that can be used to create many of the plots used in this case study
[14:13] so in this portion of our training we're going to walk through the jupiter notebook notebook firecasestudy.ipnb firecasestudy.ipnb and if you have that open in your own
[14:21] collab you can follow along as we go through it hopefully you were able to download both the notebook and also the associated
[14:29] data sets into your google drive in session two we saw detailed instructions on how to do that uh which
[14:35] you can refer back to um in case you have any difficulty either downloading into your drive or or
[14:41] with getting things to run during this session this session will be uh recorded so you'll be able to access it later as
[14:47] well so so we're going to use this notebook to generate many of the plots that we just saw
[14:56] in the slides describing a western united states wildfire case study but please keep in mind that this
[15:03] code is for demonstration purposes only and users will need to check it for accuracy and revise it to fit their own
[15:08] objectives so similar to what we did in session two we're going to start by importing some packages that we'll use throughout the
[15:18] notebook for our analyses um we'll also need to install cartopi if you don't have it installed already
[15:25] so we'll give that a few minutes to run while that's going i'll go ahead and describe describe the approach to the data sets used in
[15:33] this notebook so so really for for ease of demonstration during the training um i've already downloaded um the data sets you'll be
[15:42] using um and hopefully you were able to copy those into your own drive um and that's to make it easy to just
[15:48] read these into our notebook notebook however i also make a note of for each dataset where it came from and
[15:56] mentioned some of the tools that we've learned about earlier that we could also use to download some of those data sets
[16:02] so you would be able to customize those in the future if you wanted to look at for example different dates
[16:16] so for example one of the first data sets that we're going to load is viirs data and this is downloaded
[16:23] from the lads dac and i provide the website here so as we saw in session two we'll need to mount a
[16:32] google drive here in co lab and then we'll provide the path in which we're going to find the data
[16:40] so i've organized organized in my drive to have all that data under case study data and you may have it set
[16:47] up that way as well if you choose to organize it in a different way or have a different name
[16:52] for your subdirectory you would just need to modify the data path accordingly so now that we've finished all of our
[17:03] importing and installing we can go ahead and run this field so once we've mounted the drive then
[17:11] we're able to read in this viirs data file here so we open the data set and then we read
[17:18] in in a variable named aerosol optical thickness by 50 land ocean mean as well as longitude and latitude
[17:29] so now that we've run this section of code we can look over here in our variable inspector
[17:35] and we can see that we now have this viirs aot data array and we see the dimensions here
[17:41] as well as the latitudes and longitudes that go with that so for our next step we're going to read in uh some files
[17:53] from gsfp in particular from the aer and adg collections for august 14 of 2021 as well as a file from geocf
[18:04] and so i'm specifying the files here and note that i've chosen um the hour as 22.30 22.30 and that's because this is uh utc time
[18:15] but the local time in our study region for this hour um is close in time with the beers overpass so that's why we
[18:22] chose that particular time so so here i've already downloaded the files so you don't have to worry about
[18:31] downloading them but if you did want to in the future as an additional resource i have included a function at the bottom of
[18:38] this notebook that can download the aer and adg file for a particular date it's very similar to the function that
[18:45] was provided uh in the session two notebook um with just the modification that it downloads just this one time for
[18:51] both adg and aer collections but you don't need to run that now because we already have the files in the drive
[19:00] similarly to download a different glcf file you can also refer to the functions provided in the session 2
[19:06] notebook so now we're going to define a function that will read the aerosol optical thickness from the totex
[19:17] tau variable in the gsfp file and it will also calculate the pm 2.5 from the individual aerosol components
[19:25] following the equation that we saw in the previous sessions and then we'll call this function giving it the aer file that we specified
[19:39] earlier now another thing we talked about in our slides about the case study was the biomass burning emissions of black
[19:51] carbon carbon and so to read those in we need to define a function to read the emissions
[19:58] and since emissions are provided for different aerosol types and also different types of emissions such as biomass burning or
[20:04] anthropogenic and we're going to define our functions so that it takes in the file name the specie is
[20:10] our choice of aerosol that we want to read and then m-type is the type of emissions so bb for biomass burning and
[20:16] for anthropogenic and so the variable name is a concatenation of those things and so now we can call that function
[20:28] telling it we want to read our adg file which is where the emissions variables are are we want to read it for black carbon and
[20:35] for biomass burning so now that we've read that in we're ready to plot some maps of what
[20:46] these things look like so here i've defined a function plot map i won't spend much time on this because
[20:51] it's very similar to what we saw in the session 2 notebook we'll go ahead and run that
[20:57] so it's going to take in the variable that we're plotting you can give it a name that you want to
[21:02] use the longitudes and latitudes um the domain that we're going to include in our map and also the minimum and maximum
[21:08] values for the color scale one important difference compared to the mapping in the section two notebook um
[21:18] is that i've changed the color scale here and so this is something that you can easily customize to put in whatever
[21:24] color map you would want to use another thing to notice here is these set under and set over commands that
[21:30] provide colors to use when a value exceeds the range that we've specified with vmin and vmax so if you
[21:38] see these colors on your map you'll know what that means so now we're going to establish the
[21:47] domain that we want to plot this is for the western united states and so it's going from 135 west to 100 west and from
[21:53] 32 to 50 north and so now we're going to call this plot map function for our black carbon biomass burning
[22:02] emission variable and we see that it's generated a map which you might recognize from the slides that we just saw
[22:18] similarly we can call that same mapping function for the totex tau variable and then we'll give it the name
[22:25] explaining that that's the aerosol optical thickness so now we see this map and finally we'll do the same thing for
[22:39] our viewers aot that we downloaded first so one thing to note here on this viewers map you can see these
[22:49] crimson points and so that's indicating the values of it lie above are our maximum that's provided here
[22:57] another thing to keep in mind is we can see that the resolution here for our beers data is different from the
[23:02] resolution of our gsfp data and so when we call our map function we want to make sure that we use longitudes
[23:09] and latitudes that correspond to the particular variable that we're mapping finally we'll make a map of the surface
[23:22] pm 2.5 you can also see here that we're calling this save fig in order to save our
[23:30] figure to a png file if we come over here to this folder you can see um here's the png files that
[23:37] we've saved so far and if we click on this dot dot dot we have an option to download to our local
[23:43] machine if we want to so next we can look at um some other pollutants such as no2 and ozone uh from
[23:56] the geocf we've already downloaded this cf file so now we're just going to open it with x-ray
[24:05] x-ray and extract the no2 and the ozone into cfno2 and cfo3 respectively as well as getting the lawns and
[24:14] latitudes so now we can kind of see what this cfno2 structure looks like we see that this is a data array and we
[24:26] see the dimensions here and we also see some information on the attributes so we get the long name of the variable and
[24:34] also its units and now we can make a plot of the no2 and ozone from gocf and so there's
[24:50] the no2 map on top and the ozone map on the bottom so next we're going to compare our model
[24:58] to observations at a few station locations locations and for this i downloaded the daily average average data from
[25:08] a couple of stations from epa's air now website website the link to that site is provided in the
[25:13] slides slides i did rename those output files um to indicate which stations were downloaded and here now has data in a variety of
[25:25] formats but i chose the daily means for this analysis so these are csv files and if we want to see what they look
[25:34] like we go into our case study data you can find those files and so looking here we see
[25:47] in the csv file we have the date the source of the data and then we have the daily meme pm 2.5 concentration as
[25:57] well as other information including the units uh the name of the site and other information including the site
[26:05] name the state that's in latitude and longitude and so forth so now we can read this in using pandas
[26:14] read csv function and then if we take a look at what that data frame looks like this
[26:23] time for the second station we again see we now have the date and all of this information such as daily
[26:33] mean pm 2.5 concentration the site name here it's the frenchtown beckwith station we can see that it's in
[26:45] montana in missouli missoula county and we see the latitude and longitude as well as other information that might be useful
[27:00] so now for our analysis it might be convenient to have both sites information uh integrated into the same data frame
[27:09] so to do that we're going to select the columns that we want to keep from the first data frame
[27:15] and we're going to rename them so we'll specify um that in this column name that this is
[27:24] the seattle pm 2.5 um that way when we merge it with another data frame that also contains a
[27:30] daily meme pm 2.5 concentration we understand which is which similarly um for the second one we're going to rename
[27:41] beckwith pm 2.5 so we're going to merge together these two data frames and we're merging them on the date
[27:52] and then we're going to set the date as the index since our analysis is focusing on august
[28:01] we also want to limit our data frame to just august um and so one way we can do that is to
[28:07] add a column called month which is based on our date index and then to select values where the
[28:14] month is equal to eight for august and then i'm going to make a plot of the result
[28:25] so now we've created our plot that shows the seattle and beckwith pm 2.5 concentrations for august of 2021.
[28:36] so to compare with these stations now we need to read in the corresponding mira ii output for just the single locations that
[28:44] correspond to those stations and there are multiple ways you could do this this we saw examples in the session 2
[28:53] notebook for how to extract model output for a given location so you could use that we also saw that the jezdisk has a lot
[29:01] of tools for subsetting and downloading and so in this case i used the threads option within the jazz disk
[29:10] and used that to download a time series for a single point for the marathoo data and the instructions for
[29:17] how to do that um are provided at this link here and so from that we already have um in our drive uh the
[29:29] resulting data file as a csv file um for the maritube station data and so here we define a function that
[29:37] will read that file and then it will calculate uh the pm 2.5 from the individual components using the
[29:44] equation that we saw in the previous sessions so so since we're comparing two observations that are a daily average we
[29:54] also need to take a daily average of our merit2 data and one thing we need to be aware of
[29:59] here is time zone so the mira 2 data is in utc but if we're going to take the daily
[30:05] mean we want to make sure we're averaging the time period that the observations were averaged at and so you
[30:11] need to confirm this for whatever observations you're using but i'm assuming here that our daily mean and
[30:16] the observations is in local time and so since i know that these two sites are in different uh time zones
[30:25] uh we have an if statement here uh to select uh the correct time zone um for our station and
[30:31] we use this pitz package um which has a time zone function um in order to calculate the utc offset
[30:39] um um for the offset between the local time and utc and then we can add that into our time
[30:46] in in our mira data and that way we'll be able to use the local time when we take our daily
[30:53] mean mean and so here we are going to resample the mera data on a daily time scale so the ds stands for daily here
[31:02] and we're aggregating with the mean so that's going to give us our daily means from the merit
[31:09] data data and that's what we'll return from this function so now we can call the function that we
[31:18] just described above to read the mira 2 output for these two station locations and then we're going to merge them
[31:29] together on the time variable into one data frame and we can see here what that data frame
[31:34] looks like we have the time which you can see is now daily and then the seattle and back with mera2
[31:40] pm 2.5 values and we can make a plot to see what that looks like so now for our analysis we want to
[31:54] combine together the station data and the mira 2 output and so to do that we're going to create
[32:00] a column called uh date which is a date time object based on uh the index in our
[32:06] mara2 data frame and then we can use that to merge together with the date of the observations
[32:19] so now if we look we see we have the date date which is now described just as the day
[32:25] we have the seattle end deck with observed pm 2.5 and then the mira ii pm 2.5 for seattle and beckwith
[32:34] and i'm spending a lot of time here on talking about dates and lining up dates and that's because as we saw in the
[32:40] session two it's important to have co-location in time as well as space when we're comparing the model with
[32:48] observations so now we're ready to make a time series of the observations for both the sites for both merit2 and the observations
[33:03] all together on this one plot so that we can compare them and then the next step that we saw in
[33:15] our case study was we used this plot to define uh some different periods as either before during or after
[33:22] the fires and so to do that i add a period column to our data frame by default it starts as none but then
[33:32] dates in this period that i've defined as being before the fires we set as before then between these dates we
[33:39] set it as during and then for these dates we said it is after and then we can group the data according to these
[33:48] periods periods and take the average over each period and this sets us up then where we can
[33:53] create our bar plot for the different periods and so now we see the bar plot that i
[34:02] showed in the slides and then the next question we examined was was was this month's aerosol optical depth
[34:11] exceptionally high at the beckwith location and for that we needed to consider a longer time series of amira
[34:17] two two and so to do this analysis um i downloaded um the monthly maratu data again using uh the threads option at the
[34:26] jazz disk so that's the file here that i got in this way and if we run this we're going to read
[34:37] this file and then set the time index here i've added some days to make it reflect the center of
[34:46] the month rather than the beginning and then i've also renamed this column to something a little bit shorter
[34:55] and now we're ready to plot that time series series so we here are selecting i'm just the taught
[35:02] x-tile variable to plot and then we're going to over plot it with the particular time august 2021
[35:11] that was the focus of our study and so there we see that time series with the red dot indicating august of
[35:19] 2021. 2021. our next step is to make the histogram and box plots so i'm going to put these side by side
[35:26] so we set up the subplots here and then we can call the histogram plotting function specifying that we
[35:32] want to do it for the tautex tau variable variable and i've chosen here to use 30 bins in
[35:38] the histogram but depending on whether you want a larger number of smaller bins or or a smaller number of larger bins
[35:46] you could choose different numbers here that would suit the amount of data you have and and how it's distributed
[35:53] we also then overplot here in the red dot dot where the value was in august 2021 then on the right side
[36:02] we make the box plot here and that pretty much concludes um all the figures that we made for case study
[36:16] uh one um as i mentioned before uh we used a lot of output that was um previously
[36:22] downloaded onto the drive but we don't need to do it now but below here i do provide some functions that
[36:28] can be used for downloading that data and now i think we are ready to go back uh to our slides and start on the second
[36:36] case study our second case study focuses on haze over northeastern india in december 2021. 2021. this haze is visible in the gray in this
[36:48] beer's true color image and extends across the northeastern region region this image of the viirs true color
[36:57] product is from december 22 2021 and was created in the nasa worldview website the questions we will investigate in
[37:06] this case study are can models simulate or forecast particulate pollution levels over delhi in december 2021 how do pm 2.5 concentrations vary on
[37:17] hourly or daily time scales and how do aerosol levels change seasonally to look at surface pm 2.5
[37:30] we will use observations from a surface site the us diplomatic post new delhi downloaded from the open aq website openaq was one
[37:39] of the networks that was mentioned during session two and this site shows high levels of pm 2.5 in december 2021.
[37:52] the link to open aq is provided here the plot shows the time series at this station for december 2021
[38:00] looking at this time series we see that there is diurnal variability which is the how the values change over
[38:08] the course of the day and also day-to-day variability in particular we see that the concentrations rise after december 19th
[38:18] and then fall sharply on december 27th we can now compare the time series of pm 2.5 from geocf shown in orange but the
[38:33] observed pm 2.5 shown in blue to see how well gocf captures the temporal variability at this station
[38:44] we could summarize the distribution of the observed versus modeled pm 2.5 in terms of the mean percentiles minimum
[38:50] and maximum values shown in this table and in the box plot comparing the means we see that the mean value of pm 2.5 for
[39:01] this month in gocf is approximately three percent lower than the observed in contrast the median value is slightly
[39:10] higher in gfcf than in the observations there's a larger range of values in the observations observations which have both a higher maximum and a
[39:19] lower minimum this is not surprising since we are comparing observations from a single site to a grid box average
[39:29] we now zoom in on the december 18th through 27th event during which observed pm 2.5 concentrations reached values over 500
[39:38] micrograms per cubic meter and then declined declined the figure on the left shows that glcf reproduces the timing of the increase
[39:48] and subsequent decrease but it underestimates the peak values and overestimates the values at the end of the period
[39:58] and that's shown here in the difference plot as well so this plot shows the values in gfcf minus the observed
[40:06] values for pm 2.5 essentially the difference between the blue and orange lines another way to compare geocf with the
[40:15] observations is with a scatter plot and by calculating some statistics the scatter plot here shows the glc fpm 2.5 on the y-axis
[40:24] versus the observed pm 2.5 on the x-axis the solid black line shows the linear regression line while the dotted line
[40:30] shows the one-to-one line the slope of the regression line is less than one indicating that as the observed values
[40:36] increase the increase in the glcf values tends to be weaker the correlation coefficient is 0.73 so that our squared value is
[40:45] approximately 0.53 i also show the root mean square error rmse rmse the color of the scatter points
[40:52] corresponds to the time of day which can be helpful for identifying whether certain times of day are contributing
[40:58] more to the scatter here for example we see that many of the points that fall well below the regression line are
[41:05] occurring during the early afternoon shown in this yellow color the analysis here thus includes the effects of both diurnal and the
[41:12] day-to-day variability the next step of our analysis is to consider these two time scales separately in this slide we focus on the daily
[41:24] variability variability one way to remove diurnal variability is to take daily means this gives us the plot on the left which
[41:33] shows daily variability in the time series there is good agreement between gocf and the observations for the timing of the
[41:42] increase and decrease if we were interested in the peak values we could also consider the daily maximum
[41:51] instead of the daily mean and this is shown in the figure on the right we can see that gocf has a larger
[41:58] underestimate in the daily maximum compared to the daily mean we can also look at the diurnal variability
[42:09] variability there could be multiple ways to do this but here we average over all the days of
[42:13] the month for each hour in the day to create an average diurnal cycle and that is shown in this figure here
[42:22] gocf reproduces the general shape of the diurnal cycle though the amplitude of the cycle defined here is the maximum minus the
[42:30] minimum is somewhat smaller in gocf compared to the observations session one of this training discussed the difference between the geocf replay
[42:45] and forecasts so far we have been using output from the glcf replay however if we are interested in
[42:52] predicting air quality we can consider the forecast instead this figure shows five-day forecasts of pm 2.5 from gocf for three consecutive
[43:01] days indicated in the large dots for comparison it also shows the replay in pink and the observations in black
[43:15] so you can see how the forecasts diverge from the replay over time the paper by keller at all 2021 which is
[43:30] provided the link is provided here provides an evaluation of the gocf forecasts for the final portion of this case study
[43:43] we zoom back out to consider the seasonal cycle the animation of monthly mean modus aot shown here which was generated in
[43:52] giovanni one of the tools shown in session one shows seasonal variability over northeast india with the region of
[44:00] maximum aot shifting southeastward over the year we will now look at this seasonality in merit2 and also ask the question of what
[44:11] aerosol types contribute to this seasonality in different areas in addition to total aot which can be compared to satellite
[44:21] observations observations merit2 provides the aot for each aerosol component component since the modis aot animation showed different seasonal variability between
[44:30] regions regions we will examine the seasonal cycle of aot in mara2 for two locations the deli location that we examined earlier
[44:39] and another site putna located further southeast southeast the map below shows the approximate location of these sites on top of a true
[44:47] color image created in nasa worldview so here we look at merit2 aot by component component the bar plots show the mira ii aot for
[44:58] the delhi and putna sites averaged over 2020 and 2021 while the bottom while the top of the
[45:05] bars indicates the total aot the colors of the bars show the aot contribution from each aerosol component
[45:15] we see that in delhi the dust component shown in orange drives a maximum in june in contrast in putna the peak occurs in
[45:26] december december with the largest contribution coming from sulfate aerosol to get an idea of where sulfate aerosol
[45:34] might be coming from we can look at a map of the december anthropogenic so2 emissions in mara2
[45:42] which comes from the so2 mn variable and that map is shown here in summary for our second case study we
[45:52] analyzed the daily and hourly variability of pm 2.5 at a surface station compared to gocf output focusing
[46:00] on an episode of enhanced pm 2.5 glcf captured important aspects of the temporal variability although some biases were present
[46:09] meteorological data from geos and other nasa products could be used to further interpret this comparison although we
[46:15] did not include that here we used the mara2 time series to compare the seasonality of two different sites
[46:21] in northeast india and the contributions of different aerosols we will next step through a jupiter notebook to show how many of these plots
[46:29] were created please remember that these routines are examples only users should check the code for accuracy and can modify it to
[46:36] fit their specific analysis needs in this portion of our training session we're going to walk through the jupiter
[46:47] notebook india case study dot ipynb which was used to generate many of the figures that we saw in the slides
[46:54] describing the second case study so i encourage you to follow along in your own notebook and as we mentioned uh previously
[47:05] these notebooks are for demonstration purposes only and so users would need to modify them for their own purposes and
[47:11] to check them for accuracy and as we did before we're going to start by importing some packages
[47:18] and installing curtify and in terms of the data files that we read in it'll be the same setup that we
[47:26] saw before where the data that we're reading is already loaded onto the drive but i'll be describing uh where you can
[47:33] go go to get that data and also as we saw before the notebook is currently expecting the
[47:44] data to be living in drive in this um case study data subdirectory so if you've placed the data somewhere
[47:51] else you'll just need to modify the path here to reflect where the data is located so we'll just wait a minute here um for
[48:07] people to get car to pi installed and now we're ready to mount our drive okay okay so the first data set we're going to
[48:28] read in um was downloaded from the openaq platform and the address for that is given here this is one of the
[48:35] platforms that was uh mentioned during the session two training and i did uh rename the file that i
[48:42] downloaded to this to indicate where it's located so we'll use the pandas read csv to read this csv file into a data frame
[48:56] and we can see what the beginning of that data looks like so here we see the location id we see
[49:04] the site location it's city country and then we see that the time is provided both in utc and in local time
[49:12] we can see the parameter its value its units units and the latitude and longitude of the site
[49:19] in the second session we saw that it's important to know your data data and one thing that we quickly see when
[49:26] we sort of glance at the data here is that we have these values of negative 999 999 so that
[49:32] is typically an indicator of missing data and that's something we want to be aware of because if we're going to do
[49:36] something like take a daily mean we wouldn't want to be averaging in values of negative 99. and so here i'm just going to search for
[49:44] all those values and set them to be not a number and then i'm going to convert our local time to a
[49:58] date time object for ease of manipulation manipulation and then i'm also going to create another column called datetime which is
[50:06] basically the same as the utc column but in a somewhat different format as a datetime object and i'll talk a little
[50:12] bit later about why we did that and then we'll just set this local time as the index of our data frame instead
[50:20] of like 1 2 3 4. and since our study is focused just on the recent years 2020 and 2021 we'll go
[50:32] ahead and trim our data frame to just those years now we can see what it looks like
[50:43] so here we have our time index in local time and then we have all this information that we
[50:49] see comes from the csv file and we have our utc time and then we have have a date time
[50:57] column which is essentially essentially the same as this utc column but you can see that the format is a bit
[51:05] different and so now we can plot this data i'm choosing just the month of december 2021 and see what it looks like
[51:24] and as we saw in the previous notebook we are saving these figures here as png so if we come over here we can find that
[51:32] png file and if we want to we can download so in this analysis we looked at daily versus hourly variability and so
[51:44] to make that a bit easier we're going to add columns one called day and one called hour that refer to the day or the
[51:50] hour of the time index and then since it's often useful to know the coordinates of our station i'm just
[51:58] going to print out the station longitude and station latitude so now we're ready to read in the geocf
[52:08] output for this location up for the month of december 2021 and this file was already downloaded to a drive
[52:17] but it was generated by accessing gscf through the opendab tool and by then slicing the dataset on time
[52:25] latitude and longitude and we don't need to do that now since i've already done it but i do at the bottom of this
[52:31] notebook notebook provide a function that shows how to do this so for now since we already have it
[52:39] saved as a csv file we'll go ahead and read that in we're going to set time as the index
[52:48] similar to how our observation data set is designed and you can see now what this data frame
[52:57] looks like so now we want to merge our glcf output with the observations and so to do that we're
[53:12] going to create a date time column in the gocf data which will have the same format as our station data had
[53:24] so so there's that column and now since we have our dates in a consistent format we can use that to
[53:31] merge together the columns that we want from each data frame this is the data frame with the
[53:36] observations this is the one with the gocs and so we're matching them up on date time time and then we'll make that the index
[53:48] and now we can see what our merged data all looks like and so here we have the date time column
[53:54] and this is in utc we also have the day and the hour but you'll notice here the hour is what
[54:00] we set in terms of local time and so that's why you're seeing this five and a half hour offset between the hour here
[54:06] and the time here and you can also see those not a number uh values where we had missing values in
[54:12] the data and i'm just going to rename the value column to obs pm 2.5 so that i can keep track of
[54:22] what that is and now we're ready to make a plot of the observed and gocf columns for pm 2.5
[54:32] and here i've customized the marker size to something that is legible on this plot but depending on how much data you
[54:38] have and how big your plot is these types of parameters can be adjusted and customized and now we're going to make a box plot
[54:51] and this is similar to how we made the box plot in the previous notebook except that we've chosen two columns to plot so
[54:57] you see them both showing up here and now we're going to print out a table just summarizing some of the basic
[55:06] statistics for this data and we do that using the describe function from pandas and it generates this table which we saw
[55:17] in our slides if instead of having a table like this the screenshot we wanted to save this as
[55:23] a csv file we could just uncomment these lines here and then it would save this table out
[55:36] to a csv file and so we can open that up here and we see our our table that we saved
[55:44] and which if we wanted to we could then download to our local machine and here i print out
[55:56] the the bias bias in terms of the percent difference of the mean of of the glcf pm 2.5 and the mean of the
[56:06] observed pin 2.5 we now want to focus in on this december 18 to 28 event and so i
[56:18] trimmed down the data set to just those relevant dates and then we can plot just that period
[56:29] and we can also use the difference function to plot the difference between these two columns in this next section we're going to make
[56:41] a scatter plot of the modeled versus observed values and include a regression line and some statistics like the
[56:47] correlation and the root mean square error error we also saw an example of how to make scatter plots and calculate statistics
[56:54] in session 2 jupiter notebook and so that's another reference you could use in this case we're going to color code
[57:01] the scatter plot by the hour of the observations to help us visualize how different times of day might be
[57:06] contributing to the scatter in the data set so so i won't spend too much time on this
[57:15] section since we saw a scatter plot example in the previous notebook but when we run it we can see it generates this scatter
[57:23] plot plot and it prints out here these statistical values that we calculated the next part of our analysis is where
[57:34] we looked at the daily means of versus hourly variability and so in this step here we re-sample the data
[57:42] daily so the d is for daily and then we can aggregate over the day either with the mean to get the daily means or with
[57:48] the maximum to get the daily maxes we could also look at medians or other statistics if we wanted to
[57:57] and then here we make the plots of those we can also print out the correlation matrix for
[58:10] either our mean time series or our daily max time series and so we can see what the correlation
[58:18] is between the observed and cf pm 2.5 and now we can work on plotting our diurnal cycle
[58:31] so to do this we're going to group by the hour so that we can take an average
[58:37] over all the days for each hour and we do that for both the observations and for gcf
[58:44] and so that gives us our varinal cycle which is what we then plot here and then we can get the maximum and the minimum
[59:01] of that diurnal cycle in order to calculate the amplitude and so now we're going to look at the
[59:12] glcf forecast and how it changes over time time and so for that we're going to read in
[59:18] um the cf forecasts initialized on three different days and similar um to what we did above these files were created by accessing
[59:27] glcf through the opendap and slicing on the longitude latitude and level and since i already have them saved here
[59:36] as csv files we can just read them with this function here here if you wanted to look at different dates however i do at
[59:46] the end of this notebook uh include an example of how to read one of these um forecast forecast files from
[59:52] the open daf and select a particular latitude and longitude so in this case we've already got the
[1:00:00] files on our drive so we provide those file names and now we're ready um to make a plot
[1:00:09] and so we're first plotting here the the data frame that had our observations and also the replay geocf
[1:00:16] for this date range here and we're plotting those in black and sort of pink tomato color and then we're going to over plot our
[1:00:24] three forecast outputs and we also then overplot the initial time so we see where each forecast starts
[1:00:45] so then the next section of our analysis looked at the seasonal cycle so for the seasonal cycle
[1:00:51] i use the mara2 data and i use it for two stations and these were a station in delhi and a station in
[1:00:59] uh putna and so these were um downloaded from the jazz disc using threads um but there would be other options
[1:01:07] including some of the tools that we saw in the session 2 notebook as well since i've already downloaded them as
[1:01:14] csv files and the file names are here we'll just read them in with read csv and then i will convert the time to a
[1:01:26] date time object and i get the index and and the data um that i downloaded from r2
[1:01:40] covers um two years um so we're going to average those two years together for each month to get
[1:01:47] sort of the average seasonal cycle for the two years and so we do that here for both delhi and putna
[1:01:55] and so here we're grouping by the month column and taking the mean and we're doing it for all of these
[1:02:01] variables and for reference here we can print out the coordinates of the marathoo grid boxes that corresponded to these two
[1:02:14] stations and now we're going to rename some of the columns just to something uh more sustain so like bc aot instead of bcx
[1:02:26] tau unit equals one and now we're ready to create our stacked bar chart that uses different colors for each aerosol component
[1:02:48] okay okay and then finally um on the slide where we showed this we also talked about the so2 emissions
[1:02:58] and so to look at those um we want to look at the adg file which i have downloaded
[1:03:05] from the jezdisk already but we've seen many tools now for how you can do that and so we're going to use
[1:03:13] again this read emissions function similar to the last notebook [Music] [Music] but this time we're going to call it for so2 instead
[1:03:26] of black carbon and for and which is the anthropogenic emissions um if you are interested in looking at the biomass
[1:03:31] burning ones as well you could uncomment this line to get the biomass burning emissions of so2 and now
[1:03:40] similar to what we did in the last notebook we're going to define the plot map map function
[1:03:47] function and then we can call that function for our so2 emissions variable and that gives us the emission map that
[1:03:57] we saw and so as i mentioned above there would be multiple ways to get the geocf output
[1:04:06] but i've given as additional resources an example function to pull a glcf from opendap for a particular location and save it to
[1:04:16] a csv file you don't need to run that now but that's available for future reference and that concludes our
[1:04:25] session three on case studies so that concludes our jupiter notebook part of this session and now we're ready
[1:04:34] to go on to our q a hello everyone uh we're now ready to move on to the uh
[1:05:11] question and answer uh part of our session session um so if you have any questions uh please type them into the questions box
[1:05:19] so that we can include them in our question and answer session okay okay so question one i'm interested in viewing methane
[1:05:29] satellite data and mapping is the process similar to the pm data mapping shown in this webinar so the plotting function that was shown
[1:05:37] here can be adapted to plot maps of other um gridded like level 3 type data however however tropomy is one of the
[1:05:48] satellites which has methane data and the link to that is provided here currently has level 2 swath data
[1:05:55] and it can be read by scripts provided in the tropomy no2 training from our set which we have a link to
[1:06:02] here as well and those codes are tested for no2 data but they could be easily modified to work with the methane
[1:06:09] data from treboni okay okay the second question is the resolution of beers around 750 meters at nader too
[1:06:22] wide for a small city with a diameter under 100 meters suppose we need to estimate air pollution using aod for those small
[1:06:30] regions what could be one of the solutions solutions so so viirs aod data at 750 meters is
[1:06:37] available from noaa the nasa viewers aod data are at six kilometer resolution um um and the finer
[1:06:48] than 750 meter operational aod products are not yet available um there are some dense ground networks in selected cities which can help
[1:06:56] evaluate pollution levels at those scales scales and there are also some land mapping satellites such as landsat uh sentinel
[1:07:05] and commercial ones which can be used for case study analysis to assess very fine spatial scales for more detailed information using
[1:07:13] gears is available in the our set training on the rset modus deviers transition for air quality applications
[1:07:20] which is available at the link provided here um um question three a small single question in slide 29
[1:07:32] do you mind to review the concepts that are measured with different colors you mentioned that orange is dust oh what does the other
[1:07:42] colors mean i i think think i don't know if we have a do we have a way to go back to slide 29
[1:08:02] to review uh slide 29 is the bar chart showing the contribution from each of the aerosol components
[1:08:13] uh okay yes there we go thank you great so yes so the legend here um indicates um what
[1:08:22] um each of the bars stands for so the bc is black carbon du is dust oc is organic
[1:08:28] carbon carbon ss is sea salt and the su is the sulfate contribution and question uh question four
[1:08:52] um um any performance comparison between geosfp and gocf for surface pm 2.5 and ozone sorry um melanie or pawan um
[1:09:16] i don't know if you want to jump in here um i think we only have ozone from the
[1:09:21] geocf geocf correct correct yeah so there is no ozone in geos fp so if you're looking for surface ozone
[1:09:32] concentrations concentrations you definitely want to be looking at gocf gocf gsfp is only meteorology and aerosols as far as a performance comparison
[1:09:46] between fp and caf pm 2.5 that hasn't exactly been done they're very different systems so for fp
[1:09:59] and reviewing what we covered in session one in our previous uh webinar our previous air quality forecasting webinar
[1:10:07] fp uses the go cart aerosol module and cf does have go-kart pm 2.5 but it primarily uses
[1:10:17] the geos chem aerosol module which also computes pm 2.5 but they're they have different components another an example is
[1:10:28] the geoscam aerosol module also includes secondary organic aerosols whereas a go-kart does not so there is no
[1:10:40] direct comparison between them but the keller at all paper that was linked that will have an evaluation of the cfpm 2.5
[1:10:52] there is unfortunately not a similar evaluation done for fp for merit2 um there are several publications evaluating the pm 2.5 and merit2 and um
[1:11:06] when i review i'll go and i'll link um i'll include links to those public publications thank you
[1:11:22] question five how can i obtain the documentation that helps me calculate the index for example of no2 or
[1:11:28] different pm um um maybe if the questioner could clarify maybe what is meant here by the index
[1:11:39] because i'm not sure if we're talking about maybe an air quality index or if we mean like the index
[1:11:45] in terms of time um and then number six how is aerosol index calculated how is it interpreted
[1:11:59] uh pawan would you like to speak to that sure sure so so arusol index is actually a not a
[1:12:10] retrieved quantity it's a calculated quantity uh so it is typically calculated in ultraviolet region of solar spectrum so there are multiple
[1:12:20] satellite sensors which can make measurement in uv part of solar spectrum and typically it is calculated between
[1:12:28] the two wavelengths so you measure the two wavelengths uh top of the atmosphere radians and then you theoretically calculate the
[1:12:36] same quantity using model simulation so so it is a way in which you can quantify the amount of absorbing aerosols in the
[1:12:48] atmosphere so it is very sensitive to the scattering and absorbing properties of aerosols and it is very
[1:12:56] sensitive to the height of the aerosol where they are located in the atmosphere there is this exact equation uh to
[1:13:03] calculate it i don't remember it right now but we will provide the link of the equation in the question answer
[1:13:09] transcript for you to further look at it and we will also provide some text for you to read about the result index
[1:13:26] question seven could you please explain the to do parts in the scripts for downloading data in session 2 notebook
[1:13:35] okay so in the notebook i had already provided in the drive the um as csv files the output from the gocf uh
[1:13:45] for example and so um if you were wanting to apply this to um a different site or uh to a
[1:13:52] different time period then you would um want to maybe download different files or extract different locations so uh the additional resource um in the
[1:14:02] bottom part of the session two notebook um provides a function that you can call for a particular um date and location uh
[1:14:12] that will then uh download the geoce the relevant um gscf uh output from the opendap and then there's an option to save it
[1:14:21] out to a csv file if you wanted to have it in the same format that we used
[1:14:25] earlier earlier um and then there's also an example of how to read in um the forecast um for a particular date from gscf
[1:14:36] so that you could then look at different forecast dates compared to what we provided in the notebook example
[1:14:53] okay question 8 how do i obtain the documentation that helps me calculate the emissions for example of no2 or
[1:15:00] different pm it is difficult to program in python without knowing the formulas so um for no2 for example comes from gscf um i
[1:15:11] believe that the no2 emissions um are provided um we can probably provide in the future in this q a
[1:15:23] the exact location where we would find that and then similarly yet with other emission types um in the adg files example for example for
[1:15:44] the aerosols are the um the different aerosol emissions and question nine um can i take any data from earth data via
[1:16:28] open dap um i guess i'm not quite oh okay um so there's a link here um to the open data services and software
[1:16:49] um from the opendap servers so that would be a link you can refer to okay okay um
[1:17:17] um question 10 can these data products be used as benchmark data for setting up a neural network
[1:17:26] um um i think that would probably depend on on sort of your exact um research question or or application
[1:17:36] um um certainly um you would get a sample that you could train a neural network on i guess one thing to keep in mind is
[1:17:57] that this is model output so it's a bit different from from training a neural network on pure observations for example
[1:18:12] um um did anyone else want to add anything for question 10 melanie or pawan no i think that is good enough
[1:18:25] okay um question 11. is the data in context here already filtered for example excluding values with cloudy pixels
[1:18:36] so most of the uh the um model outputs we've shown here um are not uh filtered because in the model
[1:18:45] we have values um everywhere um if you were doing a quantitative comparison between model output and satellite data where the satellite data
[1:18:55] had cloudy pixels um then that would be something to keep in mind and consider in terms of how you do the comparison
[1:19:02] you might think about whether you want to then try to filter the model the same way as the satellite
[1:19:08] so that would sort of depend on your research application so question 12 is this data available for every country
[1:19:52] in the world so the geos output is uh global so there are are grid boxes covering all locations
[1:20:34] okay and there's a note in the chat that there will not be any assigned homework for this webinar series obtaining your
[1:20:39] certificate is based on your attendance of all three of the live sessions of this training okay question 13. i noticed when doing
[1:20:58] the analysis of the daily cycle that some null values appeared is some kind of quality assurance done to the data
[1:21:04] collections used before they are published to polish biases from those missing data so um that's a good point to mention um
[1:21:17] right so i think um each uh data set that you would potentially use um will have uh
[1:21:23] different different um characteristics in terms of missing data and so forth and so really for whatever specific data you're using um
[1:21:32] it's very important to be aware of that um um this was um um so so um yes if you if you were doing a more
[1:21:46] sophisticated analysis of daily cycles um um you would definitely want to keep in mind um where you're missing data was if there
[1:21:53] was more in certain hours than others and and exactly how you would want to address that question probably depends on your
[1:21:59] particular application okay um question 14 uh could you use deep learning to predict time series using merit2 data
[1:22:22] um that's um an interesting idea um i'm not an expert in deep learning um so um um i can't uh say for sure um does anyone
[1:22:33] else uh want or melanie want to add to that yeah i mean people people do use marathoo for various purposes
[1:22:49] it really depends on your application how you want to use but merit2 data have been used in combination with machine learning or
[1:22:58] deep learning to perform or to address certain science question or application question okay um question 15. would comparing the model output from
[1:24:20] mera2 with ground observations from low-cost aq sensors for pm 2.5 be pragmatic pragmatic what other attributes should we consider
[1:24:28] when comparing those values um um so right um it would certainly be possible to to do that sort of comparison um
[1:24:43] similar to what we showed here it would be important to think about the sort of agreement between the low
[1:24:55] cost sensors and say regulatory uh sensors um what other attributes should we consider um i think um
[1:25:07] yes you'd want to be um aware of any sort of missing data or data data sort of what the valid data range is
[1:25:17] and how one would you like to add as well yeah so yeah this is uh this has been done
[1:25:28] by many people and i think uh as sarah mentioned mentioned it is critical to ensure the quality of
[1:25:35] locus sensor data itself using regulator grid monitor that's number one thing and then also going back to the session two part two
[1:25:45] presentation presentation you have to realize that merit2 is a 50 kilometer grid versus you are trying to
[1:25:50] compare compare one or a few sensors a ground monitor so the spatial difference in spatial skill must be considered
[1:25:58] while you are interpreting the data output or results of the two comparison the temporal scales are also important
[1:26:08] whether you want to do on hourly scales or daily scales or seasonal so i think it depends on your application and for
[1:26:16] what purpose you want to use mara too according to that your comparison should be done uh so there are
[1:26:24] there are uh intrinsic properties of marital and ground locus sensors which can help you interpret the comparison results but there are also
[1:26:38] problem which are beyond our control such as the grid size versus point measurements the special temporal scales and things like that so yes it is
[1:26:48] doable people do it but be careful how you interpret the results in question 16 how can we relate this
[1:27:02] product with arcgis do we need a special training for this uh uh i think paula you may have mentioned um
[1:27:11] something about arcgis in the second session q a would you like to add something here uh so i think uh
[1:27:22] i believe uh you're asking about how we can actually use arcgis which is a gis software to
[1:27:32] read and map the output from gs5 from geos so as we discussed in session one and two
[1:27:43] there are several tools at nasa justice which allows you to output the data into geot format and that geotiff can be easily accessed
[1:27:56] in arcgis i believe the latest version of arcgis also support net cdf format so you can actually use the directly net
[1:28:06] cdf file also to open it in arcgis and perform your analysis i hope that helps okay i don't see any more questions uh
[1:28:30] so thank you everyone uh for attending and as a reminder uh there will not be any assigned homework for this webinar
[1:28:36] series um obtaining your certificate is based on your attendance of all three of the live sessions of this training
[1:28:42] and thank you very much for your participation
