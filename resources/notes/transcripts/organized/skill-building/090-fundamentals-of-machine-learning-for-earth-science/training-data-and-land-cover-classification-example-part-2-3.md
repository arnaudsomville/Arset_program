# Training Data and Land Cover Classification Example, Part 2/3

`https://www.youtube.com/watch?v=5RIoU9ImnH0` · id 29 · 1:32:13 · module 2 — 090-fundamentals-of-machine-learning-for-earth-science

[00:01] good morning good afternoon good evening welcome everyone to the training series fundamentals of machine learning for Earth science
[00:10] of the three-part Series this is part two training data and land color classification example once again I am your host my name is
[00:20] Brock Blevins I am training coordinator for NASA's applied remote sensing training program let's discuss our training objectives
[00:30] for this series overall we hope that by the end of this training participants will be able to recognize the most
[00:36] common machine learning methods used for processing earth science data describe their benefits and limitations explain how to apply basic machine
[00:44] learning algorithms and techniques use an analysis appropriate training data set to evaluate conditions and solutions for a given case study and
[00:54] complete basic procedures to interpret refine and evaluate the accuracy of machine learning analysis once again a reminder of the
[01:03] prerequisites if you don't already have a good handle of the fundamentals remote sensing we suggest you take a look at
[01:09] our session one that we have on demand fundamentals of remote sensing attendees will also need to access
[01:16] Google Drive and Google collabs so in order to do this you'll have to have an email ending in gmail.com
[01:25] we will have this training recording available within 48 hours so you can go through this perceive these procedures
[01:31] at your own pace here's a schedule for each of the three parts of this training April 20th
[01:39] through May 4th there'll be one homework associated with this series and it'll be made available by May 4th this would be a Google form
[01:47] submission and it'll be very similar to the questions that you are asked to reflect upon at the end of each Google
[01:54] collab session so with that I'm going to hand this over to Jordan who will introduce us to part
[02:06] two training data and land cover classification example okay so this is part two of our fundamentals of machine learning for its
[02:21] science science today we're going to talk about some of the churning data generation how we can do exploratory data analysis or Jada and
[02:29] then a particular land cover classification example the outline of session two we're going to first kind of explain how to download
[02:39] some of the training data we're going to discuss some of the Expo exploratory data analysis techniques we're going to extract data from tabular
[02:49] data sets and also from raster data sets and then we're going to have an exercise where we're going to be doing training
[02:55] and prediction of these double line raster data set formats lastly we're going to do some metrics and model evaluation we're going to
[03:03] discuss the concept of cross validation and how you can improve some of your models even when you have small data
[03:10] sets sets at the end we're going to have a post session assignment we're going to discuss briefly and then we're going to
[03:16] have the QA session as always the resources for this training are going to be on the kid of
[03:23] repository that we shared across these sessions sessions the objectives of today after participating in this training the
[03:32] attendees will be able to one use basic programming procedures to download use and process remote sensing data use an
[03:40] analysis appropriate training data set to evaluate the conditions and solutions for a given case study and complete
[03:47] basic procedures to interpret refine and evaluate the accuracy of the results of material learning analysis so with that
[03:55] said please so in today's training we will use some remote sensing data set clocked by an instrument called moderate resolution
[04:08] imaging spectral radiometer modest in short short and I will give a briefing introduction about the instrument and the data and
[04:18] how to access some of those modest products products first of all modest is a key instrument aboard both Tara and aqua satellites
[04:29] those satellites are polar orbiting flying at an attitude altitude between 700 to 800 kilometers and orbiting around the earth about 100
[04:43] meters and producing a stripe of the observation of Earth's surface and the satellite observation will cover the
[04:53] entire Earth's surface every one to two days days and data acquired by those instruments will further persist and generate
[05:05] different products including atmosphere ocean land and crossfair this product will help scientists to better understand Global Dynamics and the
[05:17] process process uh occurring on the land in the ocean and in the lower atmosphere our groups our group have multiple
[05:27] applications with modest products and one of them is to use modest land products to generate Global Water mask
[05:34] at a 250 meter resolution such water mask plays fundamental and critical role in processing remote sensing data for example scientists
[05:46] relied on collaboration algorithms to convert spatial signals clocked by Modest instrument and convert those signals into physical variables such as
[05:59] surface temperature if we mistakenly apply Lan algorithm to water pixels I will definitely introduce unnecessary arrows so our goal is to generate a high
[06:10] resolution a water mask over global and have a higher accuracy of water pixel and the land pixel distinguished
[06:21] in the in this slides we list a high level workflow of the process we taken we use
[06:31] machine learning and basic workflow are split into three different components the during the data processing with subset and extract surface reflectance
[06:45] from the modest land products and apply quality assurance to figure out missing data or bad data and we're
[06:56] constructing training data sets with those training data sets we build a random Forest actionables gbr models and train ways both GPU and
[07:09] CPU we also conduct a few hyper parameter tuning technique to get a better model and the final outputs will be annual and daily
[07:22] water land map and also a seven class water Maps per year on the right hand side you can see our
[07:31] product compared with other products generate with traditional method are slightly different we have a missed we have a different label on
[07:44] water or land pixels back to modest data all modest products are stored at the distributed active icon centers of NASA
[07:57] we call Dax and different products were stored in different location each link depends on what your specific task you
[08:08] can identify the modest products through different attack Center and each link will lead you to the introduction of data products and
[08:20] the different methods to download and or view those data products NASA also provides my web-based interface to access all that data
[08:34] models is one of those data products you can access through illustrator search here I showed one example you can use
[08:44] Earth data search to filter instrument instrument like select models you can view the list of modest products show up in the second
[08:57] panel and you can also reveal certain modest data products on the map the next slides actually I did a spatial
[09:10] and the temporal filter of us uh surface reflectance and a small preview map will show up on the
[09:23] eastern part of United States as a part of NASA open science policy and the related goals all that
[09:31] are migrating their collections to the Earth data clock and the different centers have a different schedule to
[09:39] proceed and on left hand side I show one example to migrating atmosphere data collections to the firstly the cloud and some of models
[09:52] data is already available in AWS Cloud as rebucket you can access with a database credential and AWS softwares to
[10:07] retrieve the data is necessary for you all right no I'm having heading to Caleb now we will look at uh exploratory data
[10:23] analysis analysis in the first session session Jules showed us this wonderful diagram of the machine learning pipeline here we will
[10:32] focus on a subsection of this pipeline exploratory data analysis or Eda is a critical step in this pipeline
[10:44] Eda is the process of understanding the data that you have collected or that you are going to use in your machine
[10:51] learning model Eda can help identify missing values outliers correlations and patterns in the data through cleaning pre-processing statistical analyzes and
[11:04] visualizations to get a high quality data set data quality is a critical factor that can significantly impact machine
[11:15] learning model performance poor data quality can lead to inaccurate predictions biased results and poor model performance emphasizing the
[11:24] importance of high quality data pre-processing and cleaning therefore it is essential to ensure that the data used to train a machine learning model
[11:32] is of high quality we can do this with with proper pre-processing and cleaning to remove the outliers missing values and
[11:40] inconsistencies in the data as well as identifying things like correlations and patterns by visualizing the data ensuring the data quality is high is
[11:51] critical for building accurate and reliable machine learning models that can be used to make informed decisions the main data types that most people
[11:59] would be working with in a machine learning data set in a training data set are numerical categorical data Text data
[12:09] or time series data numerical data includes continuous or discrete values while categorical data includes discrete values that represent
[12:18] categories or groups text Data includes unstructured data in the form of text or natural language time series data
[12:26] includes data points that are collected at regular intervals over time and can be used to forecast future values or
[12:32] identify Trends and patterns in the data off to the right we see a real world example from our Modis training data set
[12:39] we use pandas to describe the data set variables and we can see if there are any null data set null values as well as
[12:47] the numerical data type all of these are a part of the numerical data format they are continuous except for the water
[12:56] variable which is categorical of water or not water after understanding the data types the next step in Eda is to clean and
[13:06] pre-process the data missing values compose a challenge for machine learning models so it's important to understand the extent of
[13:13] missing or null data in the data set we are working with this includes handling missing values removing duplicates and dealing with
[13:21] outliers outliers missing values can be handled by imputing the mean or median value of the feature by using more complex imputation
[13:30] techniques techniques removing duplicates and dealing with outliers can help improve the quality of the data which in turn will affect the
[13:37] model performance to the right we describe some methods to detecting and handling null values in pandas we can use is null to detect null values
[13:48] in a pandas data frame that's in your machine learning data set we can also handle those null values using methods
[13:55] like Drop n a to drop rows of your data set that contain a null value you can
[14:00] use fill and a to fill out null values with a special value like mean or median we'll see more of this in our uh
[14:07] exercise and on Eda in exploratory data analysis visualizing data distributions is a critical step in understanding the underlying patterns
[14:18] and characteristics of a machine learning data set by exploring the distribution of the data we can identify outliers assess the
[14:26] data's normality and determine if there are any relationships or correlations between the variables there are several common methods for
[14:34] visualizing data distributions including histograms box plots and density plots here we're looking at histograms histograms provide a visual
[14:43] representation of the distribution of a single variable box plots and density plots show the distribution of multiple
[14:50] variables variables histograms are a graphical representation of the distribution of a data set it shows the frequency
[14:59] distribution of a single variable with the X asset axis representing the range of values in the y-axis representing the
[15:07] frequency or count of the observations in that range histograms can be used to identify the presence of outliers and or unusual
[15:15] patterns in the data to the right we see a histogram that shows the spectral response for a single
[15:21] modus surface reflectance band grouped by class up top is the class of not water down low is the class of water
[15:32] what we can tell from this is that there is a significant difference between the range of spectral responses for this
[15:37] band across the top class compared to the second class which is water this lets us know that there's a relationship
[15:42] between the spectral response of this band and the water not water classes a machine learning outlier detection is
[15:51] the process of identifying and handling data points that deviate significantly from the rest of the data set outliers
[15:57] can be caused by measurement errors data entry errors or represent genuine extreme values in the data in either
[16:04] case outliers can have a significant impact on the accuracy of our machine learning models and it's essential to
[16:10] identify and handle them correctly box plots are a powerful visualization tool for detecting outliers they display the distribution of a data set by
[16:20] showing the median quartiles and outliers outliers in a box plotter points that are more than 1.5 times the
[16:27] interquartile range away from the nearest quartile box plots can be created for individual variables or multiple variables At Once
[16:34] by visually inspecting box plots we can quickly identify the presence of outliers in our data we can see an example of a box plot here
[16:43] to our right the black plot on the left is a box plot of a surface reflectance band where the
[16:48] points are labeled land the box plot on the right is where the points are labeled water what we see here is that
[16:54] there are some outliers in the right box plot labeled water it could be the case that some pixels in there should have
[17:00] been labeled land or distribution isn't normal enough outlier detection is an essential step in machine learning and visualizing box
[17:09] plots and Scatter Plots is a powerful tool for identifying outliers in our data set by detecting and handling outliers
[17:16] correctly we can improve the accuracy and robustness of our machine learning models in machine learning understanding the
[17:24] relationships between variables is crucial for developing accurate and robust models investigating correlations between variables can help us identify
[17:32] which features are most relevant to the problem we are trying to solve and improve the performance of our models
[17:38] one common approach to investigating correlations in machine learning data sets is by using a correlation coefficient heat map
[17:47] the correlation coefficient is a statistical measure that quantifies the degree of linear relationship between two variables it ranges from negative
[17:57] one to one where negative one indicates a perfect negative correlation zero indicates no correlation and one indicates a perfect positive correlation
[18:07] the sign of the coefficient indicates the the direction of the relationship with positive values indicating a positive correlation and negative values
[18:16] indicating a negative correlation by using this correlation coefficient heat map we can identify which variables are highly correlated with each other
[18:27] highly correlated variables can lead to multi-collinearity which can cause issues in model interpretation and lead to unstable and unreliable model
[18:36] coefficients coefficients therefore it is important to identify and handle highly correlated variables in the data set before developing our
[18:45] machine learning models a correlation coefficient heat map is a powerful tool for investigating correlations between variables in a
[18:52] machine learning data set by identifying highly correlated variables we can improve the performance and interpretability of our models however
[19:01] it is important to remember that correlation does not imply causation and other factors may be influencing the
[19:07] relationships between variables here we take a closer look at the correlation coefficient heat map of our Modis training data set as expected we
[19:18] can see that some bands that are closer together in wavelength have a strong relationship with each other we can look
[19:25] at how each band affects the water classification as expected from seeing our histogram of the distribution of
[19:31] values we can see that a lower value from each of the Bands Trends towards a classification of water although no band
[19:38] stands out by having a very strong negative correlation in conclusion Eda is a critical step in any machine learning project to
[19:47] understand the structure and properties of the machine learning data set visualizations and Analysis techniques such as data distributions correlations
[19:57] missing value handling and outlier detections can provide valuable insights for feature selection pre-processing and model selection with these Eda techniques and tools
[20:08] machine learning models can be developed with a better understanding of the outlying underlying data now that we've talked about exploratory
[20:23] data analysis let's do some in practice here we're at the rset ml fundamentals GitHub and we can access our next
[20:31] exercise it is the Modis Eda one and we can click on the link to open it in
[20:37] Google collaboratory and run it there remember you do have to have a Google account to access this
[20:43] is an introductory notebook to familiarize yourself with Eda techniques for machine learning for this work we will use data from the Modis instrument
[20:51] to test several data science techniques and machine learning algorithms the intent of this notebook is threefold first an exploratory data analysis is
[21:00] conducted to visualize the optical data of the Modis instrument and the distribution of this tabular data set
[21:06] across water pixels next this notebook briefly reviews the correlation of some of the spectral bands in the task water classification
[21:14] finally we introduce the topic of feature engineering and outlier detection that might be of use for other
[21:19] applications applications this entire work is done using the Python programming language and based on a data set uploading the hugging phase
[21:29] so here we're going to start running remember we're gonna get this warning that's okay we wrote this
[21:38] thank you so while the collaboratory environment has many of our packages like before we still need to install some of our own
[21:51] so we've installed the packages that we need now we're going to import some other packages that we'll use for
[21:57] performing the exploratory data analysis we're going to Define some general variables that kind of sets us up
[22:06] and we're going to load in our data set this is coming in from hugging face a tool that you're able to share data sets
[22:14] and models we load this into a pandas data frame and we can kind of examine a sample of
[22:20] it here we see that we have our water classification and we have our surface reflectance bands that come from the
[22:26] Modis instrument we also have some calculated indices that are some indices that are calculated from the surface
[22:32] reflectance bands in this section we'll start to inspect and understand the nature of our data set set the simplest first step when we have a
[22:42] data set is to inspect the data types columns attributes and the shape of our data set here we see that all of our data are of
[22:51] type in 64. if we don't have any null values and we have 800 of these values and we have 10 columns variables
[23:01] pandas provides an excellent function to inspect the contents of our data frames in a more concise way note the number of
[23:07] observations per feature and the minimum maximum values per modus band unfortunately the described function does not provide any information for us
[23:19] to notice if there were any no data values in the data set for example let's copy a row from the data set and
[23:25] introduce a no data value in the water column our label and note how the described function from pandas does not
[23:32] change the overall statistics besides showing an item Less in the count section here we do that we put in the
[23:39] first as Nan and then we look at the describe and we see that there is no sort of indication that there's null
[23:47] value value thus if we want to know if our data set contains any no data values we need to
[23:52] perform one more step in order to understand which columns might have no data values we can use the is null
[23:58] function which gives us the co the rows that show us where there's a null value we see here sure enough that we have a
[24:06] nand value in our water column okay okay there are many ways of handling no data values in machine learning we'll not
[24:16] dive too deep into the details of it but as a general idea we can remove rows with no data values and if we know no
[24:23] data's values belong to a specific group we might be able to convert it to the appropriate value for example our
[24:29] digital surface model returns no data values only on water bodies which could be useful to apply here for additional
[24:35] data points once we We have dealt with our no data values we can go ahead and visualize
[24:40] some of the data to understand its structure and find any patterns here we're taking a sample of the
[24:48] overall data set 10 of it to speed up some of the visualizations that we're going to perform
[24:55] this will still give us a general idea of what the overall data set is doing but it's useful to do if your data set
[25:02] is too large and it might be too computationally expensive to perform some of the tests here in our exploratory data
[25:09] analysis analysis we see another sample of the data set and here we're going to do a correlation
[25:16] plot with water points as the orange this is a lot to take in but what we can
[25:23] read from this is the X and Y axes are our bands and those are the correlations between those bands so we can see
[25:33] down here we see the correlation between ndwi the normalized differentiable water index 2 and the surface reflectance band
[25:42] 1. the orange points are labeled are the points labeled water while the blue points are the points labeled land
[25:50] we can see there are some sort of relationships but it's a little messy to tell we can get a little more idea from
[25:58] some other points such as surface reflectance band 5. and surface reflectance band 2. we can see that there's a little better
[26:06] grouping of the land pixels against the water pixels that are down here this is useful in telling the
[26:13] correlation relationships between different variables in addition to being able to separate those correlation relationships between land and water
[26:22] values another good practice is to understand the distribution of values for each column feature this will show you where
[26:32] most of your data lives for each feature in the data set including the distribution of training labels
[26:38] here we have a pretty perfect split between land and water values so we would expect to see almost the same
[26:44] number of land pixels and water pixels in our data set now we have the distribution of the
[26:51] total data set of each of the Bands we see it doesn't look like a totally normal distribution where you have tails
[26:58] on both ends this is mostly because we have a the water distribution is different from the land distribution and
[27:06] combined it makes it look a little strange strange we can see here that we have two humps
[27:12] and we can kind of identify that this may be the water Distribution off to the left and off to the right we have the
[27:19] land distribution now how can we do a more statistical approach to correlation using we can use the pandas core function
[27:30] this will give us the previously talked about correlation coefficient heat map that we had seen earlier this tells us between negative one and
[27:40] one if if two different variables have a negative relationship or a positive correlation relationship we see that previously stated the
[27:52] surface reflectance bands that are closer together and the way in wavelength are highly correlated and we also see that there are negative
[28:00] correlations between the Water band The Water classification and the surface reflectance bands meaning that the lower the surface reflectance bands may be the
[28:09] more water it could be here we take another look at the distributions this gives us a nice
[28:20] little line that follows along with the distribution it might be a little easier to look at um
[28:26] um we see kind of the same distributions and we can just kind of see the relationship of water and land between
[28:32] the two we can also Target specifically the distributions of specific features when related to this corresponding label this
[28:43] first one is the surface reflectance Band 1 corresponding to the water label the water label is the one down low
[28:52] the land label is the one up top we see that there's a pretty normal distribution up top with a higher median
[28:59] value value um um and then down low we see kind of a different type of distribution for water
[29:07] where most of those Trend towards zero and much lower than the land distribution we can do this again for all of the
[29:16] other variables in our data set we see pretty much similar things some bands have closer together distributions than others
[29:29] and some bands it's pretty easy to tell the difference between what a land pixel might look like in a water pixel might
[29:35] look like based off of the distribution of the variables I'm going to keep going so now that we've taken a look at the
[29:51] distribution of our variables we can start looking at outlier detection finding outliers is important to understand those Corner cases where our
[29:58] models might not perform as expected or where we might need additional training data from there are several ways of finding
[30:05] outlier values but we will concentrate on Turkey IQR for this example turkey IQR rule says the outliers are
[30:14] values more than 1.5 times the interquartile range from the quartiles either below q1 minus 1.5 IQR or above
[30:24] Q3 plus 1.5 IQR thus we can simply calculate outliers per column feature by taking the necessary necessary
[30:32] percentiles percentiles here's our function to do that here we see the floor which is the q1 minus 1.5
[30:39] and the Q3 plus the 1.5 interquartile range for example we do this for ndwi2 and we can get the outliers from ndwi2
[30:53] we see these are really low or really high values this might tell us that there's something wrong going on than the
[31:01] calculation of ndwi2 or that there's something wrong in the surface reflectance bands that are leading to these calculations being way off from
[31:11] the normal distribution next we're going to look at feature engineering or creating new features there are cases where our features might
[31:22] not be enough for our model we might have a small number of features or a set of features that might not be
[31:28] representative enough one General approach to solve this is to use future engineering technique techniques to increase and or improve
[31:36] our data set representativeness for our water classification example we do not need any feature engineering techniques since we were able to perform
[31:43] accurate detections by simply calculating several indices and using the original band Optical bands however this might be necessary in other
[31:52] problems where your data by itself might not provide enough representativeness here we have a function to do pollinate
[32:00] polynomial features between the um the surface reflectance bands or the features in our data set these are going to be relationships
[32:10] between the Surface reflectance bands and we can generate a variable for each one of those here we simply reduce the combinations
[32:18] of the bands and this increases our future space from 10 to 65. for an algorithm like a random Force
[32:26] where decisions are being made this could provide a substantial Improvement algorithms like convolutional neural networks might not need this since they
[32:34] can extract patterns directly out of the data on their own here we see the updated data set where
[32:41] we have the usual features that we've been looking at before but also we have additional features which are the
[32:48] combinations of each of the Bands we see that we've upped our column count to 66 from 10.
[32:57] next we're going to look at dimensionality reduction using principal component analysis or PCA PCA is a technique that transforms a
[33:05] data set of many features into principal components that summarize the variance that underlies the data this can also be
[33:12] used to extract the principal components from each feature so they can be used in training training here we apply the princip the PCA
[33:20] algorithm telling it that we have 66 columns to apply it to we apply that transform to our data set
[33:28] which is the data frame here we see the output of the PCA algorithm we have a sample here of five
[33:35] rows we can see that 66 columns are accounted for in each of them the output of the PCA is the removing of the
[33:42] variance in summary well what have we done we've downloaded a modis-based data set for training which we'll use in the next
[33:52] portion of this training we've performed exploratory data analysis on the provided data set and understood some of the characteristics
[34:00] of the given data set we've introduced several feature engineering techniques for dealing with no data and to increase
[34:06] the training data representativeness we've also provided additional tools to deal with the data and drive physical conclusions before going into training
[34:15] our machine learning model now I'm going to hand it over to Jules to talk about training and testing of
[34:27] the random Forest now to start the training and evaluation from a model we need to go to the GitHub repository and click on
[34:43] the the Google Scholar link and train and evaluation to start this section we need to obtain the data set
[35:00] and these particular cells help us to download all the data that we need for this here in order to design a
[35:14] python workflow it's important first of all to import the necessary module that we need for our application and here we
[35:23] we have a list of important module and I want to highlight a couple of them especially the one the one related to a
[35:31] cycle Loan in this particular cell we import all the necessary cycle learn tool that we need we'll need for our
[35:40] application application on top of cycling we are going also to we need also some kind of visualization
[35:47] Tools in Python especially C bone that is that is needed to have some kind of statistical plot and also Matt proudly
[35:56] who have basic plot on top of that we need also some kind of a geospatial special related tools especially osgos
[36:06] and volume now that we have imported all our module it's important to consider to set some kind of parameters that will need to to
[36:20] download the data and also to determine what kind of uh features we need to extract from the data set that we have
[36:27] and it's important to note here that the feature that we selected here uh were done based on the exploratory data
[36:37] analysis analysis work that Caleb did previously the first thing that we need after we selected the features the first thing
[36:53] that we need to do is to load the data in machine learning we need to split the
[36:59] data set into two groups after we download our data set we proceed to split into a training set and test set
[37:13] it's important to see that the water column is set has the Y features and is dropped from the X features
[37:23] and it's important to note that if you look at the shape of the the training set and the the test set we have exactly
[37:34] 10 800 data points in the training set and 200 data point in the test set it straight it split like 80 for the
[37:42] training set and 20 for the test side for this exercise we have downloaded our data directly from
[37:52] from the database where we already had made the split between training set and test set but in real life that is not
[37:59] the case and we may we may need to to use uh the cycle learn tools train test split
[38:07] function function to really split our data and here is how you can it can be done something that's very important is if
[38:17] you want to duplicate the result in spicy when you do the when you do the training and you want to have a when any
[38:24] time that you do the training you want to have exactly the same result it's good to use the random state
[38:30] and the random State parameters so that the result can be easily duplicated and also in this particular case we say we
[38:39] say that the training set the size should be 80 percent in general and and we want to mention
[38:44] that 80 is not some kind of a set number that can be used over and over and it's
[38:49] applicant depend application dependent sometimes it can be seventy percent sixty percent and depending what uh depends on the application
[39:01] it's also very important to find a little bit the distribution of the of the water in in our case in in the
[39:09] training set and the test set as we can see here if you count the number of values you have you see that we are
[39:15] almost 50 percent 50 percent of uh the data are water and uh on both the training set and and the test set so we
[39:25] can use the stratification parameters to really mimic the distribution of the water in the training data set and this
[39:33] and the test data set to have some kind of similar similar distribution in term of water so we pass the stratification
[39:41] parameters in the split function and that allow us to have some kind of even distribution of water in both the
[39:51] training data set and the test data set once we have our training set and test set we can we can proceed to prepare our
[40:06] training model for training one technique often used to better validate the robustness of a machine learning model is the careful
[40:16] cross-validation method cross validation is that it's a statistical method used to estimate the skill of machine learning models
[40:29] when using careful the data set is split into K number of subset K1 subset then are used to train the
[40:40] model model and the last subset is kept has a validation set to test the model assuming that we have a five-fold
[40:52] cross-validation we want to use a five-fold cross-validation method basically basically the data set are going to split into
[41:01] five groups the first group will be used for testing and the remaining four groups will be used for
[41:09] training training and we are going to rotate the groups until we run the model four five times
[41:16] and every time we are going to we are going to get the scores that is the idea behind the keyfold uh
[41:24] cross validation method here we are going to set the value of uh of K to be five
[41:30] basically we are going to split the the data set into five group before we proceed we need to have some kind of a basic
[41:41] status statistic on the training data set and we use the describe function to re to really produce some kind of the
[41:50] mean the standard deviation and the different type of percentile that gives you some kind of idea of the
[41:57] distribution of each features and see if any identify possibly some kind of outlier outlier outlier but the work was already done in
[42:07] the exploratory data analysis we can use thresholding method base on our physical knowledge to extract and straight
[42:15] interesting features of outlier that we may want to visualize later when evaluating the model and we Define this
[42:23] particular function to identify some kind of outlier that will be used later model definition and and training
[42:36] in this particular prop application we are going to use the random random Forest method for for training the model
[42:47] and in order to Define and we need to First Define some kind of parameters that are needed to for the random forest
[42:54] in this particular cell we set all the needed parameters that would be that would be will be need to define the
[43:01] model after we Define the parameters now we need to pass those parameters as argument of the random Forest function
[43:11] and that defines here our model the classifier is our model now in order to use the k-fold method
[43:19] and we remember that we set k equal 5. now we are going to go to a set of
[43:26] iteration where we are going to train based on the the the five groups we are going to train the model
[43:34] test test the accuracy of the model and determine some kind of score and based on the value of score the score we are going to
[43:43] determine if that particular uh uh the model is good enough and don't forget that in terms of score the ideal score
[43:51] is equal is one if the closer we are one the better we are as you can see when to test the accuracy
[44:06] of our model we have some kind of accuracy that above when 0.95 and we are closer to one and that
[44:14] is give you some kind of good indication that perhaps the random forward can be a good model for that for this particular
[44:21] application as we you can see here that we can have uh an accuracy of about 99 percent
[44:42] now that we have done the the k-fold analysis we can now focus on the random forest model
[44:52] now the random forest model will be applied to the entire training set and when we are done with the training
[44:59] set we are going to go to the test set but it's very important when you define some kind of model the model has to be
[45:06] performed in acceptable way with the training set first before even moving to the test side because if the score is
[45:13] very low in the training set we don't expect anything go to come out of the test set so it's very perhaps you need
[45:20] to redefine some kind of parameters in this particular example we Define again our random first model we apply it to the training set
[45:32] and we see how it fit well with the training set and now we go and we check
[45:39] what is the score that we have on the on the test set and we have a score of 98
[45:44] that is very good though we may we may we may have something better but it a score has closed has one has this one
[45:55] give us an indication that more likely we have a good unacceptable model now I'm going to pass to Jordan who's
[46:03] going to continue with the evaluation of the model okay so now we're going to proceed to do
[46:11] the model testing and training and testing of the data through validation so once we have actually trained our
[46:18] model we can then proceed to use this best model that we found from the k-fold cross-validation and then use that model
[46:24] to perform validation of the actual test data set first we're going to get some more of the model metrics the first thing that
[46:31] we need to do is load the actual best model that we found from the cape fold cross-validation and then get this score
[46:38] over the test data set and we can see that we have a score of 99. in many
[46:43] applications and since this data sets small this might be let's say in an excellent score but in other
[46:50] applications we could actually be seeing an overfitting effects while having a small data set so we do need to make
[46:56] sure that you kind of test on a test data set or a validation data set that is hard enough or that has complex
[47:03] dependencies on the test data set so you can evaluate how generalized your model is or how good your model is to
[47:11] predicting on scene samples once we have the score of our test data set we can then easily perform predictions over all
[47:18] of our training data sets test data sets and then create a on object for storing those probabilities and the
[47:27] probabilities of the random Forest allow us to understand how good the model or confident the model was in regards to
[47:34] predicting individual observations by calculating the probabilities from each one of the features from our data set we can understand if our model was
[47:45] simply randomly outputting decisions or if it was actually being confident enough to provide probabilities of 4-H observations that are higher than 50
[47:54] percentage percentage anything below 50 percentage in regards to the actual probability means that will be kind of in the low range of not
[48:03] being able to assess very well how a pixel is performing or with the actual class of that particular pixel
[48:09] in this graph over here we're looking at all the probabilities and we can see that we have huge picks on how confident
[48:17] the model was in regards to water pixel and then how confident the the model was in order to Lan pixels know that we
[48:25] don't have many occurrences on that middle range between like 40 percentage and 60 percentage of probability which
[48:33] means that our model lean towards more confidence along both ends of the classification problem besides looking at some of the
[48:43] probabilities we can go ahead and look deeply at the actual scores and getting all the metrics besides accuracy we can
[48:50] look at recall on precisions looking at how a model is doing in regards to like false positives and false negatives
[48:55] we're going to also look at the f1s score which is basically the harmonic mean of precision and recall and we can
[49:04] also look at some of the confusion Matrix to see where are failures or where are missing features land on and
[49:13] in this example we have that we calculated properly 119 features on both ends but then we misclassified some of
[49:21] the pixels between water and land basically over committing to one of those those we can also look at the receiver
[49:28] operating characteristics of the model which is going to tell us our break between true positives and false
[49:35] positives positives in the idea here is that we want to have an rocau score at least of one another
[49:42] we're actually matching that pretty well in regards to the actual performance of our model and again depending on the
[49:48] model that you might be training on it might be more complex you might have an Roc curve that could be a lot smaller or
[49:55] smoother which would tell you that your model is performing at least decently or if you're missing any training data or
[50:03] additional training to improve your model model once we have trainer model we have seen that the accuracy score and some of the
[50:10] other metrics that we have been using are pretty substantially positive we can look at how the model is looking at
[50:17] things how is the model learning and the first step that we can do here is to do
[50:21] some permutation importance to look at what features from the data are the most important for this model to perform the
[50:29] proper classifications that it's doing so far if you look at this graph over here we can see how the importance of each one
[50:35] of the variables is in regards to how the model is learning and we can see the software reflection
[50:41] span 2 is actually one of the most important features at the time of doing the selection between land and water and
[50:48] also the ndvi who continues after that one one we can also see that the nvwi one band
[50:57] is the least useful band to actually talk on the prediction but at the end of the day some of these features they
[51:06] might not be showing a lot of permutation importance on the graph but when they are combined or when they are
[51:13] removed this permutation importance can change just because of how our tree structure is looking like on the random
[51:19] Forest Forest the last step is to actually save our model we have look at the model we have
[51:25] look at how the feature importance deals at the model but we can now save the model so we can do additional
[51:30] predictions and we have so far been looking at predicting on a tabular data set but we can also take rasters and
[51:39] then predict over them by modifying or pre-processing them to account for a tabular data set so the first step is to
[51:46] download some of our geotif files that we have uploaded to the database particularly using the hogging phase repository for this
[51:54] tutorial tutorial then we can get a list of those files by only using rejects options and by taking
[52:00] all of the files and individual bands and stacking them into a single raster once we stack our bands into a single
[52:08] raster we can then proceed and do some of the feature engineering by calculating the indices or validation
[52:15] instances that we have been using before to the training in this case the ndvi the n3wi one and then the ndwi2 and we
[52:25] can do this on the fly so once we get a geotif file that only has the software
[52:30] surface reflectance band we can calculate some of these indices without needing to to look for additional external data
[52:38] once we have created our data set and we have an array of features we can then look at some of the imagery and then we
[52:46] can just start predicting and know how we came from what a array format we has an input to then a tabular format
[52:54] that we can then use for doing the predictions that we need the last step here is to actually go
[53:01] through and perform the prediction you know how we are just getting the classifier and then one performing a
[53:08] single prediction and two outputting the probabilities per picks or or per actual feature to see how the model is
[53:16] performing for each one of those features and this is really use for us and can be used as a Q8 mask because you
[53:22] can actually take the uncertain of those observations from the prediction output the last piece of here is that we then
[53:31] want to reshape our tabular data set into the exact shape of the geotif that we initially predicted so once we reach
[53:39] a our data set we can see that we have a single band array with all the probability predictions per observation
[53:50] once we have a prediction we can then perform perform post-processing techniques and many of these post-processing techniques can
[53:58] include smoothing the the imagery that you're predicting on it could be removing small observations that might not be relevant to the actual product
[54:08] and there might be noise from the model but in this case we're only doing post-processing by applying the QA mask
[54:14] that we take from the Modis data set and the idea is that we read the mask and
[54:20] then we add no data values to all of those features that we know are for sure or uncertainty features or features are
[54:28] just not relevant to the final product that we want to generate once we have produced our QA geotif we
[54:39] can then proceed to visualize it on a an interactive visualizer and in this case we're using volume there are many
[54:46] Alternatives out there but the idea is that you want to relate the performance of your predictions across the spatial
[54:54] extent of the data there are cases where you might have representative training of particular observations based on
[55:03] let's say the Specter of audience of them but there might be some cases where you might not have enough spatial
[55:09] representativeness on your training data set to account for some of these observations so in here what we do is
[55:15] that we create a stack of one a base map taken from Google satellite and then the actual prediction of our water mask the
[55:23] Water Mass is in here and this is the Lake Powell which is our tile of interest you can see that if we turn on
[55:30] and off a water mask we are do we do predict the leg power observations from this base map we can also see in
[55:40] other locations where we might actually have some other water bodies that we're identifying and then even some noise
[55:48] that can be taking on from other locations where there are no water bodies or water pixels attached
[55:57] okay so as a summary we have one downloaded a Modis based data set for training and testing a model
[56:09] we have performed additional exploratory data analysis on the provided data set to complement the information we already
[56:16] have for training and testing this model we have training performing fairings using a random fourth model of a binary
[56:23] classification problem which in this case is getting water surfixed and maps and we have also created interactive
[56:30] visualization by predicting both tabular and then thruster-based data sets across the random forest model we have also provided a quick overview
[56:40] of more explainability which we will dive in more the in more details on a future session in regards to how to
[56:48] understand how the model is thinking and then how the model is learning last but not least we provided some
[56:53] cross validation techniques to understand how the model can be trained automatically in several iterations of the training data set to get the best
[57:03] model out of the existing training data set that we might have so just as a reminder we have an
[57:21] assignment for this session 2 topic particularly looking at some of the techniques we already used and then
[57:26] expanding on them you can just click on the open Google collab button here and it would take you automatically to the
[57:34] assignment notebook that you can work from thank you very much Jordan before we open up to address your
[57:47] questions uh let's review what we did here today we hope that after this part of the series you're able to see some examples
[57:53] of downloading the training data and doing some exploratory data analysis extracting training data taking a look at some metrics and
[58:03] evaluating your model and then a Hands-On Jupiter notebook experience on a modus water classification case study looking ahead to part three
[58:13] the final part in this series next week will cover an overview of model tuning a little bit on parameter optimization and
[58:22] exercise to optimize existing models and then we'll also go into another exercise doing improvements to the Modis water
[58:32] classification model so we hope that you join us for part three if you have any questions you can
[58:39] contact myself or our set colleagues with the email addresses here as a reminder here's the course web page
[58:47] where you can find all the materials including the PowerPoint presentations the videos links to the Google collab
[58:53] homework in Jupiter notebooks as well as the homework link that will be available by May 4th this is also our primary rsat
[59:01] website you can check out for other great trainings follow us on Twitter or our trainings as well as exciting
[59:08] announcements from NASA's Earth Sciences now let's enter into the question and answer period please enter your questions in the questions box and we
[59:18] will answer them in the order in which they are received thank you Brock hi everyone my name is
[59:30] Melanie fallette cook I Am project scientist for the rset program and I will be moderating the Q a today
[59:38] so let's start off uh question zero we saw a couple of these questions in the Q a so just want to have some
[59:46] clarification on the homework so as you complete the assignments that are linked in the rset GitHub machine
[59:54] learning training we have a link to that in the chat um you'll see some kind of guiding
[1:00:00] questions at the end of each at the end of part three so at the end of the completion of each part of this
[1:00:07] training we will open up a Google form homework at which point you can enter in your answers to the questions there and
[1:00:14] that will be the homework submission so there's nothing to submit anywhere until we open the homework at the end of part
[1:00:20] three three and you can access recordings q a docs once we've posted them and the homework from the training web page which is
[1:00:29] linked here question one are the Modis 250 meter data corrected for bow effects in other words enlargement and stretching of the pixels
[1:00:42] because Earth curvature at the edges of the swath so Jean you covered this part did you want to take this question
[1:00:55] so yeah the mode is so yes the Modis data is affected by the bow tie effect uh
[1:01:07] there's no real correction for that uh it is mitigated by gridding the the swaths into uh integrated tiles uh I as
[1:01:19] referenced here in the l2g product so the the pixels in the in the tiled products are identical size but they're
[1:01:27] you know the underlying observation is still the the bow tie affected observation uh there's a lot more
[1:01:34] information you can get by following the link there to understand uh all of this I don't think I want to use any more
[1:01:40] time here to go into that um but what we do in our production algorithm is just exclude uh pixels that
[1:01:47] have a very large uh viewing angle great thank you Mark question two and the homework for part
[1:01:59] one we did the k-means with CPU and GPU and I'm getting very different results the number of grid points assigned to
[1:02:07] each cluster is very different is that how it's supposed to be yeah I can answer that one so oftentimes
[1:02:16] there are actually differences between CPU and GPU algorithms and this is because of some pieces in the
[1:02:22] parallelization of these so these differences they should not be significant but they can just be present it can just be like calculation errors
[1:02:32] you hear it from some of the like processors that are being merged at the end there some of the difference that you might
[1:02:39] see in the actual like centroid calculations of Decay means so don't worry about it the main idea of the
[1:02:45] payments algorithms just to calculate some centroids from the only spectral data we're fitting into the into the
[1:02:51] algorithm so they should at least provide some segregation between the vector values question three what are some of the key
[1:03:06] methods used to remove outliers from the data once detected yeah I can answer that um um so there are generally a few methods
[1:03:25] that I didn't get to all of them but for removing the outliers um I I gave a link and I can
[1:03:34] um basically there's a there's a few pandas methods that you can use that just gets rid of outliers based off
[1:03:41] of the number of standard deviations it's really up to you as the user to determine how you want to remove or
[1:03:48] which outliers to remove but um if we could copy and paste that that link that that'll give a coding example
[1:04:00] right and as a reminder we will post this q a so the document that you see um in just a couple of days after the
[1:04:09] completion of this part so everybody will have access to those links links and it looks like Natasha is copying
[1:04:16] into the chat right now question four can bias correction help to improve the quality of data sets also
[1:04:25] why don't we use negative 999 to represent missing values rather than using mean values so this is this is Mark again
[1:04:38] um I'll uh I'll jump in on I'll jump in on this one so there's there's some disagreement among Among Us developers
[1:04:45] on this particular one uh it kind of has to do with your point of view about interpolating data or not I come from
[1:04:53] the campus never interpolate under any circumstance ever Just Produce just leave a hole and let it go uh there's
[1:05:01] definitely other camps that have less strong feelings about interpolating uh output values or input values the result of the answer is if you if
[1:05:13] you interpolate values then you're going to get some you know unknown response so it under the tolerance of the project for
[1:05:23] having holes in the output date and the output data if you can't tolerate holes then you need to interpolate if you can
[1:05:30] tolerate holes then uh you're in my opinion you're better off leaving the leaving the the values that are are
[1:05:37] missing just just leave them out and let there be a hole so it's a judgment call thanks Mark did anybody else want to
[1:05:54] weigh in before we move on to question five sounds good oh Caleb I'm sorry I was just gonna say Mark summed it up pretty
[1:06:06] well well um just to specifically answer why not negative 999. um generally if you're gonna so so ideally you want to just get rid of it
[1:06:18] and not fill it in with anything if you were to impute something you know you'd want to take a statistical measure to
[1:06:25] impute a value that kind of makes sense in the data distribution and not use some sort of place placeholder like
[1:06:32] negative 999. thanks okay question five is there any guideline or accepted practice for how high of a correlation
[1:06:48] coefficient should prompt you to discard one of the variables there's often High correlation between spectral Brands but
[1:06:54] they still contain distinct information they can jump into that one so from the data science and statistical point of
[1:07:03] view any other features that would have kind of a correlation higher than like 0.95 you normally just drop them in
[1:07:11] algorithms are just say decision based now there are other algorithms that you could even just allow them to be there just because
[1:07:19] they're looking at non-linear relationships that might not be represented by some of these like correlation matrices like the experiment
[1:07:27] or the Pearson it's going to depend on on the use case but some of the best practices are just like dropping some of
[1:07:33] these highly correlated variables and allowing your machine learning decision model to just um extract features out of
[1:07:40] them them in high perspectral data sets then you kind of go into more complex details because you're then looking at some
[1:07:47] really small deviations between these um these bands so you can go into like principle component analysis or other more complex
[1:07:55] algorithms I can group some of these like individual features and you can look at the variants from there
[1:08:06] thank you question six what is the difference between random tree classifier or RTC and random Forest classifier which
[1:08:17] machine learning classifier is also good for coarse moderate and high resolution satellite images I can jump into that one then
[1:08:39] um so generally speaking the best classifier for like fine spatial resolution data is going to be one
[1:08:47] that is might not be the best for like a course resolution or even like moderate resolution so some of the times we
[1:08:55] actually leverage spatial algorithms like cnns or convolution neural networks to do some of the very high resolution
[1:09:02] um imagery classification just because it can take into account individual pixels but also surrounding pixels for the neighborhood to actually
[1:09:11] calculate some of these predictions so it's gonna also depend on let's say the resolution of your data but just
[1:09:18] take into account the course resolution you might not need some of those spatial um um no knowledge or or information to do
[1:09:28] some of these predictions thanks question seven can we differentiate minerals using deep learning models on hyperspectral data
[1:09:43] like Hyperion data I'll take that one so yeah this is I mean this is obviously an open area of research uh there's
[1:09:54] definitely been you know success in looking for certain types of minerals uh using you know not only High perspective
[1:10:00] data but other instruments such as Oster um it really depends on exactly what the minerals are and you know you have to
[1:10:10] consider the the spatial resolution of the spaceborne instruments in particular because they tend to be much coarser uh
[1:10:17] in terms of being able to identify the feature the future has to be large enough for the instrument to have seen
[1:10:24] it it and then to be able to to develop an algorithm to detect it so it's a it's a complicated relationship
[1:10:32] between spatial and spectral resolution to be able to detect uh minerals on the surface surface foreign question eight can you discuss the bin
[1:10:48] width sensitivity in the histogram what is the importance of the box plot over the histogram I can take that one
[1:10:59] um so been with sensitivity I mean so the choice of bin size for a histogram can certainly affect like the adherence
[1:11:07] and interpretation of a histogram uh if a bin is too large it okay it could be a
[1:11:14] little too coarse and fail to capture uh details of the distribution that you might want to see
[1:11:20] um too small of a been with um and you could get a histogram that's a little too detailed and captures a
[1:11:27] little too much noise and doesn't fully capture the underlying distribution um that we're trying to look at as far
[1:11:34] as like box plot over the histogram the histogram can show us information such as like the central tendency the spread
[1:11:40] and some and the the skewness of the distribution a box block is better to show something like the median and the
[1:11:47] interquartile range um and any outliers or extreme values I guess a box plot can provide a quick
[1:11:55] visual summary um just of those things over a histogram would be my first shot at it thanks
[1:12:08] question nine when you take a sample of the data to conserve Computing costs is this process randomly selecting rows
[1:12:18] okay I can take that if no one else's um um so yes when in the case we were just
[1:12:34] randomly selecting a subset just for the Simplicity of the demo um you know in a science scenario you'd
[1:12:41] probably use the entire data set if you have enough computational bandwidth you don't want to lose any data
[1:12:47] um and if you don't have enough computational bandwidth you could always you know stratify a subset that might be
[1:12:55] fully representative of the training data set to do some Eda um it'll only be really useful to
[1:13:01] inspect that data and it won't really none of this will really be useful for data cleaning since uh you might be
[1:13:08] missing out on some important rows or pieces of the distribution that you really want the model to capture
[1:13:16] foreign if we want correlation with the bands and multiple classes for example water Forest settlement Etc does it work with
[1:13:33] this heat map correlation chart me as well um that can certainly work you can just add those classes
[1:13:44] um as each and individual column and you can use the same exact uh method call the DF dot c-o-r-r
[1:13:53] um um and that'll give you a correlation um between those those classes in those rows and and the rest of the features so
[1:14:02] that's certainly a one way to do it question 11 can you tell me a bit about rank of data and plotting of Pearson
[1:14:16] rate correlation in machine learning second thing that one I was still typing but so the basic idea is that you can
[1:14:25] even see correlation using Scatter Plots but we use some of these spirits on correlation just to get that statistical
[1:14:34] value that we can then use to kind of observe or quantify some of these correlations correlations the ranking of some of these correlation
[1:14:42] matrices is just basically you have these two variables that you're going to be then be ranking per feature like one
[1:14:48] to the biggest number two to the second biggest one Etc Etc um so at the end what you're finished
[1:14:54] doing is just doing a square of the differences and you just sum some of those to remove some of the like
[1:15:01] negative values Etc so it's basically a correlation given two variables that you can then minimize or get the values from
[1:15:10] from the um correlation calculation or these statistics to them plot into like a simple confusion Matrix thanks question 12.
[1:15:27] what is the maximum size of an image that is practical to work with with pandas yeah yeah um there's no real maximum size
[1:15:41] um it all depends on the the limits uh the resources that you're working with um I remember like pandas only takes
[1:15:49] tabular formats that's why we converted a raster into like a per pixel data set uh an image that's uh 4800 by 4800 uh
[1:15:59] that's turned into the uh that format of data can fit very comfortably into a pandas data frame
[1:16:06] frame um eventually you're going to run out of memory with a large enough image one method is to use what's uh a tool called
[1:16:15] desk and they Implement something called also a data frame but it basically uses pandas and it splits up really really
[1:16:22] large data sets um into something that can work in memory and kind of works in parallel to
[1:16:29] perform computations on these these data sets and you know we can we can do something with like a billion rows in
[1:16:36] there it just kind of brings stuff up from disk and works on them and then puts them back so no real limit just
[1:16:43] depends on the resources and there are tools if you run out of resources that can help you
[1:16:50] I mean if possible I mean I'd also to what color just said that when you use x-ray
[1:17:00] the calculations are done out of memory basically you are going to bring everything in in memory only what you
[1:17:06] need need so you can manipulate the data frame as large as you want it doesn't matter even
[1:17:13] billions of data points doesn't matter xra is gone just to read to bring up to memory what is need at
[1:17:21] any given time for the calculation question 13 will we be able to plot the results of the PCA
[1:17:51] it looks like the answer is typed out here it looks like not in this exercise but you can
[1:17:59] take the output array from the PCA output reshape it and plot it using visualization tools like matplotlib
[1:18:07] question 14. as far as I understand Tuki IQR works well for normal distribution but most of the band values in the data
[1:18:17] set are skewed with a long tail are there any methods more fitted for data like this I can answer that one so there are many
[1:18:27] other techniques we just kind of Hues or introduce the topic of 2K IQR because it's one of the like main ones
[1:18:35] that we're kind of use in the data science room regarding like multispretto data the idea is that this method you're
[1:18:42] going to be more focused like local and Global neighborhoods so a simple distance calculation like 2K IQR might not be the like the best one
[1:18:50] at the end but there are other algorithms like isolation 4 is local outlier factors Etc that you could use
[1:18:58] we added some references there that you could um kind of try or give it a try and psychic learn provides even more
[1:19:05] other outlier detection algorithms that you could try for your data set wait question 15. while cleaning the data if there are
[1:19:20] many null values what kind of techniques can be applied for filling the data gaps and I see the advice here is it would be
[1:19:27] better to exclude those data from the training than to fill them um did anybody want to add any
[1:19:34] additional information this kind of thing yeah that one again applying my own bias so somebody else can weigh in if they want to
[1:19:49] I was just going to say this kind of Link really one of the first questions that we answer in regards to never
[1:19:54] interpolating data and again this is going to be based on your use case if you're Theta set or kind of your use
[1:20:01] cases cases is not let's say London or being going to be affected by interpolating some of these data you could interpolate
[1:20:08] I'm using a couple like mean or even like million values Etc um but again this is going to bring
[1:20:14] noise here to your training data set so is it going to depend on how how much noise you want to bring into your data
[1:20:21] set and if your data set is really like extremely small that you might need to use this if your data set is big enough
[1:20:27] just just remove them and make your life easier foreign foreign moving on to question 16. how do you decide on the values for the
[1:20:42] hyper parameters do you do hyper parameter optimizations we're going to discuss hyper parallel optimization on session three
[1:20:54] so just be around stay tuned for next week question 17 do we use a training data set to train the algorithm even though
[1:21:10] we have 80 percent of the data as test data why do we classify it to four training data sets and only one test
[1:21:18] data set yeah I think this was maybe in regard to maybe a little bit of confusion with the
[1:21:24] the k-fold uh method so we do use the full training data set um what we showed is with the k-fold is
[1:21:33] we we do random splits in the training data sets for like something like five times and we we get like a randomly
[1:21:41] split training data set and a validation data set and you run through this uh uh multiple times and that's just basically
[1:21:48] to get a better um idea of if the model is generalizing well well um on data so it sees the entire
[1:21:55] training data set without having to fully take out 20 you know for test data we did actually both we took out 20 and
[1:22:03] then used the eighty percent for the k-fold k-fold um and that's perfectly valid as well it all um it all kind of depends on on what
[1:22:12] route you want to go down so you I'm not sure if that fully answers the question but yeah we did train the data set on a
[1:22:18] train the algorithm on a full data set thanks Caleb question 18 how do we train the model
[1:22:31] without the masking data as in unsupervised clustering first then using them for masking based on those clusterings
[1:22:43] sure I'll take this Mark I'll take that one one um um I mean if I understand the question
[1:22:49] correctly I mean you know the model is trained to understand the spectral values regardless of their location
[1:22:55] that's why we extract to a tabular form so that we can just train the model without respect to the location where
[1:23:03] that pixel where that value came from um um so so you know when we do that then you know
[1:23:11] you can apply this back to the you know once the model is trained you can apply it back to imagery data because from a
[1:23:16] coding perspective an image is just it's just an array of numbers uh so it doesn't care whether that's a table form
[1:23:23] or in a geotiff the code is going to treat it as an array either way okay okay question 19.
[1:23:40] after getting a set of results how can we determine whether we need to adjust our hyper parameters versus selecting a
[1:23:47] different machine learning model I I answered that one here so I mean this what I would do is is perform you
[1:23:56] know validation on the output map which obviously is the the prediction the model prediction to determine the actual
[1:24:03] quality of of the map itself uh if the map validates to a level that's acceptable to to you the operator or the
[1:24:10] the principal investigator of the project project then then you're all set um but if it doesn't then you need to
[1:24:17] either tweak the training and and tweak the model or you know if it's horrible then you might consider looking at a
[1:24:24] different method so again it's a bit subjective it deter you know the acceptable is determined by the the Project Lead
[1:24:39] question 20 my collab session is crashing every time I try to do the collab assignments even though I've
[1:24:46] selected GPU for my runtime what should I do I provide some insights there um ideally just try to fully restart it
[1:24:57] on time and just kill your session and just try again try again a another piece of information is that
[1:25:03] we have some prompts on the notebook where you need to can restart this session so you can load the GPU um
[1:25:10] Library so try to follow those um um in order to get your GPS drivers in session properly configured
[1:25:24] thanks Jordan question 21 could you talk more about why 50 is used as the prediction accuracy threshold
[1:25:36] I can I started answering that one what I can answer it and before talking so the closer they probably these are to
[1:25:43] that 50 the threshold means that the model is least certain based on class A or Class B and this one not without
[1:25:51] we're talking about the specific water versus no water example if the probability is closer to let's say a 1 or 100 it means that the model
[1:26:02] is turning that that particular pixel is going to be water you probably is closer than to zero it means that
[1:26:09] that the model is more certain that the actual pixel is land so know that that far left and Far Right
[1:26:18] deviation means that you're actually taking the priority of a or b um so if the priorities on the middle or
[1:26:28] kind of in that middle range it means that the model is kind of deviating to one cluster or the other
[1:26:34] but it's not extremely on it's not certain that it's Class A or Class B please please question 22 are all types of indices
[1:26:54] data sets available on the cloud and I think there's already an answer in here that there are many different types
[1:27:01] of data available in the cloud NASA is in the process of moving all of its data on the cloud which will take a couple of
[1:27:06] years you would simply have to search to determine if your specific data that you are interested in is available there
[1:27:15] question 23 what options do you have when the training data set is giving you results probably prediction you do not
[1:27:23] expect expect especially when testing it I can take that one so I guess the first order of business is just
[1:27:35] evaluate what the model is taking as input like how is your training data looking like and if you have any um
[1:27:41] wrong wrong yeah training samples that might be deviating the results from the model um then just try to look at how the
[1:27:50] model is performing in like doing some explanation exponential AI analysis that we're going to discuss in session three if that is not giving you
[1:27:59] then something proper next piece of advice is just to maybe like try a different model and see how definitely
[1:28:05] the performance is if the performance is bad as well on let's say second model it means that there's something wrong with
[1:28:10] your training data or the way you're pre-processing your data question 24 what techniques can be adopted to improve machine learning
[1:28:26] computation time especially on large high resolution data sets all right Miss Mark I answered that one I mean the easiest thing is to add more
[1:28:38] compute and run multiple scenes simultaneously on different systems you know that's the the horsepower insert uh the other possibilities are breaking the
[1:28:46] breaking an image up into smaller pieces and and then sending those those smaller pieces to locable the CPUs so that your paralyzed
[1:28:56] parallelizing in that way so that that's my best answer is going to be parallelization that's two different ways you can do it
[1:29:08] okay we'll take one more question and that will be it for today um question 25 if we have a lot of
[1:29:16] features 100 for example is there any technique to select the most important ones in Python for random Forest
[1:29:30] Jules answered that one I think yes I just I just put there some kind of general statement when you train a model
[1:29:38] and you do some prediction you you are also able to come to determine the future importance it's just some kind of
[1:29:45] calculation I don't remember the function that will tell you exactly what are the main features that contribute to
[1:29:52] the most to your model and based on that feature importance you can even simplify a little bit the model because you are
[1:29:59] going to you are going to to have some kind of ideas what are the variables or the features that can be useful for the
[1:30:07] model and the other one you are going to say that they are they don't even contribute they don't even affect the
[1:30:12] prediction so you can remove them and something also that uh Caleb mentioned today is about this uh exploratory data
[1:30:21] analysis when normally you do that also you can have some kind of basic idea which features can be really critical in
[1:30:29] the prediction and you also and you can remove the one that are critical because in terms of when you have some kind of
[1:30:36] heat map you can just say look have some kind of basic idea so the the the importance and features can
[1:30:45] be look at in the explorator data analysis also after you train the model you can determine the future importance
[1:30:52] and have some kind of basic information what are the ones that contribute the most to your model to predict to have a
[1:30:58] better prediction foreign well thank you so much to all of our instructors today and our rset team
[1:31:12] behind the scenes that will be it for part two of fundamentals of machine learning for earth science please join
[1:31:20] us one week from today um for part three that is on May 4th as a reminder the recording of this
[1:31:29] session will be up within about 48 hours and we will be posting this q a um once it's final on the website as
[1:31:38] well you can find access to the r said GitHub also on that training page you can find a link in the chat and as a
[1:31:47] reminder we will open the homework even though homework is referenced throughout each of the assignments we will open
[1:31:52] that homework at the end of part three at which point you will be able to fill in your answers and
[1:31:58] submit your homework thank you to everybody for joining us today and hopefully we will see you in a
[1:32:05] week have a great day everyone
