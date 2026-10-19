# Early and Established Applications of LIS for Drought Analysis in Operations, Part 2/3

`https://www.youtube.com/watch?v=5W_w5ZKX_BI` · id 52 · 1:39:36 · module 37 — Selecting Climate Change Projection Sets for Mitigation, Adaptation, and Risk Management Applications

[00:01] hello and welcome back to the rset training application of NASA sport land information system soil moisture data
[00:08] for drought my name is Sean McCartney and I'm an rset trainer based at NASA's Goddard space flight center in Greenbelt
[00:14] Maryland Maryland it's a pleasure to welcome you all to the second part of this three-part webinar series
[00:23] the following slides will provide an overview of the training application of NASA's sportlist soil moisture data for
[00:29] drought drought according to the World Health Organization an estimated 55 million people globally are affected by droughts
[00:37] each year traditional drought applications and indices focus on sensible weather and precipitation Trends and their impacts on the hydrologic system
[00:47] this training is focused on the introduction of the NASA land information system or Liz output of soil
[00:54] moisture at various depths for Drought analysis and monitoring soil moisture plays an important role in drought monitoring
[01:03] Liz output of soil moisture will enable a more efficient drought analysis via a gridded product at relatively high
[01:10] spatial resolution resolution as opposed to spares in situ measurements of weather parameters and even less dense soil moisture and
[01:18] vegetation Health Institute observations the spatial tracking and Analysis of soil moisture by Liz provides a unique tool for those monitoring drought
[01:27] locally compared to large-scale traditional indices forced by weather factors after participating in this three-part training a user will be able to apply
[01:39] Liz output to efficiently analyze drought over large spatial areas in conjunction with current practices and to integrate this capability with
[01:48] existing data the training learning objectives are to identify the NASA Liz Basics regarding the framework input forcing static
[01:57] Fields land surface modeling structure and output most relevant to drought summarize the derived soil moisture percentile products and how these are
[02:06] created created apply sport Liz output and or drive products to both complement existing data and overcome limitations to
[02:14] monitoring drought over large areas recognize best practices for Liz impact related to drought configure Liz output file for viewing
[02:23] within a GIS based display tool and for tailored output products and graphics the prerequisites for this three-part
[02:33] training are the fundamentals of remote sensing Session One you need to download and install qgis and all accompanying software
[02:41] you must register for a Google collab via Gmail or a Gmail enabled account and basic python experience is beneficial
[02:49] but not required over these three weeks there will be three one and a half hour sessions which
[02:57] will include presentations demonstrations and question and answer sessions sessions all materials and recordings from each session are available on the training
[03:06] web page in part two the focus will be on early and established applications of Liz for Drought analysis in operations
[03:16] following each session there will be a self-paced micro lesson which will not be graded but serve as a knowledge check
[03:23] and prepare you for the following parts of the webinar series as well as the final homework assignment
[03:28] there will be one homework assignment which we which will be posted on May 31st with a due date of June 14th a
[03:36] certificate of completion will be awarded to those who attend all live sessions and complete the homework assignment before the given due date
[03:48] foreign listed below are the trainers for today's webinar Christopher white is the application's integration meteorologist with the
[03:56] National Weather Service and the NASA sport program based in Huntsville Alabama Alabama Richard Heim is a meteorologist with
[04:04] noaa's national Center for environmental information based in Asheville North Carolina Carolina Corey Davis is an assistant State
[04:12] climatologist in North Carolina's climate office and Barrett Smith is a senior service hydrologist at the National Weather
[04:20] Service in Raleigh North Carolina the objectives for this first part for the second part of the webinar series
[04:29] are as follows by the end of part two participants will be able to summarize the derived soil moisture percentile
[04:36] products and how these are created and apply sportly's output and or drive products to both complement existing
[04:44] data and overcome limitations to monitoring drought over large areas questions are encouraged if you have any questions please put them in the
[04:55] questions box and we will address them at the end of the webinar in the order that they were received feel free to
[05:00] enter the questions as we go we will try to get to all of the questions during the question and answer session after
[05:07] the presentations have concluded if we run out of time the remainder of the questions will be answered in the Q a
[05:13] document which will be posted to the training webpage roughly one week after the training we will now go to Christopher white to
[05:22] learn about sport Liz early use and value in local operations Christopher over to you hello I'm Chris White and I'm the
[05:32] applications integration meteorologist with the National Weather Service office in Huntsville and the NASA sport program I want to thank you for your time and
[05:40] hope you find this presentation informative as a part of this NASA rset training series on the list for Drought
[05:46] course so the training objectives here today will be an introduction to the United States drought monitor process a little
[05:56] bit of an introduction to drought and drought analysis then understanding applications of soil moisture and the sport lane information system for
[06:04] Drought analysis understanding the importance of communication and the research to operations and operations to research or r202r process which really in this
[06:16] module involves the creation of the sportless soil moisture change and percentiles data and then also understanding drought analysis from some
[06:25] early use cases using soil moisture data specifically from the sport lists so a little bit about the drought
[06:33] monitor process input to the US drought monitor Hereafter usdm authors is handled each week via emails through the
[06:42] usdm email listserv who provides this input can vary from state to state and within broader regions within states it
[06:51] is often provided by a State climate office or some other designated entity that may come from multiple sources at
[06:58] the local level such as the National Weather Service offices or other agencies Regional Offices such as the
[07:04] regional climate centers or National Weather Service Regional Offices May additionally provide input as necessary also it's important that this
[07:14] information about all the usdm example Graphics you'll see in this presentation are stated here the US drop monitor is
[07:22] jointly produced by the national drought mitigation Center at the University of nebraska-lincoln the United States Department of Agriculture and the
[07:31] National Oceanic and Atmospheric Administration Administration this map and following USD and maps are courtesy of the ndmc
[07:42] so how does the usdm process work I'll speak mainly from my own experience here at the National Weather Service office
[07:49] in Huntsville each week the State climate office in Alabama sends out an email with drought designation suggestions to the usdm author and
[07:58] notifies other relevant parties in the state along with outside coordinating members in the region individuals from these various agencies or groups
[08:07] including my own can add supplemental input for their respective local areas based on their own analysis and areas of
[08:15] expertise in some states however it should be mentioned that drought analysis and suggested changes to the usdm may take place through coordinated
[08:24] routine discussions via virtual meetings at the National Weather Service level in general input will typically be provided
[08:32] directly back in the State climate office or to a higher level designee in that state or region or directly to the
[08:39] usdm author engaging in this process and upon learning about the high resolution low latency sport Lane Information Systems
[08:49] soil moisture data set in 2011 the National Weather Service office in Huntsville began incorporating these data routinely into drought analysis
[09:00] so what is drought well that can actually be complicated and there are potentially many definitions but you
[09:09] will hear elsewhere in this training series drought can be considered as some imbalance between water supply and
[09:16] demand and is dependent on the location and the time of year that is both the supply and demand of water relative to
[09:25] what is typical for that time of year and location is necessary for Drought analysis analysis this demand may not be solely due to
[09:33] human needs and activities but what is also required by the Flora and Fauna of region although some of these types of
[09:39] data can be difficult to come by nevertheless drought can be difficult to Define The Listener is encouraged to
[09:46] visit visit where they can hear more information about drought at drought.gov so now let's get into some of the
[09:57] different hydrologic components of drought analysis so just as stated water resides in different components of the hydrologic
[10:05] system such as rivers and lakes soils groundwater snow and ice and Glaciers the availability of these water sources
[10:14] can vary in importance from region to region and throughout the course of the year year for example water storage and snow and
[10:22] Glaciers can be important for Downstream locations that have access to these water sources upon some melting process
[10:29] but of course it's not important in areas that don't have access to these water sources additionally physical storage systems
[10:37] for water can respond differently to weather and environmental phenomena and inputs of water these factors can complicate the drought
[10:47] analysis process as different natural water storage systems may have varying imbalances in water supply versus demand for example soil moisture may be
[10:58] relatively high from recent rainfall but storage and lakes and reservoirs may be relatively low after a long period of
[11:05] drought thus the usdm works on a principle of convergence of evidence regarding the state of drought nevertheless this module will focus on
[11:16] water storage and soils and how this information can be an important component for Drought analysis while reasonable estimates of
[11:27] precipitation amounts are available from rain gauges and remotely sensed sources such as radar determining how soils are
[11:35] responding to these precipitation inputs is often difficult to gauge due to a lack of direct soil moisture
[11:42] observations observations after all some rain doesn't go into soils but can be immediately converted into runoff so assessing water storage and
[11:51] availability in the soil system is what is ultimately important for that component of drought analysis complicating this however is the variety
[12:00] of soil types that may exist across an area which have different characteristics regarding water infiltration and capacity
[12:08] for example clay soils have better moisture retention but slower rates of infiltration than Sandy or silty soils
[12:16] which can lead to Greater runoff under similar precipitation conditions factors such as infiltration and runoff in addition to evaporation and
[12:26] evapotranspiration add further complication to the task of properly assessing water storage in the soils fortunately the land surface model
[12:36] within the list framework can account for these variables of soil type and weather phenomena as indicated previously in situ soil
[12:46] moisture data from ground networks such as those from the USDA da scan sites shown here to the right for example can
[12:54] be spatially sparse however these data can be very valuable for assessing soil moisture at their point locations but
[13:01] also in precipitation and soil types are relatively homogeneous across an area sources of other modeled soil moisture
[13:09] from the CPC are valuable since they are in terms of ranking percentiles but data images available for the common user can
[13:16] limit effective analysis on small or sub-county scales however all of these data can be used in tandem to assess
[13:23] soil moisture and convergence of evidence from different data sets now let's take a look specifically at soil moisture as a component of drought
[13:33] analysis and the application of sport list data some advantages of the sport list over existing data led to its adoption as an
[13:44] additional tool for soil moisture analysis in the Tennessee Valley this is an example soil moisture plot as
[13:51] they appeared on the sport website during initial usage of the data which is actually similar in appearance to
[13:56] images still available today the image displayed here represents the column integrated or zero to 200 centimeter relative soil moisture over
[14:05] the southeast conus domain the image on the right depicts the zoom over the state of Alabama these and other list
[14:13] data are updated every six hours with loops of hourly images for various domains available three hourly data are distributed
[14:21] through the southern region local data manager for display enable its two workstations at National Weather Service field offices
[14:28] importantly notice that the three kilometer resolution of the imagery allows for evaluation of soil moisture on sub-county scales in this example
[14:37] notice the variability of soil moisture in the enlarged image of Coleman County Alabama Alabama this degree of resolution is especially
[14:45] useful for Drought monitoring purposes since drought designations in the U.S drop monitor can cut across county lines
[14:52] in this module we will look at a couple of cases where sportless soil moisture data were used at the Huntsville
[14:58] National Weather Service Office specifically for Drought monitoring purposes we'll also learn a little bit about the evolution of sportless output
[15:06] to provide for a more effective soil moisture and drought analysis to get a more complete picture of
[15:15] drought conditions one must determine how soils are responding to precipitation input or the lack of input as indicated earlier take this recent
[15:23] example from April 26 2023 this graphic shows the amount of precipitation that fell across the continental U.S or conus
[15:31] during the seven day period ending at 12 UTC on the 26th these precipitation data are from the multi-radar multi-sensor
[15:40] precipitation data Suite which is also the short-term precipitation forcing for the sport lists encompassing about the prior three to four days
[15:50] notice that the amount of weekly rainfall was highly variable across the conus but you will observe a gradient in
[15:56] precipitation across portions of the Southeast U.S so how would soil moisture respond to the rainfall or in areas that
[16:04] experience the lack of rainfall Let's Take a closer look at this region to observe the precipitation amounts along
[16:10] with responses to soil moisture now zoomed into the southeast conus and centered on Alabama let's take a look at
[16:18] the weekly precipitation across the region region notice that rainfall exceeded or exceeded 75 millimeters or about three
[16:27] inches in some portions of eastern Arkansas with gradually lighter amounts to the east across portions of Northern
[16:36] Alabama precipitation generally totaled around 20 to 50 millimeters or about 0.8 to 2 inches farther south in Alabama
[16:44] amounts trailed off with little to no rainfall occurring in portions of Southern Alabama and adjacent areas so how would soil moisture respond to
[16:53] the rainfall or in areas that experience the lack of rainfall now we can look at the weekly
[17:03] precipitation in the graphic on the left compared to the one week change in soil moisture in the graphic on the right and
[17:11] the soil moisture change graphic it's important to point out that soil moisture decreases are depicted in warm
[17:17] colors while soil moisture increases are depicted in cool colors such as the greens you see in this example
[17:24] first we'll consider the total column or zero to 200 centimeter relative soil moisture which is shown here during this
[17:31] period across the region soil moisture increases per the one week change data we're generally confined to areas with
[17:39] rainfall amounts upwards of around 25 millimeters or about one inch notice that precipitation did occur in some regions in which the sport list
[17:50] shows soil moisture losses over the one week period even delineating areas that had between 15 to 25 millimeters or about 0.6 to 1
[18:02] inches of rainfall as shown here we can see that soil moisture values fell in some areas over the weekly period thus
[18:10] soil moisture doesn't increase just because precipitation occurs especially when spread over a one week time period of course
[18:19] however when considering more shallow layers such as the 10 to 40 centimeter layer shown here the soil moisture
[18:26] responses are different if we look again at the 15 millimeter threshold notice that in this layer soils show
[18:34] more of a positive response to this input of precipitation which makes sense given the smaller volume of soil
[18:41] thus it can be important for the user to understand these types of differences and the relative importance of layers
[18:48] for their analysis shallower layers are more responsive to inputs of precipitation while deeper layers will have a slower response
[19:00] now let's take a look at an early case where the soil moisture products were used for Drought analysis
[19:06] during April 2012 drought conditions had gradually developed across much of Northern Alabama and by May 1st moderate
[19:13] drought conditions extended across much of the area as seen in this usdm depiction depiction abnormally dry or d0 conditions existed
[19:22] across much of the remainder of Northern Alabama Alabama for this section of the module however we're going to apply Focus mainly for
[19:29] southern portions of DeKalb County during the following week May 1st through May 8 2012 rainfall totaled around one to two inches across much of
[19:45] the region with lesser amounts of rainfall scattered in various locations including parts of northeastern Alabama however the questions remain how is soil
[19:55] moisture responding to the rainfall given factors such as evaporation and soul type and SWAT locations should I focus my
[20:05] attention a look at the list data helps to answer these questions the list graphic on the left shows the 0
[20:15] to 10 centimeter volumetric soil moisture percentage on the morning of May 8 2012. notice the relative dryness
[20:22] of 0 to 10 centimeter soil moisture mainly in southern portions of DeKalb County Alabama as highlighted by the Box
[20:30] at this point let's zoom in so that we can pay closer attention to this area the data show that soil moisture values
[20:37] there were lower than in adjacent areas to the north that already held a moderate drought designation as depicted
[20:44] in the usdm image on the right from May 1st 1st Not only was the soil moisture relatively low in the shallow zero to
[20:51] ten centimeter layer but was also low in the deeper zero to 200 centimeter layer as shown in the image now on the left
[20:59] despite the Rains of the previous week the relative soil moisture weekly difference plot indicated that soil moisture had likely decreased a few
[21:08] percent during the week with the knowledge that this is a corn producing agricultural area and this was
[21:15] a crucial period in the early stages of the Corn's development a phone call was placed to a field office agent of the
[21:22] Alabama Cooperative Extension Service the agent confirmed that soil moisture was dry for that time of year and that
[21:29] the corn crop was beginning to become adversely effective in this area offering all this information to the
[21:35] state climatologist and the usdm author the decision was made to include this area in moderate drought the next update
[21:41] valid for May 8 2012. now this may not seem like a significant use case but there are some takeaways from this
[21:50] example the three kilometer resolution of these sport lists data did allow for decision-making abilities on sub-county scales as was shown since drought
[22:04] designations can be sub-county resolution data that allow for this type of precision are preferred also the list data allowed for an
[22:12] efficient assessment of areas that were most likely being impacted by recent dry conditions essentially the data serve as
[22:20] a valuable situational awareness tool providing an important component for Drought analysis of course there are many other factors that must be properly
[22:28] incorporated into an analysis such as stream flows precipitation estimates and Reservoir levels just to name a few it
[22:36] is also important to analyze data within the context of climatology however soil moisture climatology and Associated percentiles data were not available at
[22:45] this time for the support lists thus comparison of soil moisture values across the area along with their
[22:51] corresponding drought designations provided evidence for Drought expansion in this case Additionally the all-important input from the AG extension agent's report on
[23:02] soil and crop conditions provided an important climatological context for soil moisture values nevertheless the need for climatological
[23:10] context and historical data were needed for a more thorough drought analysis within the sport list data Suite
[23:19] so it's important to take a moment here to mention the positive nature of the r2o and o2r process and how this led to
[23:27] additions to sportless Output the sport list was initially developed as a land surface data set for local
[23:34] Regional modeling efforts while the use of the data as a tool for Drought analysis came later feedback from data users for Drought
[23:43] applications indicating a desire for soil moisture change values and Graphics as we've already seen displayed in this
[23:50] module this eliminated the need for users to flip back and forth between newer and older data images as shown
[23:58] here in this example from late June 2012. 2012. since the drought monitor is updated on a weekly basis one week changes in soil
[24:08] moisture layers were requested and eventually generated but other time period changes were eventually added soil moisture change data are especially
[24:21] useful for situations where some evidence is beginning to point to a needed change in drought designations for example let's say we have a
[24:29] situation where some of the evidence was trending towards a D1 drought designation but the decision was made to
[24:34] hold off until next week's drought issuance to see if evidence from other data sources began to converge
[24:40] soil moisture change data the following week can provide for an efficient analysis about whether soil moisture values decreased further while also
[24:48] showing the magnitude of their decrease feedback from users also indicated a critical need for soil moisture percentiles data for proper drought
[25:00] analysis after all as mentioned previously drought relates to water supply versus demand based on what is typical for that place and time of year
[25:09] thus climatological context was needed with regards to soil moisture values additionally many other data tops used for Drought analysis are in terms of
[25:19] percentiles or comparisons to normal values due to this feedback the sport modeling team worked to produce a soil
[25:27] moisture climatology and percentiles data as outlined in part one of this training series although sportless soil moisture
[25:34] percentiles were not available in 2012 during our previous case the climatology that would be developed later indicated
[25:42] hindsight's support for the drought designation on May 8 2012. as shown here according to the sport list 0 to 200 centimeters soil moisture
[25:52] percentiles were around the second to fifth percentile over DeKalb County Alabama at the time after their eventual production and
[26:00] availability these data became important for Drought analysis which leads us to our next case April 2016 was the beginning of a period
[26:12] of drought that would eventually worsen across portions of the southeast through the summer and fall this is shown in
[26:19] this usdm depiction over the USDA Southeast climate Hub region notice the d0 and D1 designations in this region and locations where no
[26:29] designations were made on April 26 2016 sport lists zero to 200 centimeter relative soil moisture values range from around 40 percent and
[26:42] portions of the Piedmont and Atlantic Coastal Plain to around 50 to 60 percent across much of the Tennessee Valley
[26:49] region however put in terms of climatological percentiles what appeared to be relative low soil moisture values in the coastal plain were not actually
[26:59] very low from a climatological perspective soil moisture percentiles were low across much of the Tennessee Valley region stretching northeastward
[27:08] across the Appalachians as is shown here for this case though we're going to zoom into Alabama and surrounding areas
[27:17] taking a closer look notice the sport list was indicating 0 to 200 centimeter relative soil moisture around the 10th
[27:24] percentile in some areas of Northern Alabama with climatologically drier conditions farther to the Northeast corresponding areas in Northern Alabama
[27:33] carried a d-0 usdm designation but it's important to remember that drought is multifaceted with other important hydrologic data considerations
[27:44] additionally soil moisture is typically among the first components in the hydrologic system to experience reductions in water due to environmental
[27:52] factors such as advanced evapotranspiration relative humidity and solar insulation just to name a few while storage and water and in other
[28:02] systems such as rivers and reservoirs will typically evolve on slower time scales scales so soil moisture can be an important
[28:10] early signal about the development of drought interestingly if we look at 28-day average Stream flow percentiles which is
[28:19] commonly used as a component of drought analysis over Northern Alabama and adjacent areas we'll see that values
[28:26] were in the 25th to 75th percentile for much of the area although percentiles ranging from around the 10th to 24th
[28:33] percentile can be seen in drier areas to the north and Northeast with some indications of climatologically low
[28:40] stream flows present in Far Northeast Alabama Alabama this serves as a reminder that climatologically dry conditions will
[28:48] often manifest first in soils versus stream flows thus soil moisture can serve as an early indicator of the
[28:55] potential development of drought however it's important to learn and understand the behavior of moisture increases and decreases in the hydrologic components
[29:04] for your specific areas of Interest as relatively dry weather lingered then into May soil moisture conditions continue to deteriorate from May 3rd to
[29:17] the 24th as shown here a gradual decrease in soil moisture was accompanied by a corresponding expansion of drought designations by May 24th
[29:27] values below the 30th percentile had spread across much of Northern Alabama but were even as low as the second to
[29:34] fifth percentiles in some areas as shown by the black ovals here these very low percentile values are associated with
[29:43] sandier soils situated along aptly named Sand Mountain in Northeast Alabama all else being equal these soil types
[29:52] will typically lose moisture at faster rates remember the 28-day Stream flow percentiles on April 26th well these had
[30:03] decreased quickly to values in the 10th to 24th percentiles by the end of May likewise soil moisture percentiles
[30:12] decreased significantly during this five-week period taking a closer look at the soil moisture values by May 31st following a
[30:24] week of generally hot dry weather zero to 200 centimeters soil moisture values below the 20th percentile became
[30:30] widespread across Northern Alabama with values below the fifth percentile in many areas taking stream flows soil moisture and
[30:42] other data sets such as the standardized precipitation index shown here into account and evidence from drought indicators on May 31st converge towards
[30:52] designations largely in the D1 to D2 category category notice that indicators were highest in the soil moisture and SPI indicators and
[31:03] where drought conditions had persisted the longest which was in Northeast Alabama Alabama a D2 or severe drought designation was
[31:11] made for the first time during this drought event where these indicators provided as evidence to the usdm
[31:19] just a little more than a month after d0 conditions were present so this example can help to help to
[31:26] illustrate the all-important convergence of evidence when considering drought categories so there are some important items to mention here
[31:36] the drought analysis is a complicated process not only is Convergence of evidence important but discussion and consensus of opinion can be a part of
[31:45] that process the focus of this lesson was largely about soil moisture and how it can fit into an overall drought analysis however
[31:53] other factors may have more relevance at times for your situation this lesson focused on specific soil moisture variables that were available
[32:01] and used for analysis at the time since then other soil moisture variables that address water availability in the root
[32:08] zone are available and should be considered for use these would include the 0 to 100 centimeter level which is
[32:15] often used for Drought analysis however other more shallow layers are available such as 10 to 40 and 40 to 100
[32:22] centimeters centimeters please visit the usdm about webpage shown here to see valuable information about the usdm and the process to create
[32:32] drought designations some key takeaways before we depart drought analysis well as we mentioned several times it is a multi-faceted
[32:43] process with an emphasis on convergence of evidence and coordination with other groups groups soil moisture is important for analysis
[32:51] because well soils are an important source of water in the hydrologic system precipitation may be measured reasonably
[32:59] well the sum is converted into runoff or it goes quickly back into the atmosphere through evaporation what eventually goes into soils can be
[33:08] measured by in situ or remote instruments or estimated by land surface models such as the sport lists
[33:14] additions and changes to the sportlist data Suite took place because of intentional r2o and o2r activities emphasizing the importance of the
[33:24] process for data application and product development development sportless data were shown to be effective as a tool for Drought analysis
[33:31] especially with regards to Drought development although not shown in these examples understanding specific layers important for your analysis is crucial
[33:40] in any sort of proper drought analysis so I want to thank you for your time again this was Christopher white with
[33:49] the National Weather Service and the NASA sport program thank you Christopher for the great overview of operationally applying soil
[34:01] moisture data for Drought monitoring we'll now go to Richard Heim to learn how the U.S drought monitor incorporates
[34:06] sport lives with existing data and methods Richard over to you hello I'm Richard Heim I'm a meteorologist with the NOAA National
[34:17] centers for environmental information and also a U.S draft monitor author I will be talking about how we utilize the
[34:24] NASA sport Lis drought product in the weekly us drought monitor operational product product I also use it in my monthly and CEI
[34:32] state of the climate drought reports in this talk I'll be setting the stage for the usdm by going over a background
[34:40] and the usdm methodology reviewing drought indicators with a focus on soil moisture and providing an example or two
[34:47] of how usdm authors utilize the sport Lis soil moisture product drought is basically the imbalance between water supply and water demand
[35:00] water supply is essentially precipitation water demand in nature is evapotranspiration and potential evapotranspiration evapotranspiration soil moisture is basically a storage
[35:11] term excess precipitation goes into runoff we have good measurements for water supply and water demand but until
[35:18] recently soil moisture estimations were not as good the Palm address severity index was developed in 1965 as the first index to
[35:27] assess the total moisture status by incorporating water supply water demand and a soil moisture component it became the official draft index for
[35:37] the U.S and many areas worldwide some deficiencies were discovered over the years other drought indices and indicators
[35:45] were developed beginning in the 1980s and 1990s the U.S draft monitor was developed in 1999 as a composite index that
[35:53] incorporates the strengths of everything that has come before and after the U.S drought monitor or usdm is
[36:01] produced manually every week using arcmap which is an arcgis product tool drought is expressed in terms of
[36:10] recurrence intervals that is how rare a drought magnitude is and mathematically it's expressed as percentiles d0 is an
[36:18] abnormally dry category and D1 to D4 are the four drought categories the usdm incorporates dozens of drought
[36:26] indices and indicators some at multiple time scales these inputs are best expressed in terms of percentiles so
[36:33] that they can be related to the DX categories the usdm also incorporates impact information provided by a network
[36:40] of hundreds of State regional and local partners partners a distinction should be made between the responsibilities of State teams versus
[36:48] the responsibilities of the usdm authors the usdm authors prepare a national map based on National data sets that show
[36:57] current drought conditions State drought teams assess conditions in their states based on state data sets and National
[37:06] data sets and can make recommendations to State agencies and governors for Drought response actions we look at all available data when
[37:16] preparing the U.S draft monitor the indicators can be grouped into six broad categories soil moisture Stream flow
[37:23] remotely sensed data and indicators snow which is most important in the western U.S other derived indices such as the
[37:32] standardized precipitation index standardized precipitation of ample transpiration index and palm address severity index and expert local input
[37:41] the indicators include indices and indicators based on precipitation evapotranspiration snowpack Stream flow groundwater soil moisture reservoirs vegetation-based indicators and so much
[37:54] more these include in situ station data remote sensing and model data the standardized precipitation index or SPI is a measure of water supply and is
[38:08] based on precipitation the standardized precipitation evapotranspiration index or spei measures both water supply and water demand and is based on precipitation and
[38:20] temperature temperature the SPI and spei are especially useful since their values are expressed in standardized units that are directly
[38:28] related to the usdm DX percentiles and they have a long period of record the usdm uses a convergence of evidence
[38:38] approach and that is what are most of the indicators from each of the data categories saying what are most
[38:45] converging to we focus on the relevant indicators and time scales for the location time of year and climatology being examined for
[38:56] example soil moisture conditions are crucial in the warm season or growing season in the agricultural lands east of
[39:03] the Rockies soy moisture conditions are not that important in the cold season or dormant season especially in northern states
[39:11] where the soil is Frozen in winter another example a mountain snowpack is crucial for western states in the winter
[39:19] and spring but snow is not important for eastern states in the summer and this practicum no snow at all in the southern states
[39:26] most times of the year an example of the convergence of evidence is the Ohio Valley in late
[39:34] February 2023 the sport soil moisture percentile products were depicting extremely dry soils for this time of year compared to the sport history
[39:44] across a large part of the Ohio Valley some of the other soil moisture indicators to pick a dry conditions in
[39:52] the Ohio Valley and these include things such as anal Das crop chasma and Grace but they were nowhere near as bad or
[40:01] extensive extensive other soil moisture indicators depicted barely any dry conditions in the Ohio Valley these include esmos satellite
[40:12] data and the Vic and CPC leaky bucket models models it was unusually warm in the Ohio Valley
[40:19] for February but if Apple transpiration is low in the winter anyway precipitation data showed that the last
[40:26] one to two months were near to wetter than normal none of the other soil moisture indicators showed conditions as bad as
[40:32] sport did and local data from State drought teams in Illinois Indiana and Ohio showed soil moisture conditions normal to wet
[40:45] it was later determined that there was a problem with the input data to the sport model which led to the unusually dry
[40:51] conditions in the Ohio Valley in February 2023 so this example illustrates the importance of consistency between indicators and that's basically the
[41:03] convergence of evidence approach it illustrates that soil moisture is less of a factor in winter when temperatures are low evapotranspiration
[41:11] is low and vegetation is mostly dormant and it also illustrates the importance the important role that state drought
[41:19] teams play in the usdn process so in conclusion the sport Lis soil moisture product is an important tool in
[41:27] drought monitoring but like all tools it should be used wisely there are three broad types of soil
[41:35] moisture data used in the usdm in situ observations observations satellite data and model data examples of each type include State missile net
[41:47] observations and USDA Nas assessments for in situ station data asmos Grace map slash crop chasma as examples of
[41:59] satellite data and anal Das Vic CPC Nikki bucket and support as examples of model data the units that the soil moisture data
[42:11] are expressed in are very important the best units are percentiles expressing soil moisture content related to the local historical record
[42:21] but most Mesonet soil moisture Stations don't have a long period of record so percentiles can't readily be computed
[42:28] the next best are units that relate to soil moisture to history for example above below or near normal
[42:36] or that are related to moisture needs of vegetation or crops units like volumetric water content by themselves are of little use for usdm
[42:47] drop monitoring the units have to have real world meaning meaning the next several slides are an example
[42:55] of how the sport soil moisture product was used to expand and intensify drought in Arkansas on the September 20 and 27
[43:02] usdm Maps on the September 13 USDA map there was some abnormal dryness and moderate drought d0 D1 with some severe
[43:15] drought D2 in spots in Arkansas and if you look at the precipitation history Arkansas was dry Statewide
[43:25] over the time periods from the last seven to Thirty Days there were some wet and dry areas in
[43:34] Arkansas at the two-month time scale it was dry Statewide at three months with the driest areas occurring in Central
[43:42] Arkansas and it was dry over the four-month period but it was wet at the six month time scale and this wetness
[43:51] earlier in the year skewed the longer term SPI indicators so that they showed conditions that were not very dry
[43:59] some of the drought indicators did not show really bad conditions but others did streamflow for example was normal
[44:06] vegetation did not seem too stressed based on the veg dry and the vhi indicators indicators temperatures were warmer than normal
[44:16] during the summer but not excessively so however the last week or two in September saw severe heat wave over
[44:24] Arkansas which rapidly increased evapotranspiration and drying soils leading to what is called a flash drought here is some text from the September 27
[44:37] usdm narrative that discusses the impact of the short-term heat and dryness U.S department of Agriculture offices Nationwide report on soil moisture and
[44:50] crop conditions in each state the USDA NASA reports had 58 percent of the topsoil moisture in Arkansas's ride
[44:58] to very dry on September 18 but that number jumped to 88 percent of the state on September 25 so people were seeing
[45:07] the soils drying out in their on-the-ground observations the kbdi showed an increasing fire risk reflecting the impact of many days of no
[45:18] precipitation precipitation some soil moisture indicators were showing rapid drying but others the Vic and nldas models for example were not at
[45:28] least not at first the dry soils were not reflected much on the grace soil moisture indicator and
[45:36] that's the bottom left two maps but they were showing up on the S Moss indicator that's the map to the right
[45:44] rapid drying of soils was seen from mid-september to late September in the crop chasma topsoil and subsoil moisture
[45:52] products and in the sport soil moisture percentile Maps especially in the shadow layers layers reports of dried ponds from Arkansas
[46:02] ranchers confirmed to the dryness ground truth like this is crucial to telling us what is really going on in local areas
[46:11] the sport Lis soil moisture percentile Maps show us the degree of drying in four soil layers the top layers
[46:19] reflected the greatest amount of drying the sport product captured the rapid drying in Arkansas in September 2022
[46:25] best of all of the soil moisture products products a lack of rain and very hot temperatures which increase debacle transpiration
[46:34] during the last half of September rapidly dried soils the usdm depiction showed rapid expansion of D2 severe drought across
[46:43] central Arkansas and the introduction of D3 extreme drought into the West the sport product captured this very
[46:51] well and was an important tool behind the usdm drought expansion so in summary the sport Lis soil
[46:59] moisture percentile product is a valuable addition to the suite of soil moisture products used to prepare the
[47:05] usdm its percentile units are directly related to the usdm DX categories the sport product provides information for
[47:14] multiple soil layers the shadow layers 0 to 10 centimeters and 0 to 40 centimeters enable detection of Rapid drying of soils which happens
[47:23] during flash drones the deeper layers zero to 100 centimeters and zero 200 centimeters capture Relic dryness from
[47:33] past dry periods but like all drought indicator products used in the production of the usdm the sport
[47:40] products utility is most effective when it is consistent with other products this illustrates the convergence of evidence approach of the usdm
[47:52] thank you for your time thank you Richard for the great overview of the U.S drought Monitor and the
[48:01] convergence of evidence approach for using different soil moisture indicators especially the utility of sport soil moisture in the U.S drought monitor
[48:09] we'll now go to Corey Davis and Barrett Smith to provide a state level perspective of using sport Liz from
[48:16] North Carolina Corey over to you hello my name is Corey Davis I'm an assistant State climatologist at the
[48:25] North Carolina State climate office I'm joined today by Barrett Smith who is the senior service hydrologist at the
[48:31] National Weather Service in Raleigh North Carolina and today we wanted to share our state level perspective about
[48:37] how we're using sport list data in our own drought monitoring process in North Carolina Carolina so what we hope you'll get from our
[48:45] presentation today first is an understanding of how we are using the sportless products in our weekly state
[48:51] level drought monitoring process to do this we'll share a couple examples of specific events where we found the sport
[48:58] list data especially useful so we'll share how we use that data alongside our other drought indicators and then finally based on our own
[49:06] experiences we'll share our recommendations and some best practices for using the sportless soil moisture data if you're doing any local or state
[49:14] level drought monitoring in your area so first just to give some background on the drought monitoring process in North
[49:21] Carolina there's a group called The North Carolina drought management advisory Council or DMACC that under state law is responsible for doing
[49:30] drought monitoring and drought assessment and issuing drought advisories for all 100 counties in the state state you can see on the left here some of the
[49:37] organizations that are involved in the DMACC it's mainly groups that are measuring drought conditions or observing drought impacts and every week
[49:46] we'll get together with them on a call where we'll go over recent weather conditions especially recent precipitation
[49:53] precipitation some other drought indicators including the sport list data and then also impacts observed across the state
[49:59] all of that informs the recommendations that we make to the U.S drought monitor that are ultimately reflected on maps
[50:05] like you the one you see at the bottom right here for North Carolina so what data what indicators are we
[50:13] using as part of our drought monitoring process again it all starts with precipitation but we're looking at more
[50:19] than just what's fallen over the last week we actually look at several different time scales ranging from short
[50:25] term which is really anything within the past 30 days including median term which is anything from the past one to four
[50:31] months or so and then in the longer term which could be four months all the way up to a full year in the past to see
[50:38] weather conditions are showing this wet or dry across different parts of the state in order to do that we often look
[50:43] at data in terms of a percent of normal and again that helps highlight those areas that have been a little wetter and
[50:48] drier and as you can see in these three maps from last summer there can be differences across these time scales
[50:54] this was the case for some areas were wetter in the short term and drier in the longer term and as you've already
[51:00] heard during our presentation session today the US drop monitor authors want a convergence of evidence and this is
[51:07] where some of the other indicators come in to help show us where those dry conditions are actually happening
[51:12] that's where we found a lot of value with the sport list data especially being able to look at the soil moisture
[51:18] percentiles over different layers that includes the the shower layers like a zero to forty centimeter all the way
[51:25] down to a deeper layer like a zero to 200 centimeter this is really just a good way of showing this How Deeply
[51:31] entrenched dry conditions are within the soil soil because we're doing our drought calls every week it's also useful for us to
[51:38] see what's changed over the past week to two weeks and to do that we'll use the relative soil moisture change maps that
[51:44] you see on the right again those are just showing us weather conditions are drying out or improving across different
[51:49] parts of the state owner drought calls we're also looking at surface water and groundwater conditions this is data coming from
[51:57] Stream flow gauges and major reservoir operators and groundwater Wells across the state and this data is usually
[52:04] presented in terms of historical percentiles for each specific location for that time of the year and again
[52:10] that's able to tell us whether things or whether or drier than they usually are in those areas this is also really
[52:16] useful for us to see whether drought is affecting water sources and Water Supplies all across the state
[52:24] and then we have all this great objective data but it's really useful for us to be able to verify and validate
[52:29] that with actual on-the-ground impact reports and we've got several different report sources that we use on our
[52:35] drought calls one of those is a citizen science program called kokoros it has a network of precipitation observers who
[52:43] measure rain in their backyards all across the country and it encourages them once a week or so to look around
[52:49] their surroundings see if anything looks wetter or drier than normal and if it does to submit a report and we review
[52:54] those reports on our calls every week in North Carolina Wildfire occurrence is very closely tied to Drought so owner
[53:02] drought calls every week the North Carolina Forest Service uh shares fire danger conditions and fire activity that's been happening all around the
[53:10] state state and of course we know agriculture is also very vulnerable to Drought so we review condition reports from Farmers
[53:17] and extension agents on our calls every week this includes things like crop progress and soil moisture so for
[53:23] instance a farmer May report in that the soil is too dry to do any planting and we can compare that with the sport
[53:29] whistle moisture data and see if they're telling the same story for those areas so across all of these data sets that we
[53:36] look at we have several common needs one of those is having good high resolution data so that we can see at a very fine
[53:43] local scale exactly how wet or dry conditions are for many years it was tough for us to find a good soil
[53:50] moisture product that offer this sort of resolution but over the past five or six years we've been using the sport list
[53:56] data and it really has offered us the best coverage of soil moisture data of anything that we've found
[54:02] also as you saw we looked at multiple time scales on our precipitation data sets and then multiple levels like with
[54:08] our soil moisture data I often say that drought is not just Skin Deep so even after a rain event if the surface level
[54:15] top soils are moist you can still have some drier conditions as you go deeper so again having those deeper layers
[54:22] available from sport lists is useful for us to see where drought really is firmly entrenched entrenched it's always useful for us to have data
[54:30] framed in terms of those historical percentiles because those fit with the US drop monitors classification scheme and as you see in the map on the right
[54:37] here with the the soil moisture percentile data from sport lists it is put in terms of percentiles and it's
[54:43] even color coded based on the drought monitor categories so at a glance it's really easier for us to see where the
[54:49] driest conditions are and what categories they correspond to finally we like having good independent data sets and by that I mean data that's
[54:58] not coming from the same sources for example a lot of our precipitation indicators are using radar-based precipitation estimates but we know that
[55:07] sport list is not using that same source so if those products and some of our other indicators are all showing dryness
[55:13] and they're coming from different sources that gives us even more confidence that those areas truly are dry because they're not subject to the
[55:21] same biases that any one source may have so at this point I wanted to shift to our first example and for this we'll go
[55:28] back to the spring of 2022 specifically the month of March so this was coming out of the wintertime and heading into
[55:34] the spring season to set the stage for this we had been drier than normal across most of North
[55:40] Carolina over the winter before that you see on the map on the right here most of the state it had anywhere between 50 to
[55:47] 90 percent of their normal precipitation between December and February but during our cool season during that time of year
[55:54] a little bit of precipitation can go a long way at alleviating drought and drought impacts we had several rain and
[56:01] snow events during January of 2022 and that slow soaking moisture into the ground really did help to improve a lot
[56:09] of the drought and dry conditions across the state you see in the drought monitor map at the top here that we had
[56:14] widespread moderate to severe drought in early December and then just three months later as we headed into March we
[56:20] only had one small area of moderate drought right along our Southern Coastline Coastline this really leads into the challenge of
[56:27] this specific example which is because we have limited impacts over the winter time because of things like lower water
[56:33] demand in cooler temperatures once we head into the spring it's tough to us for us to see exactly how well
[56:40] established and how severe drought is across different parts of the state so in this example we'll walk through the
[56:45] month of March week by week and show exactly how the sportless data really did help us know exactly where those dry
[56:51] conditions were at so on March the 1st on our first drought call of the month there what we noticed
[56:58] on the relative solar moisture map that you see on the left here in the zero to 100 centimeter layer is that there is
[57:04] part of Southeastern North Carolina showing fairly dry soil moisture conditions just to give you a geographical reference this is right
[57:12] along where Interstate 95 runs through eastern North Carolina it goes through the city of Fayetteville which is pretty
[57:18] much right in the center of the circle region here and on the western side of this region that's our Sand Hills that's
[57:24] where you find places like Pinehurst the golf resort so these areas have very Sandy soils that soil does tend to dry
[57:31] out a little bit more quickly so it wasn't too surprising for us to see some dryness here but we also noticed that
[57:36] that dryness was not in the area where we had drought on that drought monitor map again those drought conditions were
[57:43] a little further to the south and east so in this case on the first of March the the sportless soil moisture really
[57:48] just called our attention to an area that was drier than maybe we expected uh by the following week we started to
[57:55] see some on-the-ground reports that backed up the dryness that we were seeing on the sport list product and
[58:00] again very local variations are always possible you won't always see this sort of close agreement but in this case we
[58:07] did have good agreement which gave us more confidence in our assessment uh there is a condition monitoring report
[58:12] from just south of Fayetteville that noted somebody was working in their vegetable garden the soil was very dry
[58:17] there that sandy soil did not have any clumps in it and again that backed up what we had seen now for two weeks on
[58:23] the soil moisture data by the middle of the month finally some of our shorter term precipitation indicators were beginning to show
[58:31] dryness in these same areas in this case we had less less than 50 percent of the normal precipitation over the previous
[58:37] 30 days in this same region that the sport listed had been showing as dry now for three weeks in March with that said
[58:45] not all of our indicators were showing dryness here so we didn't have that full convergence of evidence that we had
[58:51] wanted in order to make changes on the map that really started to happen the following week on March the 22nd in this
[58:57] case some of our more medium-term precipitation indicators we're showing dryness here also some of our Stream flow and other water supply indicators
[59:05] were showing dryness so that did give us the evidence that we needed to expand uh drought Westward really pushing it right
[59:12] up to about Interstate 95 where it goes through eastern North Carolina and again the same areas that sport lists have
[59:17] been showing us dry now for the previous four weeks and then finally by the final week of
[59:23] the month again still seeing dryness in these same areas they had not had a lot of rainfall in March and this is the
[59:29] time of the year when we expect our trees and vegetation to Leaf out and green up and because of the dry
[59:35] conditions in these areas that Greenup was a little bit behind schedule uh this is often when we see uh our Springtime
[59:41] fire activity and because that green it was a little behind we did see fires in this area there was a large fire just
[59:48] south of Fayetteville and then when saying this I'm not encouraging you to use the sportless data to tell you where
[59:54] wildfires will happen but in this specific case we knew that the sportless data in this time of year did correspond
[1:00:00] well to environmental conditions that might favor fire activity so that's how we made that connection between soil
[1:00:06] moisture and the greenness and the fire danger that we had seen on the ground so just to wrap up this first example
[1:00:14] again the sport list products gave us a really good indication coming into the spring of 2022 of exactly where those
[1:00:20] driest areas were in the state it really this was the first product that told us about the dryness in that Southeastern
[1:00:26] area because of that I think this really highlights the good value of sport lists and giving some early warning of where
[1:00:32] those dry conditions are at and where you may see some flash drought or very quick onset drought emergence and then
[1:00:39] finally in this case the sewer moisture data aligned very well with the observed impacts uh both from those citizen
[1:00:45] science reports and also from where we saw that fire activity later in the month month so at that point I'll hand it over to
[1:00:51] Barrett Smith and he'll cover our second example in our conclusions hi I'm Barrett Smith Senior service hydrologist for the National Weather
[1:01:01] Service in Raleigh North Carolina and I'll be taking a look at our second example example which is the fall of 2022 and more
[1:01:09] specifically the impacts of hurricane Ian as it crossed North Carolina on September the 30th of 2022. after a period of wet weather in July of
[1:01:20] 2022 the eastern half of North Carolina began to dry out with many areas receiving around 50 percent of normal or
[1:01:27] less rainfall those areas with the driest conditions can be seen here in the darker oranges across Northeastern North Carolina
[1:01:39] taking a look at the U.S drought monitor from September the 27th we can see that Northeastern North Carolina had been dry
[1:01:47] enough to be classified as being in moderate drought or D1 while the rest of North Carolina eastern
[1:01:54] North Carolina was abnormally dry or in d0 d0 hurricane Ian moved through North Carolina just three days later on
[1:02:01] September the 30th and brought widespread rainfall to nearly all of North Carolina with many areas that were
[1:02:06] abnormally dry receiving over four inches of rain to the heaviest rain fell across Northeastern North Carolina and
[1:02:13] those areas that were in moderate drought or D1 received anywhere from six to eight inches of rain
[1:02:21] before getting further into the sport list soil moisture products and drought classification we think it's important to to keep in mind that in heavy
[1:02:28] rainfall events not all water infiltrates the ground due to runoff so our precipitation based indicators such as the percent of normal rainfall which
[1:02:37] we reviewed in previous slides can make conditions seem wetter than they are sometimes sometimes all right so knowing that the drought
[1:02:45] classification and the amount of rainfall that fell during Hurricane Ian let's take a step back and look at some
[1:02:51] of the conditions leading up to Hurricane Ian once again the 30-day rainfall prior to Hurricane Ian indicated less than 50 percent of normal
[1:02:58] rainfall across most of eastern North Carolina soil moisture at both a shallow layer of 0 to 40 centimeters on the left
[1:03:05] and a deeper layer down to 100 centimeters in the middle and showed percentiles well below 10 percent over a
[1:03:12] large area uh we should note here though that the percentile suggested drought classification much worse than abnormally dry or moderate drought
[1:03:21] but other indicators at this time did not suggest drought any worse than moderate drought or D1 however the
[1:03:27] takeaway from this is that soil moisture is very dry over a large portion of eastern North Carolina
[1:03:39] moving ahead one week to October the 4th after the passage of hurricane Ian we can see that there was considerable
[1:03:46] Improvement in the 0 to 40 centimeter moisture on the left across much of the state this is not surprising given the
[1:03:54] widespread four to eight inches of rain that fell however if we look deeper down to the 100 centimeter depth there are
[1:04:00] still many areas over eastern North Carolina that show dry soil moisture conditions and this suggests that while
[1:04:05] the upper soil moisture increased it may not have made it all the way down to the deeper levels where longer term dryness
[1:04:11] was more pervasive moving ahead yet another week to October the 11th despite the well above normal rainfall that shows up in the 14 day
[1:04:23] percent of normal which covers hurricane Ian the dry soils are starting to show up again even in Shallow layers over
[1:04:30] eastern North Carolina that were considered wet just one week prior this is a case where the percent of
[1:04:36] normal rainfall especially in the near term can be perceived as wetter than the observed conditions another indicator that we often look at
[1:04:47] are stream flows as Corey mentioned near normal streamflows are indicated by the green dots in the rightmost image and
[1:04:53] for the most part most of eastern North Carolina was in the normal range this suggests quite a bit of runoff into the
[1:04:59] streams keeping them higher and less infiltration into the soil so how do we reconcile these differences between the soil moisture percent of
[1:05:10] normal rainfall and Stream flow one very useful indicator that we have and Corey mentioned this as well our
[1:05:18] condition monitoring reports which are sent in by observers and so this Observer on October the 18th so more
[1:05:24] than two weeks after Hurricane Ian indicated dry soil from a lack of rainfall and the need to water plants
[1:05:30] and crops again so finally as we look toward the end of October just less than one month after
[1:05:39] the passage of hurricane Ian and a widespread four to eight inches of rain we can see that the dry soils are
[1:05:47] covering all of eastern North Carolina again and ultimately we had some re-emergence of abnormally dry conditions and even an area of D1 there
[1:05:55] in portions of eastern North Carolina this animation of the 0 to 100 centimeter soil moisture percentiles starts one week before hurricane Ian and
[1:06:08] it continues through the end of October around the 25th of October it shows uh how the very dry soil conditions
[1:06:14] improved after Hurricane Ian but did not completely go away and quickly began to drop toward the 10th percentile or lower
[1:06:21] just a couple weeks after Hurricane Ian while the drought monitor map was free of any abnormally drier D1 conditions in
[1:06:28] the two weeks immediately following hurricane Ian those same conditions quickly returned by the end of the month
[1:06:39] so as we try to look at all of our indicators in this case and determine how to interpret any discrepancies in
[1:06:45] many ways the sportless soil moisture it gave us this steady consistent Clues from week to week about where the
[1:06:51] drought might return it essentially helped us tip the scales toward a hidden drier scenario that other indicators did
[1:06:59] not necessarily suggest and so to summarize our second example hurricane Ian brought widespread rainfall to a large portion of North
[1:07:10] Carolina and there was good recovery in the stream flows in soil moisture initially initial indications were that
[1:07:16] any drought could have been completely alleviated alleviated however uh the sport lists soil moisture products showed a different responses to
[1:07:25] the rainfall in different layers of the soil and lingering drought was realized as the Deep layer soils did not respond
[1:07:31] as well to the to the rainfall so looking at multiple levels of soil moisture can be a better
[1:07:38] can be better than the standard precipitation indicator such as percent of normal in identifying where longer-term dryness is lingering and can
[1:07:44] be an early warning sign for Drought emergence some things to watch for when you see when using the sportless soil moisture
[1:07:55] it can be time consuming to analyze multiple layers of of products and to understand which is the most
[1:08:01] representative conditions or even the varying response times of each layer you need to understand the soil characteristics in your area and how the
[1:08:09] sport list represents those or perhaps even doesn't uh represent them and finally the sport list should not be
[1:08:16] interpreted as an instantaneous uh product instead it it shows a state of soil over a wider time frame
[1:08:26] so we'll wrap up with a few recommendations from our experiences using these products look at them as
[1:08:31] often as you can to get it familiar with the characteristics we use them week to week and have learned of areas that are
[1:08:37] potentially error-prone there are other areas where the product seems to work better better uh be sure to use it in tandem with
[1:08:44] other indicators and seek out that verification this is the the convergence of evidence approach that has been very
[1:08:50] effective for our drop group and then finally consider using it as a drought early monitoring tool we can give you
[1:08:56] Clues where things are drying out faster uh than some other other indicators would and it also has applications for
[1:09:04] fire and flooding as well as Corey mentioned so on behalf of Corey Davis um we'd like to thank you for taking the
[1:09:11] time to uh listen to this presentation thank you Corey and Barrett for a state level perspective of using sport Liz in
[1:09:23] North Carolina we will now go to a summary of what we've covered today in part two of this
[1:09:29] webinar Series so soil moisture analysis is important for Drought analysis because soils are an important source of
[1:09:36] water and precipitation analyzes alone may not account for water in soils drought analysis is a multi-faceted process requiring multiple data sets and
[1:09:46] coordination coordination research to operations and operations to research activities are important for application and product development sportless percentiles and soil moisture
[1:09:58] change data were shown to Be an Effective component as a tool for Drought analysis the sport product provides information
[1:10:05] for multiple soil soil layers from shallow layers to deeper layers and the sport products utility is most effective
[1:10:12] when it is consistent with other products I.E a convergence of evidence looking ahead to next week in order to
[1:10:22] reinforce what we learned today and to prepare you for part three we have a micro lesson which can be found on the
[1:10:27] training page the micro lesson will allow you to independently practice the Knowledge and Skills from today's webinar next week part 3 will extend the
[1:10:37] concepts covered today to focus on data access at organization and individual levels levels as stated earlier there will be one
[1:10:46] homework assignment for all three parts of the training answers must be submitted via Google form which can be
[1:10:52] accessed from the training page on the rset website homework will be made available on May 31st with a due date of June 14th a
[1:11:01] certificate of completion will be awarded to those who attend all live webinars and complete the homework assignment by the deadline you will
[1:11:08] receive a certificate approximately two months after the completion of the course blow is the contact information for
[1:11:17] today's trainers along with links to the sport webpage rset website and social media media if you enjoyed today's webinar we hope
[1:11:25] you will sign up on the rset listserv and social media to receive notifications for future trainings and
[1:11:30] other announcements we will now transition to the question and answer portion of today's training great well thank you so everybody that's
[1:11:45] been posing their questions in the Q a box box uh looks like we've got some good questions so far so why don't we just
[1:11:52] jump right into it uh question number one one how does the vegetation type and density influence the soil moisture
[1:12:05] and whoever answered that feel free to unmute and go ahead and speak up okay I'll go ahead and uh if you're
[1:12:25] trying to speak we cannot hear you so please do try to unmute foreign answer so the answer is different types
[1:12:36] of vegetation can extract different amounts of soil moisture depending on the need and availability of water by
[1:12:42] the vegetation type and the vegetation's rooting depth so it can vary from type to type and their density across the
[1:12:49] land surface for example corn will extract more soil moisture than say a cotton crop would in similar soil types
[1:12:56] and below are some resources from USGS discussing some of this so we do hope that you'll go in and check out the uh
[1:13:03] the link and question number two how would someone differentiate the contribution of each type of drought soil hydrological meteorological to the
[1:13:16] general drought occurrence hello this is Richard Heim I answered that basically this is differentiated through the drought indicators the
[1:13:28] drought indicators a generally grouped into categories along the lines of the drought types so we have soil moisture
[1:13:34] indicators we have hydrological indicators meteological indicators vegetation-based indicators and so on and so when you're looking at the
[1:13:42] response response of the indicators in each category you can use that to assess how much or the
[1:13:52] type of drought is contributing to the general drought occurrence it we really haven't Quantified it it's it's basically looking at the response
[1:14:02] of the indicators okay great Richard thanks so much uh we're question number three it's my knowledge sport Liz offers the highest
[1:14:15] resolution most frequently updated remote sensing soil moisture product uh three kilometers can you confirm that and can you talk a bit about whether a
[1:14:23] person would also want to consider coarser resolution products and then provided some examples from smap and NASA Grace and if so why
[1:14:32] yeah this is Richard again I took an initial initial stab at answering this question and I see others have Auto so modified the the
[1:14:41] answers so I'll just read what we have here sportless soil moisture products are updated four times per day with
[1:14:47] hourly output frequency what I use as a drought monitor author is the daily Maps some crop Castle products are updated
[1:14:55] daily and some weekly Grace is updated weekly and the aaf seeds Agriculture and agri-food Canada esmos soil moisture product is updated
[1:15:06] every two weeks they also have one that's updated monthly and that covers mostly Canada but the monthly one some
[1:15:13] and I think the two week one covers North America basically so that's the U.S U.S um and that's those are the ones that
[1:15:24] integrate some form of satellite input there are also other indicators other models soil moisture models such as the
[1:15:32] Leaky bucket the anal Dash the Vic models and those are updated daily so in terms of update frequency and latency of
[1:15:40] those four that three that were mentioned for specific ones that were mentioned the sport list is the choice
[1:15:46] for the U.S trap monitor analysis authors prefer a convergence of evidence approach where consensus among multiple indicators is desired not just among the
[1:15:56] soil moisture indicators but consensus among all of the indicators hydrology precipitation soil moisture Stream flow and reservoirs groundwater and so on so
[1:16:07] the usdm decision is not based on any one indicator so authors consider all of the above soil moisture indicators and
[1:16:15] the others that I mentioned so convergence of evidence is more of a factor than just a spatial resolution
[1:16:22] hey and this is Jonathan case I'd just like to add and emphasize the fact that sportless is not a remote sensing
[1:16:30] product in the classical sense it's a land surface modeling output and it does incorporate some components of remote
[1:16:39] sensing data into it but it is a land surface modeling solution great yeah thank you so much both
[1:16:51] Jonathan and Richard a question number four what are some of the steps taken to mitigate or reduce the drought in areas
[1:17:01] once detected I think I also took a stab at responding to that and as the drought monitor author we
[1:17:11] don't really deal with mitigation or drought reduction we analyze data to determine what the current status of drought is so drought
[1:17:21] response that's the mitigation reduction of the impact of drought is in the domain of state and local governments so
[1:17:27] they decide what to do and several states have drought response plans and these can be accessed via the ndmc
[1:17:34] website that I indicated there also the U.S department of Agriculture uses us throughout monitor classifications to allocate drought
[1:17:42] relief funds through their livestock forage disaster program that's the main program that they use for Drought relief
[1:17:48] and I did want to mention that um um the response of states will vary from state to state depending upon their
[1:17:57] situation the climatology the resources that they have the industry and communities that are in the state that
[1:18:07] are impacted by drought a really big response is reduction of water use water restrictions for example but
[1:18:18] really to find out what the specific responses that you can take to mitigate or reduce the drought in areas once
[1:18:26] detected you really need to access that website and look at the specific State drought plans okay great Richard thank you so much for
[1:18:39] for answering question number four uh question number five is there a correlation uh quote-unquote conversion between remotely sensed soil moisture
[1:18:47] and Stream flow statistics for example 7q10 the 10th percentile of a seven day total flow or any other end a flow
[1:18:57] statistic statistic hi this is Jonathan case here I I consulted with sujay Kumar the land information system author and uh manager
[1:19:09] there and uh he's there's generally going to be a lagged correlation between soil moisture and Stream flow however you can't easily
[1:19:21] convert or relate soil moisture or soil moisture percentile to Stream flow in isolation there's many factors that
[1:19:30] impact the Stream flow solution including vegetation soil terrain and the shape of the base and so therefore routing models are
[1:19:42] typically run on land service model outputs in order to relate soil moisture runoff and other variables to obtain the
[1:19:50] Basin Stream flow at a specific stream gauge location and this is Richard if I may add to the
[1:19:59] answer answer specifically about Stream flow Stream flow is um responds to precipitation if you have a heavy precipitation event that will
[1:20:11] increase the Stream flow that is useful for flood forecasting flood monitoring for Drought monitoring what hydrologists measure from Stream
[1:20:22] flow is the base flow what the amount of water flowing through the river that is not dependent upon the
[1:20:30] amount of rain that fell and base flow in in many streams is fed by groundwater which is much deeper groundwater is in
[1:20:40] aquifers and that's at a depth far below what is typically monitored for soil moisture great thank you Richard and Jonathan
[1:20:52] question number six within sport Liz can use historical data to perform a predictive analysis just seeing if I can
[1:21:00] render a report to Farmers on potential areas time frames and baits as to when they might experience a drought
[1:21:10] go ahead and speak to this one as well I'm not sure who wrote the first paragraph of this response but there was
[1:21:19] some discussion about relating soil moisture values to agricultural imp impacts and since drought implies a broader lack of water other metrics
[1:21:30] would be needed to to be analyzed but having important information about crop impacts due to soil moisture could
[1:21:38] help inform those impacts in the short term uh there's also the idea of applying a machine learning activity
[1:21:46] that could uh and better inform in an automated objective sense uh however the paragraph I added was that we did begin
[1:21:57] generating 14-day forecasts where we just extend the sportless model runs out to two weeks driven by the US's GFS
[1:22:10] forecast model and that we've been doing that every day for a better part of the past year
[1:22:17] and uh we would like to enhance these predictions into an ensemble type approach using Ensemble model inputs to
[1:22:27] in order to depict the probability that soil moisture percentiles could drop below drought thresholds in certain areas in that two-week or possibly even
[1:22:37] longer time frame and so right now we've been generating just simple animated gifs and I've provided a link where you
[1:22:45] can access those daily forecasts soil moisture percentiles we would like to also generate geotiffs of these forecasts so that uh end users could
[1:22:57] underlay the geotiffs as a layer on top of other indicators wonderful Jonathan thank you so much question number seven can you share a
[1:23:11] published research article about this product generation and I'll go ahead and address this as well we do have a variety of
[1:23:20] Publications and I'll go ahead and generate an inventory of those and we can provide the various articles we've
[1:23:28] published in the last 10 years or so onto this Google Docs great uh wonderful and then moving on
[1:23:43] question numbers let's see uh question number eight is there something wrong with the sport list data I haven't been
[1:23:50] able to access the current data since late last week I keep getting an error message that says sorry no data found
[1:23:56] for this product I guess I'll go ahead and answer that as well uh as Murphy's timing if people are
[1:24:07] familiar with Murphy's Law we had a disc failure that occurred you know right in the middle of this rset training class
[1:24:16] so therefore we are temporarily offline with the real-time sportless output and we're getting our disc raid rebuilt
[1:24:24] right now and and hopefully we'll be back up in the coming days yeah Murphy has a way of striking when
[1:24:34] you never want him to uh question number nine what are the kinds of data that you obtained from the citizen science
[1:24:40] reports and how are they integrated into the drought assessment yeah this is Richard and I classified the citizen science stated that is
[1:24:51] available to you as drama their authors into two types the first is daily precipitation amount measured by rain
[1:24:58] gauge rain gauges that thousands of citizens across the country and it's really expanded internationally as well that are available through the
[1:25:08] kokoros network there's the website link there there the and I'm I'm a cook Ross Observer myself the uh and it's daily rainfall
[1:25:17] amounts the second type is drought impacts information provided by uh provided through the national drought mitigation Center drought impacts
[1:25:29] reporter and also condition monitor reports and links provided there and this drought impacts information is typically typically uh subjective observation of impacts
[1:25:43] the ground is cracking my grass is brown this is the lowest Pond I've ever seen and I've been doing this farm for 40
[1:25:52] years this stream has never been dry before and I've been here for 30 years that kind of drought impacts information
[1:26:01] is provided by citizens through these web mechanisms and as a US job monitor author I find that very very helpful it
[1:26:11] supplements the objective data that we have through the observation networks on the state and National levels and the
[1:26:18] satellite data and so on it kind of gives a human touch to it as well wonderful thank you Richard uh question
[1:26:30] number 10 is it possible to downscale the soil moisture product to be less than one kilometer okay I guess we will move on to question
[1:26:53] 11. you mentioned sport Liz has characteristics associated with different areas and how it can make some areas more prone to errors how is that
[1:27:01] so I this is uh Chris why can you hear me yes Chris we sure can okay all right
[1:27:10] sorry I was having microphone issues uh earlier so um yeah I I took a stab at this answer here
[1:27:19] um they're uh well very recently there have been some problems with the precipitation analysis inputs at the sport list
[1:27:27] um this is referring a little bit to the NL Das data set and some of the underlying the CPC precipitation data
[1:27:33] sets uh but for the meantime we have switched to gdos analyzes because of this and I'll let John uh case Chum in
[1:27:40] here too if he wants to uh but I would say also in the short term especially uh
[1:27:45] since the mrms data Suite serves as the precipitation data forcing uh for about the prior current to about four days uh
[1:27:53] those areas of less accurate mrms analysis you know think largely the radar component of that will tend to
[1:27:59] have less accurate some more moisture data because the the precipitation input that goes into it may be not as
[1:28:06] accurate in say the western United States as it would be in the eastern United States where we have a better
[1:28:11] radar Network and coverage uh you know this is also due to beam blockage and that sort of things but I'll let John
[1:28:18] chime in if he has any thoughts about this this system yeah I think you did a good job
[1:28:22] Chris at answering some of the data quality issues that that we've had to deal with in sportless so as a follow-on
[1:28:31] I would just mention that our future solution solution that were collaborating with and The Goddard list developing development team
[1:28:40] would be a multi-variable data assimilation system and a lot of by assimilating uh a lot of remote sensing
[1:28:50] data sets that will help to correct like what sujay said you know the Sleepy driver we're gonna try to correct those
[1:28:59] areas that are either datavoid or have you know potential quality issues in the forcing and so having it
[1:29:08] the regular data assimilation occurring will help produce a corrected solution in the system yeah hey thanks John and let me also add
[1:29:20] I I don't know there might be another way to interpret this question I'm not real sure but
[1:29:26] um it just says characteristics associated with different areas and how it can make some areas more prone to
[1:29:31] errors uh and it also makes me just think about the overall drought analysis and how you would incorporate soil
[1:29:39] moisture into that analysis um you know soil moisture is going to be more applicable for some areas when it
[1:29:45] comes to Drought analysis because of what's important as a soil moisture or as a moisture Source in that region so
[1:29:53] say again we were going to do something we're going to discuss something about the Western U.S versus the eastern U.S
[1:29:59] and you know Richard can chime in on this he's more of an expert on this but you know in the western U.S
[1:30:06] soil or excuse me moisture storage and reservoirs and lakes and rivers can be more important than say uh than in soils
[1:30:15] and so uh you know overall it it might lead to Greater differences for what you may end up seeing in the U.S drought
[1:30:24] monitor based on the soil moisture levels you have and so you know I don't know if you talk about that or maybe
[1:30:30] reference that in relation to errors but there can be differences in the in the soil moisture depiction in the list
[1:30:37] versus what you see in the U.S drought Monitor and again importantly it's because of the sources of moisture that
[1:30:44] important to that particular region well thank you Chris and Jonathan question number 12 can you post a link
[1:30:54] to the soil laters I.E a map used as an input to support Liz yeah actually we we do show that uh
[1:31:03] soil input classification map on one of the session one recordings that I did but we can also provide a graphic an
[1:31:12] image of what those soil classification look like as well and if we could put that in the Google
[1:31:21] Doc or a link to it yeah that'd be great if maybe we can get that before we post this to the training
[1:31:27] page if we can go back and add that I'm sure is also noting that it's in the
[1:31:32] micro lesson training material so that's something that everybody can refer back to so I think the micro training micro
[1:31:40] lesson training materials would be the way to go excellent yeah that's a great Point Jonathan thank you so much yeah we do
[1:31:46] hope that everybody goes and is completing those micro lessons before each subsequent week uh so question 13
[1:31:52] is there any process to predict a drought prior to occurring specifically can you precede the query as knowing the
[1:31:58] probability of a drought happening before it takes place hence we can take steps to mitigate the aftermath
[1:32:07] hi this is Barrett I think I can uh help some with that um in general uh you know there are
[1:32:14] different ways that we're attempting um to provide outlooks or or forecasts about drought or you know better
[1:32:22] awareness of where areas May develop drought um the climate Prediction Center within NOAA produces a uh monthly and
[1:32:32] seasonal Outlook and they've also got a rapid uh onset drought product that's in an experimental phase right now on their
[1:32:38] website website um so kind of drawing attention to areas that based on our sub-seasonal to seasonal forecasts might uh Venture into
[1:32:48] into drought conditions nidus has early drought early Warning Systems dues and they're broken up by region and they try
[1:32:55] to find ways to uh to work more regionally to to identify areas that might be in drought and um I will
[1:33:02] mention from the North Carolina DMACC perspective you know we we don't utilize forecasts in our uh drought
[1:33:10] monitor recommendations we we cut off and only look backward but we do use a forecast weekly uh to kind of
[1:33:19] better help us know where to look in the next week or two or even further out so
[1:33:24] we are trying to find ways um to be a little bit more predictive about where drought May develop
[1:33:31] um that are separate from the drought monitor process itself so I hope that answers that question yeah and uh quest of follow-on to that
[1:33:41] do you think that the uh those 14-day forecast percentiles coming out of sportless could also help you in
[1:33:50] anticipating the onset of drought and so that's a question back at you I suppose yeah that's something that you know we
[1:34:01] as we uh as a as the DMACC in North Carolina try to be better about um um finding ways to to be a little bit more
[1:34:11] responsive or look ahead um I think that's certainly something that we'll try to integrate into our process
[1:34:18] thank you hey uh John uh I could speak just a little bit about the process in Alabama
[1:34:24] uh so there's a process through the uh ateka and the office of Water Resources under them there's a monitoring and
[1:34:33] impacts group that meets uh it's a few times a year uh but as necessary whenever drought conditions warrants and
[1:34:41] um probably similar to North Carolina there's not necessarily as much of a predictive component that goes into the
[1:34:49] drought designations that are made just for the stat State group um however we do discuss uh forecasts
[1:34:57] both from the WPC and the CPC to help inform us about when we might let's just need to meet next as one example there
[1:35:06] may sometimes be some consideration to hold off maybe uh on a designation for deterioration in some area based on the
[1:35:14] prediction but largely those designations come from the analysis itself but again um those sorts of predictions might
[1:35:24] better inform us about how often or how frequently frequently we need to meet and do we need to meet sooner than we
[1:35:30] would typically otherwise and this is Richard if I may add uh the U.S Trail monitor does not consider
[1:35:40] forecasts at all the drought monitor is a analysis a map showing the current state of the drought as it exists as of
[1:35:51] the valid time of the drought monitor which is Tuesday Mornings the forecast should never factor into what the
[1:36:00] current conditions are of course the forecast will affect what next week's drought monitor will be but for this
[1:36:09] week's drought monetary forecasts are not considered wonderful thank you Barrett Jonathan Chris and Richard for addressing and answering what I do
[1:36:21] believe is the final question that was posed in today's webinar so as we wrap up I do want to know this is Jonathan
[1:36:28] could I just uh I lost audio and I'm not sure if you add posed the question for
[1:36:34] 10 about downscaling soil moisture uh we did pose that question and it went unanswered so we moved on but if you had
[1:36:46] an answer please I I just did I did want to briefly address that there are methods out there
[1:36:54] where an organizations doing down scaling of soil moisture data sets using much higher resolution uh data sets that that could downscale a
[1:37:06] coarser resolution uh one example I can think of is some of the snap the soil moisture active passive remote sensing
[1:37:15] products the the product itself itself is about a 30 kilometer resolution remote sensing product but some of the higher resolution more
[1:37:28] regional regional satellite missions like nysar can give you a much higher resolution retrieval of soil moisture and and so
[1:37:40] there's been some downscaling techniques to emulate what could come out of a future higher resolution product but I
[1:37:49] think what we could do is think about this a little bit more to provide the best answer in the Google Doc here
[1:37:58] yeah thank you Jonathan and just for all the participants uh we will clean up this document add some links to it and
[1:38:04] we we hope to have this uh live on the training webpage by next Wednesday for the final part so as we wrap up the
[1:38:12] second part of this webinar series I want to thank all the participants wherever you're joining from thank you
[1:38:17] so much for joining today this is a very important topic and hopefully for many of you you'll be able to use some of
[1:38:23] this um some of the information that you learned today and a lot of the work that you're doing as a reminder there is a
[1:38:29] micro lesson we strongly encourage all participants to go through the micro lesson not only will it reinforce
[1:38:36] everything that you learned today that it will prepare you for the uh the next part of the training which will be next
[1:38:41] Wednesday I also want to thank all of the guest presenters today Christopher white Richard Heim Corey Davis Barrett
[1:38:49] Smith and Jonathan case for joining for the question and answer session uh thank you all so much for contributing to the
[1:38:55] second part of the webinar series I also want to thank all of the sport team that might not
[1:39:01] have presented today but you're in the background helping prepare materials and helping get this training to be a
[1:39:07] success so thank you to the entire sport team as well and also to the rset team uh thank you for those that are working
[1:39:13] in the background that you might not be hearing like me today but they've been working uh making sure that this this
[1:39:19] today's training went off without a hitch so thank you to the entire rset team and we look forward to seeing
[1:39:24] everybody back next Wednesday at the same time for the third and final part of this webinar series thank you
