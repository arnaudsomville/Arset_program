# Calculating Spectral Indices for Land and Aquatic Applications Using QGIS

`https://www.youtube.com/watch?v=B3_IGZLjCo8` · id 198 · 1:23:34 · module 3 — 080-spectral-indices-for-land-and-aquatic-applications

[00:01] hello everyone and thank you for attending the calculating spectral indices in C for land and Aquatic applications in
[00:08] qgis we are NASA rset my name is Justin Fain um and let's go ahead and get started first a little bit about
[00:20] ret ret provides accessible relevant and cost-free training on remote sensing satellites sensors methods and tools trainings include a variety of
[00:30] applications of satellite data and are tailored to the audiences with a variety of experience levels the Thematic areas
[00:37] that we operate in are agriculture climate and resilience disasters ecological conservation which is US Health and air quality and Water
[00:48] Resources our set trainings are either online such as this one or in person they're live and instructor-led or
[00:56] asynchronous and self-pac as always they are are costree they are bilingual uh or multilingual as this one is done in both
[01:06] English and Spanish we only use open source software and data and we are happy to accommodate differ levels of
[01:16] expertise to learn more you can visit our website now we can begin our exploration of spectral indices we'll start with an
[01:27] overview of spectral indices before moving on to a practical exercise where you will see the process of calculating
[01:33] spectral indices in qgis spectral indices give us relatively simple calculation to measure properties in a remote sensing imagery they're
[01:45] typically composed of just a few bands and aim to isolate differences in reflection and absorption across the
[01:51] electromagnetic electromagnetic spectrum these signature differences can tell us things about our scene such as the presence of chlorophyll and water or
[02:00] the health of vegetation by the end of this training you'll be able to describe data sources data processing and applications for
[02:11] indices related to land and Aquatic environments you'll be able to calculate a number of these indices in qgis and
[02:19] you'll be able to identify which indices are appropriate for land monitoring versus those that are appropriate for
[02:24] aquatic monitoring the prerequisite training for this course is the ret fundamentals of remote sensing that training will give
[02:34] you the necessary context to understand how remote sensing works and how we can isolate spectral signatures related to
[02:40] the properties of our scene in which we're interested this is a training in one part homework opens February 27th and is
[02:52] due March 13th it'll be posted on the training website a certificate of completion will be awarded to those who
[02:59] attend all of the sessions this is one session so that should be easy if you're here already and complete the homework
[03:05] assignments before the given due date now on to spectral indices in qgis again if you're hearing this in
[03:16] English my name is Justin Fain and I'm an rset trainer in ecological conservation located at Nasa as Research
[03:22] Center in California USA if you're hearing this in Spanish that's going to be done by my colleague a Cruz um who is
[03:31] also a trainer with ret in ecological conservation during this webinar please feel free to enter any questions into
[03:41] the questions box at the end we'll go through and do our best to answer each of your questions if we're unable to get
[03:47] to your questions during the live Q&A we'll put all answers in the Q&A document and upload them to the training
[03:53] website about a week after the training so let's review some remote sensing Concepts so to do a quick review of the
[04:07] information from the fundamentals of remote sensing which are relevant to this course every surface on Earth and
[04:14] in general reflects and absorbs energy in different ways this fact is easily observed by the fact that healthy
[04:20] vegetation appears green to our eyes however each surface also reflects and absorbs energy from the parts of the
[04:28] electromagnetic spectrum beyond what our eyes can detect these differences in how surfaces interact across the Spectrum are what we call
[04:37] Spectral Spectral signatures understanding how changes in the spectral signature of the surface relate to the properties of the thing
[04:44] being observed allows us to create spectral indices which assign a numeric value to the property of Interest the electromagnetic spectrum is
[04:56] made up of all energy from the very long wavelengths of radio and microwave to the very short wavelengths of X-ray and
[05:03] gamma rays visible light which is perceptible to humans makes up only a very narrow portion of the
[05:10] electromagnetic electromagnetic spectrum remote sensing instruments such as those on satellites are often engineered to record light in a much
[05:19] broader range of wavelengths than the visible part of the spectrum this means that we can use remote sensing imagery
[05:26] to see things that otherwise wouldn't be directly observable in most cases the source of our light for remote sensing is the sun
[05:37] solar radiation passes through the atmosphere hits a Target surface such as Forest water buildup areas and those
[05:44] objects reflect and absorb energy differently in different wavelengths so this reflected solar radiation is measured by the satellite in various
[05:53] wavelengths each slice of the reflected radiation is recorded as a single image called a band this is a simplified example of what
[06:05] happens with electromatic magnetic energy for green vegetation the figure on the left shows incoming radiation in the visible blue
[06:15] green and red and near infrared wavelengths blue and red wavelengths are absorbed by Green vegetation and green
[06:23] and near infrared wavelengths are reflected this is primarily because of the chlorophyll and the leaves we see vegetation as green because we
[06:32] only see the reflected energy in the visible wavelengths we can see green but we can't see infrared every surface on Earth reflects
[06:43] and absorbs energy in a different manner for optical imagery the sensors are capturing similar data that we can see
[06:49] with our eyes in the visible portion of the electromagnetic spectrum and some portions we can't see in the infrared so
[06:56] each object on the ground produces a unique spectral signature of the amount of reflection or absorption at each wavelength that's of
[07:05] course called the spectral signature so we can obtain the reflectance values of different land cover types across the visible and
[07:13] infrared portions of the electromagnetic spectrum to create these signature figures like the one you see here in the
[07:21] green you can see a typical vegetation signature that has a small reflectance peak in the green portion of the
[07:26] spectrum and a very high peak in the near infrared portion of the spectrum soil tends to have a steadily increasing
[07:33] ref reflectance value in the visible and near infrared and water tends to absorb most energy therefore the reflectance is
[07:41] low throughout with a small peak in the blue in this figure you can also see the bands of a typical lanat image in Gray
[07:50] so with those bands we receive one value of reflected energy based on the object being observed so that brings us to spectral
[08:00] resolution which is the ability of a sensor to define the wavelength intervals or ranges when we use the word
[08:07] band we're referencing a wavelength range and how the satellite is making the distinctions between different ranges so each band represents a portion
[08:15] of the electromagnetic spectrum and if you have the reflection of an object at different wavelengths you can use band
[08:22] math or simple calculations to identify differences when we have multi spectr imagery we likely have blue green red
[08:33] near infrared and mid infrared bands so with satellite image we can get one value for each wavelength range for each
[08:41] pixel we can then stack the layers to view the imagery we can also use the values for different layers at the same
[08:48] location on Earth to identify things like vegetation Health here you can see the comparison of the bands of lanat 78 and n and
[08:59] Sentinel 2 so for Lance at 89 for example Those sensors have 11 bands or wavelength ranges where data is
[09:07] collected the band number and the corresponding portion of the electromagnetic spectrum are shown here band two is the blue band Three is the
[09:16] green band four is the red and so on the gray parts of this figure are called the atmospheric Windows where the
[09:23] satellite can actually collect reflected energy from the ground different wavelengths penetrate differently in the water column and this
[09:32] will influence the amount of information that sensors can obtain in aquatic environments for example wavelengths in the blue region are usually those that
[09:41] penetrate deeper this is why we see the ocean as blue or dark blue whereas those longer wavelengths like the Reds and N
[09:48] infrared penetrate less the signal received by the sensor either an orbit or Airborne is also affected greatly by
[09:56] the comp composition of the atmosphere above the target areas as we can see in the figure on the
[10:06] right when we talk about ocean collar in this webinar we're referring to the remote sensing reflectance remote
[10:12] sensing reflectance is a function of the inherent Optical properties of the material and the water so for example
[10:20] absorption by phytoplankton non- alcal particles colored dissolved organic matter and water and scattering in the backward Direction by partic and other
[10:30] material it also contains a correction factor to relate subsurface AR Radiance reflectance to Radiance reflectance as denoted by C in this equation remote
[10:41] sensing reflectance is water leaving Radiance corrected for the bidirectional effects of the air to C interface and
[10:49] subsurface subsurface light field and normalized by downwelling solar Radiance just above the sea surface remote sensing reflectance is the fundamental
[10:59] remote sensing quantity from which most ocean color products are derived for example chlorophyll particulate and organic carbon light absorption by
[11:09] carbon dissolved organic matter and suspended sediments Etc now a bit more in depth about the spectral indices we'll be going
[11:23] over here is an overview laying out the spectral indices we'll be covering in this webinar don't don't worry too much
[11:29] about this table as we'll discuss each in a little more detail first let's look at the normalized difference vegetation index
[11:39] or or ndvi ndvi is the relationship between the red and near infrared wavelengths the actual formula is specified here the
[11:50] values of ndvi for an individual pixel range from negative 1 to positive 1 any pixel between negative 1 and zero means
[11:59] no vegetation and pixels closer to one indicates the highest possible density of green leaves the picture on the right
[12:06] shows that healthy green vegetation absorbs most of the visible light only about 8% is reflected and reflects a
[12:14] large portion of the near infrared light about about 50% unhealthy sparse or sessing vegetation reflects more visible light
[12:24] 30% is reflected and less Nar infrared light only about 4 % you can see the difference in the
[12:32] resulting ndvi values below the image the green vegetation has a value closer to one while the brown vegetation has a
[12:40] value closer to zero so to give you a sense of how this calculation looks on the ground imagine
[12:47] that each of these gray squares is a pixel and we're interested in doing an ndvi calculation for one pixel the red
[12:55] on the bottom right the near infrared Val Val for this pixel is 0.144 and the red value for this pixel
[13:04] is 0.344 given those values we take the near infrared value minus the red value and then divide that by the near
[13:16] infrared Value Plus the red value and we get an ndvi value of 0.538 indicating healthy vegetation then you could apply the same
[13:30] calculation across the entire image using the near infrared and red values for each individual pixel and generate a
[13:37] new ndvi layer so this shows you a bit more visually how those der infrared and red values are used by a on a pixel by
[13:46] pixel basis to examine ndvi over a large region by applying that same calculation across each pixel plant techology is the annual
[14:00] Dynamic vegetation greenness and could be tracked using vegetation indices like indvi in the graph on the top you can
[14:07] see the pro the progression of vegetation Dynamics as seasons change in North America early in the year which is
[14:14] winter there are little to no leaves on the trees resulting in low ndvi values when spring arrives the vegetation
[14:21] greens up and indvi increases until its peak in the summer then as vegetation sinesses and loses their leaves the
[14:30] indvi declines the image below shows the difference in greenness in the winter versus the summer in North
[14:39] America now to look at another vegetation index the enhanced vegetation index or evi so there are other indices such as
[14:49] the enhanced vegetation index or evi that could be useful evi is another measure of vegetation Health it's particular useful
[14:59] in regions with high biomass because the ndvi can oversaturate or hit a maximum value in these regions whereas evi has a
[15:07] higher threshold and can identify more subtle differences in these regions for example the Amazon there's also the soil adjusted
[15:19] vegetation index or Savvy the soil adjusted vegetation index minimizes the influence of bare or nearly bare ground when trying to assess
[15:30] vegetation this one could be useful in semiarid or arid regions like the southwestern United States where there's
[15:37] a greater be ground or soil cover in relation to the vegetation here the Nar infrared and red
[15:44] bands are still used but a correction factor is applied moving away from direct monitoring of vegetation we have the
[15:55] normalized burn Ratio or NBR we can use the reflectance properties from the satellite image to identify healthy vegetation versus burned areas
[16:06] as we mentioned in healthy vegetation there's reflectance in the green and near infrared portions of the electromagnetic spectrum so that's why
[16:14] we see healthy vegetation is green when we compare the healthy vegetation spectral signature to those of burned areas we notice some Stark
[16:22] differences though you can see this pretty clearly for the spectral signature curves of low moderate and High burn severity where healthy
[16:31] vegetation has this large peak in the near infrared bare soil and burned areas have much lower peaks in the near
[16:37] infrared and in the case of high severity burned areas there's much less response in the near infrared you can
[16:44] see that healthy vegetation has low reflectance in the short wave infrared but burned areas have high reflectance
[16:50] of those wavelengths with these spectral characteristics we can identify burned areas and distinguish it from healthy vegetation
[17:00] vegetation to take advantage of this difference in spectral response between healthy vegetation and burned area we use the
[17:05] normalized burned ratio or NBR to map postfire conditions NBR uses remote sensing data the near infrared and
[17:13] shortwave infrared to map burned areas and ultimately assess burn severity you can see how this calculation is
[17:20] completed here on the side similar to ndvi NBR is a unitless value from ne1 to 1 a high NBR value value one that is
[17:29] closer to one indicates healthy vegetation while a low value that's closer to negative one indicates recently burned areas and bare ground
[17:39] NBR is a commonly used metric for identifying areas where vegetation has recently burned due to fire here you can
[17:47] see an example of NBR in action the images show pre during and postfire inbr from the Menino complex that burned in
[17:55] California in 2018 now moving to the Aquatic side of things we'll take a look at the normalized
[18:05] difference chlorophyll index or ndci so chlorophyll is an indicator of phytoplankton biomass as it's usually the main pigment pigment of these
[18:17] communities it can also be used indirectly to estimate nutrients in the water column as typically Waters with a
[18:24] high chlorophyll concentration are utopic or high in nutrients a especially nitrates and phosphates the overarching objective of
[18:36] the Mishra and Mishra paper was to improve the ACT accuracy of chlorophyll a retrieval in turbid waters using
[18:43] simple easy to implement intuitive such as ndvi for vegetation and a universal model the concept of ndci was developed
[18:54] using simulated data however field data sets acquired from the same GE gra regions were used to further validate
[19:01] the ndci and chlorophile a relationships ndci uses the remote sensing at reflectance at 665 nanm and 78 nanometers emulating the
[19:16] medium resolution imaging spectrometer or Maris channels similar to other tur turbid productive chlorophyll a algorithms this index uses the information from the
[19:29] reflectance peak centered at 700 nanm which is maximally sensitive to the variations in chlorophyll a concentration and water similarly a wide
[19:39] spectral absorption Peak between 665 NM and 675 NM is generally assigned to the absorption by chlorophyll a
[19:49] pigments the author selected the two spectral features centered at 665 nanm and 78 nanm to develop ndci and to avoid
[19:59] the confounding influence of uh carbon dissolved organic matter and total suspended sediments on the water reflectant Spectra at shorter
[20:08] wavelengths also as both bands are closely located they assume that the carbon dissolved organic matter and total suspended sediment absorption is
[20:16] similar in magnitude based on the results from biooptical modeling in this study the bin range of carbon disolved organic
[20:24] matter and total suspended sediment absorption at 665 and 8 78 nanom in the study regions are approximately equal and the difference
[20:34] between them can be assumed as negligible following the simplistic concept of ndvi Applied in land vegetation monitoring ndci was developed
[20:44] by taking the spectral band difference of those 708 and 665 nanometer bands and normalizing the sum of their reflectant
[20:53] to eliminate any uncertainties in the estimation of remote sensing reflectant Caesar seasonal solar asthma differences and Atmospheric contributions of those
[21:07] wavelengths to take a look at a case study here you could see high ndci values are can be indicative of regions
[21:16] impacted by nutrient enrichment in general your ndci will give an idea of the concentration of phytoplank in communities in the water
[21:24] column but in relatively clear and shallow Waters it may be influenced by the presence of benic vegetation such as
[21:31] seagrass or algae now to look at the normalized difference aquatic vegetation index the normalized difference aquatic vegetation index or inavi was developed
[21:47] by via at all in this case it's aimed at using higher spatial resolution data sets such as those of lanat and it
[21:54] focused on the blue and N infrared bands the idea behind it is that by using the blue band which penetrates deeper into
[22:01] the water column and the near infrared which has very little penetration in water The benthic Aquatic vegetation can
[22:09] be easily distinguished from other benthic components such as sand mud Etc here's some data by a team from the
[22:19] NASA develop program where they explore different indices to follow potential correlations with particular environmental factors in this case
[22:28] there's a unique band combination that allows SE grasses to be analyzed over time photosynthetic organisms reflect a
[22:35] large amount of near infrared light so the N band and the blue band collectively allow aquatic vegetation to
[22:42] be assessed moving on to the floating alal Index this is the equation for the floating alga index note that it uses
[22:55] reflectance values in the red near infrared and shortwave infrared regions of the spectrum and a similar to other
[23:03] indices or methods used for chlorophyll here's an example application of Fai to desect to detect sargassum with modus aquad dat we can
[23:18] see clearly how the sargassum mats are shown in the image on the left and how even with this multispectral data set
[23:25] still we can see the big difference in the remote sensing reflectance especially in the near infrared region
[23:30] and the graph on the right here's data provided by our colleagues at the University of Puerto Rico biooptical oceanography lab where
[23:43] they applied the Fai to detect sargas mats in Southwest Puerto Rico at much higher spatial resolution using Sentinel
[23:51] 2 Data a land mask was previously applied the zoomed image on the right shows a chronic accumulation of orgasm
[23:59] close to or at the shoreline the University of Puerto Rico colleagues Dr Roy Armstrong and Dr William Hernandez
[24:06] are using the Fai in combination with time-elapsed photography to monitor the accumulation of sargassum floating mats each year and observe how these impact
[24:17] the marine life in the LA paguera National Reserve take a moment to look at the diversity of colors across the scene the
[24:27] inherent Optical properties of the material and the water give the water its characteristic color inversely it's possible to use the color of the water
[24:36] we see from the image and infer the inherent Optical properties of the water to get it questions like what is the
[24:43] chlorophyll concentration what's the clarity of the water how much sediments are suspended in the water these questions are the type that we can
[24:52] relate to some of these spectral indices now I'd like for you to look at the plot on the right the remote sensing
[25:01] reflectant Spectre you see there correspond to the examples on the left these are schematic illustrations of remote sensing reflectant Spectra not
[25:09] the actual Spectra note the prism across the top figure it shows you the colors of visible range and how those match up
[25:16] with the wavelengths along the x-axis the near infrared is also noted the Spector are intended to demonstrate that
[25:24] materials in the water have different signature remote sensing reflectance Spectra look at the sediment Spectrum in Orange on the plot it has a high
[25:33] magnitude across a broad range of the spectrum it's also somewhat reflective in the N infrared in the image on the left our
[25:41] eyes see a brightly reflecting Target now look at the carbon disolved organic material Spectrum has very low
[25:49] reflectance across the range and when you look at one of those Lakes it appears appears Black Water absorbs strongly in the near
[25:57] infrared so it has very low values there and while still quite dark it does reflect more strongly in the
[26:05] blue now look at chlorophyll in green it has a peak in the green region of the visible spectrum between 500 and 600 NM
[26:13] and then flattens towards the near infrared note the small Peak at around 680 Nan this is due to phytoplankton
[26:23] fluoresence these Spectra are hypothetical illustrations of what a pure pixel would look like for each of the examples at the water surface now
[26:31] imagine mixing these Spectra so that the Peaks and troughs you see here are Blended that's what a natural sample
[26:37] would look like and that's what's used by remote sensing algorithms to estimate concentrations of the different types of
[26:43] material in the water the Spectra that you're seeing here assume no effect of the atmosphere in reality though the
[26:51] light that a sensor measur has traveled a long and complicated path before arriving at the sensor sunlight entered
[26:57] the Earth's atmosphere spere traveled in a mostly downward path towards the surface the light hit the surface
[27:03] penetrated the surface all while being absorbed and reflected across the Spectrum in different ways to give the
[27:09] light its spectral shape once it's reemitted from the surface that reemitted or reflected light then traveled upwards through the atmosphere
[27:17] back out the top of the atmosphere where it's finally measured by the satellite sensor in addition to suspended
[27:25] sediments and carbon dissolved organic material material what are some of the other quality indicators satellites can observe or be
[27:32] used to deriv some of those include C surface temperature chlorophyll a solinity the diffuse attenuation of light and UT euphotic depth or the depth
[27:44] where light attenuates to about 1% of the amount found at the surface unlike land surfaces water itself absorbs strongly in the red near
[27:55] infrared and shortwave infrared regions of the Spectrum even in highly turbid environments water is opaque or black in
[28:03] the short wave infrared region this can be used to our advantage when analyzing coastal regions as these wavelengths can
[28:11] be used for atmospheric Corrections other water constituents like collared dissolved organic material absorb strongly in the blue region with
[28:21] practically no absorption in the red and other longer wavelengths because chlorophyll and other photosynthetic pigments absorb strongly in the blue and
[28:30] red regions and have a higher reflectance in the N infrared pixels containing floating algae can be differenced from water
[28:38] pixels this is the essence of using some of the spectral indices like the floating Alo index to monitor the
[28:45] presence or absence of floating algae such as sasum or Kelps in coastal areas but since most of the indices that we
[28:52] mentioned today are dedicated to photosynthetic targets first we'll touch briefly on one of the indices developed to assess turbidity in Inland and
[29:02] Coastal water bodies as kelp blades occur at or near the surface of water indices usually develop for land purposes such as the
[29:12] normalized difference vegetation index or ndvi can be applied to the study of Kelps to estimate the health of these
[29:19] magnificent magnificent organisms the graph on the right shows data from a recent paper where you could see a marked difference in reflectance
[29:26] of an unsubmerged kelp blade particularly in the near infrared compared to one just under the surface or from a Spectra collected in an area
[29:35] with sparse cover notice that even in the first centimeters of water there is practically no signal in the near
[29:41] infrared in the sparse or submerged reflectance curve another index such as the floating alal index which we've
[29:48] shown before could also be useful to analyze the conditions of these Kelps at the water surface the floating algo
[29:55] index uses the red Edge region of the spectrum and the short shortwave infrared region and was specifically
[30:02] developed for modus data now to move on to the normalized difference turbidity index so this was originally developed
[30:12] by lco at all and 2007 for water quality assessment in ponds and small Inland water bodies it used the spot five level
[30:21] two images at a 10 m spatial resolution and has been applied with some success to other water B bodies using other
[30:29] sensors such as the lanat 8 oi and the Sentinel 2 MSI the figure on the right is from one
[30:38] of the most recent NASA aims develop program projects which aim to study the impacts of water quality on the
[30:45] distribution of Eel Grass in the South slow National estaran research Reserve in in Oregon here it was assumed that most of
[30:54] the turbidity in the SLO was caused by sedimentation and organic de breze so in summary the spectral index
[31:04] you choose will depend on the nature of the phenomenon you wish to observe some spectr indices are better than others
[31:11] when dealing with particular conditions such as the influence of bare soils or turbid turbid Waters spectral indices provide
[31:19] quantifiable metrics that are useful in tracking the ways in which certain phenomena are distributed across space and time
[31:29] and now we'll move to our demonstration where we'll actually get into qgis and look at a practical way to calculate
[31:36] some of these indices we've spent so long discussing first begin by opening qgis now click on the icon in the upper left
[32:09] corner to open a new blank project you may notice that this right hand window has disappeared if that's
[32:18] the case you can go into processing and activate your toolbox here or hit the gear icon now we need to find our data I've stored
[32:32] mine on the desktop for ease of demonstration but usually this would be a folder set up in whatever way you
[32:38] prefer to keep your projects organized to load the data I simply drag and drop the harmonized landat Sentinel
[32:51] data that I'm interested in to the map pane in the center here I'm loading the hls data which
[33:05] covers a portion of the Menino fire complex in California in 2018 this scene includes Clear Lake which gives us a great opportunity to
[33:15] look at vegetation Fire and Water targets all in one image since we've already discussed the calculations behind some common indices in the
[33:23] presentation portion of this training we'll only focus on NV I NBR and ndti in this this demonstration that covers the domains of
[33:33] vegetation fire and water as you'll see we can achieve calculating all of these spectral indices using only the qgis raster
[33:43] calculator tool if you were interested in a different index such as one of the others previously discussed you would
[33:49] simply replace the equations that I'll be showing here with the equation for the index you wish to
[33:55] run now that we have our data loaded I'm going to do a bit of cleanup to make
[33:59] things easier to read going forward first I'm going to select all of the hls bands in my layers
[34:13] menu then I'm going to group them and now I will make that group mutually mutually exclusive so that we're only seeing one
[34:26] band at a time now I can collapse all of these drop down menus finally I'm going to expand my
[34:36] browser window just so that I can see the band designations at the end of the file names and with everything now looking
[34:46] nice and tidy let's calculate some spectral indices now locate the search bar in the processing tool boox here here you can
[34:58] type in raster calculator there should be an option for raster calculator listed under raster analysis click on the raster calculator
[35:13] tool to open the window we'll start with calculating ndvi which you may recall uses the red and
[35:24] near for red bands on hls data that corres responds to bands four and8 respectively click the ellipses to the
[35:34] right of the input parameters field and then select bands four and8 Once those two bands are selected
[35:52] click okay now back on the main rter calculator tool window click the purple Epsilon to the right of the next line
[36:02] it's the symbol that looks like a backwards three here we can input our spectral index equation remember the ndvi is
[36:14] calculated as n infrared minus red all over n infrared plus red for click okay to bring us back to the main
[36:59] raster calculator window all of the other options here are optional but if you'd like to save the
[37:11] results to your computer for later use you can set a file name and destination using the ellipses to the right of the
[37:18] calculated input field click run to execute the ndvi calculation our result is automatically added to the map and we can see some interesting
[37:39] features I'm going to apply a color scale to make things a bit clearer as you can see the areas of rectangular
[38:09] Farmland have high nvi values this is what we would expect of green vegetation the water body Clear Lake in the lower
[38:18] left is showing low ndvi values which makes sense as water is a strong absorber of both the red and near
[38:24] infrared infrared wavelengths most strikingly we can see that there is a clear lack of vegetation to the north of the lake where the fire
[38:32] is already burned however a good deal of the fire damage is obscured by smoke which is a
[38:39] weakness of ndvi for scenes where fire is actively burning smoke tends to have low ndvi values because it's such a
[38:47] bright Target that the denominator of the ndvi equation is dominant also note that along the margins of this Lake there's a slightly
[38:55] higher ndvi value this is most most likely due to surface or near surface aquatic aquatic vegetation now we can move on to the
[39:04] calculation of the normalized burn ratio remember from the presentation that the normalized burn ratio uses the near infrared and shortwave infrared
[39:19] bands otherwise the NBR calculation is identical to the ndvi calculation open the raster calculator tool again now select band 8 and band 12 as your
[39:35] input layers and click okay input the equation paying attention to your your parentheses this is short wave infrared
[40:05] minus near infrared all over shortwave infrared Plus near infrared and click okay you can see the distinct dark of the
[40:59] burn scar north of the lake calculating NBR values before and after a fire you can look at the change
[41:07] over time and create a secondary product called the difference normalized burn index or dnbr which helps to measure
[41:14] fire burn severity over an area and now we'll conclude by taking a look at NDT the normalized difference
[41:22] turbidity index as with previous two indices this is a SYM combination of two bands in this case we're looking for the
[41:31] red and green bands which are bands four and band three respectively again in the raster calculator select bands three and band
[41:47] four and click okay input your equation into the prompt as usual and run notice that even though NTI is an
[42:50] index meant for aquatic environments we've just calculated ndti across a scene which is mostly land this highlights the importance of
[42:59] understanding what the index is meant to represent before blindly applying a calculation and attempting to interpret the
[43:06] the results here we can see subtle variations in turbidity across the lake with a few sites of the margin having
[43:12] significantly higher turbidity especially along the southern Shoreline with that we hope you have a better understanding of how to calculate
[43:25] spectral indices in qgis s using the raster calculator tool remember that these three indices are only meant to serve as practical
[43:33] examples and simply by modifying the bands used as inputs and the equation being evaluated you're capable of
[43:40] calculating a wide variety of spectral indices that are relevant to your area of of interest on behalf of myself and the
[43:46] whole rset team I'd like to thank you for your attention and patience during this this demonstration so today we learned about
[43:53] the benefits of using spectral indices to study vegetation and aquatic targets we talked about some of the most used
[44:00] spectral indices for land and Aquatic targets we demonstrated how to use qgis to do simple calculations spectral
[44:08] indices for land and Aquatic applications there is one homework assignment which is open today you can access that from the training web page
[44:22] please submit your answers via Google forms forms the homework is due by March 13 2025 to obtain a certificate of
[44:36] completion you have to attend this live webinar attendance is recorded automatically you need to complete the homework assignment by the deadline and
[44:46] then you'll receive a certificate via email approximately two months after the completion of this course here is some of our contact
[44:57] information as well as links to our sister programs develop and surve on behalf of myself and the rset
[45:04] team I want to thank you for your attention today have a great day okay so question one uh does the
[45:20] version of qgis we have matter for this um not really so I did this train in 3.
[45:30] 34.14 um although uh just after after um uh writing this up I saw that there was a new update so now there's 3.4 out but
[45:42] it should work for any qgis versions uh the one that I have the new one and any
[45:47] of them that have the raster calculator tool so um question two there are four con in the evi formula how are these
[45:59] calculated would there be any cases where these would change so evi often used in highly vegetated areas and it
[46:06] was developed to correct for atmospheric conditions soil effects and some canopy background background noise uh in its development it underwent
[46:15] extensive calibration and the constraints remain the same in general in the formula the constant L is used to
[46:22] correct for canopy background and the C1 and T C2 constants are atmosphere Corrections G is to allow for better
[46:30] discrimination between different vegetation types so question three for dense vegetation cover evi is often preferred over indvi due to atmospheric
[46:45] Corrections are there cases where indvi would still be preferable in highly vegetated vegetated areas so ndvi is a subur calculation uh
[46:58] that's appropriate for moderate vegetation cover evi also requires that you have a separate blue spectral band uh which isn't always the case it's more
[47:09] common especially on older instruments to not include the blue but to have red and near infrared question four is ndci useful in
[47:22] Inland Waters such as ponds or lakes for measuring relative nutrient loads the ndci was originally developed for
[47:30] Coastal and estaran herid regions you can apply it to other environments such as inim Waters to get
[47:38] an idea of the concentration of chlorophyll but it doesn't give you nutrient nutrient estimations uh also it was originally
[47:44] developed using Maris imagery which was about a 300 met meter pixel size um over land and about 1 kilometer over the
[47:54] ocean so the spatial resolution has to be taken into account especially if the Inland Pond's relatively small is uh you
[48:02] know smaller than that 300 met pixel size so when there's land or aquatic phenomenon uh we would like to develop
[48:14] an index to measure how do we select the right wave links to calculate yeah so this uh depends on your specific use
[48:23] case and the sensors that you have available to you uh the resource that I've linked here uh shared by another
[48:30] participant looks like a really great resource to uh to look at all of the available indices uh or at least most of
[48:39] them and the applications of those indices so that would be a great place to start so question
[48:51] six uh when conducting large scale spatial analysis we often notice significant noise in lat inventry while sen Sentinel data appears to have less
[49:00] noise what are the primary causes of this noise and what techniques can be used to minimize it particularly when
[49:06] working with lanat or Sentinel imagery so for this we're using the harmonized lanat Sentinel 2 data set um so it's
[49:14] it's a mix of lat and Sentinel properties but each sensor has specific properties unique to that sensor and
[49:22] platform um without being exactly sure what kind of noise you're referring to in that question um there are some known
[49:30] issues such as on lanat 7 there was the scan line corrector failure which causes data gaps at the edges of the the
[49:39] orbital orbital floth um also Sentinel 2 just has a higher space spatial resolution the landsat so its imagery appears to be
[49:48] more clear uh simply because it's it has a higher spatial resolution uh question seven which vegetation index is most suitable for
[49:58] estimating nutrient content in vegetation such as nitro nitrogen levels I'm not currently aware of any uh spectral index for nitrogen specifically
[50:11] uh normally the things that we're talking about when we're we're talking about vegetation spectral indices is things like ndvi and the leaf area index
[50:22] um that is not to say that there isn't a nitrogen specific spectral index it's just not one I've come across
[50:34] before so question eight how can the floating alga index be effectively applied to monitor Alo blooms in small Inland ponds using
[50:43] Sentinel 2 Data are there any specific pre-processing steps or spectral adjustments required to enhance its accuracy in these
[50:52] environments so Sentinel 2 has different bands than those that are used in FA a I so you may need to adjust for those
[50:58] factors uh do keep in mind that many if not all of these indices were originally developed after extensive research and
[51:05] in to data collection to come up with the best approach or index uh having said this you can play
[51:13] with different Sentinel two bands to see if there's better combination that applies to your research question U the other thing to be looking
[51:21] at is the band width and band centers um and sometimes you can get uh reasonable approximations of bands on on sensors for which the
[51:35] indices were not originally developed would the floating Alo index be suitable for monitoring kelp Farms or large macro algaes uh yeah absolutely so
[51:49] Kelps have a similar signal to that of sarcasm so as long as it's detecting Kelps at or near the water surface and
[51:57] you're not running into issues with water attenuation it should be okay to use uh I am going to skip research
[52:08] specific questions but thank you for those um we will be answering them in the dock to the best of our abilities
[52:14] but the answer to most of these is really uh it depends and um you're you're more likely to be an expert in
[52:22] your specific study area in question than than we are uh coming in side unseen and Justin is this one may I add
[52:33] a little bit on that sure um yeah you uh most of the time also uh be aware that
[52:41] uh that and for particular reasons and especially when you're when you're dealing with uh with uh water bodies uh
[52:49] data uh the water column uh changes constantly right uh so usually uh you will need to if you're if you're
[53:00] using a particular set of imagery or so um you will need to do a lot of uh
[53:07] in2 uh validation and for that particularly for water bodies ideally you will need to be on site at least
[53:15] within one or two hours uh plus or minus of of the satellite overpass so that you're you're uh sure that what you're
[53:24] capturing there um the image is actually what relates to the conditions that are that are happening you know at during that
[53:34] particular time and uh and uh if you leave it for another day or so during uh and there's no overpass probably the the
[53:42] the conditions in the water has have changed uh completely thanks Justin yeah thank you one so on to question 11 what are the
[53:58] pros cons of modifying a particular index to your study uh the choice of index is dependent on several factors including
[54:07] the research question the data you have available and the particulars of your study area each index has its particular
[54:15] strengths and limitations uh with the example of assessing vegetation you may choose evi over ndvi in a case where the
[54:23] area is highly vegetated and you need that extra sensitivity but as we said before you may be in a situation where
[54:30] you don't have a blue band uh so you would have to rely on indvi instead so there are a lot of considerations here
[54:38] um also as we we said in the question question um question eight asking about the floating Alo index um which is not
[54:51] designed for Sentinel 2 um but can be reasonably used with Sentinel 2 you need to uh be considerate of the Bands you
[54:59] have available and how closely those match the the data for which these indices were were developed um question 12 yeah I already
[55:13] covered this in brief um curious to get the instructor's opinions on this index and site uh wasn't one that I had seen
[55:19] before but uh it's definitely one that I will be using um because it uh just a curse glance um appears to to have a a
[55:30] pretty good database of indices and um appears accurate at first glance um so yeah thank you for sharing
[55:42] that so question 13 what's the maximum depth of water for example of seas that remote sensing can be applied to derive
[55:50] any water related index would different depths interfere with the results for example if one field of underwater Kelps
[55:57] about 20 M deeper than the other would the reflectance values indicate one is healthier than the other due to
[56:02] different rates of light absorption so remote sensing is usually applied to study the water surface uh part of the reason for this is that the
[56:12] absorption of most of the visible wav lengths uh happens rapidly in the water column so the example we gave for kelp
[56:19] shows exactly this uh even slightly deep kelp branches can barely be detected so most likely any kelp sits something like
[56:26] 20 M wouldn't be detected at all um that is one of the limitations of looking down with Airborne or satellite
[56:35] data we can only really see the surface and a little bit of the subsurface in water so when comparing vegetation
[56:46] changes over time is it advisable to use the dry summer months or the rainy season months so yeah that would depend
[56:53] on your vegetation of interest and the question you're trying to answer answer if you're comparing seasonal changes the
[56:59] same vegetation you may be uh you may be comparing values between Seasons so uh on the other hand if you're looking for
[57:08] a year-to-year comparison you'll still want to be consistent for the comparison time frame so if you're looking year
[57:14] over-year you want to make sure that you're getting imagery um in the same part of the phenological cycle for your
[57:23] species of interest um you may choose the dry season if you're concerned about the influence of dryer or or of drought
[57:31] conditions um similarly you might choose the rainy season if you're interested in things like um looking at ephemeral
[57:40] pools um if if you uh for example have an interest in the uh Wildlife that Springs up in ephemeral
[57:53] pools uh what basic pre-processing of the IM is needed for calculating the index does every index calculation
[57:59] require some sort of pre-processing or imagery product can be used directly without any pre-processing uh yeah so there are
[58:08] different data levels uh provided so level two imagery uh is going to be imagery that's already been
[58:17] atmospherically corrected so when referring to landat data specifically use level two images they're processed at a higher level generally cons
[58:26] consider more accurate and appropriate for spectral index calculations so your level one products are are the things uh directly as they
[58:34] come from from the sensor level two products have had uh additional care taken to ensure that they're they're
[58:41] correct um and corrected um question 16 we don't have an answer in the doc yet but um can we
[58:50] calculate these indices using hyperspectral hyperspectral images yes uh and there are indices specifically developed for use with
[59:00] hyperspectral sensors um if you want to do something like in DVI again you're looking at your band centers and your
[59:08] band widths to make sure that you are getting the parts of the spectral signature that spectral response curve
[59:17] that correspond to the the quantities you want to measure so for example with vegetation you're interested in the red
[59:24] and near infrared reflective and hypers spect and multispectral data those are generally um wider bandwidths um collecting a larger part of that
[59:35] section of the electromagnetic spectrum with hyperspectral data you're taking very narrow slices so you need to be
[59:42] careful that you're selecting the correct wavelengths is there a possibility with one of these methods to find find small
[59:56] water bodies such as water sources in Forest maybe with some data taken in Winter and when most of the trees have
[1:00:02] have no leaves located in Switzerland uh yes absolutely um again because we are always looking down on the earth um your
[1:00:13] suggestion to to look for these things um when in the winter when you're not obscured by tree canopy um is is a great
[1:00:21] suggestion um there are uh specific water in disas that use the sort of dark Optical properties of water to identify
[1:00:32] it um as opposed to to dirt and vegetation um also maybe of interest in Switzerland um there are there are
[1:00:44] indices for snow as well um as you can imagine so is there an option to calculate for
[1:00:56] example in DVI for a few images at the same time or does it need to be done
[1:01:00] separately for each image um yeah so in qgis uh you'll need to calculate each image separately to maintain uh the
[1:01:10] index index values uh however you can use a platform like Google Earth engine to process multiple images which can be compared um
[1:01:21] for example this could be useful on something like uh the NBR to get a multiple uh dnbr the difference
[1:01:29] normalized burn ratio to see uh burn severity over time and vegetation recovery after a fire um in qgis there is a model builder
[1:01:41] um which allows you to create these sort of processing pipelines um there is also an option to
[1:01:49] control ggis and all its underlying utilities with python uh so it really just depends on what you're comfortable
[1:01:57] with in in uh taking this from a single calculation to more of an automated uh system um unfortunately the model
[1:02:09] builder was outside the the scope of of this training um but maybe that's something we can consider uh for the
[1:02:17] future I would love to talk about that when applying these indices using Sentinel 2 Data is downscaling or
[1:02:29] upscaling the resolution necessary for better accuracy is qgis sufficient for processing or is it recommended to use
[1:02:36] snap for optimal results um I will answer this in reverse order qgis is uh sufficient for for your
[1:02:45] processing here um assuming you have the hardware uh necessary to do the the upper down scaling um but the question
[1:02:56] of whether or not you need to up or down scale is really more dependent on your study site and what other data sets you
[1:03:05] would want to be using in addition to the Sentinel 2 derive spectral indices um generally this comes up more as a
[1:03:14] question of matching the resolution of data sets that are coarser than than Sentinel 2 uh although you could also uh
[1:03:25] find yourself in a situation where you have very high resolution data like something from a from a drone flight um
[1:03:33] Which is higher resolution than Sentinel 2 data in that case um you would need to look at doing the the upscaling or
[1:03:42] downscaling as appropriate uh to bring to bring them into alignment are there any weaknesses or trade-offs when using NBR are there any
[1:03:54] other indices for measuring fire impact uh yeah so there are uh quite a few other uh indices for measuring measuring
[1:04:05] fire impact um my background is actually mostly in in fire um so you have the the burned area index uh for example which
[1:04:15] highlights burned area uh using the red to near infrared Spectrum similar to uh how ndvi is calculated um the normalized burn ratio
[1:04:27] uh which is designed to highlight burnt areas in large fire zones but um also gives you the first step to a
[1:04:36] dnbr and dnbr values um can be used to assess uh your burn severities um as well as the um
[1:04:48] repopulation of of burn Scars by vegetation so you can look at the the fire fire recovery uh and succession in Burn scars
[1:04:57] using a dnbr and then the burning index is related to the cont related to the the fire
[1:05:07] fire behavior um other things you can look at um when looking at fire impacts are things that consider secondary um uh
[1:05:19] qualities of the fire so as things like the uh thermal properties and the fire radiative power um so that that
[1:05:31] would be something to look into there uh best index to differentiate vegetation types namely Woody shrub and
[1:05:45] herbaceous so this is a little outside of the capabilities of simple spectral indices uh because what you're asking
[1:05:54] about becomes a classification problem um of course spectral indices could be used as an input to the sort of
[1:06:06] classification algorithm but uh in general the best way to use a spectral index for something like this would to
[1:06:16] be to look at the phenology of your separate uh vegetation types of interest and see if there is a time during the
[1:06:26] year during their phenological cycle where you can capture um differences so say one has Leaf out earlier than the
[1:06:35] other um in in the year you can use the timing to separate these things rather than looking at their their remote
[1:06:46] sensing properties um there is uh work that has been done and is being done to improve our ability to to differentiate
[1:06:56] species using hyperspectral remote sensing data um as a a plug for another ret uh training um we have talked about
[1:07:09] invasive species monitoring with hyperspectral data um and that that information may be relevant to this question is lancea 8 or senel 2 better
[1:07:26] for taking ndvi uh decadal uh and when facing clouds when creating NW ndwi the normalized difference water index by using Sentinel
[1:07:37] 2 uh the lanat archive is longer than Sentinal 2 um that is that is just a fact of of the uh the history of these
[1:07:47] sensors so the lanat archive has imagery going back to the 80s um whereas Sentinel 2 begins in 2015 so for decadal
[1:07:57] comparisons uh generally uh lat would be the most appropriate uh but Sentinel does have that higher spectral resolution so for
[1:08:07] the last decade uh 2015 to 2025 comparison would be better um the sensor is simply newer um and and has slightly
[1:08:19] better spatial resolution so um that's going to depend on on the of time scales that you're looking at um ENT which
[1:08:29] sensor you end up choosing um note also um you say Lance at 8 but if you're looking back over a
[1:08:41] long period of time um you do run into a little bit of that issue where Lance at
[1:08:46] 7 had the scan line corrector failure um so there are there are Gap filling algorithms to help you get around that
[1:08:59] for a multi-year ndvi Time series um I would expect changes in the index due to seasonality uh could this be eliminated
[1:09:07] by comparison between a control area versus the area of Interest also to analyze other influences like human
[1:09:14] impact hope that makes sense uh yeah so if you're looking at a multi-year ndvi time series um you want to make sure
[1:09:26] that you're aligning the timing of the imagery you're using um so that's going to depend on how closely you can get
[1:09:36] imagery um to that that onee Mark um to do year-over-year comparisons so that you looking at the scene when it is in
[1:09:46] the same stage of its phenological cycle obviously you would see differences in in DVI a measure of green vegetation um
[1:09:56] during the Spring and Summer um uh where there where there is leafy vegetation versus uh winter imagery um where you're
[1:10:07] not going to see as much green if any at all what precaution should be taken when the water surface is not uniform with
[1:10:24] waves or crani ulations uh which reflect the light in a very direct and intense way um Juan if you would take this one
[1:10:34] uh Juan I I'm primarily looking at land uh Juan is our our resident expert on all things
[1:10:41] ocean yeah sure thanks Justin um of course the uh you know waves will always be an issue when you're when you're
[1:10:50] dealing uh with ocean data in particular or just um you know big uh Inland water bodies um and uh and usually it's not
[1:11:03] it's not straightforward to to deal with waves a lot of times what uh what people do is that uh uh and it's not only waves
[1:11:12] you can you also need to deal with uh with sunling uh effects also on the water surface depending on this than the
[1:11:19] sun angle and and and other factors um so a lot of times with in particular an an alternative is to
[1:11:28] probably look for another image from a different date that uh where when wind wasn't was not a a factor and you you
[1:11:37] might have a a much clearer uh you know data data set um you can also an alternative is
[1:11:47] that similarly to what you what people do with uh Cloud masking you can mask the waves in you know in the in that
[1:11:54] area and then then then work with the with the rest of the image um for sunling in particular there's been
[1:12:01] there's been uh algorithms that have been developed uh uh for different different uh different sensors uh to
[1:12:09] deal with songling and to to eliminate most of the sunlen from uh from an image yeah so that's the short answer for it's
[1:12:19] it's quite a complicated uh you know uh uh process yes thank you and uh just a reminder if you've put
[1:12:30] questions in uh we will post this this question and answer document um so if we don't get to your question or we're
[1:12:38] still answering it here um you'll you'll have our our full answers um in due time so I'm going to jump around a bit
[1:12:48] um question 27 how distinct are spectral signatures of different vegetation species can they be used for tracking
[1:12:55] succession or the movement of specific species um as I mentioned before uh we have recently done a training on uh
[1:13:05] hyperspectral data uh for invasive species species monitoring uh so that would be a great resource for you to look at there um but
[1:13:16] in general hyperspectral data it gives you the extra spectral resolution that you need to really get at these these
[1:13:25] small differences in the spectral response curves of different vegetation species uh how have these indices performed with paast data how much do
[1:13:35] they differ by sensor um again uh to do the ret uh plug we recently had a training called introduction to Plankton
[1:13:46] aerosol Cloud ocean ecosystem the pace hyperspectral observations for water quality monitoring um that happened uh near the end of last year so I would
[1:13:57] refer you to that for more information about Pace um I will admit I uh am not an expert on on Pace but there are some
[1:14:06] really exciting things coming out with with the pace data so and and Justin also this one again
[1:14:14] also remember that pace is a for audience remember that pace is a is a HP perspector sensor so as you mentioned
[1:14:21] earlier you know uh you have to consider that these have much uh much thinner you know bands than the are the usual
[1:14:30] multispectral sensors that that that were more used to to work with um so that is that is a factor to consider
[1:14:37] when you are exploring the use of let's data set such as that of pace um with you know with some of these
[1:14:50] indices yes thank you last my Q&A page there we go um question 31 different articles suggest that Savvy is better than evi
[1:15:09] what's your Insight in this construction um Savvy is the soil adjusted vegetation index evi gives you a higher uh top end
[1:15:19] so that is to say that it is not as likely to become Satur ated by a high
[1:15:26] density of leafy green vegetation as something like indvi The Savvy is soil adjusted so it's um more appropriate for sparse uh
[1:15:39] sparsely vegetated areas so I it's that's not to say that Savvy is better than evi or evi is better than Savvy um
[1:15:48] they each have their own specific use cases uh question 32 how does persistently poor air quality effect indices such as
[1:16:06] ndvi ndvi and I'll answer that question first uh this seems to be a question in in two
[1:16:11] parts um so when we are using remote sensing imagery of course we're always concerned about the effects of the
[1:16:21] atmosphere on on the the indices um so we apply um atmospheric corrections to to try to get around uh
[1:16:33] some of these issues but of course we are limited by the the windows of electron magnetic radiation that our
[1:16:43] atmosphere uh actually releases back to our our sensors after reflectance so anything that is in the air that is
[1:16:53] going to narrow or or uh muddy our ability to see these these spectral bands is going to be uh certainly a a
[1:17:05] concern um and second part to this um Can Fai be used to distinguish algae from water hin or
[1:17:14] cyanobacteria cyanobacteria um again I think I was I was just going to to recommend Pace again um I would say that uh you know there
[1:17:29] but first uh Fai was particularly the one of the reason is behind you know using fi for for sasum and and and also
[1:17:38] for Kelps is that uh you know it uses the it uses the uh uh the the longer
[1:17:45] bands of the the well the the the red bands of the of the of the visible spectrum right and and as we know you
[1:17:53] know uh gasum and Kelps they usually have this brownish uh color so it's U it's easy to distinguish them with uh
[1:18:02] with Fai I would I would recommend the participant to probably explore in instead of using that one maybe using
[1:18:11] and naavi which we also covered thear difference aquatic vegetation index uh for distinguishing the uh water he and in particular for
[1:18:23] cyanobacteria cyanobacteria though um because um son bacteria they have you know pyan in and then it reflects around the 620 625 or so
[1:18:35] nanometers uh if I remember correctly in the the visible spectrum there are specific uh indices for to detect C of
[1:18:45] bacteria in Inland uh water bodies we can one thing that we can do here Justin is that uh actually I was part of a
[1:18:53] paper that was published uh uh around 2014 2015 so about a decade ago but it's still relevant um where the main author
[1:19:02] is uh Dr Ra kudela from UC Santa Cruz and uh and he actually in that paper we
[1:19:11] we explore uh it was down in one of the some of the Inland Lakes here in in
[1:19:16] California specifically in the in monter Bay and he explored the the use of a particularly of a Sino bacteria you know
[1:19:25] index uh so we can we can we can obviously uh include the reference here uh for the benefit of our our
[1:19:33] participant thanks thank you bon jumping back up to question 29 in addition to ndbi what are other indices
[1:19:46] available to determine builtup areas for landat imag images excuse me um there are other indices that you can use uh
[1:19:57] but it's going to depend on what your your background um against which you wish to determine builtup areas is um to
[1:20:08] Wi the hardest part um of doing the examination of builtup areas is uh identify the difference between things
[1:20:19] like like bare soil and concrete um they do have slightly different spectral signatures but for something like lanat
[1:20:28] where the uh band widths are fairly broad sometimes you you miss out on these little nuances that allow you to
[1:20:37] do that more fine grained picking apart of the the differences um again I would say that this is sort
[1:20:46] of getting into becoming a classification type question and you can use these indices as inputs into a
[1:20:52] classification algorithm uh but that would be the way to go in in accurate discrimination between pixels which are
[1:21:01] mostly built up and those which are mostly your background be that vegetation or be ground fand Etc uh any index or recommendation for
[1:21:15] soil organic carbon estimation um this is not my area of expertise um because we're only looking at the surface of the soil and we can't
[1:21:30] see um any deeper uh I I think you know it would be uh exceedingly hard to to
[1:21:38] get at soil organic carbon at depths um typically when we're we're looking at this um for something like a Petland um
[1:21:49] to to look at the soil carbon in high organic carbon soil types like Pete um we're looking at other indicators like
[1:21:58] the um soil water content um which is something that we can get at using something like smap which is the soil
[1:22:08] moisture active passive um which which uses um active and and passive remote sensing to peer a little deeper into the
[1:22:19] soil and with that I think I've covered all of the questions that are in the document there was uh uh Justin there
[1:22:37] was a question in the chat about when the homework would be available I believe it will be available
[1:22:44] today and uh and then they will have until March 13 to uh submit the the answers it's it's Rel L simple so it
[1:22:55] shouldn't take you you know long but yes it it will be available uh later to later later today yes thank you for that I hadn't
[1:23:04] been watching the chat and so just finally I want to thank you all again for attending and for your
[1:23:15] questions and your patience um and of course I would like to thank everyone else on the rset team who who makes
[1:23:22] these trainings possible e
