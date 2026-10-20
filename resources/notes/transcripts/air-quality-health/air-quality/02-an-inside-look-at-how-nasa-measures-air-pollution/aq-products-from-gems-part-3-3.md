# AQ Products from GEMS, Part 3/3

`https://www.youtube.com/watch?v=lPb0wb_lZd8` · id 109 · 1:19:24 · module 23 — An Inside Look at How NASA Measures Air Pollution

[00:00] hello my name is sejambo from UMBC and as part number three of the accessing and analyzing air quality data from
[00:09] geostationary satellites today I'd like to introduce air quality products from gems gems before we get into the presentation I'd
[00:19] like to thank to the professor Jim Kim who is pi of gems and gems science team for providing this data sets
[00:29] so the learning objectives for these sections are to understand the air quality emission of gems and understand
[00:38] the gems air quality data sets retrieval algorithms and validation and locate and access gems air quality data sets
[00:49] and have sample python Jupiter notebooks to read map and extract gems data sets so first introduction to larger information
[01:09] as an historical perspective of gems this figure summarizes the capabilities of satellite instruments measuring atmospheric composition using remote
[01:20] sensing with respect to temporal and spatial resolution historically in the late 1970s total ozone was measured successfully by the
[01:33] sbv and the towns instruments technology has since Advanced to measure important tropospheric Trace gas concentrations such as ozone NO2 SO2
[01:47] formaldehyde and carbon monoxide by a number of satellite sensors including the comb12 and Omi skiimaki the ohms and the triple me
[02:01] to date no observations of Trace gases at high high temporal resolution from Geo have been made to complement the
[02:10] high temporal resolution aerosol measurement measurement and a few paper discussed the importance of a Geo mission to capture the diurnal
[02:21] variations of air pollutant concentrations due to photochemistry time dependent emissions and daily meteorological variability so such scientific findings along with
[02:36] societal demands have led to projects such as gems Tempo and Sentinel 4 aimed at providing High hourly observations of
[02:46] Tracy's column of abundance from space there are a series of geostationary air quality satellites so-called geostationary aerocolate constellation
[03:02] with gyms over Asia beginning in 2020 followed by NASA Temple over North America and Isa sentinela or over Europe
[03:13] these missions offer similar observational capabilities such as UV visible wavelength a similar level 2 products every hour
[03:24] during daytime and are committed to serving the data needs of air quality applications applications so these missions cover the major
[03:35] industrialized regions of the northern hemisphere hemisphere so that we can monitor northern hemisphere in an hourly basis
[03:53] James is a part of the Future geostationary air quality constellation which was launched in February 2020 to monitor transpondering pollution
[04:05] events over the Casio Pacific region hourly at high spatial and temporal resolution resolution it is a geostationary scanning UV
[04:16] visible spectrometer so that measure wavelength range from 300 to 500 nanometer along with north to south pixel at once
[04:28] and the scanning move from east to west so the left figure here shows the field of regard and the skin profiles of gems
[04:39] over the domain following the sunrise and sunset gems cover Eastern Asia from Japan to Bangkok in the morning
[04:51] and cover the area from Seoul to India in the afternoon the spatial resolution of gems of our
[05:00] soul is about 3.5 kilometer by 8 kilometer for aerosol products in seven kilometer by eight kilometer for Trace guest products
[05:13] in the special resolution changes from four kilometer to the 25 kilometer depending on the location now this slide shows the gems instrument
[05:32] specification specification the left figure shows gems flight model our drawing and pictures of the calibration assembly with aperture from the very left and the
[05:48] radiator which is the bottom two two figures side view of the instrument the James instrument was designed to
[06:00] operate for more than 10 years producing eight images per day engines measures Radiance and irradians for the spectral range of 300 300 to 500
[06:16] nanometer aerospectral resolution of 0.6 nanometer with 3 over sampling or spectral and radiometric stability the instrument was built under
[06:32] requirements for SNR polarization straylight and so on gems instrument on board the gk-2b satellite launched in February 2020
[06:51] and after that jk2b satellite implemented solar array deployment a liquid opposite engine firing and arrived successfully in orbit in March
[07:04] 2020 in terms of James instrument gems powered on March 23rd after arriving Orbee successfully and and outcasting and obtained the first gems
[07:20] measurement for sun earth and led on April 21st in 2020. and since April 23rd 2020 chance is in
[07:34] Daily operation and providing operational data sets successfully foreign shows the details of the gems East-West scan operation scenario
[07:53] the skin schedule of gems was designed to move the field of view from east to west during a day to spend more time
[08:02] measuring ground pixels with low solar genus angles currently four types of field of views are being used including half yeast
[08:15] South Korea full Central and full rest the tail on the left side shows different East-West scan scenario
[08:27] Depending on time shown in columns and months in rows so early in the morning James skins HD sector which is marked as pink color
[08:42] on the table and as the sun rises gems skins area following the thumb and expand to its
[08:51] full scan range evolving into HK mode in yellow and FC mode in green color and C mode takes measurements from Japan
[09:03] to include South Asia in the afternoon gems takes observations in FW mode in blue color to cover India
[09:23] this slide shows the Baseline products of genes the level 2 products with their importance importance like Drop only instrument
[09:33] gems provide aerosol product including AUD single scattering Albedo UV visible aerosol index aerosol height Cloud product surface properties total
[09:47] ozone ozone profile formaldehyde glioxyl nitrogen dioxide sulfur dioxide and nuclei index for ozone profile and nitrogen dioxide products they are
[10:05] separated into tropospheric and stratospheric stratospheric currently the blue color data which is aerosol cloud surface surface no surface total ozone SO2 UV index are
[10:23] released as of September to 2022 and additional products such as um H2O ero which is bromonocide and
[10:36] h-o-m-o which is called hono are under development versions here cloud and surface products are related to climate change and proxy
[10:49] data of other aerosol and Trace gas products products and also a newly index are especially important products for public health as
[11:00] well as air quality and address gas products such as NO2 and formaldehyde are also an important components for the air quality itself
[11:12] especially at the surface level and additionally from aldehyde and glyosol are proxy of volatile organic carbon carbon and nitrogen dioxide are precursor of
[11:27] ozone and aerosol in this chapter I will briefly explain the gems level 2 products algorithm and their validation result
[11:50] so this figure shows the optical depth of air pollutants and based on the physical properties which range of
[11:58] wavelengths Channel window we use in retrieval retrieval compared to the trace gases aerosol has spectrally smooth signal and Optical
[12:11] depth about over 0.21 approximately in currently James aerosol algorithms are picking six discrete channels between 300 and 500 nanometer
[12:26] for the trace cases ozone NO2 and SO2 has relatively High signal compared to the hch which is
[12:37] formaldehyde and glyosol in an order of 10 to 100 times in magnitude the retrieval algorithms are picking
[12:50] wavelength where the trace gases Optical depth signals are dominant foreign concept of retrieving level 2 products from satellite measurement data sets are
[13:08] basically same regardless of product type type first first we calculate top of the atmosphere radians using radiative transfer model
[13:22] and the top of the radiant top of the atmosphere radius is a function of various available atmospheric conditions
[13:30] such as geometry surface reflectors aerosol Optical properties and Trace gases in Etc then based on comparison between
[13:42] satellite observed top of the atmosphere radians and calculated top of the atmosphere Radiance we retrieve James level 2 product
[14:00] now this slide shows the flowchart of the James algorithms once level 1C data is generated from the
[14:10] level zero data it follows the pipelines for producing surface information Cloud information and Aeros Optical properties properties then the ozone products are derived
[14:26] employing the level 1C and cloud data followed by the retrievals of SO2 in order to firm aldehyde and gliosaur
[14:40] but finally the aerosol effective height and UV index products are generated since aerosol algorithm retrieve aerosotical depth single scattering
[15:03] Albedo and aerosol layer height based on calculated lookup table the algorithm first calculate UV aerosol index visible aerosol index to select
[15:16] aerosol type and after Cloud masking the algorithm retrieve aod which is aerosotical depth and single skaterinal mirror which is
[15:27] SSA this algorithm is based on Omi Heritage two channel method from Homer Taurus group and use optimal estimation method
[15:40] to retrieve errors layer height finally for the optimal estimation the algorithm uses six channels which is 354 388
[15:55] 412 443 477 477 for 19 nanometer the right side figure shows the retrieved gems Aeros Optical depth and
[16:10] compared with human rights Optical depth or in the Smoke case originated from Siberian wildfires for this case highly observing fine mode
[16:24] is selected from gems aerosol type algorithm and showed reasonable agreement with imagery Aeros Optical depth for ozone products
[16:47] the algorithm basically consists of a three-step retrieval process Step One is a simplified version of the David meteor which is developed in 1967
[17:02] algorithm algorithm which is called the toms algorithm the basic concept here is that for ozone retrieval retrieval lambertian equivalent reflectors which
[17:16] is r is assumed to be wavelength independent for most cases except when aerosols are present and where there is a strong
[17:28] specular reflection of the ocean surface and after estimating the lamb version equivalent reflectivity the total column ozone is estimated by
[17:43] matching the measured radians with the Computing radians from the radiative transfer model the second step is a straightforward
[17:55] implementation of the optimal estimation algorithm developed by Rogers the optimal estimation process is to obtain the ozone profiles at three
[18:08] conventional terms wavelength which is 312-17 and 3 3 1 nanometer we are sufficient ozone information can be obtained
[18:23] and in step 3 we make corrections to account for the effects of clouds and terrain Heights the right figure shows the retrieved
[18:36] gems total ozone result which remains almost the same during the daytime so this slide shows the ozone profile
[18:49] algorithm algorithm the left figure shows the flowchart of the gems ozone profile algorithm and the algorithm basically is the optimal
[19:00] estimation estimation and the successful performance of algorithm can be accomplished only when accurate calibration and forward model
[19:11] simulations simulations and good knowledge of measurement errors and a priority covariance matrices are available so the bottom left figure shows the
[19:26] basic physics here which is that it shows the huggins ozone bands which is between 300 to 3 40
[19:36] nanometer nanometer and this has been employed to obtain information on the vertical distribution of ozone the magnitude of ozone absorption
[19:52] cross-section decreases dramatically as much as five orders in wavelength range of 270 to 330 nanometer and the incident light at the heart
[20:07] sleep band is observed mostly through the stratospheric ozone there is the light at longer wavelength can penetrate into the lower part of the
[20:20] atmosphere in the bottom right size figure shows which is located at the central part of the slide
[20:33] shows the sensitivity of normalized radians radians to the ozone profile and a function of wavelength below 310 nanometer
[20:48] the peak position of the sensitivities is well discriminated for the altitudes between atmospheric top and ozone layer
[21:00] the sensitivity to the tropospheric ozone can be obtained a wavelengths greater than 305 nanometer but become weak to all layers with
[21:13] wavelengths greater than 330 nanometer so the right figure shows the gems retrieved monthly mean of tropospheric column ozone
[21:29] compared to the geosphere chemical juice can result this tropospheric ocean from gems shows higher values than those from just came
[21:41] in Eastern China in Southeast Asia now I'm going to explain about the retrieval algorithm of nitrogen dioxide
[22:00] sulfur dioxide and formaldehyde the basal method of transgress algorithms are same and composed of four different steps
[22:17] first first from the spectral Radiance measurements from genes based on the Duos method which is number two here
[22:31] the algorithm retrieves length column density of Trace cases here to fit the radiance Spectrum accurately accurately the algorithm use of certain
[22:43] cross-section data sets convoluted with the sleeve function of instrument third third to convert slant column density to the
[22:55] vertical column density the algorithm calculates AR Miss factor from the radiative transfer model and this is based on pre-calculating
[23:06] lookup table and consider it different atmospheric conditions such as geometry aerosol third phase gas profile and Cloud
[23:20] with the Air Max Factor the algorithm calculate vertical column density density and for nitrogen dioxide they have
[23:32] Stratosphere troposphere separation algorithm to get tropospheric no to data set so the right side figure shows the gems
[23:44] retrieved no two total slant column density over southeast Asia and East Asia region showing the algorithm results are well
[23:55] captured during or will capturing nitrogen dioxide emission from major city areas those the SO2 slant column retrieval for
[24:15] gems gems is based on PCA and Os method the physical concept of the PCA algorithm is similar to that of the
[24:26] device method and the PCA algorithm uses the pieces extracted directly from measured radiances radiances not the forward modeling data
[24:40] the PCA algorithm for the planetary boundary layer sulfur dioxide retrieval can reduce the uncertainty caused by physically on explainable spectral
[24:53] features so the bottom figure shows the tall volcano located um about 65 kilometers south of Molina a large-scale volcano eruption occurred
[25:10] on March 26 2020 of 2022 and gems captured SO2 emitted from tall volcanoes spreading to the Hindu in the
[25:24] China peninsula through the Western coastal regions of the Philippines foreign Optical absorption spectroscopy which is called OS method
[25:49] similar to the duas method but the differences is that the equation is fitted to measured radiances by a
[26:01] non-linear lift Square method as a fitting window formaldehyde use wavelength between 3 28.5 and 356.5 nanometer and use wavelengths from 325 to 358
[26:23] nanometer as of calibration window so the below scene shows the retrieved formaldehyde and glyosol from gems for
[26:36] the large Wildfire cases in ulching in Cameroon in South Korea on March leaves in 2022 James detected the increase in
[26:51] formaldehyde and glyosol usually also index and nitrogen dioxide emitted from the Wildfire cases the UV index algorithm is based on
[27:15] radiative transfer modeling using as inputs such as solar genus angle it begins in this angle relative Osmos angle total
[27:27] ozone um and Etc from gems level 1C and level 2 product second Cloud Optical depth is calculated
[27:42] by comparing the calculated TOA reflectance and measures Ty reflectance at 3 54. now and finally UV is index and other
[27:57] indices are obtained by applying four different action Spectra for aerosmol effects DNA damage production of vitamin D in human skin and plant response from
[28:12] the surface UV radiation to evaluate the accuracy of the gems level 2 products several ground-based or satellite
[28:33] instruments are used and this video shows the ground-based instruments Network which is used for the gems level 2 validation
[28:51] based on the shown ground-based or other satellite observations we validated the gems level 2 products against ground-based and other satellite
[29:02] observations observations for the period of from August to October in 2020. foreign foreign coefficient written in red color at each
[29:18] panel represents the good agreement between gems and the reference observations this is the same gems validation results
[29:34] as previous slide but it shows the statistical table the blue number represents the goal correlations correlations which were set before the James lunch
[29:49] and the red indicates the achieved correlations correlations so for the same period from August to October in 2020
[30:00] every person achieved a higher correlation than the whole so I'm going to explain how we can access of the gems air quality data sets
[30:24] after lunch of James encouraging all the dance level 2 images are available through the nir website and also level 2 file products of cloud
[30:38] aerosotical depths total ozone which is OC o3t UV index and SO2 are released in June 20 20 22nd
[30:53] soon in November other level 2 products will be released and level 2 Data will be downloadable from nir site from the website's
[31:07] addresses here and for the level 1C data data is available through the offline only due to the large file size of about
[31:21] 8 gigabytes per one hourly scan foreign how we can access the gems data first first go to the National Institute of
[31:41] Environmental Research website which is a nir website and click the cellulite data tab before we go further if you click the
[31:54] satellite tab you can find the instrument detail and products for gems if you click the image view tag
[32:10] you can look up the gems level 2 image to search the image of the specific products products or can you Can Begin by selecting the
[32:21] product of interest from the search bar such as Aeros Optical devs single scattering Albedo um total ozone and Etc
[32:34] and use the temporal search options to filter the data by time and date then you can see the image of the field
[32:45] of regards of gems and the zoomed in area around the Korean peninsula to download the gems level 2 Data
[33:03] one can click the data download tab and as we looked up the GMC imagery use the temporal search option to filter
[33:14] the data by time and date and click the button of downloadable to begin downloading Jazz data and you can download multiple files
[33:28] using the check boxes finally if you go to the ATV detail you can download the activity of gems level 2 data which
[33:43] describes the principle of level 2 algorithm now this slide shows suggest net cdf4 file naming convention this is basically an order of satellite
[34:04] name instrument name data processing level level the satellite observation date start time of gems observation algorithm name and James scan area
[34:19] and the final two is the processing type in file extension format now with the pumply program if you open the gems aerosol Nest CDF
[34:41] file file you can see the satellite variables on your left side and the detailed file structure information on the right side
[34:55] here the final algorithm flash is the variable describing quality flag of aerosol products for the quality flag the details of the
[35:12] usage are described in gems user guide which will be available from the Mir website now I'm going to show the python Jupiter
[35:27] notebooks exercise to read map and analyze gems data set if you open the um um GitHub or Google Drive for the gens data
[35:48] set um there's several files for for the python jupyter notebooks uh so here I've already set set up the code
[36:02] and James level to aerosol or nitrogen dioxide files and aeronet data sets in my Google Drive so
[36:16] so from from so at first if you open this readme file um there's a description for um for about four python codes
[36:31] which is read and map gems NO2 and AI reads gems and list SDS read James NO2 AI at all location
[36:47] Bridge gems and time series with erina so from the first um um this read and map gems NO2 and AI
[37:02] is basically read.gen's data sets and plot the basic variables on the map the procedures are divided into four
[37:13] steps steps first it reads the file list and get the data set files that are listed in
[37:25] in we have to choose between yes or no to generate the map figures and then you first calculate the range
[37:35] of valid data to be used to be displayed in the map then it plot the variable of interest
[37:45] along with the color bar on the side based on the SDS variable chosen and the data for that variable
[37:58] second second this read gems and list SDS python code um um basically read the file list and get the
[38:10] data set s that are listed and the main function of this code calls another function to print the following
[38:20] variables such as NC ATT RS which is a python list of the necdf file Global attributes attributes for NC themes which is a python list of
[38:36] the next CDF file dimensions and NC bars a python list of the nest CDF file variables search the read James NO2 AI at all
[38:51] location location code code um um process the following steps first it reads the file list and get the gems data set
[39:05] that are listed and calculate the mean median and standard deviation and display them on the screen and calculate the range of valid data
[39:19] and display the longitude and latitude and and the user should input on longitude and latitude that fall within
[39:31] the displayed range which is from C C and finally it identified points that are closest to a user input and output
[39:44] the value of the closest collocation a means of three by three and five by five pixel Square centers around the
[39:53] input finally the read gems and time series with errorlet code Grease the gems and aeronet files simultaneously
[40:08] simultaneously and find the genus pixel closest to the errorless site so that it finally plot the variable of
[40:16] interest based on the SDS variable and the data for that um um variable as a Time series
[40:27] so these fours are python codes that I will show you the simulations is is these NC files from
[40:45] here here to the bottoms or gems level 2 products and the final um final of that level one five file shows
[41:02] the error net data sets over against the university which will be used in Time series plot so as a first simulation
[41:21] if we open this file with Google collaboratory you can see the scripts are divided into three parts
[41:33] so first I'm going to run this first cell put yes here foreign I will mount my drive
[42:20] now we can see that this code is mounted at my Google Drive and finally we run this
[42:30] blockchain code so so there's nothing that would you like to proceed this file name to plot the data
[42:40] set so I will say yes then it shows the average of these data sets which is aerosol Optical depth file
[42:55] um and the variable here is the analytical depth of course and standard deviation of various Optical depth
[43:02] median value or the range of latitude or longitude in this file and then it it as it would you like to
[43:13] proceed would you like to create a map of this data please enter our y or n so I'm going to
[43:19] say yes here yeah so we create um um the map of final aerosol Optical depth and the
[43:34] order is 433 nanometer if you would like to change the wavelength you can directly change model number here
[43:50] from zero to two so so number zero is 380 354 nanometer and number one is of of course number one corresponds to the
[44:04] 443 nanometer and number two corresponds to the 500 nanometer and for the nitrogen dioxide file would you like to proceed so I'm going to say
[44:21] yes again it shows the average of this data standard deviation median and range of latitude and longitude in this file
[44:36] foreign foreign again so we created the blood of column amount of nitrogen dioxide and if you look at the Google Drive
[45:08] we can see that the generated plugs are automatically saved as on PNG file next I'm going to simulate
[45:35] the read James and list SDS code so there's the same procedure I run cell from the first
[45:55] to install the necessia and then Mount this code to my Google Drive insert this function um is on subroutine that used in the
[46:23] main python codes for the python you should um run the cell first so I'm gonna run the
[46:32] cell first and if I run the final cell now the python consters would you like to proceed this Aeros Optical depth file
[46:44] so I'm gonna put yes here so it prints all the global attributes Dimension information and variable information
[46:58] information of this file and for the nitrogen dioxide if I put yes here again same it shows the global attribute
[47:14] Dimension information and variable information um of the nitrogen dioxide file third I'm going to simulate this read
[47:32] triple me NO2 at all location on python code install the necessity F4 Mount this code to my Google Drive
[48:15] and finally if I run the main code it is uh me that would you like to proceed this file so I say yes
[48:31] then it shows that this is on gems this is James aerosol file and the average of the area of optical
[48:39] depths standard deviation of aerosotical dance median it also shows the latitude and longitude in this file so if I enter the latitude and longitude
[48:52] of Soul which is the capital city in South Korea foreign automatically calculates the nearest pixel of your entered location
[49:13] and also um um it calculates the average median standard deviation of three by three grade or five by five grid centered at
[49:26] your internal location for enough to file the procedure is the same so I'm going to skip at this point
[49:45] and finally I'm going to show you that read gems and time series with internet code um as previously we first started with
[50:03] installing the CDF for Library Mount this code to my Google Drive and if I run the code
[50:21] we can see the time series of Aeros Optical devs or variance University so here are the blue points is the arena
[50:30] data set uh in the orange point is the gen's data sets over in the University it is
[50:37] temporary and special especially collocating collocating so you can use these data sets over other internet sites if you change the
[50:48] RNA files and and the longitude latitude of this code so that's all I have for the python
[51:06] Jupiter notebook simulation um thank you for your attention and I'm gonna take any questions hello everyone uh we will now move on to
[51:30] the question and answer uh part of today's training so so uh beginning with question one uh regarding the various spatial
[51:40] resolutions and different latitudes are the final products resampled to a grid with unique grid size or not
[51:47] uh Dr go yes um can you hear me well yes yes yes yes um so no uh no James 112 products are
[52:01] not resembled re-sampled to agree with a unique screen size but in the future we are gonna provide the gems level 3 or
[52:08] gems level 4 products which will be um resampled to a unique grid size okay question two is I couldn't open your provided gems
[52:23] netcdf data on arcgis using the multi-dimensional tool netcdf to raster layer please let me know the possible
[52:31] solution solution yes so for this one uh in this training we have shown that how how we can open
[52:38] the gyms in scdf datasets with the panoply tool to browse the image or the variables or we have we have um we have
[52:47] shown the how we can read the gems level 2 data sets with python code so I think
[52:52] either way will help to analyze the gen's data sets instead of the um arcgis multi-dimensional tool okay moving to question three
[53:10] does the PCA method stand for principal component analysis yeah yes that's true PCA stands for the principal component analysis method yeah
[53:25] for question four since level 1C data is available on the offline how do you get a copy
[53:34] um currently um because of the large data sets we are only providing the gents level on the data sets based upon
[53:40] the request through offline so if I I have wrote down the um I I have written down the
[53:49] point of contact of the nir to get the gems level 1C data set so if you send an
[53:55] email to this point of contact address email address you can get the copy of the gems level 1C data sets through
[54:03] through the um Hearts Thrive yeah okay question five can gems be used to measure pollution events in Africa
[54:19] um no um James as shown before our genus measurement covers only the Asia Pacific regions but it's the geostationary
[54:30] um from Japan to India hourly so the longitude ranges is about 75 degrees east to the 145 degree East and the
[54:39] latitude range from about zero a degree North to the 60 degree North foreign six can we access gems products on the
[54:57] uh the GE or I see Google Earth engine platform in the near future um I don't know why it's so specifically
[55:11] the Google Earth engine but the current currently currently um we do not have um any plan for that to provide the gems
[55:21] data sets through the other platforms other than nir homepage yeah that's the current situation question seven hi that was very interesting I would
[55:39] love to be able to play with some of the Python examples you demonstrated how can we get access
[55:48] um for this one um I think pollen may give a better answer than me um um um we are going to provide this python code
[55:59] through NASA RC GitHub um so the code will be available through through open access um so yeah so it's going to be open access and
[56:14] will be available very soon through it on NASA GitHub account do you have any additional answer to add for this one
[56:31] I think after the training we we can perhaps add more information on this one sure um so for now uh let's move to question
[56:43] eight how can we download PM 2.5 data from nesc for a particular region over India I want to download the PM 2.5 data for
[56:58] the last 10 years how can I do that um um so the the NAC stands for the nir
[57:10] homepage or can I ask what the ni nesc stands for um perhaps if someone whoever asked the
[57:31] question wants to add the additional information and the in the question them be helpful but oh I I I have read the question
[57:52] again and don't download the PM 2.5 data for the last 10 years um um um just Genesis launched in 2020
[58:02] February so for the PM 2.5 we we um I know that there's a project that are creating
[58:10] um the TPM 2.5 data sets from gems but but but um you know the James has launched in
[58:17] 2020 so it's definitely not possible to provide the data set um for last 10 years for 10 years I
[58:26] would recommend to look on other data sets such as Modis or um Omi not not Omi um I I would
[58:36] recommend to take a look at the Modis data sets for this one um instead of gems because James has
[58:44] launched in 2020 I hope that answer to your question nine how can we convert the aod data to
[58:58] an Excel file we we are currently providing the um um python codes to read the gems level to
[59:16] data sets and if you save those variables into a text file then you will be definitely able to read
[59:28] those data sets through Excel file question 10 is the NO2 plot for tropospheric or for the total column
[59:42] now we are providing uh the plot itself was the total column but we are also providing the tropospheric
[59:49] um column amounts in the CDF of the NO2 products products yeah so if you just change the name of
[59:56] the variables in the code you can definitely plot the troposphere amount to for question 11 are the data freely
[1:00:10] available and Open Access in the sense we can use it for any purpose similar to the Copernicus program is there a
[1:00:18] specific license type that they come with or need to credit when publishing the data I have to check it with the nir people
[1:00:34] again but as I understand um currently the data is freely available and Open Access as you show as
[1:00:42] you've seen through the RC training slide through the nir homepage um I know the um but the data distribution system is not
[1:00:57] exactly identical to the co-parents program but um um the data's uh open currently open access I mean at
[1:01:07] least for the level 2 data sets and I need to check with the nir about the license type
[1:01:17] um um when publishing the data sets so I'll I'll get additional or answer to I mean iOS to the entire person to answer this
[1:01:28] question again um yeah so currently let's see the only answer that I can say yeah okay it looks like we have a couple more
[1:01:49] questions questions question 12 what is the expected resolution of the gems products in Southeast Asia yes uh that's a good question if you go
[1:02:00] to the slide six of the RC training presentation slide um there's an approximate resolution um um um
[1:02:11] um so for the southeast Asia um um it's gonna be about um five kilometer by um five kilometer
[1:02:23] approximately like it's almost close to the gyms center line of sight Center yeah and the resolution will be better
[1:02:36] for the southern part and will be a little bit a little bit just a little bit worse to the northern part yeah
[1:02:54] for question 13 do you have an estimation on when the user guide will be available on the nier
[1:03:01] website our current plan is to distribute the user guide um early next year um we are currently working on that to
[1:03:16] finalize finalize um um the the user manual guide yeah however the plan may be changed so this is an approximate
[1:03:30] um um will be anticipated to play again question 14. on the slide with the regional data collection it indicated that certain
[1:03:48] areas were only monitored during part of the Year why is that in during those periods when for example FW data isn't
[1:03:55] collected is the satellite monitoring a different area thank you so I think this question is asking um that erasing a question that why the
[1:04:24] skin profile of James change each hour and and seasonally um and already right um yes I think I think the end the question
[1:04:41] is asking those points so so James actually James measure the back scattered solar radiance for that reason we need we need an
[1:04:52] enough sunlight um let's get our sunlight to get the enough signal for the data sets just I mean the level
[1:04:59] won't be data set so for that reason um in you know the you know the solar is
[1:05:05] in eastern angle change over a different area with different season for that reason antigens can profile change
[1:05:14] um um oh and change seasonally yes so I think this that's gonna be the um proper answer for this question
[1:05:32] 15 15 is what is the best way to estimate or measure the uncertainties of the data set for PM 2.5 and other data is it
[1:05:42] possible to know the interferences with our data um so the answer for this question is I do not understand what what do you mean
[1:06:03] about the interference with our data um before the uncertainty of the data sets for PM 2.5 or other data sets
[1:06:22] the products such as like ozone or two they are they are providing the uncertainty variables in their CDs of
[1:06:32] files so I hope that helps to analyze or or your research [Music] [Music] um currently on the PM 2.5 is not the
[1:06:49] official products of the gems so um um I do not have a specific answer to to calculate to measure the uncertainty
[1:07:01] of the PM 2.5 but in general um um in general um you know the uncertainty is the
[1:07:10] standard deviation of um the specific variable so generally I would recommend to estimate the uncertainty based on based on those
[1:07:23] um um variables other than that um um other than that I think this is gonna be the answer that I can give you yeah
[1:07:38] for question 16 since there is a severe problem that such Advanced research studies like investigating air quality in the
[1:07:49] developing World such as Africa are minimal or non-existent for example how can such a study be conducted in my
[1:07:55] country country I'm available to be part of the study when I get support and partnership um I think we might need to some time to
[1:08:13] think that one over so maybe we can move on for now to question 17. okay um 17 wasn't 17.
[1:08:28] do you or will you have the tropospheric ozone monitor in the gym's website um currently we are providing the
[1:08:42] tropospheric ozone in the ozone profile um the CDF file so you can look up those images if you open or read the ozone
[1:08:52] profile profile um the CDF file data set yeah foreign 18 are there any references for Jim's level 1B Radiance or irradiance
[1:09:19] if you if if you uh is this reference means that the user guide for the gems level
[1:09:26] on the data sets um um for the gems level 1B user if you if you mean that the user guide of gems level
[1:09:37] 1B um we are currently working on that Resurgence level 2 user guide and it's going to be available probably early
[1:09:44] next year uh uh yeah currently on the website we do not have a specific document for this one
[1:09:52] yeah question 19. is there any option to select longitude and latitude range for downloading the data or do we have to
[1:10:08] download it for the whole globe um again gents data says it gems do not measure the globe global data sets it
[1:10:21] only measure the asia-pacific region hourly because it's the geostationary authority satellites and and for the image if you want to look if you
[1:10:33] want to browse the image over the through the nir website you can select the longitude and latitude range but
[1:10:41] other than that if you want to download the data sets uh there's there's no option for that you can you can just get
[1:10:49] the whole data set hourly data sets um but but their scan profile but which scan profile change hourly and
[1:10:58] seasonally seasonally and you can check those scan profile um through the title of the necessity of file yeah
[1:11:33] so question 20 does RH humidity affect or interfere with the measured values there are other interferences so we can
[1:11:41] consider them in our study foreign if maybe like products such as Aeros Optical deaths um or other choice guesses maybe
[1:11:58] interfered by um who made it to definitely but currently gems do not have a product related to the humidity so
[1:12:09] um um versions We do not have a product for that but for the NASA product I would
[1:12:13] recommend to look up other humidity data sets up from like Maya datasets or other other instruments that providing the
[1:12:24] relative humidity data sets so that you can can analyze those data sets to your study yeah yeah be sure to um gents do not have a
[1:12:39] humidity related products lesson 21 any thoughts on adding a Time Dimension to or Global attribute to the
[1:13:07] netcdf files um for for the time Dimension if you know we do not have any plan to add in a
[1:13:31] specific time variable but if you ask this question because of the validation validation um um emergence is providing the hourly data
[1:13:43] sets so for the test cases like such as ozone I'm pretty sure that you do not have any problem on
[1:13:53] validation validation because ozone does not change dramatically in an hour also for the aerosol products I'm pretty
[1:14:05] sure that you do not have a specific problem on validation because it provides dense measure hourly this provides hourly data sets so if you
[1:14:20] make a validation and if you have to get a temporal co-location um you just set set the temporal
[1:14:31] um um collocation criteria like plus minus 30 minutes so um because it's an hourly measurement dataset so insured we do not have a plan
[1:14:44] to add a time Dimension and I guess it is it's not gonna affect your valuation result question 22 in the presentation you
[1:15:08] mentioned different references to validate the gems level 2 product where the same references used to validate gems level 1 products
[1:15:16] no no change the validation of gems level 1 product is more complicated than Legends level 2 products and to give you more
[1:15:27] information we are currently joining the um um several different um um International working groups such as deals or
[1:15:39] um um other other calibration validation group to to to make make a better gentle level 1B data sets
[1:16:15] um the the answer is not b is not to make make no gym so everyone be validation easier is to improve the gems
[1:16:23] level and be middle States I mean in an accurate way a question 23 can we plot the data on Unix AIX based
[1:16:57] softwares EG grads I'm not I'm not an expert on grass but I have tested my python code through the
[1:17:11] Linux system so I guess it will definitely work if you can read word plot the CDF file
[1:17:24] and I hope the answer to your question yeah question 24 is a question on data latency how frequently will the gems
[1:17:36] product be updated and available for users to access after gems captures the image currently in the gems products are being
[1:17:52] updated every day through through the nir websites so I guess the answer will be daily okay available daily every day
[1:18:22] lesson 25 does naer or another organization plan to provide an in-depth training on the gems data either remotely or on-site in
[1:18:33] the future no we do not have an official plan for that okay I don't see any more questions so
[1:18:59] thank you everyone for coming this concludes our our set training and just a reminder to everyone that
[1:19:11] there will not be a homework assignment for this training
