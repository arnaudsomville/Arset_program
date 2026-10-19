# Spectral Indices for Land and Aquatic Applications, Part 3

`https://www.youtube.com/watch?v=RkyhBnZyyqc` · id 55 · 1:02:35 · module 3 — 080-spectral-indices-for-land-and-aquatic-applications

[00:03] hello everyone and welcome to the third and final session for the spectral indices for land and Aquatic
[00:09] applications training this session will provide an overview of common spectral indices used for land applications we'll start with an
[00:20] overview of this training as a whole and review the purpose of the training the learning objectives and the
[00:27] prerequisites during this training we aim to provide an overview of commonly used spectral indices for aquatic and
[00:34] land applications we will discuss examples of spectral indices calculations with diverse sensors including lat 9 Sentinel 2 and the
[00:42] harmonized lat Sentinel 2 data sets for each session we also have demonstrations of Performing index calculations using
[00:50] Google or engion we hope by the end of this training you will be able to recognize commonly used spectral indices in land
[00:59] and Aquatic environments distinguish between spectral indices to select those best suited for a given land or aquatic
[01:06] system of Interest compute spectral index index calculations over appropriate areas of interest and acquire spectral index products from a
[01:16] variety of sources our only prerequisite for this training is the fundamentals of remote sensing which is linked here or
[01:25] equivalent equivalent experience the four of us here are aret eological conservation team and we are your Trainers for this
[01:35] series so for the past two sessions we focused on an overview of spectral indices and then spectral indices for
[01:43] aquatic applications and this session today is focused on spectral indices for land applications as a reminder the
[01:50] homework opens today on the trainning web page and is due in three weeks on November 23rd the objectives for this session
[02:00] today are to recall the main Concepts and determine the applications of the enhanced vegetation index the soil
[02:07] adjusted vegetation index and the normalized burn ratio we will also calculate evi Sai and NBR over regions
[02:15] of interest in Google Earth engine and we will also discuss NASA developed use cases for land indices before we jump in let's start by
[02:25] reviewing a bit of Knowledge from the previous two sessions so spectral IND are simple band ratios that highlight a
[02:32] specific process or property on the land or aquatic surface and the normalized difference vegetation index also known
[02:39] as ndbi is one of the most used indices for analyzing vegetation health and remote sensing reflectance is
[02:47] the fundamental remote sensing quantity from which most ocean color products are derived for example chlorophyll particulate in organic carbon light
[02:56] absorption by cdom suspended sediments and more and as a reminder if you have any questions throughout the session today
[03:05] you can type them into the questions box and we will do our best to address them at the end of the presentation we will
[03:11] also answer any remaining questions in the Q&A document which will be posted to the training website about a week after
[03:17] this training ends okay so let's start with some spectral indices for land applications the first index we will review is the
[03:28] normalized burn ratio otherwise known as NBR here we see that we can use the reflected properties from satellite
[03:37] imagery to identify healthy vegetation versus burned areas in healthy vegetation there is reflectance in the green and near infrared portions of the
[03:46] electromagnetic spectrum so that's why we see healthy vegetation is green when we compare the healthy vegetation spectral signature to those of burned
[03:55] areas we notice some Stark differences you can see this pretty clearly for the spectral signature curves of low
[04:01] moderate and high burn severity where healthy vegetation has this large peak in the near infrared bare soil and
[04:08] burned areas have much lower peaks in the near infrared and in the case of high severity burned areas there's much
[04:14] less response in the near infrared you can see that healthy vegetation has low reflectance in the short wave infrared
[04:20] but burned areas have high reflectance in this wavelength with these space spectral characteristics we can identify burned areas and distinguish it from
[04:29] healthy vegetation to take advantage of this difference in spectral response between healthy vegetation and burned area we
[04:38] use the normalized burn ratio or NBR to map postfire conditions NBR uses remote sensing data at the near infrared and
[04:47] shortwave infrared to map burned areas and ultimately assess burn severity you can see how this calculation is
[04:53] completed here on the right similar to ndbi NBR is a unitless value from -1 to 1 a high NBR value that
[05:04] is closer to one indicates healthy vegetation while a low value that's closer to negative one indicates recently burned areas in bare ground NBR
[05:13] is a commonly used metric for identifying areas where vegetation was recently burned due to fire here you can
[05:19] see an example of NBR in action these images on the left show pre during and post fire NBR from the mosina complex
[05:28] fire the burning he California in 2018 the area in red outlines the total area impacted by the
[05:36] fire NBR is also critical to burn severity estimates to estimate severity We compare NBR pre and postfire using
[05:44] the differ normalized burn Ratio or dnbr here we have a basic run through of how it works so we calculate the NBR
[05:53] prior to a fire and then after a fire and we take the difference between those images you'll notice that the dnbr is
[06:00] calculated by subtracting postfire NBR from the pre-fire NBR and once dnbr is calculated an analyst will need to
[06:08] threshold the dnbr values into classes of low moderate and high burn severity to produce a map that looks like this
[06:16] one on the right with the highest burn severity burn severity areas mapped in red there are suggested threshold values
[06:24] for burn severity thresholding and using this approach we can identify the severity of a fire here is an example of how NBR was
[06:35] used by NASA develops fall 2021 Southern Wyoming ecological forecasting team this team monitored cheat grass in Southern
[06:43] Wyoming and Northern Colorado to inform management efforts post Mullen fire Che grass is a concern for the community
[06:50] because it may easily invade disturb soils in a postfire environment it creates a positive feedback loop where
[06:56] fire has the potential to create more cheat grass habitat T and sheep has the potential to serve as fire Fuel and
[07:02] increase the frequency intensity and size of fires here we see that the team used both NBR and dnbr to analyze the
[07:10] impact of the Mullen fire the team derived NBR raster values from June 2020 pre-fire imagery and June 20 2021
[07:19] postfire imagery using the near infrared and shortwave infrared bands you can see the pre and postfire NBR is the middle
[07:27] images on the top and the bottom they then calculated the dnbr using the pre and post fire rasters and that is
[07:35] the image furthest on the right here we can see that the team created a burn severity map showing a
[07:43] dnbr on a continuous scale they also performed analys analysis on sheet grass percent cover at 150 field plots and
[07:53] dnbr values at the plot locations to analyze the relationship between the two two next we have the soil adjusted
[08:03] vegetation index also known as Sai the soil adjusted vegetation index or known as Savi minimizes the influence
[08:16] of bare or nearly bare ground when trying to assess vegetation this index could be used in semi arid and Aid
[08:23] regions like the southwestern United States for example or any place there's greater bear ground for soil cover in
[08:30] relation to the vegetation here's the near infrared and red bands are still used but a correction factor is applied the soil
[08:39] brightness correction factor known as L is defined as 0.5 to accommodate most land cover types an sapi ranges from- 1
[08:48] to one with low values corresponding to a small amount for a small cover of green vegetation in the
[08:56] area here we have an example of how SA was used by NASA develops fall 2021 Bhutan agriculture team the team
[09:05] developed a crop mask for rice and created a data collection protocol here we have a chart of the methodology for
[09:12] the project the rice points for the data were provided by the end user the Department of Agriculture and also
[09:18] collected using Google Earth engine satellite view and used as input data for the project these data were then imported
[09:26] into the collect Earth online also known as C o platform and used to develop 30 meter plots with 25 gritted samples to
[09:34] be classified manually into agriculture non-agriculture rice and non- rice for the data processing and Analysis the input data from CEO was reported into
[09:44] Google Earth engine where the team computed the various indices to Aid in the classification by the random forest
[09:50] model to distinguish between areas with rice and without rice these indices included the normalized difference vitation index the normalized difference
[10:00] water index the normalized difference moisture index and the soil adjusted vegetation index and these were computed using lat 8
[10:08] data the final steps involved creating the crop mask for identifying rice and Bhutan using the random Force classifier
[10:15] as the primary model and a classification and regression trees also known as a part model as a baseline
[10:22] model to compare it to to analyze the results the team used collab Google Earth engine Arc Pro and Q
[10:32] for their results the team successfully developed the crop mask for rice using the random forest classifier for the
[10:38] eight districts of hutan visually the random forest model uh proved to be more accurate and precise than the cart model
[10:45] as the result was more robust using the random forest classifier and the random forest model gave equal level of
[10:52] importance between the various indices which used Optical indices polarization indices and tassled cap sta statistically the random forest model
[11:00] was 91.8% accurate while on the other hand the C model was only 82.9% accurate the differences between the statistical
[11:08] values could be explained by various errors and uncertainties and now our third and final index we will discuss today is the
[11:18] enhanced vegetation index also called the evi evi is another measure of vegetation health and it can be used in place of
[11:29] ndvi to examine vegetation greenness as it is more sensitive in areas with dense vegetation it is particularly useful in
[11:38] regions with high biomass because the ndvi can oversaturate or hit a maximum value in these regions whereas the evi
[11:45] has a higher threshold and I can identify more subtle differences in these regions the formula here on the
[11:51] left shows how evi is calculated you can see that it uses the near infrared red and blue bands and how the atmosphere
[11:59] adjustment also known as C adjusts for canopy background in some atmospheric conditions and here is an example of how
[12:09] NASA develops spring 2020 Costa Rica and Panama ecological forecasting 2 Team used evi in their project so this
[12:19] project aimed to identify current and future areas environmental concern in La Amistad International Park to inform Resource Management efforts the image
[12:29] here is an example from the team's short-term Forest change tool showing the entirety of forest change in their
[12:35] studyed area between the beginning of 2016 and the end of 2017 the legends on the left labeled
[12:42] vegetation change shows the categories of tree cover loss and gain the most loss is shown in red and dark green is
[12:49] the most gain intact Forest is shown in yellow and green whereas moderate loss and Gain Is displayed the tool serves as a base line
[12:59] for the team's canopy cover calculations which eventually determined Forest change or not the team used both evi and
[13:05] Sai which best suit the tropical environments in search for Forest change so pixel Pi pixel this tool Compares it
[13:13] first to the tree cover calculation in the year 2000 to check if there was a tree there if not the tool then sees if
[13:20] there was a gain in tree since 2018 if there was a tree in 202 in the year 2000
[13:26] the team needs to make sure that for the year specified by the dates there wasn't a loss in the
[13:32] meantime the tool is then classified if a pixel has recover for that year and calculates evi for the start image and
[13:40] subtracts the pixels indices to evaluate the change this is another example of a map from the tool and it displays the forest
[13:51] change for the same period of time as the previous figure but this time we zoom in on a peninsula in southern Costa
[13:57] Rica in the Osa pinula region here we see more variation of loss display displayed in the different Hues of
[14:05] orange ranging from 0 to 80% law in this next part we will discuss the satellite needs working group The
[14:17] harmonized landat Sentinal data set and some of their upcoming indices products that you may find useful through the White House National
[14:27] Science and Technology Council us group on Earth observations the satellite needs working group partners with federal agencies to identify high
[14:36] priority sustained and unmet needs for satellite Earth observations the satellite needs working group conducts a biannual survey to formally document and
[14:45] communicate satellite Earth observing needs to NASA and other space-based Earth observation providers the satellite need survey obtains
[14:54] information about key Federal agency objectives that require the application of satellite Earth observations as well as specific measurement requirements the
[15:03] survey is conducted to identify potential data gaps in the current NASA program of record and existing data
[15:09] resources that meet agency needs these are a few examples of the satellite needs working group solutions that are
[15:16] being implemented to meet agency needs here is a list of upcoming vegetation indust these products provided by the satellite needs working
[15:25] group these products are created using the harmonized landat Sentinel data set and are expected to enter operations in
[15:33] order 3 2024 The harmonized landat Sentinel 2 also known as hls project is an extension of research conducted at
[15:46] NASA's Goddard space flight center in Green Belt Maryland that takes input data from The Joint Nasa USGS lset 8 and
[15:54] lset 9 and the esa Sentinel 2A and Sentinel 2B satellites to generate a harmonized analysis ready surface
[16:03] reflectance data product with observations every 2 to three days the hls project is a major outcome of the
[16:11] satellite needs working group assessment from 2016 in that assessment federal agencies and end users identified the need for a more frequent land satellite
[16:21] observations to track short-term changes in vegetation and other land components to support agricultural monitoring and land cover classification at moderate to
[16:31] high resolution in both the visible and thermal components of the electromagnetic spectrum spectral similarities between the landat 8
[16:40] operational land imager and the landat 9 oi2 and the Sentinel 2 multispectral instrument present an opportunity to harmonize data from the
[16:52] sensors to generate higher frequency imagery products for land surface monitoring and application here is an overview of hls it has a 2 to
[17:05] 4 day temporal resolution and a 30 m spatial spatial resolution the image on the right shows an overview of hls processing and how
[17:14] the l30 and s30 products are created at Nasa the hls algorithm is developed by the hls science team and is orted and
[17:23] operated by the inter agency implementation in advanced Concepts team also known as impact located at NASA's Marshall Space FL center in Huntsville
[17:34] Alabama the data products are archived and distributed by the LPD which is a partnership between NASA and the
[17:41] usgf coordination between these Partners on the data life cycle ensures that hls data are high quality freely available
[17:50] and accessible to end users with 2 to 3 Day latency hls is a collaborative effort between NASA godri space flight center
[18:01] impact HLF the LPD and the satellite needs working group management office here you can see what each role
[18:09] the groups have to play and here are some links to various resources related to hls you can preview
[18:17] hls data on NASA worldview and experiment with different bands in the earth observation browser you can also look at the hls s30
[18:29] and l30 Pages access data on NASA Worlds View and Earth data and even use hls products on Google Earth engine on the
[18:37] right is a tutorial for the hls superscript where you can subset pre-process and download hls data directly from the lp
[18:48] deck hls has several applications including the agricultural land use change and algorithmic assessment of cloud fresh water in one instance BBC
[18:59] reporter Virginia close reached out to the hls production team for imagery showing the impacts of rice farming on
[19:05] katabi Lake the hippo habitat in the remote region of Tanzania this imagery will likely be used in a planet Earth
[19:12] style documentary stated for release in 2025 also the hls production team gets frequent questions as to the statistical
[19:21] accuracy of the cloud and water detection algorithm for large bodies of water they're collaborating with j PL
[19:28] and the USGS on evaluating these tools here is an hls image of Gabi Lake the river that feeds it and rice farming
[19:39] happening nearby as mentioned in the previous slide at this time we will start a demonstration of calculating NBR evi and
[19:50] Savi in Google Earth engine using Sentinel 2 if you click on this link right here you should be able to access
[19:57] the code directly and I encourage everyone to follow along as I work through this demonstration all right so we are now
[20:10] starting the demo in uh Google Earth engine for part three of our spectral indices for land and Aquatic
[20:17] applications in this demo today we will be calculating the normalized burn ratio the soil adjusted vegetation index and
[20:25] the enhanced vegetation index over three different areas but we will be using Sentinel 2 to do it so if you remember
[20:32] from the last two sessions we did use sentinel 2 for some of those uh index calculations so at least the beginning
[20:40] of the script should look a little familiar until we get to the specific index calculation sections so with that being said let's
[20:48] dive in starting here on line 15 with the very start of the script we are just creating a title for the map window same
[20:56] as we did in part one and part two uh the title for it is just part three
[21:00] land indices we're looking at the uh style the font weight the font size we're keeping it pretty pretty simple
[21:08] and we're just adding that to our map again just this nice little area right here part three of land
[21:15] indices getting into part one applying a scale factor and applying the cloud mask to Sentinel 2 Data uh very similar to
[21:24] what we've done the past couple of demonstrations just work with that tensional to imagery to remove those
[21:30] clouds so that function mask S2 clouds Starts Here on line 35 we're just getting rid of cloud and Cirrus pixels
[21:39] we're setting those flags to zero indicating clear conditions here on lines 43 and 44 we are uh applying
[21:48] that uh scale factor right here dividing by 10,000 on line 46 and then at this point all done is
[21:58] create the cloud mask we do need to apply it to our data so we're going to start with importing our data the
[22:06] variable S2 Sentinel 2 I'm just going to pull up the image collection here this is the name of the image collection in
[22:14] Google or Junes that's what we're going to be working with today so here you can read all about it
[22:21] read the description look at the bands we're certainly going to be doing that for the indices later you get all the
[22:27] image prop properties and that's where you can find it we'll come back to that and here we are just filtering by the
[22:34] date uh we're just looking at July 2019 we are filtering to get the least cloudy pixels uh and then there we are applying
[22:44] that that cloud mask we created up above to remove any of the Cloudy pixels from our least cloudy imagery and then we
[22:51] were taking a median of those values which brings us to part two here online L 58 where we will be calculating
[23:00] NBR over Alberta Canada from a 2019 wildfire and we will be using that sensal 2 Data to do so so we're going to
[23:09] start by defining the region of Interest the ROI very similar processes we've done in the past couple of Indy
[23:17] calculations that we've done so here on line 61 uh our region of interest is just geometry it's this
[23:25] geometry that I created down below this bright yellow color today um that was just a square I drew over the Alberta
[23:34] Canada Alberta Canada wildfire in 2019 if you want to change the geometry to another region of interest at another
[23:42] time you can just change uh from geometry here to the shap file that you've imported a different geometry any
[23:49] of that fun stuff and it should automatically update throughout the code wherever Roi is which is helpful all right so here we are just
[24:00] clipping that uh Sentinel 2 imagery to our region of interest and we are just naming it Al Vera we are just taking
[24:10] that this yellow shape like a cookie cutter and we're cutting that Sentinal 2 imagery so we just get everything within
[24:17] this shape here which we're going to look at in a minute but here's the fun part here in
[24:22] line 66 calculating the normalized burn ratio the NBR so here we can see that NBR is calculated as near infrared minus
[24:33] shortwave infrared divided by near infrared plus shortwave infrared and here in Sentinel 2 that is band 8 for
[24:43] the near infrared and band 12 for the shortwave infrared and here on line 69 is where the calculation happens with
[24:52] the function normalized difference because it does follow that pattern of B Band 1 minus Band 2 / Band 1 plus Band 2
[25:01] as it has in a couple of our previous indices so we are just using uh a new
[25:08] variable called NBR we're taking that that little cookie cutter clip of Alberta Canada imagery and we are
[25:16] applying do normalized difference with those bands to perform that NBR calculation and here on line 70 we're
[25:23] creating the variable nbrv and we are just doing the -1 to 1 for the minimum uh minimum and maximum values and a
[25:32] pallet from white to green and then here on line 72 we using map. add layer to add the NBR to our map
[25:42] down below we are naming it fenal 2 N BR and here on line 75 we're using map.
[25:50] Center object focusing on that normalized burn ratio at the zoom level eight and that's what you can see down
[25:59] here so if you look Sentinel 2 NBR this is the layer that we're looking at right now you can see the healthy vegetation
[26:09] is a green color and you can see you really see the extent of the burned area as this wide color because it has such a
[26:16] lower vegetation value you can really see the extent of this burn here in 2019 and right now visualization is just
[26:28] from -1 to 1 but same as we have in the previous sections we are printing the minimum and maximum values in our region
[26:38] of Interest so it's not necessarily always going to uh contain the values from negative 1 all the way to one it's
[26:46] usually something within them so we are using uh the reduce region in the reducer min max on line 78
[26:58] to print the maximum values which you will see right here on the console again right here in the console tab on the
[27:05] right you can see Min and Max I'll be to Canada open it and you can see the
[27:11] maximum value is 0.998 and the minimum value is 0.888 so if we go back up to line 70
[27:25] here and we replace those values is for the men and the max like I'm going to we should have a slight Improvement
[27:38] in the visualization so instead of looking at everything from negative 1 to one we are just going to look at the
[27:44] minimum and maximum values for origin of Interest so I'm going to hit run again now that I've input the minimum and
[27:50] maximum values and it's running here we can see it's not a huge difference in visualization because the
[27:59] values are so close to negative 1 and one already but you can see a little bit better sort of variation in the burn
[28:07] itself in the surrounding vegetation so that's our NBR all right so let's move on to part three calculating Sai over in Western
[28:24] Australia with Sentinel 2 so so similar process before we are applying a cloud mask to our Sentinel 2
[28:32] collection we're naming it variable S2 collection filtering that imagery and we are mapping it and here uh we are
[28:43] defining our region of Interest we have changed our region of Interest we are no longer going to look at Canada imagery
[28:50] we are here to look at Western Australia so that's going to be our second geometry called geometry 2 which
[28:57] we'll get to look at in a moment but that is our new geometry so again if you want to perform Savi over a
[29:06] different area you would start here at geometry 2 for your specific region of Interest here on line 100 we're going to
[29:16] perform that calculation so the uh formula for Sai if you might notice is not the typical formula that we've seen
[29:28] that we've seen before with the band one minus Band 2 divided by Band 1 plus Band 2 it's a lot more complicated than that
[29:38] which means that the uh typical function we were using before do normalized difference from our previous indices
[29:46] calculation we can't use that anymore because that function that's the wrong formula so this one we have to sort of
[29:54] create we have to code by hand more by key and we're going to do that right here on line 102 by starting with a
[30:04] function so creating a function the name of the function is get saavi and then we start the function
[30:11] itself so we have a variable called Savi and here we're going to use image. expression and here is where you can
[30:20] write your own formula your own expression and that is where we're going to manually write in before formula for
[30:28] Sai you see here where it's near infrared minus red / near infrared plus red plus L if you remember L from the
[30:39] slide that atmospheric correction factor 0.5 0.5 typically and then we are multiplying that by 1+ L again and so we're working
[30:51] with bands here we're working with individual values there's a lot going on but but Google renion is our friend and
[30:59] we're using dot expression first of all just to write out that formula and we've done that so right here on line 103 and
[31:07] then from here from line 104 to 108 all we're doing is just specifying What specifically we mean when we write in
[31:17] something like n for near infared and R fored or l so we've written out this entire expression on line 103 and from here we
[31:26] just just identifying what exactly these values are so in this formula here when we say near infrared we are specifying that we
[31:37] want band B8 so we're using image. select B8 and we do that because band H is the near
[31:47] infrared band for Sentinel 2 that's the band that we want to use for this calculation and the same thing
[31:55] happens here for r we're using do select B4 for the Red Band for Sentinel 2 so we
[32:03] are specifying the specific bands that we want here in our data set for these uh bands in this formula
[32:12] in this calculation and from here if you remember L we're just using the value of 0.5 and it's not a specific band it's
[32:21] just a number so instead of saying image. select we're not selecting a band we're just letting Google ortion know
[32:28] that the value we want for L is 0.5 and then from here we just complete that function we ended here on line
[32:37] 110 and then on line 112 we're going to start to create or apply that Favi over our area so here
[32:49] we're using uh we're creating the variable called Sai and that's just our vegetation index X and what
[32:57] we're doing is we're taking that Sentinel 2 collection and we're using map get Savi so we are applying that
[33:05] Savi function from above we're using that that filtered Sentinel 2 imagery that we created right here on line 90
[33:14] and we're applying that Savi function we are calculating that we're taking the medium medium value over that date that we're working
[33:24] with so taking the median value of Sai from July 2019 and then we are clipping it using
[33:32] clip so we're clipping it to the region of interest that little square that we want our geometry from before that we've
[33:41] specified so as you can see this process uh is a little more complicated because we can't just use the normalized
[33:48] difference function but in just a couple of lines of code we have performed the same thing uh even though we had to
[33:56] manually type out and create the expression here so it can be done all right and from here we're just
[34:05] setting our visual parameters as before with the variable Sai VI and we are doing -1 to one in the palette of white
[34:13] and green as we usually do and then we are adding that to our map as a layer on line 121 map. add
[34:24] layer again we're just using sap the visualization parameter so we selected and we are naming it Sentinel 2
[34:32] sabii and then here on line4 we should uncomment this line meaning we should get rid of these two
[34:42] slashes at the beginning so you can also do that by holding down control slash on a Windows
[34:51] computer which is what I have or I believe it's command slash on a Mac or if you just want to erase you know use
[34:59] the backspace button here on my 124 you just want to make sure that map. Center object is this nice purple color so that
[35:07] way the code will recognize it and run and we've done that here so that way when I hit run up above once the code is
[35:15] UNC UNC commented I've just done you'll notice down below it has changed from Alberta Canada to our uh new region of Interest
[35:27] here let me zoom out see a bit better Western Western Australia so we did that with map.
[35:36] sensor object. sensor object tells Google engine please Zoom to this location instead of just starting from a
[35:43] worldwide view I want to go right here so we've gone straight to where Sai is our geometry to which as you can see is
[35:53] this turquoise blue color I can turn turn on and off so that's what we have and so this is our
[36:02] Savi Savi over Western Australia I'll even turn on the satellite you can change you know map to satellite here look at the
[36:12] variation in the um the values so you can see it changes quite a bit from Barren land to places
[36:23] with a lot of vegetation here we can zoom in and see that variation I can even zoom
[36:30] in a lot see some of those differences and right now these values are from -1 to 1 and what we want is to get our Min and
[36:46] Max values to calculate what the actual minimum and maximum Savi values in our area we can do that for here on the
[36:57] console Min and Max Western Australia the Min and Max values here take a bit longer to calculate just because uh the
[37:06] region that I drew the geometry that I drew is pretty large so it just took a bit longer to calculate but we do have
[37:12] those minim Max values here the maximum value is 0.813 the minimum value is 0.51 so I'm just going to copy those Val
[37:27] values and let's go to line line 118 where we set our sa so I'm going to start by replacing
[37:38] the maximum value from 1 to 0.813 and I'm going to do the same thing for the minimum
[37:46] values of netive 1 1 0.518 I'm going to hit run again and we should see a slight change in the visual
[37:56] ization here zoomed out a bit too much all right so we should see a change or an improvement in the
[38:04] visualization it should be a bit easier to see the variations between the White and the Green in the scale of vegetation
[38:11] in the area going to hit run aha I think that looks a bit better I hope you think it looks a bit better
[38:21] and you can see the darker places with more vegetation versus the the lighter places with less vegetation
[38:30] here during July 2019 all right okay and then here up in the code again we just calculating that minim Max
[38:44] which you saw right here on the console and that is our Sai over Western Australia all right our third and final
[38:55] part here part four 4 starting online 137 calculating evi over the Amazon rainforest with Sentinel 2 so same
[39:04] processes before we are applying a cloud mask to our Sentinel 2 collection we are just pulling in that Sentinel 2
[39:11] collection we're looking at July 2019 least cloudy imagery Cloud masking hopefully that process is starting to feel familiar to you and then from right
[39:25] on line 100 47 we are going to start calculating evi over the Amazon rainforest so similar to SAI if you
[39:35] remember from the slides this is not the same sort of normalized difference pattern that we're used to it has its
[39:42] own unique formula it's 2.5 time the near infrared minus the Red Band divided by near infrared plus 6 times the Red
[39:54] Band minus 7 .5 * the blue band + 1 so we definitely can't use normalized difference for that we have to same as
[40:05] we just did manually type in this uh this this formula by creating a function for it and making it an expression and that
[40:15] happens right here on line 149 so here we start with function we are naming it get evi and here's the
[40:24] expression and we're using image dot expression for our variable evi this formula for evi and same as before we
[40:33] are just writing in that formula that I just discussed this is the evi formula here and from lines 151 to
[40:41] 1555 we are just naming what we mean in these values so right now in this formula we just have 2.5 that's the
[40:50] value we want and for nir we want the near infrared band which in ericus or Sentinel 2 imagery that is band 8 so for
[41:02] here for red we're just using image. select select band8 when I say near fored in this formula I'm referring to band8 we're
[41:12] doing the same thing for red we on one 153 when I say I want red in the formula
[41:20] I am asking Google attention to select band four in Sentinal 2 using dots select band four and then finally with the blue band
[41:31] here when we use the word blue what we want is to select the band B2 so again this is all very specific
[41:41] these bands here are very specific to sensal 2 so if you want to perform an evi with another satellite or another
[41:49] sensor you might have to use the same formula up above but instead of B2 it's whatever the name of those bands are for
[41:58] the other satellite sensors so keep all of that in mind when you start to use this code on your own outside of this
[42:05] training but here we have calculated uh evi with Sentinel 2 using Band 2 4 and8 and our lovely formula right
[42:16] here all right so here on line 160 we are just defining our region of Interest again right now this is all with the
[42:25] Amazon on but if you want to change your area of interest you would do that right here on line 160 with geometry
[42:33] 3 that's just another Square I drew or more of a rectangle but if you want to change that
[42:40] uh you do it right here on line 160 and then roi3 should be your new area of
[42:45] Interest throughout the code at another time and right here on line 162 we have the variable evi so now that we've
[42:54] created the function to calculate evi we're going to apply it to that Sentinel 2 collection to that Sentinel 2 imagery
[43:02] that we created here on line 140 so here we're going to use map get evi again we're using map to perform the
[43:11] evi evi calculation that's what's happening here so we've officially applied the calculation with map and then the name
[43:20] of our function get evi and then we're taking a median of those values to compress all of that into an image
[43:26] rather than a collection of imagery we use do median to take it from a whole image collection down into a single
[43:32] image we can look at our map below so we're just taking the median there and then we are clipping it to our R of
[43:39] Interest again we're taking that cookie cutter and we're just croing out or clipping our imagery to the specific
[43:45] geometry that we want and then here on line 168 we're using the variable evi VI and we're
[43:54] using the values 1 to one and the pallet from white to green and then we add it as a map to our
[44:02] or add it as a layer to our map here on line line 171 using map. add layer which brings us
[44:09] to right here on line 174 similar to what we've been doing and what we just did get rid of those two
[44:17] slash marks uncomment it again it's either control and slash at the same time on a Windows or command slash at
[44:26] the same time on a Mac or if you want you really can just backspace those flashes away but what we want is this
[44:34] nice purple code you can see is not a comment but something that we want to run so I'm going to hit
[44:42] run and now instead of looking at Western Australia now that that's uncommented with map. Center object we
[44:51] should be able to see part of f very small part but this is part of Amazon instead of
[44:59] Australia Australia okay and so uh we just have it zoom level 11 and then this is our our
[45:09] evi so you can see if you zoom in some variation which is pretty cool to look at I
[45:21] think in the rainforest you can see in the very light areas is white those are the rivers it's water snow vegetation
[45:30] and then some darker regions but as a whole this is a pretty uniform color but again we are using
[45:41] just the uh color or of values negative 1 to one so if we print our minim Max
[45:47] values and use those instead we should see a Improvement in the visualization so we are just printing those minim Max
[45:55] values here here with this variable on line line 177 using min max over our geometry our region of interest that I
[46:05] drew drew earlier and we want it at the scale of 10 which is the scale of the bands that
[46:12] we used and the maximum number of pixels so it doesn't time out and then we print that right here to the console Min and
[46:21] Max Amazon rainforest we can see that the max is is 0.89 OR7 and more and the minimum is
[46:33] 01249 and some more so what we're going to do is replace those values where we set the visual parameters here on line
[46:42] 168 so I'm just going to copy some of these values here and I'm going to replace the value one with the actual
[46:51] maximum value of our region and I'm going to do the same thing just copying and pasting or you can even
[46:59] type it in if you want on 168 the minimum and maximum values that were printed here so I'm going to hit run
[47:08] again and we should see a slight visual change in how our imagery looks in terms of the variation
[47:19] between uh high and low vegetation you can see I can hit satellite play with how seethrough it is to see
[47:31] how the different forested regions look so evi is great over plac with a lot of biomass that Amazon reinforces a
[47:41] great example of this you can see some places that are darker and some places that are lighter and that is our evi and that
[47:53] does bring us to the end of the script so at this point we're going to go back
[47:58] to the slides and summarize the training as a whole and uh get to the Q&A portion and now to summarize the
[48:09] spectral indices for land and Aquatic applications training as a whole with multispectral imagery individual bands in a band composite can
[48:21] be transformed to get certain features and patterns to stand out better simple ra between the reflectance of the land
[48:27] surface can be used to highlight representations of round objects it's important to know the intended applications of a spectral index certain
[48:36] indices were created to analyze land areas such as ndvi evi Sai NBR and more while other indices were created to
[48:44] analyze aquatic areas such as ndti ndci fi AFI and Davi and even more in addition to calculating indices by hand
[48:56] there are also several indic products available from a variety of sources as a reminder the homework opens
[49:05] today and is open for the next 3 weeks until November 23rd you can access the homework directly from the training
[49:13] website in order to get a certificate of completion for this training you must attend all three live webinars in which
[49:20] attendance is recorded automatically complete the homework assignment by the deadline and you will receive a certificate via
[49:28] email approximately two months after the completion of the course at this time we would like to thank pontis Olson Ryan Vander Mullan
[49:40] and Lisa t for their contributions and feedback to this training if you have any questions about the training please contact us at these
[49:53] email addresses as a reminder you can follow our set on Twitter and YouTube and we also encourage you to explore our
[50:00] sister programs linked in the lower right here the develop and Sur programs the use cases we reviewed today were all
[50:06] previous developed projects here are some more linked resources that you may find useful for your own interest in research related to
[50:16] the content covered in this session thank you again for attending this training and we will now begin the
[50:23] Q&A part of today's session all right so throughout the training today we've been compiling the questions that you've all been adding to the
[50:38] questions Tab and we've been starting to answer some of them here so we'll go through some questions now up until um
[50:46] the end of our time today so I think about 10 more minutes or so but if we
[50:51] don't get through all of the questions that we have we will also post this q& a document on the training website in a
[50:57] few days where we'll be able to answer them all and clarify and you can find that uh
[51:03] there so with that being said uh we can jump in starting with question one what is the suitable threshold method for
[51:15] dnbr or dndvi so for dnbr um and NBR we have covered that in a pre previous rset training using Earth
[51:27] observations for pre- and post fire monitoring and in that training we talked about dnbr thresholding and even
[51:34] performed that in Google Earth engine so we included the link there and there are also also um for the thresholding itself we
[51:45] followed the reference proposed by the USGS which is linked here at the top of question one and uh there's also another
[51:54] instance here of alra your threshold values um and that relies on analyst interpretation so these can be modified
[52:01] based on your understanding of the particular ecosystem you're working with and most importantly the groundbased information such as the composite burn
[52:10] index so a lot of the time when uh there's different levels of burn severity researchers will go out into
[52:17] the field and collect samples to perform that analysis themselves for that thresholding in that specific area so
[52:24] you have all those different options you can look at for the dnbr I hope that's helpful all right on to question two is
[52:36] the man kendle process possible in Google Earth engine or the trend analyzing process like send slope possible with the ndvi using Google
[52:46] Earth engine and it looks like both the man kendle and these send slope processes are available within Google
[52:52] Earth engine and there's a really nice uh training developed by Google Earth engine itself called non-parametric Trend analysis that covers both of them
[53:01] and the link to that is included so you can feel free to use that if you'd like
[53:06] to use that uh check those out if you'd like to use those for Trend analysis okay question three how can we
[53:15] assume a trend in ndvi so we can observe Trends Through Time series modeling looking at something like DVI over a series of time
[53:27] to see how that changes with seasonality and whatnot we talked a little bit about that I believe in the first
[53:34] session um but I did include a link to Google Earth engines time series modeling tutorial right here so I hope that helps you sort of
[53:45] understand how you can look at a parameter like NBI over time and see how there's a trend with
[53:54] it it okay question four can you say something about different approaches to aggregating pixel level indices at
[54:06] higher levels Beyond summary statistics at a regional level for example are some indices more or less noisy or easier or
[54:15] harder to aggregate do patterns of variance imply different habitat types things of this nature all right well I think this is a
[54:25] very fun question because it sounds like you've sort of attended this introductory webinar that goes over the
[54:33] very basics of uh spectral indices and you're looking to get more information how do the indices work at different
[54:40] regions which ones are better or harder to work with um in more specific use cases perhaps um something Beyond just a
[54:51] regional regional analysis um I think there's lots of great use cases out there I know we used
[54:57] a couple use cases from develop projects here in the training um but I think the question to this sort of
[55:06] answer depends on specifically what indices you're interested in or you know which different indices you're interested in what region you're
[55:14] interested in and uh the science of looking at that specifically um I think there's some great rset trainings out there some of
[55:23] the intermediate and advanc trainings that use these indices in more complex ways that I think might help you
[55:30] understand and answer some of these questions so I can provide some links to other Advanced arsa trainings that use
[55:37] these indices that you might be able to look at uh one in sativa I don't know if
[55:42] there's anything you'd like to add for this question Brit Britney this is one I think we you put it well uh
[55:57] definitely uh uh the the kind of uh Science question that that the person uh wants to uh to answer is this prob
[56:08] critical on on this thing as you mentioned okay great um okay on to question question five what is the best product for
[56:27] monitoring the health of vegetation and can the products distinguish tree species species accurately so I said that the best
[56:36] products tend to vary based on your region of interest and the type of vegetation that you're working with as
[56:42] well as things like the spatial and temporal resolution of whatever data you're working with um but in terms of
[56:49] uh data products themselves to identify specific species the first thing that comes to mind is a the national land
[56:56] cover database as well as any other land cover data set that's available but again that does come down to the
[57:05] uh the uh resolution of maybe 30 MERS or so um if you're looking to use something like a spectral indices or something to
[57:17] distinguish tree species um I would say that again depends on the tree species itself you can sort of identify deciduous trees um
[57:29] during like winter months for example you can use things like ndvi to see how the greenness changes with
[57:35] seasonality um but for specific species I think you'd have to work with something like hyperspectral data rather
[57:42] than than multispectral um at least that's my opinion Juan sativa I don't know if there's anything you'd like to add to
[57:49] that one one this one yeah yeah I I agree probably hyperspectral would be the best method and as you mention it it will highly
[58:03] also depend on the on the spatial resolution of the of the data set and uh to see if and and also the density of uh
[58:13] of the specific uh two species I would say uh see if they if they can actually detect you know at the species level can
[58:21] be detected or not great thank you uh for question six can the products distinguish crop species I
[58:35] would say very similar to question five um depends on the data set that you're using and probably hypers spectrals
[58:42] better um definitely referring to what Juan said about the um density of the crops or trees themselves
[58:52] themselves um so yeah okay question seven is cloud masking necessary if you have selected images with cloud cover of less than
[59:06] 1% um no you don't have to mask out clouds if you have cloud-free imagery um I personally always perform a cloud mask
[59:14] since I feel I can miss cloud or Cloud shadow in an image that I just perform a
[59:19] visual check and it looks Cloud free but that's not necessary if you're using a different way to determine uh cloud
[59:27] cover and make sure that in whatever research you're doing that you just note um how you pre-process the data
[59:33] including uh including uh whether or not you perform a a cloud mask or not okay question eight is the greenest
[59:47] value or index the same as the ndvi so I believe you're asking about ndvi versus gndvi which is the green
[59:58] normalized differen vegetation index and I included a link about what gndvi is here um it's EZ's Arc Pro description of
[1:00:11] uh G ndvi and how to perform it including its calculation um but the differences are that well ndvi uses NE
[1:00:20] infrared and red band um G ndvi uses NE infrared and green and it focuses more on chlorophyll and you can sort of read
[1:00:29] that link that um Ezra uses to sort of describe like why you would use it in instances in which it's helpful so there
[1:00:37] are subtle differences and best uses for both of them personally I haven't used G and and DVI um but I hope that at least helps
[1:00:49] answer your question about whether or not they're the same thing thing okay um I guess this will be our last
[1:01:00] question because we're right at uh our time here but question nine which index has a higher accuracy for detecting
[1:01:09] irrigation irrigation areas um I don't know if you mean from the different indices that we've used for this training or if there's another
[1:01:17] indices out there for detecting irrigation areas um there are plenty plenty of indices out there so I don't
[1:01:26] want to just say off the top of my head which I think is best I'd rather look
[1:01:29] into it and provide an answer on the document document later um honor sativa I don't know if
[1:01:35] you're familiar with irrigation areas and their relevant spectral indices but I think this is uh to be
[1:01:43] determined and you can check the Q&A document later later okay uh well for the sake of time I
[1:01:58] think that was our last question but keep in mind that we will post the completed Q&A document for this session
[1:02:05] on our training website in a couple of days um but as of now this marks the end
[1:02:11] of the spectral indices for land and Aquatic applications training series and going forward you can find all the
[1:02:18] lesson materials in the homework on the training web page uh thank you all again for being a part of this session and
[1:02:25] have a wonderful day
