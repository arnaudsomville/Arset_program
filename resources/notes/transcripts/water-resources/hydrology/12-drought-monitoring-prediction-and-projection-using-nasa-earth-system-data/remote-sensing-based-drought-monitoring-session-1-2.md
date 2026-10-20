# Remote Sensing-Based Drought Monitoring, Session 1/2

`https://www.youtube.com/watch?v=ro2UBNgjOh4` · id 169 · 1:53:40 · module 306 — Drought Monitoring, Prediction, and Projection using NASA Earth System Data

[00:02] Hello everyone thank you for joining us for our first session of our ARSET webinar series remote sensing of drought my name is Amber McCallum and I will be
[00:15] your instructor along with Amita Mehta and Cindy Schmitz this is a two session course that will take place on July 12th and July 19th there are two sessions
[00:28] each day depending on which time works best for your location session a will be at 12 to 2 p.m. Eastern and session B will be at 9:00 to 11:00 p.m. Eastern
[00:39] please make sure that you're only signed up for and attend one of these session times we've created two sessions to reach our broader international audience
[00:49] we will have lectures and demonstrations followed by exercises online and in qgis that you can follow along with each session we will have one homework
[01:03] assignment this will include a document with the steps that you must take and answers that will need to be submitted via Google Forms the link will be
[01:13] available after the final session on the website and we will post it in the chat box during the final week to receive credit for homework you must submit all
[01:22] answers via Google Forms by August 2nd to receive a certificate of completion you must attend both live webinars and complete the homework it takes some time
[01:33] to process these certificates so you can expect to receive them about two months after the completion of this course
[01:44] there are two prerequisites for this course first you should know and understand the fundamentals of remote sensing you can watch our on-demand
[01:53] course listed above which includes three one-hour recorded webinars that you can watch on your own time second you must have AQ giuse you must have q just
[02:04] downloaded and installed on your computer to complete the exercises so please ensure it's working properly prior to doing the exercises and the
[02:14] work you can find all the course materials listed on the website here this includes past recordings the presentation materials the in-class
[02:27] exercises and the link to the homework we also have the exercises and the PDF of today's presentation in the handouts portion of the GoToWebinar panel we will
[02:42] also eventually have all of our materials available in Spanish please note that in order to view the webinar recordings you must register this helps
[02:54] us keep track of who is viewing them and once you register you'll automatically be taken to Visa recording so here's an overview of the course outline this week
[03:06] we'll be providing a general overview of the use of remote sensing for drought monitoring this week we will review classification discuss how remote
[03:17] sensing can be used for drought monitoring then we'll focus specifically on precipitation and vegetation uses of drought monitoring we will provide a
[03:28] demonstration of some web-based tools and then will guide you through two in-class exercises these will focus on downloading precipitation and NDVI data
[03:39] you can follow along with us or you can go through these exercises on your own the documentation of the exercise of the exercises is located on the website and
[03:51] as I mentioned in the handouts section in the panel here so now I'll hand it over to Amita who will provide an overview of drought classification
[04:06] Thank You member and welcome everyone we will start with overview of chart classification so as you can see there are four major types of trout's
[04:22] meteorological drought agricultural drought hydrological drought and socio-economic drought and as the figure shows on the right hand side they all
[04:32] start from climate variability so all droughts actually only unit from below normal precipitation below normal compared to a long term average for
[04:41] normal precipitation which occurs over many years deviation from that decides conditions so as we see in the next slide each drought has different
[04:57] duration and different parameters are affected by the droughts so starting with nutria logical drought it is related to degree of China's as compared
[05:09] to normal precipitation and as shown here it is reduction in precipitation as well as evaporation or evapotranspiration increase so this
[05:20] really mythological drought occurs when there is net a reduction in water availability so there are two components it's usually a shorter time less it
[05:32] starts from a couple of weeks all the way to about six months it can be neurological drought it also because of the nature of the precipitation itself
[05:42] it's highly variable in space and it is region specific because normal precipitation also varies from space to space place to place very quickly so
[05:55] meteorological drought has high variability not only in space also in time from weeks to six months down after because of the meteorological drought
[06:07] and because of the unavailability of enough water agricultural drought sets up and that is due to soil water decrease and that eventually
[06:19] in vegetation stress and reduction in crop yields so agricultural drought follows meteorological drought and it can occur about six months later a few
[06:31] months later or season later after meteorological drought finally hydrological drought which occurs because again of reduction in
[06:41] precipitation but after a few months more than six months down the road there is reduction in streamflow and runoff groundwater also gets depleted and
[06:51] reserve oil and lake levels also go down wetlands are affected by it as well so hydrological drought results from long-term persistent deficit of rainfall
[07:05] and that usually occurs longer than six months after the meteorology program sets up finally impacts of these droughts are on economic social and
[07:18] ecological conditions so as the next slide shows a hydrological drought as we just talked about it's related to rain and also snow melt and snow shortfall it
[07:32] impacts surface and subsurface water supply and it it affects agricultural drought also so ecological drought on the other hand is prolonged and
[07:44] widespread deficit in naturally available water supplies and that creates multiple choices across ecosystems so wetlands are affected also
[07:54] our streamflow reduces and so because of a number of reasons ecological drought is a widespread so socio-economic drought it is impact
[08:06] of all types of droughts it is not related just to climate variability related drought conditions but also depends on population changes related to
[08:19] supply and demand the drought related to supply and demand rates of goods and economy it's affected by our agricultural ecological and hydrological
[08:31] situations and socio-economic Changez also as it depends on supply and demand of goods it depends on other factors such as transportation how goods
[08:44] are distributed so a number of factors in addition to other job conditions they cause socio-economic drought so what we are going to do in this webinar is we
[08:57] are going to look at remote sensing data which help in monitoring jobs all three types of droughts meteorological agricultural and hydrological droughts
[09:07] can be monitored by using remote sensing data directly or data derived from remote sensing so we are going to review some of those data sets and see how they
[09:19] help in monitoring doubts to start with we have a list of satellites here these are NASA satellites which are useful for drought monitoring and will start lens
[09:31] it is one mission that's the longest mission and it it was launched in 1972 and it a number of Landsat series of satellites they have been flying so the
[09:43] current version is lengths at 8 in the next two satellites tropical rainfall measuring mission or trim that was launched in November 1997 and it ended
[09:57] in April 2015 this was one of the first satellites that was dedicated for tropical rainfall measurements and GPM which is global precipitation
[10:09] measurement it's a follower mission to trim that was launched recently more recently in in February 2014 and it is likely to
[10:19] continue and extend the precipitation observations that were provided by trim the next two satellites Terra and Aqua they are also having flying for a long
[10:32] time our Terra started in 7 1999 and aqua in May 2002 these two satellites carry a number of sensors but one sensor mode is that Amber is going to talk
[10:44] about all it is used for vegetation index derivation so these two satellites have been quite useful for that the most recently launched
[10:54] satellites soil moisture active passive course map that that was launched in January 2015 this is a game dedicated for measuring our surface soil moisture
[11:06] and finally last but not the least Gravity Recovery and climate experiment or grace that satellite has been flying since March or 2002 it provides
[11:18] terrestrial water storage and it is used to derive groundwater information there is also a follow-on satellite to race is planned in the bottom you will see a
[11:32] link to our set fundamental webinars or on-demand webinars there are information about all these satellites and sensor in great detail so we recommend that you
[11:43] review this a webinar so what we want to do is look at the parameters which help in monitoring different types of droughts and here is a table that shows
[11:58] which satellites are useful for which type of chart monitoring for meteorological drought as we mentioned earlier precipitation is the most
[12:06] important parameter and trimmin GPM they provide almost continuous more than 17 to 18 years of precipitation data agricultural drought is monitored by
[12:20] using normalized difference vegetation index and evapotranspiration and these two parameters are available from Landsat Turin aqua Modi's sensor
[12:31] hydrological drought again which depletes soil moisture and groundwater can be measured from SMAP and praise satellites so we're going to focus on
[12:44] these types of droughts what we will do is we're going to look at actually do analysis of precipitation and normalized difference vegetation index from Modi's
[12:56] to analyse meteorological and agriculture drought conditions what we are also going to do is learn to visualize soil
[13:05] moisture vapor transpiration and groundwater anomalies which help in monitoring drought army personnel as well as hydrological drought so we are
[13:16] going to look at all these parameters today and then next week so what we are going to do is review well these satellites very quickly as I mentioned
[13:29] the prerequisite webinar has more details about these satellites and sensors will start with trimmin GPM which provide precipitation for drought
[13:39] monitoring so trimmin GPM both over a joint mission with japanese space agency JAXA both of them are in non polar non polar orbiting satellites as you can see
[13:55] here on the right hand side the yellow orbit are for trim and glue for GPM so they don't cover multiple Jim was focused on tropics so actual
[14:08] measurements were from 35 south to 35 Lord and the data then will obtained between fifty thousand fifty north GPM on the other hand has a better
[14:20] coverage from including mid latitude and high latitude in addition to tropics and it provides coverage from 65 south 265 not the multiple sensors are flying on your table either sorry
[14:42] present on trim trim microwave imager precipitation radar and visible an infrared scanner these three were flying on trim to measure precipitation GPM has
[14:57] sensors such as a GPM microwave imager and dual-frequency precipitation radar so these sensors are are used to derive a precipitation rates from these
[15:10] satellites so ah however it is a trim and GPM both satellites they provide 16 orbits per day and their orbital gaps in
[15:27] between so also emit microwave imagers and radar they have different stock weights because of that there are sampling issues and these satellites
[15:40] don't have a very good temper our special coverage all the time of precipitation systems that's why are these satellites are used with a suite
[15:51] of other or constellation of other satellites as shown here this is GPM core Observatory that's been flying in addition there are national national and
[16:02] international satellites which also fly microwave radiometers or imagers from the US Japan France India and European Space Agency
[16:14] these are measurements are combined with trim and GPM core observations so trim and GPM satellites are used as calibrator for all the satellites and a
[16:27] multi satellite algorithm or data are derived so these are quite useful for applications trim multi satellite precipitation analysis of tmpa that has
[16:41] been used widely for many applications including for drought monitoring as we will see in an example later there is integrated multi satellite UT falls
[16:51] for GPM so this is multi satellite product from GPM and both these products they have better spatial and temporal coverage and so they are more useful for
[17:04] applications such as drought monitoring just to provide an overview these two products so 40 MPA special resolution
[17:16] has been quarter degree by quarter degree with emerge has a higher resolution of one tenth of a degree special coverage on here is global both
[17:30] in longitude tmpa from 50 South to 50 north and GPM from 60 South to 60 North but soon it will be extended from pole to pole tmpa has temporal resolution of
[17:43] three hours and emerge has 30 minutes tmpa has been available for more than 17 years as mentioned here important thing to note here is that after 2015
[17:57] when trim satellite actually entered still a product known as tmpa is available because all the constellation satellites they provide measurements and
[18:10] they are calibrated with trim climatological or calibration and so even though trim is no longer flying tmpa like product continues from other
[18:22] satellites which are calibrated with climatological trim data and in early 2018 there will be a combined tmpa and emerge record will be made available at
[18:35] the imesh data resolution so this will provide a long term precipitation record based on remote sensing so trim and GPM data where to get them precipitation measurement mission site
[18:53] shown here is the home of all the information about Tremont GPM and so data access link here are guides you to get data all level 1 to level 3 data and
[19:08] there are multiple web tools which can be used to get the data in addition in GPM application link there is also our training link which provides
[19:20] step-by-step instruction about how to obtain GPM data and documentation and all the web tools how to use them to get the data so this is the our portal data
[19:39] access download portal and what we are going to do for this webinar is we are going to use tmpa or trim multi satellite precipitation analysis which
[19:49] also is known as 3 b 42 or is name of the algorithm and so we are going to use
[19:57] that tmpa 3 b 42 we are going to look at monthly precipitation which also is referred to as 3 B 43 occasionally so we are going to look at TN PA monthly
[20:09] precipitation and as you can see here there are multiple web tools there are multiple formats of these data available as well what we are going to do is
[20:18] written to use Giovanni this is one portal that we are going to use today's exercise to download data because it allows for spatial and temporal sub
[20:28] setting and analysis and visualization of data next satellite we want to review is soil soil moisture active passive or SMAP which was launched in January 2015
[20:43] Smith is in polar orbit unlike trim and GPM long which were low international orbit map covers from pole to pole have Swart
[20:53] width which is quite wide of about thousand kilometers and um it provides global average in two to three days so soil
[21:02] moisture over entire loop can be obtained in about two to three days our SMAP had two sensors microwave radiometer and microwave data
[21:13] unfortunately our radar is not currently working so those that are not available but soil moisture based on radiometer is available so as shown here a Radiometer
[21:29] based soil moisture it has a resolution of 36 kilometers and as we mentioned it has three day global coverage in addition there is a level 4 data which
[21:42] is root zone soil moisture in this data set snap observations or soil moisture observations at L are assimilated in a land surface model and based on the
[21:54] model n data you get influenced oil moisture so measuring a washer in the top 5 centimeters and these model data have higher resolution of 9 kilometer
[22:08] also it's available at higher temperatures in like three hour Li and even weekly so SMAP soil moisture data although the record itself is short
[22:19] it started in 2015 it helps this is high-quality soil moisture observations so it allows us to monitor soil moisture variability from week to week or from
[22:32] month to month or from season to season or annually so that is useful in monitoring hydrologic job and also how it can impact agricultural drought how
[22:45] to get us map data so SMAP data can be accessed from any IDC or national snow and ice data center once you go to this website you will see a link to soil
[22:58] moisture and once you select the link you will have all the SMAP data from radiometer and radar when it was available earlier all the level 2 to
[23:09] level 4 data including to zones for moisture they can be opted from this site so also a gray satellite also is there which provides groundwater information
[23:30] this brings us to Lancet and amber is going to talk about Landsat satellite and sensors all right Thank You Amita Landsat is probably one of the most
[23:47] popular satellites and I'm sure many of you have heard of it before the first Landsat was launched in the early 1970s most recently Landsat 8 was launched in
[23:58] February of 2013 so we have this continuous data fairly high resolution which is really useful for examining land surface changes over time all of
[24:08] these data are freely available from the USGS Landsat is a passive sensor that provides optical imagery of the globe every 16 days the figure on the bottom
[24:21] shows the difference in the band coverage between landsat's 4 through 7 and Landsat 8 it also provides information about the atmospheric window
[24:31] that allows sensors to obtain data within these spectral ranges these windows represent wavelengths at which the electromagnetic radiation will
[24:41] penetrate the Earth's atmosphere and can thus be observed by our sensors so those are indicated here in gray notice that that the band widths are similar for the
[24:54] different Landsat sensors particularly in the visible range but they're not identical so it's really important to understand these differences when
[25:04] applying the same processes to images from these two different sensors this table summer the differences in band numbers between
[25:17] Landsat 8 and landsat's 4 5 & 7 the red and near-infrared bands are the ones that are important for our normalized difference vegetation index or NDVI
[25:31] calculation which we'll talk a little bit about in more detail later as you notice here the bands are different for Landsat 8 and for the other Landsat
[25:43] sensors so it's really important to know this if you would be calculating NDVI on your own using Landsat you want to make sure you have the correct band number
[25:56] notice is another one of those key imaging instruments of NASA earth observations and Amina mentioned this earlier it's designed to measure
[26:07] large-scale global dynamics across the land oceans and atmosphere so it slot the sensor flies on two different satellites to capture imagery of the
[26:19] same area on earth at different times of day the two instruments are almost identical Tara modis passes from north to south across the equator in the
[26:30] morning and aqua modis passes from south to north across the equator in the afternoon so this allows motifs to observe any location in the mid to high
[26:41] latitudes twice daily so a daytime pass and the nighttime pass here are land products available it's much easier to call motus products by the shortened
[27:00] name as shown here in this table for example the vegetation indices products that we are going to use for this webinar series are called mod 13 this
[27:10] table also provides some of the other products that are useful for things like land management such as land cover change leaf area index primary
[27:20] production etc you can also see the that's a spatial and the temporal resolution for each of these products varies from 8 day to 16 day monthly and
[27:32] yearly global modis vegetation indices are designed to provide consistent spatial and temporal comparisons of vegetation conditions these include
[27:45] products where the NDVI is calculated and also where the Evi or the enhanced vegetation index is calculated global data are provided every 16 days either
[27:58] at 250 meter or 500 meter spatial resolution and you can obtain these as gridded products in the sinusoidal projection and you can actually as we'll
[28:09] see later change the projection of the data that you obtain from the website these products are really useful in identifying vegetation health and can
[28:19] also indicate when vegetation is stressed which may be influenced by those drought conditions the NDVI is more chlorophyll sensitive while the Evi
[28:30] is more responsive to canopy structure variations including things like the leaf area index or the canopy type one thing to think about with using the NDVI
[28:43] is that it saturates over high biomass areas so the EDI was developed to optimize that vegetation signal with improved sensitivity in high biomass
[28:53] regions so here you can see that for the Landsat data you generally have to do the NDVI calculation yourself whereas with the modis products the calculations
[29:06] are done for you and you can download them as a product so now I'll hand it back over to Amita who will discuss the drought
[29:17] monitoring with precipitation specifically so examples so we will start by looking at how to monitor it out by using
[29:31] precipitation as we mentioned meteorological drought or any type of drug it starts from deficit of precipitation so precipitation anomalies
[29:43] are used generally as drunk indicator so anomalies are actually departure from long-term climatological mean values and they indicate either dry or wet
[29:54] conditions compared to the climatological conditions so for example for any given month if you have precipitation data and you have climate
[30:05] logy for that month that difference between the two will tell you whether this particular month is wetter or drier compared to normal rainfall and that
[30:15] provides indication of drought so examples shown here on the right hand side is an accumulated precipitation from trim data we'd say and what it's
[30:28] shown here is data accumulated over California which in 2012 to 2014 and what we shown here is the anomalies as percentage of climatological mean and as
[30:43] you can see the negative values here they show deficit or drought like conditions and on entire state of California you can see negative
[30:53] anomalies ranging from 70 to almost 100% so looking at precipitation anomalies maps can quickly give you a picture of where there is our access or deficit of
[31:05] rainfall compared to climatology similarly one can look at climatology and anomalies time series over any region and that provides how drought evolved over time so in this case again
[31:24] it is trim data trim precipitation is averaged from 1998 to 2016 and for each month accumulated rainfall is shown which is
[31:38] average of these years and as you can see the rainy season is starts from about October to about March 3rd strany season and then this is the non rainy
[31:49] season over California so this is the climatology and now if you look at 2015 this is departure from climatology for that particular year and the months are
[32:01] shown here you can see that for almost entire year there were negative anomalies each month had rainfall deficit compared to climatological
[32:11] rainfall so looking at our area averaged or at any particular location looking at the time series of anomalies also can provide indication of how intensity of
[32:24] child changes as anomalies change change in amplitudes so this is how precipitation anomalies are used to quickly look at the trap conditions
[32:38] however conventional use of drought monitoring is precipitation based traffic indices and so they are derived from climatological as well as current
[32:52] precipitation data and it's a mathematical expression that really it analyzes frequency severity and duration of trout at any location and it also
[33:06] these indices on tape n precipitation anomalies from one place to another they can have very different magnitudes and sometimes are hard to interpret from one
[33:18] region going to another as they're highly variable in space drought indices can help more standardized analysis or between space and time over space in
[33:30] time so they are used and commonly used precipitation based trout indices are standardized precipitation index and Palmer drought severity index and there
[33:43] is a handbook of Tao indicators and indices which is available from world Mutual logical organization and also from Global Water partnership
[33:52] so there is more information about these indices can be found in this handbook so we will have a brief review of SPI in PDS I so summarize precipitation index
[34:09] it's again a mathematical expression of how rainfall varies and it's based on representing cumulative probability function of our precipitation and it
[34:23] really can be interpreted as number of standard deviations by which the observed rainfall anomalies they deviate from long term mean or climatology so
[34:34] SPI is primarily primarily used to characterize meteorological drought this is an example shown here which is a 30 day mean ethnos SPI from May 15 - John
[34:50] 13th of this year and as you can see the values here go from minus 3 to 3 and
[34:56] negative values they show deficit of rainfall so you can see that there is a mythological drought like conditions in Dakotas and part of Montana also part of
[35:09] Texas so wherever you have our negative SPI which represents drought like conditions or meteorological drought conditions so next so SPI has one
[35:27] advantage is that it can be averaged over different period so you can do it over a month or three months six months twelve months and even two years as
[35:39] shown here and what it shows is our drought category based on SPI average colors are shown here so not if what is provides information about short
[35:53] to medium term drought conditions so three months SPI is reflects short to medium term moisture conditions or precipitation condition
[36:04] six months SBI is more medium-term precipitation conditions and that includes more seasonal precipitation pattern nine months every SPI is
[36:16] medium-term job that potentially affects agriculture and 12 month and longer SPI they represent drought they are potentially perfect hydrology conditions
[36:26] such as streamflow and reservoir levels so by averaging this I would like here in example this is from Planet Prediction Center NOAA you can see that
[36:38] from two years to come in two recent months you can see how drought conditions have developed over takata's part of taffetas in Montana as you can
[36:48] see here based on negative SPI so it tells how recently or how persistent droughts are going on so there are strengths and limitations in using SPI
[37:05] first of all it's easy to calculate and it depends mainly on precipitation you can look at different time scales that indicate job impact on agriculture and
[37:17] hydrology and it is conventionally used by many centers and us drought mitigation center they have a program to calculate SPI which can be found at this
[37:35] link it requires a little bit of learning how to calculate SPI but it is available on the other hand there are some limitations of using SPI
[37:45] to to look at drought conditions first of all it just is based on available water supply or precipitation alone it does not take into account how
[37:57] temperature is varying or evapotranspiration is changing so it just the availability of precipitation not overall water budget is not looked
[38:07] at so water that is lost or depleted is not accounted for also SPI is sensitive to which climatological precipitation is used so
[38:20] how long the record is of climatology and so if there is no uniform climatology from place to place then SPI is not something you can compare from
[38:30] place to place for drought severity also precipitation intensity in how it affects other water budget components such as runoff streamflow and water
[38:43] availability over human region is not considered it is just the precipitation so next index which is Palmer drought severity index is a somewhat better in
[38:59] that sense that it takes care of precipitation and temperature evapotranspiration it takes care of a total water balance so Palmer in 1965
[39:11] published and provided formula to calculate this drought index and that you can see from here that PDS I for a given month M depends on P D si from
[39:26] previous months as well as there is a function that depends on moisture anomaly available based on a water balance model so and that depends on
[39:38] temperature so if not P D si it takes care of availability of precipitation as well as depletion of water due to Europa transpiration and so that is a
[39:53] standardized index that goes from minus 10 which is dry to 10 which is wet so one this is usually a long-term drought that is monitored by PD Si and it is
[40:09] usually monthly and long-term drought they are monitored by PD si so there is more information available from Climate Prediction Center NOAA not only about
[40:22] PDS I also has information about SPI as we saw earlier so again so PDS I also have strengths and limitations as we talked about it's
[40:34] more effective for a long term drought so short term drought sometimes are more effectively noted by SPI whereas long term drought are by PDS I am they take
[40:45] into account surface air temperature evapotranspiration so overall water balance is considered then takes a prior month condition into account so if there
[40:56] is a persistent drought going on so it's that also is considered however it let's multi time scale features like SPI and again PDAs I also is not easily
[41:09] comparable from one place to place there is a self calibrating PD si now available so also it assumes precipitation is instantaneously or
[41:24] immediately available so runoff into a rout of the region is not considered as well as snow and ice melt as water source is not considered in these
[41:34] indices so these are the indices still are very conventionally used by for monitoring drought conditions shown here SPI and PD si are available from NOAA
[41:52] and over tip they are also based on surface data over the u.s. in North America so that's available from a doubt monitor that we will review later as
[42:05] well operational SPR I and PDS I based on satellite data are not available however there are experimental in research and application products in one
[42:20] example is a paper given here in the reference that uses trim tmpa to calculate SPI and also psi so satellite data have been used to calculate SPI and
[42:35] PD si for um for research applications by particular researchers but operationally these data are available mainly from surface based data
[42:50] so this brings us to our next part and which is drought monitoring by using vegetation and I will hand it over to Amber
[43:01] all right Thank You Amita so now we're going to discuss the vegetation indices used for drought monitoring particularly NDVI when sunlight strikes plant leaves
[43:17] the chlorophyll in those leaves strongly absorbs the visible light the blue and the red wavelengths and the cell structure of the leaves reflects the
[43:26] green and also strongly reflects near-infrared light this is portrayed here in the graphic on the top as well as in the spectral signature curves on
[43:37] the bottom the two key wavelengths for NDVI are red and near-infrared in the graph you can see where the red is being absorbed where it has a low reflectance
[43:48] and the near-infrared is highly reflective so NDVI is really that relationship between the red and the near-infrared wavelengths the formula is
[44:03] specified here the values of NDVI for an individual pixel range from negative 1 to 1 any pixel between negative 1 and zero means no vegetation and pixels
[44:16] close to 1 indicate the highest possible density of green leaves the picture here on the right shows that healthy green vegetation absorbs most of the visible
[44:27] light and here only 8 percent is reflected and it reflects a large portion of the near-infrared light where 50% is reflected unhealthy sparse or
[44:40] senescent vegetation reflects more visible light here 30% is reflected in the on the right of the figure and it reflects less near-infrared light here
[44:55] 40% is reflected so you can see the differences in the resulting NDVI values below the image the green vegetation has a value closer to one here it's 0.72
[45:06] while the brown vegetation has a value closer to 0 here it's 0.14 NDVI anomalies are used to show current vegetation patterns relative to the
[45:19] long-term averages this can be calculated by subtracting the long-term mean from the current value and it's often done on a monthly basis for
[45:29] example if the anomaly is negative this indicates that the vegetation is less green than normal which may be indicative of drought the brown and red
[45:39] areas in these pictures from the southwestern US show a many negative anomalies for the years specified these images also help to illustrate the NDVI
[45:52] anomaly calculation in the vegetation exercises for the webinar we'll be generating the long-term NDVI average from 2001 to 2010 for the second week in
[46:04] July to do this we'll obtain one NDVI image from the same time period each year then we'll use those ten images to calculate an average independently will
[46:16] obtain the NDVI image from the second week of July 2015 finally we'll subtract that long-term average NDVI from the July 2015 image
[46:27] and this will allow us to generate those NDVI anomalies for July 2015 again in regions where there are negative anomalies in this figure here on the
[46:40] right they're shown in red so the vegetation is less healthy or drier than it is on average here's an example of an NDVI anomaly map that highlights the
[46:53] recent California drought the image here shows anomalies from January 17th to February 1st of 2014 again against the average conditions over the same time
[47:06] period from the past decade the brown colors indicate below average anomalies and the green colors indicate above average you can notice that much of the
[47:16] San Joaquin or Central Valley in the center portion of the state has below average vegetation values and this is a region where there is a
[47:27] lot of agriculture well you can also then see some green values or positive anomalies in the Sierra Nevada which is located just to the east of the valley
[47:41] that's actually a function of very low snowpack levels compared to the average so usually during this time period in the winter the vegetation is covered
[47:53] with snow thus because there's less snow the values are higher than normal and so this also can indicate the decrease in snowpack which is bad for California
[48:05] water as much of the water supply comes from that snowpack reservoir so NDVI is one of the most widely used indices in the world to identify the state of
[48:19] vegetation health it can also be used to understand phonology of plants throughout a particular year and also to track Greenup events it's also been used
[48:31] recently to improve agricultural production and to help manage water resources this can also relate to soil moisture in a region so this figure on
[48:47] the right shows an example of how NDVI can indicate drought and crop conditions which are really important for agricultural regions again the brown
[48:56] colors are below average NDVI values where the green indicates above average so this is an example of crop conditions in South Africa from 2015
[49:08] excuse me 2013 another index that you can use to calculate on your own using Landsat is the normalized difference moisture index or NDM I this highlights
[49:22] the vegetation moisture and again as I mentioned this is generally used with Landsat so the nd mi is not a product that's available via modis but you can
[49:34] do the calculation on your own using the bands of Landsat it uses the near infrared and the shortwave infrared band the shortwave
[49:44] infrared band highlights the difference between clouds ice and snow shortwave near-infrared light is reflected strongly from plants and is
[49:53] also a good indicator of vegetation moisture so if more subtle changes in vegetation can be detected it's another useful index for drought and also things
[50:04] like fire potential if the index is low where vegetation is present this could mean that the vegetation is dry remember that in order to obtain an NDVI and EMI
[50:19] image via Landsat you will need to manually do the calculation yourself as it's not a standard product that's available you also need to consider the
[50:29] differences in the band numbers between landsat's 4 through 7 and Landsat 8 the figure on the right here shows you an example of what the ending end EMI looks
[50:40] like again with brown areas indicating drier vegetation so next what we're going to do is talk about a couple of web-based route monitoring tools so
[50:58] we're going to introduce what these tools do and demonstrate some of the features these tools are based on surface observations satellite
[51:08] observations as well as models so they combine different observations and models and come up with different types of cloud monitoring capabilities the
[51:20] idea here is to present these tools which can aid in real-time drought monitoring in different locations so we're going to basically go through
[51:30] introduction of the features and then you can explore the sites on your own so the first tool that we are going to talk about is National integrated drought
[51:40] information system or nidus nigel's is really the u.s. are drought portal and we are going to demo that that has both US and global drought monitoring
[51:53] capable it provides current as well as past information about drugs and it provides surface based precipitation temperature standardized precipitation index is just we talked
[52:07] about and also Palmer drought severity index these are available through the site and there is satellite based vegetation health index also available
[52:15] and other interactive maps that quickly provide visual information of where droughts are occurring and what is the severity of this drought so we're going
[52:27] to go through demo of this site first this is the website where you will find nidus information this is the website and what we are going to look at is a
[52:41] few major features that focus on current drought or which aids in one frame job but you can see that on top you will see us drought monitoring capability and
[52:53] these maps are shown here there is also north american drought monitoring capacity and global as well so we're going to start with the US Drought
[53:04] Monitor and then subsequently what we are going to do is quickly look at North American and global droughts monitoring capabilities we will also look at some
[53:16] of the data maps and tools which are interactively available and a lot of resources are available which you can explore later on according to your
[53:26] interest and where you're located so to start with you can see that where is route this week so every time you go to this site you get weekly reports on our
[53:38] droughts so this is as of June 28th and so this is the week that is focused on
[53:43] and the drought severity is that we will see in a minute it also gives a quick information about how much power of the US eight point five percent of the lower
[53:57] 48 states are affected by drought also it is talking about how many people are affected by drought conditions so you can
[54:07] see details by US Drought Monitor you can click on the US Drought Monitor this uses again data from NOAA USGS gusoff Nebraska it also provides information
[54:23] and NASA grace data are experimentally used in deciding where the drought is occurring so once you go to this map you will see the latest week where trout is
[54:36] occurring and what you see here is different intensities of drought are indicated yellow which is T zero all the way to red is T 3 and dark red is d 4 it
[54:50] goes from anomalously try to abnormally dry to moderate drought to severe drought extreme drought and exceptional job so what you can see is during the
[55:01] last week that is abnormally dry conditions where you see yellow colors where there is red and orange colors that's where actually extreme drought is
[55:13] occurring during this week what you see here is that in California also there is logged you see S & L s represent short-term drought which is less than 6
[55:27] months in duration and that represent mostly agricultural kind of job which starts from a meteorological droughts of deficit of rainfall causes and impacts
[55:41] crops and that is reflected in short term droughts long term dogs on the other end are typically they last longer than 6 months and they represent more
[55:51] hydrology and ecology kind of harsh out situations so what you see is that there are long term droughts going on here in in the southwestern US in California I
[56:04] in short term droughts you can see in other places US Drought Monitor uses data from NOAA from USDA from National drought mitigation Center in University
[56:19] of Nebraska and also NASA grace data groundwater data are experimentally used now to monitor short-term to long-term drought
[56:30] over the US so this provides a quick information or quick look at where current drought is going on and how long it has been going on
[56:41] so if how it helps is that in your area if you're interested in understanding or studying or monitoring drought you can quickly come in look at the map see
[56:52] whether any the region where you are there may be abnormally dry condition or there is a drought going on then you can pick that area and then do analysis of
[57:05] precipitation and NDVI as we are going to do in this webinar in addition there is also your seasonal drought outlook what you see here is a model based our
[57:19] drought tendency during next three months so this start this was posted on channel fitting and it goes till September 30th
[57:30] so next three months this shows where drought would be persisting if it is brown it remains but it improves our drought removal is likely and drought
[57:42] development is likely so these are the categories and what you can see is that there is a drought would be persisting in parts of California here you can see
[57:53] that trout remains but there is some improvement going on in in Dakotas and in part of Montana and you have traveled to be more likely in May in places as
[58:07] shown here on in many locations so this is again quick outlook of where there will be drying conditions either developing or persisting or there may be
[58:21] reversal of drought so this is also a useful information to have for future another thing night is provides is drought impact report
[58:34] again based on media reports and a local information is provided we're not going to go into detail but this is just for information that information by state
[58:44] you can get information about this impact on agriculture energy plants and wildlife sighting and public health water supply and quality business and
[58:59] industry fire after any relief operations going on they're responsive instructions they are reported and so by clicking on how many reports are there
[59:11] that is depicted you can find information by counties by States by multiple states so this is something it is a impact design reported in these
[59:24] different sectors so they provide more information about if where and what kind of impacts are occurring so we go back to your nighty stage now here's the page
[59:39] so you can also explore additional information about wildfire risks and night is in your provision one last thing I want to show about this tool is
[59:51] data maps and tools and what you can see here is once you go to data maps and
[1:00:03] tools you will see current conditions then outlooks and focus that we just saw in impacts that we just saw but in addition you have soil motion
[1:00:13] information ground water surface water monitoring called crop moisture mats there is vegetation information this wire information our temperature and
[1:00:24] precipitation also anomalies and forecasts and weather and crop bulletins are available from from this there is also information about different
[1:00:39] database that you can search and optional software that really is you by 90s for deciding different types of jobs and not deciding the intensity and
[1:00:56] how data are used etc so if you look at the data but then it puts you back to
[1:01:02] yes child monitor you have evaporative stress index map which also is based on satellite data Modi's and goes both are used for deriving evapotranspiration or
[1:01:16] your relative stress index that indicates job condition and then you have drought risk Atlas that provides historical data about drought to 2012
[1:01:32] and these are based on weather station data across the u.s. so this is basically a lot of information and the reason for a quick introduction to this
[1:01:44] site is that for for us a lot of information is available if you are trying to monitor drought and really trying to get more information related
[1:01:55] to drought condition if you go back to 90s with webpage again we looked at the u.s. part we saw how data and maps and tools can
[1:02:08] be obtained similarly similar techniques are used to get North American drought monitoring as well it's the same categories as we just saw for u.s. route
[1:02:20] monitor now Mexico and Canada are also included in this monitor in quickly we want to go look at the global droughts monitor as well here when you click on
[1:02:33] the correct current conditions you will see drought conditions again it is the similar categories that yellow is where at normally try conditions are there all
[1:02:43] the way to red and dark red weather severe droughts occurring so these are drought indices are based on a global climatology called global precipitation
[1:02:55] climatology Center data which are based on rain gauge data over the world and based on that it can be seen where there is what kind of drought conditions
[1:03:07] is occurring so again the reason to look at this site is that um without even going into great detail of data and anomaly calculations for precipitation
[1:03:22] or soil moisture or vegetation you can quickly zoom in and see whether the region you are interested in is affected by any kind of child condition and based
[1:03:34] on that you can design your analysis or your decision making approach so these are some quick looking tools so so nine is we saw again to summarize it has u.s.
[1:03:47] drought monitor it has North American Drought Monitor and this global chart monitor and when you explore you will see that a number of data sets are
[1:03:56] available related to drought conditions from different sources that you can explore there are also software tools available that also you can look at so
[1:04:09] then we're going to move to next web tool so we looked at night is the next one we are going to talk about is a we saw us start monitor Doba Drought
[1:04:23] Monitor and trout output we are going to look at famine early warning system Network this website or this portal was created by a joint project between NASA
[1:04:37] NOAA USDA and USGS and it is also supported by US aid it uses motifs and NDVI and trim pacific precipitation data also in preparing some of the
[1:04:51] information that we will see on the website it provides evidence-based feminine alice's and that helps government in decision-making and relief
[1:05:01] agencies where there is humanitarian aid needed it is based it is designed specifically for Africa and it shows this is the fews net site
[1:05:14] what shows is that it what where the food insecurities are are existing so what you see is from minimal all the way to
[1:05:26] famine conditions so when you focus on East Africa you can see that there are crises in the emergency situation occurring in East African countries
[1:05:37] especially Kenya and good in Djibouti Ethiopia cane you know all these also in these southern Africa there are a number of countries where that is a crisis
[1:05:48] situation about food insecurity but food security so this again is based on surface based data evidence based data as well as remote sensing data are used
[1:06:03] in here this is a quick look at where there is famine type of situation may be occurring and so that helps relief agencies to bring food or aid where it
[1:06:17] is needed most you can have quick links to food assistance needs food prices weather hazards a situation in different
[1:06:27] countries and climate change scenario of offer for the location as well there is again information more for managing a relief activity or distributing food a
[1:06:43] where it is needed there is a new data center that one can visit and that's where you will see that food security classification data uses a special kind
[1:06:58] of algorithm and that uses trim and Modi's data in support of deciding where the Fremen type of situation may be occurring you can explore different
[1:07:11] datasets through this photos especially remote sensing imagery you can see that it accuses test mode space data available and through this
[1:07:32] you can get they have changed recently from NDVI Terra to aqua so this information you can obtain there is there are software tools as well as
[1:07:46] there are more like early-warning exploration tools that you can see by clicking on these maps and that provides information about early warning about
[1:08:02] famines so so you can explore this at your your leisure time and understand how come in early morning early warning some works
[1:08:20] so night is which is really more focused on us and global fews net focuses mostly on Africa but it provides provides an idea of how our decision making tool can
[1:08:37] work where are different types of drought data can be used so the last last tool we are going to look at is a NL - drought monitoring system and that
[1:08:52] is based on North American land data assimilation and asset has a webinar that describes land data simulation models especially NL - so you can get
[1:09:06] more details from this link here but what this experimental Drought Monitor tool does is looks at model soil moisture anomalies so energized has a
[1:09:19] number of versions one is from NOAA one from NASA there is also one from University of Princeton so different
[1:09:32] energized versions exist and they all provide information about us oil moisture anomalies so as you can see from the website here also there is a
[1:09:45] quick look at where and so there are a number of options available you have total column soil moisture anomalies you have current top 1 meter soil moisture
[1:09:57] anomalies that is past week past month so these information are available from different versions of analysis so what you can see from the anomalies here and
[1:10:10] this particular version is NASA NL does version which is mosaic and what you see from all of them is anomalies of this is a total column soil moisture and you can
[1:10:23] see that is this deficit in this particular areas especially in Dakotas where we saw from Drought Monitor there is a long-term drought going on you can
[1:10:32] quickly see that soil moisture is also depleting in this region this happens to be for July 8th but you can have this for entire monthly data you can have a
[1:10:47] weekly data as well so different versions are shown and that provide indication of where there is soil moisture depleting and that provides
[1:10:58] indication of sustained or long-term jobs so again this is a model-based experimental drought system but these models and others versions of models
[1:11:11] they assimilate satellite data into them and so they are a combination of remote sensing modeling as well as surface data so this provides again a quick look at
[1:11:23] soil moisture analysis so these three tools are represented here are just to provide you introduction to such web-based tools which can provide
[1:11:33] information about where what kind of drought might be occurring and then that aids you to focus more on zoom into the region we want to focus on and then take
[1:11:46] the digital data like we're going to do next and exercise like data or Modi space and DVI data or even model-based all mushy data to look at
[1:11:57] more in-depth conditions so with that I'm going to stop this demonstration and go back to my screen and share but I'm yet another tool with you which helps
[1:12:13] you go through the exercise 1a in which we're going to look at how to download a precipitation data to do trout analysis so okay
[1:12:27] so this in this section what we are going to do is download precipitation and NDVI data and these data will be using next week to do drought analysis
[1:12:40] so the first is exercise one a which is precipitation data access for monitoring job or California so as we talked about earlier our case study is going to be
[1:12:52] California so this exercise will download our tmpa or trim monthly precipitation analysis data using a Giovanni portal
[1:13:07] what we are going to do is using Giovanni we are going to calculate monthly precipitation climatology from tmpa which is average of precipitation
[1:13:18] from 2001 to 2010 and we are going to save those files next we are going to look at 2015 monthly data this was the drought here and so we will
[1:13:32] save that as well and then in next week's exercise we will use this data and NTP I data along with in QGIS to do trout analyzes so I want to demonstrate
[1:13:45] Giovanni how to use it and how to subset tmpa data for this analysis so this is the Giovanni web tool or portals some of you may already have used it earlier but
[1:14:03] if not this is um a data portal in which you can not only search data by keyword
[1:14:12] you can subset temporally as well as specially and there are multiple analysis and visualization options available on top
[1:14:22] you can have maps of data you can have comparison of different datasets you can have vertical profiles or you could have time series of data and there are
[1:14:34] miscellaneous like histogram or scatter plots they are also available what we are going to do here is we're going to look
[1:14:43] for tmpa which is the data set we are going to use and you can see that there
[1:14:49] are multiple options free hourly daily and monthly for drought monitoring we are going to use monthly precipitation data or precipitation rate if you go
[1:15:01] here to units you will see multiple options we want to make sure that we choose millimetre per month so that are when we download the data we get monthly
[1:15:14] accumulated rainfall for a particular month after selecting the data now we are going to select what kind of analysis we are going to do so for this
[1:15:25] we want to find climatological precipitation so we are going to choose user-defined climatology in here and once you choose that you will have
[1:15:39] option to choose either seasonal or monthly climatology we are going to use months we are going to select each n every
[1:15:49] month data and we are going to use 2001 to 2010 so we are going to use this ten
[1:16:04] year to average expectation in special selection you can have you can draw a box on a map and
[1:16:14] choose which area you want to pick but what we are going to do is we are actually entering exact latitude and longitude for California so that it is
[1:16:29] easy to look at a region here you have our west longitude and east longitude south latitude and not latitude once you enter the latitude and longitude you
[1:16:43] will click on this draw box icon and it shows you where the area view interval coordinates for is located in this case you can see California you can zoom in
[1:16:55] by using this + arrow or you can have this to change the box shape after you select everything now you can say plot data when you do that it takes time for
[1:17:17] photo to download and analyze data now you can be following along with this steps or you have this exercise online which you can do between now and next
[1:17:31] week to download the data so to save this time I have already created this climatology project and once you have once your analysis is done you will get
[1:17:45] trail maps so January map which is average between 2001 to 2010 and there is this color bar here you will see maps for January February March all the way
[1:18:00] to December and you can see rate in millimeter per month here so this is only for quick look but once you have the data once you have the maps once the
[1:18:12] analysis is done you can go to this downloads link when you go to the download link you we'll see that there are multiple
[1:18:21] options again so the files that you're committed logical flight files that you just got from Giovanni they are available e netcdf format they're
[1:18:32] available s PNG images they're also available as curative images and KMZ which you view with google earth for our analysis we are going to save all the
[1:18:46] next CDF files on so you will save them on your computer by clicking on each file one at a time you will be able to save these files to your computer now
[1:18:58] what we recommend though is that you can see the filenames are quite long it is time average trim this is the algorithm number three be 43 this is precipitation
[1:19:13] it is from 2001 to ten and four months January February March all the way to December and these are the coordinates that you selected so while these files
[1:19:26] are quite descriptive when you will do analysis next week it probably is very long so we recommend that you shorten the filenames so these are the next CDF
[1:19:39] files once you click them on you will be able to save them on your computer and what you do is create a folder this is suggestion the TMP a climatology and
[1:19:52] save all twelve months with shortened file name such as TMP a climatology or climb underscore Jan this is for January climatology you can choose the name you
[1:20:03] like but the idea is to shorten the file name so they are easy to deal with so
[1:20:09] we're going to you up between now and next week you will go through all these steps and download this climatological precipitation for California once you do
[1:20:21] that you now what you're going to do is get a 20 MPA data for 2015 which was the
[1:20:30] drought here so what you will do is go back to data selection here you have everything as it was now you have instead of 2011 2001 to 2010 you have
[1:20:45] 2015 this is a quick way to get a one-year or multi-year data and for different months once you have selected this particular year everything remains
[1:20:57] the same and you can again do plot data and that will give you plots which I have done to save time here for 2015 similar maps like you have you have for
[1:21:13] climatology you have now January of 2015 then there is February of 2015 and if the plots clearly show how precipitation changes over the year but again to
[1:21:28] download the data you will use the Downloads link and here now you have netcdf files for 2015 just single year so this is January of 2015 all the way
[1:21:41] to December of 2015 and as in the case of climatological precipitation clicking on each file you will be able to save these necks EDF files on your computer
[1:21:54] again please shorten the file name so it's easy to work with them when you are in QGIS so these next see their files they can be imported into QGIS and so
[1:22:07] that is what we are going to do next week we are going to I'll analyze these data in in QGIS so the next step is amber is going to talk about how to get
[1:22:20] NDVI data for the same years okay Thank You mamita again just bear with us for a moment while we switch
[1:22:36] over to my screen and we can go through the steps to the exercise so again just as a reminder for this portion of the webinar we're going to step through this
[1:22:57] exercise one be downloading Lotus NDVI and you can obtain that from the handouts portion here or you can find it on the website so I'm just going to go
[1:23:09] through these steps so as we discuss NDVI can be used to characterize the house of vegetation for a particular month so we're going to examine the same
[1:23:24] time period in California in 2015 so the first step of this exercise is to go to NASA Earth data and once we go there we are going to go to data discovery and
[1:23:39] then Earth data search right here when you first come to this website if you have not been previously logged into your earth data account you'll be asked
[1:23:55] to take a tour and if you if this is the first time you've ever used earth data
[1:23:59] we really recommend that you go ahead and take this tour although will not go through it today again if you're not logged in you will see this earth data
[1:24:11] login option here at the top and so if you in order to download the data that we're interested in you you need to log into your earth data account and if
[1:24:24] you've never created one you can go here to Earth data log in and create account it's free available for anyone to do so what I'm going to do here is
[1:24:34] just click on earth data log in and because I've logged in before it should automatically authenticate me and take me
[1:24:43] back here so now that I'm logged in you just see your user account icon and not the earth data login account so now we are going to search for the motifs
[1:24:53] vegetation indices the 16-day level 3 global 500 meter data so what we're going to do is in is first scroll over to California so you can do this using
[1:25:08] your mouse and then zooming in either with your mouse or with the options on the right side of the viewer here and then in the search bar up here we're
[1:25:25] just going to go ahead and type in mod 13 a1 because we know that that's the short name for the collection of interest and then you will see that the
[1:25:39] collections down here along the bottom have changed and what we're interested in here is this first one this is our 16 day 500 meter and this is the level 6
[1:25:52] product or the version 6 product excuse me so if we click on that here we've now selected that collection but now we want to only select the data available for
[1:26:06] California so if we come back to our sub setting options up here we can do this spatial subset and then click on rectangle and what we'll do is just
[1:26:20] create a small little rectangular box in California using our mouse once we do this you should automatically see a green region that indicates the swath
[1:26:34] area for this modis tile and so that should cover a large portion of California and some of the southwest now we are going to do the temporal sub
[1:26:47] setting so that we can select the data for the time period of interest so if we go to temporal we are going to click on this recurring option because
[1:26:58] we're going to obtain data from each year from 2001 to 2010 so we'll just move this time slider here over to 2001 and move this one back to 2010 and now
[1:27:14] we're going to select the second half of July so we'll click on July 17th as our start date and then for our end date it'll be July 19th so then we can click
[1:27:30] on apply filter now you will automatically see that we have 10 matching granules here below so we have one image one product for each year
[1:27:46] shown here from 2001 to 2010 so these are the data that we want and we'll just come over here to the sorry there guys we're just going to come over there then
[1:28:02] to the download data option and I'm just going to pull this back up right now so we click here on this green button in the right called download data
[1:28:24] this data access page will then give you some options for the properties that you want for the data that you're downloading so the first thing is you'll
[1:28:34] see here is that you'll have you'll have ten granules and the will leave a lot of the defaults already pre checked here the customized product default is
[1:28:45] already checked for you you want to make sure that it pre-populates your email address here because you'll be receiving an email from the lp doc notifying you
[1:28:56] when your that your data order has gone through and then when it when it is finished we're going to leave this reformat option as geo TIFF because
[1:29:06] that's what's going to be the most useful file type to use in QGIS but as you can see here you could select some different formats such as KML if you're
[1:29:18] interested in opening in Google and Google Maps well leave the spatial subsetting unchecked because we want that entire image will leave the
[1:29:30] reprojection option as geographic but again you could change this to UTM or whatever projection that you're interested in for the Advanced Settings
[1:29:40] we'll go ahead and leave those as default as well now with the band sub setting this is important too to look at the bands or the files that you're
[1:29:53] actually downloading here so if you click on this arrow next to the the product you'll see you have the option to download multiple different
[1:30:04] files and what I've done since I've already gone through this once before is I've unchecked all of these extra options so the only thing that we're
[1:30:14] interested in keeping is the 500-meter 16-day nd VI so we'll just make sure that's the only one that we have checked here then we can click on continue again
[1:30:28] you just want to double check your contact information and before you click on the submit so if everything looks good you can then
[1:30:37] click on submit and what you'll see here is that you're following collections have been processed and you see this creating and processing so you'll you'll
[1:30:48] examine the process the progress of the LP deck in processing those images and once this is completed you'll have two links here and you'll have one that's a
[1:31:01] zipped folder of all of your files that you can download that directly so I would recommend keeping this page open when you're actually going through and
[1:31:10] doing your data downloading so that for me was pretty quick you'll see here that I have now a zipped file that I can download directly from the website here
[1:31:22] and so I've actually already done that and we'll be looking at that in a moment when we open up the files into QGIS however we so we now have the 2001 to
[1:31:37] 2010 data but we want to examine the anomalies from 2015 so what we're going to do now is just go back to our Earth data search results here so that we can
[1:31:52] obtain that same image from 2015 when we click on back it should preserve all of the parameters that you have selected within the the search previously we will
[1:32:11] just need to go down here and select our collection again so if we just click on that you can see this is these were the options that we had previously the only
[1:32:21] thing we're going to change now is that date range so if we come back up to the
[1:32:25] temporal search we're going to uncheck reoccurring because we only want that one data file the start date is going to be 2015 July 17th and the end
[1:32:40] is going to be 2015 July 19th and then we click on apply filter now you should just see one matching granule here so that's our one file that we want once
[1:32:56] that is the only matching granule here again we can go in and click on download data it will take you through that same process but as we just went through
[1:33:08] we're leaving all of these as the default except for that last option for the bands or the different file types that
[1:33:17] we're downloading so we'll see one granule here customized product is checked the reformat option is geo TIFF projection option is geographic all the
[1:33:31] advanced settings remain the same and I recommend just checking to make sure that we have that one file one folder selected that we are interested in so
[1:33:43] here we have our 500-meter 16-day and DVI and then again we can click on continue double check our information here and then click on submit again
[1:34:00] it'll create that link for you then so that takes us through part one of the downloading the modus NDVI imagery and just as a double check so that we we
[1:34:14] know we're good for everything that we're doing in the exercises for next week we're just going to go ahead and take a look at those files in QGIS so
[1:34:25] I'm just going to leave our website window here and also as Amita talked about with the the precipitation data when you download these motifs NDVI data
[1:34:42] you get these folders with really long names so what you'll have is you'll have some kind of numbering convention for your initial folder and then
[1:34:54] in each of those you'll have a separate folder for each modus TIF and if you if I expand this really large you can see that the file name here is really long
[1:35:06] so again all all I've done is I've copied these dot TIFF files into a separate folder and rename them with the date and then NDVI so we'll we'll take a
[1:35:19] look at this but we have two thousand one two thousand two all the way up to two thousand ten and then our 2015 and Evi again this is a optional but it
[1:35:31] helps if you're using these files later and you don't have to worry about having that really long naming convention okay so we're just going to now open up QGIS
[1:35:42] and very quickly take a look at the files to make sure they are what we want so I just have a QGIS map document open here and the first step that I'm going
[1:35:57] to do here is just go to this address tur layer button I click on that I am
[1:36:05] navigated to this folder already so it takes me directly to my NDVI folder but we could go to whatever folder you save it in on on your computer and just so
[1:36:16] that we can look at the images we're just going to select 2001 to 2010 and if you hold down the shift or ctrl if you're on a PC you can select all of the
[1:36:30] those images and add them at once otherwise you can go through the same process and add each each image individually so we're just going to
[1:36:37] click on open and now you should see all of these images displayed in your layers panel here on the left and we should kind of see an outline of that image
[1:36:50] here on the right so it looks pretty good just at first glance for those of you familiar with California we know the Bay Area is here this is a Central
[1:37:02] Valley so it looks like we're getting the data that we need and we should be ready to go for next week I just wanted to mention
[1:37:11] too that you might notice that the values for the NDVI images here on the left are not values between negative 1 and 1 and this is a step that we will do
[1:37:27] in next week's exercise where we we have to rescale the motifs images so no need to worry that those values seem a little off at the moment we'll we'll deal with
[1:37:39] that next week's exercise one recommendation that I always make when when working in QGIS or ArcGIS or any kind of software like this is saving
[1:37:50] you're saving your files pretty regularly so we can just come up here to project and then save as and you can save it as NDVI week 1 or whatever you
[1:38:02] would like and you can use this map again for next week or you can just go ahead and and restart that process of adding the imagery in really this was
[1:38:12] just as a double check to make sure we're getting the right data that we need for next week so that concludes this part of the week one exercise for
[1:38:23] downloading the modus NDVI imagery again it's important for you to do this step first and that's why we had you downloading the data in week one so that
[1:38:34] you can use it for the week 2 exercise so for next week well we'll scale the modus data will will display the data with a color ramp and will calculate the
[1:38:45] long-term NDVI average and then the anomaly for 2015 here great so it looks like we have quite a few minutes now to answer any questions that
[1:39:00] you all may have so I'm just going to go ahead and pull up our presentation again so just bear with me for for a moment here so thank you all for joining us
[1:39:20] today we will all stay on for another about 20 minutes and answer some questions that you may have as a reminder next week same time we will be
[1:39:31] really diving into the drought monitoring analysis and the applications and it'll be more focused on working through these exercises and talking
[1:39:40] about how to actually then calculate these anomalies for both the precipitation as well as the vegetation indices so many of you have been doing
[1:39:52] this already but if you have any questions you can type them into the chat into the question box excuse me you can also type your name location
[1:40:00] organization email if you want to connect with your fellow remote sensing professional so if you do want to connect currently we have we ask that
[1:40:11] you keep contact keep a list of those contacts as they're showing up in in the cuit in the questions box but we might have a different option for further
[1:40:26] later on webinars where we have a list for you but currently it's up to you all to connect with each other so I will go ahead and just pause here for a moment
[1:40:41] and a meet and I can and can answer any of your questions so thanks again I said I saw a couple of questions earlier on one was are these data
[1:40:59] available everywhere and freely so yes they are these are all freely available data second question I had seen was comparison between T and P and I
[1:41:09] marjoram and GPM so yes preliminary comparison has been done but as you know GPM was recently launched in 2015 so the algorithms are still they
[1:41:22] were still being developed and now there is the current version for is operational so when the algorithms are evolving um although it's compared with
[1:41:35] trim just to see how how where the values fall it's not the final comparison so when in early 2018 when Jim tmpa and I emerged long term data
[1:41:49] come out it test at that point they will be a validated and calibrated with each other so yes there has been comparison now but more accurate answers will be
[1:42:03] available in early 2018 so there's also question if there is any exercise for today's webinar so these
[1:42:16] two exercise 1a and 1b or precipitation NDVI data download if you are able to follow along when we were doing it's great otherwise between
[1:42:27] now and 19th or next week please make sure that you download all the data and also please make sure that you have QGIS on your computer so that we can do
[1:42:39] analysis so you can follow along next week so there is a question about from agricultural point of view which indices are preferred or what kind of time frame
[1:42:56] so it yes for every cultural drought longer than six months six months to nine months is a good period to average on that's what the recommendation is
[1:43:06] from drought mitigation Center also PDS I know is a good indicator of agricultural drought so longer term drought so both SPI averaged over six to
[1:43:19] nine months and PDS I would be useful there was a question whether the exercise can be done in Spanish and yes it can be done in Spanish there will be
[1:43:30] homework posted in Spanish as well so you can do it in Spanish so there is a question here about looking at climate variability and want precipitation
[1:43:44] temperature indicators for last 30 to 40 years so satellite remote sensing data are available from precipitation data are
[1:43:54] more reliably available since shrim GPM era but there are something like global precipitation climatology project or GPC P that is available from 80s so starting
[1:44:08] from 1980 onwards so you can try that there are CPC no CDC that's the climate data center from NOAA that also has surface pay state
[1:44:22] laughs that is sometimes distributed by wmo so you can access those so there's also a question the webinar is possible to get a video so we are yes the
[1:44:41] presentation recording of the presentation will be available on our set website as soon as the webinar is done in a few days it appears in our
[1:44:51] website so you can go back and review here you're saying Giovanni you cannot find the page there's HTTPS there's s
[1:45:03] missing there then colon slash slash you honey if you go to the appropriate slide you will click the address so M bar there is a question here Cindy could you
[1:45:18] please provide some information on D si trout rod up from motors yeah thanks and I am actually not specifically familiar with that product so that might be a
[1:45:35] good question if you would like to email us we can dive more into that and get some more information for you but that's not a product I have specifically used
[1:45:46] in the past of myself so sorry we can't really answer question I can't really answer any questions on the spot about that one but I'd be happy to look into
[1:45:55] that further if you want to email me directly thank you so there's a comment and question here well about using CR u precipitation data so that is rain gauge
[1:46:09] fit based data and it's long term since 1990 or earlier so again if you are looking for satellite based data GPC P would be the one to look at that's from
[1:46:23] NASA and NOAA also has a version of that but GPC P is available since 1980 I mean I just wanted to answer the question about the modus psi product
[1:46:42] it's actually it's not a standard product available through the LP DAC it's a product that's available through the University of Montana and it's only
[1:46:54] right now it looks like it's only available through an FTP site at the University of Montana for the years 2000 to 2011 that eight-day and annual time
[1:47:08] interval so like I say it's not a standard product that's produced through the LP DAC or through through NASA so we can give you a website for that if
[1:47:19] you're interested in the in that DSi product the question is there a way to link drought to possible forest fires
[1:47:33] you um it that's a good question I mean there's a lot of reasons for forest fires that's one of the challenges in trying to determine the risk of an area
[1:47:50] to forest fire and certainly drought is one of them so a lot of people have used something like NDVI to look at anomalies or something like that to determine how
[1:48:03] much drought is occurring in an area to determine a level of fire risk but fire risk is very complicated so it can definitely be used for one factor in
[1:48:15] looking at the risk of wildfire so this is a question yes this webinar is recorded and recording will be available on asset website very soon
[1:48:34] so the question is which remote sensing data one can use for monitoring hydrological drought so soil moisture is one source of data so the NOAA
[1:48:49] experimental dot monitor if you go there it has links to go to soil moisture data especially this is for us for global soil moisture data there may be that you
[1:49:04] may use global land data as a Malaysian model and then so looking at surface and subsurface moisture anomalies soil moisture anomalies one can look at a
[1:49:16] hydrological drought also by looking at groundwater changes or depletion you can look at hydrologic travel so there is a question why is it not always possible
[1:49:33] to get imagery for Jamaica so there are a couple of reasons I can think of if you're looking at something like trim which is quarter of a degree resolution
[1:49:47] data you might have a very few weak points over Jamaica if you are looking at motifs or Landsat data if there is a lot of clouds
[1:49:59] these sensors cannot see the surface so in cloudy conditions you might not see non Jamaica at all of long lines that or notice or any optical sensors from
[1:50:13] something like trim it would be the resolution issue that you might just have a few points grid points over Jamaica so there's a question can I use
[1:50:27] NDB I to comply with SPR SPI or PT si at various time scales so yes that is
[1:50:33] possible I mean that's a somewhat of a research problem for your area that you're looking at but you should be able to have correspondence between
[1:50:46] is in precipitation and then decreasing vegetation or the other way should be able to see some relationship I'm sure it is complex it's not linear or simple
[1:50:58] it's area dependent but you should be able to to relate those two we also request that we you keep your questions to the webinar material also mostly
[1:51:15] related to drought precipitation in Divya that we have been talking about we see questions about air pollution and other if you go to our set website you
[1:51:27] can get more information about different thematic areas that are set that does training in so there is a question given the time and cost needed to download data in some
[1:51:44] countries is it permitted under the US law to need to small data DVDs um so our set is not involved in doing that and if it is the internet issue usually in each
[1:52:03] country there are some organizations I'm sure that have better internet connection if they can download the data and make small DVDs but are set or NASA
[1:52:15] cannot do it amita there's one question here and maybe this will be the last one since we're hitting the top of the hour here but the question is does the land
[1:52:28] use change influence the comparison of the ten-year average of NDVI it's a really great question and depending on the nature and the size of the land use
[1:52:40] change it certainly could influence the 10-year average of the NDVI so if you have large land-use change happening in one year or in multiple years that will
[1:52:51] of course if you're decreasing vegetation that will decrease your overall average I mean hopefully over the average of the ten years it won't
[1:52:59] make that much of a difference but it really depends on the size of the change so that's something to keep in mind when you're figuring out what that period of
[1:53:07] that average should be because the period of the average doesn't have to be ten years all right well thank you Cindy for that final question and again thank
[1:53:18] you all for being on with us today and we look forward to speaking with you all next week so please let us know if you have
[1:53:28] additional questions you can email us at the address is listed and thank you all have a good day thank you
