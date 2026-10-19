# Introduction to a Machine Learning Model to Estimate Water Quality Parameters, Part 2/2

`https://www.youtube.com/watch?v=LxaoPnsMP0w` · id 15 · 1:22:14 · module 11 — Module 08 — Monitoring Water Quality in Lakes and Coastal Regions Using STREAM

[00:01] Hello everyone, welcome back to this ARS training on monitoring water quality in lakes and coastal regions using stream.
[00:10] Today it's part two on introduction to a machine learning model to estimate water quality parameters based on satellite
[00:18] observations. We have a guest speaker today Dr. Ryan O'Shea and he will be talking about the machine learning
[00:25] model. model. Last week in part one we saw background overview and demonstration of stream web tool and API where stream is satellite
[00:35] based tool for rapid evaluation of aquatic environment. We had a guest speaker Mr. Williamright. He showed us
[00:43] that stream uses lens set 8 and 9 and sentinel 2 a b and c to obtain water
[00:49] quality parameters which include chlorophyil concentration, total suspended solids and siki disc depth. Uh area covered are coastal uh estuaries
[01:00] and inland lakes in the US. The data are available at 20 to 30 meter special resolution and we saw that stream API
[01:09] allows search and download of multiple images for an area of interest. We saw example of selection of water
[01:19] quality parameters using stream um map and make time series of water quality parameters using QGIS. uh example shown here. We saw pyramid
[01:30] lake uh and this map shows chlorophyll a concentration high resolution um data that shows pattern and how chlorophyll a
[01:40] is distributed within the lake in different parts that can be seen here. Uh we downloaded multiple images of
[01:46] chlorophyll a concentration as well as uh tss in chesapeake bay and made time series using qgis today. Now we will focus on introduction
[01:58] to a machine learning model to estimate water quality parameters based on satellite observations. This is the model that's used to uh derive water
[02:08] quality parameters in stream. Uh just a note here uh there is a homework uh posted today on our website
[02:15] and it will be due on 10th of March and a certificate of completion will be awarded to those who attend all live
[02:22] sessions and complete the homework assignment before the uh given due date. So we'll start with today's session.
[02:36] Our objectives today are that by the end of part two, you'll be able to become familiar with a mixture density network
[02:44] or MDNbased model used for deriving water quality parameters from satellite observations in stream. Recognize how to select and process
[02:54] satellite images for deriving water quality parameters in a water body of interest. and recognize how to access
[03:01] the MDN model code for deriving water quality parameters in the water body of interest. Here's the outline for today.
[03:09] We will start with a very brief review of pre-processing satellite images for inputs to the MDNbased model. Then we
[03:17] will have an overview of the MDNbased model which is used in stream and we'll have a demonstration of access and
[03:24] application of the MDN model code for deriving water quality parameters from satellite data. Our guest speaker Dr.
[03:32] O'Shea will use examples to demonstrate how to use MDN code. He will use Sentinel 3 OLI images and pace OCI
[03:41] images to uh show water quality parameters from this model in San Francisco Bay and Lake Erie. We'll have a brief review of
[03:51] pre-processing of satellite images. Now satellite sensors measure top of atmosphere or TOA radiances and these radiances result from a
[04:03] combination of surface and atmospheric conditions including the effects of clouds and aerosol particles as seen in this figure. TOA radiances um as a
[04:14] function of wavelength are shown here and contribution is pretty large from atmosphere and also from surface uh
[04:21] including this green curve that is contribution from water surface. So this water living reflectance that depends on back scattering and
[04:31] absorption of radiation due to materials in water that is optically active as shown here that the water living
[04:38] reflectances they depend on uh what is going on in the water and these are the reflectances uh they are used to
[04:47] estimate water quality parameters to get water living remote sensing reflectances or RS at different wavelengths. We have to start with
[04:57] satellite observations of TOA radiances and apply atmospheric correction schemes to get RSS. Now here there are number of
[05:06] schemes or atmospheric correction algorithms uh listed uh NASA has a couple NASA ocean biology processing group algorithm and NASA aquaverse
[05:16] algorithm which is used for stream. There is echolyte and polymer. These are some of the schemes uh generally used by
[05:23] the community uh to do atmospheric correction and get uh remote sensing reflectances. So we would start with
[05:30] satellite images uh which is level one top of atmosphere reflectance and then uh find level two remote sensing
[05:38] reflectances um that then they are used to estimate water quality parameters. So to summarize to get remote sensing
[05:50] reflectances we'll select a satellite and sensor and start with level one satellite data then use appropriate atmospheric correction algorithm to
[06:01] derive uh level two water living reflectances and then those can be input to the MDN model that we will see in a
[06:10] few minutes. Uh here we're talking about uh NASA sea earth atmosphere data analysis system or CADS has ocean color
[06:19] science software or OCSSW that uh can help that has algorithm for atmospheric correction and can be used
[06:26] to get level two remote sensing reflectances. Um there are couple of RSA trainings uh they demonstrate how to use
[06:35] SAS OCSSW to do atmospheric correction and get remote sensing reflectances. So you can refer to these for more
[06:43] information and CADS is a um is an open-source software from NASA and can be downloaded and uh you can find
[06:51] information from uh NASA earth data and search with seeds and you can get more information or you can refer to these
[07:00] trainings for more details. We saw this table last week. U all the satellites and sensors which are used
[07:09] for water quality monitoring. Um and here are the sources where you can start with level one data. You can obtain
[07:18] level one satellite images from these satellites. And so corresponding uh links are provided here. These are the
[07:25] data portals where you can download uh images uh from these satellites and sensors. sensors. With that we'll start with uh today's
[07:36] session on overview and demonstration of MDN model for stream. Just a note here uh please put your
[07:44] questions in the questions box and we will address them at the end of the webinar and feel free to enter your
[07:50] questions as we go. We will try to get to all the questions during the Q&A session after the webinar. The remainder
[07:57] of the questions will be answered in the Q&A document which will be posted on the training website about a week after the
[08:06] training. training. With that, I'll introduce our speaker for today, Dr. Ryan O'Shea. Dr. Ryan O'Shea is a senior research
[08:16] scientist at NASA's Goddard Space Flight Center. Center. Ryan received his PhD in mechanical and oceanographic engineering from the
[08:25] Massachusetts Institute of Technology and Woodsole Oceanographic Institution joint program in 2021 while he was under a national defense science and
[08:35] engineering graduate fellowship. Dr. Rocha's thesis titled computational approaches for submeter ocean color remote sensing focused on the
[08:45] theoretical limitations practical considerations and potential future avenues for deploying lightweight hyperspectral cameras for ocean color remote sensing from lowaltitude
[08:57] platforms. Currently Ryan is working on refining freshwater and ocean water uh products at NASA garden. So we invite
[09:07] Dr. OSHA to uh present about uh the MDN model used in stream. Ryan. Hi everyone. My name is Ryan O'Shea. I'm
[09:19] a member of the freshwater sensing program at science systems and applications inc. This program consists of myself, Arun Sarinathan, Akasha
[09:27] Shapur, Will Wayright, and Brandon Smith. It was formerly headed by Nema Palifon who's moved on to NASA HQ. Today
[09:35] I'll be presenting on monitoring water quality in lakes and coastal regions using stream. Part two focuses on
[09:42] introduction to a machine learning model to estimate water quality parameters based on satellite observations. On this slide I'm going to briefly take
[09:51] you through freshwater and lateral imaging from space um showing the mixture density network supported sensors. sensors. So sensors in red are just supported by
[10:01] the MDN. In blue they're supported by stream and in green they're coming soon to stream. In 2000 or actually the end of 1999
[10:11] modus was launched. Modus is a multisspectral instrument which can capture at kilometer scale resolution with a near uh one to two day temporal
[10:22] resolution. resolution. This satellite sensor has lasted for the last 26 years. uh so it can produce time
[10:29] series and climatology of given regions. This is supported by the MDN. Ver was also launched in I believe 2012.
[10:39] It achieves about 750 meter spatial resolution and again one to two day spatial revisit. It has very similar
[10:46] capabilities as modus and we have models that support both of these and show generally pretty harmonized retrievalss
[10:54] from both. We also support LANCAT 8 and 9. These are the models that you saw as part of
[11:01] part one that are included on stream. These sensors uh have fewer spectral bands uh but much finer
[11:10] spatial resolution up to about 20 m spatial scale so that we can start to look at fine scale inland water bodies
[11:18] using these sensors. Also supported on stream are Sentinel 2A and 2B with similar spectral resolution as Lancet and similar spatial
[11:28] resolution. However, the cost for both of these sensors is temporal resolution with Lancet um having a temporal
[11:35] resolution of about 8 days whereas Sentinel has a resolution of about 5 days. days. However, when you start to combine them
[11:44] together, you can improve the temporal resolution. resolution. So we already have LANCAT 8 and Sentinel 2 supported on stream but coming soon to
[11:52] stream we'll also be adding in Sentinel 3A and Sentinel 3B for which we already have mixture density network models
[11:58] available. available. These have temporal resolutions of about 1 to two days. Higher spectral resolutions which allow for improved
[12:06] product accuracy in these optically complex inland and coastal waters that we're sensing in and spatial resolutions of about 300 m.
[12:17] So by combining the LANCAD 8, Sentinel 2, and Sentinel 3 imagery, we can get higher temporal spatial and spectral
[12:23] combinations. combinations. As additional sensors are launched, we'll also be adding these into uh stream. stream. We also have mixture density network
[12:35] models available for commercial satellites like planets super dove which achieves uh meter scale spatial resolution. We also support hyperspectral
[12:47] instruments. So we develop models for Hiko, the hyperspectral imager for the coastal ocean as well as Prisma and
[12:54] EMIT. We're currently funded by EIT as well as the PACE science and applications team to further improve our
[13:00] products for hyperspectral imagery. The PACE model that we have available um supports a wide range of products
[13:10] leveraging the full hyperspectral data. So not only does it support the standard chlorophyll, TSS and CDOM products, but
[13:17] also inherent optical properties like absorption due to phytolanton and um PACE allows for uh 1 to two day
[13:25] temporal resolution and about a kilometer spatial resolution. We're also funded as part of the LANCAT science team to make models in advance
[13:34] of LANCAT next which should be launched around 2031. So this large set of sensors that we have developed models for are
[13:45] radiometrically capable for sensing in aquatic regions. Um the combined observations can get us towards daily observations if we're able to leverage
[13:55] estimates from all these sensors combined. But they have different spatial and spectral capabilities which allow us to sense in a wide range of
[14:03] spatial resolution um regions. So we can sense in inland as well as coastal waters. waters. The trick however is combining these
[14:12] estimates from these different sensors to get a better understanding of global inland and coastal waters. To do that we
[14:19] need a robust workflow for producing seamless products over fresh and coastal estuaries. To do that we plan to use a machine
[14:28] learning model. And to train our machine learning model we need a representative data set. So we've assembled a large
[14:36] data set of a variety of different insitue products including chlorophyll a total suspended sediment as well as
[14:43] color dissolved organic matter. This data set builds off of Morren Leman's Gloria database which is cited in the
[14:51] bottom right. Um it has uh at this point we have about greater than 10,000 globally distributed insitue
[14:59] measurements. These include those biogeeochemical parameters I was talking about before as well as inherent optical properties from inland and coastal
[15:08] waters. As you can see from the map, about 20% um about 80% of this data set comes from
[15:15] North America as well as Europe and 20% from the rest of the world. shown here we have histograms for
[15:26] chlorophyle, PC, TSS and CDOM from that globally distributed insitu data set and this um these histograms show the wide
[15:36] range of different optical conditions we have represented in the data. So if we just look at the chlorophyll histogram
[15:43] in the top left we have about 6,000 measurements and they span about four orders of magnitude. So it represents uh anywhere from
[15:53] igotrophic to utrophic waters quite well. well. We also have about a thousand measurements of PC in the top right. PC
[16:02] stands for ficoyanin which is another pigment but this pigment specific to cyanobacteria biomass potentially toxic algae. We only have about a thousand
[16:11] measurements of those which can be a little bit limiting during training. We also have 5,000 measurements of total
[16:17] suspended solids shown in the bottom left as well as colored dissolved organic matter shown in the bottom
[16:22] right. Proxies for nutrient and um carbon availability. These again represent a wide range of different values showing a wide range of
[16:32] different combinations of these different biogeeochemical parameters represented in our data set. Okay, so we have this large globally
[16:41] distributed data set. We know we want to use a machine learning model to be able to represent and retrieve estimates in
[16:47] globally distributed inland and coastal waters. Um, so we have to choose a machine learning algorithm. Well, the
[16:53] algorithm that our group chose was termed mixture density networks. And I'll quickly go over that algorithm here.
[17:02] here. First as input uh we take the remote sensing reflectance or the ocean color signal basically just the
[17:10] color of the water at the wavelengths for any specific sensor. Here it's shown for either Haiko or Prisma. So it's
[17:17] hyperspectral. hyperspectral. This ocean color signal then goes through band ratio and um multisspectral algorithms that typically work well for
[17:27] say chlorophyll estimation and these are then input into the standard weights of a neural network after going through a
[17:34] normalization phase where they're scaled between -1 and one. What separates mixture density networks from typical machine learning algorithms
[17:43] is the output layer. This output layer is a set of Gaussians which represent the probability distribution function um
[17:53] for any given output product. For example, chlorophyll a. These Gaussians have a mean, standard deviation and probability associated
[18:04] with them. And when we use a combination function, we can select the most likely value of chlorophyll for the input ocean
[18:11] color signal instead of the average value which is what typical machine learning algorithms do. We can also
[18:19] simultaneously estimate all of the different products that we're interested in including chlorophyll a ficans and sedom as well as the absorbing IOPS like
[18:29] absorption due to phytolanton sedom and non-algo particles. uh and again this was for those hyperspectral instruments. So product availability depends on the
[18:39] spectral availability. So I'm visually just going to try to show you why mixture density networks are well suited to solve the non-unique
[18:51] inverse problem. On the previous page I showed that we have this sort of typical neural network structure. The mixture
[18:58] density networks differ because they output a set of Gaussians. Um and these Gaussians can be used to predict uh
[19:05] let's say the chloroa concentration when there could be a wide range of different chloroa concentrations for any input
[19:10] watercolor spectrum. So let's say we take a watercolor spectrum like um the one shown in this graphic and we run it through our
[19:19] mixture density network model. What does the output of Gaussians actually look like? So we take this water quality
[19:25] spectrum in we have let's say a measured insitu coral concentration shown as this black dashed line. We have a prediction
[19:34] from the ocean color 3 B band or algorithm shown as this dashed blue line. line. And we have a prediction from a standard
[19:43] machine learning algorithm shown as the dash red line. Again, these standard machine learning algorithms typically learn to estimate the average of all
[19:51] possible values of chlorophyll concentration instead of the most likely value. We can then overlay the Gaussians um as shown here that are output from
[20:03] the mixture density network. Each of these Gaussians again has a mean, standard deviation and probability associated with it. So we can select the
[20:12] Gaussian with the highest probability, take its median value and estimate that. And for this particular highly utrophic
[20:20] region that ends up having a better estimate um that matches more closely with the insitu chlorophyll a
[20:28] concentration represented by that dash black line than either the standard machine learning algorithm or the ocean color 3 algorithm.
[20:37] So in summary, mixture density networks allow us to better solve this non-unique inverse problem where there could be
[20:43] many different combinations of chloroa, PC, TSS and sedum uh concentrations for the same ocean color signal. Okay, so we have this really large data
[20:54] set and we've picked out a machine learning algorithm that we think is going to work really well for this
[20:59] region. We can then do a 50/50 split from our Insichu data. use half of the data for training and half of the data
[21:07] for validation and then compare the results between our mixture density network and operational algorithms and that's what's shown here. So on the y-
[21:16] axis we have the estimated chlorophyll a concentration from our algorithm applied to insitue remote sensing reflectance data that's been resampled with the
[21:26] sensor spectral response function in this case uh MSI and we compare that to estimates from uh standard operational
[21:34] algorithms like the Gillerson twoband algorithm or the blend algorithm. As you can see from this graphic, mixture density networks are able to
[21:43] achieve lower error, lower bias, higher slope, and lower um root mean square log difference over a wide range of
[21:52] different chlorophyll values. But this is in the idealized scenario um where we're estimating based on insitue data
[21:59] where the MDN has seen half that data. the actual accuracy when we apply it to satellite instruments um is reduced. So
[22:09] shown here we have MSI matchups. So they're same day matchups where MSI the Sentinel 2 um satellite or the imager on
[22:18] the Sentinel 2 satellite overpassed while the insitu chlorate concentration was being measured. And on the Y-axis you can see the MDN retrieve chlorate
[22:29] from MSI. We have very similar error metrics where MDSA is the error that we saw previously. Previously it was about 28%
[22:38] when we were looking on insitue data but once we start looking on satellite retrieve data and we had to remove that
[22:45] um atmospheric signal the accuracy drops down to about 94%. So that means that the residuals from atmospheric correction substantially
[22:53] reduce the accuracy. However, what we can see from this plot is that the MDM matchups still well represent a really
[22:59] wide dynamic range from 0.1 to about 100 millgrams per meter cubed of chlorophyll. So this means it represents
[23:08] anywhere from you know very igotrophic waters to very utrophic waters. So do a good job capturing the full bloom life
[23:15] cycle. cycle. Shown on this page we have MDN derived products for Lake Erie. Um, and we can
[23:23] see that they're spatially consistent. So, the products you see in the bottom left are actually from Ulie instead of
[23:29] MSI. So, Ulie has more bands. We expected to do a little bit better uh in terms of product accuracy as well as
[23:36] atmospheric correction for these regions. regions. And we're using it here just to look at the spatial consistency of our mixture
[23:43] density networks when applied to atmospherically corrected data. Uh in the top left you can see the chlorophyll a concentration next to it
[23:52] the total suspended sediments in the bottom left absorption due to sedom and the bottom right ficoyanin which again
[23:58] is a proxy for potentially toxic cyanobacteria cyanobacteria spatially in the um let's see if we look at the chlorophyll a map in the top left
[24:08] you can see the Detroit river plume which has really low concentrations of chlorophyll a and the western section of
[24:16] the image is Mami Bay. You can see there's higher concentrations there. In the southernmost section, you can see
[24:22] really high concentrations in Sanduski Bay. And spatially, this lines up with what we've seen historically from this
[24:29] region. Um, we can also look at matchups with Insichu um measurements that were taken, though I won't cover that here.
[24:38] And in general, they line up quite well. Not only can we produce products with our algorithms, we can actually also
[24:44] produce uncertainties. And these uncertainties demonstrate the model's confidence in its own estimates. So spatially they're very consistent.
[24:54] They don't have dramatic artifacts and they line up with what we've seen previously. Um but what happens when we
[25:00] take a temporal time series of these products. So I did that leveraging again which has this fine spatial spectral and
[25:08] temporal resolution combination. Um and shown here you can see a time series of a harmful algal bloom which starts in
[25:16] Maui Bay and interacts with the Detroit River plume. So right now it's March. Um as it turns into April, May and June,
[25:23] this bloom starts to develop. Here it's interacting with the Detroit River plume. Uh and then we can see it sort of
[25:29] reset again. So temporally we can see strong consistency in our products and actually see some some hydraological uh
[25:39] interactions in these regions. So I was focusing on chlorophyll a but we can also look at ficoyanin which again is
[25:45] this marker for potentially toxic cyanobacteria and you can see really high PC in the Sanduski Bay and Mami Bay
[25:53] in the months of July and August suggesting there might be cyanobacteria there. there. So now I'm going to jump to how um
[26:02] stakeholders or users like yourselves can apply our models to pre-processed satellite imagery. The tutorials can be found in the QR code linked below. Um if
[26:14] you have any issues with it, you can also email me at the below email. Um but just to give you a quick overview of
[26:20] what's going to be included in this demonstration. demonstration. First we will import um some packages um as well as functions from those packages
[26:29] including specific functions from the MDN itself. We will then visualize pre-corrected using acolyte oli imagery and learn how to plot those uh with some
[26:42] of our own um functions. We'll then retrieve the RS from this pre um processed atmospherically corrected tile. Um these functions can work with
[26:54] acolyte or L2G or even polymer. We'll then generate predictions from the RRS. So we'll generate predictions for
[27:01] say TSS or chlorophyll A. Um then we can also generate uncertainties from these RS and visually look at them
[27:10] and analyze the imagery. And finally we'll do the same thing but for L2 gen corrected pace imagery so that we can
[27:17] see some of the more advanced products. All right. Now we'll jump into that tutorial. So now I'll present a demonstration of
[27:31] our Jupyter hub notebook um called leveraging mixture density networks to generate biogeeochemical parameter and IOP maps. This is um one of three that
[27:42] we have available. The first two cover generating products from Insichu measurements and um generating uncertainties and they they take a
[27:50] little bit of a deeper dive into how these MDMs work. Um but today I thought I would present on how to generate
[27:58] product and uncertainty maps as this is often what users are most interested in. If you have any questions on these you
[28:05] can email me Arun or Akos directly. So the first thing we're going to do in section one is import um the required
[28:15] packages and environment settings. So we can run this first block of code. This imports the Python packages needed for
[28:23] the notebook. They're pretty standard packages like numpy os pathlib zip file and mapplot lib for plotting. And then
[28:32] there's some uh packages that we've written ourselves um as part of the MDN package which is installed via the
[28:40] instructions at the QR code that you saw during the presentation. I won't go through those instructions here. Um but
[28:46] if you have any issues again, please email me. These specific MDN functions, um I'll briefly go through here and I'll
[28:54] dive into their exact uses a little bit more as we get into the actual code. Um these functions include get sensor bands
[29:02] which when you provide it with the sensor name for example oli will get you the required bands for the MDN sensor.
[29:09] Get tile data pulls the bands as well as RS data from a given tile path so that
[29:17] we can get the RS from a pre-processed net CDF download example imagery we wrote specifically for this Jupyter hub
[29:25] notebook. It pulls data um that we have already atmospherically corrected so that users can run this notebook without
[29:34] having to do that atmospheric correction themselves. We have find RGB image which pulls the red, green and blue bands um
[29:42] and outputs that which we can then use as input to the display set RGB which displays the satellit's RGB image so
[29:49] that we can look at the um image itself identify the aquatic regions and cloudy pixels and land pixels.
[29:58] We can also get tile geographic info. This pulls the extent um like lat and longitude for the given image.
[30:08] We can then run the um RS data that we pulled using get tile data through map cube MDN full and then from those
[30:16] predictions that it gives from the MDN uh we can overlay the RGB image and the MDM products to get final maps for both
[30:25] uncertainties as well as the products. And this will make more sense as I jump into the examples.
[30:30] The next block of code that we run right here just sets the display parameters for mattplot lib. I won't go into that
[30:37] in detail. In section two, we just download an ulti image that again I've already atmospherically corrected. If you were
[30:45] to do this yourself, you'll have to provide your own atmospherically corrected data and just switch out the
[30:50] tile paths below. Um, so here we're setting the sensor to Uli and the date location just allow us
[30:59] to pull the correct example imagery. I've already downloaded that tile locally. So um, and it's displayed at this uh, tile path
[31:10] right here. After running that, we can then display the RGB image using display set RGB. And that image looks like this, which I'll
[31:22] go through in a second. It just takes as input the tile path and sensor. You can change the size of the figure uh as well
[31:29] as the title which we pull from the sensor and location and date that we specified previously. And it outputs um
[31:37] the image as an RGB image which we can use for future algorithms. So this can serve as the base map for future um
[31:44] functions that we've written. So if we just take a look at the RGB image itself, you can see that this is
[31:51] an image from Ulie of San Francisco Bay on March 16th, 2019. Um, let's see. This is the Pacific
[32:01] Ocean. You can see it's pretty blue, meaning it's probably dominated mostly by chlorophyll. Probably has low concentrations of TSS and sediment. Um,
[32:09] as it moves into the San Francisco Bay, you can see it turns maybe greener. Maybe there's higher concentrations of
[32:16] chlorophyll there and higher um phytolanin biomass. As you move up to the northern section of San Francisco
[32:22] Bay, it turns sort of a yellowy color suggesting maybe there's higher concentrations of suspended sediment there from the Sacramento River and
[32:31] Sanwakian rivers. Um and if we look at the southern section of the bay, you can also see these little um areas which are
[32:40] either you know bright green or bright orange or bright yellow. And these are the salt flats which are separated from
[32:46] the bay. So there's a wide range of different optically distinct regions represented here in this image. You can
[32:53] also see some clouds in the bottom left. Okay. So we have the tile data, we have the RGB image. Now we can pull out the
[33:03] remote sensing reflectance data with this block of code. Um using get tile data with the tile path specified and
[33:10] the sensor specified to olie. It'll pull out the bands and RS required by our um MDN uh prediction function. We can also
[33:21] use get tile geographic info from the tile path to get the lat long and extent for the image. And then we can plot the
[33:29] RS data for this specific band. Um just for the first band just to check that we plot the RS correctly. Indeed, we can
[33:36] see the RS is pulled out for all the aquatic regions and there aren't any, you know, RS pixels for land or clouds.
[33:47] Now that we have the RS data, we can move on to generating predictions from the NDN using our MDN cube or map cube
[33:55] MDN full function. So, I'll run that while I just go through this function. You can see it running in the bottom.
[34:02] You can mute this output though. Here we've included it just so you can see that it is running.
[34:08] So from the MDN package we can pull map cube MDN full as well as get args. Um
[34:15] these allow us to map the model predictions and uncertainties and define the arguments that select the correct
[34:21] model. So for example in kwarks here we set the sensor to ulti the products to chlorophyll tss and cdom and we set the
[34:30] model UID which is the name of the model weights that we actually use. You don't have to change that for now. Um if you
[34:37] have questions about setting the model UID for specific sensors you can again message me. After we run get arguments, which pulls
[34:46] the correct arguments for the set of keyword arguments, we can then run map cube MDN full on the arguments and RS
[34:54] that we've already pulled as well as the bands. There's a few different um parameters that we can set like landmask
[35:02] which we set to false here as we just use acolytes landmask. There's also um figure subsample which allows us to
[35:09] subsample the image. Um so we could reduce the spatial resolution. Basically this might be useful if you want to plot
[35:16] an MSI image quickly and it has too high spatial resolution and it takes a little too long on your computer to run.
[35:23] Uh we also have scaler mode set to invert. This doesn't need to be changed but it just basically puts the model
[35:30] uncertainty values into the same scale as the model predictions. block size is set to 10,000. This is one that you
[35:37] might want to change as this uh controls the size of the um or the number of the
[35:43] RS that are processed at a single time. Um so reducing it allows you to run this on um
[35:53] uh a personal laptop and increasing it allows you to run things faster if you have more um RAM uh available. And the
[36:02] uncertainty mode is set to composite. So instead of providing uncertainty bounds like low and high uncertainty estimates,
[36:09] it just produces a single model uncertainty. uncertainty. All right, it looks like this ran in the time I took to explain it. And you can
[36:17] see the outputs for each block of 10,000 RS. Um again, you can mute this if necessary, but it looks like it finished
[36:24] running. We can then um from the model predictions est uh plot graphics for chlorophyll as well as for TSS and for
[36:34] seed. seed. Uh and then we can start to visually sort of analyze these products. So these plots are created using overlay
[36:43] RGB MDM products where we take the RGB image as input. um the model predictions which were output by the previous
[36:51] algorithm that ran our mixture density network model. Um we pull all of the 2D information and we can pull the slice um
[37:00] that corresponds to chlorophyll. And how we change it is we just change from chlorophyll to TSS or to CDOM depending
[37:08] on the product that we want to plot. Um for this chlorophyll product we have this string here that gets set that we
[37:17] can use as the title and we can put prediction ticks um from 10 to the 0 to
[37:23] 10 to the two. So these are in log scale and we can also set the figure size and
[37:28] that produces these um plots with the RGB image background and the MDM products overlaid. Okay, so we saw darker waters in the
[37:37] Pacific and that corresponds to lower concentrations of chlorophyll. That checks out. We saw these really bright salt flats which again which have high
[37:45] concentrations of chlorophyll. That also sort of makes sense. And we see a little bit of slightly higher concentrations of
[37:52] chlorophyll in the northern section of San Francisco Bay and the Sacramento and Sanwalkian rivers. This generally tracks
[38:00] with what we saw visually in the RGB imagery. imagery. We can also look at the total suspended
[38:06] solids map that we produced from that same image. Um if we follow this uh from the Pacific Ocean, you can again see
[38:14] lower concentrations in the Pacific, which makes sense with how we understand the region. Higher concentrations seeming like you know coming out of the
[38:22] San Francisco Bay. And as you move into the northern section, you see really high concentrations which came from
[38:28] these two rivers which again tracks with our understanding of the region. And we can do the same thing for SEDOM
[38:37] where again you see lower concentrations in the Pacific Ocean and higher concentrations in the northern section of this bay.
[38:45] [snorts] Not only can we get the um products, but we can also visualize uncertainties uncertainties um again using this overlay RGB MDM
[38:54] products function. But now we just also set the image uncertainties using the output model uncertainties for the
[39:02] corresponding slice. for example, chlorophyll in this example. So we can run that for chlorophyll tss as well as seedom and we can start to
[39:14] see the model's confidence in its own predictions um in the same space as the uh chlorophyll a predictions itself. So
[39:22] you can see the regions where there's higher uncertainties. Often you'll see some of these higher uncertainties near
[39:27] cloud or maybe some of the atmospheric correction failed and in the really high um concentration chlorophyll estimates
[39:34] in these salt ponds which generally tracks with what we would expect for this region. Finally we can move on to section six
[39:44] where we're generating predictions from hyperspectral pacei imagery. Um we can again just download some example imagery for a day where I've already corrected
[39:56] this imagery from an image of Lake Erie. Uh then we can display this uh RGB image from um the pace image that we've again
[40:06] already atmospherically corrected. You can see uh it has darker waters in the eastern section, brighter waters in the
[40:12] western section in Sunduski Bay, which again tracks with our understanding of this region and again low lower um
[40:20] brightness from the Detroit River plume. We can then do all of the same um functions or use all the same functions
[40:29] that we used previously like get tile data, get the tile geographic info to get the RS and latl long, plot the RS
[40:37] and then use map cube MDN full on that RS to get model predictions uncertainties as well as the slices.
[40:46] So, I'll run that um in the background here. And again, you can see it running with this process
[40:57] bar. Um that'll run in the background, but we can already look at some of the visual imagery that I've produced
[41:04] previously. Um in the top here, you can see MDNS made for chlorophyll a PC, TSS, and CDOM. Um
[41:14] so this uh hyperspectral algorithm allows us to pull out um additional products like ficoyanin as well as more
[41:22] advanced products like uh IOPS um which you can see in the bottom but spatially I can just quickly go through what we
[41:30] expected to see uh where you can see lower concentrations in the Detroit River plume and the eastern section of
[41:36] Erie and higher concentrations in Maui and Sandbuski bays. for um PC. This is in May. So you'd
[41:47] expect there to be lower concentrations of ficoyanin as these harmful algolooms have not started yet. And you can again
[41:54] see that in most of this image though there's a little bit of higher concentrations in Maui Bay.
[42:04] You can see similar spatial distributions for TSS as well as seed. We can also look at the more advanced
[42:13] products like absorption due to phytolanton non-algo particles as well as sedom. Shown here is MDNAP at 450 nanometers
[42:26] for pace. Um you can also see uh different wavelengths like 490, 550, 620. This one often corresponds to
[42:36] cyanobacteria cyanobacteria and 670. Um, and we can also look spectrally at absorption due to CDOM where we've just
[42:44] plotted 440 nanmters, 490, 560, 650, and 675. 675. And we did the same thing for non-al particles. So, you can see that with
[42:54] this hyperspectral data, we're able to represent a wide range of additional products. products. Uh thanks for listening to my
[43:03] demonstration. Um I'll be happy to field any questions you might have during the question and answer period after Amita
[43:11] um provides some summary information. Thanks. Thank you very much Ryan for your excellent presentation and demonstration of the code and also for sharing the
[43:28] code with everyone. That brings us to the close of today's session. session. To summarize, we started with an
[43:37] overview of pre-processing top of atmosphere radiances from satellite images. images. We would start with level one satellite
[43:46] data. We saw that there are several data portals where different satellite and sensor level one data are available.
[43:54] then get atmospherically corrected level two remote sensing reflectances from the TOA data and these remote sensing reflectances can be used as inputs to
[44:05] the MDN models. Then Dr. O'Shea provided an overview and demonstration of using MDN models to derive water quality parameters.
[44:16] Specifically, the models are trained using a large globally distributed data set of INC2 water quality measurements and colllocated hyperspectral
[44:26] measurements from a wide range of optically complex regions and sharing many of these samples with Gloria data.
[44:35] The MDN approach is well suited for addressing non-unique inverse problems like ocean color remote sensing due to
[44:42] its output layer. The models retrieve key water quality parameters depending on spectral availability including chlorophyll a total suspended solids, colored
[44:55] dissolved organic matter and ficoin along with their associated uncertainties. uncertainties. Similar models were developed to support multiple multi- and hyperspectral
[45:06] satellite imagers including modis lenset 8 and 9 o sentinel 2 um MSI sentinel 3 o and base oci.
[45:18] This brings us to the conclusion of this webinar series. To summarize, we started with an overview and demonstration of
[45:26] the satellite based tool for rapid evaluation of aquatic environments or stream web tool and API. In part one, we
[45:35] saw how to map water quality parameters including chlorophyll concentration, total suspended solids and siki disk depth. The data are available from 2024
[45:46] to near realtime in coastal estuaries and inland lakes across the US at 20 to 30 m special resolution. And these data
[45:55] are derived from lancet 8 and 9 and sentinel 2A, 2B and 2C imagery. We saw how to search and download water
[46:05] quality products using the stream web tool and API. and then we examine time series of water quality parameters in
[46:12] the region of interest using QGIS. Today in part two we had an overview and demonstration of the aquavverse
[46:20] algorithm. So introduction to the MDN models to derive water quality parameters and access and application of MDNbased model code to retrieve water
[46:31] quality parameters. Finally, stream web tool and API and the MDN code are all open source and you can
[46:41] download and use uh the code as we saw today from Dr. Rosha. There's one homework assignment and it's
[46:50] posted on the training web page today. Answers must be submitted by Google forms and the homework is due on 10th
[46:58] March. March. Certificate of completion will be awarded to those who attended all live webinar sessions would complete the
[47:07] homework assignment by the deadline and then you will receive a certificate via email approximately 2 months after
[47:14] completion of the course. Once again, we thank our guest speakers William Wayright and Ryan O'Shea for their presentations and demonstrations
[47:27] describing how water quality parameters are derived from remote sensing and then making these data available through stream website.
[47:39] Trainer contact information is provided here and you can always contact RSET. Um RSET website and RSET YouTube link are
[47:49] given here. All the training materials this training and previous trainings uh material can be found here. For
[47:56] questions, comments or to share how you have applied our trainings to your work or studies. Email nasa.rset@gmail.com.
[48:06] Join our quarterly newsletter to stay uptod date on our latest trainings and the steps are given here. Just send an
[48:13] email with no subject line to this email address and follow the instructions sent in response. Here are some useful resources.
[48:23] And with that we thank you all for attending today's session and we will go to the question and answer session now.
[48:37] We'll start with the question and answer session and once again we thank our guest speakers um Williamright and um
[48:46] Dr. Ryan O'Shea. Uh we'll start with um question one um how much does spatial resolution affect the processing time of
[48:56] the MTN? and you can unmute Ryan and and answer the question. >> All right. Thanks. Um I'd say most of
[49:06] the variability comes from the number of aquatic pixels in the given image. Um so for the same area MSI if you're using it
[49:15] at the 10 meter spatial resolution would have almost you know 900 times more pixels than say ulti at 300 meter
[49:24] resolution and therefore take that much longer to process. But really it's a function of the number of available
[49:30] aquatic pixels. >> Great. Thank you. Next question is what is the difference between PC and TSS? >> Yeah, sure. Uh PC is defined on slide 20
[49:44] in the presentation. It stands for ficoyanin. Um ficyanin is a pigment that is specific to cyanobacteria biomass
[49:54] which is a potentially toxic algae. Um and TSS stands for total suspended solids. Uh these can be things like sand
[50:02] which has been suspended in the water column. >> Next question. Is there any reason to select 50/50 training and validation
[50:13] data set? We usually consider 8020 or 7030. >> Sure. We have a long response to this question in the Q&A document. Um but the
[50:26] short answer is to ensure statistically robust and representative validation across the range of observed conditions. So we adopted this 50/50 split. Um we
[50:36] have a pretty large data set. So we're able to split it and get you know robust um validation metrics. Additionally this
[50:44] is really our idealized um um uh error metric I guess that we're reporting here. We have multiple other
[50:53] ways of testing these algorithms. Um, one of them is a regional split where we'll split the data regionally. So
[51:00] we'll uh train on everything except for one region and test it in that region and then report the error metrics there
[51:05] to get an outof training data set estimate. Um that usually has like 50% uncertainty or residuals. Uh and then
[51:13] the second way which I showed here today was we'll also try to get matchups with the satellite sensor um for the probably
[51:21] most realistic error metric of what you'll actually see from satellite imagery. >> Thank you Ryan. Uh question four is just
[51:30] to be sure uses to radiances for satellites as input to the MDN model to derive water quality parameters.
[51:40] Sure. Uh so stream actually has two different MDNs. Um one MDN retrieves the remote sensing reflectance or ocean color from
[51:52] the TOA radiance. And then we actually have a second MDN that retrieves water quality parameters from the remote
[51:58] sensing reflectance or ocean color signal. So most of what we've published so far has been on that second MDN where
[52:05] we try to retrieve these water quality parameters. you know, things like chloro, TSS, secth uh from the RS, but we are rapidly
[52:14] trying to get out a publication to retrieve the RS from the TOA radiances as well. Um, and we expect in the next,
[52:22] I guess, six months to have that MDN um available online, but we'll keep you posted. posted. >> Great. Thank you for that reply. and and
[52:32] if you go back and see some trainings that ar did um in those trainings CAS or CSSW have been used that's also NASA
[52:43] software and soon u aquar will be available as well. Uh question five. The MSI scatter plots show a classic heteros
[52:55] SCT pattern of residual. Sorry. [snorts] Uh there are statistical corrections that can account for this and provide
[53:04] better predictions. Has anyone tried that? The residuals are clearly a function of the X variable. Uh so this isn't exactly my area of
[53:15] expertise but somebody else in my group um wrote a response which I will read here. Uh the MSI scatter plot should not
[53:22] be interpreted in the classical regression sense. In this case the x-axis does not represent an independent predictor variable upon which the y-axis
[53:32] depends. Model predictions are generated from the input RS whereas the X-axis represents independent insitue measurements used solely for validation.
[53:42] Uh we acknowledge the presence of systematic bias and range dependent error behavior in certain portions of the dynamic range of the water quality
[53:49] variables. These trends are consistent with the heterosidastic characteristics of the data set are and are an active area of ongoing model
[54:00] refinement. Thank you. Question six is, as Modi's temporal resolution is higher than lenser sentinel, is there a way to use
[54:14] it as a support tool that works whenever there are clouds or glint effects and getting a higher amount of images?
[54:23] >> Yeah. So, this is uh again another like active area of research. How do we how do we harmonize between these different
[54:29] satellite sensors and combine together their outputs? Um, so one thing we we tried to do with these mixture density
[54:37] networks was apply them to the available satellites that we had access to. And I showed in uh one of the earlier slides
[54:45] all of the different satellites that we do have MDN's that um we that support these different satellite sensors. These
[54:51] MDNs are trained on similar data sets. Um but you know each of these sensors does have different spectral
[54:59] um characteristics. So what we end up seeing is that these uh MDNs generally produce pretty harmonized retrievalss
[55:08] for the different products um including chlorophyll between the different sensors. However, uh long-term we're trying to attempt to further improve
[55:18] harmonization between these sensors, specifically LANCAT, Sentinel 2, and Sentinel 3 by leveraging even more advanced machine learning models. Um, so
[55:26] I guess the the short answer to that question is yes, you certainly can use our models to to fill in and build time
[55:32] series. Um, and we're trying to, you know, improve that in the future. >> Thank you. Question seven, can planet
[55:42] data be used for MDN or is among the coming soon? >> Yeah, actually we do have an MDN
[55:49] available for chlorophyle and psychedisepth from planet superdv. Um I provide a link in the Q&A text. Uh
[55:58] however, it's not currently supported as part of the tutorials or GitHub. We do plan to add it soon, probably in the
[56:04] next month or two as we are um rapidly adding in these additional sensors that we have models for but aren't quite
[56:12] supported by the tutorials just yet. So feel free to email me and when we push the updates to our GitHub I can I can
[56:18] send an email back. >> Wonderful. Thank you, Ryan. Our next question is, have the MDN results been
[56:25] compared with the derived products from Echolyte? Echolyte? Um I'm not sure exactly what algorithm acolyte uses but I guess the short
[56:34] answer to this question is no. We haven't done that direct comparison. Uh we have done comparisons to other you
[56:40] know operationally available algorithms where we uh download the products from websites like the ocean color v4 algorithm as well as cyan for regions
[56:49] where we have a lot of insitue data like lake eerie and the chesapeake bay. Um and in general we've seen the MDNS
[56:56] outperform uh these algorithms across the wide dynamic range that's represented particularly in Lake Yuri. So for bloom formation in particular
[57:06] they're they're quite um robust. >> Next question is can this code be used anywhere? Do we have to change the input
[57:16] which depends on the zone that we study? Um short answer is yes it can be used anywhere. Uh the model only relies on RS
[57:28] or the remote sensing reflectance the ocean color signal as input. So it can be used in any region. There aren't any
[57:35] um other inputs. >> Question 10. Currently I'm working on estimating TSS using surface reflectance data. Since high TSS in INC2 data are
[57:50] not available for training, my model predicts low TSS values during extreme events even though I know the actual TSS
[57:58] concentrations should be much higher than the estimates. Could you please suggest how to address this issue? >> Um
[58:08] let me think about that one for a second. uh in this case are the TSS being estimated from the MDN and I guess
[58:16] how high is high for the TSS values? Um the short answer I guess is that if you
[58:24] did have high TSS values with RS available, you could um potentially either retrain the MDN or apply a
[58:34] transfer learning approach where you take the MDN that we have and then just re retrain um some of the later layers
[58:41] using this institute data. Um yeah, I think that would probably be the best approach. >> So Ryan, would you say that because uh
[58:53] uh this was trained u MDN was trained with like a large uh range of values um it may perform better than other um
[59:03] retrieval schemes for TSS. Um I would expect it to perform pretty well for the region or for the the um
[59:15] concentration ranges that we have available but not necessarily outside of that. We do have limited data at the
[59:22] higher ends. Um >> right >> so that might be a limitation for accuracy. accuracy. >> Thank you. Question 11. Is it possible
[59:32] to fine-tune MDN using INC2 data? >> Yeah, that sort of builds off that last um question that the short answer is
[59:40] yes, it is possible. Um particularly using transfer learning. Um I think we've tried that in our lab before. I do
[59:49] think we have some code for it. We don't currently support that via our tutorials, but if you send me an email,
[59:56] we can set up um a video conference or something and we can discuss how to do this yourself.
[1:00:02] Great. Thank you. Uh Ryan, question 12. The uncertainty map seem to look very similar to the water quality maps. High
[1:00:11] WQ estimates equals high uncertainty. Does that mean that the model can be less reliable at higher values?
[1:00:20] Uh I guess I'd say that the bulk value of uncertainty is higher for higher values and we can use relative
[1:00:26] uncertainty or percentages to identify outliers in terms of prediction performance. performance. [snorts] >> Next question is can uranium
[1:00:38] contamination in surface water be estimated? estimated? >> I don't have any experience with mapping uranium contamination. Um, and yeah, I
[1:00:49] don't I don't think we've used that previously or or seen data from that. >> Question four is, do you have any
[1:00:57] guidance or recommended sources resources for pre-processing the RS input? Specifically, I'm interested in MSI and OLE. >> Yes. Um so the the I guess atmospheric
[1:01:12] corrections that from our experience we've seen work well in utrophic waters is acolyte and more oligotrophic waters
[1:01:18] is L2 generas. Also coming soon um we are producing our own in-house aquaverse atmospheric correction method. Um we are
[1:01:30] working on paper for that and should have that out in the next sort of six months. So stay tuned.
[1:01:39] Okay, next question is is the sample data set histogram shown earlier. What is the temporal range and the special
[1:01:48] extent of the data? >> Sure. Um it's similar to that of the Gloria database. We've taken the Gloria
[1:01:57] database and sort of extended it with our own insitu data as well. Um I'm not sure exactly on the temporal range but
[1:02:05] you know much of the data is from the last 20 years and spatially most of the data from that map I showed um I don't
[1:02:13] know the slide number but I do have that graphic where it shows about 80% of the data is from North America and Europe
[1:02:20] and maybe 20% is from the rest of the globe. um we are trying to build that out if yeah if you have data set from
[1:02:27] underrepresented regions um we'd be happy to incorporate that into future versions of the MDN model uh and
[1:02:34] theoretically that would improve the MDN's retrievalss in those regions so again yeah feel free to send me an email
[1:02:40] message uh if you're interested in that thank you next question is is there no atmospheric correction embedded in the
[1:02:48] MDN do you suggest just starting with L2 data data Yeah, that's correct. So the the MDN that are available on the GitHub
[1:02:57] tutorial right now um just start from the level two data. So I'd recommend something like L2GEN or Acolyte. Again,
[1:03:05] we are working on developing in-house atmospheric correction models. We have some that work really well, uh but we
[1:03:11] have to get those publications out and then we can add those um to the GitHub tutorials. We're planning to do this in
[1:03:19] advance of ocean optics which is in I believe September where we'll host a tutorial there. >> Next question. Is it possible to apply
[1:03:30] these models to earlier versions of lensets such as Lancet 5 or 7? What would be the limitations?
[1:03:43] >> Um let me think about that for a second. I think we and somebody from my group can correct
[1:03:51] me if I'm wrong. I believe we have applied some of these models for SEI discip retrieval from Lancet 5 and 7. Um
[1:04:01] but I don't think we've done that for coral or TSS. Um so I'm not sure if we've explored that
[1:04:10] fully. fully. I'm not sure how the SNR for these sensors would support uh retrieval of chlorophyll products, but that's
[1:04:19] definitely something we'd be interested in exploring. >> Thank you. Next question is, are there any matchup studies for MDN base
[1:04:28] predicted TSS and CHLA? >> Uh not published. However, we are doing that in-house. We are funded as part of
[1:04:38] the PACE science and applications team. Um we are working on one such publication where we have matchups for
[1:04:47] chlorate and ficyanin um across uh oligotrophic waters in the US that I don't know hopefully will be
[1:04:57] out in the next year and then al also we um have an inhouse uh validation data set from the pace um validation team and
[1:05:09] those seem to do really well when compared to OCV4 in uh more again utrophic uh inland and
[1:05:18] coastal waters. So short answer is yes. We've done these studies but they're not published yet. >> Thank you. Uh next question. What is the
[1:05:30] accuracy of the MDN network? Um, you know, that's that's a a difficult question to answer because there's a few different accuracies that
[1:05:43] you can report and for multiple different satellite sensors. So, it really depends on the satellite sensors spectral capabilities uh as well as its
[1:05:52] SNR the accuracy of the atmospheric correction. Um and you know if you're applying this algorithm to insitue RS without any
[1:06:03] atmospheric correction or if you're applying it to satellite imagery um if you are interested in the accuracy
[1:06:10] for specific sensors we have a a wide range of publications that are cited in the tutorials at the bottom. um you can
[1:06:20] look through those and in general we we try to publish the accuracies in each of those different scenarios for the
[1:06:26] different sensors that we support. >> Thank you. Next question is is there a reason why you did not compare with
[1:06:34] other available machine learning algorithms? >> Yeah. Um I guess uh typically we try to compare with the sort of more
[1:06:46] operationally available algorithms. Um and we've we've generally focused on those. those. We'd be happy to compare against other
[1:06:59] machine learning algorithms uh if there's any specific one that you're interested in with with any data sets
[1:07:04] that we might have. Thank you Ryan. Question 21 is the same network used for all sensors. >> Um so for the multistpectral
[1:07:20] instruments we typically try to use the same MDN network architecture um with the same number of layers and
[1:07:29] neurons. However, when we moved to hyperspectral sensors like emit, prisma and pace, we had to increase the number
[1:07:39] of neurons for the larger amount of inputs as well as outputs because now we were inputting hyperspectral data and
[1:07:47] we're outputting more complex products like absorption due to phytolanton which is spectrally variable. So we have something like 50 inputs and 70 outputs.
[1:07:58] Um so the the short answer is for the multisspectral instruments yes it's very similar for hyperspectral we had to
[1:08:04] increase the the number of neurons in the network >> but we use MDN for both sorry >> yeah yeah so next question is I didn't
[1:08:16] understand that one MDN retrieves RS for IOP ocean color properties and the second MDN retrieves water quality
[1:08:24] parameters isn't it supposed to be the name. name. >> Yeah. So um for each sensor um there's
[1:08:34] they have different spectra that are supported. So for the multisspectral instruments typically what we retrieve is chlorophyll a tss and cdom also sec
[1:08:47] sometimes for the models that we support. Um but for the hyperspectral instruments we started adding in the
[1:08:55] IOPS as well. So not only do we retrieve chloro, TSS and sedum but we also simultaneously simultaneously retrieve absorption due to phytolanton,
[1:09:06] colored dissolved organic matter and non-al particles. Um yeah so it depends on the sensor which uh products we
[1:09:15] currently support if they do retrieve them simultaneously. Next question is which bands are the network using for chlorophyll A and the
[1:09:27] other parameters? >> Um yeah again it depends very much on the sensor that we're talking about. Typically we try to keep the bands in
[1:09:36] the uh I believe it's 415 nanometer to about 750 nanometer range. That varies a little bit sensor to
[1:09:46] sensor. Um the exact wavelengths um can be found in the tutorials using the get sensor bands function for the
[1:09:57] specific sensor. Uh but we try to use all the bands in that range typically. >> Next question is is there a document
[1:10:08] that lists the water bodies where the MDN is trained and validated? Um there isn't an individual document.
[1:10:19] However, we do have again a wide set of publications available. These are cited at the bottom of our tutorials. Um
[1:10:32] and in each one of those publications, we go through very similar uh training where we do the 50/50 split. Sometimes
[1:10:39] we do a regional split as well. And then finally we try to do um a matchup analysis for each one of the sensors. Um
[1:10:48] and in that we should also talk we do also talk about the sort of spatial distribution of that data.
[1:10:56] >> The next question is is there um can it distinguish between oil spills and habs or oceans?
[1:11:04] >> We don't have experience using th these MDNs for distinguishing between oil spills and habs. Okay, the next question is, how do NASA
[1:11:16] ocean color and inland water quality algorithms manage seasonal spectral shifts caused by monsoon-driven turbidity, seed dom variations, and
[1:11:26] changing solar geometry without introducing systematic bias in long-term time cities? >> Let me think about that one for a
[1:11:36] second. Yeah, I think this is a really good question. I think I'd have to think on it a little bit before providing an
[1:11:50] answer. I'll try to do that over the next uh week and get back to it. >> Great. Thank you so much.
[1:11:58] Um the next question is why was the NC2 chlorophyll a data from USGS which covers the United States not used?
[1:12:09] >> Um let's see does that data set include RS as well as chlorophyll A? Um if so
[1:12:18] we'd be happy to add it in. Uh I'm not entirely sure if it Yeah, if it does
[1:12:23] include RS, we'd be happy to add it in when we retrain these models. Um if it is just chloro
[1:12:31] we probably have pulled some of that data for validation um but we can't use it for training with
[1:12:37] the MDM since they require the RS's input. Question 28. Uh does stream recommend regional recalibration of retrieval
[1:12:50] algorithms or does it uh rely on globally parameterized models with deviation correction layers? >> Um we do not currently recommend
[1:13:01] regional recalibration of these algorithms. Um usually what we would like to do is just keep adding in more
[1:13:09] and more data uh globally. So again, if you have insitu data with RS and the parameter of interest uh and you're
[1:13:17] willing to share it, please send me an email and we'd be happy on future model updates to include that data which
[1:13:24] theoretically should increase the accuracy of the model for that given region. Um we yeah the model is globally
[1:13:33] um trained. We don't deviate uh at all based on the region. So the same model gets applied just to the RS no matter
[1:13:42] what region we're in. >> Thank you. Next question. Can the MDN models be used for volatile and
[1:13:51] nonvolatile compounds as part of water quality predictions in the case of nitrates, phosphates, u ammonical nitrates and other ions? Could MDN be
[1:14:04] used? If yes, in general pra in general practice, how many INC2 observations are we looking here to train MDN models?
[1:14:17] >> Oh, I see. Um the MDN can only be used for well I guess the MDN from these
[1:14:25] satellites with multisspectral or hyperspectral data in the visible and near infrared range um can only be used
[1:14:32] for products that change the ocean color signal. um if you have RS with different concentrate I I don't know specifically
[1:14:42] how these different um compounds change the ocean color signal or if they do interact. If you do have a data set of
[1:14:50] RS with different concentrations of these different products and they do change it then we could try to train an
[1:14:56] MDM to do that. um for how many institute observations again that sort of depends but I guess
[1:15:05] we've used uh in practice as little as a thousand samples to train our PC models so that
[1:15:13] represented a wide range of different focusin concentrations um pretty well but I I don't know if we've looked at an
[1:15:21] exact minimum >> next question can MDN model run on wetland water quality monitoring. >> Uh let me think about that for one
[1:15:36] second. Um if the wetlands are optically deep, meaning that we can't see the bottom reflectance, then theoretically I
[1:15:46] believe they should work just as well for retrieving chloro or TSS. However, if you can see the bottom reflectance,
[1:15:54] that is going to change the ocean color signal or the signal um retrieved by these atmospheric correction algorithms.
[1:16:02] And we really haven't tested the model in these regions. >> Next question is, should input L2 data
[1:16:12] be grided before using the MDN or does it not does it not matter? Uh, one second. No, I I think the answer
[1:16:24] is no. It it doesn't matter. It doesn't have to be gritted. Um, yeah, the the MDN just takes as input
[1:16:34] the remote sensing reflectance uh in basically an array. Um, so as long as you can get it into the format similar
[1:16:41] to that that's applied in the tutorials, uh, you should be good. Thank you so much. It looks like there's
[1:16:52] lot of interest and we had a lot of great questions. Uh we will be posting our Q&A uh documents on the training
[1:17:01] website in in a week or so for both the sessions. sessions. Um okay, I think there's one more
[1:17:08] question. How was the RS obtained for Gloria and other data sets used? Were they downscaled from any satellite data
[1:17:16] to the location of the sample site? If so, can I do similarly for my INC2 data sets which only have chlorophyll A?
[1:17:26] >> Sure. So the Gloria data set and we actually use you know an augmented version of that um but it has very
[1:17:32] similar properties um has hyperspectral RS and uh a few different insitu products including chlorophyle. We take that hyperspectral RS and resample it
[1:17:47] with the sensors relative spectral response function. Um, and then we train the models using that resampled RS.
[1:17:58] You could do that with your own insitu data set. Uh, if you have chlorophyll A with RRS, um, if you only have
[1:18:06] chlorophyll A, uh, you wouldn't be able to reach it. I am currently working on a coastal water quality study area. The this area
[1:18:17] covers a small region and I want to use stream but stream does not support this area with data. What can I do?
[1:18:26] >> Uh you can email us. We are trying to support users that are interested in using our products. Um, we do have some
[1:18:36] processing limitations that we're trying to work through, but if you email us, we can try to add uh a specific tile in
[1:18:43] that you might be interested in. >> That's fantastic. Thank you so much. >> Are these data accessible in Google
[1:18:55] Earth Engine? >> No, we have not included these data in Google Earth Engine yet. We do not currently have plans to
[1:19:08] >> Hello, I'm from Mexico and I would like to use this tool in my country, but I
[1:19:12] saw it's only available in the US. Can be the possibility that we can use in Latin America?
[1:19:21] >> Sure. Um, again, yeah, feel free to email me if there's a specific site that you're interested in and we can try to
[1:19:29] add that to stream. Again, we do have some processing limitations, but if it's only one site, we should be able to do
[1:19:36] that. Um, if you're talking about stream, if you're talking about the MDNs themselves, we do have data from, again
[1:19:42] around the globe, and we've uh used that in training. Um, as long as you have RS data from a
[1:19:49] satellite using the tutorials that I showed here today, you should be able to produce your own product maps for that
[1:19:57] region. Um we're also as a part of the LANCAT science team, we're also adding in um data from some Latin American
[1:20:06] countries countries uh including Mexico um and trying to to validate our algorithms in these regions. This is one of the last questions uh we
[1:20:18] can take in highly turbid Indonesian tropical river systems such as the capas and mahakam in and kali mantan where
[1:20:29] seedom and suspended sediments are both elevated. How does the MDN handle spectral ambiguity between chlorophyll a and sedom absorption in blue bands?
[1:20:41] >> Sure. So um we typically treat the MDN uh more as a black box. We don't really
[1:20:50] go into like the the layers to see how it is uh estimating chlorophyle and CDOM. Um but you know the way it works
[1:20:59] is it's a empirical algorithm. So we have all again a large data set with a wide range of chlorophyle CDOM TSS
[1:21:07] um um uh values represented. So if we have similar chlorophyle and CDOM um combinations we would expect it to
[1:21:18] perform relatively well. Uh if we don't um it might not. But then you could uh again if you have insitu data you're
[1:21:26] willing to share you could email me and we could add it into future trainings in the model.
[1:21:33] Great. Thank you. Thank we are almost at the end of today's session. Uh thank you all for attending this training and once
[1:21:42] again we thank our guest speakers uh for their valuable time and information that they've provided. also thank uh the RSA team for their
[1:21:54] coordination and help in putting this training together and we hope to see you at our next training and look forward to get uh
[1:22:04] survey results from you and feedback from you. Thank you.
