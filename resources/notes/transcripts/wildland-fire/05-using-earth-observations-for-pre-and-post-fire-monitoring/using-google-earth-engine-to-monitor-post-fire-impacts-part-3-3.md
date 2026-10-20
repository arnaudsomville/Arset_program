# Using Google Earth Engine to Monitor Post-Fire Impacts, Part 3/3

`https://www.youtube.com/watch?v=w2MmBY3lhYE` · id 265 · 1:24:31 · module 126 — Using Earth Observations for Pre- and Post-Fire Monitoring

[00:00] hello everyone and thank you for being here today for part three of assessing the impacts of fires on Watershed Health
[00:07] Training my name is sativa Cruz I'm an applied researcher with the Bay Area Environmental Research Institute at NASA
[00:16] Ames and part of the RSA ecological conservation team today I'm going to present alongside my colleague Brittany
[00:23] Beaudry as an overview I'd like to take a moment to provide a recap of the learning objectives set forth for the training
[00:35] series series by the end of this training participants will be able to distinguish compare and contrast the biophysical conditions pre
[00:45] and post fire you'll be able to analyze the key fire science criteria to select appropriate data from satellites and instruments for
[00:54] a given watershed you'll acquire land use and land cover maps for a region of Interest select River Basin and sub-basin boundaries for
[01:04] a watershed of interest and recognize how to develop a River Basin skill model using SWAT to simulate the quality and
[01:15] quantity of surface and groundwater the prerequisites for this training are linked here including the fundamentals of remote sensing
[01:25] satellite observations and tools for fire risk detection and Analysis using Google Earth engine for land monitoring applications and the Texas A M
[01:35] instructional videos for SWAT just a reminder this is part three of this series following this training the
[01:45] homework will be open and it will be posted to our training web page please note the due date of July 27th
[01:53] a certificate of completion will be awarded to those who attend all the life sessions and complete the homework
[01:59] assignments before the due date now on to part three of the training series using Google Earth engine to
[02:08] monitor post-fire impacts I like to take a quick moment to acknowledge the wonderful rset ecological conservation team Brittany
[02:18] Beaudry Amber McCullum and Juan Torres Peres this training would not have been possible without the unwavering support
[02:24] of each of my teammates our learning objectives for this training include identifying Urban extent and population data sets
[02:34] acquiring a global land cover map and data sets useful for assessing the impact of fire on communities and
[02:43] evaluating the severity of post-fire burns within a watershed of Interest as with the prior trainings in this
[02:52] series our case study is the 2018 Woolsey fire this fire burned approximately a hundred thousand acres State and National
[03:01] Parklands were affected and resulted in closing for months more than 250 000 people were evacuated due to this fire
[03:10] and it is estimated that 52 million dollars was dedicated to suppression costs alone what we learned in part one through a
[03:21] pre-fire risk assessment was about fire science criteria for Drought conditions in a given Watershed pre-fire to select
[03:30] the appropriate data from satellites instruments for a watershed of Interest we learned how to delineate river basins
[03:38] and sub basins we also learned how to calculate anomalies in biophysical and meteorological conditions for a watershed of Interest
[03:47] specifically we derived the standardized precipitation index or SBI to address dry conditions as well as monitored anomalies of soil
[03:58] moisture and the normalized difference vegetation index within a watershed this all took place in Google Earth engine and we notice SPI and ndvi
[04:11] deviations and anomalies for pre-fire we will be building on this analysis during our presentation in part two we took a closer look at a
[04:23] River Basin scale model using the soil and water assessment tool or swap for short short we identified the physically based model
[04:32] components necessary to run a swap model to predict the impact of management on water and sediment in a watershed
[04:42] we ingested Earth remote sensing data into the swap model using NASA access and discussed best practices used to
[04:52] conduct calibration and swap swap can be used to quantitatively constrain fire related increases in water water quantity
[05:01] and water quality parameters we learned that fires have been shown to increase Stream flow sediment and nutrient loads and watersheds and we
[05:11] were able to observe this folder the Woolsey fire as there were fire related changes in the first year
[05:17] following the fire there was a lot of precipitation which resulted in discharge and sediment load Peaks a lot of information was covered in the
[05:28] first two sessions and will continue to build on our understanding of the Woolsey fire for part three
[05:35] I want to remind you that you're free to enter questions as we go we will try to
[05:39] get to all the questions during the Q a session and any remaining questions will be answered in the Q a document that
[05:47] will be posted to the training website about a week after the trig so now on to our first topic burn
[05:57] severity mapping satellites can detect many aspects of fire including active fire mapping meaning the fire is still burning during
[06:07] the satellite overpass information about an active fire is gathered in three ways one being smoke if there is a fire there will be smoke
[06:16] visible in the satellite imagery two temperature anomalies or hot spots on the ground The observed temperature will
[06:24] be elevated where a fire is burning and the third is light most fires produce light while burning so
[06:30] satellites observing light on the ground can capture this light they are mostly effective at night time post fire mapping helps us understand
[06:40] the extent and the severity of fires and some of the satellites and sensors for detecting active fires include Modis
[06:48] veers goes landsat Sentinel to Sentinel one and you are provided some over of these briefly in part one
[06:59] it is also important to remember that although there are a variety of post-fire impacts that affect our
[07:05] ecosystems they are a natural part of forest grasslands and Tundra environments environments there are several post-fire impacts
[07:15] including but not limited to impacts on habitats human lives and infrastructure following a fire the impacts can also
[07:25] include a release of carbon dioxide and suit particles into the atmosphere thereby influencing climate a change in
[07:33] soil chemistry and a reduction in soil fertility destruction of vegetation leading to increased runoff and soil erosion as well as influence on nutrient
[07:44] cycling and flow and you know the obvious big one of destruction of ecosystems and Wildlife often when we think about wildfires we
[07:55] think about the fire intensity and the burn severity fire intensity is the amount of energy or heat released per unit time over an
[08:04] area and can be described by a variety of fire intensity metrics traditionally fire intensity is considered the rate of energy or heat
[08:13] released per unit time per unit length of the fire front regardless of its depth depth buyers of different intensity tend to
[08:22] look very different and have the ability to burn vegetation and soil to different degrees degrees fire intensity is important to keep in
[08:29] mind since it's a major factor in determining the severity of burning burn severity is the effect of fire on
[08:38] ecosystem properties and is often defined by the degree of vegetation mortality mortality print severity is a way to measure the
[08:45] degree to which a site has been altered or disrupted by a fire with severity determined by both fire intensity and
[08:52] residence time the burn severity is something we can measure via satellite imagery and it is considered a mappable metric for
[09:00] post-fire assessment from a remote sensing perspective we usually assess post-fire landscape impacts with two metrics the burned area
[09:11] to determine the spatial extent and the location of burn scars and burn severity to determine the relative impact of a
[09:19] fire on the landscape we'll go over more of this in the following slides but you can see here an example of burned area
[09:26] and burn severity with these two metrics we're able to use remote sensing imagery to assess the extent and magnitude of fire impacts
[09:35] over large areas Optical sensors used in remote sensing give us spectral information to examine vegetation conditions here we have the
[09:47] spectral response curve of vegetation plotted over the electromagnetic spectrum from 0.4 to 2.6 micrometers in healthy vegetation there's a relatively
[09:58] high response in the green portion of the spectrum due to chlorophyll pigmentation pigmentation there is also a high near infrared
[10:05] response due to healthy plant cell structure and relatively low responses and the mid-infrared range due to water
[10:13] absorption so that's why we see healthy vegetation as green we can use the reflectance properties from the satellite image to identify
[10:23] healthy vegetation versus burned areas when we compare the healthy vegetation spectral signature to those of burned areas we notice some differences
[10:33] you can see this pretty clearly for the spectral signature curves of low moderate and high burn severity where
[10:39] healthy vegetation has this large peak in the near infrared bare soil and burned areas have much lower peaks in
[10:47] the near infrared and in the case of high severity burnt areas there's much less response in the
[10:53] near infrared you can see that healthy vegetation has low reflectance in the shortwave infrared but burn areas have high
[11:01] reflectance in those wavelengths with these Federal characteristics we can identify burned areas and distinguish it from healthy vegetation
[11:12] to take advantage of this difference in spectral response between healthy vegetation and burned area we use the
[11:18] normalized burn ratio or NBR to map post-fire conditions MBR uses remote sensing data at the near infrared and
[11:27] shortwave infrared to math burned areas and ultimately assess burn severity you can see how this calculation is
[11:34] completed here on the slide MBR is a unitless value from negative one to one a high MBR value that is closer to one
[11:45] indicates healthy vegetation while a low value that is closer to negative one indicates recently burned areas and bare
[11:52] ground ground MBR is a commonly used metric for identifying areas where vegetation has recently burned due to fire
[12:02] the images here show pre during a post-fire from the Mendocino complex fire that also burned in California in
[12:09] 2018. 2018. MBR is also critical to burn severity estimates to estimate severity we compare NBR pre and post-fire using the
[12:22] difference to normalized burn Ratio or dnbr dnbr here we have a basic run through of how this works first we will calculate the
[12:31] NBR prior to a fire and after a fire we then take the difference between those two images
[12:40] once dnbr is calculated an analyst will need to threshold the dnbr values into classes of low moderate and high burn
[12:49] severity severity to produce a map that looks like the one on the right with highest burn severity areas mapped
[12:56] in red here their suggested threshold values for burn severity in the literature and using this approach we can identify the
[13:04] severity of the fire foreign foreign post fire mapping in Google Earth engine Google Earth engine developers have
[13:15] focused on creating a really robust GIS platform for processing analyzing and displaying satellite data therefore Google Earth engine has a lot of
[13:24] potential for land monitoring applications applications applications like long-term monitoring of landscape change computation of relevant indices evaluating parameters
[13:35] like vegetation soil snow cover and time series and change detection analysis of land surface features there are also functionalities for
[13:46] calculating summary statistics validation and accuracy assessment and visualization and presentation of results results there are also a variety of processed
[14:00] land cover layers available including the Copernicus Global land cover layers data set Modis land cover types maps of
[14:09] forests versus non-forest area derived from Pulsar data and the USGS national land cover database layers linked here you can browse the data
[14:19] catalog to get a better idea of available data layers and imagery archives for part of this training we will be
[14:30] using Google Earth engine for burn severity mapping with landsat data we will calculate the normalized burn ratio
[14:36] and the different normalized burn ratio utilizing thresholding values to identify categories of burn severity and map them within the interface
[14:47] portions of the code we will work through in our exercise are from the United Nations spider program where they
[14:53] provide an example of burn severity mapping in Chile and 2017. this code is publicly available and flexible to use
[15:00] in different regions throughout the world world the information is linked here as with any platform there are
[15:10] advantages and disadvantages of Google Earth engine some benefits include rapid processing of imagery on the cloud the
[15:18] ability to access and integrate many different data sets the built-in functions allow for relatively quick processing and you have
[15:26] a flexible API where applications can be built off Google Earth engine like climate engine or the popular Global
[15:34] Forest watch it is also free for non-commercial use some disadvantages include limitations for some of the processing operations
[15:43] meaning you often cannot run batch operations without a cost if you are a commercial user there is
[15:50] also a cost some complex processing can also be challenging due to the restricted programming framework additionally aggregate layers make it difficult to
[16:01] determine the date of specific pixels I'd also like to take a moment to acknowledge that in addition to land
[16:08] monitoring applications there are many factors to consider when evaluating environmental social and economic impacts of fires the study by Morton at all listed here
[16:20] provides examples of variables that capture a fuller story of post-fire impacts although we do not go into depth
[16:28] for many of these listed here we encourage you to explore ways to augment your own post-fire analysis by
[16:34] incorporating the many ways in which a location is impacted by fire we are now going to enter a
[16:43] demonstration of Google Earth engine led by Brittany Brittany take it away thank you so much sativa uh in this session today as she said
[16:56] we're continuing with the Woolsey fire as our case study and we're going to be using Google Earth engine to look at
[17:03] some post-fire impacts so we'll start by using the landsat 8 collection 2 data set which is linked to your above on the
[17:11] slide and landsat 8 is great because it has Global coverage it has 30 meter resolution and has data available for
[17:19] March 2013 to present so with this data we'll start by masking out clouds applying a scale factor and
[17:27] filtering our data to pre and post fire dates and the image on the right here shows a true color image of our study
[17:35] area we will then use that filtered landsat 8 imagery to calculate a normalized burn ratio also known as an NBR and we will
[17:46] have or we do have this formula for an NBR right here on the top right and we
[17:51] will use landsat 8 near infrared in shortwave infrared bands and we'll calculate the NBR for both before the
[17:58] fire and after and on the left we have a screenshot of what that layer will look like where darker colors indicate
[18:06] healthy vegetation all the lighter colors indicate bare ground and recently burnt areas once we have the pre-fire NBR in the
[18:15] postfire NBR from the previous slide we will take the difference between them to calculate the dnbr also known as the
[18:23] difference NBR or the change in the NBR from that fire with the dnbr we will then create
[18:30] classes for the burn severity index and the thresholds for this burn severity range from enhanced vegetation regrowth
[18:38] to high severity burn so the thresholds we're using this code today are based on the j e Keeley fire intensity fire
[18:46] severity and burn severity A Brief Review and suggested usage of the UN spider tutorial also recommended this image on the right shows our study
[18:56] area with the burn severity color-coded according to the various thresholds that we just mentioned the next layer we'll be working with
[19:05] today is the Copernicus Global land service land cover data this data has Global coverage and is calculated on an
[19:13] annual basis but the Google Earth engine version has not been updated since 2019. the data also has a 100 meter resolution
[19:21] so that's something to keep in mind as well well but since the Woolsey fire is from 2018
[19:27] we are going to be using this data set specifically with the 2018 land cover and the image on the left shows our
[19:35] study area and its various land cover types and in this session we'll be focusing on the urban classification and
[19:42] using it to calculate hectares of burned urban area the next layer we'll be working with is the global human settlement layer which
[19:52] contains the amount of people per cell for various years and we use this layer because it has Global coverage but it
[20:00] does have 250 meter resolution and unfortunately the closest Date to our study area is from 2015 but we will be
[20:09] using this layer to estimate the number of people affected by the Woolsey fire with the burn severity map that we just
[20:16] saw a couple slides ago next we have the viers day night band this data is an average monthly
[20:26] composite of radians and it has Global coverage and is available from April 2012 to present and its resolution is
[20:36] about 460 meters however we will use this data to look at our study area before during and after the Woolsey fire
[20:47] and our next layer is the fire information for resource management system also known as the firm's data set
[20:56] firms distributes near real-time active fire data from the Modis and beers instrument and globally these data are
[21:04] available within three hours of satellite observation while firms does have its own website and its own active
[21:11] fires map it's also available as a layer within Google Earth engine so we're going to add that to our map and further
[21:18] examine the extent in the severity of the Woolsey fire okay so at this point we're going to use
[21:27] the link here at the bottom of this slide in the in the blue to open the code in our Google Earth engine code
[21:34] editor and we're going to go through the code one section at a time to further understand the layers we just discussed
[21:40] and here are the nine sections we're going to get through and with that being said let's go over to the code editor
[21:53] all right so now we'll examine some Earth engine code and discuss how we created the layers we just went over in
[21:59] the presentation since this is an advanced level webinar and session one already covered several aspects of Earth engine as we go through
[22:08] the code today we're going to approach it from the perspective that we have at least a baseline understanding of the
[22:14] coding language so if you want to learn more about Google Earth engine and how it works I suggest you review the
[22:20] webinars listed as prerequisites for the series as well as these other webinars and tutorials we have listed here at the
[22:28] top so sections of this script were adapted from previous rset lessons and you inscriber tutorials so we've
[22:35] provided links to those as well if you'd like to see that more in depth all right so with all that being said I
[22:42] think we're ready to dive in here at the top or the start of the script we do have just uh some more
[22:51] layers and information to continue from session one so the first thing that we have starting here at line 17 is
[22:59] creating a title for the map window that was in session one for both of the the scripts that we used and we're doing the
[23:06] same thing here so you know we're just creating the variable title and online it's 19 we're just
[23:13] you know adding that text here to this and then we're just picking the font weight and the font size and its
[23:22] position and then we add it to our map here in my 25. and then again just similar to session
[23:29] one we're adding uh the hydro sheds basins layer layers uh including level nine and level seven so here we start on
[23:38] line 29 with level nine we just create a variable with that data set here on line 31 we just create the visualization
[23:46] picking the color for it a nice blue and then uh we you know add that visualization to our map here and then
[23:54] we do the same thing for level seven starting on line 41 picking the visual visualizations and then adding that to
[24:01] our map so here in Earth engine as you add layers to your map and it starts from
[24:07] the bottom all the way up so as we go through the different layers today we will be starting from the bottom and
[24:13] working our way to the top of these so let's start with layer nine and here's our Watershed of interest that we
[24:21] were looking at in previous sessions for this fire and then we also have layer seven and it's a bit of a larger scale so you
[24:33] can see how that changes as well for the most part as we add most layers I'm going to be referring back to
[24:42] level nine here and seeing what it looks like within our specific Watershed but this is something just to pay attention
[24:48] to to all right so jumping into part one of our new code we're going to Define our
[24:56] study area we're going to apply a scale factor and we're going to Cloud mask our data so we're starting with defining our
[25:04] study area here on line 56 on line 57 we're just creating a variable that we named Roi and Roi is our geometry here
[25:14] it's this nice sort of square rectangle area that covers the extent of the Woolsey fire so that's our region of
[25:23] interest I'm going to turn it off just so we can see our Watershed that that is our geometry that we'll be using today
[25:31] and from here we just set the background to be a satellite imagery just so we can better see what this Watershed looks
[25:39] like you can always switch to Map here down below if you'd rather you know look at you know like a street view level
[25:46] but I like the satellite better for some visualizations today and then we're just setting the map Center to better
[25:53] visualize what we're looking at each time we run the code okay so here on line 62 we're setting
[26:01] the pre-fired dates so on line 63 we have the pre-fire start date and the pre-fire end date on the next line and
[26:11] as you can see we go from November 5th 2017 to 2018. so we're doing about a full year before the fire that's so we
[26:19] can just get a full understanding of this region it's seasonality I'm just sure trying to Encompass as much as we
[26:25] can with the imagery and then here on line 66 we're having the same parameters for after the fire
[26:33] these are the post-fired dates so on line 67 we have a post buyer start date and that's just the day after the fire
[26:41] officially ended and the push Fire end date and that's about three months after and that's something to think about too
[26:48] with your post fire start date and end date the length of your post-fired date you have to think about you know clouds
[26:55] and the quality of the imagery that you're getting but also if you stand too far what areas are starting to you know
[27:02] grow back vegetation how does that affect your results so we have about three months here but as you you know do
[27:09] your own research and as you play with this code on your own start to think about how changing those uh post-fired
[27:15] dates might change some of the results you see below all right so here on line 70 we are
[27:22] applying a scaling factor for the landsat 8 collection two image collection that we're working with and I
[27:28] have included a link here if you're just interested in scaling factors but essentially this is just going to help
[27:34] us scale down the values within the data so that way they're a little bit more easier to manage with visualizations and
[27:40] things like that so we are just performing this scale factor here on the optical bands and then this skill factor here on the
[27:48] thermal bands and again you can read more about that uh in the link provided on line 70. if
[27:55] you're interested okay so here starting on line 78 we're starting to pull in these image collections of our pre-fire that
[28:06] so we have on line 80 we're creating this variable pre-fire image collection pre-fire imcol and we were pulling it in and we're
[28:17] filtering by the dates again our pre-fire start date our pre-fire end date that full year before the fire
[28:23] began we're filtering by our bounds which is the region of Interest this geometry our Roi and then we're mapping these or applying
[28:32] the scale factor that we calculated above above and then we're doing the same thing for our post fire image collection we're
[28:40] creating this with the variable post fire image collection we're filtering by the post fire start date in the post
[28:46] Fire end date we're filtering by this geometry here and then we're uh applying that scale factor all right so here starting on line 95
[28:57] we're starting to Cloud mask the data or at least we're creating a function that will be performed to Cloud mask
[29:05] here I'm just masking out a couple different types of clouds Cloud shadows and I'm also masking out water which may
[29:12] sound interesting and we're doing that because a lot of the different calculations that we're going to be
[29:18] doing today are specific to land and as you can see our geometry here does cover a bit of the ocean and I don't want that
[29:28] included in our calculations if we can help it so if you are performing this at a later
[29:35] date over a different study area and you don't want to mask out water for whatever reason you can always get rid
[29:40] of line 102. and 110 here and you should be able to just mask out clouds without masking out
[29:48] water water but just for that reason you will see that I am attempting to mask out the
[29:52] water and once we add it to our map you can see it does for the most part mask
[29:56] out water but this is just the cloud mask function and then here on line 117 in 118 uh just
[30:06] because we created that function doesn't mean we applied it yet so we are applying that cloud mask function here
[30:12] so on line 117 we're applying This Cloud mask function using the map feature here on the pre-fire image collection and the
[30:22] post fire image collection so these new variables are called pre-fire CM Cloud mask image collection and post fire CM
[30:31] for the cloud mask image collection and then here starting on line 20 we are mosaicing and clipping the image to our
[30:39] study area so we are taking a mosaic of all of these photos in our image collection and clipping it to our region
[30:46] of Interest meaning we're like taking a cookie cutter and just cutting out this specific area for our image to add to
[30:53] our map and we're doing that here on line 124 and 125 with the pre and post fire image collections without the cloud
[31:03] mask mask and then on lines 127 and 128 we are adding the cloud masked versions of the
[31:09] image collections as well just so we can see how the cloud mask and the water mask function uh works on our image
[31:17] collection collection so here on line 131 we are creating some visualization parameters we're just picking bands four three and two our
[31:29] true color imagery for our image Collections and then here 134 through 139 we are adding these different layers
[31:38] to our map so we have the pre-fire image collection the post fire image collection uh and then the true color
[31:44] versions with the clouds mask as well so let's look at that now so we're going to the layers tab
[31:51] scrolling to the bottom here and as you can see we're going to start with the pre-fire image
[32:04] and as you can see it's still loading a bit okay so it does have some streaks from clouds within the imagery so from
[32:12] there we're also going to use or we're going to load the cloud masked version version okay okay so here it definitely got rid of that
[32:25] big streak of clouds but we do have some down here and you know that's it's not perfect I think it's good enough for our
[32:34] analysis today just to get rid of all of that ocean we had um if you wanted to make it absolutely
[32:40] perfect for this study area I think that we could always use like a shape file without the ocean included but for our
[32:48] purposes today I think this is all right and then we're just going to view the post fire
[32:55] image and here we have some clouds as well well and then the post fire with the clouds
[33:03] mask mask all right you can see there's a little bit uh emptiness here but again that's okay and you know if we wanted to
[33:13] increase our uh post fire dates that might help fill in some more but then you have to think about how long it's
[33:19] been since the fire itself and the results so this is all a fun puzzle that you have to work around as you work with
[33:25] remote sensing imagery but the good part is is that as you can see that water from down below has been masked out
[33:36] okay okay so let's move on to part two calculating a NBR for our pre and post fire images
[33:47] so uh here is the uh calculation for an NBR and we're going to be doing that for
[33:55] both before and after the fire so we have a pre NBR and we are using landsat 8's near
[34:03] infrared and shortwave infrared to bands and that is band 5 and band 7. if you're doing this yourself at a later date and
[34:11] you're using a different satellite or a different sensor make sure that you are using the neo4 red and short rib
[34:17] infrared bands and not just bands five and seven make sure that you are using the correct uh ones there
[34:24] so we are using again uh pre NBR postfire NBR and using the normalized difference with these these bands
[34:34] which brings us to part three what are we doing with them other than just creating them we are creating a dnbr
[34:41] we're using them for dnbr calculation where we subtract the post file NBR from the pre-fire NBA and we do that right on line 156 with
[34:53] the variable D and BR unscaled so again we're just subtracting the post MBR from the pre and VR and then we are scaling
[35:01] it to USGS standards so what does that mean mean um the NVR again is on a scale from
[35:09] negative one to one but we are multiplying it by a thousand here so that way when we work on our burn
[35:16] severity we have these larger numbers to work with and you'll see why as we get to the next section of our code as we're
[35:22] working with our thresholds but that's we're just multiplying the results by a thousand for just our dnbr
[35:30] and then we're adding the pre-nbr the post MBR and the D NBR to our map here on line 163 164 and 165 where you're
[35:40] just using this you know gray palette to do so and we can check that out on our map now
[35:48] so I'm going to the layers Tab and let's start with the pre-fire normalized burn ratio ratio so this is before the fire
[36:00] and we can compare it to after the fire and right away you can see a big change
[36:09] especially if you turn these layers on and off or make one you know see through you can see
[36:16] you know this this lighter colors here showing this burn scar in the area right and then this regrowth here
[36:25] this darker area a couple months after the fire and you can also add the dnbr gray scale
[36:34] so things are switched here but you can still see that burn Scar and whatnot so we're going to be using this this
[36:43] dnbr to calculate our burn severity and we're going to sort of you know attach the Legends and color code it to make
[36:52] this really cool visualization of the burn severity and we're doing that next here in part four four so we're going to classify the burn
[37:00] severity add a legend and identify where in our map is a burned area so so what we're doing here uh starting on
[37:11] line 172 is we're creating these thresholds these different intervals of values of data that we're going to use
[37:19] for the severity of the Burns in our data so we start with like negative 1000 all the way to negative 250 from
[37:27] negative 250 to negative 100 from negative 100 to 100 so on and so forth and from there we're adding that to our
[37:35] map and we are going to create these thresholds again here on line 190 191 we're creating these thresholds that
[37:45] we're going to do for our eight burn severity classes and then from here we are creating a legend for the
[37:51] classification this code is exactly from Google Earth engines tutorial on how to create Legends or just creating it for
[37:59] our classes and you know changing the values um it's straight from the U.N spider tutorial as well
[38:07] so so you can see here uh we are just creating the legend title we're adding the title as a panel we're
[38:16] changing the the colors the fonts the size of the fonts here we're picking the palette for each of our thresholds uh
[38:25] you know classes and then naming each of them so these are just color codes and you'll see those in a second
[38:32] um and then we're just you know creating it and then printing it so here on line 251 and 252
[38:39] I have selected to run this line here to to to print our Legend here to the console
[38:49] but if you'd prefer you can also just mask out or mask out you can comment out our
[38:58] our line 252 and you can run 251 instead and I'll do that just to show you why
[39:03] and it'll add it down here but uh we will be working with more Legends today we're going to be working
[39:09] with more colors and I didn't want the Legends or permanently in the corner here because I've had to be distracting
[39:15] if we're not looking at this specific math the whole time so that's why I have it just as a printed
[39:22] version instead of as the map but again this is up to your preference I like it here printed to the console
[39:31] instead so I can always scroll to it but it's not always in the corner so now that we have our Legends let's
[39:37] add that layer to our map and that is under uh dnbr classified so here we can see all the
[39:48] classifications classifications uh you know the enhanced regrowth in this area the high severity burn you know the low severity the different
[39:56] versions all right here and up here and I will draw this to your attention very quickly um something like this and it even shows
[40:06] up in our grayscale uh as well as our burn ratio this here are not just very localized High severity Burns this is
[40:16] actually just changes in agriculture so this is why it's so important to when you're doing with or when you're working
[40:22] with remote sensitive data and doing these calculations you have to make sure that you know the area well because this
[40:30] is not uh just a very localized burn this is probably like a form of crop rotation or
[40:37] just a change in the agriculture there was a burn here uh within this area itself but it was not a high severity
[40:45] burn just Within These a couple Fields here so that is something to think about in your calculations you could either
[40:50] crop that out or remove it but it's something to think about looking at at our Woolsey fire here I
[40:59] will zoom in and turn on the Hydra sheds uh level nine and I'll start to see so you can see the highest severity bar
[41:10] was right here at the bottom almost along the edge of our our Watershed of interest and even the Watershed beneath
[41:19] it you can see how severe that burn was right along that that line there that Ridge Ridge so that's something very interesting to
[41:29] think about and then you can see the bird was through here as well in this area is experienced regrowth by the time
[41:35] our post-fire dates have occurred but the fire did go up here as well and you can even see the burn scar in a
[41:42] previous slide within our our presentation I believe it's modus imagery where we got the boat yeah so now that we have this burn severity
[41:53] map in this next section starting on line 254 we are identifying the burned areas specifically and we're going to do
[42:02] that by just working with the low severity to high severity thresholds so here in the console we're working with
[42:09] anything from low severity to high severity severity you know Burns in this area and we're doing that line 255 by
[42:19] creating this burned thresholds and we're working with our dnbr and we're just getting all the values greater than
[42:27] this dot GT 100 so 100 is the lower area for low severity so we're doing everything greater than that for our
[42:36] burn severity in our in our map so so and from there we're creating a another variable on line 256 called burned areas
[42:45] and we're updating that mask so we're masking out anything that was not within our burned thresholds area so we're just
[42:53] creating a map or a layer specifically to look at anything that is classified as burned and so we're going to create these
[43:01] visual parameters for the burns land just picking a color palette to separate it from these other classes as we add it
[43:07] to our map I believe this is a nice like navy blue color and so here on line
[43:13] 264 we're adding that burned area to our map so let's add that now and that's burned area here and on top
[43:22] you can see this burned area is this navy blue and we can't even turn off the lower area now and so this is our sort
[43:30] of extent of the Woolsey fire based on these classes in our burn severity so we're going to be working with that
[43:40] in a bit so we're moving on to part five add land cover data and calculate hectares of
[43:48] burned urban area so we're going to start by creating a variable for the Copernicus Global land service land cover data so on line 272
[44:00] we're working with the variable LC underscore Global we're just adding this Copernicus land covered data and we're
[44:08] selecting the discrete classification so I'm just going to add uh it's going to show you really quick what this data
[44:19] set looks like so if I open this here in a new tab so this is just you know right from the
[44:27] Google Earth engine data catalog information about what we're working with but we are working with the discrete classification bands this is
[44:35] all the different land cover classes so here all the different ones that this data set offers is land cover classes
[44:42] here in the Woolsey fire and just in our area of Interest we only have about seven classes only about seven of these
[44:49] show up so we're going to use those seven to create a legend next in our code and we did that just by taking this
[44:57] exact color code then this exact title as we create the legend title and the different classes but as you're working on your own and
[45:06] you want to create a legend or if you know you are using this code and you don't see these different colors showing
[45:12] up in your Legends you're going to have to edit the color codes and the titles yourself yourself I just wanted to make that clear
[45:20] okay okay so the first thing that we did again is just selecting that discrete classification band we're clipping it to
[45:28] our region of interest and we're adding it to our map as land cover just let me add that now
[45:37] in here you can see our land cover and I'll turn off that lower area and you can see the different
[45:44] land cover types Within Within our Watershed of interest you can see a couple different kinds and we can
[45:53] explore that once we add the legend okay which is the the next section so this again this Legend code is very
[46:01] similar to the previous Legend code for these classes that we just added just adding the position giving you know it a
[46:08] title taking the font weight the margins all of that information how the text Will flow and then again with the
[46:16] palette these palette colors and the names for each of the areas in the palette that's just coming right from
[46:23] here the ones that we saw down here below to create our Legend so again we just saw seven so we just
[46:30] have seven different classes within our Legend and we add that again same scenario with the map and the
[46:37] print online 335 you can add it by mapping it or adding it to your map down below if you want to run line 335 I ran
[46:46] line 336 because I just want to look at it right here in the console and so it
[46:50] printed right here and we have our land cover classes as you can see this orange color shrub yellows herbaceous
[46:57] vegetation uh Reds Urban you can you know see that in our area of interest and so this can
[47:09] also be a good way to look at your you know know burn severity map look at your you know
[47:16] different values like this is agriculture maybe this wasn't as increased of a burn as I thought and
[47:23] this is like a misclassification in my dnbr something to think about okay okay so so what we're going to do next is display
[47:38] the urban areas as a separate layer on the map so we're going to take these red values here we're going to separate it
[47:45] and make it a brand new layer because we just want the urban layer and something to work with
[47:50] so the first thing that we do is set some visual parameters and we're just picking a color for these Urban values I
[47:57] believe this is a purple color that we're going to add to our map and we are extracting these Urban
[48:04] values from the land cover online 346 using LC that landcover dot equals 50. where did that value come from it
[48:17] came from right here within the discrete classification here the value of 50 is the urban built up land that you see
[48:24] down here below so we just want everything that equals that and it'll create a new variable and it's called
[48:31] Urban and we're just updating that mask just updating our selection of values to only include that Urban
[48:39] and then we add it to our layer here add it to our map as a layer here on line
[48:44] 357. and that's just called Urban and you can see see it is a separate layer I can even turn
[48:54] off the one below and now this is the of the urban area within our our complete region of
[49:01] interest you can see it over our Watershed here okay okay here we're going to calculate hectares of burned urban area and how we're going
[49:12] to do that is we're going to use this data this Urban classification along with the burned area classification so
[49:21] by understanding where the urban area is or the burned area is we want to see where they
[49:28] overlap we want to see where there is an urban area that was burned by this fire and so that's what we're doing exactly
[49:37] on this line here 362. VAR Urban affected it equals the burned areas again this blue color here using that
[49:47] dot update mask changing the visualization what we're selecting for data and we only want to look at it
[49:53] where there's also an urban value as well well and so from there we're just adding that to our map right here on line 366 we're
[50:02] adding that Urban affected map using some visualizations I believe it's a bright pink color that I think is right
[50:09] here in line 351 and so we're adding that and I believe it's called burned Urban and so I'll turn these other off because
[50:19] you can see it a bit better these are all of the burned Urban Land from the fire here within our map you can see all
[50:28] of it and then within our Watershed here down below okay okay so we want to get an understanding of
[50:39] how many hectares so we're going to start by getting the pixel area of this affected urban layer
[50:46] so what we're going to do is we are going to add a pixel area here just to
[50:51] calculate the area of each pixel within this data set and then from there we are going to sum
[50:58] them we're going to take the sum of them um and we're going to do that within our
[51:03] entire region of interest and what's important is when we are counting all of the pixels we have to set the scale and
[51:12] it's important that the scale is the same as the data set that you are getting your data from so as we're
[51:21] counting all of these different pixels we need to make sure that the size of the pixel the scale is the same as our
[51:28] Urban layer which comes from the land cover data set so we know that the resolution for our land cover data
[51:36] set is 100 meters so our scale is 100 here as well and then here we are just going from
[51:43] meters to hectares as we summarize or you know get the sum of our pixel count and then we are just
[51:52] rounding it to the nearest whole number and then we're printing that number again to our console and adding just a
[51:59] title of hectares of affected urban area as you can see our value here is about 4260 all right so for part six we are going
[52:12] to load human population data and estimate the number of people affected so we're going to start by loading the
[52:19] jrc human global settlement population density layer um so we're going to start with line 395 just adding that jrc data and of course
[52:30] clipping it to our reaching of Interest again again um this is 2015 is the closest year um so we're working with this 2015 data
[52:42] and then from there we are creating a raster just showing the exposed population only using the burned areas
[52:49] so now that we have the entire information on the population within our region of Interest we want to look at
[52:57] how many people were specifically with uh within this area that let me turn off all the way
[53:04] so now we're looking at the count of the population that we're specifically within this burned area who are most
[53:10] directly impacted by so we are just updating the mask so that this is the only area that we're going
[53:19] to be counting our population value in and we start that here on line 401 we create a variable variable online for
[53:28] two called stats and we're just again taking that exposed population using the reduced region taking the sum of these
[53:36] pixels and again scale comes up again it's important that the scale matches the scale of the data set that you're
[53:42] working with so it's a 250 meter resolution so that has to match so we're making sure that our scale is 250 for
[53:50] this one and then here on line 410 we are just getting that number and then rounding it
[53:56] to the nearest whole number and then we are printing that here on line 412 which is 14
[54:07] 14 723 people affected all right so with these socioeconomic calculations we need to remember that our results are only as accurate as our
[54:19] data and these values are only meant to give us a broad idea of the scale of hectares burned and the scale of people
[54:26] affected so with these calculations and with remote sensing data in general we need to think about how both these
[54:33] spatial and the temporal resolution of our data affects our results so we chose this land covered data set and this
[54:40] human population data set because they provide several years of global coverage but I would encourage you all to
[54:46] consider what other data sets are available within your own study areas and consider what their spatial resolution looks like what the temporal
[54:54] resolution looks like and how an improved version May improve your results as well all right so once you part seven
[55:05] we are going to visualize nighttime Data before during and after the fire so we're using that veers day and night
[55:14] band data set and we start with the pre-fire here in line 418 so we start with just selecting the data
[55:24] set selecting the average Radiance bands and then again this is composited monthly so we're just taking all of
[55:31] October 2018 is the month before the fire and that's our pre-fire and again we're just Mosaic and clipping it to
[55:38] this geometry our region of interest and then we're doing the exact same thing on line 425 and then again on 432 during
[55:47] the fire the entire of the entirety of November 2018 so this is just a complete month so it does last before and after
[55:56] the fire occurred so it's not the exact fire dates and the post fire is the entirety of December 2018.
[56:04] and then here Line 440 441 and 442 we add them to our map as nighttime before fire nighttime during fire and nighttime
[56:13] after fire and you can see that here so here's the before again the resolutions a little course
[56:24] um especially as small as our region of interest is but it does offer some really interesting uh understanding of our area so even
[56:35] just looking at this we can see a lot of these lights are coming from urban areas in our region of interest at night
[56:42] before the fire and then of course during the fire we have a lot brighter areas which don't look to see don't look
[56:51] or they don't seem like they're urban areas so we can compare that to something like our burned area
[57:00] and we can see which areas were burning at this time when this image was taken and then of course we have the nighttime
[57:08] imagery after the fire and we can you know compare all three and just see how things change before
[57:16] during and after and the difference here before and after isn't that extreme but it may be in other areas and it's just
[57:24] another interesting way to see the extent of the fire how things changed you know socially it's definitely a very
[57:32] interesting perspective here okay okay and then oops Yeah here on part eight we are visualizing firms data during active
[57:44] fire dates so on line 449 we're taking the variable firms we're selecting the actifiers band and then we are adding
[57:53] the exact dates of the Woolsey fire and of course filtering our bounds for a region of Interest or mosaic and
[58:00] clipping it uh setting some variables for the visualization uh here on line 456 and picking a color
[58:09] palette and then just adding it to our map on line 461. so let's see what that looks like
[58:15] and again the uh resolution on this data I believe is about a kilometer so it's you know
[58:24] pretty coarse but it's still interesting just to compare the the extent of the fire as well as the
[58:36] severity severity um just another way to to look at our data set from A New Perspective huh
[58:49] all right and then our last part here part nine visualize pre and post fire ndvi of course session one had that
[58:59] really interesting ndvi anomaly section so we just thought it would be interesting if we had some ndvs before
[59:05] and after the fire to look at as well uh so here on line 467 it's just the
[59:10] calculation for ntpi so we're using the near infrared and see red bands in landsat 8 which are bands five and four
[59:17] and we're doing that pre a pre-fire and that's line 468 and 469 is the postfire ndvi online 471 we're creating those
[59:28] visual parameters you know the Min and Max values negative one to one white and green for the colors and then we're
[59:34] adding both to our map as our final two layers all the way up here at the top uh
[59:40] pre-fire and DVI and post fire and DBI and then here's just the end of the script and our disclaimer so let's look
[59:49] at our last two layers so here's before the ndvi and after you can definitely see if we zoom in here
[1:00:00] look at our Watershed of course our Watershed of Interest and we can see you can even see that
[1:00:06] burn scar and these changes in the vegetation before and after these very cool all right so this is the end of our code
[1:00:22] today so we are going back to the PowerPoint now where sativa will give us some information about Noah's Hazard
[1:00:29] mapping system feel free to take it away there sativa okay thank you Brittany for that demonstration for this portion of the
[1:00:39] training I'll briefly walk us through Noah's Hazard mapping system or HMS smoke Explorer which also has been made
[1:00:46] available as a Google Earth engine application the link to the NOAA site is here on the slide
[1:00:57] so this smoke product Maps the extent of fire related smoke plumes across the United States and adjacent areas when
[1:01:05] you enter the NOAA site there are a variety resources related to this product such as Maps data
[1:01:12] statistics statistics more about product information and other useful links according to the website the hazard mapping system was first
[1:01:21] implemented in 2003 in response to high demand for active fire and smoke information over North America the HMS outputs included active fire
[1:01:31] detection and smoke information for a 24-hour period the system combines near real-time polar and geostationary satellite observations
[1:01:41] and currently the HMS uses the two kilometer resolution data from geostationary satellites goes 16 East and go 17 West 375 meter resolution
[1:01:54] veers data and NOAA 20 polar satellite as well as the one kilometer resolution Modis data from the terror Terra polar
[1:02:03] satellite satellite complementary USGS landsat 7 onset 8 Esa Sentinel 2 Data are also used to support daily fire analyzes
[1:02:14] you can find details about the data under product information hms's fire detection information is published online using the HMS data
[1:02:24] mapping interface and made available in GIS friendly formats such as KML and shapefiles shapefiles the website provides the most recent HMS
[1:02:33] analysis and so feel free to explore the interface for yourself by adjusting the date of interest and getting more
[1:02:41] information on the layers available so here is just an example of that interface on the NOAA website itself
[1:02:53] and you can click here to adjust the parameters parameters so I'm going to hop back on to the
[1:03:02] PowerPoint for a second because we are actually going to return to a Google Earth engine app version of the HMS
[1:03:11] system and walk through a short demonstration demonstration focusing on the Woolsey fire okay so here we have the HMS smoke
[1:03:28] Explorer as an earth engine app um we have a couple of links here at the very top data and info will take you
[1:03:35] back to that um page we were just on from NOAA itself and then there's also a link here to the
[1:03:42] code that you can choose to incorporate in your own analyzes in the future I just wanted to give credit where it's
[1:03:49] due and show um where that product was developed so we are able to use this user-friendly tool and
[1:04:00] adjust for four input parameters we have The View mode which allows us to go by day by year or summary we have our
[1:04:09] select year select date sections as well as the satellite and in order to look more closely at the Wooly fire we're
[1:04:19] going to adjust our date we're going to keep it by day we're going to go to 2018
[1:04:24] and we're going to go to November ninth of that year we're also going to adjust our satellite
[1:04:36] to Goes West and select the analysis will populate and you can scroll down to view the legend here on
[1:04:48] the left you can see the extent and density of smoke blooms observed from the satellite images um and the noaa's HMS analysts spatially
[1:04:58] aggregate aggregate this data by smoke density categories all down you'll see right now we're displaying for smoke
[1:05:08] we can just let that on and off able to change the transparency there we also have active fires which are
[1:05:19] detected by motifs and displayed by red dots on the map again if you click on and off for those
[1:05:26] you can also add in aerosol Optical depth as a layer so we have either for Modis Terra Aqua we have data for the
[1:05:37] multi-angle implementation of atmospheric correction product that's the n-a-i-a-c right here foreign foreign as well as the Copernicus atmosphere
[1:05:52] monitoring service from the European Center for medium range weather forecast and this is at 550 nanometers cams right here
[1:06:10] okay so there is also surface particulate matter 2.5 available from the same provider with daily average particular matter concentrations and
[1:06:20] micrograms per meter cubed and you could find this data on the Google Earth engine data catalog lastly there is a Time series chart
[1:06:35] produced of smoke plumes for the year of Interest you can filter by density category and also download
[1:06:51] okay and you're also able to get more information under the smoke text description where you get a descriptive text narrative for smoke
[1:07:04] and dust observed in the satellite imagery so it has more about the narrative there great great all right so you can zoom in closer to
[1:07:21] where the woolly fire was taking place and I find it helpful to zoom in and out regularly to connect the specific area
[1:07:31] of interest to Regional Trends and as you notice there's um another fire occurring in the same time period
[1:07:41] and I just kind of want to show you know if you click through dates what excuse me
[1:07:51] can rerun the analysis and observe the differences and Trends over time you can also plot the go 17 West RGB
[1:08:10] images on this map but this is only possible for days after December 4th 2018. so right now
[1:08:19] um we are unable to do that but if we are looking at a different fire with um times after that period we can adjust
[1:08:29] and you know there's different ways to sort of observe from that to you know get a look that is most
[1:08:37] helpful and useful for you all right so that's just a quick overview and we're going to pass it back
[1:08:44] to Brittany to close out our session thank you uh thank you sativa and thank you to everyone here who attended this session
[1:08:54] and all the other sessions throughout this past week we're going to wrap up this session really quick with a summary
[1:09:02] some resources and contact information before we begin the Q a portion so to summarize this final session three
[1:09:10] today we learned about monitoring changes in NBR and dnbr and how they can help identify the extent and the
[1:09:19] severity of wildfires we learned about land cover types in human population data and how that can be used to
[1:09:25] estimate the affected population from a natural Hazard and then we learned about data sources such as the Bears Day Night
[1:09:32] band we learned about firms and even more and how they can be used to further understand fire extent and the affected
[1:09:40] population within a study area and now to summarize the complete training for assessing the impacts of fires on Watershed Health in sessions
[1:09:51] one and session three today we used Google Earth engine and we learned that it can be used to delineate river basins
[1:09:57] and sub basins for a watershed of Interest we learned to calculate anomalies in biophysical and meteorological conditions and we even
[1:10:06] learned to map burn severity and data sets relevant to post-fire impacts on landscapes and populations and of course
[1:10:14] in session two we learned that SWOT can be used to develop a River Basin scale model into quantitatively constrain fire
[1:10:22] related increases in water quantity and quality parameters so this slide here is just a reminder about the homework and the certificate
[1:10:32] of completion we have one homework assignment for this webinar it opens today here the 13th and you can access it from our training
[1:10:42] webpage as a reminder the answers must be submitted via the Google form that is that link on the training webpage and
[1:10:49] that's due two weeks from today on July 27th in order to receive that certificate of completion you must have
[1:10:57] attended all three live webinars which was recorded automatically when you joined and you must complete the homework assignment by the deadline
[1:11:04] which again is just two weeks from today and you will receive a certificate via email about two months after the
[1:11:12] completion of the course our production team here works very hard to get through all the homework and all of the
[1:11:17] attendance so please uh be patient as they sort all that out before you receive it in your inbox
[1:11:25] and lastly we have um um just a couple people that we wanted to thank our team here at the ecological
[1:11:34] conservation team of course our water and disasters team and our guest speakers from session two and here is uh all of our contact
[1:11:45] information if you have further questions you can contact myself or my rset colleagues at our email addresses
[1:11:52] and as a reminder here's the course website where you can find all of the information regarding the PowerPoint the
[1:11:58] homework and other tutorials that you might be interested in as well and then we have just a few resources
[1:12:08] related to the subjects that we talked about in this session today so I highly encourage you to use them to learn more
[1:12:14] about these topics and explore a bit deeper thank you again and at this time we will begin the question and answer portion of
[1:12:23] our session right so throughout the training today we have been compiling the questions that were added to the questions Tab and
[1:12:37] we've been attempting to answer them here and we're joined today by our various organizers for this training
[1:12:43] series we've been trying to answer them as they come in so we'll go through some questions now but if we don't get
[1:12:49] through all of the questions we have here today we're also going to post this q a document on the training website in
[1:12:56] a few days so you can always check back and look at some answers there later so with that being said we can jump into
[1:13:04] question one uh has anyone examined the progress of a fire as an event progresses over time with the goal of predicting where if
[1:13:14] fire will move next clearly wind if present will be a factor but topography Fuel and other factors
[1:13:21] are also important um to answer your question yes there are many different programs out there and researchers studying how various
[1:13:29] perimeters affect fire spread but we've linked a couple that are some NASA supported programs that we definitely
[1:13:35] encourage you to look at but that is definitely a very interesting and exciting Field of Fire research that's
[1:13:41] very active that you can definitely look into and do some research on all right so question two do we have a
[1:13:52] script to calculate SPI in GE uh yes so session one of this training explains what a standard precipitation index is
[1:14:02] and how to create your own in Google Earth engine and you can access all of the sessional materials and information
[1:14:07] right on the training website and then you can access the code from that uh training as well and the SPI information
[1:14:16] uh starts at about online 71 in that code so feel free to check that out all right so for question three what is
[1:14:29] an an rdnbr and that is a great question so a rdn VR is a relative difference to
[1:14:38] normalized burn ratio and I have a quick definition that I got online from the uh uh let me check uh the monitoring Trends in
[1:14:52] Burn severity website and uh we didn't calculate that today but it's a normalized version of the dnbr that we did calculate so it's sort
[1:15:03] of removing that biasing effect so in our dnbr that we calculated today that was just pre-fire NBR subtracting the
[1:15:12] post-fire NVR and the algorithm for an rdnbr is right here and so I have a source to that uh
[1:15:20] original website I just mentioned as well as the actual publication that discusses using an rtnbr in fire
[1:15:28] research so definitely check those out as well okay okay moving on to question four if we mask
[1:15:40] out the Cloudy pixels and replace them with other pixels doesn't it affect the accuracy of the work and in a way yeah
[1:15:49] it can definitely uh it depends on the amount of time that you're using for your start and end dates for your
[1:15:55] imagery I think that's going to make the biggest impact so if you look at our pre-fire imagery those start and end
[1:16:01] dates at the top of the code for session three you see that the dates are a full
[1:16:05] year before that fire and you can see in those Cloud free images when you you know bring that first layer up on the
[1:16:11] map map that there aren't any missing pixels because we have all of that data right all of those images over that full
[1:16:19] course of the year but then if you look at our post fire imagery we're only using about three months uh after the
[1:16:26] Woolsey fire ended and you can see in those layers uh that there aren't any uh there are a couple places that
[1:16:33] weren't Cloud free and those pixels are empty you can see right through them to the base map and
[1:16:39] if we wanted pixels over the entire study area we could you know expand those start and end dates but then we'd
[1:16:46] be moving further and further from when the actual Woolsey fire started right and that would start to affect things
[1:16:52] like you know how the vegetation was burnt the burnt similarity and you know moving further and further even if some
[1:16:58] of the vegetation is going back things like that so that would alter you know on an individual pixel basis with the
[1:17:04] actual date of that imagery in the data is would any of our other panelists look to add anything before I move on to the
[1:17:15] next question okay maybe not all right so moving on to question five if a fire occurred in an area of
[1:17:33] frequent cloud coverage is there a way of doing post-fire analysis using SAR instead uh definitely there are several
[1:17:41] articles and Publications and research online that uses SAR for fire analysis I also include some links to a previous
[1:17:48] Arts of training that discussed using SAR for Forest monitoring as well as another rset training that discussed using group
[1:17:57] observations for pre and post fire monitoring and in that lesson we don't use SAR directly but it is discussed and
[1:18:04] it provides link to it links to it in Google retention so feel free to check all those out and get
[1:18:10] started all right question six are the burn severity classification classes defined in literature or do you have to adjust them
[1:18:28] to the individual fire so there's a lot of literature that discusses burn severity classes and how to best Define them that's a really big
[1:18:38] topic so for this session we followed a specific publication uh done by USGS and it was recommended also in the unspider
[1:18:47] burn severity mapping lesson that we mentioned mentioned and so it's the link to that publication itself is actually in the slides I think
[1:18:54] on the burn severity slide so you can read that there and you know there are a bunch of different ways people
[1:19:01] feel that there are good ways to monitor burn severity and Define the thresholds for the severities themselves and uh the
[1:19:10] monitoring Trends inferred severity program does a really great job of reviewing all of those as well as
[1:19:15] explaining their own methods so I included a link to that as well uh would any of our other
[1:19:24] panelists like to add anything to this question okay okay so moving on to question seven how can we calculate the actual burnt
[1:19:47] area that we illustrate on the map for example a percent earned a percent area burnt moderately a percent burned area
[1:19:57] completely and so on and we uh great news we perform that calculation in Google Earth engine during part two of a
[1:20:04] previous rset lesson it's the using Earth observations for pre and post fire monitoring training and you can look at
[1:20:12] the materials and the code that we do that there uh link for it below so definitely check that out I believe
[1:20:19] you're even able to export it and whatnot so you can get get that code there okay okay question eight
[1:20:30] is there a method for assigning an uncertainty value for the hectares of affected urban area that's a great question
[1:20:41] um I don't know that off the top of my head as it is from a previous rset
[1:20:46] tutorial that was uh estimating the amount for another sort of parameter so I would have to get back to you on that
[1:20:57] um um but these estimations themselves are very very uh they're very rough you know sort of a
[1:21:06] rough estimation rather than a sure sort of estimation itself it's more of a guiding answer but that is something
[1:21:13] that I can get back to you about unless anyone else has anything they'd like to add or comment
[1:21:29] okay well then for now we can move on to question nine when choosing pre and post fire periods is it important to include
[1:21:40] the same seasons uh definitely if you see uh the you know pre-fire imagery that was a full year and we did that to
[1:21:50] cover you know the full spectrum of seasons in our study area before we did that post fire
[1:21:55] analysis as well so so anything anyone would like to add to that one before okay so this question here question 10
[1:22:14] relates to the first training so I believe that means part one given that no gamma distribution was
[1:22:21] applied to the SBI from turning one to what extent can it be used to estimate fire risk if we were going to do a
[1:22:30] write-up about it how do we justify using it without the gamma distribution would anyone from uh Session One
[1:22:39] organizers like to answer that one all right it looks like we'll have to get back to you about that one and
[1:23:06] you'll be able to find the answer in the Q a document um in a couple days when it's posted but
[1:23:12] uh for now we can go to our last question is it possible to predict fire locations based on the historical bird
[1:23:20] scars from 10 years or less hmm hmm I think that probably depends on the source of the fire itself so I don't
[1:23:29] really know the science behind that as well so that is another question that we'll have to uh
[1:23:35] get back to you on a very interesting one but that is our last question for today but please keep in mind that we will
[1:23:45] post the full q a document for the session on our training website so be uh be sure to keep an eye out for that so
[1:23:53] you can read all the answers then so uh with that being said this marks the end of the assessing the impacts of
[1:24:01] fires on Watershed Health Training series and going forward uh you can find all the lesson materials and the
[1:24:07] homework on the training web page so feel free to get started on that and thank you all again for being a part of
[1:24:15] this session thank you to all of our organizers and our production team and of course I hope you all have a very
[1:24:21] great day thanks
