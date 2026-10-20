# Access & Visualization of PACE/OCI Data using Python/Jupyter Notebook Software, Part 3/3

`https://www.youtube.com/watch?v=ef6AVyDsdmU` · id 322 · 1:33:43 · module 119 — Introduction to Plankton, Aerosol, Cloud, Ocean Ecosystem (PACE) Hyperspectral Observations for Water Quality Monitoring

[00:00] Hello everyone. Welcome back to this training on introduction to PACE hyperspectral observations for water quality monitoring. This is part three and today we're going
[00:11] to talk about access and visualization of PACE OCI data using Python and Jupiter notebook software. Our guest instructors today are doctors
[00:22] Anna Windel and Karina Pauline. Both are from NASA Goddard Space Flight Center and I will introduce them briefly.
[00:31] So today is the final concluding session of this training and our homework is posted on our website today.
[00:39] So please get the homework and it's due by 24th of October. So those of you who complete the homework by the deadline
[00:47] and who have attended all three live sessions will receive a certificate of completion. We'll start with a brief review of part
[00:58] two. We had Dr. Morgan McCubbin, PACE applications lead, talked about a number of things. She talked about applications program
[01:08] which is formed for decision-making activities in water resources, fisheries and ecosystem areas. We also saw examples of PACE early
[01:18] adopters. adopters. We saw case studies where aquaculture site selection is based on PACE data, also enhanced cholera risk modeling and
[01:28] also saw a web tool HyperCOAST for water quality monitoring in lakes and estuaries. estuaries. Then we had description and access to
[01:38] multiple levels of PACE data and there's a link to PACE data access landing page. Not only different levels,
[01:46] but we also saw products which are currently available, which are under preparation, some which are under testing and validation.
[01:55] So all the information can be found from here. here. Uh data access is uh through OB DAC page
[02:02] for level three and four products and level one and two products and three and four, they're all available from NASA
[02:08] Earth data search as well. We saw that. Uh we uh Morgan uh showed NASA WorldView snapshot, uh which provides near
[02:17] real-time base true color images and chlorophyll A concentration data. And then we had a brief demonstration of
[02:24] SeaDAS, where we uh looked at and analyzed preliminary analysis of uh base data, uh especially level two data.
[02:36] With that, we'll start with today's objectives. objectives. Um so, by the end of this training, should be able to access OCI remote
[02:44] sensing reflectances and level two and three water quality parameters from Earth data using open-source Python software and Jupyter notebooks.
[02:54] Uh then visualize OCI remote sensing reflectances and level two and three water quality parameters using the same
[03:01] software. And um identify steps to customize the provided Jupyter notebook software for other areas of interest and
[03:09] time frames. Again, as in the previous sessions, you can put your questions in the questions box and we will address them at the end
[03:20] of the webinar. And please feel free to enter your questions as we go, and we will try to
[03:25] get to all the questions during the question and answer session after the webinar. webinar. Uh the remainder of the questions will
[03:32] be answered in the question and answer document, which will be posted on the training website about a week after the
[03:38] training. training. So, with that, we invite our guest speakers and I want to introduce them. Uh Dr. Anna Windle, she is a satellite
[03:47] mission post-doctoral fellow here at NASA Goddard Space Flight Center. And she's working on developing methodologies to derive PACE
[03:56] phytoplankton community composition. She received her Master's of Environmental Management from Duke University and her PhD in Marine,
[04:04] Estuarine, and Environmental Sciences at the University of Maryland Center for Environmental Science at Horn Point Lab in Cambridge, Maryland.
[04:17] Her expertise in satellite and drone remote sensing ocean color and optical oceanography. oceanography. Our second speaker, Dr. Karina Pauline.
[04:26] She is a scientific designer in ocean ecology lab here at NASA Goddard Spaceflight Center. She received her
[04:36] Master's in environmental research from University of Sherbrooke in Canada and also her PhD in remote sensing and physics of remote sensing
[04:45] from University of Sherbrooke in Canada. So, we invite both of them to talk about PACE open-source software, Python and
[04:54] Jupyter Notebook to access and analyze and visualize data. So, take it away, Anna and Karina. Thank you.
[05:07] So, today we'll be accessing and visualizing PACE ocean color imagery data or OCI using Python and Jupyter
[05:15] Notebooks. Notebooks. So, with PACE we're entering or we have entered a new era for water quality monitoring. PACE launched earlier this
[05:24] year on February 8th, and PACE has three instruments and has the ocean color imager, which I mentioned, which is a
[05:31] hyperspectral imager, and it also has two polarimeters. So, we are also getting hyper and multi-spectral polarimetry data.
[05:39] So, with the with this these new streams of data, we have new data challenges. So, we're hoping this training helps
[05:46] some of you access and and analyze PACE data a little bit more easily. So, the first tutorial we're going to do
[05:54] is an orientation of Earth data Cloud access. access. So, before the Jupiter Notebook, I'm going to share a few slides to to set
[06:02] the stage. So, So, where is PACE located? It's located in the cloud. And what that means is it's located in
[06:12] computers that are physically in Oregon. So, it's in an Amazon Web Service or AWS Cloud that's that's in Oregon.
[06:20] This is actually a picture of the facility facility the Amazon Web Service facility that's full of computers that
[06:27] hosts not just PACE data, but all of NASA's Earth data science data. And this region is called AWS US West 2
[06:39] region. region. There's regions all over the country, but it's important to know this one because if you want to be processing as
[06:47] well in the cloud, it's it's helpful to know to set up your your um um your your cloud in into the same cloud region that
[06:56] the data's located. So, PACE data is located in AWS Cloud Simple Storage Service Buckets or S3 Buckets. There's a lot of cloud
[07:06] terminology that might be new to you. So, I recommend for a crash course on cloud terminology to check out the NASA
[07:13] Earth Data Cloud Cookbook and the links right here part of the slide. So, how can I access this PACE data
[07:20] that's in the cloud? So, there's three options options that that might have already been mentioned in part one or two. You can use Earth data
[07:29] search portal using the OB.DAAC. That's the Ocean Ocean Biology DAAC um portal. You can use the OB.DAAC Level 3
[07:38] and 4 browser or you can use the OB.DAAC file search. I just want to mention the OB DAC level
[07:46] 1 and 2 browser no longer supports access to PACE data. So, if you're familiar with a website that looks like
[07:53] this where you can go in, choose your satellite, choose the date, um um unfortunately, we can no longer use this
[08:00] with PACE. Um that's why we're teaching you new new ways to access and find data. So, these
[08:06] have links to go to the three different methods. We are going to be focusing on the first one um today, the Earth data
[08:13] search OB DAC portal. So, that looks like this. So, you navigate to um earthdata.nasa.gov/search. I usually um
[08:24] first thing I do is press browse portals on the left-hand side and I click on OB DAC
[08:29] DAC um um cuz I'm interested in the ocean biology DAC which has the PACE data. And then,
[08:36] you can also filter instruments. So, we have a bunch of instruments. Um OCI is the hyperspectral um
[08:43] ocean color imager that we're focusing on today. So, you can click that. And then, it takes you to a page where
[08:50] it lists all of the different data that OCI is collecting. So, um you can see here the different titles. We have
[08:57] 20 matching collections, level two, apparent optical properties. We have level 1B, level three. So, they're not really um
[09:05] organized in such a way, but you can just scroll through and see the different data types. If you press this
[09:11] I icon here, the information icon, it takes you to a page that looks like this where it gives you a little bit more
[09:16] information. So, it gives you the short name which is important. Um we'll come back to that in the coding tutorial, but
[09:23] this is where you can find the short names for different data sets. It also show shows you the region, the S3 bucket
[09:32] that I talked about, and the credentials. So, just a little bit more of where where data is located.
[09:37] You can download the data directly. If you have an Earthdata login um um username and password, you can log in
[09:44] here. You can download individual files just by clicking this icon. Downloads directly to your your local laptop or
[09:50] computer. You can add multiple files um and then and download um a bunch of different files at the same time. And
[09:58] when you click um a file on the right-hand side, it shows a map and it highlights the granule on the map. So,
[10:04] it's a nice way to to see what where um that data is is on the map. Um so, you
[10:10] know, if you want an open ocean granule, you probably wouldn't choose this one cuz it's over um the continent of
[10:15] Africa. Africa. And so, yeah, this is the last page of downloading data. You can um add a bunch
[10:23] um um you know, if you want 50 granules, 100 granules, you can add them here, download, um and and you can check the
[10:31] status of of the downloading right here. And you can pull these local files, so they're on your local laptop computer.
[10:39] You can pull them into whatever your you're used to analyzing satellite data with, whether that's Python, MATLAB, R.
[10:46] You can pull them into SeaDAS. They're there, you have them. Um you can do, you know, whatever you're
[10:51] used to with with say MODIS or or other other satellite data, you can do the same thing with PACE data.
[11:00] An alternative to what I just explained, um um an altern- alternative to the Earthdata Search GUI is this Earth Access Python
[11:08] library. So, this is a Python library you can import um and it's a really easy way to search, download, or stream NASA
[11:16] Earth Science data using a few lines of code. And what I what I mean by stream, just like you stream videos and movies
[11:23] on on Netflix, you can stream the data from the cloud to your local computer without ever having to download that
[11:30] data. So, that data never really touches your local your local system, but you have access to it.
[11:37] And so we'll explain that in the tutorial as well. So this Python library, it is under active development. If you have an
[11:45] issue, you can submit issues on their GitHub. It was originally developed at the National Snow and Ice Data Center,
[11:52] but it now has many contributors. Anyone can contribute. They have a nice contributing guide. And this is what
[11:58] we're going to use to access PACE data in the Jupiter notebook tutorials today. So there's two ways to run these Jupiter
[12:06] notebooks that we have set up. You can do it locally. So we have provided instructions in the pre-requisites
[12:14] of this training that has a predefined environment YAML file. So you can follow the instructions. We have Mac and
[12:21] Windows instructions to install that the to download that YAML file and install Jupiter Lab and the required Python
[12:28] libraries. And if you have any questions on that, you can ask us in the chat or afterwards.
[12:35] You can also run these Jupiter notebooks in the cloud. But you do have to have access to what's
[12:40] called an Elastic Compute Cloud or an EC2, such as a cloud-based Jupiter Hub. So some examples are Jupiter Hubs
[12:47] maintained by Open Scapes, Cryo Cloud, NASA Goddard has an Open Science Studio. These are Jupiter Hubs that are located in the cloud in the
[12:58] same region as where PACE data is located. So it makes streaming really simple. Um EC2 right. EC2 needs to be running in
[13:09] the AWS West US West 2 region. The NASA Earth Data Cloud Cookbook, I'm putting that link in again.
[13:17] Definitely encourage folks to check this out and read up on cloud computing and how to maybe set up
[13:23] your own EC2. There's some universities that have institu- institutional accounts. accounts. But since not everyone right now has
[13:30] equal access to an EC2 in the cloud, we're going to be demonstrating how to run these notebooks locally. So, we
[13:36] encourage you to use follow the instructions that we provide um um and install Jupyter Lab locally. So, we're going to go ahead and
[13:45] transition to the notebook now. Okay, so this is I'm going to start with the notebook already open and ready to
[13:52] go. So, if you have um if you successfully downloaded Jupyter Lab, um you should have in your left-hand side
[13:59] the contents. You'll have two notebooks. I only have one here, but you'll have the second one that Karina's going to do
[14:05] after this. And then you'll have your environment.yml file. And if you click on this notebook, it will open up on the
[14:12] right-hand side and it should look like this. this. So, So, we'll go ahead and get started. Um
[14:20] So, quick summary of this notebook. This is the orientation to Earth data cloud access. In this example, we will use the
[14:27] Earth Access Python package to search for PACE Ocean Color Imager products on NASA Earth data. Um some more links if you want to learn
[14:36] more about Earth Access. Um Um but in short, Earth Access helps authenticate with an Earth data login.
[14:43] It makes search easier and provides a streamlined way to load data into x-ray containers. X-ray is another Python
[14:50] library that we'll introduce if you're not familiar. Um and here's the documentation and just be aware that
[14:57] Earth Access is under active development. So, if something isn't working one day, um you know, you can
[15:02] submit an issue or or make sure you always have the most most updated version. version. So, learning objectives. At the end of
[15:10] this notebook, you should know how to store your NASA Earth data login credentials, how to use Earth Access to
[15:16] search for OCI data using search filters, how to download OCI data, how to use x-ray to plot data, and how to
[15:24] stream OCI data. So, we will start with step number one, setup. So, we begin by importing the
[15:32] packages. This is pretty standard for um any notebook. You'll see a bunch of imports at the beginning.
[15:38] Um Um and to run this notebook, I'll note you when you highlight a code a a chunk of
[15:44] code or cell of code, you can either press this button up here, this play. This is run this cell and advance to the
[15:51] next cell, or you can simply do shift enter. So, when I do shift enter, you'll see that the the little asterisk
[15:59] shows, that means it's running, and then when it changes to a number, it means it's done. You can also see it up here
[16:05] in this kernel status. When it's empty or um not filled, it's idle. When it's running, I'll run this again.
[16:12] Well, didn't work. Um but it's filled it's solid. So, you can tell when things are running by here or uh right here.
[16:21] So, these are um some packages, Earth Access, xarray, matplotlib, cartopy, num numpy, numpy, um um and then this xarray open data tree. So,
[16:31] these are all different Python libraries that we're importing that are already installed um because you downloaded this environment
[16:38] YAML file. Okay, step two, NASA Earth data authentication. So, hopefully you have all signed up for a NASA Earth data
[16:48] account. That was also one of the pre prerequisites for this training. So, you have a login, a username, and a
[16:54] password. password. So, what this does, this line of code right here, Earth Access, that's the the Python library, dot login persist equals
[17:03] true. You're going to run that, and if you're running it for the first time ever, you're going to get a pop-up that
[17:08] says, "Enter your username and password." So, go ahead and do that. Hopefully, you remember. Um and then
[17:15] what that does, it saves the username and password in a .netrc file that's saved in your home directory. So,
[17:22] that means it's hidden, so you might have to view hidden files, but that .netrc file is there forever. You never
[17:29] have to create that again. Um but you just have to run this line. So, this line of code finds that .netrc
[17:35] and it logs you into Earthdata Access or Earthdata, essentially. So, we'll go on to step number three,
[17:41] search for data. So, we're going to use the Earthdata Access.search_datasets Access.search_datasets um which accepts an instrument filter as
[17:49] an easy way to get started. So, we'll go ahead and run this line that um search_datasets that contains
[17:57] um the OCI instrument. And then we'll run this little loop that goes through um all of the results and prints the short
[18:06] name. So, remember the short name is the the name when you press the I icon or the information icon in the Earthdata
[18:14] GUI. So, we'll run this and we'll see that um all of the PACE OCI short names. So, you can see um
[18:22] all the way from level zero, level one, two, three. Um I I think in part one or
[18:27] two they go over the different um data types. Uh so, these are all of the different data types and and
[18:35] uh parameters that you can get uh with search_datasets. So, we'll use the search data function to find to find granules within a
[18:45] collection. So, we're going to use the short name PACE OCI level two, L2, BGC, which stands for biogeochemical
[18:53] properties, and near real-time or NRT. And then we're going to use the count argument to limit the number of
[19:00] granules. granules. Uh Uh so, we'll just do the just one one result of this short name. So, we'll go
[19:07] ahead and run that. Um Um but if we want to refine our search a little bit more,
[19:15] we can use um describe the the spatiotemporal domain of our case. So, we can use the temporal parameter to
[19:23] request a date range. So, in this case, we're going to find all of the the OCI level two BGC
[19:29] near real-time data in July. Uh, we can put a bounding box. So, put lat long coordinates um to request
[19:37] request granules that intersect with a bounding box. This is a box um located over the Chesapeake Bay
[19:44] on the East Coast of the US. And we can put a cloud cover threshold. So, 0 to 50, we want file we want data
[19:52] gran or um granules that have zero either zero to 50% cloud cover. So, we can run that.
[20:00] And then we can just do the earth access.search_data function again to search for data using those different
[20:06] filters. filters. So, So, we can print the results. So, remember this is saved as results. We can index
[20:14] the first, second, and third um granules in those results. And that looks like this. So, I'm going to run
[20:21] them all. And it shows you um the name of the data. You You can actually press this
[20:29] right here and it'll take you um might not work cuz I'm full Oh, yeah. It'll take you to um
[20:37] you know, a place where you can download it directly to your computer. So, that's kind of a a nice way um just like the
[20:43] GUI, but you can use this and then directly download the files this way. It also prints a useful quick look of
[20:50] the image. So, this is um I believe chlorophyll A concentration quick look. So, you can look if you you know, if
[20:56] you're wanting data in the Chesapeake Bay, you probably wouldn't choose this one because it doesn't look like there's
[21:00] a lot of data. You can zoom in. Um, Um, but yeah, really helpful to just see where uh you know, where data's being
[21:08] masked because of clouds and and where coverage is. So, um um and you can see cloud hosted equals
[21:16] true. That's because paste data is hosted in the cloud like we talked about. about. So, let's go ahead
[21:23] and go to step number four, download data. So, we're going to download a couple granules using the
[21:29] earthaccess.download earthaccess.download function. function. So, we're going to use search data and then we're going to use download. So,
[21:35] let's go ahead work This is the same um um lines of code that we ran before. So,
[21:41] we're finding level two BGC using the same um temporal bounding box cloud cover thresholds. And then we're going
[21:48] to do earthaccess.download. So, this does something different. Um it's saving the results into a file called level a folder called level two
[21:59] data. data. So, now on the left-hand side, you should see a folder that popped up. If you click in, you can see the four
[22:05] granules that um that the this search data um code found. So, remember it's all of the data that intersects the Chesapeake Bay
[22:18] in the month of July using 50% or less cloud threshold. So, we now have that data downloaded
[22:25] locally. locally. So, let's go ahead and open it. So, now that we have it downloaded, we're going to use xarray. So, we're
[22:33] importing xarray as xr. So, wherever you see xr, that is using the xarray Python library. And we're going to use the
[22:41] function open dataset and we're calling the first granule in the path. So, paths is the variable um
[22:50] that we're calling this download this download call. So, we're indexing the first granule in this paths variable.
[22:59] So, that looks like this if you run it. So, X-ray data set has nothing but attributes. So, all of
[23:07] these are grayed out except for attributes, which you can open and look at the different attributes, but that's
[23:13] all you can see. Um Um So, we're going to use this this function called X-ray open data tree,
[23:23] which we imported before. Um It's It's it is going to be implemented in into X-ray, um but it's under development.
[23:32] So, this is just a uh kind of quick way to to use it, and what it does is it
[23:38] puts the groups in the file. So, now we have attributes, but we also have groups. And when you expand groups, you
[23:45] can see the different level two groups within the netCDF file. So, you have sensor band per uh parameters with all of the
[23:53] variables. You have scan line attributes with all of the variables. You have geophysical data with all of the
[23:58] variables. This is probably the one that you're you're um interested in in the most cuz it contains the actual biogeochemical data
[24:07] like chlorophyll, uh particulate organic carbon, carbon, things like that. There's navigation data, which is the lat long, um
[24:16] and processing control. So, So, big uh data set that that you can open. We're going to merge all of those
[24:25] groups. So, um we're going to merge all of those groups into a single data set. So, that looks like this. So, now you
[24:31] have just one data set, all of the variables all together, and the dimensions dimensions um um within the netCDF.
[24:40] So, we have this data set called data set, um and we're going to do a quick plot of
[24:46] the chlorophyll A variable using image show. show. Um so, let's go ahead and run this. So, we're pulling the chlorophyll A
[24:55] variable, plotting it and the V max. That's the the range of chlorophyll values. So, we're only plotting values
[25:03] um um from 0 to 5 mg per cubic meter of chlorophyll. So, you can see um it's
[25:12] it's being quickly plotted um defined by the number of lines or scan line on the Y axis and pixels per line.
[25:20] So, if you want to plot with lat long as coordinates, you can do the same thing. So, um we have to set the
[25:27] coordinates here. Uh this is an X-ray function. And then, we're going to do the same thing, calling chlorophyll A,
[25:35] plotting it, but we're um going to declare that the X and Y are longitude latitude. So, we'll run that.
[25:42] And now, we have longitude on the X axis, latitude on the Y axis, and you can see that the
[25:49] um granule is shifted a little bit to match the lat long grid. And if you want to get fancy, you can
[25:56] use this Cartopy uh Python library and add um coastlines. So, here's the coastline of the East Coast of the
[26:05] US and grid lines uh and just to make it a little bit more pretty and useful. Okay, so that's quick and easy
[26:13] chlorophyll map. Let's now download level three mapped data. So, we're going to use a new search filter available in in Earth Access
[26:23] search data. The granule name argument accepts strings with the asterisk wildcard. So, you can see that right
[26:29] here. So, we need this to distinguish daily day from eight-day composites or monthly composites, and also to get all
[26:37] of the data in we want 0.1° resolution. So, this granule name parameter is new. Um we're now looking for data in April
[26:49] um soon after data was released. And the short name we're using is PACE OCI level three mapped chlorophyll near real time.
[26:58] So, let's go ahead and run all of this at the same time. You can see that earthaccess.download
[27:03] earthaccess.download is downloading the results of this searching and downloading it into a new folder called level three data. So,
[27:11] after this works, you should see on the left-hand side a new folder called level three data. It'll pop up after this downloads. There
[27:18] it is. So, if you go into that, you can see all of the level three map data that we just
[27:23] downloaded. downloaded. You can expand this to see Yep, we want a day. Um Um level three mapped. Doesn't sh- doesn't
[27:32] tell you the Oh, yes, it does. And we wanted 0.1 degree. So, that's there. We'll go back to this.
[27:42] So, same thing. We can use xarray to open the first level three map file. Looks like this.
[27:48] Um Um because level three map variables have lat long coordinates, it's possible to stack multiple granules along a new
[27:55] dimension that corresponds to time. So, this is uh a cool little feature. Instead of xarray open data set, we're
[28:04] going to use xarray open MF data set, which stands for multiple files. So, we're going to um
[28:13] run this this cell right here. We're using open MF data set. We're going to use all of the data files in paths,
[28:22] which is, remember, um um everything in that level three folder. We're going to use combine equals nested
[28:31] to combine combine the files according to the shape of the array of files. And we're going to use concatenate
[28:38] dimension date, uh which generates a new dimension in the combined data set, um because date is not an existing
[28:45] dimension. So, let's go ahead and run that and see what we get. So, up here we're opening just one file. We're
[28:52] indexing just the first file. We see lat long, we see the data variables, but when you do multiple files, MF dataset,
[29:01] we're combining all 13. We're adding a new dimension, so we have all 13 files in this dataset now, which is really
[29:09] helpful for like time series analysis or or or compositing. So, that's what we're going to show here.
[29:16] A common reason to generate a single dataset from multiple daily images is to create a composite. So, let's run this
[29:22] cell first. This is using um um just um this is a mapping a single day. So, you can see it's it's pulling
[29:33] chlorophyll, it's logging it right here. Um this is just some Python um or plotting code to to change
[29:42] the color palette, to change the aspect and size of the plot. And we're plotting the very first date. So, the first date
[29:50] uh uh in this dataset. So, you can see the the global map, but there's a lot of gaps because of cloud
[29:59] cover and because of the um um orbiting it doesn't doesn't cover all of the places on on the globe.
[30:09] So, So, what we want to do is composite all 13 images. So, we're doing that here. We're
[30:15] going to take the mean of all 13 images and we're going to plot that. So, see here we're calculating the mean. We're
[30:25] we're going to plot that chlorophyll average and it's going to look a little bit nicer. So, here we go. More gaps are filled. Um
[30:34] there's still some gaps because of cloud cover, but you get a more complete picture of chlorophyll A in the global
[30:39] oceans. And this is from 13 dates. So, if you added more dates, it would be um probably more filled because you have
[30:48] more data to fill in those gaps. Cool. Cool. Okay, last step, step seven. Um going to teach you how to stream data from the
[30:57] Earth Data Cloud. So, we've been doing this the whole time, Earth Access search data. We're going to continue doing that.
[31:06] Um but we're now going to if you see down here, we're going to use Earth Access open. That's a new function.
[31:12] We've been using Earth Access download. The open function is used when you want to directly read bytes from a remote file system, but not
[31:21] download a whole file. So, when running code on a host with direct access to the NASA Earth Data
[31:28] Cloud, aka a Jupyter Hub uh EC2 instance that is in the cloud, you don't necessarily need to
[31:35] download the data and Earth Access open is the way to go. If you use Earth Access open while not
[31:42] running on a remote host with direct access to the Earth to the Earth Data Cloud, you can still use it, but
[31:47] performance will be poor. And this isn't a problem problem with the cloud or with Earth Access. It has to do with the data
[31:53] format and may soon be improved. So, you can stream data uh uh whether you're running this notebook
[32:02] locally or in the cloud, but it's going to be a little bit more um efficient if you're cloud to cloud. If
[32:07] you're if you're running the Jupyter notebook in the cloud and you're accessing data in the cloud. But, we'll
[32:12] go ahead and show um how you do it here. So, we'll go ahead run this. We're searching for data. We're back to the
[32:19] level two BGC data. We're going to use that um that date range, B box, and clouds as before. And then we're going
[32:27] to do Earth Access open results. And you're just going to be able to tell it's going to take a little longer.
[32:33] So, it's not downloading the files to your local laptop or computer anymore, so you're not going to see new files on
[32:41] the left-hand side. It's streaming the data and it's being saved um um just it's it's just being streamed. It's
[32:49] not saving anywhere. So, you can see how long it's taking. Um Um I'll go ahead and and keep talking while
[32:56] it's still streaming. So, when this finishes, the paths list will contain references to the files on the remote system.
[33:06] Um Um when I run path, you'll see that the data's coming from this OB cumulus prod public. That's the the S3 bucket in the
[33:16] Amazon Web Service region um where the data's coming from. So, I I think it ran No, yeah, it ran. I
[33:26] guess it just didn't load here. Um so, yeah, when you run paths, you can see the the link here where the data's
[33:32] coming from. So, this OB cumulus prod prod public. But, you can open up the files the same
[33:38] way. You can use this open data tree indexing the first file in in paths, and it will take a little bit longer as you
[33:45] can see, but um you can open the data without it ever touching your local laptop um which is powerful, but
[33:54] at this time, if you're doing it locally, it could take a little bit longer than as if you just download the
[33:59] data. So, that's why we um we explained how to download the data locally. locally. So, this should run um
[34:07] but after that uh you have completed this notebook on the Earth Access Cloud Act um Earth Oopsie, Earth Data Cloud Access, and I
[34:15] encourage you now to check out the satellite data visualization notebook for more training. Thank you. Thank you, Anna, for this.
[34:27] Um now we're going to look at uh the visualization of optical remote sensing data for water quality monitoring.
[34:34] Um so, uh one thing you might have seen before in other parts of this training, but I think it's good to always good to
[34:41] be reminded of that is that all the data products from PACE are listed on the PACE data products table in the PACE
[34:50] website. So, if you want to find which data you are interested in visualizing and all those those products are are named and what
[35:03] goes behind those products for your your visualizations you should have a look at the PACE data products table and
[35:12] I'm going to just quickly introduce some of the products we're going to be visualizing today. First, we have the spectral remote sensing
[35:21] reflectances. reflectances. So, remote sensing reflectances are RRS as you may know it. Um this is a data product for ocean remote sensing
[35:33] that has existed for a while. For PACE, what is new is that it's now hyperspectral. We have 256 wavelengths
[35:41] in the visible. So, we're going to work on visualizing that today because that is a challenge to use that
[35:50] entire spectrum. Um there is in the table the surface reflectance product. We're not going to visualize it today. It's
[35:59] It's going to be used in some applications. Um and we have the apparent visible wavelength and that is
[36:07] a new data product from PACE too that will use the entire spectrum from OCI OCI and analyze it to tell us which
[36:16] wavelength dominates the spectrum. So, for example, it it will give us one wavelength that could be in the blue uh,
[36:25] closer to 400 nanometers and that would tell us that the water is bluer. If it gives us a wavelength more, closer to
[36:32] 550, 550, more green, that means that the water is greener. greener. So, that is very interesting new product that can be
[36:43] used for water quality monitoring, and we are going to visualize it today. If you want more information about how it those products
[36:52] are calculated, look at the right-hand side column, and click on on those links, and you will find all the technical documents, and
[37:01] the the the publications that allow us to to produce those data sets. Another place you should look at when
[37:14] you are preparing to visualize PACE data is the what you should know about PACE data page on our website.
[37:22] So, I we will learn different things about PACE data that are important. For example, we have a sun-synchronous polar orbit
[37:31] with PACE, so that means we are only getting data during the day. We have three instruments on board.
[37:38] We have OCI, the ocean color instrument, which is the the one that we are going to work with
[37:44] today. today. And we have two parameters, HARP2 and SPEX one. OB.DAAC OB.DAAC processes and distributes the data from
[37:54] PACE, PACE, and there's different data processing levels from the raw instrument data that comes from the satellite to level four
[38:03] geophysical products that are combined from level three maps. Today, we are going to work mostly with level two data, which is the derived
[38:13] geophysical science data products on granules. So, for a specific area that the the satellite has measured, you will have
[38:23] products like chlorophyll A, for example, those are in the level two products, or we will also use level three
[38:32] products, which are composited in the temporary or specially or both. So, you can have, for example, a global
[38:41] monthly map of a product like chlorophyll in the level three products. So, we are going to be visualizing
[38:48] those. those. There's different product maturity levels levels with with the satellite data. The The standard products need to be validated.
[39:00] We're still working on validation. PACE has been launched pretty recently, so that's still ongoing. So, for now, all the data is
[39:07] provisional or test. There are some issues with some bands that we are working on. In the meantime, you want to look at at
[39:19] that table of the problematic bands of the different instruments of PACE. So, So, this page is updated regularly, so you
[39:29] will have the latest information. But, for example, the bands that are red are to be avoided. So, if you're working on
[39:36] an algorithm or you're working on a visualization and you want to make sure your data is accurate, you
[39:44] want to avoid these wavelengths. So, So, just an example, where the OCI instrument goes from red band from blue
[39:55] bands to red bands, there is a discontinuity in the spectrum. So, that area around 600 nm should be avoided.
[40:03] So, you should have a look at that table whenever you want to prepare a visualization or you want to work with
[40:09] data. data. There's also events that can affect your our data collection. That's something that you can explore.
[40:21] So you you can choose different dates and you can see with the either the whole observatory or each of
[40:27] the individual instruments if uh there's an absence of data due to an event or just a reduced quality of data.
[40:38] Uh there's other information on that page but those are the the main ones I wanted to just remind you of today.
[40:47] Just to make sure we're ready to visualize visualize phase data. Now we are ready to go to the Jupiter
[40:56] notebook part of of this training to actually work on some visualization. And and we're going to do first an easy global chlorophyll a
[41:05] map, second a map of the global oceans in quasi true color, and then full remote sensing reflectance
[41:13] spectrum from global ocean, and water quality parameter map of a specific area. So let's jump to the Jupiter notebook.
[41:25] So we have our satellite data visualization notebook here. Hopefully you have your Earthdata login already and you have
[41:35] followed Anna's orientation to Earthdata cloud access tutorial. Those Those cover concepts that we will need tools and concepts we will need for this part
[41:49] of the tutorial. So again, I'm going to quickly repeat what we're going to do. We're going to
[41:55] create a quick global chlorophyll map from OCI data. We're going to create a quasi true color image from OCI data, a
[42:02] full and interactive remote sensing reflectance spectrum, and we're going to map a water quality product over a
[42:09] specific area. Let's get started. First our imports, so for data visualization visualization there are some specific imports
[42:21] some specific libraries that you will want to import. So we have a whole of views here. We have pillow.
[42:29] We have cartopy with the cartopy image styles. And we have the panel widgets. Other Other libraries you have seen before in the
[42:43] previous training. So I'm going to go ahead and import these. Then we want then we want to authenticate using Earth
[42:55] Access. Now we're going to download some data. So So first we're building building easy global chlorophyll a map.
[43:08] So we will need the chlorophyll a level 3 product for that. We are searching for that type of product here.
[43:18] So that's a short name. We are looking for a monthly product and a 0.1 degree resolution and we're
[43:25] looking at the month of August because that's the latest month we are able to access here. So we can go ahead and
[43:32] download it. It will create the hill tree data folder here. Like Anna has showed you. Just wait a second. There we go.
[43:45] Now we can go ahead and look at our data set. So we can see we have the chlorophyll a variable that
[43:51] we're interested in and the geographical coordinates because it's a level 3 file. So it's already mapped mapped along latitude and longitude.
[44:04] Now we can just name a variable from the variable in the data set and we're already ready to map. So we're using the
[44:13] plot function to map your your we're using the Veridis color map. This is the default color map with Python.
[44:21] I find that it works well for chlorophyll but there are many other color maps from that protein that you
[44:27] should explore. Feel free to to play with that. We are using the road with equal true argument because we want to remove
[44:39] outliers and we are setting our figure size and aspect ratio. So here we are already a very simple
[44:55] global chlorophyll a map from a level three product. Now let's move to a slightly more complex visualization. We're going to
[45:04] work on a global ocean in quasi true color map. So quasi true color comes from the fact that when we build
[45:13] true color images something that looks similar to a photograph that we will take. So those are made with red, green
[45:21] and blue channels so RGB. True color satellite image for for our data sets comes from a surface reflectance product. For
[45:35] a quasi true color it's the remote sensing reflectance that we're using. So the product is going to be similar to
[45:41] true color but not quite so that's why we call it quasi true color. So we're using the remote sensing reflectance as
[45:47] I said RS so we're going to get that data set. We want a global map so I
[45:54] we're going with that level three file and we're getting a monthly product to uh uh the least amount of clouds that we can
[46:03] get and we again are using the 0.1 degree resolution and the month of August. Let's download this.
[46:18] Here we go. Now, we're ready to have a look at our data set. Uh so, here we see latitude,
[46:26] longitude, RRS and we see wavelength because um our RRS is a multi-dimensional variable and we are using a 256
[46:40] different wavelengths with remote sensing reflectance compared to our previous variable we used which was just chlorophyll which was just one
[46:49] dimension. So, with remote sensing reflectance we have all the wavelengths. Um so, we can have a look at
[46:57] all the wavelengths that are available. Um so, I wanted to list them all here because in the next step we have to
[47:05] choose a wavelength. Um for a true color image or a quasi true color image, we're interested in getting
[47:13] wavelengths that are red, green and blue to go in our red, green and blue channels. channels. Um so,
[47:20] we're going with 645 for red, 555 for green and 450 for blue. If you're interested in building a false
[47:30] color image for some application you have, have, that's possible. You just use the different wavelength that you're
[47:37] interested in that will highlight feature. feature. But, it's it's the same principle. But, here we're staying with red, green and
[47:45] blue. So, you can choose different wavelengths of red, green and blue because we have so many to choose from in a hyperspectral
[47:52] data set. These are some that give good results, but they're not the only ones, so feel free to explore that.
[48:00] So, here we're going to do our data set which is reduced now with just our three our three wavelengths that we chose.
[48:11] And then we are going to name these with our red, green, and blue channels. So, now we have the channel added
[48:19] here. here. And now we're ready for our first visualization. We are going to show these three different channels
[48:27] individually in a plot with three subplots. subplots. And we're going to share the same x-axis. And then we're going to build
[48:37] every every one of these plots individually with their own color map. So, we'll have the red plot
[48:45] is going to be red, the green plot is going to be green like this. And it's we're plotting it on longitudes and
[48:53] latitudes. So, we can see here we have our three channels. They show different parts of the data.
[49:03] But now we want to make an RGB image, so we want to combine these three together. So, we're going to use the image show
[49:11] function to do that. So, we're going to build a figure, set a figure size. We're going to tell
[49:20] CartoPy that the data is on the flat carrier projection. We're going to add coastlines. We can choose the color of the coastlines, the
[49:30] line width, the transparency with the alpha. alpha. And we can change the background color. Here we're using white.
[49:39] And then we're plotting with the longitude and latitude. And And I'm adjusting the Vmin and Vmax here
[49:48] because with remote sensing data uh we're building true color or quasi true color imagery, um it there's a very
[49:56] wide dynamic range. So, it can appear very dark. Um so, we want to reduce that range a little bit. That's That's how we
[50:05] uh we do it with the Vmin and Vmax variables. Uh so, um that's a matter of taste and what you
[50:12] want to represent in your image. Do you want something more realistic? Do you want to represent uh to
[50:18] highlight uh some features. Uh so, you're welcome to explore different values with these and see what works best for you. Interpolation equals
[50:29] none um is important here because we're uh uh actually compressing an image. So, we're using a larger data set showing it in a
[50:38] smaller window. Um it will make a sharper image if we don't do interpolation. Interpolation works if we're going from a smaller data set and
[50:48] we want to stretch it. So, that's why we turn it off here. So, you can see that
[50:53] the remote sensing reflectance product doesn't cover land. Um so, we might be interested in adding a layer here to
[51:02] fill that gap. Um so, we will we will add a background map. So, here we're building a figure again.
[51:12] Again, Again, we our data is in the blood carrier projection. So, we're letting Cartopy know that. And uh we are um using the
[51:23] whole map. So, we are also letting Cartopy know that. And we are adding the background image. There are many choices
[51:32] of maps in Cartopy. Here, we're using the basic satellite view of Google Maps. Um and we are then building the same
[51:42] remote sensing reflectance map that we had with that background. Here we go. And we can even zoom in in a
[51:50] region of interest with this. So, we'll use the set extent function for that. So, we'll set our extent with the
[52:00] geographical coordinates of our region. Here we're going to zoom on the Chesapeake Bay region. And we're building then the basic same
[52:09] map with a background. Sometimes you might want to make sure your your layer with the data of interest is in the
[52:20] right Z order. So, I'm setting that here for that reason. So, here. So, we can see the remote sensing
[52:34] reflectance map here with a more or less realistic colors. We can see that it's different in the
[52:42] Chesapeake Bay from the open ocean. So, that all makes sense. That's good. We have the Google Maps background here.
[52:49] And we have our coastline from Cartopy. All in the same projection. So, that's that's what we want here.
[52:58] Now, we have only explored three of the 256 wavelengths of OCI. So, we want to play with the whole spectrum. So, let's
[53:06] get started with that. So, not only do we want to look at the whole spectrum, but we want to build an interactive map
[53:15] that will allow us to look at the spectrum at different locations. For that, we will use the whole views
[53:22] extension Bokeh, which is very useful to build interactive visualizations in Python. So, we are going to download a level
[53:31] three remote sensing reflectance map again, just like the the previous product. product. Actually, so we're doing a monthly 0.1
[53:41] degree resolution for the month of August. Then we are going to uh build a function um that uh
[53:51] uh allows us uh to uh select a wavelength that we're interested in and then uh build an image
[53:59] uh at that wavelength of the remote sensing uh reflectance along a lot longitude and latitudes. I'm just going
[54:06] to wait for the map to build. So, we here use that function with a single wavelength uh the 268 nanometers. Um uh
[54:15] so, we see the the map at that wavelength. And here you see uh there's information when I hover over it. So, we
[54:22] see the information in the data set, the attitude, the longitude, and the remote sensing reflectance that changes when I
[54:31] when I move. This is because we have the tools equals over option here. So, um that's an interactive map. You
[54:39] can zoom in. You can hover. But, that's not the spectrum that we're interested in, right? We only see one band. So, we
[54:47] have to build a function to explore the spectrum. Uh so, we're doing that here. Uh we're going uh to build an array
[54:57] um um that um when we uh select longitude and latitude will uh give us a curve with uh
[55:07] the wavelengths and the remote sensing reflectance or our spectrum. And so, we are selecting here uh the the location,
[55:16] so pixel 00 in this image. And we get the spectrum at that exact uh location. And now we want to
[55:27] build our interactive maps that combines um those uh two uh visualizations. So, we will be able to click on the map uh to see the
[55:38] the spectrum changing at the different locations. So, um first we are building a slider that will allow us to choose uh
[55:46] the the wavelength uh for the background map. And then we are building the capability to show the spectrum at the point that
[55:59] we click on the map. Oh. Oh. We see the slider here and we're building our map. Here we go.
[56:17] So, there's still that hover function, but when I click, you can see the spectrum here on the right changes. So,
[56:24] for example, if I look at a place in the wide open ocean, the spectrum looks like this, but if I
[56:30] look uh in a coastal region, it's very different. Um so, uh this is a very very uh
[56:39] uh interactive and interesting map that you can build. Uh you can zoom in, as you can see, um you can uh save uh that
[56:48] figure uh when you're you have you're happy with the location you have and the spectrum, you can save
[56:54] that. that. So, um this is our interactive figure. And a way to explore the whole spectrum from OCI.
[57:05] Now, we're going to uh use some of the tools that we've seen before uh to build a water quality map of a specific area.
[57:14] Uh so, we're going to search uh for the different data sets uh from OCI and have a look at because we're interested in uh
[57:24] data uh products that tell us about water quality. So, there's uh many data suites that will give us that. Um but
[57:32] the one that we're going to look at today is the apparent optical properties suite, suite, uh, so AOP, and it's it's a level two
[57:40] product. Uh, so we're working with a single scene, uh, a single location here. here. And And but other suites are available, and feel
[57:51] free to explore that there. Again, in the data products table, you'll get more information about what's in those
[57:57] suites, what products are there. Um, and yeah, uh, we're going to look at one uh, water quality product, uh, in that AOP
[58:05] suite, which is, uh, the um, well, first, I'm sorry. Okay. Okay, I'm sorry. I'll I'll do this
[58:12] again. again. Uh, we're going, uh, to download, uh, that AOP, uh, suite file. We're going to uh, select, uh,
[58:23] specific time, uh, so during the month of August, in the location we're interested in. So, uh, we're working,
[58:30] uh, in North America here. Uh, we don't want too many clouds, so we're limiting, uh, the data to the amount of clouds in
[58:38] the the in the data set. And uh, we're searching for a level two AOP suite product. So, here we have downloaded our data,
[58:49] and we can have a look at that data set. It's going to be a little bit different
[58:53] from, uh, the level three data sets that we have worked on before. So, we can look at the data tree.
[59:00] Um, Um, you can see the groups here that you've seen in the previous, uh, training with Anna.
[59:07] Anna. Um, and as, uh, she showed you, uh, the data variables, uh, that we're most interested in are in the geophysical
[59:16] data group. Uh, so we can see here, in the AOP suite, we can find the remote sensing reflectances and their
[59:22] uncertainties. uncertainties. Uh, we have some atmospheric products, and we have AVW, which is the apparent visible wavelength product I I
[59:32] introduced a little bit before. Um the reference uh for that product is here. If you're interested in digging
[59:39] more into it, uh it is a new product uh coming with PACE. Again, that uses the entire range of wavelengths from OCI and
[59:48] analyzes it to uh find the dominant wavelength or the dominant color of the water in the area uh you have. So, it
[59:56] goes from 400 to 700 nm. So, if it's closer to 400, closer to blue, the water is more blue. If it's closer to 700, uh
[1:00:05] it's closer to red. So, it gives an idea of the water quality. So, now we can merge all the groups in
[1:00:17] that data set um um to have our location with our variables, as we can see here. And then uh we are going to
[1:00:34] uh make our first plot uh using uh the longitude and latitude to uh make a map of our whole scene. Uh we are using the
[1:00:42] viridis color map again, cuz I feel it's a good match for the AVW data set. But again, feel free to explore all the
[1:00:50] color maps from matplotlib, and you can also um import your own uh or do a custom color maps.
[1:01:01] So, we have the map of our whole scene with the longitude and latitude. Um Um and we have the apparent visible
[1:01:09] wavelength variable here mapped. So, what is uh more um towards the blue uh is purple on this map. Uh so, the
[1:01:17] bluest waters are here, and uh it goes to 590 here, so it's more uh um more towards green or yellow.
[1:01:28] Uh, so we can see the places where the water is um less blue, for sure. So, now we're going to build our figure
[1:01:38] of our uh specific region of interest here. So, we're interested in um a region around the Great Lakes. Um so,
[1:01:45] for that we're going to use the set extent function that we've seen before. So, so we will set our extent uh to uh
[1:01:52] these coordinates around the Great Lakes. Um we're uh going again to tell Cartopy that we're using the flat
[1:02:00] carrier projection. And again, for our set extent. And uh we're going to add a background image. Um in this case, we're using a
[1:02:08] different background image than the um satellite Google Maps that we've used before. So, this one is a more generic
[1:02:17] background map. Um we uh are using a uh uh the number here to set the the level of
[1:02:25] details um of of the background map. And and we will add grid lines. Uh so, here I do not uh draw the labels from
[1:02:35] the grid lines. I didn't like um how far apart they were or how close they were together. So, I set custom
[1:02:42] ticks. So, that's something that you can do. So, I also wanted to show you how to do this here. Um and uh so, also we can
[1:02:50] choose a line width of the grid lines, their color, the transparency, and the line style. Um and then we're building our AVW map
[1:03:00] again along the along the longitude and latitude with the viridis color map. Uh, here we go. We have our water
[1:03:13] quality map of our region of interest around the Great Lakes. It has a background map here to fill the empty
[1:03:19] space and it's using the viridis color map. So, we can see what is more blue here is waters that are more blue and
[1:03:29] what is more towards the yellow is water that is more towards the yellow in reality, too. So, it tells us about water quality in
[1:03:38] that region it's showing this ABW product that is a new product from PACE. I encourage you to
[1:03:47] to work with it with that new product and other products from PACE. Again, look at the data products table for that.
[1:03:56] I'm I'm going to quickly go back to my slides here. Um Um I'm going to go back to my slides to
[1:04:08] to thank our colleague Ian Carroll who helped us work on these Jupiter notebooks and on these today.
[1:04:17] So, this is the the end of my part here. So, thank you for attending this training. Thank you so much Anna and Karina for
[1:04:31] your presentations and demonstrations. Very useful to work with PACE data. We learned about PACE data access and
[1:04:41] visualization using Python libraries and Jupiter notebooks. With that, we are concluding this three-part series on water quality monitoring using PACE
[1:04:54] and let's look at the training summary. We started in part one, overview of PACE and PACE sensors. Dr. Mannino talked
[1:05:04] about the instruments they're flying on PACE, OCI, HARP2 and SPEX1. OCI observations are useful for water quality applications.
[1:05:16] But PACE data products are also available for oceans, estuaries, atmosphere, and land everywhere. HARP two and Specs one, which are
[1:05:24] polarimeters, they will aid in atmospheric correction. There are several advancements with PACE ocean color instrument. As we saw,
[1:05:35] it is hyperspectral from 315 to 895 nm with 5 nm bandwidths and spectral sampling steps of 1.25 to 2.5 nm.
[1:05:49] Even at this narrow bandwidth, there is amazing signal to noise ratio. And there is high sensitivity from for
[1:05:56] ultraviolet uh from about 340 nm. There are nine shortwave infrared bands for atmospheric correction including turbid waters.
[1:06:07] And most importantly, PACE provides nearly daily global coverage. There are also some limitations to keep in mind.
[1:06:17] The special resolution of OCI is about 1.1 km. And because of that, uh not all the inland water bodies or nearshore
[1:06:28] waters can be resolved. Um and there are challenges in the sense that uh there's lack of verified
[1:06:35] hyperspectral algorithms at this point and need more comprehensive hyperspectral field measurements. Also, currently uh atmospheric correction algorithms are also being revised or
[1:06:48] improved upon. In next session, next part, uh Dr. Morgan McCubbin talked about ocean color data products, access, and analysis.
[1:07:01] There are multiple levels of PACE data. Level two, level three we talked about. Uh we also saw that there are some
[1:07:09] provisional products which are accepted accepted with known features and there are some products that are still being tested.
[1:07:22] As you can see the green color indicates products which are available now. Yellow are coming soon. They are
[1:07:29] being tested now and then there are some other algorithms are also being tested. Our data are available. So here is base
[1:07:38] data access landing page. A lot of information can be found there. We saw that data access is through OB.
[1:07:47] Level three data are available there and Earth data search provides level two data as well. We also saw that NASA Worldview provides
[1:07:57] near real-time base true color images and chlorophyll A concentration data. You can visualize and download images. We also had a brief demonstration of
[1:08:08] SeaDAS how to access level three and level two data from OB DAC and Earth data search and how to visualize spectra
[1:08:18] as well as derived products. Then today we talked about ocean color data access using Python Jupyter notebooks and Anna
[1:08:30] and Karina they talked about how that base data are located on Amazon Web Service cloud data stored in S3 buckets.
[1:08:40] Overview of Python libraries for data search, download and visualization and streaming data from Earth data cloud using these two
[1:08:50] Jupyter notebook scripts that we saw they demonstrated. Also note that software and sample data files used in the training are available
[1:09:01] from the training web page. So, this was a very detailed yet very comprehensive information about PACE mission, instruments, and data products.
[1:09:12] Also, we saw some applications in part two. Morgan talked about how these data are used for um say aquaculture site selection and
[1:09:21] for say cholera prediction model. So, there's one homework assignment that is posted on the training web page
[1:09:29] today. And um it's a it's you will be answering this homework on Google Forms. And the homework is due by 24th of
[1:09:39] October. October. So, those who attended all three live webinars and complete the homework assignment by the deadline will receive
[1:09:47] a certificate of completion via email approximately two months after today. With that, we want to thank all our
[1:09:58] guest speakers for excellent presentations and information that they provided about PACE. First of all, for today, Doctors Anna
[1:10:08] Windel and Carina Pomblin, you can contact them if you have additional questions. Thank you, Anna and Carina.
[1:10:15] Also, Also, Dr. Mannino and Dr. McGibbon's contact information is given here. You can always contact us at ARSET.
[1:10:26] Here's the ARSET website address and social media address. And these are our sister capacity building programs. If
[1:10:34] you are more interested in development survey. survey. These are some of the acronyms we used in all three sessions. For your
[1:10:42] information, they are provided here. And additional resources and links are also given here that were used and
[1:10:50] they're useful for PACE data search, information access, and analysis. And so with that, we want to thank you
[1:11:00] for attending today's session. And uh we will open question and answer session now. So thank you. Thank you everyone. Uh all our speakers
[1:11:15] and all our attendees. Uh thank you for attending today's session. We are going to move on to our question and answer
[1:11:22] session now. Um so we're going to go through as many questions as we can. Uh so question one, um
[1:11:31] how many granules can be downloaded at a time? time? So Anna and Karina, you can unmute and
[1:11:38] answer the question. Sure, I can go ahead and answer that. Um so there are there's no limit to how
[1:11:45] many granules you can download. Um you can either use the Earthdata search uh to download individual granules or
[1:11:52] follow the instructions while downloading to install the Earthdata download tool. Um and then if you're using the Earth Access Python library,
[1:11:59] um the files are opened or downloaded individually. So short answer there um there's no limit to how many you can
[1:12:05] download. download. Great, thank you. And second question is is there any cloud contamination threshold bar to filter the cloudy
[1:12:14] images? images? Yes, so as you saw in the first tutorial, um in the Jupyter notebook, you saw where I set a cloud cover
[1:12:22] threshold to level two data. Um I set it to 0 to 50, so any granules that had 50%
[1:12:29] or less cloud cover I am not sure if this is a filter that you can apply in the GUI, in the
[1:12:36] Earthdata GUI. If someone else on here has that answer, feel free to speak up, but um I know you can do it using Earth Access.
[1:12:47] Question three, is it possible to use Google Colab as a Jupyter notebook. Yes, totally. Uh Um you can upload the Jupyter notebook into
[1:12:58] Google Colab and work with the data there. Um but just note that the Google Colab is not in the AWS cloud. Um
[1:13:06] so the data will have to transfer from AWS to Google Colab. It's using a Google Cloud, I I assume.
[1:13:13] Um Um but yes, it is doable. Great. Question four is if we are looking for specific bands and need them
[1:13:23] in GeoTIFF format, can Earthdata Search handle the conversion so that only those specific bands in GeoTIFF format are
[1:13:31] downloaded? downloaded? If you Um so yes, the Earthdata Search library library it does not provide file format
[1:13:39] conversions. Um if you use Earthdata Search.open and then the Xarray open data set, um the bands requested stream to
[1:13:49] Um but this may be slower than downloading the whole NetCDF file. So um um a way to convert them to GeoTIFF format
[1:14:01] Does anyone I think you can do that using SeaDAS. If you If you download data, open it in
[1:14:06] SeaDAS, I believe you can save it as a GeoTIFF and open it up in um um you know, ArcGIS or QGIS if that's what
[1:14:13] you're you're asking. If this if that's what this question's asking. You can also use GDAL to convert
[1:14:20] formats. formats. Yes. So question five is why do PACE global composited data from the ocean color website have 4 km resolution? Is there a
[1:14:33] PACE place to access global composited data that have 1 km resolution? I guess instead of reading it, do do the
[1:14:41] people that wrote these answers, do they want to answer in case they have a better summary of it instead of me just
[1:14:48] reading. reading. I think Ian might have answered this one. Yeah, please unmute yourself and reply to this question. That would be
[1:14:54] great. Okay, I think um if this is someone from OB Tech, Alicia, if you're there or Yeah, this is this is Sean Bailey. Sean.
[1:15:09] Yeah, Yeah, uh uh so the the answer is um complicated. complicated. Uh basically comes down to file size for the most part.
[1:15:20] And spatial resolution. While the instrument does measure approximately 1 km resolution at nader, as you get to
[1:15:27] the edge of the swath, the size of the pixels grows. And as the pixel size gets larger, it
[1:15:34] approaches the size of the bin size size or can actually be larger than the bin size. At the edge of this OCI swath,
[1:15:41] it's a the distance between the pixels in the along scan direction is approximately 7 km. So it is not 1 km resolution. So
[1:15:52] binning it to 1 km would require um um spatially spatially uh uh averaging that data over or or
[1:16:01] area waiting that 1 7 4 by 7 km pixel over all of the 1 km bins that it would
[1:16:08] cover. Um we do have the capability of doing that. However, the size of the files grows um by the square of the number of pixels
[1:16:17] you pick so or the resolution. So a 1 km resolution file would be about 16 times larger than the 4 km size. So they
[1:16:26] files get very big very quickly when we're talking about 185 or what's that here reflectance bands. Um which is one of the limiting factors.
[1:16:35] If we were to provide a global resol um um um map or global bin data at 1 km
[1:16:42] resolution, we would probably have to come up with a way of breaking the file up so it wasn't a
[1:16:47] the projection would be it would cover the globe, but it wouldn't and it would be binned, but it wouldn't necessarily
[1:16:53] be one file for the whole entire globe cuz it would be rather large. Thank you so much.
[1:17:01] This is Sean Bailey from OB Tech. Thank you for attending today's session and uh helping with uh the question answers
[1:17:08] here. here. Uh question six is, can I use the data set for the Great Lakes or inland water
[1:17:15] bodies? bodies? So, the answer is PACE OCI does collect data over inland water bodies. Um the Great Lakes are large enough to be
[1:17:23] analyzed using OCI data, but not all inland water bodies are. The spatial resolution of the size of the pixel of
[1:17:30] PACE OCI is 1.2 by 1.2 km. So, the smallest possible water body it can work with should be about three to four times
[1:17:38] that spatial resolution. Thank you. And as you we saw an example last last uh week uh of looking at chlorophyll concentration
[1:17:48] in Lake Victoria in Africa, which is big enough that PACE can see it. So, uh question seven, how is the index of
[1:17:56] the data set classified? Is it done with a classification algorithm reference or something else? So, we weren't exactly sure what the
[1:18:04] index of the data set meant. I thought maybe it meant how we index like using 0 1 2 um
[1:18:12] with the when we print results. Um Um but but that's just being done cuz that's the order of the
[1:18:22] granules saved in that variable. We don't There's no classification algorithm to to do that with, but um
[1:18:28] yeah, we weren't exactly sure about this question. question. So, yeah, if you can clarify the question, um
[1:18:35] that would be nice or you know, uh index of the data set as you know, mentioned. It really as the granules come in,
[1:18:41] that's how it was um just ordered, I think. Mhm. Uh question eight, how can one get the remote sensing reflectances of a
[1:18:50] particular point such as a bloom event using PACE data and create an algorithm based on um that RRS to map um
[1:19:01] the bloom extent. Yeah, so Karina showed in the second Jupiter notebook tutorial how to plot an um a remote sensing reflectance spectrum
[1:19:11] from single pixel. So, it was that interactive map where you could um uh click on the map and then it plotted
[1:19:18] the the RRS spectra. Um and with that, you could use that data to if it was in
[1:19:23] a in a harmful algal bloom phytoplankton bloom, you could use those spectra to to help, you know, develop a spectral
[1:19:31] library or help with an algorithm. But, um yeah, the second tutorial showed an example of how to do that.
[1:19:38] You can also do you can also get spectra from SeaDAS. If you pull it into SeaDAS, you can use the spec spectrum view
[1:19:46] um and get the the RRS spectra view that way, too. Next question is, are all the flags
[1:19:54] listed automatically applied to the L3 data? So, these are L2 flags, I believe, yeah. yeah. Yeah, so if you open a level two or a
[1:20:04] level three data and open the L2 flag names attribute, um you can see what flags have been applied. And also, that
[1:20:11] we provided a website where it explains what flags are applied to level three data. That's good to know. And question 10 is,
[1:20:21] when you name a data package uh results, does it override files of the same name from earlier
[1:20:31] Yeah. Yes, yes, yes Yeah, when you name um um something in Python whatever you know and results variable
[1:20:38] name if you name something else with that name it does override. So if you want to save everything I guess you
[1:20:44] could use different variable names so nothing gets over over run over written written. written. Question Question 11, can you please tell me how can I
[1:20:55] work with monthly and weekly been data? Where can I change the code? Sure. So there is an argument called granule
[1:21:04] names names that we used in the second Jupiter notebook from today showing an example of filtering for monthly files. So you
[1:21:13] can actually use the filter dot 8D for 8-day composites or you can use dot MO for monthly composites. So that's where
[1:21:21] you can filter the data and and change between daily, weekly, monthly been data. Great. Great. Question 12, what's the difference
[1:21:33] between remote sensing reflectants and surface reflectants? Can we use surface reflectants for terrestrial surface water monitoring? I'll go ahead and let Sean answer this
[1:21:44] cuz I know he he answered this on the Google Doc. Yeah, so remote sensing reflectants is radiance reflectants and and typical
[1:21:54] surface reflectants is an irradiance reflectants. The difference is that remote sensing reflectants is the ratio of upwelled radiance to the downwelled
[1:22:03] irradiance. While a surface reflectants is the ratio of the upwelled irradiance to the downwelled irradiance. If the
[1:22:14] water if the surface of the water was uh the the upwelled radiance was Lambertian and that it was the same in all directions
[1:22:24] then the difference would be a factor of pi. Um, we know that it is not, um, which is it is not the water leaving
[1:22:31] radiance is not an inversion in distribution coming out of the water. It doesn't doesn't the same the radiance isn't the same in
[1:22:37] all directions. Um, so there is a bit of a difference. However, you can use um, um, surface reflectance if you're if you're
[1:22:45] doing terrestrial monitoring. There's just that caveat that what you're looking at is not exactly the same as
[1:22:49] remote sensing reflectance. That's That's really good to know. And question 13 is can we download L3 data
[1:23:00] for a region of interest or do we have to download the global file and crop using Xarray?
[1:23:09] Alisha, do you want to answer this one? Um, Um, I was actually reading another one. Let me see this one again. Oh, sorry.
[1:23:18] Can we download L3 data for a region of interest? Oh, yes. Um, so I was pointing out that on the ocean color website, we
[1:23:26] have the OB.DAAC data dashboard where you can create orders, subscriptions, and set a region of interest based on
[1:23:34] your coordinates, um, and so you can if you make a region and then set a subscription for it, then that
[1:23:41] data will be delivered to you via email or an email link to the data. You can also I think that's what that
[1:23:48] question was. Yes? I just want you to don't forget if you're if the data are already in our archives, you can order
[1:23:56] that data and, um, get the data uh, extracted when you order it. Yes. Yes. Yeah, and also and in week two we had a
[1:24:08] short demo of that where again we went in and picked uh, two regions, Chesapeake Bay and also um, Lake
[1:24:15] Victoria. So, you can definitely subset your data specially and temporally. Uh, question 14, where can we find more
[1:24:25] information about the atmospheric correction and flags algorithms used in the the product base OCIAOPRS? Sure. So, you um I provided a website
[1:24:38] link um that provides a description of how we calculate remote sensing reflectance in the atmospheric correction process and flags that go
[1:24:46] into it. Um and yes, it lists what flags are applied to the level three data. So, this this
[1:24:52] site goes into detail about how we calculate RRS. Question 15, is the available data from the cloud L2 mask or do we do it in a
[1:25:05] different step? If so, are there online sources uh teaching how to do so? Alicia, you can go ahead and answer this
[1:25:14] one. one. Um which one are we on? 15? I was on 13. 13. 13. Okay, yes. So, masks um I linked to a
[1:25:25] video where our SeaDAS software has a lot of different mask options that you can apply to your data once you have it
[1:25:33] downloaded. And um there's also a link in the description of that video to the SeaDAS software. Okay.
[1:25:45] Okay. Um hold on one moment. I'm So, the answer is um I didn't write the the direct answer. You would do it in that
[1:25:52] step. It so, it would be separate. Okay. Uh question 16 is which base product shows the color of the ocean from green
[1:26:01] to blue? I think this question was referring to the composite plot um that I had in the
[1:26:08] first tutorial. So, this was just plotting a level three composite um of the chlorophyll A concentration using
[1:26:15] a blue-to-green palette. So, it was really the the color palette changing the color from blue to green.
[1:26:23] Question 17, when using global map data, do we need to reproject the data if we want to observe an area of interest with
[1:26:32] the local projection or keep it as a global projection? Alicia? Question 17. Um this looks like the same as before.
[1:26:53] Um Um it depends on what what you're trying to do. Do we need to reproject the data if we
[1:27:02] want to observe an area of interest? I'm not sure I understand the question. If if I understand level three data, you
[1:27:11] know you don't need to reproject. No. But I believe level two data if you use, you you want to make sure that the
[1:27:21] projection is either geographical or you know the one that you prefer. Uh question 18, where is the PACE
[1:27:32] documentation can we find the tabular listing of special frequencies to avoid um um invalid data? Um yeah, so Karina has made amazing
[1:27:44] diagrams that show what bands to avoid where we're seeing um issues with the data. It's not exactly
[1:27:52] in tabular form, but the diagram that she showed is on this website. Question 19, is PACE data only available
[1:28:03] for oceans? What about land and inland water bodies? Yeah, PACE OCI collects hyperspectral data over land as well.
[1:28:13] Um, there are 10 land data products that are currently available. You can go to this link to see them.
[1:28:18] Uh, but yes, PACE OCI, as we've mentioned, does also cover inland water bodies. And if they are large enough,
[1:28:26] um, um, you can use PACE data to analyze them. So, you insert a question number six, uh,
[1:28:32] provides more explanation. Uh, Uh, question 19, PACE OCI collects hyperspectral data over land, as well. You can view the
[1:28:44] Oh, wait, that's the inland data products that are currently available here. Okay, so that's question 20 is, are the,
[1:28:52] um, um, square uh, square bands available on Earthdata? Earthdata? Yes, all bands, uh, shortwave infrared bands are included in level two and
[1:29:03] level three data found in the Earthdata cloud. cloud. Question 21, I tried to run Earthdata library through Google Colab and try to
[1:29:12] install the, um, Hold on. Someone you need to move your cursor. The dependency, uh, dependency, yet it
[1:29:23] did not recognize its presence. Do you know what is happening? So, we figured some folks might have
[1:29:31] issues, um, trying to install Jupyter Lab or using Google Colab. So, um, this this probably a, um,
[1:29:40] you know, we'd have to figure out If you want to email us or use the Earthdata forum,
[1:29:47] um, to ask about this issue, we can troubleshoot with you one-on-one to try to get it to work. But, uh, yeah,
[1:29:53] technical questions like this are probably, um, going to be user-specific. Question 22, is the data downloaded from
[1:30:02] the sites you presented during the three-day training course intend intended for reliable scientific study or is it just used to give an overview
[1:30:13] of ocean quality? Uh no, this is real pace data. So, the pace data that we grabbed from the Earth
[1:30:19] Data Cloud today is the data that scientists would would grab to use for their scientific study. So, it isn't
[1:30:26] intended for scientific studies. However, we just launched earlier this year. So, data is still pending some validation and calibration. We have
[1:30:34] provisional and test data products um for the moment and you can look at the status of the data products in the data
[1:30:41] products table at this website. And they will eventually get to the standard level with when they are validated, but
[1:30:48] um um yeah, the the data that presented during this 3-day training course were data that um is is available for everyone to
[1:30:57] use. So, next question, um and we are almost at the end of our our session today. And
[1:31:06] so, remaining questions uh will be answered and the document will be posted on um on our website.
[1:31:15] Um so, um just want to thank you all for attending uh today's session. And a special thanks to our um
[1:31:26] our our our guest speakers um Anna and and Karina for today. Also, we want to thank all our guest speakers,
[1:31:34] Dr. Antonio Mannino and Morgan McCubbin. Uh we have um special uh guests today attending from OB DAC. Uh we want to thank them all,
[1:31:45] Dr. Shawn Bailey, Alicia Scott, and Brian Franz. They are here to answer some of your questions um about um
[1:31:54] OB DAC and Earth Data. So, um we will share their contacts with you as well. Um today the homework is posted on the
[1:32:03] website that you will be completing by 24th of October on Google Form. And uh one more thing is that you will
[1:32:13] receive a survey. Uh Uh this is post-training survey that we usually have to get your feedback. So,
[1:32:21] please take a few moments when you receive the survey email and answer the questions or take care of the survey so
[1:32:27] we get feedback of how we can improve what future trainings you might like. So, um that would be great if you can uh
[1:32:36] take the survey. So, uh this concludes our three-session training on PACE. And I also want to thank our RSET team here
[1:32:47] for helping us, uh especially our coordinators, uh Salvin Hodson-Odoy, Brock Blevins, Natasha Johnson-Griffin. Uh we have Jonathan O'Brien and uh Sumon
[1:33:00] helping us uh with the presentations and editing. So, uh thank you all very much for for your help. All the guest speakers, all
[1:33:09] the participants, uh we really appreciate uh you attending this uh training sessions um and asking interesting questions and
[1:33:19] hope you can find uh PACE data useful in your work. And we would love to hear from you if you um
[1:33:27] have if you use the data um and uh find useful. So, that'll be great.
