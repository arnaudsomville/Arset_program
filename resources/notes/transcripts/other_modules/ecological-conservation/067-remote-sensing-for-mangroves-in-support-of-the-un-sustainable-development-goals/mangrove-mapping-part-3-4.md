# Mangrove Mapping, Part 3/4

`https://www.youtube.com/watch?v=vaBEHALn-js` · id 93 · 2:32:24 · module 82 — Remote Sensing for Mangroves in Support of the UN Sustainable Development Goals

[00:00] hello this is erica potus and i will be your presenter today thank you for joining us on this third session of
[00:07] forest mapping and monitoring with sardata sardata the focus of today's webinar will be on mangrove mapping this session has been assembled together
[00:17] with amber mccollum and juan ruiz torres perez from nasa ames and sean mccartney from nasa goddard for this training we have four two hour
[00:28] sessions and there is one left which is next thursday may 21st and we will be presenting the same
[00:37] content in two different live sessions one in english and one in spanish you can find all the course material on
[00:45] the website listed here and after each session we will have a question and answer answer portion portion feel free to type your questions in the
[00:55] chat box along the way and we will try to get at to as many questions as possible at the
[01:02] end end we will also post the questions and answers on our website after the training training so if we don't get to a question uh we
[01:12] but please take a look at the google doc that we will post on our website website and also you can email us and we will
[01:22] get back to you as soon as we can we will have one homework which will be available on the course website and the
[01:32] homework will cover content from the lecture as well as from the exercises to receive credit for the homework you
[01:40] must submit all answers via google forms by the deadline and we will announce the deadline and the homework at the end of the final
[01:50] session on may 21st to receive a certificate of completion you must attend all live webinars and complete the homework
[02:01] now it does take some time to process these certificates so you can expect to receive them about two months after the
[02:07] completion of the course so the two prerequisites for this webinar series are the introduction to synthetic aperture radar
[02:20] and at the advanced webinar star for land cover applications you can access those through the links here
[02:27] here and you also need to have a google earth engine account set up it's free but you
[02:33] do need to register register all of the course materials are posted on the rset course page web page and you can
[02:44] access that through the last link on this page okay so this is where we are in this webinar
[02:53] series on mangrove mapping part three there's one more uh webinar and that will be on thursday on estimating forest stand height
[03:08] so by the end of this presentation you'll have an understanding of what are the challenges in mapping mangrove ecosystems and you'll
[03:18] understand these radar signal interaction with these ecosystems and we'll also do a demo where you'll be able to
[03:28] look at doing some time series change detection in mangrove ecosystems and do some general calculations of mangrove biomass
[03:45] so let's get started and just by providing a little bit of background on mangrove ecosystems and their importance
[03:56] mangroves are some of the most productive ecosystems in the world they're found in intertidal zones in the
[04:02] tropics and subtropics as shown on the figure on the left and these ecosystems are comprised of trees or shrubs they're found in shallow
[04:11] sandy or muddy areas that are adapted to esterine or saline environments and they are truly unique because they
[04:20] are the only trees capable of tolerating large amounts of salt in the water and this capability as well as surviving
[04:28] in low oxygen soils is a result of their root adaptations these ecosystems provide numerous services that sustain the livelihood of
[04:39] millions of people and some of these services in addition to carbon sequestration include the protection of coastline and
[04:47] infrastructure against severe storms nursery of fish and crustaceans and the production of lumber and charcoal charcoal in addition these ecosystems remove co2
[05:00] from the atmosphere through burial of organic carbon in its sediments and they serve as huge carbon sinks
[05:09] though mangrove forests cover a small land area less than one percent they are estimated to be amongst the
[05:16] most carbon-rich ecosystems within the tropics so mangrove ecosystems have recently been been included in the ipcc the inter
[05:28] governmental panel of climate change the climate mitigation strategy through a number of wetland supplements so their importance has really been
[05:38] elevated there are different types of mangroves primarily red black and white red mangroves are the most salt tolerant
[05:49] while white are the least mangroves can exceed 60 meters in height and are able to attain high values of above ground
[05:59] biomass biomass in addition their structures can differ as you can see on the figure on the left
[06:06] some can have large curved roots while others don't these ecosystems are being threatened or lost lost the rate of loss throughout the 90s
[06:19] was twice that of terrestrial rainforest over the same period and it's estimated that about a third of
[06:26] mangrove forests have been lost during the last century some of the challenges in mapping mangrove ecosystems are the need for
[06:37] high resolution imagery since these ecosystems tend to cover narrow bands along the coastline also given that mangroves are found in
[06:47] tropical and subtropical areas and along the coast these are areas that are more prone to cloud cover
[06:54] and hence finding optical imagery that is cloud-free over these areas can sometimes be difficult and finally the conditions in these
[07:03] ecosystems is dynamic there are differences between high and low tide for example and these differences can impact the
[07:13] characteristics of the the the the satellite signal especially if you're using radar as well now let's discuss the sar signal
[07:27] characteristics characteristics and mangrove ecosystems so first let me start out by reviewing the back scattering mechanisms of the
[07:38] radar signal remember that the length of the wave will determine how it interacts with surface objects the wave will interact
[07:47] with features on the surface that are approximately the length of the wave the size of the components of a surface
[07:54] will determine its roughness so surface roughness refers to the average height variations in the surface cover from a plane surface
[08:03] and surface roughness is measured on the order of centimeters so whether a surface appears rough or smooth to a radar
[08:12] depends on the wavelength and the incidence angle a surface is considered smooth if the height variations are much smaller than
[08:20] the radar wavelength as a useful rule of thumb the higher the back scattered signal the rougher the surface
[08:30] will look like the surface being imaged will look like all right so let's review the [Music] [Music] uh backscattering mechanisms that we see
[08:41] here the first one is a smooth surface also known as a specular reflector and the smooth surface it acts like a
[08:49] mirror for the in incident radar poles such that much most of the incident radar energy is reflected away from the
[08:58] sensor sensor and then that causes those areas to appear very dark dark open water surfaces tend to be
[09:07] specular reflectors the next scattering mechanism is a rough surface so when the surface height variations begin to approach the size of
[09:16] the wavelength then the surface will appear rough and the rough surface will scatter the energy approximately equally
[09:24] in all directions diffusely and a portion of the energy will be back scattered to the radar so
[09:32] so surfaces that have some level of roughness will have some some [Music] [Music] low back scatter but not as slow as low
[09:43] as a specular surface so then there is the the opposite mechanism oh and the the rougher the surface the
[09:55] greater the energy uh scattered back to the satellite okay and then the other mechanism is volume scattering
[10:08] and volume scattering refers to the energy the radar energy being scattered within a volume or medium and it usually consists of multiple
[10:19] bounces and reflections within the medium okay whether it's a vegetation canopy whether it's a snowpack whether it's
[10:28] it's the soil and then the final mechanism is double bounce bounce and and that occurs when two smooth surfaces
[10:37] form a right angle facing the radar beam and so the beam bounce it bounces twice off the surfaces
[10:44] and most of the radar energy is reflected back to the radar sensor double bounce is commonly seen in urban
[10:51] areas areas and in areas where there's flooded vegetation and i'll quickly go through these examples just as a refresher on
[11:04] the the intensity of the back scattered signal from these different surfaces okay so when you have a
[11:14] a dark a a smooth surface a specular reflector like an open water body the the signal will
[11:23] reflect away from the radar so in this case the radar is in the left and then the energy
[11:30] that's being emitted from the radar is being being reflected towards the right okay when it hits a smooth surface so open water road
[11:42] and and the pixel will appear very very dark and you can see that in this example the area that's circled with uh
[11:53] in in yellow is part of the amazon river and as you can see it appears very dark
[12:01] [Music] [Music] and this next example shows rough bare surface so so bare surface or a rough surface would be
[12:12] say say an area that has been deforested a tilled agricultural fields water water that has been roughened up by the wind
[12:25] so so whenever you have a some level of roughness a small level of roughness you've got the signal being scattered diffusely and
[12:36] part of that signal then is returned to the radar and so for areas like these the the back scatter intensity is
[12:49] low is very low but not as low as a specular specular reflector reflector so not as low as the previous example
[13:01] this next example is volume scattering by vegetation and the area area in the re in the yellow circle
[13:10] is a forest in the amazon basin and so the intensity of volume scattering depends on the physical
[13:18] properties of the volume such as the variations in moisture content and structure structure and also depend on the radar the
[13:25] wavelength polarization and incident angle but the point here is that volume scattering will have higher back scatter
[13:33] than surface scattering and and certainly specular scattering so this is an example of volume scattering in a forest and as you can
[13:46] see scattering may come from the leaf the the leaf canopy at the tops of the trees the
[13:53] leaves and the branches further below the tree trunks and the soil at the ground level so the figure illustrates all of the
[14:03] possible scattering mechanisms within a forest there's direct scattering from the tree trunks there's ground crown scattering crown ground scattering
[14:13] ground trunk scattering trunk ground scattering crown volume scattering so there are potentially many different possible interactions of the signal with
[14:24] the vegetation or different parts of the vegetation vegetation and obviously the length of the wavelength will also determine uh which
[14:33] will be the primary or the dominant scattering mechanism mechanism in um in a in in a forest
[14:43] or wherever there's vegetation and then finally this example shows double bounce it's delineated here by the yellow circle
[14:53] and it's an inundated forest that means that the trees are on standing water and the signal is very
[15:01] very uh strong very high back scatter and the reason for this is because the signal bounces off the water which
[15:10] is a specular reflector off the water underneath the vegetation and and it bounces onto the tree trunk or other
[15:19] components of the tree and then bounces back to the satellite so we can't measure the amount of
[15:24] standing water just that there is water above the surface but because these inundated vegetation is dominated by
[15:34] double bounds it's it's it appears very bright on radar images for mangrove ecosystems there are three types of scattering mechanisms there's
[15:48] direct or single bounce and yellow volume scattering in white and double bounce in red the dominant scattering mechanism in
[15:59] mangrove forest strongly depends on canopy structure trends and volume and double bound scattering vary much more than in other
[16:08] types of forests in particular in mangroves volume scattering decreases in closed canopies and double bounds increases in open canopies
[16:21] inundation at the time of data acquisition acquisition also can have an impact on the radar signal in open mangrove forests
[16:34] as you already know hv polarization is dominated by volume scattering scattering and hh and vv polarizations on the other
[16:44] hand contain contributions from the ground because they penetrate deeper through the canopy than cross polarizations polarizations hhh is particularly sensitive to
[16:55] inundated vegetation and in such conditions will be impacted by the occurrence of double bound scattering now in mangrove forests however double
[17:06] bounds bounds that that double bounce term that strongly impacts the hh channel may be reduced by the presence of roots
[17:15] those curved roots that are so distinctive in mangrove forests so what happens is that the the radar signal is
[17:26] scattered and attenuated by these roots l-band backscatter at both hh and hv polarizations polarizations is therefore several db lower for mangroves than for
[17:40] other types of forests and so here you can see that we have an l-band image from aylos pulsar and this is over
[17:48] gabon gabon and the one on the right is an hh the one on the left is hv
[17:56] the dark areas along the coastline uh the all of those areas that are hugging the coastline within the red
[18:04] circle circle those are mangroves and you can see that they are darker than the surrounding forest this is an rgb of the previous image
[18:19] where hh is in the red and blue channels and hv is in the green channel you can see much better the mangroves
[18:27] appearing as a shade of dark green along the coastline now contrary contrary to inland forests were backscatter increases with veget
[18:39] with increasing vegetation due to volume scattering scattering for mangroves backscatter from volume scattering is reduced in tall mangroves and is increased with
[18:50] shorter ones in some cases backscatter from volume scattering may become similar to that of inland forests however the texture of mangrove forests
[19:02] is tends to be smoother than just other non-mangrove forests and this is in part because of inland topography and
[19:13] to the overall homogeneity of the mangrove canopy structure if you have multiple polarizations you can use them to identify mangrove
[19:23] forests from other land cover classes especially at the longer wavelengths here we have a comparison of a mangrove
[19:34] ecosystem ecosystem and and the images on the top are l-band and the ones on the bottom are c-band
[19:43] the relative impact of the scattering mechanisms mechanisms changes significantly with radar wavelength wavelength ground and double balance contributions
[19:52] increase with wavelength seaband backscatter mainly occurs at the top of the canopy and that strong canopy interaction
[20:02] interaction provides for increased sensitivity to canopy structure and consequently a certain potential for distinction of mangroves mangroves and other vegetation
[20:15] so you can distinguish different types of of mangroves with different canopy structures structures now the smoother canopies typically
[20:25] display a lower back scatter at both vv and bh polarizations than rougher canopies with a higher degree of
[20:33] structural variation at l-band there is attenuation of the signal due to those complex branches and aerial routes
[20:43] [Music] [Music] this table contains a very nice summary of the general penetration depth and dominant scattering mechanisms in
[20:51] mangrove forests for different bands for example at l band microwave penetration into the canopy is about as large as half the canopy height
[21:03] scattering is dominated by single direct bounce in tall forest and volume dominates in the shorter shrub mangroves
[21:12] double balance which means the back scatter will be very high increases significantly the lower the biomass and the more
[21:22] open the forest at a shorter wavelength such as c-band for example penetration depth goes about one third of the
[21:33] of the top of the forest height and the scattering mechanisms will consist of single direct bounce and
[21:41] volume scattering from the upper canopy with a small surface and double bounce components components this double balance component will
[21:49] increase significantly in open forests and low biomass areas [Music] [Music] this table contains the backscatter range for mangroves for different bands
[22:02] and polarizations and these are general trends and may not be constant so for example backscatter may increase for low
[22:09] biomass biomass shrub stands up to standing force where it then might decrease it's difficult to map the extent of
[22:21] macro force using radar alone in particular when the adjacent inland cover is forest or shruplands because of similar backscatter
[22:32] this can also be difficult with optical sensors because greenness may not be sufficient to distinguish mangroves from
[22:38] other vegetation types this example shows mangroves in cape york australia and on the left is an aylos pulsar image
[22:49] so that's hh in the red channel hb in the green channel and the ratio of hh to
[22:55] hb in the blue channel and then on the right are the same mangroves that can be discriminated from adjoining forests by
[23:04] using a landsat derived foliage cover product product areas where mangroves have non or sparsely vegetated surfaces like sand or
[23:14] mud flats on their landward margins can generally be discriminated and mapped because of their higher back scatter at both
[23:25] l band hh and vv polarizations there there several studies have recommended that the best approach to mapping mangroves
[23:35] is really a combination of data sets obtained from different sensors land cover classification can generally be performed with the radar backscatter
[23:44] as one of the layers along with data say from from optical instruments such as landsat or sentinel 2
[23:53] and there are global maps of mangrove extent derived from optical data that can be used to extract the area of
[24:00] mangrove force from radar data and then and these have recently been improved using elos data but it's generally more efficient to
[24:11] start with existing but reliable remote sensing products on where the mangroves are and then improve upon those with the radar data
[24:25] one solution is to confine the mapping of mangroves to just those areas where there's a higher likelihood of
[24:33] them occurring for example mangroves are unlikely to occur in sloping grounds or at elevations above sea level higher
[24:42] than 10 meters so that those baseline maps can initially establish where mangroves occur occur within uh some sort of reference year and then you
[24:53] can refine that baseline based on changes within areas uh they're most likely to occur and and then you can
[25:06] quantify those changes using radar data another approach is to use radar in combination with data sets from other
[25:14] sensors so a lan a land cover classification classification can be uh for example generated from radar data together with
[25:24] optical data from either landsat or sentinel 2 classification results can vary greatly though with this approach due to the
[25:34] availability of polarimetric layers and due to availability of radar data at different bands so you're going to get a
[25:44] different results whether you use l-band or c-band so there have been studies that have found that sentinel 1 did not provide
[25:55] significant improvement over landsat based land cover classification however however other studies have shown increased accuracy over 10 using fully
[26:08] polarimetric radar sat2 data this image shows a classification of mangroves mangroves in in queensland australia so the areas that are
[26:23] pale green have low biomass and the areas that have high green olive green are areas of high
[26:32] biomass forest without prop roots and the areas that are red are areas of high biomass bores with
[26:42] prop roots so while the literature is not definite on the backscatter signature of mangroves it's got quite a range the
[26:57] upper biomass level detectable with radar is similar to other forests so it's about 200 tons per hectare for key
[27:06] band 100 for l band 50 for c band and 25 for x band after that point the observed back scatter
[27:16] reduces due to absorption by the dense aerial root system found in mangroves so so it is different
[27:24] here the the backscatter response to what would be expected in a regular forest the regular forest as vegetation
[27:32] increases backscatter will increase until it saturates here as vegetation increases backscatter increases up to a certain point
[27:43] point up to a certain biomass level and after that it actually decreases so you have higher biomass
[27:51] mangrove ecosystems that have low back scatter and we saw an example that we saw an image of that a couple slides ago
[28:02] now now this holds specially for hv however with in observing scrub mangroves at hh and vv so these are low mangroves low
[28:13] biomass sometimes they these polarizations hh and vv also display high back scatter and that's due to the increased penetration within the
[28:24] canopy and the double bounds interaction with either the water surface or water saturated ground so this is a summary of the radar data
[28:41] available and note that there are legacy radar data sets current and upcoming the ones with the green box indicate that
[28:50] these data sets are freely available however you look at the legacy data sets jrs1 for example there is a global jrs-1
[28:58] mosaic mosaic generated for 1996 that is freely available there is ers 1 and 2 data over select areas that you
[29:09] can download for free through the alaska satellite facility so csi jrs 1 and ers 1 and 2
[29:20] you can download those data over select areas through the alaska satellite facility nbsat was a european satellite
[29:32] that operated at seabed from 2002 to 2012 2012 and then halos one is a japanese sar that operated actually from 2006 to 2012
[29:50] and then we have the current sar data sets sets the only one that's operational and the data are free are the sentinel one data
[30:00] these are from the european space agency again that is a c band sensor launched in 2014. and then upcoming there's nysar we've
[30:10] talked about nysar that's a nasa and indian space agency satellite that will have an s-band and an l-band sensor
[30:20] and then there's a biomass which is a satellite that will have a p-band sensor and that's from the european space
[30:28] agency agency and that's um both of those are scheduled to launch at around the same time frame
[30:39] so that concludes the theoretical portion of this webinar and next we'll move on to the hands-on exercise
[30:53] okay so let me just start out by describing the exercise overview we will learn how to process and analyze
[31:03] radar images will actually be in radar images engine engine and we will be using then google earth engine as a
[31:14] platform for our analysis so we will be doing some land use change or biomass sorry sorry mangrove change analysis
[31:25] and we will also estimate above ground biomass for mangrove forests in terms of the software and data that
[31:34] will be needed for this demo we will be using the sentinel toolbox and and the analysis is going to be done on
[31:42] google earth engine so you do need to have an account active on google earth engine engine both of these are free there is no cost
[31:50] to set these up in terms of the data sets to be used we will be using global l-band
[32:01] pulsar 1 mosaics as well as pulsar 2 mosaics mosaics those are already on google earth engine we will be using jrs1 mosaics or mosaic
[32:13] so that is from the the uh the the direct lead from the jaxa webpage so we will
[32:22] download those and then import those in or import the tiles into google earth engine for analysis and
[32:31] this is a 1996 radar mosaic it's an l-band mosaic and then we will be using a global mangrove watch
[32:41] vector vector and this delineates the mangroves it's uh globally and we will be using that to narrow our area of interest
[32:56] so let's get started with the the l band sar mosaic tiles from jaxa so jaxa has generated these global
[33:08] mosaics mosaics from the data it's acquired from its satellites so back in the 90s the jaxa which is a japanese space agency had a
[33:19] satellite called jrs1 and and it collected images at l-band there was an l-band radar sensor and so what the japanese
[33:34] have done is they've created a a global mosaic from jrs1 for 1996 and it has also created global mosaics
[33:46] from its more recent l-band sensors which is halo's pulsar one that goes from 2006 it flew from 2006 to 2011
[33:57] and then the the pulsar 2 which was 2014 i believe and it's currently flying collecting data so
[34:11] so these mosaics can be downloaded for free and you do need to have an account with jaxa in order to
[34:19] download these mosaics however the one that we are interested in is just the jrs one because the elos pulsar mosaics are
[34:30] on google earth engine okay so here is the web page the jaxa web page and and in addition to
[34:40] the the mosaics the backscatter mosaics they've also generated a product on forest non-forest so they've used these mosaics to generate
[34:50] these global forest forest non-forest maps these their yearly global force non-force maps and they've got a number of updates here
[35:04] um on the data sets that they've made available available and they talk about the algorithm used to generate the
[35:12] forest non-forest maps and so these mosaics are at 25 meter resolution so so in order to download the data
[35:26] okay you need to first register yourself and you go to down to number four and you click on this link
[35:35] and and you then provide your information and you register yourself and they will send you a confirmation email with your
[35:47] password once you have your password then then you go back and you select this link the data set download side is this one
[35:57] and so that link will take you to to this page okay so this page contains the different mosaics that are available
[36:07] that you can download and we've got again it's 25 meters they're global for jrs one it's 1996 that's just hh
[36:18] polarization polarization and then for other years uh there's there are mosaics available 2007 8 9 10 and then
[36:31] 15 16 17 and 18. okay okay also also 25 meters these are hh the and hv the
[36:42] radar backscatter mosaics are hh and hv and then there's also that product that i mentioned that they've generated from
[36:49] these radar backscatter mosaics for non-force maps okay they also have these mosaics that were assembled as part of what was called the global
[37:01] reinforced mapping project at the time over the tropics and these mosaics show you the data that's available right so it's the
[37:14] tropics but it's available for different years years which is uh quite nice so you've got 1993 4 5 6 7 and 8.
[37:27] okay okay and then there are some low resolution products if you're not needing the 25 meter products you can download
[37:36] the same data sets at 100 meter resolution resolution and at one kilometer resolution and at 0.25 degree as well the forest
[37:49] not forest maps okay okay so so let's let's download the data set that we're interested in now our area of study
[38:05] will be or our focus area will be in myanmar and this is an area where there's been
[38:11] a lot of mangrove loss so so we will select this grid here let's go back i might have done that too
[38:22] quickly it's this grid this one here and this is all in the powerpoint powerpoint okay so once you select that grid you go
[38:31] to another one so so we will select this area we're interested in in this coast right here
[38:43] okay and then we will sel we will download download five tiles from here and these are these two
[38:54] these two and then this one so let me just show you in the powerpoint files files the tiles that we're interested in
[39:06] so here you go we will be downloading these five tiles okay so you need to download each one
[39:24] one by one okay so you click on the first one and you select download and it will automatically download the
[39:32] file onto your computer okay so once it downloads you need to unzip that file and the format it's in it's an
[39:48] nv format so that means it's a raw file and then it's got a header file associated with it that has all the
[39:56] metadata metadata relevant to that image so once that file is downloaded then what we do is we open
[40:21] the sentinel toolbox because what we want to do is convert that file from an nv file to a
[40:29] geotiff you don't necessarily have to do this with the sentinel toolbox you can do it with for example
[40:39] uh qgis you you guys recognizes mb files and you can just export it as a tiff so what we'll do is let's just go and
[40:50] open our file and the way to open that file is you go to import import generic formats oops
[41:00] file import generic formats and select envy okay and then i've downloaded the files already and i've unzipped them
[41:16] and so what i'll do is i'll select the hh that's the one so each file it comes in a folder with
[41:25] the main file which is hh polarization and then it's got a file that has uh the date the date of
[41:35] acquisition of each pixel the incidence angle and it's got a a mask so the areas that were masked out
[41:44] when processing the data okay so so we import we select the hdr import and it open it
[41:54] so so you click on you open the the file name and there are three folders and then you click on
[42:02] back you open bands and double click on band one so that's the image and what we want to do is
[42:12] export to to you go up to file export export select geotiff and then select the name of the file would keep
[42:28] the same name and just add the tiff uh um extension at the end and then press export
[42:38] you'll do this with all of the five files because you want to have them as geotiffs okay so
[42:46] just make sure that when you load the next file and so let me just show you here very
[42:52] quickly quickly let's load the next file just just select this one number number two when when you really select the band okay
[43:14] it's easy to just kind of open it and then then go up here and do the export and what
[43:21] happens is it's it's actually going to export this one so select the band and and go through the same process export
[43:33] duotif okay so that ensures that you're exporting that band all right so so once you have your files
[43:45] so we won't need sentinel the central toolbox anymore that's that's the only part where we need sentinel toolbox in
[43:52] this demo the next thing we do is we go to google earth engine okay so here we are on google earth
[44:04] engine engine and and i've got my code editor here in the middle and what i do in order to import an image is i go
[44:15] into assets i click on new and then you can upload different types of files you can upload a shape file
[44:24] we'll do that you can upload a geotiff file so let's upload the geotiff files some image pops up
[44:33] and what you need to do is select your tiff image and you have to do this for
[44:39] each image right so so let's go and select that that we created and let's select your first one
[44:51] [Music] uploaded them code i'm just going to give it a name and i'll call it um um jrs
[45:05] jrs uh first okay first image and then i click on upload and if you go here on the right
[45:18] on the far right this window asks being being uploaded and it tells you how much has been uploaded so it will
[45:36] give you an idea this is nice because then you know how long it's going to take to upload your image
[45:43] all right so once that finishes you'll see that there's there are no will spinning then then just
[45:51] just go go go to that file which is the most recent one and click on that question mark
[45:58] okay okay and then this is the name and let's click on view assets assets so so that when you
[46:08] click on view assets then this window opens and you can see these details about your your image so this is
[46:17] the image id this one up here and you can call your image through the uh using code
[46:28] and and using this image id or it's much easier to just import that image so click here
[46:37] click on import and and that's it okay okay so let's close e here and what happens is
[46:54] in in your text editor there's something called imports up here and what you'll see is the image that
[47:06] you just imported imported it's called image image jrs first image so i'd like to change the name
[47:18] rather than just having it being called image image i always like to use a descriptive name so this is
[47:25] uh uh the jrs first okay and you do the same for all of the images so you import all of them
[47:40] and and so i will i'm actually going to delete this because i already have the images imported
[47:49] imported but let me just show you what i've done here here so so under import i've imported the five
[48:00] images jrs images one two three four and 5 right so i've named them i've given them a descriptive name
[48:11] and then i can call them in the code the next thing we want to do is we want
[48:16] to to upload another file and this one is on mangrove cover so so man man global mangrove
[48:26] distribution distribution and this is a file that has been generated by global mangrove watch by it's a joint project but it's called
[48:39] the global mangrove watch product product and and you can access it through the link provided on the pdf
[48:50] so we go to this page and this page has the global mangrove watch files 1996 through 2016.
[48:59] and these are all vector files the one you're interested in downloading is 2010. 2010. so the 2010 file has a baseline of
[49:12] global mangrove distribution again these are vector files and if you want to learn about how these files were
[49:18] produced there's more information here and here but they've used the radar data from jrs and halos pulsar
[49:27] to generate these global distribution mangrove files okay so download this one and then let's upload it into google earth engine
[49:39] and the way to do that is go to google earth engine again select new under assets and
[49:50] and this time select shape files and it'll be the same process you drag your shape file into the selection box to
[50:04] select files you give it a name and then you upload it again the same thing thing it will tell you how long it takes to
[50:13] upload this one will take a little longer because it's a larger file so here's what we do
[50:28] so going to data it needs at least the essay checks the shp and the [Music] [Music] the uh let's see
[50:41] the dbx the dbf files let me just double check on that so click on these three okay
[51:01] okay so i need to lease those three and then you can just rename it i named it mangrove
[51:12] mangrove vector just name it however you want and go through that process of upload upload and then same thing i've already
[51:22] uploaded it but same thing you'll have the image appear here under tasks with a cog wheel and it will tell you
[51:30] what percentage of the image has been uploaded uploaded and then once it's uploaded same thing you press on the question
[51:37] mark mark and you go to view assets and you import that file so now that file will appear
[51:44] in your imports list and and you can see it here in my imports list i've named that file
[51:54] actually i've named it mangroves okay so it's a mangrove 2010 and i've named it mangroves to identify
[52:03] all right great so we've got those files uploaded and a lot of you were asking in the
[52:15] previous demos how you uploaded files so this is how you do it and the next step is in
[52:28] loading the pulsar mosaics so google earth engine has the pulsar global mosaics the yearly mos x it also has the forest
[52:39] non forest maps so just type pulsar up in the search window and click on pulsar 2 palsar yearly mosaic
[52:47] to get information about the the file okay there you go so so the the it tells you that
[53:05] they are hh and hv and there's the incidence angle information the date of acquisition and and the
[53:20] the processing information and there's a description again it's 25 meters the data are at 16 bit digital numbers
[53:36] and so you do need to apply a an equation to convert that dn value into decibels decibels and we will go through that okay
[53:48] so the data have been processed corrected but they are in digital numbers so that's that's one of the
[53:54] things we need to do as well as apply a speckle filter okay and then one more thing is
[54:03] that these data are [Music] [Music] there are different years um so one thing you can do is import the collection and then filter
[54:14] it according to years or or what i've done here is i've called the specific years so what we've done here is
[54:25] load the pulsar global yearly mosaics okay so in this case uh there's the we're loading the 2007 the 2010 and the
[54:37] 2017 2017 yearly mosaics and um they're being called pauser 2007 2010 2017. okay and then we're also loading the srtn 30
[54:52] meter dm again if you want to see more about the srtm srtm digital elevation models on google earth
[55:02] engine this is the one that we selected and and this is the name of that that data set
[55:12] so we're just calling it srtm okay the next thing is the jrs1 images that we uploaded those were
[55:26] individual images so we want to create a mosaic right and in order to create a mosaic mosaic we use this command so we're calling the
[55:34] mosaic jrs 1996 and and we're using the ee image collection so we're saying take all of these images
[55:44] the five images individual images and mosaic the next thing we need to do as you know with radar
[55:56] is that we need to filter the images so so what we've done is applied the same smoothing filter that's been applied
[56:06] in in other other demos that we've done here we've defined the filter to be dirty it's slightly smaller you can
[56:15] certainly play around with that and and what we're doing here is just saying okay so take the pulsar 2007
[56:27] global mosaic hh and hv and apply the smoothing filter and then jrs it just has one band
[56:34] it's hh and apply the smoothing filter all right so once we do that then we convert the images into db
[56:48] and this is the equation to convert the images into sigma not in in db in decibels okay so it's the 10
[56:58] log 10 of the dn number squared plus a calibration factor the calibration factor is -83 for pulsar for the pulsar mosaics and images
[57:12] and it's minus 84.66 for the jrs mosaic so what this is doing is it's applying the the the equation
[57:26] with the specific calibration factor for jrs jrs and and then then the same equation but with the specific
[57:35] calibration factor for the the pausar mosaics okay and we're doing this for both uh hh and hv wherever there is hh
[57:52] and hv remember jrs has just hh all right the next thing we want to do is is we want to define our area of interest
[58:10] and the area of interest that we want to define define is off the code of myanmar okay so
[58:38] so what you do in order to define your region of interest is select the polygon select the draw shape
[58:48] polygon and this is what's going to come up the default is is is called geometry so you draw your
[59:02] area of interest and here we're drawing an area of interest along the coast here of myanmar and then you go in and you change the
[59:13] name of geometry you change that to by clicking on that cogwheel you change it to roi so that means region of interest
[59:23] okay i've done that already so this is just going to delete this i've done that already here this is my
[59:36] region of interest all right so once we select a region of interest then then we want to clip the images to our
[59:54] region of interest our area of interest because remember these images are global right so we go ahead and
[1:00:04] we do a clipping according to that region of interest that we define so we're taking the db images that we
[1:00:11] created in the previous step here db for each of the images and we use this clip command
[1:00:20] according to the region of interest so we're clipping it according to the region of interest and we're calling
[1:00:27] those new images roi so the same name and then we're adding roi at the end all right and the other thing that we're
[1:00:39] doing is we're also clipping the srtm uh uh elevation elevation image image so so that's a global product the srtm
[1:00:51] elevation image and so we are clipping it according to the roi and we're calling it srtm region of interest
[1:01:00] okay so once that's done then you need to to add those images to layers in order to
[1:01:08] be able to visualize them so let's just go ahead and let's add them so we're adding all of them the
[1:01:22] srtm roi and and so we're stretching the values here just to visualize it this is all trial and error
[1:01:33] i'm just this is you want to find the best stretch to to visualize your image so srt mroi
[1:01:43] and it's called srtm in the layers and then we're taking that vector that mangroves vector that is a global vector and we're adding
[1:01:54] it to layers as well and we say okay give it a red color so we're just calling it mangroves
[1:02:02] and then we're adding each of our images to the layers bar bar again we're stretching according to
[1:02:12] the the values in the image and this is this is trial and error you can play around with this until
[1:02:22] you find a stretch that that best allows you to visualize the image but in this case for
[1:02:30] uh hv we're using a stretch of minus 27 to minus 5 and for hh minus 15 to minus
[1:02:36] 3 3 and then for jrs minus 25 to 0. all right and then one thing that we've done here also at the end has been
[1:02:51] to create some rgb images so there are three rgb images um there is the let's see the
[1:03:08] image the first one is looking at the difference between 2007 and 2017 only only okay so we're using
[1:03:18] using the h band to look at 2007 which is in the red and blue bands and then we put
[1:03:25] 2017 2017 in the green band the second rgb we're visualizing we're doing a our rgb between 1996 and 2017. so the
[1:03:37] 1996 image is in the red and blue bands and the 2017 is in the green band and then finally the last rgb is the
[1:03:51] three three different dates the pulsar dates that's 2007 2010 and 2017. all right so let's just run that
[1:04:04] and let's take a look at our images and this is and you can just deselect that roi because it's kind of
[1:04:15] it's going to get in the way when you want to visualize the images so so the images we
[1:04:24] loaded loaded are so let's start let's start with srtn okay that's our elevation file this is our mangroves vector file
[1:04:43] now this is a global file okay so that's the mangrove vector the global distribution this is our jrs
[1:05:03] file mosaic that we created 1996. and then this is pulsar 2007 pulsar 2010 and pulsar 2017. all right so really to visualize those
[1:05:26] let's let's upload the rgb so this is 2007 and 2017. so remember anything that is pink means
[1:05:41] that that it was high in 2007 low in 2017 because pink is a combination of red and
[1:05:50] blue which is what we have in the 2007 channel channel and let's just zoom in so you can really
[1:05:56] see see the amount of change that has occurred here in this area area so this is between 2007 and 2017.
[1:06:06] all of the pink areas are areas where there's been loss mangrove loss and the green areas has been is is
[1:06:17] either there's been a regeneration of the mangrove so it was uh uh it had been cut in 2007 and
[1:06:27] it grew in 2017 either that or it could also be that there is the some sometimes these are cut and used for
[1:06:39] agriculture so there is some um um some some agricultural crop in these fields it doesn't necessarily mean the green
[1:06:51] areas that there's been a return in the mangroves now now let's let's visualize visualize the the three dates
[1:07:30] the 2007 2010 and 2017. so remember that color wheel that we discussed back in the time series
[1:07:45] uh uh webinar on the combination of colors to understand the the change in different dates okay so anything that is yellow would
[1:07:57] mean that there is a mix of green and red red and so whatever's in the green channel
[1:08:05] and whatever is in the red channel is high high whatever's in the blue channel is low anything that is green means that only
[1:08:16] whatever's in the green channel is high um okay so now let's display the 1996 1996 and 2017.
[1:08:49] deselect this so all of the pink areas are areas where there was loss between between mangrove loss between 1996 and 2017.
[1:09:18] there is a slight offset when you zoom in you'll you'll see that there's a slight offset so the co-registration is not
[1:09:26] perfect but there are some interesting things that are quite obvious for example uh there has been an extension of the land right here
[1:09:45] in this snippet and down here as well in this area so this 1996 jrs mosaic is really a great mosaic if
[1:10:23] you want to go back and look at some changes changes historic changes you know especially being able to
[1:10:30] compare it with a very recent data the only thing about this mosaic is that it's it's just an hh
[1:10:39] polarization polarization and one thing i'm not sure i mentioned but but the the jrs mosaics that i showed you how
[1:10:48] to upload as well as the mangrove distribution distribution files files are on the rsap webpage so you can grab
[1:10:57] them from there rather than going in and downloading them through the the directly from the web pages i showed you
[1:11:09] all right so now that we've visualized the images let's let's look at some changes and what we're going to do here is do
[1:11:21] something similar to what we did in the time time series analysis on the first webinar so we are going to create these ratio
[1:11:30] images images and here we're creating ratio images for two different dates one is 2007 to 2017. and for that we're using the hb channel
[1:11:44] and and the other ratio image is 1996 and 2017 we're using hh hh uh you will notice that
[1:11:54] there is a substrate here the reason for that is because remember these images are in their log
[1:12:02] so whenever you do a division with numbers that are log you subtract them okay so let's calculate the ratio images and
[1:12:14] then display them and and run your code so so you can see them here in the bar
[1:12:34] so you've got the 2007 2017 let's just look at that so the areas that are very bright are
[1:12:42] areas where there's been loss in mangroves and the areas that are very dark are areas where there's been
[1:12:57] some sort of return of vegetation so that is for 19 2007 2017 let's take a look at the 1996
[1:13:10] 2017. you see that there was there's been quite a bit of change there in that time period
[1:13:57] okay so the next thing we do is calculate the threshold that we're going to apply and this time we'll do it a little
[1:14:12] differently so last time what we did was we looked at the histogram and then based on the standard deviation we
[1:14:21] multiplied the standard deviation by 1.5 and we calculated the threshold based on the mean minus 1.5 okay so what we're going to do here is
[1:14:38] draw polygons over the areas of change to determine our thresholds so let's just bring up the hv 2007-2017
[1:15:08] okay so what you do is you go to the polygon shape here and and you select the draw shape let's deselect
[1:15:17] roi roi and select new layer and then zoom in to [Music] those bright areas so what we want to do is we want to
[1:15:38] select some polygons and then determine the statistics of the values within those polygons to then set our threshold
[1:15:47] so let's just select this area here so you get the point right so now what we'll do is go
[1:16:36] into geometry and just give that a name so what i've done as has been to give this a name and call
[1:16:45] it it loss so these are areas where there was mangrove loss 2007 2007 2017 2017 okay and press ok
[1:16:58] now now repeat that so since i've done this i'm not going to save it i've got it right here now
[1:17:05] repeat that for the areas where there's been a gain so select those polygons over those very dark areas
[1:17:20] and then also also select over areas where there's no change there's no mangrove change and and those are the areas where it's not
[1:17:31] either dark or bright and and another way to do that is to overlay that mangrove vector file
[1:17:47] so let's just overlay the mangrove vector file on this ratio image okay okay so you can overlay it
[1:18:31] using the the tool here next to the the file name so there we're overlaying just to make sure that wherever you pick
[1:18:40] an area that you want to characterize as no change that it actually falls within the mangrove vector file and this is also a
[1:18:49] good way to look at the areas that are defined as mangrove by the vector file so so so you can select an area here
[1:19:08] again you select the polygon say new layer and then zoom in select that area oops apologize i selected
[1:19:42] line we actually want a polygon so let's make sure we select polygon okay okay and then so you can see as you overlay this
[1:20:11] mangrove vector file that this this is from 2010 right and there have been changes in the mangrove
[1:20:22] cover in this area right from 2010 those bright areas are areas where there's been mangrove loss okay
[1:20:53] and then name your polygon appropriately so what i've done is i've created six different categories categories right
[1:21:05] right so one is called or or column classes so one is called lost 2007 2017 gained 2007 2017 and then no change 2007
[1:21:21] 2017. that's the last one i selected now you want to go through that same process just upload the 1996
[1:21:31] 19 19 1996 2017 racial image and do the same thing select areas where it's bright there are
[1:21:42] actually not very many dark areas and i will deselect so these are the areas i selected so the areas that are
[1:22:04] purple purple are areas that i that are bright that means there was a mangrove loss the areas that are
[1:22:13] yellow means that there was some sort of gain and then no change are areas that are cyan
[1:22:31] and when you overlay that mangrove vector layer you can see how much change there's been since 2000 uh
[1:22:39] since 1996. okay okay so we've got our polygon selected now we want to extract the statistics of those
[1:22:53] polygons and the first thing we do is we generate something a variable called reducers and that reduces
[1:23:04] it combines the statistics that we want to calculate for the polygons so it combines mean and standard deviation
[1:23:13] and then what we do is we compute the mean and standard deviation for each of our polygon classes so
[1:23:23] for lost 2007 2017 i think we selected six polygons so basically it's computing the statistics for the pixels in all of
[1:23:33] those six polygons that have been labeled as lost 2007-2017 okay okay and we've done that for for each one so we've got six of
[1:23:45] these these statistics that we're computing and then we are printing the results to our console window here
[1:23:59] and so what we're saying in this print statement is print out the mean and standard deviation for loss
[1:24:07] 2007 2017 and so here's the statistics for that and we've done that for each one each of
[1:24:14] the six one six uh polygon classes okay so once you run it you go to the console
[1:24:26] console and you can see here then that the the for 2007 2017 the pixels in the polygons that were
[1:24:45] labeled as loss the mean is 15 and the standard deviation is 2.28 okay then for gain and for no change
[1:24:59] we're not going to use these but this is just a reference of what the values are for
[1:25:04] for for no change and then the same thing the statistics down here are for 1996. all right so what we do is
[1:25:18] we take those statistics to set the limits for the thresholds that we're going to apply and uh
[1:25:26] so we've got um two thresholds we've got a loss and then we've got a gain threshold for
[1:25:35] the 2007 2017 and 1996 and 2017. so how do we set these thresholds we basically took the mean
[1:25:46] so in this case for loss we took the mean mean looked at the mean it's 15 looked at the
[1:25:52] standard deviations 2.2 so we multiplied that standard deviation times 2 and then subtracted that from the mean
[1:26:02] so that that came up to and we rounded some numbers here but that came up to 10.4
[1:26:11] 10.4 okay and then we did the same thing for the the for gain and the same thing then for the 1996
[1:26:21] gain and loss there is something different that we did here for the the gain in 1996. the it was quite
[1:26:31] large the standard deviation and so instead of setting that standard deviation multiplying it times 2 and this was all done by trial and error
[1:26:44] we multiplied it by around one and a half to set the threshold for gain all right so then we've created these
[1:26:58] masks that we display and and so you you you save and you run and then we've got the
[1:27:18] results here what we're displaying let's just go back so we're displaying loss loss 2007 2017 labeled as vegetation loss vegetation
[1:27:33] gain gain and then loss 96 2017 and gain so these are our images so let's look at loss
[1:27:46] 2000 and and we're displaying it as the color red so these are just the pixels where there's loss what we
[1:27:58] can do is just overlay the image so let's overlay the in this case the pausar hv 2017 image
[1:28:10] to show the areas that are being identified as lost in fact let's better yet even let's just overlay
[1:28:18] the the the different that ratio image so these are the areas identified as as areas where there's been loss
[1:29:08] okay we are missing out on some of the the bright uh pixels when you overlay these on the difference
[1:29:16] image image and and uh what you can do is you can just just decrease that threshold so instead of
[1:29:27] using 10.4 maybe try 10.2 okay okay so so let's just run this again and try 10.0 10.0 and see how that looks
[1:30:35] okay so we're selecting more of those brighter pixels but there might also be more noise you see over here there's some
[1:30:48] some some noise and and so um setting these thresholds really does require some level of trial and error
[1:31:05] all right so let's take a look at the 1996 the the vegetation loss from 1996. so there's a lot that being that's been
[1:31:26] selected here okay so the next step here is to to let's clip those radar images and elevation to the mangrove vector file
[1:31:42] and the way you do that is you select what we're going to do in this case is
[1:31:49] we're going to select the original unclipped file and there's a reason for this that i want to show you in the next step so the
[1:31:59] original unclip file so this is the global mosaic of 2007 hh hb hb or or and and 2017 and 1996. i'm gonna clip it
[1:32:12] here here according to the areas where there's a mangrove coverage okay and then this file is being called
[1:32:20] mangroves 2007 hh so all of the files that are called mangroves mangroves are the clipped files and then we'll add
[1:32:29] those to the layers bar so if you hit run let's deselect this so you've got these mangrove files
[1:32:41] where we're just we're extracting the the back scatter only over the areas where the vector file is indicating that
[1:32:50] they're mangroves okay so since this is global it might take a little while but here you have the
[1:33:20] backscatter for the different years and polarizations of the areas where the mangrove vector file indicates that there's at
[1:33:33] least as of 2010 that there was uh there were mangroves there so we can just pan around here a little
[1:33:45] bit a huge mangrove region here obviously bangladesh and so the next thing i'm going to do is
[1:34:22] show you how to calculate calculate above ground biomass yeah so there might also be a little more noise when you low
[1:34:54] lower that threshold so so the next and final step i want to share with you is is calculating
[1:35:08] calculating above-ground biomass of mangrove ecosystems and there is a relationship between canopy height and mangrove biomass and there's been work done
[1:35:20] by a number of people uh mark zimmerd richard lucas sansaci on establishing these relationships they've done a lot of collection
[1:35:34] measurements in situ to establish these relationships between biomass and canopy height and develop allometric equations so in terms of using what we'll do is
[1:35:46] we'll use the srtm dm because that provides an assessment of canopy height and you're thinking how does it do it well srtm
[1:35:59] the the wavelength did not that dm is using a wavelength that did not completely penetrate through the
[1:36:08] vegetation so what we're seeing actually in the srtm dm is a is is is vegetation height in some places
[1:36:20] where the signal is not penetrating all the way through and so that is the case in uh in in mangrove ecosystems that signal
[1:36:29] is not reaching the ground it is penetrating somewhat through the canopy and it's been established that that the
[1:36:37] the uh the that that level of penetration in on a general basis right so the maximum height is generally 1.6
[1:36:48] times times the um the sr srtm elevation so what srtm really is measuring is the basal area weighted
[1:37:01] height that's also called lori's height so there's an assessment of the the actual elevation of mangroves with srtm and since we know
[1:37:10] that these areas are flat wherever you find mangroves because they are lying along the coast you don't have
[1:37:19] the problem of like finding them in in mountains or hills or additional topography then you can assume that srt
[1:37:29] srtm dm was what that's telling you in areas along the coast is actually the height height of the mangroves
[1:37:38] so so there's an equation here in this web page in this powerpoint that shows the relationship between
[1:37:46] above ground biomass and canopy height height and and so so we're using the basal area weighted height which is 1.08 times the
[1:37:59] srtm srtm elevation and we apply this formula so let's go back to the google earth engine engine and so here we have
[1:38:11] the backscatter backscatter dm so here we're looking at the clipped the the clipped back scatter for global
[1:38:26] mangrove ecosystems so what we did is we took the db image and we clipped it according to
[1:38:34] that mangroves vector file so now we've got the the backscatter only for mangrove ecosystems globally okay and you'll notice that in the code i
[1:38:46] also i have two parts one i left uh comment commented out but you can change this so
[1:38:53] i have either the clipped if you want to see just backscatter for the mangrove areas or it's unclipped
[1:39:02] so if you want to see the mosaic for the entire globe and then you can overlay the mangrove vector file
[1:39:10] so let me just show you right now the way it is you're we're clipping all of the
[1:39:15] the images to the mangrove file okay so if you want to see the the file for the entire globe
[1:39:48] okay so then it's it's mislabeled but if you just want to see you know the entire mosaic
[1:39:58] and then you want to overlay the mangrove vector file you do this and it might take a little bit to to
[1:40:13] load so so so there if you want to do that instead you can but in this case
[1:40:40] i've clipped it and and let's just go back to what i showed the clipped one okay so to calculate
[1:41:00] biomass biomass you use this equation the one you just saw in the powerpoint and this is how you write
[1:41:09] that equation so it's taken that elevation elevation and it's um it's multiplying it by 1.08 raising it
[1:41:19] to to power of 1.53 times 3.25 okay and so let's just run this and we can see some of the results okay
[1:41:30] so now what we're running is the clipped so first of all let's just load elevation elevation and there's some interesting
[1:41:43] mandrel of ecosystems around the world obviously that there's the sunderbans here here but if you go to gabon there's some very
[1:41:50] high high mangroves in gabon let me just zoom out so here near libraville you've got some very high mangrove ecosystems
[1:42:13] and and we load the elevation so you can see so it's right here so this is the elevation file for those
[1:42:33] areas areas and if you want to see the value of elevation just click on go to inspector and
[1:42:41] click on an area and you'll see that you'll see the elevation value so you'll see the value for that file
[1:43:01] let's see i must be clicking on the wrong area okay okay so here that pixel i clicked on it says
[1:43:30] it's three meters and then the biomass is is the it's 19 tons per hectare okay if we click on
[1:43:51] another area where the vegetation is higher higher then then you have an elevation of 49 meters biomass is much higher
[1:44:02] all right so you can generate this and this will give you just a general assessment of biomass
[1:44:08] biomass um um for mangrove ecosystems now there is a caveat with this because in some places the elevation might be
[1:44:17] zero it might be showing zero or it might be showing like minus one so there you have to take the absolute
[1:44:24] value because uh it you're not going to get a a number a biomass above ground biomass value if your elevation is
[1:44:32] negative so you have to convert it into absolute values okay but that gives you a a nice general assessment of of biomass
[1:44:47] all right so with that uh i this demo uh concludes and now we will will open it up to your
[1:44:56] questions and i see a lot of questions have been coming in already through the chat okay okay first question would the methodology be
[1:45:10] the same for wetlands um yes you can use the same methodology for wetlands now the difference with
[1:45:20] mangrove ecosystems is that it's not as straightforward because mangrove ecosystems remember they're a mix of like inundated vegetation it depends with the
[1:45:32] tide is high or low and non-inundated vegetation the structure is is very different than a regular forest so the
[1:45:39] thing about mangrove ecosystems is that you usually have like in force you usually have an increase in backscatter
[1:45:49] as the vegetation biomass increases okay until there's a point where that signal just saturates it doesn't increase anymore it
[1:45:58] just it doesn't um um it just reaches a certain level and and and so the higher the back scatter you
[1:46:07] kind of assume that the higher the vegetation biomass for micro ecosystems it's it's different the back scatter will increase up to a
[1:46:16] certain point as as the biomass of the mangroves increases up to a certain point and from that
[1:46:25] point on it actually decreases because the signal just gets attenuated it has to do with that that um
[1:46:33] the structure of these echo systems so that signal gets attenuated and you might have like high density high biomass mangrove ecosystems
[1:46:44] that have low back scatter but then again in mangrove ecosystems you might have have sparse or low density mangroves where
[1:46:55] the signal is penetrating and you're getting that double bonds component and you're getting just a very high back
[1:47:00] scatter so so uh so mangrove ecosystems tend to be a little little tricky with wetland ecosystems you can
[1:47:09] apply the same methodology in terms of doing a threshold or even running a classification as we did in
[1:47:17] the second session so it's much more straightforward actually in wetland ecosystems if you see a high bright backscatter you know
[1:47:27] that that that wetland is inundated this is these are inland wetlands is it suitable to use sentinel 1 to
[1:47:35] assess flooding areas and or tree heights within the the urban environment yeah yeah so the thing about using
[1:47:46] first of all sentinel 1 is not gonna penetrate as much through vegetation so it's a little more challenging to look
[1:47:56] at flooded areas where there's dense vegetation you're just not gonna pick it up up because that signal is not penetrating
[1:48:02] through the vegetation canopy in flooded areas though i think i'm sure so there are two types of flooding right
[1:48:11] so there's from the radar perspective there's the flooded vegetation and then there's just open water just potted water without any vegetation
[1:48:23] so you could pick up puddled water in urban areas a flooded vegetation you could pick it up too it's just a
[1:48:36] little more challenging because in urban areas that same backscatter backscatter mechanism for flooded vegetation is also the same one for
[1:48:46] urban urban areas right so you've got double bounds dominating in urban areas you've got double bounce dominating in flooded
[1:48:54] vegetation vegetation is it suitable to use sentiment to assess flooding areas and or tree height so tree height
[1:49:04] again probably not in urban areas just because it's so sparse you might be able to use it in areas
[1:49:12] where there's vegetation and then again if you're estimating biomass with sentinel one you really it will probably
[1:49:18] it just work in areas with low or low vegetation not in forests or it won't work as well and for us
[1:49:32] how paul insar and tomos are this is question number three work in tree height estimation okay okay that's a great question i think someone
[1:49:41] is getting ahead of themselves here because because uh if you wait until thursday you will learn about this there is the
[1:49:49] session on thursday it's focused on estimating tree height okay so don't miss that one on the slide 20 why are there two hh in
[1:50:06] the three band composite image is one of the hh l band and the other p band let me
[1:50:16] quickly take a look at slide 20. okay yeah so the reason there are um um 2hh is because we're looking at an image
[1:50:28] from one date right and so we're create we have two bands hh and hv this is alos
[1:50:35] pulsar and you i'm creating an rgb right so i need to put something in the third band
[1:50:42] and and you can in this case i've put the same polarization in two bands in a band and the first are the the red
[1:50:52] and the blue but you can put say in the blue you can also do a ratio of the bands hh over hv
[1:50:59] and put that in the in the blue band i just uh just use this combination hhh vh
[1:51:09] uh just so that you can just for visualization and so you can understand really the unique information
[1:51:16] content content in each of the polarizations but these are images from the same date okay next question
[1:51:26] how do you come up with the table in slide 23 so let's yeah so this is a table
[1:51:36] uh this is coming from a great resource online it's called the surveyor handbook and this handbook contains chapters
[1:51:46] on on on different applications of tsar and one chapter is focused on mangroves this was led by mark zumar and he has this
[1:51:57] table in here and he assembled this table table from from his his publications publications and and measurements in the field as well as
[1:52:07] that from others that have been doing using radar to measure mangroves for a very long time okay
[1:52:21] okay six if we look at the concept of antenna pattern then is it right that in a given
[1:52:26] swath of a homogeneous land cover the mid-range of the illuminated swath have lightly higher back scatter values than
[1:52:32] the near range and far range will have the least when compared to the midden area area yes actually but this should be
[1:52:41] corrected when you apply the the the processing the correction so you do have an antenna pattern and it looks like an
[1:52:47] umbrella and so what you do to remove that through an algorithm is you take a homogeneous area say a forest that goes
[1:52:55] yeah yeah uh homogeneous across the image horizontally and so you take the backscatter and you see how that varies
[1:53:04] as i said it's like a curve right and so then you apply the inverse of that curve to correct for that antenna
[1:53:11] pattern but that should be corrected and usually um the the antenna the variations in antenna pattern it depends
[1:53:19] on the data set um but usually they're small but if you want to really see if there's any
[1:53:26] anything related to antenna pattern you can just do what i just said just just look at the pixel variation across the image
[1:53:36] over a homogeneous area okay okay so so is it possible to access google earth engine google earth images as well as
[1:53:52] as well in google earth's engine for validation purposes while performing your classification if yes what code should we use
[1:54:03] i yeah i i'm not sure i have never tried that so this would be a matter of
[1:54:10] looking to see what's been done and if so how it's been done but i agree that that having this sort of capability would
[1:54:21] really facilitate things in terms of just loading and an image rather than having to put it in your
[1:54:27] code and and visualizing just just bringing it up like with a google earth interface interface question 8 jax says officials said in
[1:54:37] late 2019 that they will make the halos 2 data free is there an update on that great point
[1:54:46] not that i know of as of today not that i know of but yes they have said that they will
[1:54:53] make the halos 2 data free and that is going to be huge because it is l band data it is global data
[1:55:00] and and i i think it would be just an amazing data set to have in addition to sentinel one
[1:55:12] question nine can tsar predict mangrove as healthy or damaged um i'm so i'm trying to think what healthy
[1:55:27] means say say you have a change in colors in in the mangroves so i know sometimes there are mangrove die-offs
[1:55:33] and they just change they just turn brown you're not not going to detect that because remember radar is sensitive
[1:55:39] to structure and and and moisture right so with optical you can see those differences in color but you might be able to detect if
[1:55:52] there's been a degradation in in the mangrove because of say a huge amount of leaf loss right or
[1:56:04] in terms of damage that there's been a degradation of the mangrove through logging you might be able to see those
[1:56:11] changes with the radar to perform a land cover classification using sentinel 1 and landsat 8 for example is it 20 samples of
[1:56:25] approximately approximately thousand square meters of ground truth too little oh so so 20 samples so let me see
[1:56:56] no i think that that would be fine and what you can do really if you're not certain if you have enough
[1:57:04] ground truth is cut that out you know cut a third out and run your your uh ground truth and and see how
[1:57:13] your results end up and then add those other at at the part that you didn't cut out and see what the results are and if
[1:57:20] they change significantly then you you don't have enough points question 11. i'm finding that snap creates a bunch of large size temp files
[1:57:36] that quickly clog up the hard drive is there a way to automatically flush these temp files after project
[1:57:44] i don't know i mean i i feel your pain because i've run into this before and there might be a way in the
[1:57:53] preferences the best way to figure this out is there is a forum on uh sentinel toolbox where people post their
[1:57:59] questions and uh usually there's an answer there already for for what you have in mind so it it's good to uh to visit that forum
[1:58:08] and see if someone has has had this issue already and if the question has been answered question 12 is it possible to map the
[1:58:18] lost force between 2010 and 2020 2020 is it necessary to resample the sentinel one from 10 meters to 25 meters to be
[1:58:30] compatible with pulsar one yeah okay so so the thing about using two different bands is that they
[1:58:43] are are they have different wavelengths right so you are going to get slightly different information information if you're looking at deforestation
[1:58:52] you're probably you're going to see that you know if an area has been cleared if there was mangrove there and there is no
[1:58:59] mangrove mangrove now now um um but you don't i think the best approach here when you're using
[1:59:07] radar images with two different bands is um um it's just keep in mind that the the information content is is different
[1:59:19] it's slightly different because of that penetration capability question 13 are there any constraints with respect to storage size
[1:59:27] restrictions for uploading files i i i think there are yes i'll ha i'd have to go back and look and
[1:59:38] see what those constraints are so there are a lot of forms online for google earth engine i mean there are a
[1:59:46] lot of people that are using google earth engine for analysis and and uh there are there's people that post questions or the forums
[1:59:56] where people post questions and and they get answered so you might want to do these sort of searches and and see if
[2:00:04] your your your queries are resolved why not use question 14 why not not use halo's world 3d
[2:00:16] 3d 30 dm instead of the srtm since we're using the alos pulsar or is it not available
[2:00:24] in google earth engine um um so the halos world 3d the um you can try that too
[2:00:35] now now let me see one thing is we calculated biomass at the end right so that equation has been
[2:00:49] derived based on c band actually so so srtm used um c-band and so it's base it's derived based on
[2:01:00] the penetration depth of the srtm signal into the vegetation if you use a dm that was derived
[2:01:10] using a wavelength that's longer so i i'd have to look at the uh okay so it looks like
[2:01:26] okay so the als dsm global tier 3 30 30 meter dm is derived using a stereo pair of
[2:01:36] optical images okay yeah so you can certainly use this you just need to figure out what is the
[2:01:46] that allometric equation needs to be modified modified because that signal if it's using optical images that signal is not
[2:01:53] penetrating through the vegetation up to a certain point it's just seeing the tops tops and so that equation needs to be
[2:02:00] modified modified accordingly right next question can we use this tool pulsar mosaic to analyze other vegetation types not only
[2:02:14] mangrove or other forest plants uh yeah yeah absolutely you can use it it is a great resource the only thing
[2:02:27] about the pulsar mosaic is that if you're looking at things that are dynamic dynamic you're looking at like at wetland
[2:02:33] inundation dynamics or or other things that might be dynamic if you want to look at like the scar of a
[2:02:40] fire a recent fire then you're going to lose that sort of information in a global mosaic and it'll be important to
[2:02:49] read in that date file that's associated with the mosaic just to know the date that your that
[2:02:59] that the the date for each pixel question 16 why do we use gamma naught here but we use sentinel sigma naught
[2:03:12] previously previously is one better more appropriate than the other how do you make this decision finally could you explain a bit more
[2:03:20] about about beta naught gamma naught and sigma naught um um so so we're not using gamma naught here
[2:03:39] let me double double check so these images are are i'll have to go back and double check i
[2:03:56] don't think this is gamma naught these are are sigma naught and they are expressed as just digital numbers which we are
[2:04:03] converting into into into db but i need to double check that all right if you send me an email i i'd be happy
[2:04:22] to uh to clarify this why question 17 why did you first convert the images to db and only after
[2:04:30] that clipped them would it be faster to clip them first and convert later yeah absolutely the reason i did that was
[2:04:37] because at the end i wanted to show you how you can look at mangroves globally and how you can
[2:04:46] use that vector file to clip the entire global global mosaic and and and and just look at backscatter
[2:04:55] over the mangrove areas but yeah if you don't want to look at any other place just clip it from the
[2:05:02] beginning beginning question 18 how do i know which range is best for starch image why min 5 max 40
[2:05:18] okay i'm not sure what is meant here by starch image but i'm going back to the code and looking at
[2:05:25] 5 and 40. so that's the srtm that's the srtm elevation and the reason i just stretched it this is just for
[2:05:36] visualization this has nothing to do with analysis i just stretched it so i could see well that variation in the coast which
[2:05:43] is it's very um subtle right so if you're looking at it it's just a couple of meters along the coast so i just
[2:05:50] stretched it and to that range question 19 with regard to exporting the final map the map has to have the basic
[2:06:04] element of a map such as north arrow grid scale bar and legend so how do we export our final map with the mentioned
[2:06:12] basic elements so there is a code to do this and and if you send me an email i'd be happy to
[2:06:24] share the code with you i don't have it just accessible with me at the moment i do need to kind of put
[2:06:31] it together but but there are ways to export the image so in the previous in the last
[2:06:41] webinar there is a command there at the end that exports the image you can export it as a geotiff but
[2:06:48] i know there are ways to add additional things like a scale and all of that color bar
[2:06:57] okay question 20 is it possible to repeat all these steps using only the snap toolbox that's a great question i
[2:07:04] think it would because the snap toolbox can also deal with vector files and the only thing about using the snap
[2:07:14] toolbox is that you have to download these images to your desktop desktop you need to download the mosaics you
[2:07:22] need to cut them so it's just a little more cumbersome but i believe you can do all of this you
[2:07:30] can do band math on on the snap tool box do we have question 21 do we have to be
[2:07:41] concerned about the coordinate system or the projection or shape before we load it to glue earth and is there any
[2:07:46] adjustment we're supposed to do for the shape file for a particular region um not that i'm aware of
[2:07:55] i believe google earth engine takes this into account to match the position of the different pixels even
[2:08:02] though they might be in different different projections so as far as i know there isn't any adjustments now you saw that the jrs
[2:08:16] image had a slight offset from the sentinel the from the pulsar image and that has to do just with the
[2:08:24] the uh the geolocation of of the jrs image and uh uh you could correct for that i i just i
[2:08:34] don't know how it would be done on google earth engine but there are ways to correct for it say with a software
[2:08:40] like envy by using control points and then stretching the image question 22 i think the back scattering of mangroves
[2:08:51] is similar to other vegetations with similar canopy if so how do we map a particular vegetation separately are
[2:08:57] there any criteria used to distinguish the different vegetation types okay so it's not clear to me whether this person is referring to
[2:09:09] different vegeta mangrove vegetations or different types of just inland vegetation so you could um um you can use radar to separate different
[2:09:24] types of vegetation polarimetry really helps that's when the more polarizations you have the the better you can do this okay
[2:09:36] because because you're you're basically classifying things according to structure so assuming that different vegetation types have different structure
[2:09:46] then then you can you can separate them question 23 you mentioned that the core registration of the images is not
[2:09:55] perfect okay we there were there ways to correct this or is this officer so small and systematic that it is not necessary to
[2:10:03] correct correct yeah well it it is uh it is very small and when you run when you apply
[2:10:11] threshold or you run a classification uh uh you know even if you run a classification with the jrs and halos pause our images
[2:10:24] together you're going to see this offset or if you have classification results and you're comparing things you're going
[2:10:29] to see this all set there might be ways to deal with it so maybe like in in coastal areas
[2:10:41] you apply a mask to to just mask out those coastal areas so so it's not a super big deal like you can
[2:10:59] still see the change for example but uh there will be issues when when you're doing some analysis with them
[2:11:14] that you need to deal with you can correct it if i'm not sure how you would correct it
[2:11:19] say in the sentinel toolbox but i do know with envy what you do to correct these type of things is you choose these
[2:11:26] control points so you you select the same points in in each in two in two images you select
[2:11:33] the same point and you select points around the image and then basically you do you stretch one image to the other so
[2:11:40] that it it fits um over one over the other and yeah it can be a little cumbersome
[2:11:48] though it can take some time to do this question 24 how can you obtain metrics from the ratio step for example how can
[2:11:56] you quantitatively determine the percentage gain lost in biomass from 2007 to 2017. okay this is a good point
[2:12:04] i didn't show this here but in the previous previous um in the in the first webinar that we had for this series i
[2:12:18] showed how to determine statistics so basically what you're do what you do is you create a polygon over the area
[2:12:26] where you want to determine statistics or say just apply that mangrove the the mangrove vector file however you want to do it and then
[2:12:39] you can calculate the statistics for the area within that vector file or within that polygon that you drew remember to check
[2:12:48] when you select an area it has to be a polygon not the line otherwise if you select a line
[2:12:54] uh you calculate the statistics of pixels that touch the line you need to select a polygon to calculate the
[2:13:00] statistics of the pixels falling inside that polynomial okay okay question 25 can i apply the same techniques to
[2:13:12] riparian vegetation mapping uh yes you would be able to apply a similar technique to riparian vegetation mapping yes
[2:13:25] now now that's a little different because if you're here we're looking at change right so so we're looking at that
[2:13:32] large change in the signal and and that's why we're setting a threshold now if you want to do mapping of vegetation
[2:13:41] you want to run a classifier and that would be more relevant to the second webinar that we did where we used
[2:13:49] optical and radar so you can just try running a classification and just using the radar data but make sure that you have good ground
[2:13:57] truth to classify your classifier to select your training areas question 26 which sensor would you recommend for mapping
[2:14:09] coral reefs deep water coral excluded yeah yeah that is a little bit outside of the scope of my expertise
[2:14:22] i don't look at coral reefs obviously you you want some sort of optical sensor and i know that there have been studies
[2:14:32] uh doing this type of thing so so you need to [Music] [Music] it's it's i think it this requires a little bit of
[2:14:42] research to see what's been done out there but um jpl the the nasa center where i worked they had a very large project in
[2:14:54] using an airborne sensor to map map coral reefs benthic cover question 27 can i use earth engine to
[2:15:04] download the data in net cdf format i believe you do have the option of downloading the data as netcdf but
[2:15:15] yeah it's something that i i'd have to double check wouldn't it be better to use the pulse
[2:15:26] rdm that has a higher resolution than the srtm dm yeah possibly i the the pulsar dm i don't know what the characteristics
[2:15:38] are of that dm and whether it's global um um and then when you're applying that biomass equation
[2:15:48] um it should have the same characteristics as srtm otherwise that equation needs to be modified how do we define the formula to find the
[2:16:02] threshold loss and gain so what we're doing here there is a little bit of uh trial and error in
[2:16:09] sending and setting these thresholds right so you kind of start out with just something general that you applied in
[2:16:16] this case we applied we said times two okay so take the standard deviation times two and then
[2:16:23] subtract that from the mean and you take a look at your results and you might have to change that
[2:16:30] slightly slightly the the threshold slightly depending on your results question 30 it seems like it could be
[2:16:43] problematic to manually grab the values and calculate your thresholds can we access the mean standard deviation objects within the stats filters to
[2:16:51] calculate thresholds using a function yeah absolutely this is a great point i just wanted to go through the steps
[2:17:00] and and have people um um just understand what the values are and how to calculate these but absolutely
[2:17:09] you can just automate this and take that mean and standard deviation that were calculated and put them into a function
[2:17:15] where where you're setting these thresholds directly question 31 do you expect the area of loss of mangroves identified or due to
[2:17:25] human activity or are these areas lower elevations and have been affected by a modest right rise in sea level
[2:17:33] yeah that's a great point you know in some areas uh yeah i think probably 99 of these areas have been
[2:17:44] lost due to human activity i mean they're they're inland you would it not their inland but they're kind of
[2:17:52] um um a little bit in you go in a little bit right so if you want to take a look at
[2:17:59] um um loss due to sea level rise um you would have to let me see what's the best way to do
[2:18:12] that that is first start with an area that you know there's been loss to sea level rise
[2:18:18] and see how that looks one of the things i did here is i brought up google earth
[2:18:23] and i looked at this area and it was obvious that these are all areas that have been converted to
[2:18:32] farmlands or aquaculture i mean the the human human imprint is clear they're very geometrical structures so you want to take a look at uh what's
[2:18:43] the impact of sea level rise uh maybe off the gulf coast you'll see some some not only effects of sea level rise but
[2:18:53] also also the the subsidence of the land 32 32 can the same method be applied in grasslands and shoplans if yes what
[2:19:09] do we need to change apart from the study area in terms of of theory okay so if you're looking at grasslands and
[2:19:21] shrublands first of all you'll want to use sentinel 1 because that is sea bend and that will
[2:19:27] be more sensitive to grasses and and shrubs okay okay and let's see you want to understand what are these signal
[2:19:42] characteristics for each so if you want to classify grasses and shrubs you don't use a threshold you want to
[2:19:50] use a classifier you want to train classes classes okay but i think the main thing here is
[2:19:55] you want to use sentinel one question 33 rather than apply thresholds might an unsupervised classification be better
[2:20:10] better with say 10 classes or so okay so uh i'm not sure an unsupervised classification will be
[2:20:31] better you might want to try it i mean all of these things part of this is exploring what works better
[2:20:40] right so so the main point here is we're looking at change right so you want to be able to
[2:20:46] whatever method you're using is that you're capturing that that dramatic change between um two different images from different
[2:20:56] dates can these biomass calculation methods be for mangroves be used for terrestrial forest ecosystems there is something similar for
[2:21:10] terrestrial forest ecosystems and in fact this one it was based on just the canopy height there are equations there's been a lot
[2:21:21] of work by saatchi for example on forest forest biomass estimation if you go to that severe handbook and you might just want
[2:21:30] to google it do a google search for a severe soar handbook handbook uh there is a whole chapter on forest
[2:21:37] biomass estimation and there is a tutorial associated with that so you can follow that or replicate that tutorial
[2:21:46] to understand how forest biomass is is calculated but there is a relationship between as i mentioned radar backscatter and biomass
[2:21:57] and so that's what those methods are primarily based on and and you need a lot of ground data and
[2:22:08] develop some allometric equations in order to to do those estimates how accurate are these data to use in
[2:22:24] commercial projects yeah that's a good question i mean i think the accuracy is going to depend on
[2:22:32] on the area obviously we're using first of all a mangrove and i'm assuming you're talking about the
[2:22:40] the above ground biomass so so we're using a mangrove vector file in this case from 2010 you want to make sure that
[2:22:53] um um whatever you're assessing is is accurate right so you want to update update whatever that vector file is indicating
[2:23:04] in terms of the presence of mangroves with what's current there might have been mangroves that were cut
[2:23:11] cut since 2010 and then make sure that the biomass is relates to whether there was a mangrove
[2:23:24] there or not right so srtm remember that was back from 2000 uh it's a 2000 as well
[2:23:37] so how accurate is it to actual biomass um um that is yeah i'm i'm [Music] [Music] there are papers that have been
[2:23:50] published on the accuracy of these products and i think the best thing is to refer to them smart at all have
[2:23:57] published a lot on this question 36 hi can we use sentinel c band for above ground biomass estimation in a dense
[2:24:06] canopy forest uh now that that wouldn't be a good band because you you don't have much penetration in a dense canopy forest you
[2:24:15] want to use l band question 37 what is the difference when using ascending or descending orbits in star
[2:24:23] time series analysis so the your geometry is going to look a little different different um um if it's an ascending orbit or descending
[2:24:32] so when you're doing time series analysis you want to as with any like classification you want to you just use
[2:24:39] or ascending or descending in your analysis analysis and you can do two separate analysis and just compare the results but you want to
[2:24:47] just just keep to one or the other is there an automated way to correct the offset of the images from different
[2:24:54] years i don't know of an automated way there might be but i don't know question turning out how can you decide
[2:25:10] scale in the calculation of the statistics of a polygon so the scale would represent the resolution of the image so basically
[2:25:20] you're taking all of the pixels within all of the polygons labeled as loss for example example at the original
[2:25:30] resolution of the image question 40 how do we know we need to multiply the standard deviation by 2 or by 1.5 to
[2:25:41] define the threshold is there a rule no there is not a rule as mentioned you this is
[2:25:47] uh uh you have to test this and see what works best in terms of what you want to
[2:25:53] identify is it possible to use srtn to estimate vegetation height in places with higher elevation elevation it seems that using srtm for estimating
[2:26:08] mangrove works because we know that the ground ground at zero meter is okay yes um yeah actually i think there have been
[2:26:17] some efforts along these lines and using people have been using for example um digital terrain models so
[2:26:28] uh if you have a digital terrain model where you know like what is the elevation at the at the
[2:26:34] surface at the terrain level and then you have something like srtm which is actually giving you the height
[2:26:39] of the of the vegetation then you you sub you use you subtract them is it possible to use halo's dm to
[2:26:57] calculate mangrove biomass again as mentioned you need to account for that in that equation the fact that the halos
[2:27:07] dm used optical data and so that that um you don't have a signal penetration through the canopy and so
[2:27:17] you need to account for that basically the the halos dm is is really is is just an assessment of the
[2:27:26] top and you need to modify the equation how do we arrive on the calibration factor that's a really good point
[2:27:36] so that is provided by jaxa jaxa they gave us the calibration factor and you kind of have to look around and in
[2:27:45] the document documentation for these mosaics mosaics to find what that calibration factor is so so um that's that's how i came up with that
[2:27:56] i didn't invent it it is a standard calibration factor provided by jaxa what is the formula you use for biomass
[2:28:16] calculation is it a global allometric equation for mangroves could you elaborate elaborate so so i can if you send me an email i can point you
[2:28:26] to some publications so this is just a general yeah these are allometric equations for mangroves mangroves and
[2:28:38] i can yes i can provide you more details through publications do you have any recommendation for the
[2:28:51] choice of the threshold in the case of amazonian forest again if you want to do a classification of like forest type for
[2:28:58] example example um um you you you want to do a classification not a threshold you want to use the threshold
[2:29:09] method when you're looking at change so for example if you're looking at or if you're looking at areas that are vastly
[2:29:23] distinctive distinctive okay then you can apply a threshold so if you're looking at say areas that have been
[2:29:31] deforested there's been some sort of vegetation loss between different years you can use a threshold if you have one image and you want to
[2:29:40] separate water from everything else you could probably use a threshold because water is such is so much lower usually in radar images
[2:29:51] than everything else sometimes not if there's one but usually or if you have an image where you have
[2:29:57] flooded force and you want to separate that from everything else usually flooded for us inundated vegetation has such a higher
[2:30:07] backscatter than everything else that it would work just applying a threshold okay question 46 can you explain why you
[2:30:18] have to use absolute values when the elevation is zero or negative because uh yeah if you have a negative value in
[2:30:25] that equation that i provide so you're raising something to the power of uh you'll get a complex number
[2:30:38] is it appropriate to use sentinel 1 or sentinel 2 in urban area development also can this tool be used to analyze
[2:30:49] the quality of water in a wetland or stream yeah yeah so this is sort of a little this
[2:30:56] question is a little different um yeah probably sentinel 2 would be your best bet for looking at urban area
[2:31:07] development development and if you're looking at water quality you definitely want to use something optically based sentinel one any radar
[2:31:15] is not going to give you an assessment of water quality all right so unfortunately we are out of time
[2:31:27] but we will get to the rest of your questions is there any any more questions we will
[2:31:36] get to these and we will post this google doc online remember there is one more session with this webinar series and that is
[2:31:45] forest forest height estimation we will have a guest speaker for that professor paul cicada from university of massachusetts amherst
[2:31:55] that would be this thursday same time stay tuned the homework will be announced at that during that session as well as the due
[2:32:03] date date so see you all on thursday for the last part of this webinar series thank you
[2:32:09] for tuning in thank you for all the questions and and see you on thursday bye bye
