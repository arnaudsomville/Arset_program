# SAR for Mapping Land Cover, Session 1/4

`https://www.youtube.com/watch?v=IDxBgK1VY_4` · id 200 · 1:36:37 · module 96 — Forest Mapping and Monitoring with SAR Data

[00:00] hello welcome to the advanced synthetic aperture radar webinar series my name is erica potus and i'm a scientist in the
[00:08] earth science division at nasa's jet propulsion laboratory also known as jpl i'm also an instructor for the nasa rsap
[00:16] program program this is the first of a four part webinar series and the prerequisite for this webinar is the nasa rsat introduction to
[00:26] sar webinar series from last year which covered the basic concepts of sar including polarimetry and interferometry this webinar series will be primarily
[00:37] focused on applications providing some background material on basic sar concepts related to each application but heavily focused on demonstrations
[00:49] the webinars will cover land cover mapping flood mapping crop mapping and assessment of surface deformation from an earthquake
[00:58] i will be the instructor for today's webinar and the second one on august 9th the third webinar on crop mapping will
[01:06] be covered by dr heather mcnern from agriculture and agri-food canada on august 14th and the last webinar on interferometric
[01:17] sar for earthquakes will be covered by dr eric fielding from jpl on august 16th each webinar will be done in both
[01:26] spanish and english the spanish webinars will all be at 1400 utc and the english ones will be at 2200 utc
[01:37] on the same day the presentations and the recordings will be posted online in a couple of days
[01:44] days so the learning objectives i expect that by the end of today's webinar you'll be able to understand the advantages of sar
[01:51] over optical systems for mapping land cover as well as what you can and cannot do with sar versus optical
[01:58] you'll understand the information content in sar images relevant to different land cover characteristics you'll understand the limitations of sar
[02:07] for mapping land cover you'll understand the optimal sar sensor parameters for land cover mapping and finally through the demonstration at the
[02:16] end you'll learn how to generate a land cover map from sorry here we have a list of the advantages
[02:24] and disadvantages of radar remote sensing over optical two of the greatest advantages of radar over optical is that since radar is an
[02:32] active system meaning that it provides its own illumination it can observe the surface of the earth during either day
[02:38] or night conditions the other great advantage is that radar observations can be done under almost any type of weather condition
[02:47] making radar particularly useful in areas that are constantly cloud covered such as the tropics also the radar signal can penetrate
[02:55] through the vegetation canopy or soil while optical only sees the very top of the canopy or exposed soil
[03:03] in addition with radar remote sensing there are minimal to no atmospheric effects or corrections needed as opposed to optical
[03:10] where atmospheric corrections are critical for proper image interpretation finally radar is very sensitive to the dielectric properties of the surface and
[03:20] to structure whereas optical is sensitive to the spectral reflect reflectance signatures of the surface of course there are also disadvantages
[03:30] and that is that the information content and radar data is different than optical and sometimes difficult to interpret
[03:39] also for radar images the presence of speckle which is that salt and pepper effect effect makes it difficult to not only interpret
[03:47] the image but it may increase measurement uncertainty and result in low classification accuracy application of a speckle filter is
[03:56] required in most cases finally the presence of topography introduces distortions which need to be accounted for and as a final comment historic star
[04:07] images tend to have low temporal repeat by that i mean on the order of 40 plus days making the availability of dense
[04:16] time series images scarce however this is changing with sentinel 1 a a and b which together have a six day temporal
[04:25] repeat repeat so the main difference between optical and radar for land cover mapping is that optical is sensitive to the spectral
[04:33] properties of the vegetation and soil while radar is sensitive to structure and the dielectric properties of the
[04:40] vegetation and soil and when i say structure i mean size density and orientation of the target comparable to the size of the radar
[04:48] wavelength remember it's wavelength dependent dependent when i say dielectric i'm referring to the amount of water within the medium
[04:56] and whether that water is in a frozen or liquid state so radar is essentially sensitive to the
[05:02] bulk of the vegetation or biomass to the geometry of the vegetation and to the dielectric of the vegetation
[05:10] and soil which is closely linked to water content so in essence the information provided by radar is different than that provided
[05:18] by optical sensors with optical you can get things like ndvi or enhanced vegetation indices as indicators of vegetation health while
[05:27] with radar you cannot another difference is that with optical data is available from visible to infrared wavelengths consisting of
[05:36] several bands of data which can offer different information on land cover characteristics based on spectral reflectance with radar the signal is typically only
[05:47] at one wavelength and one or two polarizations so you don't have numerous data layers and radar multiple bands of sar backscatter can be
[05:56] composed of multiple polarizations which can provide insight into the scattering mechanisms mechanisms of the scattering elements within the
[06:05] surface the last difference is that optical sensors only see surface tops because the canopy blocks whatever is underneath
[06:15] this limits characterizing land cover unless the characteristics of the top of the canopy are correlated well with what
[06:22] is underneath with radar the signal can penetrate through the canopy depending on wavelength and provide information on
[06:30] the vegetation and soil below as well as information as to whether there is inundation present there are a number of applications for
[06:38] using radar for land cover mapping and monitoring such as mapping forests wetlands biomass monitoring disturbance from fire or selective logging or
[06:49] monitoring change such as deforestation or reforestation there are many other applications beyond these these in the second webinar session we will
[06:57] cover the use of radar for mapping wetland inundation and the third webinar session will cover mapping crops
[07:05] i will start out by refreshing your memory on the radar signal interaction with the surface this figure illustrates the different
[07:12] back scattering mechanisms starting with the one on the far left which is specular scattering which appears when
[07:18] there is a smooth surface like a mirror such as a water surface and the signal scatters away from the satellite the
[07:25] result is a dark pixel in the image the next one is rough scattering which results when there's some level of
[07:33] roughness on the surface causing the signal to scatter in different directions but mostly away from the satellite
[07:41] satellite as the surface gets rougher as shown in the next figure the larger the signal scattered back to the satellite
[07:48] the next signal interaction is volume scattering which occurs when the signal is scattered in multiple directions within a volume or medium in the case of
[07:58] vegetation the signal can scatter from multiple components such as branches stems leaves trunks trunks or the soil
[08:08] i'll talk more about this further on the final backscatter mechanism is called double bounce which results when
[08:15] two smooth surfaces creates a right angle that deflects the incoming radar signal off both surfaces such that most of the energy is
[08:25] returned to the sensor these areas appear very bright in the image image double balance is commonly seen in urban
[08:33] areas and flooded vegetation here we have an example of the radar signal interaction with the land surface
[08:41] this is a pulsar l-band image at hh polarization over a site in the tropics the brightest returns especially along
[08:51] the river are driven by inundated vegetation vegetation the light gray areas are forests and the dark areas are either water or
[09:00] deforestation deforestation with different levels of regrowth regrowth the larger the amount of biomass in regrowth areas the brighter the tone
[09:09] note that deforested areas are very dark similar to open water and this can be a source of confusion when running a
[09:16] classification classification in the next following slides i would talk about the parameters that influence the characteristics of the signal these
[09:25] are radar parameters and surface parameters parameters i'll discuss these in the context of land cover mapping starting with the
[09:32] radar parameters there are three radar instrument parameters that influence the transmission characteristics of the signal these are wavelength polarization
[09:41] and incidence angle the first radar parameter that we'll talk about is wavelength and as you already know from the introduction to
[09:50] sar series from last year in radar remote sensing we often talk about wavelength rather than frequency this is
[09:57] because the length of the wave defines the interaction of the signal with the surface or medium the wavelength is the
[10:05] length of the peak of one wave to the peak of the next wave and it is inversely related to the frequency
[10:12] so the higher the frequency the shorter the wavelength and vice versa the table on the right lists the common
[10:19] wavelength bands in radar note that a c-band sensor has a wavelength of around 6 centimeters while an l-band sensor has a wavelength of
[10:28] around 24 centimeters and band on the order of 68 centimeters which is a vast difference between them
[10:38] there are two things to remember about wavelength the first is that the longer the wavelength the greater the
[10:45] penetration through the medium and the second is that the length of the wave will determine the interaction with the
[10:52] surface objects the wave will interact with objects that are approximately its size size the figure on the left shows the extent
[11:00] of penetration through different mediums with different bands in vegetated areas x-band is generally governed by the top of the canopy
[11:09] c-band penetrates further and l-band tends to penetrate deeply into the vegetation likewise in the case of a dry bare soil
[11:19] expand only sees the top of the surface while l-band penetrates into the soil or deeper into the soil
[11:26] also the wetter the soil the less the penetration penetration there is a preferred wavelength depending on the type of study that you
[11:34] are conducting the table on the right lists some of these for example p band is good for studies involving
[11:41] penetration through high biomass forests such as those found in the tropics and for assessing biomass it also penetrates deeper into soils and
[11:50] is good for assessing soil moisture at deeper layers than that provided by shorter wavelengths l-band is also a good sensor for forest
[11:59] studies studies c-band and x-band are better for agricultural studies ku band and ka band for snow cover studies and glaciology
[12:09] ideally for vegetation studies the best sensors are p and l band there is currently no operational freely
[12:17] available l-band data and there is no p-band sensor in space however in 2021 nysar will be launched which is a joint
[12:28] nasa and indian space agency l-band and s-band satellite also in 2021 the european aid space agency will launch
[12:36] biomass which is a p-band sensor here we have an example of penetration depth through vegetation with two
[12:43] different wavelengths and this is in kalimantan indonesia the top image is a c-band image which has a wavelength of about 6 centimeters
[12:52] and the bottom image is a p band on the order of 68 centimeters these are false color composites of hh
[13:01] hv and vv you can clearly see greater detail in the p band image the purple colored area and the c band
[13:08] image is likely an area of low vegetation with patches of higher vegetation in between so those green patches
[13:17] in the p band image you can see that there's more sensitivity to the patches in between this area
[13:24] south of the low vegetati vegetated area is a forested area with lower biomass than the area immediately west of it these areas are
[13:34] more distinctive in the p-band image than in the sea band also to note are the purplish areas
[13:41] north of the river in the p-band image which are areas having different forest structure or biomass finally note the road structure in the
[13:51] forest area in the p-band image you can't see these roads in the c-band image the other radar parameter is
[14:02] polarization which refers to the plane of propagation of the electric field of the signal which can be in the horizontal plane or
[14:11] h-plane or in the vertical plane or v-plane v-plane irrespective of wavelength radar signals can be transmitted and or received in
[14:19] different modes of polarization there can be four combinations of both transmit and received polarizations which are hh vv
[14:29] hv and vh polarization is useful in providing information on structure orientation penetration depth is also influenced by
[14:38] polarization polarization in forests hh tends to penetrate deeper into the canopy because it tends to be less attenuated than vv
[14:48] hv is more sensitive to volume scattering and is hence a good indicator of vegetation cover this is an example of a fully quad pole
[14:58] l-band sar system called uavsar which is a jpl airborne sensor in 2013 it acquired imagery over the
[15:07] paccaya sumerian natural reserve in the peruvian amazon this reserve is a vast wetland ecosystem and here we see a subset of that reserve
[15:18] the images in black and white are hh vvv and hv polarizations note that there is a river running
[15:25] through the middle also note the difference in intensity between the different images especially between the cross pole and the co-polarized images
[15:35] the area east of the river is higher in hv than hh or bvv and this is because this area is a
[15:43] forest with higher biomass and the degree of inhomogeneity of a surface or volume tends to depolarize the signal
[15:52] meaning the polarization is changed causing a high return in the cross pole in hv in areas where
[16:00] there is predominantly volume scattering such as forests here you can see an rgb image of the different polarizations for pachaya
[16:07] samaria so hh is in the red channel hv is in the green channel and vv is in the
[16:13] blue channel false color images are an ideal way to visualize the information content of the different polarizations through color
[16:21] combinations you can see the information content to that is unique to each polarization and in this case
[16:29] is representative of different types of wetland vegetation hv is in the green channel and anything that is green means that the return is
[16:38] higher in hv than vv or hh likewise anything that is red means that the return is higher in hh than in any
[16:48] of the other two channels anything that is magenta means that there is a similar contribution between hh and vv
[16:56] the final radar parameter for discussion is incidence angle which is the angle between the direction of the incident
[17:03] wave and the earth's surface plane in radar the incidence angle increases across the swath from the near to the
[17:11] far range so the area closest to the satellite is the near range and you will find smaller
[17:16] incidence angles than the area furthest from the satellite or the far range low low or small incidence angles will result in
[17:26] greater penetration through the medium and higher backscatter than large incidence angles large angles on the other hand will be
[17:34] more sensitive to surface roughness and will penetrate less into the medium in this example the top figure shows the
[17:42] effect of incidence angle in vegetation a small incidence angle will result in the signal penetrating through the
[17:49] forest and the backscatter being a combination of components from the canopy the trunk and the ground while a
[17:56] large incidence angle results in a combination of primarily the canopy and trunks but not the ground for forestry the use of low incidence
[18:04] angles enhances the sensitivity to biomass whereas the use of high incidence angles enhances the discrimination of forest types through
[18:13] interaction with forest structure the bottom figure is an example with lower biomass vegetation in this case a
[18:21] wheat crop the returned signal will be primarily from the soil and subsoil at low incidence angles while at large
[18:29] incidence angles the signal will be a combination of wheat and soil finally regarding topography slopes facing towards the radar will have small
[18:39] local incidence angles causing relatively strong back scattering to the sensor sensor which results in a bright toned
[18:47] appearance in the image so here's an example of the effect of incidence angle variation on the left is
[18:54] a sentinel 1 vv image and on the right is the incidence angle variation for this image the radar is right looking
[19:03] note that as we move across the swath from near to far range the image becomes increasingly darker in tone around a
[19:10] three to five degree difference in backscatter backscatter if you measure for example the same forest at different incidence angles
[19:17] then the measured backscatter will be different different even if there has been no physical change in the forest
[19:26] every surface feature will have a back scatter that is a function of incidence angle so you need to be careful when
[19:32] comparing comparing backscatter of a feature when there is a large variation in incidence ammo incidence angle can especially affect
[19:41] the appearance of smooth targets on the image smooth surfaces can appear brighter than rough surfaces at small
[19:47] incidence angle usually less than 20 to 25 degrees also since smaller incidence angles are better able to penetrate vegetation
[19:57] they are better for detecting flooded vegetation vegetation up to this point we discussed the radar parameters that affect the signal as
[20:06] related to land cover now i will discuss the surface parameters that influence the signal which are dielectric and structure
[20:14] there are three parameters related to structure structure size relative to wavelength orientation and density the length of the wave will determine
[20:23] the interaction with the surface objects size relative to wavelength defines the surface roughness which refers to the average height
[20:32] variations in the surface cover from a plane surface and is measured on the order of centimeters a surface is considered smooth if the
[20:40] height variations are much smaller than the radar wavelength as mentioned earlier the darker the pixel the smoother the surface in relation to the
[20:48] wavelength wavelength as the surface roughness increases the backscatter intensity will become higher in volume scattering size relative to
[20:58] wavelength determines the components within the volume that the signal interacts with such as leaves stems branches or trunks in the case of
[21:07] vegetation vegetation orientation influences the interaction of the waves that are either horizontally or vertically polarized and the density of the
[21:17] scatterers or the biomass in the case of vegetation will also influence the strength of the signal in general making
[21:24] for a stronger signal when there is greater biomass here we have an illustration of size in relation to wavelength if an object or
[21:32] surface roughness is the approximate size of a wave then there will be interaction and there will be energy scattered back
[21:40] backscatter from vegetation is strongly dependent on the size of the scattering elements within this canopy this example shows just that it's an
[21:49] austrian pine the primary scatterers and vegetation are its components such as leaves or needles branches stems or
[21:56] trunks with the size on the order of the wavelength wavelength scattering will also be dependent on orientation and if it is similar to that
[22:05] of the incoming signal polarization i'll talk more about that in the following slide slide so here for example at x-band which has
[22:13] a wavelength of about three centimeters the signal will primarily interact with the needles and small stems at l-band the signal will primarily
[22:22] interact with branches long stems and the trunk and that p band the signal will primarily interact with the branches and
[22:29] the trunk also remember that the longer the wavelength the greater the penetration through the vegetation so at x-band the
[22:37] signal is dominated by canopy scattering while at l-band and p-band there are contributions from the vegetation and
[22:45] the soil the soil contribution is even greater at p-vent one more thing to keep in mind is that
[22:52] elements smaller than the wavelengths produce little backscatter but can attenuate the signal orientation of the scatters will
[23:00] influence the scattering response in each polarization let's consider a very simple example of vegetation consisting of just short
[23:08] vertical scatterers over a rough surface assuming that the scatterers act as short vertical dipoles then incident horizontally polarized microwave energy
[23:19] will not interact with the vertical dipoles and will scatter from the surface underneath conversely conversely vertically polarized microwave energy
[23:29] will strongly interact with the dipoles this figure shows the interaction of a horizontally and vertically polarized wave and their scattering intensity for
[23:41] different vegetation components the left shows a shortwave interaction say x or c band with two leaves the leaf on the far left has components
[23:52] that are primarily oriented in the vertical orientation and therefore scattering is greater in that polarization while the leaf on the right is about
[24:02] equally distributed in the vertical and horizontal directions and hence the scattering is about the same in both polarizations
[24:11] the interaction with the trees at the right is with longer wavelengths such as l-bend the crown in the first tree is
[24:19] dominated by vertical scatterers and the crown in the second tree is dominated by horizontal scatterers the trunk is dominated by vertical
[24:27] scattering in both cases this is a very simplistic figure to illustrate the concept however a forest is very complex and what happens is that
[24:38] there is lots of volume scattering meaning that the signal scatters multiple times from one component to the
[24:45] other when this happens oftentimes the signal is depolarized and the cross polarized return meaning hv or vh
[24:56] vh is larger than the co-polarized return in general depolarization occurs mostly over vegetation and hardly over open
[25:05] ground or specular reflectors reflectors cross polarization is very sensitive to vegetation parameters so hv is sensitive to volume scattering and is
[25:19] good for mapping different types of structure for a structure hh penetrates deeper through the vegetation and is good for looking at
[25:28] soil moisture because it has a stronger soil component this figure illustrates all of the possible scattering mechanisms within a
[25:37] forest forest direct scattering from the tree trunks crown ground or ground crown scattering direct scattering from the soil surface
[25:46] trunk ground and ground trunk scattering and crown volume scattering radars have the capability of monitoring variations in forest biomass the
[25:56] relationship between vegetation biomass and radar back scatter intensity is non-linear as you can see in these graphs
[26:03] graphs as the vegetation biomass goes up this relationship levels off it saturates saturates and quantifying forest attributes loses
[26:12] efficacy in dense vegetation the longer wavelengths such as l and p bands and the hv polarization are most
[26:21] sensitive to above-ground biomass the capability to map biomass is not not consistent among different forest types there have been many studies assessing
[26:31] biomass sensitivity for different ecosystems and they have found that saturation levels vary with the type and structure of
[26:39] forests forests studies have reported that saturation occurred in biomass ranges of 80 to 150 tons per hectare for savannah forests
[26:49] 40 to 150 tons per hectare for boreal and tempered forests 97 and 270 tons per hectare for hh and hv
[27:00] polarization respectively for dense forests forests 40 to 150 tons per hectare in the tropics tropics and 150 tons per hectare for mangrove
[27:11] forests the other surface parameter that impacts the radar signal is the surface dielectric constant which is controlled
[27:20] by the amount of moisture content in the vegetation and soil dry naturally occurring materials have a dielectric of around three to eight
[27:28] while liquid water is around 40 to 80. it's frequency dependent so the greater the moisture content generally results in greater
[27:37] reflectivity and image brightness of the radar signal which means that there is less penetration through the soil or
[27:43] vegetation vegetation for example surfaces such as soil and vegetation cover will appear brighter when they are wet than when they are dry
[27:52] the lower the dielectric constant the more incident energy is absorbed and the darker the object will appear on the
[27:58] image image this is an example of the differences in image brightness for different landscape dielectric valleys the dielectric of
[28:06] frozen water is very low on the order of three compared to liquid water which is around 80. in the northern high
[28:13] latitudes when the land surface transitions from frozen to thought conditions in the spring there is a large change in dielectric
[28:22] and consequently a change in signal intensity from dark to bright and this example shows that this is a
[28:29] multi-temporal time series of an area near fairbanks alaska from the jrs-1 satellite which was a japanese satellite
[28:37] that carried an l-band sensor back in the 1990s you can see that in february when the land surface was frozen
[28:44] the image is darker than in june when the land surface was thought in freestyle studies that utilize radar
[28:51] signals dielectric is the controlling mechanism causing changes in backscatter behavior behavior similarly in the tropics the amount of
[29:00] water content in the vegetation and the soil will have an influence in the penetration depth of the signal and the
[29:06] reflectivity reflectivity you can specially see a large difference in signal intensity after immediately after a heavy rain
[29:15] finally the last thing i want to remind you about are the geometric distortions due to topography that are commonly
[29:21] found in radar images here we have two examples of distortions which are layover and foreshortening layover occurs when the radar beam
[29:29] reaches the top of a tall feature before it reaches the base resulting in the top of the feature
[29:35] being displaced towards the radar from its true position on the ground and laying over the base of the feature
[29:43] layover is most severe for small incidence angles at the near range of a swath and in mountainous terrain
[29:50] foreshortening occurs when the radar beam reaches the base of a tall feature that's tilted towards the radar
[29:56] before it reaches the top because the radar measures distance in the slant range that's the slope from a to b
[30:05] the the image will appear compressed and the length of the slope will be represented incorrectly that's a prime to b prime
[30:15] so depending on the angle of the hillside or mountain slope in relation to the incidence angle of the radar beam
[30:21] the severity of foreshortening will vary these distortions can complicate sar derived land cover classifications in severe cases the layover and shadowing
[30:32] produced by mountainous terrain makes classification inappropriate in less severe cases ancillary digital elevation data can be used to generate
[30:42] approximate corrections for terrain effects prior to classification the final effect that topography can have on the signal is shadowing which
[30:51] occurs when the radar beam is not able to illuminate the ground surface shadows occur behind vertical features
[30:58] or slopes with steep sides since the radar beam does not illuminate the surface shadow regions will appear
[31:05] dark on an image because no energy is available to be scattered back as incidence angle increases from near
[31:13] to far range so will shadow effects as the radar beam looks more and more obliquely at a surface
[31:19] there are ways to correct for shadows through interpolation however i personally prefer to leave the shadow areas as areas of data gaps rather than
[31:28] use interpolated values one final thing to consider when doing a land cover classification is speckle which is the salt and pepper appearance
[31:37] of radar images in order to reduce the speckle effect you need to apply a filter which will reduce the resolution of your
[31:45] image therefore keep in mind that with radar images might be given or stated to have a given
[31:52] a certain resolution however after applying a filter on an individual image the spatial resolution of that image will be lower
[32:03] sar data sets have improved significantly in the last couple years and this list shows the legacy current
[32:09] and future sar data sets the ones with the green box indicate that the data are freely available which you can ask
[32:16] access through either the alaska satellite facility or the european space agency's copernicus hub note that the legacy data sets start
[32:25] with csat in 1978 which was an l-band sensor that flew for only a couple of months during the 1990s
[32:33] there was jrs-1 and ers-1 and 2 going into the 2000s with mbsat a-list 1 and radar set 1.
[32:41] currently there are a number of sar satellites in orbit with tandem x which is an x-band radar satellite from the
[32:47] german aerospace center radar sat-2 which is c-band from the canadian space agency cosmos sky skymed which is an italian
[32:56] x-band sar sentinel one which is a european space agency sar operating in c-band and finally pasar which is a spanish
[33:06] star operating at x-band their future satellites coming up with celcom celcom which is an argentinian sar sar operating or which will operate at l
[33:17] band band and there is also the radar set constellation which will operate at c-band c-band nysar is a nasa indian space agency
[33:26] l-band and s-band sensor to be launched in 2021 and biomass is a european space agency p-band sensor also to be launched
[33:35] in 2021 so it's very exciting times ahead for those people that are using radar in their research and
[33:44] applications applications and this chart shows current and future satellites grouped according to bands and the far right indicates their repeat
[33:53] cycle cycle note that they have repeat cycles of just a few days which allows for a constant monitoring capability
[34:03] i want to briefly touch on nysar which is a nasa and indian space agency satellite that will launch in 2021
[34:11] and will operate at l and s bands it'll have have 3 to 10 meter resolution depending on
[34:16] its mode of operation and it will provide repeated observations which will allow for applications such as ecosystem hazard
[34:25] and disaster monitoring that include ecosystem disturbances ice sheet collapse collapse and natural hazards such as earthquakes volcanoes and landslides
[34:36] next i will show a demo on land cover mapping using the sentinel one toolbox and l band data from ailos 1 which is
[34:47] data that is freely available and can be accessed through the alaska satellite facility data portal and what we'll do here is
[34:59] i'll walk you through the different steps to generate a land cover classification and to do this we'll be using data from
[35:08] the elos palsar satellite this was a satellite that operated between 2006 and 2011. 2011. and it was a satellite from the japanese
[35:18] japanese space agency it had an l-band sensor and it had a different polarization so i'll talk a little bit about the
[35:27] different modes of operation so so the data are freely available and you can access the data through the
[35:37] alaska satellite facility so do a google search for the alaska satellite facility you'll come up to this main page that
[35:46] you're seeing here go to data sets click on data sets and you'll see a window pop up with a list
[35:55] of all of the different data sets that you can access to the alaska satellite facility however since we're interested in alus
[36:04] pulsar let's click on that one and it will take us to a page where there's more information about aylos
[36:10] pulsar here's the global coverage and here are some links for more information about uh pulsar data there's some documents
[36:20] and tools and the radiometrically terrain corrected products i'll talk a bit more about that so let's just start
[36:26] with the search and click here find pulsar data this will take us to the search engine the alaska satellite
[36:34] facility search engine which is called vertex vertex and up up pops a window that says how we
[36:41] want to perform our data search either geographic search or granule search or mission search what we'll do
[36:49] is we'll select geographic search and down here there's a little window that pops up that wants to guide us through
[36:55] the whole process but i'll dismiss that because i'll walk you through the process process so this is a very easy
[37:03] page to use a search engine to use and what we'll do the first thing we need to do is specify our geographic
[37:12] region of interest and i've selected an area area that is near the city of manaus in in
[37:19] brazil so analysis around here and this area is southeast of the city of manaus and so i'll just draw my box over our
[37:28] area of interest right there and and the next option here on the left is to specify the dates we'll leave those as is
[37:39] and finally you have to specify the data set so the default is set in a one data
[37:47] and we'll deselect those and select halo spouser so we hit search and and this the search is usually very quick
[37:59] and so on the right side is a list of all of the images that have some level
[38:04] of overlap over our area of interest okay now sentinel uh something pulsar data has different modes of operation
[38:15] uh one is called the fine beam single mode that's that means it's got one polarization uh usually hhh or it could
[38:22] be bb as well then there's a fine beam dual pole two polarizations and that's hhv or vvvh depends
[38:34] uh and within the different modes there's also one called plr which has four different polarizations and so
[38:43] the one the image i've selected for this demo is a an image that has four polarizations so let's now are
[38:52] our list of hits so we have 335 hits let's narrow those down to plr and we'll scroll down
[39:02] to the image that i have selected which is this one here here so click on the on the thumbtack
[39:12] and up pops another window that has an rgb uh image a small rgb quick look image of
[39:20] our area of interest and just by seeing this small quick look image you can see that this area has a lot of variability i'll
[39:30] talk a little bit about what we're seeing here when i open the actual image but in general it has water it's got
[39:36] some flooding some deforested areas forested areas so here on the left you've got specifics relating to this image
[39:47] and so the date of acquisition is april 11 2007 plr mode ascending or descending orbit so this is
[39:57] an ascending orbit and something that's important for you to remember is that whenever you are doing any type of analysis or you're
[40:05] using two or more images you should never never combine the ascending images with the descending images just because the
[40:13] viewing geometry is different so do your analysis with just the descending images and then do a separate analysis with the
[40:21] ascending images and you can compare the results the products that you've generated but but don't combine the raw images into
[40:29] your your analysis analysis okay and then what we have here are the different images available uh the
[40:39] so we've got uh these two the ones that we're interested in are the terrain corrected and we've got two options high res
[40:47] terrain corrected and low rise train corrector now with radar and those of you that have seen the
[40:54] introduction to sar webinar that we did last year there are a series of pre-processing steps that are needed to
[41:04] to be applied to radar images before you can start classifying the image so you need to do a radiometric calibration and
[41:12] you need to do a geometric calibration on the data and then you can really then use that data to
[41:19] run classifications on it so what the alaska satellite facility has done is that they have terrain corrected the
[41:29] the data so they have done they have done the the radiometric and the terrain correction so they're
[41:35] radiometrically terrain corrected and the high-res data sets are at 12 and a half meters and the low res data sets
[41:42] are at 30 meters now only uh the a-los pausar datasets have been been rtc radiometrically terrain corrected
[41:53] and not all of them so if you do a search and you come up with the specific information for that image
[42:00] that does not have this it means that you need to deal with the level 1.5 image and you need to do
[42:08] a radiometric and geometric correction on the image all right so let's download this image and i have a login already and i have the
[42:18] image on my folder but you need to log into the system or create or register into the system again this is free but
[42:26] you do need to register all right so once you have the image you need to unzip it
[42:34] and and i'm opening here the unzipped folder and inside the folder there are a couple of different images
[42:44] actually these i've created i should have deleted these but all of these on down are the ones that the original
[42:51] images that come in that zip file and so you've got the four polarizations you've got the dm that was used to correct
[42:59] these images uh you've got an rgb image quick look image image and you've got a kmz file so you can
[43:06] overlay this on google earth and so what we'll do now is we'll open snap snap and and open the images all right so we'll go to
[43:16] snap we'll do file open product and we'll go to that folder and select select our images okay
[43:31] and and i missed the hh it's right here okay so now it's always good practice to open the bands to visualize the bands
[43:41] that you've loaded up because sometimes there are issues with the bands they might have errors in them they might have banding
[43:50] they might not have been fully uh processed correctly so you want to take a look at them and make sure
[43:57] that they look okay before you run all of these different things on them okay okay so they all look okay
[44:08] and and one thing i wanted to show you is so we've got hb vvvh so this one is hb
[44:17] and this one is vh so i'll toggle between these two and and these images are not exactly the same
[44:28] but they're essentially the same and so what we'll do in order to better manage your different fans is just
[44:37] close the vh image okay so so go select the name right click and then close product and that leaves us with
[44:48] these three images now in order to run a classification or do any kind of really processing or analysis on
[44:59] the sentinel toolbox you need to have the images in the same file so that's the next step we will
[45:08] go ahead and stack these images so go to radar co-registration co-registration stack tools and then create stack
[45:19] and then you load up the images that you've opened and there they are and i want to change the order here
[45:27] so that hh is on the top then we have hb and vv okay so you go to the next
[45:35] window and it says create stack we need to change one parameter in there it says initial offset method we change
[45:42] that from orbit to product geolocation that means it uses the geolocation information of the images to stack them
[45:50] and then finally write so you specify the name and the sentinel toolbox toolbox adds on the name of the process
[45:59] onto the image file so so it's taking the name of that first file in the list and it's adding on
[46:08] stack so that we we can identify which image this is or which file this is all right and then here you specify
[46:16] the directory so we'll hit run and i have this already but i will do another one i'll overwrite
[46:22] it it it's very quick all right so here in our window on the bottom anytime you run anything
[46:34] any new process the new image will appear at the bottom so here we have that new stacked
[46:41] file and if you open bands you've got are the three images so you've got hh you've got hb
[46:50] and you've got vb vb okay okay so so let's do an rgb of this just to visualize all three
[47:01] polarizations together and to do that you select the file name and you right click and you say open rgb image window
[47:11] so that's an rgb and basically what we're seeing in this image is so these areas are very low back scatter
[47:22] in the hv image those are areas where there it's a smooth surface so probably those areas have no vegetation
[47:30] and then you see some areas here with some level of intermediate backscatter those areas are areas where you probably
[47:37] have some sort of secondary regrowth and then over here you have some effects of topography and you can see that
[47:45] better in the hh image so you see these areas here you have some some brightness and and it's always kind of a
[47:55] sanity check a good sanity check to compare things to google earth if you're not familiar with the site if
[48:02] you don't have any site data and so that's the case here um in terms of i've never been to this
[48:09] area so let's take a look uh we're zooming in and so this area here is this area right here
[48:23] and you can see that pattern a little better here with the hv hv so so you can see that
[48:33] there is topography in this area right and the reason that you see that brightness brightness is probably because uh there's the
[48:44] topography and and it's it's bare it's a bear bear mountain top okay okay so all right so the next thing that we want
[48:57] to do is in radar usually you talk about db so that's backscatter you represent that as decibels
[49:08] and so the next thing we want to do is is we want to let's see convert these to
[49:25] two decibels okay i'm not getting the option okay um i'm sorry let's let's go back before we convert it to
[49:40] decibels let's do something here first let's let's apply a filter for some reason i'm not getting the option
[49:49] so let's apply a filter and let's apply a a radar filter to remove speckles so one of the things that's very obvious in
[50:00] this image is the presence of speckle and that's really it comes with radar right you've got speckle that you have to deal with so
[50:09] you have to apply a speckle filter and you go to radar speckle filtering single speckle filter and
[50:17] you specify which image you want the filter applied and and the the name of the new image will have spk at
[50:27] the end okay okay so so processing parameters so we want these three bands and i encourage you to explore the
[50:36] different speckle filters available here you have a list of a number of different filters filters and what we'll do today is we'll select
[50:44] the lee filter and and box size is very important so the larger the box size the the more speckle you get
[50:55] rid of basically and so but the greater the resolution loss as well so remember the resolution the original
[51:04] resolution of this image was 12.5 meters and if you apply a nine by nine box your resolution is going to be about 112
[51:13] meters meters so let's run this and you'll see a really large difference between between the the image without the speckle and the image
[51:33] with speckle if you leave the speckle there it's just gonna you'll see it in the final classification
[51:42] okay so let's do this okay so there so let me open and i'll tile these horizontally so you can see the
[51:59] difference there's a way in the sentinel toolbox to see these images side by side so let's do window tile
[52:09] horizontally horizontally and then what you do is you need to link the windows down here and there so this is the same image
[52:21] this one is the non-filtered and this is the filtered one okay okay so so we will all right
[52:35] so now you want to convert these to a db okay and the way you do that is you
[52:41] select the specific file name you right click and you have an option that says linear to db
[52:48] and it says it will convert it into a new virtual band you say yes linear 2db yes
[53:05] yes and then linear 2db and you say yes now one thing is it is a virtual band so
[53:12] that means it's stored in memory and what you want to do is actually save it as part of this file
[53:19] and to do that you will click right click click and say convert band and you see that v here disappears
[53:28] so right click convert down and then right click convert that and there you go so let's uh let's view
[53:36] our images in db so all right there so it looks a little bright and washed out and what we need
[53:51] to do this is the hh what we need to do is we need to play around with the histogram so we go to
[53:58] the second window down at the bottom you can go to color manipulation select editor editor basic there are sliders
[54:08] and excuse me so you select sliders you select the histogram and you'll see it's always good to look
[54:25] at the histograms of the images just to see the distribution of the values in the image first of all you can see that
[54:30] the max value for hh is 5.97 min value is minus 23 db and so you've got two humps here
[54:40] uh this one this lower one that's uh clearly water and this is everything else so let's just
[54:47] just change this and do like that and let's take a look at the next one and we'll do the same this is hb look at
[55:01] the values the max value is minus 6.8 and the min value is -29 and again water is clearly clearly very discernible from
[55:11] everything else but the this distribution does look different different you do have a larger dynamic range in the values
[55:19] as compared to hb sorry add to hh okay okay and then we'll do the same for the last one which is vb
[55:31] and same thing water is way out there we'll just bring this closer and okay so let's create an rgb of those
[55:42] tv images let's open rgb and okay so so it looks a little washed out again yeah sometimes you need to
[56:00] adjust the histogram all right right around there okay so so uh one thing and that i i
[56:22] pointed out earlier is the the intensity levels between the different images is different and and with hv there's
[56:31] the these areas where there's uh low vegetation or no vegetation are more discernible than with hh and so what helps sometimes is
[56:44] to do image ratios um and and what image ratios gives you is kind of it maximizes the information
[56:54] content between two images right so what we'll do is we'll create a band math here of of the image ratio of hh to hb and we'll
[57:07] edit this expression and we'll say hh is the first minus minus h of v and the reason we're doing minus
[57:17] is remember these uh the db images are a a logarithmic they're they're non-linear so in order to
[57:29] go from the original image to db it's the 10 log 10. and so whenever you're doing mathematical manipulations with
[57:38] non-linear numbers then then to generate a ratio you actually subtract the values if you were doing this ratio on the
[57:46] original images then you would actually do the division okay okay and we'll say okay so this is the ratio
[58:01] and what's popping out here are really the areas where hb is is low so so all of these bright areas is where hv
[58:12] is is very low okay and another thing is this new ratio is virtual it's a virtual image so let's
[58:24] do linear two from tv tv sorry sorry let's do a convert band to save it there all right so the next step is
[58:40] let's let's do a classification now there are generally two types of classifications right there's unsupervised and they're
[58:50] supervised supervised and the sentinel toolbox actually has a nice selection of supervised classifiers of the ones on the list you can explore
[59:03] different ones and compare your results but random force tends to give really good results the one thing about supervised
[59:10] classification is that you do need to train your classes so we'll go ahead and train our classes so that would be the
[59:17] truth you need to train the classifier and let it know what the statistics of your classes looks
[59:24] like so in order to do that we'll go to vector vector new vector data container and we'll say
[59:35] water that'll be the first one okay and so what we'll do is is we then go up here to rectangle drawing
[59:53] tool tool and we select we make a box over over the area where we know there's water okay and here if
[1:00:06] you take a look at water that's not the image so you've got water here and here it's all really really dark
[1:00:13] but but uh there might be cases where your water varies in intensity because sometimes there might be wind and it might change
[1:00:22] the surface roughness of water so it might not look as dark uh uniformly throughout the image and
[1:00:28] you want to make sure that you characterize this and that you select training areas over the areas where the
[1:00:34] water is really dark and where it's not so dark all right so that's that's our first class then
[1:00:42] we'll select the second class and we'll call that forest and we'll go up here and select select washed okay
[1:01:10] and and let's do another class and we'll call this non-forest and non-forest areas are these areas that have that are very dark
[1:01:24] they have very dark backscatter and you can always uh we can always do a okay so okay
[1:02:28] okay so we'll select all right and then we'll define another one and we'll call it non-forest non-forest topography
[1:03:05] and so these are the non-forested areas where you have the effect of topography all right and then we'll go ahead and
[1:03:44] we'll select a new one and we'll call this regrowth regrowth so these are the areas where there's
[1:03:52] some level of vegetation and you can see this this very nicely in the hv so it's these
[1:03:58] areas here where there's some level of vegetation so yes okay and then finally the last class i
[1:04:31] want to define is flooded vegetation and those are these areas down here by the river all right
[1:05:02] so now what we do is we go to raster classification and select supervised classification select random forest
[1:05:11] classifier classifier and we will then load up at all of the images that we've opened and we need to specify which one we want
[1:05:23] to run the classification on so we want to run it on the speckled the filter the stack that where the filter
[1:05:32] has been applied so i will remove all of these and this is the one we want to use
[1:05:44] and then here's here's a list of our classes i'm not sure why geometry is appearing there but these are the classes that
[1:05:58] i defined and then down here is a list of all of the images within this file and we just want to use the db ones
[1:06:06] and the ratio and so you write this and so let's say and they'll take it could take a little
[1:06:21] while while to run depending on your computer and depending on the size of the image but early on in the process you get a
[1:06:30] window that pops up that gives you an accuracy assessment on how well each class was classified and so water it looks like
[1:06:40] water was great very easy to classify and then the other classes and this is all based on
[1:06:48] the the training areas right and so remember the quality of your classification classification is is very much based on the quality of your
[1:06:58] training classes so we've got forests non-forests not forest topography so so you can use this as a measure of how well your results
[1:07:34] are okay and i'll just wait for this to run and the result will be not only a
[1:08:03] classification image but along with it comes like a confidence image so it tells you the confidence in
[1:08:12] classifying classifying each of the classes so this is the classification classification and then this is the confidence image
[1:08:24] all right so this is our result our resulting classification and what we'll do is we'll change the colors to make
[1:08:30] them a little more realistic so we'll go to color manipulation and we'll change water to blue forest to green
[1:08:41] non-forest to red non-forest topography to red as well regrowth will leave that as dark green and then flooded vegetation let's just
[1:08:52] make that magenta so that's that's a result and let's compare it now with our rgb image just tile them side by side
[1:09:20] you go to window tile horizontally and link the screens and so you can see that generally the areas
[1:09:33] where you see the the pink in the rgb which are areas of of deforestation deforestation they are picked up as red here in the
[1:09:43] image the areas of regrowth that we had identified like these areas uh this area here that's picked up
[1:09:55] in in the image to a certain extent okay okay and then the water that's that's great then the flooded vegetation that was
[1:10:05] picked up very nicely actually you can see it here between the river channels and over here and even over here in these areas
[1:10:16] and then the force was picked up as well but the issue is it is sparkly it is
[1:10:21] noisy noisy this image and you can go back and for example apply a larger filter or a different
[1:10:31] filter or you can also refine your classes classes and let's see one thing that you can do
[1:10:38] to clean this up a little bit is to apply another filter to it so you do you select label classes and
[1:10:46] you go to a raster filtered band and you apply a median 3x3 filter and and so we'll go here to the color
[1:11:05] manipulation table editor editor and we want to display the range the data we have six classes so it goes from
[1:11:14] zero to five and then we'll have colors and we will then go to table and assign colors right so
[1:11:25] the black is what's black is water so we'll assign that as blue our class 1 is forest we'll assign that as green
[1:11:38] our class 2 2 is non-forest our class 3 is also non-forest our class 4 is regrowth and we'll just
[1:11:54] assign a dark green to that and then our class 5 5 is is flooded vegetation actually vegetation so
[1:12:15] let's let's do a horizontal tile there there and compare and you can see that you know applying that filter
[1:12:30] on the classification does help clean things up okay so with that that concludes this demo but i
[1:12:41] just uh want to throw out there that there are many many different things you can do when classifying and you can explore
[1:12:48] different things you can as i mentioned you can explore the use of different filters you can explore the use of
[1:12:53] different information layers like for example you can use a dm in your stack of images you can also use
[1:13:04] textures and you can explore what sort of information they can provide sometimes they help separate classes actually there's a whole suite
[1:13:12] of textures in the sentinel toolbox if you go to raster image analysis texture analysis here and go to processing parameters
[1:13:22] there's a whole list of textures and and you can play around with the type of information that they provide some give
[1:13:30] you information about how homogeneous your pixels are within the window that you define so window size is very
[1:13:37] important important right or how inhomogeneous they are or what's the variance of the pixels or what's the skewness
[1:13:45] so so there's there's a lot here to play with and that you can explore and see if
[1:13:50] it actually helps i in your classification results so with that thank you very much for your attention and i am open to your
[1:13:59] questions now all right so so does dielectric work in vegetation the answer is yes so dielectric the dielectric
[1:14:25] properties the amount of water in vegetation has an impact on the signal right so the larger the water content in the
[1:14:33] vegetation the less the penetration of the signal through the vegetation and the the higher the reflectance what's the accuracy level of radar for
[1:14:47] vegetation carbon stock and biomass estimation estimation so for biomass estimation i read a list of different biomass estimations
[1:14:57] it varies very much uh depending on whether they're forests in the northern high latitudes border forest or tropical
[1:15:04] forests forests and so kind of the rule of thumb for el ban is a hundred tar a hundred tons per
[1:15:10] hectare in the tropics could be totally off but isn't ers one or two and mbsa now free
[1:15:22] um it's possible that they are free you should check with the alaska satellite facility i think ers 1 and 2
[1:15:30] you you need to submit a request to access the data and there are some requisites that you need
[1:15:37] to meet but i i i encourage you to to check how can i use sar to map the damage
[1:15:44] caused by army worms in nice okay okay so this depends on how large the damage is okay and how big your plants
[1:16:00] are are so what radar provides is this information about remember structure and the dielectric properties of the surface so structure
[1:16:11] with mice for example what you can do with radar is see how the biomass changes with time right how
[1:16:18] your crop is growing with time and see whether there isn't a change that is not related to the
[1:16:26] natural growth that you are seeing in other areas of your field for example and that might be then the cause of that
[1:16:35] might be uh because of army warms so the biomass in the area where the by the army worms
[1:16:42] are are affecting the crop are areas where the biomass would be lower assuming it's that large of an effect that it's
[1:16:51] basically eating the the leaves out what is the polarization suitable for flood monitoring in case of urban and
[1:17:00] non-urban okay so with urban it's very difficult to look at flooding in in actual urban areas because
[1:17:10] urban areas have very high back scatter because there's double bounce right so it's the same mechanism as in flooded vegetation
[1:17:20] so so an urban area you've got roads and you've got vertical structures which are buildings buildings and when urban areas are flooded you've
[1:17:28] got a water surface instead of a road and you still have the vertical structures so the areas are still going
[1:17:34] to be very bright you can monitor flooding in urban areas that have natural environments like for example golf courses there might be open
[1:17:44] water in golf courses or for example the prairie urban areas so so areas in the vicinity of urban areas that that
[1:17:54] are flooded or parks that are flooded you can you can see that sort of thing all right
[1:18:02] and there was also a urban flooding webinar that was done recently that you might want to visit
[1:18:12] some researchers use polarization ratio as example h hv over vb how does it affect affect classification classification so what it does it
[1:18:22] it helps maximize the information content between two images right so you might have an information content content uh unique to one polarization and unique
[1:18:35] to another one so when you do these ratios you're really kind of maximizing this information content and you can
[1:18:42] help better classifiers or identify certain classes i guess it's just being observant of the order you put them in during the
[1:18:54] stacking tool yeah that that was just me you can put them in any order but i just
[1:19:00] i like to have hv in the green channel because because uh hb it naturally when you do an rgb if
[1:19:08] you have hv in the green channel then the force will appear green which is uh it makes sense to what we're used
[1:19:14] to to and the reason hv appears green or pops out in the green channel is because you've got
[1:19:22] depolarization you got a lot of volume scattering going on in force and so the cross pole is better at
[1:19:28] detecting that after running the stack tool how do we know the band order that's a good question actually you can
[1:19:39] either make note of it or you can let's see there's a way to change the name when running
[1:19:48] the tool so let's do stack tools create stack stack and so let's do this uh yeah actually
[1:20:18] i thought there was a way you could change the name but it seems like you'll just have to remember what you placed in
[1:20:25] each band okay so the next question uh which images do you use for band research usually you want to use the
[1:20:41] images that have the greatest contrast so you want to use like hh over hb or vv over
[1:20:50] hp and these are things that you can play around with which algorithm of supervised classification classification i'm not sure i understand that question
[1:21:01] how can i use sentinel-1 data for mapping wildfire scars that's a good question and it was brought up in the first session today so
[1:21:11] if you send me an email i'd be happy to send you a list of publications that show you how to use sentinel for
[1:21:17] wildfire scars so those cars same as you saw here deforestation you'll see that scars are also very dark in the images
[1:21:28] and they can be uh they can be identified what is the resolution of the halos pulsar radar image it's 12.5 meters the
[1:21:38] original resolution that we downloaded which polarization is better for crop classification in different cropping seasons seasons which polarization is you for
[1:21:48] agriculture crop classification that's a good question for the third seminar it's going to cover just that what are the optimal uh polarizations
[1:21:59] for crop classification what band is appropriate to map oil spill on water bodies that's a really good one and so
[1:22:07] that's been done actually to look at oil spills and the reason you can use radar to look at oil spills is because
[1:22:15] the area that is covered by by oil the water that has oil on it has a smoother surface than the water
[1:22:26] that doesn't have oil on it so especially if you're out in the ocean and you normally have a little bit of
[1:22:32] wind so the water that doesn't have oil gets ruffled up a little bit has some sort of
[1:22:37] some some surface roughness while the water with oil appears very smooth and it's really easy to to differentiate them
[1:22:45] the best polarizations so you saw that hv is very good at just identifying water but that's not gonna give you the
[1:22:55] difference between water with oil and water uh without oil so the best ones would be probably vv
[1:23:03] and then hh what format basically sar data is stored as tiff or seos okay okay that's that's a great question these
[1:23:15] were were tiff uh other images in the alaska satellite facility come as cos images others come as hdf so it just depends
[1:23:25] and by the way you can download these images images for example if you so let's just close this
[1:23:33] if you right click on the image and you say export view as image you select full scene full resolution
[1:23:44] and down here there's a geotiff option you can export it okay or you can also there's an option
[1:23:55] here where you can export your files into other formats so so there's there's all of these other formats
[1:24:06] if your software of choice is cugas or something else all right so next question since for urban homogeneity which data
[1:24:15] is very useful since we're urban i'm not sure i understand this question but what i think this person is asking
[1:24:27] is is like how can you classify urban areas if you have urban areas where there's no flooding around it then it's the areas
[1:24:37] that have very bright very very high back scatter if you have an urban area where there's flooding around it like manaus for
[1:24:44] example then in my experience textures have really helped and there was one in particular called energy which gives you a measure of how
[1:24:54] homogeneous your pixels are within your window and that helped separate separate or better separate urban areas from flooded areas because
[1:25:06] urban areas i noticed tended to be a little more homogeneous than the flooded areas can i determine a land water boundary
[1:25:18] beneath a martian marshland low vegetation without trees yes yes you can you'll definitely see that how does one separate follow land and
[1:25:30] vegetation vegetation with water class and sentinel one sar follow okay that's a really good one and that's really a source of confusion and
[1:25:40] that's really where these ratios can really really help so you might want to try try hh over hv ratio
[1:25:49] or vv over vh since sentinel has a bb polarization so areas that are are fallow smooth have
[1:25:58] no vegetation tend to be confused with water classes a sea band can estimate biomass over dry green
[1:26:08] green evergreen forest yeah you can estimate biomass with c-band definitely the only thing is it's going to saturate
[1:26:17] at a lower level than with uh l-band l-band can i use radar images to monitor landslides yes you can and actually what
[1:26:27] the session that will will be relevant to this is going to be the last session that will be interferometry
[1:26:32] so that session will cover looking at surface deformation as a result of an earthquake but the techniques that will
[1:26:39] be covered are also applicable to looking at landslides so you're looking at these really small movements of
[1:26:47] the surface you know on the order of centimeters are there any free data sets of previous s-band satellites particularly
[1:26:56] interested in s-band utility for ag monitoring monitoring not that i'm aware of not that i'm aware of um
[1:27:05] it's very it's it's not uh common to have sar s-band satellites and so nysar which will be launched in
[1:27:14] 2021 that i talked about has an s-band sensor and that really that's around 12 centimeters so you you're better off
[1:27:23] using just c-band sentinel c-band data which polarization is better for glacier classification classification actually actually i'm not sure about that one since that's
[1:27:36] not really my field of work but if you send me an email i will send you a list
[1:27:40] of publications and i'll answer your question question what are the characteristics of drought-prone areas with respect to
[1:27:47] radar images drought-prone areas okay so so i'm not sure um what the the specific of this question like for
[1:28:05] example what comes to mind is there is a satellite in space it's a nasa satellite called smap the soil moisture active
[1:28:13] passive and it measures soil moisture globally globally and so you can every three days by the way at nine
[1:28:20] kilometer resolution and for drought prone areas you can take this product the soil moisture product and see how the soil moisture is changing as
[1:28:30] an indicator of a potential drought question 24 since the dielectric constant which influences the backscatter what will this mean for
[1:28:42] someone assessing or estimating the soil organic carbon across different land use and can this be related to landsat 8
[1:28:48] data data land surface temperature of in relation to its solar moisture freestyle and sc and the ndvi to the gpp wow that is one very
[1:28:58] loaded question all right so let me try to answer parts of this question so so the dielectric constant will have an
[1:29:07] influence on on backscatter yeah definitely definitely primarily primarily when you have like extremes for example in the northern high latitudes when it's
[1:29:16] frozen and it's thought there's a great difference in the dielectric so you're going to have much darker images when the surface is
[1:29:24] frozen as when it's dark if you're estimating soil organic carbon that is very tough okay for different
[1:29:33] land use i i'm not sure how you're estimating the soil organic carbon whether you're thinking of using radar to estimate soil
[1:29:43] organic carbon it's not clear to me but if you are using radar you need to use some
[1:29:49] sort of model right and you do you wouldn't need to account for the moisture in the soil because
[1:29:56] if the the scattering properties are going to be different whether your soil is wet or whether it's dry
[1:30:03] and by the way this smap has a soil organic carbon so it has a what's called a level 4 product and
[1:30:10] that is a model product to estimate and and net ecosystem exchange and one of the variables that it's also estimating is
[1:30:23] solar organic carbon what sort of return times can we expect from the satellites being launched in the next few years
[1:30:35] it's a really great question what sort of return times and i think there was a in in the
[1:30:46] presentation there was a graph that indicated one of the last slides in the presentation indicated the return
[1:30:53] times times but it's on the order of a week and a half to two weeks is there any data
[1:31:02] to show the elevation of sorry data okay so i think what your this question is is uh can you generate a digital
[1:31:14] elevation model from sar data and the answer is yes you can through interferometric sar and you need
[1:31:24] at least two images what radar data and that might be a topic that we'll cover in a few future
[1:31:32] uh sar uh webinar what radar data are most appropriate for the study of soil moisture okay for the study of soil
[1:31:40] moisture it's l-band definitely one because it has a greater penetration through vegetation and and so you're more likely to be
[1:31:48] sensitive to soil and two because it does penetrate soil a little deeper and so smap is measuring soil moisture
[1:31:55] at about five centimeters centimeters but that's that kind of varies the wetter the soil the less penetration you
[1:32:02] have and a p band in fact if you have something like p band you can go even
[1:32:09] deeper and that's really where soil moisture is important at the root zone level so really the longer the wavelength i think
[1:32:15] the better it is for studies of soil moisture moisture do we have to perform histogram equal equalization while classifying the
[1:32:22] images no you don't that was just for visualization but sometimes it helps to equalize the histogram to better see the
[1:32:28] images and and see the dynamic range of the image and then to be able to better select your training classes
[1:32:39] is it possible to measure the height of urban structures using radar imagery imagery not that i'm aware of i think the best
[1:32:51] bet for measuring the height of urban structures is lighter can these snap processes can be automated for price yes they can
[1:33:00] actually actually and let me show you here so they do have a batch mode and you go
[1:33:06] up here it says batch processing so basically you this graph builder you create a sequence of steps that you want to apply on your
[1:33:15] image images and then you do the batch processing okay let's see do you advise combining star images with
[1:33:26] optical images for land cover and mapping i yes actually um you can try these data sets are
[1:33:33] complementary the information content the radar is different from optical and and if if you have an area that might be difficult
[1:33:42] to classify like for example you have just areas where you have very low um uh uh backscatter
[1:33:53] backscatter because they're they're deforested or they're just very smooth surfaces and they're being confused with water sometimes optical really helps to
[1:34:00] separate those areas can sar be used in identifying self salt affected soils so so salt salt changes the dielectric of the soils
[1:34:19] right and of water can it be used to identify salt affected soils if they're very salt affected i
[1:34:26] think think they can i'd have to look through the literature but sar or radar has been used for example
[1:34:34] look at salinity salinity in the oceans so sea surface salinity and that is is related in part to the
[1:34:44] dielectric properties can we use sentinel images to map paleo channels so sentinel sentinel images are a bit more limited in their
[1:34:58] penetration but you might be able to map pilot pillar channels indirectly uh through what's on top so the
[1:35:05] vegetation on top of paleo channels might differ from the surrounding vegetation and you might be able to
[1:35:11] classify these different types of vegetations can sar images be used to model effect of river linking project and other
[1:35:20] development projects like dams i i'm yes i don't see why not cancer i'm not sure exactly what sort of issues you are interested
[1:35:31] in but but yes you should be able to see the difference um um in a river before and after them
[1:35:46] okay so it seems like that's it for the questions uh so with that i'll end today's uh webinar uh please make sure to tune
[1:35:58] in to the next one which is on thursday and we will cover flood mapping for that one
[1:36:04] one the following one the third one will be on on crop and soil mapping and then the
[1:36:11] fourth one will be on august august let's see 16th and that will be on interferometric sar looking at surface
[1:36:19] deformation deformation so thanks everyone for tuning in thanks for your attention and uh uh i'll i'll i'll see you or i'll hear from you on
[1:36:32] the next one coming up thank you very much
