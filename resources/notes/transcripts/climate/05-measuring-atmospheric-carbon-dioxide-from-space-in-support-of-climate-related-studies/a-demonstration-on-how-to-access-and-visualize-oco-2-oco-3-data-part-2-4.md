# A Demonstration on how to Access and Visualize OCO-2/OCO-3 Data, Part 2/4

`https://www.youtube.com/watch?v=2ZILcjYB9Fk` · id 343 · 1:31:32 · module 38 — Measuring Atmospheric Carbon Dioxide from Space in Support of Climate Related Studies

[00:03] Good morning everyone and welcome to the second session of this webinar series. This is Erica Podesta speaking and I am an instructor
[00:13] with the RC program. And today we have a guest speaker. Her name is Karen Yuen and she is the
[00:22] science and applications lead for OCO-2 and she will be doing a demo on how to access and filter and visualize OCO-2
[00:35] and OCO-3 data. So with that, Karen, thank you very much and the floor is yours. All right. So
[00:49] hello everyone. My name is Karen Yuen and I am from the OCO-2 and OCO-3 team. I'm the science data applications lead
[00:59] and I will be talking to you today about how to access and visualize both the OCO-2 and OCO-3 data.
[01:09] And And I will be talking for the part two of a four-part series. So this agenda should
[01:17] look familiar to you all. And And I will be helping you with the learning objective, the third one, which is to be
[01:26] able to open and visualize the XCO2 data product from OCO-2 and OCO-3. The overview of what I'm doing today is
[01:37] here. So I will be summarizing some of the characteristics from the missions, the measurement approach, the spatial
[01:45] and temporal resolution. A lot of this should be a bit of a review after Dr. Vivian Payne's presentation, but I
[01:55] will do a quick overview and then delve into showing you some steps on how to download our data,
[02:03] our our how to name our naming convention for our products, uh showing you some of the documentation
[02:10] documentation and then jumping into the live demonstration portion with the Jupiter notebooks Jupiter notebook and some of the other
[02:20] animations that we're able to do from the code that we will be presenting today. So, just a reminder for folks, we are
[02:31] looking at uh data from OCO-2 and OCO-3. These two missions are NASA's dedicated missions to looking at atmospheric carbon dioxide
[02:42] from space. OCO-2 was launched back in 2014. 2014. And so, we have uh almost an 8-year record because it
[02:51] was launched back in July of 2014. So, we have a fairly substantial record ongoing, almost 10 years.
[02:58] And OCO-3, which is the sister instrument, it's the same flight instrument but mounted on the International Space Station,
[03:07] and that has been on the space station since 2019. So, just an overview again, the measurement approach for OCO-2 and OCO-3
[03:21] are similar, but they give different results. results. OCO-2 is a free flyer, it is on a satellite in orbit, and we get global
[03:31] measurements, and we have fairly small footprints in the size about 10 km. And with OCO-3, you will see since it flies on ISS, we
[03:45] don't cover the poles, we get 52° north-south latitude in the measurement, but what we get in exchange of not
[03:53] getting the poles, we get much more uh precise and denser footprints over those areas in the latitude. And in
[04:01] addition to that, we do have the mapping capability on OCO-3. And once again for folks, um we are
[04:14] looking at the XCO2 product from OCO-2 and OCO-3. Essentially, XCO2 is the amount of atmospheric carbon dioxide that's
[04:24] present in the column during the time of acquisition. acquisition. And we do many acquisitions throughout the day, and that's how we get
[04:33] um basically all the the measurements. And um we know this from the spectra that we collect because OCO-2 and OCO-3
[04:43] have a spectrometer. And um from the spectra uh from the instrument, we're able to derive our values of uh
[04:53] atmospheric carbon dioxide. The spatial resolution for OCO-2 and OCO-3 are a little bit different um just because of how the instrument is
[05:06] mounted. We have about a 10.3 uh km footprint for OCO-2, and we have a 16.4 km footprint for
[05:18] OCO-3. So, we're in a very exciting time right now because since the launch of OCO-3, we have both missions flying at the same
[05:32] time. And that allows the science team to be able to actually look at both data sets together. And I bring this up
[05:41] because for folks who are interested in looking at our data, it's great to look at the OCO-2 data for the longer time
[05:47] trend, trend, but if you're looking for more data points and values over certain areas, uh specifically at 52°
[05:56] north and south latitude, you'll be get a lot you'll be able to get a lot more data points with OCO-3 and it is
[06:02] uh it would be very useful to actually look at both data sets together. So, now we're going to jump into the the
[06:14] a big part of presentation. Where do we download the data? I would recommend two locations. The first link that we have there is the
[06:23] uh Goddard DAC. That's where the official the NASA official OCO-2 and OCO-3 products are archived. We suggest
[06:32] that you go there, but then another location for you to explore data sets would be at the co2.jpl.nasa.gov
[06:41] site. That one you actually will be able to pull um carbon dioxide data from other missions as well. So, it's a nice
[06:49] place to be able to look at other data products from other missions that's related to carbon dioxide.
[07:00] And I wanted to spend a little time showing you this because I know the naming convention can seem a bit
[07:07] foreign, but we will be going back to this again and again and it's just uh this is a reminder for folks to look at
[07:15] how these files are named and there's actually a a logical explanation behind that even though it seems funny. And you can see
[07:22] that anytime you look at our data products and this would apply for um almost any NASA data product, it
[07:30] lists the mission, it would tell you what kind of product it is. In our case, it's a light
[07:36] product, so you see the abbreviation for it. it. When it was uh when the product was put
[07:41] together, the build, meaning that there are different times that this was produced and the versions. That's all noted because
[07:49] that's good for reference. And of course, we always end with the data format. Today, we will be looking only
[07:56] at the light products. OCO-2 and OCO-3 product comes in full physics and light products. The full physics just gives you a lot more
[08:07] variables that you want to look at for the scientist who want to be able to look at as many variables as they can
[08:14] and want to. But for folks who really just want to look at, for example, I want to know the
[08:20] values for CO2, then I would definitely go for the light files because there are less variables. And
[08:28] And basically, they just strip some of the the variables away to make it a light file. And it's also a much smaller data
[08:34] file for you to download. All our data files our light data files are in the netCDF-4 format.
[08:47] And if you really want to delve in to understand understand more information about the data products, products, I highly recommend that you go to the
[08:54] link there to look at our ATPD. And then there's also link for the user guide to read more information about the data
[09:01] products. And when you do go into the DAC into the archive, there are also active links to take you to these
[09:09] to the PDFs of these documents if you need to reference it. Okay, so we're going to get started.
[09:19] And like I said, the uh uh the primary location we send people to get our data products is the Goddard
[09:28] DAC. DAC. And that is the it's the official archive for all of our OCO-2 and OCO-3 data products.
[09:38] Um, you do need to register for a profile. It's absolutely free. You need your email. And um, because that's where
[09:46] they will communicate information to you and also send you any updates if there are any concerns or any changes.
[09:52] Um, if we do new data versions, um, they also send out emails to the folks. So, that's a great way to stay on
[09:59] top of what is happening with OCO-2 and OCO-3 data products. And um, you are able to browse
[10:07] uh, any of the products uh, without having a login. But, if you want to download the files, you do need
[10:14] a login. So, I just wanted to point that out. And uh, to show you as an example,
[10:18] just to start out once you get there, uh, it's as simple as just typing in OCO-2 or OCO-3 in the search bar in
[10:25] there, hit browse data by category, and it will pull up a familiar page. Um, that was the screen capture from
[10:34] earlier. You automatically get a fairly extensive list of products and it may seem overwhelming and that's why we did
[10:41] these screen grabs so you know that you're not seeing anything that's unusual. But, our most popular products
[10:47] are the ones that are on top and that's the one that's highlighted in red and that is it happens to be the one that
[10:55] we're working with, which is the light file. And uh, let's see next. Okay. Okay. From there, oh, forgive me.
[11:08] If you uh, if you look within the square uh, in the square there, in the red square, we actually ask you to click on
[11:14] sub select subset {slash} get data. And um, it will take you to the next screen, but I do want to point out that
[11:22] you can always check things. Um, you'll note from the very top, it tells you what the source is, so that's the
[11:28] mission, which version you're working with, and if you look at the uh, the second data product, it says the
[11:37] nine retrospective, that's the previous version that is still available. Um but the latest one is the 10, so that's the
[11:44] one that's on top. And um these products are generated every 16 days. You have your spatial resolution, and then you also have the
[11:53] begin date, which essentially is how long we've had we've been generating the data products. And the process level is
[12:01] that it's a level two product. So that's all listed on the top for you to follow. And if you click on the subset/get data
[12:10] um link, you will get this screen. And this is to get us started to basically start whittling down the data
[12:19] files that we want to extract. And as you can see from the get-go, we have a fairly large uh
[12:27] data set. And it's at 147 GB. It's a lot. We're not expecting everybody to download that unless you're interested
[12:34] in that. Um Um but the first place that for you to start reducing the number of files that
[12:40] you would actually need is to actually look at the years. Excuse me. The years that you will need.
[12:47] So you can refine by date range. And if you look into the right-hand side, you see that I actually picked
[12:55] January of 2017 to January 2018. And so for a one-year data record, it greatly reduces the um
[13:05] the data files by a 1 and 1/2 times. And then um you can further refine what you want to look at, and you can
[13:16] see we can refine by region, format, and let me show you some screens screen grabs of those.
[13:28] And you get this just so you know um when you look at the download method when you in the selector, you can either
[13:34] get original files or the subset meaning that you're reducing the um the number of files that you get. So
[13:41] that's where you pick the time range and you would also need to refine the region. And there is a subsetting tool in the
[13:51] DAC that allows you to basically draw a box around the area that you want to look at and it can be a small or as big
[14:00] as you want it to be. Just a reminder for the files that um because of the very small footprint of
[14:07] OCO2 uh data files, if you're downloading just a single data file, you may only get one or two passes over the
[14:15] areas that you are looking for. And the next thing you would want to do after that after defining the time frame
[14:23] and the region, we're going to look at the variables that you'd want to look at. And the variables you get a a listing of
[14:33] all the variables and those are the ones with the little boxes on the side. Today we're only looking at the XCO2 products.
[14:41] So you'd only be checking the XCO2 box. And then um if you also notice that uh the the areas will light up um and allow
[14:52] you to reset if you make a mistake, you can always go back and start again. If it's grayed out like that, it means that
[14:58] you um don't get to pick it. So that simplifies things very easily. And then after you pick all that, oh and you only
[15:06] have one data format because with the light files, you only get the net CDF uh products and then you would hit get
[15:13] data. data. And you'll pull up something that uh looks like this and you can confirm that the results that you have, um, how many
[15:23] files you have, you actually have the links there. They're individual links. And it tells you that you have results
[15:30] from January 2017 to January 2018. And, um, and you can see the, uh, file name convention that was
[15:41] mentioned earlier that shows you that you're looking at OCO-2 light CO2 product. It is the built 10 and the years that, um, that we have
[15:53] the date, I'm sorry, of the products in the netCDF4 um, format. And as you can see, you can
[16:01] always, for reference, you have the links for the user guide, the ATBD, and the readme document to work with the
[16:08] data products. You see from the top, you also get instructions for downloading, um, depending on how you want to
[16:16] download the files, and you can also download the files as text files, um, and that would make the files a lot
[16:23] smaller, especially in a situation like this when it's year-long. You may want to download it as a text file to to work
[16:30] with it, and we will uh, show an example of that a little bit later. So, So, in order to do the demonstration today,
[16:43] to go through how we would be, um, accessing the data after you download it, um, and and working with it, we highly
[16:52] recommend that you work in uh, uh, uh, Anaconda or Conda. Um, we found that it is is literally the most efficient way for you
[17:03] to work with our data in an open source environment, um, because it has the libraries, uh, already built in that is
[17:12] easy for you to work with. It and it it works in all the systems, Windows, Mac OS, Linux. And there's a link in in
[17:22] there that we've posted that allows you to to basically install it onto your system and and work with it. We are working in
[17:31] Python 3, so everything we've shown is in Python 3. If you're still working in Python 2, I recommend that you upgrade to Python 3
[17:41] just because of um most of our data products and the code that we're presenting is working in
[17:46] Python 3, so it just simplify things tremendously. tremendously. And And and like I said, working in Conda, you
[17:55] will have the libraries that we will be using today built in. If you choose not to download Conda and you want to work
[18:01] from the terminal, you can do that and just install a Jupyter Notebook and we have some links in there for you if you
[18:09] prefer to just download Jupyter and install the libraries individually. Uh This is one way to do it for folks
[18:18] because Conda does it's fairly large package, so it does take up some space. So, if you're space constrained, this is
[18:27] an alternate way for you to do things. And then the asterisk is to please remember which directory you download
[18:34] your files. The uh the code that we're presenting today, we do reference always back to where you
[18:40] would read your data files. So, it's just good common practice to create a folder where you download the data and
[18:48] um any of the OCO2 OCO3 data and you always have a common path that you can orient your orient yourself back in the
[18:56] code to be able to read everything correctly. So, these are just some screen grabs for folks folks um if you're not working
[19:07] directly in Conda, um just as a suggestion for you and how you want to get the information. You do need to do a
[19:16] pip install of the following libraries that are needed and we did a screen grab so you can reference
[19:25] if you're not familiar working with it. You actually have a screen screen grab to follow along for the libraries that
[19:31] we would like you to install. Even though this is shown in an Anaconda shell, you can do the exact same thing for
[19:42] any terminal that you open for example in your Linux or your Mac OS system. And um So you have two screens for you to kind
[19:54] of see and just as a reference point for those who are unfamiliar with that. And I also did
[20:02] a screen grab from terminal that just as an example that when you download conda, you actually see
[20:09] a lot more libraries that are available to you. Um and that's why it takes up so much space but it's it's a much
[20:16] easier package to work with if there are other things that you want to explore visually and for analysis with our data.
[20:27] And then the final step of course is to run Jupyter notebook. So all you need to do is essentially type in Jupyter
[20:33] notebook. And once you type that in in the shell or in the terminal, it will open up the notebook in a browser for
[20:44] you and it would look like a blank page like we have in there that has the opening line.
[20:49] And at this point I am going to trans uh transfer over to the live demo portion. Okay.
[21:00] Okay. So for folks who are hopefully opened up a Jupyter notebook, you'll be able to uh follow along.
[21:09] Um I did my best to make sure we have as many notes as possible for you to follow
[21:15] what we're doing. Some of this should look familiar. As you can see, we actually have what was in the PowerPoint
[21:23] portion. portion. And now we're in the demo portion. This is a reminder of what you need to do to
[21:29] set up the Jupiter notebook with the links that you need. All of this um um are available in the repository of
[21:39] um our GitHub, and that will be made available to you. And today, um I'm going to show you once
[21:47] we open up the notebook, this is where we are right now. I wanted to show folks that we're working with a single file
[21:53] example for right now, um and then I'll transition over to the multi-file example. So, first thing we're going to do is set up the
[22:04] environment for us to work. Once the environment is set up, it actually is repeated, and so everything can be built
[22:12] upon um what was done before. And then I have several examples to show you as far as how you would be able to
[22:19] show the OCO2 or OCO3 data. And um um we're going to do some simple XY plots. plots. And what we're able to show when they're
[22:32] multi-files, and then we're also going to show the data over um some global maps. So, let me launch into this.
[22:43] And for those who open up your um um your uh Jupiter notebook, what's nice about this is that um since we make this
[22:52] available, and I'm doing this as a demonstration, you literally just need to copy and paste this over to your
[22:59] line. Making sure you set up your directory your directory if you recall the path to read the actual data files,
[23:07] you just need that as a reference. Once you do that, everything else should run and you be able to
[23:14] um plot and do some very simple basic visualizations right away. So, the first thing we need to do
[23:20] obviously is to import the libraries. Those are in the system, but you do need to set up that you're importing
[23:28] everything. And then what you put in your notebook, um I'm going to run line by line. This is the run up here. I'm going to
[23:36] run line by line. You do have the option of running everything at once, but I'm just going to take some time to
[23:43] um go line by line and um just very quickly, we're working with netCDF4 files. We're using xarray as um
[23:54] how we will set up the data uh so that will be able to be read in a
[23:59] way because we're going to be pulling um um just the data that we need. Um we'll use
[24:06] um um numpy and panda. We plot with matplotlib, matplotlib, plotly, and also basemap. Those are what you will use as the libraries to
[24:18] essentially uh visually show your data. And then later on if you would like to, even though this is not going to be in
[24:27] the actual demonstration, we give you the option if you need to do it for um you need to put on a website, you can
[24:35] actually show the the display and that will also be in the repository if that's what you want to show at a later time,
[24:42] but today we're only going to focus on um plotting the data and showing it for the single file for the moment.
[24:52] So, you do this and you do a run. And one thing you should know that when you're working in Jupiter Notebook, when
[25:00] everything is done right, it will literally go to the next line like it just did. If you have any errors, it
[25:06] would show up in between. And um don't panic. It's It's normal. Um it runs sequentially and um you just
[25:17] need to make sure, you know, did I have a spelling mistake? Did I list all the paths correctly? It It really will guide
[25:24] you step by step on how to run this. And this is also the reason that I'm doing
[25:30] this one line by line. So, the next line, and this is just a reminder if you need to check where your
[25:39] directory is for your data. Um this is a very simple way to just check your directory, and mine just shows you
[25:47] where I have put um the data files. So, um that is a reminder to yourself if you
[25:54] forgot where you put it, but you you you run this to basically double-check that you indeed have your data files in there
[26:00] because because uh that's what you need to reference. And that's very important when we get to this line cuz this is when we just start
[26:07] defining defining um um what we're reading with the the data files. files. So, So, at this point, we are naming
[26:17] our data XCO2. We're looking at our netCDF4 datasets. This is the single file that we're looking at.
[26:27] And this should be very common. This is going to change depending on the machine that you're running on. It could be very
[26:33] fast. It could be slower. Um it's just listed to let you know that if you have a faster machine, it'll be it it it'll
[26:40] be very fast. And you know, if you're on a laptop, it might run a little bit slower, but it's not the end of the
[26:45] world. world. And um so, it read the netCDF uh a which is good. So, you're proceeding now, and we're going to start looking at
[26:55] what's inside each of these files. And uh basically, you're telling you're going to list everything that's uh that's in this single file.
[27:06] And the output that you get are all the variables variables that are within this file. And um
[27:14] I think there I forgot the exact number for how many, but we have a a lot more variables in the full physics
[27:22] for the light files. This is what you would get. And there are some key things in here that obviously we are looking
[27:29] for, like the date, the latitude, the longitude. longitude. This is what we're looking for that we need, and the XC02.
[27:38] What we do next is we make sure that we set it up in a way so that we can
[27:44] um plot it and visualize it. And then we use Xarray to organize our data. And so, we set it up in Xarray here.
[27:53] So, we would run our file so it's able to be uh plotted neatly. And then we define the variables that we
[28:03] need. need. And this basically gives you a table um of how everything is set up. And I'm not
[28:14] going to open all of this I mean, this can be expanded. It shows you all the other variables that you need. So,
[28:19] everything is in here. It's just to show you we have the files, but we're only reading uh what we need.
[28:27] And now you've set up your environment, and we're going to get ready to do some very basic ways to show
[28:34] the data. So, the first thing we're going to start with is Plotly. And um just for folks, it does require a um to
[28:44] put things on a map, it does require a token, but um we already obtained this token and we're able to share fairly
[28:51] universally for uh for this to work. So, it it just works. So, you don't have to go get it,
[28:58] but if you want to generate your own key, that that's fine also. You just need to have an account to set it up to
[29:03] do that. And um so, first thing we're going to do is basically take um that single file
[29:10] that we've been talking about and we are going to set it up so it'll be ready to
[29:17] plot everything. And we show the variation by color. And so, we're going to now set it up to
[29:25] make sure that we can read this correctly. And basically, we wanted to show the the max min for the XCO2.
[29:40] And what we have found is that we actually have a maximum at 448 parts per million and then 343
[29:47] uh parts per million as the minimum. So, you know those are the um um those are the maximums and minimums that
[29:55] we have. And then from from the data files, and then we're going to start putting everything into columns and
[30:02] frames that we'll be able to then plot. And And everything is referenced as I said earlier, you have you're looking at the
[30:10] XCO2, XCO2, date time, latitude, longitude, and we are looking at the XCO2 product um with the quality flag of uh of zero
[30:22] cuz that's the the good product that we're looking at. If you recall from Vivian's presentation, we have quality
[30:28] flags of zeros or ones and you can pick to choose have all of the um products or you can just pick the good
[30:36] points as you wish. And and this just basically shows you from the column of what we can plot, it gives
[30:47] you the count that we have um 19 just a little over 19,000 um data values for that single file.
[30:57] Um the mean, uh minimum, maximum, the name of it as being X CO2. This is just a reminder of what what you're
[31:05] looking at. And then if you run this, you with plotly, what you're able to show is a nice little plot like this.
[31:16] Now, since we have every single value that's in this data file, you see that we had the min,
[31:23] and then we have the max here. But the majority of the data values fall within the lines between the green and the red
[31:32] here. And this is where it's useful to say, let's just focus on where we have the majority of the values to look at
[31:40] what's going on. And that's where it's useful to actually do some filtering because um um it eliminates some of the files that you
[31:49] may want to uh uh not some files, I'm sorry, the values that are just outliers that you don't
[31:55] want to look at. And And you're able to actually for this part for the plotting, you can actually pick
[32:03] your minimum and maximum that you'd want to distinguish. So, when you run this part here, you can
[32:12] actually enter the upper bound and let's say we don't we're not interested looking at uh 443 that they had up there. We're going to
[32:21] focus at like 415. We're just going to say 415 right now. And then we're going to look at just
[32:27] everything above 400 parts per million. And so that would be your new minimum. And once you define that part,
[32:37] that actually gets reflected in the rest of of um which data values will actually be read read through um
[32:46] the code. And if you run this, give it a few seconds. It's going to generate a new map.
[33:01] Ta-da! Ta-da! And you'll be able to see for this one single file, everything that all the values that are between 400 and 415
[33:13] uh for the single file. And it is um this is what OCO2 sees um globally for that particular day.
[33:24] Now, from this, you might say, "Okay, I really want to just look at a smaller area." area." That's where you do further subsetting,
[33:33] and you would want to look at it maybe um the the latitude and longitude of the areas that you would like to look at.
[33:43] And what you do here is that we actually we're going to start with just something in the southern hemisphere.
[33:49] Um we're going to look at Australia. And you actually wanted to designate the latitude and longitude. You specify that
[33:56] and so you can actually put values in so you can enter the coordinates. And we know these are the coordinates
[34:02] that we will use for Australia. So, this should look familiar. You're looking at the same thing again for your XCO2.
[34:10] Um Um it's this is the variable, date and time, time, latitude, longitude, your quality flag. And then this is the extra line that
[34:20] we've added that allows you to basically designate the latitude and the longitude that you would want to look at.
[34:30] And by the way, the minimum and maximum that we had set earlier at 400 to 415 parts per million, that gets translated
[34:38] into this part. So, whenever you're interested in expanding that area, you can always go back to that line to
[34:45] adjust your minimum and maximum as you want to. And so, we're going to run this. And once we've set this up, I'd like to
[34:58] point up that the display map style is in Stamen watercolor. It's a pretty way to show it. In this particular library,
[35:06] you have other Mapbox styles that you can choose from. We will show two examples today. So, we have the Stamen
[35:15] watercolor for Australia. This line that we have in here, as we have said before, you get to put in your
[35:22] actual coordinates that you want to run. And when you run it, So, we showed this example of
[35:34] Australia with the two passes like this. We also showed the example of California, and this is the lat long.
[35:42] So, once again, um um we are subsetting, and as you can see from here, all we're just changing are
[35:50] the coordinates. In comparison. Okay? But, we are showing a different um um map. If you recall, this one is the
[36:02] Stamen watercolor, and now we're going to show an example what it looks like if you choose a different map, and we chose
[36:08] dark map, and when you run it, you get um the pass that we have nearest to California.
[36:20] And um you can zoom in to look. And this is something that's interesting that I'm going to show you
[36:32] that that's interesting in Plotly that we show. Within Plotly, you can actually see the individual footprints that make up I'm
[36:46] sorry, the individual parallelograms that make up the footprint, and these are all the footprints of of from OCO2.
[36:56] And as you can see, each of these gives you you along this footprint, it gives you the
[37:02] average value and the latitude and and longitude of acquisitions. So, within Plotly, you are able to zoom in and get these
[37:14] individual points like this. It gives you the values and the lat long if you're interested in looking at that.
[37:20] And that's really interesting because if you want to look at something specific, for example, over terrain or over
[37:27] certain areas where you would expect um uh uh elevated values or lower values, this is a great way for you to be able to zoom
[37:37] in and actually see this. Okay? Okay? And now we're going to go to Basemap. Basemap is just another package for you
[37:48] to be able to um um visualize the data, and it it's really by by preference. So, what I was showing you
[37:59] before with Plotly, it's it's a little bit more pixelated, if you will, but you still get the information you need, but
[38:06] you're able to zoom in and see the granularity that might be of interest. Uh Basemap actually gives you the OCO2 or OCO3 data over a
[38:16] pretty young map, and it just looks nice if you wanted to a still or something like this.
[38:22] Once again, we have instructions in here for folks who choose not to use conda and you just want to individually
[38:31] download the packages that you want the libraries that you want. I'm sorry, basemap package package and library. And
[38:38] so we have the instructions here for you to follow if that's what you choose to do. But if you use conda,
[38:47] we actually have basemap loaded. And what we do is all you have to do is you you copy this over
[38:57] and run the code. And then show this. Give it a few seconds. And it will plot the data for you
[39:15] for the single day of file and it will actually actually um um show you over a nice
[39:22] blue marble map. So this is just for a single day file to show you. And we also have an example to
[39:32] show you with the OCO3 data. This looks This is a nice way to show the OCO3 data because of the latitude.
[39:41] So So you basically take that data the code that we have exactly the same way. The only thing you're changing is
[39:50] which data set you are reading and basically if you save your your data files in the same directory, you're just
[40:00] changing out and saying, "Hey, instead of OCO2, we have a three here. Same naming file convention. It's just
[40:07] you substitute the two and the three and you pull the file or you read the file. And that sets up your environment.
[40:20] This should look familiar. We set it up in X-ray again, so we can pull up and set everything up so that we'll be able
[40:27] to run this. And give it a few seconds. Now you see the same map as above, but
[40:39] we're showing it with the OCO3 data. And you can see that it's it looks very different. The The
[40:49] curves that you see there actually reflects how ISS flies versus this sort of convention for OCO2. So it just gives you so you can
[41:01] see that you get more of the poles here and and um um and it's more it's straighter than you
[41:09] would get for when when it's plotted flat like this, it's straighter and you have these many data values for a single day file and
[41:21] then with OCO3 we have a bit more. And so this is these are what we could do for plots for a
[41:34] single day file. And so what do we need to do for multiple files? Well, this is great to
[41:41] start out and I highly recommend you actually playing around with this code just to work with the single single day
[41:48] files files first to get used to this and understanding the code and working with it because there's one additional step
[41:56] if you want to work with multiple files. The way we do things here would make it very
[42:02] very tedious to read for multiple files, so we actually have another way that we do this and I'm
[42:09] going to show that to you. Okay. Okay. So, this is another example of the code to show you how to read
[42:22] um using base map again. And um showing you well how to work with multiple files. And if you recall, we
[42:32] have the option of downloading the files as net CDF um or as a text file. Um just for the size, we really
[42:41] recommend that you uh download uh in CSV. CSV. Um we have a separate code for if you
[42:48] want to convert the net CDF uh to uh CSV, I can make that code available for folks to look through, but
[42:56] just for the sake of time and for your ease, you can actually download those files directly as CSV values
[43:04] uh if you're not interested in working with the net CDF. And um so, this is just another way for you to work with
[43:11] our data and the values and plot it directly this way through CSV. And so, some of this should look very
[43:19] familiar to folks. You know, we're importing the libraries that we had talked about before. And um we have uh and seaborn is just another
[43:30] way to basically represent um the data. So, and what we're doing is that this particular code generates um the 16-day cycle for
[43:41] for each of the months. And And as you can see, it's a little bit more uh uh it's a it it it's more involved, but
[43:53] like we have um put together for you, when you put this in um and I can make
[43:59] this available on your computer uh uh notebook, um some of these files are rather big. When you run it, you just just need to
[44:09] give it some time when you're working with multiple uh data sets. I'm sorry, multiple multiple uh months or years of data set. And just
[44:20] for the sake of time here, I'm going through the code to show you that we're using Basemap. We set up the library.
[44:27] And all of this is basically to help you define how things are going to look visually. visually. Okay? A lot of this should look
[44:36] familiar. Once again, we're looking at longitude, latitude, the XCO2. And um oh, this is the projection for
[44:45] the map of how it would show up. And that just gives you an idea. We've already defined the latitude and
[44:51] longitude. All of that is just to set everything up to show up on the map as we need to.
[44:57] Um this is the labeling. This is something that you can obviously customize as you want to. I mean, if you
[45:04] really wanted to, you can call it blah blah blah here if you want. But we are looking at XCO2 in ppm, parts per
[45:11] million. million. Uh the font size that you want to choose. choose. And um and then you can also be able to pick
[45:20] and play around with this, you know, how you want the background to look, uh I'm sorry, the borders, the
[45:27] backgrounds. You would run all of that, and that basically sets up how you would show um the actual uh data files over
[45:36] certain months. What is different from the single file is that we have one additional step, and you'd be using the Dask library. So, you
[45:45] would need to import that. And that's just an easier way for you to be able to set this up for the uh
[45:54] for the visualization. And it's easier to cuz it's for CSV files, but also for um multiple files.
[46:03] And but this should look kind of familiar to you that you know, we're just looking at only the the variables
[46:10] that we need. Once again, XCO2, latitude, longitude, um the quality flag is picked, um date and time
[46:19] right here. So, we're looking at the same variables all the time, but now we're going to be able to set it up for
[46:28] uh uh a multiple files over the course of time. And um just to reduce the size, uh
[46:38] uh you can you round it. So, if you recall, we were looking at data that said, you
[46:43] know, 443. um zero something. If you round it up, it actually simplifies things uh significantly cuz you're dropping off
[46:53] the values that you may not need. And then um always remember the path where you have your data and
[47:04] basically this is the portion that reads all the data files that you have. And once again, you just copy and paste
[47:13] this into your Jupyter notebook for when you run this. And And you can do a simple test if you need to for a cycle just to
[47:26] to do that. And then these below areas gives you the different ways that you'd be able to
[47:32] generate what you want to look at. You can either do it in a GIF format to show
[47:37] the frames or you can output it as an MP4 file. And I'm going to show you some examples
[47:46] of what it looks like when we do the multiple files. So, I'm just going back to show if you
[47:56] recall when we did the the XY plot from before, where we had all the data values. This was an interesting
[48:05] way that was shown by actually our intern Sagar Limbu, Limbu, who put together a lot of the code for this. Um
[48:17] what he found that was interesting is that there's a lot of value in showing even in a simple plot and in the
[48:25] map plot lib, when we use that, just the variation over time. And he arbitrarily set a a line at 419 parts per million
[48:35] just to see um where the points are. So, we look at the values in 2017, you can see that back in 2017, and this
[48:43] is, by the way, for looking at all the values over time over Mauna Loa. And what we would see even back in 2017
[48:52] that the majority of the points were below 419 parts per million. And as you can see with time, over time,
[49:01] from 2018, 2019 to 2020, how all the data values have been moving up over time. And we thought that was just a
[49:10] very nice easy way to show how that has moved up over time. And another way that we can plot, so these are just single um
[49:24] plots that just stack this way to show you, but we can also show you this. Now, this is what we did
[49:32] for data values um over California. And this shows what happens over time when we plot this. And you can just see um here we define
[49:46] the point at 410 parts per million, and you see the line that goes across there. And you can see where it starts and
[49:55] stops. And you can just see the trend over time over California over the last um um let's see the 6 years from 2014 to 2020
[50:09] how how uh it's just progressively climbed over time. You also see the up and down motions of the data values because it
[50:18] shows the seasonality that OCO2 and OCO3 data are able to show um um in the northern hemisphere the values
[50:28] would actually be lower because when it greens up it acts as a carbon sink. And so you see the pattern of the up and
[50:36] down just of the variation the seasonality over time. And also what's interesting here is that since we launched in July of 2014 you
[50:45] can see at this point that the values don't pick up um in time frame until later on in the year.
[50:53] So this is just another way to be able to plot all the data together to show this as a GIF file format.
[51:06] But if you um set it up as we did um when you're looking at multiple files you start getting the density of data
[51:16] that you see with the um just with over time is for the entire month of January in 2019. So you can
[51:25] actually get maps like this. Um this uh like this is what we'd had done in uh Plotly.
[51:34] Plotly. The Plotly example we have um except for uh the entire month of January and you see how that fills in.
[51:44] And this shows you the difference between just one year to the next. 2019 2019 2020 2020 Same scale as you can see from the 390
[51:56] parts per million to 420. 2019 2020 And then when you put it together um um you can actually show if you just do
[52:11] several months, you can actually start seeing the change and the increase over time. And you are able to create all of this
[52:30] with the code that we have provided to you and you can adjust obviously the parts per million that you want to
[52:38] actually display. As we said earlier, you can change the maximum and the minimum. That depends on you. And you
[52:45] can also uh show just the regional areas if you want to focus on that. And And this is an example with OCO3 data, but
[52:59] this is just to give you an example that you can take the same data values and if you run it in
[53:07] uh other software that's low it's more high resolution, you can get literally literally a cinema quality data product. I'm sorry, data animation.
[53:23] And this highlights very well just how differently ISS actually flies compared to um a free flying satellite.
[53:36] And you see that the instrument continues to pick up, uh, variation variation over time and you can see in the
[53:46] summertime in the northern hemisphere how it acts as a sink and then and it's reversed in the southern hemisphere and
[53:53] then now we've moved into the winter dates dates how it kind of oscillates between the two. And we actually started looking at
[54:17] putting OCO2 and OCO3 data together, but it was uh, pretty hard to distinguish the fine finer details. So, I think it's
[54:26] great for a regional area you want to look at values, but for animations thus far it's a bit little bit messy, which
[54:33] is why, um, we we played with it, but it it didn't turn out very well. So, we
[54:38] chose not to give you that as an example this time. It's a great way to do it as a single
[54:43] screen for plotting, but not for, um, the animation. And like I have mentioned before, for, um, these are some of the references
[54:58] that's made available to to you, uh, to get the information that you need to get our data. Um, the official NASA archive
[55:05] is the Goddard DAC and there's a link there or if you want to look at our um,
[55:11] you can get the OCO2 and OCO3, uh, XCO2 products at co2.jpl.nasa.gov. It also gives you access to some of the
[55:20] other missions that have the CO2, um, information and data and, at co2.jpl.nasa.gov, you do have the option to directly
[55:32] download the data products as CSV files. And then, um, all the information that I showed today um is made available. It's
[55:42] It's public access in GitHub and in Colab. So, it's going to be really easy for you to to set up in your Jupiter
[55:52] Notebook cuz uh we set up in a way that you just need to copy and paste this information
[56:00] directly into your notebook and you should be able to just start right away and you're often running
[56:07] uh working with our data after you have uh downloaded the data that you want. We'll also make some sample data sets
[56:14] available um through Our Set. So, you'll be able to download from there to um basically start um just start out
[56:23] working with our data. And obviously, if you have any questions, this is my email address. Please feel free to to reach out. Um I'm
[56:34] happy to help out any way I can. And um I'm always looking forward to how people want to use our data. And um
[56:43] and I also like feedback from people they say, "Hey, why don't you do something this way? Can you Have you thought about um
[56:49] setting up uh some another way for us to look at the data?" And we will keep updating um I plan on updating um the
[56:58] GitHub and the Colab continuously so that folks would be able to find new ways to be able to work with and
[57:05] visualize our data. And uh so, please go to the training web page for more information. And um let's see.
[57:16] Uh follow Our Set on Twitter. And um thank you for your time. Wonderful. Thank you very much uh Karen
[57:33] for that uh presentation and demonstration. demonstration. And so now we are going to start our Q&A session. We've been gathering some of
[57:43] the questions that uh you've been writing in the questions window. And we have been putting them in a
[57:50] Google Doc, which we will share with you. you. Um so please um if anyone has additional questions, please just write them in the
[57:58] questions box. And the document uh this document that you see now on your screen, we will be posting this
[58:06] document on our training page. Okay, so I let's start then uh with the first question. Could you please explain how you
[58:20] downloaded the data, the last step after slide slide 12? Do you do Do you just need to download the links to the data?
[58:31] Uh yes, I'm uh I'm sorry if that wasn't clear. clear. Uh yes, you have to download the data
[58:37] and uh the the links basically, if you recall from the slide, there were instructions that you can
[58:44] uh do a batch code, if you will, to download all of it um together. And And and this is the tricky part because our
[58:53] files are rather big. So, if you choose to download the data files, you need to give it some time, and that's why I
[59:00] didn't didn't show it in real time cuz I would have it would have taken up a lot of the the
[59:05] time to do that. Um Um but yes, those are the links, and you can literally just download the files
[59:12] directly from there. And And uh uh it yes. I I apologize if that wasn't clear. Okay, thank you. Question number two. I
[59:26] have Python with Anaconda. Will that be sufficient to run this or should it be installed as standalone?
[59:35] It It should work as is. So, you would literally um open up your your uh prompt and uh
[59:45] uh at the line you just type in Jupyter Notebook and it will literally open up a new notebook in your browser of choice.
[59:53] Uh whatever you have set it up to be and you will have that open just that one
[1:00:00] single line and you would be able to just start copying copying the code that we've made available and
[1:00:06] start working. Okay, question number three. Can we display the map other than map using the Mapbox key dependency?
[1:00:24] Well, to to use the map that we chose to um display the data the the the the folks asked us Yeah, they they
[1:00:35] they have the the dependency there. So, that is that that's associated with that um package. So, yeah, you do need the the
[1:00:47] the key depend the key. There may be other packages where you won't need that, but that's what we chose to to to work with. Um
[1:00:58] I'm not sure for the question if they meant that they can try to use the data for another map or
[1:01:06] if they want to use it without the key cuz the short answer is yeah, you're going to need the key to use that map.
[1:01:13] Okay, so maybe the person that wrote that question can clarify on the on the chat box. Please, thanks.
[1:01:23] So, So, let's move on to question number four. How do you compare the intraday time variations in satellite observations?
[1:01:31] So, like one observation at 9:00 a.m. and another sometime later. Uh Uh I want to make sure I understand this
[1:01:41] question correctly cuz if you're looking at just um OCO-2, the data's collected at about the same time.
[1:01:51] time. So, we don't do any observations at 9:00 a.m. It's between I think it's like 1:00 1:30
[1:02:00] Vivienne and and Abhishek, please correct me. p.m. Yep, 1:30 p.m. for us too. And then for OCO-3, that's going to be
[1:02:09] dependent on how ISS is flying. If you're asking the question about how we would collect compare this the OCO-2
[1:02:16] OCO-3 data with another satellite, um um I don't think I'm qualified to answer that. Cuz when you start
[1:02:28] comparing comparing Go ahead. Oh or Vivienne, yeah, why don't you go ahead and and then I can answer those to
[1:02:37] your three perspective. I'll I'll let you say about OCO-3 cuz I was going to say something about diurnal
[1:02:44] variation in CO2, but I'll let you I'll let you say. Go ahead. Okay. Um so, for OCO-2, yes,
[1:02:52] as Karen mentioned, the the data is collected at this just one time, 13:30 local. local. OCO-3, which is flying on ISS, has a
[1:03:02] slightly different orbit, as we mentioned during the session. It has this two ISS ascending node, ISS descending node,
[1:03:10] and depending upon those orbits, you can you may need end up collecting data at different times during the day.
[1:03:17] Um sometimes, for example, like let's say we are looking at a place, uh let's take the example of Los Angeles, we can
[1:03:25] be collecting data in the morning, and then you can be collecting data in the afternoon, as well.
[1:03:31] Now, Now, what happens, um um is that if, for example, we are trying to compare this data against a
[1:03:41] particular validation site, or against some other site, then we typically try to look at what we call as this co-located data in space
[1:03:52] and time. So, that means we make a specific bounding box around that size, uh site in space, and then also in time.
[1:04:00] So, for example, we'll only look at data within plus minus 2 hours, or um like sometimes it's even less, like
[1:04:08] plus minus 30 minutes of when the satellite passed over that site. This helps us constrain the variations
[1:04:15] you can expect in XCO2 uh over the day, and within that 30-minute or 2-hour period, or in a particular site, we do
[1:04:24] not expect that large variations in XCO2, so we can get away by using those observations from different times.
[1:04:32] Um Um now, now, what happens is that over the course of the day, starting from the morning and
[1:04:39] going up to the afternoon and the evening, there is a huge variation that happens in CO2 fluxes, right? And so,
[1:04:45] CO2 fluxes is exchange of CO2 between the land surface and the atmosphere, and you can imagine during the day when
[1:04:54] plants start with the photosynthesis and other activities, there is like a huge uptake that happens, so there's a
[1:05:00] drawdown in CO2, and then later on in the nighttime, there's a release. So, the change in CO2 close to the
[1:05:07] surface is quite large, but again, because we are looking at that column, that magnitude of change gets dampened
[1:05:14] or diluted. You can still have a large variation. So, for example, over a forested site, if you're looking at a measurement
[1:05:23] during like let's say June, July, August, which is the growing season, you can still end up with a change over the
[1:05:29] course of the day of almost like 2 ppm, which is significant. Um but and that's why we end up
[1:05:37] constraining the time like if you're comparing it against other observations or against other uh validation sites, we
[1:05:45] end up constraining the time period to a very plus minus 30 minutes or plus minus 2 hours. So, then that uh variation in
[1:05:52] XCO2 is pretty small. Um Um Vivian, sorry. Over to you. Well, I think you covered it really
[1:06:02] well, Abhishek. Thank you. Thank you very much. Okay. Question number five. Are there web APIs to download the
[1:06:13] netCDF4 files programmatically? Uh Uh off the top of my head, I can't name one specifically. specifically. I'm sure there are ways to do it. Uh
[1:06:31] that's a I will have to test it to see which ones I would want to work with, but
[1:06:39] working with our our archive center, the DAC, they Um Um like I said, they have to you you can
[1:06:50] download by link or or you can batch download things. The other thing that we need to resolve just uh for clarity,
[1:07:02] and there's supposed to be a way that you can work with our data without having to download
[1:07:09] all the files and they are actually troubleshooting troubleshooting that code right now. We're we're working at real time with them
[1:07:18] and hopefully you'll be able to access our data and just pull what you need without having to download all of those
[1:07:24] files. Unfortunately, that was not resolved before we did the the training, but that is something that's being
[1:07:30] worked through the DAC and I'm hoping that once we have that, we'll be able to let users know how they can do this
[1:07:37] without the the owner's task of having to download all the files. Um there's also one library called by
[1:07:45] DAP DAP that allow us to like get access to our our data website and get the data without actually
[1:07:53] downloading the file. Great. Thank you very much and for participants, um just to let you know that online we have uh
[1:08:05] Vivian Payne, she presented in the first session. Uh we have Abhishek Chatterjee, he will be presenting the next session
[1:08:12] number three. Um Um and uh the person that just spoke is Sagar Limbu. He is the um person that has written most of the
[1:08:23] code that you saw today. So, thank you um to all of you for being here today and and answering the
[1:08:31] questions. questions. All right, so let's carry on then to question number six. Is there a way to convert or export
[1:08:40] netCDF data as GeoTIFF for post-processing in GIS softwares? So, you There yes, there are ways to do it. We
[1:08:52] don't have an official way that we have put out yet for the OCO-2 and OCO-3 uh uh data. That is also something else that
[1:09:04] we are working on both on our end just to explore, but also the the Goddard DAC they actually
[1:09:16] it's not official, meaning that they they haven't put out an official code, but that is also being worked. The short
[1:09:22] answer is yes, there is a way. Um Um we just haven't made it public. But for the person who had asked this
[1:09:31] question or the folks who are interested in that, please go ahead and reach out to me and I can
[1:09:38] set you up so you can work with the folks to get access that way. Also, I wanted to add on this one.
[1:09:47] We did some testing with NetCDF files and converting to GeoTIFF file. And we did some we did run some samples
[1:09:56] so we can put up that code into this folder where we can we can share with everyone.
[1:10:03] Thanks, Sagar. Yeah. We're hoping to set it up in some official capacity cuz we're getting this question enough.
[1:10:10] We're we're aware that um that folks are asking for this. So, this is just one of the asks
[1:10:17] that we have for the the DAC to to make that available for users. Okay, question number seven. I read that
[1:10:30] basemap is being deprecated in favor of Cartopy, but Cartopy doesn't have all of the nice features that you demonstrated
[1:10:38] today. Are you planning on sticking with basemap or switching over to Cartopy or some other module for your
[1:10:45] high-resolution static maps? Uh Sagar, I'm going to put you on the spot because you chose that. Do you have
[1:10:53] a comment on that for the um for this question. Yeah. Yeah. Yes, so what we did was, uh, we tested
[1:11:01] out like with different libraries, right? right? For visualization, and we stick with the base map. But we have been trying with
[1:11:10] uh, different libraries like pydeck Kepler Kepler But in the future we might use other, uh, libraries that are more like, uh, similar to the
[1:11:23] base map or or has more features. Uh, so the libraries that we have tested so far is pydeck.
[1:11:35] p y d e c p y d d c a d e c k Yep. Yep. Okay. Okay, yep, yep.
[1:11:50] Thank you very much, Sagar. Question number eight. Is there a cloud native solution like cloud optimized geotiffs on the stack app API with
[1:12:04] Microsoft Planetary Computer? If not, are you working toward a cloud solution? Ooh. Ooh. I I don't think we are.
[1:12:20] But I, um, to be honest, that's a management decision. I don't know. Uh, Vivian and Abhishek, I don't think
[1:12:28] we've talked about that. At least I have not heard anything. We have not talked about this. I mean,
[1:12:35] this is this is really great to get these kind of questions. It's something that we can look back into on the
[1:12:41] project and talk to the data center about. about. But, um, no, not right not right now. Okay.
[1:12:52] Okay. Question number nine. Why does the data have gaps within tracks? Are there any ways to fill in the gaps?
[1:13:02] Uh so What's the best way to answer this? Uh Uh there there gaps in the track because of
[1:13:10] of how I I I imagine in between the the passes. passes. Um for the level two products that you
[1:13:18] see, those are the the actual passes. We're not going to because of the small footprint of the the of the instrument,
[1:13:27] uh we're not covering every part. So, that of of of the earth, so you're going to see the spaces in
[1:13:35] between. You're also going to be hampered hampered by cuz we can't see through if there's um clouds. So, you'll see
[1:13:47] that that you won't have data in that area as well. So, that that that's why you will see that
[1:13:54] the gaps um um that way. Um are there ways to fill in the gaps? Yes. Uh that's where you would have a
[1:14:03] higher level product, but I don't work with that, and I would appreciate if Vivian or Avishai can talk about that
[1:14:11] part as far as the filling in the gaps. Yes, happy to and in fact, we will cover
[1:14:20] uh very briefly about this higher order products in the next session. Uh so, I will specifically talk about
[1:14:28] what we call as a level three product, which is a gap filled XCO2 estimate. There are different ways in which that
[1:14:37] product can be generated uh through very simple statistical methods or through very advanced data assimilation methods. And uh we will show some application of
[1:14:49] using that capital product for studying anomalies in CO2 concentrations. So, yeah, it's a it's a great question.
[1:14:57] Thank you. That. Great. Um next question number 10. Is there a time stamp in the net CDF
[1:15:08] net CDF 4 files indicating the ingestion date, upload date, process date? Of Of for the nomenclature, we have the the
[1:15:23] the date that the product was acquired. And then you would have the the version and when it was produced.
[1:15:33] But I'm I'm not sure what you mean by ingestion date. Yeah, I think that question might refer to
[1:15:43] when that observation was made. Yeah, so that that information is in it's in there. Yes. Yeah. Great. Question number 11. Is there any
[1:15:57] quota on downloading net CDF CDF 4 files? Is all the data freely available? No, there is no quota.
[1:16:09] And yes, the files are all freely available. And I'll just add to that that that's NASA data policy. The goal all the NASA
[1:16:19] data products are freely available and no quotas. Okay. Question number 12. Is it possible to obtain an XY plot with the data?
[1:16:36] Uh yes, if um not sure if they they missed out on part of the presentation. that was the first example that was
[1:16:45] done. done. And And that that's the most straightforward way and easy way. So yeah, it's it's in it's
[1:16:52] in there. So the short answer is yes. Question number 13. Is it possible to export this data to GIS or to some
[1:17:04] other other vectorial program or software? Directly, no. You're going to have to convert the the file. Um
[1:17:18] Um but we yes, we you can do it because that's something we are exploring. And I didn't go into
[1:17:27] that part because for the sake of time we just focus on the basics of how to start working with the data. Like the
[1:17:35] previous questions before we are aware that a lot of the users are interested in being able to have the files, but
[1:17:43] ultimately to to be able to apply it and export it to to GIS. Uh if whoever asked this question, if
[1:17:51] you want to email me so I can understand a little bit better what you're looking for, I'll point you to what can be done
[1:17:57] very quickly. It It takes more steps. And and we may have something available to you already, but I just want to have a
[1:18:06] better understanding. Question number 14. What data is in the different product levels? Level 1A, 2A, etc. etc. Um
[1:18:21] Um I don't think I'm the right person to answer that. I I can take that one. Thank you,
[1:18:25] Vivian. Vivian. So the data products we're talking about today were the level two light products. And that's
[1:18:37] that's the lowest level that we would recommend for people to use. The level one, you know, levels below the level
[1:18:49] two light level one A is sort of raw spacecraft data. Level one B is geolocated and calibrated radiances.
[1:18:59] Um Um I don't anticipate this audience will want to use the level one A or level one B data.
[1:19:07] Um go go with the level two light products, which is the XCO2 information. Okay, question number 15. Can you do
[1:19:23] vectorial processing with any library for this? I'm not sure. I don't So, we can always go back and
[1:19:46] uh respond this later. Yes. Um from what I understand from the question, I am not aware of any
[1:20:00] of the libraries QGIS can do that directly right now, but but I haven't explored it enough to
[1:20:09] be able to answer this with certainty right now. So, I have to go I have to check on this.
[1:20:17] Okay, question number 16. And I think this one is a clarification on a previous question. Another one Now,
[1:20:25] this one uh another one related to QGIS or GIS. Mhm. It says, I asked uh the question on Mapbox key dependency.
[1:20:33] Mapbox acts as a base map. Can we export the data and plot and display the data uh simply in QGIS with a base map?
[1:20:46] I think with QGIS you have to create the layer and right now the way we have our data, it does not
[1:20:54] translate directly to the the the base layer that you need to put into um QGIS. So, there are some additional steps
[1:21:03] involved. involved. So, the short answer right now is you can't do it directly, but there are steps that will take you there. And um
[1:21:12] once again, I I understand that there are a lot of users that want to have this and you want to have
[1:21:19] it in a GeoTIFF format. You want to be able to directly take our data and have it in some sort of
[1:21:25] acceptable format that can be used in GIS and we are trying to um um set that up. Can you do it? Yes, it just
[1:21:35] takes more steps, but we would like to get to the point where we can make um like a GeoTIFF format product
[1:21:42] available. available. And um or if not, at least provide universally some directions for you to be able to do that. And that's being
[1:21:51] worked with the DAC. That's great. Question number 17. Are there any Python libraries specific to working with OCO?
[1:22:05] So, for example, not matplotlib, but ones implemented by NASA or OSS that work directly with OCO and
[1:22:13] net CD net CF4 files. Um Um Panoply? Okay, Panoply. Yes. Yeah, sorry. said it wrong. Panoply. Okay, so that's one option then to use
[1:22:39] Panoply to open the files, the net CD CDF4 files. And then export them. Question 18. Any notable OSS projects
[1:22:53] related to OCO that you can recommend? Oof. Um That's a loaded question. I have to come back
[1:23:17] to that cuz I I look at what in terms of what we could recommend and certainly what Sagar has worked with
[1:23:26] for this particular task. But as far as recommendation, recommendation, um I'm just cautious in how I answer this
[1:23:38] because I I'm I was we've looked at what makes the most sense to just do the task, but as far as
[1:23:46] something that's specific that we say, "Hey, just I I will have to come back to this question.
[1:23:55] Okay. Okay. Question number 20. Have you considered staging your data on a public Erdap server? This would allow users to
[1:24:09] programmatically access data using consistent URLs. Uh um No, we haven't because our data is made available through
[1:24:25] uh the doc and and to be honest with you, it's uh a lot of this since we make
[1:24:30] the data freely available, there's also uh cybersecurity issues that that um um that change. And And I
[1:24:43] I we really just respond to these requests cuz that years ago you know, we had FTP sites, but those
[1:24:50] all went away. So, um um I apologize that that that's just there are security uh protocols. And so, we
[1:25:00] will not be staging the data that way. I can make some specific files available, but not access directly like I'm I'm sure that
[1:25:12] that the person who's asking the question is is asking for. I I don't think that's going to change.
[1:25:23] Okay, and there's a one last question in the question box. Can we How can we do anomaly detection or
[1:25:32] deviation from long-term mean like standardized Z score? I don't understand the question. Okay, we There are some examples of um
[1:25:52] work that's in the literature where people have been doing anomaly detection. Maybe we can add some references to the Google Doc after the
[1:25:59] fact. That would be fantastic. Okay. Uh so, another question here coming in. Let me just Can you provide data on OCO-2 or OCO-3?
[1:26:26] And monitoring data for each different country at different times. For example, for countries that have signed agreements at COP26.
[1:26:39] So, I'm thinking this question is more focused on can you use the OCO-2 and OCO-3 data? For specific countries.
[1:26:50] The answer is yes. And again, this is a piece that we will discuss at the next session.
[1:27:00] So, the way we use the OCO-2 OCO-3 data is that we do not directly use the concentrations per se,
[1:27:08] but then we use the concentrations through an inverse modeling framework to estimate the net flux exchange that's happening between the surface and
[1:27:19] the atmosphere. We then bring in information about fossil fuel emissions, as well as information from other bottom-up
[1:27:28] inventories like movement of wood products, crop products, and other fluxes fluxes uh exchange that happen. And we pull in all that information
[1:27:39] together to deliver what we call as a net carbon exchange or NCE. And that term we can then sort of
[1:27:48] divide it up by country totals. And in fact, we are providing that information, those NCE estimates to the global stocktake process. We
[1:28:01] recently had an ARSET training on that global stocktake, and so I think it would be uh great to put the
[1:28:08] link for that global stocktake training materials here. And so, whoever asked this question can then take a look at
[1:28:15] those documents. Wonderful. Wonderful. And it looks like I skipped a question, number 19. Can the OCO-2 data files be imported in
[1:28:27] Google Earth Engine? And if yes, can you share any references for that? Uh Can it be directly imported into Well,
[1:28:42] it has to be in some sort of layer form, so eventually yes, but it takes a few
[1:28:46] steps. steps. And um can you share reference? I will have to write that up and make that
[1:28:53] available. Okay. But right now, if you open up our files in I know if you do it in in um
[1:29:04] Panoply, I think with Panoply it directly directly works into Google Earth Engine. That is a more or less direct step.
[1:29:17] Okay. Okay. Great. So, I think Let me see. That seems to be the last question. So, with that, um we will end this
[1:29:28] session. I just want to remind everyone that our next session is on Tuesday, May 31st. 31st. And Dr. Abhishek Chatterjee will be
[1:29:41] talking about measuring atmospheric carbon diox- uh sorry, he will be talking about uh global and regional carbon cycle studies
[1:29:50] uh using OCO-2 and OCO-3 data. Um he is the project scientist for OCO-3 and the deputy project scientist for
[1:30:01] OCO-2. So, please um don't miss this is this presentation will be another great one and the final
[1:30:09] presentation will be on Thursday, June 2nd. 2nd. Uh so, we have two more to go within this webinar series.
[1:30:20] I'd like to thank all of the participants and I would especially like to thank our guest speaker today, Karen
[1:30:27] Yuan, Yuan, um as well as Vivian Payne, Abhishek Chaturvedi, and Sagar Limbu for answering all the questions. And
[1:30:38] I would like to thank the uh team, So when Hudson-Odoi, Jonathan O'Brien, Sarah Kurchall, Brock Lovins. And
[1:30:50] And with that, I wish everyone a great day. Before we close, any final words from Karen? Karen? Um none. Thank you. Well, none. What am
[1:31:00] I saying? Thank you for being here and I know some folks have reached out to me directly already.
[1:31:08] You have my email. If you have questions, please reach out. I'm I'm happy to to work with anyone on this.
[1:31:14] Thank you. Thanks very much. Bye-bye, everyone. Thank you, Erica. Bye, everyone. Thank you, Abhishek. Thank you.
