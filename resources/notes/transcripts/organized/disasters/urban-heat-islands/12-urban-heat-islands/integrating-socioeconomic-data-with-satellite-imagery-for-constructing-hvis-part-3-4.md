# Integrating Socioeconomic Data with Satellite Imagery for Constructing HVIs, Part 3/4

`https://www.youtube.com/watch?v=GgfqEiVw_mM` · id 73 · 1:06:14 · module 16 — Module 12 — Satellite Observations for Urban Heat Islands and Thermal Environment

[00:01] welcome to part three of the rset training satellite remote sensing for measuring Urban heat islands and constructing heat vulnerability indices
[00:08] in the third part of the webinar series we'll be hearing again from guest presenters Dr Kathleen Coleman and Dr
[00:15] Evan Mallon who will present on integrating socioeconomic data with satellite imagery for constructing heat vulnerability indices as a reminder this is the third part of
[00:27] a four-part webinar series running from August 2nd through August 11th all webinar recordings presentations code question and answer documents and
[00:39] homework assignment can be accessed from the training page at the link below as a reminder there will be one homework
[00:47] assignment for this webinar series due by August 25th answers must be submitted following the instructions found on the
[00:54] trading page a certificate of completion will be awarded to those who attend all live webinars and complete the homework
[01:01] assignment by the deadline of August 25th 25th you will receive a certificate approximately two months after the
[01:08] completion of the course from Marines Martin Martin it is now my pleasure to reintroduce our guest speakers for today's webinar Dr
[01:16] Evan Malin and Dr Catherine conlon Dr Malin is the senior analyst for Georgia Tech's urban climate lab where
[01:24] he focuses on Urban heat island mitigation and public health response with International public private and academic collaborators while teaching
[01:33] Urban environmental planning and Design he's also an auris fellow in the U.S centers for diseasing control and
[01:40] prevention climate and health program he serves on the evaluation team collaborating with cities and states across the United States on improving
[01:49] climate and health adaptations through the climate-ready states and cities initiative initiative in his work Evan regularly collaborates
[01:57] with academic business and governmental Partners training diverse audiences on Urban heat risk assessment tools and processes processes Dr Conlin is an assistant professor at
[02:10] the University of California Davis jointly appointed in the school of medicine Department of Public Health Sciences and school of veterinary
[02:18] medicine Department of Medicine and epidemiology her research focuses on characterizing how climate change influences human animal and
[02:28] environmental health she employs environmental epidemiological study designs utilizing spatial temporal exposure assessments and weather climate and land use model outputs she also uses
[02:40] mixed methods for social and behavioral epidemiology epidemiology she works with state and local Health practitioners to systematically
[02:48] characterize and Implement climate change and public health actions in support of building an Evidence base for climate change and health interventions
[02:59] Dr Collin over to you you can't see like the go to webinar like panel that I can see right
[03:15] no no that's completely invisible to to us okay thanks Sean so today uh we will help you identify
[03:29] data sources for creating your heat vulnerability Industries which would be short hand call apis we're going to give
[03:35] you some examples of common methods to use in creating these hvis and we're going to help you construct your own hvi
[03:43] for an area of interest on your own foreign foreign so what does it take to construct a heat
[03:51] vulnerability index let's revisit a few key Concepts from the last time as a reminder there are increasing complexity methods
[04:02] include there are methods that have increasing complexity starting with uh hdis that just use individual indicators to those that have unweighted or
[04:11] weighted overlays even including principal component analysis but what's key here is that we want to make sure that our indicators and
[04:21] variables all are unidirectional such that they confer vulnerability meaning we want to make sure that all of our
[04:27] variables increase as they increase they lead to an increase in vulnerability so as you may recall we conceptualize
[04:37] vulnerability as three as a function of three con components exposure sensitivity and adaptive capacity and we have listed here variables or indicators
[04:49] that could be used to characterize exposure sensitivity and adaptive capacity what's key here is that we want to point out that data can
[04:58] be collected from a wide variety of data sources so it may be the case that you're limited by your most limited
[05:04] factor for instance if you have health data that you want to incorporate you may find that that Health Data is
[05:11] only available for one year so it's important that the other data selection and variables that you that you use in
[05:20] your hvi are around that same time period so that you have consistency of data data for the for this demonstration and for
[05:29] the homework assignment and the data that we'll provide to you we're providing these data variables to capture exposure sensitivity and
[05:38] adaptive capacity we're going to take you through a case study study highlighting Detroit Michigan uh which as you know is
[05:47] important to both me and Evan so those who are not familiar with Detroit Michigan is in the northern portion of
[05:54] the United States which is in the northern hemisphere so it experiences cold Winters and it also experiences
[06:00] warm and humid Summers Detroit itself has a lot of variation in its Green Space and residents in Detroit also have
[06:08] low air conditioning prevalence an epidemiologic research has found that amongst our residents in Detroit there is a high sensitivity to extreme heat so
[06:18] when it gets hot residents in Detroit have a harder time coping with that so jumping into our various components
[06:27] and the types of data that we would be able to collect starting first with exposure so from day one of our training
[06:33] last week you were introduced to a new method using Google Earth to access landsat data that can be used to
[06:40] estimate surface temperature so that's one option that you could explore for collecting your surface temperature data but another way that we traditionally
[06:48] access land surface temperatures through Earth Explorer so you can go to Earth Explorer you do need a login so it's not immediate
[06:56] access but it's fairly quick access here you can see that in the drop down we select the analysis ready data set or
[07:04] Ard which does contain land surface temperature or lft and using this data set will give you daytime temperature at a 30 meter
[07:15] resolution and this finer resolution product is really useful for smaller geographies like a city like Detroit which we see here
[07:23] it also provides a snapshot of conditions so it will give you an idea of the relative exposure across the city
[07:31] so here we draw a red box around our our study areas the city of Detroit and we can see in that green highlighted
[07:40] area that that's one scene from our first image from the landsat satellite so we we need more than one scene
[07:47] um so we select another scene and here we can see that our entire study area is covered we then want to select the
[07:56] download button so here we have an arrow pointing to that icon so you can download your data
[08:02] and when you select that you get a lot of options so it's not particularly straightforward at first if you're new
[08:08] to this this uh platform you'll see here we have metadata we have surface reflectance we have brightness but what
[08:16] we want is that surface temperature so we select the surface temperature bundle and we've got even more options
[08:22] you can download the whole bundle but really we're after in this case that land surface temperature so we select
[08:28] this B10 layer and B10 might not seem intuitive at first but really what it refers to is the thermal infrared band
[08:36] from which this data is derived and that will give us our surface temperature another exposure data set that's
[08:44] commonly used is the national land cover database or nlcd so you may recall that we think of impervious surface as a
[08:52] proxy for temperature or a proxy for the urban heat island intensity so if you want to think more broadly about which
[08:59] areas may get routinely warmer you may want to use impervious surface you can even see here that there's a city grid
[09:05] with that purple and pink moving north and east and west so we selected the 2016 layer because we're matching that
[09:14] to the other data that we're collecting for this HCI construction which is around the same time frame
[09:21] similarly from this national land cover database which is U.S focused we can also get tree canopy data and you can
[09:29] see here that for much of the city of Detroit which is located in the center to the east of this box there's not a
[09:38] lot of tree canopy coverage and we think that that will be important to include in our HPI
[09:43] so those will be our exposure data so now we're thinking about sensitivity and remember sensitivity of how much a
[09:50] person can be affected by the Heat and oftentimes we see this coming across as health information and one place that
[09:57] you can get health this health information down to the census tracts which is a fairly refined geography is
[10:03] from the U.S CDC 500 cities database some local Health agencies also provide this type of data on their own websites
[10:12] and portals but it can be challenging to find this data to find spatial scale that's useful for your hbi so as you may
[10:19] recall we're thinking about hpis in this case at the city level we would want highly resolved spatial data and this
[10:26] data set provides that for the US similarly we can collect sensitivity and adaptive capacity indicators from census
[10:38] data so adaptive capacity or the an individual's ability to cope with or modify one's environment to deal with
[10:46] heat exposure so maybe it's their access or ability to afford air conditioning is one that is is very important to capture
[10:54] and often our hcis use administrative geographies and so here we have the census the U.S national census and that
[11:04] is our geography that we use here in the U.S one benefit of using a census geography or an administrative geography
[11:12] is that these are designed to be representative of areas of about the same same so for instance a census tract in the
[11:21] U.S is going to cover an area of about 2 000 to 4 000 people and when you
[11:27] download this data and the data that we provide for you you always want to make sure that you capture your Geographic
[11:31] identifier because you are going to be using that for part of our mapping exercise another tool that is useful for
[11:38] capturing this data is social Explorer and so this is a fee for fee for product um platform that provides pre-processed
[11:49] census data and is available through many different types of Institutions so if you have access to that you might
[11:54] want to check it out so as I mentioned you will be wanting to eventually we'll be mapping this and in
[12:03] order to map your hvi you need to have a shapefile and so we can get shape files
[12:08] from the U.S census website as you see here you can also get this type of information from the city's website if
[12:17] they have a large data portal and many large cities have access or have this type of information
[12:22] shape files sometimes Census Data sometimes the demographic data about the the city available one key feature of our census in the United
[12:35] States is that it is done every 10 years so we want to make sure that the data
[12:41] that we're collecting for our indicators is appropriately matched to the to the geography or the census geography so for
[12:48] instance if we have our disease prevalence data from 2016 that data is going to match spatially to 2010 census
[12:56] because the most recent census 2020 has been updated and would not reflect what we see in 2016. so you want to be sure
[13:04] that there is continuity as you go on to create your own hpis and compile your own data
[13:14] and so now Evan will take you through the process of building your hvi data set and mapping your hvi
[13:24] all right thank you Katie uh so I'm going to walk us through the actual mechanics of processing this data that
[13:30] you've now collected uh to create our hvi map so nowadays there are a variety of tools for processing and mapping hvis with
[13:39] more free and open source options emerging all the time in this training we're going to use quantum GIS or qgis
[13:46] specifically version 3.8 which is free to download for anyone so since we're talking about HPI mapping we'll begin with the spatial components
[13:58] in qgis I'll note up here in the corner in the upper right corner anytime we're in qgis
[14:04] we'll have the qjs logo up here anytime we are working in a spreadsheet editor like Excel we'll have a spreadsheet icon
[14:13] the add data in qjs is up here on the left corner so we'll open that to access our data source manager
[14:23] so in qgis you add different file types separately in the vector tab we can add our boundary shape files for the units
[14:31] of geography for your hvi in the raster tab We'll add our exposure rasters such as our land surface temperature
[14:38] impervious surfaces and tree canopy once we've added our shape files we'll want to create a unique key ID that will
[14:48] help us join external tabular data to our shapefile for further processing and mapping a key ID gives each unit of
[14:55] geography such as census tracks a unique identifier that ensures all the data associated with that tract regardless of
[15:03] source ends up in the right place this will help our spatial components and our tabular data work well together
[15:09] across all platforms we often refer to census geographies by their geoid or fips code fips fips stands for federal information
[15:22] processing system and provides a unique identifier for each geography across the country geoid 10 means that it is from
[15:31] the 2010 decennial census one issue we often run into is a code with leading zeros this can often be ignored when reading
[15:40] the data into a spreadsheet editor like Excel it might just be removed entirely from that field I like to force these into a string
[15:48] format to preserve the code in its entirety by including a letter that has to be stored as a string you can do this
[15:55] in qjs using the field calculator in your shape files attribute table so here I'm creating a field called fips
[16:06] that is a string set equal to Simply the letter f plus the geoid10 code make sure the string is the right length to
[16:15] include the full code or you'll have trouble joining later so this creates a new field in your
[16:24] shapefiles attribute table that is a string format and will not drop any leading zeros don't forget to save your edits in these
[16:32] using the save button to preserve the new field I will repeat this in our data tables to
[16:39] create a unique identical key ID for joining joining so we're going to move over to our spreadsheet editor
[16:48] here in our spreadsheet editor we see geoid again here we can use the concatenate function to add that F to
[16:56] our beginning of that string forcing that string format to preserve this field I recommend copying the column and
[17:03] pasting it as values as we've done in column C here that's geofips that way it's no longer a formula and we can use
[17:11] that code it will not change to join all of our data into qgis so now let's begin processing our
[17:20] exposure rasters we'll start by loading the land surface temperature data we downloaded from Earth Explorer you'll notice here that
[17:27] the units are not what we'd expect we'll need to convert this to a familiar unit using a scale factor as detailed in
[17:34] the product documentation I recommend you do this for any remote sensing product you use for the landsat Ard surface temperature
[17:44] we'll need to multiply by our scale factor here as .003 and so forth and add 149. we can do this in the raster calculator
[17:56] tool in qgis this saves a new raster post calculation so you'll need to click this three dot button here on the right
[18:04] to set your output information then you can multiply your input raster by our scale factor and add 149.
[18:13] but this will produce degrees Kelvin not Celsius to convert to a more commonly used metric subtract 273.15 to get our degrees Celsius
[18:27] you can now adjust your output symbology in the layer properties for a more familiar look right click the new layer select layer
[18:35] properties then symbology to set a color ramp such as blue to red or cool to hot something that fits what we call
[18:43] cartographic convention has a very close relationship between what you would expect and what we see on the map
[18:50] and there we have a more familiar scene you can clearly see The Cool River in the South and some features like dark
[18:57] impervious roads heating up in the sun you see that same kind of City grid you'll also see a few clouds as cool
[19:05] spots on the right so even though we set the cloud cover to very low in Earth Explorer you may still
[19:11] need to take that into consideration When selecting your LST scenes next let's move to our other exposure
[19:20] rasters rasters here we have impervious from the national land cover data set again with some familiar shapes like roads in our
[19:27] city grid and we can repeat this as well with the tree canopy data that we downloaded from that same source
[19:35] so next we need to summarize this our unit of analysis here is the census tract that we get from the shape files
[19:42] so how do we summarize that here we'll use a tool called zonal statistics to summarize our input
[19:48] rasters by census geography shape file or the units we'll be using to map our HPI I think of zonal Statistics as
[19:55] turning your shape file into a cookie cutter with the raster as your cookie dough each of these geographies in the
[20:01] shape file your sense is tracked will take on the average flavor of all the dough it cuts out of the raster below
[20:10] in the zonal statistics tool you'll enter the exposure raster we'd like to use use the shape file we'd like to use is our
[20:17] cookie cutter or our zones and a label you can use in your output this tool enters the summary data directly into
[20:25] your shapefiles attribute table so it helps to select a meaningful label especially if you are using multiple
[20:31] exposure indicators click the triple dot button here on the right to select which statistics you'd like to return for an hvi we often just
[20:40] use the mean or in this case the average land surface temperature per census tract LST mean is now placed directly in our
[20:51] shapefiles attribute table we can repeat this process with our other exposure rasters like impervious entry canopy so at this stage we can begin to
[21:04] consolidate our tabular hvi data that you got from other sources to keep it all in one place there are a lot of ways
[21:11] we can join our data including an R spreadsheet editor python or others but while we are in qgis we can do it here
[21:19] as well save your external tables as csvs and load them into qgis using the do limited text option in our data source manager
[21:31] right-click your shape file and select layer properties to begin your join in the join tab click the plus button to
[21:39] add a new join your join layer will be the external table you just added to qjs and the join
[21:49] and Target Fields will be our key IDs geofips and fips created earlier these need to match and they need to match
[21:57] perfectly in order to get a clean join click ok to complete the join and repeat this process for any additional tables
[22:05] you may have each data source that you go to may end up having a different file you can join them all this way
[22:14] now you can export this data by right-clicking your shape file and exporting you can save it as a shape
[22:21] file if you'd like to preserve all the data you just joined but here we're going to take it into our spreadsheet
[22:25] editor so we can save this as a CSV click the three dot button next to the file name and set your output
[22:34] information and if you'd like you can deselect some Fields if you know you will not need them to reduce your data
[22:40] set to a more manageable size okay okay okay so we're done with all of our spatial processing we're done with all
[22:49] of our joining now let's talk about constructing our hvi at this point we will have some decisions to make we urge you to
[22:58] consider these questions as you design your hvi what intervention do you want to implement implement recall that we've we recommended last
[23:06] time to pick an intervention first then select only indicators that are relevant to that intervention to locate high
[23:14] priority areas for deployment in other words where is this specific intervention needed most in your community community do you have or need a mix of
[23:24] vulnerability components that is do you need indicators of exposure sensitivity and adaptive capacity in your intervention are your indicators independent so you
[23:35] await your indicators these are all important to consider as you design your hvi recall from last time that you'll want
[23:44] to think about how to construct your hvi such that it considers the intervention that you have in mind
[23:51] so what components are relevant to that intervention if you're considering an intervention like an urban forestry master plan you might be interested in
[23:59] tree canopy or tree loss if you have cooling centers in mind you might be thinking about sensitivity and
[24:07] adaptive capacity or who are the people who need the support or resources to adapt where will this intervention be
[24:14] needed most there are also tests you can run to determine the independence of your indicators indicators if you create a correlation Matrix of
[24:27] all your indicators you may see that two or more are highly correlated as a general rule it may be best to
[24:33] remove one or more indicators that correlate very highly that is above about 0.7 or 0.8 if you don't remove them you may be
[24:42] inherently waiting the hvi towards these types of vulnerability by including them as separate measures this particular correlation Matrix was created in R but
[24:52] you can use a variety of tools to create this as well you'll also need to clean your data set
[25:01] there may be some census geographies that have no people living in such as major Parks or an airport
[25:07] we'd recommend sorting your population data set ascending in your spreadsheet Editor to pick out all the zeros first
[25:14] so you can avoid dividing by zero errors later on this will create a few holes in your hvi
[25:22] but that is natural this will happen anytime you have no population or you have incomplete data next we'll want to normalize your
[25:33] variables variables such as by converting them into proportions of the population within each track that meet a certain condition
[25:40] that is that each of your indicators may be on a scale of zero to one it's important to note here that you'll
[25:47] need to determine a meaningful numerator and denominator the numerator is the intervention population and the denominator is the total eligible
[25:56] population which may be different each time and I'm going to illustrate that so consider for example a measure of the
[26:06] proportion of each tract population above the age of 65. the numerator is simply the sum of all
[26:14] population cohorts 65 or older while the denominator is simply the total population in the tract this will then
[26:23] tell you the proportion of the Trax population that is above age 65. if you have a proportion of 0.4 that means that
[26:31] 40 percent of that Trax population is above the age of 65. however for a measure like less than
[26:40] high school education which speaks mostly to Adaptive capacity the U.S census counts this population only for those who are above the age of
[26:50] 25. so the numerator is the population over age 25 who did not graduate from high school and the denominator in this
[26:57] case then needs to be the population over age 25 in each census tract if we included all people in the census tract
[27:06] including those who are still in school it would appear that tracks with high populations of young people have this
[27:12] specific vulnerability even though that is not what we are seeking to measure from a heat vulnerability perspective so
[27:19] make sure that your denominator is only the population that is eligible so next we want to check
[27:27] unidirectionality as we discussed last time we'll want to ensure that all variables variables have higher values leading to higher
[27:37] vulnerability vulnerability here we see land surface temperature higher mean LST means higher heat exposure which means that the tract is
[27:46] more vulnerable this one will work for us as it is but what about tree canopy here we have higher values of tree
[27:55] canopy coverage that actually leads to lower heat exposure because the trees help cool us down that means less
[28:01] vulnerability vulnerability this one will not work for us in our hvi it's actually protective to fix this we can take the complement
[28:11] of the area with tree canopy that is 100 minus the canopied percentage gives us area without tree canopy this indicator
[28:22] has higher values leading to higher heat exposure leading to more vulnerability this one will now work in our hvi
[28:32] next we'll want to score each indicator we often do this using z-scores or the number of standard deviations from the
[28:41] mean within each indicator across your area of Interest this helps us determine relative vulnerability for each indicator within
[28:51] your local population which is the goal of our hvi so this will be calculated taking the observed value for that
[28:58] census tract minus the mean of all values in that indicator across all census tracts divided by the standard
[29:07] deviation of that indicator across all census tracts thank you so to accomplish our final scoring we can simply generate our z-score using
[29:19] the equation on the previous slide and then use a scoring scheme such as the read at all 2009 scheme seen here on the
[29:26] right right you can do this using a series of nested if statements in your spreadsheet editor such as if the z-score is negative two
[29:37] or lower set this value to 1. if not then we use another if statement to check to see if it is between negative 2
[29:44] and negative one setting that to a value of 2 and so forth this will be provided as an example
[29:51] along with your homework so it can get quite complicated you will find the equation there in the resources that we
[29:57] will be sending so it's important to note here that we'll be creating then this hvi score for each of your indicators but we can
[30:11] combine those in different ways so we're going to repeat that scoring scheme for each vulnerability indicator for your
[30:18] hvi design and then we'll combine them in the event of an unweighted hvi it's simply going to be the sum of all
[30:26] individual hvi indicator scores so I have a little example here if your hvi consisted of say land surface
[30:34] temperature which is an exposure indicator diabetes prevalence which is a sensitivity indicator and then three different adaptive capacity indicators
[30:45] that is less than high school over 65 and living below the poverty level if we have this as an unweighted hvi we
[30:56] are essentially inherently weighting this toward adaptive capacity so this is going to be more so uh an hvi that is focused on adaptive
[31:08] capacity because more of those indicators are going to lead into a higher score for adaptive capacity so in
[31:16] this case we may actually want to consider weighting them a weighted HPI will need to add weights
[31:22] to each indicator or a collection of indicators so for example in this HPI we can say what if we have each of the
[31:30] components of vulnerability weighted equally so exposure sensitivity and adaptive capacity are all going to be weighted equally in our hvi to
[31:41] accomplish this we have exposure plus sensitivity plus the average of our adaptive capacity indicators that way each one essentially gets one unit
[31:54] contributing to our hvi and that way we are not inherently weighting the Adaptive capacity components which can
[32:02] then dominate our hvi so this is just one example of how we could weight an HPI but the waiting scheme ultimately
[32:09] will be up to you all right so we have our hvi scores now how do we then map this index
[32:22] well we're going to use our joining process that we talked about earlier to bring this table back into qgis so I
[32:30] recommend in order to preserve all your values that you save your table your hvi table as a CSV and make sure that you
[32:40] have those key IDs this fips geofips whatever you call it that needs to live in your table because you're going to
[32:47] need it to join it back to your shape file so we're going to use this joint function you can click that plus button
[32:54] to add a new join after right clicking on your shape file you're going to add the processed hvi table as a CSV here
[33:03] I've called it Detroit hvi and then as your join and Target Fields you're going to have the key field in
[33:10] the hvi table and the key field in the shapefile table click ok to finish that join so now the data lives with your
[33:21] shapefile but how do we actually review this data so you can design your map using the symbology tab in the layer
[33:28] properties remember this is the tab we used to set our land surface temperature colors from Blue to red
[33:35] you can change how you are displaying this variable up at the top there I choose graduated to get graduated colors
[33:44] what that means is lower values will be a lighter shade darker Shades mean higher values and then you're going to set which field
[33:54] you want to map so I've selected here my Detroit tract hvi which is unweighted so I'm showing the unweighted version of my
[34:03] HPI HPI uh and then you get to select how your breaks will look we suggest using quantile that is an equal count because
[34:12] if we're using hvis to determine relative priority areas across your entire city we want to just highlight uh say what is the top uh 25
[34:25] or 20 percent vulnerable across the entire city because that's where we want to prioritize this particular intervention
[34:33] intervention so you can use whatever scheme you like we just like to use quantiles so you can
[34:38] break the city into even chunks of tracts highlighting that highest say 20 25 percent so you click ok
[34:48] and then there you have it your map is complete complete so this is really just one example of
[34:55] how you can pull together an hvi remember that the way you build your HPI is going to be entirely up to you and
[35:04] the choices you make in that design are going to influence your outcomes so we urge you to review if you do not attend
[35:11] our our session last time we urge you to go back and review that one because we cover a lot of different ways that the
[35:18] design will influence your output and that is all going to be at play here um so we urge you to uh to check that
[35:25] out if you were not already with us then and we urge you to use this as a
[35:30] communication tool so we want you to be able to build to construct to deconstruct to discuss your hvi with any
[35:39] of your community stakeholders with decision makers with planners with public health officials hvis really are a tool for communication
[35:49] we hope you will use in the process of designing your interventions and where and how you will deploy them to have
[35:57] Equitable efficient and effective interventions interventions so I'm going to hand it back to Katie and she'll tell us about how you can use
[36:06] this time to practice making your own hvi great thanks Evan so now you have some time to practice what you've just
[36:16] learned we've given you a lot of information about data sources how you can prepare your data sets to construct
[36:25] your HPI methods for constructing your API and then mapping it and so you have about the next 30 35 minutes to try it
[36:34] on your own we've provided you with a data set of Detroit that we've just described and you will have access to
[36:41] these slides so that you can follow through and try this in real time we recognize that you might not finish it
[36:48] entirely and that's okay we want you to go ahead and practice what you can so that we can help you help answer any
[36:57] questions in the remaining q a session so for your homework we will provide you materials the same
[37:12] data set that you use to just practice that includes your heat vulnerability characteristics for Detroit that are
[37:18] demographic land use and temperature data we'll also have this slide deck so that you can have be able to refer to
[37:25] the step-by-step guidance note we just want to state that this data set that we provided to you is
[37:31] organized so that the variables confer vulnerability meaning an increase in the variable is an increased in vulnerability if you were to do this on
[37:39] your own with your own data set which you are certainly allowed to do you would want to make
[37:46] sure that those variables are organized in the same way we won't be able to provide much feedback on your own data
[37:53] set but it's worth trying if you think that you have a data set that's ready to go to answer your homework questions
[37:59] which are first what is your intervention so we've really drilled in we want you to be thinking about what is
[38:06] the intervention that you might be working on as a result when you get the results of your HPI we want to know what indicators
[38:14] you're going to use so how are you going to capture exposure sensitivity and adaptive capacity you how are you planning on weighting those
[38:22] indicators are you planning on waiting in those indicators then we want to see a map we want to see this output so
[38:29] you've gone through the process of taking the data putting it into the qgis or a GIS platform of your choice mapping
[38:37] it and having that tool that Evan mentioned is a nice Communications tool of your heat vulnerability index and
[38:47] then we also want to know lastly based on those results based on that map that you get where do you think you
[38:54] would deploy that intervention because that is ultimately how we tie everything back to the purpose of the hvi which is
[39:02] ultimately to identify relative locations within a space or within a within a jurisdiction on where you can
[39:10] Target those interventions to protect people from extremities thank you Dr Malin and Dr Collins for providing us with such a wonderful
[39:23] practical on creating your own heat vulnerability indices we've been receiving questions from participants and for those online who would like to
[39:30] ask a question to Dr Malin and Dr Colin please answer your question in the question and answer box we will answer
[39:37] them in the order they were received we will post the Q a document to the training website following the
[39:43] conclusion of the webinar below is the contact information for Dr Conlin and Dr melon along with links to
[39:51] the training page in the rset website we encourage everyone to sign up on the rset listserv for notifications to
[39:57] upcoming webinars each month we offer new remote sensing trainings on land air quality disasters climate and Water
[40:05] Resources Resources we will now transition to the question and answer session of today's training we appreciate your attention and please
[40:13] submit your questions if you haven't already we will get through as many as possible in the time remaining thank you
[40:26] hello everyone uh this is Amita Mehta and um we have a few minutes left so we thought that we'll address the question
[40:35] and answer um first of all thanks Katie and Ivan for the presentation and the demonstration of how to get hvi
[40:45] so what we're going to do is first of all just go through the question and answers and hope
[40:52] um you were able to download the data if you are still having trouble you can try it later and you will have time to work
[41:01] on the exercise between now and next in the next session so we'll start with questions and Iman will be answering the
[41:12] questions helping with the questions so first question is how is surface reflectance different from the top of
[41:21] atmosphere data and which is more applicable applicable to use in representing exposure in terms of LSD surface reflectance temperature values
[41:33] are relatively High compared TOA sure yeah so uh I would not actually recommend using either of these data
[41:46] sources directly if you can access the analysis ready data set the Ard data set from landsat because that's already
[41:55] processed so yes there will be a difference between these two products but if possible I would recommend just
[42:02] going straight to the Ard um the uh the other thing that I'll note is whenever we're doing a uh an urban
[42:10] scale heat risk analysis or something like this hvi that we're building I recommend using data that is as close as
[42:17] possible to your target population so what that means is um um looking more toward the surface because that is where the population
[42:28] most of the population will be rather than kind of a top of the atmosphere that's more of a regional kind of
[42:33] analysis however um um ideally we would get more of an air temperature measurement than just land surface temperature now there is some
[42:44] correlation between the two and it depends on your land cover but unfortunately the air temperature data sets are very rarely available on the
[42:53] scope and scale that is needed for these analyzes and is readily available from something like land surface temperature
[43:00] through landsat so those air temperature data sets are most often derived through either field measurements you might have a
[43:08] distributed sensor Network across an entire city that's fairly rare or slightly more common you might have a
[43:15] regional climate model that is more of a city by city or project by project basis kind of a one-off generation of this
[43:23] data for an air temperature based analysis and so this is most often created on demand which means it
[43:31] substantially limits the availability of that data so it's more common to see this kind of land surface temperature or
[43:38] just uh surface based analysis because we can derive that more readily from remote sensing data sets so yes it's not
[43:48] always ideal but it is a great tool that we can use again as we mentioned in in
[43:53] this presentation to determine the relative prioritization across your area of Interest which areas are more vulnerable than others or get warmer
[44:04] than others as compared to that same geography geography all right so I see we have a question uh
[44:10] on uh two bands for LST calculation band 10 and band 11. what is the difference in the final results of the two bands so
[44:18] uh band 10 and 11 they're both within the thermal infrared range of wavelengths they do have slightly
[44:26] differing ranges of wavelengths so band uh 10 and band 11 are both within that thermal infrared range very slight
[44:34] difference between those two specific wavelengths that they are looking for in this in their sensors so I more often
[44:41] when I review the the Ard data set from landsat C band 10 used to derive that land surface temperature however both
[44:51] are viable sources for LST given that they're within that range so generally we're going to ignore most of the other
[44:57] bands if we're looking specifically for thermal imagery we're going to be focusing in on that thermal infrared
[45:05] range of wavelengths so both van and 10 and 11 will give you the ability to derive that but again if you're using
[45:12] the landsat Ard data set that is already calculated for you please do review our last session part three or part two in
[45:21] this series because we do talk a little bit about um um uh that that uh that difference in the
[45:30] bands actually I guess that was from today so we have the um uh the B10 image that is in the slide so you'll see that
[45:37] uh that guidance there if you review the slides from today all right um um so we can move on to question three uh
[45:51] does the census bureau's differential privacy process impact the ACs data sets or just the 2020 decennial data below
[45:59] the state level um so this is a relatively new policy that's been introduced by the Census Bureau in the United States
[46:09] uh basically what the census is trying to do with this is to protect individual data we don't want to be uh directly
[46:19] identifying any individual in this census we want to look at more at aggregate numbers we look more at
[46:26] averages across these geographies or total counts across the geographies not anything that we can directly attribute to any specific person so that's what
[46:38] this differential policy process means it existed in the 2010 data set but it has been updated for 2020 so there are
[46:46] slightly more strict policies enacted for the 2020 decennial census which means anything that came before it it's
[46:53] not going to have the similar kinds of Protections in that in those data sets um these are going to extend according
[47:02] to the documentation that I've seen to the American Community survey that's the ACs ACs um starting in 2025. now for those of
[47:11] you unfamiliar with the ACs um um basically this is a it's also known as the long form it is a more comprehensive
[47:21] questionnaire that's uh sent out to fewer people but will ask more in-depth information so many of the indicators
[47:30] that we might use in an hvi may actually only be collected in the ACs not in the
[47:36] decennial census the the decennial census goes out to more people we have a more comprehensive uh scope to the decennial census but in
[47:46] order to make sure everyone can answer it and answer it thoroughly it has fewer questions so we don't collect the same
[47:52] amount of data so the ACs is often based on these kinds of statistical relationships these kind of inferences
[47:57] that we can have from the samples that we are able to collect we can infer what that might mean for the larger
[48:03] population now these are conducted or they are released anyway in one three and five year increments each with just
[48:11] more data so they collect more data over these longer time periods and that can reduce your uncertainty now I've very
[48:19] rarely seen an hvi actually take this uncertainty into account there are some analyzes out there and what uncertainty could mean for an hvi
[48:28] however the way that we recommend using hvis again for this relative prioritization across your scope uh your
[48:36] your geography of Interest that you can indeed just use the standard practice of using those numbers as reported without bringing in those
[48:45] kinds of uncertainties because it will still do a good job at showing um the relative vulnerability from one
[48:52] area to another even if there is some uncertainty in that now there's a lot of uncertainty that's brought into
[48:59] um um just your hvi design process you have a lot of choices that you get to make and
[49:04] each of those is going to impact the outcome so I invite you to review part two of this session where we go much
[49:10] more in depth into the uh the sensitivities of hvis and what your design choices could mean for those
[49:17] outputs because that is a very subjective exercise you have a lot of choices you're going to make all of what
[49:24] you're going to affect the outcome so it's really more about how you use your hbi as a communication tool then
[49:31] treating the hvi output as the absolute truth that should guide all of your decisions so in general we don't tend to
[49:39] work those uncertainties into the results but we do use either the decennial census or the ACs as reported because it still can offer a
[49:51] lot of useful guidance depending on how you use it great thank you so the next question is
[49:58] given the landsat collection to Ard dataset is available for the US only on the USGS Earth Explorer site is that a
[50:08] published workflow or for generating this data for other territories so if you refer to the website of
[50:17] mindset Ard data it says that Global lens at ard data are in development for Global region uh globally they will be
[50:30] available soon and here's the reference that you may want to look at to see how the data were produced right now though
[50:39] they're only available for us as you mentioned in near future I think Global Ard will also be available
[50:48] foreign correlated variables when constructing the index you don't need to drop the correlated variables uh this is going to be up to
[51:03] you whether you want to drop these or even check for them I simply bring this up up to show that you may inherently be
[51:11] weighting your hbi toward particular indicators by including them as independent when in fact they may be closely related so I'll refer again to
[51:20] our last session part two we talk more about this Assumption of Independence between your indicators um but uh if you for example have an hvi
[51:31] that includes three separate indicators those being over 65 living alone and over 65 and living alone you include
[51:40] those all as separate indicators they will contribute equally to the final hvi score that may inherently weight the HDI
[51:46] toward these Concepts unless you account for the potential overlap by applying an additional weighting scheme so this is
[51:53] something that is again it's a design choice that would be entirely up to you about how if or how you might want to
[52:00] wait uh your indicators just know that if you include several very closely related indicators even without weighting them explicitly you may be
[52:09] inherently or unknowingly waiting them toward these ideas these Concepts these Concepts here may be something like social isolation
[52:19] um um and so that may be inflated uh in your eight your your total hvi score uh as a
[52:27] result so that's just something I wanted to flag as uh something to keep in mind as you're generating your hvis
[52:36] question six um we have crews in the field in urban and rural areas summers in Louisiana have high temperatures and humidity can
[52:48] I use this approach to warn both plural and urban groups absolutely so you can set your geography
[52:57] to whatever scale you would like I would just recommend that you keep your geography based on particular scales of
[53:05] policy so for example if you're considering uh Statewide policy or even a national policy that's where you might
[53:13] bring in a state or national hvi but if you're really talking about neighborhood specific I wouldn't go much larger than
[53:21] any given City at a time now what you might do in an urban and rural setting is use maybe more of a regional analysis
[53:29] you might include an urban core and then some of the suburbs and excerpts we might do this at a county level or you
[53:37] might just zoom out a little bit to make sure that you're getting both the urban and the rural
[53:42] um um however there's another tool that I might recommend if you're specifically working with deployed crews in the field
[53:50] particularly an area like Louisiana which I absolutely know uh indeed has high temperatures and very high humidity
[53:57] it can get dangerously warm and particularly when we think of this as a heat index not just as the air
[54:03] temperature when we have both high heat and humidity at the same time you might use something like a National Weather
[54:10] Service declared heat warning to to look at more of an acute basis so on this day or maybe looking ahead into a forecast
[54:17] we think that there may be unsafe conditions for outdoor work your outdoor workers may actually have a a very high
[54:25] risk of heat fatigue or illness or even heat stroke um and that is something that uh you
[54:35] might want to try and plan for you know make sure that they get out early enough in the morning and are not working at
[54:40] the peak of the day something like that so that could be a little bit more acute uh whereas the hvi method is a little
[54:46] bit more of a long-term analysis this is more of an average conditions kind of analysis where you would be looking at
[54:53] um sort of longer term phenomena something like uh you know these indicators like people over age of 65
[55:01] that's not something that changes on a day-to-day basis that might change on a year-to-year basis but not so much on a
[55:07] day-to-day so this is looking at more average conditions this is kind of for longer term policies so there's a little
[55:13] bit of a difference there in how you might use the hvi I also want to mention in this question that there is some
[55:19] emerging research uh showing that rural areas May in fact be at higher vulnerability even though we often talk about the urban heat
[55:28] island effect and really warming up our urban areas the exposure then might be higher in cities however the Adaptive
[55:36] capacity might be lower in rural areas for example there may be a lower density of Health Care Resources or Health Care
[55:44] Facilities it may be very very far from say a hospital so if they do succumb to heat exhaustion they don't have such
[55:51] immediate access to get to the care that they might need to recover so this is something that is still emerging now but
[55:59] it is very much a concern we don't only want to be focusing these kinds of heat risk analyzes in our Urban cores we do
[56:08] want to be looking at this more at a regional scale or just not leaving the rural areas behind because when there is
[56:14] a short-term event like heat wave high temperatures throughout an entire region rural areas can be very much at risk as
[56:20] well well and may have fewer resources to cope with that heat this is absolutely something that should be
[56:26] applied in both urban and rural contexts important important question seven when using a data set that has a few census tracts with no
[56:41] data values when conducting the hvi how are these tracks given index values you're going to notice this is a well in
[56:50] the homework or in the exercise that we we just went through when you join your data set you're going to find that some
[56:59] holes appear it's pretty rare to have 100 data coverage depending on how you design your hvi across the entire city
[57:08] for example in this very same data set that we've released on the website that you can download
[57:15] um um for example uh diabetes data is not available in one of the tracks so just by joining that diabetes data set we
[57:25] lose that tract because it just doesn't exist for that tract so you're going to find that there's a lot of holes that
[57:32] might start appearing based on having incomplete data not always no data but often incomplete data across the various
[57:40] data sets you might be compiling you're also going to find some tracks where you just have zero population I recommend
[57:47] that you drop those right away that's kind of part of the data cleaning procedure but it also will depend on
[57:54] what kind of hvi you're constructing so there's no data tracks may be something like a large Park an air part or a
[58:01] non-residential land where you just have a zero population um that is okay to remove generally for an hvi because then you're not going to
[58:10] be deploying any of your resources towards these areas that have no population population you also don't want to be including
[58:16] those in your hbi including only the data that you have because it's going to be at a different
[58:23] scale scale so if you add up only the hvi scores for the indicators that you do have in those
[58:29] areas you're not going to add up to the same score as some of the other tracks that do have complete data so that means
[58:36] that inherently that score is going to be lower and so it's not really a comparable kind of analysis so I
[58:43] recommend just removing those entirely however if you have something like a tree planting plan that is your intended
[58:50] intervention intervention that may still be viable in non-residential areas because it can still help cool the city down if you
[58:57] have an area that's highly impervious but no one lives there replacing that with a lot of vegetation could have more
[59:03] of a regional scale cooling effect you might still want to try and do it you can still use a more exposure-based
[59:09] HPI to help prioritize those areas for tree planting but on the other hand a cooling center may not be appropriate to
[59:16] locate an area with zero population because you're not going to have anyone that that cooling center is serving so
[59:22] this very much is a like everything in HPI is going to depend on the intervention that you have in mind that
[59:28] you would like to use the hvi to help prioritize great uh so next question is how do I
[59:37] assign weights to the indicators this is ultimately up to you I have a few examples in the data sets that we
[59:47] provided so you can open those in a spreadsheet editor click on the cells and for the weighted hvi that is I
[59:54] believe hvi underscore W for weighted you can see one example of a weighted hvi scheme and what I did in that one
[1:00:02] was basically just weighted them equally across the different components of vulnerability that is exposure sensitivity and adaptive capacity it's
[1:00:11] just one example of what can be done for a waiting scheme if you if you want to
[1:00:16] have a generalized HPI where you say each of these components are equally important for our analysis but we don't
[1:00:23] want to inherently weight them by having more indicators in one component over another another so so um you may design an hvi a different way
[1:00:35] for example you may have a tree planting plan like we've talked about weighted more towards exposure indicators while a
[1:00:41] cooling center may be weighted more towards adaptive capacity or sensitivity where are the people who will be most
[1:00:47] affected by this heat such that they can get respite in a cooling center so you may apply the weights that way
[1:00:53] you can apply them just by a simple multiplication factor or say a proportion of the total HPI score I have
[1:01:00] an example here a weighted hvi score may be equal to 0.8 times the indicator hvi Score 1 plus 0.2 times the indicator
[1:01:12] score number two so this example is an HPI with only two indicators is pretty simple HPI and we
[1:01:20] may think that the first hvi score or indicator is much more important than the other so I'm going to put this at an
[1:01:27] 80 percent of the total should really be consisting of this indicator's hvi score component component the other one we want to include it just
[1:01:36] isn't nearly as important for the intervention we have in mind so we're going to include it but it's only going
[1:01:42] to have a 20 percent contribution to the overall HPI score so this is another way that you can think of these HPI
[1:01:49] weighting schemes is just where do I want to place a greater emphasis on particular indicators over others
[1:01:57] because we think they may be more relevant to this indicator or to the to the hbi design by which I mean the
[1:02:07] intervention that you have in mind that you would like to use this hvi to help you locate where that may be most
[1:02:13] effective effective so that's it's ultimately going to be up to you but that's just a couple of
[1:02:18] different examples in how you can uh start to design your waiting schemes uh question nine is I just noticed that
[1:02:29] the hvi you uh you calculated seems to be a normal distribution is that a regular property of hvi
[1:02:41] this will depend uh on your data so if your data is more or less normally distributed you may see more of a
[1:02:49] normally distributed hvi in the end it's going to depend on what kind of processing you do how
[1:03:00] uh how biased your data might be for example if you're looking at a geography with very high inequity you may find a
[1:03:08] large proportion of population that has one condition and then not much in between and a very large population
[1:03:16] that has no condition you know this could be income something like that so the distribution will impact that now it
[1:03:23] is more common to see a normal distribution if you use z-scores like we've used here again you do not need to
[1:03:30] use z-scores it's just one one useful way to do it and this is how they do it
[1:03:35] in that read at all 2009 scheme so uh if you use these scores that's more or less
[1:03:40] uh going to result in in a relatively normal normal um distribution of scores because that is sort of the way that the z-score is
[1:03:49] set up so it is all relative to the mean and standard deviation of a given indicator within your data set so you
[1:03:55] will have some negative some positive and that's all just going to depend on the distribution of the underlying data
[1:04:01] so a long way to say not always normal but depending on the underlying data you may end up with a normally distributed
[1:04:09] hvi now we also talked about last time um um that uh how you map your hvi will also
[1:04:18] be very important we recommend um that you might use something like the quantile uh say five bins whereas the
[1:04:29] such that the highest hvi score in those bins is really just showing if you were to break this geography into even
[1:04:38] buckets of vulnerability while the highest scoring hpis are um say that the top 20 most vulnerable maybe that's where we
[1:04:49] um um we'll place our emphasis for these interventions interventions so unfortunately I believe we're out of time I think that may be the last
[1:04:58] question we'll be able to address uh for now again feel free to reach out to us uh directly of our contact information
[1:05:07] um yeah thanks everyone for joining yeah thanks thanks everyone and so uh question 10 I'm just going to I have
[1:05:15] given some references here which regionally Connect Air Pollution to studies going on relating air pollution to uhi and human health so you may want
[1:05:26] to check some of the references out and we're almost out of time so uh the questions which are remaining we will
[1:05:34] address them and we'll post a QA on the website so uh thank you everyone for attending today's session uh thanks Katie and Ivan
[1:05:46] for your um presentations and this question answer session uh we'll see you on Thursday at the same time
[1:05:55] that's the fourth session and so well thanks again and so on behalf of the rset team uh thank you all
[1:06:05] I will see you on Thursday
