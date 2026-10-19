# How NASA Measures Nitrogen Dioxide (NO2), Part 1/2

`https://www.youtube.com/watch?v=truE3iCaGt8` · id 41 · 1:39:28 · module 23 — An Inside Look at How NASA Measures Air Pollution

[00:00] you hello everyone welcome to our first session of our introductory our Sat webinar an inside look at how NASA
[00:11] measures air pollution I'll be giving the webinar today my name is dr. melanie filete cook i'm a research scientist at
[00:19] NASA Goddard Space Flight Center in Washington DC we at our set were inspired to create today's webinar by all the media
[00:29] coverage we've been seeing recently but the decreases in air pollution we see in the satellite data these decreases
[00:36] correspond to decreases and economic activity due to the many stay-at-home orders across the country and across the
[00:44] world a lot of the media coverage has focused on satellite observations of nitrogen dioxide or no.2 so this
[00:53] training will introduce new users of satellite data to how satellite to make their measurements what pollutants are
[01:00] measured from satellites do's and don'ts for interpreting what we see in the satellite data and how to access and
[01:07] visualize NASA data this is session 1 of this two-part webinar series called measuring nitrogen dioxide from space and that's me in the
[01:21] lower left corner hello the our set program manager dr. Anna Prados is giving the presentation in Spanish later today and you can see her
[01:31] there in the center dr. Pawan Gupta and dr. Prados will be presenting session to measuring aerosols from space on
[01:40] Thursday May 28 before we start today's presentation I'd like to provide a brief introduction to the our set program since 2009 our
[01:54] program has provided freely available education in applied remote sensing through online and in-person instruction our courses are offered at several
[02:04] levels of difficulty in order to fit the wide variety of learner needs they cover a variety of NASA missions and how to
[02:11] apply the satellite observations to real-world applications we offer our courses across many themes air quality disasters land and water applications
[02:24] past course recordings and training materials are available for free through our website and YouTube channel playlist you can click on the link shown here to
[02:34] learn about future trainings you can connect with us through Twitter and sign up to our listserv you
[02:44] you our set has an international audience of participants from across many sectors including academia both faculty and
[02:52] students the private sector and all levels of government as demand for satellite remote sensing grows so has
[03:01] our audience and level of participation in 2019 we had a record attendance with over 12,000 participants you
[03:12] you today we'll talk about only one of the many NASA satellite missions aura join us for other RC trainings to learn about
[03:21] other nasa missions such as for example landsat for land applications GPM to learn about precipitation or SMAP to
[03:32] learn about soil moisture you can gain access to these trainings through our website and YouTube playlist so back to
[03:41] today our goals for this webinar are to help you the user understand exactly what satellites measure what maps like
[03:50] these seen on the right hand of your screen are actually showing and describe the capabilities and limitations of
[03:56] satellite no.2 observations at the end I'll show I'll show you how to find and create satellite no.2 imagery
[04:06] you might wonder why NASA is concerned with air pollution outdoor air pollution is responsible for millions of deaths every
[04:18] year year in 2016 air pollution was responsible for 4.2 million deaths 91% of the world's population lives in a region
[04:28] where the air quality exceeds the guidelines set by the World Health Organization where whu-oh these regions are frequently the most poorly monitored
[04:38] from the ground we'll see in this presentation how satellite data can help fill in that gap and help quantify the
[04:46] impact of poor air quality on human health you nasa provides many satellite observations that are ready relevant for
[04:57] air quality such as ozone carbon monoxide or CO nitrogen dioxide no2 sulfur dioxide so2 and greenhouse gases
[05:10] like carbon dioxide or co2 and methane NASA also provides satellite observations of aerosols which dr. Pawan Gupta will discuss on Thursday today
[05:22] we're going to focus on satellite observations of nitrogen dioxide or no.2 so why are we going to focus on no.2 and
[05:34] not something that you've probably heard of more often like ozone well like ozone no.2 is a criteria pollutant regulated
[05:42] by the EPA because it's harmful to humans and ecosystem health no.2 along with sunlight and other carbon compounds actually produce ozone
[05:51] near the surface sources of no.2 are primarily from combustion of fossil fuels like from cars power plants and
[05:59] manufacturing other sources of no.2 include lightning emissions from soils and fires because of this most no.2 pollution is near the surface where
[06:11] people and ecosystems live and breathe we're going to talk later more about why no.2 in particular is a
[06:19] useful air pollutant to measure from space but Before we jump into more information about no.2 in this next section we're
[06:30] going to introduce some basics of remote sensing this slide shows three key components of air quality monitoring ground
[06:43] measurements observations from air and from space and computer models traditionally air quality monitoring has been done using instruments on the
[06:53] ground these monitors are usually very accurate but as you can see in the map near the top this map shows the location
[07:02] of ground monitors of no2 around the globe and you can see the large gaps in coverage even in countries with a lot of
[07:09] monitors like the United States satellite data helps fill in these gaps and provides information where there's no information from the ground
[07:20] atmospheric models are needed to predict future air quality as well as providing information on species we cannot measure
[07:31] together these three components can comprehensively observe and predict air quality quality you you nASA has a large fleet of instruments
[07:43] that make earth observations these red arrows highlight the missions that make measurements that are relevant to air
[07:51] quality today we're going to be focusing on measurements made by the ozone monitoring instrument or Oh me on board
[08:01] the Ora Sally satellites instruments sensors I'm gonna be seeing these words a lot throughout this webinar and there's a difference
[08:14] between a satellite and a sensor our instrument the satellite is the platform on which the instruments are placed
[08:22] sometimes there's one major instrument onboard a satellite platform and the two mames might be used interchangeably other satellites like Ora shown here
[08:32] have a lot of sensors or has four instruments onboard bomi tests hurdles and MLS and again today
[08:41] we're going to be focusing on Oni what exactly is remote sensing remote sensing is the act of collecting
[08:51] information about an object without being in direct physical contact with it our eyes are actually a great example of
[08:59] a remote sensing system your eyes receive information about a scene and your brain processes and interprets this
[09:07] information this is a simple example of passive remote sensing but what if it's dark we can't see on our own in the dark
[09:18] but if we provide our own source of light maybe a flashlight then we can see this is a simple example of active
[09:28] remote sensing where we would provide the source of energy the sensor is what collects information about the object
[09:36] that is interacting with the source of energy passive sensors like Oh me depend on the Sun as the sole source of light or
[09:49] energy solar radiation from the Sun passes through the atmosphere hits a target like a forest or water or City
[10:00] and that energy is either absorbed reflected or transmitted back through the atmosphere the intensity or strength of this reflected and emitted radiation
[10:12] is influenced by the characteristics of the surface such as whether it's ocean snow ice desert as well as the
[10:22] characteristics of the atmosphere temperature humidity clouds gases aerosols different wavelengths of light respond differently to physical properties of the surface or the
[10:35] atmosphere so in solar radiation interact with each of these it contains the signature of those objects or the
[10:44] air it traveled through and that is a key component of satellite remote sensing for gases like no.2 we know that
[10:54] each gas has a distinct spectra so in other words we know how and by what amount different molecules absorb
[11:02] radiation at different wavelengths so we can identify a fingerprint for each atmospheric constituent this slide shows a very simplified
[11:17] version of the remote sensing process from what the satellite measures to some of the quantities we're going to see
[11:24] today today once radiation reaches the satellite and remember this energy contains the signature of the surface or the air a
[11:33] travel through the sensor receives the wavelengths it's selected to measure for example Oh me detects radiation in 740
[11:42] wavelength bands along with this radiation we use theoretical calculations involving radiative transfer theory assumptions above the state of the earth atmosphere
[11:54] system and computer algorithms to estimate or retrieve geophysical quantities like an o2 it's very important that we emphasize that
[12:07] satellite retrievals are not direct measurements remember satellites measure radiation and convert this information to geophysical parameters like no.2 using these
[12:20] theoretical calculations and assumptions so there will be errors this is why science teams spend a lot of time and
[12:29] effort to validate satellite data using other measurements this helps us to find these errors and uncertainties knowing
[12:39] these errors can help users of satellite data determine to determine if it's useful for their application so maybe some of you are familiar with
[12:52] the saying a picture is worth a thousand words well a satellite image is worth can be millions of data points each
[13:02] pixel of a satellite image represents a geophysical number in fact a satellite image is really a two-dimensional array
[13:13] of individual elements arranged into columns and rows these elements are called pixels and they are the smallest
[13:21] unit of an image or measurement each pixel has two characteristics or pieces of information an intensity and a
[13:32] location and the spatial resolution of a satellite is defined by the size of that pixel spatial resolution refers to the
[13:44] size of the smallest area that can be resolved as the resolution increases or gets finer different objects or features
[13:52] can be measured more precisely these maps show no2 from two different instruments on the left is from oweme
[14:02] oweme has a spatial resolution of 13 by 24 kilometers squared and on the right is troppo me another instrument we'll
[14:11] discuss briefly tropone II has a finer spatial resolution of 5.5 by 3.5 kilometers squared on these images
[14:22] larger values of no2 are seen in the warmer colors yellows and reds you can see in the image on the right the
[14:30] features are smoother and in some cases like the hot the small hot spot seen in northern South Africa this can only be
[14:39] seen in the higher resolution image so higher resolution means that sometimes we can identify more features than in
[14:47] the lower resolution data many of this in NASA's Earth observing system have what's called a polar orbit these
[14:59] satellites move around the Earth from pole to pole and provide a global view of Earth as the satellites are orbiting
[15:07] the Earth turns underneath it in a sun-synchronous orbit the satellite passes over the equator and each latitude at the same local solar time
[15:18] each day meaning the satellite passes overhead at essentially the same solar time throughout all seasons of the year
[15:26] this lets us regularly collect data at consistent times which makes long-term comparisons easier oumy is an example of
[15:37] a sun-synchronous polar orbiting satellite as a satellite orbits the earth the instrument sees a certain portion of the
[15:47] Earth's surface the area on the surface is called the swath in the image on the right you can see the swath of the MODIS
[15:56] instrument onboard the Terra satellite another sun-synchronous polar orbiting satellite for one day notice that over the course of the day almost the entire
[16:08] globe is imaged but there are gaps in coverage around the equator you you this is a great animation showing the
[16:20] polar orbit of the aura satellite and oh me taking observations note how the satellite orbit stays the
[16:27] same and the Earth spins beneath it also note the wide swath of the only instrument you if the swath of an instrument is wide
[16:51] enough polar-orbiting satellites can provide a snapshot of global images every day four instruments with narrower swath widths global coverage will take
[17:02] longer than one day again these in this image these are the swaths of the MODIS instrument onboard the
[17:09] Terra satellite because of the gaps in orbit around the equator modis takes one to two days to achieve true global
[17:17] coverage and because of reasons I'll discuss in a couple of slides Oh me also provides global coverage in one to two
[17:25] days the temporal resolution of an instrument refers to how frequently it can provide an observation of the same
[17:32] area on the earth as we can see here that mostly depends on the swath width of the instrument
[17:41] you so in the last section we introduced some basics of satellite remote sensing what satellite instruments measure and
[17:50] how they provide global coverage now we'll talk more specifically about oh me and the measurements it makes
[17:59] the ozone monitoring instrument or omie is an instrument called a hyper spectral imager that collects information over
[18:09] 740 wavelength bands bomi is onboard the aura satellite which is a low-earth orbit at 705 kilometers above the earth
[18:18] it has an equator crossing time of about 1:45 p.m. meaning aura passes over the equator at this time every day
[18:26] Bomi had a swath large enough to provide global coverage in one day however the row anomaly and we'll
[18:34] discuss that in a couple of slides has blocked several rows the spatial resolution is 13 by 24 kilometers
[18:43] squared but gets larger as you get towards the edges of the swath where it can be over a 100 kilometers several
[18:50] available products are listed here and include total and tropospheric column ozone and no.2 aerosol optical depth in
[18:59] the UV and total column formaldehyde and so2 we're going to talk about what we mean by total and troposphere columns in
[19:08] the next section you you advanced users of satellite data can download ohmy data in its native resolution or what's called level 2 data
[19:21] each satellite orbit comes in one data file and an example is shown here on the right where you can see one single orbit
[19:31] level 2 data is usually available within a day or two of the satellite making its measurement the omie level 2 no.2
[19:41] product is called um no.2 and gabby found at the website shown here on the right if you're interested in using ami
[19:50] level 2 data a readme file for the data is shown here as is a link to an
[19:55] advanced our said webinar we did last year on no.2 NASA also provides omie data on uniform grids these are known as
[20:07] level 3 products and can be easier to use for new users in order to create gridded level 3 products the native
[20:16] level 2 data is filtered for quality Bend and averaged into uniform grids two grids are currently available
[20:27] no.2 D is at a quarter of a degree which is about 25 kilometers squared and um no.2 D underscore HR is at point one
[20:39] degrees which is about ten kilometers squared they're both available as daily files or monthly average files at the
[20:49] website shown here several file formats are available and also shown on the slide slide netcdf and hdf5 file formats are binary
[21:00] and usually require other software to read them there are a few important considerations to make when using ohmy data first since
[21:14] 2008 omie has experienced what's called the row anomaly because of a hardware issue on the satellite some rows of data
[21:22] are not usable this started in 2007 and grew until 2012 at which point it was affecting almost 50% of the data it has
[21:31] not grown since 2012 you can see the effects of the row anomaly in the difference between the pre and post
[21:39] anomaly no.2 maps on the bottom of your screen the areas in black the stripe features in black on the bottom
[21:48] right-hand plot you can see that as the row anomaly if you're interested in using level 2 data additional filters
[21:58] and quality flags must be applied to the data before any analysis we cover a lot of this in our advanced webinar if
[22:05] you're interested these filters and quality flags have already been applied when creating gridded level 3 data but some
[22:13] information is inevitably lost by averaging data from different pixels to generate the uniform grid values you you you
[22:25] you chupa me is another instrument that measures no.2 troppo b was launched on the sentinel 5p satellite by the
[22:33] european space agency troppo me also provides global coverage and higher spatial resolution than o me we saw an
[22:42] example of this earlier when we were talking about spatial resolution today we're focusing on Oh me because of its
[22:49] long historical record troppo me has been making measurements since late 2017 as opposed to 2005 for o me this long
[22:59] record from o me allows us to place results we see today in context of a much longer historical record if you're
[23:07] interested in learning more about Trapani we devoted an entire session to it in our advanced no.2 webinar now that
[23:17] we know more about satellite measurements and no2 products from the only instrument in this next section we're going to focus on interpreting
[23:24] what we see in no.2 images for example here we see an image created using only gridded no.2 data but what are we
[23:36] actually looking at when a ground monitor a measurement it's measuring the amount of pollution at the Earth's surface when
[23:48] a satellite instrument is making a measurement it's seeing the whole atmosphere so satellite measurements of no.2 and many other gases are called
[23:57] total column measurements and they represent the amount of no.2 from the surface to the top of the atmosphere
[24:06] atmospheric columns usually have units like molecules per centimeter squared this means the number of molecules in the atmospheric column within a 1
[24:18] centimeter squared area on the Earth's surface you you the atmosphere and total column are made up of several layers each with its own
[24:29] distinct characteristics you can see some of these layers here we want to focus on the lowest layer the
[24:36] troposphere the troposphere is where we live live see you are here about the surface the troposphere is where almost all weather
[24:45] and clouds occur it's important to distinguish between the total column the troposphere at column and the surface
[24:54] the total column is the column from the surface to the top of the atmosphere the troposphere a column is the column from
[25:03] the surface to the top of the troposphere and the surface is just at the surface columns have units of
[25:10] molecules per centimeter squared surface measurements usually have measurements in terms of mixing ratio such as parts per million or ppm or concentration such
[25:22] as micrograms per meter cubed using information from other instruments homie tropospheric column no.2 is calculated for momi
[25:34] total column no.2 typically both quantities are available within a data file so users should pay attention to
[25:43] which one they're using for the rest of this presentation we're going to focus on troposphere at column no.2 so again
[25:52] the amount of no.2 from the surface to the top of the troposphere you you so what can a tropospheric column tell
[26:03] me about the surface instruments like Oh me can't really distinguish we're in the troposphere column a constituent is
[26:11] however some information on the vertical distribution of a pollutant can be inferred by taking a couple of pieces in
[26:18] front of information into account where are the pollutant sources in the case of no.2 the primary source of no.2 is
[26:28] combustion from cars and power plants so most enter two sources are at the surface surface another factor to consider is how long a
[26:36] pollutant stays in the atmosphere or its lifetime near the surface no.2 has a relatively short life time of a few
[26:45] hours so high levels are usually found at the surface near sources this is represented by the light blue line in
[26:54] the picture on the right most of the no.2 troposphere column is usually located near the surface species with
[27:02] longer life times like days to weeks are represented by the red line these species can mix vertically and with
[27:10] surrounding air and make it difficult to infer any information about the surface using a column value because of the reasons I just discussed
[27:23] no.2 short life time and high concentrations near the surface changes in no.2 at the surface correspond very
[27:31] well with changes in the troposphere column the map on the right shows the percent change in surface no.2
[27:39] measurements from 2005 to 2013 the map on the Left shows the percent change in the tropospheric column
[27:48] measurements from oh me these changes show very good agreement so let's revisit this image again and we can say
[27:58] a lot more about it now first we can see the color bar it shows tropospheric column no.2 or
[28:05] again the amount of no.2 from the surface to the top of the troposphere prett this image carefully
[28:13] no.2 levels observed from o me can give us information about no.2 levels at the surface we can also see this image shows
[28:21] an average of a 30 day period over three years on this image we can see local and
[28:29] regional features we can see higher values or darker colors of no.2 over several cities as well as high no.2
[28:38] levels associated with electricity generated by thermal power plants in eastern India this animation on the right shows just
[28:51] how different tropospheric column no.2 in March can be different from year to year from 2015 to 2020 and we've
[29:02] described how and why changes in troposphere columns can give us information about changes at the surface so what changes no.2 at the surface
[29:13] changes at the surface will always the some combination of emissions chemistry and weather we're going to discuss each
[29:23] of these in more detail you you first emissions the amount of no.2 emitted from a given source can vary
[29:33] depending on fuel type or other conditions but emissions can also change because of increased use of renewable
[29:42] energy or an air quality or climate change policy or regulation usually involving cleaner technology emissions can also change because of unexpected
[29:53] changes such as economic recession natural disasters widespread stay-at-home orders such as due to the current pandemic also sudden policy
[30:05] interventions such as in advance of the Beijing Olympics next chemistry no.2 and other pollutants are always being emitted into the
[30:18] atmosphere but after their admit after they are emitted they undergo chemical reactions that determine their lifetimes or again how long they stay in the
[30:28] atmosphere the speed of these chemical reactions can change depending on factors such as the temperature or the
[30:36] amount of sunlight which will lengthen or shorten a pollutants lifetime so for example the seasonality in temperature
[30:46] every year will lead to a seasonality in the speed of many chemical reactions and thus the amount of no.2
[30:54] this is why you typically see the same period or month over different years this allows us to account for seasonal
[31:03] changes in temperature and other variables you finally weather we all know firsthand how variable weather can be from day to
[31:18] day and from year to year weather can also impact the amount of no2 at the surface surface winds can disperse and our two emissions
[31:27] leading to either an increase or a decrease in pollution levels depending on wind direction and speed sometimes
[31:35] high winds can spread out emissions increasing mixing and lowering in our two levels near the surface as I
[31:42] mentioned during the last slide higher temperatures and more sunlight can speed up no.2 chemistry in the air rain can
[31:50] wash away pollutants cleaning the air and lowering pollutant levels into reducing sunlight clouds also interfere with satellite measurements
[32:00] the map on the right shows tropospheric column no.2 on May 10th 2020 the striped black areas are the Omo mean row anomaly
[32:11] we talked about earlier but you can also see other areas of black where there are no measurements these correspond to
[32:18] areas with clouds here I've included imagery from another instrument years that shows the clouds that are interfering with the
[32:27] measurements remember our native resolution level two and grade level three discussion we should note that if a day or a month is especially cloudy
[32:38] over a region that region is going to have less data points going into that gridded average you
[32:47] you so now I'm going to ask you a couple of questions about these Maps you see on
[32:52] your screen so take a minute and look at them carefully note what is being measured and over what time periods and
[33:03] I'm going to ask you a couple questions that review some of the concepts we've talked about today
[33:13] now take a look at these maps I'm going to ask you a couple questions about these maps so take a minute and look at
[33:21] them carefully this corresponds to slide 41 in your training materials note what is being measured in over what
[33:32] time periods so in a minute I'm going to ask you a couple of questions that review some of
[33:40] the concepts we've talked about today so if you want to have this slide handy in your slide deck while I while I ask you
[33:48] a couple of questions you can just pull that up again it's slide 41 you okay so I'm happy that 70% the correct
[34:18] answer is troposphere a column no.2 this is different in total column no.2 total column is from the surface to the top of
[34:27] the atmosphere troposphere a column is from the surface to the top of the troposphere or tropopause when we're
[34:34] looking at images such as these we're looking at troposphere at column no.2 troposphere column no.2 is the quantity
[34:42] when we see changes will reflect changes the surface why don't we go to the next question question you
[34:57] okay not sure if you can see it but once again slide 41 referring to are these images for one day
[35:06] yes each map shows how to data no or no the map show no.2 data average it's either one day over a week or over
[35:27] a month so the maturity got it correct these maps show no.2 averaged over one month for the top map we're seeing
[35:40] one-month averages over a three-year period and the bottom map shows the values for March 2020 great okay next
[35:51] question okay this question is this map of gridded data this is the map of Greater data or the
[36:07] native resolution of the instruments you okay that's great so 80% the gridded data is correct the native resolution
[36:32] where swath data would represent one or more orbits of the only instrument a level three data has been produced by
[36:41] NASA and it's gridded and involves carefully averaging and filtering the need of resolution satellite data we're seeing gridded data here next question
[36:57] at the surface yes no or we cannot say you okay so this is a little tricky so this
[37:23] show a map of no.2 at the surface so the the correct answer is no the reason it's
[37:30] not we cannot say is because at the bottom of the map where you see the color bar you can see the units the
[37:37] units of this map are in molecules per centimeter squared so we know that it's a column value and not a surface value
[37:44] which is more often in units of mixing ratios such as ppm or concentration or micrograms per meter cubed so that's how
[37:54] we know what quantity we're looking at in these maps next question can change them the tropospheric column
[38:03] tell me information about changes at the surface yes or no you you great so yes changes in the troposphere
[38:22] column can give us information about changes in the surface just specifically for no.2 primarily because sources of
[38:30] no.2 are primarily at the surface and because of no.2 short lifetime near the surface it means that in the column
[38:40] most of the no.2 is at the surface which is why for no.2 changes in the troposphere column can give us that
[38:47] information okay last question launched are the changes between the top and bottom images due to the economic slowdown
[39:00] because of copán 19 you Melanie caso the changes between the top and the bottom of image due to the economic
[39:20] slowdown so the key word there is all so the answer is no all of the changes are
[39:27] not due to the economic slowdown the amount of no.2 at the surface is always going to depend on emissions chemistry
[39:37] and weather so there's always going to be some piece of each of these components in changes that we see so if
[39:47] we want to calculate the change in no.2 from only say the reduction in economic activity due to the pandemic that
[39:55] requires careful and rigorous scientific analysis so we can say that of course some of it is of course due to the
[40:04] economic slowdown but we can say that all of it there will always be also changes in chemistry and changes in
[40:11] weather in this next section we're going to highlight a few applications of owe me an O to data
[40:30] you you only data has been used for a wide variety of applications including monitoring changes in air pollution and
[40:39] will show a few examples here to review changes in pollution could be due to air quality regulations increases in
[40:46] renewable energy or changes in economic output Romi data has also been used to detect sources such as power plants tar
[40:55] sands or smelters and also can serve as a proxy for pollutants that are emitted at the same time like carbon dioxide
[41:04] agencies like the EPA use only data to evaluate their air quality models an assimilation of only ozone data has been
[41:12] used to improve air quality simulations and forecasts you Oh me has widely been used to detect long-term improvements in air quality
[41:23] over the United States these maps show changes in troposphere column no.2 from 2005 to 2008 teen from owe me large
[41:34] decreases on the order to twenty to sixty percent are seen over urban areas these maps show recent decreases in no.2
[41:46] for March 15th to April 15th as compared with the 2015 to 2019 average of the same period levels this year were 30 to
[41:58] 40% lower than the previous five year average from our previous discussion we know that some of this decrease
[42:05] certainly due to reduction in economic activity due to the current pandemic but year-to-year changes in weather and long
[42:13] term improvements in air quality are also part of this change for example Florida is currently having a record
[42:20] warm and dry season this certainly plays into the levels of no.2 there similarly in South Asia and our two
[42:32] levels from March 25th to April 25th are thirty to sixty percent lower than the previous three years some of the highest
[42:39] reductions are seen over densely populated areas with the strictest stay-at-home orders wellmy has also been used to detect no.2
[42:52] increases associated with oil and natural gas activities the left maps show changes in omean o2 from 2005 to
[43:00] 2014 2014 while more urban areas like Bismarck North Dakota and Houston Dallas and Austin Texas show decreasing no.2 trends
[43:11] in blue colors other areas of significant increases increases can be seen in the warmer red colors looking at
[43:20] the veers and night flights and that appears lights at night products on the right we can see these areas are lit up
[43:28] not because of population or cities but because of gas flaring some researchers have used tropospheric column no.2 to calculate estimates of
[43:41] surface level no.2 using information about the no.2 vertical distribution from an atmospheric chemistry model this table shows information about one
[43:52] satellite based surface no.2 estimate developed here at NASA Goddard by lo Clem saw these estimates are monthly and
[44:00] available at 0.1 by 0.1 degree resolution from 2005 to 2016 at the website shown here so in last in this last section of our
[44:16] webinar I'll review where to download ohmy data and I'm going to demonstrate two websites where you can download or
[44:23] create your own Oh me at home Eno - imagery you only native resolution level two and gridded level three data can be
[44:37] downloaded from the Goddard Earth Sciences data and Information Services Center or jazz disc register for an earth data account in
[44:46] order to download data gridded data and images can also be downloaded from the aura validation data center website for more information and
[44:57] a tutorial about downloading ami data you can view our advanced no.2 webinar NASA worldview is a tool that can be
[45:09] used to create imagery and animations dr. Pawan Gupta will demonstrate how to use worldview on Thursday so now the first website that I'm going
[45:23] to demonstrate is the NASA Goddard NASA Goddard Space Flight Center air quality website website so I'm going to exit out of my
[45:32] presentation air-quality GSF see nasa deca and [Music] [Music] all of the information that I am going to go over now is also in your training
[45:53] materials so here we see the front page of the NASA air quality website on the sidebar we see links to other relevant
[46:05] programs the NASA food security initiative the NASA air quality forecasts NASA are set the NASA health and air quality Applied Sciences team
[46:19] and NASA upside sciences you can click on any of these links to find out more information about these programs the
[46:27] front page has the latest news when we're going to look at a couple of these tabs the pollutants tab has more
[46:36] detailed information about nitrogen dioxide ozone and particulate matter we're going to click on the nitrogen dioxide link in here you can find
[46:47] animations and very nice maps that you can download are freely available here's also global no.2 no.2 you
[47:00] you scrolling back up to the top there is access to more downloadable images for the top 20 US cities top 195 world
[47:10] cities and top 150 US power plants if we go to the top 20 US cities it'll bring
[47:19] up a new tab and we can see for several cities a lot of imagery has been created so let's
[47:29] click Washington DC near where NASA Goddard is located and we have some pre-made maps of bomi tropospheric no.2
[47:40] from 2016 over Washington area we also have the change in tropospheric column from 2005 to 2016 all of these changes
[47:52] have been negative so less values and lower values in 2016 and 2005 so we see a lot of these blue colors here and we
[48:02] see the same map but instead of the actual column change it's in percent we also see what are called time series
[48:12] plots of no.2 over Washington on the y axis we see Oh me troposphere column no.2 and on the x axis we see monthly Oh
[48:22] me me I'm sorry on the x axis we see time and it's monthly data so each dot here
[48:29] corresponds to a monthly average and we have a nice satellite image of Washington DC and here you can find data and maps for
[48:44] many many different cities so going back to the main page this other this impacts tab has information about the impacts of
[48:57] air quality on human health and food security to skip over news for a second to go to resources here you can find
[49:05] information on web tools and data several pre-made fact sheets other air quality websites outreach activities and references for a lot of the information
[49:15] on this website we go to the news tab we can see recently created imagery for example Oh me so2 changes over India pre
[49:32] and post pandemic Los Angeles for no.2 South Asia you'll recognize a lot of these I've used in my own presentations
[49:42] southeast u.s. Florida here's some infra an observatory article on aerosols Northeast US and the movie that I showed
[49:56] earlier of the Northeast us all of this imagery is downloadable and freely available if you click on the read more
[50:07] you can find out more about each of these images these are these really neat slider images where you can see the
[50:16] before which is a five year average in March from March 2015 and the March 25th to April 25th average for 2020 and all
[50:30] of this imagery can be downloaded by clicking this link so this website is a valuable source of
[50:39] information and a way to get already created imagery but if you want to make a no to map over a particular region
[50:47] that's where our next tool comes into effect so Giovanni is a online visualization and analysis tool so in this next part of our
[51:08] demonstration I'm going to show you how you can make maps using Giovanni I want to emphasize all steps of this
[51:18] demonstration are in the training materials is step by step walkthrough so you don't need to bring up Giovanni and
[51:25] do these steps as I do them but if you do want to follow along please use this
[51:30] site this D is C - beta G SF seed nasa.gov slash Giovanni because this allows us to have because
[51:42] of the number of users going on at one time time we want to minimize the effect on the
[51:47] actual Giovanni website so they've created this separate site so if you'd like to follow along please take a
[51:52] minute and type this into your browser where you can access this link from the training materials you're trying to follow along and it's
[52:05] not working or you have a question we can definitely address it during the question and answer period or you can
[52:12] always feel free to email me after the webinar so I'm going to give everybody a minute to bring it up if they want to
[52:27] okay and now I am going to go to the Giovanni website so I am going to use the regular Giovanni
[52:43] website that you would use if you are not participating in the webinar at this moment but again if you're going to
[52:53] follow along please use that beta website so this is the front page of Giovanni if you're going to follow along please make
[53:07] sure you're logged in to your earth data account it won't allow you to make the plots that we're going to make today
[53:14] without an earth data account so on the top here we have select plot and you can see that there are several categories of
[53:24] plots Maps comparisons vertical time series and miscellaneous mousing over the types of maps you can see time
[53:35] averaged math animation difference of time averaged so two different variable maps an accumulated map time averaged overlay where you can overlay say you
[53:49] have a color map a color contour map you can overlay contours of a different variable over that colored contour
[53:57] monthly and seasonal averages and also note this details link clicking on this I'll just go ahead and click on it will
[54:07] bring you to descriptions so plot and service types will bring you to a description of every single kind of map
[54:16] that Giovanni offers and what exactly it is in some of the options so going back we also have comparisons so you can make
[54:26] a correlation map different types of scatter plots sections and profiles time series plots so I showed one of those pre-made time
[54:41] series plots on the air-quality website here you can create your own over a given region and miscellaneous tonal mean and
[54:50] histogram pots so the first thing we're going to do to do is we're going to scroll down and select our no.2
[55:02] measurement so we're going to drop down the measurements menu on the left and scroll down you can see all the wide
[55:13] variety of variables that Giovanni has available we're going to click no.2 let's scroll back up got now we have two different variables
[55:26] here no.2 total column and no.2 tropospheric up and we know from our previous discussion that we're going to
[55:35] choose the no.2 troposphere column here are some information about the product per centimeter squared so it's molecules
[55:44] per centimeter squared from oh me this is available for every day at quarter of degree resolution remember
[55:52] previously I talked about no.2 D which is the gridded level three product is available beginning in October 2004
[56:04] and is available as recently as a couple of days ago so now that we've selected our variable we're going to go up and
[56:14] select our date and over our region so I should have specified we're going to make a time average map today so similar
[56:23] to the maps that we saw earlier in our presentation so let's start by choosing a time period so let's choose 2005 and
[56:33] we're going to choose a monthly average of April so we're going to start with April 1st of 2005 and we're going to
[56:42] include all values until April 30th so monthly and if you're doing this and following along on your own and choosing
[56:53] your own time period I advise you not to choose a very long time period it can especially with all the different users
[57:01] on it can make the system very slow so please restrict any analyses you're doing on your own to a month or less for
[57:08] now and now we're going to select a region over which to make our map by clicking here you can select different
[57:18] shape files I am going to select this to select my own bounding box so this clicking on this hand lets you pan
[57:31] around or you can zoom in and out this select lets you select your bounding box so I am going to select a small region
[57:42] over the Northeast US and again if you're doing your own analysis here please select a small region over which
[57:51] to calculate your map this we see our bounding box listed here and now we go down to plot data
[58:04] you you you and it just takes a minute this is part of the reason why I advised over not too
[58:31] long of a time period and over not too big of a box so because it takes a
[58:36] couple minutes to generate the plot so here's our map I want to note a couple of things here first this is our history
[58:47] so you can see I've made other maps earlier so this is what happens when you are making multiple maps and we're going
[58:55] to do that today this is my current map the top here we have time average map no.2 tropospheric column daily quarter
[59:07] degree and the product name in the unit over the time period and the bounding box here we have the download button where
[59:18] you can download this image in geo TIFF KMZ or PNG formats going over here we see another download if we click that we
[59:29] can this is another way to download in those three formats but also you can download the data that's being plotted
[59:35] in netcdf format and we can return to our plot by clicking plots so clicking on the options drop-down
[59:51] menu we can remove our title we can remove the other subtitles captions legends coastlines countries and our
[1:00:03] grits and I want to draw your attention to these options so you can view change the color palette of your plot
[1:00:15] I'm gonna stick with this color palette but I am going to change the maximum range so this is the data range over
[1:00:23] which it's plotted and in order to compare this image with other years I'm going to change the maximum to right now
[1:00:32] it's two times ten to the sixteenth so I'm going to change this to one I'm also going to turn on smoothing
[1:00:46] applix smoother and click reap lot and we just give it a minute you you and we click this to minimize and we
[1:01:05] have a nice smooth looking map of troposphere a column in o2 let's suppose I want to compare this map
[1:01:14] or you know put it side-by-side with a map from a different time period in order to do that we can go click this
[1:01:22] button back to data selection and it brings us all of our choices are still saved here so suppose I want to make a
[1:01:32] map now I want to look at 2015 all of the information is saved all I have to
[1:01:43] do is click plot data and it will begin to create a new map you and again if you're experiencing long
[1:02:06] wait times if you're doing this and following along on your own don't worry this everything step by step
[1:02:14] is in the training materials so here we see our new map for 2015 instead of 2005 and if we change our color scale to
[1:02:30] match what we chose for a previous time period and let's turn on smoothing so it's going to look exactly well not
[1:02:41] exactly the same but we're plotting it in the same way so we can more easily compare the
[1:02:48] changes here we see you can more easily see the features in 2015 because the NR 2 levels
[1:02:59] are in general lower and we can toggle back back and forth with these plots so I can easily access our last plot
[1:03:11] and our new plot by just clicking back and forth so I'm sure everybody and now what 2020 looks so much
[1:03:28] data and we create our 2020 map you and here's our 2020 map so again we want to plot it the same way so we can more
[1:04:02] easily compare it and we click on smoothing and reapply you close our menu and so we can so this map is for 2020 see at
[1:04:29] the top our new time period we can compare that with 2015 and 2005 so you can see that this is a really
[1:04:43] powerful tool with which you can create your own Maps or time series of no.2 but remember when we're comparing maps that
[1:04:55] say the difference between 2005 and 2015 is always going to be a combination of emissions chemistry and weather and
[1:05:06] remember when we're looking at these maps were looking tropospheric column no.2 that concludes the demonstration part of
[1:05:18] our webinar and I think we will open it up now for questions thanks actually first I think we're going to
[1:05:34] demo the are set website so here on your screen you can see the are set website which is our set GS FC nasa.gov if you
[1:05:48] click on the trainings tab you can see links to fundamentals and other applications areas such as disasters
[1:05:58] health and air quality land and water resources and on the right you can see links to online trainings in-person
[1:06:11] trainings and from the main page you can access the are set listserv so now we're going to switch to the Q&A portion of
[1:06:27] our webinar okay so question 1 the indo-gangetic plain has emerged as a hot spot in the world can
[1:06:41] Munya concentration also be measured through remote sensing and is there a direct correlation between no.2 concentration and concentration at age 3
[1:06:50] so I see my colleagues have already started putting some information and NASA's atmospheric infrared sounder or airs instrument on NASA's Aqua satellite
[1:07:03] does provide some ammonia measurements more details can be found at the link here NASA's airs instrument is on NASA
[1:07:13] the NASA Aqua satellite the no.2 likely won't correlate that well with ammonia they have very different sources no.2
[1:07:23] again is primarily produced via combustion whereas ammonia primarily comes from agricultural sources it's a question - can the orsa
[1:07:36] team provided training on how to get 3d air pollution retrievals from Mizer and my colleague dr. Pawan Gupta who's
[1:07:43] going to talk a lot more about aerosols on Thursday session miser does not provide gas measurements but it
[1:07:52] gives aerosol information but there's very limited data on the vertical distribution so he'll talk more about this on Thursday
[1:08:01] question 3 as a wildlife conservationist or any NASA partners or affiliates quantifying poor air quality on animal
[1:08:13] vs. health so NASA is primarily concerned with making satellite measurements as far as calculating the effects of poor air quality on the
[1:08:28] health of humans or animals that's usually done by different agencies collaborating with NASA I don't know of
[1:08:36] any studies that are occurring right now what is the difference between spectral radians and irradiance and my colleague
[1:08:50] dr. Gupta can correct me if I get this wrong but spectral radiance is the return of energy to the sensor at one
[1:09:02] given angle and I believe ear radiance deals with all the different angles but I believe he'll speak more about this on
[1:09:13] Thursday can we convert the data into CSV because generally it is difficult to work on hdfn netcdf data formats yes
[1:09:35] C session 3 of this past our set webinar however currently the so in that webinar we have provided Python codes that do
[1:09:49] exactly that take HD f or netcdf files and output certain variables into ASCII format but that is for level 2 native
[1:10:00] resolution data we are currently working on updating our codes to help users deal with level 3 data question 6
[1:10:12] how did we delete the other molecules above the troposphere and only focus on the troposphere when I know when the
[1:10:23] satellite retrieval of no.2 is being done they use models and measurements from other satellites to calculate the
[1:10:34] amount of no.2 above the troposphere and subtract that from the total column to get the troposphere column we focus on
[1:10:44] the troposphere at column because that is the quantity that corresponds most closely with changes at the surface we
[1:10:55] also also ghazan tropospheric column because that's where most of the changes are happening and where we'll save the
[1:11:03] consequences of changing emissions how can we compare the ground-based data which is in ppm and satellite data which
[1:11:18] is in column and the unit is molecules per centimeter squared so the as I've discussed in the webinar they relate to
[1:11:29] one another but if you're asking about how you calculate the amount in ppm from the satellite you need vertical
[1:11:41] information typically from a model there have also been methods and my colleague is typing some information now to use
[1:11:52] models to derive them over a given location or region between the surface and the column it's the only image
[1:12:08] sorry question 8 if the ohmy image contains so many obstruction factors as discussed it in slide 40 like the clay
[1:12:18] clouds and the anomaly why is it still the standard data measurement for analysis I'm not hopefully I answer this
[1:12:30] question correctly so satellite data in general is valuable for its spatial coverage it can provide information where no ground information is available
[1:12:45] also bomi's long data record dating back to 2005 lets us look at the long historical record which when we see
[1:12:57] changes in the present we can place it in context with the historical record and question 9 how well does the
[1:13:16] troposphere column no.2 prevent planetary boundary layer no.2 and surface and of two so how well the column represents so planetary boundary
[1:13:28] layer refers to the layer of air closest to the surface and how well the column represents no.2 values in the boundary
[1:13:39] layer and at the surface will change so I can't give you know one number for everywhere but in general changes in the
[1:13:50] column will give us information about changes in the surface you question 10 I understand decreasing concentrations with height
[1:14:04] and the correlation with surface conditions but there's no additional algorithm in the post-processing that says it is out the surface with
[1:14:14] certainty no the could you scroll back up so I can see the question mark there is no additional algorithm in the
[1:14:29] post-processing that says it's at the surface know that the retrieval algorithms will give tropospheric column no.2 any derived products from that will
[1:14:46] be known as a level 4 product um you can do your own analysis with surface values to gauge how well the
[1:14:58] troposphere column matches the surface over your given region question 11 according to slide number 41 how can we calculate the monthly amount
[1:15:15] of no.2 so if you would like to calculate your own monthly average you can do so a variety of ways there are
[1:15:26] text files in some form and for some gridded I can't remember whether texts are available for the quarter degree or
[1:15:37] the tenth of the degree but you could average these over the course of the month you could average daily files over
[1:15:44] the course of a month if you if your goal is to produce a map you could use
[1:15:51] Giovanni as I demonstrated earlier those monthly averages have been produced by averaging gridded daily data so level
[1:16:03] three daily data averaged over the course of 30 days in 12 why does the India map show high
[1:16:13] values in geography without a city identified are these remote power plants yes I believe they are power plants for
[1:16:24] electricity generation in eastern India how do we actually identify if an image sorry question 13 how do we actually
[1:16:36] identify if an image is a total column or a tropospheric column dataset unless you are in atmospheric research most
[1:16:48] homey products for no.2 will be tropospheric columns they're the ones most relevant for many applications question 14 hello Giovanni there are
[1:17:04] only bo-zone total columns in Dobson units data I would like to know where I can find ozone tropospheric or surface data
[1:17:12] obtained by Oh me is there another source for that so ozone is an example of a longer lived pollutant where
[1:17:22] troupis tropospheric column ozone will not give us a lot of useful information about ozone at the surface for
[1:17:33] tropospheric column ozone from Oh me I believe they you're correct they don't have it at Giovanni but I believe they
[1:17:43] have that at the aura validation Center website I've included a link to this website in the training materials
[1:17:54] question 15 granted we can't say all of the changes are relevant to kovat but it seems like we could say most of them are
[1:18:04] can we is that a fair statement of fact that a responsible journalist could state in a news story if not what is so
[1:18:13] this is this is a great question I don't think responsibly I don't think we can say most of it is that implies
[1:18:25] greater than 50% of the change is due to COBIT and I would caution anyone to ascribe any kind of number that is a
[1:18:38] rapidly ongoing work figuring out exactly how much of the decreases we see are due to covet versus other factors
[1:18:48] for example we had a relatively cool wet spring in the Northeast we have to take that into account and I know that
[1:18:57] there's a lot of going more ongoing work at NASA right now trying to detangle all of those different signals so what can
[1:19:05] we say we can say we can absolutely see the signal we just can't say how much there's more information about language
[1:19:18] you can use and more information about interpretation on the air-quality GS FC nasa.gov website they've put a really useful document
[1:19:34] question 16 no question about the image we were just looking at a slide 41 is there a way we can tell just from the
[1:19:43] image itself outside of the context of this presentation that this is troposphere column data rather than total columns either the magnitude of
[1:19:52] the values in the legend maybe yes that that is one indicator but most of the time when you're looking at Oh me no.2
[1:20:02] data this is question 16 when you're looking at oh me oh no - data most of the time you're going to be looking at
[1:20:13] tropospheric column total column no.2 is not typically used for many applications you you question 17 right so these are these are
[1:20:30] great questions I cannot ascribe percentage influences to associated with emissions chemistry and whether that is going to be again
[1:20:42] you need careful and rigorous scientific analysis to to figure out the contributions of each to the overall
[1:20:52] signal signal you okay question 18 I'm interested to know if you have been able to measure ground-level ozone from space and if so
[1:21:11] have you been able to remove the signal due to upper tropospheric ozone no there is no product inferring surface ozone
[1:21:22] from troposphere column ozone for the reasons I spoke about earlier it's longer lived so the column gives us less
[1:21:30] information about where exactly in the column the ozone is so we don't really get a lot of information about the
[1:21:39] surface how can the data be correlated with ground-level concentrations so if you know if you can so if you know a
[1:21:56] ground station you can obtain measurements from a local ground station and you can find if you want to use
[1:22:06] greeted data you can use the grid that corresponds with your local ground station and look at changes in that grid
[1:22:14] over time for advanced users that want to use the uh Navarrete native resolution data I would point you
[1:22:22] towards in our sat webinar we gave last year that's more of an advanced user webinar dealing with the need of
[1:22:30] resolution data you is there any relation question 20 is there any relation between no.2 land surface temperature and air temperature
[1:22:50] yes so the lifetime or how long energy atmosphere will depend on temperature I'm not sure of the difference made the
[1:23:03] distinction made here between this like the skin temperature and air temperature but would say that there's definitely going
[1:23:13] to be there is definitely a relationship between no.2 and the temperature of the air I didn't get a question 21 I didn't
[1:23:22] get point 1 by point one degree resolution can you explain this in detail so 0.1 by 0.1 degree resolution
[1:23:32] corresponds to roughly 10 kilometer squared grid cells so that is the size of each of the grid cells are there any
[1:23:46] level 4 products as with other sensors on other platforms so a level 4 product is going to correspond to products
[1:23:59] derived from the level 3 products so an example of a level 4 product of no.2 is the surface estimate that I referred to
[1:24:10] in during the training and that you can find out more information about that at the website I linked there but that's
[1:24:18] the only level 4 product for oh me no.2 that I'm aware of are there any commands or ways to make
[1:24:27] corrections to no.2 data from momi data yes if you are dealing with the native resolution level 2 data there are
[1:24:36] definitely filters and data quality variables that you would want to look at and I would again point you towards our
[1:24:47] advanced are set webinar that we gave last year can you please explain the row anomaly again so the row anomaly is the
[1:25:01] result of a hardware issue so it's literally a piece of hardware blocking the view of the satellite so some rows
[1:25:11] of the satellite orbit are blocked these values have been filtered out within the data question 25 the images are available for
[1:25:27] any country I'm not sure what images this question is referring to if there are already pre-made images on the air
[1:25:39] quality GS FC nasa gov website i don't think they're for every country but many cities many international cities are
[1:25:48] available if you are interested in making an image over your own country or region that's not covered under that
[1:25:56] website you can use the procedure I showed during the training and make your own map using Giovanni question 26 we
[1:26:07] haven't touched on no.2 emissions from forest fires any comments in that regard point sources as compared to large
[1:26:14] forest fire areas in general just to speak very broadly the primary sources of no.2 are going to be from combustion
[1:26:30] so the signal from forest fires is typically not as large as from vehicles manufacturing power plants etc but yes
[1:26:45] no.2 emissions definitely are produced by forest fires and that can be significant but in for the majority of
[1:26:53] occasions the primary missions of no.2 come from combustion man-made combustion did you say no.2 data is not available
[1:27:08] after 2016 oh no no Oh Mia still taking measurements a lot of the imagery I showed was from 2020 and now troppo me
[1:27:22] is also taking measurements what I might have said it might be getting confused the row anomaly has been stable since
[1:27:32] 2012 that might have been where some confusion came into account okay question 28 is there a list or
[1:27:42] compendium of the widely used indices or processing used for analytics and more interested in level to date and want to
[1:27:50] avoid searching literature if someone is already aggregated the standard price so well first I would point you towards our
[1:27:59] advanced no.2 webinar that we gave last year and also if you go to the slide that describes the level 2 data it
[1:28:10] points to a readme that was written by the retrieval team and that should contain a lot of the information you're
[1:28:19] looking for it'll contain recommended quality flags to consider cloud fraction variables like that question 29 is there
[1:28:32] any fine resolution data what is the maximum resolution available as today yes that's correct the troppo me satellite which has been
[1:28:42] making measurements since 2017 has a spatial resolution of five by five by three and a half kilometers squared for
[1:28:49] no.2 and other gases question 30 while performing atmospheric modeling we need to co-locate the variable temporally and spatially this
[1:29:01] is all the solid data have different spatial and temporal resolution how to deal with such cases I guess I would say
[1:29:10] very carefully since a model will be available everywhere at all times you need to be careful about the and that's
[1:29:26] gone into creating the satellite data as well as the fact that the satellite data for exam I'll use only again as an
[1:29:34] example the satellite data gives you a picture at early afternoon roughly about 1:30 local solar time a model will give
[1:29:44] you values at all times so you need to be very careful that you're comparing the appropriate time
[1:29:57] so for each satellite data set you're going to have to take all of that into account question 31 sometimes and particularly
[1:30:11] in no.2 products certain values are negative so how do we deal with those values to reconsider those data as
[1:30:18] missing data no if you are creating a mean or an average over a given area or especially if you're averaging and over
[1:30:31] a given area and looking at that change over time the retrieval team advises that you include those values it has to
[1:30:39] do with you know the initial assumptions made at the beginning of the retrieval missing data are flagged as very very
[1:30:49] large negative values and again when we're dealing with the native data where you'll get those values we would point
[1:31:01] you towards the RCA webinar we gave last year the readme file also will guide you on how to handle these values
[1:31:10] question 32 how can we compare no.2 tropospheric column data with ground data since both have different measurement height and unit is there any
[1:31:19] way to integrate both of the data no what you can do is you can see how they change in time or correlate them
[1:31:30] how do changes in one relate to changes in the other if you want to convert one to the other you need three dimensional
[1:31:39] information about the distribution of the profile the distribution of the pollutant in the vertical you question 33 is there any particular
[1:32:00] browser in which Giovanni works best I'm actually not sure of the answer to this but if it was slow for you today
[1:32:10] just try at a different time when many people are not accessing the webinar at one time and after today you can use the
[1:32:20] regular NASA Giovanni link rather than the beta I link to today question 34 can all these Giovanni steps for generating
[1:32:29] the mouseka P program through an API hmm I actually don't know the answer to that but the the help team for Giovanni is
[1:32:37] very responsive so if you contact them they'll be able to help you they'll be able to at least answer that question
[1:32:46] what is happening question 35 what is happening I guess from a calculation perspective when you choose data
[1:32:52] smoothing so I am Not sure over how many pixels the picture is being averaged there is data in the Giovanni website
[1:33:05] about what exact calculations are being made when we talk about smoothing but essentially it's area averaging just to
[1:33:17] smooth out the edges question 36 how well does no.2 from oh me agree with data from ground
[1:33:29] stations could you provide some references to researches that looked into this that how well tropospheric column no.2 from oh me agrees with
[1:33:41] ground data will vary in time and spatially so I can't give just a general number for references I would look
[1:33:52] uplook lam so he is a researcher at NASA Goddard he has done a lot of work with
[1:34:00] this this and you can use references within his publications I referenced his publication within within the training
[1:34:13] materials is 2020 data also from oh me or from troppo me in this presentation we only show data for oh me
[1:34:26] but both instruments are currently taking measurements is it possible to select a city by the name Oh in Giovanni
[1:34:43] I'm not sure I haven't tried to look for a shape file for a given city not actually sure but you can zoom in
[1:35:01] you you okay my colleague does not believe that you can search just for a given city I
[1:35:07] am inclined to agree question 39 is it possible to download a net CDF and then plot the data using
[1:35:16] Python absolutely absolutely so if you wanted to use Giovanni to subset and then download the netcdf and plot using
[1:35:28] other software absolutely I believe the GES disk also allows you to subset the difference between the GS disk and
[1:35:40] Giovanni is the GS disk is just for download and not for visualization it's not for making maps I don't question for
[1:35:51] Nia I don't quite understand the effect of maximum or minimum data range selecting why did you change from two to
[1:35:56] one I did that because I knew that if I had less so I knew I was going to be
[1:36:04] comparing different time ranges and I also knew that the air quality has greatly improved over the past 10 or 15
[1:36:13] years so if I kept it at 2 2015 and 2020 would have likely looked exactly the same you wouldn't have really been able
[1:36:21] to see any of the features by reducing the maximum number so in other words the darkest shade of red was now 1 times 10
[1:36:33] to the 16th rather than 2 it allows me to see more features when the air was cleaner
[1:36:44] you you question 41 what are the units in the definition of data range at giovani those were molecules per centimeter
[1:36:54] squared the units can be seen in the plot title which tool and to work with a time
[1:37:09] series of years so if you want to make a plot of a time series over a given
[1:37:17] region over some years Giovani can do that if you want to make your own you can download the data from
[1:37:28] the websites that I described question 43 can we compare ground-based data which were in ppm and satellite
[1:37:39] data from Oh me which is a molecules so okay I think I've answered question 43 a couple times but it but again in order
[1:37:48] to convert one to the other you need information about the vertical distribution of the pollutant but changes in the surface in ppm and in the
[1:38:01] troposphere column will relate to one another question 44 is there any publicly available training material or Jupiter
[1:38:10] notebook to analyze homey data in Python or any software for analysis so my colleague has linked to a webinar we
[1:38:20] gave where we have Python codes available to read Oh me and modus data and these codes will allow you to create
[1:38:31] a map and this is all using level 2 native resolution data not graded level 3 data that's something that we're
[1:38:39] working on these are Python codes where we have participants download anaconda in order to use them we're currently
[1:38:46] working on updating our material to experiment with things like Jupiter notebooks our advanced webinar our advanced no.2 webinar from last year
[1:38:57] also contains these codes as well as codes for troppo me all right thank you so much to everybody
[1:39:08] for joining us today I hope you learned a little something and please join us when dr. Pawan Gupta and dr. Prados will
[1:39:18] talk more about aerosols thanks very much
