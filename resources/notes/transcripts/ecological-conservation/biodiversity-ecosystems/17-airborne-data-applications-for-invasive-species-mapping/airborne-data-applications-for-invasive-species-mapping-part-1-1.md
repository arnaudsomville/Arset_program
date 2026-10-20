# Airborne Data Applications for Invasive Species Mapping, Part 1/1

`https://www.youtube.com/watch?v=2bukmnvg5OA` · id 33 · 1:55:32 · module 80 — Airborne Data Applications for Invasive Species Mapping

[00:02] Hello everyone and welcome to Airborne data applications for invasive species mapping with NASA's applied remote sensing training program or ARSET. I am
[00:11] your host Satya Cruz and I am a part of ARSET's ecological conservation team. Today I have the pleasure of welcoming
[00:19] guest trainers Michelle Thornton and Rupesh Shrestha from the Oak Ridge National Laboratory. More about ARSET. The ARSET program was developed to
[00:30] provide accessible, relevant, and cost-free training on remote sensing satellite sensors, methods, and tools. Our trainings cover many topics and
[00:38] areas such as agriculture, climate and resilience, disasters, ecological conservation, health and air quality, water resources, and wildland fires.
[00:47] They are tailored for a variety of audiences with for wide range of experience levels. We offer both online and in-person
[00:58] trainings that are either hosted live or are self-paced. As I mentioned before, our trainings are free and often we offer bilingual
[01:06] options. To increase access, we use open software and data as well as accommodate differing levels of expertise. Visit the
[01:14] ARSET website to learn more. Just a reminder that this is an advanced training, so there are a few
[01:22] prerequisites for effective participation. participation. To attend this training, we require you watch the biodiversity applications for airborne imaging systems ARSET webinar,
[01:34] which is linked here. And we also assume that you have some basic Python programming experience. This will allow you to follow along
[01:43] during the demonstration. We've listed some additional ARSET webinars here for your reference. This is a one-part training with two
[01:52] time options available. This training will have homework and it's necessary to turn it in in order to
[01:59] receive a certificate of completion. It will open today after the training and is due 2 weeks from now on October
[02:06] 14th. 14th. Our guest trainers join us from the Oak Ridge National Laboratory. Michelle Thorton is an airborne data lead and
[02:17] Rupesh Shrestha is a remote sensing scientist. We are so grateful to have their expertise to share with us today.
[02:25] I'd like to take a quick moment to also acknowledge the rest of the ecological conservation team who is here supporting
[02:31] the training as well as many people behind the scenes who are making this webinar possible. Thank you, ARSET
[02:37] family. family. So, if you have any questions throughout this webinar, type them in the questions box and we will address
[02:46] them at the end. Feel free to enter your questions as we go and we will try to
[02:50] get to all questions during the Q&A, um but if we happen not to get to your question,
[02:56] question, the remainder of the questions will be answered in a Q&A document that will be posted to the training website about a
[03:02] week after the training. So, what are we here to learn today? As stated in our learning objectives, this
[03:10] advanced training was designed to introduce participants to how image classification of airborne imaging spectroscopy and labeled field data can
[03:19] be used to map invasive species. We'll provide an opportunity to use a Jupiter notebook to access NASA JPL AVIRIS NG
[03:27] data located on the Earth data cloud for a spatial and temporal region of interest. Michelle will demonstrate a
[03:33] cloud-based workflow in a provided notebook to classify species using a trained machine learning model for the Greater Cape Floristic Region in South
[03:42] Africa. Africa. We will end with sharing key considerations for interpreting machine learning end products for invasive species mapping for land management
[03:53] decisions. With that, I will pass it to Michelle to get us started on spinning up our virtual environment for the
[04:00] demonstration. demonstration. I will be back shortly to share some background information. Thank you. Thanks, Sativa. Really appreciate that
[04:11] introduction. So, I'm Michelle Thornton and I'm at the Oak Ridge National Lab DAAC, one of NASA's data centers.
[04:19] And I want to give a little introduction into the NASA Earth Data Cloud and I also want to give participants the time
[04:27] to spin up a managed environment in which we're going to run the Jupyter notebook that I'm going to be walking
[04:35] through. It does take a minute to spin up that notebook, so we're going to have participants do that now and when
[04:44] the tutorial exercise comes along, we anticipate that everybody will be able to participate live. So, first a little bit about NASA's
[04:55] Earth Data Cloud. NASA's Earth Data Cloud is an archive is the archive of its Earth observations and it is hosted on Amazon Web Services.
[05:08] The NASA Earth Data Cloud supports NASA's open source science initiative and it has a lot of advantages. It eases
[05:19] access to data. Data from different data centers archived through different data centers are co-located in the cloud.
[05:28] And it reinforces user data access methods to do data analysis in place and then download outputs. And it also helps toward providing a
[05:41] common suite of NASA Earth Data tools and services Um, allowing multi-disciplinary and multi-mission science. I do want to
[05:53] share that all NASA Earth data does remain free and available publicly. And so, all Earth data are available for
[06:03] download. Uh, and that workflow is certainly relevant to many researchers. Go ahead and learn more at the website
[06:12] that is provided below. So, we are going to work in a Jupyter Hub environment. And if you are a
[06:23] participant and want to follow along live, I invite you now to uh, go to this link. It's called
[06:32] workshop.openscapes. 2i2c. 2i2c. cloud. cloud. And this is going to spin up a managed cloud service. This is going to allow
[06:45] each participant to have their own managed environment for the notebook tutorial. tutorial. So, if you're at that website, again,
[06:56] it's at the top of the screen there, workshop.openscapes.2i2c.cloud. You'll see the uh, the screen grab there. there. And and a sign in. And this sign in is
[07:12] um, um, is going to provide you your own uh, your own environment. Once you're signed in, you will have the
[07:22] capability to choose both the environment and the resource allocation. And so, we're going to be using a Python
[07:30] environment, so select Python. And the resource allocation, we recommend choosing, you might need to scroll down a little bit, that is a drop
[07:40] down, but choose the 29 uh gigabyte RAM. And And once you have that selected, you will have a server that is starting up
[07:51] for you. Um and this This is the part that might take a little while, so this is why we
[07:57] want to get this spinning up now. Uh if you do get an error, just go ahead and keep trying. It's not unusual for a
[08:05] 404 or similar error to pop up. Um but we do encourage you just to keep trying. Um and once we get back to the tutorial,
[08:16] we should be ready to roll. Once your Once your environment does spin up, this is what you're going to see.
[08:22] Um so I just wanted to like give a a little uh sneak peek into what what your
[08:29] environment will look like, and we'll start there. Now, I think we're ready for Setipa. Thank you, Michelle. So, I'm going to
[08:39] present our overview. Invasive species have a massive global impact. Humans and nature are threatened by invasive species across the globe,
[08:49] including threats to ecosystems, the economy, food security, and health. In 2023, the Intergovernmental Science-Policy Platform on Biodiversity
[08:59] and Ecosystem Services produced a comprehensive report on the global impacts of invasive species. The report noted that invasive species
[09:08] are significant factor that directly or indirectly cause 60% of documented global animal and plant extinctions. It is also estimated that they have an
[09:19] economic impact of over 420 billion dollars. This figure presented in the report shows the distribution of both
[09:30] terrestrial and marine invasive species around the globe. Today's training is going to focus on mapping of invasive species in South
[09:42] Africa. Africa. We're going to be using data from the 2023 BioScape campaign. BioScape was NASA's first biodiversity
[09:50] field campaign to use airborne remote sensing observations to improve understanding of the drivers and mechanisms behind ecological and
[09:59] biodiversity changes. By incorporating airborne imaging, spectroscopy, lidar, and field observations, researchers are utilizing data to better understand South Africa's
[10:11] Greater Cape Floristic Region, including surrounding coastal and marine environments. The campaign was organized around three major themes aimed at
[10:20] understanding the distribution and abundance of biodiversity, the role of biodiversity in ecosystem function, and the impacts of biodiversity change
[10:31] on ecosystem services. Overall, this research is has a goal of supporting better conserving nature and contributions to society.
[10:48] So, the Greater Cape Floristic Region is a biodiversity hotspot with approximately 2/3 of the estimated 9,000 species that grow there being endemic.
[10:59] Most of the region is treeless and is covered in a type of evergreen shrub called fynbos. Non-native trees such as acacia, pine,
[11:09] and eucalyptus have spread into this region, threatening endemic species by competing for water resources. In our introduction to invasive species
[11:21] monitoring with remote sensing webinar, we provided an overview of methods for mapping invasives. Today, we will focus on classification.
[11:31] Classification allows us to visualize differences in spectral signatures to differentiate between surfaces. With enough information, it is sometimes
[11:40] possible to tell the difference between species of plants. Some spectral differences between plant species may be subtle
[11:49] but are detectable as illustrated in this figure. Reflectance data is plotted here across wavelengths for a variety of species and
[11:57] the study is referenced below. For this training, we will specifically be looking at applications of airborne visual shortwave and infrared data to
[12:08] assist with species classification. Hyperspectral visible to shortwave infrared imaging spectroscopy data can be used to monitor and measure a wide
[12:17] array of environmental parameters such as climate variability, land cover distribution, seasonal cycles, and much more. Common sources of this data
[12:25] include AVIRIS next generation and PRISM. This visual shows the spectral coverage for a variety of satellites and sensors.
[12:35] AVIRIS NG has notable continuous coverage across the spectrum. We'll be focusing on it for this training. AVIRIS stands for airborne visible
[12:47] infrared imaging spectrometer next generation, AVIRIS NG. It was designed with the objective of supporting NASA science and applications
[12:57] by measuring spectra as images that record the interaction of light with matter. matter. These spectra are used to identify,
[13:04] measure, and monitor constituents of the Earth's surface and atmosphere. It is flown on several aircraft platforms listed here
[13:15] and has been flown over places such as North America, Europe, India, and as we have discussed today, South Africa.
[13:23] It has been active since 2009. So, AVIRIS next generation has 425 contiguous spectral bands with spectral coverage between 380
[13:38] to 2,510 nm. The spectral resolution is 5 nm plus minus 0.5 nm and pixel size is based on
[13:48] altitude. altitude. Here are some examples. AVIRIS next generation data can be applied to a variety of studies
[13:59] including oceanography, snow hydrology, geology, volcanology, soil and land management, atmospheric and aerosol studies, agriculture, and more. An additional example of where AVIRIS NG
[14:12] data has been used for biodiversity applications is the ABoVE campaign. The Arctic Boreal Vulnerability Experiment is a NASA field campaign that
[14:22] was conducted in Alaska and Western Canada as a large-scale study of environmental change and its implications for social-ecological
[14:30] systems. systems. ABoVE science objectives were on gaining a better understanding of the vulnerability and resilience of Arctic and Boreal ecosystems to
[14:42] environmental change, ultimately providing the scientific basis for informed decision-making. I've mentioned the objectives of the Bioscape campaign
[14:51] and I'd like to share where you can access data from the Bioscape campaign. So, So, data from Bioscape is hosted on NASA
[15:02] Earth Data including level three data which we'll be using for the demonstration. You can access the data directly via the links
[15:12] on this page, um but if you need a refresher on different data processing levels and the definitions of those, you
[15:20] You find a link here. With that, we're going to switch over to a brief overview on the fundamentals of
[15:29] machine learning for Earth science, just so we make sure we're all starting on the same page. So, before we get into the
[15:37] demonstration, I'm going to provide a few slides that are from our fundamentals of machine learning for Earth science webinar series to
[15:44] introduce the concept of machine learning as it is part of our methodology in our mapping exercise. So,
[15:53] So, as we know the Earth is an intricate and complex system, which can be difficult to study. Applying well-known and
[16:01] described mathematical models to the natural environment can be difficult. So, machine learning is a tool that can
[16:07] help us understand complex complex Earth science phenomena. Machine learning is a commonly better alternative for non-linear problems, and a number of
[16:19] researchers have found that machine learning out performs traditional statistical models in Earth science, such as characterizing forest canopy
[16:28] structure, predicting climate-induced range shifts, and delineating geologic facies. There are numerous ways in which machine learning can accelerate scientific
[16:42] research, such as increased efficiency, new insights and discoveries, and improved predictive modeling. Machine learning can help automate the analysis
[16:53] of large and complex data sets, allowing scientists to quickly process and analyze large amounts of data. It can help scientists identify new
[17:02] patterns and relationships in complex data sets, leading to new insights and discoveries. discoveries. It can also be used to build accurate
[17:10] predictive models that can help scientists better understand complex science phenomena. So, here is a general outline of the
[17:20] steps used when applying machine learning. As always, we start with our question or problem statement. We gather data and go through the
[17:28] pre-processing phase. This typically includes things like data clean up and preparation and is a crucial step. Often, it can take much
[17:38] longer than all the other steps as it helps us understand the data, its patterns, trends, and relationships as
[17:44] well as detect outliers and anomalies prior to using in our model. We determine our feature of interest and
[17:53] select the appropriate model from here. Now, we can go on to training our model, which is essentially connecting our data
[18:01] to an algorithm. This leverages sophisticated mathematical modeling to learn and develop predictions. We can test the model and check its
[18:10] accuracy, and depending on the results at this point, we may want to reconsider the algorithm we have selected or adjust
[18:18] parameters to improve performance. Ultimately, after iterations, we come to a model with a prediction output we are
[18:24] comfortable using. In machine learning algorithms, there are two broad categories that are most relevant in our science applications.
[18:36] Uh those are supervised and unsupervised learning. There is a third category that is also listed here, reinforcement
[18:44] learning, um but not commonly used in our science. You can see in this visual um some of the different applications
[18:51] that are used for um the different types of algorithms. Supervised Supervised learning involves presenting a machine learning algorithm with many examples of
[19:02] input-output pairs called the training set. set. It can be further divided according to the type of target that is being learned
[19:10] as either categorical, so classification does a given image, for example, does a given image show a star cluster or not? Or continuous,
[19:21] which is regression. And an example can be what is the temperature at a given location on Earth?
[19:28] The model is trained with labeled data sets, which allow the model to learn and grow more accurately
[19:34] over time. Unsupervised learning are not given a particular target. Rather, their task is to learn the natural
[19:43] structure or identify patterns or trends in the data set without being told what the structure is. Here, the model looks for patterns in
[19:53] unlabeled data. So, there are a variety of tools, including coding languages and software packages, that can assist us in applying
[20:01] machine learning. This is a nice visual with several represented here, but it's definitely not meant to be
[20:07] comprehensive. Some software tools we will utilize today include the programming language Python, as well as a Jupyter note
[20:17] notebook. notebook. Python is a simple, versatile, general-purpose programming language. It is the most used language for machine
[20:26] learning, and it has an active user and extensive library ecosystem to simplify data management and analysis. It is known to be beginner-friendly
[20:35] while still offering advanced users powerful analysis tools. Jupyter Notebook is an open-source web-based application, which allows us
[20:44] to create and share documents that contain code, equations, visualizations, and text. It Its uses include data cleaning and transformation, statistical
[20:53] modeling, data visualization, machine learning, etc. I'm looking forward to following along in the notebook while Michelle demonstrates for us in just a moment.
[21:05] Due to time constraints, we aren't going to review the intricacies between different algorithms, but if you would
[21:10] like to learn more, I highly encourage you to watch the fundamentals of machine learning learning for Earth science training videos.
[21:18] Before we jump into the demo, there are some big questions I would like you to present you for consideration as you
[21:25] look into your own applications of machine learning algorithms such as invasive species mapping. So, we always want to consider what is
[21:36] the scientific question we would like to address. address. And what information are we missing in order to answer this question?
[21:46] What data do we have available? Do we have a training set of data available? available? What's the structure of our data?
[21:57] Is Is our dependent variable a continuous or a discrete problem? Are there any performance requirements based on our science question?
[22:13] Is our software going to run locally, on the cloud, or on embedded hardware? And one big thing to consider is what's
[22:21] more important for our project. Inference time or model performance? Here on this graph, you can see some of
[22:29] the trade-off between speed and accuracy of some machine learning algorithms. Michelle, I'm going to pass it back to
[22:40] you to lead us through the demo. Okay, thank you again Sativa for that great introduction. We're going to go
[22:47] ahead and jump into the notebook example. example. Um the during the introduction, we paused for a minute and gave instructions on spinning
[22:59] up a a a environment that I'm showing you now. So, if you were successful in spinning this up, you should
[23:08] be here. If you don't see this screen, if you'll just click one of these launcher launcher tabs here, you'll you'll see what I'm
[23:18] seeing here. Sometimes it opens up to a terminal, which I'm going to go to, because the first thing we're going to
[23:25] do is we're going to clone a repository that has the notebooks available, and that will be a repository that will be
[23:35] available after the workshop, so you'll always have access to these notebooks. So, I'll go ahead and open a terminal.
[23:43] So, this is very much like a command line Unix environment. And we are going to to clone the repository that holds the
[23:52] notebook that we're going to run through today. So, to do that, we need you participant to go to
[24:02] this website, which is github.com /ornl daac daac /airborne. And once you're there, you'll see this repository page.
[24:27] And cloning the notebooks that you see here is is relatively straightforward. You'll go to this code block here.
[24:37] Make sure that https is selected. And you can use this copy link here to copy this URL.
[24:53] Going back to the terminal, we're going to do a very simple Git command. We're going to type Git, g i t,
[25:03] clone, clone, and then we can copy and paste the URL that we just grabbed. Hitting enter on my keyboard,
[25:18] you'll see that that Airborne repository is being copied into my managed environment, environment, which is different from your managed
[25:29] environment. Each participant has their own unique managed environment. So, if I make changes to the notebook, they're my
[25:37] changes. If you make changes to the notebook, they're your changes. So, you'll see now that you have an
[25:45] Airborne folder showing up in your table of contents. This is what we just copied over. over. You'll double-click into Airborne,
[25:55] double-click into notebooks. You actually have all of the notebooks that are in that repository for your use.
[26:04] We're going to focus today on the notebook that includes invasive in its title. So, the AVIRIS NextGen AVIRIS NG L3
[26:14] Invasive Species Notebook is what we're going to be going running through. If you'll double-click on that, that notebook will open,
[26:28] and we can start running it. A little bit of overview to start. As we As we introduced, this is a
[26:37] notebook that is mapping invasive species using supervised machine learning and the AVIRIS NextGen instrument data. This uh This data comes from uh the
[26:47] Bioscape campaign, which uh you were provided a lot of information in the introduction. So, I'll just, uh,
[26:56] welcome you to, uh, you know, click on any of these available links for more information. I do want to focus here on the data set
[27:06] that's being used. This tutorial uses AVIS NextGen Level 3, uh, a data set. And this is the, uh, citation for that
[27:18] data set. And the DOI. So, if you click on this DOI, you'll actually go to the landing page for this data set.
[27:28] Uh, the AVIS NextGen Level 3 data is a resampled and mosaic data set. So, the surface reflectance data derived from
[27:37] the AVIS NextGen instrument were resampled to a to a consistent 5-m spatial resolution, and mosaic to into a regular tile system
[27:50] of 807 tiles. So, this gives a level 3 data set, and level 3 data sets are defined here. And
[28:00] there's more information about data processing levels at this link. But, level 3 data are variables mapped on a uniform space-time grid,
[28:10] and they're they're usually complete and consistent, which this data set is. So, I want to give credit for this
[28:20] notebook. The contents of this notebook were first presented by a researcher named Glenn Moncrieff, who was a special
[28:27] special data scientist for the Nature Conservancy. And it was presented at a workshop on ARSET ORNL DAAC
[28:35] collaborative workshop, uh, whose, uh, information is available at this URL if you want to look at that.
[28:43] Importantly, the content for this, uh, notebook has been updated um, um by myself and my colleague Rupesh uh so
[28:53] that it is adjusted to access the published BioScape average next gen level three data that are now in netCDF
[29:03] formats and that are now distributed through the NASA Earth data uh website. So at the time of the Cape
[29:10] Town workshop, these data were not available. available. Uh the tutorial learning objectives are to understand how to inspect and prepare
[29:20] data for machine learning models, how to train and interpret a machine learning model, and how to apply that
[29:26] trained model to AVHRR imagery to create alien species maps. So let me go through a little bit if
[29:35] you're not uh used to um these Jupyter notebooks. There are a couple of ways to uh run a cell.
[29:45] And let's first start by loading these Python modules. Um this uh little triangle button right here right here
[29:54] will run a cell and you'll see while it's running this little asterisk is showing and once a cell is run, then it
[30:02] will become a numeric number. You can also run a cell just by doing on your computer shift and enter.
[30:11] So you'll see me running cells doing shift enter and not necessarily coming up here. I also want to note that if your
[30:19] notebook um becomes a little bit uh unresponsive, a couple of things that you can do and you might see me doing
[30:27] this through the tutorial. Uh you can come up to kernel and you can restart a kernel. kernel. You can restart and clear all outputs of
[30:35] a cell or you can run up to a selected cell. cell. So if your notebook becomes unresponsive, that's a way to manage
[30:44] that. that. Also, if you go under file and hub control panel, you can actually stop the server and then restart it. And
[30:55] sometimes that's necessary. So, as you're doing homework or have access to this hub environment for a couple of
[31:02] weeks after um this training, those are ways to uh get your notebook uh back to something that's active.
[31:14] A couple of practical details to start. Um I usually spend more time on this with uh with trainings, but we're going
[31:21] to um talk about We're going to use Earthdata authentication. So, I just want to introduce Earth Access, which is
[31:30] a Python library that simplifies data discovery and access to NASA Earthdata by providing an abstraction layer to
[31:39] NASA's APIs. So, there's more information on Earth Access. We'll be using it today throughout the notebooks for authentication,
[31:49] search, and access to uh direct cloud files. So, we'll actually run that here. Um by uh just demonstrating
[32:05] um a quick way that we're going to access the Bioscape data. Um I can use Earth Access to search all of NASA
[32:13] Earthdata and use the Bioscape project keyword, and you'll see that there are eight collections found. And I can list
[32:22] those collections. We're going to be accessing um this average next-gen level three three uh mosaic, and we're going to be
[32:31] accessing it using the DOI. So, later on in the tutorial, you'll see us using with access and the DOI for that.
[32:45] Okay, let's jump into our machine learning training then. Uh the first uh step of a machine learning is having uh
[32:54] data collections and labeling. So, we're going to explore a sample land type plot level data that we have. Uh we're using
[33:02] a small data set over the Cape Town of uh the Cape Town Peninsula of South Africa, Africa, uh which is a a sub uh area of where
[33:13] BiOSCAPE had collections. So, we have a a data set that's already uploaded for you uh called uh Cape Town
[33:23] Invasive. It's a geo package. So, we're going to first uh create a data frame to hold uh the classes that are within that
[33:33] uh this this data set. And you can see that there's a number of land types. Uh some of them are the invasive types that
[33:41] we're interested. Class six, for example, is Eucalyptus and class five is pine. pine. So, we'll go ahead and open that data
[33:51] set. And one thing to note is that this is again uploaded for you already in this shared public area
[33:59] uh in a BiOSCAPE Aviris NextGen Level 3 folder. So, we've opened up that geodata package and we're examining uh the the land
[34:14] types and the groups, which are important. important. Let's go ahead and summarize and visualize uh what is there. So, again,
[34:23] you can see the land types and you can see the number of points that have each of those land types.
[34:30] And you can also see the grouping. And grouping is going to be important in the machine learning because this is
[34:36] dividing our our data into training data and test or evaluation data. So that grouping is already available in this
[34:45] data set. And we can also visualize uh what this data looks like. So you can see the points here across uh
[34:55] the Cape Peninsula of South Africa. And we have here listed the different land types. So this is a nice interactive way
[35:05] of being able to zoom in and interact with this um with this this data set. Okay, now that we've looked at our uh
[35:17] plot level training data, we're going to uh start examining the imaging spectroscopy data. So we're going to log in here um and
[35:29] the using Earthdata access, um this jumped me into uh being authenticated uh because I already had this netrc
[35:40] file. You will be prompted with a uh a prompt to enter uh interactively your your Earthdata login
[35:52] username username and password. And once you do that, you'll be authenticated uh and you'll be uh able to access uh
[36:02] Earthdata. We're now going to search and access the Bioscape Average NextGen Level 3 data. Earlier, I demonstrated that we'll use
[36:14] the the DOI from that data set in order to uh specify which data set we want. We're also going to uh exclude a GeoJSON
[36:27] file that's in that data set using that wildcard. So, you can see with this data set that
[36:37] there are 870 granules that are in the average next gen level three data. So, let's look at just one of those
[36:48] granules at index 100. You can see that there are three data sets associated with the granule. We're interested in this data set, which
[36:59] is the RFL, the reflectance data in a netCDF format. I'm not going to do this, but if you
[37:07] click here, you will actually initiate downloading this data. So, you're logged in in with your NASA Earth Data login, so you
[37:18] have access to these data now. I don't recommend it. It's a big file. This is a browse image that's associated with this
[37:26] file. file. And that's also available. Let's take a peek at some of the metadata associated with this granule. And the The only reason I
[37:38] want to bring this up right now is because this geometry that's associated is the bounding box of each of the the
[37:48] granules, each of the flight lines of the data set that's available. And we're actually going to plot that up in the
[37:55] next step, and that's going to give us a window into the distribution of the data that's available.
[38:04] So, let's go ahead and do that. Next step is we're going to create and visualize bounding boxes for the average
[38:10] level three files. So, again, using that um um that metadata allows us to to be able to
[38:20] do this. So, here's a nice uh plot of all of the data sets, just their bounding boxes
[38:28] right now. But this shows the distribution of all of the tiled AVIRIS next gen data. We're going to focus Oops, I scrolled
[38:38] the wrong way. We're going to subset into this K point region because this is a lot of data.
[38:48] Before we subset that, let's take a look at just one of these AVIRIS reflectance files. So, by doing uh by using
[38:57] Earthdata Search, we're going to get direct access to these files on on NASA Earth Data Cloud. And you can again see
[39:06] that there's uh three different files associated with the granules, and we're interested and will visualize uh a netCDF file
[39:17] and a quick look GeoTIFF image. So, the next step is that we need to uh open the file.
[39:25] And you can see that that's open now, and we're provided um the URLs for that. And we'll go ahead and separate each of
[39:33] these files into its file type so that we can access them. To open the netCDF reflectance file,
[39:43] we're going to use xarray, which is uh a familiar open source uh project uh Python package. Um,
[39:51] and it's really powerful in that it it it it uh is able to recognize dimensions, coordinates, and attributes
[39:59] on top of the raw NumPy-like arrays. We're going to use a uh xarray's open data tree, and that's going to
[40:07] accommodate accommodate the uh hierarchical groupings that are in this AVIRIS next gen file. And we're going to
[40:14] extract the reflectance file from that. So, we'll go ahead and run this cell. And you'll see that the the Python
[40:28] package gives us a nice overview of what this data set looks like. So, there's uh 425 425 uh
[40:37] uh wavelengths associated with uh the AVIRIS NextGen data, and each of these tiles is divided into uh 200 by 200 uh X
[40:47] and Y. So, that's a little bit uh of information on the NetCDF structure of these files. Here, we're going to plot um just the
[40:59] red reflectance. So, this takes a minute because we're actually reading the data now, and we're accessing just one
[41:07] wavelength within the 425 bands. Uh we've we've selected wavelength 660, uh uh which is equivalent to uh a red band.
[41:19] So, we'll pause here for a minute and uh let this uh read and plot, so we can take a look
[41:25] at one of these files. So, now we see uh just one band here, the red reflectance again for the tile
[41:39] that we selected. So, now we're actually looking at and visualizing the AVIRIS NextGen reflectance data. Um Um So, just to get more of a true color
[41:51] image, we'll take a look at uh the quick look image, which is actually a uh a three-band GeoTIFF file. So, you can see
[41:59] that's much of a true color image. Now that we've explored the next the the NetCDF uh file structure and accessed
[42:12] those data and visualize it. We'll go ahead and subset um those over 800 tiles to just the
[42:21] intersection of the plot data that we looked at earlier. And again, we'll use Earth Access and the bounding box
[42:28] parameter to query granules that spatially intersect with the bounding box of that plot data or the the class
[42:36] data. data. So, we'll go ahead and run this cell. Uh that searches for that. And then uh we
[42:44] can plot that up. Again, just the bounding boxes are plotted here, um but it gives you an idea of each of
[42:51] the netCDF files that intersects uh the plot data over the Cape Peninsula. The next step is to extract spectra for
[43:04] each of the land plot uh plots that we have. So, we're familiar with the data and we want to get the average average
[43:12] spectral uh data at each label location. And the function below is going to do this and it's going to return the
[43:20] results as an XArray. So, we'll go ahead and run that. You'll see that the asterisk is still here
[43:30] indicating that this is still running. And you'll see that this is stepping through through uh each of the tiles that we uh
[43:41] that we provided above that are over the Cape Town area and it's extracting uh the points that intersect with each
[43:50] of those tiles. So, the first tile had 40 points in it. First data set had 40 points in it. And this is extracting the
[43:59] for each point it's extracting the uh 425 band spectra for each of those points. So, we'll go ahead and let that run
[44:13] through each of the tiles that we have from above. It's fun to watch it run through and to
[44:22] see the number of points that are within each of these data sets. So, we're concatenating all of these
[44:40] spectral spectral uh uh profiles into uh this ds_all file. And we can take a look at that. So, you
[44:54] can see there's uh 319 uh points that we had uh the the land class points and of course
[45:02] the the wavelengths of the average data, there's 425 uh uh We're going to clean up uh this
[45:10] dimension, this file dimension uh isn't needed. And we're going to do that with a helper function that we have uh
[45:17] included uh in the the repo. So, you can see we're now down to the 319 plots and the 425
[45:27] uh wavelengths. Now that we have the spectra, what we need to do is merge the point data uh
[45:36] and and include the labels class and group that we shared earlier. So, recall class is the the equivalent of a land
[45:45] cover type and the grouping is the training versus the evaluation data. So, we'll go ahead and run that.
[45:54] And we've defined all of the operators that we want, but uh xarray does uh has lazy computation, meaning that uh, we haven't
[46:05] forced these calculations and we have not stored them into memory. And so, that's the next step. Uh, this
[46:12] step takes a little bit of time, so we've uh, commented it out, but it is available here
[46:18] um, for you to run uh, on your own if if you want to. Um, because we're not running this, we
[46:24] have also included um, the the data here in the shared public area. So, it's output as this dsp.nc
[46:37] Okay, so now we've got uh, we've got this data into memory and we can start working with it.
[46:45] So, I just want to quickly I do this a few times throughout the workbook just for for uh, just for recall. Remember, class six
[46:53] is our is our invasive species. We're going to focus on the eucalyptus uh, in this notebook. So, for class six, what we're going to
[47:02] now do is we're going to plot the spectral profile that's been extracted for for each of those points
[47:08] um, that are eucalyptus or class six. So, here you can see for all of the points that were labeled eucalyptus,
[47:19] this is the spectral profile for each of of those plots that we just extracted. So, just to step back and say and share,
[47:28] you know, at this point if if uh, this is demonstrative of a machine learning workflow and certainly one that you can
[47:34] apply, but at this point um, you should closely inspect the spectra that you have for each class.
[47:41] And we can change the class that we're looking at um, just by changing uh, the the class value here. If you wanted
[47:49] to look at water, you could change that to eight and rerun that cell. Okay, the next step is to prep the
[47:57] spectral data uh, for the machine learning model. So, of course, part of getting prepping for a machine learning
[48:05] model is to make sure our our data are in good shape. A couple of things we're going to do is
[48:11] we're going to drop bad wavelengths, which is very common for these types of data to drop the atmospheric windows and and
[48:22] and typically the bands on the edges. And then we're also going to normalize the data. So, this first code block
[48:30] simply identifies wavelengths to drop and and applies that and you can see that we're now down to
[48:38] 325 wavelengths. And then the next thing we're going to do is we're going to we're going to normalize the data.
[48:46] And there are a number of different ways to normalize um data in a machine learning workflow. We're just going to do brightness
[48:55] normalization. normalization. And and in that we're going to scale the reflectance of each wavelength by the total brightness of the spectrum.
[49:03] So, we'll go ahead and run that. And then again for the same class six, the eucalyptus, we'll look at those normalized spectra.
[49:16] And you can see that as they're normalized that some of the oops, some of the variance um
[49:24] in in those spectra uh profiles for each of the plots is more is more normalized. Okay, well, congratulations. We have
[49:34] collected and labeled spectra data for each plot location and we're now going to train and evaluate a machine learning model with
[49:43] them. them. So, the machine learning model that we're going to use in this example is called X XGBoost.
[49:50] XGBoost is extreme gradient boosting. It's a class of models um, that is related to random forest. Uh, it's a little different than a
[50:01] random forest because gradient boosted trees differ in that they build trees sequentially and each new tree is
[50:09] focusing on correcting the errors of the previous tree. And this sequential approach allows XGBoost to create uh, more accurate
[50:18] models by iter- iteratively refining predictions and addressing the weaknesses of earlier trees. Um, so here we we're just importing
[50:29] libraries that we will use, the Python libraries. libraries. And, uh, just to recall that we have already divided our training data into
[50:41] uh, training, uh, which is labeled number one, and test or evaluation, which is labeled number two. The next step is we'll separate the data
[50:52] into training and evaluation subsets for the model training and evaluation, respectively. respectively. So, we have, uh, the training data set
[51:03] the evaluation or testing data set. Uh, and then the variable classes that are extracted from each from both the
[51:11] training and the testing data sets. So, we'll go ahead and run that cell. So, now we're going to train the machine
[51:19] learning model. Uh, and the steps that we're going to go through are, um, are below in the next code block.
[51:29] Um, but just to go through what what that code block does is we'll define the hyperparameter grid
[51:35] um, and then we'll create the XGBoost classifier object. Um, and then there's more information here, um, about setting up the grid
[51:45] search uh CV object, uh setting up the grid search and fitting fitting uh the CV object to our training data.
[51:56] And once the grid uh search completes, we'll print out uh the best set of the hyperparameters hyperparameters and the corresponding best score.
[52:06] There's more information here uh for your your um for you to take a look at. Go ahead
[52:12] and run the cell. Okay, and you can see that we have uh printed out uh some of these results. Um
[52:22] we've defined the learning rate, the maximum depth, and and so on in the parameter grid. And then you can see that our best score is
[52:30] about uh 64%. There are a few ways to evaluate the model performance. Um you can see that we have this uh
[52:40] object now called best model. So, we'll use best model to predict the classes of the test data.
[52:47] Um and we'll calculate the F1 score, um which is uh sort of a balance between the precision and the recall, and
[52:56] evaluate our overall performance. Um so, assessing the precision, um which uh kind of answers the question of all the instances that we labeled,
[53:08] for example, eucalyptus, you can walk through each of the classes, but we're going to focus on the invasive species.
[53:15] Uh how many were actually eucalyptus? And then recall um is uh answers the question of all the actual eucalyptus,
[53:23] how many did we identify correctly? Um so, again, we're we're using this uh the best model uh to evaluate the model
[53:33] performance. performance. So, um we'll go ahead and and look at each of these steps uh the step to uh calculate the accuracy
[53:42] and the F1 score and then we calculate the precision and the recall for class six um and print that out and then we'll
[53:51] actually plot a confusion matrix. I'll go ahead and run that cell. So, you can see that our accuracy uh is
[54:01] 66, which provides a general measure of how well the classifier performs overall. overall. Uh the F1 score
[54:11] uh is uh about the same, about 66%. Uh the precision, again measuring the proportion of true positive predictions
[54:20] relative to the total predictive positives for class and then uh the recall for the class for class six, which is the eucalyptus class
[54:31] um is about 71%. Uh and then the confusion matrix um which uh is printed here for all of the
[54:42] uh uh classes um that that we're uh modeling today. Uh the predicted label versus the true label
[54:51] and uh most uh most um mostly we'll look at this diagonal and uh that gives us an idea of how well
[55:03] each class is performing. All right. So, again want to remind us of the land cover types and cover types.
[55:18] Um Um and once once we've uh we have our our model uh trained, we uh want to uh step back
[55:28] and look at um and interpret and understand the results of of the model. And there's uh we'll share a couple of
[55:36] ways to do that. Um but it is crucial for understanding how models are making predictions um to interpret the outputs. And one way
[55:47] to do that is with this uh SHAP uh scores. And this is a popular method for interpreting model predictions.
[55:55] Uh so SHAP scores explain the contribution of each feature. Uh in our case, it's the wavelength. Um there's a
[56:02] lot of wavelengths to uh to take into account, but we'll look at uh the the wavelengths that contribute
[56:10] highly highly to each of the uh each of the class predictions. Um so each SHAP calculates how much the
[56:19] prediction changes when the feature is included compared to when it is not um considering all the possible
[56:26] combinations of features. So let's go ahead and uh initialize that, and then uh we have a couple of ways of actually visualizing
[56:40] um these uh SHAP predictions. One is called a force plot where we can see an individual prediction to inspect um how
[56:48] the input features have influenced its assignment to a class. Um so if we look at the uh 55th uh
[56:57] prediction we can see that the predicted class was eucalyptus, and the true class was eucalyptus. So uh that that
[57:06] predicted and true class were actually the same. And we can see in this force plot um the
[57:13] individual wavelengths that have contributed um positively and uh uh in a in a lower way, which is the blue
[57:24] score. So we have a note here that features pushing the prediction higher are shown in red, and those pushing the
[57:32] prediction lower are in blue. Um so, these red wavelengths were uh very uh instrumental in in that
[57:40] prediction. prediction. Uh we can look at another um uh individual prediction. Uh in this case, the predicted class was
[57:50] forest, but the actual true class was pine. pine. So, if you look at the uh forcing plot
[57:56] for that, um you can see that um the the blue scores are uh are contributing uh to the uh the lower
[58:09] predictions uh for that particular uh plot. plot. Uh a bee swarm is another way to look at
[58:17] these data. And this actually um going to go back to uh class 55, which was the eucalyptus
[58:26] plot, uh that um both the uh predicted class and the true class were eucalyptus. And so, this provides us with uh the
[58:36] wavelengths, but also uh a look at the feature values from low to high, and the impact that each of the uh predictors
[58:48] had had uh uh in evaluating that. So, this is a way to look at um individual uh
[58:56] plots uh and their contribution. And then uh finally, we'll overlay the actual spectra for an individual observation to understand how spectral
[59:08] features are contributing uh to this prediction. Um so, we'll go ahead and run this and look at what we mean by
[59:17] that. So, here we're able to um uh for that prediction, uh look at the actual uh uh spectral profile
[59:29] and then the importance of each of the individual wavelengths are plotted and and the darker the color um the higher
[59:37] the importance of that wavelength. So, this is a nice visualization um for that. And then the next step, of course, is to
[59:51] uh deploy the model that we have trained now now to the Aviris scenes. So, taking that trained model now
[59:59] and applying it to each of the Aviris scenes that we looked at above. Um the first thing we're going to do is
[1:00:07] we're actually going to limit these predictions predictions uh across the Aviris scenes to just the natural areas. So, I'm going to uh step
[1:00:16] back a minute and introduce uh another uh data set that's a loaded into that shared public area.
[1:00:24] Um Um that is going to uh limit the the uh predictions um to natural areas. And so, let me zoom
[1:00:38] in here to our Cape Town Peninsula study site and we're we're going to we're actually going to mask uh to this
[1:00:46] national park area. Uh so, we'll avoid the areas that uh aren't natural areas. Uh and then to do that, we'll also want
[1:00:55] to limit this the Aviris uh scenes uh the Aviris uh data, the level three data, just to those natural areas.
[1:01:05] Um so, again, just uh plotting out the bounding boxes of of that of that data that we're actually going to analyze.
[1:01:15] Okay. So, let's uh let's predict over just one Aviris scene to start. So, stepping back, we have our trained model
[1:01:23] and we're ready to deploy that to generate predictions over an entire average scene uh to look at the distribution of um
[1:01:33] invasive plants, but also uh the distribution of all of the eight nine classes that we have. So, this is uh big data um and the first
[1:01:45] step here um allows us to uh and optimize the uh the way that those data are being analyzed.
[1:01:56] Um and then we'll jump into the actual function here um that is uh doing the prediction. prediction. And that's divided into four steps
[1:02:07] and um we won't uh for the sake of time uh I won't read through the four steps.
[1:02:12] There's a lot of kind of unpacking the data and repacking the data that's necessary in order to run it through
[1:02:21] this particular machine learning model. Um Um and that's uh described here and also defined in this function.
[1:02:31] function. Um so, we'll go ahead and run that function. And I just want to show that that has
[1:02:39] run. run. Um and then we'll go ahead and run that on the single on just one single file.
[1:02:49] And we want to do that before we run it through um all each of the uh files that we're going to ask it to
[1:02:56] run. So, you'll see that uh that we're now running this prediction over the entire average average uh
[1:03:07] uh uh scene here. Uh this is the Whoops. This is the particular scene uh we're running it
[1:03:15] on. on. And you can see that um we have the nine classes that we're predicting over and then the 2000 by
[1:03:25] 2000 XY. Um I'll skip that. So, uh that's just again sharing the uh the labels. Um but now
[1:03:38] we're actually going to plot out um our our our prediction over the entire tile. This does take a minute to run
[1:03:49] um because we're uh extracting now class six from this uh this large netCDF file. Um so, we're just going to look at class
[1:04:03] six, the eucalyptus class, and see what the predictions are um for this this uh for this particular class.
[1:04:17] So, while this is running, um we'll just uh look at this next block of markdown. That um you know, machine learning
[1:04:24] models uh typically provide a single prediction of most likely outcomes. So, you get um a probability-like score
[1:04:34] that ranges from zero to one from these models, but don't think of these as true probabilities. probabilities. And we'll see this in the mapping.
[1:04:43] So, if for example, the model score is .6, .6, you know, that means that um it's more
[1:04:50] likely than a .5 prediction, less likely than a .7, um but it doesn't mean that your prediction is right, you know, six out
[1:05:00] of 10 times or 60 out of 100 times. Um and there's uh some information here if you want to
[1:05:07] uh dig into it um that uh shares a paper um that uh discusses how to get to a
[1:05:15] model's true uncertainty um using a technique called conformal predictions. predictions. So, the um reference to that paper
[1:05:25] is provided there. And once we have this output uh for one tile, um the next thing we'll do is
[1:05:34] we'll we'll uh show how this loops through each of the Abra's uh next-generation tiles and uh we have output for the entire
[1:05:45] peninsula peninsula uh that we'll take a look at. Okay. Hopefully, that was worth the wait. wait. I think so.
[1:05:57] All right. So, we can see that we have a probability map here. Let me uh get that in full screen.
[1:06:06] So, here's our class six eucalyptus uh probability mapping um uh across the entire scene but also masked out
[1:06:17] to just the natural areas that we uh shared earlier. So, um the probability mapping, you can see that there's uh a range from low to
[1:06:28] high high and you can see that the eucalyptus uh areas areas um um are mapped out. You can run this for each of the classes
[1:06:44] and you can see that the probability uh is ranging from uh a low probability, but that there is
[1:06:51] a probability up to a high probability for eucalyptus. Now that we've uh run that for one tile,
[1:07:04] we can uh loop through uh each of the tiles that we identified earlier. And these are the tiles again that
[1:07:18] over that intersected with the um the natural areas um of the uh Cape Town Peninsula areas. What we're seeing now is that it's
[1:07:39] running through one of the tiles. It's going to run through all I think there are nine or 10 tiles.
[1:07:45] Um that it'll run through and do the classification classification for. Okay, we can see that the asterisk has
[1:07:57] gone away and we have the code block number here. So, this block is finished. And again, this
[1:08:03] uh looped through each of the Avaris level three tiles and performed the calculation, the computation, the prediction across each
[1:08:14] of those tiles. Um so, you can see the listing of the tiles that are in the Cape Peninsula
[1:08:21] that had area in the natural area. So, we have results and we want to look at those.
[1:08:32] Um Um so, to do that, the next step is to merge and mosaic results. So, we have them now available as a list
[1:08:41] of X arrays, one for each scene. Um so, we'll want to combine these together into a single seamless mosaic
[1:08:48] for the entire Cape Peninsula. Um so, fortunately Rio X array uh has a mosaic function um that will go ahead and and do that in
[1:09:02] a simple way for us. Um so, we've imported that. Um the next code block is one that does
[1:09:13] take a very long time to run. And so, we're not going to run it here during the demonstration, but we do have
[1:09:19] the code for you. Um so, and we're outputting the data as a TIFF file. Um and so, the
[1:09:29] the the the advantage of doing the work in the cloud cloud and using that resource is evident here
[1:09:38] in that once you have that TIFF file, you can then download that TIFF file uh and use that in perhaps another level
[1:09:47] of analysis that that you would want to. Um We have a note here uh that we're using a lot of resources, that it might
[1:09:56] might be beneficial to uh restart uh the kernel. Um everything's been running great, so I'm not going to worry about
[1:10:03] that. that. Um Um but what we're going to do is go ahead and uh probably just re-imported uh
[1:10:13] um um uh uh libraries that we've already imported, but just to make sure. Um but the next thing we'll do is we'll go
[1:10:22] ahead and uh look at or open up the the the results of the predictions for the entire
[1:10:34] entire uh Cape Peninsula as that GeoTIFF file. And again, we've we've run that, we did the mosaic and the merge. And we have
[1:10:42] that stored uh in that shared area. Uh and finally, let's plot this up. Let's take a look. Um so, we're looking
[1:10:50] at band six, which again is the eucalyptus uh that invasive species that um is found across uh the Cape
[1:11:01] Peninsula. Peninsula. Um and looking at the probability mapping based on this machine learning uh and the the training data that we
[1:11:09] provided. So, So, this is the probability mapping of class six, which is the Eucalyptus class, over the entire Cape Peninsula having merged
[1:11:25] each of those nine or 10 different ABRS next gen scenes and also masked uh just two natural areas.
[1:11:34] Um Um so, so, each of these classes uh is available in the GeoTIFF file uh that we have uploaded uh and that is um
[1:11:47] the result then of applying our machine learning model to each of the ABRS scenes scenes uh across the Cape Peninsula.
[1:11:57] So, just a final note um that uh we'll uh want to inspect these results. We want to decide where they look good,
[1:12:06] where they don't look good um and think about if our workflow uh needs to be refined. Um
[1:12:15] Um and uh importantly looking at our training data and uh how that affects our outputs. So, again, I want to just give credit to
[1:12:27] uh Glenn Moncrieff uh who originally uh shared this uh at a BioScape workshop. Uh I want to thank my colleague Rupesh
[1:12:38] uh uh and uh he and I worked together to uh update this to the uh current uh distribution of ABRS next
[1:12:48] gen level three data and the netCDF file formats. formats. And uh I hope that you all have um
[1:12:57] had had a window into some image spectroscopy and some machine learning to map invasive species. Um and a final note is that this entire
[1:13:11] notebook notebook and the recording will be available the day after the training workshop. And and the the hub will remain available
[1:13:24] for for until October 14th. Um so that if processes are slow, if a lot of people are hitting the hub during the training,
[1:13:34] don't worry. Um you'll have access to it and you can have the time to wait for processes to run uh and maybe
[1:13:47] during times when we don't have such heavy usage with all of the participants logged in. Um so thank you very much.
[1:13:56] I'll turn it back over to Arset to close this out. Thank you so much for that demonstration, Michelle.
[1:14:09] So I'm just going to close this out and just a reminder of some of the considerations that you may want to
[1:14:15] consider when undertaking a remote sensing approach to monitoring invasives. Um there you know, always going to be factors that are unique to
[1:14:25] your situation, to your study. But some general things to keep in consideration are things such as cost that could be
[1:14:34] for you know compute resources necessary, actually collecting the data. Always be wary of scale mismatch for the
[1:14:44] question that you have in mind. What temporal resolution is available for the data that you can access? What
[1:14:53] is the range of spectral signatures that you need in order to answer the question do you have? Again, the general idea of
[1:15:00] availability. You know, is this data available in your area of interest interest and always complexity, you know, how long is it going to take to
[1:15:09] process and and analyze the data and is it within your your bandwidth to proceed with this type of analysis.
[1:15:20] And in summary, we provided an overview of the impacts of invasives and introduced the BioScape campaign. We
[1:15:28] highlighted airborne visible infrared imaging spectrometer next generation for biodiversity applications and data. We use a Jupyter notebook to access
[1:15:40] AVIRIS data located on the Earth data cloud. We demonstrated the classification of invasive species using a machine learning model for the greater
[1:15:49] Cape floristic region in South Africa. We discussed how image classification of airborne imaging spectroscopy and labeled field data can be used to map
[1:15:58] invasive species and reviewed key considerations for interpreting machine learning end products for invasive species mapping and land management
[1:16:07] decisions. decisions. So, a reminder there is one homework assignment. It's going to open later today and you can access it from the
[1:16:14] training page. You must submit your responses via Google Forms and turn this in by the 14th of October.
[1:16:23] You will need this in order to receive a certificate of completion. You also would have needed to attend the live
[1:16:30] webinar and you will receive your certificate via email approximately 2 months after the completion of the course.
[1:16:39] course. Here is some contact information for myself and the rest of the ecological conservation team. There's also a link here to our website,
[1:16:48] our YouTube, and we have a email for general inquiries, comments, etc. arset@gmail.com. arset@gmail.com. We encourage you to join our quarterly
[1:16:59] newsletter so you can stay up to date on our latest trainings. Here is a list of resources that you can
[1:17:10] use to supplement your learning. Thank you so much and with that we are going to go into the live Q&A.
[1:17:21] We appreciate you all sticking with us to the very end. Um just a reminder if you have any questions, you will go
[1:17:28] ahead and type those in the Q&A portion there at the bottom of the screen. If you click those three little
[1:17:34] dots, it should bring up the Q&A portion. portion. So I'm going to invite Michelle and Rupesh here to assist in answering the
[1:17:45] questions that you all have already submitted. Um the first being if there is a way to change resource
[1:17:52] allocation allocation once you're in the hub. And there are some instructions here for you on the screen. So if you go to file, hub
[1:18:01] control panel, stop my server, start my server, you should be able to see the options for environment and resource allocation
[1:18:08] again and you can um just update that for the specifications you you need. Um Great. So Michelle and Rupesh, thank you
[1:18:18] again. We really, you know, appreciate you being here to to share your expertise and provide this incredible
[1:18:26] demo. Um one of the questions that the group has if there are any labels available, if there are any labels
[1:18:36] available for this data in order to train supervised models. So, yeah. Uh I have here a note that hopefully
[1:18:46] this question was answered in the training and that we are using the class labels to train XG Boost. Those labels are what you
[1:18:55] would use in any other supervised classification model. Thank you, team, for for getting those responses typed out for us.
[1:19:04] Okay, and then there was a question about why the GeoJSON file is excluded. Michelle, um we have here noted that
[1:19:13] it's only used to provide the tile footprint and it isn't an image. Is there anything else that you would like
[1:19:19] to add here? Hi, Sativa. Um no, if you look at all of the data provided with that data set or
[1:19:29] sometimes we say collection, um we did create a a GeoJSON file of the footprints of the tile data, uh just uh for a
[1:19:42] uh sort of an an ancillary file to be able to view um you know, where where the tile data are, much like what we did
[1:19:51] when we plotted up all of the bounding boxes. So, we just didn't want to um you know, we were focused in on the
[1:19:59] Aviris Next Gen uh uh data and not that GeoJSON file. That was the only reason to exclude it, but it is
[1:20:07] available in the data set. Thank you, Michelle. Um it looks like we had um a participant who had some issues on line 13 with
[1:20:17] accessing the .gpk data um and they got a code block saying that data was not found. Um there was a suggestion here um
[1:20:27] and hopefully these instructions could help resolve the issue. Um so, yeah, try using this path here and
[1:20:41] it won't work if you place your notebooks in a different folder. So, just make sure everything is located in
[1:20:47] the correct path that you are referencing. Um there's a question about data being available for other locations globally.
[1:20:58] So, um this data specifically was collected for the Bioscape campaign in South Africa. Um so, it is a sensor that was placed on
[1:21:08] a plane and that data was gathered for a specific point in time in 2023 in um October and November, I believe. So,
[1:21:18] there is other um AVIRIS data available. Of course, your um availability will be limited uh temporally and spatially just depending
[1:21:30] on where these campaigns exist. Um so, there's no global coverage. We don't have something, you know, a plane flying
[1:21:38] consistently to gather this data in the same way that we have for this training. Um but, there are hyperspectral
[1:21:46] satellite-based sensors at lower spatial resolution that you can um check out. And there's also a comprehensive list of
[1:21:55] the AVIRIS next-gen data that can be found at the link here. And just a reminder that this Q&A will
[1:22:04] be posted to the training website for your reference. So, you will have access to all of these links.
[1:22:12] Okay. Okay. Um Um the next question is, "Can you please recommend resources that will help in understanding the code and the overall
[1:22:21] idea of analyzing satellite data?" I see the team has put some links here to the GitHub for the ORNL DAC as well as NASA
[1:22:30] Open Scapes and Earth Data. Um is there anything else that um Rupesh or Michelle you'd like to share as far as um
[1:22:41] you know, the methodology you provided for us today? Well, what a great question. Um there are many resources um
[1:22:54] that uh the data centers are are creating much like this and and have available available um on uh
[1:23:03] Earth Data NASA Earth Data um and Open Scapes is a group where uh many data center representatives get together
[1:23:12] um and create content to uh help um users to uh learn about cloud access, but also give um more in-depth tutorials
[1:23:26] um for analyzing in our case uh these airborne data resources, um but also some other uh satellite data and I will
[1:23:37] add uh another one to that list um that is specific to uh an instrument um that is very similar to the AVIRIS data we
[1:23:48] just looked at, but it is on the International Space Station. So, it's more orbital and has more coverage. It
[1:23:55] has lower spatial resolution, of course, as Satya said, but um it's called EMIT, e m i t, um and there are a lot of
[1:24:05] resources available um to analyze uh those data. Um and and that one comes to mind. Uh there are
[1:24:13] others um and I'll I'll find a link uh for EMIT and other um Earth Data uh tutorials.
[1:24:23] Thank you, Michelle. Uh so, the next question is asking if this cloud service will be available for
[1:24:30] future use, and how can we find hyperspectral imagery for other regions of the world and follow this workflow?
[1:24:36] Um so, just to note that this virtual environment was set up specifically for participants participants um in this training. So, you will have
[1:24:46] access to um the cloud computing for about 2 weeks in order for you to work through the um
[1:24:54] the notebook at your pace, right? I'm sure some of you, you know, weren't able to completely run through it live, which
[1:25:01] is totally fine, which is why we um have it open. It's also a place for you to
[1:25:07] be able to reference as you complete your homework assignment. So, um unfortunately, after that, it will be
[1:25:14] closed. Um but, you can still get NASA uh Earth observation data for um areas around the globe, um and the link
[1:25:26] is here. So, you can use uh Python Earth Access for module for searching pro- programmatically. So, um you can access
[1:25:36] Earth data through Python um in order to, you know, move forward with um other analyses, and although airborne coverage
[1:25:43] may be limited, um as uh Michelle referenced, we have some hyperspectral data from EMIT that could be a resource. So, yeah,
[1:25:53] unfortunately, the the virtual environment is specific to our time together, but it could be something that you um consider as um
[1:26:03] a resource for your own applications and and seeing what kind of cloud computing you might be able to access um through
[1:26:12] your own organizations and institutions. All right. So, the next question is was this just for one time period or did we
[1:26:22] load up a whole chunk of time series for the available data? So the data set that we used was created
[1:26:29] using flights for the time period of October 22nd, 2023 through November 26, 2023. 2023. And the source for that data is linked
[1:26:41] here. Okay, the next question is a really interesting question. How much does it generally cost to initiate an average
[1:26:53] next-gen project in an area that hasn't already been covered? How much extra does it cost to get level
[1:27:00] three data? And does that depend entirely upon the size of the project? Um Um Yeah, so I mean I would love if anybody
[1:27:10] else could chime in with specifics here. Um but so AVIRIS itself is usually flown for NASA-funded projects.
[1:27:20] Um maybe you can apply for something like a ROSES solicitation which, you know, is NASA-funded research. Um and if
[1:27:31] you have research ideas yourself, you could um look at the NSPIRES link here which regularly announces funding
[1:27:45] opportunities, but I don't know if anybody on the call has an estimate for what some of those costs
[1:27:53] are for um an AVIRIS campaign. Yeah, that's a great question, Sativa. I don't I don't know either. Um
[1:28:05] and so I will um so just a reminder that that AVIRIS uh next-gen and three other airborne instruments
[1:28:15] were flown during the BIOSCAPE campaign. Um and we provided links to some of the the website information with BIOSCAPE.
[1:28:26] And that was that was NASA's first first biodiversity biodiversity campaign. So it's a pretty cool area and and a pretty unique campaign.
[1:28:41] Um and so that was part of of a NASA funded project. And and so you know that
[1:28:49] PIs who proposed to that would have during that process requested those facility instruments. Facility instruments are typically
[1:29:02] our instruments that as as PIs are proposing that they would request request through the NASA airborne science
[1:29:12] program program to use those instruments and coordinate with that those programs to have those flights and and the data provided.
[1:29:22] So it it's it's very much wrapped in with with those proposals. And I'll just add that those instruments
[1:29:29] are are are often flown with NASA campaigns, but they will also fly to support other activities outside of of
[1:29:39] of even NASA. So it's not it's not just specific to NASA. Okay, the next question is asking if we
[1:29:51] can identify the labeled AVIRIS next gen data set for species. So I'm not sure if this is referring to
[1:30:01] the data within the notebook itself or generally. Um Any insight there, Michelle? Uh so the the data that we used in the
[1:30:14] notebook are available in the shared area. area. Um and that data was um part of the BioScape uh workshop that we did in Cape
[1:30:26] Town. Um so we used that. Um there uh uh you know, that's a great question and and the
[1:30:35] you know, for for anyone's sort of area of interest, um obvious you know, the the the the there's there's a a lot of effort
[1:30:45] that uh is required to uh do those sorts of uh field um observations and have those types of training data available.
[1:30:54] And so it you know, it would be something that would be unique to somebody's area of interest if they have
[1:31:01] those data or if they would need to um access those data. Um Um if uh so there there is a BioScape data
[1:31:11] that is posted um through NASA Earth data um and there uh it's not yet published, but there will
[1:31:19] be more um uh field data that um that was collected during the BioScape campaign that covers a broader region
[1:31:30] than that than that Cape Town area. Um so if you check back um to the BioScape project on NASA Earth
[1:31:37] data, um those data uh will become available once the PIs are ready to publish those data. Awesome.
[1:31:47] Awesome. The next question is about uh the minimum size for an area of interest um in order to
[1:31:54] uh apply this approach and be effective. Um this is specifically for someone who comes from a smaller community looking
[1:32:01] to track the spread of a certain invasive uh plant. Um but not sure if there's enough area
[1:32:07] to provide enough training. Um yeah, so um if you are if there is average data available for your
[1:32:16] location, um we did reference the pixel sizes that would be produced. So, um that if you want to reference the um
[1:32:29] the slide show. So, we could say at about 18-m resolution, which is you know, pretty pretty fine in scale. Um
[1:32:38] so, we would would think that it could work for for a smaller training data sets as long
[1:32:46] as the data sets are specially distributed across um ecosystem and vegetation communities that you have of interest. So,
[1:32:57] yeah, if the data the average data is available, it's it's at a pretty fine scale. Um if average data is not
[1:33:03] available, then it's just a matter of what is the spatial resolution available for the um data that does cover your area of
[1:33:13] interest. So, Tegan, I'll I'll jump in also. Um >> Yeah. So, when we when we clone the
[1:33:21] repository, there were several notebooks. And one of the notebooks is called average search and discovery. Um Um so, first of all, um
[1:33:32] you know, we're we're talking about average data, but um the techniques in that search and discovery notebook can
[1:33:38] be applied to um any data that is any NASA Earth data that's published. Um uh to look both specially and temporally
[1:33:52] for what data are in my study area. Um and you know, the the NASA Earth data has tens of thousands of data sets and
[1:34:01] so take a look at that notebook. Um, and and you know, you'll you'll have to extrapolate a little bit if you want to
[1:34:09] look for data outside of average, but you can you know, that that goes into some details using NASA Earth access like we
[1:34:16] did today to look at to be able to search for Earth data. There's also does a wonderful UI
[1:34:28] on NASA Earth data or it's called Earth data search and you can using that GUI interface, you know, you
[1:34:36] can put in spatial area of interest and or in a time series of of interest to see what
[1:34:44] overall of the NASA data, what data might be available. Um, and you'll want to filter by by project or instrument,
[1:34:54] you know, as you do that to to narrow your search. Otherwise, you'll get a lot of data because of all of the
[1:35:01] orbital data that's global. But yeah, take a look at that that notebook if you're interested in programmatically trying to search data
[1:35:11] NASA Earth data or just go to the Earth data search GUI and that's a wonderful um, application for searching data.
[1:35:25] Thank you, Michelle. So the next question is about tracking invasive animals. animals. So So you know, animals move around, so it is
[1:35:33] a little more difficult to use remote sensing for the tracking of animals, but we did have an introductory training
[1:35:42] to animal tracking earlier this year that if this is a topic of interest, I highly suggest that you check out.
[1:35:49] There's some Um, pretty interesting techniques being uh utilized in order to track invasive animals. Um, one thing to
[1:35:57] know is that if an animal could leave a mark in their environment, such as an invasive pest, um, which causes damage
[1:36:06] to a specific plant species, this could be a way to, you know, kind of know where um, this pest has been. Um,
[1:36:16] also things just general like habitat mapping, um, and the the suitability for different species to, um, you know,
[1:36:27] prob- probably be in an area, um, is is another way to think about it. So, is the habitat, you know, suitable for
[1:36:35] that particular uh invasive animal to, um, move to? And so, anyway, um, again, this is a a
[1:36:45] little more difficult because we just have timestamps uh from our remote sensing, but there are some creative ways that researchers
[1:36:55] are um, tracking tracking animals and using remote sensing to, um, support that. So, check out the the training on
[1:37:04] um, tracking of animals. The next question is asking what approach would be good to auto label some of the data to get more training
[1:37:16] data. data. So, uh the note here is you can probably use some auto labeling, but this this training data was collected using
[1:37:25] manual labeling. Just a different different way. Um, anything else anyone would like to add there? Uh yeah, that's a good question,
[1:37:41] Susheela, and uh that what you said is correct. That was uh field data that was collected, and so if you thought you
[1:37:48] needed more uh uh training data, I think um heading back out to the field is within the scope of
[1:37:56] what we presented here um um is to just get more field data. Thank you. Um Um we had a lot of participants from India.
[1:38:09] I I was noting where people were coming from as they entered the chat and the question uh that we have next is how
[1:38:17] much data is available for the Indian region? region? And uh cool thing is Avaris 3 is planned
[1:38:25] for India later this year. There'll be a campaign. So um you could check out the link to get more information.
[1:38:33] Yeah, certainly. Well, yeah, there there there have been other Avaris campaigns uh in India. So uh again, go to um the
[1:38:43] um you know, the or data search uh UI um and uh search over that spatial area and
[1:38:51] and limit filter your search to Avaris data and hopefully that will uh help you to um discover those data.
[1:39:03] Thank you. Um okay, so the next question is asking about um for more explanation on the tuning parameters we use for
[1:39:11] XGBoost. Um that's a a little bit out of the scope of uh this Q&A session itself. It'll take um
[1:39:18] quite a bit of time um and space. So we suggest you um look at some other online
[1:39:25] resources and we have um a document listed here that you can refer to. Yeah, and I'll just pop in here. This is
[1:39:34] Justin. Justin. Um to say that the important thing to take away from this is that um this
[1:39:39] example used a grid search to minimize the loss function. There are other ways of going about that, um but a really
[1:39:46] nice way to get comfortable with XGBoost and how it works is to manually try tuning some of these parameters and
[1:39:52] seeing how it changes your model. Thank you, Justin. All right, let's see what we have next. Um okay, we have a question. Is it
[1:40:05] possible to spectrally super resolve one hyperspectral image? For example, 10 broad bands to 100 bands by considering the
[1:40:16] nanometer interval. Um I am not sure I quite understand this question. Um I think I'm going to leave this one here
[1:40:29] and we can uh put our brains amongst the group and see if we have um a response
[1:40:35] that we can provide you later on this document. Thank you for your question. So, the next question is, are there any
[1:40:44] open source spectral libraries other than USGS, ASTER, etc. for invasive species? Um so, in addition to NASA
[1:40:52] Earth Data, there are openly available spectral libraries um and here is a link to the SIS um organization website.
[1:41:07] Okay. Uh so, can I get a note um how much longer we have for the Q&A from anyone online?
[1:41:17] Just so I know how much more of these we're going to be able to get through. Justin, just wanted to say we have about
[1:41:24] 15 minutes. Oh, okay. Great. We have plenty of time. So, let's see what we have next. Um okay, so I'm going to skip over to
[1:41:33] question 19. So, can I use the SAM with some threshold limit to filter the spectral signatures signatures to make the training data for training
[1:41:44] DL models? How can I set the threshold values for SAM? Um Um So, a note here is you should be able to
[1:41:53] use SAM to threshold limit. The threshold values will probably need some testing based on the area of interest.
[1:42:02] Would anyone online like to um add more to this? Yeah, I'll hop in to say that this um
[1:42:12] the answer to this question falls in the the category of questions we get a lot, which is um it really depends on what it
[1:42:19] is you're trying to study. So, it's best to think about your end goals first and then work backwards to think about the
[1:42:26] best method to get you there. Um Um This would be different if you're looking at something like um herbaceous
[1:42:33] vegetation that doesn't have a lot of spectral differentiation from the surroundings. Um would be different if if you do have like that high spectral
[1:42:42] variability. variability. So, So, it's not a satisfying answer, but uh it depends is the best I can do.
[1:42:51] Thank you, Justin. Uh the next question is, can this methodology be applied to data from hyperspectral satellite sensors? What
[1:43:00] would be recommended sensors and how would the spatial scale change? What about SAR and optical data? Uh great questions. So,
[1:43:10] uh we've mentioned EMIT a few times uh during this Q&A, so that could be one place to start. Uh we haven't personally
[1:43:20] went through this workflow with SAR optical data, but um you have the foundation uh with the code in order to
[1:43:28] start and see if it is um a viable method for your areas of interest. Maybe you can get back to us
[1:43:37] if you um produce a case study of your own that you'd like to share. So, Tiva, I'm going to jump in. Um I
[1:43:46] don't have edit access, but um other uh satellite mission that is relevant um to terrestrial applications is PACE, p a c
[1:43:57] e. e. Um so that is another um good instrument. There are also several European instruments that are not
[1:44:08] available through NASA Earth data, um but um there there are other uh satellites that that could be
[1:44:15] helpful. helpful. And then, um if we jump back up to question 18, um I want to point out a NASA campaign
[1:44:25] that um was very specific to that question, and it's a campaign or a project called SHIFT, and that's s h i f
[1:44:35] t. t. Um and if you'll uh there's a lot of data that's published uh around the SHIFT campaign, and the um
[1:44:47] purpose of that cam- campaign was actually to get a pretty dense temporal uh period of AVIRIS data um to look at
[1:44:59] the the uh phenology over um over uh uh growing season. Um so, uh check out that campaign, and there's
[1:45:10] a lot of um uh formal uh journal publications from the um from the science team uh that that were
[1:45:18] part of that campaign. Thank you, Michelle. And uh just a uh a little bit of a something to look
[1:45:28] forward to as we may be highlighting the shift campaign in a future ecological conservation training. So, make sure
[1:45:36] that you're signed up for the listserv so you know what trainings are SETS offering. And yeah, for you who asked
[1:45:42] this question specifically, that might be a place to you know, get some more information. All right, so
[1:45:52] we will go to question 21. And the question is, can I use the spectra of the species which were
[1:46:01] collected for a US species to study the same species grown in India with the available AVIRIS data?
[1:46:10] data? And specifically referencing the ISRO campaign of 2015, 16, and 18. So, I'm not familiar with these campaigns,
[1:46:25] this data set specifically. Anyone on the call have more information or is this something maybe we can look into?
[1:46:34] Yeah, I'm not sure if this has been done. So, I won't state this authoritatively, but using the spectra
[1:46:40] of of known species, if they are the same species growing in India, does make sense to me. The the spectra
[1:46:49] shouldn't change species to species very much. So, I think you should still be able to extract useful
[1:46:56] classification information. Great. Thank you, Justin. The next question is asking if this workflow and notebook could potentially be adapted
[1:47:11] for UAS imagery. And this participant specifically has a five-band multispectral camera. And And would like and would be working with low spectral
[1:47:24] resolution, resolution, but high spatial resolutions. Yeah, I'll hop back in here and say that if you have that that high spatial
[1:47:37] resolution, you might be looking at something like segmentation to actually look at the shape of the the target
[1:47:45] species um to make up for the low spectral resolution. resolution. Uh with only five bands, you're only
[1:47:52] getting five data points, so a lot of things look very similar. You're going to miss a lot of the detail in between
[1:47:58] those spectral bands. So, use uh a method that's going to leverage your high spatial resolution uh rather than relying on the five
[1:48:07] bands. bands. Yeah, and do you think it would be okay to say here if you have um
[1:48:13] if you identify uh a remote sensing data set that can kind of, you know, complement your analysis here. That
[1:48:22] might be something that is is a resource, right? So, um maybe not the same in the spatial resolution, but
[1:48:32] can definitely provide that background information on the uh spectral resolution side. Yeah, absolutely. If you've got um a
[1:48:43] hyperspectral overpass um around the same time or you can be reasonably certain that things haven't moved, um
[1:48:50] then you could probably bridge the gap between your high resolution uh high spectral resolution Sorry, high spatial resolution, low
[1:49:00] spectral resolution, and the the hyperspectral overpass using using your your UAS uh imagery as sort of a ground truthing.
[1:49:16] It looks like we have just one more question. Um These have been really great. Thank you all for your thoughtful
[1:49:23] questions and engagement in this training. training. So to our final question is when applying the machine learning training
[1:49:32] model, model, do you need to mask the training plots so you are only classifying test slash evaluation pixels?
[1:49:44] Um so the we we masked uh so in the tutorial um we we didn't necessarily mask to the
[1:49:54] training plots, um but we did select average data that were over the training plots. plots. Um and then
[1:50:06] uh we applied a mask that limited the classification or the um the the projections projections um just to natural areas.
[1:50:19] Um and so I I think that's that's cleaner. Um you know, otherwise it would be um projecting uh over, you know, urban
[1:50:30] areas and and areas that aren't natural areas. And and you would get an answer. Um so you don't have to apply that mask.
[1:50:37] Um but uh I think it did help to refine the results to something more meaningful. Um so I hope that answered the question.
[1:50:50] I'll just add that um for XGBoost when properly configured, uh it should be fairly robust over fitting. So um it if
[1:50:59] you're you're if you the area you're doing your your uh uh classification over is significantly larger than the number of of test plots
[1:51:08] you have, um you shouldn't have to worry too much about predicting on your training data. So, you should be able to
[1:51:16] reuse that. Um and this is just down to to the structure of the the gradient boosting uh tree. So, it's this this
[1:51:24] tree approach that makes XGBoost particularly robust to overfitting. Wonderful. It looks like one more question popped up in the chat. We've
[1:51:40] got to get that over to the Q&A document. Um this is a really interesting question. So, it's asking
[1:51:45] about uh the possibility of creating 3D models using the overlap of Aviris next gen data. So, the question being can 3D
[1:51:55] canopy models be generated for individual species? I I'm going to just uh just speak here again. Um just uh on
[1:52:11] intuition of, you know, the species level is something that's very difficult to do um even with the um
[1:52:20] spatial resolution that is provided by Aviris Aviris uh data. Um this really, you know, takes like some pretty intimate knowledge of
[1:52:31] your area of interest and um could potentially be modeled with um you know, knowledge uh like on the
[1:52:40] ground knowledge of individual species um locations. Um I'm wondering uh I'm thinking about uh you know, lidar data and um Jedi
[1:52:55] comes to mind, but the resolution's quite large. So, again, that species level detail is is hard to get at, but I'm wondering um
[1:53:05] anyone else on the on the call what um insights you all have about this question? I think it's really
[1:53:11] interesting. interesting. Yeah, Satya, that's a great answer. I'll also share that one of the other instruments that flew uh during the
[1:53:19] BIOSCAPE campaign during the BIOSCAPE campaign was Elvis. And that is uh not the rock and roll singer Elvis,
[1:53:28] but it's L V I S. Um and that's a full form uh lidar instrument. And so those data
[1:53:38] um are public um and if you need help finding it um just let us know and we'll
[1:53:45] point you to it. Um but there is some some kind of uh you know structural data that's available uh with the BIOSCAPE
[1:53:53] campaign. And like uh Satya said, getting at um you know, that kind of vegetation structure. Um having uh those
[1:54:03] lidar data was the um the purpose for that. Great question. Well, again, thank you all for being
[1:54:19] here. Thank you Michelle, Rupesh, and all of the ARSET family for hosting this webinar for uh providing some really
[1:54:28] insightful responses. And uh just a reminder, please complete your homework. And get that done before October 14th in
[1:54:37] order to receive a certificate of completion. completion. Um all materials will be posted to the training website um within 48 hours. And
[1:54:48] we are offering a a second um repeat of this training in just a little while. So there may be some more Q&A
[1:54:56] questions added to um this document or a separate one, but uh suggest you go there as well and check out what the
[1:55:05] rest of the community is asking. So, with that, we will close out. I hope you all have a wonderful rest of your
[1:55:14] day, wherever you are located in the world. And please come back and spend some time with us in a future training.
[1:55:22] Take care, everyone.
