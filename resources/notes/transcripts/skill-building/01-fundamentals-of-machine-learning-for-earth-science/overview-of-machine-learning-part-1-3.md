# Overview of Machine Learning, Part 1/3

`https://www.youtube.com/watch?v=U-uJGnhD-zg` · id 117 · 1:31:06 · module 2 — Fundamentals of Machine Learning for Earth Science

[00:02] Welcome everyone to the training series Fundamentals of Machine Learning for Earth Science. This is part one of the three-part
[00:10] series, an overview of machine learning. Before we get started, I wanted to introduce myself and the NASA Applied
[00:19] Remote Sensing Training Program, or ARSET. ARSET. My name is Brock Blevins. I am a training coordinator for the ARSET
[00:26] program, and I will be your host for this training. NASA's Applied Remote Sensing Training Program's goal is to empower the global
[00:37] community to incorporate Earth observing data into environmental management and decision-making. decision-making. Our trainings are designed for professionals in the public public and
[00:46] private sector, environmental managers, researchers, policymakers, and we offer these trainings in application themes of agriculture, climate, disasters, health
[00:58] and air quality, land management, and water resources management. ARSET training availability. We offer trainings online in a webinar series
[01:10] such as we are starting today. We offer self-paced trainings and custom in-person trainings. All training is cost-free to the
[01:19] participants. There are often a bilingual option, typically in Spanish. And to meet the diversity of needs and
[01:28] skill levels from a global audience, we we offer trainings introductory to advanced, and as always, all the
[01:34] materials are free to use and adapt. We only ask that you give attribution or credit to NASA ARSET.
[01:45] At the end of this training, we aim for participants to be able to recognize the most common machine
[01:51] learning method used in processing Earth science data, describe the benefits and the limitations of machine learning, explain how to apply basic machine
[02:01] learning algorithms and techniques in a meaningful manner, use analysis-appropriate training data sets to evaluate conditions and solutions for a given case study, and
[02:12] complete basic procedures to interpret, refine, refine, and evaluate the accuracy of the results of machine learning analysis.
[02:21] As this is an introductory webinar series, there are not many prerequisites coming into the training today. We do
[02:28] suggest that participants have an understanding of the fundamentals of remote sensing concepts and terminology. You can do so
[02:36] by viewing our session one of the on-demand fundamentals of remote sensing series, or if you already have
[02:43] equivalent experience, that's not necessary, but please feel free to uh review if you like. Attendees will need to access a Google
[02:52] Drive and Google Colab um to work with the code here today. So, in order to access those resources, users must use
[03:00] an email ending in gmail.com. So, you just have to have a a gmail.com account. We'll have a video of the demonstration
[03:07] shown today available within 48 hours on the training webpage, so you are able to go through this process at your own
[03:16] pace. Here's the schedule for each of the three-part training that we'll cover from April 20th through May 4th.
[03:25] There'll be one homework associated with the series, and that'll be available on May 4th. It'll be due on April 4th 19th.
[03:33] And this will be a Google Form submission. submission. Throughout this presentation, please feel free to type your questions for the
[03:39] trainers in the questions section. All the questions that are being asked will be moved over to a Q&A document,
[03:45] and you'll be able to view all the questions and answers at the end of this presentation presentation during our Q&A session in a document,
[03:53] and then we also answer those audibly. And we'll also provide this Q&A document as a resource as a PDF, and we'll put
[04:02] that on our training webpage within a week. We just need to clean it up for accuracy, and you're able to obtain that
[04:08] from there. So now, I will hand this off to our first train trainer today, Jordan Carballo Vega, to introduce us to part
[04:18] one. one. Thank you, Jordan. Thank you very much, everyone, for attending today. We're going to be talking about some of the fundamentals
[04:30] of machine learning for Earth Science. The part one is going to be an overview of some of these algorithms and some of
[04:37] the applications. So, we have the instructor team. We have Jordan Carballo Vega, which is myself. We have Mark Carroll, which is our lead
[04:45] the data science group at GSFC. We have Jules Cacho at GSFC as well. We have Jian Li,
[04:53] and we have Caleb Spratlin, which also works for the data science group. The outline is for today's session.
[05:01] We're going to first look at an overview of machine learning, some of the fundamentals and basic concepts.
[05:07] We're going to then look at the importance of machine learning targeted towards Earth science and some of the
[05:11] applications applications that support this. We're going to see how usable machine learning algorithms are are for remote sensing data. We're going to
[05:20] discuss some of the software that supports some of these machine learning algorithms. algorithms. We're going to talk about some of the
[05:25] applications in detail, and then we're going to have a single hands-on experiment just to use Google Colab and
[05:32] then load and visualize some of the data. data. After this, we're going to have a post-session assignment that we're going
[05:38] to briefly discuss, and then we can proceed with the Q&A session. For all of the three sessions that we're
[05:44] going to discuss, we have this Git GitHub repository where going to have the resources and all of
[05:49] the materials that you can use later on after the session is done. The objectives of today, after participating in this training,
[06:00] attendees will be able to recognize the most common machine learning methods used for processing Earth science data.
[06:08] They're going to be able to describe the benefits and limitations of machine learning for Earth science analysis.
[06:13] And they're going to be able to explain how to apply some of these basic machine learning algorithms and techniques in a
[06:20] meaningful manner for remote sensing data. data. Jules, please take it over. In 1959, Arthur Samuel introduced the concept of
[06:34] machine learning with the following quote. quote. Machine learning enable machine to automatically learn from data, improve performance from experiences,
[06:45] and predict things without being explicitly programmed. Machine learning can be understood as computational methods that use experience to improve performance or
[06:58] make accurate prediction. In this case, experience refer to past information or data that is available to us.
[07:09] As with any computational exercise, the quality and amount of the data will be crucial to the accuracy of the
[07:17] prediction that will be made. The major focus of machine learning is to extract information from data automatically by computational and
[07:27] statistical methods. How does machine learning works? The following diagram give us some kind of overview of the main step of machine
[07:38] learning. And in the following slide, we are going to go into more details. A machine learning algorithm can be seen
[07:47] as a mathematical function containing many free parameters, thousand, even millions, millions, that take input that we'll call
[07:57] features, features, and map those features into one or more output that we'll call also target. The process of training a machine
[08:08] learning algorithm involve optimizing the free parameters to map the features to the target accurately. accurately. New input data
[08:20] that we'll call the test data is fed into the machine learning algorithm to test whether the method works correctly.
[08:29] The prediction and result are then checked against each other. A numerical score is then calculated. If the prediction and result don't match
[08:41] well, well, the method is retrained multiple time until the data scientist get the desired outcome. outcome. This enable the machine learning method
[08:51] to continually learn on its own and produce optimal answer, gradually increasing in accuracy over time. Now, here are the basic simplified step
[09:05] of machine learning. First of all, you need to state the problem. problem. You need to gather and then gather the
[09:13] data. data. And after that, we have to do some kind of data pre-processing. It's important to mention that this data
[09:21] pre-processing it might be the most important step of machine learning. People believe that 80% of the time need
[09:28] to spend on data processing. And we are going to see in session number two, when we are going to learn about exploratory
[09:35] data analysis, it's where really the focus will be on. After that, we need to go to the process of
[09:44] to of training the model. The data set connect the algorithm, and the method leverages sophisticated mathematical modeling to learn and
[09:55] develop prediction. When the model is trained, we need to go to the the process of testing the model.
[10:03] We use a test set to check the model's accuracy. accuracy. And finally, the last step, we need to improve,
[10:12] review the model result, reconsider the method selected, we make adjustment by changing some kind of parameters and see if you can improve
[10:23] the performance. Sometimes, small adjustment have a significant impact. Machine learning algorithm. There are two broad categories of
[10:39] machine learning method relevant in most Earth science application. The first one, supervised learning. It involved presenting a machine
[10:51] learning method with many example of input-output pairs, called the training set. Can be further divided according to the
[11:01] type of target that is being learned. Has either categorical, this means that we deal with classification a
[11:08] classification problem, or continuous, and we'll deal with a regression problem. problem. Like for instance, the temperature at
[11:17] the given location on Earth. The model is trained with labeled data set, set, which allow the model to learn and grow
[11:26] more accurate over time. The second category, unsupervised learning. In this particular category, algorithm are not given a particular target to
[11:39] predict. predict. Rather, Rather, an algorithm task is to learn the natural structure to identifying patterns or trend in the data set
[11:50] without being told what structure it is. Here, the model looks for patterns in unlabeled data. A third category,
[12:02] reinforcement learning, is not commonly used in Earth science. Here, the model trains machine through trials and error to take the best action
[12:13] by establishing a reward system. Big data in Earth science. The amount of data from observation and output model is exploding.
[12:31] The data is characterized as being massive, multi-source, heterogeneous, multi-temporal, multi-scalar, highly dimensional, highly complex, non-stationary, non-stationary, and unstructured.
[12:46] Our ability to collect and create data far out outpaces our ability to sensibly assimilate it, let alone understand it.
[12:58] To get the most out of the explosive growth and diversity of Earth system data, data, we face at least two major task.
[13:09] Extracting knowledge and insight from the large and complex collection of data, and deriving models that learn much more
[13:18] from data than traditional data assimilation approaches can, whilst still respecting our evolving understanding of nature's laws. Machine learning is now a successful
[13:32] part of several research-driven and operational geo- scientific processing schemes, addressing the atmosphere, the land surface, and the ocean, and has
[13:45] co-evolved with data availability. Machine learning in Earth science. I like this this quote that was written in an article
[14:01] in 2021 that shows the importance of machine learning in geo-science for research and training. training. Basically, Basically, the goal here is to show how critical
[14:16] is to do some research to provide funding in machine learning and also to train people in how to use machine learning
[14:26] algorithm in Earth science. And that is the goal of this the particular training that we are having
[14:32] today. Machine learning has been applied to many domain in Earth science. We can mention for instance, land cover and land use classification,
[14:53] precipitation and swarm moisture estimation, estimation, cloud processes representation in climate models, crop type detection and crop yield
[15:03] prediction, prediction, estimation of water, carbon, and energy fluxes between the land and atmosphere, special downscaling of satellite
[15:13] observations, ocean turbulence modeling, tropical cyclone and intensity estimation. estimation. There are many other domain where machine learning can be applied in Earth
[15:25] science. How machine learning is applied in Earth science. science. An illustration of model-driven and data-driven method. On the left
[15:42] are the research topic in, let's say, in Earth science. On the right, we have the observations. In the middle are examples of
[15:53] model-driven and data-driven method. In model-driven methods, the principle of geophysical phenomena are induced from a large amount of
[16:06] observed data based on physical causality. causality. Then, the models are used to deduct the geophysical phenomena in the future or
[16:16] in the past. This approach can be limited by the difficulties of finding patterns where we don't expect them.
[16:27] In data-driven method, the computer first induct a regression or classification model without considering physical causality. Then, this model will perform task such
[16:41] as classification on incoming data set. The use of machine learning here can help us discover patterns and trend
[16:52] buried between vast volume of data that are not apparent of human are not apparent to human analysis.
[17:03] Machine learning technique learn relationship among physical parameters from both input and output data in contrast to traditional of physical
[17:13] modeling method in which modeler explicitly account for those relationship when they set up a model. So, in the next session, I will talk
[17:30] about the benefit of utilizing machine learning in Earth science. As machine learning application became very popular in the industry about a decade ago, NASA
[17:40] scientist also quickly realized that such technology can greatly accelerate the scientific researches in many aspects. I just point out a few examples
[17:52] here. here. First of all, using machine learning tools can increase the efficiency of processing and analyzing large amount of
[18:00] data. data. Every day, NASA collects tons of data by observing our Earth and outer space. And such amount of data increasing every
[18:11] second. It's a big challenge to process those data in a traditional way. But, we can use some machine learning
[18:19] algorithm to simplify and automate analysis such complex data sets. Secondly, Secondly, machine learning algorithms have proved its capability to identify objects,
[18:34] patterns, and relationships in complex data set. Sometimes, it can provide insights that's that's even difficult to be
[18:43] identified by our human eyes. And those insights often leading to a new discoveries. Last but not least, we can apply machine
[18:53] learning algorithm to to the areas where we are lack lack of observations and making predictions over there. Or in
[19:01] some cases, we can even use machine learning algorithms to replace physical models and make better predictions of
[19:10] Earth science phenomena. I will provide two use cases among many in the following slides. The first use case is
[19:24] uh to NASA scientist use machine learning algorithms to identify new stars and star systems. The uh the data was collected by instrument
[19:36] called the Transiting Exoplanet Survey Satellite Test, in short. The satellite was launched in April 2018. The mission is to search for
[19:47] planets outside our solar systems, including those planets that suitable for life. And the test satellite collecting tons
[19:57] of data uh uh every day and allow scientists to view the amount of optical lights arriving from the stars over time. It's
[20:08] called light curves. But it also provides a challenge because it's nearly impossible to thoroughly investigate the terabytes of astronomi- astronomical
[20:19] data to find a rare phenomenon such as multiple star systems. But NASA scientist Brian Poll and his
[20:27] colleagues have developed a and leveraged a set of machine learning and high-performance computing tools. Therefore, they can quickly extract more
[20:37] than 60 60 million light curves from for further investigations. And based on those uh filtered uh light curves,
[20:48] NASA astronomers have identified more than 50 more than 50 planet candidates and more than 200 potential binary star systems
[20:59] and more than 10 potential triple star system and a 20 potential quadruple star systems. systems. And uh even one potential
[21:10] sextu- tuple star systems. And it to be clear, all those discovers are new. That means we have human being
[21:21] have never identified such solar systems and plan- planet previously. The second example I provide here is a
[21:31] corporation between NASA Goddard Center and uh Millennium Challenge Corporation MCC. One of the goal of this corporation
[21:40] is to investigate in uh agriculture development projects to empower local uh farmers and to combat with uh food
[21:51] insecurity. insecurity. And uh research scientists use Sentinel-2 remote sensing data and in situ observations observations uh to train a five different random
[22:02] forest model to estimate crop types and crop yield across the study area uh region of uh Burkina Faso.
[22:14] Uh and it's turned out the model shows more than 88% accuracy on crop types and a 60% on crop yields during the 2019
[22:25] rainy season. And uh accuracy drops slightly to 64% and 53% re- uh respectively during the 2019 dry
[22:36] seasons. seasons. But it provide impressive uh accuracy to predict uh crop type for year 2020 dry season. It
[22:47] had it It has a 60% accuracy for the crop types. And uh remember, that year we don't have any training data so
[22:57] available. available. Therefore, the the machine learning model actually filled the gaps to predict the crop types when we don't have any observation data
[23:12] in that areas. In the past many years, we have a build a quite broad tech communities around
[23:25] the concept of machine learning including companies that provide computing resources, commercial companies and open-source communities develop a tons of softwares and the
[23:37] programming packages, data uh database services, programming interface, IDE and so on and so forth. There's no way to provide a
[23:47] comprehensive list of uh technique we're going to use in machine learning uh applications. applications. Uh and uh such list, even it exist, will
[24:00] change year to year and rapidly. So, I will just scratch a very surface of this tech stacks and introducing in a few
[24:09] commonly used programming language and packages in machine learning. So, I will start with a program language and go into the
[24:23] uh uh pro- uh programming libraries and packages. At the top of the list, Python is most used program language in machine
[24:32] learning due to its independence across platform, flexibility, simplicity, and uh uh the Python code is often concise and
[24:42] readable. It also have massive or reliable libraries or packages ready to reduce your software development time sig- significantly.
[24:55] The second language is R. R is widely popular uh is very popular because it's a build It's a built in to perform
[25:05] mathematic and statistical calculation on big data. It's still very popular for conducting statistical analysis in many industrial.
[25:14] So, I would not be surprised if to see a data scientist to use R as their working
[25:19] language. language. And uh third language is Java because Java is uh very uh very popular in development mobile
[25:30] apps. And uh we can imagine how many mobile apps will take advantage of artificial intelligence and it's a perfect match
[25:41] for those programmer who uh who main job task is to building mobile apps using machine learning or
[25:48] AI. And uh we also have a Julia. Julia is one of the newer language and it's mainly targeting on computing scientific
[26:02] and uh technical field. And uh it it's starting more users of Julia as a a uh uh among the programmers.
[26:18] So, in summary, uh I think all programming languages have its similarity. If you are mastered with uh logic and structure of one language,
[26:29] it's relatively easy for you to adopt to a different program language. You just need to relearn the syntax if you have
[26:37] to relearn a new new program language. But the the backbone of each program language are similar. You just need to
[26:47] understand the logic and structure of the coding. In the following slides, I will emphasize on introducing Python packages
[27:00] for machine learning because based on 2021 Kaggle survey among data scientist, Python based to dominate the machine
[27:07] learning frameworks. That's also the case case for our group. Uh among all those uh instructors, we are heavily reliant on Python packages
[27:20] to conduct our day-to-day work. So, we have uh more familiarity with this language and uh uh the packages associated with it.
[27:31] A few fun facts from that uh Kaggle survey is that uh among those Python tools, 80% of data
[27:41] scientists use scikit-learn for their machine learning uh applications. applications. And uh TensorFlow and Keras uh was mostly used for building deep
[27:54] learning models. And actually boost is quite popular choice if you wanted to train a gradient boosting model.
[28:04] I believe all of you use some of this tools during the notebook session of this training. In the next few slides, I will go a
[28:17] little bit deeper into introducing each of this packages or frameworks I mentioned above. And uh at the top of my list,
[28:29] scikit-learn is definitely definitely the Swiss knife of machine learning. It provides vast functionality to implement machine learning algorithm such as
[28:39] classification, classification, uh regression, clustering algorithm, dimensionality dimensional reduction, model selection, data pre-processing and so on and so forth.
[28:51] And uh it also have uh very wonderful website provide thorough documentation to help you understand and use it those
[29:00] function. function. I will strongly recommend to start your journey of machine learning from scikit-learn. scikit-learn. And the TensorFlow and Keras as I
[29:10] mentioned above are two high-level Python frameworks to help you build and the train neural network models or
[29:17] somebody call them deep learning models. Besides those two packages, PyTorch is another uh option for deep learning
[29:26] model. Each frameworks has its own advantage and disadvantage. You may choose uh different frameworks based on your requirement of your specific tasks.
[29:40] Also, a frameworks also pro- provide plenty of examples and in instructions in their website. On this slide, I will introduce
[29:53] some utility softwares surrounding machine learning. First of all, Jupyter Notebook Notebook is not only developed developed for machine
[30:05] learning, but because it's provide a web-based interactive coding environment, notebooks become a great way to build prototype or sharing your
[30:15] models with other colleagues or friends. We will gain a lot of hand-on experience during this training with notebooks
[30:24] later on. And Matplotlib and Seaborn are two visualization libraries often used by data scientists for examining their
[30:34] datasets and their machine learning results. In this slide, I would like to touch uh a little bit about graphic processing
[30:51] unit GPU role in machine learning. Because not all, but many machine learning algorithms can divide tasks into thousands of smaller subtasks and
[31:03] the process them all at the same time. For instance, most often neural networks are designed to run in parallel.
[31:11] Therefore, GPU has uh perfect match for such tasks because GPU can have thousands of cores that can run
[31:22] operations in parallel on multiple data points. points. In this way, GPU can provide massive acceleration for machine learning
[31:31] training and predictions. There are many platforms to support parallel computing with GPUs. Out of them, CUDA, developed by Nvidia,
[31:42] is the most popular one because CUDA can run on both Windows and Linux operational system and many Python
[31:50] libraries such as TensorFlow, Keras, PyTorch, XGBoost, OpenCV, etc. can be run on Nvidia CUDA-enabled graphic cards. So, you can take advantage of
[32:02] high-speed computing of GPU and the train your models So, now we're going to introduce some of these machine learning algorithms. And
[32:18] note that we're going to only introduce some of the basics and the fundamentals of these. They're going to provide you
[32:25] with the base then to infer from other algorithms that can be been released out there. Now, one of the main questions that we
[32:35] normally raise is which algorithm to choose. choose. We have many machine learning algorithms being released on a weekly basis for
[32:45] many applications, particularly on Earth science and even on general purpose applications. applications. The development of machine learning
[32:53] algorithms has just been exponentially increasing over the past few years. And many of these, they relies on
[33:00] foundations of models that people normally just modify for their own applications. applications. So, we will not dive into the specifics
[33:10] of each one of those algorithms, but we will provide the tools to aid the selection of some of these for your
[33:17] Earth science problem. We're going to introduce some of the actual mathematic basics of them, but we're going to also
[33:23] provide hints or highlights on how many of these algorithms can be a good fit for your own application based on
[33:32] specific questions. Just to be clear, you're never bounded to a single algorithm. You can choose an algorithm now and might be able to
[33:41] change the algorithm along the development process, but it's always good to start from a good base or from
[33:49] at least a core base that you can then start working on your way to like other applications.
[33:56] applications. On the right side, we have kind of a diagram of some of these huge numbers of algorithms that we have. But note how
[34:03] they go from a natural branch, let's say supervised learning, but then they kind of divide into that same base where like
[34:11] classification or regression or they just modify, let's say, some of the ways they approach the mechanisms of
[34:19] predicting the target that we're looking for. So, first thing that we need to do before choosing an algorithm is to
[34:28] specify the science problem. It's not a good practice to just go ahead and say, "I'm going to use machine
[34:35] learning for my problem." without knowing how machine learning will benefit your problem or your application. So, the first step that we
[34:42] need to do is to identify the science problem and what scientific questions we want to answer. From there, we can go down through all
[34:51] of these steps of the machine learning workflow where we identify our data. We test and see how the performance
[34:59] is going to be on our application and what performance are we required to have for this specific application.
[35:06] We also We also go by and check on the explainability of our model. How much do we need to explain our model in order to
[35:14] trust it for a specific application? An example here is that for disaster response, you're probably not going to
[35:21] be comfortable using an algorithm that is just a black box that you just just don't understand that much. So, you
[35:28] probably end up having an algorithm that you can understand its decision decisions and drivers to avoid false
[35:35] positives or false negatives. The other concept that we need to look into play is the dimensionality of our
[35:42] data. data. What are the dimensions of the of our data? Do we need need to reduce the
[35:47] dimensions of our data to find more actionable results? Do we need to look at specifics of how to do feature
[35:54] engineering to improve our dataset in order to find some of these solutions? Okay. So, now let's just dive into some
[36:01] of these questions. And while I start discussing some of them, feel free to think about your specific problem in
[36:08] hand and how would you answer some of these based on your application? Our first question is which scientific
[36:15] questions would you like to address and what information is missing to answer this question? Well, the first answer to this is that
[36:23] in this application or in this use case during session one and two, we'll be wanting to identify the signs, the
[36:31] magnitude, and the potential drivers of change in surface water extent in X study area. In our case, we're going to
[36:39] select X as being Lake Powell in the United States, but your study area can be as small as a single site,
[36:48] as big as multiple sites, and then it can also be considered as temporary and spatially different. You can have a
[36:56] single year that you might be looking at or you can have multiple years and dates that you're going to be looking at when
[37:02] selecting the algorithm. In regards to the information that might that might be missing, we actually need to compute and do and create surface
[37:12] water extent maps to quantify and analyze these drivers. So, we know what is missing. We know what is missing out there from
[37:20] literature and it's these surface water extent maps across our temporal and then spatial domain. Once we know what is our problem and how
[37:30] we want to solve it, we need to look at what data do you have available? How much training data do you have
[37:37] available, if you have any, and then what is going to be the data structure of your data in question?
[37:43] Based on the dataset structure that you might have, you can go through this tree and kind of have an idea of which
[37:50] algorithms might be useful based on your use case. For example, let's say that of, let's say, categorical options. Let's say that we
[38:00] want to identify land cover in a particular map where we go from one that is a tree, two that is crop, three that
[38:08] is building or structures, and so forth. If we have the data in spatial format, let's say in raster where each one of
[38:16] those pixels is an observation, we can go through algorithms that use spatial extent as a driver for performing those
[38:25] classifications. classifications. One example of those algorithms could be a convolutional neural network where we take spatial and spectral responses from
[38:33] our raster to then perform the classification. classification. Now, let's say that we only have point-wise data. We only have tabular
[38:41] data format where we don't have any spatial information of our data. Well, for that end, we could go for an
[38:47] algorithm that is not going to care about that much about the spatial, but more about the spectral response. And
[38:54] some of those algorithms could be a random forest, could be an XGBoost algorithms where we are only looking at
[39:00] the column features of that observation, we are caring about the neighborhood of that pixel. Another example is on the continuous
[39:09] side of things. We might have a target variable that is not a categorical option, but it's kind of a regression
[39:16] option or a continuous value. Think about some applications like lake depth. Think about canopy height models where you want to actually
[39:25] identify the height of that particular pixel or that particular object. In this case, we also have the option of having
[39:33] data in a spatial or tabular format. If we have a spatial uh data structure, we might be able to
[39:41] also leverage convolutional neural networks or even transformers to then increase our way of looking at both the spectral response, but also the
[39:51] neighboring pixels across that particular observation. This can be a way of quantifying the way we learn through the model or the way the way we
[40:04] represent our actual training data. Assuming we have the data on a tabular format, we could also use another
[40:11] deviation of the random forest forest, which would be a random forest regressor. regressor. We can also use things like neural
[40:18] networks where we only look at specific pixels and then take decisions and train a model based based on that.
[40:26] Now, let's answer some of these questions with our use case for session one and two. The data we have available is going to
[40:33] be the global coverage we have with MODIS satellite data. We're going to be using data from the MODIS instrument,
[40:40] and we do have global coverage from this instrument across several temporal windows. windows. Do we have the training data available?
[40:49] Well, in this case, we have gathered large extents of training data points that are going to be quantifying the
[40:55] water extent over the surface. What is the data structure of these data? Well, the data structure of our
[41:03] data comes on a raster format, but we can actually pre-process these data and perform feature engineering to make it
[41:10] into a tabular format. The last piece of this if this is a continuous or discrete problem. In our case, our dependent
[41:19] variable is going to be water pixels, which we are discretizing as no water and water. So, we have looked at the data structure
[41:28] and some of the options that we have based on the algorithms, but we also need to take into account performance.
[41:34] And some of the questions we need to answer for performance wise is, what are the performance requirements based on
[41:40] the science question we have? Do we need real-time observations or do we have static maps that we're going to create
[41:47] that can be then looked at later on? We also need to take into account which software we're going to be running the
[41:55] application on. For example, we can have on-premise resources where we would have probably server on our lab. We can also
[42:02] leverage commercial cloud like Amazon Web Services or Azure cloud where we leverage systems that are being controlled or managed on an external
[42:12] cloud. We can also run applications on embedded hardware. Hardware that could actually be running on a space cube or on a satellite that
[42:20] is on orbit. Last question that we have is what is the most important for your project? Is
[42:26] it inference time or is it model performance? Is it how fast your model can provide responses or how good your model is in
[42:35] terms of accuracy? Based on the actual algorithms of machine learning that we have these days, there's always a
[42:43] way of paying attention to some of these. You might be able to have a really accurate model that might take
[42:50] additional time to perform inference. And this is because some of these models, they are created to be large
[42:57] enough enough to be able to discretize additional features from the data, but they are normally bigger, which means that they
[43:04] need to perform additional computations and discretization from the actual data. An example on this right side image that
[43:12] we have in here, we have simplicity over time versus the accuracy. Many of these simple algorithms like
[43:18] linear regression where we only solving for an equation or logistic regression, they're very simple, but they also lack on most of the accuracy
[43:28] on data sets that are kind of complex. We also have K-means clustering algorithm where we perform on supervised
[43:34] classification classification of specific data sets where accuracy might be limited by the simplicity and time they take to be processed or to be
[43:44] run. run. Our accuracy continues then to increase when we start looking at more complex algorithms like neural networks,
[43:52] decisions trees, and ensembles of these, even support vector machines, but they are limited by the simplicity or the
[44:01] time that they're going to take. So, we can get more accurate observations, let's say from a neural network, but
[44:06] it's going to take longer to train and to do inference compared to some simple models like linear regressions.
[44:16] To answer these questions based on these session one and two objectives, we have that for our first question,
[44:22] which is what are our performance requirements, we really don't need real-time maps of water, at least for
[44:28] this application. Now, consider that you're doing, let's say fire occurrence modeling or that you're modeling fire spread to assess and to inform some of
[44:37] these stakeholders at the field trying to put on the fire. Well, for that particular use case, you might need
[44:45] real-time predictions or real-time uh inference of your data set, which might require more complex algorithm that can
[44:54] give you both the accuracy, but also the simplicity. simplicity. For where our model needs to run, we
[45:00] want our software to actually run on both on-premise and in the cloud. We want to be flexible enough to run on
[45:06] both places. You can invest some time to make sure that your model runs on both, but you can also concentrate on the
[45:13] specific application you're going to be running on. For example, you can optimize your model to only run
[45:18] on-premises without having to consider on the cloud resources. The last question that we have in here is what is more important for us, the
[45:27] inference time or the model performance? In our case, we actually have to have better model performance rather than
[45:35] inference time because we're going to be creating these maps once and then looking at them from a science
[45:41] perspective. So, we don't need to actually create them as fast as we need them. We actually need to process the
[45:48] entire global coverage on a timely fashion, which we're going to leverage GPUs for it, but we don't need real-time
[45:56] observations like something like a satellite would need to perform decisions on. The last piece is kind of the operations
[46:05] side of things. How do we choose the specific model based on the data we have, but also our requirements? And
[46:14] scikit-learn provides a good overview of how some of these decisions would go. One example of this is we can start
[46:22] from, let's say, the start endpoint. And the first questions that we have is how many samples are we going to
[46:28] process? process? Do we have more than 50 samples or do we have less than 50 samples? In some
[46:34] applications, let's say for the water extent mapping of the entire globe, you would need more than 50 samples to
[46:42] perform an accurate prediction or classification in this case just because of how spectral diverse the actual globe is. You can
[46:50] have more than 50 different spectral differences or spectral responses on different locations. Let's just compare what how a bare soil would
[46:59] look like compared to how the actual water would look like compared to how a wetland field would look like. There
[47:06] going to be many spectral responses where just having 50 pixels or 50 observations is not going to be enough.
[47:13] Well, once we gather more more data, we can then proceed to select which category we're going to be looking at.
[47:20] Are we going to quantify or get a prediction of the quantification of a value? value? We have going to have labeled data that
[47:27] we then need to classify into other means. What is going to be the actual target on our use case?
[47:34] Well, we're going to have labeled data and we have less than, let's say, 100,000 of samples, we can use
[47:41] algorithms that are not very data intensive or that not require vast amounts of data to have at least accurate predictions.
[47:50] Let's say that you have less than 100,000 samples and you want to quantify something, you can also look at several
[47:56] regressors that can provide you with the accurate resource that you might need based on the small sample that you might
[48:02] have. have. Now, let's say that you can actually have more samples than the actual application that you can increase your
[48:10] training data set to be representative enough across the actual data. Well, that's where we can start looking at
[48:17] maybe neural networks, maybe other ensemble algorithms that can take into account both generalization, but also accuracy based on the
[48:26] representatives of your training data. Okay, so now we're going to run our exercise for this particular session.
[48:41] To gather some of the material that you're going to need for this exercise, you need to go to the Git repository
[48:47] that we just mentioned. And the address is listed on the session, but here you can access the URL for getting
[48:55] to the repository. And just to give a quick overview of how the repository is organized, you're going to have a
[49:01] several directories that are going to have individual materials for some of the sessions including additional resources that you can take a look at it
[49:09] after the training is done or after all of these sessions are done. The most important piece in here is
[49:16] going to be this readme in here where you have access to all of the notebooks that are
[49:20] be going to be used for this session. For example, for these session one materials, you can look at them in this
[49:27] particular table where you have one, the actual exercise we're going to be doing, but also the assignment that is going to
[49:33] be need to turn in after the session is done. done. Okay, so let's gather and use our
[49:40] notebook. The way we're going to start this and run the software instead of doing it locally on your laptop, we're
[49:47] going to use the free resources from Google Colaboratory. And for this you're going to need an actual
[49:54] actual Google account to access it. Once we click on that button, we can actually access our notebook that we can
[50:04] and then start executing across the way. One of the let's say benefits from Google Colab is that you can have both text but also
[50:14] software being drawn in the same location. This is basically a Jupyter notebook just embedded on a visual
[50:20] hardware. Another benefit from Google Colab is that you can leverage free resources and even take some GPU time to
[50:29] do some of your work. So if you need to have let's say low-level applications or even like exploratory data analysis,
[50:36] just to take a look at your data, you can leverage some of these resources for free. Some of the important pieces in here,
[50:45] you have the file tab where you can open new new notebooks or create new notebooks. You can edit some of these cells that you
[50:52] have in there like pasting and cutting some of these cells that we're going to be working with, but the most important
[50:57] and the one we want to focus on for this session is the runtime. So not only runtime where we have
[51:03] options to run all, which would be running every single cell on our session, session, or run before or run the selection cell
[51:12] that we have. If we go straight to each one of these of these cells, you're going to see that
[51:17] there is a play button at the left side of the cell. That means that you're going to run that particular cell and
[51:24] it's going to do something. So let's just start from scratch and clean up all of these actions.
[51:39] We can go and then play button like the play button. We're going to have that option of says warning this notebook was
[51:45] not authored by Google, but it's actually authored by us. So just click on run anyway and that is going to
[51:51] actually execute that cell that you have in there. This first option is a Wget command. We normally use this command to
[52:00] download any files that we might be missing missing from public repositories. If you have any URL or file that you want to load
[52:07] into your session, you can always paste the URL after the Wget option to have it available on your session.
[52:15] If you look at the directory files in here, you can see that the actual file was downloaded and we're going to be
[52:20] using that for later later purposes. If you have any dependencies that you might need for your own application, you
[52:27] can then click on that particular cell and you're going to be then installing some of all dependencies on the fly.
[52:34] By default, this Google Colab has a Python environment that has most of the applications or machine learning
[52:40] libraries that you're going to need for specific applications. That being said, let's dive in into some of the material from this session. In
[52:49] here we're going to first familiarize with the Google Colab environment, which we have been doing so far, but we want
[52:55] to also familiarize ourselves with some of the machine learning software libraries and how to look at some of
[53:00] these problems. In this first section, we're importing some of the Python packages that we're going to need.
[53:06] Note that we have some general data science packages like NumPy to deal with arrays and also Pandas to
[53:13] deal with data frames, but we also have some geospatial packages like GeoXarray and Geo to work with some of those geospatial
[53:22] data structures that we might need. Last but not least, we also include some of the actual libraries that we're going
[53:28] to use for our software, which in this case would be scikit-learn and then the specific model that you would be using.
[53:35] For example, this would be how to call a random forest classifier. The structure of this particular notebook, we're going to kind of follow
[53:45] on on the questions that we were answering on the first session of these slides, but we're going to be looking at
[53:51] how to think about them through the actual exercise. So for example, we know now that we need surface water
[53:59] extent maps to quantify and analyze the drivers of change in let's say the global MODIS data set.
[54:06] We have access to the MODIS data, so we're not limited in terms of the data we have. Now we need to think about
[54:13] how we want to approach our problem. And there are many ways to think about it cuz we can just go through some of these
[54:20] questions. Well, first one is our problem a classification or a regression problem? problem? Based on that answer, you can think
[54:27] about what actual model or what actual algorithm to use. And we already discussed that if we're going to do a
[54:33] simple classification, we might be able to use a random forest classifier. If we're going to do any regression or
[54:40] quantify values, then we can use a random forest regressor. And that same concept of the actual algorithm and the
[54:49] actual application are going to be used across the board. For example, there can be a logistic regressor and so forth.
[54:57] Now, our next question is we know that we have a classification problem. Now, how many classes are we going to have in
[55:03] this problem? You can have a binary problem where we can just identify water and not water pixels, but we can also quantify let's
[55:12] say multiple classes within a individual class. Let's say that you want to differentiate between like open waters,
[55:19] rivers, oceans, etc. Depending on that particular problem, you can have a binary algorithm or you can have a multi-class algorithm.
[55:30] Now, we know how we're going to approach the problem. We know we want a classifier that is going to then be
[55:36] doing binary segmentation or binary classification. classification. There is always the main question of do we have training data? Do we have
[55:45] labels that can provide the insights to the machine learning algorithm of how much much how well we're going to predict on
[55:54] let's say given new data into the model. Well, for example, the random forest might not need as many observations that
[56:01] what a like convolutional neural network model would need. Thus, the amount of training data available is going to play
[56:08] a big role at the time of selecting which algorithm to use. We can also use feature engineering
[56:15] techniques as adding new features and so forth to increase the amount of data we have like for example using data
[56:22] augmentation techniques where we do small deviations of existing training data points to increase the amount of data we have.
[56:31] Now, some of the questions that you need to do before performing any feature engineering is is our training data of
[56:37] good quality? And the quality of your data is going to going to be a huge driver at when deciding which train data
[56:44] set to use. For example, the disaster responding applications might not be flexible enough to have mislabeled data in the training since it
[56:53] might bring additional noise to the models. However, when dealing with other types of simple classifications, we might be able to
[57:01] consolidate or even be okay with some mislabeled data that we can then maybe downsize on our actual
[57:09] training data set. Thus, the quality of the labeling data is going to be really a factor of to
[57:16] account for depending on your application. Now, is there any labeling data available out there? Like are there any crowd-sourced labels that
[57:25] you might be able to leverage into your problem? Can you use labels that other people have created for your own
[57:31] application? Let's say that you have labels labels someone created at 2-m resolution and you need those labels at 10-m. Well, you
[57:38] might be able to upsample your observations to then get them into the grid that you might need for your own
[57:44] application. application. The last question that we have and which is really important depending on the problem is how much budget do you have
[57:51] to invest in training data? Maybe your project didn't have any budget to invest on creating train data because it just
[57:58] takes times. It takes money to actually get the training data, get the observers to quantify some of these. Or you might
[58:05] need to then use unsupervised methods to try to account for the lack of training data. data. One
[58:13] One technique that you can use for let's say doing unsupervised labeling of data is using clustering algorithms. And here
[58:21] I'm going to I'm going to introduce one of them, which is the K-means clustering algorithm, but it's basically the
[58:26] foundation for other clustering algorithms that are similarly out there. The main idea of clustering algorithms is that we provide a K number of
[58:35] clusters that we're going to be dividing our data into. And where all of the other algorithms kind of differentiate
[58:42] from K-means is how they calculate distance between our groups, how they calculate the centroids that we're going
[58:47] to be clustering our data into. The main idea here is that we're going to have let's say bucket of points of
[58:53] our data that the algorithm is going to one, look at it, two, calculate centroids of distance across them, and then randomly initiate
[59:05] some of these clusters across the data. This can provide based on the data set good options to visualize or to even
[59:12] segregate some of the observations. We might even be able to identify outliers in our data set that can help us
[59:19] understand how our data is looking at like for the specific application. Even taking it further, we can
[59:28] observe how we can perform some K-means clustering simply by using the scikit-learn library. For example, we here select the number of clusters that
[59:36] we want to do. We then take and download specific bands from our raster. And then we go ahead and perform a fit
[59:45] operation of our data set, which in this case is allowing the model to learn or to iterate across the data.
[59:53] Once we have fitted our algorithm, we can then proceed to perform any predictions. predictions. And then since we were using the data
[1:00:01] set tabular format, we can just reshape it back into our raster data. An example is in here where we have one,
[1:00:09] the imagery that was input to the K-means cluster, and also the output of that K-means cluster, which in
[1:00:15] this case are a group of four clusters across the raster. If we look into more detail across it,
[1:00:24] we can see how these four groups are being classified in this cluster. Note that there's extremely a lot of noise,
[1:00:32] and the lake in here that is in the middle, which is like Powell, is not really well segmented through K-means.
[1:00:40] Now, one of those masks actually gathered all of the pixels from Lake Powell into a single cluster.
[1:00:46] The downside of this is that we also have noise from other features that were not water pixels. That being said, said,
[1:00:54] this can be a good start for creating the labeling points. Now, instead of having to manually label each one of the
[1:01:00] pixels from Lake Powell, you can use this as a starting point, and then disaggregate some of these clusters to
[1:01:06] then create, let's say, the ground truth map that you might need to train other models that might be on an unsupervised
[1:01:12] fashion. fashion. Okay. So, now let's just discuss some of these these algorithms and at least some of the
[1:01:19] basics. The first one that we have is the random forest. And the basics of random forest is that
[1:01:25] we have n observations, and we have a target variable that we want to match based on those observations.
[1:01:33] The idea is that we're going to create independent trees that are going to be then aggregated at the end, and we're
[1:01:40] going to get or a majority score or the average of those independent trees. trees. The idea of how these independent trees
[1:01:49] are aggregated is that we do a bootstrapping technique, which is basically creating additional training data sets from the initial,
[1:01:58] let's say, training data set that we provide in the model. So, we have multiple observations that we're going
[1:02:03] to be be then creating independent trees, and each one of those trees are going to gather a particular decision.
[1:02:10] At the end, the trees that have the majority or the majority rule is applied to all of the
[1:02:15] trees, and we get the classification or the regression value that we want. One of the downsides of random forest is
[1:02:23] that generally, they don't generalize very well because they need to use or they need to have decisions that are
[1:02:30] supported by individual features. If your feature engineering process was not good enough, then your models might not be able to generalize across
[1:02:39] different samples that the model hasn't seen. seen. Here we present a simple way of applying a random forest classifier, and we're
[1:02:46] going to deep dive a bit more on other sessions. sessions. So, next we have the XGBoost. The XG
[1:02:54] XGBoost takes the ensemble or tree ensemble as the random forest to the next level. In here, instead of taking
[1:03:01] each one of the trees as a single observation, each one of them weighted at the same way, in this case we prioritize the
[1:03:11] trees or the observations where our ensemble failed on. The trees and observations that need or require additional training on.
[1:03:20] And the idea is that we use a mini minimization function where we kind of penalize our model
[1:03:27] based on observations that were missing. So, we do have the same option of having multiple trees, but then the way we
[1:03:34] approach retraining the trees is based on a weighted function where we take gradient descent calculation to improve on this. And the basic of
[1:03:45] gradient descent is that is basically just a strategy of missing minimizing that cost function or minimizing that
[1:03:50] error between the predicted values from those trees by doing many iterations on the data. Another nice thing about this compared
[1:04:00] to the random forest is that we can use what are called regularization techniques across the XGBoost. So, we
[1:04:07] can try to avoid overfitting by penalizing the model when we see that it's actually overfitting in some of
[1:04:13] these observations. A simple example of how to implement the XGBoost is also in here. And note that
[1:04:21] the basic approach is the same. We have three operations that we need to do where we fit the model and then perform
[1:04:27] the predictions, very similarly to the other two that we already discussed. Another application or another algorithms are the neural networks. And
[1:04:36] in this case, we are kind of moving towards a more complex algorithm that then requires more training data to work
[1:04:44] from. from. And the main idea here is that we use, instead of decision trees or instead of
[1:04:50] like a structured decision, we allow our model or algorithm to learn features out of the data. So, instead of spending a lot of time in
[1:04:58] the feature engineering process to differentiate representative training from other non-representative training and find generalization, in this case,
[1:05:09] we're actually allowing the model to learn the patterns by itself. And this is done by a process of
[1:05:16] forward propagation and back propagation. And the idea is that the model, model, let's say, penalizes each one of these
[1:05:23] locations or decisions that the model is doing, and then it relearns what is happening or the features that are being
[1:05:31] misclassified, and goes again and iterates over the process on and on and on. on. And the idea here is that we're going to
[1:05:38] be mimicking, let's say, the human brain by having multiple neurons that are extremely connected, and based on
[1:05:45] weights or based on values that we have on each neuron, we're going to be able to then click on and off for each one of
[1:05:52] the patterns or each one of the features that we're we're going to be learning from. Below this, we also have kind of an
[1:06:00] example of how to implement some of this. And note that this is basically the same approach that
[1:06:06] we had before, just by adding one more step, which in this case would be the compilation. compilation. And again, we don't dive into many
[1:06:13] details in here, but this can provide you with the base to think about your problem and then go
[1:06:18] from there. The three algorithms that we just mentioned, they're basically pixel-based algorithms or algorithms that didn't take into account the neighborhood of
[1:06:27] those pixels. For that, we have convolutional neural networks. And the main idea of convolutional neural networks is
[1:06:33] basically having also the neural approach where each one of those neurons are connected, but we include the convolution piece into the model.
[1:06:43] And the idea of convolutions is that we're going to both take the spectral response or the value of that individual
[1:06:49] pixel, but we are also going to calculate values across the neighborhood of that pixel to take into account the
[1:06:55] spatial characteristics of it. And this is really useful, let's say, for applications where you actually care about the neighborhood of the individual
[1:07:03] pixel in order to get the prediction of it. Let's say, for example, you want to classify if a tree
[1:07:10] is actually a tree or not, you might be able to hit on a, let's say, the middle
[1:07:14] point of the crown, but a CNN would allow you to learn that this is a tree by looking at that
[1:07:19] individual crown pixel, but also its boundaries. boundaries. Okay. So, as some closing thoughts, we have introduced some of the basics of
[1:07:28] these algorithms. We have provided some of the foundations of how to look for characteristics in these individual
[1:07:35] algorithms and how they play a role when deciding which one to use. We have also discussed some of the
[1:07:41] basics of looking at the data and understanding the data in order to choose the actual algorithm. And we have also discussed on some of
[1:07:50] the techniques to better choose the initial algorithm without having to stick with that specific algorithm across the development
[1:07:59] process. And making it clear that you can start with a single algorithm, but you can also change the same algorithm
[1:08:05] by simply doing some simple code changes. Thank you very much for listening in. Just a couple of remarks, remember that
[1:08:24] you have an assignment for this week. Please make sure to look at it. You're going to If you go to the actual GitHub
[1:08:30] repository, you're going to see that there is assignment section one. Click on the open Google Colab option
[1:08:36] and follow the instructions from the assignment, and you're going to just going to be pointed out some questions
[1:08:41] after the assignment to get more experience and and practices as across the the topic we included in here.
[1:08:50] So, now, Brooke, please feel free to continue on. Thank you very much, Jordan. Before we open it up to address your
[1:08:58] questions, let's review what we did here today. today. Through the overview of machine learning, we're able to identify the
[1:09:04] importance and utility of machine learning targeted towards Earth science. We covered software to support machine learning, machine learning applications,
[1:09:13] and ended with a hands-on Jupyter notebook exercises or an exercise showing how to load and visualize that
[1:09:20] data. We hope that after this part one, you are able to recognize the most common machine learning methods used for processing
[1:09:27] Earth science data. Describe the benefits and limitations, um and then explain how to apply the basic machine learning algorithms and
[1:09:35] techniques in a meaningful manner. Looking ahead to part two next week, we'll be covering training data and a
[1:09:43] land cover classification example. We'll do this by downloading and exploring training data, extracting that training data, model evaluation,
[1:09:53] and another Jupiter notebook exercise on a MODIS water classification case study. So, look forward to that next week.
[1:10:01] If you have any further questions, you can contact myself or my ARSET colleagues at our email addresses here. As a
[1:10:10] reminder, here is a course website where you can find all the materials, including the PDF of the PowerPoint
[1:10:16] presentation and the recording of the video that will be uploaded shortly. The homework link can be avail- will be
[1:10:23] available on the course website during the final session, so or the final part on May 4th. And I've also included our primary ARSET
[1:10:32] website where you can check out all the great trainings and follow us on Twitter for exciting announce- announcements
[1:10:38] from NASA's Earth sciences. So, now we'll enter into the question and answer period. Please enter your question in the
[1:10:46] question box. We'll answer them in the order that they were received. As a reminder, all questions asked
[1:10:54] previously have been moved over to this Q&A document and we'll provide that as a PDF on our training webpage within about
[1:11:01] a week for you to download. Thank you. Okay, we will open up our question and answer session now. Thank you for
[1:11:13] sending in your questions and please keep them coming. So, we have been moving these over throughout the presentation
[1:11:23] and um we'll start addressing these one by one. Just going to make this a little bit bigger for
[1:11:32] everybody. Okay. Okay. All right, so uh I'll just start with question one. What counts as very loud large numbers?
[1:11:45] And I believe this was part of the presentation that Jian was giving. Um what counts as very large numbers for
[1:11:51] the comments about R versus Python? Millions, billions, or trillions? I'm not sure if Jordan or Jian you
[1:12:00] wanted to uh address this, you can unmute your mic. Sure. Actually, by very large number, I mean mathematically mathematically
[1:12:11] large. For instance, R provided package called GMP that can help to calculate the the uh uh simple equation like if n equals 10 to
[1:12:23] the two 250, then then what what if n square will be? Uh instead of return infinity, R with
[1:12:33] GMP can provide the correct answer of 10 to the 500. Uh this is just like a minor advantage.
[1:12:42] Uh the most important strength or advantage of R is its capability of building statistic model. And that's why
[1:12:50] many people still choosing R as their machine learning tool because most of machine learning uh algorithms are
[1:12:59] are basically statistics and there are provided vast packages vast amount of packages for statistic computing. That's uh
[1:13:09] uh that's a main attractive attractive points of R language. Thank you. Yeah, and that last point, very important.
[1:13:19] Thank you. Question two, are there any case studies where a hybrid method is used? Um are data driven and model
[1:13:28] are data driven and model drives applied at the same time? And at which level can we use each one
[1:13:34] in the same process? Uh it looks like you have some answers here. Um Um Whoever feels comfortable speaking to
[1:13:43] this or filled in most of it, please feel free. I can probably speak on that. Um So, there are actually many cases where
[1:13:52] you can use kind of a hybrid method between model driven and data driven uh applications and some of these techniques are actually
[1:14:00] called physics informed models or knowledge informed models in machine learning. learning. And the idea is that you have cases
[1:14:07] where you have your data driven model that can be informed by some equations from the physics side of things.
[1:14:14] Um you can also have applications where the data driven models are used used for one task and then your model driven
[1:14:22] model is kind of like used for a downstream task. And and even vice versa, you can start with one and then
[1:14:28] end your workflow with another. Um there are actually kind of no specifics on where to use one over the
[1:14:33] other. other. So, my recommendation would be like if you have the data available to train the data driven model, you can always rely
[1:14:39] on it and then validate with some of the model driven data. Most of these machine learning based model, they they will be
[1:14:47] they'll have better performance, so be faster uh than some of these model driven, but it can also be um kind of the other
[1:14:54] way depending on your task. Uh another thing is that you could accelerate some of the synthetic training
[1:15:00] training training data generation um by using some of these model driven to generate some of these synthetic
[1:15:05] training data. And then there are also some use cases where people use machine learning methods to kind of do feature selection
[1:15:13] or parameter tuning on those um data driven models. So, it's kind of taking the the advantage of kind of the potential speed
[1:15:20] of machine learning to then boost some of those model driven or physics based models. Um we added one reference there
[1:15:27] that you can kind of look at later. Yes, thank you very much for that reference and I I pointed or I put that
[1:15:35] link in the chat, so people can have that. We'll also uh have this available on the training
[1:15:42] webpage in about a week. Uh question three, three, how is the trade-off between speed and accuracy determined for the models shown
[1:15:49] in figure slide 36? How do you define accuracy here? here? So, slide 36 was kind of a simplistic
[1:16:00] simp- simply simple approach to kind of defining that trade-off. And accuracy can be any metric on your end
[1:16:08] and this is something that is really like use case um on a use case basis, but the idea is
[1:16:14] that accuracy would be kind of that equation or that um metric that you want your model to
[1:16:19] improve on or to kind of be better on. And like accuracy can be either just plain accuracy or kind of the average
[1:16:26] approach, it can be precision, it can be even recall. Um Um it can be a metric of your own just
[1:16:33] trying to minimize that loss error. Um but then that trade-off between speed and accuracy is going to depend on how
[1:16:41] many observations you need per second or how many um let's say how many things you need process on X
[1:16:49] number of time and many of these simple algorithms like logistic regression, they're really fast, but normally they just don't
[1:16:56] generalize on data they haven't seen they haven't seen before. Um so, that's kind of where the the
[1:17:01] trade-off is at. Thank you. And question four, can we use the random forest model to find crop water use?
[1:17:13] I'll I'll I'll take that one. Um so, basically, I mean if you have a if you have something you want to
[1:17:21] predict, if you have training for that, if you have labeled training for that, then in theory, you can try to train a
[1:17:28] model to predict it using some set of input predictors. Uh the skill at which you'll be able to
[1:17:35] predict, you know, crop water use for example, is going to depend on the quality of your training labels
[1:17:42] and the the ability of the the predictor stack stack to tell you to predict that particular feature, in
[1:17:49] this case crop water use. Thank you. Yeah, no, I and that is a good point to to make there that
[1:18:01] these models they they do their function, but it really is how what how are you defining your problem? And if you have all the
[1:18:09] the right data going in, uh in theory, it should should be uh useful for that. Um question five,
[1:18:17] Oh, wait. How do you choose the number of clusters? Um I'll take a stab at that one, too.
[1:18:24] I'm I'm assuming they're talking about K-means clusters here and it really depends on your question. So, you can have, you know, there is an
[1:18:33] upper limit on how many you can uh you can set based on the the software. Thank you. And uh part uh question six,
[1:18:52] could you please explain how K-means is supervised? I can just speak to that one, then. Um so, K-means is is not dependent on any
[1:19:12] labels. You can input your data into the algorithm and you're going to get kind of a distance
[1:19:19] metric from that specific data. It's it's to be looking at what features from your data are similar
[1:19:24] and then which what features are kind of like different or or even outliers that I've been going to be clusterizing all
[1:19:30] the locations. So, you don't need any training data to perform this K-means clustering and you can even use it for like some
[1:19:37] classification task. All right, thank you. Question seven, why does random forest not work well when doing a cross
[1:19:47] validation? So, I'm not sure if I understood that question correctly, but I'm just going to try to aim for
[1:20:04] um um Cross-validation is a second step that is done, let's say, during training or even trying to do some of the validation
[1:20:13] of your model to see how it can generalize across multiple sets of training data. So, random forest can be used with
[1:20:21] cross-validation and some of those techniques can be even like K-fold cross-validation which we're going to discuss on the section two.
[1:20:28] Um Um So, it's not that it doesn't work with cross-validation, it just have some let's say, downsides where
[1:20:35] it is only going to be able to kind of classify or perform well on data that it
[1:20:40] has seen or at least representative training. training. So, it might not be able to generalize very well on other things just because
[1:20:47] features that it's learning are based on the training data that you input. Um Thank you. No, I think that that
[1:20:57] hopefully got to the heart of what this participant was asking. But, please pay attention to part two
[1:21:05] next week where we're going to go a little bit deeper into that. Question eight, when we use algorithms
[1:21:11] such as random forest or tree decision, we have different inputs for the model. Is it advisable to do a preliminary
[1:21:17] analysis to avoid collinearity or is the algorithm able to manage that? Okay, I'm going to take a stab at that
[1:21:34] one as well. So, it's always good to not even you might not need to go into collinearity that much, but at least do
[1:21:42] exploratory data analysis of how your data looks like and then how are your features aligned based on the
[1:21:49] features that you're trying to find or that you're trying to classify. Um the idea here is that with
[1:21:55] exploratory data analysis, which we're also going to discuss in session two, you can find what features from your
[1:22:01] data are similar enough to know how the model is going to respond or how the model is going to be
[1:22:05] learning from those features. So, we do advise always to do exploratory data analysis. One, for yourself to kind of understand how your
[1:22:14] data looks like and to see if there are any like correlations between the data, but two also to kind of have a heads up
[1:22:20] of how the model is going to be learning the features from your data. Thank you very much.
[1:22:28] Okay, question nine. We have three-parter here. I have three questions. What are the possible solutions solutions if the number of samples of the
[1:22:37] classified class is unequal? Two, what is the overfitting problem? I don't know if you just want to attach
[1:22:45] attack the first couple parts of this one. Okay, there there are several ways of attacking some of these
[1:22:54] problems. So, just going to briefly start talking about number nine. Uh So, So, number of samples is unequal. So, there
[1:23:03] are many ways of doing this. First of all is you can try to drop some of your
[1:23:07] features from the data, let's say, of the class that you have the most and then make like try to make it
[1:23:13] balance between them. And this would be fine for some of these like tabular algorithms like random forest or
[1:23:19] XGBoost. XGBoost. You can also try to increase the number of features you have from your underrepresented underrepresented class or data by just increasing the
[1:23:28] number of like observations you have by just like doing synthetic synthetic data creation or even like doing data
[1:23:37] augmentation to increase the number of features. features. There is another solution for other like more complicated methods like neural
[1:23:43] networks where you can use a loss function or the function that is going to penalize your model while learning to then account for
[1:23:51] that class imbalance as well. So, there are there are many techniques. We can just append some references to these
[1:23:56] questions just to like so you can look at look at them later. Um and we're going to probably discuss
[1:24:02] some of those on session two as well. Thank you. Question 10, do you have any additional machine learning references that would
[1:24:11] be helpful to read or use, particularly in the wide variety of algorithms and their uses? And it looks like we have a couple.
[1:24:22] We have a Coursera's course which is open. So I'm just going to put that in the chat. Uh we also have a couple books. We
[1:24:31] will add some more to this as we come up with them. But, for now I'm just kind of placing
[1:24:37] these in the chat and I'll look for these these links to be available to you uh when we
[1:24:42] post this to the training web page. Okay, question 11. When I try to change the runtime type, the hardware
[1:24:49] accelerators are already set to GPU and the GPU class is standard. Is that correct? Does that sound
[1:24:57] Yes, and this is regarding assignment one and the session that is in there. Yes, what you want to have is that
[1:25:04] particular option. You don't need to purchase any premium GPUs. All you need to do is change your runtime type to
[1:25:11] have the GPU. If your your runtime type is already on GPU, then that's fine. You can just proceed to run some of the
[1:25:17] cells and make sure to kind of follow some of the instructions that are above the cells cuz you're going to need to do
[1:25:24] kind of press play on some cells before you can just proceed with the entirety of the exercise.
[1:25:33] Great, thank you and I hope everybody has has had a chance to access the the link to
[1:25:39] the GitHub that also takes you to all the notebooks. We have that on the training web page and we'll be placing
[1:25:45] that in the chat. So, you have it's also included in the presentation itself. Question 12, what do you think are the
[1:25:52] downsides of machine learning as regards to dry as regards to land change science knowing that natural and anthropogenic
[1:26:00] activities are dynamic? More of a theoretical type of Yeah, that is an interesting question. So, many of the downsides of machine
[1:26:10] learning are based on what data do we have available. And the model is going to be probably as
[1:26:16] good as the data that you actually provide and it's going to try to infer or extract features out of the
[1:26:22] data, data, but sometimes the features that it it extracts are just like too simple to kind of model the actual anthropogenic
[1:26:31] activities or even like the dynamic realm of our atmosphere even Earth. So, I think that the the biggest
[1:26:37] downside is going to be how much data or how representative data we can input our model with so it can learn those kind of
[1:26:46] different different characteristics or or different aspects of what we're trying to model in our model. Yeah. Okay, we have a couple minutes left, so
[1:27:01] I think we might just take this question number 13 and close it out for today. However, we have been collecting your
[1:27:08] questions and we will do our best to address these before we post to our training web page.
[1:27:15] Question 13, I'm trying to work with atmospheric phenomenon forecasts and predictions. predictions. What should guide my choice of training
[1:27:21] data, reanalysis data or forecasts of numerical weather prediction models? Okay, so that guidance and your choice of data is
[1:27:33] going to be based both on your temporal resolution, but also on your spatial resolution. resolution. So, it would actually depend on how
[1:27:41] temporal specific and how spatial specific your model is going to be to then select that training data. For
[1:27:47] example, um I've seen some forecasting models that would rely on some synthetic data generated from like the weather
[1:27:54] forecasting model. And those models they're going to kind of depend on some of the NOAA GFS models
[1:28:01] that do some of the forecasting and some of those are like one 1 km half degree resolution at the most.
[1:28:09] Uh so, whatever training data you're looking for is going to depend also on your area of study. There are some
[1:28:16] studies of how biased some of these models are depending on the actual study area you're concentrating on. So, if
[1:28:22] this is globally related, you're you're going to need to look at what are the bias of these existing
[1:28:27] um training data sets that are out there um to see how specific it would be or how how much how what is going to be the
[1:28:33] quality of the training data you're going to be looking for. Uh the also other part of your question is can we
[1:28:40] also take real-time observations available for a short period of time? And yeah, and that is of course. Um you
[1:28:45] can also have um training data that is going to be um close to real-time just to do some of the forecasting. You can
[1:28:52] go from like minutes to hours to even like do 10-day forecast just by choosing whatever um temporal resolution you're
[1:29:00] going to need for your specific use case. And I I can add one sentence for that real-time
[1:29:09] observation for validation. Please keep in mind that even the real-time observation is not fully truth. There are still uncertainty located in the
[1:29:18] real-time observations. If If it's on ground observations, there's a human-induced errors. If it's remote sensing, maybe we have
[1:29:28] retrieval retrieval errors occurred when we processing the remote sensing data. So, keep in mind that real-time observation is not fully
[1:29:36] truth. Okay, thank you. Okay, so we are going to close this out for today. I thank you everybody for
[1:29:46] attending. attending. We are going to pick this back up next week for part two. Please take a look at
[1:29:53] the the code, the notebooks, and the the assignment that's in the in the GitHub. And those assignment questions
[1:30:02] use those to think about the the code and explore it. We will have a Google form available at
[1:30:12] the end of the training on May 4th. Um that will contain these questions in for you to submit your answers, which
[1:30:18] will lead to a certificate of completion, which is attending all three trainings, all three parts, of course, and submitting the
[1:30:26] training training homework. homework. So, with that, um I just want to leave it to Jordan or Mark or Jules or Jean,
[1:30:35] if you have anything that you wanted to say to the participants here today, please feel free. No, just thank you very much for
[1:30:44] attending, and hopefully we do some more exciting things on session two and three. three. We certainly will. Okay, uh
[1:30:53] thank you, and enjoy the rest of your day, everybody.
