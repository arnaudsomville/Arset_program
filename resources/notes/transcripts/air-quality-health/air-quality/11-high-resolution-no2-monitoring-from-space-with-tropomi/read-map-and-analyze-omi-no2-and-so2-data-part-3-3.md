# Read, Map, and Analyze OMI NO2 and SO2 Data, Part 3/3

`https://www.youtube.com/watch?v=VZ0HBPPIo5A` · id 339 · 2:02:21 · module 32 — High Resolution NO2 Monitoring From Space with TROPOMI

[00:03] okay everyone uh i'm going to start now i hope everyone is able to uh uh gone through some of the codes which we
[00:17] run run in in session two and if you were having some difficulties i hope other people were able to help or
[00:27] you were able to resolve those issues over the last two days so today is our last session
[00:35] in the this three week three session webinar series and what we are going to do today is we
[00:42] will start with one of the code which we left over from the session two and then we will go over melanie will go over
[00:52] uh other python codes to actually read extract and more or like do the similar tasks tasks but uh
[01:02] performing those tasks on omeno2 and so2 datasets after that towards the end we will also go over some of the new and
[01:14] upcoming uh air quality satellite missions uh which will help the provide more information on air quality uh
[01:25] uh at regional level and at global level so with that uh let me quickly go over the last
[01:33] script which we left over so this specific python script is to create air quality maps and and uh
[01:43] uh i just want to actually show this the purpose of this script is to read the modus level aerosol to data file
[01:51] from the hdf format and create a pm 2.5 air quality category map using relationship between aod and
[02:00] pm 2.5 this code works both at 10 kilometer and 3 kilometer product and there is a big disclaimer here
[02:09] since since as we discussed in session one the relationship between aod and pm 2.5 does varies over location to location
[02:21] over season to season and it's not always linear in this specific code we are assuming that the relationship is linear and it
[02:30] can be aud can be converted into pm 2.5 using a simple regression equation which has a slope and intercept
[02:39] so this code is merely what it does is take the slope and intercept either from the users or default
[02:52] the default slope and intercept which we have provided in this script is based on some studies in the us and it's
[03:01] more likely applicable for the u.s conditions still within us we strongly recommend that you use local source
[03:12] source slope and intercept based on your own studies or based on the literature this code is just to provide you an
[03:20] example of how to take aod and calculate the pm 2.5 and convert that into air quality categories which is
[03:30] good moderate unhealthy and these categories are defined based on epa's guideline us eps guideline and as you know
[03:42] other countries might have their own so you might want to check those so we will talk about those just want to give
[03:50] this this big disclaimer that this is just an example please do not use this code without without proper
[03:59] proper making changes to the slope and intercept relationship this is good for qualitative purpose but for quantitative
[04:05] purposes strongly recommend that you use your local slope and intercept and other information if possible with that let me go
[04:15] over to the python console which we used last time uh we are going to use same anaconda
[04:24] the spider python editor which we used and i'm going to just quickly go over the steps which we have gone last time
[04:34] so so there are two parts on the left is your python now where the python codes will
[04:41] dis dis display on the right side you will see python iphone console and you can see the name here in the blue on the bottom
[04:52] of the page so you can see actually here the ipython console this is the area where you will
[05:02] run the code this is the area where you will open the your code okay now now the
[05:09] the one command which we did last time was uh if i click on the ipython console and
[05:15] type type rpwd apparently i have to change this to the pointer pointer in order to type so it will show the current directory
[05:28] where my codes are there now if it is not you can change it if it is not there
[05:34] that that's okay actually what you can do is again go on the left side on the top left there's a folder option which
[05:42] says open file i'll click on that since i have already changed my directory by default it goes to the my
[05:49] directory and in this directory we have gone through four out of these five codes and the one
[05:57] which we are going now is called read and aod read aod and calculate pm 2.5 dot py
[06:06] everybody is there go to the laptop open folder select the file and say open the code run exactly in the same way as
[06:20] it does for other codes which we have run it will it will read the file from the file
[06:31] file list or text so here is on line 23 is that line where the file list dot
[06:38] text is read some people last time had trouble i hope they were able to resolve that in
[06:44] creating this file and will be able to run today so i have two files in this right now
[06:51] here is my file file list dot text and i can see there are two files one is
[07:02] three kilometer and one is ten kilometer and we'll run on those so let's run the code first and then
[07:08] i'll go over some part of the code where you can modify to to so first again to run i'll go on the top
[07:16] of the screen there's a green arrow and that's to run the code so i will just click that green arrow and then the code
[07:25] started running on the right side of console and where i will see would you like to process this file name
[07:37] exactly the same way as we did the last week week we have tried to create all the code in
[07:43] a similar fashion so that there's less confusion about how they will run again again i want to process this
[07:51] i will put codes y and in the codes if you are running 2.7 you have to use the
[07:57] codes once i do it will display some information about the file and the aod values within the
[08:09] file this is similar information which you you get when you're running other python codes in the week
[08:17] in the session to be looked about so it says this is a three kilometer modis file there is some information valid
[08:24] file file aod range latitude longitude range and other information now this is important it's asking would you like to enter a slope and
[08:37] intercept for the pm 2.5 calculation again remember this is from those those pm 2.5 equal to slope multiplied by aod
[08:49] in plus intercept so this is the equation we are using so if i have a slope and intercept i can
[08:58] say yes if i do not have then i will say no so for default we will run with both
[09:05] slope and intercept and without so i want to create without with the default slope and intercepts i will say no
[09:12] if i say no it will take the default value of slope and intercept which i will show you in a
[09:19] minute inside the code now the next question is would you like to create map of this data i will say
[09:26] yes yes and then press enter and then it goes through read the aod aod we calculate the pm 2.5 and we'll come
[09:36] up with the map like this so what you see here is it just took every single pixels of
[09:42] aerosol optical depth multiply those with the slope value which is already hard coded in the code you can also provide that and then
[09:53] added intercept value and once you get the pm 2.5 value you can calculate these categories which i will show you in the
[10:00] code how to do that but this is air quality map it shows the red colors are unhealthy
[10:06] unhealthy uh uh moderate yellow and the greens are good and then there are other colors and this is again showing the fires
[10:15] during the california now the next question it is asking is do you want to save it so i will say yes
[10:23] this is another next file i will do the same yes i want to do this now it's asking again for
[10:30] whether you want to enter the slope and intercept now this time i want to enter the slope and intercept and i'll say yes
[10:37] so once you say yes it will ask slope value so so i'm just going to give some
[10:45] assumed number here let's say 45.5 which is per unit aerosol optical depth pm 2.5 values and then i will say intercept is
[10:57] 5 microgram with respect to zero errors on optical depth that's what intercept mean here and then i will say yes create the map
[11:08] and then it start creating so you will notice that there is a difference a little bit when you change the slope and
[11:14] intercept you can get different types of maps so you want to use the slope and intercept the realistic in your region
[11:23] and that will provide you more accurate air quality map and i had to file all the processed i can check again in the
[11:32] directory if those png files are created and i can see actually there are files which are created and i can open those
[11:40] using the now any any of the imageviewing software everybody is there okay so let me see if
[11:52] if you were able to run this so i'm launching a poll and giving you a minute to just see if
[12:02] everybody was able to run this code properly properly and then we will i will go through the
[12:09] pieces of the code where you want to make changes okay so looks like about 83 percent people
[12:26] were successful 17 people were not and we will see a little bit on that how what went wrong there so i'm going to
[12:34] close this poll just to go over again uh now with the code and then i will run
[12:41] one more time for the people who are not able to do it earlier but before that let me go over the code so it's very
[12:48] similar code as you're seeing in aod mapping during the last session uh again by default it's taking optical
[12:58] depth land and ocean sds for three kilometer and for ten kilometer it's taking aod 550 meter dark
[13:06] target deeply combined sds remember in session 2 we talked about different sds and why you should select certain sds
[13:16] so here is your option you can change the sds if you want the image sds here you can change the image optical defined
[13:24] ocean ocean if you want the dark target product here you can change with the dark target if
[13:29] you want the deep blue only you can change to the deep view if you want combined this is what i selected right
[13:37] now but this is where you will change the sds next next important thing about this specific code
[13:45] is the changing the slope and intercept so if you go to the line 104 104 to 106 this is where the slope and
[13:54] intercepts are defined like i said these are default i have just picked some number from the literature
[14:02] but they may not be applicable for your reasons so please if you are for example in region with very polluted area the
[14:10] slope can be any anywhere 100 or 120 microgram per cubic meter in places like delhi and this intercept can value can also be
[14:21] very high so be careful this is in the u.s condition which is relatively clean conditions conditions and the slope values actually is very
[14:31] low in these cases so this is the place to change the default value the other option is you can enter your slope value
[14:39] your from the user interface when you're running running the next thing as i mentioned these air quality
[14:47] categories are defined based on the epa guideline and they are actually defined in the code starting line
[14:59] 116 and all the way to 123. now these are the values as defined by epa individual countries might have their
[15:12] own guidelines or you might want to follow who guidelines so you can change those whatever the colors they are and whatever the
[15:21] lines whatever the range of pm 2.5 value each category defined so this is the place where you may want to make changes
[15:32] all other things are very similar to the other codes which we checked yesterday the color scales resolutions are
[15:40] everything everything very similar to what we saw and you can make those changes in the line starting with the create map line
[15:48] 125 onward okay so i think that's all i have i will actually do a quick poll on the
[15:59] session two and this one and then i will hand over to melanie to go over uh omi
[16:04] data data so so this is first poll and it says select one that applies to you about session two python codes
[16:16] so so uh when i say session two that includes the code which i just ran about air
[16:22] quality so let's go ahead and vote for this and then there's one more poll and then we'll
[16:30] move on okay so let me share so there were four percent people who did not try at all
[16:43] about ten percent people had some technical problem sixty-five percent people were run all codes successfully there were few people who had actually
[16:54] problem with either one or more codes so please uh try to work through these there is enough instruction on the ppts
[17:04] which are provided along with this to resolve some of the information some of the issues you might have
[17:12] uh the last thing is you can email us if you are not able to get your solution either by searching
[17:19] internet or by talking to other people okay okay so so the last poll i have here is
[17:33] select all that applies so here in this poll you can select more than one actually actually so you can select one or more of the
[17:41] following so whichever applies to you and i'm closing the poll now so i had 76 percent people voted
[17:56] and and 64 people says i'm able to run all codes successfully successfully 46 people were able to change the sds
[18:05] name name about the same percentage of people who are able to change the color scale and looks like about 20 to 35 people
[18:16] will need more help in running the codes or modifying the codes so we will try to help you but uh will
[18:24] strongly recommend that you go through some of the ppt follow the instructions and make sure your computer is suitable
[18:33] to run all these with all the permissions and all the packages are installed still you cannot do it then please write to us and we
[18:41] will try to resolve this so with that i will hand overs to melanie and then she will start the
[18:52] next part of the training training you you hello my name is melanie falette cook and i'm going to be uh going over
[19:02] session three uh read map and extract level two ome no2 and so2 so this session is going to be
[19:11] structured very similarly to the last session that pollen did covering modis data data i'm going to give a brief overview of
[19:18] the ohmi instrument and the relevant data products before going through each of the python codes the ozone monitoring instrument or ome
[19:28] is a hyperspectral imager that observes solar backscatter radiation in the visible and ultraviolet wavelengths wavelengths the earth is viewed in 740 wavelength
[19:39] bands with a spectral resolution of about 0.5 nanometers ome is on board the aura satellite which has a low earth orbit at about 705
[19:51] kilometers above the earth and it has an equator crossing time of about 1 45 pm the satellite track has a large swath
[20:00] large enough to provide global coverage in about 14 orbits per day however the row anomaly experienced by
[20:07] omi has blocked several rows and we'll talk about more talk more about that in just a minute
[20:13] the nominal resolution of ome is 13 by 24 kilometers squared and several available products are listed here
[20:20] and include total and tropospheric column ozone nnno2 aod in the uv and total column formaldehyde and so2
[20:35] each ome product file is called a data granule and covers the sunlit portion of the orbit with approximately 2600
[20:43] kilometer wide swath containing 60 bin pixels or scenes per viewing line during normal operations 14 or 15
[20:54] granules are produced daily providing full coverage of the globe every day this is in contrast to aerosol
[21:01] observations that are made at much higher spatial resolution here an entire orbit which is about 90 minutes is contained in one file
[21:10] whereas for modis some products are available in five minute increments because the data volume is so high
[21:20] the ohmy row anomaly is the result of a hardware issue on the satellite it started in about 2008 and has resulted
[21:27] in a loss of data that is illustrated but exaggerated on the figure on the right in reality
[21:33] the orbits will overlap towards the poles at higher latitudes this slide shows the structure of an omi
[21:45] data file name first part in purple shows the instrument id in this case omi aura this peach color shows the data type and
[21:57] for our purposes that's the level 2 no2 or so2 if you're reading the so2 file names next in green
[22:09] is the observation date and time first you have the four digit year followed by an m followed by a two digit month and day
[22:21] next is a t and the time in in gmt in two digit hours and then minutes next in blue is an o followed by the
[22:31] orbit number in brown is the collection or version number number in our case we're going to be looking at
[22:40] version three next in gray is the production or processing date and time and that is in the same format as the
[22:51] observation time except that the time goes to seconds instead of minutes all of these files can be read using
[23:00] various tools such as the ones listed here but they they can't be opened with something like a text editor they need special software
[23:08] the omi no2 and so2 files are hdf5 files and should therefore be able to be read by any software that can read
[23:18] netsierra netcdf4 files the oh the no2 level 2 files contain a single swath called column amount no2 or
[23:30] ome ome total column amount so2 these are composed of a geolocation fields group and a data fields group and
[23:38] we'll see more about this when we're looking at the python codes so for today we'll be focusing on two
[23:47] products that are relevant to air quality nitrogen dioxide plays a key role in atmospheric chemistry by controlling the
[23:56] production of tropospheric ozone forming aerosol nitrates and affecting the abundance of the hydroxyl radical oh and therefore influencing the lifetimes
[24:06] of greenhouse gases no2 is one of the pollutants regulated by the environmental protection agency as it is detrimental to human health and
[24:15] ecosystems ecosystems sources of no2 include combustion soil emissions lightning and fires the relatively short lifetime of no2
[24:26] which is about hours to days leads to large concentrations in the lowest level of the atmosphere called the planetary
[24:32] boundary layer with respect to higher levels of the atmosphere atmosphere because of this short lifetime it also
[24:39] has large spatial gradients around its sources sources and for this reason no2 observations from space have commonly been used to
[24:47] constrain bottom-up emission inventories of no2 sulfur dioxide is also an epa criteria pollutant and has been linked to adverse
[24:57] respiratory effects it can also form secondary sulfate particles through chemical reactions in the atmosphere as well as contribute to
[25:05] acid deposition the primary sources of so2 are volcanoes and coal and oil burning this is a table reviewing the different
[25:19] quantities these trace gas abundances are expressed in no2 and so2 from ohmi are expressed as column quantities
[25:27] so to review you can think of an atmospheric column as a vertical pillar defined by some unit on the earth's
[25:34] surface and bounded by the top of the atmosphere atmosphere these are typically expressed as the number of molecules in the column per
[25:42] square area in our case it's going to be centimeters squared a dobson unit which is what the so2
[25:49] columns are expressed in is defined as the thickness of a layer of pure gas which would be formed by the
[25:56] total column amount but at standard temperature and pressure so one dobson unit is equal to the number of molecules needed to create a
[26:06] pure layer of gas 0.1 0.1 0.01 0.01 millimeters thick at standard temperature and pressure so column ozone is is something that's
[26:18] usually expressed in terms of dobson units so a typical column ozone amount is about 300 dobson units this would
[26:25] correspond to a three millimeter layer of pure ozone at the surface of the earth if its temperature and pressure
[26:32] were at uh were at standard temperature and pressure you can easily convert from molecules per centimeter squared to dobson units
[26:41] with the conversion shown here on your screen so these are some relevant variables contained in the amno2 files
[26:56] all in o2 in the atmosphere column is found in the troposphere which is the lower lowest level of the atmosphere
[27:02] closest to the surface or the stratosphere stratosphere which is the level above the troposphere that contains the ozone layer
[27:08] the amino 2 retrieval algorithm retrieves both the stratospheric and the tropospheric column amount column amount no2 trope is the estimated
[27:18] tropospheric column amount of no2 while column amount no2 strat which is not written here is the estimated stratospheric column
[27:27] amount of no2 as paul one explained in the first session session a retrieval algorithm is made up of the
[27:36] satellite observations as well as a priori information usually obtained from a model over unpolluted areas with very low
[27:45] values of no2 so say over the open ocean when there are very few sources the retrieved tropospheric column no2
[27:54] value is dominated by the a priori or model model and can also be affected by the assumptions made about you know what's
[28:01] stratospheric versus what's tropospheric error error as a result many of these values over these unpolluted areas are can be small
[28:10] negative numbers this is important because when you're computing statistics such as mean median variance it's important to include all
[28:19] of these valid measurements regardless of their sign in order to avoid statistical biases the amino 2 documentation advises
[28:29] looking at several parameters in order to filter the data rather than looking at any uncertainty variable contained
[28:35] within the file if we remember that each ome viewing line contains 60 pixels across users are advised to only use rows 4 to
[28:47] 54 where that first row equals zero um we probably remember from maybe i can just go back so if we look you can see
[28:58] the pixel these pixels at the edge of the swath are going to be much longer than at the
[29:04] center which is near nader so they're advising you sort of cut out the rows those pixels at the beginning and the
[29:13] end of the swath users are also advised to use only scenes where the radiative cloud fraction is less than 0.5 the solar
[29:23] zenith angle is less than 85 degrees and the terrain reflectivity is less than 0.3 0.3 the terrain reflectivity
[29:32] is a measure of how reflective the surface of the earth is this is unitless and must be multiplied
[29:37] by a scale factor of .001 to obtain the actual number the cloud radians fraction is an estimate of the fraction of photons
[29:46] reaching the satellite instrument that come from the cloud covered parts of the scene scene this is also unitless and must be
[29:53] multiplied by a scale factor of 0.001 also to obtain the actual number the solar zenith angle is the angle
[30:02] between the zenith and the center of the sun's disk where the zenith is the imaginary point directly above you at a
[30:08] particular location the solar zenith angle variable can be found in the geolocation information and again again we'll look at that more
[30:19] when when we're looking at the actual python codes all of these variables have been filtered for the row anomaly and any
[30:32] observation modes for which this retrieval doesn't perform well these are indicated by fill values equal to the large negative numbers shown here
[30:47] so moving on to so2 so2 for each ome scene there are four different estimates made of the vertical
[30:56] column density of so2 in dobson units these are obtained by making different assumptions about the vertical distribution of the so2 plume
[31:06] the pbl so2 retrieval is the one most relevant to those concerned with air quality quality this retrieval assumes that the center
[31:14] of the so2 plume is about 0.9 kilometers altitude altitude and is most appropriate for studies concerned with near surface pollution
[31:24] the next is designated as lower troposphere or trl where the so2 emission peak is at three kilometers
[31:32] and this corresponds most closely with industry outflow or degassing volcanoes the second is uh sorry the third is a mid troposphere or
[31:44] trm trm and is associated with an emission peak at eight kilometers corresponding to plumes from moderate eruptions
[31:53] eruptions and the last is lower stratosphere or sto where the emission peak is at 18 kilometers and corresponds to explosive
[32:01] volcanic eruptions i want to emphasize that each retrieval listed here yields total column values and represents only a different
[32:13] assumption of the so2 plume height so these should never be added together but if you know the plume height
[32:21] a user can interpolate between these values this slide lists the most relevant variables in the om so2 files
[32:34] for the so2 retrievals the current documentation doesn't recommend using the included quality flags they say that while they might provide some
[32:42] information they're a little bit too restrictive so they have advice similar to what we saw for the no2 files
[32:51] they recommend users to use other parameters such as solar zenith angle and radiative cloud fraction so similar to the no2 retrieval for the
[33:00] pbl retrieval users are advised to only use rows 4 to 54 where the first row equals 0. this
[33:09] again prevents using the very large pixels on either edge of the swath users are also advised to use only
[33:18] scenes where the radiative cloud fraction is less than 0.3 and the solar zenith angle is less than
[33:24] 70 degrees the radiative cloud fraction variable is analogous to the cloud radiance fraction variable from the no2 files except no
[33:32] scale factor is needed within the so2 files and again the solar zenith angle is in the geolocation fields
[33:43] for the volcanic retrievals the trl trm and stl all rows can be used but users should still only use retrievals from scenes
[33:53] with a solar zenith angle less than 70 degrees okay so this this session is going to use
[34:07] windows to use python so i will first show you where i have all of my codes so within this directory hopefully you
[34:18] were able to download the session 3 code data zip file in case you are not it can be found on
[34:27] the training website here here is where you download it and within this is contained three uh ome files two no2 and one so2
[34:45] as well as several different python codes codes and i went ahead and attached a file list dot text
[34:56] so these all the omi files the python scripts and the file list.text should all be in the same directory somewhere
[35:05] on your computer to start anaconda i go to the start menu and click anaconda and for anybody that was having trouble
[35:21] potentially potentially installing the packages this is the where you would find the anaconda prompt with which to install the packages
[35:30] right now we're going to click on anaconda navigator and it always takes a little bit of a
[35:37] second to start okay okay so now we are going similar to what pawn showed we're going to launch spider
[35:58] to look at our editor so spider is going to look almost pretty much identical to what you've been
[36:04] seeing with powon yes so right here i have the file explorer up um um right now you can you can change the
[36:18] panes that you're viewing through view panes and right now i am looking at the editor editor the ipython console
[36:30] should be running the codes and the file explorer explorer so here i'm going to go to this is my working directory
[36:42] and the first code i'm going to open is the list the sds so here i have my python code on the left
[36:57] and there we go okay okay so here is where file list text is located so if you have
[37:13] a different file name you can just change this to run you just click the green arrow and so
[37:22] we'll just i'll go through this a little bit probably faster than poland did because by now you're probably familiar
[37:27] with the actual running of the different codes they're all very similar so for the list sds first it shows where
[37:38] the the file that i'm running the working directory directory and it's asking would i like to process
[37:44] my first file listed in the file list.text list.text i'd also like to mention i'm running python 3.6
[37:53] so so i don't have to type the quotes around i can just hit y and enter and here it's listing all of the
[38:04] variables or sds within each of the ome and o2 files i'm going to move this up so we
[38:12] can see more of it what i've also done here is i've altered the code a little bit to show you the
[38:16] dimensions of each of these variables so so 1644 is the number of viewing lines in this orbit and 60 if you remember is the
[38:26] number of pixels across the orbit this is important because when we go to export into a csv file
[38:36] it's important that each of the variables you choose to export be the same dimension so you can see if you scroll down
[38:44] something like instrument configuration id is is not the same dimension and it will make the code crash unfortunately so
[38:54] if you're choosing a variable to export you can use this to make sure that they're all the same dimension
[39:02] so here we can see the relevant variables that we discussed earlier cloud radians fraction we have column amount oops column amount
[39:15] column about no2 strat column amount energy to trope for troposphere scrolling down we have terrain reflectivity and i said before um
[39:32] we do not see solar zenith angle here i altered the code and uh to output only the geolocation ssds and
[39:41] i'll run through that very quickly in a minute so so we'll say no because these are going to
[39:49] show the exact same variables because this is another no2 file and so the next we will look at the so2
[39:59] variables variables um and actually one going back very quickly um i highlighted essentially only the no2 troposphere
[40:10] column and the relevant variables you would need to filter it if you want detailed information about any of these
[40:17] any of these other variables they can be found in the amino2 documentation which is available from the ges disc website
[40:29] and and i'll go into that a little bit later okay okay so here are the variables for an ome s02
[40:37] file and again all of the dimensions are listed here so we have the column mount so2pbl stl
[40:47] stl trl trl and trm and remember these are total columns in the case of so2 radiative cloud fraction
[40:58] and again the solar zenith angle is in the geolocation information so i said um um before i'm just gonna
[41:13] i have read omino 2 and list sds and then i've added this little geo geo and what again we'll do is i've changed
[41:23] it here so if you go you see list sds here is the data field group group which uh if you remember earlier on i
[41:33] said that within the swath data the it was either i'm sorry within the swath data for an no2 file there is a variable or a
[41:45] group column amount no2 or ome total column amount so2 and within each of these groups are two
[41:53] other groups data fields shown here and geolocation so this code contains the data fields i've modified it here
[42:06] to to instead print out the geo location so you can see where i've commented out the uh the line that you just saw and
[42:15] instead instead i'm calling on the geolocation fields group group so on this code it's the same process would i like to
[42:27] process this omino 2 file yes and when you're running this make sure you click on this window before you
[42:33] hit yes i'm sure i'll do that i'm sure i'll forget to do that at some point so here
[42:41] is the geolocation information latitude longitude and here we have solar zenith angle okay and we'll again skip
[42:59] the next and [Music] [Music] looking at the so2 we see similar geolocation information we see latitude longitude and solar zenith angle
[43:15] um um [Music] [Music] okay okay i'm seeing that people are getting people running 2.7 are getting an error
[43:25] so so let me take a pause and see if i can work that out let me first you know what i'm going to do a
[43:33] poll to see how many people are experiencing this error okay i'm going to launch this poll for just a minute
[44:01] okay okay i see a lot of people are running into uh problems running this code with python 2.7
[44:13] um somebody it looks like somebody in the questions was able to fix it by change by changing line 45 so if you can check
[44:25] the the question and answer um um there might be a fix in there i'm really i'm sorry about that
[44:35] um um but okay so for now we'll move on to the next code which is dumping the ascii file so i'm just going
[44:51] to close these and bring up our dump ascii code this code will output uh variables to a
[45:05] cssv file a text file um here on line 28 are the variables to be output in this
[45:12] case com amount.2 column amount no2 std and vcd quality flags if you needed to output the geolocation
[45:23] information you would scroll down here to about line 98 98 where currently it's looking for that name in the data fields group and you
[45:33] would change that to the geolocation group so so i just ran i just ran the code and saved the omino2
[45:44] file file and it appears up here in my file explorer and going to my working directory i see here is the text
[45:58] document clicking on that and you can see these variables have now been output in a csv format
[46:09] and you could import this file into excel or other software to work with it so we'll we'll skip
[46:21] we'll do the next file as well and we will say yes again to save the so2 file
[46:38] okay i'm seeing that there's a fix for the error um uh so if you want to check the question
[46:49] and answer section you can probably up in the chat section um um we have posted the fix for the error
[47:01] in the previous code we're listing the sds so for everybody um at this point i'm gonna pause
[47:12] um um so if everybody wants to go to the chat copy in the new line of code
[47:20] and try re-running i'm gonna pause give you a minute or two and then take another poll to make sure
[47:28] that that everybody is able to use that okay okay before we start um i'm seeing in the chat that
[47:46] some people are getting a tubal error and this can happen when you're sort of running different kinds of codes back to
[47:53] back um the ipython console remembers variables from other codes so so what we can do is before we move on if
[48:01] you just click the x in the iphone console it will start a new kernel so if you're getting a tuple error
[48:11] try doing exactly what i just did and then re-running the code i actually got this in the last session and that was
[48:17] the the that was the issue okay so i'm going to launch another poll to see if people were able to copy in
[48:28] that code fix and rerun and and it looks like about roughly about 50 percent are still having an issue
[48:43] um um okay if you're still getting the error i guess i'll give it another two minutes just to make sure
[48:52] time isn't the factor but then we're going to move on if you're still having the error um you meant put it in the question box
[49:02] and if i have if we have time at the end we'll we'll try and address this again
[49:07] so i'm going to give two more minutes just in case people just don't need a another minute or two to copy that in
[49:13] and try re-running it and then we're going to move on to the mapping codes okay okay um the next code we're going to go over
[49:25] is is to read and map the omino2 and so2 files so first here is here is that code
[49:35] here's where filelist.text is read in and and here is the sds name that is to be mapped
[49:48] for no2 it's column amount no2 for so2 it's the pbl column so2 when we run these codes
[50:04] so we click the green arrow would i like to process the no2 file yes so here is some information about this
[50:20] file it's listing some statistics the average of this of the data contained in this file file is 3.14 times 10 to the 15th molecules
[50:39] per centimeter squared it also lists the standard deviation the median and the range of latitude and longitude
[50:50] would i like to create a map of this data yes and here is the generated map of column
[51:01] amount no2 oops the title is also listing the file name and and the units are here on the side
[51:14] so looking at again i want to emphasize with the modis data you are looking at sort of a subset of a modus swath
[51:22] whereas one complete orbit is contained in each file of no2 and so2 so so our next code is going to be checking
[51:32] the values at a given location so i'll just want to point out here that i'm going to check 100 west
[51:38] and about 30 north would i like to save this map yes and we can see it appears up here
[51:53] in our in our file explorer so going to my working directory you can see a png image has been created
[52:04] and i can open it here i'm going to create i'm going to process the next no2 file
[52:19] again here's the information contained within that file or some statistics about about the column no2 variable create a map
[52:32] and here you can see kind of the effects of the row anomaly um um most likely creating these field values
[52:40] in the center of the swath and again we'll check the same point about 100 west 30 north
[52:50] yes i would like to save this map and and uh would i like to process the so2 file
[52:58] yes now remember the so2 file is in dobson units so the average of this of the so2 in this file is
[53:07] 0.144 dots in units with standard deviation median and the latitude longitude range would i like to create a map
[53:19] yes now this looks much noisier i'm actually going to save this map and i'm going to open this image
[53:33] this is actually the date of some oil fires fires in iraq so it's it's not high resolution but you
[53:44] see these low values throughout the swath swath but but zooming in for this region of the middle east you
[53:51] see these very high values as a result of these oil fires much higher on the scale so we'll look at that when we pick
[54:03] when we pick a location so so places that you can change this file again you can map a different variable
[54:20] by changing the sds name or no2 or so2 the actual plotting is down here and and the color scale is listed here is
[54:39] gist stern and then the underscore r indicates it's reversed so changing the color you can enter in
[54:45] another color scale name and all of this information is in the powerpoint that is available from the training
[54:52] website website a website listing the different actually i can go here so here you can see you can change the
[55:07] color scale and this gist stern color scale that it's using and this website shows uh examples of
[55:16] other other color skills that you can use okay i think we're going to move on to i'm going to reset
[55:32] my kernel and go to the next code code which is reading the omi no2 or so2 at a
[55:42] given location so before i want to before i move on to this code if you look in the chat again
[55:51] um any if you're still having errors with uh the original code listing the sds i see in the chat there's another
[56:00] there's a fix for the print error just moving that first square bracket let me open up that
[56:05] code again this first square bracket moving it from before the word print to after after so if you want to try that and
[56:15] re-running and and if you're running this with python 2.7 spider should indicate uh where you have a problem with a red
[56:32] cross on the line and when you fixed the issue the cross will disappear after the file is
[56:42] saved okay so reading ome n 2 or so2 at a given location so here so we're again reading on our
[56:55] file list we're reading column amount no2 or column amount so2 pbl at the given location we're going to give to the code
[57:09] when we run this code it's asking us to process the first omeno2 file i'm going to say yes
[57:21] and it's giving us the range of latitude and longitude contained in this file so so we looked at the map earlier so i'm
[57:31] going to enter in the latitude i'd like to analyze we said 30 degrees north and 100 degrees west which is going to
[57:40] be negative 100 and here is the nearest only pixel centered at this latitude and longitude the value in that pixel is 3.9 times 10
[57:55] to the 15th and there are nine valid pixels so it's surrounded by valid pixels pixels and here are the statistics for those
[58:07] and there are 25 valid pixels in a 5x5 grid centered at my location and here are the statistics for those
[58:20] so roughly about right around 4 times 10 to the 15th for this day at this location processing the next omen02 file
[58:35] again the range of latitude and longitude we're going to enter the same 30 30 and negative 100.
[58:46] and on this day it has a relatively similar uh value of column at troposphere column and o2
[58:54] where this is actually total column so this is about 4 times 10 to the 15th and again there are nine valid pixels
[59:06] around this point in a three by three grid and 25 valid pixels in a 5x5 grid so moving on to the
[59:15] so2o so2o [Music] i pointed out that most of the so2 showed showed low values so for our first point we're going to
[59:31] enter in 30 north and about 45 east here's the nearest ome so2 pixel and it's giving a small
[59:50] negative value and there are nine valid pixels around this location where the average is about 0.05 so very low values
[1:00:03] and in a 5x5 pixel you see it jumps up a little bit to 0.3 so i want to show
[1:00:11] kind of the variability in this file so i'm going to actually rerun this code and i'm going to skip the two and note
[1:00:19] two files skipping the first file skipping the second file and and we want to process the so2 file again
[1:00:33] except this time we're going to look at 33 north and 45 east actually i remember it being higher did
[1:00:51] i write down the wrong one yes i did i'm gonna rerun it again because it was very high
[1:01:01] skipping this skipping this 35 north and 45 east okay okay so so for this right around in a five by five grid we
[1:01:23] see we're picking up the average value is 15 dops in units corresponding to that very large oil fire
[1:01:33] showing the high variability you're seeing within just one file so i've gone over all the codes oh i do
[1:01:45] want to mention i see a lot of questions always about automating these codes um um auto if you want to automate these a
[1:01:55] quick way would just be to take out the interactive components within um each of these codes and you
[1:02:03] can can quickly generate maps or the csv files as you need so i'm going to do a quick poll
[1:02:15] to see how everybody is doing before we move on okay it looks like about 80 percent have
[1:02:29] are able to follow along and are able to duplicate what they're seeing that's great great for the remaining about twenty percent
[1:02:35] i'm sorry i'm i'll paul is going to talk shortly i'll try uh to address some of your issues
[1:02:43] in the q a um um so this sort of concludes this portion of session three pawan is now going to
[1:02:51] cover some future sensors um um that will be available now or in the near future so paul if you want to take the
[1:03:03] screen screen thank you melanie [Music] [Music] okay everyone uh let's see if i can find myself here okay
[1:03:18] so so few things before i go over my presentation which is let me find it first okay
[1:03:34] so just want to make sure there are a few things we we saw there were difference between
[1:03:41] python version 3.6 and python version 2.7 so these are some minor differences arises due to the change in the base and
[1:03:52] text works between the two words in a python python if you just search online uh with the error message you will find
[1:04:01] the solution very quickly that's the easiest way to actually debug the code there are because people have gone through this lot
[1:04:10] and various python communities so there are ready-made solution available i hope some of the solution other participants provided or be
[1:04:19] provided to the chat window might be useful useful for people to fix their code and again these are just
[1:04:31] examples and the idea is that you take these examples and work through on these codes modify to suit your own needs or
[1:04:43] for example people want to do a smaller area so you can actually go into the code and change the minimum exam that
[1:04:50] long range and it will provide you the data for that range if you want to change the projection of map you can do
[1:04:57] that if you want to grid the data there are examples of that so i hope this this these
[1:05:05] uh all the codes provided in section two and session three today both for modis aerosol data and for omen
[1:05:13] o2 and so2 data can serve as a base uh for your research or for your data analysis or for your air quality
[1:05:23] forecasting needs or wherever you would like to start using some of the satellite data we will be happy to help further but i
[1:05:32] on the error message or more analysis tools in futures webinar series or through the offline interaction but
[1:05:42] again if you are facing some error related to the python code i would strongly recommend that spend
[1:05:50] some time looking on the internet searching for solution try to debug the code get help from the people around you who
[1:05:59] might have better understanding about the programming and even if you don't get anything then please write to us and we will try to
[1:06:08] help help but but first we recommend that you spend some time understanding the code and debugging it by yourself that will
[1:06:16] actually help you to understand the code much better and then it will be things will be faster for you
[1:06:23] when you do this next time around okay and there are some specific questions we'll take those questions
[1:06:29] towards the end both melania and i would take depending on which question we have and so right now i want to spend 10
[1:06:37] minutes minutes to talk about some of the other sensors in this series we only actually use data
[1:06:44] from two sensor modis and only and only the aerosol data and the anatomy anatomy but there are a number of other sensors
[1:06:53] out there and there are new missions which are in planning stage at various planning stage which will provide very useful air
[1:07:03] quality information in near future so i just want to very quickly go over some of those again not i'm not covering all of these
[1:07:12] those but i will just cover some of these which will be really really useful for air quality application
[1:07:18] okay so let me go through this ppt again this ppt is available on the training web page you can download it under the
[1:07:26] week session three this is called other sensors uh i think so so the first sensor which i'm going to talk
[1:07:35] is the viewers viers is a very similar instrument as what we see from the model it's a
[1:07:44] multi-wavelength imager and the wavelength number of wavelength in weirs are smaller as compared to modis modis but they have a similar wavelengths to
[1:07:57] detect the aerosols so the fierce stand for visible infrared imaging radio material the good thing about the viewers
[1:08:06] is is that it's short with if you notice the swath with here if you notice the swath width of the
[1:08:14] gears it's much larger than modis in case mod is it's 2 200 kilometer wave there is 3 000 kilometer and the pixel
[1:08:24] resolution also actually is about 750 meter resolution in case of mode is some channel has a half kilometer resolution
[1:08:32] so you can say what is the superior but vs is throughout 750 meter resolution which which helps lot
[1:08:40] the other advantage of veers on modis is the pixel at the age people who have attended the basic remote sensing
[1:08:48] webinar they know that as you move from nadi's location from the center of the image towards the edge
[1:08:56] of the image the pixel size increases so in case the mod is it's it goes 0.5 kilometer can go to 2 kilometer
[1:09:04] exercise in case of years it's only increased by factor of 2 there are some resampling is done so that
[1:09:12] those are actually better handled in viewers so this is again a uh there are actually two years right
[1:09:21] now orbiting uh one of them is uh launched in 2010 and another one was launched actually just
[1:09:32] just a few months back and it is it's called jpss one so this will be a new
[1:09:38] new new year's and i will show you actually some images from that okay let me clear all the
[1:09:47] drawing here so so in order to show you that uh the whatever reason my slide okay here
[1:10:00] this is this image just give you a very rough idea about what is that vertical appears as you can see on the modis on
[1:10:07] the bottom see uh there are data gaps or they called orbital gaps in the tropics where there is no data is obtained
[1:10:15] because the r will shift from one orbit to another because of the swath which is limited two thousand three hundred
[1:10:20] kilometers kilometers as you noted in previous slide vs has a three thousand kilometer solid so that you can see there is a low data gap in
[1:10:29] and that's one of the big advantage using years old is that it can it provides complete global coverage on
[1:10:38] every single day so and then you have much more overlaps on the polar areas you can get
[1:10:45] actually actually more than 2-3 observation on a given day and in the tropic at least one observation every
[1:10:53] day day so there are two things i want to explain is one is the how the uh
[1:11:00] uh how the pixels stretch at the edge of the image can actually change your view of looking
[1:11:06] aerosols in the atmosphere so what you see here is on the top is viers image and against the vs data are actually
[1:11:14] stored for 86 seconds for for formatting purpose or for data storage purposes whereas modus data are restored
[1:11:22] for five minutes that's why you see much bigger coverage in modis as compared to fears but it doesn't mean that modis has a
[1:11:32] bigger coverage it's just the data presented here for modis is five minutes of the data whereas the
[1:11:39] blues data is just 86 second worth of the data now i want to point out the uh
[1:11:48] uh age of the sort so the edge is color coded coded is actually circled on the both viewers
[1:11:55] and modis and these are the just zoomed in version of the image for those circled area so
[1:12:02] again the top one is more viewers data this is at six kilometer bottom one is the modest data okay so there is a typo
[1:12:10] here this should not be dr this is actually a modest data a 10 kilometer special resolution so this edr 6 kilometer should not be
[1:12:18] there we'll correct it and upload the new version on the website so i think we did this wrong but this is a
[1:12:26] modus image on in the top is the weirs image what you see on the vs image is
[1:12:31] because it's a high resolution six kilometer you can see fine scale features and you will see that the pixels at the edge of the image
[1:12:40] are not a stretch whereas the mode is you can see there is a stretching going on at the edge as compared to the
[1:12:48] inner part of the image so that is advantage appears another advantage of viewers is that vsa has a two product one is that six
[1:12:56] kilometer resolution and one is at 750 meter resolution which is the sub one kilometer product which this can be
[1:13:04] really useful and you can see in this example that at six kilometer you hardly see the plumes you can see
[1:13:11] the big picture but as you go to the 750 meter reservation you can actually identify identify many many smoke plumes in this image
[1:13:20] which is very difficult to see in the six kilometer product so again the high resolution part of the piers is very
[1:13:26] very useful for air quality monitoring beers also has a smoke mask it's called it's based on the
[1:13:35] uh it's a qualitative mass saying that certain aerosols in the image are either smoke or non-smoke and this is very
[1:13:43] useful when you are monitoring fires long-range transport of smoke uh wildfires or even the crop crop fields fire this can be very useful
[1:13:54] these are based on the spectral and special thresholds uh in the different uh channels in which viewers makes
[1:14:01] measurement measurement and and and this image particularly the smoke mask is actually presented as the light pink thin smoke and if you see the
[1:14:13] the bright pink or magenta color it shows the thickest smoke so you can see the there's a lot of smoke particles in
[1:14:20] the south uh southeast united states and also on the northwest united states and canada and this is tuning one of the fire
[1:14:31] seasons now we had this so this product is also available from beers so it can be really useful for air
[1:14:38] quality certainly air quality monitor applications applications the ghost 16 and himawari these are two another sensors which are actually
[1:14:48] geostationary geostationary so so uh uh over the last [Music] [Music] two decade or so uh satellite remote sensing community has
[1:14:58] been heavily focused on making measurement of aerosols or air quality from the polar orbiting satellite like modis wheels homie these are all in
[1:15:09] polar orbiting sides it means they take measurements for entire globe and there will be either one or less than one
[1:15:18] measurement per day from those sensors but one of the one of the typical problem we have seen in their
[1:15:26] quality that it required continuous monitoring you need measurement at more frequent time interval every 10 minutes 15 minutes or every one hour epa does
[1:15:38] monitor air quality for every one hour so there is a need to have high temporal resolution measurement with the similar
[1:15:46] accuracies as you can get from the polarity satellite in recent time uh both noah and us nasa joint partnership and in japan this
[1:15:58] jax jax japanese space agency has launched a very advanced imager which have uh special resolution equivalent to modis
[1:16:10] and viewers and they also have those spectral channels required to retrieve aerosol values the quality of those retrievals is very
[1:16:20] close to what you get from polar orbiting satellite but the advantage of these sensors is that you can get every 10-15 minute
[1:16:28] observation so the two sensor goes 16 which is now called goes east provide every 10 every 15 minute entire
[1:16:38] disc disc on the which is shown on the left side so every 15 minute you have observation if you
[1:16:46] are only required for the conus reason then there is that observation is available every five minutes so you can
[1:16:53] really really monitor every single air mass movement from one place to another place uh uh we do not have this high quality data in
[1:17:03] the central part of the globe uh covering the africa and the europe and india india part part of the india but there are
[1:17:12] plans to launch similar quality of sensors in next to two to five years either by india or european agencies to
[1:17:21] cover this region over the asia we just covers part of india and all the way from australia to the uh russia
[1:17:32] the sensor provides every 10 minute and the himalayan eight and nine actually there are two removaries right now in
[1:17:39] the orbit is very similar or almost identical to go 16 in terms of the number of channels
[1:17:45] in terms of the resolution in terms of the data quality so keep an eye on the data product from these two sensors they
[1:17:52] have been recently learned the data there are data products out there and they have people are still trying to
[1:17:59] evaluate their quality and performance for air quality applications this is just an example showing if you have this ghost 16 imager uh now this is
[1:18:12] a fire event from the last year uh or in case in the western united states and canada and you can see actually just if
[1:18:20] you have this very high temporal resolution data you can actually monitor the start of the fire and how the smoke is
[1:18:29] transporting over the time and if you can put this information into air quality forecasting model then essentially you can provide very
[1:18:37] accurate air quality forecast in the all the regions which are affected by these fires fires so this is really really powerful next
[1:18:45] generation of air quality monitor monitoring will be available from this geostationary sensors uh this is another example i think
[1:18:54] people might have seen this earlier also but this is from the himawari sensors and i hope this movie works doesn't look
[1:19:02] like it's working on okay so this is from himawari showing the part of india uh where the
[1:19:15] smoke and pollution in fog over the northern india you can see actually on this image due to whatever reason it's
[1:19:22] not working but this this this this movie of this image is available on the website located here on the bottom
[1:19:31] so you should be able to do it in your own time uh sorry i don't know why it's not working but
[1:19:40] anyway i'll just move on it looks like my computer is frozen which is not good now the next sensor i want to talk is
[1:19:56] called drop army it's uh very similar to omi sensors it's launched by european space agency just few months back
[1:20:06] they haven't still released the data eight but the data will be released soon but this is really a next generation of
[1:20:13] omi so what you see here on the right side is a different different spatial resolution of the sensor which are very similar in
[1:20:23] terms of the spectral measurement as common to the tropomy so the biggest one here is the schema key which was
[1:20:31] launched very early in the time and it has a very big exercise to 300 kilometers of exercise then you see the gom ii
[1:20:40] there was another marquee which was higher resolution and then you can see the ome which is 13
[1:20:46] by 24 kilometer in the blue uh which was considered high resolution uh sensor at the time of the launch as
[1:20:55] compared to its previous sensor but now you have this drop army which is very seven kilometer by seven kilometer in resolution and
[1:21:04] this is going to really change the way we identify different sources of this no2 so2 on the ground
[1:21:13] or even some of the aerosol monitoring so so the good thing about the tropomy that it operates in the
[1:21:22] uv and visible part of the solar spectrum so you can actually not only monitor trace gases but you can
[1:21:30] also actually retrieve high quality aerosols data from this again this data is not yet available but they will be available in next few
[1:21:39] months months uh this is just showing an example again what is the important of uh high resolution and how tropom is going to
[1:21:49] help us uh this is simulated data from tropomy on the right side on the left side is the homie and this is just
[1:21:56] showing the nr2 map and you can see on the left side is actually because of the coarser
[1:22:01] resolution of omi there are a lot of features in this image which are kind of hidden or smooth
[1:22:08] or looks more homogeneous but if you see the same part of the world in higher resolution instrument
[1:22:15] like drop or me then what you see is you can see the fine scale features you can
[1:22:20] see the gradients special gradients within those hot spots where the values are very high shown as the dark red color so those are
[1:22:30] really really good good applications to look this gradient pollution and to identify specific sources tropomy will be really
[1:22:42] useful uh this is another example of showing aerosol plume from the tropomy one thing to remember that the tropomy
[1:22:52] actually flies five minutes behind the veer sensor so veers is making measurements and just five minutes behind your straw bomb is
[1:23:03] flying in the similar same orbit so whatever vs is looking tropom is going to look but since
[1:23:10] drop army does have uv vents severes velcro and vs does not have uv vents so if you combine the
[1:23:17] measurement from the gears and drop on me you can do a lot of things so you can combine the information from
[1:23:24] the two sensors and provide many many more geophysical parameters over a given location this is just showing fires from the california
[1:23:34] la area fires last december 12 2017 you can see the smoke plume i hope it is visible
[1:23:45] this is a smoke plume on the veers image and the good thing about the drop army which is on the right side is
[1:23:55] that it adds that it actually exactly match to the aerosol index parameter which is from the tropomy you can see even a fine
[1:24:04] scales scales ah ah and the good thing about the aerosol index from tropomi or even from home is
[1:24:11] that it does provide aerosol information even if there is the cloud because the aerosol index does not really uh it can
[1:24:19] be calculated under all sky condition if there is cloud the result index will become negative and if the resource or
[1:24:27] index will become positive so you can see actually the blue colors in this image which is denoted as negative
[1:24:33] aerosol index so this is going to be very game changing instrument in terms of how we see
[1:24:40] see our monitor air quality from the ground from the soil space okay so let's the next one
[1:24:53] uh there are efforts to make a constellation of satellite uh which will provide high temporal and spatial resolution data throughout the
[1:25:05] globe and it's uh there are three sensors right now in that constellation one is tempo which will provide data over uh united states
[1:25:15] hourly data sentinel 4 which will also provide hourly data only over europe and then the gems from the
[1:25:22] korean korean space agency which will provide hourly air quality data over much of the asia so once
[1:25:32] these all these three sensors are planned to be launched in next three to five years and they will actually
[1:25:40] provide very high quality air quality data both tres gases and aerosols aerosols every every hour so this is
[1:25:50] one of the few first generations of dedicated air quality missions planned and they will be launched and the once
[1:26:01] the data will start coming from this sensor sensor it will change everything in air quality monitoring monitoring this is just some more specification
[1:26:11] about the sensors tempo which is tropospheric emission monitoring of pollution it will be launched by the united states it will have a very high
[1:26:19] special resolution all the way from two kilometer to four to five kilometer it will operate from uv spectral channels to the visual
[1:26:28] channels channels range so that you can actually see both uh uh you can see actually both uh tres gases
[1:26:37] as well as aerosols and the expected launch stage is 20 21 as of now there is another very interesting sensor
[1:26:46] which was just uh selected uh to be launched uh by 2021 it's called maya multi-angle imager for aerosols
[1:26:57] and and this will be a unique instrument it will have a multiple angle imaging capabilities just like the meissner instrument currently
[1:27:06] on board on terra satellite but it will also have a polarization which will help actually to separate different types of
[1:27:14] aerosols large versus dust versus non-dust and maybe some other you will be able to distinguish between more type of aerosols
[1:27:24] and it will be really a step ahead in terms of the pieces of information about the aerosols
[1:27:32] particle in the atmosphere as we know uh this sensor will be actually not provide the global coverage but it will
[1:27:40] be operated on a specific targeted and those targets that were i'd already identified identified there are 20 or 30
[1:27:51] big cities all around the world which have been identified where the sensor will make measurements so this is the
[1:27:56] more targeted measurements and the idea is to use this high resolution measurement over these cities to study
[1:28:04] the health impact of aerosols or the pm 2.5 or the particulate matter on various kind of health
[1:28:12] health health effects like birth outcomes or cardiologists or respiratory disease and even premature death so this will be a
[1:28:22] very very advanced instrument making measurement only our selected targets targets uh to provide actually the to see how
[1:28:34] we can use the space-based technologies to analyze the impacts of health impacts of air pollution on human health
[1:28:44] i think that's all i have with this uh i will actually we'll close this presentation mode and now we'll take
[1:28:55] over the cash question answer uh i will give give mike to melanie first she can take the
[1:29:04] question which are relevant to uh uh omi and then i will come back and probably answer other more disrelated
[1:29:12] questions okay uh let's see let's start with answering questions the first question here is how can i know the correct intercept and
[1:29:37] slope to calculate the pm 2.5 from aod for my study region so this is very very good question
[1:29:47] there are many different ways one i would strongly recommend on our rc website we have conducted a specific
[1:29:57] webinar webinar on how to get pm 2.5 from aod observation it's called advanced webinar we have done this is
[1:30:05] in 2016 i believe please go watch the recording go over the material from that webinar that will
[1:30:13] give you a lot of information on how to do this now the second option is you perform the
[1:30:20] analysis if you have some ground measurement at your locations or region of interest and then use those slope and
[1:30:27] intercept for that region the third option is please try to search for literatures journal published papers people have
[1:30:37] done done this analysis for various regions all around the world and you might able to find this information
[1:30:44] slope and intercept and some of the published work uh those are the three options for you and
[1:30:51] uh uh i would recomme again recommend to do some more research on looking by the papers papers uh so that you can get
[1:31:00] appropriate information the next question how can we run the code without selection of for yes and no each time
[1:31:14] this is very simple right now the codes are set up to take the the input from the command line from the
[1:31:22] users so that users can make the decision decision uh uh it's very simple you can go inside the
[1:31:29] code and change that and that's uh you can either just say whatever input variable they are reading
[1:31:38] the y and no just comment that and give a y or n value there and it code will not
[1:31:46] ask that and it will by default run or you can do some also more more advanced things there so that the
[1:31:54] code can run automatically but hundreds of thousands of files without asking you every time yes or no
[1:32:04] okay the next question i will let melanie answer okay can i calculate co2 no2 content for any specific gas for
[1:32:16] regional scale okay i'm i'm assuming uh the question is supposed to say so2 um uh i'm guessing
[1:32:27] i'm i'm not exactly sure what the question is asking so if you're calculating say a regional mean
[1:32:34] mean um um [Music] [Music] then you could use the values contained within the files to calculate various
[1:32:42] statistics that you might be interested in but if you're going to do anything like try to grid
[1:32:53] um um the level two data and then average it that's something that needs to be done pretty carefully
[1:33:02] i hope that answers the question yeah i i think so just to add on what melanie said is uh
[1:33:12] uh and this also applicable to uh uh more aerosols data as well as no2 so to data there are uh
[1:33:22] there are ways in which you can calculate region one is you can define the latitude longitude boundaries of the region
[1:33:31] uh either in a rectangle or a polygon shape or sometimes people also like to calculate that for a specific shape like
[1:33:42] administrative boundaries country boundaries or state boundaries or district boundaries or county so you could actually do those kind of
[1:33:51] sophisticated thing as well but to do that you have to really modify your code a little bit more and again
[1:34:00] look for search on internet and you will find some of those solutions how to extract the data
[1:34:06] for certain boundaries uh if you are looking course resolution of the data uh the giovanni service of nasa
[1:34:14] does provide that kind of service for limited shape files to extract the data but those are again
[1:34:20] level 3 course resolution data if you are interested in level 2 data which we discussed here then you have to do that by yourself
[1:34:34] the next question number four is i think we already addressed how can we get the local intercept value of aodpm 2.5
[1:34:45] question number five uh is basically if you want to download yes there are ways to download uh but it will be
[1:34:53] we do not provide direct link to download but when you are brought when you are running the costing or running
[1:35:01] that recording from your browser uh you can actually capture the screen or you can use some software and we don't
[1:35:09] have any problem with that but i think the direct downloading links may not be available what can you say about umd data on air
[1:35:25] so home arrow is a aerosol product from ome sensor it is a product comes out from the knmi
[1:35:36] the european or the netherlands another agency in netherlands who actually actually is uh pai or the main agency who developed the only
[1:35:49] sensors so it's from their agency that products comes uh it's a multi-spec channel channel based aerosol algorithms which use 18
[1:36:00] different channels to retrieve aerosol optical depth and other aerosol related parameters parameters i don't have much idea about the quality
[1:36:11] of the products probably have to look again for the literatures or browse through their website to get more
[1:36:18] information on that but the data is available to download from the nasa earth data which we have
[1:36:27] where other ome data is available nasa also has similar product called om ar uv oma omar ruv it's a very similar
[1:36:38] product as one arrow uh only difference is they use different types of algorithm to get the aerosols information so there
[1:36:47] are two different products from omi on the aerosols and i think that's true for other transgressors as well
[1:36:57] okay melanie do you want to take the next one i actually have no idea why no2 isn't reported in dobson units
[1:37:08] and so2 is i tried googling to in advance of this question okay okay maybe maybe maybe we can ask uh
[1:37:20] the people who actually produce yeah we can use the actual retrieval people and and all of these q a's are going to be
[1:37:29] available available uh on the rset on the training website so we'll try and find the answer to this
[1:37:34] question and update it that's good thank you okay okay elizabeth i cannot see anything here let me see it here okay
[1:37:51] the next question okay let me read it uh it is possible to use them data of modis
[1:38:04] for my country that is got mala and what method i advise to use for adjustment of data
[1:38:11] data they are more real since i have no the point geographic with the spectros mercury data for pm10 npm 2.5
[1:38:19] uh okay i don't think i understand completely the question number eight uh but again the answer is very similar
[1:38:27] uh uh that all the modis data is available everywhere in the world so it should be available at your in your country as
[1:38:37] well well uh in order to calculate pm 2.5 from aod you will need some kind of local aod pn
[1:38:45] 2.5 relationships or you have to look for the literatures if you can find people other people have done anything
[1:38:53] that that you can also check the quality of modis data by going one of those algorithm web page
[1:39:03] which i discussed in the last session and i think i also responded this question and individually there are two
[1:39:10] website dot target.jsfc.nasa.gov and gpw.jsfc.nasa.gov though those two website does provide some information on the global validation results of their product
[1:39:30] question number nine the data of pm to pm10 and pm 2.5 we have them on annual basis and what will
[1:39:40] role play the pm10 that are data from who who uh i will actually take pass on that question
[1:39:48] because i'm not really sure what exactly you're trying to answer us there uh there's a pm 2.5 data from who which
[1:39:56] comes out of as a combination of model satellite and ground but it's only available for one year 2014
[1:40:07] uh other data which is available on pwh website they are either reported by the individual countries over specific stations
[1:40:18] and i think you will be able to find more information on who website but i i do not have much more details on
[1:40:26] those okay question 10 uh it's a long one there are many disease associated with air quality the smallest aerodynamic
[1:40:42] particle directly influence the alvoli of the human being from the epicurumogenical point of view the casual agent cannot be proven
[1:40:52] however advances in science such as the application of this online training contributes a lot among other pollutants we talk about
[1:41:00] volatile carbonic pollutants and persistent organic pollutant in addition to obtaining data through python it is it will be possible to obtain this data
[1:41:12] at the level of shape file shape for qgis arches rather free software okay okay thank you for your comments
[1:41:23] so the short question is can we extract the data uh uh using either python or any other
[1:41:30] software for a specific shift file which can be used in gis software so the short answer to that that we do not have
[1:41:42] any ready-made software as as as for my knowledge which can do this job for you but but if you again search internet you will
[1:41:55] find uh soft python script which will read shape file and which will read your corresponding data sets and will extract
[1:42:06] the data for that particular shape file you might have to change few things in the those codes
[1:42:12] codes but we do not have a ready-made code to do that at least for the level 2 data there are
[1:42:21] options for level 3 which i mentioned earlier okay melon you want to take on question 11 11 actually uh i think i want to tack on a
[1:42:36] little bit onto question 10 because i think the question is also is there data available for vocs
[1:42:46] and and [Music] [Music] the the um um so so the short answer to that is not really
[1:42:54] formaldehyde is sometimes used used as an indicator of voc availability um um but but as for higher organics um we just don't have
[1:43:08] the ability to measure those from space even the tropospheric column formaldehyde product from ome isn't really supposed to be used on a
[1:43:18] daily basis more more more on monthly time scales and again that's the column not the surface level
[1:43:29] um um okay so for question 11. um how to process the averaging kernel from omino2 so so a lot of people when comparing model
[1:43:45] output output with ome um use what's called an averaging kernel on their model output for a more
[1:43:54] appropriate comparison satellite observations are inherently more sensitive to certain altitudes of the atmosphere than others so using an
[1:44:07] averaging kernel uh can help you it basically it turns your model output into what the instrument would
[1:44:17] actually see for the ome no2 data i think it's actually recommended to not use the averaging kernels to do this
[1:44:31] they recommend instead using the provided scattering ways in in the files and essentially recomputing the vertical column density
[1:44:48] in order to compute uh a vertical column density density uh within the file is contained the slant column the i'm sorry the slant
[1:44:56] column density uh and the scattering weights and the scattering weights are used to compute an air mass factor
[1:45:05] and these air mass factors can be used in combination with the slant column densities to compute a vertical column
[1:45:14] density when we are writing uh this q a i will i can post a link to a uh an article that can describe
[1:45:24] this procedure essentially you can use your model output to to sort of uh recalculate a vertical column
[1:45:41] density using your model output as the a priori information and this i think is what they advise
[1:45:49] people to do okay question 12 how can i resample omi omi hey county resample swath oh me data to
[1:46:07] a grid geotiff format um as for the geotiff part i think pawan kind of ends with that i don't think we have a tool
[1:46:19] to do that um but if you would like gridded only data it is available from the giovanni
[1:46:31] website website for both no2 and so2 at courser resolution than we've talked about here okay when evaluating eod we saw a
[1:46:59] reasonably strong correlation do any only parameters predict ground level concentrations of gas flows into the similar way
[1:47:08] so uh for so2 the tropospheric column so2 so2 i'm sorry the column pb the column so2 pbl product
[1:47:25] is meant to represent uh uh the column as if the so2 plume is nearest the surface so that's going to be the most relevant
[1:47:37] for air quality in terms of near surface emissions for no2 um as i stated earlier no2 is relatively
[1:47:51] short-lived short-lived on the order of hours to days so it tends to be most abundant in in the lowest levels of the atmosphere
[1:48:04] and have very high spatial variability around its sources so no2 is a good example of a quantity that that surface value can
[1:48:18] be related to the column this is usually done using using other information from an atmospheric model for example taking the surface value and
[1:48:33] column value from a model that ratio and then applying it to your measured your observed column value to
[1:48:42] calculate calculate an estimated surface value um um okay question 14 is data loss valid for ome aod data
[1:49:00] if this is if this refers to the row anomaly any row anomaly feature is filtered out for all of the ome data
[1:49:17] i believe okay so the question 15 are there any there any free available models to predict much refined
[1:49:42] relationship between pm 2.5 and aod than a mere linear relationship so so the answer is yes and no because it
[1:49:51] depends on where you are there have been lot of research uh and people have done over the united
[1:50:00] states just because there's a lot of ground measurements available so people have tried uh gone beyond the linear
[1:50:08] relationship linear models they have used multi-linear regression machine learning learning and combination of model and satellite and those data have been created by
[1:50:19] various groups they are available on a daily and annual skills uh there is a one from the noaa it's
[1:50:29] called uh it's uh it was a joint project between noaa nasa and epa and those data are created on a daily basis it's called
[1:50:38] idea project so if again search for idea noaa noaa and you will be able to find those
[1:50:47] there there other parts of the world i would say is still like a lot of these more sophisticated models are not
[1:50:57] available available and people are still in more research mode there have been lot of work even in
[1:51:03] china also people have created high resolution pm 2.5 product from aod using more complicated sophisticated models models so i think they are available in regions
[1:51:17] where you have a lot of ground data sets but in regions where the ground data are not available
[1:51:23] they still rely on the models global global models okay uh question 16. can i find ome data
[1:51:37] at let's stack i know the uh let's take only actually provide modest data to get the ome data
[1:51:45] you have to go to the earth data you can still use the same login password and how to get the data the
[1:51:51] instructions are provided in a ppt which you can download it from this training web page and that will
[1:52:01] actually guide you how to get the data vs aod data validated over indian region yes the data is
[1:52:10] right now vs data is processed by noaa they have validated over global reason including india the data quality looks good
[1:52:22] i would strongly recommend to read the papers if you are interested please send me an email and i can send
[1:52:30] you the specific validation paper from the uh vs aod validation over global regions and that will provide you more
[1:52:39] information on that how to extract smoke masks from vs data uh again this is a product uh available
[1:52:50] through the idea website which i just mentioned earlier uh over the us if you are looking for global
[1:53:00] there is a product from them available through the noaa class website i don't remember the web address at top
[1:53:10] of my head but if you google you will find it or again send us an email and we'll be able to
[1:53:18] send you the proper link question number nine is it reasonable to assume this codes can easily modify to use for the ozone
[1:53:34] returns from iqa yes you can modify easily to get the ozone data as well where can we best access the viirs data
[1:53:47] vs data is available from the noaa class website let me just find the website and i can actually test it here
[1:54:13] okay unfortunately because of the us government shutdown the website is downright but it's called noaa class data download and you can actually
[1:54:22] search it and you should be able to find it okay okay why doesn't the geovony website have modus 3 limited
[1:54:38] product for parasol optical gas so the geomoney website is designed to handle level 3 data only because if you go to the level 2 and
[1:54:50] level 3 uh level 2 data high resolution data the data volume become very large and it is very very hard to handle in
[1:54:58] near real time that is why jio 1 only host level 3 credit product there have been other tools
[1:55:08] which are in development right now now which will actually perform some of the similar tasks as jiowani with the level 2 data
[1:55:18] but they are still in development question 22 okay so before adjusting some superficial data with with the data of mod is
[1:55:44] we can consult you for you in doubt that may arise since the only way to learn your application is to exercise on the
[1:55:51] subject and if that was the case we would contact them by mail yes please contact us by email if you have more
[1:55:58] questions questions we'll be happy to respond okay melon you want to take next to one uh when omi loses 50 of the data i think
[1:56:16] more data is lost near the tropical zone in that case how can we assure the quality of the product how can we ensure
[1:56:22] that the data quality is good um um as far as uh the row anomaly that is already filtered in the no2 and s2 data
[1:56:34] and and um um that'll be indicated by the fill values which are very very large negative numbers
[1:56:44] the exact numbers i've included on the slides that you can download as far as data quality if you look at the tables that i've
[1:56:53] included in the powerpoint are what the is those are what the developers advise users to use as far as filtering the data using
[1:57:06] parameters such as radiative cloud fraction terrain reflectivity and solar zenith angle um as far as the okay so question 24
[1:57:21] uh the wavelengths used i'm assuming this means the wavelengths used to measure no2 and so2 and uh no2 is measured in the visible
[1:57:32] and near uv from about 400 to 465 nanometers and so2 is measured in the wavelength region about 310
[1:57:45] to 340 nanometers okay question 25 is there an algorithm for aod that does not discard the image due to cloudiness
[1:58:13] okay the short answer is no but there are algorithms to detect aerosols above the cloud if there is a cloud underneath the
[1:58:26] if there is aerosol layer underneath the cloud then it is very high it's really not possible to see from the passive
[1:58:33] imager imager but if you look the data from active sensors like calypso which has a laser laser it can actually provide you the vertical
[1:58:46] profile profile and if the cloud is not very thick then it can see the aerosol layer underneath the cloud
[1:58:55] and will provide you an optical depth value for that but from the passive sensors it's not possible
[1:59:10] drop army could be used to find concentration of pm 2.5 if so where could i find the information
[1:59:16] uh uh at this point uh trop omi data has been has not been released uh once they release the data we will
[1:59:27] know more about what and what we can do and what we cannot do from that okay i think
[1:59:39] that's all we have today today i hope everybody was able to run the code i know there were some
[1:59:47] people having issues with either some minor minor errors related to print or by changing the version between 2.7 and 3.6
[1:59:58] those are i believe those are small errors which can be easily fixed by looking solution on internet
[2:00:07] and hopefully you will be able to modify these codes to actually run and perform some of the application
[2:00:14] which we discussed in session one and two little weight and theory as well uh some either comparison with other
[2:00:20] data sets or to perform some case study analysis analysis so so i hope uh this is useful uh tomorrow or
[2:00:32] whenever we are open uh hopefully we will be able to send a survey uh asking about specific uh
[2:00:42] question related to this webinar series and what was useful what was not useful please provide your feedback those
[2:00:50] surveys are very very important for us that they actually provide us information on what needs to change in order to make
[2:01:00] this training more effective for everybody who attend this training and there are also options to suggest additional drop topics on those surveys
[2:01:11] so that will also help us to plan future trainings trainings and and there are many different types of questions all
[2:01:19] the way from training styles presentation styles to the subjects specific please do take those survey those service does not take more than
[2:01:32] 5-10 minutes of your time but they really provide valuable information with that uh thank you everyone for attending
[2:01:40] thanks melanie elizabeth brock and everyone for helping with this webinar and we will see everyone probably during next training
[2:01:50] thanks thanks thanks everyone you
